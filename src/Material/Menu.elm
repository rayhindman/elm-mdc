module Material.Menu exposing
    ( anchorCorner
    , anchorMargin
    , attach
    , bottomEndCorner
    , bottomLeftCorner
    , bottomRightCorner
    , bottomStartCorner
    , connect
    , Corner
    , defaultModel
    , divider
    , index
    , Item
    , li
    , Margin
    , menu
    , Model
    , onSelect
    , Property
    , quickOpen
    , react
    , subs
    , subscriptions
    , topEndCorner
    , topLeftCorner
    , topRightCorner
    , topStartCorner
    , ul
    , update
    , view
    )

{-|
The MDC Menu component is a spec-aligned menu component adhering to the
Material Design menu specification.


# Resources
- [Material Design guidelines: Menus](https://material.io/guidelines/components/menus.html)
- [Demo](https://aforemny.github.io/elm-mdc/#menu)


# Example

```elm
Options.styled Html.div
[ Options.cs "mdc-menu-anchor"
, Options.css "position" "relative"
]
[ Button.view Mdc [0] model.mdc
      [ Menu.attach (lift << Mdc) [1]
      ]
      [ text "Show"
      ]
, Menu.render Mdc [1] model.mdc []
      [ Menu.ul []
            [ Menu.li
                  [ Menu.onSelect (Select "Item 1")
                  ]
                  [ text "Item 1"
                  ]
            , Menu.li
                  [ Menu.onSelect (Select "Item 2")
                  ]
                  [ text "Item 2"
                  ]
            ]
      ]
]
```


# Usage
@docs Property
@docs view
@docs ul
@docs Item
@docs li
@docs divider
@docs onSelect
@docs index
@docs attach
@docs anchorCorner
@docs Corner
@docs topStartCorner
@docs topEndCorner
@docs bottomStartCorner
@docs bottomEndCorner
@docs topLeftCorner
@docs topRightCorner
@docs bottomLeftCorner
@docs bottomRightCorner
@docs anchorMargin
@docs Margin
@docs quickOpen


# Internal
@docs react
@docs update
@docs Model, defaultModel
@docs subscriptions
@docs connect
@docs menu
@docs subs
-}

import DOM
import Html.Attributes as Html
import Html.Events as Html
import Html exposing (..)
import Json.Decode as Json exposing (Decoder)
import Material.Component as Component exposing (Indexed)
import Material.GlobalEvents as GlobalEvents
import Material.Helpers as Helpers
import Material.Internal.Dispatch as Dispatch
import Material.Internal.Menu exposing (Msg(..), KeyCode, Key, Meta, Geometry, defaultGeometry, Viewport)
import Material.Internal.Options as Internal
import Material.List as Lists
import Material.Msg exposing (Index) 
import Material.Options as Options exposing (cs, css, styled, when)
import Mouse
import Time


{-| Menu subscriptions.

Internal use only.
-}
subscriptions : Model -> Sub (Msg m)
subscriptions model =
    Sub.batch
    [
      if model.open then
        Mouse.clicks (\ _ -> DocumentClick)
      else
        Sub.none
    ]


{-| Menu model.

Internal use only.
-}
type alias Model =
    { index : Maybe Int
    , open : Bool
    , animating : Bool
    , geometry : Maybe Geometry
    , quickOpen : Maybe Bool
    , focusedItemAtIndex : Maybe Int
    , keyDownWithinMenu : Bool
    }


{-| Menu default model.

Internal use only.
-}
defaultModel : Model
defaultModel =
    { index = Nothing
    , open = False
    , animating = False
    , geometry = Nothing
    , quickOpen = Nothing
    , focusedItemAtIndex = Nothing
    , keyDownWithinMenu = False
    }


{-| Menu item.
-}
type alias Item m =
    { options : List (Lists.Property m)
    , childs : List (Html m)
    , divider : Bool
    }


{-| Menu item wrapper.
-}
li : List (Lists.Property m) -> List (Html m) -> Item m
li options childs =
    { options = options, childs = childs, divider = False }



{-| Menu item divider.
-}
divider : List (Lists.Property m) -> List (Html m) -> Item m
divider options childs =
    { options = options, childs = childs, divider = True }


type alias Menu m =
    { options: List (Lists.Property m)
    , items : List (Item m)
    }


{-| Menu items wrapper.
-}
ul : List (Lists.Property m) -> List (Item m) -> Menu m
ul options items =
    { options = options, items = items }


{-| Component property to attach the menu.
-}
attach : (Material.Msg.Msg m -> m) -> Index -> Options.Property c m
attach lift idx =
    Options.onClick (lift (Material.Msg.MenuMsg idx Toggle))


{-| Component property to attach the menu.

Internal use only.
-}
connect : (Material.Internal.Menu.Msg m -> m) -> Options.Property c m
connect lift =
    Options.onClick (lift Toggle)


{-| Menu update.

Internal use only.
-}
update : (Msg msg -> msg) -> Msg msg -> Model -> ( Maybe Model, Cmd msg )
update lift msg model =
    case msg of

        NoOp ->
            ( Nothing, Cmd.none )

        Toggle ->
            update lift (if model.open then Close else Open) model

        Open ->
            let
                quickOpen =
                    Maybe.withDefault False model.quickOpen
            in
            if not model.open then
                (
                  Just
                  { model
                    | open = True
                    , animating = True
                    , geometry = Nothing
                  }
                ,
                  if not quickOpen then
                      Helpers.delay (120*Time.millisecond) (lift AnimationEnd)
                  else
                      Helpers.cmd (lift AnimationEnd)
                )
            else
                ( Nothing, Cmd.none )

        Close ->
            let
                quickOpen =
                    Maybe.withDefault False model.quickOpen
            in
            if model.open then
                (
                  Just
                  { model
                    | open = False
                    , animating = True
                    , quickOpen = Nothing
                    , focusedItemAtIndex = Nothing
                  }
                ,
                  if not quickOpen then
                      Helpers.delay (70*Time.millisecond) (lift AnimationEnd)
                  else
                      Helpers.cmd (lift AnimationEnd)
                )
            else
                ( Nothing, Cmd.none )

        CloseDelayed ->
            ( Nothing, Helpers.delay (50*Time.millisecond) (lift Close) )

        Init { quickOpen } geometry ->
            ( Just
              { model
                | geometry = Just geometry
                , quickOpen = Just quickOpen
              }
            ,
              Cmd.none
            )

        AnimationEnd ->
            ( Just { model | animating = False }, Cmd.none )

        DocumentClick ->
            if model.open then
                update lift Close model
            else
                ( Nothing, Cmd.none )

        KeyDown numItems { shiftKey, altKey, ctrlKey, metaKey } key keyCode ->
            let
                isTab =
                    key == "Tab" || keyCode == 9

                isArrowUp =
                    key == "ArrowUp" || keyCode == 38

                isArrowDown =
                    key == "ArrowDown" || keyCode == 40

                isSpace =
                    key == "Space" || keyCode == 32

                isEnter =
                    key == "Enter" || keyCode == 13

                lastItemIndex =
                    numItems - 1

                keyDownWithinMenu =
                    isEnter || isSpace

                focusedItemIndex =
                    model.focusedItemAtIndex
                    |> Maybe.withDefault 0
            in
            ( if altKey || ctrlKey || metaKey then
                  ( Nothing, Cmd.none )
              else
                  if isArrowUp then
                      ( Just <|
                        if focusedItemIndex == 0 then
                            { model | focusedItemAtIndex = Just lastItemIndex }
                        else
                            { model | focusedItemAtIndex = Just (focusedItemIndex - 1) }
                      ,
                        Cmd.none
                      )
                  else if isArrowDown then
                      (
                        Just <|
                        if focusedItemIndex == lastItemIndex then
                            { model | focusedItemAtIndex = Just 0 }
                        else
                            { model | focusedItemAtIndex = Just (focusedItemIndex + 1) }
                      ,
                        Cmd.none
                      )
                  else if isSpace || isEnter then
                      ( Just model, Cmd.none )
                  else
                      ( Nothing, Cmd.none )
            )
            |> Tuple.mapFirst (Maybe.map (\ model ->
                   { model | keyDownWithinMenu = keyDownWithinMenu }
               ))

        KeyUp { shiftKey, altKey, ctrlKey, metaKey } key keyCode ->
            let
                isEscape =
                    key == "Escape" || keyCode == 27

                isSpace =
                    key == "Space" || keyCode == 32

                isEnter =
                    key == "Enter" || keyCode == 13
            in
            ( if altKey || ctrlKey || metaKey then
                  ( Nothing, Cmd.none )
              else if isEscape || ((isSpace || isEnter) && model.keyDownWithinMenu) then
                  update lift Close model
              else
                  ( Nothing, Cmd.none )
            )
            |> Tuple.mapFirst (Maybe.map (\ model ->
                   if (isEnter || isSpace) && model.keyDownWithinMenu then
                       { model | keyDownWithinMenu = False }
                   else
                       model
               ))

        SetFocus focusedItemAtIndex ->
            ( Just { model | focusedItemAtIndex = Just focusedItemAtIndex }, Cmd.none )


type alias Config =
    { index : Maybe Int
    , open : Bool
    , anchorCorner : Corner
    , anchorMargin : Margin
    , quickOpen : Bool
    }


defaultConfig : Config
defaultConfig =
    { index = Nothing
    , open = False
    , anchorCorner = topLeftCorner
    , anchorMargin = defaultMargin
    , quickOpen = False
    }


{-| Menu margin from `anchorCorner`.

Defaults to zero margin.
-}
type alias Margin =
    { top : Float
    , left : Float
    , bottom : Float
    , right : Float
    }


defaultMargin : Margin
defaultMargin =
    { top = 0
    , left = 0
    , bottom = 0
    , right = 0
    }


{-| Menu property.
-}
type alias Property m =
    Options.Property Config m


{-| Specify the menu item that has focus when the menu opens.
-}
index : Int -> Property m
index index =
    Internal.option (\config -> { config | index = Just index })


{-| Hint to anchor the menu if space is available.

The menu will auto-position itself if not enough space is available. Prefer
RTL-aware corners when possible.
-}
anchorCorner : Corner -> Property m
anchorCorner anchorCorner =
    Internal.option (\ config -> { config | anchorCorner = anchorCorner })


{-| Set the menu's margin from the specified `anchorCorner`.
-}
anchorMargin : Margin -> Property m
anchorMargin anchorMargin =
    Internal.option (\ config -> { config | anchorMargin = anchorMargin })


{-| Open the menu without an animation.
-}
quickOpen : Property m
quickOpen =
    Internal.option (\ config -> { config | quickOpen = True })


{-| Menu view function.

Internal use only.
-}
menu
    : (Msg m -> m)
    -> Model
    -> List (Property m)
    -> Menu m
    -> Html m
menu lift model options ul =
    let
        ({ config } as summary) =
            Internal.collect defaultConfig options

        geometry =
            Maybe.withDefault defaultGeometry model.geometry

        { position, transformOrigin, maxHeight } =
            autoPosition config geometry

        -- Note: .mdc-menu--open has to be added one frame after
        -- .mdc-menu--animating-open has been set:
        isOpen =
            if model.animating then
                model.open && (model.geometry /= Nothing)
            else
                model.open

        focusedItemAtIndex =
            model.focusedItemAtIndex

        numDividersBeforeIndex i =
            ul.items
            |> List.take (i + 1)
            |> List.filter .divider
            |> List.length

        numItems =
            ul.items
            |> List.filter (not << .divider)
            |> List.length

        preventDefaultOnKeyDown { altKey, ctrlKey, metaKey, shiftKey } key keyCode =
            let
                isTab =
                    key == "Tab" || keyCode == 9

                isArrowUp =
                    key == "ArrowUp" || keyCode == 38

                isArrowDown =
                    key == "ArrowDown" || keyCode == 40

                isSpace =
                    key == "Space" || keyCode == 32

                lastItemIndex =
                    numItems - 1
            in
            if altKey || ctrlKey || metaKey then
                Json.fail ""
            else if shiftKey && isTab
                && (Maybe.withDefault 0 focusedItemAtIndex == lastItemIndex) then
                Json.succeed (lift NoOp)
            else if isArrowUp || isArrowDown || isSpace then
                Json.succeed (lift NoOp)
            else
                Json.fail ""
    in
    Internal.apply summary
    div
    [ cs "mdc-menu"
    ,
      when (model.animating && not (Maybe.withDefault False model.quickOpen)) <|
      if model.open then
          cs "mdc-menu--animating-open"
      else
          cs "mdc-menu--animating-closed"
    ,
      when isOpen << Options.many <|
      [
        cs "mdc-menu--open" |> when isOpen
      , Options.data "focustrap" ""
      , Options.onWithOptions
          "click" 
          { stopPropagation = True
          , preventDefault = False
          }
          (Json.succeed (lift (CloseDelayed)))
      ]
    ,
      when (isOpen || model.animating) << Options.many <|
      [
        css "position" "absolute"
      , css "transform-origin" transformOrigin
      , css "top" (Maybe.withDefault "" position.top)
        |> when (position.top /= Nothing)
      , css "left" (Maybe.withDefault "" position.left)
        |> when (position.left /= Nothing)
      , css "bottom" (Maybe.withDefault "" position.bottom)
        |> when (position.bottom /= Nothing)
      , css "right" (Maybe.withDefault "" position.right)
        |> when (position.right /= Nothing)
      , css "max-height" maxHeight
      ]
    ,
      when (model.animating && model.geometry == Nothing) <|
      GlobalEvents.onTick <|
      Json.map (lift << Init { quickOpen = config.quickOpen }) decodeGeometry
    ,
      Options.on "keyup" <| Json.map lift <|
      Json.map3 KeyUp decodeMeta decodeKey decodeKeyCode
    ,
      let
          numItems =
              ul.items
              |> List.filter (not << .divider)
              |> List.length
      in
      Options.on "keydown" <| Json.map lift <|
      Json.map3 (KeyDown numItems) decodeMeta decodeKey decodeKeyCode
    ]
    []
    [ Lists.ul
      ( cs "mdc-menu__items"
      :: ( Options.onWithOptions "keydown"
               { stopPropagation = False, preventDefault = True }
               ( Json.map3 preventDefaultOnKeyDown decodeMeta decodeKey decodeKeyCode
                 |> Json.andThen identity
               )
         )
      :: ul.options
      )
      ( List.indexedMap (\i item ->
             let
                 focusIndex =
                     i - numDividersBeforeIndex i

                 hasFocus =
                     Just focusIndex == focusedItemAtIndex

                 autoFocus =
                     if hasFocus && model.open then
                         Options.data "autofocus" ""
                     else
                         Options.nop

                 summary =
                     Internal.collect Lists.defaultConfig item.options
                     |> \ summary ->
                         if not model.keyDownWithinMenu then
                             let
                                 dispatch =
                                     summary.dispatch
                                     |> \ (Dispatch.Config ({ decoders } as dispatch)) ->
                                          Dispatch.Config
                                          { dispatch
                                            | decoders =
                                                  List.filter ((/=) "keyup" << Tuple.first)
                                                  decoders
                                          }
                             in
                             { summary | dispatch = dispatch }
                         else
                             summary
             in
             if item.divider then
                 Internal.apply summary Html.hr
                 [ cs "mdc-list-divider"
                 ]
                 []
                 item.childs
             else
                 Internal.apply summary Html.li
                 [ cs "mdc-list-item"
                 , Options.attribute (Html.attribute "tabindex" "0")
                 , Options.on "focus" (Json.succeed (lift (SetFocus focusIndex)))
                 , autoFocus
                 ]
                 []
                 item.childs
           )
           ul.items
      )
    ]


{-| One of the four corners.

Consider using RTL aware corners when possible.
-}
type alias Corner
    = { bottom : Bool
      , center : Bool
      , right : Bool
      , flipRtl : Bool
      }


{-| Top left corner.
-}
topLeftCorner : Corner
topLeftCorner =
    { bottom = False
    , center = False
    , right = False
    , flipRtl = False
    }


{-| Top right corner.
-}
topRightCorner : Corner
topRightCorner =
    { bottom = False
    , center = False
    , right = True
    , flipRtl = False
    }


{-| Bottom left corner.
-}
bottomLeftCorner : Corner
bottomLeftCorner =
    { bottom = True
    , center = False
    , right = False
    , flipRtl = False
    }


{-| Bottom right corner.
-}
bottomRightCorner : Corner
bottomRightCorner =
    { bottom = True
    , center = False
    , right = True
    , flipRtl = False
    }


{-| Top left corner in RTL and top right corner otherwise.
-}
topStartCorner : Corner
topStartCorner =
    { bottom = False
    , center = False
    , right = False
    , flipRtl = True
    }


{-| Top right corner in RTL and top left corner otherwise.
-}
topEndCorner : Corner
topEndCorner =
    { bottom = False
    , center = False
    , right = True
    , flipRtl = True
    }


{-| Bottom left corner in RTL and bottom right corner otherwise.
-}
bottomStartCorner : Corner
bottomStartCorner =
    { bottom = True
    , center = False
    , right = False
    , flipRtl = True
    }


{-| Bottom right corner in RTL and bottom left corner otherwise.
-}
bottomEndCorner : Corner
bottomEndCorner =
    { bottom = True
    , center = False
    , right = True
    , flipRtl = True
    }


originCorner : Config -> Geometry -> Corner
originCorner { anchorCorner, anchorMargin } { viewportDistance, anchor, menu } =
    let
        isBottomAligned =
            anchorCorner.bottom

        availableTop =
            if isBottomAligned then
                viewportDistance.top + anchor.height + anchorMargin.bottom
            else
                viewportDistance.top + anchorMargin.top

        availableBottom =
            if isBottomAligned then
                viewportDistance.bottom - anchorMargin.bottom
            else
                viewportDistance.bottom + anchor.height + anchorMargin.top

        topOverflow =
            menu.height - availableTop

        bottomOverflow =
            menu.height - availableBottom

        bottom =
            (bottomOverflow > 0) && (topOverflow < bottomOverflow)

        isRtl =
            False -- TODO

        isFlipRtl =
            anchorCorner.flipRtl

        avoidHorizontalOverlap =
            anchorCorner.right

        isAlignedRight =
            (avoidHorizontalOverlap && not isRtl) ||
            (not avoidHorizontalOverlap && isFlipRtl && isRtl)

        availableLeft =
            if isAlignedRight then
                viewportDistance.left + anchor.width + anchorMargin.right
            else
                viewportDistance.left + anchorMargin.left

        availableRight =
            if isAlignedRight then
                viewportDistance.right - anchorMargin.right
            else
                viewportDistance.right + anchor.width - anchorMargin.left

        leftOverflow =
            menu.width - availableLeft

        rightOverflow =
            menu.width - availableRight

        right =
            ((leftOverflow < 0) && isAlignedRight && isRtl)
            || (avoidHorizontalOverlap && not isAlignedRight && (leftOverflow < 0))
            || ((rightOverflow > 0) && (leftOverflow < rightOverflow))

        flipRtl =
           False

        center =
           False
    in
    { bottom = bottom
    , center = center
    , right = right
    , flipRtl = flipRtl
    }


horizontalOffset : Config -> Corner -> Geometry -> Float
horizontalOffset { anchorCorner, anchorMargin } corner { anchor } =
    let
        isRightAligned =
            corner.right

        avoidHorizontalOverlap =
            anchorCorner.right
    in
    if isRightAligned then
        if avoidHorizontalOverlap then
            anchor.width - anchorMargin.left
        else
            anchorMargin.right
    else
        if avoidHorizontalOverlap then
            anchor.width - anchorMargin.right
        else
            anchorMargin.left


verticalOffset : Config -> Corner -> Geometry -> Float
verticalOffset { anchorCorner, anchorMargin } corner geometry =
    let
        { viewport
        , viewportDistance
        , anchor
        , menu
        } =
            geometry

        isBottomAligned =
            corner.bottom

        marginToEdge =
            32

        avoidVerticalOverlap =
            anchorCorner.bottom

        canOverlapVertically =
            not avoidVerticalOverlap
    in
    if isBottomAligned then
        if canOverlapVertically && (menu.height > viewportDistance.top + anchor.height) then
            -(min menu.height (viewport.height - marginToEdge) - (viewportDistance.top + anchor.height))
        else
            if avoidVerticalOverlap then
                anchor.height - anchorMargin.top
            else
                -anchorMargin.bottom
    else
        if canOverlapVertically && (menu.height > viewportDistance.bottom + anchor.height) then
            -(min menu.height (viewport.height - marginToEdge) - (viewportDistance.top + anchor.height))
            
        else
            if avoidVerticalOverlap then
                anchor.height + anchorMargin.bottom
            else
                anchorMargin.top


menuMaxHeight : Config -> Corner -> Geometry -> Float
menuMaxHeight { anchorCorner, anchorMargin } corner { viewportDistance } =
    let
        isBottomAligned =
            corner.bottom
    in
    if anchorCorner.bottom then
        if isBottomAligned then
            viewportDistance.top + anchorMargin.top
        else
            viewportDistance.bottom - anchorMargin.bottom
    else
        0


autoPosition
    : Config
    -> Geometry
    -> { transformOrigin : String
       , position :
           { top : Maybe String
           , left : Maybe String
           , bottom : Maybe String
           , right : Maybe String
           }
       , maxHeight : String
       }
autoPosition config geometry =
    let
        corner =
            originCorner config geometry

        maxMenuHeight =
            menuMaxHeight config corner geometry

        verticalAlignment =
            if corner.bottom then
                "bottom"
            else
                "top"

        horizontalAlignment =
            if corner.right then
                "right"
            else
                "left"

        horizontalOffset_ =
            horizontalOffset config corner geometry

        verticalOffset_ =
            verticalOffset config corner geometry

        position =
            { top =
                if (verticalAlignment == "top") then
                    Just (toString verticalOffset_ ++ "px")
                else
                    Nothing
            , left =
                if (horizontalAlignment == "left") then
                    Just (toString horizontalOffset_ ++ "px")
                else
                    Nothing
            , bottom =
                if (verticalAlignment == "bottom") then
                    Just (toString verticalOffset_ ++ "px")
                else
                    Nothing
            , right =
                if (horizontalAlignment == "right") then
                    Just (toString horizontalOffset_ ++ "px")
                else
                    Nothing
            }

        { anchor, menu } =
            geometry

        horizontalAlignment_ =
            if (anchor.width / menu.width) > 0.67 then
                "center"
            else
                horizontalAlignment

        { anchorCorner } =
            config

        verticalAlignment_ =
            if (not anchorCorner.bottom) && (abs (verticalOffset_ / menu.height) > 0.1) then
                let
                    verticalOffsetPercent =
                        abs (verticalOffset_ / menu.height) * 100

                    originPercent =
                        if corner.bottom then
                            100 - verticalOffsetPercent
                        else
                            verticalOffsetPercent
                in
                toString (toFloat (round (originPercent * 100)) / 100) ++ "%"
            else
                verticalAlignment
    in
    { transformOrigin = horizontalAlignment_ ++ " " ++ verticalAlignment
    , position = position
    , maxHeight = if maxMenuHeight /= 0 then toString maxMenuHeight ++ "px" else ""
    }


type alias Store s =
    { s | menu : Indexed Model }


( get, set ) =
    Component.indexed .menu (\x y -> { y | menu = x }) defaultModel


{-| Menu react.

Internal use only.
-}
react :
    (Material.Msg.Msg m -> m)
    -> Msg m
    -> Index
    -> Store s
    -> ( Maybe (Store s), Cmd m )
react =
    Component.react get set Material.Msg.MenuMsg update


{-| Menu view.
-}
view :
    (Material.Msg.Msg m -> m)
    -> Index
    -> Store s
    -> List (Property m)
    -> Menu m
    -> Html m
view =
    Component.render get menu Material.Msg.MenuMsg


{-| Menu subscriptions.

Internal use only.
-}
subs : (Material.Msg.Msg m -> m) -> Store s -> Sub m
subs =
    Component.subs Material.Msg.MenuMsg .menu subscriptions


decodeMeta : Decoder Meta
decodeMeta =
    Json.map4 (\altKey ctrlKey metaKey shiftKey ->
        { altKey = altKey
        , ctrlKey = ctrlKey
        , metaKey = metaKey
        , shiftKey = shiftKey
        }
    )
    (Json.at ["altKey"] Json.bool)
    (Json.at ["ctrlKey"] Json.bool)
    (Json.at ["metaKey"] Json.bool)
    (Json.at ["shiftKey"] Json.bool)


decodeKey : Decoder Key
decodeKey =
    Json.at ["key"] Json.string


decodeKeyCode : Decoder KeyCode
decodeKeyCode =
    Html.keyCode


decodeGeometry : Decoder Geometry
decodeGeometry =
    let
        anchorRect =
            DOM.parentElement DOM.boundingClientRect

        viewport =
            Json.at ["ownerDocument", "defaultView"] <|
            Json.map2 Viewport
              (Json.at ["innerWidth"] Json.float)
              (Json.at ["innerHeight"] Json.float)

        viewportDistance viewport anchorRect =
            Json.succeed
            { top = anchorRect.top
            , right = viewport.width - anchorRect.left - anchorRect.width
            , left = anchorRect.left
            , bottom = viewport.height - anchorRect.top - anchorRect.height
            }

        anchor { width, height } =
            Json.succeed { width = width, height = height }

        menu =
            Json.map2
              (\ offsetWidth offsetHeight ->
                  { width = offsetWidth, height = offsetHeight }
              )
              DOM.offsetWidth
              DOM.offsetHeight
    in
    DOM.target
    (
      Json.map2 (,) viewport anchorRect
      |> Json.andThen (\ ( viewport, anchorRect ) ->
           Json.map3 (Geometry viewport)
               (viewportDistance viewport anchorRect)
               (anchor anchorRect)
               menu
         )
    )


{-| Event listener for the menu's select event.

Use this rather than `Options.onClick`, etc. so that it works with keyboard
selection.
-}
onSelect : m -> Lists.Property m
onSelect msg =
    let
        trigger key keyCode =
            let
                isSpace =
                    key == "Space" || keyCode == 32

                isEnter =
                    key == "Enter" || keyCode == 13
            in
            if isSpace || isEnter then
                Json.succeed msg
            else
                Json.fail ""
    in
    Options.many
    [ Options.onClick msg
    , Options.on "keyup"
          ( Json.map2 trigger decodeKey decodeKeyCode
            |> Json.andThen identity
          )
    ]
