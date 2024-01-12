import { defineComponent as A, openBlock as U, createElementBlock as M, normalizeClass as D, normalizeStyle as N, createElementVNode as C, renderSlot as G, createTextVNode as L, toDisplayString as K } from "vue";
var x = typeof global == "object" && global && global.Object === Object && global, V = typeof self == "object" && self && self.Object === Object && self, S = x || V || Function("return this")(), g = S.Symbol, $ = Object.prototype, k = $.hasOwnProperty, z = $.toString, f = g ? g.toStringTag : void 0;
function R(t) {
  var r = k.call(t, f), e = t[f];
  try {
    t[f] = void 0;
    var o = !0;
  } catch {
  }
  var i = z.call(t);
  return o && (r ? t[f] = e : delete t[f]), i;
}
var q = Object.prototype, J = q.toString;
function X(t) {
  return J.call(t);
}
var W = "[object Null]", H = "[object Undefined]", j = g ? g.toStringTag : void 0;
function y(t) {
  return t == null ? t === void 0 ? H : W : j && j in Object(t) ? R(t) : X(t);
}
function d(t) {
  return t != null && typeof t == "object";
}
var E = Array.isArray;
function Q(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Y(t) {
  return t;
}
var Z = "[object AsyncFunction]", tt = "[object Function]", rt = "[object GeneratorFunction]", et = "[object Proxy]";
function nt(t) {
  if (!Q(t))
    return !1;
  var r = y(t);
  return r == tt || r == rt || r == Z || r == et;
}
function ot(t, r) {
  for (var e = -1, o = t == null ? 0 : t.length; ++e < o && r(t[e], e, t) !== !1; )
    ;
  return t;
}
var at = 9007199254740991, it = /^(?:0|[1-9]\d*)$/;
function ct(t, r) {
  var e = typeof t;
  return r = r ?? at, !!r && (e == "number" || e != "symbol" && it.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
var st = 9007199254740991;
function w(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= st;
}
function P(t) {
  return t != null && w(t.length) && !nt(t);
}
var ut = Object.prototype;
function ft(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || ut;
  return t === e;
}
function bt(t, r) {
  for (var e = -1, o = Array(t); ++e < t; )
    o[e] = r(e);
  return o;
}
var pt = "[object Arguments]";
function T(t) {
  return d(t) && y(t) == pt;
}
var F = Object.prototype, gt = F.hasOwnProperty, lt = F.propertyIsEnumerable, yt = T(/* @__PURE__ */ function() {
  return arguments;
}()) ? T : function(t) {
  return d(t) && gt.call(t, "callee") && !lt.call(t, "callee");
};
function dt() {
  return !1;
}
var B = typeof exports == "object" && exports && !exports.nodeType && exports, m = B && typeof module == "object" && module && !module.nodeType && module, jt = m && m.exports === B, v = jt ? S.Buffer : void 0, Tt = v ? v.isBuffer : void 0, mt = Tt || dt, vt = "[object Arguments]", Ot = "[object Array]", ht = "[object Boolean]", At = "[object Date]", xt = "[object Error]", St = "[object Function]", $t = "[object Map]", Et = "[object Number]", wt = "[object Object]", Pt = "[object RegExp]", Ft = "[object Set]", Bt = "[object String]", It = "[object WeakMap]", _t = "[object ArrayBuffer]", Ut = "[object DataView]", Mt = "[object Float32Array]", Dt = "[object Float64Array]", Nt = "[object Int8Array]", Ct = "[object Int16Array]", Gt = "[object Int32Array]", Lt = "[object Uint8Array]", Kt = "[object Uint8ClampedArray]", Vt = "[object Uint16Array]", kt = "[object Uint32Array]", n = {};
n[Mt] = n[Dt] = n[Nt] = n[Ct] = n[Gt] = n[Lt] = n[Kt] = n[Vt] = n[kt] = !0;
n[vt] = n[Ot] = n[_t] = n[ht] = n[Ut] = n[At] = n[xt] = n[St] = n[$t] = n[Et] = n[wt] = n[Pt] = n[Ft] = n[Bt] = n[It] = !1;
function zt(t) {
  return d(t) && w(t.length) && !!n[y(t)];
}
function Rt(t) {
  return function(r) {
    return t(r);
  };
}
var I = typeof exports == "object" && exports && !exports.nodeType && exports, b = I && typeof module == "object" && module && !module.nodeType && module, qt = b && b.exports === I, l = qt && x.process, O = function() {
  try {
    var t = b && b.require && b.require("util").types;
    return t || l && l.binding && l.binding("util");
  } catch {
  }
}(), h = O && O.isTypedArray, Jt = h ? Rt(h) : zt, Xt = Object.prototype, Wt = Xt.hasOwnProperty;
function Ht(t, r) {
  var e = E(t), o = !e && yt(t), i = !e && !o && mt(t), a = !e && !o && !i && Jt(t), s = e || o || i || a, u = s ? bt(t.length, String) : [], p = u.length;
  for (var c in t)
    (r || Wt.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ct(c, p))) && u.push(c);
  return u;
}
function Qt(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Yt = Qt(Object.keys, Object);
const Zt = Yt;
var tr = Object.prototype, rr = tr.hasOwnProperty;
function er(t) {
  if (!ft(t))
    return Zt(t);
  var r = [];
  for (var e in Object(t))
    rr.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function nr(t) {
  return P(t) ? Ht(t) : er(t);
}
function or(t) {
  return function(r, e, o) {
    for (var i = -1, a = Object(r), s = o(r), u = s.length; u--; ) {
      var p = s[t ? u : ++i];
      if (e(a[p], p, a) === !1)
        break;
    }
    return r;
  };
}
var ar = or();
const ir = ar;
function cr(t, r) {
  return t && ir(t, r, nr);
}
function sr(t, r) {
  return function(e, o) {
    if (e == null)
      return e;
    if (!P(e))
      return t(e, o);
    for (var i = e.length, a = r ? i : -1, s = Object(e); (r ? a-- : ++a < i) && o(s[a], a, s) !== !1; )
      ;
    return e;
  };
}
var ur = sr(cr);
const fr = ur;
function br(t) {
  return typeof t == "function" ? t : Y;
}
function pr(t, r) {
  var e = E(t) ? ot : fr;
  return e(t, br(r));
}
const gr = { class: "dj-button-inner" }, lr = A({
  name: "dj-button"
}), _ = /* @__PURE__ */ A({
  ...lr,
  props: {
    type: {
      type: String,
      default: "",
      validate: (t) => ["primary", "success", "warning", "danger"].includes(t)
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (r, e) => (U(), M("button", {
      class: D(["dj-button", [t.type]]),
      style: N({ "--custom-background-color": t.color })
    }, [
      C("span", gr, [
        G(r.$slots, "default", {}, () => [
          L(K(t.text), 1)
        ])
      ])
    ], 6));
  }
}), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJButton: _
}, Symbol.toStringTag, { value: "Module" })), jr = {
  install(t) {
    pr(yr, (r) => {
      t.component(r.name, _);
    });
  }
};
export {
  _ as DJButton,
  jr as default
};
