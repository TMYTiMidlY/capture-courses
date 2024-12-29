var x5 = Object.defineProperty;
var O5 = (e, t, r) => t in e ? x5(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : (e[t] = r);
var N = (e, t, r) => (O5(e, typeof t != "symbol" ? t + "" : t, r),
r);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver( (o) => {
        for (const a of o)
            if (a.type === "childList")
                for (const s of a.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const a = {};
        return (o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? (a.credentials = "include") : o.crossOrigin === "anonymous" ? (a.credentials = "omit") : (a.credentials = "same-origin"),
        a);
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const a = r(o);
        fetch(o.href, a);
    }
}
)();
var so = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $r(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function A5(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
        };
        r.prototype = t.prototype;
    } else
        r = {};
    return (Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[n];
            },
        });
    }),
    r);
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var M0;
(function(e) {
    (function(t) {
        var r = typeof so == "object" ? so : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")()
          , n = o(e);
        typeof r.Reflect > "u" ? (r.Reflect = e) : (n = o(r.Reflect, n)),
        t(n);
        function o(a, s) {
            return function(i, c) {
                typeof a[i] != "function" && Object.defineProperty(a, i, {
                    configurable: !0,
                    writable: !0,
                    value: c,
                }),
                s && s(i, c);
            }
            ;
        }
    }
    )(function(t) {
        var r = Object.prototype.hasOwnProperty
          , n = typeof Symbol == "function"
          , o = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive"
          , a = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator"
          , s = typeof Object.create == "function"
          , i = {
            __proto__: []
        }instanceof Array
          , c = !s && !i
          , l = {
            create: s ? function() {
                return G(Object.create(null));
            }
            : i ? function() {
                return G({
                    __proto__: null
                });
            }
            : function() {
                return G({});
            }
            ,
            has: c ? function(z, j) {
                return r.call(z, j);
            }
            : function(z, j) {
                return j in z;
            }
            ,
            get: c ? function(z, j) {
                return r.call(z, j) ? z[j] : void 0;
            }
            : function(z, j) {
                return z[j];
            }
            ,
        }
          , f = Object.getPrototypeOf(Function)
          , d = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true"
          , u = !d && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : K()
          , w = !d && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : V()
          , y = !d && typeof WeakMap == "function" ? WeakMap : H()
          , x = new y();
        function v(z, j, C, S) {
            if (he(C)) {
                if (!Pe(z))
                    throw new TypeError();
                if (!ge(j))
                    throw new TypeError();
                return X(z, j);
            } else {
                if (!Pe(z))
                    throw new TypeError();
                if (!Te(j))
                    throw new TypeError();
                if (!Te(S) && !he(S) && !ze(S))
                    throw new TypeError();
                return ze(S) && (S = void 0),
                (C = de(C)),
                re(z, j, C, S);
            }
        }
        t("decorate", v);
        function h(z, j) {
            function C(S, ee) {
                if (!Te(S))
                    throw new TypeError();
                if (!he(ee) && !p(ee))
                    throw new TypeError();
                R(z, j, S, ee);
            }
            return C;
        }
        t("metadata", h);
        function m(z, j, C, S) {
            if (!Te(C))
                throw new TypeError();
            return he(S) || (S = de(S)),
            R(z, j, C, S);
        }
        t("defineMetadata", m);
        function A(z, j, C) {
            if (!Te(j))
                throw new TypeError();
            return he(C) || (C = de(C)),
            U(z, j, C);
        }
        t("hasMetadata", A);
        function O(z, j, C) {
            if (!Te(j))
                throw new TypeError();
            return he(C) || (C = de(C)),
            I(z, j, C);
        }
        t("hasOwnMetadata", O);
        function b(z, j, C) {
            if (!Te(j))
                throw new TypeError();
            return he(C) || (C = de(C)),
            Q(z, j, C);
        }
        t("getMetadata", b);
        function D(z, j, C) {
            if (!Te(j))
                throw new TypeError();
            return he(C) || (C = de(C)),
            J(z, j, C);
        }
        t("getOwnMetadata", D);
        function P(z, j) {
            if (!Te(z))
                throw new TypeError();
            return he(j) || (j = de(j)),
            ne(z, j);
        }
        t("getMetadataKeys", P);
        function Y(z, j) {
            if (!Te(z))
                throw new TypeError();
            return he(j) || (j = de(j)),
            ie(z, j);
        }
        t("getOwnMetadataKeys", Y);
        function F(z, j, C) {
            if (!Te(j))
                throw new TypeError();
            he(C) || (C = de(C));
            var S = k(j, C, !1);
            if (he(S) || !S.delete(z))
                return !1;
            if (S.size > 0)
                return !0;
            var ee = x.get(j);
            return ee.delete(C),
            ee.size > 0 || x.delete(j),
            !0;
        }
        t("deleteMetadata", F);
        function X(z, j) {
            for (var C = z.length - 1; C >= 0; --C) {
                var S = z[C]
                  , ee = S(j);
                if (!he(ee) && !ze(ee)) {
                    if (!ge(ee))
                        throw new TypeError();
                    j = ee;
                }
            }
            return j;
        }
        function re(z, j, C, S) {
            for (var ee = z.length - 1; ee >= 0; --ee) {
                var be = z[ee]
                  , ce = be(j, C, S);
                if (!he(ce) && !ze(ce)) {
                    if (!Te(ce))
                        throw new TypeError();
                    S = ce;
                }
            }
            return S;
        }
        function k(z, j, C) {
            var S = x.get(z);
            if (he(S)) {
                if (!C)
                    return;
                (S = new u()),
                x.set(z, S);
            }
            var ee = S.get(j);
            if (he(ee)) {
                if (!C)
                    return;
                (ee = new u()),
                S.set(j, ee);
            }
            return ee;
        }
        function U(z, j, C) {
            var S = I(z, j, C);
            if (S)
                return !0;
            var ee = $(j);
            return ze(ee) ? !1 : U(z, ee, C);
        }
        function I(z, j, C) {
            var S = k(j, C, !1);
            return he(S) ? !1 : _(S.has(z));
        }
        function Q(z, j, C) {
            var S = I(z, j, C);
            if (S)
                return J(z, j, C);
            var ee = $(j);
            if (!ze(ee))
                return Q(z, ee, C);
        }
        function J(z, j, C) {
            var S = k(j, C, !1);
            if (!he(S))
                return S.get(z);
        }
        function R(z, j, C, S) {
            var ee = k(C, S, !0);
            ee.set(z, j);
        }
        function ne(z, j) {
            var C = ie(z, j)
              , S = $(z);
            if (S === null)
                return C;
            var ee = ne(S, j);
            if (ee.length <= 0)
                return C;
            if (C.length <= 0)
                return ee;
            for (var be = new w(), ce = [], ye = 0, pe = C; ye < pe.length; ye++) {
                var Ye = pe[ye]
                  , Ee = be.has(Ye);
                Ee || (be.add(Ye),
                ce.push(Ye));
            }
            for (var Qt = 0, mt = ee; Qt < mt.length; Qt++) {
                var Ye = mt[Qt]
                  , Ee = be.has(Ye);
                Ee || (be.add(Ye),
                ce.push(Ye));
            }
            return ce;
        }
        function ie(z, j) {
            var C = []
              , S = k(z, j, !1);
            if (he(S))
                return C;
            for (var ee = S.keys(), be = M(ee), ce = 0; ; ) {
                var ye = T(be);
                if (!ye)
                    return (C.length = ce),
                    C;
                var pe = E(ye);
                try {
                    C[ce] = pe;
                } catch (Ye) {
                    try {
                        Z(be);
                    } finally {
                        throw Ye;
                    }
                }
                ce++;
            }
        }
        function He(z) {
            if (z === null)
                return 1;
            switch (typeof z) {
            case "undefined":
                return 0;
            case "boolean":
                return 2;
            case "string":
                return 3;
            case "symbol":
                return 4;
            case "number":
                return 5;
            case "object":
                return z === null ? 1 : 6;
            default:
                return 6;
            }
        }
        function he(z) {
            return z === void 0;
        }
        function ze(z) {
            return z === null;
        }
        function Fe(z) {
            return typeof z == "symbol";
        }
        function Te(z) {
            return typeof z == "object" ? z !== null : typeof z == "function";
        }
        function L(z, j) {
            switch (He(z)) {
            case 0:
                return z;
            case 1:
                return z;
            case 2:
                return z;
            case 3:
                return z;
            case 4:
                return z;
            case 5:
                return z;
            }
            var C = j === 3 ? "string" : j === 5 ? "number" : "default"
              , S = g(z, o);
            if (S !== void 0) {
                var ee = S.call(z, C);
                if (Te(ee))
                    throw new TypeError();
                return ee;
            }
            return oe(z, C === "default" ? "number" : C);
        }
        function oe(z, j) {
            if (j === "string") {
                var C = z.toString;
                if (me(C)) {
                    var S = C.call(z);
                    if (!Te(S))
                        return S;
                }
                var ee = z.valueOf;
                if (me(ee)) {
                    var S = ee.call(z);
                    if (!Te(S))
                        return S;
                }
            } else {
                var ee = z.valueOf;
                if (me(ee)) {
                    var S = ee.call(z);
                    if (!Te(S))
                        return S;
                }
                var be = z.toString;
                if (me(be)) {
                    var S = be.call(z);
                    if (!Te(S))
                        return S;
                }
            }
            throw new TypeError();
        }
        function _(z) {
            return !!z;
        }
        function ae(z) {
            return "" + z;
        }
        function de(z) {
            var j = L(z, 3);
            return Fe(j) ? j : ae(j);
        }
        function Pe(z) {
            return Array.isArray ? Array.isArray(z) : z instanceof Object ? z instanceof Array : Object.prototype.toString.call(z) === "[object Array]";
        }
        function me(z) {
            return typeof z == "function";
        }
        function ge(z) {
            return typeof z == "function";
        }
        function p(z) {
            switch (He(z)) {
            case 3:
                return !0;
            case 4:
                return !0;
            default:
                return !1;
            }
        }
        function g(z, j) {
            var C = z[j];
            if (C != null) {
                if (!me(C))
                    throw new TypeError();
                return C;
            }
        }
        function M(z) {
            var j = g(z, a);
            if (!me(j))
                throw new TypeError();
            var C = j.call(z);
            if (!Te(C))
                throw new TypeError();
            return C;
        }
        function E(z) {
            return z.value;
        }
        function T(z) {
            var j = z.next();
            return j.done ? !1 : j;
        }
        function Z(z) {
            var j = z.return;
            j && j.call(z);
        }
        function $(z) {
            var j = Object.getPrototypeOf(z);
            if (typeof z != "function" || z === f || j !== f)
                return j;
            var C = z.prototype
              , S = C && Object.getPrototypeOf(C);
            if (S == null || S === Object.prototype)
                return j;
            var ee = S.constructor;
            return typeof ee != "function" || ee === z ? j : ee;
        }
        function K() {
            var z = {}
              , j = []
              , C = (function() {
                function ce(ye, pe, Ye) {
                    (this._index = 0),
                    (this._keys = ye),
                    (this._values = pe),
                    (this._selector = Ye);
                }
                return ((ce.prototype["@@iterator"] = function() {
                    return this;
                }
                ),
                (ce.prototype[a] = function() {
                    return this;
                }
                ),
                (ce.prototype.next = function() {
                    var ye = this._index;
                    if (ye >= 0 && ye < this._keys.length) {
                        var pe = this._selector(this._keys[ye], this._values[ye]);
                        return (ye + 1 >= this._keys.length ? ((this._index = -1),
                        (this._keys = j),
                        (this._values = j)) : this._index++,
                        {
                            value: pe,
                            done: !1
                        });
                    }
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                ),
                (ce.prototype.throw = function(ye) {
                    throw ((this._index >= 0 && ((this._index = -1),
                    (this._keys = j),
                    (this._values = j)),
                    ye));
                }
                ),
                (ce.prototype.return = function(ye) {
                    return (this._index >= 0 && ((this._index = -1),
                    (this._keys = j),
                    (this._values = j)),
                    {
                        value: ye,
                        done: !0
                    });
                }
                ),
                ce);
            }
            )();
            return (function() {
                function ce() {
                    (this._keys = []),
                    (this._values = []),
                    (this._cacheKey = z),
                    (this._cacheIndex = -2);
                }
                return (Object.defineProperty(ce.prototype, "size", {
                    get: function() {
                        return this._keys.length;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (ce.prototype.has = function(ye) {
                    return this._find(ye, !1) >= 0;
                }
                ),
                (ce.prototype.get = function(ye) {
                    var pe = this._find(ye, !1);
                    return pe >= 0 ? this._values[pe] : void 0;
                }
                ),
                (ce.prototype.set = function(ye, pe) {
                    var Ye = this._find(ye, !0);
                    return (this._values[Ye] = pe),
                    this;
                }
                ),
                (ce.prototype.delete = function(ye) {
                    var pe = this._find(ye, !1);
                    if (pe >= 0) {
                        for (var Ye = this._keys.length, Ee = pe + 1; Ee < Ye; Ee++)
                            (this._keys[Ee - 1] = this._keys[Ee]),
                            (this._values[Ee - 1] = this._values[Ee]);
                        return (this._keys.length--,
                        this._values.length--,
                        ye === this._cacheKey && ((this._cacheKey = z),
                        (this._cacheIndex = -2)),
                        !0);
                    }
                    return !1;
                }
                ),
                (ce.prototype.clear = function() {
                    (this._keys.length = 0),
                    (this._values.length = 0),
                    (this._cacheKey = z),
                    (this._cacheIndex = -2);
                }
                ),
                (ce.prototype.keys = function() {
                    return new C(this._keys,this._values,S);
                }
                ),
                (ce.prototype.values = function() {
                    return new C(this._keys,this._values,ee);
                }
                ),
                (ce.prototype.entries = function() {
                    return new C(this._keys,this._values,be);
                }
                ),
                (ce.prototype["@@iterator"] = function() {
                    return this.entries();
                }
                ),
                (ce.prototype[a] = function() {
                    return this.entries();
                }
                ),
                (ce.prototype._find = function(ye, pe) {
                    return (this._cacheKey !== ye && (this._cacheIndex = this._keys.indexOf((this._cacheKey = ye))),
                    this._cacheIndex < 0 && pe && ((this._cacheIndex = this._keys.length),
                    this._keys.push(ye),
                    this._values.push(void 0)),
                    this._cacheIndex);
                }
                ),
                ce);
            }
            )();
            function S(ce, ye) {
                return ce;
            }
            function ee(ce, ye) {
                return ye;
            }
            function be(ce, ye) {
                return [ce, ye];
            }
        }
        function V() {
            return (function() {
                function z() {
                    this._map = new u();
                }
                return (Object.defineProperty(z.prototype, "size", {
                    get: function() {
                        return this._map.size;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (z.prototype.has = function(j) {
                    return this._map.has(j);
                }
                ),
                (z.prototype.add = function(j) {
                    return this._map.set(j, j),
                    this;
                }
                ),
                (z.prototype.delete = function(j) {
                    return this._map.delete(j);
                }
                ),
                (z.prototype.clear = function() {
                    this._map.clear();
                }
                ),
                (z.prototype.keys = function() {
                    return this._map.keys();
                }
                ),
                (z.prototype.values = function() {
                    return this._map.values();
                }
                ),
                (z.prototype.entries = function() {
                    return this._map.entries();
                }
                ),
                (z.prototype["@@iterator"] = function() {
                    return this.keys();
                }
                ),
                (z.prototype[a] = function() {
                    return this.keys();
                }
                ),
                z);
            }
            )();
        }
        function H() {
            var z = 16
              , j = l.create()
              , C = S();
            return (function() {
                function pe() {
                    this._key = S();
                }
                return ((pe.prototype.has = function(Ye) {
                    var Ee = ee(Ye, !1);
                    return Ee !== void 0 ? l.has(Ee, this._key) : !1;
                }
                ),
                (pe.prototype.get = function(Ye) {
                    var Ee = ee(Ye, !1);
                    return Ee !== void 0 ? l.get(Ee, this._key) : void 0;
                }
                ),
                (pe.prototype.set = function(Ye, Ee) {
                    var Qt = ee(Ye, !0);
                    return (Qt[this._key] = Ee),
                    this;
                }
                ),
                (pe.prototype.delete = function(Ye) {
                    var Ee = ee(Ye, !1);
                    return Ee !== void 0 ? delete Ee[this._key] : !1;
                }
                ),
                (pe.prototype.clear = function() {
                    this._key = S();
                }
                ),
                pe);
            }
            )();
            function S() {
                var pe;
                do
                    pe = "@@WeakMap@@" + ye();
                while (l.has(j, pe));
                return (j[pe] = !0),
                pe;
            }
            function ee(pe, Ye) {
                if (!r.call(pe, C)) {
                    if (!Ye)
                        return;
                    Object.defineProperty(pe, C, {
                        value: l.create()
                    });
                }
                return pe[C];
            }
            function be(pe, Ye) {
                for (var Ee = 0; Ee < Ye; ++Ee)
                    pe[Ee] = (Math.random() * 255) | 0;
                return pe;
            }
            function ce(pe) {
                return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(pe)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(pe)) : be(new Uint8Array(pe), pe) : be(new Array(pe), pe);
            }
            function ye() {
                var pe = ce(z);
                (pe[6] = (pe[6] & 79) | 64),
                (pe[8] = (pe[8] & 191) | 128);
                for (var Ye = "", Ee = 0; Ee < z; ++Ee) {
                    var Qt = pe[Ee];
                    (Ee === 4 || Ee === 6 || Ee === 8) && (Ye += "-"),
                    Qt < 16 && (Ye += "0"),
                    (Ye += Qt.toString(16).toLowerCase());
                }
                return Ye;
            }
        }
        function G(z) {
            return (z.__ = void 0),
            delete z.__,
            z;
        }
    });
}
)(M0 || (M0 = {}));
function bs(e, t) {
    const r = Object.create(null)
      , n = e.split(",");
    for (let o = 0; o < n.length; o++)
        r[n[o]] = !0;
    return t ? (o) => !!r[o.toLowerCase()] : (o) => !!r[o];
}
const b5 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
  , D5 = bs(b5)
  , M5 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , P5 = bs(M5);
function zu(e) {
    return !!e || e === "";
}
function Oo(e) {
    if (fe(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r]
              , o = Se(n) ? j5(n) : Oo(n);
            if (o)
                for (const a in o)
                    t[a] = o[a];
        }
        return t;
    } else {
        if (Se(e))
            return e;
        if (Ve(e))
            return e;
    }
}
const z5 = /;(?![^(]*\))/g
  , H5 = /:(.+)/;
function j5(e) {
    const t = {};
    return (e.split(z5).forEach( (r) => {
        if (r) {
            const n = r.split(H5);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
    }
    ),
    t);
}
function Ht(e) {
    let t = "";
    if (Se(e))
        t = e;
    else if (fe(e))
        for (let r = 0; r < e.length; r++) {
            const n = Ht(e[r]);
            n && (t += n + " ");
        }
    else if (Ve(e))
        for (const r in e)
            e[r] && (t += r + " ");
    return t.trim();
}
function YG(e) {
    if (!e)
        return null;
    let {class: t, style: r} = e;
    return t && !Se(t) && (e.class = Ht(t)),
    r && (e.style = Oo(r)),
    e;
}
function N5(e, t) {
    if (e.length !== t.length)
        return !1;
    let r = !0;
    for (let n = 0; r && n < e.length; n++)
        r = Wr(e[n], t[n]);
    return r;
}
function Wr(e, t) {
    if (e === t)
        return !0;
    let r = P0(e)
      , n = P0(t);
    if (r || n)
        return r && n ? e.getTime() === t.getTime() : !1;
    if (((r = fe(e)),
    (n = fe(t)),
    r || n))
        return r && n ? N5(e, t) : !1;
    if (((r = Ve(e)),
    (n = Ve(t)),
    r || n)) {
        if (!r || !n)
            return !1;
        const o = Object.keys(e).length
          , a = Object.keys(t).length;
        if (o !== a)
            return !1;
        for (const s in e) {
            const i = e.hasOwnProperty(s)
              , c = t.hasOwnProperty(s);
            if ((i && !c) || (!i && c) || !Wr(e[s], t[s]))
                return !1;
        }
    }
    return String(e) === String(t);
}
function Ds(e, t) {
    return e.findIndex( (r) => Wr(r, t));
}
const Hu = (e) => Se(e) ? e : e == null ? "" : fe(e) || (Ve(e) && (e.toString === Nu || !ve(e.toString))) ? JSON.stringify(e, ju, 2) : String(e)
  , ju = (e, t) => t && t.__v_isRef ? ju(e, t.value) : $n(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (r, [n,o]) => ((r[`${n} =>`] = o),
    r), {}),
} : Mn(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : Ve(t) && !fe(t) && !ko(t) ? String(t) : t
  , Xe = {}
  , _n = []
  , Xt = () => {}
  , E5 = () => !1
  , B5 = /^on[^a-z]/
  , xa = (e) => B5.test(e)
  , ac = (e) => e.startsWith("onUpdate:")
  , _e = Object.assign
  , sc = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
}
  , T5 = Object.prototype.hasOwnProperty
  , Ce = (e, t) => T5.call(e, t)
  , fe = Array.isArray
  , $n = (e) => Ms(e) === "[object Map]"
  , Mn = (e) => Ms(e) === "[object Set]"
  , P0 = (e) => e instanceof Date
  , ve = (e) => typeof e == "function"
  , Se = (e) => typeof e == "string"
  , ic = (e) => typeof e == "symbol"
  , Ve = (e) => e !== null && typeof e == "object"
  , cc = (e) => Ve(e) && ve(e.then) && ve(e.catch)
  , Nu = Object.prototype.toString
  , Ms = (e) => Nu.call(e)
  , C5 = (e) => Ms(e).slice(8, -1)
  , ko = (e) => Ms(e) === "[object Object]"
  , lc = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Uo = bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ps = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
}
  , G5 = /-(\w)/g
  , Ct = Ps( (e) => e.replace(G5, (t, r) => (r ? r.toUpperCase() : "")))
  , Y5 = /\B([A-Z])/g
  , sr = Ps( (e) => e.replace(Y5, "-$1").toLowerCase())
  , zs = Ps( (e) => e.charAt(0).toUpperCase() + e.slice(1))
  , Ja = Ps( (e) => (e ? `on${zs(e)}` : ""))
  , sa = (e, t) => !Object.is(e, t)
  , eo = (e, t) => {
    for (let r = 0; r < e.length; r++)
        e[r](t);
}
  , ts = (e, t, r) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: r
    });
}
  , Qr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
}
;
let z0;
const F5 = () => z0 || (z0 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Nt;
class Eu {
    constructor(t=!1) {
        (this.active = !0),
        (this.effects = []),
        (this.cleanups = []),
        !t && Nt && ((this.parent = Nt),
        (this.index = (Nt.scopes || (Nt.scopes = [])).push(this) - 1));
    }
    run(t) {
        if (this.active) {
            const r = Nt;
            try {
                return (Nt = this),
                t();
            } finally {
                Nt = r;
            }
        }
    }
    on() {
        Nt = this;
    }
    off() {
        Nt = this.parent;
    }
    stop(t) {
        if (this.active) {
            let r, n;
            for (r = 0,
            n = this.effects.length; r < n; r++)
                this.effects[r].stop();
            for (r = 0,
            n = this.cleanups.length; r < n; r++)
                this.cleanups[r]();
            if (this.scopes)
                for (r = 0,
                n = this.scopes.length; r < n; r++)
                    this.scopes[r].stop(!0);
            if (this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && ((this.parent.scopes[this.index] = o),
                (o.index = this.index));
            }
            this.active = !1;
        }
    }
}
function Oa(e) {
    return new Eu(e);
}
function Bu(e, t=Nt) {
    t && t.active && t.effects.push(e);
}
function Tu() {
    return Nt;
}
function Cu(e) {
    Nt && Nt.cleanups.push(e);
}
const uc = (e) => {
    const t = new Set(e);
    return (t.w = 0),
    (t.n = 0),
    t;
}
  , Gu = (e) => (e.w & Jr) > 0
  , Yu = (e) => (e.n & Jr) > 0
  , I5 = ({deps: e}) => {
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= Jr;
}
  , L5 = (e) => {
    const {deps: t} = e;
    if (t.length) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
            const o = t[n];
            Gu(o) && !Yu(o) ? o.delete(e) : (t[r++] = o),
            (o.w &= ~Jr),
            (o.n &= ~Jr);
        }
        t.length = r;
    }
}
  , i1 = new WeakMap();
let Lo = 0
  , Jr = 1;
const c1 = 30;
let or;
const yn = Symbol("")
  , l1 = Symbol("");
class Hs {
    constructor(t, r=null, n) {
        (this.fn = t),
        (this.scheduler = r),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        Bu(this, n);
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = or
          , r = Ur;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent;
        }
        try {
            return ((this.parent = or),
            (or = this),
            (Ur = !0),
            (Jr = 1 << ++Lo),
            Lo <= c1 ? I5(this) : H0(this),
            this.fn());
        } finally {
            Lo <= c1 && L5(this),
            (Jr = 1 << --Lo),
            (or = this.parent),
            (Ur = r),
            (this.parent = void 0);
        }
    }
    stop() {
        this.active && (H0(this),
        this.onStop && this.onStop(),
        (this.active = !1));
    }
}
function H0(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let r = 0; r < t.length; r++)
            t[r].delete(e);
        t.length = 0;
    }
}
function FG(e, t) {
    e.effect && (e = e.effect.fn);
    const r = new Hs(e);
    t && (_e(r, t),
    t.scope && Bu(r, t.scope)),
    (!t || !t.lazy) && r.run();
    const n = r.run.bind(r);
    return (n.effect = r),
    n;
}
function IG(e) {
    e.effect.stop();
}
let Ur = !0;
const Fu = [];
function Pn() {
    Fu.push(Ur),
    (Ur = !1);
}
function zn() {
    const e = Fu.pop();
    Ur = e === void 0 ? !0 : e;
}
function Gt(e, t, r) {
    if (Ur && or) {
        let n = i1.get(e);
        n || i1.set(e, (n = new Map()));
        let o = n.get(r);
        o || n.set(r, (o = uc())),
        Iu(o);
    }
}
function Iu(e, t) {
    let r = !1;
    Lo <= c1 ? Yu(e) || ((e.n |= Jr),
    (r = !Gu(e))) : (r = !e.has(or)),
    r && (e.add(or),
    or.deps.push(e));
}
function Ar(e, t, r, n, o, a) {
    const s = i1.get(e);
    if (!s)
        return;
    let i = [];
    if (t === "clear")
        i = [...s.values()];
    else if (r === "length" && fe(e))
        s.forEach( (c, l) => {
            (l === "length" || l >= n) && i.push(c);
        }
        );
    else
        switch ((r !== void 0 && i.push(s.get(r)),
        t)) {
        case "add":
            fe(e) ? lc(r) && i.push(s.get("length")) : (i.push(s.get(yn)),
            $n(e) && i.push(s.get(l1)));
            break;
        case "delete":
            fe(e) || (i.push(s.get(yn)),
            $n(e) && i.push(s.get(l1)));
            break;
        case "set":
            $n(e) && i.push(s.get(yn));
            break;
        }
    if (i.length === 1)
        i[0] && u1(i[0]);
    else {
        const c = [];
        for (const l of i)
            l && c.push(...l);
        u1(uc(c));
    }
}
function u1(e, t) {
    for (const r of fe(e) ? e : [...e])
        (r !== or || r.allowRecurse) && (r.scheduler ? r.scheduler() : r.run());
}
const R5 = bs("__proto__,__v_isRef,__isVue")
  , Lu = new Set(Object.getOwnPropertyNames(Symbol).map( (e) => Symbol[e]).filter(ic))
  , X5 = js()
  , Z5 = js(!1, !0)
  , k5 = js(!0)
  , U5 = js(!0, !0)
  , j0 = S5();
function S5() {
    const e = {};
    return (["includes", "indexOf", "lastIndexOf"].forEach( (t) => {
        e[t] = function(...r) {
            const n = Ge(this);
            for (let a = 0, s = this.length; a < s; a++)
                Gt(n, "get", a + "");
            const o = n[t](...r);
            return o === -1 || o === !1 ? n[t](...r.map(Ge)) : o;
        }
        ;
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach( (t) => {
        e[t] = function(...r) {
            Pn();
            const n = Ge(this)[t].apply(this, r);
            return zn(),
            n;
        }
        ;
    }
    ),
    e);
}
function js(e=!1, t=!1) {
    return function(n, o, a) {
        if (o === "__v_isReactive")
            return !e;
        if (o === "__v_isReadonly")
            return e;
        if (o === "__v_isShallow")
            return t;
        if (o === "__v_raw" && a === (e ? (t ? Wu : Su) : t ? Uu : ku).get(n))
            return n;
        const s = fe(n);
        if (!e && s && Ce(j0, o))
            return Reflect.get(j0, o, a);
        const i = Reflect.get(n, o, a);
        return (ic(o) ? Lu.has(o) : R5(o)) || (e || Gt(n, "get", o),
        t) ? i : Qe(i) ? !s || !lc(o) ? i.value : i : Ve(i) ? e ? dc(i) : Ao(i) : i;
    }
    ;
}
const W5 = Ru()
  , Q5 = Ru(!0);
function Ru(e=!1) {
    return function(r, n, o, a) {
        let s = r[n];
        if (ia(s) && Qe(s) && !Qe(o))
            return !1;
        if (!e && !ia(o) && (Ju(o) || ((o = Ge(o)),
        (s = Ge(s))),
        !fe(r) && Qe(s) && !Qe(o)))
            return (s.value = o),
            !0;
        const i = fe(r) && lc(n) ? Number(n) < r.length : Ce(r, n)
          , c = Reflect.set(r, n, o, a);
        return (r === Ge(a) && (i ? sa(o, s) && Ar(r, "set", n, o) : Ar(r, "add", n, o)),
        c);
    }
    ;
}
function J5(e, t) {
    const r = Ce(e, t);
    e[t];
    const n = Reflect.deleteProperty(e, t);
    return n && r && Ar(e, "delete", t, void 0),
    n;
}
function V5(e, t) {
    const r = Reflect.has(e, t);
    return (!ic(t) || !Lu.has(t)) && Gt(e, "has", t),
    r;
}
function q5(e) {
    return Gt(e, "iterate", fe(e) ? "length" : yn),
    Reflect.ownKeys(e);
}
const Xu = {
    get: X5,
    set: W5,
    deleteProperty: J5,
    has: V5,
    ownKeys: q5
}
  , Zu = {
    get: k5,
    set(e, t) {
        return !0;
    },
    deleteProperty(e, t) {
        return !0;
    },
}
  , K5 = _e({}, Xu, {
    get: Z5,
    set: Q5
})
  , _5 = _e({}, Zu, {
    get: U5
})
  , fc = (e) => e
  , Ns = (e) => Reflect.getPrototypeOf(e);
function Ca(e, t, r=!1, n=!1) {
    e = e.__v_raw;
    const o = Ge(e)
      , a = Ge(t);
    t !== a && !r && Gt(o, "get", t),
    !r && Gt(o, "get", a);
    const {has: s} = Ns(o)
      , i = n ? fc : r ? pc : ca;
    if (s.call(o, t))
        return i(e.get(t));
    if (s.call(o, a))
        return i(e.get(a));
    e !== o && e.get(t);
}
function Ga(e, t=!1) {
    const r = this.__v_raw
      , n = Ge(r)
      , o = Ge(e);
    return (e !== o && !t && Gt(n, "has", e),
    !t && Gt(n, "has", o),
    e === o ? r.has(e) : r.has(e) || r.has(o));
}
function Ya(e, t=!1) {
    return ((e = e.__v_raw),
    !t && Gt(Ge(e), "iterate", yn),
    Reflect.get(e, "size", e));
}
function N0(e) {
    e = Ge(e);
    const t = Ge(this);
    return Ns(t).has.call(t, e) || (t.add(e),
    Ar(t, "add", e, e)),
    this;
}
function E0(e, t) {
    t = Ge(t);
    const r = Ge(this)
      , {has: n, get: o} = Ns(r);
    let a = n.call(r, e);
    a || ((e = Ge(e)),
    (a = n.call(r, e)));
    const s = o.call(r, e);
    return (r.set(e, t),
    a ? sa(t, s) && Ar(r, "set", e, t) : Ar(r, "add", e, t),
    this);
}
function B0(e) {
    const t = Ge(this)
      , {has: r, get: n} = Ns(t);
    let o = r.call(t, e);
    o || ((e = Ge(e)),
    (o = r.call(t, e))),
    n && n.call(t, e);
    const a = t.delete(e);
    return o && Ar(t, "delete", e, void 0),
    a;
}
function T0() {
    const e = Ge(this)
      , t = e.size !== 0
      , r = e.clear();
    return t && Ar(e, "clear", void 0, void 0),
    r;
}
function Fa(e, t) {
    return function(n, o) {
        const a = this
          , s = a.__v_raw
          , i = Ge(s)
          , c = t ? fc : e ? pc : ca;
        return (!e && Gt(i, "iterate", yn),
        s.forEach( (l, f) => n.call(o, c(l), c(f), a)));
    }
    ;
}
function Ia(e, t, r) {
    return function(...n) {
        const o = this.__v_raw
          , a = Ge(o)
          , s = $n(a)
          , i = e === "entries" || (e === Symbol.iterator && s)
          , c = e === "keys" && s
          , l = o[e](...n)
          , f = r ? fc : t ? pc : ca;
        return (!t && Gt(a, "iterate", c ? l1 : yn),
        {
            next() {
                const {value: d, done: u} = l.next();
                return u ? {
                    value: d,
                    done: u
                } : {
                    value: i ? [f(d[0]), f(d[1])] : f(d),
                    done: u
                };
            },
            [Symbol.iterator]() {
                return this;
            },
        });
    }
    ;
}
function Nr(e) {
    return function(...t) {
        return e === "delete" ? !1 : this;
    }
    ;
}
function $5() {
    const e = {
        get(a) {
            return Ca(this, a);
        },
        get size() {
            return Ya(this);
        },
        has: Ga,
        add: N0,
        set: E0,
        delete: B0,
        clear: T0,
        forEach: Fa(!1, !1),
    }
      , t = {
        get(a) {
            return Ca(this, a, !1, !0);
        },
        get size() {
            return Ya(this);
        },
        has: Ga,
        add: N0,
        set: E0,
        delete: B0,
        clear: T0,
        forEach: Fa(!1, !0),
    }
      , r = {
        get(a) {
            return Ca(this, a, !0);
        },
        get size() {
            return Ya(this, !0);
        },
        has(a) {
            return Ga.call(this, a, !0);
        },
        add: Nr("add"),
        set: Nr("set"),
        delete: Nr("delete"),
        clear: Nr("clear"),
        forEach: Fa(!0, !1),
    }
      , n = {
        get(a) {
            return Ca(this, a, !0, !0);
        },
        get size() {
            return Ya(this, !0);
        },
        has(a) {
            return Ga.call(this, a, !0);
        },
        add: Nr("add"),
        set: Nr("set"),
        delete: Nr("delete"),
        clear: Nr("clear"),
        forEach: Fa(!0, !0),
    };
    return (["keys", "values", "entries", Symbol.iterator].forEach( (a) => {
        (e[a] = Ia(a, !1, !1)),
        (r[a] = Ia(a, !0, !1)),
        (t[a] = Ia(a, !1, !0)),
        (n[a] = Ia(a, !0, !0));
    }
    ),
    [e, r, t, n]);
}
const [ed,td,rd,nd] = $5();
function Es(e, t) {
    const r = t ? (e ? nd : rd) : e ? td : ed;
    return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(Ce(r, o) && o in n ? r : n, o, a);
}
const od = {
    get: Es(!1, !1)
}
  , ad = {
    get: Es(!1, !0)
}
  , sd = {
    get: Es(!0, !1)
}
  , id = {
    get: Es(!0, !0)
}
  , ku = new WeakMap()
  , Uu = new WeakMap()
  , Su = new WeakMap()
  , Wu = new WeakMap();
function cd(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0;
    }
}
function ld(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : cd(C5(e));
}
function Ao(e) {
    return ia(e) ? e : Bs(e, !1, Xu, od, ku);
}
function Qu(e) {
    return Bs(e, !1, K5, ad, Uu);
}
function dc(e) {
    return Bs(e, !0, Zu, sd, Su);
}
function LG(e) {
    return Bs(e, !0, _5, id, Wu);
}
function Bs(e, t, r, n, o) {
    if (!Ve(e) || (e.__v_raw && !(t && e.__v_isReactive)))
        return e;
    const a = o.get(e);
    if (a)
        return a;
    const s = ld(e);
    if (s === 0)
        return e;
    const i = new Proxy(e,s === 2 ? n : r);
    return o.set(e, i),
    i;
}
function yr(e) {
    return ia(e) ? yr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ia(e) {
    return !!(e && e.__v_isReadonly);
}
function Ju(e) {
    return !!(e && e.__v_isShallow);
}
function Vu(e) {
    return yr(e) || ia(e);
}
function Ge(e) {
    const t = e && e.__v_raw;
    return t ? Ge(t) : e;
}
function io(e) {
    return ts(e, "__v_skip", !0),
    e;
}
const ca = (e) => (Ve(e) ? Ao(e) : e)
  , pc = (e) => (Ve(e) ? dc(e) : e);
function hc(e) {
    Ur && or && ((e = Ge(e)),
    Iu(e.dep || (e.dep = uc())));
}
function Ts(e, t) {
    (e = Ge(e)),
    e.dep && u1(e.dep);
}
function Qe(e) {
    return !!(e && e.__v_isRef === !0);
}
function le(e) {
    return qu(e, !1);
}
function Cs(e) {
    return qu(e, !0);
}
function qu(e, t) {
    return Qe(e) ? e : new ud(e,t);
}
class ud {
    constructor(t, r) {
        (this.__v_isShallow = r),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = r ? t : Ge(t)),
        (this._value = r ? t : ca(t));
    }
    get value() {
        return hc(this),
        this._value;
    }
    set value(t) {
        (t = this.__v_isShallow ? t : Ge(t)),
        sa(t, this._rawValue) && ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : ca(t)),
        Ts(this));
    }
}
function RG(e) {
    Ts(e);
}
function Oe(e) {
    return Qe(e) ? e.value : e;
}
const fd = {
    get: (e, t, r) => Oe(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
        const o = e[t];
        return Qe(o) && !Qe(r) ? ((o.value = r),
        !0) : Reflect.set(e, t, r, n);
    }
    ,
};
function Ku(e) {
    return yr(e) ? e : new Proxy(e,fd);
}
class dd {
    constructor(t) {
        (this.dep = void 0),
        (this.__v_isRef = !0);
        const {get: r, set: n} = t( () => hc(this), () => Ts(this));
        (this._get = r),
        (this._set = n);
    }
    get value() {
        return this._get();
    }
    set value(t) {
        this._set(t);
    }
}
function XG(e) {
    return new dd(e);
}
function _u(e) {
    const t = fe(e) ? new Array(e.length) : {};
    for (const r in e)
        t[r] = $u(e, r);
    return t;
}
class pd {
    constructor(t, r, n) {
        (this._object = t),
        (this._key = r),
        (this._defaultValue = n),
        (this.__v_isRef = !0);
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
        this._object[this._key] = t;
    }
}
function $u(e, t, r) {
    const n = e[t];
    return Qe(n) ? n : new pd(e,t,r);
}
class hd {
    constructor(t, r, n, o) {
        (this._setter = r),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._dirty = !0),
        (this.effect = new Hs(t, () => {
            this._dirty || ((this._dirty = !0),
            Ts(this));
        }
        )),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !o),
        (this.__v_isReadonly = n);
    }
    get value() {
        const t = Ge(this);
        return (hc(t),
        (t._dirty || !t._cacheable) && ((t._dirty = !1),
        (t._value = t.effect.run())),
        t._value);
    }
    set value(t) {
        this._setter(t);
    }
}
function md(e, t, r=!1) {
    let n, o;
    const a = ve(e);
    return (a ? ((n = e),
    (o = Xt)) : ((n = e.get),
    (o = e.set)),
    new hd(n,o,a || !o,r));
}
Promise.resolve();
const So = [];
function e4(e, ...t) {
    Pn();
    const r = So.length ? So[So.length - 1].component : null
      , n = r && r.appContext.config.warnHandler
      , o = gd();
    if (n)
        xr(n, r, 11, [e + t.join(""), r && r.proxy, o.map( ({vnode: a}) => `at <${F4(r, a.type)}>`).join(`
`), o, ]);
    else {
        const a = [`[Vue warn]: ${e}`, ...t];
        o.length && a.push(`
`, ...vd(o)),
        console.warn(...a);
    }
    zn();
}
function gd() {
    let e = So[So.length - 1];
    if (!e)
        return [];
    const t = [];
    for (; e; ) {
        const r = t[0];
        r && r.vnode === e ? r.recurseCount++ : t.push({
            vnode: e,
            recurseCount: 0
        });
        const n = e.component && e.component.parent;
        e = n && n.vnode;
    }
    return t;
}
function vd(e) {
    const t = [];
    return (e.forEach( (r, n) => {
        t.push(...(n === 0 ? [] : [`
`, ]), ...wd(r));
    }
    ),
    t);
}
function wd({vnode: e, recurseCount: t}) {
    const r = t > 0 ? `... (${t} recursive calls)` : ""
      , n = e.component ? e.component.parent == null : !1
      , o = ` at <${F4(e.component, e.type, n)}`
      , a = ">" + r;
    return e.props ? [o, ...yd(e.props), a] : [o + a];
}
function yd(e) {
    const t = []
      , r = Object.keys(e);
    return (r.slice(0, 3).forEach( (n) => {
        t.push(...t4(n, e[n]));
    }
    ),
    r.length > 3 && t.push(" ..."),
    t);
}
function t4(e, t, r) {
    return Se(t) ? ((t = JSON.stringify(t)),
    r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : Qe(t) ? ((t = t4(e, Ge(t.value), !0)),
    r ? t : [`${e}=Ref<`, t, ">"]) : ve(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : ((t = Ge(t)),
    r ? t : [`${e}=`, t]);
}
function xr(e, t, r, n) {
    let o;
    try {
        o = n ? e(...n) : e();
    } catch (a) {
        bo(a, t, r);
    }
    return o;
}
function Zt(e, t, r, n) {
    if (ve(e)) {
        const a = xr(e, t, r, n);
        return (a && cc(a) && a.catch( (s) => {
            bo(s, t, r);
        }
        ),
        a);
    }
    const o = [];
    for (let a = 0; a < e.length; a++)
        o.push(Zt(e[a], t, r, n));
    return o;
}
function bo(e, t, r, n=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const s = t.proxy
          , i = r;
        for (; a; ) {
            const l = a.ec;
            if (l) {
                for (let f = 0; f < l.length; f++)
                    if (l[f](e, s, i) === !1)
                        return;
            }
            a = a.parent;
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            xr(c, null, 10, [e, s, i]);
            return;
        }
    }
    xd(e, r, o, n);
}
function xd(e, t, r, n=!0) {
    console.error(e);
}
let rs = !1
  , f1 = !1;
const Bt = [];
let gr = 0;
const Wo = [];
let Ro = null
  , Sn = 0;
const Qo = [];
let Yr = null
  , Wn = 0;
const r4 = Promise.resolve();
let mc = null
  , d1 = null;
function br(e) {
    const t = mc || r4;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Od(e) {
    let t = gr + 1
      , r = Bt.length;
    for (; t < r; ) {
        const n = (t + r) >>> 1;
        la(Bt[n]) < e ? (t = n + 1) : (r = n);
    }
    return t;
}
function gc(e) {
    (!Bt.length || !Bt.includes(e, rs && e.allowRecurse ? gr + 1 : gr)) && e !== d1 && (e.id == null ? Bt.push(e) : Bt.splice(Od(e.id), 0, e),
    n4());
}
function n4() {
    !rs && !f1 && ((f1 = !0),
    (mc = r4.then(s4)));
}
function Ad(e) {
    const t = Bt.indexOf(e);
    t > gr && Bt.splice(t, 1);
}
function o4(e, t, r, n) {
    fe(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e),
    n4();
}
function bd(e) {
    o4(e, Ro, Wo, Sn);
}
function a4(e) {
    o4(e, Yr, Qo, Wn);
}
function vc(e, t=null) {
    if (Wo.length) {
        for (d1 = t,
        Ro = [...new Set(Wo)],
        Wo.length = 0,
        Sn = 0; Sn < Ro.length; Sn++)
            Ro[Sn]();
        (Ro = null),
        (Sn = 0),
        (d1 = null),
        vc(e, t);
    }
}
function ns(e) {
    if (Qo.length) {
        const t = [...new Set(Qo)];
        if (((Qo.length = 0),
        Yr)) {
            Yr.push(...t);
            return;
        }
        for (Yr = t,
        Yr.sort( (r, n) => la(r) - la(n)),
        Wn = 0; Wn < Yr.length; Wn++)
            Yr[Wn]();
        (Yr = null),
        (Wn = 0);
    }
}
const la = (e) => (e.id == null ? 1 / 0 : e.id);
function s4(e) {
    (f1 = !1),
    (rs = !0),
    vc(e),
    Bt.sort( (r, n) => la(r) - la(n));
    const t = Xt;
    try {
        for (gr = 0; gr < Bt.length; gr++) {
            const r = Bt[gr];
            r && r.active !== !1 && xr(r, null, 14);
        }
    } finally {
        (gr = 0),
        (Bt.length = 0),
        ns(),
        (rs = !1),
        (mc = null),
        (Bt.length || Wo.length || Qo.length) && s4(e);
    }
}
let Bo, La = [];
function Dd(e, t) {
    var r, n;
    (Bo = e),
    Bo ? ((Bo.enabled = !0),
    La.forEach( ({event: o, args: a}) => Bo.emit(o, ...a)),
    (La = [])) : typeof window < "u" && window.HTMLElement && !(!((n = (r = window.navigator) === null || r === void 0 ? void 0 : r.userAgent) === null || n === void 0) && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push( (a) => {
        Dd(a, t);
    }
    ),
    setTimeout( () => {
        Bo || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null),
        (La = []));
    }
    , 3e3)) : (La = []);
}
function Md(e, t, ...r) {
    const n = e.vnode.props || Xe;
    let o = r;
    const a = t.startsWith("update:")
      , s = a && t.slice(7);
    if (s && s in n) {
        const f = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: d, trim: u} = n[f] || Xe;
        u ? (o = r.map( (w) => w.trim())) : d && (o = r.map(Qr));
    }
    let i, c = n[(i = Ja(t))] || n[(i = Ja(Ct(t)))];
    !c && a && (c = n[(i = Ja(sr(t)))]),
    c && Zt(c, e, 6, o);
    const l = n[i + "Once"];
    if (l) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[i])
            return;
        (e.emitted[i] = !0),
        Zt(l, e, 6, o);
    }
}
function i4(e, t, r=!1) {
    const n = t.emitsCache
      , o = n.get(e);
    if (o !== void 0)
        return o;
    const a = e.emits;
    let s = {}
      , i = !1;
    if (!ve(e)) {
        const c = (l) => {
            const f = i4(l, t, !0);
            f && ((i = !0),
            _e(s, f));
        }
        ;
        !r && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c);
    }
    return !a && !i ? (n.set(e, null),
    null) : (fe(a) ? a.forEach( (c) => (s[c] = null)) : _e(s, a),
    n.set(e, s),
    s);
}
function Gs(e, t) {
    return !e || !xa(t) ? !1 : ((t = t.slice(2).replace(/Once$/, "")),
    Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, sr(t)) || Ce(e, t));
}
let Tt = null
  , Ys = null;
function ua(e) {
    const t = Tt;
    return (Tt = e),
    (Ys = (e && e.type.__scopeId) || null),
    t;
}
function ZG(e) {
    Ys = e;
}
function kG() {
    Ys = null;
}
const UG = (e) => xn;
function xn(e, t=Tt, r) {
    if (!t || e._n)
        return e;
    const n = (...o) => {
        n._d && W0(-1);
        const a = ua(t)
          , s = e(...o);
        return ua(a),
        n._d && W0(1),
        s;
    }
    ;
    return (n._n = !0),
    (n._c = !0),
    (n._d = !0),
    n;
}
function Va(e) {
    const {type: t, vnode: r, proxy: n, withProxy: o, props: a, propsOptions: [s], slots: i, attrs: c, emit: l, render: f, renderCache: d, data: u, setupState: w, ctx: y, inheritAttrs: x, } = e;
    let v, h;
    const m = ua(e);
    try {
        if (r.shapeFlag & 4) {
            const O = o || n;
            (v = Et(f.call(O, O, d, a, w, u, y))),
            (h = c);
        } else {
            const O = t;
            (v = Et(O.length > 1 ? O(a, {
                attrs: c,
                slots: i,
                emit: l
            }) : O(a, null))),
            (h = t.props ? c : zd(c));
        }
    } catch (O) {
        (qo.length = 0),
        bo(O, e, 1),
        (v = Ze(jt));
    }
    let A = v;
    if (h && x !== !1) {
        const O = Object.keys(h)
          , {shapeFlag: b} = A;
        O.length && b & 7 && (s && O.some(ac) && (h = Hd(h, s)),
        (A = Vr(A, h)));
    }
    return (r.dirs && (A.dirs = A.dirs ? A.dirs.concat(r.dirs) : r.dirs),
    r.transition && (A.transition = r.transition),
    (v = A),
    ua(m),
    v);
}
function Pd(e) {
    let t;
    for (let r = 0; r < e.length; r++) {
        const n = e[r];
        if (Dr(n)) {
            if (n.type !== jt || n.children === "v-if") {
                if (t)
                    return;
                t = n;
            }
        } else
            return;
    }
    return t;
}
const zd = (e) => {
    let t;
    for (const r in e)
        (r === "class" || r === "style" || xa(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
}
  , Hd = (e, t) => {
    const r = {};
    for (const n in e)
        (!ac(n) || !(n.slice(9)in t)) && (r[n] = e[n]);
    return r;
}
;
function jd(e, t, r) {
    const {props: n, children: o, component: a} = e
      , {props: s, children: i, patchFlag: c} = t
      , l = a.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (r && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return n ? C0(n, s, l) : !!s;
        if (c & 8) {
            const f = t.dynamicProps;
            for (let d = 0; d < f.length; d++) {
                const u = f[d];
                if (s[u] !== n[u] && !Gs(l, u))
                    return !0;
            }
        }
    } else
        return (o || i) && (!i || !i.$stable) ? !0 : n === s ? !1 : n ? s ? C0(n, s, l) : !0 : !!s;
    return !1;
}
function C0(e, t, r) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < n.length; o++) {
        const a = n[o];
        if (t[a] !== e[a] && !Gs(r, a))
            return !0;
    }
    return !1;
}
function wc({vnode: e, parent: t}, r) {
    for (; t && t.subTree === e; )
        ((e = t.vnode).el = r),
        (t = t.parent);
}
const Nd = (e) => e.__isSuspense
  , Ed = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, r, n, o, a, s, i, c, l) {
        e == null ? Bd(t, r, n, o, a, s, i, c, l) : Td(e, t, r, n, o, s, i, c, l);
    },
    hydrate: Cd,
    create: yc,
    normalize: Gd,
}
  , SG = Ed;
function fa(e, t) {
    const r = e.props && e.props[t];
    ve(r) && r();
}
function Bd(e, t, r, n, o, a, s, i, c) {
    const {p: l, o: {createElement: f}, } = c
      , d = f("div")
      , u = (e.suspense = yc(e, o, n, t, d, r, a, s, i, c));
    l(null, (u.pendingBranch = e.ssContent), d, null, n, u, a, s),
    u.deps > 0 ? (fa(e, "onPending"),
    fa(e, "onFallback"),
    l(null, e.ssFallback, t, r, n, null, a, s),
    to(u, e.ssFallback)) : u.resolve();
}
function Td(e, t, r, n, o, a, s, i, {p: c, um: l, o: {createElement: f}}) {
    const d = (t.suspense = e.suspense);
    (d.vnode = t),
    (t.el = e.el);
    const u = t.ssContent
      , w = t.ssFallback
      , {activeBranch: y, pendingBranch: x, isInFallback: v, isHydrating: h} = d;
    if (x)
        (d.pendingBranch = u),
        nr(u, x) ? (c(x, u, d.hiddenContainer, null, o, d, a, s, i),
        d.deps <= 0 ? d.resolve() : v && (c(y, w, r, n, o, null, a, s, i),
        to(d, w))) : (d.pendingId++,
        h ? ((d.isHydrating = !1),
        (d.activeBranch = x)) : l(x, o, d),
        (d.deps = 0),
        (d.effects.length = 0),
        (d.hiddenContainer = f("div")),
        v ? (c(null, u, d.hiddenContainer, null, o, d, a, s, i),
        d.deps <= 0 ? d.resolve() : (c(y, w, r, n, o, null, a, s, i),
        to(d, w))) : y && nr(u, y) ? (c(y, u, r, n, o, d, a, s, i),
        d.resolve(!0)) : (c(null, u, d.hiddenContainer, null, o, d, a, s, i),
        d.deps <= 0 && d.resolve()));
    else if (y && nr(u, y))
        c(y, u, r, n, o, d, a, s, i),
        to(d, u);
    else if ((fa(t, "onPending"),
    (d.pendingBranch = u),
    d.pendingId++,
    c(null, u, d.hiddenContainer, null, o, d, a, s, i),
    d.deps <= 0))
        d.resolve();
    else {
        const {timeout: m, pendingId: A} = d;
        m > 0 ? setTimeout( () => {
            d.pendingId === A && d.fallback(w);
        }
        , m) : m === 0 && d.fallback(w);
    }
}
function yc(e, t, r, n, o, a, s, i, c, l, f=!1) {
    const {p: d, m: u, um: w, n: y, o: {parentNode: x, remove: v}, } = l
      , h = Qr(e.props && e.props.timeout)
      , m = {
        vnode: e,
        parent: t,
        parentComponent: r,
        isSVG: s,
        container: n,
        hiddenContainer: o,
        anchor: a,
        deps: 0,
        pendingId: 0,
        timeout: typeof h == "number" ? h : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: f,
        isUnmounted: !1,
        effects: [],
        resolve(A=!1) {
            const {vnode: O, activeBranch: b, pendingBranch: D, pendingId: P, effects: Y, parentComponent: F, container: X, } = m;
            if (m.isHydrating)
                m.isHydrating = !1;
            else if (!A) {
                const U = b && D.transition && D.transition.mode === "out-in";
                U && (b.transition.afterLeave = () => {
                    P === m.pendingId && u(D, X, I, 0);
                }
                );
                let {anchor: I} = m;
                b && ((I = y(b)),
                w(b, F, m, !0)),
                U || u(D, X, I, 0);
            }
            to(m, D),
            (m.pendingBranch = null),
            (m.isInFallback = !1);
            let re = m.parent
              , k = !1;
            for (; re; ) {
                if (re.pendingBranch) {
                    re.effects.push(...Y),
                    (k = !0);
                    break;
                }
                re = re.parent;
            }
            k || a4(Y),
            (m.effects = []),
            fa(O, "onResolve");
        },
        fallback(A) {
            if (!m.pendingBranch)
                return;
            const {vnode: O, activeBranch: b, parentComponent: D, container: P, isSVG: Y, } = m;
            fa(O, "onFallback");
            const F = y(b)
              , X = () => {
                m.isInFallback && (d(null, A, P, F, D, null, Y, i, c),
                to(m, A));
            }
              , re = A.transition && A.transition.mode === "out-in";
            re && (b.transition.afterLeave = X),
            (m.isInFallback = !0),
            w(b, D, null, !0),
            re || X();
        },
        move(A, O, b) {
            m.activeBranch && u(m.activeBranch, A, O, b),
            (m.container = A);
        },
        next() {
            return m.activeBranch && y(m.activeBranch);
        },
        registerDep(A, O) {
            const b = !!m.pendingBranch;
            b && m.deps++;
            const D = A.vnode.el;
            A.asyncDep.catch( (P) => {
                bo(P, A, 0);
            }
            ).then( (P) => {
                if (A.isUnmounted || m.isUnmounted || m.pendingId !== A.suspenseId)
                    return;
                A.asyncResolved = !0;
                const {vnode: Y} = A;
                y1(A, P, !1),
                D && (Y.el = D);
                const F = !D && A.subTree.el;
                O(A, Y, x(D || A.subTree.el), D ? null : y(A.subTree), m, s, c),
                F && v(F),
                wc(A, Y.el),
                b && --m.deps === 0 && m.resolve();
            }
            );
        },
        unmount(A, O) {
            (m.isUnmounted = !0),
            m.activeBranch && w(m.activeBranch, r, A, O),
            m.pendingBranch && w(m.pendingBranch, r, A, O);
        },
    };
    return m;
}
function Cd(e, t, r, n, o, a, s, i, c) {
    const l = (t.suspense = yc(t, n, r, e.parentNode, document.createElement("div"), null, o, a, s, i, !0))
      , f = c(e, (l.pendingBranch = t.ssContent), r, l, a, s);
    return l.deps === 0 && l.resolve(),
    f;
}
function Gd(e) {
    const {shapeFlag: t, children: r} = e
      , n = t & 32;
    (e.ssContent = G0(n ? r.default : r)),
    (e.ssFallback = n ? G0(r.fallback) : Ze(jt));
}
function G0(e) {
    let t;
    if (ve(e)) {
        const r = uo && e._c;
        r && ((e._d = !1),
        we()),
        (e = e()),
        r && ((e._d = !0),
        (t = ir),
        P4());
    }
    return (fe(e) && (e = Pd(e)),
    (e = Et(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter( (r) => r !== e)),
    e);
}
function c4(e, t) {
    t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : a4(e);
}
function to(e, t) {
    e.activeBranch = t;
    const {vnode: r, parentComponent: n} = e
      , o = (r.el = t.el);
    n && n.subTree === r && ((n.vnode.el = o),
    wc(n, o));
}
function Jo(e, t) {
    if (rt) {
        let r = rt.provides;
        const n = rt.parent && rt.parent.provides;
        n === r && (r = rt.provides = Object.create(n)),
        (r[e] = t);
    }
}
function pt(e, t, r=!1) {
    const n = rt || Tt;
    if (n) {
        const o = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return r && ve(t) ? t.call(n.proxy) : t;
    }
}
function l4(e, t) {
    return Aa(e, null, t);
}
function Yd(e, t) {
    return Aa(e, null, {
        flush: "post"
    });
}
function WG(e, t) {
    return Aa(e, null, {
        flush: "sync"
    });
}
const Y0 = {};
function Je(e, t, r) {
    return Aa(e, t, r);
}
function Aa(e, t, {immediate: r, deep: n, flush: o, onTrack: a, onTrigger: s}=Xe) {
    const i = rt;
    let c, l = !1, f = !1;
    if ((Qe(e) ? ((c = () => e.value),
    (l = Ju(e))) : yr(e) ? ((c = () => e),
    (n = !0)) : fe(e) ? ((f = !0),
    (l = e.some(yr)),
    (c = () => e.map( (h) => {
        if (Qe(h))
            return h.value;
        if (yr(h))
            return wn(h);
        if (ve(h))
            return xr(h, i, 2);
    }
    ))) : ve(e) ? t ? (c = () => xr(e, i, 2)) : (c = () => {
        if (!(i && i.isUnmounted))
            return d && d(),
            Zt(e, i, 3, [u]);
    }
    ) : (c = Xt),
    t && n)) {
        const h = c;
        c = () => wn(h());
    }
    let d, u = (h) => {
        d = v.onStop = () => {
            xr(h, i, 4);
        }
        ;
    }
    ;
    if (fo)
        return (u = Xt),
        t ? r && Zt(t, i, 3, [c(), f ? [] : void 0, u]) : c(),
        Xt;
    let w = f ? [] : Y0;
    const y = () => {
        if (v.active)
            if (t) {
                const h = v.run();
                (n || l || (f ? h.some( (m, A) => sa(m, w[A])) : sa(h, w))) && (d && d(),
                Zt(t, i, 3, [h, w === Y0 ? void 0 : w, u]),
                (w = h));
            } else
                v.run();
    }
    ;
    y.allowRecurse = !!t;
    let x;
    o === "sync" ? (x = y) : o === "post" ? (x = () => ut(y, i && i.suspense)) : (x = () => {
        !i || i.isMounted ? bd(y) : y();
    }
    );
    const v = new Hs(c,x);
    return (t ? r ? y() : (w = v.run()) : o === "post" ? ut(v.run.bind(v), i && i.suspense) : v.run(),
    () => {
        v.stop(),
        i && i.scope && sc(i.scope.effects, v);
    }
    );
}
function Fd(e, t, r) {
    const n = this.proxy
      , o = Se(e) ? (e.includes(".") ? u4(n, e) : () => n[e]) : e.bind(n, n);
    let a;
    ve(t) ? (a = t) : ((a = t.handler),
    (r = t));
    const s = rt;
    qr(this);
    const i = Aa(o, a.bind(n), r);
    return s ? qr(s) : Sr(),
    i;
}
function u4(e, t) {
    const r = t.split(".");
    return () => {
        let n = e;
        for (let o = 0; o < r.length && n; o++)
            n = n[r[o]];
        return n;
    }
    ;
}
function wn(e, t) {
    if (!Ve(e) || e.__v_skip || ((t = t || new Set()),
    t.has(e)))
        return e;
    if ((t.add(e),
    Qe(e)))
        wn(e.value, t);
    else if (fe(e))
        for (let r = 0; r < e.length; r++)
            wn(e[r], t);
    else if (Mn(e) || $n(e))
        e.forEach( (r) => {
            wn(r, t);
        }
        );
    else if (ko(e))
        for (const r in e)
            wn(e[r], t);
    return e;
}
function f4() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (en( () => {
        e.isMounted = !0;
    }
    ),
    Ac( () => {
        e.isUnmounting = !0;
    }
    ),
    e);
}
const Rt = [Function, Array]
  , Id = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Rt,
        onEnter: Rt,
        onAfterEnter: Rt,
        onEnterCancelled: Rt,
        onBeforeLeave: Rt,
        onLeave: Rt,
        onAfterLeave: Rt,
        onLeaveCancelled: Rt,
        onBeforeAppear: Rt,
        onAppear: Rt,
        onAfterAppear: Rt,
        onAppearCancelled: Rt,
    },
    setup(e, {slots: t}) {
        const r = ct()
          , n = f4();
        let o;
        return () => {
            const a = t.default && xc(t.default(), !0);
            if (!a || !a.length)
                return;
            const s = Ge(e)
              , {mode: i} = s
              , c = a[0];
            if (n.isLeaving)
                return vi(c);
            const l = F0(c);
            if (!l)
                return vi(c);
            const f = da(l, s, n, r);
            co(l, f);
            const d = r.subTree
              , u = d && F0(d);
            let w = !1;
            const {getTransitionKey: y} = l.type;
            if (y) {
                const x = y();
                o === void 0 ? (o = x) : x !== o && ((o = x),
                (w = !0));
            }
            if (u && u.type !== jt && (!nr(l, u) || w)) {
                const x = da(u, s, n, r);
                if ((co(u, x),
                i === "out-in"))
                    return ((n.isLeaving = !0),
                    (x.afterLeave = () => {
                        (n.isLeaving = !1),
                        r.update();
                    }
                    ),
                    vi(c));
                i === "in-out" && l.type !== jt && (x.delayLeave = (v, h, m) => {
                    const A = p4(n, u);
                    (A[String(u.key)] = u),
                    (v._leaveCb = () => {
                        h(),
                        (v._leaveCb = void 0),
                        delete f.delayedLeave;
                    }
                    ),
                    (f.delayedLeave = m);
                }
                );
            }
            return c;
        }
        ;
    },
}
  , d4 = Id;
function p4(e, t) {
    const {leavingVNodes: r} = e;
    let n = r.get(t.type);
    return n || ((n = Object.create(null)),
    r.set(t.type, n)),
    n;
}
function da(e, t, r, n) {
    const {appear: o, mode: a, persisted: s=!1, onBeforeEnter: i, onEnter: c, onAfterEnter: l, onEnterCancelled: f, onBeforeLeave: d, onLeave: u, onAfterLeave: w, onLeaveCancelled: y, onBeforeAppear: x, onAppear: v, onAfterAppear: h, onAppearCancelled: m, } = t
      , A = String(e.key)
      , O = p4(r, e)
      , b = (P, Y) => {
        P && Zt(P, n, 9, Y);
    }
      , D = {
        mode: a,
        persisted: s,
        beforeEnter(P) {
            let Y = i;
            if (!r.isMounted)
                if (o)
                    Y = x || i;
                else
                    return;
            P._leaveCb && P._leaveCb(!0);
            const F = O[A];
            F && nr(e, F) && F.el._leaveCb && F.el._leaveCb(),
            b(Y, [P]);
        },
        enter(P) {
            let Y = c
              , F = l
              , X = f;
            if (!r.isMounted)
                if (o)
                    (Y = v || c),
                    (F = h || l),
                    (X = m || f);
                else
                    return;
            let re = !1;
            const k = (P._enterCb = (U) => {
                re || ((re = !0),
                U ? b(X, [P]) : b(F, [P]),
                D.delayedLeave && D.delayedLeave(),
                (P._enterCb = void 0));
            }
            );
            Y ? (Y(P, k),
            Y.length <= 1 && k()) : k();
        },
        leave(P, Y) {
            const F = String(e.key);
            if ((P._enterCb && P._enterCb(!0),
            r.isUnmounting))
                return Y();
            b(d, [P]);
            let X = !1;
            const re = (P._leaveCb = (k) => {
                X || ((X = !0),
                Y(),
                k ? b(y, [P]) : b(w, [P]),
                (P._leaveCb = void 0),
                O[F] === e && delete O[F]);
            }
            );
            (O[F] = e),
            u ? (u(P, re),
            u.length <= 1 && re()) : re();
        },
        clone(P) {
            return da(P, t, r, n);
        },
    };
    return D;
}
function vi(e) {
    if (ba(e))
        return (e = Vr(e)),
        (e.children = null),
        e;
}
function F0(e) {
    return ba(e) ? (e.children ? e.children[0] : void 0) : e;
}
function co(e, t) {
    e.shapeFlag & 6 && e.component ? co(e.component.subTree, t) : e.shapeFlag & 128 ? ((e.ssContent.transition = t.clone(e.ssContent)),
    (e.ssFallback.transition = t.clone(e.ssFallback))) : (e.transition = t);
}
function xc(e, t=!1, r) {
    let n = []
      , o = 0;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : a);
        s.type === st ? (s.patchFlag & 128 && o++,
        (n = n.concat(xc(s.children, t, i)))) : (t || s.type !== jt) && n.push(i != null ? Vr(s, {
            key: i
        }) : s);
    }
    if (o > 1)
        for (let a = 0; a < n.length; a++)
            n[a].patchFlag = -2;
    return n;
}
function xe(e) {
    return ve(e) ? {
        setup: e,
        name: e.name
    } : e;
}
const pa = (e) => !!e.type.__asyncLoader;
function QG(e) {
    ve(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: r, errorComponent: n, delay: o=200, timeout: a, suspensible: s=!0, onError: i, } = e;
    let c = null, l, f = 0;
    const d = () => (f++,
    (c = null),
    u())
      , u = () => {
        let w;
        return (c || (w = c = t().catch( (y) => {
            if (((y = y instanceof Error ? y : new Error(String(y))),
            i))
                return new Promise( (x, v) => {
                    i(y, () => x(d()), () => v(y), f + 1);
                }
                );
            throw y;
        }
        ).then( (y) => w !== c && c ? c : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default),
        (l = y),
        y))));
    }
    ;
    return xe({
        name: "AsyncComponentWrapper",
        __asyncLoader: u,
        get __asyncResolved() {
            return l;
        },
        setup() {
            const w = rt;
            if (l)
                return () => wi(l, w);
            const y = (m) => {
                (c = null),
                bo(m, w, 13, !n);
            }
            ;
            if ((s && w.suspense) || fo)
                return u().then( (m) => () => wi(m, w)).catch( (m) => (y(m),
                () => (n ? Ze(n, {
                    error: m
                }) : null)));
            const x = le(!1)
              , v = le()
              , h = le(!!o);
            return (o && setTimeout( () => {
                h.value = !1;
            }
            , o),
            a != null && setTimeout( () => {
                if (!x.value && !v.value) {
                    const m = new Error(`Async component timed out after ${a}ms.`);
                    y(m),
                    (v.value = m);
                }
            }
            , a),
            u().then( () => {
                (x.value = !0),
                w.parent && ba(w.parent.vnode) && gc(w.parent.update);
            }
            ).catch( (m) => {
                y(m),
                (v.value = m);
            }
            ),
            () => {
                if (x.value && l)
                    return wi(l, w);
                if (v.value && n)
                    return Ze(n, {
                        error: v.value
                    });
                if (r && !h.value)
                    return Ze(r);
            }
            );
        },
    });
}
function wi(e, {vnode: {ref: t, props: r, children: n}}) {
    const o = Ze(e, r, n);
    return (o.ref = t),
    o;
}
const ba = (e) => e.type.__isKeepAlive
  , Ld = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number],
    },
    setup(e, {slots: t}) {
        const r = ct()
          , n = r.ctx;
        if (!n.renderer)
            return t.default;
        const o = new Map()
          , a = new Set();
        let s = null;
        const i = r.suspense
          , {renderer: {p: c, m: l, um: f, o: {createElement: d}, }, } = n
          , u = d("div");
        (n.activate = (m, A, O, b, D) => {
            const P = m.component;
            l(m, A, O, 0, i),
            c(P.vnode, m, A, O, P, i, b, m.slotScopeIds, D),
            ut( () => {
                (P.isDeactivated = !1),
                P.a && eo(P.a);
                const Y = m.props && m.props.onVnodeMounted;
                Y && zt(Y, P.parent, m);
            }
            , i);
        }
        ),
        (n.deactivate = (m) => {
            const A = m.component;
            l(m, u, null, 1, i),
            ut( () => {
                A.da && eo(A.da);
                const O = m.props && m.props.onVnodeUnmounted;
                O && zt(O, A.parent, m),
                (A.isDeactivated = !0);
            }
            , i);
        }
        );
        function w(m) {
            yi(m),
            f(m, r, i, !0);
        }
        function y(m) {
            o.forEach( (A, O) => {
                const b = cs(A.type);
                b && (!m || !m(b)) && x(O);
            }
            );
        }
        function x(m) {
            const A = o.get(m);
            !s || A.type !== s.type ? w(A) : s && yi(s),
            o.delete(m),
            a.delete(m);
        }
        Je( () => [e.include, e.exclude], ([m,A]) => {
            m && y( (O) => Xo(m, O)),
            A && y( (O) => !Xo(A, O));
        }
        , {
            flush: "post",
            deep: !0
        });
        let v = null;
        const h = () => {
            v != null && o.set(v, xi(r.subTree));
        }
        ;
        return (en(h),
        Oc(h),
        Ac( () => {
            o.forEach( (m) => {
                const {subTree: A, suspense: O} = r
                  , b = xi(A);
                if (m.type === b.type) {
                    yi(b);
                    const D = b.component.da;
                    D && ut(D, O);
                    return;
                }
                w(m);
            }
            );
        }
        ),
        () => {
            if (((v = null),
            !t.default))
                return null;
            const m = t.default()
              , A = m[0];
            if (m.length > 1)
                return (s = null),
                m;
            if (!Dr(A) || (!(A.shapeFlag & 4) && !(A.shapeFlag & 128)))
                return (s = null),
                A;
            let O = xi(A);
            const b = O.type
              , D = cs(pa(O) ? O.type.__asyncResolved || {} : b)
              , {include: P, exclude: Y, max: F} = e;
            if ((P && (!D || !Xo(P, D))) || (Y && D && Xo(Y, D)))
                return (s = O),
                A;
            const X = O.key == null ? b : O.key
              , re = o.get(X);
            return (O.el && ((O = Vr(O)),
            A.shapeFlag & 128 && (A.ssContent = O)),
            (v = X),
            re ? ((O.el = re.el),
            (O.component = re.component),
            O.transition && co(O, O.transition),
            (O.shapeFlag |= 512),
            a.delete(X),
            a.add(X)) : (a.add(X),
            F && a.size > parseInt(F, 10) && x(a.values().next().value)),
            (O.shapeFlag |= 256),
            (s = O),
            A);
        }
        );
    },
}
  , JG = Ld;
function Xo(e, t) {
    return fe(e) ? e.some( (r) => Xo(r, t)) : Se(e) ? e.split(",").includes(t) : e.test ? e.test(t) : !1;
}
function Rd(e, t) {
    h4(e, "a", t);
}
function Xd(e, t) {
    h4(e, "da", t);
}
function h4(e, t, r=rt) {
    const n = e.__wdc || (e.__wdc = () => {
        let o = r;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent;
        }
        return e();
    }
    );
    if ((Fs(t, n, r),
    r)) {
        let o = r.parent;
        for (; o && o.parent; )
            ba(o.parent.vnode) && Zd(n, t, r, o),
            (o = o.parent);
    }
}
function Zd(e, t, r, n) {
    const o = Fs(t, e, n, !0);
    Da( () => {
        sc(n[t], o);
    }
    , r);
}
function yi(e) {
    let t = e.shapeFlag;
    t & 256 && (t -= 256),
    t & 512 && (t -= 512),
    (e.shapeFlag = t);
}
function xi(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
}
function Fs(e, t, r=rt, n=!1) {
    if (r) {
        const o = r[e] || (r[e] = [])
          , a = t.__weh || (t.__weh = (...s) => {
            if (r.isUnmounted)
                return;
            Pn(),
            qr(r);
            const i = Zt(t, r, e, s);
            return Sr(),
            zn(),
            i;
        }
        );
        return n ? o.unshift(a) : o.push(a),
        a;
    }
}
const Mr = (e) => (t, r=rt) => (!fo || e === "sp") && Fs(e, t, r)
  , kd = Mr("bm")
  , en = Mr("m")
  , Ud = Mr("bu")
  , Oc = Mr("u")
  , Ac = Mr("bum")
  , Da = Mr("um")
  , Sd = Mr("sp")
  , Wd = Mr("rtg")
  , Qd = Mr("rtc");
function Jd(e, t=rt) {
    Fs("ec", e, t);
}
let p1 = !0;
function Vd(e) {
    const t = g4(e)
      , r = e.proxy
      , n = e.ctx;
    (p1 = !1),
    t.beforeCreate && I0(t.beforeCreate, e, "bc");
    const {data: o, computed: a, methods: s, watch: i, provide: c, inject: l, created: f, beforeMount: d, mounted: u, beforeUpdate: w, updated: y, activated: x, deactivated: v, beforeDestroy: h, beforeUnmount: m, destroyed: A, unmounted: O, render: b, renderTracked: D, renderTriggered: P, errorCaptured: Y, serverPrefetch: F, expose: X, inheritAttrs: re, components: k, directives: U, filters: I, } = t;
    if ((l && qd(l, n, null, e.appContext.config.unwrapInjectedRef),
    s))
        for (const R in s) {
            const ne = s[R];
            ve(ne) && (n[R] = ne.bind(r));
        }
    if (o) {
        const R = o.call(r, r);
        Ve(R) && (e.data = Ao(R));
    }
    if (((p1 = !0),
    a))
        for (const R in a) {
            const ne = a[R]
              , ie = ve(ne) ? ne.bind(r, r) : ve(ne.get) ? ne.get.bind(r, r) : Xt
              , He = !ve(ne) && ve(ne.set) ? ne.set.bind(r) : Xt
              , he = Me({
                get: ie,
                set: He
            });
            Object.defineProperty(n, R, {
                enumerable: !0,
                configurable: !0,
                get: () => he.value,
                set: (ze) => (he.value = ze),
            });
        }
    if (i)
        for (const R in i)
            m4(i[R], n, r, R);
    if (c) {
        const R = ve(c) ? c.call(r) : c;
        Reflect.ownKeys(R).forEach( (ne) => {
            Jo(ne, R[ne]);
        }
        );
    }
    f && I0(f, e, "c");
    function J(R, ne) {
        fe(ne) ? ne.forEach( (ie) => R(ie.bind(r))) : ne && R(ne.bind(r));
    }
    if ((J(kd, d),
    J(en, u),
    J(Ud, w),
    J(Oc, y),
    J(Rd, x),
    J(Xd, v),
    J(Jd, Y),
    J(Qd, D),
    J(Wd, P),
    J(Ac, m),
    J(Da, O),
    J(Sd, F),
    fe(X)))
        if (X.length) {
            const R = e.exposed || (e.exposed = {});
            X.forEach( (ne) => {
                Object.defineProperty(R, ne, {
                    get: () => r[ne],
                    set: (ie) => (r[ne] = ie),
                });
            }
            );
        } else
            e.exposed || (e.exposed = {});
    b && e.render === Xt && (e.render = b),
    re != null && (e.inheritAttrs = re),
    k && (e.components = k),
    U && (e.directives = U);
}
function qd(e, t, r=Xt, n=!1) {
    fe(e) && (e = h1(e));
    for (const o in e) {
        const a = e[o];
        let s;
        Ve(a) ? "default"in a ? (s = pt(a.from || o, a.default, !0)) : (s = pt(a.from || o)) : (s = pt(a)),
        Qe(s) && n ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
        }) : (t[o] = s);
    }
}
function I0(e, t, r) {
    Zt(fe(e) ? e.map( (n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function m4(e, t, r, n) {
    const o = n.includes(".") ? u4(r, n) : () => r[n];
    if (Se(e)) {
        const a = t[e];
        ve(a) && Je(o, a);
    } else if (ve(e))
        Je(o, e.bind(r));
    else if (Ve(e))
        if (fe(e))
            e.forEach( (a) => m4(a, t, r, n));
        else {
            const a = ve(e.handler) ? e.handler.bind(r) : t[e.handler];
            ve(a) && Je(o, a, e);
        }
}
function g4(e) {
    const t = e.type
      , {mixins: r, extends: n} = t
      , {mixins: o, optionsCache: a, config: {optionMergeStrategies: s}, } = e.appContext
      , i = a.get(t);
    let c;
    return (i ? (c = i) : !o.length && !r && !n ? (c = t) : ((c = {}),
    o.length && o.forEach( (l) => os(c, l, s, !0)),
    os(c, t, s)),
    a.set(t, c),
    c);
}
function os(e, t, r, n=!1) {
    const {mixins: o, extends: a} = t;
    a && os(e, a, r, !0),
    o && o.forEach( (s) => os(e, s, r, !0));
    for (const s in t)
        if (!(n && s === "expose")) {
            const i = Kd[s] || (r && r[s]);
            e[s] = i ? i(e[s], t[s]) : t[s];
        }
    return e;
}
const Kd = {
    data: L0,
    props: dn,
    emits: dn,
    methods: dn,
    computed: dn,
    beforeCreate: Ot,
    created: Ot,
    beforeMount: Ot,
    mounted: Ot,
    beforeUpdate: Ot,
    updated: Ot,
    beforeDestroy: Ot,
    beforeUnmount: Ot,
    destroyed: Ot,
    unmounted: Ot,
    activated: Ot,
    deactivated: Ot,
    errorCaptured: Ot,
    serverPrefetch: Ot,
    components: dn,
    directives: dn,
    watch: $d,
    provide: L0,
    inject: _d,
};
function L0(e, t) {
    return t ? e ? function() {
        return _e(ve(e) ? e.call(this, this) : e, ve(t) ? t.call(this, this) : t);
    }
    : t : e;
}
function _d(e, t) {
    return dn(h1(e), h1(t));
}
function h1(e) {
    if (fe(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++)
            t[e[r]] = e[r];
        return t;
    }
    return e;
}
function Ot(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function dn(e, t) {
    return e ? _e(_e(Object.create(null), e), t) : t;
}
function $d(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const r = _e(Object.create(null), e);
    for (const n in t)
        r[n] = Ot(e[n], t[n]);
    return r;
}
function e7(e, t, r, n=!1) {
    const o = {}
      , a = {};
    ts(a, Is, 1),
    (e.propsDefaults = Object.create(null)),
    v4(e, t, o, a);
    for (const s in e.propsOptions[0])
        s in o || (o[s] = void 0);
    r ? (e.props = n ? o : Qu(o)) : e.type.props ? (e.props = o) : (e.props = a),
    (e.attrs = a);
}
function t7(e, t, r, n) {
    const {props: o, attrs: a, vnode: {patchFlag: s}, } = e
      , i = Ge(o)
      , [c] = e.propsOptions;
    let l = !1;
    if ((n || s > 0) && !(s & 16)) {
        if (s & 8) {
            const f = e.vnode.dynamicProps;
            for (let d = 0; d < f.length; d++) {
                let u = f[d];
                if (Gs(e.emitsOptions, u))
                    continue;
                const w = t[u];
                if (c)
                    if (Ce(a, u))
                        w !== a[u] && ((a[u] = w),
                        (l = !0));
                    else {
                        const y = Ct(u);
                        o[y] = m1(c, i, y, w, e, !1);
                    }
                else
                    w !== a[u] && ((a[u] = w),
                    (l = !0));
            }
        }
    } else {
        v4(e, t, o, a) && (l = !0);
        let f;
        for (const d in i)
            (!t || (!Ce(t, d) && ((f = sr(d)) === d || !Ce(t, f)))) && (c ? r && (r[d] !== void 0 || r[f] !== void 0) && (o[d] = m1(c, i, d, void 0, e, !0)) : delete o[d]);
        if (a !== i)
            for (const d in a)
                (!t || !Ce(t, d)) && (delete a[d],
                (l = !0));
    }
    l && Ar(e, "set", "$attrs");
}
function v4(e, t, r, n) {
    const [o,a] = e.propsOptions;
    let s = !1, i;
    if (t)
        for (let c in t) {
            if (Uo(c))
                continue;
            const l = t[c];
            let f;
            o && Ce(o, (f = Ct(c))) ? !a || !a.includes(f) ? (r[f] = l) : ((i || (i = {}))[f] = l) : Gs(e.emitsOptions, c) || ((!(c in n) || l !== n[c]) && ((n[c] = l),
            (s = !0)));
        }
    if (a) {
        const c = Ge(r)
          , l = i || Xe;
        for (let f = 0; f < a.length; f++) {
            const d = a[f];
            r[d] = m1(o, c, d, l[d], e, !Ce(l, d));
        }
    }
    return s;
}
function m1(e, t, r, n, o, a) {
    const s = e[r];
    if (s != null) {
        const i = Ce(s, "default");
        if (i && n === void 0) {
            const c = s.default;
            if (s.type !== Function && ve(c)) {
                const {propsDefaults: l} = o;
                r in l ? (n = l[r]) : (qr(o),
                (n = l[r] = c.call(null, t)),
                Sr());
            } else
                n = c;
        }
        s[0] && (a && !i ? (n = !1) : s[1] && (n === "" || n === sr(r)) && (n = !0));
    }
    return n;
}
function w4(e, t, r=!1) {
    const n = t.propsCache
      , o = n.get(e);
    if (o)
        return o;
    const a = e.props
      , s = {}
      , i = [];
    let c = !1;
    if (!ve(e)) {
        const f = (d) => {
            c = !0;
            const [u,w] = w4(d, t, !0);
            _e(s, u),
            w && i.push(...w);
        }
        ;
        !r && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f);
    }
    if (!a && !c)
        return n.set(e, _n),
        _n;
    if (fe(a))
        for (let f = 0; f < a.length; f++) {
            const d = Ct(a[f]);
            R0(d) && (s[d] = Xe);
        }
    else if (a)
        for (const f in a) {
            const d = Ct(f);
            if (R0(d)) {
                const u = a[f]
                  , w = (s[d] = fe(u) || ve(u) ? {
                    type: u
                } : u);
                if (w) {
                    const y = k0(Boolean, w.type)
                      , x = k0(String, w.type);
                    (w[0] = y > -1),
                    (w[1] = x < 0 || y < x),
                    (y > -1 || Ce(w, "default")) && i.push(d);
                }
            }
        }
    const l = [s, i];
    return n.set(e, l),
    l;
}
function R0(e) {
    return e[0] !== "$";
}
function X0(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? "null" : "";
}
function Z0(e, t) {
    return X0(e) === X0(t);
}
function k0(e, t) {
    return fe(t) ? t.findIndex( (r) => Z0(r, e)) : ve(t) && Z0(t, e) ? 0 : -1;
}
const y4 = (e) => e[0] === "_" || e === "$stable"
  , bc = (e) => (fe(e) ? e.map(Et) : [Et(e)])
  , r7 = (e, t, r) => {
    const n = xn( (...o) => bc(t(...o)), r);
    return (n._c = !1),
    n;
}
  , x4 = (e, t, r) => {
    const n = e._ctx;
    for (const o in e) {
        if (y4(o))
            continue;
        const a = e[o];
        if (ve(a))
            t[o] = r7(o, a, n);
        else if (a != null) {
            const s = bc(a);
            t[o] = () => s;
        }
    }
}
  , O4 = (e, t) => {
    const r = bc(t);
    e.slots.default = () => r;
}
  , n7 = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? ((e.slots = Ge(t)),
        ts(t, "_", r)) : x4(t, (e.slots = {}));
    } else
        (e.slots = {}),
        t && O4(e, t);
    ts(e.slots, Is, 1);
}
  , o7 = (e, t, r) => {
    const {vnode: n, slots: o} = e;
    let a = !0
      , s = Xe;
    if (n.shapeFlag & 32) {
        const i = t._;
        i ? r && i === 1 ? (a = !1) : (_e(o, t),
        !r && i === 1 && delete o._) : ((a = !t.$stable),
        x4(t, o)),
        (s = t);
    } else
        t && (O4(e, t),
        (s = {
            default: 1
        }));
    if (a)
        for (const i in o)
            !y4(i) && !(i in s) && delete o[i];
}
;
function A4(e, t) {
    const r = Tt;
    if (r === null)
        return e;
    const n = Rs(r) || r.proxy
      , o = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let[s,i,c,l=Xe] = t[a];
        ve(s) && (s = {
            mounted: s,
            updated: s
        }),
        s.deep && wn(i),
        o.push({
            dir: s,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: c,
            modifiers: l,
        });
    }
    return e;
}
function tr(e, t, r, n) {
    const o = e.dirs
      , a = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const i = o[s];
        a && (i.oldValue = a[s].value);
        let c = i.dir[n];
        c && (Pn(),
        Zt(c, r, 8, [e.el, i, e, t]),
        zn());
    }
}
function b4() {
    return {
        app: null,
        config: {
            isNativeTag: E5,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let a7 = 0;
function s7(e, t) {
    return function(n, o=null) {
        ve(n) || (n = Object.assign({}, n)),
        o != null && !Ve(o) && (o = null);
        const a = b4()
          , s = new Set();
        let i = !1;
        const c = (a.app = {
            _uid: a7++,
            _component: n,
            _props: o,
            _container: null,
            _context: a,
            _instance: null,
            version: j7,
            get config() {
                return a.config;
            },
            set config(l) {},
            use(l, ...f) {
                return (s.has(l) || (l && ve(l.install) ? (s.add(l),
                l.install(c, ...f)) : ve(l) && (s.add(l),
                l(c, ...f))),
                c);
            },
            mixin(l) {
                return a.mixins.includes(l) || a.mixins.push(l),
                c;
            },
            component(l, f) {
                return f ? ((a.components[l] = f),
                c) : a.components[l];
            },
            directive(l, f) {
                return f ? ((a.directives[l] = f),
                c) : a.directives[l];
            },
            mount(l, f, d) {
                if (!i) {
                    const u = Ze(n, o);
                    return ((u.appContext = a),
                    f && t ? t(u, l) : e(u, l, d),
                    (i = !0),
                    (c._container = l),
                    (l.__vue_app__ = c),
                    Rs(u.component) || u.component.proxy);
                }
            },
            unmount() {
                i && (e(null, c._container),
                delete c._container.__vue_app__);
            },
            provide(l, f) {
                return (a.provides[l] = f),
                c;
            },
        });
        return c;
    }
    ;
}
function as(e, t, r, n, o=!1) {
    if (fe(e)) {
        e.forEach( (u, w) => as(u, t && (fe(t) ? t[w] : t), r, n, o));
        return;
    }
    if (pa(n) && !o)
        return;
    const a = n.shapeFlag & 4 ? Rs(n.component) || n.component.proxy : n.el
      , s = o ? null : a
      , {i, r: c} = e
      , l = t && t.r
      , f = i.refs === Xe ? (i.refs = {}) : i.refs
      , d = i.setupState;
    if ((l != null && l !== c && (Se(l) ? ((f[l] = null),
    Ce(d, l) && (d[l] = null)) : Qe(l) && (l.value = null)),
    ve(c)))
        xr(c, i, 12, [s, f]);
    else {
        const u = Se(c)
          , w = Qe(c);
        if (u || w) {
            const y = () => {
                if (e.f) {
                    const x = u ? f[c] : c.value;
                    o ? fe(x) && sc(x, a) : fe(x) ? x.includes(a) || x.push(a) : u ? ((f[c] = [a]),
                    Ce(d, c) && (d[c] = f[c])) : ((c.value = [a]),
                    e.k && (f[e.k] = c.value));
                } else
                    u ? ((f[c] = s),
                    Ce(d, c) && (d[c] = s)) : Qe(c) && ((c.value = s),
                    e.k && (f[e.k] = s));
            }
            ;
            s ? ((y.id = -1),
            ut(y, r)) : y();
        }
    }
}
let Er = !1;
const Ra = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject"
  , Oi = (e) => e.nodeType === 8;
function i7(e) {
    const {mt: t, p: r, o: {patchProp: n, nextSibling: o, parentNode: a, remove: s, insert: i, createComment: c, }, } = e
      , l = (v, h) => {
        if (!h.hasChildNodes()) {
            r(null, v, h),
            ns();
            return;
        }
        (Er = !1),
        f(h.firstChild, v, null, null, null),
        ns(),
        Er && console.error("Hydration completed but contains mismatches.");
    }
      , f = (v, h, m, A, O, b=!1) => {
        const D = Oi(v) && v.data === "["
          , P = () => y(v, h, m, A, O, D)
          , {type: Y, ref: F, shapeFlag: X} = h
          , re = v.nodeType;
        h.el = v;
        let k = null;
        switch (Y) {
        case lo:
            re !== 3 ? (k = P()) : (v.data !== h.children && ((Er = !0),
            (v.data = h.children)),
            (k = o(v)));
            break;
        case jt:
            re !== 8 || D ? (k = P()) : (k = o(v));
            break;
        case ro:
            if (re !== 1)
                k = P();
            else {
                k = v;
                const U = !h.children.length;
                for (let I = 0; I < h.staticCount; I++)
                    U && (h.children += k.outerHTML),
                    I === h.staticCount - 1 && (h.anchor = k),
                    (k = o(k));
                return k;
            }
            break;
        case st:
            D ? (k = w(v, h, m, A, O, b)) : (k = P());
            break;
        default:
            if (X & 1)
                re !== 1 || h.type.toLowerCase() !== v.tagName.toLowerCase() ? (k = P()) : (k = d(v, h, m, A, O, b));
            else if (X & 6) {
                h.slotScopeIds = O;
                const U = a(v);
                if ((t(h, U, null, m, A, Ra(U), b),
                (k = D ? x(v) : o(v)),
                pa(h))) {
                    let I;
                    D ? ((I = Ze(st)),
                    (I.anchor = k ? k.previousSibling : U.lastChild)) : (I = v.nodeType === 3 ? j4("") : Ze("div")),
                    (I.el = v),
                    (h.component.subTree = I);
                }
            } else
                X & 64 ? re !== 8 ? (k = P()) : (k = h.type.hydrate(v, h, m, A, O, b, e, u)) : X & 128 && (k = h.type.hydrate(v, h, m, A, Ra(a(v)), O, b, e, f));
        }
        return F != null && as(F, null, A, h),
        k;
    }
      , d = (v, h, m, A, O, b) => {
        b = b || !!h.dynamicChildren;
        const {type: D, props: P, patchFlag: Y, shapeFlag: F, dirs: X} = h
          , re = (D === "input" && X) || D === "option";
        if (re || Y !== -1) {
            if ((X && tr(h, null, m, "created"),
            P))
                if (re || !b || Y & 48)
                    for (const U in P)
                        ((re && U.endsWith("value")) || (xa(U) && !Uo(U))) && n(v, U, null, P[U], !1, void 0, m);
                else
                    P.onClick && n(v, "onClick", null, P.onClick, !1, void 0, m);
            let k;
            if (((k = P && P.onVnodeBeforeMount) && zt(k, m, h),
            X && tr(h, null, m, "beforeMount"),
            ((k = P && P.onVnodeMounted) || X) && c4( () => {
                k && zt(k, m, h),
                X && tr(h, null, m, "mounted");
            }
            , A),
            F & 16 && !(P && (P.innerHTML || P.textContent)))) {
                let U = u(v.firstChild, h, v, m, A, O, b);
                for (; U; ) {
                    Er = !0;
                    const I = U;
                    (U = U.nextSibling),
                    s(I);
                }
            } else
                F & 8 && v.textContent !== h.children && ((Er = !0),
                (v.textContent = h.children));
        }
        return v.nextSibling;
    }
      , u = (v, h, m, A, O, b, D) => {
        D = D || !!h.dynamicChildren;
        const P = h.children
          , Y = P.length;
        for (let F = 0; F < Y; F++) {
            const X = D ? P[F] : (P[F] = Et(P[F]));
            if (v)
                v = f(v, X, A, O, b, D);
            else {
                if (X.type === lo && !X.children)
                    continue;
                (Er = !0),
                r(null, X, m, null, A, O, Ra(m), b);
            }
        }
        return v;
    }
      , w = (v, h, m, A, O, b) => {
        const {slotScopeIds: D} = h;
        D && (O = O ? O.concat(D) : D);
        const P = a(v)
          , Y = u(o(v), h, P, m, A, O, b);
        return Y && Oi(Y) && Y.data === "]" ? o((h.anchor = Y)) : ((Er = !0),
        i((h.anchor = c("]")), P, Y),
        Y);
    }
      , y = (v, h, m, A, O, b) => {
        if (((Er = !0),
        (h.el = null),
        b)) {
            const Y = x(v);
            for (; ; ) {
                const F = o(v);
                if (F && F !== Y)
                    s(F);
                else
                    break;
            }
        }
        const D = o(v)
          , P = a(v);
        return s(v),
        r(null, h, P, D, m, A, Ra(P), O),
        D;
    }
      , x = (v) => {
        let h = 0;
        for (; v; )
            if (((v = o(v)),
            v && Oi(v) && (v.data === "[" && h++,
            v.data === "]"))) {
                if (h === 0)
                    return o(v);
                h--;
            }
        return v;
    }
    ;
    return [l, f];
}
const ut = c4;
function c7(e) {
    return D4(e);
}
function l7(e) {
    return D4(e, i7);
}
function D4(e, t) {
    const r = F5();
    r.__VUE__ = !0;
    const {insert: n, remove: o, patchProp: a, createElement: s, createText: i, createComment: c, setText: l, setElementText: f, parentNode: d, nextSibling: u, setScopeId: w=Xt, cloneNode: y, insertStaticContent: x, } = e
      , v = (p, g, M, E=null, T=null, Z=null, $=!1, K=null, V=!!g.dynamicChildren) => {
        if (p === g)
            return;
        p && !nr(p, g) && ((E = ae(p)),
        Fe(p, T, Z, !0),
        (p = null)),
        g.patchFlag === -2 && ((V = !1),
        (g.dynamicChildren = null));
        const {type: H, ref: G, shapeFlag: z} = g;
        switch (H) {
        case lo:
            h(p, g, M, E);
            break;
        case jt:
            m(p, g, M, E);
            break;
        case ro:
            p == null && A(g, M, E, $);
            break;
        case st:
            U(p, g, M, E, T, Z, $, K, V);
            break;
        default:
            z & 1 ? D(p, g, M, E, T, Z, $, K, V) : z & 6 ? I(p, g, M, E, T, Z, $, K, V) : (z & 64 || z & 128) && H.process(p, g, M, E, T, Z, $, K, V, Pe);
        }
        G != null && T && as(G, p && p.ref, Z, g || p, !g);
    }
      , h = (p, g, M, E) => {
        if (p == null)
            n((g.el = i(g.children)), M, E);
        else {
            const T = (g.el = p.el);
            g.children !== p.children && l(T, g.children);
        }
    }
      , m = (p, g, M, E) => {
        p == null ? n((g.el = c(g.children || "")), M, E) : (g.el = p.el);
    }
      , A = (p, g, M, E) => {
        [p.el,p.anchor] = x(p.children, g, M, E, p.el, p.anchor);
    }
      , O = ({el: p, anchor: g}, M, E) => {
        let T;
        for (; p && p !== g; )
            (T = u(p)),
            n(p, M, E),
            (p = T);
        n(g, M, E);
    }
      , b = ({el: p, anchor: g}) => {
        let M;
        for (; p && p !== g; )
            (M = u(p)),
            o(p),
            (p = M);
        o(g);
    }
      , D = (p, g, M, E, T, Z, $, K, V) => {
        ($ = $ || g.type === "svg"),
        p == null ? P(g, M, E, T, Z, $, K, V) : X(p, g, T, Z, $, K, V);
    }
      , P = (p, g, M, E, T, Z, $, K) => {
        let V, H;
        const {type: G, props: z, shapeFlag: j, transition: C, patchFlag: S, dirs: ee, } = p;
        if (p.el && y !== void 0 && S === -1)
            V = p.el = y(p.el);
        else {
            if (((V = p.el = s(p.type, Z, z && z.is, z)),
            j & 8 ? f(V, p.children) : j & 16 && F(p.children, V, null, E, T, Z && G !== "foreignObject", $, K),
            ee && tr(p, null, E, "created"),
            z)) {
                for (const ce in z)
                    ce !== "value" && !Uo(ce) && a(V, ce, null, z[ce], Z, p.children, E, T, _);
                "value"in z && a(V, "value", null, z.value),
                (H = z.onVnodeBeforeMount) && zt(H, E, p);
            }
            Y(V, p, p.scopeId, $, E);
        }
        ee && tr(p, null, E, "beforeMount");
        const be = (!T || (T && !T.pendingBranch)) && C && !C.persisted;
        be && C.beforeEnter(V),
        n(V, g, M),
        ((H = z && z.onVnodeMounted) || be || ee) && ut( () => {
            H && zt(H, E, p),
            be && C.enter(V),
            ee && tr(p, null, E, "mounted");
        }
        , T);
    }
      , Y = (p, g, M, E, T) => {
        if ((M && w(p, M),
        E))
            for (let Z = 0; Z < E.length; Z++)
                w(p, E[Z]);
        if (T) {
            let Z = T.subTree;
            if (g === Z) {
                const $ = T.vnode;
                Y(p, $, $.scopeId, $.slotScopeIds, T.parent);
            }
        }
    }
      , F = (p, g, M, E, T, Z, $, K, V=0) => {
        for (let H = V; H < p.length; H++) {
            const G = (p[H] = K ? Fr(p[H]) : Et(p[H]));
            v(null, G, g, M, E, T, Z, $, K);
        }
    }
      , X = (p, g, M, E, T, Z, $) => {
        const K = (g.el = p.el);
        let {patchFlag: V, dynamicChildren: H, dirs: G} = g;
        V |= p.patchFlag & 16;
        const z = p.props || Xe
          , j = g.props || Xe;
        let C;
        M && cn(M, !1),
        (C = j.onVnodeBeforeUpdate) && zt(C, M, g, p),
        G && tr(g, p, M, "beforeUpdate"),
        M && cn(M, !0);
        const S = T && g.type !== "foreignObject";
        if ((H ? re(p.dynamicChildren, H, K, M, E, S, Z) : $ || ie(p, g, K, null, M, E, S, Z, !1),
        V > 0)) {
            if (V & 16)
                k(K, g, z, j, M, E, T);
            else if ((V & 2 && z.class !== j.class && a(K, "class", null, j.class, T),
            V & 4 && a(K, "style", z.style, j.style, T),
            V & 8)) {
                const ee = g.dynamicProps;
                for (let be = 0; be < ee.length; be++) {
                    const ce = ee[be]
                      , ye = z[ce]
                      , pe = j[ce];
                    (pe !== ye || ce === "value") && a(K, ce, ye, pe, T, p.children, M, E, _);
                }
            }
            V & 1 && p.children !== g.children && f(K, g.children);
        } else
            !$ && H == null && k(K, g, z, j, M, E, T);
        ((C = j.onVnodeUpdated) || G) && ut( () => {
            C && zt(C, M, g, p),
            G && tr(g, p, M, "updated");
        }
        , E);
    }
      , re = (p, g, M, E, T, Z, $) => {
        for (let K = 0; K < g.length; K++) {
            const V = p[K]
              , H = g[K]
              , G = V.el && (V.type === st || !nr(V, H) || V.shapeFlag & 70) ? d(V.el) : M;
            v(V, H, G, null, E, T, Z, $, !0);
        }
    }
      , k = (p, g, M, E, T, Z, $) => {
        if (M !== E) {
            for (const K in E) {
                if (Uo(K))
                    continue;
                const V = E[K]
                  , H = M[K];
                V !== H && K !== "value" && a(p, K, H, V, $, g.children, T, Z, _);
            }
            if (M !== Xe)
                for (const K in M)
                    !Uo(K) && !(K in E) && a(p, K, M[K], null, $, g.children, T, Z, _);
            "value"in E && a(p, "value", M.value, E.value);
        }
    }
      , U = (p, g, M, E, T, Z, $, K, V) => {
        const H = (g.el = p ? p.el : i(""))
          , G = (g.anchor = p ? p.anchor : i(""));
        let {patchFlag: z, dynamicChildren: j, slotScopeIds: C} = g;
        C && (K = K ? K.concat(C) : C),
        p == null ? (n(H, M, E),
        n(G, M, E),
        F(g.children, M, G, T, Z, $, K, V)) : z > 0 && z & 64 && j && p.dynamicChildren ? (re(p.dynamicChildren, j, M, T, Z, $, K),
        (g.key != null || (T && g === T.subTree)) && Dc(p, g, !0)) : ie(p, g, M, G, T, Z, $, K, V);
    }
      , I = (p, g, M, E, T, Z, $, K, V) => {
        (g.slotScopeIds = K),
        p == null ? g.shapeFlag & 512 ? T.ctx.activate(g, M, E, $, V) : Q(g, M, E, T, Z, $, V) : J(p, g, V);
    }
      , Q = (p, g, M, E, T, Z, $) => {
        const K = (p.component = B4(p, E, T));
        if ((ba(p) && (K.ctx.renderer = Pe),
        C4(K),
        K.asyncDep)) {
            if ((T && T.registerDep(K, R),
            !p.el)) {
                const V = (K.subTree = Ze(jt));
                m(null, V, g, M);
            }
            return;
        }
        R(K, p, g, M, T, Z, $);
    }
      , J = (p, g, M) => {
        const E = (g.component = p.component);
        if (jd(p, g, M))
            if (E.asyncDep && !E.asyncResolved) {
                ne(E, g, M);
                return;
            } else
                (E.next = g),
                Ad(E.update),
                E.update();
        else
            (g.component = p.component),
            (g.el = p.el),
            (E.vnode = g);
    }
      , R = (p, g, M, E, T, Z, $) => {
        const K = () => {
            if (p.isMounted) {
                let {next: G, bu: z, u: j, parent: C, vnode: S} = p, ee = G, be;
                cn(p, !1),
                G ? ((G.el = S.el),
                ne(p, G, $)) : (G = S),
                z && eo(z),
                (be = G.props && G.props.onVnodeBeforeUpdate) && zt(be, C, G, S),
                cn(p, !0);
                const ce = Va(p)
                  , ye = p.subTree;
                (p.subTree = ce),
                v(ye, ce, d(ye.el), ae(ye), p, T, Z),
                (G.el = ce.el),
                ee === null && wc(p, ce.el),
                j && ut(j, T),
                (be = G.props && G.props.onVnodeUpdated) && ut( () => zt(be, C, G, S), T);
            } else {
                let G;
                const {el: z, props: j} = g
                  , {bm: C, m: S, parent: ee} = p
                  , be = pa(g);
                if ((cn(p, !1),
                C && eo(C),
                !be && (G = j && j.onVnodeBeforeMount) && zt(G, ee, g),
                cn(p, !0),
                z && ge)) {
                    const ce = () => {
                        (p.subTree = Va(p)),
                        ge(z, p.subTree, p, T, null);
                    }
                    ;
                    be ? g.type.__asyncLoader().then( () => !p.isUnmounted && ce()) : ce();
                } else {
                    const ce = (p.subTree = Va(p));
                    v(null, ce, M, E, p, T, Z),
                    (g.el = ce.el);
                }
                if ((S && ut(S, T),
                !be && (G = j && j.onVnodeMounted))) {
                    const ce = g;
                    ut( () => zt(G, ee, ce), T);
                }
                g.shapeFlag & 256 && p.a && ut(p.a, T),
                (p.isMounted = !0),
                (g = M = E = null);
            }
        }
          , V = (p.effect = new Hs(K, () => gc(p.update),p.scope))
          , H = (p.update = V.run.bind(V));
        (H.id = p.uid),
        cn(p, !0),
        H();
    }
      , ne = (p, g, M) => {
        g.component = p;
        const E = p.vnode.props;
        (p.vnode = g),
        (p.next = null),
        t7(p, g.props, E, M),
        o7(p, g.children, M),
        Pn(),
        vc(void 0, p.update),
        zn();
    }
      , ie = (p, g, M, E, T, Z, $, K, V=!1) => {
        const H = p && p.children
          , G = p ? p.shapeFlag : 0
          , z = g.children
          , {patchFlag: j, shapeFlag: C} = g;
        if (j > 0) {
            if (j & 128) {
                he(H, z, M, E, T, Z, $, K, V);
                return;
            } else if (j & 256) {
                He(H, z, M, E, T, Z, $, K, V);
                return;
            }
        }
        C & 8 ? (G & 16 && _(H, T, Z),
        z !== H && f(M, z)) : G & 16 ? C & 16 ? he(H, z, M, E, T, Z, $, K, V) : _(H, T, Z, !0) : (G & 8 && f(M, ""),
        C & 16 && F(z, M, E, T, Z, $, K, V));
    }
      , He = (p, g, M, E, T, Z, $, K, V) => {
        (p = p || _n),
        (g = g || _n);
        const H = p.length
          , G = g.length
          , z = Math.min(H, G);
        let j;
        for (j = 0; j < z; j++) {
            const C = (g[j] = V ? Fr(g[j]) : Et(g[j]));
            v(p[j], C, M, null, T, Z, $, K, V);
        }
        H > G ? _(p, T, Z, !0, !1, z) : F(g, M, E, T, Z, $, K, V, z);
    }
      , he = (p, g, M, E, T, Z, $, K, V) => {
        let H = 0;
        const G = g.length;
        let z = p.length - 1
          , j = G - 1;
        for (; H <= z && H <= j; ) {
            const C = p[H]
              , S = (g[H] = V ? Fr(g[H]) : Et(g[H]));
            if (nr(C, S))
                v(C, S, M, null, T, Z, $, K, V);
            else
                break;
            H++;
        }
        for (; H <= z && H <= j; ) {
            const C = p[z]
              , S = (g[j] = V ? Fr(g[j]) : Et(g[j]));
            if (nr(C, S))
                v(C, S, M, null, T, Z, $, K, V);
            else
                break;
            z--,
            j--;
        }
        if (H > z) {
            if (H <= j) {
                const C = j + 1
                  , S = C < G ? g[C].el : E;
                for (; H <= j; )
                    v(null, (g[H] = V ? Fr(g[H]) : Et(g[H])), M, S, T, Z, $, K, V),
                    H++;
            }
        } else if (H > j)
            for (; H <= z; )
                Fe(p[H], T, Z, !0),
                H++;
        else {
            const C = H
              , S = H
              , ee = new Map();
            for (H = S; H <= j; H++) {
                const mt = (g[H] = V ? Fr(g[H]) : Et(g[H]));
                mt.key != null && ee.set(mt.key, H);
            }
            let be, ce = 0;
            const ye = j - S + 1;
            let pe = !1
              , Ye = 0;
            const Ee = new Array(ye);
            for (H = 0; H < ye; H++)
                Ee[H] = 0;
            for (H = C; H <= z; H++) {
                const mt = p[H];
                if (ce >= ye) {
                    Fe(mt, T, Z, !0);
                    continue;
                }
                let _t;
                if (mt.key != null)
                    _t = ee.get(mt.key);
                else
                    for (be = S; be <= j; be++)
                        if (Ee[be - S] === 0 && nr(mt, g[be])) {
                            _t = be;
                            break;
                        }
                _t === void 0 ? Fe(mt, T, Z, !0) : ((Ee[_t - S] = H + 1),
                _t >= Ye ? (Ye = _t) : (pe = !0),
                v(mt, g[_t], M, null, T, Z, $, K, V),
                ce++);
            }
            const Qt = pe ? u7(Ee) : _n;
            for (be = Qt.length - 1,
            H = ye - 1; H >= 0; H--) {
                const mt = S + H
                  , _t = g[mt]
                  , D0 = mt + 1 < G ? g[mt + 1].el : E;
                Ee[H] === 0 ? v(null, _t, M, D0, T, Z, $, K, V) : pe && (be < 0 || H !== Qt[be] ? ze(_t, M, D0, 2) : be--);
            }
        }
    }
      , ze = (p, g, M, E, T=null) => {
        const {el: Z, type: $, transition: K, children: V, shapeFlag: H} = p;
        if (H & 6) {
            ze(p.component.subTree, g, M, E);
            return;
        }
        if (H & 128) {
            p.suspense.move(g, M, E);
            return;
        }
        if (H & 64) {
            $.move(p, g, M, Pe);
            return;
        }
        if ($ === st) {
            n(Z, g, M);
            for (let z = 0; z < V.length; z++)
                ze(V[z], g, M, E);
            n(p.anchor, g, M);
            return;
        }
        if ($ === ro) {
            O(p, g, M);
            return;
        }
        if (E !== 2 && H & 1 && K)
            if (E === 0)
                K.beforeEnter(Z),
                n(Z, g, M),
                ut( () => K.enter(Z), T);
            else {
                const {leave: z, delayLeave: j, afterLeave: C} = K
                  , S = () => n(Z, g, M)
                  , ee = () => {
                    z(Z, () => {
                        S(),
                        C && C();
                    }
                    );
                }
                ;
                j ? j(Z, S, ee) : ee();
            }
        else
            n(Z, g, M);
    }
      , Fe = (p, g, M, E=!1, T=!1) => {
        const {type: Z, props: $, ref: K, children: V, dynamicChildren: H, shapeFlag: G, patchFlag: z, dirs: j, } = p;
        if ((K != null && as(K, null, M, p, !0),
        G & 256)) {
            g.ctx.deactivate(p);
            return;
        }
        const C = G & 1 && j
          , S = !pa(p);
        let ee;
        if ((S && (ee = $ && $.onVnodeBeforeUnmount) && zt(ee, g, p),
        G & 6))
            oe(p.component, M, E);
        else {
            if (G & 128) {
                p.suspense.unmount(M, E);
                return;
            }
            C && tr(p, null, g, "beforeUnmount"),
            G & 64 ? p.type.remove(p, g, M, T, Pe, E) : H && (Z !== st || (z > 0 && z & 64)) ? _(H, g, M, !1, !0) : ((Z === st && z & 384) || (!T && G & 16)) && _(V, g, M),
            E && Te(p);
        }
        ((S && (ee = $ && $.onVnodeUnmounted)) || C) && ut( () => {
            ee && zt(ee, g, p),
            C && tr(p, null, g, "unmounted");
        }
        , M);
    }
      , Te = (p) => {
        const {type: g, el: M, anchor: E, transition: T} = p;
        if (g === st) {
            L(M, E);
            return;
        }
        if (g === ro) {
            b(p);
            return;
        }
        const Z = () => {
            o(M),
            T && !T.persisted && T.afterLeave && T.afterLeave();
        }
        ;
        if (p.shapeFlag & 1 && T && !T.persisted) {
            const {leave: $, delayLeave: K} = T
              , V = () => $(M, Z);
            K ? K(p.el, Z, V) : V();
        } else
            Z();
    }
      , L = (p, g) => {
        let M;
        for (; p !== g; )
            (M = u(p)),
            o(p),
            (p = M);
        o(g);
    }
      , oe = (p, g, M) => {
        const {bum: E, scope: T, update: Z, subTree: $, um: K} = p;
        E && eo(E),
        T.stop(),
        Z && ((Z.active = !1),
        Fe($, p, g, M)),
        K && ut(K, g),
        ut( () => {
            p.isUnmounted = !0;
        }
        , g),
        g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--,
        g.deps === 0 && g.resolve());
    }
      , _ = (p, g, M, E=!1, T=!1, Z=0) => {
        for (let $ = Z; $ < p.length; $++)
            Fe(p[$], g, M, E, T);
    }
      , ae = (p) => p.shapeFlag & 6 ? ae(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : u(p.anchor || p.el)
      , de = (p, g, M) => {
        p == null ? g._vnode && Fe(g._vnode, null, null, !0) : v(g._vnode || null, p, g, null, null, null, M),
        ns(),
        (g._vnode = p);
    }
      , Pe = {
        p: v,
        um: Fe,
        m: ze,
        r: Te,
        mt: Q,
        mc: F,
        pc: ie,
        pbc: re,
        n: ae,
        o: e,
    };
    let me, ge;
    return (t && ([me,ge] = t(Pe)),
    {
        render: de,
        hydrate: me,
        createApp: s7(de, me)
    });
}
function cn({effect: e, update: t}, r) {
    e.allowRecurse = t.allowRecurse = r;
}
function Dc(e, t, r=!1) {
    const n = e.children
      , o = t.children;
    if (fe(n) && fe(o))
        for (let a = 0; a < n.length; a++) {
            const s = n[a];
            let i = o[a];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && ((i = o[a] = Fr(o[a])),
            (i.el = s.el)),
            r || Dc(s, i));
        }
}
function u7(e) {
    const t = e.slice()
      , r = [0];
    let n, o, a, s, i;
    const c = e.length;
    for (n = 0; n < c; n++) {
        const l = e[n];
        if (l !== 0) {
            if (((o = r[r.length - 1]),
            e[o] < l)) {
                (t[n] = o),
                r.push(n);
                continue;
            }
            for (a = 0,
            s = r.length - 1; a < s; )
                (i = (a + s) >> 1),
                e[r[i]] < l ? (a = i + 1) : (s = i);
            l < e[r[a]] && (a > 0 && (t[n] = r[a - 1]),
            (r[a] = n));
        }
    }
    for (a = r.length,
    s = r[a - 1]; a-- > 0; )
        (r[a] = s),
        (s = t[s]);
    return r;
}
const f7 = (e) => e.__isTeleport
  , Vo = (e) => e && (e.disabled || e.disabled === "")
  , U0 = (e) => typeof SVGElement < "u" && e instanceof SVGElement
  , g1 = (e, t) => {
    const r = e && e.to;
    return Se(r) ? (t ? t(r) : null) : r;
}
  , d7 = {
    __isTeleport: !0,
    process(e, t, r, n, o, a, s, i, c, l) {
        const {mc: f, pc: d, pbc: u, o: {insert: w, querySelector: y, createText: x, createComment: v}, } = l
          , h = Vo(t.props);
        let {shapeFlag: m, children: A, dynamicChildren: O} = t;
        if (e == null) {
            const b = (t.el = x(""))
              , D = (t.anchor = x(""));
            w(b, r, n),
            w(D, r, n);
            const P = (t.target = g1(t.props, y))
              , Y = (t.targetAnchor = x(""));
            P && (w(Y, P),
            (s = s || U0(P)));
            const F = (X, re) => {
                m & 16 && f(A, X, re, o, a, s, i, c);
            }
            ;
            h ? F(r, D) : P && F(P, Y);
        } else {
            t.el = e.el;
            const b = (t.anchor = e.anchor)
              , D = (t.target = e.target)
              , P = (t.targetAnchor = e.targetAnchor)
              , Y = Vo(e.props)
              , F = Y ? r : D
              , X = Y ? b : P;
            if (((s = s || U0(D)),
            O ? (u(e.dynamicChildren, O, F, o, a, s, i),
            Dc(e, t, !0)) : c || d(e, t, F, X, o, a, s, i, !1),
            h))
                Y || Xa(t, r, b, l, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const re = (t.target = g1(t.props, y));
                re && Xa(t, re, null, l, 0);
            } else
                Y && Xa(t, D, P, l, 1);
        }
    },
    remove(e, t, r, n, {um: o, o: {remove: a}}, s) {
        const {shapeFlag: i, children: c, anchor: l, targetAnchor: f, target: d, props: u, } = e;
        if ((d && a(f),
        (s || !Vo(u)) && (a(l),
        i & 16)))
            for (let w = 0; w < c.length; w++) {
                const y = c[w];
                o(y, t, r, !0, !!y.dynamicChildren);
            }
    },
    move: Xa,
    hydrate: p7,
};
function Xa(e, t, r, {o: {insert: n}, m: o}, a=2) {
    a === 0 && n(e.targetAnchor, t, r);
    const {el: s, anchor: i, shapeFlag: c, children: l, props: f} = e
      , d = a === 2;
    if ((d && n(s, t, r),
    (!d || Vo(f)) && c & 16))
        for (let u = 0; u < l.length; u++)
            o(l[u], t, r, 2);
    d && n(i, t, r);
}
function p7(e, t, r, n, o, a, {o: {nextSibling: s, parentNode: i, querySelector: c}}, l) {
    const f = (t.target = g1(t.props, c));
    if (f) {
        const d = f._lpa || f.firstChild;
        t.shapeFlag & 16 && (Vo(t.props) ? ((t.anchor = l(s(e), t, i(e), r, n, o, a)),
        (t.targetAnchor = d)) : ((t.anchor = s(e)),
        (t.targetAnchor = l(d, t, f, r, n, o, a))),
        (f._lpa = t.targetAnchor && s(t.targetAnchor)));
    }
    return t.anchor && s(t.anchor);
}
const VG = d7
  , Mc = "components"
  , h7 = "directives";
function m7(e, t) {
    return Pc(Mc, e, !0, t) || e;
}
const M4 = Symbol();
function g7(e) {
    return Se(e) ? Pc(Mc, e, !1) || e : e || M4;
}
function qG(e) {
    return Pc(h7, e);
}
function Pc(e, t, r=!0, n=!1) {
    const o = Tt || rt;
    if (o) {
        const a = o.type;
        if (e === Mc) {
            const i = cs(a);
            if (i && (i === t || i === Ct(t) || i === zs(Ct(t))))
                return a;
        }
        const s = S0(o[e] || a[e], t) || S0(o.appContext[e], t);
        return !s && n ? a : s;
    }
}
function S0(e, t) {
    return e && (e[t] || e[Ct(t)] || e[zs(Ct(t))]);
}
const st = Symbol(void 0)
  , lo = Symbol(void 0)
  , jt = Symbol(void 0)
  , ro = Symbol(void 0)
  , qo = [];
let ir = null;
function we(e=!1) {
    qo.push((ir = e ? null : []));
}
function P4() {
    qo.pop(),
    (ir = qo[qo.length - 1] || null);
}
let uo = 1;
function W0(e) {
    uo += e;
}
function z4(e) {
    return ((e.dynamicChildren = uo > 0 ? ir || _n : null),
    P4(),
    uo > 0 && ir && ir.push(e),
    e);
}
function je(e, t, r, n, o, a) {
    return z4(Ae(e, t, r, n, o, a, !0));
}
function vr(e, t, r, n, o) {
    return z4(Ze(e, t, r, n, o, !0));
}
function Dr(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function nr(e, t) {
    return e.type === t.type && e.key === t.key;
}
function KG(e) {}
const Is = "__vInternal"
  , H4 = ({key: e}) => e ?? null
  , qa = ({ref: e, ref_key: t, ref_for: r}) => e != null ? Se(e) || Qe(e) || ve(e) ? {
    i: Tt,
    r: e,
    k: t,
    f: !!r
} : e : null;
function Ae(e, t=null, r=null, n=0, o=null, a=e === st ? 0 : 1, s=!1, i=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && H4(t),
        ref: t && qa(t),
        scopeId: Ys,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: n,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
    };
    return (i ? (zc(c, r),
    a & 128 && e.normalize(c)) : r && (c.shapeFlag |= Se(r) ? 8 : 16),
    uo > 0 && !s && ir && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ir.push(c),
    c);
}
const Ze = v7;
function v7(e, t=null, r=null, n=0, o=null, a=!1) {
    if (((!e || e === M4) && (e = jt),
    Dr(e))) {
        const i = Vr(e, t, !0);
        return r && zc(i, r),
        i;
    }
    if ((P7(e) && (e = e.__vccOpts),
    t)) {
        t = w7(t);
        let {class: i, style: c} = t;
        i && !Se(i) && (t.class = Ht(i)),
        Ve(c) && (Vu(c) && !fe(c) && (c = _e({}, c)),
        (t.style = Oo(c)));
    }
    const s = Se(e) ? 1 : Nd(e) ? 128 : f7(e) ? 64 : Ve(e) ? 4 : ve(e) ? 2 : 0;
    return Ae(e, t, r, n, o, s, a, !0);
}
function w7(e) {
    return e ? (Vu(e) || Is in e ? _e({}, e) : e) : null;
}
function Vr(e, t, r=!1) {
    const {props: n, ref: o, patchFlag: a, children: s} = e
      , i = t ? N4(n || {}, t) : n;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: i,
        key: i && H4(i),
        ref: t && t.ref ? r && o ? fe(o) ? o.concat(qa(t)) : [o, qa(t)] : qa(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== st ? (a === -1 ? 16 : a | 16) : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Vr(e.ssContent),
        ssFallback: e.ssFallback && Vr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
    };
}
function j4(e=" ", t=0) {
    return Ze(lo, null, e, t);
}
function _G(e, t) {
    const r = Ze(ro, null, e);
    return (r.staticCount = t),
    r;
}
function Zo(e="", t=!1) {
    return t ? (we(),
    vr(jt, null, e)) : Ze(jt, null, e);
}
function Et(e) {
    return e == null || typeof e == "boolean" ? Ze(jt) : fe(e) ? Ze(st, null, e.slice()) : typeof e == "object" ? Fr(e) : Ze(lo, null, String(e));
}
function Fr(e) {
    return e.el === null || e.memo ? e : Vr(e);
}
function zc(e, t) {
    let r = 0;
    const {shapeFlag: n} = e;
    if (t == null)
        t = null;
    else if (fe(t))
        r = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            zc(e, o()),
            o._c && (o._d = !0));
            return;
        } else {
            r = 32;
            const o = t._;
            !o && !(Is in t) ? (t._ctx = Tt) : o === 3 && Tt && (Tt.slots._ === 1 ? (t._ = 1) : ((t._ = 2),
            (e.patchFlag |= 1024)));
        }
    else
        ve(t) ? ((t = {
            default: t,
            _ctx: Tt
        }),
        (r = 32)) : ((t = String(t)),
        n & 64 ? ((r = 16),
        (t = [j4(t)])) : (r = 8));
    (e.children = t),
    (e.shapeFlag |= r);
}
function N4(...e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
        const n = e[r];
        for (const o in n)
            if (o === "class")
                t.class !== n.class && (t.class = Ht([t.class, n.class]));
            else if (o === "style")
                t.style = Oo([t.style, n.style]);
            else if (xa(o)) {
                const a = t[o]
                  , s = n[o];
                s && a !== s && !(fe(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
            } else
                o !== "" && (t[o] = n[o]);
    }
    return t;
}
function zt(e, t, r, n=null) {
    Zt(e, t, 7, [r, n]);
}
function $G(e, t, r, n) {
    let o;
    const a = r && r[n];
    if (fe(e) || Se(e)) {
        o = new Array(e.length);
        for (let s = 0, i = e.length; s < i; s++)
            o[s] = t(e[s], s, void 0, a && a[s]);
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let s = 0; s < e; s++)
            o[s] = t(s + 1, s, void 0, a && a[s]);
    } else if (Ve(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (s, i) => t(s, i, void 0, a && a[i]));
        else {
            const s = Object.keys(e);
            o = new Array(s.length);
            for (let i = 0, c = s.length; i < c; i++) {
                const l = s[i];
                o[i] = t(e[l], l, i, a && a[i]);
            }
        }
    else
        o = [];
    return r && (r[n] = o),
    o;
}
function eY(e, t) {
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (fe(n))
            for (let o = 0; o < n.length; o++)
                e[n[o].name] = n[o].fn;
        else
            n && (e[n.name] = n.fn);
    }
    return e;
}
function Ls(e, t, r={}, n, o) {
    if (Tt.isCE)
        return Ze("slot", t === "default" ? null : {
            name: t
        }, n && n());
    let a = e[t];
    a && a._c && (a._d = !1),
    we();
    const s = a && E4(a(r))
      , i = vr(st, {
        key: r.key || `_${t}`
    }, s || (n ? n() : []), s && e._ === 1 ? 64 : -2);
    return (!o && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    i);
}
function E4(e) {
    return e.some( (t) => Dr(t) ? !(t.type === jt || (t.type === st && !E4(t.children))) : !0) ? e : null;
}
function tY(e) {
    const t = {};
    for (const r in e)
        t[Ja(r)] = e[r];
    return t;
}
const v1 = (e) => (e ? (T4(e) ? Rs(e) || e.proxy : v1(e.parent)) : null)
  , ss = _e(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => v1(e.parent),
    $root: (e) => v1(e.root),
    $emit: (e) => e.emit,
    $options: (e) => g4(e),
    $forceUpdate: (e) => () => gc(e.update),
    $nextTick: (e) => br.bind(e.proxy),
    $watch: (e) => Fd.bind(e),
})
  , w1 = {
    get({_: e}, t) {
        const {ctx: r, setupState: n, data: o, props: a, accessCache: s, type: i, appContext: c, } = e;
        let l;
        if (t[0] !== "$") {
            const w = s[t];
            if (w !== void 0)
                switch (w) {
                case 1:
                    return n[t];
                case 2:
                    return o[t];
                case 4:
                    return r[t];
                case 3:
                    return a[t];
                }
            else {
                if (n !== Xe && Ce(n, t))
                    return (s[t] = 1),
                    n[t];
                if (o !== Xe && Ce(o, t))
                    return (s[t] = 2),
                    o[t];
                if ((l = e.propsOptions[0]) && Ce(l, t))
                    return (s[t] = 3),
                    a[t];
                if (r !== Xe && Ce(r, t))
                    return (s[t] = 4),
                    r[t];
                p1 && (s[t] = 0);
            }
        }
        const f = ss[t];
        let d, u;
        if (f)
            return t === "$attrs" && Gt(e, "get", t),
            f(e);
        if ((d = i.__cssModules) && (d = d[t]))
            return d;
        if (r !== Xe && Ce(r, t))
            return (s[t] = 4),
            r[t];
        if (((u = c.config.globalProperties),
        Ce(u, t)))
            return u[t];
    },
    set({_: e}, t, r) {
        const {data: n, setupState: o, ctx: a} = e;
        return o !== Xe && Ce(o, t) ? ((o[t] = r),
        !0) : n !== Xe && Ce(n, t) ? ((n[t] = r),
        !0) : Ce(e.props, t) || (t[0] === "$" && t.slice(1)in e) ? !1 : ((a[t] = r),
        !0);
    },
    has({_: {data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a, }, }, s) {
        let i;
        return (!!r[s] || (e !== Xe && Ce(e, s)) || (t !== Xe && Ce(t, s)) || ((i = a[0]) && Ce(i, s)) || Ce(n, s) || Ce(ss, s) || Ce(o.config.globalProperties, s));
    },
    defineProperty(e, t, r) {
        return (r.get != null ? (e.$.accessCache[t] = 0) : Ce(r, "value") && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r));
    },
}
  , y7 = _e({}, w1, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return w1.get(e, t, e);
    },
    has(e, t) {
        return t[0] !== "_" && !D5(t);
    },
})
  , x7 = b4();
let O7 = 0;
function B4(e, t, r) {
    const n = e.type
      , o = (t ? t.appContext : e.appContext) || x7
      , a = {
        uid: O7++,
        vnode: e,
        type: n,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Eu(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: w4(n, o),
        emitsOptions: i4(n, o),
        emit: null,
        emitted: null,
        propsDefaults: Xe,
        inheritAttrs: n.inheritAttrs,
        ctx: Xe,
        data: Xe,
        props: Xe,
        attrs: Xe,
        slots: Xe,
        refs: Xe,
        setupState: Xe,
        setupContext: null,
        suspense: r,
        suspenseId: r ? r.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
    };
    return ((a.ctx = {
        _: a
    }),
    (a.root = t ? t.root : a),
    (a.emit = Md.bind(null, a)),
    e.ce && e.ce(a),
    a);
}
let rt = null;
const ct = () => rt || Tt
  , qr = (e) => {
    (rt = e),
    e.scope.on();
}
  , Sr = () => {
    rt && rt.scope.off(),
    (rt = null);
}
;
function T4(e) {
    return e.vnode.shapeFlag & 4;
}
let fo = !1;
function C4(e, t=!1) {
    fo = t;
    const {props: r, children: n} = e.vnode
      , o = T4(e);
    e7(e, r, o, t),
    n7(e, n);
    const a = o ? A7(e, t) : void 0;
    return (fo = !1),
    a;
}
function A7(e, t) {
    const r = e.type;
    (e.accessCache = Object.create(null)),
    (e.proxy = io(new Proxy(e.ctx,w1)));
    const {setup: n} = r;
    if (n) {
        const o = (e.setupContext = n.length > 1 ? Y4(e) : null);
        qr(e),
        Pn();
        const a = xr(n, e, 0, [e.props, o]);
        if ((zn(),
        Sr(),
        cc(a))) {
            if ((a.then(Sr, Sr),
            t))
                return a.then( (s) => {
                    y1(e, s, t);
                }
                ).catch( (s) => {
                    bo(s, e, 0);
                }
                );
            e.asyncDep = a;
        } else
            y1(e, a, t);
    } else
        G4(e, t);
}
function y1(e, t, r) {
    ve(t) ? e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t) : Ve(t) && (e.setupState = Ku(t)),
    G4(e, r);
}
let is, x1;
function rY(e) {
    (is = e),
    (x1 = (t) => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,y7));
    }
    );
}
const nY = () => !is;
function G4(e, t, r) {
    const n = e.type;
    if (!e.render) {
        if (!t && is && !n.render) {
            const o = n.template;
            if (o) {
                const {isCustomElement: a, compilerOptions: s} = e.appContext.config
                  , {delimiters: i, compilerOptions: c} = n
                  , l = _e(_e({
                    isCustomElement: a,
                    delimiters: i
                }, s), c);
                n.render = is(o, l);
            }
        }
        (e.render = n.render || Xt),
        x1 && x1(e);
    }
    qr(e),
    Pn(),
    Vd(e),
    zn(),
    Sr();
}
function b7(e) {
    return new Proxy(e.attrs,{
        get(t, r) {
            return Gt(e, "get", "$attrs"),
            t[r];
        },
    });
}
function Y4(e) {
    const t = (n) => {
        e.exposed = n || {};
    }
    ;
    let r;
    return {
        get attrs() {
            return r || (r = b7(e));
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function Rs(e) {
    if (e.exposed)
        return (e.exposeProxy || (e.exposeProxy = new Proxy(Ku(io(e.exposed)),{
            get(t, r) {
                if (r in t)
                    return t[r];
                if (r in ss)
                    return ss[r](e);
            },
        })));
}
const D7 = /(?:^|[-_])(\w)/g
  , M7 = (e) => e.replace(D7, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function cs(e) {
    return (ve(e) && e.displayName) || e.name;
}
function F4(e, t, r=!1) {
    let n = cs(t);
    if (!n && t.__file) {
        const o = t.__file.match(/([^/\\]+)\.\w+$/);
        o && (n = o[1]);
    }
    if (!n && e && e.parent) {
        const o = (a) => {
            for (const s in a)
                if (a[s] === t)
                    return s;
        }
        ;
        n = o(e.components || e.parent.type.components) || o(e.appContext.components);
    }
    return n ? M7(n) : r ? "App" : "Anonymous";
}
function P7(e) {
    return ve(e) && "__vccOpts"in e;
}
const Me = (e, t) => md(e, t, fo);
function oY() {
    return null;
}
function aY() {
    return null;
}
function sY(e) {}
function iY(e, t) {
    return null;
}
function cY() {
    return I4().slots;
}
function lY() {
    return I4().attrs;
}
function I4() {
    const e = ct();
    return e.setupContext || (e.setupContext = Y4(e));
}
function uY(e, t) {
    const r = fe(e) ? e.reduce( (n, o) => ((n[o] = {}),
    n), {}) : e;
    for (const n in t) {
        const o = r[n];
        o ? fe(o) || ve(o) ? (r[n] = {
            type: o,
            default: t[n]
        }) : (o.default = t[n]) : o === null && (r[n] = {
            default: t[n]
        });
    }
    return r;
}
function fY(e, t) {
    const r = {};
    for (const n in e)
        t.includes(n) || Object.defineProperty(r, n, {
            enumerable: !0,
            get: () => e[n]
        });
    return r;
}
function dY(e) {
    const t = ct();
    let r = e();
    return (Sr(),
    cc(r) && (r = r.catch( (n) => {
        throw (qr(t),
        n);
    }
    )),
    [r, () => qr(t)]);
}
function Ma(e, t, r) {
    const n = arguments.length;
    return n === 2 ? Ve(t) && !fe(t) ? Dr(t) ? Ze(e, null, [t]) : Ze(e, t) : Ze(e, null, t) : (n > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : n === 3 && Dr(r) && (r = [r]),
    Ze(e, t, r));
}
const z7 = Symbol("")
  , pY = () => {
    {
        const e = pt(z7);
        return (e || e4("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),
        e);
    }
}
;
function hY() {}
function mY(e, t, r, n) {
    const o = r[n];
    if (o && H7(o, e))
        return o;
    const a = t();
    return (a.memo = e.slice()),
    (r[n] = a);
}
function H7(e, t) {
    const r = e.memo;
    if (r.length != t.length)
        return !1;
    for (let n = 0; n < r.length; n++)
        if (r[n] !== t[n])
            return !1;
    return uo > 0 && ir && ir.push(e),
    !0;
}
const j7 = "3.2.32"
  , N7 = {
    createComponentInstance: B4,
    setupComponent: C4,
    renderComponentRoot: Va,
    setCurrentRenderingInstance: ua,
    isVNode: Dr,
    normalizeVNode: Et,
}
  , gY = N7
  , vY = null
  , wY = null
  , E7 = "http://www.w3.org/2000/svg"
  , mn = typeof document < "u" ? document : null
  , Q0 = mn && mn.createElement("template")
  , B7 = {
    insert: (e, t, r) => {
        t.insertBefore(e, r || null);
    }
    ,
    remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
    }
    ,
    createElement: (e, t, r, n) => {
        const o = t ? mn.createElementNS(E7, e) : mn.createElement(e, r ? {
            is: r
        } : void 0);
        return (e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple),
        o);
    }
    ,
    createText: (e) => mn.createTextNode(e),
    createComment: (e) => mn.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t;
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t;
    }
    ,
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => mn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "");
    },
    cloneNode(e) {
        const t = e.cloneNode(!0);
        return "_value"in e && (t._value = e._value),
        t;
    },
    insertStaticContent(e, t, r, n, o, a) {
        const s = r ? r.previousSibling : t.lastChild;
        if (o && (o === a || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), r),
            !(o === a || !(o = o.nextSibling));
            )
                ;
        else {
            Q0.innerHTML = n ? `<svg>${e}</svg>` : e;
            const i = Q0.content;
            if (n) {
                const c = i.firstChild;
                for (; c.firstChild; )
                    i.appendChild(c.firstChild);
                i.removeChild(c);
            }
            t.insertBefore(i, r);
        }
        return [s ? s.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild, ];
    },
};
function T7(e, t, r) {
    const n = e._vtc;
    n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : (e.className = t);
}
function C7(e, t, r) {
    const n = e.style
      , o = Se(r);
    if (r && !o) {
        for (const a in r)
            O1(n, a, r[a]);
        if (t && !Se(t))
            for (const a in t)
                r[a] == null && O1(n, a, "");
    } else {
        const a = n.display;
        o ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"),
        "_vod"in e && (n.display = a);
    }
}
const J0 = /\s*!important$/;
function O1(e, t, r) {
    if (fe(r))
        r.forEach( (n) => O1(e, t, n));
    else if (t.startsWith("--"))
        e.setProperty(t, r);
    else {
        const n = G7(e, t);
        J0.test(r) ? e.setProperty(sr(n), r.replace(J0, ""), "important") : (e[n] = r);
    }
}
const V0 = ["Webkit", "Moz", "ms"]
  , Ai = {};
function G7(e, t) {
    const r = Ai[t];
    if (r)
        return r;
    let n = Ct(t);
    if (n !== "filter" && n in e)
        return (Ai[t] = n);
    n = zs(n);
    for (let o = 0; o < V0.length; o++) {
        const a = V0[o] + n;
        if (a in e)
            return (Ai[t] = a);
    }
    return t;
}
const q0 = "http://www.w3.org/1999/xlink";
function Y7(e, t, r, n, o) {
    if (n && t.startsWith("xlink:"))
        r == null ? e.removeAttributeNS(q0, t.slice(6, t.length)) : e.setAttributeNS(q0, t, r);
    else {
        const a = P5(t);
        r == null || (a && !zu(r)) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r);
    }
}
function F7(e, t, r, n, o, a, s) {
    if (t === "innerHTML" || t === "textContent") {
        n && s(n, o, a),
        (e[t] = r ?? "");
        return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = r;
        const i = r ?? "";
        (e.value !== i || e.tagName === "OPTION") && (e.value = i),
        r == null && e.removeAttribute(t);
        return;
    }
    if (r === "" || r == null) {
        const i = typeof e[t];
        if (i === "boolean") {
            e[t] = zu(r);
            return;
        } else if (r == null && i === "string") {
            (e[t] = ""),
            e.removeAttribute(t);
            return;
        } else if (i === "number") {
            try {
                e[t] = 0;
            } catch {}
            e.removeAttribute(t);
            return;
        }
    }
    try {
        e[t] = r;
    } catch {}
}
let ls = Date.now
  , L4 = !1;
if (typeof window < "u") {
    ls() > document.createEvent("Event").timeStamp && (ls = () => performance.now());
    const e = navigator.userAgent.match(/firefox\/(\d+)/i);
    L4 = !!(e && Number(e[1]) <= 53);
}
let A1 = 0;
const I7 = Promise.resolve()
  , L7 = () => {
    A1 = 0;
}
  , R7 = () => A1 || (I7.then(L7),
(A1 = ls()));
function wr(e, t, r, n) {
    e.addEventListener(t, r, n);
}
function X7(e, t, r, n) {
    e.removeEventListener(t, r, n);
}
function Z7(e, t, r, n, o=null) {
    const a = e._vei || (e._vei = {})
      , s = a[t];
    if (n && s)
        s.value = n;
    else {
        const [i,c] = k7(t);
        if (n) {
            const l = (a[t] = U7(n, o));
            wr(e, i, l, c);
        } else
            s && (X7(e, i, s, c),
            (a[t] = void 0));
    }
}
const K0 = /(?:Once|Passive|Capture)$/;
function k7(e) {
    let t;
    if (K0.test(e)) {
        t = {};
        let r;
        for (; (r = e.match(K0)); )
            (e = e.slice(0, e.length - r[0].length)),
            (t[r[0].toLowerCase()] = !0);
    }
    return [sr(e.slice(2)), t];
}
function U7(e, t) {
    const r = (n) => {
        const o = n.timeStamp || ls();
        (L4 || o >= r.attached - 1) && Zt(S7(n, r.value), t, 5, [n]);
    }
    ;
    return (r.value = e),
    (r.attached = R7()),
    r;
}
function S7(e, t) {
    if (fe(t)) {
        const r = e.stopImmediatePropagation;
        return ((e.stopImmediatePropagation = () => {
            r.call(e),
            (e._stopped = !0);
        }
        ),
        t.map( (n) => (o) => !o._stopped && n && n(o)));
    } else
        return t;
}
const _0 = /^on[a-z]/
  , W7 = (e, t, r, n, o=!1, a, s, i, c) => {
    t === "class" ? T7(e, n, o) : t === "style" ? C7(e, r, n) : xa(t) ? ac(t) || Z7(e, t, r, n, s) : (t[0] === "." ? ((t = t.slice(1)),
    !0) : t[0] === "^" ? ((t = t.slice(1)),
    !1) : Q7(e, t, n, o)) ? F7(e, t, n, a, s, i, c) : (t === "true-value" ? (e._trueValue = n) : t === "false-value" && (e._falseValue = n),
    Y7(e, t, n, o));
}
;
function Q7(e, t, r, n) {
    return n ? !!(t === "innerHTML" || t === "textContent" || (t in e && _0.test(t) && ve(r))) : t === "spellcheck" || t === "draggable" || t === "form" || (t === "list" && e.tagName === "INPUT") || (t === "type" && e.tagName === "TEXTAREA") || (_0.test(t) && Se(r)) ? !1 : t in e;
}
function J7(e, t) {
    const r = xe(e);
    class n extends Hc {
        constructor(a) {
            super(r, a, t);
        }
    }
    return (n.def = r),
    n;
}
const yY = (e) => J7(e, p6)
  , V7 = typeof HTMLElement < "u" ? HTMLElement : class {
}
;
class Hc extends V7 {
    constructor(t, r={}, n) {
        super(),
        (this._def = t),
        (this._props = r),
        (this._instance = null),
        (this._connected = !1),
        (this._resolved = !1),
        (this._numberProps = null),
        this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        (this._connected = !0),
        this._instance || this._resolveDef();
    }
    disconnectedCallback() {
        (this._connected = !1),
        br( () => {
            this._connected || (us(null, this.shadowRoot),
            (this._instance = null));
        }
        );
    }
    _resolveDef() {
        if (this._resolved)
            return;
        this._resolved = !0;
        for (let n = 0; n < this.attributes.length; n++)
            this._setAttr(this.attributes[n].name);
        new MutationObserver( (n) => {
            for (const o of n)
                this._setAttr(o.attributeName);
        }
        ).observe(this, {
            attributes: !0
        });
        const t = (n) => {
            const {props: o, styles: a} = n
              , s = !fe(o)
              , i = o ? (s ? Object.keys(o) : o) : [];
            let c;
            if (s)
                for (const l in this._props) {
                    const f = o[l];
                    (f === Number || (f && f.type === Number)) && ((this._props[l] = Qr(this._props[l])),
                    ((c || (c = Object.create(null)))[l] = !0));
                }
            this._numberProps = c;
            for (const l of Object.keys(this))
                l[0] !== "_" && this._setProp(l, this[l], !0, !1);
            for (const l of i.map(Ct))
                Object.defineProperty(this, l, {
                    get() {
                        return this._getProp(l);
                    },
                    set(f) {
                        this._setProp(l, f);
                    },
                });
            this._applyStyles(a),
            this._update();
        }
          , r = this._def.__asyncLoader;
        r ? r().then(t) : t(this._def);
    }
    _setAttr(t) {
        let r = this.getAttribute(t);
        this._numberProps && this._numberProps[t] && (r = Qr(r)),
        this._setProp(Ct(t), r, !1);
    }
    _getProp(t) {
        return this._props[t];
    }
    _setProp(t, r, n=!0, o=!0) {
        r !== this._props[t] && ((this._props[t] = r),
        o && this._instance && this._update(),
        n && (r === !0 ? this.setAttribute(sr(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(sr(t), r + "") : r || this.removeAttribute(sr(t))));
    }
    _update() {
        us(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const t = Ze(this._def, _e({}, this._props));
        return (this._instance || (t.ce = (r) => {
            (this._instance = r),
            (r.isCE = !0),
            (r.emit = (o, ...a) => {
                this.dispatchEvent(new CustomEvent(o,{
                    detail: a
                }));
            }
            );
            let n = this;
            for (; (n = n && (n.parentNode || n.host)); )
                if (n instanceof Hc) {
                    r.parent = n._instance;
                    break;
                }
        }
        ),
        t);
    }
    _applyStyles(t) {
        t && t.forEach( (r) => {
            const n = document.createElement("style");
            (n.textContent = r),
            this.shadowRoot.appendChild(n);
        }
        );
    }
}
function xY(e="$style") {
    {
        const t = ct();
        if (!t)
            return Xe;
        const r = t.type.__cssModules;
        if (!r)
            return Xe;
        const n = r[e];
        return n || Xe;
    }
}
function OY(e) {
    const t = ct();
    if (!t)
        return;
    const r = () => b1(t.subTree, e(t.proxy));
    Yd(r),
    en( () => {
        const n = new MutationObserver(r);
        n.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        Da( () => n.disconnect());
    }
    );
}
function b1(e, t) {
    if (e.shapeFlag & 128) {
        const r = e.suspense;
        (e = r.activeBranch),
        r.pendingBranch && !r.isHydrating && r.effects.push( () => {
            b1(r.activeBranch, t);
        }
        );
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        $0(e.el, t);
    else if (e.type === st)
        e.children.forEach( (r) => b1(r, t));
    else if (e.type === ro) {
        let {el: r, anchor: n} = e;
        for (; r && ($0(r, t),
        r !== n); )
            r = r.nextSibling;
    }
}
function $0(e, t) {
    if (e.nodeType === 1) {
        const r = e.style;
        for (const n in t)
            r.setProperty(`--${n}`, t[n]);
    }
}
const Br = "transition"
  , To = "animation"
  , Xs = (e, {slots: t}) => Ma(d4, X4(e), t);
Xs.displayName = "Transition";
const R4 = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
}
  , q7 = (Xs.props = _e({}, d4.props, R4))
  , ln = (e, t=[]) => {
    fe(e) ? e.forEach( (r) => r(...t)) : e && e(...t);
}
  , el = (e) => (e ? (fe(e) ? e.some( (t) => t.length > 1) : e.length > 1) : !1);
function X4(e) {
    const t = {};
    for (const k in e)
        k in R4 || (t[k] = e[k]);
    if (e.css === !1)
        return t;
    const {name: r="v", type: n, duration: o, enterFromClass: a=`${r}-enter-from`, enterActiveClass: s=`${r}-enter-active`, enterToClass: i=`${r}-enter-to`, appearFromClass: c=a, appearActiveClass: l=s, appearToClass: f=i, leaveFromClass: d=`${r}-leave-from`, leaveActiveClass: u=`${r}-leave-active`, leaveToClass: w=`${r}-leave-to`, } = e
      , y = K7(o)
      , x = y && y[0]
      , v = y && y[1]
      , {onBeforeEnter: h, onEnter: m, onEnterCancelled: A, onLeave: O, onLeaveCancelled: b, onBeforeAppear: D=h, onAppear: P=m, onAppearCancelled: Y=A, } = t
      , F = (k, U, I) => {
        pn(k, U ? f : i),
        pn(k, U ? l : s),
        I && I();
    }
      , X = (k, U) => {
        pn(k, w),
        pn(k, u),
        U && U();
    }
      , re = (k) => (U, I) => {
        const Q = k ? P : m
          , J = () => F(U, k, I);
        ln(Q, [U, J]),
        tl( () => {
            pn(U, k ? c : a),
            pr(U, k ? f : i),
            el(Q) || rl(U, n, x, J);
        }
        );
    }
    ;
    return _e(t, {
        onBeforeEnter(k) {
            ln(h, [k]),
            pr(k, a),
            pr(k, s);
        },
        onBeforeAppear(k) {
            ln(D, [k]),
            pr(k, c),
            pr(k, l);
        },
        onEnter: re(!1),
        onAppear: re(!0),
        onLeave(k, U) {
            const I = () => X(k, U);
            pr(k, d),
            k4(),
            pr(k, u),
            tl( () => {
                pn(k, d),
                pr(k, w),
                el(O) || rl(k, n, v, I);
            }
            ),
            ln(O, [k, I]);
        },
        onEnterCancelled(k) {
            F(k, !1),
            ln(A, [k]);
        },
        onAppearCancelled(k) {
            F(k, !0),
            ln(Y, [k]);
        },
        onLeaveCancelled(k) {
            X(k),
            ln(b, [k]);
        },
    });
}
function K7(e) {
    if (e == null)
        return null;
    if (Ve(e))
        return [bi(e.enter), bi(e.leave)];
    {
        const t = bi(e);
        return [t, t];
    }
}
function bi(e) {
    return Qr(e);
}
function pr(e, t) {
    t.split(/\s+/).forEach( (r) => r && e.classList.add(r)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function pn(e, t) {
    t.split(/\s+/).forEach( (n) => n && e.classList.remove(n));
    const {_vtc: r} = e;
    r && (r.delete(t),
    r.size || (e._vtc = void 0));
}
function tl(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e);
    }
    );
}
let _7 = 0;
function rl(e, t, r, n) {
    const o = (e._endId = ++_7)
      , a = () => {
        o === e._endId && n();
    }
    ;
    if (r)
        return setTimeout(a, r);
    const {type: s, timeout: i, propCount: c} = Z4(e, t);
    if (!s)
        return n();
    const l = s + "end";
    let f = 0;
    const d = () => {
        e.removeEventListener(l, u),
        a();
    }
      , u = (w) => {
        w.target === e && ++f >= c && d();
    }
    ;
    setTimeout( () => {
        f < c && d();
    }
    , i + 1),
    e.addEventListener(l, u);
}
function Z4(e, t) {
    const r = window.getComputedStyle(e)
      , n = (y) => (r[y] || "").split(", ")
      , o = n(Br + "Delay")
      , a = n(Br + "Duration")
      , s = nl(o, a)
      , i = n(To + "Delay")
      , c = n(To + "Duration")
      , l = nl(i, c);
    let f = null
      , d = 0
      , u = 0;
    t === Br ? s > 0 && ((f = Br),
    (d = s),
    (u = a.length)) : t === To ? l > 0 && ((f = To),
    (d = l),
    (u = c.length)) : ((d = Math.max(s, l)),
    (f = d > 0 ? (s > l ? Br : To) : null),
    (u = f ? (f === Br ? a.length : c.length) : 0));
    const w = f === Br && /\b(transform|all)(,|$)/.test(r[Br + "Property"]);
    return {
        type: f,
        timeout: d,
        propCount: u,
        hasTransform: w
    };
}
function nl(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (r, n) => ol(r) + ol(e[n])));
}
function ol(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function k4() {
    return document.body.offsetHeight;
}
const U4 = new WeakMap()
  , S4 = new WeakMap()
  , $7 = {
    name: "TransitionGroup",
    props: _e({}, q7, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const r = ct()
          , n = f4();
        let o, a;
        return (Oc( () => {
            if (!o.length)
                return;
            const s = e.moveClass || `${e.name || "v"}-move`;
            if (!n6(o[0].el, r.vnode.el, s))
                return;
            o.forEach(e6),
            o.forEach(t6);
            const i = o.filter(r6);
            k4(),
            i.forEach( (c) => {
                const l = c.el
                  , f = l.style;
                pr(l, s),
                (f.transform = f.webkitTransform = f.transitionDuration = "");
                const d = (l._moveCb = (u) => {
                    (u && u.target !== l) || ((!u || /transform$/.test(u.propertyName)) && (l.removeEventListener("transitionend", d),
                    (l._moveCb = null),
                    pn(l, s)));
                }
                );
                l.addEventListener("transitionend", d);
            }
            );
        }
        ),
        () => {
            const s = Ge(e)
              , i = X4(s);
            let c = s.tag || st;
            (o = a),
            (a = t.default ? xc(t.default()) : []);
            for (let l = 0; l < a.length; l++) {
                const f = a[l];
                f.key != null && co(f, da(f, i, n, r));
            }
            if (o)
                for (let l = 0; l < o.length; l++) {
                    const f = o[l];
                    co(f, da(f, i, n, r)),
                    U4.set(f, f.el.getBoundingClientRect());
                }
            return Ze(c, null, a);
        }
        );
    },
}
  , AY = $7;
function e6(e) {
    const t = e.el;
    t._moveCb && t._moveCb(),
    t._enterCb && t._enterCb();
}
function t6(e) {
    S4.set(e, e.el.getBoundingClientRect());
}
function r6(e) {
    const t = U4.get(e)
      , r = S4.get(e)
      , n = t.left - r.left
      , o = t.top - r.top;
    if (n || o) {
        const a = e.el.style;
        return ((a.transform = a.webkitTransform = `translate(${n}px,${o}px)`),
        (a.transitionDuration = "0s"),
        e);
    }
}
function n6(e, t, r) {
    const n = e.cloneNode();
    e._vtc && e._vtc.forEach( (s) => {
        s.split(/\s+/).forEach( (i) => i && n.classList.remove(i));
    }
    ),
    r.split(/\s+/).forEach( (s) => s && n.classList.add(s)),
    (n.style.display = "none");
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(n);
    const {hasTransform: a} = Z4(n);
    return o.removeChild(n),
    a;
}
const Kr = (e) => {
    const t = e.props["onUpdate:modelValue"];
    return fe(t) ? (r) => eo(t, r) : t;
}
;
function o6(e) {
    e.target.composing = !0;
}
function al(e) {
    const t = e.target;
    t.composing && ((t.composing = !1),
    a6(t, "input"));
}
function a6(e, t) {
    const r = document.createEvent("HTMLEvents");
    r.initEvent(t, !0, !0),
    e.dispatchEvent(r);
}
const D1 = {
    created(e, {modifiers: {lazy: t, trim: r, number: n}}, o) {
        e._assign = Kr(o);
        const a = n || (o.props && o.props.type === "number");
        wr(e, t ? "change" : "input", (s) => {
            if (s.target.composing)
                return;
            let i = e.value;
            r ? (i = i.trim()) : a && (i = Qr(i)),
            e._assign(i);
        }
        ),
        r && wr(e, "change", () => {
            e.value = e.value.trim();
        }
        ),
        t || (wr(e, "compositionstart", o6),
        wr(e, "compositionend", al),
        wr(e, "change", al));
    },
    mounted(e, {value: t}) {
        e.value = t ?? "";
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: r, trim: n, number: o}}, a) {
        if (((e._assign = Kr(a)),
        e.composing || (document.activeElement === e && (r || (n && e.value.trim() === t) || ((o || e.type === "number") && Qr(e.value) === t)))))
            return;
        const s = t ?? "";
        e.value !== s && (e.value = s);
    },
}
  , W4 = {
    deep: !0,
    created(e, t, r) {
        (e._assign = Kr(r)),
        wr(e, "change", () => {
            const n = e._modelValue
              , o = po(e)
              , a = e.checked
              , s = e._assign;
            if (fe(n)) {
                const i = Ds(n, o)
                  , c = i !== -1;
                if (a && !c)
                    s(n.concat(o));
                else if (!a && c) {
                    const l = [...n];
                    l.splice(i, 1),
                    s(l);
                }
            } else if (Mn(n)) {
                const i = new Set(n);
                a ? i.add(o) : i.delete(o),
                s(i);
            } else
                s(J4(e, a));
        }
        );
    },
    mounted: sl,
    beforeUpdate(e, t, r) {
        (e._assign = Kr(r)),
        sl(e, t, r);
    },
};
function sl(e, {value: t, oldValue: r}, n) {
    (e._modelValue = t),
    fe(t) ? (e.checked = Ds(t, n.props.value) > -1) : Mn(t) ? (e.checked = t.has(n.props.value)) : t !== r && (e.checked = Wr(t, J4(e, !0)));
}
const Q4 = {
    created(e, {value: t}, r) {
        (e.checked = Wr(t, r.props.value)),
        (e._assign = Kr(r)),
        wr(e, "change", () => {
            e._assign(po(e));
        }
        );
    },
    beforeUpdate(e, {value: t, oldValue: r}, n) {
        (e._assign = Kr(n)),
        t !== r && (e.checked = Wr(t, n.props.value));
    },
}
  , s6 = {
    deep: !0,
    created(e, {value: t, modifiers: {number: r}}, n) {
        const o = Mn(t);
        wr(e, "change", () => {
            const a = Array.prototype.filter.call(e.options, (s) => s.selected).map( (s) => (r ? Qr(po(s)) : po(s)));
            e._assign(e.multiple ? (o ? new Set(a) : a) : a[0]);
        }
        ),
        (e._assign = Kr(n));
    },
    mounted(e, {value: t}) {
        il(e, t);
    },
    beforeUpdate(e, t, r) {
        e._assign = Kr(r);
    },
    updated(e, {value: t}) {
        il(e, t);
    },
};
function il(e, t) {
    const r = e.multiple;
    if (!(r && !fe(t) && !Mn(t))) {
        for (let n = 0, o = e.options.length; n < o; n++) {
            const a = e.options[n]
              , s = po(a);
            if (r)
                fe(t) ? (a.selected = Ds(t, s) > -1) : (a.selected = t.has(s));
            else if (Wr(po(a), t)) {
                e.selectedIndex !== n && (e.selectedIndex = n);
                return;
            }
        }
        !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function po(e) {
    return "_value"in e ? e._value : e.value;
}
function J4(e, t) {
    const r = t ? "_trueValue" : "_falseValue";
    return r in e ? e[r] : t;
}
const bY = {
    created(e, t, r) {
        Za(e, t, r, null, "created");
    },
    mounted(e, t, r) {
        Za(e, t, r, null, "mounted");
    },
    beforeUpdate(e, t, r, n) {
        Za(e, t, r, n, "beforeUpdate");
    },
    updated(e, t, r, n) {
        Za(e, t, r, n, "updated");
    },
};
function Za(e, t, r, n, o) {
    let a;
    switch (e.tagName) {
    case "SELECT":
        a = s6;
        break;
    case "TEXTAREA":
        a = D1;
        break;
    default:
        switch (r.props && r.props.type) {
        case "checkbox":
            a = W4;
            break;
        case "radio":
            a = Q4;
            break;
        default:
            a = D1;
        }
    }
    const s = a[o];
    s && s(e, t, r, n);
}
function i6() {
    (D1.getSSRProps = ({value: e}) => ({
        value: e
    })),
    (Q4.getSSRProps = ({value: e}, t) => {
        if (t.props && Wr(t.props.value, e))
            return {
                checked: !0
            };
    }
    ),
    (W4.getSSRProps = ({value: e}, t) => {
        if (fe(e)) {
            if (t.props && Ds(e, t.props.value) > -1)
                return {
                    checked: !0
                };
        } else if (Mn(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                };
        } else if (e)
            return {
                checked: !0
            };
    }
    );
}
const c6 = ["ctrl", "shift", "alt", "meta"]
  , l6 = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button"in e && e.button !== 0,
    middle: (e) => "button"in e && e.button !== 1,
    right: (e) => "button"in e && e.button !== 2,
    exact: (e, t) => c6.some( (r) => e[`${r}Key`] && !t.includes(r)),
}
  , u6 = (e, t) => (r, ...n) => {
    for (let o = 0; o < t.length; o++) {
        const a = l6[t[o]];
        if (a && a(r, t))
            return;
    }
    return e(r, ...n);
}
  , f6 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
}
  , DY = (e, t) => (r) => {
    if (!("key"in r))
        return;
    const n = sr(r.key);
    if (t.some( (o) => o === n || f6[o] === n))
        return e(r);
}
  , jc = {
    beforeMount(e, {value: t}, {transition: r}) {
        (e._vod = e.style.display === "none" ? "" : e.style.display),
        r && t ? r.beforeEnter(e) : Co(e, t);
    },
    mounted(e, {value: t}, {transition: r}) {
        r && t && r.enter(e);
    },
    updated(e, {value: t, oldValue: r}, {transition: n}) {
        !t != !r && (n ? t ? (n.beforeEnter(e),
        Co(e, !0),
        n.enter(e)) : n.leave(e, () => {
            Co(e, !1);
        }
        ) : Co(e, t));
    },
    beforeUnmount(e, {value: t}) {
        Co(e, t);
    },
};
function Co(e, t) {
    e.style.display = t ? e._vod : "none";
}
function d6() {
    jc.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            };
    }
    ;
}
const V4 = _e({
    patchProp: W7
}, B7);
let Ko, cl = !1;
function q4() {
    return Ko || (Ko = c7(V4));
}
function K4() {
    return (Ko = cl ? Ko : l7(V4)),
    (cl = !0),
    Ko;
}
const us = (...e) => {
    q4().render(...e);
}
  , p6 = (...e) => {
    K4().hydrate(...e);
}
  , h6 = (...e) => {
    const t = q4().createApp(...e)
      , {mount: r} = t;
    return ((t.mount = (n) => {
        const o = _4(n);
        if (!o)
            return;
        const a = t._component;
        !ve(a) && !a.render && !a.template && (a.template = o.innerHTML),
        (o.innerHTML = "");
        const s = r(o, !1, o instanceof SVGElement);
        return (o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        s);
    }
    ),
    t);
}
  , MY = (...e) => {
    const t = K4().createApp(...e)
      , {mount: r} = t;
    return ((t.mount = (n) => {
        const o = _4(n);
        if (o)
            return r(o, !0, o instanceof SVGElement);
    }
    ),
    t);
}
;
function _4(e) {
    return Se(e) ? document.querySelector(e) : e;
}
let ll = !1;
const PY = () => {
    ll || ((ll = !0),
    i6(),
    d6());
}
;
if (typeof window < "u") {
    let e = function() {
        var t = document.body
          , r = document.getElementById("__svg__icons__dom__");
        r || ((r = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
        (r.style.position = "absolute"),
        (r.style.width = "0"),
        (r.style.height = "0"),
        (r.id = "__svg__icons__dom__"),
        r.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        r.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")),
        t.insertBefore(r, t.lastChild);
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
var m6 = typeof global == "object" && global && global.Object === Object && global;
const $4 = m6;
var g6 = typeof self == "object" && self && self.Object === Object && self
  , v6 = $4 || g6 || Function("return this")();
const lr = v6;
var w6 = lr.Symbol;
const _r = w6;
var e3 = Object.prototype
  , y6 = e3.hasOwnProperty
  , x6 = e3.toString
  , Go = _r ? _r.toStringTag : void 0;
function O6(e) {
    var t = y6.call(e, Go)
      , r = e[Go];
    try {
        e[Go] = void 0;
        var n = !0;
    } catch {}
    var o = x6.call(e);
    return n && (t ? (e[Go] = r) : delete e[Go]),
    o;
}
var A6 = Object.prototype
  , b6 = A6.toString;
function D6(e) {
    return b6.call(e);
}
var M6 = "[object Null]"
  , P6 = "[object Undefined]"
  , ul = _r ? _r.toStringTag : void 0;
function Do(e) {
    return e == null ? e === void 0 ? P6 : M6 : ul && ul in Object(e) ? O6(e) : D6(e);
}
function ho(e) {
    return e != null && typeof e == "object";
}
var z6 = "[object Symbol]";
function Zs(e) {
    return typeof e == "symbol" || (ho(e) && Do(e) == z6);
}
function Nc(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
    return o;
}
var H6 = Array.isArray;
const Jt = H6;
var j6 = 1 / 0
  , fl = _r ? _r.prototype : void 0
  , dl = fl ? fl.toString : void 0;
function t3(e) {
    if (typeof e == "string")
        return e;
    if (Jt(e))
        return Nc(e, t3) + "";
    if (Zs(e))
        return dl ? dl.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -j6 ? "-0" : t;
}
var N6 = /\s/;
function E6(e) {
    for (var t = e.length; t-- && N6.test(e.charAt(t)); )
        ;
    return t;
}
var B6 = /^\s+/;
function T6(e) {
    return e && e.slice(0, E6(e) + 1).replace(B6, "");
}
function cr(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}
var pl = 0 / 0
  , C6 = /^[-+]0x[0-9a-f]+$/i
  , G6 = /^0b[01]+$/i
  , Y6 = /^0o[0-7]+$/i
  , F6 = parseInt;
function M1(e) {
    if (typeof e == "number")
        return e;
    if (Zs(e))
        return pl;
    if (cr(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = cr(t) ? t + "" : t;
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = T6(e);
    var r = G6.test(e);
    return r || Y6.test(e) ? F6(e.slice(2), r ? 2 : 8) : C6.test(e) ? pl : +e;
}
var hl = 1 / 0
  , I6 = 17976931348623157e292;
function L6(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (((e = M1(e)),
    e === hl || e === -hl)) {
        var t = e < 0 ? -1 : 1;
        return t * I6;
    }
    return e === e ? e : 0;
}
function R6(e) {
    var t = L6(e)
      , r = t % 1;
    return t === t ? (r ? t - r : t) : 0;
}
function X6(e) {
    return e;
}
var Z6 = "[object AsyncFunction]"
  , k6 = "[object Function]"
  , U6 = "[object GeneratorFunction]"
  , S6 = "[object Proxy]";
function r3(e) {
    if (!cr(e))
        return !1;
    var t = Do(e);
    return t == k6 || t == U6 || t == Z6 || t == S6;
}
var W6 = lr["__core-js_shared__"];
const Di = W6;
var ml = (function() {
    var e = /[^.]+$/.exec((Di && Di.keys && Di.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
}
)();
function Q6(e) {
    return !!ml && ml in e;
}
var J6 = Function.prototype
  , V6 = J6.toString;
function Hn(e) {
    if (e != null) {
        try {
            return V6.call(e);
        } catch {}
        try {
            return e + "";
        } catch {}
    }
    return "";
}
var q6 = /[\\^$.*+?()[\]{}|]/g
  , K6 = /^\[object .+?Constructor\]$/
  , _6 = Function.prototype
  , $6 = Object.prototype
  , e8 = _6.toString
  , t8 = $6.hasOwnProperty
  , r8 = RegExp("^" + e8.call(t8).replace(q6, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function n8(e) {
    if (!cr(e) || Q6(e))
        return !1;
    var t = r3(e) ? r8 : K6;
    return t.test(Hn(e));
}
function o8(e, t) {
    return e == null ? void 0 : e[t];
}
function jn(e, t) {
    var r = o8(e, t);
    return n8(r) ? r : void 0;
}
var a8 = jn(lr, "WeakMap");
const P1 = a8;
var s8 = (function() {
    try {
        var e = jn(Object, "defineProperty");
        return e({}, "", {}),
        e;
    } catch {}
}
)();
const gl = s8;
function i8(e, t, r, n) {
    for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
        if (t(e[a], a, e))
            return a;
    return -1;
}
var c8 = 9007199254740991
  , l8 = /^(?:0|[1-9]\d*)$/;
function Ec(e, t) {
    var r = typeof e;
    return ((t = t ?? c8),
    !!t && (r == "number" || (r != "symbol" && l8.test(e))) && e > -1 && e % 1 == 0 && e < t);
}
function u8(e, t, r) {
    t == "__proto__" && gl ? gl(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : (e[t] = r);
}
function Bc(e, t) {
    return e === t || (e !== e && t !== t);
}
var f8 = Object.prototype
  , d8 = f8.hasOwnProperty;
function p8(e, t, r) {
    var n = e[t];
    (!(d8.call(e, t) && Bc(n, r)) || (r === void 0 && !(t in e))) && u8(e, t, r);
}
var h8 = 9007199254740991;
function Tc(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= h8;
}
function Mo(e) {
    return e != null && Tc(e.length) && !r3(e);
}
var m8 = Object.prototype;
function Cc(e) {
    var t = e && e.constructor
      , r = (typeof t == "function" && t.prototype) || m8;
    return e === r;
}
function g8(e, t) {
    for (var r = -1, n = Array(e); ++r < e; )
        n[r] = t(r);
    return n;
}
var v8 = "[object Arguments]";
function vl(e) {
    return ho(e) && Do(e) == v8;
}
var n3 = Object.prototype
  , w8 = n3.hasOwnProperty
  , y8 = n3.propertyIsEnumerable
  , x8 = vl((function() {
    return arguments;
}
)()) ? vl : function(e) {
    return ho(e) && w8.call(e, "callee") && !y8.call(e, "callee");
}
;
const Gc = x8;
function O8() {
    return !1;
}
var o3 = typeof exports == "object" && exports && !exports.nodeType && exports
  , wl = o3 && typeof module == "object" && module && !module.nodeType && module
  , A8 = wl && wl.exports === o3
  , yl = A8 ? lr.Buffer : void 0
  , b8 = yl ? yl.isBuffer : void 0
  , D8 = b8 || O8;
const fs = D8;
var M8 = "[object Arguments]"
  , P8 = "[object Array]"
  , z8 = "[object Boolean]"
  , H8 = "[object Date]"
  , j8 = "[object Error]"
  , N8 = "[object Function]"
  , E8 = "[object Map]"
  , B8 = "[object Number]"
  , T8 = "[object Object]"
  , C8 = "[object RegExp]"
  , G8 = "[object Set]"
  , Y8 = "[object String]"
  , F8 = "[object WeakMap]"
  , I8 = "[object ArrayBuffer]"
  , L8 = "[object DataView]"
  , R8 = "[object Float32Array]"
  , X8 = "[object Float64Array]"
  , Z8 = "[object Int8Array]"
  , k8 = "[object Int16Array]"
  , U8 = "[object Int32Array]"
  , S8 = "[object Uint8Array]"
  , W8 = "[object Uint8ClampedArray]"
  , Q8 = "[object Uint16Array]"
  , J8 = "[object Uint32Array]"
  , We = {};
We[R8] = We[X8] = We[Z8] = We[k8] = We[U8] = We[S8] = We[W8] = We[Q8] = We[J8] = !0;
We[M8] = We[P8] = We[I8] = We[z8] = We[L8] = We[H8] = We[j8] = We[N8] = We[E8] = We[B8] = We[T8] = We[C8] = We[G8] = We[Y8] = We[F8] = !1;
function V8(e) {
    return ho(e) && Tc(e.length) && !!We[Do(e)];
}
function q8(e) {
    return function(t) {
        return e(t);
    }
    ;
}
var a3 = typeof exports == "object" && exports && !exports.nodeType && exports
  , _o = a3 && typeof module == "object" && module && !module.nodeType && module
  , K8 = _o && _o.exports === a3
  , Mi = K8 && $4.process
  , _8 = (function() {
    try {
        var e = _o && _o.require && _o.require("util").types;
        return e || (Mi && Mi.binding && Mi.binding("util"));
    } catch {}
}
)();
const xl = _8;
var Ol = xl && xl.isTypedArray
  , $8 = Ol ? q8(Ol) : V8;
const Yc = $8;
var e9 = Object.prototype
  , t9 = e9.hasOwnProperty;
function s3(e, t) {
    var r = Jt(e)
      , n = !r && Gc(e)
      , o = !r && !n && fs(e)
      , a = !r && !n && !o && Yc(e)
      , s = r || n || o || a
      , i = s ? g8(e.length, String) : []
      , c = i.length;
    for (var l in e)
        (t || t9.call(e, l)) && !(s && (l == "length" || (o && (l == "offset" || l == "parent")) || (a && (l == "buffer" || l == "byteLength" || l == "byteOffset")) || Ec(l, c))) && i.push(l);
    return i;
}
function i3(e, t) {
    return function(r) {
        return e(t(r));
    }
    ;
}
var r9 = i3(Object.keys, Object);
const n9 = r9;
var o9 = Object.prototype
  , a9 = o9.hasOwnProperty;
function c3(e) {
    if (!Cc(e))
        return n9(e);
    var t = [];
    for (var r in Object(e))
        a9.call(e, r) && r != "constructor" && t.push(r);
    return t;
}
function ks(e) {
    return Mo(e) ? s3(e) : c3(e);
}
function s9(e) {
    var t = [];
    if (e != null)
        for (var r in Object(e))
            t.push(r);
    return t;
}
var i9 = Object.prototype
  , c9 = i9.hasOwnProperty;
function l9(e) {
    if (!cr(e))
        return s9(e);
    var t = Cc(e)
      , r = [];
    for (var n in e)
        (n == "constructor" && (t || !c9.call(e, n))) || r.push(n);
    return r;
}
function u9(e) {
    return Mo(e) ? s3(e, !0) : l9(e);
}
var f9 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , d9 = /^\w*$/;
function Fc(e, t) {
    if (Jt(e))
        return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || Zs(e) ? !0 : d9.test(e) || !f9.test(e) || (t != null && e in Object(t));
}
var p9 = jn(Object, "create");
const ha = p9;
function h9() {
    (this.__data__ = ha ? ha(null) : {}),
    (this.size = 0);
}
function m9(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0),
    t;
}
var g9 = "__lodash_hash_undefined__"
  , v9 = Object.prototype
  , w9 = v9.hasOwnProperty;
function y9(e) {
    var t = this.__data__;
    if (ha) {
        var r = t[e];
        return r === g9 ? void 0 : r;
    }
    return w9.call(t, e) ? t[e] : void 0;
}
var x9 = Object.prototype
  , O9 = x9.hasOwnProperty;
function A9(e) {
    var t = this.__data__;
    return ha ? t[e] !== void 0 : O9.call(t, e);
}
var b9 = "__lodash_hash_undefined__";
function D9(e, t) {
    var r = this.__data__;
    return ((this.size += this.has(e) ? 0 : 1),
    (r[e] = ha && t === void 0 ? b9 : t),
    this);
}
function bn(e) {
    var t = -1
      , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
bn.prototype.clear = h9;
bn.prototype.delete = m9;
bn.prototype.get = y9;
bn.prototype.has = A9;
bn.prototype.set = D9;
function M9() {
    (this.__data__ = []),
    (this.size = 0);
}
function Us(e, t) {
    for (var r = e.length; r--; )
        if (Bc(e[r][0], t))
            return r;
    return -1;
}
var P9 = Array.prototype
  , z9 = P9.splice;
function H9(e) {
    var t = this.__data__
      , r = Us(t, e);
    if (r < 0)
        return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : z9.call(t, r, 1),
    --this.size,
    !0;
}
function j9(e) {
    var t = this.__data__
      , r = Us(t, e);
    return r < 0 ? void 0 : t[r][1];
}
function N9(e) {
    return Us(this.__data__, e) > -1;
}
function E9(e, t) {
    var r = this.__data__
      , n = Us(r, e);
    return n < 0 ? (++this.size,
    r.push([e, t])) : (r[n][1] = t),
    this;
}
function Pr(e) {
    var t = -1
      , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
Pr.prototype.clear = M9;
Pr.prototype.delete = H9;
Pr.prototype.get = j9;
Pr.prototype.has = N9;
Pr.prototype.set = E9;
var B9 = jn(lr, "Map");
const ma = B9;
function T9() {
    (this.size = 0),
    (this.__data__ = {
        hash: new bn(),
        map: new (ma || Pr)(),
        string: new bn(),
    });
}
function C9(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ss(e, t) {
    var r = e.__data__;
    return C9(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function G9(e) {
    var t = Ss(this, e).delete(e);
    return (this.size -= t ? 1 : 0),
    t;
}
function Y9(e) {
    return Ss(this, e).get(e);
}
function F9(e) {
    return Ss(this, e).has(e);
}
function I9(e, t) {
    var r = Ss(this, e)
      , n = r.size;
    return r.set(e, t),
    (this.size += r.size == n ? 0 : 1),
    this;
}
function zr(e) {
    var t = -1
      , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
zr.prototype.clear = T9;
zr.prototype.delete = G9;
zr.prototype.get = Y9;
zr.prototype.has = F9;
zr.prototype.set = I9;
var L9 = "Expected a function";
function Ic(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(L9);
    var r = function() {
        var n = arguments
          , o = t ? t.apply(this, n) : n[0]
          , a = r.cache;
        if (a.has(o))
            return a.get(o);
        var s = e.apply(this, n);
        return (r.cache = a.set(o, s) || a),
        s;
    };
    return (r.cache = new (Ic.Cache || zr)()),
    r;
}
Ic.Cache = zr;
var R9 = 500;
function X9(e) {
    var t = Ic(e, function(n) {
        return r.size === R9 && r.clear(),
        n;
    })
      , r = t.cache;
    return t;
}
var Z9 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , k9 = /\\(\\)?/g
  , U9 = X9(function(e) {
    var t = [];
    return (e.charCodeAt(0) === 46 && t.push(""),
    e.replace(Z9, function(r, n, o, a) {
        t.push(o ? a.replace(k9, "$1") : n || r);
    }),
    t);
});
const S9 = U9;
function W9(e) {
    return e == null ? "" : t3(e);
}
function Ws(e, t) {
    return Jt(e) ? e : Fc(e, t) ? [e] : S9(W9(e));
}
var Q9 = 1 / 0;
function Pa(e) {
    if (typeof e == "string" || Zs(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -Q9 ? "-0" : t;
}
function Lc(e, t) {
    t = Ws(t, e);
    for (var r = 0, n = t.length; e != null && r < n; )
        e = e[Pa(t[r++])];
    return r && r == n ? e : void 0;
}
function l3(e, t, r) {
    var n = e == null ? void 0 : Lc(e, t);
    return n === void 0 ? r : n;
}
function u3(e, t) {
    for (var r = -1, n = t.length, o = e.length; ++r < n; )
        e[o + r] = t[r];
    return e;
}
var J9 = i3(Object.getPrototypeOf, Object);
const V9 = J9;
function q9() {
    (this.__data__ = new Pr()),
    (this.size = 0);
}
function K9(e) {
    var t = this.__data__
      , r = t.delete(e);
    return (this.size = t.size),
    r;
}
function _9(e) {
    return this.__data__.get(e);
}
function $9(e) {
    return this.__data__.has(e);
}
var ep = 200;
function tp(e, t) {
    var r = this.__data__;
    if (r instanceof Pr) {
        var n = r.__data__;
        if (!ma || n.length < ep - 1)
            return n.push([e, t]),
            (this.size = ++r.size),
            this;
        r = this.__data__ = new zr(n);
    }
    return r.set(e, t),
    (this.size = r.size),
    this;
}
function Or(e) {
    var t = (this.__data__ = new Pr(e));
    this.size = t.size;
}
Or.prototype.clear = q9;
Or.prototype.delete = K9;
Or.prototype.get = _9;
Or.prototype.has = $9;
Or.prototype.set = tp;
function rp(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
        var s = e[r];
        t(s, r, e) && (a[o++] = s);
    }
    return a;
}
function f3() {
    return [];
}
var np = Object.prototype
  , op = np.propertyIsEnumerable
  , Al = Object.getOwnPropertySymbols
  , ap = Al ? function(e) {
    return e == null ? [] : ((e = Object(e)),
    rp(Al(e), function(t) {
        return op.call(e, t);
    }));
}
: f3;
const d3 = ap;
var sp = Object.getOwnPropertySymbols
  , ip = sp ? function(e) {
    for (var t = []; e; )
        u3(t, d3(e)),
        (e = V9(e));
    return t;
}
: f3;
const cp = ip;
function p3(e, t, r) {
    var n = t(e);
    return Jt(e) ? n : u3(n, r(e));
}
function bl(e) {
    return p3(e, ks, d3);
}
function lp(e) {
    return p3(e, u9, cp);
}
var up = jn(lr, "DataView");
const z1 = up;
var fp = jn(lr, "Promise");
const H1 = fp;
var dp = jn(lr, "Set");
const j1 = dp;
var Dl = "[object Map]"
  , pp = "[object Object]"
  , Ml = "[object Promise]"
  , Pl = "[object Set]"
  , zl = "[object WeakMap]"
  , Hl = "[object DataView]"
  , hp = Hn(z1)
  , mp = Hn(ma)
  , gp = Hn(H1)
  , vp = Hn(j1)
  , wp = Hn(P1)
  , hn = Do;
((z1 && hn(new z1(new ArrayBuffer(1))) != Hl) || (ma && hn(new ma()) != Dl) || (H1 && hn(H1.resolve()) != Ml) || (j1 && hn(new j1()) != Pl) || (P1 && hn(new P1()) != zl)) && (hn = function(e) {
    var t = Do(e)
      , r = t == pp ? e.constructor : void 0
      , n = r ? Hn(r) : "";
    if (n)
        switch (n) {
        case hp:
            return Hl;
        case mp:
            return Dl;
        case gp:
            return Ml;
        case vp:
            return Pl;
        case wp:
            return zl;
        }
    return t;
}
);
const N1 = hn;
var yp = lr.Uint8Array;
const jl = yp;
var xp = "__lodash_hash_undefined__";
function Op(e) {
    return this.__data__.set(e, xp),
    this;
}
function Ap(e) {
    return this.__data__.has(e);
}
function ds(e) {
    var t = -1
      , r = e == null ? 0 : e.length;
    for (this.__data__ = new zr(); ++t < r; )
        this.add(e[t]);
}
ds.prototype.add = ds.prototype.push = Op;
ds.prototype.has = Ap;
function bp(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e))
            return !0;
    return !1;
}
function Dp(e, t) {
    return e.has(t);
}
var Mp = 1
  , Pp = 2;
function h3(e, t, r, n, o, a) {
    var s = r & Mp
      , i = e.length
      , c = t.length;
    if (i != c && !(s && c > i))
        return !1;
    var l = a.get(e)
      , f = a.get(t);
    if (l && f)
        return l == t && f == e;
    var d = -1
      , u = !0
      , w = r & Pp ? new ds() : void 0;
    for (a.set(e, t),
    a.set(t, e); ++d < i; ) {
        var y = e[d]
          , x = t[d];
        if (n)
            var v = s ? n(x, y, d, t, e, a) : n(y, x, d, e, t, a);
        if (v !== void 0) {
            if (v)
                continue;
            u = !1;
            break;
        }
        if (w) {
            if (!bp(t, function(h, m) {
                if (!Dp(w, m) && (y === h || o(y, h, r, n, a)))
                    return w.push(m);
            })) {
                u = !1;
                break;
            }
        } else if (!(y === x || o(y, x, r, n, a))) {
            u = !1;
            break;
        }
    }
    return a.delete(e),
    a.delete(t),
    u;
}
function zp(e) {
    var t = -1
      , r = Array(e.size);
    return (e.forEach(function(n, o) {
        r[++t] = [o, n];
    }),
    r);
}
function Hp(e) {
    var t = -1
      , r = Array(e.size);
    return (e.forEach(function(n) {
        r[++t] = n;
    }),
    r);
}
var jp = 1
  , Np = 2
  , Ep = "[object Boolean]"
  , Bp = "[object Date]"
  , Tp = "[object Error]"
  , Cp = "[object Map]"
  , Gp = "[object Number]"
  , Yp = "[object RegExp]"
  , Fp = "[object Set]"
  , Ip = "[object String]"
  , Lp = "[object Symbol]"
  , Rp = "[object ArrayBuffer]"
  , Xp = "[object DataView]"
  , Nl = _r ? _r.prototype : void 0
  , Pi = Nl ? Nl.valueOf : void 0;
function Zp(e, t, r, n, o, a, s) {
    switch (r) {
    case Xp:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        (e = e.buffer),
        (t = t.buffer);
    case Rp:
        return !(e.byteLength != t.byteLength || !a(new jl(e), new jl(t)));
    case Ep:
    case Bp:
    case Gp:
        return Bc(+e, +t);
    case Tp:
        return e.name == t.name && e.message == t.message;
    case Yp:
    case Ip:
        return e == t + "";
    case Cp:
        var i = zp;
    case Fp:
        var c = n & jp;
        if ((i || (i = Hp),
        e.size != t.size && !c))
            return !1;
        var l = s.get(e);
        if (l)
            return l == t;
        (n |= Np),
        s.set(e, t);
        var f = h3(i(e), i(t), n, o, a, s);
        return s.delete(e),
        f;
    case Lp:
        if (Pi)
            return Pi.call(e) == Pi.call(t);
    }
    return !1;
}
var kp = 1
  , Up = Object.prototype
  , Sp = Up.hasOwnProperty;
function Wp(e, t, r, n, o, a) {
    var s = r & kp
      , i = bl(e)
      , c = i.length
      , l = bl(t)
      , f = l.length;
    if (c != f && !s)
        return !1;
    for (var d = c; d--; ) {
        var u = i[d];
        if (!(s ? u in t : Sp.call(t, u)))
            return !1;
    }
    var w = a.get(e)
      , y = a.get(t);
    if (w && y)
        return w == t && y == e;
    var x = !0;
    a.set(e, t),
    a.set(t, e);
    for (var v = s; ++d < c; ) {
        u = i[d];
        var h = e[u]
          , m = t[u];
        if (n)
            var A = s ? n(m, h, u, t, e, a) : n(h, m, u, e, t, a);
        if (!(A === void 0 ? h === m || o(h, m, r, n, a) : A)) {
            x = !1;
            break;
        }
        v || (v = u == "constructor");
    }
    if (x && !v) {
        var O = e.constructor
          , b = t.constructor;
        O != b && "constructor"in e && "constructor"in t && !(typeof O == "function" && O instanceof O && typeof b == "function" && b instanceof b) && (x = !1);
    }
    return a.delete(e),
    a.delete(t),
    x;
}
var Qp = 1
  , El = "[object Arguments]"
  , Bl = "[object Array]"
  , ka = "[object Object]"
  , Jp = Object.prototype
  , Tl = Jp.hasOwnProperty;
function Vp(e, t, r, n, o, a) {
    var s = Jt(e)
      , i = Jt(t)
      , c = s ? Bl : N1(e)
      , l = i ? Bl : N1(t);
    (c = c == El ? ka : c),
    (l = l == El ? ka : l);
    var f = c == ka
      , d = l == ka
      , u = c == l;
    if (u && fs(e)) {
        if (!fs(t))
            return !1;
        (s = !0),
        (f = !1);
    }
    if (u && !f)
        return (a || (a = new Or()),
        s || Yc(e) ? h3(e, t, r, n, o, a) : Zp(e, t, c, r, n, o, a));
    if (!(r & Qp)) {
        var w = f && Tl.call(e, "__wrapped__")
          , y = d && Tl.call(t, "__wrapped__");
        if (w || y) {
            var x = w ? e.value() : e
              , v = y ? t.value() : t;
            return a || (a = new Or()),
            o(x, v, r, n, a);
        }
    }
    return u ? (a || (a = new Or()),
    Wp(e, t, r, n, o, a)) : !1;
}
function Rc(e, t, r, n, o) {
    return e === t ? !0 : e == null || t == null || (!ho(e) && !ho(t)) ? e !== e && t !== t : Vp(e, t, r, n, Rc, o);
}
var qp = 1
  , Kp = 2;
function _p(e, t, r, n) {
    var o = r.length
      , a = o
      , s = !n;
    if (e == null)
        return !a;
    for (e = Object(e); o--; ) {
        var i = r[o];
        if (s && i[2] ? i[1] !== e[i[0]] : !(i[0]in e))
            return !1;
    }
    for (; ++o < a; ) {
        i = r[o];
        var c = i[0]
          , l = e[c]
          , f = i[1];
        if (s && i[2]) {
            if (l === void 0 && !(c in e))
                return !1;
        } else {
            var d = new Or();
            if (n)
                var u = n(l, f, c, e, t, d);
            if (!(u === void 0 ? Rc(f, l, qp | Kp, n, d) : u))
                return !1;
        }
    }
    return !0;
}
function m3(e) {
    return e === e && !cr(e);
}
function $p(e) {
    for (var t = ks(e), r = t.length; r--; ) {
        var n = t[r]
          , o = e[n];
        t[r] = [n, o, m3(o)];
    }
    return t;
}
function g3(e, t) {
    return function(r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
    }
    ;
}
function eh(e) {
    var t = $p(e);
    return t.length == 1 && t[0][2] ? g3(t[0][0], t[0][1]) : function(r) {
        return r === e || _p(r, e, t);
    }
    ;
}
function th(e, t) {
    return e != null && t in Object(e);
}
function rh(e, t, r) {
    t = Ws(t, e);
    for (var n = -1, o = t.length, a = !1; ++n < o; ) {
        var s = Pa(t[n]);
        if (!(a = e != null && r(e, s)))
            break;
        e = e[s];
    }
    return a || ++n != o ? a : ((o = e == null ? 0 : e.length),
    !!o && Tc(o) && Ec(s, o) && (Jt(e) || Gc(e)));
}
function nh(e, t) {
    return e != null && rh(e, t, th);
}
var oh = 1
  , ah = 2;
function sh(e, t) {
    return Fc(e) && m3(t) ? g3(Pa(e), t) : function(r) {
        var n = l3(r, e);
        return n === void 0 && n === t ? nh(r, e) : Rc(t, n, oh | ah);
    }
    ;
}
function ih(e) {
    return function(t) {
        return t == null ? void 0 : t[e];
    }
    ;
}
function ch(e) {
    return function(t) {
        return Lc(t, e);
    }
    ;
}
function lh(e) {
    return Fc(e) ? ih(Pa(e)) : ch(e);
}
function Qs(e) {
    return typeof e == "function" ? e : e == null ? X6 : typeof e == "object" ? Jt(e) ? sh(e[0], e[1]) : eh(e) : lh(e);
}
function uh(e) {
    return function(t, r, n) {
        for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
            var c = s[e ? i : ++o];
            if (r(a[c], c, a) === !1)
                break;
        }
        return t;
    }
    ;
}
var fh = uh();
const dh = fh;
function ph(e, t) {
    return e && dh(e, t, ks);
}
function hh(e, t) {
    return function(r, n) {
        if (r == null)
            return r;
        if (!Mo(r))
            return e(r, n);
        for (var o = r.length, a = t ? o : -1, s = Object(r); (t ? a-- : ++a < o) && n(s[a], a, s) !== !1;
        )
            ;
        return r;
    }
    ;
}
var mh = hh(ph);
const gh = mh;
var vh = function() {
    return lr.Date.now();
};
const zi = vh;
var wh = "Expected a function"
  , yh = Math.max
  , xh = Math.min;
function Oh(e, t, r) {
    var n, o, a, s, i, c, l = 0, f = !1, d = !1, u = !0;
    if (typeof e != "function")
        throw new TypeError(wh);
    (t = M1(t) || 0),
    cr(r) && ((f = !!r.leading),
    (d = "maxWait"in r),
    (a = d ? yh(M1(r.maxWait) || 0, t) : a),
    (u = "trailing"in r ? !!r.trailing : u));
    function w(D) {
        var P = n
          , Y = o;
        return (n = o = void 0),
        (l = D),
        (s = e.apply(Y, P)),
        s;
    }
    function y(D) {
        return (l = D),
        (i = setTimeout(h, t)),
        f ? w(D) : s;
    }
    function x(D) {
        var P = D - c
          , Y = D - l
          , F = t - P;
        return d ? xh(F, a - Y) : F;
    }
    function v(D) {
        var P = D - c
          , Y = D - l;
        return c === void 0 || P >= t || P < 0 || (d && Y >= a);
    }
    function h() {
        var D = zi();
        if (v(D))
            return m(D);
        i = setTimeout(h, x(D));
    }
    function m(D) {
        return (i = void 0),
        u && n ? w(D) : ((n = o = void 0),
        s);
    }
    function A() {
        i !== void 0 && clearTimeout(i),
        (l = 0),
        (n = c = o = i = void 0);
    }
    function O() {
        return i === void 0 ? s : m(zi());
    }
    function b() {
        var D = zi()
          , P = v(D);
        if (((n = arguments),
        (o = this),
        (c = D),
        P)) {
            if (i === void 0)
                return y(c);
            if (d)
                return clearTimeout(i),
                (i = setTimeout(h, t)),
                w(c);
        }
        return i === void 0 && (i = setTimeout(h, t)),
        s;
    }
    return (b.cancel = A),
    (b.flush = O),
    b;
}
function Ah(e) {
    return function(t, r, n) {
        var o = Object(t);
        if (!Mo(t)) {
            var a = Qs(r);
            (t = ks(t)),
            (r = function(i) {
                return a(o[i], i, o);
            }
            );
        }
        var s = e(t, r, n);
        return s > -1 ? o[a ? t[s] : s] : void 0;
    }
    ;
}
var bh = Math.max;
function Dh(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n)
        return -1;
    var o = r == null ? 0 : R6(r);
    return o < 0 && (o = bh(n + o, 0)),
    i8(e, Qs(t), o);
}
var Mh = Ah(Dh);
const De = Mh;
function Ph(e, t) {
    var r = -1
      , n = Mo(e) ? Array(e.length) : [];
    return (gh(e, function(o, a, s) {
        n[++r] = t(o, a, s);
    }),
    n);
}
function zh(e, t) {
    var r = Jt(e) ? Nc : Ph;
    return r(e, Qs(t));
}
function Hh(e) {
    for (var t = -1, r = e == null ? 0 : e.length, n = {}; ++t < r; ) {
        var o = e[t];
        n[o[0]] = o[1];
    }
    return n;
}
var jh = "[object Map]"
  , Nh = "[object Set]"
  , Eh = Object.prototype
  , Bh = Eh.hasOwnProperty;
function gn(e) {
    if (e == null)
        return !0;
    if (Mo(e) && (Jt(e) || typeof e == "string" || typeof e.splice == "function" || fs(e) || Yc(e) || Gc(e)))
        return !e.length;
    var t = N1(e);
    if (t == jh || t == Nh)
        return !e.size;
    if (Cc(e))
        return !c3(e).length;
    for (var r in e)
        if (Bh.call(e, r))
            return !1;
    return !0;
}
function v3(e, t, r, n) {
    if (!cr(e))
        return e;
    t = Ws(t, e);
    for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
        var c = Pa(t[o])
          , l = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
            return e;
        if (o != s) {
            var f = i[c];
            (l = n ? n(f, c, i) : void 0),
            l === void 0 && (l = cr(f) ? f : Ec(t[o + 1]) ? [] : {});
        }
        p8(i, c, l),
        (i = i[c]);
    }
    return e;
}
function Th(e, t, r) {
    for (var n = -1, o = t.length, a = {}; ++n < o; ) {
        var s = t[n]
          , i = Lc(e, s);
        r(i, s) && v3(a, Ws(s, e), i);
    }
    return a;
}
function Js(e, t) {
    if (e == null)
        return {};
    var r = Nc(lp(e), function(n) {
        return [n];
    });
    return ((t = Qs(t)),
    Th(e, r, function(n, o) {
        return t(n, o[0]);
    }));
}
function Ch(e, t, r) {
    return e == null ? e : v3(e, t, r);
}
var Gh = "Expected a function";
function Yh(e, t, r) {
    var n = !0
      , o = !0;
    if (typeof e != "function")
        throw new TypeError(Gh);
    return (cr(r) && ((n = "leading"in r ? !!r.leading : n),
    (o = "trailing"in r ? !!r.trailing : o)),
    Oh(e, t, {
        leading: n,
        maxWait: t,
        trailing: o
    }));
}
var Fh = !1
  , Ih = Object.defineProperty
  , Lh = Object.defineProperties
  , Rh = Object.getOwnPropertyDescriptors
  , Cl = Object.getOwnPropertySymbols
  , Xh = Object.prototype.hasOwnProperty
  , Zh = Object.prototype.propertyIsEnumerable
  , Gl = (e, t, r) => t in e ? Ih(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : (e[t] = r)
  , kh = (e, t) => {
    for (var r in t || (t = {}))
        Xh.call(t, r) && Gl(e, r, t[r]);
    if (Cl)
        for (var r of Cl(t))
            Zh.call(t, r) && Gl(e, r, t[r]);
    return e;
}
  , Uh = (e, t) => Lh(e, Rh(t));
function zY(e, t) {
    var r;
    const n = Cs();
    return (l4( () => {
        n.value = e();
    }
    , Uh(kh({}, t), {
        flush: (r = t == null ? void 0 : t.flush) != null ? r : "sync"
    })),
    dc(n));
}
var Yl;
const Nn = typeof window < "u"
  , Sh = (e) => typeof e < "u"
  , HY = (e) => typeof e == "boolean"
  , Wh = (e) => typeof e == "function"
  , ps = (e) => typeof e == "number"
  , Qh = (e) => typeof e == "string"
  , Hi = () => {}
;
Nn && (Yl = window == null ? void 0 : window.navigator) != null && Yl.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ga(e) {
    return typeof e == "function" ? e() : Oe(e);
}
function w3(e, t) {
    function r(...n) {
        e( () => t.apply(this, n), {
            fn: t,
            thisArg: this,
            args: n
        });
    }
    return r;
}
function Jh(e, t={}) {
    let r, n;
    return (a) => {
        const s = ga(e)
          , i = ga(t.maxWait);
        if ((r && clearTimeout(r),
        s <= 0 || (i !== void 0 && i <= 0)))
            return n && (clearTimeout(n),
            (n = null)),
            a();
        i && !n && (n = setTimeout( () => {
            r && clearTimeout(r),
            (n = null),
            a();
        }
        , i)),
        (r = setTimeout( () => {
            n && clearTimeout(n),
            (n = null),
            a();
        }
        , s));
    }
    ;
}
function Vh(e, t=!0, r=!0) {
    let n = 0, o, a = !0;
    const s = () => {
        o && (clearTimeout(o),
        (o = void 0));
    }
    ;
    return (c) => {
        const l = ga(e)
          , f = Date.now() - n;
        if ((s(),
        l <= 0))
            return (n = Date.now()),
            c();
        f > l && (r || !a) ? ((n = Date.now()),
        c()) : t && (o = setTimeout( () => {
            (n = Date.now()),
            (a = !0),
            s(),
            c();
        }
        , l)),
        !r && !o && (o = setTimeout( () => (a = !0), l)),
        (a = !1);
    }
    ;
}
function qh(e) {
    return e;
}
function Xc(e) {
    return Tu() ? (Cu(e),
    !0) : !1;
}
function Kh(e, t=200, r={}) {
    return w3(Jh(t, r), e);
}
function jY(e, t=200, r={}) {
    if (t <= 0)
        return e;
    const n = le(e.value)
      , o = Kh( () => {
        n.value = e.value;
    }
    , t, r);
    return Je(e, () => o()),
    n;
}
function NY(e, t=200, r=!1, n=!0) {
    return w3(Vh(t, r, n), e);
}
function _h(e, t=!0) {
    ct() ? en(e) : t ? e() : br(e);
}
function $h(e, t, r={}) {
    const {immediate: n=!0} = r
      , o = le(!1);
    let a = null;
    function s() {
        a && (clearTimeout(a),
        (a = null));
    }
    function i() {
        (o.value = !1),
        s();
    }
    function c(...l) {
        s(),
        (o.value = !0),
        (a = setTimeout( () => {
            (o.value = !1),
            (a = null),
            e(...l);
        }
        , ga(t)));
    }
    return (n && ((o.value = !0),
    Nn && c()),
    Xc(i),
    {
        isPending: o,
        start: c,
        stop: i
    });
}
function Vn(e) {
    var t;
    const r = ga(e);
    return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const Vs = Nn ? window : void 0
  , em = Nn ? window.document : void 0;
function Xr(...e) {
    let t, r, n, o;
    if ((Qh(e[0]) ? (([r,n,o] = e),
    (t = Vs)) : ([t,r,n,o] = e),
    !t))
        return Hi;
    let a = Hi;
    const s = Je( () => Vn(t), (c) => {
        a(),
        c && (c.addEventListener(r, n, o),
        (a = () => {
            c.removeEventListener(r, n, o),
            (a = Hi);
        }
        ));
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , i = () => {
        s(),
        a();
    }
    ;
    return Xc(i),
    i;
}
function EY(e, t, r={}) {
    const {window: n=Vs, ignore: o, capture: a=!0, detectIframe: s=!1, } = r;
    if (!n)
        return;
    const i = le(!0);
    let c;
    const l = (w) => {
        n.clearTimeout(c);
        const y = Vn(e);
        !y || y === w.target || w.composedPath().includes(y) || !i.value || t(w);
    }
      , f = (w) => o && o.some( (y) => {
        const x = Vn(y);
        return x && (w.target === x || w.composedPath().includes(x));
    }
    )
      , d = [Xr(n, "click", l, {
        passive: !0,
        capture: a
    }), Xr(n, "pointerdown", (w) => {
        const y = Vn(e);
        i.value = !!y && !w.composedPath().includes(y) && !f(w);
    }
    , {
        passive: !0
    }), Xr(n, "pointerup", (w) => {
        if (w.button === 0) {
            const y = w.composedPath();
            (w.composedPath = () => y),
            (c = n.setTimeout( () => l(w), 50));
        }
    }
    , {
        passive: !0
    }), s && Xr(n, "blur", (w) => {
        var y;
        const x = Vn(e);
        ((y = document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(x != null && x.contains(document.activeElement)) && t(w);
    }
    ), ].filter(Boolean);
    return () => d.forEach( (w) => w());
}
function tm(e, t=!1) {
    const r = le()
      , n = () => (r.value = !!e());
    return n(),
    _h(n, t),
    r;
}
function rm(e) {
    return JSON.parse(JSON.stringify(e));
}
const Fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Il = "__vueuse_ssr_handlers__";
Fl[Il] = Fl[Il] || {};
function BY({document: e=em}={}) {
    if (!e)
        return le("visible");
    const t = le(e.visibilityState);
    return (Xr(e, "visibilitychange", () => {
        t.value = e.visibilityState;
    }
    ),
    t);
}
var Ll = Object.getOwnPropertySymbols
  , nm = Object.prototype.hasOwnProperty
  , om = Object.prototype.propertyIsEnumerable
  , am = (e, t) => {
    var r = {};
    for (var n in e)
        nm.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ll)
        for (var n of Ll(e))
            t.indexOf(n) < 0 && om.call(e, n) && (r[n] = e[n]);
    return r;
}
;
function sm(e, t, r={}) {
    const n = r
      , {window: o=Vs} = n
      , a = am(n, ["window"]);
    let s;
    const i = tm( () => o && "ResizeObserver"in o)
      , c = () => {
        s && (s.disconnect(),
        (s = void 0));
    }
      , l = Je( () => Vn(e), (d) => {
        c(),
        i.value && o && d && ((s = new ResizeObserver(t)),
        s.observe(d, a));
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , f = () => {
        c(),
        l();
    }
    ;
    return Xc(f),
    {
        isSupported: i,
        stop: f
    };
}
var Rl;
(function(e) {
    (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
}
)(Rl || (Rl = {}));
var im = Object.defineProperty
  , Xl = Object.getOwnPropertySymbols
  , cm = Object.prototype.hasOwnProperty
  , lm = Object.prototype.propertyIsEnumerable
  , Zl = (e, t, r) => t in e ? im(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : (e[t] = r)
  , um = (e, t) => {
    for (var r in t || (t = {}))
        cm.call(t, r) && Zl(e, r, t[r]);
    if (Xl)
        for (var r of Xl(t))
            lm.call(t, r) && Zl(e, r, t[r]);
    return e;
}
;
const fm = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
um({
    linear: qh
}, fm);
function TY(e, t, r, n={}) {
    var o, a, s;
    const {clone: i=!1, passive: c=!1, eventName: l, deep: f=!1, defaultValue: d, } = n
      , u = ct()
      , w = r || (u == null ? void 0 : u.emit) || ((o = u == null ? void 0 : u.$emit) == null ? void 0 : o.bind(u)) || ((s = (a = u == null ? void 0 : u.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(u == null ? void 0 : u.proxy));
    let y = l;
    t || (t = "modelValue"),
    (y = l || y || `update:${t.toString()}`);
    const x = (h) => (i ? (Wh(i) ? i(h) : rm(h)) : h)
      , v = () => (Sh(e[t]) ? x(e[t]) : d);
    if (c) {
        const h = v()
          , m = le(h);
        return (Je( () => e[t], (A) => (m.value = x(A))),
        Je(m, (A) => {
            (A !== e[t] || f) && w(y, A);
        }
        , {
            deep: f
        }),
        m);
    } else
        return Me({
            get() {
                return v();
            },
            set(h) {
                w(y, h);
            },
        });
}
function CY({window: e=Vs}={}) {
    if (!e)
        return le(!1);
    const t = le(e.document.hasFocus());
    return (Xr(e, "blur", () => {
        t.value = !1;
    }
    ),
    Xr(e, "focus", () => {
        t.value = !0;
    }
    ),
    t);
}
const dm = (e) => e === void 0
  , GY = (e) => (!e && e !== 0) || (fe(e) && e.length === 0) || (Ve(e) && !Object.keys(e).length)
  , pm = (e) => (typeof Element > "u" ? !1 : e instanceof Element)
  , kl = (e) => Object.keys(e)
  , YY = (e) => Object.entries(e)
  , FY = (e, t, r) => ({
    get value() {
        return l3(e, t, r);
    },
    set value(n) {
        Ch(e, t, n);
    },
})
  , y3 = (e="") => e.split(" ").filter( (t) => !!t.trim())
  , IY = (e, t) => {
    if (!e || !t)
        return !1;
    if (t.includes(" "))
        throw new Error("className should not contain space.");
    return e.classList.contains(t);
}
  , LY = (e, t) => {
    !e || !t.trim() || e.classList.add(...y3(t));
}
  , RY = (e, t) => {
    !e || !t.trim() || e.classList.remove(...y3(t));
}
  , XY = (e, t) => {
    var r;
    if (!Nn || !e || !t)
        return "";
    let n = Ct(t);
    n === "float" && (n = "cssFloat");
    try {
        const o = e.style[n];
        if (o)
            return o;
        const a = (r = document.defaultView) == null ? void 0 : r.getComputedStyle(e, "");
        return a ? a[n] : "";
    } catch {
        return e.style[n];
    }
}
;
function hm(e, t="px") {
    if (!e)
        return "";
    if (Se(e))
        return e;
    if (ps(e))
        return `${e}${t}`;
}
/*! Element Plus Icons Vue v2.3.1 */
var mm = xe({
    name: "ArrowDown",
    __name: "arrow-down",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z",
        }), ]));
    },
})
  , ZY = mm
  , gm = xe({
    name: "ArrowLeft",
    __name: "arrow-left",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z",
        }), ]));
    },
})
  , kY = gm
  , vm = xe({
    name: "ArrowRight",
    __name: "arrow-right",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z",
        }), ]));
    },
})
  , UY = vm
  , wm = xe({
    name: "ArrowUp",
    __name: "arrow-up",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0",
        }), ]));
    },
})
  , SY = wm
  , ym = xe({
    name: "Calendar",
    __name: "calendar",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64",
        }), ]));
    },
})
  , WY = ym
  , xm = xe({
    name: "CaretRight",
    __name: "caret-right",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M384 192v640l384-320.064z"
        })]));
    },
})
  , QY = xm
  , Om = xe({
    name: "CaretTop",
    __name: "caret-top",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 320 192 704h639.936z"
        })]));
    },
})
  , JY = Om
  , Am = xe({
    name: "Check",
    __name: "check",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z",
        }), ]));
    },
})
  , VY = Am
  , bm = xe({
    name: "CircleCheck",
    __name: "circle-check",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
        }), Ae("path", {
            fill: "currentColor",
            d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z",
        }), ]));
    },
})
  , Dm = bm
  , Mm = xe({
    name: "CircleCloseFilled",
    __name: "circle-close-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z",
        }), ]));
    },
})
  , x3 = Mm
  , Pm = xe({
    name: "CircleClose",
    __name: "circle-close",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z",
        }), Ae("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
        }), ]));
    },
})
  , zm = Pm
  , Hm = xe({
    name: "Clock",
    __name: "clock",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
        }), Ae("path", {
            fill: "currentColor",
            d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32",
        }), Ae("path", {
            fill: "currentColor",
            d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32",
        }), ]));
    },
})
  , qY = Hm
  , jm = xe({
    name: "Close",
    __name: "close",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z",
        }), ]));
    },
})
  , O3 = jm
  , Nm = xe({
    name: "DArrowLeft",
    __name: "d-arrow-left",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z",
        }), ]));
    },
})
  , KY = Nm
  , Em = xe({
    name: "DArrowRight",
    __name: "d-arrow-right",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z",
        }), ]));
    },
})
  , _Y = Em
  , Bm = xe({
    name: "Delete",
    __name: "delete",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32",
        }), ]));
    },
})
  , $Y = Bm
  , Tm = xe({
    name: "Document",
    __name: "document",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z",
        }), ]));
    },
})
  , eF = Tm
  , Cm = xe({
    name: "FullScreen",
    __name: "full-screen",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z",
        }), ]));
    },
})
  , tF = Cm
  , Gm = xe({
    name: "Hide",
    __name: "hide",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
        }), Ae("path", {
            fill: "currentColor",
            d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
        }), ]));
    },
})
  , rF = Gm
  , Ym = xe({
    name: "InfoFilled",
    __name: "info-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z",
        }), ]));
    },
})
  , A3 = Ym
  , Fm = xe({
    name: "Loading",
    __name: "loading",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z",
        }), ]));
    },
})
  , Im = Fm
  , Lm = xe({
    name: "Minus",
    __name: "minus",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64",
        }), ]));
    },
})
  , nF = Lm
  , Rm = xe({
    name: "MoreFilled",
    __name: "more-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224",
        }), ]));
    },
})
  , oF = Rm
  , Xm = xe({
    name: "More",
    __name: "more",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96",
        }), ]));
    },
})
  , aF = Xm
  , Zm = xe({
    name: "Plus",
    __name: "plus",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z",
        }), ]));
    },
})
  , sF = Zm
  , km = xe({
    name: "RefreshLeft",
    __name: "refresh-left",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z",
        }), ]));
    },
})
  , iF = km
  , Um = xe({
    name: "RefreshRight",
    __name: "refresh-right",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z",
        }), ]));
    },
})
  , cF = Um
  , Sm = xe({
    name: "ScaleToOriginal",
    __name: "scale-to-original",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512",
        }), ]));
    },
})
  , lF = Sm
  , Wm = xe({
    name: "Search",
    __name: "search",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704",
        }), ]));
    },
})
  , uF = Wm
  , Qm = xe({
    name: "StarFilled",
    __name: "star-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z",
        }), ]));
    },
})
  , fF = Qm
  , Jm = xe({
    name: "Star",
    __name: "star",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z",
        }), ]));
    },
})
  , dF = Jm
  , Vm = xe({
    name: "SuccessFilled",
    __name: "success-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z",
        }), ]));
    },
})
  , b3 = Vm
  , qm = xe({
    name: "View",
    __name: "view",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160",
        }), ]));
    },
})
  , pF = qm
  , Km = xe({
    name: "WarningFilled",
    __name: "warning-filled",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4",
        }), ]));
    },
})
  , D3 = Km
  , _m = xe({
    name: "ZoomIn",
    __name: "zoom-in",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z",
        }), ]));
    },
})
  , hF = _m
  , $m = xe({
    name: "ZoomOut",
    __name: "zoom-out",
    setup(e) {
        return (t, r) => (we(),
        je("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [Ae("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64",
        }), ]));
    },
})
  , mF = $m;
const M3 = "__epPropKey"
  , Zr = (e) => e
  , eg = (e) => Ve(e) && !!e[M3]
  , P3 = (e, t) => {
    if (!Ve(e) || eg(e))
        return e;
    const {values: r, required: n, default: o, type: a, validator: s} = e
      , c = {
        type: a,
        required: !!n,
        validator: r || s ? (l) => {
            let f = !1
              , d = [];
            if ((r && ((d = Array.from(r)),
            Ce(e, "default") && d.push(o),
            f || (f = d.includes(l))),
            s && (f || (f = s(l))),
            !f && d.length > 0)) {
                const u = [...new Set(d)].map( (w) => JSON.stringify(w)).join(", ");
                e4(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${u}], got value ${JSON.stringify(l)}.`);
            }
            return f;
        }
        : void 0,
        [M3]: !0,
    };
    return Ce(e, "default") && (c.default = o),
    c;
}
  , qs = (e) => Hh(Object.entries(e).map( ([t,r]) => [t, P3(r, t)]))
  , tg = Zr([String, Object, Function])
  , gF = {
    Close: O3
}
  , rg = {
    Close: O3,
    SuccessFilled: b3,
    InfoFilled: A3,
    WarningFilled: D3,
    CircleCloseFilled: x3,
}
  , Ul = {
    success: b3,
    warning: D3,
    error: x3,
    info: A3
}
  , vF = {
    validating: Im,
    success: Dm,
    error: zm
}
  , Zc = (e, t) => {
    if (((e.install = (r) => {
        for (const n of [e, ...Object.values(t ?? {})])
            r.component(n.name, n);
    }
    ),
    t))
        for (const [r,n] of Object.entries(t))
            e[r] = n;
    return e;
}
  , ng = (e, t) => ((e.install = (r) => {
    (e._context = r._context),
    (r.config.globalProperties[t] = e);
}
),
e)
  , wF = (e, t) => ((e.install = (r) => {
    r.directive(t, e);
}
),
e)
  , yF = (e) => ((e.install = Xt),
e)
  , og = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End",
}
  , ag = ["", "default", "small", "large"]
  , xF = {
    large: 40,
    default: 32,
    small: 24
}
  , sg = (e) => e
  , z3 = Symbol()
  , H3 = Symbol("formContextKey")
  , ig = Symbol("formItemContextKey")
  , j3 = (e) => {
    const t = ct();
    return Me( () => {
        var r, n;
        return (n = ((r = t.proxy) == null ? void 0 : r.$props)[e]) != null ? n : void 0;
    }
    );
}
  , hs = le();
function Ks(e, t=void 0) {
    const r = ct() ? pt(z3, hs) : hs;
    return e ? Me( () => {
        var n, o;
        return (o = (n = r.value) == null ? void 0 : n[e]) != null ? o : t;
    }
    ) : r;
}
const cg = (e, t, r=!1) => {
    var n;
    const o = !!ct()
      , a = o ? Ks() : void 0
      , s = (n = t == null ? void 0 : t.provide) != null ? n : o ? Jo : void 0;
    if (!s)
        return;
    const i = Me( () => {
        const c = Oe(e);
        return a != null && a.value ? lg(a.value, c) : c;
    }
    );
    return s(z3, i),
    (r || !hs.value) && (hs.value = i.value),
    i;
}
  , lg = (e, t) => {
    var r;
    const n = [...new Set([...kl(e), ...kl(t)])]
      , o = {};
    for (const a of n)
        o[a] = (r = t[a]) != null ? r : e[a];
    return o;
}
  , ug = P3({
    type: String,
    values: ag,
    required: !1
})
  , OF = (e, t={}) => {
    const r = le(void 0)
      , n = t.prop ? r : j3("size")
      , o = t.global ? r : Ks("size")
      , a = t.form ? {
        size: void 0
    } : pt(H3, void 0)
      , s = t.formItem ? {
        size: void 0
    } : pt(ig, void 0);
    return Me( () => n.value || Oe(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || o.value || "");
}
  , AF = (e) => {
    const t = j3("disabled")
      , r = pt(H3, void 0);
    return Me( () => t.value || Oe(e) || (r == null ? void 0 : r.disabled) || !1);
}
  , fg = "el"
  , dg = "is-"
  , un = (e, t, r, n, o) => {
    let a = `${e}-${t}`;
    return r && (a += `-${r}`),
    n && (a += `__${n}`),
    o && (a += `--${o}`),
    a;
}
  , kc = (e) => {
    const t = Ks("namespace", fg);
    return {
        namespace: t,
        b: (y="") => un(t.value, e, y, "", ""),
        e: (y) => (y ? un(t.value, e, "", y, "") : ""),
        m: (y) => (y ? un(t.value, e, "", "", y) : ""),
        be: (y, x) => (y && x ? un(t.value, e, y, x, "") : ""),
        em: (y, x) => (y && x ? un(t.value, e, "", y, x) : ""),
        bm: (y, x) => (y && x ? un(t.value, e, y, "", x) : ""),
        bem: (y, x, v) => (y && x && v ? un(t.value, e, y, x, v) : ""),
        is: (y, ...x) => {
            const v = x.length >= 1 ? x[0] : !0;
            return y && v ? `${dg}${y}` : "";
        }
        ,
        cssVar: (y) => {
            const x = {};
            for (const v in y)
                y[v] && (x[`--${t.value}-${v}`] = y[v]);
            return x;
        }
        ,
        cssVarName: (y) => `--${t.value}-${y}`,
        cssVarBlock: (y) => {
            const x = {};
            for (const v in y)
                y[v] && (x[`--${t.value}-${e}-${v}`] = y[v]);
            return x;
        }
        ,
        cssVarBlockName: (y) => `--${t.value}-${e}-${y}`,
    };
}
  , Sl = le(0)
  , pg = () => {
    const e = Ks("zIndex", 2e3)
      , t = Me( () => e.value + Sl.value);
    return {
        initialZIndex: e,
        currentZIndex: t,
        nextZIndex: () => (Sl.value++,
        t.value),
    };
}
;
var Uc = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n,o] of t)
        r[n] = o;
    return r;
}
;
const hg = qs({
    size: {
        type: Zr([Number, String])
    },
    color: {
        type: String
    },
})
  , mg = xe({
    name: "ElIcon",
    inheritAttrs: !1
})
  , gg = xe({
    ...mg,
    props: hg,
    setup(e) {
        const t = e
          , r = kc("icon")
          , n = Me( () => {
            const {size: o, color: a} = t;
            return !o && !a ? {} : {
                fontSize: dm(o) ? void 0 : hm(o),
                "--color": a
            };
        }
        );
        return (o, a) => (we(),
        je("i", N4({
            class: Oe(r).b(),
            style: Oe(n)
        }, o.$attrs), [Ls(o.$slots, "default")], 16));
    },
});
var vg = Uc(gg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue", ], ]);
const Wl = Zc(vg)
  , wg = qs({
    value: {
        type: [String, Number],
        default: ""
    },
    max: {
        type: Number,
        default: 99
    },
    isDot: Boolean,
    hidden: Boolean,
    type: {
        type: String,
        values: ["primary", "success", "warning", "info", "danger"],
        default: "danger",
    },
})
  , yg = ["textContent"]
  , xg = xe({
    name: "ElBadge"
})
  , Og = xe({
    ...xg,
    props: wg,
    setup(e, {expose: t}) {
        const r = e
          , n = kc("badge")
          , o = Me( () => r.isDot ? "" : ps(r.value) && ps(r.max) ? r.max < r.value ? `${r.max}+` : `${r.value}` : `${r.value}`);
        return (t({
            content: o
        }),
        (a, s) => (we(),
        je("div", {
            class: Ht(Oe(n).b())
        }, [Ls(a.$slots, "default"), Ze(Xs, {
            name: `${Oe(n).namespace.value}-zoom-in-center`,
            persisted: "",
        }, {
            default: xn( () => [A4(Ae("sup", {
                class: Ht([Oe(n).e("content"), Oe(n).em("content", a.type), Oe(n).is("fixed", !!a.$slots.default), Oe(n).is("dot", a.isDot), ]),
                textContent: Hu(Oe(o)),
            }, null, 10, yg), [[jc, !a.hidden && (Oe(o) || a.isDot)]]), ]),
            _: 1,
        }, 8, ["name"]), ], 2)));
    },
});
var Ag = Uc(Og, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue", ], ]);
const bg = Zc(Ag)
  , E1 = {}
  , Dg = qs({
    a11y: {
        type: Boolean,
        default: !0
    },
    locale: {
        type: Zr(Object)
    },
    size: ug,
    button: {
        type: Zr(Object)
    },
    experimentalFeatures: {
        type: Zr(Object)
    },
    keyboardNavigation: {
        type: Boolean,
        default: !0
    },
    message: {
        type: Zr(Object)
    },
    zIndex: Number,
    namespace: {
        type: String,
        default: "el"
    },
})
  , Mg = xe({
    name: "ElConfigProvider",
    props: Dg,
    setup(e, {slots: t}) {
        Je( () => e.message, (n) => {
            Object.assign(E1, n ?? {});
        }
        , {
            immediate: !0,
            deep: !0
        });
        const r = cg(e);
        return () => Ls(t, "default", {
            config: r == null ? void 0 : r.value
        });
    },
})
  , Pg = Zc(Mg)
  , N3 = ["success", "info", "warning", "error"]
  , Mt = sg({
    customClass: "",
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: "",
    message: "",
    onClose: void 0,
    showClose: !1,
    type: "info",
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: Nn ? document.body : void 0,
})
  , zg = qs({
    customClass: {
        type: String,
        default: Mt.customClass
    },
    center: {
        type: Boolean,
        default: Mt.center
    },
    dangerouslyUseHTMLString: {
        type: Boolean,
        default: Mt.dangerouslyUseHTMLString,
    },
    duration: {
        type: Number,
        default: Mt.duration
    },
    icon: {
        type: tg,
        default: Mt.icon
    },
    id: {
        type: String,
        default: Mt.id
    },
    message: {
        type: Zr([String, Object, Function]),
        default: Mt.message
    },
    onClose: {
        type: Zr(Function),
        required: !1
    },
    showClose: {
        type: Boolean,
        default: Mt.showClose
    },
    type: {
        type: String,
        values: N3,
        default: Mt.type
    },
    offset: {
        type: Number,
        default: Mt.offset
    },
    zIndex: {
        type: Number,
        default: Mt.zIndex
    },
    grouping: {
        type: Boolean,
        default: Mt.grouping
    },
    repeatNum: {
        type: Number,
        default: Mt.repeatNum
    },
})
  , Hg = {
    destroy: () => !0
}
  , ar = Qu([])
  , jg = (e) => {
    const t = ar.findIndex( (o) => o.id === e)
      , r = ar[t];
    let n;
    return t > 0 && (n = ar[t - 1]),
    {
        current: r,
        prev: n
    };
}
  , Ng = (e) => {
    const {prev: t} = jg(e);
    return t ? t.vm.exposed.bottom.value : 0;
}
  , Eg = ["id"]
  , Bg = ["innerHTML"]
  , Tg = xe({
    name: "ElMessage"
})
  , Cg = xe({
    ...Tg,
    props: zg,
    emits: Hg,
    setup(e, {expose: t}) {
        const r = e
          , {Close: n} = rg
          , o = kc("message")
          , a = le()
          , s = le(!1)
          , i = le(0);
        let c;
        const l = Me( () => r.type ? (r.type === "error" ? "danger" : r.type) : "info")
          , f = Me( () => {
            const O = r.type;
            return {
                [o.bm("icon", O)]: O && Ul[O]
            };
        }
        )
          , d = Me( () => r.icon || Ul[r.type] || "")
          , u = Me( () => Ng(r.id))
          , w = Me( () => r.offset + u.value)
          , y = Me( () => i.value + w.value)
          , x = Me( () => ({
            top: `${w.value}px`,
            zIndex: r.zIndex
        }));
        function v() {
            r.duration !== 0 && ({stop: c} = $h( () => {
                m();
            }
            , r.duration));
        }
        function h() {
            c == null || c();
        }
        function m() {
            s.value = !1;
        }
        function A({code: O}) {
            O === og.esc && m();
        }
        return (en( () => {
            v(),
            (s.value = !0);
        }
        ),
        Je( () => r.repeatNum, () => {
            h(),
            v();
        }
        ),
        Xr(document, "keydown", A),
        sm(a, () => {
            i.value = a.value.getBoundingClientRect().height;
        }
        ),
        t({
            visible: s,
            bottom: y,
            close: m
        }),
        (O, b) => (we(),
        vr(Xs, {
            name: Oe(o).b("fade"),
            onBeforeLeave: O.onClose,
            onAfterLeave: b[0] || (b[0] = (D) => O.$emit("destroy")),
            persisted: "",
        }, {
            default: xn( () => [A4(Ae("div", {
                id: O.id,
                ref_key: "messageRef",
                ref: a,
                class: Ht([Oe(o).b(), {
                    [Oe(o).m(O.type)]: O.type && !O.icon
                }, Oe(o).is("center", O.center), Oe(o).is("closable", O.showClose), O.customClass, ]),
                style: Oo(Oe(x)),
                role: "alert",
                onMouseenter: h,
                onMouseleave: v,
            }, [O.repeatNum > 1 ? (we(),
            vr(Oe(bg), {
                key: 0,
                value: O.repeatNum,
                type: Oe(l),
                class: Ht(Oe(o).e("badge")),
            }, null, 8, ["value", "type", "class"])) : Zo("v-if", !0), Oe(d) ? (we(),
            vr(Oe(Wl), {
                key: 1,
                class: Ht([Oe(o).e("icon"), Oe(f)])
            }, {
                default: xn( () => [(we(),
                vr(g7(Oe(d))))]),
                _: 1,
            }, 8, ["class"])) : Zo("v-if", !0), Ls(O.$slots, "default", {}, () => [O.dangerouslyUseHTMLString ? (we(),
            je(st, {
                key: 1
            }, [Zo(" Caution here, message could've been compromised, never use user's input as message "), Ae("p", {
                class: Ht(Oe(o).e("content")),
                innerHTML: O.message,
            }, null, 10, Bg), ], 2112)) : (we(),
            je("p", {
                key: 0,
                class: Ht(Oe(o).e("content"))
            }, Hu(O.message), 3)), ]), O.showClose ? (we(),
            vr(Oe(Wl), {
                key: 2,
                class: Ht(Oe(o).e("closeBtn")),
                onClick: u6(m, ["stop"]),
            }, {
                default: xn( () => [Ze(Oe(n))]),
                _: 1
            }, 8, ["class", "onClick"])) : Zo("v-if", !0), ], 46, Eg), [[jc, s.value]]), ]),
            _: 3,
        }, 8, ["name", "onBeforeLeave"])));
    },
});
var Gg = Uc(Cg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue", ], ]);
let Yg = 1;
const E3 = (e) => {
    const t = !e || Se(e) || Dr(e) || ve(e) ? {
        message: e
    } : e
      , r = {
        ...Mt,
        ...t
    };
    if (!r.appendTo)
        r.appendTo = document.body;
    else if (Se(r.appendTo)) {
        let n = document.querySelector(r.appendTo);
        pm(n) || (n = document.body),
        (r.appendTo = n);
    }
    return r;
}
  , Fg = (e) => {
    const t = ar.indexOf(e);
    if (t === -1)
        return;
    ar.splice(t, 1);
    const {handler: r} = e;
    r.close();
}
  , Ig = ({appendTo: e, ...t}, r) => {
    const {nextZIndex: n} = pg()
      , o = `message_${Yg++}`
      , a = t.onClose
      , s = document.createElement("div")
      , i = {
        ...t,
        zIndex: n() + t.zIndex,
        id: o,
        onClose: () => {
            a == null || a(),
            Fg(d);
        }
        ,
        onDestroy: () => {
            us(null, s);
        }
        ,
    }
      , c = Ze(Gg, i, ve(i.message) || Dr(i.message) ? {
        default: ve(i.message) ? i.message : () => i.message
    } : null);
    (c.appContext = r || mo._context),
    us(c, s),
    e.appendChild(s.firstElementChild);
    const l = c.component
      , d = {
        id: o,
        vnode: c,
        vm: l,
        handler: {
            close: () => {
                l.exposed.visible.value = !1;
            }
            ,
        },
        props: c.component.props,
    };
    return d;
}
  , mo = (e={}, t) => {
    if (!Nn)
        return {
            close: () => {}
        };
    if (ps(E1.max) && ar.length >= E1.max)
        return {
            close: () => {}
        };
    const r = E3(e);
    if (r.grouping && ar.length) {
        const o = ar.find( ({vnode: a}) => {
            var s;
            return ((s = a.props) == null ? void 0 : s.message) === r.message;
        }
        );
        if (o)
            return (o.props.repeatNum += 1),
            (o.props.type = r.type),
            o.handler;
    }
    const n = Ig(r, t);
    return ar.push(n),
    n.handler;
}
;
N3.forEach( (e) => {
    mo[e] = (t={}, r) => {
        const n = E3(t);
        return mo({
            ...n,
            type: e
        }, r);
    }
    ;
}
);
function Lg(e) {
    for (const t of ar)
        (!e || e === t.props.type) && t.handler.close();
}
mo.closeAll = Lg;
mo._context = null;
const Rg = ng(mo, "$message");
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const B1 = typeof window < "u"
  , Xg = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol"
  , tn = (e) => (Xg ? Symbol(e) : e)
  , Zg = (e, t, r) => kg({
    l: e,
    k: t,
    s: r
})
  , kg = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , it = (e) => typeof e == "number" && isFinite(e)
  , Ug = (e) => Wc(e) === "[object Date]"
  , ms = (e) => Wc(e) === "[object RegExp]"
  , _s = (e) => Le(e) && Object.keys(e).length === 0;
function Sg(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack));
}
const vt = Object.assign;
function Ql(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Wg = Object.prototype.hasOwnProperty;
function Sc(e, t) {
    return Wg.call(e, t);
}
const tt = Array.isArray
  , dt = (e) => typeof e == "function"
  , ue = (e) => typeof e == "string"
  , $e = (e) => typeof e == "boolean"
  , Ue = (e) => e !== null && typeof e == "object"
  , B3 = Object.prototype.toString
  , Wc = (e) => B3.call(e)
  , Le = (e) => Wc(e) === "[object Object]"
  , Qg = (e) => e == null ? "" : tt(e) || (Le(e) && e.toString === B3) ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Re = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15,
};
function $s(e, t, r={}) {
    const {domain: n, messages: o, args: a} = r
      , s = e
      , i = new SyntaxError(String(s));
    return (i.code = e),
    t && (i.location = t),
    (i.domain = n),
    i;
}
function Jg(e) {
    throw e;
}
function Vg(e, t, r) {
    return {
        line: e,
        column: t,
        offset: r
    };
}
function T1(e, t, r) {
    const n = {
        start: e,
        end: t
    };
    return r != null && (n.source = r),
    n;
}
const dr = " "
  , qg = "\r"
  , At = `
`
  , Kg = String.fromCharCode(8232)
  , _g = String.fromCharCode(8233);
function $g(e) {
    const t = e;
    let r = 0
      , n = 1
      , o = 1
      , a = 0;
    const s = (P) => t[P] === qg && t[P + 1] === At
      , i = (P) => t[P] === At
      , c = (P) => t[P] === _g
      , l = (P) => t[P] === Kg
      , f = (P) => s(P) || i(P) || c(P) || l(P)
      , d = () => r
      , u = () => n
      , w = () => o
      , y = () => a
      , x = (P) => (s(P) || c(P) || l(P) ? At : t[P])
      , v = () => x(r)
      , h = () => x(r + a);
    function m() {
        return (a = 0),
        f(r) && (n++,
        (o = 0)),
        s(r) && r++,
        r++,
        o++,
        t[r];
    }
    function A() {
        return s(r + a) && a++,
        a++,
        t[r + a];
    }
    function O() {
        (r = 0),
        (n = 1),
        (o = 1),
        (a = 0);
    }
    function b(P=0) {
        a = P;
    }
    function D() {
        const P = r + a;
        for (; P !== r; )
            m();
        a = 0;
    }
    return {
        index: d,
        line: u,
        column: w,
        peekOffset: y,
        charAt: x,
        currentChar: v,
        currentPeek: h,
        next: m,
        peek: A,
        reset: O,
        resetPeek: b,
        skipToPeek: D,
    };
}
const Tr = void 0
  , Jl = "'"
  , ev = "tokenizer";
function tv(e, t={}) {
    const r = t.location !== !1
      , n = $g(e)
      , o = () => n.index()
      , a = () => Vg(n.line(), n.column(), n.index())
      , s = a()
      , i = o()
      , c = {
        currentType: 14,
        offset: i,
        startLoc: s,
        endLoc: s,
        lastType: 14,
        lastOffset: i,
        lastStartLoc: s,
        lastEndLoc: s,
        braceNest: 0,
        inLinked: !1,
        text: "",
    }
      , l = () => c
      , {onError: f} = t;
    function d(p, g, M, ...E) {
        const T = l();
        if (((g.column += M),
        (g.offset += M),
        f)) {
            const Z = T1(T.startLoc, g)
              , $ = $s(p, Z, {
                domain: ev,
                args: E
            });
            f($);
        }
    }
    function u(p, g, M) {
        (p.endLoc = a()),
        (p.currentType = g);
        const E = {
            type: g
        };
        return (r && (E.loc = T1(p.startLoc, p.endLoc)),
        M != null && (E.value = M),
        E);
    }
    const w = (p) => u(p, 14);
    function y(p, g) {
        return p.currentChar() === g ? (p.next(),
        g) : (d(Re.EXPECTED_TOKEN, a(), 0, g),
        "");
    }
    function x(p) {
        let g = "";
        for (; p.currentPeek() === dr || p.currentPeek() === At; )
            (g += p.currentPeek()),
            p.peek();
        return g;
    }
    function v(p) {
        const g = x(p);
        return p.skipToPeek(),
        g;
    }
    function h(p) {
        if (p === Tr)
            return !1;
        const g = p.charCodeAt(0);
        return (g >= 97 && g <= 122) || (g >= 65 && g <= 90) || g === 95;
    }
    function m(p) {
        if (p === Tr)
            return !1;
        const g = p.charCodeAt(0);
        return g >= 48 && g <= 57;
    }
    function A(p, g) {
        const {currentType: M} = g;
        if (M !== 2)
            return !1;
        x(p);
        const E = h(p.currentPeek());
        return p.resetPeek(),
        E;
    }
    function O(p, g) {
        const {currentType: M} = g;
        if (M !== 2)
            return !1;
        x(p);
        const E = p.currentPeek() === "-" ? p.peek() : p.currentPeek()
          , T = m(E);
        return p.resetPeek(),
        T;
    }
    function b(p, g) {
        const {currentType: M} = g;
        if (M !== 2)
            return !1;
        x(p);
        const E = p.currentPeek() === Jl;
        return p.resetPeek(),
        E;
    }
    function D(p, g) {
        const {currentType: M} = g;
        if (M !== 8)
            return !1;
        x(p);
        const E = p.currentPeek() === ".";
        return p.resetPeek(),
        E;
    }
    function P(p, g) {
        const {currentType: M} = g;
        if (M !== 9)
            return !1;
        x(p);
        const E = h(p.currentPeek());
        return p.resetPeek(),
        E;
    }
    function Y(p, g) {
        const {currentType: M} = g;
        if (!(M === 8 || M === 12))
            return !1;
        x(p);
        const E = p.currentPeek() === ":";
        return p.resetPeek(),
        E;
    }
    function F(p, g) {
        const {currentType: M} = g;
        if (M !== 10)
            return !1;
        const E = () => {
            const Z = p.currentPeek();
            return Z === "{" ? h(p.peek()) : Z === "@" || Z === "%" || Z === "|" || Z === ":" || Z === "." || Z === dr || !Z ? !1 : Z === At ? (p.peek(),
            E()) : h(Z);
        }
          , T = E();
        return p.resetPeek(),
        T;
    }
    function X(p) {
        x(p);
        const g = p.currentPeek() === "|";
        return p.resetPeek(),
        g;
    }
    function re(p) {
        const g = x(p)
          , M = p.currentPeek() === "%" && p.peek() === "{";
        return p.resetPeek(),
        {
            isModulo: M,
            hasSpace: g.length > 0
        };
    }
    function k(p, g=!0) {
        const M = (T=!1, Z="", $=!1) => {
            const K = p.currentPeek();
            return K === "{" ? Z === "%" ? !1 : T : K === "@" || !K ? Z === "%" ? !0 : T : K === "%" ? (p.peek(),
            M(T, "%", !0)) : K === "|" ? Z === "%" || $ ? !0 : !(Z === dr || Z === At) : K === dr ? (p.peek(),
            M(!0, dr, $)) : K === At ? (p.peek(),
            M(!0, At, $)) : !0;
        }
          , E = M();
        return g && p.resetPeek(),
        E;
    }
    function U(p, g) {
        const M = p.currentChar();
        return M === Tr ? Tr : g(M) ? (p.next(),
        M) : null;
    }
    function I(p) {
        return U(p, (M) => {
            const E = M.charCodeAt(0);
            return ((E >= 97 && E <= 122) || (E >= 65 && E <= 90) || (E >= 48 && E <= 57) || E === 95 || E === 36);
        }
        );
    }
    function Q(p) {
        return U(p, (M) => {
            const E = M.charCodeAt(0);
            return E >= 48 && E <= 57;
        }
        );
    }
    function J(p) {
        return U(p, (M) => {
            const E = M.charCodeAt(0);
            return ((E >= 48 && E <= 57) || (E >= 65 && E <= 70) || (E >= 97 && E <= 102));
        }
        );
    }
    function R(p) {
        let g = ""
          , M = "";
        for (; (g = Q(p)); )
            M += g;
        return M;
    }
    function ne(p) {
        v(p);
        const g = p.currentChar();
        return g !== "%" && d(Re.EXPECTED_TOKEN, a(), 0, g),
        p.next(),
        "%";
    }
    function ie(p) {
        let g = "";
        for (; ; ) {
            const M = p.currentChar();
            if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
                break;
            if (M === "%")
                if (k(p))
                    (g += M),
                    p.next();
                else
                    break;
            else if (M === dr || M === At)
                if (k(p))
                    (g += M),
                    p.next();
                else {
                    if (X(p))
                        break;
                    (g += M),
                    p.next();
                }
            else
                (g += M),
                p.next();
        }
        return g;
    }
    function He(p) {
        v(p);
        let g = ""
          , M = "";
        for (; (g = I(p)); )
            M += g;
        return (p.currentChar() === Tr && d(Re.UNTERMINATED_CLOSING_BRACE, a(), 0),
        M);
    }
    function he(p) {
        v(p);
        let g = "";
        return (p.currentChar() === "-" ? (p.next(),
        (g += `-${R(p)}`)) : (g += R(p)),
        p.currentChar() === Tr && d(Re.UNTERMINATED_CLOSING_BRACE, a(), 0),
        g);
    }
    function ze(p) {
        v(p),
        y(p, "'");
        let g = ""
          , M = "";
        const E = (Z) => Z !== Jl && Z !== At;
        for (; (g = U(p, E)); )
            g === "\\" ? (M += Fe(p)) : (M += g);
        const T = p.currentChar();
        return T === At || T === Tr ? (d(Re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0),
        T === At && (p.next(),
        y(p, "'")),
        M) : (y(p, "'"),
        M);
    }
    function Fe(p) {
        const g = p.currentChar();
        switch (g) {
        case "\\":
        case "'":
            return p.next(),
            `\\${g}`;
        case "u":
            return Te(p, g, 4);
        case "U":
            return Te(p, g, 6);
        default:
            return d(Re.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, g),
            "";
        }
    }
    function Te(p, g, M) {
        y(p, g);
        let E = "";
        for (let T = 0; T < M; T++) {
            const Z = J(p);
            if (!Z) {
                d(Re.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${g}${E}${p.currentChar()}`);
                break;
            }
            E += Z;
        }
        return `\\${g}${E}`;
    }
    function L(p) {
        v(p);
        let g = ""
          , M = "";
        const E = (T) => T !== "{" && T !== "}" && T !== dr && T !== At;
        for (; (g = U(p, E)); )
            M += g;
        return M;
    }
    function oe(p) {
        let g = ""
          , M = "";
        for (; (g = I(p)); )
            M += g;
        return M;
    }
    function _(p) {
        const g = (M=!1, E) => {
            const T = p.currentChar();
            return T === "{" || T === "%" || T === "@" || T === "|" || !T || T === dr ? E : T === At ? ((E += T),
            p.next(),
            g(M, E)) : ((E += T),
            p.next(),
            g(!0, E));
        }
        ;
        return g(!1, "");
    }
    function ae(p) {
        v(p);
        const g = y(p, "|");
        return v(p),
        g;
    }
    function de(p, g) {
        let M = null;
        switch (p.currentChar()) {
        case "{":
            return (g.braceNest >= 1 && d(Re.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0),
            p.next(),
            (M = u(g, 2, "{")),
            v(p),
            g.braceNest++,
            M);
        case "}":
            return (g.braceNest > 0 && g.currentType === 2 && d(Re.EMPTY_PLACEHOLDER, a(), 0),
            p.next(),
            (M = u(g, 3, "}")),
            g.braceNest--,
            g.braceNest > 0 && v(p),
            g.inLinked && g.braceNest === 0 && (g.inLinked = !1),
            M);
        case "@":
            return (g.braceNest > 0 && d(Re.UNTERMINATED_CLOSING_BRACE, a(), 0),
            (M = Pe(p, g) || w(g)),
            (g.braceNest = 0),
            M);
        default:
            let T = !0
              , Z = !0
              , $ = !0;
            if (X(p))
                return (g.braceNest > 0 && d(Re.UNTERMINATED_CLOSING_BRACE, a(), 0),
                (M = u(g, 1, ae(p))),
                (g.braceNest = 0),
                (g.inLinked = !1),
                M);
            if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7))
                return (d(Re.UNTERMINATED_CLOSING_BRACE, a(), 0),
                (g.braceNest = 0),
                me(p, g));
            if ((T = A(p, g)))
                return (M = u(g, 5, He(p))),
                v(p),
                M;
            if ((Z = O(p, g)))
                return (M = u(g, 6, he(p))),
                v(p),
                M;
            if (($ = b(p, g)))
                return (M = u(g, 7, ze(p))),
                v(p),
                M;
            if (!T && !Z && !$)
                return ((M = u(g, 13, L(p))),
                d(Re.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M.value),
                v(p),
                M);
            break;
        }
        return M;
    }
    function Pe(p, g) {
        const {currentType: M} = g;
        let E = null;
        const T = p.currentChar();
        switch (((M === 8 || M === 9 || M === 12 || M === 10) && (T === At || T === dr) && d(Re.INVALID_LINKED_FORMAT, a(), 0),
        T)) {
        case "@":
            return p.next(),
            (E = u(g, 8, "@")),
            (g.inLinked = !0),
            E;
        case ".":
            return v(p),
            p.next(),
            u(g, 9, ".");
        case ":":
            return v(p),
            p.next(),
            u(g, 10, ":");
        default:
            return X(p) ? ((E = u(g, 1, ae(p))),
            (g.braceNest = 0),
            (g.inLinked = !1),
            E) : D(p, g) || Y(p, g) ? (v(p),
            Pe(p, g)) : P(p, g) ? (v(p),
            u(g, 12, oe(p))) : F(p, g) ? (v(p),
            T === "{" ? de(p, g) || E : u(g, 11, _(p))) : (M === 8 && d(Re.INVALID_LINKED_FORMAT, a(), 0),
            (g.braceNest = 0),
            (g.inLinked = !1),
            me(p, g));
        }
    }
    function me(p, g) {
        let M = {
            type: 14
        };
        if (g.braceNest > 0)
            return de(p, g) || w(g);
        if (g.inLinked)
            return Pe(p, g) || w(g);
        switch (p.currentChar()) {
        case "{":
            return de(p, g) || w(g);
        case "}":
            return d(Re.UNBALANCED_CLOSING_BRACE, a(), 0),
            p.next(),
            u(g, 3, "}");
        case "@":
            return Pe(p, g) || w(g);
        default:
            if (X(p))
                return (M = u(g, 1, ae(p))),
                (g.braceNest = 0),
                (g.inLinked = !1),
                M;
            const {isModulo: T, hasSpace: Z} = re(p);
            if (T)
                return Z ? u(g, 0, ie(p)) : u(g, 4, ne(p));
            if (k(p))
                return u(g, 0, ie(p));
            break;
        }
        return M;
    }
    function ge() {
        const {currentType: p, offset: g, startLoc: M, endLoc: E} = c;
        return ((c.lastType = p),
        (c.lastOffset = g),
        (c.lastStartLoc = M),
        (c.lastEndLoc = E),
        (c.offset = o()),
        (c.startLoc = a()),
        n.currentChar() === Tr ? u(c, 14) : me(n, c));
    }
    return {
        nextToken: ge,
        currentOffset: o,
        currentPosition: a,
        context: l
    };
}
const rv = "parser"
  , nv = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ov(e, t, r) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const n = parseInt(t || r, 16);
            return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
        }
    }
}
function av(e={}) {
    const t = e.location !== !1
      , {onError: r} = e;
    function n(h, m, A, O, ...b) {
        const D = h.currentPosition();
        if (((D.offset += O),
        (D.column += O),
        r)) {
            const P = T1(A, D)
              , Y = $s(m, P, {
                domain: rv,
                args: b
            });
            r(Y);
        }
    }
    function o(h, m, A) {
        const O = {
            type: h,
            start: m,
            end: m
        };
        return t && (O.loc = {
            start: A,
            end: A
        }),
        O;
    }
    function a(h, m, A, O) {
        (h.end = m),
        O && (h.type = O),
        t && h.loc && (h.loc.end = A);
    }
    function s(h, m) {
        const A = h.context()
          , O = o(3, A.offset, A.startLoc);
        return (O.value = m),
        a(O, h.currentOffset(), h.currentPosition()),
        O;
    }
    function i(h, m) {
        const A = h.context()
          , {lastOffset: O, lastStartLoc: b} = A
          , D = o(5, O, b);
        return ((D.index = parseInt(m, 10)),
        h.nextToken(),
        a(D, h.currentOffset(), h.currentPosition()),
        D);
    }
    function c(h, m) {
        const A = h.context()
          , {lastOffset: O, lastStartLoc: b} = A
          , D = o(4, O, b);
        return ((D.key = m),
        h.nextToken(),
        a(D, h.currentOffset(), h.currentPosition()),
        D);
    }
    function l(h, m) {
        const A = h.context()
          , {lastOffset: O, lastStartLoc: b} = A
          , D = o(9, O, b);
        return ((D.value = m.replace(nv, ov)),
        h.nextToken(),
        a(D, h.currentOffset(), h.currentPosition()),
        D);
    }
    function f(h) {
        const m = h.nextToken()
          , A = h.context()
          , {lastOffset: O, lastStartLoc: b} = A
          , D = o(8, O, b);
        return m.type !== 12 ? (n(h, Re.UNEXPECTED_EMPTY_LINKED_MODIFIER, A.lastStartLoc, 0),
        (D.value = ""),
        a(D, O, b),
        {
            nextConsumeToken: m,
            node: D
        }) : (m.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, $t(m)),
        (D.value = m.value || ""),
        a(D, h.currentOffset(), h.currentPosition()),
        {
            node: D
        });
    }
    function d(h, m) {
        const A = h.context()
          , O = o(7, A.offset, A.startLoc);
        return (O.value = m),
        a(O, h.currentOffset(), h.currentPosition()),
        O;
    }
    function u(h) {
        const m = h.context()
          , A = o(6, m.offset, m.startLoc);
        let O = h.nextToken();
        if (O.type === 9) {
            const b = f(h);
            (A.modifier = b.node),
            (O = b.nextConsumeToken || h.nextToken());
        }
        switch ((O.type !== 10 && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(O)),
        (O = h.nextToken()),
        O.type === 2 && (O = h.nextToken()),
        O.type)) {
        case 11:
            O.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(O)),
            (A.key = d(h, O.value || ""));
            break;
        case 5:
            O.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(O)),
            (A.key = c(h, O.value || ""));
            break;
        case 6:
            O.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(O)),
            (A.key = i(h, O.value || ""));
            break;
        case 7:
            O.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(O)),
            (A.key = l(h, O.value || ""));
            break;
        default:
            n(h, Re.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
            const b = h.context()
              , D = o(7, b.offset, b.startLoc);
            return ((D.value = ""),
            a(D, b.offset, b.startLoc),
            (A.key = D),
            a(A, b.offset, b.startLoc),
            {
                nextConsumeToken: O,
                node: A
            });
        }
        return a(A, h.currentOffset(), h.currentPosition()),
        {
            node: A
        };
    }
    function w(h) {
        const m = h.context()
          , A = m.currentType === 1 ? h.currentOffset() : m.offset
          , O = m.currentType === 1 ? m.endLoc : m.startLoc
          , b = o(2, A, O);
        b.items = [];
        let D = null;
        do {
            const F = D || h.nextToken();
            switch (((D = null),
            F.type)) {
            case 0:
                F.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(F)),
                b.items.push(s(h, F.value || ""));
                break;
            case 6:
                F.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(F)),
                b.items.push(i(h, F.value || ""));
                break;
            case 5:
                F.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(F)),
                b.items.push(c(h, F.value || ""));
                break;
            case 7:
                F.value == null && n(h, Re.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, $t(F)),
                b.items.push(l(h, F.value || ""));
                break;
            case 8:
                const X = u(h);
                b.items.push(X.node),
                (D = X.nextConsumeToken || null);
                break;
            }
        } while (m.currentType !== 14 && m.currentType !== 1);
        const P = m.currentType === 1 ? m.lastOffset : h.currentOffset()
          , Y = m.currentType === 1 ? m.lastEndLoc : h.currentPosition();
        return a(b, P, Y),
        b;
    }
    function y(h, m, A, O) {
        const b = h.context();
        let D = O.items.length === 0;
        const P = o(1, m, A);
        (P.cases = []),
        P.cases.push(O);
        do {
            const Y = w(h);
            D || (D = Y.items.length === 0),
            P.cases.push(Y);
        } while (b.currentType !== 14);
        return (D && n(h, Re.MUST_HAVE_MESSAGES_IN_PLURAL, A, 0),
        a(P, h.currentOffset(), h.currentPosition()),
        P);
    }
    function x(h) {
        const m = h.context()
          , {offset: A, startLoc: O} = m
          , b = w(h);
        return m.currentType === 14 ? b : y(h, A, O, b);
    }
    function v(h) {
        const m = tv(h, vt({}, e))
          , A = m.context()
          , O = o(0, A.offset, A.startLoc);
        return (t && O.loc && (O.loc.source = h),
        (O.body = x(m)),
        A.currentType !== 14 && n(m, Re.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, h[A.offset] || ""),
        a(O, m.currentOffset(), m.currentPosition()),
        O);
    }
    return {
        parse: v
    };
}
function $t(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function sv(e, t={}) {
    const r = {
        ast: e,
        helpers: new Set()
    };
    return {
        context: () => r,
        helper: (a) => (r.helpers.add(a),
        a)
    };
}
function Vl(e, t) {
    for (let r = 0; r < e.length; r++)
        Qc(e[r], t);
}
function Qc(e, t) {
    switch (e.type) {
    case 1:
        Vl(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Vl(e.items, t);
        break;
    case 6:
        Qc(e.key, t),
        t.helper("linked"),
        t.helper("type");
        break;
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break;
    }
}
function iv(e, t={}) {
    const r = sv(e);
    r.helper("normalize"),
    e.body && Qc(e.body, r);
    const n = r.context();
    e.helpers = Array.from(n.helpers);
}
function cv(e, t) {
    const {sourceMap: r, filename: n, breakLineCode: o, needIndent: a} = t
      , s = {
        source: e.loc.source,
        filename: n,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: a,
        indentLevel: 0,
    }
      , i = () => s;
    function c(x, v) {
        s.code += x;
    }
    function l(x, v=!0) {
        const h = v ? o : "";
        c(a ? h + "  ".repeat(x) : h);
    }
    function f(x=!0) {
        const v = ++s.indentLevel;
        x && l(v);
    }
    function d(x=!0) {
        const v = --s.indentLevel;
        x && l(v);
    }
    function u() {
        l(s.indentLevel);
    }
    return {
        context: i,
        push: c,
        indent: f,
        deindent: d,
        newline: u,
        helper: (x) => `_${x}`,
        needIndent: () => s.needIndent,
    };
}
function lv(e, t) {
    const {helper: r} = e;
    e.push(`${r("linked")}(`),
    go(e, t.key),
    t.modifier ? (e.push(", "),
    go(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")");
}
function uv(e, t) {
    const {helper: r, needIndent: n} = e;
    e.push(`${r("normalize")}([`),
    e.indent(n());
    const o = t.items.length;
    for (let a = 0; a < o && (go(e, t.items[a]),
    a !== o - 1); a++)
        e.push(", ");
    e.deindent(n()),
    e.push("])");
}
function fv(e, t) {
    const {helper: r, needIndent: n} = e;
    if (t.cases.length > 1) {
        e.push(`${r("plural")}([`),
        e.indent(n());
        const o = t.cases.length;
        for (let a = 0; a < o && (go(e, t.cases[a]),
        a !== o - 1); a++)
            e.push(", ");
        e.deindent(n()),
        e.push("])");
    }
}
function dv(e, t) {
    t.body ? go(e, t.body) : e.push("null");
}
function go(e, t) {
    const {helper: r} = e;
    switch (t.type) {
    case 0:
        dv(e, t);
        break;
    case 1:
        fv(e, t);
        break;
    case 2:
        uv(e, t);
        break;
    case 6:
        lv(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${r("interpolate")}(${r("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    }
}
const pv = (e, t={}) => {
    const r = ue(t.mode) ? t.mode : "normal"
      , n = ue(t.filename) ? t.filename : "message.intl"
      , o = !!t.sourceMap
      , a = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : r !== "arrow"
      , i = e.helpers || []
      , c = cv(e, {
        mode: r,
        filename: n,
        sourceMap: o,
        breakLineCode: a,
        needIndent: s,
    });
    c.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    c.indent(s),
    i.length > 0 && (c.push(`const { ${i.map( (d) => `${d}: _${d}`).join(", ")} } = ctx`),
    c.newline()),
    c.push("return "),
    go(c, e),
    c.deindent(s),
    c.push("}");
    const {code: l, map: f} = c.context();
    return {
        ast: e,
        code: l,
        map: f ? f.toJSON() : void 0
    };
}
;
function hv(e, t={}) {
    const r = vt({}, t)
      , o = av(r).parse(e);
    return iv(o, r),
    pv(o, r);
}
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const rn = [];
rn[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
rn[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
rn[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
rn[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1],
};
rn[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
rn[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
rn[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const mv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function gv(e) {
    return mv.test(e);
}
function vv(e) {
    const t = e.charCodeAt(0)
      , r = e.charCodeAt(e.length - 1);
    return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function wv(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w";
    }
    return "i";
}
function yv(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : gv(t) ? vv(t) : "*" + t;
}
function xv(e) {
    const t = [];
    let r = -1, n = 0, o = 0, a, s, i, c, l, f, d;
    const u = [];
    (u[0] = () => {
        s === void 0 ? (s = i) : (s += i);
    }
    ),
    (u[1] = () => {
        s !== void 0 && (t.push(s),
        (s = void 0));
    }
    ),
    (u[2] = () => {
        u[0](),
        o++;
    }
    ),
    (u[3] = () => {
        if (o > 0)
            o--,
            (n = 4),
            u[0]();
        else {
            if (((o = 0),
            s === void 0 || ((s = yv(s)),
            s === !1)))
                return !1;
            u[1]();
        }
    }
    );
    function w() {
        const y = e[r + 1];
        if ((n === 5 && y === "'") || (n === 6 && y === '"'))
            return r++,
            (i = "\\" + y),
            u[0](),
            !0;
    }
    for (; n !== null; )
        if ((r++,
        (a = e[r]),
        !(a === "\\" && w()))) {
            if (((c = wv(a)),
            (d = rn[n]),
            (l = d[c] || d.l || 8),
            l === 8 || ((n = l[0]),
            l[1] !== void 0 && ((f = u[l[1]]),
            f && ((i = a),
            f() === !1)))))
                return;
            if (n === 7)
                return t;
        }
}
const ql = new Map();
function Ov(e, t) {
    return Ue(e) ? e[t] : null;
}
function Av(e, t) {
    if (!Ue(e))
        return null;
    let r = ql.get(t);
    if ((r || ((r = xv(t)),
    r && ql.set(t, r)),
    !r))
        return null;
    const n = r.length;
    let o = e
      , a = 0;
    for (; a < n; ) {
        const s = o[r[a]];
        if (s === void 0)
            return null;
        (o = s),
        a++;
    }
    return o;
}
const bv = (e) => e
  , Dv = (e) => ""
  , Mv = "text"
  , Pv = (e) => (e.length === 0 ? "" : e.join(""))
  , zv = Qg;
function Kl(e, t) {
    return ((e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0);
}
function Hv(e) {
    const t = it(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (it(e.named.count) || it(e.named.n)) ? it(e.named.count) ? e.named.count : it(e.named.n) ? e.named.n : t : t;
}
function jv(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e);
}
function Nv(e={}) {
    const t = e.locale
      , r = Hv(e)
      , n = Ue(e.pluralRules) && ue(t) && dt(e.pluralRules[t]) ? e.pluralRules[t] : Kl
      , o = Ue(e.pluralRules) && ue(t) && dt(e.pluralRules[t]) ? Kl : void 0
      , a = (h) => h[n(r, h.length, o)]
      , s = e.list || []
      , i = (h) => s[h]
      , c = e.named || {};
    it(e.pluralIndex) && jv(r, c);
    const l = (h) => c[h];
    function f(h) {
        const m = dt(e.messages) ? e.messages(h) : Ue(e.messages) ? e.messages[h] : !1;
        return m || (e.parent ? e.parent.message(h) : Dv);
    }
    const d = (h) => (e.modifiers ? e.modifiers[h] : bv)
      , u = Le(e.processor) && dt(e.processor.normalize) ? e.processor.normalize : Pv
      , w = Le(e.processor) && dt(e.processor.interpolate) ? e.processor.interpolate : zv
      , y = Le(e.processor) && ue(e.processor.type) ? e.processor.type : Mv
      , v = {
        list: i,
        named: l,
        plural: a,
        linked: (h, ...m) => {
            const [A,O] = m;
            let b = "text"
              , D = "";
            m.length === 1 ? Ue(A) ? ((D = A.modifier || D),
            (b = A.type || b)) : ue(A) && (D = A || D) : m.length === 2 && (ue(A) && (D = A || D),
            ue(O) && (b = O || b));
            let P = f(h)(v);
            return b === "vnode" && tt(P) && D && (P = P[0]),
            D ? d(D)(P, b) : P;
        }
        ,
        message: f,
        type: y,
        interpolate: w,
        normalize: u,
    };
    return v;
}
function Ev(e, t, r) {
    return [...new Set([r, ...(tt(t) ? t : Ue(t) ? Object.keys(t) : ue(t) ? [t] : [r]), ]), ];
}
function T3(e, t, r) {
    const n = ue(r) ? r : Jc
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map());
    let a = o.__localeChainCache.get(n);
    if (!a) {
        a = [];
        let s = [r];
        for (; tt(s); )
            s = _l(a, s, t);
        const i = tt(t) || !Le(t) ? t : t.default ? t.default : null;
        (s = ue(i) ? [i] : i),
        tt(s) && _l(a, s, !1),
        o.__localeChainCache.set(n, a);
    }
    return a;
}
function _l(e, t, r) {
    let n = !0;
    for (let o = 0; o < t.length && $e(n); o++) {
        const a = t[o];
        ue(a) && (n = Bv(e, t[o], r));
    }
    return n;
}
function Bv(e, t, r) {
    let n;
    const o = t.split("-");
    do {
        const a = o.join("-");
        (n = Tv(e, a, r)),
        o.splice(-1, 1);
    } while (o.length && n === !0);
    return n;
}
function Tv(e, t, r) {
    let n = !1;
    if (!e.includes(t) && ((n = !0),
    t)) {
        n = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (tt(r) || Le(r)) && r[o] && (n = r[o]);
    }
    return n;
}
const Cv = "9.2.2"
  , ei = -1
  , Jc = "en-US"
  , $l = ""
  , e2 = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Gv() {
    return {
        upper: (e, t) => t === "text" && ue(e) ? e.toUpperCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && ue(e) ? e.toLowerCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && ue(e) ? e2(e) : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e2(e.children) : e,
    };
}
let C3;
function Yv(e) {
    C3 = e;
}
let G3;
function Fv(e) {
    G3 = e;
}
let Y3;
function Iv(e) {
    Y3 = e;
}
let t2 = 0;
function Lv(e={}) {
    const t = ue(e.version) ? e.version : Cv
      , r = ue(e.locale) ? e.locale : Jc
      , n = tt(e.fallbackLocale) || Le(e.fallbackLocale) || ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r
      , o = Le(e.messages) ? e.messages : {
        [r]: {}
    }
      , a = Le(e.datetimeFormats) ? e.datetimeFormats : {
        [r]: {}
    }
      , s = Le(e.numberFormats) ? e.numberFormats : {
        [r]: {}
    }
      , i = vt({}, e.modifiers || {}, Gv())
      , c = e.pluralRules || {}
      , l = dt(e.missing) ? e.missing : null
      , f = $e(e.missingWarn) || ms(e.missingWarn) ? e.missingWarn : !0
      , d = $e(e.fallbackWarn) || ms(e.fallbackWarn) ? e.fallbackWarn : !0
      , u = !!e.fallbackFormat
      , w = !!e.unresolving
      , y = dt(e.postTranslation) ? e.postTranslation : null
      , x = Le(e.processor) ? e.processor : null
      , v = $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , h = !!e.escapeParameter
      , m = dt(e.messageCompiler) ? e.messageCompiler : C3
      , A = dt(e.messageResolver) ? e.messageResolver : G3 || Ov
      , O = dt(e.localeFallbacker) ? e.localeFallbacker : Y3 || Ev
      , b = Ue(e.fallbackContext) ? e.fallbackContext : void 0
      , D = dt(e.onWarn) ? e.onWarn : Sg
      , P = e
      , Y = Ue(P.__datetimeFormatters) ? P.__datetimeFormatters : new Map()
      , F = Ue(P.__numberFormatters) ? P.__numberFormatters : new Map()
      , X = Ue(P.__meta) ? P.__meta : {};
    t2++;
    const re = {
        version: t,
        cid: t2,
        locale: r,
        fallbackLocale: n,
        messages: o,
        modifiers: i,
        pluralRules: c,
        missing: l,
        missingWarn: f,
        fallbackWarn: d,
        fallbackFormat: u,
        unresolving: w,
        postTranslation: y,
        processor: x,
        warnHtmlMessage: v,
        escapeParameter: h,
        messageCompiler: m,
        messageResolver: A,
        localeFallbacker: O,
        fallbackContext: b,
        onWarn: D,
        __meta: X,
    };
    return ((re.datetimeFormats = a),
    (re.numberFormats = s),
    (re.__datetimeFormatters = Y),
    (re.__numberFormatters = F),
    re);
}
function Vc(e, t, r, n, o) {
    const {missing: a, onWarn: s} = e;
    if (a !== null) {
        const i = a(e, r, t, o);
        return ue(i) ? i : t;
    } else
        return t;
}
function Yo(e, t, r) {
    const n = e;
    (n.__localeChainCache = new Map()),
    e.localeFallbacker(e, r, t);
}
const Rv = (e) => e;
let r2 = Object.create(null);
function Xv(e, t={}) {
    {
        const n = (t.onCacheKey || Rv)(e)
          , o = r2[n];
        if (o)
            return o;
        let a = !1;
        const s = t.onError || Jg;
        t.onError = (l) => {
            (a = !0),
            s(l);
        }
        ;
        const {code: i} = hv(e, t)
          , c = new Function(`return ${i}`)();
        return a ? c : (r2[n] = c);
    }
}
let F3 = Re.__EXTEND_POINT__;
const ji = () => ++F3
  , qn = {
    INVALID_ARGUMENT: F3,
    INVALID_DATE_ARGUMENT: ji(),
    INVALID_ISO_DATE_ARGUMENT: ji(),
    __EXTEND_POINT__: ji(),
};
function Kn(e) {
    return $s(e, null, void 0);
}
const n2 = () => ""
  , On = (e) => dt(e);
function o2(e, ...t) {
    const {fallbackFormat: r, postTranslation: n, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i, } = e
      , [c,l] = C1(...t)
      , f = $e(l.missingWarn) ? l.missingWarn : e.missingWarn
      , d = $e(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn
      , u = $e(l.escapeParameter) ? l.escapeParameter : e.escapeParameter
      , w = !!l.resolvedMessage
      , y = ue(l.default) || $e(l.default) ? $e(l.default) ? a ? c : () => c : l.default : r ? a ? c : () => c : ""
      , x = r || y !== ""
      , v = ue(l.locale) ? l.locale : e.locale;
    u && Zv(l);
    let[h,m,A] = w ? [c, v, i[v] || {}] : I3(e, c, v, s, d, f)
      , O = h
      , b = c;
    if ((!w && !(ue(O) || On(O)) && x && ((O = y),
    (b = O)),
    !w && (!(ue(O) || On(O)) || !ue(m))))
        return o ? ei : c;
    let D = !1;
    const P = () => {
        D = !0;
    }
      , Y = On(O) ? O : L3(e, c, m, O, b, P);
    if (D)
        return O;
    const F = Sv(e, m, A, l)
      , X = Nv(F)
      , re = kv(e, Y, X);
    return n ? n(re, c) : re;
}
function Zv(e) {
    tt(e.list) ? (e.list = e.list.map( (t) => (ue(t) ? Ql(t) : t))) : Ue(e.named) && Object.keys(e.named).forEach( (t) => {
        ue(e.named[t]) && (e.named[t] = Ql(e.named[t]));
    }
    );
}
function I3(e, t, r, n, o, a) {
    const {messages: s, onWarn: i, messageResolver: c, localeFallbacker: l} = e
      , f = l(e, n, r);
    let d = {}, u, w = null;
    const y = "translate";
    for (let x = 0; x < f.length && ((u = f[x]),
    (d = s[u] || {}),
    (w = c(d, t)) === null && (w = d[t]),
    !(ue(w) || dt(w))); x++) {
        const v = Vc(e, t, u, a, y);
        v !== t && (w = v);
    }
    return [w, u, d];
}
function L3(e, t, r, n, o, a) {
    const {messageCompiler: s, warnHtmlMessage: i} = e;
    if (On(n)) {
        const l = n;
        return (l.locale = l.locale || r),
        (l.key = l.key || t),
        l;
    }
    if (s == null) {
        const l = () => n;
        return (l.locale = r),
        (l.key = t),
        l;
    }
    const c = s(n, Uv(e, r, o, n, i, a));
    return (c.locale = r),
    (c.key = t),
    (c.source = n),
    c;
}
function kv(e, t, r) {
    return t(r);
}
function C1(...e) {
    const [t,r,n] = e
      , o = {};
    if (!ue(t) && !it(t) && !On(t))
        throw Kn(qn.INVALID_ARGUMENT);
    const a = it(t) ? String(t) : (On(t),
    t);
    return (it(r) ? (o.plural = r) : ue(r) ? (o.default = r) : Le(r) && !_s(r) ? (o.named = r) : tt(r) && (o.list = r),
    it(n) ? (o.plural = n) : ue(n) ? (o.default = n) : Le(n) && vt(o, n),
    [a, o]);
}
function Uv(e, t, r, n, o, a) {
    return {
        warnHtmlMessage: o,
        onError: (s) => {
            throw (a && a(s),
            s);
        }
        ,
        onCacheKey: (s) => Zg(t, r, s),
    };
}
function Sv(e, t, r, n) {
    const {modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: c, missingWarn: l, fallbackContext: f, } = e
      , u = {
        locale: t,
        modifiers: o,
        pluralRules: a,
        messages: (w) => {
            let y = s(r, w);
            if (y == null && f) {
                const [,,x] = I3(f, w, t, i, c, l);
                y = s(x, w);
            }
            if (ue(y)) {
                let x = !1;
                const h = L3(e, w, t, y, w, () => {
                    x = !0;
                }
                );
                return x ? n2 : h;
            } else
                return On(y) ? y : n2;
        }
        ,
    };
    return (e.processor && (u.processor = e.processor),
    n.list && (u.list = n.list),
    n.named && (u.named = n.named),
    it(n.plural) && (u.pluralIndex = n.plural),
    u);
}
function a2(e, ...t) {
    const {datetimeFormats: r, unresolving: n, fallbackLocale: o, onWarn: a, localeFallbacker: s, } = e
      , {__datetimeFormatters: i} = e
      , [c,l,f,d] = G1(...t)
      , u = $e(f.missingWarn) ? f.missingWarn : e.missingWarn;
    $e(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const w = !!f.part
      , y = ue(f.locale) ? f.locale : e.locale
      , x = s(e, o, y);
    if (!ue(c) || c === "")
        return new Intl.DateTimeFormat(y,d).format(l);
    let v = {}, h, m = null;
    const A = "datetime format";
    for (let D = 0; D < x.length && ((h = x[D]),
    (v = r[h] || {}),
    (m = v[c]),
    !Le(m)); D++)
        Vc(e, c, h, u, A);
    if (!Le(m) || !ue(h))
        return n ? ei : c;
    let O = `${h}__${c}`;
    _s(d) || (O = `${O}__${JSON.stringify(d)}`);
    let b = i.get(O);
    return (b || ((b = new Intl.DateTimeFormat(h,vt({}, m, d))),
    i.set(O, b)),
    w ? b.formatToParts(l) : b.format(l));
}
const R3 = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits", ];
function G1(...e) {
    const [t,r,n,o] = e
      , a = {};
    let s = {}, i;
    if (ue(t)) {
        const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!c)
            throw Kn(qn.INVALID_ISO_DATE_ARGUMENT);
        const l = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
        i = new Date(l);
        try {
            i.toISOString();
        } catch {
            throw Kn(qn.INVALID_ISO_DATE_ARGUMENT);
        }
    } else if (Ug(t)) {
        if (isNaN(t.getTime()))
            throw Kn(qn.INVALID_DATE_ARGUMENT);
        i = t;
    } else if (it(t))
        i = t;
    else
        throw Kn(qn.INVALID_ARGUMENT);
    return (ue(r) ? (a.key = r) : Le(r) && Object.keys(r).forEach( (c) => {
        R3.includes(c) ? (s[c] = r[c]) : (a[c] = r[c]);
    }
    ),
    ue(n) ? (a.locale = n) : Le(n) && (s = n),
    Le(o) && (s = o),
    [a.key || "", i, a, s]);
}
function s2(e, t, r) {
    const n = e;
    for (const o in r) {
        const a = `${t}__${o}`;
        n.__datetimeFormatters.has(a) && n.__datetimeFormatters.delete(a);
    }
}
function i2(e, ...t) {
    const {numberFormats: r, unresolving: n, fallbackLocale: o, onWarn: a, localeFallbacker: s, } = e
      , {__numberFormatters: i} = e
      , [c,l,f,d] = Y1(...t)
      , u = $e(f.missingWarn) ? f.missingWarn : e.missingWarn;
    $e(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const w = !!f.part
      , y = ue(f.locale) ? f.locale : e.locale
      , x = s(e, o, y);
    if (!ue(c) || c === "")
        return new Intl.NumberFormat(y,d).format(l);
    let v = {}, h, m = null;
    const A = "number format";
    for (let D = 0; D < x.length && ((h = x[D]),
    (v = r[h] || {}),
    (m = v[c]),
    !Le(m)); D++)
        Vc(e, c, h, u, A);
    if (!Le(m) || !ue(h))
        return n ? ei : c;
    let O = `${h}__${c}`;
    _s(d) || (O = `${O}__${JSON.stringify(d)}`);
    let b = i.get(O);
    return (b || ((b = new Intl.NumberFormat(h,vt({}, m, d))),
    i.set(O, b)),
    w ? b.formatToParts(l) : b.format(l));
}
const X3 = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay", ];
function Y1(...e) {
    const [t,r,n,o] = e
      , a = {};
    let s = {};
    if (!it(t))
        throw Kn(qn.INVALID_ARGUMENT);
    const i = t;
    return (ue(r) ? (a.key = r) : Le(r) && Object.keys(r).forEach( (c) => {
        X3.includes(c) ? (s[c] = r[c]) : (a[c] = r[c]);
    }
    ),
    ue(n) ? (a.locale = n) : Le(n) && (s = n),
    Le(o) && (s = o),
    [a.key || "", i, a, s]);
}
function c2(e, t, r) {
    const n = e;
    for (const o in r) {
        const a = `${t}__${o}`;
        n.__numberFormatters.has(a) && n.__numberFormatters.delete(a);
    }
}
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Wv = "9.2.2";
let Z3 = Re.__EXTEND_POINT__;
const Dt = () => ++Z3
  , Yt = {
    UNEXPECTED_RETURN_TYPE: Z3,
    INVALID_ARGUMENT: Dt(),
    MUST_BE_CALL_SETUP_TOP: Dt(),
    NOT_INSLALLED: Dt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Dt(),
    REQUIRED_VALUE: Dt(),
    INVALID_VALUE: Dt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Dt(),
    NOT_INSLALLED_WITH_PROVIDE: Dt(),
    UNEXPECTED_ERROR: Dt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Dt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Dt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Dt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Dt(),
    __EXTEND_POINT__: Dt(),
};
function Ut(e, ...t) {
    return $s(e, null, void 0);
}
const F1 = tn("__transrateVNode")
  , I1 = tn("__datetimeParts")
  , L1 = tn("__numberParts")
  , Qv = tn("__setPluralRules");
tn("__intlifyMeta");
const Jv = tn("__injectWithOption");
function R1(e) {
    if (!Ue(e))
        return e;
    for (const t in e)
        if (Sc(e, t))
            if (!t.includes("."))
                Ue(e[t]) && R1(e[t]);
            else {
                const r = t.split(".")
                  , n = r.length - 1;
                let o = e;
                for (let a = 0; a < n; a++)
                    r[a]in o || (o[r[a]] = {}),
                    (o = o[r[a]]);
                (o[r[n]] = e[t]),
                delete e[t],
                Ue(o[r[n]]) && R1(o[r[n]]);
            }
    return e;
}
function k3(e, t) {
    const {messages: r, __i18n: n, messageResolver: o, flatJson: a} = t
      , s = Le(r) ? r : tt(n) ? {} : {
        [e]: {}
    };
    if ((tt(n) && n.forEach( (i) => {
        if ("locale"in i && "resource"in i) {
            const {locale: c, resource: l} = i;
            c ? ((s[c] = s[c] || {}),
            $o(l, s[c])) : $o(l, s);
        } else
            ue(i) && $o(JSON.parse(i), s);
    }
    ),
    o == null && a))
        for (const i in s)
            Sc(s, i) && R1(s[i]);
    return s;
}
const Ua = (e) => !Ue(e) || tt(e);
function $o(e, t) {
    if (Ua(e) || Ua(t))
        throw Ut(Yt.INVALID_VALUE);
    for (const r in e)
        Sc(e, r) && (Ua(e[r]) || Ua(t[r]) ? (t[r] = e[r]) : $o(e[r], t[r]));
}
function Vv(e) {
    return e.type;
}
function qv(e, t, r) {
    let n = Ue(t.messages) ? t.messages : {};
    "__i18nGlobal"in r && (n = k3(e.locale.value, {
        messages: n,
        __i18n: r.__i18nGlobal
    }));
    const o = Object.keys(n);
    o.length && o.forEach( (a) => {
        e.mergeLocaleMessage(a, n[a]);
    }
    );
    {
        if (Ue(t.datetimeFormats)) {
            const a = Object.keys(t.datetimeFormats);
            a.length && a.forEach( (s) => {
                e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
            }
            );
        }
        if (Ue(t.numberFormats)) {
            const a = Object.keys(t.numberFormats);
            a.length && a.forEach( (s) => {
                e.mergeNumberFormat(s, t.numberFormats[s]);
            }
            );
        }
    }
}
function l2(e) {
    return Ze(lo, null, e, 0);
}
let u2 = 0;
function f2(e) {
    return (t, r, n, o) => e(r, n, ct() || void 0, o);
}
function U3(e={}, t) {
    const {__root: r} = e
      , n = r === void 0;
    let o = $e(e.inheritLocale) ? e.inheritLocale : !0;
    const a = le(r && o ? r.locale.value : ue(e.locale) ? e.locale : Jc)
      , s = le(r && o ? r.fallbackLocale.value : ue(e.fallbackLocale) || tt(e.fallbackLocale) || Le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value)
      , i = le(k3(a.value, e))
      , c = le(Le(e.datetimeFormats) ? e.datetimeFormats : {
        [a.value]: {}
    })
      , l = le(Le(e.numberFormats) ? e.numberFormats : {
        [a.value]: {}
    });
    let f = r ? r.missingWarn : $e(e.missingWarn) || ms(e.missingWarn) ? e.missingWarn : !0
      , d = r ? r.fallbackWarn : $e(e.fallbackWarn) || ms(e.fallbackWarn) ? e.fallbackWarn : !0
      , u = r ? r.fallbackRoot : $e(e.fallbackRoot) ? e.fallbackRoot : !0
      , w = !!e.fallbackFormat
      , y = dt(e.missing) ? e.missing : null
      , x = dt(e.missing) ? f2(e.missing) : null
      , v = dt(e.postTranslation) ? e.postTranslation : null
      , h = r ? r.warnHtmlMessage : $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , m = !!e.escapeParameter;
    const A = r ? r.modifiers : Le(e.modifiers) ? e.modifiers : {};
    let O = e.pluralRules || (r && r.pluralRules), b;
    (b = ( () => {
        const H = {
            version: Wv,
            locale: a.value,
            fallbackLocale: s.value,
            messages: i.value,
            modifiers: A,
            pluralRules: O,
            missing: x === null ? void 0 : x,
            missingWarn: f,
            fallbackWarn: d,
            fallbackFormat: w,
            unresolving: !0,
            postTranslation: v === null ? void 0 : v,
            warnHtmlMessage: h,
            escapeParameter: m,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            },
        };
        return ((H.datetimeFormats = c.value),
        (H.numberFormats = l.value),
        (H.__datetimeFormatters = Le(b) ? b.__datetimeFormatters : void 0),
        (H.__numberFormatters = Le(b) ? b.__numberFormatters : void 0),
        Lv(H));
    }
    )()),
    Yo(b, a.value, s.value);
    function P() {
        return [a.value, s.value, i.value, c.value, l.value];
    }
    const Y = Me({
        get: () => a.value,
        set: (H) => {
            (a.value = H),
            (b.locale = a.value);
        }
        ,
    })
      , F = Me({
        get: () => s.value,
        set: (H) => {
            (s.value = H),
            (b.fallbackLocale = s.value),
            Yo(b, a.value, H);
        }
        ,
    })
      , X = Me( () => i.value)
      , re = Me( () => c.value)
      , k = Me( () => l.value);
    function U() {
        return dt(v) ? v : null;
    }
    function I(H) {
        (v = H),
        (b.postTranslation = H);
    }
    function Q() {
        return y;
    }
    function J(H) {
        H !== null && (x = f2(H)),
        (y = H),
        (b.missing = x);
    }
    const R = (H, G, z, j, C, S) => {
        P();
        let ee;
        if (((ee = H(b)),
        it(ee) && ee === ei)) {
            const [be,ce] = G();
            return r && u ? j(r) : C(be);
        } else {
            if (S(ee))
                return ee;
            throw Ut(Yt.UNEXPECTED_RETURN_TYPE);
        }
    }
    ;
    function ne(...H) {
        return R( (G) => Reflect.apply(o2, null, [G, ...H]), () => C1(...H), "translate", (G) => Reflect.apply(G.t, G, [...H]), (G) => G, (G) => ue(G));
    }
    function ie(...H) {
        const [G,z,j] = H;
        if (j && !Ue(j))
            throw Ut(Yt.INVALID_ARGUMENT);
        return ne(G, z, vt({
            resolvedMessage: !0
        }, j || {}));
    }
    function He(...H) {
        return R( (G) => Reflect.apply(a2, null, [G, ...H]), () => G1(...H), "datetime format", (G) => Reflect.apply(G.d, G, [...H]), () => $l, (G) => ue(G));
    }
    function he(...H) {
        return R( (G) => Reflect.apply(i2, null, [G, ...H]), () => Y1(...H), "number format", (G) => Reflect.apply(G.n, G, [...H]), () => $l, (G) => ue(G));
    }
    function ze(H) {
        return H.map( (G) => (ue(G) || it(G) || $e(G) ? l2(String(G)) : G));
    }
    const Te = {
        normalize: ze,
        interpolate: (H) => H,
        type: "vnode"
    };
    function L(...H) {
        return R( (G) => {
            let z;
            const j = G;
            try {
                (j.processor = Te),
                (z = Reflect.apply(o2, null, [j, ...H]));
            } finally {
                j.processor = null;
            }
            return z;
        }
        , () => C1(...H), "translate", (G) => G[F1](...H), (G) => [l2(G)], (G) => tt(G));
    }
    function oe(...H) {
        return R( (G) => Reflect.apply(i2, null, [G, ...H]), () => Y1(...H), "number format", (G) => G[L1](...H), () => [], (G) => ue(G) || tt(G));
    }
    function _(...H) {
        return R( (G) => Reflect.apply(a2, null, [G, ...H]), () => G1(...H), "datetime format", (G) => G[I1](...H), () => [], (G) => ue(G) || tt(G));
    }
    function ae(H) {
        (O = H),
        (b.pluralRules = O);
    }
    function de(H, G) {
        const z = ue(G) ? G : a.value
          , j = ge(z);
        return b.messageResolver(j, H) !== null;
    }
    function Pe(H) {
        let G = null;
        const z = T3(b, s.value, a.value);
        for (let j = 0; j < z.length; j++) {
            const C = i.value[z[j]] || {}
              , S = b.messageResolver(C, H);
            if (S != null) {
                G = S;
                break;
            }
        }
        return G;
    }
    function me(H) {
        const G = Pe(H);
        return G ?? (r ? r.tm(H) || {} : {});
    }
    function ge(H) {
        return i.value[H] || {};
    }
    function p(H, G) {
        (i.value[H] = G),
        (b.messages = i.value);
    }
    function g(H, G) {
        (i.value[H] = i.value[H] || {}),
        $o(G, i.value[H]),
        (b.messages = i.value);
    }
    function M(H) {
        return c.value[H] || {};
    }
    function E(H, G) {
        (c.value[H] = G),
        (b.datetimeFormats = c.value),
        s2(b, H, G);
    }
    function T(H, G) {
        (c.value[H] = vt(c.value[H] || {}, G)),
        (b.datetimeFormats = c.value),
        s2(b, H, G);
    }
    function Z(H) {
        return l.value[H] || {};
    }
    function $(H, G) {
        (l.value[H] = G),
        (b.numberFormats = l.value),
        c2(b, H, G);
    }
    function K(H, G) {
        (l.value[H] = vt(l.value[H] || {}, G)),
        (b.numberFormats = l.value),
        c2(b, H, G);
    }
    u2++,
    r && B1 && (Je(r.locale, (H) => {
        o && ((a.value = H),
        (b.locale = H),
        Yo(b, a.value, s.value));
    }
    ),
    Je(r.fallbackLocale, (H) => {
        o && ((s.value = H),
        (b.fallbackLocale = H),
        Yo(b, a.value, s.value));
    }
    ));
    const V = {
        id: u2,
        locale: Y,
        fallbackLocale: F,
        get inheritLocale() {
            return o;
        },
        set inheritLocale(H) {
            (o = H),
            H && r && ((a.value = r.locale.value),
            (s.value = r.fallbackLocale.value),
            Yo(b, a.value, s.value));
        },
        get availableLocales() {
            return Object.keys(i.value).sort();
        },
        messages: X,
        get modifiers() {
            return A;
        },
        get pluralRules() {
            return O || {};
        },
        get isGlobal() {
            return n;
        },
        get missingWarn() {
            return f;
        },
        set missingWarn(H) {
            (f = H),
            (b.missingWarn = f);
        },
        get fallbackWarn() {
            return d;
        },
        set fallbackWarn(H) {
            (d = H),
            (b.fallbackWarn = d);
        },
        get fallbackRoot() {
            return u;
        },
        set fallbackRoot(H) {
            u = H;
        },
        get fallbackFormat() {
            return w;
        },
        set fallbackFormat(H) {
            (w = H),
            (b.fallbackFormat = w);
        },
        get warnHtmlMessage() {
            return h;
        },
        set warnHtmlMessage(H) {
            (h = H),
            (b.warnHtmlMessage = H);
        },
        get escapeParameter() {
            return m;
        },
        set escapeParameter(H) {
            (m = H),
            (b.escapeParameter = H);
        },
        t: ne,
        getLocaleMessage: ge,
        setLocaleMessage: p,
        mergeLocaleMessage: g,
        getPostTranslationHandler: U,
        setPostTranslationHandler: I,
        getMissingHandler: Q,
        setMissingHandler: J,
        [Qv]: ae,
    };
    return ((V.datetimeFormats = re),
    (V.numberFormats = k),
    (V.rt = ie),
    (V.te = de),
    (V.tm = me),
    (V.d = He),
    (V.n = he),
    (V.getDateTimeFormat = M),
    (V.setDateTimeFormat = E),
    (V.mergeDateTimeFormat = T),
    (V.getNumberFormat = Z),
    (V.setNumberFormat = $),
    (V.mergeNumberFormat = K),
    (V[Jv] = e.__injectWithOption),
    (V[F1] = L),
    (V[I1] = _),
    (V[L1] = oe),
    V);
}
const qc = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: (e) => e === "parent" || e === "global",
        default: "parent",
    },
    i18n: {
        type: Object
    },
};
function Kv({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (n, o) => (n = [...n, ...(tt(o.children) ? o.children : [o])]), []) : t.reduce( (r, n) => {
        const o = e[n];
        return o && (r[n] = o()),
        r;
    }
    , {});
}
function S3(e) {
    return st;
}
const d2 = {
    name: "i18n-t",
    props: vt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: (e) => it(e) || !isNaN(e)
        },
    }, qc),
    setup(e, t) {
        const {slots: r, attrs: n} = t
          , o = e.i18n || ti({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const a = Object.keys(r).filter( (d) => d !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ue(e.plural) ? +e.plural : e.plural);
            const i = Kv(t, a)
              , c = o[F1](e.keypath, i, s)
              , l = vt({}, n)
              , f = ue(e.tag) || Ue(e.tag) ? e.tag : S3();
            return Ma(f, l, c);
        }
        ;
    },
};
function _v(e) {
    return tt(e) && !ue(e[0]);
}
function W3(e, t, r, n) {
    const {slots: o, attrs: a} = t;
    return () => {
        const s = {
            part: !0
        };
        let i = {};
        e.locale && (s.locale = e.locale),
        ue(e.format) ? (s.key = e.format) : Ue(e.format) && (ue(e.format.key) && (s.key = e.format.key),
        (i = Object.keys(e.format).reduce( (u, w) => (r.includes(w) ? vt({}, u, {
            [w]: e.format[w]
        }) : u), {})));
        const c = n(e.value, s, i);
        let l = [s.key];
        tt(c) ? (l = c.map( (u, w) => {
            const y = o[u.type]
              , x = y ? y({
                [u.type]: u.value,
                index: w,
                parts: c
            }) : [u.value];
            return _v(x) && (x[0].key = `${u.type}-${w}`),
            x;
        }
        )) : ue(c) && (l = [c]);
        const f = vt({}, a)
          , d = ue(e.tag) || Ue(e.tag) ? e.tag : S3();
        return Ma(d, f, l);
    }
    ;
}
const p2 = {
    name: "i18n-n",
    props: vt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        },
    }, qc),
    setup(e, t) {
        const r = e.i18n || ti({
            useScope: "parent",
            __useComponent: !0
        });
        return W3(e, t, X3, (...n) => r[L1](...n));
    },
}
  , h2 = {
    name: "i18n-d",
    props: vt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        },
    }, qc),
    setup(e, t) {
        const r = e.i18n || ti({
            useScope: "parent",
            __useComponent: !0
        });
        return W3(e, t, R3, (...n) => r[I1](...n));
    },
};
function $v(e, t) {
    const r = e;
    if (e.mode === "composition")
        return r.__getInstance(t) || e.global;
    {
        const n = r.__getInstance(t);
        return n != null ? n.__composer : e.global.__composer;
    }
}
function ew(e) {
    const t = (s) => {
        const {instance: i, modifiers: c, value: l} = s;
        if (!i || !i.$)
            throw Ut(Yt.UNEXPECTED_ERROR);
        const f = $v(e, i.$)
          , d = m2(l);
        return [Reflect.apply(f.t, f, [...g2(d)]), f];
    }
    ;
    return {
        created: (s, i) => {
            const [c,l] = t(i);
            B1 && e.global === l && (s.__i18nWatcher = Je(l.locale, () => {
                i.instance && i.instance.$forceUpdate();
            }
            )),
            (s.__composer = l),
            (s.textContent = c);
        }
        ,
        unmounted: (s) => {
            B1 && s.__i18nWatcher && (s.__i18nWatcher(),
            (s.__i18nWatcher = void 0),
            delete s.__i18nWatcher),
            s.__composer && ((s.__composer = void 0),
            delete s.__composer);
        }
        ,
        beforeUpdate: (s, {value: i}) => {
            if (s.__composer) {
                const c = s.__composer
                  , l = m2(i);
                s.textContent = Reflect.apply(c.t, c, [...g2(l)]);
            }
        }
        ,
        getSSRProps: (s) => {
            const [i] = t(s);
            return {
                textContent: i
            };
        }
        ,
    };
}
function m2(e) {
    if (ue(e))
        return {
            path: e
        };
    if (Le(e)) {
        if (!("path"in e))
            throw Ut(Yt.REQUIRED_VALUE, "path");
        return e;
    } else
        throw Ut(Yt.INVALID_VALUE);
}
function g2(e) {
    const {path: t, locale: r, args: n, choice: o, plural: a} = e
      , s = {}
      , i = n || {};
    return (ue(r) && (s.locale = r),
    it(o) && (s.plural = o),
    it(a) && (s.plural = a),
    [t, i, s]);
}
function tw(e, t, ...r) {
    const n = Le(r[0]) ? r[0] : {}
      , o = !!n.useI18nComponentName;
    ($e(n.globalInstall) ? n.globalInstall : !0) && (e.component(o ? "i18n" : d2.name, d2),
    e.component(p2.name, p2),
    e.component(h2.name, h2)),
    e.directive("t", ew(t));
}
const rw = tn("global-vue-i18n");
function nw(e={}, t) {
    const r = $e(e.globalInjection) ? e.globalInjection : !0
      , n = !0
      , o = new Map()
      , [a,s] = ow(e)
      , i = tn("");
    function c(d) {
        return o.get(d) || null;
    }
    function l(d, u) {
        o.set(d, u);
    }
    function f(d) {
        o.delete(d);
    }
    {
        const d = {
            get mode() {
                return "composition";
            },
            get allowComposition() {
                return n;
            },
            async install(u, ...w) {
                (u.__VUE_I18N_SYMBOL__ = i),
                u.provide(u.__VUE_I18N_SYMBOL__, d),
                r && dw(u, d.global),
                tw(u, d, ...w);
                const y = u.unmount;
                u.unmount = () => {
                    d.dispose(),
                    y();
                }
                ;
            },
            get global() {
                return s;
            },
            dispose() {
                a.stop();
            },
            __instances: o,
            __getInstance: c,
            __setInstance: l,
            __deleteInstance: f,
        };
        return d;
    }
}
function ti(e={}) {
    const t = ct();
    if (t == null)
        throw Ut(Yt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Ut(Yt.NOT_INSLALLED);
    const r = aw(t)
      , n = iw(r)
      , o = Vv(t)
      , a = sw(e, o);
    if (a === "global")
        return qv(n, e, o),
        n;
    if (a === "parent") {
        let c = cw(r, t, e.__useComponent);
        return c == null && (c = n),
        c;
    }
    const s = r;
    let i = s.__getInstance(t);
    if (i == null) {
        const c = vt({}, e);
        "__i18n"in o && (c.__i18n = o.__i18n),
        n && (c.__root = n),
        (i = U3(c)),
        lw(s, t),
        s.__setInstance(t, i);
    }
    return i;
}
function ow(e, t, r) {
    const n = Oa();
    {
        const o = n.run( () => U3(e));
        if (o == null)
            throw Ut(Yt.UNEXPECTED_ERROR);
        return [n, o];
    }
}
function aw(e) {
    {
        const t = pt(e.isCE ? rw : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Ut(e.isCE ? Yt.NOT_INSLALLED_WITH_PROVIDE : Yt.UNEXPECTED_ERROR);
        return t;
    }
}
function sw(e, t) {
    return _s(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function iw(e) {
    return e.mode === "composition" ? e.global : e.global.__composer;
}
function cw(e, t, r=!1) {
    let n = null;
    const o = t.root;
    let a = t.parent;
    for (; a != null; ) {
        const s = e;
        if ((e.mode === "composition" && (n = s.__getInstance(a)),
        n != null || o === a))
            break;
        a = a.parent;
    }
    return n;
}
function lw(e, t, r) {
    en( () => {}
    , t),
    Da( () => {
        e.__deleteInstance(t);
    }
    , t);
}
const uw = ["locale", "fallbackLocale", "availableLocales"]
  , fw = ["t", "rt", "d", "n", "tm"];
function dw(e, t) {
    const r = Object.create(null);
    uw.forEach( (n) => {
        const o = Object.getOwnPropertyDescriptor(t, n);
        if (!o)
            throw Ut(Yt.UNEXPECTED_ERROR);
        const a = Qe(o.value) ? {
            get() {
                return o.value.value;
            },
            set(s) {
                o.value.value = s;
            },
        } : {
            get() {
                return o.get && o.get();
            },
        };
        Object.defineProperty(r, n, a);
    }
    ),
    (e.config.globalProperties.$i18n = r),
    fw.forEach( (n) => {
        const o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || !o.value)
            throw Ut(Yt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${n}`, o);
    }
    );
}
Yv(Xv);
Fv(Av);
Iv(T3);
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const Q3 = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol"
  , Po = (e) => (Q3 ? Symbol(e) : "_vr_" + e)
  , pw = Po("rvlm")
  , v2 = Po("rvd")
  , ri = Po("r")
  , Kc = Po("rl")
  , X1 = Po("rvl")
  , Qn = typeof window < "u";
function hw(e) {
    return e.__esModule || (Q3 && e[Symbol.toStringTag] === "Module");
}
const ke = Object.assign;
function Ni(e, t) {
    const r = {};
    for (const n in t) {
        const o = t[n];
        r[n] = Array.isArray(o) ? o.map(e) : e(o);
    }
    return r;
}
const ea = () => {}
  , mw = /\/$/
  , gw = (e) => e.replace(mw, "");
function Ei(e, t, r="/") {
    let n, o = {}, a = "", s = "";
    const i = t.indexOf("?")
      , c = t.indexOf("#", i > -1 ? i : 0);
    return (i > -1 && ((n = t.slice(0, i)),
    (a = t.slice(i + 1, c > -1 ? c : t.length)),
    (o = e(a))),
    c > -1 && ((n = n || t.slice(0, c)),
    (s = t.slice(c, t.length))),
    (n = xw(n ?? t, r)),
    {
        fullPath: n + (a && "?") + a + s,
        path: n,
        query: o,
        hash: s
    });
}
function vw(e, t) {
    const r = t.query ? e(t.query) : "";
    return t.path + (r && "?") + r + (t.hash || "");
}
function w2(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ww(e, t, r) {
    const n = t.matched.length - 1
      , o = r.matched.length - 1;
    return (n > -1 && n === o && vo(t.matched[n], r.matched[o]) && J3(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash);
}
function vo(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function J3(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const r in e)
        if (!yw(e[r], t[r]))
            return !1;
    return !0;
}
function yw(e, t) {
    return Array.isArray(e) ? y2(e, t) : Array.isArray(t) ? y2(t, e) : e === t;
}
function y2(e, t) {
    return Array.isArray(t) ? e.length === t.length && e.every( (r, n) => r === t[n]) : e.length === 1 && e[0] === t;
}
function xw(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const r = t.split("/")
      , n = e.split("/");
    let o = r.length - 1, a, s;
    for (a = 0; a < n.length; a++)
        if (((s = n[a]),
        !(o === 1 || s === ".")))
            if (s === "..")
                o--;
            else
                break;
    return (r.slice(0, o).join("/") + "/" + n.slice(a - (a === n.length ? 1 : 0)).join("/"));
}
var va;
(function(e) {
    (e.pop = "pop"),
    (e.push = "push");
}
)(va || (va = {}));
var ta;
(function(e) {
    (e.back = "back"),
    (e.forward = "forward"),
    (e.unknown = "");
}
)(ta || (ta = {}));
function Ow(e) {
    if (!e)
        if (Qn) {
            const t = document.querySelector("base");
            (e = (t && t.getAttribute("href")) || "/"),
            (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    gw(e);
}
const Aw = /^[^#]+#/;
function bw(e, t) {
    return e.replace(Aw, "#") + t;
}
function Dw(e, t) {
    const r = document.documentElement.getBoundingClientRect()
      , n = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: n.left - r.left - (t.left || 0),
        top: n.top - r.top - (t.top || 0),
    };
}
const ni = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function Mw(e) {
    let t;
    if ("el"in e) {
        const r = e.el
          , n = typeof r == "string" && r.startsWith("#")
          , o = typeof r == "string" ? n ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
        if (!o)
            return;
        t = Dw(o, e);
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function x2(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const Z1 = new Map();
function Pw(e, t) {
    Z1.set(e, t);
}
function zw(e) {
    const t = Z1.get(e);
    return Z1.delete(e),
    t;
}
let Hw = () => location.protocol + "//" + location.host;
function V3(e, t) {
    const {pathname: r, search: n, hash: o} = t
      , a = e.indexOf("#");
    if (a > -1) {
        let i = o.includes(e.slice(a)) ? e.slice(a).length : 1
          , c = o.slice(i);
        return c[0] !== "/" && (c = "/" + c),
        w2(c, "");
    }
    return w2(r, e) + n + o;
}
function jw(e, t, r, n) {
    let o = []
      , a = []
      , s = null;
    const i = ({state: u}) => {
        const w = V3(e, location)
          , y = r.value
          , x = t.value;
        let v = 0;
        if (u) {
            if (((r.value = w),
            (t.value = u),
            s && s === y)) {
                s = null;
                return;
            }
            v = x ? u.position - x.position : 0;
        } else
            n(w);
        o.forEach( (h) => {
            h(r.value, y, {
                delta: v,
                type: va.pop,
                direction: v ? (v > 0 ? ta.forward : ta.back) : ta.unknown,
            });
        }
        );
    }
    ;
    function c() {
        s = r.value;
    }
    function l(u) {
        o.push(u);
        const w = () => {
            const y = o.indexOf(u);
            y > -1 && o.splice(y, 1);
        }
        ;
        return a.push(w),
        w;
    }
    function f() {
        const {history: u} = window;
        u.state && u.replaceState(ke({}, u.state, {
            scroll: ni()
        }), "");
    }
    function d() {
        for (const u of a)
            u();
        (a = []),
        window.removeEventListener("popstate", i),
        window.removeEventListener("beforeunload", f);
    }
    return (window.addEventListener("popstate", i),
    window.addEventListener("beforeunload", f),
    {
        pauseListeners: c,
        listen: l,
        destroy: d
    });
}
function O2(e, t, r, n=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: r,
        replaced: n,
        position: window.history.length,
        scroll: o ? ni() : null,
    };
}
function Nw(e) {
    const {history: t, location: r} = window
      , n = {
        value: V3(e, r)
    }
      , o = {
        value: t.state
    };
    o.value || a(n.value, {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
    }, !0);
    function a(c, l, f) {
        const d = e.indexOf("#")
          , u = d > -1 ? (r.host && document.querySelector("base") ? e : e.slice(d)) + c : Hw() + e + c;
        try {
            t[f ? "replaceState" : "pushState"](l, "", u),
            (o.value = l);
        } catch (w) {
            console.error(w),
            r[f ? "replace" : "assign"](u);
        }
    }
    function s(c, l) {
        const f = ke({}, t.state, O2(o.value.back, c, o.value.forward, !0), l, {
            position: o.value.position,
        });
        a(c, f, !0),
        (n.value = c);
    }
    function i(c, l) {
        const f = ke({}, o.value, t.state, {
            forward: c,
            scroll: ni()
        });
        a(f.current, f, !0);
        const d = ke({}, O2(n.value, c, null), {
            position: f.position + 1
        }, l);
        a(c, d, !1),
        (n.value = c);
    }
    return {
        location: n,
        state: o,
        push: i,
        replace: s
    };
}
function Ew(e) {
    e = Ow(e);
    const t = Nw(e)
      , r = jw(e, t.state, t.location, t.replace);
    function n(a, s=!0) {
        s || r.pauseListeners(),
        history.go(a);
    }
    const o = ke({
        location: "",
        base: e,
        go: n,
        createHref: bw.bind(null, e)
    }, t, r);
    return (Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value,
    }),
    o);
}
function Bw(e) {
    return typeof e == "string" || (e && typeof e == "object");
}
function q3(e) {
    return typeof e == "string" || typeof e == "symbol";
}
const Cr = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
}
  , K3 = Po("nf");
var A2;
(function(e) {
    (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
}
)(A2 || (A2 = {}));
function wo(e, t) {
    return ke(new Error(), {
        type: e,
        [K3]: !0
    }, t);
}
function Gr(e, t) {
    return e instanceof Error && K3 in e && (t == null || !!(e.type & t));
}
const b2 = "[^/]+?"
  , Tw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Cw = /[.+*?^${}()[\]/\\]/g;
function Gw(e, t) {
    const r = ke({}, Tw, t)
      , n = [];
    let o = r.start ? "^" : "";
    const a = [];
    for (const l of e) {
        const f = l.length ? [] : [90];
        r.strict && !l.length && (o += "/");
        for (let d = 0; d < l.length; d++) {
            const u = l[d];
            let w = 40 + (r.sensitive ? 0.25 : 0);
            if (u.type === 0)
                d || (o += "/"),
                (o += u.value.replace(Cw, "\\$&")),
                (w += 40);
            else if (u.type === 1) {
                const {value: y, repeatable: x, optional: v, regexp: h} = u;
                a.push({
                    name: y,
                    repeatable: x,
                    optional: v
                });
                const m = h || b2;
                if (m !== b2) {
                    w += 10;
                    try {
                        new RegExp(`(${m})`);
                    } catch (O) {
                        throw new Error(`Invalid custom RegExp for param "${y}" (${m}): ` + O.message);
                    }
                }
                let A = x ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                d || (A = v && l.length < 2 ? `(?:/${A})` : "/" + A),
                v && (A += "?"),
                (o += A),
                (w += 20),
                v && (w += -8),
                x && (w += -20),
                m === ".*" && (w += -50);
            }
            f.push(w);
        }
        n.push(f);
    }
    if (r.strict && r.end) {
        const l = n.length - 1;
        n[l][n[l].length - 1] += 0.7000000000000001;
    }
    r.strict || (o += "/?"),
    r.end ? (o += "$") : r.strict && (o += "(?:/|$)");
    const s = new RegExp(o,r.sensitive ? "" : "i");
    function i(l) {
        const f = l.match(s)
          , d = {};
        if (!f)
            return null;
        for (let u = 1; u < f.length; u++) {
            const w = f[u] || ""
              , y = a[u - 1];
            d[y.name] = w && y.repeatable ? w.split("/") : w;
        }
        return d;
    }
    function c(l) {
        let f = ""
          , d = !1;
        for (const u of e) {
            (!d || !f.endsWith("/")) && (f += "/"),
            (d = !1);
            for (const w of u)
                if (w.type === 0)
                    f += w.value;
                else if (w.type === 1) {
                    const {value: y, repeatable: x, optional: v} = w
                      , h = y in l ? l[y] : "";
                    if (Array.isArray(h) && !x)
                        throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
                    const m = Array.isArray(h) ? h.join("/") : h;
                    if (!m)
                        if (v)
                            u.length < 2 && (f.endsWith("/") ? (f = f.slice(0, -1)) : (d = !0));
                        else
                            throw new Error(`Missing required param "${y}"`);
                    f += m;
                }
        }
        return f;
    }
    return {
        re: s,
        score: n,
        keys: a,
        parse: i,
        stringify: c
    };
}
function Yw(e, t) {
    let r = 0;
    for (; r < e.length && r < t.length; ) {
        const n = t[r] - e[r];
        if (n)
            return n;
        r++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Fw(e, t) {
    let r = 0;
    const n = e.score
      , o = t.score;
    for (; r < n.length && r < o.length; ) {
        const a = Yw(n[r], o[r]);
        if (a)
            return a;
        r++;
    }
    return o.length - n.length;
}
const Iw = {
    type: 0,
    value: ""
}
  , Lw = /[a-zA-Z0-9_]/;
function Rw(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Iw]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(w) {
        throw new Error(`ERR (${r})/"${l}": ${w}`);
    }
    let r = 0
      , n = r;
    const o = [];
    let a;
    function s() {
        a && o.push(a),
        (a = []);
    }
    let i = 0, c, l = "", f = "";
    function d() {
        l && (r === 0 ? a.push({
            type: 0,
            value: l
        }) : r === 1 || r === 2 || r === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),
        a.push({
            type: 1,
            value: l,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
        })) : t("Invalid state to consume buffer"),
        (l = ""));
    }
    function u() {
        l += c;
    }
    for (; i < e.length; ) {
        if (((c = e[i++]),
        c === "\\" && r !== 2)) {
            (n = r),
            (r = 4);
            continue;
        }
        switch (r) {
        case 0:
            c === "/" ? (l && d(),
            s()) : c === ":" ? (d(),
            (r = 1)) : u();
            break;
        case 4:
            u(),
            (r = n);
            break;
        case 1:
            c === "(" ? (r = 2) : Lw.test(c) ? u() : (d(),
            (r = 0),
            c !== "*" && c !== "?" && c !== "+" && i--);
            break;
        case 2:
            c === ")" ? f[f.length - 1] == "\\" ? (f = f.slice(0, -1) + c) : (r = 3) : (f += c);
            break;
        case 3:
            d(),
            (r = 0),
            c !== "*" && c !== "?" && c !== "+" && i--,
            (f = "");
            break;
        default:
            t("Unknown state");
            break;
        }
    }
    return r === 2 && t(`Unfinished custom RegExp for param "${l}"`),
    d(),
    s(),
    o;
}
function Xw(e, t, r) {
    const n = Gw(Rw(e.path), r)
      , o = ke(n, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o;
}
function Zw(e, t) {
    const r = []
      , n = new Map();
    t = M2({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(f) {
        return n.get(f);
    }
    function a(f, d, u) {
        const w = !u
          , y = Uw(f);
        y.aliasOf = u && u.record;
        const x = M2(t, f)
          , v = [y];
        if ("alias"in f) {
            const A = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const O of A)
                v.push(ke({}, y, {
                    components: u ? u.record.components : y.components,
                    path: O,
                    aliasOf: u ? u.record : y,
                }));
        }
        let h, m;
        for (const A of v) {
            const {path: O} = A;
            if (d && O[0] !== "/") {
                const b = d.record.path
                  , D = b[b.length - 1] === "/" ? "" : "/";
                A.path = d.record.path + (O && D + O);
            }
            if (((h = Xw(A, d, x)),
            u ? u.alias.push(h) : ((m = m || h),
            m !== h && m.alias.push(h),
            w && f.name && !D2(h) && s(f.name)),
            "children"in y)) {
                const b = y.children;
                for (let D = 0; D < b.length; D++)
                    a(b[D], h, u && u.children[D]);
            }
            (u = u || h),
            c(h);
        }
        return m ? () => {
            s(m);
        }
        : ea;
    }
    function s(f) {
        if (q3(f)) {
            const d = n.get(f);
            d && (n.delete(f),
            r.splice(r.indexOf(d), 1),
            d.children.forEach(s),
            d.alias.forEach(s));
        } else {
            const d = r.indexOf(f);
            d > -1 && (r.splice(d, 1),
            f.record.name && n.delete(f.record.name),
            f.children.forEach(s),
            f.alias.forEach(s));
        }
    }
    function i() {
        return r;
    }
    function c(f) {
        let d = 0;
        for (; d < r.length && Fw(f, r[d]) >= 0 && (f.record.path !== r[d].record.path || !_3(f, r[d]));
        )
            d++;
        r.splice(d, 0, f),
        f.record.name && !D2(f) && n.set(f.record.name, f);
    }
    function l(f, d) {
        let u, w = {}, y, x;
        if ("name"in f && f.name) {
            if (((u = n.get(f.name)),
            !u))
                throw wo(1, {
                    location: f
                });
            (x = u.record.name),
            (w = ke(kw(d.params, u.keys.filter( (m) => !m.optional).map( (m) => m.name)), f.params)),
            (y = u.stringify(w));
        } else if ("path"in f)
            (y = f.path),
            (u = r.find( (m) => m.re.test(y))),
            u && ((w = u.parse(y)),
            (x = u.record.name));
        else {
            if (((u = d.name ? n.get(d.name) : r.find( (m) => m.re.test(d.path))),
            !u))
                throw wo(1, {
                    location: f,
                    currentLocation: d
                });
            (x = u.record.name),
            (w = ke({}, d.params, f.params)),
            (y = u.stringify(w));
        }
        const v = [];
        let h = u;
        for (; h; )
            v.unshift(h.record),
            (h = h.parent);
        return {
            name: x,
            path: y,
            params: w,
            matched: v,
            meta: Ww(v)
        };
    }
    return (e.forEach( (f) => a(f)),
    {
        addRoute: a,
        resolve: l,
        removeRoute: s,
        getRoutes: i,
        getRecordMatcher: o,
    });
}
function kw(e, t) {
    const r = {};
    for (const n of t)
        n in e && (r[n] = e[n]);
    return r;
}
function Uw(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Sw(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: "components"in e ? e.components || {} : {
            default: e.component
        },
    };
}
function Sw(e) {
    const t = {}
      , r = e.props || !1;
    if ("component"in e)
        t.default = r;
    else
        for (const n in e.components)
            t[n] = typeof r == "boolean" ? r : r[n];
    return t;
}
function D2(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent;
    }
    return !1;
}
function Ww(e) {
    return e.reduce( (t, r) => ke(t, r.meta), {});
}
function M2(e, t) {
    const r = {};
    for (const n in e)
        r[n] = n in t ? t[n] : e[n];
    return r;
}
function _3(e, t) {
    return t.children.some( (r) => r === e || _3(e, r));
}
const $3 = /#/g
  , Qw = /&/g
  , Jw = /\//g
  , Vw = /=/g
  , qw = /\?/g
  , ef = /\+/g
  , Kw = /%5B/g
  , _w = /%5D/g
  , tf = /%5E/g
  , $w = /%60/g
  , rf = /%7B/g
  , ey = /%7C/g
  , nf = /%7D/g
  , ty = /%20/g;
function _c(e) {
    return encodeURI("" + e).replace(ey, "|").replace(Kw, "[").replace(_w, "]");
}
function ry(e) {
    return _c(e).replace(rf, "{").replace(nf, "}").replace(tf, "^");
}
function k1(e) {
    return _c(e).replace(ef, "%2B").replace(ty, "+").replace($3, "%23").replace(Qw, "%26").replace($w, "`").replace(rf, "{").replace(nf, "}").replace(tf, "^");
}
function ny(e) {
    return k1(e).replace(Vw, "%3D");
}
function oy(e) {
    return _c(e).replace($3, "%23").replace(qw, "%3F");
}
function ay(e) {
    return e == null ? "" : oy(e).replace(Jw, "%2F");
}
function gs(e) {
    try {
        return decodeURIComponent("" + e);
    } catch {}
    return "" + e;
}
function sy(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < n.length; ++o) {
        const a = n[o].replace(ef, " ")
          , s = a.indexOf("=")
          , i = gs(s < 0 ? a : a.slice(0, s))
          , c = s < 0 ? null : gs(a.slice(s + 1));
        if (i in t) {
            let l = t[i];
            Array.isArray(l) || (l = t[i] = [l]),
            l.push(c);
        } else
            t[i] = c;
    }
    return t;
}
function P2(e) {
    let t = "";
    for (let r in e) {
        const n = e[r];
        if (((r = ny(r)),
        n == null)) {
            n !== void 0 && (t += (t.length ? "&" : "") + r);
            continue;
        }
        (Array.isArray(n) ? n.map( (a) => a && k1(a)) : [n && k1(n)]).forEach( (a) => {
            a !== void 0 && ((t += (t.length ? "&" : "") + r),
            a != null && (t += "=" + a));
        }
        );
    }
    return t;
}
function iy(e) {
    const t = {};
    for (const r in e) {
        const n = e[r];
        n !== void 0 && (t[r] = Array.isArray(n) ? n.map( (o) => (o == null ? null : "" + o)) : n == null ? n : "" + n);
    }
    return t;
}
function Fo() {
    let e = [];
    function t(n) {
        return (e.push(n),
        () => {
            const o = e.indexOf(n);
            o > -1 && e.splice(o, 1);
        }
        );
    }
    function r() {
        e = [];
    }
    return {
        add: t,
        list: () => e,
        reset: r
    };
}
function Ir(e, t, r, n, o) {
    const a = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
    return () => new Promise( (s, i) => {
        const c = (d) => {
            d === !1 ? i(wo(4, {
                from: r,
                to: t
            })) : d instanceof Error ? i(d) : Bw(d) ? i(wo(2, {
                from: t,
                to: d
            })) : (a && n.enterCallbacks[o] === a && typeof d == "function" && a.push(d),
            s());
        }
          , l = e.call(n && n.instances[o], t, r, c);
        let f = Promise.resolve(l);
        e.length < 3 && (f = f.then(c)),
        f.catch( (d) => i(d));
    }
    );
}
function Bi(e, t, r, n) {
    const o = [];
    for (const a of e)
        for (const s in a.components) {
            let i = a.components[s];
            if (!(t !== "beforeRouteEnter" && !a.instances[s]))
                if (cy(i)) {
                    const l = (i.__vccOpts || i)[t];
                    l && o.push(Ir(l, r, n, a, s));
                } else {
                    let c = i();
                    o.push( () => c.then( (l) => {
                        if (!l)
                            return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));
                        const f = hw(l) ? l.default : l;
                        a.components[s] = f;
                        const u = (f.__vccOpts || f)[t];
                        return u && Ir(u, r, n, a, s)();
                    }
                    ));
                }
        }
    return o;
}
function cy(e) {
    return (typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e);
}
function z2(e) {
    const t = pt(ri)
      , r = pt(Kc)
      , n = Me( () => t.resolve(Oe(e.to)))
      , o = Me( () => {
        const {matched: c} = n.value
          , {length: l} = c
          , f = c[l - 1]
          , d = r.matched;
        if (!f || !d.length)
            return -1;
        const u = d.findIndex(vo.bind(null, f));
        if (u > -1)
            return u;
        const w = H2(c[l - 2]);
        return l > 1 && H2(f) === w && d[d.length - 1].path !== w ? d.findIndex(vo.bind(null, c[l - 2])) : u;
    }
    )
      , a = Me( () => o.value > -1 && dy(r.params, n.value.params))
      , s = Me( () => o.value > -1 && o.value === r.matched.length - 1 && J3(r.params, n.value.params));
    function i(c={}) {
        return fy(c) ? t[Oe(e.replace) ? "replace" : "push"](Oe(e.to)).catch(ea) : Promise.resolve();
    }
    return {
        route: n,
        href: Me( () => n.value.href),
        isActive: a,
        isExactActive: s,
        navigate: i,
    };
}
const ly = xe({
    name: "RouterLink",
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
    },
    useLink: z2,
    setup(e, {slots: t}) {
        const r = Ao(z2(e))
          , {options: n} = pt(ri)
          , o = Me( () => ({
            [j2(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
            [j2(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive,
        }));
        return () => {
            const a = t.default && t.default(r);
            return e.custom ? a : Ma("a", {
                "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: o.value,
            }, a);
        }
        ;
    },
})
  , uy = ly;
function fy(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return;
        }
        return e.preventDefault && e.preventDefault(),
        !0;
    }
}
function dy(e, t) {
    for (const r in t) {
        const n = t[r]
          , o = e[r];
        if (typeof n == "string") {
            if (n !== o)
                return !1;
        } else if (!Array.isArray(o) || o.length !== n.length || n.some( (a, s) => a !== o[s]))
            return !1;
    }
    return !0;
}
function H2(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const j2 = (e, t, r) => e ?? t ?? r
  , py = xe({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    setup(e, {attrs: t, slots: r}) {
        const n = pt(X1)
          , o = Me( () => e.route || n.value)
          , a = pt(v2, 0)
          , s = Me( () => o.value.matched[a]);
        Jo(v2, a + 1),
        Jo(pw, s),
        Jo(X1, o);
        const i = le();
        return (Je( () => [i.value, s.value, e.name], ([c,l,f], [d,u,w]) => {
            l && ((l.instances[f] = c),
            u && u !== l && c && c === d && (l.leaveGuards.size || (l.leaveGuards = u.leaveGuards),
            l.updateGuards.size || (l.updateGuards = u.updateGuards))),
            c && l && (!u || !vo(l, u) || !d) && (l.enterCallbacks[f] || []).forEach( (y) => y(c));
        }
        , {
            flush: "post"
        }),
        () => {
            const c = o.value
              , l = s.value
              , f = l && l.components[e.name]
              , d = e.name;
            if (!f)
                return N2(r.default, {
                    Component: f,
                    route: c
                });
            const u = l.props[e.name]
              , w = u ? u === !0 ? c.params : typeof u == "function" ? u(c) : u : null
              , x = Ma(f, ke({}, w, t, {
                onVnodeUnmounted: (v) => {
                    v.component.isUnmounted && (l.instances[d] = null);
                }
                ,
                ref: i,
            }));
            return N2(r.default, {
                Component: x,
                route: c
            }) || x;
        }
        );
    },
});
function N2(e, t) {
    if (!e)
        return null;
    const r = e(t);
    return r.length === 1 ? r[0] : r;
}
const hy = py;
function my(e) {
    const t = Zw(e.routes, e)
      , r = e.parseQuery || sy
      , n = e.stringifyQuery || P2
      , o = e.history
      , a = Fo()
      , s = Fo()
      , i = Fo()
      , c = Cs(Cr);
    let l = Cr;
    Qn && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const f = Ni.bind(null, (L) => "" + L)
      , d = Ni.bind(null, ay)
      , u = Ni.bind(null, gs);
    function w(L, oe) {
        let _, ae;
        return (q3(L) ? ((_ = t.getRecordMatcher(L)),
        (ae = oe)) : (ae = L),
        t.addRoute(ae, _));
    }
    function y(L) {
        const oe = t.getRecordMatcher(L);
        oe && t.removeRoute(oe);
    }
    function x() {
        return t.getRoutes().map( (L) => L.record);
    }
    function v(L) {
        return !!t.getRecordMatcher(L);
    }
    function h(L, oe) {
        if (((oe = ke({}, oe || c.value)),
        typeof L == "string")) {
            const ge = Ei(r, L, oe.path)
              , p = t.resolve({
                path: ge.path
            }, oe)
              , g = o.createHref(ge.fullPath);
            return ke(ge, p, {
                params: u(p.params),
                hash: gs(ge.hash),
                redirectedFrom: void 0,
                href: g,
            });
        }
        let _;
        if ("path"in L)
            _ = ke({}, L, {
                path: Ei(r, L.path, oe.path).path
            });
        else {
            const ge = ke({}, L.params);
            for (const p in ge)
                ge[p] == null && delete ge[p];
            (_ = ke({}, L, {
                params: d(L.params)
            })),
            (oe.params = d(oe.params));
        }
        const ae = t.resolve(_, oe)
          , de = L.hash || "";
        ae.params = f(u(ae.params));
        const Pe = vw(n, ke({}, L, {
            hash: ry(de),
            path: ae.path
        }))
          , me = o.createHref(Pe);
        return ke({
            fullPath: Pe,
            hash: de,
            query: n === P2 ? iy(L.query) : L.query || {}
        }, ae, {
            redirectedFrom: void 0,
            href: me
        });
    }
    function m(L) {
        return typeof L == "string" ? Ei(r, L, c.value.path) : ke({}, L);
    }
    function A(L, oe) {
        if (l !== L)
            return wo(8, {
                from: oe,
                to: L
            });
    }
    function O(L) {
        return P(L);
    }
    function b(L) {
        return O(ke(m(L), {
            replace: !0
        }));
    }
    function D(L) {
        const oe = L.matched[L.matched.length - 1];
        if (oe && oe.redirect) {
            const {redirect: _} = oe;
            let ae = typeof _ == "function" ? _(L) : _;
            return (typeof ae == "string" && ((ae = ae.includes("?") || ae.includes("#") ? (ae = m(ae)) : {
                path: ae
            }),
            (ae.params = {})),
            ke({
                query: L.query,
                hash: L.hash,
                params: L.params
            }, ae));
        }
    }
    function P(L, oe) {
        const _ = (l = h(L))
          , ae = c.value
          , de = L.state
          , Pe = L.force
          , me = L.replace === !0
          , ge = D(_);
        if (ge)
            return P(ke(m(ge), {
                state: de,
                force: Pe,
                replace: me
            }), oe || _);
        const p = _;
        p.redirectedFrom = oe;
        let g;
        return (!Pe && ww(n, ae, _) && ((g = wo(16, {
            to: p,
            from: ae
        })),
        He(ae, ae, !0, !1)),
        (g ? Promise.resolve(g) : F(p, ae)).catch( (M) => (Gr(M) ? (Gr(M, 2) ? M : ie(M)) : R(M, p, ae))).then( (M) => {
            if (M) {
                if (Gr(M, 2))
                    return P(ke(m(M.to), {
                        state: de,
                        force: Pe,
                        replace: me
                    }), oe || p);
            } else
                M = re(p, ae, !0, me, de);
            return X(p, ae, M),
            M;
        }
        ));
    }
    function Y(L, oe) {
        const _ = A(L, oe);
        return _ ? Promise.reject(_) : Promise.resolve();
    }
    function F(L, oe) {
        let _;
        const [ae,de,Pe] = gy(L, oe);
        _ = Bi(ae.reverse(), "beforeRouteLeave", L, oe);
        for (const ge of ae)
            ge.leaveGuards.forEach( (p) => {
                _.push(Ir(p, L, oe));
            }
            );
        const me = Y.bind(null, L, oe);
        return (_.push(me),
        In(_).then( () => {
            _ = [];
            for (const ge of a.list())
                _.push(Ir(ge, L, oe));
            return _.push(me),
            In(_);
        }
        ).then( () => {
            _ = Bi(de, "beforeRouteUpdate", L, oe);
            for (const ge of de)
                ge.updateGuards.forEach( (p) => {
                    _.push(Ir(p, L, oe));
                }
                );
            return _.push(me),
            In(_);
        }
        ).then( () => {
            _ = [];
            for (const ge of L.matched)
                if (ge.beforeEnter && !oe.matched.includes(ge))
                    if (Array.isArray(ge.beforeEnter))
                        for (const p of ge.beforeEnter)
                            _.push(Ir(p, L, oe));
                    else
                        _.push(Ir(ge.beforeEnter, L, oe));
            return _.push(me),
            In(_);
        }
        ).then( () => (L.matched.forEach( (ge) => (ge.enterCallbacks = {})),
        (_ = Bi(Pe, "beforeRouteEnter", L, oe)),
        _.push(me),
        In(_))).then( () => {
            _ = [];
            for (const ge of s.list())
                _.push(Ir(ge, L, oe));
            return _.push(me),
            In(_);
        }
        ).catch( (ge) => (Gr(ge, 8) ? ge : Promise.reject(ge))));
    }
    function X(L, oe, _) {
        for (const ae of i.list())
            ae(L, oe, _);
    }
    function re(L, oe, _, ae, de) {
        const Pe = A(L, oe);
        if (Pe)
            return Pe;
        const me = oe === Cr
          , ge = Qn ? history.state : {};
        _ && (ae || me ? o.replace(L.fullPath, ke({
            scroll: me && ge && ge.scroll
        }, de)) : o.push(L.fullPath, de)),
        (c.value = L),
        He(L, oe, _, me),
        ie();
    }
    let k;
    function U() {
        k = o.listen( (L, oe, _) => {
            const ae = h(L)
              , de = D(ae);
            if (de) {
                P(ke(de, {
                    replace: !0
                }), ae).catch(ea);
                return;
            }
            l = ae;
            const Pe = c.value;
            Qn && Pw(x2(Pe.fullPath, _.delta), ni()),
            F(ae, Pe).catch( (me) => Gr(me, 12) ? me : Gr(me, 2) ? (P(me.to, ae).then( (ge) => {
                Gr(ge, 20) && !_.delta && _.type === va.pop && o.go(-1, !1);
            }
            ).catch(ea),
            Promise.reject()) : (_.delta && o.go(-_.delta, !1),
            R(me, ae, Pe))).then( (me) => {
                (me = me || re(ae, Pe, !1)),
                me && (_.delta ? o.go(-_.delta, !1) : _.type === va.pop && Gr(me, 20) && o.go(-1, !1)),
                X(ae, Pe, me);
            }
            ).catch(ea);
        }
        );
    }
    let I = Fo(), Q = Fo(), J;
    function R(L, oe, _) {
        ie(L);
        const ae = Q.list();
        return (ae.length ? ae.forEach( (de) => de(L, oe, _)) : console.error(L),
        Promise.reject(L));
    }
    function ne() {
        return J && c.value !== Cr ? Promise.resolve() : new Promise( (L, oe) => {
            I.add([L, oe]);
        }
        );
    }
    function ie(L) {
        return (J || ((J = !L),
        U(),
        I.list().forEach( ([oe,_]) => (L ? _(L) : oe())),
        I.reset()),
        L);
    }
    function He(L, oe, _, ae) {
        const {scrollBehavior: de} = e;
        if (!Qn || !de)
            return Promise.resolve();
        const Pe = (!_ && zw(x2(L.fullPath, 0))) || ((ae || !_) && history.state && history.state.scroll) || null;
        return br().then( () => de(L, oe, Pe)).then( (me) => me && Mw(me)).catch( (me) => R(me, L, oe));
    }
    const he = (L) => o.go(L);
    let ze;
    const Fe = new Set();
    return {
        currentRoute: c,
        addRoute: w,
        removeRoute: y,
        hasRoute: v,
        getRoutes: x,
        resolve: h,
        options: e,
        push: O,
        replace: b,
        go: he,
        back: () => he(-1),
        forward: () => he(1),
        beforeEach: a.add,
        beforeResolve: s.add,
        afterEach: i.add,
        onError: Q.add,
        isReady: ne,
        install(L) {
            const oe = this;
            L.component("RouterLink", uy),
            L.component("RouterView", hy),
            (L.config.globalProperties.$router = oe),
            Object.defineProperty(L.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Oe(c),
            }),
            Qn && !ze && c.value === Cr && ((ze = !0),
            O(o.location).catch( (de) => {}
            ));
            const _ = {};
            for (const de in Cr)
                _[de] = Me( () => c.value[de]);
            L.provide(ri, oe),
            L.provide(Kc, Ao(_)),
            L.provide(X1, c);
            const ae = L.unmount;
            Fe.add(L),
            (L.unmount = function() {
                Fe.delete(L),
                Fe.size < 1 && ((l = Cr),
                k && k(),
                (c.value = Cr),
                (ze = !1),
                (J = !1)),
                ae();
            }
            );
        },
    };
}
function In(e) {
    return e.reduce( (t, r) => t.then( () => r()), Promise.resolve());
}
function gy(e, t) {
    const r = []
      , n = []
      , o = []
      , a = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < a; s++) {
        const i = t.matched[s];
        i && (e.matched.find( (l) => vo(l, i)) ? n.push(i) : r.push(i));
        const c = e.matched[s];
        c && (t.matched.find( (l) => vo(l, c)) || o.push(c));
    }
    return [r, n, o];
}
function vy() {
    return pt(ri);
}
function bF() {
    return pt(Kc);
}
var of = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = {
        name: "en",
        el: {
            colorpicker: {
                confirm: "OK",
                clear: "Clear",
                defaultLabel: "color picker",
                description: "current color is {color}. press enter to select a new color.",
            },
            datepicker: {
                now: "Now",
                today: "Today",
                cancel: "Cancel",
                clear: "Clear",
                confirm: "OK",
                dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
                monthTablePrompt: "Use the arrow keys and enter to select the month",
                yearTablePrompt: "Use the arrow keys and enter to select the year",
                selectedDate: "Selected date",
                selectDate: "Select date",
                selectTime: "Select time",
                startDate: "Start Date",
                startTime: "Start Time",
                endDate: "End Date",
                endTime: "End Time",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                year: "",
                month1: "January",
                month2: "February",
                month3: "March",
                month4: "April",
                month5: "May",
                month6: "June",
                month7: "July",
                month8: "August",
                month9: "September",
                month10: "October",
                month11: "November",
                month12: "December",
                week: "week",
                weeks: {
                    sun: "Sun",
                    mon: "Mon",
                    tue: "Tue",
                    wed: "Wed",
                    thu: "Thu",
                    fri: "Fri",
                    sat: "Sat",
                },
                weeksFull: {
                    sun: "Sunday",
                    mon: "Monday",
                    tue: "Tuesday",
                    wed: "Wednesday",
                    thu: "Thursday",
                    fri: "Friday",
                    sat: "Saturday",
                },
                months: {
                    jan: "Jan",
                    feb: "Feb",
                    mar: "Mar",
                    apr: "Apr",
                    may: "May",
                    jun: "Jun",
                    jul: "Jul",
                    aug: "Aug",
                    sep: "Sep",
                    oct: "Oct",
                    nov: "Nov",
                    dec: "Dec",
                },
            },
            inputNumber: {
                decrease: "decrease number",
                increase: "increase number"
            },
            select: {
                loading: "Loading",
                noMatch: "No matching data",
                noData: "No data",
                placeholder: "Select",
            },
            dropdown: {
                toggleDropdown: "Toggle Dropdown"
            },
            cascader: {
                noMatch: "No matching data",
                loading: "Loading",
                placeholder: "Select",
                noData: "No data",
            },
            pagination: {
                goto: "Go to",
                pagesize: "/page",
                total: "Total {total}",
                pageClassifier: "",
                deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details",
            },
            dialog: {
                close: "Close this dialog"
            },
            drawer: {
                close: "Close this dialog"
            },
            messagebox: {
                title: "Message",
                confirm: "OK",
                cancel: "Cancel",
                error: "Illegal input",
                close: "Close this dialog",
            },
            upload: {
                deleteTip: "press delete to remove",
                delete: "Delete",
                preview: "Preview",
                continue: "Continue",
            },
            slider: {
                defaultLabel: "slider between {min} and {max}",
                defaultRangeStartLabel: "pick start value",
                defaultRangeEndLabel: "pick end value",
            },
            table: {
                emptyText: "No Data",
                confirmFilter: "Confirm",
                resetFilter: "Reset",
                clearFilter: "All",
                sumText: "Sum",
            },
            tree: {
                emptyText: "No Data"
            },
            transfer: {
                noMatch: "No matching data",
                noData: "No data",
                titles: ["List 1", "List 2"],
                filterPlaceholder: "Enter keyword",
                noCheckedFormat: "{total} items",
                hasCheckedFormat: "{checked}/{total} checked",
            },
            image: {
                error: "FAILED"
            },
            pageHeader: {
                title: "Back"
            },
            popconfirm: {
                confirmButtonText: "Yes",
                cancelButtonText: "No"
            },
        },
    };
    e.default = t;
}
)(of);
const wy = $r(of);
var af = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = {
        name: "zh-cn",
        el: {
            colorpicker: {
                confirm: "确定",
                clear: "清空"
            },
            datepicker: {
                now: "此刻",
                today: "今天",
                cancel: "取消",
                clear: "清空",
                confirm: "确定",
                selectDate: "选择日期",
                selectTime: "选择时间",
                startDate: "开始日期",
                startTime: "开始时间",
                endDate: "结束日期",
                endTime: "结束时间",
                prevYear: "前一年",
                nextYear: "后一年",
                prevMonth: "上个月",
                nextMonth: "下个月",
                year: "年",
                month1: "1 月",
                month2: "2 月",
                month3: "3 月",
                month4: "4 月",
                month5: "5 月",
                month6: "6 月",
                month7: "7 月",
                month8: "8 月",
                month9: "9 月",
                month10: "10 月",
                month11: "11 月",
                month12: "12 月",
                weeks: {
                    sun: "日",
                    mon: "一",
                    tue: "二",
                    wed: "三",
                    thu: "四",
                    fri: "五",
                    sat: "六",
                },
                months: {
                    jan: "一月",
                    feb: "二月",
                    mar: "三月",
                    apr: "四月",
                    may: "五月",
                    jun: "六月",
                    jul: "七月",
                    aug: "八月",
                    sep: "九月",
                    oct: "十月",
                    nov: "十一月",
                    dec: "十二月",
                },
            },
            select: {
                loading: "加载中",
                noMatch: "无匹配数据",
                noData: "无数据",
                placeholder: "请选择",
            },
            cascader: {
                noMatch: "无匹配数据",
                loading: "加载中",
                placeholder: "请选择",
                noData: "暂无数据",
            },
            pagination: {
                goto: "前往",
                pagesize: "条/页",
                total: "共 {total} 条",
                pageClassifier: "页",
                deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档",
            },
            messagebox: {
                title: "提示",
                confirm: "确定",
                cancel: "取消",
                error: "输入的数据不合法!",
            },
            upload: {
                deleteTip: "按 delete 键可删除",
                delete: "删除",
                preview: "查看图片",
                continue: "继续上传",
            },
            table: {
                emptyText: "暂无数据",
                confirmFilter: "筛选",
                resetFilter: "重置",
                clearFilter: "全部",
                sumText: "合计",
            },
            tree: {
                emptyText: "暂无数据"
            },
            transfer: {
                noMatch: "无匹配数据",
                noData: "无数据",
                titles: ["列表 1", "列表 2"],
                filterPlaceholder: "请输入搜索内容",
                noCheckedFormat: "共 {total} 项",
                hasCheckedFormat: "已选 {checked}/{total} 项",
            },
            image: {
                error: "加载失败"
            },
            pageHeader: {
                title: "返回"
            },
            popconfirm: {
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            },
        },
    };
    e.default = t;
}
)(af);
const yy = $r(af);
var sf = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = {
        name: "zh-tw",
        el: {
            colorpicker: {
                confirm: "確認",
                clear: "清空",
                defaultLabel: "色彩選擇器",
                description: "目前色彩為 {color}。按一下 Enter 以選擇新色彩。",
            },
            datepicker: {
                now: "現在",
                today: "今天",
                cancel: "取消",
                clear: "清空",
                confirm: "確認",
                dateTablePrompt: "使用方向鍵與 Enter 鍵以選擇日期",
                monthTablePrompt: "使用方向鍵與 Enter 鍵以選擇月份",
                yearTablePrompt: "使用方向鍵與 Enter 鍵以選擇年份",
                selectedDate: "已選日期",
                selectDate: "選擇日期",
                selectTime: "選擇時間",
                startDate: "開始日期",
                startTime: "開始時間",
                endDate: "結束日期",
                endTime: "結束時間",
                prevYear: "前一年",
                nextYear: "後一年",
                prevMonth: "上個月",
                nextMonth: "下個月",
                year: "年",
                month1: "1 月",
                month2: "2 月",
                month3: "3 月",
                month4: "4 月",
                month5: "5 月",
                month6: "6 月",
                month7: "7 月",
                month8: "8 月",
                month9: "9 月",
                month10: "10 月",
                month11: "11 月",
                month12: "12 月",
                weeks: {
                    sun: "日",
                    mon: "一",
                    tue: "二",
                    wed: "三",
                    thu: "四",
                    fri: "五",
                    sat: "六",
                },
                weeksFull: {
                    sun: "星期日",
                    mon: "星期一",
                    tue: "星期二",
                    wed: "星期三",
                    thu: "星期四",
                    fri: "星期五",
                    sat: "星期六",
                },
                months: {
                    jan: "一月",
                    feb: "二月",
                    mar: "三月",
                    apr: "四月",
                    may: "五月",
                    jun: "六月",
                    jul: "七月",
                    aug: "八月",
                    sep: "九月",
                    oct: "十月",
                    nov: "十一月",
                    dec: "十二月",
                },
            },
            inputNumber: {
                decrease: "減少數值",
                increase: "增加數值"
            },
            select: {
                loading: "載入中",
                noMatch: "無相符資料",
                noData: "無資料",
                placeholder: "請選擇",
            },
            dropdown: {
                toggleDropdown: "切換下拉選單"
            },
            cascader: {
                noMatch: "無相符資料",
                loading: "載入中",
                placeholder: "請選擇",
                noData: "無資料",
            },
            pagination: {
                goto: "前往",
                pagesize: "項/頁",
                total: "共 {total} 項",
                pageClassifier: "頁",
                deprecationWarning: "偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊",
            },
            dialog: {
                close: "關閉此對話框"
            },
            drawer: {
                close: "關閉此對話框"
            },
            messagebox: {
                title: "提示",
                confirm: "確定",
                cancel: "取消",
                error: "輸入的資料不符規定!",
                close: "關閉此對話框",
            },
            upload: {
                deleteTip: "按一下 Delete 鍵以刪除",
                delete: "刪除",
                preview: "查看圖片",
                continue: "繼續上傳",
            },
            slider: {
                defaultLabel: "滑桿介於 {min} 至 {max}",
                defaultRangeStartLabel: "選擇起始值",
                defaultRangeEndLabel: "選擇結束值",
            },
            table: {
                emptyText: "暫無資料",
                confirmFilter: "篩選",
                resetFilter: "重置",
                clearFilter: "全部",
                sumText: "合計",
            },
            tree: {
                emptyText: "暫無資料"
            },
            transfer: {
                noMatch: "無相符資料",
                noData: "無資料",
                titles: ["列表 1", "列表 2"],
                filterPlaceholder: "請輸入搜尋內容",
                noCheckedFormat: "共 {total} 項",
                hasCheckedFormat: "已選 {checked}/{total} 項",
            },
            image: {
                error: "載入失敗"
            },
            pageHeader: {
                title: "返回"
            },
            popconfirm: {
                confirmButtonText: "確認",
                cancelButtonText: "取消"
            },
        },
    };
    e.default = t;
}
)(sf);
const xy = $r(sf)
  , Oy = {
    download: "Download",
    view: "View",
    month: {
        10: "Oct",
        11: "Nov",
        12: "Dec",
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
    },
    allRoles: "All Roles",
    inputAtLeastTwoChars: "Input at least 2 characters",
}
  , Ay = "Live"
  , by = "Capture"
  , Dy = "Homepage"
  , My = "Hello"
  , Py = "points"
  , zy = "No data"
  , Hy = "Resource"
  , jy = "Help"
  , Ny = "Log in"
  , Ey = "More"
  , By = "Clear"
  , Ty = "Reset"
  , Cy = "Search"
  , Gy = "Published At"
  , Yy = "Published At"
  , Fy = "Ongoing"
  , Iy = "Email"
  , Ly = "Address"
  , Ry = "Technical Support"
  , Xy = "Homepage Management"
  , Zy = "Module name"
  , ky = "Whether to show"
  , Uy = "Portal title"
  , Sy = "Header"
  , Wy = "Statistics"
  , Qy = "Bottom information"
  , Jy = "Copyright"
  , Vy = "Organization logo"
  , qy = "Yes"
  , Ky = "no"
  , _y = "Save"
  , $y = "Cancel"
  , ex = "Next"
  , tx = "Previous"
  , rx = "upload"
  , nx = "Recommend upload transparent background PNG image, size should not exceed 3M"
  , ox = "Select All"
  , ax = "Classification"
  , sx = "Classroom Live"
  , ix = "classroom Capture"
  , cx = {
    firstLevel: "First level classification",
    secondLevel: "Second level classification",
    thirdLevel: "Third level classification",
}
  , lx = {
    course: {
        type: "Course",
        fields: {
            name: "Course name",
            status: "Status",
            teacher: "Teacher",
            time: "Course Time",
            location: "Location",
            department: "Department",
            code: "Course Code",
            teachingClassName: "Teaching Class",
            academicYearSemester: "Year&Semester",
        },
        desc: '"Course" type content, from all current public courses',
        dataRule: {
            timeDesc: " In reverse order of course time"
        },
    },
    video: {
        type: "Video",
        fields: {
            name: "Video name",
            publishedAt: "Published At",
            duration: "Video duration",
            publisher: "Sharer",
            viewCount: "Views",
        },
        desc: "“Video” type content, from the current public resource library",
    },
    file: {
        type: "File",
        fields: {
            name: "File Name",
            category: "Type",
            publishedAt: "Published At",
            size: "File size",
            publisher: "Sharer",
            viewCount: "Views",
        },
        desc: "“File” type content, from the current public resource library",
    },
    user: {
        type: "Personnel",
        fields: {
            name: "Personnel name",
            avatar: "Avatar",
            department: "Department",
        },
        desc: "“Personnel” type content, from the current institutional teacher role",
    },
    topic: {
        type: "Topic",
        fields: {
            name: "Topic name",
            description: "Topic introduction",
            publisher: "Sharer",
            publishedAt: "Shared At",
            resourceCount: "Number of resources",
            classification: "Classification",
            topicClassification: "Topic Classification",
            topicTag: "Topic Tag",
            tag: "Tag",
        },
        desc: "“Topic” type content, from the topic management",
    },
    count: "{n} module currently | {n} modules currently",
    max: "Up to {n} modules can be added",
    common: {
        dataRule: {
            publishedAtDesc: "Sort by Share time(Descending)",
            viewCountDesc: "Sort by Views(Descending)",
            fansCountDesc: "Sort by Fans(Descending)",
            publishResourceCountDesc: "Sort by Shared resources(Descending)",
            resourceCountDesc: "Sort by Included resources number(Descending)",
            courseTimeDesc: "Sort by Course start date(Descending)",
        },
    },
    name: "Module",
    showFields: "Display Fields",
    fieldsSelectHint: "Select to show",
    custom: "Custom plan",
    dataRule: "Display rules",
    dataRuleHint: 'Set "display rule" to select the actual display range of the homepage',
    linesRule: "Display lines",
    linesRuleHint: 'Set  "display lines" to control the number of lines actually displayed on the homepage, up to 8 lines.',
}
  , ux = "Add Module"
  , fx = "Module settings"
  , dx = {
    required: "This field is required",
    maxLength: "Enter up to {max} characters",
    nameRepetitive: "Topic name already exists",
}
  , px = "Module type"
  , hx = "All"
  , mx = "Public live"
  , gx = "Public captured course"
  , vx = "Last {num}d"
  , wx = "Current Semester"
  , yx = "Current Academic Year"
  , xx = {
    week0: "Sunday",
    week1: "Monday",
    week2: "Tuesday",
    week3: "Wednesday",
    week4: "Thursday",
    week5: "Friday",
    week6: "Saturday",
}
  , Ox = {
    living: "Live Now",
    upcoming: "Upcoming",
    finished: "Ended",
    recording: "Recording",
    inProgress: "In Progress",
}
  , Ax = {
    searchTip: "Schedule name / Course / Location / Teacher",
    expand: "Expand filter",
    collapse: "Collapse filter",
    semester: "Semester",
    startTime: "Live time",
    department: "Department",
    campus: "Campus",
    building: "Building",
    classroom: "Classroom",
    reset: "Reset",
    emptyTipPrefix: "No “",
    emptyTipText: "Public live",
    emptyTipSuffix: "” content currently",
    teachingClassName: "Teaching Class",
}
  , bx = {
    watchLive: "Watch live",
    watchReplay: "Download video",
    // modified
    upcoming: "Upcoming",
    transcoding: "Transcoding",
    waitForFinish: "Available to watch when finished",
}
  , Dx = "My captured course"
  , Mx = {
    searchTip: "Course name / Course code"
}
  , Px = {
    all: "All",
    inprogress: "Ongoing",
    upcoming: "Upcoming",
    end: "Ended",
}
  , zx = {
    all: "All",
    published: "Published",
    unpublished: "Draft"
}
  , Hx = {
    searchTip: "Course name / Course code / Teacher name",
    status: "Course status",
}
  , jx = {
    noCoursePrefix: "No",
    noCourseSuffix: "content currently"
}
  , Nx = "File size cannot exceed {n}M"
  , Ex = {
    content: "Catalogue",
    instructor: "Teacher",
    nthWeek: "week {n}",
    nActivity: "{n} activities",
    startDate: "Start date",
    slotNo: "slot {n}",
    location: "Location",
    unavailable: "Unavailable",
    captureContent: "Course content",
    noContentSuffix: " currently",
}
  , Bx = "Back"
  , Tx = {
    type: {
        subject_lib: "Question",
        subject_library: "Question",
        course_package: "Course package",
        lesson_resource: "Recorded Lessons",
        video: "Video",
        document: "Document",
        audio: "Audio",
        image: "Image",
        link: "Link",
        all: "All",
        other: "Other",
        file: "Other",
        swf: "Flash",
        folder: "Folder",
        scorm: "SCORM",
        evercam: "EverCam packages",
        wmpkg: "wmpkg",
        slide: "slide",
        zip: "Compressed Document",
    },
    emptyTip: "No file",
    stats: {
        like: "Like",
        view: "View",
        download: "Download",
        favorite: "Favorite",
        copy: "Copy",
    },
    sortFilter: {
        createdAt: "Latest file",
        likeCount: "Most Popular",
        collectionCount: "Most Favorited",
        viewCount: "Most Viewed",
        downloadCount: "Most Downloaded",
        saveCount: "Most Used",
    },
}
  , Cx = "Semester"
  , Gx = "Add file"
  , Yx = "Delete file"
  , Fx = {
    emptyTip: "No course",
    add: "Add course",
    delete: "Delete course",
    name: "Course resources",
    batchSetting: "Batch Settings",
    department: "Department",
    publishStatus: "Publish Status",
    classification: "Classification",
    subject: "Subject Category",
    recordStatus: "State",
    courseDepartment: "Department",
    startTime: "Start Date",
    host: "Host",
    courseName: "Course Name",
    selectedCountTip: "Select {0} Items",
    defaultSettingTip: "The current setting is default, please adjust it as needed",
    recordSwitch: "Record Switch",
    liveSwitch: "Open Live",
    publishSwitch: "Post recording to the course",
    daemonRecord: "Server Recording Only",
    downloadPermission: "Download",
    allowDownload: "Allow Download",
    openScopeSetting: "Portal Settings",
    courseCode: "Course Code",
    location: "Location",
    campus: "Campus",
    building: "Building",
    classroom: "Classroom",
    saveSettingTips: "The settings of {count} course(s) will be modified",
}
  , Ix = "Confirm"
  , Lx = "Course name / Code / Teacher"
  , Rx = "End date"
  , Xx = "Successfully deleted"
  , Zx = "File name / Sharer"
  , kx = "File resources"
  , Ux = "Current {n} resources"
  , Sx = "Modify picture"
  , Wx = "Start date"
  , Qx = {
    userMenus: {
        courseCenter: "Course Center",
        learningCenter: "Learning Center",
        myCourses: "My Courses",
        myProjects: "My Projects",
        myResource: "My Resources",
        myGroups: "My Groups",
        userProfile: "Personal Center",
        mySettings: "My Settings",
        changeLanguage: "Language switch",
        logout: "Log out",
    },
    controlPanel: "Control Panel",
}
  , Jx = {
    admin: "Topic Management",
    coverTip: "Recommended picture scale: 16:9 /  size should not exceed 1M <br> Supported formats: png、jpg、jpeg、webp",
    deleteConfirm: "Are you sure to delete {topicName} ? The topic has been published to the resource platform, and deletion will affect the display.",
    edit: "Edit topic",
    editTopic: "Edit",
    new: "Add topic",
    cover: "Topic picture",
    file: "File",
    course: "Course",
    indexTip: 'Below are all the topics of the current institution, you can set the topic display rules of portal home page in "<a style="color: var(--rms-primary-color)" href="/admin/home?tab=module" target="_blank">Homepage configuration-Module settings</a>".',
    resource: "Topic resources",
    publisherTip: "Enter sharer",
    index: "Topic list",
    detail: "Topic Detail",
    department: "Department",
    sortFilter: {
        createdAt: "Latest topic",
        resourceCount: "Most resources"
    },
    deleteTitle: "Delete Topic",
    selectResourceStats: "{0} file(s) and {1} course(s) selected",
    selectFileStats: "{0} file(s) selected",
    selectCaptureStats: "{0} course(s) selected",
}
  , Vx = "Type"
  , qx = "Operate"
  , Kx = "Topic name / Sharer / Tag"
  , _x = "Basic Information"
  , $x = "Currently using the system default image<br> Click to modify"
  , eO = "Please enter {0}"
  , tO = "Selected content added successfully"
  , rO = {
    category: {
        "topic-course": "Capture Course",
        "topic-file": "File",
        course: "Capture Course",
        file: "File",
        topic: "Topic",
    },
    tips: {
        suggestChangeKeywordOrCondation: "Suggestions: Try other keywords or conditions.",
        SuggestModifyConditions: "Suggestion: Try other conditions",
        noResourcePrefix: "Sorry, no resources found for",
        noResourceSuffix: "",
        noResource: "Sorry, no related resources were found",
        allCourses: "All courses",
    },
}
  , nO = {
    homepage: "Homepage",
    resourceCourse: "Capture Course List",
    resourceFile: "File list",
    resource: "Resources",
    searchResult: "Search results",
}
  , oO = "All files"
  , aO = {
    sharedAt: "Shared at",
    department: "Department",
    placeHolder: "Resource name / Sharer / Tag",
}
  , sO = "File category"
  , iO = "Go Back"
  , cO = {
    PRIVATE: "Private",
    PUBLIC: "Public",
    SCHOOL: "On-Campus"
}
  , lO = "Scope"
  , uO = "All topics"
  , fO = "No related resources currently"
  , dO = "No Data"
  , pO = "Upload failed"
  , hO = {
    name: "Education",
    xjtuName: "Training Level",
    undergraduate: "Undergraduate",
    postgraduate: "Graduate",
}
  , mO = "Delete canceled"
  , gO = "Delete fail"
  , vO = "Are you sure to delete {name} ？"
  , wO = {
    createTag: "Add Tag",
    updateTag: "Edit Tag",
    createTagPlaceholder: "Please input the tag name",
    createTagSuccess: "Create Saved",
    updateTagSuccess: "Change Saved",
    deleteTag: "Delete Tag",
    deleteTagTip: "Are you sure to delete {tagName}",
    deleteTagRelatedTip: "The tag is associated with resources, are you sure to delete the tag {tagName}",
    tagName: "Tag Name",
    resourceCount: "Resource Count",
    operation: "Operation",
    pleaseInputTag: "please input tag",
    selfCreated: "Self-created Tag",
    kfsCreated: "Knowledge Forest Tag",
    sourceSubjectOrProject: "Source Subject/Project",
    sourceCourse: "Source Course",
    failedToGetSourceInfo: "Failed to get source info of knowledge-forest tags",
}
  , yO = {
    resourceManagement: "Resource Management",
    captureResource: "Capture Course Setting",
    fileResource: "File Resource",
    fileAudit: "File Audit",
    topicResource: "Topic Resource",
    basicDataManagement: "Basic Data Management",
    portalManagement: "Portal Management",
    resourceTag: "Resource Tag",
    resourceClassification: "Resource Classification",
    liveCaptureManagement: "Live&Capture Management",
    classroomManagement: "Classroom Management",
    scheduleManagement: "Schedule Management",
    streamForwardManagement: "Forward Management",
    captureManagement: "Recorded Resource Management",
    orgManagement: "Org Management",
    statistics: "Statistics",
    fileResourceStatistics: "File Resource",
    liveAndCaptureStatistics: "Live&Capture",
    capacityManagement: "Capacity Management",
    recycleManagement: "Trash",
    subject: "Subject Category",
    operateLog: "Log",
    systemOperateLog: "System Task Log",
    userOperateLog: "User Operation Log",
}
  , xO = "Edit"
  , OO = {
    addFirstLevel: "Add First Level Classification",
    addSecondLevel: "Add Second Level Classification",
    addThirdLevel: "Add Third Level Classification",
    resourceCount: "Resource Count",
    name: "Classification Name",
    namePlaceholder: "Please enter content",
    create: "Add Classification",
    duplicateNameInSameLevel: "Classification name has been used in same level.",
    deleteClassificationTitle: "Delete Classification",
    deleteClassificationTip: 'Are you sure to delete the classification "{name}"?',
    deleteClassificationRelatedTip: "Are you sure to delete the classification {name}? It has associated with  {count} resources.",
    update: "Edit Classification",
    updateSuccess: "Change Saved",
    createSuccess: "Create Saved",
}
  , AO = "Server Error"
  , bO = {
    Student: "Student",
    Instructor: "Instructor",
    EducationalAdmin: "EducationalAdmin",
    Admin: "SuperAdmin",
}
  , DO = {
    selects: {
        tagSearchPlaceholder: "Search / Create a tag",
        clfSearchPlaceholder: "Search classification",
        createPlaceholder: "Create a tag",
        notFoundPlaceholder: "Tag not found, click to create",
    },
    editResource: "Editing Resource",
    form: {
        name: "Name",
        category: "Type",
        openScope: "Share To",
        department: "Department",
        role: "Role",
        ccLicenseName: "License",
        download: "Download",
        allowSave: "Can Allow copy",
        allowDownload: "Can Allow download",
        classification: "Classification",
        tag: "Tag",
        summary: "Summary",
        unPublishedReason: "Removal Reason",
        selectedItemsTip: "Selected {0} items",
        resource: "Resource",
        subject: "Subject Category",
    },
    published: {
        searchPlaceholder: "Resource Name / Sharer / Tag",
        publishedResource: "Published Resource",
        name: "Resource Name",
        category: "Type",
        classification: "Classification",
        tag: "Tag",
        openScope: "Scope",
        createdBy: "Sharer",
        createdAt: "Shared At",
        takeDown: "Remove",
    },
    unpublished: {
        unpublishedResource: "Removed Resource",
        reason: "Removal Reason",
        publish: "Publish",
        searchPlaceholder: "Resource Name / Sharer / Removal Reason",
        republishResource: "Publish Resource",
        confirmMessage: "Resource will be republished to the resource platform and the reporting information will be cleared.",
    },
    audit: {
        audit: "Audit",
        resourceAudit: "resourceAudit",
        auditTip: "After approval, the resource will be published on the resource platform",
        auditing: "In review",
        auditAllow: "Audit approval",
        auditAllowAndSave: "Audit approval and save",
        auditRefusal: "Audit refusal",
        refusalReason: "Reason for refusal",
        auditingResource: "To Be Audited Resource",
    },
    resourcePublish: {
        resourcePublish: "Publish resource",
        publishSetting: "Publish settings",
        footerTip: "Please respect intellectual property rights. Use authorized content.",
    },
    batchTakeDown: {
        title: "Batch Take Down",
        selectCount: "{count} resource(s) selected",
        successTip: "Take Down Success",
        failTip: "Take Down Failed",
    },
    batchRePublish: {
        title: "Batch publish",
        selectCount: "{count} resource(s) selected",
        successTip: "Publish Success",
        failTip: "Publish Failed",
    },
    batchEdit: {
        title: "Batch edit",
        dialogTitle: "Batch edit resource",
        selectCount: "{count} resource(s) selected",
        editField: "Editing Field",
        fields: {
            shareTo: "Share To",
            ccLicenseName: "License",
            download: "Download",
            classification: "Classification",
            tag: "Tag",
        },
    },
    operation: "Operation",
    viewDetail: "View Detail",
    unPublishResource: "Remove Resource",
    hideBaseInfo: "Hide basic information",
    displayBaseInfo: "Show basic information",
    sharer: "Sharer",
    sharedAt: "Shared At",
    classification: "Classification",
    scope: "Scope",
    tag: "Tag",
    off_campus: "Off-Campus",
    department: "Department",
    org: "School",
    group: "Group Resources",
    personal: "Individual",
    delete: "Delete",
    deleteResourceTip: "After the operation, the current resource and its sub-level content will be deleted",
    deleteResource: "Delete Resource",
    batchAudit: {
        title: "Batch Audit",
        selectCountTip: "{count} resources have been selected, and the resources will be displayed in the resource platform after approval",
        editSelectedResources: "Edit selected resources",
    },
}
  , MO = {
    uplaodSizeTip: "Support for multiple files upload, Please drag or click the button to upload files.The max size for a single file is ",
    uplaodTypeTip: "File formats supported by the system ",
    uploadSecretTip: "If you upload an encoded file, it will be invisible on-line",
    videoFormat: "Video format",
    audioFormat: "Audio format",
    imageFormat: "Image format",
    docFormat: "Document format",
    compressFormat: "Compressed document format",
    size: "Size",
    uplaodFailed: "Upload failed",
    supportFileType: "Support File Types",
    reTranscode: "Retry",
}
  , PO = {
    sharer: "Sharer",
    like: "Like",
    doLike: "Like",
    view: "View",
    favorites: "Favorites",
    cancelFavirites: "Cancel Favirites",
    cancelShare: "Withdraw",
    shareScope: "Open scope",
    shareTime: "Share Time",
    download: "Download",
    copy: "Copy",
    report: "Report",
    summary: "Summary",
    "comment&score": "Comment & Score",
    score: "Score",
    noSummary: "No summary",
    resourceCount: "Resource Count",
    followers: "Followers",
    follow: "Follow",
    follows: "Following",
    unfollow: "Unfollow",
    relatedTags: "Related Tags",
    noRelatedTags: "No tags",
    relatedResources: "Related Resources",
    noRecommentdations: "No recommendations",
    resourceScore: "Resources score",
    commentPlaceholder: "Enter a comment",
    reply: "Reply",
    unavailable: "Not found",
    viewAllReplies: "View all {0} replies",
    collapseReply: "Close reply",
    delCommentIncludeReplyTip: "Confirm to delete this comment and related reply? Deleted content will not be recovered.",
    delCommmentNotIncludeReplyTip: "Confirm to delete this comment? Deleted content will not be recovered.",
    delStarTip: "Confirm to delete this rating? Deleted rating will not be recovered.",
    noScore: "No score",
    copyTips: "Save it to your personal resource library?",
    cancelFavTip: "Are you sure you want to remove from favorites?",
    cancelShareTip: "Are you sure you want to remove from shared?",
    viewing: "Viewing",
    followersAreViewing: "Followers are viewing",
}
  , zO = "Upload resource"
  , HO = "Not Specified"
  , jO = "All Roles"
  , NO = "Not Specified"
  , EO = "Off-Campus"
  , BO = "Department"
  , TO = "School"
  , CO = "Tips"
  , GO = {
    reportInfo: "Reporting Information",
    reportCount: "Count",
    reportReason: {
        copyright: "Piracy or infringement",
        ad_or_spam: "Advertising or spam messages",
        vulgar_info: "Pornographic, obscene, vulgar information",
        reactionary_info: "Anti government, anti human, anti social and other reactionary information",
        crime_info: "Gambling, violence, murder, terrorism, or the solicitation of a crime",
        defamation: "Insult, slander, etc.",
        rumor: "Spread rumors, disrupt social order, undermine social stability",
    },
    reportStatsTip: "This resource has {count} reported information",
    ignore: "Ignore",
    emptyWarning: "Confirm to clear the reported information of this resource?",
    reportSuccess: "Reported successfully",
    report: "Report",
    confirm: "Confirm",
}
  , YO = {
    notFound: "Not Found",
    create: "Create"
}
  , FO = ""
  , IO = "File Detail"
  , LO = "Operation successful"
  , RO = "Operate Failed"
  , XO = "Submit"
  , ZO = "No more content"
  , kO = "No comments"
  , UO = "You"
  , SO = "Failed"
  , WO = "The modified content has not been saved, confirm to leave?"
  , QO = "Link"
  , JO = {
    uploading: "In transmission...",
    processing: "Transcoding...",
    failed: "Failed",
    cliping: "Cliping",
    clip_failed: "Clip Failed",
    file_locked: "The password protected document cannot be invisible on-line. Please download to check it",
}
  , VO = {
    page: "Page",
    prevPage: "Previous Page",
    nextPage: "Next Page",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    enterFullScreen: "Enter full screen",
    exitFullScreen: "Exit full screen",
}
  , qO = {
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    rotate: "Rotate Anti-Clockwise",
    reset: "Restore",
    exitFullScreen: "Exit full screen",
    enterFullScreen: "Enter full screen",
}
  , KO = {
    private: "Private (Copyright)",
    public_domain: "Public Domain",
    cc_attribute: "CC Attribution",
    cc_attribute_share_alike: "CC Attribution Share Alike",
    cc_attribute_no_derivatives: "CC Attribution No Derivatives",
    cc_attribute_non_commercial: "CC Attribution Non-Commercial",
    cc_attribute_non_commercial_share_alike: "CC Attribution Non-Commercial Share Alike",
    cc_attribute_non_commercial_no_derivatives: "CC Attribution Non-Commercial No Derivatives",
}
  , _O = "Open in browser"
  , $O = {
    single_selection: "Multiple-Choice",
    multiple_selection: "Multiple-Answer",
    true_or_false: "True or False",
    matching: "Matching",
    cloze: "Cloze",
    fill_in_blank: "Fill Blank",
    short_answer: "Short Answer",
    analysis: "Analysis",
    stats: "Total {0}",
    unit: "",
    difficultyLevel: "Difficulty level",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
}
  , eA = "Preview of this resource is currently not supported"
  , tA = "Download"
  , rA = "Preview not supported"
  , nA = "On"
  , oA = "Off"
  , aA = {
    reset: "Reset",
    date: "Date",
    campus: "Campus",
    building: "Building",
    classroom: "Classroom",
    type: "Type",
    searchTip: "Name / Course / Location / Host",
}
  , sA = {
    settings: "System Settings",
    settingsTitle: "Capture Settings",
    batchDelete: "Batch Delete",
    record: "Record",
    clip: "Clip",
    composite: "Composite",
    deleteTitle: "Delete Category",
    deleteConfirm: "Confirm to delete selected Category/Categories?",
    batchDeleteTitle: "Batch Delete",
    batchDeleteConfirm: "{ count } captures selected, confirm to delete?",
    deleteAssociatedSchedule: "Delete Live or Recorded schedule",
    downloadPermission: "Download Permission",
    downloadAllowAll: "Download allowed",
    downloadForbidden: "Download prohibited",
    allowDownloadTip: "Open the download permission of recording",
    forbiddenDownloadTip: "Turn off download permission of recording, only administrators and lecturers can download",
    saveSucceeded: "Save successfully",
    saveFailed: "Save failed",
    view: "View",
    edit: "Edit",
    delete: "Delete",
    name: "Name",
    courseName: "Course Name",
    tag: "Tag",
    host: "Host",
    date: "Date",
    location: "Location",
    type: "Type",
    operate: "Operate",
    operateResult: "Execution Result",
    SUCCESS: "Success",
    FAIL: "Fail",
    captureDeleted: "The video is deleted",
    saveSuccessTip: 'It is being synthesized, we will notify you in time when it is over. You can check the progress in "My Resources".',
    savedWithoutTaskTip: 'Synthesize finished，You can check it in "My Resources".',
    clipSuccessMessage: "It is clipping, if you want to check it please go to Resource",
    clipErrorMessage: "Create clip task fail",
    autoDeleteSetting: "Automatically Delete Setting",
    autoDelete: "Delete Setting",
    autoDeleteDisabled: "Off",
    autoDeleteEnabled: "On",
    autoDeleteBeforeNSemester: "Delete Range",
    autoDeleteBeforeNSemesterTip: "Automatically delete recording resources",
    autoDeleteBeforeNSemesterAfterTip: "semesters ago",
    autoDeleteBeforeNSemesterQuestionTip: "Rolling deletion of recorded resources by semester",
    autoDeleteDeleteMethod: "Deletion Operation",
    autoDeleteDeleteMethodMovingToTrash: "Move to trash, delete completely after expiry date",
    autoDeleteDeleteMethodDirectDelete: "Delete completely without moving to the trash",
    autoDeleteDeleteMethodMovingToTrashQuestionTip: "Resources are moved to the trash and will be automatically and completely deleted after xx days. Resources in the trash will still take up storage space",
    autoDeleteDeleteMethodDirectDeleteQuestionTip: "Delete completely without moving to the trash for free up storage space. Once deleted, it will not be recoverable, please operate with caution",
    confirmSaveAutoDeleteSettingTitle: "Are you sure you want to enable the automatically delete setting?",
    confirmSaveAutoDeleteSettingContent: "<span>Once enabled, the deletion task will be performed <strong>{0}</strong>.<br/>Resources cannot be recovered after complete deletion, please operate with caution.</span>",
    autoDeleteDetail: "View Details",
    deletionSettingOverview: "<span>It is expected that <strong>{semesterCount} semesters</strong> of recorded resources will be deleted, total <strong>{total} items</strong>. Deletion will free up storage space <em>{videoSize}</em></span>",
    videoSize: "Size",
}
  , iA = "Settings"
  , cA = "Header preview"
  , lA = "Display item"
  , uA = {
    emptyNode: "No knowledge node",
    title: "Knowledge Forest",
    facet: "Facet",
    fragment: "Fragment",
    facetNFragment: "Facets&Fragments",
    subjectList: "Course List",
    projectList: "Project List",
    searchPlaceholder: "Subject name/Research direction",
    link: "Link",
    isbn: "ISBN",
    webSource: "Web Source",
    bookSource: "Book Source",
    otherSource: "Source",
    noSource: "No Source",
    pageFormat: "Page {0}",
    noFragment: "Fragment not found",
    facetAndFragmentCount: "{facetCount} facets and {fragmentCount} fragments in total",
    fragmentsOfFacet1: "Fragments of Facet: ",
    fragmentsOfFacet2: "",
    enterKnowledgeForest: "Enter the knowledge forest",
    relatedKnowledgeForestCourse: "Related Knowledge Forest Course",
    selectCourseEnter: "Please select the course to enter",
    subject: "Subject",
    noSpecifiedSubject: "Not Specified Subject",
    noSpecifiedDepartment: "Not Specified Department",
    switchToCluster: "Knowledge Forest",
    switchToGraph: "Knowledge Graph",
    project: "Research Direction",
    viewModePlaceholder: "Select View Mode",
    viewByDept: "View By Department",
    viewBySubject: "View By Subject",
    subjectSearchPlaceholder: "Subject Name",
    departmentSearchPlaceholder: "Department Name",
    projectSearchPlaceholder: "Research Direction",
}
  , fA = {
    prior: "Prior/Subsequent",
    file: "File",
    topic: "Topic",
    course: "Course",
    time: "Time",
    relatedResource: "Related Resources",
    topicResourceCount: "{resourceCount} related resource(s)",
}
  , dA = {
    overview: {
        title: "Overview",
        captureCourseCount: "Capture Course",
        publicCaptureCourseCount: "Public Capture Course",
        scheduleCount: "Schedule",
        publicScheduleCount: "Public Schedule",
        captureCount: "Recorded Resource",
        publicCaptureCount: "Public Recorded Resource",
    },
    captureCourse: {
        statsTitle: "Capture Course Statistic",
        visitTrend: "Views Analysis",
        totalViews: "Total views",
        totalViewers: "Total viewers",
        viewCount: "Views",
        viewerCount: "Viewers",
        visitRanking: "Ranking of Views",
        rank: "Ranking",
        captureCourseName: "Course Name",
        instructors: "Host",
    },
    schedule: {
        AIAnalysisUsage: "Video Analysis Statistics",
        scheduleWithCaptionsCount: "Resource With Captions",
        scheduleWithTopicsCount: "Resource With Topics",
        scheduleWithCaptions: "With Captions",
        scheduleWithTopics: "With Topics",
        scheduleWithoutCaptions: "Without Captions",
        scheduleWithoutTopics: "Without Topics",
        acrossAllSchedules: "Across All Schedules",
        countStat: "Schedule Statistic",
        todaySchedules: "Schedule Today",
        upcoming: "Upcoming",
        recording: "Recording",
        livingAndRecording: "Living/Recoding",
        processing: "Processing",
        finished: "Finished",
        failed: "Failure",
    },
    classroomDevice: {
        title: "Classroom Devices",
        classroomTotalCount: "Classroom Total Amount",
        using: "In Use",
        free: "Available",
        notEnabled: "Disabled",
        deviceExceptionStat: "Device Exception Logs",
        classroomWithMalfunctionedDevice: "Exceptional Classrooms",
        networkError: "Network Error",
        apiError: "API Error",
        unknownError: "Unknown Error",
        noRecordingError: "No record Error",
        deviceErrLogsCount: "Exception logs in the past 30 days",
    },
    classificationStats: {
        title: "Capture Course Classification Statistics"
    },
}
  , pA = {
    all: "All",
    day: "Day",
    month: "Month",
    year: "Year",
    today: "Today",
    thisYear: "This Year",
}
  , hA = {
    title: "Global Search",
    file: "File",
    topic: "Topic",
    fromCaptureCourse: "Course",
    time: "Time",
    location: "Location",
    searchSource: {
        platformResources: "Platform",
        libraryCollections: "Library",
        chineseResources: "Discovery",
    },
}
  , mA = "other"
  , gA = "Following List"
  , vA = "The resource has been deleted"
  , wA = "The video cannot be played"
  , yA = {
    learningStats: "{count} people are learning",
    learning: "personnel list",
    learningResourceStats: "{count} people are learning this resource",
}
  , xA = "Do not have permission to view"
  , OA = "Source"
  , AA = {
    tagStats: {
        resourceCount: "Resource Count",
        tagName: "Tag Name",
        rank: "Rank",
        title: "Resource Tag Statistics",
    },
    fileStats: {
        title: "Resource Usage Statistics",
        totalViews: "Total Views",
        totalLikes: "Total Likes",
        totalCollections: "Total Favorites",
        totalDownloads: "Total Downloads",
        totalSaves: "Total Copies",
        rank: {
            viewCount: "Views Leaderboard",
            likeCount: "Likes Leaderboard",
            collectionCount: "Favorites Leaderboard",
            downloadCount: "Downloads Leaderboard",
            saveCount: "Copies Leaderboard",
        },
    },
    classificationStats: {
        title: "Resource Classification Statistics"
    },
    overview: {
        title: "Overview"
    },
    statsByCategory: "Statistics By Type",
    statsBySource: "Statistics By Source",
}
  , bA = {
    upcoming: "{type} will start in",
    upcomingDetail: "{hours} hours {mins} minutes",
    recording: "Recording",
    recordingDetail: "Recording, please wait",
    finished: "Ended",
    finishedDetail: "In Processing: {type} can not be viewed before processing completes, please wait",
    deleted: "Deleted",
    deletedDetail: "{type} has been deleted, please view other resources",
    loadingError: "Failed to load",
    loadingErrorDetail: "{type} failed to load, please try again",
    reload: "Reload",
    bookNumTip: "{num} have booked",
    failed: "Failure",
}
  , DA = "Resource Not Found - the resource you requested does not exist."
  , MA = {
    title: "App Center",
    loadFailTips: "Failed to load wg-apps.js"
}
  , PA = {
    view: "Book",
    cancel: "Cancel"
}
  , zA = {
    title: "Client Management",
    orgSearchPlaceholder: "Client ID/ Code/ Name",
    orgId: "Client ID",
    orgCode: "Client Code",
    orgName: "Client Name",
    basicInfo: "Basic Info",
    planInfo: "Plan Info",
    toggles: {
        title: "Toggle",
        name: "Name",
        description: "Description",
        default: "Default",
        value: "Toggle",
        true: "Open",
        false: "Close",
        searchPlaceholder: "Name / Description",
    },
    settings: "Setting",
    basicData: "Basic Data Management",
}
  , HA = {
    time: "Time",
    classroom: "Classroom",
    device: "Device",
    chooseClassroom: "Choose Classroom",
    chooseDevice: "Choose Device",
    classroomName: "Classroom Name",
    deviceName: "Device Name",
    deviceLabel: "Channel Type",
    errorType: "Exception Type",
    createAt: "Creation Time",
    errorTypes: {
        NETWORK_ERROR: "Network Error",
        API_ERROR: "API Error",
        UNKNOWN: "Unknown Error",
        NO_RECORDING_ERROR: "Recording Error",
    },
    channels: {
        STUDENTS: "Student Channel",
        ENCODER: "Encoder Channel",
        INSTRUCTOR: "Instructor Channel",
    },
    detail: "Error Detail",
}
  , jA = {
    message: "Error Message",
    type: "Exception Type",
    device: {
        message: "Device Info",
        status: "Device Status",
        isBestAudio: "Main Sound Setting",
        recorderDevice: "Recorder Device",
        deviceChannel: "Channel Number",
        noMsg: "Have No Message",
    },
}
  , NA = "Enabled"
  , EA = "Disabled"
  , BA = "Favorites"
  , TA = "Favorited"
  , CA = "Refresh"
  , GA = "View Public Courses"
  , YA = "View Public Schedules"
  , FA = {
    NO_VIEW_PERMISSION: "No browsing permission",
    COURSE_NOT_ENROLLED: "You are not enrolled in the current course. Please contact the instructor",
    COURSE_IS_UNPUBLISHED: "Current course not published. Please contact the instructor",
    SCHEDULE_NOT_FOUND: "Schedule not found, the schedule you requested does not exist",
    COURSE_NOT_FOUND: "Course not found, the course you requested does not exist",
    SCHEDULE_IS_PRIVATE: "Current schedule not public. Check out other public schedules",
    COURSE_IS_PRIVATE: "Current course not public. Check out other public courses",
    NOT_FOUND: "Not Found",
}
  , IA = "Normal"
  , LA = "Abnormal"
  , RA = "view more"
  , XA = "Filter"
  , ZA = "items"
  , kA = "Course"
  , UA = {
    title: "InClass AI Analysis",
    attendanceRate: "Attendance",
    headupRate: "Head-raising rate",
    frontRowRate: "Front-row seating rate",
    attendanceCount: "Attendance count",
    headupCount: "Number of head-raising instances",
    frontCount: "Number of front-row seats",
    noData: "No data",
}
  , SA = {
    common: Oy,
    scheduleLive: Ay,
    scheduleCapture: by,
    home: Dy,
    hello: My,
    point: Py,
    noData: zy,
    resource: Hy,
    "live-capture": "Live&Capture",
    help: jy,
    login: Ny,
    more: Ey,
    clear: By,
    reset: Ty,
    search: Cy,
    "video-duration": "Video duration",
    publishTime: Gy,
    publishedAt: Yy,
    "file-size": "File size",
    ongoing: Fy,
    "search-placeholder": "Please enter keywords",
    "n-resources": "<span>{n}</span> resource | <span>{n}</span> resources",
    "recorded-courses-count": "Total recorded courses",
    "video-resources-count": "Total video resources",
    "resource-view-count": "Total resource views",
    "file-resources-count": "Total file resources",
    "resource-statistics-overview": "Current resource statistics",
    "resource-statistics": "Resource Statistics",
    email: Iy,
    address: Ly,
    support: Ry,
    "save-success": "Saved successfully",
    homeConfig: Xy,
    moduleName: Zy,
    whetherToShow: ky,
    homeTitle: Uy,
    homeTop: Sy,
    statistics: Wy,
    footerSetting: Qy,
    copyright: Jy,
    "beian-info": "Filing information",
    orgLogo: Vy,
    yes: qy,
    no: Ky,
    save: _y,
    cancel: $y,
    next: ex,
    previous: tx,
    upload: rx,
    logoUploadDesc: nx,
    selectAll: ox,
    resourceClassification: ax,
    CLASSROOM_LIVE: sx,
    CLASSROOM_CAPTURE: ix,
    classificationFilter: cx,
    module: lx,
    addModule: ux,
    moduleSetting: fx,
    validations: dx,
    moduleType: px,
    all: hx,
    live: mx,
    capture: gx,
    latestNDay: vx,
    currentSemester: wx,
    currentAcademicYear: yx,
    week: xx,
    scheduleStatus: Ox,
    liveFilter: Ax,
    liveOperate: bx,
    myCapture: Dx,
    userCourseFilter: Mx,
    courseStatus: Px,
    coursePublishStatus: zx,
    courseFilter: Hx,
    courseTips: jx,
    fileSizeLimitMsg: Nx,
    courseDetail: Ex,
    back: Bx,
    file: Tx,
    semester: Cx,
    addFile: Gx,
    deleteFile: Yx,
    course: Fx,
    confirm: Ix,
    courseKeywordSearchTip: Lx,
    endDate: Rx,
    deleteSuccess: Xx,
    fileKeywordSearchTip: Zx,
    fileResource: kx,
    resourceCountCurrently: Ux,
    selectImage: Sx,
    startDate: Wx,
    header: Qx,
    topic: Jx,
    filetype: Vx,
    operate: qx,
    delete: "Delete",
    topicKeywordSearchTip: Kx,
    basicInfo: _x,
    emptyImagePlaceholder: $x,
    pleaseInput: eO,
    selectedItemSaved: tO,
    resourceSearch: rO,
    route: nO,
    allFiles: oO,
    fileFilter: aO,
    fileCategory: sO,
    goBack: iO,
    scope: cO,
    openScope: lO,
    allTopics: uO,
    noResourceTip: fO,
    noDataTip: dO,
    uploadFailed: pO,
    audienceType: hO,
    deleteCanceled: mO,
    deleteFail: gO,
    deleteTip: vO,
    tag: wO,
    managementMenus: yO,
    edit: xO,
    classification: OO,
    serverError: AO,
    role: bO,
    resourceReference: DO,
    fileUpload: MO,
    resourceDetail: PO,
    uploadResource: zO,
    notSpecifiedClassification: HO,
    allRoles: jO,
    notSpecifiedDepartment: NO,
    offCampus: EO,
    department: BO,
    school: TO,
    remind: CO,
    report: GO,
    placeholder: YO,
    pieces: FO,
    fileDetail: IO,
    operationSuccess: LO,
    operateFailed: RO,
    submit: XO,
    noMoreContent: ZO,
    noComment: kO,
    me: UO,
    failed: SO,
    confirmLeave: WO,
    link: QO,
    uploadStatus: JO,
    pdfViewer: VO,
    imgViewer: qO,
    license: KO,
    openInBrowser: _O,
    subject: $O,
    resourcePreviewNotSupported: eA,
    downloadFile: tA,
    notSupportPreview: rA,
    open: nA,
    close: oA,
    captureFilter: aA,
    captureManagement: sA,
    setting: iA,
    headerPreview: cA,
    displayItem: lA,
    knowledgeGraph: uA,
    relatedResource: fA,
    liveAndCaptureStatistic: dA,
    dateRange: pA,
    fullTextSearch: hA,
    other: mA,
    myFollow: gA,
    resourceDelete: vA,
    videoPlayerLoadErr: wA,
    peerLearning: yA,
    resourcePermissionDeny: xA,
    source: OA,
    fileResourceStatistic: AA,
    scheduleWarningDetail: bA,
    notFound: DA,
    appCenter: MA,
    book: PA,
    orgManagement: zA,
    errorlog: HA,
    errorlogDetail: jA,
    enabled: NA,
    disabled: EA,
    favorite: BA,
    favorited: TA,
    refresh: CA,
    viewPublicCourse: GA,
    viewPublicSchedule: YA,
    subErrorMsg: FA,
    normal: IA,
    abnormal: LA,
    viewMore: RA,
    filter: XA,
    items: ZA,
    captureCourse: kA,
    scheduleAiAnalysis: UA,
}
  , WA = {
    download: "下载",
    view: "查看",
    month: {
        10: "10月",
        11: "11月",
        12: "12月",
        "01": "1月",
        "02": "2月",
        "03": "3月",
        "04": "4月",
        "05": "5月",
        "06": "6月",
        "07": "7月",
        "08": "8月",
        "09": "9月",
    },
    allRoles: "全部角色",
    inputAtLeastTwoChars: "请至少输入两个字符",
}
  , QA = "首页"
  , JA = "你好"
  , VA = "暂无数据"
  , qA = "直播"
  , KA = "录播"
  , _A = "分"
  , $A = "资源"
  , eb = "帮助"
  , tb = "登录"
  , rb = "清空"
  , nb = "更多"
  , ob = "重置"
  , ab = "搜索"
  , sb = "发布时间"
  , ib = "发布于"
  , cb = "进行中"
  , lb = "上传时间"
  , ub = "邮箱"
  , fb = "地址"
  , db = "技术支持"
  , pb = "版权信息"
  , hb = "保存"
  , mb = "取消"
  , gb = "模块名称"
  , vb = "首页配置"
  , wb = "是否展示"
  , yb = "门户标题"
  , xb = "门户顶部"
  , Ob = "统计"
  , Ab = "底部信息"
  , bb = "机构logo"
  , Db = "是"
  , Mb = "否"
  , Pb = "下一步"
  , zb = "上一步"
  , Hb = "上传"
  , jb = "建议上传 透明底色的PNG图片, 大小不要超过 3M"
  , Nb = "模块设置"
  , Eb = "模块类型"
  , Bb = "全选"
  , Tb = "资源分类"
  , Cb = "教室直播"
  , Gb = "教室录播"
  , Yb = {
    firstLevel: "一级分类",
    secondLevel: "二级分类",
    thirdLevel: "三级分类",
}
  , Fb = {
    userMenus: {
        courseCenter: "课程中心",
        learningCenter: "学习中心",
        myCourses: "我的课程",
        myProjects: "我的项目",
        myResource: "我的资源",
        myGroups: "我的小组",
        userProfile: "个人中心",
        mySettings: "个人设置",
        changeLanguage: "语言切换",
        logout: "登出",
    },
    controlPanel: "管理后台",
}
  , Ib = {
    course: {
        type: "课程",
        fields: {
            name: "课程名称",
            status: "课程状态",
            teacher: "授课教师",
            time: "课程时间",
            location: "课程地点",
            department: "所属学院",
            code: "课程代码",
            teachingClassName: "授课班级",
            academicYearSemester: "学年学期",
        },
        desc: "“课程”类型内容，来源于当前所有公开课程",
        dataRule: {
            timeDesc: "按开课程时间倒序"
        },
    },
    video: {
        type: "视频",
        fields: {
            name: "视频名称",
            publishedAt: "发布时间",
            duration: "视频时长",
            publisher: "分享人",
            viewCount: "浏览量",
        },
        desc: "“视频”类型内容，来源于当前公共资源库",
    },
    file: {
        type: "文件",
        fields: {
            name: "文件名称",
            category: "类型",
            publishedAt: "发布时间",
            size: "资源大小",
            publisher: "发布人",
            viewCount: "浏览量",
        },
        desc: "“文件”类型内容，来源于当前公共资源库",
    },
    user: {
        type: "人员",
        fields: {
            name: "人员姓名",
            avatar: "人员头像",
            department: "所属学院"
        },
        desc: "“人员”类型内容，来源于当前机构教师角色",
    },
    topic: {
        type: "专题",
        fields: {
            name: "专题名称",
            description: "专题简介",
            publisher: "发布人",
            publishedAt: "发布时间",
            resourceCount: "资源数",
            classification: "分类",
            topicClassification: "专题分类",
            tag: "标签",
            topicTag: "专题标签",
        },
        desc: "“专题”类型内容，来源于专题管理中的新增内容",
    },
    count: "当前共{n}个模块",
    max: "最多可增加{n}个模块",
    common: {
        dataRule: {
            publishedAtDesc: "按发布时间倒序",
            viewCountDesc: "按浏览量倒序",
            fansCountDesc: "按粉丝数倒序 ",
            publishResourceCountDesc: "按发布资源数倒序",
            resourceCountDesc: "按所含资源数倒序",
            courseTimeDesc: "按已开课程时间倒序",
        },
    },
    name: "模块",
    showFields: "展示字段",
    fieldsSelectHint: "勾选表示展示",
    custom: "自定义方案",
    dataRule: "显示规则",
    dataRuleHint: "通过设置“显示规则”，选择首页实际显示范围",
    linesRule: "显示行数",
    linesRuleHint: "通过设置“显示行数”，控制首页实际显示的行数，最多显示 8 行",
}
  , Lb = "增加模块"
  , Rb = {
    required: "该字段是必填字段",
    maxLength: "最多输入{max}个字符",
    nameRepetitive: "专题名称已存在",
}
  , Xb = {
    admin: "专题管理",
    new: "新增专题",
    edit: "编辑专题",
    editTopic: "编辑",
    deleteConfirm: "确认删除 {topicName} ？该专题已发布到资源平台，删除后将会影响展示",
    coverTip: "建议比例: 16:9 / 大小不超过1M <br> 支持格式: png、jpg、jpeg、webp",
    cover: "专题图片",
    file: "文件",
    course: "录播课",
    indexTip: '下方为当前机构所有专题，您可在“<a style="color: var(--rms-primary-color)" href="/admin/home?tab=module" target="_blank">首页配置-模块设置</a>”中设置门户首页专题显示规则',
    resource: "专题资源",
    publisherTip: "请输入发布人/发布单位",
    index: "专题列表",
    detail: "专题详情",
    department: "所属学院",
    sortFilter: {
        createdAt: "最新专题",
        resourceCount: "最多资源"
    },
    deleteTitle: "删除专题",
    selectResourceStats: "已选 {0} 个文件, {1} 个录播课",
    selectFileStats: "已选 {0} 个文件",
    selectCaptureStats: "已选 {0} 个录播课",
}
  , Zb = "全部"
  , kb = "公开直播"
  , Ub = "公开录播课"
  , Sb = "最近{num}天"
  , Wb = "本学期"
  , Qb = "本学年"
  , Jb = "我的录播课"
  , Vb = {
    searchTip: "课程名称 / 课程代码"
}
  , qb = {
    week0: "周日",
    week1: "周一",
    week2: "周二",
    week3: "周三",
    week4: "周四",
    week5: "周五",
    week6: "周六",
}
  , Kb = {
    living: "直播中",
    upcoming: "未开始",
    finished: "已结束",
    recording: "录制中",
    inProgress: "进行中",
}
  , _b = {
    searchTip: "活动名称 / 课程 / 地点 / 教师",
    expand: "展开筛选",
    collapse: "收起筛选",
    semester: "所属学期",
    startTime: "活动日期",
    department: "所属学院",
    campus: "所在校区",
    building: "所在楼宇",
    classroom: "所在教室",
    reset: "重置",
    emptyTipPrefix: "当前还没有“",
    emptyTipText: "公开直播",
    emptyTipSuffix: "”",
    teachingClassName: "授课班级",
}
  , $b = {
    watchLive: "进入直播",
    watchReplay: "下载录播课",
    // modified
    upcoming: "即将开始",
    transcoding: "资源转码中",
    waitForFinish: "完成后可观看",
}
  , eD = {
    all: "全部",
    inprogress: "进行中",
    upcoming: "即将开课",
    end: "已结束",
}
  , tD = {
    all: "全部",
    published: "已发布",
    unpublished: "未发布"
}
  , rD = {
    searchTip: "课程名称 / 课程代码 / 教师",
    status: "课程状态"
}
  , nD = {
    noCoursePrefix: "当前还没有",
    noCourseSuffix: ""
}
  , oD = "文件大小不能超过{n}M"
  , aD = "返回"
  , sD = {
    content: "课程目录",
    instructor: "授课老师",
    nthWeek: "第{n}周",
    nActivity: "共{n}节",
    startDate: "开课时间",
    slotNo: "第{n}节",
    location: "开课地点",
    unavailable: "课程已失效",
    captureContent: "课程内容",
    noContentSuffix: "",
}
  , iD = "确认"
  , cD = "删除成功"
  , lD = "课程名称/课程代码/授课教师"
  , uD = "资源名称/发布人"
  , fD = "开始日期"
  , dD = "结束日期"
  , pD = "修改图片"
  , hD = "类型"
  , mD = {
    type: {
        subject_lib: "题库",
        subject_library: "题库",
        course_package: "课程包",
        lesson_resource: "录播教材",
        video: "视频",
        document: "文档",
        audio: "音频",
        image: "图片",
        link: "链接",
        all: "全部",
        other: "其他",
        file: "其他",
        swf: "Flash",
        folder: "文件夹",
        scorm: "SCORM",
        evercam: "EverCam 教材",
        wmpkg: "wmpkg",
        slide: "slide",
        zip: "压缩文档",
    },
    emptyTip: "暂无文件",
    stats: {
        like: "赞",
        view: "浏览",
        download: "下载",
        favorite: "收藏",
        copy: "复制",
    },
    sortFilter: {
        createdAt: "最新文件",
        likeCount: "最多点赞",
        collectionCount: "最多收藏",
        viewCount: "最多浏览",
        downloadCount: "最多下载",
        saveCount: "最多复制",
    },
}
  , gD = "学期"
  , vD = "文件资源"
  , wD = "当前{n}个资源"
  , yD = "添加文件"
  , xD = "删除文件"
  , OD = {
    add: "添加录播课",
    name: "课程资源",
    delete: "删除录播课",
    emptyTip: "暂无录播课",
    batchSetting: "批量设置",
    department: "院系",
    publishStatus: "发布状态",
    classification: "资源分类",
    subject: "学科门类",
    recordStatus: "录制状态",
    courseDepartment: "开课院系",
    startTime: "开课时间",
    host: "主讲人",
    courseName: "课程名称",
    selectedCountTip: "已选择 {0} 条",
    defaultSettingTip: "当前设置为默认值，请按需调整",
    recordSwitch: "录制开关",
    liveSwitch: "同时进行直播",
    publishSwitch: "发布录制内容至课程",
    daemonRecord: "仅后台录制",
    downloadPermission: "下载权限",
    allowDownload: "允许下载",
    openScopeSetting: "门户公开",
    courseCode: "课程代码",
    location: "地点",
    campus: "校区",
    building: "楼宇",
    classroom: "教室",
    saveSettingTips: "将修改{count}门课程的设置",
}
  , AD = "操作"
  , bD = "专题名称 / 发布人 / 标签"
  , DD = "基本信息"
  , MD = "当前使用系统默认图片<br> 可点击修改"
  , PD = "请输入{0}"
  , zD = "已选择内容添加成功"
  , HD = {
    category: {
        "topic-course": "录播课",
        "topic-file": "文件",
        course: "录播课",
        file: "文件",
        topic: "专题",
    },
    tips: {
        suggestChangeKeywordOrCondation: "建议：换个关键词 或 修改筛选条件",
        SuggestModifyConditions: "建议：修改筛选条件",
        noResourcePrefix: "抱歉，没有找到",
        noResourceSuffix: "相关资源",
        noResource: "抱歉，没有找到相关资源",
        allCourses: "全部课程",
    },
}
  , jD = {
    homepage: "首页",
    resourceCourse: "录播课列表",
    resourceFile: "文件列表",
    resource: "资源",
    searchResult: "搜索结果",
}
  , ND = "全部文件"
  , ED = {
    sharedAt: "发布时间",
    department: "所属学院",
    placeHolder: "文件名称 / 发布人 / 标签",
}
  , BD = "文件类别"
  , TD = "返回上一级"
  , CD = {
    PRIVATE: "不公开",
    PUBLIC: "校外公开",
    SCHOOL: "校内公开"
}
  , GD = "公开范围"
  , YD = "全部专题"
  , FD = "暂无相关资源"
  , ID = "暂无数据"
  , LD = "上传失败"
  , RD = {
    name: "学历层次",
    xjtuName: "培养对象",
    undergraduate: "本科",
    postgraduate: "研究生",
}
  , XD = {
    createTag: "新增标签",
    updateTag: "编辑标签",
    createTagPlaceholder: "请输入标签名称",
    createTagSuccess: "新增成功",
    updateTagSuccess: "修改成功",
    deleteTag: "删除标签",
    deleteTagTip: "是否确定删除 {tagName}",
    deleteTagRelatedTip: "标签已关联资源，是否确定删除 {tagName}",
    tagName: "标签名称",
    resourceCount: "资源数",
    operation: "操作",
    pleaseInputTag: "请输入标签",
    selfCreated: "自建标签",
    kfsCreated: "知识森林标签",
    sourceSubjectOrProject: "来源学科/项目",
    sourceCourse: "来源课程",
    failedToGetSourceInfo: "未能获取知识森林标签的来源信息",
}
  , ZD = {
    resourceManagement: "资源管理",
    captureResource: "录播课设置",
    fileResource: "文件资源",
    fileAudit: "文件审核",
    topicResource: "专题资源",
    basicDataManagement: "基础数据管理",
    portalManagement: "门户配置",
    resourceTag: "资源标签",
    resourceClassification: "资源分类",
    liveCaptureManagement: "直录播管理",
    classroomManagement: "教室管理",
    scheduleManagement: "排程管理",
    streamForwardManagement: "转推管理",
    captureManagement: "录制资源管理",
    orgManagement: "机构管理",
    statistics: "数据统计分析",
    fileResourceStatistics: "文件资源统计",
    liveAndCaptureStatistics: "直录播统计",
    capacityManagement: "容量管理",
    recycleManagement: "回收站",
    subject: "学科门类",
    operateLog: "日志记录",
    systemOperateLog: "系统任务日志",
    userOperateLog: "用户操作日志",
}
  , kD = "删除已取消"
  , UD = "删除失败"
  , SD = "是否确定删除 {name} ？"
  , WD = "编辑"
  , QD = {
    addFirstLevel: "新增一级分类",
    addSecondLevel: "新增二级分类",
    addThirdLevel: "新增三级分类",
    addClassification: "新增资源分类",
    resourceCount: "关联资源数",
    name: "分类名称",
    create: "新增分类",
    namePlaceholder: "请输入内容",
    createSuccess: "创建成功",
    duplicateNameInSameLevel: "分类名称在同一级别已经被使用",
    deleteClassificationTitle: "删除分类",
    deleteClassificationTip: '是否确定删除"{name}"',
    deleteClassificationRelatedTip: "是否确认删除 {name} , 删除后此分类下的{count}个资源将被归类为无指定分类, 是否确认删除?",
    update: "编辑分类",
    updateSuccess: "修改成功",
}
  , JD = "服务异常"
  , VD = {
    Student: "学生",
    Instructor: "教师",
    EducationalAdmin: "教务人员",
    Admin: "超级管理员",
}
  , qD = {
    editResource: "编辑资源",
    edit: "编辑",
    selects: {
        tagSearchPlaceholder: "搜索或创建标签",
        clfSearchPlaceholder: "搜索分类",
        createPlaceholder: "创建标签",
        notFoundPlaceholder: "未找到标签，点击创建",
    },
    form: {
        name: "资源名称",
        category: "资源类型",
        openScope: "分享至",
        department: "院系",
        role: "角色",
        ccLicenseName: "版权许可",
        download: "资源下载",
        allowSave: "是否允许复制",
        allowDownload: "是否允许下载",
        classification: "资源分类",
        tag: "资源标签",
        summary: "简介",
        unPublishedReason: "下架原因",
        selectedItemsTip: "已选{0}项",
        resource: "资源",
        subject: "学科门类",
    },
    published: {
        searchPlaceholder: "资源名称/分享人/标签",
        publishedResource: "已发布资源",
        name: "资源名称",
        category: "类型",
        classification: "分类",
        tag: "标签",
        openScope: "范围",
        createdBy: "分享人",
        createdAt: "分享时间",
        takeDown: "下架",
    },
    unpublished: {
        unpublishedResource: "已下架资源",
        reason: "下架原因",
        publish: "上架",
        searchPlaceholder: "资源名称/分享人/下架原因",
        republishResource: "上架资源",
        confirmMessage: "上架后，将清空该资源的举报信息，并重新发布至资源平台",
    },
    resourcePublish: {
        resourcePublish: "发布资源",
        publishSetting: "资源发布设置",
        footerTip: "请尊重知识产权法，确保上传内容不侵犯他人知识产权",
    },
    batchTakeDown: {
        title: "批量下架",
        selectCount: "已选{count}项",
        successTip: "下架成功",
        failTip: "下架失败",
    },
    batchRePublish: {
        title: "批量上架",
        selectCount: "已选{count}项",
        successTip: "上架成功",
        failTip: "上架失败",
    },
    batchEdit: {
        title: "批量编辑",
        dialogTitle: "批量编辑资源",
        selectCount: "已选{count}项",
        editField: "编辑字段",
        fields: {
            shareTo: "分享至",
            ccLicenseName: "版本许可",
            download: "资源下载",
            classification: "资源分类",
            tag: "资源标签",
        },
    },
    batchAudit: {
        title: "批量审核",
        selectCountTip: "已选 {count} 项资源, 审核通过后资源将会显示在资源平台中",
        editSelectedResources: "编辑已选资源",
    },
    audit: {
        audit: "审核",
        resourceAudit: "资源审核",
        auditTip: "审核通过后资源将会显示在资源平台中",
        auditing: "审核中",
        auditAllow: "审核通过",
        auditAllowAndSave: "审核通过，并保存",
        auditRefusal: "审核拒绝",
        refusalReason: "拒绝原因",
        auditingResource: "待审核资源",
    },
    operation: "操作",
    viewDetail: "查看详情",
    unPublishResource: "下架资源",
    hideBaseInfo: "隐藏基本信息",
    displayBaseInfo: "显示基本信息",
    sharer: "分享人",
    sharedAt: "分享时间",
    classification: "分类",
    scope: "范围",
    tag: "标签",
    off_campus: "校外",
    department: "院系资源库",
    org: "校本资源库",
    group: "小组资源库",
    personal: "个人",
    delete: "移除",
    deleteResource: "移除资源",
    deleteResourceTip: "移除后，当前资源及其子层级内容将被删除",
}
  , KD = {
    uplaodSizeTip: "支持多个文件拖拽或点击上传，单个文件大小不能超过 ",
    uplaodTypeTip: "当前系统支持的文件格式 ",
    uploadSecretTip: "上传文件为加密文件时，将无法进行预览",
    videoFormat: "视频格式",
    audioFormat: "音频格式",
    imageFormat: "图片格式",
    docFormat: "文档格式",
    compressFormat: "压缩文档格式",
    size: "大小",
    uplaodFailed: "上传失败",
    supportFileType: "支持文件格式",
    reTranscode: "重新转码",
}
  , _D = {
    sharer: "分享人",
    like: "赞",
    doLike: "点赞",
    view: "浏览",
    favorites: "收藏",
    cancelFavirites: "取消收藏",
    cancelShare: "取消分享",
    shareScope: "分享范围",
    shareTime: "分享时间",
    download: "下载",
    copy: "复制",
    report: "举报",
    summary: "资源简介",
    "comment&score": "评论评分",
    score: "评分",
    noSummary: "暂无简介",
    resourceCount: "资源数",
    followers: "粉丝数",
    follow: "关注",
    follows: "关注数",
    unfollow: "取消关注",
    relatedTags: "相关标签",
    noRelatedTags: "暂无标签",
    relatedResources: "相关资源推荐",
    noRecommentdations: "暂无推荐",
    resourceScore: "资源评分",
    commentPlaceholder: "请输入评论",
    reply: "回复",
    unavailable: "文件已失效",
    viewAllReplies: "查看全部 {0} 条回复",
    collapseReply: "收起回复",
    delCommentIncludeReplyTip: "该留言下已有回复，确认删除此留言与相关回复？删除后将不可恢复",
    delCommmentNotIncludeReplyTip: "确定删除此留言？删除后将不可恢复",
    delStarTip: "确定删除此评分? 删除后将不可恢复",
    noScore: "暂无评分",
    copyTips: "确定将该资源复制到个人资源库吗？",
    cancelFavTip: "确定取消收藏当前资源？",
    cancelShareTip: "确定取消分享当前资源？",
    viewing: "在看",
    followersAreViewing: "关注的人在看",
}
  , $D = "发布资源"
  , eM = "无指定分类"
  , tM = "全部角色"
  , rM = "无指定院系"
  , nM = "校外"
  , oM = "院系资源库"
  , aM = "校本资源库"
  , sM = "提示"
  , iM = {
    reportInfo: "举报信息",
    reportCount: "举报数",
    reportReason: {
        copyright: "盗版或侵权，未获得权利人的合法授权、侵犯个人隐私或泄露单位商业机密",
        ad_or_spam: "广告或垃圾信息",
        vulgar_info: "色情、淫秽、低俗信息",
        reactionary_info: "反政府、反人类、反社会等反动信息",
        crime_info: "散布赌博、暴力、凶杀、恐怖或者教唆犯罪等信息",
        defamation: "侮辱、诽谤等人身攻击信息",
        rumor: "散布谣言、扰乱社会秩序、破坏社会稳定等信息",
    },
    reportStatsTip: "此文件有{count}条举报信息",
    ignore: "忽略",
    emptyWarning: "确定清空该资源的举报信息？",
    reportSuccess: "举报成功",
    report: "举报",
    confirm: "确定举报",
}
  , cM = {
    notFound: "未找到",
    create: "创建"
}
  , lM = "个"
  , uM = "文件详情"
  , fM = "操作成功"
  , dM = "操作失败"
  , pM = "提交"
  , hM = "没有更多内容了"
  , mM = "暂无评论"
  , gM = "我"
  , vM = "失败"
  , wM = "修改内容尚未保存，确定离开？"
  , yM = "链接"
  , xM = {
    uploading: "正在传输中",
    processing: "正在转码中",
    failed: "转码失败",
    cliping: "剪辑中",
    clip_failed: "剪辑失败",
    file_locked: "抱歉，该文件已进行加密故无法预览，请您下载后查看",
}
  , OM = {
    page: "页",
    prevPage: "上一页",
    nextPage: "下一页",
    zoomIn: "放大",
    zoomOut: "缩小",
    exitFullScreen: "退出全屏",
    enterFullScreen: "进入全屏",
}
  , AM = {
    zoomIn: "放大",
    zoomOut: "缩小",
    rotate: "逆时针旋转",
    reset: "复原",
    exitFullScreen: "退出全屏",
    enterFullScreen: "进入全屏",
}
  , bM = {
    private: "私有版权保护",
    public_domain: "公共领域",
    cc_attribute: "CC署名",
    cc_attribute_share_alike: "CC署名相同方式共享",
    cc_attribute_no_derivatives: "CC署名-禁止演绎",
    cc_attribute_non_commercial: "CC署名-非商业性使用",
    cc_attribute_non_commercial_share_alike: "CC署名-非商业性使用-相同方式共享",
    cc_attribute_non_commercial_no_derivatives: "CC署名-非商业性使用-禁止演绎",
}
  , DM = "在浏览器中打开"
  , MM = {
    single_selection: "单选题",
    multiple_selection: "多选题",
    true_or_false: "判断题",
    matching: "匹配题",
    cloze: "完形填空题",
    fill_in_blank: "填空题",
    short_answer: "简答题",
    analysis: "综合题",
    stats: "共{0}道题",
    unit: "道",
    difficultyLevel: "难易度",
    easy: "易",
    medium: "中",
    hard: "难",
}
  , PM = "暂不支持该文件的预览"
  , zM = "下载文件"
  , HM = "暂不支持该文件预览"
  , jM = "开启"
  , NM = "关闭"
  , EM = {
    reset: "重置",
    date: "日期",
    campus: "校区",
    building: "楼宇",
    classroom: "教室",
    type: "资源类型",
    searchTip: "资源名称 / 课程 / 地点 / 主讲人",
}
  , BM = {
    settings: "系统设置",
    settingsTitle: "系统设置",
    batchDelete: "批量删除",
    record: "录制",
    clip: "剪辑",
    composite: "合成",
    deleteTitle: "删除录播资源",
    deleteConfirm: "是否确定删除选中的录播资源?",
    batchDeleteTitle: "批量删除录播资源",
    batchDeleteConfirm: "已选中{ count }条，是否确定删除所选资源?",
    deleteAssociatedSchedule: "同时删除直录播排程",
    downloadPermission: "下载权限",
    downloadAllowAll: "允许下载",
    downloadForbidden: "禁止下载",
    allowDownloadTip: "开放录播资源的下载权限",
    forbiddenDownloadTip: "关闭录播资源的下载权限，仅管理员和主讲人可下载",
    saveSucceeded: "保存成功",
    saveFailed: "保存失败",
    view: "查看",
    edit: "剪辑",
    delete: "删除",
    name: "资源名称",
    courseName: "课程名称",
    tag: "标签",
    host: "主讲人",
    date: "日期",
    location: "地点",
    type: "资源类型",
    operate: "操作",
    semester: "学期",
    videoSize: "资源大小",
    captureDeleted: "资源已删除",
    operateResult: "执行结果",
    SUCCESS: "成功",
    FAIL: "失败",
    saveSuccessTip: "正在合成，结束后我们会及时通知您。您可在“我的资源”中查看进度。",
    savedWithoutTaskTip: "合成完毕，您可在“我的资源”中查看。",
    clipSuccessMessage: "正在剪辑，请去个人资源库进行查看",
    clipErrorMessage: "创建剪辑任务失败",
    deletionSettingOverview: "<span>预计删除共计 <strong>{semesterCount}个学期</strong> 相关录制资源，共计 <strong>{total} 条</strong>，彻底删除后将释放存储空间 <em>{videoSize}</em></span>",
    autoDeleteSetting: "自动删除设置",
    autoDelete: "删除设置",
    autoDeleteDisabled: "不启用",
    autoDeleteEnabled: "启用",
    autoDeleteBeforeNSemester: "删除范围",
    autoDeleteBeforeNSemesterTip: "自动删除",
    autoDeleteBeforeNSemesterAfterTip: "个学期前的录制资源",
    autoDeleteBeforeNSemesterQuestionTip: "按学期滚动删除录制资源",
    autoDeleteDeleteMethod: "删除方式",
    autoDeleteDeleteMethodMovingToTrash: "移入回收站，保存有效期后彻底删除",
    autoDeleteDeleteMethodDirectDelete: "不移入回收站，直接彻底删除",
    autoDeleteDeleteMethodMovingToTrashQuestionTip: "资源移入回收站，30天后将被自动彻底删除。回收站内资源仍会占用存储空间",
    autoDeleteDeleteMethodDirectDeleteQuestionTip: "不移入回收站，直接彻底删除资源，释放存储空间。一旦删除将无法恢复，请谨慎操作",
    confirmSaveAutoDeleteSettingTitle: "确认启用自动删除设置吗?",
    confirmSaveAutoDeleteSettingContent: "<span>启用后将<strong>{0}</strong>执行删除任务<br/>资源彻底删除后将无法恢复，请谨慎操作</span>",
    autoDeleteDetail: "查看删除范围",
}
  , TM = "设置"
  , CM = "顶部预览"
  , GM = "显示项"
  , YM = {
    emptyNode: "暂无知识点",
    title: "知识森林",
    facet: "分面",
    fragment: "碎片",
    facetNFragment: "分面&碎片",
    subjectList: "课程列表",
    projectList: "项目列表",
    searchPlaceholder: "学科名称/研究方向",
    link: "链接地址",
    isbn: "ISBN编号",
    webSource: "来源网站",
    bookSource: "来源图书",
    otherSource: "来源",
    noSource: "暂未标记来源",
    pageFormat: "第{0}页",
    noFragment: "暂无碎片",
    facetAndFragmentCount: "共{facetCount}个分面，{fragmentCount}个碎片",
    fragmentsOfFacet1: "分面:",
    fragmentsOfFacet2: "下的碎片",
    enterKnowledgeForest: "查看知识森林",
    relatedKnowledgeForestCourse: "相关知识森林课程",
    selectCourseEnter: "请选择要进入的课程",
    subject: "学科",
    noSpecifiedSubject: "无指定学科",
    noSpecifiedDepartment: "无指定学院",
    switchToCluster: "切换至知识森林",
    switchToGraph: "切换至知识图谱",
    project: "研究方向",
    viewModePlaceholder: "选择查看方式",
    viewByDept: "按学院查看",
    viewBySubject: "按学科查看",
    subjectSearchPlaceholder: "学科名称",
    departmentSearchPlaceholder: "学院名称",
    projectSearchPlaceholder: "研究方向",
}
  , FM = {
    prior: "前后置关系",
    relatedResource: "关联资源",
    course: "课程",
    time: "时间",
    file: "文件",
    topic: "专题",
    topicResourceCount: "{resourceCount}个资源",
}
  , IM = {
    overview: {
        title: "总览",
        captureCourseCount: "录播课总数",
        publicCaptureCourseCount: "公开录播课",
        scheduleCount: "排程总数",
        publicScheduleCount: "公开排程",
        captureCount: "录制资源总数",
        publicCaptureCount: "公开录制资源",
    },
    captureCourse: {
        statsTitle: "录播课统计",
        visitTrend: "录播课浏览分析",
        totalViews: "录播课总浏览次数",
        totalViewers: "录播课总浏览人数",
        viewCount: "浏览次数",
        viewerCount: "浏览人数",
        visitRanking: "录播课浏览排行榜",
        rank: "排名",
        captureCourseName: "录播课名称",
        instructors: "主讲人",
    },
    schedule: {
        AIAnalysisUsage: "视频分析统计",
        scheduleWithCaptionsCount: "生成字幕视频数",
        scheduleWithTopicsCount: "智能标注视频数",
        scheduleWithCaptions: "有字幕",
        scheduleWithTopics: "有智能标注",
        scheduleWithoutCaptions: "无字幕",
        scheduleWithoutTopics: "无智能标注",
        acrossAllSchedules: "占全部视频的",
        countStat: "视频数统计",
        todaySchedules: "今日排程",
        upcoming: "未开始",
        recording: "正在录制",
        livingAndRecording: "正在直录播",
        processing: "处理中",
        finished: "已完成",
        failed: "处理失败",
    },
    classroomDevice: {
        title: "教室设备统计",
        classroomTotalCount: "教室总数",
        using: "使用中",
        free: "空闲中",
        notEnabled: "未启用",
        deviceExceptionStat: "教室设备异常统计",
        classroomWithMalfunctionedDevice: "当前设备异常教室",
        networkError: "网络错误",
        apiError: "API错误",
        unknownError: "未知错误",
        noRecordingError: "录制错误",
        deviceErrLogsCount: "近30天设备异常记录",
    },
    classificationStats: {
        title: "直录播分类统计"
    },
}
  , LM = {
    all: "总览",
    day: "今日",
    month: "近30天",
    year: "近一年",
    today: "今日",
    thisYear: "今年",
}
  , RM = {
    title: "全局搜索",
    file: "文件",
    topic: "专题",
    fromCaptureCourse: "来源录播课",
    time: "时间",
    location: "地点",
    searchSource: {
        platformResources: "平台资源",
        libraryCollections: "馆藏书目",
        chineseResources: "中文发现",
    },
}
  , XM = "其他"
  , ZM = "我的关注"
  , kM = "该资源已被删除"
  , UM = "当前视频暂无法播放"
  , SM = {
    learningStats: "{count}人正在学习",
    learning: "正在学习",
    learningResourceStats: "{count}人正在学习该资源",
}
  , WM = "无权限查看此资源"
  , QM = "来源"
  , JM = {
    overview: {
        title: "总览"
    },
    tagStats: {
        title: "资源标签统计",
        rank: "排名",
        tagName: "标签名称",
        resourceCount: "关联资源数",
    },
    fileStats: {
        title: "资源使用统计",
        totalViews: "总浏览次数",
        totalLikes: "总点赞次数",
        totalCollections: "总收藏次数",
        totalDownloads: "总下载次数",
        totalSaves: "总复制次数",
        rank: {
            viewCount: "文件浏览次数排行榜",
            likeCount: "文件点赞次数排行榜",
            collectionCount: "文件收藏次数排行榜",
            downloadCount: "文件下载次数排行榜",
            saveCount: "文件复制次数排行榜",
        },
    },
    statsByCategory: "按类型统计",
    statsBySource: "按来源统计",
    classificationStats: {
        title: "资源分类统计"
    },
}
  , VM = {
    upcoming: "距离{type}开始",
    upcomingDetail: "还有{hours}小时{mins}分钟",
    recording: "录制中",
    recordingDetail: "录制中，请耐心等待",
    finished: "已结束",
    finishedDetail: "{type}正在处理中，完成可查看{type}，请耐心等待",
    deleted: "已删除",
    deletedDetail: "{type}已删除，去看看其他的吧",
    loadingError: "加载失败",
    loadingErrorDetail: "{type}加载失败，请重试",
    reload: "重新加载",
    bookNumTip: "{num}人已预约",
    failed: "处理失败",
}
  , qM = "找不到资源，您请求的资源不存在。"
  , KM = {
    title: "应用中心",
    loadFailTips: "未能正常加载 wg-apps.js"
}
  , _M = {
    view: "预约观看",
    cancel: "取消预约"
}
  , $M = {
    title: "机构管理",
    orgSearchPlaceholder: "客户ID/ 客户编码/ 客户名称",
    orgId: "客户ID",
    orgCode: "客户编码",
    orgName: "客户名称",
    basicInfo: "基本信息",
    planInfo: "套餐信息",
    toggles: {
        title: "Toggle管理",
        name: "名称",
        description: "描述",
        default: "默认值",
        value: "开关",
        true: "开启",
        false: "关闭",
        searchPlaceholder: "名称 / 描述",
    },
    settings: "配置管理",
    basicData: "基础数据管理",
}
  , eP = {
    time: "时间",
    classroom: "教室",
    device: "设备",
    chooseClassroom: "选择教室",
    chooseDevice: "选择设备",
    classroomName: "教室名称",
    deviceName: "设备名称",
    deviceLabel: "画面类型",
    errorType: "异常类型",
    createAt: "创建时间",
    errorTypes: {
        NETWORK_ERROR: "网络错误",
        API_ERROR: "API错误",
        UNKNOWN: "未知错误",
        NO_RECORDING_ERROR: "录制错误",
    },
    channels: {
        STUDENTS: "学生路",
        ENCODER: "电脑路",
        INSTRUCTOR: "老师路"
    },
    detail: "异常详情",
}
  , tP = {
    message: "错误信息",
    type: "错误类型",
    device: {
        message: "设备信息",
        status: "设备状态",
        isBestAudio: "是否为主声音",
        recorderDevice: "录播设备",
        deviceChannel: "视频下载通道号",
        noMsg: "暂无信息",
    },
}
  , rP = "启用"
  , nP = "禁用"
  , oP = "收藏"
  , aP = "已收藏"
  , sP = "刷新"
  , iP = "查看公开课程"
  , cP = "查看公开活动"
  , lP = {
    NO_VIEW_PERMISSION: "暂无浏览权限",
    COURSE_NOT_ENROLLED: "您未加入当前课程，请联系授课教师",
    COURSE_IS_UNPUBLISHED: "当前课程暂未发布，请联系授课教师",
    SCHEDULE_NOT_FOUND: "找不到活动，您请求的活动不存在",
    COURSE_NOT_FOUND: "找不到课程，您请求的课程不存在",
    SCHEDULE_IS_PRIVATE: "当前活动暂未公开，看看其他公开活动吧",
    COURSE_IS_PRIVATE: "当前课程暂未公开，看看其他公开课程吧",
    NOT_FOUND: "找不到资源，您请求的资源不存在",
}
  , uP = "正常"
  , fP = "异常"
  , dP = "查看更多"
  , pP = "筛选"
  , hP = "项"
  , mP = "录播课"
  , gP = {
    title: "课堂AI分析",
    attendanceRate: "出勤率",
    headupRate: "抬头率",
    frontRowRate: "前排就座率",
    attendanceCount: "出勤人数",
    headupCount: "抬头人数",
    frontCount: "前排就座人数",
    noData: "暂无数据",
}
  , vP = {
    common: WA,
    home: QA,
    hello: JA,
    noData: VA,
    scheduleLive: qA,
    scheduleCapture: KA,
    point: _A,
    resource: $A,
    "live-capture": "直录播",
    help: eb,
    login: tb,
    clear: rb,
    more: nb,
    reset: ob,
    search: ab,
    "video-duration": "视频时长",
    publishTime: sb,
    publishedAt: ib,
    "file-size": "文件大小",
    ongoing: cb,
    "search-placeholder": "请输入关键字",
    uploadTime: lb,
    "n-resources": "<span>{n}</span>个资源",
    "recorded-courses-count": "录播课程总数",
    "file-resources-count": "文件资源总数",
    "video-resources-count": "视频资源总数",
    "resource-view-count": "资源总浏览人次",
    "resource-statistics-overview": "截止目前平台累计资源概况",
    "resource-statistics": "资源统计",
    email: ub,
    address: fb,
    support: db,
    copyright: pb,
    "beian-info": "备案信息",
    "save-success": "保存成功",
    save: hb,
    cancel: mb,
    moduleName: gb,
    homeConfig: vb,
    whetherToShow: wb,
    homeTitle: yb,
    homeTop: xb,
    statistics: Ob,
    footerSetting: Ab,
    orgLogo: bb,
    yes: Db,
    no: Mb,
    next: Pb,
    previous: zb,
    upload: Hb,
    logoUploadDesc: jb,
    moduleSetting: Nb,
    moduleType: Eb,
    selectAll: Bb,
    resourceClassification: Tb,
    CLASSROOM_LIVE: Cb,
    CLASSROOM_CAPTURE: Gb,
    classificationFilter: Yb,
    header: Fb,
    module: Ib,
    addModule: Lb,
    validations: Rb,
    topic: Xb,
    all: Zb,
    live: kb,
    capture: Ub,
    latestNDay: Sb,
    currentSemester: Wb,
    currentAcademicYear: Qb,
    myCapture: Jb,
    userCourseFilter: Vb,
    week: qb,
    scheduleStatus: Kb,
    liveFilter: _b,
    liveOperate: $b,
    courseStatus: eD,
    coursePublishStatus: tD,
    courseFilter: rD,
    courseTips: nD,
    fileSizeLimitMsg: oD,
    back: aD,
    courseDetail: sD,
    confirm: iD,
    deleteSuccess: cD,
    courseKeywordSearchTip: lD,
    fileKeywordSearchTip: uD,
    startDate: fD,
    endDate: dD,
    selectImage: pD,
    filetype: hD,
    file: mD,
    semester: gD,
    fileResource: vD,
    resourceCountCurrently: wD,
    addFile: yD,
    deleteFile: xD,
    course: OD,
    operate: AD,
    delete: "删除",
    topicKeywordSearchTip: bD,
    basicInfo: DD,
    emptyImagePlaceholder: MD,
    pleaseInput: PD,
    selectedItemSaved: zD,
    resourceSearch: HD,
    route: jD,
    allFiles: ND,
    fileFilter: ED,
    fileCategory: BD,
    goBack: TD,
    scope: CD,
    openScope: GD,
    allTopics: YD,
    noResourceTip: FD,
    noDataTip: ID,
    uploadFailed: LD,
    audienceType: RD,
    tag: XD,
    managementMenus: ZD,
    deleteCanceled: kD,
    deleteFail: UD,
    deleteTip: SD,
    edit: WD,
    classification: QD,
    serverError: JD,
    role: VD,
    resourceReference: qD,
    fileUpload: KD,
    resourceDetail: _D,
    uploadResource: $D,
    notSpecifiedClassification: eM,
    allRoles: tM,
    notSpecifiedDepartment: rM,
    offCampus: nM,
    department: oM,
    school: aM,
    remind: sM,
    report: iM,
    placeholder: cM,
    pieces: lM,
    fileDetail: uM,
    operationSuccess: fM,
    operateFailed: dM,
    submit: pM,
    noMoreContent: hM,
    noComment: mM,
    me: gM,
    failed: vM,
    confirmLeave: wM,
    link: yM,
    uploadStatus: xM,
    pdfViewer: OM,
    imgViewer: AM,
    license: bM,
    openInBrowser: DM,
    subject: MM,
    resourcePreviewNotSupported: PM,
    downloadFile: zM,
    notSupportPreview: HM,
    open: jM,
    close: NM,
    captureFilter: EM,
    captureManagement: BM,
    setting: TM,
    headerPreview: CM,
    displayItem: GM,
    knowledgeGraph: YM,
    relatedResource: FM,
    liveAndCaptureStatistic: IM,
    dateRange: LM,
    fullTextSearch: RM,
    other: XM,
    myFollow: ZM,
    resourceDelete: kM,
    videoPlayerLoadErr: UM,
    "10k": "万",
    peerLearning: SM,
    resourcePermissionDeny: WM,
    source: QM,
    fileResourceStatistic: JM,
    scheduleWarningDetail: VM,
    notFound: qM,
    appCenter: KM,
    book: _M,
    orgManagement: $M,
    errorlog: eP,
    errorlogDetail: tP,
    enabled: rP,
    disabled: nP,
    favorite: oP,
    favorited: aP,
    refresh: sP,
    viewPublicCourse: iP,
    viewPublicSchedule: cP,
    subErrorMsg: lP,
    normal: uP,
    abnormal: fP,
    viewMore: dP,
    filter: pP,
    items: hP,
    captureCourse: mP,
    scheduleAiAnalysis: gP,
}
  , wP = {
    download: "下載",
    view: "查看",
    month: {
        10: "10月",
        11: "11月",
        12: "12月",
        "01": "1月",
        "02": "2月",
        "03": "3月",
        "04": "4月",
        "05": "5月",
        "06": "6月",
        "07": "7月",
        "08": "8月",
        "09": "9月",
    },
    allRoles: "全部角色",
    inputAtLeastTwoChars: "請至少輸入兩個字元",
}
  , yP = "首頁"
  , xP = "你好"
  , OP = "暫無資料"
  , AP = "分"
  , bP = "直播"
  , DP = "錄播"
  , MP = "資源"
  , PP = "幫助"
  , zP = "登入"
  , HP = "清空"
  , jP = "更多"
  , NP = "重置"
  , EP = "搜尋"
  , BP = "發佈時間"
  , TP = "發佈於"
  , CP = "進行中"
  , GP = "E-mail"
  , YP = "地址"
  , FP = "聯絡資訊"
  , IP = "首頁配置"
  , LP = "模組名稱"
  , RP = "是否展示"
  , XP = "統計"
  , ZP = "版權資訊"
  , kP = "機構logo"
  , UP = "是"
  , SP = "否"
  , WP = "儲存"
  , QP = "取消"
  , JP = "下一步"
  , VP = "上一步"
  , qP = "上傳"
  , KP = "建議上傳 透明底色的PNG圖片, 大小不要超過 3M"
  , _P = "全選"
  , $P = "資源分類"
  , ez = "教室直播"
  , tz = "教室錄播"
  , rz = {
    firstLevel: "一級分類",
    secondLevel: "二級分類",
    thirdLevel: "三級分類",
}
  , nz = {
    course: {
        type: "課程",
        fields: {
            name: "課程名稱 ",
            status: "課程狀態",
            teacher: "授課教師",
            time: "課程時間",
            location: "課程地點",
            department: "所屬學院",
            code: "課程代碼",
            teachingClassName: "授課班級",
            academicYearSemester: "學年學期",
        },
        desc: "“課程”類型內容，來源於當前所有公開課程",
        dataRule: {
            timeDesc: "按開課程時間倒序"
        },
    },
    video: {
        type: "影片",
        fields: {
            name: "影片名稱",
            publishedAt: "發佈時間",
            duration: "影片時長",
            publisher: "分享人",
            viewCount: "瀏覽數",
        },
        desc: "“影片”類型內容，來源於當前公共資源庫",
    },
    file: {
        type: "檔案",
        fields: {
            name: "檔案名稱",
            category: "類型",
            publishedAt: "發佈時間",
            size: "檔案大小",
            publisher: "發佈人",
            viewCount: "瀏覽數",
        },
        desc: "“檔案”類型內容，來源於當前公共資源庫",
    },
    user: {
        type: "人員",
        fields: {
            name: "人員姓名",
            avatar: "人員頭像",
            department: "所屬學院"
        },
        desc: "「人員」類型內容，來源於當前機構教師角色",
    },
    topic: {
        type: "專題",
        fields: {
            name: "專題名稱",
            description: "專題簡介",
            publisher: "發佈人",
            publishedAt: "發佈時間",
            resourceCount: "資源數",
            classification: "分類",
            topicClassification: "專題分類",
            topicTag: "專題標籤",
            tag: "標籤",
        },
        desc: "“專題”類型內容，來源於專題管理中的新增內容",
    },
    count: "當前共{n}個模組",
    max: "最多可增加{n}個模組",
    common: {
        dataRule: {
            publishedAtDesc: "按發佈時間倒序",
            viewCountDesc: "按瀏覽數倒序",
            fansCountDesc: "按粉絲數倒序",
            publishResourceCountDesc: "按發布資源數倒序",
            resourceCountDesc: "按所含資源數倒序",
            courseTimeDesc: "按開課程時間倒序",
        },
    },
    name: "模組",
    showFields: "顯示欄位",
    fieldsSelectHint: "勾選表示展示",
    custom: "自定義方案",
    dataRule: "顯示規則",
    dataRuleHint: "透過設定“顯示規則”，選擇首頁實際顯示範圍",
    linesRule: "顯示行數",
    linesRuleHint: "透過設定“顯示行數”，控制首頁實際顯示的行數，最多顯示 8 行",
}
  , oz = "新增模組"
  , az = "模組設定"
  , sz = {
    required: "該欄位為必填項",
    maxLength: "最多輸入{max}個字符",
    nameRepetitive: "專題名稱已存在",
}
  , iz = "模組類型"
  , cz = "全部"
  , lz = "公開直播"
  , uz = "公開錄播課"
  , fz = "最近{num}天"
  , dz = "本學期"
  , pz = "本學年"
  , hz = {
    week0: "週日",
    week1: "週一",
    week2: "週二",
    week3: "週三",
    week4: "週四",
    week5: "週五",
    week6: "週六",
}
  , mz = {
    living: "直播中",
    upcoming: "未開始",
    finished: "已結束",
    recording: "錄製中",
    inProgress: "進行中",
}
  , gz = {
    searchTip: "活動名稱 / 課程 / 地點 / 教師",
    expand: "展開篩選",
    collapse: "收起篩選",
    semester: "所屬學期",
    startTime: "活動日期",
    department: "所屬學院",
    campus: "所在校區",
    building: "所在大樓",
    classroom: "所在教室",
    reset: "重置",
    emptyTipPrefix: "當前還沒有“",
    emptyTipText: "公開直播",
    emptyTipSuffix: "”",
    teachingClassName: "授課班級",
}
  , vz = {
    watchLive: "進入直播",
    watchReplay: "下載錄播課",
    // modified
    upcoming: "即將開始",
    transcoding: "資源轉檔中",
    waitForFinish: "完成後可觀看",
}
  , wz = "我的錄播課"
  , yz = {
    searchTip: "課程名稱 / 課程編號"
}
  , xz = {
    all: "全部",
    inprogress: "進行中",
    upcoming: "即將開課",
    end: "已結束",
}
  , Oz = {
    all: "全部",
    published: "已發佈",
    unpublished: "未發佈"
}
  , Az = {
    status: "課程狀態",
    searchTip: "課程名稱 / 課程編號 / 教師"
}
  , bz = {
    noCoursePrefix: "當前還沒有",
    noCourseSuffix: ""
}
  , Dz = "檔案大小不能超過{n}M"
  , Mz = "底部資訊"
  , Pz = "首頁選單"
  , zz = "首頁標題"
  , Hz = "返回"
  , jz = {
    content: "課程目錄",
    instructor: "授課教師",
    nthWeek: "第{n}週",
    nActivity: "共{n}節",
    startDate: "開課時間",
    slotNo: "第{n}節",
    location: "開課地點",
    unavailable: "課程已失效",
    captureContent: "課程內容",
    noContentSuffix: "",
}
  , Nz = {
    type: {
        subject_lib: "題庫",
        subject_library: "題庫",
        course_package: "課程包",
        lesson_resource: "錄影教材",
        video: "影片",
        document: "檔案",
        audio: "音訊",
        image: "圖片",
        all: "全部",
        other: "其它",
        link: "連結",
        file: "其它",
        swf: "Flash",
        folder: "資料夾",
        scorm: "SCORM",
        evercam: "EverCam 教材",
        wmpkg: "wmpkg",
        slide: "slide",
        zip: "壓縮檔案",
    },
    emptyTip: "暫無檔案",
    stats: {
        like: "讚",
        view: "瀏覽",
        download: "下載",
        favorite: "收藏",
        copy: "複製",
    },
    sortFilter: {
        createdAt: "最新文件",
        likeCount: "最多點讚",
        collectionCount: "最多收藏",
        viewCount: "最多瀏覽",
        downloadCount: "最多下載",
        saveCount: "最多複製",
    },
}
  , Ez = "學期"
  , Bz = "新增檔案"
  , Tz = "刪除檔案"
  , Cz = {
    emptyTip: "暫無錄播課",
    add: "新增錄播課",
    delete: "刪除錄播課",
    name: "課程資源",
    batchSetting: "批次設定",
    department: "院系",
    publishStatus: "發佈狀態",
    classification: "資源分類",
    subject: "學科門類",
    recordStatus: "錄製狀態",
    courseDepartment: "開課院系",
    startTime: "開課時間",
    host: "主講人",
    courseName: "課程名稱",
    selectedCountTip: "已選擇 {0} 条",
    defaultSettingTip: "當前設定為預設值，請按照需要調整",
    recordSwitch: "錄製開關",
    liveSwitch: "同時進行直播",
    publishSwitch: "發佈錄製內容至課程",
    daemonRecord: "僅後台錄製不公開",
    downloadPermission: "下載權限",
    allowDownload: "允許下載",
    openScopeSetting: "門戶公開",
    courseCode: "課程代碼",
    location: "地點",
    campus: "校區",
    building: "樓宇",
    classroom: "教室",
    saveSettingTips: "將修改{count}門課程的設定",
}
  , Gz = "確認"
  , Yz = "課程名稱/課程代碼/授課教師"
  , Fz = "結束日期"
  , Iz = "刪除成功"
  , Lz = "資源名稱/發佈人"
  , Rz = "檔案資源"
  , Xz = "當前{n}個資源"
  , Zz = "修改圖片"
  , kz = "開始日期"
  , Uz = {
    userMenus: {
        courseCenter: "課程中心",
        learningCenter: "學習中心",
        myCourses: "我的課程",
        myProjects: "我的項目",
        myResource: "我的資源",
        myGroups: "我的小組",
        userProfile: "個人中心",
        mySettings: "個人設定",
        changeLanguage: "語言切換",
        logout: "登出",
    },
    controlPanel: "管理後台",
}
  , Sz = {
    admin: "專題管理",
    coverTip: "建議比例: 16:9 / 大小不超過1M <br> 支援格式: png、jpg、jpeg、webp",
    deleteConfirm: "確認刪除 {topicName} ？該專題已發佈到資源平台，刪除後將會影響展示",
    edit: "編輯專題",
    editTopic: "編輯",
    new: "新增專題",
    cover: "專題圖片",
    file: "檔案",
    course: "錄播課",
    indexTip: '下方為當前機構所有專題，您可在「<a style="color: var(--rms-primary-color)" href="/admin/home?tab=module" target="_blank">首頁配置-模組設定</a>」中設定入口首頁專題顯示規則',
    resource: "專題資源",
    publisherTip: "請輸入發佈人/發佈單位",
    index: "專題列表",
    detail: "專題詳情",
    department: "所屬學院",
    sortFilter: {
        createdAt: "最新專題",
        resourceCount: "最多資源"
    },
    deleteTitle: "刪除專題",
    selectResourceStats: "已選 {0} 個檔案, {1} 個錄播課",
    selectFileStats: "已選 {0} 個檔案",
    selectCaptureStats: "已選 {0} 個錄播課",
}
  , Wz = "類型"
  , Qz = "操作"
  , Jz = "專題名稱 / 發佈人 / 標籤"
  , Vz = "基本資訊"
  , qz = "當前使用系統默認圖片<br> 可點擊修改"
  , Kz = "請輸入{0}"
  , _z = "已選擇內容新增成功"
  , $z = {
    category: {
        "topic-course": "錄播課",
        "topic-file": "檔案",
        course: "錄播課",
        file: "檔案",
        topic: "專題",
    },
    tips: {
        suggestChangeKeywordOrCondation: "建議：換個關鍵字 或 修改篩選條件",
        SuggestModifyConditions: "建議：修改篩選條件",
        noResourcePrefix: "抱歉，没有找到",
        noResourceSuffix: "相關資源",
        noResource: "抱歉，沒有找到相關資源",
        allCourses: "全部課程",
    },
}
  , eH = {
    homepage: "首頁",
    resourceCourse: "錄播課列表",
    resourceFile: "檔案列表",
    resource: "資源",
    searchResult: "搜尋結果",
}
  , tH = "全部檔案"
  , rH = {
    sharedAt: "發布時間",
    department: "所屬學院",
    placeHolder: "文件名稱 / 發佈人 / 標籤",
}
  , nH = "檔案類別"
  , oH = "返回上一級"
  , aH = {
    PRIVATE: "不公開",
    PUBLIC: "校外公開",
    SCHOOL: "校內公開"
}
  , sH = "公開範圍"
  , iH = "全部專題"
  , cH = "暫無相關資源"
  , lH = "暫無資料"
  , uH = "上傳失敗"
  , fH = {
    name: "學位類型",
    xjtuName: "培養對象",
    undergraduate: "學士",
    postgraduate: "碩士、博士",
}
  , dH = "刪除已取消"
  , pH = "刪除失敗"
  , hH = "是否確定刪除 {name} ？"
  , mH = {
    createTag: "新增標籤",
    updateTag: "編輯標籤",
    createTagPlaceholder: "請輸入標籤名稱",
    createTagSuccess: "標籤建立成功",
    updateTagSuccess: "標籤修改成功",
    deleteTag: "刪除標籤",
    deleteTagTip: "是否確定要刪除 {tagName}",
    deleteTagRelatedTip: "標籤已關聯資源，是否確定刪除 {tagName}",
    tagName: "標籤名稱",
    resourceCount: "資源數",
    operation: "操作",
    pleaseInputTag: "請輸入標籤",
    selfCreated: "自建標籤",
    kfsCreated: "知識森林標籤",
    sourceSubjectOrProject: "來源學科/項目",
    sourceCourse: "來源課程",
    failedToGetSourceInfo: "未能獲取知識森林標籤的來源資訊",
}
  , gH = {
    resourceManagement: "資源管理",
    captureResource: "錄播課設定",
    fileResource: "檔案資源",
    fileAudit: "檔案審核",
    topicResource: "專題資源",
    basicDataManagement: "基礎資料管理",
    portalManagement: "首頁設定",
    resourceTag: "資源標籤",
    resourceClassification: "資源分類",
    liveCaptureManagement: "直錄播管理",
    classroomManagement: "教室管理",
    scheduleManagement: "排程管理",
    streamForwardManagement: "轉推管理",
    captureManagement: "錄製資源管理",
    orgManagement: "機构管理",
    statistics: "資料統計分析",
    fileResourceStatistics: "檔案資源統計",
    liveAndCaptureStatistics: "直錄播統計",
    capacityManagement: "容量管理",
    recycleManagement: "垃圾桶",
    subject: "學科門類",
    operateLog: "日誌記錄",
    systemOperateLog: "系統任務日誌",
    userOperateLog: "使用者操作日誌",
}
  , vH = "編輯"
  , wH = {
    addFirstLevel: "新增一級分類",
    addSecondLevel: "新增二級分類",
    addThirdLevel: "新增三級分類",
    resourceCount: "關聯資源數",
    name: "分類名稱",
    namePlaceholder: "請輸入內容",
    create: "新增分類",
    duplicateNameInSameLevel: "分類名稱在同一級別已經被使用",
    deleteClassificationTitle: "刪除分類",
    deleteClassificationTip: '是否確定刪除"{name}"?',
    deleteClassificationRelatedTip: '是否確認刪除分類"{name}"，刪除後此分類下的{count}個資源將被歸類為無指定分類，是否確認刪除?',
    update: "編輯分類",
    createSuccess: "分類建立成功",
    updateSuccess: "分類修改成功",
}
  , yH = "服務異常"
  , xH = {
    Student: "學生",
    Instructor: "教師",
    EducationalAdmin: "教務人員",
    Admin: "系統管理員",
}
  , OH = {
    selects: {
        tagSearchPlaceholder: "搜尋或新增標籤",
        clfSearchPlaceholder: "搜尋分類",
        createPlaceholder: "新增標籤",
        notFoundPlaceholder: "未找到標籤，點擊創建",
    },
    editResource: "編輯資源",
    form: {
        name: "資源名稱",
        category: "資源類型",
        openScope: "分享至",
        department: "院系",
        role: "角色",
        ccLicenseName: "版權管理",
        download: "資源下載",
        allowSave: "是否允許複製",
        allowDownload: "是否允許下載",
        classification: "資源分類",
        tag: "資源標籤",
        summary: "簡介",
        unPublishedReason: "下架原因",
        selectedItemsTip: "已選{0}項",
        resource: "資源",
        subject: "學科門類",
    },
    published: {
        searchPlaceholder: "資源名稱/分享人/標籤",
        publishedResource: "已發布資源",
        name: "資源名稱",
        category: "類型",
        classification: "分類",
        tag: "標籤",
        openScope: "範圍",
        createdBy: "分享人",
        createdAt: "分享時間",
        takeDown: "下架",
    },
    unpublished: {
        unpublishedResource: "已下架資源",
        reason: "下架原因",
        publish: "上架",
        searchPlaceholder: "資源名稱/分享人/下架原因",
        republishResource: "上架資源",
        confirmMessage: "上架後，將清空該資源的舉報資訊，並重新發布至資源平台",
    },
    resourcePublish: {
        resourcePublish: "發布資源",
        publishSetting: "資源發布設定",
        footerTip: "請遵守著作權法及相關法律規定，上傳具智慧財產權之教材與電子資源，必須事先取得合法使用授權書",
    },
    batchTakeDown: {
        title: "批次下架",
        selectCount: "已選{count}項",
        successTip: "下架成功",
        failTip: "下架失敗",
    },
    batchRePublish: {
        title: " 批次上架",
        selectCount: "已選{count}項",
        successTip: "上架成功",
        failTip: "上架失败",
    },
    batchEdit: {
        title: "批次編輯",
        dialogTitle: "批次編輯资源",
        selectCount: "已選{count}項",
        editField: "編輯字段",
        fields: {
            shareTo: "分享至",
            ccLicenseName: "版權管理",
            download: "資源下載",
            classification: "資源分類",
            tag: "資源標籤",
        },
    },
    audit: {
        audit: "審核",
        resourceAudit: "資源審核",
        auditTip: "審核通過後資源將會顯示在資源平台中",
        auditing: "審核中",
        auditAllow: "審核通過",
        auditAllowAndSave: "審核通過，並儲存",
        auditRefusal: "審核拒絕",
        refusalReason: "拒絕原因",
        auditingResource: "待審核資源",
    },
    operation: "操作",
    viewDetail: "查看詳情",
    unPublishResource: "下架資源",
    hideBaseInfo: "隱藏基本資訊",
    displayBaseInfo: "顯示基本資訊",
    sharer: "分享人",
    sharedAt: "分享時間",
    classification: "分類",
    scope: "範圍",
    tag: "標籤",
    off_campus: "校外",
    department: "院系資源庫",
    org: "校內資源庫",
    group: "小組資源庫",
    personal: "個人",
    delete: "移除",
    deleteResource: "移除資源",
    deleteResourceTip: "移除後，當前資源及其子層級內容將被刪除",
    batchAudit: {
        title: " 批次審核",
        selectCountTip: "已選 {count} 項資源, 審核通過後資源將會顯示在資源平台中",
        editSelectedResources: "編輯已選資源",
    },
}
  , AH = {
    uplaodSizeTip: "支援多個檔案拖拽或點擊上傳，單個檔案大小不能超過 ",
    uplaodTypeTip: "目前系統支援的檔案格式  ",
    uploadSecretTip: "上傳檔案為有加密時，將無法進行預覽",
    videoFormat: "影片格式",
    audioFormat: "音訊格式",
    imageFormat: "圖片格式",
    docFormat: "檔案格式",
    compressFormat: "壓縮檔案格式",
    size: "大小",
    uplaodFailed: "上傳失敗",
    supportFileType: "支援檔案格式",
    reTranscode: "重新轉碼",
}
  , bH = {
    sharer: "分享人",
    like: "讚",
    doLike: "點讚",
    view: "瀏覽",
    favorites: "收藏",
    cancelFavirites: "取消收藏",
    cancelShare: "取消分享",
    shareScope: "分享範圍",
    shareTime: "分享時間",
    download: "下載",
    copy: "複製",
    report: "舉報",
    summary: "資源簡介",
    "comment&score": "評論評分",
    score: "評分",
    noSummary: "暫無簡介",
    resourceCount: "資源數",
    followers: "粉絲人數",
    follow: "追蹤",
    follows: "追蹤人數",
    unfollow: "取消追蹤",
    relatedTags: "相關標籤",
    noRelatedTags: "暫無標籤",
    relatedResources: "相關資源推薦",
    noRecommentdations: "暫無推薦",
    resourceScore: "資源評分",
    commentPlaceholder: "請輸入評論",
    reply: "回覆",
    unavailable: "檔案已失效",
    viewAllReplies: "查看全部 {0} 條回覆",
    collapseReply: "收起回覆",
    delCommentIncludeReplyTip: "該留言下已有回覆，確認刪除此留言與相關回覆？刪除後將不可恢復",
    delCommmentNotIncludeReplyTip: "確定刪除此留言？刪除後將不可恢復",
    delStarTip: "確定删除此評分? 删除後將不可恢復",
    noScore: "暫無評分",
    copyTips: "確定將該資源複製到個人資源庫嗎？",
    cancelFavTip: "確定取消收藏目前資源？",
    cancelShareTip: "確定取消分享目前資源？",
    viewing: "在看",
    followersAreViewing: "追蹤的人在看",
}
  , DH = "發布資源"
  , MH = "無指定分類"
  , PH = "全部角色"
  , zH = "無指定院系"
  , HH = "校外"
  , jH = "院系資源庫"
  , NH = "校內資源庫"
  , EH = "提示"
  , BH = {
    reportInfo: "舉報資訊",
    reportCount: "舉報數",
    reportReason: {
        copyright: "盜版或侵權，未獲得權利人的合法授權、侵犯個人隱私或洩露單位商業機密",
        ad_or_spam: "廣告或垃圾資訊",
        vulgar_info: "色情、淫穢、低俗資訊",
        reactionary_info: "反政府、反人類、反社會等反動資訊",
        crime_info: "散佈賭博、暴力、兇殺、恐怖或者教唆犯罪等資訊",
        defamation: "侮辱、誹謗等人身攻擊資訊",
        rumor: "散佈謠言、擾亂社會秩序、破壞社會穩定等資訊",
    },
    reportStatsTip: "此檔案有{count}條舉報資訊",
    ignore: "忽略",
    emptyWarning: "確定清空該資源的舉報資訊？",
    reportSuccess: "舉報成功",
    report: "舉報",
    confirm: "確定舉報",
}
  , TH = {
    notFound: "未找到",
    create: "創建"
}
  , CH = "個"
  , GH = "文件詳情"
  , YH = "操作成功"
  , FH = "操作失敗"
  , IH = "繳交"
  , LH = "沒有更多內容了"
  , RH = "暫無評論"
  , XH = "我"
  , ZH = "失敗"
  , kH = "修改內容尚未保存，確定離開？"
  , UH = "連結"
  , SH = {
    uploading: "正在傳輸中",
    processing: "正在轉碼中",
    failed: "轉碼失敗",
    cliping: "剪輯中",
    clip_failed: "剪輯失敗",
    file_locked: "抱歉，該檔案已進行加密故無法預覽，請您下載後檢視",
}
  , WH = {
    page: "頁",
    zoomOut: "縮小",
    zoomIn: "放大",
    prevPage: "上一頁",
    nextPage: "下一頁",
    enterFullScreen: "全螢幕模式",
    exitFullScreen: "退出全螢幕",
}
  , QH = {
    zoomIn: "放大",
    zoomOut: "縮小",
    rotate: "逆時針旋轉",
    reset: "復原",
    exitFullScreen: "退出全螢幕",
    enterFullScreen: "全螢幕模式",
}
  , JH = {
    private: "私有版權保護",
    public_domain: "公共領域",
    cc_attribute: "創用CC-姓名標示",
    cc_attribute_share_alike: "創用CC-姓名標示-相同方式共享",
    cc_attribute_no_derivatives: "創用CC-姓名標示-禁止改作",
    cc_attribute_non_commercial: "創用CC-姓名標示-非商業性",
    cc_attribute_non_commercial_share_alike: "創用CC-姓名標示-非商業性-相同方式共享",
    cc_attribute_non_commercial_no_derivatives: "創用CC-姓名標示-非商業性-禁止改作",
}
  , VH = "在瀏覽器中打開"
  , qH = {
    single_selection: "單選題",
    multiple_selection: "多選題",
    true_or_false: "判斷題",
    matching: "配合題",
    cloze: "克漏字題",
    fill_in_blank: "填空題",
    short_answer: "簡答題",
    analysis: "分析題",
    stats: "共{0}道題",
    unit: "道",
    difficultyLevel: "難易度",
    easy: "易",
    medium: "中",
    hard: "難",
}
  , KH = "暫不支援該文件的預覽"
  , _H = "下載文件"
  , $H = "暫無法預覽這個格式的檔案"
  , ej = "開啟"
  , tj = "關閉"
  , rj = {
    reset: "重置",
    date: "日期",
    campus: "校區",
    building: "樓宇",
    classroom: "教室",
    type: "資源類型",
    searchTip: "資源名稱 / 課程 / 地點 / 主講人",
}
  , nj = {
    settings: "系統設置",
    settingsTitle: "系統設置",
    batchDelete: "批次刪除",
    record: "錄製",
    clip: "剪輯",
    composite: "合成",
    deleteTitle: "刪除錄播資源",
    deleteConfirm: "是否確定刪除選中的錄播資源?",
    batchDeleteTitle: "批次刪除錄播資源",
    batchDeleteConfirm: "已選中{ count }條，是否確定刪除所選資源?",
    deleteAssociatedSchedule: "同時刪除直錄播排程",
    downloadPermission: "下載權限",
    downloadAllowAll: "允許下載",
    downloadForbidden: "禁止下載",
    allowDownloadTip: "開放錄影資源的下載權限",
    forbiddenDownloadTip: "關閉錄影資源的下載權限，僅管理員和主講人可下載",
    saveSucceeded: "儲存成功",
    saveFailed: "保存失敗",
    view: "查看",
    edit: "剪輯",
    delete: "刪除",
    name: "資源名稱",
    courseName: "課程名稱",
    tag: "標籤",
    host: "主講人",
    date: "日期",
    location: "地點",
    type: "資源類型",
    operate: "操作",
    operateResult: "執行結果",
    SUCCESS: "成功",
    FAIL: "失敗",
    captureDeleted: "資源已刪除",
    saveSuccessTip: "正在合成，結束後我們會及時通知您。您可在“我的資源”中查看進度。",
    savedWithoutTaskTip: "合成完畢，您可在“我的資源”中查看。",
    clipSuccessMessage: "正在剪輯，請去個人資源庫進行查看",
    clipErrorMessage: "創建剪輯任務失敗",
    autoDeleteSetting: "自動刪除設定",
    autoDelete: "刪除設定",
    autoDeleteDisabled: "不啟用",
    autoDeleteEnabled: "啟用",
    autoDeleteBeforeNSemester: "刪除範圍",
    autoDeleteBeforeNSemesterTip: "自動刪除",
    autoDeleteBeforeNSemesterAfterTip: "個學期前的錄製資源",
    autoDeleteBeforeNSemesterQuestionTip: "按學期滾動刪除錄製資源",
    autoDeleteDeleteMethod: "刪除方式",
    autoDeleteDeleteMethodMovingToTrash: "移入垃圾桶，保存有效期後徹底刪除",
    autoDeleteDeleteMethodDirectDelete: "不移入垃圾桶，直接徹底刪除",
    autoDeleteDeleteMethodMovingToTrashQuestionTip: "資源移入垃圾桶，xx天後將自動徹底刪除。垃圾桶內資源仍會佔用儲存空間",
    autoDeleteDeleteMethodDirectDeleteQuestionTip: "不移入垃圾桶，直接徹底刪除資源，釋放儲存空間。一旦刪除將無法恢復，請謹慎操作",
    confirmSaveAutoDeleteSettingTitle: "確認啟用自動刪除設定嗎?",
    confirmSaveAutoDeleteSettingContent: "<span>啟用後將<strong>{0}</strong>執行刪除任務<br/>資源徹底刪除後將無法恢復，請謹慎操作</span>",
    autoDeleteDetail: "查看刪除範圍",
    deletionSettingOverview: "<span>預計刪除共 <strong>{semesterCount}個學期</strong> 相關錄製資源，共 <strong>{total}筆</strong>，徹底刪除後將釋放儲存空間 <em>{videoSize}</em></span>",
    videoSize: "資源大小",
}
  , oj = "設定"
  , aj = "選單預覽"
  , sj = "顯示項"
  , ij = {
    emptyNode: "暫無知識點",
    title: "知識森林",
    facet: "分面",
    fragment: "碎片",
    facetNFragment: "分面&碎片",
    subjectList: "課程列表",
    projectList: "項目列表",
    searchPlaceholder: "學科名稱/研究方向",
    link: "鏈接地址",
    isbn: "ISBN編號",
    webSource: "來源網站",
    bookSource: "來源圖書",
    otherSource: "來源",
    noSource: "暫未標記來源",
    pageFormat: "第{0}頁",
    noFragment: "暫無碎片",
    facetAndFragmentCount: "共{facetCount}個分面，{fragmentCount}個碎片",
    fragmentsOfFacet1: "分面:",
    fragmentsOfFacet2: "下的碎片",
    enterKnowledgeForest: "查看知識森林",
    relatedKnowledgeForestCourse: " 相關知識森林課程",
    selectCourseEnter: "請選擇要進入的課程",
    subject: "學科",
    noSpecifiedSubject: "無指定學科",
    noSpecifiedDepartment: "無指定學院",
    switchToCluster: "切換至知識森林",
    switchToGraph: "切換至知識圖譜",
    project: "研究方向",
    viewModePlaceholder: "選擇查看方式",
    viewByDept: "按學院查看",
    viewBySubject: "按學科查看",
    subjectSearchPlaceholder: "學科名稱",
    departmentSearchPlaceholder: "學院名稱",
    projectSearchPlaceholder: "研究方向",
}
  , cj = {
    prior: "前後置關係",
    file: "檔案",
    topic: "專題",
    course: "課程",
    time: "時間",
    relatedResource: "關聯資源",
    topicResourceCount: "{resourceCount}個資源",
}
  , lj = {
    overview: {
        title: "總覽",
        captureCourseCount: "錄播課總數",
        publicCaptureCourseCount: "公開錄播課",
        scheduleCount: "排程總數",
        publicScheduleCount: "公開排程",
        captureCount: "錄製資源總數",
        publicCaptureCount: "公開錄製資源",
    },
    captureCourse: {
        statsTitle: "錄播課統計",
        visitTrend: "錄播課瀏覽分析",
        totalViews: "錄播課總瀏覽次數",
        totalViewers: "錄播課總瀏覽人數",
        viewCount: "瀏覽次數",
        viewerCount: "瀏覽人數",
        visitRanking: "錄播課瀏覽排行榜",
        rank: "排名",
        captureCourseName: "錄播課名稱",
        instructors: "主講人",
    },
    schedule: {
        AIAnalysisUsage: "影片分析統計",
        scheduleWithCaptionsCount: "生成字幕影片數",
        scheduleWithTopicsCount: "智慧標註影片數",
        scheduleWithCaptions: "字幕",
        scheduleWithTopics: "有智慧標注",
        scheduleWithoutCaptions: "無字幕",
        scheduleWithoutTopics: "無智慧標注",
        acrossAllSchedules: "佔全部影片的",
        countStat: "影片數統計",
        todaySchedules: "今日排程",
        upcoming: "未開始",
        recording: "正在錄製",
        livingAndRecording: "正在直錄播",
        processing: "處理中",
        finished: "已完成",
        failed: "處理失敗",
    },
    classroomDevice: {
        title: "教室設備統計",
        classroomTotalCount: "教室總數",
        using: "使用中",
        free: "空閒中",
        notEnabled: "未啟用",
        deviceExceptionStat: "教室設備异常統計",
        classroomWithMalfunctionedDevice: "當前設備異常教室",
        networkError: "網絡錯誤",
        apiError: "API錯誤",
        unknownError: "未知錯誤",
        noRecordingError: "錄製錯誤",
        deviceErrLogsCount: "近30天設備異常紀錄",
    },
    classificationStats: {
        title: "直錄播分類統計"
    },
}
  , uj = {
    all: "總覽",
    day: "今日",
    month: "近30天",
    year: "近一年",
    today: "今天",
    thisYear: "今年",
}
  , fj = {
    title: "全域搜尋",
    file: "文件",
    topic: "專題",
    fromCaptureCourse: "來源錄播課",
    time: "時間",
    location: "地點",
    searchSource: {
        platformResources: "平臺資源",
        libraryCollections: "館藏書目",
        chineseResources: "中文發現",
    },
}
  , dj = "其他"
  , pj = "該資源已被刪除"
  , hj = "當前影片暫無法播放"
  , mj = "我的追蹤"
  , gj = {
    learningStats: "{count}人正在學習",
    learning: "正在學習",
    learningResourceStats: "{count}人正在學習該資源",
}
  , vj = "無權限查看此資源"
  , wj = "來源"
  , yj = {
    tagStats: {
        resourceCount: "關聯資源數",
        tagName: "標籤名稱",
        rank: "排名",
        title: "資源標籤統計",
    },
    fileStats: {
        title: "資源使用統計",
        totalViews: "總瀏覽次數",
        totalLikes: "總點讚次數",
        totalCollections: "總收藏次數",
        totalDownloads: "總下載次數",
        totalSaves: "總複製次數",
        rank: {
            viewCount: "檔案瀏覽次數排行榜",
            likeCount: "檔案點讚次數排行榜",
            collectionCount: "檔案收藏次數排行榜",
            downloadCount: "檔案下載次數排行榜",
            saveCount: "檔案複製次數排行榜",
        },
    },
    classificationStats: {
        title: "資源分類統計"
    },
    overview: {
        title: "總覽"
    },
    statsByCategory: "按類型統計",
    statsBySource: "按來源統計",
}
  , xj = {
    upcoming: "距離{type}開始",
    upcomingDetail: "還有{hours}小時{mins}分鐘",
    recording: "錄製中",
    recordingDetail: "錄製中，請耐心等待",
    finished: "已結束",
    finishedDetail: "{type}正在處理中，完成可查看{type}，請耐心等待",
    deleted: "已删除",
    deletedDetail: "{type}已删除，去看看其他的吧",
    loadingError: "載入失敗",
    loadingErrorDetail: "{type}載入失敗，請重試",
    reload: "重新載入",
    bookNumTip: "{num}人已預約",
    failed: "處理失敗",
}
  , Oj = "查無本資源。"
  , Aj = {
    title: "應用中心",
    loadFailTips: "未能正常加載 wg-apps.js"
}
  , bj = {
    cancel: "取消預約",
    view: "預約觀看"
}
  , Dj = {
    title: "客戶管理",
    orgSearchPlaceholder: "客戶ID/ 客戶編碼/ 客戶名稱",
    orgId: "客戶ID",
    orgCode: "客戶編碼",
    orgName: "客戶名稱",
    basicInfo: "基本資訊",
    planInfo: "套餐資訊",
    toggles: {
        title: "Toggle管理",
        name: "名稱",
        description: "說明",
        default: "預設值",
        value: "開關",
        true: "開啟",
        false: "關閉",
        searchPlaceholder: "名稱 / 說明",
    },
    settings: "設定管理",
    basicData: "基礎資料管理",
}
  , Mj = {
    time: "時間",
    classroom: "教室",
    device: "設備",
    chooseClassroom: "選擇教室",
    chooseDevice: "選擇設備",
    classroomName: "教室名稱",
    deviceName: "設備名稱",
    deviceLabel: "畫面類型",
    errorType: "異常類型",
    createAt: "建立時間",
    errorTypes: {
        NETWORK_ERROR: "網路錯誤",
        API_ERROR: "API錯誤",
        UNKNOWN: "未知錯誤",
        NO_RECORDING_ERROR: "錄製錯誤",
    },
    channels: {
        STUDENTS: "學生路",
        ENCODER: "電腦路",
        INSTRUCTOR: "老師路"
    },
    detail: "異常詳情",
}
  , Pj = {
    message: "錯誤訊息",
    type: "錯誤類型",
    device: {
        message: "設備資訊",
        status: "設備狀態",
        isBestAudio: "是否為主音",
        recorderDevice: "錄播設備",
        deviceChannel: "影片下載通道號",
        noMsg: "冇訊息",
    },
}
  , zj = "啟用"
  , Hj = "禁用"
  , jj = "收藏"
  , Nj = "已收藏"
  , Ej = "重新整理"
  , Bj = "查看公開課程"
  , Tj = "查看公開活動"
  , Cj = {
    NO_VIEW_PERMISSION: "暫無瀏覽權限",
    COURSE_NOT_ENROLLED: "您未加入目前課程，請聯絡授課教師",
    COURSE_IS_UNPUBLISHED: "目前課程暫未發布，請聯絡授課教師",
    SCHEDULE_NOT_FOUND: "找不到活動，您要求的活動不存在",
    COURSE_NOT_FOUND: "找不到課程，您要求的課程不存在",
    SCHEDULE_IS_PRIVATE: "目前活動暫未公開，看看其他公開活動吧",
    COURSE_IS_PRIVATE: "目前課程暫未公開，看看其他公開課程吧",
    NOT_FOUND: "查無本資源",
}
  , Gj = "正常"
  , Yj = "異常"
  , Fj = "查看更多"
  , Ij = "筛选"
  , Lj = "項"
  , Rj = "錄播課"
  , Xj = {
    title: "課堂AI分析",
    attendanceRate: "出席率",
    headupRate: "抬頭率",
    frontRowRate: "前排座位率",
    attendanceCount: "出席人數",
    headupCount: "抬頭人數",
    frontCount: "前排座位人數",
    noData: "暫無資料",
}
  , Zj = {
    common: wP,
    home: yP,
    hello: xP,
    noData: OP,
    point: AP,
    scheduleLive: bP,
    scheduleCapture: DP,
    resource: MP,
    "live-capture": "直錄播",
    help: PP,
    login: zP,
    clear: HP,
    more: jP,
    reset: NP,
    search: EP,
    "video-duration": "影片時長",
    publishTime: BP,
    publishedAt: TP,
    "file-size": "檔案大小",
    ongoing: CP,
    "search-placeholder": "請輸入關鍵字",
    "n-resources": "<span>{n}</span>個資源",
    "recorded-courses-count": "錄播課程總數",
    "file-resources-count": "檔案資源總數",
    "video-resources-count": "影片資源總數",
    "resource-view-count": "資源總瀏覽人次",
    "resource-statistics-overview": "截止目前平台累計資源概況",
    "resource-statistics": "資源統計",
    email: GP,
    address: YP,
    support: FP,
    "save-success": "儲存成功",
    homeConfig: IP,
    moduleName: LP,
    whetherToShow: RP,
    statistics: XP,
    copyright: ZP,
    "beian-info": "機構/企業相關資訊",
    orgLogo: kP,
    yes: UP,
    no: SP,
    save: WP,
    cancel: QP,
    next: JP,
    previous: VP,
    upload: qP,
    logoUploadDesc: KP,
    selectAll: _P,
    resourceClassification: $P,
    CLASSROOM_LIVE: ez,
    CLASSROOM_CAPTURE: tz,
    classificationFilter: rz,
    module: nz,
    addModule: oz,
    moduleSetting: az,
    validations: sz,
    moduleType: iz,
    all: cz,
    live: lz,
    capture: uz,
    latestNDay: fz,
    currentSemester: dz,
    currentAcademicYear: pz,
    week: hz,
    scheduleStatus: mz,
    liveFilter: gz,
    liveOperate: vz,
    myCapture: wz,
    userCourseFilter: yz,
    courseStatus: xz,
    coursePublishStatus: Oz,
    courseFilter: Az,
    courseTips: bz,
    fileSizeLimitMsg: Dz,
    footerSetting: Mz,
    homeTop: Pz,
    homeTitle: zz,
    back: Hz,
    courseDetail: jz,
    file: Nz,
    semester: Ez,
    addFile: Bz,
    deleteFile: Tz,
    course: Cz,
    confirm: Gz,
    courseKeywordSearchTip: Yz,
    endDate: Fz,
    deleteSuccess: Iz,
    fileKeywordSearchTip: Lz,
    fileResource: Rz,
    resourceCountCurrently: Xz,
    selectImage: Zz,
    startDate: kz,
    header: Uz,
    topic: Sz,
    filetype: Wz,
    operate: Qz,
    delete: "刪除",
    topicKeywordSearchTip: Jz,
    basicInfo: Vz,
    emptyImagePlaceholder: qz,
    pleaseInput: Kz,
    selectedItemSaved: _z,
    resourceSearch: $z,
    route: eH,
    allFiles: tH,
    fileFilter: rH,
    fileCategory: nH,
    goBack: oH,
    scope: aH,
    openScope: sH,
    allTopics: iH,
    noResourceTip: cH,
    noDataTip: lH,
    uploadFailed: uH,
    audienceType: fH,
    deleteCanceled: dH,
    deleteFail: pH,
    deleteTip: hH,
    tag: mH,
    managementMenus: gH,
    edit: vH,
    classification: wH,
    serverError: yH,
    role: xH,
    resourceReference: OH,
    fileUpload: AH,
    resourceDetail: bH,
    uploadResource: DH,
    notSpecifiedClassification: MH,
    allRoles: PH,
    notSpecifiedDepartment: zH,
    offCampus: HH,
    department: jH,
    school: NH,
    remind: EH,
    report: BH,
    placeholder: TH,
    pieces: CH,
    fileDetail: GH,
    operationSuccess: YH,
    operateFailed: FH,
    submit: IH,
    noMoreContent: LH,
    noComment: RH,
    me: XH,
    failed: ZH,
    confirmLeave: kH,
    link: UH,
    uploadStatus: SH,
    pdfViewer: WH,
    imgViewer: QH,
    license: JH,
    openInBrowser: VH,
    subject: qH,
    resourcePreviewNotSupported: KH,
    downloadFile: _H,
    notSupportPreview: $H,
    open: ej,
    close: tj,
    captureFilter: rj,
    captureManagement: nj,
    setting: oj,
    headerPreview: aj,
    displayItem: sj,
    knowledgeGraph: ij,
    relatedResource: cj,
    liveAndCaptureStatistic: lj,
    dateRange: uj,
    fullTextSearch: fj,
    other: dj,
    resourceDelete: pj,
    videoPlayerLoadErr: hj,
    myFollow: mj,
    "10k": "萬",
    peerLearning: gj,
    resourcePermissionDeny: vj,
    source: wj,
    fileResourceStatistic: yj,
    scheduleWarningDetail: xj,
    notFound: Oj,
    appCenter: Aj,
    book: bj,
    orgManagement: Dj,
    errorlog: Mj,
    errorlogDetail: Pj,
    enabled: zj,
    disabled: Hj,
    favorite: jj,
    favorited: Nj,
    refresh: Ej,
    viewPublicCourse: Bj,
    viewPublicSchedule: Tj,
    subErrorMsg: Cj,
    normal: Gj,
    abnormal: Yj,
    viewMore: Fj,
    filter: Ij,
    items: Lj,
    captureCourse: Rj,
    scheduleAiAnalysis: Xj,
};
var kj = ( (e) => ((e.ZH_CN = "zh-CN"),
(e.ZH_TW = "zh-TW"),
(e.EN_US = "en-US"),
e))(kj || {});
const Uj = {
    "en-US": SA,
    "zh-CN": vP,
    "zh-TW": Zj
}
  , DF = {
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
    "en-US": "English"
}
  , Sj = {
    "en-US": wy,
    "zh-CN": yy,
    "zh-TW": xy
};
/*!
 * pinia v2.0.12
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
let cf;
const oi = (e) => (cf = e)
  , lf = Symbol();
function U1(e) {
    return (e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function");
}
var ra;
(function(e) {
    (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
}
)(ra || (ra = {}));
function Wj() {
    const e = Oa(!0)
      , t = e.run( () => le({}));
    let r = []
      , n = [];
    const o = io({
        install(a) {
            oi(o),
            (o._a = a),
            a.provide(lf, o),
            (a.config.globalProperties.$pinia = o),
            n.forEach( (s) => r.push(s)),
            (n = []);
        },
        use(a) {
            return !this._a && !Fh ? n.push(a) : r.push(a),
            this;
        },
        _p: r,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return o;
}
const uf = () => {}
;
function E2(e, t, r, n=uf) {
    e.push(t);
    const o = () => {
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1),
        n());
    }
    ;
    return !r && ct() && Da(o),
    o;
}
function Ln(e, ...t) {
    e.slice().forEach( (r) => {
        r(...t);
    }
    );
}
function S1(e, t) {
    for (const r in t) {
        const n = t[r]
          , o = e[r];
        U1(o) && U1(n) && !Qe(n) && !yr(n) ? (e[r] = S1(o, n)) : (e[r] = n);
    }
    return e;
}
const Qj = Symbol();
function Jj(e) {
    return !U1(e) || !e.hasOwnProperty(Qj);
}
const {assign: hr} = Object;
function Vj(e) {
    return !!(Qe(e) && e.effect);
}
function qj(e, t, r, n) {
    const {state: o, actions: a, getters: s} = t
      , i = r.state.value[e];
    let c;
    function l() {
        i || (r.state.value[e] = o ? o() : {});
        const f = _u(r.state.value[e]);
        return hr(f, a, Object.keys(s || {}).reduce( (d, u) => ((d[u] = io(Me( () => {
            oi(r);
            const w = r._s.get(e);
            return s[u].call(w, w);
        }
        ))),
        d), {}));
    }
    return ((c = ff(e, l, t, r)),
    (c.$reset = function() {
        const d = o ? o() : {};
        this.$patch( (u) => {
            hr(u, d);
        }
        );
    }
    ),
    c);
}
function ff(e, t, r={}, n, o) {
    let a;
    const s = r.state
      , i = hr({
        actions: {}
    }, r)
      , c = {
        deep: !0
    };
    let l, f, d = io([]), u = io([]), w;
    const y = n.state.value[e];
    !s && !y && (n.state.value[e] = {}),
    le({});
    function x(D) {
        let P;
        (l = f = !1),
        typeof D == "function" ? (D(n.state.value[e]),
        (P = {
            type: ra.patchFunction,
            storeId: e,
            events: w
        })) : (S1(n.state.value[e], D),
        (P = {
            type: ra.patchObject,
            payload: D,
            storeId: e,
            events: w
        })),
        br().then( () => {
            l = !0;
        }
        ),
        (f = !0),
        Ln(d, P, n.state.value[e]);
    }
    const v = uf;
    function h() {
        a.stop(),
        (d = []),
        (u = []),
        n._s.delete(e);
    }
    function m(D, P) {
        return function() {
            oi(n);
            const Y = Array.from(arguments)
              , F = []
              , X = [];
            function re(I) {
                F.push(I);
            }
            function k(I) {
                X.push(I);
            }
            Ln(u, {
                args: Y,
                name: D,
                store: O,
                after: re,
                onError: k
            });
            let U;
            try {
                U = P.apply(this && this.$id === e ? this : O, Y);
            } catch (I) {
                throw (Ln(X, I),
                I);
            }
            return U instanceof Promise ? U.then( (I) => (Ln(F, I),
            I)).catch( (I) => (Ln(X, I),
            Promise.reject(I))) : (Ln(F, U),
            U);
        }
        ;
    }
    const A = {
        _p: n,
        $id: e,
        $onAction: E2.bind(null, u),
        $patch: x,
        $reset: v,
        $subscribe(D, P={}) {
            const Y = E2(d, D, P.detached, () => F())
              , F = a.run( () => Je( () => n.state.value[e], (X) => {
                (P.flush === "sync" ? f : l) && D({
                    storeId: e,
                    type: ra.direct,
                    events: w
                }, X);
            }
            , hr({}, c, P)));
            return Y;
        },
        $dispose: h,
    }
      , O = Ao(hr({}, A));
    n._s.set(e, O);
    const b = n._e.run( () => ((a = Oa()),
    a.run( () => t())));
    for (const D in b) {
        const P = b[D];
        if ((Qe(P) && !Vj(P)) || yr(P))
            s || (y && Jj(P) && (Qe(P) ? (P.value = y[D]) : S1(P, y[D])),
            (n.state.value[e][D] = P));
        else if (typeof P == "function") {
            const Y = m(D, P);
            (b[D] = Y),
            (i.actions[D] = P);
        }
    }
    return (hr(O, b),
    hr(Ge(O), b),
    Object.defineProperty(O, "$state", {
        get: () => n.state.value[e],
        set: (D) => {
            x( (P) => {
                hr(P, D);
            }
            );
        }
        ,
    }),
    n._p.forEach( (D) => {
        hr(O, a.run( () => D({
            store: O,
            app: n._a,
            pinia: n,
            options: i
        })));
    }
    ),
    y && s && r.hydrate && r.hydrate(O.$state, y),
    (l = !0),
    (f = !0),
    O);
}
function Kj(e, t, r) {
    let n, o;
    const a = typeof t == "function";
    typeof e == "string" ? ((n = e),
    (o = a ? r : t)) : ((o = e),
    (n = e.id));
    function s(i, c) {
        const l = ct();
        return ((i = i || (l && pt(lf))),
        i && oi(i),
        (i = cf),
        i._s.has(n) || (a ? ff(n, t, o, i) : qj(n, o, i)),
        i._s.get(n));
    }
    return (s.$id = n),
    s;
}
function MF(e) {
    e = Ge(e);
    const t = {};
    for (const r in e) {
        const n = e[r];
        (Qe(n) || yr(n)) && (t[r] = $u(e, r));
    }
    return t;
}
var df = {
    exports: {}
};
(function(e) {
    (function(t) {
        var r = function(h, m, A) {
            if (!l(m) || d(m) || u(m) || w(m) || c(m))
                return m;
            var O, b = 0, D = 0;
            if (f(m))
                for (O = [],
                D = m.length; b < D; b++)
                    O.push(r(h, m[b], A));
            else {
                O = {};
                for (var P in m)
                    Object.prototype.hasOwnProperty.call(m, P) && (O[h(P, A)] = r(h, m[P], A));
            }
            return O;
        }
          , n = function(h, m) {
            m = m || {};
            var A = m.separator || "_"
              , O = m.split || /(?=[A-Z])/;
            return h.split(O).join(A);
        }
          , o = function(h) {
            return y(h) ? h : ((h = h.replace(/[\-_\s]+(.)?/g, function(m, A) {
                return A ? A.toUpperCase() : "";
            })),
            h.substr(0, 1).toLowerCase() + h.substr(1));
        }
          , a = function(h) {
            var m = o(h);
            return m.substr(0, 1).toUpperCase() + m.substr(1);
        }
          , s = function(h, m) {
            return n(h, m).toLowerCase();
        }
          , i = Object.prototype.toString
          , c = function(h) {
            return typeof h == "function";
        }
          , l = function(h) {
            return h === Object(h);
        }
          , f = function(h) {
            return i.call(h) == "[object Array]";
        }
          , d = function(h) {
            return i.call(h) == "[object Date]";
        }
          , u = function(h) {
            return i.call(h) == "[object RegExp]";
        }
          , w = function(h) {
            return i.call(h) == "[object Boolean]";
        }
          , y = function(h) {
            return (h = h - 0),
            h === h;
        }
          , x = function(h, m) {
            var A = m && "process"in m ? m.process : m;
            return typeof A != "function" ? h : function(O, b) {
                return A(O, h, b);
            }
            ;
        }
          , v = {
            camelize: o,
            decamelize: s,
            pascalize: a,
            depascalize: s,
            camelizeKeys: function(h, m) {
                return r(x(o, m), h);
            },
            decamelizeKeys: function(h, m) {
                return r(x(s, m), h, m);
            },
            pascalizeKeys: function(h, m) {
                return r(x(a, m), h);
            },
            depascalizeKeys: function() {
                return this.decamelizeKeys.apply(this, arguments);
            },
        };
        e.exports ? (e.exports = v) : (t.humps = v);
    }
    )(so);
}
)(df);
var W = df.exports, Be;
(function(e) {
    (e[(e.PLAIN_TO_CLASS = 0)] = "PLAIN_TO_CLASS"),
    (e[(e.CLASS_TO_PLAIN = 1)] = "CLASS_TO_PLAIN"),
    (e[(e.CLASS_TO_CLASS = 2)] = "CLASS_TO_CLASS");
}
)(Be || (Be = {}));
var _j = (function() {
    function e() {
        (this._typeMetadatas = new Map()),
        (this._transformMetadatas = new Map()),
        (this._exposeMetadatas = new Map()),
        (this._excludeMetadatas = new Map()),
        (this._ancestorsMap = new Map());
    }
    return ((e.prototype.addTypeMetadata = function(t) {
        this._typeMetadatas.has(t.target) || this._typeMetadatas.set(t.target, new Map()),
        this._typeMetadatas.get(t.target).set(t.propertyName, t);
    }
    ),
    (e.prototype.addTransformMetadata = function(t) {
        this._transformMetadatas.has(t.target) || this._transformMetadatas.set(t.target, new Map()),
        this._transformMetadatas.get(t.target).has(t.propertyName) || this._transformMetadatas.get(t.target).set(t.propertyName, []),
        this._transformMetadatas.get(t.target).get(t.propertyName).push(t);
    }
    ),
    (e.prototype.addExposeMetadata = function(t) {
        this._exposeMetadatas.has(t.target) || this._exposeMetadatas.set(t.target, new Map()),
        this._exposeMetadatas.get(t.target).set(t.propertyName, t);
    }
    ),
    (e.prototype.addExcludeMetadata = function(t) {
        this._excludeMetadatas.has(t.target) || this._excludeMetadatas.set(t.target, new Map()),
        this._excludeMetadatas.get(t.target).set(t.propertyName, t);
    }
    ),
    (e.prototype.findTransformMetadatas = function(t, r, n) {
        return this.findMetadatas(this._transformMetadatas, t, r).filter(function(o) {
            return !o.options || (o.options.toClassOnly === !0 && o.options.toPlainOnly === !0) ? !0 : o.options.toClassOnly === !0 ? n === Be.CLASS_TO_CLASS || n === Be.PLAIN_TO_CLASS : o.options.toPlainOnly === !0 ? n === Be.CLASS_TO_PLAIN : !0;
        });
    }
    ),
    (e.prototype.findExcludeMetadata = function(t, r) {
        return this.findMetadata(this._excludeMetadatas, t, r);
    }
    ),
    (e.prototype.findExposeMetadata = function(t, r) {
        return this.findMetadata(this._exposeMetadatas, t, r);
    }
    ),
    (e.prototype.findExposeMetadataByCustomName = function(t, r) {
        return this.getExposedMetadatas(t).find(function(n) {
            return n.options && n.options.name === r;
        });
    }
    ),
    (e.prototype.findTypeMetadata = function(t, r) {
        return this.findMetadata(this._typeMetadatas, t, r);
    }
    ),
    (e.prototype.getStrategy = function(t) {
        var r = this._excludeMetadatas.get(t)
          , n = r && r.get(void 0)
          , o = this._exposeMetadatas.get(t)
          , a = o && o.get(void 0);
        return (n && a) || (!n && !a) ? "none" : n ? "excludeAll" : "exposeAll";
    }
    ),
    (e.prototype.getExposedMetadatas = function(t) {
        return this.getMetadata(this._exposeMetadatas, t);
    }
    ),
    (e.prototype.getExcludedMetadatas = function(t) {
        return this.getMetadata(this._excludeMetadatas, t);
    }
    ),
    (e.prototype.getExposedProperties = function(t, r) {
        return this.getExposedMetadatas(t).filter(function(n) {
            return !n.options || (n.options.toClassOnly === !0 && n.options.toPlainOnly === !0) ? !0 : n.options.toClassOnly === !0 ? r === Be.CLASS_TO_CLASS || r === Be.PLAIN_TO_CLASS : n.options.toPlainOnly === !0 ? r === Be.CLASS_TO_PLAIN : !0;
        }).map(function(n) {
            return n.propertyName;
        });
    }
    ),
    (e.prototype.getExcludedProperties = function(t, r) {
        return this.getExcludedMetadatas(t).filter(function(n) {
            return !n.options || (n.options.toClassOnly === !0 && n.options.toPlainOnly === !0) ? !0 : n.options.toClassOnly === !0 ? r === Be.CLASS_TO_CLASS || r === Be.PLAIN_TO_CLASS : n.options.toPlainOnly === !0 ? r === Be.CLASS_TO_PLAIN : !0;
        }).map(function(n) {
            return n.propertyName;
        });
    }
    ),
    (e.prototype.clear = function() {
        this._typeMetadatas.clear(),
        this._exposeMetadatas.clear(),
        this._excludeMetadatas.clear(),
        this._ancestorsMap.clear();
    }
    ),
    (e.prototype.getMetadata = function(t, r) {
        var n = t.get(r), o;
        n && (o = Array.from(n.values()).filter(function(d) {
            return d.propertyName !== void 0;
        }));
        for (var a = [], s = 0, i = this.getAncestors(r); s < i.length; s++) {
            var c = i[s]
              , l = t.get(c);
            if (l) {
                var f = Array.from(l.values()).filter(function(d) {
                    return d.propertyName !== void 0;
                });
                a.push.apply(a, f);
            }
        }
        return a.concat(o || []);
    }
    ),
    (e.prototype.findMetadata = function(t, r, n) {
        var o = t.get(r);
        if (o) {
            var a = o.get(n);
            if (a)
                return a;
        }
        for (var s = 0, i = this.getAncestors(r); s < i.length; s++) {
            var c = i[s]
              , l = t.get(c);
            if (l) {
                var f = l.get(n);
                if (f)
                    return f;
            }
        }
    }
    ),
    (e.prototype.findMetadatas = function(t, r, n) {
        var o = t.get(r), a;
        o && (a = o.get(n));
        for (var s = [], i = 0, c = this.getAncestors(r); i < c.length; i++) {
            var l = c[i]
              , f = t.get(l);
            f && f.has(n) && s.push.apply(s, f.get(n));
        }
        return s.slice().reverse().concat((a || []).slice().reverse());
    }
    ),
    (e.prototype.getAncestors = function(t) {
        if (!t)
            return [];
        if (!this._ancestorsMap.has(t)) {
            for (var r = [], n = Object.getPrototypeOf(t.prototype.constructor); typeof n.prototype < "u"; n = Object.getPrototypeOf(n.prototype.constructor))
                r.push(n);
            this._ancestorsMap.set(t, r);
        }
        return this._ancestorsMap.get(t);
    }
    ),
    e);
}
)()
  , at = new _j();
function $j() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof global < "u")
        return global;
    if (typeof window < "u")
        return window;
    if (typeof self < "u")
        return self;
}
function eN(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function";
}
var B2 = (globalThis && globalThis.__spreadArray) || function(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, a; n < o; n++)
            (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)),
            (a[n] = t[n]));
    return e.concat(a || Array.prototype.slice.call(t));
}
;
function tN(e) {
    var t = new e();
    return !(t instanceof Set) && !("push"in t) ? [] : t;
}
var Rn = (function() {
    function e(t, r) {
        (this.transformationType = t),
        (this.options = r),
        (this.recursionStack = new Set());
    }
    return ((e.prototype.transform = function(t, r, n, o, a, s) {
        var i = this;
        if ((s === void 0 && (s = 0),
        Array.isArray(r) || r instanceof Set)) {
            var c = o && this.transformationType === Be.PLAIN_TO_CLASS ? tN(o) : [];
            return (r.forEach(function(v, h) {
                var m = t ? t[h] : void 0;
                if (!i.options.enableCircularCheck || !i.isCircular(v)) {
                    var A = void 0;
                    if (typeof n != "function" && n && n.options && n.options.discriminator && n.options.discriminator.property && n.options.discriminator.subTypes) {
                        if (i.transformationType === Be.PLAIN_TO_CLASS) {
                            A = n.options.discriminator.subTypes.find(function(P) {
                                return P.name === v[n.options.discriminator.property];
                            });
                            var O = {
                                newObject: c,
                                object: v,
                                property: void 0
                            }
                              , b = n.typeFunction(O);
                            A === void 0 ? (A = b) : (A = A.value),
                            n.options.keepDiscriminatorProperty || delete v[n.options.discriminator.property];
                        }
                        i.transformationType === Be.CLASS_TO_CLASS && (A = v.constructor),
                        i.transformationType === Be.CLASS_TO_PLAIN && (v[n.options.discriminator.property] = n.options.discriminator.subTypes.find(function(P) {
                            return P.value === v.constructor;
                        }).name);
                    } else
                        A = n;
                    var D = i.transform(m, v, A, void 0, v instanceof Map, s + 1);
                    c instanceof Set ? c.add(D) : c.push(D);
                } else
                    i.transformationType === Be.CLASS_TO_CLASS && (c instanceof Set ? c.add(v) : c.push(v));
            }),
            c);
        } else {
            if (n === String && !a)
                return r == null ? r : String(r);
            if (n === Number && !a)
                return r == null ? r : Number(r);
            if (n === Boolean && !a)
                return r == null ? r : !!r;
            if ((n === Date || r instanceof Date) && !a)
                return r instanceof Date ? new Date(r.valueOf()) : r == null ? r : new Date(r);
            if ($j().Buffer && (n === Buffer || r instanceof Buffer) && !a)
                return r == null ? r : Buffer.from(r);
            if (eN(r) && !a)
                return new Promise(function(v, h) {
                    r.then(function(m) {
                        return v(i.transform(void 0, m, n, void 0, void 0, s + 1));
                    }, h);
                }
                );
            if (!a && r !== null && typeof r == "object" && typeof r.then == "function")
                return r;
            if (typeof r == "object" && r !== null) {
                !n && r.constructor !== Object && ((!Array.isArray(r) && r.constructor === Array) || (n = r.constructor)),
                !n && t && (n = t.constructor),
                this.options.enableCircularCheck && this.recursionStack.add(r);
                var l = this.getKeys(n, r, a)
                  , f = t || {};
                !t && (this.transformationType === Be.PLAIN_TO_CLASS || this.transformationType === Be.CLASS_TO_CLASS) && (a ? (f = new Map()) : n ? (f = new n()) : (f = {}));
                for (var d = function(v) {
                    if (v === "__proto__" || v === "constructor")
                        return "continue";
                    var h = v
                      , m = v
                      , A = v;
                    if (!u.options.ignoreDecorators && n) {
                        if (u.transformationType === Be.PLAIN_TO_CLASS) {
                            var O = at.findExposeMetadataByCustomName(n, v);
                            O && ((A = O.propertyName),
                            (m = O.propertyName));
                        } else if (u.transformationType === Be.CLASS_TO_PLAIN || u.transformationType === Be.CLASS_TO_CLASS) {
                            var O = at.findExposeMetadata(n, v);
                            O && O.options && O.options.name && (m = O.options.name);
                        }
                    }
                    var b = void 0;
                    u.transformationType === Be.PLAIN_TO_CLASS ? (b = r[h]) : r instanceof Map ? (b = r.get(h)) : r[h]instanceof Function ? (b = r[h]()) : (b = r[h]);
                    var D = void 0
                      , P = b instanceof Map;
                    if (n && a)
                        D = n;
                    else if (n) {
                        var Y = at.findTypeMetadata(n, A);
                        if (Y) {
                            var F = {
                                newObject: f,
                                object: r,
                                property: A
                            }
                              , X = Y.typeFunction ? Y.typeFunction(F) : Y.reflectedType;
                            Y.options && Y.options.discriminator && Y.options.discriminator.property && Y.options.discriminator.subTypes ? r[h]instanceof Array ? (D = Y) : (u.transformationType === Be.PLAIN_TO_CLASS && ((D = Y.options.discriminator.subTypes.find(function(R) {
                                if (b && b instanceof Object && (Y.options.discriminator.property in b))
                                    return (R.name === b[Y.options.discriminator.property]);
                            })),
                            D === void 0 ? (D = X) : (D = D.value),
                            Y.options.keepDiscriminatorProperty || (b && b instanceof Object && (Y.options.discriminator.property in b) && delete b[Y.options.discriminator.property])),
                            u.transformationType === Be.CLASS_TO_CLASS && (D = b.constructor),
                            u.transformationType === Be.CLASS_TO_PLAIN && b && (b[Y.options.discriminator.property] = Y.options.discriminator.subTypes.find(function(R) {
                                return R.value === b.constructor;
                            }).name)) : (D = X),
                            (P = P || Y.reflectedType === Map);
                        } else if (u.options.targetMaps)
                            u.options.targetMaps.filter(function(R) {
                                return R.target === n && !!R.properties[A];
                            }).forEach(function(R) {
                                return (D = R.properties[A]);
                            });
                        else if (u.options.enableImplicitConversion && u.transformationType === Be.PLAIN_TO_CLASS) {
                            var re = Reflect.getMetadata("design:type", n.prototype, A);
                            re && (D = re);
                        }
                    }
                    var k = Array.isArray(r[h]) ? u.getReflectedType(n, A) : void 0
                      , U = t ? t[h] : void 0;
                    if (f.constructor.prototype) {
                        var I = Object.getOwnPropertyDescriptor(f.constructor.prototype, m);
                        if ((u.transformationType === Be.PLAIN_TO_CLASS || u.transformationType === Be.CLASS_TO_CLASS) && ((I && !I.set) || f[m]instanceof Function))
                            return "continue";
                    }
                    if (!u.options.enableCircularCheck || !u.isCircular(b)) {
                        var Q = u.transformationType === Be.PLAIN_TO_CLASS ? m : v
                          , J = void 0;
                        u.transformationType === Be.CLASS_TO_PLAIN ? ((J = r[Q]),
                        (J = u.applyCustomTransformations(J, n, Q, r, u.transformationType)),
                        (J = r[Q] === J ? b : J),
                        (J = u.transform(U, J, D, k, P, s + 1))) : b === void 0 && u.options.exposeDefaultValues ? (J = f[m]) : ((J = u.transform(U, b, D, k, P, s + 1)),
                        (J = u.applyCustomTransformations(J, n, Q, r, u.transformationType))),
                        (J !== void 0 || u.options.exposeUnsetFields) && (f instanceof Map ? f.set(m, J) : (f[m] = J));
                    } else if (u.transformationType === Be.CLASS_TO_CLASS) {
                        var J = b;
                        (J = u.applyCustomTransformations(J, n, v, r, u.transformationType)),
                        (J !== void 0 || u.options.exposeUnsetFields) && (f instanceof Map ? f.set(m, J) : (f[m] = J));
                    }
                }, u = this, w = 0, y = l; w < y.length; w++) {
                    var x = y[w];
                    d(x);
                }
                return (this.options.enableCircularCheck && this.recursionStack.delete(r),
                f);
            } else
                return r;
        }
    }
    ),
    (e.prototype.applyCustomTransformations = function(t, r, n, o, a) {
        var s = this
          , i = at.findTransformMetadatas(r, n, this.transformationType);
        return (this.options.version !== void 0 && (i = i.filter(function(c) {
            return c.options ? s.checkVersion(c.options.since, c.options.until) : !0;
        })),
        this.options.groups && this.options.groups.length ? (i = i.filter(function(c) {
            return c.options ? s.checkGroups(c.options.groups) : !0;
        })) : (i = i.filter(function(c) {
            return (!c.options || !c.options.groups || !c.options.groups.length);
        })),
        i.forEach(function(c) {
            t = c.transformFn({
                value: t,
                key: n,
                obj: o,
                type: a,
                options: s.options,
            });
        }),
        t);
    }
    ),
    (e.prototype.isCircular = function(t) {
        return this.recursionStack.has(t);
    }
    ),
    (e.prototype.getReflectedType = function(t, r) {
        if (t) {
            var n = at.findTypeMetadata(t, r);
            return n ? n.reflectedType : void 0;
        }
    }
    ),
    (e.prototype.getKeys = function(t, r, n) {
        var o = this
          , a = at.getStrategy(t);
        a === "none" && (a = this.options.strategy || "exposeAll");
        var s = [];
        if (((a === "exposeAll" || n) && (r instanceof Map ? (s = Array.from(r.keys())) : (s = Object.keys(r))),
        n))
            return s;
        if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && t) {
            var i = at.getExposedProperties(t, this.transformationType)
              , c = at.getExcludedProperties(t, this.transformationType);
            s = B2(B2([], i, !0), c, !0);
        }
        if (!this.options.ignoreDecorators && t) {
            var i = at.getExposedProperties(t, this.transformationType);
            this.transformationType === Be.PLAIN_TO_CLASS && (i = i.map(function(d) {
                var u = at.findExposeMetadata(t, d);
                return u && u.options && u.options.name ? u.options.name : d;
            })),
            this.options.excludeExtraneousValues ? (s = i) : (s = s.concat(i));
            var l = at.getExcludedProperties(t, this.transformationType);
            l.length > 0 && (s = s.filter(function(d) {
                return !l.includes(d);
            })),
            this.options.version !== void 0 && (s = s.filter(function(d) {
                var u = at.findExposeMetadata(t, d);
                return !u || !u.options ? !0 : o.checkVersion(u.options.since, u.options.until);
            })),
            this.options.groups && this.options.groups.length ? (s = s.filter(function(d) {
                var u = at.findExposeMetadata(t, d);
                return !u || !u.options ? !0 : o.checkGroups(u.options.groups);
            })) : (s = s.filter(function(d) {
                var u = at.findExposeMetadata(t, d);
                return (!u || !u.options || !u.options.groups || !u.options.groups.length);
            }));
        }
        return (this.options.excludePrefixes && this.options.excludePrefixes.length && (s = s.filter(function(f) {
            return o.options.excludePrefixes.every(function(d) {
                return f.substr(0, d.length) !== d;
            });
        })),
        (s = s.filter(function(f, d, u) {
            return u.indexOf(f) === d;
        })),
        s);
    }
    ),
    (e.prototype.checkVersion = function(t, r) {
        var n = !0;
        return (n && t && (n = this.options.version >= t),
        n && r && (n = this.options.version < r),
        n);
    }
    ),
    (e.prototype.checkGroups = function(t) {
        return t ? this.options.groups.some(function(r) {
            return t.includes(r);
        }) : !0;
    }
    ),
    e);
}
)()
  , Xn = {
    enableCircularCheck: !1,
    enableImplicitConversion: !1,
    excludeExtraneousValues: !1,
    excludePrefixes: void 0,
    exposeDefaultValues: !1,
    exposeUnsetFields: !0,
    groups: void 0,
    ignoreDecorators: !1,
    strategy: void 0,
    targetMaps: void 0,
    version: void 0,
}
  , Pt = (globalThis && globalThis.__assign) || function() {
    return ((Pt = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
    }
    ),
    Pt.apply(this, arguments));
}
  , rN = (function() {
    function e() {}
    return ((e.prototype.instanceToPlain = function(t, r) {
        var n = new Rn(Be.CLASS_TO_PLAIN,Pt(Pt({}, Xn), r));
        return n.transform(void 0, t, void 0, void 0, void 0, void 0);
    }
    ),
    (e.prototype.classToPlainFromExist = function(t, r, n) {
        var o = new Rn(Be.CLASS_TO_PLAIN,Pt(Pt({}, Xn), n));
        return o.transform(r, t, void 0, void 0, void 0, void 0);
    }
    ),
    (e.prototype.plainToInstance = function(t, r, n) {
        var o = new Rn(Be.PLAIN_TO_CLASS,Pt(Pt({}, Xn), n));
        return o.transform(void 0, r, t, void 0, void 0, void 0);
    }
    ),
    (e.prototype.plainToClassFromExist = function(t, r, n) {
        var o = new Rn(Be.PLAIN_TO_CLASS,Pt(Pt({}, Xn), n));
        return o.transform(t, r, void 0, void 0, void 0, void 0);
    }
    ),
    (e.prototype.instanceToInstance = function(t, r) {
        var n = new Rn(Be.CLASS_TO_CLASS,Pt(Pt({}, Xn), r));
        return n.transform(void 0, t, void 0, void 0, void 0, void 0);
    }
    ),
    (e.prototype.classToClassFromExist = function(t, r, n) {
        var o = new Rn(Be.CLASS_TO_CLASS,Pt(Pt({}, Xn), n));
        return o.transform(r, t, void 0, void 0, void 0, void 0);
    }
    ),
    (e.prototype.serialize = function(t, r) {
        return JSON.stringify(this.instanceToPlain(t, r));
    }
    ),
    (e.prototype.deserialize = function(t, r, n) {
        var o = JSON.parse(r);
        return this.plainToInstance(t, o, n);
    }
    ),
    (e.prototype.deserializeArray = function(t, r, n) {
        var o = JSON.parse(r);
        return this.plainToInstance(t, o, n);
    }
    ),
    e);
}
)();
function za(e) {
    return (e === void 0 && (e = {}),
    function(t, r) {
        at.addExcludeMetadata({
            target: t instanceof Function ? t : t.constructor,
            propertyName: r,
            options: e,
        });
    }
    );
}
function B(e) {
    return (e === void 0 && (e = {}),
    function(t, r) {
        at.addExposeMetadata({
            target: t instanceof Function ? t : t.constructor,
            propertyName: r,
            options: e,
        });
    }
    );
}
function Ha(e, t) {
    return (t === void 0 && (t = {}),
    function(r, n) {
        at.addTransformMetadata({
            target: r.constructor,
            propertyName: n,
            transformFn: e,
            options: t,
        });
    }
    );
}
function Wt(e, t) {
    return (t === void 0 && (t = {}),
    function(r, n) {
        var o = Reflect.getMetadata("design:type", r, n);
        at.addTypeMetadata({
            target: r.constructor,
            propertyName: n,
            reflectedType: o,
            typeFunction: e,
            options: t,
        });
    }
    );
}
var pf = new rN();
function hf(e, t) {
    return pf.instanceToPlain(e, t);
}
function Ne(e, t, r) {
    return pf.plainToInstance(e, t, r);
}
var $c = {
    exports: {}
}
  , mf = function(t, r) {
    return function() {
        for (var o = new Array(arguments.length), a = 0; a < o.length; a++)
            o[a] = arguments[a];
        return t.apply(r, o);
    }
    ;
}
  , nN = mf
  , En = Object.prototype.toString;
function e0(e) {
    return En.call(e) === "[object Array]";
}
function W1(e) {
    return typeof e > "u";
}
function oN(e) {
    return (e !== null && !W1(e) && e.constructor !== null && !W1(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e));
}
function aN(e) {
    return En.call(e) === "[object ArrayBuffer]";
}
function sN(e) {
    return typeof FormData < "u" && e instanceof FormData;
}
function iN(e) {
    var t;
    return (typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t);
}
function cN(e) {
    return typeof e == "string";
}
function lN(e) {
    return typeof e == "number";
}
function gf(e) {
    return e !== null && typeof e == "object";
}
function Ka(e) {
    if (En.call(e) !== "[object Object]")
        return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
}
function uN(e) {
    return En.call(e) === "[object Date]";
}
function fN(e) {
    return En.call(e) === "[object File]";
}
function dN(e) {
    return En.call(e) === "[object Blob]";
}
function vf(e) {
    return En.call(e) === "[object Function]";
}
function pN(e) {
    return gf(e) && vf(e.pipe);
}
function hN(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function mN(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function gN() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function t0(e, t) {
    if (!(e === null || typeof e > "u"))
        if ((typeof e != "object" && (e = [e]),
        e0(e)))
            for (var r = 0, n = e.length; r < n; r++)
                t.call(null, e[r], r, e);
        else
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}
function Q1() {
    var e = {};
    function t(o, a) {
        Ka(e[a]) && Ka(o) ? (e[a] = Q1(e[a], o)) : Ka(o) ? (e[a] = Q1({}, o)) : e0(o) ? (e[a] = o.slice()) : (e[a] = o);
    }
    for (var r = 0, n = arguments.length; r < n; r++)
        t0(arguments[r], t);
    return e;
}
function vN(e, t, r) {
    return (t0(t, function(o, a) {
        r && typeof o == "function" ? (e[a] = nN(o, r)) : (e[a] = o);
    }),
    e);
}
function wN(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e;
}
var Ft = {
    isArray: e0,
    isArrayBuffer: aN,
    isBuffer: oN,
    isFormData: sN,
    isArrayBufferView: iN,
    isString: cN,
    isNumber: lN,
    isObject: gf,
    isPlainObject: Ka,
    isUndefined: W1,
    isDate: uN,
    isFile: fN,
    isBlob: dN,
    isFunction: vf,
    isStream: pN,
    isURLSearchParams: hN,
    isStandardBrowserEnv: gN,
    forEach: t0,
    merge: Q1,
    extend: vN,
    trim: mN,
    stripBOM: wN,
}
  , Zn = Ft;
function T2(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wf = function(t, r, n) {
    if (!r)
        return t;
    var o;
    if (n)
        o = n(r);
    else if (Zn.isURLSearchParams(r))
        o = r.toString();
    else {
        var a = [];
        Zn.forEach(r, function(c, l) {
            c === null || typeof c > "u" || (Zn.isArray(c) ? (l = l + "[]") : (c = [c]),
            Zn.forEach(c, function(d) {
                Zn.isDate(d) ? (d = d.toISOString()) : Zn.isObject(d) && (d = JSON.stringify(d)),
                a.push(T2(l) + "=" + T2(d));
            }));
        }),
        (o = a.join("&"));
    }
    if (o) {
        var s = t.indexOf("#");
        s !== -1 && (t = t.slice(0, s)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return t;
}
  , yN = Ft;
function ai() {
    this.handlers = [];
}
ai.prototype.use = function(t, r, n) {
    return (this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1);
}
;
ai.prototype.eject = function(t) {
    this.handlers[t] && (this.handlers[t] = null);
}
;
ai.prototype.forEach = function(t) {
    yN.forEach(this.handlers, function(n) {
        n !== null && t(n);
    });
}
;
var xN = ai, ON = Ft, AN = function(t, r) {
    ON.forEach(t, function(o, a) {
        a !== r && a.toUpperCase() === r.toUpperCase() && ((t[r] = o),
        delete t[a]);
    });
}, yf = function(t, r, n, o, a) {
    return ((t.config = r),
    n && (t.code = n),
    (t.request = o),
    (t.response = a),
    (t.isAxiosError = !0),
    (t.toJSON = function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
        };
    }
    ),
    t);
}, Ti, C2;
function xf() {
    if (C2)
        return Ti;
    C2 = 1;
    var e = yf;
    return ((Ti = function(r, n, o, a, s) {
        var i = new Error(r);
        return e(i, n, o, a, s);
    }
    ),
    Ti);
}
var Ci, G2;
function bN() {
    if (G2)
        return Ci;
    G2 = 1;
    var e = xf();
    return ((Ci = function(r, n, o) {
        var a = o.config.validateStatus;
        !o.status || !a || a(o.status) ? r(o) : n(e("Request failed with status code " + o.status, o.config, null, o.request, o));
    }
    ),
    Ci);
}
var Gi, Y2;
function DN() {
    if (Y2)
        return Gi;
    Y2 = 1;
    var e = Ft;
    return ((Gi = e.isStandardBrowserEnv() ? (function() {
        return {
            write: function(n, o, a, s, i, c) {
                var l = [];
                l.push(n + "=" + encodeURIComponent(o)),
                e.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()),
                e.isString(s) && l.push("path=" + s),
                e.isString(i) && l.push("domain=" + i),
                c === !0 && l.push("secure"),
                (document.cookie = l.join("; "));
            },
            read: function(n) {
                var o = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return o ? decodeURIComponent(o[3]) : null;
            },
            remove: function(n) {
                this.write(n, "", Date.now() - 864e5);
            },
        };
    }
    )() : (function() {
        return {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {},
        };
    }
    )()),
    Gi);
}
var Yi, F2;
function MN() {
    return (F2 || ((F2 = 1),
    (Yi = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    }
    )),
    Yi);
}
var Fi, I2;
function PN() {
    return (I2 || ((I2 = 1),
    (Fi = function(t, r) {
        return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
    }
    )),
    Fi);
}
var Ii, L2;
function zN() {
    if (L2)
        return Ii;
    L2 = 1;
    var e = MN()
      , t = PN();
    return ((Ii = function(n, o) {
        return n && !e(o) ? t(n, o) : o;
    }
    ),
    Ii);
}
var Li, R2;
function HN() {
    if (R2)
        return Li;
    R2 = 1;
    var e = Ft
      , t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent", ];
    return ((Li = function(n) {
        var o = {}, a, s, i;
        return (n && e.forEach(n.split(`
`), function(l) {
            if (((i = l.indexOf(":")),
            (a = e.trim(l.substr(0, i)).toLowerCase()),
            (s = e.trim(l.substr(i + 1))),
            a)) {
                if (o[a] && t.indexOf(a) >= 0)
                    return;
                a === "set-cookie" ? (o[a] = (o[a] ? o[a] : []).concat([s])) : (o[a] = o[a] ? o[a] + ", " + s : s);
            }
        }),
        o);
    }
    ),
    Li);
}
var Ri, X2;
function jN() {
    if (X2)
        return Ri;
    X2 = 1;
    var e = Ft;
    return ((Ri = e.isStandardBrowserEnv() ? (function() {
        var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), o;
        function a(s) {
            var i = s;
            return (r && (n.setAttribute("href", i),
            (i = n.href)),
            n.setAttribute("href", i),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            });
        }
        return ((o = a(window.location.href)),
        function(i) {
            var c = e.isString(i) ? a(i) : i;
            return c.protocol === o.protocol && c.host === o.host;
        }
        );
    }
    )() : (function() {
        return function() {
            return !0;
        }
        ;
    }
    )()),
    Ri);
}
var Xi, Z2;
function k2() {
    if (Z2)
        return Xi;
    Z2 = 1;
    var e = Ft
      , t = bN()
      , r = DN()
      , n = wf
      , o = zN()
      , a = HN()
      , s = jN()
      , i = xf();
    return ((Xi = function(l) {
        return new Promise(function(d, u) {
            var w = l.data
              , y = l.headers
              , x = l.responseType;
            e.isFormData(w) && delete y["Content-Type"];
            var v = new XMLHttpRequest();
            if (l.auth) {
                var h = l.auth.username || ""
                  , m = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
                y.Authorization = "Basic " + btoa(h + ":" + m);
            }
            var A = o(l.baseURL, l.url);
            v.open(l.method.toUpperCase(), n(A, l.params, l.paramsSerializer), !0),
            (v.timeout = l.timeout);
            function O() {
                if (v) {
                    var D = "getAllResponseHeaders"in v ? a(v.getAllResponseHeaders()) : null
                      , P = !x || x === "text" || x === "json" ? v.responseText : v.response
                      , Y = {
                        data: P,
                        status: v.status,
                        statusText: v.statusText,
                        headers: D,
                        config: l,
                        request: v,
                    };
                    t(d, u, Y),
                    (v = null);
                }
            }
            if (("onloadend"in v ? (v.onloadend = O) : (v.onreadystatechange = function() {
                !v || v.readyState !== 4 || (v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0)) || setTimeout(O);
            }
            ),
            (v.onabort = function() {
                v && (u(i("Request aborted", l, "ECONNABORTED", v)),
                (v = null));
            }
            ),
            (v.onerror = function() {
                u(i("Network Error", l, null, v)),
                (v = null);
            }
            ),
            (v.ontimeout = function() {
                var P = "timeout of " + l.timeout + "ms exceeded";
                l.timeoutErrorMessage && (P = l.timeoutErrorMessage),
                u(i(P, l, l.transitional && l.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", v)),
                (v = null);
            }
            ),
            e.isStandardBrowserEnv())) {
                var b = (l.withCredentials || s(A)) && l.xsrfCookieName ? r.read(l.xsrfCookieName) : void 0;
                b && (y[l.xsrfHeaderName] = b);
            }
            "setRequestHeader"in v && e.forEach(y, function(P, Y) {
                typeof w > "u" && Y.toLowerCase() === "content-type" ? delete y[Y] : v.setRequestHeader(Y, P);
            }),
            e.isUndefined(l.withCredentials) || (v.withCredentials = !!l.withCredentials),
            x && x !== "json" && (v.responseType = l.responseType),
            typeof l.onDownloadProgress == "function" && v.addEventListener("progress", l.onDownloadProgress),
            typeof l.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", l.onUploadProgress),
            l.cancelToken && l.cancelToken.promise.then(function(P) {
                v && (v.abort(),
                u(P),
                (v = null));
            }),
            w || (w = null),
            v.send(w);
        }
        );
    }
    ),
    Xi);
}
var ft = Ft
  , U2 = AN
  , NN = yf
  , EN = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function S2(e, t) {
    !ft.isUndefined(e) && ft.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function BN() {
    var e;
    return ((typeof XMLHttpRequest < "u" || (typeof process < "u" && Object.prototype.toString.call(process) === "[object process]")) && (e = k2()),
    e);
}
function TN(e, t, r) {
    if (ft.isString(e))
        try {
            return (t || JSON.parse)(e),
            ft.trim(e);
        } catch (n) {
            if (n.name !== "SyntaxError")
                throw n;
        }
    return (r || JSON.stringify)(e);
}
var si = {
    transitional: {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    adapter: BN(),
    transformRequest: [function(t, r) {
        return (U2(r, "Accept"),
        U2(r, "Content-Type"),
        ft.isFormData(t) || ft.isArrayBuffer(t) || ft.isBuffer(t) || ft.isStream(t) || ft.isFile(t) || ft.isBlob(t) ? t : ft.isArrayBufferView(t) ? t.buffer : ft.isURLSearchParams(t) ? (S2(r, "application/x-www-form-urlencoded;charset=utf-8"),
        t.toString()) : ft.isObject(t) || (r && r["Content-Type"] === "application/json") ? (S2(r, "application/json"),
        TN(t)) : t);
    }
    , ],
    transformResponse: [function(t) {
        var r = this.transitional
          , n = r && r.silentJSONParsing
          , o = r && r.forcedJSONParsing
          , a = !n && this.responseType === "json";
        if (a || (o && ft.isString(t) && t.length))
            try {
                return JSON.parse(t);
            } catch (s) {
                if (a)
                    throw s.name === "SyntaxError" ? NN(s, this, "E_JSON_PARSE") : s;
            }
        return t;
    }
    , ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function(t) {
        return t >= 200 && t < 300;
    },
};
si.headers = {
    common: {
        Accept: "application/json, text/plain, */*"
    }
};
ft.forEach(["delete", "get", "head"], function(t) {
    si.headers[t] = {};
});
ft.forEach(["post", "put", "patch"], function(t) {
    si.headers[t] = ft.merge(EN);
});
var r0 = si, CN = Ft, GN = r0, YN = function(t, r, n) {
    var o = this || GN;
    return (CN.forEach(n, function(s) {
        t = s.call(o, t, r);
    }),
    t);
}, Zi, W2;
function Of() {
    return (W2 || ((W2 = 1),
    (Zi = function(t) {
        return !!(t && t.__CANCEL__);
    }
    )),
    Zi);
}
var Q2 = Ft
  , ki = YN
  , FN = Of()
  , IN = r0;
function Ui(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
}
var LN = function(t) {
    Ui(t),
    (t.headers = t.headers || {}),
    (t.data = ki.call(t, t.data, t.headers, t.transformRequest)),
    (t.headers = Q2.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
    Q2.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(o) {
        delete t.headers[o];
    });
    var r = t.adapter || IN.adapter;
    return r(t).then(function(o) {
        return (Ui(t),
        (o.data = ki.call(t, o.data, o.headers, t.transformResponse)),
        o);
    }, function(o) {
        return (FN(o) || (Ui(t),
        o && o.response && (o.response.data = ki.call(t, o.response.data, o.response.headers, t.transformResponse))),
        Promise.reject(o));
    });
}
  , gt = Ft
  , Af = function(t, r) {
    r = r || {};
    var n = {}
      , o = ["url", "method", "data"]
      , a = ["headers", "auth", "proxy", "params"]
      , s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding", ]
      , i = ["validateStatus"];
    function c(u, w) {
        return gt.isPlainObject(u) && gt.isPlainObject(w) ? gt.merge(u, w) : gt.isPlainObject(w) ? gt.merge({}, w) : gt.isArray(w) ? w.slice() : w;
    }
    function l(u) {
        gt.isUndefined(r[u]) ? gt.isUndefined(t[u]) || (n[u] = c(void 0, t[u])) : (n[u] = c(t[u], r[u]));
    }
    gt.forEach(o, function(w) {
        gt.isUndefined(r[w]) || (n[w] = c(void 0, r[w]));
    }),
    gt.forEach(a, l),
    gt.forEach(s, function(w) {
        gt.isUndefined(r[w]) ? gt.isUndefined(t[w]) || (n[w] = c(void 0, t[w])) : (n[w] = c(void 0, r[w]));
    }),
    gt.forEach(i, function(w) {
        w in r ? (n[w] = c(t[w], r[w])) : w in t && (n[w] = c(void 0, t[w]));
    });
    var f = o.concat(a).concat(s).concat(i)
      , d = Object.keys(t).concat(Object.keys(r)).filter(function(w) {
        return f.indexOf(w) === -1;
    });
    return gt.forEach(d, l),
    n;
};
const RN = "axios"
  , XN = "0.21.4"
  , ZN = "Promise based HTTP client for the browser and node.js"
  , kN = "index.js"
  , UN = {
    test: "grunt test",
    start: "node ./sandbox/server.js",
    build: "NODE_ENV=production grunt build",
    preversion: "npm test",
    version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
    postversion: "git push && git push --tags",
    examples: "node ./examples/server.js",
    coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    fix: "eslint --fix lib/**/*.js",
}
  , SN = {
    type: "git",
    url: "https://github.com/axios/axios.git"
}
  , WN = ["xhr", "http", "ajax", "promise", "node"]
  , QN = "Matt Zabriskie"
  , JN = "MIT"
  , VN = {
    url: "https://github.com/axios/axios/issues"
}
  , qN = "https://axios-http.com"
  , KN = {
    coveralls: "^3.0.0",
    "es6-promise": "^4.2.4",
    grunt: "^1.3.0",
    "grunt-banner": "^0.6.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-clean": "^1.1.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-eslint": "^23.0.0",
    "grunt-karma": "^4.0.0",
    "grunt-mocha-test": "^0.13.3",
    "grunt-ts": "^6.0.0-beta.19",
    "grunt-webpack": "^4.0.2",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.4.1",
    karma: "^6.3.2",
    "karma-chrome-launcher": "^3.1.0",
    "karma-firefox-launcher": "^2.1.0",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^4.3.6",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.8",
    "karma-webpack": "^4.0.2",
    "load-grunt-tasks": "^3.5.2",
    minimist: "^1.2.0",
    mocha: "^8.2.1",
    sinon: "^4.5.0",
    "terser-webpack-plugin": "^4.2.3",
    typescript: "^4.0.5",
    "url-search-params": "^0.10.0",
    webpack: "^4.44.2",
    "webpack-dev-server": "^3.11.0",
}
  , _N = {
    "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}
  , $N = "dist/axios.min.js"
  , eE = "dist/axios.min.js"
  , tE = "./index.d.ts"
  , rE = {
    "follow-redirects": "^1.14.0"
}
  , nE = [{
    path: "./dist/axios.min.js",
    threshold: "5kB"
}]
  , oE = {
    name: RN,
    version: XN,
    description: ZN,
    main: kN,
    scripts: UN,
    repository: SN,
    keywords: WN,
    author: QN,
    license: JN,
    bugs: VN,
    homepage: qN,
    devDependencies: KN,
    browser: _N,
    jsdelivr: $N,
    unpkg: eE,
    typings: tE,
    dependencies: rE,
    bundlesize: nE,
};
var bf = oE
  , n0 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
    n0[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    }
    ;
});
var J2 = {}
  , aE = bf.version.split(".");
function Df(e, t) {
    for (var r = t ? t.split(".") : aE, n = e.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o])
            return !0;
        if (r[o] < n[o])
            return !1;
    }
    return !1;
}
n0.transitional = function(t, r, n) {
    var o = r && Df(r);
    function a(s, i) {
        return ("[Axios v" + bf.version + "] Transitional option '" + s + "'" + i + (n ? ". " + n : ""));
    }
    return function(s, i, c) {
        if (t === !1)
            throw new Error(a(i, " has been removed in " + r));
        return (o && !J2[i] && ((J2[i] = !0),
        console.warn(a(i, " has been deprecated since v" + r + " and will be removed in the near future"))),
        t ? t(s, i, c) : !0);
    }
    ;
}
;
function sE(e, t, r) {
    if (typeof e != "object")
        throw new TypeError("options must be an object");
    for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
        var a = n[o]
          , s = t[a];
        if (s) {
            var i = e[a]
              , c = i === void 0 || s(i, a, e);
            if (c !== !0)
                throw new TypeError("option " + a + " must be " + c);
            continue;
        }
        if (r !== !0)
            throw Error("Unknown option " + a);
    }
}
var iE = {
    isOlderVersion: Df,
    assertOptions: sE,
    validators: n0
}
  , Mf = Ft
  , cE = wf
  , V2 = xN
  , q2 = LN
  , ii = Af
  , Pf = iE
  , kn = Pf.validators;
function ja(e) {
    (this.defaults = e),
    (this.interceptors = {
        request: new V2(),
        response: new V2()
    });
}
ja.prototype.request = function(t) {
    typeof t == "string" ? ((t = arguments[1] || {}),
    (t.url = arguments[0])) : (t = t || {}),
    (t = ii(this.defaults, t)),
    t.method ? (t.method = t.method.toLowerCase()) : this.defaults.method ? (t.method = this.defaults.method.toLowerCase()) : (t.method = "get");
    var r = t.transitional;
    r !== void 0 && Pf.assertOptions(r, {
        silentJSONParsing: kn.transitional(kn.boolean, "1.0.0"),
        forcedJSONParsing: kn.transitional(kn.boolean, "1.0.0"),
        clarifyTimeoutError: kn.transitional(kn.boolean, "1.0.0"),
    }, !1);
    var n = []
      , o = !0;
    this.interceptors.request.forEach(function(u) {
        (typeof u.runWhen == "function" && u.runWhen(t) === !1) || ((o = o && u.synchronous),
        n.unshift(u.fulfilled, u.rejected));
    });
    var a = [];
    this.interceptors.response.forEach(function(u) {
        a.push(u.fulfilled, u.rejected);
    });
    var s;
    if (!o) {
        var i = [q2, void 0];
        for (Array.prototype.unshift.apply(i, n),
        i = i.concat(a),
        s = Promise.resolve(t); i.length;
        )
            s = s.then(i.shift(), i.shift());
        return s;
    }
    for (var c = t; n.length; ) {
        var l = n.shift()
          , f = n.shift();
        try {
            c = l(c);
        } catch (d) {
            f(d);
            break;
        }
    }
    try {
        s = q2(c);
    } catch (d) {
        return Promise.reject(d);
    }
    for (; a.length; )
        s = s.then(a.shift(), a.shift());
    return s;
}
;
ja.prototype.getUri = function(t) {
    return ((t = ii(this.defaults, t)),
    cE(t.url, t.params, t.paramsSerializer).replace(/^\?/, ""));
}
;
Mf.forEach(["delete", "get", "head", "options"], function(t) {
    ja.prototype[t] = function(r, n) {
        return this.request(ii(n || {}, {
            method: t,
            url: r,
            data: (n || {}).data
        }));
    }
    ;
});
Mf.forEach(["post", "put", "patch"], function(t) {
    ja.prototype[t] = function(r, n, o) {
        return this.request(ii(o || {}, {
            method: t,
            url: r,
            data: n
        }));
    }
    ;
});
var lE = ja, Si, K2;
function zf() {
    if (K2)
        return Si;
    K2 = 1;
    function e(t) {
        this.message = t;
    }
    return ((e.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }
    ),
    (e.prototype.__CANCEL__ = !0),
    (Si = e),
    Si);
}
var Wi, _2;
function uE() {
    if (_2)
        return Wi;
    _2 = 1;
    var e = zf();
    function t(r) {
        if (typeof r != "function")
            throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function(s) {
            n = s;
        }
        );
        var o = this;
        r(function(s) {
            o.reason || ((o.reason = new e(s)),
            n(o.reason));
        });
    }
    return ((t.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason;
    }
    ),
    (t.source = function() {
        var n, o = new t(function(s) {
            n = s;
        }
        );
        return {
            token: o,
            cancel: n
        };
    }
    ),
    (Wi = t),
    Wi);
}
var Qi, $2;
function fE() {
    return ($2 || (($2 = 1),
    (Qi = function(t) {
        return function(n) {
            return t.apply(null, n);
        }
        ;
    }
    )),
    Qi);
}
var Ji, eu;
function dE() {
    return (eu || ((eu = 1),
    (Ji = function(t) {
        return typeof t == "object" && t.isAxiosError === !0;
    }
    )),
    Ji);
}
var tu = Ft
  , pE = mf
  , _a = lE
  , hE = Af
  , mE = r0;
function Hf(e) {
    var t = new _a(e)
      , r = pE(_a.prototype.request, t);
    return tu.extend(r, _a.prototype, t),
    tu.extend(r, t),
    r;
}
var Vt = Hf(mE);
Vt.Axios = _a;
Vt.create = function(t) {
    return Hf(hE(Vt.defaults, t));
}
;
Vt.Cancel = zf();
Vt.CancelToken = uE();
Vt.isCancel = Of();
Vt.all = function(t) {
    return Promise.all(t);
}
;
Vt.spread = fE();
Vt.isAxiosError = dE();
$c.exports = Vt;
$c.exports.default = Vt;
var gE = $c.exports
  , vE = gE;
const wE = $r(vE);
var yE = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
    if (typeof Symbol.iterator == "symbol")
        return !0;
    var t = {}
      , r = Symbol("test")
      , n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
        return !1;
    var o = 42;
    t[r] = o;
    for (r in t)
        return !1;
    if ((typeof Object.keys == "function" && Object.keys(t).length !== 0) || (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0))
        return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
        return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(t, r);
        if (s.value !== o || s.enumerable !== !0)
            return !1;
    }
    return !0;
}, ru = typeof Symbol < "u" && Symbol, xE = yE, OE = function() {
    return typeof ru != "function" || typeof Symbol != "function" || typeof ru("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : xE();
}, AE = "Function.prototype.bind called on incompatible ", Vi = Array.prototype.slice, bE = Object.prototype.toString, DE = "[object Function]", ME = function(t) {
    var r = this;
    if (typeof r != "function" || bE.call(r) !== DE)
        throw new TypeError(AE + r);
    for (var n = Vi.call(arguments, 1), o, a = function() {
        if (this instanceof o) {
            var f = r.apply(this, n.concat(Vi.call(arguments)));
            return Object(f) === f ? f : this;
        } else
            return r.apply(t, n.concat(Vi.call(arguments)));
    }, s = Math.max(0, r.length - n.length), i = [], c = 0; c < s; c++)
        i.push("$" + c);
    if (((o = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")(a)),
    r.prototype)) {
        var l = function() {};
        (l.prototype = r.prototype),
        (o.prototype = new l()),
        (l.prototype = null);
    }
    return o;
}, PE = ME, o0 = Function.prototype.bind || PE, zE = o0, HE = zE.call(Function.call, Object.prototype.hasOwnProperty), Ie, wa = SyntaxError, jf = Function, no = TypeError, qi = function(e) {
    try {
        return jf('"use strict"; return (' + e + ").constructor;")();
    } catch {}
}, An = Object.getOwnPropertyDescriptor;
if (An)
    try {
        An({}, "");
    } catch {
        An = null;
    }
var Ki = function() {
    throw new no();
}
  , jE = An ? (function() {
    try {
        return arguments.callee,
        Ki;
    } catch {
        try {
            return An(arguments, "callee").get;
        } catch {
            return Ki;
        }
    }
}
)() : Ki
  , Un = OE()
  , Lr = Object.getPrototypeOf || function(e) {
    return e.__proto__;
}
  , Jn = {}
  , NE = typeof Uint8Array > "u" ? Ie : Lr(Uint8Array)
  , oo = {
    "%AggregateError%": typeof AggregateError > "u" ? Ie : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ie : ArrayBuffer,
    "%ArrayIteratorPrototype%": Un ? Lr([][Symbol.iterator]()) : Ie,
    "%AsyncFromSyncIteratorPrototype%": Ie,
    "%AsyncFunction%": Jn,
    "%AsyncGenerator%": Jn,
    "%AsyncGeneratorFunction%": Jn,
    "%AsyncIteratorPrototype%": Jn,
    "%Atomics%": typeof Atomics > "u" ? Ie : Atomics,
    "%BigInt%": typeof BigInt > "u" ? Ie : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? Ie : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? Ie : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? Ie : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Ie : FinalizationRegistry,
    "%Function%": jf,
    "%GeneratorFunction%": Jn,
    "%Int8Array%": typeof Int8Array > "u" ? Ie : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? Ie : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? Ie : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Un ? Lr(Lr([][Symbol.iterator]())) : Ie,
    "%JSON%": typeof JSON == "object" ? JSON : Ie,
    "%Map%": typeof Map > "u" ? Ie : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !Un ? Ie : Lr(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? Ie : Promise,
    "%Proxy%": typeof Proxy > "u" ? Ie : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? Ie : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? Ie : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !Un ? Ie : Lr(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ie : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Un ? Lr(""[Symbol.iterator]()) : Ie,
    "%Symbol%": Un ? Symbol : Ie,
    "%SyntaxError%": wa,
    "%ThrowTypeError%": jE,
    "%TypedArray%": NE,
    "%TypeError%": no,
    "%Uint8Array%": typeof Uint8Array > "u" ? Ie : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Ie : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? Ie : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? Ie : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? Ie : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? Ie : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? Ie : WeakSet,
}
  , EE = function e(t) {
    var r;
    if (t === "%AsyncFunction%")
        r = qi("async function () {}");
    else if (t === "%GeneratorFunction%")
        r = qi("function* () {}");
    else if (t === "%AsyncGeneratorFunction%")
        r = qi("async function* () {}");
    else if (t === "%AsyncGenerator%") {
        var n = e("%AsyncGeneratorFunction%");
        n && (r = n.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
        var o = e("%AsyncGenerator%");
        o && (r = Lr(o.prototype));
    }
    return (oo[t] = r),
    r;
}
  , nu = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype", ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
}
  , ci = o0
  , vs = HE
  , BE = ci.call(Function.call, Array.prototype.concat)
  , TE = ci.call(Function.apply, Array.prototype.splice)
  , ou = ci.call(Function.call, String.prototype.replace)
  , ws = ci.call(Function.call, String.prototype.slice)
  , CE = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
  , GE = /\\(\\)?/g
  , YE = function(t) {
    var r = ws(t, 0, 1)
      , n = ws(t, -1);
    if (r === "%" && n !== "%")
        throw new wa("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
        throw new wa("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return (ou(t, CE, function(a, s, i, c) {
        o[o.length] = i ? ou(c, GE, "$1") : s || a;
    }),
    o);
}
  , FE = function(t, r) {
    var n = t, o;
    if ((vs(nu, n) && ((o = nu[n]),
    (n = "%" + o[0] + "%")),
    vs(oo, n))) {
        var a = oo[n];
        if ((a === Jn && (a = EE(n)),
        typeof a > "u" && !r))
            throw new no("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
            alias: o,
            name: n,
            value: a
        };
    }
    throw new wa("intrinsic " + t + " does not exist!");
}
  , a0 = function(t, r) {
    if (typeof t != "string" || t.length === 0)
        throw new no("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
        throw new no('"allowMissing" argument must be a boolean');
    var n = YE(t)
      , o = n.length > 0 ? n[0] : ""
      , a = FE("%" + o + "%", r)
      , s = a.name
      , i = a.value
      , c = !1
      , l = a.alias;
    l && ((o = l[0]),
    TE(n, BE([0, 1], l)));
    for (var f = 1, d = !0; f < n.length; f += 1) {
        var u = n[f]
          , w = ws(u, 0, 1)
          , y = ws(u, -1);
        if ((w === '"' || w === "'" || w === "`" || y === '"' || y === "'" || y === "`") && w !== y)
            throw new wa("property names with quotes must have matching quotes");
        if (((u === "constructor" || !d) && (c = !0),
        (o += "." + u),
        (s = "%" + o + "%"),
        vs(oo, s)))
            i = oo[s];
        else if (i != null) {
            if (!(u in i)) {
                if (!r)
                    throw new no("base intrinsic for " + t + " exists, but the property is not available.");
                return;
            }
            if (An && f + 1 >= n.length) {
                var x = An(i, u);
                (d = !!x),
                d && "get"in x && !("originalValue"in x.get) ? (i = x.get) : (i = i[u]);
            } else
                (d = vs(i, u)),
                (i = i[u]);
            d && !c && (oo[s] = i);
        }
    }
    return i;
}
  , Nf = {
    exports: {}
};
(function(e) {
    var t = o0
      , r = a0
      , n = r("%Function.prototype.apply%")
      , o = r("%Function.prototype.call%")
      , a = r("%Reflect.apply%", !0) || t.call(o, n)
      , s = r("%Object.getOwnPropertyDescriptor%", !0)
      , i = r("%Object.defineProperty%", !0)
      , c = r("%Math.max%");
    if (i)
        try {
            i({}, "a", {
                value: 1
            });
        } catch {
            i = null;
        }
    e.exports = function(d) {
        var u = a(t, o, arguments);
        if (s && i) {
            var w = s(u, "length");
            w.configurable && i(u, "length", {
                value: 1 + c(0, d.length - (arguments.length - 1))
            });
        }
        return u;
    }
    ;
    var l = function() {
        return a(t, n, arguments);
    };
    i ? i(e.exports, "apply", {
        value: l
    }) : (e.exports.apply = l);
}
)(Nf);
var IE = Nf.exports
  , Ef = a0
  , Bf = IE
  , LE = Bf(Ef("String.prototype.indexOf"))
  , RE = function(t, r) {
    var n = Ef(t, !!r);
    return typeof n == "function" && LE(t, ".prototype.") > -1 ? Bf(n) : n;
};
const XE = {}
  , ZE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: XE
}, Symbol.toStringTag, {
    value: "Module"
}))
  , kE = A5(ZE);
var s0 = typeof Map == "function" && Map.prototype
  , _i = Object.getOwnPropertyDescriptor && s0 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
  , ys = s0 && _i && typeof _i.get == "function" ? _i.get : null
  , UE = s0 && Map.prototype.forEach
  , i0 = typeof Set == "function" && Set.prototype
  , $i = Object.getOwnPropertyDescriptor && i0 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
  , xs = i0 && $i && typeof $i.get == "function" ? $i.get : null
  , SE = i0 && Set.prototype.forEach
  , WE = typeof WeakMap == "function" && WeakMap.prototype
  , na = WE ? WeakMap.prototype.has : null
  , QE = typeof WeakSet == "function" && WeakSet.prototype
  , oa = QE ? WeakSet.prototype.has : null
  , JE = typeof WeakRef == "function" && WeakRef.prototype
  , au = JE ? WeakRef.prototype.deref : null
  , VE = Boolean.prototype.valueOf
  , qE = Object.prototype.toString
  , KE = Function.prototype.toString
  , _E = String.prototype.match
  , c0 = String.prototype.slice
  , kr = String.prototype.replace
  , $E = String.prototype.toUpperCase
  , su = String.prototype.toLowerCase
  , Tf = RegExp.prototype.test
  , iu = Array.prototype.concat
  , rr = Array.prototype.join
  , eB = Array.prototype.slice
  , cu = Math.floor
  , J1 = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
  , e1 = Object.getOwnPropertySymbols
  , V1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
  , yo = typeof Symbol == "function" && typeof Symbol.iterator == "object"
  , wt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === yo || "symbol") ? Symbol.toStringTag : null
  , Cf = Object.prototype.propertyIsEnumerable
  , lu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__;
}
: null);
function uu(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || Tf.call(/e/, t))
        return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
        var n = e < 0 ? -cu(-e) : cu(e);
        if (n !== e) {
            var o = String(n)
              , a = c0.call(t, o.length + 1);
            return (kr.call(o, r, "$&_") + "." + kr.call(kr.call(a, /([0-9]{3})/g, "$&_"), /_$/, ""));
        }
    }
    return kr.call(t, r, "$&_");
}
var t1 = kE.custom
  , r1 = t1 && Yf(t1) ? t1 : null
  , tB = function e(t, r, n, o) {
    var a = r || {};
    if (Rr(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Rr(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var s = Rr(a, "customInspect") ? a.customInspect : !0;
    if (typeof s != "boolean" && s !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Rr(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Rr(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var i = a.numericSeparator;
    if (typeof t > "u")
        return "undefined";
    if (t === null)
        return "null";
    if (typeof t == "boolean")
        return t ? "true" : "false";
    if (typeof t == "string")
        return If(t, a);
    if (typeof t == "number") {
        if (t === 0)
            return 1 / 0 / t > 0 ? "0" : "-0";
        var c = String(t);
        return i ? uu(t, c) : c;
    }
    if (typeof t == "bigint") {
        var l = String(t) + "n";
        return i ? uu(t, l) : l;
    }
    var f = typeof a.depth > "u" ? 5 : a.depth;
    if ((typeof n > "u" && (n = 0),
    n >= f && f > 0 && typeof t == "object"))
        return q1(t) ? "[Array]" : "[Object]";
    var d = xB(a, n);
    if (typeof o > "u")
        o = [];
    else if (Ff(o, t) >= 0)
        return "[Circular]";
    function u(U, I, Q) {
        if ((I && ((o = eB.call(o)),
        o.push(I)),
        Q)) {
            var J = {
                depth: a.depth
            };
            return (Rr(a, "quoteStyle") && (J.quoteStyle = a.quoteStyle),
            e(U, J, n + 1, o));
        }
        return e(U, a, n + 1, o);
    }
    if (typeof t == "function") {
        var w = fB(t)
          , y = Sa(t, u);
        return ("[Function" + (w ? ": " + w : " (anonymous)") + "]" + (y.length > 0 ? " { " + rr.call(y, ", ") + " }" : ""));
    }
    if (Yf(t)) {
        var x = yo ? kr.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : V1.call(t);
        return typeof t == "object" && !yo ? Io(x) : x;
    }
    if (vB(t)) {
        for (var v = "<" + su.call(String(t.nodeName)), h = t.attributes || [], m = 0; m < h.length; m++)
            v += " " + h[m].name + "=" + Gf(rB(h[m].value), "double", a);
        return ((v += ">"),
        t.childNodes && t.childNodes.length && (v += "..."),
        (v += "</" + su.call(String(t.nodeName)) + ">"),
        v);
    }
    if (q1(t)) {
        if (t.length === 0)
            return "[]";
        var A = Sa(t, u);
        return d && !yB(A) ? "[" + K1(A, d) + "]" : "[ " + rr.call(A, ", ") + " ]";
    }
    if (aB(t)) {
        var O = Sa(t, u);
        return "cause"in t && !Cf.call(t, "cause") ? "{ [" + String(t) + "] " + rr.call(iu.call("[cause]: " + u(t.cause), O), ", ") + " }" : O.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + rr.call(O, ", ") + " }";
    }
    if (typeof t == "object" && s) {
        if (r1 && typeof t[r1] == "function")
            return t[r1]();
        if (s !== "symbol" && typeof t.inspect == "function")
            return t.inspect();
    }
    if (dB(t)) {
        var b = [];
        return (UE.call(t, function(U, I) {
            b.push(u(I, t, !0) + " => " + u(U, t));
        }),
        fu("Map", ys.call(t), b, d));
    }
    if (mB(t)) {
        var D = [];
        return (SE.call(t, function(U) {
            D.push(u(U, t));
        }),
        fu("Set", xs.call(t), D, d));
    }
    if (pB(t))
        return n1("WeakMap");
    if (gB(t))
        return n1("WeakSet");
    if (hB(t))
        return n1("WeakRef");
    if (iB(t))
        return Io(u(Number(t)));
    if (lB(t))
        return Io(u(J1.call(t)));
    if (cB(t))
        return Io(VE.call(t));
    if (sB(t))
        return Io(u(String(t)));
    if (!nB(t) && !oB(t)) {
        var P = Sa(t, u)
          , Y = lu ? lu(t) === Object.prototype : t instanceof Object || t.constructor === Object
          , F = t instanceof Object ? "" : "null prototype"
          , X = !Y && wt && Object(t) === t && wt in t ? c0.call(nn(t), 8, -1) : F ? "Object" : ""
          , re = Y || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : ""
          , k = re + (X || F ? "[" + rr.call(iu.call([], X || [], F || []), ": ") + "] " : "");
        return P.length === 0 ? k + "{}" : d ? k + "{" + K1(P, d) + "}" : k + "{ " + rr.call(P, ", ") + " }";
    }
    return String(t);
};
function Gf(e, t, r) {
    var n = (r.quoteStyle || t) === "double" ? '"' : "'";
    return n + e + n;
}
function rB(e) {
    return kr.call(String(e), /"/g, "&quot;");
}
function q1(e) {
    return (nn(e) === "[object Array]" && (!wt || !(typeof e == "object" && wt in e)));
}
function nB(e) {
    return (nn(e) === "[object Date]" && (!wt || !(typeof e == "object" && wt in e)));
}
function oB(e) {
    return (nn(e) === "[object RegExp]" && (!wt || !(typeof e == "object" && wt in e)));
}
function aB(e) {
    return (nn(e) === "[object Error]" && (!wt || !(typeof e == "object" && wt in e)));
}
function sB(e) {
    return (nn(e) === "[object String]" && (!wt || !(typeof e == "object" && wt in e)));
}
function iB(e) {
    return (nn(e) === "[object Number]" && (!wt || !(typeof e == "object" && wt in e)));
}
function cB(e) {
    return (nn(e) === "[object Boolean]" && (!wt || !(typeof e == "object" && wt in e)));
}
function Yf(e) {
    if (yo)
        return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol")
        return !0;
    if (!e || typeof e != "object" || !V1)
        return !1;
    try {
        return V1.call(e),
        !0;
    } catch {}
    return !1;
}
function lB(e) {
    if (!e || typeof e != "object" || !J1)
        return !1;
    try {
        return J1.call(e),
        !0;
    } catch {}
    return !1;
}
var uB = Object.prototype.hasOwnProperty || function(e) {
    return e in this;
}
;
function Rr(e, t) {
    return uB.call(e, t);
}
function nn(e) {
    return qE.call(e);
}
function fB(e) {
    if (e.name)
        return e.name;
    var t = _E.call(KE.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
}
function Ff(e, t) {
    if (e.indexOf)
        return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++)
        if (e[r] === t)
            return r;
    return -1;
}
function dB(e) {
    if (!ys || !e || typeof e != "object")
        return !1;
    try {
        ys.call(e);
        try {
            xs.call(e);
        } catch {
            return !0;
        }
        return e instanceof Map;
    } catch {}
    return !1;
}
function pB(e) {
    if (!na || !e || typeof e != "object")
        return !1;
    try {
        na.call(e, na);
        try {
            oa.call(e, oa);
        } catch {
            return !0;
        }
        return e instanceof WeakMap;
    } catch {}
    return !1;
}
function hB(e) {
    if (!au || !e || typeof e != "object")
        return !1;
    try {
        return au.call(e),
        !0;
    } catch {}
    return !1;
}
function mB(e) {
    if (!xs || !e || typeof e != "object")
        return !1;
    try {
        xs.call(e);
        try {
            ys.call(e);
        } catch {
            return !0;
        }
        return e instanceof Set;
    } catch {}
    return !1;
}
function gB(e) {
    if (!oa || !e || typeof e != "object")
        return !1;
    try {
        oa.call(e, oa);
        try {
            na.call(e, na);
        } catch {
            return !0;
        }
        return e instanceof WeakSet;
    } catch {}
    return !1;
}
function vB(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function If(e, t) {
    if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength
          , n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return If(c0.call(e, 0, t.maxStringLength), t) + n;
    }
    var o = kr.call(kr.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, wB);
    return Gf(o, "single", t);
}
function wB(e) {
    var t = e.charCodeAt(0)
      , r = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[t];
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + $E.call(t.toString(16));
}
function Io(e) {
    return "Object(" + e + ")";
}
function n1(e) {
    return e + " { ? }";
}
function fu(e, t, r, n) {
    var o = n ? K1(r, n) : rr.call(r, ", ");
    return e + " (" + t + ") {" + o + "}";
}
function yB(e) {
    for (var t = 0; t < e.length; t++)
        if (Ff(e[t], `
`) >= 0)
            return !1;
    return !0;
}
function xB(e, t) {
    var r;
    if (e.indent === "	")
        r = "	";
    else if (typeof e.indent == "number" && e.indent > 0)
        r = rr.call(Array(e.indent + 1), " ");
    else
        return null;
    return {
        base: r,
        prev: rr.call(Array(t + 1), r)
    };
}
function K1(e, t) {
    if (e.length === 0)
        return "";
    var r = `
` + t.prev + t.base;
    return (r + rr.call(e, "," + r) + `
` + t.prev);
}
function Sa(e, t) {
    var r = q1(e)
      , n = [];
    if (r) {
        n.length = e.length;
        for (var o = 0; o < e.length; o++)
            n[o] = Rr(e, o) ? t(e[o], e) : "";
    }
    var a = typeof e1 == "function" ? e1(e) : [], s;
    if (yo) {
        s = {};
        for (var i = 0; i < a.length; i++)
            s["$" + a[i]] = a[i];
    }
    for (var c in e)
        Rr(e, c) && ((r && String(Number(c)) === c && c < e.length) || (yo && s["$" + c]instanceof Symbol) || (Tf.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
    if (typeof e1 == "function")
        for (var l = 0; l < a.length; l++)
            Cf.call(e, a[l]) && n.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
    return n;
}
var l0 = a0
  , zo = RE
  , OB = tB
  , AB = l0("%TypeError%")
  , Wa = l0("%WeakMap%", !0)
  , Qa = l0("%Map%", !0)
  , bB = zo("WeakMap.prototype.get", !0)
  , DB = zo("WeakMap.prototype.set", !0)
  , MB = zo("WeakMap.prototype.has", !0)
  , PB = zo("Map.prototype.get", !0)
  , zB = zo("Map.prototype.set", !0)
  , HB = zo("Map.prototype.has", !0)
  , u0 = function(e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
        if (n.key === t)
            return (r.next = n.next),
            (n.next = e.next),
            (e.next = n),
            n;
}
  , jB = function(e, t) {
    var r = u0(e, t);
    return r && r.value;
}
  , NB = function(e, t, r) {
    var n = u0(e, t);
    n ? (n.value = r) : (e.next = {
        key: t,
        next: e.next,
        value: r
    });
}
  , EB = function(e, t) {
    return !!u0(e, t);
}
  , BB = function() {
    var t, r, n, o = {
        assert: function(a) {
            if (!o.has(a))
                throw new AB("Side channel does not contain " + OB(a));
        },
        get: function(a) {
            if (Wa && a && (typeof a == "object" || typeof a == "function")) {
                if (t)
                    return bB(t, a);
            } else if (Qa) {
                if (r)
                    return PB(r, a);
            } else if (n)
                return jB(n, a);
        },
        has: function(a) {
            if (Wa && a && (typeof a == "object" || typeof a == "function")) {
                if (t)
                    return MB(t, a);
            } else if (Qa) {
                if (r)
                    return HB(r, a);
            } else if (n)
                return EB(n, a);
            return !1;
        },
        set: function(a, s) {
            Wa && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Wa()),
            DB(t, a, s)) : Qa ? (r || (r = new Qa()),
            zB(r, a, s)) : (n || (n = {
                key: {},
                next: null
            }),
            NB(n, a, s));
        },
    };
    return o;
}
  , TB = String.prototype.replace
  , CB = /%20/g
  , o1 = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
}
  , f0 = {
    default: o1.RFC3986,
    formatters: {
        RFC1738: function(e) {
            return TB.call(e, CB, "+");
        },
        RFC3986: function(e) {
            return String(e);
        },
    },
    RFC1738: o1.RFC1738,
    RFC3986: o1.RFC3986,
}
  , GB = f0
  , a1 = Object.prototype.hasOwnProperty
  , vn = Array.isArray
  , er = (function() {
    for (var e = [], t = 0; t < 256; ++t)
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
}
)()
  , YB = function(t) {
    for (; t.length > 1; ) {
        var r = t.pop()
          , n = r.obj[r.prop];
        if (vn(n)) {
            for (var o = [], a = 0; a < n.length; ++a)
                typeof n[a] < "u" && o.push(n[a]);
            r.obj[r.prop] = o;
        }
    }
}
  , Lf = function(t, r) {
    for (var n = r && r.plainObjects ? Object.create(null) : {}, o = 0; o < t.length; ++o)
        typeof t[o] < "u" && (n[o] = t[o]);
    return n;
}
  , FB = function e(t, r, n) {
    if (!r)
        return t;
    if (typeof r != "object") {
        if (vn(t))
            t.push(r);
        else if (t && typeof t == "object")
            ((n && (n.plainObjects || n.allowPrototypes)) || !a1.call(Object.prototype, r)) && (t[r] = !0);
        else
            return [t, r];
        return t;
    }
    if (!t || typeof t != "object")
        return [t].concat(r);
    var o = t;
    return (vn(t) && !vn(r) && (o = Lf(t, n)),
    vn(t) && vn(r) ? (r.forEach(function(a, s) {
        if (a1.call(t, s)) {
            var i = t[s];
            i && typeof i == "object" && a && typeof a == "object" ? (t[s] = e(i, a, n)) : t.push(a);
        } else
            t[s] = a;
    }),
    t) : Object.keys(r).reduce(function(a, s) {
        var i = r[s];
        return a1.call(a, s) ? (a[s] = e(a[s], i, n)) : (a[s] = i),
        a;
    }, o));
}
  , IB = function(t, r) {
    return Object.keys(r).reduce(function(n, o) {
        return (n[o] = r[o]),
        n;
    }, t);
}
  , LB = function(e, t, r) {
    var n = e.replace(/\+/g, " ");
    if (r === "iso-8859-1")
        return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(n);
    } catch {
        return n;
    }
}
  , RB = function(t, r, n, o, a) {
    if (t.length === 0)
        return t;
    var s = t;
    if ((typeof t == "symbol" ? (s = Symbol.prototype.toString.call(t)) : typeof t != "string" && (s = String(t)),
    n === "iso-8859-1"))
        return escape(s).replace(/%u[0-9a-f]{4}/gi, function(f) {
            return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
        });
    for (var i = "", c = 0; c < s.length; ++c) {
        var l = s.charCodeAt(c);
        if (l === 45 || l === 46 || l === 95 || l === 126 || (l >= 48 && l <= 57) || (l >= 65 && l <= 90) || (l >= 97 && l <= 122) || (a === GB.RFC1738 && (l === 40 || l === 41))) {
            i += s.charAt(c);
            continue;
        }
        if (l < 128) {
            i = i + er[l];
            continue;
        }
        if (l < 2048) {
            i = i + (er[192 | (l >> 6)] + er[128 | (l & 63)]);
            continue;
        }
        if (l < 55296 || l >= 57344) {
            i = i + (er[224 | (l >> 12)] + er[128 | ((l >> 6) & 63)] + er[128 | (l & 63)]);
            continue;
        }
        (c += 1),
        (l = 65536 + (((l & 1023) << 10) | (s.charCodeAt(c) & 1023))),
        (i += er[240 | (l >> 18)] + er[128 | ((l >> 12) & 63)] + er[128 | ((l >> 6) & 63)] + er[128 | (l & 63)]);
    }
    return i;
}
  , XB = function(t) {
    for (var r = [{
        obj: {
            o: t
        },
        prop: "o"
    }], n = [], o = 0; o < r.length; ++o)
        for (var a = r[o], s = a.obj[a.prop], i = Object.keys(s), c = 0; c < i.length; ++c) {
            var l = i[c]
              , f = s[l];
            typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({
                obj: s,
                prop: l
            }),
            n.push(f));
        }
    return YB(r),
    t;
}
  , ZB = function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
}
  , kB = function(t) {
    return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}
  , UB = function(t, r) {
    return [].concat(t, r);
}
  , SB = function(t, r) {
    if (vn(t)) {
        for (var n = [], o = 0; o < t.length; o += 1)
            n.push(r(t[o]));
        return n;
    }
    return r(t);
}
  , Rf = {
    arrayToObject: Lf,
    assign: IB,
    combine: UB,
    compact: XB,
    decode: LB,
    encode: RB,
    isBuffer: kB,
    isRegExp: ZB,
    maybeMap: SB,
    merge: FB,
}
  , Xf = BB
  , _1 = Rf
  , aa = f0
  , WB = Object.prototype.hasOwnProperty
  , du = {
    brackets: function(t) {
        return t + "[]";
    },
    comma: "comma",
    indices: function(t, r) {
        return t + "[" + r + "]";
    },
    repeat: function(t) {
        return t;
    },
}
  , mr = Array.isArray
  , QB = String.prototype.split
  , JB = Array.prototype.push
  , Zf = function(e, t) {
    JB.apply(e, mr(t) ? t : [t]);
}
  , VB = Date.prototype.toISOString
  , pu = aa.default
  , lt = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: _1.encode,
    encodeValuesOnly: !1,
    format: pu,
    formatter: aa.formatters[pu],
    indices: !1,
    serializeDate: function(t) {
        return VB.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
}
  , qB = function(t) {
    return (typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint");
}
  , s1 = {}
  , KB = function e(t, r, n, o, a, s, i, c, l, f, d, u, w, y, x, v) {
    for (var h = t, m = v, A = 0, O = !1; (m = m.get(s1)) !== void 0 && !O; ) {
        var b = m.get(t);
        if (((A += 1),
        typeof b < "u")) {
            if (b === A)
                throw new RangeError("Cyclic object value");
            O = !0;
        }
        typeof m.get(s1) > "u" && (A = 0);
    }
    if ((typeof c == "function" ? (h = c(r, h)) : h instanceof Date ? (h = d(h)) : n === "comma" && mr(h) && (h = _1.maybeMap(h, function(ie) {
        return ie instanceof Date ? d(ie) : ie;
    })),
    h === null)) {
        if (a)
            return i && !y ? i(r, lt.encoder, x, "key", u) : r;
        h = "";
    }
    if (qB(h) || _1.isBuffer(h)) {
        if (i) {
            var D = y ? r : i(r, lt.encoder, x, "key", u);
            if (n === "comma" && y) {
                for (var P = QB.call(String(h), ","), Y = "", F = 0; F < P.length; ++F)
                    Y += (F === 0 ? "" : ",") + w(i(P[F], lt.encoder, x, "value", u));
                return [w(D) + (o && mr(h) && P.length === 1 ? "[]" : "") + "=" + Y];
            }
            return [w(D) + "=" + w(i(h, lt.encoder, x, "value", u))];
        }
        return [w(r) + "=" + w(String(h))];
    }
    var X = [];
    if (typeof h > "u")
        return X;
    var re;
    if (n === "comma" && mr(h))
        re = [{
            value: h.length > 0 ? h.join(",") || null : void 0
        }];
    else if (mr(c))
        re = c;
    else {
        var k = Object.keys(h);
        re = l ? k.sort(l) : k;
    }
    for (var U = o && mr(h) && h.length === 1 ? r + "[]" : r, I = 0; I < re.length; ++I) {
        var Q = re[I]
          , J = typeof Q == "object" && typeof Q.value < "u" ? Q.value : h[Q];
        if (!(s && J === null)) {
            var R = mr(h) ? typeof n == "function" ? n(U, Q) : U : U + (f ? "." + Q : "[" + Q + "]");
            v.set(t, A);
            var ne = Xf();
            ne.set(s1, v),
            Zf(X, e(J, R, n, o, a, s, i, c, l, f, d, u, w, y, x, ne));
        }
    }
    return X;
}
  , _B = function(t) {
    if (!t)
        return lt;
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
        throw new TypeError("Encoder has to be a function.");
    var r = t.charset || lt.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = aa.default;
    if (typeof t.format < "u") {
        if (!WB.call(aa.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
        n = t.format;
    }
    var o = aa.formatters[n]
      , a = lt.filter;
    return ((typeof t.filter == "function" || mr(t.filter)) && (a = t.filter),
    {
        addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : lt.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? lt.allowDots : !!t.allowDots,
        charset: r,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : lt.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? lt.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : lt.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : lt.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : lt.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: o,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : lt.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : lt.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : lt.strictNullHandling,
    });
}
  , $B = function(e, t) {
    var r = e, n = _B(t), o, a;
    typeof n.filter == "function" ? ((a = n.filter),
    (r = a("", r))) : mr(n.filter) && ((a = n.filter),
    (o = a));
    var s = [];
    if (typeof r != "object" || r === null)
        return "";
    var i;
    t && t.arrayFormat in du ? (i = t.arrayFormat) : t && "indices"in t ? (i = t.indices ? "indices" : "repeat") : (i = "indices");
    var c = du[i];
    if (t && "commaRoundTrip"in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = c === "comma" && t && t.commaRoundTrip;
    o || (o = Object.keys(r)),
    n.sort && o.sort(n.sort);
    for (var f = Xf(), d = 0; d < o.length; ++d) {
        var u = o[d];
        (n.skipNulls && r[u] === null) || Zf(s, KB(r[u], u, c, l, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, f));
    }
    var w = s.join(n.delimiter)
      , y = n.addQueryPrefix === !0 ? "?" : "";
    return (n.charsetSentinel && (n.charset === "iso-8859-1" ? (y += "utf8=%26%2310003%3B&") : (y += "utf8=%E2%9C%93&")),
    w.length > 0 ? y + w : "");
}
  , xo = Rf
  , $1 = Object.prototype.hasOwnProperty
  , eT = Array.isArray
  , ot = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: xo.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
}
  , tT = function(e) {
    return e.replace(/&#(\d+);/g, function(t, r) {
        return String.fromCharCode(parseInt(r, 10));
    });
}
  , kf = function(e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}
  , rT = "utf8=%26%2310003%3B"
  , nT = "utf8=%E2%9C%93"
  , oT = function(t, r) {
    var n = {}, o = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = o.split(r.delimiter, a), i = -1, c, l = r.charset;
    if (r.charsetSentinel)
        for (c = 0; c < s.length; ++c)
            s[c].indexOf("utf8=") === 0 && (s[c] === nT ? (l = "utf-8") : s[c] === rT && (l = "iso-8859-1"),
            (i = c),
            (c = s.length));
    for (c = 0; c < s.length; ++c)
        if (c !== i) {
            var f = s[c], d = f.indexOf("]="), u = d === -1 ? f.indexOf("=") : d + 1, w, y;
            u === -1 ? ((w = r.decoder(f, ot.decoder, l, "key")),
            (y = r.strictNullHandling ? null : "")) : ((w = r.decoder(f.slice(0, u), ot.decoder, l, "key")),
            (y = xo.maybeMap(kf(f.slice(u + 1), r), function(x) {
                return r.decoder(x, ot.decoder, l, "value");
            }))),
            y && r.interpretNumericEntities && l === "iso-8859-1" && (y = tT(y)),
            f.indexOf("[]=") > -1 && (y = eT(y) ? [y] : y),
            $1.call(n, w) ? (n[w] = xo.combine(n[w], y)) : (n[w] = y);
        }
    return n;
}
  , aT = function(e, t, r, n) {
    for (var o = n ? t : kf(t, r), a = e.length - 1; a >= 0; --a) {
        var s, i = e[a];
        if (i === "[]" && r.parseArrays)
            s = [].concat(o);
        else {
            s = r.plainObjects ? Object.create(null) : {};
            var c = i.charAt(0) === "[" && i.charAt(i.length - 1) === "]" ? i.slice(1, -1) : i
              , l = parseInt(c, 10);
            !r.parseArrays && c === "" ? (s = {
                0: o
            }) : !isNaN(l) && i !== c && String(l) === c && l >= 0 && r.parseArrays && l <= r.arrayLimit ? ((s = []),
            (s[l] = o)) : c !== "__proto__" && (s[c] = o);
        }
        o = s;
    }
    return o;
}
  , sT = function(t, r, n, o) {
    if (t) {
        var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
          , s = /(\[[^[\]]*])/
          , i = /(\[[^[\]]*])/g
          , c = n.depth > 0 && s.exec(a)
          , l = c ? a.slice(0, c.index) : a
          , f = [];
        if (l) {
            if (!n.plainObjects && $1.call(Object.prototype, l) && !n.allowPrototypes)
                return;
            f.push(l);
        }
        for (var d = 0; n.depth > 0 && (c = i.exec(a)) !== null && d < n.depth;
        ) {
            if (((d += 1),
            !n.plainObjects && $1.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes))
                return;
            f.push(c[1]);
        }
        return c && f.push("[" + a.slice(c.index) + "]"),
        aT(f, r, n, o);
    }
}
  , iT = function(t) {
    if (!t)
        return ot;
    if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
        throw new TypeError("Decoder has to be a function.");
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = typeof t.charset > "u" ? ot.charset : t.charset;
    return {
        allowDots: typeof t.allowDots > "u" ? ot.allowDots : !!t.allowDots,
        allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ot.allowPrototypes,
        allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ot.allowSparse,
        arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ot.arrayLimit,
        charset: r,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ot.charsetSentinel,
        comma: typeof t.comma == "boolean" ? t.comma : ot.comma,
        decoder: typeof t.decoder == "function" ? t.decoder : ot.decoder,
        delimiter: typeof t.delimiter == "string" || xo.isRegExp(t.delimiter) ? t.delimiter : ot.delimiter,
        depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ot.depth,
        ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
        interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ot.interpretNumericEntities,
        parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ot.parameterLimit,
        parseArrays: t.parseArrays !== !1,
        plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ot.plainObjects,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ot.strictNullHandling,
    };
}
  , cT = function(e, t) {
    var r = iT(t);
    if (e === "" || e === null || typeof e > "u")
        return r.plainObjects ? Object.create(null) : {};
    for (var n = typeof e == "string" ? oT(e, r) : e, o = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
        var i = a[s]
          , c = sT(i, n[i], r, typeof e == "string");
        o = xo.merge(o, c, r);
    }
    return r.allowSparse === !0 ? o : xo.compact(o);
}
  , lT = $B
  , uT = cT
  , fT = f0
  , dT = {
    formats: fT,
    parse: uT,
    stringify: lT
};
const pT = $r(dT);
var $a = ( (e) => ((e[(e.OK = 0)] = "OK"),
(e[(e.CANCELLED = 1)] = "CANCELLED"),
(e[(e.UNKNOWN = 2)] = "UNKNOWN"),
(e[(e.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
(e[(e.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
(e[(e.NOT_FOUND = 5)] = "NOT_FOUND"),
(e[(e.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
(e[(e.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
(e[(e.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
(e[(e.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
(e[(e.ABORTED = 10)] = "ABORTED"),
(e[(e.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
(e[(e.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
(e[(e.INTERNAL = 13)] = "INTERNAL"),
(e[(e.UNAVAILABLE = 14)] = "UNAVAILABLE"),
(e[(e.DATA_LOSS = 15)] = "DATA_LOSS"),
(e[(e.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
(e[(e.LOGIN_REQUIRED = 17)] = "LOGIN_REQUIRED"),
e))($a || {})
  , hT = ( (e) => ((e.COURSE_IS_PRIVATE = "COURSE_IS_PRIVATE"),
(e.SCHEDULE_IS_PRIVATE = "SCHEDULE_IS_PRIVATE"),
(e.COURSE_NOT_FOUND = "COURSE_NOT_FOUND"),
(e.SCHEDULE_NOT_FOUND = "SCHEDULE_NOT_FOUND"),
(e.COURSE_IS_UNPUBLISHED = "COURSE_IS_UNPUBLISHED"),
(e.COURSE_NOT_ENROLLED = "COURSE_NOT_ENROLLED"),
(e.NO_VIEW_PERMISSION = "NO_VIEW_PERMISSION"),
e))(hT || {});
new TextEncoder();
const Uf = new TextDecoder()
  , mT = (e) => new Uint8Array(atob(e).split("").map( (t) => t.charCodeAt(0)))
  , gT = (e) => {
    let t = e;
    t instanceof Uint8Array && (t = Uf.decode(t)),
    (t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    try {
        return mT(t);
    } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.");
    }
}
;
class vT extends Error {
    constructor(t) {
        var r;
        super(t),
        (this.code = "ERR_JOSE_GENERIC"),
        (this.name = this.constructor.name),
        (r = Error.captureStackTrace) === null || r === void 0 || r.call(Error, this, this.constructor);
    }
    static get code() {
        return "ERR_JOSE_GENERIC";
    }
}
class fn extends vT {
    constructor() {
        super(...arguments),
        (this.code = "ERR_JWT_INVALID");
    }
    static get code() {
        return "ERR_JWT_INVALID";
    }
}
function wT(e) {
    return typeof e == "object" && e !== null;
}
function yT(e) {
    if (!wT(e) || Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    if (Object.getPrototypeOf(e) === null)
        return !0;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
const xT = gT;
function OT(e) {
    if (typeof e != "string")
        throw new fn("JWTs must use Compact JWS serialization, JWT must be a string");
    const {1: t, length: r} = e.split(".");
    if (r === 5)
        throw new fn("Only JWTs using Compact JWS serialization can be decoded");
    if (r !== 3)
        throw new fn("Invalid JWT");
    if (!t)
        throw new fn("JWTs must contain a payload");
    let n;
    try {
        n = xT(t);
    } catch {
        throw new fn("Failed to parse the base64url encoded payload");
    }
    let o;
    try {
        o = JSON.parse(Uf.decode(n));
    } catch {
        throw new fn("Failed to parse the decoded payload as JSON");
    }
    if (!yT(o))
        throw new fn("Invalid JWT Claims Set");
    return o;
}
const AT = {
    "en-US": "en-US",
    "en-GB": "en-US",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    "zh-MO": "zh-TW",
    en: "en-US",
}
  , bT = new Map([["zh", "zh-CN"], ["zh-TW", "zh-TW"], ["en", "en-US"], ["en-US", "en-US"], ])
  , DT = (e) => {
    localStorage.setItem("rms-locale", e);
}
  , MT = () => {
    const e = new URL(window.location.href).searchParams
      , t = e.get("token");
    let r = null;
    if (e.get("lang"))
        r = e.get("lang");
    else if (t) {
        const o = OT(t);
        r = o.lang || o.language;
    }
    if (!r)
        return;
    const n = AT[r];
    if (n)
        return DT(n),
        n;
}
  , PT = () => {
    const e = MT();
    return (e || (localStorage.getItem("rms-locale") ?? bT.get(navigator.language) ?? "zh-CN"));
}
  , Sf = nw({
    legacy: !1,
    locale: PT(),
    messages: Uj
})
  , zT = (e) => {
    e.use(Sf);
}
  , HT = "modulepreload"
  , jT = function(e) {
    return "/" + e;
}
  , hu = {}
  , te = function(t, r, n) {
    if (!r || r.length === 0)
        return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(r.map( (a) => {
        if (((a = jT(a)),
        a in hu))
            return;
        hu[a] = !0;
        const s = a.endsWith(".css")
          , i = s ? '[rel="stylesheet"]' : "";
        if (!!n)
            for (let f = o.length - 1; f >= 0; f--) {
                const d = o[f];
                if (d.href === a && (!s || d.rel === "stylesheet"))
                    return;
            }
        else if (document.querySelector(`link[href="${a}"]${i}`))
            return;
        const l = document.createElement("link");
        if (((l.rel = s ? "stylesheet" : HT),
        s || ((l.as = "script"),
        (l.crossOrigin = "")),
        (l.href = a),
        document.head.appendChild(l),
        s))
            return new Promise( (f, d) => {
                l.addEventListener("load", f),
                l.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${a}`)));
            }
            );
    }
    )).then( () => t()).catch( (a) => {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (((s.payload = a),
        window.dispatchEvent(s),
        !s.defaultPrevented))
            throw a;
    }
    );
}
  , Wf = [{
    path: "/",
    name: "home",
    meta: {
        trackName: "首页"
    },
    component: () => te( () => import("./Home-5f93a4b2.js"), ["assets/Home-5f93a4b2.js", "assets/statistic-822160fe.js", "assets/format-7a4d8ce0.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/avatar@4x-521b329f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/index-5ea2a65b.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/avatar-eccf9b6f.js", "assets/resourceSize-b4de7898.js", "assets/groupBy-60897391.js", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/cover-default-5-5900f49a.js", "assets/features-138c7e7f.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/TopicCard-9af1bf91.js", "assets/userCollectStore-e2c2b216.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/TopicCard-55ee01d3.css", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/topicDetail-8a2ecf84.js", "assets/topic-c74d1b58.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/Home-820396e0.css", ]),
}, {
    path: "/login",
    name: "login",
    meta: {
        trackName: "登录页"
    },
    component: () => te( () => import("./LoginView-08165f8c.js"), ["assets/LoginView-08165f8c.js", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/isNil-c75b1b34.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/LoginView-128220f1.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", ]),
}, {
    path: "/admin",
    name: "admin",
    component: () => te( () => import("./Index-7637b5c0.js"), ["assets/Index-7637b5c0.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-852bd970.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/state-079f37c4.js", "assets/features-138c7e7f.js", "assets/Index-0d55bdea.css", ]),
    children: [{
        path: "home",
        name: "adminHome",
        meta: {
            trackName: "基础数据管理-门户配置"
        },
        component: () => te( () => import("./Index-5b480fc2.js"), ["assets/Index-5b480fc2.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/switch-48f378c8.js", "assets/validator-700fab12.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/switch-e35e5112.css", "assets/upload-7569b125.js", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/isNil-c75b1b34.js", "assets/index-852bd970.js", "assets/upload-a47e09b2.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/input-number-a8c83cb4.js", "assets/index-70ab186b.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/popper-f679515a.css", "assets/index-8d5f54d3.js", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/features-138c7e7f.js", "assets/intersection-dd554226.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-01712400.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/Index-6f4575d5.css", "assets/form-item-a844e8e9.css", "assets/input-7b10d695.css", "assets/checkbox-group-987ef89c.css", "assets/tag-dd87478a.css", ]),
    }, {
        path: "topics",
        name: "topics",
        meta: {
            trackName: "资源管理-专题资源"
        },
        component: () => te( () => import("./Index-0d0c2d9f.js"), ["assets/Index-0d0c2d9f.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/tag-aa135024.js", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/tags-251e6691.js", "assets/tag-b924d1d5.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/checkbox-group-987ef89c.css", "assets/input-7b10d695.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/CreativeTreeSelect-c9cbff31.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/ResourceClassification.vue_vue_type_script_setup_true_lang-250ae478.js", "assets/CreativeTreeSelect-3257a5b7.css", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/tab-pane-f009d3b1.js", "assets/vnode-c656dd72.js", "assets/tab-pane-928d3bfb.css", "assets/upload-7569b125.js", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/upload-a47e09b2.css", "assets/topic-c74d1b58.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/TagSelector.vue_vue_type_script_setup_true_lang-6cc5e47d.js", "assets/features-138c7e7f.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/select-v2-af369349.js", "assets/browser-71c7e5f0.js", "assets/select-v2-62dc6f8d.css", "assets/TagSelector-ef537152.css", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/isString-23c0a126.js", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/captureCourses-571fa455.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/statistic-822160fe.js", "assets/filter-08783406.js", "assets/union-e2b59439.js", "assets/_baseUniq-7f3f9cd1.js", "assets/noop-cb277961.js", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/ClassificationSelector-dabfb4b4.js", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/ClassificationSelector-83924db7.css", "assets/index-01712400.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/Index-3ef4a495.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", ]),
    }, {
        path: "tags",
        name: "tags",
        meta: {
            trackName: "资源管理-资源标签"
        },
        component: () => te( () => import("./Index-3952e8b9.js"), ["assets/Index-3952e8b9.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Search-bc28919c.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/tags-251e6691.js", "assets/index-5ea2a65b.js", "assets/format-7a4d8ce0.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/Index-f48711f2.css", "assets/tag-dd87478a.css", ]),
    }, {
        path: "classifications",
        name: "classifications",
        meta: {
            trackName: "资源管理-资源分类"
        },
        component: () => te( () => import("./Index-259c0255.js"), ["assets/Index-259c0255.js", "assets/table-column-1f44e9e4.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/index-81e70d48.js", "assets/index-852bd970.js", "assets/table-column-d1410a98.css", "assets/classification-5690e720.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/features-138c7e7f.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/groupBy-60897391.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Index-5e8ba233.css", "assets/base-edee9e02.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/button-d8ed470c.css", ]),
    }, {
        path: "resources",
        name: "adminResources",
        meta: {
            trackName: "资源管理-文件资源"
        },
        component: () => te( () => import("./Index-9ab5996a.js"), ["assets/Index-9ab5996a.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/index-a24b3f2d.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/index-852bd970.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/ResourceClassification.vue_vue_type_script_setup_true_lang-250ae478.js", "assets/base-edee9e02.css", "assets/tag-dd87478a.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/tag-aa135024.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/tags-251e6691.js", "assets/tag-b924d1d5.css", "assets/button-d8ed470c.css", "assets/checkbox-group-987ef89c.css", "assets/input-7b10d695.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/CreativeTreeSelect-c9cbff31.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/CreativeTreeSelect-3257a5b7.css", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/format-7a4d8ce0.js", "assets/index-01712400.js", "assets/ResourceBatchEditDialog.vue_vue_type_script_setup_true_lang-9c06a6de.js", "assets/col-3a392cdc.js", "assets/col-a54c93be.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/TagSelector.vue_vue_type_script_setup_true_lang-6cc5e47d.js", "assets/features-138c7e7f.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/select-v2-af369349.js", "assets/browser-71c7e5f0.js", "assets/select-v2-62dc6f8d.css", "assets/TagSelector-ef537152.css", "assets/ClassificationSelector-dabfb4b4.js", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/ClassificationSelector-83924db7.css", "assets/SubjectCategorySelector.vue_vue_type_script_setup_true_lang-d6f3abf0.js", "assets/subjectCategory-cd03d342.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/resourceReference-91478fc4.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/common-d2275ef8.js", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/includes-7746ba81.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/index-e40132d5.js", "assets/ResourceBatchEditDialog-b95e810c.css", "assets/form-item-a844e8e9.css", "assets/overlay-c52f1d36.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/snakeCase-654b0c81.js", "assets/Index-05ba3525.css", "assets/popover-79f68d83.css", ]),
    }, {
        path: "resources-audit",
        name: "adminAuditResources",
        meta: {
            trackName: "资源管理-文件审核"
        },
        component: () => te( () => import("./AuditResources-3dfa2b5a.js"), ["assets/AuditResources-3dfa2b5a.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/tag-dd87478a.css", "assets/ResourceClassification.vue_vue_type_script_setup_true_lang-250ae478.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/TagSelector.vue_vue_type_script_setup_true_lang-6cc5e47d.js", "assets/features-138c7e7f.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/select-v2-af369349.js", "assets/browser-71c7e5f0.js", "assets/select-v2-62dc6f8d.css", "assets/tags-251e6691.js", "assets/TagSelector-ef537152.css", "assets/input-7b10d695.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/ClassificationSelector-dabfb4b4.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/ClassificationSelector-83924db7.css", "assets/ResourceBatchEditDialog.vue_vue_type_script_setup_true_lang-9c06a6de.js", "assets/col-3a392cdc.js", "assets/col-a54c93be.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/SubjectCategorySelector.vue_vue_type_script_setup_true_lang-d6f3abf0.js", "assets/subjectCategory-cd03d342.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/resourceReference-91478fc4.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/common-d2275ef8.js", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/includes-7746ba81.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/ResourceBatchEditDialog-b95e810c.css", "assets/form-item-a844e8e9.css", "assets/overlay-c52f1d36.css", "assets/tab-pane-f009d3b1.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/image-viewer-c41b5a40.css", "assets/PreviewProvider-0f433ae6.css", "assets/popover-79f68d83.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/PeerLearning-476224e2.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/snakeCase-654b0c81.js", "assets/state-079f37c4.js", "assets/AuditResources-30af3e66.css", ]),
    }, {
        path: "capture-course-resources",
        name: "captureCourseResources",
        meta: {
            trackName: "直录播管理-录播课设置"
        },
        component: () => te( () => import("./Index-9766e97c.js"), ["assets/Index-9766e97c.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/ResourceClassification.vue_vue_type_script_setup_true_lang-250ae478.js", "assets/base-edee9e02.css", "assets/tag-dd87478a.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/input-7b10d695.css", "assets/CourseSettingForm-f7165c1c.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/switch-48f378c8.js", "assets/switch-e35e5112.css", "assets/ClassificationSelector-dabfb4b4.js", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/ClassificationSelector-83924db7.css", "assets/SubjectCategorySelector.vue_vue_type_script_setup_true_lang-d6f3abf0.js", "assets/select-v2-af369349.js", "assets/browser-71c7e5f0.js", "assets/select-v2-62dc6f8d.css", "assets/subjectCategory-cd03d342.js", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/features-138c7e7f.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/CourseSettingForm-a1b4d988.css", "assets/form-item-a844e8e9.css", "assets/radio-f0a895c7.css", "assets/captureCourses-571fa455.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/refs-d6db451d.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/statistic-822160fe.js", "assets/filter-08783406.js", "assets/union-e2b59439.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/noop-cb277961.js", "assets/Index-a115591c.css", "assets/button-d8ed470c.css", "assets/overlay-c52f1d36.css", ]),
    }, {
        path: "classrooms-management",
        name: "classroomsManagement",
        meta: {
            trackName: "直录播管理-教室管理"
        },
        component: () => te( () => import("./Index-a6860a04.js"), ["assets/Index-a6860a04.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/classroom-29baac2b.js", "assets/classrooms-61691da5.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/switch-48f378c8.js", "assets/switch-e35e5112.css", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/classroom-b4c5b368.js", "assets/groupBy-60897391.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/upload-7569b125.js", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/upload-a47e09b2.css", "assets/index-01712400.js", "assets/features-138c7e7f.js", "assets/tab-pane-f009d3b1.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/common-d2275ef8.js", "assets/input-number-a8c83cb4.js", "assets/input-number-5cd3bf6b.css", "assets/useDialogFixedHeight-cba9ad5e.js", "assets/useDialogFixedHeight-d8d7dc3a.css", "assets/format-7a4d8ce0.js", "assets/statistic-822160fe.js", "assets/Index-d6825fe9.css", "assets/tag-dd87478a.css", "assets/dropdown-item-e3b0c442.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", "assets/radio-f0a895c7.css", "assets/radio-button-bc16eb27.css", ]),
    }, {
        path: "schedules-management",
        name: "schedulesManagement",
        meta: {
            trackName: "直录播管理-排程管理"
        },
        component: () => te( () => import("./Index-2a70bd29.js"), ["assets/Index-2a70bd29.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/datetimePicker-9524d971.js", "assets/en-US-82450aae.js", "assets/format-7a4d8ce0.js", "assets/ScheduleRecordErrorPopover.vue_vue_type_script_setup_true_lang-a0ad030b.js", "assets/captureCourses-571fa455.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/classroom-29baac2b.js", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/union-e2b59439.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/ScheduleRecordErrorPopover-d0103b59.css", "assets/form-item-a844e8e9.css", "assets/tag-dd87478a.css", "assets/radio-f0a895c7.css", "assets/popover-79f68d83.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/classroom-b4c5b368.js", "assets/groupBy-60897391.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/refs-d6db451d.js", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/schedule-2179e2a5.js", "assets/useDialogFixedHeight-cba9ad5e.js", "assets/useDialogFixedHeight-d8d7dc3a.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/common-d2275ef8.js", "assets/player-1745ed3f.js", "assets/radio-button-bc16eb27.css", "assets/overlay-c52f1d36.css", ]),
    }, {
        path: "captures-management",
        name: "capturesManagement",
        meta: {
            trackName: "直录播管理-录制资源管理"
        },
        component: () => te( () => import("./Index-0e9a08fb.js"), ["assets/Index-0e9a08fb.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/tag-aa135024.js", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/tags-251e6691.js", "assets/tag-b924d1d5.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/checkbox-group-987ef89c.css", "assets/input-7b10d695.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/features-138c7e7f.js", "assets/input-number-a8c83cb4.js", "assets/input-number-5cd3bf6b.css", "assets/DeletionDetailDialog.vue_vue_type_style_index_0_lang-bb9b39be.js", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/format-7a4d8ce0.js", "assets/operateLog-2009a564.js", "assets/DeletionDetailDialog-362057a4.css", "assets/overlay-c52f1d36.css", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/config-2958fe56.js", "assets/cronText-b81d4cab.js", "assets/capitalize-793c3d9d.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/groupBy-60897391.js", "assets/player-1745ed3f.js", "assets/Index-5f4cc626.css", "assets/form-item-a844e8e9.css", "assets/radio-f0a895c7.css", ]),
    }, {
        name: "orgManagement",
        path: "orgs-management",
        meta: {
            trackName: "机构管理"
        },
        component: () => te( () => import("./Index-d302e475.js"), ["assets/Index-d302e475.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Search-bc28919c.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/refs-d6db451d.js", "assets/tab-pane-f009d3b1.js", "assets/tab-pane-928d3bfb.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/SchoolCalendarSelect.vue_vue_type_script_setup_true_lang-df01480e.js", "assets/semester-ba636a32.js", "assets/tag-dd87478a.css", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/config-2958fe56.js", "assets/cronText-b81d4cab.js", "assets/capitalize-793c3d9d.js", "assets/messageBox-7f9e80e3.js", "assets/aria-bc8e8b0f.js", "assets/semester-3b9307bc.js", "assets/Loading-3fc98d0e.js", "assets/Loading-f988a6d6.css", "assets/switch-48f378c8.js", "assets/switch-e35e5112.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/cloneDeep-a84c7b28.js", "assets/Index-d68585de.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", "assets/radio-f0a895c7.css", ]),
    }, {
        path: "file-resource-statistics",
        name: "fileResourceStatistics",
        meta: {
            trackName: "数据统计分析-文件资源统计"
        },
        component: () => te( () => import("./Index-e59c664b.js"), ["assets/Index-e59c664b.js", "assets/statistic-822160fe.js", "assets/color-88ec3607.js", "assets/index-31129aa7.js", "assets/resourceReference-91478fc4.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/table-column-1f44e9e4.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/index-81e70d48.js", "assets/index-852bd970.js", "assets/table-column-d1410a98.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/tags-251e6691.js", "assets/capitalize-793c3d9d.js", "assets/classification-5690e720.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/groupBy-60897391.js", "assets/Index-5a63015f.css", "assets/tag-dd87478a.css", "assets/button-d8ed470c.css", ]),
    }, {
        path: "live-and-capture-statistics",
        name: "liveAndCaptureStatistics",
        meta: {
            trackName: "数据统计分析-直录播统计"
        },
        component: () => te( () => import("./Index-5edfa1bc.js"), ["assets/Index-5edfa1bc.js", "assets/index-a24b3f2d.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/statistic-822160fe.js", "assets/filter-08783406.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/format-7a4d8ce0.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/color-88ec3607.js", "assets/index-31129aa7.js", "assets/forEach-c9816bce.js", "assets/_arrayEach-0e9334a0.js", "assets/features-138c7e7f.js", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/datetimePicker-9524d971.js", "assets/en-US-82450aae.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/table-column-1f44e9e4.js", "assets/table-column-d1410a98.css", "assets/tags-251e6691.js", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/pagination-3a0fa304.css", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/ClassificationSelector-dabfb4b4.js", "assets/ClassificationSelector-83924db7.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/player-1745ed3f.js", "assets/common-d2275ef8.js", "assets/Index-d11dc9be.css", "assets/popover-79f68d83.css", "assets/radio-button-bc16eb27.css", ]),
    }, {
        name: "recycleManagement",
        path: "recycle-management",
        meta: {
            trackName: "回收站管理"
        },
        component: () => te( () => import("./Index-7574d5d5.js"), ["assets/Index-7574d5d5.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/Search-48650f1d.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Search-bc28919c.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/format-7a4d8ce0.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/config-2958fe56.js", "assets/tag-dd87478a.css", ]),
    }, {
        name: "capacityManagement",
        path: "capacity-management",
        meta: {
            trackName: "容量管理"
        },
        component: () => te( () => import("./Index-791eb406.js"), ["assets/Index-791eb406.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/table-column-1f44e9e4.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/index-81e70d48.js", "assets/index-852bd970.js", "assets/table-column-d1410a98.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/input-number-a8c83cb4.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/refs-d6db451d.js", "assets/format-7a4d8ce0.js", "assets/pageQuery-c1943b3c.js", "assets/Index-946054db.css", "assets/base-edee9e02.css", "assets/tag-dd87478a.css", "assets/button-d8ed470c.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", "assets/input-7b10d695.css", ]),
    }, {
        name: "subjectCategoryManagement",
        path: "subject-category-management",
        meta: {
            trackName: "学科门类管理"
        },
        component: () => te( () => import("./Index-5bde7c74.js"), ["assets/Index-5bde7c74.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Search-bc28919c.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/subjectCategory-cd03d342.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/Index-58bbd7da.css", "assets/tag-dd87478a.css", "assets/overlay-c52f1d36.css", "assets/form-item-a844e8e9.css", ]),
    }, {
        name: "systemOperateLog",
        path: "system-operate-log",
        meta: {
            trackName: "系统任务日志"
        },
        component: () => te( () => import("./SystemOperateLog-0bf19ad2.js"), ["assets/SystemOperateLog-0bf19ad2.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/userOperateLog-26d66e1d.js", "assets/format-7a4d8ce0.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/operateLog-2009a564.js", "assets/semester-ba636a32.js", "assets/DeletionDetailDialog.vue_vue_type_style_index_0_lang-bb9b39be.js", "assets/Search-48650f1d.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Search-bc28919c.css", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/refs-d6db451d.js", "assets/DeletionDetailDialog-362057a4.css", "assets/overlay-c52f1d36.css", "assets/tag-dd87478a.css", ]),
    }, {
        name: "userOperateLog",
        path: "user-operate-log",
        meta: {
            trackName: "用户操作日志"
        },
        component: () => te( () => import("./UserOperateLog-7fc389c8.js"), ["assets/UserOperateLog-7fc389c8.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/userOperateLog-26d66e1d.js", "assets/format-7a4d8ce0.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/operateLog-2009a564.js", "assets/semester-ba636a32.js", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/button-d8ed470c.css", ]),
    }, ],
}, {
    name: "homeResourceDetail",
    path: "/resources/:id",
    meta: {
        trackName: "资源详情"
    },
    component: () => te( () => import("./HomeResourceDetail-6b22f10e.js"), ["assets/HomeResourceDetail-6b22f10e.js", "assets/FileDetail.vue_vue_type_script_setup_true_lang-97faf05c.js", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/select-734292f5.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/button-d8ed470c.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/department-8b22241b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/avatar@4x-521b329f.js", "assets/FileDetail-9860b98d.css", "assets/checkbox-group-987ef89c.css", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-58b71108.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", ]),
    props: !0,
}, {
    name: "sharedResourceDetail",
    path: "/shared-resources/:id",
    meta: {
        trackName: "分享资源详情"
    },
    component: () => te( () => import("./SharedResourceDetail-bbc718fc.js"), ["assets/SharedResourceDetail-bbc718fc.js", "assets/FileDetail.vue_vue_type_script_setup_true_lang-97faf05c.js", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/select-734292f5.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/button-d8ed470c.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/department-8b22241b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/avatar@4x-521b329f.js", "assets/FileDetail-9860b98d.css", "assets/checkbox-group-987ef89c.css", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-58b71108.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", ]),
    props: !0,
}, {
    path: "/capture-course",
    name: "capture",
    meta: {
        trackName: "公开录播课"
    },
    component: () => te( () => import("./Index-6b59f9e4.js"), ["assets/Index-6b59f9e4.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/CaptureCourseFilter-45d56e26.js", "assets/TeachingClassNameSelector.vue_vue_type_script_setup_true_lang-18019a8d.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/statistic-822160fe.js", "assets/index-5ea2a65b.js", "assets/format-7a4d8ce0.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/filter-08783406.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/groupBy-60897391.js", "assets/features-138c7e7f.js", "assets/ClassificationSelector-dabfb4b4.js", "assets/classification-5690e720.js", "assets/ClassificationSelector-83924db7.css", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/CaptureCourseFilter-4428d088.css", "assets/button-d8ed470c.css", "assets/index-441ded63.js", "assets/common-d2275ef8.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/userCollectStore-e2c2b216.js", "assets/load-failed-63e2004c.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/StateFilter.vue_vue_type_script_setup_true_lang-4fe1c2f7.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/radio-button-bc16eb27.css", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/LiveHeader-4f91d65e.js", "assets/LiveHeader-4b04d742.css", "assets/Index-2e72bc66.css", ]),
}, {
    path: "/capture-course/:code/detail",
    name: "oldCaptureCourseDetail",
    meta: {
        trackName: "录播课详情-旧"
    },
    redirect: (e) => ({
        name: "captureCourseDetail",
        params: {
            fromType: "3",
            semesterCode: "-",
            code: e.params.code
        },
    }),
}, {
    path: "/:fromType/:semesterCode/capture-course/:code/detail",
    name: "captureCourseDetail",
    meta: {
        trackName: "录播课详情"
    },
    component: () => te( () => import("./Index-183e19b1.js"), ["assets/Index-183e19b1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/schedules-aede8d61.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/error-78e43d3e.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/event-9519ab40.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/image-viewer-c41b5a40.css", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/button-d8ed470c.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/common-d2275ef8.js", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/dropdown-58b71108.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/cover-default-5-5900f49a.js", "assets/player-1745ed3f.js", "assets/statistic-822160fe.js", "assets/collection-6c2884ad.js", "assets/useEntry-4a436709.js", "assets/load-failed-63e2004c.js", "assets/union-e2b59439.js", "assets/_baseUniq-7f3f9cd1.js", "assets/noop-cb277961.js", "assets/Index-a2650490.css", ]),
    props: (e) => ({
        semesterCode: e.params.semesterCode,
        code: e.params.code,
        fromType: e.params.fromType || "",
    }),
}, {
    path: "/capture-course/captures/:captureCode",
    name: "capture-detail",
    meta: {
        trackName: "录播课回放页"
    },
    component: () => te( () => import("./NewReplayDetail-21bd264f.js"), ["assets/NewReplayDetail-21bd264f.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/button-d8ed470c.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/Tooltip-d5037ee9.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/ScheduleInfo.vue_vue_type_script_setup_true_lang-dfdd75ae.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/schedules-aede8d61.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/event-9519ab40.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/capture-6b754c68.js", "assets/statistic-822160fe.js", "assets/capture-443b2e25.js", "assets/includes-7746ba81.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/useEntry-4a436709.js", "assets/common-d2275ef8.js", "assets/track-b1f84820.js", "assets/ScheduleAttendanceDetail-a6a071b2.js", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/ScheduleAttendanceDetail-a06c4d5a.css", "assets/NewReplayDetail-fd442826.css", ]),
    props: (e) => ({
        captureCode: e.params.captureCode,
        fromPath: e.query.fromPath || "",
        startAt: e.query.startAt || "",
    }),
}, {
    path: "/capture-course/:captureCode/clip",
    name: "captureClip",
    meta: {
        trackName: "录播课剪辑"
    },
    component: () => te( () => import("./CaptureVideoClip-66c6b25c.js"), ["assets/CaptureVideoClip-66c6b25c.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", ]),
    props: (e) => ({
        captureCode: e.params.captureCode
    }),
}, {
    path: "/live",
    name: "live",
    meta: {
        trackName: "直播"
    },
    component: () => te( () => import("./Index-76048751.js"), ["assets/Index-76048751.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/col-3a392cdc.js", "assets/col-a54c93be.css", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/classrooms-61691da5.js", "assets/groupBy-60897391.js", "assets/features-138c7e7f.js", "assets/format-7a4d8ce0.js", "assets/common-d2275ef8.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/player-1745ed3f.js", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/captureCourse-1d01f607.js", "assets/LiveHeader-4f91d65e.js", "assets/LiveHeader-4b04d742.css", "assets/input-7b10d695.css", "assets/statistic-822160fe.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/union-e2b59439.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/Index-f7e9cc80.css", "assets/tag-dd87478a.css", "assets/radio-button-bc16eb27.css", ]),
}, {
    path: "/:fromType/live/:id",
    name: "liveDetail",
    meta: {
        trackName: "直播详情"
    },
    component: () => te( () => import("./HomeScheduleDetail-c36ca6b5.js"), ["assets/HomeScheduleDetail-c36ca6b5.js", "assets/ScheduleDetailInner-5cfdff57.js", "assets/ScheduleFailed.vue_vue_type_script_setup_true_lang-1e86148a.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/common-d2275ef8.js", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/multi-player.esm-803f77a6.js", "assets/wg-video-player-dc32f3fe.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/ScheduleInfo.vue_vue_type_script_setup_true_lang-dfdd75ae.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/Tooltip-d5037ee9.css", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/error-78e43d3e.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/event-9519ab40.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/image-viewer-c41b5a40.css", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/capture-6b754c68.js", "assets/statistic-822160fe.js", "assets/index-441ded63.js", "assets/useEntry-4a436709.js", "assets/features-138c7e7f.js", "assets/track-b1f84820.js", "assets/ScheduleDetailInner-45dd7590.css", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/dropdown-58b71108.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/ScheduleAttendanceDetail-a6a071b2.js", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/ScheduleAttendanceDetail-a06c4d5a.css", ]),
    props: (e) => ({
        id: e.params.id,
        fromType: e.params.fromType
    }),
}, {
    path: "/resource/index",
    name: "resource-index",
    component: () => te( () => import("./Index-e5e068da.js"), ["assets/Index-e5e068da.js", "assets/radio-group-423d61bb.js", "assets/event-9519ab40.js", "assets/index-75bf5e22.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/radio-group-cacb5b7d.css", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/classification-5690e720.js", "assets/state-e20f65a1.js", "assets/filter-08783406.js", "assets/groupBy-60897391.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-a7814bcd.js", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/collapse-item-2962675a.js", "assets/castArray-37d5eff8.js", "assets/collapse-item-c2d27d44.css", "assets/snakeCase-654b0c81.js", "assets/classification-1e5eb488.js", "assets/subjectCategory-cd03d342.js", "assets/Index-bc30874e.css", "assets/radio-button-bc16eb27.css", ]),
    children: [{
        path: "/resource/course",
        name: "resource-course",
        meta: {
            trackName: "资源-录播课"
        },
        component: () => te( () => import("./Index-5fc0e386.js"), ["assets/Index-5fc0e386.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/CaptureCourseFilter-45d56e26.js", "assets/TeachingClassNameSelector.vue_vue_type_script_setup_true_lang-18019a8d.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/statistic-822160fe.js", "assets/index-5ea2a65b.js", "assets/format-7a4d8ce0.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/filter-08783406.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/groupBy-60897391.js", "assets/features-138c7e7f.js", "assets/ClassificationSelector-dabfb4b4.js", "assets/classification-5690e720.js", "assets/ClassificationSelector-83924db7.css", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/CaptureCourseFilter-4428d088.css", "assets/button-d8ed470c.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/userCollectStore-e2c2b216.js", "assets/load-failed-63e2004c.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/StateFilter.vue_vue_type_script_setup_true_lang-a349df8c.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/radio-button-bc16eb27.css", "assets/index-a24b3f2d.js", "assets/api-db04a821.js", "assets/common-d2275ef8.js", "assets/index-441ded63.js", ]),
        props: (e) => ({
            classificationIds: e.query.classificationIds
        }),
    }, {
        path: "/resource/file",
        name: "resource-file",
        meta: {
            trackName: "资源-文件"
        },
        component: () => te( () => import("./NewIndex-3ca94d51.js"), ["assets/NewIndex-3ca94d51.js", "assets/_plugin-vue_export-helper-c27b6911.js", ]),
        redirect: {
            name: "allFiles"
        },
        children: [{
            path: "all",
            name: "allFiles",
            meta: {
                trackName: "资源-文件-全部"
            },
            component: () => te( () => import("./AllFilesIndex-a34291fa.js"), ["assets/AllFilesIndex-a34291fa.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/index-a24b3f2d.js", "assets/classification-1e5eb488.js", "assets/api-db04a821.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/AllFilesIndex-4428c721.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds,
                parentId: e.query.parentId,
            }),
        }, {
            path: "docs",
            name: "docFiles",
            meta: {
                trackName: "资源-文件-文档"
            },
            component: () => te( () => import("./DocFilesView-9c207a6d.js"), ["assets/DocFilesView-9c207a6d.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/DocFilesView-347d1e1c.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "videos",
            name: "videoFiles",
            meta: {
                trackName: "资源-文件-视频"
            },
            component: () => te( () => import("./VideoFilesView-d231f7b7.js"), ["assets/VideoFilesView-d231f7b7.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/VideoFilesView-4386334b.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "imgs",
            name: "imgFiles",
            meta: {
                trackName: "资源-文件-图片"
            },
            component: () => te( () => import("./ImageFilesView-e6391ea2.js"), ["assets/ImageFilesView-e6391ea2.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/ImageList.vue_vue_type_script_setup_true_lang-734b94f3.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/avatar-eccf9b6f.js", "assets/load-failed-63e2004c.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/features-138c7e7f.js", "assets/index-0b21b060.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/popover-79f68d83.css", "assets/ImageFilesView-b1f90e87.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "audios",
            name: "audioFiles",
            meta: {
                trackName: "资源-文件-音频"
            },
            component: () => te( () => import("./AudioFilesView-a698c2f9.js"), ["assets/AudioFilesView-a698c2f9.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/AudioFilesView-fc66f1fe.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "subject-libs",
            name: "subjectLibFiles",
            meta: {
                trackName: "资源-文件-题库"
            },
            component: () => te( () => import("./SubjectLibFilesView-917ecbc6.js"), ["assets/SubjectLibFilesView-917ecbc6.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/SubjectLibFilesView-4571a348.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "links",
            name: "linkFiles",
            meta: {
                trackName: "资源-文件-链接"
            },
            component: () => te( () => import("./LinkFilesView-6c83df46.js"), ["assets/LinkFilesView-6c83df46.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/LinkFilesView-728ab670.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "lesson-resources",
            name: "lessonResourceFiles",
            meta: {
                trackName: "资源-文件-录播教材"
            },
            component: () => te( () => import("./LessonResourceFilesView-094bafa4.js"), ["assets/LessonResourceFilesView-094bafa4.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/LessonResourceFilesView-b1e56384.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, {
            path: "others",
            name: "otherFiles",
            meta: {
                trackName: "资源-文件-其他"
            },
            component: () => te( () => import("./OtherFilesView-cd3a91f8.js"), ["assets/OtherFilesView-cd3a91f8.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/filesView-2eb242de.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/isString-23c0a126.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/OtherFilesView-bf2e8c72.css", ]),
            props: (e) => ({
                classificationIds: e.query.classificationIds
            }),
        }, ],
    }, {
        path: "/resource/topic",
        name: "resource-topic",
        meta: {
            trackName: "资源-专题"
        },
        component: () => te( () => import("./Index-75da964b.js"), ["assets/Index-75da964b.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/classification-30e95334.js", "assets/state-e20f65a1.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/input-7b10d695.css", "assets/TopicCard-9af1bf91.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/avatar-eccf9b6f.js", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/index-0b21b060.js", "assets/TopicCard-55ee01d3.css", "assets/popover-79f68d83.css", "assets/topic-c74d1b58.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/topicDetail-8a2ecf84.js", "assets/tag-dd87478a.css", ]),
        props: (e) => ({
            classificationIds: e.query.classificationIds
        }),
    }, ],
}, {
    path: "/user/capture",
    name: "user-capture",
    meta: {
        trackName: "直录播-我的录播课"
    },
    component: () => te( () => import("./UserCaptureCourse-50f03ab6.js"), ["assets/UserCaptureCourse-50f03ab6.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/format-7a4d8ce0.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/userCollectStore-e2c2b216.js", "assets/load-failed-63e2004c.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/StateFilter.vue_vue_type_script_setup_true_lang-4fe1c2f7.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/radio-button-bc16eb27.css", "assets/LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/LiveHeader-4f91d65e.js", "assets/LiveHeader-4b04d742.css", "assets/input-7b10d695.css", "assets/TheUserCaptureFilter-7bc60d86.js", "assets/TeachingClassNameSelector.vue_vue_type_script_setup_true_lang-18019a8d.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/statistic-822160fe.js", "assets/index-5ea2a65b.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/tag-dd87478a.css", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/filter-08783406.js", "assets/TheUserCaptureFilter-39056c21.css", ]),
}, {
    path: "/user/",
    name: "userProfile",
    component: () => te( () => import("./Index-59c3bf24.js"), ["assets/Index-59c3bf24.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/features-138c7e7f.js", "assets/index-cd398c35.js", "assets/index-7355e1df.js", "assets/collapse-item-2962675a.js", "assets/castArray-37d5eff8.js", "assets/collapse-item-c2d27d44.css", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/snakeCase-654b0c81.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/index-201f8282.js", "assets/Shared-f4076fb3.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/index-852bd970.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/Loading-f988a6d6.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceSize-b4de7898.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/tags-251e6691.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/noop-cb277961.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/space-581608b3.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/fileItem-5de370d7.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/Shared-5ad69ab7.css", "assets/UserTrack-891c4bce.js", "assets/Search-48650f1d.js", "assets/Search-bc28919c.css", "assets/UserTrack-0a2d471a.css", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/Index-ca9987f4.css", "assets/radio-button-bc16eb27.css", ]),
    children: [{
        path: "capture-course",
        name: "userCaptureCourse",
        meta: {
            tabName: "captureCourse",
            trackName: "个人中心-录播课"
        },
        component: () => te( () => import("./Index-f3f4dde8.js"), ["assets/Index-f3f4dde8.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/format-7a4d8ce0.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/userCollectStore-e2c2b216.js", "assets/load-failed-63e2004c.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/StateFilter.vue_vue_type_script_setup_true_lang-4fe1c2f7.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/radio-button-bc16eb27.css", "assets/TheUserCaptureFilter-7bc60d86.js", "assets/TeachingClassNameSelector.vue_vue_type_script_setup_true_lang-18019a8d.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/statistic-822160fe.js", "assets/index-5ea2a65b.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/filter-08783406.js", "assets/features-138c7e7f.js", "assets/TheUserCaptureFilter-39056c21.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/swiper-1f7d1e38.css", ]),
        props: (e) => ({
            uid: e.params.uid,
            keyword: e.query.keyword
        }),
    }, {
        path: "collect-course",
        name: "userCollectCourse",
        meta: {
            tabName: "collect",
            trackName: "个人中心-收藏-录播课"
        },
        component: () => te( () => import("./Index-babb3347.js"), ["assets/Index-babb3347.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/statistic-822160fe.js", "assets/userCollectStore-e2c2b216.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/format-7a4d8ce0.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/load-failed-63e2004c.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/input-7b10d695.css", "assets/StateFilter.vue_vue_type_script_setup_true_lang-a349df8c.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/radio-button-bc16eb27.css", "assets/TeachingClassNameSelector.vue_vue_type_script_setup_true_lang-18019a8d.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/index-5ea2a65b.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/tag-dd87478a.css", "assets/DepartmentSelector.vue_vue_type_script_setup_true_lang-37a1ae92.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/filter-08783406.js", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/groupBy-60897391.js", "assets/features-138c7e7f.js", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/Index-a05c4bd1.css", ]),
        props: (e) => ({
            uid: e.params.uid,
            keyword: e.query.keyword
        }),
    }, {
        path: "collect-file",
        name: "userCollectFile",
        meta: {
            tabName: "collect",
            trackName: "个人中心-收藏-文件"
        },
        component: () => te( () => import("./CollectionsView-e4a84c14.js"), ["assets/CollectionsView-e4a84c14.js", "assets/_plugin-vue_export-helper-c27b6911.js", ]),
        props: (e) => ({
            uid: e.params.uid,
            keyword: e.query.keyword,
            fileType: e.query.fileType,
        }),
        redirect: {
            name: "collectionAll"
        },
        children: [{
            path: "all",
            name: "collectionAll",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-全部",
            },
            component: () => te( () => import("./CollectionsAllView-1de00261.js"), ["assets/CollectionsAllView-1de00261.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsAllView-739b8d42.css", ]),
        }, {
            path: "doc",
            name: "collectionDoc",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-文档",
            },
            component: () => te( () => import("./CollectionsDocView-03e37f0b.js"), ["assets/CollectionsDocView-03e37f0b.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsDocView-7d89fc18.css", ]),
        }, {
            path: "video",
            name: "collectionVideo",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-视频",
            },
            component: () => te( () => import("./CollectionsVideoView-4db306da.js"), ["assets/CollectionsVideoView-4db306da.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsVideoView-35e2bfb0.css", ]),
        }, {
            path: "image",
            name: "collectionImage",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-图片",
            },
            component: () => te( () => import("./CollectionsImgView-b9337cec.js"), ["assets/CollectionsImgView-b9337cec.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/ImageList.vue_vue_type_script_setup_true_lang-734b94f3.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/avatar-eccf9b6f.js", "assets/load-failed-63e2004c.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/features-138c7e7f.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/popover-79f68d83.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", ]),
        }, {
            path: "audio",
            name: "collectionAudio",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-音频",
            },
            component: () => te( () => import("./CollectionsAudioView-648f75c7.js"), ["assets/CollectionsAudioView-648f75c7.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsAudioView-9793a2b9.css", ]),
        }, {
            path: "subject-lib",
            name: "collectionSubjectLib",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-题库",
            },
            component: () => te( () => import("./CollectionsSubjectLibView-c9295b65.js"), ["assets/CollectionsSubjectLibView-c9295b65.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsSubjectLibView-a1e09992.css", ]),
        }, {
            path: "link",
            name: "collectionLink",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-链接",
            },
            component: () => te( () => import("./CollectionsLinkView-6d6c03f5.js"), ["assets/CollectionsLinkView-6d6c03f5.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsLinkView-522ba2cd.css", ]),
        }, {
            path: "lesson-resource",
            name: "collectionLessonResource",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-录播教材",
            },
            component: () => te( () => import("./CollectionsLessonResourceView-ffd846c3.js"), ["assets/CollectionsLessonResourceView-ffd846c3.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsLessonResourceView-6ef54b88.css", ]),
        }, {
            path: "collection-file",
            name: "collectionFile",
            meta: {
                tabName: "collect",
                trackName: "个人中心-收藏-文件-其他",
            },
            component: () => te( () => import("./CollectionsOtherView-3e7f2639.js"), ["assets/CollectionsOtherView-3e7f2639.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/resourceFile-d5ee92a4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceReference-91478fc4.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/PublishTimeFilter-8948f359.css", "assets/base-edee9e02.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/FileList-1cbe00bc.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/CollectionsOtherView-7f424b71.css", ]),
        }, ],
    }, {
        path: "collect-topic",
        name: "userCollectTopic",
        meta: {
            tabName: "collect",
            trackName: "个人中心-收藏-专题"
        },
        component: () => te( () => import("./Index-70452563.js"), ["assets/Index-70452563.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/date-picker-7d506d52.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/base-edee9e02.css", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/input-7b10d695.css", "assets/TopicCard-9af1bf91.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/avatar-eccf9b6f.js", "assets/userCollectStore-e2c2b216.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/index-0b21b060.js", "assets/TopicCard-55ee01d3.css", "assets/popover-79f68d83.css", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/topicDetail-8a2ecf84.js", "assets/tag-dd87478a.css", ]),
        props: (e) => ({
            uid: e.params.uid,
            keyword: e.query.keyword
        }),
    }, {
        path: "share",
        name: "userShare",
        meta: {
            tabName: "share",
            trackName: "个人中心-分享-我的分享"
        },
        component: () => te( () => import("./Shared-f4076fb3.js"), ["assets/Shared-f4076fb3.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/index-201f8282.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceSize-b4de7898.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/tags-251e6691.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/space-581608b3.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/Shared-5ad69ab7.css", ]),
        props: (e) => ({
            uid: e.params.uid,
            shareType: "shared"
        }),
    }, {
        path: "shareToMe",
        name: "shareToMe",
        meta: {
            tabName: "share",
            trackName: "个人中心-分享-分享给我"
        },
        component: () => te( () => import("./Shared-f4076fb3.js"), ["assets/Shared-f4076fb3.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/index-201f8282.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/resourceSize-b4de7898.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-d058dd4c.js", "assets/vnode-c656dd72.js", "assets/aria-bc8e8b0f.js", "assets/tags-251e6691.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/PublishTimeFilter.vue_vue_type_style_index_0_lang-553db4e0.js", "assets/date-picker-7d506d52.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/semester-3b9307bc.js", "assets/semester-ba636a32.js", "assets/PublishTimeFilter-8948f359.css", "assets/input-7b10d695.css", "assets/button-d8ed470c.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/space-581608b3.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/Search.vue_vue_type_script_setup_true_lang-361a7d6e.js", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/Shared-5ad69ab7.css", ]),
        props: (e) => ({
            uid: e.params.uid,
            shareType: "shareToMe"
        }),
    }, {
        path: "track",
        name: "userTrack",
        meta: {
            tabName: "track",
            trackName: "个人中心-关注"
        },
        component: () => te( () => import("./UserTrack-891c4bce.js"), ["assets/UserTrack-891c4bce.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/input-7b10d695.css", "assets/avatar-eccf9b6f.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/messageBox-7f9e80e3.js", "assets/index-d058dd4c.js", "assets/aria-bc8e8b0f.js", "assets/index-201f8282.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/UserTrack-0a2d471a.css", "assets/tag-dd87478a.css", ]),
        props: (e) => ({
            uid: e.params.uid
        }),
    }, ],
}, {
    path: "/topic-detail/:fromType/topic/:id",
    name: "topicDetail",
    component: () => te( () => import("./TopicDetail-017cfbae.js"), ["assets/TopicDetail-017cfbae.js", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/radio-group-423d61bb.js", "assets/event-9519ab40.js", "assets/index-75bf5e22.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/radio-group-cacb5b7d.css", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/schedules-aede8d61.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/image-viewer-c41b5a40.css", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/button-d8ed470c.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/topicDetail-8a2ecf84.js", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/dropdown-58b71108.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/tags-251e6691.js", "assets/collection-6c2884ad.js", "assets/topic-c74d1b58.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/TopicDetail-dc9419c0.css", "assets/radio-button-bc16eb27.css", ]),
    props: (e) => ({
        id: e.params.id,
        fromType: e.params.fromType
    }),
    children: [{
        path: "file",
        name: "topic-file",
        meta: {
            trackName: "专题-文件"
        },
        component: () => te( () => import("./File-10a05588.js"), ["assets/File-10a05588.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/FileList-1cbe00bc.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/scrollbar-0f476697.js", "assets/error-78e43d3e.js", "assets/scrollbar-715725a6.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/PaginationScrollbar-2798534e.css", "assets/base-edee9e02.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/Tooltip-d5037ee9.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/features-138c7e7f.js", "assets/fileItem-5de370d7.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/resourceSize-b4de7898.js", "assets/uniq-ab2d8a11.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/FileList-ba10c6ae.css", "assets/resourceReference-91478fc4.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/index-5ea2a65b.js", "assets/isString-23c0a126.js", "assets/File-8f96f31e.css", ]),
    }, {
        name: "topic-course",
        path: "course",
        meta: {
            trackName: "专题-课程"
        },
        component: () => te( () => import("./CaptureCourse-bd6ba85b.js"), ["assets/CaptureCourse-bd6ba85b.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/CourseCard.vue_vue_type_script_setup_true_lang-0f38f821.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/format-7a4d8ce0.js", "assets/cover-default-5-5900f49a.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/userCollectStore-e2c2b216.js", "assets/load-failed-63e2004c.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/statistic-822160fe.js", "assets/filter-08783406.js", "assets/union-e2b59439.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/features-138c7e7f.js", "assets/CaptureCourse-c2aaf8a2.css", ]),
    }, ],
}, {
    path: "/notfound/:subCode",
    name: "notFound",
    meta: {
        trackName: "not-found"
    },
    component: () => te( () => import("./NotFound-d909207e.js"), ["assets/NotFound-d909207e.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", ]),
    props: (e) => ({
        subCode: e.params.subCode
    }),
}, {
    path: "/:pathMatch(.*)*",
    meta: {
        trackName: "404"
    },
    redirect: "/404"
}, {
    name: "publishedResourceDetail",
    path: "/admin/published-resource/:id",
    meta: {
        trackName: "公开资源详情"
    },
    component: () => te( () => import("./ResourceReferenceDetail-29d42f30.js"), ["assets/ResourceReferenceDetail-29d42f30.js", "assets/FileDetail.vue_vue_type_script_setup_true_lang-97faf05c.js", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/select-734292f5.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/button-d8ed470c.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/department-8b22241b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/avatar@4x-521b329f.js", "assets/FileDetail-9860b98d.css", "assets/checkbox-group-987ef89c.css", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", ]),
    props: (e) => ({
        id: e.params.id,
        uiVisible: {
            interaction: !1,
            comment: !1,
            commentArea: !0,
            interactionCount: !0,
        },
    }),
}, {
    name: "unpublishedResourceDetail",
    path: "/admin/unpublished-resource/:id",
    meta: {
        trackName: "未公开资源详情"
    },
    component: () => te( () => import("./ResourceReferenceDetail-29d42f30.js"), ["assets/ResourceReferenceDetail-29d42f30.js", "assets/FileDetail.vue_vue_type_script_setup_true_lang-97faf05c.js", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/select-734292f5.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/button-d8ed470c.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/department-8b22241b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/avatar@4x-521b329f.js", "assets/FileDetail-9860b98d.css", "assets/checkbox-group-987ef89c.css", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", ]),
    props: (e) => ({
        id: e.params.id,
        uiVisible: {
            interaction: !1,
            comment: !1,
            commentArea: !1,
            interactionCount: !1,
        },
    }),
}, {
    name: "auditingResourceDetail",
    path: "/admin/auditing-resource/:id",
    meta: {
        trackName: "资源审核详情"
    },
    component: () => te( () => import("./ResourceReferenceDetail-29d42f30.js"), ["assets/ResourceReferenceDetail-29d42f30.js", "assets/FileDetail.vue_vue_type_script_setup_true_lang-97faf05c.js", "assets/checkbox-fc5156f5.js", "assets/event-9519ab40.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/error-78e43d3e.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-d058dd4c.js", "assets/scroll-f5144cac.js", "assets/aria-bc8e8b0f.js", "assets/validator-700fab12.js", "assets/index-852bd970.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/select-734292f5.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/button-d8ed470c.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/ResourceIntro.vue_vue_type_script_setup_true_lang-1ad58ebc.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/schedules-aede8d61.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/index-e40132d5.js", "assets/refs-d6db451d.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/resourceSize-b4de7898.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/department-8b22241b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/avatar@4x-521b329f.js", "assets/FileDetail-9860b98d.css", "assets/checkbox-group-987ef89c.css", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", ]),
    props: (e) => ({
        id: e.params.id,
        uiVisible: {
            interaction: !1,
            comment: !1,
            commentArea: !1,
            interactionCount: !1,
        },
    }),
}, {
    path: "/admin/captures/:captureCode",
    name: "admin-capture-detail",
    meta: {
        trackName: "录播课管理详情"
    },
    component: () => te( () => import("./NewCaptureDetail-1e40c398.js"), ["assets/NewCaptureDetail-1e40c398.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/button-d8ed470c.css", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/Tooltip-d5037ee9.css", "assets/index-8d5f54d3.js", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/multi-player.esm-803f77a6.js", "assets/wg-video-player-dc32f3fe.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/ScheduleInfo.vue_vue_type_script_setup_true_lang-dfdd75ae.js", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/schedules-aede8d61.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/error-78e43d3e.js", "assets/scroll-f5144cac.js", "assets/vnode-c656dd72.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/event-9519ab40.js", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/image-viewer-c41b5a40.css", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/capture-6b754c68.js", "assets/statistic-822160fe.js", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/capture-443b2e25.js", "assets/includes-7746ba81.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/features-138c7e7f.js", "assets/track-b1f84820.js", "assets/ScheduleAttendanceDetail-a6a071b2.js", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/ScheduleAttendanceDetail-a06c4d5a.css", "assets/NewCaptureDetail-1968c0b4.css", ]),
    props: (e) => ({
        captureCode: e.params.captureCode,
        fromPath: e.query.fromPath || "",
    }),
}, {
    path: "/admin/schedules-management/:fromType/detail/:id",
    name: "adminScheduleDetail",
    meta: {
        trackName: "排程管理详情"
    },
    component: () => te( () => import("./AdminScheduleDetail-8d192cf9.js"), ["assets/AdminScheduleDetail-8d192cf9.js", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-852bd970.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/ScheduleDetailInner-5cfdff57.js", "assets/ScheduleFailed.vue_vue_type_script_setup_true_lang-1e86148a.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/common-d2275ef8.js", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/button-d8ed470c.css", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/Loading-f988a6d6.css", "assets/multi-player.esm-803f77a6.js", "assets/wg-video-player-dc32f3fe.js", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/ScheduleInfo.vue_vue_type_script_setup_true_lang-dfdd75ae.js", "assets/PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js", "assets/avatar-eccf9b6f.js", "assets/captureCourses-571fa455.js", "assets/format-7a4d8ce0.js", "assets/_baseDifference-a71ad5d9.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/_baseFlatten-22d0f10c.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/refs-d6db451d.js", "assets/event-9519ab40.js", "assets/PeerLearning-476224e2.css", "assets/overlay-c52f1d36.css", "assets/capture-6b754c68.js", "assets/statistic-822160fe.js", "assets/index-441ded63.js", "assets/useEntry-4a436709.js", "assets/features-138c7e7f.js", "assets/track-b1f84820.js", "assets/ScheduleDetailInner-45dd7590.css", "assets/ScheduleAttendanceDetail-a6a071b2.js", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/ScheduleAttendanceDetail-a06c4d5a.css", ]),
    props: (e) => ({
        id: e.params.id,
        fromType: e.params.fromType,
        fromPath: e.query.fromPath || "",
    }),
}, {
    name: "knowledge-graph",
    path: "/knowledge-graph",
    meta: {
        trackName: "知识图谱"
    },
    component: () => te( () => import("./Index-cb9ed756.js"), ["assets/Index-cb9ed756.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/tab-pane-f009d3b1.js", "assets/strings-e56560b0.js", "assets/event-9519ab40.js", "assets/tab-pane-928d3bfb.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/common-d2275ef8.js", "assets/index-441ded63.js", "assets/useImage-6d8c8727.js", "assets/cover-default-5-5900f49a.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/PreviewProvider.vue_vue_type_script_setup_true_lang-26c4a6df.js", "assets/format-7a4d8ce0.js", "assets/resourceAction-775afc53.js", "assets/messageBox-7f9e80e3.js", "assets/index-70ab186b.js", "assets/validator-700fab12.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/index-f828bf41.js", "assets/iframeResizer.contentWindow-1289f304.js", "assets/input-number-a8c83cb4.js", "assets/index-9072fb3a.js", "assets/input-number-5cd3bf6b.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/index-0b21b060.js", "assets/select-734292f5.js", "assets/index-8d5f54d3.js", "assets/index-81e70d48.js", "assets/select-54108b90.css", "assets/_isIterateeCall-8408f4d1.js", "assets/PreviewProvider-0f433ae6.css", "assets/popover-79f68d83.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/topicDetail-8a2ecf84.js", "assets/topic-c74d1b58.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/tags-251e6691.js", "assets/tree-19fc87f8.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/tree-0ec02aad.css", "assets/Loading-3fc98d0e.js", "assets/Loading-f988a6d6.css", "assets/collapse-item-2962675a.js", "assets/castArray-37d5eff8.js", "assets/collapse-item-c2d27d44.css", "assets/breadcrumb-item-3834ac4d.js", "assets/breadcrumb-item-036e4d21.css", "assets/Index-3b324954.css", "assets/overlay-c52f1d36.css", ]),
}, {
    name: "tagRelatedResource",
    path: "/tag-related-resource/:id",
    meta: {
        trackName: "标签关联资源详情"
    },
    component: () => te( () => import("./Index-375892b2.js"), ["assets/Index-375892b2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/common-d2275ef8.js", "assets/avatar-eccf9b6f.js", "assets/format-7a4d8ce0.js", "assets/player-1745ed3f.js", "assets/useImage-6d8c8727.js", "assets/cover-default-5-5900f49a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/department-5c895b48.js", "assets/department-8b22241b.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/statistic-822160fe.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/topicDetail-8a2ecf84.js", "assets/TopicCard-9af1bf91.js", "assets/userCollectStore-e2c2b216.js", "assets/index-0b21b060.js", "assets/dropdown-b1de474f.js", "assets/TopicCard-55ee01d3.css", "assets/popover-79f68d83.css", "assets/button-d8ed470c.css", "assets/topic-c74d1b58.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/main-aeb1d478.js", "assets/main-931f2bb8.css", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/features-138c7e7f.js", "assets/resourceSize-b4de7898.js", "assets/resourceReference-91478fc4.js", "assets/DefaultLayout-681f91fd.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/UserMenus-8e4a0d0a.css", "assets/dropdown-503a69cf.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/dropdown-item-e3b0c442.css", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/tags-251e6691.js", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/Index-1e48c8cf.css", "assets/overlay-c52f1d36.css", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", ]),
    props: (e) => ({
        id: e.params.id
    }),
}, {
    name: "fullTextSearch",
    path: "/search",
    meta: {
        trackName: "全文搜索"
    },
    component: () => te( () => import("./Index-db8ef837.js"), ["assets/Index-db8ef837.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/DefaultLayout-681f91fd.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-7355e1df.js", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", "assets/DefaultLayout-d0dfd288.css", "assets/fullTextSearch-09db1506.js", "assets/index-5ea2a65b.js", "assets/format-7a4d8ce0.js", "assets/pageQuery-c1943b3c.js", "assets/Index-e206fcd7.css", ]),
    props: !0,
    children: [{
        name: "fullTextSearchAll",
        path: "",
        alias: ["all"],
        meta: {
            tabName: "all",
            trackName: "全文搜索-全部"
        },
        component: () => te( () => import("./AllFullTextTabPane-1e216eee.js"), ["assets/AllFullTextTabPane-1e216eee.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/ScheduleDocItem.vue_vue_type_script_setup_true_lang-8b12ec71.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/schedule-2179e2a5.js", "assets/index-441ded63.js", "assets/common-d2275ef8.js", "assets/avatar-eccf9b6f.js", "assets/player-1745ed3f.js", "assets/format-7a4d8ce0.js", "assets/FolderFileDetailShim.vue_vue_type_script_setup_true_lang-cb22de8a.js", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/resourceSize-b4de7898.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/features-138c7e7f.js", "assets/resourceReference-91478fc4.js", "assets/FolderFileDetailShim-56638d52.css", "assets/input-7b10d695.css", "assets/TopicDocItem.vue_vue_type_script_setup_true_lang-e84e3a83.js", "assets/topicDetail-8a2ecf84.js", "assets/fullTextSearch-09db1506.js", "assets/index-5ea2a65b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/statistic-822160fe.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/topic-c74d1b58.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", ]),
        props: (e) => ({
            keyword: e.query.keyword
        }),
    }, {
        name: "fullTextSearchSchedule",
        path: "schedule",
        meta: {
            tabName: "schedule",
            trackName: "全文搜索-直录播"
        },
        component: () => te( () => import("./ScheduleFullTextTabPane-e5e5f5d4.js"), ["assets/ScheduleFullTextTabPane-e5e5f5d4.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/ScheduleDocItem.vue_vue_type_script_setup_true_lang-8b12ec71.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/schedule-2179e2a5.js", "assets/index-441ded63.js", "assets/common-d2275ef8.js", "assets/avatar-eccf9b6f.js", "assets/player-1745ed3f.js", "assets/format-7a4d8ce0.js", "assets/fullTextSearch-09db1506.js", "assets/index-5ea2a65b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/statistic-822160fe.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/input-7b10d695.css", ]),
        props: (e) => ({
            keyword: e.query.keyword
        }),
    }, {
        name: "fullTextSearchResource",
        path: "resource",
        meta: {
            tabName: "resource",
            trackName: "全文搜索-文件"
        },
        component: () => te( () => import("./FileFullTextTabPane-126956be.js"), ["assets/FileFullTextTabPane-126956be.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/FolderFileDetailShim.vue_vue_type_script_setup_true_lang-cb22de8a.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/CCLicenseIcon.vue_vue_type_script_setup_true_lang-fad1fe68.js", "assets/ResourceIcon.vue_vue_type_script_setup_true_lang-36309bed.js", "assets/format-7a4d8ce0.js", "assets/avatar-eccf9b6f.js", "assets/resourceSize-b4de7898.js", "assets/PaginationScrollbar-ed0f0817.js", "assets/PaginationScrollbar-2798534e.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/space-581608b3.js", "assets/vnode-c656dd72.js", "assets/space-417b6673.css", "assets/features-138c7e7f.js", "assets/resourceReference-91478fc4.js", "assets/FolderFileDetailShim-56638d52.css", "assets/input-7b10d695.css", "assets/fullTextSearch-09db1506.js", "assets/index-5ea2a65b.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", ]),
        props: (e) => ({
            keyword: e.query.keyword
        }),
    }, {
        name: "fullTextSearchTopic",
        path: "topic",
        meta: {
            tabName: "topic",
            trackName: "全文搜索-专题"
        },
        component: () => te( () => import("./TopicFullTextTabPane-f2bf21f3.js"), ["assets/TopicFullTextTabPane-f2bf21f3.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/EmptyPage.vue_vue_type_script_setup_true_lang-0b7a91a2.js", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/event-9519ab40.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/error-78e43d3e.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/strings-e56560b0.js", "assets/index-852bd970.js", "assets/index-a7814bcd.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/TopicDocItem.vue_vue_type_script_setup_true_lang-e84e3a83.js", "assets/ResourceTagList.vue_vue_type_script_setup_true_lang-5a9b91f1.js", "assets/ResourceTag.vue_vue_type_script_setup_true_lang-a6d18bf4.js", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/tag-dd87478a.css", "assets/noop-cb277961.js", "assets/avatar-eccf9b6f.js", "assets/topicDetail-8a2ecf84.js", "assets/fullTextSearch-09db1506.js", "assets/index-5ea2a65b.js", "assets/format-7a4d8ce0.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/topic-c74d1b58.js", "assets/input-7b10d695.css", ]),
        props: (e) => ({
            keyword: e.query.keyword
        }),
    }, ],
}, {
    path: "/proxy/:fromType/live/:id",
    name: "proxyLiveDetail",
    meta: {
        trackName: "直播详情"
    },
    redirect: {
        name: "liveDetail"
    },
}, {
    path: "/proxy/:fromType/:semesterCode/capture-course/:code/detail",
    name: "proxyCaptureCourseDetail",
    meta: {
        trackName: "录播课详情"
    },
    redirect: {
        name: "captureCourseDetail"
    },
}, {
    path: "/no-permission/:subCode",
    name: "noPermission",
    meta: {
        trackName: "无权限"
    },
    component: () => te( () => import("./NoPermission-f200cfb3.js"), ["assets/NoPermission-f200cfb3.js", "assets/LayoutHeader-01f76c8e.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/index-201e2d09.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/UserMenus-8e4a0d0a.css", "assets/base-edee9e02.css", "assets/dropdown-503a69cf.js", "assets/index-cd398c35.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/dropdown-b1de474f.js", "assets/index-852bd970.js", "assets/refs-d6db451d.js", "assets/dropdown-58b71108.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/button-d8ed470c.css", "assets/dropdown-item-e3b0c442.css", "assets/features-138c7e7f.js", "assets/forEach-c9816bce.js", "assets/LayoutHeader-ec9f8c4e.css", "assets/swiper-1f7d1e38.css", ]),
    props: (e) => ({
        subCode: e.params.subCode,
        fromPath: e.query.fromPath || "",
    }),
}, {
    path: "/embed",
    name: "embed",
    component: () => te( () => import("./Index-2366c308.js"), ["assets/Index-2366c308.js", "assets/_plugin-vue_export-helper-c27b6911.js", ]),
    children: [{
        path: "lms/lesson-activity/:captureCode/detail",
        name: "lmsLessonActivityDetail",
        props: !0,
        component: () => te( () => import("./LessonActivityDetail-9de89cc6.js"), ["assets/LessonActivityDetail-9de89cc6.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/iframeResizer.contentWindow-1289f304.js", "assets/wg-video-player-dc32f3fe.js", "assets/style-0914e6d8.js", "assets/_baseFlatten-22d0f10c.js", "assets/_copyArray-eaf5ad29.js", "assets/style-64ef9797.css", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/index-3a76066c.js", "assets/en-US-82450aae.js", "assets/embed-764781e7.js", "assets/track-b1f84820.js", "assets/schedules-aede8d61.js", "assets/intersection-dd554226.js", "assets/_arrayIncludesWith-48efb996.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", ]),
        meta: {
            embedView: !0,
            trackName: "lms-录播教材"
        },
    }, {
        path: "lms/lesson-resource/:captureCode/detail",
        name: "lmsUserLessonResource",
        props: !0,
        component: () => te( () => import("./UserLessonResource-c5488ca9.js"), ["assets/UserLessonResource-c5488ca9.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/wg-video-player-dc32f3fe.js", "assets/style-0914e6d8.js", "assets/_baseFlatten-22d0f10c.js", "assets/_copyArray-eaf5ad29.js", "assets/style-64ef9797.css", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/index-3a76066c.js", "assets/en-US-82450aae.js", "assets/embed-764781e7.js", "assets/track-b1f84820.js", "assets/schedules-aede8d61.js", "assets/intersection-dd554226.js", "assets/_arrayIncludesWith-48efb996.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_overRest-b5735be5.js", ]),
        meta: {
            embedView: !0,
            trackName: "lms-录播资源"
        },
    }, {
        path: "lms/user-center/my-live-capture",
        name: "lmsUserCenterMyLiveCapture",
        component: () => te( () => import("./Index-68f6661f.js"), ["assets/Index-68f6661f.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/iframeResizer.contentWindow-1289f304.js", "assets/index-a24b3f2d.js", "assets/useLocale-e125bc87.js", "assets/index-3a76066c.js", "assets/en-US-82450aae.js", "assets/embed-764781e7.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/pagination-65644a15.js", "assets/select-734292f5.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/index-75bf5e22.js", "assets/popper-f679515a.css", "assets/index-70ab186b.js", "assets/index-e53db662.js", "assets/index-7355e1df.js", "assets/scrollbar-0f476697.js", "assets/scrollbar-715725a6.css", "assets/index-8d5f54d3.js", "assets/index-852bd970.js", "assets/scroll-f5144cac.js", "assets/index-81e70d48.js", "assets/validator-700fab12.js", "assets/select-54108b90.css", "assets/pagination-3a0fa304.css", "assets/table-column-1f44e9e4.js", "assets/checkbox-fc5156f5.js", "assets/flatten-b5a5d693.js", "assets/_baseFlatten-22d0f10c.js", "assets/_overRest-b5735be5.js", "assets/checkbox-d27fd50d.css", "assets/table-column-d1410a98.css", "assets/Tooltip-35cfdd1e.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Tooltip-d5037ee9.css", "assets/base-edee9e02.css", "assets/SchoolCalendarSelect.vue_vue_type_script_setup_true_lang-df01480e.js", "assets/semester-ba636a32.js", "assets/input-7b10d695.css", "assets/tag-dd87478a.css", "assets/Search-48650f1d.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/Search-bc28919c.css", "assets/button-d8ed470c.css", "assets/captureCourses-571fa455.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/page-66d3fb49.js", "assets/pageQuery-c1943b3c.js", "assets/course-1543d377.js", "assets/semester-3b9307bc.js", "assets/statistic-822160fe.js", "assets/filter-08783406.js", "assets/union-e2b59439.js", "assets/isArrayLikeObject-f8301e5f.js", "assets/_baseUniq-7f3f9cd1.js", "assets/_arrayIncludesWith-48efb996.js", "assets/_baseIndexOf-a06bdafd.js", "assets/noop-cb277961.js", "assets/features-138c7e7f.js", "assets/CourseSettingForm-f7165c1c.js", "assets/radio-group-423d61bb.js", "assets/radio-group-cacb5b7d.css", "assets/switch-48f378c8.js", "assets/switch-e35e5112.css", "assets/ClassificationSelector-dabfb4b4.js", "assets/tree-19fc87f8.js", "assets/index-a239d573.js", "assets/tree-0ec02aad.css", "assets/tree-select-18f64552.js", "assets/tree-select-7a2a4085.css", "assets/classification-5690e720.js", "assets/groupBy-60897391.js", "assets/ClassificationSelector-83924db7.css", "assets/SubjectCategorySelector.vue_vue_type_script_setup_true_lang-d6f3abf0.js", "assets/select-v2-af369349.js", "assets/browser-71c7e5f0.js", "assets/select-v2-62dc6f8d.css", "assets/subjectCategory-cd03d342.js", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/includes-7746ba81.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/index-fe7412aa.js", "assets/castArray-37d5eff8.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/CourseSettingForm-a1b4d988.css", "assets/form-item-a844e8e9.css", "assets/radio-f0a895c7.css", "assets/index-e40132d5.js", "assets/index-d058dd4c.js", "assets/refs-d6db451d.js", "assets/dropdown-503a69cf.js", "assets/dropdown-b1de474f.js", "assets/dropdown-58b71108.css", "assets/progress-c43688c2.js", "assets/progress-45dbb67e.css", "assets/schedules-aede8d61.js", "assets/date-picker-7d506d52.js", "assets/index-9072fb3a.js", "assets/date-picker-8faca5c6.css", "assets/classroom-b4c5b368.js", "assets/classroom-29baac2b.js", "assets/ScheduleRecordErrorPopover.vue_vue_type_script_setup_true_lang-a0ad030b.js", "assets/datetimePicker-9524d971.js", "assets/index-0b21b060.js", "assets/ScheduleRecordErrorPopover-d0103b59.css", "assets/popover-79f68d83.css", "assets/schedule-2179e2a5.js", "assets/Index-ee1f354d.css", "assets/overlay-c52f1d36.css", "assets/dropdown-item-e3b0c442.css", "assets/radio-button-bc16eb27.css", ]),
        meta: {
            embedView: !0,
            trackName: "lms-我的直录播"
        },
    }, {
        path: "lms/user-center/my-live-capture/schedules/:scheduleId/detail",
        name: "lmsUserCenterMyLiveCaptureScheduleDetail",
        props: !0,
        component: () => te( () => import("./Index-2fa93eb1.js"), ["assets/Index-2fa93eb1.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/ScheduleFailed.vue_vue_type_script_setup_true_lang-1e86148a.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/common-d2275ef8.js", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/button-d8ed470c.css", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/index-3a76066c.js", "assets/en-US-82450aae.js", "assets/CaptureIsDeleted.vue_vue_type_script_setup_true_lang-0e5cae33.js", "assets/wg-video-player-dc32f3fe.js", "assets/multi-player.esm-803f77a6.js", "assets/features-138c7e7f.js", "assets/capture-443b2e25.js", "assets/capture-6b754c68.js", "assets/includes-7746ba81.js", "assets/_baseIndexOf-a06bdafd.js", "assets/isString-23c0a126.js", "assets/_isIterateeCall-8408f4d1.js", "assets/track-b1f84820.js", "assets/index-441ded63.js", "assets/schedule-2179e2a5.js", ]),
        meta: {
            embedView: !0,
            trackName: "lms-我的排程"
        },
    }, {
        path: "qms/classrooms/:classroomCode/schedules/attendance/detail",
        name: "qmsAiAnalyzeDetail",
        props: !0,
        component: () => te( () => import("./AIAnalyzeDetail-534b1735.js"), ["assets/AIAnalyzeDetail-534b1735.js", "assets/ScheduleAttendanceDetail-a6a071b2.js", "assets/tab-pane-f009d3b1.js", "assets/error-78e43d3e.js", "assets/strings-e56560b0.js", "assets/vnode-c656dd72.js", "assets/event-9519ab40.js", "assets/index-a7814bcd.js", "assets/tab-pane-928d3bfb.css", "assets/index-31129aa7.js", "assets/schedules-aede8d61.js", "assets/captureCourse-1d01f607.js", "assets/classrooms-61691da5.js", "assets/semester-ba636a32.js", "assets/cloneDeep-a84c7b28.js", "assets/_baseClone-40c67d60.js", "assets/_arrayEach-0e9334a0.js", "assets/_copyArray-eaf5ad29.js", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/ScheduleAttendanceDetail-a06c4d5a.css", "assets/base-edee9e02.css", "assets/features-138c7e7f.js", "assets/embed-764781e7.js", ]),
        meta: {
            embedView: !0,
            trackName: "qms-AI分析"
        },
    }, ],
}, {
    path: "/admin/classrooms-management/:code/published-streams",
    name: "adminPubStreams",
    meta: {
        trackName: "教室直播流管理"
    },
    component: () => te( () => import("./ClassroomPublishedStreamManagement-0116a987.js"), ["assets/ClassroomPublishedStreamManagement-0116a987.js", "assets/Loading-3fc98d0e.js", "assets/loading-d4308462.js", "assets/loading-e1071fa4.css", "assets/_plugin-vue_export-helper-c27b6911.js", "assets/Loading-f988a6d6.css", "assets/base-edee9e02.css", "assets/ScheduleLoadFailed.vue_vue_type_script_setup_true_lang-4775503a.js", "assets/index-cd398c35.js", "assets/index-201e2d09.js", "assets/index-a7814bcd.js", "assets/index-7355e1df.js", "assets/index-75bf5e22.js", "assets/button-d8ed470c.css", "assets/divider-2e3047db.js", "assets/divider-f4d3946e.css", "assets/multi-player.esm-803f77a6.js", "assets/AdminLayout.vue_vue_type_script_setup_true_lang-49730925.js", "assets/UserMenus-dc24d9f1.js", "assets/popper-878f4536.js", "assets/isNil-c75b1b34.js", "assets/popper-f679515a.css", "assets/config-2958fe56.js", "assets/useLocale-e125bc87.js", "assets/aria-bc8e8b0f.js", "assets/index-a239d573.js", "assets/error-78e43d3e.js", "assets/vnode-c656dd72.js", "assets/UserMenus-8e4a0d0a.css", "assets/Tooltip-35cfdd1e.js", "assets/Tooltip-d5037ee9.css", "assets/image-viewer-cdbd882b.js", "assets/browser-71c7e5f0.js", "assets/index-852bd970.js", "assets/index-e53db662.js", "assets/scroll-f5144cac.js", "assets/image-viewer-c41b5a40.css", "assets/BackButton-336cc4c2.js", "assets/BackButton-d37618a7.css", "assets/classroom-29baac2b.js", "assets/classrooms-61691da5.js", "assets/ClassroomPublishedStreamManagement-997160de.css", ]),
    props: (e) => ({
        classroomCode: e.params.code
    }),
}, ];
({}).NODE_ENV !== "production" && Wf.push({
    path: "/svg",
    name: "SvgIconSet",
    component: () => te( () => import("./SvgIconSet-d8a76ab1.js"), []),
});
const ao = my({
    history: Ew(),
    routes: Wf,
    scrollBehavior() {
        return {
            top: 0
        };
    },
});
function NT(e) {
    let t = !1, r;
    const n = Oa(!0);
    return () => (t || ((r = n.run(e)),
    (t = !0)),
    r);
}
function Na(e) {
    return Tu() ? (Cu(e),
    !0) : !1;
}
function PF(e) {
    let t = 0, r, n;
    const o = () => {
        (t -= 1),
        n && t <= 0 && (n.stop(),
        (r = void 0),
        (n = void 0));
    }
    ;
    return (...a) => ((t += 1),
    r || ((n = Oa(!0)),
    (r = n.run( () => e(...a)))),
    Na(o),
    r);
}
const li = typeof window < "u"
  , ET = (e) => typeof e == "string"
  , es = () => {}
;
function Qf(e, t) {
    function r(...n) {
        e( () => t.apply(this, n), {
            fn: t,
            thisArg: this,
            args: n
        });
    }
    return r;
}
const Jf = (e) => e();
function BT(e, t={}) {
    let r, n;
    return (a) => {
        const s = Oe(e)
          , i = Oe(t.maxWait);
        if ((r && clearTimeout(r),
        s <= 0 || (i !== void 0 && i <= 0)))
            return n && (clearTimeout(n),
            (n = null)),
            a();
        i && !n && (n = setTimeout( () => {
            r && clearTimeout(r),
            (n = null),
            a();
        }
        , i)),
        (r = setTimeout( () => {
            n && clearTimeout(n),
            (n = null),
            a();
        }
        , s));
    }
    ;
}
function TT(e=Jf) {
    const t = le(!0);
    function r() {
        t.value = !1;
    }
    function n() {
        t.value = !0;
    }
    return {
        isActive: t,
        pause: r,
        resume: n,
        eventFilter: (...a) => {
            t.value && e(...a);
        }
        ,
    };
}
function CT(e, t=!1, r="Timeout") {
    return new Promise( (n, o) => {
        setTimeout(t ? () => o(r) : n, e);
    }
    );
}
function zF(e, t=200, r={}) {
    return Qf(BT(t, r), e);
}
function GT(e, t=!0) {
    ct() ? en(e) : t ? e() : br(e);
}
function HF(e, t, r={}) {
    const {immediate: n=!0} = r
      , o = le(!1);
    let a = null;
    function s() {
        a && (clearTimeout(a),
        (a = null));
    }
    function i() {
        (o.value = !1),
        s();
    }
    function c(...l) {
        s(),
        (o.value = !0),
        (a = setTimeout( () => {
            (o.value = !1),
            (a = null),
            e(...l);
        }
        , Oe(t)));
    }
    return (n && ((o.value = !0),
    li && c()),
    Na(i),
    {
        isPending: o,
        start: c,
        stop: i
    });
}
var mu = Object.getOwnPropertySymbols
  , YT = Object.prototype.hasOwnProperty
  , FT = Object.prototype.propertyIsEnumerable
  , IT = (e, t) => {
    var r = {};
    for (var n in e)
        YT.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && mu)
        for (var n of mu(e))
            t.indexOf(n) < 0 && FT.call(e, n) && (r[n] = e[n]);
    return r;
}
;
function LT(e, t, r={}) {
    const n = r
      , {eventFilter: o=Jf} = n
      , a = IT(n, ["eventFilter"]);
    return Je(e, Qf(o, t), a);
}
var RT = Object.defineProperty
  , XT = Object.defineProperties
  , ZT = Object.getOwnPropertyDescriptors
  , Os = Object.getOwnPropertySymbols
  , Vf = Object.prototype.hasOwnProperty
  , qf = Object.prototype.propertyIsEnumerable
  , gu = (e, t, r) => t in e ? RT(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : (e[t] = r)
  , kT = (e, t) => {
    for (var r in t || (t = {}))
        Vf.call(t, r) && gu(e, r, t[r]);
    if (Os)
        for (var r of Os(t))
            qf.call(t, r) && gu(e, r, t[r]);
    return e;
}
  , UT = (e, t) => XT(e, ZT(t))
  , ST = (e, t) => {
    var r = {};
    for (var n in e)
        Vf.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Os)
        for (var n of Os(e))
            t.indexOf(n) < 0 && qf.call(e, n) && (r[n] = e[n]);
    return r;
}
;
function WT(e, t, r={}) {
    const n = r
      , {eventFilter: o} = n
      , a = ST(n, ["eventFilter"])
      , {eventFilter: s, pause: i, resume: c, isActive: l} = TT(o);
    return {
        stop: LT(e, t, UT(kT({}, a), {
            eventFilter: s
        })),
        pause: i,
        resume: c,
        isActive: l,
    };
}
function kt(e) {
    var t;
    const r = Oe(e);
    return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const qt = li ? window : void 0
  , QT = li ? window.document : void 0;
function Ke(...e) {
    let t, r, n, o;
    if ((ET(e[0]) ? (([r,n,o] = e),
    (t = qt)) : ([t,r,n,o] = e),
    !t))
        return es;
    let a = es;
    const s = Je( () => kt(t), (c) => {
        a(),
        c && (c.addEventListener(r, n, o),
        (a = () => {
            c.removeEventListener(r, n, o),
            (a = es);
        }
        ));
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , i = () => {
        s(),
        a();
    }
    ;
    return Na(i),
    i;
}
function jF(e, t, r={}) {
    const {window: n=qt, ignore: o, capture: a=!0} = r;
    if (!n)
        return;
    const s = le(!0)
      , c = [Ke(n, "click", (f) => {
        const d = kt(e)
          , u = f.composedPath();
        !d || d === f.target || u.includes(d) || !s.value || (o && o.length > 0 && o.some( (w) => {
            const y = kt(w);
            return y && (f.target === y || u.includes(y));
        }
        )) || t(f);
    }
    , {
        passive: !0,
        capture: a
    }), Ke(n, "pointerdown", (f) => {
        const d = kt(e);
        s.value = !!d && !f.composedPath().includes(d);
    }
    , {
        passive: !0
    }), ];
    return () => c.forEach( (f) => f());
}
function JT(e={}) {
    const {window: t=qt} = e
      , r = le(0);
    return (t && (Ke(t, "blur", () => (r.value += 1), !0),
    Ke(t, "focus", () => (r.value += 1), !0)),
    Me( () => (r.value,
    t == null ? void 0 : t.document.activeElement)));
}
function NF(e, t, r) {
    const {immediate: n=!0, delay: o=0, onError: a=es, resetOnExecute: s=!0, shallow: i=!0, } = r ?? {}
      , c = i ? Cs(t) : le(t)
      , l = le(!1)
      , f = le(!1)
      , d = le(void 0);
    async function u(w=0, ...y) {
        s && (c.value = t),
        (d.value = void 0),
        (l.value = !1),
        (f.value = !0),
        w > 0 && (await CT(w));
        const x = typeof e == "function" ? e(...y) : e;
        try {
            const v = await x;
            (c.value = v),
            (l.value = !0);
        } catch (v) {
            (d.value = v),
            a(v);
        }
        return (f.value = !1),
        c.value;
    }
    return (n && u(o),
    {
        state: c,
        isReady: l,
        isLoading: f,
        error: d,
        execute: u
    });
}
const ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , tc = "__vueuse_ssr_handlers__";
ec[tc] = ec[tc] || {};
const VT = ec[tc];
function qT(e, t) {
    return VT[e] || t;
}
function KT(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" || Array.isArray(e) ? "object" : Number.isNaN(e) ? "any" : "number";
}
const _T = {
    boolean: {
        read: (e) => e === "true",
        write: (e) => String(e)
    },
    object: {
        read: (e) => JSON.parse(e),
        write: (e) => JSON.stringify(e)
    },
    number: {
        read: (e) => Number.parseFloat(e),
        write: (e) => String(e)
    },
    any: {
        read: (e) => e,
        write: (e) => String(e)
    },
    string: {
        read: (e) => e,
        write: (e) => String(e)
    },
    map: {
        read: (e) => new Map(JSON.parse(e)),
        write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
        read: (e) => new Set(JSON.parse(e)),
        write: (e) => JSON.stringify(Array.from(e.entries())),
    },
};
function Kf(e, t, r, n={}) {
    var o;
    const {flush: a="pre", deep: s=!0, listenToStorageChanges: i=!0, writeDefaults: c=!0, shallow: l, window: f=qt, eventFilter: d, onError: u= (D) => {
        console.error(D);
    }
    , } = n
      , w = (l ? Cs : le)(t);
    if (!r)
        try {
            r = qT("getDefaultStorage", () => {
                var D;
                return (D = qt) == null ? void 0 : D.localStorage;
            }
            )();
        } catch (D) {
            u(D);
        }
    if (!r)
        return w;
    const y = Oe(t)
      , x = KT(y)
      , v = (o = n.serializer) != null ? o : _T[x]
      , {pause: h, resume: m} = WT(w, () => A(w.value), {
        flush: a,
        deep: s,
        eventFilter: d,
    });
    return (f && i && Ke(f, "storage", (D) => {
        setTimeout( () => b(D), 0);
    }
    ),
    b(),
    w);
    function A(D) {
        try {
            D == null ? r.removeItem(e) : r.setItem(e, v.write(D));
        } catch (P) {
            u(P);
        }
    }
    function O(D) {
        if (!(D && D.key !== e)) {
            h();
            try {
                const P = D ? D.newValue : r.getItem(e);
                return P == null ? (c && y !== null && r.setItem(e, v.write(y)),
                y) : typeof P != "string" ? P : v.read(P);
            } catch (P) {
                u(P);
            } finally {
                br(m);
            }
        }
    }
    function b(D) {
        (D && D.key !== e) || (w.value = O(D));
    }
}
var vu = Object.getOwnPropertySymbols
  , $T = Object.prototype.hasOwnProperty
  , eC = Object.prototype.propertyIsEnumerable
  , tC = (e, t) => {
    var r = {};
    for (var n in e)
        $T.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && vu)
        for (var n of vu(e))
            t.indexOf(n) < 0 && eC.call(e, n) && (r[n] = e[n]);
    return r;
}
;
function _f(e, t, r={}) {
    const n = r
      , {window: o=qt} = n
      , a = tC(n, ["window"]);
    let s;
    const i = o && "ResizeObserver"in o
      , c = () => {
        s && (s.disconnect(),
        (s = void 0));
    }
      , l = Je( () => kt(e), (d) => {
        c(),
        i && o && d && ((s = new ResizeObserver(t)),
        s.observe(d, a));
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , f = () => {
        c(),
        l();
    }
    ;
    return Na(f),
    {
        isSupported: i,
        stop: f
    };
}
function EF(e) {
    const t = le(0)
      , r = le(0)
      , n = le(0)
      , o = le(0)
      , a = le(0)
      , s = le(0)
      , i = le(0)
      , c = le(0);
    function l() {
        const f = kt(e);
        if (!f) {
            (t.value = 0),
            (r.value = 0),
            (n.value = 0),
            (o.value = 0),
            (a.value = 0),
            (s.value = 0),
            (i.value = 0),
            (c.value = 0);
            return;
        }
        const d = f.getBoundingClientRect();
        (t.value = d.height),
        (r.value = d.bottom),
        (n.value = d.left),
        (o.value = d.right),
        (a.value = d.top),
        (s.value = d.width),
        (i.value = d.x),
        (c.value = d.y);
    }
    return (Ke("scroll", l, !0),
    _f(e, l),
    Je( () => kt(e), (f) => !f && l()),
    {
        height: t,
        bottom: r,
        left: n,
        right: o,
        top: a,
        width: s,
        x: i,
        y: c,
        update: l,
    });
}
function BF(e, t={
    width: 0,
    height: 0
}, r={}) {
    const n = le(t.width)
      , o = le(t.height);
    return (_f(e, ([a]) => {
        (n.value = a.contentRect.width),
        (o.value = a.contentRect.height);
    }
    , r),
    Je( () => kt(e), (a) => {
        (n.value = a ? t.width : 0),
        (o.value = a ? t.height : 0);
    }
    ),
    {
        width: n,
        height: o
    });
}
function TF(e, t={}) {
    const {initialValue: r=!1} = t
      , n = JT(t)
      , o = Me( () => kt(e))
      , a = Me({
        get() {
            return n.value === o.value;
        },
        set(s) {
            var i, c;
            !s && a.value && ((i = o.value) == null || i.blur()),
            s && !a.value && ((c = o.value) == null || c.focus());
        },
    });
    return (Je(o, () => {
        a.value = r;
    }
    , {
        immediate: !0,
        flush: "post"
    }),
    {
        focused: a
    });
}
const wu = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", ], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", ], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror", ], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", ], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", ], ];
function CF(e, t={}) {
    const {document: r=QT, autoExit: n=!1} = t
      , o = e || (r == null ? void 0 : r.querySelector("html"))
      , a = le(!1);
    let s = !1
      , i = wu[0];
    if (!r)
        s = !1;
    else
        for (const x of wu)
            if (x[1]in r) {
                (i = x),
                (s = !0);
                break;
            }
    const [c,l,f,,d] = i;
    async function u() {
        s && (r != null && r[f] && (await r[l]()),
        (a.value = !1));
    }
    async function w() {
        if (!s)
            return;
        await u();
        const x = kt(o);
        x && (await x[c](),
        (a.value = !0));
    }
    async function y() {
        a.value ? await u() : await w();
    }
    return (r && Ke(r, d, () => {
        a.value = !!(r != null && r[f]);
    }
    , !1),
    n && Na(u),
    {
        isSupported: s,
        isFullscreen: a,
        enter: w,
        exit: u,
        toggle: y
    });
}
function rC(e={}) {
    const {type: t="page", touch: r=!0, resetOnTouchEnds: n=!1, initialValue: o={
        x: 0,
        y: 0
    }, window: a=qt, eventFilter: s, } = e
      , i = le(o.x)
      , c = le(o.y)
      , l = le(null)
      , f = (x) => {
        t === "page" ? ((i.value = x.pageX),
        (c.value = x.pageY)) : t === "client" && ((i.value = x.clientX),
        (c.value = x.clientY)),
        (l.value = "mouse");
    }
      , d = () => {
        (i.value = o.x),
        (c.value = o.y);
    }
      , u = (x) => {
        if (x.touches.length > 0) {
            const v = x.touches[0];
            t === "page" ? ((i.value = v.pageX),
            (c.value = v.pageY)) : t === "client" && ((i.value = v.clientX),
            (c.value = v.clientY)),
            (l.value = "touch");
        }
    }
      , w = (x) => (s === void 0 ? f(x) : s( () => f(x), {}))
      , y = (x) => (s === void 0 ? u(x) : s( () => u(x), {}));
    return (a && (Ke(a, "mousemove", w, {
        passive: !0
    }),
    Ke(a, "dragover", w, {
        passive: !0
    }),
    r && (Ke(a, "touchstart", y, {
        passive: !0
    }),
    Ke(a, "touchmove", y, {
        passive: !0
    }),
    n && Ke(a, "touchend", d, {
        passive: !0
    }))),
    {
        x: i,
        y: c,
        sourceType: l
    });
}
function GF(e, t={}) {
    const {handleOutside: r=!0, window: n=qt} = t
      , {x: o, y: a, sourceType: s} = rC(t)
      , i = le(e ?? (n == null ? void 0 : n.document.body))
      , c = le(0)
      , l = le(0)
      , f = le(0)
      , d = le(0)
      , u = le(0)
      , w = le(0)
      , y = le(!1);
    let x = () => {}
    ;
    return (n && (x = Je([i, o, a], () => {
        const v = kt(i);
        if (!v)
            return;
        const {left: h, top: m, width: A, height: O, } = v.getBoundingClientRect();
        (f.value = h + n.pageXOffset),
        (d.value = m + n.pageYOffset),
        (u.value = O),
        (w.value = A);
        const b = o.value - f.value
          , D = a.value - d.value;
        (y.value = b < 0 || D < 0 || b > w.value || D > u.value),
        (r || !y.value) && ((c.value = b),
        (l.value = D));
    }
    , {
        immediate: !0
    })),
    {
        x: o,
        y: a,
        sourceType: s,
        elementX: c,
        elementY: l,
        elementPositionX: f,
        elementPositionY: d,
        elementHeight: u,
        elementWidth: w,
        isOutside: y,
        stop: x,
    });
}
function YF(e={}) {
    const {touch: t=!0, drag: r=!0, initialValue: n=!1, window: o=qt, } = e
      , a = le(n)
      , s = le(null);
    if (!o)
        return {
            pressed: a,
            sourceType: s
        };
    const i = (f) => () => {
        (a.value = !0),
        (s.value = f);
    }
      , c = () => {
        (a.value = !1),
        (s.value = null);
    }
      , l = Me( () => kt(e.target) || o);
    return (Ke(l, "mousedown", i("mouse"), {
        passive: !0
    }),
    Ke(o, "mouseleave", c, {
        passive: !0
    }),
    Ke(o, "mouseup", c, {
        passive: !0
    }),
    r && (Ke(l, "dragstart", i("mouse"), {
        passive: !0
    }),
    Ke(o, "drop", c, {
        passive: !0
    }),
    Ke(o, "dragend", c, {
        passive: !0
    })),
    t && (Ke(l, "touchstart", i("touch"), {
        passive: !0
    }),
    Ke(o, "touchend", c, {
        passive: !0
    }),
    Ke(o, "touchcancel", c, {
        passive: !0
    })),
    {
        pressed: a,
        sourceType: s
    });
}
var yu, xu;
li && window != null && window.navigator && (yu = window == null ? void 0 : window.navigator) != null && yu.platform && /iP(ad|hone|od)/.test((xu = window == null ? void 0 : window.navigator) == null ? void 0 : xu.platform);
function FF(e, t, r={}) {
    const {window: n=qt} = r;
    return Kf(e, t, n == null ? void 0 : n.sessionStorage, r);
}
function IF(e, t, r, n={}) {
    var o;
    const {passive: a=!1, eventName: s, deep: i=!1} = n
      , c = ct()
      , l = r || (c == null ? void 0 : c.emit) || ((o = c == null ? void 0 : c.$emit) == null ? void 0 : o.bind(c));
    let f = s;
    if ((t || (t = "modelValue"),
    (f = s || f || `update:${t}`),
    a)) {
        const d = le(e[t]);
        return (Je( () => e[t], (u) => (d.value = u)),
        Je(d, (u) => {
            (u !== e[t] || i) && l(f, u);
        }
        , {
            deep: i
        }),
        d);
    } else
        return Me({
            get() {
                return e[t];
            },
            set(d) {
                l(f, d);
            },
        });
}
function LF({window: e=qt, initialWidth: t=1 / 0, initialHeight: r=1 / 0, }={}) {
    const n = le(t)
      , o = le(r)
      , a = () => {
        e && ((n.value = e.innerWidth),
        (o.value = e.innerHeight));
    }
    ;
    return a(),
    GT(a),
    Ke("resize", a, {
        passive: !0
    }),
    {
        width: n,
        height: o
    };
}
var nC = Object.defineProperty
  , oC = Object.getOwnPropertyDescriptor
  , d0 = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? oC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && nC(t, r, o),
    o;
}
;
class ui {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "parentId", null);
    }
}
d0([B()], ui.prototype, "id", 2);
d0([B()], ui.prototype, "name", 2);
d0([B()], ui.prototype, "parentId", 2);
var aC = Object.defineProperty
  , sC = Object.getOwnPropertyDescriptor
  , Bn = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? sC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && aC(t, r, o),
    o;
}
;
class ya {
    constructor() {
        N(this, "id");
        N(this, "code");
        N(this, "name");
        N(this, "children", []);
    }
}
Bn([B()], ya.prototype, "id", 2);
Bn([B()], ya.prototype, "code", 2);
Bn([B()], ya.prototype, "name", 2);
Bn([B(), Wt( () => ya)], ya.prototype, "children", 2);
class fi {
    constructor() {
        N(this, "id");
        N(this, "code");
        N(this, "name");
    }
}
Bn([B()], fi.prototype, "id", 2);
Bn([B()], fi.prototype, "code", 2);
Bn([B()], fi.prototype, "name", 2);
var iC = Object.defineProperty
  , cC = Object.getOwnPropertyDescriptor
  , di = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? cC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && iC(t, r, o),
    o;
}
;
class p0 {
    constructor() {
        N(this, "id");
        N(this, "name");
    }
}
di([B()], p0.prototype, "id", 2);
di([B()], p0.prototype, "name", 2);
class $f {
    constructor() {
        N(this, "tagId");
        N(this, "count");
    }
}
di([B()], $f.prototype, "tagId", 2);
di([B()], $f.prototype, "count", 2);
var lC = Object.defineProperty
  , uC = Object.getOwnPropertyDescriptor
  , yt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? uC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && lC(t, r, o),
    o;
}
;
class ur {
    constructor() {
        N(this, "fileName");
        N(this, "fileSize");
        N(this, "id");
        N(this, "key");
        N(this, "type");
        N(this, "status");
        N(this, "link");
    }
}
yt([B()], ur.prototype, "fileName", 2);
yt([B()], ur.prototype, "fileSize", 2);
yt([B()], ur.prototype, "id", 2);
yt([B()], ur.prototype, "key", 2);
yt([B()], ur.prototype, "type", 2);
yt([B()], ur.prototype, "status", 2);
yt([B()], ur.prototype, "link", 2);
class Ho {
    constructor() {
        N(this, "id");
        N(this, "type");
        N(this, "uploadId");
        N(this, "url");
    }
}
yt([B()], Ho.prototype, "id", 2);
yt([B()], Ho.prototype, "type", 2);
yt([B()], Ho.prototype, "uploadId", 2);
yt([B()], Ho.prototype, "url", 2);
class h0 {
    constructor() {
        N(this, "id");
        N(this, "embeddedUrl");
    }
}
yt([B()], h0.prototype, "id", 2);
yt([B()], h0.prototype, "embeddedUrl", 2);
class pi {
    constructor() {
        N(this, "id");
        N(this, "uploadId");
        N(this, "duration");
    }
}
yt([B()], pi.prototype, "id", 2);
yt([B()], pi.prototype, "uploadId", 2);
yt([B()], pi.prototype, "duration", 2);
var fC = Object.defineProperty
  , dC = Object.getOwnPropertyDescriptor
  , e5 = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? dC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && fC(t, r, o),
    o;
}
;
class m0 {
    constructor() {
        N(this, "id");
        N(this, "name");
    }
}
e5([B()], m0.prototype, "id", 2);
e5([B()], m0.prototype, "name", 2);
var t5 = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n();
    }
    )(so, function() {
        var r = 1e3
          , n = 6e4
          , o = 36e5
          , a = "millisecond"
          , s = "second"
          , i = "minute"
          , c = "hour"
          , l = "day"
          , f = "week"
          , d = "month"
          , u = "quarter"
          , w = "year"
          , y = "date"
          , x = "Invalid Date"
          , v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , m = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        }
          , A = function(U, I, Q) {
            var J = String(U);
            return !J || J.length >= I ? U : "" + Array(I + 1 - J.length).join(Q) + U;
        }
          , O = {
            s: A,
            z: function(U) {
                var I = -U.utcOffset()
                  , Q = Math.abs(I)
                  , J = Math.floor(Q / 60)
                  , R = Q % 60;
                return (I <= 0 ? "+" : "-") + A(J, 2, "0") + ":" + A(R, 2, "0");
            },
            m: function U(I, Q) {
                if (I.date() < Q.date())
                    return -U(Q, I);
                var J = 12 * (Q.year() - I.year()) + (Q.month() - I.month())
                  , R = I.clone().add(J, d)
                  , ne = Q - R < 0
                  , ie = I.clone().add(J + (ne ? -1 : 1), d);
                return +(-(J + (Q - R) / (ne ? R - ie : ie - R)) || 0);
            },
            a: function(U) {
                return U < 0 ? Math.ceil(U) || 0 : Math.floor(U);
            },
            p: function(U) {
                return ({
                    M: d,
                    y: w,
                    w: f,
                    d: l,
                    D: y,
                    h: c,
                    m: i,
                    s,
                    ms: a,
                    Q: u
                }[U] || String(U || "").toLowerCase().replace(/s$/, ""));
            },
            u: function(U) {
                return U === void 0;
            },
        }
          , b = "en"
          , D = {};
        D[b] = m;
        var P = function(U) {
            return U instanceof re;
        }
          , Y = function U(I, Q, J) {
            var R;
            if (!I)
                return b;
            if (typeof I == "string") {
                var ne = I.toLowerCase();
                D[ne] && (R = ne),
                Q && ((D[ne] = Q),
                (R = ne));
                var ie = I.split("-");
                if (!R && ie.length > 1)
                    return U(ie[0]);
            } else {
                var He = I.name;
                (D[He] = I),
                (R = He);
            }
            return !J && R && (b = R),
            R || (!J && b);
        }
          , F = function(U, I) {
            if (P(U))
                return U.clone();
            var Q = typeof I == "object" ? I : {};
            return (Q.date = U),
            (Q.args = arguments),
            new re(Q);
        }
          , X = O;
        (X.l = Y),
        (X.i = P),
        (X.w = function(U, I) {
            return F(U, {
                locale: I.$L,
                utc: I.$u,
                x: I.$x,
                $offset: I.$offset
            });
        }
        );
        var re = (function() {
            function U(Q) {
                (this.$L = Y(Q.locale, null, !0)),
                this.parse(Q);
            }
            var I = U.prototype;
            return ((I.parse = function(Q) {
                (this.$d = (function(J) {
                    var R = J.date
                      , ne = J.utc;
                    if (R === null)
                        return new Date(NaN);
                    if (X.u(R))
                        return new Date();
                    if (R instanceof Date)
                        return new Date(R);
                    if (typeof R == "string" && !/Z$/i.test(R)) {
                        var ie = R.match(v);
                        if (ie) {
                            var He = ie[2] - 1 || 0
                              , he = (ie[7] || "0").substring(0, 3);
                            return ne ? new Date(Date.UTC(ie[1], He, ie[3] || 1, ie[4] || 0, ie[5] || 0, ie[6] || 0, he)) : new Date(ie[1],He,ie[3] || 1,ie[4] || 0,ie[5] || 0,ie[6] || 0,he);
                        }
                    }
                    return new Date(R);
                }
                )(Q)),
                (this.$x = Q.x || {}),
                this.init();
            }
            ),
            (I.init = function() {
                var Q = this.$d;
                (this.$y = Q.getFullYear()),
                (this.$M = Q.getMonth()),
                (this.$D = Q.getDate()),
                (this.$W = Q.getDay()),
                (this.$H = Q.getHours()),
                (this.$m = Q.getMinutes()),
                (this.$s = Q.getSeconds()),
                (this.$ms = Q.getMilliseconds());
            }
            ),
            (I.$utils = function() {
                return X;
            }
            ),
            (I.isValid = function() {
                return this.$d.toString() !== x;
            }
            ),
            (I.isSame = function(Q, J) {
                var R = F(Q);
                return this.startOf(J) <= R && R <= this.endOf(J);
            }
            ),
            (I.isAfter = function(Q, J) {
                return F(Q) < this.startOf(J);
            }
            ),
            (I.isBefore = function(Q, J) {
                return this.endOf(J) < F(Q);
            }
            ),
            (I.$g = function(Q, J, R) {
                return X.u(Q) ? this[J] : this.set(R, Q);
            }
            ),
            (I.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
            }
            ),
            (I.valueOf = function() {
                return this.$d.getTime();
            }
            ),
            (I.startOf = function(Q, J) {
                var R = this
                  , ne = !!X.u(J) || J
                  , ie = X.p(Q)
                  , He = function(ae, de) {
                    var Pe = X.w(R.$u ? Date.UTC(R.$y, de, ae) : new Date(R.$y,de,ae), R);
                    return ne ? Pe : Pe.endOf(l);
                }
                  , he = function(ae, de) {
                    return X.w(R.toDate()[ae].apply(R.toDate("s"), (ne ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(de)), R);
                }
                  , ze = this.$W
                  , Fe = this.$M
                  , Te = this.$D
                  , L = "set" + (this.$u ? "UTC" : "");
                switch (ie) {
                case w:
                    return ne ? He(1, 0) : He(31, 11);
                case d:
                    return ne ? He(1, Fe) : He(0, Fe + 1);
                case f:
                    var oe = this.$locale().weekStart || 0
                      , _ = (ze < oe ? ze + 7 : ze) - oe;
                    return He(ne ? Te - _ : Te + (6 - _), Fe);
                case l:
                case y:
                    return he(L + "Hours", 0);
                case c:
                    return he(L + "Minutes", 1);
                case i:
                    return he(L + "Seconds", 2);
                case s:
                    return he(L + "Milliseconds", 3);
                default:
                    return this.clone();
                }
            }
            ),
            (I.endOf = function(Q) {
                return this.startOf(Q, !1);
            }
            ),
            (I.$set = function(Q, J) {
                var R, ne = X.p(Q), ie = "set" + (this.$u ? "UTC" : ""), He = ((R = {}),
                (R[l] = ie + "Date"),
                (R[y] = ie + "Date"),
                (R[d] = ie + "Month"),
                (R[w] = ie + "FullYear"),
                (R[c] = ie + "Hours"),
                (R[i] = ie + "Minutes"),
                (R[s] = ie + "Seconds"),
                (R[a] = ie + "Milliseconds"),
                R)[ne], he = ne === l ? this.$D + (J - this.$W) : J;
                if (ne === d || ne === w) {
                    var ze = this.clone().set(y, 1);
                    ze.$d[He](he),
                    ze.init(),
                    (this.$d = ze.set(y, Math.min(this.$D, ze.daysInMonth())).$d);
                } else
                    He && this.$d[He](he);
                return this.init(),
                this;
            }
            ),
            (I.set = function(Q, J) {
                return this.clone().$set(Q, J);
            }
            ),
            (I.get = function(Q) {
                return this[X.p(Q)]();
            }
            ),
            (I.add = function(Q, J) {
                var R, ne = this;
                Q = Number(Q);
                var ie = X.p(J)
                  , He = function(Fe) {
                    var Te = F(ne);
                    return X.w(Te.date(Te.date() + Math.round(Fe * Q)), ne);
                };
                if (ie === d)
                    return this.set(d, this.$M + Q);
                if (ie === w)
                    return this.set(w, this.$y + Q);
                if (ie === l)
                    return He(1);
                if (ie === f)
                    return He(7);
                var he = ((R = {}),
                (R[i] = n),
                (R[c] = o),
                (R[s] = r),
                R)[ie] || 1
                  , ze = this.$d.getTime() + Q * he;
                return X.w(ze, this);
            }
            ),
            (I.subtract = function(Q, J) {
                return this.add(-1 * Q, J);
            }
            ),
            (I.format = function(Q) {
                var J = this
                  , R = this.$locale();
                if (!this.isValid())
                    return R.invalidDate || x;
                var ne = Q || "YYYY-MM-DDTHH:mm:ssZ"
                  , ie = X.z(this)
                  , He = this.$H
                  , he = this.$m
                  , ze = this.$M
                  , Fe = R.weekdays
                  , Te = R.months
                  , L = function(de, Pe, me, ge) {
                    return (de && (de[Pe] || de(J, ne))) || me[Pe].substr(0, ge);
                }
                  , oe = function(de) {
                    return X.s(He % 12 || 12, de, "0");
                }
                  , _ = R.meridiem || function(de, Pe, me) {
                    var ge = de < 12 ? "AM" : "PM";
                    return me ? ge.toLowerCase() : ge;
                }
                  , ae = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: ze + 1,
                    MM: X.s(ze + 1, 2, "0"),
                    MMM: L(R.monthsShort, ze, Te, 3),
                    MMMM: L(Te, ze),
                    D: this.$D,
                    DD: X.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: L(R.weekdaysMin, this.$W, Fe, 2),
                    ddd: L(R.weekdaysShort, this.$W, Fe, 3),
                    dddd: Fe[this.$W],
                    H: String(He),
                    HH: X.s(He, 2, "0"),
                    h: oe(1),
                    hh: oe(2),
                    a: _(He, he, !0),
                    A: _(He, he, !1),
                    m: String(he),
                    mm: X.s(he, 2, "0"),
                    s: String(this.$s),
                    ss: X.s(this.$s, 2, "0"),
                    SSS: X.s(this.$ms, 3, "0"),
                    Z: ie,
                };
                return ne.replace(h, function(de, Pe) {
                    return Pe || ae[de] || ie.replace(":", "");
                });
            }
            ),
            (I.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }
            ),
            (I.diff = function(Q, J, R) {
                var ne, ie = X.p(J), He = F(Q), he = (He.utcOffset() - this.utcOffset()) * n, ze = this - He, Fe = X.m(this, He);
                return ((Fe = ((ne = {}),
                (ne[w] = Fe / 12),
                (ne[d] = Fe),
                (ne[u] = Fe / 3),
                (ne[f] = (ze - he) / 6048e5),
                (ne[l] = (ze - he) / 864e5),
                (ne[c] = ze / o),
                (ne[i] = ze / n),
                (ne[s] = ze / r),
                ne)[ie] || ze),
                R ? Fe : X.a(Fe));
            }
            ),
            (I.daysInMonth = function() {
                return this.endOf(d).$D;
            }
            ),
            (I.$locale = function() {
                return D[this.$L];
            }
            ),
            (I.locale = function(Q, J) {
                if (!Q)
                    return this.$L;
                var R = this.clone()
                  , ne = Y(Q, J, !0);
                return ne && (R.$L = ne),
                R;
            }
            ),
            (I.clone = function() {
                return X.w(this.$d, this);
            }
            ),
            (I.toDate = function() {
                return new Date(this.valueOf());
            }
            ),
            (I.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
            }
            ),
            (I.toISOString = function() {
                return this.$d.toISOString();
            }
            ),
            (I.toString = function() {
                return this.$d.toUTCString();
            }
            ),
            U);
        }
        )()
          , k = re.prototype;
        return ((F.prototype = k),
        [["$ms", a], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", w], ["$D", y], ].forEach(function(U) {
            k[U[1]] = function(I) {
                return this.$g(I, U[0], U[1]);
            }
            ;
        }),
        (F.extend = function(U, I) {
            return U.$i || (U(I, re, F),
            (U.$i = !0)),
            F;
        }
        ),
        (F.locale = Y),
        (F.isDayjs = P),
        (F.unix = function(U) {
            return F(1e3 * U);
        }
        ),
        (F.en = D[b]),
        (F.Ls = D),
        (F.p = {}),
        F);
    });
}
)(t5);
var pC = t5.exports;
const ht = $r(pC);
var r5 = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n();
    }
    )(so, function() {
        var r = "minute"
          , n = /[+-]\d\d(?::?\d\d)?/g
          , o = /([+-]|\d\d)/g;
        return function(a, s, i) {
            var c = s.prototype;
            (i.utc = function(x) {
                var v = {
                    date: x,
                    utc: !0,
                    args: arguments
                };
                return new s(v);
            }
            ),
            (c.utc = function(x) {
                var v = i(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return x ? v.add(this.utcOffset(), r) : v;
            }
            ),
            (c.local = function() {
                return i(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                });
            }
            );
            var l = c.parse;
            c.parse = function(x) {
                x.utc && (this.$u = !0),
                this.$utils().u(x.$offset) || (this.$offset = x.$offset),
                l.call(this, x);
            }
            ;
            var f = c.init;
            c.init = function() {
                if (this.$u) {
                    var x = this.$d;
                    (this.$y = x.getUTCFullYear()),
                    (this.$M = x.getUTCMonth()),
                    (this.$D = x.getUTCDate()),
                    (this.$W = x.getUTCDay()),
                    (this.$H = x.getUTCHours()),
                    (this.$m = x.getUTCMinutes()),
                    (this.$s = x.getUTCSeconds()),
                    (this.$ms = x.getUTCMilliseconds());
                } else
                    f.call(this);
            }
            ;
            var d = c.utcOffset;
            c.utcOffset = function(x, v) {
                var h = this.$utils().u;
                if (h(x))
                    return this.$u ? 0 : h(this.$offset) ? d.call(this) : this.$offset;
                if (typeof x == "string" && ((x = (function(b) {
                    b === void 0 && (b = "");
                    var D = b.match(n);
                    if (!D)
                        return null;
                    var P = ("" + D[0]).match(o) || ["-", 0, 0]
                      , Y = P[0]
                      , F = 60 * +P[1] + +P[2];
                    return F === 0 ? 0 : Y === "+" ? F : -F;
                }
                )(x)),
                x === null))
                    return this;
                var m = Math.abs(x) <= 16 ? 60 * x : x
                  , A = this;
                if (v)
                    return (A.$offset = m),
                    (A.$u = x === 0),
                    A;
                if (x !== 0) {
                    var O = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    ((A = this.local().add(m + O, r)).$offset = m),
                    (A.$x.$localOffset = O);
                } else
                    A = this.utc();
                return A;
            }
            ;
            var u = c.format;
            (c.format = function(x) {
                var v = x || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return u.call(this, v);
            }
            ),
            (c.valueOf = function() {
                var x = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * x;
            }
            ),
            (c.isUTC = function() {
                return !!this.$u;
            }
            ),
            (c.toISOString = function() {
                return this.toDate().toISOString();
            }
            ),
            (c.toString = function() {
                return this.toDate().toUTCString();
            }
            );
            var w = c.toDate;
            c.toDate = function(x) {
                return x === "s" && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : w.call(this);
            }
            ;
            var y = c.diff;
            c.diff = function(x, v, h) {
                if (x && this.$u === x.$u)
                    return y.call(this, x, v, h);
                var m = this.local()
                  , A = i(x).local();
                return y.call(m, A, v, h);
            }
            ;
        }
        ;
    });
}
)(r5);
var hC = r5.exports;
const mC = $r(hC);
var n5 = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n();
    }
    )(so, function() {
        var r = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5
        }
          , n = {};
        return function(o, a, s) {
            var i, c = function(u, w, y) {
                y === void 0 && (y = {});
                var x = new Date(u)
                  , v = (function(h, m) {
                    m === void 0 && (m = {});
                    var A = m.timeZoneName || "short"
                      , O = h + "|" + A
                      , b = n[O];
                    return (b || ((b = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: h,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: A,
                    })),
                    (n[O] = b)),
                    b);
                }
                )(w, y);
                return v.formatToParts(x);
            }, l = function(u, w) {
                for (var y = c(u, w), x = [], v = 0; v < y.length; v += 1) {
                    var h = y[v]
                      , m = h.type
                      , A = h.value
                      , O = r[m];
                    O >= 0 && (x[O] = parseInt(A, 10));
                }
                var b = x[3]
                  , D = b === 24 ? 0 : b
                  , P = x[0] + "-" + x[1] + "-" + x[2] + " " + D + ":" + x[4] + ":" + x[5] + ":000"
                  , Y = +u;
                return (s.utc(P).valueOf() - (Y -= Y % 1e3)) / 6e4;
            }, f = a.prototype;
            (f.tz = function(u, w) {
                u === void 0 && (u = i);
                var y = this.utcOffset()
                  , x = this.toDate()
                  , v = x.toLocaleString("en-US", {
                    timeZone: u
                })
                  , h = Math.round((x - new Date(v)) / 1e3 / 60)
                  , m = s(v).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(x.getTimezoneOffset() / 15) - h, !0);
                if (w) {
                    var A = m.utcOffset();
                    m = m.add(y - A, "minute");
                }
                return (m.$x.$timezone = u),
                m;
            }
            ),
            (f.offsetName = function(u) {
                var w = this.$x.$timezone || s.tz.guess()
                  , y = c(this.valueOf(), w, {
                    timeZoneName: u
                }).find(function(x) {
                    return x.type.toLowerCase() === "timezonename";
                });
                return y && y.value;
            }
            );
            var d = f.startOf;
            (f.startOf = function(u, w) {
                if (!this.$x || !this.$x.$timezone)
                    return d.call(this, u, w);
                var y = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                return d.call(y, u, w).tz(this.$x.$timezone, !0);
            }
            ),
            (s.tz = function(u, w, y) {
                var x = y && w
                  , v = y || w || i
                  , h = l(+s(), v);
                if (typeof u != "string")
                    return s(u).tz(v);
                var m = (function(D, P, Y) {
                    var F = D - 60 * P * 1e3
                      , X = l(F, Y);
                    if (P === X)
                        return [F, P];
                    var re = l((F -= 60 * (X - P) * 1e3), Y);
                    return X === re ? [F, X] : [D - 60 * Math.min(X, re) * 1e3, Math.max(X, re)];
                }
                )(s.utc(u, x).valueOf(), h, v)
                  , A = m[0]
                  , O = m[1]
                  , b = s(A).utcOffset(O);
                return (b.$x.$timezone = v),
                b;
            }
            ),
            (s.tz.guess = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
            ),
            (s.tz.setDefault = function(u) {
                i = u;
            }
            );
        }
        ;
    });
}
)(n5);
var gC = n5.exports;
const vC = $r(gC);
ht.extend(mC);
ht.extend(vC);
const wC = "YYYY.MM.DD HH:mm:ss"
  , St = "Asia/ShangHai"
  , RF = [new Date(2e3,1,1,0,0,0), new Date(2e3,2,1,23,59,59)];
function g0(e, t=wC) {
    return ht(e).tz(St).format(t);
}
function XF(e, t=St) {
    return ht(e).tz(t).format("YYYY.MM.DD");
}
function ZF(e, t=St) {
    return ht.utc(e).tz(t).format("YYYY.MM.DD");
}
function kF(e) {
    return ht(e).tz(St).day();
}
function UF() {
    return ht().tz(St).startOf("day").millisecond(0);
}
function As() {
    return ht().tz(St).endOf("day").millisecond(0);
}
function SF(e) {
    return ht(e).tz(St).endOf("day").toDate();
}
function WF(e) {
    const t = As();
    return [As().subtract(e, "days").add(1, "seconds").toDate(), t.toDate()];
}
function QF() {
    return ht().tz(St).year();
}
function JF(e) {
    const t = ht(e.toString()).tz(St).endOf("year").toDate();
    return [ht(e.toString()).tz(St).startOf("year").toDate(), t];
}
function VF(e) {
    const t = As();
    return [As().subtract(e, "days").add(1, "seconds").toDate().toISOString(), t.toDate().toISOString(), ];
}
function qF(e) {
    return ht(e).toDate();
}
function KF(e) {
    return ht(e).tz(St).format("HH:mm");
}
function _F(e, t) {
    return ht(e).diff(ht(t), "minute");
}
function $F(e) {
    const t = ht().tz(St).millisecond(0);
    return [t.subtract(e, "second").millisecond(0).toDate(), t.toDate()];
}
var yC = Object.defineProperty
  , xC = Object.getOwnPropertyDescriptor
  , xt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? xC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && yC(t, r, o),
    o;
}
;
class It {
    constructor() {
        N(this, "id");
        N(this, "avatarUrl", "");
        N(this, "username");
        N(this, "userNo");
        N(this, "departmentId");
        N(this, "avatarSmallUrl");
    }
}
xt([B()], It.prototype, "id", 2);
xt([B()], It.prototype, "avatarUrl", 2);
xt([B()], It.prototype, "username", 2);
xt([B()], It.prototype, "userNo", 2);
xt([B()], It.prototype, "departmentId", 2);
xt([B()], It.prototype, "avatarSmallUrl", 2);
class Ea extends It {
    constructor() {
        super(...arguments);
        N(this, "roles");
        N(this, "permissions");
    }
}
xt([B()], Ea.prototype, "roles", 2);
xt([B()], Ea.prototype, "permissions", 2);
class hi {
    constructor() {
        N(this, "userId");
        N(this, "username");
    }
}
xt([B()], hi.prototype, "userId", 2);
xt([B(), Ha( ({obj: e}) => {
    var t;
    return e.username || ((t = e.user) == null ? void 0 : t.username);
}
), ], hi.prototype, "username", 2);
class o5 {
    constructor() {
        N(this, "userNo");
    }
}
xt([B()], o5.prototype, "userNo", 2);
class Tn {
    constructor() {
        N(this, "id");
        N(this, "createdBy");
        N(this, "trackedUser");
        N(this, "followCount", 0);
        N(this, "resourceCount", 0);
    }
}
xt([B()], Tn.prototype, "id", 2);
xt([B()], Tn.prototype, "createdBy", 2);
xt([B()], Tn.prototype, "trackedUser", 2);
xt([B()], Tn.prototype, "followCount", 2);
xt([B()], Tn.prototype, "resourceCount", 2);
var OC = Object.defineProperty
  , AC = Object.getOwnPropertyDescriptor
  , se = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? AC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && OC(t, r, o),
    o;
}
;
class et {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "category");
        N(this, "createdAt", "");
        N(this, "createdByName");
        N(this, "createdById");
        N(this, "likeCount");
        N(this, "viewCount");
        N(this, "downloadCount");
        N(this, "collectionCount");
        N(this, "saveCount");
        N(this, "averageRate");
        N(this, "upload");
        N(this, "isFolder");
        N(this, "referrerId");
        N(this, "parentId");
        N(this, "reported");
        N(this, "isUnpublished");
        N(this, "createdBy");
    }
    get shortCreatedAt() {
        return this.createdAt.slice(0, 16);
    }
    get createdAtDate() {
        return this.createdAt.slice(0, 10);
    }
}
se([B()], et.prototype, "id", 2);
se([B()], et.prototype, "name", 2);
se([B()], et.prototype, "category", 2);
se([B(), Ha( ({value: e}) => g0(e, "YYYY.MM.DD HH:mm:ss"))], et.prototype, "createdAt", 2);
se([B()], et.prototype, "createdByName", 2);
se([B()], et.prototype, "createdById", 2);
se([B()], et.prototype, "likeCount", 2);
se([B()], et.prototype, "viewCount", 2);
se([B()], et.prototype, "downloadCount", 2);
se([B()], et.prototype, "collectionCount", 2);
se([B()], et.prototype, "saveCount", 2);
se([B()], et.prototype, "averageRate", 2);
se([B(), Wt( () => ur)], et.prototype, "upload", 2);
se([B()], et.prototype, "isFolder", 2);
se([B()], et.prototype, "referrerId", 2);
se([B()], et.prototype, "parentId", 2);
se([B()], et.prototype, "reported", 2);
se([B()], et.prototype, "isUnpublished", 2);
se([B(), Wt( () => It)], et.prototype, "createdBy", 2);
class qe extends et {
    constructor() {
        super(...arguments);
        N(this, "allowDownload");
        N(this, "allowSave");
        N(this, "auditStatus");
        N(this, "classification");
        N(this, "department");
        N(this, "openScope");
        N(this, "referrerType");
        N(this, "summary");
        N(this, "tags");
        N(this, "_tagIds", zh(this.tags, "id"));
        N(this, "_classificationId", this.classification ? this.classification.id : 0);
        N(this, "targetRoles");
        N(this, "ccLicenseName");
        N(this, "source");
        N(this, "subjectCategories");
    }
    get tagIds() {
        return this._tagIds;
    }
    set tagIds(r) {
        this._tagIds = r;
    }
    get classificationId() {
        return this._classificationId;
    }
    set classificationId(r) {
        this._classificationId = r;
    }
}
se([B()], qe.prototype, "allowDownload", 2);
se([B()], qe.prototype, "allowSave", 2);
se([B()], qe.prototype, "auditStatus", 2);
se([B(), Wt( () => ui)], qe.prototype, "classification", 2);
se([B(), Wt( () => fi)], qe.prototype, "department", 2);
se([B()], qe.prototype, "openScope", 2);
se([B()], qe.prototype, "referrerType", 2);
se([B()], qe.prototype, "summary", 2);
se([B(), Wt( () => p0)], qe.prototype, "tags", 2);
se([B()], qe.prototype, "targetRoles", 2);
se([B()], qe.prototype, "ccLicenseName", 2);
se([B()], qe.prototype, "source", 2);
se([B(), Wt( () => m0)], qe.prototype, "subjectCategories", 2);
class mi extends qe {
    constructor() {
        super(...arguments);
        N(this, "shareToName");
        N(this, "shareToOrgName");
        N(this, "shareToOrgId", 0);
        N(this, "resourceFrom");
    }
    get uniqueId() {
        return `${this.resourceFrom}:${this.id}`;
    }
}
se([B()], mi.prototype, "shareToName", 2);
se([B()], mi.prototype, "shareToOrgName", 2);
se([B()], mi.prototype, "shareToOrgId", 2);
se([B()], mi.prototype, "resourceFrom", 2);
class a5 extends et {
    constructor() {
        super(...arguments);
        N(this, "reason");
    }
}
se([B()], a5.prototype, "reason", 2);
class on {
    constructor() {
        N(this, "id");
        N(this, "content");
        N(this, "score");
        N(this, "parentId");
        N(this, "createdAt", "");
        N(this, "updatedAt", "");
        N(this, "user");
    }
}
se([B()], on.prototype, "id", 2);
se([B()], on.prototype, "content", 2);
se([B()], on.prototype, "score", 2);
se([B()], on.prototype, "parentId", 2);
se([B(), Ha( ({value: e}) => g0(e))], on.prototype, "createdAt", 2);
se([B(), Ha( ({value: e}) => g0(e))], on.prototype, "updatedAt", 2);
se([B(), Wt( () => Ea)], on.prototype, "user", 2);
class s5 {
    constructor() {
        N(this, "captureCode");
    }
}
se([B()], s5.prototype, "captureCode", 2);
class Hr {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "upload");
        N(this, "category");
        N(this, "referrerType");
        N(this, "likeCount");
        N(this, "viewCount");
        N(this, "isFromTrackedUser");
    }
}
se([B()], Hr.prototype, "id", 2);
se([B()], Hr.prototype, "name", 2);
se([B(), Wt( () => ur)], Hr.prototype, "upload", 2);
se([B()], Hr.prototype, "category", 2);
se([B()], Hr.prototype, "referrerType", 2);
se([B()], Hr.prototype, "likeCount", 2);
se([B()], Hr.prototype, "viewCount", 2);
se([B()], Hr.prototype, "isFromTrackedUser", 2);
class v0 {
    constructor() {
        N(this, "name");
        N(this, "i18n");
    }
}
se([B()], v0.prototype, "name", 2);
se([B()], v0.prototype, "i18n", 2);
class Cn {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "viewCount", 0);
        N(this, "likeCount", 0);
        N(this, "collectionCount", 0);
        N(this, "downloadCount", 0);
        N(this, "saveCount", 0);
    }
}
se([B()], Cn.prototype, "id", 2);
se([B()], Cn.prototype, "name", 2);
se([B()], Cn.prototype, "viewCount", 2);
se([B()], Cn.prototype, "likeCount", 2);
se([B()], Cn.prototype, "collectionCount", 2);
se([B()], Cn.prototype, "downloadCount", 2);
se([B()], Cn.prototype, "saveCount", 2);
class Ba {
    constructor() {
        N(this, "totalViews", 0);
        N(this, "totalLikes", 0);
        N(this, "totalCollections", 0);
        N(this, "totalDownloads", 0);
        N(this, "totalSaves", 0);
    }
}
se([B()], Ba.prototype, "totalViews", 2);
se([B()], Ba.prototype, "totalLikes", 2);
se([B()], Ba.prototype, "totalCollections", 2);
se([B()], Ba.prototype, "totalDownloads", 2);
se([B()], Ba.prototype, "totalSaves", 2);
class gi {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "parentId");
    }
}
se([B()], gi.prototype, "id", 2);
se([B()], gi.prototype, "name", 2);
se([B()], gi.prototype, "parentId", 2);
const eI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/resource-references", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(qe, n.items);
    return (n.items = o),
    n;
}
  , tI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/public-resource-references", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(qe, n.items);
    return (n.items = o),
    n;
}
  , rI = async (e) => {
    const t = W.decamelizeKeys({
        resourceIds: e
    })
      , r = await q.get("/api/v1/resource-references:batchGet", {
        params: t
    });
    return Ne(qe, W.camelizeKeys(r.data.data));
}
  , nI = async (e) => {
    const t = W.decamelizeKeys({
        resourceIds: e
    })
      , r = await q.get("/api/v1/resource-references:batchGetForTopic", {
        params: t,
    });
    return Ne(qe, W.camelizeKeys(r.data.data));
}
  , oI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/${e}`);
    return Ne(qe, W.camelizeKeys(t.data.data));
}
  , aI = async (e) => (await q.put(`/api/v1/resource-references/${e.id}`, W.decamelizeKeys(e))).data
  , sI = async (e) => (await q.post(`/api/v1/audited-resource-references/${e.id}`, W.decamelizeKeys({
    updateForm: e
}))).data
  , iI = async (e) => {
    const t = await q.post("/api/v1/resource-references:batchCreate", W.decamelizeKeys(e));
    return {
        data: Ne(qe, W.camelizeKeys(t.data.data)),
        error: t.data.error
    };
}
  , cI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/unpublished-resource-references", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(a5, n.items);
    return (n.items = o),
    n;
}
  , lI = async (e) => (await q.post(`/api/v1/published-resource-references/${e.id}:republish`, W.decamelizeKeys(e))).data
  , uI = async (e, t) => (await q.post("/api/v1/published-resource-references:republish", W.decamelizeKeys({
    resourceIds: e,
    ...t
}))).data
  , fI = async (e, t, r=!1) => (await q.delete(`/api/v1/resource-references/${e}`, {
    data: {
        reason: t,
        hard: r
    },
})).data
  , dI = async (e, t, r=!1) => (await q.delete("/api/v1/resource-references", {
    data: W.decamelizeKeys({
        resourceIds: e,
        reason: t,
        hard: r
    }),
})).data
  , pI = async (e) => {
    const t = W.decamelizeKeys({
        resourceIds: e
    });
    return (await q.get("/api/v1/resource-references/report-items-count:batchGet", {
        params: t,
    })).data.data;
}
  , hI = async (e, t) => {
    await q.patch(`/api/v1/resource-references/${e}`, W.decamelizeKeys(t));
}
  , mI = async (e, t) => (await q.patch("/api/v1/resource-references", W.decamelizeKeys({
    resourceIds: e,
    ...t
}))).data
  , gI = async (e, t) => (await q.post("/api/v1/resource-references:batchAudit", W.decamelizeKeys({
    resourceIds: e,
    ...t
}))).data
  , vI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/auditing-resource-references", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(qe, n.items);
    return (n.items = o),
    n;
}
  , wI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/owners/${e}/statistic`);
    return W.camelizeKeys(t.data.data);
}
  , yI = async (e, t) => {
    await q.post(`/api/v1/resource-references/${e}/report`, {
        reasons: t
    });
}
  , xI = async (e) => {
    const t = await q.post(`/api/v1/resource-references/${e}/like`);
    return W.camelizeKeys(t.data.data);
}
  , OI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/${e}/like/statistic`);
    return W.camelizeKeys(t.data.data);
}
  , AI = async (e) => {
    const t = await q.delete(`/api/v1/resource-references/${e}/like`);
    return W.camelizeKeys(t.data.data);
}
  , bI = async (e) => {
    const t = await q.post(`/api/v1/resource-references/${e}/collection`);
    return W.camelizeKeys(t.data.data);
}
  , DI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/${e}/collection/statistic`);
    return W.camelizeKeys(t.data.data);
}
  , MI = async (e) => {
    const t = await q.delete(`/api/v1/resource-references/${e}/collection`);
    return W.camelizeKeys(t.data.data);
}
  , PI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get(`/api/v1/resource-references/${e.id}/comments`, {
        params: t,
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(on, n.items);
    return (n.items = o),
    n;
}
  , zI = async (e, t, r) => {
    await q.post(`/api/v1/resource-references/${e}/comment`, {
        score: t,
        content: r,
    });
}
  , HI = async (e) => {
    await q.delete(`/api/v1/resource-references/comments/${e}`);
}
  , jI = async (e, t) => {
    await q.post(`/api/v1/resource-references/comments/${e}/reply`, {
        content: t,
    });
}
  , NI = async (e) => (await q.get(`/api/v1/resource-references/${e}/blob`, {
    responseType: "blob",
})).data
  , EI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/${e}/comment-status-of-current-user`);
    return W.camelizeKeys(t.data.data);
}
  , BI = async (e) => (await q.get(`/api/v1/resource-references/${e}/copy`)).data
  , TI = async (e) => {
    const t = await q.get(`/api/v1/resource-references/lesson-resource/${e}`)
      , r = W.camelizeKeys(t.data.data);
    return Ne(s5, r);
}
  , CI = async (e) => (await q.post(`/api/v1/resource-references/${e}/view`)).data.data
  , GI = async (e) => {
    const t = W.decamelizeKeys({
        referId: e
    })
      , r = await q.get("/api/v1/recommended-resource-references:batchGet", {
        params: t,
    })
      , n = W.camelizeKeys(r.data.data);
    return Ne(Hr, n);
}
  , YI = async (e) => {
    const t = await q.get("/api/v1/resource-references:batchGetByTag", {
        params: W.decamelizeKeys({
            tagId: e
        }),
    })
      , r = W.camelizeKeys(t.data.data);
    return Ne(qe, r);
}
  , FI = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/public-resource-references:getByTag", {
        params: t,
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(qe, n.items);
    return (n.items = o),
    n;
}
  , II = async (e) => {
    if (!e || !e.length)
        return {};
    const t = W.decamelizeKeys({
        resourceIds: e
    });
    return (await q.get("/api/v1/resource-references/size:batchGet", {
        params: t
    })).data.data;
}
  , LI = async (e) => {
    const t = W.decamelizeKeys({
        resourceIds: e
    });
    return (await q.get("/api/v1/resource-references-cc-license-name:batchGet", {
        params: t,
    })).data.data;
}
  , RI = async (e, t, r) => {
    const n = W.decamelizeKeys({
        userIds: e,
        url: t,
        resourceName: r
    });
    await q.post("/api/v1/resource-reference/notification/comment", n);
}
  , XI = async (e, t) => {
    const r = await q.get(`/api/v1/resource-references/${e}/recently-visited-users`, {
        params: W.decamelizeKeys(t)
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(hi, n.items);
    return (n.items = o),
    n;
}
  , bC = async () => {
    const e = await q.get("/api/v1/resource-reference-sources:batchGet");
    return Ne(v0, e.data.data);
}
  , ZI = async (e, t) => {
    const r = W.decamelizeKeys({
        resourceId: e,
        resourceFrom: t
    })
      , n = await q.get("/api/v1/shared-resources/parent-paths", {
        params: r
    });
    return Ne(gi, W.camelizeKeys(n.data.data));
}
;
var DC = Object.defineProperty
  , MC = Object.getOwnPropertyDescriptor
  , Gn = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? MC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && DC(t, r, o),
    o;
}
;
class jr {
    constructor() {
        N(this, "id");
        N(this, "feature");
        N(this, "enabled");
        N(this, "orgCode");
        N(this, "default");
        N(this, "description");
        N(this, "detail");
    }
}
Gn([B()], jr.prototype, "id", 2);
Gn([B()], jr.prototype, "feature", 2);
Gn([B()], jr.prototype, "enabled", 2);
Gn([B()], jr.prototype, "orgCode", 2);
Gn([B()], jr.prototype, "default", 2);
Gn([B()], jr.prototype, "description", 2);
Gn([B()], jr.prototype, "detail", 2);
const PC = async () => {
    const e = await q.get("/api/v1/feature-toggles:batchGet")
      , t = W.decamelizeKeys(e.data.data);
    return Ne(jr, t, {
        strategy: "excludeAll"
    });
}
  , kI = async (e, t) => {
    const r = {
        ...t
    }
      , n = await q.get(`/api/v1/orgs/${e}/feature-toggles:getByKeyword`, {
        params: W.decamelizeKeys(r),
    })
      , o = W.camelizeKeys(n.data.data)
      , a = o.items;
    return (o.items = Ne(jr, a)),
    o;
}
  , UI = async (e) => {
    await q.get(`/api/v1/orgs/${e}/feature-toggles:syncIncastSetting`);
}
  , SI = async (e, t, r) => {
    const n = {
        toggleName: t,
        enabled: r
    };
    await q.put(`/api/v1/orgs/${e}/feature-toggle`, W.decamelizeKeys(n));
}
  , WI = async (e) => (await q.get(`/api/uploads/${e}/upload-url`)).data.url
  , QI = async (e) => {
    const t = await q.post("/api/v1/uploads", W.decamelizeKeys(e));
    return {
        data: Ne(ur, W.camelizeKeys(t.data.data)),
        error: t.data.error
    };
}
  , zC = async () => {
    const e = await q.get("/api/v1/upload/config");
    return W.camelizeKeys(e.data);
}
  , JI = async (e) => {
    const t = await q.get(`/api/v1/uploads/${e}/videos`);
    return W.camelizeKeys(t.data.data);
}
  , VI = async (e) => {
    await q.post(`/api/v1/uploads/${e}:transcode`);
}
  , qI = async (e) => {
    const t = await q.get(`/api/v1/uploads/${e}/link`)
      , r = W.camelizeKeys(t.data.data);
    return Ne(Ho, r);
}
  , KI = async (e, t) => {
    const r = await q.get(`/api/v1/uploads/${e}/links/${t}/video-link`)
      , n = W.camelizeKeys(r.data.data);
    return Ne(h0, n);
}
  , _I = async (e) => {
    const t = await q.get("/api/v1/uploads/links:batchGet", {
        params: W.decamelizeKeys({
            uploadIds: e
        }),
    })
      , r = W.camelizeKeys(t.data.data);
    return Ne(Ho, r);
}
  , $I = async (e, t, r, n, o) => {
    await q.post(`/api/v1/uploads/${e}/videos`, {
        resolution: t,
        duration: r,
        width: n,
        height: o,
    });
}
  , eL = async (e) => await q.get(`/api/v1/uploads/${e}/preview-url`)
  , tL = async (e) => {
    const t = await q.get("/api/v1/uploads/-/videos:batchGet", {
        params: W.decamelizeKeys({
            uploadIds: e
        }),
    })
      , r = W.camelizeKeys(t.data.data);
    return Ne(pi, r);
}
;
var HC = Object.defineProperty
  , jC = Object.getOwnPropertyDescriptor
  , Kt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? jC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && HC(t, r, o),
    o;
}
;
class jo {
    constructor() {
        N(this, "en-GB");
        N(this, "en-US");
        N(this, "zh-CN");
        N(this, "zh-MO");
        N(this, "zh-TW");
    }
}
Kt([B()], jo.prototype, "en-GB", 2);
Kt([B()], jo.prototype, "en-US", 2);
Kt([B()], jo.prototype, "zh-CN", 2);
Kt([B()], jo.prototype, "zh-MO", 2);
Kt([B()], jo.prototype, "zh-TW", 2);
class i5 {
    constructor() {
        N(this, "title");
    }
}
Kt([B(), Wt( () => jo)], i5.prototype, "title", 2);
class No {
    constructor() {
        N(this, "id");
        N(this, "name");
        N(this, "description");
        N(this, "classifyType");
        N(this, "link");
    }
}
Kt([B()], No.prototype, "id", 2);
Kt([B()], No.prototype, "name", 2);
Kt([B()], No.prototype, "description", 2);
Kt([B({
    name: "classify_type"
})], No.prototype, "classifyType", 2);
Kt([B(), Wt( () => i5)], No.prototype, "link", 2);
const rL = async () => (await q.get("/api/v1/cc-license-groups:batchGet")).data
  , NC = async () => {
    const e = await q.get("/api/v1/cc-licenses:batchGet");
    return Ne(No, e.data.data, {
        strategy: "excludeAll"
    });
}
;
class EC {
    constructor(t) {
        N(this, "features", []);
        this.features = t;
    }
    get showMyGroupInUserMenu() {
        const t = De(this.features, ["feature", "show-my-group-in-user-menu"]);
        return t ? t.enabled : !1;
    }
    get shareResourceAllowDownload() {
        const t = De(this.features, ["feature", "share-resource-allow-download"]);
        return t ? t.enabled : !1;
    }
    get ccLicenseSetting() {
        const t = De(this.features, ["feature", "cc-license-setting"]);
        return t ? t.enabled : !1;
    }
    get shareResourceCategory() {
        const t = De(this.features, ["feature", "share-resource-category"]);
        return t ? t.enabled : !1;
    }
    get shareResourceToOffCampus() {
        const t = De(this.features, ["feature", "share-resource-to-off-campus"]);
        return t ? t.enabled : !1;
    }
    get shareResourceWithDepartment() {
        const t = De(this.features, ["feature", "share-resource-with-department"]);
        return t ? t.enabled : !1;
    }
    get enableScorm() {
        const t = De(this.features, ["feature", "scorm"]);
        return t ? t.enabled : !1;
    }
    get enableWmpkg() {
        const t = De(this.features, ["feature", "wmpkg"]);
        return t ? t.enabled : !1;
    }
    get enableEvercam() {
        const t = De(this.features, ["feature", "evercam"]);
        return t ? t.enabled : !1;
    }
    get enableCoursePackage() {
        const t = De(this.features, ["feature", "course-package"]);
        return t ? t.enabled : !1;
    }
    get enableSlide() {
        const t = De(this.features, ["feature", "slide"]);
        return t ? t.enabled : !1;
    }
    get enableCourseAudienceType() {
        const t = De(this.features, ["feature", "enable-course-audience-type"]);
        return t ? t.enabled : !1;
    }
    get courseNeedPublish() {
        const t = De(this.features, ["feature", "tc-course-need-publish"]);
        return t ? t.enabled : !1;
    }
    get knowledgeGraph() {
        const t = De(this.features, ["feature", "knowledge-graph"]);
        return t ? t.enabled : !1;
    }
    get showFacetsAndFragments() {
        const t = De(this.features, ["feature", "show-facets-and-fragments"]);
        return t ? t.enabled : !1;
    }
    get scheduleCaptureAssociationDeletion() {
        const t = De(this.features, ["feature", "schedule-capture-association-deletion", ]);
        return t ? t.enabled : !1;
    }
    get commentCanAtSb() {
        const t = De(this.features, ["feature", "comment-can-at-sb"]);
        return t ? t.enabled : !1;
    }
    get enableGraphCluster() {
        const t = De(this.features, ["feature", "enable-graph-cluster"]);
        return t ? t.enabled : !1;
    }
    get xjtuEnableLibrarySearch() {
        const t = De(this.features, ["feature", "xjtu-enable-library-search"]);
        return t ? t.enabled : !1;
    }
    get enableTopicResource() {
        const t = De(this.features, ["feature", "enable-topic-resource"]);
        return t ? t.enabled : !1;
    }
    get enableFileResource() {
        const t = De(this.features, ["feature", "enable-file-resource"]);
        return t ? t.enabled : !1;
    }
    get enableCaptureResource() {
        const t = De(this.features, ["feature", "enable-capture-resource"]);
        return t ? t.enabled : !1;
    }
    get home() {
        const t = De(this.features, ["feature", "home"]);
        return t ? t.enabled : !1;
    }
    get resource() {
        const t = De(this.features, ["feature", "resource"]);
        return t ? t.enabled : !1;
    }
    get enableWgAppsPanel() {
        const t = De(this.features, ["feature", "enable-wg-apps-panel"]);
        return t ? t.enabled : !1;
    }
    get enableResourceComment() {
        const t = De(this.features, ["feature", "enable-resource-comment"]);
        return t ? t.enabled : !1;
    }
    get enableNewClassroomAdmin() {
        const t = De(this.features, ["feature", "enable-new-classroom-admin"]);
        return t ? t.enabled : !1;
    }
    get enableDeviceStreamDetect() {
        const t = De(this.features, ["feature", "enable-device-stream-detect"]);
        return t ? t.enabled : !1;
    }
    get enableNewPlayer() {
        const t = De(this.features, ["feature", "new-player"]);
        return t ? t.enabled : !1;
    }
    get enableUserProfile() {
        const t = De(this.features, ["feature", "user-profile"]);
        return t ? t.enabled : !1;
    }
    get enableCollectTopic() {
        const t = De(this.features, ["feature", "enable-collect-topic"]);
        return t ? t.enabled : !1;
    }
    get enableCollectCaptureCourse() {
        const t = De(this.features, ["feature", "enable-collect-capture-course"]);
        return t ? t.enabled : !1;
    }
    get enableStreamForward() {
        const t = De(this.features, ["feature", "enable-stream-forward"]);
        return t ? t.enabled : !1;
    }
    get enableNewScheduleAdmin() {
        const t = De(this.features, ["feature", "enable-new-schedule-admin"]);
        return t ? t.enabled : !1;
    }
    get enableInstructorUpdateCourseRecordSetting() {
        const t = De(this.features, ["feature", "enable-instructor-update-course-record-setting", ]);
        return t ? t.enabled : !1;
    }
    get enableInstructorCreateSchedule() {
        const t = De(this.features, ["feature", "enable-instructor-create-schedule", ]);
        return t ? t.enabled : !1;
    }
    get enableClassroomPreview() {
        const t = De(this.features, ["feature", "enable-classroom-preview"]);
        return t ? t.enabled : !1;
    }
    get enableClip() {
        const t = De(this.features, ["feature", "enable-clip"]);
        return t ? t.enabled : !1;
    }
    get enableCaptureFileDeletionOnStorage() {
        const t = De(this.features, ["feature", "enable-capture-file-deletion-on-storage", ]);
        return t ? t.enabled : !1;
    }
    get enableCapacityManagement() {
        const t = De(this.features, ["feature", "enable-capacity-management"]);
        return t ? t.enabled : !1;
    }
    get enableXjtuKnowledgeForestMode() {
        const t = De(this.features, ["feature", "xjtu_knowledge_forest_mode"]);
        return t ? t.enabled : !1;
    }
    get onlyCreateScheduleFuture() {
        const t = De(this.features, ["feature", "only-create-schedule-future-toggle", ]);
        return t ? t.enabled : !1;
    }
    get enableDeviceAbnormalDetect() {
        const t = De(this.features, ["feature", "enable-device-abnormal-detect"]);
        return t ? t.enabled : !1;
    }
    get showAttendanceAnalysis() {
        const t = De(this.features, ["feature", "show-attendance-analysis"]);
        return t ? t.enabled : !1;
    }
    get showTeachingClassName() {
        const t = De(this.features, ["feature", "show-teaching-class-name"]);
        return t ? t.enabled : !1;
    }
    get showAcademicYearSemester() {
        const t = De(this.features, ["feature", "cppu-show-academic-year-semester", ]);
        return t ? t.enabled : !1;
    }
}
const BC = async (e) => {
    e.config.globalProperties.$element = {
        size: "small"
    };
    const t = await PC();
    e.config.globalProperties.$featureToggle = new EC(t);
    const r = await zC();
    e.config.globalProperties.$storageConfig = r;
    const n = await NC();
    e.config.globalProperties.$cCLicenses = n;
    const o = await bC();
    e.config.globalProperties.$resourceReferenceSourceI18nMap = new Map(o.map( (a) => [a.name, a.i18n]));
}
  , TC = NT( () => Kf("rmsUserInfo", le({})));
function c5(e) {
    return e.replace(/[_.-](\w|$)/g, function(t, r) {
        return r.toUpperCase();
    });
}
function rc(e) {
    return !e || typeof e != "object" || e instanceof Date || e instanceof RegExp ? e : Array.isArray(e) ? e.map(rc) : Object.keys(e).reduce( (t, r) => {
        const n = c5(r);
        return (t[n] = rc(e[r])),
        t;
    }
    , {});
}
function l5(e) {
    return typeof e == "string" ? c5(e) : rc(e);
}
var CC = ( (e) => ((e.BIG = "big"),
(e.SMALL = "small"),
(e.ALL = "big_and_small"),
e))(CC || {});
const nL = async (e, t="small") => e ? (await q.get("/api/v1/users/-/avatars:batchGet", {
    params: {
        user_nos: e,
        avatar_type: t
    },
})).data.data || {} : {}
  , oL = async (e, t="small") => e.length > 0 ? (await q.get("/api/v1/users/-/avatars:batchGetById", {
    params: W.decamelizeKeys({
        userIds: e,
        avatarType: t
    }),
})).data.data || {} : {}
  , GC = async () => {
    const e = await q.get("/api/v1/users:getCurrent");
    return gn(e.data.data) ? null : Ne(Ea, l5(e.data.data));
}
  , aL = async (e) => {
    const t = await q.get(`/api/v1/users/${e}`);
    return gn(t.data.data) ? null : Ne(Ea, l5(t.data.data));
}
  , sL = async (e) => {
    const t = await q.get(`/api/v1/users/${e}/follow-status`);
    return W.camelizeKeys(t.data.data);
}
  , iL = async (e) => {
    const t = await q.post(`/api/v1/users/${e}/follow`);
    return W.camelizeKeys(t.data);
}
  , cL = async (e) => {
    const t = await q.delete(`/api/v1/users/${e}/follow`);
    return W.camelizeKeys(t.data);
}
  , lL = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/users", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data);
    return Ne(It, n);
}
  , uL = async (e) => {
    const t = W.decamelizeKeys(e)
      , r = await q.get("/api/v1/users:atableInComment", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data);
    return Ne(It, n);
}
  , fL = async (e, t, r=!1) => {
    const n = W.decamelizeKeys({
        keyword: t,
        useBlacklist: r
    })
      , o = await q.get(`/api/v1/users/${e}/follows`, {
        params: n
    })
      , a = W.camelizeKeys(o.data.data);
    return Ne(It, a);
}
  , dL = async (e) => {
    const t = {
        keyword: e
    }
      , r = await q.get("/api/v1/users:batchGetByKeyword", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data);
    return Ne(It, n);
}
  , pL = async (e) => {
    const t = await q.get(`/api/v1/users/${e}/fans-count`);
    return W.camelizeKeys(t.data.data).fansCount;
}
  , hL = async (e) => {
    const t = await q.get(`/api/v1/users/${e}/follows-count`);
    return W.camelizeKeys(t.data.data).followsCount;
}
  , mL = async (e) => {
    const t = W.decamelizeKeys(Js(e))
      , r = await q.get("/api/v1/my-track-users", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data);
    return (n.items = Ne(Tn, n.items)),
    n;
}
  , gL = async (e) => {
    const t = W.decamelizeKeys(Js(e))
      , r = await q.get("/api/v1/my-followers", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data);
    return (n.items = Ne(Tn, n.items)),
    n;
}
  , vL = async (e) => {
    const t = {
        uids: e
    }
      , r = await q.get("/api/v1/my-track-status", {
        params: t
    });
    return W.camelizeKeys(r.data.data);
}
  , wL = async (e) => {
    if (e.length > 0) {
        const t = await q.get("/api/v1/users:batchGetByUserNos", {
            params: W.decamelizeKeys({
                userNos: e
            }),
        });
        return Ne(It, W.camelizeKeys(t.data.data));
    }
    return [];
}
  , w0 = () => {
    const e = TC()
      , t = async () => {
        try {
            const c = await GC();
            e.value = c;
        } catch {
            e.value = null;
        }
    }
      , r = () => {
        e.value = null;
    }
      , n = Me( () => !gn(e.value))
      , o = Me( () => gn(e.value) ? !1 : e.value.roles.includes("EducationalAdmin") || e.value.roles.includes("Admin") || e.value.roles.includes("WGAdmin"))
      , a = Me( () => (gn(e.value) ? !1 : e.value.roles.includes("WGAdmin")))
      , s = Me( () => (gn(e.value) ? !0 : e.value.roles.includes("Student")))
      , i = Me( () => (gn(e.value) ? [] : e.value.permissions));
    return {
        hasLogin: n,
        userInfo: e,
        userPermissions: i,
        isAdmin: o,
        isWgAdmin: a,
        isStudent: s,
        setUserInfo: t,
        delUserInfo: r,
    };
}
  , YC = [/^\/api\/v1\/resource-references\/\d+\/like/, /^\/api\/v1\/resource-references\/\d+\/collection/, /^\/api\/v1\/resource-references\/\d+\/blob/, /^\/api\/v1\/users\/\d+\/follow/, /^\/api\/v1\/resource-references\/comments\/\d+\/reply/, /^\/api\/v1\/schedules\/\d+\/live-book/, /^\/api\/v1\/capture-courses\/\d+\/collection/, /^\/api\/v1\/topics\/\d+\/collection/, ]
  , {hasLogin: FC} = w0()
  , q = wE.create({
    baseURL: "",
    paramsSerializer(e) {
        return pT.stringify(e, {
            indices: !1
        });
    },
});
q.interceptors.request.use( (e) => ((e.headers["Accept-Language"] = Sf.global.locale.value),
!FC.value && e.url && YC.some( (t) => t.test(e.url)) ? ((window.location.href = "/api/v1/login"),
Promise.reject(new Error("login required"))) : e), (e) => (Rg.error("请求超时."),
Promise.resolve(e)));
const IC = (e) => {
    const t = e.headers["plugin-id"];
    let r = "/api/v1/login";
    if (t) {
        const n = e.headers.slug;
        r = `${r}?plugin_id=${t}&slug=${n}`;
    }
    window.location.href = r;
}
  , LC = (e) => {
    var r;
    const t = W.camelizeKeys(e.data.error);
    ao.replace({
        name: "noPermission",
        params: {
            subCode: (r = t.details) == null ? void 0 : r.subCode
        },
        query: {
            fromPath: ao.currentRoute.value.fullPath
        },
    });
}
  , RC = (e) => {
    var r;
    const t = W.camelizeKeys(e.data.error);
    ao.replace({
        name: "notFound",
        params: {
            subCode: (r = t.details) == null ? void 0 : r.subCode
        },
    });
}
;
q.interceptors.response.use( (e) => {
    var t, r, n, o, a;
    switch ((r = (t = e.data) == null ? void 0 : t.error) == null ? void 0 : r.code) {
    case $a.LOGIN_REQUIRED:
        IC(e);
        break;
    case $a.PERMISSION_DENIED:
        LC(e);
        break;
    case $a.NOT_FOUND && !e.config.headers.skipNotFoundInterceptor:
        RC(e);
        break;
    }
    return (((o = (n = e.data) == null ? void 0 : n.error) == null ? void 0 : o.code) > 0 && console.error(e.request.responseURL, (a = e.data) == null ? void 0 : a.error),
    e);
}
);
var XC = Object.defineProperty
  , ZC = Object.getOwnPropertyDescriptor
  , Yn = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? ZC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && XC(t, r, o),
    o;
}
;
class an {
    constructor() {
        N(this, "dataRule", "");
        N(this, "fields", []);
        N(this, "name", "");
        N(this, "ts");
        N(this, "isCollapse", !1);
        N(this, "type");
        N(this, "maxDisplayLines", 0);
    }
}
Yn([B()], an.prototype, "dataRule", 2);
Yn([B()], an.prototype, "fields", 2);
Yn([B()], an.prototype, "name", 2);
Yn([B()], an.prototype, "ts", 2);
Yn([B()], an.prototype, "isCollapse", 2);
Yn([B()], an.prototype, "type", 2);
Yn([B(), Ha( ({value: e}) => e || 2)], an.prototype, "maxDisplayLines", 2);
const y0 = async (e) => (await q.get(`/api/configs/${e}`)).data.result
  , kC = async () => y0("home")
  , yL = async () => y0("home-modules").then( (e) => Ne(an, e.data))
  , xL = async () => y0("custom-nv-links").then( (e) => W.camelizeKeys(e.data))
  , OL = async (e, t) => {
    await q.put(`/api/configs/${e}`, {
        data: t
    });
}
  , UC = async (e) => {
    const t = W.decamelizeKeys({
        configNames: e
    });
    return (await q.get("/api/v1/app-configs:getByNames", {
        params: t
    })).data.data;
}
  , SC = () => ({
    config: {},
    initialized: !1
})
  , WC = Kj("home", {
    state: SC,
    actions: {
        getConfig(e=!1) {
            (!e && this.initialized) || kC().then( (t) => {
                this.config = t.data;
            }
            ).then( () => {
                (document.title = this.config.title || ""),
                (this.initialized = !0);
            }
            );
        },
    },
})
  , AL = window.devicePixelRatio || 1
  , bL = 0.98
  , QC = `
    :root {
        --rms-primary-color:#20BEC8;
        --rms-primary-color-1:#E4FAFA;
        --rms-primary-color-2:#B7E6E4;
        --rms-primary-color-3:#99E4E5;
        --rms-primary-color-4:#83C6C7;
        --rms-primary-color-5:#22CBD6;
        --rms-primary-color-6:#20BEC8;
        --rms-primary-color-7:#1CA5AD;
        --rms-primary-color-8:#068894;
        --rms-primary-color-9:#0E7D84;
        --rms-admin-header-color:#2d385a;
    }
`
  , DL = {
    UPCOMING: "#a4b5cd",
    LIVING: "#00bbbd",
    LIVING_AND_RECORDING: "#00bbbd",
    LIVING_AND_RECORD_PAUSING: "#00bbbd",
    RECORDING: "#00bbbd",
    LIVE_PAUSING_AND_RECORDING: "#00bbbd",
    LIVE_PAUSING_AND_RECORD_PAUSING: "#A9ACB8",
    RECORD_PAUSING: "#A9ACB8",
    WAITING_TRANSCODE: "#ff7800",
    STOPPED: "#ff7800",
    FINISHED: "#4892f6",
    FAILED: "#f0485f",
};
var JC = Object.defineProperty
  , VC = Object.getOwnPropertyDescriptor
  , fr = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? VC(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && JC(t, r, o),
    o;
}
;
class x0 {
    constructor() {
        N(this, "id");
        N(this, "code");
        N(this, "name");
    }
}
fr([B()], x0.prototype, "id", 2);
fr([B()], x0.prototype, "code", 2);
fr([B()], x0.prototype, "name", 2);
class sn {
    constructor() {
        N(this, "id");
        N(this, "key");
        N(this, "default");
        N(this, "orgValue");
        N(this, "description");
        N(this, "formType");
        N(this, "formValue");
    }
}
fr([B()], sn.prototype, "id", 2);
fr([B()], sn.prototype, "key", 2);
fr([B()], sn.prototype, "default", 2);
fr([B()], sn.prototype, "orgValue", 2);
fr([B()], sn.prototype, "description", 2);
fr([B()], sn.prototype, "formType", 2);
fr([B()], sn.prototype, "formValue", 2);
const qC = async (e) => {
    const t = W.decamelizeKeys({
        settingNames: e
    });
    return (await q.get("/api/v1/org-settings:getByNames", {
        params: t
    })).data.data;
}
  , ML = async (e, t) => {
    const r = W.decamelizeKeys(Js({
        ...t
    }))
      , n = await q.get(`/api/v1/orgs/${e}/org-settings:getByKeyword`, {
        params: r,
    })
      , o = W.camelizeKeys(n.data.data)
      , a = Ne(sn, o.items);
    return (o.items = a),
    o;
}
  , PL = async (e, t, r) => {
    const n = W.decamelizeKeys({
        key: t,
        value: r
    });
    return (await q.put(`/api/v1/orgs/${e}/org-settings`, n)).data;
}
  , KC = () => {
    const e = async (n) => (await qC([n]))[n];
    return {
        getOrgSettingByName: e,
        getOrgSettingByNameJsonValue: async (n) => {
            try {
                const o = (await e(n)) || "{}";
                return JSON.parse(o);
            } catch {
                console.error(`parse org setting <${n}> error`);
            }
        }
        ,
        getOrgSettingByNameNumberValue: async (n) => {
            try {
                const o = (await e(n)) || "{}";
                return Number(o);
            } catch {
                console.error(`parse org setting <${n}> error`);
            }
        }
        ,
    };
}
;
var u5 = ( (e) => ((e.UN_MUTE_CAMERA_LABEL = "UN_MUTE_CAMERA_LABEL"),
(e.DOWNLOAD_REPLAY = "DOWNLOAD_REPLAY"),
(e.WATER_MARK_CUSTOMIZATION_INFO = "WATER_MARK_CUSTOMIZATION_INFO"),
(e.AUDIO_COPY_PROCESSOR = "AUDIO_COPY_PROCESSOR"),
(e.CLIP_PROCESSOR = "CLIP_PROCESSOR"),
(e.TOPIC_PROCESSOR = "TOPIC_PROCESSOR"),
(e.CAPTION_PROCESSOR = "CAPTION_PROCESSOR"),
(e.TOPIC_SOURCE = "TOPIC_SOURCE"),
(e.PUBLISH_TOPIC = "PUBLISH_TOPIC"),
(e.DELAY_SECONDS_FOR_TRANSCODE = "DELAY_SECONDS_FOR_TRANSCODE"),
(e.MINIMUM_INTERVAL_MANUAL_SCHEDULE = "MINIMUM_INTERVAL_MANUAL_SCHEDULE"),
(e.DEVICE_IMPORT_TYPES = "DEVICE_IMPORT_TYPES"),
(e.THEME_COLORS = "THEME_COLORS"),
(e.XJTU_LIBRARY_SEARCH_URLS = "XJTU_LIBRARY_SEARCH_URLS"),
(e.CAPTION_PARAGRAPH_SPLIT_INTERVAL = "CAPTION_PARAGRAPH_SPLIT_INTERVAL"),
(e.CUSTOM_REPLAY_VIDEO_COPYRIGHT_NOTICE = "CUSTOM_REPLAY_VIDEO_COPYRIGHT_NOTICE"),
e))(u5 || {});
const _C = xe({
    setup(e) {
        const {locale: t} = ti()
          , r = vy()
          , n = le(!1)
          , o = Me( () => Sj[t.value])
          , a = le(!1)
          , {getOrgSettingByName: s} = KC();
        return ((async () => {
            let c = QC;
            try {
                const l = await s(u5.THEME_COLORS);
                l && (c = l);
            } catch (l) {
                console.error("load rms_theme_colors failed: ", l);
            } finally {
                const l = document.createElement("style");
                l.appendChild(document.createTextNode(c)),
                document.head.appendChild(l),
                (a.value = !0);
            }
        }
        )(),
        l4( () => {
            (n.value = r.currentRoute.value.meta.embedView),
            n.value || WC().getConfig();
        }
        ),
        (c, l) => {
            const f = m7("RouterView");
            return (we(),
            vr(Oe(Pg), {
                locale: Oe(o)
            }, {
                default: xn( () => [Ae("div", {
                    class: Ht([n.value ? "" : "h-screen w-full overflow-y-hidden", ]),
                }, [a.value ? (we(),
                vr(f, {
                    key: 0
                })) : Zo("", !0)], 2), ]),
                _: 1,
            }, 8, ["locale"]));
        }
        );
    },
})
  , $C = ["href"]
  , eG = xe({
    props: {
        icon: null,
        className: null,
        size: null
    },
    setup(e) {
        const t = e
          , {icon: r, className: n} = _u(t)
          , o = Me( () => n != null && n.value ? `svg-icon ${n.value}` : "svg-icon")
          , a = Me( () => `#icon-${r.value}`)
          , s = Me( () => (t.size ? {
            fontSize: t.size
        } : {}));
        return (i, c) => (we(),
        je("svg", {
            class: Ht(Oe(o)),
            style: Oo(Oe(s)),
            "aria-hidden": "true"
        }, [Ae("use", {
            href: Oe(a)
        }, null, 8, $C)], 6));
    },
});
const tG = (e) => e.component("SvgIcon", eG)
  , rG = (e) => {
    e.use(Wj());
}
  , nG = (e) => {
    rG(e),
    zT(e);
}
;
function nc(e, t, r) {
    return (t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
    }) : (e[t] = r),
    e);
}
function Ou(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
}
function oc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ou(Object(r), !0).forEach(function(n) {
            nc(e, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return e;
}
var oG = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(n, o) {
        if (!(typeof document > "u")) {
            var a = document.head || document.getElementsByTagName("head")[0]
              , s = document.createElement("script");
            if (((s.async = !0),
            (s.src = t),
            (s.defer = r.defer),
            r.preconnectOrigin)) {
                var i = document.createElement("link");
                (i.href = r.preconnectOrigin),
                (i.rel = "preconnect"),
                a.appendChild(i);
            }
            a.appendChild(s),
            (s.onload = n),
            (s.onerror = o);
        }
    }
    );
}
  , aG = function e(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        n[o - 1] = arguments[o];
    if (!n.length)
        return t;
    var a = n.shift();
    if (!(!ko(t) || !ko(a))) {
        for (var s in a)
            ko(a[s]) ? (t[s] || Object.assign(t, nc({}, s, {})),
            e(t[s], a[s])) : Object.assign(t, nc({}, s, a[s]));
        return e.apply(void 0, [t].concat(n));
    }
}
  , Ta = function() {
    return !(typeof window > "u" || typeof document > "u");
}
  , Au = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    Ta();
}
  , sG = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (Au('Missing "appName" property inside the plugin options.', t.app_name == null),
    Au('Missing "name" property in the route.', t.screen_name == null),
    t);
};
function iG() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
      , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
      , r = e.split("/")
      , n = t.split("/");
    return (r[0] === "" && t[t.length - 1] === "/" && r.shift(),
    n.join("/") + r.join("/"));
}
var cG = function() {
    return {
        bootstrap: !0,
        onReady: null,
        onError: null,
        onBeforeTrack: null,
        onAfterTrack: null,
        pageTrackerTemplate: null,
        customResourceURL: "https://www.googletagmanager.com/gtag/js",
        customPreconnectOrigin: "https://www.googletagmanager.com",
        deferScriptLoad: !1,
        pageTrackerExcludedRoutes: [],
        pageTrackerEnabled: !0,
        enabled: !0,
        disableScriptLoad: !1,
        pageTrackerScreenviewEnabled: !1,
        appName: null,
        pageTrackerUseFullPath: !1,
        pageTrackerPrependBase: !0,
        pageTrackerSkipSamePath: !0,
        globalDataLayerName: "dataLayer",
        globalObjectName: "gtag",
        defaultGroupName: "default",
        includes: null,
        config: {
            id: null,
            params: {
                send_page_view: !1
            }
        },
    };
}, f5 = {}, lG = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , r = cG();
    f5 = aG(r, t);
}, Lt = function() {
    return f5;
}, Dn = function() {
    var e, t = Lt(), r = t.globalObjectName;
    !Ta() || typeof window[r] > "u" || (e = window)[r].apply(e, arguments);
}, O0 = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    var n = Lt()
      , o = n.config
      , a = n.includes;
    Dn.apply(void 0, ["config", o.id].concat(t)),
    Array.isArray(a) && a.forEach(function(s) {
        Dn.apply(void 0, ["config", s.id].concat(t));
    });
}, bu = function(t, r) {
    Ta() && (window["ga-disable-".concat(t)] = r);
}, d5 = function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
      , t = Lt()
      , r = t.config
      , n = t.includes;
    bu(r.id, e),
    Array.isArray(n) && n.forEach(function(o) {
        return bu(o.id, e);
    });
}, p5 = function() {
    d5(!0);
}, uG = function() {
    d5(!1);
}, h5, fG = function(t) {
    h5 = t;
}, A0 = function() {
    return h5;
}, Fn = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = Lt()
      , n = r.includes
      , o = r.defaultGroupName;
    t.send_to == null && Array.isArray(n) && n.length && (t.send_to = n.map(function(a) {
        return a.id;
    }).concat(o)),
    Dn("event", e, t);
}, m5 = function(e) {
    if (Ta()) {
        var t;
        if (typeof e == "string")
            t = {
                page_path: e
            };
        else if (e.path || e.fullPath) {
            var r = Lt()
              , n = r.pageTrackerUseFullPath
              , o = r.pageTrackerPrependBase
              , a = A0()
              , s = a && a.options.base
              , i = n ? e.fullPath : e.path;
            t = oc(oc({}, e.name && {
                page_title: e.name
            }), {}, {
                page_path: o ? iG(i, s) : i
            });
        } else
            t = e;
        t.page_location == null && (t.page_location = window.location.href),
        t.send_page_view == null && (t.send_page_view = !0),
        Fn("page_view", t);
    }
}, g5 = function(e) {
    var t = Lt()
      , r = t.appName;
    if (e) {
        var n;
        typeof e == "string" ? (n = {
            screen_name: e
        }) : (n = e),
        (n.app_name = n.app_name || r),
        Fn("screen_view", n);
    }
}, dG = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    Fn.apply(void 0, ["exception"].concat(t));
}, pG = function(e) {
    O0("linker", e);
}, hG = function(e) {
    Fn("timing_complete", e);
}, mG = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    Dn.apply(void 0, ["set"].concat(t));
}, gG = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    Fn.apply(void 0, ["refund"].concat(t));
}, vG = function(e) {
    Fn("purchase", e);
}, wG = function(e) {
    O0({
        custom_map: e
    });
}, yG = Object.freeze({
    __proto__: null,
    query: Dn,
    config: O0,
    optOut: p5,
    optIn: uG,
    pageview: m5,
    screenview: g5,
    exception: dG,
    linker: pG,
    time: hG,
    set: mG,
    refund: gG,
    purchase: vG,
    customMap: wG,
    event: Fn,
}), xG = function(t) {
    t.config.globalProperties.$gtag = yG;
}, OG = function() {
    if (Ta()) {
        var e = Lt()
          , t = e.enabled
          , r = e.globalObjectName
          , n = e.globalDataLayerName;
        return (window[r] == null && ((window[n] = window[n] || []),
        (window[r] = function() {
            window[n].push(arguments);
        }
        )),
        window[r]("js", new Date()),
        t || p5(),
        window[r]);
    }
}, Du = function(t) {
    return oc({
        send_page_view: !1
    }, t);
}, v5 = function() {
    var e = Lt()
      , t = e.config
      , r = e.includes;
    Dn("config", t.id, Du(t.params)),
    Array.isArray(r) && r.forEach(function(n) {
        Dn("config", n.id, Du(n.params));
    });
}, Mu = function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = Lt()
      , n = r.appName
      , o = r.pageTrackerTemplate
      , a = r.pageTrackerScreenviewEnabled
      , s = r.pageTrackerSkipSamePath;
    if (!(s && e.path === t.path)) {
        var i = e;
        if ((ve(o) ? (i = o(e, t)) : a && (i = sG({
            app_name: n,
            screen_name: e.name
        })),
        a)) {
            g5(i);
            return;
        }
        m5(i);
    }
}, Pu = function(t) {
    var r = Lt()
      , n = r.pageTrackerExcludedRoutes;
    return n.includes(t.path) || n.includes(t.name);
}, AG = function() {
    var e = Lt()
      , t = e.onBeforeTrack
      , r = e.onAfterTrack
      , n = A0();
    n.isReady().then(function() {
        br().then(function() {
            var o = n.currentRoute;
            v5(),
            !Pu(o.value) && Mu(o.value);
        }),
        n.afterEach(function(o, a) {
            br().then(function() {
                Pu(o) || (ve(t) && t(o, a),
                Mu(o, a),
                ve(r) && r(o, a));
            });
        });
    });
}, bG = function() {
    var e = Lt()
      , t = e.onReady
      , r = e.onError
      , n = e.globalObjectName
      , o = e.globalDataLayerName
      , a = e.config
      , s = e.customResourceURL
      , i = e.customPreconnectOrigin
      , c = e.deferScriptLoad
      , l = e.pageTrackerEnabled
      , f = e.disableScriptLoad
      , d = !!(l && A0());
    if ((OG(),
    d ? AG() : v5(),
    !f))
        return oG("".concat(s, "?id=").concat(a.id, "&l=").concat(o), {
            preconnectOrigin: i,
            defer: c,
        }).then(function() {
            t && t(window[n]);
        }).catch(function(u) {
            return r && r(u),
            u;
        });
}, DG = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = arguments.length > 2 ? arguments[2] : void 0;
    xG(t),
    lG(r),
    fG(n),
    Lt().bootstrap && bG();
};
const w5 = "/assets/topic-default-cover-cc65c796.png"
  , y5 = (e, t=0) => `/api/upload/download/${e}?ts=${t}`
  , zL = (e) => {
    const t = [];
    let r = document.createElement("div");
    return ((r.innerHTML = e),
    r.querySelectorAll("a").forEach( (o) => {
        const a = JSON.parse(o.dataset.user || "{}");
        a.id && t.push(a.id);
    }
    ),
    (r = void 0),
    t);
}
;
function HL(e, t) {
    for (const r in e)
        if (e[r] === t)
            return e[r];
}
var MG = Object.defineProperty
  , PG = Object.getOwnPropertyDescriptor
  , nt = (e, t, r, n) => {
    for (var o = n > 1 ? void 0 : n ? PG(t, r) : t, a = e.length - 1, s; a >= 0; a--)
        (s = e[a]) && (o = (n ? s(t, r, o) : s(o)) || o);
    return n && o && MG(t, r, o),
    o;
}
;
class b0 {
    constructor() {
        N(this, "id", 0);
        N(this, "resourceId", 0);
        N(this, "resourceType", "");
    }
}
nt([B({
    name: "resource_id"
})], b0.prototype, "resourceId", 2);
nt([B({
    name: "resource_type"
})], b0.prototype, "resourceType", 2);
class Eo {
    constructor() {
        N(this, "id");
        N(this, "name", "");
        N(this, "description", "");
        N(this, "createdAt", "");
        N(this, "updatedAt", "");
        N(this, "coverKey", "");
        N(this, "publisher", "");
        N(this, "resourceCount", 0);
        N(this, "classificationId", 0);
        N(this, "resources", []);
    }
    get coverUrl() {
        return this.coverKey ? y5(this.coverKey) : w5;
    }
    get fileIds() {
        return this.resources.filter( (t) => t.resourceType === "file").map( (t) => t.resourceId);
    }
    get courseIds() {
        return this.resources.filter( (t) => t.resourceType === "course").map( (t) => t.resourceId);
    }
}
nt([za({
    toPlainOnly: !0
}), B({
    name: "created_at"
})], Eo.prototype, "createdAt", 2);
nt([za({
    toPlainOnly: !0
}), B({
    name: "updated_at"
})], Eo.prototype, "updatedAt", 2);
nt([B({
    name: "cover_key"
})], Eo.prototype, "coverKey", 2);
nt([B({
    name: "resource_count"
})], Eo.prototype, "resourceCount", 2);
nt([B({
    name: "classification_id"
})], Eo.prototype, "classificationId", 2);
nt([Wt( () => b0)], Eo.prototype, "resources", 2);
class bt {
    constructor() {
        N(this, "id");
        N(this, "name", "");
        N(this, "description", "");
        N(this, "createdAt", "");
        N(this, "updatedAt", "");
        N(this, "coverKey", "");
        N(this, "publisher", "");
        N(this, "resourceCount", 0);
        N(this, "classificationId", 0);
        N(this, "resources", []);
        N(this, "tagIds", []);
    }
    get coverUrl() {
        return this.coverKey ? y5(this.coverKey) : w5;
    }
    get fileIds() {
        return this.resources.filter( (t) => t.resourceType === "file").map( (t) => t.resourceId);
    }
    get courseIds() {
        return this.resources.filter( (t) => t.resourceType === "course").map( (t) => t.resourceId);
    }
}
nt([B()], bt.prototype, "id", 2);
nt([B()], bt.prototype, "name", 2);
nt([B()], bt.prototype, "description", 2);
nt([za({
    toPlainOnly: !0
})], bt.prototype, "createdAt", 2);
nt([za({
    toPlainOnly: !0
})], bt.prototype, "updatedAt", 2);
nt([B()], bt.prototype, "coverKey", 2);
nt([B()], bt.prototype, "publisher", 2);
nt([za({
    toPlainOnly: !0
})], bt.prototype, "resourceCount", 2);
nt([B()], bt.prototype, "classificationId", 2);
nt([B()], bt.prototype, "resources", 2);
nt([B()], bt.prototype, "tagIds", 2);
const jL = async (e) => {
    const t = W.decamelizeKeys(Js(e, (o) => o))
      , r = await q.get("/api/v1/topics", {
        params: t
    })
      , n = W.camelizeKeys(r.data);
    return (n.items = Ne(bt, n.items)),
    n;
}
  , NL = async (e) => {
    const t = await q.get(`/api/v1/topics/${e}`)
      , r = W.camelizeKeys(t.data.data);
    return Ne(bt, r);
}
  , EL = async (e) => {
    const t = {
        ids: e
    }
      , r = await q.get("/api/v1/topics:batchGetByIds", {
        params: t
    })
      , n = W.camelizeKeys(r.data.data || []);
    return Ne(bt, n);
}
  , BL = async (e, t) => await q.put(`/api/v1/topics/${e}`, W.decamelizeKeys(hf(t)))
  , TL = async (e) => await q.post("/api/v1/topics", W.decamelizeKeys(hf(e)))
  , CL = async (e) => await q.delete(`/api/v1/topics/${e}`)
  , GL = async (e, t) => {
    await q.patch(`/api/v1/topics/${e}`, W.decamelizeKeys(t));
}
  , YL = async (e) => {
    const t = await q.get("/api/v1/topics:batchGetByTag", {
        params: W.decamelizeKeys({
            tagId: e
        }),
    })
      , r = W.camelizeKeys(t.data.data);
    return Ne(bt, r);
}
  , zG = async (e) => {
    await q.post(`/api/v1/topics/${e}/visits`);
}
  , FL = async (e, t) => {
    const r = await q.get(`/api/v1/topics/${e}/recently-visited-users`, {
        params: W.decamelizeKeys(t),
    })
      , n = W.camelizeKeys(r.data.data)
      , o = Ne(hi, n.items);
    return (n.items = o),
    n;
}
  , IL = async (e) => {
    const t = await q.get(`/api/v1/topics/${e}/collections:batchGetAll`);
    return Ne(o5, W.camelizeKeys(t.data.data));
}
  , LL = async (e) => {
    await q.post(`/api/v1/topics/${e}/collection`);
}
  , RL = async (e) => {
    await q.delete(`/api/v1/topics/${e}/collection`);
}
  , XL = async (e) => {
    const t = W.decamelizeKeys({
        topicIds: e
    });
    return (await q.get("/api/v1/topics/resource-count:batchGet", {
        params: t
    })).data.data;
}
  , {hasLogin: HG} = w0()
  , jG = (e) => {
    e.beforeEach( (t) => (t.path.startsWith("/admin") && (t.meta.isAdminPage = !0),
    !0)),
    e.afterEach(async (t, r) => {
        HG.value && ["topic-file", "topic-course"].includes(t.name) && !["topic-file", "topic-course"].includes(r.name) && (await zG(Number(t.params.id)));
    }
    );
}
  , NG = async (e) => {
    jG(ao);
    const t = e.config.globalProperties.GA4_MEASUREMENT_ID;
    t && e.use(DG, {
        pageTrackerTemplate(r) {
            return {
                page_title: r.meta.trackName
            };
        },
        config: {
            id: t
        },
    }, ao),
    e.use(ao);
}
  , EG = {
    mounted: (e, t) => {
        const r = t.value;
        t.modifiers.immediate && r();
        const n = Yh(r, 300);
        e.addEventListener("scroll", n, !0);
    }
    ,
}
  , BG = {
    mounted: (e, t) => {
        const r = t.value;
        (e.style.cssText += `--dot-bg-color: ${r};`),
        e.classList.add("dot");
    }
    ,
    updated(e, t) {
        const r = t.value;
        e.style.cssText += `--dot-bg-color: ${r};`;
    },
}
  , TG = (e) => {
    e.directive("scroll", EG),
    e.directive("beforeDot", BG);
}
  , CG = async () => {
    const e = h6(_C);
    nG(e),
    tG(e);
    const t = await UC(["GA4_MEASUREMENT_ID"]);
    (e.config.globalProperties.GA4_MEASUREMENT_ID = t.GA4_MEASUREMENT_ID),
    NG(e),
    TG(e),
    await BC(e),
    await w0().setUserInfo(),
    e.mount("#app");
}
;
CG().catch( (e) => console.error(e));
export {vI as $, le as A, tL as B, pt as C, bF as D, Ht as E, st as F, Jo as G, nL as H, l4 as I, Ma as J, Oc as K, br as L, en as M, Ac as N, Ud as O, ZG as P, kG as Q, qe as R, LF as S, WC as T, TF as U, yL as V, D1 as W, g7 as X, DY as Y, gn as Z, eG as _, NF as a, Wd as a$, bg as a0, w0 as a1, d4 as a2, jt as a3, Eu as a4, JG as a5, Hs as a6, ro as a7, SG as a8, VG as a9, Oa as aA, ct as aB, Tu as aC, xc as aD, w7 as aE, bo as aF, p6 as aG, hY as aH, PY as aI, H7 as aJ, Vu as aK, yr as aL, ia as aM, Qe as aN, nY as aO, Ju as aP, Dr as aQ, io as aR, uY as aS, N4 as aT, YG as aU, Oo as aV, Rd as aW, kd as aX, Xd as aY, Jd as aZ, Qd as a_, lo as aa, Xs as ab, AY as ac, Hc as ad, Zt as ae, xr as af, Ct as ag, zs as ah, Vr as ai, wY as aj, h6 as ak, l7 as al, fY as am, c7 as an, MY as ao, eY as ap, _G as aq, XG as ar, QG as as, J7 as at, aY as au, sY as av, oY as aw, yY as ax, Bo as ay, FG as az, Ae as b, Js as b$, Cu as b0, Sd as b1, Da as b2, Ku as b3, a4 as b4, Ao as b5, dc as b6, rY as b7, us as b8, Ls as b9, bY as bA, Q4 as bB, s6 as bC, j7 as bD, e4 as bE, Yd as bF, WG as bG, dY as bH, iY as bI, mY as bJ, u6 as bK, UG as bL, A5 as bM, so as bN, $r as bO, Sf as bP, IF as bQ, y0 as bR, Yh as bS, Rg as bT, OL as bU, kC as bV, y5 as bW, RF as bX, rI as bY, De as bZ, eI as b_, qG as ba, vY as bb, da as bc, W0 as bd, Dd as be, co as bf, Qu as bg, LG as bh, Cs as bi, z7 as bj, gY as bk, IG as bl, Ja as bm, tY as bn, Ge as bo, $u as bp, _u as bq, KG as br, RG as bs, lY as bt, xY as bu, OY as bv, pY as bw, cY as bx, f4 as by, W4 as bz, je as c, WI as c$, w5 as c0, bt as c1, NL as c2, zF as c3, BL as c4, TL as c5, $a as c6, g0 as c7, CL as c8, GL as c9, rL as cA, aI as cB, mI as cC, Oh as cD, dL as cE, B as cF, WF as cG, UF as cH, As as cI, qs as cJ, Zr as cK, sg as cL, Xt as cM, kc as cN, eF as cO, Dm as cP, O3 as cQ, hF as cR, $Y as cS, Uc as cT, fe as cU, YY as cV, TY as cW, AF as cX, Zc as cY, $I as cZ, QI as c_, zh as ca, l3 as cb, Nc as cc, N1 as cd, zp as ce, ks as cf, X6 as cg, uF as ch, VY as ci, sF as cj, ZY as ck, Wl as cl, iI as cm, dI as cn, pI as co, kj as cp, hI as cq, oI as cr, fI as cs, uI as ct, lI as cu, cI as cv, Dh as cw, sI as cx, gI as cy, FF as cz, xe as d, EY as d$, ur as d0, VF as d1, DL as d2, kl as d3, Ul as d4, rg as d5, tg as d6, BF as d7, x0 as d8, UI as d9, EC as dA, xL as dB, DF as dC, jF as dD, II as dE, gh as dF, u8 as dG, $f as dH, Cn as dI, Ba as dJ, o5 as dK, hi as dL, Wt as dM, Ha as dN, P3 as dO, ve as dP, Nn as dQ, HY as dR, Xc as dS, og as dT, Ks as dU, fg as dV, Vn as dW, pm as dX, Se as dY, ig as dZ, pg as d_, kI as da, SI as db, ML as dc, PL as dd, W9 as de, KF as df, ht as dg, Zs as dh, Jt as di, Lc as dj, q8 as dk, Qs as dl, Ph as dm, wL as dn, ao as dp, CI as dq, HL as dr, kF as ds, XF as dt, _F as du, te as dv, qF as dw, ps as dx, Ve as dy, PC as dz, Ze as e, BY as e$, dm as e0, fi as e1, _r as e2, Gc as e3, u3 as e4, ho as e5, Mo as e6, j1 as e7, Hp as e8, ds as e9, mF as eA, iF as eB, cF as eC, NY as eD, UC as eE, DT as eF, H3 as eG, cr as eH, p8 as eI, u9 as eJ, lr as eK, d3 as eL, cp as eM, jl as eN, Cc as eO, V9 as eP, xl as eQ, fs as eR, Or as eS, lp as eT, bl as eU, Hh as eV, XY as eW, vF as eX, pF as eY, rF as eZ, zm as e_, Dp as ea, RL as eb, XL as ec, Xr as ed, hm as ee, sm as ef, gl as eg, i8 as eh, pL as ei, hL as ej, wI as ek, ug as el, Im as em, OF as en, yF as eo, wF as ep, ag as eq, LY as er, RY as es, IY as et, UY as eu, $h as ev, aF as ew, tF as ex, lF as ey, kY as ez, Oe as f, bI as f$, CY as f0, zY as f1, cc as f2, D3 as f3, Th as f4, nh as f5, Ce as f6, Rc as f7, xF as f8, C5 as f9, KC as fA, Ec as fB, Bc as fC, M1 as fD, L6 as fE, TI as fF, CF as fG, HF as fH, Ke as fI, JI as fJ, qI as fK, KI as fL, GF as fM, YF as fN, kE as fO, MF as fP, AL as fQ, bL as fR, eL as fS, VI as fT, fL as fU, cL as fV, iL as fW, FL as fX, XI as fY, NI as fZ, mi as f_, jY as fa, FY as fb, nF as fc, SY as fd, sr as fe, KY as ff, oF as fg, _Y as fh, GY as fi, P0 as fj, qY as fk, WY as fl, l5 as fm, ui as fn, p0 as fo, QY as fp, gF as fq, Do as fr, Ic as fs, rp as ft, ya as fu, R6 as fv, ZI as fw, m0 as fx, bp as fy, u5 as fz, Zo as g, MI as g0, QF as g1, $F as g2, JF as g3, SF as g4, lL as g5, JY as g6, fF as g7, dF as g8, uL as g9, nI as gA, YI as gB, YL as gC, PF as gD, FI as gE, LI as gF, _I as gG, EL as gH, hT as gI, PT as gJ, OT as gK, EF as ga, on as gb, PI as gc, zL as gd, RI as ge, jI as gf, HI as gg, zI as gh, EI as gi, GI as gj, aL as gk, OI as gl, DI as gm, sL as gn, yI as go, AI as gp, xI as gq, BI as gr, tI as gs, CC as gt, mL as gu, gL as gv, vL as gw, ZF as gx, LL as gy, IL as gz, W as h, q as i, jL as j, Me as k, j4 as l, vr as m, Kj as n, we as o, Ne as p, oL as q, $G as r, xn as s, Hu as t, ti as u, jc as v, A4 as w, vy as x, Je as y, m7 as z, };