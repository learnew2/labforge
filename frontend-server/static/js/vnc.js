var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const a of i) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(i) {
      const a = {};
      return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function r(i) {
      if (i.ep) return;
      i.ep = true;
      const a = n(i);
      fetch(i.href, a);
    }
  })();
  function Nt() {
  }
  function Ha(e) {
    return e();
  }
  function Mi() {
    return /* @__PURE__ */ Object.create(null);
  }
  function xr(e) {
    e.forEach(Ha);
  }
  function Wa(e) {
    return typeof e == "function";
  }
  function dn(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
  }
  function ms(e) {
    return Object.keys(e).length === 0;
  }
  function lt(e, t) {
    e.appendChild(t);
  }
  function Ir(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function gr(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function Xt(e) {
    return document.createElement(e);
  }
  function hr(e) {
    return document.createTextNode(e);
  }
  function In() {
    return hr(" ");
  }
  function ws() {
    return hr("");
  }
  function Di(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }
  function Tt(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function ks(e) {
    return Array.from(e.childNodes);
  }
  function Qn(e, t) {
    t = "" + t, e.data !== t && (e.data = t);
  }
  let Pr;
  function Xr(e) {
    Pr = e;
  }
  function Ss() {
    if (!Pr) throw new Error("Function called outside component initialization");
    return Pr;
  }
  function za(e) {
    Ss().$$.on_mount.push(e);
  }
  const fr = [], Un = [];
  let dr = [];
  const Oi = [], Es = Promise.resolve();
  let Nn = false;
  function Ks() {
    Nn || (Nn = true, Es.then(Ga));
  }
  function jn(e) {
    dr.push(e);
  }
  const En = /* @__PURE__ */ new Set();
  let ur = 0;
  function Ga() {
    if (ur !== 0) return;
    const e = Pr;
    do {
      try {
        for (; ur < fr.length; ) {
          const t = fr[ur];
          ur++, Xr(t), Xs(t.$$);
        }
      } catch (t) {
        throw fr.length = 0, ur = 0, t;
      }
      for (Xr(null), fr.length = 0, ur = 0; Un.length; ) Un.pop()();
      for (let t = 0; t < dr.length; t += 1) {
        const n = dr[t];
        En.has(n) || (En.add(n), n());
      }
      dr.length = 0;
    } while (fr.length);
    for (; Oi.length; ) Oi.pop()();
    Nn = false, En.clear(), Xr(e);
  }
  function Xs(e) {
    if (e.fragment !== null) {
      e.update(), xr(e.before_update);
      const t = e.dirty;
      e.dirty = [
        -1
      ], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(jn);
    }
  }
  function Fs(e) {
    const t = [], n = [];
    dr.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), dr = t;
  }
  const nn = /* @__PURE__ */ new Set();
  let Yt;
  function Va() {
    Yt = {
      r: 0,
      c: [],
      p: Yt
    };
  }
  function Za() {
    Yt.r || xr(Yt.c), Yt = Yt.p;
  }
  function jt(e, t) {
    e && e.i && (nn.delete(e), e.i(t));
  }
  function pr(e, t, n, r) {
    if (e && e.o) {
      if (nn.has(e)) return;
      nn.add(e), Yt.c.push(() => {
        nn.delete(e), r && (n && e.d(1), r());
      }), e.o(t);
    } else r && r();
  }
  function qa(e) {
    e && e.c();
  }
  function ii(e, t, n) {
    const { fragment: r, after_update: i } = e.$$;
    r && r.m(t, n), jn(() => {
      const a = e.$$.on_mount.map(Ha).filter(Wa);
      e.$$.on_destroy ? e.$$.on_destroy.push(...a) : xr(a), e.$$.on_mount = [];
    }), i.forEach(jn);
  }
  function ai(e, t) {
    const n = e.$$;
    n.fragment !== null && (Fs(n.after_update), xr(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function Cs(e, t) {
    e.$$.dirty[0] === -1 && (fr.push(e), Ks(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
  }
  function oi(e, t, n, r, i, a, o = null, s = [
    -1
  ]) {
    const y = Pr;
    Xr(e);
    const u = e.$$ = {
      fragment: null,
      ctx: [],
      props: a,
      update: Nt,
      not_equal: i,
      bound: Mi(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (y ? y.$$.context : [])),
      callbacks: Mi(),
      dirty: s,
      skip_bound: false,
      root: t.target || y.$$.root
    };
    o && o(u.root);
    let l = false;
    if (u.ctx = n ? n(e, t.props || {}, (S, X, ...g) => {
      const b = g.length ? g[0] : X;
      return u.ctx && i(u.ctx[S], u.ctx[S] = b) && (!u.skip_bound && u.bound[S] && u.bound[S](b), l && Cs(e, S)), X;
    }) : [], u.update(), l = true, xr(u.before_update), u.fragment = r ? r(u.ctx) : false, t.target) {
      if (t.hydrate) {
        const S = ks(t.target);
        u.fragment && u.fragment.l(S), S.forEach(gr);
      } else u.fragment && u.fragment.c();
      t.intro && jt(e.$$.fragment), ii(e, t.target, t.anchor), Ga();
    }
    Xr(y);
  }
  class si {
    constructor() {
      __publicField(this, "$$");
      __publicField(this, "$$set");
    }
    $destroy() {
      ai(this, 1), this.$destroy = Nt;
    }
    $on(t, n) {
      if (!Wa(n)) return Nt;
      const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(t) {
      this.$$set && !ms(t) && (this.$$.skip_bound = true, this.$$set(t), this.$$.skip_bound = false);
    }
  }
  const As = "4";
  typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: /* @__PURE__ */ new Set()
  })).v.add(As);
  function Ps(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Ya = {}, Qr = {};
  Object.defineProperty(Qr, "__esModule", {
    value: true
  });
  Qr.toSigned32bit = Ls;
  Qr.toUnsigned32bit = Ts;
  function Ts(e) {
    return e >>> 0;
  }
  function Ls(e) {
    return e | 0;
  }
  var Re = {};
  Object.defineProperty(Re, "__esModule", {
    value: true
  });
  Re.Warn = Re.Info = Re.Error = Re.Debug = void 0;
  Re.getLogging = Rs;
  Re.initLogging = $a;
  var Hn = "warn";
  Re.Debug = function() {
  };
  Re.Info = function() {
  };
  Re.Warn = function() {
  };
  Re.Error = function() {
  };
  function $a(e) {
    if (typeof e > "u" ? e = Hn : Hn = e, Re.Debug = Re.Info = Re.Warn = Re.Error = function() {
    }, typeof window.console < "u") switch (e) {
      case "debug":
        Re.Debug = console.debug.bind(window.console);
      case "info":
        Re.Info = console.info.bind(window.console);
      case "warn":
        Re.Warn = console.warn.bind(window.console);
      case "error":
        Re.Error = console.error.bind(window.console);
      case "none":
        break;
      default:
        throw new window.Error("invalid logging type '" + e + "'");
    }
  }
  function Rs() {
    return Hn;
  }
  $a();
  var Ur = {};
  Object.defineProperty(Ur, "__esModule", {
    value: true
  });
  Ur.decodeUTF8 = Ms;
  Ur.encodeUTF8 = Ds;
  function Ms(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    try {
      return decodeURIComponent(escape(e));
    } catch (n) {
      if (n instanceof URIError && t) return e;
      throw n;
    }
  }
  function Ds(e) {
    return unescape(encodeURIComponent(e));
  }
  var Ae = {}, _n = {};
  (function(e) {
    function t(a) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, t(a);
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var n = i(Re);
    function r(a) {
      if (typeof WeakMap != "function") return null;
      var o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (r = function(u) {
        return u ? s : o;
      })(a);
    }
    function i(a, o) {
      if (a && a.__esModule) return a;
      if (a === null || t(a) != "object" && typeof a != "function") return {
        default: a
      };
      var s = r(o);
      if (s && s.has(a)) return s.get(a);
      var y = {
        __proto__: null
      }, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var l in a) if (l !== "default" && {}.hasOwnProperty.call(a, l)) {
        var S = u ? Object.getOwnPropertyDescriptor(a, l) : null;
        S && (S.get || S.set) ? Object.defineProperty(y, l, S) : y[l] = a[l];
      }
      return y.default = a, s && s.set(a, y), y;
    }
    e.default = {
      toBase64Table: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),
      base64Pad: "=",
      encode: function(o) {
        for (var s = "", y = o.length, u = y % 3, l = 0; l < y - 2; l += 3) s += this.toBase64Table[o[l] >> 2], s += this.toBase64Table[((o[l] & 3) << 4) + (o[l + 1] >> 4)], s += this.toBase64Table[((o[l + 1] & 15) << 2) + (o[l + 2] >> 6)], s += this.toBase64Table[o[l + 2] & 63];
        var S = y - u;
        return u === 2 ? (s += this.toBase64Table[o[S] >> 2], s += this.toBase64Table[((o[S] & 3) << 4) + (o[S + 1] >> 4)], s += this.toBase64Table[(o[S + 1] & 15) << 2], s += this.toBase64Table[64]) : u === 1 && (s += this.toBase64Table[o[S] >> 2], s += this.toBase64Table[(o[S] & 3) << 4], s += this.toBase64Table[64], s += this.toBase64Table[64]), s;
      },
      toBinaryTable: [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        62,
        -1,
        -1,
        -1,
        63,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        -1,
        -1,
        -1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        -1,
        -1,
        -1,
        -1,
        -1
      ],
      decode: function(o) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = o.indexOf("=") - s;
        y < 0 && (y = o.length - s);
        for (var u = (y >> 2) * 3 + Math.floor(y % 4 / 1.5), l = new Array(u), S = 0, X = 0, g = 0, b = s; b < o.length; b++) {
          var d = this.toBinaryTable[o.charCodeAt(b) & 127], f = o.charAt(b) === this.base64Pad;
          if (d === -1) {
            n.Error("Illegal character code " + o.charCodeAt(b) + " at position " + b);
            continue;
          }
          X = X << 6 | d, S += 6, S >= 8 && (S -= 8, f || (l[g++] = X >> S & 255), X &= (1 << S) - 1);
        }
        if (S) {
          var h = new Error("Corrupted base64 string");
          throw h.name = "Base64-Error", h;
        }
        return l;
      }
    };
  })(_n);
  Object.defineProperty(Ae, "__esModule", {
    value: true
  });
  Ae.hasScrollbarGutter = Ae.dragThreshold = void 0;
  Ae.isAndroid = zs;
  Ae.isBlink = ru;
  Ae.isChrome = qs;
  Ae.isChromeOS = Gs;
  Ae.isChromium = Ys;
  Ae.isEdge = Js;
  Ae.isFirefox = Zs;
  Ae.isGecko = eu;
  Ae.isIOS = Ws;
  Ae.isMac = js;
  Ae.isOpera = $s;
  Ae.isSafari = Vs;
  Ae.isTouchDevice = void 0;
  Ae.isWebKit = tu;
  Ae.isWindows = Hs;
  Ae.supportsWebCodecsH264Decode = Ae.supportsCursorURIs = void 0;
  var an = Is(Re), Os = Bs(_n);
  function Bs(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function Ja(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (Ja = function(i) {
      return i ? n : t;
    })(e);
  }
  function Is(e, t) {
    if (e && e.__esModule) return e;
    if (e === null || Tr(e) != "object" && typeof e != "function") return {
      default: e
    };
    var n = Ja(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
    }
    return r.default = e, n && n.set(e, r), r;
  }
  function Tr(e) {
    "@babel/helpers - typeof";
    return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Tr(e);
  }
  function Wn() {
    Wn = function() {
      return t;
    };
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(E, p, m) {
      E[p] = m.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", y = a.toStringTag || "@@toStringTag";
    function u(E, p, m) {
      return Object.defineProperty(E, p, {
        value: m,
        enumerable: true,
        configurable: true,
        writable: true
      }), E[p];
    }
    try {
      u({}, "");
    } catch {
      u = function(m, L, B) {
        return m[L] = B;
      };
    }
    function l(E, p, m, L) {
      var B = p && p.prototype instanceof h ? p : h, M = Object.create(B.prototype), V = new $(L || []);
      return i(M, "_invoke", {
        value: O(E, m, V)
      }), M;
    }
    function S(E, p, m) {
      try {
        return {
          type: "normal",
          arg: E.call(p, m)
        };
      } catch (L) {
        return {
          type: "throw",
          arg: L
        };
      }
    }
    t.wrap = l;
    var X = "suspendedStart", g = "suspendedYield", b = "executing", d = "completed", f = {};
    function h() {
    }
    function c() {
    }
    function K() {
    }
    var x = {};
    u(x, o, function() {
      return this;
    });
    var F = Object.getPrototypeOf, k = F && F(F(ne([])));
    k && k !== n && r.call(k, o) && (x = k);
    var w = K.prototype = h.prototype = Object.create(x);
    function C(E) {
      [
        "next",
        "throw",
        "return"
      ].forEach(function(p) {
        u(E, p, function(m) {
          return this._invoke(p, m);
        });
      });
    }
    function A(E, p) {
      function m(B, M, V, re) {
        var oe = S(E[B], E, M);
        if (oe.type !== "throw") {
          var ce = oe.arg, pe = ce.value;
          return pe && Tr(pe) == "object" && r.call(pe, "__await") ? p.resolve(pe.__await).then(function(ye) {
            m("next", ye, V, re);
          }, function(ye) {
            m("throw", ye, V, re);
          }) : p.resolve(pe).then(function(ye) {
            ce.value = ye, V(ce);
          }, function(ye) {
            return m("throw", ye, V, re);
          });
        }
        re(oe.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function(M, V) {
          function re() {
            return new p(function(oe, ce) {
              m(M, V, oe, ce);
            });
          }
          return L = L ? L.then(re, re) : re();
        }
      });
    }
    function O(E, p, m) {
      var L = X;
      return function(B, M) {
        if (L === b) throw Error("Generator is already running");
        if (L === d) {
          if (B === "throw") throw M;
          return {
            value: e,
            done: true
          };
        }
        for (m.method = B, m.arg = M; ; ) {
          var V = m.delegate;
          if (V) {
            var re = I(V, m);
            if (re) {
              if (re === f) continue;
              return re;
            }
          }
          if (m.method === "next") m.sent = m._sent = m.arg;
          else if (m.method === "throw") {
            if (L === X) throw L = d, m.arg;
            m.dispatchException(m.arg);
          } else m.method === "return" && m.abrupt("return", m.arg);
          L = b;
          var oe = S(E, p, m);
          if (oe.type === "normal") {
            if (L = m.done ? d : g, oe.arg === f) continue;
            return {
              value: oe.arg,
              done: m.done
            };
          }
          oe.type === "throw" && (L = d, m.method = "throw", m.arg = oe.arg);
        }
      };
    }
    function I(E, p) {
      var m = p.method, L = E.iterator[m];
      if (L === e) return p.delegate = null, m === "throw" && E.iterator.return && (p.method = "return", p.arg = e, I(E, p), p.method === "throw") || m !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + m + "' method")), f;
      var B = S(L, E.iterator, p.arg);
      if (B.type === "throw") return p.method = "throw", p.arg = B.arg, p.delegate = null, f;
      var M = B.arg;
      return M ? M.done ? (p[E.resultName] = M.value, p.next = E.nextLoc, p.method !== "return" && (p.method = "next", p.arg = e), p.delegate = null, f) : M : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, f);
    }
    function Z(E) {
      var p = {
        tryLoc: E[0]
      };
      1 in E && (p.catchLoc = E[1]), 2 in E && (p.finallyLoc = E[2], p.afterLoc = E[3]), this.tryEntries.push(p);
    }
    function q(E) {
      var p = E.completion || {};
      p.type = "normal", delete p.arg, E.completion = p;
    }
    function $(E) {
      this.tryEntries = [
        {
          tryLoc: "root"
        }
      ], E.forEach(Z, this), this.reset(true);
    }
    function ne(E) {
      if (E || E === "") {
        var p = E[o];
        if (p) return p.call(E);
        if (typeof E.next == "function") return E;
        if (!isNaN(E.length)) {
          var m = -1, L = function B() {
            for (; ++m < E.length; ) if (r.call(E, m)) return B.value = E[m], B.done = false, B;
            return B.value = e, B.done = true, B;
          };
          return L.next = L;
        }
      }
      throw new TypeError(Tr(E) + " is not iterable");
    }
    return c.prototype = K, i(w, "constructor", {
      value: K,
      configurable: true
    }), i(K, "constructor", {
      value: c,
      configurable: true
    }), c.displayName = u(K, y, "GeneratorFunction"), t.isGeneratorFunction = function(E) {
      var p = typeof E == "function" && E.constructor;
      return !!p && (p === c || (p.displayName || p.name) === "GeneratorFunction");
    }, t.mark = function(E) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(E, K) : (E.__proto__ = K, u(E, y, "GeneratorFunction")), E.prototype = Object.create(w), E;
    }, t.awrap = function(E) {
      return {
        __await: E
      };
    }, C(A.prototype), u(A.prototype, s, function() {
      return this;
    }), t.AsyncIterator = A, t.async = function(E, p, m, L, B) {
      B === void 0 && (B = Promise);
      var M = new A(l(E, p, m, L), B);
      return t.isGeneratorFunction(p) ? M : M.next().then(function(V) {
        return V.done ? V.value : M.next();
      });
    }, C(w), u(w, y, "Generator"), u(w, o, function() {
      return this;
    }), u(w, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(E) {
      var p = Object(E), m = [];
      for (var L in p) m.push(L);
      return m.reverse(), function B() {
        for (; m.length; ) {
          var M = m.pop();
          if (M in p) return B.value = M, B.done = false, B;
        }
        return B.done = true, B;
      };
    }, t.values = ne, $.prototype = {
      constructor: $,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(q), !p) for (var m in this) m.charAt(0) === "t" && r.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = e);
      },
      stop: function() {
        this.done = true;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw") throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done) throw p;
        var m = this;
        function L(ce, pe) {
          return V.type = "throw", V.arg = p, m.next = ce, pe && (m.method = "next", m.arg = e), !!pe;
        }
        for (var B = this.tryEntries.length - 1; B >= 0; --B) {
          var M = this.tryEntries[B], V = M.completion;
          if (M.tryLoc === "root") return L("end");
          if (M.tryLoc <= this.prev) {
            var re = r.call(M, "catchLoc"), oe = r.call(M, "finallyLoc");
            if (re && oe) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            } else if (re) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
            } else {
              if (!oe) throw Error("try statement without catch or finally");
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, m) {
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var B = this.tryEntries[L];
          if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
            var M = B;
            break;
          }
        }
        M && (p === "break" || p === "continue") && M.tryLoc <= m && m <= M.finallyLoc && (M = null);
        var V = M ? M.completion : {};
        return V.type = p, V.arg = m, M ? (this.method = "next", this.next = M.finallyLoc, f) : this.complete(V);
      },
      complete: function(p, m) {
        if (p.type === "throw") throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && m && (this.next = m), f;
      },
      finish: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.finallyLoc === p) return this.complete(L.completion, L.afterLoc), q(L), f;
        }
      },
      catch: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.tryLoc === p) {
            var B = L.completion;
            if (B.type === "throw") {
              var M = B.arg;
              q(L);
            }
            return M;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(p, m, L) {
        return this.delegate = {
          iterator: ne(p),
          resultName: m,
          nextLoc: L
        }, this.method === "next" && (this.arg = e), f;
      }
    }, t;
  }
  function Bi(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o), y = s.value;
    } catch (u) {
      return void n(u);
    }
    s.done ? t(y) : Promise.resolve(y).then(r, i);
  }
  function Qs(e) {
    return function() {
      var t = this, n = arguments;
      return new Promise(function(r, i) {
        var a = e.apply(t, n);
        function o(y) {
          Bi(a, r, i, o, s, "next", y);
        }
        function s(y) {
          Bi(a, r, i, o, s, "throw", y);
        }
        o(void 0);
      });
    };
  }
  Ae.isTouchDevice = "ontouchstart" in document.documentElement || document.ontouchstart !== void 0 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  window.addEventListener("touchstart", function e() {
    Ae.isTouchDevice = true, window.removeEventListener("touchstart", e, false);
  }, false);
  Ae.dragThreshold = 10 * (window.devicePixelRatio || 1);
  var eo = false;
  try {
    var Ii = document.createElement("canvas");
    Ii.style.cursor = 'url("data:image/x-icon;base64,AAACAAEACAgAAAIAAgA4AQAAFgAAACgAAAAIAAAAEAAAAAEAIAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAA==") 2 2, default', Ii.style.cursor.indexOf("url") === 0 ? (an.Info("Data URI scheme cursor supported"), eo = true) : an.Warn("Data URI scheme cursor not supported");
  } catch (e) {
    an.Error("Data URI scheme cursor test exception: " + e);
  }
  Ae.supportsCursorURIs = eo;
  var to = true;
  try {
    var Vt = document.createElement("div");
    Vt.style.visibility = "hidden", Vt.style.overflow = "scroll", document.body.appendChild(Vt);
    var Qi = document.createElement("div");
    Vt.appendChild(Qi);
    var Us = Vt.offsetWidth - Qi.offsetWidth;
    Vt.parentNode.removeChild(Vt), to = Us != 0;
  } catch (e) {
    an.Error("Scrollbar test exception: " + e);
  }
  Ae.hasScrollbarGutter = to;
  Ae.supportsWebCodecsH264Decode = false;
  function Ns() {
    return zn.apply(this, arguments);
  }
  function zn() {
    return zn = Qs(Wn().mark(function e() {
      var t, n, r, i, a, o, s;
      return Wn().wrap(function(u) {
        for (; ; ) switch (u.prev = u.next) {
          case 0:
            if ("VideoDecoder" in window) {
              u.next = 2;
              break;
            }
            return u.abrupt("return", false);
          case 2:
            return t = {
              codec: "avc1.42401f",
              codedWidth: 1920,
              codedHeight: 1080,
              optimizeForLatency: true
            }, u.next = 5, VideoDecoder.isConfigSupported(t);
          case 5:
            if (n = u.sent, n.supported) {
              u.next = 8;
              break;
            }
            return u.abrupt("return", false);
          case 8:
            return r = new Uint8Array(Os.default.decode("AAAAAWdCwBTZnpuAgICgAAADACAAAAZB4oVNAAAAAWjJYyyAAAABBgX//4HcRem95tlIt5Ys2CDZI+7veDI2NCAtIGNvcmUgMTY0IHIzMTA4IDMxZTE5ZjkgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDIzIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9NSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjB4MTExIG1lPWhleCBzdWJtZT04IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0yIDh4OGRjdD0wIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTAgd2VpZ2h0cD0wIGtleWludD1pbmZpbml0ZSBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NTAgcmM9YWJyIG1idHJlZT0xIGJpdHJhdGU9NDAwIHJhdGV0b2w9MS4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAABZYiEBrxmKAAPVccAAS044AA5DRJMnkycJk4TPw==")), i = false, a = null, o = new VideoDecoder({
              output: function(S) {
                i = true;
              },
              error: function(S) {
                a = S;
              }
            }), s = new EncodedVideoChunk({
              timestamp: 0,
              type: "key",
              data: r
            }), o.configure(t), o.decode(s), u.prev = 15, u.next = 18, o.flush();
          case 18:
            u.next = 23;
            break;
          case 20:
            u.prev = 20, u.t0 = u.catch(15), a = u.t0;
          case 23:
            if (i) {
              u.next = 25;
              break;
            }
            return u.abrupt("return", false);
          case 25:
            if (a === null) {
              u.next = 27;
              break;
            }
            return u.abrupt("return", false);
          case 27:
            return u.abrupt("return", true);
          case 28:
          case "end":
            return u.stop();
        }
      }, e, null, [
        [
          15,
          20
        ]
      ]);
    })), zn.apply(this, arguments);
  }
  Ae.supportsWebCodecsH264Decode = await Ns();
  function js() {
    return !!/mac/i.exec(navigator.platform);
  }
  function Hs() {
    return !!/win/i.exec(navigator.platform);
  }
  function Ws() {
    return !!/ipad/i.exec(navigator.platform) || !!/iphone/i.exec(navigator.platform) || !!/ipod/i.exec(navigator.platform);
  }
  function zs() {
    return !!navigator.userAgent.match("Android ");
  }
  function Gs() {
    return !!navigator.userAgent.match(" CrOS ");
  }
  function Vs() {
    return !!navigator.userAgent.match("Safari/...") && !navigator.userAgent.match("Chrome/...") && !navigator.userAgent.match("Chromium/...") && !navigator.userAgent.match("Epiphany/...");
  }
  function Zs() {
    return !!navigator.userAgent.match("Firefox/...") && !navigator.userAgent.match("Seamonkey/...");
  }
  function qs() {
    return !!navigator.userAgent.match("Chrome/...") && !navigator.userAgent.match("Chromium/...") && !navigator.userAgent.match("Edg/...") && !navigator.userAgent.match("OPR/...");
  }
  function Ys() {
    return !!navigator.userAgent.match("Chromium/...");
  }
  function $s() {
    return !!navigator.userAgent.match("OPR/...");
  }
  function Js() {
    return !!navigator.userAgent.match("Edg/...");
  }
  function eu() {
    return !!navigator.userAgent.match("Gecko/...");
  }
  function tu() {
    return !!navigator.userAgent.match("AppleWebKit/...") && !navigator.userAgent.match("Chrome/...");
  }
  function ru() {
    return !!navigator.userAgent.match("Chrome/...");
  }
  var ui = {};
  Object.defineProperty(ui, "__esModule", {
    value: true
  });
  ui.clientToElement = nu;
  function nu(e, t, n) {
    var r = n.getBoundingClientRect(), i = {
      x: 0,
      y: 0
    };
    return e < r.left ? i.x = 0 : e >= r.right ? i.x = r.width - 1 : i.x = e - r.left, t < r.top ? i.y = 0 : t >= r.bottom ? i.y = r.height - 1 : i.y = t - r.top, i;
  }
  var ar = {};
  Object.defineProperty(ar, "__esModule", {
    value: true
  });
  ar.getPointerEvent = iu;
  ar.releaseCapture = li;
  ar.setCapture = ou;
  ar.stopEvent = au;
  function iu(e) {
    return e.changedTouches ? e.changedTouches[0] : e.touches ? e.touches[0] : e;
  }
  function au(e) {
    e.stopPropagation(), e.preventDefault();
  }
  var Kn = false, ro = null;
  document.captureElement = null;
  function qt(e) {
    if (!Kn) {
      var t = new e.constructor(e.type, e);
      Kn = true, document.captureElement ? document.captureElement.dispatchEvent(t) : ro.dispatchEvent(t), Kn = false, e.stopPropagation(), t.defaultPrevented && e.preventDefault(), e.type === "mouseup" && li();
    }
  }
  function no() {
    var e = document.getElementById("noVNC_mouse_capture_elem");
    e.style.cursor = window.getComputedStyle(document.captureElement).cursor;
  }
  var io = new MutationObserver(no);
  function ou(e) {
    if (e.setCapture) e.setCapture(), document.captureElement = e;
    else {
      li();
      var t = document.getElementById("noVNC_mouse_capture_elem");
      t === null && (t = document.createElement("div"), t.id = "noVNC_mouse_capture_elem", t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.width = "100%", t.style.height = "100%", t.style.zIndex = 1e4, t.style.display = "none", document.body.appendChild(t), t.addEventListener("contextmenu", qt), t.addEventListener("mousemove", qt), t.addEventListener("mouseup", qt)), document.captureElement = e, io.observe(e, {
        attributes: true
      }), no(), t.style.display = "", window.addEventListener("mousemove", qt), window.addEventListener("mouseup", qt);
    }
  }
  function li() {
    if (document.releaseCapture) document.releaseCapture(), document.captureElement = null;
    else {
      if (!document.captureElement) return;
      ro = document.captureElement, document.captureElement = null, io.disconnect();
      var e = document.getElementById("noVNC_mouse_capture_elem");
      e.style.display = "none", window.removeEventListener("mousemove", qt), window.removeEventListener("mouseup", qt);
    }
  }
  var fi = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(s) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, t(s);
    }
    function n(s, y) {
      if (!(s instanceof y)) throw new TypeError("Cannot call a class as a function");
    }
    function r(s, y) {
      for (var u = 0; u < y.length; u++) {
        var l = y[u];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(s, a(l.key), l);
      }
    }
    function i(s, y, u) {
      return y && r(s.prototype, y), Object.defineProperty(s, "prototype", {
        writable: false
      }), s;
    }
    function a(s) {
      var y = o(s, "string");
      return t(y) == "symbol" ? y : y + "";
    }
    function o(s, y) {
      if (t(s) != "object" || !s) return s;
      var u = s[Symbol.toPrimitive];
      if (u !== void 0) {
        var l = u.call(s, y);
        if (t(l) != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(s);
    }
    e.default = function() {
      function s() {
        n(this, s), this._listeners = /* @__PURE__ */ new Map();
      }
      return i(s, [
        {
          key: "addEventListener",
          value: function(u, l) {
            this._listeners.has(u) || this._listeners.set(u, /* @__PURE__ */ new Set()), this._listeners.get(u).add(l);
          }
        },
        {
          key: "removeEventListener",
          value: function(u, l) {
            this._listeners.has(u) && this._listeners.get(u).delete(l);
          }
        },
        {
          key: "dispatchEvent",
          value: function(u) {
            var l = this;
            return this._listeners.has(u.type) ? (this._listeners.get(u.type).forEach(function(S) {
              return S.call(l, u);
            }), !u.defaultPrevented) : true;
          }
        }
      ]);
    }();
  })(fi);
  var ao = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = o(Re), n = i(_n), r = Qr;
    function i(g) {
      return g && g.__esModule ? g : {
        default: g
      };
    }
    function a(g) {
      if (typeof WeakMap != "function") return null;
      var b = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
      return (a = function(h) {
        return h ? d : b;
      })(g);
    }
    function o(g, b) {
      if (g && g.__esModule) return g;
      if (g === null || s(g) != "object" && typeof g != "function") return {
        default: g
      };
      var d = a(b);
      if (d && d.has(g)) return d.get(g);
      var f = {
        __proto__: null
      }, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var c in g) if (c !== "default" && {}.hasOwnProperty.call(g, c)) {
        var K = h ? Object.getOwnPropertyDescriptor(g, c) : null;
        K && (K.get || K.set) ? Object.defineProperty(f, c, K) : f[c] = g[c];
      }
      return f.default = g, d && d.set(g, f), f;
    }
    function s(g) {
      "@babel/helpers - typeof";
      return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
        return typeof b;
      } : function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      }, s(g);
    }
    function y(g, b) {
      if (!(g instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function u(g, b) {
      for (var d = 0; d < b.length; d++) {
        var f = b[d];
        f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(g, S(f.key), f);
      }
    }
    function l(g, b, d) {
      return b && u(g.prototype, b), Object.defineProperty(g, "prototype", {
        writable: false
      }), g;
    }
    function S(g) {
      var b = X(g, "string");
      return s(b) == "symbol" ? b : b + "";
    }
    function X(g, b) {
      if (s(g) != "object" || !g) return g;
      var d = g[Symbol.toPrimitive];
      if (d !== void 0) {
        var f = d.call(g, b);
        if (s(f) != "object") return f;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(g);
    }
    e.default = function() {
      function g(b) {
        if (y(this, g), this._drawCtx = null, this._renderQ = [], this._flushPromise = null, this._fbWidth = 0, this._fbHeight = 0, this._prevDrawStyle = "", t.Debug(">> Display.constructor"), this._target = b, !this._target) throw new Error("Target must be set");
        if (typeof this._target == "string") throw new Error("target must be a DOM element");
        if (!this._target.getContext) throw new Error("no getContext method");
        this._targetCtx = this._target.getContext("2d"), this._viewportLoc = {
          x: 0,
          y: 0,
          w: this._target.width,
          h: this._target.height
        }, this._backbuffer = document.createElement("canvas"), this._drawCtx = this._backbuffer.getContext("2d"), this._damageBounds = {
          left: 0,
          top: 0,
          right: this._backbuffer.width,
          bottom: this._backbuffer.height
        }, t.Debug("User Agent: " + navigator.userAgent), t.Debug("<< Display.constructor"), this._scale = 1, this._clipViewport = false;
      }
      return l(g, [
        {
          key: "scale",
          get: function() {
            return this._scale;
          },
          set: function(d) {
            this._rescale(d);
          }
        },
        {
          key: "clipViewport",
          get: function() {
            return this._clipViewport;
          },
          set: function(d) {
            this._clipViewport = d;
            var f = this._viewportLoc;
            this.viewportChangeSize(f.w, f.h), this.viewportChangePos(0, 0);
          }
        },
        {
          key: "width",
          get: function() {
            return this._fbWidth;
          }
        },
        {
          key: "height",
          get: function() {
            return this._fbHeight;
          }
        },
        {
          key: "viewportChangePos",
          value: function(d, f) {
            var h = this._viewportLoc;
            d = Math.floor(d), f = Math.floor(f), this._clipViewport || (d = -h.w, f = -h.h);
            var c = h.x + h.w - 1, K = h.y + h.h - 1;
            d < 0 && h.x + d < 0 && (d = -h.x), c + d >= this._fbWidth && (d -= c + d - this._fbWidth + 1), h.y + f < 0 && (f = -h.y), K + f >= this._fbHeight && (f -= K + f - this._fbHeight + 1), !(d === 0 && f === 0) && (t.Debug("viewportChange deltaX: " + d + ", deltaY: " + f), h.x += d, h.y += f, this._damage(h.x, h.y, h.w, h.h), this.flip());
          }
        },
        {
          key: "viewportChangeSize",
          value: function(d, f) {
            (!this._clipViewport || typeof d > "u" || typeof f > "u") && (t.Debug("Setting viewport to full display region"), d = this._fbWidth, f = this._fbHeight), d = Math.floor(d), f = Math.floor(f), d > this._fbWidth && (d = this._fbWidth), f > this._fbHeight && (f = this._fbHeight);
            var h = this._viewportLoc;
            if (h.w !== d || h.h !== f) {
              h.w = d, h.h = f;
              var c = this._target;
              c.width = d, c.height = f, this.viewportChangePos(0, 0), this._damage(h.x, h.y, h.w, h.h), this.flip(), this._rescale(this._scale);
            }
          }
        },
        {
          key: "absX",
          value: function(d) {
            return this._scale === 0 ? 0 : (0, r.toSigned32bit)(d / this._scale + this._viewportLoc.x);
          }
        },
        {
          key: "absY",
          value: function(d) {
            return this._scale === 0 ? 0 : (0, r.toSigned32bit)(d / this._scale + this._viewportLoc.y);
          }
        },
        {
          key: "resize",
          value: function(d, f) {
            this._prevDrawStyle = "", this._fbWidth = d, this._fbHeight = f;
            var h = this._backbuffer;
            if (h.width !== d || h.height !== f) {
              var c = null;
              h.width > 0 && h.height > 0 && (c = this._drawCtx.getImageData(0, 0, h.width, h.height)), h.width !== d && (h.width = d), h.height !== f && (h.height = f), c && this._drawCtx.putImageData(c, 0, 0);
            }
            var K = this._viewportLoc;
            this.viewportChangeSize(K.w, K.h), this.viewportChangePos(0, 0);
          }
        },
        {
          key: "getImageData",
          value: function() {
            return this._drawCtx.getImageData(0, 0, this.width, this.height);
          }
        },
        {
          key: "toDataURL",
          value: function(d, f) {
            return this._backbuffer.toDataURL(d, f);
          }
        },
        {
          key: "toBlob",
          value: function(d, f, h) {
            return this._backbuffer.toBlob(d, f, h);
          }
        },
        {
          key: "_damage",
          value: function(d, f, h, c) {
            d < this._damageBounds.left && (this._damageBounds.left = d), f < this._damageBounds.top && (this._damageBounds.top = f), d + h > this._damageBounds.right && (this._damageBounds.right = d + h), f + c > this._damageBounds.bottom && (this._damageBounds.bottom = f + c);
          }
        },
        {
          key: "flip",
          value: function(d) {
            if (this._renderQ.length !== 0 && !d) this._renderQPush({
              type: "flip"
            });
            else {
              var f = this._damageBounds.left, h = this._damageBounds.top, c = this._damageBounds.right - f, K = this._damageBounds.bottom - h, x = f - this._viewportLoc.x, F = h - this._viewportLoc.y;
              x < 0 && (c += x, f -= x, x = 0), F < 0 && (K += F, h -= F, F = 0), x + c > this._viewportLoc.w && (c = this._viewportLoc.w - x), F + K > this._viewportLoc.h && (K = this._viewportLoc.h - F), c > 0 && K > 0 && this._targetCtx.drawImage(this._backbuffer, f, h, c, K, x, F, c, K), this._damageBounds.left = this._damageBounds.top = 65535, this._damageBounds.right = this._damageBounds.bottom = 0;
            }
          }
        },
        {
          key: "pending",
          value: function() {
            return this._renderQ.length > 0;
          }
        },
        {
          key: "flush",
          value: function() {
            var d = this;
            return this._renderQ.length === 0 ? Promise.resolve() : (this._flushPromise === null && (this._flushPromise = new Promise(function(f) {
              d._flushResolve = f;
            })), this._flushPromise);
          }
        },
        {
          key: "fillRect",
          value: function(d, f, h, c, K, x) {
            this._renderQ.length !== 0 && !x ? this._renderQPush({
              type: "fill",
              x: d,
              y: f,
              width: h,
              height: c,
              color: K
            }) : (this._setFillColor(K), this._drawCtx.fillRect(d, f, h, c), this._damage(d, f, h, c));
          }
        },
        {
          key: "copyImage",
          value: function(d, f, h, c, K, x, F) {
            this._renderQ.length !== 0 && !F ? this._renderQPush({
              type: "copy",
              oldX: d,
              oldY: f,
              x: h,
              y: c,
              width: K,
              height: x
            }) : (this._drawCtx.mozImageSmoothingEnabled = false, this._drawCtx.webkitImageSmoothingEnabled = false, this._drawCtx.msImageSmoothingEnabled = false, this._drawCtx.imageSmoothingEnabled = false, this._drawCtx.drawImage(this._backbuffer, d, f, K, x, h, c, K, x), this._damage(h, c, K, x));
          }
        },
        {
          key: "imageRect",
          value: function(d, f, h, c, K, x) {
            if (!(h === 0 || c === 0)) {
              var F = new Image();
              F.src = "data: " + K + ";base64," + n.default.encode(x), this._renderQPush({
                type: "img",
                img: F,
                x: d,
                y: f,
                width: h,
                height: c
              });
            }
          }
        },
        {
          key: "videoFrame",
          value: function(d, f, h, c, K) {
            this._renderQPush({
              type: "frame",
              frame: K,
              x: d,
              y: f,
              width: h,
              height: c
            });
          }
        },
        {
          key: "blitImage",
          value: function(d, f, h, c, K, x, F) {
            if (this._renderQ.length !== 0 && !F) {
              var k = new Uint8Array(h * c * 4);
              k.set(new Uint8Array(K.buffer, 0, k.length)), this._renderQPush({
                type: "blit",
                data: k,
                x: d,
                y: f,
                width: h,
                height: c
              });
            } else {
              var w = new Uint8ClampedArray(K.buffer, K.byteOffset + x, h * c * 4), C = new ImageData(w, h, c);
              this._drawCtx.putImageData(C, d, f), this._damage(d, f, h, c);
            }
          }
        },
        {
          key: "drawImage",
          value: function(d) {
            for (var f, h = arguments.length, c = new Array(h > 1 ? h - 1 : 0), K = 1; K < h; K++) c[K - 1] = arguments[K];
            if ((f = this._drawCtx).drawImage.apply(f, [
              d
            ].concat(c)), c.length <= 4) {
              var x = c[0], F = c[1];
              this._damage(x, F, d.width, d.height);
            } else {
              var k = c[2], w = c[3], C = c[4], A = c[5];
              this._damage(C, A, k, w);
            }
          }
        },
        {
          key: "autoscale",
          value: function(d, f) {
            var h;
            if (d === 0 || f === 0) h = 0;
            else {
              var c = this._viewportLoc, K = d / f, x = c.w / c.h;
              x >= K ? h = d / c.w : h = f / c.h;
            }
            this._rescale(h);
          }
        },
        {
          key: "_rescale",
          value: function(d) {
            this._scale = d;
            var f = this._viewportLoc, h = d * f.w + "px", c = d * f.h + "px";
            (this._target.style.width !== h || this._target.style.height !== c) && (this._target.style.width = h, this._target.style.height = c);
          }
        },
        {
          key: "_setFillColor",
          value: function(d) {
            var f = "rgb(" + d[0] + "," + d[1] + "," + d[2] + ")";
            f !== this._prevDrawStyle && (this._drawCtx.fillStyle = f, this._prevDrawStyle = f);
          }
        },
        {
          key: "_renderQPush",
          value: function(d) {
            this._renderQ.push(d), this._renderQ.length === 1 && this._scanRenderQ();
          }
        },
        {
          key: "_resumeRenderQ",
          value: function() {
            this.removeEventListener("load", this._noVNCDisplay._resumeRenderQ), this._noVNCDisplay._scanRenderQ();
          }
        },
        {
          key: "_scanRenderQ",
          value: function() {
            for (var d = this, f = true, h = function() {
              var x = d._renderQ[0];
              switch (x.type) {
                case "flip":
                  d.flip(true);
                  break;
                case "copy":
                  d.copyImage(x.oldX, x.oldY, x.x, x.y, x.width, x.height, true);
                  break;
                case "fill":
                  d.fillRect(x.x, x.y, x.width, x.height, x.color, true);
                  break;
                case "blit":
                  d.blitImage(x.x, x.y, x.width, x.height, x.data, 0, true);
                  break;
                case "img":
                  if (x.img.complete) {
                    if (x.img.width !== x.width || x.img.height !== x.height) return t.Error("Decoded image has incorrect dimensions. Got " + x.img.width + "x" + x.img.height + ". Expected " + x.width + "x" + x.height + "."), {
                      v: void 0
                    };
                    d.drawImage(x.img, x.x, x.y);
                  } else x.img._noVNCDisplay = d, x.img.addEventListener("load", d._resumeRenderQ), f = false;
                  break;
                case "frame":
                  if (x.frame.ready) {
                    var F = x.frame.frame;
                    (F.codedWidth < x.width || F.codedHeight < x.height) && t.Warn("Decoded video frame does not cover its full rectangle area. Expecting at least " + x.width + "x" + x.height + " but got " + F.codedWidth + "x" + F.codedHeight);
                    var k = 0, w = 0, C = x.width, A = x.height, O = x.x, I = x.y, Z = C, q = A;
                    d.drawImage(F, k, w, C, A, O, I, Z, q), F.close();
                  } else {
                    var $ = d;
                    x.frame.promise.then(function() {
                      $._scanRenderQ();
                    }), f = false;
                  }
                  break;
              }
              f && d._renderQ.shift();
            }, c; f && this._renderQ.length > 0; ) if (c = h(), c) return c.v;
            this._renderQ.length === 0 && this._flushPromise !== null && (this._flushResolve(), this._flushPromise = null, this._flushResolve = null);
          }
        }
      ]);
    }();
  })(ao);
  var Nr = {}, Ke = {}, ot = {};
  Object.defineProperty(ot, "__esModule", {
    value: true
  });
  ot.Buf8 = ot.Buf32 = ot.Buf16 = void 0;
  ot.arraySet = uu;
  ot.flattenChunks = lu;
  ot.shrinkBuf = su;
  function su(e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
  }
  function uu(e, t, n, r, i) {
    if (t.subarray && e.subarray) {
      e.set(t.subarray(n, n + r), i);
      return;
    }
    for (var a = 0; a < r; a++) e[i + a] = t[n + a];
  }
  function lu(e) {
    var t, n, r, i, a, o;
    for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
    for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
    return o;
  }
  ot.Buf8 = Uint8Array;
  ot.Buf16 = Uint16Array;
  ot.Buf32 = Int32Array;
  var ci = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = t;
    function t(n, r, i, a) {
      for (var o = n & 65535 | 0, s = n >>> 16 & 65535 | 0, y = 0; i !== 0; ) {
        y = i > 2e3 ? 2e3 : i, i -= y;
        do
          o = o + r[a++] | 0, s = s + o | 0;
        while (--y);
        o %= 65521, s %= 65521;
      }
      return o | s << 16 | 0;
    }
  })(ci);
  var hi = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = t;
    function t() {
      for (var n, r = [], i = 0; i < 256; i++) {
        n = i;
        for (var a = 0; a < 8; a++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
        r[i] = n;
      }
      return r;
    }
    t();
  })(hi);
  var oo = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = r;
    var t = 30, n = 12;
    function r(i, a) {
      var o, s, y, u, l, S, X, g, b, d, f, h, c, K, x, F, k, w, C, A, O, I, Z, q, $;
      o = i.state, s = i.next_in, q = i.input, y = s + (i.avail_in - 5), u = i.next_out, $ = i.output, l = u - (a - i.avail_out), S = u + (i.avail_out - 257), X = o.dmax, g = o.wsize, b = o.whave, d = o.wnext, f = o.window, h = o.hold, c = o.bits, K = o.lencode, x = o.distcode, F = (1 << o.lenbits) - 1, k = (1 << o.distbits) - 1;
      e: do {
        c < 15 && (h += q[s++] << c, c += 8, h += q[s++] << c, c += 8), w = K[h & F];
        t: for (; ; ) {
          if (C = w >>> 24, h >>>= C, c -= C, C = w >>> 16 & 255, C === 0) $[u++] = w & 65535;
          else if (C & 16) {
            A = w & 65535, C &= 15, C && (c < C && (h += q[s++] << c, c += 8), A += h & (1 << C) - 1, h >>>= C, c -= C), c < 15 && (h += q[s++] << c, c += 8, h += q[s++] << c, c += 8), w = x[h & k];
            r: for (; ; ) {
              if (C = w >>> 24, h >>>= C, c -= C, C = w >>> 16 & 255, C & 16) {
                if (O = w & 65535, C &= 15, c < C && (h += q[s++] << c, c += 8, c < C && (h += q[s++] << c, c += 8)), O += h & (1 << C) - 1, O > X) {
                  i.msg = "invalid distance too far back", o.mode = t;
                  break e;
                }
                if (h >>>= C, c -= C, C = u - l, O > C) {
                  if (C = O - C, C > b && o.sane) {
                    i.msg = "invalid distance too far back", o.mode = t;
                    break e;
                  }
                  if (I = 0, Z = f, d === 0) {
                    if (I += g - C, C < A) {
                      A -= C;
                      do
                        $[u++] = f[I++];
                      while (--C);
                      I = u - O, Z = $;
                    }
                  } else if (d < C) {
                    if (I += g + d - C, C -= d, C < A) {
                      A -= C;
                      do
                        $[u++] = f[I++];
                      while (--C);
                      if (I = 0, d < A) {
                        C = d, A -= C;
                        do
                          $[u++] = f[I++];
                        while (--C);
                        I = u - O, Z = $;
                      }
                    }
                  } else if (I += d - C, C < A) {
                    A -= C;
                    do
                      $[u++] = f[I++];
                    while (--C);
                    I = u - O, Z = $;
                  }
                  for (; A > 2; ) $[u++] = Z[I++], $[u++] = Z[I++], $[u++] = Z[I++], A -= 3;
                  A && ($[u++] = Z[I++], A > 1 && ($[u++] = Z[I++]));
                } else {
                  I = u - O;
                  do
                    $[u++] = $[I++], $[u++] = $[I++], $[u++] = $[I++], A -= 3;
                  while (A > 2);
                  A && ($[u++] = $[I++], A > 1 && ($[u++] = $[I++]));
                }
              } else if (C & 64) {
                i.msg = "invalid distance code", o.mode = t;
                break e;
              } else {
                w = x[(w & 65535) + (h & (1 << C) - 1)];
                continue r;
              }
              break;
            }
          } else if (C & 64) if (C & 32) {
            o.mode = n;
            break e;
          } else {
            i.msg = "invalid literal/length code", o.mode = t;
            break e;
          }
          else {
            w = K[(w & 65535) + (h & (1 << C) - 1)];
            continue t;
          }
          break;
        }
      } while (s < y && u < S);
      A = c >> 3, s -= A, c -= A << 3, h &= (1 << c) - 1, i.next_in = s, i.next_out = u, i.avail_in = s < y ? 5 + (y - s) : 5 - (s - y), i.avail_out = u < S ? 257 + (S - u) : 257 - (u - S), o.hold = h, o.bits = c;
    }
  })(oo);
  var so = {};
  (function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
        return typeof h;
      } : function(h) {
        return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = d;
    var n = i(ot);
    function r(f) {
      if (typeof WeakMap != "function") return null;
      var h = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
      return (r = function(x) {
        return x ? c : h;
      })(f);
    }
    function i(f, h) {
      if (f && f.__esModule) return f;
      if (f === null || t(f) != "object" && typeof f != "function") return {
        default: f
      };
      var c = r(h);
      if (c && c.has(f)) return c.get(f);
      var K = {
        __proto__: null
      }, x = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var F in f) if (F !== "default" && {}.hasOwnProperty.call(f, F)) {
        var k = x ? Object.getOwnPropertyDescriptor(f, F) : null;
        k && (k.get || k.set) ? Object.defineProperty(K, F, k) : K[F] = f[F];
      }
      return K.default = f, c && c.set(f, K), K;
    }
    var a = 15, o = 852, s = 592, y = 0, u = 1, l = 2, S = [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ], X = [
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ], g = [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ], b = [
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    function d(f, h, c, K, x, F, k, w) {
      var C = w.bits, A = 0, O = 0, I = 0, Z = 0, q = 0, $ = 0, ne = 0, E = 0, p = 0, m = 0, L, B, M, V, re, oe = null, ce = 0, pe, ye = new n.Buf16(a + 1), Ne = new n.Buf16(a + 1), je = null, st = 0, Ue, He, rt;
      for (A = 0; A <= a; A++) ye[A] = 0;
      for (O = 0; O < K; O++) ye[h[c + O]]++;
      for (q = C, Z = a; Z >= 1 && ye[Z] === 0; Z--) ;
      if (q > Z && (q = Z), Z === 0) return x[F++] = 1 << 24 | 64 << 16 | 0, x[F++] = 1 << 24 | 64 << 16 | 0, w.bits = 1, 0;
      for (I = 1; I < Z && ye[I] === 0; I++) ;
      for (q < I && (q = I), E = 1, A = 1; A <= a; A++) if (E <<= 1, E -= ye[A], E < 0) return -1;
      if (E > 0 && (f === y || Z !== 1)) return -1;
      for (Ne[1] = 0, A = 1; A < a; A++) Ne[A + 1] = Ne[A] + ye[A];
      for (O = 0; O < K; O++) h[c + O] !== 0 && (k[Ne[h[c + O]]++] = O);
      if (f === y ? (oe = je = k, pe = 19) : f === u ? (oe = S, ce -= 257, je = X, st -= 257, pe = 256) : (oe = g, je = b, pe = -1), m = 0, O = 0, A = I, re = F, $ = q, ne = 0, M = -1, p = 1 << q, V = p - 1, f === u && p > o || f === l && p > s) return 1;
      for (; ; ) {
        Ue = A - ne, k[O] < pe ? (He = 0, rt = k[O]) : k[O] > pe ? (He = je[st + k[O]], rt = oe[ce + k[O]]) : (He = 96, rt = 0), L = 1 << A - ne, B = 1 << $, I = B;
        do
          B -= L, x[re + (m >> ne) + B] = Ue << 24 | He << 16 | rt | 0;
        while (B !== 0);
        for (L = 1 << A - 1; m & L; ) L >>= 1;
        if (L !== 0 ? (m &= L - 1, m += L) : m = 0, O++, --ye[A] === 0) {
          if (A === Z) break;
          A = h[c + k[O]];
        }
        if (A > q && (m & V) !== M) {
          for (ne === 0 && (ne = q), re += I, $ = A - ne, E = 1 << $; $ + ne < Z && (E -= ye[$ + ne], !(E <= 0)); ) $++, E <<= 1;
          if (p += 1 << $, f === u && p > o || f === l && p > s) return 1;
          M = m & V, x[M] = q << 24 | $ << 16 | re - F | 0;
        }
      }
      return m !== 0 && (x[re + m] = A - ne << 24 | 64 << 16 | 0), w.bits = q, 0;
    }
  })(so);
  function Gn(e) {
    "@babel/helpers - typeof";
    return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Gn(e);
  }
  Object.defineProperty(Ke, "__esModule", {
    value: true
  });
  Ke.Z_TREES = Ke.Z_STREAM_ERROR = Ke.Z_STREAM_END = Ke.Z_OK = Ke.Z_NEED_DICT = Ke.Z_MEM_ERROR = Ke.Z_FINISH = Ke.Z_DEFLATED = Ke.Z_DATA_ERROR = Ke.Z_BUF_ERROR = Ke.Z_BLOCK = void 0;
  Ke.inflate = Eu;
  Ke.inflateEnd = Ku;
  Ke.inflateGetHeader = Xu;
  Ke.inflateInfo = void 0;
  Ke.inflateInit = ku;
  Ke.inflateInit2 = go;
  Ke.inflateReset = yo;
  Ke.inflateReset2 = xo;
  Ke.inflateResetKeep = vo;
  Ke.inflateSetDictionary = Fu;
  var ft = cu(ot), Vn = pn(ci), St = pn(hi), fu = pn(oo), Fr = pn(so);
  function pn(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function uo(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (uo = function(i) {
      return i ? n : t;
    })(e);
  }
  function cu(e, t) {
    if (e && e.__esModule) return e;
    if (e === null || Gn(e) != "object" && typeof e != "function") return {
      default: e
    };
    var n = uo(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
    }
    return r.default = e, n && n.set(e, r), r;
  }
  var hu = 0, lo = 1, fo = 2, Ui = Ke.Z_FINISH = 4, du = Ke.Z_BLOCK = 5, Jr = Ke.Z_TREES = 6, er = Ke.Z_OK = 0, _u = Ke.Z_STREAM_END = 1, pu = Ke.Z_NEED_DICT = 2, pt = Ke.Z_STREAM_ERROR = -2, co = Ke.Z_DATA_ERROR = -3, ho = Ke.Z_MEM_ERROR = -4, vu = Ke.Z_BUF_ERROR = -5, Ni = Ke.Z_DEFLATED = 8, _o = 1, ji = 2, Hi = 3, Wi = 4, zi = 5, Gi = 6, Vi = 7, Zi = 8, qi = 9, Yi = 10, fn = 11, At = 12, Xn = 13, $i = 14, Fn = 15, Ji = 16, ea = 17, ta = 18, ra = 19, en = 20, tn = 21, na = 22, ia = 23, aa = 24, oa = 25, sa = 26, Cn = 27, ua = 28, la = 29, Be = 30, po = 31, yu = 32, xu = 852, gu = 592, bu = 15, mu = bu;
  function fa(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
  }
  function wu() {
    this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new ft.Buf16(320), this.work = new ft.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function vo(e) {
    var t;
    return !e || !e.state ? pt : (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = _o, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new ft.Buf32(xu), t.distcode = t.distdyn = new ft.Buf32(gu), t.sane = 1, t.back = -1, er);
  }
  function yo(e) {
    var t;
    return !e || !e.state ? pt : (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, vo(e));
  }
  function xo(e, t) {
    var n, r;
    return !e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? pt : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, yo(e));
  }
  function go(e, t) {
    var n, r;
    return e ? (r = new wu(), e.state = r, r.window = null, n = xo(e, t), n !== er && (e.state = null), n) : pt;
  }
  function ku(e) {
    return go(e, mu);
  }
  var ca = true, An, Pn;
  function Su(e) {
    if (ca) {
      var t;
      for (An = new ft.Buf32(512), Pn = new ft.Buf32(32), t = 0; t < 144; ) e.lens[t++] = 8;
      for (; t < 256; ) e.lens[t++] = 9;
      for (; t < 280; ) e.lens[t++] = 7;
      for (; t < 288; ) e.lens[t++] = 8;
      for ((0, Fr.default)(lo, e.lens, 0, 288, An, 0, e.work, {
        bits: 9
      }), t = 0; t < 32; ) e.lens[t++] = 5;
      (0, Fr.default)(fo, e.lens, 0, 32, Pn, 0, e.work, {
        bits: 5
      }), ca = false;
    }
    e.lencode = An, e.lenbits = 9, e.distcode = Pn, e.distbits = 5;
  }
  function bo(e, t, n, r) {
    var i, a = e.state;
    return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new ft.Buf8(a.wsize)), r >= a.wsize ? (ft.arraySet(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), ft.arraySet(a.window, t, n - r, i, a.wnext), r -= i, r ? (ft.arraySet(a.window, t, n - r, r, 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
  }
  function Eu(e, t) {
    var n, r, i, a, o, s, y, u, l, S, X, g, b, d, f = 0, h, c, K, x, F, k, w, C, A = new ft.Buf8(4), O, I, Z = [
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ];
    if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return pt;
    n = e.state, n.mode === At && (n.mode = Xn), o = e.next_out, i = e.output, y = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, u = n.hold, l = n.bits, S = s, X = y, C = er;
    e: for (; ; ) switch (n.mode) {
      case _o:
        if (n.wrap === 0) {
          n.mode = Xn;
          break;
        }
        for (; l < 16; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if (n.wrap & 2 && u === 35615) {
          n.check = 0, A[0] = u & 255, A[1] = u >>> 8 & 255, n.check = (0, St.default)(n.check, A, 2, 0), u = 0, l = 0, n.mode = ji;
          break;
        }
        if (n.flags = 0, n.head && (n.head.done = false), !(n.wrap & 1) || (((u & 255) << 8) + (u >> 8)) % 31) {
          e.msg = "incorrect header check", n.mode = Be;
          break;
        }
        if ((u & 15) !== Ni) {
          e.msg = "unknown compression method", n.mode = Be;
          break;
        }
        if (u >>>= 4, l -= 4, w = (u & 15) + 8, n.wbits === 0) n.wbits = w;
        else if (w > n.wbits) {
          e.msg = "invalid window size", n.mode = Be;
          break;
        }
        n.dmax = 1 << w, e.adler = n.check = 1, n.mode = u & 512 ? Yi : At, u = 0, l = 0;
        break;
      case ji:
        for (; l < 16; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if (n.flags = u, (n.flags & 255) !== Ni) {
          e.msg = "unknown compression method", n.mode = Be;
          break;
        }
        if (n.flags & 57344) {
          e.msg = "unknown header flags set", n.mode = Be;
          break;
        }
        n.head && (n.head.text = u >> 8 & 1), n.flags & 512 && (A[0] = u & 255, A[1] = u >>> 8 & 255, n.check = (0, St.default)(n.check, A, 2, 0)), u = 0, l = 0, n.mode = Hi;
      case Hi:
        for (; l < 32; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        n.head && (n.head.time = u), n.flags & 512 && (A[0] = u & 255, A[1] = u >>> 8 & 255, A[2] = u >>> 16 & 255, A[3] = u >>> 24 & 255, n.check = (0, St.default)(n.check, A, 4, 0)), u = 0, l = 0, n.mode = Wi;
      case Wi:
        for (; l < 16; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        n.head && (n.head.xflags = u & 255, n.head.os = u >> 8), n.flags & 512 && (A[0] = u & 255, A[1] = u >>> 8 & 255, n.check = (0, St.default)(n.check, A, 2, 0)), u = 0, l = 0, n.mode = zi;
      case zi:
        if (n.flags & 1024) {
          for (; l < 16; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          n.length = u, n.head && (n.head.extra_len = u), n.flags & 512 && (A[0] = u & 255, A[1] = u >>> 8 & 255, n.check = (0, St.default)(n.check, A, 2, 0)), u = 0, l = 0;
        } else n.head && (n.head.extra = null);
        n.mode = Gi;
      case Gi:
        if (n.flags & 1024 && (g = n.length, g > s && (g = s), g && (n.head && (w = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), ft.arraySet(n.head.extra, r, a, g, w)), n.flags & 512 && (n.check = (0, St.default)(n.check, r, g, a)), s -= g, a += g, n.length -= g), n.length)) break e;
        n.length = 0, n.mode = Vi;
      case Vi:
        if (n.flags & 2048) {
          if (s === 0) break e;
          g = 0;
          do
            w = r[a + g++], n.head && w && n.length < 65536 && (n.head.name += String.fromCharCode(w));
          while (w && g < s);
          if (n.flags & 512 && (n.check = (0, St.default)(n.check, r, g, a)), s -= g, a += g, w) break e;
        } else n.head && (n.head.name = null);
        n.length = 0, n.mode = Zi;
      case Zi:
        if (n.flags & 4096) {
          if (s === 0) break e;
          g = 0;
          do
            w = r[a + g++], n.head && w && n.length < 65536 && (n.head.comment += String.fromCharCode(w));
          while (w && g < s);
          if (n.flags & 512 && (n.check = (0, St.default)(n.check, r, g, a)), s -= g, a += g, w) break e;
        } else n.head && (n.head.comment = null);
        n.mode = qi;
      case qi:
        if (n.flags & 512) {
          for (; l < 16; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          if (u !== (n.check & 65535)) {
            e.msg = "header crc mismatch", n.mode = Be;
            break;
          }
          u = 0, l = 0;
        }
        n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = true), e.adler = n.check = 0, n.mode = At;
        break;
      case Yi:
        for (; l < 32; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        e.adler = n.check = fa(u), u = 0, l = 0, n.mode = fn;
      case fn:
        if (n.havedict === 0) return e.next_out = o, e.avail_out = y, e.next_in = a, e.avail_in = s, n.hold = u, n.bits = l, pu;
        e.adler = n.check = 1, n.mode = At;
      case At:
        if (t === du || t === Jr) break e;
      case Xn:
        if (n.last) {
          u >>>= l & 7, l -= l & 7, n.mode = Cn;
          break;
        }
        for (; l < 3; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        switch (n.last = u & 1, u >>>= 1, l -= 1, u & 3) {
          case 0:
            n.mode = $i;
            break;
          case 1:
            if (Su(n), n.mode = en, t === Jr) {
              u >>>= 2, l -= 2;
              break e;
            }
            break;
          case 2:
            n.mode = ea;
            break;
          case 3:
            e.msg = "invalid block type", n.mode = Be;
        }
        u >>>= 2, l -= 2;
        break;
      case $i:
        for (u >>>= l & 7, l -= l & 7; l < 32; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if ((u & 65535) !== (u >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths", n.mode = Be;
          break;
        }
        if (n.length = u & 65535, u = 0, l = 0, n.mode = Fn, t === Jr) break e;
      case Fn:
        n.mode = Ji;
      case Ji:
        if (g = n.length, g) {
          if (g > s && (g = s), g > y && (g = y), g === 0) break e;
          ft.arraySet(i, r, a, g, o), s -= g, a += g, y -= g, o += g, n.length -= g;
          break;
        }
        n.mode = At;
        break;
      case ea:
        for (; l < 14; ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if (n.nlen = (u & 31) + 257, u >>>= 5, l -= 5, n.ndist = (u & 31) + 1, u >>>= 5, l -= 5, n.ncode = (u & 15) + 4, u >>>= 4, l -= 4, n.nlen > 286 || n.ndist > 30) {
          e.msg = "too many length or distance symbols", n.mode = Be;
          break;
        }
        n.have = 0, n.mode = ta;
      case ta:
        for (; n.have < n.ncode; ) {
          for (; l < 3; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          n.lens[Z[n.have++]] = u & 7, u >>>= 3, l -= 3;
        }
        for (; n.have < 19; ) n.lens[Z[n.have++]] = 0;
        if (n.lencode = n.lendyn, n.lenbits = 7, O = {
          bits: n.lenbits
        }, C = (0, Fr.default)(hu, n.lens, 0, 19, n.lencode, 0, n.work, O), n.lenbits = O.bits, C) {
          e.msg = "invalid code lengths set", n.mode = Be;
          break;
        }
        n.have = 0, n.mode = ra;
      case ra:
        for (; n.have < n.nlen + n.ndist; ) {
          for (; f = n.lencode[u & (1 << n.lenbits) - 1], h = f >>> 24, c = f >>> 16 & 255, K = f & 65535, !(h <= l); ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          if (K < 16) u >>>= h, l -= h, n.lens[n.have++] = K;
          else {
            if (K === 16) {
              for (I = h + 2; l < I; ) {
                if (s === 0) break e;
                s--, u += r[a++] << l, l += 8;
              }
              if (u >>>= h, l -= h, n.have === 0) {
                e.msg = "invalid bit length repeat", n.mode = Be;
                break;
              }
              w = n.lens[n.have - 1], g = 3 + (u & 3), u >>>= 2, l -= 2;
            } else if (K === 17) {
              for (I = h + 3; l < I; ) {
                if (s === 0) break e;
                s--, u += r[a++] << l, l += 8;
              }
              u >>>= h, l -= h, w = 0, g = 3 + (u & 7), u >>>= 3, l -= 3;
            } else {
              for (I = h + 7; l < I; ) {
                if (s === 0) break e;
                s--, u += r[a++] << l, l += 8;
              }
              u >>>= h, l -= h, w = 0, g = 11 + (u & 127), u >>>= 7, l -= 7;
            }
            if (n.have + g > n.nlen + n.ndist) {
              e.msg = "invalid bit length repeat", n.mode = Be;
              break;
            }
            for (; g--; ) n.lens[n.have++] = w;
          }
        }
        if (n.mode === Be) break;
        if (n.lens[256] === 0) {
          e.msg = "invalid code -- missing end-of-block", n.mode = Be;
          break;
        }
        if (n.lenbits = 9, O = {
          bits: n.lenbits
        }, C = (0, Fr.default)(lo, n.lens, 0, n.nlen, n.lencode, 0, n.work, O), n.lenbits = O.bits, C) {
          e.msg = "invalid literal/lengths set", n.mode = Be;
          break;
        }
        if (n.distbits = 6, n.distcode = n.distdyn, O = {
          bits: n.distbits
        }, C = (0, Fr.default)(fo, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, O), n.distbits = O.bits, C) {
          e.msg = "invalid distances set", n.mode = Be;
          break;
        }
        if (n.mode = en, t === Jr) break e;
      case en:
        n.mode = tn;
      case tn:
        if (s >= 6 && y >= 258) {
          e.next_out = o, e.avail_out = y, e.next_in = a, e.avail_in = s, n.hold = u, n.bits = l, (0, fu.default)(e, X), o = e.next_out, i = e.output, y = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, u = n.hold, l = n.bits, n.mode === At && (n.back = -1);
          break;
        }
        for (n.back = 0; f = n.lencode[u & (1 << n.lenbits) - 1], h = f >>> 24, c = f >>> 16 & 255, K = f & 65535, !(h <= l); ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if (c && !(c & 240)) {
          for (x = h, F = c, k = K; f = n.lencode[k + ((u & (1 << x + F) - 1) >> x)], h = f >>> 24, c = f >>> 16 & 255, K = f & 65535, !(x + h <= l); ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          u >>>= x, l -= x, n.back += x;
        }
        if (u >>>= h, l -= h, n.back += h, n.length = K, c === 0) {
          n.mode = sa;
          break;
        }
        if (c & 32) {
          n.back = -1, n.mode = At;
          break;
        }
        if (c & 64) {
          e.msg = "invalid literal/length code", n.mode = Be;
          break;
        }
        n.extra = c & 15, n.mode = na;
      case na:
        if (n.extra) {
          for (I = n.extra; l < I; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          n.length += u & (1 << n.extra) - 1, u >>>= n.extra, l -= n.extra, n.back += n.extra;
        }
        n.was = n.length, n.mode = ia;
      case ia:
        for (; f = n.distcode[u & (1 << n.distbits) - 1], h = f >>> 24, c = f >>> 16 & 255, K = f & 65535, !(h <= l); ) {
          if (s === 0) break e;
          s--, u += r[a++] << l, l += 8;
        }
        if (!(c & 240)) {
          for (x = h, F = c, k = K; f = n.distcode[k + ((u & (1 << x + F) - 1) >> x)], h = f >>> 24, c = f >>> 16 & 255, K = f & 65535, !(x + h <= l); ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          u >>>= x, l -= x, n.back += x;
        }
        if (u >>>= h, l -= h, n.back += h, c & 64) {
          e.msg = "invalid distance code", n.mode = Be;
          break;
        }
        n.offset = K, n.extra = c & 15, n.mode = aa;
      case aa:
        if (n.extra) {
          for (I = n.extra; l < I; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          n.offset += u & (1 << n.extra) - 1, u >>>= n.extra, l -= n.extra, n.back += n.extra;
        }
        if (n.offset > n.dmax) {
          e.msg = "invalid distance too far back", n.mode = Be;
          break;
        }
        n.mode = oa;
      case oa:
        if (y === 0) break e;
        if (g = X - y, n.offset > g) {
          if (g = n.offset - g, g > n.whave && n.sane) {
            e.msg = "invalid distance too far back", n.mode = Be;
            break;
          }
          g > n.wnext ? (g -= n.wnext, b = n.wsize - g) : b = n.wnext - g, g > n.length && (g = n.length), d = n.window;
        } else d = i, b = o - n.offset, g = n.length;
        g > y && (g = y), y -= g, n.length -= g;
        do
          i[o++] = d[b++];
        while (--g);
        n.length === 0 && (n.mode = tn);
        break;
      case sa:
        if (y === 0) break e;
        i[o++] = n.length, y--, n.mode = tn;
        break;
      case Cn:
        if (n.wrap) {
          for (; l < 32; ) {
            if (s === 0) break e;
            s--, u |= r[a++] << l, l += 8;
          }
          if (X -= y, e.total_out += X, n.total += X, X && (e.adler = n.check = n.flags ? (0, St.default)(n.check, i, X, o - X) : (0, Vn.default)(n.check, i, X, o - X)), X = y, (n.flags ? u : fa(u)) !== n.check) {
            e.msg = "incorrect data check", n.mode = Be;
            break;
          }
          u = 0, l = 0;
        }
        n.mode = ua;
      case ua:
        if (n.wrap && n.flags) {
          for (; l < 32; ) {
            if (s === 0) break e;
            s--, u += r[a++] << l, l += 8;
          }
          if (u !== (n.total & 4294967295)) {
            e.msg = "incorrect length check", n.mode = Be;
            break;
          }
          u = 0, l = 0;
        }
        n.mode = la;
      case la:
        C = _u;
        break e;
      case Be:
        C = co;
        break e;
      case po:
        return ho;
      case yu:
      default:
        return pt;
    }
    return e.next_out = o, e.avail_out = y, e.next_in = a, e.avail_in = s, n.hold = u, n.bits = l, (n.wsize || X !== e.avail_out && n.mode < Be && (n.mode < Cn || t !== Ui)) && bo(e, e.output, e.next_out, X - e.avail_out), S -= e.avail_in, X -= e.avail_out, e.total_in += S, e.total_out += X, n.total += X, n.wrap && X && (e.adler = n.check = n.flags ? (0, St.default)(n.check, i, X, e.next_out - X) : (0, Vn.default)(n.check, i, X, e.next_out - X)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === At ? 128 : 0) + (n.mode === en || n.mode === Fn ? 256 : 0), (S === 0 && X === 0 || t === Ui) && C === er && (C = vu), C;
  }
  function Ku(e) {
    if (!e || !e.state) return pt;
    var t = e.state;
    return t.window && (t.window = null), e.state = null, er;
  }
  function Xu(e, t) {
    var n;
    return !e || !e.state || (n = e.state, !(n.wrap & 2)) ? pt : (n.head = t, t.done = false, er);
  }
  function Fu(e, t) {
    var n = t.length, r, i, a;
    return !e || !e.state || (r = e.state, r.wrap !== 0 && r.mode !== fn) ? pt : r.mode === fn && (i = 1, i = (0, Vn.default)(i, t, n, 0), i !== r.check) ? co : (a = bo(e, t, n, n), a ? (r.mode = po, ho) : (r.havedict = 1, er));
  }
  Ke.inflateInfo = "pako inflate (from Nodeca project)";
  var di = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = t;
    function t() {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }
  })(di);
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = Ke, n = r(di);
    function r(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    }
    function i(l) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
        return typeof S;
      } : function(S) {
        return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
      }, i(l);
    }
    function a(l, S) {
      if (!(l instanceof S)) throw new TypeError("Cannot call a class as a function");
    }
    function o(l, S) {
      for (var X = 0; X < S.length; X++) {
        var g = S[X];
        g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(l, y(g.key), g);
      }
    }
    function s(l, S, X) {
      return S && o(l.prototype, S), Object.defineProperty(l, "prototype", {
        writable: false
      }), l;
    }
    function y(l) {
      var S = u(l, "string");
      return i(S) == "symbol" ? S : S + "";
    }
    function u(l, S) {
      if (i(l) != "object" || !l) return l;
      var X = l[Symbol.toPrimitive];
      if (X !== void 0) {
        var g = X.call(l, S);
        if (i(g) != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(l);
    }
    e.default = function() {
      function l() {
        a(this, l), this.strm = new n.default(), this.chunkSize = 1024 * 10 * 10, this.strm.output = new Uint8Array(this.chunkSize), (0, t.inflateInit)(this.strm);
      }
      return s(l, [
        {
          key: "setInput",
          value: function(X) {
            X ? (this.strm.input = X, this.strm.avail_in = this.strm.input.length, this.strm.next_in = 0) : (this.strm.input = null, this.strm.avail_in = 0, this.strm.next_in = 0);
          }
        },
        {
          key: "inflate",
          value: function(X) {
            X > this.chunkSize && (this.chunkSize = X, this.strm.output = new Uint8Array(this.chunkSize)), this.strm.next_out = 0, this.strm.avail_out = X;
            var g = (0, t.inflate)(this.strm, 0);
            if (g < 0) throw new Error("zlib inflate failed");
            if (this.strm.next_out != X) throw new Error("Incomplete zlib block");
            return new Uint8Array(this.strm.output.buffer, 0, this.strm.next_out);
          }
        },
        {
          key: "reset",
          value: function() {
            (0, t.inflateReset)(this.strm);
          }
        }
      ]);
    }();
  })(Nr);
  var mo = {}, ge = {}, or = {};
  function Zn(e) {
    "@babel/helpers - typeof";
    return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Zn(e);
  }
  Object.defineProperty(or, "__esModule", {
    value: true
  });
  or._tr_align = Vu;
  or._tr_flush_block = Zu;
  or._tr_init = Gu;
  or._tr_stored_block = Oo;
  or._tr_tally = qu;
  var Cu = Au(ot);
  function wo(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (wo = function(i) {
      return i ? n : t;
    })(e);
  }
  function Au(e, t) {
    if (e && e.__esModule) return e;
    if (e === null || Zn(e) != "object" && typeof e != "function") return {
      default: e
    };
    var n = wo(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
    }
    return r.default = e, n && n.set(e, r), r;
  }
  var Pu = 4, ha = 0, da = 1, Tu = 2;
  function br(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }
  var Lu = 0, ko = 1, Ru = 2, Mu = 3, Du = 258, _i = 29, jr = 256, Lr = jr + 1 + _i, _r = 30, pi = 19, So = 2 * Lr + 1, $t = 15, Tn = 16, Ou = 7, vi = 256, Eo = 16, Ko = 17, Xo = 18, qn = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
  ], on = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
  ], Bu = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
  ], Fo = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ], Iu = 512, Pt = new Array((Lr + 2) * 2);
  br(Pt);
  var Cr = new Array(_r * 2);
  br(Cr);
  var Rr = new Array(Iu);
  br(Rr);
  var Mr = new Array(Du - Mu + 1);
  br(Mr);
  var yi = new Array(_i);
  br(yi);
  var cn = new Array(_r);
  br(cn);
  function Ln(e, t, n, r, i) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
  }
  var Co, Ao, Po;
  function Rn(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
  }
  function To(e) {
    return e < 256 ? Rr[e] : Rr[256 + (e >>> 7)];
  }
  function Dr(e, t) {
    e.pending_buf[e.pending++] = t & 255, e.pending_buf[e.pending++] = t >>> 8 & 255;
  }
  function at(e, t, n) {
    e.bi_valid > Tn - n ? (e.bi_buf |= t << e.bi_valid & 65535, Dr(e, e.bi_buf), e.bi_buf = t >> Tn - e.bi_valid, e.bi_valid += n - Tn) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
  }
  function Ft(e, t, n) {
    at(e, n[t * 2], n[t * 2 + 1]);
  }
  function Lo(e, t) {
    var n = 0;
    do
      n |= e & 1, e >>>= 1, n <<= 1;
    while (--t > 0);
    return n >>> 1;
  }
  function Qu(e) {
    e.bi_valid === 16 ? (Dr(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
  }
  function Uu(e, t) {
    var n = t.dyn_tree, r = t.max_code, i = t.stat_desc.static_tree, a = t.stat_desc.has_stree, o = t.stat_desc.extra_bits, s = t.stat_desc.extra_base, y = t.stat_desc.max_length, u, l, S, X, g, b, d = 0;
    for (X = 0; X <= $t; X++) e.bl_count[X] = 0;
    for (n[e.heap[e.heap_max] * 2 + 1] = 0, u = e.heap_max + 1; u < So; u++) l = e.heap[u], X = n[n[l * 2 + 1] * 2 + 1] + 1, X > y && (X = y, d++), n[l * 2 + 1] = X, !(l > r) && (e.bl_count[X]++, g = 0, l >= s && (g = o[l - s]), b = n[l * 2], e.opt_len += b * (X + g), a && (e.static_len += b * (i[l * 2 + 1] + g)));
    if (d !== 0) {
      do {
        for (X = y - 1; e.bl_count[X] === 0; ) X--;
        e.bl_count[X]--, e.bl_count[X + 1] += 2, e.bl_count[y]--, d -= 2;
      } while (d > 0);
      for (X = y; X !== 0; X--) for (l = e.bl_count[X]; l !== 0; ) S = e.heap[--u], !(S > r) && (n[S * 2 + 1] !== X && (e.opt_len += (X - n[S * 2 + 1]) * n[S * 2], n[S * 2 + 1] = X), l--);
    }
  }
  function Ro(e, t, n) {
    var r = new Array($t + 1), i = 0, a, o;
    for (a = 1; a <= $t; a++) r[a] = i = i + n[a - 1] << 1;
    for (o = 0; o <= t; o++) {
      var s = e[o * 2 + 1];
      s !== 0 && (e[o * 2] = Lo(r[s]++, s));
    }
  }
  function Nu() {
    var e, t, n, r, i, a = new Array($t + 1);
    for (n = 0, r = 0; r < _i - 1; r++) for (yi[r] = n, e = 0; e < 1 << qn[r]; e++) Mr[n++] = r;
    for (Mr[n - 1] = r, i = 0, r = 0; r < 16; r++) for (cn[r] = i, e = 0; e < 1 << on[r]; e++) Rr[i++] = r;
    for (i >>= 7; r < _r; r++) for (cn[r] = i << 7, e = 0; e < 1 << on[r] - 7; e++) Rr[256 + i++] = r;
    for (t = 0; t <= $t; t++) a[t] = 0;
    for (e = 0; e <= 143; ) Pt[e * 2 + 1] = 8, e++, a[8]++;
    for (; e <= 255; ) Pt[e * 2 + 1] = 9, e++, a[9]++;
    for (; e <= 279; ) Pt[e * 2 + 1] = 7, e++, a[7]++;
    for (; e <= 287; ) Pt[e * 2 + 1] = 8, e++, a[8]++;
    for (Ro(Pt, Lr + 1, a), e = 0; e < _r; e++) Cr[e * 2 + 1] = 5, Cr[e * 2] = Lo(e, 5);
    Co = new Ln(Pt, qn, jr + 1, Lr, $t), Ao = new Ln(Cr, on, 0, _r, $t), Po = new Ln(new Array(0), Bu, 0, pi, Ou);
  }
  function Mo(e) {
    var t;
    for (t = 0; t < Lr; t++) e.dyn_ltree[t * 2] = 0;
    for (t = 0; t < _r; t++) e.dyn_dtree[t * 2] = 0;
    for (t = 0; t < pi; t++) e.bl_tree[t * 2] = 0;
    e.dyn_ltree[vi * 2] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
  }
  function Do(e) {
    e.bi_valid > 8 ? Dr(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
  }
  function ju(e, t, n, r) {
    Do(e), Dr(e, n), Dr(e, ~n), Cu.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
  }
  function _a(e, t, n, r) {
    var i = t * 2, a = n * 2;
    return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
  }
  function Mn(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && _a(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !_a(t, r, e.heap[i], e.depth)); ) e.heap[n] = e.heap[i], n = i, i <<= 1;
    e.heap[n] = r;
  }
  function pa(e, t, n) {
    var r, i, a = 0, o, s;
    if (e.last_lit !== 0) do
      r = e.pending_buf[e.d_buf + a * 2] << 8 | e.pending_buf[e.d_buf + a * 2 + 1], i = e.pending_buf[e.l_buf + a], a++, r === 0 ? Ft(e, i, t) : (o = Mr[i], Ft(e, o + jr + 1, t), s = qn[o], s !== 0 && (i -= yi[o], at(e, i, s)), r--, o = To(r), Ft(e, o, n), s = on[o], s !== 0 && (r -= cn[o], at(e, r, s)));
    while (a < e.last_lit);
    Ft(e, vi, t);
  }
  function Yn(e, t) {
    var n = t.dyn_tree, r = t.stat_desc.static_tree, i = t.stat_desc.has_stree, a = t.stat_desc.elems, o, s, y = -1, u;
    for (e.heap_len = 0, e.heap_max = So, o = 0; o < a; o++) n[o * 2] !== 0 ? (e.heap[++e.heap_len] = y = o, e.depth[o] = 0) : n[o * 2 + 1] = 0;
    for (; e.heap_len < 2; ) u = e.heap[++e.heap_len] = y < 2 ? ++y : 0, n[u * 2] = 1, e.depth[u] = 0, e.opt_len--, i && (e.static_len -= r[u * 2 + 1]);
    for (t.max_code = y, o = e.heap_len >> 1; o >= 1; o--) Mn(e, n, o);
    u = a;
    do
      o = e.heap[1], e.heap[1] = e.heap[e.heap_len--], Mn(e, n, 1), s = e.heap[1], e.heap[--e.heap_max] = o, e.heap[--e.heap_max] = s, n[u * 2] = n[o * 2] + n[s * 2], e.depth[u] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1, n[o * 2 + 1] = n[s * 2 + 1] = u, e.heap[1] = u++, Mn(e, n, 1);
    while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1], Uu(e, t), Ro(n, y, e.bl_count);
  }
  function va(e, t, n) {
    var r, i = -1, a, o = t[0 * 2 + 1], s = 0, y = 7, u = 4;
    for (o === 0 && (y = 138, u = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) a = o, o = t[(r + 1) * 2 + 1], !(++s < y && a === o) && (s < u ? e.bl_tree[a * 2] += s : a !== 0 ? (a !== i && e.bl_tree[a * 2]++, e.bl_tree[Eo * 2]++) : s <= 10 ? e.bl_tree[Ko * 2]++ : e.bl_tree[Xo * 2]++, s = 0, i = a, o === 0 ? (y = 138, u = 3) : a === o ? (y = 6, u = 3) : (y = 7, u = 4));
  }
  function ya(e, t, n) {
    var r, i = -1, a, o = t[0 * 2 + 1], s = 0, y = 7, u = 4;
    for (o === 0 && (y = 138, u = 3), r = 0; r <= n; r++) if (a = o, o = t[(r + 1) * 2 + 1], !(++s < y && a === o)) {
      if (s < u) do
        Ft(e, a, e.bl_tree);
      while (--s !== 0);
      else a !== 0 ? (a !== i && (Ft(e, a, e.bl_tree), s--), Ft(e, Eo, e.bl_tree), at(e, s - 3, 2)) : s <= 10 ? (Ft(e, Ko, e.bl_tree), at(e, s - 3, 3)) : (Ft(e, Xo, e.bl_tree), at(e, s - 11, 7));
      s = 0, i = a, o === 0 ? (y = 138, u = 3) : a === o ? (y = 6, u = 3) : (y = 7, u = 4);
    }
  }
  function Hu(e) {
    var t;
    for (va(e, e.dyn_ltree, e.l_desc.max_code), va(e, e.dyn_dtree, e.d_desc.max_code), Yn(e, e.bl_desc), t = pi - 1; t >= 3 && e.bl_tree[Fo[t] * 2 + 1] === 0; t--) ;
    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
  }
  function Wu(e, t, n, r) {
    var i;
    for (at(e, t - 257, 5), at(e, n - 1, 5), at(e, r - 4, 4), i = 0; i < r; i++) at(e, e.bl_tree[Fo[i] * 2 + 1], 3);
    ya(e, e.dyn_ltree, t - 1), ya(e, e.dyn_dtree, n - 1);
  }
  function zu(e) {
    var t = 4093624447, n;
    for (n = 0; n <= 31; n++, t >>>= 1) if (t & 1 && e.dyn_ltree[n * 2] !== 0) return ha;
    if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0) return da;
    for (n = 32; n < jr; n++) if (e.dyn_ltree[n * 2] !== 0) return da;
    return ha;
  }
  var xa = false;
  function Gu(e) {
    xa || (Nu(), xa = true), e.l_desc = new Rn(e.dyn_ltree, Co), e.d_desc = new Rn(e.dyn_dtree, Ao), e.bl_desc = new Rn(e.bl_tree, Po), e.bi_buf = 0, e.bi_valid = 0, Mo(e);
  }
  function Oo(e, t, n, r) {
    at(e, (Lu << 1) + (r ? 1 : 0), 3), ju(e, t, n);
  }
  function Vu(e) {
    at(e, ko << 1, 3), Ft(e, vi, Pt), Qu(e);
  }
  function Zu(e, t, n, r) {
    var i, a, o = 0;
    e.level > 0 ? (e.strm.data_type === Tu && (e.strm.data_type = zu(e)), Yn(e, e.l_desc), Yn(e, e.d_desc), o = Hu(e), i = e.opt_len + 3 + 7 >>> 3, a = e.static_len + 3 + 7 >>> 3, a <= i && (i = a)) : i = a = n + 5, n + 4 <= i && t !== -1 ? Oo(e, t, n, r) : e.strategy === Pu || a === i ? (at(e, (ko << 1) + (r ? 1 : 0), 3), pa(e, Pt, Cr)) : (at(e, (Ru << 1) + (r ? 1 : 0), 3), Wu(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), pa(e, e.dyn_ltree, e.dyn_dtree)), Mo(e), r && Do(e);
  }
  function qu(e, t, n) {
    return e.pending_buf[e.d_buf + e.last_lit * 2] = t >>> 8 & 255, e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255, e.pending_buf[e.l_buf + e.last_lit] = n & 255, e.last_lit++, t === 0 ? e.dyn_ltree[n * 2]++ : (e.matches++, t--, e.dyn_ltree[(Mr[n] + jr + 1) * 2]++, e.dyn_dtree[To(t) * 2]++), e.last_lit === e.lit_bufsize - 1;
  }
  var Bo = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0, e.default = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  })(Bo);
  function $n(e) {
    "@babel/helpers - typeof";
    return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, $n(e);
  }
  Object.defineProperty(ge, "__esModule", {
    value: true
  });
  ge.Z_UNKNOWN = ge.Z_STREAM_ERROR = ge.Z_STREAM_END = ge.Z_RLE = ge.Z_PARTIAL_FLUSH = ge.Z_OK = ge.Z_NO_FLUSH = ge.Z_HUFFMAN_ONLY = ge.Z_FULL_FLUSH = ge.Z_FIXED = ge.Z_FINISH = ge.Z_FILTERED = ge.Z_DEFLATED = ge.Z_DEFAULT_STRATEGY = ge.Z_DEFAULT_COMPRESSION = ge.Z_DATA_ERROR = ge.Z_BUF_ERROR = ge.Z_BLOCK = void 0;
  ge.deflate = Kl;
  ge.deflateEnd = Xl;
  ge.deflateInfo = void 0;
  ge.deflateInit = El;
  ge.deflateInit2 = Wo;
  ge.deflateReset = Ho;
  ge.deflateResetKeep = jo;
  ge.deflateSetDictionary = Fl;
  ge.deflateSetHeader = Sl;
  var tt = Uo(ot), dt = Uo(or), Io = xi(ci), Dt = xi(hi), Yu = xi(Bo);
  function xi(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function Qo(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (Qo = function(i) {
      return i ? n : t;
    })(e);
  }
  function Uo(e, t) {
    if (e && e.__esModule) return e;
    if (e === null || $n(e) != "object" && typeof e != "function") return {
      default: e
    };
    var n = Qo(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
    }
    return r.default = e, n && n.set(e, r), r;
  }
  var sr = ge.Z_NO_FLUSH = 0, $u = ge.Z_PARTIAL_FLUSH = 1, Ju = ge.Z_FULL_FLUSH = 3, Ht = ge.Z_FINISH = 4, ga = ge.Z_BLOCK = 5, Ct = ge.Z_OK = 0, ba = ge.Z_STREAM_END = 1, _t = ge.Z_STREAM_ERROR = -2, el = ge.Z_DATA_ERROR = -3, Dn = ge.Z_BUF_ERROR = -5, tl = ge.Z_DEFAULT_COMPRESSION = -1, rl = ge.Z_FILTERED = 1, rn = ge.Z_HUFFMAN_ONLY = 2, nl = ge.Z_RLE = 3, il = ge.Z_FIXED = 4, al = ge.Z_DEFAULT_STRATEGY = 0, ol = ge.Z_UNKNOWN = 2, vn = ge.Z_DEFLATED = 8, sl = 9, ul = 15, ll = 8, fl = 29, cl = 256, Jn = cl + 1 + fl, hl = 30, dl = 19, _l = 2 * Jn + 1, pl = 15, Ee = 3, It = 258, yt = It + Ee + 1, vl = 32, yn = 42, ei = 69, sn = 73, un = 91, ln = 103, Jt = 113, Kr = 666, Qe = 1, Hr = 2, tr = 3, mr = 4, yl = 3;
  function Qt(e, t) {
    return e.msg = Yu.default[t], t;
  }
  function ma(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function Bt(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }
  function Ot(e) {
    var t = e.state, n = t.pending;
    n > e.avail_out && (n = e.avail_out), n !== 0 && (tt.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
  }
  function Ge(e, t) {
    dt._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, Ot(e.strm);
  }
  function Fe(e, t) {
    e.pending_buf[e.pending++] = t;
  }
  function Sr(e, t) {
    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = t & 255;
  }
  function xl(e, t, n, r) {
    var i = e.avail_in;
    return i > r && (i = r), i === 0 ? 0 : (e.avail_in -= i, tt.arraySet(t, e.input, e.next_in, i, n), e.state.wrap === 1 ? e.adler = (0, Io.default)(e.adler, t, i, n) : e.state.wrap === 2 && (e.adler = (0, Dt.default)(e.adler, t, i, n)), e.next_in += i, e.total_in += i, i);
  }
  function No(e, t) {
    var n = e.max_chain_length, r = e.strstart, i, a, o = e.prev_length, s = e.nice_match, y = e.strstart > e.w_size - yt ? e.strstart - (e.w_size - yt) : 0, u = e.window, l = e.w_mask, S = e.prev, X = e.strstart + It, g = u[r + o - 1], b = u[r + o];
    e.prev_length >= e.good_match && (n >>= 2), s > e.lookahead && (s = e.lookahead);
    do
      if (i = t, !(u[i + o] !== b || u[i + o - 1] !== g || u[i] !== u[r] || u[++i] !== u[r + 1])) {
        r += 2, i++;
        do
          ;
        while (u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && u[++r] === u[++i] && r < X);
        if (a = It - (X - r), r = X - It, a > o) {
          if (e.match_start = t, o = a, a >= s) break;
          g = u[r + o - 1], b = u[r + o];
        }
      }
    while ((t = S[t & l]) > y && --n !== 0);
    return o <= e.lookahead ? o : e.lookahead;
  }
  function rr(e) {
    var t = e.w_size, n, r, i, a, o;
    do {
      if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - yt)) {
        tt.arraySet(e.window, e.window, t, t, 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, r = e.hash_size, n = r;
        do
          i = e.head[--n], e.head[n] = i >= t ? i - t : 0;
        while (--r);
        r = t, n = r;
        do
          i = e.prev[--n], e.prev[n] = i >= t ? i - t : 0;
        while (--r);
        a += t;
      }
      if (e.strm.avail_in === 0) break;
      if (r = xl(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += r, e.lookahead + e.insert >= Ee) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + Ee - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < Ee)); ) ;
    } while (e.lookahead < yt && e.strm.avail_in !== 0);
  }
  function gl(e, t) {
    var n = 65535;
    for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
      if (e.lookahead <= 1) {
        if (rr(e), e.lookahead === 0 && t === sr) return Qe;
        if (e.lookahead === 0) break;
      }
      e.strstart += e.lookahead, e.lookahead = 0;
      var r = e.block_start + n;
      if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, Ge(e, false), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - yt && (Ge(e, false), e.strm.avail_out === 0)) return Qe;
    }
    return e.insert = 0, t === Ht ? (Ge(e, true), e.strm.avail_out === 0 ? tr : mr) : (e.strstart > e.block_start && (Ge(e, false), e.strm.avail_out === 0), Qe);
  }
  function On(e, t) {
    for (var n, r; ; ) {
      if (e.lookahead < yt) {
        if (rr(e), e.lookahead < yt && t === sr) return Qe;
        if (e.lookahead === 0) break;
      }
      if (n = 0, e.lookahead >= Ee && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ee - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - yt && (e.match_length = No(e, n)), e.match_length >= Ee) if (r = dt._tr_tally(e, e.strstart - e.match_start, e.match_length - Ee), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= Ee) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ee - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
      else r = dt._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
      if (r && (Ge(e, false), e.strm.avail_out === 0)) return Qe;
    }
    return e.insert = e.strstart < Ee - 1 ? e.strstart : Ee - 1, t === Ht ? (Ge(e, true), e.strm.avail_out === 0 ? tr : mr) : e.last_lit && (Ge(e, false), e.strm.avail_out === 0) ? Qe : Hr;
  }
  function lr(e, t) {
    for (var n, r, i; ; ) {
      if (e.lookahead < yt) {
        if (rr(e), e.lookahead < yt && t === sr) return Qe;
        if (e.lookahead === 0) break;
      }
      if (n = 0, e.lookahead >= Ee && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ee - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = Ee - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - yt && (e.match_length = No(e, n), e.match_length <= 5 && (e.strategy === rl || e.match_length === Ee && e.strstart - e.match_start > 4096) && (e.match_length = Ee - 1)), e.prev_length >= Ee && e.match_length <= e.prev_length) {
        i = e.strstart + e.lookahead - Ee, r = dt._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - Ee), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
        do
          ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ee - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
        while (--e.prev_length !== 0);
        if (e.match_available = 0, e.match_length = Ee - 1, e.strstart++, r && (Ge(e, false), e.strm.avail_out === 0)) return Qe;
      } else if (e.match_available) {
        if (r = dt._tr_tally(e, 0, e.window[e.strstart - 1]), r && Ge(e, false), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return Qe;
      } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (r = dt._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < Ee - 1 ? e.strstart : Ee - 1, t === Ht ? (Ge(e, true), e.strm.avail_out === 0 ? tr : mr) : e.last_lit && (Ge(e, false), e.strm.avail_out === 0) ? Qe : Hr;
  }
  function bl(e, t) {
    for (var n, r, i, a, o = e.window; ; ) {
      if (e.lookahead <= It) {
        if (rr(e), e.lookahead <= It && t === sr) return Qe;
        if (e.lookahead === 0) break;
      }
      if (e.match_length = 0, e.lookahead >= Ee && e.strstart > 0 && (i = e.strstart - 1, r = o[i], r === o[++i] && r === o[++i] && r === o[++i])) {
        a = e.strstart + It;
        do
          ;
        while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < a);
        e.match_length = It - (a - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
      }
      if (e.match_length >= Ee ? (n = dt._tr_tally(e, 1, e.match_length - Ee), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = dt._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (Ge(e, false), e.strm.avail_out === 0)) return Qe;
    }
    return e.insert = 0, t === Ht ? (Ge(e, true), e.strm.avail_out === 0 ? tr : mr) : e.last_lit && (Ge(e, false), e.strm.avail_out === 0) ? Qe : Hr;
  }
  function ml(e, t) {
    for (var n; ; ) {
      if (e.lookahead === 0 && (rr(e), e.lookahead === 0)) {
        if (t === sr) return Qe;
        break;
      }
      if (e.match_length = 0, n = dt._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (Ge(e, false), e.strm.avail_out === 0)) return Qe;
    }
    return e.insert = 0, t === Ht ? (Ge(e, true), e.strm.avail_out === 0 ? tr : mr) : e.last_lit && (Ge(e, false), e.strm.avail_out === 0) ? Qe : Hr;
  }
  function Et(e, t, n, r, i) {
    this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
  }
  var cr;
  cr = [
    new Et(0, 0, 0, 0, gl),
    new Et(4, 4, 8, 4, On),
    new Et(4, 5, 16, 8, On),
    new Et(4, 6, 32, 32, On),
    new Et(4, 4, 16, 16, lr),
    new Et(8, 16, 32, 32, lr),
    new Et(8, 16, 128, 128, lr),
    new Et(8, 32, 128, 256, lr),
    new Et(32, 128, 258, 1024, lr),
    new Et(32, 258, 258, 4096, lr)
  ];
  function wl(e) {
    e.window_size = 2 * e.w_size, Bt(e.head), e.max_lazy_match = cr[e.level].max_lazy, e.good_match = cr[e.level].good_length, e.nice_match = cr[e.level].nice_length, e.max_chain_length = cr[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = Ee - 1, e.match_available = 0, e.ins_h = 0;
  }
  function kl() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = vn, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new tt.Buf16(_l * 2), this.dyn_dtree = new tt.Buf16((2 * hl + 1) * 2), this.bl_tree = new tt.Buf16((2 * dl + 1) * 2), Bt(this.dyn_ltree), Bt(this.dyn_dtree), Bt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new tt.Buf16(pl + 1), this.heap = new tt.Buf16(2 * Jn + 1), Bt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new tt.Buf16(2 * Jn + 1), Bt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function jo(e) {
    var t;
    return !e || !e.state ? Qt(e, _t) : (e.total_in = e.total_out = 0, e.data_type = ol, t = e.state, t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? yn : Jt, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = sr, dt._tr_init(t), Ct);
  }
  function Ho(e) {
    var t = jo(e);
    return t === Ct && wl(e.state), t;
  }
  function Sl(e, t) {
    return !e || !e.state || e.state.wrap !== 2 ? _t : (e.state.gzhead = t, Ct);
  }
  function Wo(e, t, n, r, i, a) {
    if (!e) return _t;
    var o = 1;
    if (t === tl && (t = 6), r < 0 ? (o = 0, r = -r) : r > 15 && (o = 2, r -= 16), i < 1 || i > sl || n !== vn || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > il) return Qt(e, _t);
    r === 8 && (r = 9);
    var s = new kl();
    return e.state = s, s.strm = e, s.wrap = o, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + Ee - 1) / Ee), s.window = new tt.Buf8(s.w_size * 2), s.head = new tt.Buf16(s.hash_size), s.prev = new tt.Buf16(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = s.lit_bufsize * 4, s.pending_buf = new tt.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = t, s.strategy = a, s.method = n, Ho(e);
  }
  function El(e, t) {
    return Wo(e, t, vn, ul, ll, al);
  }
  function Kl(e, t) {
    var n, r, i, a;
    if (!e || !e.state || t > ga || t < 0) return e ? Qt(e, _t) : _t;
    if (r = e.state, !e.output || !e.input && e.avail_in !== 0 || r.status === Kr && t !== Ht) return Qt(e, e.avail_out === 0 ? Dn : _t);
    if (r.strm = e, n = r.last_flush, r.last_flush = t, r.status === yn) if (r.wrap === 2) e.adler = 0, Fe(r, 31), Fe(r, 139), Fe(r, 8), r.gzhead ? (Fe(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), Fe(r, r.gzhead.time & 255), Fe(r, r.gzhead.time >> 8 & 255), Fe(r, r.gzhead.time >> 16 & 255), Fe(r, r.gzhead.time >> 24 & 255), Fe(r, r.level === 9 ? 2 : r.strategy >= rn || r.level < 2 ? 4 : 0), Fe(r, r.gzhead.os & 255), r.gzhead.extra && r.gzhead.extra.length && (Fe(r, r.gzhead.extra.length & 255), Fe(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = ei) : (Fe(r, 0), Fe(r, 0), Fe(r, 0), Fe(r, 0), Fe(r, 0), Fe(r, r.level === 9 ? 2 : r.strategy >= rn || r.level < 2 ? 4 : 0), Fe(r, yl), r.status = Jt);
    else {
      var o = vn + (r.w_bits - 8 << 4) << 8, s = -1;
      r.strategy >= rn || r.level < 2 ? s = 0 : r.level < 6 ? s = 1 : r.level === 6 ? s = 2 : s = 3, o |= s << 6, r.strstart !== 0 && (o |= vl), o += 31 - o % 31, r.status = Jt, Sr(r, o), r.strstart !== 0 && (Sr(r, e.adler >>> 16), Sr(r, e.adler & 65535)), e.adler = 1;
    }
    if (r.status === ei) if (r.gzhead.extra) {
      for (i = r.pending; r.gzindex < (r.gzhead.extra.length & 65535) && !(r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), Ot(e), i = r.pending, r.pending === r.pending_buf_size)); ) Fe(r, r.gzhead.extra[r.gzindex] & 255), r.gzindex++;
      r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = sn);
    } else r.status = sn;
    if (r.status === sn) if (r.gzhead.name) {
      i = r.pending;
      do {
        if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), Ot(e), i = r.pending, r.pending === r.pending_buf_size)) {
          a = 1;
          break;
        }
        r.gzindex < r.gzhead.name.length ? a = r.gzhead.name.charCodeAt(r.gzindex++) & 255 : a = 0, Fe(r, a);
      } while (a !== 0);
      r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), a === 0 && (r.gzindex = 0, r.status = un);
    } else r.status = un;
    if (r.status === un) if (r.gzhead.comment) {
      i = r.pending;
      do {
        if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), Ot(e), i = r.pending, r.pending === r.pending_buf_size)) {
          a = 1;
          break;
        }
        r.gzindex < r.gzhead.comment.length ? a = r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : a = 0, Fe(r, a);
      } while (a !== 0);
      r.gzhead.hcrc && r.pending > i && (e.adler = (0, Dt.default)(e.adler, r.pending_buf, r.pending - i, i)), a === 0 && (r.status = ln);
    } else r.status = ln;
    if (r.status === ln && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Ot(e), r.pending + 2 <= r.pending_buf_size && (Fe(r, e.adler & 255), Fe(r, e.adler >> 8 & 255), e.adler = 0, r.status = Jt)) : r.status = Jt), r.pending !== 0) {
      if (Ot(e), e.avail_out === 0) return r.last_flush = -1, Ct;
    } else if (e.avail_in === 0 && ma(t) <= ma(n) && t !== Ht) return Qt(e, Dn);
    if (r.status === Kr && e.avail_in !== 0) return Qt(e, Dn);
    if (e.avail_in !== 0 || r.lookahead !== 0 || t !== sr && r.status !== Kr) {
      var y = r.strategy === rn ? ml(r, t) : r.strategy === nl ? bl(r, t) : cr[r.level].func(r, t);
      if ((y === tr || y === mr) && (r.status = Kr), y === Qe || y === tr) return e.avail_out === 0 && (r.last_flush = -1), Ct;
      if (y === Hr && (t === $u ? dt._tr_align(r) : t !== ga && (dt._tr_stored_block(r, 0, 0, false), t === Ju && (Bt(r.head), r.lookahead === 0 && (r.strstart = 0, r.block_start = 0, r.insert = 0))), Ot(e), e.avail_out === 0)) return r.last_flush = -1, Ct;
    }
    return t !== Ht ? Ct : r.wrap <= 0 ? ba : (r.wrap === 2 ? (Fe(r, e.adler & 255), Fe(r, e.adler >> 8 & 255), Fe(r, e.adler >> 16 & 255), Fe(r, e.adler >> 24 & 255), Fe(r, e.total_in & 255), Fe(r, e.total_in >> 8 & 255), Fe(r, e.total_in >> 16 & 255), Fe(r, e.total_in >> 24 & 255)) : (Sr(r, e.adler >>> 16), Sr(r, e.adler & 65535)), Ot(e), r.wrap > 0 && (r.wrap = -r.wrap), r.pending !== 0 ? Ct : ba);
  }
  function Xl(e) {
    var t;
    return !e || !e.state ? _t : (t = e.state.status, t !== yn && t !== ei && t !== sn && t !== un && t !== ln && t !== Jt && t !== Kr ? Qt(e, _t) : (e.state = null, t === Jt ? Qt(e, el) : Ct));
  }
  function Fl(e, t) {
    var n = t.length, r, i, a, o, s, y, u, l;
    if (!e || !e.state || (r = e.state, o = r.wrap, o === 2 || o === 1 && r.status !== yn || r.lookahead)) return _t;
    for (o === 1 && (e.adler = (0, Io.default)(e.adler, t, n, 0)), r.wrap = 0, n >= r.w_size && (o === 0 && (Bt(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), l = new tt.Buf8(r.w_size), tt.arraySet(l, t, n - r.w_size, r.w_size, 0), t = l, n = r.w_size), s = e.avail_in, y = e.next_in, u = e.input, e.avail_in = n, e.next_in = 0, e.input = t, rr(r); r.lookahead >= Ee; ) {
      i = r.strstart, a = r.lookahead - (Ee - 1);
      do
        r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + Ee - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++;
      while (--a);
      r.strstart = i, r.lookahead = Ee - 1, rr(r);
    }
    return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = Ee - 1, r.match_available = 0, e.next_in = y, e.input = u, e.avail_in = s, r.wrap = o, Ct;
  }
  ge.deflateInfo = "pako deflate (from Nodeca project)";
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = ge, n = r(di);
    function r(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    }
    function i(l) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
        return typeof S;
      } : function(S) {
        return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
      }, i(l);
    }
    function a(l, S) {
      if (!(l instanceof S)) throw new TypeError("Cannot call a class as a function");
    }
    function o(l, S) {
      for (var X = 0; X < S.length; X++) {
        var g = S[X];
        g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(l, y(g.key), g);
      }
    }
    function s(l, S, X) {
      return S && o(l.prototype, S), Object.defineProperty(l, "prototype", {
        writable: false
      }), l;
    }
    function y(l) {
      var S = u(l, "string");
      return i(S) == "symbol" ? S : S + "";
    }
    function u(l, S) {
      if (i(l) != "object" || !l) return l;
      var X = l[Symbol.toPrimitive];
      if (X !== void 0) {
        var g = X.call(l, S);
        if (i(g) != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(l);
    }
    e.default = function() {
      function l() {
        a(this, l), this.strm = new n.default(), this.chunkSize = 1024 * 10 * 10, this.outputBuffer = new Uint8Array(this.chunkSize), (0, t.deflateInit)(this.strm, t.Z_DEFAULT_COMPRESSION);
      }
      return s(l, [
        {
          key: "deflate",
          value: function(X) {
            this.strm.input = X, this.strm.avail_in = this.strm.input.length, this.strm.next_in = 0, this.strm.output = this.outputBuffer, this.strm.avail_out = this.chunkSize, this.strm.next_out = 0;
            var g = (0, t.deflate)(this.strm, t.Z_FULL_FLUSH), b = new Uint8Array(this.strm.output.buffer, 0, this.strm.next_out);
            if (g < 0) throw new Error("zlib deflate failed");
            if (this.strm.avail_in > 0) {
              var d = [
                b
              ], f = b.length;
              do {
                if (this.strm.output = new Uint8Array(this.chunkSize), this.strm.next_out = 0, this.strm.avail_out = this.chunkSize, g = (0, t.deflate)(this.strm, t.Z_FULL_FLUSH), g < 0) throw new Error("zlib deflate failed");
                var h = new Uint8Array(this.strm.output.buffer, 0, this.strm.next_out);
                f += h.length, d.push(h);
              } while (this.strm.avail_in > 0);
              for (var c = new Uint8Array(f), K = 0, x = 0; x < d.length; x++) c.set(d[x], K), K += d[x].length;
              b = c;
            }
            return this.strm.input = null, this.strm.avail_in = 0, this.strm.next_in = 0, b;
          }
        }
      ]);
    }();
  })(mo);
  var zo = {}, Wr = {}, zr = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0, e.default = {
      XK_VoidSymbol: 16777215,
      XK_BackSpace: 65288,
      XK_Tab: 65289,
      XK_Linefeed: 65290,
      XK_Clear: 65291,
      XK_Return: 65293,
      XK_Pause: 65299,
      XK_Scroll_Lock: 65300,
      XK_Sys_Req: 65301,
      XK_Escape: 65307,
      XK_Delete: 65535,
      XK_Multi_key: 65312,
      XK_Codeinput: 65335,
      XK_SingleCandidate: 65340,
      XK_MultipleCandidate: 65341,
      XK_PreviousCandidate: 65342,
      XK_Kanji: 65313,
      XK_Muhenkan: 65314,
      XK_Henkan_Mode: 65315,
      XK_Henkan: 65315,
      XK_Romaji: 65316,
      XK_Hiragana: 65317,
      XK_Katakana: 65318,
      XK_Hiragana_Katakana: 65319,
      XK_Zenkaku: 65320,
      XK_Hankaku: 65321,
      XK_Zenkaku_Hankaku: 65322,
      XK_Touroku: 65323,
      XK_Massyo: 65324,
      XK_Kana_Lock: 65325,
      XK_Kana_Shift: 65326,
      XK_Eisu_Shift: 65327,
      XK_Eisu_toggle: 65328,
      XK_Kanji_Bangou: 65335,
      XK_Zen_Koho: 65341,
      XK_Mae_Koho: 65342,
      XK_Home: 65360,
      XK_Left: 65361,
      XK_Up: 65362,
      XK_Right: 65363,
      XK_Down: 65364,
      XK_Prior: 65365,
      XK_Page_Up: 65365,
      XK_Next: 65366,
      XK_Page_Down: 65366,
      XK_End: 65367,
      XK_Begin: 65368,
      XK_Select: 65376,
      XK_Print: 65377,
      XK_Execute: 65378,
      XK_Insert: 65379,
      XK_Undo: 65381,
      XK_Redo: 65382,
      XK_Menu: 65383,
      XK_Find: 65384,
      XK_Cancel: 65385,
      XK_Help: 65386,
      XK_Break: 65387,
      XK_Mode_switch: 65406,
      XK_script_switch: 65406,
      XK_Num_Lock: 65407,
      XK_KP_Space: 65408,
      XK_KP_Tab: 65417,
      XK_KP_Enter: 65421,
      XK_KP_F1: 65425,
      XK_KP_F2: 65426,
      XK_KP_F3: 65427,
      XK_KP_F4: 65428,
      XK_KP_Home: 65429,
      XK_KP_Left: 65430,
      XK_KP_Up: 65431,
      XK_KP_Right: 65432,
      XK_KP_Down: 65433,
      XK_KP_Prior: 65434,
      XK_KP_Page_Up: 65434,
      XK_KP_Next: 65435,
      XK_KP_Page_Down: 65435,
      XK_KP_End: 65436,
      XK_KP_Begin: 65437,
      XK_KP_Insert: 65438,
      XK_KP_Delete: 65439,
      XK_KP_Equal: 65469,
      XK_KP_Multiply: 65450,
      XK_KP_Add: 65451,
      XK_KP_Separator: 65452,
      XK_KP_Subtract: 65453,
      XK_KP_Decimal: 65454,
      XK_KP_Divide: 65455,
      XK_KP_0: 65456,
      XK_KP_1: 65457,
      XK_KP_2: 65458,
      XK_KP_3: 65459,
      XK_KP_4: 65460,
      XK_KP_5: 65461,
      XK_KP_6: 65462,
      XK_KP_7: 65463,
      XK_KP_8: 65464,
      XK_KP_9: 65465,
      XK_F1: 65470,
      XK_F2: 65471,
      XK_F3: 65472,
      XK_F4: 65473,
      XK_F5: 65474,
      XK_F6: 65475,
      XK_F7: 65476,
      XK_F8: 65477,
      XK_F9: 65478,
      XK_F10: 65479,
      XK_F11: 65480,
      XK_L1: 65480,
      XK_F12: 65481,
      XK_L2: 65481,
      XK_F13: 65482,
      XK_L3: 65482,
      XK_F14: 65483,
      XK_L4: 65483,
      XK_F15: 65484,
      XK_L5: 65484,
      XK_F16: 65485,
      XK_L6: 65485,
      XK_F17: 65486,
      XK_L7: 65486,
      XK_F18: 65487,
      XK_L8: 65487,
      XK_F19: 65488,
      XK_L9: 65488,
      XK_F20: 65489,
      XK_L10: 65489,
      XK_F21: 65490,
      XK_R1: 65490,
      XK_F22: 65491,
      XK_R2: 65491,
      XK_F23: 65492,
      XK_R3: 65492,
      XK_F24: 65493,
      XK_R4: 65493,
      XK_F25: 65494,
      XK_R5: 65494,
      XK_F26: 65495,
      XK_R6: 65495,
      XK_F27: 65496,
      XK_R7: 65496,
      XK_F28: 65497,
      XK_R8: 65497,
      XK_F29: 65498,
      XK_R9: 65498,
      XK_F30: 65499,
      XK_R10: 65499,
      XK_F31: 65500,
      XK_R11: 65500,
      XK_F32: 65501,
      XK_R12: 65501,
      XK_F33: 65502,
      XK_R13: 65502,
      XK_F34: 65503,
      XK_R14: 65503,
      XK_F35: 65504,
      XK_R15: 65504,
      XK_Shift_L: 65505,
      XK_Shift_R: 65506,
      XK_Control_L: 65507,
      XK_Control_R: 65508,
      XK_Caps_Lock: 65509,
      XK_Shift_Lock: 65510,
      XK_Meta_L: 65511,
      XK_Meta_R: 65512,
      XK_Alt_L: 65513,
      XK_Alt_R: 65514,
      XK_Super_L: 65515,
      XK_Super_R: 65516,
      XK_Hyper_L: 65517,
      XK_Hyper_R: 65518,
      XK_ISO_Level3_Shift: 65027,
      XK_ISO_Next_Group: 65032,
      XK_ISO_Prev_Group: 65034,
      XK_ISO_First_Group: 65036,
      XK_ISO_Last_Group: 65038,
      XK_space: 32,
      XK_exclam: 33,
      XK_quotedbl: 34,
      XK_numbersign: 35,
      XK_dollar: 36,
      XK_percent: 37,
      XK_ampersand: 38,
      XK_apostrophe: 39,
      XK_quoteright: 39,
      XK_parenleft: 40,
      XK_parenright: 41,
      XK_asterisk: 42,
      XK_plus: 43,
      XK_comma: 44,
      XK_minus: 45,
      XK_period: 46,
      XK_slash: 47,
      XK_0: 48,
      XK_1: 49,
      XK_2: 50,
      XK_3: 51,
      XK_4: 52,
      XK_5: 53,
      XK_6: 54,
      XK_7: 55,
      XK_8: 56,
      XK_9: 57,
      XK_colon: 58,
      XK_semicolon: 59,
      XK_less: 60,
      XK_equal: 61,
      XK_greater: 62,
      XK_question: 63,
      XK_at: 64,
      XK_A: 65,
      XK_B: 66,
      XK_C: 67,
      XK_D: 68,
      XK_E: 69,
      XK_F: 70,
      XK_G: 71,
      XK_H: 72,
      XK_I: 73,
      XK_J: 74,
      XK_K: 75,
      XK_L: 76,
      XK_M: 77,
      XK_N: 78,
      XK_O: 79,
      XK_P: 80,
      XK_Q: 81,
      XK_R: 82,
      XK_S: 83,
      XK_T: 84,
      XK_U: 85,
      XK_V: 86,
      XK_W: 87,
      XK_X: 88,
      XK_Y: 89,
      XK_Z: 90,
      XK_bracketleft: 91,
      XK_backslash: 92,
      XK_bracketright: 93,
      XK_asciicircum: 94,
      XK_underscore: 95,
      XK_grave: 96,
      XK_quoteleft: 96,
      XK_a: 97,
      XK_b: 98,
      XK_c: 99,
      XK_d: 100,
      XK_e: 101,
      XK_f: 102,
      XK_g: 103,
      XK_h: 104,
      XK_i: 105,
      XK_j: 106,
      XK_k: 107,
      XK_l: 108,
      XK_m: 109,
      XK_n: 110,
      XK_o: 111,
      XK_p: 112,
      XK_q: 113,
      XK_r: 114,
      XK_s: 115,
      XK_t: 116,
      XK_u: 117,
      XK_v: 118,
      XK_w: 119,
      XK_x: 120,
      XK_y: 121,
      XK_z: 122,
      XK_braceleft: 123,
      XK_bar: 124,
      XK_braceright: 125,
      XK_asciitilde: 126,
      XK_nobreakspace: 160,
      XK_exclamdown: 161,
      XK_cent: 162,
      XK_sterling: 163,
      XK_currency: 164,
      XK_yen: 165,
      XK_brokenbar: 166,
      XK_section: 167,
      XK_diaeresis: 168,
      XK_copyright: 169,
      XK_ordfeminine: 170,
      XK_guillemotleft: 171,
      XK_notsign: 172,
      XK_hyphen: 173,
      XK_registered: 174,
      XK_macron: 175,
      XK_degree: 176,
      XK_plusminus: 177,
      XK_twosuperior: 178,
      XK_threesuperior: 179,
      XK_acute: 180,
      XK_mu: 181,
      XK_paragraph: 182,
      XK_periodcentered: 183,
      XK_cedilla: 184,
      XK_onesuperior: 185,
      XK_masculine: 186,
      XK_guillemotright: 187,
      XK_onequarter: 188,
      XK_onehalf: 189,
      XK_threequarters: 190,
      XK_questiondown: 191,
      XK_Agrave: 192,
      XK_Aacute: 193,
      XK_Acircumflex: 194,
      XK_Atilde: 195,
      XK_Adiaeresis: 196,
      XK_Aring: 197,
      XK_AE: 198,
      XK_Ccedilla: 199,
      XK_Egrave: 200,
      XK_Eacute: 201,
      XK_Ecircumflex: 202,
      XK_Ediaeresis: 203,
      XK_Igrave: 204,
      XK_Iacute: 205,
      XK_Icircumflex: 206,
      XK_Idiaeresis: 207,
      XK_ETH: 208,
      XK_Eth: 208,
      XK_Ntilde: 209,
      XK_Ograve: 210,
      XK_Oacute: 211,
      XK_Ocircumflex: 212,
      XK_Otilde: 213,
      XK_Odiaeresis: 214,
      XK_multiply: 215,
      XK_Oslash: 216,
      XK_Ooblique: 216,
      XK_Ugrave: 217,
      XK_Uacute: 218,
      XK_Ucircumflex: 219,
      XK_Udiaeresis: 220,
      XK_Yacute: 221,
      XK_THORN: 222,
      XK_Thorn: 222,
      XK_ssharp: 223,
      XK_agrave: 224,
      XK_aacute: 225,
      XK_acircumflex: 226,
      XK_atilde: 227,
      XK_adiaeresis: 228,
      XK_aring: 229,
      XK_ae: 230,
      XK_ccedilla: 231,
      XK_egrave: 232,
      XK_eacute: 233,
      XK_ecircumflex: 234,
      XK_ediaeresis: 235,
      XK_igrave: 236,
      XK_iacute: 237,
      XK_icircumflex: 238,
      XK_idiaeresis: 239,
      XK_eth: 240,
      XK_ntilde: 241,
      XK_ograve: 242,
      XK_oacute: 243,
      XK_ocircumflex: 244,
      XK_otilde: 245,
      XK_odiaeresis: 246,
      XK_division: 247,
      XK_oslash: 248,
      XK_ooblique: 248,
      XK_ugrave: 249,
      XK_uacute: 250,
      XK_ucircumflex: 251,
      XK_udiaeresis: 252,
      XK_yacute: 253,
      XK_thorn: 254,
      XK_ydiaeresis: 255,
      XK_Hangul: 65329,
      XK_Hangul_Hanja: 65332,
      XK_Hangul_Jeonja: 65336,
      XF86XK_ModeLock: 269025025,
      XF86XK_MonBrightnessUp: 269025026,
      XF86XK_MonBrightnessDown: 269025027,
      XF86XK_KbdLightOnOff: 269025028,
      XF86XK_KbdBrightnessUp: 269025029,
      XF86XK_KbdBrightnessDown: 269025030,
      XF86XK_Standby: 269025040,
      XF86XK_AudioLowerVolume: 269025041,
      XF86XK_AudioMute: 269025042,
      XF86XK_AudioRaiseVolume: 269025043,
      XF86XK_AudioPlay: 269025044,
      XF86XK_AudioStop: 269025045,
      XF86XK_AudioPrev: 269025046,
      XF86XK_AudioNext: 269025047,
      XF86XK_HomePage: 269025048,
      XF86XK_Mail: 269025049,
      XF86XK_Start: 269025050,
      XF86XK_Search: 269025051,
      XF86XK_AudioRecord: 269025052,
      XF86XK_Calculator: 269025053,
      XF86XK_Memo: 269025054,
      XF86XK_ToDoList: 269025055,
      XF86XK_Calendar: 269025056,
      XF86XK_PowerDown: 269025057,
      XF86XK_ContrastAdjust: 269025058,
      XF86XK_RockerUp: 269025059,
      XF86XK_RockerDown: 269025060,
      XF86XK_RockerEnter: 269025061,
      XF86XK_Back: 269025062,
      XF86XK_Forward: 269025063,
      XF86XK_Stop: 269025064,
      XF86XK_Refresh: 269025065,
      XF86XK_PowerOff: 269025066,
      XF86XK_WakeUp: 269025067,
      XF86XK_Eject: 269025068,
      XF86XK_ScreenSaver: 269025069,
      XF86XK_WWW: 269025070,
      XF86XK_Sleep: 269025071,
      XF86XK_Favorites: 269025072,
      XF86XK_AudioPause: 269025073,
      XF86XK_AudioMedia: 269025074,
      XF86XK_MyComputer: 269025075,
      XF86XK_VendorHome: 269025076,
      XF86XK_LightBulb: 269025077,
      XF86XK_Shop: 269025078,
      XF86XK_History: 269025079,
      XF86XK_OpenURL: 269025080,
      XF86XK_AddFavorite: 269025081,
      XF86XK_HotLinks: 269025082,
      XF86XK_BrightnessAdjust: 269025083,
      XF86XK_Finance: 269025084,
      XF86XK_Community: 269025085,
      XF86XK_AudioRewind: 269025086,
      XF86XK_BackForward: 269025087,
      XF86XK_Launch0: 269025088,
      XF86XK_Launch1: 269025089,
      XF86XK_Launch2: 269025090,
      XF86XK_Launch3: 269025091,
      XF86XK_Launch4: 269025092,
      XF86XK_Launch5: 269025093,
      XF86XK_Launch6: 269025094,
      XF86XK_Launch7: 269025095,
      XF86XK_Launch8: 269025096,
      XF86XK_Launch9: 269025097,
      XF86XK_LaunchA: 269025098,
      XF86XK_LaunchB: 269025099,
      XF86XK_LaunchC: 269025100,
      XF86XK_LaunchD: 269025101,
      XF86XK_LaunchE: 269025102,
      XF86XK_LaunchF: 269025103,
      XF86XK_ApplicationLeft: 269025104,
      XF86XK_ApplicationRight: 269025105,
      XF86XK_Book: 269025106,
      XF86XK_CD: 269025107,
      XF86XK_Calculater: 269025108,
      XF86XK_Clear: 269025109,
      XF86XK_Close: 269025110,
      XF86XK_Copy: 269025111,
      XF86XK_Cut: 269025112,
      XF86XK_Display: 269025113,
      XF86XK_DOS: 269025114,
      XF86XK_Documents: 269025115,
      XF86XK_Excel: 269025116,
      XF86XK_Explorer: 269025117,
      XF86XK_Game: 269025118,
      XF86XK_Go: 269025119,
      XF86XK_iTouch: 269025120,
      XF86XK_LogOff: 269025121,
      XF86XK_Market: 269025122,
      XF86XK_Meeting: 269025123,
      XF86XK_MenuKB: 269025125,
      XF86XK_MenuPB: 269025126,
      XF86XK_MySites: 269025127,
      XF86XK_New: 269025128,
      XF86XK_News: 269025129,
      XF86XK_OfficeHome: 269025130,
      XF86XK_Open: 269025131,
      XF86XK_Option: 269025132,
      XF86XK_Paste: 269025133,
      XF86XK_Phone: 269025134,
      XF86XK_Q: 269025136,
      XF86XK_Reply: 269025138,
      XF86XK_Reload: 269025139,
      XF86XK_RotateWindows: 269025140,
      XF86XK_RotationPB: 269025141,
      XF86XK_RotationKB: 269025142,
      XF86XK_Save: 269025143,
      XF86XK_ScrollUp: 269025144,
      XF86XK_ScrollDown: 269025145,
      XF86XK_ScrollClick: 269025146,
      XF86XK_Send: 269025147,
      XF86XK_Spell: 269025148,
      XF86XK_SplitScreen: 269025149,
      XF86XK_Support: 269025150,
      XF86XK_TaskPane: 269025151,
      XF86XK_Terminal: 269025152,
      XF86XK_Tools: 269025153,
      XF86XK_Travel: 269025154,
      XF86XK_UserPB: 269025156,
      XF86XK_User1KB: 269025157,
      XF86XK_User2KB: 269025158,
      XF86XK_Video: 269025159,
      XF86XK_WheelButton: 269025160,
      XF86XK_Word: 269025161,
      XF86XK_Xfer: 269025162,
      XF86XK_ZoomIn: 269025163,
      XF86XK_ZoomOut: 269025164,
      XF86XK_Away: 269025165,
      XF86XK_Messenger: 269025166,
      XF86XK_WebCam: 269025167,
      XF86XK_MailForward: 269025168,
      XF86XK_Pictures: 269025169,
      XF86XK_Music: 269025170,
      XF86XK_Battery: 269025171,
      XF86XK_Bluetooth: 269025172,
      XF86XK_WLAN: 269025173,
      XF86XK_UWB: 269025174,
      XF86XK_AudioForward: 269025175,
      XF86XK_AudioRepeat: 269025176,
      XF86XK_AudioRandomPlay: 269025177,
      XF86XK_Subtitle: 269025178,
      XF86XK_AudioCycleTrack: 269025179,
      XF86XK_CycleAngle: 269025180,
      XF86XK_FrameBack: 269025181,
      XF86XK_FrameForward: 269025182,
      XF86XK_Time: 269025183,
      XF86XK_Select: 269025184,
      XF86XK_View: 269025185,
      XF86XK_TopMenu: 269025186,
      XF86XK_Red: 269025187,
      XF86XK_Green: 269025188,
      XF86XK_Yellow: 269025189,
      XF86XK_Blue: 269025190,
      XF86XK_Suspend: 269025191,
      XF86XK_Hibernate: 269025192,
      XF86XK_TouchpadToggle: 269025193,
      XF86XK_TouchpadOn: 269025200,
      XF86XK_TouchpadOff: 269025201,
      XF86XK_AudioMicMute: 269025202,
      XF86XK_Switch_VT_1: 269024769,
      XF86XK_Switch_VT_2: 269024770,
      XF86XK_Switch_VT_3: 269024771,
      XF86XK_Switch_VT_4: 269024772,
      XF86XK_Switch_VT_5: 269024773,
      XF86XK_Switch_VT_6: 269024774,
      XF86XK_Switch_VT_7: 269024775,
      XF86XK_Switch_VT_8: 269024776,
      XF86XK_Switch_VT_9: 269024777,
      XF86XK_Switch_VT_10: 269024778,
      XF86XK_Switch_VT_11: 269024779,
      XF86XK_Switch_VT_12: 269024780,
      XF86XK_Ungrab: 269024800,
      XF86XK_ClearGrab: 269024801,
      XF86XK_Next_VMode: 269024802,
      XF86XK_Prev_VMode: 269024803,
      XF86XK_LogWindowTree: 269024804,
      XF86XK_LogGrabInfo: 269024805
    };
  })(zr);
  var Go = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = {
      256: 960,
      257: 992,
      258: 451,
      259: 483,
      260: 417,
      261: 433,
      262: 454,
      263: 486,
      264: 710,
      265: 742,
      266: 709,
      267: 741,
      268: 456,
      269: 488,
      270: 463,
      271: 495,
      272: 464,
      273: 496,
      274: 938,
      275: 954,
      278: 972,
      279: 1004,
      280: 458,
      281: 490,
      282: 460,
      283: 492,
      284: 728,
      285: 760,
      286: 683,
      287: 699,
      288: 725,
      289: 757,
      290: 939,
      291: 955,
      292: 678,
      293: 694,
      294: 673,
      295: 689,
      296: 933,
      297: 949,
      298: 975,
      299: 1007,
      302: 967,
      303: 999,
      304: 681,
      305: 697,
      308: 684,
      309: 700,
      310: 979,
      311: 1011,
      312: 930,
      313: 453,
      314: 485,
      315: 934,
      316: 950,
      317: 421,
      318: 437,
      321: 419,
      322: 435,
      323: 465,
      324: 497,
      325: 977,
      326: 1009,
      327: 466,
      328: 498,
      330: 957,
      331: 959,
      332: 978,
      333: 1010,
      336: 469,
      337: 501,
      338: 5052,
      339: 5053,
      340: 448,
      341: 480,
      342: 931,
      343: 947,
      344: 472,
      345: 504,
      346: 422,
      347: 438,
      348: 734,
      349: 766,
      350: 426,
      351: 442,
      352: 425,
      353: 441,
      354: 478,
      355: 510,
      356: 427,
      357: 443,
      358: 940,
      359: 956,
      360: 989,
      361: 1021,
      362: 990,
      363: 1022,
      364: 733,
      365: 765,
      366: 473,
      367: 505,
      368: 475,
      369: 507,
      370: 985,
      371: 1017,
      376: 5054,
      377: 428,
      378: 444,
      379: 431,
      380: 447,
      381: 430,
      382: 446,
      402: 2294,
      466: 16777681,
      711: 439,
      728: 418,
      729: 511,
      731: 434,
      733: 445,
      901: 1966,
      902: 1953,
      904: 1954,
      905: 1955,
      906: 1956,
      908: 1959,
      910: 1960,
      911: 1963,
      912: 1974,
      913: 1985,
      914: 1986,
      915: 1987,
      916: 1988,
      917: 1989,
      918: 1990,
      919: 1991,
      920: 1992,
      921: 1993,
      922: 1994,
      923: 1995,
      924: 1996,
      925: 1997,
      926: 1998,
      927: 1999,
      928: 2e3,
      929: 2001,
      931: 2002,
      932: 2004,
      933: 2005,
      934: 2006,
      935: 2007,
      936: 2008,
      937: 2009,
      938: 1957,
      939: 1961,
      940: 1969,
      941: 1970,
      942: 1971,
      943: 1972,
      944: 1978,
      945: 2017,
      946: 2018,
      947: 2019,
      948: 2020,
      949: 2021,
      950: 2022,
      951: 2023,
      952: 2024,
      953: 2025,
      954: 2026,
      955: 2027,
      956: 2028,
      957: 2029,
      958: 2030,
      959: 2031,
      960: 2032,
      961: 2033,
      962: 2035,
      963: 2034,
      964: 2036,
      965: 2037,
      966: 2038,
      967: 2039,
      968: 2040,
      969: 2041,
      970: 1973,
      971: 1977,
      972: 1975,
      973: 1976,
      974: 1979,
      1025: 1715,
      1026: 1713,
      1027: 1714,
      1028: 1716,
      1029: 1717,
      1030: 1718,
      1031: 1719,
      1032: 1720,
      1033: 1721,
      1034: 1722,
      1035: 1723,
      1036: 1724,
      1038: 1726,
      1039: 1727,
      1040: 1761,
      1041: 1762,
      1042: 1783,
      1043: 1767,
      1044: 1764,
      1045: 1765,
      1046: 1782,
      1047: 1786,
      1048: 1769,
      1049: 1770,
      1050: 1771,
      1051: 1772,
      1052: 1773,
      1053: 1774,
      1054: 1775,
      1055: 1776,
      1056: 1778,
      1057: 1779,
      1058: 1780,
      1059: 1781,
      1060: 1766,
      1061: 1768,
      1062: 1763,
      1063: 1790,
      1064: 1787,
      1065: 1789,
      1066: 1791,
      1067: 1785,
      1068: 1784,
      1069: 1788,
      1070: 1760,
      1071: 1777,
      1072: 1729,
      1073: 1730,
      1074: 1751,
      1075: 1735,
      1076: 1732,
      1077: 1733,
      1078: 1750,
      1079: 1754,
      1080: 1737,
      1081: 1738,
      1082: 1739,
      1083: 1740,
      1084: 1741,
      1085: 1742,
      1086: 1743,
      1087: 1744,
      1088: 1746,
      1089: 1747,
      1090: 1748,
      1091: 1749,
      1092: 1734,
      1093: 1736,
      1094: 1731,
      1095: 1758,
      1096: 1755,
      1097: 1757,
      1098: 1759,
      1099: 1753,
      1100: 1752,
      1101: 1756,
      1102: 1728,
      1103: 1745,
      1105: 1699,
      1106: 1697,
      1107: 1698,
      1108: 1700,
      1109: 1701,
      1110: 1702,
      1111: 1703,
      1112: 1704,
      1113: 1705,
      1114: 1706,
      1115: 1707,
      1116: 1708,
      1118: 1710,
      1119: 1711,
      1168: 1725,
      1169: 1709,
      1488: 3296,
      1489: 3297,
      1490: 3298,
      1491: 3299,
      1492: 3300,
      1493: 3301,
      1494: 3302,
      1495: 3303,
      1496: 3304,
      1497: 3305,
      1498: 3306,
      1499: 3307,
      1500: 3308,
      1501: 3309,
      1502: 3310,
      1503: 3311,
      1504: 3312,
      1505: 3313,
      1506: 3314,
      1507: 3315,
      1508: 3316,
      1509: 3317,
      1510: 3318,
      1511: 3319,
      1512: 3320,
      1513: 3321,
      1514: 3322,
      1548: 1452,
      1563: 1467,
      1567: 1471,
      1569: 1473,
      1570: 1474,
      1571: 1475,
      1572: 1476,
      1573: 1477,
      1574: 1478,
      1575: 1479,
      1576: 1480,
      1577: 1481,
      1578: 1482,
      1579: 1483,
      1580: 1484,
      1581: 1485,
      1582: 1486,
      1583: 1487,
      1584: 1488,
      1585: 1489,
      1586: 1490,
      1587: 1491,
      1588: 1492,
      1589: 1493,
      1590: 1494,
      1591: 1495,
      1592: 1496,
      1593: 1497,
      1594: 1498,
      1600: 1504,
      1601: 1505,
      1602: 1506,
      1603: 1507,
      1604: 1508,
      1605: 1509,
      1606: 1510,
      1607: 1511,
      1608: 1512,
      1609: 1513,
      1610: 1514,
      1611: 1515,
      1612: 1516,
      1613: 1517,
      1614: 1518,
      1615: 1519,
      1616: 1520,
      1617: 1521,
      1618: 1522,
      3585: 3489,
      3586: 3490,
      3587: 3491,
      3588: 3492,
      3589: 3493,
      3590: 3494,
      3591: 3495,
      3592: 3496,
      3593: 3497,
      3594: 3498,
      3595: 3499,
      3596: 3500,
      3597: 3501,
      3598: 3502,
      3599: 3503,
      3600: 3504,
      3601: 3505,
      3602: 3506,
      3603: 3507,
      3604: 3508,
      3605: 3509,
      3606: 3510,
      3607: 3511,
      3608: 3512,
      3609: 3513,
      3610: 3514,
      3611: 3515,
      3612: 3516,
      3613: 3517,
      3614: 3518,
      3615: 3519,
      3616: 3520,
      3617: 3521,
      3618: 3522,
      3619: 3523,
      3620: 3524,
      3621: 3525,
      3622: 3526,
      3623: 3527,
      3624: 3528,
      3625: 3529,
      3626: 3530,
      3627: 3531,
      3628: 3532,
      3629: 3533,
      3630: 3534,
      3631: 3535,
      3632: 3536,
      3633: 3537,
      3634: 3538,
      3635: 3539,
      3636: 3540,
      3637: 3541,
      3638: 3542,
      3639: 3543,
      3640: 3544,
      3641: 3545,
      3642: 3546,
      3647: 3551,
      3648: 3552,
      3649: 3553,
      3650: 3554,
      3651: 3555,
      3652: 3556,
      3653: 3557,
      3654: 3558,
      3655: 3559,
      3656: 3560,
      3657: 3561,
      3658: 3562,
      3659: 3563,
      3660: 3564,
      3661: 3565,
      3664: 3568,
      3665: 3569,
      3666: 3570,
      3667: 3571,
      3668: 3572,
      3669: 3573,
      3670: 3574,
      3671: 3575,
      3672: 3576,
      3673: 3577,
      8194: 2722,
      8195: 2721,
      8196: 2723,
      8197: 2724,
      8199: 2725,
      8200: 2726,
      8201: 2727,
      8202: 2728,
      8210: 2747,
      8211: 2730,
      8212: 2729,
      8213: 1967,
      8215: 3295,
      8216: 2768,
      8217: 2769,
      8218: 2813,
      8220: 2770,
      8221: 2771,
      8222: 2814,
      8224: 2801,
      8225: 2802,
      8226: 2790,
      8229: 2735,
      8230: 2734,
      8240: 2773,
      8242: 2774,
      8243: 2775,
      8248: 2812,
      8254: 1150,
      8361: 3839,
      8364: 8364,
      8453: 2744,
      8470: 1712,
      8471: 2811,
      8478: 2772,
      8482: 2761,
      8531: 2736,
      8532: 2737,
      8533: 2738,
      8534: 2739,
      8535: 2740,
      8536: 2741,
      8537: 2742,
      8538: 2743,
      8539: 2755,
      8540: 2756,
      8541: 2757,
      8542: 2758,
      8592: 2299,
      8593: 2300,
      8594: 2301,
      8595: 2302,
      8658: 2254,
      8660: 2253,
      8706: 2287,
      8711: 2245,
      8728: 3018,
      8730: 2262,
      8733: 2241,
      8734: 2242,
      8743: 2270,
      8744: 2271,
      8745: 2268,
      8746: 2269,
      8747: 2239,
      8756: 2240,
      8764: 2248,
      8771: 2249,
      8773: 16785992,
      8800: 2237,
      8801: 2255,
      8804: 2236,
      8805: 2238,
      8834: 2266,
      8835: 2267,
      8866: 3068,
      8867: 3036,
      8868: 3010,
      8869: 3022,
      8968: 3027,
      8970: 3012,
      8981: 2810,
      8992: 2212,
      8993: 2213,
      9109: 3020,
      9115: 2219,
      9117: 2220,
      9118: 2221,
      9120: 2222,
      9121: 2215,
      9123: 2216,
      9124: 2217,
      9126: 2218,
      9128: 2223,
      9132: 2224,
      9143: 2209,
      9146: 2543,
      9147: 2544,
      9148: 2546,
      9149: 2547,
      9225: 2530,
      9226: 2533,
      9227: 2537,
      9228: 2531,
      9229: 2532,
      9251: 2732,
      9252: 2536,
      9472: 2211,
      9474: 2214,
      9484: 2210,
      9488: 2539,
      9492: 2541,
      9496: 2538,
      9500: 2548,
      9508: 2549,
      9516: 2551,
      9524: 2550,
      9532: 2542,
      9618: 2529,
      9642: 2791,
      9643: 2785,
      9644: 2779,
      9645: 2786,
      9646: 2783,
      9647: 2767,
      9650: 2792,
      9651: 2787,
      9654: 2781,
      9655: 2765,
      9660: 2793,
      9661: 2788,
      9664: 2780,
      9665: 2764,
      9670: 2528,
      9675: 2766,
      9679: 2782,
      9702: 2784,
      9734: 2789,
      9742: 2809,
      9747: 2762,
      9756: 2794,
      9758: 2795,
      9792: 2808,
      9794: 2807,
      9827: 2796,
      9829: 2798,
      9830: 2797,
      9837: 2806,
      9839: 2805,
      10003: 2803,
      10007: 2804,
      10013: 2777,
      10016: 2800,
      10216: 2748,
      10217: 2750,
      12289: 1188,
      12290: 1185,
      12300: 1186,
      12301: 1187,
      12443: 1246,
      12444: 1247,
      12449: 1191,
      12450: 1201,
      12451: 1192,
      12452: 1202,
      12453: 1193,
      12454: 1203,
      12455: 1194,
      12456: 1204,
      12457: 1195,
      12458: 1205,
      12459: 1206,
      12461: 1207,
      12463: 1208,
      12465: 1209,
      12467: 1210,
      12469: 1211,
      12471: 1212,
      12473: 1213,
      12475: 1214,
      12477: 1215,
      12479: 1216,
      12481: 1217,
      12483: 1199,
      12484: 1218,
      12486: 1219,
      12488: 1220,
      12490: 1221,
      12491: 1222,
      12492: 1223,
      12493: 1224,
      12494: 1225,
      12495: 1226,
      12498: 1227,
      12501: 1228,
      12504: 1229,
      12507: 1230,
      12510: 1231,
      12511: 1232,
      12512: 1233,
      12513: 1234,
      12514: 1235,
      12515: 1196,
      12516: 1236,
      12517: 1197,
      12518: 1237,
      12519: 1198,
      12520: 1238,
      12521: 1239,
      12522: 1240,
      12523: 1241,
      12524: 1242,
      12525: 1243,
      12527: 1244,
      12530: 1190,
      12531: 1245,
      12539: 1189,
      12540: 1200
    };
    e.default = {
      lookup: function(r) {
        if (r >= 32 && r <= 255) return r;
        var i = t[r];
        return i !== void 0 ? i : 16777216 | r;
      }
    };
  })(Go);
  var Vo = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0, e.default = {
      8: "Backspace",
      9: "Tab",
      10: "NumpadClear",
      13: "Enter",
      16: "ShiftLeft",
      17: "ControlLeft",
      18: "AltLeft",
      19: "Pause",
      20: "CapsLock",
      21: "Lang1",
      25: "Lang2",
      27: "Escape",
      28: "Convert",
      29: "NonConvert",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      41: "Select",
      44: "PrintScreen",
      45: "Insert",
      46: "Delete",
      47: "Help",
      48: "Digit0",
      49: "Digit1",
      50: "Digit2",
      51: "Digit3",
      52: "Digit4",
      53: "Digit5",
      54: "Digit6",
      55: "Digit7",
      56: "Digit8",
      57: "Digit9",
      91: "MetaLeft",
      92: "MetaRight",
      93: "ContextMenu",
      95: "Sleep",
      96: "Numpad0",
      97: "Numpad1",
      98: "Numpad2",
      99: "Numpad3",
      100: "Numpad4",
      101: "Numpad5",
      102: "Numpad6",
      103: "Numpad7",
      104: "Numpad8",
      105: "Numpad9",
      106: "NumpadMultiply",
      107: "NumpadAdd",
      108: "NumpadDecimal",
      109: "NumpadSubtract",
      110: "NumpadDecimal",
      111: "NumpadDivide",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      124: "F13",
      125: "F14",
      126: "F15",
      127: "F16",
      128: "F17",
      129: "F18",
      130: "F19",
      131: "F20",
      132: "F21",
      133: "F22",
      134: "F23",
      135: "F24",
      144: "NumLock",
      145: "ScrollLock",
      166: "BrowserBack",
      167: "BrowserForward",
      168: "BrowserRefresh",
      169: "BrowserStop",
      170: "BrowserSearch",
      171: "BrowserFavorites",
      172: "BrowserHome",
      173: "AudioVolumeMute",
      174: "AudioVolumeDown",
      175: "AudioVolumeUp",
      176: "MediaTrackNext",
      177: "MediaTrackPrevious",
      178: "MediaStop",
      179: "MediaPlayPause",
      180: "LaunchMail",
      181: "MediaSelect",
      182: "LaunchApp1",
      183: "LaunchApp2",
      225: "AltRight"
    };
  })(Vo);
  var Zo = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0, e.default = {
      Backspace: "Backspace",
      AltLeft: "Alt",
      AltRight: "Alt",
      CapsLock: "CapsLock",
      ContextMenu: "ContextMenu",
      ControlLeft: "Control",
      ControlRight: "Control",
      Enter: "Enter",
      MetaLeft: "Meta",
      MetaRight: "Meta",
      ShiftLeft: "Shift",
      ShiftRight: "Shift",
      Tab: "Tab",
      Delete: "Delete",
      End: "End",
      Help: "Help",
      Home: "Home",
      Insert: "Insert",
      PageDown: "PageDown",
      PageUp: "PageUp",
      ArrowDown: "ArrowDown",
      ArrowLeft: "ArrowLeft",
      ArrowRight: "ArrowRight",
      ArrowUp: "ArrowUp",
      NumLock: "NumLock",
      NumpadBackspace: "Backspace",
      NumpadClear: "Clear",
      Escape: "Escape",
      F1: "F1",
      F2: "F2",
      F3: "F3",
      F4: "F4",
      F5: "F5",
      F6: "F6",
      F7: "F7",
      F8: "F8",
      F9: "F9",
      F10: "F10",
      F11: "F11",
      F12: "F12",
      F13: "F13",
      F14: "F14",
      F15: "F15",
      F16: "F16",
      F17: "F17",
      F18: "F18",
      F19: "F19",
      F20: "F20",
      F21: "F21",
      F22: "F22",
      F23: "F23",
      F24: "F24",
      F25: "F25",
      F26: "F26",
      F27: "F27",
      F28: "F28",
      F29: "F29",
      F30: "F30",
      F31: "F31",
      F32: "F32",
      F33: "F33",
      F34: "F34",
      F35: "F35",
      PrintScreen: "PrintScreen",
      ScrollLock: "ScrollLock",
      Pause: "Pause",
      BrowserBack: "BrowserBack",
      BrowserFavorites: "BrowserFavorites",
      BrowserForward: "BrowserForward",
      BrowserHome: "BrowserHome",
      BrowserRefresh: "BrowserRefresh",
      BrowserSearch: "BrowserSearch",
      BrowserStop: "BrowserStop",
      Eject: "Eject",
      LaunchApp1: "LaunchMyComputer",
      LaunchApp2: "LaunchCalendar",
      LaunchMail: "LaunchMail",
      MediaPlayPause: "MediaPlay",
      MediaStop: "MediaStop",
      MediaTrackNext: "MediaTrackNext",
      MediaTrackPrevious: "MediaTrackPrevious",
      Power: "Power",
      Sleep: "Sleep",
      AudioVolumeDown: "AudioVolumeDown",
      AudioVolumeMute: "AudioVolumeMute",
      AudioVolumeUp: "AudioVolumeUp",
      WakeUp: "WakeUp"
    };
  })(Zo);
  var qo = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = n(zr);
    function n(s) {
      return s && s.__esModule ? s : {
        default: s
      };
    }
    var r = {};
    function i(s, y) {
      if (y === void 0) throw new Error('Undefined keysym for key "' + s + '"');
      if (s in r) throw new Error('Duplicate entry for key "' + s + '"');
      r[s] = [
        y,
        y,
        y,
        y
      ];
    }
    function a(s, y, u) {
      if (y === void 0) throw new Error('Undefined keysym for key "' + s + '"');
      if (u === void 0) throw new Error('Undefined keysym for key "' + s + '"');
      if (s in r) throw new Error('Duplicate entry for key "' + s + '"');
      r[s] = [
        y,
        y,
        u,
        y
      ];
    }
    function o(s, y, u) {
      if (y === void 0) throw new Error('Undefined keysym for key "' + s + '"');
      if (u === void 0) throw new Error('Undefined keysym for key "' + s + '"');
      if (s in r) throw new Error('Duplicate entry for key "' + s + '"');
      r[s] = [
        y,
        y,
        y,
        u
      ];
    }
    a("Alt", t.default.XK_Alt_L, t.default.XK_Alt_R), i("AltGraph", t.default.XK_ISO_Level3_Shift), i("CapsLock", t.default.XK_Caps_Lock), a("Control", t.default.XK_Control_L, t.default.XK_Control_R), a("Meta", t.default.XK_Super_L, t.default.XK_Super_R), i("NumLock", t.default.XK_Num_Lock), i("ScrollLock", t.default.XK_Scroll_Lock), a("Shift", t.default.XK_Shift_L, t.default.XK_Shift_R), o("Enter", t.default.XK_Return, t.default.XK_KP_Enter), i("Tab", t.default.XK_Tab), o(" ", t.default.XK_space, t.default.XK_KP_Space), o("ArrowDown", t.default.XK_Down, t.default.XK_KP_Down), o("ArrowLeft", t.default.XK_Left, t.default.XK_KP_Left), o("ArrowRight", t.default.XK_Right, t.default.XK_KP_Right), o("ArrowUp", t.default.XK_Up, t.default.XK_KP_Up), o("End", t.default.XK_End, t.default.XK_KP_End), o("Home", t.default.XK_Home, t.default.XK_KP_Home), o("PageDown", t.default.XK_Next, t.default.XK_KP_Next), o("PageUp", t.default.XK_Prior, t.default.XK_KP_Prior), i("Backspace", t.default.XK_BackSpace), o("Clear", t.default.XK_Clear, t.default.XK_KP_Begin), i("Copy", t.default.XF86XK_Copy), i("Cut", t.default.XF86XK_Cut), o("Delete", t.default.XK_Delete, t.default.XK_KP_Delete), o("Insert", t.default.XK_Insert, t.default.XK_KP_Insert), i("Paste", t.default.XF86XK_Paste), i("Redo", t.default.XK_Redo), i("Undo", t.default.XK_Undo), i("Cancel", t.default.XK_Cancel), i("ContextMenu", t.default.XK_Menu), i("Escape", t.default.XK_Escape), i("Execute", t.default.XK_Execute), i("Find", t.default.XK_Find), i("Help", t.default.XK_Help), i("Pause", t.default.XK_Pause), i("Select", t.default.XK_Select), i("ZoomIn", t.default.XF86XK_ZoomIn), i("ZoomOut", t.default.XF86XK_ZoomOut), i("BrightnessDown", t.default.XF86XK_MonBrightnessDown), i("BrightnessUp", t.default.XF86XK_MonBrightnessUp), i("Eject", t.default.XF86XK_Eject), i("LogOff", t.default.XF86XK_LogOff), i("Power", t.default.XF86XK_PowerOff), i("PowerOff", t.default.XF86XK_PowerDown), i("PrintScreen", t.default.XK_Print), i("Hibernate", t.default.XF86XK_Hibernate), i("Standby", t.default.XF86XK_Standby), i("WakeUp", t.default.XF86XK_WakeUp), i("AllCandidates", t.default.XK_MultipleCandidate), i("Alphanumeric", t.default.XK_Eisu_toggle), i("CodeInput", t.default.XK_Codeinput), i("Compose", t.default.XK_Multi_key), i("Convert", t.default.XK_Henkan), i("GroupFirst", t.default.XK_ISO_First_Group), i("GroupLast", t.default.XK_ISO_Last_Group), i("GroupNext", t.default.XK_ISO_Next_Group), i("GroupPrevious", t.default.XK_ISO_Prev_Group), i("NonConvert", t.default.XK_Muhenkan), i("PreviousCandidate", t.default.XK_PreviousCandidate), i("SingleCandidate", t.default.XK_SingleCandidate), i("HangulMode", t.default.XK_Hangul), i("HanjaMode", t.default.XK_Hangul_Hanja), i("JunjaMode", t.default.XK_Hangul_Jeonja), i("Eisu", t.default.XK_Eisu_toggle), i("Hankaku", t.default.XK_Hankaku), i("Hiragana", t.default.XK_Hiragana), i("HiraganaKatakana", t.default.XK_Hiragana_Katakana), i("KanaMode", t.default.XK_Kana_Shift), i("KanjiMode", t.default.XK_Kanji), i("Katakana", t.default.XK_Katakana), i("Romaji", t.default.XK_Romaji), i("Zenkaku", t.default.XK_Zenkaku), i("ZenkakuHankaku", t.default.XK_Zenkaku_Hankaku), i("F1", t.default.XK_F1), i("F2", t.default.XK_F2), i("F3", t.default.XK_F3), i("F4", t.default.XK_F4), i("F5", t.default.XK_F5), i("F6", t.default.XK_F6), i("F7", t.default.XK_F7), i("F8", t.default.XK_F8), i("F9", t.default.XK_F9), i("F10", t.default.XK_F10), i("F11", t.default.XK_F11), i("F12", t.default.XK_F12), i("F13", t.default.XK_F13), i("F14", t.default.XK_F14), i("F15", t.default.XK_F15), i("F16", t.default.XK_F16), i("F17", t.default.XK_F17), i("F18", t.default.XK_F18), i("F19", t.default.XK_F19), i("F20", t.default.XK_F20), i("F21", t.default.XK_F21), i("F22", t.default.XK_F22), i("F23", t.default.XK_F23), i("F24", t.default.XK_F24), i("F25", t.default.XK_F25), i("F26", t.default.XK_F26), i("F27", t.default.XK_F27), i("F28", t.default.XK_F28), i("F29", t.default.XK_F29), i("F30", t.default.XK_F30), i("F31", t.default.XK_F31), i("F32", t.default.XK_F32), i("F33", t.default.XK_F33), i("F34", t.default.XK_F34), i("F35", t.default.XK_F35), i("Close", t.default.XF86XK_Close), i("MailForward", t.default.XF86XK_MailForward), i("MailReply", t.default.XF86XK_Reply), i("MailSend", t.default.XF86XK_Send), i("MediaFastForward", t.default.XF86XK_AudioForward), i("MediaPause", t.default.XF86XK_AudioPause), i("MediaPlay", t.default.XF86XK_AudioPlay), i("MediaRecord", t.default.XF86XK_AudioRecord), i("MediaRewind", t.default.XF86XK_AudioRewind), i("MediaStop", t.default.XF86XK_AudioStop), i("MediaTrackNext", t.default.XF86XK_AudioNext), i("MediaTrackPrevious", t.default.XF86XK_AudioPrev), i("New", t.default.XF86XK_New), i("Open", t.default.XF86XK_Open), i("Print", t.default.XK_Print), i("Save", t.default.XF86XK_Save), i("SpellCheck", t.default.XF86XK_Spell), i("AudioVolumeDown", t.default.XF86XK_AudioLowerVolume), i("AudioVolumeUp", t.default.XF86XK_AudioRaiseVolume), i("AudioVolumeMute", t.default.XF86XK_AudioMute), i("MicrophoneVolumeMute", t.default.XF86XK_AudioMicMute), i("LaunchApplication1", t.default.XF86XK_MyComputer), i("LaunchApplication2", t.default.XF86XK_Calculator), i("LaunchCalendar", t.default.XF86XK_Calendar), i("LaunchMail", t.default.XF86XK_Mail), i("LaunchMediaPlayer", t.default.XF86XK_AudioMedia), i("LaunchMusicPlayer", t.default.XF86XK_Music), i("LaunchPhone", t.default.XF86XK_Phone), i("LaunchScreenSaver", t.default.XF86XK_ScreenSaver), i("LaunchSpreadsheet", t.default.XF86XK_Excel), i("LaunchWebBrowser", t.default.XF86XK_WWW), i("LaunchWebCam", t.default.XF86XK_WebCam), i("LaunchWordProcessor", t.default.XF86XK_Word), i("BrowserBack", t.default.XF86XK_Back), i("BrowserFavorites", t.default.XF86XK_Favorites), i("BrowserForward", t.default.XF86XK_Forward), i("BrowserHome", t.default.XF86XK_HomePage), i("BrowserRefresh", t.default.XF86XK_Refresh), i("BrowserSearch", t.default.XF86XK_Search), i("BrowserStop", t.default.XF86XK_Stop), i("Dimmer", t.default.XF86XK_BrightnessAdjust), i("MediaAudioTrack", t.default.XF86XK_AudioCycleTrack), i("RandomToggle", t.default.XF86XK_AudioRandomPlay), i("SplitScreenToggle", t.default.XF86XK_SplitScreen), i("Subtitle", t.default.XF86XK_Subtitle), i("VideoModeNext", t.default.XF86XK_Next_VMode), o("=", t.default.XK_equal, t.default.XK_KP_Equal), o("+", t.default.XK_plus, t.default.XK_KP_Add), o("-", t.default.XK_minus, t.default.XK_KP_Subtract), o("*", t.default.XK_asterisk, t.default.XK_KP_Multiply), o("/", t.default.XK_slash, t.default.XK_KP_Divide), o(".", t.default.XK_period, t.default.XK_KP_Decimal), o(",", t.default.XK_comma, t.default.XK_KP_Separator), o("0", t.default.XK_0, t.default.XK_KP_0), o("1", t.default.XK_1, t.default.XK_KP_1), o("2", t.default.XK_2, t.default.XK_KP_2), o("3", t.default.XK_3, t.default.XK_KP_3), o("4", t.default.XK_4, t.default.XK_KP_4), o("5", t.default.XK_5, t.default.XK_KP_5), o("6", t.default.XK_6, t.default.XK_KP_6), o("7", t.default.XK_7, t.default.XK_KP_7), o("8", t.default.XK_8, t.default.XK_KP_8), o("9", t.default.XK_9, t.default.XK_KP_9), e.default = r;
  })(qo);
  function ti(e) {
    "@babel/helpers - typeof";
    return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, ti(e);
  }
  Object.defineProperty(Wr, "__esModule", {
    value: true
  });
  Wr.getKey = Jo;
  Wr.getKeycode = Ar;
  Wr.getKeysym = Pl;
  var Er = Gr(zr), Cl = Gr(Go), wa = Gr(Vo), ka = Gr(Zo), Sa = Gr(qo), Yo = Al(Ae);
  function $o(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return ($o = function(i) {
      return i ? n : t;
    })(e);
  }
  function Al(e, t) {
    if (e && e.__esModule) return e;
    if (e === null || ti(e) != "object" && typeof e != "function") return {
      default: e
    };
    var n = $o(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
    }
    return r.default = e, n && n.set(e, r), r;
  }
  function Gr(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function Ar(e) {
    if (e.code) {
      switch (e.code) {
        case "OSLeft":
          return "MetaLeft";
        case "OSRight":
          return "MetaRight";
      }
      return e.code;
    }
    if (e.keyCode in wa.default) {
      var t = wa.default[e.keyCode];
      if (Yo.isMac() && t === "ContextMenu" && (t = "MetaRight"), e.location === 2) switch (t) {
        case "ShiftLeft":
          return "ShiftRight";
        case "ControlLeft":
          return "ControlRight";
        case "AltLeft":
          return "AltRight";
      }
      if (e.location === 3) switch (t) {
        case "Delete":
          return "NumpadDecimal";
        case "Insert":
          return "Numpad0";
        case "End":
          return "Numpad1";
        case "ArrowDown":
          return "Numpad2";
        case "PageDown":
          return "Numpad3";
        case "ArrowLeft":
          return "Numpad4";
        case "ArrowRight":
          return "Numpad6";
        case "Home":
          return "Numpad7";
        case "ArrowUp":
          return "Numpad8";
        case "PageUp":
          return "Numpad9";
        case "Enter":
          return "NumpadEnter";
      }
      return t;
    }
    return "Unidentified";
  }
  function Jo(e) {
    if (e.key !== void 0 && e.key !== "Unidentified") {
      switch (e.key) {
        case "OS":
          return "Meta";
        case "LaunchMyComputer":
          return "LaunchApplication1";
        case "LaunchCalculator":
          return "LaunchApplication2";
      }
      switch (e.key) {
        case "UIKeyInputUpArrow":
          return "ArrowUp";
        case "UIKeyInputDownArrow":
          return "ArrowDown";
        case "UIKeyInputLeftArrow":
          return "ArrowLeft";
        case "UIKeyInputRightArrow":
          return "ArrowRight";
        case "UIKeyInputEscape":
          return "Escape";
      }
      return e.key === "\0" && e.code === "NumpadDecimal" ? "Delete" : e.key;
    }
    var t = Ar(e);
    return t in ka.default ? ka.default[t] : e.charCode ? String.fromCharCode(e.charCode) : "Unidentified";
  }
  function Pl(e) {
    var t = Jo(e);
    if (t === "Unidentified") return null;
    if (t in Sa.default) {
      var n = e.location;
      if (t === "Meta" && n === 0 && (n = 2), t === "Clear" && n === 3) {
        var r = Ar(e);
        r === "NumLock" && (n = 0);
      }
      if ((n === void 0 || n > 3) && (n = 0), t === "Meta") {
        var i = Ar(e);
        if (i === "AltLeft") return Er.default.XK_Meta_L;
        if (i === "AltRight") return Er.default.XK_Meta_R;
      }
      if (t === "Clear") {
        var a = Ar(e);
        if (a === "NumLock") return Er.default.XK_Num_Lock;
      }
      if (Yo.isWindows()) switch (t) {
        case "Zenkaku":
        case "Hankaku":
          return Er.default.XK_Zenkaku_Hankaku;
        case "Romaji":
        case "KanaMode":
          return Er.default.XK_Romaji;
      }
      return Sa.default[t][n];
    }
    if (t.length !== 1) return null;
    var o = t.charCodeAt();
    return o ? Cl.default.lookup(o) : null;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = y(Re), n = ar, r = y(Wr), i = o(zr), a = y(Ae);
    function o(d) {
      return d && d.__esModule ? d : {
        default: d
      };
    }
    function s(d) {
      if (typeof WeakMap != "function") return null;
      var f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
      return (s = function(K) {
        return K ? h : f;
      })(d);
    }
    function y(d, f) {
      if (d && d.__esModule) return d;
      if (d === null || u(d) != "object" && typeof d != "function") return {
        default: d
      };
      var h = s(f);
      if (h && h.has(d)) return h.get(d);
      var c = {
        __proto__: null
      }, K = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var x in d) if (x !== "default" && {}.hasOwnProperty.call(d, x)) {
        var F = K ? Object.getOwnPropertyDescriptor(d, x) : null;
        F && (F.get || F.set) ? Object.defineProperty(c, x, F) : c[x] = d[x];
      }
      return c.default = d, h && h.set(d, c), c;
    }
    function u(d) {
      "@babel/helpers - typeof";
      return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
      }, u(d);
    }
    function l(d, f) {
      if (!(d instanceof f)) throw new TypeError("Cannot call a class as a function");
    }
    function S(d, f) {
      for (var h = 0; h < f.length; h++) {
        var c = f[h];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(d, g(c.key), c);
      }
    }
    function X(d, f, h) {
      return f && S(d.prototype, f), Object.defineProperty(d, "prototype", {
        writable: false
      }), d;
    }
    function g(d) {
      var f = b(d, "string");
      return u(f) == "symbol" ? f : f + "";
    }
    function b(d, f) {
      if (u(d) != "object" || !d) return d;
      var h = d[Symbol.toPrimitive];
      if (h !== void 0) {
        var c = h.call(d, f);
        if (u(c) != "object") return c;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(d);
    }
    e.default = function() {
      function d(f) {
        l(this, d), this._target = f || null, this._keyDownList = {}, this._altGrArmed = false, this._eventHandlers = {
          keyup: this._handleKeyUp.bind(this),
          keydown: this._handleKeyDown.bind(this),
          blur: this._allKeysUp.bind(this)
        }, this.onkeyevent = function() {
        };
      }
      return X(d, [
        {
          key: "_sendKeyEvent",
          value: function(h, c, K) {
            var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
            if (K) this._keyDownList[c] = h;
            else {
              if (!(c in this._keyDownList)) return;
              delete this._keyDownList[c];
            }
            t.Debug("onkeyevent " + (K ? "down" : "up") + ", keysym: " + h, ", code: " + c + ", numlock: " + x + ", capslock: " + F), this.onkeyevent(h, c, K, x, F);
          }
        },
        {
          key: "_getKeyCode",
          value: function(h) {
            var c = r.getKeycode(h);
            if (c !== "Unidentified") return c;
            if (h.keyCode && h.keyCode !== 229) return "Platform" + h.keyCode;
            if (h.keyIdentifier) {
              if (h.keyIdentifier.substr(0, 2) !== "U+") return h.keyIdentifier;
              var K = parseInt(h.keyIdentifier.substr(2), 16), x = String.fromCharCode(K).toUpperCase();
              return "Platform" + x.charCodeAt();
            }
            return "Unidentified";
          }
        },
        {
          key: "_handleKeyDown",
          value: function(h) {
            var c = this._getKeyCode(h), K = r.getKeysym(h), x = h.getModifierState("NumLock"), F = h.getModifierState("CapsLock");
            if ((a.isMac() || a.isIOS()) && (x = null), this._altGrArmed && (this._altGrArmed = false, clearTimeout(this._altGrTimeout), c === "AltRight" && h.timeStamp - this._altGrCtrlTime < 50 ? K = i.default.XK_ISO_Level3_Shift : this._sendKeyEvent(i.default.XK_Control_L, "ControlLeft", true, x, F)), c === "Unidentified") {
              K && (this._sendKeyEvent(K, c, true, x, F), this._sendKeyEvent(K, c, false, x, F)), (0, n.stopEvent)(h);
              return;
            }
            if (a.isMac() || a.isIOS()) switch (K) {
              case i.default.XK_Super_L:
                K = i.default.XK_Alt_L;
                break;
              case i.default.XK_Super_R:
                K = i.default.XK_Super_L;
                break;
              case i.default.XK_Alt_L:
                K = i.default.XK_Mode_switch;
                break;
              case i.default.XK_Alt_R:
                K = i.default.XK_ISO_Level3_Shift;
                break;
            }
            if (c in this._keyDownList && (K = this._keyDownList[c]), (a.isMac() || a.isIOS()) && h.metaKey && c !== "MetaLeft" && c !== "MetaRight") {
              this._sendKeyEvent(K, c, true, x, F), this._sendKeyEvent(K, c, false, x, F), (0, n.stopEvent)(h);
              return;
            }
            if ((a.isMac() || a.isIOS()) && c === "CapsLock") {
              this._sendKeyEvent(i.default.XK_Caps_Lock, "CapsLock", true, x, F), this._sendKeyEvent(i.default.XK_Caps_Lock, "CapsLock", false, x, F), (0, n.stopEvent)(h);
              return;
            }
            var k = [
              i.default.XK_Zenkaku_Hankaku,
              i.default.XK_Eisu_toggle,
              i.default.XK_Katakana,
              i.default.XK_Hiragana,
              i.default.XK_Romaji
            ];
            if (a.isWindows() && k.includes(K)) {
              this._sendKeyEvent(K, c, true, x, F), this._sendKeyEvent(K, c, false, x, F), (0, n.stopEvent)(h);
              return;
            }
            if ((0, n.stopEvent)(h), c === "ControlLeft" && a.isWindows() && !("ControlLeft" in this._keyDownList)) {
              this._altGrArmed = true, this._altGrTimeout = setTimeout(this._interruptAltGrSequence.bind(this), 100), this._altGrCtrlTime = h.timeStamp;
              return;
            }
            this._sendKeyEvent(K, c, true, x, F);
          }
        },
        {
          key: "_handleKeyUp",
          value: function(h) {
            (0, n.stopEvent)(h);
            var c = this._getKeyCode(h);
            if (this._interruptAltGrSequence(), (a.isMac() || a.isIOS()) && c === "CapsLock") {
              this._sendKeyEvent(i.default.XK_Caps_Lock, "CapsLock", true), this._sendKeyEvent(i.default.XK_Caps_Lock, "CapsLock", false);
              return;
            }
            this._sendKeyEvent(this._keyDownList[c], c, false), a.isWindows() && (c === "ShiftLeft" || c === "ShiftRight") && ("ShiftRight" in this._keyDownList && this._sendKeyEvent(this._keyDownList.ShiftRight, "ShiftRight", false), "ShiftLeft" in this._keyDownList && this._sendKeyEvent(this._keyDownList.ShiftLeft, "ShiftLeft", false));
          }
        },
        {
          key: "_interruptAltGrSequence",
          value: function() {
            this._altGrArmed && (this._altGrArmed = false, clearTimeout(this._altGrTimeout), this._sendKeyEvent(i.default.XK_Control_L, "ControlLeft", true));
          }
        },
        {
          key: "_allKeysUp",
          value: function() {
            t.Debug(">> Keyboard.allKeysUp"), this._interruptAltGrSequence();
            for (var h in this._keyDownList) this._sendKeyEvent(this._keyDownList[h], h, false);
            t.Debug("<< Keyboard.allKeysUp");
          }
        },
        {
          key: "grab",
          value: function() {
            this._target.addEventListener("keydown", this._eventHandlers.keydown), this._target.addEventListener("keyup", this._eventHandlers.keyup), window.addEventListener("blur", this._eventHandlers.blur);
          }
        },
        {
          key: "ungrab",
          value: function() {
            this._target.removeEventListener("keydown", this._eventHandlers.keydown), this._target.removeEventListener("keyup", this._eventHandlers.keyup), window.removeEventListener("blur", this._eventHandlers.blur), this._allKeysUp();
          }
        }
      ]);
    }();
  })(zo);
  var es = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(k) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
        return typeof w;
      } : function(w) {
        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
      }, t(k);
    }
    function n(k, w) {
      if (!(k instanceof w)) throw new TypeError("Cannot call a class as a function");
    }
    function r(k, w) {
      for (var C = 0; C < w.length; C++) {
        var A = w[C];
        A.enumerable = A.enumerable || false, A.configurable = true, "value" in A && (A.writable = true), Object.defineProperty(k, a(A.key), A);
      }
    }
    function i(k, w, C) {
      return w && r(k.prototype, w), Object.defineProperty(k, "prototype", {
        writable: false
      }), k;
    }
    function a(k) {
      var w = o(k, "string");
      return t(w) == "symbol" ? w : w + "";
    }
    function o(k, w) {
      if (t(k) != "object" || !k) return k;
      var C = k[Symbol.toPrimitive];
      if (C !== void 0) {
        var A = C.call(k, w);
        if (t(A) != "object") return A;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(k);
    }
    var s = 0, y = 1, u = 2, l = 4, S = 8, X = 16, g = 32, b = 64, d = 127, f = 50, h = 90, c = 250, K = 1e3, x = 1e3, F = 50;
    e.default = function() {
      function k() {
        n(this, k), this._target = null, this._state = d, this._tracked = [], this._ignored = [], this._waitingRelease = false, this._releaseStart = 0, this._longpressTimeoutId = null, this._twoTouchTimeoutId = null, this._boundEventHandler = this._eventHandler.bind(this);
      }
      return i(k, [
        {
          key: "attach",
          value: function(C) {
            this.detach(), this._target = C, this._target.addEventListener("touchstart", this._boundEventHandler), this._target.addEventListener("touchmove", this._boundEventHandler), this._target.addEventListener("touchend", this._boundEventHandler), this._target.addEventListener("touchcancel", this._boundEventHandler);
          }
        },
        {
          key: "detach",
          value: function() {
            this._target && (this._stopLongpressTimeout(), this._stopTwoTouchTimeout(), this._target.removeEventListener("touchstart", this._boundEventHandler), this._target.removeEventListener("touchmove", this._boundEventHandler), this._target.removeEventListener("touchend", this._boundEventHandler), this._target.removeEventListener("touchcancel", this._boundEventHandler), this._target = null);
          }
        },
        {
          key: "_eventHandler",
          value: function(C) {
            var A;
            switch (C.stopPropagation(), C.preventDefault(), C.type) {
              case "touchstart":
                A = this._touchStart;
                break;
              case "touchmove":
                A = this._touchMove;
                break;
              case "touchend":
              case "touchcancel":
                A = this._touchEnd;
                break;
            }
            for (var O = 0; O < C.changedTouches.length; O++) {
              var I = C.changedTouches[O];
              A.call(this, I.identifier, I.clientX, I.clientY);
            }
          }
        },
        {
          key: "_touchStart",
          value: function(C, A, O) {
            if (this._hasDetectedGesture() || this._state === s) {
              this._ignored.push(C);
              return;
            }
            if (this._tracked.length > 0 && Date.now() - this._tracked[0].started > c) {
              this._state = s, this._ignored.push(C);
              return;
            }
            if (this._waitingRelease) {
              this._state = s, this._ignored.push(C);
              return;
            }
            switch (this._tracked.push({
              id: C,
              started: Date.now(),
              active: true,
              firstX: A,
              firstY: O,
              lastX: A,
              lastY: O,
              angle: 0
            }), this._tracked.length) {
              case 1:
                this._startLongpressTimeout();
                break;
              case 2:
                this._state &= -26, this._stopLongpressTimeout();
                break;
              case 3:
                this._state &= -99;
                break;
              default:
                this._state = s;
            }
          }
        },
        {
          key: "_touchMove",
          value: function(C, A, O) {
            var I = this._tracked.find(function(p) {
              return p.id === C;
            });
            if (I !== void 0) {
              I.lastX = A, I.lastY = O;
              var Z = A - I.firstX, q = O - I.firstY;
              if ((I.firstX !== I.lastX || I.firstY !== I.lastY) && (I.angle = Math.atan2(q, Z) * 180 / Math.PI), !this._hasDetectedGesture()) {
                if (Math.hypot(Z, q) < f) return;
                if (this._state &= -24, this._stopLongpressTimeout(), this._tracked.length !== 1 && (this._state &= ~S), this._tracked.length !== 2 && (this._state &= -97), this._tracked.length === 2) {
                  var $ = this._tracked.find(function(p) {
                    return p.id !== C;
                  }), ne = Math.hypot($.firstX - $.lastX, $.firstY - $.lastY);
                  if (ne > f) {
                    var E = Math.abs(I.angle - $.angle);
                    E = Math.abs((E + 180) % 360 - 180), E > h ? this._state &= ~g : this._state &= ~b, this._isTwoTouchTimeoutRunning() && this._stopTwoTouchTimeout();
                  } else this._isTwoTouchTimeoutRunning() || this._startTwoTouchTimeout();
                }
                if (!this._hasDetectedGesture()) return;
                this._pushEvent("gesturestart");
              }
              this._pushEvent("gesturemove");
            }
          }
        },
        {
          key: "_touchEnd",
          value: function(C, A, O) {
            if (this._ignored.indexOf(C) !== -1) {
              this._ignored.splice(this._ignored.indexOf(C), 1), this._ignored.length === 0 && this._tracked.length === 0 && (this._state = d, this._waitingRelease = false);
              return;
            }
            if (!this._hasDetectedGesture() && this._isTwoTouchTimeoutRunning() && (this._stopTwoTouchTimeout(), this._state = s), !this._hasDetectedGesture() && (this._state &= -105, this._state &= ~X, this._stopLongpressTimeout(), !this._waitingRelease)) switch (this._releaseStart = Date.now(), this._waitingRelease = true, this._tracked.length) {
              case 1:
                this._state &= -7;
                break;
              case 2:
                this._state &= -6;
                break;
            }
            if (this._waitingRelease) {
              Date.now() - this._releaseStart > c && (this._state = s), this._tracked.some(function(q) {
                return Date.now() - q.started > K;
              }) && (this._state = s);
              var I = this._tracked.find(function(q) {
                return q.id === C;
              });
              if (I.active = false, this._hasDetectedGesture()) this._pushEvent("gesturestart");
              else if (this._state !== s) return;
            }
            this._hasDetectedGesture() && this._pushEvent("gestureend");
            for (var Z = 0; Z < this._tracked.length; Z++) this._tracked[Z].active && this._ignored.push(this._tracked[Z].id);
            this._tracked = [], this._state = s, this._ignored.indexOf(C) !== -1 && this._ignored.splice(this._ignored.indexOf(C), 1), this._ignored.length === 0 && (this._state = d, this._waitingRelease = false);
          }
        },
        {
          key: "_hasDetectedGesture",
          value: function() {
            return !(this._state === s || this._state & this._state - 1 || this._state & (y | u | l) && this._tracked.some(function(C) {
              return C.active;
            }));
          }
        },
        {
          key: "_startLongpressTimeout",
          value: function() {
            var C = this;
            this._stopLongpressTimeout(), this._longpressTimeoutId = setTimeout(function() {
              return C._longpressTimeout();
            }, x);
          }
        },
        {
          key: "_stopLongpressTimeout",
          value: function() {
            clearTimeout(this._longpressTimeoutId), this._longpressTimeoutId = null;
          }
        },
        {
          key: "_longpressTimeout",
          value: function() {
            if (this._hasDetectedGesture()) throw new Error("A longpress gesture failed, conflict with a different gesture");
            this._state = X, this._pushEvent("gesturestart");
          }
        },
        {
          key: "_startTwoTouchTimeout",
          value: function() {
            var C = this;
            this._stopTwoTouchTimeout(), this._twoTouchTimeoutId = setTimeout(function() {
              return C._twoTouchTimeout();
            }, F);
          }
        },
        {
          key: "_stopTwoTouchTimeout",
          value: function() {
            clearTimeout(this._twoTouchTimeoutId), this._twoTouchTimeoutId = null;
          }
        },
        {
          key: "_isTwoTouchTimeoutRunning",
          value: function() {
            return this._twoTouchTimeoutId !== null;
          }
        },
        {
          key: "_twoTouchTimeout",
          value: function() {
            if (this._tracked.length === 0) throw new Error("A pinch or two drag gesture failed, no tracked touches");
            var C = this._getAverageMovement(), A = Math.abs(C.x), O = Math.abs(C.y), I = this._getAverageDistance(), Z = Math.abs(Math.hypot(I.first.x, I.first.y) - Math.hypot(I.last.x, I.last.y));
            O < Z && A < Z ? this._state = b : this._state = g, this._pushEvent("gesturestart"), this._pushEvent("gesturemove");
          }
        },
        {
          key: "_pushEvent",
          value: function(C) {
            var A = {
              type: this._stateToGesture(this._state)
            }, O = this._getPosition(), I = O.last;
            switch (C === "gesturestart" && (I = O.first), this._state) {
              case g:
              case b:
                I = O.first;
                break;
            }
            if (A.clientX = I.x, A.clientY = I.y, this._state === b) {
              var Z = this._getAverageDistance();
              C === "gesturestart" ? (A.magnitudeX = Z.first.x, A.magnitudeY = Z.first.y) : (A.magnitudeX = Z.last.x, A.magnitudeY = Z.last.y);
            } else if (this._state === g) if (C === "gesturestart") A.magnitudeX = 0, A.magnitudeY = 0;
            else {
              var q = this._getAverageMovement();
              A.magnitudeX = q.x, A.magnitudeY = q.y;
            }
            var $ = new CustomEvent(C, {
              detail: A
            });
            this._target.dispatchEvent($);
          }
        },
        {
          key: "_stateToGesture",
          value: function(C) {
            switch (C) {
              case y:
                return "onetap";
              case u:
                return "twotap";
              case l:
                return "threetap";
              case S:
                return "drag";
              case X:
                return "longpress";
              case g:
                return "twodrag";
              case b:
                return "pinch";
            }
            throw new Error("Unknown gesture state: " + C);
          }
        },
        {
          key: "_getPosition",
          value: function() {
            if (this._tracked.length === 0) throw new Error("Failed to get gesture position, no tracked touches");
            for (var C = this._tracked.length, A = 0, O = 0, I = 0, Z = 0, q = 0; q < this._tracked.length; q++) A += this._tracked[q].firstX, O += this._tracked[q].firstY, I += this._tracked[q].lastX, Z += this._tracked[q].lastY;
            return {
              first: {
                x: A / C,
                y: O / C
              },
              last: {
                x: I / C,
                y: Z / C
              }
            };
          }
        },
        {
          key: "_getAverageMovement",
          value: function() {
            if (this._tracked.length === 0) throw new Error("Failed to get gesture movement, no tracked touches");
            var C, A;
            C = A = 0;
            for (var O = this._tracked.length, I = 0; I < this._tracked.length; I++) C += this._tracked[I].lastX - this._tracked[I].firstX, A += this._tracked[I].lastY - this._tracked[I].firstY;
            return {
              x: C / O,
              y: A / O
            };
          }
        },
        {
          key: "_getAverageDistance",
          value: function() {
            if (this._tracked.length === 0) throw new Error("Failed to get gesture distance, no tracked touches");
            var C = this._tracked[0], A = this._tracked[this._tracked.length - 1], O = Math.abs(A.firstX - C.firstX), I = Math.abs(A.firstY - C.firstY), Z = Math.abs(A.lastX - C.lastX), q = Math.abs(A.lastY - C.lastY);
            return {
              first: {
                x: O,
                y: I
              },
              last: {
                x: Z,
                y: q
              }
            };
          }
        }
      ]);
    }();
  })(es);
  var ts = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = Ae;
    function n(u) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
        return typeof l;
      } : function(l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
      }, n(u);
    }
    function r(u, l) {
      if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
    }
    function i(u, l) {
      for (var S = 0; S < l.length; S++) {
        var X = l[S];
        X.enumerable = X.enumerable || false, X.configurable = true, "value" in X && (X.writable = true), Object.defineProperty(u, o(X.key), X);
      }
    }
    function a(u, l, S) {
      return l && i(u.prototype, l), Object.defineProperty(u, "prototype", {
        writable: false
      }), u;
    }
    function o(u) {
      var l = s(u, "string");
      return n(l) == "symbol" ? l : l + "";
    }
    function s(u, l) {
      if (n(u) != "object" || !u) return u;
      var S = u[Symbol.toPrimitive];
      if (S !== void 0) {
        var X = S.call(u, l);
        if (n(X) != "object") return X;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    }
    var y = !t.supportsCursorURIs || t.isTouchDevice;
    e.default = function() {
      function u() {
        r(this, u), this._target = null, this._canvas = document.createElement("canvas"), y && (this._canvas.style.position = "fixed", this._canvas.style.zIndex = "65535", this._canvas.style.pointerEvents = "none", this._canvas.style.userSelect = "none", this._canvas.style.WebkitUserSelect = "none", this._canvas.style.visibility = "hidden"), this._position = {
          x: 0,
          y: 0
        }, this._hotSpot = {
          x: 0,
          y: 0
        }, this._eventHandlers = {
          mouseover: this._handleMouseOver.bind(this),
          mouseleave: this._handleMouseLeave.bind(this),
          mousemove: this._handleMouseMove.bind(this),
          mouseup: this._handleMouseUp.bind(this)
        };
      }
      return a(u, [
        {
          key: "attach",
          value: function(S) {
            if (this._target && this.detach(), this._target = S, y) {
              document.body.appendChild(this._canvas);
              var X = {
                capture: true,
                passive: true
              };
              this._target.addEventListener("mouseover", this._eventHandlers.mouseover, X), this._target.addEventListener("mouseleave", this._eventHandlers.mouseleave, X), this._target.addEventListener("mousemove", this._eventHandlers.mousemove, X), this._target.addEventListener("mouseup", this._eventHandlers.mouseup, X);
            }
            this.clear();
          }
        },
        {
          key: "detach",
          value: function() {
            if (this._target) {
              if (y) {
                var S = {
                  capture: true,
                  passive: true
                };
                this._target.removeEventListener("mouseover", this._eventHandlers.mouseover, S), this._target.removeEventListener("mouseleave", this._eventHandlers.mouseleave, S), this._target.removeEventListener("mousemove", this._eventHandlers.mousemove, S), this._target.removeEventListener("mouseup", this._eventHandlers.mouseup, S), document.contains(this._canvas) && document.body.removeChild(this._canvas);
              }
              this._target = null;
            }
          }
        },
        {
          key: "change",
          value: function(S, X, g, b, d) {
            if (b === 0 || d === 0) {
              this.clear();
              return;
            }
            this._position.x = this._position.x + this._hotSpot.x - X, this._position.y = this._position.y + this._hotSpot.y - g, this._hotSpot.x = X, this._hotSpot.y = g;
            var f = this._canvas.getContext("2d");
            this._canvas.width = b, this._canvas.height = d;
            var h = new ImageData(new Uint8ClampedArray(S), b, d);
            if (f.clearRect(0, 0, b, d), f.putImageData(h, 0, 0), y) this._updatePosition();
            else {
              var c = this._canvas.toDataURL();
              this._target.style.cursor = "url(" + c + ")" + X + " " + g + ", default";
            }
          }
        },
        {
          key: "clear",
          value: function() {
            this._target.style.cursor = "none", this._canvas.width = 0, this._canvas.height = 0, this._position.x = this._position.x + this._hotSpot.x, this._position.y = this._position.y + this._hotSpot.y, this._hotSpot.x = 0, this._hotSpot.y = 0;
          }
        },
        {
          key: "move",
          value: function(S, X) {
            if (y) {
              window.visualViewport ? (this._position.x = S + window.visualViewport.offsetLeft, this._position.y = X + window.visualViewport.offsetTop) : (this._position.x = S, this._position.y = X), this._updatePosition();
              var g = document.elementFromPoint(S, X);
              this._updateVisibility(g);
            }
          }
        },
        {
          key: "_handleMouseOver",
          value: function(S) {
            this._handleMouseMove(S);
          }
        },
        {
          key: "_handleMouseLeave",
          value: function(S) {
            this._updateVisibility(S.relatedTarget);
          }
        },
        {
          key: "_handleMouseMove",
          value: function(S) {
            this._updateVisibility(S.target), this._position.x = S.clientX - this._hotSpot.x, this._position.y = S.clientY - this._hotSpot.y, this._updatePosition();
          }
        },
        {
          key: "_handleMouseUp",
          value: function(S) {
            var X = this, g = document.elementFromPoint(S.clientX, S.clientY);
            this._updateVisibility(g), this._captureIsActive() && window.setTimeout(function() {
              X._target && (g = document.elementFromPoint(S.clientX, S.clientY), X._updateVisibility(g));
            }, 0);
          }
        },
        {
          key: "_showCursor",
          value: function() {
            this._canvas.style.visibility === "hidden" && (this._canvas.style.visibility = "");
          }
        },
        {
          key: "_hideCursor",
          value: function() {
            this._canvas.style.visibility !== "hidden" && (this._canvas.style.visibility = "hidden");
          }
        },
        {
          key: "_shouldShowCursor",
          value: function(S) {
            return S ? S === this._target ? true : !(!this._target.contains(S) || window.getComputedStyle(S).cursor !== "none") : false;
          }
        },
        {
          key: "_updateVisibility",
          value: function(S) {
            this._captureIsActive() && (S = document.captureElement), this._shouldShowCursor(S) ? this._showCursor() : this._hideCursor();
          }
        },
        {
          key: "_updatePosition",
          value: function() {
            this._canvas.style.left = this._position.x + "px", this._canvas.style.top = this._position.y + "px";
          }
        },
        {
          key: "_captureIsActive",
          value: function() {
            return document.captureElement && document.documentElement.contains(document.captureElement);
          }
        }
      ]);
    }();
  })(ts);
  var rs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = r(Re);
    function n(x) {
      if (typeof WeakMap != "function") return null;
      var F = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
      return (n = function(C) {
        return C ? k : F;
      })(x);
    }
    function r(x, F) {
      if (x && x.__esModule) return x;
      if (x === null || i(x) != "object" && typeof x != "function") return {
        default: x
      };
      var k = n(F);
      if (k && k.has(x)) return k.get(x);
      var w = {
        __proto__: null
      }, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in x) if (A !== "default" && {}.hasOwnProperty.call(x, A)) {
        var O = C ? Object.getOwnPropertyDescriptor(x, A) : null;
        O && (O.get || O.set) ? Object.defineProperty(w, A, O) : w[A] = x[A];
      }
      return w.default = x, k && k.set(x, w), w;
    }
    function i(x) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
        return typeof F;
      } : function(F) {
        return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
      }, i(x);
    }
    function a(x) {
      return u(x) || y(x) || s(x) || o();
    }
    function o() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function s(x, F) {
      if (x) {
        if (typeof x == "string") return l(x, F);
        var k = {}.toString.call(x).slice(8, -1);
        return k === "Object" && x.constructor && (k = x.constructor.name), k === "Map" || k === "Set" ? Array.from(x) : k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? l(x, F) : void 0;
      }
    }
    function y(x) {
      if (typeof Symbol < "u" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x);
    }
    function u(x) {
      if (Array.isArray(x)) return l(x);
    }
    function l(x, F) {
      (F == null || F > x.length) && (F = x.length);
      for (var k = 0, w = Array(F); k < F; k++) w[k] = x[k];
      return w;
    }
    function S(x, F) {
      if (!(x instanceof F)) throw new TypeError("Cannot call a class as a function");
    }
    function X(x, F) {
      for (var k = 0; k < F.length; k++) {
        var w = F[k];
        w.enumerable = w.enumerable || false, w.configurable = true, "value" in w && (w.writable = true), Object.defineProperty(x, b(w.key), w);
      }
    }
    function g(x, F, k) {
      return F && X(x.prototype, F), Object.defineProperty(x, "prototype", {
        writable: false
      }), x;
    }
    function b(x) {
      var F = d(x, "string");
      return i(F) == "symbol" ? F : F + "";
    }
    function d(x, F) {
      if (i(x) != "object" || !x) return x;
      var k = x[Symbol.toPrimitive];
      if (k !== void 0) {
        var w = k.call(x, F);
        if (i(w) != "object") return w;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(x);
    }
    var f = 40 * 1024 * 1024, h = {
      CONNECTING: "connecting",
      OPEN: "open",
      CLOSING: "closing",
      CLOSED: "closed"
    }, c = {
      CONNECTING: [
        WebSocket.CONNECTING,
        h.CONNECTING
      ],
      OPEN: [
        WebSocket.OPEN,
        h.OPEN
      ],
      CLOSING: [
        WebSocket.CLOSING,
        h.CLOSING
      ],
      CLOSED: [
        WebSocket.CLOSED,
        h.CLOSED
      ]
    }, K = [
      "send",
      "close",
      "binaryType",
      "onerror",
      "onmessage",
      "onopen",
      "protocol",
      "readyState"
    ];
    e.default = function() {
      function x() {
        S(this, x), this._websocket = null, this._rQi = 0, this._rQlen = 0, this._rQbufferSize = 1024 * 1024 * 4, this._rQ = null, this._sQbufferSize = 1024 * 10, this._sQlen = 0, this._sQ = null, this._eventHandlers = {
          message: function() {
          },
          open: function() {
          },
          close: function() {
          },
          error: function() {
          }
        };
      }
      return g(x, [
        {
          key: "readyState",
          get: function() {
            var k;
            return this._websocket === null ? "unused" : (k = this._websocket.readyState, c.CONNECTING.includes(k) ? "connecting" : c.OPEN.includes(k) ? "open" : c.CLOSING.includes(k) ? "closing" : c.CLOSED.includes(k) ? "closed" : "unknown");
          }
        },
        {
          key: "rQpeek8",
          value: function() {
            return this._rQ[this._rQi];
          }
        },
        {
          key: "rQskipBytes",
          value: function(k) {
            this._rQi += k;
          }
        },
        {
          key: "rQshift8",
          value: function() {
            return this._rQshift(1);
          }
        },
        {
          key: "rQshift16",
          value: function() {
            return this._rQshift(2);
          }
        },
        {
          key: "rQshift32",
          value: function() {
            return this._rQshift(4);
          }
        },
        {
          key: "_rQshift",
          value: function(k) {
            for (var w = 0, C = k - 1; C >= 0; C--) w += this._rQ[this._rQi++] << C * 8;
            return w >>> 0;
          }
        },
        {
          key: "rQshiftStr",
          value: function(k) {
            for (var w = "", C = 0; C < k; C += 4096) {
              var A = this.rQshiftBytes(Math.min(4096, k - C), false);
              w += String.fromCharCode.apply(null, A);
            }
            return w;
          }
        },
        {
          key: "rQshiftBytes",
          value: function(k) {
            var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return this._rQi += k, w ? this._rQ.slice(this._rQi - k, this._rQi) : this._rQ.subarray(this._rQi - k, this._rQi);
          }
        },
        {
          key: "rQshiftTo",
          value: function(k, w) {
            k.set(new Uint8Array(this._rQ.buffer, this._rQi, w)), this._rQi += w;
          }
        },
        {
          key: "rQpeekBytes",
          value: function(k) {
            var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return w ? this._rQ.slice(this._rQi, this._rQi + k) : this._rQ.subarray(this._rQi, this._rQi + k);
          }
        },
        {
          key: "rQwait",
          value: function(k, w, C) {
            if (this._rQlen - this._rQi < w) {
              if (C) {
                if (this._rQi < C) throw new Error("rQwait cannot backup " + C + " bytes");
                this._rQi -= C;
              }
              return true;
            }
            return false;
          }
        },
        {
          key: "sQpush8",
          value: function(k) {
            this._sQensureSpace(1), this._sQ[this._sQlen++] = k;
          }
        },
        {
          key: "sQpush16",
          value: function(k) {
            this._sQensureSpace(2), this._sQ[this._sQlen++] = k >> 8 & 255, this._sQ[this._sQlen++] = k >> 0 & 255;
          }
        },
        {
          key: "sQpush32",
          value: function(k) {
            this._sQensureSpace(4), this._sQ[this._sQlen++] = k >> 24 & 255, this._sQ[this._sQlen++] = k >> 16 & 255, this._sQ[this._sQlen++] = k >> 8 & 255, this._sQ[this._sQlen++] = k >> 0 & 255;
          }
        },
        {
          key: "sQpushString",
          value: function(k) {
            var w = k.split("").map(function(C) {
              return C.charCodeAt(0);
            });
            this.sQpushBytes(new Uint8Array(w));
          }
        },
        {
          key: "sQpushBytes",
          value: function(k) {
            for (var w = 0; w < k.length; ) {
              this._sQensureSpace(1);
              var C = this._sQbufferSize - this._sQlen;
              C > k.length - w && (C = k.length - w), this._sQ.set(k.subarray(w, w + C), this._sQlen), this._sQlen += C, w += C;
            }
          }
        },
        {
          key: "flush",
          value: function() {
            this._sQlen > 0 && this.readyState === "open" && (this._websocket.send(new Uint8Array(this._sQ.buffer, 0, this._sQlen)), this._sQlen = 0);
          }
        },
        {
          key: "_sQensureSpace",
          value: function(k) {
            this._sQbufferSize - this._sQlen < k && this.flush();
          }
        },
        {
          key: "off",
          value: function(k) {
            this._eventHandlers[k] = function() {
            };
          }
        },
        {
          key: "on",
          value: function(k, w) {
            this._eventHandlers[k] = w;
          }
        },
        {
          key: "_allocateBuffers",
          value: function() {
            this._rQ = new Uint8Array(this._rQbufferSize), this._sQ = new Uint8Array(this._sQbufferSize);
          }
        },
        {
          key: "init",
          value: function() {
            this._allocateBuffers(), this._rQi = 0, this._websocket = null;
          }
        },
        {
          key: "open",
          value: function(k, w) {
            this.attach(new WebSocket(k, w));
          }
        },
        {
          key: "attach",
          value: function(k) {
            var w = this;
            this.init();
            for (var C = [].concat(a(Object.keys(k)), a(Object.getOwnPropertyNames(Object.getPrototypeOf(k)))), A = 0; A < K.length; A++) {
              var O = K[A];
              if (C.indexOf(O) < 0) throw new Error("Raw channel missing property: " + O);
            }
            this._websocket = k, this._websocket.binaryType = "arraybuffer", this._websocket.onmessage = this._recvMessage.bind(this), this._websocket.onopen = function() {
              t.Debug(">> WebSock.onopen"), w._websocket.protocol && t.Info("Server choose sub-protocol: " + w._websocket.protocol), w._eventHandlers.open(), t.Debug("<< WebSock.onopen");
            }, this._websocket.onclose = function(I) {
              t.Debug(">> WebSock.onclose"), w._eventHandlers.close(I), t.Debug("<< WebSock.onclose");
            }, this._websocket.onerror = function(I) {
              t.Debug(">> WebSock.onerror: " + I), w._eventHandlers.error(I), t.Debug("<< WebSock.onerror: " + I);
            };
          }
        },
        {
          key: "close",
          value: function() {
            this._websocket && ((this.readyState === "connecting" || this.readyState === "open") && (t.Info("Closing WebSocket connection"), this._websocket.close()), this._websocket.onmessage = function() {
            });
          }
        },
        {
          key: "_expandCompactRQ",
          value: function(k) {
            var w = (this._rQlen - this._rQi + k) * 8, C = this._rQbufferSize < w;
            if (C && (this._rQbufferSize = Math.max(this._rQbufferSize * 2, w)), this._rQbufferSize > f && (this._rQbufferSize = f, this._rQbufferSize - (this._rQlen - this._rQi) < k)) throw new Error("Receive queue buffer exceeded " + f + " bytes, and the new message could not fit");
            if (C) {
              var A = this._rQ.buffer;
              this._rQ = new Uint8Array(this._rQbufferSize), this._rQ.set(new Uint8Array(A, this._rQi, this._rQlen - this._rQi));
            } else this._rQ.copyWithin(0, this._rQi, this._rQlen);
            this._rQlen = this._rQlen - this._rQi, this._rQi = 0;
          }
        },
        {
          key: "_recvMessage",
          value: function(k) {
            this._rQlen == this._rQi && (this._rQlen = 0, this._rQi = 0);
            var w = new Uint8Array(k.data);
            w.length > this._rQbufferSize - this._rQlen && this._expandCompactRQ(w.length), this._rQ.set(w, this._rQlen), this._rQlen += w.length, this._rQlen - this._rQi > 0 ? this._eventHandlers.message() : t.Debug("Ignoring empty message");
          }
        }
      ]);
    }();
  })(rs);
  var ns = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0, e.default = {
      Again: 57349,
      AltLeft: 56,
      AltRight: 57400,
      ArrowDown: 57424,
      ArrowLeft: 57419,
      ArrowRight: 57421,
      ArrowUp: 57416,
      AudioVolumeDown: 57390,
      AudioVolumeMute: 57376,
      AudioVolumeUp: 57392,
      Backquote: 41,
      Backslash: 43,
      Backspace: 14,
      BracketLeft: 26,
      BracketRight: 27,
      BrowserBack: 57450,
      BrowserFavorites: 57446,
      BrowserForward: 57449,
      BrowserHome: 57394,
      BrowserRefresh: 57447,
      BrowserSearch: 57445,
      BrowserStop: 57448,
      CapsLock: 58,
      Comma: 51,
      ContextMenu: 57437,
      ControlLeft: 29,
      ControlRight: 57373,
      Convert: 121,
      Copy: 57464,
      Cut: 57404,
      Delete: 57427,
      Digit0: 11,
      Digit1: 2,
      Digit2: 3,
      Digit3: 4,
      Digit4: 5,
      Digit5: 6,
      Digit6: 7,
      Digit7: 8,
      Digit8: 9,
      Digit9: 10,
      Eject: 57469,
      End: 57423,
      Enter: 28,
      Equal: 13,
      Escape: 1,
      F1: 59,
      F10: 68,
      F11: 87,
      F12: 88,
      F13: 93,
      F14: 94,
      F15: 95,
      F16: 85,
      F17: 57347,
      F18: 57463,
      F19: 57348,
      F2: 60,
      F20: 90,
      F21: 116,
      F22: 57465,
      F23: 109,
      F24: 111,
      F3: 61,
      F4: 62,
      F5: 63,
      F6: 64,
      F7: 65,
      F8: 66,
      F9: 67,
      Find: 57409,
      Help: 57461,
      Hiragana: 119,
      Home: 57415,
      Insert: 57426,
      IntlBackslash: 86,
      IntlRo: 115,
      IntlYen: 125,
      KanaMode: 112,
      Katakana: 120,
      KeyA: 30,
      KeyB: 48,
      KeyC: 46,
      KeyD: 32,
      KeyE: 18,
      KeyF: 33,
      KeyG: 34,
      KeyH: 35,
      KeyI: 23,
      KeyJ: 36,
      KeyK: 37,
      KeyL: 38,
      KeyM: 50,
      KeyN: 49,
      KeyO: 24,
      KeyP: 25,
      KeyQ: 16,
      KeyR: 19,
      KeyS: 31,
      KeyT: 20,
      KeyU: 22,
      KeyV: 47,
      KeyW: 17,
      KeyX: 45,
      KeyY: 21,
      KeyZ: 44,
      Lang1: 114,
      Lang2: 113,
      Lang3: 120,
      Lang4: 119,
      Lang5: 118,
      LaunchApp1: 57451,
      LaunchApp2: 57377,
      LaunchMail: 57452,
      MediaPlayPause: 57378,
      MediaSelect: 57453,
      MediaStop: 57380,
      MediaTrackNext: 57369,
      MediaTrackPrevious: 57360,
      MetaLeft: 57435,
      MetaRight: 57436,
      Minus: 12,
      NonConvert: 123,
      NumLock: 69,
      Numpad0: 82,
      Numpad1: 79,
      Numpad2: 80,
      Numpad3: 81,
      Numpad4: 75,
      Numpad5: 76,
      Numpad6: 77,
      Numpad7: 71,
      Numpad8: 72,
      Numpad9: 73,
      NumpadAdd: 78,
      NumpadComma: 126,
      NumpadDecimal: 83,
      NumpadDivide: 57397,
      NumpadEnter: 57372,
      NumpadEqual: 89,
      NumpadMultiply: 55,
      NumpadParenLeft: 57462,
      NumpadParenRight: 57467,
      NumpadSubtract: 74,
      Open: 100,
      PageDown: 57425,
      PageUp: 57417,
      Paste: 101,
      Pause: 57414,
      Period: 52,
      Power: 57438,
      PrintScreen: 84,
      Props: 57350,
      Quote: 40,
      ScrollLock: 70,
      Semicolon: 39,
      ShiftLeft: 42,
      ShiftRight: 54,
      Slash: 53,
      Sleep: 57439,
      Space: 57,
      Suspend: 57381,
      Tab: 15,
      Undo: 57351,
      WakeUp: 57443
    };
  })(ns);
  var Vr = {};
  Object.defineProperty(Vr, "__esModule", {
    value: true
  });
  Vr.encodingName = Tl;
  Vr.encodings = void 0;
  var Kt = Vr.encodings = {
    encodingRaw: 0,
    encodingCopyRect: 1,
    encodingRRE: 2,
    encodingHextile: 5,
    encodingZlib: 6,
    encodingTight: 7,
    encodingZRLE: 16,
    encodingTightPNG: -260,
    encodingJPEG: 21,
    encodingH264: 50,
    pseudoEncodingQualityLevel9: -23,
    pseudoEncodingQualityLevel0: -32,
    pseudoEncodingDesktopSize: -223,
    pseudoEncodingLastRect: -224,
    pseudoEncodingCursor: -239,
    pseudoEncodingQEMUExtendedKeyEvent: -258,
    pseudoEncodingQEMULedEvent: -261,
    pseudoEncodingDesktopName: -307,
    pseudoEncodingExtendedDesktopSize: -308,
    pseudoEncodingXvp: -309,
    pseudoEncodingFence: -312,
    pseudoEncodingContinuousUpdates: -313,
    pseudoEncodingExtendedMouseButtons: -316,
    pseudoEncodingCompressLevel9: -247,
    pseudoEncodingCompressLevel0: -256,
    pseudoEncodingVMwareCursor: 1464686180,
    pseudoEncodingExtendedClipboard: 3231835598
  };
  function Tl(e) {
    switch (e) {
      case Kt.encodingRaw:
        return "Raw";
      case Kt.encodingCopyRect:
        return "CopyRect";
      case Kt.encodingRRE:
        return "RRE";
      case Kt.encodingHextile:
        return "Hextile";
      case Kt.encodingZlib:
        return "Zlib";
      case Kt.encodingTight:
        return "Tight";
      case Kt.encodingZRLE:
        return "ZRLE";
      case Kt.encodingTightPNG:
        return "TightPNG";
      case Kt.encodingJPEG:
        return "JPEG";
      case Kt.encodingH264:
        return "H.264";
      default:
        return "[unknown encoding " + e + "]";
    }
  }
  var is = {}, gi = {}, vr = {};
  Object.defineProperty(vr, "__esModule", {
    value: true
  });
  vr.AESECBCipher = vr.AESEAXCipher = void 0;
  function nr(e) {
    "@babel/helpers - typeof";
    return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, nr(e);
  }
  function De() {
    De = function() {
      return t;
    };
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(E, p, m) {
      E[p] = m.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", y = a.toStringTag || "@@toStringTag";
    function u(E, p, m) {
      return Object.defineProperty(E, p, {
        value: m,
        enumerable: true,
        configurable: true,
        writable: true
      }), E[p];
    }
    try {
      u({}, "");
    } catch {
      u = function(m, L, B) {
        return m[L] = B;
      };
    }
    function l(E, p, m, L) {
      var B = p && p.prototype instanceof h ? p : h, M = Object.create(B.prototype), V = new $(L || []);
      return i(M, "_invoke", {
        value: O(E, m, V)
      }), M;
    }
    function S(E, p, m) {
      try {
        return {
          type: "normal",
          arg: E.call(p, m)
        };
      } catch (L) {
        return {
          type: "throw",
          arg: L
        };
      }
    }
    t.wrap = l;
    var X = "suspendedStart", g = "suspendedYield", b = "executing", d = "completed", f = {};
    function h() {
    }
    function c() {
    }
    function K() {
    }
    var x = {};
    u(x, o, function() {
      return this;
    });
    var F = Object.getPrototypeOf, k = F && F(F(ne([])));
    k && k !== n && r.call(k, o) && (x = k);
    var w = K.prototype = h.prototype = Object.create(x);
    function C(E) {
      [
        "next",
        "throw",
        "return"
      ].forEach(function(p) {
        u(E, p, function(m) {
          return this._invoke(p, m);
        });
      });
    }
    function A(E, p) {
      function m(B, M, V, re) {
        var oe = S(E[B], E, M);
        if (oe.type !== "throw") {
          var ce = oe.arg, pe = ce.value;
          return pe && nr(pe) == "object" && r.call(pe, "__await") ? p.resolve(pe.__await).then(function(ye) {
            m("next", ye, V, re);
          }, function(ye) {
            m("throw", ye, V, re);
          }) : p.resolve(pe).then(function(ye) {
            ce.value = ye, V(ce);
          }, function(ye) {
            return m("throw", ye, V, re);
          });
        }
        re(oe.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function(M, V) {
          function re() {
            return new p(function(oe, ce) {
              m(M, V, oe, ce);
            });
          }
          return L = L ? L.then(re, re) : re();
        }
      });
    }
    function O(E, p, m) {
      var L = X;
      return function(B, M) {
        if (L === b) throw Error("Generator is already running");
        if (L === d) {
          if (B === "throw") throw M;
          return {
            value: e,
            done: true
          };
        }
        for (m.method = B, m.arg = M; ; ) {
          var V = m.delegate;
          if (V) {
            var re = I(V, m);
            if (re) {
              if (re === f) continue;
              return re;
            }
          }
          if (m.method === "next") m.sent = m._sent = m.arg;
          else if (m.method === "throw") {
            if (L === X) throw L = d, m.arg;
            m.dispatchException(m.arg);
          } else m.method === "return" && m.abrupt("return", m.arg);
          L = b;
          var oe = S(E, p, m);
          if (oe.type === "normal") {
            if (L = m.done ? d : g, oe.arg === f) continue;
            return {
              value: oe.arg,
              done: m.done
            };
          }
          oe.type === "throw" && (L = d, m.method = "throw", m.arg = oe.arg);
        }
      };
    }
    function I(E, p) {
      var m = p.method, L = E.iterator[m];
      if (L === e) return p.delegate = null, m === "throw" && E.iterator.return && (p.method = "return", p.arg = e, I(E, p), p.method === "throw") || m !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + m + "' method")), f;
      var B = S(L, E.iterator, p.arg);
      if (B.type === "throw") return p.method = "throw", p.arg = B.arg, p.delegate = null, f;
      var M = B.arg;
      return M ? M.done ? (p[E.resultName] = M.value, p.next = E.nextLoc, p.method !== "return" && (p.method = "next", p.arg = e), p.delegate = null, f) : M : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, f);
    }
    function Z(E) {
      var p = {
        tryLoc: E[0]
      };
      1 in E && (p.catchLoc = E[1]), 2 in E && (p.finallyLoc = E[2], p.afterLoc = E[3]), this.tryEntries.push(p);
    }
    function q(E) {
      var p = E.completion || {};
      p.type = "normal", delete p.arg, E.completion = p;
    }
    function $(E) {
      this.tryEntries = [
        {
          tryLoc: "root"
        }
      ], E.forEach(Z, this), this.reset(true);
    }
    function ne(E) {
      if (E || E === "") {
        var p = E[o];
        if (p) return p.call(E);
        if (typeof E.next == "function") return E;
        if (!isNaN(E.length)) {
          var m = -1, L = function B() {
            for (; ++m < E.length; ) if (r.call(E, m)) return B.value = E[m], B.done = false, B;
            return B.value = e, B.done = true, B;
          };
          return L.next = L;
        }
      }
      throw new TypeError(nr(E) + " is not iterable");
    }
    return c.prototype = K, i(w, "constructor", {
      value: K,
      configurable: true
    }), i(K, "constructor", {
      value: c,
      configurable: true
    }), c.displayName = u(K, y, "GeneratorFunction"), t.isGeneratorFunction = function(E) {
      var p = typeof E == "function" && E.constructor;
      return !!p && (p === c || (p.displayName || p.name) === "GeneratorFunction");
    }, t.mark = function(E) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(E, K) : (E.__proto__ = K, u(E, y, "GeneratorFunction")), E.prototype = Object.create(w), E;
    }, t.awrap = function(E) {
      return {
        __await: E
      };
    }, C(A.prototype), u(A.prototype, s, function() {
      return this;
    }), t.AsyncIterator = A, t.async = function(E, p, m, L, B) {
      B === void 0 && (B = Promise);
      var M = new A(l(E, p, m, L), B);
      return t.isGeneratorFunction(p) ? M : M.next().then(function(V) {
        return V.done ? V.value : M.next();
      });
    }, C(w), u(w, y, "Generator"), u(w, o, function() {
      return this;
    }), u(w, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(E) {
      var p = Object(E), m = [];
      for (var L in p) m.push(L);
      return m.reverse(), function B() {
        for (; m.length; ) {
          var M = m.pop();
          if (M in p) return B.value = M, B.done = false, B;
        }
        return B.done = true, B;
      };
    }, t.values = ne, $.prototype = {
      constructor: $,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(q), !p) for (var m in this) m.charAt(0) === "t" && r.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = e);
      },
      stop: function() {
        this.done = true;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw") throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done) throw p;
        var m = this;
        function L(ce, pe) {
          return V.type = "throw", V.arg = p, m.next = ce, pe && (m.method = "next", m.arg = e), !!pe;
        }
        for (var B = this.tryEntries.length - 1; B >= 0; --B) {
          var M = this.tryEntries[B], V = M.completion;
          if (M.tryLoc === "root") return L("end");
          if (M.tryLoc <= this.prev) {
            var re = r.call(M, "catchLoc"), oe = r.call(M, "finallyLoc");
            if (re && oe) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            } else if (re) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
            } else {
              if (!oe) throw Error("try statement without catch or finally");
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, m) {
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var B = this.tryEntries[L];
          if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
            var M = B;
            break;
          }
        }
        M && (p === "break" || p === "continue") && M.tryLoc <= m && m <= M.finallyLoc && (M = null);
        var V = M ? M.completion : {};
        return V.type = p, V.arg = m, M ? (this.method = "next", this.next = M.finallyLoc, f) : this.complete(V);
      },
      complete: function(p, m) {
        if (p.type === "throw") throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && m && (this.next = m), f;
      },
      finish: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.finallyLoc === p) return this.complete(L.completion, L.afterLoc), q(L), f;
        }
      },
      catch: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.tryLoc === p) {
            var B = L.completion;
            if (B.type === "throw") {
              var M = B.arg;
              q(L);
            }
            return M;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(p, m, L) {
        return this.delegate = {
          iterator: ne(p),
          resultName: m,
          nextLoc: L
        }, this.method === "next" && (this.arg = e), f;
      }
    }, t;
  }
  function Ea(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o), y = s.value;
    } catch (u) {
      return void n(u);
    }
    s.done ? t(y) : Promise.resolve(y).then(r, i);
  }
  function ht(e) {
    return function() {
      var t = this, n = arguments;
      return new Promise(function(r, i) {
        var a = e.apply(t, n);
        function o(y) {
          Ea(a, r, i, o, s, "next", y);
        }
        function s(y) {
          Ea(a, r, i, o, s, "throw", y);
        }
        o(void 0);
      });
    };
  }
  function as(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function Ka(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Ll(r.key), r);
    }
  }
  function os(e, t, n) {
    return t && Ka(e.prototype, t), n && Ka(e, n), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function Ll(e) {
    var t = Rl(e, "string");
    return nr(t) == "symbol" ? t : t + "";
  }
  function Rl(e, t) {
    if (nr(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (nr(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  vr.AESECBCipher = function() {
    function e() {
      as(this, e), this._key = null;
    }
    return os(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "AES-ECB"
          };
        }
      },
      {
        key: "_importKey",
        value: function() {
          var t = ht(De().mark(function r(i, a, o) {
            return De().wrap(function(y) {
              for (; ; ) switch (y.prev = y.next) {
                case 0:
                  return y.next = 2, window.crypto.subtle.importKey("raw", i, {
                    name: "AES-CBC"
                  }, a, o);
                case 2:
                  this._key = y.sent;
                case 3:
                case "end":
                  return y.stop();
              }
            }, r, this);
          }));
          function n(r, i, a) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "encrypt",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o, s, y, u;
            return De().wrap(function(S) {
              for (; ; ) switch (S.prev = S.next) {
                case 0:
                  if (o = new Uint8Array(a), !(o.length % 16 !== 0 || this._key === null)) {
                    S.next = 3;
                    break;
                  }
                  return S.abrupt("return", null);
                case 3:
                  s = o.length / 16, y = 0;
                case 5:
                  if (!(y < s)) {
                    S.next = 15;
                    break;
                  }
                  return S.t0 = Uint8Array, S.next = 9, window.crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: new Uint8Array(16)
                  }, this._key, o.slice(y * 16, y * 16 + 16));
                case 9:
                  S.t1 = S.sent, u = new S.t0(S.t1).slice(0, 16), o.set(u, y * 16);
                case 12:
                  y++, S.next = 5;
                  break;
                case 15:
                  return S.abrupt("return", o);
                case 16:
                case "end":
                  return S.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ], [
      {
        key: "importKey",
        value: function() {
          var t = ht(De().mark(function r(i, a, o, s) {
            var y;
            return De().wrap(function(l) {
              for (; ; ) switch (l.prev = l.next) {
                case 0:
                  return y = new e(), l.next = 3, y._importKey(i, o, s);
                case 3:
                  return l.abrupt("return", y);
                case 4:
                case "end":
                  return l.stop();
              }
            }, r);
          }));
          function n(r, i, a, o) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ]);
  }();
  vr.AESEAXCipher = function() {
    function e() {
      as(this, e), this._rawKey = null, this._ctrKey = null, this._cbcKey = null, this._zeroBlock = new Uint8Array(16), this._prefixBlock0 = this._zeroBlock, this._prefixBlock1 = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ]), this._prefixBlock2 = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2
      ]);
    }
    return os(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "AES-EAX"
          };
        }
      },
      {
        key: "_encryptBlock",
        value: function() {
          var t = ht(De().mark(function r(i) {
            var a;
            return De().wrap(function(s) {
              for (; ; ) switch (s.prev = s.next) {
                case 0:
                  return s.next = 2, window.crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: this._zeroBlock
                  }, this._cbcKey, i);
                case 2:
                  return a = s.sent, s.abrupt("return", new Uint8Array(a).slice(0, 16));
                case 4:
                case "end":
                  return s.stop();
              }
            }, r, this);
          }));
          function n(r) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_initCMAC",
        value: function() {
          var t = ht(De().mark(function r() {
            var i, a, o, s, y;
            return De().wrap(function(l) {
              for (; ; ) switch (l.prev = l.next) {
                case 0:
                  return l.next = 2, this._encryptBlock(this._zeroBlock);
                case 2:
                  for (i = l.sent, a = new Uint8Array(16), o = i[0] >>> 6, s = 0; s < 15; s++) a[s] = i[s + 1] >> 6 | i[s] << 2, i[s] = i[s + 1] >> 7 | i[s] << 1;
                  y = [
                    0,
                    135,
                    14,
                    137
                  ], a[14] ^= o >>> 1, a[15] = i[15] << 2 ^ y[o], i[15] = i[15] << 1 ^ y[o >> 1], this._k1 = i, this._k2 = a;
                case 12:
                case "end":
                  return l.stop();
              }
            }, r, this);
          }));
          function n() {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_encryptCTR",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o;
            return De().wrap(function(y) {
              for (; ; ) switch (y.prev = y.next) {
                case 0:
                  return y.next = 2, window.crypto.subtle.encrypt({
                    name: "AES-CTR",
                    counter: a,
                    length: 128
                  }, this._ctrKey, i);
                case 2:
                  return o = y.sent, y.abrupt("return", new Uint8Array(o));
                case 4:
                case "end":
                  return y.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_decryptCTR",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o;
            return De().wrap(function(y) {
              for (; ; ) switch (y.prev = y.next) {
                case 0:
                  return y.next = 2, window.crypto.subtle.decrypt({
                    name: "AES-CTR",
                    counter: a,
                    length: 128
                  }, this._ctrKey, i);
                case 2:
                  return o = y.sent, y.abrupt("return", new Uint8Array(o));
                case 4:
                case "end":
                  return y.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_computeCMAC",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o, s, y, u, l, S, X, g;
            return De().wrap(function(d) {
              for (; ; ) switch (d.prev = d.next) {
                case 0:
                  if (a.length === 16) {
                    d.next = 2;
                    break;
                  }
                  return d.abrupt("return", null);
                case 2:
                  if (o = Math.floor(i.length / 16), s = Math.ceil(i.length / 16), y = i.length - o * 16, u = new Uint8Array((s + 1) * 16), u.set(a), u.set(i, 16), y === 0) for (l = 0; l < 16; l++) u[o * 16 + l] ^= this._k1[l];
                  else for (u[(o + 1) * 16 + y] = 128, S = 0; S < 16; S++) u[(o + 1) * 16 + S] ^= this._k2[S];
                  return d.next = 11, window.crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: this._zeroBlock
                  }, this._cbcKey, u);
                case 11:
                  return X = d.sent, X = new Uint8Array(X), g = X.slice(X.length - 32, X.length - 16), d.abrupt("return", g);
                case 15:
                case "end":
                  return d.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_importKey",
        value: function() {
          var t = ht(De().mark(function r(i) {
            return De().wrap(function(o) {
              for (; ; ) switch (o.prev = o.next) {
                case 0:
                  return this._rawKey = i, o.next = 3, window.crypto.subtle.importKey("raw", i, {
                    name: "AES-CTR"
                  }, false, [
                    "encrypt",
                    "decrypt"
                  ]);
                case 3:
                  return this._ctrKey = o.sent, o.next = 6, window.crypto.subtle.importKey("raw", i, {
                    name: "AES-CBC"
                  }, false, [
                    "encrypt"
                  ]);
                case 6:
                  return this._cbcKey = o.sent, o.next = 9, this._initCMAC();
                case 9:
                case "end":
                  return o.stop();
              }
            }, r, this);
          }));
          function n(r) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "encrypt",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o, s, y, u, l, S, X, g;
            return De().wrap(function(d) {
              for (; ; ) switch (d.prev = d.next) {
                case 0:
                  return o = i.additionalData, s = i.iv, d.next = 4, this._computeCMAC(s, this._prefixBlock0);
                case 4:
                  return y = d.sent, d.next = 7, this._encryptCTR(a, y);
                case 7:
                  return u = d.sent, d.next = 10, this._computeCMAC(o, this._prefixBlock1);
                case 10:
                  return l = d.sent, d.next = 13, this._computeCMAC(u, this._prefixBlock2);
                case 13:
                  for (S = d.sent, X = 0; X < 16; X++) S[X] ^= y[X] ^ l[X];
                  return g = new Uint8Array(16 + u.length), g.set(u), g.set(S, u.length), d.abrupt("return", g);
                case 19:
                case "end":
                  return d.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "decrypt",
        value: function() {
          var t = ht(De().mark(function r(i, a) {
            var o, s, y, u, l, S, X, g, b, d;
            return De().wrap(function(h) {
              for (; ; ) switch (h.prev = h.next) {
                case 0:
                  return o = a.slice(0, a.length - 16), s = i.additionalData, y = i.iv, u = a.slice(a.length - 16), h.next = 6, this._computeCMAC(y, this._prefixBlock0);
                case 6:
                  return l = h.sent, h.next = 9, this._computeCMAC(s, this._prefixBlock1);
                case 9:
                  return S = h.sent, h.next = 12, this._computeCMAC(o, this._prefixBlock2);
                case 12:
                  for (X = h.sent, g = 0; g < 16; g++) X[g] ^= l[g] ^ S[g];
                  if (X.length === u.length) {
                    h.next = 16;
                    break;
                  }
                  return h.abrupt("return", null);
                case 16:
                  b = 0;
                case 17:
                  if (!(b < u.length)) {
                    h.next = 23;
                    break;
                  }
                  if (X[b] === u[b]) {
                    h.next = 20;
                    break;
                  }
                  return h.abrupt("return", null);
                case 20:
                  b++, h.next = 17;
                  break;
                case 23:
                  return h.next = 25, this._decryptCTR(o, l);
                case 25:
                  return d = h.sent, h.abrupt("return", d);
                case 27:
                case "end":
                  return h.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ], [
      {
        key: "importKey",
        value: function() {
          var t = ht(De().mark(function r(i, a, o, s) {
            var y;
            return De().wrap(function(l) {
              for (; ; ) switch (l.prev = l.next) {
                case 0:
                  return y = new e(), l.next = 3, y._importKey(i);
                case 3:
                  return l.abrupt("return", y);
                case 4:
                case "end":
                  return l.stop();
              }
            }, r);
          }));
          function n(r, i, a, o) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ]);
  }();
  var yr = {};
  Object.defineProperty(yr, "__esModule", {
    value: true
  });
  yr.DESECBCipher = yr.DESCBCCipher = void 0;
  function Or(e) {
    "@babel/helpers - typeof";
    return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Or(e);
  }
  function bi(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function Xa(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Ml(r.key), r);
    }
  }
  function mi(e, t, n) {
    return t && Xa(e.prototype, t), n && Xa(e, n), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function Ml(e) {
    var t = Dl(e, "string");
    return Or(t) == "symbol" ? t : t + "";
  }
  function Dl(e, t) {
    if (Or(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (Or(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  var Fa = [
    13,
    16,
    10,
    23,
    0,
    4,
    2,
    27,
    14,
    5,
    20,
    9,
    22,
    18,
    11,
    3,
    25,
    7,
    15,
    6,
    26,
    19,
    12,
    1,
    40,
    51,
    30,
    36,
    46,
    54,
    29,
    39,
    50,
    44,
    32,
    47,
    43,
    48,
    38,
    55,
    33,
    52,
    45,
    41,
    49,
    35,
    28,
    31
  ], Ol = [
    1,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    15,
    17,
    19,
    21,
    23,
    25,
    27,
    28
  ], P = 0, Q, U, W, N, j, z;
  Q = 65536;
  U = 1 << 24;
  W = Q | U;
  N = 4;
  j = 1024;
  z = N | j;
  var Ca = [
    W | j,
    P | P,
    Q | P,
    W | z,
    W | N,
    Q | z,
    P | N,
    Q | P,
    P | j,
    W | j,
    W | z,
    P | j,
    U | z,
    W | N,
    U | P,
    P | N,
    P | z,
    U | j,
    U | j,
    Q | j,
    Q | j,
    W | P,
    W | P,
    U | z,
    Q | N,
    U | N,
    U | N,
    Q | N,
    P | P,
    P | z,
    Q | z,
    U | P,
    Q | P,
    W | z,
    P | N,
    W | P,
    W | j,
    U | P,
    U | P,
    P | j,
    W | N,
    Q | P,
    Q | j,
    U | N,
    P | j,
    P | N,
    U | z,
    Q | z,
    W | z,
    Q | N,
    W | P,
    U | z,
    U | N,
    P | z,
    Q | z,
    W | j,
    P | z,
    U | j,
    U | j,
    P | P,
    Q | N,
    Q | j,
    P | P,
    W | N
  ];
  Q = 1 << 20;
  U = 1 << 31;
  W = Q | U;
  N = 32;
  j = 32768;
  z = N | j;
  var Aa = [
    W | z,
    U | j,
    P | j,
    Q | z,
    Q | P,
    P | N,
    W | N,
    U | z,
    U | N,
    W | z,
    W | j,
    U | P,
    U | j,
    Q | P,
    P | N,
    W | N,
    Q | j,
    Q | N,
    U | z,
    P | P,
    U | P,
    P | j,
    Q | z,
    W | P,
    Q | N,
    U | N,
    P | P,
    Q | j,
    P | z,
    W | j,
    W | P,
    P | z,
    P | P,
    Q | z,
    W | N,
    Q | P,
    U | z,
    W | P,
    W | j,
    P | j,
    W | P,
    U | j,
    P | N,
    W | z,
    Q | z,
    P | N,
    P | j,
    U | P,
    P | z,
    W | j,
    Q | P,
    U | N,
    Q | N,
    U | z,
    U | N,
    Q | N,
    Q | j,
    P | P,
    U | j,
    P | z,
    U | P,
    W | N,
    W | z,
    Q | j
  ];
  Q = 1 << 17;
  U = 1 << 27;
  W = Q | U;
  N = 8;
  j = 512;
  z = N | j;
  var Pa = [
    P | z,
    W | j,
    P | P,
    W | N,
    U | j,
    P | P,
    Q | z,
    U | j,
    Q | N,
    U | N,
    U | N,
    Q | P,
    W | z,
    Q | N,
    W | P,
    P | z,
    U | P,
    P | N,
    W | j,
    P | j,
    Q | j,
    W | P,
    W | N,
    Q | z,
    U | z,
    Q | j,
    Q | P,
    U | z,
    P | N,
    W | z,
    P | j,
    U | P,
    W | j,
    U | P,
    Q | N,
    P | z,
    Q | P,
    W | j,
    U | j,
    P | P,
    P | j,
    Q | N,
    W | z,
    U | j,
    U | N,
    P | j,
    P | P,
    W | N,
    U | z,
    Q | P,
    U | P,
    W | z,
    P | N,
    Q | z,
    Q | j,
    U | N,
    W | P,
    U | z,
    P | z,
    W | P,
    Q | z,
    P | N,
    W | N,
    Q | j
  ];
  Q = 8192;
  U = 1 << 23;
  W = Q | U;
  N = 1;
  j = 128;
  z = N | j;
  var Ta = [
    W | N,
    Q | z,
    Q | z,
    P | j,
    W | j,
    U | z,
    U | N,
    Q | N,
    P | P,
    W | P,
    W | P,
    W | z,
    P | z,
    P | P,
    U | j,
    U | N,
    P | N,
    Q | P,
    U | P,
    W | N,
    P | j,
    U | P,
    Q | N,
    Q | j,
    U | z,
    P | N,
    Q | j,
    U | j,
    Q | P,
    W | j,
    W | z,
    P | z,
    U | j,
    U | N,
    W | P,
    W | z,
    P | z,
    P | P,
    P | P,
    W | P,
    Q | j,
    U | j,
    U | z,
    P | N,
    W | N,
    Q | z,
    Q | z,
    P | j,
    W | z,
    P | z,
    P | N,
    Q | P,
    U | N,
    Q | N,
    W | j,
    U | z,
    Q | N,
    Q | j,
    U | P,
    W | N,
    P | j,
    U | P,
    Q | P,
    W | j
  ];
  Q = 1 << 25;
  U = 1 << 30;
  W = Q | U;
  N = 256;
  j = 1 << 19;
  z = N | j;
  var La = [
    P | N,
    Q | z,
    Q | j,
    W | N,
    P | j,
    P | N,
    U | P,
    Q | j,
    U | z,
    P | j,
    Q | N,
    U | z,
    W | N,
    W | j,
    P | z,
    U | P,
    Q | P,
    U | j,
    U | j,
    P | P,
    U | N,
    W | z,
    W | z,
    Q | N,
    W | j,
    U | N,
    P | P,
    W | P,
    Q | z,
    Q | P,
    W | P,
    P | z,
    P | j,
    W | N,
    P | N,
    Q | P,
    U | P,
    Q | j,
    W | N,
    U | z,
    Q | N,
    U | P,
    W | j,
    Q | z,
    U | z,
    P | N,
    Q | P,
    W | j,
    W | z,
    P | z,
    W | P,
    W | z,
    Q | j,
    P | P,
    U | j,
    W | P,
    P | z,
    Q | N,
    U | N,
    P | j,
    P | P,
    U | j,
    Q | z,
    U | N
  ];
  Q = 1 << 22;
  U = 1 << 29;
  W = Q | U;
  N = 16;
  j = 16384;
  z = N | j;
  var Ra = [
    U | N,
    W | P,
    P | j,
    W | z,
    W | P,
    P | N,
    W | z,
    Q | P,
    U | j,
    Q | z,
    Q | P,
    U | N,
    Q | N,
    U | j,
    U | P,
    P | z,
    P | P,
    Q | N,
    U | z,
    P | j,
    Q | j,
    U | z,
    P | N,
    W | N,
    W | N,
    P | P,
    Q | z,
    W | j,
    P | z,
    Q | j,
    W | j,
    U | P,
    U | j,
    P | N,
    W | N,
    Q | j,
    W | z,
    Q | P,
    P | z,
    U | N,
    Q | P,
    U | j,
    U | P,
    P | z,
    U | N,
    W | z,
    Q | j,
    W | P,
    Q | z,
    W | j,
    P | P,
    W | N,
    P | N,
    P | j,
    W | P,
    Q | z,
    P | j,
    Q | N,
    U | z,
    P | P,
    W | j,
    U | P,
    Q | N,
    U | z
  ];
  Q = 1 << 21;
  U = 1 << 26;
  W = Q | U;
  N = 2;
  j = 2048;
  z = N | j;
  var Ma = [
    Q | P,
    W | N,
    U | z,
    P | P,
    P | j,
    U | z,
    Q | z,
    W | j,
    W | z,
    Q | P,
    P | P,
    U | N,
    P | N,
    U | P,
    W | N,
    P | z,
    U | j,
    Q | z,
    Q | N,
    U | j,
    U | N,
    W | P,
    W | j,
    Q | N,
    W | P,
    P | j,
    P | z,
    W | z,
    Q | j,
    P | N,
    U | P,
    Q | j,
    U | P,
    Q | j,
    Q | P,
    U | z,
    U | z,
    W | N,
    W | N,
    P | N,
    Q | N,
    U | P,
    U | j,
    Q | P,
    W | j,
    P | z,
    Q | z,
    W | j,
    P | z,
    U | N,
    W | z,
    W | P,
    Q | j,
    P | P,
    P | N,
    W | z,
    P | P,
    Q | z,
    W | P,
    P | j,
    U | N,
    U | j,
    P | j,
    Q | N
  ];
  Q = 1 << 18;
  U = 1 << 28;
  W = Q | U;
  N = 64;
  j = 4096;
  z = N | j;
  var Da = [
    U | z,
    P | j,
    Q | P,
    W | z,
    U | P,
    U | z,
    P | N,
    U | P,
    Q | N,
    W | P,
    W | z,
    Q | j,
    W | j,
    Q | z,
    P | j,
    P | N,
    W | P,
    U | N,
    U | j,
    P | z,
    Q | j,
    Q | N,
    W | N,
    W | j,
    P | z,
    P | P,
    P | P,
    W | N,
    U | N,
    U | j,
    Q | z,
    Q | P,
    Q | z,
    Q | P,
    W | j,
    P | j,
    P | N,
    W | N,
    P | j,
    Q | z,
    U | j,
    P | N,
    U | N,
    W | P,
    W | N,
    U | P,
    Q | P,
    U | z,
    P | P,
    W | z,
    Q | N,
    U | N,
    W | P,
    U | j,
    U | z,
    P | P,
    W | z,
    Q | j,
    Q | j,
    P | z,
    P | z,
    Q | N,
    U | P,
    W | j
  ], ss = function() {
    function e(t) {
      bi(this, e), this.keys = [];
      for (var n = [], r = [], i = [], a = 0, o = 56; a < 56; ++a, o -= 8) {
        o += o < -5 ? 65 : o < -3 ? 31 : o < -1 ? 63 : o === 27 ? 35 : 0;
        var s = o & 7;
        n[a] = t[o >>> 3] & 1 << s ? 1 : 0;
      }
      for (var y = 0; y < 16; ++y) {
        var u = y << 1, l = u + 1;
        i[u] = i[l] = 0;
        for (var S = 28; S < 59; S += 28) for (var X = S - 28; X < S; ++X) {
          var g = X + Ol[y];
          r[X] = g < S ? n[g] : n[g - 28];
        }
        for (var b = 0; b < 24; ++b) r[Fa[b]] !== 0 && (i[u] |= 1 << 23 - b), r[Fa[b + 24]] !== 0 && (i[l] |= 1 << 23 - b);
      }
      for (var d = 0, f = 0, h = 0; d < 16; ++d) {
        var c = i[f++], K = i[f++];
        this.keys[h] = (c & 16515072) << 6, this.keys[h] |= (c & 4032) << 10, this.keys[h] |= (K & 16515072) >>> 10, this.keys[h] |= (K & 4032) >>> 6, ++h, this.keys[h] = (c & 258048) << 12, this.keys[h] |= (c & 63) << 16, this.keys[h] |= (K & 258048) >>> 4, this.keys[h] |= K & 63, ++h;
      }
    }
    return mi(e, [
      {
        key: "enc8",
        value: function(n) {
          var r = n.slice(), i = 0, a, o, s;
          a = r[i++] << 24 | r[i++] << 16 | r[i++] << 8 | r[i++], o = r[i++] << 24 | r[i++] << 16 | r[i++] << 8 | r[i++], s = (a >>> 4 ^ o) & 252645135, o ^= s, a ^= s << 4, s = (a >>> 16 ^ o) & 65535, o ^= s, a ^= s << 16, s = (o >>> 2 ^ a) & 858993459, a ^= s, o ^= s << 2, s = (o >>> 8 ^ a) & 16711935, a ^= s, o ^= s << 8, o = o << 1 | o >>> 31 & 1, s = (a ^ o) & 2863311530, a ^= s, o ^= s, a = a << 1 | a >>> 31 & 1;
          for (var y = 0, u = 0; y < 8; ++y) {
            s = o << 28 | o >>> 4, s ^= this.keys[u++];
            var l = Ma[s & 63];
            l |= La[s >>> 8 & 63], l |= Pa[s >>> 16 & 63], l |= Ca[s >>> 24 & 63], s = o ^ this.keys[u++], l |= Da[s & 63], l |= Ra[s >>> 8 & 63], l |= Ta[s >>> 16 & 63], l |= Aa[s >>> 24 & 63], a ^= l, s = a << 28 | a >>> 4, s ^= this.keys[u++], l = Ma[s & 63], l |= La[s >>> 8 & 63], l |= Pa[s >>> 16 & 63], l |= Ca[s >>> 24 & 63], s = a ^ this.keys[u++], l |= Da[s & 63], l |= Ra[s >>> 8 & 63], l |= Ta[s >>> 16 & 63], l |= Aa[s >>> 24 & 63], o ^= l;
          }
          for (o = o << 31 | o >>> 1, s = (a ^ o) & 2863311530, a ^= s, o ^= s, a = a << 31 | a >>> 1, s = (a >>> 8 ^ o) & 16711935, o ^= s, a ^= s << 8, s = (a >>> 2 ^ o) & 858993459, o ^= s, a ^= s << 2, s = (o >>> 16 ^ a) & 65535, a ^= s, o ^= s << 16, s = (o >>> 4 ^ a) & 252645135, a ^= s, o ^= s << 4, s = [
            o,
            a
          ], i = 0; i < 8; i++) r[i] = (s[i >>> 2] >>> 8 * (3 - i % 4)) % 256, r[i] < 0 && (r[i] += 256);
          return r;
        }
      }
    ]);
  }();
  yr.DESECBCipher = function() {
    function e() {
      bi(this, e), this._cipher = null;
    }
    return mi(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "DES-ECB"
          };
        }
      },
      {
        key: "_importKey",
        value: function(n, r, i) {
          this._cipher = new ss(n);
        }
      },
      {
        key: "encrypt",
        value: function(n, r) {
          var i = new Uint8Array(r);
          if (i.length % 8 !== 0 || this._cipher === null) return null;
          for (var a = i.length / 8, o = 0; o < a; o++) i.set(this._cipher.enc8(i.slice(o * 8, o * 8 + 8)), o * 8);
          return i;
        }
      }
    ], [
      {
        key: "importKey",
        value: function(n, r, i, a) {
          var o = new e();
          return o._importKey(n), o;
        }
      }
    ]);
  }();
  yr.DESCBCCipher = function() {
    function e() {
      bi(this, e), this._cipher = null;
    }
    return mi(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "DES-CBC"
          };
        }
      },
      {
        key: "_importKey",
        value: function(n) {
          this._cipher = new ss(n);
        }
      },
      {
        key: "encrypt",
        value: function(n, r) {
          var i = new Uint8Array(r), a = new Uint8Array(n.iv);
          if (i.length % 8 !== 0 || this._cipher === null) return null;
          for (var o = i.length / 8, s = 0; s < o; s++) {
            for (var y = 0; y < 8; y++) a[y] ^= r[s * 8 + y];
            a = this._cipher.enc8(a), i.set(a, s * 8);
          }
          return i;
        }
      }
    ], [
      {
        key: "importKey",
        value: function(n, r, i, a) {
          var o = new e();
          return o._importKey(n), o;
        }
      }
    ]);
  }();
  var xn = {}, wr = {};
  Object.defineProperty(wr, "__esModule", {
    value: true
  });
  wr.bigIntToU8Array = Il;
  wr.modPow = Bl;
  wr.u8ArrayToBigInt = Ql;
  function Bl(e, t, n) {
    var r = 1n;
    for (e = e % n; t > 0n; ) (t & 1n) === 1n && (r = r * e % n), t = t >> 1n, e = e * e % n;
    return r;
  }
  function Il(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e.toString(16);
    t === 0 && (t = Math.ceil(n.length / 2)), n = n.padStart(t * 2, "0");
    for (var r = n.length / 2, i = new Uint8Array(r), a = 0; a < r; a++) i[a] = parseInt(n.slice(a * 2, a * 2 + 2), 16);
    return i;
  }
  function Ql(e) {
    for (var t = "0x", n = 0; n < e.length; n++) t += e[n].toString(16).padStart(2, "0");
    return BigInt(t);
  }
  Object.defineProperty(xn, "__esModule", {
    value: true
  });
  xn.RSACipher = void 0;
  var Ul = Nl(_n), vt = wr;
  function Nl(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function ir(e) {
    "@babel/helpers - typeof";
    return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, ir(e);
  }
  function et() {
    et = function() {
      return t;
    };
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(E, p, m) {
      E[p] = m.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", y = a.toStringTag || "@@toStringTag";
    function u(E, p, m) {
      return Object.defineProperty(E, p, {
        value: m,
        enumerable: true,
        configurable: true,
        writable: true
      }), E[p];
    }
    try {
      u({}, "");
    } catch {
      u = function(m, L, B) {
        return m[L] = B;
      };
    }
    function l(E, p, m, L) {
      var B = p && p.prototype instanceof h ? p : h, M = Object.create(B.prototype), V = new $(L || []);
      return i(M, "_invoke", {
        value: O(E, m, V)
      }), M;
    }
    function S(E, p, m) {
      try {
        return {
          type: "normal",
          arg: E.call(p, m)
        };
      } catch (L) {
        return {
          type: "throw",
          arg: L
        };
      }
    }
    t.wrap = l;
    var X = "suspendedStart", g = "suspendedYield", b = "executing", d = "completed", f = {};
    function h() {
    }
    function c() {
    }
    function K() {
    }
    var x = {};
    u(x, o, function() {
      return this;
    });
    var F = Object.getPrototypeOf, k = F && F(F(ne([])));
    k && k !== n && r.call(k, o) && (x = k);
    var w = K.prototype = h.prototype = Object.create(x);
    function C(E) {
      [
        "next",
        "throw",
        "return"
      ].forEach(function(p) {
        u(E, p, function(m) {
          return this._invoke(p, m);
        });
      });
    }
    function A(E, p) {
      function m(B, M, V, re) {
        var oe = S(E[B], E, M);
        if (oe.type !== "throw") {
          var ce = oe.arg, pe = ce.value;
          return pe && ir(pe) == "object" && r.call(pe, "__await") ? p.resolve(pe.__await).then(function(ye) {
            m("next", ye, V, re);
          }, function(ye) {
            m("throw", ye, V, re);
          }) : p.resolve(pe).then(function(ye) {
            ce.value = ye, V(ce);
          }, function(ye) {
            return m("throw", ye, V, re);
          });
        }
        re(oe.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function(M, V) {
          function re() {
            return new p(function(oe, ce) {
              m(M, V, oe, ce);
            });
          }
          return L = L ? L.then(re, re) : re();
        }
      });
    }
    function O(E, p, m) {
      var L = X;
      return function(B, M) {
        if (L === b) throw Error("Generator is already running");
        if (L === d) {
          if (B === "throw") throw M;
          return {
            value: e,
            done: true
          };
        }
        for (m.method = B, m.arg = M; ; ) {
          var V = m.delegate;
          if (V) {
            var re = I(V, m);
            if (re) {
              if (re === f) continue;
              return re;
            }
          }
          if (m.method === "next") m.sent = m._sent = m.arg;
          else if (m.method === "throw") {
            if (L === X) throw L = d, m.arg;
            m.dispatchException(m.arg);
          } else m.method === "return" && m.abrupt("return", m.arg);
          L = b;
          var oe = S(E, p, m);
          if (oe.type === "normal") {
            if (L = m.done ? d : g, oe.arg === f) continue;
            return {
              value: oe.arg,
              done: m.done
            };
          }
          oe.type === "throw" && (L = d, m.method = "throw", m.arg = oe.arg);
        }
      };
    }
    function I(E, p) {
      var m = p.method, L = E.iterator[m];
      if (L === e) return p.delegate = null, m === "throw" && E.iterator.return && (p.method = "return", p.arg = e, I(E, p), p.method === "throw") || m !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + m + "' method")), f;
      var B = S(L, E.iterator, p.arg);
      if (B.type === "throw") return p.method = "throw", p.arg = B.arg, p.delegate = null, f;
      var M = B.arg;
      return M ? M.done ? (p[E.resultName] = M.value, p.next = E.nextLoc, p.method !== "return" && (p.method = "next", p.arg = e), p.delegate = null, f) : M : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, f);
    }
    function Z(E) {
      var p = {
        tryLoc: E[0]
      };
      1 in E && (p.catchLoc = E[1]), 2 in E && (p.finallyLoc = E[2], p.afterLoc = E[3]), this.tryEntries.push(p);
    }
    function q(E) {
      var p = E.completion || {};
      p.type = "normal", delete p.arg, E.completion = p;
    }
    function $(E) {
      this.tryEntries = [
        {
          tryLoc: "root"
        }
      ], E.forEach(Z, this), this.reset(true);
    }
    function ne(E) {
      if (E || E === "") {
        var p = E[o];
        if (p) return p.call(E);
        if (typeof E.next == "function") return E;
        if (!isNaN(E.length)) {
          var m = -1, L = function B() {
            for (; ++m < E.length; ) if (r.call(E, m)) return B.value = E[m], B.done = false, B;
            return B.value = e, B.done = true, B;
          };
          return L.next = L;
        }
      }
      throw new TypeError(ir(E) + " is not iterable");
    }
    return c.prototype = K, i(w, "constructor", {
      value: K,
      configurable: true
    }), i(K, "constructor", {
      value: c,
      configurable: true
    }), c.displayName = u(K, y, "GeneratorFunction"), t.isGeneratorFunction = function(E) {
      var p = typeof E == "function" && E.constructor;
      return !!p && (p === c || (p.displayName || p.name) === "GeneratorFunction");
    }, t.mark = function(E) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(E, K) : (E.__proto__ = K, u(E, y, "GeneratorFunction")), E.prototype = Object.create(w), E;
    }, t.awrap = function(E) {
      return {
        __await: E
      };
    }, C(A.prototype), u(A.prototype, s, function() {
      return this;
    }), t.AsyncIterator = A, t.async = function(E, p, m, L, B) {
      B === void 0 && (B = Promise);
      var M = new A(l(E, p, m, L), B);
      return t.isGeneratorFunction(p) ? M : M.next().then(function(V) {
        return V.done ? V.value : M.next();
      });
    }, C(w), u(w, y, "Generator"), u(w, o, function() {
      return this;
    }), u(w, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(E) {
      var p = Object(E), m = [];
      for (var L in p) m.push(L);
      return m.reverse(), function B() {
        for (; m.length; ) {
          var M = m.pop();
          if (M in p) return B.value = M, B.done = false, B;
        }
        return B.done = true, B;
      };
    }, t.values = ne, $.prototype = {
      constructor: $,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(q), !p) for (var m in this) m.charAt(0) === "t" && r.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = e);
      },
      stop: function() {
        this.done = true;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw") throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done) throw p;
        var m = this;
        function L(ce, pe) {
          return V.type = "throw", V.arg = p, m.next = ce, pe && (m.method = "next", m.arg = e), !!pe;
        }
        for (var B = this.tryEntries.length - 1; B >= 0; --B) {
          var M = this.tryEntries[B], V = M.completion;
          if (M.tryLoc === "root") return L("end");
          if (M.tryLoc <= this.prev) {
            var re = r.call(M, "catchLoc"), oe = r.call(M, "finallyLoc");
            if (re && oe) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            } else if (re) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
            } else {
              if (!oe) throw Error("try statement without catch or finally");
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, m) {
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var B = this.tryEntries[L];
          if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
            var M = B;
            break;
          }
        }
        M && (p === "break" || p === "continue") && M.tryLoc <= m && m <= M.finallyLoc && (M = null);
        var V = M ? M.completion : {};
        return V.type = p, V.arg = m, M ? (this.method = "next", this.next = M.finallyLoc, f) : this.complete(V);
      },
      complete: function(p, m) {
        if (p.type === "throw") throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && m && (this.next = m), f;
      },
      finish: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.finallyLoc === p) return this.complete(L.completion, L.afterLoc), q(L), f;
        }
      },
      catch: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.tryLoc === p) {
            var B = L.completion;
            if (B.type === "throw") {
              var M = B.arg;
              q(L);
            }
            return M;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(p, m, L) {
        return this.delegate = {
          iterator: ne(p),
          resultName: m,
          nextLoc: L
        }, this.method === "next" && (this.arg = e), f;
      }
    }, t;
  }
  function Oa(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o), y = s.value;
    } catch (u) {
      return void n(u);
    }
    s.done ? t(y) : Promise.resolve(y).then(r, i);
  }
  function Zt(e) {
    return function() {
      var t = this, n = arguments;
      return new Promise(function(r, i) {
        var a = e.apply(t, n);
        function o(y) {
          Oa(a, r, i, o, s, "next", y);
        }
        function s(y) {
          Oa(a, r, i, o, s, "throw", y);
        }
        o(void 0);
      });
    };
  }
  function jl(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function Ba(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Wl(r.key), r);
    }
  }
  function Hl(e, t, n) {
    return t && Ba(e.prototype, t), n && Ba(e, n), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function Wl(e) {
    var t = zl(e, "string");
    return ir(t) == "symbol" ? t : t + "";
  }
  function zl(e, t) {
    if (ir(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (ir(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  xn.RSACipher = function() {
    function e() {
      jl(this, e), this._keyLength = 0, this._keyBytes = 0, this._n = null, this._e = null, this._d = null, this._nBigInt = null, this._eBigInt = null, this._dBigInt = null, this._extractable = false;
    }
    return Hl(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "RSA-PKCS1-v1_5"
          };
        }
      },
      {
        key: "_base64urlDecode",
        value: function(n) {
          return n = n.replace(/-/g, "+").replace(/_/g, "/"), n = n.padEnd(Math.ceil(n.length / 4) * 4, "="), Ul.default.decode(n);
        }
      },
      {
        key: "_padArray",
        value: function(n, r) {
          var i = new Uint8Array(r);
          return i.set(n, r - n.length), i;
        }
      },
      {
        key: "_generateKey",
        value: function() {
          var t = Zt(et().mark(function r(i, a) {
            var o, s;
            return et().wrap(function(u) {
              for (; ; ) switch (u.prev = u.next) {
                case 0:
                  return this._keyLength = i.modulusLength, this._keyBytes = Math.ceil(this._keyLength / 8), u.next = 4, window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: i.modulusLength,
                    publicExponent: i.publicExponent,
                    hash: {
                      name: "SHA-256"
                    }
                  }, true, [
                    "encrypt",
                    "decrypt"
                  ]);
                case 4:
                  return o = u.sent, u.next = 7, window.crypto.subtle.exportKey("jwk", o.privateKey);
                case 7:
                  s = u.sent, this._n = this._padArray(this._base64urlDecode(s.n), this._keyBytes), this._nBigInt = (0, vt.u8ArrayToBigInt)(this._n), this._e = this._padArray(this._base64urlDecode(s.e), this._keyBytes), this._eBigInt = (0, vt.u8ArrayToBigInt)(this._e), this._d = this._padArray(this._base64urlDecode(s.d), this._keyBytes), this._dBigInt = (0, vt.u8ArrayToBigInt)(this._d), this._extractable = a;
                case 15:
                case "end":
                  return u.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "_importKey",
        value: function() {
          var t = Zt(et().mark(function r(i, a) {
            var o, s;
            return et().wrap(function(u) {
              for (; ; ) switch (u.prev = u.next) {
                case 0:
                  if (o = i.n, s = i.e, o.length === s.length) {
                    u.next = 4;
                    break;
                  }
                  throw new Error("the sizes of modulus and public exponent do not match");
                case 4:
                  this._keyBytes = o.length, this._keyLength = this._keyBytes * 8, this._n = new Uint8Array(this._keyBytes), this._e = new Uint8Array(this._keyBytes), this._n.set(o), this._e.set(s), this._nBigInt = (0, vt.u8ArrayToBigInt)(this._n), this._eBigInt = (0, vt.u8ArrayToBigInt)(this._e), this._extractable = a;
                case 13:
                case "end":
                  return u.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "encrypt",
        value: function() {
          var t = Zt(et().mark(function r(i, a) {
            var o, s, y, u, l;
            return et().wrap(function(X) {
              for (; ; ) switch (X.prev = X.next) {
                case 0:
                  if (!(a.length > this._keyBytes - 11)) {
                    X.next = 2;
                    break;
                  }
                  return X.abrupt("return", null);
                case 2:
                  for (o = new Uint8Array(this._keyBytes - a.length - 3), window.crypto.getRandomValues(o), s = 0; s < o.length; s++) o[s] = Math.floor(o[s] * 254 / 255 + 1);
                  return y = new Uint8Array(this._keyBytes), y[1] = 2, y.set(o, 2), y.set(a, o.length + 3), u = (0, vt.u8ArrayToBigInt)(y), l = (0, vt.modPow)(u, this._eBigInt, this._nBigInt), X.abrupt("return", (0, vt.bigIntToU8Array)(l, this._keyBytes));
                case 12:
                case "end":
                  return X.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "decrypt",
        value: function() {
          var t = Zt(et().mark(function r(i, a) {
            var o, s, y, u;
            return et().wrap(function(S) {
              for (; ; ) switch (S.prev = S.next) {
                case 0:
                  if (a.length === this._keyBytes) {
                    S.next = 2;
                    break;
                  }
                  return S.abrupt("return", null);
                case 2:
                  if (o = (0, vt.u8ArrayToBigInt)(a), s = (0, vt.modPow)(o, this._dBigInt, this._nBigInt), y = (0, vt.bigIntToU8Array)(s, this._keyBytes), !(y[0] !== 0 || y[1] !== 2)) {
                    S.next = 7;
                    break;
                  }
                  return S.abrupt("return", null);
                case 7:
                  u = 2;
                case 8:
                  if (!(u < y.length)) {
                    S.next = 14;
                    break;
                  }
                  if (y[u] !== 0) {
                    S.next = 11;
                    break;
                  }
                  return S.abrupt("break", 14);
                case 11:
                  u++, S.next = 8;
                  break;
                case 14:
                  if (u !== y.length) {
                    S.next = 16;
                    break;
                  }
                  return S.abrupt("return", null);
                case 16:
                  return S.abrupt("return", y.slice(u + 1, y.length));
                case 17:
                case "end":
                  return S.stop();
              }
            }, r, this);
          }));
          function n(r, i) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "exportKey",
        value: function() {
          var t = Zt(et().mark(function r() {
            return et().wrap(function(a) {
              for (; ; ) switch (a.prev = a.next) {
                case 0:
                  if (this._extractable) {
                    a.next = 2;
                    break;
                  }
                  throw new Error("key is not extractable");
                case 2:
                  return a.abrupt("return", {
                    n: this._n,
                    e: this._e,
                    d: this._d
                  });
                case 3:
                case "end":
                  return a.stop();
              }
            }, r, this);
          }));
          function n() {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ], [
      {
        key: "generateKey",
        value: function() {
          var t = Zt(et().mark(function r(i, a, o) {
            var s;
            return et().wrap(function(u) {
              for (; ; ) switch (u.prev = u.next) {
                case 0:
                  return s = new e(), u.next = 3, s._generateKey(i, a);
                case 3:
                  return u.abrupt("return", {
                    privateKey: s
                  });
                case 4:
                case "end":
                  return u.stop();
              }
            }, r);
          }));
          function n(r, i, a) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      },
      {
        key: "importKey",
        value: function() {
          var t = Zt(et().mark(function r(i, a, o, s) {
            var y;
            return et().wrap(function(l) {
              for (; ; ) switch (l.prev = l.next) {
                case 0:
                  if (!(s.length !== 1 || s[0] !== "encrypt")) {
                    l.next = 2;
                    break;
                  }
                  throw new Error("only support importing RSA public key");
                case 2:
                  return y = new e(), l.next = 5, y._importKey(i, o);
                case 5:
                  return l.abrupt("return", y);
                case 6:
                case "end":
                  return l.stop();
              }
            }, r);
          }));
          function n(r, i, a, o) {
            return t.apply(this, arguments);
          }
          return n;
        }()
      }
    ]);
  }();
  var gn = {};
  Object.defineProperty(gn, "__esModule", {
    value: true
  });
  gn.DHCipher = void 0;
  var Mt = wr;
  function Br(e) {
    "@babel/helpers - typeof";
    return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Br(e);
  }
  function us(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function Ia(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Gl(r.key), r);
    }
  }
  function ls(e, t, n) {
    return t && Ia(e.prototype, t), n && Ia(e, n), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function Gl(e) {
    var t = Vl(e, "string");
    return Br(t) == "symbol" ? t : t + "";
  }
  function Vl(e, t) {
    if (Br(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t);
      if (Br(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  var Zl = function() {
    function e(t) {
      us(this, e), this._key = t;
    }
    return ls(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "DH"
          };
        }
      },
      {
        key: "exportKey",
        value: function() {
          return this._key;
        }
      }
    ]);
  }();
  gn.DHCipher = function() {
    function e() {
      us(this, e), this._g = null, this._p = null, this._gBigInt = null, this._pBigInt = null, this._privateKey = null;
    }
    return ls(e, [
      {
        key: "algorithm",
        get: function() {
          return {
            name: "DH"
          };
        }
      },
      {
        key: "_generateKey",
        value: function(n) {
          var r = n.g, i = n.p;
          this._keyBytes = i.length, this._gBigInt = (0, Mt.u8ArrayToBigInt)(r), this._pBigInt = (0, Mt.u8ArrayToBigInt)(i), this._privateKey = window.crypto.getRandomValues(new Uint8Array(this._keyBytes)), this._privateKeyBigInt = (0, Mt.u8ArrayToBigInt)(this._privateKey), this._publicKey = (0, Mt.bigIntToU8Array)((0, Mt.modPow)(this._gBigInt, this._privateKeyBigInt, this._pBigInt), this._keyBytes);
        }
      },
      {
        key: "deriveBits",
        value: function(n, r) {
          var i = Math.ceil(r / 8), a = new Uint8Array(n.public), o = i > this._keyBytes ? i : this._keyBytes, s = (0, Mt.modPow)((0, Mt.u8ArrayToBigInt)(a), this._privateKeyBigInt, this._pBigInt);
          return (0, Mt.bigIntToU8Array)(s, o).slice(0, o);
        }
      }
    ], [
      {
        key: "generateKey",
        value: function(n, r) {
          var i = new e();
          return i._generateKey(n), {
            privateKey: i,
            publicKey: new Zl(i._publicKey)
          };
        }
      }
    ]);
  }();
  var wi = {};
  Object.defineProperty(wi, "__esModule", {
    value: true
  });
  wi.MD5 = Yl;
  function hn(e) {
    "@babel/helpers - typeof";
    return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, hn(e);
  }
  function ri() {
    ri = function() {
      return t;
    };
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(E, p, m) {
      E[p] = m.value;
    }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", y = a.toStringTag || "@@toStringTag";
    function u(E, p, m) {
      return Object.defineProperty(E, p, {
        value: m,
        enumerable: true,
        configurable: true,
        writable: true
      }), E[p];
    }
    try {
      u({}, "");
    } catch {
      u = function(m, L, B) {
        return m[L] = B;
      };
    }
    function l(E, p, m, L) {
      var B = p && p.prototype instanceof h ? p : h, M = Object.create(B.prototype), V = new $(L || []);
      return i(M, "_invoke", {
        value: O(E, m, V)
      }), M;
    }
    function S(E, p, m) {
      try {
        return {
          type: "normal",
          arg: E.call(p, m)
        };
      } catch (L) {
        return {
          type: "throw",
          arg: L
        };
      }
    }
    t.wrap = l;
    var X = "suspendedStart", g = "suspendedYield", b = "executing", d = "completed", f = {};
    function h() {
    }
    function c() {
    }
    function K() {
    }
    var x = {};
    u(x, o, function() {
      return this;
    });
    var F = Object.getPrototypeOf, k = F && F(F(ne([])));
    k && k !== n && r.call(k, o) && (x = k);
    var w = K.prototype = h.prototype = Object.create(x);
    function C(E) {
      [
        "next",
        "throw",
        "return"
      ].forEach(function(p) {
        u(E, p, function(m) {
          return this._invoke(p, m);
        });
      });
    }
    function A(E, p) {
      function m(B, M, V, re) {
        var oe = S(E[B], E, M);
        if (oe.type !== "throw") {
          var ce = oe.arg, pe = ce.value;
          return pe && hn(pe) == "object" && r.call(pe, "__await") ? p.resolve(pe.__await).then(function(ye) {
            m("next", ye, V, re);
          }, function(ye) {
            m("throw", ye, V, re);
          }) : p.resolve(pe).then(function(ye) {
            ce.value = ye, V(ce);
          }, function(ye) {
            return m("throw", ye, V, re);
          });
        }
        re(oe.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function(M, V) {
          function re() {
            return new p(function(oe, ce) {
              m(M, V, oe, ce);
            });
          }
          return L = L ? L.then(re, re) : re();
        }
      });
    }
    function O(E, p, m) {
      var L = X;
      return function(B, M) {
        if (L === b) throw Error("Generator is already running");
        if (L === d) {
          if (B === "throw") throw M;
          return {
            value: e,
            done: true
          };
        }
        for (m.method = B, m.arg = M; ; ) {
          var V = m.delegate;
          if (V) {
            var re = I(V, m);
            if (re) {
              if (re === f) continue;
              return re;
            }
          }
          if (m.method === "next") m.sent = m._sent = m.arg;
          else if (m.method === "throw") {
            if (L === X) throw L = d, m.arg;
            m.dispatchException(m.arg);
          } else m.method === "return" && m.abrupt("return", m.arg);
          L = b;
          var oe = S(E, p, m);
          if (oe.type === "normal") {
            if (L = m.done ? d : g, oe.arg === f) continue;
            return {
              value: oe.arg,
              done: m.done
            };
          }
          oe.type === "throw" && (L = d, m.method = "throw", m.arg = oe.arg);
        }
      };
    }
    function I(E, p) {
      var m = p.method, L = E.iterator[m];
      if (L === e) return p.delegate = null, m === "throw" && E.iterator.return && (p.method = "return", p.arg = e, I(E, p), p.method === "throw") || m !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + m + "' method")), f;
      var B = S(L, E.iterator, p.arg);
      if (B.type === "throw") return p.method = "throw", p.arg = B.arg, p.delegate = null, f;
      var M = B.arg;
      return M ? M.done ? (p[E.resultName] = M.value, p.next = E.nextLoc, p.method !== "return" && (p.method = "next", p.arg = e), p.delegate = null, f) : M : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, f);
    }
    function Z(E) {
      var p = {
        tryLoc: E[0]
      };
      1 in E && (p.catchLoc = E[1]), 2 in E && (p.finallyLoc = E[2], p.afterLoc = E[3]), this.tryEntries.push(p);
    }
    function q(E) {
      var p = E.completion || {};
      p.type = "normal", delete p.arg, E.completion = p;
    }
    function $(E) {
      this.tryEntries = [
        {
          tryLoc: "root"
        }
      ], E.forEach(Z, this), this.reset(true);
    }
    function ne(E) {
      if (E || E === "") {
        var p = E[o];
        if (p) return p.call(E);
        if (typeof E.next == "function") return E;
        if (!isNaN(E.length)) {
          var m = -1, L = function B() {
            for (; ++m < E.length; ) if (r.call(E, m)) return B.value = E[m], B.done = false, B;
            return B.value = e, B.done = true, B;
          };
          return L.next = L;
        }
      }
      throw new TypeError(hn(E) + " is not iterable");
    }
    return c.prototype = K, i(w, "constructor", {
      value: K,
      configurable: true
    }), i(K, "constructor", {
      value: c,
      configurable: true
    }), c.displayName = u(K, y, "GeneratorFunction"), t.isGeneratorFunction = function(E) {
      var p = typeof E == "function" && E.constructor;
      return !!p && (p === c || (p.displayName || p.name) === "GeneratorFunction");
    }, t.mark = function(E) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(E, K) : (E.__proto__ = K, u(E, y, "GeneratorFunction")), E.prototype = Object.create(w), E;
    }, t.awrap = function(E) {
      return {
        __await: E
      };
    }, C(A.prototype), u(A.prototype, s, function() {
      return this;
    }), t.AsyncIterator = A, t.async = function(E, p, m, L, B) {
      B === void 0 && (B = Promise);
      var M = new A(l(E, p, m, L), B);
      return t.isGeneratorFunction(p) ? M : M.next().then(function(V) {
        return V.done ? V.value : M.next();
      });
    }, C(w), u(w, y, "Generator"), u(w, o, function() {
      return this;
    }), u(w, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(E) {
      var p = Object(E), m = [];
      for (var L in p) m.push(L);
      return m.reverse(), function B() {
        for (; m.length; ) {
          var M = m.pop();
          if (M in p) return B.value = M, B.done = false, B;
        }
        return B.done = true, B;
      };
    }, t.values = ne, $.prototype = {
      constructor: $,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = false, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(q), !p) for (var m in this) m.charAt(0) === "t" && r.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = e);
      },
      stop: function() {
        this.done = true;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw") throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done) throw p;
        var m = this;
        function L(ce, pe) {
          return V.type = "throw", V.arg = p, m.next = ce, pe && (m.method = "next", m.arg = e), !!pe;
        }
        for (var B = this.tryEntries.length - 1; B >= 0; --B) {
          var M = this.tryEntries[B], V = M.completion;
          if (M.tryLoc === "root") return L("end");
          if (M.tryLoc <= this.prev) {
            var re = r.call(M, "catchLoc"), oe = r.call(M, "finallyLoc");
            if (re && oe) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            } else if (re) {
              if (this.prev < M.catchLoc) return L(M.catchLoc, true);
            } else {
              if (!oe) throw Error("try statement without catch or finally");
              if (this.prev < M.finallyLoc) return L(M.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, m) {
        for (var L = this.tryEntries.length - 1; L >= 0; --L) {
          var B = this.tryEntries[L];
          if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
            var M = B;
            break;
          }
        }
        M && (p === "break" || p === "continue") && M.tryLoc <= m && m <= M.finallyLoc && (M = null);
        var V = M ? M.completion : {};
        return V.type = p, V.arg = m, M ? (this.method = "next", this.next = M.finallyLoc, f) : this.complete(V);
      },
      complete: function(p, m) {
        if (p.type === "throw") throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && m && (this.next = m), f;
      },
      finish: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.finallyLoc === p) return this.complete(L.completion, L.afterLoc), q(L), f;
        }
      },
      catch: function(p) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var L = this.tryEntries[m];
          if (L.tryLoc === p) {
            var B = L.completion;
            if (B.type === "throw") {
              var M = B.arg;
              q(L);
            }
            return M;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(p, m, L) {
        return this.delegate = {
          iterator: ne(p),
          resultName: m,
          nextLoc: L
        }, this.method === "next" && (this.arg = e), f;
      }
    }, t;
  }
  function Qa(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o), y = s.value;
    } catch (u) {
      return void n(u);
    }
    s.done ? t(y) : Promise.resolve(y).then(r, i);
  }
  function ql(e) {
    return function() {
      var t = this, n = arguments;
      return new Promise(function(r, i) {
        var a = e.apply(t, n);
        function o(y) {
          Qa(a, r, i, o, s, "next", y);
        }
        function s(y) {
          Qa(a, r, i, o, s, "throw", y);
        }
        o(void 0);
      });
    };
  }
  function Yl(e) {
    return ni.apply(this, arguments);
  }
  function ni() {
    return ni = ql(ri().mark(function e(t) {
      var n, r;
      return ri().wrap(function(a) {
        for (; ; ) switch (a.prev = a.next) {
          case 0:
            for (n = "", r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
            return a.abrupt("return", $l(ef(tf(Jl(n), 8 * n.length))));
          case 3:
          case "end":
            return a.stop();
        }
      }, e);
    })), ni.apply(this, arguments);
  }
  function $l(e) {
    for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
    return t;
  }
  function Jl(e) {
    for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
    for (var r = 0; r < 8 * e.length; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
    return t;
  }
  function ef(e) {
    for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
    return t;
  }
  function tf(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
    for (var n = 1732584193, r = -271733879, i = -1732584194, a = 271733878, o = 0; o < e.length; o += 16) {
      var s = n, y = r, u = i, l = a;
      r = Ye(r = Ye(r = Ye(r = Ye(r = qe(r = qe(r = qe(r = qe(r = Ze(r = Ze(r = Ze(r = Ze(r = Ve(r = Ve(r = Ve(r = Ve(r, i = Ve(i, a = Ve(a, n = Ve(n, r, i, a, e[o + 0], 7, -680876936), r, i, e[o + 1], 12, -389564586), n, r, e[o + 2], 17, 606105819), a, n, e[o + 3], 22, -1044525330), i = Ve(i, a = Ve(a, n = Ve(n, r, i, a, e[o + 4], 7, -176418897), r, i, e[o + 5], 12, 1200080426), n, r, e[o + 6], 17, -1473231341), a, n, e[o + 7], 22, -45705983), i = Ve(i, a = Ve(a, n = Ve(n, r, i, a, e[o + 8], 7, 1770035416), r, i, e[o + 9], 12, -1958414417), n, r, e[o + 10], 17, -42063), a, n, e[o + 11], 22, -1990404162), i = Ve(i, a = Ve(a, n = Ve(n, r, i, a, e[o + 12], 7, 1804603682), r, i, e[o + 13], 12, -40341101), n, r, e[o + 14], 17, -1502002290), a, n, e[o + 15], 22, 1236535329), i = Ze(i, a = Ze(a, n = Ze(n, r, i, a, e[o + 1], 5, -165796510), r, i, e[o + 6], 9, -1069501632), n, r, e[o + 11], 14, 643717713), a, n, e[o + 0], 20, -373897302), i = Ze(i, a = Ze(a, n = Ze(n, r, i, a, e[o + 5], 5, -701558691), r, i, e[o + 10], 9, 38016083), n, r, e[o + 15], 14, -660478335), a, n, e[o + 4], 20, -405537848), i = Ze(i, a = Ze(a, n = Ze(n, r, i, a, e[o + 9], 5, 568446438), r, i, e[o + 14], 9, -1019803690), n, r, e[o + 3], 14, -187363961), a, n, e[o + 8], 20, 1163531501), i = Ze(i, a = Ze(a, n = Ze(n, r, i, a, e[o + 13], 5, -1444681467), r, i, e[o + 2], 9, -51403784), n, r, e[o + 7], 14, 1735328473), a, n, e[o + 12], 20, -1926607734), i = qe(i, a = qe(a, n = qe(n, r, i, a, e[o + 5], 4, -378558), r, i, e[o + 8], 11, -2022574463), n, r, e[o + 11], 16, 1839030562), a, n, e[o + 14], 23, -35309556), i = qe(i, a = qe(a, n = qe(n, r, i, a, e[o + 1], 4, -1530992060), r, i, e[o + 4], 11, 1272893353), n, r, e[o + 7], 16, -155497632), a, n, e[o + 10], 23, -1094730640), i = qe(i, a = qe(a, n = qe(n, r, i, a, e[o + 13], 4, 681279174), r, i, e[o + 0], 11, -358537222), n, r, e[o + 3], 16, -722521979), a, n, e[o + 6], 23, 76029189), i = qe(i, a = qe(a, n = qe(n, r, i, a, e[o + 9], 4, -640364487), r, i, e[o + 12], 11, -421815835), n, r, e[o + 15], 16, 530742520), a, n, e[o + 2], 23, -995338651), i = Ye(i, a = Ye(a, n = Ye(n, r, i, a, e[o + 0], 6, -198630844), r, i, e[o + 7], 10, 1126891415), n, r, e[o + 14], 15, -1416354905), a, n, e[o + 5], 21, -57434055), i = Ye(i, a = Ye(a, n = Ye(n, r, i, a, e[o + 12], 6, 1700485571), r, i, e[o + 3], 10, -1894986606), n, r, e[o + 10], 15, -1051523), a, n, e[o + 1], 21, -2054922799), i = Ye(i, a = Ye(a, n = Ye(n, r, i, a, e[o + 8], 6, 1873313359), r, i, e[o + 15], 10, -30611744), n, r, e[o + 6], 15, -1560198380), a, n, e[o + 13], 21, 1309151649), i = Ye(i, a = Ye(a, n = Ye(n, r, i, a, e[o + 4], 6, -145523070), r, i, e[o + 11], 10, -1120210379), n, r, e[o + 2], 15, 718787259), a, n, e[o + 9], 21, -343485551), n = Ut(n, s), r = Ut(r, y), i = Ut(i, u), a = Ut(a, l);
    }
    return Array(n, r, i, a);
  }
  function bn(e, t, n, r, i, a) {
    return Ut(rf(Ut(Ut(t, e), Ut(r, a)), i), n);
  }
  function Ve(e, t, n, r, i, a, o) {
    return bn(t & n | ~t & r, e, t, i, a, o);
  }
  function Ze(e, t, n, r, i, a, o) {
    return bn(t & r | n & ~r, e, t, i, a, o);
  }
  function qe(e, t, n, r, i, a, o) {
    return bn(t ^ n ^ r, e, t, i, a, o);
  }
  function Ye(e, t, n, r, i, a, o) {
    return bn(n ^ (t | ~r), e, t, i, a, o);
  }
  function Ut(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  function rf(e, t) {
    return e << t | e >>> 32 - t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = vr, n = yr, r = xn, i = gn, a = wi;
    function o(g) {
      "@babel/helpers - typeof";
      return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
        return typeof b;
      } : function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      }, o(g);
    }
    function s(g, b) {
      if (!(g instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function y(g, b) {
      for (var d = 0; d < b.length; d++) {
        var f = b[d];
        f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(g, l(f.key), f);
      }
    }
    function u(g, b, d) {
      return b && y(g.prototype, b), Object.defineProperty(g, "prototype", {
        writable: false
      }), g;
    }
    function l(g) {
      var b = S(g, "string");
      return o(b) == "symbol" ? b : b + "";
    }
    function S(g, b) {
      if (o(g) != "object" || !g) return g;
      var d = g[Symbol.toPrimitive];
      if (d !== void 0) {
        var f = d.call(g, b);
        if (o(f) != "object") return f;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(g);
    }
    var X = function() {
      function g() {
        s(this, g), this._algorithms = {
          "AES-ECB": t.AESECBCipher,
          "AES-EAX": t.AESEAXCipher,
          "DES-ECB": n.DESECBCipher,
          "DES-CBC": n.DESCBCCipher,
          "RSA-PKCS1-v1_5": r.RSACipher,
          DH: i.DHCipher,
          MD5: a.MD5
        };
      }
      return u(g, [
        {
          key: "encrypt",
          value: function(d, f, h) {
            if (f.algorithm.name !== d.name) throw new Error("algorithm does not match");
            if (typeof f.encrypt != "function") throw new Error("key does not support encryption");
            return f.encrypt(d, h);
          }
        },
        {
          key: "decrypt",
          value: function(d, f, h) {
            if (f.algorithm.name !== d.name) throw new Error("algorithm does not match");
            if (typeof f.decrypt != "function") throw new Error("key does not support encryption");
            return f.decrypt(d, h);
          }
        },
        {
          key: "importKey",
          value: function(d, f, h, c, K) {
            if (d !== "raw") throw new Error("key format is not supported");
            var x = this._algorithms[h.name];
            if (typeof x > "u" || typeof x.importKey != "function") throw new Error("algorithm is not supported");
            return x.importKey(f, h, c, K);
          }
        },
        {
          key: "generateKey",
          value: function(d, f, h) {
            var c = this._algorithms[d.name];
            if (typeof c > "u" || typeof c.generateKey != "function") throw new Error("algorithm is not supported");
            return c.generateKey(d, f, h);
          }
        },
        {
          key: "exportKey",
          value: function(d, f) {
            if (d !== "raw") throw new Error("key format is not supported");
            if (typeof f.exportKey != "function") throw new Error("key does not support exportKey");
            return f.exportKey();
          }
        },
        {
          key: "digest",
          value: function(d, f) {
            var h = this._algorithms[d];
            if (typeof h != "function") throw new Error("algorithm is not supported");
            return h(f);
          }
        },
        {
          key: "deriveBits",
          value: function(d, f, h) {
            if (f.algorithm.name !== d.name) throw new Error("algorithm does not match");
            if (typeof f.deriveBits != "function") throw new Error("key does not support deriveBits");
            return f.deriveBits(d, h);
          }
        }
      ]);
    }();
    e.default = new X();
  })(gi);
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = Ur, n = i(fi), r = i(gi);
    function i(k) {
      return k && k.__esModule ? k : {
        default: k
      };
    }
    function a(k, w, C) {
      return w = u(w), o(k, y() ? Reflect.construct(w, [], u(k).constructor) : w.apply(k, C));
    }
    function o(k, w) {
      if (w && (X(w) == "object" || typeof w == "function")) return w;
      if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return s(k);
    }
    function s(k) {
      if (k === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return k;
    }
    function y() {
      try {
        var k = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (y = function() {
        return !!k;
      })();
    }
    function u(k) {
      return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
        return w.__proto__ || Object.getPrototypeOf(w);
      }, u(k);
    }
    function l(k, w) {
      if (typeof w != "function" && w !== null) throw new TypeError("Super expression must either be null or a function");
      k.prototype = Object.create(w && w.prototype, {
        constructor: {
          value: k,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(k, "prototype", {
        writable: false
      }), w && S(k, w);
    }
    function S(k, w) {
      return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, A) {
        return C.__proto__ = A, C;
      }, S(k, w);
    }
    function X(k) {
      "@babel/helpers - typeof";
      return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
        return typeof w;
      } : function(w) {
        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
      }, X(k);
    }
    function g() {
      g = function() {
        return w;
      };
      var k, w = {}, C = Object.prototype, A = C.hasOwnProperty, O = Object.defineProperty || function(se, Y, ie) {
        se[Y] = ie.value;
      }, I = typeof Symbol == "function" ? Symbol : {}, Z = I.iterator || "@@iterator", q = I.asyncIterator || "@@asyncIterator", $ = I.toStringTag || "@@toStringTag";
      function ne(se, Y, ie) {
        return Object.defineProperty(se, Y, {
          value: ie,
          enumerable: true,
          configurable: true,
          writable: true
        }), se[Y];
      }
      try {
        ne({}, "");
      } catch {
        ne = function(ie, he, ve) {
          return ie[he] = ve;
        };
      }
      function E(se, Y, ie, he) {
        var ve = Y && Y.prototype instanceof re ? Y : re, de = Object.create(ve.prototype), Pe = new $e(he || []);
        return O(de, "_invoke", {
          value: He(se, ie, Pe)
        }), de;
      }
      function p(se, Y, ie) {
        try {
          return {
            type: "normal",
            arg: se.call(Y, ie)
          };
        } catch (he) {
          return {
            type: "throw",
            arg: he
          };
        }
      }
      w.wrap = E;
      var m = "suspendedStart", L = "suspendedYield", B = "executing", M = "completed", V = {};
      function re() {
      }
      function oe() {
      }
      function ce() {
      }
      var pe = {};
      ne(pe, Z, function() {
        return this;
      });
      var ye = Object.getPrototypeOf, Ne = ye && ye(ye(ct([])));
      Ne && Ne !== C && A.call(Ne, Z) && (pe = Ne);
      var je = ce.prototype = re.prototype = Object.create(pe);
      function st(se) {
        [
          "next",
          "throw",
          "return"
        ].forEach(function(Y) {
          ne(se, Y, function(ie) {
            return this._invoke(Y, ie);
          });
        });
      }
      function Ue(se, Y) {
        function ie(ve, de, Pe, Me) {
          var Oe = p(se[ve], se, de);
          if (Oe.type !== "throw") {
            var le = Oe.arg, xt = le.value;
            return xt && X(xt) == "object" && A.call(xt, "__await") ? Y.resolve(xt.__await).then(function(gt) {
              ie("next", gt, Pe, Me);
            }, function(gt) {
              ie("throw", gt, Pe, Me);
            }) : Y.resolve(xt).then(function(gt) {
              le.value = gt, Pe(le);
            }, function(gt) {
              return ie("throw", gt, Pe, Me);
            });
          }
          Me(Oe.arg);
        }
        var he;
        O(this, "_invoke", {
          value: function(de, Pe) {
            function Me() {
              return new Y(function(Oe, le) {
                ie(de, Pe, Oe, le);
              });
            }
            return he = he ? he.then(Me, Me) : Me();
          }
        });
      }
      function He(se, Y, ie) {
        var he = m;
        return function(ve, de) {
          if (he === B) throw Error("Generator is already running");
          if (he === M) {
            if (ve === "throw") throw de;
            return {
              value: k,
              done: true
            };
          }
          for (ie.method = ve, ie.arg = de; ; ) {
            var Pe = ie.delegate;
            if (Pe) {
              var Me = rt(Pe, ie);
              if (Me) {
                if (Me === V) continue;
                return Me;
              }
            }
            if (ie.method === "next") ie.sent = ie._sent = ie.arg;
            else if (ie.method === "throw") {
              if (he === m) throw he = M, ie.arg;
              ie.dispatchException(ie.arg);
            } else ie.method === "return" && ie.abrupt("return", ie.arg);
            he = B;
            var Oe = p(se, Y, ie);
            if (Oe.type === "normal") {
              if (he = ie.done ? M : L, Oe.arg === V) continue;
              return {
                value: Oe.arg,
                done: ie.done
              };
            }
            Oe.type === "throw" && (he = M, ie.method = "throw", ie.arg = Oe.arg);
          }
        };
      }
      function rt(se, Y) {
        var ie = Y.method, he = se.iterator[ie];
        if (he === k) return Y.delegate = null, ie === "throw" && se.iterator.return && (Y.method = "return", Y.arg = k, rt(se, Y), Y.method === "throw") || ie !== "return" && (Y.method = "throw", Y.arg = new TypeError("The iterator does not provide a '" + ie + "' method")), V;
        var ve = p(he, se.iterator, Y.arg);
        if (ve.type === "throw") return Y.method = "throw", Y.arg = ve.arg, Y.delegate = null, V;
        var de = ve.arg;
        return de ? de.done ? (Y[se.resultName] = de.value, Y.next = se.nextLoc, Y.method !== "return" && (Y.method = "next", Y.arg = k), Y.delegate = null, V) : de : (Y.method = "throw", Y.arg = new TypeError("iterator result is not an object"), Y.delegate = null, V);
      }
      function Lt(se) {
        var Y = {
          tryLoc: se[0]
        };
        1 in se && (Y.catchLoc = se[1]), 2 in se && (Y.finallyLoc = se[2], Y.afterLoc = se[3]), this.tryEntries.push(Y);
      }
      function nt(se) {
        var Y = se.completion || {};
        Y.type = "normal", delete Y.arg, se.completion = Y;
      }
      function $e(se) {
        this.tryEntries = [
          {
            tryLoc: "root"
          }
        ], se.forEach(Lt, this), this.reset(true);
      }
      function ct(se) {
        if (se || se === "") {
          var Y = se[Z];
          if (Y) return Y.call(se);
          if (typeof se.next == "function") return se;
          if (!isNaN(se.length)) {
            var ie = -1, he = function ve() {
              for (; ++ie < se.length; ) if (A.call(se, ie)) return ve.value = se[ie], ve.done = false, ve;
              return ve.value = k, ve.done = true, ve;
            };
            return he.next = he;
          }
        }
        throw new TypeError(X(se) + " is not iterable");
      }
      return oe.prototype = ce, O(je, "constructor", {
        value: ce,
        configurable: true
      }), O(ce, "constructor", {
        value: oe,
        configurable: true
      }), oe.displayName = ne(ce, $, "GeneratorFunction"), w.isGeneratorFunction = function(se) {
        var Y = typeof se == "function" && se.constructor;
        return !!Y && (Y === oe || (Y.displayName || Y.name) === "GeneratorFunction");
      }, w.mark = function(se) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(se, ce) : (se.__proto__ = ce, ne(se, $, "GeneratorFunction")), se.prototype = Object.create(je), se;
      }, w.awrap = function(se) {
        return {
          __await: se
        };
      }, st(Ue.prototype), ne(Ue.prototype, q, function() {
        return this;
      }), w.AsyncIterator = Ue, w.async = function(se, Y, ie, he, ve) {
        ve === void 0 && (ve = Promise);
        var de = new Ue(E(se, Y, ie, he), ve);
        return w.isGeneratorFunction(Y) ? de : de.next().then(function(Pe) {
          return Pe.done ? Pe.value : de.next();
        });
      }, st(je), ne(je, $, "Generator"), ne(je, Z, function() {
        return this;
      }), ne(je, "toString", function() {
        return "[object Generator]";
      }), w.keys = function(se) {
        var Y = Object(se), ie = [];
        for (var he in Y) ie.push(he);
        return ie.reverse(), function ve() {
          for (; ie.length; ) {
            var de = ie.pop();
            if (de in Y) return ve.value = de, ve.done = false, ve;
          }
          return ve.done = true, ve;
        };
      }, w.values = ct, $e.prototype = {
        constructor: $e,
        reset: function(Y) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = k, this.done = false, this.delegate = null, this.method = "next", this.arg = k, this.tryEntries.forEach(nt), !Y) for (var ie in this) ie.charAt(0) === "t" && A.call(this, ie) && !isNaN(+ie.slice(1)) && (this[ie] = k);
        },
        stop: function() {
          this.done = true;
          var Y = this.tryEntries[0].completion;
          if (Y.type === "throw") throw Y.arg;
          return this.rval;
        },
        dispatchException: function(Y) {
          if (this.done) throw Y;
          var ie = this;
          function he(le, xt) {
            return Pe.type = "throw", Pe.arg = Y, ie.next = le, xt && (ie.method = "next", ie.arg = k), !!xt;
          }
          for (var ve = this.tryEntries.length - 1; ve >= 0; --ve) {
            var de = this.tryEntries[ve], Pe = de.completion;
            if (de.tryLoc === "root") return he("end");
            if (de.tryLoc <= this.prev) {
              var Me = A.call(de, "catchLoc"), Oe = A.call(de, "finallyLoc");
              if (Me && Oe) {
                if (this.prev < de.catchLoc) return he(de.catchLoc, true);
                if (this.prev < de.finallyLoc) return he(de.finallyLoc);
              } else if (Me) {
                if (this.prev < de.catchLoc) return he(de.catchLoc, true);
              } else {
                if (!Oe) throw Error("try statement without catch or finally");
                if (this.prev < de.finallyLoc) return he(de.finallyLoc);
              }
            }
          }
        },
        abrupt: function(Y, ie) {
          for (var he = this.tryEntries.length - 1; he >= 0; --he) {
            var ve = this.tryEntries[he];
            if (ve.tryLoc <= this.prev && A.call(ve, "finallyLoc") && this.prev < ve.finallyLoc) {
              var de = ve;
              break;
            }
          }
          de && (Y === "break" || Y === "continue") && de.tryLoc <= ie && ie <= de.finallyLoc && (de = null);
          var Pe = de ? de.completion : {};
          return Pe.type = Y, Pe.arg = ie, de ? (this.method = "next", this.next = de.finallyLoc, V) : this.complete(Pe);
        },
        complete: function(Y, ie) {
          if (Y.type === "throw") throw Y.arg;
          return Y.type === "break" || Y.type === "continue" ? this.next = Y.arg : Y.type === "return" ? (this.rval = this.arg = Y.arg, this.method = "return", this.next = "end") : Y.type === "normal" && ie && (this.next = ie), V;
        },
        finish: function(Y) {
          for (var ie = this.tryEntries.length - 1; ie >= 0; --ie) {
            var he = this.tryEntries[ie];
            if (he.finallyLoc === Y) return this.complete(he.completion, he.afterLoc), nt(he), V;
          }
        },
        catch: function(Y) {
          for (var ie = this.tryEntries.length - 1; ie >= 0; --ie) {
            var he = this.tryEntries[ie];
            if (he.tryLoc === Y) {
              var ve = he.completion;
              if (ve.type === "throw") {
                var de = ve.arg;
                nt(he);
              }
              return de;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function(Y, ie, he) {
          return this.delegate = {
            iterator: ct(Y),
            resultName: ie,
            nextLoc: he
          }, this.method === "next" && (this.arg = k), V;
        }
      }, w;
    }
    function b(k, w, C, A, O, I, Z) {
      try {
        var q = k[I](Z), $ = q.value;
      } catch (ne) {
        return void C(ne);
      }
      q.done ? w($) : Promise.resolve($).then(A, O);
    }
    function d(k) {
      return function() {
        var w = this, C = arguments;
        return new Promise(function(A, O) {
          var I = k.apply(w, C);
          function Z($) {
            b(I, A, O, Z, q, "next", $);
          }
          function q($) {
            b(I, A, O, Z, q, "throw", $);
          }
          Z(void 0);
        });
      };
    }
    function f(k, w) {
      if (!(k instanceof w)) throw new TypeError("Cannot call a class as a function");
    }
    function h(k, w) {
      for (var C = 0; C < w.length; C++) {
        var A = w[C];
        A.enumerable = A.enumerable || false, A.configurable = true, "value" in A && (A.writable = true), Object.defineProperty(k, K(A.key), A);
      }
    }
    function c(k, w, C) {
      return w && h(k.prototype, w), Object.defineProperty(k, "prototype", {
        writable: false
      }), k;
    }
    function K(k) {
      var w = x(k, "string");
      return X(w) == "symbol" ? w : w + "";
    }
    function x(k, w) {
      if (X(k) != "object" || !k) return k;
      var C = k[Symbol.toPrimitive];
      if (C !== void 0) {
        var A = C.call(k, w);
        if (X(A) != "object") return A;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(k);
    }
    var F = function() {
      function k() {
        f(this, k), this._cipher = null, this._counter = new Uint8Array(16);
      }
      return c(k, [
        {
          key: "setKey",
          value: function() {
            var w = d(g().mark(function A(O) {
              return g().wrap(function(Z) {
                for (; ; ) switch (Z.prev = Z.next) {
                  case 0:
                    return Z.next = 2, r.default.importKey("raw", O, {
                      name: "AES-EAX"
                    }, false, [
                      "encrypt, decrypt"
                    ]);
                  case 2:
                    this._cipher = Z.sent;
                  case 3:
                  case "end":
                    return Z.stop();
                }
              }, A, this);
            }));
            function C(A) {
              return w.apply(this, arguments);
            }
            return C;
          }()
        },
        {
          key: "makeMessage",
          value: function() {
            var w = d(g().mark(function A(O) {
              var I, Z, q, $;
              return g().wrap(function(E) {
                for (; ; ) switch (E.prev = E.next) {
                  case 0:
                    return I = new Uint8Array([
                      (O.length & 65280) >>> 8,
                      O.length & 255
                    ]), E.next = 3, r.default.encrypt({
                      name: "AES-EAX",
                      iv: this._counter,
                      additionalData: I
                    }, this._cipher, O);
                  case 3:
                    for (Z = E.sent, q = 0; q < 16 && this._counter[q]++ === 255; q++) ;
                    return $ = new Uint8Array(O.length + 2 + 16), $.set(I), $.set(Z, 2), E.abrupt("return", $);
                  case 9:
                  case "end":
                    return E.stop();
                }
              }, A, this);
            }));
            function C(A) {
              return w.apply(this, arguments);
            }
            return C;
          }()
        },
        {
          key: "receiveMessage",
          value: function() {
            var w = d(g().mark(function A(O, I) {
              var Z, q, $;
              return g().wrap(function(E) {
                for (; ; ) switch (E.prev = E.next) {
                  case 0:
                    return Z = new Uint8Array([
                      (O & 65280) >>> 8,
                      O & 255
                    ]), E.next = 3, r.default.decrypt({
                      name: "AES-EAX",
                      iv: this._counter,
                      additionalData: Z
                    }, this._cipher, I);
                  case 3:
                    for (q = E.sent, $ = 0; $ < 16 && this._counter[$]++ === 255; $++) ;
                    return E.abrupt("return", q);
                  case 6:
                  case "end":
                    return E.stop();
                }
              }, A, this);
            }));
            function C(A, O) {
              return w.apply(this, arguments);
            }
            return C;
          }()
        }
      ]);
    }();
    e.default = function(k) {
      function w(C, A) {
        var O;
        return f(this, w), O = a(this, w), O._hasStarted = false, O._checkSock = null, O._checkCredentials = null, O._approveServerResolve = null, O._sockReject = null, O._credentialsReject = null, O._approveServerReject = null, O._sock = C, O._getCredentials = A, O;
      }
      return l(w, k), c(w, [
        {
          key: "_waitSockAsync",
          value: function(A) {
            var O = this;
            return new Promise(function(I, Z) {
              var q = function() {
                return !O._sock.rQwait("RA2", A);
              };
              q() ? I() : (O._checkSock = function() {
                q() && (I(), O._checkSock = null, O._sockReject = null);
              }, O._sockReject = Z);
            });
          }
        },
        {
          key: "_waitApproveKeyAsync",
          value: function() {
            var A = this;
            return new Promise(function(O, I) {
              A._approveServerResolve = O, A._approveServerReject = I;
            });
          }
        },
        {
          key: "_waitCredentialsAsync",
          value: function(A) {
            var O = this, I = function() {
              return A === 1 && O._getCredentials().username !== void 0 && O._getCredentials().password !== void 0 ? true : A === 2 && O._getCredentials().password !== void 0;
            };
            return new Promise(function(Z, q) {
              I() ? Z() : (O._checkCredentials = function() {
                I() && (Z(), O._checkCredentials = null, O._credentialsReject = null);
              }, O._credentialsReject = q);
            });
          }
        },
        {
          key: "checkInternalEvents",
          value: function() {
            this._checkSock !== null && this._checkSock(), this._checkCredentials !== null && this._checkCredentials();
          }
        },
        {
          key: "approveServer",
          value: function() {
            this._approveServerResolve !== null && (this._approveServerResolve(), this._approveServerResolve = null);
          }
        },
        {
          key: "disconnect",
          value: function() {
            this._sockReject !== null && (this._sockReject(new Error("disconnect normally")), this._sockReject = null), this._credentialsReject !== null && (this._credentialsReject(new Error("disconnect normally")), this._credentialsReject = null), this._approveServerReject !== null && (this._approveServerReject(new Error("disconnect normally")), this._approveServerReject = null);
          }
        },
        {
          key: "negotiateRA2neAuthAsync",
          value: function() {
            var C = d(g().mark(function O() {
              var I, Z, q, $, ne, E, p, m, L, B, M, V, re, oe, ce, pe, ye, Ne, je, st, Ue, He, rt, Lt, nt, $e, ct, se, Y, ie, he, ve, de, Pe, Me;
              return g().wrap(function(le) {
                for (; ; ) switch (le.prev = le.next) {
                  case 0:
                    return this._hasStarted = true, le.next = 3, this._waitSockAsync(4);
                  case 3:
                    if (I = this._sock.rQpeekBytes(4), Z = this._sock.rQshift32(), !(Z < 1024)) {
                      le.next = 9;
                      break;
                    }
                    throw new Error("RA2: server public key is too short: " + Z);
                  case 9:
                    if (!(Z > 8192)) {
                      le.next = 11;
                      break;
                    }
                    throw new Error("RA2: server public key is too long: " + Z);
                  case 11:
                    return q = Math.ceil(Z / 8), le.next = 14, this._waitSockAsync(q * 2);
                  case 14:
                    return $ = this._sock.rQshiftBytes(q), ne = this._sock.rQshiftBytes(q), le.next = 18, r.default.importKey("raw", {
                      n: $,
                      e: ne
                    }, {
                      name: "RSA-PKCS1-v1_5"
                    }, false, [
                      "encrypt"
                    ]);
                  case 18:
                    return E = le.sent, p = new Uint8Array(4 + q * 2), p.set(I), p.set($, 4), p.set(ne, 4 + q), m = this._waitApproveKeyAsync(), this.dispatchEvent(new CustomEvent("serververification", {
                      detail: {
                        type: "RSA",
                        publickey: p
                      }
                    })), le.next = 27, m;
                  case 27:
                    return L = 2048, B = Math.ceil(L / 8), le.next = 31, r.default.generateKey({
                      name: "RSA-PKCS1-v1_5",
                      modulusLength: L,
                      publicExponent: new Uint8Array([
                        1,
                        0,
                        1
                      ])
                    }, true, [
                      "encrypt"
                    ]);
                  case 31:
                    return M = le.sent.privateKey, le.next = 34, r.default.exportKey("raw", M);
                  case 34:
                    return V = le.sent, re = V.n, oe = V.e, ce = new Uint8Array(4 + B * 2), ce[0] = (L & 4278190080) >>> 24, ce[1] = (L & 16711680) >>> 16, ce[2] = (L & 65280) >>> 8, ce[3] = L & 255, ce.set(re, 4), ce.set(oe, 4 + B), this._sock.sQpushBytes(ce), this._sock.flush(), pe = new Uint8Array(16), window.crypto.getRandomValues(pe), le.next = 50, r.default.encrypt({
                      name: "RSA-PKCS1-v1_5"
                    }, E, pe);
                  case 50:
                    return ye = le.sent, Ne = new Uint8Array(2 + q), Ne[0] = (q & 65280) >>> 8, Ne[1] = q & 255, Ne.set(ye, 2), this._sock.sQpushBytes(Ne), this._sock.flush(), le.next = 59, this._waitSockAsync(2);
                  case 59:
                    if (this._sock.rQshift16() === B) {
                      le.next = 61;
                      break;
                    }
                    throw new Error("RA2: wrong encrypted message length");
                  case 61:
                    return je = this._sock.rQshiftBytes(B), le.next = 64, r.default.decrypt({
                      name: "RSA-PKCS1-v1_5"
                    }, M, je);
                  case 64:
                    if (st = le.sent, !(st === null || st.length !== 16)) {
                      le.next = 67;
                      break;
                    }
                    throw new Error("RA2: corrupted server encrypted random");
                  case 67:
                    return Ue = new Uint8Array(32), He = new Uint8Array(32), Ue.set(st), Ue.set(pe, 16), He.set(pe), He.set(st, 16), le.next = 75, window.crypto.subtle.digest("SHA-1", Ue);
                  case 75:
                    return Ue = le.sent, Ue = new Uint8Array(Ue).slice(0, 16), le.next = 79, window.crypto.subtle.digest("SHA-1", He);
                  case 79:
                    return He = le.sent, He = new Uint8Array(He).slice(0, 16), rt = new F(), le.next = 84, rt.setKey(Ue);
                  case 84:
                    return Lt = new F(), le.next = 87, Lt.setKey(He);
                  case 87:
                    return nt = new Uint8Array(8 + q * 2 + B * 2), $e = new Uint8Array(8 + q * 2 + B * 2), nt.set(p), nt.set(ce, 4 + q * 2), $e.set(ce), $e.set(p, 4 + B * 2), le.next = 95, window.crypto.subtle.digest("SHA-1", nt);
                  case 95:
                    return nt = le.sent, le.next = 98, window.crypto.subtle.digest("SHA-1", $e);
                  case 98:
                    return $e = le.sent, nt = new Uint8Array(nt), $e = new Uint8Array($e), le.t0 = this._sock, le.next = 104, rt.makeMessage($e);
                  case 104:
                    return le.t1 = le.sent, le.t0.sQpushBytes.call(le.t0, le.t1), this._sock.flush(), le.next = 109, this._waitSockAsync(38);
                  case 109:
                    if (this._sock.rQshift16() === 20) {
                      le.next = 111;
                      break;
                    }
                    throw new Error("RA2: wrong server hash");
                  case 111:
                    return le.next = 113, Lt.receiveMessage(20, this._sock.rQshiftBytes(36));
                  case 113:
                    if (ct = le.sent, ct !== null) {
                      le.next = 116;
                      break;
                    }
                    throw new Error("RA2: failed to authenticate the message");
                  case 116:
                    se = 0;
                  case 117:
                    if (!(se < 20)) {
                      le.next = 123;
                      break;
                    }
                    if (ct[se] === nt[se]) {
                      le.next = 120;
                      break;
                    }
                    throw new Error("RA2: wrong server hash");
                  case 120:
                    se++, le.next = 117;
                    break;
                  case 123:
                    return le.next = 125, this._waitSockAsync(19);
                  case 125:
                    if (this._sock.rQshift16() === 1) {
                      le.next = 127;
                      break;
                    }
                    throw new Error("RA2: wrong subtype");
                  case 127:
                    return le.next = 129, Lt.receiveMessage(1, this._sock.rQshiftBytes(17));
                  case 129:
                    if (Y = le.sent, Y !== null) {
                      le.next = 132;
                      break;
                    }
                    throw new Error("RA2: failed to authenticate the message");
                  case 132:
                    if (Y = Y[0], ie = this._waitCredentialsAsync(Y), Y !== 1) {
                      le.next = 138;
                      break;
                    }
                    (this._getCredentials().username === void 0 || this._getCredentials().password === void 0) && this.dispatchEvent(new CustomEvent("credentialsrequired", {
                      detail: {
                        types: [
                          "username",
                          "password"
                        ]
                      }
                    })), le.next = 143;
                    break;
                  case 138:
                    if (Y !== 2) {
                      le.next = 142;
                      break;
                    }
                    this._getCredentials().password === void 0 && this.dispatchEvent(new CustomEvent("credentialsrequired", {
                      detail: {
                        types: [
                          "password"
                        ]
                      }
                    })), le.next = 143;
                    break;
                  case 142:
                    throw new Error("RA2: wrong subtype");
                  case 143:
                    return le.next = 145, ie;
                  case 145:
                    for (Y === 1 ? he = (0, t.encodeUTF8)(this._getCredentials().username).slice(0, 255) : he = "", ve = (0, t.encodeUTF8)(this._getCredentials().password).slice(0, 255), de = new Uint8Array(he.length + ve.length + 2), de[0] = he.length, de[he.length + 1] = ve.length, Pe = 0; Pe < he.length; Pe++) de[Pe + 1] = he.charCodeAt(Pe);
                    for (Me = 0; Me < ve.length; Me++) de[he.length + 2 + Me] = ve.charCodeAt(Me);
                    return le.t2 = this._sock, le.next = 155, rt.makeMessage(de);
                  case 155:
                    le.t3 = le.sent, le.t2.sQpushBytes.call(le.t2, le.t3), this._sock.flush();
                  case 158:
                  case "end":
                    return le.stop();
                }
              }, O, this);
            }));
            function A() {
              return C.apply(this, arguments);
            }
            return A;
          }()
        },
        {
          key: "hasStarted",
          get: function() {
            return this._hasStarted;
          },
          set: function(A) {
            this._hasStarted = A;
          }
        }
      ]);
    }(n.default);
  })(is);
  var fs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(s) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, t(s);
    }
    function n(s, y) {
      if (!(s instanceof y)) throw new TypeError("Cannot call a class as a function");
    }
    function r(s, y) {
      for (var u = 0; u < y.length; u++) {
        var l = y[u];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(s, a(l.key), l);
      }
    }
    function i(s, y, u) {
      return y && r(s.prototype, y), Object.defineProperty(s, "prototype", {
        writable: false
      }), s;
    }
    function a(s) {
      var y = o(s, "string");
      return t(y) == "symbol" ? y : y + "";
    }
    function o(s, y) {
      if (t(s) != "object" || !s) return s;
      var u = s[Symbol.toPrimitive];
      if (u !== void 0) {
        var l = u.call(s, y);
        if (t(l) != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(s);
    }
    e.default = function() {
      function s() {
        n(this, s), this._lines = 0;
      }
      return i(s, [
        {
          key: "decodeRect",
          value: function(u, l, S, X, g, b, d) {
            if (S === 0 || X === 0) return true;
            this._lines === 0 && (this._lines = X);
            for (var f = d == 8 ? 1 : 4, h = S * f; this._lines > 0; ) {
              if (g.rQwait("RAW", h)) return false;
              var c = l + (X - this._lines), K = g.rQshiftBytes(h, false);
              if (d == 8) {
                for (var x = new Uint8Array(S * 4), F = 0; F < S; F++) x[F * 4 + 0] = (K[F] >> 0 & 3) * 255 / 3, x[F * 4 + 1] = (K[F] >> 2 & 3) * 255 / 3, x[F * 4 + 2] = (K[F] >> 4 & 3) * 255 / 3, x[F * 4 + 3] = 255;
                K = x;
              }
              for (var k = 0; k < S; k++) K[k * 4 + 3] = 255;
              b.blitImage(u, c, S, 1, K, 0), this._lines--;
            }
            return true;
          }
        }
      ]);
    }();
  })(fs);
  var cs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(s) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, t(s);
    }
    function n(s, y) {
      if (!(s instanceof y)) throw new TypeError("Cannot call a class as a function");
    }
    function r(s, y) {
      for (var u = 0; u < y.length; u++) {
        var l = y[u];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(s, a(l.key), l);
      }
    }
    function i(s, y, u) {
      return y && r(s.prototype, y), Object.defineProperty(s, "prototype", {
        writable: false
      }), s;
    }
    function a(s) {
      var y = o(s, "string");
      return t(y) == "symbol" ? y : y + "";
    }
    function o(s, y) {
      if (t(s) != "object" || !s) return s;
      var u = s[Symbol.toPrimitive];
      if (u !== void 0) {
        var l = u.call(s, y);
        if (t(l) != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(s);
    }
    e.default = function() {
      function s() {
        n(this, s);
      }
      return i(s, [
        {
          key: "decodeRect",
          value: function(u, l, S, X, g, b, d) {
            if (g.rQwait("COPYRECT", 4)) return false;
            var f = g.rQshift16(), h = g.rQshift16();
            return S === 0 || X === 0 || b.copyImage(f, h, u, l, S, X), true;
          }
        }
      ]);
    }();
  })(cs);
  var hs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(s) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, t(s);
    }
    function n(s, y) {
      if (!(s instanceof y)) throw new TypeError("Cannot call a class as a function");
    }
    function r(s, y) {
      for (var u = 0; u < y.length; u++) {
        var l = y[u];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(s, a(l.key), l);
      }
    }
    function i(s, y, u) {
      return y && r(s.prototype, y), Object.defineProperty(s, "prototype", {
        writable: false
      }), s;
    }
    function a(s) {
      var y = o(s, "string");
      return t(y) == "symbol" ? y : y + "";
    }
    function o(s, y) {
      if (t(s) != "object" || !s) return s;
      var u = s[Symbol.toPrimitive];
      if (u !== void 0) {
        var l = u.call(s, y);
        if (t(l) != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(s);
    }
    e.default = function() {
      function s() {
        n(this, s), this._subrects = 0;
      }
      return i(s, [
        {
          key: "decodeRect",
          value: function(u, l, S, X, g, b, d) {
            if (this._subrects === 0) {
              if (g.rQwait("RRE", 8)) return false;
              this._subrects = g.rQshift32();
              var f = g.rQshiftBytes(4);
              b.fillRect(u, l, S, X, f);
            }
            for (; this._subrects > 0; ) {
              if (g.rQwait("RRE", 12)) return false;
              var h = g.rQshiftBytes(4), c = g.rQshift16(), K = g.rQshift16(), x = g.rQshift16(), F = g.rQshift16();
              b.fillRect(u + c, l + K, x, F, h), this._subrects--;
            }
            return true;
          }
        }
      ]);
    }();
  })(hs);
  var ds = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = r(Re);
    function n(l) {
      if (typeof WeakMap != "function") return null;
      var S = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap();
      return (n = function(b) {
        return b ? X : S;
      })(l);
    }
    function r(l, S) {
      if (l && l.__esModule) return l;
      if (l === null || i(l) != "object" && typeof l != "function") return {
        default: l
      };
      var X = n(S);
      if (X && X.has(l)) return X.get(l);
      var g = {
        __proto__: null
      }, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var d in l) if (d !== "default" && {}.hasOwnProperty.call(l, d)) {
        var f = b ? Object.getOwnPropertyDescriptor(l, d) : null;
        f && (f.get || f.set) ? Object.defineProperty(g, d, f) : g[d] = l[d];
      }
      return g.default = l, X && X.set(l, g), g;
    }
    function i(l) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
        return typeof S;
      } : function(S) {
        return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
      }, i(l);
    }
    function a(l, S) {
      if (!(l instanceof S)) throw new TypeError("Cannot call a class as a function");
    }
    function o(l, S) {
      for (var X = 0; X < S.length; X++) {
        var g = S[X];
        g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(l, y(g.key), g);
      }
    }
    function s(l, S, X) {
      return S && o(l.prototype, S), Object.defineProperty(l, "prototype", {
        writable: false
      }), l;
    }
    function y(l) {
      var S = u(l, "string");
      return i(S) == "symbol" ? S : S + "";
    }
    function u(l, S) {
      if (i(l) != "object" || !l) return l;
      var X = l[Symbol.toPrimitive];
      if (X !== void 0) {
        var g = X.call(l, S);
        if (i(g) != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(l);
    }
    e.default = function() {
      function l() {
        a(this, l), this._tiles = 0, this._lastsubencoding = 0, this._tileBuffer = new Uint8Array(16 * 16 * 4);
      }
      return s(l, [
        {
          key: "decodeRect",
          value: function(X, g, b, d, f, h, c) {
            for (this._tiles === 0 && (this._tilesX = Math.ceil(b / 16), this._tilesY = Math.ceil(d / 16), this._totalTiles = this._tilesX * this._tilesY, this._tiles = this._totalTiles); this._tiles > 0; ) {
              var K = 1;
              if (f.rQwait("HEXTILE", K)) return false;
              var x = f.rQpeek8();
              if (x > 30) throw new Error("Illegal hextile subencoding (subencoding: " + x + ")");
              var F = this._totalTiles - this._tiles, k = F % this._tilesX, w = Math.floor(F / this._tilesX), C = X + k * 16, A = g + w * 16, O = Math.min(16, X + b - C), I = Math.min(16, g + d - A);
              if (x & 1) K += O * I * 4;
              else if (x & 2 && (K += 4), x & 4 && (K += 4), x & 8) {
                if (K++, f.rQwait("HEXTILE", K)) return false;
                var Z = f.rQpeekBytes(K).at(-1);
                x & 16 ? K += Z * 6 : K += Z * 2;
              }
              if (f.rQwait("HEXTILE", K)) return false;
              if (f.rQshift8(), x === 0) this._lastsubencoding & 1 ? t.Debug("     Ignoring blank after RAW") : h.fillRect(C, A, O, I, this._background);
              else if (x & 1) {
                for (var q = O * I, $ = f.rQshiftBytes(q * 4, false), ne = 0; ne < q; ne++) $[ne * 4 + 3] = 255;
                h.blitImage(C, A, O, I, $, 0);
              } else {
                if (x & 2 && (this._background = new Uint8Array(f.rQshiftBytes(4))), x & 4 && (this._foreground = new Uint8Array(f.rQshiftBytes(4))), this._startTile(C, A, O, I, this._background), x & 8) for (var E = f.rQshift8(), p = 0; p < E; p++) {
                  var m = void 0;
                  x & 16 ? m = f.rQshiftBytes(4) : m = this._foreground;
                  var L = f.rQshift8(), B = L >> 4, M = L & 15, V = f.rQshift8(), re = (V >> 4) + 1, oe = (V & 15) + 1;
                  this._subTile(B, M, re, oe, m);
                }
                this._finishTile(h);
              }
              this._lastsubencoding = x, this._tiles--;
            }
            return true;
          }
        },
        {
          key: "_startTile",
          value: function(X, g, b, d, f) {
            this._tileX = X, this._tileY = g, this._tileW = b, this._tileH = d;
            for (var h = f[0], c = f[1], K = f[2], x = this._tileBuffer, F = 0; F < b * d * 4; F += 4) x[F] = h, x[F + 1] = c, x[F + 2] = K, x[F + 3] = 255;
          }
        },
        {
          key: "_subTile",
          value: function(X, g, b, d, f) {
            for (var h = f[0], c = f[1], K = f[2], x = X + b, F = g + d, k = this._tileBuffer, w = this._tileW, C = g; C < F; C++) for (var A = X; A < x; A++) {
              var O = (A + C * w) * 4;
              k[O] = h, k[O + 1] = c, k[O + 2] = K, k[O + 3] = 255;
            }
          }
        },
        {
          key: "_finishTile",
          value: function(X) {
            X.blitImage(this._tileX, this._tileY, this._tileW, this._tileH, this._tileBuffer, 0);
          }
        }
      ]);
    }();
  })(ds);
  var _s = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = n(Nr);
    function n(u) {
      return u && u.__esModule ? u : {
        default: u
      };
    }
    function r(u) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
        return typeof l;
      } : function(l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
      }, r(u);
    }
    function i(u, l) {
      if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
    }
    function a(u, l) {
      for (var S = 0; S < l.length; S++) {
        var X = l[S];
        X.enumerable = X.enumerable || false, X.configurable = true, "value" in X && (X.writable = true), Object.defineProperty(u, s(X.key), X);
      }
    }
    function o(u, l, S) {
      return l && a(u.prototype, l), Object.defineProperty(u, "prototype", {
        writable: false
      }), u;
    }
    function s(u) {
      var l = y(u, "string");
      return r(l) == "symbol" ? l : l + "";
    }
    function y(u, l) {
      if (r(u) != "object" || !u) return u;
      var S = u[Symbol.toPrimitive];
      if (S !== void 0) {
        var X = S.call(u, l);
        if (r(X) != "object") return X;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    }
    e.default = function() {
      function u() {
        i(this, u), this._zlib = new t.default(), this._length = 0;
      }
      return o(u, [
        {
          key: "decodeRect",
          value: function(S, X, g, b, d, f, h) {
            if (g === 0 || b === 0) return true;
            if (this._length === 0) {
              if (d.rQwait("ZLIB", 4)) return false;
              this._length = d.rQshift32();
            }
            if (d.rQwait("ZLIB", this._length)) return false;
            var c = new Uint8Array(d.rQshiftBytes(this._length, false));
            this._length = 0, this._zlib.setInput(c), c = this._zlib.inflate(g * b * 4), this._zlib.setInput(null);
            for (var K = 0; K < g * b; K++) c[K * 4 + 3] = 255;
            return f.blitImage(S, X, g, b, c, 0), true;
          }
        }
      ]);
    }();
  })(_s);
  var ki = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = a(Re), n = r(Nr);
    function r(X) {
      return X && X.__esModule ? X : {
        default: X
      };
    }
    function i(X) {
      if (typeof WeakMap != "function") return null;
      var g = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
      return (i = function(f) {
        return f ? b : g;
      })(X);
    }
    function a(X, g) {
      if (X && X.__esModule) return X;
      if (X === null || o(X) != "object" && typeof X != "function") return {
        default: X
      };
      var b = i(g);
      if (b && b.has(X)) return b.get(X);
      var d = {
        __proto__: null
      }, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var h in X) if (h !== "default" && {}.hasOwnProperty.call(X, h)) {
        var c = f ? Object.getOwnPropertyDescriptor(X, h) : null;
        c && (c.get || c.set) ? Object.defineProperty(d, h, c) : d[h] = X[h];
      }
      return d.default = X, b && b.set(X, d), d;
    }
    function o(X) {
      "@babel/helpers - typeof";
      return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
        return typeof g;
      } : function(g) {
        return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
      }, o(X);
    }
    function s(X, g) {
      if (!(X instanceof g)) throw new TypeError("Cannot call a class as a function");
    }
    function y(X, g) {
      for (var b = 0; b < g.length; b++) {
        var d = g[b];
        d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(X, l(d.key), d);
      }
    }
    function u(X, g, b) {
      return g && y(X.prototype, g), Object.defineProperty(X, "prototype", {
        writable: false
      }), X;
    }
    function l(X) {
      var g = S(X, "string");
      return o(g) == "symbol" ? g : g + "";
    }
    function S(X, g) {
      if (o(X) != "object" || !X) return X;
      var b = X[Symbol.toPrimitive];
      if (b !== void 0) {
        var d = b.call(X, g);
        if (o(d) != "object") return d;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(X);
    }
    e.default = function() {
      function X() {
        s(this, X), this._ctl = null, this._filter = null, this._numColors = 0, this._palette = new Uint8Array(1024), this._len = 0, this._zlibs = [];
        for (var g = 0; g < 4; g++) this._zlibs[g] = new n.default();
      }
      return u(X, [
        {
          key: "decodeRect",
          value: function(b, d, f, h, c, K, x) {
            if (this._ctl === null) {
              if (c.rQwait("TIGHT compression-control", 1)) return false;
              this._ctl = c.rQshift8();
              for (var F = 0; F < 4; F++) this._ctl >> F & 1 && (this._zlibs[F].reset(), t.Info("Reset zlib stream " + F));
              this._ctl = this._ctl >> 4;
            }
            var k;
            if (this._ctl === 8) k = this._fillRect(b, d, f, h, c, K, x);
            else if (this._ctl === 9) k = this._jpegRect(b, d, f, h, c, K, x);
            else if (this._ctl === 10) k = this._pngRect(b, d, f, h, c, K, x);
            else if (!(this._ctl & 8)) k = this._basicRect(this._ctl, b, d, f, h, c, K, x);
            else throw new Error("Illegal tight compression received (ctl: " + this._ctl + ")");
            return k && (this._ctl = null), k;
          }
        },
        {
          key: "_fillRect",
          value: function(b, d, f, h, c, K, x) {
            if (c.rQwait("TIGHT", 3)) return false;
            var F = c.rQshiftBytes(3);
            return K.fillRect(b, d, f, h, F, false), true;
          }
        },
        {
          key: "_jpegRect",
          value: function(b, d, f, h, c, K, x) {
            var F = this._readData(c);
            return F === null ? false : (K.imageRect(b, d, f, h, "image/jpeg", F), true);
          }
        },
        {
          key: "_pngRect",
          value: function(b, d, f, h, c, K, x) {
            throw new Error("PNG received in standard Tight rect");
          }
        },
        {
          key: "_basicRect",
          value: function(b, d, f, h, c, K, x, F) {
            if (this._filter === null) if (b & 4) {
              if (K.rQwait("TIGHT", 1)) return false;
              this._filter = K.rQshift8();
            } else this._filter = 0;
            var k = b & 3, w;
            switch (this._filter) {
              case 0:
                w = this._copyFilter(k, d, f, h, c, K, x, F);
                break;
              case 1:
                w = this._paletteFilter(k, d, f, h, c, K, x, F);
                break;
              case 2:
                w = this._gradientFilter(k, d, f, h, c, K, x, F);
                break;
              default:
                throw new Error("Illegal tight filter received (ctl: " + this._filter + ")");
            }
            return w && (this._filter = null), w;
          }
        },
        {
          key: "_copyFilter",
          value: function(b, d, f, h, c, K, x, F) {
            var k = h * c * 3, w;
            if (k === 0) return true;
            if (k < 12) {
              if (K.rQwait("TIGHT", k)) return false;
              w = K.rQshiftBytes(k);
            } else {
              if (w = this._readData(K), w === null) return false;
              this._zlibs[b].setInput(w), w = this._zlibs[b].inflate(k), this._zlibs[b].setInput(null);
            }
            for (var C = new Uint8Array(h * c * 4), A = 0, O = 0; A < h * c * 4; A += 4, O += 3) C[A] = w[O], C[A + 1] = w[O + 1], C[A + 2] = w[O + 2], C[A + 3] = 255;
            return x.blitImage(d, f, h, c, C, 0, false), true;
          }
        },
        {
          key: "_paletteFilter",
          value: function(b, d, f, h, c, K, x, F) {
            if (this._numColors === 0) {
              if (K.rQwait("TIGHT palette", 1)) return false;
              var k = K.rQpeek8() + 1, w = k * 3;
              if (K.rQwait("TIGHT palette", 1 + w)) return false;
              this._numColors = k, K.rQskipBytes(1), K.rQshiftTo(this._palette, w);
            }
            var C = this._numColors <= 2 ? 1 : 8, A = Math.floor((h * C + 7) / 8), O = A * c, I;
            if (O === 0) return true;
            if (O < 12) {
              if (K.rQwait("TIGHT", O)) return false;
              I = K.rQshiftBytes(O);
            } else {
              if (I = this._readData(K), I === null) return false;
              this._zlibs[b].setInput(I), I = this._zlibs[b].inflate(O), this._zlibs[b].setInput(null);
            }
            return this._numColors == 2 ? this._monoRect(d, f, h, c, I, this._palette, x) : this._paletteRect(d, f, h, c, I, this._palette, x), this._numColors = 0, true;
          }
        },
        {
          key: "_monoRect",
          value: function(b, d, f, h, c, K, x) {
            for (var F = this._getScratchBuffer(f * h * 4), k = Math.floor((f + 7) / 8), w = Math.floor(f / 8), C = 0; C < h; C++) {
              var A = void 0, O = void 0, I = void 0;
              for (I = 0; I < w; I++) for (var Z = 7; Z >= 0; Z--) A = (C * f + I * 8 + 7 - Z) * 4, O = (c[C * k + I] >> Z & 1) * 3, F[A] = K[O], F[A + 1] = K[O + 1], F[A + 2] = K[O + 2], F[A + 3] = 255;
              for (var q = 7; q >= 8 - f % 8; q--) A = (C * f + I * 8 + 7 - q) * 4, O = (c[C * k + I] >> q & 1) * 3, F[A] = K[O], F[A + 1] = K[O + 1], F[A + 2] = K[O + 2], F[A + 3] = 255;
            }
            x.blitImage(b, d, f, h, F, 0, false);
          }
        },
        {
          key: "_paletteRect",
          value: function(b, d, f, h, c, K, x) {
            for (var F = this._getScratchBuffer(f * h * 4), k = f * h * 4, w = 0, C = 0; w < k; w += 4, C++) {
              var A = c[C] * 3;
              F[w] = K[A], F[w + 1] = K[A + 1], F[w + 2] = K[A + 2], F[w + 3] = 255;
            }
            x.blitImage(b, d, f, h, F, 0, false);
          }
        },
        {
          key: "_gradientFilter",
          value: function(b, d, f, h, c, K, x, F) {
            var k = h * c * 3, w;
            if (k === 0) return true;
            if (k < 12) {
              if (K.rQwait("TIGHT", k)) return false;
              w = K.rQshiftBytes(k);
            } else {
              if (w = this._readData(K), w === null) return false;
              this._zlibs[b].setInput(w), w = this._zlibs[b].inflate(k), this._zlibs[b].setInput(null);
            }
            for (var C = new Uint8Array(4 * h * c), A = 0, O = 0, I = new Uint8Array(3), Z = 0; Z < h; Z++) {
              for (var q = 0; q < 3; q++) {
                var $ = I[q], ne = w[O++] + $;
                C[A++] = ne, I[q] = ne;
              }
              C[A++] = 255;
            }
            for (var E = 0, p = new Uint8Array(3), m = new Uint8Array(3), L = 1; L < c; L++) {
              I.fill(0), m.fill(0);
              for (var B = 0; B < h; B++) {
                for (var M = 0; M < 3; M++) {
                  p[M] = C[E++];
                  var V = I[M] + p[M] - m[M];
                  V < 0 ? V = 0 : V > 255 && (V = 255);
                  var re = w[O++] + V;
                  C[A++] = re, m[M] = p[M], I[M] = re;
                }
                C[A++] = 255, E++;
              }
            }
            return x.blitImage(d, f, h, c, C, 0, false), true;
          }
        },
        {
          key: "_readData",
          value: function(b) {
            if (this._len === 0) {
              if (b.rQwait("TIGHT", 3)) return null;
              var d;
              d = b.rQshift8(), this._len = d & 127, d & 128 && (d = b.rQshift8(), this._len |= (d & 127) << 7, d & 128 && (d = b.rQshift8(), this._len |= d << 14));
            }
            if (b.rQwait("TIGHT", this._len)) return null;
            var f = b.rQshiftBytes(this._len, false);
            return this._len = 0, f;
          }
        },
        {
          key: "_getScratchBuffer",
          value: function(b) {
            return (!this._scratchBuffer || this._scratchBuffer.length < b) && (this._scratchBuffer = new Uint8Array(b)), this._scratchBuffer;
          }
        }
      ]);
    }();
  })(ki);
  var ps = {};
  (function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
        return typeof h;
      } : function(h) {
        return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var n = r(ki);
    function r(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }
    function i(f, h) {
      if (!(f instanceof h)) throw new TypeError("Cannot call a class as a function");
    }
    function a(f, h) {
      for (var c = 0; c < h.length; c++) {
        var K = h[c];
        K.enumerable = K.enumerable || false, K.configurable = true, "value" in K && (K.writable = true), Object.defineProperty(f, s(K.key), K);
      }
    }
    function o(f, h, c) {
      return h && a(f.prototype, h), Object.defineProperty(f, "prototype", {
        writable: false
      }), f;
    }
    function s(f) {
      var h = y(f, "string");
      return t(h) == "symbol" ? h : h + "";
    }
    function y(f, h) {
      if (t(f) != "object" || !f) return f;
      var c = f[Symbol.toPrimitive];
      if (c !== void 0) {
        var K = c.call(f, h);
        if (t(K) != "object") return K;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(f);
    }
    function u(f, h, c) {
      return h = g(h), l(f, X() ? Reflect.construct(h, c || [], g(f).constructor) : h.apply(f, c));
    }
    function l(f, h) {
      if (h && (t(h) == "object" || typeof h == "function")) return h;
      if (h !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return S(f);
    }
    function S(f) {
      if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function X() {
      try {
        var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (X = function() {
        return !!f;
      })();
    }
    function g(f) {
      return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
        return h.__proto__ || Object.getPrototypeOf(h);
      }, g(f);
    }
    function b(f, h) {
      if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, {
        constructor: {
          value: f,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(f, "prototype", {
        writable: false
      }), h && d(f, h);
    }
    function d(f, h) {
      return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, K) {
        return c.__proto__ = K, c;
      }, d(f, h);
    }
    e.default = function(f) {
      function h() {
        return i(this, h), u(this, h, arguments);
      }
      return b(h, f), o(h, [
        {
          key: "_pngRect",
          value: function(K, x, F, k, w, C, A) {
            var O = this._readData(w);
            return O === null ? false : (C.imageRect(K, x, F, k, "image/png", O), true);
          }
        },
        {
          key: "_basicRect",
          value: function(K, x, F, k, w, C, A, O) {
            throw new Error("BasicCompression received in TightPNG rect");
          }
        }
      ]);
    }(n.default);
  })(ps);
  var vs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var t = n(Nr);
    function n(S) {
      return S && S.__esModule ? S : {
        default: S
      };
    }
    function r(S) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(X) {
        return typeof X;
      } : function(X) {
        return X && typeof Symbol == "function" && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X;
      }, r(S);
    }
    function i(S, X) {
      if (!(S instanceof X)) throw new TypeError("Cannot call a class as a function");
    }
    function a(S, X) {
      for (var g = 0; g < X.length; g++) {
        var b = X[g];
        b.enumerable = b.enumerable || false, b.configurable = true, "value" in b && (b.writable = true), Object.defineProperty(S, s(b.key), b);
      }
    }
    function o(S, X, g) {
      return X && a(S.prototype, X), Object.defineProperty(S, "prototype", {
        writable: false
      }), S;
    }
    function s(S) {
      var X = y(S, "string");
      return r(X) == "symbol" ? X : X + "";
    }
    function y(S, X) {
      if (r(S) != "object" || !S) return S;
      var g = S[Symbol.toPrimitive];
      if (g !== void 0) {
        var b = g.call(S, X);
        if (r(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(S);
    }
    var u = 64, l = 64;
    e.default = function() {
      function S() {
        i(this, S), this._length = 0, this._inflator = new t.default(), this._pixelBuffer = new Uint8Array(u * l * 4), this._tileBuffer = new Uint8Array(u * l * 4);
      }
      return o(S, [
        {
          key: "decodeRect",
          value: function(g, b, d, f, h, c, K) {
            if (this._length === 0) {
              if (h.rQwait("ZLib data length", 4)) return false;
              this._length = h.rQshift32();
            }
            if (h.rQwait("Zlib data", this._length)) return false;
            var x = h.rQshiftBytes(this._length, false);
            this._inflator.setInput(x);
            for (var F = b; F < b + f; F += l) for (var k = Math.min(l, b + f - F), w = g; w < g + d; w += u) {
              var C = Math.min(u, g + d - w), A = C * k, O = this._inflator.inflate(1)[0];
              if (O === 0) {
                var I = this._readPixels(A);
                c.blitImage(w, F, C, k, I, 0, false);
              } else if (O === 1) {
                var Z = this._readPixels(1);
                c.fillRect(w, F, C, k, [
                  Z[0],
                  Z[1],
                  Z[2]
                ]);
              } else if (O >= 2 && O <= 16) {
                var q = this._decodePaletteTile(O, A, C, k);
                c.blitImage(w, F, C, k, q, 0, false);
              } else if (O === 128) {
                var $ = this._decodeRLETile(A);
                c.blitImage(w, F, C, k, $, 0, false);
              } else if (O >= 130 && O <= 255) {
                var ne = this._decodeRLEPaletteTile(O - 128, A);
                c.blitImage(w, F, C, k, ne, 0, false);
              } else throw new Error("Unknown subencoding: " + O);
            }
            return this._length = 0, true;
          }
        },
        {
          key: "_getBitsPerPixelInPalette",
          value: function(g) {
            if (g <= 2) return 1;
            if (g <= 4) return 2;
            if (g <= 16) return 4;
          }
        },
        {
          key: "_readPixels",
          value: function(g) {
            for (var b = this._pixelBuffer, d = this._inflator.inflate(3 * g), f = 0, h = 0; f < g * 4; f += 4, h += 3) b[f] = d[h], b[f + 1] = d[h + 1], b[f + 2] = d[h + 2], b[f + 3] = 255;
            return b;
          }
        },
        {
          key: "_decodePaletteTile",
          value: function(g, b, d, f) {
            for (var h = this._tileBuffer, c = this._readPixels(g), K = this._getBitsPerPixelInPalette(g), x = (1 << K) - 1, F = 0, k = this._inflator.inflate(1)[0], w = 0; w < f; w++) {
              for (var C = 8 - K, A = 0; A < d; A++) {
                C < 0 && (C = 8 - K, k = this._inflator.inflate(1)[0]);
                var O = k >> C & x;
                h[F] = c[O * 4], h[F + 1] = c[O * 4 + 1], h[F + 2] = c[O * 4 + 2], h[F + 3] = c[O * 4 + 3], F += 4, C -= K;
              }
              C < 8 - K && w < f - 1 && (k = this._inflator.inflate(1)[0]);
            }
            return h;
          }
        },
        {
          key: "_decodeRLETile",
          value: function(g) {
            for (var b = this._tileBuffer, d = 0; d < g; ) for (var f = this._readPixels(1), h = this._readRLELength(), c = 0; c < h; c++) b[d * 4] = f[0], b[d * 4 + 1] = f[1], b[d * 4 + 2] = f[2], b[d * 4 + 3] = f[3], d++;
            return b;
          }
        },
        {
          key: "_decodeRLEPaletteTile",
          value: function(g, b) {
            for (var d = this._tileBuffer, f = this._readPixels(g), h = 0; h < b; ) {
              var c = this._inflator.inflate(1)[0], K = 1;
              if (c >= 128 && (c -= 128, K = this._readRLELength()), c > g) throw new Error("Too big index in palette: " + c + ", palette size: " + g);
              if (h + K > b) throw new Error("Too big rle length in palette mode: " + K + ", allowed length is: " + (b - h));
              for (var x = 0; x < K; x++) d[h * 4] = f[c * 4], d[h * 4 + 1] = f[c * 4 + 1], d[h * 4 + 2] = f[c * 4 + 2], d[h * 4 + 3] = f[c * 4 + 3], h++;
            }
            return d;
          }
        },
        {
          key: "_readRLELength",
          value: function() {
            var g = 0, b = 0;
            do
              b = this._inflator.inflate(1)[0], g += b;
            while (b === 255);
            return g + 1;
          }
        }
      ]);
    }();
  })(vs);
  var ys = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function t(b) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
        return typeof d;
      } : function(d) {
        return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
      }, t(b);
    }
    function n(b) {
      return a(b) || i(b) || s(b) || r();
    }
    function r() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function i(b) {
      if (typeof Symbol < "u" && b[Symbol.iterator] != null || b["@@iterator"] != null) return Array.from(b);
    }
    function a(b) {
      if (Array.isArray(b)) return y(b);
    }
    function o(b, d) {
      var f = typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
      if (!f) {
        if (Array.isArray(b) || (f = s(b)) || d) {
          f && (b = f);
          var h = 0, c = function() {
          };
          return {
            s: c,
            n: function() {
              return h >= b.length ? {
                done: true
              } : {
                done: false,
                value: b[h++]
              };
            },
            e: function(w) {
              throw w;
            },
            f: c
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var K, x = true, F = false;
      return {
        s: function() {
          f = f.call(b);
        },
        n: function() {
          var w = f.next();
          return x = w.done, w;
        },
        e: function(w) {
          F = true, K = w;
        },
        f: function() {
          try {
            x || f.return == null || f.return();
          } finally {
            if (F) throw K;
          }
        }
      };
    }
    function s(b, d) {
      if (b) {
        if (typeof b == "string") return y(b, d);
        var f = {}.toString.call(b).slice(8, -1);
        return f === "Object" && b.constructor && (f = b.constructor.name), f === "Map" || f === "Set" ? Array.from(b) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? y(b, d) : void 0;
      }
    }
    function y(b, d) {
      (d == null || d > b.length) && (d = b.length);
      for (var f = 0, h = Array(d); f < d; f++) h[f] = b[f];
      return h;
    }
    function u(b, d) {
      if (!(b instanceof d)) throw new TypeError("Cannot call a class as a function");
    }
    function l(b, d) {
      for (var f = 0; f < d.length; f++) {
        var h = d[f];
        h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(b, X(h.key), h);
      }
    }
    function S(b, d, f) {
      return d && l(b.prototype, d), Object.defineProperty(b, "prototype", {
        writable: false
      }), b;
    }
    function X(b) {
      var d = g(b, "string");
      return t(d) == "symbol" ? d : d + "";
    }
    function g(b, d) {
      if (t(b) != "object" || !b) return b;
      var f = b[Symbol.toPrimitive];
      if (f !== void 0) {
        var h = f.call(b, d);
        if (t(h) != "object") return h;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(b);
    }
    e.default = function() {
      function b() {
        u(this, b), this._cachedQuantTables = [], this._cachedHuffmanTables = [], this._segments = [];
      }
      return S(b, [
        {
          key: "decodeRect",
          value: function(f, h, c, K, x, F, k) {
            for (; ; ) {
              var w = this._readSegment(x);
              if (w === null) return false;
              if (this._segments.push(w), w[1] === 217) break;
            }
            var C = [], A = [], O = o(this._segments), I;
            try {
              for (O.s(); !(I = O.n()).done; ) {
                var Z = I.value, q = Z[1];
                q === 196 ? C.push(Z) : q === 219 && A.push(Z);
              }
            } catch (ce) {
              O.e(ce);
            } finally {
              O.f();
            }
            var $ = this._segments.findIndex(function(ce) {
              return ce[1] == 192 || ce[1] == 194;
            });
            if ($ == -1) throw new Error("Illegal JPEG image without SOF");
            if (A.length === 0) {
              var ne;
              (ne = this._segments).splice.apply(ne, [
                $ + 1,
                0
              ].concat(n(this._cachedQuantTables)));
            }
            if (C.length === 0) {
              var E;
              (E = this._segments).splice.apply(E, [
                $ + 1,
                0
              ].concat(n(this._cachedHuffmanTables)));
            }
            var p = 0, m = o(this._segments), L;
            try {
              for (m.s(); !(L = m.n()).done; ) {
                var B = L.value;
                p += B.length;
              }
            } catch (ce) {
              m.e(ce);
            } finally {
              m.f();
            }
            var M = new Uint8Array(p);
            p = 0;
            var V = o(this._segments), re;
            try {
              for (V.s(); !(re = V.n()).done; ) {
                var oe = re.value;
                M.set(oe, p), p += oe.length;
              }
            } catch (ce) {
              V.e(ce);
            } finally {
              V.f();
            }
            return F.imageRect(f, h, c, K, "image/jpeg", M), C.length !== 0 && (this._cachedHuffmanTables = C), A.length !== 0 && (this._cachedQuantTables = A), this._segments = [], true;
          }
        },
        {
          key: "_readSegment",
          value: function(f) {
            if (f.rQwait("JPEG", 2)) return null;
            var h = f.rQshift8();
            if (h != 255) throw new Error("Illegal JPEG marker received (byte: " + h + ")");
            var c = f.rQshift8();
            if (c >= 208 && c <= 217 || c == 1) return new Uint8Array([
              h,
              c
            ]);
            if (f.rQwait("JPEG", 2, 2)) return null;
            var K = f.rQshift16();
            if (K < 2) throw new Error("Illegal JPEG length received (length: " + K + ")");
            if (f.rQwait("JPEG", K - 2, 4)) return null;
            var x = 0;
            if (c === 218) for (x += 2; ; ) {
              if (f.rQwait("JPEG", K - 2 + x, 4)) return null;
              var F = f.rQpeekBytes(K - 2 + x, false);
              if (F.at(-2) === 255 && F.at(-1) !== 0 && !(F.at(-1) >= 208 && F.at(-1) <= 215)) {
                x -= 2;
                break;
              }
              x++;
            }
            var k = new Uint8Array(2 + K + x);
            return k[0] = h, k[1] = c, k[2] = K >> 8, k[3] = K, k.set(f.rQshiftBytes(K - 2 + x, false), 4), k;
          }
        }
      ]);
    }();
  })(ys);
  var xs = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = e.H264Parser = e.H264Context = void 0;
    var t = r(Re);
    function n(c) {
      if (typeof WeakMap != "function") return null;
      var K = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
      return (n = function(k) {
        return k ? x : K;
      })(c);
    }
    function r(c, K) {
      if (c && c.__esModule) return c;
      if (c === null || i(c) != "object" && typeof c != "function") return {
        default: c
      };
      var x = n(K);
      if (x && x.has(c)) return x.get(c);
      var F = {
        __proto__: null
      }, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var w in c) if (w !== "default" && {}.hasOwnProperty.call(c, w)) {
        var C = k ? Object.getOwnPropertyDescriptor(c, w) : null;
        C && (C.get || C.set) ? Object.defineProperty(F, w, C) : F[w] = c[w];
      }
      return F.default = c, x && x.set(c, F), F;
    }
    function i(c) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(K) {
        return typeof K;
      } : function(K) {
        return K && typeof Symbol == "function" && K.constructor === Symbol && K !== Symbol.prototype ? "symbol" : typeof K;
      }, i(c);
    }
    function a(c, K) {
      return l(c) || u(c, K) || s(c, K) || o();
    }
    function o() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function s(c, K) {
      if (c) {
        if (typeof c == "string") return y(c, K);
        var x = {}.toString.call(c).slice(8, -1);
        return x === "Object" && c.constructor && (x = c.constructor.name), x === "Map" || x === "Set" ? Array.from(c) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? y(c, K) : void 0;
      }
    }
    function y(c, K) {
      (K == null || K > c.length) && (K = c.length);
      for (var x = 0, F = Array(K); x < K; x++) F[x] = c[x];
      return F;
    }
    function u(c, K) {
      var x = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (x != null) {
        var F, k, w, C, A = [], O = true, I = false;
        try {
          if (w = (x = x.call(c)).next, K !== 0) for (; !(O = (F = w.call(x)).done) && (A.push(F.value), A.length !== K); O = true) ;
        } catch (Z) {
          I = true, k = Z;
        } finally {
          try {
            if (!O && x.return != null && (C = x.return(), Object(C) !== C)) return;
          } finally {
            if (I) throw k;
          }
        }
        return A;
      }
    }
    function l(c) {
      if (Array.isArray(c)) return c;
    }
    function S(c, K) {
      if (!(c instanceof K)) throw new TypeError("Cannot call a class as a function");
    }
    function X(c, K) {
      for (var x = 0; x < K.length; x++) {
        var F = K[x];
        F.enumerable = F.enumerable || false, F.configurable = true, "value" in F && (F.writable = true), Object.defineProperty(c, b(F.key), F);
      }
    }
    function g(c, K, x) {
      return K && X(c.prototype, K), Object.defineProperty(c, "prototype", {
        writable: false
      }), c;
    }
    function b(c) {
      var K = d(c, "string");
      return i(K) == "symbol" ? K : K + "";
    }
    function d(c, K) {
      if (i(c) != "object" || !c) return c;
      var x = c[Symbol.toPrimitive];
      if (x !== void 0) {
        var F = x.call(c, K);
        if (i(F) != "object") return F;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(c);
    }
    var f = e.H264Parser = function() {
      function c(K) {
        S(this, c), this._data = K, this._index = 0, this.profileIdc = null, this.constraintSet = null, this.levelIdc = null;
      }
      return g(c, [
        {
          key: "_getStartSequenceLen",
          value: function(x) {
            var F = this._data;
            return F[x + 0] == 0 && F[x + 1] == 0 && F[x + 2] == 0 && F[x + 3] == 1 ? 4 : F[x + 0] == 0 && F[x + 1] == 0 && F[x + 2] == 1 ? 3 : 0;
          }
        },
        {
          key: "_indexOfNextNalUnit",
          value: function(x) {
            for (var F = this._data, k = x; k < F.length; ++k) if (this._getStartSequenceLen(k) != 0) return k;
            return -1;
          }
        },
        {
          key: "_parseSps",
          value: function(x) {
            this.profileIdc = this._data[x], this.constraintSet = this._data[x + 1], this.levelIdc = this._data[x + 2];
          }
        },
        {
          key: "_parseNalUnit",
          value: function(x) {
            var F = this._data[x];
            if (F & 128) throw new Error("H264 parsing sanity check failed, forbidden zero bit is set");
            var k = F & 31;
            switch (k) {
              case 1:
                return {
                  slice: true
                };
              case 5:
                return {
                  slice: true,
                  key: true
                };
              case 6:
                return {};
              case 7:
                return this._parseSps(x + 1), {};
              case 8:
                return {};
              default:
                t.Warn("Unhandled unit type: ", k);
                break;
            }
            return {};
          }
        },
        {
          key: "parse",
          value: function() {
            for (var x = this._index, F = false; this._index < this._data.length; ) {
              var k = this._getStartSequenceLen(this._index);
              if (k == 0) throw new Error("Invalid start sequence in bit stream");
              var w = this._parseNalUnit(this._index + k), C = w.slice, A = w.key, O = this._indexOfNextNalUnit(this._index + k);
              if (O == -1 ? this._index = this._data.length : this._index = O, A && (F = true), C) break;
            }
            return x === this._index ? null : {
              frame: this._data.subarray(x, this._index),
              key: F
            };
          }
        }
      ]);
    }(), h = e.H264Context = function() {
      function c(K, x) {
        S(this, c), this.lastUsed = 0, this._width = K, this._height = x, this._profileIdc = null, this._constraintSet = null, this._levelIdc = null, this._decoder = null, this._pendingFrames = [];
      }
      return g(c, [
        {
          key: "_handleFrame",
          value: function(x) {
            var F = this._pendingFrames.shift();
            if (F === void 0) throw new Error("Pending frame queue empty when receiving frame from decoder");
            if (F.timestamp != x.timestamp) throw new Error("Video frame timestamp mismatch. Expected " + x.timestamp + " but but got " + F.timestamp);
            F.frame = x, F.ready = true, F.resolve(), F.keep || x.close();
          }
        },
        {
          key: "_handleError",
          value: function(x) {
            throw new Error("Failed to decode frame: " + x.message);
          }
        },
        {
          key: "_configureDecoder",
          value: function(x, F, k) {
            var w = this;
            (this._decoder === null || this._decoder.state === "closed") && (this._decoder = new VideoDecoder({
              output: function(O) {
                return w._handleFrame(O);
              },
              error: function(O) {
                return w._handleError(O);
              }
            }));
            var C = "avc1." + x.toString(16).padStart(2, "0") + F.toString(16).padStart(2, "0") + k.toString(16).padStart(2, "0");
            this._decoder.configure({
              codec: C,
              codedWidth: this._width,
              codedHeight: this._height,
              optimizeForLatency: true
            });
          }
        },
        {
          key: "_preparePendingFrame",
          value: function(x) {
            var F = {
              timestamp: x,
              promise: null,
              resolve: null,
              frame: null,
              ready: false,
              keep: false
            };
            return F.promise = new Promise(function(k) {
              F.resolve = k;
            }), this._pendingFrames.push(F), F;
          }
        },
        {
          key: "decode",
          value: function(x) {
            for (var F = new f(x), k = null, w = Math.round(window.performance.now() * 1e3); ; ) {
              var C = F.parse();
              if (C === null) break;
              if (F.profileIdc !== null && (self._profileIdc = F.profileIdc, self._constraintSet = F.constraintSet, self._levelIdc = F.levelIdc), this._decoder === null || this._decoder.state !== "configured") {
                if (!C.key) {
                  t.Warn("Missing key frame. Can't decode until one arrives");
                  continue;
                }
                if (self._profileIdc === null) {
                  t.Warn("Cannot config decoder. Have not received SPS and PPS yet.");
                  continue;
                }
                this._configureDecoder(self._profileIdc, self._constraintSet, self._levelIdc);
              }
              k = this._preparePendingFrame(w);
              var A = new EncodedVideoChunk({
                timestamp: w,
                type: C.key ? "key" : "delta",
                data: C.frame
              });
              try {
                this._decoder.decode(A);
              } catch (O) {
                t.Warn("Failed to decode:", O);
              }
            }
            return k !== null && (k.keep = true), k;
          }
        }
      ]);
    }();
    e.default = function() {
      function c() {
        S(this, c), this._tick = 0, this._contexts = {};
      }
      return g(c, [
        {
          key: "_contextId",
          value: function(x, F, k, w) {
            return [
              x,
              F,
              k,
              w
            ].join(",");
          }
        },
        {
          key: "_findOldestContextId",
          value: function() {
            for (var x = Number.MAX_VALUE, F = void 0, k = 0, w = Object.entries(this._contexts); k < w.length; k++) {
              var C = a(w[k], 2), A = C[0], O = C[1];
              O.lastUsed < x && (x = O.lastUsed, F = A);
            }
            return F;
          }
        },
        {
          key: "_createContext",
          value: function(x, F, k, w) {
            var C = 64;
            if (Object.keys(this._contexts).length >= C) {
              var A = this._findOldestContextId();
              delete this._contexts[A];
            }
            var O = new h(k, w);
            return this._contexts[this._contextId(x, F, k, w)] = O, O;
          }
        },
        {
          key: "_getContext",
          value: function(x, F, k, w) {
            var C = this._contexts[this._contextId(x, F, k, w)];
            return C !== void 0 ? C : this._createContext(x, F, k, w);
          }
        },
        {
          key: "_resetContext",
          value: function(x, F, k, w) {
            delete this._contexts[this._contextId(x, F, k, w)];
          }
        },
        {
          key: "_resetAllContexts",
          value: function() {
            this._contexts = {};
          }
        },
        {
          key: "decodeRect",
          value: function(x, F, k, w, C, A, O) {
            var I = 1, Z = 2;
            if (C.rQwait("h264 header", 8)) return false;
            var q = C.rQshift32(), $ = C.rQshift32();
            if (C.rQwait("h264 payload", q, 8)) return false;
            $ & Z ? this._resetAllContexts() : $ & I && this._resetContext(x, F, k, w);
            var ne = this._getContext(x, F, k, w);
            if (ne.lastUsed = this._tick++, q !== 0) {
              var E = C.rQshiftBytes(q, false), p = ne.decode(E);
              p !== null && A.videoFrame(x, F, k, w, p);
            }
            return true;
          }
        }
      ]);
    }();
  })(xs);
  (function(e) {
    function t(G) {
      "@babel/helpers - typeof";
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
        return typeof R;
      } : function(R) {
        return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
      }, t(G);
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var n = Qr, r = p(Re), i = Ur, a = Ae, o = ui, s = ar, y = ne(fi), u = ne(ao), l = ne(Nr), S = ne(mo), X = ne(zo), g = ne(es), b = ne(ts), d = ne(rs), f = ne(zr), h = ne(ns), c = Vr, K = ne(is), x = ne(gi), F = ne(fs), k = ne(cs), w = ne(hs), C = ne(ds), A = ne(_s), O = ne(ki), I = ne(ps), Z = ne(vs), q = ne(ys), $ = ne(xs);
    function ne(G) {
      return G && G.__esModule ? G : {
        default: G
      };
    }
    function E(G) {
      if (typeof WeakMap != "function") return null;
      var R = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap();
      return (E = function(T) {
        return T ? D : R;
      })(G);
    }
    function p(G, R) {
      if (G && G.__esModule) return G;
      if (G === null || t(G) != "object" && typeof G != "function") return {
        default: G
      };
      var D = E(R);
      if (D && D.has(G)) return D.get(G);
      var _ = {
        __proto__: null
      }, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var v in G) if (v !== "default" && {}.hasOwnProperty.call(G, v)) {
        var H = T ? Object.getOwnPropertyDescriptor(G, v) : null;
        H && (H.get || H.set) ? Object.defineProperty(_, v, H) : _[v] = G[v];
      }
      return _.default = G, D && D.set(G, _), _;
    }
    function m() {
      m = function() {
        return R;
      };
      var G, R = {}, D = Object.prototype, _ = D.hasOwnProperty, T = Object.defineProperty || function(fe, ee, ue) {
        fe[ee] = ue.value;
      }, v = typeof Symbol == "function" ? Symbol : {}, H = v.iterator || "@@iterator", J = v.asyncIterator || "@@asyncIterator", te = v.toStringTag || "@@toStringTag";
      function ae(fe, ee, ue) {
        return Object.defineProperty(fe, ee, {
          value: ue,
          enumerable: true,
          configurable: true,
          writable: true
        }), fe[ee];
      }
      try {
        ae({}, "");
      } catch {
        ae = function(ue, xe, me) {
          return ue[xe] = me;
        };
      }
      function we(fe, ee, ue, xe) {
        var me = ee && ee.prototype instanceof We ? ee : We, be = Object.create(me.prototype), Ie = new kn(xe || []);
        return T(be, "_invoke", {
          value: gs(fe, ue, Ie)
        }), be;
      }
      function Ce(fe, ee, ue) {
        try {
          return {
            type: "normal",
            arg: fe.call(ee, ue)
          };
        } catch (xe) {
          return {
            type: "throw",
            arg: xe
          };
        }
      }
      R.wrap = we;
      var Xe = "suspendedStart", Se = "suspendedYield", Te = "executing", _e = "completed", ke = {};
      function We() {
      }
      function ut() {
      }
      function Le() {
      }
      var ze = {};
      ae(ze, H, function() {
        return this;
      });
      var wt = Object.getPrototypeOf, Wt = wt && wt(wt(Sn([])));
      Wt && Wt !== D && _.call(Wt, H) && (ze = Wt);
      var kt = Le.prototype = We.prototype = Object.create(ze);
      function Li(fe) {
        [
          "next",
          "throw",
          "return"
        ].forEach(function(ee) {
          ae(fe, ee, function(ue) {
            return this._invoke(ee, ue);
          });
        });
      }
      function $r(fe, ee) {
        function ue(me, be, Ie, Je) {
          var it = Ce(fe[me], fe, be);
          if (it.type !== "throw") {
            var zt = it.arg, Rt = zt.value;
            return Rt && t(Rt) == "object" && _.call(Rt, "__await") ? ee.resolve(Rt.__await).then(function(Gt) {
              ue("next", Gt, Ie, Je);
            }, function(Gt) {
              ue("throw", Gt, Ie, Je);
            }) : ee.resolve(Rt).then(function(Gt) {
              zt.value = Gt, Ie(zt);
            }, function(Gt) {
              return ue("throw", Gt, Ie, Je);
            });
          }
          Je(it.arg);
        }
        var xe;
        T(this, "_invoke", {
          value: function(be, Ie) {
            function Je() {
              return new ee(function(it, zt) {
                ue(be, Ie, it, zt);
              });
            }
            return xe = xe ? xe.then(Je, Je) : Je();
          }
        });
      }
      function gs(fe, ee, ue) {
        var xe = Xe;
        return function(me, be) {
          if (xe === Te) throw Error("Generator is already running");
          if (xe === _e) {
            if (me === "throw") throw be;
            return {
              value: G,
              done: true
            };
          }
          for (ue.method = me, ue.arg = be; ; ) {
            var Ie = ue.delegate;
            if (Ie) {
              var Je = Ri(Ie, ue);
              if (Je) {
                if (Je === ke) continue;
                return Je;
              }
            }
            if (ue.method === "next") ue.sent = ue._sent = ue.arg;
            else if (ue.method === "throw") {
              if (xe === Xe) throw xe = _e, ue.arg;
              ue.dispatchException(ue.arg);
            } else ue.method === "return" && ue.abrupt("return", ue.arg);
            xe = Te;
            var it = Ce(fe, ee, ue);
            if (it.type === "normal") {
              if (xe = ue.done ? _e : Se, it.arg === ke) continue;
              return {
                value: it.arg,
                done: ue.done
              };
            }
            it.type === "throw" && (xe = _e, ue.method = "throw", ue.arg = it.arg);
          }
        };
      }
      function Ri(fe, ee) {
        var ue = ee.method, xe = fe.iterator[ue];
        if (xe === G) return ee.delegate = null, ue === "throw" && fe.iterator.return && (ee.method = "return", ee.arg = G, Ri(fe, ee), ee.method === "throw") || ue !== "return" && (ee.method = "throw", ee.arg = new TypeError("The iterator does not provide a '" + ue + "' method")), ke;
        var me = Ce(xe, fe.iterator, ee.arg);
        if (me.type === "throw") return ee.method = "throw", ee.arg = me.arg, ee.delegate = null, ke;
        var be = me.arg;
        return be ? be.done ? (ee[fe.resultName] = be.value, ee.next = fe.nextLoc, ee.method !== "return" && (ee.method = "next", ee.arg = G), ee.delegate = null, ke) : be : (ee.method = "throw", ee.arg = new TypeError("iterator result is not an object"), ee.delegate = null, ke);
      }
      function bs(fe) {
        var ee = {
          tryLoc: fe[0]
        };
        1 in fe && (ee.catchLoc = fe[1]), 2 in fe && (ee.finallyLoc = fe[2], ee.afterLoc = fe[3]), this.tryEntries.push(ee);
      }
      function wn(fe) {
        var ee = fe.completion || {};
        ee.type = "normal", delete ee.arg, fe.completion = ee;
      }
      function kn(fe) {
        this.tryEntries = [
          {
            tryLoc: "root"
          }
        ], fe.forEach(bs, this), this.reset(true);
      }
      function Sn(fe) {
        if (fe || fe === "") {
          var ee = fe[H];
          if (ee) return ee.call(fe);
          if (typeof fe.next == "function") return fe;
          if (!isNaN(fe.length)) {
            var ue = -1, xe = function me() {
              for (; ++ue < fe.length; ) if (_.call(fe, ue)) return me.value = fe[ue], me.done = false, me;
              return me.value = G, me.done = true, me;
            };
            return xe.next = xe;
          }
        }
        throw new TypeError(t(fe) + " is not iterable");
      }
      return ut.prototype = Le, T(kt, "constructor", {
        value: Le,
        configurable: true
      }), T(Le, "constructor", {
        value: ut,
        configurable: true
      }), ut.displayName = ae(Le, te, "GeneratorFunction"), R.isGeneratorFunction = function(fe) {
        var ee = typeof fe == "function" && fe.constructor;
        return !!ee && (ee === ut || (ee.displayName || ee.name) === "GeneratorFunction");
      }, R.mark = function(fe) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(fe, Le) : (fe.__proto__ = Le, ae(fe, te, "GeneratorFunction")), fe.prototype = Object.create(kt), fe;
      }, R.awrap = function(fe) {
        return {
          __await: fe
        };
      }, Li($r.prototype), ae($r.prototype, J, function() {
        return this;
      }), R.AsyncIterator = $r, R.async = function(fe, ee, ue, xe, me) {
        me === void 0 && (me = Promise);
        var be = new $r(we(fe, ee, ue, xe), me);
        return R.isGeneratorFunction(ee) ? be : be.next().then(function(Ie) {
          return Ie.done ? Ie.value : be.next();
        });
      }, Li(kt), ae(kt, te, "Generator"), ae(kt, H, function() {
        return this;
      }), ae(kt, "toString", function() {
        return "[object Generator]";
      }), R.keys = function(fe) {
        var ee = Object(fe), ue = [];
        for (var xe in ee) ue.push(xe);
        return ue.reverse(), function me() {
          for (; ue.length; ) {
            var be = ue.pop();
            if (be in ee) return me.value = be, me.done = false, me;
          }
          return me.done = true, me;
        };
      }, R.values = Sn, kn.prototype = {
        constructor: kn,
        reset: function(ee) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = G, this.done = false, this.delegate = null, this.method = "next", this.arg = G, this.tryEntries.forEach(wn), !ee) for (var ue in this) ue.charAt(0) === "t" && _.call(this, ue) && !isNaN(+ue.slice(1)) && (this[ue] = G);
        },
        stop: function() {
          this.done = true;
          var ee = this.tryEntries[0].completion;
          if (ee.type === "throw") throw ee.arg;
          return this.rval;
        },
        dispatchException: function(ee) {
          if (this.done) throw ee;
          var ue = this;
          function xe(zt, Rt) {
            return Ie.type = "throw", Ie.arg = ee, ue.next = zt, Rt && (ue.method = "next", ue.arg = G), !!Rt;
          }
          for (var me = this.tryEntries.length - 1; me >= 0; --me) {
            var be = this.tryEntries[me], Ie = be.completion;
            if (be.tryLoc === "root") return xe("end");
            if (be.tryLoc <= this.prev) {
              var Je = _.call(be, "catchLoc"), it = _.call(be, "finallyLoc");
              if (Je && it) {
                if (this.prev < be.catchLoc) return xe(be.catchLoc, true);
                if (this.prev < be.finallyLoc) return xe(be.finallyLoc);
              } else if (Je) {
                if (this.prev < be.catchLoc) return xe(be.catchLoc, true);
              } else {
                if (!it) throw Error("try statement without catch or finally");
                if (this.prev < be.finallyLoc) return xe(be.finallyLoc);
              }
            }
          }
        },
        abrupt: function(ee, ue) {
          for (var xe = this.tryEntries.length - 1; xe >= 0; --xe) {
            var me = this.tryEntries[xe];
            if (me.tryLoc <= this.prev && _.call(me, "finallyLoc") && this.prev < me.finallyLoc) {
              var be = me;
              break;
            }
          }
          be && (ee === "break" || ee === "continue") && be.tryLoc <= ue && ue <= be.finallyLoc && (be = null);
          var Ie = be ? be.completion : {};
          return Ie.type = ee, Ie.arg = ue, be ? (this.method = "next", this.next = be.finallyLoc, ke) : this.complete(Ie);
        },
        complete: function(ee, ue) {
          if (ee.type === "throw") throw ee.arg;
          return ee.type === "break" || ee.type === "continue" ? this.next = ee.arg : ee.type === "return" ? (this.rval = this.arg = ee.arg, this.method = "return", this.next = "end") : ee.type === "normal" && ue && (this.next = ue), ke;
        },
        finish: function(ee) {
          for (var ue = this.tryEntries.length - 1; ue >= 0; --ue) {
            var xe = this.tryEntries[ue];
            if (xe.finallyLoc === ee) return this.complete(xe.completion, xe.afterLoc), wn(xe), ke;
          }
        },
        catch: function(ee) {
          for (var ue = this.tryEntries.length - 1; ue >= 0; --ue) {
            var xe = this.tryEntries[ue];
            if (xe.tryLoc === ee) {
              var me = xe.completion;
              if (me.type === "throw") {
                var be = me.arg;
                wn(xe);
              }
              return be;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function(ee, ue, xe) {
          return this.delegate = {
            iterator: Sn(ee),
            resultName: ue,
            nextLoc: xe
          }, this.method === "next" && (this.arg = G), ke;
        }
      }, R;
    }
    function L(G, R, D, _, T, v, H) {
      try {
        var J = G[v](H), te = J.value;
      } catch (ae) {
        return void D(ae);
      }
      J.done ? R(te) : Promise.resolve(te).then(_, T);
    }
    function B(G) {
      return function() {
        var R = this, D = arguments;
        return new Promise(function(_, T) {
          var v = G.apply(R, D);
          function H(te) {
            L(v, _, T, H, J, "next", te);
          }
          function J(te) {
            L(v, _, T, H, J, "throw", te);
          }
          H(void 0);
        });
      };
    }
    function M(G, R) {
      return oe(G) || re(G, R) || pe(G, R) || V();
    }
    function V() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function re(G, R) {
      var D = G == null ? null : typeof Symbol < "u" && G[Symbol.iterator] || G["@@iterator"];
      if (D != null) {
        var _, T, v, H, J = [], te = true, ae = false;
        try {
          if (v = (D = D.call(G)).next, R !== 0) for (; !(te = (_ = v.call(D)).done) && (J.push(_.value), J.length !== R); te = true) ;
        } catch (we) {
          ae = true, T = we;
        } finally {
          try {
            if (!te && D.return != null && (H = D.return(), Object(H) !== H)) return;
          } finally {
            if (ae) throw T;
          }
        }
        return J;
      }
    }
    function oe(G) {
      if (Array.isArray(G)) return G;
    }
    function ce(G, R) {
      var D = typeof Symbol < "u" && G[Symbol.iterator] || G["@@iterator"];
      if (!D) {
        if (Array.isArray(G) || (D = pe(G)) || R) {
          D && (G = D);
          var _ = 0, T = function() {
          };
          return {
            s: T,
            n: function() {
              return _ >= G.length ? {
                done: true
              } : {
                done: false,
                value: G[_++]
              };
            },
            e: function(ae) {
              throw ae;
            },
            f: T
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var v, H = true, J = false;
      return {
        s: function() {
          D = D.call(G);
        },
        n: function() {
          var ae = D.next();
          return H = ae.done, ae;
        },
        e: function(ae) {
          J = true, v = ae;
        },
        f: function() {
          try {
            H || D.return == null || D.return();
          } finally {
            if (J) throw v;
          }
        }
      };
    }
    function pe(G, R) {
      if (G) {
        if (typeof G == "string") return ye(G, R);
        var D = {}.toString.call(G).slice(8, -1);
        return D === "Object" && G.constructor && (D = G.constructor.name), D === "Map" || D === "Set" ? Array.from(G) : D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D) ? ye(G, R) : void 0;
      }
    }
    function ye(G, R) {
      (R == null || R > G.length) && (R = G.length);
      for (var D = 0, _ = Array(R); D < R; D++) _[D] = G[D];
      return _;
    }
    function Ne(G, R) {
      if (!(G instanceof R)) throw new TypeError("Cannot call a class as a function");
    }
    function je(G, R) {
      for (var D = 0; D < R.length; D++) {
        var _ = R[D];
        _.enumerable = _.enumerable || false, _.configurable = true, "value" in _ && (_.writable = true), Object.defineProperty(G, Ue(_.key), _);
      }
    }
    function st(G, R, D) {
      return R && je(G.prototype, R), D && je(G, D), Object.defineProperty(G, "prototype", {
        writable: false
      }), G;
    }
    function Ue(G) {
      var R = He(G, "string");
      return t(R) == "symbol" ? R : R + "";
    }
    function He(G, R) {
      if (t(G) != "object" || !G) return G;
      var D = G[Symbol.toPrimitive];
      if (D !== void 0) {
        var _ = D.call(G, R);
        if (t(_) != "object") return _;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(G);
    }
    function rt(G, R, D) {
      return R = ct(R), Lt(G, $e() ? Reflect.construct(R, [], ct(G).constructor) : R.apply(G, D));
    }
    function Lt(G, R) {
      if (R && (t(R) == "object" || typeof R == "function")) return R;
      if (R !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return nt(G);
    }
    function nt(G) {
      if (G === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return G;
    }
    function $e() {
      try {
        var G = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return ($e = function() {
        return !!G;
      })();
    }
    function ct(G) {
      return ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
        return R.__proto__ || Object.getPrototypeOf(R);
      }, ct(G);
    }
    function se(G, R) {
      if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function");
      G.prototype = Object.create(R && R.prototype, {
        constructor: {
          value: G,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(G, "prototype", {
        writable: false
      }), R && Y(G, R);
    }
    function Y(G, R) {
      return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(D, _) {
        return D.__proto__ = _, D;
      }, Y(G, R);
    }
    var ie = 3, he = "rgb(40, 40, 40)", ve = 17, de = 50, Pe = 19, Me = 75, Oe = 50, le = 1e3, xt = 50, gt = 1, Zr = 2, Si = 6, Ei = 16, mn = 19, Ki = 22, Xi = 30, Fi = 113, Ci = 129, Ai = 256, bt = 1, Pi = 1 << 24, qr = 1 << 25, Ti = 1 << 26, kr = 1 << 27, Yr = 1 << 28, mt = e.default = function(G) {
      function R(D, _, T) {
        var v;
        if (Ne(this, R), !D) throw new Error("Must specify target");
        if (!_) throw new Error("Must specify URL, WebSocket or RTCDataChannel");
        window.isSecureContext || r.Error("noVNC requires a secure context (TLS). Expect crashes!"), v = rt(this, R), v._target = D, typeof _ == "string" ? v._url = _ : (v._url = null, v._rawChannel = _), T = T || {}, v._rfbCredentials = T.credentials || {}, v._shared = "shared" in T ? !!T.shared : true, v._repeaterID = T.repeaterID || "", v._wsProtocols = T.wsProtocols || [], v._rfbConnectionState = "", v._rfbInitState = "", v._rfbAuthScheme = -1, v._rfbCleanDisconnect = true, v._rfbRSAAESAuthenticationState = null, v._rfbVersion = 0, v._rfbMaxVersion = 3.8, v._rfbTightVNC = false, v._rfbVeNCryptState = 0, v._rfbXvpVer = 0, v._fbWidth = 0, v._fbHeight = 0, v._fbName = "", v._capabilities = {
          power: false
        }, v._supportsFence = false, v._supportsContinuousUpdates = false, v._enabledContinuousUpdates = false, v._supportsSetDesktopSize = false, v._screenID = 0, v._screenFlags = 0, v._pendingRemoteResize = false, v._lastResize = 0, v._qemuExtKeyEventSupported = false, v._extendedPointerEventSupported = false, v._clipboardText = null, v._clipboardServerCapabilitiesActions = {}, v._clipboardServerCapabilitiesFormats = {}, v._sock = null, v._display = null, v._flushing = false, v._keyboard = null, v._gestures = null, v._resizeObserver = null, v._disconnTimer = null, v._resizeTimeout = null, v._mouseMoveTimer = null, v._decoders = {}, v._FBU = {
          rects: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          encoding: null
        }, v._mousePos = {}, v._mouseButtonMask = 0, v._mouseLastMoveTime = 0, v._viewportDragging = false, v._viewportDragPos = {}, v._viewportHasMoved = false, v._accumulatedWheelDeltaX = 0, v._accumulatedWheelDeltaY = 0, v._gestureLastTapTime = null, v._gestureFirstDoubleTapEv = null, v._gestureLastMagnitudeX = 0, v._gestureLastMagnitudeY = 0, v._eventHandlers = {
          focusCanvas: v._focusCanvas.bind(v),
          handleResize: v._handleResize.bind(v),
          handleMouse: v._handleMouse.bind(v),
          handleWheel: v._handleWheel.bind(v),
          handleGesture: v._handleGesture.bind(v),
          handleRSAAESCredentialsRequired: v._handleRSAAESCredentialsRequired.bind(v),
          handleRSAAESServerVerification: v._handleRSAAESServerVerification.bind(v)
        }, r.Debug(">> RFB.constructor"), v._screen = document.createElement("div"), v._screen.style.display = "flex", v._screen.style.width = "100%", v._screen.style.height = "100%", v._screen.style.overflow = "auto", v._screen.style.background = he, v._canvas = document.createElement("canvas"), v._canvas.style.margin = "auto", v._canvas.style.outline = "none", v._canvas.width = 0, v._canvas.height = 0, v._canvas.tabIndex = -1, v._screen.appendChild(v._canvas), v._cursor = new b.default(), v._cursorImage = R.cursors.none, v._decoders[c.encodings.encodingRaw] = new F.default(), v._decoders[c.encodings.encodingCopyRect] = new k.default(), v._decoders[c.encodings.encodingRRE] = new w.default(), v._decoders[c.encodings.encodingHextile] = new C.default(), v._decoders[c.encodings.encodingZlib] = new A.default(), v._decoders[c.encodings.encodingTight] = new O.default(), v._decoders[c.encodings.encodingTightPNG] = new I.default(), v._decoders[c.encodings.encodingZRLE] = new Z.default(), v._decoders[c.encodings.encodingJPEG] = new q.default(), v._decoders[c.encodings.encodingH264] = new $.default();
        try {
          v._display = new u.default(v._canvas);
        } catch (H) {
          throw r.Error("Display exception: " + H), H;
        }
        return v._keyboard = new X.default(v._canvas), v._keyboard.onkeyevent = v._handleKeyEvent.bind(v), v._remoteCapsLock = null, v._remoteNumLock = null, v._gestures = new g.default(), v._sock = new d.default(), v._sock.on("open", v._socketOpen.bind(v)), v._sock.on("close", v._socketClose.bind(v)), v._sock.on("message", v._handleMessage.bind(v)), v._sock.on("error", v._socketError.bind(v)), v._expectedClientWidth = null, v._expectedClientHeight = null, v._resizeObserver = new ResizeObserver(v._eventHandlers.handleResize), v._updateConnectionState("connecting"), r.Debug("<< RFB.constructor"), v.dragViewport = false, v.focusOnClick = true, v._viewOnly = false, v._clipViewport = false, v._clippingViewport = false, v._scaleViewport = false, v._resizeSession = false, v._showDotCursor = false, T.showDotCursor !== void 0 && (r.Warn("Specifying showDotCursor as a RFB constructor argument is deprecated"), v._showDotCursor = T.showDotCursor), v._qualityLevel = 6, v._compressionLevel = 2, v;
      }
      return se(R, G), st(R, [
        {
          key: "viewOnly",
          get: function() {
            return this._viewOnly;
          },
          set: function(_) {
            this._viewOnly = _, (this._rfbConnectionState === "connecting" || this._rfbConnectionState === "connected") && (_ ? this._keyboard.ungrab() : this._keyboard.grab());
          }
        },
        {
          key: "capabilities",
          get: function() {
            return this._capabilities;
          }
        },
        {
          key: "clippingViewport",
          get: function() {
            return this._clippingViewport;
          }
        },
        {
          key: "_setClippingViewport",
          value: function(_) {
            _ !== this._clippingViewport && (this._clippingViewport = _, this.dispatchEvent(new CustomEvent("clippingviewport", {
              detail: this._clippingViewport
            })));
          }
        },
        {
          key: "touchButton",
          get: function() {
            return 0;
          },
          set: function(_) {
            r.Warn("Using old API!");
          }
        },
        {
          key: "clipViewport",
          get: function() {
            return this._clipViewport;
          },
          set: function(_) {
            this._clipViewport = _, this._updateClip();
          }
        },
        {
          key: "scaleViewport",
          get: function() {
            return this._scaleViewport;
          },
          set: function(_) {
            this._scaleViewport = _, _ && this._clipViewport && this._updateClip(), this._updateScale(), !_ && this._clipViewport && this._updateClip();
          }
        },
        {
          key: "resizeSession",
          get: function() {
            return this._resizeSession;
          },
          set: function(_) {
            this._resizeSession = _, _ && this._requestRemoteResize();
          }
        },
        {
          key: "showDotCursor",
          get: function() {
            return this._showDotCursor;
          },
          set: function(_) {
            this._showDotCursor = _, this._refreshCursor();
          }
        },
        {
          key: "background",
          get: function() {
            return this._screen.style.background;
          },
          set: function(_) {
            this._screen.style.background = _;
          }
        },
        {
          key: "qualityLevel",
          get: function() {
            return this._qualityLevel;
          },
          set: function(_) {
            if (!Number.isInteger(_) || _ < 0 || _ > 9) {
              r.Error("qualityLevel must be an integer between 0 and 9");
              return;
            }
            this._qualityLevel !== _ && (this._qualityLevel = _, this._rfbConnectionState === "connected" && this._sendEncodings());
          }
        },
        {
          key: "compressionLevel",
          get: function() {
            return this._compressionLevel;
          },
          set: function(_) {
            if (!Number.isInteger(_) || _ < 0 || _ > 9) {
              r.Error("compressionLevel must be an integer between 0 and 9");
              return;
            }
            this._compressionLevel !== _ && (this._compressionLevel = _, this._rfbConnectionState === "connected" && this._sendEncodings());
          }
        },
        {
          key: "disconnect",
          value: function() {
            this._updateConnectionState("disconnecting"), this._sock.off("error"), this._sock.off("message"), this._sock.off("open"), this._rfbRSAAESAuthenticationState !== null && this._rfbRSAAESAuthenticationState.disconnect();
          }
        },
        {
          key: "approveServer",
          value: function() {
            this._rfbRSAAESAuthenticationState !== null && this._rfbRSAAESAuthenticationState.approveServer();
          }
        },
        {
          key: "sendCredentials",
          value: function(_) {
            this._rfbCredentials = _, this._resumeAuthentication();
          }
        },
        {
          key: "sendCtrlAltDel",
          value: function() {
            this._rfbConnectionState !== "connected" || this._viewOnly || (r.Info("Sending Ctrl-Alt-Del"), this.sendKey(f.default.XK_Control_L, "ControlLeft", true), this.sendKey(f.default.XK_Alt_L, "AltLeft", true), this.sendKey(f.default.XK_Delete, "Delete", true), this.sendKey(f.default.XK_Delete, "Delete", false), this.sendKey(f.default.XK_Alt_L, "AltLeft", false), this.sendKey(f.default.XK_Control_L, "ControlLeft", false));
          }
        },
        {
          key: "machineShutdown",
          value: function() {
            this._xvpOp(1, 2);
          }
        },
        {
          key: "machineReboot",
          value: function() {
            this._xvpOp(1, 3);
          }
        },
        {
          key: "machineReset",
          value: function() {
            this._xvpOp(1, 4);
          }
        },
        {
          key: "sendKey",
          value: function(_, T, v) {
            if (!(this._rfbConnectionState !== "connected" || this._viewOnly)) {
              if (v === void 0) {
                this.sendKey(_, T, true), this.sendKey(_, T, false);
                return;
              }
              var H = h.default[T];
              if (this._qemuExtKeyEventSupported && H) _ = _ || 0, r.Info("Sending key (" + (v ? "down" : "up") + "): keysym " + _ + ", scancode " + H), R.messages.QEMUExtendedKeyEvent(this._sock, _, v, H);
              else {
                if (!_) return;
                r.Info("Sending keysym (" + (v ? "down" : "up") + "): " + _), R.messages.keyEvent(this._sock, _, v ? 1 : 0);
              }
            }
          }
        },
        {
          key: "focus",
          value: function(_) {
            this._canvas.focus(_);
          }
        },
        {
          key: "blur",
          value: function() {
            this._canvas.blur();
          }
        },
        {
          key: "clipboardPasteFrom",
          value: function(_) {
            if (!(this._rfbConnectionState !== "connected" || this._viewOnly)) if (this._clipboardServerCapabilitiesFormats[bt] && this._clipboardServerCapabilitiesActions[kr]) this._clipboardText = _, R.messages.extendedClipboardNotify(this._sock, [
              bt
            ]);
            else {
              var T, v, H;
              T = 0;
              var J = ce(_), te;
              try {
                for (J.s(); !(te = J.n()).done; ) {
                  var ae = te.value;
                  T++;
                }
              } catch (Te) {
                J.e(Te);
              } finally {
                J.f();
              }
              H = new Uint8Array(T), v = 0;
              var we = ce(_), Ce;
              try {
                for (we.s(); !(Ce = we.n()).done; ) {
                  var Xe = Ce.value, Se = Xe.codePointAt(0);
                  Se > 255 && (Se = 63), H[v++] = Se;
                }
              } catch (Te) {
                we.e(Te);
              } finally {
                we.f();
              }
              R.messages.clientCutText(this._sock, H);
            }
          }
        },
        {
          key: "getImageData",
          value: function() {
            return this._display.getImageData();
          }
        },
        {
          key: "toDataURL",
          value: function(_, T) {
            return this._display.toDataURL(_, T);
          }
        },
        {
          key: "toBlob",
          value: function(_, T, v) {
            return this._display.toBlob(_, T, v);
          }
        },
        {
          key: "_connect",
          value: function() {
            if (r.Debug(">> RFB.connect"), this._url) r.Info("connecting to ".concat(this._url)), this._sock.open(this._url, this._wsProtocols);
            else {
              if (r.Info("attaching ".concat(this._rawChannel, " to Websock")), this._sock.attach(this._rawChannel), this._sock.readyState === "closed") throw Error("Cannot use already closed WebSocket/RTCDataChannel");
              this._sock.readyState === "open" && this._socketOpen();
            }
            this._target.appendChild(this._screen), this._gestures.attach(this._canvas), this._cursor.attach(this._canvas), this._refreshCursor(), this._resizeObserver.observe(this._screen), this._canvas.addEventListener("mousedown", this._eventHandlers.focusCanvas), this._canvas.addEventListener("touchstart", this._eventHandlers.focusCanvas), this._canvas.addEventListener("mousedown", this._eventHandlers.handleMouse), this._canvas.addEventListener("mouseup", this._eventHandlers.handleMouse), this._canvas.addEventListener("mousemove", this._eventHandlers.handleMouse), this._canvas.addEventListener("click", this._eventHandlers.handleMouse), this._canvas.addEventListener("contextmenu", this._eventHandlers.handleMouse), this._canvas.addEventListener("wheel", this._eventHandlers.handleWheel), this._canvas.addEventListener("gesturestart", this._eventHandlers.handleGesture), this._canvas.addEventListener("gesturemove", this._eventHandlers.handleGesture), this._canvas.addEventListener("gestureend", this._eventHandlers.handleGesture), r.Debug("<< RFB.connect");
          }
        },
        {
          key: "_disconnect",
          value: function() {
            r.Debug(">> RFB.disconnect"), this._cursor.detach(), this._canvas.removeEventListener("gesturestart", this._eventHandlers.handleGesture), this._canvas.removeEventListener("gesturemove", this._eventHandlers.handleGesture), this._canvas.removeEventListener("gestureend", this._eventHandlers.handleGesture), this._canvas.removeEventListener("wheel", this._eventHandlers.handleWheel), this._canvas.removeEventListener("mousedown", this._eventHandlers.handleMouse), this._canvas.removeEventListener("mouseup", this._eventHandlers.handleMouse), this._canvas.removeEventListener("mousemove", this._eventHandlers.handleMouse), this._canvas.removeEventListener("click", this._eventHandlers.handleMouse), this._canvas.removeEventListener("contextmenu", this._eventHandlers.handleMouse), this._canvas.removeEventListener("mousedown", this._eventHandlers.focusCanvas), this._canvas.removeEventListener("touchstart", this._eventHandlers.focusCanvas), this._resizeObserver.disconnect(), this._keyboard.ungrab(), this._gestures.detach(), this._sock.close();
            try {
              this._target.removeChild(this._screen);
            } catch (_) {
              if (_.name !== "NotFoundError") throw _;
            }
            clearTimeout(this._resizeTimeout), clearTimeout(this._mouseMoveTimer), r.Debug("<< RFB.disconnect");
          }
        },
        {
          key: "_socketOpen",
          value: function() {
            this._rfbConnectionState === "connecting" && this._rfbInitState === "" ? (this._rfbInitState = "ProtocolVersion", r.Debug("Starting VNC handshake")) : this._fail("Unexpected server connection while " + this._rfbConnectionState);
          }
        },
        {
          key: "_socketClose",
          value: function(_) {
            r.Debug("WebSocket on-close event");
            var T = "";
            switch (_.code && (T = "(code: " + _.code, _.reason && (T += ", reason: " + _.reason), T += ")"), this._rfbConnectionState) {
              case "connecting":
                this._fail("Connection closed " + T);
                break;
              case "connected":
                this._updateConnectionState("disconnecting"), this._updateConnectionState("disconnected");
                break;
              case "disconnecting":
                this._updateConnectionState("disconnected");
                break;
              case "disconnected":
                this._fail("Unexpected server disconnect when already disconnected " + T);
                break;
              default:
                this._fail("Unexpected server disconnect before connecting " + T);
                break;
            }
            this._sock.off("close"), this._rawChannel = null;
          }
        },
        {
          key: "_socketError",
          value: function(_) {
            r.Warn("WebSocket on-error event");
          }
        },
        {
          key: "_focusCanvas",
          value: function(_) {
            this.focusOnClick && this.focus({
              preventScroll: true
            });
          }
        },
        {
          key: "_setDesktopName",
          value: function(_) {
            this._fbName = _, this.dispatchEvent(new CustomEvent("desktopname", {
              detail: {
                name: this._fbName
              }
            }));
          }
        },
        {
          key: "_saveExpectedClientSize",
          value: function() {
            this._expectedClientWidth = this._screen.clientWidth, this._expectedClientHeight = this._screen.clientHeight;
          }
        },
        {
          key: "_currentClientSize",
          value: function() {
            return [
              this._screen.clientWidth,
              this._screen.clientHeight
            ];
          }
        },
        {
          key: "_clientHasExpectedSize",
          value: function() {
            var _ = this._currentClientSize(), T = M(_, 2), v = T[0], H = T[1];
            return v == this._expectedClientWidth && H == this._expectedClientHeight;
          }
        },
        {
          key: "_handleResize",
          value: function() {
            var _ = this;
            this._clientHasExpectedSize() || (window.requestAnimationFrame(function() {
              _._updateClip(), _._updateScale(), _._saveExpectedClientSize();
            }), this._requestRemoteResize());
          }
        },
        {
          key: "_updateClip",
          value: function() {
            var _ = this._display.clipViewport, T = this._clipViewport;
            if (this._scaleViewport && (T = false), _ !== T && (this._display.clipViewport = T), T) {
              var v = this._screenSize();
              this._display.viewportChangeSize(v.w, v.h), this._fixScrollbars(), this._setClippingViewport(v.w < this._display.width || v.h < this._display.height);
            } else this._setClippingViewport(false);
            _ !== T && this._saveExpectedClientSize();
          }
        },
        {
          key: "_updateScale",
          value: function() {
            if (!this._scaleViewport) this._display.scale = 1;
            else {
              var _ = this._screenSize();
              this._display.autoscale(_.w, _.h);
            }
            this._fixScrollbars();
          }
        },
        {
          key: "_requestRemoteResize",
          value: function() {
            if (this._resizeSession && !this._viewOnly && this._supportsSetDesktopSize && !this._pendingRemoteResize) {
              if (Date.now() - this._lastResize < 100) {
                clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(this._requestRemoteResize.bind(this), 100 - (Date.now() - this._lastResize));
                return;
              }
              this._resizeTimeout = null;
              var _ = this._screenSize();
              _.w === this._fbWidth && _.h === this._fbHeight || (this._pendingRemoteResize = true, this._lastResize = Date.now(), R.messages.setDesktopSize(this._sock, Math.floor(_.w), Math.floor(_.h), this._screenID, this._screenFlags), r.Debug("Requested new desktop size: " + _.w + "x" + _.h));
            }
          }
        },
        {
          key: "_screenSize",
          value: function() {
            var _ = this._screen.getBoundingClientRect();
            return {
              w: _.width,
              h: _.height
            };
          }
        },
        {
          key: "_fixScrollbars",
          value: function() {
            var _ = this._screen.style.overflow;
            this._screen.style.overflow = "hidden", this._screen.getBoundingClientRect(), this._screen.style.overflow = _;
          }
        },
        {
          key: "_updateConnectionState",
          value: function(_) {
            var T = this, v = this._rfbConnectionState;
            if (_ === v) {
              r.Debug("Already in state '" + _ + "', ignoring");
              return;
            }
            if (v === "disconnected") {
              r.Error("Tried changing state of a disconnected RFB object");
              return;
            }
            switch (_) {
              case "connected":
                if (v !== "connecting") {
                  r.Error("Bad transition to connected state, previous connection state: " + v);
                  return;
                }
                break;
              case "disconnected":
                if (v !== "disconnecting") {
                  r.Error("Bad transition to disconnected state, previous connection state: " + v);
                  return;
                }
                break;
              case "connecting":
                if (v !== "") {
                  r.Error("Bad transition to connecting state, previous connection state: " + v);
                  return;
                }
                break;
              case "disconnecting":
                if (v !== "connected" && v !== "connecting") {
                  r.Error("Bad transition to disconnecting state, previous connection state: " + v);
                  return;
                }
                break;
              default:
                r.Error("Unknown connection state: " + _);
                return;
            }
            switch (this._rfbConnectionState = _, r.Debug("New state '" + _ + "', was '" + v + "'."), this._disconnTimer && _ !== "disconnecting" && (r.Debug("Clearing disconnect timer"), clearTimeout(this._disconnTimer), this._disconnTimer = null, this._sock.off("close")), _) {
              case "connecting":
                this._connect();
                break;
              case "connected":
                this.dispatchEvent(new CustomEvent("connect", {
                  detail: {}
                }));
                break;
              case "disconnecting":
                this._disconnect(), this._disconnTimer = setTimeout(function() {
                  r.Error("Disconnection timed out."), T._updateConnectionState("disconnected");
                }, ie * 1e3);
                break;
              case "disconnected":
                this.dispatchEvent(new CustomEvent("disconnect", {
                  detail: {
                    clean: this._rfbCleanDisconnect
                  }
                }));
                break;
            }
          }
        },
        {
          key: "_fail",
          value: function(_) {
            switch (this._rfbConnectionState) {
              case "disconnecting":
                r.Error("Failed when disconnecting: " + _);
                break;
              case "connected":
                r.Error("Failed while connected: " + _);
                break;
              case "connecting":
                r.Error("Failed when connecting: " + _);
                break;
              default:
                r.Error("RFB failure: " + _);
                break;
            }
            return this._rfbCleanDisconnect = false, this._updateConnectionState("disconnecting"), this._updateConnectionState("disconnected"), false;
          }
        },
        {
          key: "_setCapability",
          value: function(_, T) {
            this._capabilities[_] = T, this.dispatchEvent(new CustomEvent("capabilities", {
              detail: {
                capabilities: this._capabilities
              }
            }));
          }
        },
        {
          key: "_handleMessage",
          value: function() {
            if (this._sock.rQwait("message", 1)) {
              r.Warn("handleMessage called on an empty receive queue");
              return;
            }
            switch (this._rfbConnectionState) {
              case "disconnected":
                r.Error("Got data while disconnected");
                break;
              case "connected":
                for (; !(this._flushing || !this._normalMsg() || this._sock.rQwait("message", 1)); ) ;
                break;
              case "connecting":
                for (; this._rfbConnectionState === "connecting" && this._initMsg(); ) ;
                break;
              default:
                r.Error("Got data while in an invalid state");
                break;
            }
          }
        },
        {
          key: "_handleKeyEvent",
          value: function(_, T, v, H, J) {
            T == "CapsLock" && v && (this._remoteCapsLock = null), this._remoteCapsLock !== null && J !== null && this._remoteCapsLock !== J && v && (r.Debug("Fixing remote caps lock"), this.sendKey(f.default.XK_Caps_Lock, "CapsLock", true), this.sendKey(f.default.XK_Caps_Lock, "CapsLock", false), this._remoteCapsLock = null), T == "NumLock" && v && (this._remoteNumLock = null), this._remoteNumLock !== null && H !== null && this._remoteNumLock !== H && v && (r.Debug("Fixing remote num lock"), this.sendKey(f.default.XK_Num_Lock, "NumLock", true), this.sendKey(f.default.XK_Num_Lock, "NumLock", false), this._remoteNumLock = null), this.sendKey(_, T, v);
          }
        },
        {
          key: "_handleMouse",
          value: function(_) {
            if (!(_.type === "click" && _.target !== this._canvas) && (_.stopPropagation(), _.preventDefault(), !(_.type === "click" || _.type === "contextmenu"))) {
              var T = (0, o.clientToElement)(_.clientX, _.clientY, this._canvas), v = R._convertButtonMask(_.buttons), H = _.type == "mousedown";
              switch (_.type) {
                case "mousedown":
                case "mouseup":
                  if (this.dragViewport) if (H && !this._viewportDragging) {
                    this._viewportDragging = true, this._viewportDragPos = {
                      x: T.x,
                      y: T.y
                    }, this._viewportHasMoved = false, this._flushMouseMoveTimer(T.x, T.y), this._mouseButtonMask = v;
                    break;
                  } else {
                    if (this._viewportDragging = false, this._viewportHasMoved) {
                      this._mouseButtonMask = v;
                      break;
                    }
                    this._sendMouse(T.x, T.y, this._mouseButtonMask);
                  }
                  H && (0, s.setCapture)(this._canvas), this._handleMouseButton(T.x, T.y, v);
                  break;
                case "mousemove":
                  if (this._viewportDragging) {
                    var J = this._viewportDragPos.x - T.x, te = this._viewportDragPos.y - T.y;
                    (this._viewportHasMoved || Math.abs(J) > a.dragThreshold || Math.abs(te) > a.dragThreshold) && (this._viewportHasMoved = true, this._viewportDragPos = {
                      x: T.x,
                      y: T.y
                    }, this._display.viewportChangePos(J, te));
                    break;
                  }
                  this._handleMouseMove(T.x, T.y);
                  break;
              }
            }
          }
        },
        {
          key: "_handleMouseButton",
          value: function(_, T, v) {
            this._flushMouseMoveTimer(_, T), this._mouseButtonMask = v, this._sendMouse(_, T, this._mouseButtonMask);
          }
        },
        {
          key: "_handleMouseMove",
          value: function(_, T) {
            var v = this;
            if (this._mousePos = {
              x: _,
              y: T
            }, this._mouseMoveTimer == null) {
              var H = Date.now() - this._mouseLastMoveTime;
              H > ve ? (this._sendMouse(_, T, this._mouseButtonMask), this._mouseLastMoveTime = Date.now()) : this._mouseMoveTimer = setTimeout(function() {
                v._handleDelayedMouseMove();
              }, ve - H);
            }
          }
        },
        {
          key: "_handleDelayedMouseMove",
          value: function() {
            this._mouseMoveTimer = null, this._sendMouse(this._mousePos.x, this._mousePos.y, this._mouseButtonMask), this._mouseLastMoveTime = Date.now();
          }
        },
        {
          key: "_sendMouse",
          value: function(_, T, v) {
            if (this._rfbConnectionState === "connected" && !this._viewOnly) {
              if (v & 32768) throw new Error("Illegal mouse button mask (mask: " + v + ")");
              var H = v & 32640;
              this._extendedPointerEventSupported && H ? R.messages.extendedPointerEvent(this._sock, this._display.absX(_), this._display.absY(T), v) : R.messages.pointerEvent(this._sock, this._display.absX(_), this._display.absY(T), v);
            }
          }
        },
        {
          key: "_handleWheel",
          value: function(_) {
            if (this._rfbConnectionState === "connected" && !this._viewOnly) {
              _.stopPropagation(), _.preventDefault();
              var T = (0, o.clientToElement)(_.clientX, _.clientY, this._canvas), v = R._convertButtonMask(_.buttons), H = _.deltaX, J = _.deltaY;
              _.deltaMode !== 0 && (H *= Pe, J *= Pe), this._accumulatedWheelDeltaX += H, this._accumulatedWheelDeltaY += J, Math.abs(this._accumulatedWheelDeltaX) >= de && (this._accumulatedWheelDeltaX < 0 ? (this._handleMouseButton(T.x, T.y, v | 32), this._handleMouseButton(T.x, T.y, v)) : this._accumulatedWheelDeltaX > 0 && (this._handleMouseButton(T.x, T.y, v | 64), this._handleMouseButton(T.x, T.y, v)), this._accumulatedWheelDeltaX = 0), Math.abs(this._accumulatedWheelDeltaY) >= de && (this._accumulatedWheelDeltaY < 0 ? (this._handleMouseButton(T.x, T.y, v | 8), this._handleMouseButton(T.x, T.y, v)) : this._accumulatedWheelDeltaY > 0 && (this._handleMouseButton(T.x, T.y, v | 16), this._handleMouseButton(T.x, T.y, v)), this._accumulatedWheelDeltaY = 0);
            }
          }
        },
        {
          key: "_fakeMouseMove",
          value: function(_, T, v) {
            this._handleMouseMove(T, v), this._cursor.move(_.detail.clientX, _.detail.clientY);
          }
        },
        {
          key: "_handleTapEvent",
          value: function(_, T) {
            var v = (0, o.clientToElement)(_.detail.clientX, _.detail.clientY, this._canvas);
            if (this._gestureLastTapTime !== null && Date.now() - this._gestureLastTapTime < le && this._gestureFirstDoubleTapEv.detail.type === _.detail.type) {
              var H = this._gestureFirstDoubleTapEv.detail.clientX - _.detail.clientX, J = this._gestureFirstDoubleTapEv.detail.clientY - _.detail.clientY, te = Math.hypot(H, J);
              te < xt ? v = (0, o.clientToElement)(this._gestureFirstDoubleTapEv.detail.clientX, this._gestureFirstDoubleTapEv.detail.clientY, this._canvas) : this._gestureFirstDoubleTapEv = _;
            } else this._gestureFirstDoubleTapEv = _;
            this._gestureLastTapTime = Date.now(), this._fakeMouseMove(this._gestureFirstDoubleTapEv, v.x, v.y), this._handleMouseButton(v.x, v.y, T), this._handleMouseButton(v.x, v.y, 0);
          }
        },
        {
          key: "_handleGesture",
          value: function(_) {
            var T, v = (0, o.clientToElement)(_.detail.clientX, _.detail.clientY, this._canvas);
            switch (_.type) {
              case "gesturestart":
                switch (_.detail.type) {
                  case "onetap":
                    this._handleTapEvent(_, 1);
                    break;
                  case "twotap":
                    this._handleTapEvent(_, 4);
                    break;
                  case "threetap":
                    this._handleTapEvent(_, 2);
                    break;
                  case "drag":
                    this.dragViewport ? (this._viewportHasMoved = false, this._viewportDragging = true, this._viewportDragPos = {
                      x: v.x,
                      y: v.y
                    }) : (this._fakeMouseMove(_, v.x, v.y), this._handleMouseButton(v.x, v.y, 1));
                    break;
                  case "longpress":
                    this.dragViewport ? (this._viewportHasMoved = false, this._viewportDragPos = {
                      x: v.x,
                      y: v.y
                    }) : (this._fakeMouseMove(_, v.x, v.y), this._handleMouseButton(v.x, v.y, 4));
                    break;
                  case "twodrag":
                    this._gestureLastMagnitudeX = _.detail.magnitudeX, this._gestureLastMagnitudeY = _.detail.magnitudeY, this._fakeMouseMove(_, v.x, v.y);
                    break;
                  case "pinch":
                    this._gestureLastMagnitudeX = Math.hypot(_.detail.magnitudeX, _.detail.magnitudeY), this._fakeMouseMove(_, v.x, v.y);
                    break;
                }
                break;
              case "gesturemove":
                switch (_.detail.type) {
                  case "onetap":
                  case "twotap":
                  case "threetap":
                    break;
                  case "drag":
                  case "longpress":
                    if (this.dragViewport) {
                      this._viewportDragging = true;
                      var H = this._viewportDragPos.x - v.x, J = this._viewportDragPos.y - v.y;
                      (this._viewportHasMoved || Math.abs(H) > a.dragThreshold || Math.abs(J) > a.dragThreshold) && (this._viewportHasMoved = true, this._viewportDragPos = {
                        x: v.x,
                        y: v.y
                      }, this._display.viewportChangePos(H, J));
                    } else this._fakeMouseMove(_, v.x, v.y);
                    break;
                  case "twodrag":
                    for (this._fakeMouseMove(_, v.x, v.y); _.detail.magnitudeY - this._gestureLastMagnitudeY > Oe; ) this._handleMouseButton(v.x, v.y, 8), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeY += Oe;
                    for (; _.detail.magnitudeY - this._gestureLastMagnitudeY < -Oe; ) this._handleMouseButton(v.x, v.y, 16), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeY -= Oe;
                    for (; _.detail.magnitudeX - this._gestureLastMagnitudeX > Oe; ) this._handleMouseButton(v.x, v.y, 32), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeX += Oe;
                    for (; _.detail.magnitudeX - this._gestureLastMagnitudeX < -Oe; ) this._handleMouseButton(v.x, v.y, 64), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeX -= Oe;
                    break;
                  case "pinch":
                    if (this._fakeMouseMove(_, v.x, v.y), T = Math.hypot(_.detail.magnitudeX, _.detail.magnitudeY), Math.abs(T - this._gestureLastMagnitudeX) > Me) {
                      for (this._handleKeyEvent(f.default.XK_Control_L, "ControlLeft", true); T - this._gestureLastMagnitudeX > Me; ) this._handleMouseButton(v.x, v.y, 8), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeX += Me;
                      for (; T - this._gestureLastMagnitudeX < -Me; ) this._handleMouseButton(v.x, v.y, 16), this._handleMouseButton(v.x, v.y, 0), this._gestureLastMagnitudeX -= Me;
                    }
                    this._handleKeyEvent(f.default.XK_Control_L, "ControlLeft", false);
                    break;
                }
                break;
              case "gestureend":
                switch (_.detail.type) {
                  case "onetap":
                  case "twotap":
                  case "threetap":
                  case "pinch":
                  case "twodrag":
                    break;
                  case "drag":
                    this.dragViewport ? this._viewportDragging = false : (this._fakeMouseMove(_, v.x, v.y), this._handleMouseButton(v.x, v.y, 0));
                    break;
                  case "longpress":
                    if (this._viewportHasMoved) break;
                    this.dragViewport && !this._viewportHasMoved ? (this._fakeMouseMove(_, v.x, v.y), this._handleMouseButton(v.x, v.y, 4), this._handleMouseButton(v.x, v.y, 0), this._viewportDragging = false) : (this._fakeMouseMove(_, v.x, v.y), this._handleMouseButton(v.x, v.y, 0));
                    break;
                }
                break;
            }
          }
        },
        {
          key: "_flushMouseMoveTimer",
          value: function(_, T) {
            this._mouseMoveTimer !== null && (clearTimeout(this._mouseMoveTimer), this._mouseMoveTimer = null, this._sendMouse(_, T, this._mouseButtonMask));
          }
        },
        {
          key: "_negotiateProtocolVersion",
          value: function() {
            if (this._sock.rQwait("version", 12)) return false;
            var _ = this._sock.rQshiftStr(12).substr(4, 7);
            r.Info("Server ProtocolVersion: " + _);
            var T = 0;
            switch (_) {
              case "000.000":
                T = 1;
                break;
              case "003.003":
              case "003.006":
                this._rfbVersion = 3.3;
                break;
              case "003.007":
                this._rfbVersion = 3.7;
                break;
              case "003.008":
              case "003.889":
              case "004.000":
              case "004.001":
              case "005.000":
                this._rfbVersion = 3.8;
                break;
              default:
                return this._fail("Invalid server version " + _);
            }
            if (T) {
              for (var v = "ID:" + this._repeaterID; v.length < 250; ) v += "\0";
              return this._sock.sQpushString(v), this._sock.flush(), true;
            }
            this._rfbVersion > this._rfbMaxVersion && (this._rfbVersion = this._rfbMaxVersion);
            var H = "00" + parseInt(this._rfbVersion, 10) + ".00" + this._rfbVersion * 10 % 10;
            this._sock.sQpushString("RFB " + H + `
`), this._sock.flush(), r.Debug("Sent ProtocolVersion: " + H), this._rfbInitState = "Security";
          }
        },
        {
          key: "_isSupportedSecurityType",
          value: function(_) {
            var T = [
              gt,
              Zr,
              Si,
              Ei,
              mn,
              Ki,
              Xi,
              Fi,
              Ai
            ];
            return T.includes(_);
          }
        },
        {
          key: "_negotiateSecurity",
          value: function() {
            if (this._rfbVersion >= 3.7) {
              var _ = this._sock.rQshift8();
              if (this._sock.rQwait("security type", _, 1)) return false;
              if (_ === 0) return this._rfbInitState = "SecurityReason", this._securityContext = "no security types", this._securityStatus = 1, true;
              var T = this._sock.rQshiftBytes(_);
              r.Debug("Server security types: " + T), this._rfbAuthScheme = -1;
              var v = ce(T), H;
              try {
                for (v.s(); !(H = v.n()).done; ) {
                  var J = H.value;
                  if (this._isSupportedSecurityType(J)) {
                    this._rfbAuthScheme = J;
                    break;
                  }
                }
              } catch (te) {
                v.e(te);
              } finally {
                v.f();
              }
              if (this._rfbAuthScheme === -1) return this._fail("Unsupported security types (types: " + T + ")");
              this._sock.sQpush8(this._rfbAuthScheme), this._sock.flush();
            } else {
              if (this._sock.rQwait("security scheme", 4)) return false;
              if (this._rfbAuthScheme = this._sock.rQshift32(), this._rfbAuthScheme == 0) return this._rfbInitState = "SecurityReason", this._securityContext = "authentication scheme", this._securityStatus = 1, true;
            }
            return this._rfbInitState = "Authentication", r.Debug("Authenticating using scheme: " + this._rfbAuthScheme), true;
          }
        },
        {
          key: "_handleSecurityReason",
          value: function() {
            if (this._sock.rQwait("reason length", 4)) return false;
            var _ = this._sock.rQshift32(), T = "";
            if (_ > 0) {
              if (this._sock.rQwait("reason", _, 4)) return false;
              T = this._sock.rQshiftStr(_);
            }
            return T !== "" ? (this.dispatchEvent(new CustomEvent("securityfailure", {
              detail: {
                status: this._securityStatus,
                reason: T
              }
            })), this._fail("Security negotiation failed on " + this._securityContext + " (reason: " + T + ")")) : (this.dispatchEvent(new CustomEvent("securityfailure", {
              detail: {
                status: this._securityStatus
              }
            })), this._fail("Security negotiation failed on " + this._securityContext));
          }
        },
        {
          key: "_negotiateXvpAuth",
          value: function() {
            return this._rfbCredentials.username === void 0 || this._rfbCredentials.password === void 0 || this._rfbCredentials.target === void 0 ? (this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "username",
                  "password",
                  "target"
                ]
              }
            })), false) : (this._sock.sQpush8(this._rfbCredentials.username.length), this._sock.sQpush8(this._rfbCredentials.target.length), this._sock.sQpushString(this._rfbCredentials.username), this._sock.sQpushString(this._rfbCredentials.target), this._sock.flush(), this._rfbAuthScheme = Zr, this._negotiateAuthentication());
          }
        },
        {
          key: "_negotiateVeNCryptAuth",
          value: function() {
            if (this._rfbVeNCryptState == 0) {
              if (this._sock.rQwait("vencrypt version", 2)) return false;
              var _ = this._sock.rQshift8(), T = this._sock.rQshift8();
              if (!(_ == 0 && T == 2)) return this._fail("Unsupported VeNCrypt version " + _ + "." + T);
              this._sock.sQpush8(0), this._sock.sQpush8(2), this._sock.flush(), this._rfbVeNCryptState = 1;
            }
            if (this._rfbVeNCryptState == 1) {
              if (this._sock.rQwait("vencrypt ack", 1)) return false;
              var v = this._sock.rQshift8();
              if (v != 0) return this._fail("VeNCrypt failure " + v);
              this._rfbVeNCryptState = 2;
            }
            if (this._rfbVeNCryptState == 2) {
              if (this._sock.rQwait("vencrypt subtypes length", 1)) return false;
              var H = this._sock.rQshift8();
              if (H < 1) return this._fail("VeNCrypt subtypes empty");
              this._rfbVeNCryptSubtypesLength = H, this._rfbVeNCryptState = 3;
            }
            if (this._rfbVeNCryptState == 3) {
              if (this._sock.rQwait("vencrypt subtypes", 4 * this._rfbVeNCryptSubtypesLength)) return false;
              for (var J = [], te = 0; te < this._rfbVeNCryptSubtypesLength; te++) J.push(this._sock.rQshift32());
              this._rfbAuthScheme = -1;
              for (var ae = 0, we = J; ae < we.length; ae++) {
                var Ce = we[ae];
                if (Ce !== mn && this._isSupportedSecurityType(Ce)) {
                  this._rfbAuthScheme = Ce;
                  break;
                }
              }
              return this._rfbAuthScheme === -1 ? this._fail("Unsupported security types (types: " + J + ")") : (this._sock.sQpush32(this._rfbAuthScheme), this._sock.flush(), this._rfbVeNCryptState = 4, true);
            }
          }
        },
        {
          key: "_negotiatePlainAuth",
          value: function() {
            if (this._rfbCredentials.username === void 0 || this._rfbCredentials.password === void 0) return this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "username",
                  "password"
                ]
              }
            })), false;
            var _ = (0, i.encodeUTF8)(this._rfbCredentials.username), T = (0, i.encodeUTF8)(this._rfbCredentials.password);
            return this._sock.sQpush32(_.length), this._sock.sQpush32(T.length), this._sock.sQpushString(_), this._sock.sQpushString(T), this._sock.flush(), this._rfbInitState = "SecurityResult", true;
          }
        },
        {
          key: "_negotiateStdVNCAuth",
          value: function() {
            if (this._sock.rQwait("auth challenge", 16)) return false;
            if (this._rfbCredentials.password === void 0) return this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "password"
                ]
              }
            })), false;
            var _ = Array.prototype.slice.call(this._sock.rQshiftBytes(16)), T = R.genDES(this._rfbCredentials.password, _);
            return this._sock.sQpushBytes(T), this._sock.flush(), this._rfbInitState = "SecurityResult", true;
          }
        },
        {
          key: "_negotiateARDAuth",
          value: function() {
            if (this._rfbCredentials.username === void 0 || this._rfbCredentials.password === void 0) return this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "username",
                  "password"
                ]
              }
            })), false;
            if (this._rfbCredentials.ardPublicKey != null && this._rfbCredentials.ardCredentials != null) return this._sock.sQpushBytes(this._rfbCredentials.ardCredentials), this._sock.sQpushBytes(this._rfbCredentials.ardPublicKey), this._sock.flush(), this._rfbCredentials.ardCredentials = null, this._rfbCredentials.ardPublicKey = null, this._rfbInitState = "SecurityResult", true;
            if (this._sock.rQwait("read ard", 4)) return false;
            var _ = this._sock.rQshiftBytes(2), T = this._sock.rQshift16();
            if (this._sock.rQwait("read ard keylength", T * 2, 4)) return false;
            var v = this._sock.rQshiftBytes(T), H = this._sock.rQshiftBytes(T), J = x.default.generateKey({
              name: "DH",
              g: _,
              p: v
            }, false, [
              "deriveBits"
            ]);
            return this._negotiateARDAuthAsync(T, H, J), false;
          }
        },
        {
          key: "_negotiateARDAuthAsync",
          value: function() {
            var D = B(m().mark(function T(v, H, J) {
              var te, ae, we, Ce, Xe, Se, Te, _e, ke, We;
              return m().wrap(function(Le) {
                for (; ; ) switch (Le.prev = Le.next) {
                  case 0:
                    for (te = x.default.exportKey("raw", J.publicKey), ae = x.default.deriveBits({
                      name: "DH",
                      public: H
                    }, J.privateKey, v * 8), we = (0, i.encodeUTF8)(this._rfbCredentials.username).substring(0, 63), Ce = (0, i.encodeUTF8)(this._rfbCredentials.password).substring(0, 63), Xe = window.crypto.getRandomValues(new Uint8Array(128)), Se = 0; Se < we.length; Se++) Xe[Se] = we.charCodeAt(Se);
                    for (Xe[we.length] = 0, Te = 0; Te < Ce.length; Te++) Xe[64 + Te] = Ce.charCodeAt(Te);
                    return Xe[64 + Ce.length] = 0, Le.next = 11, x.default.digest("MD5", ae);
                  case 11:
                    return _e = Le.sent, Le.next = 14, x.default.importKey("raw", _e, {
                      name: "AES-ECB"
                    }, false, [
                      "encrypt"
                    ]);
                  case 14:
                    return ke = Le.sent, Le.next = 17, x.default.encrypt({
                      name: "AES-ECB"
                    }, ke, Xe);
                  case 17:
                    We = Le.sent, this._rfbCredentials.ardCredentials = We, this._rfbCredentials.ardPublicKey = te, this._resumeAuthentication();
                  case 21:
                  case "end":
                    return Le.stop();
                }
              }, T, this);
            }));
            function _(T, v, H) {
              return D.apply(this, arguments);
            }
            return _;
          }()
        },
        {
          key: "_negotiateTightUnixAuth",
          value: function() {
            return this._rfbCredentials.username === void 0 || this._rfbCredentials.password === void 0 ? (this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "username",
                  "password"
                ]
              }
            })), false) : (this._sock.sQpush32(this._rfbCredentials.username.length), this._sock.sQpush32(this._rfbCredentials.password.length), this._sock.sQpushString(this._rfbCredentials.username), this._sock.sQpushString(this._rfbCredentials.password), this._sock.flush(), this._rfbInitState = "SecurityResult", true);
          }
        },
        {
          key: "_negotiateTightTunnels",
          value: function(_) {
            for (var T = {
              0: {
                vendor: "TGHT",
                signature: "NOTUNNEL"
              }
            }, v = {}, H = 0; H < _; H++) {
              var J = this._sock.rQshift32(), te = this._sock.rQshiftStr(4), ae = this._sock.rQshiftStr(8);
              v[J] = {
                vendor: te,
                signature: ae
              };
            }
            return r.Debug("Server Tight tunnel types: " + v), v[1] && v[1].vendor === "SICR" && v[1].signature === "SCHANNEL" && (r.Debug("Detected Siemens server. Assuming NOTUNNEL support."), v[0] = {
              vendor: "TGHT",
              signature: "NOTUNNEL"
            }), v[0] ? v[0].vendor != T[0].vendor || v[0].signature != T[0].signature ? this._fail("Client's tunnel type had the incorrect vendor or signature") : (r.Debug("Selected tunnel type: " + T[0]), this._sock.sQpush32(0), this._sock.flush(), false) : this._fail("Server wanted tunnels, but doesn't support the notunnel type");
          }
        },
        {
          key: "_negotiateTightAuth",
          value: function() {
            if (!this._rfbTightVNC) {
              if (this._sock.rQwait("num tunnels", 4)) return false;
              var _ = this._sock.rQshift32();
              if (_ > 0 && this._sock.rQwait("tunnel capabilities", 16 * _, 4)) return false;
              if (this._rfbTightVNC = true, _ > 0) return this._negotiateTightTunnels(_), false;
            }
            if (this._sock.rQwait("sub auth count", 4)) return false;
            var T = this._sock.rQshift32();
            if (T === 0) return this._rfbInitState = "SecurityResult", true;
            if (this._sock.rQwait("sub auth capabilities", 16 * T, 4)) return false;
            for (var v = {
              STDVNOAUTH__: 1,
              STDVVNCAUTH_: 2,
              TGHTULGNAUTH: 129
            }, H = [], J = 0; J < T; J++) {
              this._sock.rQshift32();
              var te = this._sock.rQshiftStr(12);
              H.push(te);
            }
            r.Debug("Server Tight authentication types: " + H);
            for (var ae in v) if (H.indexOf(ae) != -1) switch (this._sock.sQpush32(v[ae]), this._sock.flush(), r.Debug("Selected authentication type: " + ae), ae) {
              case "STDVNOAUTH__":
                return this._rfbInitState = "SecurityResult", true;
              case "STDVVNCAUTH_":
                return this._rfbAuthScheme = Zr, true;
              case "TGHTULGNAUTH":
                return this._rfbAuthScheme = Ci, true;
              default:
                return this._fail("Unsupported tiny auth scheme (scheme: " + ae + ")");
            }
            return this._fail("No supported sub-auth types!");
          }
        },
        {
          key: "_handleRSAAESCredentialsRequired",
          value: function(_) {
            this.dispatchEvent(_);
          }
        },
        {
          key: "_handleRSAAESServerVerification",
          value: function(_) {
            this.dispatchEvent(_);
          }
        },
        {
          key: "_negotiateRA2neAuth",
          value: function() {
            var _ = this;
            return this._rfbRSAAESAuthenticationState === null && (this._rfbRSAAESAuthenticationState = new K.default(this._sock, function() {
              return _._rfbCredentials;
            }), this._rfbRSAAESAuthenticationState.addEventListener("serververification", this._eventHandlers.handleRSAAESServerVerification), this._rfbRSAAESAuthenticationState.addEventListener("credentialsrequired", this._eventHandlers.handleRSAAESCredentialsRequired)), this._rfbRSAAESAuthenticationState.checkInternalEvents(), this._rfbRSAAESAuthenticationState.hasStarted || this._rfbRSAAESAuthenticationState.negotiateRA2neAuthAsync().catch(function(T) {
              T.message !== "disconnect normally" && _._fail(T.message);
            }).then(function() {
              return _._rfbInitState = "SecurityResult", true;
            }).finally(function() {
              _._rfbRSAAESAuthenticationState.removeEventListener("serververification", _._eventHandlers.handleRSAAESServerVerification), _._rfbRSAAESAuthenticationState.removeEventListener("credentialsrequired", _._eventHandlers.handleRSAAESCredentialsRequired), _._rfbRSAAESAuthenticationState = null;
            }), false;
          }
        },
        {
          key: "_negotiateMSLogonIIAuth",
          value: function() {
            if (this._sock.rQwait("mslogonii dh param", 24)) return false;
            if (this._rfbCredentials.username === void 0 || this._rfbCredentials.password === void 0) return this.dispatchEvent(new CustomEvent("credentialsrequired", {
              detail: {
                types: [
                  "username",
                  "password"
                ]
              }
            })), false;
            var _ = this._sock.rQshiftBytes(8), T = this._sock.rQshiftBytes(8), v = this._sock.rQshiftBytes(8), H = x.default.generateKey({
              name: "DH",
              g: _,
              p: T
            }, true, [
              "deriveBits"
            ]), J = x.default.exportKey("raw", H.publicKey), te = x.default.deriveBits({
              name: "DH",
              public: v
            }, H.privateKey, 64), ae = x.default.importKey("raw", te, {
              name: "DES-CBC"
            }, false, [
              "encrypt"
            ]), we = (0, i.encodeUTF8)(this._rfbCredentials.username).substring(0, 255), Ce = (0, i.encodeUTF8)(this._rfbCredentials.password).substring(0, 63), Xe = new Uint8Array(256), Se = new Uint8Array(64);
            window.crypto.getRandomValues(Xe), window.crypto.getRandomValues(Se);
            for (var Te = 0; Te < we.length; Te++) Xe[Te] = we.charCodeAt(Te);
            Xe[we.length] = 0;
            for (var _e = 0; _e < Ce.length; _e++) Se[_e] = Ce.charCodeAt(_e);
            return Se[Ce.length] = 0, Xe = x.default.encrypt({
              name: "DES-CBC",
              iv: te
            }, ae, Xe), Se = x.default.encrypt({
              name: "DES-CBC",
              iv: te
            }, ae, Se), this._sock.sQpushBytes(J), this._sock.sQpushBytes(Xe), this._sock.sQpushBytes(Se), this._sock.flush(), this._rfbInitState = "SecurityResult", true;
          }
        },
        {
          key: "_negotiateAuthentication",
          value: function() {
            switch (this._rfbAuthScheme) {
              case gt:
                return this._rfbVersion >= 3.8 ? this._rfbInitState = "SecurityResult" : this._rfbInitState = "ClientInitialisation", true;
              case Ki:
                return this._negotiateXvpAuth();
              case Xi:
                return this._negotiateARDAuth();
              case Zr:
                return this._negotiateStdVNCAuth();
              case Ei:
                return this._negotiateTightAuth();
              case mn:
                return this._negotiateVeNCryptAuth();
              case Ai:
                return this._negotiatePlainAuth();
              case Ci:
                return this._negotiateTightUnixAuth();
              case Si:
                return this._negotiateRA2neAuth();
              case Fi:
                return this._negotiateMSLogonIIAuth();
              default:
                return this._fail("Unsupported auth scheme (scheme: " + this._rfbAuthScheme + ")");
            }
          }
        },
        {
          key: "_handleSecurityResult",
          value: function() {
            if (this._sock.rQwait("VNC auth response ", 4)) return false;
            var _ = this._sock.rQshift32();
            return _ === 0 ? (this._rfbInitState = "ClientInitialisation", r.Debug("Authentication OK"), true) : this._rfbVersion >= 3.8 ? (this._rfbInitState = "SecurityReason", this._securityContext = "security result", this._securityStatus = _, true) : (this.dispatchEvent(new CustomEvent("securityfailure", {
              detail: {
                status: _
              }
            })), this._fail("Security handshake failed"));
          }
        },
        {
          key: "_negotiateServerInit",
          value: function() {
            if (this._sock.rQwait("server initialization", 24)) return false;
            var _ = this._sock.rQshift16(), T = this._sock.rQshift16(), v = this._sock.rQshift8(), H = this._sock.rQshift8(), J = this._sock.rQshift8(), te = this._sock.rQshift8(), ae = this._sock.rQshift16(), we = this._sock.rQshift16(), Ce = this._sock.rQshift16(), Xe = this._sock.rQshift8(), Se = this._sock.rQshift8(), Te = this._sock.rQshift8();
            this._sock.rQskipBytes(3);
            var _e = this._sock.rQshift32();
            if (this._sock.rQwait("server init name", _e, 24)) return false;
            var ke = this._sock.rQshiftStr(_e);
            if (ke = (0, i.decodeUTF8)(ke, true), this._rfbTightVNC) {
              if (this._sock.rQwait("TightVNC extended server init header", 8, 24 + _e)) return false;
              var We = this._sock.rQshift16(), ut = this._sock.rQshift16(), Le = this._sock.rQshift16();
              this._sock.rQskipBytes(2);
              var ze = (We + ut + Le) * 16;
              if (this._sock.rQwait("TightVNC extended server init header", ze, 32 + _e)) return false;
              this._sock.rQskipBytes(16 * We), this._sock.rQskipBytes(16 * ut), this._sock.rQskipBytes(16 * Le);
            }
            return r.Info("Screen: " + _ + "x" + T + ", bpp: " + v + ", depth: " + H + ", bigEndian: " + J + ", trueColor: " + te + ", redMax: " + ae + ", greenMax: " + we + ", blueMax: " + Ce + ", redShift: " + Xe + ", greenShift: " + Se + ", blueShift: " + Te), this._setDesktopName(ke), this._resize(_, T), this._viewOnly || this._keyboard.grab(), this._fbDepth = 24, this._fbName === "Intel(r) AMT KVM" && (r.Warn("Intel AMT KVM only supports 8/16 bit depths. Using low color mode."), this._fbDepth = 8), R.messages.pixelFormat(this._sock, this._fbDepth, true), this._sendEncodings(), R.messages.fbUpdateRequest(this._sock, false, 0, 0, this._fbWidth, this._fbHeight), this._updateConnectionState("connected"), true;
          }
        },
        {
          key: "_sendEncodings",
          value: function() {
            var _ = [];
            _.push(c.encodings.encodingCopyRect), this._fbDepth == 24 && (a.supportsWebCodecsH264Decode && _.push(c.encodings.encodingH264), _.push(c.encodings.encodingTight), _.push(c.encodings.encodingTightPNG), _.push(c.encodings.encodingZRLE), _.push(c.encodings.encodingJPEG), _.push(c.encodings.encodingHextile), _.push(c.encodings.encodingRRE), _.push(c.encodings.encodingZlib)), _.push(c.encodings.encodingRaw), _.push(c.encodings.pseudoEncodingQualityLevel0 + this._qualityLevel), _.push(c.encodings.pseudoEncodingCompressLevel0 + this._compressionLevel), _.push(c.encodings.pseudoEncodingDesktopSize), _.push(c.encodings.pseudoEncodingLastRect), _.push(c.encodings.pseudoEncodingQEMUExtendedKeyEvent), _.push(c.encodings.pseudoEncodingQEMULedEvent), _.push(c.encodings.pseudoEncodingExtendedDesktopSize), _.push(c.encodings.pseudoEncodingXvp), _.push(c.encodings.pseudoEncodingFence), _.push(c.encodings.pseudoEncodingContinuousUpdates), _.push(c.encodings.pseudoEncodingDesktopName), _.push(c.encodings.pseudoEncodingExtendedClipboard), _.push(c.encodings.pseudoEncodingExtendedMouseButtons), this._fbDepth == 24 && (_.push(c.encodings.pseudoEncodingVMwareCursor), _.push(c.encodings.pseudoEncodingCursor)), R.messages.clientEncodings(this._sock, _);
          }
        },
        {
          key: "_initMsg",
          value: function() {
            switch (this._rfbInitState) {
              case "ProtocolVersion":
                return this._negotiateProtocolVersion();
              case "Security":
                return this._negotiateSecurity();
              case "Authentication":
                return this._negotiateAuthentication();
              case "SecurityResult":
                return this._handleSecurityResult();
              case "SecurityReason":
                return this._handleSecurityReason();
              case "ClientInitialisation":
                return this._sock.sQpush8(this._shared ? 1 : 0), this._sock.flush(), this._rfbInitState = "ServerInitialisation", true;
              case "ServerInitialisation":
                return this._negotiateServerInit();
              default:
                return this._fail("Unknown init state (state: " + this._rfbInitState + ")");
            }
          }
        },
        {
          key: "_resumeAuthentication",
          value: function() {
            setTimeout(this._initMsg.bind(this), 0);
          }
        },
        {
          key: "_handleSetColourMapMsg",
          value: function() {
            return r.Debug("SetColorMapEntries"), this._fail("Unexpected SetColorMapEntries message");
          }
        },
        {
          key: "_handleServerCutText",
          value: function() {
            if (r.Debug("ServerCutText"), this._sock.rQwait("ServerCutText header", 7, 1)) return false;
            this._sock.rQskipBytes(3);
            var _ = this._sock.rQshift32();
            if (_ = (0, n.toSigned32bit)(_), this._sock.rQwait("ServerCutText content", Math.abs(_), 8)) return false;
            if (_ >= 0) {
              var T = this._sock.rQshiftStr(_);
              if (this._viewOnly) return true;
              this.dispatchEvent(new CustomEvent("clipboard", {
                detail: {
                  text: T
                }
              }));
            } else {
              _ = Math.abs(_);
              var v = this._sock.rQshift32(), H = v & 65535, J = v & 4278190080, te = !!(J & Pi);
              if (te) {
                this._clipboardServerCapabilitiesFormats = {}, this._clipboardServerCapabilitiesActions = {};
                for (var ae = 0; ae <= 15; ae++) {
                  var we = 1 << ae;
                  H & we && (this._clipboardServerCapabilitiesFormats[we] = true, this._sock.rQshift32());
                }
                for (var Ce = 24; Ce <= 31; Ce++) {
                  var Xe = 1 << Ce;
                  this._clipboardServerCapabilitiesActions[Xe] = !!(J & Xe);
                }
                var Se = [
                  Pi,
                  qr,
                  Ti,
                  kr,
                  Yr
                ];
                R.messages.extendedClipboardCaps(this._sock, Se, {
                  extendedClipboardFormatText: 0
                });
              } else if (J === qr) {
                if (this._viewOnly) return true;
                this._clipboardText != null && this._clipboardServerCapabilitiesActions[Yr] && H & bt && R.messages.extendedClipboardProvide(this._sock, [
                  bt
                ], [
                  this._clipboardText
                ]);
              } else if (J === Ti) {
                if (this._viewOnly) return true;
                this._clipboardServerCapabilitiesActions[kr] && (this._clipboardText != null ? R.messages.extendedClipboardNotify(this._sock, [
                  bt
                ]) : R.messages.extendedClipboardNotify(this._sock, []));
              } else if (J === kr) {
                if (this._viewOnly) return true;
                this._clipboardServerCapabilitiesActions[qr] && H & bt && R.messages.extendedClipboardRequest(this._sock, [
                  bt
                ]);
              } else if (J === Yr) {
                if (this._viewOnly || !(H & bt)) return true;
                this._clipboardText = null;
                var Te = this._sock.rQshiftBytes(_ - 4), _e = new l.default(), ke = null;
                _e.setInput(Te);
                for (var We = 0; We <= 15; We++) {
                  var ut = 1 << We;
                  if (H & ut) {
                    var Le = 0, ze = _e.inflate(4);
                    Le |= ze[0] << 24, Le |= ze[1] << 16, Le |= ze[2] << 8, Le |= ze[3];
                    var wt = _e.inflate(Le);
                    ut === bt && (ke = wt);
                  }
                }
                if (_e.setInput(null), ke !== null) {
                  for (var Wt = "", kt = 0; kt < ke.length; kt++) Wt += String.fromCharCode(ke[kt]);
                  ke = Wt, ke = (0, i.decodeUTF8)(ke), ke.length > 0 && ke.charAt(ke.length - 1) === "\0" && (ke = ke.slice(0, -1)), ke = ke.replaceAll(`\r
`, `
`), this.dispatchEvent(new CustomEvent("clipboard", {
                    detail: {
                      text: ke
                    }
                  }));
                }
              } else return this._fail("Unexpected action in extended clipboard message: " + J);
            }
            return true;
          }
        },
        {
          key: "_handleServerFenceMsg",
          value: function() {
            if (this._sock.rQwait("ServerFence header", 8, 1)) return false;
            this._sock.rQskipBytes(3);
            var _ = this._sock.rQshift32(), T = this._sock.rQshift8();
            if (this._sock.rQwait("ServerFence payload", T, 9)) return false;
            T > 64 && (r.Warn("Bad payload length (" + T + ") in fence response"), T = 64);
            var v = this._sock.rQshiftStr(T);
            return this._supportsFence = true, _ & 1 << 31 ? (_ &= 3, R.messages.clientFence(this._sock, _, v), true) : this._fail("Unexpected fence response");
          }
        },
        {
          key: "_handleXvpMsg",
          value: function() {
            if (this._sock.rQwait("XVP version and message", 3, 1)) return false;
            this._sock.rQskipBytes(1);
            var _ = this._sock.rQshift8(), T = this._sock.rQshift8();
            switch (T) {
              case 0:
                r.Error("XVP operation failed");
                break;
              case 1:
                this._rfbXvpVer = _, r.Info("XVP extensions enabled (version " + this._rfbXvpVer + ")"), this._setCapability("power", true);
                break;
              default:
                this._fail("Illegal server XVP message (msg: " + T + ")");
                break;
            }
            return true;
          }
        },
        {
          key: "_normalMsg",
          value: function() {
            var _;
            this._FBU.rects > 0 ? _ = 0 : _ = this._sock.rQshift8();
            var T, v;
            switch (_) {
              case 0:
                return v = this._framebufferUpdate(), v && !this._enabledContinuousUpdates && R.messages.fbUpdateRequest(this._sock, true, 0, 0, this._fbWidth, this._fbHeight), v;
              case 1:
                return this._handleSetColourMapMsg();
              case 2:
                return r.Debug("Bell"), this.dispatchEvent(new CustomEvent("bell", {
                  detail: {}
                })), true;
              case 3:
                return this._handleServerCutText();
              case 150:
                return T = !this._supportsContinuousUpdates, this._supportsContinuousUpdates = true, this._enabledContinuousUpdates = false, T && (this._enabledContinuousUpdates = true, this._updateContinuousUpdates(), r.Info("Enabling continuous updates.")), true;
              case 248:
                return this._handleServerFenceMsg();
              case 250:
                return this._handleXvpMsg();
              default:
                return this._fail("Unexpected server message (type " + _ + ")"), r.Debug("sock.rQpeekBytes(30): " + this._sock.rQpeekBytes(30)), true;
            }
          }
        },
        {
          key: "_framebufferUpdate",
          value: function() {
            var _ = this;
            if (this._FBU.rects === 0) {
              if (this._sock.rQwait("FBU header", 3, 1)) return false;
              if (this._sock.rQskipBytes(1), this._FBU.rects = this._sock.rQshift16(), this._display.pending()) return this._flushing = true, this._display.flush().then(function() {
                _._flushing = false, _._sock.rQwait("message", 1) || _._handleMessage();
              }), false;
            }
            for (; this._FBU.rects > 0; ) {
              if (this._FBU.encoding === null) {
                if (this._sock.rQwait("rect header", 12)) return false;
                this._FBU.x = this._sock.rQshift16(), this._FBU.y = this._sock.rQshift16(), this._FBU.width = this._sock.rQshift16(), this._FBU.height = this._sock.rQshift16(), this._FBU.encoding = this._sock.rQshift32(), this._FBU.encoding >>= 0;
              }
              if (!this._handleRect()) return false;
              this._FBU.rects--, this._FBU.encoding = null;
            }
            return this._display.flip(), true;
          }
        },
        {
          key: "_handleRect",
          value: function() {
            switch (this._FBU.encoding) {
              case c.encodings.pseudoEncodingLastRect:
                return this._FBU.rects = 1, true;
              case c.encodings.pseudoEncodingVMwareCursor:
                return this._handleVMwareCursor();
              case c.encodings.pseudoEncodingCursor:
                return this._handleCursor();
              case c.encodings.pseudoEncodingQEMUExtendedKeyEvent:
                return this._qemuExtKeyEventSupported = true, true;
              case c.encodings.pseudoEncodingDesktopName:
                return this._handleDesktopName();
              case c.encodings.pseudoEncodingDesktopSize:
                return this._resize(this._FBU.width, this._FBU.height), true;
              case c.encodings.pseudoEncodingExtendedDesktopSize:
                return this._handleExtendedDesktopSize();
              case c.encodings.pseudoEncodingExtendedMouseButtons:
                return this._extendedPointerEventSupported = true, true;
              case c.encodings.pseudoEncodingQEMULedEvent:
                return this._handleLedEvent();
              default:
                return this._handleDataRect();
            }
          }
        },
        {
          key: "_handleVMwareCursor",
          value: function() {
            var _ = this._FBU.x, T = this._FBU.y, v = this._FBU.width, H = this._FBU.height;
            if (this._sock.rQwait("VMware cursor encoding", 1)) return false;
            var J = this._sock.rQshift8();
            this._sock.rQshift8();
            var te, ae = 4;
            if (J == 0) {
              var we = -256;
              if (te = new Array(v * H * ae), this._sock.rQwait("VMware cursor classic encoding", v * H * ae * 2, 2)) return false;
              for (var Ce = new Array(v * H), Xe = 0; Xe < v * H; Xe++) Ce[Xe] = this._sock.rQshift32();
              for (var Se = new Array(v * H), Te = 0; Te < v * H; Te++) Se[Te] = this._sock.rQshift32();
              for (var _e = 0; _e < v * H; _e++) if (Ce[_e] == 0) {
                var ke = Se[_e], We = ke >> 8 & 255, ut = ke >> 16 & 255, Le = ke >> 24 & 255;
                te[_e * ae] = We, te[_e * ae + 1] = ut, te[_e * ae + 2] = Le, te[_e * ae + 3] = 255;
              } else (Ce[_e] & we) == we ? Se[_e] == 0 ? (te[_e * ae] = 0, te[_e * ae + 1] = 0, te[_e * ae + 2] = 0, te[_e * ae + 3] = 0) : ((Se[_e] & we) == we, te[_e * ae] = 0, te[_e * ae + 1] = 0, te[_e * ae + 2] = 0, te[_e * ae + 3] = 255) : (te[_e * ae] = 0, te[_e * ae + 1] = 0, te[_e * ae + 2] = 0, te[_e * ae + 3] = 255);
            } else if (J == 1) {
              if (this._sock.rQwait("VMware cursor alpha encoding", v * H * 4, 2)) return false;
              te = new Array(v * H * ae);
              for (var ze = 0; ze < v * H; ze++) {
                var wt = this._sock.rQshift32();
                te[ze * 4] = wt >> 24 & 255, te[ze * 4 + 1] = wt >> 16 & 255, te[ze * 4 + 2] = wt >> 8 & 255, te[ze * 4 + 3] = wt & 255;
              }
            } else return r.Warn("The given cursor type is not supported: " + J + " given."), false;
            return this._updateCursor(te, _, T, v, H), true;
          }
        },
        {
          key: "_handleCursor",
          value: function() {
            var _ = this._FBU.x, T = this._FBU.y, v = this._FBU.width, H = this._FBU.height, J = v * H * 4, te = Math.ceil(v / 8) * H, ae = J + te;
            if (this._sock.rQwait("cursor encoding", ae)) return false;
            for (var we = this._sock.rQshiftBytes(J), Ce = this._sock.rQshiftBytes(te), Xe = new Uint8Array(v * H * 4), Se = 0, Te = 0; Te < H; Te++) for (var _e = 0; _e < v; _e++) {
              var ke = Te * Math.ceil(v / 8) + Math.floor(_e / 8), We = Ce[ke] << _e % 8 & 128 ? 255 : 0;
              Xe[Se] = we[Se + 2], Xe[Se + 1] = we[Se + 1], Xe[Se + 2] = we[Se], Xe[Se + 3] = We, Se += 4;
            }
            return this._updateCursor(Xe, _, T, v, H), true;
          }
        },
        {
          key: "_handleDesktopName",
          value: function() {
            if (this._sock.rQwait("DesktopName", 4)) return false;
            var _ = this._sock.rQshift32();
            if (this._sock.rQwait("DesktopName", _, 4)) return false;
            var T = this._sock.rQshiftStr(_);
            return T = (0, i.decodeUTF8)(T, true), this._setDesktopName(T), true;
          }
        },
        {
          key: "_handleLedEvent",
          value: function() {
            if (this._sock.rQwait("LED status", 1)) return false;
            var _ = this._sock.rQshift8(), T = !!(_ & 2), v = !!(_ & 4);
            return this._remoteCapsLock = v, this._remoteNumLock = T, true;
          }
        },
        {
          key: "_handleExtendedDesktopSize",
          value: function() {
            if (this._sock.rQwait("ExtendedDesktopSize", 4)) return false;
            var _ = this._sock.rQpeek8(), T = 4 + _ * 16;
            if (this._sock.rQwait("ExtendedDesktopSize", T)) return false;
            var v = !this._supportsSetDesktopSize;
            this._supportsSetDesktopSize = true, this._sock.rQskipBytes(1), this._sock.rQskipBytes(3);
            for (var H = 0; H < _; H += 1) H === 0 ? (this._screenID = this._sock.rQshift32(), this._sock.rQskipBytes(2), this._sock.rQskipBytes(2), this._sock.rQskipBytes(2), this._sock.rQskipBytes(2), this._screenFlags = this._sock.rQshift32()) : this._sock.rQskipBytes(16);
            if (this._FBU.x === 1 && (this._pendingRemoteResize = false), this._FBU.x === 1 && this._FBU.y !== 0) {
              var J = "";
              switch (this._FBU.y) {
                case 1:
                  J = "Resize is administratively prohibited";
                  break;
                case 2:
                  J = "Out of resources";
                  break;
                case 3:
                  J = "Invalid screen layout";
                  break;
                default:
                  J = "Unknown reason";
                  break;
              }
              r.Warn("Server did not accept the resize request: " + J);
            } else this._resize(this._FBU.width, this._FBU.height);
            return v && this._requestRemoteResize(), this._FBU.x === 1 && this._FBU.y === 0 && this._requestRemoteResize(), true;
          }
        },
        {
          key: "_handleDataRect",
          value: function() {
            var _ = this._decoders[this._FBU.encoding];
            if (!_) return this._fail("Unsupported encoding (encoding: " + this._FBU.encoding + ")"), false;
            try {
              return _.decodeRect(this._FBU.x, this._FBU.y, this._FBU.width, this._FBU.height, this._sock, this._display, this._fbDepth);
            } catch (T) {
              return this._fail("Error decoding rect: " + T), false;
            }
          }
        },
        {
          key: "_updateContinuousUpdates",
          value: function() {
            this._enabledContinuousUpdates && R.messages.enableContinuousUpdates(this._sock, true, 0, 0, this._fbWidth, this._fbHeight);
          }
        },
        {
          key: "_resize",
          value: function(_, T) {
            this._fbWidth = _, this._fbHeight = T, this._display.resize(this._fbWidth, this._fbHeight), this._updateClip(), this._updateScale(), this._updateContinuousUpdates(), this._saveExpectedClientSize();
          }
        },
        {
          key: "_xvpOp",
          value: function(_, T) {
            this._rfbXvpVer < _ || (r.Info("Sending XVP operation " + T + " (version " + _ + ")"), R.messages.xvpOp(this._sock, _, T));
          }
        },
        {
          key: "_updateCursor",
          value: function(_, T, v, H, J) {
            this._cursorImage = {
              rgbaPixels: _,
              hotx: T,
              hoty: v,
              w: H,
              h: J
            }, this._refreshCursor();
          }
        },
        {
          key: "_shouldShowDotCursor",
          value: function() {
            if (!this._showDotCursor) return false;
            for (var _ = 3; _ < this._cursorImage.rgbaPixels.length; _ += 4) if (this._cursorImage.rgbaPixels[_]) return false;
            return true;
          }
        },
        {
          key: "_refreshCursor",
          value: function() {
            if (!(this._rfbConnectionState !== "connecting" && this._rfbConnectionState !== "connected")) {
              var _ = this._shouldShowDotCursor() ? R.cursors.dot : this._cursorImage;
              this._cursor.change(_.rgbaPixels, _.hotx, _.hoty, _.w, _.h);
            }
          }
        }
      ], [
        {
          key: "_convertButtonMask",
          value: function(_) {
            for (var T = {
              0: 1,
              1: 4,
              2: 2,
              3: 128,
              4: 256
            }, v = 0, H = 0; H < 5; H++) _ & 1 << H && (v |= T[H]);
            return v;
          }
        },
        {
          key: "genDES",
          value: function(_, T) {
            var v = _.split("").map(function(J) {
              return J.charCodeAt(0);
            }), H = x.default.importKey("raw", v, {
              name: "DES-ECB"
            }, false, [
              "encrypt"
            ]);
            return x.default.encrypt({
              name: "DES-ECB"
            }, H, T);
          }
        }
      ]);
    }(y.default);
    mt.messages = {
      keyEvent: function(R, D, _) {
        R.sQpush8(4), R.sQpush8(_), R.sQpush16(0), R.sQpush32(D), R.flush();
      },
      QEMUExtendedKeyEvent: function(R, D, _, T) {
        function v(J) {
          var te = T >> 8, ae = T & 255;
          return te === 224 && ae < 127 ? ae | 128 : J;
        }
        R.sQpush8(255), R.sQpush8(0), R.sQpush16(_), R.sQpush32(D);
        var H = v(T);
        R.sQpush32(H), R.flush();
      },
      pointerEvent: function(R, D, _, T) {
        R.sQpush8(5), T = T & 127, R.sQpush8(T), R.sQpush16(D), R.sQpush16(_), R.flush();
      },
      extendedPointerEvent: function(R, D, _, T) {
        R.sQpush8(5);
        var v = T >> 7 & 255;
        if (v & 252) throw new Error("Invalid mouse button mask: " + T);
        var H = T & 127;
        H |= 128, R.sQpush8(H), R.sQpush16(D), R.sQpush16(_), R.sQpush8(v), R.flush();
      },
      _buildExtendedClipboardFlags: function(R, D) {
        for (var _ = new Uint8Array(4), T = 0, v = 0, H = 0; H < R.length; H++) v |= R[H];
        for (var J = 0; J < D.length; J++) T |= D[J];
        return _[0] = v >> 24, _[1] = 0, _[2] = 0, _[3] = T, _;
      },
      extendedClipboardProvide: function(R, D, _) {
        for (var T = new S.default(), v = [], H = 0; H < D.length; H++) {
          if (D[H] != bt) throw new Error("Unsupported extended clipboard format for Provide message.");
          _[H] = _[H].replace(/\r\n|\r|\n/gm, `\r
`);
          var J = (0, i.encodeUTF8)(_[H] + "\0");
          v.push(J.length >> 24 & 255, J.length >> 16 & 255, J.length >> 8 & 255, J.length & 255);
          for (var te = 0; te < J.length; te++) v.push(J.charCodeAt(te));
        }
        var ae = T.deflate(new Uint8Array(v)), we = new Uint8Array(4 + ae.length);
        we.set(mt.messages._buildExtendedClipboardFlags([
          Yr
        ], D)), we.set(ae, 4), mt.messages.clientCutText(R, we, true);
      },
      extendedClipboardNotify: function(R, D) {
        var _ = mt.messages._buildExtendedClipboardFlags([
          kr
        ], D);
        mt.messages.clientCutText(R, _, true);
      },
      extendedClipboardRequest: function(R, D) {
        var _ = mt.messages._buildExtendedClipboardFlags([
          qr
        ], D);
        mt.messages.clientCutText(R, _, true);
      },
      extendedClipboardCaps: function(R, D, _) {
        var T = Object.keys(_), v = new Uint8Array(4 + 4 * T.length);
        T.map(function(te) {
          return parseInt(te);
        }), T.sort(function(te, ae) {
          return te - ae;
        }), v.set(mt.messages._buildExtendedClipboardFlags(D, []));
        for (var H = 4, J = 0; J < T.length; J++) v[H] = _[T[J]] >> 24, v[H + 1] = _[T[J]] >> 16, v[H + 2] = _[T[J]] >> 8, v[H + 3] = _[T[J]] >> 0, H += 4, v[3] |= 1 << T[J];
        mt.messages.clientCutText(R, v, true);
      },
      clientCutText: function(R, D) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        R.sQpush8(6), R.sQpush8(0), R.sQpush8(0), R.sQpush8(0);
        var T;
        _ ? T = (0, n.toUnsigned32bit)(-D.length) : T = D.length, R.sQpush32(T), R.sQpushBytes(D), R.flush();
      },
      setDesktopSize: function(R, D, _, T, v) {
        R.sQpush8(251), R.sQpush8(0), R.sQpush16(D), R.sQpush16(_), R.sQpush8(1), R.sQpush8(0), R.sQpush32(T), R.sQpush16(0), R.sQpush16(0), R.sQpush16(D), R.sQpush16(_), R.sQpush32(v), R.flush();
      },
      clientFence: function(R, D, _) {
        R.sQpush8(248), R.sQpush8(0), R.sQpush8(0), R.sQpush8(0), R.sQpush32(D), R.sQpush8(_.length), R.sQpushString(_), R.flush();
      },
      enableContinuousUpdates: function(R, D, _, T, v, H) {
        R.sQpush8(150), R.sQpush8(D), R.sQpush16(_), R.sQpush16(T), R.sQpush16(v), R.sQpush16(H), R.flush();
      },
      pixelFormat: function(R, D, _) {
        var T;
        D > 16 ? T = 32 : D > 8 ? T = 16 : T = 8;
        var v = Math.floor(D / 3);
        R.sQpush8(0), R.sQpush8(0), R.sQpush8(0), R.sQpush8(0), R.sQpush8(T), R.sQpush8(D), R.sQpush8(0), R.sQpush8(_ ? 1 : 0), R.sQpush16((1 << v) - 1), R.sQpush16((1 << v) - 1), R.sQpush16((1 << v) - 1), R.sQpush8(v * 0), R.sQpush8(v * 1), R.sQpush8(v * 2), R.sQpush8(0), R.sQpush8(0), R.sQpush8(0), R.flush();
      },
      clientEncodings: function(R, D) {
        R.sQpush8(2), R.sQpush8(0), R.sQpush16(D.length);
        for (var _ = 0; _ < D.length; _++) R.sQpush32(D[_]);
        R.flush();
      },
      fbUpdateRequest: function(R, D, _, T, v, H) {
        typeof _ > "u" && (_ = 0), typeof T > "u" && (T = 0), R.sQpush8(3), R.sQpush8(D ? 1 : 0), R.sQpush16(_), R.sQpush16(T), R.sQpush16(v), R.sQpush16(H), R.flush();
      },
      xvpOp: function(R, D, _) {
        R.sQpush8(250), R.sQpush8(0), R.sQpush8(D), R.sQpush8(_), R.flush();
      }
    }, mt.cursors = {
      none: {
        rgbaPixels: new Uint8Array(),
        w: 0,
        h: 0,
        hotx: 0,
        hoty: 0
      },
      dot: {
        rgbaPixels: new Uint8Array([
          255,
          255,
          255,
          255,
          0,
          0,
          0,
          255,
          255,
          255,
          255,
          255,
          0,
          0,
          0,
          255,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          255,
          255,
          255,
          255,
          255,
          0,
          0,
          0,
          255,
          255,
          255,
          255,
          255
        ]),
        w: 3,
        h: 3,
        hotx: 1,
        hoty: 1
      }
    };
  })(Ya);
  const nf = Ps(Ya);
  function af(e) {
    let t, n, r, i, a, o, s, y, u;
    return {
      c() {
        t = Xt("div"), n = Xt("div"), r = Xt("button"), r.textContent = "Ctrl + Alt + Del", i = In(), a = Xt("button"), a.textContent = "Ctrl-V", o = In(), s = Xt("div"), Tt(r, "class", "button"), Tt(a, "class", "button"), Tt(n, "class", "flex flex-row items-center w-full"), Tt(s, "class", "vnc-screen-container");
      },
      m(l, S) {
        Ir(l, t, S), lt(t, n), lt(n, r), lt(n, i), lt(n, a), lt(t, o), lt(t, s), e[8](s), y || (u = [
          Di(r, "click", e[1]),
          Di(a, "click", e[2])
        ], y = true);
      },
      p: Nt,
      i: Nt,
      o: Nt,
      d(l) {
        l && gr(t), e[8](null), y = false, xr(u);
      }
    };
  }
  let of = 6;
  const Ua = 65505, sf = 65293;
  function Bn(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  function uf(e, t, n) {
    let r = null, i, { desktopCallback: a } = t, { connectCallback: o } = t, { url: s } = t, { onConnectCallback: y = async () => {
    } } = t, { onDisconnectCallback: u = async () => {
    } } = t;
    za(() => (r = new nf(i, s), r.compressionLevel = 5, r.qualityLevel = of, r.viewOnly = false, r.dragViewport = false, r.clipViewport = false, r.scaleViewport = true, r.addEventListener("desktopname", a), r.addEventListener("connect", (b) => {
      o(true), y();
    }), r.addEventListener("disconnect", (b) => {
      o(false), u();
    }), () => {
      r == null ? void 0 : r.disconnect();
    }));
    const l = () => {
      r == null ? void 0 : r.sendCtrlAltDel();
    }, S = function(b) {
      var d = b.shift();
      if (d != null && r != null) {
        var f = d.charCodeAt(0);
        if (f === 13) {
          Bn(50).then((c) => {
            S(b);
          });
          return;
        }
        if (f === 10) {
          r.sendKey(sf, null), Bn(50).then((c) => {
            S(b);
          });
          return;
        }
        var h = d.match(/[A-Z!@#$%^&*()_+{}:\"<>?~|]/);
        h && r.sendKey(Ua, null, true), r.sendKey(f, null), h && r.sendKey(Ua, null, false), Bn(50).then((c) => {
          S(b);
        });
      }
    }, X = () => {
      navigator.clipboard.readText().then((b) => {
        r != null && S(b.split(""));
      }).catch((b) => {
        console.error("Failed to read clipboard contents: ", b);
      });
    };
    function g(b) {
      Un[b ? "unshift" : "push"](() => {
        i = b, n(0, i);
      });
    }
    return e.$$set = (b) => {
      "desktopCallback" in b && n(3, a = b.desktopCallback), "connectCallback" in b && n(4, o = b.connectCallback), "url" in b && n(5, s = b.url), "onConnectCallback" in b && n(6, y = b.onConnectCallback), "onDisconnectCallback" in b && n(7, u = b.onDisconnectCallback);
    }, [
      i,
      l,
      X,
      a,
      o,
      s,
      y,
      u,
      g
    ];
  }
  class lf extends si {
    constructor(t) {
      super(), oi(this, t, uf, af, dn, {
        desktopCallback: 3,
        connectCallback: 4,
        url: 5,
        onConnectCallback: 6,
        onDisconnectCallback: 7
      });
    }
  }
  function ff(e) {
    let t, n = e[5] ? "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E" : "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E", r;
    return {
      c() {
        t = Xt("h3"), r = hr(n), Tt(t, "class", "font-semibold");
      },
      m(i, a) {
        Ir(i, t, a), lt(t, r);
      },
      p(i, a) {
        a & 32 && n !== (n = i[5] ? "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E" : "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E") && Qn(r, n);
      },
      d(i) {
        i && gr(t);
      }
    };
  }
  function cf(e) {
    let t, n = (e[0] ? e[4].length == 0 ? "\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430" : e[4] : "") + "", r, i, a = e[5] ? "\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E" : "\u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E", o;
    return {
      c() {
        t = Xt("h3"), r = hr(n), i = hr(" - "), o = hr(a), Tt(t, "class", "text-xl font-semibold");
      },
      m(s, y) {
        Ir(s, t, y), lt(t, r), lt(t, i), lt(t, o);
      },
      p(s, y) {
        y & 17 && n !== (n = (s[0] ? s[4].length == 0 ? "\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430" : s[4] : "") + "") && Qn(r, n), y & 32 && a !== (a = s[5] ? "\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E" : "\u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E") && Qn(o, a);
      },
      d(s) {
        s && gr(t);
      }
    };
  }
  function Na(e) {
    let t, n;
    return t = new lf({
      props: {
        desktopCallback: e[7],
        connectCallback: e[8],
        url: e[1],
        onConnectCallback: e[2],
        onDisconnectCallback: e[3]
      }
    }), {
      c() {
        qa(t.$$.fragment);
      },
      m(r, i) {
        ii(t, r, i), n = true;
      },
      p(r, i) {
        const a = {};
        i & 2 && (a.url = r[1]), i & 4 && (a.onConnectCallback = r[2]), i & 8 && (a.onDisconnectCallback = r[3]), t.$set(a);
      },
      i(r) {
        n || (jt(t.$$.fragment, r), n = true);
      },
      o(r) {
        pr(t.$$.fragment, r), n = false;
      },
      d(r) {
        ai(t, r);
      }
    };
  }
  function hf(e) {
    let t, n, r, i, a = e[6], o;
    function s(S, X) {
      return S[0] ? cf : ff;
    }
    let y = s(e), u = y(e), l = Na(e);
    return {
      c() {
        t = Xt("div"), n = Xt("div"), r = Xt("div"), u.c(), i = In(), l.c(), Tt(r, "class", "flex flex-row items-center justify-between text-slate w-full"), Tt(n, "class", "vnc-container"), Tt(t, "class", "vnc-container__wrapper");
      },
      m(S, X) {
        Ir(S, t, X), lt(t, n), lt(n, r), u.m(r, null), lt(n, i), l.m(n, null), o = true;
      },
      p(S, [X]) {
        y === (y = s(S)) && u ? u.p(S, X) : (u.d(1), u = y(S), u && (u.c(), u.m(r, null))), X & 64 && dn(a, a = S[6]) ? (Va(), pr(l, 1, 1, Nt), Za(), l = Na(S), l.c(), jt(l, 1), l.m(n, null)) : l.p(S, X);
      },
      i(S) {
        o || (jt(l), o = true);
      },
      o(S) {
        pr(l), o = false;
      },
      d(S) {
        S && gr(t), u.d(), l.d(S);
      }
    };
  }
  function df(e, t, n) {
    let r = "", i = false, a = {}, { getPowerCallback: o = async () => null } = t, { controlPower: s = true } = t, { showDesktopName: y = true } = t, { url: u } = t, { onConnectCallback: l = async () => {
    } } = t, { onDisconnectCallback: S = async () => {
    } } = t;
    const X = (d) => {
      n(4, r = d.detail.name), document.title = d.detail.name;
    }, g = (d) => {
      n(5, i = d);
    }, b = () => {
      n(6, a = {});
    };
    return za(() => (setInterval(() => {
      i || b();
    }, 2e3), () => {
    })), s && o(), e.$$set = (d) => {
      "getPowerCallback" in d && n(9, o = d.getPowerCallback), "controlPower" in d && n(10, s = d.controlPower), "showDesktopName" in d && n(0, y = d.showDesktopName), "url" in d && n(1, u = d.url), "onConnectCallback" in d && n(2, l = d.onConnectCallback), "onDisconnectCallback" in d && n(3, S = d.onDisconnectCallback);
    }, [
      y,
      u,
      l,
      S,
      r,
      i,
      a,
      X,
      g,
      o,
      s
    ];
  }
  class _f extends si {
    constructor(t) {
      super(), oi(this, t, df, hf, dn, {
        getPowerCallback: 9,
        controlPower: 10,
        showDesktopName: 0,
        url: 1,
        onConnectCallback: 2,
        onDisconnectCallback: 3
      });
    }
  }
  function ja(e) {
    let t, n;
    return t = new _f({
      props: {
        url: e[1]
      }
    }), {
      c() {
        qa(t.$$.fragment);
      },
      m(r, i) {
        ii(t, r, i), n = true;
      },
      p: Nt,
      i(r) {
        n || (jt(t.$$.fragment, r), n = true);
      },
      o(r) {
        pr(t.$$.fragment, r), n = false;
      },
      d(r) {
        ai(t, r);
      }
    };
  }
  function pf(e) {
    let t, n, r = e[0] != null && ja(e);
    return {
      c() {
        r && r.c(), t = ws();
      },
      m(i, a) {
        r && r.m(i, a), Ir(i, t, a), n = true;
      },
      p(i, [a]) {
        i[0] != null ? r ? (r.p(i, a), a & 1 && jt(r, 1)) : (r = ja(i), r.c(), jt(r, 1), r.m(t.parentNode, t)) : r && (Va(), pr(r, 1, 1, () => {
          r = null;
        }), Za());
      },
      i(i) {
        n || (jt(r), n = true);
      },
      o(i) {
        pr(r), n = false;
      },
      d(i) {
        i && gr(t), r && r.d(i);
      }
    };
  }
  function vf(e, t, n) {
    let r = null;
    const a = new URL(document.URL).pathname.match("/vnc/(.*)");
    a != null && a.length > 1 && (r = a[1]);
    const o = window.location.hostname, y = (window.location.protocol == "https:" ? "wss" : "ws") + "://" + o + "/api/vm/" + r + "/vnc";
    return [
      r,
      y
    ];
  }
  class yf extends si {
    constructor(t) {
      super(), oi(this, t, vf, pf, dn, {});
    }
  }
  new yf({
    target: document.getElementById("app")
  });
})();
