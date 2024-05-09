import { defineComponent as p, watch as ee, ref as U, reactive as O, onMounted as J, openBlock as d, createElementBlock as f, createElementVNode as c, normalizeClass as h, normalizeStyle as A, renderSlot as y, createTextVNode as _, toDisplayString as j, unref as $, useSlots as k, createCommentVNode as m, Fragment as te, withKeys as ne } from "vue";
var K = typeof global == "object" && global && global.Object === Object && global, re = typeof self == "object" && self && self.Object === Object && self, N = K || re || Function("return this")(), S = N.Symbol, G = Object.prototype, oe = G.hasOwnProperty, ae = G.toString, v = S ? S.toStringTag : void 0;
function se(e) {
  var t = oe.call(e, v), n = e[v];
  try {
    e[v] = void 0;
    var r = !0;
  } catch {
  }
  var o = ae.call(e);
  return r && (t ? e[v] = n : delete e[v]), o;
}
var ie = Object.prototype, ce = ie.toString;
function le(e) {
  return ce.call(e);
}
var ue = "[object Null]", de = "[object Undefined]", B = S ? S.toStringTag : void 0;
function I(e) {
  return e == null ? e === void 0 ? de : ue : B && B in Object(e) ? se(e) : le(e);
}
function E(e) {
  return e != null && typeof e == "object";
}
var R = Array.isArray;
function fe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function pe(e) {
  return e;
}
var ge = "[object AsyncFunction]", ye = "[object Function]", be = "[object GeneratorFunction]", he = "[object Proxy]";
function _e(e) {
  if (!fe(e))
    return !1;
  var t = I(e);
  return t == ye || t == be || t == ge || t == he;
}
function je(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var ve = 9007199254740991, me = /^(?:0|[1-9]\d*)$/;
function Te(e, t) {
  var n = typeof e;
  return t = t ?? ve, !!t && (n == "number" || n != "symbol" && me.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var we = 9007199254740991;
function z(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= we;
}
function q(e) {
  return e != null && z(e.length) && !_e(e);
}
var $e = Object.prototype;
function Se(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || $e;
  return e === n;
}
function xe(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ae = "[object Arguments]";
function V(e) {
  return E(e) && I(e) == Ae;
}
var H = Object.prototype, Oe = H.hasOwnProperty, ke = H.propertyIsEnumerable, Ie = V(/* @__PURE__ */ function() {
  return arguments;
}()) ? V : function(e) {
  return E(e) && Oe.call(e, "callee") && !ke.call(e, "callee");
};
function Ee() {
  return !1;
}
var X = typeof exports == "object" && exports && !exports.nodeType && exports, P = X && typeof module == "object" && module && !module.nodeType && module, Fe = P && P.exports === X, D = Fe ? N.Buffer : void 0, Ce = D ? D.isBuffer : void 0, Be = Ce || Ee, Ve = "[object Arguments]", Pe = "[object Array]", De = "[object Boolean]", Le = "[object Date]", Me = "[object Error]", Ue = "[object Function]", Je = "[object Map]", Ke = "[object Number]", Ne = "[object Object]", Ge = "[object RegExp]", Re = "[object Set]", ze = "[object String]", qe = "[object WeakMap]", He = "[object ArrayBuffer]", Xe = "[object DataView]", We = "[object Float32Array]", Ze = "[object Float64Array]", Qe = "[object Int8Array]", Ye = "[object Int16Array]", et = "[object Int32Array]", tt = "[object Uint8Array]", nt = "[object Uint8ClampedArray]", rt = "[object Uint16Array]", ot = "[object Uint32Array]", s = {};
s[We] = s[Ze] = s[Qe] = s[Ye] = s[et] = s[tt] = s[nt] = s[rt] = s[ot] = !0;
s[Ve] = s[Pe] = s[He] = s[De] = s[Xe] = s[Le] = s[Me] = s[Ue] = s[Je] = s[Ke] = s[Ne] = s[Ge] = s[Re] = s[ze] = s[qe] = !1;
function at(e) {
  return E(e) && z(e.length) && !!s[I(e)];
}
function st(e) {
  return function(t) {
    return e(t);
  };
}
var W = typeof exports == "object" && exports && !exports.nodeType && exports, T = W && typeof module == "object" && module && !module.nodeType && module, it = T && T.exports === W, x = it && K.process, L = function() {
  try {
    var e = T && T.require && T.require("util").types;
    return e || x && x.binding && x.binding("util");
  } catch {
  }
}(), M = L && L.isTypedArray, ct = M ? st(M) : at, lt = Object.prototype, ut = lt.hasOwnProperty;
function dt(e, t) {
  var n = R(e), r = !n && Ie(e), o = !n && !r && Be(e), a = !n && !r && !o && ct(e), l = n || r || o || a, g = l ? xe(e.length, String) : [], b = g.length;
  for (var i in e)
    (t || ut.call(e, i)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (i == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (i == "offset" || i == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (i == "buffer" || i == "byteLength" || i == "byteOffset") || // Skip index properties.
    Te(i, b))) && g.push(i);
  return g;
}
function ft(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pt = ft(Object.keys, Object);
const gt = pt;
var yt = Object.prototype, bt = yt.hasOwnProperty;
function ht(e) {
  if (!Se(e))
    return gt(e);
  var t = [];
  for (var n in Object(e))
    bt.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function _t(e) {
  return q(e) ? dt(e) : ht(e);
}
function jt(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), l = r(t), g = l.length; g--; ) {
      var b = l[e ? g : ++o];
      if (n(a[b], b, a) === !1)
        break;
    }
    return t;
  };
}
var vt = jt();
const mt = vt;
function Tt(e, t) {
  return e && mt(e, t, _t);
}
function wt(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!q(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, l = Object(n); (t ? a-- : ++a < o) && r(l[a], a, l) !== !1; )
      ;
    return n;
  };
}
var $t = wt(Tt);
const St = $t;
function xt(e) {
  return typeof e == "function" ? e : pe;
}
function At(e, t) {
  var n = R(e) ? je : St;
  return n(e, xt(t));
}
const Ot = { class: "dj-accordion" }, kt = { class: "dj-accordion__header-label" }, It = /* @__PURE__ */ c("span", { class: "dj-accordion__header-icon" }, [
  /* @__PURE__ */ c("svg", {
    class: "button-icon",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ c("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd"
    })
  ])
], -1), Et = { class: "dj-accordion__inner-content" }, Ft = p({
  name: "dj-accordion"
}), Ct = /* @__PURE__ */ p({
  ...Ft,
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e;
    ee(() => n.modelValue, (i) => {
      i ? (a.wrapperStyle = {
        transition: "background-color .25s"
      }, o.value.style.display = "block", a.contentStyle = {
        overflow: "hidden",
        height: `${o.value.scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (a.wrapperStyle = {
        transition: "background-color .25s"
      }, o.value.style.height = `${o.value.scrollHeight}px`, setTimeout(() => {
        a.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0)), r("change", i);
    });
    const r = t, o = U(), a = O({
      wrapperStyle: {},
      contentStyle: {}
    }), l = () => {
      r("update:modelValue", !n.modelValue);
    }, g = () => {
      n.modelValue ? (a.wrapperStyle = {}, o.value.style.display = "", a.contentStyle = {}) : (a.wrapperStyle = {}, a.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, b = () => {
      n.modelValue || (o.value.style.display = "none", o.value.style.height = "0", o.value.style.overflow = "hidden");
    };
    return J(() => {
      b();
    }), (i, F) => (d(), f("div", Ot, [
      c("div", {
        class: h(["dj-accordion__wrapper", [n.modelValue ? "is-active" : ""]]),
        style: A(a.wrapperStyle)
      }, [
        c("button", {
          class: "dj-accordion__header",
          onClick: l
        }, [
          c("span", kt, [
            y(i.$slots, "title", {}, () => [
              _(j(n.title), 1)
            ])
          ]),
          It
        ]),
        c("div", {
          class: "dj-accordion__inner",
          style: A(a.contentStyle),
          ref_key: "DJAccordionInner",
          ref: o,
          onTransitionend: g
        }, [
          c("div", Et, [
            y(i.$slots, "default", {}, () => [
              _(j(n.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), Bt = (e) => {
  e = e.replace("#", "");
  const t = [
    parseInt(e.substr(0, 2), 16),
    // 红色通道值
    parseInt(e.substr(2, 2), 16),
    // 绿色通道值
    parseInt(e.substr(4, 2), 16)
    // 蓝色通道值
  ];
  return (0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) / 255 <= 0.5;
}, Vt = { class: "dj-button-inner" }, Pt = p({
  name: "dj-button"
}), Dt = /* @__PURE__ */ p({
  ...Pt,
  props: {
    type: {
      type: String,
      default: "",
      validate: (e) => ["primary", "success", "warning", "danger"].includes(e)
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
  setup(e) {
    return (t, n) => (d(), f("button", {
      class: h(["dj-button", [e.type]]),
      style: A({ "--custom-background-color": e.color, "--custom-text-color": e.color ? $(Bt)(e.color) ? "var(--white)" : "var(--black)" : "" })
    }, [
      c("span", Vt, [
        y(t.$slots, "default", {}, () => [
          _(j(e.text), 1)
        ])
      ])
    ], 6));
  }
}), Lt = { class: "dj-button-group" }, Mt = p({
  name: "dj-button-group"
}), Ut = /* @__PURE__ */ p({
  ...Mt,
  setup(e) {
    return (t, n) => (d(), f("div", Lt, [
      y(t.$slots, "default")
    ]));
  }
}), Jt = {
  key: 0,
  class: "dj-card-header"
}, Kt = { class: "dj-card-body" }, Nt = {
  key: 1,
  class: "dj-card-footer"
}, Gt = p({
  name: "dj-card"
}), Rt = /* @__PURE__ */ p({
  ...Gt,
  props: {
    align: {
      type: String,
      default: "left"
    },
    title: {
      type: String,
      default: void 0
    },
    footer: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const t = e, n = k(), r = O({
      showTitle: !0,
      showFooter: !0
    });
    return J(() => {
      r.showTitle = (t.title || n.header) !== void 0, r.showFooter = (t.footer || n.footer) !== void 0;
    }), (o, a) => (d(), f("div", {
      class: h(["dj-card", [e.align]])
    }, [
      r.showTitle ? (d(), f("div", Jt, [
        y(o.$slots, "header", {}, () => [
          _(j(e.title), 1)
        ])
      ])) : m("", !0),
      c("div", Kt, [
        y(o.$slots, "default")
      ]),
      r.showFooter ? (d(), f("div", Nt, [
        y(o.$slots, "footer", {}, () => [
          _(j(e.footer), 1)
        ])
      ])) : m("", !0)
    ], 2));
  }
}), zt = { class: "dj-divider" }, qt = p({
  name: "dj-divider"
}), Ht = /* @__PURE__ */ p({
  ...qt,
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "dashed", "dotted"].includes(e)
    }
  },
  setup(e) {
    const t = k();
    return (n, r) => (d(), f("div", zt, [
      c("div", {
        class: h(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        $(t).default ? y(n.$slots, "default", { key: 0 }) : (d(), f(te, { key: 1 }, [
          _(j(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), Xt = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Wt = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += Xt[n[e] & 63];
  return t;
};
const Zt = ["id"], Qt = {
  key: 0,
  class: "dj-input__prefix"
}, Yt = { class: "dj-input__prefix__inner" }, en = ["id", "placeholder", "enterkeyhint", "disabled", "value"], tn = /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ c("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), nn = [
  tn
], rn = {
  key: 2,
  class: "dj-input__suffix"
}, on = { class: "dj-input__suffix__inner" }, an = p({
  name: "dj-input"
}), sn = /* @__PURE__ */ p({
  ...an,
  props: {
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clear: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    enterkeyhint: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "keyup.enter", "change", "input", "focus", "blur", "clear"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = k(), a = U(Wt()), l = O({
      focus: !1,
      active: !1
    }), g = () => {
      const u = document.getElementById(a.value);
      u == null || u.focus();
    }, b = (u) => {
      const w = document.getElementById(u);
      w == null || w.blur();
    }, i = (u) => {
      r("change", u.target.value);
    }, F = (u) => {
      r("input", u.target.value), r("update:modelValue", u.target.value);
    }, Z = () => {
      l.focus = !0, r("focus");
    }, Q = () => {
      l.focus = !1, r("blur");
    }, C = () => {
      r("clear", void 0), r("update:modelValue", void 0);
    }, Y = () => {
      r("keyup.enter");
    };
    return t({ focus: g, blur: b, clear: C }), (u, w) => (d(), f("div", {
      class: h(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      c("div", {
        id: a.value,
        class: h(["dj-input__wrapper", [l.focus ? "is-focus" : ""]]),
        onClick: g
      }, [
        $(o)["prefix-icon"] ? (d(), f("span", Qt, [
          c("span", Yt, [
            y(u.$slots, "prefix-icon")
          ])
        ])) : m("", !0),
        c("input", {
          id: e.id,
          class: "dj-input__inner",
          placeholder: e.placeholder,
          enterkeyhint: e.enterkeyhint,
          disabled: e.disabled,
          value: e.modelValue,
          onChange: i,
          onInput: F,
          onFocus: Z,
          onFocusout: Q,
          onKeyup: ne(Y, ["enter", "native"])
        }, null, 40, en),
        e.clear && e.modelValue ? (d(), f("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: C
        }, nn)) : m("", !0),
        $(o)["suffix-icon"] ? (d(), f("span", rn, [
          c("span", on, [
            y(u.$slots, "suffix-icon")
          ])
        ])) : m("", !0)
      ], 10, Zt)
    ], 2));
  }
}), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: Ct,
  DJButton: Dt,
  DJButtonGroup: Ut,
  DJCard: Rt,
  DJDivider: Ht,
  DJInput: sn
}, Symbol.toStringTag, { value: "Module" })), un = {
  install(e) {
    At(cn, (t) => {
      console.log(t), e.component(t.name, t);
    });
  }
};
export {
  un as default
};
