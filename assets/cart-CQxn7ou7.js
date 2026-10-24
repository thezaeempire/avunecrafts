import {$ as e, I as t, K as n, Q as r, V as i, W as a, _ as o, a as s, c, et as l, f as u, g as d, l as f, n as p, o as m, p as h, t as g, w as ee, x as te} from "./useStore-BIgwMX88.js";
var ne = e((e => {
    var t = r();
    function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function i() {}
    var a = {
        d: {
            f: i,
            r: function() {
                throw Error(n(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for(`react.portal`);
    function s(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: r == null ? null : `` + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
        if (e === `font`)
            return ``;
        if (typeof t == `string`)
            return t === `use-credentials` ? t : ``
    }
    e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a,
    e.createPortal = function(e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
            throw Error(n(299));
        return s(e, t, null, r)
    }
    ,
    e.flushSync = function(e) {
        var t = c.T
          , n = a.p;
        try {
            if (c.T = null,
            a.p = 2,
            e)
                return e()
        } finally {
            c.T = t,
            a.p = n,
            a.d.f()
        }
    }
    ,
    e.preconnect = function(e, t) {
        typeof e == `string` && (t ? (t = t.crossOrigin,
        t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null,
        a.d.C(e, t))
    }
    ,
    e.prefetchDNS = function(e) {
        typeof e == `string` && a.d.D(e)
    }
    ,
    e.preinit = function(e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
            var n = t.as
              , r = l(n, t.crossOrigin)
              , i = typeof t.integrity == `string` ? t.integrity : void 0
              , o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
            n === `style` ? a.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o
            }) : n === `script` && a.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0
            })
        }
    }
    ,
    e.preinitModule = function(e, t) {
        if (typeof e == `string`)
            if (typeof t == `object` && t) {
                if (t.as == null || t.as === `script`) {
                    var n = l(t.as, t.crossOrigin);
                    a.d.M(e, {
                        crossOrigin: n,
                        integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                        nonce: typeof t.nonce == `string` ? t.nonce : void 0
                    })
                }
            } else
                t ?? a.d.M(e)
    }
    ,
    e.preload = function(e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
            var n = t.as
              , r = l(n, t.crossOrigin);
            a.d.L(e, n, {
                crossOrigin: r,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                type: typeof t.type == `string` ? t.type : void 0,
                fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
                referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
                imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
                imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
                media: typeof t.media == `string` ? t.media : void 0
            })
        }
    }
    ,
    e.preloadModule = function(e, t) {
        if (typeof e == `string`)
            if (t) {
                var n = l(t.as, t.crossOrigin);
                a.d.m(e, {
                    as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                    crossOrigin: n,
                    integrity: typeof t.integrity == `string` ? t.integrity : void 0
                })
            } else
                a.d.m(e)
    }
    ,
    e.requestFormReset = function(e) {
        a.d.r(e)
    }
    ,
    e.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }
    ,
    e.useFormState = function(e, t, n) {
        return c.H.useFormState(e, t, n)
    }
    ,
    e.useFormStatus = function() {
        return c.H.useHostTransitionStatus()
    }
    ,
    e.version = `19.2.5`
}
))
  , re = e(( (e, t) => {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
    }
    n(),
    t.exports = ne()
}
))
  , _ = `__TSS_CONTEXT`
  , ie = Symbol.for(`TSS_SERVER_FUNCTION`)
  , ae = Symbol.for(`TSS_SERVER_FUNCTION_FACTORY`)
  , oe = `application/x-tss-framed`
  , v = {
    JSON: 0,
    CHUNK: 1,
    END: 2,
    ERROR: 3
};
`${oe}`;
var se = /;\s*v=(\d+)/;
function ce(e) {
    let t = e.match(se);
    return t ? parseInt(t[1], 10) : void 0
}
function y(e) {
    let t = ce(e);
    if (t !== void 0 && t !== 1)
        throw Error(`Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`)
}
var le = () => window.__TSS_START_OPTIONS__
  , ue = `Error preloading route! ☝️`
  , de = (e => (e[e.AggregateError = 1] = `AggregateError`,
e[e.ArrowFunction = 2] = `ArrowFunction`,
e[e.ErrorPrototypeStack = 4] = `ErrorPrototypeStack`,
e[e.ObjectAssign = 8] = `ObjectAssign`,
e[e.BigIntTypedArray = 16] = `BigIntTypedArray`,
e[e.RegExp = 32] = `RegExp`,
e))(de || {})
  , b = Symbol.asyncIterator
  , fe = Symbol.hasInstance
  , pe = Symbol.isConcatSpreadable
  , x = Symbol.iterator
  , me = Symbol.match
  , he = Symbol.matchAll
  , ge = Symbol.replace
  , _e = Symbol.search
  , ve = Symbol.species
  , ye = Symbol.split
  , be = Symbol.toPrimitive
  , xe = Symbol.toStringTag
  , Se = Symbol.unscopables
  , Ce = {
    [b]: 0,
    [fe]: 1,
    [pe]: 2,
    [x]: 3,
    [me]: 4,
    [he]: 5,
    [ge]: 6,
    [_e]: 7,
    [ve]: 8,
    [ye]: 9,
    [be]: 10,
    [xe]: 11,
    [Se]: 12
}
  , we = {
    0: b,
    1: fe,
    2: pe,
    3: x,
    4: me,
    5: he,
    6: ge,
    7: _e,
    8: ve,
    9: ye,
    10: be,
    11: xe,
    12: Se
}
  , S = void 0
  , Te = {
    2: !0,
    3: !1,
    1: S,
    0: null,
    4: -0,
    5: 1 / 0,
    6: -1 / 0,
    7: NaN
}
  , Ee = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`
}
  , De = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function C(e, t, n, r, i, a, o, s, c, l, u, d) {
    return {
        t: e,
        i: t,
        s: n,
        c: r,
        m: i,
        p: a,
        e: o,
        a: s,
        f: c,
        b: l,
        o: u,
        l: d
    }
}
function w(e) {
    return C(2, S, e, S, S, S, S, S, S, S, S, S)
}
var Oe = w(2)
  , ke = w(3)
  , Ae = w(1)
  , je = w(0)
  , Me = w(4)
  , Ne = w(5)
  , Pe = w(6)
  , Fe = w(7);
function Ie(e) {
    switch (e) {
    case `"`:
        return `\\"`;
    case `\\`:
        return `\\\\`;
    case `
`:
        return `\\n`;
    case `\r`:
        return `\\r`;
    case `\b`:
        return `\\b`;
    case `	`:
        return `\\t`;
    case `\f`:
        return `\\f`;
    case `<`:
        return `\\x3C`;
    case `\u2028`:
        return `\\u2028`;
    case `\u2029`:
        return `\\u2029`;
    default:
        return S
    }
}
function Le(e) {
    let t = ``, n = 0, r;
    for (let i = 0, a = e.length; i < a; i++)
        r = Ie(e[i]),
        r && (t += e.slice(n, i) + r,
        n = i + 1);
    return n === 0 ? t = e : t += e.slice(n),
    t
}
function Re(e) {
    switch (e) {
    case `\\\\`:
        return `\\`;
    case `\\"`:
        return `"`;
    case `\\n`:
        return `
`;
    case `\\r`:
        return `\r`;
    case `\\b`:
        return `\b`;
    case `\\t`:
        return `	`;
    case `\\f`:
        return `\f`;
    case `\\x3C`:
        return `<`;
    case `\\u2028`:
        return `\u2028`;
    case `\\u2029`:
        return `\u2029`;
    default:
        return e
    }
}
function E(e) {
    return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Re)
}
var D = `__SEROVAL_REFS__`
  , ze = new Map
  , O = new Map;
function Be(e) {
    return ze.has(e)
}
function Ve(e) {
    return O.has(e)
}
function He(e) {
    if (Be(e))
        return ze.get(e);
    throw new At(e)
}
function Ue(e) {
    if (Ve(e))
        return O.get(e);
    throw new jt(e)
}
typeof globalThis < `u` ? Object.defineProperty(globalThis, D, {
    value: O,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < `u` ? Object.defineProperty(window, D, {
    value: O,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < `u` ? Object.defineProperty(self, D, {
    value: O,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < `u` && Object.defineProperty(global, D, {
    value: O,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function We(e) {
    return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0
}
function Ge(e) {
    let t = Ee[We(e)];
    return e.name === t ? e.constructor.name === t ? {} : {
        name: e.constructor.name
    } : {
        name: e.name
    }
}
function Ke(e, t) {
    let n = Ge(e)
      , r = Object.getOwnPropertyNames(e);
    for (let i = 0, a = r.length, o; i < a; i++)
        o = r[i],
        o !== `name` && o !== `message` && (o === `stack` ? t & 4 && (n ||= {},
        n[o] = e[o]) : (n ||= {},
        n[o] = e[o]));
    return n
}
function qe(e) {
    return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e)
}
function Je(e) {
    switch (e) {
    case 1 / 0:
        return Ne;
    case -1 / 0:
        return Pe
    }
    return e === e ? Object.is(e, -0) ? Me : C(0, S, e, S, S, S, S, S, S, S, S, S) : Fe
}
function Ye(e) {
    return C(1, S, Le(e), S, S, S, S, S, S, S, S, S)
}
function Xe(e) {
    return C(3, S, `` + e, S, S, S, S, S, S, S, S, S)
}
function Ze(e) {
    return C(4, e, S, S, S, S, S, S, S, S, S, S)
}
function Qe(e, t) {
    let n = t.valueOf();
    return C(5, e, n === n ? t.toISOString() : ``, S, S, S, S, S, S, S, S, S)
}
function $e(e, t) {
    return C(6, e, S, Le(t.source), t.flags, S, S, S, S, S, S, S)
}
function et(e, t) {
    return C(17, e, Ce[t], S, S, S, S, S, S, S, S, S)
}
function tt(e, t) {
    return C(18, e, Le(He(t)), S, S, S, S, S, S, S, S, S)
}
function nt(e, t, n) {
    return C(25, e, n, Le(t), S, S, S, S, S, S, S, S)
}
function rt(e, t, n) {
    return C(9, e, S, S, S, S, S, n, S, S, qe(t), S)
}
function it(e, t) {
    return C(21, e, S, S, S, S, S, S, t, S, S, S)
}
function at(e, t, n) {
    return C(15, e, S, t.constructor.name, S, S, S, S, n, t.byteOffset, S, t.length)
}
function ot(e, t, n) {
    return C(16, e, S, t.constructor.name, S, S, S, S, n, t.byteOffset, S, t.byteLength)
}
function st(e, t, n) {
    return C(20, e, S, S, S, S, S, S, n, t.byteOffset, S, t.byteLength)
}
function ct(e, t, n) {
    return C(13, e, We(t), S, Le(t.message), n, S, S, S, S, S, S)
}
function lt(e, t, n) {
    return C(14, e, We(t), S, Le(t.message), n, S, S, S, S, S, S)
}
function ut(e, t) {
    return C(7, e, S, S, S, S, S, t, S, S, S, S)
}
function dt(e, t) {
    return C(28, S, S, S, S, S, S, [e, t], S, S, S, S)
}
function ft(e, t) {
    return C(30, S, S, S, S, S, S, [e, t], S, S, S, S)
}
function pt(e, t, n) {
    return C(31, e, S, S, S, S, S, n, t, S, S, S)
}
function mt(e, t) {
    return C(32, e, S, S, S, S, S, S, t, S, S, S)
}
function ht(e, t) {
    return C(33, e, S, S, S, S, S, S, t, S, S, S)
}
function gt(e, t) {
    return C(34, e, S, S, S, S, S, S, t, S, S, S)
}
function _t(e, t, n, r) {
    return C(35, e, n, S, S, S, S, t, S, S, S, r)
}
var {toString: vt} = Object.prototype
  , yt = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function bt(e) {
    return `Seroval Error (step: ${yt[e]})`
}
var xt = (e, t) => bt(e)
  , St = class extends Error {
    constructor(e, t) {
        super(xt(e, t)),
        this.cause = t
    }
}
  , Ct = class extends St {
    constructor(e) {
        super(`parsing`, e)
    }
}
  , wt = class extends St {
    constructor(e) {
        super(`deserialization`, e)
    }
}
;
function Tt(e) {
    return `Seroval Error (specific: ${e})`
}
var Et = class extends Error {
    constructor(e) {
        super(Tt(1)),
        this.value = e
    }
}
  , Dt = class extends Error {
    constructor(e) {
        super(Tt(2))
    }
}
  , Ot = class extends Error {
    constructor(e) {
        super(Tt(3))
    }
}
  , kt = class extends Error {
    constructor(e) {
        super(Tt(4))
    }
}
  , At = class extends Error {
    constructor(e) {
        super(Tt(5)),
        this.value = e
    }
}
  , jt = class extends Error {
    constructor(e) {
        super(Tt(6))
    }
}
  , Mt = class extends Error {
    constructor(e) {
        super(Tt(7))
    }
}
  , Nt = class extends Error {
    constructor(e) {
        super(Tt(8))
    }
}
  , Pt = class extends Error {
    constructor(e) {
        super(Tt(9))
    }
}
  , Ft = class {
    constructor(e, t) {
        this.value = e,
        this.replacement = t
    }
}
  , It = () => {
    let e = {
        p: 0,
        s: 0,
        f: 0
    };
    return e.p = new Promise( (t, n) => {
        e.s = t,
        e.f = n
    }
    ),
    e
}
;
It.toString(),
( (e, t) => {
    e.s(t),
    e.p.s = 1,
    e.p.v = t
}
).toString(),
( (e, t) => {
    e.f(t),
    e.p.s = 2,
    e.p.v = t
}
).toString();
var Lt = () => {
    let e = []
      , t = []
      , n = !0
      , r = !1
      , i = 0
      , a = (e, n, r) => {
        for (r = 0; r < i; r++)
            t[r] && t[r][n](e)
    }
      , o = (t, i, a, o) => {
        for (i = 0,
        a = e.length; i < a; i++)
            o = e[i],
            !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o)
    }
      , s = (e, r) => (n && (r = i++,
    t[r] = e),
    o(e),
    () => {
        n && (t[r] = t[i],
        t[i--] = void 0)
    }
    );
    return {
        __SEROVAL_STREAM__: !0,
        on: e => s(e),
        next: t => {
            n && (e.push(t),
            a(t, `next`))
        }
        ,
        throw: i => {
            n && (e.push(i),
            a(i, `throw`),
            n = !1,
            r = !1,
            t.length = 0)
        }
        ,
        return: i => {
            n && (e.push(i),
            a(i, `return`),
            n = !1,
            r = !0,
            t.length = 0)
        }
    }
}
;
Lt.toString();
var Rt = e => t => () => {
    let n = 0
      , r = {
        [e]: () => r,
        next: () => {
            if (n > t.d)
                return {
                    done: !0,
                    value: void 0
                };
            let e = n++
              , r = t.v[e];
            if (e === t.t)
                throw r;
            return {
                done: e === t.d,
                value: r
            }
        }
    };
    return r
}
;
Rt.toString();
var zt = (e, t) => n => () => {
    let r = 0
      , i = -1
      , a = !1
      , o = []
      , s = []
      , c = (e=0, t=s.length) => {
        for (; e < t; e++)
            s[e].s({
                done: !0,
                value: void 0
            })
    }
    ;
    n.on({
        next: e => {
            let t = s.shift();
            t && t.s({
                done: !1,
                value: e
            }),
            o.push(e)
        }
        ,
        throw: e => {
            let t = s.shift();
            t && t.f(e),
            c(),
            i = o.length,
            a = !0,
            o.push(e)
        }
        ,
        return: e => {
            let t = s.shift();
            t && t.s({
                done: !0,
                value: e
            }),
            c(),
            i = o.length,
            o.push(e)
        }
    });
    let l = {
        [e]: () => l,
        next: () => {
            if (i === -1) {
                let e = r++;
                if (e >= o.length) {
                    let e = t();
                    return s.push(e),
                    e.p
                }
                return {
                    done: !1,
                    value: o[e]
                }
            }
            if (r > i)
                return {
                    done: !0,
                    value: void 0
                };
            let e = r++
              , n = o[e];
            if (e !== i)
                return {
                    done: !1,
                    value: n
                };
            if (a)
                throw n;
            return {
                done: !0,
                value: n
            }
        }
    };
    return l
}
;
zt.toString();
var Bt = e => {
    let t = atob(e)
      , n = t.length
      , r = new Uint8Array(n);
    for (let e = 0; e < n; e++)
        r[e] = t.charCodeAt(e);
    return r.buffer
}
;
Bt.toString();
function Vt(e) {
    return `__SEROVAL_SEQUENCE__` in e
}
function Ht(e, t, n) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: e,
        t,
        d: n
    }
}
function Ut(e) {
    let t = []
      , n = -1
      , r = -1
      , i = e[x]();
    for (; ; )
        try {
            let e = i.next();
            if (t.push(e.value),
            e.done) {
                r = t.length - 1;
                break
            }
        } catch (e) {
            n = t.length,
            t.push(e)
        }
    return Ht(t, n, r)
}
var Wt = Rt(x);
function Gt(e) {
    return Wt(e)
}
var Kt = {}
  , qt = {}
  , Jt = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function Yt(e) {
    return `__SEROVAL_STREAM__` in e
}
function Xt() {
    return Lt()
}
function Zt(e) {
    let t = Xt()
      , n = e[b]();
    async function r() {
        try {
            let e = await n.next();
            e.done ? t.return(e.value) : (t.next(e.value),
            await r())
        } catch (e) {
            t.throw(e)
        }
    }
    return r().catch( () => {}
    ),
    t
}
var Qt = zt(b, It);
function $t(e) {
    return Qt(e)
}
async function en(e) {
    try {
        return [1, await e]
    } catch (e) {
        return [0, e]
    }
}
function tn(e, t) {
    return {
        plugins: t.plugins,
        mode: e,
        marked: new Set,
        features: 63 ^ (t.disabledFeatures || 0),
        refs: t.refs || new Map,
        depthLimit: t.depthLimit || 1e3
    }
}
function nn(e, t) {
    e.marked.add(t)
}
function rn(e, t) {
    let n = e.refs.size;
    return e.refs.set(t, n),
    n
}
function an(e, t) {
    let n = e.refs.get(t);
    return n == null ? {
        type: 0,
        value: rn(e, t)
    } : (nn(e, n),
    {
        type: 1,
        value: Ze(n)
    })
}
function on(e, t) {
    let n = an(e, t);
    return n.type === 1 ? n : Be(t) ? {
        type: 2,
        value: tt(n.value, t)
    } : n
}
function sn(e, t) {
    let n = on(e, t);
    if (n.type !== 0)
        return n.value;
    if (t in Ce)
        return et(n.value, t);
    throw new Et(t)
}
function cn(e, t) {
    let n = an(e, Jt[t]);
    return n.type === 1 ? n.value : C(26, n.value, t, S, S, S, S, S, S, S, S, S)
}
function ln(e) {
    let t = an(e, Kt);
    return t.type === 1 ? t.value : C(27, t.value, S, S, S, S, S, S, sn(e, x), S, S, S)
}
function un(e) {
    let t = an(e, qt);
    return t.type === 1 ? t.value : C(29, t.value, S, S, S, S, S, [cn(e, 1), sn(e, b)], S, S, S, S)
}
function dn(e, t, n, r) {
    return C(n ? 11 : 10, e, S, S, S, r, S, S, S, S, qe(t), S)
}
function fn(e, t, n, r) {
    return C(8, t, S, S, S, S, {
        k: n,
        v: r
    }, S, cn(e, 0), S, S, S)
}
function pn(e, t, n) {
    let r = new Uint8Array(n)
      , i = ``;
    for (let e = 0, t = r.length; e < t; e++)
        i += String.fromCharCode(r[e]);
    return C(19, t, Le(btoa(i)), S, S, S, S, S, cn(e, 5), S, S, S)
}
function mn(e, t) {
    return {
        base: tn(e, t),
        child: void 0
    }
}
var hn = class {
    constructor(e, t) {
        this._p = e,
        this.depth = t
    }
    parse(e) {
        return k(this._p, this.depth, e)
    }
}
;
async function gn(e, t, n) {
    let r = [];
    for (let i = 0, a = n.length; i < a; i++)
        i in n ? r[i] = await k(e, t, n[i]) : r[i] = 0;
    return r
}
async function _n(e, t, n, r) {
    return rt(n, r, await gn(e, t, r))
}
async function vn(e, t, n) {
    let r = Object.entries(n)
      , i = []
      , a = [];
    for (let n = 0, o = r.length; n < o; n++)
        i.push(Le(r[n][0])),
        a.push(await k(e, t, r[n][1]));
    return x in n && (i.push(sn(e.base, x)),
    a.push(dt(ln(e.base), await k(e, t, Ut(n))))),
    b in n && (i.push(sn(e.base, b)),
    a.push(ft(un(e.base), await k(e, t, Zt(n))))),
    xe in n && (i.push(sn(e.base, xe)),
    a.push(Ye(n[xe]))),
    pe in n && (i.push(sn(e.base, pe)),
    a.push(n[pe] ? Oe : ke)),
    {
        k: i,
        v: a
    }
}
async function yn(e, t, n, r, i) {
    return dn(n, r, i, await vn(e, t, r))
}
async function bn(e, t, n, r) {
    return it(n, await k(e, t, r.valueOf()))
}
async function xn(e, t, n, r) {
    return at(n, r, await k(e, t, r.buffer))
}
async function Sn(e, t, n, r) {
    return ot(n, r, await k(e, t, r.buffer))
}
async function Cn(e, t, n, r) {
    return st(n, r, await k(e, t, r.buffer))
}
async function wn(e, t, n, r) {
    let i = Ke(r, e.base.features);
    return ct(n, r, i ? await vn(e, t, i) : S)
}
async function Tn(e, t, n, r) {
    let i = Ke(r, e.base.features);
    return lt(n, r, i ? await vn(e, t, i) : S)
}
async function En(e, t, n, r) {
    let i = []
      , a = [];
    for (let[n,o] of r.entries())
        i.push(await k(e, t, n)),
        a.push(await k(e, t, o));
    return fn(e.base, n, i, a)
}
async function Dn(e, t, n, r) {
    let i = [];
    for (let n of r.keys())
        i.push(await k(e, t, n));
    return ut(n, i)
}
async function On(e, t, n, r) {
    let i = e.base.plugins;
    if (i)
        for (let a = 0, o = i.length; a < o; a++) {
            let o = i[a];
            if (o.parse.async && o.test(r))
                return nt(n, o.tag, await o.parse.async(r, new hn(e,t), {
                    id: n
                }))
        }
    return S
}
async function kn(e, t, n, r) {
    let[i,a] = await en(r);
    return C(12, n, i, S, S, S, S, S, await k(e, t, a), S, S, S)
}
function An(e, t, n, r, i) {
    let a = []
      , o = n.on({
        next: n => {
            nn(this.base, t),
            k(this, e, n).then(e => {
                a.push(mt(t, e))
            }
            , e => {
                i(e),
                o()
            }
            )
        }
        ,
        throw: n => {
            nn(this.base, t),
            k(this, e, n).then(e => {
                a.push(ht(t, e)),
                r(a),
                o()
            }
            , e => {
                i(e),
                o()
            }
            )
        }
        ,
        return: n => {
            nn(this.base, t),
            k(this, e, n).then(e => {
                a.push(gt(t, e)),
                r(a),
                o()
            }
            , e => {
                i(e),
                o()
            }
            )
        }
    })
}
async function jn(e, t, n, r) {
    return pt(n, cn(e.base, 4), await new Promise(An.bind(e, t, n, r)))
}
async function Mn(e, t, n, r) {
    let i = [];
    for (let n = 0, a = r.v.length; n < a; n++)
        i[n] = await k(e, t, r.v[n]);
    return _t(n, i, r.t, r.d)
}
async function Nn(e, t, n, r) {
    if (Array.isArray(r))
        return _n(e, t, n, r);
    if (Yt(r))
        return jn(e, t, n, r);
    if (Vt(r))
        return Mn(e, t, n, r);
    let i = r.constructor;
    if (i === Ft)
        return k(e, t, r.replacement);
    let a = await On(e, t, n, r);
    if (a)
        return a;
    switch (i) {
    case Object:
        return yn(e, t, n, r, !1);
    case S:
        return yn(e, t, n, r, !0);
    case Date:
        return Qe(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return wn(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return bn(e, t, n, r);
    case ArrayBuffer:
        return pn(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return xn(e, t, n, r);
    case DataView:
        return Cn(e, t, n, r);
    case Map:
        return En(e, t, n, r);
    case Set:
        return Dn(e, t, n, r);
    default:
        break
    }
    if (i === Promise || r instanceof Promise)
        return kn(e, t, n, r);
    let o = e.base.features;
    if (o & 32 && i === RegExp)
        return $e(n, r);
    if (o & 16)
        switch (i) {
        case BigInt64Array:
        case BigUint64Array:
            return Sn(e, t, n, r);
        default:
            break
        }
    if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
        return Tn(e, t, n, r);
    if (r instanceof Error)
        return wn(e, t, n, r);
    if (x in r || b in r)
        return yn(e, t, n, r, !!i);
    throw new Et(r)
}
async function Pn(e, t, n) {
    let r = on(e.base, n);
    if (r.type !== 0)
        return r.value;
    let i = await On(e, t, r.value, n);
    if (i)
        return i;
    throw new Et(n)
}
async function k(e, t, n) {
    switch (typeof n) {
    case `boolean`:
        return n ? Oe : ke;
    case `undefined`:
        return Ae;
    case `string`:
        return Ye(n);
    case `number`:
        return Je(n);
    case `bigint`:
        return Xe(n);
    case `object`:
        if (n) {
            let r = on(e.base, n);
            return r.type === 0 ? await Nn(e, t + 1, r.value, n) : r.value
        }
        return je;
    case `symbol`:
        return sn(e.base, n);
    case `function`:
        return Pn(e, t, n);
    default:
        throw new Et(n)
    }
}
async function Fn(e, t) {
    try {
        return await k(e, 0, t)
    } catch (e) {
        throw e instanceof Ct ? e : new Ct(e)
    }
}
var In = (e => (e[e.Vanilla = 1] = `Vanilla`,
e[e.Cross = 2] = `Cross`,
e))(In || {});
function Ln(e) {
    return e
}
function Rn(e, t) {
    for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        e.has(r) || (e.add(r),
        r.extends && Rn(e, r.extends))
    }
}
function zn(e) {
    if (e) {
        let t = new Set;
        return Rn(t, e),
        [...t]
    }
}
function Bn(e) {
    switch (e) {
    case `Int8Array`:
        return Int8Array;
    case `Int16Array`:
        return Int16Array;
    case `Int32Array`:
        return Int32Array;
    case `Uint8Array`:
        return Uint8Array;
    case `Uint16Array`:
        return Uint16Array;
    case `Uint32Array`:
        return Uint32Array;
    case `Uint8ClampedArray`:
        return Uint8ClampedArray;
    case `Float32Array`:
        return Float32Array;
    case `Float64Array`:
        return Float64Array;
    case `BigInt64Array`:
        return BigInt64Array;
    case `BigUint64Array`:
        return BigUint64Array;
    default:
        throw new Mt(e)
    }
}
var Vn = 1e6
  , Hn = 1e4
  , Un = 2e4;
function Wn(e, t) {
    switch (t) {
    case 3:
        return Object.freeze(e);
    case 1:
        return Object.preventExtensions(e);
    case 2:
        return Object.seal(e);
    default:
        return e
    }
}
var Gn = 1e3;
function Kn(e, t) {
    let n = t.refs || new Map;
    return `types` in n || Object.assign(n, {
        types: new Map
    }),
    {
        mode: e,
        plugins: t.plugins,
        refs: n,
        features: t.features ?? 63 ^ (t.disabledFeatures || 0),
        depthLimit: t.depthLimit || Gn
    }
}
function qn(e) {
    return {
        mode: 2,
        base: Kn(2, e),
        child: S
    }
}
var Jn = class {
    constructor(e, t) {
        this._p = e,
        this.depth = t
    }
    deserialize(e) {
        return j(this._p, this.depth, e)
    }
}
;
function Yn(e, t) {
    if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
        throw new Nt({
            t: 4,
            i: t
        });
    if (e.refs.has(t))
        throw Error(`Conflicted ref id: ` + t)
}
function Xn(e, t, n) {
    return Yn(e.base, t),
    e.state.marked.has(t) && e.base.refs.set(t, n),
    n
}
function Zn(e, t, n) {
    return Yn(e.base, t),
    e.base.refs.set(t, n),
    n
}
function A(e, t, n) {
    return e.mode === 1 ? Xn(e, t, n) : Zn(e, t, n)
}
function Qn(e, t, n) {
    if (Object.hasOwn(t, n))
        return t[n];
    throw new Nt(e)
}
function $n(e, t) {
    return A(e, t.i, Ue(E(t.s)))
}
function er(e, t, n) {
    let r = n.a
      , i = r.length
      , a = A(e, n.i, Array(i));
    for (let n = 0, o; n < i; n++)
        o = r[n],
        o && (a[n] = j(e, t, o));
    return Wn(a, n.o),
    a
}
function tr(e) {
    switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
        return !1;
    default:
        return !0
    }
}
function nr(e) {
    switch (e) {
    case b:
    case pe:
    case xe:
    case x:
        return !0;
    default:
        return !1
    }
}
function rr(e, t, n) {
    tr(t) ? e[t] = n : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function ir(e, t, n, r, i) {
    if (typeof r == `string`)
        rr(n, E(r), j(e, t, i));
    else {
        let a = j(e, t, r);
        switch (typeof a) {
        case `string`:
            rr(n, a, j(e, t, i));
            break;
        case `symbol`:
            nr(a) && (n[a] = j(e, t, i));
            break;
        default:
            throw new Nt(r)
        }
    }
}
function ar(e, t, n) {
    e.base.refs.types.set(t, n)
}
function or(e, t, n, r) {
    if (e.base.refs.types.get(n) !== r)
        throw new Nt(t)
}
function sr(e, t, n, r) {
    let i = n.k;
    if (i.length > 0)
        for (let a = 0, o = n.v, s = i.length; a < s; a++)
            ir(e, t, r, i[a], o[a]);
    return r
}
function cr(e, t, n) {
    let r = A(e, n.i, n.t === 10 ? {} : Object.create(null));
    return sr(e, t, n.p, r),
    Wn(r, n.o),
    r
}
function lr(e, t) {
    return A(e, t.i, new Date(t.s))
}
function ur(e, t) {
    if (e.base.features & 32) {
        let n = E(t.c);
        if (n.length > Un)
            throw new Nt(t);
        return A(e, t.i, new RegExp(n,t.m))
    }
    throw new Dt(t)
}
function dr(e, t, n) {
    let r = A(e, n.i, new Set);
    for (let i = 0, a = n.a, o = a.length; i < o; i++)
        r.add(j(e, t, a[i]));
    return r
}
function fr(e, t, n) {
    let r = A(e, n.i, new Map);
    for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
        r.set(j(e, t, a[i]), j(e, t, o[i]));
    return r
}
function pr(e, t) {
    if (t.s.length > Vn)
        throw new Nt(t);
    return A(e, t.i, Bt(E(t.s)))
}
function mr(e, t, n) {
    let r = Bn(n.c)
      , i = j(e, t, n.f)
      , a = n.b ?? 0;
    if (a < 0 || a > i.byteLength)
        throw new Nt(n);
    return A(e, n.i, new r(i,a,n.l))
}
function hr(e, t, n) {
    let r = j(e, t, n.f)
      , i = n.b ?? 0;
    if (i < 0 || i > r.byteLength)
        throw new Nt(n);
    return A(e, n.i, new DataView(r,i,n.l))
}
function gr(e, t, n, r) {
    if (n.p) {
        let i = sr(e, t, n.p, {});
        Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
    }
    return r
}
function _r(e, t, n) {
    return gr(e, t, n, A(e, n.i, AggregateError([], E(n.m))))
}
function vr(e, t, n) {
    let r = Qn(n, De, n.s);
    return gr(e, t, n, A(e, n.i, new r(E(n.m))))
}
function yr(e, t, n) {
    let r = It()
      , i = A(e, n.i, r.p)
      , a = j(e, t, n.f);
    return n.s ? r.s(a) : r.f(a),
    i
}
function br(e, t, n) {
    return A(e, n.i, Object(j(e, t, n.f)))
}
function xr(e, t, n) {
    let r = e.base.plugins;
    if (r) {
        let i = E(n.c);
        for (let a = 0, o = r.length; a < o; a++) {
            let o = r[a];
            if (o.tag === i)
                return A(e, n.i, o.deserialize(n.s, new Jn(e,t), {
                    id: n.i
                }))
        }
    }
    throw new Ot(n.c)
}
function Sr(e, t) {
    let n = A(e, t.i, A(e, t.s, It()).p);
    return ar(e, t.s, 22),
    n
}
function Cr(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r)
        return or(e, n, n.i, 22),
        r.s(j(e, t, n.a[1])),
        S;
    throw new kt(`Promise`)
}
function wr(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r)
        return or(e, n, n.i, 22),
        r.f(j(e, t, n.a[1])),
        S;
    throw new kt(`Promise`)
}
function Tr(e, t, n) {
    return j(e, t, n.a[0]),
    Gt(j(e, t, n.a[1]))
}
function Er(e, t, n) {
    return j(e, t, n.a[0]),
    $t(j(e, t, n.a[1]))
}
function Dr(e, t, n) {
    let r = A(e, n.i, Xt());
    ar(e, n.i, 31);
    let i = n.a
      , a = i.length;
    if (a)
        for (let n = 0; n < a; n++)
            j(e, t, i[n]);
    return r
}
function Or(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r)
        return or(e, n, n.i, 31),
        r.next(j(e, t, n.f)),
        S;
    throw new kt(`Stream`)
}
function kr(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r)
        return or(e, n, n.i, 31),
        r.throw(j(e, t, n.f)),
        S;
    throw new kt(`Stream`)
}
function Ar(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r)
        return or(e, n, n.i, 31),
        r.return(j(e, t, n.f)),
        S;
    throw new kt(`Stream`)
}
function jr(e, t, n) {
    return j(e, t, n.f),
    S
}
function Mr(e, t, n) {
    return j(e, t, n.a[1]),
    S
}
function Nr(e, t, n) {
    let r = A(e, n.i, Ht([], n.s, n.l));
    for (let i = 0, a = n.a.length; i < a; i++)
        r.v[i] = j(e, t, n.a[i]);
    return r
}
function j(e, t, n) {
    if (t > e.base.depthLimit)
        throw new Pt(e.base.depthLimit);
    switch (t += 1,
    n.t) {
    case 2:
        return Qn(n, Te, n.s);
    case 0:
        return Number(n.s);
    case 1:
        return E(String(n.s));
    case 3:
        if (String(n.s).length > Hn)
            throw new Nt(n);
        return BigInt(n.s);
    case 4:
        return e.base.refs.get(n.i);
    case 18:
        return $n(e, n);
    case 9:
        return er(e, t, n);
    case 10:
    case 11:
        return cr(e, t, n);
    case 5:
        return lr(e, n);
    case 6:
        return ur(e, n);
    case 7:
        return dr(e, t, n);
    case 8:
        return fr(e, t, n);
    case 19:
        return pr(e, n);
    case 16:
    case 15:
        return mr(e, t, n);
    case 20:
        return hr(e, t, n);
    case 14:
        return _r(e, t, n);
    case 13:
        return vr(e, t, n);
    case 12:
        return yr(e, t, n);
    case 17:
        return Qn(n, we, n.s);
    case 21:
        return br(e, t, n);
    case 25:
        return xr(e, t, n);
    case 22:
        return Sr(e, n);
    case 23:
        return Cr(e, t, n);
    case 24:
        return wr(e, t, n);
    case 28:
        return Tr(e, t, n);
    case 30:
        return Er(e, t, n);
    case 31:
        return Dr(e, t, n);
    case 32:
        return Or(e, t, n);
    case 33:
        return kr(e, t, n);
    case 34:
        return Ar(e, t, n);
    case 27:
        return jr(e, t, n);
    case 29:
        return Mr(e, t, n);
    case 35:
        return Nr(e, t, n);
    default:
        throw new Dt(n)
    }
}
function Pr(e, t) {
    try {
        return j(e, 0, t)
    } catch (e) {
        throw new wt(e)
    }
}
var Fr = ( () => T).toString();
/=>/.test(Fr);
function Ir(e, t) {
    return Pr(qn({
        plugins: zn(t.plugins),
        refs: t.refs,
        features: t.features,
        disabledFeatures: t.disabledFeatures,
        depthLimit: t.depthLimit
    }), e)
}
async function Lr(e, t={}) {
    let n = mn(1, {
        plugins: zn(t.plugins),
        disabledFeatures: t.disabledFeatures
    });
    return {
        t: await Fn(n, e),
        f: n.base.features,
        m: Array.from(n.base.marked)
    }
}
function Rr(e) {
    return e
}
function zr(e) {
    return Ln({
        tag: `$TSR/t/` + e.key,
        test: e.test,
        parse: {
            sync(t, n, r) {
                return {
                    v: n.parse(e.toSerializable(t))
                }
            },
            async async(t, n, r) {
                return {
                    v: await n.parse(e.toSerializable(t))
                }
            },
            stream(t, n, r) {
                return {
                    v: n.parse(e.toSerializable(t))
                }
            }
        },
        serialize: void 0,
        deserialize(t, n, r) {
            return e.fromSerializable(n.deserialize(t.v))
        }
    })
}
var Br = class {
    constructor(e, t) {
        this.stream = e,
        this.hint = t?.hint ?? `binary`
    }
}
  , Vr = globalThis.Buffer
  , Hr = !!Vr && typeof Vr.from == `function`;
function Ur(e) {
    if (e.length === 0)
        return ``;
    if (Hr)
        return Vr.from(e).toString(`base64`);
    let t = 32768
      , n = [];
    for (let r = 0; r < e.length; r += t) {
        let i = e.subarray(r, r + t);
        n.push(String.fromCharCode.apply(null, i))
    }
    return btoa(n.join(``))
}
function Wr(e) {
    if (e.length === 0)
        return new Uint8Array;
    if (Hr) {
        let t = Vr.from(e, `base64`);
        return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
    }
    let t = atob(e)
      , n = new Uint8Array(t.length);
    for (let e = 0; e < t.length; e++)
        n[e] = t.charCodeAt(e);
    return n
}
var Gr = Object.create(null)
  , Kr = Object.create(null)
  , qr = e => new ReadableStream({
    start(t) {
        e.on({
            next(e) {
                try {
                    t.enqueue(Wr(e))
                } catch {}
            },
            throw(e) {
                t.error(e)
            },
            return() {
                try {
                    t.close()
                } catch {}
            }
        })
    }
})
  , Jr = new TextEncoder
  , Yr = e => new ReadableStream({
    start(t) {
        e.on({
            next(e) {
                try {
                    typeof e == `string` ? t.enqueue(Jr.encode(e)) : t.enqueue(Wr(e.$b64))
                } catch {}
            },
            throw(e) {
                t.error(e)
            },
            return() {
                try {
                    t.close()
                } catch {}
            }
        })
    }
})
  , Xr = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`
  , Zr = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Qr(e) {
    let t = Xt()
      , n = e.getReader();
    return (async () => {
        try {
            for (; ; ) {
                let {done: e, value: r} = await n.read();
                if (e) {
                    t.return(void 0);
                    break
                }
                t.next(Ur(r))
            }
        } catch (e) {
            t.throw(e)
        } finally {
            n.releaseLock()
        }
    }
    )(),
    t
}
function $r(e) {
    let t = Xt()
      , n = e.getReader()
      , r = new TextDecoder(`utf-8`,{
        fatal: !0
    });
    return (async () => {
        try {
            for (; ; ) {
                let {done: e, value: i} = await n.read();
                if (e) {
                    try {
                        let e = r.decode();
                        e.length > 0 && t.next(e)
                    } catch {}
                    t.return(void 0);
                    break
                }
                try {
                    let e = r.decode(i, {
                        stream: !0
                    });
                    e.length > 0 && t.next(e)
                } catch {
                    t.next({
                        $b64: Ur(i)
                    })
                }
            }
        } catch (e) {
            t.throw(e)
        } finally {
            n.releaseLock()
        }
    }
    )(),
    t
}
var ei = Ln({
    tag: `tss/RawStream`,
    extends: [Ln({
        tag: `tss/RawStreamFactory`,
        test(e) {
            return e === Gr
        },
        parse: {
            sync(e, t, n) {
                return {}
            },
            async async(e, t, n) {
                return {}
            },
            stream(e, t, n) {
                return {}
            }
        },
        serialize(e, t, n) {
            return Xr
        },
        deserialize(e, t, n) {
            return Gr
        }
    }), Ln({
        tag: `tss/RawStreamFactoryText`,
        test(e) {
            return e === Kr
        },
        parse: {
            sync(e, t, n) {
                return {}
            },
            async async(e, t, n) {
                return {}
            },
            stream(e, t, n) {
                return {}
            }
        },
        serialize(e, t, n) {
            return Zr
        },
        deserialize(e, t, n) {
            return Kr
        }
    })],
    test(e) {
        return e instanceof Br
    },
    parse: {
        sync(e, t, n) {
            let r = e.hint === `text` ? Kr : Gr;
            return {
                hint: t.parse(e.hint),
                factory: t.parse(r),
                stream: t.parse(Xt())
            }
        },
        async async(e, t, n) {
            let r = e.hint === `text` ? Kr : Gr
              , i = e.hint === `text` ? $r(e.stream) : Qr(e.stream);
            return {
                hint: await t.parse(e.hint),
                factory: await t.parse(r),
                stream: await t.parse(i)
            }
        },
        stream(e, t, n) {
            let r = e.hint === `text` ? Kr : Gr
              , i = e.hint === `text` ? $r(e.stream) : Qr(e.stream);
            return {
                hint: t.parse(e.hint),
                factory: t.parse(r),
                stream: t.parse(i)
            }
        }
    },
    serialize(e, t, n) {
        return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`
    },
    deserialize(e, t, n) {
        let r = t.deserialize(e.stream);
        return t.deserialize(e.hint) === `text` ? Yr(r) : qr(r)
    }
});
function ti(e) {
    return Ln({
        tag: `tss/RawStream`,
        test: () => !1,
        parse: {},
        serialize() {
            throw Error(`RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`)
        },
        deserialize(t, n, r) {
            return e(typeof n?.deserialize == `function` ? n.deserialize(t.streamId) : t.streamId)
        }
    })
}
var ni = Ln({
    tag: `$TSR/Error`,
    test(e) {
        return e instanceof Error
    },
    parse: {
        sync(e, t) {
            return {
                message: t.parse(e.message)
            }
        },
        async async(e, t) {
            return {
                message: await t.parse(e.message)
            }
        },
        stream(e, t) {
            return {
                message: t.parse(e.message)
            }
        }
    },
    serialize(e, t) {
        return `new Error(` + t.serialize(e.message) + `)`
    },
    deserialize(e, t) {
        return Error(t.deserialize(e.message))
    }
})
  , ri = {}
  , ii = e => new ReadableStream({
    start: t => {
        e.on({
            next: e => {
                try {
                    t.enqueue(e)
                } catch {}
            }
            ,
            throw: e => {
                t.error(e)
            }
            ,
            return: () => {
                try {
                    t.close()
                } catch {}
            }
        })
    }
})
  , ai = Ln({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
        return e === ri
    },
    parse: {
        sync() {
            return ri
        },
        async async() {
            return await Promise.resolve(ri)
        },
        stream() {
            return ri
        }
    },
    serialize() {
        return ii.toString()
    },
    deserialize() {
        return ri
    }
});
function oi(e) {
    let t = Xt()
      , n = e.getReader();
    async function r() {
        try {
            let e = await n.read();
            e.done ? t.return(e.value) : (t.next(e.value),
            await r())
        } catch (e) {
            t.throw(e)
        }
    }
    return r().catch( () => {}
    ),
    t
}
var si = [ni, ei, Ln({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [ai],
    test(e) {
        return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream
    },
    parse: {
        sync(e, t) {
            return {
                factory: t.parse(ri),
                stream: t.parse(Xt())
            }
        },
        async async(e, t) {
            return {
                factory: await t.parse(ri),
                stream: await t.parse(oi(e))
            }
        },
        stream(e, t) {
            return {
                factory: t.parse(ri),
                stream: t.parse(oi(e))
            }
        }
    },
    serialize(e, t) {
        return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`
    },
    deserialize(e, t) {
        return ii(t.deserialize(e.stream))
    }
})];
function ci() {
    return [...(le()?.serializationAdapters)?.map(zr) ?? [], ...si]
}
var li = new TextDecoder
  , ui = new Uint8Array
  , di = 16 * 1024 * 1024
  , fi = 32 * 1024 * 1024
  , pi = 1024
  , mi = 1e5;
function hi(e) {
    let t = new Map, n = new Map, r = new Set, i = !1, a = null, o = 0, s, c = new ReadableStream({
        start(e) {
            s = e
        },
        cancel() {
            i = !0;
            try {
                a?.cancel()
            } catch {}
            t.forEach(e => {
                try {
                    e.error(Error(`Framed response cancelled`))
                } catch {}
            }
            ),
            t.clear(),
            n.clear(),
            r.clear()
        }
    });
    function l(e) {
        let i = n.get(e);
        if (i)
            return i;
        if (r.has(e))
            return new ReadableStream({
                start(e) {
                    e.close()
                }
            });
        if (n.size >= pi)
            throw Error(`Too many raw streams in framed response (max ${pi})`);
        let a = new ReadableStream({
            start(n) {
                t.set(e, n)
            },
            cancel() {
                r.add(e),
                t.delete(e),
                n.delete(e)
            }
        });
        return n.set(e, a),
        a
    }
    function u(e) {
        return l(e),
        t.get(e)
    }
    return (async () => {
        let n = e.getReader();
        a = n;
        let c = []
          , l = 0;
        function d() {
            if (l < 9)
                return null;
            let e = c[0];
            if (e.length >= 9)
                return {
                    type: e[0],
                    streamId: (e[1] << 24 | e[2] << 16 | e[3] << 8 | e[4]) >>> 0,
                    length: (e[5] << 24 | e[6] << 16 | e[7] << 8 | e[8]) >>> 0
                };
            let t = new Uint8Array(9)
              , n = 0
              , r = 9;
            for (let e = 0; e < c.length && r > 0; e++) {
                let i = c[e]
                  , a = Math.min(i.length, r);
                t.set(i.subarray(0, a), n),
                n += a,
                r -= a
            }
            return {
                type: t[0],
                streamId: (t[1] << 24 | t[2] << 16 | t[3] << 8 | t[4]) >>> 0,
                length: (t[5] << 24 | t[6] << 16 | t[7] << 8 | t[8]) >>> 0
            }
        }
        function f(e) {
            if (e === 0)
                return ui;
            let t = new Uint8Array(e)
              , n = 0
              , r = e;
            for (; r > 0 && c.length > 0; ) {
                let e = c[0];
                if (!e)
                    break;
                let i = Math.min(e.length, r);
                t.set(e.subarray(0, i), n),
                n += i,
                r -= i,
                i === e.length ? c.shift() : c[0] = e.subarray(i)
            }
            return l -= e,
            t
        }
        try {
            for (; ; ) {
                let {done: e, value: a} = await n.read();
                if (i || e)
                    break;
                if (a) {
                    if (l + a.length > fi)
                        throw Error(`Framed response buffer exceeded ${fi} bytes`);
                    for (c.push(a),
                    l += a.length; ; ) {
                        let e = d();
                        if (!e)
                            break;
                        let {type: n, streamId: i, length: a} = e;
                        if (n !== v.JSON && n !== v.CHUNK && n !== v.END && n !== v.ERROR)
                            throw Error(`Unknown frame type: ${n}`);
                        if (n === v.JSON) {
                            if (i !== 0)
                                throw Error(`Invalid JSON frame streamId (expected 0)`)
                        } else if (i === 0)
                            throw Error(`Invalid raw frame streamId (expected non-zero)`);
                        if (a > di)
                            throw Error(`Frame payload too large: ${a} bytes (max ${di})`);
                        let c = 9 + a;
                        if (l < c)
                            break;
                        if (++o > mi)
                            throw Error(`Too many frames in framed response (max ${mi})`);
                        f(9);
                        let p = f(a);
                        switch (n) {
                        case v.JSON:
                            try {
                                s.enqueue(li.decode(p))
                            } catch {}
                            break;
                        case v.CHUNK:
                            {
                                let e = u(i);
                                e && e.enqueue(p);
                                break
                            }
                        case v.END:
                            {
                                let e = u(i);
                                if (r.add(i),
                                e) {
                                    try {
                                        e.close()
                                    } catch {}
                                    t.delete(i)
                                }
                                break
                            }
                        case v.ERROR:
                            {
                                let e = u(i);
                                if (r.add(i),
                                e) {
                                    let n = li.decode(p);
                                    e.error(Error(n)),
                                    t.delete(i)
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (l !== 0)
                throw Error(`Incomplete frame at end of framed response`);
            try {
                s.close()
            } catch {}
            t.forEach(e => {
                try {
                    e.close()
                } catch {}
            }
            ),
            t.clear()
        } catch (e) {
            try {
                s.error(e)
            } catch {}
            t.forEach(t => {
                try {
                    t.error(e)
                } catch {}
            }
            ),
            t.clear()
        } finally {
            try {
                n.releaseLock()
            } catch {}
            a = null
        }
    }
    )(),
    {
        getOrCreateStream: l,
        jsonChunks: c
    }
}
var gi = null;
async function _i(e) {
    e.length > 0 && await Promise.allSettled(e)
}
var vi = Object.prototype.hasOwnProperty;
function yi(e) {
    for (let t in e)
        if (vi.call(e, t))
            return !0;
    return !1
}
async function bi(e, t, n) {
    gi ||= ci();
    let r = t[0]
      , i = r.fetch ?? n
      , a = r.data instanceof FormData ? `formData` : `payload`
      , o = r.headers ? new Headers(r.headers) : new Headers;
    if (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` && o.set(`accept`, `${oe}, application/x-ndjson, application/json`),
    r.method === `GET`) {
        if (a === `formData`)
            throw Error(`FormData is not supported with GET requests`);
        let t = await xi(r);
        if (t !== void 0) {
            let n = d({
                payload: t
            });
            e.includes(`?`) ? e += `&${n}` : e += `?${n}`
        }
    }
    let s;
    if (r.method === `POST`) {
        let e = await Ci(r);
        e?.contentType && o.set(`content-type`, e.contentType),
        s = e?.body
    }
    return await wi(async () => i(e, {
        method: r.method,
        headers: o,
        signal: r.signal,
        body: s
    }))
}
async function xi(e) {
    let t = !1
      , n = {};
    if (e.data !== void 0 && (t = !0,
    n.data = e.data),
    e.context && yi(e.context) && (t = !0,
    n.context = e.context),
    t)
        return Si(n)
}
async function Si(e) {
    return JSON.stringify(await Promise.resolve(Lr(e, {
        plugins: gi
    })))
}
async function Ci(e) {
    if (e.data instanceof FormData) {
        let t;
        return e.context && yi(e.context) && (t = await Si(e.context)),
        t !== void 0 && e.data.set(_, t),
        {
            body: e.data
        }
    }
    let t = await xi(e);
    if (t)
        return {
            body: t,
            contentType: `application/json`
        }
}
async function wi(e) {
    let n;
    try {
        n = await e()
    } catch (e) {
        if (e instanceof Response)
            n = e;
        else
            throw console.log(e),
            e
    }
    if (n.headers.get(`x-tss-raw`) === `true`)
        return n;
    let r = n.headers.get(`content-type`);
    if (r || t(),
    n.headers.get(`x-tss-serialized`)) {
        let e;
        if (r.includes(`application/x-tss-framed`)) {
            if (y(r),
            !n.body)
                throw Error(`No response body for framed response`);
            let {getOrCreateStream: t, jsonChunks: i} = hi(n.body)
              , a = [ti(t), ...gi || []]
              , o = new Map;
            e = await Ti({
                jsonStream: i,
                onMessage: e => Ir(e, {
                    refs: o,
                    plugins: a
                }),
                onError(e, t) {
                    console.error(e, t)
                }
            })
        } else if (r.includes(`application/json`)) {
            let t = await n.json()
              , r = [];
            try {
                e = Ir(t, {
                    plugins: gi
                })
            } finally {}
            await _i(r)
        }
        if (e || t(),
        e instanceof Error)
            throw e;
        return e
    }
    if (r.includes(`application/json`)) {
        let e = await n.json()
          , t = h(e);
        if (t)
            throw t;
        if (o(e))
            throw e;
        return e
    }
    if (!n.ok)
        throw Error(await n.text());
    return n
}
async function Ti({jsonStream: e, onMessage: t, onError: n}) {
    let r = e.getReader()
      , {value: i, done: a} = await r.read();
    if (a || !i)
        throw Error(`Stream ended before first object`);
    let o = JSON.parse(i), s = !1, c = (async () => {
        try {
            for (; ; ) {
                let {value: e, done: i} = await r.read();
                if (i)
                    break;
                if (e)
                    try {
                        let n = [];
                        try {
                            t(JSON.parse(e))
                        } finally {}
                        await _i(n)
                    } catch (t) {
                        n?.(`Invalid JSON: ${e}`, t)
                    }
            }
        } catch (e) {
            s || n?.(`Stream processing error:`, e)
        }
    }
    )(), l, u = [];
    try {
        l = t(o)
    } catch (e) {
        throw s = !0,
        r.cancel().catch( () => {}
        ),
        e
    }
    return await _i(u),
    Promise.resolve(l).catch( () => {
        s = !0,
        r.cancel().catch( () => {}
        )
    }
    ),
    c.finally( () => {
        try {
            r.releaseLock()
        } catch {}
    }
    ),
    l
}
function Ei(e) {
    let t = `/_serverFn/` + e;
    return Object.assign( (...e) => {
        let n = le()?.serverFns?.fetch;
        return bi(t, e, n ?? fetch)
    }
    , {
        url: t,
        serverFnMeta: {
            id: e
        },
        [ie]: !0
    })
}
function Di(e) {
    if (Array.isArray(e))
        return e.flatMap(e => Di(e));
    if (typeof e != `string`)
        return [];
    let t = [], n = 0, r, i, a, o, s, c = () => {
        for (; n < e.length && /\s/.test(e.charAt(n)); )
            n += 1;
        return n < e.length
    }
    , l = () => (i = e.charAt(n),
    i !== `=` && i !== `;` && i !== `,`);
    for (; n < e.length; ) {
        for (r = n,
        s = !1; c(); )
            if (i = e.charAt(n),
            i === `,`) {
                for (a = n,
                n += 1,
                c(),
                o = n; n < e.length && l(); )
                    n += 1;
                n < e.length && e.charAt(n) === `=` ? (s = !0,
                n = o,
                t.push(e.slice(r, a)),
                r = n) : n = a + 1
            } else
                n += 1;
        (!s || n >= e.length) && t.push(e.slice(r))
    }
    return t
}
function Oi(e) {
    return e instanceof Headers ? e : Array.isArray(e) || typeof e == `object` ? new Headers(e) : null
}
function ki(...e) {
    return e.reduce( (e, t) => {
        let n = Oi(t);
        if (!n)
            return e;
        for (let[t,r] of n.entries())
            t === `set-cookie` ? Di(r).forEach(t => e.append(`set-cookie`, t)) : e.set(t, r);
        return e
    }
    , new Headers)
}
var M = l(r(), 1)
  , Ai = m()
  , ji = l(re(), 1);
function Mi(e, t) {
    let r = p()
      , o = c(t)
      , {activeProps: l, inactiveProps: u, activeOptions: d, to: m, preload: h, preloadDelay: ne, preloadIntentProximity: re, hashScrollIntoView: _, replace: ie, startTransition: ae, resetScroll: oe, viewTransition: v, children: se, target: ce, disabled: y, style: le, className: de, onClick: b, onBlur: fe, onFocus: pe, onMouseEnter: x, onMouseLeave: me, onTouchStart: he, ignoreBlocker: ge, params: _e, search: ve, hash: ye, state: be, mask: xe, reloadDocument: Se, unsafeRelative: Ce, from: we, _fromLocation: S, ...Te} = e
      , Ee = s()
      , De = M.useMemo( () => e, [r, e.from, e._fromLocation, e.hash, e.to, e.search, e.params, e.state, e.mask, e.unsafeRelative])
      , C = g(r.stores.location, e => e, (e, t) => e.href === t.href)
      , w = M.useMemo( () => {
        let e = {
            _fromLocation: C,
            ...De
        };
        return r.buildLocation(e)
    }
    , [r, C, De])
      , Oe = w.maskedLocation ? w.maskedLocation.publicHref : w.publicHref
      , ke = w.maskedLocation ? w.maskedLocation.external : w.external
      , Ae = M.useMemo( () => Vi(Oe, ke, r.history, y), [y, ke, Oe, r.history])
      , je = M.useMemo( () => {
        if (Ae?.external)
            return n(Ae.href, r.protocolAllowlist) ? void 0 : Ae.href;
        if (!Hi(m) && !(typeof m != `string` || m.indexOf(`:`) === -1))
            try {
                return new URL(m),
                n(m, r.protocolAllowlist) ? void 0 : m
            } catch {}
    }
    , [m, Ae, r.protocolAllowlist])
      , Me = M.useMemo( () => {
        if (je)
            return !1;
        if (d?.exact) {
            if (!te(C.pathname, w.pathname, r.basepath))
                return !1
        } else {
            let e = ee(C.pathname, r.basepath)
              , t = ee(w.pathname, r.basepath);
            if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === `/`)))
                return !1
        }
        return (d?.includeSearch ?? !0) && !i(C.search, w.search, {
            partial: !d?.exact,
            ignoreUndefined: !d?.explicitUndefined
        }) ? !1 : d?.includeHash ? Ee && C.hash === w.hash : !0
    }
    , [d?.exact, d?.explicitUndefined, d?.includeHash, d?.includeSearch, C, je, Ee, w.hash, w.pathname, w.search, r.basepath])
      , Ne = Me ? a(l, {}) ?? Pi : Ni
      , Pe = Me ? Ni : a(u, {}) ?? Ni
      , Fe = [de, Ne.className, Pe.className].filter(Boolean).join(` `)
      , Ie = (le || Ne.style || Pe.style) && {
        ...le,
        ...Ne.style,
        ...Pe.style
    }
      , [Le,Re] = M.useState(!1)
      , E = M.useRef(!1)
      , D = e.reloadDocument || je ? !1 : h ?? r.options.defaultPreload
      , ze = ne ?? r.options.defaultPreloadDelay ?? 0
      , O = M.useCallback( () => {
        r.preloadRoute({
            ...De,
            _builtLocation: w
        }).catch(e => {
            console.warn(e),
            console.warn(ue)
        }
        )
    }
    , [r, De, w]);
    f(o, M.useCallback(e => {
        e?.isIntersecting && O()
    }
    , [O]), zi, {
        disabled: !!y || D !== `viewport`
    }),
    M.useEffect( () => {
        E.current || !y && D === `render` && (O(),
        E.current = !0)
    }
    , [y, O, D]);
    let Be = e => {
        let t = e.currentTarget.getAttribute(`target`)
          , n = ce === void 0 ? t : ce;
        if (!y && !Wi(e) && !e.defaultPrevented && (!n || n === `_self`) && e.button === 0) {
            e.preventDefault(),
            (0,
            ji.flushSync)( () => {
                Re(!0)
            }
            );
            let t = r.subscribe(`onResolved`, () => {
                t(),
                Re(!1)
            }
            );
            r.navigate({
                ...De,
                replace: ie,
                resetScroll: oe,
                hashScrollIntoView: _,
                startTransition: ae,
                viewTransition: v,
                ignoreBlocker: ge
            })
        }
    }
    ;
    if (je)
        return {
            ...Te,
            ref: o,
            href: je,
            ...se && {
                children: se
            },
            ...ce && {
                target: ce
            },
            ...y && {
                disabled: y
            },
            ...le && {
                style: le
            },
            ...de && {
                className: de
            },
            ...b && {
                onClick: b
            },
            ...fe && {
                onBlur: fe
            },
            ...pe && {
                onFocus: pe
            },
            ...x && {
                onMouseEnter: x
            },
            ...me && {
                onMouseLeave: me
            },
            ...he && {
                onTouchStart: he
            }
        };
    let Ve = e => {
        if (y || D !== `intent`)
            return;
        if (!ze) {
            O();
            return
        }
        let t = e.currentTarget;
        if (Ri.has(t))
            return;
        let n = setTimeout( () => {
            Ri.delete(t),
            O()
        }
        , ze);
        Ri.set(t, n)
    }
      , He = e => {
        y || D !== `intent` || O()
    }
      , Ue = e => {
        if (y || !D || !ze)
            return;
        let t = e.currentTarget
          , n = Ri.get(t);
        n && (clearTimeout(n),
        Ri.delete(t))
    }
    ;
    return {
        ...Te,
        ...Ne,
        ...Pe,
        href: Ae?.href,
        ref: o,
        onClick: Bi([b, Be]),
        onBlur: Bi([fe, Ue]),
        onFocus: Bi([pe, Ve]),
        onMouseEnter: Bi([x, Ve]),
        onMouseLeave: Bi([me, Ue]),
        onTouchStart: Bi([he, He]),
        disabled: !!y,
        target: ce,
        ...Ie && {
            style: Ie
        },
        ...Fe && {
            className: Fe
        },
        ...y && Fi,
        ...Me && Ii,
        ...Ee && Le && Li
    }
}
var Ni = {}
  , Pi = {
    className: `active`
}
  , Fi = {
    role: `link`,
    "aria-disabled": !0
}
  , Ii = {
    "data-status": `active`,
    "aria-current": `page`
}
  , Li = {
    "data-transitioning": `transitioning`
}
  , Ri = new WeakMap
  , zi = {
    rootMargin: `100px`
}
  , Bi = e => t => {
    for (let n of e)
        if (n) {
            if (t.defaultPrevented)
                return;
            n(t)
        }
}
;
function Vi(e, t, n, r) {
    if (!r)
        return t ? {
            href: e,
            external: !0
        } : {
            href: n.createHref(e) || `/`,
            external: !1
        }
}
function Hi(e) {
    if (typeof e != `string`)
        return !1;
    let t = e.charCodeAt(0);
    return t === 47 ? e.charCodeAt(1) !== 47 : t === 46
}
var Ui = M.forwardRef( (e, t) => {
    let {_asChild: n, ...r} = e
      , {type: i, ...a} = Mi(r, t)
      , o = typeof r.children == `function` ? r.children({
        isActive: a[`data-status`] === `active`
    }) : r.children;
    if (!n) {
        let {disabled: e, ...t} = a;
        return M.createElement(`a`, t, o)
    }
    return M.createElement(n, a, o)
}
);
function Wi(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Gi(e) {
    let t = p();
    return M.useCallback(async (...n) => {
        try {
            let t = await e(...n);
            if (u(t))
                throw t;
            return t
        } catch (e) {
            if (u(e))
                return e.options._fromLocation = t.stores.location.get(),
                t.navigate(t.resolveRedirect(e).options);
            throw e
        }
    }
    , [t, e])
}
function Ki(e) {
    return e !== `__proto__` && e !== `constructor` && e !== `prototype`
}
function qi(e, t) {
    let n = Object.create(null);
    if (e)
        for (let t of Object.keys(e))
            Ki(t) && (n[t] = e[t]);
    if (t && typeof t == `object`)
        for (let e of Object.keys(t))
            Ki(e) && (n[e] = t[e]);
    return n
}
function Ji(e) {
    if (!e)
        return Object.create(null);
    let t = Object.create(null);
    for (let n of Object.keys(e))
        Ki(n) && (t[n] = e[n]);
    return t
}
var Yi = () => {
    throw Error(`createServerOnlyFn() functions can only be called on the server!`)
}
  , Xi = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let r = e => Xi(void 0, {
        ...n,
        validator: e,
        inputValidator: e
    });
    return Object.assign(e => Xi(void 0, {
        ...n,
        ...e
    }), {
        options: n,
        middleware: e => {
            let t = [...n.middleware || []];
            e.map(e => {
                ae in e ? e.options.middleware && t.push(...e.options.middleware) : t.push(e)
            }
            );
            let r = Xi(void 0, {
                ...n,
                middleware: t
            });
            return r[ae] = !0,
            r
        }
        ,
        validator: r,
        inputValidator: r,
        handler: (...e) => {
            let[t,r] = e
              , i = {
                ...n,
                extractedFn: t,
                serverFn: r
            }
              , a = [...i.middleware || [], ea(i)];
            return t.method = n.method,
            Object.assign(async e => {
                let n = await Zi(a, `client`, {
                    ...t,
                    ...i,
                    data: e?.data,
                    headers: e?.headers,
                    signal: e?.signal,
                    fetch: e?.fetch,
                    context: Ji()
                })
                  , r = h(n.error);
                if (r)
                    throw r;
                if (n.error)
                    throw n.error;
                return n.result
            }
            , {
                ...t,
                method: n.method,
                __executeServer: async e => {
                    let n = Yi()
                      , r = n.contextAfterGlobalMiddlewares;
                    return await Zi(a, `server`, {
                        ...t,
                        ...e,
                        serverFnMeta: t.serverFnMeta,
                        context: qi(e.context, r),
                        request: n.request
                    }).then(e => ({
                        result: e.result,
                        error: e.error,
                        context: e.sendContext
                    }))
                }
            })
        }
    })
}
;
async function Zi(e, t, n) {
    let r = Qi([...le()?.functionMiddleware || [], ...e]);
    if (t === `server`) {
        let e = Yi({
            throwIfNotFound: !1
        });
        e?.executedRequestMiddlewares && (r = r.filter(t => !e.executedRequestMiddlewares.has(t)))
    }
    let i = async e => {
        let n = r.shift();
        if (!n)
            return e;
        try {
            let r = `validator` in n.options ? n.options.validator : void 0;
            !r && `inputValidator` in n.options && (r = n.options.inputValidator),
            r && t === `server` && (e.data = await $i(r, e.data));
            let a;
            if (t === `client` ? `client` in n.options && (a = n.options.client) : `server` in n.options && (a = n.options.server),
            a) {
                let t = async (t={}) => {
                    let n = await i({
                        ...e,
                        ...t,
                        context: qi(e.context, t.context),
                        sendContext: qi(e.sendContext, t.sendContext),
                        headers: ki(e.headers, t.headers),
                        _callSiteFetch: e._callSiteFetch,
                        fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
                        result: t.result === void 0 ? t instanceof Response ? t : e.result : t.result,
                        error: t.error ?? e.error
                    });
                    if (n.error)
                        throw n.error;
                    return n
                }
                  , n = await a({
                    ...e,
                    next: t
                });
                if (u(n))
                    return {
                        ...e,
                        error: n
                    };
                if (n instanceof Response)
                    return {
                        ...e,
                        result: n
                    };
                if (!n)
                    throw Error(`User middleware returned undefined. You must call next() or return a result in your middlewares.`);
                return n
            }
            return i(e)
        } catch (t) {
            return {
                ...e,
                error: t
            }
        }
    }
    ;
    return i({
        ...n,
        headers: n.headers || {},
        sendContext: n.sendContext || {},
        context: n.context || Ji(),
        _callSiteFetch: n.fetch
    })
}
function Qi(e, t=100) {
    let n = new Set
      , r = []
      , i = (e, a) => {
        if (a > t)
            throw Error(`Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`);
        e.forEach(e => {
            e.options.middleware && i(e.options.middleware, a + 1),
            n.has(e) || (n.add(e),
            r.push(e))
        }
        )
    }
    ;
    return i(e, 0),
    r
}
async function $i(e, t) {
    if (e == null)
        return {};
    if (`~standard` in e) {
        let n = await e[`~standard`].validate(t);
        if (n.issues)
            throw Error(JSON.stringify(n.issues, void 0, 2));
        return n.value
    }
    if (`parse` in e)
        return e.parse(t);
    if (typeof e == `function`)
        return e(t);
    throw Error(`Invalid validator type!`)
}
function ea(e) {
    return {
        "~types": void 0,
        options: {
            inputValidator: e.validator ?? e.inputValidator,
            client: async ({next: t, sendContext: n, fetch: r, ...i}) => {
                let a = {
                    ...i,
                    context: n,
                    fetch: r
                };
                return t(await e.extractedFn?.(a))
            }
            ,
            server: async ({next: t, ...n}) => {
                let r = await e.serverFn?.(n);
                return t({
                    ...n,
                    result: r
                })
            }
        }
    }
}
var ta = (e, t) => {
    let n = {
        type: `request`,
        ...t || e
    }
      , r = e => ta({}, Object.assign(n, {
        validator: e,
        inputValidator: e
    }));
    return {
        options: n,
        middleware: e => ta({}, Object.assign(n, {
            middleware: e
        })),
        validator: r,
        inputValidator: r,
        client: e => ta({}, Object.assign(n, {
            client: e
        })),
        server: e => ta({}, Object.assign(n, {
            server: e
        }))
    }
}
;
function na(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function ra(e, t, n, r) {
    function i(e) {
        return e instanceof n ? e : new n(function(t) {
            t(e)
        }
        )
    }
    return new (n ||= Promise)(function(n, a) {
        function o(e) {
            try {
                c(r.next(e))
            } catch (e) {
                a(e)
            }
        }
        function s(e) {
            try {
                c(r.throw(e))
            } catch (e) {
                a(e)
            }
        }
        function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
var ia = e => e ? (...t) => e(...t) : (...e) => fetch(...e), aa = class extends Error {
    constructor(e, t=`FunctionsError`, n) {
        super(e),
        this.name = t,
        this.context = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            context: this.context
        }
    }
}
, oa = class extends aa {
    constructor(e) {
        super(`Failed to send a request to the Edge Function`, `FunctionsFetchError`, e)
    }
}
, sa = class extends aa {
    constructor(e) {
        super(`Relay Error invoking the Edge Function`, `FunctionsRelayError`, e)
    }
}
, ca = class extends aa {
    constructor(e) {
        super(`Edge Function returned a non-2xx status code`, `FunctionsHttpError`, e)
    }
}
, la;
(function(e) {
    e.Any = `any`,
    e.ApNortheast1 = `ap-northeast-1`,
    e.ApNortheast2 = `ap-northeast-2`,
    e.ApSouth1 = `ap-south-1`,
    e.ApSoutheast1 = `ap-southeast-1`,
    e.ApSoutheast2 = `ap-southeast-2`,
    e.CaCentral1 = `ca-central-1`,
    e.EuCentral1 = `eu-central-1`,
    e.EuWest1 = `eu-west-1`,
    e.EuWest2 = `eu-west-2`,
    e.EuWest3 = `eu-west-3`,
    e.SaEast1 = `sa-east-1`,
    e.UsEast1 = `us-east-1`,
    e.UsWest1 = `us-west-1`,
    e.UsWest2 = `us-west-2`
}
)(la ||= {});
var ua = class {
    constructor(e, {headers: t={}, customFetch: n, region: r=la.Any}={}) {
        this.url = e,
        this.headers = t,
        this.region = r,
        this.fetch = ia(n)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e) {
        return ra(this, arguments, void 0, function*(e, t={}) {
            var n;
            let r, i, a;
            try {
                let {headers: n, method: o, body: s, signal: c, timeout: l} = t
                  , u = {}
                  , {region: d} = t;
                d ||= this.region;
                let f = new URL(`${this.url}/${e}`);
                d && d !== `any` && (u[`x-region`] = d,
                f.searchParams.set(`forceFunctionRegion`, d));
                let p, m = !!n && Object.keys(n).some(e => e.toLowerCase() === `content-type`);
                s && !m ? typeof Blob < `u` && s instanceof Blob || s instanceof ArrayBuffer ? (u[`Content-Type`] = `application/octet-stream`,
                p = s) : typeof s == `string` ? (u[`Content-Type`] = `text/plain`,
                p = s) : typeof FormData < `u` && s instanceof FormData ? p = s : (u[`Content-Type`] = `application/json`,
                p = JSON.stringify(s)) : p = s && typeof s != `string` && !(typeof Blob < `u` && s instanceof Blob) && !(s instanceof ArrayBuffer) && !(typeof FormData < `u` && s instanceof FormData) ? JSON.stringify(s) : s;
                let h = c;
                l && (i = new AbortController,
                r = setTimeout( () => i.abort(), l),
                c ? (h = i.signal,
                a = () => i.abort(),
                c.addEventListener(`abort`, a)) : h = i.signal);
                let g = yield this.fetch(f.toString(), {
                    method: o || `POST`,
                    headers: Object.assign(Object.assign(Object.assign({}, u), this.headers), n),
                    body: p,
                    signal: h
                }).catch(e => {
                    throw new oa(e)
                }
                )
                  , ee = g.headers.get(`x-relay-error`);
                if (ee && ee === `true`)
                    throw new sa(g);
                if (!g.ok)
                    throw new ca(g);
                let te = (g.headers.get(`Content-Type`) ?? `text/plain`).split(`;`)[0].trim().toLowerCase(), ne;
                return ne = te === `application/json` ? yield g.json() : te === `application/octet-stream` || te === `application/pdf` ? yield g.blob() : te === `text/event-stream` ? g : te === `multipart/form-data` ? yield g.formData() : yield g.text(),
                {
                    data: ne,
                    error: null,
                    response: g
                }
            } catch (e) {
                return {
                    data: null,
                    error: e,
                    response: e instanceof ca || e instanceof sa ? e.context : void 0
                }
            } finally {
                r && clearTimeout(r),
                a && ((n = t.signal) == null || n.removeEventListener(`abort`, a))
            }
        })
    }
}
  , da = 3
  , fa = e => Math.min(1e3 * 2 ** e, 3e4)
  , pa = [520, 503]
  , ma = [`GET`, `HEAD`, `OPTIONS`]
  , ha = class extends Error {
    constructor(e) {
        super(e.message),
        this.name = `PostgrestError`,
        this.details = e.details,
        this.hint = e.hint,
        this.code = e.code
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            details: this.details,
            hint: this.hint,
            code: this.code
        }
    }
}
;
function ga(e, t) {
    return new Promise(n => {
        if (t?.aborted) {
            n();
            return
        }
        let r = setTimeout( () => {
            t?.removeEventListener(`abort`, i),
            n()
        }
        , e);
        function i() {
            clearTimeout(r),
            n()
        }
        t?.addEventListener(`abort`, i)
    }
    )
}
function _a(e, t, n, r) {
    return !(!r || n >= da || !ma.includes(e) || !pa.includes(t))
}
var va = class {
    constructor(e) {
        this.shouldThrowOnError = !1,
        this.retryEnabled = !0,
        this.method = e.method,
        this.url = e.url,
        this.headers = new Headers(e.headers),
        this.schema = e.schema,
        this.body = e.body,
        this.shouldThrowOnError = e.shouldThrowOnError ?? !1,
        this.signal = e.signal,
        this.isMaybeSingle = e.isMaybeSingle ?? !1,
        this.shouldStripNulls = e.shouldStripNulls ?? !1,
        this.urlLengthLimit = e.urlLengthLimit ?? 8e3,
        this.retryEnabled = e.retry ?? !0,
        e.fetch ? this.fetch = e.fetch : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    stripNulls() {
        if (this.headers.get(`Accept`) === `text/csv`)
            throw Error(`stripNulls() cannot be used with csv()`);
        return this.shouldStripNulls = !0,
        this
    }
    setHeader(e, t) {
        return this.headers = new Headers(this.headers),
        this.headers.set(e, t),
        this
    }
    retry(e) {
        return this.retryEnabled = e,
        this
    }
    then(e, t) {
        var n = this;
        if (this.schema === void 0 || ([`GET`, `HEAD`].includes(this.method) ? this.headers.set(`Accept-Profile`, this.schema) : this.headers.set(`Content-Profile`, this.schema)),
        this.method !== `GET` && this.method !== `HEAD` && this.headers.set(`Content-Type`, `application/json`),
        this.shouldStripNulls) {
            let e = this.headers.get(`Accept`);
            e === `application/vnd.pgrst.object+json` ? this.headers.set(`Accept`, `application/vnd.pgrst.object+json;nulls=stripped`) : (!e || e === `application/json`) && this.headers.set(`Accept`, `application/vnd.pgrst.array+json;nulls=stripped`)
        }
        let r = this.fetch
          , i = (async () => {
            let e = 0;
            for (; ; ) {
                let t = {};
                n.headers.forEach( (e, n) => {
                    t[n] = e
                }
                ),
                e > 0 && (t[`X-Retry-Count`] = String(e));
                let i;
                try {
                    i = await r(n.url.toString(), {
                        method: n.method,
                        headers: t,
                        body: JSON.stringify(n.body, (e, t) => typeof t == `bigint` ? t.toString() : t),
                        signal: n.signal
                    })
                } catch (t) {
                    if (t?.name === `AbortError` || t?.code === `ABORT_ERR` || !ma.includes(n.method))
                        throw t;
                    if (n.retryEnabled && e < da) {
                        let t = fa(e);
                        e++,
                        await ga(t, n.signal);
                        continue
                    }
                    throw t
                }
                if (_a(n.method, i.status, e, n.retryEnabled)) {
                    let t = i.headers?.get(`Retry-After`) ?? null
                      , r = t === null ? fa(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
                    await i.text(),
                    e++,
                    await ga(r, n.signal);
                    continue
                }
                return await n.processResponse(i)
            }
        }
        )();
        return this.shouldThrowOnError || (i = i.catch(e => {
            let t = ``
              , n = ``
              , r = ``
              , i = e?.cause;
            if (i) {
                let n = i?.message ?? ``
                  , r = i?.code ?? ``;
                t = `${e?.name ?? `FetchError`}: ${e?.message}`,
                t += `\n\nCaused by: ${i?.name ?? `Error`}: ${n}`,
                r && (t += ` (${r})`),
                i?.stack && (t += `\n${i.stack}`)
            } else
                t = e?.stack ?? ``;
            let a = this.url.toString().length;
            return e?.name === `AbortError` || e?.code === `ABORT_ERR` ? (r = ``,
            n = `Request was aborted (timeout or manual cancellation)`,
            a > this.urlLengthLimit && (n += `. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (i?.name === `HeadersOverflowError` || i?.code === `UND_ERR_HEADERS_OVERFLOW`) && (r = ``,
            n = `HTTP headers exceeded server limits (typically 16KB)`,
            a > this.urlLengthLimit && (n += `. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
            {
                success: !1,
                error: {
                    message: `${e?.name ?? `FetchError`}: ${e?.message}`,
                    details: t,
                    hint: n,
                    code: r
                },
                data: null,
                count: null,
                status: 0,
                statusText: ``
            }
        }
        )),
        i.then(e, t)
    }
    async processResponse(e) {
        var t = this;
        let n = null
          , r = null
          , i = null
          , a = e.status
          , o = e.statusText;
        if (e.ok) {
            if (t.method !== `HEAD`) {
                let i = await e.text();
                if (i !== ``)
                    if (t.headers.get(`Accept`) === `text/csv`)
                        r = i;
                    else if (t.headers.get(`Accept`) && t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))
                        r = i;
                    else
                        try {
                            r = JSON.parse(i)
                        } catch {
                            if (n = {
                                message: i
                            },
                            r = null,
                            t.shouldThrowOnError)
                                throw new ha({
                                    message: i,
                                    details: ``,
                                    hint: ``,
                                    code: ``
                                })
                        }
            }
            let s = t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/)
              , c = e.headers.get(`content-range`)?.split(`/`);
            s && c && c.length > 1 && (i = parseInt(c[1])),
            t.isMaybeSingle && Array.isArray(r) && (r.length > 1 ? (n = {
                code: `PGRST116`,
                details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                hint: null,
                message: `JSON object requested, multiple (or no) rows returned`
            },
            r = null,
            i = null,
            a = 406,
            o = `Not Acceptable`) : r = r.length === 1 ? r[0] : null)
        } else {
            let i = await e.text();
            try {
                n = JSON.parse(i),
                Array.isArray(n) && e.status === 404 && (r = [],
                n = null,
                a = 200,
                o = `OK`)
            } catch {
                e.status === 404 && i === `` ? (a = 204,
                o = `No Content`) : n = {
                    message: i
                }
            }
            if (n && t.shouldThrowOnError)
                throw new ha(n)
        }
        return {
            success: n === null,
            error: n,
            data: r,
            count: i,
            status: a,
            statusText: o
        }
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
  , ya = class extends va {
    throwOnError() {
        return super.throwOnError()
    }
    select(e) {
        let t = !1
          , n = (e ?? `*`).split(``).map(e => /\s/.test(e) && !t ? `` : (e === `"` && (t = !t),
        e)).join(``);
        return this.url.searchParams.set(`select`, n),
        this.headers.append(`Prefer`, `return=representation`),
        this
    }
    order(e, {ascending: t=!0, nullsFirst: n, foreignTable: r, referencedTable: i=r}={}) {
        let a = i ? `${i}.order` : `order`
          , o = this.url.searchParams.get(a);
        return this.url.searchParams.set(a, `${o ? `${o},` : ``}${e}.${t ? `asc` : `desc`}${n === void 0 ? `` : n ? `.nullsfirst` : `.nullslast`}`),
        this
    }
    limit(e, {foreignTable: t, referencedTable: n=t}={}) {
        let r = n === void 0 ? `limit` : `${n}.limit`;
        return this.url.searchParams.set(r, `${e}`),
        this
    }
    range(e, t, {foreignTable: n, referencedTable: r=n}={}) {
        let i = r === void 0 ? `offset` : `${r}.offset`
          , a = r === void 0 ? `limit` : `${r}.limit`;
        return this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(a, `${t - e + 1}`),
        this
    }
    abortSignal(e) {
        return this.signal = e,
        this
    }
    single() {
        return this.headers.set(`Accept`, `application/vnd.pgrst.object+json`),
        this
    }
    maybeSingle() {
        return this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set(`Accept`, `text/csv`),
        this
    }
    geojson() {
        return this.headers.set(`Accept`, `application/geo+json`),
        this
    }
    explain({analyze: e=!1, verbose: t=!1, settings: n=!1, buffers: r=!1, wal: i=!1, format: a=`text`}={}) {
        let o = [e ? `analyze` : null, t ? `verbose` : null, n ? `settings` : null, r ? `buffers` : null, i ? `wal` : null].filter(Boolean).join(`|`)
          , s = this.headers.get(`Accept`) ?? `application/json`;
        return this.headers.set(`Accept`, `application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),
        this
    }
    rollback() {
        return this.headers.append(`Prefer`, `tx=rollback`),
        this
    }
    returns() {
        return this
    }
    maxAffected(e) {
        return this.headers.append(`Prefer`, `handling=strict`),
        this.headers.append(`Prefer`, `max-affected=${e}`),
        this
    }
}
  , ba = RegExp(`[,()]`)
  , xa = class extends ya {
    throwOnError() {
        return super.throwOnError()
    }
    eq(e, t) {
        return this.url.searchParams.append(e, `eq.${t}`),
        this
    }
    neq(e, t) {
        return this.url.searchParams.append(e, `neq.${t}`),
        this
    }
    gt(e, t) {
        return this.url.searchParams.append(e, `gt.${t}`),
        this
    }
    gte(e, t) {
        return this.url.searchParams.append(e, `gte.${t}`),
        this
    }
    lt(e, t) {
        return this.url.searchParams.append(e, `lt.${t}`),
        this
    }
    lte(e, t) {
        return this.url.searchParams.append(e, `lte.${t}`),
        this
    }
    like(e, t) {
        return this.url.searchParams.append(e, `like.${t}`),
        this
    }
    likeAllOf(e, t) {
        return this.url.searchParams.append(e, `like(all).{${t.join(`,`)}}`),
        this
    }
    likeAnyOf(e, t) {
        return this.url.searchParams.append(e, `like(any).{${t.join(`,`)}}`),
        this
    }
    ilike(e, t) {
        return this.url.searchParams.append(e, `ilike.${t}`),
        this
    }
    ilikeAllOf(e, t) {
        return this.url.searchParams.append(e, `ilike(all).{${t.join(`,`)}}`),
        this
    }
    ilikeAnyOf(e, t) {
        return this.url.searchParams.append(e, `ilike(any).{${t.join(`,`)}}`),
        this
    }
    regexMatch(e, t) {
        return this.url.searchParams.append(e, `match.${t}`),
        this
    }
    regexIMatch(e, t) {
        return this.url.searchParams.append(e, `imatch.${t}`),
        this
    }
    is(e, t) {
        return this.url.searchParams.append(e, `is.${t}`),
        this
    }
    isDistinct(e, t) {
        return this.url.searchParams.append(e, `isdistinct.${t}`),
        this
    }
    in(e, t) {
        let n = Array.from(new Set(t)).map(e => typeof e == `string` && ba.test(e) ? `"${e}"` : `${e}`).join(`,`);
        return this.url.searchParams.append(e, `in.(${n})`),
        this
    }
    notIn(e, t) {
        let n = Array.from(new Set(t)).map(e => typeof e == `string` && ba.test(e) ? `"${e}"` : `${e}`).join(`,`);
        return this.url.searchParams.append(e, `not.in.(${n})`),
        this
    }
    contains(e, t) {
        return typeof t == `string` ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(`,`)}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
    }
    containedBy(e, t) {
        return typeof t == `string` ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(`,`)}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
    }
    rangeGt(e, t) {
        return this.url.searchParams.append(e, `sr.${t}`),
        this
    }
    rangeGte(e, t) {
        return this.url.searchParams.append(e, `nxl.${t}`),
        this
    }
    rangeLt(e, t) {
        return this.url.searchParams.append(e, `sl.${t}`),
        this
    }
    rangeLte(e, t) {
        return this.url.searchParams.append(e, `nxr.${t}`),
        this
    }
    rangeAdjacent(e, t) {
        return this.url.searchParams.append(e, `adj.${t}`),
        this
    }
    overlaps(e, t) {
        return typeof t == `string` ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(`,`)}}`),
        this
    }
    textSearch(e, t, {config: n, type: r}={}) {
        let i = ``;
        r === `plain` ? i = `pl` : r === `phrase` ? i = `ph` : r === `websearch` && (i = `w`);
        let a = n === void 0 ? `` : `(${n})`;
        return this.url.searchParams.append(e, `${i}fts${a}.${t}`),
        this
    }
    match(e) {
        return Object.entries(e).filter( ([e,t]) => t !== void 0).forEach( ([e,t]) => {
            this.url.searchParams.append(e, `eq.${t}`)
        }
        ),
        this
    }
    not(e, t, n) {
        return this.url.searchParams.append(e, `not.${t}.${n}`),
        this
    }
    or(e, {foreignTable: t, referencedTable: n=t}={}) {
        let r = n ? `${n}.or` : `or`;
        return this.url.searchParams.append(r, `(${e})`),
        this
    }
    filter(e, t, n) {
        return this.url.searchParams.append(e, `${t}.${n}`),
        this
    }
}
  , Sa = class {
    constructor(e, {headers: t={}, schema: n, fetch: r, urlLengthLimit: i=8e3, retry: a}) {
        this.url = e,
        this.headers = new Headers(t),
        this.schema = n,
        this.fetch = r,
        this.urlLengthLimit = i,
        this.retry = a
    }
    cloneRequestState() {
        return {
            url: new URL(this.url.toString()),
            headers: new Headers(this.headers)
        }
    }
    select(e, t) {
        let {head: n=!1, count: r} = t ?? {}
          , i = n ? `HEAD` : `GET`
          , a = !1
          , o = (e ?? `*`).split(``).map(e => /\s/.test(e) && !a ? `` : (e === `"` && (a = !a),
        e)).join(``)
          , {url: s, headers: c} = this.cloneRequestState();
        return s.searchParams.set(`select`, o),
        r && c.append(`Prefer`, `count=${r}`),
        new xa({
            method: i,
            url: s,
            headers: c,
            schema: this.schema,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    insert(e, {count: t, defaultToNull: n=!0}={}) {
        let {url: r, headers: i} = this.cloneRequestState();
        if (t && i.append(`Prefer`, `count=${t}`),
        n || i.append(`Prefer`, `missing=default`),
        Array.isArray(e)) {
            let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
                let e = [...new Set(t)].map(e => `"${e}"`);
                r.searchParams.set(`columns`, e.join(`,`))
            }
        }
        return new xa({
            method: `POST`,
            url: r,
            headers: i,
            schema: this.schema,
            body: e,
            fetch: this.fetch ?? fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    upsert(e, {onConflict: t, ignoreDuplicates: n=!1, count: r, defaultToNull: i=!0}={}) {
        let {url: a, headers: o} = this.cloneRequestState();
        if (o.append(`Prefer`, `resolution=${n ? `ignore` : `merge`}-duplicates`),
        t !== void 0 && a.searchParams.set(`on_conflict`, t),
        r && o.append(`Prefer`, `count=${r}`),
        i || o.append(`Prefer`, `missing=default`),
        Array.isArray(e)) {
            let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
                let e = [...new Set(t)].map(e => `"${e}"`);
                a.searchParams.set(`columns`, e.join(`,`))
            }
        }
        return new xa({
            method: `POST`,
            url: a,
            headers: o,
            schema: this.schema,
            body: e,
            fetch: this.fetch ?? fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    update(e, {count: t}={}) {
        let {url: n, headers: r} = this.cloneRequestState();
        return t && r.append(`Prefer`, `count=${t}`),
        new xa({
            method: `PATCH`,
            url: n,
            headers: r,
            schema: this.schema,
            body: e,
            fetch: this.fetch ?? fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    delete({count: e}={}) {
        let {url: t, headers: n} = this.cloneRequestState();
        return e && n.append(`Prefer`, `count=${e}`),
        new xa({
            method: `DELETE`,
            url: t,
            headers: n,
            schema: this.schema,
            fetch: this.fetch ?? fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
}
;
function Ca(e) {
    "@babel/helpers - typeof";
    return Ca = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }
    ,
    Ca(e)
}
function wa(e, t) {
    if (Ca(e) != `object` || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (Ca(r) != `object`)
            return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}
function Ta(e) {
    var t = wa(e, `string`);
    return Ca(t) == `symbol` ? t : t + ``
}
function Ea(e, t, n) {
    return (t = Ta(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Da(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Oa(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? Da(Object(n), !0).forEach(function(t) {
            Ea(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
var ka = class e {
    constructor(e, {headers: t={}, schema: n, fetch: r, timeout: i, urlLengthLimit: a=8e3, retry: o}={}) {
        this.url = e,
        this.headers = new Headers(t),
        this.schemaName = n,
        this.urlLengthLimit = a;
        let s = r ?? globalThis.fetch;
        i !== void 0 && i > 0 ? this.fetch = (e, t) => {
            let n = new AbortController
              , r = setTimeout( () => n.abort(), i)
              , a = t?.signal;
            if (a) {
                if (a.aborted)
                    return clearTimeout(r),
                    s(e, t);
                let i = () => {
                    clearTimeout(r),
                    n.abort()
                }
                ;
                return a.addEventListener(`abort`, i, {
                    once: !0
                }),
                s(e, Oa(Oa({}, t), {}, {
                    signal: n.signal
                })).finally( () => {
                    clearTimeout(r),
                    a.removeEventListener(`abort`, i)
                }
                )
            }
            return s(e, Oa(Oa({}, t), {}, {
                signal: n.signal
            })).finally( () => clearTimeout(r))
        }
        : this.fetch = s,
        this.retry = o
    }
    from(e) {
        if (!e || typeof e != `string` || e.trim() === ``)
            throw Error(`Invalid relation name: relation must be a non-empty string.`);
        return new Sa(new URL(`${this.url}/${e}`),{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    schema(t) {
        return new e(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
    rpc(e, t={}, {head: n=!1, get: r=!1, count: i}={}) {
        let a, o = new URL(`${this.url}/rpc/${e}`), s, c = e => typeof e == `object` && !!e && (!Array.isArray(e) || e.some(c)), l = n && Object.values(t).some(c);
        l ? (a = `POST`,
        s = t) : n || r ? (a = n ? `HEAD` : `GET`,
        Object.entries(t).filter( ([e,t]) => t !== void 0).map( ([e,t]) => [e, Array.isArray(t) ? `{${t.join(`,`)}}` : `${t}`]).forEach( ([e,t]) => {
            o.searchParams.append(e, t)
        }
        )) : (a = `POST`,
        s = t);
        let u = new Headers(this.headers);
        return l ? u.set(`Prefer`, i ? `count=${i},return=minimal` : `return=minimal`) : i && u.set(`Prefer`, `count=${i}`),
        new xa({
            method: a,
            url: o,
            headers: u,
            schema: this.schemaName,
            body: s,
            fetch: this.fetch ?? fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry
        })
    }
}
, Aa = class {
    constructor() {}
    static detectEnvironment() {
        if (typeof WebSocket < `u`)
            return {
                type: `native`,
                wsConstructor: WebSocket
            };
        let e = globalThis;
        if (typeof globalThis < `u` && e.WebSocket !== void 0)
            return {
                type: `native`,
                wsConstructor: e.WebSocket
            };
        let t = typeof global < `u` ? global : void 0;
        if (t && t.WebSocket !== void 0)
            return {
                type: `native`,
                wsConstructor: t.WebSocket
            };
        if (typeof globalThis < `u` && e.WebSocketPair !== void 0 && globalThis.WebSocket === void 0)
            return {
                type: `cloudflare`,
                error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,
                workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`
            };
        if (typeof globalThis < `u` && e.EdgeRuntime || typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`))
            return {
                type: `unsupported`,
                error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,
                workaround: `Use serverless functions or a different deployment target for WebSocket functionality.`
            };
        let n = globalThis.process;
        if (n) {
            let e = n.versions;
            if (e && e.node)
                return {
                    type: `unsupported`,
                    error: `Node.js detected but native WebSocket not found.`,
                    workaround: `Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`
                }
        }
        return {
            type: `unsupported`,
            error: `Unknown JavaScript runtime without WebSocket support.`,
            workaround: `Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`
        }
    }
    static getWebSocketConstructor() {
        let e = this.detectEnvironment();
        if (e.wsConstructor)
            return e.wsConstructor;
        let t = e.error || `WebSocket not supported in this environment.`;
        throw e.workaround && (t += `\n\nSuggested solution: ${e.workaround}`),
        Error(t)
    }
    static isWebSocketSupported() {
        try {
            return this.detectEnvironment().type === `native`
        } catch {
            return !1
        }
    }
}
, ja = `realtime-js/2.111.0`, Ma = `1.0.0`, Na = `2.0.0`, Pa = Na, Fa = 1e4, Ia = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`
}, La = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`,
    access_token: `access_token`
}, Ra = {
    connecting: `connecting`,
    open: `open`,
    closing: `closing`,
    closed: `closed`
}, za = class {
    constructor(e) {
        this.HEADER_LENGTH = 1,
        this.USER_BROADCAST_PUSH_META_LENGTH = 6,
        this.KINDS = {
            userBroadcastPush: 3,
            userBroadcast: 4
        },
        this.BINARY_ENCODING = 0,
        this.JSON_ENCODING = 1,
        this.BROADCAST_EVENT = `broadcast`,
        this.allowedMetadataKeys = [],
        this.allowedMetadataKeys = e ?? []
    }
    encode(e, t) {
        if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == `string`)
            return t(this._binaryEncodeUserBroadcastPush(e));
        let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n))
    }
    _binaryEncodeUserBroadcastPush(e) {
        return this._isArrayBuffer(e.payload?.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e)
    }
    _encodeBinaryUserBroadcastPush(e) {
        let t = e.payload?.payload ?? new ArrayBuffer(0);
        return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, t)
    }
    _encodeJsonUserBroadcastPush(e) {
        let t = e.payload?.payload ?? {}
          , n = new TextEncoder().encode(JSON.stringify(t)).buffer;
        return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, n)
    }
    _encodeUserBroadcastPush(e, t, n) {
        let r = new TextEncoder
          , i = r.encode(e.topic)
          , a = r.encode(e.ref ?? ``)
          , o = r.encode(e.join_ref ?? ``)
          , s = r.encode(e.payload.event)
          , c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}
          , l = r.encode(Object.keys(c).length === 0 ? `` : JSON.stringify(c));
        if (o.length > 255)
            throw Error(`joinRef length ${o.length} exceeds maximum of 255`);
        if (a.length > 255)
            throw Error(`ref length ${a.length} exceeds maximum of 255`);
        if (i.length > 255)
            throw Error(`topic length ${i.length} exceeds maximum of 255`);
        if (s.length > 255)
            throw Error(`userEvent length ${s.length} exceeds maximum of 255`);
        if (l.length > 255)
            throw Error(`metadata length ${l.length} exceeds maximum of 255`);
        let u = this.USER_BROADCAST_PUSH_META_LENGTH + o.length + a.length + i.length + s.length + l.length
          , d = new ArrayBuffer(this.HEADER_LENGTH + u)
          , f = new DataView(d)
          , p = new Uint8Array(d)
          , m = 0;
        f.setUint8(m++, this.KINDS.userBroadcastPush),
        f.setUint8(m++, o.length),
        f.setUint8(m++, a.length),
        f.setUint8(m++, i.length),
        f.setUint8(m++, s.length),
        f.setUint8(m++, l.length),
        f.setUint8(m++, t),
        p.set(o, m),
        m += o.length,
        p.set(a, m),
        m += a.length,
        p.set(i, m),
        m += i.length,
        p.set(s, m),
        m += s.length,
        p.set(l, m),
        m += l.length;
        var h = new Uint8Array(d.byteLength + n.byteLength);
        return h.set(new Uint8Array(d), 0),
        h.set(new Uint8Array(n), d.byteLength),
        h.buffer
    }
    decode(e, t) {
        if (this._isArrayBuffer(e))
            return t(this._binaryDecode(e));
        if (typeof e == `string`) {
            let[n,r,i,a,o] = JSON.parse(e);
            return t({
                join_ref: n,
                ref: r,
                topic: i,
                event: a,
                payload: o
            })
        }
        return t({})
    }
    _binaryDecode(e) {
        let t = new DataView(e)
          , n = t.getUint8(0)
          , r = new TextDecoder;
        switch (n) {
        case this.KINDS.userBroadcast:
            return this._decodeUserBroadcast(e, t, r)
        }
    }
    _decodeUserBroadcast(e, t, n) {
        let r = t.getUint8(1)
          , i = t.getUint8(2)
          , a = t.getUint8(3)
          , o = t.getUint8(4)
          , s = this.HEADER_LENGTH + 4
          , c = n.decode(e.slice(s, s + r));
        s += r;
        let l = n.decode(e.slice(s, s + i));
        s += i;
        let u = n.decode(e.slice(s, s + a));
        s += a;
        let d = e.slice(s, e.byteLength)
          , f = o === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d
          , p = {
            type: this.BROADCAST_EVENT,
            event: l,
            payload: f
        };
        return a > 0 && (p.meta = JSON.parse(u)),
        {
            join_ref: null,
            ref: null,
            topic: c,
            event: this.BROADCAST_EVENT,
            payload: p
        }
    }
    _isArrayBuffer(e) {
        return e instanceof ArrayBuffer || e?.constructor?.name === `ArrayBuffer`
    }
    _pick(e, t) {
        return !e || typeof e != `object` ? {} : Object.fromEntries(Object.entries(e).filter( ([e]) => t.includes(e)))
    }
}
, N;
(function(e) {
    e.abstime = `abstime`,
    e.bool = `bool`,
    e.date = `date`,
    e.daterange = `daterange`,
    e.float4 = `float4`,
    e.float8 = `float8`,
    e.int2 = `int2`,
    e.int4 = `int4`,
    e.int4range = `int4range`,
    e.int8 = `int8`,
    e.int8range = `int8range`,
    e.json = `json`,
    e.jsonb = `jsonb`,
    e.money = `money`,
    e.numeric = `numeric`,
    e.oid = `oid`,
    e.reltime = `reltime`,
    e.text = `text`,
    e.time = `time`,
    e.timestamp = `timestamp`,
    e.timestamptz = `timestamptz`,
    e.timetz = `timetz`,
    e.tsrange = `tsrange`,
    e.tstzrange = `tstzrange`
}
)(N ||= {});
var Ba = (e, t, n={}) => {
    let r = n.skipTypes ?? [];
    return t ? Object.keys(t).reduce( (n, i) => (n[i] = Va(i, e, t, r),
    n), {}) : {}
}
  , Va = (e, t, n, r) => {
    let i = t.find(t => t.name === e)?.type
      , a = n[e];
    return i && !r.includes(i) ? Ha(i, a) : Ua(a)
}
  , Ha = (e, t) => {
    if (e.charAt(0) === `_`)
        return qa(t, e.slice(1, e.length));
    switch (e) {
    case N.bool:
        return Wa(t);
    case N.float4:
    case N.float8:
    case N.int2:
    case N.int4:
    case N.int8:
    case N.numeric:
    case N.oid:
        return Ga(t);
    case N.json:
    case N.jsonb:
        return Ka(t);
    case N.timestamp:
        return Ja(t);
    case N.abstime:
    case N.date:
    case N.daterange:
    case N.int4range:
    case N.int8range:
    case N.money:
    case N.reltime:
    case N.text:
    case N.time:
    case N.timestamptz:
    case N.timetz:
    case N.tsrange:
    case N.tstzrange:
        return Ua(t);
    default:
        return Ua(t)
    }
}
  , Ua = e => e
  , Wa = e => {
    switch (e) {
    case `t`:
        return !0;
    case `f`:
        return !1;
    default:
        return e
    }
}
  , Ga = e => {
    if (typeof e == `string`) {
        let t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , Ka = e => {
    if (typeof e == `string`)
        try {
            return JSON.parse(e)
        } catch {
            return e
        }
    return e
}
  , qa = (e, t) => {
    if (typeof e != `string`)
        return e;
    let n = e.length - 1
      , r = e[n];
    if (e[0] === `{` && r === `}`) {
        let r, i = e.slice(1, n);
        try {
            r = JSON.parse(`[` + i + `]`)
        } catch {
            r = i ? i.split(`,`) : []
        }
        return r.map(e => Ha(t, e))
    }
    return e
}
  , Ja = e => typeof e == `string` ? e.replace(` `, `T`) : e
  , Ya = e => {
    let t = new URL(e);
    return t.protocol = t.protocol.replace(/^ws/i, `http`),
    t.pathname = t.pathname.replace(/\/+$/, ``).replace(/\/socket\/websocket$/i, ``).replace(/\/socket$/i, ``).replace(/\/websocket$/i, ``),
    t.pathname === `` || t.pathname === `/` ? t.pathname = `/api/broadcast` : t.pathname += `/api/broadcast`,
    t.href
}
  , Xa = e => typeof e == `function` ? e : function() {
    return e
}
  , Za = typeof self < `u` ? self : null
  , Qa = typeof window < `u` ? window : null
  , P = Za || Qa || globalThis
  , $a = `2.0.0`
  , eo = 1e4
  , to = 1e3
  , no = 100
  , F = {
    connecting: 0,
    open: 1,
    closing: 2,
    closed: 3
}
  , I = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`
}
  , ro = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`
}
  , io = {
    longpoll: `longpoll`,
    websocket: `websocket`
}
  , ao = {
    complete: 4
}
  , oo = `base64url.bearer.phx.`
  , so = class {
    constructor(e, t, n, r) {
        this.channel = e,
        this.event = t,
        this.payload = n || function() {
            return {}
        }
        ,
        this.receivedResp = null,
        this.timeout = r,
        this.timeoutTimer = null,
        this.recHooks = [],
        this.sent = !1,
        this.ref = void 0
    }
    resend(e) {
        this.timeout = e,
        this.reset(),
        this.send()
    }
    send() {
        this.hasReceived(`timeout`) || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
        }))
    }
    receive(e, t) {
        return this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({
            status: e,
            callback: t
        }),
        this
    }
    reset() {
        this.cancelRefEvent(),
        this.ref = null,
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1
    }
    destroy() {
        this.cancelRefEvent(),
        this.cancelTimeout()
    }
    matchReceive({status: e, response: t, _ref: n}) {
        this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
    }
    cancelRefEvent() {
        this.refEvent && this.channel.off(this.refEvent)
    }
    cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = null
    }
    startTimeout() {
        this.timeoutTimer && this.cancelTimeout(),
        this.ref = this.channel.socket.makeRef(),
        this.refEvent = this.channel.replyEventName(this.ref),
        this.channel.on(this.refEvent, e => {
            this.cancelRefEvent(),
            this.cancelTimeout(),
            this.receivedResp = e,
            this.matchReceive(e)
        }
        ),
        this.timeoutTimer = setTimeout( () => {
            this.trigger(`timeout`, {})
        }
        , this.timeout)
    }
    hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
    trigger(e, t) {
        this.channel.trigger(this.refEvent, {
            status: e,
            response: t
        })
    }
}
  , co = class {
    constructor(e, t) {
        this.callback = e,
        this.timerCalc = t,
        this.timer = void 0,
        this.tries = 0
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries += 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
  , lo = class {
    constructor(e, t, n) {
        this.state = I.closed,
        this.topic = e,
        this.params = Xa(t || {}),
        this.socket = n,
        this.bindings = [],
        this.bindingRef = 0,
        this.timeout = this.socket.timeout,
        this.joinedOnce = !1,
        this.joinPush = new so(this,ro.join,this.params,this.timeout),
        this.pushBuffer = [],
        this.stateChangeRefs = [],
        this.rejoinTimer = new co( () => {
            this.socket.isConnected() && this.rejoin()
        }
        ,this.socket.rejoinAfterMs),
        this.stateChangeRefs.push(this.socket.onError( () => this.rejoinTimer.reset())),
        this.stateChangeRefs.push(this.socket.onOpen( () => {
            this.rejoinTimer.reset(),
            this.isErrored() && this.rejoin()
        }
        )),
        this.joinPush.receive(`ok`, () => {
            this.state = I.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(e => e.send()),
            this.pushBuffer = []
        }
        ),
        this.joinPush.receive(`error`, e => {
            this.state = I.errored,
            this.socket.hasLogger() && this.socket.log(`channel`, `error ${this.topic}`, e),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.hasLogger() && this.socket.log(`channel`, `close ${this.topic}`),
            this.state = I.closed,
            this.socket.remove(this)
        }
        ),
        this.onError(e => {
            this.socket.hasLogger() && this.socket.log(`channel`, `error ${this.topic}`, e),
            this.isJoining() && this.joinPush.reset(),
            this.state = I.errored,
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.joinPush.receive(`timeout`, () => {
            this.socket.hasLogger() && this.socket.log(`channel`, `timeout ${this.topic}`, this.joinPush.timeout),
            new so(this,ro.leave,Xa({}),this.timeout).send(),
            this.state = I.errored,
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
        }
        ),
        this.on(ro.reply, (e, t) => {
            this.trigger(this.replyEventName(t), e)
        }
        )
    }
    join(e=this.timeout) {
        if (this.joinedOnce)
            throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);
        return this.timeout = e,
        this.joinedOnce = !0,
        this.rejoin(),
        this.joinPush
    }
    teardown() {
        this.pushBuffer.forEach(e => e.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = I.closed,
        this.bindings = []
    }
    onClose(e) {
        this.on(ro.close, e)
    }
    onError(e) {
        return this.on(ro.error, t => e(t))
    }
    on(e, t) {
        let n = this.bindingRef++;
        return this.bindings.push({
            event: e,
            ref: n,
            callback: t
        }),
        n
    }
    off(e, t) {
        this.bindings = this.bindings.filter(n => !(n.event === e && (t === void 0 || t === n.ref)))
    }
    canPush() {
        return this.socket.isConnected() && this.isJoined()
    }
    push(e, t, n=this.timeout) {
        if (t ||= {},
        !this.joinedOnce)
            throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
        let r = new so(this,e,function() {
            return t
        }
        ,n);
        return this.canPush() ? r.send() : (r.startTimeout(),
        this.pushBuffer.push(r)),
        r
    }
    leave(e=this.timeout) {
        this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        this.state = I.leaving;
        let t = () => {
            this.socket.hasLogger() && this.socket.log(`channel`, `leave ${this.topic}`),
            this.trigger(ro.close, `leave`)
        }
          , n = new so(this,ro.leave,Xa({}),e);
        return n.receive(`ok`, () => t()).receive(`timeout`, () => t()),
        n.send(),
        this.canPush() || n.trigger(`ok`, {}),
        n
    }
    onMessage(e, t, n) {
        return t
    }
    filterBindings(e, t, n) {
        return !0
    }
    isMember(e, t, n, r) {
        return this.topic === e ? r && r !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log(`channel`, `dropping outdated message`, {
            topic: e,
            event: t,
            payload: n,
            joinRef: r
        }),
        !1) : !0 : !1
    }
    joinRef() {
        return this.joinPush.ref
    }
    rejoin(e=this.timeout) {
        this.isLeaving() || (this.socket.leaveOpenTopic(this.topic),
        this.state = I.joining,
        this.joinPush.resend(e))
    }
    trigger(e, t, n, r) {
        let i = this.onMessage(e, t, n, r);
        if (t && !i)
            throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);
        let a = this.bindings.filter(r => r.event === e && this.filterBindings(r, t, n));
        for (let e = 0; e < a.length; e++)
            a[e].callback(i, n, r || this.joinRef())
    }
    replyEventName(e) {
        return `chan_reply_${e}`
    }
    isClosed() {
        return this.state === I.closed
    }
    isErrored() {
        return this.state === I.errored
    }
    isJoined() {
        return this.state === I.joined
    }
    isJoining() {
        return this.state === I.joining
    }
    isLeaving() {
        return this.state === I.leaving
    }
}
  , uo = class {
    static request(e, t, n, r, i, a, o) {
        if (P.XDomainRequest) {
            let n = new P.XDomainRequest;
            return this.xdomainRequest(n, e, t, r, i, a, o)
        } else if (P.XMLHttpRequest) {
            let s = new P.XMLHttpRequest;
            return this.xhrRequest(s, e, t, n, r, i, a, o)
        } else if (P.fetch && P.AbortController)
            return this.fetchRequest(e, t, n, r, i, a, o);
        else
            throw Error(`No suitable XMLHttpRequest implementation found`)
    }
    static fetchRequest(e, t, n, r, i, a, o) {
        let s = {
            method: e,
            headers: n,
            body: r
        }
          , c = null;
        return i && (c = new AbortController,
        setTimeout( () => c.abort(), i),
        s.signal = c.signal),
        P.fetch(t, s).then(e => e.text()).then(e => this.parseJSON(e)).then(e => o && o(e)).catch(e => {
            e.name === `AbortError` && a ? a() : o && o(null)
        }
        ),
        c
    }
    static xdomainRequest(e, t, n, r, i, a, o) {
        return e.timeout = i,
        e.open(t, n),
        e.onload = () => {
            let t = this.parseJSON(e.responseText);
            o && o(t)
        }
        ,
        a && (e.ontimeout = a),
        e.onprogress = () => {}
        ,
        e.send(r),
        e
    }
    static xhrRequest(e, t, n, r, i, a, o, s) {
        e.open(t, n, !0),
        e.timeout = a;
        for (let[t,n] of Object.entries(r))
            e.setRequestHeader(t, n);
        return e.onerror = () => s && s(null),
        e.onreadystatechange = () => {
            e.readyState === ao.complete && s && s(this.parseJSON(e.responseText))
        }
        ,
        o && (e.ontimeout = o),
        e.send(i),
        e
    }
    static parseJSON(e) {
        if (!e || e === ``)
            return null;
        try {
            return JSON.parse(e)
        } catch {
            return console && console.log(`failed to parse JSON response`, e),
            null
        }
    }
    static serialize(e, t) {
        let n = [];
        for (var r in e) {
            if (!Object.prototype.hasOwnProperty.call(e, r))
                continue;
            let i = t ? `${t}[${r}]` : r
              , a = e[r];
            typeof a == `object` ? n.push(this.serialize(a, i)) : n.push(encodeURIComponent(i) + `=` + encodeURIComponent(a))
        }
        return n.join(`&`)
    }
    static appendParams(e, t) {
        return Object.keys(t).length === 0 ? e : `${e}${e.match(/\?/) ? `&` : `?`}${this.serialize(t)}`
    }
}
  , fo = e => {
    let t = ``
      , n = new Uint8Array(e)
      , r = n.byteLength;
    for (let e = 0; e < r; e++)
        t += String.fromCharCode(n[e]);
    return btoa(t)
}
  , po = class {
    constructor(e, t) {
        t && t.length === 2 && t[1].startsWith(oo) && (this.authToken = atob(t[1].slice(oo.length))),
        this.endPoint = null,
        this.token = null,
        this.skipHeartbeat = !0,
        this.reqs = new Set,
        this.awaitingBatchAck = !1,
        this.currentBatch = null,
        this.currentBatchTimer = null,
        this.batchBuffer = [],
        this.onopen = function() {}
        ,
        this.onerror = function() {}
        ,
        this.onmessage = function() {}
        ,
        this.onclose = function() {}
        ,
        this.pollEndpoint = this.normalizeEndpoint(e),
        this.readyState = F.connecting,
        setTimeout( () => this.poll(), 0)
    }
    normalizeEndpoint(e) {
        return e.replace(`ws://`, `http://`).replace(`wss://`, `https://`).replace(RegExp(`(.*)/` + io.websocket), `$1/` + io.longpoll)
    }
    endpointURL() {
        return uo.appendParams(this.pollEndpoint, {
            token: this.token
        })
    }
    closeAndRetry(e, t, n) {
        this.close(e, t, n),
        this.readyState = F.connecting
    }
    ontimeout() {
        this.onerror(`timeout`),
        this.closeAndRetry(1005, `timeout`, !1)
    }
    isActive() {
        return this.readyState === F.open || this.readyState === F.connecting
    }
    poll() {
        let e = {
            Accept: `application/json`
        };
        this.authToken && (e[`X-Phoenix-AuthToken`] = this.authToken),
        this.ajax(`GET`, e, null, () => this.ontimeout(), e => {
            if (e) {
                var {status: t, token: n, messages: r} = e;
                if (t === 410 && this.token !== null) {
                    this.onerror(410),
                    this.closeAndRetry(3410, `session_gone`, !1);
                    return
                }
                this.token = n
            } else
                t = 0;
            switch (t) {
            case 200:
                r.forEach(e => {
                    setTimeout( () => this.onmessage({
                        data: e
                    }), 0)
                }
                ),
                this.poll();
                break;
            case 204:
                this.poll();
                break;
            case 410:
                this.readyState = F.open,
                this.onopen({}),
                this.poll();
                break;
            case 403:
                this.onerror(403),
                this.close(1008, `forbidden`, !1);
                break;
            case 0:
            case 500:
                this.onerror(500),
                this.closeAndRetry(1011, `internal server error`, 500);
                break;
            default:
                throw Error(`unhandled poll status ${t}`)
            }
        }
        )
    }
    send(e) {
        typeof e != `string` && (e = fo(e)),
        this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e],
        this.currentBatchTimer = setTimeout( () => {
            this.batchSend(this.currentBatch),
            this.currentBatch = null
        }
        , 0))
    }
    batchSend(e, t=0) {
        this.awaitingBatchAck = !0;
        let n = t + no
          , r = e.slice(t, n);
        this.ajax(`POST`, {
            "Content-Type": `application/x-ndjson`
        }, r.join(`
`), () => this.onerror(`timeout`), t => {
            !t || t.status !== 200 ? (this.awaitingBatchAck = !1,
            this.onerror(t && t.status),
            this.closeAndRetry(1011, `internal server error`, !1)) : n < e.length ? this.batchSend(e, n) : this.batchBuffer.length > 0 ? (this.batchSend(this.batchBuffer),
            this.batchBuffer = []) : this.awaitingBatchAck = !1
        }
        )
    }
    close(e, t, n) {
        for (let e of this.reqs)
            e.abort();
        this.readyState = F.closed;
        let r = Object.assign({
            code: 1e3,
            reason: void 0,
            wasClean: !0
        }, {
            code: e,
            reason: t,
            wasClean: n
        });
        this.batchBuffer = [],
        clearTimeout(this.currentBatchTimer),
        this.currentBatchTimer = null,
        typeof CloseEvent < `u` ? this.onclose(new CloseEvent(`close`,r)) : this.onclose(r)
    }
    ajax(e, t, n, r, i) {
        let a;
        a = uo.request(e, this.endpointURL(), t, n, this.timeout, () => {
            this.reqs.delete(a),
            r()
        }
        , e => {
            this.reqs.delete(a),
            this.isActive() && i(e)
        }
        ),
        this.reqs.add(a)
    }
}
  , mo = class e {
    constructor(t, n={}) {
        let r = n.events || {
            state: `presence_state`,
            diff: `presence_diff`
        };
        this.state = Object.create(null),
        this.pendingDiffs = [],
        this.channel = t,
        this.joinRef = null,
        this.caller = {
            onJoin: function() {},
            onLeave: function() {},
            onSync: function() {}
        },
        this.channel.on(r.state, t => {
            let {onJoin: n, onLeave: r, onSync: i} = this.caller;
            this.joinRef = this.channel.joinRef(),
            this.state = e.syncState(this.state, t, n, r),
            this.pendingDiffs.forEach(t => {
                this.state = e.syncDiff(this.state, t, n, r)
            }
            ),
            this.pendingDiffs = [],
            i()
        }
        ),
        this.channel.on(r.diff, t => {
            let {onJoin: n, onLeave: r, onSync: i} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(t) : (this.state = e.syncDiff(this.state, t, n, r),
            i())
        }
        )
    }
    onJoin(e) {
        this.caller.onJoin = e
    }
    onLeave(e) {
        this.caller.onLeave = e
    }
    onSync(e) {
        this.caller.onSync = e
    }
    list(t) {
        return e.list(this.state, t)
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel.joinRef()
    }
    static syncState(e, t, n, r) {
        let i = this.toNullProtoObj(this.clone(e));
        t = this.toNullProtoObj(t);
        let a = Object.create(null)
          , o = Object.create(null);
        return this.map(i, (e, n) => {
            t[e] || (o[e] = n)
        }
        ),
        this.map(t, (e, t) => {
            let n = i[e];
            if (n) {
                let r = t.metas.map(e => e.phx_ref)
                  , i = n.metas.map(e => e.phx_ref)
                  , s = t.metas.filter(e => i.indexOf(e.phx_ref) < 0)
                  , c = n.metas.filter(e => r.indexOf(e.phx_ref) < 0);
                s.length > 0 && (a[e] = t,
                a[e].metas = s),
                c.length > 0 && (o[e] = this.clone(n),
                o[e].metas = c)
            } else
                a[e] = t
        }
        ),
        this.syncDiff(i, {
            joins: a,
            leaves: o
        }, n, r)
    }
    static syncDiff(e, t, n, r) {
        e = this.toNullProtoObj(e);
        let {joins: i, leaves: a} = this.clone(t);
        return n ||= function() {}
        ,
        r ||= function() {}
        ,
        this.map(i, (t, r) => {
            let i = e[t];
            if (e[t] = this.clone(r),
            i) {
                let n = e[t].metas.map(e => e.phx_ref)
                  , r = i.metas.filter(e => n.indexOf(e.phx_ref) < 0);
                e[t].metas.unshift(...r)
            }
            n(t, i, r)
        }
        ),
        this.map(a, (t, n) => {
            let i = e[t];
            if (!i)
                return;
            let a = n.metas.map(e => e.phx_ref);
            i.metas = i.metas.filter(e => a.indexOf(e.phx_ref) < 0),
            r(t, i, n),
            i.metas.length === 0 && delete e[t]
        }
        ),
        e
    }
    static list(e, t) {
        return t ||= function(e, t) {
            return t
        }
        ,
        this.map(e, (e, n) => t(e, n))
    }
    static map(e, t) {
        return Object.getOwnPropertyNames(e).map(n => t(n, e[n]))
    }
    static toNullProtoObj(e) {
        if (Object.getPrototypeOf(e) === null)
            return e;
        let t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach(n => {
            t[n] = e[n]
        }
        ),
        t
    }
    static clone(e) {
        return JSON.parse(JSON.stringify(e))
    }
}
  , ho = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: {
        push: 0,
        reply: 1,
        broadcast: 2
    },
    encode(e, t) {
        if (e.payload.constructor === ArrayBuffer)
            return t(this.binaryEncode(e));
        {
            let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
            return t(JSON.stringify(n))
        }
    },
    decode(e, t) {
        if (e.constructor === ArrayBuffer)
            return t(this.binaryDecode(e));
        {
            let[n,r,i,a,o] = JSON.parse(e);
            return t({
                join_ref: n,
                ref: r,
                topic: i,
                event: a,
                payload: o
            })
        }
    },
    binaryEncode(e) {
        let {join_ref: t, ref: n, event: r, topic: i, payload: a} = e
          , o = new TextEncoder
          , s = o.encode(t)
          , c = o.encode(n)
          , l = o.encode(i)
          , u = o.encode(r);
        this.assertFieldSize(s.byteLength, `join_ref`),
        this.assertFieldSize(c.byteLength, `ref`),
        this.assertFieldSize(l.byteLength, `topic`),
        this.assertFieldSize(u.byteLength, `event`);
        let d = this.META_LENGTH + s.byteLength + c.byteLength + l.byteLength + u.byteLength
          , f = new ArrayBuffer(this.HEADER_LENGTH + d)
          , p = new Uint8Array(f)
          , m = new DataView(f)
          , h = 0;
        m.setUint8(h++, this.KINDS.push),
        m.setUint8(h++, s.byteLength),
        m.setUint8(h++, c.byteLength),
        m.setUint8(h++, l.byteLength),
        m.setUint8(h++, u.byteLength),
        p.set(s, h),
        h += s.byteLength,
        p.set(c, h),
        h += c.byteLength,
        p.set(l, h),
        h += l.byteLength,
        p.set(u, h),
        h += u.byteLength;
        var g = new Uint8Array(f.byteLength + a.byteLength);
        return g.set(p, 0),
        g.set(new Uint8Array(a), f.byteLength),
        g.buffer
    },
    assertFieldSize(e, t) {
        if (e > 255)
            throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`)
    },
    binaryDecode(e) {
        let t = new DataView(e)
          , n = t.getUint8(0)
          , r = new TextDecoder;
        switch (n) {
        case this.KINDS.push:
            return this.decodePush(e, t, r);
        case this.KINDS.reply:
            return this.decodeReply(e, t, r);
        case this.KINDS.broadcast:
            return this.decodeBroadcast(e, t, r)
        }
    },
    decodePush(e, t, n) {
        let r = t.getUint8(1)
          , i = t.getUint8(2)
          , a = t.getUint8(3)
          , o = this.HEADER_LENGTH + this.META_LENGTH - 1
          , s = n.decode(e.slice(o, o + r));
        o += r;
        let c = n.decode(e.slice(o, o + i));
        o += i;
        let l = n.decode(e.slice(o, o + a));
        return o += a,
        {
            join_ref: s,
            ref: null,
            topic: c,
            event: l,
            payload: e.slice(o, e.byteLength)
        }
    },
    decodeReply(e, t, n) {
        let r = t.getUint8(1)
          , i = t.getUint8(2)
          , a = t.getUint8(3)
          , o = t.getUint8(4)
          , s = this.HEADER_LENGTH + this.META_LENGTH
          , c = n.decode(e.slice(s, s + r));
        s += r;
        let l = n.decode(e.slice(s, s + i));
        s += i;
        let u = n.decode(e.slice(s, s + a));
        s += a;
        let d = n.decode(e.slice(s, s + o));
        s += o;
        let f = {
            status: d,
            response: e.slice(s, e.byteLength)
        };
        return {
            join_ref: c,
            ref: l,
            topic: u,
            event: ro.reply,
            payload: f
        }
    },
    decodeBroadcast(e, t, n) {
        let r = t.getUint8(1)
          , i = t.getUint8(2)
          , a = this.HEADER_LENGTH + 2
          , o = n.decode(e.slice(a, a + r));
        a += r;
        let s = n.decode(e.slice(a, a + i));
        return a += i,
        {
            join_ref: null,
            ref: null,
            topic: o,
            event: s,
            payload: e.slice(a, e.byteLength)
        }
    }
}
  , go = class {
    constructor(e, t={}) {
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.channels = [],
        this.sendBuffer = [],
        this.ref = 0,
        this.fallbackRef = null,
        this.timeout = t.timeout || eo,
        this.transport = t.transport || P.WebSocket || po,
        this.conn = void 0,
        this.primaryPassedHealthCheck = !1,
        this.longPollFallbackMs = t.longPollFallbackMs,
        this.fallbackTimer = null;
        let n = null;
        try {
            n = P && P.sessionStorage
        } catch {}
        this.sessionStore = t.sessionStorage || n,
        this.establishedConnections = 0,
        this.defaultEncoder = ho.encode.bind(ho),
        this.defaultDecoder = ho.decode.bind(ho),
        this.closeWasClean = !0,
        this.disconnecting = !1,
        this.binaryType = t.binaryType || `arraybuffer`,
        this.connectClock = 1,
        this.pageHidden = !1,
        this.encode = void 0,
        this.decode = void 0,
        this.transport === po ? (this.encode = this.defaultEncoder,
        this.decode = this.defaultDecoder) : (this.encode = t.encode || this.defaultEncoder,
        this.decode = t.decode || this.defaultDecoder);
        let r = null;
        Qa && Qa.addEventListener && (Qa.addEventListener(`pagehide`, e => {
            this.conn && (this.disconnect(),
            r = this.connectClock)
        }
        ),
        Qa.addEventListener(`pageshow`, e => {
            r === this.connectClock && (r = null,
            this.connect())
        }
        ),
        Qa.addEventListener(`visibilitychange`, () => {
            document.visibilityState === `hidden` ? this.pageHidden = !0 : (this.pageHidden = !1,
            !this.isConnected() && !this.closeWasClean && this.teardown( () => this.connect()))
        }
        )),
        this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4,
        this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0,
        this.heartbeatCallback = t.heartbeatCallback ?? ( () => {}
        ),
        this.rejoinAfterMs = e => t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4,
        this.reconnectAfterMs = e => t.reconnectAfterMs ? t.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3,
        this.logger = t.logger || null,
        !this.logger && t.debug && (this.logger = (e, t, n) => {
            console.log(`${e}: ${t}`, n)
        }
        ),
        this.longpollerTimeout = t.longpollerTimeout || 2e4,
        this.params = Xa(t.params || {}),
        this.endPoint = `${e}/${io.websocket}`,
        this.vsn = t.vsn || $a,
        this.heartbeatTimeoutTimer = null,
        this.heartbeatTimer = null,
        this.heartbeatSentAt = null,
        this.pendingHeartbeatRef = null,
        this.reconnectTimer = new co( () => {
            if (this.pageHidden) {
                this.log(`Not reconnecting as page is hidden!`),
                this.teardown();
                return
            }
            this.teardown(async () => {
                t.beforeReconnect && await t.beforeReconnect(),
                this.connect()
            }
            )
        }
        ,this.reconnectAfterMs),
        this.authToken = t.authToken && Xa(t.authToken)
    }
    getLongPollTransport() {
        return po
    }
    replaceTransport(e) {
        this.connectClock++,
        this.closeWasClean = !0,
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn &&= (this.conn.close(),
        null),
        this.transport = e
    }
    protocol() {
        return location.protocol.match(/^https/) ? `wss` : `ws`
    }
    endPointURL() {
        let e = uo.appendParams(uo.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
        });
        return e.charAt(0) === `/` ? e.charAt(1) === `/` ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}` : e
    }
    disconnect(e, t, n) {
        this.connectClock++,
        this.disconnecting = !0,
        this.closeWasClean = !0,
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown( () => {
            this.disconnecting = !1,
            e && e()
        }
        , t, n)
    }
    connect(e) {
        e && (console && console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),
        this.params = Xa(e)),
        !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== po ? this.connectWithFallback(po, this.longPollFallbackMs) : this.transportConnect())
    }
    log(e, t, n) {
        this.logger && this.logger(e, t, n)
    }
    hasLogger() {
        return this.logger !== null
    }
    onOpen(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.open.push([t, e]),
        t
    }
    onClose(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.close.push([t, e]),
        t
    }
    onError(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.error.push([t, e]),
        t
    }
    onMessage(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.message.push([t, e]),
        t
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e
    }
    ping(e) {
        if (!this.isConnected())
            return !1;
        let t = this.makeRef()
          , n = Date.now();
        this.push({
            topic: `phoenix`,
            event: `heartbeat`,
            payload: {},
            ref: t
        });
        let r = this.onMessage(i => {
            i.ref === t && (this.off([r]),
            e(Date.now() - n))
        }
        );
        return !0
    }
    transportName(e) {
        switch (e) {
        case po:
            return `LongPoll`;
        default:
            return e.name
        }
    }
    transportConnect() {
        this.connectClock++,
        this.closeWasClean = !1;
        let e;
        this.authToken && (e = [`phoenix`, `${oo}${btoa(this.authToken()).replace(/=/g, ``)}`]),
        this.conn = new this.transport(this.endPointURL(),e),
        this.conn.binaryType = this.binaryType,
        this.conn.timeout = this.longpollerTimeout,
        this.conn.onopen = () => this.onConnOpen(),
        this.conn.onerror = e => this.onConnError(e),
        this.conn.onmessage = e => this.onConnMessage(e),
        this.conn.onclose = e => this.onConnClose(e)
    }
    getSession(e) {
        return this.sessionStore && this.sessionStore.getItem(e)
    }
    storeSession(e, t) {
        this.sessionStore && this.sessionStore.setItem(e, t)
    }
    connectWithFallback(e, t=2500) {
        clearTimeout(this.fallbackTimer);
        let n = !1, r = !0, i, a = this.transportName(e), o = t => {
            this.log(`transport`, `falling back to ${a}...`, t),
            this.off([void 0, i]),
            r = !1,
            this.replaceTransport(e),
            this.transportConnect()
        }
        ;
        if (this.getSession(`phx:fallback:${a}`))
            return o(`memorized`);
        this.fallbackTimer = setTimeout(o, t),
        i = this.onError(e => {
            this.log(`transport`, `error`, e),
            r && !n && (clearTimeout(this.fallbackTimer),
            o(e))
        }
        ),
        this.fallbackRef && this.off([this.fallbackRef]),
        this.fallbackRef = this.onOpen( () => {
            if (n = !0,
            !r) {
                let t = this.transportName(e);
                return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${t}`, `true`),
                this.log(`transport`, `established ${t} fallback`)
            }
            clearTimeout(this.fallbackTimer),
            this.fallbackTimer = setTimeout(o, t),
            this.ping(e => {
                this.log(`transport`, `connected to primary after`, e),
                this.primaryPassedHealthCheck = !0,
                clearTimeout(this.fallbackTimer)
            }
            )
        }
        ),
        this.transportConnect()
    }
    clearHeartbeats() {
        clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer)
    }
    onConnOpen() {
        this.hasLogger() && this.log(`transport`, `connected to ${this.endPointURL()}`),
        this.closeWasClean = !1,
        this.disconnecting = !1,
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks(`open`)
    }
    heartbeatTimeout() {
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.heartbeatSentAt = null,
            this.hasLogger() && this.log(`transport`, `heartbeat timeout. Attempting to re-establish connection`);
            try {
                this.heartbeatCallback(`timeout`)
            } catch (e) {
                this.log(`error`, `error in heartbeat callback`, e)
            }
            this.triggerChanError(Error(`heartbeat timeout`)),
            this.closeWasClean = !1,
            this.teardown( () => this.reconnectTimer.scheduleTimeout(), to, `heartbeat timeout`)
        }
    }
    resetHeartbeat() {
        this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null,
        this.clearHeartbeats(),
        this.heartbeatTimer = setTimeout( () => this.sendHeartbeat(), this.heartbeatIntervalMs))
    }
    teardown(e, t, n) {
        if (!this.conn)
            return e && e();
        let r = this.conn;
        this.waitForBufferDone(r, () => {
            t ? r.close(t, n || ``) : r.close(),
            this.waitForSocketClosed(r, () => {
                this.conn === r && (this.conn.onopen = function() {}
                ,
                this.conn.onerror = function() {}
                ,
                this.conn.onmessage = function() {}
                ,
                this.conn.onclose = function() {}
                ,
                this.conn = null),
                e && e()
            }
            )
        }
        )
    }
    waitForBufferDone(e, t, n=1) {
        if (n === 5 || !e.bufferedAmount) {
            t();
            return
        }
        setTimeout( () => {
            this.waitForBufferDone(e, t, n + 1)
        }
        , 150 * n)
    }
    waitForSocketClosed(e, t, n=1) {
        if (n === 5 || e.readyState === F.closed) {
            t();
            return
        }
        setTimeout( () => {
            this.waitForSocketClosed(e, t, n + 1)
        }
        , 150 * n)
    }
    onConnClose(e) {
        this.conn && (this.conn.onclose = () => {}
        ),
        this.hasLogger() && this.log(`transport`, `close`, e),
        this.triggerChanError(e),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks(`close`, e)
    }
    onConnError(e) {
        this.hasLogger() && this.log(`transport`, `error`, e);
        let t = this.transport
          , n = this.establishedConnections;
        this.triggerStateCallbacks(`error`, e, t, n),
        (t === this.transport || n > 0) && this.triggerChanError(e)
    }
    triggerChanError(e) {
        this.channels.forEach(t => {
            t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(ro.error, e)
        }
        )
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case F.connecting:
            return `connecting`;
        case F.open:
            return `open`;
        case F.closing:
            return `closing`;
        default:
            return `closed`
        }
    }
    isConnected() {
        return this.connectionState() === `open`
    }
    remove(e) {
        this.off(e.stateChangeRefs),
        this.channels = this.channels.filter(t => t !== e)
    }
    off(e) {
        for (let t in this.stateChangeCallbacks)
            this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter( ([t]) => e.indexOf(t) === -1)
    }
    channel(e, t={}) {
        let n = new lo(e,t,this);
        return this.channels.push(n),
        n
    }
    push(e) {
        if (this.hasLogger()) {
            let {topic: t, event: n, payload: r, ref: i, join_ref: a} = e;
            this.log(`push`, `${t} ${n} (${a}, ${i})`, r)
        }
        this.isConnected() ? this.encode(e, e => this.conn.send(e)) : this.sendBuffer.push( () => this.encode(e, e => this.conn.send(e)))
    }
    makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e,
        this.ref.toString()
    }
    sendHeartbeat() {
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback(`disconnected`)
            } catch (e) {
                this.log(`error`, `error in heartbeat callback`, e)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.heartbeatTimeout();
            return
        }
        this.pendingHeartbeatRef = this.makeRef(),
        this.heartbeatSentAt = Date.now(),
        this.push({
            topic: `phoenix`,
            event: `heartbeat`,
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback(`sent`)
        } catch (e) {
            this.log(`error`, `error in heartbeat callback`, e)
        }
        this.heartbeatTimeoutTimer = setTimeout( () => this.heartbeatTimeout(), this.heartbeatIntervalMs)
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
        this.sendBuffer = [])
    }
    onConnMessage(e) {
        this.decode(e.data, e => {
            let {topic: t, event: n, payload: r, ref: i, join_ref: a} = e;
            if (i && i === this.pendingHeartbeatRef) {
                let e = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                this.clearHeartbeats();
                try {
                    this.heartbeatCallback(r.status === `ok` ? `ok` : `error`, e)
                } catch (e) {
                    this.log(`error`, `error in heartbeat callback`, e)
                }
                this.pendingHeartbeatRef = null,
                this.heartbeatSentAt = null,
                this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout( () => this.sendHeartbeat(), this.heartbeatIntervalMs))
            }
            this.hasLogger() && this.log(`receive`, `${r.status || ``} ${t} ${n} ${i && `(` + i + `)` || ``}`.trim(), r);
            for (let e = 0; e < this.channels.length; e++) {
                let o = this.channels[e];
                o.isMember(t, n, r, a) && o.trigger(n, r, i, a)
            }
            this.triggerStateCallbacks(`message`, e)
        }
        )
    }
    triggerStateCallbacks(e, ...t) {
        try {
            this.stateChangeCallbacks[e].forEach( ([n,r]) => {
                try {
                    r(...t)
                } catch (t) {
                    this.log(`error`, `error in ${e} callback`, t)
                }
            }
            )
        } catch (t) {
            this.log(`error`, `error triggering ${e} callbacks`, t)
        }
    }
    leaveOpenTopic(e) {
        let t = this.channels.find(t => t.topic === e && (t.isJoined() || t.isJoining()));
        t && (this.hasLogger() && this.log(`transport`, `leaving duplicate topic "${e}"`),
        t.leave())
    }
}
  , _o = class e {
    constructor(t, n) {
        let r = bo(n);
        this.presence = new mo(t.getChannel(),r),
        this.presence.onJoin( (n, r, i) => {
            let a = e.onJoinPayload(n, r, i);
            t.getChannel().trigger(`presence`, a)
        }
        ),
        this.presence.onLeave( (n, r, i) => {
            let a = e.onLeavePayload(n, r, i);
            t.getChannel().trigger(`presence`, a)
        }
        ),
        this.presence.onSync( () => {
            t.getChannel().trigger(`presence`, {
                event: `sync`
            })
        }
        )
    }
    get state() {
        return e.transformState(this.presence.state)
    }
    static transformState(e) {
        return e = yo(e),
        Object.getOwnPropertyNames(e).reduce( (t, n) => {
            let r = e[n];
            return t[n] = vo(r),
            t
        }
        , {})
    }
    static onJoinPayload(e, t, n) {
        return {
            event: `join`,
            key: e,
            currentPresences: xo(t),
            newPresences: vo(n)
        }
    }
    static onLeavePayload(e, t, n) {
        return {
            event: `leave`,
            key: e,
            currentPresences: xo(t),
            leftPresences: vo(n)
        }
    }
}
;
function vo(e) {
    return e.metas.map(e => {
        let t = Object.defineProperties({}, Object.getOwnPropertyDescriptors(e));
        return t.presence_ref = t.phx_ref,
        delete t.phx_ref,
        delete t.phx_ref_prev,
        t
    }
    )
}
function yo(e) {
    return JSON.parse(JSON.stringify(e))
}
function bo(e) {
    return e?.events && {
        events: e.events
    }
}
function xo(e) {
    return e?.metas ? vo(e) : []
}
var So;
(function(e) {
    e.SYNC = `sync`,
    e.JOIN = `join`,
    e.LEAVE = `leave`
}
)(So ||= {});
var Co = class {
    get state() {
        return this.presenceAdapter.state
    }
    constructor(e, t) {
        this.channel = e,
        this.presenceAdapter = new _o(this.channel.channelAdapter,t)
    }
}
;
function wo(e) {
    if (e instanceof Error)
        return e;
    if (typeof e == `string`)
        return Error(e);
    if (e && typeof e == `object`) {
        let t = e;
        if (typeof t.code == `number`) {
            let n = typeof t.reason == `string` && t.reason ? ` (${t.reason})` : ``;
            return Error(`socket closed: ${t.code}${n}`, {
                cause: e
            })
        }
        return Error(`channel error: transport failure`, {
            cause: e
        })
    }
    return Error(`channel error: connection lost`)
}
var To = class {
    constructor(e, t, n) {
        let r = Eo(n);
        this.channel = e.getSocket().channel(t, r),
        this.socket = e
    }
    get state() {
        return this.channel.state
    }
    set state(e) {
        this.channel.state = e
    }
    get joinedOnce() {
        return this.channel.joinedOnce
    }
    get joinPush() {
        return this.channel.joinPush
    }
    get rejoinTimer() {
        return this.channel.rejoinTimer
    }
    on(e, t) {
        return this.channel.on(e, t)
    }
    off(e, t) {
        this.channel.off(e, t)
    }
    subscribe(e) {
        return this.channel.join(e)
    }
    unsubscribe(e) {
        return this.channel.leave(e)
    }
    teardown() {
        this.channel.teardown()
    }
    onClose(e) {
        this.channel.onClose(e)
    }
    onError(e) {
        return this.channel.onError(e)
    }
    push(e, t, n) {
        let r;
        try {
            r = this.channel.push(e, t, n)
        } catch {
            throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)
        }
        if (this.channel.pushBuffer.length > 100) {
            let e = this.channel.pushBuffer.shift();
            e.cancelTimeout(),
            this.socket.log(`channel`, `discarded push due to buffer overflow: ${e.event}`, e.payload())
        }
        return r
    }
    updateJoinPayload(e) {
        let t = this.channel.joinPush.payload();
        this.channel.joinPush.payload = () => Object.assign(Object.assign({}, t), e)
    }
    canPush() {
        return this.socket.isConnected() && this.state === Ia.joined
    }
    isJoined() {
        return this.state === Ia.joined
    }
    isJoining() {
        return this.state === Ia.joining
    }
    isClosed() {
        return this.state === Ia.closed
    }
    isLeaving() {
        return this.state === Ia.leaving
    }
    updateFilterBindings(e) {
        this.channel.filterBindings = e
    }
    updatePayloadTransform(e) {
        this.channel.onMessage = e
    }
    getChannel() {
        return this.channel
    }
}
;
function Eo(e) {
    return {
        config: Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ``,
                enabled: !1
            },
            private: !1
        }, e.config)
    }
}
var Do = /[,()"\\]/, Oo = e => Do.test(e) || e !== e.trim(), ko = e => `"${e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`, Ao = e => {
    let t = e === null ? `null` : String(e);
    return Oo(t) ? ko(t) : t
}
, jo = e => e === null ? `null` : String(e), Mo = (e, t) => {
    if (e === `in`) {
        let e = Array.isArray(t) ? t : [t];
        if (e.length === 0)
            throw Error("Realtime `in` filter requires at least one value.");
        return `in.(${Array.from(new Set(e)).map(e => Ao(e)).join(`,`)})`
    }
    return e === `is` ? `is.${jo(t)}` : `${e}.${Ao(t)}`
}
, No = class {
    constructor() {
        this.filters = []
    }
    add(e, t, n, r=!1) {
        let i = r ? `not.` : ``;
        return this.filters.push(`${e}=${i}${Mo(t, n)}`),
        this
    }
    eq(e, t) {
        return this.add(e, `eq`, t)
    }
    neq(e, t) {
        return this.add(e, `neq`, t)
    }
    gt(e, t) {
        return this.add(e, `gt`, t)
    }
    gte(e, t) {
        return this.add(e, `gte`, t)
    }
    lt(e, t) {
        return this.add(e, `lt`, t)
    }
    lte(e, t) {
        return this.add(e, `lte`, t)
    }
    in(e, t) {
        return this.add(e, `in`, t)
    }
    like(e, t) {
        return this.add(e, `like`, t)
    }
    ilike(e, t) {
        return this.add(e, `ilike`, t)
    }
    match(e, t) {
        return this.add(e, `match`, t)
    }
    imatch(e, t) {
        return this.add(e, `imatch`, t)
    }
    is(e, t) {
        return this.add(e, `is`, t)
    }
    isDistinct(e, t) {
        return this.add(e, `isdistinct`, t)
    }
    not(e, t, n) {
        return this.add(e, t, n, !0)
    }
    build() {
        return this.filters.join(`,`)
    }
    toString() {
        return this.build()
    }
}
, Po;
(function(e) {
    e.ALL = `*`,
    e.INSERT = `INSERT`,
    e.UPDATE = `UPDATE`,
    e.DELETE = `DELETE`
}
)(Po ||= {});
var Fo;
(function(e) {
    e.BROADCAST = `broadcast`,
    e.PRESENCE = `presence`,
    e.POSTGRES_CHANGES = `postgres_changes`,
    e.SYSTEM = `system`
}
)(Fo ||= {});
var Io;
(function(e) {
    e.SUBSCRIBED = `SUBSCRIBED`,
    e.TIMED_OUT = `TIMED_OUT`,
    e.CLOSED = `CLOSED`,
    e.CHANNEL_ERROR = `CHANNEL_ERROR`
}
)(Io ||= {});
var Lo = class e {
    get state() {
        return this.channelAdapter.state
    }
    set state(e) {
        this.channelAdapter.state = e
    }
    get joinedOnce() {
        return this.channelAdapter.joinedOnce
    }
    get timeout() {
        return this.socket.timeout
    }
    get joinPush() {
        return this.channelAdapter.joinPush
    }
    get rejoinTimer() {
        return this.channelAdapter.rejoinTimer
    }
    constructor(e, t={
        config: {}
    }, n) {
        if (this.topic = e,
        this.params = t,
        this.socket = n,
        this.bindings = {},
        this.subTopic = e.replace(/^realtime:/i, ``),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ``,
                enabled: !1
            },
            private: !1
        }, t.config),
        this.channelAdapter = new To(this.socket.socketAdapter,e,this.params),
        this.presence = new Co(this),
        this._onClose( () => {
            this.socket._remove(this)
        }
        ),
        this._updateFilterTransform(),
        this.broadcastEndpointURL = Ya(this.socket.socketAdapter.endPointURL()),
        this.private = this.params.config.private || !1,
        !this.private && this.params.config?.broadcast?.replay)
            throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)
    }
    subscribe(e, t=this.timeout) {
        if (this.socket.isConnected() || this.socket.connect(),
        this.channelAdapter.isClosed()) {
            let {config: {broadcast: n, presence: r, private: i}} = this.params
              , a = this.bindings.postgres_changes?.map(e => e.filter) ?? []
              , o = !!this.bindings[Fo.PRESENCE] && this.bindings[Fo.PRESENCE].length > 0 || this.params.config.presence?.enabled === !0
              , s = {}
              , c = {
                broadcast: n,
                presence: Object.assign(Object.assign({}, r), {
                    enabled: o
                }),
                postgres_changes: a,
                private: i
            };
            this.socket.accessTokenValue && (s.access_token = this.socket.accessTokenValue),
            this._onError(t => {
                e?.(Io.CHANNEL_ERROR, wo(t))
            }
            ),
            this._onClose( () => e?.(Io.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: c
            }, s)),
            this._updateFilterMessage(),
            this.channelAdapter.subscribe(t).receive(`ok`, async ({postgres_changes: t}) => {
                if (this.socket._isManualToken() || this.socket.setAuth(),
                t === void 0) {
                    e?.(Io.SUBSCRIBED);
                    return
                }
                this._updatePostgresBindings(t, e)
            }
            ).receive(`error`, t => {
                this.state = Ia.errored;
                let n = Object.values(t).join(`, `) || `error`;
                e?.(Io.CHANNEL_ERROR, Error(n, {
                    cause: t
                }))
            }
            ).receive(`timeout`, () => {
                e?.(Io.TIMED_OUT)
            }
            )
        }
        return this
    }
    _updatePostgresBindings(t, n) {
        let r = this.bindings.postgres_changes
          , i = r?.length ?? 0
          , a = [];
        for (let o = 0; o < i; o++) {
            let i = r[o]
              , {filter: {event: s, schema: c, table: l, filter: u}} = i
              , d = t && t[o];
            if (d && d.event === s && e.isFilterValueEqual(d.schema, c) && e.isFilterValueEqual(d.table, l) && e.isFilterValueEqual(d.filter, u))
                a.push(Object.assign(Object.assign({}, i), {
                    id: d.id
                }));
            else {
                this.unsubscribe(),
                this.state = Ia.errored,
                n?.(Io.CHANNEL_ERROR, Error(`mismatch between server and client bindings for postgres changes`));
                return
            }
        }
        this.bindings.postgres_changes = a,
        this.state != Ia.errored && n && n(Io.SUBSCRIBED)
    }
    presenceState() {
        return this.presence.state
    }
    async track(e, t={}) {
        return await this.send({
            type: `presence`,
            event: `track`,
            payload: e
        }, t)
    }
    async untrack(e={}) {
        return await this.send({
            type: `presence`,
            event: `untrack`
        }, e)
    }
    on(e, t, n) {
        let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining()
          , i = e === Fo.PRESENCE || e === Fo.POSTGRES_CHANGES;
        if (r && i)
            throw this.socket.log(`channel`, `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),
            Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
        return this._on(e, t, n)
    }
    async httpSend(e, t, n={}) {
        if (t == null)
            return Promise.reject(Error(`Payload is required for httpSend()`));
        let r = t instanceof ArrayBuffer || ArrayBuffer.isView(t)
          , i = {
            apikey: this.socket.apiKey ? this.socket.apiKey : ``,
            "Content-Type": r ? `application/octet-stream` : `application/json`
        };
        this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        let a = new URL(this.broadcastEndpointURL);
        a.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,
        this.private && a.searchParams.set(`private`, `true`);
        let o = {
            method: `POST`,
            headers: i,
            body: r ? t : JSON.stringify(t)
        }
          , s = await this._fetchWithTimeout(a.toString(), o, n.timeout ?? this.timeout);
        if (s.status === 202)
            return {
                success: !0
            };
        if (s.status === 404)
            return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));
        let c = s.statusText;
        try {
            let e = await s.json();
            c = e.error || e.message || c
        } catch {}
        return Promise.reject(Error(c))
    }
    async send(e, t={}) {
        if (!this.channelAdapter.canPush() && e.type === `broadcast`) {
            console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);
            let {event: n, payload: r} = e
              , i = {
                apikey: this.socket.apiKey ? this.socket.apiKey : ``,
                "Content-Type": `application/json`
            };
            this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            let a = {
                method: `POST`,
                headers: i,
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: n,
                        payload: r,
                        private: this.private
                    }]
                })
            };
            try {
                let e = await this._fetchWithTimeout(this.broadcastEndpointURL, a, t.timeout ?? this.timeout);
                return await e.body?.cancel(),
                e.ok ? `ok` : `error`
            } catch (e) {
                return e instanceof Error && e.name === `AbortError` ? `timed out` : `error`
            }
        } else
            return new Promise(n => {
                let r = this.channelAdapter.push(e.type, e, t.timeout || this.timeout);
                e.type === `broadcast` && !this.params?.config?.broadcast?.ack && n(`ok`),
                r.receive(`ok`, () => n(`ok`)),
                r.receive(`error`, () => n(`error`)),
                r.receive(`timeout`, () => n(`timed out`))
            }
            )
    }
    updateJoinPayload(e) {
        this.channelAdapter.updateJoinPayload(e)
    }
    async unsubscribe(e=this.timeout) {
        return new Promise(t => {
            this.channelAdapter.unsubscribe(e).receive(`ok`, () => t(`ok`)).receive(`timeout`, () => t(`timed out`)).receive(`error`, () => t(`error`))
        }
        )
    }
    teardown() {
        this.channelAdapter.teardown()
    }
    async _fetchWithTimeout(e, t, n) {
        let r = new AbortController
          , i = setTimeout( () => r.abort(), n)
          , a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
            signal: r.signal
        }));
        return clearTimeout(i),
        a
    }
    _on(e, t, n) {
        let r = e.toLocaleLowerCase()
          , i = t?.filter;
        (i instanceof No || typeof i == `object` && i && typeof i.build == `function`) && (t = Object.assign(Object.assign({}, t), {
            filter: i.build()
        }));
        let a = this.channelAdapter.on(e, n)
          , o = {
            type: r,
            filter: t,
            callback: n,
            ref: a
        };
        return this.bindings[r] ? this.bindings[r].push(o) : this.bindings[r] = [o],
        this._updateFilterMessage(),
        this
    }
    _onClose(e) {
        this.channelAdapter.onClose(e)
    }
    _onError(e) {
        this.channelAdapter.onError(e)
    }
    _updateFilterMessage() {
        this.channelAdapter.updateFilterBindings( (e, t, n) => {
            let r = e.event.toLocaleLowerCase();
            if (this._notThisChannelEvent(r, n))
                return !1;
            let i = this.bindings[r]?.find(t => t.ref === e.ref);
            if (!i)
                return !0;
            if ([`broadcast`, `presence`, `postgres_changes`].includes(r))
                if (`id` in i) {
                    let e = i.id
                      , n = i.filter?.event;
                    return e && t.ids?.includes(e) && (n === `*` || n?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase())
                } else {
                    let e = (i?.filter?.event)?.toLocaleLowerCase();
                    return e === `*` || e === (t?.event)?.toLocaleLowerCase()
                }
            else
                return i.type.toLocaleLowerCase() === r
        }
        )
    }
    _notThisChannelEvent(e, t) {
        let {close: n, error: r, leave: i, join: a} = La;
        return t && [n, r, i, a].includes(e) && t !== this.joinPush.ref
    }
    _updateFilterTransform() {
        this.channelAdapter.updatePayloadTransform( (e, t, n) => {
            if (typeof t == `object` && `ids` in t) {
                let e = t.data
                  , {schema: n, table: r, commit_timestamp: i, type: a, errors: o} = e;
                return Object.assign(Object.assign({}, {
                    schema: n,
                    table: r,
                    commit_timestamp: i,
                    eventType: a,
                    new: {},
                    old: {},
                    errors: o
                }), this._getPayloadRecords(e))
            }
            return t
        }
        )
    }
    copyBindings(e) {
        if (this.joinedOnce)
            throw Error(`cannot copy bindings into joined channel`);
        for (let t in e.bindings)
            for (let n of e.bindings[t])
                this._on(n.type, n.filter, n.callback)
    }
    static isFilterValueEqual(e, t) {
        return (e ?? void 0) === (t ?? void 0)
    }
    _getPayloadRecords(e) {
        let t = {
            new: {},
            old: {}
        };
        return (e.type === `INSERT` || e.type === `UPDATE`) && (t.new = Ba(e.columns, e.record)),
        (e.type === `UPDATE` || e.type === `DELETE`) && (t.old = Ba(e.columns, e.old_record)),
        t
    }
}
  , Ro = class {
    constructor(e, t) {
        this.socket = new go(e,t)
    }
    get timeout() {
        return this.socket.timeout
    }
    get endPoint() {
        return this.socket.endPoint
    }
    get transport() {
        return this.socket.transport
    }
    get heartbeatIntervalMs() {
        return this.socket.heartbeatIntervalMs
    }
    get heartbeatCallback() {
        return this.socket.heartbeatCallback
    }
    set heartbeatCallback(e) {
        this.socket.heartbeatCallback = e
    }
    get heartbeatTimer() {
        return this.socket.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.socket.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socket.reconnectTimer
    }
    get vsn() {
        return this.socket.vsn
    }
    get encode() {
        return this.socket.encode
    }
    get decode() {
        return this.socket.decode
    }
    get reconnectAfterMs() {
        return this.socket.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socket.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socket.stateChangeCallbacks
    }
    connect() {
        this.socket.connect()
    }
    disconnect(e, t, n, r=1e4) {
        return new Promise(i => {
            setTimeout( () => i(`timeout`), r),
            this.socket.disconnect( () => {
                e(),
                i(`ok`)
            }
            , t, n)
        }
        )
    }
    push(e) {
        this.socket.push(e)
    }
    log(e, t, n) {
        this.socket.log(e, t, n)
    }
    makeRef() {
        return this.socket.makeRef()
    }
    onOpen(e) {
        this.socket.onOpen(e)
    }
    onClose(e) {
        this.socket.onClose(e)
    }
    onError(e) {
        this.socket.onError(e)
    }
    onMessage(e) {
        this.socket.onMessage(e)
    }
    isConnected() {
        return this.socket.isConnected()
    }
    isConnecting() {
        return this.socket.connectionState() == Ra.connecting
    }
    isDisconnecting() {
        return this.socket.connectionState() == Ra.closing
    }
    connectionState() {
        return this.socket.connectionState()
    }
    endPointURL() {
        return this.socket.endPointURL()
    }
    sendHeartbeat() {
        this.socket.sendHeartbeat()
    }
    getSocket() {
        return this.socket
    }
}
  , zo = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , Bo = [1e3, 2e3, 5e3, 1e4]
  , Vo = 1e4;
function Ho() {
    let e = new Map;
    return {
        get length() {
            return e.size
        },
        clear() {
            e.clear()
        },
        getItem(t) {
            return e.has(t) ? e.get(t) : null
        },
        key(t) {
            return Array.from(e.keys())[t] ?? null
        },
        removeItem(t) {
            e.delete(t)
        },
        setItem(t, n) {
            e.set(t, String(n))
        }
    }
}
function Uo() {
    try {
        if (typeof globalThis < `u` && globalThis.sessionStorage)
            return globalThis.sessionStorage
    } catch {}
    return Ho()
}
var Wo = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`
  , Go = class {
    get endPoint() {
        return this.socketAdapter.endPoint
    }
    get timeout() {
        return this.socketAdapter.timeout
    }
    get transport() {
        return this.socketAdapter.transport
    }
    get heartbeatCallback() {
        return this.socketAdapter.heartbeatCallback
    }
    get heartbeatIntervalMs() {
        return this.socketAdapter.heartbeatIntervalMs
    }
    get heartbeatTimer() {
        return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer
    }
    get pendingHeartbeatRef() {
        return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef
    }
    get reconnectTimer() {
        return this.socketAdapter.reconnectTimer
    }
    get vsn() {
        return this.socketAdapter.vsn
    }
    get encode() {
        return this.socketAdapter.encode
    }
    get decode() {
        return this.socketAdapter.decode
    }
    get reconnectAfterMs() {
        return this.socketAdapter.reconnectAfterMs
    }
    get sendBuffer() {
        return this.socketAdapter.sendBuffer
    }
    get stateChangeCallbacks() {
        return this.socketAdapter.stateChangeCallbacks
    }
    constructor(e, t) {
        if (this.channels = [],
        this.accessTokenValue = null,
        this.accessToken = null,
        this.apiKey = null,
        this.httpEndpoint = ``,
        this.headers = {},
        this.params = {},
        this.ref = 0,
        this.serializer = new za,
        this._manuallySetToken = !1,
        this._authPromise = null,
        this._workerHeartbeatTimer = void 0,
        this._pendingWorkerHeartbeatRef = null,
        this._pendingDisconnectTimer = null,
        this._disconnectOnEmptyChannelsAfterMs = 0,
        this._resolveFetch = e => e ? (...t) => e(...t) : (...e) => fetch(...e),
        !t?.params?.apikey)
            throw Error(`API key is required to connect to Realtime`);
        this.apiKey = t.params.apikey;
        let n = this._initializeOptions(t);
        this.socketAdapter = new Ro(e,n),
        this.httpEndpoint = Ya(e),
        this.fetch = this._resolveFetch(t?.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
            this.accessToken && !this._authPromise && this._setAuthSafely(`connect`),
            this._setupConnectionHandlers();
            try {
                this.socketAdapter.connect()
            } catch (e) {
                let t = e.message;
                throw Error(`WebSocket not available: ${t}`)
            }
            this._handleNodeJsRaceCondition()
        }
    }
    endpointURL() {
        return this.socketAdapter.endPointURL()
    }
    async disconnect(e, t) {
        return this._cancelPendingDisconnect(),
        this.isDisconnecting() ? `ok` : await this.socketAdapter.disconnect( () => {
            clearInterval(this._workerHeartbeatTimer),
            this._terminateWorker()
        }
        , e, t)
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(e) {
        let t = await e.unsubscribe();
        return t === `ok` && e.teardown(),
        t
    }
    async removeAllChannels() {
        let e = this.channels.map(async e => {
            let t = await e.unsubscribe();
            return e.teardown(),
            t
        }
        )
          , t = await Promise.all(e);
        return await this.disconnect(),
        t
    }
    log(e, t, n) {
        this.socketAdapter.log(e, t, n)
    }
    connectionState() {
        return this.socketAdapter.connectionState() || Ra.closed
    }
    isConnected() {
        return this.socketAdapter.isConnected()
    }
    isConnecting() {
        return this.socketAdapter.isConnecting()
    }
    isDisconnecting() {
        return this.socketAdapter.isDisconnecting()
    }
    channel(e, t={
        config: {}
    }) {
        let n = `realtime:${e}`
          , r = this.getChannels().find(e => e.topic === n);
        if (r)
            return r;
        {
            let n = new Lo(`realtime:${e}`,t,this);
            return this._cancelPendingDisconnect(),
            this.channels.push(n),
            n
        }
    }
    push(e) {
        this.socketAdapter.push(e)
    }
    async setAuth(e=null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    _isManualToken() {
        return this._manuallySetToken
    }
    async sendHeartbeat() {
        this.socketAdapter.sendHeartbeat()
    }
    onHeartbeat(e) {
        this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e)
    }
    _makeRef() {
        return this.socketAdapter.makeRef()
    }
    _remove(e) {
        this.channels = this.channels.filter(t => t.topic !== e.topic),
        this.channels.length === 0 && (this.log(`transport`, `no channels remaining, scheduling disconnect`),
        this._schedulePendingDisconnect())
    }
    _schedulePendingDisconnect() {
        if (this._cancelPendingDisconnect(),
        this._disconnectOnEmptyChannelsAfterMs === 0) {
            this.log(`transport`, `disconnecting immediately - no channels`),
            this.disconnect();
            return
        }
        this._pendingDisconnectTimer = setTimeout( () => {
            this._pendingDisconnectTimer = null,
            this.channels.length === 0 && (this.log(`transport`, `deferred disconnect fired - no channels, disconnecting`),
            this.disconnect())
        }
        , this._disconnectOnEmptyChannelsAfterMs),
        this.log(`transport`, `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)
    }
    _cancelPendingDisconnect() {
        this._pendingDisconnectTimer !== null && (this.log(`transport`, `pending disconnect cancelled - channel activity detected`),
        clearTimeout(this._pendingDisconnectTimer),
        this._pendingDisconnectTimer = null)
    }
    async _performAuth(e=null) {
        let t, n = !1;
        if (e)
            t = e,
            n = !0;
        else if (this.accessToken)
            try {
                t = await this.accessToken()
            } catch (e) {
                this.log(`error`, `Error fetching access token from callback`, e),
                t = this.accessTokenValue
            }
        else
            t = this.accessTokenValue;
        n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1),
        this.accessTokenValue != t && (this.accessTokenValue = t,
        this.channels.forEach(e => {
            let n = {
                access_token: t,
                version: ja
            };
            t && e.updateJoinPayload(n),
            e.joinedOnce && e.channelAdapter.isJoined() && e.channelAdapter.push(La.access_token, {
                access_token: t
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(e=`general`) {
        this._isManualToken() || this.setAuth().catch(t => {
            this.log(`error`, `Error setting auth in ${e}`, t)
        }
        )
    }
    _setupConnectionHandlers() {
        this.socketAdapter.onOpen( () => {
            (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(e => {
                this.log(`error`, `error waiting for auth on connect`, e)
            }
            ),
            this.worker && !this.workerRef && this._startWorkerHeartbeat()
        }
        ),
        this.socketAdapter.onClose( () => {
            this.worker && this.workerRef && this._terminateWorker()
        }
        ),
        this.socketAdapter.onMessage(e => {
            e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null)
        }
        )
    }
    _handleNodeJsRaceCondition() {
        this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen()
    }
    _wrapHeartbeatCallback(e) {
        return (t, n) => {
            t !== `disconnected` && (t == `sent` && this._setAuthSafely(),
            e && e(t, n))
        }
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log(`worker`, `starting worker for from ${this.workerUrl}`) : this.log(`worker`, `starting default worker`);
        let e = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(e),
        this.workerRef.onerror = e => {
            this.log(`worker`, `worker error`, e.message),
            this._terminateWorker(),
            this.disconnect()
        }
        ,
        this.workerRef.onmessage = e => {
            e.data.event === `keepAlive` && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: `start`,
            interval: this.heartbeatIntervalMs
        })
    }
    _terminateWorker() {
        this.workerRef &&= (this.log(`worker`, `terminating worker`),
        this.workerRef.terminate(),
        void 0)
    }
    _workerObjectUrl(e) {
        let t;
        if (e)
            t = e;
        else {
            let e = new Blob([Wo],{
                type: `application/javascript`
            });
            t = URL.createObjectURL(e)
        }
        return t
    }
    _initializeOptions(e) {
        this.worker = e?.worker ?? !1,
        this.accessToken = e?.accessToken ?? null;
        let t = {};
        t.timeout = e?.timeout ?? Fa,
        t.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? zo.HEARTBEAT_INTERVAL,
        this._disconnectOnEmptyChannelsAfterMs = e?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e?.heartbeatIntervalMs ?? zo.HEARTBEAT_INTERVAL),
        t.transport = e?.transport ?? Aa.getWebSocketConstructor(),
        t.params = e?.params,
        t.logger = e?.logger,
        t.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback),
        t.sessionStorage = e?.sessionStorage ?? Uo(),
        t.reconnectAfterMs = e?.reconnectAfterMs ?? (e => Bo[e - 1] || Vo);
        let n, r, i = e?.vsn ?? Pa;
        switch (i) {
        case Ma:
            n = (e, t) => t(JSON.stringify(e)),
            r = (e, t) => t(JSON.parse(e));
            break;
        case Na:
            n = this.serializer.encode.bind(this.serializer),
            r = this.serializer.decode.bind(this.serializer);
            break;
        default:
            throw Error(`Unsupported serializer version: ${t.vsn}`)
        }
        if (t.vsn = i,
        t.encode = e?.encode ?? n,
        t.decode = e?.decode ?? r,
        t.beforeReconnect = this._reconnectAuth.bind(this),
        (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level,
        t.params = Object.assign(Object.assign({}, t.params), {
            log_level: this.logLevel
        })),
        this.worker) {
            if (typeof window < `u` && !window.Worker)
                throw Error(`Web Worker is not supported`);
            this.workerUrl = e?.workerUrl,
            t.autoSendHeartbeat = !this.worker
        }
        return t
    }
    async _reconnectAuth() {
        await this._waitForAuthIfNeeded(),
        this.isConnected() || this.connect()
    }
}
  , Ko = class extends Error {
    constructor(e, t) {
        super(e),
        this.name = `IcebergError`,
        this.status = t.status,
        this.icebergType = t.icebergType,
        this.icebergCode = t.icebergCode,
        this.details = t.details,
        this.isCommitStateUnknown = t.icebergType === `CommitStateUnknownException` || [500, 502, 504].includes(t.status) && t.icebergType?.includes(`CommitState`) === !0
    }
    isNotFound() {
        return this.status === 404
    }
    isConflict() {
        return this.status === 409
    }
    isAuthenticationTimeout() {
        return this.status === 419
    }
}
;
function qo(e, t, n) {
    let r = new URL(t,e);
    if (n)
        for (let[e,t] of Object.entries(n))
            t !== void 0 && r.searchParams.set(e, t);
    return r.toString()
}
async function Jo(e) {
    return !e || e.type === `none` ? {} : e.type === `bearer` ? {
        Authorization: `Bearer ${e.token}`
    } : e.type === `header` ? {
        [e.name]: e.value
    } : e.type === `custom` ? await e.getHeaders() : {}
}
function Yo(e) {
    let t = e.fetchImpl ?? globalThis.fetch;
    return {
        async request({method: n, path: r, query: i, body: a, headers: o}) {
            let s = qo(e.baseUrl, r, i)
              , c = await Jo(e.auth)
              , l = await t(s, {
                method: n,
                headers: {
                    ...a ? {
                        "Content-Type": `application/json`
                    } : {},
                    ...c,
                    ...o
                },
                body: a ? JSON.stringify(a) : void 0
            })
              , u = await l.text()
              , d = (l.headers.get(`content-type`) || ``).includes(`application/json`)
              , f = d && u ? JSON.parse(u) : u;
            if (!l.ok) {
                let e = d ? f : void 0
                  , t = e?.error;
                throw new Ko(t?.message ?? `Request failed with status ${l.status}`,{
                    status: l.status,
                    icebergType: t?.type,
                    icebergCode: t?.code,
                    details: e
                })
            }
            return {
                status: l.status,
                headers: l.headers,
                data: f
            }
        }
    }
}
function Xo(e) {
    return e.join(``)
}
var Zo = class {
    constructor(e, t=``) {
        this.client = e,
        this.prefix = t
    }
    async listNamespaces(e) {
        let t = e ? {
            parent: Xo(e.namespace)
        } : void 0;
        return (await this.client.request({
            method: `GET`,
            path: `${this.prefix}/namespaces`,
            query: t
        })).data.namespaces.map(e => ({
            namespace: e
        }))
    }
    async createNamespace(e, t) {
        let n = {
            namespace: e.namespace,
            properties: t?.properties
        };
        return (await this.client.request({
            method: `POST`,
            path: `${this.prefix}/namespaces`,
            body: n
        })).data
    }
    async dropNamespace(e) {
        await this.client.request({
            method: `DELETE`,
            path: `${this.prefix}/namespaces/${Xo(e.namespace)}`
        })
    }
    async loadNamespaceMetadata(e) {
        return {
            properties: (await this.client.request({
                method: `GET`,
                path: `${this.prefix}/namespaces/${Xo(e.namespace)}`
            })).data.properties
        }
    }
    async namespaceExists(e) {
        try {
            return await this.client.request({
                method: `HEAD`,
                path: `${this.prefix}/namespaces/${Xo(e.namespace)}`
            }),
            !0
        } catch (e) {
            if (e instanceof Ko && e.status === 404)
                return !1;
            throw e
        }
    }
    async createNamespaceIfNotExists(e, t) {
        try {
            return await this.createNamespace(e, t)
        } catch (e) {
            if (e instanceof Ko && e.status === 409)
                return;
            throw e
        }
    }
}
;
function Qo(e) {
    return e.join(``)
}
var $o = class {
    constructor(e, t=``, n) {
        this.client = e,
        this.prefix = t,
        this.accessDelegation = n
    }
    async listTables(e) {
        return (await this.client.request({
            method: `GET`,
            path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables`
        })).data.identifiers
    }
    async createTable(e, t) {
        let n = {};
        return this.accessDelegation && (n[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (await this.client.request({
            method: `POST`,
            path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables`,
            body: t,
            headers: n
        })).data.metadata
    }
    async updateTable(e, t) {
        let n = await this.client.request({
            method: `POST`,
            path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables/${e.name}`,
            body: t
        });
        return {
            "metadata-location": n.data[`metadata-location`],
            metadata: n.data.metadata
        }
    }
    async dropTable(e, t) {
        await this.client.request({
            method: `DELETE`,
            path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables/${e.name}`,
            query: {
                purgeRequested: String(t?.purge ?? !1)
            }
        })
    }
    async loadTable(e) {
        let t = {};
        return this.accessDelegation && (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (await this.client.request({
            method: `GET`,
            path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables/${e.name}`,
            headers: t
        })).data.metadata
    }
    async tableExists(e) {
        let t = {};
        this.accessDelegation && (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation);
        try {
            return await this.client.request({
                method: `HEAD`,
                path: `${this.prefix}/namespaces/${Qo(e.namespace)}/tables/${e.name}`,
                headers: t
            }),
            !0
        } catch (e) {
            if (e instanceof Ko && e.status === 404)
                return !1;
            throw e
        }
    }
    async createTableIfNotExists(e, t) {
        try {
            return await this.createTable(e, t)
        } catch (n) {
            if (n instanceof Ko && n.status === 409)
                return await this.loadTable({
                    namespace: e.namespace,
                    name: t.name
                });
            throw n
        }
    }
}
  , es = class {
    constructor(e) {
        let t = `v1`;
        e.catalogName && (t += `/${e.catalogName}`);
        let n = e.baseUrl.endsWith(`/`) ? e.baseUrl : `${e.baseUrl}/`;
        this.client = Yo({
            baseUrl: n,
            auth: e.auth,
            fetchImpl: e.fetch
        }),
        this.accessDelegation = e.accessDelegation?.join(`,`),
        this.namespaceOps = new Zo(this.client,t),
        this.tableOps = new $o(this.client,t,this.accessDelegation)
    }
    async listNamespaces(e) {
        return this.namespaceOps.listNamespaces(e)
    }
    async createNamespace(e, t) {
        return this.namespaceOps.createNamespace(e, t)
    }
    async dropNamespace(e) {
        await this.namespaceOps.dropNamespace(e)
    }
    async loadNamespaceMetadata(e) {
        return this.namespaceOps.loadNamespaceMetadata(e)
    }
    async listTables(e) {
        return this.tableOps.listTables(e)
    }
    async createTable(e, t) {
        return this.tableOps.createTable(e, t)
    }
    async updateTable(e, t) {
        return this.tableOps.updateTable(e, t)
    }
    async dropTable(e, t) {
        await this.tableOps.dropTable(e, t)
    }
    async loadTable(e) {
        return this.tableOps.loadTable(e)
    }
    async namespaceExists(e) {
        return this.namespaceOps.namespaceExists(e)
    }
    async tableExists(e) {
        return this.tableOps.tableExists(e)
    }
    async createNamespaceIfNotExists(e, t) {
        return this.namespaceOps.createNamespaceIfNotExists(e, t)
    }
    async createTableIfNotExists(e, t) {
        return this.tableOps.createTableIfNotExists(e, t)
    }
}
;
function ts(e) {
    "@babel/helpers - typeof";
    return ts = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }
    ,
    ts(e)
}
function ns(e, t) {
    if (ts(e) != `object` || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (ts(r) != `object`)
            return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}
function rs(e) {
    var t = ns(e, `string`);
    return ts(t) == `symbol` ? t : t + ``
}
function is(e, t, n) {
    return (t = rs(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function as(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? as(Object(n), !0).forEach(function(t) {
            is(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : as(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
var os = class extends Error {
    constructor(e, t=`storage`, n, r) {
        super(e),
        this.__isStorageError = !0,
        this.namespace = t,
        this.name = t === `vectors` ? `StorageVectorsError` : `StorageError`,
        this.status = n,
        this.statusCode = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
;
function ss(e) {
    return typeof e == `object` && !!e && `__isStorageError` in e
}
var cs = class extends os {
    constructor(e, t, n, r=`storage`) {
        super(e, r, t, n),
        this.name = r === `vectors` ? `StorageVectorsApiError` : `StorageApiError`,
        this.status = t,
        this.statusCode = n
    }
    toJSON() {
        return L({}, super.toJSON())
    }
}
  , ls = class extends os {
    constructor(e, t, n=`storage`) {
        super(e, n),
        this.name = n === `vectors` ? `StorageVectorsUnknownError` : `StorageUnknownError`,
        this.originalError = t
    }
}
;
function us(e, t, n) {
    let r = L({}, e)
      , i = t.toLowerCase();
    for (let e of Object.keys(r))
        e.toLowerCase() === i && delete r[e];
    return r[i] = n,
    r
}
function ds(e) {
    let t = {};
    for (let[n,r] of Object.entries(e))
        t[n.toLowerCase()] = r;
    return t
}
var fs = e => e ? (...t) => e(...t) : (...e) => fetch(...e)
  , ps = e => {
    if (typeof e != `object` || !e)
        return !1;
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , ms = e => {
    if (Array.isArray(e))
        return e.map(e => ms(e));
    if (typeof e == `function` || e !== Object(e))
        return e;
    let t = {};
    return Object.entries(e).forEach( ([e,n]) => {
        let r = e.replace(/([-_][a-z])/gi, e => e.toUpperCase().replace(/[-_]/g, ``));
        t[r] = ms(n)
    }
    ),
    t
}
  , hs = e => !e || typeof e != `string` || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes(`/`) || e.includes(`\\`) ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e)
  , gs = e => e.split(`/`).map(encodeURIComponent).join(`/`)
  , _s = e => {
    if (typeof e == `object` && e) {
        let t = e;
        if (typeof t.msg == `string`)
            return t.msg;
        if (typeof t.message == `string`)
            return t.message;
        if (typeof t.error_description == `string`)
            return t.error_description;
        if (typeof t.error == `string`)
            return t.error;
        if (typeof t.error == `object` && t.error !== null) {
            let e = t.error;
            if (typeof e.message == `string`)
                return e.message
        }
    }
    return JSON.stringify(e)
}
  , vs = async (e, t, n, r) => {
    if (typeof e == `object` && e && `json` in e && typeof e.json == `function`) {
        let n = e
          , i = parseInt(String(n.status), 10);
        Number.isFinite(i) || (i = 500),
        n.json().then(e => {
            let n = e?.statusCode || e?.code || i + ``;
            t(new cs(_s(e),i,n,r))
        }
        ).catch( () => {
            let e = i + ``;
            t(new cs(n.statusText || `HTTP ${i} error`,i,e,r))
        }
        )
    } else
        t(new ls(_s(e),e,r))
}
  , ys = (e, t, n, r) => {
    let i = {
        method: e,
        headers: t?.headers || {}
    };
    if (e === `GET` || e === `HEAD` || !r)
        return L(L({}, i), n);
    if (ps(r)) {
        let e = t?.headers || {}, n;
        for (let[t,r] of Object.entries(e))
            t.toLowerCase() === `content-type` && (n = r);
        i.headers = us(e, `Content-Type`, n ?? `application/json`),
        i.body = JSON.stringify(r)
    } else
        i.body = r;
    return t?.duplex && (i.duplex = t.duplex),
    L(L({}, i), n)
}
;
async function bs(e, t, n, r, i, a, o) {
    return new Promise( (s, c) => {
        e(n, ys(t, r, i, a)).then(e => {
            if (!e.ok)
                throw e;
            if (r?.noResolveJson)
                return e;
            if (o === `vectors`) {
                let t = e.headers.get(`content-type`);
                if (e.headers.get(`content-length`) === `0` || e.status === 204 || !t || !t.includes(`application/json`))
                    return {}
            }
            return e.json()
        }
        ).then(e => s(e)).catch(e => vs(e, c, r, o))
    }
    )
}
function xs(e=`storage`) {
    return {
        get: async (t, n, r, i) => bs(t, `GET`, n, r, i, void 0, e),
        post: async (t, n, r, i, a) => bs(t, `POST`, n, i, a, r, e),
        put: async (t, n, r, i, a) => bs(t, `PUT`, n, i, a, r, e),
        head: async (t, n, r, i) => bs(t, `HEAD`, n, L(L({}, r), {}, {
            noResolveJson: !0
        }), i, void 0, e),
        remove: async (t, n, r, i, a) => bs(t, `DELETE`, n, i, a, r, e)
    }
}
var {get: Ss, post: R, put: Cs, head: ws, remove: Ts} = xs(`storage`)
  , z = xs(`vectors`)
  , Es = class {
    constructor(e, t={}, n, r=`storage`) {
        this.shouldThrowOnError = !1,
        this.url = e,
        this.headers = ds(t),
        this.fetch = fs(n),
        this.namespace = r
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(e, t) {
        return this.headers = us(this.headers, e, t),
        this
    }
    async handleOperation(e) {
        var t = this;
        try {
            return {
                data: await e(),
                error: null
            }
        } catch (e) {
            if (t.shouldThrowOnError)
                throw e;
            if (ss(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
}
  , Ds = Symbol.toStringTag
  , Os = class {
    constructor(e, t) {
        this.downloadFn = e,
        this.shouldThrowOnError = t,
        this[Ds] = `StreamDownloadBuilder`,
        this.promise = null
    }
    then(e, t) {
        return this.getPromise().then(e, t)
    }
    catch(e) {
        return this.getPromise().catch(e)
    }
    finally(e) {
        return this.getPromise().finally(e)
    }
    getPromise() {
        return this.promise ||= this.execute(),
        this.promise
    }
    async execute() {
        var e = this;
        try {
            return {
                data: (await e.downloadFn()).body,
                error: null
            }
        } catch (t) {
            if (e.shouldThrowOnError)
                throw t;
            if (ss(t))
                return {
                    data: null,
                    error: t
                };
            throw t
        }
    }
}
  , ks = Symbol.toStringTag
  , As = class {
    constructor(e, t) {
        this.downloadFn = e,
        this.shouldThrowOnError = t,
        this[ks] = `BlobDownloadBuilder`,
        this.promise = null
    }
    asStream() {
        return new Os(this.downloadFn,this.shouldThrowOnError)
    }
    then(e, t) {
        return this.getPromise().then(e, t)
    }
    catch(e) {
        return this.getPromise().catch(e)
    }
    finally(e) {
        return this.getPromise().finally(e)
    }
    getPromise() {
        return this.promise ||= this.execute(),
        this.promise
    }
    async execute() {
        var e = this;
        try {
            return {
                data: await (await e.downloadFn()).blob(),
                error: null
            }
        } catch (t) {
            if (e.shouldThrowOnError)
                throw t;
            if (ss(t))
                return {
                    data: null,
                    error: t
                };
            throw t
        }
    }
}
  , js = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: `name`,
        order: `asc`
    }
}
  , Ms = {
    cacheControl: `3600`,
    contentType: `text/plain;charset=UTF-8`,
    upsert: !1
}
  , Ns = class extends Es {
    constructor(e, t={}, n, r) {
        super(e, t, r, `storage`),
        this.bucketId = n
    }
    async uploadOrUpdate(e, t, n, r) {
        var i = this;
        return i.handleOperation(async () => {
            let a, o = L(L({}, Ms), r), s = L(L({}, i.headers), e === `POST` && {
                "x-upsert": String(o.upsert)
            }), c = o.metadata;
            if (typeof Blob < `u` && n instanceof Blob ? (a = new FormData,
            a.append(`cacheControl`, o.cacheControl),
            c && a.append(`metadata`, i.encodeMetadata(c)),
            a.append(``, n)) : typeof FormData < `u` && n instanceof FormData ? (a = n,
            a.has(`cacheControl`) || a.append(`cacheControl`, o.cacheControl),
            c && !a.has(`metadata`) && a.append(`metadata`, i.encodeMetadata(c))) : (a = n,
            s[`cache-control`] = `max-age=${o.cacheControl}`,
            s[`content-type`] = o.contentType,
            c && (s[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
            (typeof ReadableStream < `u` && a instanceof ReadableStream || a && typeof a == `object` && `pipe` in a && typeof a.pipe == `function`) && !o.duplex && (o.duplex = `half`)),
            r?.headers)
                for (let[e,t] of Object.entries(r.headers))
                    s = us(s, e, t);
            let l = i._removeEmptyFolders(t)
              , u = i._getFinalPath(l)
              , d = await (e == `PUT` ? Cs : R)(i.fetch, `${i.url}/object/${u}`, a, L({
                headers: s
            }, o?.duplex ? {
                duplex: o.duplex
            } : {}));
            return {
                path: l,
                id: d.Id,
                fullPath: d.Key
            }
        }
        )
    }
    async upload(e, t, n) {
        return this.uploadOrUpdate(`POST`, e, t, n)
    }
    async uploadToSignedUrl(e, t, n, r) {
        var i = this;
        let a = i._removeEmptyFolders(e)
          , o = i._getFinalPath(a)
          , s = new URL(i.url + `/object/upload/sign/${o}`);
        return s.searchParams.set(`token`, t),
        i.handleOperation(async () => {
            let e, t = L(L({}, Ms), r), o = L(L({}, i.headers), {
                "x-upsert": String(t.upsert)
            }), c = t.metadata;
            if (typeof Blob < `u` && n instanceof Blob ? (e = new FormData,
            e.append(`cacheControl`, t.cacheControl),
            c && e.append(`metadata`, i.encodeMetadata(c)),
            e.append(``, n)) : typeof FormData < `u` && n instanceof FormData ? (e = n,
            e.has(`cacheControl`) || e.append(`cacheControl`, t.cacheControl),
            c && !e.has(`metadata`) && e.append(`metadata`, i.encodeMetadata(c))) : (e = n,
            o[`cache-control`] = `max-age=${t.cacheControl}`,
            o[`content-type`] = t.contentType,
            c && (o[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
            (typeof ReadableStream < `u` && e instanceof ReadableStream || e && typeof e == `object` && `pipe` in e && typeof e.pipe == `function`) && !t.duplex && (t.duplex = `half`)),
            r?.headers)
                for (let[e,t] of Object.entries(r.headers))
                    o = us(o, e, t);
            return {
                path: a,
                fullPath: (await Cs(i.fetch, s.toString(), e, L({
                    headers: o
                }, t?.duplex ? {
                    duplex: t.duplex
                } : {}))).Key
            }
        }
        )
    }
    async createSignedUploadUrl(e, t) {
        var n = this;
        return n.handleOperation(async () => {
            let r = n._getFinalPath(e)
              , i = L({}, n.headers);
            t?.upsert && (i[`x-upsert`] = `true`);
            let a = await R(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, {
                headers: i
            })
              , o = new URL(n.url + a.url)
              , s = o.searchParams.get(`token`);
            if (!s)
                throw new os(`No token returned by API`);
            return {
                signedUrl: o.toString(),
                path: e,
                token: s
            }
        }
        )
    }
    async update(e, t, n) {
        return this.uploadOrUpdate(`PUT`, e, t, n)
    }
    async move(e, t, n) {
        var r = this;
        return r.handleOperation(async () => await R(r.fetch, `${r.url}/object/move`, {
            bucketId: r.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: n?.destinationBucket
        }, {
            headers: r.headers
        }))
    }
    async copy(e, t, n) {
        var r = this;
        return r.handleOperation(async () => ({
            path: (await R(r.fetch, `${r.url}/object/copy`, {
                bucketId: r.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: n?.destinationBucket
            }, {
                headers: r.headers
            })).Key
        }))
    }
    async createSignedUrl(e, t, n) {
        var r = this;
        return r.handleOperation(async () => {
            let i = r._getFinalPath(e)
              , a = typeof n?.transform == `object` && n.transform !== null && Object.keys(n.transform).length > 0
              , o = await R(r.fetch, `${r.url}/object/sign/${i}`, L({
                expiresIn: t
            }, a ? {
                transform: n.transform
            } : {}), {
                headers: r.headers
            })
              , s = new URLSearchParams;
            n?.download && s.set(`download`, n.download === !0 ? `` : n.download),
            n?.cacheNonce != null && s.set(`cacheNonce`, String(n.cacheNonce));
            let c = s.toString();
            return {
                signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ``}`)
            }
        }
        )
    }
    async createSignedUrls(e, t, n) {
        var r = this;
        return r.handleOperation(async () => {
            let i = await R(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
                expiresIn: t,
                paths: e
            }, {
                headers: r.headers
            })
              , a = new URLSearchParams;
            n?.download && a.set(`download`, n.download === !0 ? `` : n.download),
            n?.cacheNonce != null && a.set(`cacheNonce`, String(n.cacheNonce));
            let o = a.toString();
            return i.map(e => L(L({}, e), {}, {
                signedUrl: e.signedURL ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ``}`) : null
            }))
        }
        )
    }
    download(e, t, n) {
        let r = typeof t?.transform == `object` && t.transform !== null && Object.keys(t.transform).length > 0 ? `render/image/authenticated` : `object`
          , i = new URLSearchParams;
        t?.transform && this.applyTransformOptsToQuery(i, t.transform),
        t?.cacheNonce != null && i.set(`cacheNonce`, String(t.cacheNonce));
        let a = i.toString()
          , o = this._getFinalPath(e);
        return new As( () => Ss(this.fetch, `${this.url}/${r}/${o}${a ? `?${a}` : ``}`, {
            headers: this.headers,
            noResolveJson: !0
        }, n),this.shouldThrowOnError)
    }
    async info(e) {
        var t = this;
        let n = t._getFinalPath(e);
        return t.handleOperation(async () => ms(await Ss(t.fetch, `${t.url}/object/info/${n}`, {
            headers: t.headers
        })))
    }
    async exists(e) {
        var t = this;
        let n = t._getFinalPath(e);
        try {
            return await ws(t.fetch, `${t.url}/object/${n}`, {
                headers: t.headers
            }),
            {
                data: !0,
                error: null
            }
        } catch (e) {
            if (t.shouldThrowOnError)
                throw e;
            if (ss(e)) {
                let t = e instanceof cs ? e.status : e instanceof ls ? e.originalError?.status : void 0;
                if (t !== void 0 && [400, 404].includes(t))
                    return {
                        data: !1,
                        error: e
                    }
            }
            throw e
        }
    }
    getPublicUrl(e, t) {
        let n = this._getFinalPath(e)
          , r = new URLSearchParams;
        t?.download && r.set(`download`, t.download === !0 ? `` : t.download),
        t?.transform && this.applyTransformOptsToQuery(r, t.transform),
        t?.cacheNonce != null && r.set(`cacheNonce`, String(t.cacheNonce));
        let i = r.toString()
          , a = typeof t?.transform == `object` && t.transform !== null && Object.keys(t.transform).length > 0 ? `render/image` : `object`;
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${n}`) + (i ? `?${i}` : ``)
            }
        }
    }
    async remove(e) {
        var t = this;
        return t.handleOperation(async () => await Ts(t.fetch, `${t.url}/object/${t.bucketId}`, {
            prefixes: e
        }, {
            headers: t.headers
        }))
    }
    async purgeCache(e, t, n) {
        var r = this;
        return r.handleOperation(async () => {
            let i = gs(r._getFinalPath(e))
              , a = new URLSearchParams;
            t?.transformations && a.set(`transformations`, `true`);
            let o = a.toString();
            return await Ts(r.fetch, `${r.url}/cdn/${i}${o ? `?${o}` : ``}`, {}, {
                headers: r.headers
            }, n)
        }
        )
    }
    async list(e, t, n) {
        var r = this;
        return r.handleOperation(async () => {
            let i = t?.sortBy ? L(L({}, js.sortBy), t.sortBy) : js.sortBy
              , a = L(L(L({}, js), t), {}, {
                sortBy: i,
                prefix: e || ``
            });
            return await R(r.fetch, `${r.url}/object/list/${r.bucketId}`, a, {
                headers: r.headers
            }, n)
        }
        )
    }
    async listV2(e, t) {
        var n = this;
        return n.handleOperation(async () => {
            let r = L({}, e);
            return await R(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, {
                headers: n.headers
            }, t)
        }
        )
    }
    encodeMetadata(e) {
        return JSON.stringify(e)
    }
    toBase64(e) {
        return typeof Buffer < `u` ? Buffer.from(e).toString(`base64`) : btoa(e)
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/, ``)}`
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`)
    }
    applyTransformOptsToQuery(e, t) {
        return t.width && e.set(`width`, t.width.toString()),
        t.height && e.set(`height`, t.height.toString()),
        t.resize && e.set(`resize`, t.resize),
        t.format && e.set(`format`, t.format),
        t.quality && e.set(`quality`, t.quality.toString()),
        e
    }
}
  , Ps = {
    "X-Client-Info": `storage-js/2.111.0`
}
  , Fs = class extends Es {
    constructor(e, t={}, n, r) {
        let i = new URL(e);
        r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes(`storage.supabase.`) && (i.hostname = i.hostname.replace(`supabase.`, `storage.supabase.`));
        let a = i.href.replace(/\/$/, ``)
          , o = L(L({}, Ps), t);
        super(a, o, n, `storage`)
    }
    async listBuckets(e) {
        var t = this;
        return t.handleOperation(async () => {
            let n = t.listBucketOptionsToQueryString(e);
            return await Ss(t.fetch, `${t.url}/bucket${n}`, {
                headers: t.headers
            })
        }
        )
    }
    async getBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Ss(t.fetch, `${t.url}/bucket/${e}`, {
            headers: t.headers
        }))
    }
    async createBucket(e, t={
        public: !1
    }) {
        var n = this;
        return n.handleOperation(async () => await R(n.fetch, `${n.url}/bucket`, {
            id: e,
            name: e,
            type: t.type,
            public: t.public,
            file_size_limit: t.fileSizeLimit,
            allowed_mime_types: t.allowedMimeTypes
        }, {
            headers: n.headers
        }))
    }
    async updateBucket(e, t) {
        var n = this;
        return n.handleOperation(async () => await Cs(n.fetch, `${n.url}/bucket/${e}`, {
            id: e,
            name: e,
            public: t.public,
            file_size_limit: t.fileSizeLimit,
            allowed_mime_types: t.allowedMimeTypes
        }, {
            headers: n.headers
        }))
    }
    async emptyBucket(e) {
        var t = this;
        return t.handleOperation(async () => await R(t.fetch, `${t.url}/bucket/${e}/empty`, {}, {
            headers: t.headers
        }))
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Ts(t.fetch, `${t.url}/bucket/${e}`, {}, {
            headers: t.headers
        }))
    }
    async purgeBucketCache(e, t, n) {
        var r = this;
        return r.handleOperation(async () => {
            let i = new URLSearchParams;
            t?.transformations && i.set(`transformations`, `true`);
            let a = i.toString();
            return await Ts(r.fetch, `${r.url}/cdn/${gs(e)}${a ? `?${a}` : ``}`, {}, {
                headers: r.headers
            }, n)
        }
        )
    }
    listBucketOptionsToQueryString(e) {
        let t = {};
        return e && (`limit` in e && (t.limit = String(e.limit)),
        `offset` in e && (t.offset = String(e.offset)),
        e.search && (t.search = e.search),
        e.sortColumn && (t.sortColumn = e.sortColumn),
        e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? `?` + new URLSearchParams(t).toString() : ``
    }
}
  , Is = class extends Es {
    constructor(e, t={}, n) {
        let r = e.replace(/\/$/, ``)
          , i = L(L({}, Ps), t);
        super(r, i, n, `storage`)
    }
    async createBucket(e) {
        var t = this;
        return t.handleOperation(async () => await R(t.fetch, `${t.url}/bucket`, {
            name: e
        }, {
            headers: t.headers
        }))
    }
    async listBuckets(e) {
        var t = this;
        return t.handleOperation(async () => {
            let n = new URLSearchParams;
            e?.limit !== void 0 && n.set(`limit`, e.limit.toString()),
            e?.offset !== void 0 && n.set(`offset`, e.offset.toString()),
            e?.sortColumn && n.set(`sortColumn`, e.sortColumn),
            e?.sortOrder && n.set(`sortOrder`, e.sortOrder),
            e?.search && n.set(`search`, e.search);
            let r = n.toString()
              , i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
            return await Ss(t.fetch, i, {
                headers: t.headers
            })
        }
        )
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await Ts(t.fetch, `${t.url}/bucket/${e}`, {}, {
            headers: t.headers
        }))
    }
    from(e) {
        var t = this;
        if (!hs(e))
            throw new os(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);
        let n = new es({
            baseUrl: this.url,
            catalogName: e,
            auth: {
                type: `custom`,
                getHeaders: async () => t.headers
            },
            fetch: this.fetch
        })
          , r = this.shouldThrowOnError;
        return new Proxy(n,{
            get(e, t) {
                let n = e[t];
                return typeof n == `function` ? async (...t) => {
                    try {
                        return {
                            data: await n.apply(e, t),
                            error: null
                        }
                    } catch (e) {
                        if (r)
                            throw e;
                        return {
                            data: null,
                            error: e
                        }
                    }
                }
                : n
            }
        })
    }
}
  , Ls = class extends Es {
    constructor(e, t={}, n) {
        let r = e.replace(/\/$/, ``)
          , i = L(L({}, Ps), {}, {
            "Content-Type": `application/json`
        }, t);
        super(r, i, n, `vectors`)
    }
    async createIndex(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers
        }) || {})
    }
    async getIndex(e, t) {
        var n = this;
        return n.handleOperation(async () => await z.post(n.fetch, `${n.url}/GetIndex`, {
            vectorBucketName: e,
            indexName: t
        }, {
            headers: n.headers
        }))
    }
    async listIndexes(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers
        }))
    }
    async deleteIndex(e, t) {
        var n = this;
        return n.handleOperation(async () => await z.post(n.fetch, `${n.url}/DeleteIndex`, {
            vectorBucketName: e,
            indexName: t
        }, {
            headers: n.headers
        }) || {})
    }
}
  , Rs = class extends Es {
    constructor(e, t={}, n) {
        let r = e.replace(/\/$/, ``)
          , i = L(L({}, Ps), {}, {
            "Content-Type": `application/json`
        }, t);
        super(r, i, n, `vectors`)
    }
    async putVectors(e) {
        var t = this;
        if (e.vectors.length < 1 || e.vectors.length > 500)
            throw Error(`Vector batch size must be between 1 and 500 items`);
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers
        }) || {})
    }
    async getVectors(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers
        }))
    }
    async listVectors(e) {
        var t = this;
        if (e.segmentCount !== void 0) {
            if (e.segmentCount < 1 || e.segmentCount > 16)
                throw Error(`segmentCount must be between 1 and 16`);
            if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
                throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`)
        }
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers
        }))
    }
    async queryVectors(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers
        }))
    }
    async deleteVectors(e) {
        var t = this;
        if (e.keys.length < 1 || e.keys.length > 500)
            throw Error(`Keys batch size must be between 1 and 500 items`);
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers
        }) || {})
    }
}
  , zs = class extends Es {
    constructor(e, t={}, n) {
        let r = e.replace(/\/$/, ``)
          , i = L(L({}, Ps), {}, {
            "Content-Type": `application/json`
        }, t);
        super(r, i, n, `vectors`)
    }
    async createBucket(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/CreateVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }) || {})
    }
    async getBucket(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/GetVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }))
    }
    async listBuckets(e={}) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers
        }))
    }
    async deleteBucket(e) {
        var t = this;
        return t.handleOperation(async () => await z.post(t.fetch, `${t.url}/DeleteVectorBucket`, {
            vectorBucketName: e
        }, {
            headers: t.headers
        }) || {})
    }
}
  , Bs = class extends zs {
    constructor(e, t={}) {
        super(e, t.headers || {}, t.fetch)
    }
    from(e) {
        return new Vs(this.url,this.headers,e,this.fetch)
    }
    async createBucket(e) {
        var t = () => super.createBucket
          , n = this;
        return t().call(n, e)
    }
    async getBucket(e) {
        var t = () => super.getBucket
          , n = this;
        return t().call(n, e)
    }
    async listBuckets(e={}) {
        var t = () => super.listBuckets
          , n = this;
        return t().call(n, e)
    }
    async deleteBucket(e) {
        var t = () => super.deleteBucket
          , n = this;
        return t().call(n, e)
    }
}
  , Vs = class extends Ls {
    constructor(e, t, n, r) {
        super(e, t, r),
        this.vectorBucketName = n
    }
    async createIndex(e) {
        var t = () => super.createIndex
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName
        }))
    }
    async listIndexes(e={}) {
        var t = () => super.listIndexes
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName
        }))
    }
    async getIndex(e) {
        var t = () => super.getIndex
          , n = this;
        return t().call(n, n.vectorBucketName, e)
    }
    async deleteIndex(e) {
        var t = () => super.deleteIndex
          , n = this;
        return t().call(n, n.vectorBucketName, e)
    }
    index(e) {
        return new Hs(this.url,this.headers,this.vectorBucketName,e,this.fetch)
    }
}
  , Hs = class extends Rs {
    constructor(e, t, n, r, i) {
        super(e, t, i),
        this.vectorBucketName = n,
        this.indexName = r
    }
    async putVectors(e) {
        var t = () => super.putVectors
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName,
            indexName: n.indexName
        }))
    }
    async getVectors(e) {
        var t = () => super.getVectors
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName,
            indexName: n.indexName
        }))
    }
    async listVectors(e={}) {
        var t = () => super.listVectors
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName,
            indexName: n.indexName
        }))
    }
    async queryVectors(e) {
        var t = () => super.queryVectors
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName,
            indexName: n.indexName
        }))
    }
    async deleteVectors(e) {
        var t = () => super.deleteVectors
          , n = this;
        return t().call(n, L(L({}, e), {}, {
            vectorBucketName: n.vectorBucketName,
            indexName: n.indexName
        }))
    }
}
  , Us = class extends Fs {
    constructor(e, t={}, n, r) {
        super(e, t, n, r)
    }
    from(e) {
        return new Ns(this.url,this.headers,e,this.fetch)
    }
    get vectors() {
        return new Bs(this.url + `/vector`,{
            headers: this.headers,
            fetch: this.fetch
        })
    }
    get analytics() {
        return new Is(this.url + `/iceberg`,this.headers,this.fetch)
    }
}
  , Ws = `2.111.0`
  , Gs = 30 * 1e3
  , Ks = 3 * Gs
  , qs = 2 * Gs
  , Js = `http://localhost:9999`
  , Ys = `supabase.auth.token`
  , Xs = {
    "X-Client-Info": `gotrue-js/${Ws}`
}
  , Zs = `X-Supabase-Api-Version`
  , Qs = {
    "2024-01-01": {
        timestamp: Date.parse(`2024-01-01T00:00:00.0Z`),
        name: `2024-01-01`
    }
}
  , $s = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , ec = `sb_flow_id`
  , tc = class extends Error {
    constructor(e, t, n) {
        super(e),
        this.__isAuthError = !0,
        this.name = `AuthError`,
        this.status = t,
        this.code = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code
        }
    }
}
;
function B(e) {
    return typeof e == `object` && !!e && `__isAuthError` in e
}
var nc = class extends tc {
    constructor(e, t, n) {
        super(e, t, n),
        this.name = `AuthApiError`,
        this.status = t,
        this.code = n
    }
}
;
function rc(e) {
    return B(e) && e.name === `AuthApiError`
}
var V = class extends tc {
    constructor(e, t) {
        super(e),
        this.name = `AuthUnknownError`,
        this.originalError = t
    }
}
  , H = class extends tc {
    constructor(e, t, n, r) {
        super(e, n, r),
        this.name = t,
        this.status = n
    }
}
  , U = class extends H {
    constructor() {
        super(`Auth session missing!`, `AuthSessionMissingError`, 400, void 0)
    }
}
;
function ic(e) {
    return B(e) && e.name === `AuthSessionMissingError`
}
var ac = class extends H {
    constructor() {
        super(`Auth session or user missing`, `AuthInvalidTokenResponseError`, 500, void 0)
    }
}
  , oc = class extends H {
    constructor(e) {
        super(e, `AuthInvalidCredentialsError`, 400, void 0)
    }
}
  , sc = class extends H {
    constructor(e, t=null) {
        super(e, `AuthImplicitGrantRedirectError`, 500, void 0),
        this.details = null,
        this.details = t
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            details: this.details
        })
    }
}
;
function cc(e) {
    return B(e) && e.name === `AuthImplicitGrantRedirectError`
}
var lc = class extends H {
    constructor(e, t=null) {
        super(e, `AuthPKCEGrantCodeExchangeError`, 500, void 0),
        this.details = null,
        this.details = t
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            details: this.details
        })
    }
}
  , uc = class extends H {
    constructor() {
        super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`, `AuthPKCECodeVerifierMissingError`, 400, `pkce_code_verifier_not_found`)
    }
}
  , dc = class extends H {
    constructor(e, t) {
        super(e, `AuthRetryableFetchError`, t, void 0)
    }
}
;
function fc(e) {
    return B(e) && e.name === `AuthRetryableFetchError`
}
var pc = class extends H {
    constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`) {
        super(e, `AuthRefreshDiscardedError`, 409, void 0)
    }
}
;
function mc(e) {
    return B(e) && e.name === `AuthRefreshDiscardedError`
}
var hc = class extends H {
    constructor(e, t, n) {
        super(e, `AuthWeakPasswordError`, t, `weak_password`),
        this.reasons = n
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reasons: this.reasons
        })
    }
}
  , gc = class extends H {
    constructor(e) {
        super(e, `AuthInvalidJwtError`, 400, `invalid_jwt`)
    }
}
  , _c = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``)
  , vc = ` 	
\r=`.split(``)
  , yc = ( () => {
    let e = Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < vc.length; t += 1)
        e[vc[t].charCodeAt(0)] = -2;
    for (let t = 0; t < _c.length; t += 1)
        e[_c[t].charCodeAt(0)] = t;
    return e
}
)();
function bc(e, t, n) {
    if (e !== null)
        for (t.queue = t.queue << 8 | e,
        t.queuedBits += 8; t.queuedBits >= 6; )
            n(_c[t.queue >> t.queuedBits - 6 & 63]),
            t.queuedBits -= 6;
    else if (t.queuedBits > 0)
        for (t.queue <<= 6 - t.queuedBits,
        t.queuedBits = 6; t.queuedBits >= 6; )
            n(_c[t.queue >> t.queuedBits - 6 & 63]),
            t.queuedBits -= 6
}
function xc(e, t, n) {
    let r = yc[e];
    if (r > -1)
        for (t.queue = t.queue << 6 | r,
        t.queuedBits += 6; t.queuedBits >= 8; )
            n(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else if (r === -2)
        return;
    else
        throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
}
function Sc(e) {
    let t = []
      , n = e => {
        t.push(String.fromCodePoint(e))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , i = {
        queue: 0,
        queuedBits: 0
    }
      , a = e => {
        Tc(e, r, n)
    }
    ;
    for (let t = 0; t < e.length; t += 1)
        xc(e.charCodeAt(t), i, a);
    return t.join(``)
}
function Cc(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function wc(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            let t = (r - 55296) * 1024 & 65535;
            r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536,
            n += 1
        }
        Cc(r, t)
    }
}
function Tc(e, t, n) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            n(e);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(e >> 7 - n & 1)) {
                t.utf8seq = n;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw Error(`Invalid UTF-8 sequence`);
        --t.utf8seq
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw Error(`Invalid UTF-8 sequence`);
        t.codepoint = t.codepoint << 6 | e & 63,
        --t.utf8seq,
        t.utf8seq === 0 && n(t.codepoint)
    }
}
function Ec(e) {
    let t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = e => {
        t.push(e)
    }
    ;
    for (let t = 0; t < e.length; t += 1)
        xc(e.charCodeAt(t), n, r);
    return new Uint8Array(t)
}
function Dc(e) {
    let t = [];
    return wc(e, e => t.push(e)),
    new Uint8Array(t)
}
function Oc(e) {
    let t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = e => {
        t.push(e)
    }
    ;
    return e.forEach(e => bc(e, n, r)),
    bc(null, n, r),
    t.join(``)
}
function kc(e) {
    return Math.round(Date.now() / 1e3) + e
}
function Ac() {
    return Symbol(`auth-callback`)
}
var W = () => typeof window < `u` && typeof document < `u`
  , jc = {
    tested: !1,
    writable: !1
}
  , Mc = () => {
    if (!W())
        return !1;
    try {
        if (typeof globalThis.localStorage != `object`)
            return !1
    } catch {
        return !1
    }
    if (jc.tested)
        return jc.writable;
    let e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        jc.tested = !0,
        jc.writable = !0
    } catch {
        jc.tested = !0,
        jc.writable = !1
    }
    return jc.writable
}
;
function Nc(e) {
    let t = {}
      , n = new URL(e);
    if (n.hash && n.hash[0] === `#`)
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (e, n) => {
                t[n] = e
            }
            )
        } catch {}
    return n.searchParams.forEach( (e, n) => {
        t[n] = e
    }
    ),
    t
}
var Pc = e => e ? (...t) => e(...t) : (...e) => fetch(...e)
  , Fc = e => typeof e == `object` && !!e && `status` in e && `ok` in e && `json` in e && typeof e.json == `function`
  , Ic = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n))
}
  , G = async (e, t) => {
    let n = await e.getItem(t);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return null
    }
}
  , K = async (e, t) => {
    await e.removeItem(t)
}
  , Lc = class e {
    constructor() {
        this.promise = new e.promiseConstructor( (e, t) => {
            this.resolve = e,
            this.reject = t
        }
        )
    }
}
;
Lc.promiseConstructor = Promise;
function Rc(e) {
    let t = e.split(`.`);
    if (t.length !== 3)
        throw new gc(`Invalid JWT structure`);
    for (let e = 0; e < t.length; e++)
        if (!$s.test(t[e]))
            throw new gc(`JWT not in base64url format`);
    return {
        header: JSON.parse(Sc(t[0])),
        payload: JSON.parse(Sc(t[1])),
        signature: Ec(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function zc(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function Bc(e, t) {
    return new Promise( (n, r) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    let r = await e(i);
                    if (!t(i, null, r)) {
                        n(r);
                        return
                    }
                } catch (e) {
                    if (!t(i, e)) {
                        r(e);
                        return
                    }
                }
        }
        )()
    }
    )
}
function Vc(e) {
    return (`0` + e.toString(16)).substr(-2)
}
function Hc() {
    let e = new Uint32Array(56);
    if (typeof crypto > `u`) {
        let e = ``;
        for (let t = 0; t < 56; t++)
            e += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random() * 66));
        return e
    }
    return crypto.getRandomValues(e),
    Array.from(e, Vc).join(``)
}
async function Uc(e) {
    let t = new TextEncoder().encode(e)
      , n = await crypto.subtle.digest(`SHA-256`, t)
      , r = new Uint8Array(n);
    return Array.from(r).map(e => String.fromCharCode(e)).join(``)
}
async function Wc(e) {
    if (!(typeof crypto < `u` && crypto.subtle !== void 0 && typeof TextEncoder < `u`))
        return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),
        e;
    let t = await Uc(e);
    return btoa(t).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``)
}
var Gc = /^[a-zA-Z0-9_-]{8,64}$/;
function Kc(e) {
    return typeof e == `string` && Gc.test(e) ? e : null
}
function qc() {
    if (typeof crypto < `u` && typeof crypto.getRandomValues == `function`) {
        let e = new Uint8Array(16);
        return crypto.getRandomValues(e),
        Array.from(e, Vc).join(``)
    }
    let e = ``;
    for (let t = 0; t < 32; t++)
        e += Math.floor(Math.random() * 16).toString(16);
    return e
}
var Jc = (e, t) => `${e}-flow-${t}-code-verifier`
  , Yc = e => `${e}-flows-code-verifier`;
async function Xc(e, t) {
    let n = await G(e, Yc(t));
    return Array.isArray(n) ? n.filter(e => Kc(e) !== null) : []
}
async function Zc(e, t, n, r, i) {
    await Ic(e, Jc(t, n), r);
    let a = (await Xc(e, t)).filter(e => e !== n);
    for (a.push(n); a.length > 5; ) {
        let n = a.shift();
        await K(e, Jc(t, n)),
        i?.(n)
    }
    await Ic(e, Yc(t), a),
    await Ic(e, `${t}-code-verifier`, r)
}
async function Qc(e, t, n) {
    if (n) {
        let r = await G(e, Jc(t, n));
        return {
            verifier: typeof r == `string` ? r : null,
            flowId: n
        }
    }
    let r = await G(e, `${t}-code-verifier`);
    return {
        verifier: typeof r == `string` ? r : null,
        flowId: null
    }
}
async function q(e, t, n) {
    let r = `${t}-code-verifier`;
    if (!n) {
        await K(e, r);
        return
    }
    let i = Jc(t, n)
      , a = await G(e, i);
    await K(e, i);
    let o = await Xc(e, t)
      , s = o.filter(e => e !== n);
    s.length !== o.length && (s.length > 0 ? await Ic(e, Yc(t), s) : await K(e, Yc(t))),
    a != null && a === await G(e, r) && await K(e, r)
}
async function $c(e, t) {
    let n = await Xc(e, t);
    for (let r of n)
        await K(e, Jc(t, r));
    await K(e, Yc(t)),
    await K(e, `${t}-code-verifier`)
}
function el(e, t) {
    let n = e.indexOf(`#`)
      , r = n === -1 ? e : e.slice(0, n)
      , i = n === -1 ? `` : e.slice(n)
      , a = r.indexOf(`?`);
    if (a !== -1) {
        let e = r.slice(0, a)
          , t = r.slice(a + 1).split(`&`).filter(e => e !== `` && e !== `sb_flow_id` && !e.startsWith(`sb_flow_id=`));
        r = t.length > 0 ? `${e}?${t.join(`&`)}` : e
    }
    let o = r.includes(`?`) ? `&` : `?`;
    return `${r}${o}${ec}=${encodeURIComponent(t)}${i}`
}
async function tl(e, t, n=!1, r) {
    let i = Hc()
      , a = i;
    n && (a += `/recovery`);
    let o = qc();
    await Zc(e, t, o, a, r);
    let s = await Wc(i);
    return [s, i === s ? `plain` : `s256`, o]
}
var nl = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function rl(e) {
    let t = e.headers.get(Zs);
    if (!t || !t.match(nl))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function il(e) {
    if (!e)
        throw Error(`Missing exp claim`);
    if (e <= Math.floor(Date.now() / 1e3))
        throw Error(`JWT has expired`)
}
function al(e) {
    switch (e) {
    case `RS256`:
        return {
            name: `RSASSA-PKCS1-v1_5`,
            hash: {
                name: `SHA-256`
            }
        };
    case `ES256`:
        return {
            name: `ECDSA`,
            namedCurve: `P-256`,
            hash: {
                name: `SHA-256`
            }
        };
    default:
        throw Error(`Invalid alg claim`)
    }
}
var ol = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function sl(e) {
    if (!ol.test(e))
        throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)
}
function J(e) {
    if (!e.passkey)
        throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")
}
function cl() {
    return new Proxy({},{
        get: (e, t) => {
            if (t === `__isUserNotAvailableProxy`)
                return !0;
            if (typeof t == `symbol`) {
                let e = t.toString();
                if (e === `Symbol(Symbol.toPrimitive)` || e === `Symbol(Symbol.toStringTag)` || e === `Symbol(util.inspect.custom)`)
                    return
            }
            throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (e, t) => {
            throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (e, t) => {
            throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function ll(e, t) {
    return new Proxy(e,{
        get: (e, n, r) => {
            if (n === `__isInsecureUserWarningProxy`)
                return !0;
            if (typeof n == `symbol`) {
                let t = n.toString();
                if (t === `Symbol(Symbol.toPrimitive)` || t === `Symbol(Symbol.toStringTag)` || t === `Symbol(util.inspect.custom)` || t === `Symbol(nodejs.util.inspect.custom)`)
                    return Reflect.get(e, n, r)
            }
            return !t.value && typeof n == `string` && (console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),
            t.value = !0),
            Reflect.get(e, n, r)
        }
    })
}
function ul(e) {
    return JSON.parse(JSON.stringify(e))
}
var dl = e => {
    if (typeof e == `object` && e) {
        let t = e;
        if (typeof t.msg == `string`)
            return t.msg;
        if (typeof t.message == `string`)
            return t.message;
        if (typeof t.error_description == `string`)
            return t.error_description;
        if (typeof t.error == `string`)
            return t.error
    }
    return JSON.stringify(e)
}
  , fl = [500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530];
async function pl(e) {
    if (!Fc(e))
        throw new dc(dl(e),0);
    if (fl.includes(e.status))
        throw new dc(dl(e),e.status);
    let t;
    try {
        t = await e.json()
    } catch (e) {
        throw new V(dl(e),e)
    }
    let n, r = rl(e);
    if (r && r.getTime() >= Qs[`2024-01-01`].timestamp && typeof t == `object` && t && typeof t.code == `string` ? n = t.code : typeof t == `object` && t && typeof t.error_code == `string` && (n = t.error_code),
    !n) {
        if (typeof t == `object` && t && typeof t.weak_password == `object` && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce( (e, t) => e && typeof t == `string`, !0))
            throw new hc(dl(t),e.status,t.weak_password.reasons)
    } else if (n === `weak_password`)
        throw new hc(dl(t),e.status,t.weak_password?.reasons || []);
    else if (n === `session_not_found`)
        throw new U;
    throw new nc(dl(t),e.status || 500,n)
}
var ml = (e, t, n, r) => {
    let i = {
        method: e,
        headers: t?.headers || {}
    };
    return e === `GET` ? i : (i.headers = Object.assign({
        "Content-Type": `application/json;charset=UTF-8`
    }, t?.headers),
    i.body = JSON.stringify(r),
    Object.assign(Object.assign({}, i), n))
}
;
async function Y(e, t, n, r) {
    let i = Object.assign({}, r?.headers);
    i[`X-Supabase-Api-Version`] || (i[Zs] = Qs[`2024-01-01`].name),
    r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    let a = r?.query ?? {};
    r?.redirectTo && (a.redirect_to = r.redirectTo);
    let o = await hl(e, t, n + (Object.keys(a).length ? `?` + new URLSearchParams(a).toString() : ``), {
        headers: i,
        noResolveJson: r?.noResolveJson
    }, {}, r?.body);
    return r?.xform ? r?.xform(o) : {
        data: Object.assign({}, o),
        error: null
    }
}
async function hl(e, t, n, r, i, a) {
    let o = ml(t, r, i, a), s;
    try {
        s = await e(n, Object.assign({}, o))
    } catch (e) {
        throw new dc(dl(e),0)
    }
    if (s.ok || await pl(s),
    r?.noResolveJson)
        return s;
    try {
        return await s.json()
    } catch (e) {
        await pl(e)
    }
}
function X(e) {
    let t = null;
    xl(e) && (t = Object.assign({}, e),
    e.expires_at || (t.expires_at = kc(e.expires_in)));
    let n = e.user ?? (typeof e?.id == `string` ? e : null);
    return {
        data: {
            session: t,
            user: n
        },
        error: null
    }
}
function gl(e) {
    let t = X(e);
    return !t.error && e.weak_password && typeof e.weak_password == `object` && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == `string` && e.weak_password.reasons.reduce( (e, t) => e && typeof t == `string`, !0) && (t.data.weak_password = e.weak_password),
    t
}
function _l(e) {
    return {
        data: {
            user: e.user ?? e
        },
        error: null
    }
}
function vl(e) {
    return {
        data: e,
        error: null
    }
}
function yl(e) {
    let {action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: a} = e
      , o = na(e, [`action_link`, `email_otp`, `hashed_token`, `redirect_to`, `verification_type`]);
    return {
        data: {
            properties: {
                action_link: t,
                email_otp: n,
                hashed_token: r,
                redirect_to: i,
                verification_type: a
            },
            user: Object.assign({}, o)
        },
        error: null
    }
}
function bl(e) {
    return e
}
function xl(e) {
    return !!e.access_token && !!e.refresh_token && !!e.expires_in
}
var Sl = [`global`, `local`, `others`]
  , Cl = class {
    constructor({url: e=``, headers: t={}, fetch: n, experimental: r}) {
        this.url = e,
        this.headers = t,
        this.fetch = Pc(n),
        this.experimental = r ?? {},
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        },
        this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            updateClient: this._updateOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
        },
        this.customProviders = {
            listProviders: this._listCustomProviders.bind(this),
            createProvider: this._createCustomProvider.bind(this),
            getProvider: this._getCustomProvider.bind(this),
            updateProvider: this._updateCustomProvider.bind(this),
            deleteProvider: this._deleteCustomProvider.bind(this)
        },
        this.passkey = {
            listPasskeys: this._adminListPasskeys.bind(this),
            deletePasskey: this._adminDeletePasskey.bind(this)
        }
    }
    async signOut(e, t=Sl[0]) {
        if (Sl.indexOf(t) < 0)
            throw Error(`@supabase/auth-js: Parameter scope must be one of ${Sl.join(`, `)}`);
        try {
            return await Y(this.fetch, `POST`, `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async inviteUserByEmail(e, t={}) {
        try {
            return await Y(this.fetch, `POST`, `${this.url}/invite`, {
                body: {
                    email: e,
                    data: t.data
                },
                headers: this.headers,
                redirectTo: t.redirectTo,
                xform: _l
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async generateLink(e) {
        try {
            let {options: t} = e
              , n = na(e, [`options`])
              , r = Object.assign(Object.assign({}, n), t);
            return `newEmail` in n && (r.new_email = n?.newEmail,
            delete r.newEmail),
            await Y(this.fetch, `POST`, `${this.url}/admin/generate_link`, {
                body: r,
                headers: this.headers,
                xform: yl,
                redirectTo: t?.redirectTo
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async createUser(e) {
        try {
            return await Y(this.fetch, `POST`, `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: _l
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async listUsers(e) {
        try {
            let t = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , n = await Y(this.fetch, `GET`, `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (e?.page)?.toString() ?? ``,
                    per_page: (e?.perPage)?.toString() ?? ``
                },
                xform: bl
            });
            if (n.error)
                throw n.error;
            let r = await n.json()
              , i = n.headers.get(`x-total-count`) ?? 0
              , a = n.headers.get(`link`)?.split(`,`) ?? [];
            return a.length > 0 && (a.forEach(e => {
                let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1))
                  , r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
                t[`${r}Page`] = n
            }
            ),
            t.total = parseInt(i)),
            {
                data: Object.assign(Object.assign({}, r), t),
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        users: []
                    },
                    error: e
                };
            throw e
        }
    }
    async getUserById(e) {
        sl(e);
        try {
            return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                xform: _l
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async updateUserById(e, t) {
        sl(e);
        try {
            return await Y(this.fetch, `PUT`, `${this.url}/admin/users/${e}`, {
                body: t,
                headers: this.headers,
                xform: _l
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async deleteUser(e, t=!1) {
        sl(e);
        try {
            return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: t
                },
                xform: _l
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        user: null
                    },
                    error: e
                };
            throw e
        }
    }
    async _listFactors(e) {
        sl(e.userId);
        try {
            let {data: t, error: n} = await Y(this.fetch, `GET`, `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: e => ({
                    data: {
                        factors: e
                    },
                    error: null
                })
            });
            return {
                data: t,
                error: n
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _deleteFactor(e) {
        sl(e.userId),
        sl(e.id);
        try {
            return {
                data: await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _listOAuthClients(e) {
        try {
            let t = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , n = await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (e?.page)?.toString() ?? ``,
                    per_page: (e?.perPage)?.toString() ?? ``
                },
                xform: bl
            });
            if (n.error)
                throw n.error;
            let r = await n.json()
              , i = n.headers.get(`x-total-count`) ?? 0
              , a = n.headers.get(`link`)?.split(`,`) ?? [];
            return a.length > 0 && (a.forEach(e => {
                let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1))
                  , r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
                t[`${r}Page`] = n
            }
            ),
            t.total = parseInt(i)),
            {
                data: Object.assign(Object.assign({}, r), t),
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        clients: []
                    },
                    error: e
                };
            throw e
        }
    }
    async _createOAuthClient(e) {
        try {
            return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients`, {
                body: e,
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _getOAuthClient(e) {
        try {
            return await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _updateOAuthClient(e, t) {
        try {
            return await Y(this.fetch, `PUT`, `${this.url}/admin/oauth/clients/${e}`, {
                body: t,
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _deleteOAuthClient(e) {
        try {
            return await Y(this.fetch, `DELETE`, `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _regenerateOAuthClientSecret(e) {
        try {
            return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _listCustomProviders(e) {
        try {
            let t = {};
            return e?.type && (t.type = e.type),
            await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers`, {
                headers: this.headers,
                query: t,
                xform: e => ({
                    data: {
                        providers: e?.providers ?? []
                    },
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: {
                        providers: []
                    },
                    error: e
                };
            throw e
        }
    }
    async _createCustomProvider(e) {
        try {
            return await Y(this.fetch, `POST`, `${this.url}/admin/custom-providers`, {
                body: e,
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _getCustomProvider(e) {
        try {
            return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers/${e}`, {
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _updateCustomProvider(e, t) {
        try {
            return await Y(this.fetch, `PUT`, `${this.url}/admin/custom-providers/${e}`, {
                body: t,
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _deleteCustomProvider(e) {
        try {
            return await Y(this.fetch, `DELETE`, `${this.url}/admin/custom-providers/${e}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _adminListPasskeys(e) {
        J(this.experimental),
        sl(e.userId);
        try {
            return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e.userId}/passkeys`, {
                headers: this.headers,
                xform: e => ({
                    data: e,
                    error: null
                })
            })
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
    async _adminDeletePasskey(e) {
        J(this.experimental),
        sl(e.userId),
        sl(e.passkeyId);
        try {
            return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (e) {
            if (B(e))
                return {
                    data: null,
                    error: e
                };
            throw e
        }
    }
}
;
function wl(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
globalThis && Mc() && globalThis.localStorage && globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
var Tl = class extends Error {
    constructor(e) {
        super(e),
        this.isAcquireTimeout = !0
    }
}
;
function El() {
    if (typeof globalThis != `object`)
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < `u` && (self.globalThis = self)
        }
}
function Dl(e) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(e))
        throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
    return e.toLowerCase()
}
function Ol(e) {
    return parseInt(e, 16)
}
function kl(e) {
    let t = new TextEncoder().encode(e);
    return `0x` + Array.from(t, e => e.toString(16).padStart(2, `0`)).join(``)
}
function Al(e) {
    let {chainId: t, domain: n, expirationTime: r, issuedAt: i=new Date, nonce: a, notBefore: o, requestId: s, resources: c, scheme: l, uri: u, version: d} = e;
    if (!Number.isInteger(t))
        throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
    if (!n)
        throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
    if (a && a.length < 8)
        throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
    if (!u)
        throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
    if (d !== `1`)
        throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
    if (e.statement?.includes(`
`))
        throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
    let f = Dl(e.address)
      , p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ``}`
      , m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ``}\nIssued At: ${i.toISOString()}`;
    if (r && (m += `\nExpiration Time: ${r.toISOString()}`),
    o && (m += `\nNot Before: ${o.toISOString()}`),
    s && (m += `\nRequest ID: ${s}`),
    c) {
        let e = `
Resources:`;
        for (let t of c) {
            if (!t || typeof t != `string`)
                throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);
            e += `\n- ${t}`
        }
        m += e
    }
    return `${p}\n${m}`
}
var Z = class extends Error {
    constructor({message: e, code: t, cause: n, name: r}) {
        super(e, {
            cause: n
        }),
        this.__isWebAuthnError = !0,
        this.name = r ?? (n instanceof Error ? n.name : void 0) ?? `Unknown Error`,
        this.code = t
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code
        }
    }
}
  , jl = class extends Z {
    constructor(e, t) {
        super({
            code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
            cause: t,
            message: e
        }),
        this.name = `WebAuthnUnknownError`,
        this.originalError = t
    }
}
;
function Ml({error: e, options: t}) {
    let {publicKey: n} = t;
    if (!n)
        throw Error(`options was missing required publicKey property`);
    if (e.name === `AbortError`) {
        if (t.signal instanceof AbortSignal)
            return new Z({
                message: `Registration ceremony was sent an abort signal`,
                code: `ERROR_CEREMONY_ABORTED`,
                cause: e
            })
    } else if (e.name === `ConstraintError`) {
        if (n.authenticatorSelection?.requireResidentKey === !0)
            return new Z({
                message: `Discoverable credentials were required but no available authenticator supported it`,
                code: `ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,
                cause: e
            });
        if (t.mediation === `conditional` && n.authenticatorSelection?.userVerification === `required`)
            return new Z({
                message: `User verification was required during automatic registration but it could not be performed`,
                code: `ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,
                cause: e
            });
        if (n.authenticatorSelection?.userVerification === `required`)
            return new Z({
                message: `User verification was required but no available authenticator supported it`,
                code: `ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,
                cause: e
            })
    } else if (e.name === `InvalidStateError`)
        return new Z({
            message: `The authenticator was previously registered`,
            code: `ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,
            cause: e
        });
    else if (e.name === `NotAllowedError`)
        return new Z({
            message: e.message,
            code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
            cause: e
        });
    else if (e.name === `NotSupportedError`)
        return n.pubKeyCredParams.filter(e => e.type === `public-key`).length === 0 ? new Z({
            message: `No entry in pubKeyCredParams was of type "public-key"`,
            code: `ERROR_MALFORMED_PUBKEYCREDPARAMS`,
            cause: e
        }) : new Z({
            message: `No available authenticator supported any of the specified pubKeyCredParams algorithms`,
            code: `ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,
            cause: e
        });
    else if (e.name === `SecurityError`) {
        let t = window.location.hostname;
        if (!zl(t))
            return new Z({
                message: `${window.location.hostname} is an invalid domain`,
                code: `ERROR_INVALID_DOMAIN`,
                cause: e
            });
        if (n.rp.id !== t)
            return new Z({
                message: `The RP ID "${n.rp.id}" is invalid for this domain`,
                code: `ERROR_INVALID_RP_ID`,
                cause: e
            })
    } else if (e.name === `TypeError`) {
        if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64)
            return new Z({
                message: `User ID was not between 1 and 64 characters`,
                code: `ERROR_INVALID_USER_ID_LENGTH`,
                cause: e
            })
    } else if (e.name === `UnknownError`)
        return new Z({
            message: `The authenticator was unable to process the specified options, or could not create a new credential`,
            code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
            cause: e
        });
    return new Z({
        message: `a Non-Webauthn related error has occurred`,
        code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
        cause: e
    })
}
function Nl({error: e, options: t}) {
    let {publicKey: n} = t;
    if (!n)
        throw Error(`options was missing required publicKey property`);
    if (e.name === `AbortError`) {
        if (t.signal instanceof AbortSignal)
            return new Z({
                message: `Authentication ceremony was sent an abort signal`,
                code: `ERROR_CEREMONY_ABORTED`,
                cause: e
            })
    } else if (e.name === `NotAllowedError`)
        return new Z({
            message: e.message,
            code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
            cause: e
        });
    else if (e.name === `SecurityError`) {
        let t = window.location.hostname;
        if (!zl(t))
            return new Z({
                message: `${window.location.hostname} is an invalid domain`,
                code: `ERROR_INVALID_DOMAIN`,
                cause: e
            });
        if (n.rpId !== t)
            return new Z({
                message: `The RP ID "${n.rpId}" is invalid for this domain`,
                code: `ERROR_INVALID_RP_ID`,
                cause: e
            })
    } else if (e.name === `UnknownError`)
        return new Z({
            message: `The authenticator was unable to process the specified options, or could not create a new assertion signature`,
            code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
            cause: e
        });
    return new Z({
        message: `a Non-Webauthn related error has occurred`,
        code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
        cause: e
    })
}
var Pl = new class {
    createNewAbortSignal() {
        if (this.controller) {
            let e = Error(`Cancelling existing WebAuthn API call for new one`);
            e.name = `AbortError`,
            this.controller.abort(e)
        }
        let e = new AbortController;
        return this.controller = e,
        e.signal
    }
    cancelCeremony() {
        if (this.controller) {
            let e = Error(`Manually cancelling existing WebAuthn API call`);
            e.name = `AbortError`,
            this.controller.abort(e),
            this.controller = void 0
        }
    }
}
;
function Fl(e) {
    if (!e)
        throw Error(`Credential creation options are required`);
    if (typeof PublicKeyCredential < `u` && `parseCreationOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`)
        return PublicKeyCredential.parseCreationOptionsFromJSON(e);
    let {challenge: t, user: n, excludeCredentials: r} = e
      , i = na(e, [`challenge`, `user`, `excludeCredentials`])
      , a = Ec(t).buffer
      , o = Object.assign(Object.assign({}, n), {
        id: Ec(n.id).buffer
    })
      , s = Object.assign(Object.assign({}, i), {
        challenge: a,
        user: o
    });
    if (r && r.length > 0) {
        s.excludeCredentials = Array(r.length);
        for (let e = 0; e < r.length; e++) {
            let t = r[e];
            s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
                id: Ec(t.id).buffer,
                type: t.type || `public-key`,
                transports: t.transports
            })
        }
    }
    return s
}
function Il(e) {
    if (!e)
        throw Error(`Credential request options are required`);
    if (typeof PublicKeyCredential < `u` && `parseRequestOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`)
        return PublicKeyCredential.parseRequestOptionsFromJSON(e);
    let {challenge: t, allowCredentials: n} = e
      , r = na(e, [`challenge`, `allowCredentials`])
      , i = Ec(t).buffer
      , a = Object.assign(Object.assign({}, r), {
        challenge: i
    });
    if (n && n.length > 0) {
        a.allowCredentials = Array(n.length);
        for (let e = 0; e < n.length; e++) {
            let t = n[e];
            a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
                id: Ec(t.id).buffer,
                type: t.type || `public-key`,
                transports: t.transports
            })
        }
    }
    return a
}
function Ll(e) {
    if (`toJSON` in e && typeof e.toJSON == `function`)
        return e.toJSON();
    let t = e;
    return {
        id: e.id,
        rawId: e.id,
        response: {
            attestationObject: Oc(new Uint8Array(e.response.attestationObject)),
            clientDataJSON: Oc(new Uint8Array(e.response.clientDataJSON))
        },
        type: `public-key`,
        clientExtensionResults: e.getClientExtensionResults(),
        authenticatorAttachment: t.authenticatorAttachment ?? void 0
    }
}
function Rl(e) {
    if (`toJSON` in e && typeof e.toJSON == `function`)
        return e.toJSON();
    let t = e
      , n = e.getClientExtensionResults()
      , r = e.response;
    return {
        id: e.id,
        rawId: e.id,
        response: {
            authenticatorData: Oc(new Uint8Array(r.authenticatorData)),
            clientDataJSON: Oc(new Uint8Array(r.clientDataJSON)),
            signature: Oc(new Uint8Array(r.signature)),
            userHandle: r.userHandle ? Oc(new Uint8Array(r.userHandle)) : void 0
        },
        type: `public-key`,
        clientExtensionResults: n,
        authenticatorAttachment: t.authenticatorAttachment ?? void 0
    }
}
function zl(e) {
    return e === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
}
function Bl() {
    return !!(W() && `PublicKeyCredential` in window && window.PublicKeyCredential && `credentials` in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == `function` && typeof (navigator == null ? void 0 : navigator.credentials)?.get == `function`)
}
async function Vl(e) {
    try {
        let t = await navigator.credentials.create(e);
        return t ? t instanceof PublicKeyCredential ? {
            data: t,
            error: null
        } : {
            data: null,
            error: new jl(`Browser returned unexpected credential type`,t)
        } : {
            data: null,
            error: new jl(`Empty credential response`,t)
        }
    } catch (t) {
        return {
            data: null,
            error: Ml({
                error: t,
                options: e
            })
        }
    }
}
async function Hl(e) {
    try {
        let t = await navigator.credentials.get(e);
        return t ? t instanceof PublicKeyCredential ? {
            data: t,
            error: null
        } : {
            data: null,
            error: new jl(`Browser returned unexpected credential type`,t)
        } : {
            data: null,
            error: new jl(`Empty credential response`,t)
        }
    } catch (t) {
        return {
            data: null,
            error: Nl({
                error: t,
                options: e
            })
        }
    }
}
var Ul = {
    hints: [`security-key`],
    authenticatorSelection: {
        authenticatorAttachment: `cross-platform`,
        requireResidentKey: !1,
        userVerification: `preferred`,
        residentKey: `discouraged`
    },
    attestation: `direct`
}
  , Wl = {
    userVerification: `preferred`,
    hints: [`security-key`],
    attestation: `direct`
};
function Gl(...e) {
    let t = e => typeof e == `object` && !!e && !Array.isArray(e)
      , n = e => e instanceof ArrayBuffer || ArrayBuffer.isView(e)
      , r = {};
    for (let i of e)
        if (i)
            for (let e in i) {
                let a = i[e];
                if (a !== void 0)
                    if (Array.isArray(a))
                        r[e] = a;
                    else if (n(a))
                        r[e] = a;
                    else if (t(a)) {
                        let n = r[e];
                        t(n) ? r[e] = Gl(n, a) : r[e] = Gl(a)
                    } else
                        r[e] = a
            }
    return r
}
function Kl(e, t) {
    return Gl(Ul, e, t || {})
}
function ql(e, t) {
    return Gl(Wl, e, t || {})
}
var Jl = class {
    constructor(e) {
        this.client = e,
        this.enroll = this._enroll.bind(this),
        this.challenge = this._challenge.bind(this),
        this.verify = this._verify.bind(this),
        this.authenticate = this._authenticate.bind(this),
        this.register = this._register.bind(this)
    }
    async _enroll(e) {
        return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
            factorType: `webauthn`
        }))
    }
    async _challenge({factorId: e, webauthn: t, friendlyName: n, signal: r}, i) {
        try {
            let {data: a, error: o} = await this.client.mfa.challenge({
                factorId: e,
                webauthn: t
            });
            if (!a)
                return {
                    data: null,
                    error: o
                };
            let s = r ?? Pl.createNewAbortSignal();
            if (a.webauthn.type === `create`) {
                let {user: e} = a.webauthn.credential_options.publicKey;
                if (!e.name) {
                    let t = n;
                    if (t)
                        e.name = `${e.id}:${t}`;
                    else {
                        let t = (await this.client.getUser()).data.user
                          , n = t?.user_metadata?.name || t?.email || t?.id || `User`;
                        e.name = `${e.id}:${n}`
                    }
                }
                e.displayName ||= e.name
            }
            switch (a.webauthn.type) {
            case `create`:
                {
                    let {data: t, error: n} = await Vl({
                        publicKey: Kl(a.webauthn.credential_options.publicKey, i?.create),
                        signal: s
                    });
                    return t ? {
                        data: {
                            factorId: e,
                            challengeId: a.id,
                            webauthn: {
                                type: a.webauthn.type,
                                credential_response: t
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: n
                    }
                }
            case `request`:
                {
                    let t = ql(a.webauthn.credential_options.publicKey, i?.request)
                      , {data: n, error: r} = await Hl(Object.assign(Object.assign({}, a.webauthn.credential_options), {
                        publicKey: t,
                        signal: s
                    }));
                    return n ? {
                        data: {
                            factorId: e,
                            challengeId: a.id,
                            webauthn: {
                                type: a.webauthn.type,
                                credential_response: n
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: r
                    }
                }
            }
        } catch (e) {
            return B(e) ? {
                data: null,
                error: e
            } : {
                data: null,
                error: new V(`Unexpected error in challenge`,e)
            }
        }
    }
    async _verify({challengeId: e, factorId: t, webauthn: n}) {
        return this.client.mfa.verify({
            factorId: t,
            challengeId: e,
            webauthn: n
        })
    }
    async _authenticate({factorId: e, webauthn: {rpId: t=typeof window < `u` ? window.location.hostname : void 0, rpOrigins: n=typeof window < `u` ? [window.location.origin] : void 0, signal: r}={}}, i) {
        if (!t)
            return {
                data: null,
                error: new tc(`rpId is required for WebAuthn authentication`)
            };
        try {
            if (!Bl())
                return {
                    data: null,
                    error: new V(`Browser does not support WebAuthn`,null)
                };
            let {data: a, error: o} = await this.challenge({
                factorId: e,
                webauthn: {
                    rpId: t,
                    rpOrigins: n
                },
                signal: r
            }, {
                request: i
            });
            if (!a)
                return {
                    data: null,
                    error: o
                };
            let {webauthn: s} = a;
            return this._verify({
                factorId: e,
                challengeId: a.challengeId,
                webauthn: {
                    type: s.type,
                    rpId: t,
                    rpOrigins: n,
                    credential_response: s.credential_response
                }
            })
        } catch (e) {
            return B(e) ? {
                data: null,
                error: e
            } : {
                data: null,
                error: new V(`Unexpected error in authenticate`,e)
            }
        }
    }
    async _register({friendlyName: e, webauthn: {rpId: t=typeof window < `u` ? window.location.hostname : void 0, rpOrigins: n=typeof window < `u` ? [window.location.origin] : void 0, signal: r}={}}, i) {
        if (!t)
            return {
                data: null,
                error: new tc(`rpId is required for WebAuthn registration`)
            };
        try {
            if (!Bl())
                return {
                    data: null,
                    error: new V(`Browser does not support WebAuthn`,null)
                };
            let {data: a, error: o} = await this._enroll({
                friendlyName: e
            });
            if (!a)
                return await this.client.mfa.listFactors().then(t => t.data?.all.find(t => t.factor_type === `webauthn` && t.friendly_name === e && t.status !== `unverified`)).then(e => e ? this.client.mfa.unenroll({
                    factorId: e?.id
                }) : void 0),
                {
                    data: null,
                    error: o
                };
            let {data: s, error: c} = await this._challenge({
                factorId: a.id,
                friendlyName: a.friendly_name,
                webauthn: {
                    rpId: t,
                    rpOrigins: n
                },
                signal: r
            }, {
                create: i
            });
            return s ? this._verify({
                factorId: a.id,
                challengeId: s.challengeId,
                webauthn: {
                    rpId: t,
                    rpOrigins: n,
                    type: s.webauthn.type,
                    credential_response: s.webauthn.credential_response
                }
            }) : {
                data: null,
                error: c
            }
        } catch (e) {
            return B(e) ? {
                data: null,
                error: e
            } : {
                data: null,
                error: new V(`Unexpected error in register`,e)
            }
        }
    }
}
;
El();
var Yl = {
    url: Js,
    storageKey: Ys,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: Xs,
    flowType: `implicit`,
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1,
    experimental: {}
}
  , Xl = {}
  , Zl = class e {
    get jwks() {
        return Xl[this.storageKey]?.jwks ?? {
            keys: []
        }
    }
    set jwks(e) {
        Xl[this.storageKey] = Object.assign(Object.assign({}, Xl[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        return Xl[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1)
    }
    set jwks_cached_at(e) {
        Xl[this.storageKey] = Object.assign(Object.assign({}, Xl[this.storageKey]), {
            cachedAt: e
        })
    }
    constructor(t) {
        var n;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.autoRefreshTickTimeout = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.lastRefreshFailure = null,
        this._sessionRemovalEpoch = 0,
        this.initializePromise = null,
        this._pendingInitNotifications = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lock = null,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log;
        let r = Object.assign(Object.assign({}, Yl), t);
        if (this.storageKey = r.storageKey,
        this.instanceID = e.nextInstanceID[this.storageKey] ?? 0,
        e.nextInstanceID[this.storageKey] = this.instanceID + 1,
        this.logDebugMessages = !!r.debug,
        typeof r.debug == `function` && (this.logger = r.debug),
        this.instanceID > 0 && W()) {
            let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
            console.warn(e),
            this.logDebugMessages && console.trace(e)
        }
        if (this.persistSession = r.persistSession,
        this.autoRefreshToken = r.autoRefreshToken,
        this.experimental = r.experimental ?? {},
        this.admin = new Cl({
            url: r.url,
            headers: r.headers,
            fetch: r.fetch,
            experimental: this.experimental
        }),
        this.url = r.url,
        this.headers = r.headers,
        this.fetch = Pc(r.fetch),
        this.detectSessionInUrl = r.detectSessionInUrl,
        this.flowType = r.flowType,
        this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader,
        this.throwOnError = r.throwOnError,
        this.lockAcquireTimeout = r.lockAcquireTimeout,
        r.lock != null && (this.lock = r.lock),
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = -(2 ** 53 - 1)),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
            webauthn: new Jl(this)
        },
        this.oauth = {
            getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
            approveAuthorization: this._approveAuthorization.bind(this),
            denyAuthorization: this._denyAuthorization.bind(this),
            listGrants: this._listOAuthGrants.bind(this),
            revokeGrant: this._revokeOAuthGrant.bind(this)
        },
        this.passkey = {
            startRegistration: this._startPasskeyRegistration.bind(this),
            verifyRegistration: this._verifyPasskeyRegistration.bind(this),
            startAuthentication: this._startPasskeyAuthentication.bind(this),
            verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
            list: this._listPasskeys.bind(this),
            update: this._updatePasskey.bind(this),
            delete: this._deletePasskey.bind(this)
        },
        this.persistSession ? (r.storage ? this.storage = r.storage : Mc() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = wl(this.memoryStorage)),
        r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {},
        this.storage = wl(this.memoryStorage)),
        W() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (e) {
                console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`, e)
            }
            (n = this.broadcastChannel) == null || n.addEventListener(`message`, async e => {
                this._debug(`received broadcast notification from other tab or client`, e),
                (e.data.event === `TOKEN_REFRESHED` || e.data.event === `SIGNED_IN`) && (this.lastRefreshFailure = null);
                try {
                    await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                } catch (e) {
                    this._debug(`#broadcastChannel`, `error`, e)
                }
            }
            )
        }
        r.skipAutoInitialize || this.initialize().catch(e => {
            this._debug(`#initialize()`, `error`, e)
        }
        )
    }
    isThrowOnErrorEnabled() {
        return this.throwOnError
    }
    _returnResult(e) {
        if (this.throwOnError && e && e.error)
            throw e.error;
        return e
    }
    _logPrefix() {
        return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ws}) ${new Date().toISOString()}`
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(this._logPrefix(), ...e),
        this
    }
    async initialize() {
        if (this.initializePromise)
            return await this.initializePromise;
        this._pendingInitNotifications = [],
        this.initializePromise = (async () => this.lock == null ? await this._initialize() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))();
        let e = await this.initializePromise
          , t = this._pendingInitNotifications ?? [];
        this._pendingInitNotifications = null;
        for (let e of t)
            await this._notifyAllSubscribers(e.event, e.session, e.broadcast);
        return e
    }
    async _initialize() {
        try {
            let e = {}
              , t = `none`;
            if (W() && (e = Nc(window.location.href),
            this._isImplicitGrantCallback(e) ? t = `implicit` : await this._isPKCECallback(e) && (t = `pkce`)),
            W() && this.detectSessionInUrl && t !== `none`) {
                let {data: n, error: r} = await this._getSessionFromURL(e, t);
                if (r) {
                    if (this._debug(`#_initialize()`, `error detecting session from URL`, r),
                    cc(r)) {
                        let e = r.details?.code;
                        if (e === `identity_already_exists` || e === `identity_not_found` || e === `single_identity_not_deletable`)
                            return {
                                error: r
                            }
                    }
                    return {
                        error: r
                    }
                }
                let {session: i, redirectType: a} = n;
                return this._debug(`#_initialize()`, `detected session in URL`, i, `redirect type`, a),
                await this._saveSession(i),
                setTimeout(async () => {
                    a === `recovery` ? await this._notifyAllSubscribers(`PASSWORD_RECOVERY`, i) : await this._notifyAllSubscribers(`SIGNED_IN`, i)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (e) {
            return B(e) ? this._returnResult({
                error: e
            }) : this._returnResult({
                error: new V(`Unexpected error during initialization`,e)
            })
        } finally {
            await this._handleVisibilityChange(),
            this._debug(`#_initialize()`, `end`)
        }
    }
    async signInAnonymously(e) {
        try {
            let {data: t, error: n} = await Y(this.fetch, `POST`, `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: e?.options?.data ?? {},
                    gotrue_meta_security: {
                        captcha_token: e?.options?.captchaToken
                    }
                },
                xform: X
            });
            if (n || !t)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                });
            let r = t.session
              , i = t.user;
            return t.session && (await this._saveSession(t.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r)),
            this._returnResult({
                data: {
                    user: i,
                    session: r
                },
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signUp(e) {
        let t = null;
        try {
            let n;
            if (`email` in e) {
                let {email: r, password: i, options: a} = e
                  , o = null
                  , s = null;
                this.flowType === `pkce` && ([o,s,t] = await this._getCodeChallengeAndMethod()),
                n = await Y(this.fetch, `POST`, `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo, t),
                    body: {
                        email: r,
                        password: i,
                        data: a?.data ?? {},
                        gotrue_meta_security: {
                            captcha_token: a?.captchaToken
                        },
                        code_challenge: o,
                        code_challenge_method: s
                    },
                    xform: X
                })
            } else if (`phone` in e) {
                let {phone: t, password: r, options: i} = e;
                n = await Y(this.fetch, `POST`, `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: t,
                        password: r,
                        data: i?.data ?? {},
                        channel: i?.channel ?? `sms`,
                        gotrue_meta_security: {
                            captcha_token: i?.captchaToken
                        }
                    },
                    xform: X
                })
            } else
                throw new oc(`You must provide either an email or phone number and a password`);
            let {data: r, error: i} = n;
            if (i || !r)
                return await q(this.storage, this.storageKey, t),
                this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            let a = r.session
              , o = r.user;
            return r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, a)),
            this._returnResult({
                data: {
                    user: o,
                    session: a
                },
                error: null
            })
        } catch (e) {
            if (await q(this.storage, this.storageKey, t),
            B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithPassword(e) {
        try {
            let t;
            if (`email` in e) {
                let {email: n, password: r, options: i} = e;
                t = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: n,
                        password: r,
                        gotrue_meta_security: {
                            captcha_token: i?.captchaToken
                        }
                    },
                    xform: gl
                })
            } else if (`phone` in e) {
                let {phone: n, password: r, options: i} = e;
                t = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        password: r,
                        gotrue_meta_security: {
                            captcha_token: i?.captchaToken
                        }
                    },
                    xform: gl
                })
            } else
                throw new oc(`You must provide either an email or phone number and a password`);
            let {data: n, error: r} = t;
            if (r)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
            if (!n || !n.session || !n.user) {
                let e = new ac;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                })
            }
            return n.session && (await this._saveSession(n.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, n.session)),
            this._returnResult({
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: r
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithOAuth(e) {
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: e.options?.redirectTo,
            scopes: e.options?.scopes,
            queryParams: e.options?.queryParams,
            skipBrowserRedirect: e.options?.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(e, t) {
        return await this.initializePromise,
        this.lock == null ? this._exchangeCodeForSession(e, t) : this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e, t))
    }
    async signInWithWeb3(e) {
        let {chain: t} = e;
        switch (t) {
        case `ethereum`:
            return await this.signInWithEthereum(e);
        case `solana`:
            return await this.signInWithSolana(e);
        default:
            throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)
        }
    }
    async signInWithEthereum(e) {
        let t, n;
        if (`message` in e)
            t = e.message,
            n = e.signature;
        else {
            let {chain: r, wallet: i, statement: a, options: o} = e, s;
            if (!W()) {
                if (typeof i != `object` || !o?.url)
                    throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
                s = i
            } else if (typeof i == `object`)
                s = i;
            else {
                let e = window;
                if (`ethereum` in e && typeof e.ethereum == `object` && `request` in e.ethereum && typeof e.ethereum.request == `function`)
                    s = e.ethereum;
                else
                    throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)
            }
            let c = new URL(o?.url ?? window.location.href)
              , l = await s.request({
                method: `eth_requestAccounts`
            }).then(e => e).catch( () => {
                throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)
            }
            );
            if (!l || l.length === 0)
                throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
            let u = Dl(l[0])
              , d = o?.signInWithEthereum?.chainId;
            d ||= Ol(await s.request({
                method: `eth_chainId`
            })),
            t = Al({
                domain: c.host,
                address: u,
                statement: a,
                uri: c.href,
                version: `1`,
                chainId: d,
                nonce: o?.signInWithEthereum?.nonce,
                issuedAt: o?.signInWithEthereum?.issuedAt ?? new Date,
                expirationTime: o?.signInWithEthereum?.expirationTime,
                notBefore: o?.signInWithEthereum?.notBefore,
                requestId: o?.signInWithEthereum?.requestId,
                resources: o?.signInWithEthereum?.resources
            }),
            n = await s.request({
                method: `personal_sign`,
                params: [kl(t), u]
            })
        }
        try {
            let {data: r, error: i} = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: `ethereum`,
                    message: t,
                    signature: n
                }, e.options?.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options?.captchaToken
                    }
                } : null),
                xform: X
            });
            if (i)
                throw i;
            if (!r || !r.session || !r.user) {
                let e = new ac;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                })
            }
            return r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r.session)),
            this._returnResult({
                data: Object.assign({}, r),
                error: i
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithSolana(e) {
        let t, n;
        if (`message` in e)
            t = e.message,
            n = e.signature;
        else {
            let {chain: r, wallet: i, statement: a, options: o} = e, s;
            if (!W()) {
                if (typeof i != `object` || !o?.url)
                    throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
                s = i
            } else if (typeof i == `object`)
                s = i;
            else {
                let e = window;
                if (`solana` in e && typeof e.solana == `object` && (`signIn` in e.solana && typeof e.solana.signIn == `function` || `signMessage` in e.solana && typeof e.solana.signMessage == `function`))
                    s = e.solana;
                else
                    throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)
            }
            let c = new URL(o?.url ?? window.location.href);
            if (`signIn` in s && s.signIn) {
                let e = await s.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, o?.signInWithSolana), {
                    version: `1`,
                    domain: c.host,
                    uri: c.href
                }), a ? {
                    statement: a
                } : null)), r;
                if (Array.isArray(e) && e[0] && typeof e[0] == `object`)
                    r = e[0];
                else if (e && typeof e == `object` && `signedMessage` in e && `signature` in e)
                    r = e;
                else
                    throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);
                if (`signedMessage` in r && `signature` in r && (typeof r.signedMessage == `string` || r.signedMessage instanceof Uint8Array) && r.signature instanceof Uint8Array)
                    t = typeof r.signedMessage == `string` ? r.signedMessage : new TextDecoder().decode(r.signedMessage),
                    n = r.signature;
                else
                    throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)
            } else {
                if (!(`signMessage` in s) || typeof s.signMessage != `function` || !(`publicKey` in s) || typeof s != `object` || !s.publicKey || !(`toBase58` in s.publicKey) || typeof s.publicKey.toBase58 != `function`)
                    throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);
                t = [`${c.host} wants you to sign in with your Solana account:`, s.publicKey.toBase58(), ...a ? [``, a, ``] : [``], `Version: 1`, `URI: ${c.href}`, `Issued At: ${o?.signInWithSolana?.issuedAt ?? new Date().toISOString()}`, ...o?.signInWithSolana?.notBefore ? [`Not Before: ${o.signInWithSolana.notBefore}`] : [], ...o?.signInWithSolana?.expirationTime ? [`Expiration Time: ${o.signInWithSolana.expirationTime}`] : [], ...o?.signInWithSolana?.chainId ? [`Chain ID: ${o.signInWithSolana.chainId}`] : [], ...o?.signInWithSolana?.nonce ? [`Nonce: ${o.signInWithSolana.nonce}`] : [], ...o?.signInWithSolana?.requestId ? [`Request ID: ${o.signInWithSolana.requestId}`] : [], ...o?.signInWithSolana?.resources?.length ? [`Resources`, ...o.signInWithSolana.resources.map(e => `- ${e}`)] : []].join(`
`);
                let e = await s.signMessage(new TextEncoder().encode(t), `utf8`);
                if (!e || !(e instanceof Uint8Array))
                    throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);
                n = e
            }
        }
        try {
            let {data: r, error: i} = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: `solana`,
                    message: t,
                    signature: Oc(n)
                }, e.options?.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options?.captchaToken
                    }
                } : null),
                xform: X
            });
            if (i)
                throw i;
            if (!r || !r.session || !r.user) {
                let e = new ac;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                })
            }
            return r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r.session)),
            this._returnResult({
                data: Object.assign({}, r),
                error: i
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async _exchangeCodeForSession(e, t) {
        let n = t?.flowId != null
          , r = n ? Kc(t?.flowId) : W() ? Kc(Nc(window.location.href)[ec]) : null;
        n && !r && this._debug(`#_exchangeCodeForSession()`, `provided flowId is not a valid flow id`, t?.flowId);
        let {verifier: i, flowId: a} = n && !r ? {
            verifier: null,
            flowId: null
        } : await Qc(this.storage, this.storageKey, r)
          , [o,s] = (i ?? ``).split(`/`);
        try {
            if (!o && this.flowType === `pkce`)
                throw new uc;
            let {data: t, error: n} = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: o
                },
                xform: X
            });
            if (await q(this.storage, this.storageKey, a),
            n)
                throw n;
            if (!t || !t.session || !t.user) {
                let e = new ac;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: e
                })
            }
            return t.session && (await this._saveSession(t.session),
            await this._notifyAllSubscribers(s === `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, t.session)),
            this._returnResult({
                data: Object.assign(Object.assign({}, t), {
                    redirectType: s ?? null
                }),
                error: n
            })
        } catch (e) {
            if (await q(this.storage, this.storageKey, a),
            B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithIdToken(e) {
        try {
            let {options: t, provider: n, token: r, access_token: i, nonce: a} = e
              , {data: o, error: s} = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: r,
                    access_token: i,
                    nonce: a,
                    gotrue_meta_security: {
                        captcha_token: t?.captchaToken
                    }
                },
                xform: X
            });
            if (s)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                });
            if (!o || !o.session || !o.user) {
                let e = new ac;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                })
            }
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, o.session)),
            this._returnResult({
                data: o,
                error: s
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithOtp(e) {
        let t = null;
        try {
            if (`email` in e) {
                let {email: n, options: r} = e
                  , i = null
                  , a = null;
                this.flowType === `pkce` && ([i,a,t] = await this._getCodeChallengeAndMethod());
                let {error: o} = await Y(this.fetch, `POST`, `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: n,
                        data: r?.data ?? {},
                        create_user: r?.shouldCreateUser ?? !0,
                        gotrue_meta_security: {
                            captcha_token: r?.captchaToken
                        },
                        code_challenge: i,
                        code_challenge_method: a
                    },
                    redirectTo: this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo, t)
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                })
            }
            if (`phone` in e) {
                let {phone: t, options: n} = e
                  , {data: r, error: i} = await Y(this.fetch, `POST`, `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: t,
                        data: n?.data ?? {},
                        create_user: n?.shouldCreateUser ?? !0,
                        gotrue_meta_security: {
                            captcha_token: n?.captchaToken
                        },
                        channel: n?.channel ?? `sms`
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: r?.message_id
                    },
                    error: i
                })
            }
            throw new oc(`You must provide either an email or phone number.`)
        } catch (e) {
            if (await q(this.storage, this.storageKey, t),
            B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async verifyOtp(e) {
        try {
            let t, n;
            `options` in e && (t = e.options?.redirectTo,
            n = e.options?.captchaToken);
            let {data: r, error: i} = await Y(this.fetch, `POST`, `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: n
                    }
                }),
                redirectTo: t,
                xform: X
            });
            if (i)
                throw i;
            if (!r)
                throw Error(`An error occurred on token verification.`);
            let a = r.session
              , o = r.user;
            return a?.access_token && (await this._saveSession(a),
            await this._notifyAllSubscribers(e.type == `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, a)),
            this._returnResult({
                data: {
                    user: o,
                    session: a
                },
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async signInWithSSO(e) {
        let t = null;
        try {
            let n = null
              , r = null;
            this.flowType === `pkce` && ([n,r,t] = await this._getCodeChallengeAndMethod());
            let i = await Y(this.fetch, `POST`, `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, `providerId` in e ? {
                    provider_id: e.providerId
                } : null), `domain` in e ? {
                    domain: e.domain
                } : null), {
                    redirect_to: this._maybeAppendFlowIdToRedirect(e.options?.redirectTo, t)
                }), e?.options?.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: n,
                    code_challenge_method: r
                }),
                headers: this.headers,
                xform: vl
            });
            return i.data?.url && W() && !e.options?.skipBrowserRedirect && window.location.assign(i.data.url),
            this._returnResult(i)
        } catch (e) {
            if (await q(this.storage, this.storageKey, t),
            B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        this.lock == null ? await this._reauthenticate() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                let {data: {session: t}, error: n} = e;
                if (n)
                    throw n;
                if (!t)
                    throw new U;
                let {error: r} = await Y(this.fetch, `GET`, `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: t.access_token
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async resend(e) {
        let t = null;
        try {
            let n = `${this.url}/resend`;
            if (`email` in e) {
                let {email: r, type: i, options: a} = e
                  , o = null
                  , s = null;
                this.flowType === `pkce` && ([o,s,t] = await this._getCodeChallengeAndMethod());
                let {error: c} = await Y(this.fetch, `POST`, n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: i,
                        gotrue_meta_security: {
                            captcha_token: a?.captchaToken
                        },
                        code_challenge: o,
                        code_challenge_method: s
                    },
                    redirectTo: this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo, t)
                });
                return c && await q(this.storage, this.storageKey, t),
                this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                })
            } else if (`phone` in e) {
                let {phone: t, type: r, options: i} = e
                  , {data: a, error: o} = await Y(this.fetch, `POST`, n, {
                    headers: this.headers,
                    body: {
                        phone: t,
                        type: r,
                        gotrue_meta_security: {
                            captcha_token: i?.captchaToken
                        }
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: a?.message_id
                    },
                    error: o
                })
            }
            throw new oc(`You must provide either an email or phone number and a type`)
        } catch (e) {
            if (await q(this.storage, this.storageKey, t),
            B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async getSession() {
        return await this.initializePromise,
        this.lock == null ? await this._useSession(async e => e) : await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async e => e))
    }
    async _acquireLock(e, t) {
        this._debug(`#_acquireLock`, `begin`, e);
        try {
            if (this.lockAcquired) {
                let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , n = (async () => (await e,
                await t()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await n
                    } catch {}
                }
                )()),
                n
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug(`#_acquireLock`, `lock acquired for storage key`, this.storageKey);
                try {
                    this.lockAcquired = !0;
                    let e = t();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await e
                        } catch {}
                    }
                    )()),
                    await e; this.pendingInLock.length; ) {
                        let e = [...this.pendingInLock];
                        await Promise.all(e),
                        this.pendingInLock.splice(0, e.length)
                    }
                    return await e
                } finally {
                    this._debug(`#_acquireLock`, `lock released for storage key`, this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug(`#_acquireLock`, `end`)
        }
    }
    async _useSession(e) {
        this._debug(`#_useSession`, `begin`);
        try {
            return await e(await this.__loadSession())
        } finally {
            this._debug(`#_useSession`, `end`)
        }
    }
    async __loadSession() {
        this._debug(`#__loadSession()`, `begin`),
        this.lock != null && !this.lockAcquired && this._debug(`#__loadSession()`, `used outside of an acquired lock!`, Error().stack);
        try {
            let e = null
              , t = await G(this.storage, this.storageKey);
            if (this._debug(`#getSession()`, `session from storage`, t),
            t !== null && (this._isValidSession(t) ? e = t : (this._debug(`#getSession()`, `session from storage is not valid`),
            await this._removeSession())),
            !e)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < Ks : !1;
            if (this._debug(`#__loadSession()`, `session has${n ? `` : ` not`} expired`, `expires_at`, e.expires_at),
            !n) {
                if (this.userStorage) {
                    let t = await G(this.userStorage, this.storageKey + `-user`);
                    t?.user ? e.user = t.user : e.user = cl()
                }
                if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
                    let t = {
                        value: this.suppressGetSessionWarning
                    };
                    e.user = ll(e.user, t),
                    t.value && (this.suppressGetSessionWarning = !0)
                }
                return {
                    data: {
                        session: e
                    },
                    error: null
                }
            }
            let {data: r, error: i} = await this._callRefreshToken(e.refresh_token);
            if (i) {
                if (e.expires_at && e.expires_at * 1e3 > Date.now()) {
                    let t = await G(this.storage, this.storageKey);
                    if (t && t.refresh_token === e.refresh_token)
                        return this._returnResult({
                            data: {
                                session: e
                            },
                            error: null
                        })
                }
                return this._returnResult({
                    data: {
                        session: null
                    },
                    error: i
                })
            }
            return this._returnResult({
                data: {
                    session: r
                },
                error: null
            })
        } finally {
            this._debug(`#__loadSession()`, `end`)
        }
    }
    async getUser(e) {
        if (e)
            return await this._getUser(e);
        await this.initializePromise;
        let t;
        return t = this.lock == null ? await this._getUser() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser()),
        t.data.user && (this.suppressGetSessionWarning = !0),
        t
    }
    async _getUser(e) {
        try {
            return e ? await Y(this.fetch, `GET`, `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: _l
            }) : await this._useSession(async e => {
                let {data: t, error: n} = e;
                if (n)
                    throw n;
                return !t.session?.access_token && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new U
                } : await Y(this.fetch, `GET`, `${this.url}/user`, {
                    headers: this.headers,
                    jwt: t.session?.access_token ?? void 0,
                    xform: _l
                })
            }
            )
        } catch (e) {
            if (B(e))
                return ic(e) && await this._removeSession(),
                this._returnResult({
                    data: {
                        user: null
                    },
                    error: e
                });
            throw e
        }
    }
    async updateUser(e, t={}) {
        return await this.initializePromise,
        this.lock == null ? await this._updateUser(e, t) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, t))
    }
    async _updateUser(e, t={}) {
        let n = null;
        try {
            return await this._useSession(async r => {
                let {data: i, error: a} = r;
                if (a)
                    throw a;
                if (!i.session)
                    throw new U;
                let o = i.session
                  , s = null
                  , c = null;
                this.flowType === `pkce` && e.email != null && ([s,c,n] = await this._getCodeChallengeAndMethod());
                let {data: l, error: u} = await Y(this.fetch, `PUT`, `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo, n),
                    body: Object.assign(Object.assign({}, e), {
                        code_challenge: s,
                        code_challenge_method: c
                    }),
                    jwt: o.access_token,
                    xform: _l
                });
                if (u)
                    throw u;
                return o.user = l.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers(`USER_UPDATED`, o),
                this._returnResult({
                    data: {
                        user: o.user
                    },
                    error: null
                })
            }
            )
        } catch (e) {
            if (await q(this.storage, this.storageKey, n),
            B(e))
                return this._returnResult({
                    data: {
                        user: null
                    },
                    error: e
                });
            throw e
        }
    }
    async setSession(e) {
        return await this.initializePromise,
        this.lock == null ? await this._setSession(e) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e))
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token)
                throw new U;
            let t = Date.now() / 1e3
              , n = t
              , r = !0
              , i = null
              , {payload: a} = Rc(e.access_token);
            if (a.exp && (n = a.exp,
            r = n <= t),
            r) {
                let {data: t, error: n} = await this._callRefreshToken(e.refresh_token);
                if (n)
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: n
                    });
                if (!t)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = t
            } else {
                let {data: r, error: a} = await this._getUser(e.access_token);
                if (a)
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: a
                    });
                i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: r.user,
                    token_type: `bearer`,
                    expires_in: n - t,
                    expires_at: n
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers(`SIGNED_IN`, i)
            }
            return this._returnResult({
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: e
                });
            throw e
        }
    }
    async refreshSession(e) {
        return await this.initializePromise,
        this.lock == null ? await this._refreshSession(e) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e))
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async t => {
                if (!e) {
                    let {data: n, error: r} = t;
                    if (r)
                        throw r;
                    e = n.session ?? void 0
                }
                if (!e?.refresh_token)
                    throw new U;
                let {data: n, error: r} = await this._callRefreshToken(e.refresh_token);
                return r ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                }) : n ? this._returnResult({
                    data: {
                        user: n.user,
                        session: n
                    },
                    error: null
                }) : this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                });
            throw e
        }
    }
    async _getSessionFromURL(e, t) {
        try {
            if (!W())
                throw new sc(`No browser detected.`);
            if (e.error || e.error_description || e.error_code)
                throw new sc(e.error_description || `Error in URL with unspecified error_description`,{
                    error: e.error || `unspecified_error`,
                    code: e.error_code || `unspecified_code`
                });
            switch (t) {
            case `implicit`:
                if (this.flowType === `pkce`)
                    throw new lc(`Not a valid PKCE flow url.`);
                break;
            case `pkce`:
                if (this.flowType === `implicit`)
                    throw new sc(`Not a valid implicit grant flow url.`);
                break;
            default:
            }
            if (t === `pkce`) {
                if (this._debug(`#_initialize()`, `begin`, `is PKCE flow`, !0),
                !e.code)
                    throw new lc(`No code detected.`);
                let {data: t, error: n} = await this._exchangeCodeForSession(e.code, {
                    flowId: e[ec]
                });
                if (n)
                    throw n;
                let r = new URL(window.location.href);
                return r.searchParams.delete(`code`),
                r.searchParams.delete(ec),
                window.history.replaceState(window.history.state, ``, r.toString()),
                {
                    data: {
                        session: t.session,
                        redirectType: t.redirectType ?? null
                    },
                    error: null
                }
            }
            let {provider_token: n, provider_refresh_token: r, access_token: i, refresh_token: a, expires_in: o, expires_at: s, token_type: c} = e;
            if (!i || !o || !a || !c)
                throw new sc(`No session defined in URL`);
            let l = Math.round(Date.now() / 1e3)
              , u = parseInt(o)
              , d = l + u;
            s && (d = parseInt(s));
            let f = d - l;
            f * 1e3 <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
            let p = d - u;
            l - p >= 120 ? console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`, p, d, l) : l - p < 0 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`, p, d, l);
            let {data: m, error: h} = await this._getUser(i);
            if (h)
                throw h;
            let g = {
                provider_token: n,
                provider_refresh_token: r,
                access_token: i,
                expires_in: u,
                expires_at: d,
                refresh_token: a,
                token_type: c,
                user: m.user
            };
            return window.location.hash = ``,
            this._debug(`#_getSessionFromURL()`, `clearing window.location.hash`),
            this._returnResult({
                data: {
                    session: g,
                    redirectType: e.type
                },
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: e
                });
            throw e
        }
    }
    _isImplicitGrantCallback(e) {
        return typeof this.detectSessionInUrl == `function` ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error || e.error_description || e.error_code)
    }
    async _isPKCECallback(e) {
        if (!e.code)
            return !1;
        let t = Kc(e[ec]);
        return t && await G(this.storage, Jc(this.storageKey, t)) ? !0 : !!await G(this.storage, `${this.storageKey}-code-verifier`)
    }
    async signOut(e={
        scope: `global`
    }) {
        return await this.initializePromise,
        this.lock == null ? await this._signOut(e) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e))
    }
    async _signOut({scope: e}={
        scope: `global`
    }) {
        return await this._useSession(async t => {
            let n = async () => {
                await this._removeSession()
            }
              , {data: r, error: i} = t;
            if (i && !ic(i))
                return this._returnResult({
                    error: i
                });
            let a = r.session?.access_token;
            if (a) {
                let {error: t} = await this.admin.signOut(a, e);
                if (t && !(rc(t) && (t.status === 404 || t.status === 401 || t.status === 403) || ic(t)))
                    return e !== `others` && await n(),
                    this._returnResult({
                        error: t
                    })
            }
            return e !== `others` && await n(),
            this._returnResult({
                error: null
            })
        }
        )
    }
    onAuthStateChange(e) {
        let t = Ac()
          , n = {
            id: t,
            callback: e,
            unsubscribe: () => {
                this._debug(`#unsubscribe()`, `state change callback with id removed`, t),
                this.stateChangeEmitters.delete(t)
            }
        };
        return this._debug(`#onAuthStateChange()`, `registered callback with id`, t),
        this.stateChangeEmitters.set(t, n),
        (async () => {
            await this.initializePromise,
            this.lock == null ? await this._emitInitialSession(t) : await this._acquireLock(this.lockAcquireTimeout, async () => {
                this._emitInitialSession(t)
            }
            )
        }
        )(),
        {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(e) {
        return await this._useSession(async t => {
            try {
                let {data: {session: n}, error: r} = t;
                if (r)
                    throw r;
                await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`, n),
                this._debug(`INITIAL_SESSION`, `callback id`, e, `session`, n)
            } catch (t) {
                await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`, null),
                this._debug(`INITIAL_SESSION`, `callback id`, e, `error`, t),
                ic(t) || fc(t) || rc(t) && (t.code === `refresh_token_not_found` || t.code === `refresh_token_already_used` || t.code === `session_expired`) ? console.warn(t) : console.error(t)
            }
        }
        )
    }
    async resetPasswordForEmail(e, t={}) {
        let n = null
          , r = null
          , i = null;
        this.flowType === `pkce` && ([n,r,i] = await this._getCodeChallengeAndMethod(!0));
        try {
            return await Y(this.fetch, `POST`, `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: n,
                    code_challenge_method: r,
                    gotrue_meta_security: {
                        captcha_token: t.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: this._maybeAppendFlowIdToRedirect(t.redirectTo, i)
            })
        } catch (e) {
            if (await q(this.storage, this.storageKey, i),
            B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async getUserIdentities() {
        try {
            let {data: e, error: t} = await this.getUser();
            if (t)
                throw t;
            return this._returnResult({
                data: {
                    identities: e.user.identities ?? []
                },
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async linkIdentity(e) {
        return `token` in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e)
    }
    async linkIdentityOAuth(e) {
        let t = null;
        try {
            let {data: n, error: r} = await this._useSession(async n => {
                let {data: r, error: i} = n;
                if (i)
                    throw i;
                let {url: a, flowId: o} = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: e.options?.redirectTo,
                    scopes: e.options?.scopes,
                    queryParams: e.options?.queryParams,
                    skipBrowserRedirect: !0
                });
                return t = o,
                await Y(this.fetch, `GET`, a, {
                    headers: this.headers,
                    jwt: r.session?.access_token ?? void 0
                })
            }
            );
            if (r)
                throw r;
            return W() && !e.options?.skipBrowserRedirect && window.location.assign(n?.url),
            this._returnResult({
                data: {
                    provider: e.provider,
                    url: n?.url,
                    flowId: t
                },
                error: null
            })
        } catch (n) {
            if (B(n))
                return this._returnResult({
                    data: {
                        provider: e.provider,
                        url: null,
                        flowId: t
                    },
                    error: n
                });
            throw n
        }
    }
    async linkIdentityIdToken(e) {
        return await this._useSession(async t => {
            try {
                let {error: n, data: {session: r}} = t;
                if (n)
                    throw n;
                let {options: i, provider: a, token: o, access_token: s, nonce: c} = e
                  , {data: l, error: u} = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    jwt: r?.access_token ?? void 0,
                    body: {
                        provider: a,
                        id_token: o,
                        access_token: s,
                        nonce: c,
                        link_identity: !0,
                        gotrue_meta_security: {
                            captcha_token: i?.captchaToken
                        }
                    },
                    xform: X
                });
                return u ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                }) : !l || !l.session || !l.user ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: new ac
                }) : (l.session && (await this._saveSession(l.session),
                await this._notifyAllSubscribers(`USER_UPDATED`, l.session)),
                this._returnResult({
                    data: l,
                    error: u
                }))
            } catch (e) {
                if (await q(this.storage, this.storageKey, null),
                B(e))
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: e
                    });
                throw e
            }
        }
        )
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async t => {
                let {data: n, error: r} = t;
                if (r)
                    throw r;
                return await Y(this.fetch, `DELETE`, `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: n.session?.access_token ?? void 0
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _refreshAccessToken(e) {
        let t = `#_refreshAccessToken()`;
        this._debug(t, `begin`);
        try {
            let n = Date.now();
            return await Bc(async n => (n > 0 && await zc(200 * 2 ** (n - 1)),
            this._debug(t, `refreshing attempt`, n),
            await Y(this.fetch, `POST`, `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: X
            })), (e, t) => {
                let r = 200 * 2 ** e;
                return t && fc(t) && Date.now() + r - n < 3e4
            }
            )
        } catch (e) {
            if (this._debug(t, `error`, e),
            B(e))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: e
                });
            throw e
        } finally {
            this._debug(t, `end`)
        }
    }
    _isValidSession(e) {
        return typeof e == `object` && !!e && `access_token` in e && `refresh_token` in e && `expires_at` in e
    }
    async _handleProviderSignIn(e, t) {
        let {url: n, flowId: r} = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams
        });
        return this._debug(`#_handleProviderSignIn()`, `provider`, e, `options`, t, `url`, n),
        W() && !t.skipBrowserRedirect && window.location.assign(n),
        {
            data: {
                provider: e,
                url: n,
                flowId: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        let e = `#_recoverAndRefresh()`;
        this._debug(e, `begin`);
        try {
            let t = await G(this.storage, this.storageKey);
            if (t && this.userStorage) {
                let e = await G(this.userStorage, this.storageKey + `-user`);
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !e && (e = {
                    user: t.user
                },
                await Ic(this.userStorage, this.storageKey + `-user`, e)),
                t.user = e?.user ?? cl()
            } else if (t && !t.user && !t.user) {
                let e = await G(this.storage, this.storageKey + `-user`);
                e && e?.user ? (t.user = e.user,
                await K(this.storage, this.storageKey + `-user`),
                await Ic(this.storage, this.storageKey, t)) : t.user = cl()
            }
            if (this._debug(e, `session from storage`, t),
            !this._isValidSession(t)) {
                this._debug(e, `session is not valid`),
                t !== null && await this._removeSession();
                return
            }
            let n = (t.expires_at ?? 1 / 0) * 1e3 - Date.now() < Ks;
            if (this._debug(e, `session has${n ? `` : ` not`} expired with margin of ${Ks}s`),
            n) {
                if (this.autoRefreshToken && t.refresh_token) {
                    let {error: n} = await this._callRefreshToken(t.refresh_token);
                    n && (mc(n) ? this._debug(e, `refresh discarded by commit guard`, n) : this._debug(e, `refresh failed`, n))
                }
            } else if (t.user && t.user.__isUserNotAvailableProxy === !0)
                try {
                    let {data: n, error: r} = await this._getUser(t.access_token);
                    !r && n?.user ? (t.user = n.user,
                    await this._saveSession(t),
                    await this._notifyAllSubscribers(`SIGNED_IN`, t)) : this._debug(e, `could not get user data, skipping SIGNED_IN notification`)
                } catch (t) {
                    console.error(`Error getting user data:`, t),
                    this._debug(e, `error getting user data, skipping SIGNED_IN notification`, t)
                }
            else
                await this._notifyAllSubscribers(`SIGNED_IN`, t)
        } catch (t) {
            this._debug(e, `error`, t),
            fc(t) ? console.warn(t) : console.error(t);
            return
        } finally {
            this._debug(e, `end`)
        }
    }
    async _callRefreshToken(e) {
        var t, n;
        if (!e)
            throw new U;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        if (this.lastRefreshFailure && this.lastRefreshFailure.refreshToken === e && Date.now() < this.lastRefreshFailure.expiresAt)
            return this._debug(`#_callRefreshToken()`, `returning cached failure (cooldown active)`),
            this.lastRefreshFailure.result;
        let r = `#_callRefreshToken()`;
        this._debug(r, `begin`);
        try {
            this.refreshingDeferred = new Lc;
            let t = await G(this.storage, this.storageKey)
              , {data: n, error: i} = await this._refreshAccessToken(e);
            if (i)
                throw i;
            if (!n.session)
                throw new U;
            let a = await G(this.storage, this.storageKey);
            if (t !== null && (a === null || a.refresh_token !== t.refresh_token)) {
                this._debug(r, `commit guard: storage changed since refresh started, discarding rotated tokens`, {
                    startedWith: `present`,
                    nowHolds: a ? `replaced` : `cleared`
                });
                let e = {
                    data: null,
                    error: new pc
                };
                return this.refreshingDeferred.resolve(e),
                e
            }
            let o = this._sessionRemovalEpoch;
            if (await this._saveSession(n.session),
            this._sessionRemovalEpoch !== o) {
                this._debug(r, `commit guard (post-save): _removeSession ran during _saveSession, undoing write`),
                await K(this.storage, this.storageKey),
                this.userStorage && await K(this.userStorage, this.storageKey + `-user`);
                let e = {
                    data: null,
                    error: new pc
                };
                return this.refreshingDeferred.resolve(e),
                e
            }
            await this._notifyAllSubscribers(`TOKEN_REFRESHED`, n.session);
            let s = {
                data: n.session,
                error: null
            };
            return this.lastRefreshFailure = null,
            this.refreshingDeferred.resolve(s),
            s
        } catch (i) {
            if (this._debug(r, `error`, i),
            B(i)) {
                let n = {
                    data: null,
                    error: i
                };
                if (!fc(i)) {
                    let e = await G(this.storage, this.storageKey);
                    e?.expires_at && e.expires_at * 1e3 > Date.now() ? this._debug(r, `proactive refresh failed, access token still valid — preserving session`) : await this._removeSession()
                }
                return this.lastRefreshFailure = {
                    refreshToken: e,
                    result: n,
                    expiresAt: Date.now() + qs
                },
                (t = this.refreshingDeferred) == null || t.resolve(n),
                n
            }
            throw (n = this.refreshingDeferred) == null || n.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(r, `end`)
        }
    }
    async _notifyAllSubscribers(e, t, n=!0) {
        if (this._pendingInitNotifications !== null && n) {
            this._pendingInitNotifications.push({
                event: e,
                session: t,
                broadcast: n
            });
            return
        }
        let r = `#_notifyAllSubscribers(${e})`;
        this._debug(r, `begin`, t, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: e,
                session: t
            });
            let r = []
              , i = Array.from(this.stateChangeEmitters.values()).map(async n => {
                try {
                    await n.callback(e, t)
                } catch (e) {
                    r.push(e)
                }
            }
            );
            if (await Promise.all(i),
            r.length > 0) {
                for (let e = 0; e < r.length; e += 1)
                    console.error(r[e]);
                throw r[0]
            }
        } finally {
            this._debug(r, `end`)
        }
    }
    async _saveSession(e) {
        this._debug(`#_saveSession()`, e),
        this.suppressGetSessionWarning = !0;
        let t = Object.assign({}, e)
          , n = t.user && t.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !n && t.user && await Ic(this.userStorage, this.storageKey + `-user`, {
                user: t.user
            });
            let e = Object.assign({}, t);
            delete e.user;
            let r = ul(e);
            await Ic(this.storage, this.storageKey, r)
        } else {
            let e = ul(t);
            await Ic(this.storage, this.storageKey, e)
        }
    }
    async _removeSession() {
        this._sessionRemovalEpoch += 1,
        this._debug(`#_removeSession()`),
        this.lastRefreshFailure = null,
        this.suppressGetSessionWarning = !1,
        await K(this.storage, this.storageKey),
        await $c(this.storage, this.storageKey),
        await K(this.storage, this.storageKey + `-user`),
        this.userStorage && await K(this.userStorage, this.storageKey + `-user`),
        await this._notifyAllSubscribers(`SIGNED_OUT`, null)
    }
    _removeVisibilityChangedCallback() {
        this._debug(`#_removeVisibilityChangedCallback()`);
        let e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && W() && window != null && window.removeEventListener && window.removeEventListener(`visibilitychange`, e)
        } catch (e) {
            console.error(`removing visibilitychange callback failed`, e)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug(`#_startAutoRefresh()`);
        let e = setInterval( () => this._autoRefreshTokenTick(), Gs);
        this.autoRefreshTicker = e,
        e && typeof e == `object` && typeof e.unref == `function` ? e.unref() : typeof Deno < `u` && typeof Deno.unrefTimer == `function` && Deno.unrefTimer(e);
        let t = setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0);
        this.autoRefreshTickTimeout = t,
        t && typeof t == `object` && typeof t.unref == `function` ? t.unref() : typeof Deno < `u` && typeof Deno.unrefTimer == `function` && Deno.unrefTimer(t)
    }
    async _stopAutoRefresh() {
        this._debug(`#_stopAutoRefresh()`);
        let e = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        e && clearInterval(e);
        let t = this.autoRefreshTickTimeout;
        this.autoRefreshTickTimeout = null,
        t && clearTimeout(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async dispose() {
        var e;
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh(),
        (e = this.broadcastChannel) == null || e.close(),
        this.broadcastChannel = null,
        this.stateChangeEmitters.clear()
    }
    async _autoRefreshTokenTick() {
        if (this._debug(`#_autoRefreshTokenTick()`, `begin`),
        this.lock != null) {
            try {
                await this._acquireLock(0, async () => {
                    try {
                        let e = Date.now();
                        try {
                            return await this._useSession(async t => {
                                let {data: {session: n}} = t;
                                if (!n || !n.refresh_token || !n.expires_at) {
                                    this._debug(`#_autoRefreshTokenTick()`, `no session`);
                                    return
                                }
                                let r = Math.floor((n.expires_at * 1e3 - e) / Gs);
                                this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r} ticks, a tick lasts ${Gs}ms, refresh threshold is 3 ticks`),
                                r <= 3 && await this._callRefreshToken(n.refresh_token)
                            }
                            )
                        } catch (e) {
                            console.error(`Auto refresh tick failed with error. This is likely a transient error.`, e)
                        }
                    } finally {
                        this._debug(`#_autoRefreshTokenTick()`, `end`)
                    }
                }
                )
            } catch (e) {
                if (e instanceof Tl)
                    this._debug(`auto refresh token tick lock not available`);
                else
                    throw e
            }
            return
        }
        if (this.refreshingDeferred !== null) {
            this._debug(`#_autoRefreshTokenTick()`, `refresh already in flight, skipping`);
            return
        }
        try {
            let e = Date.now();
            try {
                await this._useSession(async t => {
                    let {data: {session: n}} = t;
                    if (!n || !n.refresh_token || !n.expires_at) {
                        this._debug(`#_autoRefreshTokenTick()`, `no session`);
                        return
                    }
                    let r = Math.floor((n.expires_at * 1e3 - e) / Gs);
                    this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r} ticks, a tick lasts ${Gs}ms, refresh threshold is 3 ticks`),
                    r <= 3 && await this._callRefreshToken(n.refresh_token)
                }
                )
            } catch (e) {
                console.error(`Auto refresh tick failed with error. This is likely a transient error.`, e)
            }
        } finally {
            this._debug(`#_autoRefreshTokenTick()`, `end`)
        }
    }
    async _handleVisibilityChange() {
        if (this._debug(`#_handleVisibilityChange()`),
        !W() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => {
                try {
                    await this._onVisibilityChanged(!1)
                } catch (e) {
                    this._debug(`#visibilityChangedCallback`, `error`, e)
                }
            }
            ,
            window == null || window.addEventListener(`visibilitychange`, this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error(`_handleVisibilityChange`, e)
        }
    }
    async _onVisibilityChanged(e) {
        let t = `#_onVisibilityChanged(${e})`;
        if (this._debug(t, `visibilityState`, document.visibilityState),
        document.visibilityState === `visible`) {
            if (this.autoRefreshToken && this._startAutoRefresh(),
            !e)
                if (await this.initializePromise,
                this.lock != null)
                    await this._acquireLock(this.lockAcquireTimeout, async () => {
                        if (document.visibilityState !== `visible`) {
                            this._debug(t, `acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);
                            return
                        }
                        await this._recoverAndRefresh()
                    }
                    );
                else {
                    if (document.visibilityState !== `visible`) {
                        this._debug(t, `visibilityState is no longer visible, skipping recovery`);
                        return
                    }
                    await this._recoverAndRefresh()
                }
        } else
            document.visibilityState === `hidden` && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(e, t, n) {
        let r = n?.redirectTo
          , i = null
          , a = null
          , o = null;
        this.flowType === `pkce` && ([i,a,o] = await this._getCodeChallengeAndMethod(),
        r = this._maybeAppendFlowIdToRedirect(r, o));
        let s = [`provider=${encodeURIComponent(t)}`];
        if (r && s.push(`redirect_to=${encodeURIComponent(r)}`),
        n?.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
        i != null && a != null) {
            let e = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(a)}`
            });
            s.push(e.toString())
        }
        if (n?.queryParams) {
            let e = new URLSearchParams(n.queryParams);
            s.push(e.toString())
        }
        return n?.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
        {
            url: `${e}?${s.join(`&`)}`,
            flowId: o
        }
    }
    _maybeAppendFlowIdToRedirect(e, t) {
        return !e || !t || !this.experimental.appendPkceFlowIdToRedirects ? e ?? void 0 : el(e, t)
    }
    async _getCodeChallengeAndMethod(e=!1) {
        return tl(this.storage, this.storageKey, e, e => this._debug(`#_getCodeChallengeAndMethod()`, `evicted oldest pending PKCE verifier slot`, e))
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async t => {
                let {data: n, error: r} = t;
                return r ? this._returnResult({
                    data: null,
                    error: r
                }) : await Y(this.fetch, `DELETE`, `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: n?.session?.access_token
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async t => {
                let {data: n, error: r} = t;
                if (r)
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                let i = Object.assign({
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType
                }, e.factorType === `phone` ? {
                    phone: e.phone
                } : e.factorType === `totp` ? {
                    issuer: e.issuer
                } : {})
                  , {data: a, error: o} = await Y(this.fetch, `POST`, `${this.url}/factors`, {
                    body: i,
                    headers: this.headers,
                    jwt: n?.session?.access_token
                });
                return o ? this._returnResult({
                    data: null,
                    error: o
                }) : (e.factorType === `totp` && a.type === `totp` && a?.totp?.qr_code && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                this._returnResult({
                    data: a,
                    error: null
                }))
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _verify(e) {
        let t = async () => {
            try {
                return await this._useSession(async t => {
                    let {data: n, error: r} = t;
                    if (r)
                        return this._returnResult({
                            data: null,
                            error: r
                        });
                    let i = Object.assign({
                        challenge_id: e.challengeId
                    }, `webauthn` in e ? {
                        webauthn: Object.assign(Object.assign({}, e.webauthn), {
                            credential_response: e.webauthn.type === `create` ? Ll(e.webauthn.credential_response) : Rl(e.webauthn.credential_response)
                        })
                    } : {
                        code: e.code
                    })
                      , {data: a, error: o} = await Y(this.fetch, `POST`, `${this.url}/factors/${e.factorId}/verify`, {
                        body: i,
                        headers: this.headers,
                        jwt: n?.session?.access_token
                    });
                    return o ? this._returnResult({
                        data: null,
                        error: o
                    }) : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                    }, a)),
                    await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, a),
                    this._returnResult({
                        data: a,
                        error: o
                    }))
                }
                )
            } catch (e) {
                if (B(e))
                    return this._returnResult({
                        data: null,
                        error: e
                    });
                throw e
            }
        }
        ;
        return this.lock == null ? t() : this._acquireLock(this.lockAcquireTimeout, t)
    }
    async _challenge(e) {
        let t = async () => {
            try {
                return await this._useSession(async t => {
                    let {data: n, error: r} = t;
                    if (r)
                        return this._returnResult({
                            data: null,
                            error: r
                        });
                    let i = await Y(this.fetch, `POST`, `${this.url}/factors/${e.factorId}/challenge`, {
                        body: e,
                        headers: this.headers,
                        jwt: n?.session?.access_token
                    });
                    if (i.error)
                        return i;
                    let {data: a} = i;
                    if (a.type !== `webauthn`)
                        return {
                            data: a,
                            error: null
                        };
                    switch (a.webauthn.type) {
                    case `create`:
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: Fl(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        };
                    case `request`:
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: Il(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        }
                    }
                }
                )
            } catch (e) {
                if (B(e))
                    return this._returnResult({
                        data: null,
                        error: e
                    });
                throw e
            }
        }
        ;
        return this.lock == null ? t() : this._acquireLock(this.lockAcquireTimeout, t)
    }
    async _challengeAndVerify(e) {
        let {data: t, error: n} = await this._challenge({
            factorId: e.factorId
        });
        return n ? this._returnResult({
            data: null,
            error: n
        }) : await this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code
        })
    }
    async _listFactors() {
        let {data: {user: e}, error: t} = await this.getUser();
        if (t)
            return {
                data: null,
                error: t
            };
        let n = {
            all: [],
            phone: [],
            totp: [],
            webauthn: []
        };
        for (let t of e?.factors ?? [])
            n.all.push(t),
            t.status === `verified` && n[t.factor_type].push(t);
        return {
            data: n,
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel(e) {
        if (e)
            try {
                let {payload: t} = Rc(e)
                  , n = null;
                t.aal && (n = t.aal);
                let r = n
                  , {data: {user: i}, error: a} = await this.getUser(e);
                if (a)
                    return this._returnResult({
                        data: null,
                        error: a
                    });
                ((i?.factors)?.filter(e => e.status === `verified`) ?? []).length > 0 && (r = `aal2`);
                let o = t.amr || [];
                return {
                    data: {
                        currentLevel: n,
                        nextLevel: r,
                        currentAuthenticationMethods: o
                    },
                    error: null
                }
            } catch (e) {
                if (B(e))
                    return this._returnResult({
                        data: null,
                        error: e
                    });
                throw e
            }
        let {data: {session: t}, error: n} = await this.getSession();
        if (n)
            return this._returnResult({
                data: null,
                error: n
            });
        if (!t)
            return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
        let {payload: r} = Rc(t.access_token)
          , i = null;
        r.aal && (i = r.aal);
        let a = i;
        (t.user.factors?.filter(e => e.status === `verified`) ?? []).length > 0 && (a = `aal2`);
        let o = r.amr || [];
        return {
            data: {
                currentLevel: i,
                nextLevel: a,
                currentAuthenticationMethods: o
            },
            error: null
        }
    }
    async _getAuthorizationDetails(e) {
        try {
            return await this._useSession(async t => {
                let {data: {session: n}, error: r} = t;
                return r ? this._returnResult({
                    data: null,
                    error: r
                }) : n ? await Y(this.fetch, `GET`, `${this.url}/oauth/authorizations/${e}`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new U
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _approveAuthorization(e, t) {
        try {
            return await this._useSession(async n => {
                let {data: {session: r}, error: i} = n;
                if (i)
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                if (!r)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let a = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e}/consent`, {
                    headers: this.headers,
                    jwt: r.access_token,
                    body: {
                        action: `approve`
                    },
                    xform: e => ({
                        data: e,
                        error: null
                    })
                });
                return a.data && a.data.redirect_url && W() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url),
                a
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _denyAuthorization(e, t) {
        try {
            return await this._useSession(async n => {
                let {data: {session: r}, error: i} = n;
                if (i)
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                if (!r)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let a = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e}/consent`, {
                    headers: this.headers,
                    jwt: r.access_token,
                    body: {
                        action: `deny`
                    },
                    xform: e => ({
                        data: e,
                        error: null
                    })
                });
                return a.data && a.data.redirect_url && W() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url),
                a
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _listOAuthGrants() {
        try {
            return await this._useSession(async e => {
                let {data: {session: t}, error: n} = e;
                return n ? this._returnResult({
                    data: null,
                    error: n
                }) : t ? await Y(this.fetch, `GET`, `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: t.access_token,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new U
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _revokeOAuthGrant(e) {
        try {
            return await this._useSession(async t => {
                let {data: {session: n}, error: r} = t;
                return r ? this._returnResult({
                    data: null,
                    error: r
                }) : n ? (await Y(this.fetch, `DELETE`, `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    query: {
                        client_id: e.clientId
                    },
                    noResolveJson: !0
                }),
                {
                    data: {},
                    error: null
                }) : this._returnResult({
                    data: null,
                    error: new U
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async fetchJwk(e, t={
        keys: []
    }) {
        let n = t.keys.find(t => t.kid === e);
        if (n)
            return n;
        let r = Date.now();
        if (n = this.jwks.keys.find(t => t.kid === e),
        n && this.jwks_cached_at + 6e5 > r)
            return n;
        let {data: i, error: a} = await Y(this.fetch, `GET`, `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (a)
            throw a;
        return !i.keys || i.keys.length === 0 || (this.jwks = i,
        this.jwks_cached_at = r,
        n = i.keys.find(t => t.kid === e),
        !n) ? null : n
    }
    async getClaims(e, t={}) {
        try {
            let n = e;
            if (!n) {
                let {data: e, error: t} = await this.getSession();
                if (t || !e.session)
                    return this._returnResult({
                        data: null,
                        error: t
                    });
                n = e.session.access_token
            }
            let {header: r, payload: i, signature: a, raw: {header: o, payload: s}} = Rc(n);
            if (!t?.allowExpired)
                try {
                    il(i.exp)
                } catch (e) {
                    throw new gc(e instanceof Error ? e.message : `JWT validation failed`)
                }
            let c = !r.alg || r.alg.startsWith(`HS`) || !r.kid || !(`crypto` in globalThis && `subtle` in globalThis.crypto) ? null : await this.fetchJwk(r.kid, t?.keys ? {
                keys: t.keys
            } : t?.jwks);
            if (!c) {
                let {error: e} = await this.getUser(n);
                if (e)
                    throw e;
                return {
                    data: {
                        claims: i,
                        header: r,
                        signature: a
                    },
                    error: null
                }
            }
            let l = al(r.alg)
              , u = await crypto.subtle.importKey(`jwk`, c, l, !0, [`verify`]);
            if (!await crypto.subtle.verify(l, u, a, Dc(`${o}.${s}`)))
                throw new gc(`Invalid JWT signature`);
            return {
                data: {
                    claims: i,
                    header: r,
                    signature: a
                },
                error: null
            }
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async signInWithPasskey(e) {
        J(this.experimental);
        try {
            if (!Bl())
                return this._returnResult({
                    data: null,
                    error: new V(`Browser does not support WebAuthn`,null)
                });
            let {data: t, error: n} = await this._startPasskeyAuthentication({
                options: {
                    captchaToken: e?.options?.captchaToken
                }
            });
            if (n || !t)
                return this._returnResult({
                    data: null,
                    error: n
                });
            let {data: r, error: i} = await Hl({
                publicKey: Il(t.options),
                signal: e?.options?.signal ?? Pl.createNewAbortSignal()
            });
            if (i || !r)
                return this._returnResult({
                    data: null,
                    error: i ?? new V(`WebAuthn ceremony failed`,null)
                });
            let a = Rl(r);
            return this._verifyPasskeyAuthentication({
                challengeId: t.challenge_id,
                credential: a
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async registerPasskey(e) {
        J(this.experimental);
        try {
            if (!Bl())
                return this._returnResult({
                    data: null,
                    error: new V(`Browser does not support WebAuthn`,null)
                });
            let {data: t, error: n} = await this._startPasskeyRegistration();
            if (n || !t)
                return this._returnResult({
                    data: null,
                    error: n
                });
            let {data: r, error: i} = await Vl({
                publicKey: Fl(t.options),
                signal: e?.options?.signal ?? Pl.createNewAbortSignal()
            });
            if (i || !r)
                return this._returnResult({
                    data: null,
                    error: i ?? new V(`WebAuthn ceremony failed`,null)
                });
            let a = Ll(r);
            return this._verifyPasskeyRegistration({
                challengeId: t.challenge_id,
                credential: a
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _startPasskeyRegistration() {
        J(this.experimental);
        try {
            return await this._useSession(async e => {
                let {data: {session: t}, error: n} = e;
                if (n)
                    return this._returnResult({
                        data: null,
                        error: n
                    });
                if (!t)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let {data: r, error: i} = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/options`, {
                    headers: this.headers,
                    jwt: t.access_token,
                    body: {}
                });
                return i ? this._returnResult({
                    data: null,
                    error: i
                }) : this._returnResult({
                    data: r,
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _verifyPasskeyRegistration(e) {
        J(this.experimental);
        try {
            return await this._useSession(async t => {
                let {data: {session: n}, error: r} = t;
                if (r)
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                if (!n)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let {data: i, error: a} = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/verify`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    body: {
                        challenge_id: e.challengeId,
                        credential: e.credential
                    }
                });
                return a ? this._returnResult({
                    data: null,
                    error: a
                }) : this._returnResult({
                    data: i,
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _startPasskeyAuthentication(e) {
        J(this.experimental);
        try {
            let {data: t, error: n} = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/options`, {
                headers: this.headers,
                body: {
                    gotrue_meta_security: {
                        captcha_token: e?.options?.captchaToken
                    }
                }
            });
            return n ? this._returnResult({
                data: null,
                error: n
            }) : this._returnResult({
                data: t,
                error: null
            })
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _verifyPasskeyAuthentication(e) {
        J(this.experimental);
        try {
            let {data: t, error: n} = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/verify`, {
                headers: this.headers,
                body: {
                    challenge_id: e.challengeId,
                    credential: e.credential
                },
                xform: X
            });
            return n ? this._returnResult({
                data: null,
                error: n
            }) : (t.session && (await this._saveSession(t.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, t.session)),
            this._returnResult({
                data: t,
                error: null
            }))
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _listPasskeys() {
        J(this.experimental);
        try {
            return await this._useSession(async e => {
                let {data: {session: t}, error: n} = e;
                if (n)
                    return this._returnResult({
                        data: null,
                        error: n
                    });
                if (!t)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let {data: r, error: i} = await Y(this.fetch, `GET`, `${this.url}/passkeys`, {
                    headers: this.headers,
                    jwt: t.access_token,
                    xform: e => ({
                        data: e,
                        error: null
                    })
                });
                return i ? this._returnResult({
                    data: null,
                    error: i
                }) : this._returnResult({
                    data: r,
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _updatePasskey(e) {
        J(this.experimental);
        try {
            return await this._useSession(async t => {
                let {data: {session: n}, error: r} = t;
                if (r)
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                if (!n)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let {data: i, error: a} = await Y(this.fetch, `PATCH`, `${this.url}/passkeys/${e.passkeyId}`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    body: {
                        friendly_name: e.friendlyName
                    }
                });
                return a ? this._returnResult({
                    data: null,
                    error: a
                }) : this._returnResult({
                    data: i,
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
    async _deletePasskey(e) {
        J(this.experimental);
        try {
            return await this._useSession(async t => {
                let {data: {session: n}, error: r} = t;
                if (r)
                    return this._returnResult({
                        data: null,
                        error: r
                    });
                if (!n)
                    return this._returnResult({
                        data: null,
                        error: new U
                    });
                let {error: i} = await Y(this.fetch, `DELETE`, `${this.url}/passkeys/${e.passkeyId}`, {
                    headers: this.headers,
                    jwt: n.access_token,
                    noResolveJson: !0
                });
                return i ? this._returnResult({
                    data: null,
                    error: i
                }) : this._returnResult({
                    data: null,
                    error: null
                })
            }
            )
        } catch (e) {
            if (B(e))
                return this._returnResult({
                    data: null,
                    error: e
                });
            throw e
        }
    }
}
;
Zl.nextInstanceID = {};
var Ql = Zl, $l = `modulepreload`, eu = function(e) {
    return `/` + e
}, tu = {}, nu = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        r = o(t.map(t => {
            if (t = eu(t, n),
            t in tu)
                return;
            tu[t] = !0;
            let r = t.endsWith(`.css`)
              , i = r ? `[rel="stylesheet"]` : ``;
            if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                    let i = e[n];
                    if (i.href === t && (!r || i.rel === `stylesheet`))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${i}`))
                return;
            let o = document.createElement(`link`);
            if (o.rel = r ? `stylesheet` : $l,
            r || (o.as = `script`),
            o.crossOrigin = ``,
            o.href = t,
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
                return new Promise( (e, n) => {
                    o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}, ru = `2.111.0`, iu = ``, au;
if (typeof Deno < `u`)
    iu = `deno`,
    au = Deno.version?.deno;
else if (typeof document < `u`)
    iu = `web`;
else if (typeof navigator < `u` && navigator.product === `ReactNative`)
    iu = `react-native`;
else {
    var ou;
    iu = `node`;
    let e = globalThis.process;
    au = e == null || (ou = e.version) == null ? void 0 : ou.replace(/^v/, ``)
}
var su = [`runtime=${iu}`];
au && su.push(`runtime-version=${au}`);
var cu = {
    headers: {
        "X-Client-Info": `supabase-js/${ru}; ${su.join(`; `)}`
    }
}
  , lu = {
    schema: `public`
}
  , uu = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: `implicit`
}
  , du = {}
  , fu = {
    enabled: !1,
    respectSamplingDecision: !0
};
function pu(e, t, n, r) {
    function i(e) {
        return e instanceof n ? e : new n(function(t) {
            t(e)
        }
        )
    }
    return new (n ||= Promise)(function(n, a) {
        function o(e) {
            try {
                c(r.next(e))
            } catch (e) {
                a(e)
            }
        }
        function s(e) {
            try {
                c(r.throw(e))
            } catch (e) {
                a(e)
            }
        }
        function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
var mu = null
  , hu = `@opentelemetry/api`;
function gu() {
    return mu === null && (mu = nu( () => import(hu), []).catch( () => null)),
    mu
}
function _u() {
    return pu(this, void 0, void 0, function*() {
        try {
            let e = yield gu();
            if (!e || !e.propagation || !e.context)
                return null;
            let t = {};
            e.propagation.inject(e.context.active(), t);
            let n = t.traceparent;
            return n ? {
                traceparent: n,
                tracestate: t.tracestate,
                baggage: t.baggage
            } : null
        } catch {
            return null
        }
    })
}
function vu(e) {
    if (!e || typeof e != `string`)
        return null;
    let t = e.split(`-`);
    if (t.length !== 4)
        return null;
    let[n,r,i,a] = t;
    if (n.length !== 2 || r.length !== 32 || i.length !== 16 || a.length !== 2)
        return null;
    let o = /^[0-9a-f]+$/i;
    return !o.test(n) || !o.test(r) || !o.test(i) || !o.test(a) || r === `00000000000000000000000000000000` || i === `0000000000000000` ? null : {
        version: n,
        traceId: r,
        parentId: i,
        traceFlags: a,
        isSampled: (parseInt(a, 16) & 1) == 1
    }
}
function yu(e, t) {
    if (!e || !t || t.length === 0)
        return !1;
    let n;
    if (e instanceof URL)
        n = e;
    else
        try {
            n = new URL(e)
        } catch {
            return !1
        }
    for (let e of t)
        try {
            if (typeof e == `string`) {
                if (bu(n.hostname, e))
                    return !0
            } else if (e instanceof RegExp) {
                if (e.test(n.hostname))
                    return !0
            } else if (typeof e == `function` && e(n))
                return !0
        } catch {
            continue
        }
    return !1
}
function bu(e, t) {
    if (t === e)
        return !0;
    if (t.startsWith(`*.`)) {
        let n = t.slice(2);
        if (e.endsWith(n) && (e === n || e.endsWith(`.` + n)))
            return !0
    }
    return !1
}
function xu(e) {
    let t = [];
    try {
        let n = new URL(e);
        t.push(n.hostname)
    } catch {}
    return t.push(`*.supabase.co`, `*.supabase.in`),
    t.push(`localhost`, `127.0.0.1`, `[::1]`),
    t
}
function Su(e) {
    "@babel/helpers - typeof";
    return Su = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }
    ,
    Su(e)
}
function Cu(e, t) {
    if (Su(e) != `object` || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (Su(r) != `object`)
            return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}
function wu(e) {
    var t = Cu(e, `string`);
    return Su(t) == `symbol` ? t : t + ``
}
function Tu(e, t, n) {
    return (t = wu(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? Eu(Object(n), !0).forEach(function(t) {
            Tu(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eu(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
var Du = e => e ? (...t) => e(...t) : (...e) => fetch(...e)
  , Ou = () => Headers
  , ku = e => e.startsWith(`sb_publishable_`) || e.startsWith(`sb_secret_`)
  , Au = `sb_temp_`
  , ju = new Set
  , Mu = e => {
    if (!e.startsWith(`sb_`) || ku(e) || e.startsWith(Au))
        return;
    let t = e.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? `unknown`;
    ju.has(t) || (ju.add(t),
    console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`))
}
  , Nu = (e, t, n, r, i, a) => {
    let o = Du(r)
      , s = Ou()
      , c = i?.enabled === !0
      , l = i?.respectSamplingDecision !== !1
      , u = c ? xu(t) : null
      , d = !(a?.omitApiKeyAsBearer && ku(e));
    return async (t, r) => {
        let i = await n()
          , a = new s(r?.headers);
        if (a.has(`apikey`) || a.set(`apikey`, e),
        !a.has(`Authorization`)) {
            let t = i ?? (d ? e : null);
            t && a.set(`Authorization`, `Bearer ${t}`)
        }
        if (u) {
            let e = await Pu(t, u, l);
            e && (e.traceparent && !a.has(`traceparent`) && a.set(`traceparent`, e.traceparent),
            e.tracestate && !a.has(`tracestate`) && a.set(`tracestate`, e.tracestate),
            e.baggage && !a.has(`baggage`) && a.set(`baggage`, e.baggage))
        }
        return o(t, Q(Q({}, r), {}, {
            headers: a
        }))
    }
}
;
async function Pu(e, t, n) {
    if (!yu(typeof e == `string` || e instanceof URL ? e : e.url, t))
        return null;
    let r = await _u();
    if (!r || !r.traceparent)
        return null;
    if (n) {
        let e = vu(r.traceparent);
        if (e && !e.isSampled)
            return null
    }
    return r
}
function Fu(e) {
    return typeof e == `boolean` ? {
        enabled: e
    } : e
}
function Iu(e) {
    return e.endsWith(`/`) ? e : e + `/`
}
function Lu(e, t) {
    let {db: n, auth: r, realtime: i, global: a} = e
      , {db: o, auth: s, realtime: c, global: l} = t
      , u = Fu(e.tracePropagation)
      , d = Fu(t.tracePropagation)
      , f = {
        db: Q(Q({}, o), n),
        auth: Q(Q({}, s), r),
        realtime: Q(Q({}, c), i),
        storage: {},
        global: Q(Q(Q({}, l), a), {}, {
            headers: Q(Q({}, l?.headers ?? {}), a?.headers ?? {})
        }),
        tracePropagation: {
            enabled: u?.enabled ?? d?.enabled ?? !1,
            respectSamplingDecision: u?.respectSamplingDecision ?? d?.respectSamplingDecision ?? !0
        },
        accessToken: async () => ``
    };
    return e.accessToken ? f.accessToken = e.accessToken : delete f.accessToken,
    f
}
function Ru(e) {
    let t = e?.trim();
    if (!t)
        throw Error(`supabaseUrl is required.`);
    if (!t.match(/^https?:\/\//i))
        throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
    try {
        return new URL(Iu(t))
    } catch {
        throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)
    }
}
var zu = class extends Ql {
    constructor(e) {
        super(e)
    }
}
  , Bu = class {
    constructor(e, t, n) {
        this.supabaseUrl = e,
        this.supabaseKey = t;
        let r = Ru(e);
        if (!t)
            throw Error(`supabaseKey is required.`);
        Mu(t),
        this.realtimeUrl = new URL(`realtime/v1`,r),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(`http`, `ws`),
        this.authUrl = new URL(`auth/v1`,r),
        this.storageUrl = new URL(`storage/v1`,r),
        this.functionsUrl = new URL(`functions/v1`,r);
        let i = `sb-${r.hostname.split(`.`)[0]}-auth-token`
          , a = {
            db: lu,
            realtime: du,
            auth: Q(Q({}, uu), {}, {
                storageKey: i
            }),
            global: cu,
            tracePropagation: fu
        }
          , o = Lu(n ?? {}, a);
        this.settings = o,
        this.storageKey = o.auth.storageKey ?? ``,
        this.headers = o.global.headers ?? {},
        o.accessToken ? (this.accessToken = o.accessToken,
        this.auth = new Proxy({},{
            get: (e, t) => {
                throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch),
        this.fetch = Nu(t, e, this._getSessionToken.bind(this), o.global.fetch, o.tracePropagation),
        this.functionsFetch = Nu(t, e, this._getSessionToken.bind(this), o.global.fetch, o.tracePropagation, {
            omitApiKeyAsBearer: !0
        }),
        this.realtime = this._initRealtimeClient(Q({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this),
            fetch: this.fetch
        }, o.realtime)),
        this.accessToken && Promise.resolve(this.accessToken()).then(e => this.realtime.setAuth(e)).catch(e => console.warn(`Failed to set initial Realtime auth token:`, e)),
        this.rest = new ka(new URL(`rest/v1`,r).href,{
            headers: this.headers,
            schema: o.db.schema,
            fetch: this.fetch,
            timeout: o.db.timeout,
            urlLengthLimit: o.db.urlLengthLimit
        }),
        this.storage = new Us(this.storageUrl.href,this.headers,this.fetch,n?.storage),
        o.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new ua(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.functionsFetch
        })
    }
    from(e) {
        return this.rest.from(e)
    }
    schema(e) {
        return this.rest.schema(e)
    }
    rpc(e, t={}, n={
        head: !1,
        get: !1,
        count: void 0
    }) {
        return this.rest.rpc(e, t, n)
    }
    channel(e, t={
        config: {}
    }) {
        return this.realtime.channel(e, t)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    async _getSessionToken() {
        var e = this;
        if (e.accessToken)
            return await e.accessToken();
        let {data: t} = await e.auth.getSession();
        return t.session?.access_token ?? null
    }
    async _getAccessToken() {
        var e = this;
        return await e._getSessionToken() ?? e.supabaseKey
    }
    _initSupabaseAuthClient({autoRefreshToken: e, persistSession: t, detectSessionInUrl: n, storage: r, userStorage: i, storageKey: a, flowType: o, lock: s, debug: c, throwOnError: l, experimental: u, lockAcquireTimeout: d, skipAutoInitialize: f}, p, m) {
        let h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new zu({
            url: this.authUrl.href,
            headers: Q(Q({}, h), p),
            storageKey: a,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: n,
            storage: r,
            userStorage: i,
            flowType: o,
            lock: s,
            debug: c,
            throwOnError: l,
            experimental: u,
            fetch: m,
            lockAcquireTimeout: d,
            skipAutoInitialize: f,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(e => e.toLowerCase() === `authorization`)
        })
    }
    _initRealtimeClient(e) {
        return new Go(this.realtimeUrl.href,Q(Q({}, e), {}, {
            params: Q(Q({}, {
                apikey: this.supabaseKey
            }), e?.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (e, t) => {
            this._handleTokenChanged(e, `CLIENT`, t?.access_token)
        }
        )
    }
    _handleTokenChanged(e, t, n) {
        (e === `TOKEN_REFRESHED` || e === `SIGNED_IN` || e === `INITIAL_SESSION`) && this.changedAccessToken !== n ? (this.changedAccessToken = n,
        this.realtime.setAuth(n)) : e === `SIGNED_OUT` && (this.realtime.setAuth(),
        t == `STORAGE` && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
  , Vu = (e, t, n) => new Bu(e,t,n);
function Hu() {
    if (typeof window < `u` || globalThis.Deno !== void 0)
        return !1;
    let e = globalThis.process;
    if (!e)
        return !1;
    let t = e.version;
    if (t == null)
        return !1;
    let n = t.match(/^v(\d+)\./);
    return n ? parseInt(n[1], 10) <= 20 : !1
}
Hu() && console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);
function Uu(e) {
    return e.startsWith(`sb_publishable_`) || e.startsWith(`sb_secret_`)
}
function Wu(e) {
    return (t, n) => {
        let r = new Headers(typeof Request < `u` && t instanceof Request ? t.headers : void 0);
        return n?.headers && new Headers(n.headers).forEach( (e, t) => r.set(t, e)),
        Uu(e) && r.get(`Authorization`) === `Bearer ${e}` && r.delete(`Authorization`),
        r.set(`apikey`, e),
        fetch(t, {
            ...n,
            headers: r
        })
    }
}
function Gu() {
    let e = {
        BASE_URL: `/`,
        DEV: !1,
        MODE: `production`,
        PROD: !0,
        SSR: !1,
        TSS_DEV_SERVER: `false`,
        TSS_DEV_SSR_STYLES_BASEPATH: `/`,
        TSS_DEV_SSR_STYLES_ENABLED: `true`,
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
        TSS_INLINE_CSS_ENABLED: `false`,
        TSS_ROUTER_BASEPATH: ``,
        TSS_SERVER_FN_BASE: `/_serverFn/`,
        VITE_SUPABASE_PROJECT_ID: `fiytsyixizvpaxffiozr`,
        VITE_SUPABASE_PUBLISHABLE_KEY: `sb_publishable_opIWEcW8doUn41SFT2DYuA_kGtc17Gs`,
        VITE_SUPABASE_URL: `https://fiytsyixizvpaxffiozr.supabase.co`
    }.VITE_SUPABASE_URL || {}.SUPABASE_URL
      , t = {
        BASE_URL: `/`,
        DEV: !1,
        MODE: `production`,
        PROD: !0,
        SSR: !1,
        TSS_DEV_SERVER: `false`,
        TSS_DEV_SSR_STYLES_BASEPATH: `/`,
        TSS_DEV_SSR_STYLES_ENABLED: `true`,
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
        TSS_INLINE_CSS_ENABLED: `false`,
        TSS_ROUTER_BASEPATH: ``,
        TSS_SERVER_FN_BASE: `/_serverFn/`,
        VITE_SUPABASE_PROJECT_ID: `fiytsyixizvpaxffiozr`,
        VITE_SUPABASE_PUBLISHABLE_KEY: `sb_publishable_opIWEcW8doUn41SFT2DYuA_kGtc17Gs`,
        VITE_SUPABASE_URL: `https://fiytsyixizvpaxffiozr.supabase.co`
    }.VITE_SUPABASE_PUBLISHABLE_KEY || {}.SUPABASE_PUBLISHABLE_KEY;
    if (!e || !t) {
        let n = `Missing Supabase environment variable(s): ${[...e ? [] : [`SUPABASE_URL`], ...t ? [] : [`SUPABASE_PUBLISHABLE_KEY`]].join(`, `)}. Connect Supabase in Lovable Cloud.`;
        throw console.error(`[Supabase] ${n}`),
        Error(n)
    }
    return Vu(e, t, {
        global: {
            fetch: Wu(t)
        },
        auth: {
            storage: typeof window < `u` ? localStorage : void 0,
            persistSession: !0,
            autoRefreshToken: !0
        }
    })
}
var Ku, qu = new Proxy({},{
    get(e, t, n) {
        return Ku ||= Gu(),
        Reflect.get(Ku, t, n)
    }
}), Ju = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, Yu = new class extends Ju {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e();
                return window.addEventListener(`visibilitychange`, t, !1),
                () => {
                    window.removeEventListener(`visibilitychange`, t)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(e => {
            typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e,
        this.onFocus())
    }
    onFocus() {
        let e = this.isFocused();
        this.listeners.forEach(t => {
            t(e)
        }
        )
    }
    isFocused() {
        return typeof this.#e == `boolean` ? this.#e : globalThis.document?.visibilityState !== `hidden`
    }
}
, Xu = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: e => clearInterval(e)
}, Zu = new class {
    #e = Xu;
    setTimeoutProvider(e) {
        this.#e = e
    }
    setTimeout(e, t) {
        return this.#e.setTimeout(e, t)
    }
    clearTimeout(e) {
        this.#e.clearTimeout(e)
    }
    setInterval(e, t) {
        return this.#e.setInterval(e, t)
    }
    clearInterval(e) {
        this.#e.clearInterval(e)
    }
}
;
function Qu(e) {
    setTimeout(e, 0)
}
var $u = typeof window > `u` || `Deno` in globalThis;
function ed() {}
function td(e, t) {
    return typeof e == `function` ? e(t) : e
}
function nd(e) {
    return typeof e == `number` && e >= 0 && e !== 1 / 0
}
function rd(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function id(e, t) {
    return typeof e == `function` ? e(t) : e
}
function $(e, t) {
    return typeof e == `function` ? e(t) : e
}
function ad(e, t) {
    let {type: n=`all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== sd(o, t.options))
                return !1
        } else if (!ld(t.queryKey, o))
            return !1
    }
    if (n !== `all`) {
        let e = t.isActive();
        if (n === `active` && !e || n === `inactive` && e)
            return !1
    }
    return !(typeof s == `boolean` && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t))
}
function od(e, t) {
    let {exact: n, status: r, predicate: i, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (cd(t.options.mutationKey) !== cd(a))
                return !1
        } else if (!ld(t.options.mutationKey, a))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function sd(e, t) {
    return (t?.queryKeyHashFn || cd)(e)
}
function cd(e) {
    return JSON.stringify(e, (e, t) => md(t) ? Object.keys(t).sort().reduce( (e, n) => (e[n] = t[n],
    e), {}) : t)
}
function ld(e, t) {
    return e === t ? !0 : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object` ? Object.keys(t).every(n => ld(e[n], t[n])) : !1
}
var ud = Object.prototype.hasOwnProperty;
function dd(e, t, n=0) {
    if (e === t)
        return e;
    if (n > 500)
        return t;
    let r = pd(e) && pd(t);
    if (!r && !(md(e) && md(t)))
        return t;
    let i = (r ? e : Object.keys(e)).length
      , a = r ? t : Object.keys(t)
      , o = a.length
      , s = r ? Array(o) : {}
      , c = 0;
    for (let l = 0; l < o; l++) {
        let o = r ? l : a[l]
          , u = e[o]
          , d = t[o];
        if (u === d) {
            s[o] = u,
            (r ? l < i : ud.call(e, o)) && c++;
            continue
        }
        if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
            s[o] = d;
            continue
        }
        let f = dd(u, d, n + 1);
        s[o] = f,
        f === u && c++
    }
    return i === o && c === i ? e : s
}
function fd(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (let n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function pd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function md(e) {
    if (!hd(e))
        return !1;
    let t = e.constructor;
    if (t === void 0)
        return !0;
    let n = t.prototype;
    return !(!hd(n) || !n.hasOwnProperty(`isPrototypeOf`) || Object.getPrototypeOf(e) !== Object.prototype)
}
function hd(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}
function gd(e) {
    return new Promise(t => {
        Zu.setTimeout(t, e)
    }
    )
}
function _d(e, t, n) {
    return typeof n.structuralSharing == `function` ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : dd(e, t)
}
function vd(e, t, n=0) {
    let r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function yd(e, t, n=0) {
    let r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var bd = Symbol();
function xd(e, t) {
    return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === bd ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function Sd(e, t) {
    return typeof e == `function` ? e(...t) : !!e
}
function Cd(e, t, n) {
    let r = !1, i;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (i ??= t(),
        r ? i : (r = !0,
        i.aborted ? n() : i.addEventListener(`abort`, n, {
            once: !0
        }),
        i))
    }),
    e
}
var wd = ( () => {
    let e = () => $u;
    return {
        isServer() {
            return e()
        },
        setIsServer(t) {
            e = t
        }
    }
}
)();
function Td() {
    let e, t, n = new Promise( (n, r) => {
        e = n,
        t = r
    }
    );
    n.status = `pending`,
    n.catch( () => {}
    );
    function r(e) {
        Object.assign(n, e),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = t => {
        r({
            status: `fulfilled`,
            value: t
        }),
        e(t)
    }
    ,
    n.reject = e => {
        r({
            status: `rejected`,
            reason: e
        }),
        t(e)
    }
    ,
    n
}
var Ed = Qu;
function Dd() {
    let e = []
      , t = 0
      , n = e => {
        e()
    }
      , r = e => {
        e()
    }
      , i = Ed
      , a = r => {
        t ? e.push(r) : i( () => {
            n(r)
        }
        )
    }
      , o = () => {
        let t = e;
        e = [],
        t.length && i( () => {
            r( () => {
                t.forEach(e => {
                    n(e)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: e => {
            let n;
            t++;
            try {
                n = e()
            } finally {
                t--,
                t || o()
            }
            return n
        }
        ,
        batchCalls: e => (...t) => {
            a( () => {
                e(...t)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: e => {
            n = e
        }
        ,
        setBatchNotifyFunction: e => {
            r = e
        }
        ,
        setScheduler: e => {
            i = e
        }
    }
}
var Od = Dd()
  , kd = new class extends Ju {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e(!0)
                  , n = () => e(!1);
                return window.addEventListener(`online`, t, !1),
                window.addEventListener(`offline`, n, !1),
                () => {
                    window.removeEventListener(`online`, t),
                    window.removeEventListener(`offline`, n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e,
        this.listeners.forEach(t => {
            t(e)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
;
function Ad(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function jd(e) {
    return (e ?? `online`) === `online` ? kd.isOnline() : !0
}
var Md = class extends Error {
    constructor(e) {
        super(`CancelledError`),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function Nd(e) {
    let t = !1, n = 0, r, i = Td(), a = () => i.status !== `pending`, o = t => {
        if (!a()) {
            let n = new Md(t);
            f(n),
            e.onCancel?.(n)
        }
    }
    , s = () => {
        t = !0
    }
    , c = () => {
        t = !1
    }
    , l = () => Yu.isFocused() && (e.networkMode === `always` || kd.isOnline()) && e.canRun(), u = () => jd(e.networkMode) && e.canRun(), d = e => {
        a() || (r?.(),
        i.resolve(e))
    }
    , f = e => {
        a() || (r?.(),
        i.reject(e))
    }
    , p = () => new Promise(t => {
        r = e => {
            (a() || l()) && t(e)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        r = void 0,
        a() || e.onContinue?.()
    }
    ), m = () => {
        if (a())
            return;
        let r, i = n === 0 ? e.initialPromise : void 0;
        try {
            r = i ?? e.fn()
        } catch (e) {
            r = Promise.reject(e)
        }
        Promise.resolve(r).then(d).catch(r => {
            if (a())
                return;
            let i = e.retry ?? (wd.isServer() ? 0 : 3)
              , o = e.retryDelay ?? Ad
              , s = typeof o == `function` ? o(n, r) : o
              , c = i === !0 || typeof i == `number` && n < i || typeof i == `function` && i(n, r);
            if (t || !c) {
                f(r);
                return
            }
            n++,
            e.onFail?.(n, r),
            gd(s).then( () => l() ? void 0 : p()).then( () => {
                t ? f(r) : m()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        status: () => i.status,
        cancel: o,
        continue: () => (r?.(),
        i),
        cancelRetry: s,
        continueRetry: c,
        canStart: u,
        start: () => (u() ? m() : p().then(m),
        i)
    }
}
var Pd = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        nd(this.gcTime) && (this.#e = Zu.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (wd.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e !== void 0 && (Zu.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
;
function Fd(e) {
    return {
        onFetch: (t, n) => {
            let r = t.options
              , i = t.fetchOptions?.meta?.fetchMore?.direction
              , a = t.state.data?.pages || []
              , o = t.state.data?.pageParams || []
              , s = {
                pages: [],
                pageParams: []
            }
              , c = 0
              , l = async () => {
                let n = !1
                  , l = e => {
                    Cd(e, () => t.signal, () => n = !0)
                }
                  , u = xd(t.options, t.fetchOptions)
                  , d = async (e, r, i) => {
                    if (n)
                        return Promise.reject(t.signal.reason);
                    if (r == null && e.pages.length)
                        return Promise.resolve(e);
                    let a = await u(( () => {
                        let e = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: r,
                            direction: i ? `backward` : `forward`,
                            meta: t.options.meta
                        };
                        return l(e),
                        e
                    }
                    )())
                      , {maxPages: o} = t.options
                      , s = i ? yd : vd;
                    return {
                        pages: s(e.pages, a, o),
                        pageParams: s(e.pageParams, r, o)
                    }
                }
                ;
                if (i && a.length) {
                    let e = i === `backward`
                      , t = e ? Ld : Id
                      , n = {
                        pages: a,
                        pageParams: o
                    };
                    s = await d(n, t(r, n), e)
                } else {
                    let t = e ?? a.length;
                    do {
                        let e = c === 0 ? o[0] ?? r.initialPageParam : Id(r, s);
                        if (c > 0 && e == null)
                            break;
                        s = await d(s, e),
                        c++
                    } while (c < t)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => t.options.persister?.(l, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : t.fetchFn = l
        }
    }
}
function Id(e, {pages: t, pageParams: n}) {
    let r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Ld(e, {pages: t, pageParams: n}) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0
}
var Rd = class extends Pd {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e) {
        super(),
        this.#s = !1,
        this.#o = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#i = e.client,
        this.#r = this.#i.getQueryCache(),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#t = Vd(this.options),
        this.state = e.state ?? this.#t,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#e
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(e) {
        if (this.options = {
            ...this.#o,
            ...e
        },
        e?._type && (this.#e = e._type),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            let e = Vd(this.options);
            e.data !== void 0 && (this.setState(Bd(e.data, e.dataUpdatedAt)),
            this.#t = e)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this)
    }
    setData(e, t) {
        let n = _d(this.state.data, e, this.options);
        return this.#l({
            data: n,
            type: `success`,
            dataUpdatedAt: t?.updatedAt,
            manual: t?.manual
        }),
        n
    }
    setState(e) {
        this.#l({
            type: `setState`,
            state: e
        })
    }
    cancel(e) {
        let t = this.#a?.promise;
        return this.#a?.cancel(e),
        t ? t.then(ed).catch(ed) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#t
    }
    reset() {
        this.destroy(),
        this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => $(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === bd || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => id(e.options.staleTime, this) === `static`) : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === `static` ? !1 : this.state.isInvalidated ? !0 : !rd(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#r.notify({
            type: `observerAdded`,
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e),
        this.observers.length || (this.#a && (this.#s || this.#c() ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#r.notify({
            type: `observerRemoved`,
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #c() {
        return this.state.fetchStatus === `paused` && this.state.status === `pending`
    }
    invalidate() {
        this.state.isInvalidated || this.#l({
            type: `invalidate`
        })
    }
    async fetch(e, t) {
        if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
            if (this.state.data !== void 0 && t?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            let e = this.observers.find(e => e.options.queryFn);
            e && this.setOptions(e.options)
        }
        let n = new AbortController
          , r = e => {
            Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => (this.#s = !0,
                n.signal)
            })
        }
          , i = () => {
            let e = xd(this.options, t)
              , n = ( () => {
                let e = {
                    client: this.#i,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(e),
                e
            }
            )();
            return this.#s = !1,
            this.options.persister ? this.options.persister(e, n, this) : e(n)
        }
          , a = ( () => {
            let e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#i,
                state: this.state,
                fetchFn: i
            };
            return r(e),
            e
        }
        )();
        (this.#e === `infinite` ? Fd(this.options.pages) : this.options.behavior)?.onFetch(a, this),
        this.#n = this.state,
        (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
            type: `fetch`,
            meta: a.fetchOptions?.meta
        }),
        this.#a = Nd({
            initialPromise: t?.initialPromise,
            fn: a.fetchFn,
            onCancel: e => {
                e instanceof Md && e.revert && this.setState({
                    ...this.#n,
                    fetchStatus: `idle`
                }),
                n.abort()
            }
            ,
            onFail: (e, t) => {
                this.#l({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            }
            ,
            onPause: () => {
                this.#l({
                    type: `pause`
                })
            }
            ,
            onContinue: () => {
                this.#l({
                    type: `continue`
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        });
        try {
            let e = await this.#a.start();
            if (e === void 0)
                throw Error(`${this.queryHash} data is undefined`);
            return this.setData(e),
            this.#r.config.onSuccess?.(e, this),
            this.#r.config.onSettled?.(e, this.state.error, this),
            e
        } catch (e) {
            if (e instanceof Md) {
                if (e.silent)
                    return this.#a.promise;
                if (e.revert) {
                    if (this.state.data === void 0)
                        throw e;
                    return this.state.data
                }
            }
            throw this.#l({
                type: `error`,
                error: e
            }),
            this.#r.config.onError?.(e, this),
            this.#r.config.onSettled?.(this.state.data, e, this),
            e
        } finally {
            this.scheduleGc()
        }
    }
    #l(e) {
        let t = t => {
            switch (e.type) {
            case `failed`:
                return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case `pause`:
                return {
                    ...t,
                    fetchStatus: `paused`
                };
            case `continue`:
                return {
                    ...t,
                    fetchStatus: `fetching`
                };
            case `fetch`:
                return {
                    ...t,
                    ...zd(t.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case `success`:
                let n = {
                    ...t,
                    ...Bd(e.data, e.dataUpdatedAt),
                    dataUpdateCount: t.dataUpdateCount + 1,
                    ...!e.manual && {
                        fetchStatus: `idle`,
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#n = e.manual ? n : void 0,
                n;
            case `error`:
                let r = e.error;
                return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: `idle`,
                    status: `error`,
                    isInvalidated: !0
                };
            case `invalidate`:
                return {
                    ...t,
                    isInvalidated: !0
                };
            case `setState`:
                return {
                    ...t,
                    ...e.state
                }
            }
        }
        ;
        this.state = t(this.state),
        Od.batch( () => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }
            ),
            this.#r.notify({
                query: this,
                type: `updated`,
                action: e
            })
        }
        )
    }
}
;
function zd(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: jd(t.networkMode) ? `fetching` : `paused`,
        ...e === void 0 && {
            error: null,
            status: `pending`
        }
    }
}
function Bd(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: `success`
    }
}
function Vd(e) {
    let t = typeof e.initialData == `function` ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == `function` ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? `success` : `pending`,
        fetchStatus: `idle`
    }
}
var Hd = class extends Ju {
    constructor(e, t) {
        super(),
        this.options = t,
        this.#e = e,
        this.#s = null,
        this.#o = Td(),
        this.bindMethods(),
        this.setOptions(t)
    }
    #e;
    #t = void 0;
    #n = void 0;
    #r = void 0;
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        Wd(this.#t, this.options) ? this.#h() : this.updateResult(),
        this.#y())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Gd(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Gd(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#b(),
        this.#x(),
        this.#t.removeObserver(this)
    }
    setOptions(e) {
        let t = this.options
          , n = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != `boolean` && typeof this.options.enabled != `function` && typeof $(this.options.enabled, this.#t) != `boolean`)
            throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);
        this.#S(),
        this.#t.setOptions(this.options),
        t._defaulted && !fd(this.options, t) && this.#e.getQueryCache().notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this
        });
        let r = this.hasListeners();
        r && Kd(this.#t, n, this.options, t) && this.#h(),
        this.updateResult(),
        r && (this.#t !== n || $(this.options.enabled, this.#t) !== $(t.enabled, this.#t) || id(this.options.staleTime, this.#t) !== id(t.staleTime, this.#t)) && this.#g();
        let i = this.#_();
        r && (this.#t !== n || $(this.options.enabled, this.#t) !== $(t.enabled, this.#t) || i !== this.#p) && this.#v(i)
    }
    getOptimisticResult(e) {
        let t = this.#e.getQueryCache().build(this.#e, e)
          , n = this.createResult(t, e);
        return Jd(this, n) && (this.#r = n,
        this.#a = this.options,
        this.#i = this.#t.state),
        n
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(e, t) {
        return new Proxy(e,{
            get: (e, n) => (this.trackProp(n),
            t?.(n),
            n === `promise` && (this.trackProp(`data`),
            !this.options.experimental_prefetchInRender && this.#o.status === `pending` && this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),
            Reflect.get(e, n))
        })
    }
    trackProp(e) {
        this.#m.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        let t = this.#e.defaultQueryOptions(e)
          , n = this.#e.getQueryCache().build(this.#e, t);
        return n.fetch().then( () => this.createResult(n, t))
    }
    fetch(e) {
        return this.#h({
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #h(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(ed)),
        t
    }
    #g() {
        this.#b();
        let e = id(this.options.staleTime, this.#t);
        if (wd.isServer() || this.#r.isStale || !nd(e))
            return;
        let t = rd(this.#r.dataUpdatedAt, e) + 1;
        this.#d = Zu.setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , t)
    }
    #_() {
        return (typeof this.options.refetchInterval == `function` ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #v(e) {
        this.#x(),
        this.#p = e,
        !(wd.isServer() || $(this.options.enabled, this.#t) === !1 || !nd(this.#p) || this.#p === 0) && (this.#f = Zu.setInterval( () => {
            (this.options.refetchIntervalInBackground || Yu.isFocused()) && this.#h()
        }
        , this.#p))
    }
    #y() {
        this.#g(),
        this.#v(this.#_())
    }
    #b() {
        this.#d !== void 0 && (Zu.clearTimeout(this.#d),
        this.#d = void 0)
    }
    #x() {
        this.#f !== void 0 && (Zu.clearInterval(this.#f),
        this.#f = void 0)
    }
    createResult(e, t) {
        let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, {state: c} = e, l = {
            ...c
        }, u = !1, d;
        if (t._optimisticResults) {
            let i = this.hasListeners()
              , a = !i && Wd(e, t)
              , o = i && Kd(e, n, t, r);
            (a || o) && (l = {
                ...l,
                ...zd(c.data, e.options)
            }),
            t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`)
        }
        let {error: f, errorUpdatedAt: p, status: m} = l;
        d = l.data;
        let h = !1;
        if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
            let e;
            i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data,
            h = !0) : e = typeof t.placeholderData == `function` ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData,
            e !== void 0 && (m = `success`,
            d = _d(i?.data, e, t),
            u = !0)
        }
        if (t.select && d !== void 0 && !h)
            if (i && d === a?.data && t.select === this.#c)
                d = this.#l;
            else
                try {
                    this.#c = t.select,
                    d = t.select(d),
                    d = _d(i?.data, d, t),
                    this.#l = d,
                    this.#s = null
                } catch (e) {
                    this.#s = e
                }
        this.#s && (f = this.#s,
        d = this.#l,
        p = Date.now(),
        m = `error`);
        let g = l.fetchStatus === `fetching`
          , ee = m === `pending`
          , te = m === `error`
          , ne = ee && g
          , re = d !== void 0
          , _ = {
            status: m,
            fetchStatus: l.fetchStatus,
            isPending: ee,
            isSuccess: m === `success`,
            isError: te,
            isInitialLoading: ne,
            isLoading: ne,
            data: d,
            dataUpdatedAt: l.dataUpdatedAt,
            error: f,
            errorUpdatedAt: p,
            failureCount: l.fetchFailureCount,
            failureReason: l.fetchFailureReason,
            errorUpdateCount: l.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
            isFetching: g,
            isRefetching: g && !ee,
            isLoadingError: te && !re,
            isPaused: l.fetchStatus === `paused`,
            isPlaceholderData: u,
            isRefetchError: te && re,
            isStale: qd(e, t),
            refetch: this.refetch,
            promise: this.#o,
            isEnabled: $(t.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            let t = _.data !== void 0
              , r = _.status === `error` && !t
              , i = e => {
                r ? e.reject(_.error) : t && e.resolve(_.data)
            }
              , a = () => {
                i(this.#o = _.promise = Td())
            }
              , o = this.#o;
            switch (o.status) {
            case `pending`:
                e.queryHash === n.queryHash && i(o);
                break;
            case `fulfilled`:
                (r || _.data !== o.value) && a();
                break;
            case `rejected`:
                (!r || _.error !== o.reason) && a();
                break
            }
        }
        return _
    }
    updateResult() {
        let e = this.#r
          , t = this.createResult(this.#t, this.options);
        this.#i = this.#t.state,
        this.#a = this.options,
        this.#i.data !== void 0 && (this.#u = this.#t),
        !fd(t, e) && (this.#r = t,
        this.#C({
            listeners: ( () => {
                if (!e)
                    return !0;
                let {notifyOnChangeProps: t} = this.options
                  , n = typeof t == `function` ? t() : t;
                if (n === `all` || !n && !this.#m.size)
                    return !0;
                let r = new Set(n ?? this.#m);
                return this.options.throwOnError && r.add(`error`),
                Object.keys(this.#r).some(t => {
                    let n = t;
                    return this.#r[n] !== e[n] && r.has(n)
                }
                )
            }
            )()
        }))
    }
    #S() {
        let e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t)
            return;
        let t = this.#t;
        this.#t = e,
        this.#n = e.state,
        this.hasListeners() && (t?.removeObserver(this),
        e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#y()
    }
    #C(e) {
        Od.batch( () => {
            e.listeners && this.listeners.forEach(e => {
                e(this.#r)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: `observerResultsUpdated`
            })
        }
        )
    }
}
;
function Ud(e, t) {
    return $(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === `error` && $(t.retryOnMount, e) === !1)
}
function Wd(e, t) {
    return Ud(e, t) || e.state.data !== void 0 && Gd(e, t, t.refetchOnMount)
}
function Gd(e, t, n) {
    if ($(t.enabled, e) !== !1 && id(t.staleTime, e) !== `static`) {
        let r = typeof n == `function` ? n(e) : n;
        return r === `always` || r !== !1 && qd(e, t)
    }
    return !1
}
function Kd(e, t, n, r) {
    return (e !== t || $(r.enabled, e) === !1) && (!n.suspense || e.state.status !== `error`) && qd(e, n)
}
function qd(e, t) {
    return $(t.enabled, e) !== !1 && e.isStaleByTime(id(t.staleTime, e))
}
function Jd(e, t) {
    return !fd(e.getCurrentResult(), t)
}
var Yd = M.createContext(void 0)
  , Xd = e => {
    let t = M.useContext(Yd);
    if (e)
        return e;
    if (!t)
        throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t
}
  , Zd = ({client: e, children: t}) => (M.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
(0,
Ai.jsx)(Yd.Provider, {
    value: e,
    children: t
}))
  , Qd = M.createContext(!1)
  , $d = () => M.useContext(Qd);
Qd.Provider;
function ef() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var tf = M.createContext(ef())
  , nf = () => M.useContext(tf)
  , rf = (e, t, n) => {
    let r = n?.state.error && typeof e.throwOnError == `function` ? Sd(e.throwOnError, [n.state.error, n]) : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1))
}
  , af = e => {
    M.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , of = ({result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i}) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || Sd(n, [e.error, r]))
  , sf = e => {
    if (e.suspense) {
        let t = 1e3
          , n = e => e === `static` ? e : Math.max(e ?? t, t)
          , r = e.staleTime;
        e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t))
    }
}
  , cf = (e, t) => e.isLoading && e.isFetching && !t
  , lf = (e, t) => e?.suspense && t.isPending
  , uf = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function df(e, t, n) {
    let r = $d()
      , i = nf()
      , a = Xd(n)
      , o = a.defaultQueryOptions(e);
    a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
    let s = a.getQueryCache().get(o.queryHash)
      , c = e.subscribed !== !1;
    o._optimisticResults = r ? `isRestoring` : c ? `optimistic` : void 0,
    sf(o),
    rf(o, i, s),
    af(i);
    let l = !a.getQueryCache().get(o.queryHash)
      , [u] = M.useState( () => new t(a,o))
      , d = u.getOptimisticResult(o)
      , f = !r && c;
    if (M.useSyncExternalStore(M.useCallback(e => {
        let t = f ? u.subscribe(Od.batchCalls(e)) : ed;
        return u.updateResult(),
        t
    }
    , [u, f]), () => u.getCurrentResult(), () => u.getCurrentResult()),
    M.useEffect( () => {
        u.setOptions(o)
    }
    , [o, u]),
    lf(o, d))
        throw uf(o, u, i);
    if (of({
        result: d,
        errorResetBoundary: i,
        throwOnError: o.throwOnError,
        query: s,
        suspense: o.suspense
    }))
        throw d.error;
    return a.getDefaultOptions().queries?._experimental_afterQuery?.(o, d),
    o.experimental_prefetchInRender && !wd.isServer() && cf(d, r) && (l ? uf(o, u, i) : s?.promise)?.catch(ed).finally( () => {
        u.updateResult()
    }
    ),
    o.notifyOnChangeProps ? d : u.trackResult(d)
}
function ff(e, t) {
    return df(e, Hd, t)
}
var pf = (0,
M.createContext)({
    session: null,
    user: null,
    loading: !0
});
function mf({children: e}) {
    let[t,n] = (0,
    M.useState)(null)
      , [r,i] = (0,
    M.useState)(!0);
    return (0,
    M.useEffect)( () => {
        let {data: e} = qu.auth.onAuthStateChange( (e, t) => {
            n(t),
            i(!1)
        }
        );
        return qu.auth.getSession().then( ({data: e}) => {
            n(e.session),
            i(!1)
        }
        ),
        () => e.subscription.unsubscribe()
    }
    , []),
    (0,
    Ai.jsx)(pf.Provider, {
        value: {
            session: t,
            user: t?.user ?? null,
            loading: r
        },
        children: e
    })
}
function hf() {
    return (0,
    M.useContext)(pf)
}
var gf = `/assets/product-rose-CRWXBCKN.jpg`
  , _f = `/assets/product-tulips-vN8R33zW.jpg`
  , vf = `/assets/product-keychain-QyHap03g.jpg`
  , yf = `/assets/product-giftset-DwEzpFZG.jpg`
  , bf = `/assets/product-bouquet-D6j9LvV3.jpg`
  , xf = {
    "blush-bouquet": bf,
    "tulipe-bouquet": _f,
    "spring-tulips": _f,
    "rose-eternelle": gf,
    "ivory-rose": gf,
    "petite-keychain": vf,
    "coffret-blossom": yf,
    "mini-bloom-set": yf
}
  , Sf = {
    Bouquets: bf,
    "Single Flowers": gf,
    Keychains: vf,
    "Gift Sets": yf
};
function Cf(e) {
    return e.image_url || xf[e.id] || Sf[e.category] || `/assets/product-bouquet-D6j9LvV3.jpg`
}
var wf = [`Bouquets`, `Single Flowers`, `Keychains`, `Gift Sets`]
  , Tf = e => `₹` + e.toLocaleString(`en-IN`)
  , Ef = 1500;
function Df(e) {
    return e >= 1500 || e === 0 ? 0 : 79
}
var Of = ta({
    type: `function`
})
  , kf = Xi({
    method: `GET`
}).handler(Ei(`51ad93d03c52987e0e52d0164e41771f8765a8919d8a537367eaf795dff9b9d8`))
  , Af = Xi({
    method: `GET`
}).handler(Ei(`b1412d2ee3540c641acd3eadee47cab30a74bd74ee33cc79351c015701f7ed17`))
  , jf = Xi({
    method: `GET`
}).middleware([Of]).handler(Ei(`c546103eb5801689de8c113dedf53fd443c01cfcd0f9c3ddcf3c8fd1e6722d81`))
  , Mf = Xi({
    method: `POST`
}).middleware([Of]).handler(Ei(`788ab8054f9afc053d5a8e54f9c9e36cb8f57559ccce4097d4da8bd3509f7438`))
  , Nf = Xi({
    method: `POST`
}).middleware([Of]).handler(Ei(`a0a03befdb1939fa2e9c5e5b53d003f0b5ef5b810b72a6c23e6ce3b6c4d18a25`));
function Pf() {
    let e = Gi(kf);
    return ff({
        queryKey: [`products`],
        queryFn: () => e(),
        staleTime: 6e4
    })
}
function Ff() {
    let {data: e} = Pf();
    return (0,
    M.useMemo)( () => {
        let t = new Map;
        for (let n of e ?? [])
            t.set(n.id, n);
        return t
    }
    , [e])
}
var If = (0,
M.createContext)(null)
  , Lf = `avune.cart.v1`;
function Rf({children: e}) {
    let[t,n] = (0,
    M.useState)([])
      , [r,i] = (0,
    M.useState)(!1)
      , a = Ff();
    (0,
    M.useEffect)( () => {
        try {
            let e = localStorage.getItem(Lf);
            e && n(JSON.parse(e))
        } catch {}
        i(!0)
    }
    , []),
    (0,
    M.useEffect)( () => {
        r && localStorage.setItem(Lf, JSON.stringify(t))
    }
    , [t, r]);
    let o = (0,
    M.useMemo)( () => {
        let e = t.reduce( (e, t) => {
            let n = a.get(t.id);
            return e + (n ? n.price * t.qty : 0)
        }
        , 0)
          , r = Df(e);
        return {
            lines: t,
            count: t.reduce( (e, t) => e + t.qty, 0),
            subtotal: e,
            shipping: r,
            total: e + r,
            productById: e => a.get(e),
            add: (e, t=1) => n(n => n.find(t => t.id === e) ? n.map(n => n.id === e ? {
                ...n,
                qty: n.qty + t
            } : n) : [...n, {
                id: e,
                qty: t
            }]),
            setQty: (e, t) => n(n => t <= 0 ? n.filter(t => t.id !== e) : n.map(n => n.id === e ? {
                ...n,
                qty: t
            } : n)),
            remove: e => n(t => t.filter(t => t.id !== e)),
            clear: () => n([])
        }
    }
    , [t, a]);
    return (0,
    Ai.jsx)(If.Provider, {
        value: o,
        children: e
    })
}
function zf() {
    let e = (0,
    M.useContext)(If);
    if (!e)
        throw Error(`useCart must be used inside CartProvider`);
    return e
}
export {sd as A, nu as B, Rd as C, Od as D, kd as E, id as F, Ei as G, Xi as H, bd as I, re as J, Rr as K, Yu as L, ad as M, ed as N, td as O, ld as P, Ju as R, Xd as S, Nd as T, Gi as U, ta as V, Ui as W, gf as _, Mf as a, ff as b, Of as c, Tf as d, Cf as f, _f as g, vf as h, jf as i, od as j, cd as k, wf as l, yf as m, zf as n, Af as o, bf as p, ie as q, Nf as r, kf as s, Rf as t, Ef as u, mf as v, Pd as w, Zd as x, hf as y, qu as z};
