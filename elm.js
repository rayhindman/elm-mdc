
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _ccapndave$elm_update_extra$Update_Extra$identity = function (model) {
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		model,
		{ctor: '[]'});
};
var _ccapndave$elm_update_extra$Update_Extra$mapCmd = F2(
	function (tagger, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, tagger, _p1._1)
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$addCmd = F2(
	function (cmd_, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: _p3._0,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _p3._1,
					_1: {
						ctor: '::',
						_0: cmd_,
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$updateModel = F2(
	function (f, _p4) {
		var _p5 = _p4;
		return {
			ctor: '_Tuple2',
			_0: f(_p5._0),
			_1: _p5._1
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$filter = F2(
	function (pred, f) {
		return pred ? f : _elm_lang$core$Basics$identity;
	});
var _ccapndave$elm_update_extra$Update_Extra$andThen = F3(
	function (update, msg, _p6) {
		var _p7 = _p6;
		var _p8 = A2(update, msg, _p7._0);
		var model_ = _p8._0;
		var cmd_ = _p8._1;
		return {
			ctor: '_Tuple2',
			_0: model_,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _p7._1,
					_1: {
						ctor: '::',
						_0: cmd_,
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$sequence = F3(
	function (update, msgs, init) {
		var foldUpdate = _ccapndave$elm_update_extra$Update_Extra$andThen(update);
		return A3(_elm_lang$core$List$foldl, foldUpdate, init, msgs);
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _debois$elm_dom$DOM$className = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'className',
		_1: {ctor: '[]'}
	},
	_elm_lang$core$Json_Decode$string);
var _debois$elm_dom$DOM$scrollTop = A2(_elm_lang$core$Json_Decode$field, 'scrollTop', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$scrollLeft = A2(_elm_lang$core$Json_Decode$field, 'scrollLeft', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$offsetTop = A2(_elm_lang$core$Json_Decode$field, 'offsetTop', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$offsetLeft = A2(_elm_lang$core$Json_Decode$field, 'offsetLeft', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$offsetHeight = A2(_elm_lang$core$Json_Decode$field, 'offsetHeight', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$offsetWidth = A2(_elm_lang$core$Json_Decode$field, 'offsetWidth', _elm_lang$core$Json_Decode$float);
var _debois$elm_dom$DOM$childNodes = function (decoder) {
	var loop = F2(
		function (idx, xs) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (_p0) {
					return A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Json_Decode$succeed(xs),
						A2(
							_elm_lang$core$Maybe$map,
							function (x) {
								return A2(
									loop,
									idx + 1,
									{ctor: '::', _0: x, _1: xs});
							},
							_p0));
				},
				_elm_lang$core$Json_Decode$maybe(
					A2(
						_elm_lang$core$Json_Decode$field,
						_elm_lang$core$Basics$toString(idx),
						decoder)));
		});
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$List$reverse,
		A2(
			_elm_lang$core$Json_Decode$field,
			'childNodes',
			A2(
				loop,
				0,
				{ctor: '[]'})));
};
var _debois$elm_dom$DOM$childNode = function (idx) {
	return _elm_lang$core$Json_Decode$at(
		{
			ctor: '::',
			_0: 'childNodes',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(idx),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2(_elm_lang$core$Json_Decode$field, 'parentElement', decoder);
};
var _debois$elm_dom$DOM$previousSibling = function (decoder) {
	return A2(_elm_lang$core$Json_Decode$field, 'previousSibling', decoder);
};
var _debois$elm_dom$DOM$nextSibling = function (decoder) {
	return A2(_elm_lang$core$Json_Decode$field, 'nextSibling', decoder);
};
var _debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return _elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_lang$core$Json_Decode$field,
					'offsetParent',
					_elm_lang$core$Json_Decode$null(x)),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$field, 'offsetParent', decoder),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (_p1) {
				var _p2 = _p1;
				var _p4 = _p2._1;
				var _p3 = _p2._0;
				return A2(
					_debois$elm_dom$DOM$offsetParent,
					{ctor: '_Tuple2', _0: _p3, _1: _p4},
					A2(_debois$elm_dom$DOM$position, _p3, _p4));
			},
			A5(
				_elm_lang$core$Json_Decode$map4,
				F4(
					function (scrollLeft, scrollTop, offsetLeft, offsetTop) {
						return {ctor: '_Tuple2', _0: (x + offsetLeft) - scrollLeft, _1: (y + offsetTop) - scrollTop};
					}),
				_debois$elm_dom$DOM$scrollLeft,
				_debois$elm_dom$DOM$scrollTop,
				_debois$elm_dom$DOM$offsetLeft,
				_debois$elm_dom$DOM$offsetTop));
	});
var _debois$elm_dom$DOM$boundingClientRect = A4(
	_elm_lang$core$Json_Decode$map3,
	F3(
		function (_p5, width, height) {
			var _p6 = _p5;
			return {top: _p6._1, left: _p6._0, width: width, height: height};
		}),
	A2(_debois$elm_dom$DOM$position, 0, 0),
	_debois$elm_dom$DOM$offsetWidth,
	_debois$elm_dom$DOM$offsetHeight);
var _debois$elm_dom$DOM$target = function (decoder) {
	return A2(_elm_lang$core$Json_Decode$field, 'target', decoder);
};
var _debois$elm_dom$DOM$Rectangle = F4(
	function (a, b, c, d) {
		return {top: a, left: b, width: c, height: d};
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _debois$elm_mdl$Material_Helpers$noAttr = A2(_elm_lang$html$Html_Attributes$attribute, 'data-elm-mdc-noop', '');
var _debois$elm_mdl$Material_Helpers$aria = F2(
	function (name, value) {
		return value ? A2(
			_elm_lang$html$Html_Attributes$attribute,
			A2(_elm_lang$core$Basics_ops['++'], 'aria-', name),
			'true') : _debois$elm_mdl$Material_Helpers$noAttr;
	});
var _debois$elm_mdl$Material_Helpers$delay = F2(
	function (t, x) {
		return A2(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(x),
			_elm_lang$core$Process$sleep(t));
	});
var _debois$elm_mdl$Material_Helpers$cssTransitionStep = function (x) {
	return A2(_debois$elm_mdl$Material_Helpers$delay, 50, x);
};
var _debois$elm_mdl$Material_Helpers$cmd = function (msg) {
	return A2(
		_elm_lang$core$Task$perform,
		_elm_lang$core$Basics$always(msg),
		_elm_lang$core$Task$succeed(msg));
};
var _debois$elm_mdl$Material_Helpers$lift = F6(
	function (get, set, fwd, update, action, model) {
		var _p0 = A2(
			update,
			action,
			get(model));
		var submodel_ = _p0._0;
		var e = _p0._1;
		return {
			ctor: '_Tuple2',
			_0: A2(set, model, submodel_),
			_1: A2(_elm_lang$core$Platform_Cmd$map, fwd, e)
		};
	});
var _debois$elm_mdl$Material_Helpers$lift_ = F5(
	function (get, set, update, action, model) {
		return {
			ctor: '_Tuple2',
			_0: A2(
				set,
				model,
				A2(
					update,
					action,
					get(model))),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _debois$elm_mdl$Material_Helpers$map2nd = F2(
	function (f, _p1) {
		var _p2 = _p1;
		return {
			ctor: '_Tuple2',
			_0: _p2._0,
			_1: f(_p2._1)
		};
	});
var _debois$elm_mdl$Material_Helpers$map1st = F2(
	function (f, _p3) {
		var _p4 = _p3;
		return {
			ctor: '_Tuple2',
			_0: f(_p4._0),
			_1: _p4._1
		};
	});
var _debois$elm_mdl$Material_Helpers$blurOn = function (evt) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		A2(_elm_lang$core$Basics_ops['++'], 'on', evt),
		'this.blur()');
};
var _debois$elm_mdl$Material_Helpers$effect = F2(
	function (e, x) {
		return {ctor: '_Tuple2', _0: x, _1: e};
	});
var _debois$elm_mdl$Material_Helpers$pure = _debois$elm_mdl$Material_Helpers$effect(_elm_lang$core$Platform_Cmd$none);
var _debois$elm_mdl$Material_Helpers$filter = F3(
	function (elem, attr, html) {
		return A2(
			elem,
			attr,
			A2(
				_elm_lang$core$List$filterMap,
				function (x) {
					return x;
				},
				html));
	});

var _debois$elm_mdl$Material_Internal_Button$NoOp = {ctor: 'NoOp'};

var _debois$elm_mdl$Material_Internal_Fab$NoOp = {ctor: 'NoOp'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return t2;
			},
			t1);
	});
var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p1, state) {
		var _p2 = _p1;
		var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p2.position));
			};
			return A2(
				_elm_lang$mouse$Mouse_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p4 = maybeValues;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p4._0});
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p5._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p5._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				var tracker = A3(
					_elm_lang$dom$Dom_LowLevel$onDocument,
					category,
					_elm_lang$mouse$Mouse$position,
					function (_p6) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
					});
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(tracker));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p7, taggers, task) {
				var _p8 = _p7;
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
								state));
					},
					task);
			});
		var leftStep = F3(
			function (category, _p9, task) {
				var _p10 = _p9;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p10.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p12._0,
			function (_p13) {
				return func(
					_p12._1(_p13));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _debois$elm_mdl$Material_Internal_Menu$defaultGeometry = {
	itemsContainer: {width: 0, height: 0},
	itemGeometries: {ctor: '[]'},
	adapter: {isRtl: false},
	anchor: {top: 0, left: 0, bottom: 0, right: 0},
	window: {width: 800, height: 600}
};
var _debois$elm_mdl$Material_Internal_Menu$defaultMeta = {altKey: false, ctrlKey: false, metaKey: false, shiftKey: false};
var _debois$elm_mdl$Material_Internal_Menu$Meta = F4(
	function (a, b, c, d) {
		return {altKey: a, ctrlKey: b, metaKey: c, shiftKey: d};
	});
var _debois$elm_mdl$Material_Internal_Menu$Geometry = F5(
	function (a, b, c, d, e) {
		return {itemsContainer: a, itemGeometries: b, adapter: c, anchor: d, window: e};
	});
var _debois$elm_mdl$Material_Internal_Menu$KeyUp = F3(
	function (a, b, c) {
		return {ctor: 'KeyUp', _0: a, _1: b, _2: c};
	});
var _debois$elm_mdl$Material_Internal_Menu$KeyDown = F3(
	function (a, b, c) {
		return {ctor: 'KeyDown', _0: a, _1: b, _2: c};
	});
var _debois$elm_mdl$Material_Internal_Menu$Click = function (a) {
	return {ctor: 'Click', _0: a};
};
var _debois$elm_mdl$Material_Internal_Menu$Tick = function (a) {
	return {ctor: 'Tick', _0: a};
};
var _debois$elm_mdl$Material_Internal_Menu$Close = function (a) {
	return {ctor: 'Close', _0: a};
};
var _debois$elm_mdl$Material_Internal_Menu$Open = function (a) {
	return {ctor: 'Open', _0: a};
};
var _debois$elm_mdl$Material_Internal_Menu$Toggle = function (a) {
	return {ctor: 'Toggle', _0: a};
};

var _debois$elm_mdl$Material_Internal_Ripple$defaultGeometry = {
	isSurfaceDisabled: false,
	event: {type_: '', pageX: 0, pageY: 0},
	frame: {width: 0, height: 0, left: 0, top: 0}
};
var _debois$elm_mdl$Material_Internal_Ripple$Geometry = F3(
	function (a, b, c) {
		return {isSurfaceDisabled: a, event: b, frame: c};
	});
var _debois$elm_mdl$Material_Internal_Ripple$Deactivate = {ctor: 'Deactivate'};
var _debois$elm_mdl$Material_Internal_Ripple$Activate = function (a) {
	return {ctor: 'Activate', _0: a};
};
var _debois$elm_mdl$Material_Internal_Ripple$Blur = {ctor: 'Blur'};
var _debois$elm_mdl$Material_Internal_Ripple$Focus = function (a) {
	return {ctor: 'Focus', _0: a};
};

var _debois$elm_mdl$Material_Internal_Select$MenuMsg = function (a) {
	return {ctor: 'MenuMsg', _0: a};
};

var _debois$elm_mdl$Material_Internal_Snackbar$Dismiss = F2(
	function (a, b) {
		return {ctor: 'Dismiss', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Internal_Snackbar$Move = F2(
	function (a, b) {
		return {ctor: 'Move', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Internal_Snackbar$Clicked = {ctor: 'Clicked'};
var _debois$elm_mdl$Material_Internal_Snackbar$Timeout = {ctor: 'Timeout'};

var _debois$elm_mdl$Material_Internal_Tabs$defaultGeometry = {
	tabs: {ctor: '[]'},
	scrollFrame: {width: 0}
};
var _debois$elm_mdl$Material_Internal_Tabs$Geometry = F2(
	function (a, b) {
		return {tabs: a, scrollFrame: b};
	});
var _debois$elm_mdl$Material_Internal_Tabs$Init = function (a) {
	return {ctor: 'Init', _0: a};
};
var _debois$elm_mdl$Material_Internal_Tabs$ScrollBackward = function (a) {
	return {ctor: 'ScrollBackward', _0: a};
};
var _debois$elm_mdl$Material_Internal_Tabs$ScrollForward = function (a) {
	return {ctor: 'ScrollForward', _0: a};
};
var _debois$elm_mdl$Material_Internal_Tabs$Dispatch = function (a) {
	return {ctor: 'Dispatch', _0: a};
};
var _debois$elm_mdl$Material_Internal_Tabs$Select = F2(
	function (a, b) {
		return {ctor: 'Select', _0: a, _1: b};
	});

var _debois$elm_mdl$Material_Internal_Textfield$NoOp = {ctor: 'NoOp'};
var _debois$elm_mdl$Material_Internal_Textfield$Input = function (a) {
	return {ctor: 'Input', _0: a};
};
var _debois$elm_mdl$Material_Internal_Textfield$Focus = {ctor: 'Focus'};
var _debois$elm_mdl$Material_Internal_Textfield$Blur = {ctor: 'Blur'};

var _debois$elm_mdl$Material_Internal_Checkbox$SetFocus = function (a) {
	return {ctor: 'SetFocus', _0: a};
};

var _debois$elm_mdl$Material_Internal_Tooltip$defaultDOMState = {
	rect: {left: 0, top: 0, width: 0, height: 0},
	offsetWidth: 0,
	offsetHeight: 0
};
var _debois$elm_mdl$Material_Internal_Tooltip$DOMState = F3(
	function (a, b, c) {
		return {rect: a, offsetWidth: b, offsetHeight: c};
	});
var _debois$elm_mdl$Material_Internal_Tooltip$Leave = {ctor: 'Leave'};
var _debois$elm_mdl$Material_Internal_Tooltip$Enter = function (a) {
	return {ctor: 'Enter', _0: a};
};

var _debois$elm_mdl$Material_Msg$RippleMsg = F2(
	function (a, b) {
		return {ctor: 'RippleMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$TooltipMsg = F2(
	function (a, b) {
		return {ctor: 'TooltipMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$CheckboxMsg = F2(
	function (a, b) {
		return {ctor: 'CheckboxMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$TextfieldMsg = F2(
	function (a, b) {
		return {ctor: 'TextfieldMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$TabsMsg = F2(
	function (a, b) {
		return {ctor: 'TabsMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$SelectMsg = F2(
	function (a, b) {
		return {ctor: 'SelectMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$MenuMsg = F2(
	function (a, b) {
		return {ctor: 'MenuMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$Dispatch = function (a) {
	return {ctor: 'Dispatch', _0: a};
};
var _debois$elm_mdl$Material_Msg$FabMsg = F2(
	function (a, b) {
		return {ctor: 'FabMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$SnackbarMsg = F2(
	function (a, b) {
		return {ctor: 'SnackbarMsg', _0: a, _1: b};
	});
var _debois$elm_mdl$Material_Msg$ButtonMsg = F2(
	function (a, b) {
		return {ctor: 'ButtonMsg', _0: a, _1: b};
	});

var _debois$elm_mdl$Material_Component$subs = F5(
	function (ctor, get, subscriptions, lift, model) {
		return _elm_lang$core$Platform_Sub$batch(
			A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (idx, model, ss) {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Platform_Sub$map,
								function (_p0) {
									return lift(
										A2(ctor, idx, _p0));
								},
								subscriptions(model)),
							_1: ss
						};
					}),
				{ctor: '[]'},
				get(model)));
	});
var _debois$elm_mdl$Material_Component$generalise = F4(
	function (update, lift, msg, model) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map2nd,
			_elm_lang$core$Platform_Cmd$map(lift),
			A2(
				_debois$elm_mdl$Material_Helpers$map1st,
				_elm_lang$core$Maybe$Just,
				A2(update, msg, model)));
	});
var _debois$elm_mdl$Material_Component$react = F8(
	function (get, set, ctor, update, lift, msg, idx, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			_elm_lang$core$Maybe$map(
				A2(set, idx, store)),
			A3(
				update,
				function (_p1) {
					return lift(
						A2(ctor, idx, _p1));
				},
				msg,
				A2(get, idx, store)));
	});
var _debois$elm_mdl$Material_Component$react1 = F7(
	function (get, set, ctor, update, lift, msg, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			_elm_lang$core$Maybe$map(
				set(store)),
			A3(
				update,
				function (_p2) {
					return lift(
						ctor(_p2));
				},
				msg,
				get(store)));
	});
var _debois$elm_mdl$Material_Component$render = F6(
	function (get_model, view, ctor, lift, idx, store) {
		return A2(
			view,
			function (_p3) {
				return lift(
					A2(ctor, idx, _p3));
			},
			A2(get_model, idx, store));
	});
var _debois$elm_mdl$Material_Component$render1 = F5(
	function (get_model, view, ctor, lift, store) {
		return A2(
			view,
			function (_p4) {
				return lift(
					ctor(_p4));
			},
			get_model(store));
	});
var _debois$elm_mdl$Material_Component$indexed = F3(
	function (get_model, set_model, model0) {
		var set_ = F3(
			function (idx, store, model) {
				return A2(
					set_model,
					A3(
						_elm_lang$core$Dict$insert,
						idx,
						model,
						get_model(store)),
					store);
			});
		var get_ = F2(
			function (idx, store) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					model0,
					A2(
						_elm_lang$core$Dict$get,
						idx,
						get_model(store)));
			});
		return {ctor: '_Tuple2', _0: get_, _1: set_};
	});

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _debois$elm_mdl$Material_Internal_Dispatch$Config = function (a) {
	return {ctor: 'Config', _0: a};
};

var _debois$elm_mdl$Material_Dispatch$split = F4(
	function (k0, same, differ, xs) {
		split:
		while (true) {
			var _p0 = xs;
			if (_p0.ctor === '[]') {
				return {ctor: '_Tuple2', _0: same, _1: differ};
			} else {
				var _p1 = _p0._1;
				if (_elm_lang$core$Native_Utils.eq(_p0._0._0, k0)) {
					var _v1 = k0,
						_v2 = {ctor: '::', _0: _p0._0._1, _1: same},
						_v3 = differ,
						_v4 = _p1;
					k0 = _v1;
					same = _v2;
					differ = _v3;
					xs = _v4;
					continue split;
				} else {
					var _v5 = k0,
						_v6 = same,
						_v7 = {ctor: '::', _0: _p0._0, _1: differ},
						_v8 = _p1;
					k0 = _v5;
					same = _v6;
					differ = _v7;
					xs = _v8;
					continue split;
				}
			}
		}
	});
var _debois$elm_mdl$Material_Dispatch$group_ = F2(
	function (acc, items) {
		group_:
		while (true) {
			var _p2 = items;
			if (_p2.ctor === '[]') {
				return acc;
			} else {
				if (_p2._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: _p2._0._0,
							_1: {
								ctor: '::',
								_0: _p2._0._1,
								_1: {ctor: '[]'}
							}
						},
						_1: acc
					};
				} else {
					if ((_p2._1._0.ctor === '_Tuple2') && (_p2._1._1.ctor === '[]')) {
						var _p6 = _p2._1._0._1;
						var _p5 = _p2._0._1;
						var _p4 = _p2._1._0._0;
						var _p3 = _p2._0._0;
						return _elm_lang$core$Native_Utils.eq(_p3, _p4) ? {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _p3,
								_1: {
									ctor: '::',
									_0: _p6,
									_1: {
										ctor: '::',
										_0: _p5,
										_1: {ctor: '[]'}
									}
								}
							},
							_1: acc
						} : {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _p4,
								_1: {
									ctor: '::',
									_0: _p6,
									_1: {ctor: '[]'}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _p3,
									_1: {
										ctor: '::',
										_0: _p5,
										_1: {ctor: '[]'}
									}
								},
								_1: acc
							}
						};
					} else {
						var _p8 = _p2._0._0;
						var _p7 = A4(
							_debois$elm_mdl$Material_Dispatch$split,
							_p8,
							{
								ctor: '::',
								_0: _p2._0._1,
								_1: {ctor: '[]'}
							},
							{ctor: '[]'},
							_p2._1);
						var same = _p7._0;
						var different = _p7._1;
						var _v10 = {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _p8, _1: same},
							_1: acc
						},
							_v11 = different;
						acc = _v10;
						items = _v11;
						continue group_;
					}
				}
			}
		}
	});
var _debois$elm_mdl$Material_Dispatch$group = _debois$elm_mdl$Material_Dispatch$group_(
	{ctor: '[]'});
var _debois$elm_mdl$Material_Dispatch$onSingle = function (_p9) {
	var _p10 = _p9;
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		_p10._0,
		A2(_elm_lang$core$Maybe$withDefault, _elm_lang$html$Html_Events$defaultOptions, _p10._1._1),
		_p10._1._0);
};
var _debois$elm_mdl$Material_Dispatch$pickOptions = function (decoders) {
	pickOptions:
	while (true) {
		var _p11 = decoders;
		if (_p11.ctor === '::') {
			if ((_p11._0.ctor === '_Tuple2') && (_p11._0._1.ctor === 'Just')) {
				return _p11._0._1._0;
			} else {
				var _v14 = _p11._1;
				decoders = _v14;
				continue pickOptions;
			}
		} else {
			return _elm_lang$html$Html_Events$defaultOptions;
		}
	}
};
var _debois$elm_mdl$Material_Dispatch$flatten = function (decoders) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		function (value) {
			return A2(
				_elm_lang$core$List$filterMap,
				function (decoder) {
					return _elm_lang$core$Result$toMaybe(
						A2(_elm_lang$core$Json_Decode$decodeValue, decoder, value));
				},
				decoders);
		},
		_elm_lang$core$Json_Decode$value);
};
var _debois$elm_mdl$Material_Dispatch$onWithOptions = F4(
	function (event, lift, options, decoders) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			event,
			options,
			A2(
				_elm_lang$core$Json_Decode$map,
				lift,
				_debois$elm_mdl$Material_Dispatch$flatten(decoders)));
	});
var _debois$elm_mdl$Material_Dispatch$on = F2(
	function (event, lift) {
		return A3(_debois$elm_mdl$Material_Dispatch$onWithOptions, event, lift, _elm_lang$html$Html_Events$defaultOptions);
	});
var _debois$elm_mdl$Material_Dispatch$onMany = F2(
	function (lift, decoders) {
		var _p12 = decoders;
		if ((_p12._1.ctor === '::') && (_p12._1._1.ctor === '[]')) {
			return _debois$elm_mdl$Material_Dispatch$onSingle(
				{ctor: '_Tuple2', _0: _p12._0, _1: _p12._1._0});
		} else {
			var _p13 = _p12._1;
			return A3(
				_elm_lang$html$Html_Events$onWithOptions,
				_p12._0,
				_debois$elm_mdl$Material_Dispatch$pickOptions(_p13),
				lift(
					_debois$elm_mdl$Material_Dispatch$flatten(
						A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p13))));
		}
	});
var _debois$elm_mdl$Material_Dispatch$map2nd = F2(
	function (f, _p14) {
		var _p15 = _p14;
		return {
			ctor: '_Tuple2',
			_0: _p15._0,
			_1: f(_p15._1)
		};
	});
var _debois$elm_mdl$Material_Dispatch$update1 = F3(
	function (update, cmd, _p16) {
		var _p17 = _p16;
		return A2(
			_debois$elm_mdl$Material_Dispatch$map2nd,
			A2(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p17._1),
			A2(update, cmd, _p17._0));
	});
var _debois$elm_mdl$Material_Dispatch$update = F3(
	function (update, msg, model) {
		return A2(
			_debois$elm_mdl$Material_Dispatch$map2nd,
			_elm_lang$core$Platform_Cmd$batch,
			A3(
				_elm_lang$core$List$foldl,
				_debois$elm_mdl$Material_Dispatch$update1(update),
				{
					ctor: '_Tuple2',
					_0: model,
					_1: {ctor: '[]'}
				},
				msg));
	});
var _debois$elm_mdl$Material_Dispatch$cmd = function (msg) {
	return A2(
		_elm_lang$core$Task$perform,
		_elm_lang$core$Basics$always(msg),
		_elm_lang$core$Task$succeed(msg));
};
var _debois$elm_mdl$Material_Dispatch$forward = function (messages) {
	return _elm_lang$core$Platform_Cmd$batch(
		A2(_elm_lang$core$List$map, _debois$elm_mdl$Material_Dispatch$cmd, messages));
};
var _debois$elm_mdl$Material_Dispatch$toAttributes = function (_p18) {
	var _p19 = _p18;
	var _p21 = _p19._0;
	var _p20 = _p21.lift;
	if (_p20.ctor === 'Just') {
		return A2(
			_elm_lang$core$List$map,
			_debois$elm_mdl$Material_Dispatch$onMany(_p20._0),
			_debois$elm_mdl$Material_Dispatch$group(_p21.decoders));
	} else {
		return A2(_elm_lang$core$List$map, _debois$elm_mdl$Material_Dispatch$onSingle, _p21.decoders);
	}
};
var _debois$elm_mdl$Material_Dispatch$clear = function (_p22) {
	var _p23 = _p22;
	return _debois$elm_mdl$Material_Internal_Dispatch$Config(
		_elm_lang$core$Native_Utils.update(
			_p23._0,
			{
				decoders: {ctor: '[]'}
			}));
};
var _debois$elm_mdl$Material_Dispatch$add = F4(
	function (event, options, decoder, _p24) {
		var _p25 = _p24;
		var _p26 = _p25._0;
		return _debois$elm_mdl$Material_Internal_Dispatch$Config(
			_elm_lang$core$Native_Utils.update(
				_p26,
				{
					decoders: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: event,
							_1: {ctor: '_Tuple2', _0: decoder, _1: options}
						},
						_1: _p26.decoders
					}
				}));
	});
var _debois$elm_mdl$Material_Dispatch$getDecoder = function (_p27) {
	var _p28 = _p27;
	return _p28._0.lift;
};
var _debois$elm_mdl$Material_Dispatch$setDecoder = F2(
	function (f, _p29) {
		var _p30 = _p29;
		return _debois$elm_mdl$Material_Internal_Dispatch$Config(
			_elm_lang$core$Native_Utils.update(
				_p30._0,
				{
					lift: _elm_lang$core$Maybe$Just(f)
				}));
	});
var _debois$elm_mdl$Material_Dispatch$setMsg = function (_p31) {
	return _debois$elm_mdl$Material_Dispatch$setDecoder(
		_elm_lang$core$Json_Decode$map(_p31));
};
var _debois$elm_mdl$Material_Dispatch$defaultConfig = _debois$elm_mdl$Material_Internal_Dispatch$Config(
	{
		decoders: {ctor: '[]'},
		lift: _elm_lang$core$Maybe$Nothing
	});

var _debois$elm_mdl$Material_Internal_Options$cssVariables = function (summary) {
	var styleNodeBlock = A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p0) {
				var _p1 = _p0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p1._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						': ',
						A2(_elm_lang$core$Basics_ops['++'], _p1._1, ';')));
			},
			summary.vars));
	var hash = function (str) {
		return A2(
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			'elm-mdc-ripple-style--',
			_elm_lang$core$String$fromList(
				A2(
					_elm_lang$core$List$filter,
					_elm_lang$core$Char$isDigit,
					_elm_lang$core$String$toList(str))));
	};
	var $class = hash(styleNodeBlock);
	var styleNodeText = A2(
		_elm_lang$core$Basics_ops['++'],
		'.',
		A2(
			_elm_lang$core$Basics_ops['++'],
			$class,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' {',
				A2(_elm_lang$core$Basics_ops['++'], styleNodeBlock, ' }'))));
	var styleNode = A3(
		_elm_lang$html$Html$node,
		'style',
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$type_('text/css'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(styleNodeText),
			_1: {ctor: '[]'}
		});
	return {ctor: '_Tuple2', _0: $class, _1: styleNode};
};
var _debois$elm_mdl$Material_Internal_Options$addAttributes = F2(
	function (summary, attrs) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			summary.attrs,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(summary.css),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class(
							A2(_elm_lang$core$String$join, ' ', summary.classes)),
						_1: {ctor: '[]'}
					}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					attrs,
					A2(
						_elm_lang$core$Basics_ops['++'],
						summary.internal,
						_debois$elm_mdl$Material_Dispatch$toAttributes(summary.dispatch)))));
	});
var _debois$elm_mdl$Material_Internal_Options$collect1_ = F2(
	function (options, acc) {
		var _p2 = options;
		switch (_p2.ctor) {
			case 'Class':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						classes: {ctor: '::', _0: _p2._0, _1: acc.classes}
					});
			case 'CSS':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						css: {ctor: '::', _0: _p2._0, _1: acc.css}
					});
			case 'Var':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						vars: {ctor: '::', _0: _p2._0, _1: acc.vars}
					});
			case 'Attribute':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						attrs: {ctor: '::', _0: _p2._0, _1: acc.attrs}
					});
			case 'Internal':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						internal: {ctor: '::', _0: _p2._0, _1: acc.internal}
					});
			case 'Listener':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						dispatch: A4(_debois$elm_mdl$Material_Dispatch$add, _p2._0, _p2._1, _p2._2, acc.dispatch)
					});
			case 'Many':
				return A3(_elm_lang$core$List$foldl, _debois$elm_mdl$Material_Internal_Options$collect1_, acc, _p2._0);
			case 'Lift':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						dispatch: A2(_debois$elm_mdl$Material_Dispatch$setDecoder, _p2._0, acc.dispatch)
					});
			case 'Set':
				return acc;
			default:
				return acc;
		}
	});
var _debois$elm_mdl$Material_Internal_Options$collect1 = F2(
	function (option, acc) {
		var _p3 = option;
		switch (_p3.ctor) {
			case 'Class':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						classes: {ctor: '::', _0: _p3._0, _1: acc.classes}
					});
			case 'CSS':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						css: {ctor: '::', _0: _p3._0, _1: acc.css}
					});
			case 'Var':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						vars: {ctor: '::', _0: _p3._0, _1: acc.vars}
					});
			case 'Attribute':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						attrs: {ctor: '::', _0: _p3._0, _1: acc.attrs}
					});
			case 'Internal':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						internal: {ctor: '::', _0: _p3._0, _1: acc.internal}
					});
			case 'Many':
				return A3(_elm_lang$core$List$foldl, _debois$elm_mdl$Material_Internal_Options$collect1, acc, _p3._0);
			case 'Set':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						config: _p3._0(acc.config)
					});
			case 'Listener':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						dispatch: A4(_debois$elm_mdl$Material_Dispatch$add, _p3._0, _p3._1, _p3._2, acc.dispatch)
					});
			case 'Lift':
				return _elm_lang$core$Native_Utils.update(
					acc,
					{
						dispatch: A2(_debois$elm_mdl$Material_Dispatch$setDecoder, _p3._0, acc.dispatch)
					});
			default:
				return acc;
		}
	});
var _debois$elm_mdl$Material_Internal_Options$recollect = _elm_lang$core$List$foldl(_debois$elm_mdl$Material_Internal_Options$collect1);
var _debois$elm_mdl$Material_Internal_Options$apply = F4(
	function (summary, ctor, options, attrs) {
		return ctor(
			A2(
				_debois$elm_mdl$Material_Internal_Options$addAttributes,
				A2(_debois$elm_mdl$Material_Internal_Options$recollect, summary, options),
				attrs));
	});
var _debois$elm_mdl$Material_Internal_Options$Summary = F7(
	function (a, b, c, d, e, f, g) {
		return {classes: a, css: b, vars: c, attrs: d, internal: e, dispatch: f, config: g};
	});
var _debois$elm_mdl$Material_Internal_Options$collect = function (_p4) {
	return _debois$elm_mdl$Material_Internal_Options$recollect(
		A7(
			_debois$elm_mdl$Material_Internal_Options$Summary,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			_debois$elm_mdl$Material_Dispatch$defaultConfig,
			_p4));
};
var _debois$elm_mdl$Material_Internal_Options$collect_ = A2(
	_elm_lang$core$List$foldl,
	_debois$elm_mdl$Material_Internal_Options$collect1_,
	A7(
		_debois$elm_mdl$Material_Internal_Options$Summary,
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		_debois$elm_mdl$Material_Dispatch$defaultConfig,
		{ctor: '_Tuple0'}));
var _debois$elm_mdl$Material_Internal_Options$None = {ctor: 'None'};
var _debois$elm_mdl$Material_Internal_Options$Lift = function (a) {
	return {ctor: 'Lift', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$dispatch = function (lift) {
	return _debois$elm_mdl$Material_Internal_Options$Lift(
		function (_p5) {
			return A2(
				_elm_lang$core$Json_Decode$map,
				lift,
				A2(_elm_lang$core$Json_Decode$map, _debois$elm_mdl$Material_Msg$Dispatch, _p5));
		});
};
var _debois$elm_mdl$Material_Internal_Options$inject = F5(
	function (view, lift, a, b, c) {
		return A3(
			view,
			a,
			b,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Internal_Options$dispatch(lift),
				_1: c
			});
	});
var _debois$elm_mdl$Material_Internal_Options$Listener = F3(
	function (a, b, c) {
		return {ctor: 'Listener', _0: a, _1: b, _2: c};
	});
var _debois$elm_mdl$Material_Internal_Options$on1 = F3(
	function (event, lift, m) {
		return A3(
			_debois$elm_mdl$Material_Internal_Options$Listener,
			event,
			_elm_lang$core$Maybe$Nothing,
			A2(
				_elm_lang$core$Json_Decode$map,
				lift,
				_elm_lang$core$Json_Decode$succeed(m)));
	});
var _debois$elm_mdl$Material_Internal_Options$Set = function (a) {
	return {ctor: 'Set', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$option = _debois$elm_mdl$Material_Internal_Options$Set;
var _debois$elm_mdl$Material_Internal_Options$Many = function (a) {
	return {ctor: 'Many', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$applyContainer = F3(
	function (summary, ctor, options) {
		return A4(
			_debois$elm_mdl$Material_Internal_Options$apply,
			_elm_lang$core$Native_Utils.update(
				summary,
				{
					dispatch: _debois$elm_mdl$Material_Dispatch$clear(summary.dispatch),
					attrs: {ctor: '[]'},
					internal: {ctor: '[]'},
					config: {ctor: '_Tuple0'}
				}),
			ctor,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Internal_Options$Many(summary.config.container),
				_1: options
			},
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Internal_Options$applyInput = F3(
	function (summary, ctor, options) {
		return A4(
			_debois$elm_mdl$Material_Internal_Options$apply,
			_elm_lang$core$Native_Utils.update(
				summary,
				{
					classes: {ctor: '[]'},
					css: {ctor: '[]'},
					config: {ctor: '_Tuple0'}
				}),
			ctor,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Internal_Options$Many(summary.config.input),
				_1: options
			},
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Internal_Options$input = function (_p6) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (style, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						input: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Internal_Options$Many(style),
							_1: config.input
						}
					});
			})(_p6));
};
var _debois$elm_mdl$Material_Internal_Options$container = function (_p7) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (style, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						container: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Internal_Options$Many(style),
							_1: config.container
						}
					});
			})(_p7));
};
var _debois$elm_mdl$Material_Internal_Options$Internal = function (a) {
	return {ctor: 'Internal', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$attribute = _debois$elm_mdl$Material_Internal_Options$Internal;
var _debois$elm_mdl$Material_Internal_Options$Attribute = function (a) {
	return {ctor: 'Attribute', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$Var = function (a) {
	return {ctor: 'Var', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$variable = F2(
	function (k, v) {
		return _debois$elm_mdl$Material_Internal_Options$Var(
			{ctor: '_Tuple2', _0: k, _1: v});
	});
var _debois$elm_mdl$Material_Internal_Options$CSS = function (a) {
	return {ctor: 'CSS', _0: a};
};
var _debois$elm_mdl$Material_Internal_Options$Class = function (a) {
	return {ctor: 'Class', _0: a};
};

var _debois$elm_mdl$Material_Options$dispatch = function (_p0) {
	return _debois$elm_mdl$Material_Internal_Options$Lift(
		_elm_lang$core$Json_Decode$map(_p0));
};
var _debois$elm_mdl$Material_Options$onWithOptions = F2(
	function (evt, options) {
		return A2(
			_debois$elm_mdl$Material_Internal_Options$Listener,
			evt,
			_elm_lang$core$Maybe$Just(options));
	});
var _debois$elm_mdl$Material_Options$on = function (event) {
	return A2(_debois$elm_mdl$Material_Internal_Options$Listener, event, _elm_lang$core$Maybe$Nothing);
};
var _debois$elm_mdl$Material_Options$on1 = F2(
	function (event, m) {
		return A2(
			_debois$elm_mdl$Material_Options$on,
			event,
			_elm_lang$core$Json_Decode$succeed(m));
	});
var _debois$elm_mdl$Material_Options$onToggle = _debois$elm_mdl$Material_Options$on1('change');
var _debois$elm_mdl$Material_Options$onClick = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onDoubleClick = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseDown = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseUp = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseEnter = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseLeave = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseOver = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onMouseOut = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onCheck = function (_p1) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'change',
		A3(_elm_lang$core$Basics$flip, _elm_lang$core$Json_Decode$map, _elm_lang$html$Html_Events$targetChecked, _p1));
};
var _debois$elm_mdl$Material_Options$onBlur = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onFocus = function (msg) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _debois$elm_mdl$Material_Options$onInput = function (f) {
	return A2(
		_debois$elm_mdl$Material_Options$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, f, _elm_lang$html$Html_Events$targetValue));
};
var _debois$elm_mdl$Material_Options$container = _debois$elm_mdl$Material_Internal_Options$container;
var _debois$elm_mdl$Material_Options$input = _debois$elm_mdl$Material_Internal_Options$input;
var _debois$elm_mdl$Material_Options$id = function (_p2) {
	return _debois$elm_mdl$Material_Internal_Options$Attribute(
		_elm_lang$html$Html_Attributes$id(_p2));
};
var _debois$elm_mdl$Material_Options$attr = _debois$elm_mdl$Material_Internal_Options$Attribute;
var _debois$elm_mdl$Material_Options$attribute = _debois$elm_mdl$Material_Internal_Options$Attribute;
var _debois$elm_mdl$Material_Options$stylesheet = function (css) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(css),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Material_Options$data = F2(
	function (key, val) {
		return _debois$elm_mdl$Material_Internal_Options$Attribute(
			A2(
				_elm_lang$html$Html_Attributes$attribute,
				A2(_elm_lang$core$Basics_ops['++'], 'data-', key),
				val));
	});
var _debois$elm_mdl$Material_Options$nop = _debois$elm_mdl$Material_Internal_Options$None;
var _debois$elm_mdl$Material_Options$when = F2(
	function (guard, prop) {
		return guard ? prop : _debois$elm_mdl$Material_Options$nop;
	});
var _debois$elm_mdl$Material_Options$maybe = function (prop) {
	return A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Options$nop, prop);
};
var _debois$elm_mdl$Material_Options$many = _debois$elm_mdl$Material_Internal_Options$Many;
var _debois$elm_mdl$Material_Options$css = F2(
	function (key, value) {
		return _debois$elm_mdl$Material_Internal_Options$CSS(
			{ctor: '_Tuple2', _0: key, _1: value});
	});
var _debois$elm_mdl$Material_Options$center = _debois$elm_mdl$Material_Options$many(
	{
		ctor: '::',
		_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
		_1: {
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'align-items', 'center'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'center'),
				_1: {ctor: '[]'}
			}
		}
	});
var _debois$elm_mdl$Material_Options$scrim = function (opacity) {
	return A2(
		_debois$elm_mdl$Material_Options$css,
		'background',
		A2(
			_elm_lang$core$Basics_ops['++'],
			'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(opacity),
				'))')));
};
var _debois$elm_mdl$Material_Options$cs = function (c) {
	return _debois$elm_mdl$Material_Internal_Options$Class(c);
};
var _debois$elm_mdl$Material_Options$disabled = function (v) {
	return _debois$elm_mdl$Material_Internal_Options$Attribute(
		_elm_lang$html$Html_Attributes$disabled(v));
};
var _debois$elm_mdl$Material_Options$styled_ = F3(
	function (ctor, props, attrs) {
		return ctor(
			A2(
				_debois$elm_mdl$Material_Internal_Options$addAttributes,
				_debois$elm_mdl$Material_Internal_Options$collect_(props),
				attrs));
	});
var _debois$elm_mdl$Material_Options$img = F2(
	function (options, attrs) {
		return A4(
			_debois$elm_mdl$Material_Options$styled_,
			_elm_lang$html$Html$img,
			options,
			attrs,
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Options$styled = F2(
	function (ctor, props) {
		return ctor(
			A2(
				_debois$elm_mdl$Material_Internal_Options$addAttributes,
				_debois$elm_mdl$Material_Internal_Options$collect_(props),
				{ctor: '[]'}));
	});
var _debois$elm_mdl$Material_Options$div = _debois$elm_mdl$Material_Options$styled(_elm_lang$html$Html$div);
var _debois$elm_mdl$Material_Options$span = _debois$elm_mdl$Material_Options$styled(_elm_lang$html$Html$span);

var _debois$elm_mdl$Material_Button$_p0 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.button;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{button: x});
		}),
	{});
var _debois$elm_mdl$Material_Button$get = _debois$elm_mdl$Material_Button$_p0._0;
var _debois$elm_mdl$Material_Button$set = _debois$elm_mdl$Material_Button$_p0._1;
var _debois$elm_mdl$Material_Button$icon = _debois$elm_mdl$Material_Options$cs('mdc-button--icon');
var _debois$elm_mdl$Material_Button$fab = _debois$elm_mdl$Material_Options$cs('mdc-button--fab');
var _debois$elm_mdl$Material_Button$minifab = _debois$elm_mdl$Material_Options$many(
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Options$cs('mdc-button--mini-fab'),
		_1: {
			ctor: '::',
			_0: _debois$elm_mdl$Material_Button$fab,
			_1: {ctor: '[]'}
		}
	});
var _debois$elm_mdl$Material_Button$dense = _debois$elm_mdl$Material_Options$cs('mdc-button--dense');
var _debois$elm_mdl$Material_Button$darkTheme = _debois$elm_mdl$Material_Options$cs('mdc-button--dark-theme');
var _debois$elm_mdl$Material_Button$compact = _debois$elm_mdl$Material_Options$cs('mdc-button--compact');
var _debois$elm_mdl$Material_Button$raised = _debois$elm_mdl$Material_Options$cs('mdc-button--raised');
var _debois$elm_mdl$Material_Button$flat = _debois$elm_mdl$Material_Options$nop;
var _debois$elm_mdl$Material_Button$blurAndForward = function (event) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		A2(_elm_lang$core$Basics_ops['++'], 'on', event),
		'this.blur(); (function(self) { var e = document.createEvent(\'Event\'); e.initEvent(\'touchcancel\', true, true); self.lastChild.dispatchEvent(e); }(this));');
};
var _debois$elm_mdl$Material_Button$type_ = function (_p1) {
	return _debois$elm_mdl$Material_Internal_Options$attribute(
		_elm_lang$html$Html_Attributes$type_(_p1));
};
var _debois$elm_mdl$Material_Button$accent = _debois$elm_mdl$Material_Options$cs('mdc-button--accent');
var _debois$elm_mdl$Material_Button$primary = _debois$elm_mdl$Material_Options$cs('mdc-button--primary');
var _debois$elm_mdl$Material_Button$colored = _debois$elm_mdl$Material_Options$cs('mdc-button--colored');
var _debois$elm_mdl$Material_Button$plain = _debois$elm_mdl$Material_Options$nop;
var _debois$elm_mdl$Material_Button$disabled = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{disabled: true});
	});
var _debois$elm_mdl$Material_Button$ripple = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{ripple: true});
	});
var _debois$elm_mdl$Material_Button$link = function (href) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{
					link: _elm_lang$core$Maybe$Just(href)
				});
		});
};
var _debois$elm_mdl$Material_Button$defaultConfig = {ripple: false, link: _elm_lang$core$Maybe$Nothing, disabled: false};
var _debois$elm_mdl$Material_Button$view = F3(
	function (lift, model, options) {
		var _p2 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Button$defaultConfig, options);
		var summary = _p2;
		var config = _p2.config;
		return A4(
			_debois$elm_mdl$Material_Internal_Options$apply,
			summary,
			(!_elm_lang$core$Native_Utils.eq(config.link, _elm_lang$core$Maybe$Nothing)) ? _elm_lang$html$Html$a : _elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-button'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-js-button'),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$when,
							summary.config.ripple,
							_debois$elm_mdl$Material_Options$cs('mdc-js-ripple-effect')),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'box-sizing', 'border-box'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									(!_elm_lang$core$Native_Utils.eq(config.link, _elm_lang$core$Maybe$Nothing)) && (!config.disabled),
									_debois$elm_mdl$Material_Internal_Options$attribute(
										_elm_lang$html$Html_Attributes$href(
											A2(_elm_lang$core$Maybe$withDefault, '', config.link)))),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$when,
										config.disabled,
										_debois$elm_mdl$Material_Internal_Options$attribute(
											_elm_lang$html$Html_Attributes$disabled(true))),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$when,
											config.disabled,
											_debois$elm_mdl$Material_Options$cs('mdc-button--disabled')),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Helpers$blurOn('mouseup'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Helpers$blurOn('mouseleave'),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Helpers$blurOn('touchend'),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _debois$elm_mdl$Material_Button$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Button$get, _debois$elm_mdl$Material_Button$view, _debois$elm_mdl$Material_Msg$ButtonMsg);
var _debois$elm_mdl$Material_Button$update = F2(
	function (action, model) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Button$react = A4(
	_debois$elm_mdl$Material_Component$react,
	_debois$elm_mdl$Material_Button$get,
	_debois$elm_mdl$Material_Button$set,
	_debois$elm_mdl$Material_Msg$ButtonMsg,
	_debois$elm_mdl$Material_Component$generalise(_debois$elm_mdl$Material_Button$update));
var _debois$elm_mdl$Material_Button$defaultModel = {};
var _debois$elm_mdl$Material_Button$Model = {};
var _debois$elm_mdl$Material_Button$Config = F3(
	function (a, b, c) {
		return {ripple: a, link: b, disabled: c};
	});

var _debois$elm_mdl$Material_Fab$disabled = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{disabled: true});
	});
var _debois$elm_mdl$Material_Fab$mini = _debois$elm_mdl$Material_Options$cs('mdc-fab--mini');
var _debois$elm_mdl$Material_Fab$plain = _debois$elm_mdl$Material_Options$cs('mdc-fab--plain');
var _debois$elm_mdl$Material_Fab$defaultConfig = {disabled: false};
var _debois$elm_mdl$Material_Fab$view = F4(
	function (lift, model, options, icon) {
		var _p0 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Fab$defaultConfig, options);
		var summary = _p0;
		var config = _p0.config;
		return A5(
			_debois$elm_mdl$Material_Internal_Options$apply,
			summary,
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-fab'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$when,
							config.disabled,
							_debois$elm_mdl$Material_Internal_Options$attribute(
								_elm_lang$html$Html_Attributes$disabled(true))),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								config.disabled,
								_debois$elm_mdl$Material_Options$cs('mdc-fab--disabled')),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-fab__icon'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(icon),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Fab$update = F2(
	function (msg, model) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Fab$defaultModel = {};
var _debois$elm_mdl$Material_Fab$_p1 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.fab;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{fab: x});
		}),
	_debois$elm_mdl$Material_Fab$defaultModel);
var _debois$elm_mdl$Material_Fab$get = _debois$elm_mdl$Material_Fab$_p1._0;
var _debois$elm_mdl$Material_Fab$set = _debois$elm_mdl$Material_Fab$_p1._1;
var _debois$elm_mdl$Material_Fab$react = A4(
	_debois$elm_mdl$Material_Component$react,
	_debois$elm_mdl$Material_Fab$get,
	_debois$elm_mdl$Material_Fab$set,
	_debois$elm_mdl$Material_Msg$FabMsg,
	_debois$elm_mdl$Material_Component$generalise(_debois$elm_mdl$Material_Fab$update));
var _debois$elm_mdl$Material_Fab$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Fab$get, _debois$elm_mdl$Material_Fab$view, _debois$elm_mdl$Material_Msg$FabMsg);
var _debois$elm_mdl$Material_Fab$Model = {};
var _debois$elm_mdl$Material_Fab$Config = function (a) {
	return {disabled: a};
};

var _elm_lang$animation_frame$Native_AnimationFrame = function()
{

function create()
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}

return {
	create: create
};

}();

var _elm_lang$animation_frame$AnimationFrame$rAF = _elm_lang$animation_frame$Native_AnimationFrame.create(
	{ctor: '_Tuple0'});
var _elm_lang$animation_frame$AnimationFrame$subscription = _elm_lang$core$Native_Platform.leaf('AnimationFrame');
var _elm_lang$animation_frame$AnimationFrame$State = F3(
	function (a, b, c) {
		return {subs: a, request: b, oldTime: c};
	});
var _elm_lang$animation_frame$AnimationFrame$init = _elm_lang$core$Task$succeed(
	A3(
		_elm_lang$animation_frame$AnimationFrame$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing,
		0));
var _elm_lang$animation_frame$AnimationFrame$onEffects = F3(
	function (router, subs, _p0) {
		var _p1 = _p0;
		var _p5 = _p1.request;
		var _p4 = _p1.oldTime;
		var _p2 = {ctor: '_Tuple2', _0: _p5, _1: subs};
		if (_p2._0.ctor === 'Nothing') {
			if (_p2._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(
					A3(
						_elm_lang$animation_frame$AnimationFrame$State,
						{ctor: '[]'},
						_elm_lang$core$Maybe$Nothing,
						_p4));
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (time) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$animation_frame$AnimationFrame$State,
										subs,
										_elm_lang$core$Maybe$Just(pid),
										time));
							},
							_elm_lang$core$Time$now);
					},
					_elm_lang$core$Process$spawn(
						A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Platform$sendToSelf(router),
							_elm_lang$animation_frame$AnimationFrame$rAF)));
			}
		} else {
			if (_p2._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p3) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								{ctor: '[]'},
								_elm_lang$core$Maybe$Nothing,
								_p4));
					},
					_elm_lang$core$Process$kill(_p2._0._0));
			} else {
				return _elm_lang$core$Task$succeed(
					A3(_elm_lang$animation_frame$AnimationFrame$State, subs, _p5, _p4));
			}
		}
	});
var _elm_lang$animation_frame$AnimationFrame$onSelfMsg = F3(
	function (router, newTime, _p6) {
		var _p7 = _p6;
		var _p10 = _p7.subs;
		var diff = newTime - _p7.oldTime;
		var send = function (sub) {
			var _p8 = sub;
			if (_p8.ctor === 'Time') {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(newTime));
			} else {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(diff));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			function (pid) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p9) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								_p10,
								_elm_lang$core$Maybe$Just(pid),
								newTime));
					},
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p10)));
			},
			_elm_lang$core$Process$spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToSelf(router),
					_elm_lang$animation_frame$AnimationFrame$rAF)));
	});
var _elm_lang$animation_frame$AnimationFrame$Diff = function (a) {
	return {ctor: 'Diff', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$diffs = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Diff(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$Time = function (a) {
	return {ctor: 'Time', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$times = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Time(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$subMap = F2(
	function (func, sub) {
		var _p11 = sub;
		if (_p11.ctor === 'Time') {
			return _elm_lang$animation_frame$AnimationFrame$Time(
				function (_p12) {
					return func(
						_p11._0(_p12));
				});
		} else {
			return _elm_lang$animation_frame$AnimationFrame$Diff(
				function (_p13) {
					return func(
						_p11._0(_p13));
				});
		}
	});
_elm_lang$core$Native_Platform.effectManagers['AnimationFrame'] = {pkg: 'elm-lang/animation-frame', init: _elm_lang$animation_frame$AnimationFrame$init, onEffects: _elm_lang$animation_frame$AnimationFrame$onEffects, onSelfMsg: _elm_lang$animation_frame$AnimationFrame$onSelfMsg, tag: 'sub', subMap: _elm_lang$animation_frame$AnimationFrame$subMap};

var _debois$elm_mdl$Material_Menu$onSelect = _debois$elm_mdl$Material_Options$on('click');
var _debois$elm_mdl$Material_Menu$toPx = function (_p0) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'px',
		_elm_lang$core$Basics$toString(_p0));
};
var _debois$elm_mdl$Material_Menu$rect = F4(
	function (x, y, w, h) {
		return function (coords) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'rect(',
				A2(_elm_lang$core$Basics_ops['++'], coords, ')'));
		}(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_debois$elm_mdl$Material_Menu$toPx,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {
								ctor: '::',
								_0: w,
								_1: {
									ctor: '::',
									_0: h,
									_1: {ctor: '[]'}
								}
							}
						}
					})));
	});
var _debois$elm_mdl$Material_Menu$decodeGeometry = A6(
	_elm_lang$core$Json_Decode$map5,
	_debois$elm_mdl$Material_Internal_Menu$Geometry,
	A2(
		_debois$elm_dom$DOM$childNode,
		0,
		A3(
			_elm_lang$core$Json_Decode$map2,
			F2(
				function (offsetWidth, offsetHeight) {
					return {width: offsetWidth, height: offsetHeight};
				}),
			_debois$elm_dom$DOM$offsetWidth,
			_debois$elm_dom$DOM$offsetHeight)),
	A2(
		_debois$elm_dom$DOM$childNode,
		0,
		_debois$elm_dom$DOM$childNodes(
			A3(
				_elm_lang$core$Json_Decode$map2,
				F2(
					function (offsetTop, offsetHeight) {
						return {top: offsetTop, height: offsetHeight};
					}),
				_debois$elm_dom$DOM$offsetTop,
				_debois$elm_dom$DOM$offsetHeight))),
	_elm_lang$core$Json_Decode$succeed(
		{isRtl: false}),
	A2(
		_elm_lang$core$Json_Decode$map,
		function (rect) {
			return {top: rect.top, left: rect.left, bottom: rect.top + rect.height, right: rect.left + rect.width};
		},
		_debois$elm_dom$DOM$parentElement(_debois$elm_dom$DOM$boundingClientRect)),
	function () {
		var traverseToRoot = function (decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: _debois$elm_dom$DOM$parentElement(
						_elm_lang$core$Json_Decode$lazy(
							function (_p1) {
								return traverseToRoot(decoder);
							})),
					_1: {
						ctor: '::',
						_0: decoder,
						_1: {ctor: '[]'}
					}
				});
		};
		return traverseToRoot(
			A3(
				_elm_lang$core$Json_Decode$map2,
				F2(
					function (clientWidth, clientHeight) {
						return {width: clientWidth, height: clientHeight};
					}),
				_debois$elm_dom$DOM$offsetWidth,
				_debois$elm_dom$DOM$offsetHeight));
	}());
var _debois$elm_mdl$Material_Menu$decodeGeometryOnButton = _debois$elm_dom$DOM$target(
	_debois$elm_dom$DOM$nextSibling(_debois$elm_mdl$Material_Menu$decodeGeometry));
var _debois$elm_mdl$Material_Menu$decodeKeyCode = _elm_lang$html$Html_Events$keyCode;
var _debois$elm_mdl$Material_Menu$decodeKey = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'key',
		_1: {ctor: '[]'}
	},
	_elm_lang$core$Json_Decode$string);
var _debois$elm_mdl$Material_Menu$decodeMeta = A5(
	_elm_lang$core$Json_Decode$map4,
	F4(
		function (altKey, ctrlKey, metaKey, shiftKey) {
			return {altKey: altKey, ctrlKey: ctrlKey, metaKey: metaKey, shiftKey: shiftKey};
		}),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'altKey',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$bool),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'ctrlKey',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$bool),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'metaKey',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$bool),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'shiftKey',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$bool));
var _debois$elm_mdl$Material_Menu$index = function (_p2) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (index, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						index: _elm_lang$core$Maybe$Just(index)
					});
			})(_p2));
};
var _debois$elm_mdl$Material_Menu$open = _debois$elm_mdl$Material_Options$cs('mdc-simple-menu--open');
var _debois$elm_mdl$Material_Menu$defaultConfig = {index: _elm_lang$core$Maybe$Nothing, alignment: _elm_lang$core$Maybe$Nothing};
var _debois$elm_mdl$Material_Menu$update = F3(
	function (fwd, msg, model) {
		update:
		while (true) {
			var _p3 = msg;
			switch (_p3.ctor) {
				case 'Toggle':
					var _v1 = fwd,
						_v2 = (model.open ? _debois$elm_mdl$Material_Internal_Menu$Close : _debois$elm_mdl$Material_Internal_Menu$Open)(_p3._0),
						_v3 = model;
					fwd = _v1;
					msg = _v2;
					model = _v3;
					continue update;
				case 'Open':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								open: true,
								geometry: _elm_lang$core$Maybe$Just(_p3._0),
								animating: true,
								time: 0,
								startScaleX: model.scaleX,
								startScaleY: model.scaleY
							}),
						{ctor: '[]'});
				case 'Close':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								open: false,
								geometry: _elm_lang$core$Maybe$Just(_p3._0),
								animating: true,
								time: 0,
								startScaleX: model.scaleX,
								startScaleY: model.scaleY
							}),
						{ctor: '[]'});
				case 'Click':
					var geometry = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Internal_Menu$defaultGeometry, model.geometry);
					if (model.open) {
						var _v4 = fwd,
							_v5 = _debois$elm_mdl$Material_Internal_Menu$Close(geometry),
							_v6 = model;
						fwd = _v4;
						msg = _v5;
						model = _v6;
						continue update;
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
				case 'Tick':
					var startScaleY = function () {
						var geometry = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Internal_Menu$defaultGeometry, model.geometry);
						var height = geometry.itemsContainer.height;
						var itemHeight = A2(
							_elm_lang$core$Maybe$withDefault,
							0,
							A2(
								_elm_lang$core$Maybe$map,
								function (_) {
									return _.height;
								},
								_elm_lang$core$List$head(geometry.itemGeometries)));
						return model.open ? A2(
							_elm_lang$core$Basics$max,
							_elm_lang$core$Native_Utils.eq(height, 0) ? 0 : (itemHeight / height),
							model.startScaleY) : model.startScaleY;
					}();
					var startScaleX = model.startScaleX;
					var targetScale = model.open ? 1 : 0;
					var time = A3(_elm_lang$core$Basics$clamp, 0, 1, model.time + _p3._0);
					var transitionY2 = 1;
					var transitionX2 = 0.2;
					var transitionY1 = 0;
					var transitionX1 = 0;
					var transitionScaleAdjustmentY = 0.2;
					var timeY = model.open ? A3(_elm_lang$core$Basics$clamp, 0, 1, (time - transitionScaleAdjustmentY) / (1 - transitionScaleAdjustmentY)) : A3(_elm_lang$core$Basics$clamp, 0, 1, time);
					var easeY = timeY;
					var scaleY = startScaleY + ((targetScale - startScaleY) * easeY);
					var invScaleY = 1 / (_elm_lang$core$Native_Utils.eq(scaleY, 0) ? 1 : scaleY);
					var transitionScaleAdjustmentX = 0.5;
					var timeX = model.open ? A3(_elm_lang$core$Basics$clamp, 0, 1, time + transitionScaleAdjustmentX) : A3(_elm_lang$core$Basics$clamp, 0, 1, (time - transitionScaleAdjustmentX) / (1 - transitionScaleAdjustmentX));
					var easeX = timeX;
					var scaleX = startScaleX + ((targetScale - startScaleX) * easeX);
					var invScaleX = 1 / (_elm_lang$core$Native_Utils.eq(scaleX, 0) ? 1 : scaleX);
					var transitionDurationMs = 300;
					var selectedTriggerDelay = 50;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								time: time,
								animating: _elm_lang$core$Native_Utils.cmp(time, 1) < 0,
								scaleX: scaleX,
								scaleY: scaleX,
								invScaleX: invScaleX,
								invScaleY: invScaleY
							}),
						{ctor: '[]'});
				case 'KeyDown':
					var _p5 = _p3._2;
					var _p4 = _p3._1;
					var isSpace = _elm_lang$core$Native_Utils.eq(_p4, 'Space') || _elm_lang$core$Native_Utils.eq(_p5, 32);
					var isArrowDown = _elm_lang$core$Native_Utils.eq(_p4, 'ArrowDown') || _elm_lang$core$Native_Utils.eq(_p5, 40);
					var isArrowUp = _elm_lang$core$Native_Utils.eq(_p4, 'ArrowUp') || _elm_lang$core$Native_Utils.eq(_p5, 38);
					var isTab = _elm_lang$core$Native_Utils.eq(_p4, 'Tab') || _elm_lang$core$Native_Utils.eq(_p5, 9);
					return (_p3._0.altKey || (_p3._0.ctrlKey || _p3._0.metaKey)) ? A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'}) : A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				default:
					var _p7 = _p3._2;
					var _p6 = _p3._1;
					var geometry = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Internal_Menu$defaultGeometry, model.geometry);
					var isEscape = _elm_lang$core$Native_Utils.eq(_p6, 'Escape') || _elm_lang$core$Native_Utils.eq(_p7, 27);
					var isSpace = _elm_lang$core$Native_Utils.eq(_p6, 'Space') || _elm_lang$core$Native_Utils.eq(_p7, 32);
					var isEnter = _elm_lang$core$Native_Utils.eq(_p6, 'Enter') || _elm_lang$core$Native_Utils.eq(_p7, 13);
					if (_p3._0.altKey || (_p3._0.ctrlKey || _p3._0.metaKey)) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						if (isEnter || isSpace) {
							var _v7 = fwd,
								_v8 = _debois$elm_mdl$Material_Internal_Menu$Close(geometry),
								_v9 = model;
							fwd = _v7;
							msg = _v8;
							model = _v9;
							continue update;
						} else {
							if (isEscape) {
								var _v10 = fwd,
									_v11 = _debois$elm_mdl$Material_Internal_Menu$Close(geometry),
									_v12 = model;
								fwd = _v10;
								msg = _v11;
								model = _v12;
								continue update;
							} else {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{ctor: '[]'});
							}
						}
					}
			}
		}
	});
var _debois$elm_mdl$Material_Menu$connect = function (lift) {
	return _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Options$on,
				'click',
				A2(
					_elm_lang$core$Json_Decode$map,
					function (_p8) {
						return lift(
							_debois$elm_mdl$Material_Internal_Menu$Toggle(_p8));
					},
					_debois$elm_mdl$Material_Menu$decodeGeometryOnButton)),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Material_Menu$attach = F2(
	function (lift, idx) {
		return _debois$elm_mdl$Material_Options$many(
			{
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Options$on,
					'click',
					A2(
						_elm_lang$core$Json_Decode$map,
						function (_p9) {
							return lift(
								A2(
									_debois$elm_mdl$Material_Msg$MenuMsg,
									idx,
									_debois$elm_mdl$Material_Internal_Menu$Toggle(_p9)));
						},
						_debois$elm_mdl$Material_Menu$decodeGeometryOnButton)),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Menu$ul = F3(
	function (node, options, items) {
		return {node: node, options: options, items: items};
	});
var _debois$elm_mdl$Material_Menu$li = F3(
	function (node, options, childs) {
		return {node: node, options: options, childs: childs};
	});
var _debois$elm_mdl$Material_Menu$defaultModel = {index: _elm_lang$core$Maybe$Nothing, open: false, geometry: _elm_lang$core$Maybe$Nothing, animating: false, time: 0, startScaleX: 0, startScaleY: 0, scaleX: 0, scaleY: 0, invScaleX: 1, invScaleY: 1};
var _debois$elm_mdl$Material_Menu$_p10 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.menu;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{menu: x});
		}),
	_debois$elm_mdl$Material_Menu$defaultModel);
var _debois$elm_mdl$Material_Menu$get = _debois$elm_mdl$Material_Menu$_p10._0;
var _debois$elm_mdl$Material_Menu$set = _debois$elm_mdl$Material_Menu$_p10._1;
var _debois$elm_mdl$Material_Menu$react = F4(
	function (lift, msg, idx, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			function (_p11) {
				return _elm_lang$core$Maybe$Just(
					A3(_debois$elm_mdl$Material_Menu$set, idx, store, _p11));
			},
			A3(
				_debois$elm_mdl$Material_Menu$update,
				lift,
				msg,
				A2(_debois$elm_mdl$Material_Menu$get, idx, store)));
	});
var _debois$elm_mdl$Material_Menu$subscriptions = function (model) {
	var transitionDurationMs = 300;
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: model.open ? _elm_lang$mouse$Mouse$clicks(_debois$elm_mdl$Material_Internal_Menu$Click) : _elm_lang$core$Platform_Sub$none,
			_1: {
				ctor: '::',
				_0: model.animating ? _elm_lang$animation_frame$AnimationFrame$diffs(
					function (dt) {
						return _debois$elm_mdl$Material_Internal_Menu$Tick(dt / transitionDurationMs);
					}) : _elm_lang$core$Platform_Sub$none,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Material_Menu$subs = A3(
	_debois$elm_mdl$Material_Component$subs,
	_debois$elm_mdl$Material_Msg$MenuMsg,
	function (_) {
		return _.menu;
	},
	_debois$elm_mdl$Material_Menu$subscriptions);
var _debois$elm_mdl$Material_Menu$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {index: a, open: b, geometry: c, animating: d, time: e, startScaleX: f, startScaleY: g, scaleX: h, scaleY: i, invScaleX: j, invScaleY: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _debois$elm_mdl$Material_Menu$Item = F3(
	function (a, b, c) {
		return {node: a, options: b, childs: c};
	});
var _debois$elm_mdl$Material_Menu$Config = F2(
	function (a, b) {
		return {index: a, alignment: b};
	});
var _debois$elm_mdl$Material_Menu$OpenFromBottomRight = {ctor: 'OpenFromBottomRight'};
var _debois$elm_mdl$Material_Menu$openFromBottomRight = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				alignment: _elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromBottomRight)
			});
	});
var _debois$elm_mdl$Material_Menu$OpenFromBottomLeft = {ctor: 'OpenFromBottomLeft'};
var _debois$elm_mdl$Material_Menu$openFromBottomLeft = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				alignment: _elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromBottomLeft)
			});
	});
var _debois$elm_mdl$Material_Menu$OpenFromTopRight = {ctor: 'OpenFromTopRight'};
var _debois$elm_mdl$Material_Menu$openFromTopRight = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				alignment: _elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromTopRight)
			});
	});
var _debois$elm_mdl$Material_Menu$OpenFromTopLeft = {ctor: 'OpenFromTopLeft'};
var _debois$elm_mdl$Material_Menu$openFromTopLeft = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				alignment: _elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromTopLeft)
			});
	});
var _debois$elm_mdl$Material_Menu$view = F4(
	function (lift, model, options, ul) {
		var geometry = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Internal_Menu$defaultGeometry, model.geometry);
		var _p12 = function () {
			var height = geometry.itemsContainer.height;
			var width = geometry.itemsContainer.width;
			var anchor = geometry.anchor;
			var bottomOverflow = height - anchor.bottom;
			var rightOverflow = width - anchor.right;
			var extendsBeyondRightBounds = _elm_lang$core$Native_Utils.cmp(rightOverflow, 0) > 0;
			var adapter = geometry.adapter;
			var windowHeight = geometry.window.height;
			var topOverflow = (anchor.top + height) + windowHeight;
			var extendsBeyondTopBounds = _elm_lang$core$Native_Utils.cmp(topOverflow, 0) > 0;
			var vertical = (extendsBeyondTopBounds && (_elm_lang$core$Native_Utils.cmp(bottomOverflow, topOverflow) < 0)) ? 'bottom' : 'top';
			var windowWidth = geometry.window.width;
			var leftOverflow = (anchor.left + width) + windowWidth;
			var extendsBeyondLeftBounds = _elm_lang$core$Native_Utils.cmp(leftOverflow, 0) > 0;
			var horizontal = adapter.isRtl ? ((extendsBeyondRightBounds && (_elm_lang$core$Native_Utils.cmp(leftOverflow, rightOverflow) < 0)) ? 'left' : 'right') : ((extendsBeyondLeftBounds && (_elm_lang$core$Native_Utils.cmp(rightOverflow, leftOverflow) < 0)) ? 'right' : 'left');
			var transformOrigin = A2(
				_elm_lang$core$Basics_ops['++'],
				vertical,
				A2(_elm_lang$core$Basics_ops['++'], ' ', horizontal));
			var position = {horizontal: horizontal, vertical: vertical};
			return {ctor: '_Tuple2', _0: position, _1: transformOrigin};
		}();
		var position = _p12._0;
		var transformOrigin = _p12._1;
		var _p13 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Menu$defaultConfig, options);
		var summary = _p13;
		var config = _p13.config;
		var transitionDelay = F2(
			function (i, itemGeometry) {
				var toFixed = function (value) {
					return _elm_lang$core$Basics$toFloat(
						_elm_lang$core$Basics$floor(1000 * value)) / 1000;
				};
				var itemHeight = itemGeometry.height;
				var itemTop = itemGeometry.top;
				var transitionScaleAdjustmentY = 0.2;
				var start = transitionScaleAdjustmentY;
				var transitionDurationMs = 300;
				var transitionDuration = transitionDurationMs / 1000;
				var height = geometry.itemsContainer.height;
				var itemDelayFraction = _elm_lang$core$Native_Utils.eq(height, 0) ? 0 : ((_elm_lang$core$Native_Utils.eq(
					config.alignment,
					_elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromBottomLeft)) || _elm_lang$core$Native_Utils.eq(
					config.alignment,
					_elm_lang$core$Maybe$Just(_debois$elm_mdl$Material_Menu$OpenFromBottomRight))) ? (((height - itemTop) - itemHeight) / height) : (itemTop / height));
				var itemDelay = (start + (itemDelayFraction * (1 - start))) * transitionDuration;
				var numItems = _elm_lang$core$List$length(ul.items);
				return toFixed(itemDelay);
			});
		return A5(
			_debois$elm_mdl$Material_Internal_Options$apply,
			summary,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-simple-menu'),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						model.open,
						_debois$elm_mdl$Material_Options$cs('mdc-simple-menu--open')),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$when,
							model.animating,
							_debois$elm_mdl$Material_Options$cs('mdc-simple-menu--animating')),
						_1: {
							ctor: '::',
							_0: function (_p14) {
								return A2(
									_debois$elm_mdl$Material_Options$when,
									!_elm_lang$core$Native_Utils.eq(config.alignment, _elm_lang$core$Maybe$Nothing),
									_debois$elm_mdl$Material_Options$cs(_p14));
							}(
								function () {
									var _p15 = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Menu$OpenFromTopLeft, config.alignment);
									switch (_p15.ctor) {
										case 'OpenFromTopLeft':
											return 'mdc-simple-menu--open-from-top-left';
										case 'OpenFromTopRight':
											return 'mdc-simple-menu--open-from-top-right';
										case 'OpenFromBottomLeft':
											return 'mdc-simple-menu--open-from-bottom-left';
										default:
											return 'mdc-simple-menu--open-from-bottom-right';
									}
								}()),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$css,
									'transform',
									A2(
										_elm_lang$core$Basics_ops['++'],
										'scale(',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(model.scaleX),
											A2(
												_elm_lang$core$Basics_ops['++'],
												',',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(model.scaleY),
													')'))))),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, position.horizontal, '0'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, position.vertical, '0'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'transform-origin', transformOrigin),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					ul.node,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-simple-menu__items'),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$css,
								'transform',
								A2(
									_elm_lang$core$Basics_ops['++'],
									'scale(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(model.invScaleX),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(model.invScaleY),
												')'))))),
							_1: ul.options
						}
					},
					model.open ? A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, _p16) {
								var _p17 = _p16;
								var _p18 = _p17._0;
								return A2(
									_p18.node,
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$css,
											'transition-delay',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(
													A2(transitionDelay, i, _p17._1)),
												's')),
										_1: _p18.options
									},
									_p18.childs);
							}),
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							ul.items,
							geometry.itemGeometries)) : A2(
						_elm_lang$core$List$map,
						function (item) {
							return A2(item.node, item.options, item.childs);
						},
						ul.items)),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Menu$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Menu$get, _debois$elm_mdl$Material_Menu$view, _debois$elm_mdl$Material_Msg$MenuMsg);

var _debois$elm_mdl$Material_Ripple$decodeGeometry = function (type_) {
	return A4(
		_elm_lang$core$Json_Decode$map3,
		F3(
			function (isSurfaceDisabled, event, frame) {
				return {isSurfaceDisabled: isSurfaceDisabled, event: event, frame: frame};
			}),
		_debois$elm_dom$DOM$target(
			_elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Json_Decode$map,
						_elm_lang$core$Basics$always(true),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'disabled',
								_1: {ctor: '[]'}
							},
							_elm_lang$core$Json_Decode$string)),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$succeed(false),
						_1: {ctor: '[]'}
					}
				})),
		A3(
			_elm_lang$core$Json_Decode$map2,
			F2(
				function (pageX, pageY) {
					return {type_: type_, pageX: pageX, pageY: pageY};
				}),
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'pageX',
					_1: {ctor: '[]'}
				},
				_elm_lang$core$Json_Decode$float),
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'pageY',
					_1: {ctor: '[]'}
				},
				_elm_lang$core$Json_Decode$float)),
		_debois$elm_dom$DOM$target(_debois$elm_dom$DOM$boundingClientRect));
};
var _debois$elm_mdl$Material_Ripple$primary = _debois$elm_mdl$Material_Options$cs('mdc-ripple-surface--primary');
var _debois$elm_mdl$Material_Ripple$accent = _debois$elm_mdl$Material_Options$cs('mdc-ripple-surface--accent');
var _debois$elm_mdl$Material_Ripple$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Focus':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							focus: true,
							geometry: model.activated ? model.geometry : _p0._0
						}),
					{ctor: '[]'});
			case 'Blur':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{focus: false}),
					{ctor: '[]'});
			case 'Activate':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{activated: true, geometry: _p0._0}),
					{ctor: '[]'});
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{activated: false, focus: false}),
					{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Material_Ripple$defaultModel = {focus: false, activated: false, geometry: _debois$elm_mdl$Material_Internal_Ripple$defaultGeometry};
var _debois$elm_mdl$Material_Ripple$model = _debois$elm_mdl$Material_Ripple$defaultModel;
var _debois$elm_mdl$Material_Ripple$view = F4(
	function (isUnbounded, lift_, index, store) {
		var model = A2(
			_elm_lang$core$Maybe$withDefault,
			_debois$elm_mdl$Material_Ripple$defaultModel,
			A2(_elm_lang$core$Dict$get, index, store.ripple));
		var geometry = model.geometry;
		var surfaceWidth = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(geometry.frame.width),
			'px');
		var surfaceHeight = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(geometry.frame.height),
			'px');
		var surfaceDiameter = _elm_lang$core$Basics$sqrt(
			Math.pow(geometry.frame.width, 2) + Math.pow(geometry.frame.height, 2));
		var maxRadius = surfaceDiameter + 10;
		var maxDimension = A2(_elm_lang$core$Basics$max, geometry.frame.width, geometry.frame.height);
		var initialSize = maxDimension * 0.6;
		var fgSize = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(initialSize),
			'px');
		var fgScale = _elm_lang$core$Basics$toString(maxRadius / initialSize);
		var endPoint = {x: (geometry.frame.width - initialSize) / 2, y: (geometry.frame.height - initialSize) / 2};
		var translateEnd = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(endPoint.x),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'px, ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(endPoint.y),
					'px')));
		var wasActivatedByPointer = A2(
			_elm_lang$core$List$member,
			geometry.event.type_,
			{
				ctor: '::',
				_0: 'mousedown',
				_1: {
					ctor: '::',
					_0: 'touchstart',
					_1: {
						ctor: '::',
						_0: 'pointerdown',
						_1: {ctor: '[]'}
					}
				}
			});
		var startPoint = (wasActivatedByPointer && (!isUnbounded)) ? {x: (geometry.event.pageX - geometry.frame.left) - (initialSize / 2), y: (geometry.event.pageY - geometry.frame.top) - (initialSize / 2)} : {x: (geometry.frame.width - initialSize) / 2, y: (geometry.frame.height - initialSize) / 2};
		var translateStart = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(startPoint.x),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'px, ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(startPoint.y),
					'px')));
		var top = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(startPoint.y),
			'px');
		var left = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(startPoint.x),
			'px');
		var summary = A2(
			_debois$elm_mdl$Material_Internal_Options$collect,
			{ctor: '_Tuple0'},
			_elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-surface-width', surfaceWidth),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-surface-height', surfaceHeight),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-fg-size', fgSize),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-fg-scale', fgScale),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: isUnbounded ? {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-top', top),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-left', left),
								_1: {ctor: '[]'}
							}
						} : {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-fg-translate-start', translateStart),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Internal_Options$variable, '--mdc-ripple-fg-translate-end', translateEnd),
								_1: {ctor: '[]'}
							}
						},
						_1: {ctor: '[]'}
					}
				}));
		var _p1 = _debois$elm_mdl$Material_Internal_Options$cssVariables(summary);
		var selector = _p1._0;
		var styleNode = _p1._1;
		var lift = function (_p2) {
			return lift_(
				A2(_debois$elm_mdl$Material_Msg$RippleMsg, index, _p2));
		};
		return {
			ctor: '_Tuple2',
			_0: _debois$elm_mdl$Material_Options$many(
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$on,
						'focus',
						A2(
							_elm_lang$core$Json_Decode$map,
							function (_p3) {
								return lift(
									_debois$elm_mdl$Material_Internal_Ripple$Focus(_p3));
							},
							_debois$elm_mdl$Material_Ripple$decodeGeometry('focus'))),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$on,
							'blur',
							_elm_lang$core$Json_Decode$succeed(
								lift(_debois$elm_mdl$Material_Internal_Ripple$Blur))),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$on,
								'keydown',
								A2(
									_elm_lang$core$Json_Decode$map,
									function (_p4) {
										return lift(
											_debois$elm_mdl$Material_Internal_Ripple$Activate(_p4));
									},
									_debois$elm_mdl$Material_Ripple$decodeGeometry('keydown'))),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$on,
									'keyup',
									_elm_lang$core$Json_Decode$succeed(
										lift(_debois$elm_mdl$Material_Internal_Ripple$Deactivate))),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$on,
										'mousedown',
										A2(
											_elm_lang$core$Json_Decode$map,
											function (_p5) {
												return lift(
													_debois$elm_mdl$Material_Internal_Ripple$Activate(_p5));
											},
											_debois$elm_mdl$Material_Ripple$decodeGeometry('mousedown'))),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$on,
											'mouseup',
											_elm_lang$core$Json_Decode$succeed(
												lift(_debois$elm_mdl$Material_Internal_Ripple$Deactivate))),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$on,
												'pointerdown',
												A2(
													_elm_lang$core$Json_Decode$map,
													function (_p6) {
														return lift(
															_debois$elm_mdl$Material_Internal_Ripple$Activate(_p6));
													},
													_debois$elm_mdl$Material_Ripple$decodeGeometry('pointerdown'))),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$on,
													'pointerup',
													_elm_lang$core$Json_Decode$succeed(
														lift(_debois$elm_mdl$Material_Internal_Ripple$Deactivate))),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$on,
														'touchstart',
														A2(
															_elm_lang$core$Json_Decode$map,
															function (_p7) {
																return lift(
																	_debois$elm_mdl$Material_Internal_Ripple$Activate(_p7));
															},
															_debois$elm_mdl$Material_Ripple$decodeGeometry('touchstart'))),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$on,
															'touchend',
															_elm_lang$core$Json_Decode$succeed(
																lift(_debois$elm_mdl$Material_Internal_Ripple$Deactivate))),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$cs('mdc-ripple-surface'),
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Material_Options$cs('mdc-ripple-upgraded'),
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Options$attribute(
																		_elm_lang$html$Html_Attributes$tabindex(0)),
																	_1: {
																		ctor: '::',
																		_0: function (_p8) {
																			return A2(
																				_debois$elm_mdl$Material_Options$when,
																				isUnbounded,
																				_debois$elm_mdl$Material_Options$many(_p8));
																		}(
																			{
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_Options$cs('mdc-ripple-upgraded--unbounded'),
																				_1: {
																					ctor: '::',
																					_0: A2(_debois$elm_mdl$Material_Options$css, 'overflow', 'visible'),
																					_1: {
																						ctor: '::',
																						_0: A2(_debois$elm_mdl$Material_Options$data, 'data-mdc-ripple-is-unbounded', ''),
																						_1: {ctor: '[]'}
																					}
																				}
																			}),
																		_1: {
																			ctor: '::',
																			_0: function (_p9) {
																				return A2(
																					_debois$elm_mdl$Material_Options$when,
																					model.activated,
																					_debois$elm_mdl$Material_Options$many(_p9));
																			}(
																				{
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_Options$cs('mdc-ripple-upgraded--background-active-fill'),
																					_1: {
																						ctor: '::',
																						_0: _debois$elm_mdl$Material_Options$cs('mdc-ripple-upgraded--foreground-activation'),
																						_1: {ctor: '[]'}
																					}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_debois$elm_mdl$Material_Options$when,
																					model.focus,
																					_debois$elm_mdl$Material_Options$cs('mdc-ripple-upgraded--background-focused')),
																				_1: {
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_Options$cs(selector),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: styleNode
		};
	});
var _debois$elm_mdl$Material_Ripple$bounded = F3(
	function (lift_, index, store) {
		return A4(_debois$elm_mdl$Material_Ripple$view, false, lift_, index, store);
	});
var _debois$elm_mdl$Material_Ripple$unbounded = F3(
	function (lift_, index, store) {
		return A4(_debois$elm_mdl$Material_Ripple$view, true, lift_, index, store);
	});
var _debois$elm_mdl$Material_Ripple$_p10 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.ripple;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{ripple: x});
		}),
	_debois$elm_mdl$Material_Ripple$defaultModel);
var _debois$elm_mdl$Material_Ripple$get = _debois$elm_mdl$Material_Ripple$_p10._0;
var _debois$elm_mdl$Material_Ripple$set = _debois$elm_mdl$Material_Ripple$_p10._1;
var _debois$elm_mdl$Material_Ripple$react = A4(
	_debois$elm_mdl$Material_Component$react,
	_debois$elm_mdl$Material_Ripple$get,
	_debois$elm_mdl$Material_Ripple$set,
	_debois$elm_mdl$Material_Msg$RippleMsg,
	_debois$elm_mdl$Material_Component$generalise(_debois$elm_mdl$Material_Ripple$update));
var _debois$elm_mdl$Material_Ripple$Model = F3(
	function (a, b, c) {
		return {focus: a, activated: b, geometry: c};
	});

var _debois$elm_mdl$Material_Icon$view = F2(
	function (name, options) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$i,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
				_1: options
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(name),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Icon$i = function (name) {
	return A2(
		_debois$elm_mdl$Material_Icon$view,
		name,
		{ctor: '[]'});
};
var _debois$elm_mdl$Material_Icon$size48 = A2(_debois$elm_mdl$Material_Options$css, 'font-size', '48px');
var _debois$elm_mdl$Material_Icon$size36 = A2(_debois$elm_mdl$Material_Options$css, 'font-size', '36px');
var _debois$elm_mdl$Material_Icon$size24 = A2(_debois$elm_mdl$Material_Options$css, 'font-size', '24px');
var _debois$elm_mdl$Material_Icon$size18 = A2(_debois$elm_mdl$Material_Options$css, 'font-size', '18px');
var _debois$elm_mdl$Material_Icon$defaultConfig = {};
var _debois$elm_mdl$Material_Icon$Config = {};

var _debois$elm_mdl$Material_List$subheader = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-group__subheader'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$group = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-group'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$inset = _debois$elm_mdl$Material_Options$cs('mdc-list-divider--inset');
var _debois$elm_mdl$Material_List$divider = function (options) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$hr,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-divider'),
			_1: options
		},
		{ctor: '[]'});
};
var _debois$elm_mdl$Material_List$secondary = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__text__secondary'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$text = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__text'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$avatarImage = F2(
	function (src, options) {
		return A4(
			_debois$elm_mdl$Material_Options$styled_,
			_elm_lang$html$Html$img,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__start-detail'),
				_1: options
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$src(src),
				_1: {ctor: '[]'}
			},
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_List$endDetailIcon = F2(
	function (icon, options) {
		return A2(
			_debois$elm_mdl$Material_Icon$view,
			icon,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__end-detail'),
				_1: options
			});
	});
var _debois$elm_mdl$Material_List$endDetail = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__end-detail'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$startDetailIcon = F2(
	function (icon, options) {
		return A2(
			_debois$elm_mdl$Material_Icon$view,
			icon,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__start-detail'),
				_1: options
			});
	});
var _debois$elm_mdl$Material_List$startDetail = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item__start-detail'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$li = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$li,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list-item'),
			_1: options
		});
};
var _debois$elm_mdl$Material_List$twoLine = _debois$elm_mdl$Material_Options$cs('mdc-list--two-line');
var _debois$elm_mdl$Material_List$avatar = _debois$elm_mdl$Material_Options$cs('mdc-list--avatar-list');
var _debois$elm_mdl$Material_List$dense = _debois$elm_mdl$Material_Options$cs('mdc-list--dense');
var _debois$elm_mdl$Material_List$ul = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$ul,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-list'),
			_1: options
		});
};

var _debois$elm_mdl$Material_Select$decodeGeometry = _debois$elm_dom$DOM$target(
	A2(_debois$elm_dom$DOM$childNode, 1, _debois$elm_mdl$Material_Menu$decodeGeometry));
var _debois$elm_mdl$Material_Select$disabled = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{disabled: true});
	});
var _debois$elm_mdl$Material_Select$index = function (_p0) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (index, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						index: _elm_lang$core$Maybe$Just(index)
					});
			})(_p0));
};
var _debois$elm_mdl$Material_Select$selectedText = function (_p1) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (value, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{selectedText: value});
			})(_p1));
};
var _debois$elm_mdl$Material_Select$defaultConfig = {index: _elm_lang$core$Maybe$Nothing, selectedText: '', disabled: false};
var _debois$elm_mdl$Material_Select$view = F4(
	function (lift, model, options, items) {
		var geometry = A2(_elm_lang$core$Maybe$withDefault, _debois$elm_mdl$Material_Internal_Menu$defaultGeometry, model.menu.geometry);
		var left = geometry.anchor.left;
		var top = geometry.anchor.top;
		var _p2 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Select$defaultConfig, options);
		var summary = _p2;
		var config = _p2.config;
		var itemOffsetTop = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.top;
				},
				_elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$drop,
						A2(_elm_lang$core$Maybe$withDefault, 0, config.index),
						geometry.itemGeometries))));
		var adjustedTop = function () {
			var adjustedTop_ = top - itemOffsetTop;
			var overflowsTop = _elm_lang$core$Native_Utils.cmp(adjustedTop_, 0) < 0;
			var overflowsBottom = _elm_lang$core$Native_Utils.cmp(adjustedTop_ + geometry.itemsContainer.height, geometry.window.height) > 0;
			return overflowsTop ? 0 : (overflowsBottom ? A2(_elm_lang$core$Basics$max, 0, geometry.window.height - geometry.itemsContainer.height) : adjustedTop_);
		}();
		var transformOrigin = A2(
			_elm_lang$core$Basics_ops['++'],
			'center ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(itemOffsetTop),
				'px'));
		return A5(
			_debois$elm_mdl$Material_Internal_Options$apply,
			summary,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-select'),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						model.menu.open,
						_debois$elm_mdl$Material_Options$cs('mdc-select--open')),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '439px'),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								!config.disabled,
								A2(
									_debois$elm_mdl$Material_Options$on,
									'click',
									A2(
										_elm_lang$core$Json_Decode$map,
										function (_p3) {
											return lift(
												_debois$elm_mdl$Material_Internal_Select$MenuMsg(
													_debois$elm_mdl$Material_Internal_Menu$Toggle(_p3)));
										},
										_debois$elm_mdl$Material_Select$decodeGeometry))),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'listbox'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$tabindex(0),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-select__selected-text'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'pointer-events', 'none'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(config.selectedText),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A4(
						_debois$elm_mdl$Material_Menu$view,
						function (_p4) {
							return lift(
								_debois$elm_mdl$Material_Internal_Select$MenuMsg(_p4));
						},
						model.menu,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-select__menu'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'bottom', 'auto'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'right', 'auto'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$css,
											'left',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(left),
												'px')),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$css,
												'top',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(adjustedTop),
													'px')),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$css,
													'transform-origin',
													A2(
														_elm_lang$core$Basics_ops['++'],
														'center ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(transformOrigin),
															'px'))),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'block'),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Menu$index(
															A2(_elm_lang$core$Maybe$withDefault, 0, config.index)),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						A3(
							_debois$elm_mdl$Material_Menu$ul,
							_debois$elm_mdl$Material_List$ul,
							{ctor: '[]'},
							items)),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material_Select$update = F3(
	function (fwd, msg, model) {
		var _p5 = msg;
		var _p6 = A3(
			_debois$elm_mdl$Material_Menu$update,
			function (_p7) {
				return fwd(
					_debois$elm_mdl$Material_Internal_Select$MenuMsg(_p7));
			},
			_p5._0,
			model.menu);
		var menu = _p6._0;
		var menuCmd = _p6._1;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_elm_lang$core$Native_Utils.update(
				model,
				{menu: menu}),
			{
				ctor: '::',
				_0: menuCmd,
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Select$defaultModel = {menu: _debois$elm_mdl$Material_Menu$defaultModel};
var _debois$elm_mdl$Material_Select$_p8 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.select;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{select: x});
		}),
	_debois$elm_mdl$Material_Select$defaultModel);
var _debois$elm_mdl$Material_Select$get = _debois$elm_mdl$Material_Select$_p8._0;
var _debois$elm_mdl$Material_Select$set = _debois$elm_mdl$Material_Select$_p8._1;
var _debois$elm_mdl$Material_Select$react = F4(
	function (lift, msg, idx, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			function (_p9) {
				return _elm_lang$core$Maybe$Just(
					A3(_debois$elm_mdl$Material_Select$set, idx, store, _p9));
			},
			A3(
				_debois$elm_mdl$Material_Select$update,
				lift,
				msg,
				A2(_debois$elm_mdl$Material_Select$get, idx, store)));
	});
var _debois$elm_mdl$Material_Select$render = F4(
	function (lift, index, store, options) {
		return A7(
			_debois$elm_mdl$Material_Component$render,
			_debois$elm_mdl$Material_Select$get,
			_debois$elm_mdl$Material_Select$view,
			_debois$elm_mdl$Material_Msg$SelectMsg,
			lift,
			index,
			store,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Internal_Options$dispatch(lift),
				_1: options
			});
	});
var _debois$elm_mdl$Material_Select$subscriptions = function (model) {
	return A2(
		_elm_lang$core$Platform_Sub$map,
		_debois$elm_mdl$Material_Internal_Select$MenuMsg,
		_debois$elm_mdl$Material_Menu$subscriptions(model.menu));
};
var _debois$elm_mdl$Material_Select$subs = A3(
	_debois$elm_mdl$Material_Component$subs,
	_debois$elm_mdl$Material_Msg$SelectMsg,
	function (_) {
		return _.select;
	},
	_debois$elm_mdl$Material_Select$subscriptions);
var _debois$elm_mdl$Material_Select$Model = function (a) {
	return {menu: a};
};
var _debois$elm_mdl$Material_Select$Config = F3(
	function (a, b, c) {
		return {index: a, selectedText: b, disabled: c};
	});

var _debois$elm_mdl$Material_Snackbar$alignEnd = _debois$elm_mdl$Material_Options$cs('mdc-snackbar--align-end');
var _debois$elm_mdl$Material_Snackbar$alignStart = _debois$elm_mdl$Material_Options$cs('mdc-snackbar--align-start');
var _debois$elm_mdl$Material_Snackbar$onDismiss = function (_p0) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (msg, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						onDismiss: _elm_lang$core$Maybe$Just(msg)
					});
			})(_p0));
};
var _debois$elm_mdl$Material_Snackbar$defaultConfig = {onDismiss: _elm_lang$core$Maybe$Nothing};
var _debois$elm_mdl$Material_Snackbar$view = F4(
	function (lift, model, options, _p1) {
		var _p2 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Snackbar$defaultConfig, options);
		var summary = _p2;
		var config = _p2.config;
		var isActive = function () {
			var _p3 = model.state;
			switch (_p3.ctor) {
				case 'Inert':
					return false;
				case 'Active':
					return true;
				default:
					return false;
			}
		}();
		var contents = function () {
			var _p4 = model.state;
			switch (_p4.ctor) {
				case 'Inert':
					return _elm_lang$core$Maybe$Nothing;
				case 'Active':
					return _elm_lang$core$Maybe$Just(_p4._0);
				default:
					return _elm_lang$core$Maybe$Just(_p4._0);
			}
		}();
		var action = A2(
			_elm_lang$core$Maybe$andThen,
			function (_) {
				return _.action;
			},
			contents);
		var multiline = _elm_lang$core$Native_Utils.eq(
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.multiline;
				},
				contents),
			_elm_lang$core$Maybe$Just(true));
		var actionOnBottom = _elm_lang$core$Native_Utils.eq(
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.actionOnBottom;
				},
				contents),
			_elm_lang$core$Maybe$Just(true)) && multiline;
		var dismissHandler = function () {
			var _p5 = {ctor: '_Tuple2', _0: contents, _1: config.onDismiss};
			if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) {
				return _debois$elm_mdl$Material_Options$onClick(
					lift(
						A2(_debois$elm_mdl$Material_Internal_Snackbar$Dismiss, _p5._0._0.dismissOnAction, config.onDismiss)));
			} else {
				return _debois$elm_mdl$Material_Options$nop;
			}
		}();
		return A5(
			_debois$elm_mdl$Material_Internal_Options$apply,
			summary,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-snackbar'),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						isActive,
						_debois$elm_mdl$Material_Options$cs('mdc-snackbar--active')),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$when,
							multiline,
							_debois$elm_mdl$Material_Options$cs('mdc-snackbar--multiline')),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								actionOnBottom,
								_debois$elm_mdl$Material_Options$cs('mdc-snackbar--action-on-bottom')),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-snackbar__text'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '[]'},
						A2(
							_elm_lang$core$Maybe$map,
							function (c) {
								return {
									ctor: '::',
									_0: _elm_lang$html$Html$text(c.message),
									_1: {ctor: '[]'}
								};
							},
							contents))),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-snackbar__action-wrapper'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(
								_debois$elm_mdl$Material_Options$styled_,
								_elm_lang$html$Html$button,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-button'),
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('mdc-snackbar__action-button'),
										_1: {
											ctor: '::',
											_0: dismissHandler,
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('button'),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$Maybe$withDefault,
									{ctor: '[]'},
									A2(
										_elm_lang$core$Maybe$map,
										function (action) {
											return {
												ctor: '::',
												_0: _elm_lang$html$Html$text(action),
												_1: {ctor: '[]'}
											};
										},
										action))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material_Snackbar$enqueue = F2(
	function (contents, model) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				queue: A2(
					_elm_lang$core$List$append,
					model.queue,
					{
						ctor: '::',
						_0: contents,
						_1: {ctor: '[]'}
					})
			});
	});
var _debois$elm_mdl$Material_Snackbar$next = function (model) {
	return _elm_lang$core$Platform_Cmd$map(
		_debois$elm_mdl$Material_Internal_Snackbar$Move(model.seq));
};
var _debois$elm_mdl$Material_Snackbar$snack = F2(
	function (message, label) {
		return {
			message: message,
			action: _elm_lang$core$Maybe$Just(label),
			timeout: 2750,
			fade: 250,
			multiline: true,
			actionOnBottom: false,
			dismissOnAction: true
		};
	});
var _debois$elm_mdl$Material_Snackbar$toast = function (message) {
	return {message: message, action: _elm_lang$core$Maybe$Nothing, timeout: 2750, fade: 250, multiline: false, actionOnBottom: false, dismissOnAction: true};
};
var _debois$elm_mdl$Material_Snackbar$Contents = F7(
	function (a, b, c, d, e, f, g) {
		return {message: a, action: b, timeout: c, fade: d, multiline: e, actionOnBottom: f, dismissOnAction: g};
	});
var _debois$elm_mdl$Material_Snackbar$Model = F3(
	function (a, b, c) {
		return {queue: a, state: b, seq: c};
	});
var _debois$elm_mdl$Material_Snackbar$Config = function (a) {
	return {onDismiss: a};
};
var _debois$elm_mdl$Material_Snackbar$Fading = function (a) {
	return {ctor: 'Fading', _0: a};
};
var _debois$elm_mdl$Material_Snackbar$Active = function (a) {
	return {ctor: 'Active', _0: a};
};
var _debois$elm_mdl$Material_Snackbar$tryDequeue = function (model) {
	var _p6 = {ctor: '_Tuple2', _0: model.state, _1: model.queue};
	if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Inert')) && (_p6._1.ctor === '::')) {
		var _p7 = _p6._1._0;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{
					state: _debois$elm_mdl$Material_Snackbar$Active(_p7),
					queue: _p6._1._1,
					seq: model.seq + 1
				}),
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Platform_Cmd$map,
						_debois$elm_mdl$Material_Internal_Snackbar$Move(model.seq + 1),
						A2(_debois$elm_mdl$Material_Helpers$delay, _p7.timeout, _debois$elm_mdl$Material_Internal_Snackbar$Timeout)),
					_1: {ctor: '[]'}
				})
		};
	} else {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			{ctor: '[]'});
	}
};
var _debois$elm_mdl$Material_Snackbar$Inert = {ctor: 'Inert'};
var _debois$elm_mdl$Material_Snackbar$defaultModel = {
	queue: {ctor: '[]'},
	state: _debois$elm_mdl$Material_Snackbar$Inert,
	seq: -1
};
var _debois$elm_mdl$Material_Snackbar$model = _debois$elm_mdl$Material_Snackbar$defaultModel;
var _debois$elm_mdl$Material_Snackbar$_p8 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.snackbar;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{snackbar: x});
		}),
	_debois$elm_mdl$Material_Snackbar$model);
var _debois$elm_mdl$Material_Snackbar$get = _debois$elm_mdl$Material_Snackbar$_p8._0;
var _debois$elm_mdl$Material_Snackbar$set = _debois$elm_mdl$Material_Snackbar$_p8._1;
var _debois$elm_mdl$Material_Snackbar$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Snackbar$get, _debois$elm_mdl$Material_Snackbar$view, _debois$elm_mdl$Material_Msg$SnackbarMsg);
var _debois$elm_mdl$Material_Snackbar$add = F4(
	function (lift, idx, contents, model) {
		var component_ = A2(
			_elm_lang$core$Maybe$withDefault,
			_debois$elm_mdl$Material_Snackbar$defaultModel,
			A2(_elm_lang$core$Dict$get, idx, model.mdl.snackbar));
		var _p9 = _debois$elm_mdl$Material_Snackbar$tryDequeue(
			A2(_debois$elm_mdl$Material_Snackbar$enqueue, contents, component_));
		var component = _p9._0;
		var effects = _p9._1;
		var mdl = function () {
			var mdl_ = model.mdl;
			return _elm_lang$core$Native_Utils.update(
				mdl_,
				{
					snackbar: A3(_elm_lang$core$Dict$insert, idx, component, mdl_.snackbar)
				});
		}();
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_elm_lang$core$Native_Utils.update(
				model,
				{mdl: mdl}),
			{
				ctor: '::',
				_0: A2(
					_elm_lang$core$Platform_Cmd$map,
					function (_p10) {
						return lift(
							A2(_debois$elm_mdl$Material_Msg$SnackbarMsg, idx, _p10));
					},
					effects),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Snackbar$move = F2(
	function (transition, model) {
		var _p11 = {ctor: '_Tuple2', _0: model.state, _1: transition};
		_v4_4:
		do {
			if (_p11.ctor === '_Tuple2') {
				if (_p11._1.ctor === 'Clicked') {
					if (_p11._0.ctor === 'Active') {
						var _p12 = _p11._0._0;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: _debois$elm_mdl$Material_Snackbar$Fading(_p12)
								}),
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Snackbar$next,
									model,
									A2(_debois$elm_mdl$Material_Helpers$delay, _p12.fade, _debois$elm_mdl$Material_Internal_Snackbar$Timeout)),
								_1: {ctor: '[]'}
							});
					} else {
						break _v4_4;
					}
				} else {
					switch (_p11._0.ctor) {
						case 'Inert':
							return _debois$elm_mdl$Material_Snackbar$tryDequeue(model);
						case 'Active':
							var _p13 = _p11._0._0;
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										state: _debois$elm_mdl$Material_Snackbar$Fading(_p13)
									}),
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Snackbar$next,
										model,
										A2(_debois$elm_mdl$Material_Helpers$delay, _p13.fade, _debois$elm_mdl$Material_Internal_Snackbar$Timeout)),
									_1: {ctor: '[]'}
								});
						default:
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{state: _debois$elm_mdl$Material_Snackbar$Inert}),
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Snackbar$next,
										model,
										_debois$elm_mdl$Material_Helpers$cmd(_debois$elm_mdl$Material_Internal_Snackbar$Timeout)),
									_1: {ctor: '[]'}
								});
					}
				}
			} else {
				break _v4_4;
			}
		} while(false);
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_Snackbar$update = F3(
	function (fwd, msg, model) {
		var _p14 = msg;
		if (_p14.ctor === 'Move') {
			return _elm_lang$core$Native_Utils.eq(_p14._0, model.seq) ? A2(
				_debois$elm_mdl$Material_Helpers$map2nd,
				_elm_lang$core$Platform_Cmd$map(fwd),
				A2(_debois$elm_mdl$Material_Snackbar$move, _p14._1, model)) : A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		} else {
			var fwdEffect = function () {
				var _p15 = _p14._1;
				if (_p15.ctor === 'Just') {
					return _debois$elm_mdl$Material_Helpers$cmd(_p15._0);
				} else {
					return _elm_lang$core$Platform_Cmd$none;
				}
			}();
			return A2(
				_debois$elm_mdl$Material_Helpers$map2nd,
				function (cmd) {
					return _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: cmd,
							_1: {
								ctor: '::',
								_0: fwdEffect,
								_1: {ctor: '[]'}
							}
						});
				},
				_p14._0 ? A3(
					_debois$elm_mdl$Material_Snackbar$update,
					fwd,
					A2(_debois$elm_mdl$Material_Internal_Snackbar$Move, model.seq, _debois$elm_mdl$Material_Internal_Snackbar$Clicked),
					model) : A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'}));
		}
	});
var _debois$elm_mdl$Material_Snackbar$react = F4(
	function (lift, msg, idx, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			function (_p16) {
				return _elm_lang$core$Maybe$Just(
					A3(_debois$elm_mdl$Material_Snackbar$set, idx, store, _p16));
			},
			A3(
				_debois$elm_mdl$Material_Snackbar$update,
				lift,
				msg,
				A2(_debois$elm_mdl$Material_Snackbar$get, idx, store)));
	});

var _debois$elm_mdl$Material_Tabs$catMaybes = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (maybe, accum) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				accum,
				A2(
					_elm_lang$core$Maybe$map,
					A2(
						_elm_lang$core$Basics$flip,
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						accum),
					maybe));
		}),
	{ctor: '[]'});
var _debois$elm_mdl$Material_Tabs$decodeGeometry = function (hasIndicator) {
	return A3(
		_elm_lang$core$Json_Decode$map2,
		F2(
			function (tabs, scrollFrame) {
				return {tabs: tabs, scrollFrame: scrollFrame};
			}),
		A2(
			_elm_lang$core$Json_Decode$map,
			hasIndicator ? function (xs) {
				return A2(
					_elm_lang$core$List$take,
					_elm_lang$core$List$length(xs) - 1,
					xs);
			} : _elm_lang$core$Basics$identity,
			_debois$elm_dom$DOM$childNodes(
				A3(
					_elm_lang$core$Json_Decode$map2,
					F2(
						function (offsetLeft, width) {
							return {offsetLeft: offsetLeft, width: width};
						}),
					_debois$elm_dom$DOM$offsetLeft,
					_debois$elm_dom$DOM$offsetWidth))),
		_debois$elm_dom$DOM$parentElement(
			A2(
				_elm_lang$core$Json_Decode$map,
				function (width) {
					return {width: width};
				},
				_debois$elm_dom$DOM$offsetWidth)));
};
var _debois$elm_mdl$Material_Tabs$decodeGeometryOnTabBar = function (hasIndicator) {
	return _debois$elm_dom$DOM$target(
		_debois$elm_mdl$Material_Tabs$decodeGeometry(hasIndicator));
};
var _debois$elm_mdl$Material_Tabs$decodeGeometryOnTab = function (hasIndicator) {
	return _debois$elm_dom$DOM$target(
		_debois$elm_dom$DOM$parentElement(
			_debois$elm_mdl$Material_Tabs$decodeGeometry(hasIndicator)));
};
var _debois$elm_mdl$Material_Tabs$decodeGeometryOnIndicator = function (hasIndicator) {
	return _debois$elm_dom$DOM$target(
		_debois$elm_dom$DOM$parentElement(
			A2(
				_debois$elm_dom$DOM$childNode,
				1,
				A2(
					_debois$elm_dom$DOM$childNode,
					0,
					_debois$elm_mdl$Material_Tabs$decodeGeometry(hasIndicator)))));
};
var _debois$elm_mdl$Material_Tabs$computeTotalTabsWidth = function (geometry) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (tab, accum) {
				return tab.width + accum;
			}),
		0,
		geometry.tabs);
};
var _debois$elm_mdl$Material_Tabs$computeScale = F2(
	function (geometry, index) {
		var totalTabsWidth = _debois$elm_mdl$Material_Tabs$computeTotalTabsWidth(geometry);
		var _p0 = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, index, geometry.tabs));
		if (_p0.ctor === 'Nothing') {
			return 1;
		} else {
			return _elm_lang$core$Native_Utils.eq(totalTabsWidth, 0) ? 1 : (_p0._0.width / totalTabsWidth);
		}
	});
var _debois$elm_mdl$Material_Tabs$iconLabel = F2(
	function (options, str) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-tab__icon-text'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(str),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Tabs$icon = F2(
	function (options, icon) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$i,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-tab__icon'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Tabs$tab = F2(
	function (options, childs) {
		return {
			node: F2(
				function (options, childs) {
					return A3(_debois$elm_mdl$Material_Options$styled, _elm_lang$html$Html$div, options, childs);
				}),
			options: options,
			childs: childs
		};
	});
var _debois$elm_mdl$Material_Tabs$indicator = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{indicator: true});
	});
var _debois$elm_mdl$Material_Tabs$indicatorAccent = _debois$elm_mdl$Material_Options$cs('mdc-tab-bar--indicator-accent');
var _debois$elm_mdl$Material_Tabs$indicatorPrimary = _debois$elm_mdl$Material_Options$cs('mdc-tab-bar--indicator-primary');
var _debois$elm_mdl$Material_Tabs$withIconAndText = _debois$elm_mdl$Material_Options$cs('mdc-tab--with-icon-and-text');
var _debois$elm_mdl$Material_Tabs$scroller = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{scroller: true});
	});
var _debois$elm_mdl$Material_Tabs$defaultConfig = {active: 0, scroller: false, indicator: false};
var _debois$elm_mdl$Material_Tabs$view = F4(
	function (lift, model, options, nodes) {
		var indicatorTransform = function () {
			var tabLeft = A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.offsetLeft;
					},
					_elm_lang$core$List$head(
						A2(_elm_lang$core$List$drop, model.index, model.geometry.tabs))));
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						'translateX(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(tabLeft),
							'px)')),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Basics_ops['++'],
							'scale(',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(model.scale),
								',1)')),
						_1: {ctor: '[]'}
					}
				});
		}();
		var tabBarTransform = A2(
			_elm_lang$core$Basics_ops['++'],
			'translateX(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(model.translationOffset),
				'px)'));
		var numTabs = _elm_lang$core$List$length(nodes);
		var summary = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Tabs$defaultConfig, options);
		var config = summary.config;
		var tabBarScroller = function (tabBar) {
			return A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator'),
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator--back'),
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator--enabled'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$when,
											!model.backIndicator,
											A2(_debois$elm_mdl$Material_Options$css, 'display', 'none')),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$on,
												'click',
												A2(
													_elm_lang$core$Json_Decode$map,
													function (_p1) {
														return lift(
															_debois$elm_mdl$Material_Internal_Tabs$ScrollBackward(_p1));
													},
													_debois$elm_mdl$Material_Tabs$decodeGeometryOnIndicator(config.indicator))),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$a,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar__indicator__inner'),
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'pointer-events', 'none'),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('navigate_before'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__scroll-frame'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: tabBar,
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator'),
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator--next'),
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__indicator--enabled'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$on,
													'click',
													A2(
														_elm_lang$core$Json_Decode$map,
														function (_p2) {
															return lift(
																_debois$elm_mdl$Material_Internal_Tabs$ScrollForward(_p2));
														},
														_debois$elm_mdl$Material_Tabs$decodeGeometryOnIndicator(config.indicator))),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$when,
														!model.nextIndicator,
														A2(_debois$elm_mdl$Material_Options$css, 'display', 'none')),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								{
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar__indicator__inner'),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'pointer-events', 'none'),
													_1: {ctor: '[]'}
												}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('navigate_next'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var hasIndicator = config.indicator;
		return (config.scroller ? tabBarScroller : _elm_lang$core$Basics$identity)(
			A5(
				_debois$elm_mdl$Material_Internal_Options$apply,
				summary,
				_elm_lang$html$Html$nav,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar'),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-upgraded'),
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$many(
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar-scroller__scroller-frame__tabs'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'transform', tabBarTransform),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									!model.initialized,
									A2(
										_debois$elm_mdl$Material_Options$on,
										'mdc-init',
										A2(
											_elm_lang$core$Json_Decode$map,
											function (_p3) {
												return lift(
													_debois$elm_mdl$Material_Internal_Tabs$Init(_p3));
											},
											_debois$elm_mdl$Material_Tabs$decodeGeometryOnTabBar(config.indicator)))),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{ctor: '[]'},
				_elm_lang$core$List$concat(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$List$indexedMap,
							F2(
								function (index, _p4) {
									var _p5 = _p4;
									return A2(
										_p5.node,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$cs('mdc-tab'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$when,
													_elm_lang$core$Native_Utils.eq(model.index, index),
													_debois$elm_mdl$Material_Options$cs('mdc-tab--active')),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$on,
														'click',
														A2(
															_elm_lang$core$Json_Decode$map,
															function (_p6) {
																return lift(
																	A2(_debois$elm_mdl$Material_Internal_Tabs$Select, index, _p6));
															},
															_debois$elm_mdl$Material_Tabs$decodeGeometryOnTab(hasIndicator))),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$dispatch(
															function (_p7) {
																return lift(
																	_debois$elm_mdl$Material_Internal_Tabs$Dispatch(_p7));
															}),
														_1: _p5.options
													}
												}
											}
										},
										_p5.childs);
								}),
							nodes),
						_1: {
							ctor: '::',
							_0: config.indicator ? {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('mdc-tab-bar__indicator'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$when,
												!(hasIndicator && model.initialized),
												A2(_debois$elm_mdl$Material_Options$css, 'display', 'none')),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'transform', indicatorTransform),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$when,
														_elm_lang$core$Native_Utils.cmp(numTabs, 0) > 0,
														A2(_debois$elm_mdl$Material_Options$css, 'visibility', 'visible')),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							} : {ctor: '[]'},
							_1: {ctor: '[]'}
						}
					})));
	});
var _debois$elm_mdl$Material_Tabs$update = F3(
	function (lift, msg, model) {
		var _p8 = msg;
		switch (_p8.ctor) {
			case 'Dispatch':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Dispatch$forward(_p8._0),
						_1: {ctor: '[]'}
					});
			case 'Select':
				var _p9 = _p8._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							index: _p9,
							scale: A2(_debois$elm_mdl$Material_Tabs$computeScale, _p8._1, _p9)
						}),
					{ctor: '[]'});
			case 'Init':
				var _p10 = _p8._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					function () {
						if (!model.initialized) {
							var totalTabsWidth = A3(
								_elm_lang$core$List$foldl,
								F2(
									function (tab, accum) {
										return tab.width + accum;
									}),
								0,
								_p10.tabs);
							return _elm_lang$core$Native_Utils.update(
								model,
								{
									geometry: _p10,
									scale: A2(_debois$elm_mdl$Material_Tabs$computeScale, _p10, 0),
									nextIndicator: _elm_lang$core$Native_Utils.cmp(totalTabsWidth, _p10.scrollFrame.width) > 0,
									backIndicator: false,
									initialized: true
								});
						} else {
							return model;
						}
					}(),
					{ctor: '[]'});
			case 'ScrollBackward':
				var _p17 = _p8._0;
				var totalTabsWidth = _debois$elm_mdl$Material_Tabs$computeTotalTabsWidth(_p17);
				var scrollFrameWidth = _p17.scrollFrame.width;
				var concealedTabs = _debois$elm_mdl$Material_Tabs$catMaybes(
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (index, tab) {
								var tabRight = tab.offsetLeft + tab.width;
								return (_elm_lang$core$Native_Utils.cmp(tabRight + model.translationOffset, 0) < 0) ? _elm_lang$core$Maybe$Just(
									{ctor: '_Tuple2', _0: index, _1: tab}) : _elm_lang$core$Maybe$Nothing;
							}),
						_elm_lang$core$List$reverse(_p17.tabs)));
				var translationOffset = _elm_lang$core$Tuple$second(
					A3(
						_elm_lang$core$List$foldl,
						F2(
							function (_p12, _p11) {
								var _p13 = _p12;
								var _p16 = _p13._1;
								var _p14 = _p11;
								var _p15 = _p14._0;
								var accum_ = _p15 + _p16.width;
								return (_elm_lang$core$Native_Utils.cmp(accum_, scrollFrameWidth) > 0) ? {ctor: '_Tuple2', _0: _p15, _1: 0 - _p16.offsetLeft} : {ctor: '_Tuple2', _0: accum_, _1: 0 - _p16.offsetLeft};
							}),
						{ctor: '_Tuple2', _0: 0, _1: model.translationOffset},
						concealedTabs));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							geometry: _p17,
							translationOffset: translationOffset,
							nextIndicator: _elm_lang$core$Native_Utils.cmp(totalTabsWidth + translationOffset, scrollFrameWidth) > 0,
							backIndicator: _elm_lang$core$Native_Utils.cmp(translationOffset, 0) < 0
						}),
					{ctor: '[]'});
			default:
				var _p20 = _p8._0;
				var totalTabsWidth = _debois$elm_mdl$Material_Tabs$computeTotalTabsWidth(_p20);
				var scrollFrameWidth = _p20.scrollFrame.width;
				var concealedTabs = _debois$elm_mdl$Material_Tabs$catMaybes(
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (index, tab) {
								var tabRight = tab.offsetLeft + tab.width;
								return (_elm_lang$core$Native_Utils.cmp(tabRight + model.translationOffset, scrollFrameWidth) > 0) ? _elm_lang$core$Maybe$Just(
									{ctor: '_Tuple2', _0: index, _1: tab}) : _elm_lang$core$Maybe$Nothing;
							}),
						_p20.tabs));
				var translationOffset = A2(
					_elm_lang$core$Maybe$withDefault,
					model.translationOffset,
					A2(
						_elm_lang$core$Maybe$map,
						function (_p18) {
							var _p19 = _p18;
							return 0 - _p19._1.offsetLeft;
						},
						_elm_lang$core$List$head(concealedTabs)));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							geometry: _p20,
							translationOffset: translationOffset,
							nextIndicator: _elm_lang$core$Native_Utils.cmp(totalTabsWidth + translationOffset, scrollFrameWidth) > 0,
							backIndicator: _elm_lang$core$Native_Utils.cmp(translationOffset, 0) < 0
						}),
					{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Material_Tabs$defaultModel = {index: 0, geometry: _debois$elm_mdl$Material_Internal_Tabs$defaultGeometry, translationOffset: 0, scale: 0, nextIndicator: false, backIndicator: false, initialized: false};
var _debois$elm_mdl$Material_Tabs$_p21 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.tabs;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{tabs: x});
		}),
	_debois$elm_mdl$Material_Tabs$defaultModel);
var _debois$elm_mdl$Material_Tabs$get = _debois$elm_mdl$Material_Tabs$_p21._0;
var _debois$elm_mdl$Material_Tabs$set = _debois$elm_mdl$Material_Tabs$_p21._1;
var _debois$elm_mdl$Material_Tabs$react = F4(
	function (lift, msg, idx, store) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			function (_p22) {
				return _elm_lang$core$Maybe$Just(
					A3(_debois$elm_mdl$Material_Tabs$set, idx, store, _p22));
			},
			A3(
				_debois$elm_mdl$Material_Tabs$update,
				lift,
				msg,
				A2(_debois$elm_mdl$Material_Tabs$get, idx, store)));
	});
var _debois$elm_mdl$Material_Tabs$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Tabs$get, _debois$elm_mdl$Material_Tabs$view, _debois$elm_mdl$Material_Msg$TabsMsg);
var _debois$elm_mdl$Material_Tabs$Model = F7(
	function (a, b, c, d, e, f, g) {
		return {index: a, geometry: b, translationOffset: c, scale: d, nextIndicator: e, backIndicator: f, initialized: g};
	});
var _debois$elm_mdl$Material_Tabs$Config = F3(
	function (a, b, c) {
		return {active: a, scroller: b, indicator: c};
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _debois$elm_mdl$Material_Textfield$update = F3(
	function (_p0, msg, model) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Platform_Cmd_ops['!'], x, y);
				}),
			{ctor: '[]'},
			function () {
				var _p1 = msg;
				switch (_p1.ctor) {
					case 'Input':
						var _p2 = _p1._0;
						var dirty = !_elm_lang$core$Native_Utils.eq(_p2, '');
						return _elm_lang$core$Maybe$Just(
							_elm_lang$core$Native_Utils.update(
								model,
								{
									value: _elm_lang$core$Maybe$Just(_p2),
									isDirty: dirty
								}));
					case 'Blur':
						return _elm_lang$core$Maybe$Just(
							_elm_lang$core$Native_Utils.update(
								model,
								{isFocused: false}));
					case 'Focus':
						return _elm_lang$core$Maybe$Just(
							_elm_lang$core$Native_Utils.update(
								model,
								{isFocused: true}));
					default:
						return _elm_lang$core$Maybe$Just(model);
				}
			}());
	});
var _debois$elm_mdl$Material_Textfield$defaultModel = {isFocused: false, isDirty: false, value: _elm_lang$core$Maybe$Nothing};
var _debois$elm_mdl$Material_Textfield$_p3 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.textfield;
	},
	F2(
		function (x, c) {
			return _elm_lang$core$Native_Utils.update(
				c,
				{textfield: x});
		}),
	_debois$elm_mdl$Material_Textfield$defaultModel);
var _debois$elm_mdl$Material_Textfield$get = _debois$elm_mdl$Material_Textfield$_p3._0;
var _debois$elm_mdl$Material_Textfield$set = _debois$elm_mdl$Material_Textfield$_p3._1;
var _debois$elm_mdl$Material_Textfield$react = A4(_debois$elm_mdl$Material_Component$react, _debois$elm_mdl$Material_Textfield$get, _debois$elm_mdl$Material_Textfield$set, _debois$elm_mdl$Material_Msg$TextfieldMsg, _debois$elm_mdl$Material_Textfield$update);
var _debois$elm_mdl$Material_Textfield$placeholder = function (value) {
	return _debois$elm_mdl$Material_Internal_Options$input(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$attribute(
				A2(_elm_lang$html$Html_Attributes$attribute, 'placeholder', value)),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Material_Textfield$multiline = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{multiline: true});
	});
var _debois$elm_mdl$Material_Textfield$invalid = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{invalid: true});
	});
var _debois$elm_mdl$Material_Textfield$fullWidth = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{fullWidth: true});
	});
var _debois$elm_mdl$Material_Textfield$type_ = function (_p4) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (value, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						type_: _elm_lang$core$Maybe$Just(value)
					});
			})(_p4));
};
var _debois$elm_mdl$Material_Textfield$required = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{required: true});
	});
var _debois$elm_mdl$Material_Textfield$dense = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{dense: true});
	});
var _debois$elm_mdl$Material_Textfield$maxRows = function (k) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		function (config) {
			return _elm_lang$core$Native_Utils.update(
				config,
				{
					maxRows: _elm_lang$core$Maybe$Just(k)
				});
		});
};
var _debois$elm_mdl$Material_Textfield$cols = function (k) {
	return _debois$elm_mdl$Material_Internal_Options$input(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$attribute(
				_elm_lang$html$Html_Attributes$cols(k)),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Material_Textfield$rows = function (k) {
	return _debois$elm_mdl$Material_Internal_Options$input(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$attribute(
				_elm_lang$html$Html_Attributes$rows(k)),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Material_Textfield$pattern = function (_p5) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (value, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						pattern: _elm_lang$core$Maybe$Just(value)
					});
			})(_p5));
};
var _debois$elm_mdl$Material_Textfield$textfield = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{textfieldBox: true});
	});
var _debois$elm_mdl$Material_Textfield$email = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				type_: _elm_lang$core$Maybe$Just('email')
			});
	});
var _debois$elm_mdl$Material_Textfield$password = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{
				type_: _elm_lang$core$Maybe$Just('password')
			});
	});
var _debois$elm_mdl$Material_Textfield$input = _debois$elm_mdl$Material_Options$input;
var _debois$elm_mdl$Material_Textfield$disabled = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{disabled: true});
	});
var _debois$elm_mdl$Material_Textfield$maxlength = function (k) {
	return _debois$elm_mdl$Material_Options$attribute(
		_elm_lang$html$Html_Attributes$maxlength(k));
};
var _debois$elm_mdl$Material_Textfield$autofocus = _debois$elm_mdl$Material_Options$attribute(
	_elm_lang$html$Html_Attributes$autofocus(true));
var _debois$elm_mdl$Material_Textfield$defaultValue = function (_p6) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (str, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						defaultValue: _elm_lang$core$Maybe$Just(str)
					});
			})(_p6));
};
var _debois$elm_mdl$Material_Textfield$value = function (_p7) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (str, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						value: _elm_lang$core$Maybe$Just(str)
					});
			})(_p7));
};
var _debois$elm_mdl$Material_Textfield$floatingLabel = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{labelFloat: true});
	});
var _debois$elm_mdl$Material_Textfield$label = function (_p8) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		F2(
			function (str, config) {
				return _elm_lang$core$Native_Utils.update(
					config,
					{
						labelText: _elm_lang$core$Maybe$Just(str)
					});
			})(_p8));
};
var _debois$elm_mdl$Material_Textfield$defaultConfig = {
	labelText: _elm_lang$core$Maybe$Nothing,
	labelFloat: false,
	value: _elm_lang$core$Maybe$Nothing,
	defaultValue: _elm_lang$core$Maybe$Nothing,
	disabled: false,
	input: {ctor: '[]'},
	container: {ctor: '[]'},
	maxRows: _elm_lang$core$Maybe$Nothing,
	dense: false,
	required: false,
	type_: _elm_lang$core$Maybe$Just('text'),
	textfieldBox: false,
	pattern: _elm_lang$core$Maybe$Nothing,
	multiline: false,
	fullWidth: false,
	invalid: false
};
var _debois$elm_mdl$Material_Textfield$view = F4(
	function (lift, model, options, _p9) {
		var isDirty = model.isDirty;
		var _p10 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Textfield$defaultConfig, options);
		var summary = _p10;
		var config = _p10.config;
		var preventEnterWhenMaxRowsExceeded = A2(
			_debois$elm_mdl$Material_Options$when,
			config.multiline && (!_elm_lang$core$Native_Utils.eq(config.maxRows, _elm_lang$core$Maybe$Nothing)),
			A3(
				_debois$elm_mdl$Material_Options$onWithOptions,
				'keydown',
				_elm_lang$core$Native_Utils.update(
					_elm_lang$html$Html_Events$defaultOptions,
					{preventDefault: true}),
				A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p11) {
						var _p12 = _p11;
						var rows = _elm_lang$core$List$length(
							A2(_elm_lang$core$String$split, '\n', _p12._1));
						return ((_elm_lang$core$Native_Utils.cmp(
							rows,
							A2(_elm_lang$core$Maybe$withDefault, 0, config.maxRows)) > -1) && _elm_lang$core$Native_Utils.eq(_p12._0, 13)) ? _elm_lang$core$Json_Decode$succeed(
							lift(_debois$elm_mdl$Material_Internal_Textfield$NoOp)) : _elm_lang$core$Json_Decode$fail('');
					},
					A3(
						_elm_lang$core$Json_Decode$map2,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_elm_lang$html$Html_Events$keyCode,
						_elm_lang$html$Html_Events$targetValue))));
		var isFocused = model.isFocused && (!config.disabled);
		var isInvalid = function () {
			var _p13 = config.pattern;
			if (_p13.ctor === 'Just') {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					false,
					A2(
						_elm_lang$core$Maybe$map,
						function (_p14) {
							return !A2(
								_elm_lang$core$Regex$contains,
								_elm_lang$core$Regex$regex(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'^',
										A2(_elm_lang$core$Basics_ops['++'], _p13._0, '$'))),
								_p14);
						},
						model.value));
			} else {
				return false;
			}
		}();
		return A4(
			_debois$elm_mdl$Material_Internal_Options$applyContainer,
			summary,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield--upgraded'),
					_1: {
						ctor: '::',
						_0: A3(_debois$elm_mdl$Material_Internal_Options$on1, 'focus', lift, _debois$elm_mdl$Material_Internal_Textfield$Focus),
						_1: {
							ctor: '::',
							_0: A3(_debois$elm_mdl$Material_Internal_Options$on1, 'blur', lift, _debois$elm_mdl$Material_Internal_Textfield$Blur),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									isFocused,
									_debois$elm_mdl$Material_Options$cs('mdc-textfield--focused')),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$when,
										config.disabled,
										_debois$elm_mdl$Material_Options$cs('mdc-textfield--disabled')),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$when,
											config.dense,
											_debois$elm_mdl$Material_Options$cs('mdc-textfield--dense')),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$when,
												config.fullWidth,
												_debois$elm_mdl$Material_Options$cs('mdc-textfield--fullwidth')),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$when,
													isInvalid,
													_debois$elm_mdl$Material_Options$cs('mdc-textfield--invalid')),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$when,
														config.multiline,
														_debois$elm_mdl$Material_Options$cs('mdc-textfield--multiline')),
													_1: {
														ctor: '::',
														_0: preventEnterWhenMaxRowsExceeded,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: A4(
					_debois$elm_mdl$Material_Internal_Options$applyInput,
					summary,
					config.multiline ? _elm_lang$html$Html$textarea : _elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield__input'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'outline', 'none'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									config.textfieldBox,
									_debois$elm_mdl$Material_Options$cs('mdc-textfield--box')),
								_1: {
									ctor: '::',
									_0: A3(_debois$elm_mdl$Material_Internal_Options$on1, 'focus', lift, _debois$elm_mdl$Material_Internal_Textfield$Focus),
									_1: {
										ctor: '::',
										_0: A3(_debois$elm_mdl$Material_Internal_Options$on1, 'blur', lift, _debois$elm_mdl$Material_Internal_Textfield$Blur),
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onInput(
												function (_p15) {
													return lift(
														_debois$elm_mdl$Material_Internal_Textfield$Input(_p15));
												}),
											_1: {
												ctor: '::',
												_0: function (_p16) {
													return _debois$elm_mdl$Material_Options$many(
														A2(
															_elm_lang$core$List$map,
															_debois$elm_mdl$Material_Internal_Options$attribute,
															A2(_elm_lang$core$List$filterMap, _elm_lang$core$Basics$identity, _p16)));
												}(
													{
														ctor: '::',
														_0: ((!config.multiline) ? _elm_lang$core$Maybe$Just : _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing))(
															_elm_lang$html$Html_Attributes$type_(
																A2(_elm_lang$core$Maybe$withDefault, 'text', config.type_))),
														_1: {
															ctor: '::',
															_0: (config.disabled ? _elm_lang$core$Maybe$Just : _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing))(
																_elm_lang$html$Html_Attributes$disabled(true)),
															_1: {
																ctor: '::',
																_0: (config.required ? _elm_lang$core$Maybe$Just : _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing))(
																	A2(
																		_elm_lang$html$Html_Attributes$property,
																		'required',
																		_elm_lang$core$Json_Encode$bool(true))),
																_1: {
																	ctor: '::',
																	_0: ((!_elm_lang$core$Native_Utils.eq(config.pattern, _elm_lang$core$Maybe$Nothing)) ? _elm_lang$core$Maybe$Just : _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing))(
																		A2(
																			_elm_lang$html$Html_Attributes$property,
																			'pattern',
																			_elm_lang$core$Json_Encode$string(
																				A2(_elm_lang$core$Maybe$withDefault, '', config.pattern)))),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Maybe$Just(
																			A2(_elm_lang$html$Html_Attributes$attribute, 'outline', 'medium none')),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$label,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield__label'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									isFocused || isDirty,
									_debois$elm_mdl$Material_Options$cs('mdc-textfield__label--float-above')),
								_1: {ctor: '[]'}
							}
						},
						function () {
							var _p17 = config.labelText;
							if (_p17.ctor === 'Just') {
								return {
									ctor: '::',
									_0: _elm_lang$html$Html$text(_p17._0),
									_1: {ctor: '[]'}
								};
							} else {
								return {ctor: '[]'};
							}
						}()),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield__bottom-line'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _debois$elm_mdl$Material_Textfield$render = F4(
	function (lift, index, store, options) {
		return A7(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Textfield$get, _debois$elm_mdl$Material_Textfield$view, _debois$elm_mdl$Material_Msg$TextfieldMsg, lift, index, store, options);
	});
var _debois$elm_mdl$Material_Textfield$Config = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return {labelText: a, labelFloat: b, value: c, defaultValue: d, disabled: e, input: f, container: g, maxRows: h, dense: i, required: j, type_: k, textfieldBox: l, pattern: m, multiline: n, fullWidth: o, invalid: p};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _debois$elm_mdl$Material_Textfield$Model = F3(
	function (a, b, c) {
		return {isFocused: a, isDirty: b, value: c};
	});

var _elm_lang$svg$Svg$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			{ctor: '::', _0: _elm_lang$svg$Svg$svgNamespace, _1: attributes},
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text_ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type_ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in_ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _debois$elm_mdl$Material_Checkbox$indeterminate = _debois$elm_mdl$Material_Internal_Options$input(
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Internal_Options$attribute(
			A2(
				_elm_lang$html$Html_Attributes$property,
				'indeterminate',
				_elm_lang$core$Json_Encode$bool(true))),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Material_Checkbox$checked = _debois$elm_mdl$Material_Options$cs('mdc-checkbox--checked');
var _debois$elm_mdl$Material_Checkbox$disabled = _debois$elm_mdl$Material_Options$many(
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Options$cs('mdc-checkbox--disabled'),
		_1: {
			ctor: '::',
			_0: _debois$elm_mdl$Material_Internal_Options$input(
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Internal_Options$attribute(
						_elm_lang$html$Html_Attributes$disabled(true)),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		}
	});
var _debois$elm_mdl$Material_Checkbox$defaultConfig = {
	input: {ctor: '[]'},
	container: {ctor: '[]'}
};
var _debois$elm_mdl$Material_Checkbox$view = F4(
	function (lift, model, options, _p0) {
		var _p1 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Checkbox$defaultConfig, options);
		var summary = _p1;
		var config = _p1.config;
		return A4(
			_debois$elm_mdl$Material_Internal_Options$applyContainer,
			summary,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-checkbox'),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Internal_Options$on1,
						'focus',
						lift,
						_debois$elm_mdl$Material_Internal_Checkbox$SetFocus(true)),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Internal_Options$on1,
							'blur',
							lift,
							_debois$elm_mdl$Material_Internal_Checkbox$SetFocus(false)),
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Internal_Options$attribute(
								_debois$elm_mdl$Material_Helpers$blurOn('mouseup')),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: A4(
					_debois$elm_mdl$Material_Internal_Options$applyInput,
					summary,
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-checkbox__native-control'),
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Internal_Options$attribute(
								_elm_lang$html$Html_Attributes$type_('checkbox')),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-checkbox__background'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$svg$Svg$svg,
								{
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$class('mdc-checkbox__checkmark'),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$viewBox('0 0 24 24'),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$svg$Svg$path,
										{
											ctor: '::',
											_0: _elm_lang$svg$Svg_Attributes$class('mdc-checkbox__checkmark__path'),
											_1: {
												ctor: '::',
												_0: _elm_lang$svg$Svg_Attributes$fill('none'),
												_1: {
													ctor: '::',
													_0: _elm_lang$svg$Svg_Attributes$stroke('white'),
													_1: {
														ctor: '::',
														_0: _elm_lang$svg$Svg_Attributes$d('M1.73,12.91 8.1,19.28 22.79,4.59'),
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('mdc-checkbox__mixedmark'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material_Checkbox$update = F2(
	function (msg, model) {
		var _p2 = msg;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{isFocused: _p2._0}),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _debois$elm_mdl$Material_Checkbox$defaultModel = {isFocused: false};
var _debois$elm_mdl$Material_Checkbox$_p3 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.toggles;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{toggles: x});
		}),
	_debois$elm_mdl$Material_Checkbox$defaultModel);
var _debois$elm_mdl$Material_Checkbox$get = _debois$elm_mdl$Material_Checkbox$_p3._0;
var _debois$elm_mdl$Material_Checkbox$set = _debois$elm_mdl$Material_Checkbox$_p3._1;
var _debois$elm_mdl$Material_Checkbox$react = A4(
	_debois$elm_mdl$Material_Component$react,
	_debois$elm_mdl$Material_Checkbox$get,
	_debois$elm_mdl$Material_Checkbox$set,
	_debois$elm_mdl$Material_Msg$CheckboxMsg,
	_debois$elm_mdl$Material_Component$generalise(_debois$elm_mdl$Material_Checkbox$update));
var _debois$elm_mdl$Material_Checkbox$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Checkbox$get, _debois$elm_mdl$Material_Checkbox$view, _debois$elm_mdl$Material_Msg$CheckboxMsg);
var _debois$elm_mdl$Material_Checkbox$Model = function (a) {
	return {isFocused: a};
};
var _debois$elm_mdl$Material_Checkbox$Config = F2(
	function (a, b) {
		return {input: a, container: b};
	});

var _debois$elm_mdl$Material_Tooltip$onLeave = function (lift) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		A2(
			_elm_lang$core$Json_Decode$map,
			lift,
			_elm_lang$core$Json_Decode$succeed(_debois$elm_mdl$Material_Internal_Tooltip$Leave)));
};
var _debois$elm_mdl$Material_Tooltip$onMouseLeave = F2(
	function (lift, idx) {
		return A2(
			_debois$elm_mdl$Material_Options$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(
				lift(
					A2(_debois$elm_mdl$Material_Msg$TooltipMsg, idx, _debois$elm_mdl$Material_Internal_Tooltip$Leave))));
	});
var _debois$elm_mdl$Material_Tooltip$element = function (elem) {
	return _debois$elm_mdl$Material_Internal_Options$option(
		function (options) {
			return _elm_lang$core$Native_Utils.update(
				options,
				{elem: elem});
		});
};
var _debois$elm_mdl$Material_Tooltip$isTooltipClass = function (path) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function ($class) {
			return A2(_elm_lang$core$String$contains, 'mdc-tooltip', $class) ? _elm_lang$core$Json_Decode$succeed(true) : _elm_lang$core$Json_Decode$succeed(false);
		},
		A2(_elm_lang$core$Json_Decode$at, path, _debois$elm_dom$DOM$className));
};
var _debois$elm_mdl$Material_Tooltip$sibling = function (d) {
	var valid = function (path) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (res) {
				return res ? A2(_elm_lang$core$Json_Decode$at, path, d) : _elm_lang$core$Json_Decode$fail('');
			},
			_debois$elm_mdl$Material_Tooltip$isTooltipClass(path));
	};
	var createPath = function (depth) {
		var parents = A2(_elm_lang$core$List$repeat, depth, 'parentElement');
		return A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: 'target',
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				parents,
				{
					ctor: '::',
					_0: 'nextSibling',
					_1: {ctor: '[]'}
				}));
	};
	var paths = A2(
		_elm_lang$core$List$map,
		createPath,
		A2(_elm_lang$core$List$range, 0, 4));
	return _elm_lang$core$Json_Decode$oneOf(
		A2(_elm_lang$core$List$map, valid, paths));
};
var _debois$elm_mdl$Material_Tooltip$stateDecoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_debois$elm_mdl$Material_Internal_Tooltip$DOMState,
	_debois$elm_dom$DOM$target(_debois$elm_dom$DOM$boundingClientRect),
	_debois$elm_mdl$Material_Tooltip$sibling(_debois$elm_dom$DOM$offsetWidth),
	_debois$elm_mdl$Material_Tooltip$sibling(_debois$elm_dom$DOM$offsetHeight));
var _debois$elm_mdl$Material_Tooltip$onMouseEnter = F2(
	function (lift, idx) {
		return A2(
			_debois$elm_mdl$Material_Options$on,
			'mouseenter',
			A2(
				_elm_lang$core$Json_Decode$map,
				function (_p0) {
					return lift(
						A2(
							_debois$elm_mdl$Material_Msg$TooltipMsg,
							idx,
							_debois$elm_mdl$Material_Internal_Tooltip$Enter(_p0)));
				},
				_debois$elm_mdl$Material_Tooltip$stateDecoder));
	});
var _debois$elm_mdl$Material_Tooltip$attach = F2(
	function (lift, index) {
		return _debois$elm_mdl$Material_Options$many(
			{
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Tooltip$onMouseEnter, lift, index),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Tooltip$onMouseLeave, lift, index),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material_Tooltip$onEnter = function (lift) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		A2(
			_elm_lang$core$Json_Decode$map,
			lift,
			A2(_elm_lang$core$Json_Decode$map, _debois$elm_mdl$Material_Internal_Tooltip$Enter, _debois$elm_mdl$Material_Tooltip$stateDecoder)));
};
var _debois$elm_mdl$Material_Tooltip$update = F2(
	function (action, model) {
		var _p1 = action;
		if (_p1.ctor === 'Enter') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{isActive: true, domState: _p1._0}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{isActive: false}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		}
	});
var _debois$elm_mdl$Material_Tooltip$calculatePos = F2(
	function (pos, domState) {
		var getValuesFor = F2(
			function (l, r) {
				return (_elm_lang$core$Native_Utils.cmp(l + r, 0) < 0) ? {ctor: '_Tuple2', _0: 0, _1: 0} : {ctor: '_Tuple2', _0: l, _1: r};
			});
		var offsetHeight = domState.offsetHeight;
		var marginTop = -1 * (offsetHeight / 2);
		var offsetWidth = domState.offsetWidth;
		var marginLeft = -1 * (offsetWidth / 2);
		var props = domState.rect;
		var left = props.left + (props.width / 2);
		var _p2 = A2(getValuesFor, left, marginLeft);
		var newLeft = _p2._0;
		var newMarginLeft = _p2._1;
		var top = props.top + (props.height / 2);
		var _p3 = A2(getValuesFor, top, marginTop);
		var newTop = _p3._0;
		var newMarginTop = _p3._1;
		var out = function () {
			var _p4 = pos;
			switch (_p4.ctor) {
				case 'Left':
					return {left: (props.left - offsetWidth) - 10, top: newTop, marginTop: newMarginTop, marginLeft: 0};
				case 'Right':
					return {left: (props.left + props.width) + 10, top: newTop, marginTop: newMarginTop, marginLeft: 0};
				case 'Top':
					return {left: newLeft, top: (props.top - offsetHeight) - 10, marginTop: 0, marginLeft: newMarginLeft};
				default:
					return {left: newLeft, top: (props.top + props.height) + 10, marginTop: 0, marginLeft: newMarginLeft};
			}
		}();
		return out;
	});
var _debois$elm_mdl$Material_Tooltip$defaultPos = {left: 0, top: 0, marginLeft: 0, marginTop: 0};
var _debois$elm_mdl$Material_Tooltip$defaultModel = {isActive: false, domState: _debois$elm_mdl$Material_Internal_Tooltip$defaultDOMState};
var _debois$elm_mdl$Material_Tooltip$_p5 = A3(
	_debois$elm_mdl$Material_Component$indexed,
	function (_) {
		return _.tooltip;
	},
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.update(
				y,
				{tooltip: x});
		}),
	_debois$elm_mdl$Material_Tooltip$defaultModel);
var _debois$elm_mdl$Material_Tooltip$get = _debois$elm_mdl$Material_Tooltip$_p5._0;
var _debois$elm_mdl$Material_Tooltip$set = _debois$elm_mdl$Material_Tooltip$_p5._1;
var _debois$elm_mdl$Material_Tooltip$react = A4(
	_debois$elm_mdl$Material_Component$react,
	_debois$elm_mdl$Material_Tooltip$get,
	_debois$elm_mdl$Material_Tooltip$set,
	_debois$elm_mdl$Material_Msg$TooltipMsg,
	_debois$elm_mdl$Material_Component$generalise(_debois$elm_mdl$Material_Tooltip$update));
var _debois$elm_mdl$Material_Tooltip$Model = F2(
	function (a, b) {
		return {isActive: a, domState: b};
	});
var _debois$elm_mdl$Material_Tooltip$Pos = F4(
	function (a, b, c, d) {
		return {left: a, top: b, marginLeft: c, marginTop: d};
	});
var _debois$elm_mdl$Material_Tooltip$Config = F3(
	function (a, b, c) {
		return {size: a, position: b, elem: c};
	});
var _debois$elm_mdl$Material_Tooltip$Large = {ctor: 'Large'};
var _debois$elm_mdl$Material_Tooltip$large = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{size: _debois$elm_mdl$Material_Tooltip$Large});
	});
var _debois$elm_mdl$Material_Tooltip$Default = {ctor: 'Default'};
var _debois$elm_mdl$Material_Tooltip$Bottom = {ctor: 'Bottom'};
var _debois$elm_mdl$Material_Tooltip$defaultConfig = {size: _debois$elm_mdl$Material_Tooltip$Default, position: _debois$elm_mdl$Material_Tooltip$Bottom, elem: _elm_lang$html$Html$div};
var _debois$elm_mdl$Material_Tooltip$view = F4(
	function (lift, model, options, content) {
		var px = function (f) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(f),
				'px');
		};
		var summary = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Tooltip$defaultConfig, options);
		var config = summary.config;
		var pos = model.isActive ? A2(_debois$elm_mdl$Material_Tooltip$calculatePos, config.position, model.domState) : _debois$elm_mdl$Material_Tooltip$defaultPos;
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			config.elem,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-tooltip'),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						model.isActive,
						_debois$elm_mdl$Material_Options$cs('is-active')),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$when,
							_elm_lang$core$Native_Utils.eq(config.size, _debois$elm_mdl$Material_Tooltip$Large),
							_debois$elm_mdl$Material_Options$cs('mdc-tooltip--large')),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.isActive,
								A2(
									_debois$elm_mdl$Material_Options$css,
									'left',
									px(pos.left))),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.isActive,
									A2(
										_debois$elm_mdl$Material_Options$css,
										'margin-left',
										px(pos.marginLeft))),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$when,
										model.isActive,
										A2(
											_debois$elm_mdl$Material_Options$css,
											'top',
											px(pos.top))),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$when,
											model.isActive,
											A2(
												_debois$elm_mdl$Material_Options$css,
												'margin-top',
												px(pos.marginTop))),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			},
			content);
	});
var _debois$elm_mdl$Material_Tooltip$render = A3(_debois$elm_mdl$Material_Component$render, _debois$elm_mdl$Material_Tooltip$get, _debois$elm_mdl$Material_Tooltip$view, _debois$elm_mdl$Material_Msg$TooltipMsg);
var _debois$elm_mdl$Material_Tooltip$bottom = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{position: _debois$elm_mdl$Material_Tooltip$Bottom});
	});
var _debois$elm_mdl$Material_Tooltip$Top = {ctor: 'Top'};
var _debois$elm_mdl$Material_Tooltip$top = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{position: _debois$elm_mdl$Material_Tooltip$Top});
	});
var _debois$elm_mdl$Material_Tooltip$Right = {ctor: 'Right'};
var _debois$elm_mdl$Material_Tooltip$right = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{position: _debois$elm_mdl$Material_Tooltip$Right});
	});
var _debois$elm_mdl$Material_Tooltip$Left = {ctor: 'Left'};
var _debois$elm_mdl$Material_Tooltip$left = _debois$elm_mdl$Material_Internal_Options$option(
	function (options) {
		return _elm_lang$core$Native_Utils.update(
			options,
			{position: _debois$elm_mdl$Material_Tooltip$Left});
	});

var _debois$elm_mdl$Material$init = function (lift) {
	return _elm_lang$core$Platform_Cmd$none;
};
var _debois$elm_mdl$Material$subscriptions = F2(
	function (lift, model) {
		return _elm_lang$core$Platform_Sub$batch(
			{
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Menu$subs, lift, model.mdl),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Select$subs, lift, model.mdl),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material$update_ = F3(
	function (lift, msg, store) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'ButtonMsg':
				return A4(_debois$elm_mdl$Material_Button$react, lift, _p0._1, _p0._0, store);
			case 'SnackbarMsg':
				var _p2 = _p0._0;
				return A4(
					_debois$elm_mdl$Material_Snackbar$react,
					function (_p1) {
						return lift(
							A2(_debois$elm_mdl$Material_Msg$SnackbarMsg, _p2, _p1));
					},
					_p0._1,
					_p2,
					store);
			case 'FabMsg':
				return A4(_debois$elm_mdl$Material_Fab$react, lift, _p0._1, _p0._0, store);
			case 'TextfieldMsg':
				return A4(_debois$elm_mdl$Material_Textfield$react, lift, _p0._1, _p0._0, store);
			case 'MenuMsg':
				var _p4 = _p0._0;
				return A4(
					_debois$elm_mdl$Material_Menu$react,
					function (_p3) {
						return lift(
							A2(_debois$elm_mdl$Material_Msg$MenuMsg, _p4, _p3));
					},
					_p0._1,
					_p4,
					store);
			case 'SelectMsg':
				var _p6 = _p0._0;
				return A4(
					_debois$elm_mdl$Material_Select$react,
					function (_p5) {
						return lift(
							A2(_debois$elm_mdl$Material_Msg$SelectMsg, _p6, _p5));
					},
					_p0._1,
					_p6,
					store);
			case 'CheckboxMsg':
				return A4(_debois$elm_mdl$Material_Checkbox$react, lift, _p0._1, _p0._0, store);
			case 'TooltipMsg':
				return A4(_debois$elm_mdl$Material_Tooltip$react, lift, _p0._1, _p0._0, store);
			case 'TabsMsg':
				var _p8 = _p0._0;
				return A4(
					_debois$elm_mdl$Material_Tabs$react,
					function (_p7) {
						return lift(
							A2(_debois$elm_mdl$Material_Msg$TabsMsg, _p8, _p7));
					},
					_p0._1,
					_p8,
					store);
			case 'RippleMsg':
				return A4(_debois$elm_mdl$Material_Ripple$react, lift, _p0._1, _p0._0, store);
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: _debois$elm_mdl$Material_Dispatch$forward(_p0._0)
				};
		}
	});
var _debois$elm_mdl$Material$update = F3(
	function (lift, msg, container) {
		return A2(
			_debois$elm_mdl$Material_Helpers$map1st,
			_elm_lang$core$Maybe$withDefault(container),
			A2(
				_debois$elm_mdl$Material_Helpers$map1st,
				_elm_lang$core$Maybe$map(
					function (mdl) {
						return _elm_lang$core$Native_Utils.update(
							container,
							{mdl: mdl});
					}),
				A3(
					_debois$elm_mdl$Material$update_,
					lift,
					msg,
					function (_) {
						return _.mdl;
					}(container))));
	});
var _debois$elm_mdl$Material$model = {button: _elm_lang$core$Dict$empty, fab: _elm_lang$core$Dict$empty, textfield: _elm_lang$core$Dict$empty, menu: _elm_lang$core$Dict$empty, toggles: _elm_lang$core$Dict$empty, tooltip: _elm_lang$core$Dict$empty, tabs: _elm_lang$core$Dict$empty, select: _elm_lang$core$Dict$empty, ripple: _elm_lang$core$Dict$empty, snackbar: _elm_lang$core$Dict$empty};
var _debois$elm_mdl$Material$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {button: a, fab: b, textfield: c, menu: d, toggles: e, tooltip: f, tabs: g, select: h, ripple: i, snackbar: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _debois$elm_mdl$Demo_Badges$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _debois$elm_mdl$Demo_Badges$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Badges$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Badges$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Badges$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Badges$Mdl, _p0._0, model);
	});

var _debois$elm_mdl$Demo_Buttons$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Buttons$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Buttons$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Buttons$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Buttons$Mdl, _p0._0, model);
	});
var _debois$elm_mdl$Demo_Buttons$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		function (_p1) {
			return _elm_lang$core$List$concat(
				A2(
					_elm_lang$core$List$map,
					function (row) {
						return _elm_lang$core$List$concat(
							{
								ctor: '::',
								_0: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('mdc-typography--title'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$style(
													{
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'padding', _1: '64px 16px 24px'},
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(row.headline),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								},
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$core$List$map,
										function (button) {
											return A5(
												_debois$elm_mdl$Material_Button$render,
												_debois$elm_mdl$Demo_Buttons$Mdl,
												{
													ctor: '::',
													_0: 9,
													_1: {
														ctor: '::',
														_0: 0,
														_1: {
															ctor: '::',
															_0: 0,
															_1: {
																ctor: '::',
																_0: 1,
																_1: {ctor: '[]'}
															}
														}
													}
												},
												model.mdl,
												{
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '16px'),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$when,
															row.link,
															_debois$elm_mdl$Material_Button$link('')),
														_1: {
															ctor: '::',
															_0: A2(_debois$elm_mdl$Material_Options$when, row.disabled, _debois$elm_mdl$Material_Button$disabled),
															_1: {
																ctor: '::',
																_0: A2(_debois$elm_mdl$Material_Options$when, button.raised, _debois$elm_mdl$Material_Button$raised),
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Button$ripple,
																	_1: {
																		ctor: '::',
																		_0: A2(_debois$elm_mdl$Material_Options$when, button.compact, _debois$elm_mdl$Material_Button$compact),
																		_1: {
																			ctor: '::',
																			_0: A2(_debois$elm_mdl$Material_Options$when, button.dense, _debois$elm_mdl$Material_Button$dense),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text(
														A2(
															_elm_lang$core$String$join,
															' ',
															A2(
																_elm_lang$core$List$filterMap,
																_elm_lang$core$Basics$identity,
																{
																	ctor: '::',
																	_0: button.dense ? _elm_lang$core$Maybe$Just('Dense') : _elm_lang$core$Maybe$Nothing,
																	_1: {
																		ctor: '::',
																		_0: button.compact ? _elm_lang$core$Maybe$Just('Compact') : _elm_lang$core$Maybe$Nothing,
																		_1: {
																			ctor: '::',
																			_0: button.raised ? _elm_lang$core$Maybe$Just('Raised') : _elm_lang$core$Maybe$Just('Default'),
																			_1: {ctor: '[]'}
																		}
																	}
																}))),
													_1: {ctor: '[]'}
												});
										},
										_elm_lang$core$List$concat(
											A2(
												_elm_lang$core$List$map,
												function (button) {
													return {
														ctor: '::',
														_0: {dense: button.dense, compact: button.compact, raised: false},
														_1: {
															ctor: '::',
															_0: {dense: button.dense, compact: button.compact, raised: true},
															_1: {ctor: '[]'}
														}
													};
												},
												{
													ctor: '::',
													_0: {dense: false, compact: false},
													_1: {
														ctor: '::',
														_0: {dense: true, compact: false},
														_1: {
															ctor: '::',
															_0: {dense: false, compact: true},
															_1: {ctor: '[]'}
														}
													}
												}))),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$List$map,
											function (button) {
												return A5(
													_debois$elm_mdl$Material_Button$render,
													_debois$elm_mdl$Demo_Buttons$Mdl,
													{
														ctor: '::',
														_0: 9,
														_1: {
															ctor: '::',
															_0: 0,
															_1: {
																ctor: '::',
																_0: 0,
																_1: {
																	ctor: '::',
																	_0: 1,
																	_1: {ctor: '[]'}
																}
															}
														}
													},
													model.mdl,
													{
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '16px'),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Options$when,
																row.link,
																_debois$elm_mdl$Material_Button$link('')),
															_1: {
																ctor: '::',
																_0: A2(_debois$elm_mdl$Material_Options$when, row.disabled, _debois$elm_mdl$Material_Button$disabled),
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Button$ripple,
																	_1: {
																		ctor: '::',
																		_0: button.primary ? _debois$elm_mdl$Material_Button$primary : _debois$elm_mdl$Material_Button$accent,
																		_1: {
																			ctor: '::',
																			_0: A2(_debois$elm_mdl$Material_Options$when, button.raised, _debois$elm_mdl$Material_Button$raised),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text(
															A2(
																_elm_lang$core$String$join,
																' ',
																{
																	ctor: '::',
																	_0: button.raised ? 'Raised' : 'Default',
																	_1: {
																		ctor: '::',
																		_0: 'width',
																		_1: {
																			ctor: '::',
																			_0: button.primary ? 'Primary' : 'Accent',
																			_1: {ctor: '[]'}
																		}
																	}
																})),
														_1: {ctor: '[]'}
													});
											},
											_elm_lang$core$List$concat(
												A2(
													_elm_lang$core$List$map,
													function (button) {
														return {
															ctor: '::',
															_0: {primary: button.primary, raised: false},
															_1: {
																ctor: '::',
																_0: {primary: button.primary, raised: true},
																_1: {ctor: '[]'}
															}
														};
													},
													{
														ctor: '::',
														_0: {primary: false},
														_1: {
															ctor: '::',
															_0: {primary: true},
															_1: {ctor: '[]'}
														}
													}))),
										_1: {ctor: '[]'}
									}
								}
							});
					},
					_p1));
		}(
			{
				ctor: '::',
				_0: {headline: 'Buttons', link: false, disabled: false},
				_1: {
					ctor: '::',
					_0: {headline: 'Links with Button Style', link: true, disabled: false},
					_1: {
						ctor: '::',
						_0: {headline: 'Disabled', link: false, disabled: true},
						_1: {ctor: '[]'}
					}
				}
			}));
};

var _debois$elm_mdl$Material_Card$darkTheme = _debois$elm_mdl$Material_Options$cs('mdc-card--theme-dark');
var _debois$elm_mdl$Material_Card$view = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$horizontalBlock = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__horizontal-block'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$vertical = _debois$elm_mdl$Material_Options$cs('mdc-card__actions--vertical');
var _debois$elm_mdl$Material_Card$actions = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__actions'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$supportingText = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__supporting-text'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$x3 = _debois$elm_mdl$Material_Options$cs('mdc-card__media-item--3x');
var _debois$elm_mdl$Material_Card$x2 = _debois$elm_mdl$Material_Options$cs('mdc-card__media-item--2x');
var _debois$elm_mdl$Material_Card$x1dot5 = _debois$elm_mdl$Material_Options$cs('mdc-card__media-item--1dot5x');
var _debois$elm_mdl$Material_Card$mediaItem = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__media-item'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$media = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__media'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$subtitle = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__subtitle'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$large = _debois$elm_mdl$Material_Options$cs('mdc-card__title--large');
var _debois$elm_mdl$Material_Card$title = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__title'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Card$primary = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-card__primary'),
			_1: options
		});
};

var _debois$elm_mdl$Demo_Cards$demoSubtitle3 = A2(
	_debois$elm_mdl$Material_Card$subtitle,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Subtitle here'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoTitle3 = A2(
	_debois$elm_mdl$Material_Card$title,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Card$large,
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Title here'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoPrimary3 = function (options) {
	return A2(
		_debois$elm_mdl$Material_Card$primary,
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
			_1: options
		},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$demoTitle3,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoSubtitle3,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$mediaItem = function (options) {
	return A2(
		_debois$elm_mdl$Material_Card$mediaItem,
		options,
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$img,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$src('images/1-1.jpg'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: 'auto'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'}),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Demo_Cards$demoPrimary = function (options) {
	return A2(
		_debois$elm_mdl$Material_Card$primary,
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
			_1: options
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Options$div,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background', '#bdbdbd'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '2.5rem'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '2.5rem'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'border-radius', '50%'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Card$title,
					{
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-left', '56px'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Title'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Card$subtitle,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-left', '56px'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Subhead'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$demoTitle2 = A2(
	_debois$elm_mdl$Material_Card$title,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Card$large,
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Title'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoSubtitle1 = A2(
	_debois$elm_mdl$Material_Card$subtitle,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Subtitle here'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoTitle1 = A2(
	_debois$elm_mdl$Material_Card$title,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Card$large,
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Title goes here'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoPrimary2 = function (options) {
	return A2(
		_debois$elm_mdl$Material_Card$primary,
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
			_1: options
		},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$demoTitle1,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoSubtitle1,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$demoSubtitle0 = A2(
	_debois$elm_mdl$Material_Card$subtitle,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Subehead'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoTitle0 = A2(
	_debois$elm_mdl$Material_Card$title,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Card$large,
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Title'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoMedia = function (options) {
	return _debois$elm_mdl$Material_Card$media(
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'background-size', 'cover'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '12.313rem'),
				_1: options
			}
		});
};
var _debois$elm_mdl$Demo_Cards$demoSupportingText = A2(
	_debois$elm_mdl$Material_Card$supportingText,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Cards$demoCard = function (options) {
	return _debois$elm_mdl$Material_Card$view(
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'min-width', '320px'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'max-width', '21.875rem'),
					_1: options
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card0 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$media,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/16-9.jpg)'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background-size', 'cover'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '12.313rem'),
							_1: {ctor: '[]'}
						}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoSupportingText,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Cards$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Cards$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Cards$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Cards$Mdl, _p0._0, model);
	});
var _debois$elm_mdl$Demo_Cards$demoActions = function (options) {
	return A2(
		_debois$elm_mdl$Material_Card$actions,
		options,
		{
			ctor: '::',
			_0: A5(
				_debois$elm_mdl$Material_Button$render,
				_debois$elm_mdl$Demo_Cards$Mdl,
				{
					ctor: '::',
					_0: 1,
					_1: {
						ctor: '::',
						_0: 1,
						_1: {
							ctor: '::',
							_0: 0,
							_1: {ctor: '[]'}
						}
					}
				},
				_debois$elm_mdl$Demo_Cards$model.mdl,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Button$compact,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Action 1'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A5(
					_debois$elm_mdl$Material_Button$render,
					_debois$elm_mdl$Demo_Cards$Mdl,
					{
						ctor: '::',
						_0: 1,
						_1: {
							ctor: '::',
							_0: 1,
							_1: {
								ctor: '::',
								_0: 1,
								_1: {ctor: '[]'}
							}
						}
					},
					_debois$elm_mdl$Demo_Cards$model.mdl,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Button$compact,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Action 2'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card1 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$demoPrimary(
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Demo_Cards$demoMedia,
					{
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/16-9.jpg)'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoSupportingText,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$demoActions(
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card2 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$demoPrimary(
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Demo_Cards$demoMedia,
					{
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/16-9.jpg)'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoActions(
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Card$vertical,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card3 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Demo_Cards$demoMedia,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/16-9.jpg)'),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoPrimary2(
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoActions(
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card4 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$primary,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoTitle1,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$demoSubtitle1,
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Card$supportingText,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoActions(
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card7 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$horizontalBlock,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoPrimary3(
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$mediaItem(
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoActions(
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card8 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$horizontalBlock,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoPrimary3(
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$mediaItem(
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Card$x1dot5,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoActions(
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card9 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$horizontalBlock,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$demoPrimary3(
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$mediaItem(
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Card$x2,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$demoActions(
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card5 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Card$darkTheme,
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/1-1.jpg'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-size', 'cover'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '21.875rem'),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$demoPrimary2(
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background', 'rgba(0,0,0,0.4)'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Card$actions,
					{
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background', 'rgba(0,0,0,0.4)'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A5(
							_debois$elm_mdl$Material_Button$render,
							_debois$elm_mdl$Demo_Cards$Mdl,
							{
								ctor: '::',
								_0: 1,
								_1: {
									ctor: '::',
									_0: 1,
									_1: {
										ctor: '::',
										_0: 0,
										_1: {ctor: '[]'}
									}
								}
							},
							model.mdl,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Button$compact,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Button$darkTheme,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Action 1'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A5(
								_debois$elm_mdl$Material_Button$render,
								_debois$elm_mdl$Demo_Cards$Mdl,
								{
									ctor: '::',
									_0: 1,
									_1: {
										ctor: '::',
										_0: 1,
										_1: {
											ctor: '::',
											_0: 1,
											_1: {ctor: '[]'}
										}
									}
								},
								model.mdl,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Button$compact,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Button$darkTheme,
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Action 2'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card6 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Demo_Cards$demoMedia,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/1-1.jpg)'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Card$title,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Card$large,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Title'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Card$actions,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A5(
							_debois$elm_mdl$Material_Button$render,
							_debois$elm_mdl$Demo_Cards$Mdl,
							{
								ctor: '::',
								_0: 1,
								_1: {
									ctor: '::',
									_0: 6,
									_1: {
										ctor: '::',
										_0: 0,
										_1: {ctor: '[]'}
									}
								}
							},
							model.mdl,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Button$compact,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Action 1'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Cards$card10 = function (model) {
	return A2(
		_debois$elm_mdl$Demo_Cards$demoCard,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Card$horizontalBlock,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$mediaItem(
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Card$x3,
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Card$actions,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Card$vertical,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Button$render,
									_debois$elm_mdl$Demo_Cards$Mdl,
									{
										ctor: '::',
										_0: 1,
										_1: {
											ctor: '::',
											_0: 10,
											_1: {
												ctor: '::',
												_0: 0,
												_1: {ctor: '[]'}
											}
										}
									},
									model.mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Button$compact,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('A 1'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Button$render,
										_debois$elm_mdl$Demo_Cards$Mdl,
										{
											ctor: '::',
											_0: 1,
											_1: {
												ctor: '::',
												_0: 10,
												_1: {
													ctor: '::',
													_0: 1,
													_1: {ctor: '[]'}
												}
											}
										},
										model.mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Button$compact,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('A 2'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Demo_Cards$view = function (model) {
	var demoWrapper = function (_p1) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-flow', 'row wrap'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'align-content', 'left'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'left'),
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-typography'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			A2(
				_elm_lang$core$List$map,
				function (card) {
					return A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: card,
							_1: {ctor: '[]'}
						});
				},
				_p1));
	};
	return demoWrapper(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Cards$card0(model),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Cards$card1(model),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Demo_Cards$card2(model),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Cards$card3(model),
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Demo_Cards$card4(model),
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Demo_Cards$card5(model),
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Demo_Cards$card6(model),
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Demo_Cards$card7(model),
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Demo_Cards$card8(model),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Demo_Cards$card9(model),
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Demo_Cards$card10(model),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};

var _debois$elm_mdl$Material_Theme$dark = _debois$elm_mdl$Material_Options$cs('mdc-theme--dark');
var _debois$elm_mdl$Material_Theme$textIconOnDark = F2(
	function (options, icon) {
		return A2(
			_debois$elm_mdl$Material_Options$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--text-icon-on-dark'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Theme$textDisabledOnDark = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-disabled-on-dark');
var _debois$elm_mdl$Material_Theme$textHintOnDark = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-hint-on-dark');
var _debois$elm_mdl$Material_Theme$textSecondaryOnDark = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-secondary-on-dark');
var _debois$elm_mdl$Material_Theme$textPrimaryOnDark = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-primary-on-dark');
var _debois$elm_mdl$Material_Theme$textIconOnLight = F2(
	function (options, icon) {
		return A2(
			_debois$elm_mdl$Material_Options$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--text-icon-on-light'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Theme$textDisabledOnLight = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-disabled-on-light');
var _debois$elm_mdl$Material_Theme$textHintOnLight = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-hint-on-light');
var _debois$elm_mdl$Material_Theme$textSecondaryOnLight = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-secondary-on-light');
var _debois$elm_mdl$Material_Theme$textPrimaryOnLight = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-primary-on-light');
var _debois$elm_mdl$Material_Theme$textIconOnBackground = F2(
	function (options, icon) {
		return A2(
			_debois$elm_mdl$Material_Options$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--text-icon-on-background'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Theme$textDisabledOnBackground = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-disabled-on-background');
var _debois$elm_mdl$Material_Theme$textHintOnBackground = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-hint-on-background');
var _debois$elm_mdl$Material_Theme$textSecondaryOnBackground = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-secondary-on-background');
var _debois$elm_mdl$Material_Theme$textPrimaryOnBackground = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-primary-on-background');
var _debois$elm_mdl$Material_Theme$textIconOnAccent = F2(
	function (options, icon) {
		return A2(
			_debois$elm_mdl$Material_Options$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--text-icon-on-accent'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Theme$textDisabledOnAccent = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-disabled-on-accent');
var _debois$elm_mdl$Material_Theme$textHintOnAccent = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-hint-on-accent');
var _debois$elm_mdl$Material_Theme$textSecondaryOnAccent = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-secondary-on-accent');
var _debois$elm_mdl$Material_Theme$textPrimaryOnAccent = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-primary-on-accent');
var _debois$elm_mdl$Material_Theme$textIconOnPrimary = F2(
	function (options, icon) {
		return A2(
			_debois$elm_mdl$Material_Options$span,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--text-icon-on-primary'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Theme$textDisabledOnPrimary = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-disabled-on-primary');
var _debois$elm_mdl$Material_Theme$textHintOnPrimary = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-hint-on-primary');
var _debois$elm_mdl$Material_Theme$textSecondaryOnPrimary = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-secondary-on-primary');
var _debois$elm_mdl$Material_Theme$textPrimaryOnPrimary = _debois$elm_mdl$Material_Options$cs('mdc-theme--text-primary-on-primary');
var _debois$elm_mdl$Material_Theme$background = _debois$elm_mdl$Material_Options$cs('mdc-theme--background');
var _debois$elm_mdl$Material_Theme$accentBg = _debois$elm_mdl$Material_Options$cs('mdc-theme--accent-bg');
var _debois$elm_mdl$Material_Theme$primaryBg = _debois$elm_mdl$Material_Options$cs('mdc-theme--primary-bg');
var _debois$elm_mdl$Material_Theme$accent = _debois$elm_mdl$Material_Options$cs('mdc-theme--accent');
var _debois$elm_mdl$Material_Theme$primary = _debois$elm_mdl$Material_Options$cs('mdc-theme--primary');

var _debois$elm_mdl$Demo_Checkbox$model = {mdl: _debois$elm_mdl$Material$model, rtl: false, alignEnd: false, indeterminate: false, checked0: false, checked1: false, disabled0: false, disabled1: false};
var _debois$elm_mdl$Demo_Checkbox$Model = F8(
	function (a, b, c, d, e, f, g, h) {
		return {mdl: a, rtl: b, alignEnd: c, indeterminate: d, checked0: e, checked1: f, disabled0: g, disabled1: h};
	});
var _debois$elm_mdl$Demo_Checkbox$ToggleDisabled1 = {ctor: 'ToggleDisabled1'};
var _debois$elm_mdl$Demo_Checkbox$ToggleDisabled0 = {ctor: 'ToggleDisabled0'};
var _debois$elm_mdl$Demo_Checkbox$ToggleChecked1 = {ctor: 'ToggleChecked1'};
var _debois$elm_mdl$Demo_Checkbox$ToggleChecked0 = {ctor: 'ToggleChecked0'};
var _debois$elm_mdl$Demo_Checkbox$ToggleIndeterminate = {ctor: 'ToggleIndeterminate'};
var _debois$elm_mdl$Demo_Checkbox$ToggleAlignEnd = {ctor: 'ToggleAlignEnd'};
var _debois$elm_mdl$Demo_Checkbox$ToggleRtl = {ctor: 'ToggleRtl'};
var _debois$elm_mdl$Demo_Checkbox$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Checkbox$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Mdl':
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Checkbox$Mdl, _p0._0, model);
			case 'ToggleRtl':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{rtl: !model.rtl}),
					{ctor: '[]'});
			case 'ToggleAlignEnd':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{alignEnd: !model.alignEnd}),
					{ctor: '[]'});
			case 'ToggleIndeterminate':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{indeterminate: !model.indeterminate}),
					{ctor: '[]'});
			case 'ToggleChecked0':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{checked0: !model.checked0}),
					{ctor: '[]'});
			case 'ToggleChecked1':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{checked1: !model.checked1}),
					{ctor: '[]'});
			case 'ToggleDisabled0':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{disabled0: !model.disabled0}),
					{ctor: '[]'});
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{disabled1: !model.disabled1}),
					{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Demo_Checkbox$view = function (model) {
	var example = function (options) {
		return A2(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('example'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'block'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '24px'),
							_1: options
						}
					}
				}
			});
	};
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				example,
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						model.rtl,
						_debois$elm_mdl$Material_Options$attribute(
							A2(_elm_lang$html$Html_Attributes$attribute, 'dir', 'rtl'))),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h2,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-left', '0'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '0'),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Checkbox'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('mdc-form-field'),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$when,
										model.alignEnd,
										_debois$elm_mdl$Material_Options$cs('mdc-form-field--align-end')),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Checkbox$Mdl,
									{
										ctor: '::',
										_0: 0,
										_1: {ctor: '[]'}
									},
									model.mdl,
									{
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$when, model.checked0, _debois$elm_mdl$Material_Checkbox$checked),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$when, model.indeterminate, _debois$elm_mdl$Material_Checkbox$indeterminate),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.disabled0, _debois$elm_mdl$Material_Checkbox$disabled),
												_1: {ctor: '[]'}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('This is my checkbox'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(' '),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$button,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(_debois$elm_mdl$Demo_Checkbox$ToggleIndeterminate),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Make indeterminate'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$span,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(' '),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(_debois$elm_mdl$Demo_Checkbox$ToggleRtl),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Toggle RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$span,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text(' '),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$button,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onClick(_debois$elm_mdl$Demo_Checkbox$ToggleAlignEnd),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Toggle Align End'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$span,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text(' '),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(_debois$elm_mdl$Demo_Checkbox$ToggleDisabled0),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Toggle Disabled'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					example,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Theme$dark,
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#333'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$h2,
							{
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-left', '0'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '0'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'color', 'white'),
										_1: {ctor: '[]'}
									}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Dark Theme'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('mdc-form-field'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Checkbox$Mdl,
										{
											ctor: '::',
											_0: 1,
											_1: {ctor: '[]'}
										},
										model.mdl,
										{
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$when, model.checked1, _debois$elm_mdl$Material_Checkbox$checked),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.disabled1, _debois$elm_mdl$Material_Checkbox$disabled),
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('This is my checkbox'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(' '),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(_debois$elm_mdl$Demo_Checkbox$ToggleDisabled1),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Toggle Disabled'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _debois$elm_mdl$Demo_Chips$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _debois$elm_mdl$Demo_Chips$lastIndex = function (dict) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		_elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				_elm_lang$core$Dict$keys(dict))));
};
var _debois$elm_mdl$Demo_Chips$model = {
	mdl: _debois$elm_mdl$Material$model,
	chips: _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 1, _1: 'Amazing Chip 1'},
			_1: {ctor: '[]'}
		}),
	value: '',
	details: ''
};
var _debois$elm_mdl$Demo_Chips$Model = F4(
	function (a, b, c, d) {
		return {mdl: a, chips: b, value: c, details: d};
	});
var _debois$elm_mdl$Demo_Chips$ChipClick = function (a) {
	return {ctor: 'ChipClick', _0: a};
};
var _debois$elm_mdl$Demo_Chips$RemoveChip = function (a) {
	return {ctor: 'RemoveChip', _0: a};
};
var _debois$elm_mdl$Demo_Chips$AddChip = function (a) {
	return {ctor: 'AddChip', _0: a};
};
var _debois$elm_mdl$Demo_Chips$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Chips$update = F2(
	function (action, model) {
		var _p0 = action;
		switch (_p0.ctor) {
			case 'Mdl':
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Chips$Mdl, _p0._0, model);
			case 'ChipClick':
				var details = A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(_elm_lang$core$Dict$get, _p0._0, model.chips));
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{details: details}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'AddChip':
				var index = 1 + _debois$elm_mdl$Demo_Chips$lastIndex(model.chips);
				var model_ = _elm_lang$core$Native_Utils.update(
					model,
					{
						chips: A3(
							_elm_lang$core$Dict$insert,
							index,
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' ',
									_elm_lang$core$Basics$toString(index))),
							model.chips)
					});
				return {ctor: '_Tuple2', _0: model_, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				var _p1 = _p0._0;
				var d_ = A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(_elm_lang$core$Dict$get, _p1, model.chips));
				var details = _elm_lang$core$Native_Utils.eq(d_, model.details) ? '' : model.details;
				var model_ = _elm_lang$core$Native_Utils.update(
					model,
					{
						chips: A2(_elm_lang$core$Dict$remove, _p1, model.chips),
						details: details
					});
				return {ctor: '_Tuple2', _0: model_, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});

var _debois$elm_mdl$Material_Dialog$open = _debois$elm_mdl$Material_Options$cs('mdc-dialog--open');
var _debois$elm_mdl$Material_Dialog$theDialog = 'elm-mdc-singleton-dialog';
var _debois$elm_mdl$Material_Dialog$openOn = function () {
	var handler = A2(
		_elm_lang$core$Basics_ops['++'],
		'\n      // Don\'t mess up the elm runtime.\n      try {\n        var dialog = document.getElementById(\'',
		A2(_elm_lang$core$Basics_ops['++'], _debois$elm_mdl$Material_Dialog$theDialog, '\');\n        if (! dialog) {\n          console.log (\'Cannot display dialog: No dialog element. Use `Dialog.view` to construct one.\');\n          return;\n        }\n        if (! dialog.showModal) {\n          if (typeof dialogPolyfill !== \'undefined\' && dialogPolyfill.registerDialog) {\n            dialogPolyfill.registerDialog(dialog);\n          } else {\n            console.log (\'Cannot display dialog: Your browser does not support the <dialog> element. Get a polyfill at:\\n\\nhttps://github.com/GoogleChrome/dialog-polyfill\\n\');\n            return;\n          }\n        }\n        dialog.showModal();\n      }\n      catch (e)\n      {\n        console.log (\"A dialog method threw an exception. This is not supposed to happen; likely you\'re using a broken polyfill. If not, please file an issue:\\n\\nhttps://github.com/debois/elm-mdl/issues/new\");\n      }\n      '));
	return function (event) {
		return _debois$elm_mdl$Material_Internal_Options$attribute(
			A2(
				_elm_lang$html$Html_Attributes$attribute,
				A2(_elm_lang$core$Basics_ops['++'], 'on', event),
				handler));
	};
}();
var _debois$elm_mdl$Material_Dialog$closeOn = function () {
	var handler = A2(
		_elm_lang$core$Basics_ops['++'],
		'\n      // Don\'t mess up the elm runtime!\n      try {\n        var dialog = document.getElementById(\'',
		A2(_elm_lang$core$Basics_ops['++'], _debois$elm_mdl$Material_Dialog$theDialog, '\');\n        if (! dialog) {\n          console.log (\'Cannot close dialog: No dialog element. Use `Dialog.view` to construct one.\');\n          return;\n        }\n        if (! dialog.open) {\n          console.log (\'Cannot close dialog: The dialog is not open. Use `Dialog.closeOn` only on components rendered inside the dialog.\');\n          return;\n        }\n        if (! dialog.close) {\n          console.log (\'Cannot close dialog: The dialog does not have a `close` method. Perhaps you forgot a polyfill? Get one at:\\n\\nhttps://github.com/GoogleChrome/dialog-polyfill\\n\');\n          return;\n        }\n        dialog.close();\n      }\n      catch (e)\n      {\n        console.log (\"A dialog method threw an exception. This is not supposed to happen; likely you\'re using a broken polyfill. If not, please file an issue:\\n\\nhttps://github.com/debois/elm-mdl/issues/new\");\n      }\n      '));
	return function (event) {
		return _debois$elm_mdl$Material_Internal_Options$attribute(
			A2(
				_elm_lang$html$Html_Attributes$attribute,
				A2(_elm_lang$core$Basics_ops['++'], 'on', event),
				handler));
	};
}();
var _debois$elm_mdl$Material_Dialog$view = F2(
	function (styling, nodes) {
		return A4(
			_debois$elm_mdl$Material_Options$styled_,
			_elm_lang$html$Html$node('dialog'),
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog'),
				_1: styling
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$id(_debois$elm_mdl$Material_Dialog$theDialog),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('mdc-dialog__surface'),
						_1: {ctor: '[]'}
					},
					nodes),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('mdc-dialog__backdrop'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Material_Dialog$cancelButton = F2(
	function (button, options) {
		return button(
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__footer__button'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__footer__button--cancel'),
					_1: options
				}
			});
	});
var _debois$elm_mdl$Material_Dialog$acceptButton = F2(
	function (button, options) {
		return button(
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__footer__button'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__footer__button--accept'),
					_1: options
				}
			});
	});
var _debois$elm_mdl$Material_Dialog$footer = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__footer'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Dialog$scrollable = _debois$elm_mdl$Material_Options$cs('mdc-dialog__body--scrollable');
var _debois$elm_mdl$Material_Dialog$body = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__body'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Dialog$title = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__header__title'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Dialog$header = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-dialog__header'),
			_1: options
		});
};

var _debois$elm_mdl$Demo_Dialog$element1 = function (model) {
	return A2(
		_debois$elm_mdl$Material_Dialog$view,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _debois$elm_mdl$Demo_Dialog$model = {scrolling: false, mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Dialog$Model = F2(
	function (a, b) {
		return {scrolling: a, mdl: b};
	});
var _debois$elm_mdl$Demo_Dialog$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Dialog$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Dialog$Mdl, _p0._0, model);
	});
var _debois$elm_mdl$Demo_Dialog$element = function (model) {
	return A2(
		_debois$elm_mdl$Material_Dialog$view,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Dialog$header,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Dialog$title,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Use Google\'s location service?'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Dialog$body,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Dialog$footer,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Dialog$cancelButton,
								A3(
									_debois$elm_mdl$Material_Button$render,
									_debois$elm_mdl$Demo_Dialog$Mdl,
									{
										ctor: '::',
										_0: 0,
										_1: {ctor: '[]'}
									},
									model.mdl),
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Dialog$closeOn('click'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Decline'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Material_Dialog$acceptButton,
									A3(
										_debois$elm_mdl$Material_Button$render,
										_debois$elm_mdl$Demo_Dialog$Mdl,
										{
											ctor: '::',
											_0: 1,
											_1: {ctor: '[]'}
										},
										model.mdl),
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Dialog$closeOn('click'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Accept'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Dialog$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A5(
				_debois$elm_mdl$Material_Button$render,
				_debois$elm_mdl$Demo_Dialog$Mdl,
				{
					ctor: '::',
					_0: 0,
					_1: {ctor: '[]'}
				},
				model.mdl,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Dialog$openOn('click'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Show dialog'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A5(
					_debois$elm_mdl$Material_Button$render,
					_debois$elm_mdl$Demo_Dialog$Mdl,
					{
						ctor: '::',
						_0: 1,
						_1: {ctor: '[]'}
					},
					model.mdl,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Dialog$openOn('click'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Show scrolling dialog'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _debois$elm_mdl$Material_Elevation$transition = function (duration) {
	return A2(
		_debois$elm_mdl$Material_Options$css,
		'transition',
		A2(
			_elm_lang$core$Basics_ops['++'],
			'box-shadow ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(duration),
				'ms ease-in-out 0s')));
};
var _debois$elm_mdl$Material_Elevation$elevation = function (z) {
	return _debois$elm_mdl$Material_Options$cs(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'mdc-elevation--z',
			_elm_lang$core$Basics$toString(
				A3(_elm_lang$core$Basics$clamp, 0, 24, z))));
};

var _debois$elm_mdl$Demo_Elevation$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Options$div,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-flow', 'row wrap'),
						_1: {ctor: '[]'}
					}
				},
				A2(
					_elm_lang$core$List$map,
					function (z) {
						return A2(
							_debois$elm_mdl$Material_Options$div,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Elevation$elevation(z),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '200px'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '100px'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '0 60px 80px'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'line-height', '100px'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'color', '#9e9e9e'),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$css, 'font-size', '0.8em'),
														_1: {
															ctor: '::',
															_0: A2(_debois$elm_mdl$Material_Options$css, 'border-radius', '3px'),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(z),
										'dp')),
								_1: {ctor: '[]'}
							});
					},
					A2(_elm_lang$core$List$range, 0, 24))),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Demo_Elevation$model = {transition: false, elevation: 1, mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Elevation$Model = F3(
	function (a, b, c) {
		return {transition: a, elevation: b, mdl: c};
	});
var _debois$elm_mdl$Demo_Elevation$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Elevation$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Elevation$Mdl, _p0._0, model);
	});

var _debois$elm_mdl$Demo_Fabs$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Fabs$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Fabs$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Fabs$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Fabs$Mdl, _p0._0, model);
	});
var _debois$elm_mdl$Demo_Fabs$view = function (model) {
	var fab = F2(
		function (idx, options) {
			return A5(
				_debois$elm_mdl$Material_Fab$render,
				_debois$elm_mdl$Demo_Fabs$Mdl,
				{
					ctor: '::',
					_0: idx,
					_1: {ctor: '[]'}
				},
				model.mdl,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '16px'),
					_1: options
				},
				'favorite_border');
		});
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$section,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$fieldset,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$legend,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Normal FABs'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									fab,
									0,
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										fab,
										1,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Fab$mini,
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											fab,
											2,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Fab$plain,
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												fab,
												3,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Fab$plain,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Fab$mini,
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$fieldset,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$legend,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Disabled FABs'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										fab,
										4,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Fab$disabled,
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											fab,
											5,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Fab$disabled,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Fab$mini,
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												fab,
												6,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Fab$disabled,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Fab$plain,
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													fab,
													7,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Fab$disabled,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Fab$plain,
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Material_Fab$mini,
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};

var _debois$elm_mdl$Material_GridList$primaryContent = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__primary-content'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$icon = F2(
	function (options, icon) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__icon'),
				_1: options
			},
			{
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Icon$view,
					icon,
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_GridList$supportingText = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__supporting-text'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$title = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__title'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$image = F2(
	function (options, src) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$img,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__primary-content'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$attribute(
						_elm_lang$html$Html_Attributes$src(src)),
					_1: options
				}
			},
			{ctor: '[]'});
	});
var _debois$elm_mdl$Material_GridList$secondary = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__secondary'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$primary = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile__primary'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$tile = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-tile'),
			_1: options
		});
};
var _debois$elm_mdl$Material_GridList$tileAspect3x2 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-aspect-3x2');
var _debois$elm_mdl$Material_GridList$tileAspect2x3 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-aspect-2x3');
var _debois$elm_mdl$Material_GridList$tileAspect3x4 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-aspect-3x4');
var _debois$elm_mdl$Material_GridList$tileAspect4x3 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-aspect-4x3');
var _debois$elm_mdl$Material_GridList$tileAspect16x9 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-aspect-16x9');
var _debois$elm_mdl$Material_GridList$gutter1 = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--tile-gutter-1');
var _debois$elm_mdl$Material_GridList$iconAlignEnd = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--with-icon-align-end');
var _debois$elm_mdl$Material_GridList$iconAlignStart = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--with-icon-align-start');
var _debois$elm_mdl$Material_GridList$twolineCaption = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--twoline-caption');
var _debois$elm_mdl$Material_GridList$headerCaption = _debois$elm_mdl$Material_Options$cs('mdc-grid-list--header-caption');
var _debois$elm_mdl$Material_GridList$view = F2(
	function (options, nodes) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-list'),
				_1: options
			},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$ul,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('mdc-grid-list__tiles'),
						_1: {ctor: '[]'}
					},
					nodes),
				_1: {ctor: '[]'}
			});
	});

var _debois$elm_mdl$Demo_GridList$view = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('example'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('examples'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Grid List (Default): empty grid'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_GridList$view,
						{ctor: '[]'},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h2,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Grid List (Default): tile aspect ratio 1x1 with oneline footer caption'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_GridList$view,
								{ctor: '[]'},
								A2(
									_elm_lang$core$List$repeat,
									6,
									A2(
										_debois$elm_mdl$Material_GridList$tile,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_GridList$primary,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_GridList$image,
														{ctor: '[]'},
														'images/1-1.jpg'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_GridList$secondary,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_GridList$title,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}))),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$h2,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with 1px gutter'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_GridList$view,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_GridList$gutter1,
											_1: {ctor: '[]'}
										},
										A2(
											_elm_lang$core$List$repeat,
											6,
											A2(
												_debois$elm_mdl$Material_GridList$tile,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_GridList$primary,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_GridList$image,
																{ctor: '[]'},
																'images/1-1.jpg'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_GridList$secondary,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_GridList$title,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}))),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$h2,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 image only'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_GridList$view,
												{ctor: '[]'},
												A2(
													_elm_lang$core$List$repeat,
													6,
													A2(
														_debois$elm_mdl$Material_GridList$tile,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_GridList$primary,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_GridList$image,
																		{ctor: '[]'},
																		'images/1-1.jpg'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}))),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h2,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with oneline header caption'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_GridList$view,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_GridList$headerCaption,
															_1: {ctor: '[]'}
														},
														A2(
															_elm_lang$core$List$repeat,
															6,
															A2(
																_debois$elm_mdl$Material_GridList$tile,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_GridList$primary,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_GridList$image,
																				{ctor: '[]'},
																				'images/1-1.jpg'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_debois$elm_mdl$Material_GridList$secondary,
																			{ctor: '[]'},
																			{
																				ctor: '::',
																				_0: A2(
																					_debois$elm_mdl$Material_GridList$title,
																					{ctor: '[]'},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}
																}))),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$h2,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with twoline footer caption'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_GridList$view,
																{
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_GridList$twolineCaption,
																	_1: {ctor: '[]'}
																},
																A2(
																	_elm_lang$core$List$repeat,
																	6,
																	A2(
																		_debois$elm_mdl$Material_GridList$tile,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_GridList$primary,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_GridList$image,
																						{ctor: '[]'},
																						'images/1-1.jpg'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_debois$elm_mdl$Material_GridList$secondary,
																					{ctor: '[]'},
																					{
																						ctor: '::',
																						_0: A2(
																							_debois$elm_mdl$Material_GridList$title,
																							{ctor: '[]'},
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																								_1: {ctor: '[]'}
																							}),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_GridList$supportingText,
																								{ctor: '[]'},
																								{
																									ctor: '::',
																									_0: _elm_lang$html$Html$text('Support text'),
																									_1: {ctor: '[]'}
																								}),
																							_1: {ctor: '[]'}
																						}
																					}),
																				_1: {ctor: '[]'}
																			}
																		}))),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$h2,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at start of the caption'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_GridList$view,
																		{
																			ctor: '::',
																			_0: _debois$elm_mdl$Material_GridList$iconAlignStart,
																			_1: {ctor: '[]'}
																		},
																		A2(
																			_elm_lang$core$List$repeat,
																			6,
																			A2(
																				_debois$elm_mdl$Material_GridList$tile,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_GridList$primary,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_GridList$image,
																								{ctor: '[]'},
																								'images/1-1.jpg'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_debois$elm_mdl$Material_GridList$secondary,
																							{ctor: '[]'},
																							{
																								ctor: '::',
																								_0: A2(
																									_debois$elm_mdl$Material_GridList$icon,
																									{ctor: '[]'},
																									'star_border'),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_GridList$title,
																										{ctor: '[]'},
																										{
																											ctor: '::',
																											_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																											_1: {ctor: '[]'}
																										}),
																									_1: {ctor: '[]'}
																								}
																							}),
																						_1: {ctor: '[]'}
																					}
																				}))),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$h2,
																			{ctor: '[]'},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at start of the caption'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_GridList$view,
																				{
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_GridList$iconAlignStart,
																					_1: {
																						ctor: '::',
																						_0: _debois$elm_mdl$Material_GridList$twolineCaption,
																						_1: {ctor: '[]'}
																					}
																				},
																				A2(
																					_elm_lang$core$List$repeat,
																					6,
																					A2(
																						_debois$elm_mdl$Material_GridList$tile,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_GridList$primary,
																								{ctor: '[]'},
																								{
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_GridList$image,
																										{ctor: '[]'},
																										'images/1-1.jpg'),
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_debois$elm_mdl$Material_GridList$secondary,
																									{ctor: '[]'},
																									{
																										ctor: '::',
																										_0: A2(
																											_debois$elm_mdl$Material_GridList$icon,
																											{ctor: '[]'},
																											'star_border'),
																										_1: {
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_GridList$title,
																												{ctor: '[]'},
																												{
																													ctor: '::',
																													_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																													_1: {ctor: '[]'}
																												}),
																											_1: {
																												ctor: '::',
																												_0: A2(
																													_debois$elm_mdl$Material_GridList$supportingText,
																													{ctor: '[]'},
																													{
																														ctor: '::',
																														_0: _elm_lang$html$Html$text('Support text'),
																														_1: {ctor: '[]'}
																													}),
																												_1: {ctor: '[]'}
																											}
																										}
																									}),
																								_1: {ctor: '[]'}
																							}
																						}))),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$h2,
																					{ctor: '[]'},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at end of the caption'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_GridList$view,
																						{
																							ctor: '::',
																							_0: _debois$elm_mdl$Material_GridList$iconAlignEnd,
																							_1: {ctor: '[]'}
																						},
																						A2(
																							_elm_lang$core$List$repeat,
																							6,
																							A2(
																								_debois$elm_mdl$Material_GridList$tile,
																								{ctor: '[]'},
																								{
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_GridList$primary,
																										{ctor: '[]'},
																										{
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_GridList$image,
																												{ctor: '[]'},
																												'images/1-1.jpg'),
																											_1: {ctor: '[]'}
																										}),
																									_1: {
																										ctor: '::',
																										_0: A2(
																											_debois$elm_mdl$Material_GridList$secondary,
																											{ctor: '[]'},
																											{
																												ctor: '::',
																												_0: A2(
																													_debois$elm_mdl$Material_GridList$icon,
																													{ctor: '[]'},
																													'star_border'),
																												_1: {
																													ctor: '::',
																													_0: A2(
																														_debois$elm_mdl$Material_GridList$title,
																														{ctor: '[]'},
																														{
																															ctor: '::',
																															_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																															_1: {ctor: '[]'}
																														}),
																													_1: {ctor: '[]'}
																												}
																											}),
																										_1: {ctor: '[]'}
																									}
																								}))),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_elm_lang$html$Html$h2,
																							{ctor: '[]'},
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at end of the caption'),
																								_1: {ctor: '[]'}
																							}),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_GridList$view,
																								{
																									ctor: '::',
																									_0: _debois$elm_mdl$Material_GridList$twolineCaption,
																									_1: {
																										ctor: '::',
																										_0: _debois$elm_mdl$Material_GridList$iconAlignEnd,
																										_1: {ctor: '[]'}
																									}
																								},
																								A2(
																									_elm_lang$core$List$repeat,
																									6,
																									A2(
																										_debois$elm_mdl$Material_GridList$tile,
																										{ctor: '[]'},
																										{
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_GridList$primary,
																												{ctor: '[]'},
																												{
																													ctor: '::',
																													_0: A2(
																														_debois$elm_mdl$Material_GridList$image,
																														{ctor: '[]'},
																														'images/1-1.jpg'),
																													_1: {ctor: '[]'}
																												}),
																											_1: {
																												ctor: '::',
																												_0: A2(
																													_debois$elm_mdl$Material_GridList$secondary,
																													{ctor: '[]'},
																													{
																														ctor: '::',
																														_0: A2(
																															_debois$elm_mdl$Material_GridList$icon,
																															{ctor: '[]'},
																															'star_border'),
																														_1: {
																															ctor: '::',
																															_0: A2(
																																_debois$elm_mdl$Material_GridList$title,
																																{ctor: '[]'},
																																{
																																	ctor: '::',
																																	_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																																	_1: {ctor: '[]'}
																																}),
																															_1: {
																																ctor: '::',
																																_0: A2(
																																	_debois$elm_mdl$Material_GridList$supportingText,
																																	{ctor: '[]'},
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html$text('Support text'),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {ctor: '[]'}
																															}
																														}
																													}),
																												_1: {ctor: '[]'}
																											}
																										}))),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_elm_lang$html$Html$h2,
																									{ctor: '[]'},
																									{
																										ctor: '::',
																										_0: _elm_lang$html$Html$text('Grid List: tile aspect ratio 16x9 with oneline footer caption (Support: 16:9, 4:3, 3:4, 2:3, 3:2 as well)'),
																										_1: {ctor: '[]'}
																									}),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_GridList$view,
																										{
																											ctor: '::',
																											_0: _debois$elm_mdl$Material_GridList$tileAspect16x9,
																											_1: {ctor: '[]'}
																										},
																										A2(
																											_elm_lang$core$List$repeat,
																											6,
																											A2(
																												_debois$elm_mdl$Material_GridList$tile,
																												{ctor: '[]'},
																												{
																													ctor: '::',
																													_0: A2(
																														_debois$elm_mdl$Material_GridList$primary,
																														{ctor: '[]'},
																														{
																															ctor: '::',
																															_0: A2(
																																_debois$elm_mdl$Material_GridList$image,
																																{ctor: '[]'},
																																'images/16-9.jpg'),
																															_1: {ctor: '[]'}
																														}),
																													_1: {
																														ctor: '::',
																														_0: A2(
																															_debois$elm_mdl$Material_GridList$secondary,
																															{ctor: '[]'},
																															{
																																ctor: '::',
																																_0: A2(
																																	_debois$elm_mdl$Material_GridList$title,
																																	{ctor: '[]'},
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {ctor: '[]'}
																															}),
																														_1: {ctor: '[]'}
																													}
																												}))),
																									_1: {
																										ctor: '::',
																										_0: A2(
																											_elm_lang$html$Html$h2,
																											{ctor: '[]'},
																											{
																												ctor: '::',
																												_0: _elm_lang$html$Html$text('Grid List: use div\'s background instead of img tag (useful when image ratio cannot be ensured)'),
																												_1: {ctor: '[]'}
																											}),
																										_1: {
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_GridList$view,
																												{
																													ctor: '::',
																													_0: _debois$elm_mdl$Material_GridList$headerCaption,
																													_1: {ctor: '[]'}
																												},
																												A2(
																													_elm_lang$core$List$repeat,
																													6,
																													A2(
																														_debois$elm_mdl$Material_GridList$tile,
																														{ctor: '[]'},
																														{
																															ctor: '::',
																															_0: A2(
																																_debois$elm_mdl$Material_GridList$primary,
																																{ctor: '[]'},
																																{
																																	ctor: '::',
																																	_0: A2(
																																		_debois$elm_mdl$Material_GridList$primaryContent,
																																		{
																																			ctor: '::',
																																			_0: A2(_debois$elm_mdl$Material_Options$css, 'background-image', 'url(images/16-9.jpg)'),
																																			_1: {ctor: '[]'}
																																		},
																																		{ctor: '[]'}),
																																	_1: {ctor: '[]'}
																																}),
																															_1: {
																																ctor: '::',
																																_0: A2(
																																	_debois$elm_mdl$Material_GridList$secondary,
																																	{ctor: '[]'},
																																	{
																																		ctor: '::',
																																		_0: A2(
																																			_debois$elm_mdl$Material_GridList$title,
																																			{ctor: '[]'},
																																			{
																																				ctor: '::',
																																				_0: _elm_lang$html$Html$text('Single Very Long Grid Title Line'),
																																				_1: {ctor: '[]'}
																																			}),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {ctor: '[]'}
																															}
																														}))),
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	});

var _debois$elm_mdl$Material_LayoutGrid$span = F2(
	function (device, value) {
		var _p0 = device;
		if (_p0.ctor === 'Just') {
			return _debois$elm_mdl$Material_Options$cs(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'mdc-layout-grid__cell--span-',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(value),
						A2(_elm_lang$core$Basics_ops['++'], '-', _p0._0))));
		} else {
			return _debois$elm_mdl$Material_Options$cs(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'mdc-layout-grid__cell--span-',
					_elm_lang$core$Basics$toString(value)));
		}
	});
var _debois$elm_mdl$Material_LayoutGrid$span12Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	12);
var _debois$elm_mdl$Material_LayoutGrid$span11Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	11);
var _debois$elm_mdl$Material_LayoutGrid$span10Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	10);
var _debois$elm_mdl$Material_LayoutGrid$span9Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	9);
var _debois$elm_mdl$Material_LayoutGrid$span8Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	8);
var _debois$elm_mdl$Material_LayoutGrid$span7Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	7);
var _debois$elm_mdl$Material_LayoutGrid$span6Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	6);
var _debois$elm_mdl$Material_LayoutGrid$span5Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	5);
var _debois$elm_mdl$Material_LayoutGrid$span4Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	4);
var _debois$elm_mdl$Material_LayoutGrid$span3Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	3);
var _debois$elm_mdl$Material_LayoutGrid$span2Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	2);
var _debois$elm_mdl$Material_LayoutGrid$span1Desktop = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('desktop'),
	1);
var _debois$elm_mdl$Material_LayoutGrid$span12Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	12);
var _debois$elm_mdl$Material_LayoutGrid$span11Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	11);
var _debois$elm_mdl$Material_LayoutGrid$span10Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	10);
var _debois$elm_mdl$Material_LayoutGrid$span9Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	9);
var _debois$elm_mdl$Material_LayoutGrid$span8Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	8);
var _debois$elm_mdl$Material_LayoutGrid$span7Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	7);
var _debois$elm_mdl$Material_LayoutGrid$span6Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	6);
var _debois$elm_mdl$Material_LayoutGrid$span5Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	5);
var _debois$elm_mdl$Material_LayoutGrid$span4Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	4);
var _debois$elm_mdl$Material_LayoutGrid$span3Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	3);
var _debois$elm_mdl$Material_LayoutGrid$span2Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	2);
var _debois$elm_mdl$Material_LayoutGrid$span1Tablet = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('tablet'),
	1);
var _debois$elm_mdl$Material_LayoutGrid$span12Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	12);
var _debois$elm_mdl$Material_LayoutGrid$span11Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	11);
var _debois$elm_mdl$Material_LayoutGrid$span10Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	10);
var _debois$elm_mdl$Material_LayoutGrid$span9Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	9);
var _debois$elm_mdl$Material_LayoutGrid$span8Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	8);
var _debois$elm_mdl$Material_LayoutGrid$span7Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	7);
var _debois$elm_mdl$Material_LayoutGrid$span6Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	6);
var _debois$elm_mdl$Material_LayoutGrid$span5Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	5);
var _debois$elm_mdl$Material_LayoutGrid$span4Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	4);
var _debois$elm_mdl$Material_LayoutGrid$span3Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	3);
var _debois$elm_mdl$Material_LayoutGrid$span2Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	2);
var _debois$elm_mdl$Material_LayoutGrid$span1Phone = A2(
	_debois$elm_mdl$Material_LayoutGrid$span,
	_elm_lang$core$Maybe$Just('phone'),
	1);
var _debois$elm_mdl$Material_LayoutGrid$span12 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 12);
var _debois$elm_mdl$Material_LayoutGrid$span11 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 11);
var _debois$elm_mdl$Material_LayoutGrid$span10 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 10);
var _debois$elm_mdl$Material_LayoutGrid$span9 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 9);
var _debois$elm_mdl$Material_LayoutGrid$span8 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 8);
var _debois$elm_mdl$Material_LayoutGrid$span7 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 7);
var _debois$elm_mdl$Material_LayoutGrid$span6 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 6);
var _debois$elm_mdl$Material_LayoutGrid$span5 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 5);
var _debois$elm_mdl$Material_LayoutGrid$span4 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 4);
var _debois$elm_mdl$Material_LayoutGrid$span3 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 3);
var _debois$elm_mdl$Material_LayoutGrid$span2 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 2);
var _debois$elm_mdl$Material_LayoutGrid$span1 = A2(_debois$elm_mdl$Material_LayoutGrid$span, _elm_lang$core$Maybe$Nothing, 1);
var _debois$elm_mdl$Material_LayoutGrid$cell = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-layout-grid__cell'),
			_1: options
		});
};
var _debois$elm_mdl$Material_LayoutGrid$inner = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-layout-grid__inner'),
			_1: options
		});
};
var _debois$elm_mdl$Material_LayoutGrid$fixedColumnWidth = _debois$elm_mdl$Material_Options$cs('mdc-layout-grid--fixed-column-width');
var _debois$elm_mdl$Material_LayoutGrid$alignRight = _debois$elm_mdl$Material_Options$cs('mdc-layout-grid--align-right');
var _debois$elm_mdl$Material_LayoutGrid$alignLeft = _debois$elm_mdl$Material_Options$cs('mdc-layout-grid--align-left');
var _debois$elm_mdl$Material_LayoutGrid$view = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-layout-grid'),
			_1: options
		});
};

var _debois$elm_mdl$Demo_LayoutGrid$view = function (model) {
	var demoRuler = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-ruler'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'fixed'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'center'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'bottom', '0'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'left', '0'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '20px'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '100%'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '0'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'background', 'black'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'color', 'white'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
	var demoParentCell = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-parent-cell'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#aaa'),
					_1: {ctor: '[]'}
				}
			}
		});
	var demoCell = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-cell'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'box-sizing', 'border-box'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#666'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '200px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '8px'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'color', 'white'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'font-size', '1.5rem'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		});
	var demoChildCell = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: demoCell,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('demo-child-cell'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
					_1: {ctor: '[]'}
				}
			}
		});
	var demoGrid = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-grid'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#ddd'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-bottom', '32px'),
					_1: {ctor: '[]'}
				}
			}
		});
	var demoControls = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-controls'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'block'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-bottom', '8px'),
					_1: {ctor: '[]'}
				}
			}
		});
	var demoGridLegend = F2(
		function (node, text_) {
			return A3(
				_debois$elm_mdl$Material_Options$styled,
				node,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'block'),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('demo-grid-legend'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '16px 0 8px 0'),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(text_),
					_1: {ctor: '[]'}
				});
		});
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('examples'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_LayoutGrid$view,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_LayoutGrid$inner,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_LayoutGrid$cell,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: demoControls,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Desktop Margin:'),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$select,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$option,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$value('8px'),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('8px'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$option,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$value('16px'),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('16px'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$option,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$value('24px'),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('24px'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$option,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$value('40px'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('40px'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}
															}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$br,
														{ctor: '[]'},
														{ctor: '[]'}),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html$text('Desktop Gutter:'),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$select,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$option,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$value('8px'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('8px'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$option,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$value('16px'),
																				_1: {ctor: '[]'}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('16px'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$option,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$value('24px'),
																					_1: {ctor: '[]'}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('24px'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$option,
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html_Attributes$value('40px'),
																						_1: {ctor: '[]'}
																					},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('40px'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_LayoutGrid$cell,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: demoControls,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Tablet Margin:'),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$select,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$option,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$value('8px'),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('8px'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$option,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$value('16px'),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('16px'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$option,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$value('24px'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('24px'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$option,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$value('40px'),
																				_1: {ctor: '[]'}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('40px'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$br,
															{ctor: '[]'},
															{ctor: '[]'}),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html$text('Tablet Gutter:'),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$select,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$option,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$value('8px'),
																				_1: {ctor: '[]'}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('8px'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$option,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$value('16px'),
																					_1: {ctor: '[]'}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('16px'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$option,
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html_Attributes$value('24px'),
																						_1: {ctor: '[]'}
																					},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('24px'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_elm_lang$html$Html$option,
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html_Attributes$value('40px'),
																							_1: {ctor: '[]'}
																						},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text('40px'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_LayoutGrid$cell,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Material_Options$styled,
												_elm_lang$html$Html$div,
												{
													ctor: '::',
													_0: demoControls,
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Phone Margin:'),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$select,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$option,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$value('8px'),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('8px'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$option,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$value('16px'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('16px'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$option,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$value('24px'),
																				_1: {ctor: '[]'}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('24px'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$option,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$value('40px'),
																					_1: {ctor: '[]'}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('40px'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$br,
																{ctor: '[]'},
																{ctor: '[]'}),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html$text('Phone Gutter:'),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$select,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$option,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$value('8px'),
																					_1: {ctor: '[]'}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('8px'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$option,
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html_Attributes$value('16px'),
																						_1: {ctor: '[]'}
																					},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('16px'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_elm_lang$html$Html$option,
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html_Attributes$value('24px'),
																							_1: {ctor: '[]'}
																						},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text('24px'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_elm_lang$html$Html$option,
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html_Attributes$value('40px'),
																								_1: {ctor: '[]'}
																							},
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html$text('40px'),
																								_1: {ctor: '[]'}
																							}),
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('demo-warning'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid of default wide (4 columns) items'),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_LayoutGrid$view,
							{
								ctor: '::',
								_0: demoGrid,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_LayoutGrid$inner,
									{ctor: '[]'},
									A2(
										_elm_lang$core$List$repeat,
										3,
										A2(
											_debois$elm_mdl$Material_LayoutGrid$cell,
											{
												ctor: '::',
												_0: demoCell,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('4'),
												_1: {ctor: '[]'}
											}))),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid of 1 column wide items'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_LayoutGrid$view,
									{
										ctor: '::',
										_0: demoGrid,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_LayoutGrid$inner,
											{ctor: '[]'},
											A2(
												_elm_lang$core$List$repeat,
												12,
												A2(
													_debois$elm_mdl$Material_LayoutGrid$cell,
													{
														ctor: '::',
														_0: demoCell,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_LayoutGrid$span1,
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('1'),
														_1: {ctor: '[]'}
													}))),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid of differently sized items'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_LayoutGrid$view,
											{
												ctor: '::',
												_0: demoGrid,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_LayoutGrid$inner,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_LayoutGrid$cell,
															{
																ctor: '::',
																_0: demoCell,
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_LayoutGrid$span6,
																	_1: {ctor: '[]'}
																}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('6'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_LayoutGrid$cell,
																{
																	ctor: '::',
																	_0: demoCell,
																	_1: {
																		ctor: '::',
																		_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																		_1: {ctor: '[]'}
																	}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('4'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_LayoutGrid$cell,
																	{
																		ctor: '::',
																		_0: demoCell,
																		_1: {
																			ctor: '::',
																			_0: _debois$elm_mdl$Material_LayoutGrid$span2,
																			_1: {ctor: '[]'}
																		}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('2'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid of items with tweaks at different screen sizes'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_LayoutGrid$view,
													{
														ctor: '::',
														_0: demoGrid,
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_LayoutGrid$inner,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_LayoutGrid$cell,
																	{
																		ctor: '::',
																		_0: demoCell,
																		_1: {
																			ctor: '::',
																			_0: _debois$elm_mdl$Material_LayoutGrid$span6,
																			_1: {
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_LayoutGrid$span8Tablet,
																				_1: {ctor: '[]'}
																			}
																		}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('6 (8 tablet)'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_LayoutGrid$cell,
																		{
																			ctor: '::',
																			_0: demoCell,
																			_1: {
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																				_1: {
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_LayoutGrid$span6Tablet,
																					_1: {ctor: '[]'}
																				}
																			}
																		},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('4 (6 tablet)'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_debois$elm_mdl$Material_LayoutGrid$cell,
																			{
																				ctor: '::',
																				_0: demoCell,
																				_1: {
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_LayoutGrid$span2,
																					_1: {
																						ctor: '::',
																						_0: _debois$elm_mdl$Material_LayoutGrid$span4Phone,
																						_1: {ctor: '[]'}
																					}
																				}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('2 (4 phone)'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}
																}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid nested within parent grid cell'),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_LayoutGrid$view,
															{
																ctor: '::',
																_0: demoGrid,
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_LayoutGrid$inner,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_debois$elm_mdl$Material_LayoutGrid$cell,
																			{
																				ctor: '::',
																				_0: demoParentCell,
																				_1: {
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																					_1: {ctor: '[]'}
																				}
																			},
																			{
																				ctor: '::',
																				_0: A2(
																					_debois$elm_mdl$Material_LayoutGrid$inner,
																					{ctor: '[]'},
																					A2(
																						_elm_lang$core$List$repeat,
																						3,
																						A2(
																							_debois$elm_mdl$Material_LayoutGrid$cell,
																							{
																								ctor: '::',
																								_0: demoChildCell,
																								_1: {
																									ctor: '::',
																									_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																									_1: {ctor: '[]'}
																								}
																							},
																							{
																								ctor: '::',
																								_0: A3(
																									_debois$elm_mdl$Material_Options$styled,
																									_elm_lang$html$Html$span,
																									{
																										ctor: '::',
																										_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
																										_1: {
																											ctor: '::',
																											_0: A2(_debois$elm_mdl$Material_Options$css, 'bottom', '8px'),
																											_1: {
																												ctor: '::',
																												_0: A2(_debois$elm_mdl$Material_Options$css, 'right', '8px'),
																												_1: {
																													ctor: '::',
																													_0: A2(_debois$elm_mdl$Material_Options$css, 'color', '#ddd'),
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									},
																									{
																										ctor: '::',
																										_0: _elm_lang$html$Html$text('Child 4'),
																										_1: {ctor: '[]'}
																									}),
																								_1: {ctor: '[]'}
																							}))),
																				_1: {
																					ctor: '::',
																					_0: A3(
																						_debois$elm_mdl$Material_Options$styled,
																						_elm_lang$html$Html$span,
																						{
																							ctor: '::',
																							_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
																							_1: {
																								ctor: '::',
																								_0: A2(_debois$elm_mdl$Material_Options$css, 'top', '8px'),
																								_1: {
																									ctor: '::',
																									_0: A2(_debois$elm_mdl$Material_Options$css, 'left', '8px'),
																									_1: {
																										ctor: '::',
																										_0: A2(_debois$elm_mdl$Material_Options$css, 'font-size', '1.5rem'),
																										_1: {
																											ctor: '::',
																											_0: A2(_debois$elm_mdl$Material_Options$css, 'color', 'white'),
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text('Parent 4'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {ctor: '[]'}
																				}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_LayoutGrid$cell,
																				{
																					ctor: '::',
																					_0: demoCell,
																					_1: {
																						ctor: '::',
																						_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																						_1: {ctor: '[]'}
																					}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('4'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_debois$elm_mdl$Material_LayoutGrid$cell,
																					{
																						ctor: '::',
																						_0: demoCell,
																						_1: {
																							ctor: '::',
																							_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																							_1: {ctor: '[]'}
																						}
																					},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('4'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {ctor: '[]'}
																			}
																		}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(demoGridLegend, _elm_lang$html$Html$h2, 'Grid with max width'),
															_1: {
																ctor: '::',
																_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid with max width (1280px) and center alignment by default'),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_LayoutGrid$view,
																		{
																			ctor: '::',
																			_0: demoGrid,
																			_1: {
																				ctor: '::',
																				_0: A2(_debois$elm_mdl$Material_Options$css, 'max-width', '1280px'),
																				_1: {ctor: '[]'}
																			}
																		},
																		{
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_LayoutGrid$inner,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_LayoutGrid$cell,
																						{
																							ctor: '::',
																							_0: demoCell,
																							_1: {
																								ctor: '::',
																								_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																								_1: {ctor: '[]'}
																							}
																						},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text(''),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_debois$elm_mdl$Material_LayoutGrid$cell,
																							{
																								ctor: '::',
																								_0: demoCell,
																								_1: {
																									ctor: '::',
																									_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																									_1: {ctor: '[]'}
																								}
																							},
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html$text(''),
																								_1: {ctor: '[]'}
																							}),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_LayoutGrid$cell,
																								{
																									ctor: '::',
																									_0: demoCell,
																									_1: {
																										ctor: '::',
																										_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																										_1: {ctor: '[]'}
																									}
																								},
																								{
																									ctor: '::',
																									_0: _elm_lang$html$Html$text(''),
																									_1: {ctor: '[]'}
																								}),
																							_1: {ctor: '[]'}
																						}
																					}
																				}),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Grid with max width (1280px) and left alignment'),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_LayoutGrid$view,
																				{
																					ctor: '::',
																					_0: demoGrid,
																					_1: {
																						ctor: '::',
																						_0: A2(_debois$elm_mdl$Material_Options$css, 'max-width', '1280px'),
																						_1: {
																							ctor: '::',
																							_0: _debois$elm_mdl$Material_LayoutGrid$alignLeft,
																							_1: {ctor: '[]'}
																						}
																					}
																				},
																				{
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_LayoutGrid$inner,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_LayoutGrid$cell,
																								{
																									ctor: '::',
																									_0: demoCell,
																									_1: {
																										ctor: '::',
																										_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																										_1: {ctor: '[]'}
																									}
																								},
																								{
																									ctor: '::',
																									_0: _elm_lang$html$Html$text(''),
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_debois$elm_mdl$Material_LayoutGrid$cell,
																									{
																										ctor: '::',
																										_0: demoCell,
																										_1: {
																											ctor: '::',
																											_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																											_1: {ctor: '[]'}
																										}
																									},
																									{
																										ctor: '::',
																										_0: _elm_lang$html$Html$text(''),
																										_1: {ctor: '[]'}
																									}),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_LayoutGrid$cell,
																										{
																											ctor: '::',
																											_0: demoCell,
																											_1: {
																												ctor: '::',
																												_0: _debois$elm_mdl$Material_LayoutGrid$span4,
																												_1: {ctor: '[]'}
																											}
																										},
																										{
																											ctor: '::',
																											_0: _elm_lang$html$Html$text(''),
																											_1: {ctor: '[]'}
																										}),
																									_1: {ctor: '[]'}
																								}
																							}
																						}),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Fixed column width layout grid'),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_debois$elm_mdl$Material_LayoutGrid$view,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_LayoutGrid$inner,
																								{ctor: '[]'},
																								{
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_LayoutGrid$cell,
																										{
																											ctor: '::',
																											_0: demoControls,
																											_1: {ctor: '[]'}
																										},
																										{
																											ctor: '::',
																											_0: _elm_lang$html$Html$text('Desktop Column Width:'),
																											_1: {
																												ctor: '::',
																												_0: A2(
																													_elm_lang$html$Html$select,
																													{ctor: '[]'},
																													{
																														ctor: '::',
																														_0: A2(
																															_elm_lang$html$Html$option,
																															{
																																ctor: '::',
																																_0: _elm_lang$html$Html_Attributes$value('72px'),
																																_1: {
																																	ctor: '::',
																																	_0: _elm_lang$html$Html_Attributes$selected(true),
																																	_1: {ctor: '[]'}
																																}
																															},
																															{
																																ctor: '::',
																																_0: _elm_lang$html$Html$text('72px'),
																																_1: {ctor: '[]'}
																															}),
																														_1: {
																															ctor: '::',
																															_0: A2(
																																_elm_lang$html$Html$option,
																																{
																																	ctor: '::',
																																	_0: _elm_lang$html$Html_Attributes$value('84px'),
																																	_1: {
																																		ctor: '::',
																																		_0: _elm_lang$html$Html_Attributes$selected(true),
																																		_1: {ctor: '[]'}
																																	}
																																},
																																{
																																	ctor: '::',
																																	_0: _elm_lang$html$Html$text('84px'),
																																	_1: {ctor: '[]'}
																																}),
																															_1: {ctor: '[]'}
																														}
																													}),
																												_1: {ctor: '[]'}
																											}
																										}),
																									_1: {
																										ctor: '::',
																										_0: A2(
																											_debois$elm_mdl$Material_LayoutGrid$cell,
																											{
																												ctor: '::',
																												_0: demoControls,
																												_1: {ctor: '[]'}
																											},
																											{
																												ctor: '::',
																												_0: _elm_lang$html$Html$text('Tablet Column Width:'),
																												_1: {
																													ctor: '::',
																													_0: A2(
																														_elm_lang$html$Html$select,
																														{ctor: '[]'},
																														{
																															ctor: '::',
																															_0: A2(
																																_elm_lang$html$Html$option,
																																{
																																	ctor: '::',
																																	_0: _elm_lang$html$Html_Attributes$value('72px'),
																																	_1: {
																																		ctor: '::',
																																		_0: _elm_lang$html$Html_Attributes$selected(true),
																																		_1: {ctor: '[]'}
																																	}
																																},
																																{
																																	ctor: '::',
																																	_0: _elm_lang$html$Html$text('72px'),
																																	_1: {ctor: '[]'}
																																}),
																															_1: {
																																ctor: '::',
																																_0: A2(
																																	_elm_lang$html$Html$option,
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html_Attributes$value('84px'),
																																		_1: {
																																			ctor: '::',
																																			_0: _elm_lang$html$Html_Attributes$selected(true),
																																			_1: {ctor: '[]'}
																																		}
																																	},
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html$text('84px'),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {ctor: '[]'}
																															}
																														}),
																													_1: {ctor: '[]'}
																												}
																											}),
																										_1: {
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_LayoutGrid$cell,
																												{
																													ctor: '::',
																													_0: demoControls,
																													_1: {ctor: '[]'}
																												},
																												{
																													ctor: '::',
																													_0: _elm_lang$html$Html$text('Phone Column Width:'),
																													_1: {
																														ctor: '::',
																														_0: A2(
																															_elm_lang$html$Html$select,
																															{ctor: '[]'},
																															{
																																ctor: '::',
																																_0: A2(
																																	_elm_lang$html$Html$option,
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html_Attributes$value('72px'),
																																		_1: {
																																			ctor: '::',
																																			_0: _elm_lang$html$Html_Attributes$selected(true),
																																			_1: {ctor: '[]'}
																																		}
																																	},
																																	{
																																		ctor: '::',
																																		_0: _elm_lang$html$Html$text('72px'),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {
																																	ctor: '::',
																																	_0: A2(
																																		_elm_lang$html$Html$option,
																																		{
																																			ctor: '::',
																																			_0: _elm_lang$html$Html_Attributes$value('84px'),
																																			_1: {
																																				ctor: '::',
																																				_0: _elm_lang$html$Html_Attributes$selected(true),
																																				_1: {ctor: '[]'}
																																			}
																																		},
																																		{
																																			ctor: '::',
																																			_0: _elm_lang$html$Html$text('84px'),
																																			_1: {ctor: '[]'}
																																		}),
																																	_1: {ctor: '[]'}
																																}
																															}),
																														_1: {ctor: '[]'}
																													}
																												}),
																											_1: {ctor: '[]'}
																										}
																									}
																								}),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Fixed column width layout grid and center alignment by default'),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_LayoutGrid$view,
																								{
																									ctor: '::',
																									_0: demoGrid,
																									_1: {
																										ctor: '::',
																										_0: A2(_debois$elm_mdl$Material_Options$css, 'max-width', '1280px'),
																										_1: {ctor: '[]'}
																									}
																								},
																								{
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_LayoutGrid$inner,
																										{ctor: '[]'},
																										A2(
																											_elm_lang$core$List$repeat,
																											3,
																											A2(
																												_debois$elm_mdl$Material_LayoutGrid$cell,
																												{
																													ctor: '::',
																													_0: demoCell,
																													_1: {
																														ctor: '::',
																														_0: _debois$elm_mdl$Material_LayoutGrid$span1,
																														_1: {ctor: '[]'}
																													}
																												},
																												{ctor: '[]'}))),
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: A2(demoGridLegend, _elm_lang$html$Html$div, 'Fixed column width layout grid and right alignment'),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_LayoutGrid$view,
																										{
																											ctor: '::',
																											_0: demoGrid,
																											_1: {
																												ctor: '::',
																												_0: A2(_debois$elm_mdl$Material_Options$css, 'max-width', '1280px'),
																												_1: {
																													ctor: '::',
																													_0: _debois$elm_mdl$Material_LayoutGrid$alignRight,
																													_1: {ctor: '[]'}
																												}
																											}
																										},
																										{
																											ctor: '::',
																											_0: A2(
																												_debois$elm_mdl$Material_LayoutGrid$inner,
																												{ctor: '[]'},
																												A2(
																													_elm_lang$core$List$repeat,
																													3,
																													A2(
																														_debois$elm_mdl$Material_LayoutGrid$cell,
																														{
																															ctor: '::',
																															_0: demoCell,
																															_1: {
																																ctor: '::',
																																_0: _debois$elm_mdl$Material_LayoutGrid$span1,
																																_1: {ctor: '[]'}
																															}
																														},
																														{ctor: '[]'}))),
																											_1: {ctor: '[]'}
																										}),
																									_1: {
																										ctor: '::',
																										_0: A3(
																											_debois$elm_mdl$Material_Options$styled,
																											_elm_lang$html$Html$div,
																											{
																												ctor: '::',
																												_0: demoRuler,
																												_1: {ctor: '[]'}
																											},
																											{
																												ctor: '::',
																												_0: _elm_lang$html$Html$text('???px (?)'),
																												_1: {ctor: '[]'}
																											}),
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_LayoutGrid$update = F2(
	function (msg, model) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			model,
			{ctor: '[]'});
	});
var _debois$elm_mdl$Demo_LayoutGrid$model = {};
var _debois$elm_mdl$Demo_LayoutGrid$Model = {};
var _debois$elm_mdl$Demo_LayoutGrid$NoOp = {ctor: 'NoOp'};

var _debois$elm_mdl$Demo_Lists$interactiveList = A2(
	_debois$elm_mdl$Material_List$ul,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_debois$elm_mdl$Material_List$li,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$startDetailIcon,
					'network_wifi',
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Wi-Fi'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetailIcon,
						'bluetooth',
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Bluetooth'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$startDetailIcon,
							'data_usage',
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('Data Usage'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _debois$elm_mdl$Demo_Lists$groupsExample = function () {
	var item = F3(
		function (icon, primary, secondary) {
			return A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Icon$view,
								icon,
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$text,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(primary),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_List$secondary,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(secondary),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$endDetailIcon,
								'info',
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	var folder = item('folder');
	var file = item('insert_drive_file');
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_elm_lang$html$Html$node,
				'style',
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$type_('text/css'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('\n.two-line-avatar-text-icon-demo .mdc-list-item__start-detail {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: rgba(0,0,0,.26);\n}\n.two-line-avatar-text-icon-demo .mdc-list-item__end-detail {\n  color: rgba(0,0,0,.26);\n}\n.mdc-theme--dark .two-line-avatar-text-icon-demo .mdc-list-item__start-detail {\n  color: #303030;\n  background-color: rgba(255,255,255,.7);\n}\n.mdc-theme--dark .two-line-avatar-text-icon-demo .mdc-list-item__end-detail {\n  color: rgba(255,255,255,.7);\n}\n'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$group,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$subheader,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Folders'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$ul,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_List$twoLine,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_List$avatar,
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$cs('two-line-avatar-text-icon-demo'),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: A2(folder, 'Photos', 'Jan 9, 2014'),
									_1: {
										ctor: '::',
										_0: A2(folder, 'Recipes', 'Jan 17, 2014'),
										_1: {
											ctor: '::',
											_0: A2(folder, 'Work', 'Jan 28, 2014'),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_List$divider(
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_List$inset,
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_List$subheader,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Files'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_List$ul,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_List$twoLine,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_List$avatar,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$cs('two-line-avatar-text-icon-demo'),
														_1: {ctor: '[]'}
													}
												}
											},
											{
												ctor: '::',
												_0: A2(file, 'Vacation Itinerary', 'Jan 10, 2014'),
												_1: {
													ctor: '::',
													_0: A2(file, 'Recipes', 'Jan 17, 2014'),
													_1: {
														ctor: '::',
														_0: A2(file, 'Kitchen Remodel', 'Jan 20, 2014'),
														_1: {ctor: '[]'}
													}
												}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
}();
var _debois$elm_mdl$Demo_Lists$basicGroups = A2(
	_debois$elm_mdl$Material_List$group,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_debois$elm_mdl$Material_List$subheader,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('List 1'),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_List$ul,
				{ctor: '[]'},
				A2(
					_elm_lang$core$List$repeat,
					3,
					A2(
						_debois$elm_mdl$Material_List$li,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Single-line item'),
							_1: {ctor: '[]'}
						}))),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_List$divider(
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$subheader,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('List 2'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$ul,
							{ctor: '[]'},
							A2(
								_elm_lang$core$List$repeat,
								3,
								A2(
									_debois$elm_mdl$Material_List$li,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Single-line item'),
										_1: {ctor: '[]'}
									}))),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _debois$elm_mdl$Demo_Lists$insetDividers = A2(
	_debois$elm_mdl$Material_List$ul,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_List$avatar,
		_1: {ctor: '[]'}
	},
	_elm_lang$core$List$concat(
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$List$repeat,
				3,
				A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$startDetail,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('Single-line item - section 1'),
							_1: {ctor: '[]'}
						}
					})),
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_List$divider(
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_List$inset,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$repeat,
						2,
						A2(
							_debois$elm_mdl$Material_List$li,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_List$startDetail,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html$text('Single-line item - section 2'),
									_1: {ctor: '[]'}
								}
							})),
					_1: {ctor: '[]'}
				}
			}
		}));
var _debois$elm_mdl$Demo_Lists$fullWidthDividers = A2(
	_debois$elm_mdl$Material_List$ul,
	{ctor: '[]'},
	_elm_lang$core$List$concat(
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$List$repeat,
				3,
				A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Single-line item - section 1'),
						_1: {ctor: '[]'}
					})),
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_List$divider(
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				},
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$repeat,
						2,
						A2(
							_debois$elm_mdl$Material_List$li,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Single-line item - section 2'),
								_1: {ctor: '[]'}
							})),
					_1: {ctor: '[]'}
				}
			}
		}));
var _debois$elm_mdl$Demo_Lists$twoLineAvatarPlusTextPlusIconExample = function () {
	var item = F2(
		function (primary, secondary) {
			return A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Icon$view,
								'folder',
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$text,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(primary),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_List$secondary,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(secondary),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$endDetailIcon,
								'info',
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_elm_lang$html$Html$node,
				'style',
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$type_('text/css'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('\n#two-line-avatar-text-icon-demo .mdc-list-item__start-detail {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: rgba(0,0,0,.26);\n}\n#two-line-avatar-text-icon-demo .mdc-list-item__end-detail {\n  color: rgba(0,0,0,.26);\n}\n.mdc-theme--dark #two-line-avatar-text-icon-demo .mdc-list-item__start-detail {\n  color: #303030;\n  background-color: rgba(255,255,255,.7);\n}\n.mdc-theme--dark #two-line-avatar-text-icon-demo .mdc-list-item__end-detail {\n  color: rgba(255,255,255,.7);\n}\n'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$ul,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_List$twoLine,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_List$avatar,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$id('two-line-avatar-text-icon-demo'),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(item, 'Photos', 'Jan 9, 2014'),
						_1: {
							ctor: '::',
							_0: A2(item, 'Recipes', 'Jan 17, 2014'),
							_1: {
								ctor: '::',
								_0: A2(item, 'Work', 'Jan 28, 2014'),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
}();
var _debois$elm_mdl$Demo_Lists$endDetail_ = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{ctor: '::', _0: _debois$elm_mdl$Material_List$twoLine, _1: options},
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$text,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Two-line item'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_List$secondary,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Secondary text'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$endDetail,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$avatarList_ = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_List$twoLine,
			_1: {ctor: '::', _0: _debois$elm_mdl$Material_List$avatar, _1: options}
		},
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$text,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Two-line item'),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_List$secondary,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Secondary text'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$startDetail_ = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{ctor: '::', _0: _debois$elm_mdl$Material_List$twoLine, _1: options},
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$text,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Two-line item'),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_List$secondary,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Secondary text'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$twoLine = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{ctor: '::', _0: _debois$elm_mdl$Material_List$twoLine, _1: options},
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$text,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Two-line item'),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_List$secondary,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Secondary text'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				})));
};
var _debois$elm_mdl$Demo_Lists$avatarWithTextAndIconExample = function () {
	var item = F3(
		function (src, text, icon) {
			var url = A2(_elm_lang$core$Basics_ops['++'], 'images/', src);
			return A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$avatarImage,
						url,
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(text),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$endDetailIcon,
								icon,
								{
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'text-decoration', 'none'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'color', '#ff4081'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_List$avatar,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A3(item, 'animal3.svg', 'Brown Bear', 'favorite'),
			_1: {
				ctor: '::',
				_0: A3(item, 'animal1.svg', 'Panda', 'favorite_border'),
				_1: {
					ctor: '::',
					_0: A3(item, 'animal2.svg', 'Sleuth', 'favorite_border'),
					_1: {ctor: '[]'}
				}
			}
		});
}();
var _debois$elm_mdl$Demo_Lists$avatarPlusEndDetail = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{ctor: '::', _0: _debois$elm_mdl$Material_List$avatar, _1: options},
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Single-line item'),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$endDetail,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$endDetail = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		options,
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Single-line item'),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$endDetail,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$avatarListExample = A2(
	_debois$elm_mdl$Material_List$ul,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_List$avatar,
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_debois$elm_mdl$Material_List$li,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$avatarImage,
					'images/animal1.svg',
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Panda'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$avatarImage,
						'images/animal2.svg',
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Sleuth'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$avatarImage,
							'images/animal3.svg',
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('Brown Bear'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _debois$elm_mdl$Demo_Lists$avatarList = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		{ctor: '::', _0: _debois$elm_mdl$Material_List$avatar, _1: options},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Single-line item'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$startDetail,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('Single-line item'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$li,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_List$startDetail,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text('Single-line item'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Lists$startDetailExample = A2(
	_debois$elm_mdl$Material_List$ul,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_debois$elm_mdl$Material_List$li,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$startDetailIcon,
					'network_wifi',
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Wi-Fi'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetailIcon,
						'bluetooth',
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Bluetooth'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_List$li,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_List$startDetailIcon,
							'data_usage',
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('Data Usage'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _debois$elm_mdl$Demo_Lists$startDetail = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		options,
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$startDetail,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('gray-bg'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text('Single-line item'),
						_1: {ctor: '[]'}
					}
				})));
};
var _debois$elm_mdl$Demo_Lists$singleLine = function (options) {
	return A2(
		_debois$elm_mdl$Material_List$ul,
		options,
		A2(
			_elm_lang$core$List$repeat,
			3,
			A2(
				_debois$elm_mdl$Material_List$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Single-line item'),
					_1: {ctor: '[]'}
				})));
};
var _debois$elm_mdl$Demo_Lists$inlineCss = A3(
	_elm_lang$html$Html$node,
	'style',
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$type_('text/css'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('\nsection {\n  padding: 24px;\n}\n.mdc-list, .mdc-list-group {\n  max-width: 600px;\n  border: 1px solid rgba(0,0,0,.1);\n}\n.mdc-list-group > .mdc-list {\n  max-width: auto;\n  border: none;\n}\n.mdc-theme--dark .mdc-list {\n  border: none;\n}\nsection.mdc-theme--dark {\n  background-color: #303030;\n}\n.mdc-theme--dark > h3 {\n  color: white;\n}\n.gray-bg {\n  background-color: rgba(0,0,0,.26);\n}\ni.mdc-list-item__start-detail {\n  color: rgba(0,0,0,.54);\n}\n.mdc-theme--dark i.mdc-list-item__start-detail {\n  color: rgba(255,255,255,.7);\n}\n'),
		_1: {ctor: '[]'}
	});
var _debois$elm_mdl$Demo_Lists$view = function (model) {
	return A2(
		_debois$elm_mdl$Material_Options$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _debois$elm_mdl$Demo_Lists$inlineCss,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$section,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h2,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Single-Line list'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$section,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$h3,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Text only'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Demo_Lists$singleLine(
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$section,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$h3,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Text only (Dense)'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Demo_Lists$singleLine(
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_List$dense,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$section,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$h3,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Text only (dark)'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Demo_Lists$singleLine(
													{ctor: '[]'}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$section,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h3,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Start Detail'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$aside,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$p,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$em,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('Note: The grey background is styled using demo placeholder styles'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Demo_Lists$startDetail(
															{ctor: '[]'}),
														_1: {ctor: '[]'}
													}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$section,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$h3,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Start Detail (Dense)'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Demo_Lists$startDetail(
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_List$dense,
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$section,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$h3,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Start Detail Example - Icon with Text'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Demo_Lists$startDetailExample,
															_1: {ctor: '[]'}
														}
													}),
												_1: {
													ctor: '::',
													_0: A3(
														_debois$elm_mdl$Material_Options$styled,
														_elm_lang$html$Html$section,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$h3,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Start Detail Example - Icon with Text (dark)'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Demo_Lists$startDetailExample,
																_1: {ctor: '[]'}
															}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$section,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$h3,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Avatar List'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Demo_Lists$avatarList(
																		{ctor: '[]'}),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$section,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$h3,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('Avatar List (Dense)'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: _debois$elm_mdl$Demo_Lists$avatarList(
																			{
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_List$dense,
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$section,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$h3,
																			{ctor: '[]'},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('Example - Avatar with Text'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: _debois$elm_mdl$Demo_Lists$avatarListExample,
																			_1: {ctor: '[]'}
																		}
																	}),
																_1: {
																	ctor: '::',
																	_0: A3(
																		_debois$elm_mdl$Material_Options$styled,
																		_elm_lang$html$Html$section,
																		{
																			ctor: '::',
																			_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$h3,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('Example - Avatar with Text (dark)'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: _debois$elm_mdl$Demo_Lists$avatarListExample,
																				_1: {ctor: '[]'}
																			}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$section,
																			{ctor: '[]'},
																			{
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$h3,
																					{ctor: '[]'},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('End Detail'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {
																					ctor: '::',
																					_0: _debois$elm_mdl$Demo_Lists$endDetail(
																						{ctor: '[]'}),
																					_1: {ctor: '[]'}
																				}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$section,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: A2(
																						_elm_lang$html$Html$h3,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text('End Detail (Dense)'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: _debois$elm_mdl$Demo_Lists$endDetail(
																							{
																								ctor: '::',
																								_0: _debois$elm_mdl$Material_List$dense,
																								_1: {ctor: '[]'}
																							}),
																						_1: {ctor: '[]'}
																					}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$section,
																					{ctor: '[]'},
																					{
																						ctor: '::',
																						_0: A2(
																							_elm_lang$html$Html$h3,
																							{ctor: '[]'},
																							{
																								ctor: '::',
																								_0: _elm_lang$html$Html$text('Avatar + End Detail'),
																								_1: {ctor: '[]'}
																							}),
																						_1: {
																							ctor: '::',
																							_0: _debois$elm_mdl$Demo_Lists$avatarPlusEndDetail(
																								{ctor: '[]'}),
																							_1: {ctor: '[]'}
																						}
																					}),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_elm_lang$html$Html$section,
																						{ctor: '[]'},
																						{
																							ctor: '::',
																							_0: A2(
																								_elm_lang$html$Html$h3,
																								{ctor: '[]'},
																								{
																									ctor: '::',
																									_0: _elm_lang$html$Html$text('Avatar + End Detail (Dense)'),
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: _debois$elm_mdl$Demo_Lists$avatarPlusEndDetail(
																									{
																										ctor: '::',
																										_0: _debois$elm_mdl$Material_List$dense,
																										_1: {ctor: '[]'}
																									}),
																								_1: {ctor: '[]'}
																							}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_elm_lang$html$Html$section,
																							{ctor: '[]'},
																							{
																								ctor: '::',
																								_0: A2(
																									_elm_lang$html$Html$h3,
																									{ctor: '[]'},
																									{
																										ctor: '::',
																										_0: _elm_lang$html$Html$text('Example - Avatar with Text and Icon'),
																										_1: {ctor: '[]'}
																									}),
																								_1: {
																									ctor: '::',
																									_0: _debois$elm_mdl$Demo_Lists$avatarWithTextAndIconExample,
																									_1: {ctor: '[]'}
																								}
																							}),
																						_1: {
																							ctor: '::',
																							_0: A3(
																								_debois$elm_mdl$Material_Options$styled,
																								_elm_lang$html$Html$section,
																								{
																									ctor: '::',
																									_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
																									_1: {ctor: '[]'}
																								},
																								{
																									ctor: '::',
																									_0: A2(
																										_elm_lang$html$Html$h3,
																										{ctor: '[]'},
																										{
																											ctor: '::',
																											_0: _elm_lang$html$Html$text('Example - Avatar with Text and Icon (Dark)'),
																											_1: {ctor: '[]'}
																										}),
																									_1: {
																										ctor: '::',
																										_0: _debois$elm_mdl$Demo_Lists$avatarWithTextAndIconExample,
																										_1: {ctor: '[]'}
																									}
																								}),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$section,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$h2,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Two-line List'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$section,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$h3,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Text-Only'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Demo_Lists$twoLine(
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$section,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$h3,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Text-Only (Dense)'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Demo_Lists$twoLine(
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_List$dense,
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$section,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h3,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Start Detail'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Demo_Lists$startDetail_(
														{ctor: '[]'}),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$section,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$h3,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Start Detail (Dense)'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Demo_Lists$startDetail_(
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_List$dense,
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$section,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$h3,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Avatar List'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Demo_Lists$avatarList_(
																{ctor: '[]'}),
															_1: {ctor: '[]'}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$section,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$h3,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Avatar List (Dense)'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Demo_Lists$avatarList_(
																	{
																		ctor: '::',
																		_0: _debois$elm_mdl$Material_List$dense,
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$section,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$h3,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('End Detail'),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Demo_Lists$endDetail_(
																		{ctor: '[]'}),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$section,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$h3,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('End Detail (Dense)'),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: _debois$elm_mdl$Demo_Lists$endDetail_(
																			{
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_List$dense,
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$section,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$h3,
																			{ctor: '[]'},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('Example - Two-line avatar + text + icon'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: _debois$elm_mdl$Demo_Lists$twoLineAvatarPlusTextPlusIconExample,
																			_1: {ctor: '[]'}
																		}
																	}),
																_1: {
																	ctor: '::',
																	_0: A3(
																		_debois$elm_mdl$Material_Options$styled,
																		_elm_lang$html$Html$section,
																		{
																			ctor: '::',
																			_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$h3,
																				{ctor: '[]'},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('Example - Two-line avatar + text + icon (Dark)'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: _debois$elm_mdl$Demo_Lists$twoLineAvatarPlusTextPlusIconExample,
																				_1: {ctor: '[]'}
																			}
																		}),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$section,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$h2,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('List Dividers'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$section,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$h3,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Full-Width Dividers'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Demo_Lists$fullWidthDividers,
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$section,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h3,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Inset Dividers'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Demo_Lists$insetDividers,
													_1: {ctor: '[]'}
												}
											}),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$section,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$h2,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('List Groups'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$section,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$h3,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Basic Usage'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Demo_Lists$basicGroups,
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$section,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$h3,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Example - Two-line Lists, Avatars, end detail, inset dividers'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Demo_Lists$groupsExample,
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A3(
													_debois$elm_mdl$Material_Options$styled,
													_elm_lang$html$Html$section,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$h3,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Example - Two-line Lists, Avatars, end detail, inset dividers (Dark)'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Demo_Lists$groupsExample,
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$section,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$h2,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Interactive Lists (with ink ripple)'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$section,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$h3,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Example - Interactive List'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Demo_Lists$interactiveList,
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A3(
													_debois$elm_mdl$Material_Options$styled,
													_elm_lang$html$Html$section,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$cs('mdc-theme--dark'),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$h3,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Example - Interactive List (Dark)'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Demo_Lists$interactiveList,
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Lists$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Lists$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Lists$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Lists$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Lists$Mdl, _p0._0, model);
	});

var _debois$elm_mdl$Demo_Loading$view = function (model) {
	return A2(
		_debois$elm_mdl$Material_Options$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _debois$elm_mdl$Demo_Loading$model = {mdl: _debois$elm_mdl$Material$model, running: false, progress: 14};
var _debois$elm_mdl$Demo_Loading$Model = F3(
	function (a, b, c) {
		return {mdl: a, running: b, progress: c};
	});
var _debois$elm_mdl$Demo_Loading$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Loading$Toggle = {ctor: 'Toggle'};
var _debois$elm_mdl$Demo_Loading$Tick = {ctor: 'Tick'};
var _debois$elm_mdl$Demo_Loading$update = F2(
	function (action, model) {
		var _p0 = action;
		switch (_p0.ctor) {
			case 'Tick':
				var nextProgress = model.progress + 1;
				var progress = (_elm_lang$core$Native_Utils.cmp(nextProgress, 100) > 0) ? 0 : nextProgress;
				var finishedLoading = _elm_lang$core$Native_Utils.cmp(nextProgress, 100) > 0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{progress: progress, running: model.running && (!finishedLoading)}),
					_1: (model.running && (!finishedLoading)) ? A2(_debois$elm_mdl$Material_Helpers$delay, 100, _debois$elm_mdl$Demo_Loading$Tick) : _elm_lang$core$Platform_Cmd$none
				};
			case 'Toggle':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{running: !model.running}),
					_1: _elm_lang$core$Native_Utils.eq(model.running, false) ? A2(_debois$elm_mdl$Material_Helpers$delay, 200, _debois$elm_mdl$Demo_Loading$Tick) : _elm_lang$core$Platform_Cmd$none
				};
			default:
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Loading$Mdl, _p0._0, model);
		}
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _debois$elm_mdl$Demo_Menus$model = {
	mdl: _debois$elm_mdl$Material$model,
	selected: _elm_lang$core$Maybe$Nothing,
	checked: _elm_lang$core$Set$fromList(
		{
			ctor: '::',
			_0: 0,
			_1: {
				ctor: '::',
				_0: 2,
				_1: {ctor: '[]'}
			}
		}),
	icon: _elm_lang$core$Maybe$Nothing,
	ripple: true
};
var _debois$elm_mdl$Demo_Menus$Model = F5(
	function (a, b, c, d, e) {
		return {mdl: a, selected: b, checked: c, icon: d, ripple: e};
	});
var _debois$elm_mdl$Demo_Menus$Select = function (a) {
	return {ctor: 'Select', _0: a};
};
var _debois$elm_mdl$Demo_Menus$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Menus$update = F2(
	function (action, model) {
		var _p0 = action;
		if (_p0.ctor === 'Mdl') {
			return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Menus$Mdl, _p0._0, model);
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Demo_Menus$view = function (model) {
	return A2(
		_debois$elm_mdl$Material_Options$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Options$div,
				{
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'relative'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$div,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Options$cs('mdc-menu-anchor'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A5(
								_debois$elm_mdl$Material_Button$render,
								_debois$elm_mdl$Demo_Menus$Mdl,
								{
									ctor: '::',
									_0: 0,
									_1: {ctor: '[]'}
								},
								model.mdl,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Button$raised,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Button$primary,
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Menu$attach,
												_debois$elm_mdl$Demo_Menus$Mdl,
												{
													ctor: '::',
													_0: 1,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Reveal'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Menu$render,
									_debois$elm_mdl$Demo_Menus$Mdl,
									{
										ctor: '::',
										_0: 1,
										_1: {ctor: '[]'}
									},
									model.mdl,
									{ctor: '[]'},
									A3(
										_debois$elm_mdl$Material_Menu$ul,
										_debois$elm_mdl$Material_List$ul,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Material_Menu$li,
												_debois$elm_mdl$Material_List$li,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$onClick(
														_debois$elm_mdl$Demo_Menus$Select(0)),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$tabindex(0)),
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Back'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A3(
													_debois$elm_mdl$Material_Menu$li,
													_debois$elm_mdl$Material_List$li,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$onClick(
															_debois$elm_mdl$Demo_Menus$Select(1)),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$attribute(
																_elm_lang$html$Html_Attributes$tabindex(0)),
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Forward'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A3(
														_debois$elm_mdl$Material_Menu$li,
														_debois$elm_mdl$Material_List$li,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$onClick(
																_debois$elm_mdl$Demo_Menus$Select(2)),
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Material_Options$attribute(
																	_elm_lang$html$Html_Attributes$tabindex(0)),
																_1: {ctor: '[]'}
															}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Reload'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A3(
															_debois$elm_mdl$Material_Menu$li,
															F2(
																function (options, nodes) {
																	return _debois$elm_mdl$Material_List$divider(options);
																}),
															{ctor: '[]'},
															{ctor: '[]'}),
														_1: {
															ctor: '::',
															_0: A3(
																_debois$elm_mdl$Material_Menu$li,
																_debois$elm_mdl$Material_List$li,
																{
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Options$onClick(
																		_debois$elm_mdl$Demo_Menus$Select(3)),
																	_1: {
																		ctor: '::',
																		_0: _debois$elm_mdl$Material_Options$attribute(
																			_elm_lang$html$Html_Attributes$tabindex(0)),
																		_1: {ctor: '[]'}
																	}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Save As...'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										})),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};

var _debois$elm_mdl$Demo_Ripple$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Ripple$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Ripple$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Ripple$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Ripple$Mdl, _p0._0, model);
	});
var _debois$elm_mdl$Demo_Ripple$view = function (model) {
	var example = function (options) {
		return A2(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('example'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-flow', 'column'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '24px'),
								_1: options
							}
						}
					}
				}
			});
	};
	var demoSurface = _debois$elm_mdl$Material_Options$many(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-surface'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'align-items', 'center'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'center'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '200px'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '100px'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '1rem'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'cursor', 'pointer'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'user-select', 'none'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, '-webkit-user-select', 'none'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				example,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h2,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Bounded'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: function () {
							var _p1 = A3(
								_debois$elm_mdl$Material_Ripple$bounded,
								_debois$elm_mdl$Demo_Ripple$Mdl,
								{
									ctor: '::',
									_0: 0,
									_1: {ctor: '[]'}
								},
								model.mdl);
							var rippleOptions = _p1._0;
							var rippleStyles = _p1._1;
							return A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: demoSurface,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Elevation$elevation(2),
										_1: {
											ctor: '::',
											_0: rippleOptions,
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Interact with me!'),
									_1: {
										ctor: '::',
										_0: rippleStyles,
										_1: {ctor: '[]'}
									}
								});
						}(),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					example,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h2,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Unbounded'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: function () {
								var _p2 = A3(
									_debois$elm_mdl$Material_Ripple$unbounded,
									_debois$elm_mdl$Demo_Ripple$Mdl,
									{
										ctor: '::',
										_0: 1,
										_1: {ctor: '[]'}
									},
									model.mdl);
								var rippleOptions = _p2._0;
								var rippleStyles = _p2._1;
								return A3(
									_debois$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '40px'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '40px'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '0'),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$css, 'border-radius', '50%'),
														_1: {
															ctor: '::',
															_0: demoSurface,
															_1: {
																ctor: '::',
																_0: rippleOptions,
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('favorite'),
										_1: {
											ctor: '::',
											_0: rippleStyles,
											_1: {ctor: '[]'}
										}
									});
							}(),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						example,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$h2,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Theme Styles'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: function () {
									var _p3 = A3(
										_debois$elm_mdl$Material_Ripple$bounded,
										_debois$elm_mdl$Demo_Ripple$Mdl,
										{
											ctor: '::',
											_0: 2,
											_1: {ctor: '[]'}
										},
										model.mdl);
									var rippleOptions = _p3._0;
									var rippleStyles = _p3._1;
									return A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: demoSurface,
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Elevation$elevation(2),
												_1: {
													ctor: '::',
													_0: rippleOptions,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Ripple$primary,
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Primary'),
											_1: {
												ctor: '::',
												_0: rippleStyles,
												_1: {ctor: '[]'}
											}
										});
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										var _p4 = A3(
											_debois$elm_mdl$Material_Ripple$bounded,
											_debois$elm_mdl$Demo_Ripple$Mdl,
											{
												ctor: '::',
												_0: 3,
												_1: {ctor: '[]'}
											},
											model.mdl);
										var rippleOptions = _p4._0;
										var rippleStyles = _p4._1;
										return A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: demoSurface,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Elevation$elevation(2),
													_1: {
														ctor: '::',
														_0: rippleOptions,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Ripple$accent,
															_1: {ctor: '[]'}
														}
													}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Accent'),
												_1: {
													ctor: '::',
													_0: rippleStyles,
													_1: {ctor: '[]'}
												}
											});
									}(),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};

var _debois$elm_mdl$Material_Typography$adjustMargin = _debois$elm_mdl$Material_Options$cs('mdc-typography--adjust-margin');
var _debois$elm_mdl$Material_Typography$subheading2 = _debois$elm_mdl$Material_Options$cs('mdc-typography--subheading');
var _debois$elm_mdl$Material_Typography$subheading1 = _debois$elm_mdl$Material_Options$cs('mdc-typography--subheading');
var _debois$elm_mdl$Material_Typography$headline = _debois$elm_mdl$Material_Options$cs('mdc-typography--headline');
var _debois$elm_mdl$Material_Typography$body2 = _debois$elm_mdl$Material_Options$cs('mdc-typography--body2');
var _debois$elm_mdl$Material_Typography$caption = _debois$elm_mdl$Material_Options$cs('mdc-typography--caption');
var _debois$elm_mdl$Material_Typography$title = _debois$elm_mdl$Material_Options$cs('mdc-typography--title');
var _debois$elm_mdl$Material_Typography$display4 = _debois$elm_mdl$Material_Options$cs('mdc-typography--display4');
var _debois$elm_mdl$Material_Typography$display3 = _debois$elm_mdl$Material_Options$cs('mdc-typography--display3');
var _debois$elm_mdl$Material_Typography$display2 = _debois$elm_mdl$Material_Options$cs('mdc-typography--display2');
var _debois$elm_mdl$Material_Typography$display1 = _debois$elm_mdl$Material_Options$cs('mdc-typography--display1');
var _debois$elm_mdl$Material_Typography$typography = _debois$elm_mdl$Material_Options$cs('mdc-typography');

var _debois$elm_mdl$Demo_Selects$model = {mdl: _debois$elm_mdl$Material$model, selects: _elm_lang$core$Dict$empty, darkTheme: false, rtl: false, disabled: false};
var _debois$elm_mdl$Demo_Selects$Model = F5(
	function (a, b, c, d, e) {
		return {mdl: a, selects: b, darkTheme: c, rtl: d, disabled: e};
	});
var _debois$elm_mdl$Demo_Selects$ToggleDisabled = {ctor: 'ToggleDisabled'};
var _debois$elm_mdl$Demo_Selects$ToggleRtl = {ctor: 'ToggleRtl'};
var _debois$elm_mdl$Demo_Selects$ToggleDarkTheme = {ctor: 'ToggleDarkTheme'};
var _debois$elm_mdl$Demo_Selects$Select = F3(
	function (a, b, c) {
		return {ctor: 'Select', _0: a, _1: b, _2: c};
	});
var _debois$elm_mdl$Demo_Selects$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Selects$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Mdl':
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Selects$Mdl, _p0._0, model);
			case 'Select':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							selects: A3(
								_elm_lang$core$Dict$insert,
								_p0._0,
								{ctor: '_Tuple2', _0: _p0._1, _1: _p0._2},
								model.selects)
						}),
					{ctor: '[]'});
			case 'ToggleDarkTheme':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{darkTheme: !model.darkTheme}),
					{ctor: '[]'});
			case 'ToggleRtl':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{rtl: !model.rtl}),
					{ctor: '[]'});
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{disabled: !model.disabled}),
					{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Demo_Selects$view = function (model) {
	var _p1 = A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '_Tuple2', _0: 0, _1: 'Pick a food group'},
		A2(
			_elm_lang$core$Dict$get,
			{
				ctor: '::',
				_0: 0,
				_1: {ctor: '[]'}
			},
			model.selects));
	var selectedIndex = _p1._0;
	var selectedText = _p1._1;
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('example'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$h2,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Typography$title,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Fully-Featured Component'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$section,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Options$cs('demo-wrapper'),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$many(
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Theme$dark,
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#303030'),
											_1: {ctor: '[]'}
										}
									})),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										A2(_elm_lang$html$Html_Attributes$attribute, 'dir', 'rtl'))),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: A5(
							_debois$elm_mdl$Material_Select$render,
							_debois$elm_mdl$Demo_Selects$Mdl,
							{
								ctor: '::',
								_0: 0,
								_1: {ctor: '[]'}
							},
							model.mdl,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Select$selectedText(selectedText),
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Select$index(selectedIndex),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$when, model.disabled, _debois$elm_mdl$Material_Select$disabled),
										_1: {ctor: '[]'}
									}
								}
							},
							A2(
								_elm_lang$core$List$indexedMap,
								F2(
									function (index, label) {
										return A3(
											_debois$elm_mdl$Material_Menu$li,
											_debois$elm_mdl$Material_List$li,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Menu$onSelect(
													_elm_lang$core$Json_Decode$succeed(
														A3(
															_debois$elm_mdl$Demo_Selects$Select,
															{
																ctor: '::',
																_0: 0,
																_1: {ctor: '[]'}
															},
															index,
															label))),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(label),
												_1: {ctor: '[]'}
											});
									}),
								{
									ctor: '::',
									_0: 'Pick a food group',
									_1: {
										ctor: '::',
										_0: 'Bread, Cereal, Rice, and Pasta',
										_1: {
											ctor: '::',
											_0: 'Vegetables',
											_1: {
												ctor: '::',
												_0: 'Fruit',
												_1: {
													ctor: '::',
													_0: 'Milk, Yogurt, and Cheese',
													_1: {
														ctor: '::',
														_0: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts',
														_1: {
															ctor: '::',
															_0: 'Fats, Oils, and Sweets',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								})),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Currently selected:'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(
												_elm_lang$core$Basics_ops['++'],
												selectedText,
												A2(
													_elm_lang$core$Basics_ops['++'],
													' at index ',
													_elm_lang$core$Basics$toString(selectedIndex)))),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Selects$Mdl,
									{
										ctor: '::',
										_0: 1,
										_1: {ctor: '[]'}
									},
									model.mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$onClick(_debois$elm_mdl$Demo_Selects$ToggleDarkTheme),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$when, model.darkTheme, _debois$elm_mdl$Material_Checkbox$checked),
											_1: {ctor: '[]'}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Dark theme'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Selects$Mdl,
										{
											ctor: '::',
											_0: 2,
											_1: {ctor: '[]'}
										},
										model.mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(_debois$elm_mdl$Demo_Selects$ToggleRtl),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.rtl, _debois$elm_mdl$Material_Checkbox$checked),
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Selects$Mdl,
											{
												ctor: '::',
												_0: 3,
												_1: {ctor: '[]'}
											},
											model.mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$onClick(_debois$elm_mdl$Demo_Selects$ToggleDisabled),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$when, model.disabled, _debois$elm_mdl$Material_Checkbox$checked),
													_1: {ctor: '[]'}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Disabled'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};

var _debois$elm_mdl$Demo_Slider$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _debois$elm_mdl$Demo_Slider$getDef = F3(
	function (key, def, dict) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			def,
			A2(_elm_lang$core$Dict$get, key, dict));
	});
var _debois$elm_mdl$Demo_Slider$get = F2(
	function (key, dict) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, key, dict));
	});
var _debois$elm_mdl$Demo_Slider$model = {mdl: _debois$elm_mdl$Material$model, values: _elm_lang$core$Dict$empty};
var _debois$elm_mdl$Demo_Slider$Model = F2(
	function (a, b) {
		return {mdl: a, values: b};
	});
var _debois$elm_mdl$Demo_Slider$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Slider$update = F2(
	function (action, model) {
		var _p0 = action;
		if (_p0.ctor === 'Slider') {
			var values = A3(_elm_lang$core$Dict$insert, _p0._0, _p0._1, model.values);
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{values: values}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		} else {
			return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Slider$Mdl, _p0._0, model);
		}
	});
var _debois$elm_mdl$Demo_Slider$Slider = F2(
	function (a, b) {
		return {ctor: 'Slider', _0: a, _1: b};
	});

var _debois$elm_mdl$Demo_Snackbar$defaultModel = {mdl: _debois$elm_mdl$Material$model, multiline: false, actionOnBottom: false, dismissOnAction: true, darkTheme: false, messageText: 'Message deleted', actionText: 'Undo'};
var _debois$elm_mdl$Demo_Snackbar$Model = F7(
	function (a, b, c, d, e, f, g) {
		return {mdl: a, multiline: b, actionOnBottom: c, dismissOnAction: d, darkTheme: e, messageText: f, actionText: g};
	});
var _debois$elm_mdl$Demo_Snackbar$Dismiss = {ctor: 'Dismiss'};
var _debois$elm_mdl$Demo_Snackbar$Show = function (a) {
	return {ctor: 'Show', _0: a};
};
var _debois$elm_mdl$Demo_Snackbar$SetActionText = function (a) {
	return {ctor: 'SetActionText', _0: a};
};
var _debois$elm_mdl$Demo_Snackbar$SetMessageText = function (a) {
	return {ctor: 'SetMessageText', _0: a};
};
var _debois$elm_mdl$Demo_Snackbar$ToggleDarkTheme = {ctor: 'ToggleDarkTheme'};
var _debois$elm_mdl$Demo_Snackbar$ToggleDismissOnAction = {ctor: 'ToggleDismissOnAction'};
var _debois$elm_mdl$Demo_Snackbar$ToggleActionOnBottom = {ctor: 'ToggleActionOnBottom'};
var _debois$elm_mdl$Demo_Snackbar$ToggleMultiline = {ctor: 'ToggleMultiline'};
var _debois$elm_mdl$Demo_Snackbar$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Snackbar$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Mdl':
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Snackbar$Mdl, _p0._0, model);
			case 'ToggleMultiline':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{multiline: !model.multiline}),
					{ctor: '[]'});
			case 'ToggleActionOnBottom':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{actionOnBottom: !model.actionOnBottom}),
					{ctor: '[]'});
			case 'ToggleDismissOnAction':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{dismissOnAction: !model.dismissOnAction}),
					{ctor: '[]'});
			case 'ToggleDarkTheme':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{darkTheme: !model.darkTheme}),
					{ctor: '[]'});
			case 'SetMessageText':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{messageText: _p0._0}),
					{ctor: '[]'});
			case 'SetActionText':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{actionText: _p0._0}),
					{ctor: '[]'});
			case 'Show':
				var contents = function () {
					if (model.multiline) {
						var snack = A2(_debois$elm_mdl$Material_Snackbar$snack, model.messageText, model.actionText);
						return _elm_lang$core$Native_Utils.update(
							snack,
							{dismissOnAction: model.dismissOnAction});
					} else {
						var toast = _debois$elm_mdl$Material_Snackbar$toast(model.messageText);
						return _elm_lang$core$Native_Utils.update(
							toast,
							{
								dismissOnAction: model.dismissOnAction,
								action: _elm_lang$core$Maybe$Just('Hide')
							});
					}
				}();
				return A4(_debois$elm_mdl$Material_Snackbar$add, _debois$elm_mdl$Demo_Snackbar$Mdl, _p0._0, contents, model);
			default:
				var _p1 = A2(_elm_lang$core$Debug$log, 'msg', _debois$elm_mdl$Demo_Snackbar$Dismiss);
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'});
		}
	});
var _debois$elm_mdl$Demo_Snackbar$view = function (model) {
	var example = function (options) {
		return A2(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'block'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '24px'),
						_1: options
					}
				}
			});
	};
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: function (_p2) {
				return A2(
					_debois$elm_mdl$Material_Options$when,
					model.darkTheme,
					_debois$elm_mdl$Material_Options$many(_p2));
			}(
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Theme$dark,
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#333'),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				example,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h2,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$title,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Basic Example'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('mdc-form-field'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Snackbar$Mdl,
									{
										ctor: '::',
										_0: 0,
										_1: {ctor: '[]'}
									},
									model.mdl,
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$on,
											'change',
											_elm_lang$core$Json_Decode$succeed(_debois$elm_mdl$Demo_Snackbar$ToggleMultiline)),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$when, model.multiline, _debois$elm_mdl$Material_Checkbox$checked),
											_1: {ctor: '[]'}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Multiline'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$br,
								{ctor: '[]'},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$cs('mdc-form-field'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Snackbar$Mdl,
											{
												ctor: '::',
												_0: 1,
												_1: {ctor: '[]'}
											},
											model.mdl,
											{
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$on,
													'change',
													_elm_lang$core$Json_Decode$succeed(_debois$elm_mdl$Demo_Snackbar$ToggleActionOnBottom)),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$when, model.actionOnBottom, _debois$elm_mdl$Material_Checkbox$checked),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$when, !model.multiline, _debois$elm_mdl$Material_Checkbox$disabled),
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Action on Bottom'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$br,
										{ctor: '[]'},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$cs('mdc-form-field'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Checkbox$render,
													_debois$elm_mdl$Demo_Snackbar$Mdl,
													{
														ctor: '::',
														_0: 2,
														_1: {ctor: '[]'}
													},
													model.mdl,
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$on,
															'change',
															_elm_lang$core$Json_Decode$succeed(_debois$elm_mdl$Demo_Snackbar$ToggleDismissOnAction)),
														_1: {
															ctor: '::',
															_0: A2(_debois$elm_mdl$Material_Options$when, model.dismissOnAction, _debois$elm_mdl$Material_Checkbox$checked),
															_1: {ctor: '[]'}
														}
													},
													{ctor: '[]'}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$label,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Dismiss On Action'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$br,
												{ctor: '[]'},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Button$render,
													_debois$elm_mdl$Demo_Snackbar$Mdl,
													{
														ctor: '::',
														_0: 3,
														_1: {ctor: '[]'}
													},
													model.mdl,
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$on,
															'click',
															_elm_lang$core$Json_Decode$succeed(_debois$elm_mdl$Demo_Snackbar$ToggleDarkTheme)),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Button$primary,
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Material_Button$raised,
																_1: {ctor: '[]'}
															}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Toggle Dark Theme'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$br,
														{ctor: '[]'},
														{ctor: '[]'}),
													_1: {
														ctor: '::',
														_0: A5(
															_debois$elm_mdl$Material_Textfield$render,
															_debois$elm_mdl$Demo_Snackbar$Mdl,
															{
																ctor: '::',
																_0: 4,
																_1: {ctor: '[]'}
															},
															model.mdl,
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_Textfield$label('Message Text'),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_debois$elm_mdl$Material_Options$on,
																		'input',
																		A2(_elm_lang$core$Json_Decode$map, _debois$elm_mdl$Demo_Snackbar$SetMessageText, _elm_lang$html$Html_Events$targetValue)),
																	_1: {ctor: '[]'}
																}
															},
															{ctor: '[]'}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$br,
																{ctor: '[]'},
																{ctor: '[]'}),
															_1: {
																ctor: '::',
																_0: A5(
																	_debois$elm_mdl$Material_Textfield$render,
																	_debois$elm_mdl$Demo_Snackbar$Mdl,
																	{
																		ctor: '::',
																		_0: 5,
																		_1: {ctor: '[]'}
																	},
																	model.mdl,
																	{
																		ctor: '::',
																		_0: _debois$elm_mdl$Material_Textfield$label('Action Text'),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_debois$elm_mdl$Material_Options$on,
																				'input',
																				A2(_elm_lang$core$Json_Decode$map, _debois$elm_mdl$Demo_Snackbar$SetActionText, _elm_lang$html$Html_Events$targetValue)),
																			_1: {ctor: '[]'}
																		}
																	},
																	{ctor: '[]'}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$br,
																		{ctor: '[]'},
																		{ctor: '[]'}),
																	_1: {
																		ctor: '::',
																		_0: A5(
																			_debois$elm_mdl$Material_Button$render,
																			_debois$elm_mdl$Demo_Snackbar$Mdl,
																			{
																				ctor: '::',
																				_0: 6,
																				_1: {ctor: '[]'}
																			},
																			model.mdl,
																			{
																				ctor: '::',
																				_0: _debois$elm_mdl$Material_Button$raised,
																				_1: {
																					ctor: '::',
																					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '14px'),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_debois$elm_mdl$Material_Options$on,
																							'click',
																							_elm_lang$core$Json_Decode$succeed(
																								_debois$elm_mdl$Demo_Snackbar$Show(
																									{
																										ctor: '::',
																										_0: 10,
																										_1: {ctor: '[]'}
																									}))),
																						_1: {ctor: '[]'}
																					}
																				}
																			},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('Show'),
																				_1: {ctor: '[]'}
																			}),
																		_1: {
																			ctor: '::',
																			_0: A5(
																				_debois$elm_mdl$Material_Button$render,
																				_debois$elm_mdl$Demo_Snackbar$Mdl,
																				{
																					ctor: '::',
																					_0: 7,
																					_1: {ctor: '[]'}
																				},
																				model.mdl,
																				{
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_Button$raised,
																					_1: {
																						ctor: '::',
																						_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '14px'),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_debois$elm_mdl$Material_Options$on,
																								'click',
																								_elm_lang$core$Json_Decode$succeed(
																									_debois$elm_mdl$Demo_Snackbar$Show(
																										{
																											ctor: '::',
																											_0: 11,
																											_1: {ctor: '[]'}
																										}))),
																							_1: {ctor: '[]'}
																						}
																					}
																				},
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html$text('Show Rtl'),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: A5(
																					_debois$elm_mdl$Material_Button$render,
																					_debois$elm_mdl$Demo_Snackbar$Mdl,
																					{
																						ctor: '::',
																						_0: 8,
																						_1: {ctor: '[]'}
																					},
																					model.mdl,
																					{
																						ctor: '::',
																						_0: _debois$elm_mdl$Material_Button$raised,
																						_1: {
																							ctor: '::',
																							_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '14px'),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_debois$elm_mdl$Material_Options$on,
																									'click',
																									_elm_lang$core$Json_Decode$succeed(
																										_debois$elm_mdl$Demo_Snackbar$Show(
																											{
																												ctor: '::',
																												_0: 12,
																												_1: {ctor: '[]'}
																											}))),
																								_1: {ctor: '[]'}
																							}
																						}
																					},
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html$text('Show Start Aligned'),
																						_1: {ctor: '[]'}
																					}),
																				_1: {
																					ctor: '::',
																					_0: A5(
																						_debois$elm_mdl$Material_Button$render,
																						_debois$elm_mdl$Demo_Snackbar$Mdl,
																						{
																							ctor: '::',
																							_0: 9,
																							_1: {ctor: '[]'}
																						},
																						model.mdl,
																						{
																							ctor: '::',
																							_0: _debois$elm_mdl$Material_Button$raised,
																							_1: {
																								ctor: '::',
																								_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '14px'),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_debois$elm_mdl$Material_Options$on,
																										'click',
																										_elm_lang$core$Json_Decode$succeed(
																											_debois$elm_mdl$Demo_Snackbar$Show(
																												{
																													ctor: '::',
																													_0: 13,
																													_1: {ctor: '[]'}
																												}))),
																									_1: {ctor: '[]'}
																								}
																							}
																						},
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html$text('Show Start Aligned (Rtl)'),
																							_1: {ctor: '[]'}
																						}),
																					_1: {
																						ctor: '::',
																						_0: A5(
																							_debois$elm_mdl$Material_Snackbar$render,
																							_debois$elm_mdl$Demo_Snackbar$Mdl,
																							{
																								ctor: '::',
																								_0: 10,
																								_1: {ctor: '[]'}
																							},
																							model.mdl,
																							{
																								ctor: '::',
																								_0: _debois$elm_mdl$Material_Snackbar$onDismiss(_debois$elm_mdl$Demo_Snackbar$Dismiss),
																								_1: {ctor: '[]'}
																							},
																							{ctor: '[]'}),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_elm_lang$html$Html$div,
																								{
																									ctor: '::',
																									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'dir', 'rtl'),
																									_1: {ctor: '[]'}
																								},
																								{
																									ctor: '::',
																									_0: A5(
																										_debois$elm_mdl$Material_Snackbar$render,
																										_debois$elm_mdl$Demo_Snackbar$Mdl,
																										{
																											ctor: '::',
																											_0: 11,
																											_1: {ctor: '[]'}
																										},
																										model.mdl,
																										{
																											ctor: '::',
																											_0: _debois$elm_mdl$Material_Snackbar$onDismiss(_debois$elm_mdl$Demo_Snackbar$Dismiss),
																											_1: {ctor: '[]'}
																										},
																										{ctor: '[]'}),
																									_1: {ctor: '[]'}
																								}),
																							_1: {
																								ctor: '::',
																								_0: A5(
																									_debois$elm_mdl$Material_Snackbar$render,
																									_debois$elm_mdl$Demo_Snackbar$Mdl,
																									{
																										ctor: '::',
																										_0: 12,
																										_1: {ctor: '[]'}
																									},
																									model.mdl,
																									{
																										ctor: '::',
																										_0: _debois$elm_mdl$Material_Snackbar$onDismiss(_debois$elm_mdl$Demo_Snackbar$Dismiss),
																										_1: {
																											ctor: '::',
																											_0: _debois$elm_mdl$Material_Snackbar$alignStart,
																											_1: {ctor: '[]'}
																										}
																									},
																									{ctor: '[]'}),
																								_1: {
																									ctor: '::',
																									_0: A2(
																										_elm_lang$html$Html$div,
																										{
																											ctor: '::',
																											_0: A2(_elm_lang$html$Html_Attributes$attribute, 'dir', 'rtl'),
																											_1: {ctor: '[]'}
																										},
																										{
																											ctor: '::',
																											_0: A5(
																												_debois$elm_mdl$Material_Snackbar$render,
																												_debois$elm_mdl$Demo_Snackbar$Mdl,
																												{
																													ctor: '::',
																													_0: 13,
																													_1: {ctor: '[]'}
																												},
																												model.mdl,
																												{
																													ctor: '::',
																													_0: _debois$elm_mdl$Material_Snackbar$onDismiss(_debois$elm_mdl$Demo_Snackbar$Dismiss),
																													_1: {
																														ctor: '::',
																														_0: _debois$elm_mdl$Material_Snackbar$alignStart,
																														_1: {ctor: '[]'}
																													}
																												},
																												{ctor: '[]'}),
																											_1: {ctor: '[]'}
																										}),
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		});
};

var _debois$elm_mdl$Material_Toolbar$fixedAdjust = _debois$elm_mdl$Material_Options$cs('mdc-toolbar-fixed-adjust');
var _debois$elm_mdl$Material_Toolbar$alignEnd = _debois$elm_mdl$Material_Options$cs('mdc-toolbar__section--align-end');
var _debois$elm_mdl$Material_Toolbar$alignStart = _debois$elm_mdl$Material_Options$cs('mdc-toolbar__section--align-start');
var _debois$elm_mdl$Material_Toolbar$section = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar__section'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Toolbar$row = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar__row'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Toolbar$title = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar__title'),
			_1: options
		});
};
var _debois$elm_mdl$Material_Toolbar$menu = _debois$elm_mdl$Material_Options$cs('mdc-toolbar__icon--menu');
var _debois$elm_mdl$Material_Toolbar$icon_ = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar__icon'),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
				_1: options
			}
		});
};
var _debois$elm_mdl$Material_Toolbar$icon = F2(
	function (options, icon) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar__icon'),
				_1: {
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('material-icons'),
					_1: options
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(icon),
				_1: {ctor: '[]'}
			});
	});
var _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized = _debois$elm_mdl$Material_Options$cs('mdc-toolbar--flexible-space-maximized');
var _debois$elm_mdl$Material_Toolbar$flexibleDefaultBehavior = _debois$elm_mdl$Material_Options$cs('mdc-toolbar--flexible-default-behavior');
var _debois$elm_mdl$Material_Toolbar$flexible = _debois$elm_mdl$Material_Options$cs('mdc-toolbar--flexible');
var _debois$elm_mdl$Material_Toolbar$waterfall = _debois$elm_mdl$Material_Options$cs('mdc-toolbar--waterfall');
var _debois$elm_mdl$Material_Toolbar$fixed = _debois$elm_mdl$Material_Options$cs('mdc-toolbar--fixed');
var _debois$elm_mdl$Material_Toolbar$view = function (options) {
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$header,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar'),
			_1: options
		});
};

var _debois$elm_mdl$Demo_Startpage$view = function (selectTab) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$nav,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixedAdjust,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_List$ul,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_List$twoLine,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('catalog-list'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'padding-left', '26px'),
									_1: {ctor: '[]'}
								}
							}
						},
						A2(
							_elm_lang$core$List$map,
							function (_p0) {
								var _p1 = _p0;
								var _p2 = _p1.wip;
								return A2(
									_debois$elm_mdl$Material_List$li,
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$when,
											!_p2,
											_debois$elm_mdl$Material_Options$onClick(
												selectTab(_p1.index))),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$when,
												!_p2,
												A2(_debois$elm_mdl$Material_Options$css, 'cursor', 'pointer')),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$when,
													_p2,
													A2(_debois$elm_mdl$Material_Options$css, 'opacity', '0.5')),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '72px'),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_List$startDetail,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$cs('catalog-list-icon'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$img,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$src(
															A2(_elm_lang$core$Basics_ops['++'], 'images/', _p1.icon)),
														_1: {ctor: '[]'}
													},
													{ctor: '[]'}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_List$text,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text(_p1.title),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_List$secondary,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text(_p1.subtitle),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}
									});
							},
							{
								ctor: '::',
								_0: {index: 0, icon: 'ic_button_24px.svg', wip: false, title: 'Button', subtitle: 'Raised and flat buttons'},
								_1: {
									ctor: '::',
									_0: {index: 1, icon: 'ic_card_24px.svg', wip: false, title: 'Card', subtitle: 'Various card layout styles'},
									_1: {
										ctor: '::',
										_0: {index: 2, icon: 'ic_selection_control_24px.svg', wip: false, title: 'Checkbox', subtitle: 'Multi-selection controls'},
										_1: {
											ctor: '::',
											_0: {index: 3, icon: 'ic_dialog_24px.svg', wip: false, title: 'Dialog', subtitle: 'Secondary text'},
											_1: {
												ctor: '::',
												_0: {index: -1, icon: 'ic_side_navigation_24px.svg', wip: true, title: 'Drawer', subtitle: 'Temporary'},
												_1: {
													ctor: '::',
													_0: {index: -1, icon: 'ic_side_navigation_24px.svg', wip: true, title: 'Drawer', subtitle: 'Persistent'},
													_1: {
														ctor: '::',
														_0: {index: -1, icon: 'ic_side_navigation_24px.svg', wip: true, title: 'Drawer', subtitle: 'Permanent drawer above toolbar'},
														_1: {
															ctor: '::',
															_0: {index: -1, icon: 'ic_side_navigation_24px.svg', wip: true, title: 'Drawer', subtitle: 'Permanent drawer below toolbar'},
															_1: {
																ctor: '::',
																_0: {index: 4, icon: 'ic_shadow_24px.svg', wip: false, title: 'Elevation', subtitle: 'Shadow for different elevations'},
																_1: {
																	ctor: '::',
																	_0: {index: 5, icon: 'ic_button_24px.svg', wip: false, title: 'Floating action button', subtitle: 'The primary action in an application'},
																	_1: {
																		ctor: '::',
																		_0: {index: 6, icon: 'ic_card_24px.svg', wip: false, title: 'Grid list', subtitle: '2D grid layouts'},
																		_1: {
																			ctor: '::',
																			_0: {index: -1, icon: 'ic_component_24px.svg', wip: true, title: 'Icon toggle', subtitle: 'Toggling icon states'},
																			_1: {
																				ctor: '::',
																				_0: {index: 7, icon: 'ic_card_24px.svg', wip: false, title: 'Layout grid', subtitle: 'Grid and gutter support'},
																				_1: {
																					ctor: '::',
																					_0: {index: -1, icon: 'ic_progress_activity.svg', wip: true, title: 'Linear progress', subtitle: 'Fills from 0% to 100%, represented by bars'},
																					_1: {
																						ctor: '::',
																						_0: {index: 8, icon: 'ic_list_24px.svg', wip: false, title: 'List', subtitle: 'Item layouts in lists'},
																						_1: {
																							ctor: '::',
																							_0: {index: -1, icon: 'ic_radio_button_24px.svg', wip: true, title: 'Radio buttons', subtitle: 'Single selection controls'},
																							_1: {
																								ctor: '::',
																								_0: {index: 9, icon: 'ic_ripple_24px.svg', wip: false, title: 'Ripple', subtitle: 'Touch ripple'},
																								_1: {
																									ctor: '::',
																									_0: {index: 10, icon: 'ic_menu_24px.svg', wip: false, title: 'Select', subtitle: 'Popover selection menus'},
																									_1: {
																										ctor: '::',
																										_0: {index: 11, icon: 'ic_menu_24px.svg', wip: false, title: 'Simple Menu', subtitle: 'Pop over menus'},
																										_1: {
																											ctor: '::',
																											_0: {index: -1, icon: 'slider.svg', wip: true, title: 'Slider', subtitle: 'Range Controls'},
																											_1: {
																												ctor: '::',
																												_0: {index: 12, icon: 'ic_toast_24px.svg', wip: false, title: 'Snackbar', subtitle: 'Transient messages'},
																												_1: {
																													ctor: '::',
																													_0: {index: -1, icon: 'ic_switch_24px.svg', wip: true, title: 'Switch', subtitle: 'On off switches'},
																													_1: {
																														ctor: '::',
																														_0: {index: 13, icon: 'ic_tabs_24px.svg', wip: false, title: 'Tabs', subtitle: 'Tabs with support for icon and text labels'},
																														_1: {
																															ctor: '::',
																															_0: {index: 14, icon: 'ic_text_field_24px.svg', wip: false, title: 'Text field', subtitle: 'Single and multiline text fields'},
																															_1: {
																																ctor: '::',
																																_0: {index: 15, icon: 'ic_theme_24px.svg', wip: false, title: 'Theme', subtitle: 'Using primary and accent colors'},
																																_1: {
																																	ctor: '::',
																																	_0: {index: 16, icon: 'ic_toolbar_24px.svg', wip: false, title: 'Toolbar', subtitle: 'Header and footers'},
																																	_1: {
																																		ctor: '::',
																																		_0: {index: 17, icon: 'ic_typography_24px.svg', wip: false, title: 'Typography', subtitle: 'Type hierarchy'},
																																		_1: {ctor: '[]'}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							})),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};

var _debois$elm_mdl$Demo_Tabs$model = {mdl: _debois$elm_mdl$Material$model, examples: _elm_lang$core$Dict$empty};
var _debois$elm_mdl$Demo_Tabs$defaultExample = {tab: 0};
var _debois$elm_mdl$Demo_Tabs$Model = F2(
	function (a, b) {
		return {mdl: a, examples: b};
	});
var _debois$elm_mdl$Demo_Tabs$Example = function (a) {
	return {tab: a};
};
var _debois$elm_mdl$Demo_Tabs$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Tabs$update = F2(
	function (msg, model) {
		var _p0 = msg;
		if (_p0.ctor === 'SelectTab') {
			var _p1 = _p0._0;
			var example = function (example) {
				return _elm_lang$core$Native_Utils.update(
					example,
					{tab: _p0._1});
			}(
				A2(
					_elm_lang$core$Maybe$withDefault,
					_debois$elm_mdl$Demo_Tabs$defaultExample,
					A2(_elm_lang$core$Dict$get, _p1, model.examples)));
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						examples: A3(_elm_lang$core$Dict$insert, _p1, example, model.examples)
					}),
				{ctor: '[]'});
		} else {
			return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Tabs$Mdl, _p0._0, model);
		}
	});
var _debois$elm_mdl$Demo_Tabs$example0 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Basic Tab Bar'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Item One'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Item Two'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Item Three'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example1 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Tab Bar with Scroller'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Tabs$scroller,
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Item One'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Item Two'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Item Three'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Tabs$tab,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Item Four'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Tabs$tab,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Item Five'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Tabs$tab,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Item Six'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Tabs$tab,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Item Seven'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tabs$tab,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Item Eight'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tabs$tab,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Item Nine'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example2 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Icon Tab Labels'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$icon,
										{ctor: '[]'},
										'phone'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Tabs$icon,
											{ctor: '[]'},
											'favorite'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Tabs$icon,
												{ctor: '[]'},
												'person_pin'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example3 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Icon Tab Labels'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Tabs$withIconAndText,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$icon,
										{ctor: '[]'},
										'phone'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Tabs$iconLabel,
											{ctor: '[]'},
											'Recents'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Tabs$icon,
											{ctor: '[]'},
											'favorite'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Tabs$iconLabel,
												{ctor: '[]'},
												'Favorites'),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Tabs$icon,
												{ctor: '[]'},
												'person_pin'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Tabs$iconLabel,
													{ctor: '[]'},
													'Nearby'),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example4 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Primary Color Indicator'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Tabs$indicatorPrimary,
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Item One'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Item Two'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Item Three'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example5 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Accent Color Indicator'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Tabs$indicatorAccent,
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Tabs$tab,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Item One'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Tabs$tab,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Item Two'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Item Three'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example6 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Within mdc-toolbar'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$view,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$row,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$section,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Toolbar$alignStart,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$title,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Title'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$section,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Tabs$render,
													_debois$elm_mdl$Demo_Tabs$Mdl,
													{
														ctor: '::',
														_0: index,
														_1: {ctor: '[]'}
													},
													mdl,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tabs$indicator,
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tabs$tab,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Item One'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tabs$tab,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Item Two'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_Tabs$tab,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Item Three'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example7 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Within mdc-toolbar'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$view,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$row,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$section,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Toolbar$alignStart,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$title,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Title'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$section,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'position', 'absolute'),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$css, 'right', '0'),
														_1: {
															ctor: '::',
															_0: A2(_debois$elm_mdl$Material_Options$css, 'bottom', '-16px'),
															_1: {ctor: '[]'}
														}
													}
												}
											},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Tabs$render,
													_debois$elm_mdl$Demo_Tabs$Mdl,
													{
														ctor: '::',
														_0: index,
														_1: {ctor: '[]'}
													},
													mdl,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tabs$tab,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Item One'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tabs$tab,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Item Two'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_Tabs$tab,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Item Three'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example8 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Within mdc-toolbar + primary indicator'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$view,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Theme$accentBg,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$row,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$section,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Toolbar$alignStart,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$title,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Title'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$section,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Tabs$render,
													_debois$elm_mdl$Demo_Tabs$Mdl,
													{
														ctor: '::',
														_0: index,
														_1: {ctor: '[]'}
													},
													mdl,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tabs$indicator,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Tabs$indicatorPrimary,
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tabs$tab,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Item One'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tabs$tab,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Item Two'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_Tabs$tab,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Item Three'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$example9 = F3(
	function (mdl, index, model) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Within mdc-toolbar + accent indicator'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$view,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Theme$primaryBg,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$row,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$section,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Toolbar$alignStart,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$title,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Title'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$section,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Tabs$render,
													_debois$elm_mdl$Demo_Tabs$Mdl,
													{
														ctor: '::',
														_0: index,
														_1: {ctor: '[]'}
													},
													mdl,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tabs$indicator,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Tabs$indicatorAccent,
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tabs$tab,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Item One'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tabs$tab,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Item Two'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_debois$elm_mdl$Material_Tabs$tab,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Item Three'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$SelectTab = F2(
	function (a, b) {
		return {ctor: 'SelectTab', _0: a, _1: b};
	});
var _debois$elm_mdl$Demo_Tabs$example10 = F3(
	function (mdl, index, model) {
		var items = {
			ctor: '::',
			_0: 'Item One',
			_1: {
				ctor: '::',
				_0: 'Item Two',
				_1: {
					ctor: '::',
					_0: 'Item Three',
					_1: {ctor: '[]'}
				}
			}
		};
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$legend,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$title,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Within Toolbar, Dynamic Content Control'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A5(
						_debois$elm_mdl$Material_Tabs$render,
						_debois$elm_mdl$Demo_Tabs$Mdl,
						{
							ctor: '::',
							_0: index,
							_1: {ctor: '[]'}
						},
						mdl,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Tabs$indicator,
							_1: {ctor: '[]'}
						},
						A2(
							_elm_lang$core$List$indexedMap,
							F2(
								function (i, label) {
									return A2(
										_debois$elm_mdl$Material_Tabs$tab,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(
												A2(_debois$elm_mdl$Demo_Tabs$SelectTab, index, i)),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(label),
											_1: {ctor: '[]'}
										});
								}),
							items)),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$section,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Options$cs('panels'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '8px'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'border', '1px solid #ccc'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'border-radius', '4px'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '8px'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							},
							A2(
								_elm_lang$core$List$indexedMap,
								F2(
									function (i, str) {
										var isActive = _elm_lang$core$Native_Utils.eq(model.tab, i);
										return A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$p,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$cs('panel'),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$when,
														isActive,
														_debois$elm_mdl$Material_Options$cs('active')),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$when,
															!isActive,
															A2(_debois$elm_mdl$Material_Options$css, 'display', 'none')),
														_1: {ctor: '[]'}
													}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(str),
												_1: {ctor: '[]'}
											});
									}),
								{
									ctor: '::',
									_0: 'Item One',
									_1: {
										ctor: '::',
										_0: 'Item Two',
										_1: {
											ctor: '::',
											_0: 'Item Three',
											_1: {ctor: '[]'}
										}
									}
								})),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Options$cs('dots'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
										_1: {
											ctor: '::',
											_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'flex-start'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$css, 'margin-top', '4px'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'padding-bottom', '16px'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								A2(
									_elm_lang$core$List$map,
									function (i) {
										var isActive = _elm_lang$core$Native_Utils.eq(model.tab, i);
										return A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$cs('dot'),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '0 4px'),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$css, 'border-radius', '50%'),
														_1: {
															ctor: '::',
															_0: A2(_debois$elm_mdl$Material_Options$css, 'border', '1px solid #64DD17'),
															_1: {
																ctor: '::',
																_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '20px'),
																_1: {
																	ctor: '::',
																	_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '20px'),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_debois$elm_mdl$Material_Options$when,
																			isActive,
																			_debois$elm_mdl$Material_Options$many(
																				{
																					ctor: '::',
																					_0: _debois$elm_mdl$Material_Options$cs('active'),
																					_1: {
																						ctor: '::',
																						_0: A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#64DD17'),
																						_1: {
																							ctor: '::',
																							_0: A2(_debois$elm_mdl$Material_Options$css, 'border-color', '#64DD17'),
																							_1: {ctor: '[]'}
																						}
																					}
																				})),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											},
											{ctor: '[]'});
									},
									A2(_elm_lang$core$List$range, 0, 2))),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Tabs$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Demo_Tabs$example0,
				model.mdl,
				0,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_debois$elm_mdl$Demo_Tabs$defaultExample,
					A2(_elm_lang$core$Dict$get, 0, model.examples))),
			_1: {
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Demo_Tabs$example1,
					model.mdl,
					1,
					A2(
						_elm_lang$core$Maybe$withDefault,
						_debois$elm_mdl$Demo_Tabs$defaultExample,
						A2(_elm_lang$core$Dict$get, 1, model.examples))),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Demo_Tabs$example2,
						model.mdl,
						2,
						A2(
							_elm_lang$core$Maybe$withDefault,
							_debois$elm_mdl$Demo_Tabs$defaultExample,
							A2(_elm_lang$core$Dict$get, 2, model.examples))),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Demo_Tabs$example3,
							model.mdl,
							3,
							A2(
								_elm_lang$core$Maybe$withDefault,
								_debois$elm_mdl$Demo_Tabs$defaultExample,
								A2(_elm_lang$core$Dict$get, 3, model.examples))),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Demo_Tabs$example4,
								model.mdl,
								4,
								A2(
									_elm_lang$core$Maybe$withDefault,
									_debois$elm_mdl$Demo_Tabs$defaultExample,
									A2(_elm_lang$core$Dict$get, 4, model.examples))),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Demo_Tabs$example5,
									model.mdl,
									5,
									A2(
										_elm_lang$core$Maybe$withDefault,
										_debois$elm_mdl$Demo_Tabs$defaultExample,
										A2(_elm_lang$core$Dict$get, 5, model.examples))),
								_1: {
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Demo_Tabs$example6,
										model.mdl,
										6,
										A2(
											_elm_lang$core$Maybe$withDefault,
											_debois$elm_mdl$Demo_Tabs$defaultExample,
											A2(_elm_lang$core$Dict$get, 6, model.examples))),
									_1: {
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Demo_Tabs$example7,
											model.mdl,
											7,
											A2(
												_elm_lang$core$Maybe$withDefault,
												_debois$elm_mdl$Demo_Tabs$defaultExample,
												A2(_elm_lang$core$Dict$get, 7, model.examples))),
										_1: {
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Demo_Tabs$example8,
												model.mdl,
												8,
												A2(
													_elm_lang$core$Maybe$withDefault,
													_debois$elm_mdl$Demo_Tabs$defaultExample,
													A2(_elm_lang$core$Dict$get, 8, model.examples))),
											_1: {
												ctor: '::',
												_0: A3(
													_debois$elm_mdl$Demo_Tabs$example9,
													model.mdl,
													9,
													A2(
														_elm_lang$core$Maybe$withDefault,
														_debois$elm_mdl$Demo_Tabs$defaultExample,
														A2(_elm_lang$core$Dict$get, 9, model.examples))),
												_1: {
													ctor: '::',
													_0: A3(
														_debois$elm_mdl$Demo_Tabs$example10,
														model.mdl,
														10,
														A2(
															_elm_lang$core$Maybe$withDefault,
															_debois$elm_mdl$Demo_Tabs$defaultExample,
															A2(_elm_lang$core$Dict$get, 10, model.examples))),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};

var _debois$elm_mdl$Material_Textfield_HelperText$validationMsg = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{validationMsg: true});
	});
var _debois$elm_mdl$Material_Textfield_HelperText$persistent = _debois$elm_mdl$Material_Internal_Options$option(
	function (config) {
		return _elm_lang$core$Native_Utils.update(
			config,
			{persistent: true});
	});
var _debois$elm_mdl$Material_Textfield_HelperText$defaultConfig = {persistent: false, validationMsg: false};
var _debois$elm_mdl$Material_Textfield_HelperText$helperText = function (options) {
	var _p0 = A2(_debois$elm_mdl$Material_Internal_Options$collect, _debois$elm_mdl$Material_Textfield_HelperText$defaultConfig, options);
	var summary = _p0;
	var config = _p0.config;
	return A2(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$p,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('mdc-textfield-helptext'),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Options$when,
					config.persistent,
					_debois$elm_mdl$Material_Options$cs('mdc-textfield-helptext--persistent')),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$when,
						config.validationMsg,
						_debois$elm_mdl$Material_Options$cs('mdc-textfield-helptext--validation-msg')),
					_1: options
				}
			}
		});
};
var _debois$elm_mdl$Material_Textfield_HelperText$Config = F2(
	function (a, b) {
		return {persistent: a, validationMsg: b};
	});

var _debois$elm_mdl$Demo_Textfields$updateExample = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'ToggleDisabled':
				return _elm_lang$core$Native_Utils.update(
					model,
					{disabled: !model.disabled});
			case 'ToggleRtl':
				return _elm_lang$core$Native_Utils.update(
					model,
					{rtl: !model.rtl});
			case 'ToggleDarkTheme':
				return _elm_lang$core$Native_Utils.update(
					model,
					{darkTheme: !model.darkTheme});
			case 'ToggleDense':
				return _elm_lang$core$Native_Utils.update(
					model,
					{dense: !model.dense});
			case 'ToggleRequired':
				return _elm_lang$core$Native_Utils.update(
					model,
					{required: !model.required});
			case 'ToggleHelperText':
				return _elm_lang$core$Native_Utils.update(
					model,
					{helperText: !model.helperText});
			case 'TogglePersistent':
				return _elm_lang$core$Native_Utils.update(
					model,
					{persistent: !model.persistent});
			default:
				return _elm_lang$core$Native_Utils.update(
					model,
					{validationMsg: !model.validationMsg});
		}
	});
var _debois$elm_mdl$Demo_Textfields$defaultExample = {disabled: false, rtl: false, darkTheme: false, dense: false, required: false, helperText: false, persistent: false, validationMsg: false};
var _debois$elm_mdl$Demo_Textfields$model = {mdl: _debois$elm_mdl$Material$model, example0: _debois$elm_mdl$Demo_Textfields$defaultExample, example1: _debois$elm_mdl$Demo_Textfields$defaultExample, example2: _debois$elm_mdl$Demo_Textfields$defaultExample, example3: _debois$elm_mdl$Demo_Textfields$defaultExample, example4: _debois$elm_mdl$Demo_Textfields$defaultExample};
var _debois$elm_mdl$Demo_Textfields$Model = F6(
	function (a, b, c, d, e, f) {
		return {mdl: a, example0: b, example1: c, example2: d, example3: e, example4: f};
	});
var _debois$elm_mdl$Demo_Textfields$Example = F8(
	function (a, b, c, d, e, f, g, h) {
		return {disabled: a, rtl: b, darkTheme: c, dense: d, required: e, helperText: f, persistent: g, validationMsg: h};
	});
var _debois$elm_mdl$Demo_Textfields$Example4Msg = function (a) {
	return {ctor: 'Example4Msg', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$Example3Msg = function (a) {
	return {ctor: 'Example3Msg', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$Example2Msg = function (a) {
	return {ctor: 'Example2Msg', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$Example1Msg = function (a) {
	return {ctor: 'Example1Msg', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$Example0Msg = function (a) {
	return {ctor: 'Example0Msg', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Textfields$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'Mdl':
				return _elm_lang$core$Maybe$Just(
					A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Textfields$Mdl, _p1._0, model));
			case 'Example0Msg':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								example0: A2(_debois$elm_mdl$Demo_Textfields$updateExample, _p1._0, model.example0)
							}),
						{ctor: '[]'}));
			case 'Example1Msg':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								example1: A2(_debois$elm_mdl$Demo_Textfields$updateExample, _p1._0, model.example1)
							}),
						{ctor: '[]'}));
			case 'Example2Msg':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								example2: A2(_debois$elm_mdl$Demo_Textfields$updateExample, _p1._0, model.example2)
							}),
						{ctor: '[]'}));
			case 'Example3Msg':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								example3: A2(_debois$elm_mdl$Demo_Textfields$updateExample, _p1._0, model.example3)
							}),
						{ctor: '[]'}));
			default:
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								example4: A2(_debois$elm_mdl$Demo_Textfields$updateExample, _p1._0, model.example4)
							}),
						{ctor: '[]'}));
		}
	});
var _debois$elm_mdl$Demo_Textfields$example1 = F4(
	function (mdl, idx, lift, model) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Password field with validation'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$cs('mdc-theme--dark')),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										_elm_lang$html$Html_Attributes$dir('rtl'))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								model.darkTheme ? {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdc-theme--dark'),
									_1: {ctor: '[]'}
								} : {ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Textfield$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {ctor: '[]'}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Textfield$label('Choose password'),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield$password,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Textfield$pattern('.{8,}'),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Textfield$required,
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Textfield_HelperText$helperText,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield_HelperText$persistent,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Textfield_HelperText$validationMsg,
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Must be at least 8 characters long'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Textfields$ToggleValidationMsg = {ctor: 'ToggleValidationMsg'};
var _debois$elm_mdl$Demo_Textfields$TogglePersistent = {ctor: 'TogglePersistent'};
var _debois$elm_mdl$Demo_Textfields$ToggleHelperText = {ctor: 'ToggleHelperText'};
var _debois$elm_mdl$Demo_Textfields$ToggleRequired = {ctor: 'ToggleRequired'};
var _debois$elm_mdl$Demo_Textfields$ToggleDense = {ctor: 'ToggleDense'};
var _debois$elm_mdl$Demo_Textfields$ToggleDarkTheme = {ctor: 'ToggleDarkTheme'};
var _debois$elm_mdl$Demo_Textfields$ToggleRtl = {ctor: 'ToggleRtl'};
var _debois$elm_mdl$Demo_Textfields$ToggleDisabled = {ctor: 'ToggleDisabled'};
var _debois$elm_mdl$Demo_Textfields$example0 = F4(
	function (mdl, idx, lift, model) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Full Functionality Component (Floating Label, Validation, Autocomplete)'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$cs('mdc-theme--dark')),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										_elm_lang$html$Html_Attributes$dir('rtl'))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								model.darkTheme ? {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdc-theme--dark'),
									_1: {ctor: '[]'}
								} : {ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Textfield$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {ctor: '[]'}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Textfield$label('Email Address'),
											_1: {
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.disabled, _debois$elm_mdl$Material_Textfield$disabled),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$when, model.dense, _debois$elm_mdl$Material_Textfield$dense),
													_1: {
														ctor: '::',
														_0: A2(_debois$elm_mdl$Material_Options$when, model.required, _debois$elm_mdl$Material_Textfield$required),
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Textfield_HelperText$helperText,
											{
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.persistent, _debois$elm_mdl$Material_Textfield_HelperText$persistent),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$when, model.validationMsg, _debois$elm_mdl$Material_Textfield_HelperText$validationMsg),
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Options$when,
															!model.helperText,
															A2(_debois$elm_mdl$Material_Options$css, 'display', 'none')),
														_1: {ctor: '[]'}
													}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Help Text (possibly validation message)'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Textfields$Mdl,
									{
										ctor: '::',
										_0: idx,
										_1: {
											ctor: '::',
											_0: 0,
											_1: {ctor: '[]'}
										}
									},
									mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$onClick(
											lift(_debois$elm_mdl$Demo_Textfields$ToggleDisabled)),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Disabled'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {
												ctor: '::',
												_0: 1,
												_1: {ctor: '[]'}
											}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(
												lift(_debois$elm_mdl$Demo_Textfields$ToggleRtl)),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Textfields$Mdl,
											{
												ctor: '::',
												_0: idx,
												_1: {
													ctor: '::',
													_0: 2,
													_1: {ctor: '[]'}
												}
											},
											mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$onClick(
													lift(_debois$elm_mdl$Demo_Textfields$ToggleDarkTheme)),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Dark Theme'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Checkbox$render,
												_debois$elm_mdl$Demo_Textfields$Mdl,
												{
													ctor: '::',
													_0: idx,
													_1: {
														ctor: '::',
														_0: 3,
														_1: {ctor: '[]'}
													}
												},
												mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$onClick(
														lift(_debois$elm_mdl$Demo_Textfields$ToggleDense)),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$label,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Dense'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Options$div,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Checkbox$render,
													_debois$elm_mdl$Demo_Textfields$Mdl,
													{
														ctor: '::',
														_0: idx,
														_1: {
															ctor: '::',
															_0: 4,
															_1: {ctor: '[]'}
														}
													},
													mdl,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$onClick(
															lift(_debois$elm_mdl$Demo_Textfields$ToggleRequired)),
														_1: {ctor: '[]'}
													},
													{ctor: '[]'}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$label,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Required'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Options$div,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A5(
														_debois$elm_mdl$Material_Checkbox$render,
														_debois$elm_mdl$Demo_Textfields$Mdl,
														{
															ctor: '::',
															_0: idx,
															_1: {
																ctor: '::',
																_0: 5,
																_1: {ctor: '[]'}
															}
														},
														mdl,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$onClick(
																lift(_debois$elm_mdl$Demo_Textfields$ToggleHelperText)),
															_1: {ctor: '[]'}
														},
														{ctor: '[]'}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$label,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Use Helper Text'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Options$div,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A5(
															_debois$elm_mdl$Material_Checkbox$render,
															_debois$elm_mdl$Demo_Textfields$Mdl,
															{
																ctor: '::',
																_0: idx,
																_1: {
																	ctor: '::',
																	_0: 6,
																	_1: {ctor: '[]'}
																}
															},
															mdl,
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_Options$onClick(
																	lift(_debois$elm_mdl$Demo_Textfields$TogglePersistent)),
																_1: {
																	ctor: '::',
																	_0: A2(_debois$elm_mdl$Material_Options$when, !model.helperText, _debois$elm_mdl$Material_Checkbox$disabled),
																	_1: {ctor: '[]'}
																}
															},
															{ctor: '[]'}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$label,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Make helper text persistent'),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Options$div,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: A5(
																_debois$elm_mdl$Material_Checkbox$render,
																_debois$elm_mdl$Demo_Textfields$Mdl,
																{
																	ctor: '::',
																	_0: idx,
																	_1: {
																		ctor: '::',
																		_0: 7,
																		_1: {ctor: '[]'}
																	}
																},
																mdl,
																{
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Options$onClick(
																		lift(_debois$elm_mdl$Demo_Textfields$ToggleValidationMsg)),
																	_1: {
																		ctor: '::',
																		_0: A2(_debois$elm_mdl$Material_Options$when, !model.helperText, _debois$elm_mdl$Material_Checkbox$disabled),
																		_1: {ctor: '[]'}
																	}
																},
																{ctor: '[]'}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$label,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Use helper text as validation message'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Textfields$example2 = F4(
	function (mdl, idx, lift, model) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Textfield box'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$cs('mdc-theme--dark')),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										_elm_lang$html$Html_Attributes$dir('rtl'))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								model.darkTheme ? {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdc-theme--dark'),
									_1: {ctor: '[]'}
								} : {ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Textfield$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {ctor: '[]'}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Textfield$label('Your Name'),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield$textfield,
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Textfield_HelperText$helperText,
											{
												ctor: '::',
												_0: A2(_debois$elm_mdl$Material_Options$when, model.persistent, _debois$elm_mdl$Material_Textfield_HelperText$persistent),
												_1: {
													ctor: '::',
													_0: A2(_debois$elm_mdl$Material_Options$when, model.validationMsg, _debois$elm_mdl$Material_Textfield_HelperText$validationMsg),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Must provide a name'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Textfields$Mdl,
									{
										ctor: '::',
										_0: idx,
										_1: {
											ctor: '::',
											_0: 0,
											_1: {ctor: '[]'}
										}
									},
									mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$onClick(
											lift(_debois$elm_mdl$Demo_Textfields$ToggleDisabled)),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Disabled'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {
												ctor: '::',
												_0: 1,
												_1: {ctor: '[]'}
											}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(
												lift(_debois$elm_mdl$Demo_Textfields$ToggleRtl)),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Textfields$Mdl,
											{
												ctor: '::',
												_0: idx,
												_1: {
													ctor: '::',
													_0: 2,
													_1: {ctor: '[]'}
												}
											},
											mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$onClick(
													lift(_debois$elm_mdl$Demo_Textfields$ToggleDarkTheme)),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Dark Theme'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Checkbox$render,
												_debois$elm_mdl$Demo_Textfields$Mdl,
												{
													ctor: '::',
													_0: idx,
													_1: {
														ctor: '::',
														_0: 3,
														_1: {ctor: '[]'}
													}
												},
												mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$onClick(
														lift(_debois$elm_mdl$Demo_Textfields$ToggleDense)),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$label,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Dense'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Textfields$example3 = F4(
	function (mdl, idx, lift, model) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Multi-line Textfields'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$cs('mdc-theme--dark')),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										_elm_lang$html$Html_Attributes$dir('rtl'))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								model.darkTheme ? {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdc-theme--dark'),
									_1: {ctor: '[]'}
								} : {ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Textfield$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {ctor: '[]'}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Textfield$label('Multi-line Label'),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield$multiline,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Textfield$rows(8),
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Textfield$cols(40),
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Textfields$Mdl,
									{
										ctor: '::',
										_0: idx,
										_1: {
											ctor: '::',
											_0: 0,
											_1: {ctor: '[]'}
										}
									},
									mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$onClick(
											lift(_debois$elm_mdl$Demo_Textfields$ToggleDisabled)),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Disabled'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {
												ctor: '::',
												_0: 1,
												_1: {ctor: '[]'}
											}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(
												lift(_debois$elm_mdl$Demo_Textfields$ToggleRtl)),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Textfields$Mdl,
											{
												ctor: '::',
												_0: idx,
												_1: {
													ctor: '::',
													_0: 2,
													_1: {ctor: '[]'}
												}
											},
											mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$onClick(
													lift(_debois$elm_mdl$Demo_Textfields$ToggleDarkTheme)),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Dark Theme'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Checkbox$render,
												_debois$elm_mdl$Demo_Textfields$Mdl,
												{
													ctor: '::',
													_0: idx,
													_1: {
														ctor: '::',
														_0: 3,
														_1: {ctor: '[]'}
													}
												},
												mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$onClick(
														lift(_debois$elm_mdl$Demo_Textfields$ToggleDense)),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$label,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Dense'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Textfields$example4 = F4(
	function (mdl, idx, lift, model) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Full-Width Textfields'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$when,
								model.darkTheme,
								_debois$elm_mdl$Material_Options$cs('mdc-theme--dark')),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$when,
									model.rtl,
									_debois$elm_mdl$Material_Options$attribute(
										_elm_lang$html$Html_Attributes$dir('rtl'))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								model.darkTheme ? {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('mdc-theme--dark'),
									_1: {ctor: '[]'}
								} : {ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Textfield$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {
												ctor: '::',
												_0: 0,
												_1: {ctor: '[]'}
											}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Textfield$placeholder('Subject'),
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield$fullWidth,
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Textfield$render,
											_debois$elm_mdl$Demo_Textfields$Mdl,
											{
												ctor: '::',
												_0: idx,
												_1: {
													ctor: '::',
													_0: 1,
													_1: {ctor: '[]'}
												}
											},
											mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Textfield$placeholder('Message'),
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Textfield$multiline,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Textfield$fullWidth,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Textfield$rows(8),
															_1: {
																ctor: '::',
																_0: _debois$elm_mdl$Material_Textfield$cols(40),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Options$div,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A5(
									_debois$elm_mdl$Material_Checkbox$render,
									_debois$elm_mdl$Demo_Textfields$Mdl,
									{
										ctor: '::',
										_0: idx,
										_1: {
											ctor: '::',
											_0: 2,
											_1: {ctor: '[]'}
										}
									},
									mdl,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Options$onClick(
											lift(_debois$elm_mdl$Demo_Textfields$ToggleDisabled)),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Disabled'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Options$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Checkbox$render,
										_debois$elm_mdl$Demo_Textfields$Mdl,
										{
											ctor: '::',
											_0: idx,
											_1: {
												ctor: '::',
												_0: 3,
												_1: {ctor: '[]'}
											}
										},
										mdl,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$onClick(
												lift(_debois$elm_mdl$Demo_Textfields$ToggleRtl)),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$label,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('RTL'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Options$div,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A5(
											_debois$elm_mdl$Material_Checkbox$render,
											_debois$elm_mdl$Demo_Textfields$Mdl,
											{
												ctor: '::',
												_0: idx,
												_1: {
													ctor: '::',
													_0: 4,
													_1: {ctor: '[]'}
												}
											},
											mdl,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$onClick(
													lift(_debois$elm_mdl$Demo_Textfields$ToggleDarkTheme)),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Dark Theme'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Options$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Checkbox$render,
												_debois$elm_mdl$Demo_Textfields$Mdl,
												{
													ctor: '::',
													_0: idx,
													_1: {
														ctor: '::',
														_0: 5,
														_1: {ctor: '[]'}
													}
												},
												mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$onClick(
														lift(_debois$elm_mdl$Demo_Textfields$ToggleDense)),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$label,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Dense'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Textfields$view = function (model) {
	return A2(
		_debois$elm_mdl$Material_Options$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$section,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('example'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A4(_debois$elm_mdl$Demo_Textfields$example0, model.mdl, 0, _debois$elm_mdl$Demo_Textfields$Example0Msg, model.example0),
					_1: {
						ctor: '::',
						_0: A4(_debois$elm_mdl$Demo_Textfields$example1, model.mdl, 1, _debois$elm_mdl$Demo_Textfields$Example1Msg, model.example1),
						_1: {
							ctor: '::',
							_0: A4(_debois$elm_mdl$Demo_Textfields$example2, model.mdl, 2, _debois$elm_mdl$Demo_Textfields$Example2Msg, model.example2),
							_1: {
								ctor: '::',
								_0: A4(_debois$elm_mdl$Demo_Textfields$example3, model.mdl, 3, _debois$elm_mdl$Demo_Textfields$Example3Msg, model.example3),
								_1: {
									ctor: '::',
									_0: A4(_debois$elm_mdl$Demo_Textfields$example4, model.mdl, 4, _debois$elm_mdl$Demo_Textfields$Example4Msg, model.example4),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		});
};

var _debois$elm_mdl$Demo_Theme$demoThemeTextStyles = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-theme__text--styles'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'inline-flex'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'box-sizing', 'border-box'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '16px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'border', '1px solid #f0f0f0'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'align-items', 'center'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-direction', 'row'),
									_1: options
								}
							}
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Theme$example1 = function () {
	var demo = F2(
		function (background, nodes) {
			return A2(
				_debois$elm_mdl$Demo_Theme$demoThemeTextStyles,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Typography$typography,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$body2,
						_1: {
							ctor: '::',
							_0: background,
							_1: {ctor: '[]'}
						}
					}
				},
				function () {
					var options = {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$typography,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$body2,
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '0 16px'),
								_1: {ctor: '[]'}
							}
						}
					};
					return A2(
						_elm_lang$core$List$map,
						function (node) {
							return node(options);
						},
						nodes);
				}());
		});
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('example'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$h3,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Typography$title,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Text on background'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					demo,
					_debois$elm_mdl$Material_Theme$background,
					{
						ctor: '::',
						_0: function (options) {
							return A2(
								_debois$elm_mdl$Material_Options$span,
								{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textPrimaryOnBackground, _1: options},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Primary'),
									_1: {ctor: '[]'}
								});
						},
						_1: {
							ctor: '::',
							_0: function (options) {
								return A2(
									_debois$elm_mdl$Material_Options$span,
									{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textSecondaryOnBackground, _1: options},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Secondary'),
										_1: {ctor: '[]'}
									});
							},
							_1: {
								ctor: '::',
								_0: function (options) {
									return A2(
										_debois$elm_mdl$Material_Options$span,
										{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnBackground, _1: options},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Hint'),
											_1: {ctor: '[]'}
										});
								},
								_1: {
									ctor: '::',
									_0: function (options) {
										return A2(
											_debois$elm_mdl$Material_Options$span,
											{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnBackground, _1: options},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Disabled'),
												_1: {ctor: '[]'}
											});
									},
									_1: {
										ctor: '::',
										_0: function (options) {
											return A2(_debois$elm_mdl$Material_Theme$textIconOnBackground, options, 'favorite');
										},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h3,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$title,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Text on primary'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							demo,
							_debois$elm_mdl$Material_Theme$primaryBg,
							{
								ctor: '::',
								_0: function (options) {
									return A2(
										_debois$elm_mdl$Material_Options$span,
										{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textPrimaryOnPrimary, _1: options},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Primary'),
											_1: {ctor: '[]'}
										});
								},
								_1: {
									ctor: '::',
									_0: function (options) {
										return A2(
											_debois$elm_mdl$Material_Options$span,
											{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textSecondaryOnPrimary, _1: options},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Secondary'),
												_1: {ctor: '[]'}
											});
									},
									_1: {
										ctor: '::',
										_0: function (options) {
											return A2(
												_debois$elm_mdl$Material_Options$span,
												{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnPrimary, _1: options},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Hint'),
													_1: {ctor: '[]'}
												});
										},
										_1: {
											ctor: '::',
											_0: function (options) {
												return A2(
													_debois$elm_mdl$Material_Options$span,
													{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnPrimary, _1: options},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Disabled'),
														_1: {ctor: '[]'}
													});
											},
											_1: {
												ctor: '::',
												_0: function (options) {
													return A2(_debois$elm_mdl$Material_Theme$textIconOnPrimary, options, 'favorite');
												},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$h3,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Typography$title,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Text on accent'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									demo,
									_debois$elm_mdl$Material_Theme$accentBg,
									{
										ctor: '::',
										_0: function (options) {
											return A2(
												_debois$elm_mdl$Material_Options$span,
												{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textPrimaryOnAccent, _1: options},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Primary'),
													_1: {ctor: '[]'}
												});
										},
										_1: {
											ctor: '::',
											_0: function (options) {
												return A2(
													_debois$elm_mdl$Material_Options$span,
													{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textSecondaryOnAccent, _1: options},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Secondary'),
														_1: {ctor: '[]'}
													});
											},
											_1: {
												ctor: '::',
												_0: function (options) {
													return A2(
														_debois$elm_mdl$Material_Options$span,
														{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnAccent, _1: options},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Hint'),
															_1: {ctor: '[]'}
														});
												},
												_1: {
													ctor: '::',
													_0: function (options) {
														return A2(
															_debois$elm_mdl$Material_Options$span,
															{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnAccent, _1: options},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Disabled'),
																_1: {ctor: '[]'}
															});
													},
													_1: {
														ctor: '::',
														_0: function (options) {
															return A2(_debois$elm_mdl$Material_Theme$textIconOnAccent, options, 'favorite');
														},
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$h3,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Typography$title,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Text on user-defined light background'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											demo,
											A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#dddddd'),
											{
												ctor: '::',
												_0: function (options) {
													return A2(
														_debois$elm_mdl$Material_Options$span,
														{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textPrimaryOnLight, _1: options},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Primary'),
															_1: {ctor: '[]'}
														});
												},
												_1: {
													ctor: '::',
													_0: function (options) {
														return A2(
															_debois$elm_mdl$Material_Options$span,
															{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textSecondaryOnLight, _1: options},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Secondary'),
																_1: {ctor: '[]'}
															});
													},
													_1: {
														ctor: '::',
														_0: function (options) {
															return A2(
																_debois$elm_mdl$Material_Options$span,
																{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnLight, _1: options},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Hint'),
																	_1: {ctor: '[]'}
																});
														},
														_1: {
															ctor: '::',
															_0: function (options) {
																return A2(
																	_debois$elm_mdl$Material_Options$span,
																	{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnLight, _1: options},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Disabled'),
																		_1: {ctor: '[]'}
																	});
															},
															_1: {
																ctor: '::',
																_0: function (options) {
																	return A2(_debois$elm_mdl$Material_Theme$textIconOnLight, options, 'favorite');
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										_1: {
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Material_Options$styled,
												_elm_lang$html$Html$h3,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Typography$title,
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Text on user-defined dark background'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													demo,
													A2(_debois$elm_mdl$Material_Options$css, 'background-color', '#1d1d1d'),
													{
														ctor: '::',
														_0: function (options) {
															return A2(
																_debois$elm_mdl$Material_Options$span,
																{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textPrimaryOnDark, _1: options},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('Primary'),
																	_1: {ctor: '[]'}
																});
														},
														_1: {
															ctor: '::',
															_0: function (options) {
																return A2(
																	_debois$elm_mdl$Material_Options$span,
																	{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textSecondaryOnDark, _1: options},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Secondary'),
																		_1: {ctor: '[]'}
																	});
															},
															_1: {
																ctor: '::',
																_0: function (options) {
																	return A2(
																		_debois$elm_mdl$Material_Options$span,
																		{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnDark, _1: options},
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html$text('Hint'),
																			_1: {ctor: '[]'}
																		});
																},
																_1: {
																	ctor: '::',
																	_0: function (options) {
																		return A2(
																			_debois$elm_mdl$Material_Options$span,
																			{ctor: '::', _0: _debois$elm_mdl$Material_Theme$textHintOnDark, _1: options},
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html$text('Disabled'),
																				_1: {ctor: '[]'}
																			});
																	},
																	_1: {
																		ctor: '::',
																		_0: function (options) {
																			return A2(_debois$elm_mdl$Material_Theme$textIconOnDark, options, 'favorite');
																		},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
}();
var _debois$elm_mdl$Demo_Theme$demoThemeColorBlock = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-theme__color__block'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'inline-block'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'box-sizing', 'border-box'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '130px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '50px'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'line-height', '50px'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'text-align', 'center'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'border', '1px solid #f0f0f0'),
										_1: options
									}
								}
							}
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Theme$demoThemeColorLabel = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-theme__color__label'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'inline-block'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'box-sizing', 'border-box'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '130px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'marign-bottom', '1rem'),
							_1: options
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Theme$demoThemeColor = function (options) {
	return _debois$elm_mdl$Material_Options$div(
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Options$cs('demo-theme__color'),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'inline-flex'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-direction', 'column'),
					_1: options
				}
			}
		});
};
var _debois$elm_mdl$Demo_Theme$example0 = A3(
	_debois$elm_mdl$Material_Options$styled,
	_elm_lang$html$Html$section,
	{
		ctor: '::',
		_0: _debois$elm_mdl$Material_Options$cs('example'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$h3,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Typography$title,
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Theme colors as text'),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Demo_Theme$demoThemeColor,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Demo_Theme$demoThemeColorLabel,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Primary'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Demo_Theme$demoThemeColorBlock,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Typography$typography,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Theme$primary,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Typography$body2,
										_1: {ctor: '[]'}
									}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Lorem ipsum'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Demo_Theme$demoThemeColor,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Demo_Theme$demoThemeColorLabel,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Accent'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Demo_Theme$demoThemeColorBlock,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Typography$typography,
									_1: {
										ctor: '::',
										_0: _debois$elm_mdl$Material_Theme$accent,
										_1: {
											ctor: '::',
											_0: _debois$elm_mdl$Material_Typography$body2,
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Lorem ipsum'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h3,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$title,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Theme colors as background'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Demo_Theme$demoThemeColor,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Demo_Theme$demoThemeColorLabel,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Primary'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Demo_Theme$demoThemeColorBlock,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Typography$typography,
											_1: {
												ctor: '::',
												_0: _debois$elm_mdl$Material_Theme$primaryBg,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Typography$body2,
													_1: {ctor: '[]'}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Demo_Theme$demoThemeColor,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Demo_Theme$demoThemeColorLabel,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Accent'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Demo_Theme$demoThemeColorBlock,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Typography$typography,
												_1: {
													ctor: '::',
													_0: _debois$elm_mdl$Material_Theme$accentBg,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Typography$body2,
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Demo_Theme$demoThemeColor,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Demo_Theme$demoThemeColorLabel,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Background'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Demo_Theme$demoThemeColorBlock,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Typography$typography,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Theme$background,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Typography$body2,
															_1: {ctor: '[]'}
														}
													}
												},
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _debois$elm_mdl$Demo_Theme$view = function (model) {
	return A2(
		_debois$elm_mdl$Material_Options$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$h2,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Typography$display1,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Theme colors'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Theme$example0,
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h2,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$display1,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Text colors for contrast'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Demo_Theme$example1,
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Theme$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Theme$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Theme$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Theme$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Theme$Mdl, _p0._0, model);
	});

var _debois$elm_mdl$Demo_Toolbar$body = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	A2(
		_elm_lang$core$List$repeat,
		3,
		A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$p,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('demo-paragraph'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Pellentesque habitant morbi tristique senectus et netus et\nmalesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,\nultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas\nsemper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique\nsenectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,\nfeugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet\nquam egestas semper. Aenean ultricies mi vitae est.'),
				_1: {ctor: '[]'}
			})));
var _debois$elm_mdl$Demo_Toolbar$example6 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$waterfall,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Toolbar$flexible,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Toolbar$flexibleDefaultBehavior,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '224px'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Toolbar$row,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example5 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$waterfall,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Toolbar$flexible,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Toolbar$flexibleDefaultBehavior,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '224px'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Toolbar$row,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example4 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$waterfall,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Toolbar$flexible,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Toolbar$flexibleDefaultBehavior,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '224px'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_debois$elm_mdl$Material_Toolbar$row,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example3 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$waterfall,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Toolbar$flexible,
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Toolbar$flexibleDefaultBehavior,
								_1: {
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '224px'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example2 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$waterfall,
						_1: {
							ctor: '::',
							_0: _debois$elm_mdl$Material_Toolbar$flexibleSpaceMaximized,
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example1 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example0 = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Options$attribute(
												_elm_lang$html$Html_Attributes$href('#')),
											_1: {ctor: '[]'}
										},
										'menu'),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Toolbar$section,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Toolbar$alignEnd,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$icon,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Options$attribute(
													_elm_lang$html$Html_Attributes$href('#')),
												_1: {ctor: '[]'}
											},
											'file_download'),
										_1: {
											ctor: '::',
											_0: A2(
												_debois$elm_mdl$Material_Toolbar$icon,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Options$attribute(
														_elm_lang$html$Html_Attributes$href('#')),
													_1: {ctor: '[]'}
												},
												'print'),
											_1: {
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Toolbar$icon,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Options$attribute(
															_elm_lang$html$Html_Attributes$href('#')),
														_1: {ctor: '[]'}
													},
													'more_vert'),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Demo_Toolbar$body,
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$example = F3(
	function (model, title, view) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h2,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(title),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: view(model),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Toolbar$view = function (model) {
	return A3(
		_debois$elm_mdl$Material_Options$styled,
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _debois$elm_mdl$Material_Typography$typography,
			_1: {
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('mdc-toolbar-demo'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Normal Toolbar', _debois$elm_mdl$Demo_Toolbar$example0),
			_1: {
				ctor: '::',
				_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Fixed Toolbar', _debois$elm_mdl$Demo_Toolbar$example1),
				_1: {
					ctor: '::',
					_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Waterfall Toolbar', _debois$elm_mdl$Demo_Toolbar$example2),
					_1: {
						ctor: '::',
						_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Default Flexible Toolbar', _debois$elm_mdl$Demo_Toolbar$example3),
						_1: {
							ctor: '::',
							_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Waterfall Flexible Toolbar', _debois$elm_mdl$Demo_Toolbar$example4),
							_1: {
								ctor: '::',
								_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Waterfall Toolbar Fix Last Row', _debois$elm_mdl$Demo_Toolbar$example5),
								_1: {
									ctor: '::',
									_0: A3(_debois$elm_mdl$Demo_Toolbar$example, model, 'Waterfall Flexible Toolbar with Custom Style', _debois$elm_mdl$Demo_Toolbar$example6),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		});
};
var _debois$elm_mdl$Demo_Toolbar$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Toolbar$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Toolbar$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Toolbar$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Toolbar$Mdl, _p0._0, model);
	});

var _debois$elm_mdl$Demo_Tooltip$demoTooltip = F3(
	function (elements, description, code) {
		return A2(
			_debois$elm_mdl$Material_Options$div,
			{
				ctor: '::',
				_0: A2(_debois$elm_mdl$Material_Options$css, 'width', '45%'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(description),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Options$div,
						{
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'align-items', 'center'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'center'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'height', '5rem'),
										_1: {ctor: '[]'}
									}
								}
							}
						},
						elements),
					_1: {ctor: '[]'}
				}
			});
	});
var _debois$elm_mdl$Demo_Tooltip$model = {mdl: _debois$elm_mdl$Material$model, tooltip: _debois$elm_mdl$Material_Tooltip$defaultModel};
var _debois$elm_mdl$Demo_Tooltip$Model = F2(
	function (a, b) {
		return {mdl: a, tooltip: b};
	});
var _debois$elm_mdl$Demo_Tooltip$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Tooltip$update = F2(
	function (action, model) {
		var _p0 = action;
		switch (_p0.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'TooltipMsg':
				var updated = _elm_lang$core$Tuple$first(
					A2(_debois$elm_mdl$Material_Tooltip$update, _p0._0, model.tooltip));
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{tooltip: updated}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Tooltip$Mdl, _p0._0, model);
		}
	});
var _debois$elm_mdl$Demo_Tooltip$TooltipMsg = function (a) {
	return {ctor: 'TooltipMsg', _0: a};
};
var _debois$elm_mdl$Demo_Tooltip$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Example use:'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_debois$elm_mdl$Material_Options$div,
					{
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'display', 'flex'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-direction', 'column'),
							_1: {
								ctor: '::',
								_0: A2(_debois$elm_mdl$Material_Options$css, 'flex-wrap', 'wrap'),
								_1: {
									ctor: '::',
									_0: A2(_debois$elm_mdl$Material_Options$css, 'align-items', 'center'),
									_1: {
										ctor: '::',
										_0: A2(_debois$elm_mdl$Material_Options$css, 'justify-content', 'center'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Demo_Tooltip$demoTooltip,
							{
								ctor: '::',
								_0: A2(
									_debois$elm_mdl$Material_Icon$view,
									'add',
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Tooltip$attach,
											_debois$elm_mdl$Demo_Tooltip$Mdl,
											{
												ctor: '::',
												_0: 0,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A5(
										_debois$elm_mdl$Material_Tooltip$render,
										_debois$elm_mdl$Demo_Tooltip$Mdl,
										{
											ctor: '::',
											_0: 0,
											_1: {ctor: '[]'}
										},
										model.mdl,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('This is an add icon'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							},
							'Hover over the icon below to see the default tooltip.',
							'\n        [ Icon.view \"add\"\n            [ Tooltip.attach Mdl [0] ]\n        , Tooltip.render Mdl [0] model.mdl\n            []\n            [ text \"This is an add icon\" ]\n        ]\n        '),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Demo_Tooltip$demoTooltip,
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$span,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('HTML is related to '),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$span,
											{
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Tooltip$attach,
													_debois$elm_mdl$Demo_Tooltip$Mdl,
													{
														ctor: '::',
														_0: 1,
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$i,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('XML'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Tooltip$render,
												_debois$elm_mdl$Demo_Tooltip$Mdl,
												{
													ctor: '::',
													_0: 1,
													_1: {ctor: '[]'}
												},
												model.mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Tooltip$left,
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('XML is an acronym for eXtensible Markup Language'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								},
								'Hover over \"XML\" below to see a left-positioned tooltip',
								'\n        [ span [] [ text \"HTML is related to \" ]\n        , Options.styled span\n            [ Tooltip.attach Mdl [1] ]\n            [ i [] [text \"XML\"] ]\n        , Tooltip.render Mdl [1] model.mdl\n            [ Tooltip.left ]\n            [ text \"XML: eXtensible Markup Language\" ]\n        ]\n        '),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Demo_Tooltip$demoTooltip,
									{
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Icon$view,
											'share',
											{
												ctor: '::',
												_0: A2(
													_debois$elm_mdl$Material_Tooltip$attach,
													_debois$elm_mdl$Demo_Tooltip$Mdl,
													{
														ctor: '::',
														_0: 2,
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Tooltip$render,
												_debois$elm_mdl$Demo_Tooltip$Mdl,
												{
													ctor: '::',
													_0: 2,
													_1: {ctor: '[]'}
												},
												model.mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Tooltip$large,
													_1: {
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tooltip$right,
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('This is a share icon'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									},
									'Hover over the share icon below to see a large, right-positioned tooltip.',
									'\n        [ Icon.view \"share\"\n            [ Tooltip.attach Mdl [2] ]\n        , Tooltip.render Mdl [2] model.mdl\n            [ Tooltip.large\n            , Tooltip.right\n            ]\n            [text \"This is a share icon\"]\n        ]\n        '),
								_1: {
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Demo_Tooltip$demoTooltip,
										{
											ctor: '::',
											_0: A5(
												_debois$elm_mdl$Material_Button$render,
												_debois$elm_mdl$Demo_Tooltip$Mdl,
												{
													ctor: '::',
													_0: 0,
													_1: {ctor: '[]'}
												},
												model.mdl,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Button$raised,
													_1: {
														ctor: '::',
														_0: A2(
															_debois$elm_mdl$Material_Tooltip$attach,
															_debois$elm_mdl$Demo_Tooltip$Mdl,
															{
																ctor: '::',
																_0: 3,
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Click me!'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A5(
													_debois$elm_mdl$Material_Tooltip$render,
													_debois$elm_mdl$Demo_Tooltip$Mdl,
													{
														ctor: '::',
														_0: 3,
														_1: {ctor: '[]'}
													},
													model.mdl,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tooltip$top,
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Tooltip$large,
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Tooltips also work with material components'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										},
										'Hover over the button to see a large, above-positioned tooltip.',
										'\n      [ Button.render Mdl [0] model.mdl\n          [ Button.raised\n          , Tooltip.attach Mdl [3]\n          ]\n          [ text \"Click me!\"]\n      , Tooltip.render Mdl [3] model.mdl\n          [ Tooltip.top\n          , Tooltip.large\n          ]\n          [ text \"Tooltips also work with material components\" ]\n      ]\n      '),
									_1: {
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Demo_Tooltip$demoTooltip,
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$span,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Tooltip$onEnter(_debois$elm_mdl$Demo_Tooltip$TooltipMsg),
														_1: {
															ctor: '::',
															_0: _debois$elm_mdl$Material_Tooltip$onLeave(_debois$elm_mdl$Demo_Tooltip$TooltipMsg),
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Shorthand-independent tooltip'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A4(
														_debois$elm_mdl$Material_Tooltip$view,
														_debois$elm_mdl$Demo_Tooltip$TooltipMsg,
														model.tooltip,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Tooltip$large,
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('No shorthand!'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											},
											'Hover to see a tooltip using built using only classic TEA.',
											'\n        [ span\n            [ Tooltip.onEnter TooltipMsg\n            , Tooltip.onLeave TooltipMsg\n            ]\n            [ text \"Shorthand-independent tooltip\" ]\n            ]\n        , Tooltip.view TooltipMsg model.tooltip\n            [ Tooltip.large ]\n            [ text \"No shorthand!\" ]\n        ]\n\n        -- TooltipMsg must be dispatched in update.\n        '),
										_1: {
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Demo_Tooltip$demoTooltip,
												{
													ctor: '::',
													_0: A2(
														_debois$elm_mdl$Material_Icon$view,
														'face',
														{
															ctor: '::',
															_0: A2(
																_debois$elm_mdl$Material_Tooltip$attach,
																_debois$elm_mdl$Demo_Tooltip$Mdl,
																{
																	ctor: '::',
																	_0: 4,
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A5(
															_debois$elm_mdl$Material_Tooltip$render,
															_debois$elm_mdl$Demo_Tooltip$Mdl,
															{
																ctor: '::',
																_0: 4,
																_1: {ctor: '[]'}
															},
															model.mdl,
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_Tooltip$large,
																_1: {
																	ctor: '::',
																	_0: _debois$elm_mdl$Material_Tooltip$top,
																	_1: {
																		ctor: '::',
																		_0: _debois$elm_mdl$Material_Tooltip$element(_elm_lang$html$Html$span),
																		_1: {ctor: '[]'}
																	}
																}
															},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$img,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$src('assets/images/elm.png'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$width(24),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$height(24),
																				_1: {ctor: '[]'}
																			}
																		}
																	},
																	{ctor: '[]'}),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html$text(' Elm'),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													}
												},
												'Hover to see a with both image and text.',
												'\n        [ Icon.view \"face\"\n            [ Tooltip.attach Mdl [4] ]\n        , Tooltip.render Mdl [4] model.mdl\n            [ Tooltip.large\n            , Tooltip.top\n            , Tooltip.container Html.span\n            ]\n              [ img [src \"assets/elm.png\", width 24, height 24] []\n              , text \" Elm\"\n              ]\n        ]\n        '),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Tooltip$NoOp = {ctor: 'NoOp'};

var _debois$elm_mdl$Demo_Typography$example = F2(
	function (title, adjustMargin) {
		return A3(
			_debois$elm_mdl$Material_Options$styled,
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _debois$elm_mdl$Material_Options$cs('demo-typography--section'),
				_1: {
					ctor: '::',
					_0: A2(_debois$elm_mdl$Material_Options$css, 'margin', '24px'),
					_1: {
						ctor: '::',
						_0: A2(_debois$elm_mdl$Material_Options$css, 'padding', '24px'),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material_Options$css, 'border', '1px solid #ddd'),
							_1: {
								ctor: '::',
								_0: _debois$elm_mdl$Material_Typography$typography,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$h2,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Typography$display1,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(title),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_debois$elm_mdl$Material_Options$styled,
						_elm_lang$html$Html$h1,
						{
							ctor: '::',
							_0: _debois$elm_mdl$Material_Typography$display4,
							_1: {
								ctor: '::',
								_0: adjustMargin,
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Display 4'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_debois$elm_mdl$Material_Options$styled,
							_elm_lang$html$Html$h1,
							{
								ctor: '::',
								_0: _debois$elm_mdl$Material_Typography$display3,
								_1: {
									ctor: '::',
									_0: adjustMargin,
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Display 3'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_debois$elm_mdl$Material_Options$styled,
								_elm_lang$html$Html$h1,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Typography$display2,
									_1: {
										ctor: '::',
										_0: adjustMargin,
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Display 2'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A3(
									_debois$elm_mdl$Material_Options$styled,
									_elm_lang$html$Html$h1,
									{
										ctor: '::',
										_0: _debois$elm_mdl$Material_Typography$display1,
										_1: {
											ctor: '::',
											_0: adjustMargin,
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Display 1'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A3(
										_debois$elm_mdl$Material_Options$styled,
										_elm_lang$html$Html$h1,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Typography$headline,
											_1: {
												ctor: '::',
												_0: adjustMargin,
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Headline'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A3(
											_debois$elm_mdl$Material_Options$styled,
											_elm_lang$html$Html$h2,
											{
												ctor: '::',
												_0: _debois$elm_mdl$Material_Typography$title,
												_1: {
													ctor: '::',
													_0: adjustMargin,
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Title'),
												_1: {
													ctor: '::',
													_0: A3(
														_debois$elm_mdl$Material_Options$styled,
														_elm_lang$html$Html$span,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Typography$caption,
															_1: {
																ctor: '::',
																_0: adjustMargin,
																_1: {ctor: '[]'}
															}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Caption.'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A3(
												_debois$elm_mdl$Material_Options$styled,
												_elm_lang$html$Html$h3,
												{
													ctor: '::',
													_0: _debois$elm_mdl$Material_Typography$subheading2,
													_1: {
														ctor: '::',
														_0: adjustMargin,
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Subheading 2'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A3(
													_debois$elm_mdl$Material_Options$styled,
													_elm_lang$html$Html$h4,
													{
														ctor: '::',
														_0: _debois$elm_mdl$Material_Typography$subheading1,
														_1: {
															ctor: '::',
															_0: adjustMargin,
															_1: {ctor: '[]'}
														}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Subheading 1'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A3(
														_debois$elm_mdl$Material_Options$styled,
														_elm_lang$html$Html$p,
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Typography$body2,
															_1: {
																ctor: '::',
																_0: adjustMargin,
																_1: {ctor: '[]'}
															}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur\n      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur.'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A3(
															_debois$elm_mdl$Material_Options$styled,
															_elm_lang$html$Html$aside,
															{
																ctor: '::',
																_0: _debois$elm_mdl$Material_Typography$body2,
																_1: {
																	ctor: '::',
																	_0: adjustMargin,
																	_1: {ctor: '[]'}
																}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Body 2 text, calling something out.'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _debois$elm_mdl$Demo_Typography$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(_debois$elm_mdl$Demo_Typography$example, 'Styles', _debois$elm_mdl$Material_Options$nop),
			_1: {
				ctor: '::',
				_0: A2(_debois$elm_mdl$Demo_Typography$example, 'Styles with margin adjustments', _debois$elm_mdl$Material_Typography$adjustMargin),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Demo_Typography$model = {mdl: _debois$elm_mdl$Material$model};
var _debois$elm_mdl$Demo_Typography$Model = function (a) {
	return {mdl: a};
};
var _debois$elm_mdl$Demo_Typography$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Demo_Typography$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Demo_Typography$Mdl, _p0._0, model);
	});

var _elm_lang$html$Html_Lazy$lazy3 = _elm_lang$virtual_dom$VirtualDom$lazy3;
var _elm_lang$html$Html_Lazy$lazy2 = _elm_lang$virtual_dom$VirtualDom$lazy2;
var _elm_lang$html$Html_Lazy$lazy = _elm_lang$virtual_dom$VirtualDom$lazy;

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _sporto$erl$Erl$appendPathSegments = F2(
	function (segments, url) {
		var newPath = A2(_elm_lang$core$List$append, url.path, segments);
		return _elm_lang$core$Native_Utils.update(
			url,
			{path: newPath});
	});
var _sporto$erl$Erl$removeQuery = F2(
	function (key, url) {
		var updated = A2(_elm_lang$core$Dict$remove, key, url.query);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$setQuery = F3(
	function (key, val, url) {
		var updated = A2(_elm_lang$core$Dict$singleton, key, val);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$addQuery = F3(
	function (key, val, url) {
		var updated = _elm_lang$core$String$isEmpty(val) ? A2(_elm_lang$core$Dict$remove, key, url.query) : A3(_elm_lang$core$Dict$insert, key, val, url.query);
		return _elm_lang$core$Native_Utils.update(
			url,
			{query: updated});
	});
var _sporto$erl$Erl$clearQuery = function (url) {
	return _elm_lang$core$Native_Utils.update(
		url,
		{query: _elm_lang$core$Dict$empty});
};
var _sporto$erl$Erl$new = {
	protocol: '',
	username: '',
	password: '',
	host: {ctor: '[]'},
	path: {ctor: '[]'},
	hasLeadingSlash: false,
	hasTrailingSlash: false,
	port_: 0,
	hash: '',
	query: _elm_lang$core$Dict$empty
};
var _sporto$erl$Erl$hashToString = function (url) {
	return _elm_lang$core$String$isEmpty(url.hash) ? '' : A2(_elm_lang$core$Basics_ops['++'], '#', url.hash);
};
var _sporto$erl$Erl$trailingSlashComponent = function (url) {
	return _elm_lang$core$Native_Utils.eq(url.hasTrailingSlash, true) ? '/' : '';
};
var _sporto$erl$Erl$portComponent = function (url) {
	var _p0 = url.port_;
	switch (_p0) {
		case 0:
			return '';
		case 80:
			return '';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				':',
				_elm_lang$core$Basics$toString(url.port_));
	}
};
var _sporto$erl$Erl$hostComponent = function (url) {
	return _elm_lang$http$Http$encodeUri(
		A2(_elm_lang$core$String$join, '.', url.host));
};
var _sporto$erl$Erl$pathComponent = function (url) {
	var leadingSlash = ((!_elm_lang$core$Native_Utils.eq(
		_sporto$erl$Erl$hostComponent(url),
		'')) || url.hasLeadingSlash) ? '/' : '';
	var encoded = A2(_elm_lang$core$List$map, _elm_lang$http$Http$encodeUri, url.path);
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(url.path),
		0) ? '' : A2(
		_elm_lang$core$Basics_ops['++'],
		leadingSlash,
		A2(_elm_lang$core$String$join, '/', encoded));
};
var _sporto$erl$Erl$protocolComponent = function (url) {
	var _p1 = url.protocol;
	if (_p1 === '') {
		return '';
	} else {
		return A2(_elm_lang$core$Basics_ops['++'], url.protocol, '://');
	}
};
var _sporto$erl$Erl$queryToString = function (url) {
	var tuples = _elm_lang$core$Dict$toList(url.query);
	var encodedTuples = A2(
		_elm_lang$core$List$map,
		function (_p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$http$Http$encodeUri(_p3._0),
				_1: _elm_lang$http$Http$encodeUri(_p3._1)
			};
		},
		tuples);
	var parts = A2(
		_elm_lang$core$List$map,
		function (_p4) {
			var _p5 = _p4;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p5._0,
				A2(_elm_lang$core$Basics_ops['++'], '=', _p5._1));
		},
		encodedTuples);
	return _elm_lang$core$Dict$isEmpty(url.query) ? '' : A2(
		_elm_lang$core$Basics_ops['++'],
		'?',
		A2(_elm_lang$core$String$join, '&', parts));
};
var _sporto$erl$Erl$toString = function (url) {
	var hash = _sporto$erl$Erl$hashToString(url);
	var query_ = _sporto$erl$Erl$queryToString(url);
	var trailingSlash_ = _sporto$erl$Erl$trailingSlashComponent(url);
	var path_ = _sporto$erl$Erl$pathComponent(url);
	var port_ = _sporto$erl$Erl$portComponent(url);
	var host_ = _sporto$erl$Erl$hostComponent(url);
	var protocol_ = _sporto$erl$Erl$protocolComponent(url);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		protocol_,
		A2(
			_elm_lang$core$Basics_ops['++'],
			host_,
			A2(
				_elm_lang$core$Basics_ops['++'],
				port_,
				A2(
					_elm_lang$core$Basics_ops['++'],
					path_,
					A2(
						_elm_lang$core$Basics_ops['++'],
						trailingSlash_,
						A2(_elm_lang$core$Basics_ops['++'], query_, hash))))));
};
var _sporto$erl$Erl$queryStringElementToTuple = function (element) {
	var splitted = A2(_elm_lang$core$String$split, '=', element);
	var first = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(splitted));
	var firstDecoded = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$http$Http$decodeUri(first));
	var second = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, splitted)));
	var secondDecoded = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$http$Http$decodeUri(second));
	return {ctor: '_Tuple2', _0: firstDecoded, _1: secondDecoded};
};
var _sporto$erl$Erl$queryTuples = function (queryString) {
	var splitted = A2(_elm_lang$core$String$split, '&', queryString);
	return _elm_lang$core$String$isEmpty(queryString) ? {ctor: '[]'} : A2(_elm_lang$core$List$map, _sporto$erl$Erl$queryStringElementToTuple, splitted);
};
var _sporto$erl$Erl$parseQuery = function (str) {
	return _elm_lang$core$Dict$fromList(
		_sporto$erl$Erl$queryTuples(str));
};
var _sporto$erl$Erl$extractQuery = function (str) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$String$split,
				'#',
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$drop,
							1,
							A2(_elm_lang$core$String$split, '?', str)))))));
};
var _sporto$erl$Erl$queryFromAll = function (all) {
	return _sporto$erl$Erl$parseQuery(
		_sporto$erl$Erl$extractQuery(all));
};
var _sporto$erl$Erl$extractHash = function (str) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$drop,
				1,
				A2(_elm_lang$core$String$split, '#', str))));
};
var _sporto$erl$Erl$hashFromAll = function (str) {
	return _sporto$erl$Erl$extractHash(str);
};
var _sporto$erl$Erl$parseHost = function (str) {
	return A2(_elm_lang$core$String$split, '.', str);
};
var _sporto$erl$Erl$extractProtocol = function (str) {
	var parts = A2(_elm_lang$core$String$split, '://', str);
	var _p6 = _elm_lang$core$List$length(parts);
	if (_p6 === 1) {
		return '';
	} else {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(parts));
	}
};
var _sporto$erl$Erl$extractPort = function (str) {
	var rx = _elm_lang$core$Regex$regex(':\\d+');
	var res = A3(
		_elm_lang$core$Regex$find,
		_elm_lang$core$Regex$AtMost(1),
		rx,
		str);
	return function (result) {
		var _p7 = result;
		if (_p7.ctor === 'Ok') {
			return _p7._0;
		} else {
			var _p8 = _sporto$erl$Erl$extractProtocol(str);
			switch (_p8) {
				case 'http':
					return 80;
				case 'https':
					return 443;
				case 'ftp':
					return 21;
				case 'sftp':
					return 22;
				default:
					return 0;
			}
		}
	}(
		_elm_lang$core$String$toInt(
			A2(
				_elm_lang$core$String$dropLeft,
				1,
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$map,
							function (_) {
								return _.match;
							},
							res))))));
};
var _sporto$erl$Erl$leftFrom = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		var head = _elm_lang$core$List$head(parts);
		var _p9 = _elm_lang$core$List$length(parts);
		switch (_p9) {
			case 0:
				return '';
			case 1:
				return '';
			default:
				return A2(_elm_lang$core$Maybe$withDefault, '', head);
		}
	});
var _sporto$erl$Erl$leftFromOrSame = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(parts));
	});
var _sporto$erl$Erl$rightFromOrSame = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				_elm_lang$core$List$reverse(parts)));
	});
var _sporto$erl$Erl$extractHost = function (str) {
	var localhostRx = 'localhost';
	var dotsRx = '((\\w|-)+\\.)+(\\w|-)+';
	var rx = A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			dotsRx,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'|',
				A2(_elm_lang$core$Basics_ops['++'], localhostRx, ')'))));
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.match;
				},
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(rx),
					A2(
						_sporto$erl$Erl$leftFromOrSame,
						'/',
						A2(_sporto$erl$Erl$rightFromOrSame, '//', str))))));
};
var _sporto$erl$Erl$host = function (str) {
	return _sporto$erl$Erl$parseHost(
		_sporto$erl$Erl$extractHost(str));
};
var _sporto$erl$Erl$extractPath = function (str) {
	var host = _sporto$erl$Erl$extractHost(str);
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$AtMost(1),
		_elm_lang$core$Regex$regex(':\\d+'),
		function (_p10) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$AtMost(1),
			_elm_lang$core$Regex$regex(host),
			function (_p11) {
				return '';
			},
			A2(
				_sporto$erl$Erl$leftFromOrSame,
				'#',
				A2(
					_sporto$erl$Erl$leftFromOrSame,
					'?',
					A2(_sporto$erl$Erl$rightFromOrSame, '//', str)))));
};
var _sporto$erl$Erl$hasLeadingSlashFromAll = function (str) {
	return A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^/'),
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$hasTrailingSlashFromAll = function (str) {
	return A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('/$'),
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$rightFrom = F2(
	function (delimiter, str) {
		var parts = A2(_elm_lang$core$String$split, delimiter, str);
		var _p12 = _elm_lang$core$List$length(parts);
		switch (_p12) {
			case 0:
				return '';
			case 1:
				return '';
			default:
				return A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(parts)));
		}
	});
var _sporto$erl$Erl$notEmpty = function (str) {
	return !_elm_lang$core$String$isEmpty(str);
};
var _sporto$erl$Erl$parsePath = function (str) {
	return A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Maybe$withDefault(''),
		A2(
			_elm_lang$core$List$map,
			_elm_lang$http$Http$decodeUri,
			A2(
				_elm_lang$core$List$filter,
				_sporto$erl$Erl$notEmpty,
				A2(_elm_lang$core$String$split, '/', str))));
};
var _sporto$erl$Erl$pathFromAll = function (str) {
	return _sporto$erl$Erl$parsePath(
		_sporto$erl$Erl$extractPath(str));
};
var _sporto$erl$Erl$parse = function (str) {
	return {
		host: _sporto$erl$Erl$host(str),
		hash: _sporto$erl$Erl$hashFromAll(str),
		password: '',
		path: _sporto$erl$Erl$pathFromAll(str),
		hasLeadingSlash: _sporto$erl$Erl$hasLeadingSlashFromAll(str),
		hasTrailingSlash: _sporto$erl$Erl$hasTrailingSlashFromAll(str),
		port_: _sporto$erl$Erl$extractPort(str),
		protocol: _sporto$erl$Erl$extractProtocol(str),
		query: _sporto$erl$Erl$queryFromAll(str),
		username: ''
	};
};
var _sporto$erl$Erl$Url = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {protocol: a, username: b, password: c, host: d, port_: e, path: f, hasLeadingSlash: g, hasTrailingSlash: h, hash: i, query: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _rgrempel$elm_route_url$RouteUrl$url2path = function (url) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'/',
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$String$join, '/', url.path),
			(url.hasTrailingSlash && (!_elm_lang$core$List$isEmpty(url.path))) ? '/' : ''));
};
var _rgrempel$elm_route_url$RouteUrl$eqUrl = F2(
	function (u1, u2) {
		return _elm_lang$core$Native_Utils.eq(u1.path, u2.path) && (_elm_lang$core$Native_Utils.eq(u1.hasTrailingSlash, u2.hasTrailingSlash) && (_elm_lang$core$Native_Utils.eq(u1.hash, u2.hash) && _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Dict$toList(u1.query),
			_elm_lang$core$Dict$toList(u2.query))));
	});
var _rgrempel$elm_route_url$RouteUrl$checkDistinctUrl = F2(
	function (old, $new) {
		return A2(
			_rgrempel$elm_route_url$RouteUrl$eqUrl,
			_sporto$erl$Erl$parse($new.url),
			old) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just($new);
	});
var _rgrempel$elm_route_url$RouteUrl$mapUrl = F2(
	function (func, c1) {
		return _elm_lang$core$Native_Utils.update(
			c1,
			{
				url: func(c1.url)
			});
	});
var _rgrempel$elm_route_url$RouteUrl$normalizeUrl = F2(
	function (old, change) {
		return A2(
			_rgrempel$elm_route_url$RouteUrl$mapUrl,
			A2(_elm_lang$core$String$startsWith, '?', change.url) ? function (url) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_rgrempel$elm_route_url$RouteUrl$url2path(old),
					url);
			} : (A2(_elm_lang$core$String$startsWith, '#', change.url) ? function (url) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_rgrempel$elm_route_url$RouteUrl$url2path(old),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_sporto$erl$Erl$queryToString(old),
						url));
			} : function (url) {
				return url;
			}),
			change);
	});
var _rgrempel$elm_route_url$RouteUrl$urlChange2Cmd = function (change) {
	return function () {
		var _p0 = change.entry;
		if (_p0.ctor === 'NewEntry') {
			return _elm_lang$navigation$Navigation$newUrl;
		} else {
			return _elm_lang$navigation$Navigation$modifyUrl;
		}
	}()(change.url);
};
var _rgrempel$elm_route_url$RouteUrl$runNavigationAppWithFlags = function (app) {
	return A2(
		_elm_lang$navigation$Navigation$programWithFlags,
		app.locationToMessage,
		{init: app.init, update: app.update, view: app.view, subscriptions: app.subscriptions});
};
var _rgrempel$elm_route_url$RouteUrl$runNavigationApp = function (app) {
	return A2(
		_elm_lang$navigation$Navigation$program,
		app.locationToMessage,
		{init: app.init, update: app.update, view: app.view, subscriptions: app.subscriptions});
};
var _rgrempel$elm_route_url$RouteUrl$unwrapMsg = F3(
	function (handleLocation, handleUserMsg, wrapped) {
		var _p1 = wrapped;
		if (_p1.ctor === 'RouterMsg') {
			return handleLocation(_p1._0);
		} else {
			return handleUserMsg(_p1._0);
		}
	});
var _rgrempel$elm_route_url$RouteUrl$unwrapModel = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _rgrempel$elm_route_url$RouteUrl$appWithFlags2Common = function (app) {
	return {delta2url: app.delta2url, location2messages: app.location2messages, update: app.update, subscriptions: app.subscriptions, view: app.view};
};
var _rgrempel$elm_route_url$RouteUrl$app2Common = function (app) {
	return {delta2url: app.delta2url, location2messages: app.location2messages, update: app.update, subscriptions: app.subscriptions, view: app.view};
};
var _rgrempel$elm_route_url$RouteUrl$App = F6(
	function (a, b, c, d, e, f) {
		return {delta2url: a, location2messages: b, init: c, update: d, subscriptions: e, view: f};
	});
var _rgrempel$elm_route_url$RouteUrl$AppWithFlags = F6(
	function (a, b, c, d, e, f) {
		return {delta2url: a, location2messages: b, init: c, update: d, subscriptions: e, view: f};
	});
var _rgrempel$elm_route_url$RouteUrl$AppCommon = F5(
	function (a, b, c, d, e) {
		return {delta2url: a, location2messages: b, update: c, subscriptions: d, view: e};
	});
var _rgrempel$elm_route_url$RouteUrl$UrlChange = F2(
	function (a, b) {
		return {entry: a, url: b};
	});
var _rgrempel$elm_route_url$RouteUrl$RouterModel = F2(
	function (a, b) {
		return {reportedUrl: a, expectedUrlChanges: b};
	});
var _rgrempel$elm_route_url$RouteUrl$NavigationApp = F5(
	function (a, b, c, d, e) {
		return {locationToMessage: a, init: b, update: c, view: d, subscriptions: e};
	});
var _rgrempel$elm_route_url$RouteUrl$NavigationAppWithFlags = F5(
	function (a, b, c, d, e) {
		return {locationToMessage: a, init: b, update: c, view: d, subscriptions: e};
	});
var _rgrempel$elm_route_url$RouteUrl$ModifyEntry = {ctor: 'ModifyEntry'};
var _rgrempel$elm_route_url$RouteUrl$NewEntry = {ctor: 'NewEntry'};
var _rgrempel$elm_route_url$RouteUrl$WrappedModel = F2(
	function (a, b) {
		return {ctor: 'WrappedModel', _0: a, _1: b};
	});
var _rgrempel$elm_route_url$RouteUrl$mapModel = F2(
	function (mapper, _p4) {
		var _p5 = _p4;
		return A2(
			_rgrempel$elm_route_url$RouteUrl$WrappedModel,
			mapper(_p5._0),
			_p5._1);
	});
var _rgrempel$elm_route_url$RouteUrl$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _rgrempel$elm_route_url$RouteUrl$wrapUserMsg = _rgrempel$elm_route_url$RouteUrl$UserMsg;
var _rgrempel$elm_route_url$RouteUrl$view = F2(
	function (app, _p6) {
		var _p7 = _p6;
		return A2(
			_elm_lang$html$Html$map,
			_rgrempel$elm_route_url$RouteUrl$UserMsg,
			app.view(_p7._0));
	});
var _rgrempel$elm_route_url$RouteUrl$subscriptions = F2(
	function (app, _p8) {
		var _p9 = _p8;
		return A2(
			_elm_lang$core$Platform_Sub$map,
			_rgrempel$elm_route_url$RouteUrl$UserMsg,
			app.subscriptions(_p9._0));
	});
var _rgrempel$elm_route_url$RouteUrl$initWithFlags = F4(
	function (appInit, app, flags, location) {
		var routerModel = {
			expectedUrlChanges: 0,
			reportedUrl: _sporto$erl$Erl$parse(location.href)
		};
		var _p10 = A3(
			_ccapndave$elm_update_extra$Update_Extra$sequence,
			app.update,
			app.location2messages(location),
			appInit(flags));
		var userModel = _p10._0;
		var command = _p10._1;
		return {
			ctor: '_Tuple2',
			_0: A2(_rgrempel$elm_route_url$RouteUrl$WrappedModel, userModel, routerModel),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _rgrempel$elm_route_url$RouteUrl$UserMsg, command)
		};
	});
var _rgrempel$elm_route_url$RouteUrl$init = F3(
	function (appInit, app, location) {
		var routerModel = {
			expectedUrlChanges: 0,
			reportedUrl: _sporto$erl$Erl$parse(location.href)
		};
		var _p11 = A3(
			_ccapndave$elm_update_extra$Update_Extra$sequence,
			app.update,
			app.location2messages(location),
			appInit);
		var userModel = _p11._0;
		var command = _p11._1;
		return {
			ctor: '_Tuple2',
			_0: A2(_rgrempel$elm_route_url$RouteUrl$WrappedModel, userModel, routerModel),
			_1: A2(_elm_lang$core$Platform_Cmd$map, _rgrempel$elm_route_url$RouteUrl$UserMsg, command)
		};
	});
var _rgrempel$elm_route_url$RouteUrl$update = F3(
	function (app, msg, _p12) {
		var _p13 = _p12;
		var _p21 = _p13._0;
		var _p20 = _p13._1;
		var _p14 = msg;
		if (_p14.ctor === 'RouterMsg') {
			var _p16 = _p14._0;
			var newRouterModel = {
				reportedUrl: _sporto$erl$Erl$parse(_p16.href),
				expectedUrlChanges: (_elm_lang$core$Native_Utils.cmp(_p20.expectedUrlChanges, 0) > 0) ? (_p20.expectedUrlChanges - 1) : 0
			};
			if (_elm_lang$core$Native_Utils.cmp(_p20.expectedUrlChanges, 0) > 0) {
				return {
					ctor: '_Tuple2',
					_0: A2(_rgrempel$elm_route_url$RouteUrl$WrappedModel, _p21, newRouterModel),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			} else {
				var _p15 = A3(
					_ccapndave$elm_update_extra$Update_Extra$sequence,
					app.update,
					app.location2messages(_p16),
					{ctor: '_Tuple2', _0: _p21, _1: _elm_lang$core$Platform_Cmd$none});
				var newUserModel = _p15._0;
				var commands = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_rgrempel$elm_route_url$RouteUrl$WrappedModel, newUserModel, newRouterModel),
					_1: A2(_elm_lang$core$Platform_Cmd$map, _rgrempel$elm_route_url$RouteUrl$UserMsg, commands)
				};
			}
		} else {
			var _p17 = A2(app.update, _p14._0, _p21);
			var newUserModel = _p17._0;
			var userCommand = _p17._1;
			var maybeUrlChange = A2(
				_elm_lang$core$Maybe$andThen,
				_rgrempel$elm_route_url$RouteUrl$checkDistinctUrl(_p20.reportedUrl),
				A2(
					_elm_lang$core$Maybe$map,
					_rgrempel$elm_route_url$RouteUrl$normalizeUrl(_p20.reportedUrl),
					A2(app.delta2url, _p21, newUserModel)));
			var _p18 = maybeUrlChange;
			if (_p18.ctor === 'Just') {
				var _p19 = _p18._0;
				return {
					ctor: '_Tuple2',
					_0: A2(
						_rgrempel$elm_route_url$RouteUrl$WrappedModel,
						newUserModel,
						{
							reportedUrl: _sporto$erl$Erl$parse(_p19.url),
							expectedUrlChanges: _p20.expectedUrlChanges + 1
						}),
					_1: A2(
						_elm_lang$core$Platform_Cmd$map,
						_rgrempel$elm_route_url$RouteUrl$UserMsg,
						_elm_lang$core$Platform_Cmd$batch(
							{
								ctor: '::',
								_0: _rgrempel$elm_route_url$RouteUrl$urlChange2Cmd(_p19),
								_1: {
									ctor: '::',
									_0: userCommand,
									_1: {ctor: '[]'}
								}
							}))
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: A2(_rgrempel$elm_route_url$RouteUrl$WrappedModel, newUserModel, _p20),
					_1: A2(_elm_lang$core$Platform_Cmd$map, _rgrempel$elm_route_url$RouteUrl$UserMsg, userCommand)
				};
			}
		}
	});
var _rgrempel$elm_route_url$RouteUrl$RouterMsg = function (a) {
	return {ctor: 'RouterMsg', _0: a};
};
var _rgrempel$elm_route_url$RouteUrl$wrapLocation = _rgrempel$elm_route_url$RouteUrl$RouterMsg;
var _rgrempel$elm_route_url$RouteUrl$navigationApp = function (app) {
	var common = _rgrempel$elm_route_url$RouteUrl$app2Common(app);
	return {
		locationToMessage: _rgrempel$elm_route_url$RouteUrl$RouterMsg,
		init: A2(_rgrempel$elm_route_url$RouteUrl$init, app.init, common),
		update: _rgrempel$elm_route_url$RouteUrl$update(common),
		view: _rgrempel$elm_route_url$RouteUrl$view(common),
		subscriptions: _rgrempel$elm_route_url$RouteUrl$subscriptions(common)
	};
};
var _rgrempel$elm_route_url$RouteUrl$program = function (_p22) {
	return _rgrempel$elm_route_url$RouteUrl$runNavigationApp(
		_rgrempel$elm_route_url$RouteUrl$navigationApp(_p22));
};
var _rgrempel$elm_route_url$RouteUrl$navigationAppWithFlags = function (app) {
	var common = _rgrempel$elm_route_url$RouteUrl$appWithFlags2Common(app);
	return {
		locationToMessage: _rgrempel$elm_route_url$RouteUrl$RouterMsg,
		init: A2(_rgrempel$elm_route_url$RouteUrl$initWithFlags, app.init, common),
		update: _rgrempel$elm_route_url$RouteUrl$update(common),
		view: _rgrempel$elm_route_url$RouteUrl$view(common),
		subscriptions: _rgrempel$elm_route_url$RouteUrl$subscriptions(common)
	};
};
var _rgrempel$elm_route_url$RouteUrl$programWithFlags = function (_p23) {
	return _rgrempel$elm_route_url$RouteUrl$runNavigationAppWithFlags(
		_rgrempel$elm_route_url$RouteUrl$navigationAppWithFlags(_p23));
};

var _debois$elm_mdl$Main$stylesheet = _debois$elm_mdl$Material_Options$stylesheet('\n  /* The following line is better done in html. We keep it here for\n     compatibility with elm-reactor.\n   */\n  @import url(\"assets/highlight/github-gist.css\");\n\n  blockquote:before { content: none; }\n  blockquote:after { content: none; }\n  blockquote {\n    border-left-style: solid;\n    border-width: 1px;\n    padding-left: 1.3ex;\n    border-color: rgb(255,82,82);\n      /* Really need a way to specify \"secondary color\" in\n         inline css.\n       */\n    font-style: normal;\n  }\n  p, blockquote {\n    max-width: 40em;\n  }\n\n  pre {\n    display: inline-block;\n    box-sizing: border-box;\n    min-width: 100%;\n    padding-top: .5rem;\n    padding-bottom: 1rem;\n    padding-left:1rem;\n    margin: 0;\n  }\n  code {\n    font-family: \'Roboto Mono\';\n  }\n  .mdl-layout__header--transparent {\n    background: url(\'https://getmdl.io/assets/demos/transparent.jpg\') center / cover;\n  }\n  .mdl-layout__header--transparent .mdl-layout__drawer-button {\n    /* This background is dark, so we set text to white. Use 87% black instead if\n       your background is light. */\n    color: white;\n  }\n');
var _debois$elm_mdl$Main$e404 = function (_p0) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A3(
				_debois$elm_mdl$Material_Options$styled,
				_elm_lang$html$Html$h1,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Options$cs('mdl-typography--display-4'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('404'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _debois$elm_mdl$Main$nth = F2(
	function (k, xs) {
		return _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, k, xs));
	});
var _debois$elm_mdl$Main$model = {mdl: _debois$elm_mdl$Material$model, buttons: _debois$elm_mdl$Demo_Buttons$model, selects: _debois$elm_mdl$Demo_Selects$model, fabs: _debois$elm_mdl$Demo_Fabs$model, badges: _debois$elm_mdl$Demo_Badges$model, layoutGrid: _debois$elm_mdl$Demo_LayoutGrid$model, menus: _debois$elm_mdl$Demo_Menus$model, textfields: _debois$elm_mdl$Demo_Textfields$model, theme: _debois$elm_mdl$Demo_Theme$model, checkbox: _debois$elm_mdl$Demo_Checkbox$model, snackbar: _debois$elm_mdl$Demo_Snackbar$defaultModel, loading: _debois$elm_mdl$Demo_Loading$model, tooltip: _debois$elm_mdl$Demo_Tooltip$model, toolbar: _debois$elm_mdl$Demo_Toolbar$model, tabs: _debois$elm_mdl$Demo_Tabs$model, slider: _debois$elm_mdl$Demo_Slider$model, typography: _debois$elm_mdl$Demo_Typography$model, cards: _debois$elm_mdl$Demo_Cards$model, lists: _debois$elm_mdl$Demo_Lists$model, dialog: _debois$elm_mdl$Demo_Dialog$model, elevation: _debois$elm_mdl$Demo_Elevation$model, ripple: _debois$elm_mdl$Demo_Ripple$model, chips: _debois$elm_mdl$Demo_Chips$model, selectedTab: _elm_lang$core$Maybe$Nothing, transparentHeader: false, logMessages: false};
var _debois$elm_mdl$Main$scrollTop = _elm_lang$core$Native_Platform.outgoingPort(
	'scrollTop',
	function (v) {
		return null;
	});
var _debois$elm_mdl$Main$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return {mdl: a, buttons: b, selects: c, fabs: d, badges: e, layoutGrid: f, menus: g, textfields: h, theme: i, checkbox: j, snackbar: k, loading: l, tooltip: m, toolbar: n, tabs: o, slider: p, typography: q, cards: r, lists: s, dialog: t, elevation: u, ripple: v, chips: w, selectedTab: x, transparentHeader: y, logMessages: z};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _debois$elm_mdl$Main$ToggleLog = {ctor: 'ToggleLog'};
var _debois$elm_mdl$Main$ToggleHeader = {ctor: 'ToggleHeader'};
var _debois$elm_mdl$Main$ChipMsg = function (a) {
	return {ctor: 'ChipMsg', _0: a};
};
var _debois$elm_mdl$Main$RippleMsg = function (a) {
	return {ctor: 'RippleMsg', _0: a};
};
var _debois$elm_mdl$Main$ElevationMsg = function (a) {
	return {ctor: 'ElevationMsg', _0: a};
};
var _debois$elm_mdl$Main$DialogMsg = function (a) {
	return {ctor: 'DialogMsg', _0: a};
};
var _debois$elm_mdl$Main$ListsMsg = function (a) {
	return {ctor: 'ListsMsg', _0: a};
};
var _debois$elm_mdl$Main$CardsMsg = function (a) {
	return {ctor: 'CardsMsg', _0: a};
};
var _debois$elm_mdl$Main$TypographyMsg = function (a) {
	return {ctor: 'TypographyMsg', _0: a};
};
var _debois$elm_mdl$Main$SliderMsg = function (a) {
	return {ctor: 'SliderMsg', _0: a};
};
var _debois$elm_mdl$Main$TabMsg = function (a) {
	return {ctor: 'TabMsg', _0: a};
};
var _debois$elm_mdl$Main$ToolbarMsg = function (a) {
	return {ctor: 'ToolbarMsg', _0: a};
};
var _debois$elm_mdl$Main$TooltipMsg = function (a) {
	return {ctor: 'TooltipMsg', _0: a};
};
var _debois$elm_mdl$Main$LoadingMsg = function (a) {
	return {ctor: 'LoadingMsg', _0: a};
};
var _debois$elm_mdl$Main$CheckboxMsg = function (a) {
	return {ctor: 'CheckboxMsg', _0: a};
};
var _debois$elm_mdl$Main$SnackbarMsg = function (a) {
	return {ctor: 'SnackbarMsg', _0: a};
};
var _debois$elm_mdl$Main$ThemeMsg = function (a) {
	return {ctor: 'ThemeMsg', _0: a};
};
var _debois$elm_mdl$Main$SelectMsg = function (a) {
	return {ctor: 'SelectMsg', _0: a};
};
var _debois$elm_mdl$Main$TextfieldMsg = function (a) {
	return {ctor: 'TextfieldMsg', _0: a};
};
var _debois$elm_mdl$Main$MenusMsg = function (a) {
	return {ctor: 'MenusMsg', _0: a};
};
var _debois$elm_mdl$Main$LayoutGridMsg = function (a) {
	return {ctor: 'LayoutGridMsg', _0: a};
};
var _debois$elm_mdl$Main$FabsMsg = function (a) {
	return {ctor: 'FabsMsg', _0: a};
};
var _debois$elm_mdl$Main$ButtonsMsg = function (a) {
	return {ctor: 'ButtonsMsg', _0: a};
};
var _debois$elm_mdl$Main$tabs = {
	ctor: '::',
	_0: {
		ctor: '_Tuple3',
		_0: 'Buttons',
		_1: 'buttons',
		_2: function (_p1) {
			return A2(
				_elm_lang$html$Html$map,
				_debois$elm_mdl$Main$ButtonsMsg,
				_debois$elm_mdl$Demo_Buttons$view(
					function (_) {
						return _.buttons;
					}(_p1)));
		}
	},
	_1: {
		ctor: '::',
		_0: {
			ctor: '_Tuple3',
			_0: 'Card',
			_1: 'cards',
			_2: function (_p2) {
				return A2(
					_elm_lang$html$Html$map,
					_debois$elm_mdl$Main$CardsMsg,
					_debois$elm_mdl$Demo_Cards$view(
						function (_) {
							return _.cards;
						}(_p2)));
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: 'Checkbox',
				_1: 'checkbox',
				_2: function (_p3) {
					return A2(
						_elm_lang$html$Html$map,
						_debois$elm_mdl$Main$CheckboxMsg,
						_debois$elm_mdl$Demo_Checkbox$view(
							function (_) {
								return _.checkbox;
							}(_p3)));
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple3',
					_0: 'Dialog',
					_1: 'dialog',
					_2: function (_p4) {
						return A2(
							_elm_lang$html$Html$map,
							_debois$elm_mdl$Main$DialogMsg,
							_debois$elm_mdl$Demo_Dialog$view(
								function (_) {
									return _.dialog;
								}(_p4)));
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple3',
						_0: 'Elevation',
						_1: 'elevation',
						_2: function (_p5) {
							return A2(
								_elm_lang$html$Html$map,
								_debois$elm_mdl$Main$ElevationMsg,
								_debois$elm_mdl$Demo_Elevation$view(
									function (_) {
										return _.elevation;
									}(_p5)));
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple3',
							_0: 'Floating action button',
							_1: 'fab',
							_2: function (_p6) {
								return A2(
									_elm_lang$html$Html$map,
									_debois$elm_mdl$Main$FabsMsg,
									_debois$elm_mdl$Demo_Fabs$view(
										function (_) {
											return _.fabs;
										}(_p6)));
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple3',
								_0: 'Grid list',
								_1: 'grid-list',
								_2: _elm_lang$core$Basics$always(_debois$elm_mdl$Demo_GridList$view)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple3',
									_0: 'Layout grid',
									_1: 'layout-grid',
									_2: function (_p7) {
										return A2(
											_elm_lang$html$Html$map,
											_debois$elm_mdl$Main$LayoutGridMsg,
											_debois$elm_mdl$Demo_LayoutGrid$view(
												function (_) {
													return _.layoutGrid;
												}(_p7)));
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple3',
										_0: 'Lists',
										_1: 'lists',
										_2: function (_p8) {
											return A2(
												_elm_lang$html$Html$map,
												_debois$elm_mdl$Main$ListsMsg,
												_debois$elm_mdl$Demo_Lists$view(
													function (_) {
														return _.lists;
													}(_p8)));
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple3',
											_0: 'Ripple',
											_1: 'ripple',
											_2: function (_p9) {
												return A2(
													_elm_lang$html$Html$map,
													_debois$elm_mdl$Main$RippleMsg,
													_debois$elm_mdl$Demo_Ripple$view(
														function (_) {
															return _.ripple;
														}(_p9)));
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple3',
												_0: 'Select',
												_1: 'select',
												_2: function (_p10) {
													return A2(
														_elm_lang$html$Html$map,
														_debois$elm_mdl$Main$SelectMsg,
														_debois$elm_mdl$Demo_Selects$view(
															function (_) {
																return _.selects;
															}(_p10)));
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple3',
													_0: 'Simple Menu',
													_1: 'menus',
													_2: function (_p11) {
														return A2(
															_elm_lang$html$Html$map,
															_debois$elm_mdl$Main$MenusMsg,
															_debois$elm_mdl$Demo_Menus$view(
																function (_) {
																	return _.menus;
																}(_p11)));
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple3',
														_0: 'Snackbar',
														_1: 'snackbar',
														_2: function (_p12) {
															return A2(
																_elm_lang$html$Html$map,
																_debois$elm_mdl$Main$SnackbarMsg,
																_debois$elm_mdl$Demo_Snackbar$view(
																	function (_) {
																		return _.snackbar;
																	}(_p12)));
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple3',
															_0: 'Tabs',
															_1: 'tabs',
															_2: function (_p13) {
																return A2(
																	_elm_lang$html$Html$map,
																	_debois$elm_mdl$Main$TabMsg,
																	_debois$elm_mdl$Demo_Tabs$view(
																		function (_) {
																			return _.tabs;
																		}(_p13)));
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple3',
																_0: 'Textfields',
																_1: 'textfields',
																_2: function (_p14) {
																	return A2(
																		_elm_lang$html$Html$map,
																		_debois$elm_mdl$Main$TextfieldMsg,
																		_debois$elm_mdl$Demo_Textfields$view(
																			function (_) {
																				return _.textfields;
																			}(_p14)));
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple3',
																	_0: 'Theme',
																	_1: 'theme',
																	_2: function (_p15) {
																		return A2(
																			_elm_lang$html$Html$map,
																			_debois$elm_mdl$Main$ThemeMsg,
																			_debois$elm_mdl$Demo_Theme$view(
																				function (_) {
																					return _.theme;
																				}(_p15)));
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple3',
																		_0: 'Toolbar',
																		_1: 'toolbar',
																		_2: function (_p16) {
																			return A2(
																				_elm_lang$html$Html$map,
																				_debois$elm_mdl$Main$ToolbarMsg,
																				_debois$elm_mdl$Demo_Toolbar$view(
																					function (_) {
																						return _.toolbar;
																					}(_p16)));
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple3',
																			_0: 'Typography',
																			_1: 'typography',
																			_2: function (_p17) {
																				return A2(
																					_elm_lang$html$Html$map,
																					_debois$elm_mdl$Main$TypographyMsg,
																					_debois$elm_mdl$Demo_Typography$view(
																						function (_) {
																							return _.typography;
																						}(_p17)));
																			}
																		},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _debois$elm_mdl$Main$tabTitles = A2(
	_elm_lang$core$List$map,
	function (_p18) {
		var _p19 = _p18;
		return _elm_lang$html$Html$text(_p19._0);
	},
	_debois$elm_mdl$Main$tabs);
var _debois$elm_mdl$Main$tabViews = _elm_lang$core$Array$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p20) {
			var _p21 = _p20;
			return _p21._2;
		},
		_debois$elm_mdl$Main$tabs));
var _debois$elm_mdl$Main$tabUrls = _elm_lang$core$Array$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p22) {
			var _p23 = _p22;
			return _p23._1;
		},
		_debois$elm_mdl$Main$tabs));
var _debois$elm_mdl$Main$urlOf = function (model) {
	var _p24 = model.selectedTab;
	if (_p24.ctor === 'Nothing') {
		return '#';
	} else {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'#',
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Array$get, _p24._0, _debois$elm_mdl$Main$tabUrls)));
	}
};
var _debois$elm_mdl$Main$delta2url = F2(
	function (model1, model2) {
		return (!_elm_lang$core$Native_Utils.eq(model1.selectedTab, model2.selectedTab)) ? _elm_lang$core$Maybe$Just(
			{
				entry: _rgrempel$elm_route_url$RouteUrl$NewEntry,
				url: _debois$elm_mdl$Main$urlOf(model2)
			}) : _elm_lang$core$Maybe$Nothing;
	});
var _debois$elm_mdl$Main$urlTabs = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$indexedMap,
		F2(
			function (idx, _p25) {
				var _p26 = _p25;
				return {ctor: '_Tuple2', _0: _p26._1, _1: idx};
			}),
		_debois$elm_mdl$Main$tabs));
var _debois$elm_mdl$Main$BadgesMsg = function (a) {
	return {ctor: 'BadgesMsg', _0: a};
};
var _debois$elm_mdl$Main$Mdl = function (a) {
	return {ctor: 'Mdl', _0: a};
};
var _debois$elm_mdl$Main$update = F2(
	function (msg, model) {
		var log = function (msg) {
			return model.logMessages ? _elm_lang$core$Debug$log('Msg') : _elm_lang$core$Basics$identity;
		};
		var _p27 = A2(log, 'Msg', msg);
		switch (_p27.ctor) {
			case 'SelectTab':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							selectedTab: _elm_lang$core$Maybe$Just(_p27._0)
						}),
					{
						ctor: '::',
						_0: _debois$elm_mdl$Main$scrollTop(
							{ctor: '_Tuple0'}),
						_1: {ctor: '[]'}
					});
			case 'ClearTab':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{selectedTab: _elm_lang$core$Maybe$Nothing}),
					{
						ctor: '::',
						_0: _debois$elm_mdl$Main$scrollTop(
							{ctor: '_Tuple0'}),
						_1: {ctor: '[]'}
					});
			case 'ToggleHeader':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{transparentHeader: !model.transparentHeader}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ToggleLog':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{logMessages: !model.logMessages}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Mdl':
				return A3(_debois$elm_mdl$Material$update, _debois$elm_mdl$Main$Mdl, _p27._0, model);
			case 'ButtonsMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.buttons;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{buttons: x});
						}),
					_debois$elm_mdl$Main$ButtonsMsg,
					_debois$elm_mdl$Demo_Buttons$update,
					_p27._0,
					model);
			case 'FabsMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.fabs;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{fabs: x});
						}),
					_debois$elm_mdl$Main$FabsMsg,
					_debois$elm_mdl$Demo_Fabs$update,
					_p27._0,
					model);
			case 'BadgesMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.badges;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{badges: x});
						}),
					_debois$elm_mdl$Main$BadgesMsg,
					_debois$elm_mdl$Demo_Badges$update,
					_p27._0,
					model);
			case 'LayoutGridMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.layoutGrid;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{layoutGrid: x});
						}),
					_debois$elm_mdl$Main$LayoutGridMsg,
					_debois$elm_mdl$Demo_LayoutGrid$update,
					_p27._0,
					model);
			case 'MenusMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.menus;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{menus: x});
						}),
					_debois$elm_mdl$Main$MenusMsg,
					_debois$elm_mdl$Demo_Menus$update,
					_p27._0,
					model);
			case 'TextfieldMsg':
				return A2(
					_debois$elm_mdl$Material_Helpers$map2nd,
					_elm_lang$core$Platform_Cmd$map(_debois$elm_mdl$Main$TextfieldMsg),
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none},
						A2(
							_elm_lang$core$Maybe$map,
							_debois$elm_mdl$Material_Helpers$map1st(
								function (x) {
									return _elm_lang$core$Native_Utils.update(
										model,
										{textfields: x});
								}),
							A2(_debois$elm_mdl$Demo_Textfields$update, _p27._0, model.textfields))));
			case 'ThemeMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.theme;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{theme: x});
						}),
					_debois$elm_mdl$Main$ThemeMsg,
					_debois$elm_mdl$Demo_Theme$update,
					_p27._0,
					model);
			case 'SnackbarMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.snackbar;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{snackbar: x});
						}),
					_debois$elm_mdl$Main$SnackbarMsg,
					_debois$elm_mdl$Demo_Snackbar$update,
					_p27._0,
					model);
			case 'CheckboxMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.checkbox;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{checkbox: x});
						}),
					_debois$elm_mdl$Main$CheckboxMsg,
					_debois$elm_mdl$Demo_Checkbox$update,
					_p27._0,
					model);
			case 'LoadingMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.loading;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{loading: x});
						}),
					_debois$elm_mdl$Main$LoadingMsg,
					_debois$elm_mdl$Demo_Loading$update,
					_p27._0,
					model);
			case 'SliderMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.slider;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{slider: x});
						}),
					_debois$elm_mdl$Main$SliderMsg,
					_debois$elm_mdl$Demo_Slider$update,
					_p27._0,
					model);
			case 'TooltipMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.tooltip;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{tooltip: x});
						}),
					_debois$elm_mdl$Main$TooltipMsg,
					_debois$elm_mdl$Demo_Tooltip$update,
					_p27._0,
					model);
			case 'ToolbarMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.toolbar;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{toolbar: x});
						}),
					_debois$elm_mdl$Main$ToolbarMsg,
					_debois$elm_mdl$Demo_Toolbar$update,
					_p27._0,
					model);
			case 'TabMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.tabs;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{tabs: x});
						}),
					_debois$elm_mdl$Main$TabMsg,
					_debois$elm_mdl$Demo_Tabs$update,
					_p27._0,
					model);
			case 'TypographyMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.typography;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{typography: x});
						}),
					_debois$elm_mdl$Main$TypographyMsg,
					_debois$elm_mdl$Demo_Typography$update,
					_p27._0,
					model);
			case 'CardsMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.cards;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{cards: x});
						}),
					_debois$elm_mdl$Main$CardsMsg,
					_debois$elm_mdl$Demo_Cards$update,
					_p27._0,
					model);
			case 'ListsMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.lists;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{lists: x});
						}),
					_debois$elm_mdl$Main$ListsMsg,
					_debois$elm_mdl$Demo_Lists$update,
					_p27._0,
					model);
			case 'DialogMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.dialog;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{dialog: x});
						}),
					_debois$elm_mdl$Main$DialogMsg,
					_debois$elm_mdl$Demo_Dialog$update,
					_p27._0,
					model);
			case 'ElevationMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.elevation;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{elevation: x});
						}),
					_debois$elm_mdl$Main$ElevationMsg,
					_debois$elm_mdl$Demo_Elevation$update,
					_p27._0,
					model);
			case 'RippleMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.ripple;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{ripple: x});
						}),
					_debois$elm_mdl$Main$RippleMsg,
					_debois$elm_mdl$Demo_Ripple$update,
					_p27._0,
					model);
			case 'ChipMsg':
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.chips;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{chips: x});
						}),
					_debois$elm_mdl$Main$ChipMsg,
					_debois$elm_mdl$Demo_Chips$update,
					_p27._0,
					model);
			default:
				return A6(
					_debois$elm_mdl$Material_Helpers$lift,
					function (_) {
						return _.selects;
					},
					F2(
						function (m, x) {
							return _elm_lang$core$Native_Utils.update(
								m,
								{selects: x});
						}),
					_debois$elm_mdl$Main$SelectMsg,
					_debois$elm_mdl$Demo_Selects$update,
					_p27._0,
					model);
		}
	});
var _debois$elm_mdl$Main$ClearTab = {ctor: 'ClearTab'};
var _debois$elm_mdl$Main$SelectTab = function (a) {
	return {ctor: 'SelectTab', _0: a};
};
var _debois$elm_mdl$Main$view_ = function (model) {
	var title = function () {
		var _p28 = model.selectedTab;
		if (_p28.ctor === 'Nothing') {
			return _elm_lang$html$Html$text('Material Components Catalog');
		} else {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$html$Html$text(''),
				A2(_debois$elm_mdl$Main$nth, _p28._0, _debois$elm_mdl$Main$tabTitles));
		}
	}();
	var top = function () {
		var _p29 = model.selectedTab;
		if (_p29.ctor === 'Nothing') {
			return _debois$elm_mdl$Demo_Startpage$view(_debois$elm_mdl$Main$SelectTab);
		} else {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_debois$elm_mdl$Main$e404,
				A2(_elm_lang$core$Array$get, _p29._0, _debois$elm_mdl$Main$tabViews))(model);
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_debois$elm_mdl$Material_Toolbar$view,
				{
					ctor: '::',
					_0: _debois$elm_mdl$Material_Toolbar$fixed,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_debois$elm_mdl$Material_Toolbar$row,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_debois$elm_mdl$Material_Toolbar$section,
								{
									ctor: '::',
									_0: _debois$elm_mdl$Material_Toolbar$alignStart,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_debois$elm_mdl$Material_Toolbar$icon_,
										{
											ctor: '::',
											_0: _debois$elm_mdl$Material_Toolbar$menu,
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: function () {
												var _p30 = model.selectedTab;
												if (_p30.ctor === 'Nothing') {
													return A2(
														_elm_lang$html$Html$img,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$src('https://material-components-web.appspot.com/images/ic_component_24px_white.svg'),
															_1: {ctor: '[]'}
														},
														{ctor: '[]'});
												} else {
													return A2(
														_debois$elm_mdl$Material_Icon$view,
														'',
														{
															ctor: '::',
															_0: _debois$elm_mdl$Material_Options$onClick(_debois$elm_mdl$Main$ClearTab),
															_1: {
																ctor: '::',
																_0: A2(_debois$elm_mdl$Material_Options$css, 'cursor', 'pointer'),
																_1: {ctor: '[]'}
															}
														});
												}
											}(),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_debois$elm_mdl$Material_Toolbar$title,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: title,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_debois$elm_mdl$Material_Options$styled,
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _debois$elm_mdl$Material_Toolbar$fixedAdjust,
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: top,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _debois$elm_mdl$Main$view = _elm_lang$html$Html_Lazy$lazy(_debois$elm_mdl$Main$view_);
var _debois$elm_mdl$Main$location2messages = function (location) {
	return {
		ctor: '::',
		_0: function () {
			var _p31 = A2(_elm_lang$core$String$dropLeft, 1, location.hash);
			if (_p31 === '') {
				return _debois$elm_mdl$Main$ClearTab;
			} else {
				return _debois$elm_mdl$Main$SelectTab(
					A2(
						_elm_lang$core$Maybe$withDefault,
						-1,
						A2(_elm_lang$core$Dict$get, _p31, _debois$elm_mdl$Main$urlTabs)));
			}
		}(),
		_1: {ctor: '[]'}
	};
};
var _debois$elm_mdl$Main$main = _rgrempel$elm_route_url$RouteUrl$program(
	{
		delta2url: _debois$elm_mdl$Main$delta2url,
		location2messages: _debois$elm_mdl$Main$location2messages,
		init: {
			ctor: '_Tuple2',
			_0: _debois$elm_mdl$Main$model,
			_1: _debois$elm_mdl$Material$init(_debois$elm_mdl$Main$Mdl)
		},
		view: _debois$elm_mdl$Main$view,
		subscriptions: function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Platform_Sub$map,
						_debois$elm_mdl$Main$MenusMsg,
						A2(_debois$elm_mdl$Material_Menu$subs, _debois$elm_mdl$Demo_Menus$Mdl, model.menus.mdl)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Platform_Sub$map,
							_debois$elm_mdl$Main$SelectMsg,
							A2(_debois$elm_mdl$Material_Select$subs, _debois$elm_mdl$Demo_Selects$Mdl, model.selects.mdl)),
						_1: {
							ctor: '::',
							_0: A2(_debois$elm_mdl$Material$subscriptions, _debois$elm_mdl$Main$Mdl, model),
							_1: {ctor: '[]'}
						}
					}
				});
		},
		update: _debois$elm_mdl$Main$update
	})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _debois$elm_mdl$Main$main !== 'undefined') {
    _debois$elm_mdl$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

