import { defineComponent as g, watch as ne, ref as F, reactive as O, onMounted as R, openBlock as u, createElementBlock as d, createElementVNode as o, normalizeClass as m, normalizeStyle as S, renderSlot as _, createTextVNode as j, toDisplayString as v, withDirectives as oe, vModelText as se, createStaticVNode as ae, unref as C, useSlots as D, createCommentVNode as T, Fragment as ie, withKeys as ce } from "vue";
var q = typeof global == "object" && global && global.Object === Object && global, le = typeof self == "object" && self && self.Object === Object && self, H = q || le || Function("return this")(), k = H.Symbol, X = Object.prototype, ue = X.hasOwnProperty, de = X.toString, w = k ? k.toStringTag : void 0;
function pe(e) {
  var r = ue.call(e, w), t = e[w];
  try {
    e[w] = void 0;
    var n = !0;
  } catch {
  }
  var s = de.call(e);
  return n && (r ? e[w] = t : delete e[w]), s;
}
var fe = Object.prototype, ge = fe.toString;
function ye(e) {
  return ge.call(e);
}
var he = "[object Null]", _e = "[object Undefined]", U = k ? k.toStringTag : void 0;
function V(e) {
  return e == null ? e === void 0 ? _e : he : U && U in Object(e) ? pe(e) : ye(e);
}
function M(e) {
  return e != null && typeof e == "object";
}
var W = Array.isArray;
function be(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function ve(e) {
  return e;
}
var me = "[object AsyncFunction]", je = "[object Function]", we = "[object GeneratorFunction]", Te = "[object Proxy]";
function $e(e) {
  if (!be(e))
    return !1;
  var r = V(e);
  return r == je || r == we || r == me || r == Te;
}
function Se(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var xe = 9007199254740991, Ae = /^(?:0|[1-9]\d*)$/;
function Ce(e, r) {
  var t = typeof e;
  return r = r ?? xe, !!r && (t == "number" || t != "symbol" && Ae.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var ke = 9007199254740991;
function Z(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ke;
}
function Q(e) {
  return e != null && Z(e.length) && !$e(e);
}
var Oe = Object.prototype;
function Pe(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Oe;
  return e === t;
}
function Ee(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Be = "[object Arguments]";
function N(e) {
  return M(e) && V(e) == Be;
}
var Y = Object.prototype, Ie = Y.hasOwnProperty, Fe = Y.propertyIsEnumerable, De = N(/* @__PURE__ */ function() {
  return arguments;
}()) ? N : function(e) {
  return M(e) && Ie.call(e, "callee") && !Fe.call(e, "callee");
};
function Ve() {
  return !1;
}
var ee = typeof exports == "object" && exports && !exports.nodeType && exports, J = ee && typeof module == "object" && module && !module.nodeType && module, Me = J && J.exports === ee, K = Me ? H.Buffer : void 0, Le = K ? K.isBuffer : void 0, Ue = Le || Ve, Ne = "[object Arguments]", Je = "[object Array]", Ke = "[object Boolean]", ze = "[object Date]", Ge = "[object Error]", Re = "[object Function]", qe = "[object Map]", He = "[object Number]", Xe = "[object Object]", We = "[object RegExp]", Ze = "[object Set]", Qe = "[object String]", Ye = "[object WeakMap]", et = "[object ArrayBuffer]", tt = "[object DataView]", rt = "[object Float32Array]", nt = "[object Float64Array]", ot = "[object Int8Array]", st = "[object Int16Array]", at = "[object Int32Array]", it = "[object Uint8Array]", ct = "[object Uint8ClampedArray]", lt = "[object Uint16Array]", ut = "[object Uint32Array]", i = {};
i[rt] = i[nt] = i[ot] = i[st] = i[at] = i[it] = i[ct] = i[lt] = i[ut] = !0;
i[Ne] = i[Je] = i[et] = i[Ke] = i[tt] = i[ze] = i[Ge] = i[Re] = i[qe] = i[He] = i[Xe] = i[We] = i[Ze] = i[Qe] = i[Ye] = !1;
function dt(e) {
  return M(e) && Z(e.length) && !!i[V(e)];
}
function pt(e) {
  return function(r) {
    return e(r);
  };
}
var te = typeof exports == "object" && exports && !exports.nodeType && exports, $ = te && typeof module == "object" && module && !module.nodeType && module, ft = $ && $.exports === te, I = ft && q.process, z = function() {
  try {
    var e = $ && $.require && $.require("util").types;
    return e || I && I.binding && I.binding("util");
  } catch {
  }
}(), G = z && z.isTypedArray, gt = G ? pt(G) : dt, yt = Object.prototype, ht = yt.hasOwnProperty;
function _t(e, r) {
  var t = W(e), n = !t && De(e), s = !t && !n && Ue(e), a = !t && !n && !s && gt(e), p = t || n || s || a, y = p ? Ee(e.length, String) : [], h = y.length;
  for (var l in e)
    (r || ht.call(e, l)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ce(l, h))) && y.push(l);
  return y;
}
function bt(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var vt = bt(Object.keys, Object);
const mt = vt;
var jt = Object.prototype, wt = jt.hasOwnProperty;
function Tt(e) {
  if (!Pe(e))
    return mt(e);
  var r = [];
  for (var t in Object(e))
    wt.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function $t(e) {
  return Q(e) ? _t(e) : Tt(e);
}
function St(e) {
  return function(r, t, n) {
    for (var s = -1, a = Object(r), p = n(r), y = p.length; y--; ) {
      var h = p[e ? y : ++s];
      if (t(a[h], h, a) === !1)
        break;
    }
    return r;
  };
}
var xt = St();
const At = xt;
function Ct(e, r) {
  return e && At(e, r, $t);
}
function kt(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!Q(t))
      return e(t, n);
    for (var s = t.length, a = r ? s : -1, p = Object(t); (r ? a-- : ++a < s) && n(p[a], a, p) !== !1; )
      ;
    return t;
  };
}
var Ot = kt(Ct);
const Pt = Ot;
function Et(e) {
  return typeof e == "function" ? e : ve;
}
function Bt(e, r) {
  var t = W(e) ? Se : Pt;
  return t(e, Et(r));
}
const It = { class: "dj-accordion" }, Ft = { class: "dj-accordion__header-label" }, Dt = /* @__PURE__ */ o("span", { class: "dj-accordion__header-icon" }, [
  /* @__PURE__ */ o("svg", {
    class: "button-icon",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ o("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd"
    })
  ])
], -1), Vt = { class: "dj-accordion__inner-content" }, Mt = g({
  name: "dj-accordion"
}), Lt = /* @__PURE__ */ g({
  ...Mt,
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
  setup(e, { emit: r }) {
    const t = e;
    ne(() => t.modelValue, (l) => {
      l ? (a.wrapperStyle = {
        transition: "background-color .25s"
      }, s.value.style.display = "block", a.contentStyle = {
        overflow: "hidden",
        height: `${s.value.scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (a.wrapperStyle = {
        transition: "background-color .25s"
      }, s.value.style.height = `${s.value.scrollHeight}px`, setTimeout(() => {
        a.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0)), n("change", l);
    });
    const n = r, s = F(), a = O({
      wrapperStyle: {},
      contentStyle: {}
    }), p = () => {
      n("update:modelValue", !t.modelValue);
    }, y = () => {
      t.modelValue ? (a.wrapperStyle = {}, s.value.style.display = "", a.contentStyle = {}) : (a.wrapperStyle = {}, a.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, h = () => {
      t.modelValue || (s.value.style.display = "none", s.value.style.height = "0", s.value.style.overflow = "hidden");
    };
    return R(() => {
      h();
    }), (l, x) => (u(), d("div", It, [
      o("div", {
        class: m(["dj-accordion__wrapper", [t.modelValue ? "is-active" : ""]]),
        style: S(a.wrapperStyle)
      }, [
        o("button", {
          class: "dj-accordion__header",
          onClick: p
        }, [
          o("span", Ft, [
            _(l.$slots, "title", {}, () => [
              j(v(t.title), 1)
            ])
          ]),
          Dt
        ]),
        o("div", {
          class: "dj-accordion__inner",
          style: S(a.contentStyle),
          ref_key: "DJAccordionInner",
          ref: s,
          onTransitionend: y
        }, [
          o("div", Vt, [
            _(l.$slots, "default", {}, () => [
              j(v(t.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), Ut = { class: "dj-audio" }, Nt = { class: "dj-audio__wrapper" }, Jt = { class: "dj-audio-button__wrapper" }, Kt = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, zt = /* @__PURE__ */ o("path", {
  fill: "currentColor",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
}, null, -1), Gt = [
  zt
], Rt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, qt = /* @__PURE__ */ o("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Ht = [
  qt
], Xt = { class: "dj-audio-progress__wrapper" }, Wt = { class: "dj-audio-progress__start-time" }, Zt = { class: "dj-audio-progress__inner" }, Qt = ["src"], Yt = ["src"], er = { class: "dj-audio-progress__end-time" }, tr = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon",
  viewBox: "0 0 24 24"
}, rr = /* @__PURE__ */ ae('<circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>', 3), nr = [
  rr
], or = { key: 1 }, sr = g({
  name: "dj-audio"
}), ar = /* @__PURE__ */ g({
  ...sr,
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  emits: [],
  setup(e, { emit: r }) {
    const t = F(), n = O({
      loading: !0,
      state: !1,
      isDragProgress: !1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00"
    }), s = (c) => {
      var f = Math.floor(c % 3600 / 60), b = Math.floor(c % 3600 % 60), L = f > 0 ? f < 10 ? "0" + f : f : "00", re = b > 0 ? b < 10 ? "0" + b : b : "00";
      return L + ":" + re;
    }, a = () => {
      t.value.play();
    }, p = () => {
      t.value.pause();
    }, y = () => {
      n.state = !n.state, n.state ? a() : p();
    }, h = () => {
      n.duration = s(t.value.duration), n.loading = !1;
    }, l = (c, f) => f / c * 100, x = () => {
      t.value.volume = 0.3;
    }, P = () => {
      var c = t.value.buffered;
      n.buffered = c.end(c.length - 1) / t.value.duration * 100;
    }, E = () => {
      n.currentTime = s(t.value.currentTime), n.isDragProgress || (n.progress = l(t.value.duration, t.value.currentTime));
    }, A = () => {
      n.state = !1;
    }, B = () => {
      t.value.currentTime = n.progress / 100 * t.value.duration, console.log(t.value.currentTime), n.isDragProgress = !1;
    };
    return (c, f) => (u(), d("div", Ut, [
      o("div", Nt, [
        o("div", Jt, [
          o("button", {
            class: "dj-audio-button__play",
            onClick: y
          }, [
            n.state ? (u(), d("svg", Rt, Ht)) : (u(), d("svg", Kt, Gt))
          ])
        ]),
        o("div", Xt, [
          o("span", Wt, v(n.currentTime), 1),
          o("div", Zt, [
            o("audio", {
              class: "dj-audio-process__audio",
              ref_key: "audioRef",
              ref: t,
              preload: "auto",
              onLoadedmetadata: h,
              onProgress: P,
              onPlaying: x,
              onTimeupdate: E,
              onEnded: A
            }, [
              o("source", {
                type: "audio/ogg",
                src: e.src
              }, null, 8, Qt),
              o("source", {
                type: "audio/mpeg",
                src: e.src
              }, null, 8, Yt)
            ], 544),
            o("div", {
              class: "dj-audio-buffered__bar",
              style: S({ "--buffer-value": `${n.buffered}%` })
            }, null, 4),
            oe(o("input", {
              type: "range",
              style: S({ "--progress-value": `${n.progress}%` }),
              "onUpdate:modelValue": f[0] || (f[0] = (b) => n.progress = b),
              onMousedown: f[1] || (f[1] = (b) => n.isDragProgress = !0),
              onMouseup: B
            }, null, 36), [
              [se, n.progress]
            ])
          ]),
          o("span", er, [
            n.loading ? (u(), d("svg", tr, nr)) : (u(), d("span", or, v(n.duration), 1))
          ])
        ])
      ])
    ]));
  }
}), ir = (e) => {
  e = e.replace("#", "");
  const r = [
    parseInt(e.substr(0, 2), 16),
    // 红色通道值
    parseInt(e.substr(2, 2), 16),
    // 绿色通道值
    parseInt(e.substr(4, 2), 16)
    // 蓝色通道值
  ];
  return (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) / 255 <= 0.5;
}, cr = { class: "dj-button-inner" }, lr = g({
  name: "dj-button"
}), ur = /* @__PURE__ */ g({
  ...lr,
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
    return (r, t) => (u(), d("button", {
      class: m(["dj-button", [e.type]]),
      style: S({ "--custom-background-color": e.color, "--custom-text-color": e.color ? C(ir)(e.color) ? "var(--white)" : "var(--black)" : "" })
    }, [
      o("span", cr, [
        _(r.$slots, "default", {}, () => [
          j(v(e.text), 1)
        ])
      ])
    ], 6));
  }
}), dr = { class: "dj-button-group" }, pr = g({
  name: "dj-button-group"
}), fr = /* @__PURE__ */ g({
  ...pr,
  setup(e) {
    return (r, t) => (u(), d("div", dr, [
      _(r.$slots, "default")
    ]));
  }
}), gr = {
  key: 0,
  class: "dj-card-header"
}, yr = { class: "dj-card-body" }, hr = {
  key: 1,
  class: "dj-card-footer"
}, _r = g({
  name: "dj-card"
}), br = /* @__PURE__ */ g({
  ..._r,
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
    const r = e, t = D(), n = O({
      showTitle: !0,
      showFooter: !0
    });
    return R(() => {
      n.showTitle = (r.title || t.header) !== void 0, n.showFooter = (r.footer || t.footer) !== void 0;
    }), (s, a) => (u(), d("div", {
      class: m(["dj-card", [e.align]])
    }, [
      n.showTitle ? (u(), d("div", gr, [
        _(s.$slots, "header", {}, () => [
          j(v(e.title), 1)
        ])
      ])) : T("", !0),
      o("div", yr, [
        _(s.$slots, "default")
      ]),
      n.showFooter ? (u(), d("div", hr, [
        _(s.$slots, "footer", {}, () => [
          j(v(e.footer), 1)
        ])
      ])) : T("", !0)
    ], 2));
  }
}), vr = { class: "dj-divider" }, mr = g({
  name: "dj-divider"
}), jr = /* @__PURE__ */ g({
  ...mr,
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
    const r = D();
    return (t, n) => (u(), d("div", vr, [
      o("div", {
        class: m(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        C(r).default ? _(t.$slots, "default", { key: 0 }) : (u(), d(ie, { key: 1 }, [
          j(v(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), wr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Tr = (e = 21) => {
  let r = "", t = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    r += wr[t[e] & 63];
  return r;
};
const $r = ["id"], Sr = {
  key: 0,
  class: "dj-input__prefix"
}, xr = { class: "dj-input__prefix__inner" }, Ar = ["id", "placeholder", "enterkeyhint", "disabled", "value"], Cr = /* @__PURE__ */ o("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ o("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), kr = [
  Cr
], Or = {
  key: 2,
  class: "dj-input__suffix"
}, Pr = { class: "dj-input__suffix__inner" }, Er = g({
  name: "dj-input"
}), Br = /* @__PURE__ */ g({
  ...Er,
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
  setup(e, { expose: r, emit: t }) {
    const n = t, s = D(), a = F(Tr()), p = O({
      focus: !1,
      active: !1
    }), y = () => {
      const c = document.getElementById(a.value);
      c == null || c.focus();
    }, h = (c) => {
      const f = document.getElementById(c);
      f == null || f.blur();
    }, l = (c) => {
      n("change", c.target.value);
    }, x = (c) => {
      n("input", c.target.value), n("update:modelValue", c.target.value);
    }, P = () => {
      p.focus = !0, n("focus");
    }, E = () => {
      p.focus = !1, n("blur");
    }, A = () => {
      n("clear", void 0), n("update:modelValue", void 0);
    }, B = () => {
      n("keyup.enter");
    };
    return r({ focus: y, blur: h, clear: A }), (c, f) => (u(), d("div", {
      class: m(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      o("div", {
        id: a.value,
        class: m(["dj-input__wrapper", [p.focus ? "is-focus" : ""]]),
        onClick: y
      }, [
        C(s)["prefix-icon"] ? (u(), d("span", Sr, [
          o("span", xr, [
            _(c.$slots, "prefix-icon")
          ])
        ])) : T("", !0),
        o("input", {
          id: e.id,
          class: "dj-input__inner",
          placeholder: e.placeholder,
          enterkeyhint: e.enterkeyhint,
          disabled: e.disabled,
          value: e.modelValue,
          onChange: l,
          onInput: x,
          onFocus: P,
          onFocusout: E,
          onKeyup: ce(B, ["enter", "native"])
        }, null, 40, Ar),
        e.clear && e.modelValue ? (u(), d("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: A
        }, kr)) : T("", !0),
        C(s)["suffix-icon"] ? (u(), d("span", Or, [
          o("span", Pr, [
            _(c.$slots, "suffix-icon")
          ])
        ])) : T("", !0)
      ], 10, $r)
    ], 2));
  }
}), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: Lt,
  DJAudio: ar,
  DJButton: ur,
  DJButtonGroup: fr,
  DJCard: br,
  DJDivider: jr,
  DJInput: Br
}, Symbol.toStringTag, { value: "Module" })), Dr = {
  install(e) {
    Bt(Ir, (r) => {
      e.component(r.name, r);
    });
  }
};
export {
  Dr as default
};
