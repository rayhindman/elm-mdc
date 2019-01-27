module Demo.Checkbox exposing (Model, Msg(..), defaultModel, update, view)

import Demo.Page as Page exposing (Page)
import Dict exposing (Dict)
import Html exposing (Html, p, text)
import Html.Attributes as Html
import Json.Decode as Json
import Material
import Material.Button as Button
import Material.Checkbox as Checkbox
import Material.FormField as FormField
import Material.Options as Options exposing (cs, css, styled, when)
import Material.Typography as Typography
import Platform.Cmd exposing (Cmd, none)


type alias Model m =
    { mdc : Material.Model m
    , checkboxes : Dict Material.Index Checkbox
    }


defaultModel : Model m
defaultModel =
    { mdc = Material.defaultModel
    , checkboxes =
        Dict.singleton "checkbox-indeterminate-checkbox"
            { defaultCheckbox | checked = Nothing }
    }


type alias Checkbox =
    { checked : Maybe Bool
    , disabled : Bool
    }


defaultCheckbox : Checkbox
defaultCheckbox =
    { checked = Just False
    , disabled = False
    }


type Msg m
    = Mdc (Material.Msg m)
    | ToggleIndeterminate Material.Index
    | ToggleDisabled Material.Index
    | ToggleChecked Material.Index


update : (Msg m -> m) -> Msg m -> Model m -> ( Model m, Cmd m )
update lift msg model =
    case msg of
        Mdc msg_ ->
            Material.update (lift << Mdc) msg_ model

        ToggleIndeterminate index ->
            let
                checkboxes =
                    Dict.get index model.checkboxes
                        |> Maybe.withDefault defaultCheckbox
                        |> (\checkboxState ->
                                Dict.insert index
                                    { checkboxState
                                        | checked =
                                            if checkboxState.checked == Nothing then
                                                Just False

                                            else
                                                Nothing
                                    }
                                    model.checkboxes
                           )
            in
            ( { model | checkboxes = checkboxes }, Cmd.none )

        ToggleDisabled index ->
            let
                checkboxes =
                    Dict.get index model.checkboxes
                        |> Maybe.withDefault defaultCheckbox
                        |> (\checkboxState ->
                                Dict.insert index
                                    { checkboxState | disabled = not checkboxState.disabled }
                                    model.checkboxes
                           )
            in
            ( { model | checkboxes = checkboxes }, Cmd.none )

        ToggleChecked index ->
            let
                checkboxes =
                    Dict.get index model.checkboxes
                        |> Maybe.withDefault defaultCheckbox
                        |> (\checkboxState ->
                                Dict.insert index
                                    { checkboxState
                                        | checked =
                                            if checkboxState.checked == Nothing then
                                                Just True

                                            else
                                                Maybe.map not checkboxState.checked
                                    }
                                    model.checkboxes
                           )
            in
            ( { model | checkboxes = checkboxes }, Cmd.none )


view : (Msg m -> m) -> Page m -> Model m -> Html m
view lift page model =
    let
        example options =
            styled Html.div
                (cs "example"
                    :: css "display" "block"
                    :: css "margin" "24px"
                    :: css "padding" "24px"
                    :: options
                )
    in
    page.body "Checkbox"
        "Checkboxes allow the user to select multiple options from a set."
        [ let
            viewCheckbox index =
                let
                    checkbox =
                        Dict.get index model.checkboxes
                            |> Maybe.withDefault defaultCheckbox
                in
                Checkbox.view (lift << Mdc)
                    index
                    model.mdc
                    [ Options.on "click" (Json.succeed (lift (ToggleChecked index)))
                    , when (checkbox.checked /= Nothing) <|
                        Checkbox.checked (Maybe.withDefault False checkbox.checked)
                    , Checkbox.disabled |> when checkbox.disabled
                    ]
                    []
          in
          Page.hero []
            [ FormField.view []
                [ viewCheckbox "checkbox-hero-checkbox"
                , Html.label [ Html.for "checkbox-hero-checkbox" ] [ text "Checkbox" ]
                ]
            ]
        , let
            viewCheckbox index label =
                let
                    checkbox =
                        Dict.get index model.checkboxes
                            |> Maybe.withDefault defaultCheckbox
                in
                styled Html.div
                    []
                    [ FormField.view []
                        [ Checkbox.view (lift << Mdc)
                            index
                            model.mdc
                            [ Options.on "click" (Json.succeed (lift (ToggleChecked index)))
                            , when (checkbox.checked /= Nothing) <|
                                Checkbox.checked (Maybe.withDefault False checkbox.checked)
                            , Checkbox.disabled |> when checkbox.disabled
                            ]
                            []
                        , Html.label [ Html.for index ] [ text label ]
                        ]
                    , styled Html.div
                        []
                        [ Button.view (lift << Mdc)
                            (index ++ "button-toggle-indeterminate")
                            model.mdc
                            [ Options.on "click" (Json.succeed (lift (ToggleIndeterminate index)))
                            ]
                            [ text "Toggle "
                            , Html.code [] [ text "indeterminate" ]
                            ]
                        , Button.view (lift << Mdc)
                            (index ++ "button-toggle-disabled")
                            model.mdc
                            [ Options.on "click" (Json.succeed (lift (ToggleDisabled index)))
                            ]
                            [ text "TOGGLE "
                            , Html.code [] [ text "disabled" ]
                            ]
                        ]
                    ]
          in
          example []
            (List.concat
                [ [ styled Html.h2
                        [ css "margin-left" "0"
                        , css "margin-top" "0"
                        ]
                        [ text "Checkbox" ]
                  ]
                , [ ( "checkbox-default-checkbox", "Default checkbox" )
                  , ( "checkbox-indeterminate-checkbox", "Indeterminate checkbox" )
                  ]
                    |> List.map
                        (\( index, label ) ->
                            viewCheckbox index label
                        )
                ]
            )
        ]
