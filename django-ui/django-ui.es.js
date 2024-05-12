import { defineComponent as h, watch as fe, ref as I, reactive as F, onMounted as H, openBlock as f, createElementBlock as p, createElementVNode as l, normalizeClass as j, normalizeStyle as O, renderSlot as m, createTextVNode as x, toDisplayString as T, Fragment as X, withDirectives as pe, vModelText as ge, createStaticVNode as he, unref as V, useSlots as N, createCommentVNode as C, withKeys as ye } from "vue";
var Q = typeof global == "object" && global && global.Object === Object && global, _e = typeof self == "object" && self && self.Object === Object && self, Y = Q || _e || Function("return this")(), B = Y.Symbol, Z = Object.prototype, be = Z.hasOwnProperty, ve = Z.toString, k = B ? B.toStringTag : void 0;
function me(e) {
  var t = be.call(e, k), r = e[k];
  try {
    e[k] = void 0;
    var s = !0;
  } catch {
  }
  var o = ve.call(e);
  return s && (t ? e[k] = r : delete e[k]), o;
}
var je = Object.prototype, we = je.toString;
function Te(e) {
  return we.call(e);
}
var $e = "[object Null]", xe = "[object Undefined]", J = B ? B.toStringTag : void 0;
function L(e) {
  return e == null ? e === void 0 ? xe : $e : J && J in Object(e) ? me(e) : Te(e);
}
function z(e) {
  return e != null && typeof e == "object";
}
var ee = Array.isArray;
function Se(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ke(e) {
  return e;
}
var Ce = "[object AsyncFunction]", Ae = "[object Function]", Oe = "[object GeneratorFunction]", Fe = "[object Proxy]";
function Pe(e) {
  if (!Se(e))
    return !1;
  var t = L(e);
  return t == Ae || t == Oe || t == Ce || t == Fe;
}
function De(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length; ++r < s && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ve = 9007199254740991, Be = /^(?:0|[1-9]\d*)$/;
function Ie(e, t) {
  var r = typeof e;
  return t = t ?? Ve, !!t && (r == "number" || r != "symbol" && Be.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Me = 9007199254740991;
function te(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Me;
}
function re(e) {
  return e != null && te(e.length) && !Pe(e);
}
var Ee = Object.prototype;
function Ne(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ee;
  return e === r;
}
function Le(e, t) {
  for (var r = -1, s = Array(e); ++r < e; )
    s[r] = t(r);
  return s;
}
var ze = "[object Arguments]";
function R(e) {
  return z(e) && L(e) == ze;
}
var oe = Object.prototype, Ue = oe.hasOwnProperty, Je = oe.propertyIsEnumerable, Re = R(/* @__PURE__ */ function() {
  return arguments;
}()) ? R : function(e) {
  return z(e) && Ue.call(e, "callee") && !Je.call(e, "callee");
};
function Ke() {
  return !1;
}
var ne = typeof exports == "object" && exports && !exports.nodeType && exports, K = ne && typeof module == "object" && module && !module.nodeType && module, Ge = K && K.exports === ne, G = Ge ? Y.Buffer : void 0, We = G ? G.isBuffer : void 0, qe = We || Ke, He = "[object Arguments]", Xe = "[object Array]", Qe = "[object Boolean]", Ye = "[object Date]", Ze = "[object Error]", et = "[object Function]", tt = "[object Map]", rt = "[object Number]", ot = "[object Object]", nt = "[object RegExp]", at = "[object Set]", st = "[object String]", it = "[object WeakMap]", lt = "[object ArrayBuffer]", ut = "[object DataView]", ct = "[object Float32Array]", dt = "[object Float64Array]", ft = "[object Int8Array]", pt = "[object Int16Array]", gt = "[object Int32Array]", ht = "[object Uint8Array]", yt = "[object Uint8ClampedArray]", _t = "[object Uint16Array]", bt = "[object Uint32Array]", u = {};
u[ct] = u[dt] = u[ft] = u[pt] = u[gt] = u[ht] = u[yt] = u[_t] = u[bt] = !0;
u[He] = u[Xe] = u[lt] = u[Qe] = u[ut] = u[Ye] = u[Ze] = u[et] = u[tt] = u[rt] = u[ot] = u[nt] = u[at] = u[st] = u[it] = !1;
function vt(e) {
  return z(e) && te(e.length) && !!u[L(e)];
}
function mt(e) {
  return function(t) {
    return e(t);
  };
}
var ae = typeof exports == "object" && exports && !exports.nodeType && exports, A = ae && typeof module == "object" && module && !module.nodeType && module, jt = A && A.exports === ae, E = jt && Q.process, W = function() {
  try {
    var e = A && A.require && A.require("util").types;
    return e || E && E.binding && E.binding("util");
  } catch {
  }
}(), q = W && W.isTypedArray, wt = q ? mt(q) : vt, Tt = Object.prototype, $t = Tt.hasOwnProperty;
function xt(e, t) {
  var r = ee(e), s = !r && Re(e), o = !r && !s && qe(e), a = !r && !s && !o && wt(e), n = r || s || o || a, g = n ? Le(e.length, String) : [], v = g.length;
  for (var c in e)
    (t || $t.call(e, c)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ie(c, v))) && g.push(c);
  return g;
}
function St(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var kt = St(Object.keys, Object);
const Ct = kt;
var At = Object.prototype, Ot = At.hasOwnProperty;
function Ft(e) {
  if (!Ne(e))
    return Ct(e);
  var t = [];
  for (var r in Object(e))
    Ot.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Pt(e) {
  return re(e) ? xt(e) : Ft(e);
}
function Dt(e) {
  return function(t, r, s) {
    for (var o = -1, a = Object(t), n = s(t), g = n.length; g--; ) {
      var v = n[e ? g : ++o];
      if (r(a[v], v, a) === !1)
        break;
    }
    return t;
  };
}
var Vt = Dt();
const Bt = Vt;
function It(e, t) {
  return e && Bt(e, t, Pt);
}
function Mt(e, t) {
  return function(r, s) {
    if (r == null)
      return r;
    if (!re(r))
      return e(r, s);
    for (var o = r.length, a = t ? o : -1, n = Object(r); (t ? a-- : ++a < o) && s(n[a], a, n) !== !1; )
      ;
    return r;
  };
}
var Et = Mt(It);
const Nt = Et;
function Lt(e) {
  return typeof e == "function" ? e : ke;
}
function zt(e, t) {
  var r = ee(e) ? De : Nt;
  return r(e, Lt(t));
}
const Ut = { class: "dj-accordion" }, Jt = { class: "dj-accordion__header-label" }, Rt = /* @__PURE__ */ l("span", { class: "dj-accordion__header-icon" }, [
  /* @__PURE__ */ l("svg", {
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ l("path", {
      fill: "currentColor",
      d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
    })
  ])
], -1), Kt = { class: "dj-accordion__inner-content" }, Gt = h({
  name: "dj-accordion"
}), Wt = /* @__PURE__ */ h({
  ...Gt,
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
    const r = e, s = t;
    fe(() => r.modelValue, (c) => {
      c ? (o.value.style.display = "block", a.contentStyle = {
        overflow: "hidden",
        height: `${o.value.scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (o.value.style.height = `${o.value.scrollHeight}px`, setTimeout(() => {
        a.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0));
    });
    const o = I(), a = F({
      wrapperStyle: {},
      contentStyle: {}
    }), n = () => {
      s("change", !r.modelValue), s("update:modelValue", !r.modelValue);
    }, g = () => {
      r.modelValue ? (a.wrapperStyle = {}, o.value.style.display = "", a.contentStyle = {}) : (a.wrapperStyle = {}, a.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, v = () => {
      r.modelValue || (o.value.style.display = "none", o.value.style.height = "0", o.value.style.overflow = "hidden");
    };
    return H(() => {
      v();
    }), (c, $) => (f(), p("div", Ut, [
      l("div", {
        class: j(["dj-accordion__wrapper", [r.modelValue ? "is-active" : ""]]),
        style: O(a.wrapperStyle)
      }, [
        l("button", {
          class: "dj-accordion__header",
          onClick: n
        }, [
          l("span", Jt, [
            m(c.$slots, "title", {}, () => [
              x(T(r.title), 1)
            ])
          ]),
          Rt
        ]),
        l("div", {
          class: "dj-accordion__inner",
          style: O(a.contentStyle),
          ref_key: "DJAccordionInner",
          ref: o,
          onTransitionend: g
        }, [
          l("div", Kt, [
            m(c.$slots, "default", {}, () => [
              x(T(r.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), qt = { class: "dj-audio" }, Ht = { class: "dj-audio-button__wrapper" }, Xt = ["disabled"], Qt = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Yt = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
}, null, -1), Zt = [
  Yt
], er = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, tr = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), rr = [
  tr
], or = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, nr = /* @__PURE__ */ he('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), ar = [
  nr
], sr = { class: "dj-audio-progress__wrapper" }, ir = { class: "dj-audio-progress__start-time" }, lr = { class: "dj-audio-progress__inner" }, ur = ["src"], cr = ["src"], dr = { class: "dj-audio-progress__end-time" }, fr = h({
  name: "dj-audio"
}), pr = /* @__PURE__ */ h({
  ...fr,
  props: {
    src: {
      type: String,
      default: ""
    },
    autoplay: {
      type: Boolean,
      default: !1
    },
    loop: {
      type: Boolean,
      default: !1
    },
    muted: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["loadedmetadata", "play", "pause", "canplay", "playing", "progress", "timeupdate", "seeked", "waiting", "ended"],
  setup(e, { expose: t, emit: r }) {
    const s = e, o = I(), a = r, n = F({
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      volume: 1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00"
    }), g = (i) => {
      var d = Math.floor(i % 3600 / 60), _ = Math.floor(i % 3600 % 60), w = d > 0 ? d < 10 ? "0" + d : d : "00", de = _ > 0 ? _ < 10 ? "0" + _ : _ : "00";
      return w + ":" + de;
    }, v = (i, d) => d / i * 100, c = () => {
      o.value.play();
    }, $ = () => {
      o.value.pause();
    }, P = () => {
      n.paused = !n.paused, n.paused ? $() : c();
    }, b = (i) => {
      var d;
      n.duration = g((d = o.value) == null ? void 0 : d.duration), n.waiting = !1, a("loadedmetadata", i);
    }, S = (i) => {
      n.waiting = !1, a("canplay", i);
    }, M = (i) => {
      n.paused = !1, o.value.volume = n.volume = 0.5, a("play", i);
    }, D = (i) => {
      a("pause", i), n.paused = !0;
    }, y = (i) => {
      a("playing", i);
    }, U = (i) => {
      var _, w;
      var d = (_ = o.value) == null ? void 0 : _.buffered;
      n.buffered = parseFloat((d.end(d.length - 1) / ((w = o.value) == null ? void 0 : w.duration) * 100).toFixed(2)), a("progress", i);
    }, se = (i) => {
      var d, _, w;
      n.currentTime = g((d = o.value) == null ? void 0 : d.currentTime), n.isDragProgress || (n.progress = parseFloat(v((_ = o.value) == null ? void 0 : _.duration, (w = o.value) == null ? void 0 : w.currentTime).toFixed(2))), a("timeupdate", n.progress, i);
    }, ie = (i) => {
      a("seeked", i);
    }, le = (i) => {
      n.waiting = !0, a("waiting", i);
    }, ue = (i) => {
      n.paused = !0, a("ended", i);
    }, ce = () => {
      var i;
      o.value.currentTime = n.progress / 100 * ((i = o.value) == null ? void 0 : i.duration), n.isDragProgress = !1;
    };
    return t({
      src: s.src,
      autoplay: s.autoplay,
      loop: s.loop,
      muted: s.muted,
      paused: () => n.paused,
      volume: () => n.volume,
      progress: () => n.progress,
      buffered: () => n.buffered,
      currentTime: () => {
        var i;
        return (i = o.value) == null ? void 0 : i.currentTime;
      },
      duration: () => {
        var i;
        return (i = o.value) == null ? void 0 : i.duration;
      },
      play: c,
      pause: $
    }), (i, d) => (f(), p("div", qt, [
      l("div", {
        class: j(["dj-audio__wrapper", [n.paused ? "" : "is-play"]])
      }, [
        l("div", Ht, [
          l("button", {
            class: "dj-audio-button__play",
            disabled: n.waiting,
            onClick: P
          }, [
            n.waiting ? (f(), p("svg", or, ar)) : (f(), p(X, { key: 0 }, [
              n.paused ? (f(), p("svg", Qt, Zt)) : (f(), p("svg", er, rr))
            ], 64))
          ], 8, Xt)
        ]),
        l("div", sr, [
          l("span", ir, T(n.currentTime), 1),
          l("div", lr, [
            l("audio", {
              class: "dj-audio-process__audio",
              ref_key: "audioRef",
              ref: o,
              preload: "auto",
              onLoadedmetadata: b,
              onProgress: U,
              onCanplay: S,
              onPlay: M,
              onPlaying: y,
              onPause: D,
              onTimeupdate: se,
              onSeeked: ie,
              onWaiting: le,
              onEnded: ue
            }, [
              l("source", {
                type: "audio/ogg",
                src: e.src
              }, null, 8, ur),
              l("source", {
                type: "audio/mpeg",
                src: e.src
              }, null, 8, cr)
            ], 544),
            l("div", {
              class: "dj-audio-buffered__bar",
              style: O({ "--buffer-value": `${n.buffered}%` })
            }, null, 4),
            pe(l("input", {
              type: "range",
              style: O({ "--progress-value": `${n.progress}%` }),
              "onUpdate:modelValue": d[0] || (d[0] = (_) => n.progress = _),
              onMousedown: d[1] || (d[1] = (_) => n.isDragProgress = !0),
              onMouseup: ce
            }, null, 36), [
              [ge, n.progress]
            ])
          ]),
          l("span", dr, T(n.duration), 1)
        ])
      ], 2)
    ]));
  }
}), gr = (e) => {
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
}, hr = { class: "dj-button-inner" }, yr = h({
  name: "dj-button"
}), _r = /* @__PURE__ */ h({
  ...yr,
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
    return (t, r) => (f(), p("button", {
      class: j(["dj-button", [e.type]]),
      style: O({ "--custom-background-color": e.color, "--custom-text-color": e.color ? V(gr)(e.color) ? "var(--white)" : "var(--black)" : "" })
    }, [
      l("span", hr, [
        m(t.$slots, "default", {}, () => [
          x(T(e.text), 1)
        ])
      ])
    ], 6));
  }
}), br = { class: "dj-button-group" }, vr = h({
  name: "dj-button-group"
}), mr = /* @__PURE__ */ h({
  ...vr,
  setup(e) {
    return (t, r) => (f(), p("div", br, [
      m(t.$slots, "default")
    ]));
  }
}), jr = {
  key: 0,
  class: "dj-card-header"
}, wr = { class: "dj-card-body" }, Tr = {
  key: 1,
  class: "dj-card-footer"
}, $r = h({
  name: "dj-card"
}), xr = /* @__PURE__ */ h({
  ...$r,
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
    const t = e, r = N(), s = F({
      showTitle: !0,
      showFooter: !0
    });
    return H(() => {
      s.showTitle = (t.title || r.header) !== void 0, s.showFooter = (t.footer || r.footer) !== void 0;
    }), (o, a) => (f(), p("div", {
      class: j(["dj-card", [e.align]])
    }, [
      s.showTitle ? (f(), p("div", jr, [
        m(o.$slots, "header", {}, () => [
          x(T(e.title), 1)
        ])
      ])) : C("", !0),
      l("div", wr, [
        m(o.$slots, "default")
      ]),
      s.showFooter ? (f(), p("div", Tr, [
        m(o.$slots, "footer", {}, () => [
          x(T(e.footer), 1)
        ])
      ])) : C("", !0)
    ], 2));
  }
}), Sr = { class: "dj-divider" }, kr = h({
  name: "dj-divider"
}), Cr = /* @__PURE__ */ h({
  ...kr,
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
    const t = N();
    return (r, s) => (f(), p("div", Sr, [
      l("div", {
        class: j(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        V(t).default ? m(r.$slots, "default", { key: 0 }) : (f(), p(X, { key: 1 }, [
          x(T(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), Ar = {
  key: 0,
  class: "dj-input__prefix"
}, Or = { class: "dj-input__prefix__inner" }, Fr = ["id", "placeholder", "enterkeyhint", "disabled", "value"], Pr = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ l("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), Dr = [
  Pr
], Vr = {
  key: 2,
  class: "dj-input__suffix"
}, Br = { class: "dj-input__suffix__inner" }, Ir = h({
  name: "dj-input"
}), Mr = /* @__PURE__ */ h({
  ...Ir,
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
  emits: ["update:modelValue", "input", "change", "keyup.enter", "focus", "blur", "clear"],
  setup(e, { expose: t, emit: r }) {
    const s = e, o = r, a = N(), n = I(), g = F({
      focus: !1,
      active: !1
    }), v = (y) => {
      o("input", y.target.value), o("update:modelValue", y.target.value);
    }, c = (y) => {
      o("change", y.target.value);
    }, $ = (y) => {
      g.focus = !0, o("focus", y);
    }, P = (y) => {
      g.focus = !1, o("blur", y);
    }, b = (y) => {
      o("keyup.enter", y);
    }, S = () => {
      n.value.focus();
    }, M = () => {
      n.value.blur();
    }, D = () => {
      o("clear", void 0), o("update:modelValue", "");
    };
    return t({ focus: S, blur: M, clear: D }), (y, U) => (f(), p("div", {
      class: j(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      l("div", {
        class: j(["dj-input__wrapper", [g.focus ? "is-focus" : ""]]),
        onClick: S
      }, [
        V(a)["prefix-icon"] ? (f(), p("span", Ar, [
          l("span", Or, [
            m(y.$slots, "prefix-icon")
          ])
        ])) : C("", !0),
        l("input", {
          id: e.id,
          ref_key: "DjInputRef",
          ref: n,
          class: "dj-input__inner",
          placeholder: e.placeholder,
          enterkeyhint: e.enterkeyhint,
          disabled: e.disabled,
          value: e.modelValue,
          onChange: c,
          onInput: v,
          onFocus: $,
          onFocusout: P,
          onKeyup: ye(b, ["enter", "native"])
        }, null, 40, Fr),
        s.clear && e.modelValue ? (f(), p("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: D
        }, Dr)) : C("", !0),
        V(a)["suffix-icon"] ? (f(), p("span", Vr, [
          l("span", Br, [
            m(y.$slots, "suffix-icon")
          ])
        ])) : C("", !0)
      ], 2)
    ], 2));
  }
}), Er = ["id", "rows", "cols", "placeholder", "disabled", "value"], Nr = h({
  name: "dj-textarea"
}), Lr = /* @__PURE__ */ h({
  ...Nr,
  props: {
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 5
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  setup(e, { expose: t, emit: r }) {
    const s = r, o = I(), a = F({
      focus: !1,
      active: !1
    }), n = (b) => {
      s("input", b);
    }, g = (b) => {
      s("change", b), s("update:modelValue", b.target.value);
    }, v = (b) => {
      a.focus = !0, s("focus", b);
    }, c = (b) => {
      a.focus = !1, s("blur", b);
    };
    return t({ focus: () => {
      o.value.focus();
    }, blur: () => {
      o.value.blur();
    } }), (b, S) => (f(), p("div", {
      class: j(["dj-textarea", [e.disabled ? "is-disabled" : ""]])
    }, [
      l("div", {
        class: j(["dj-textarea__wrapper", [a.focus ? "is-focus" : ""]])
      }, [
        l("textarea", {
          id: e.id,
          ref_key: "DjTextareaRef",
          ref: o,
          class: "dj-textarea__inner",
          rows: e.rows,
          cols: e.cols,
          placeholder: e.placeholder,
          disabled: e.disabled,
          value: e.modelValue,
          onInput: g,
          onChange: n,
          onFocus: v,
          onFocusout: c
        }, null, 40, Er)
      ], 2)
    ], 2));
  }
}), zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: Wt,
  DJAudio: pr,
  DJButton: _r,
  DJButtonGroup: mr,
  DJCard: xr,
  DJDivider: Cr,
  DJInput: Mr,
  DJTextarea: Lr
}, Symbol.toStringTag, { value: "Module" })), Jr = {
  install(e) {
    zt(zr, (t) => {
      e.component(t.name, t);
    });
  }
};
export {
  Jr as default
};
