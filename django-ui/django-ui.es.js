import { defineComponent as m, watch as He, ref as F, reactive as L, onMounted as W, openBlock as f, createElementBlock as g, createElementVNode as n, normalizeClass as C, normalizeStyle as T, renderSlot as k, createTextVNode as E, toDisplayString as x, Fragment as X, withDirectives as K, vModelText as G, createStaticVNode as de, unref as u, useSlots as Q, createCommentVNode as D, withKeys as Ue, onUnmounted as qe } from "vue";
var pe = typeof global == "object" && global && global.Object === Object && global, Je = typeof self == "object" && self && self.Object === Object && self, fe = pe || Je || Function("return this")(), R = fe.Symbol, ge = Object.prototype, Ke = ge.hasOwnProperty, Ge = ge.toString, I = R ? R.toStringTag : void 0;
function We(e) {
  var a = Ke.call(e, I), r = e[I];
  try {
    e[I] = void 0;
    var i = !0;
  } catch {
  }
  var o = Ge.call(e);
  return i && (a ? e[I] = r : delete e[I]), o;
}
var Xe = Object.prototype, Qe = Xe.toString;
function Ye(e) {
  return Qe.call(e);
}
var Ze = "[object Null]", et = "[object Undefined]", ae = R ? R.toStringTag : void 0;
function Y(e) {
  return e == null ? e === void 0 ? et : Ze : ae && ae in Object(e) ? We(e) : Ye(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var he = Array.isArray;
function tt(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
function ot(e) {
  return e;
}
var st = "[object AsyncFunction]", nt = "[object Function]", at = "[object GeneratorFunction]", rt = "[object Proxy]";
function it(e) {
  if (!tt(e))
    return !1;
  var a = Y(e);
  return a == nt || a == at || a == st || a == rt;
}
function lt(e, a) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i && a(e[r], r, e) !== !1; )
    ;
  return e;
}
var ct = 9007199254740991, ut = /^(?:0|[1-9]\d*)$/;
function dt(e, a) {
  var r = typeof e;
  return a = a ?? ct, !!a && (r == "number" || r != "symbol" && ut.test(e)) && e > -1 && e % 1 == 0 && e < a;
}
var pt = 9007199254740991;
function ve(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pt;
}
function me(e) {
  return e != null && ve(e.length) && !it(e);
}
var ft = Object.prototype;
function gt(e) {
  var a = e && e.constructor, r = typeof a == "function" && a.prototype || ft;
  return e === r;
}
function ht(e, a) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = a(r);
  return i;
}
var vt = "[object Arguments]";
function re(e) {
  return Z(e) && Y(e) == vt;
}
var _e = Object.prototype, mt = _e.hasOwnProperty, _t = _e.propertyIsEnumerable, yt = re(/* @__PURE__ */ function() {
  return arguments;
}()) ? re : function(e) {
  return Z(e) && mt.call(e, "callee") && !_t.call(e, "callee");
};
function bt() {
  return !1;
}
var ye = typeof exports == "object" && exports && !exports.nodeType && exports, ie = ye && typeof module == "object" && module && !module.nodeType && module, wt = ie && ie.exports === ye, le = wt ? fe.Buffer : void 0, jt = le ? le.isBuffer : void 0, kt = jt || bt, Ct = "[object Arguments]", xt = "[object Array]", Tt = "[object Boolean]", $t = "[object Date]", Pt = "[object Error]", St = "[object Function]", Mt = "[object Map]", Ft = "[object Number]", At = "[object Object]", Vt = "[object RegExp]", Et = "[object Set]", Lt = "[object String]", Bt = "[object WeakMap]", It = "[object ArrayBuffer]", Dt = "[object DataView]", Ot = "[object Float32Array]", zt = "[object Float64Array]", Rt = "[object Int8Array]", Nt = "[object Int16Array]", Ht = "[object Int32Array]", Ut = "[object Uint8Array]", qt = "[object Uint8ClampedArray]", Jt = "[object Uint16Array]", Kt = "[object Uint32Array]", h = {};
h[Ot] = h[zt] = h[Rt] = h[Nt] = h[Ht] = h[Ut] = h[qt] = h[Jt] = h[Kt] = !0;
h[Ct] = h[xt] = h[It] = h[Tt] = h[Dt] = h[$t] = h[Pt] = h[St] = h[Mt] = h[Ft] = h[At] = h[Vt] = h[Et] = h[Lt] = h[Bt] = !1;
function Gt(e) {
  return Z(e) && ve(e.length) && !!h[Y(e)];
}
function Wt(e) {
  return function(a) {
    return e(a);
  };
}
var be = typeof exports == "object" && exports && !exports.nodeType && exports, O = be && typeof module == "object" && module && !module.nodeType && module, Xt = O && O.exports === be, J = Xt && pe.process, ce = function() {
  try {
    var e = O && O.require && O.require("util").types;
    return e || J && J.binding && J.binding("util");
  } catch {
  }
}(), ue = ce && ce.isTypedArray, Qt = ue ? Wt(ue) : Gt, Yt = Object.prototype, Zt = Yt.hasOwnProperty;
function eo(e, a) {
  var r = he(e), i = !r && yt(e), o = !r && !i && kt(e), c = !r && !i && !o && Qt(e), l = r || i || o || c, t = l ? ht(e.length, String) : [], y = t.length;
  for (var v in e)
    (a || Zt.call(e, v)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    dt(v, y))) && t.push(v);
  return t;
}
function to(e, a) {
  return function(r) {
    return e(a(r));
  };
}
var oo = to(Object.keys, Object);
const so = oo;
var no = Object.prototype, ao = no.hasOwnProperty;
function ro(e) {
  if (!gt(e))
    return so(e);
  var a = [];
  for (var r in Object(e))
    ao.call(e, r) && r != "constructor" && a.push(r);
  return a;
}
function io(e) {
  return me(e) ? eo(e) : ro(e);
}
function lo(e) {
  return function(a, r, i) {
    for (var o = -1, c = Object(a), l = i(a), t = l.length; t--; ) {
      var y = l[e ? t : ++o];
      if (r(c[y], y, c) === !1)
        break;
    }
    return a;
  };
}
var co = lo();
const uo = co;
function po(e, a) {
  return e && uo(e, a, io);
}
function fo(e, a) {
  return function(r, i) {
    if (r == null)
      return r;
    if (!me(r))
      return e(r, i);
    for (var o = r.length, c = a ? o : -1, l = Object(r); (a ? c-- : ++c < o) && i(l[c], c, l) !== !1; )
      ;
    return r;
  };
}
var go = fo(po);
const ho = go;
function vo(e) {
  return typeof e == "function" ? e : ot;
}
function mo(e, a) {
  var r = he(e) ? lt : ho;
  return r(e, vo(a));
}
const _o = { class: "dj-accordion" }, yo = { class: "dj-accordion__header-label" }, bo = /* @__PURE__ */ n("span", { class: "dj-accordion__header-icon" }, [
  /* @__PURE__ */ n("svg", {
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ n("path", {
      fill: "currentColor",
      d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
    })
  ])
], -1), wo = { class: "dj-accordion__inner-content" }, jo = m({
  name: "dj-accordion"
}), ko = /* @__PURE__ */ m({
  ...jo,
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
  setup(e, { emit: a }) {
    const r = e, i = a;
    He(() => r.modelValue, (v) => {
      v ? (o.value.style.display = "block", c.contentStyle = {
        overflow: "hidden",
        height: `${o.value.scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (o.value.style.height = `${o.value.scrollHeight}px`, setTimeout(() => {
        c.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0));
    });
    const o = F(), c = L({
      wrapperStyle: {},
      contentStyle: {}
    }), l = () => {
      i("change", !r.modelValue), i("update:modelValue", !r.modelValue);
    }, t = () => {
      r.modelValue ? (c.wrapperStyle = {}, o.value.style.display = "", c.contentStyle = {}) : (c.wrapperStyle = {}, c.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, y = () => {
      r.modelValue || (o.value.style.display = "none", o.value.style.height = "0", o.value.style.overflow = "hidden");
    };
    return W(() => {
      y();
    }), (v, $) => (f(), g("div", _o, [
      n("div", {
        class: C(["dj-accordion__wrapper", [r.modelValue ? "is-active" : ""]]),
        style: T(c.wrapperStyle)
      }, [
        n("button", {
          class: "dj-accordion__header",
          onClick: l
        }, [
          n("span", yo, [
            k(v.$slots, "title", {}, () => [
              E(x(r.title), 1)
            ])
          ]),
          bo
        ]),
        n("div", {
          class: "dj-accordion__inner",
          style: T(c.contentStyle),
          ref_key: "DJAccordionInner",
          ref: o,
          onTransitionend: t
        }, [
          n("div", wo, [
            k(v.$slots, "default", {}, () => [
              E(x(r.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), Co = (e) => {
  e = e.replace("#", "");
  const a = [
    parseInt(e.substr(0, 2), 16),
    // 红色通道值
    parseInt(e.substr(2, 2), 16),
    // 绿色通道值
    parseInt(e.substr(4, 2), 16)
    // 蓝色通道值
  ];
  return (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) / 255 <= 0.5;
}, N = (e) => {
  var a = Math.floor(e % 3600 / 60), r = Math.floor(e % 3600 % 60), i = a > 0 ? a < 10 ? "0" + a : a : "00", o = r > 0 ? r < 10 ? "0" + r : r : "00";
  return i + ":" + o;
}, we = (e, a) => a / e * 100, xo = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), To = { class: "dj-audio" }, $o = { class: "dj-audio-button__wrapper" }, Po = ["disabled"], So = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Mo = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Fo = [
  Mo
], Ao = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, Vo = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Eo = [
  Vo
], Lo = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Bo = /* @__PURE__ */ de('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), Io = [
  Bo
], Do = { class: "dj-audio-progress__wrapper" }, Oo = { class: "dj-audio-progress__start-time" }, zo = { class: "dj-audio-progress__inner" }, Ro = ["src"], No = ["src"], Ho = { class: "dj-audio-progress__end-time" }, Uo = m({
  name: "dj-audio"
}), qo = /* @__PURE__ */ m({
  ...Uo,
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
  setup(e, { expose: a, emit: r }) {
    const i = e, o = F(), c = r, l = L({
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      volume: 1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00"
    }), t = () => {
      o.value.play();
    }, y = () => {
      o.value.pause();
    }, v = () => {
      l.paused = !l.paused, l.paused ? y() : t();
    }, $ = (p) => {
      var w;
      l.duration = N((w = o.value) == null ? void 0 : w.duration), l.waiting = !1, c("loadedmetadata", p);
    }, A = (p) => {
      l.waiting = !1, c("canplay", p);
    }, b = (p) => {
      l.paused = !1, o.value.volume = l.volume = 0.5, c("play", p);
    }, P = (p) => {
      c("pause", p), l.paused = !0;
    }, B = (p) => {
      c("playing", p);
    }, V = (p) => {
      var j, S;
      var w = (j = o.value) == null ? void 0 : j.buffered;
      l.buffered = parseFloat((w.end(w.length - 1) / ((S = o.value) == null ? void 0 : S.duration) * 100).toFixed(2)), c("progress", p);
    }, _ = (p) => {
      var w, j, S;
      l.currentTime = N((w = o.value) == null ? void 0 : w.currentTime), l.isDragProgress || (l.progress = parseFloat(we((j = o.value) == null ? void 0 : j.duration, (S = o.value) == null ? void 0 : S.currentTime).toFixed(2))), c("timeupdate", l.progress, p);
    }, z = (p) => {
      c("seeked", p);
    }, H = (p) => {
      l.waiting = !0, c("waiting", p);
    }, U = (p) => {
      l.paused = !0, c("ended", p);
    }, q = () => {
      var p;
      o.value.currentTime = l.progress / 100 * ((p = o.value) == null ? void 0 : p.duration), l.isDragProgress = !1;
    };
    return a({
      src: i.src,
      autoplay: i.autoplay,
      loop: i.loop,
      muted: i.muted,
      paused: () => l.paused,
      volume: () => l.volume,
      progress: () => l.progress,
      buffered: () => l.buffered,
      currentTime: () => {
        var p;
        return (p = o.value) == null ? void 0 : p.currentTime;
      },
      duration: () => {
        var p;
        return (p = o.value) == null ? void 0 : p.duration;
      },
      play: t,
      pause: y
    }), (p, w) => (f(), g("div", To, [
      n("div", {
        class: C(["dj-audio__wrapper", [l.paused ? "" : "is-play"]])
      }, [
        n("div", $o, [
          n("button", {
            class: "dj-audio-button__play",
            disabled: l.waiting,
            onClick: v
          }, [
            l.waiting ? (f(), g("svg", Lo, Io)) : (f(), g(X, { key: 0 }, [
              l.paused ? (f(), g("svg", So, Fo)) : (f(), g("svg", Ao, Eo))
            ], 64))
          ], 8, Po)
        ]),
        n("div", Do, [
          n("span", Oo, x(l.currentTime), 1),
          n("div", zo, [
            n("audio", {
              class: "dj-audio-process__audio",
              ref_key: "audioRef",
              ref: o,
              preload: "auto",
              onLoadedmetadata: $,
              onProgress: V,
              onCanplay: A,
              onPlay: b,
              onPlaying: B,
              onPause: P,
              onTimeupdate: _,
              onSeeked: z,
              onWaiting: H,
              onEnded: U
            }, [
              n("source", {
                type: "audio/ogg",
                src: e.src
              }, null, 8, Ro),
              n("source", {
                type: "audio/mpeg",
                src: e.src
              }, null, 8, No)
            ], 544),
            n("div", {
              class: "dj-audio-buffered__bar",
              style: T({ "--dj-audio-buffer-value": `${l.buffered}%` })
            }, null, 4),
            K(n("input", {
              type: "range",
              style: T({ "--dj-audio-progress-value": `${l.progress}%` }),
              "onUpdate:modelValue": w[0] || (w[0] = (j) => l.progress = j),
              onMousedown: w[1] || (w[1] = (j) => l.isDragProgress = !0),
              onMouseup: q
            }, null, 36), [
              [G, l.progress]
            ])
          ]),
          n("span", Ho, x(l.duration), 1)
        ])
      ], 2)
    ]));
  }
}), Jo = { class: "dj-button-inner" }, Ko = m({
  name: "dj-button"
}), Go = /* @__PURE__ */ m({
  ...Ko,
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
    return (a, r) => (f(), g("button", {
      class: C(["dj-button", [e.type]]),
      style: T({ "--custom-background-color": e.color, "--custom-text-color": e.color ? u(Co)(e.color) ? "var(--white)" : "var(--black)" : "" })
    }, [
      n("span", Jo, [
        k(a.$slots, "default", {}, () => [
          E(x(e.text), 1)
        ])
      ])
    ], 6));
  }
}), Wo = { class: "dj-button-group" }, Xo = m({
  name: "dj-button-group"
}), Qo = /* @__PURE__ */ m({
  ...Xo,
  setup(e) {
    return (a, r) => (f(), g("div", Wo, [
      k(a.$slots, "default")
    ]));
  }
}), Yo = {
  key: 0,
  class: "dj-card-header"
}, Zo = { class: "dj-card-body" }, es = {
  key: 1,
  class: "dj-card-footer"
}, ts = m({
  name: "dj-card"
}), os = /* @__PURE__ */ m({
  ...ts,
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
    const a = e, r = Q(), i = L({
      showTitle: !0,
      showFooter: !0
    });
    return W(() => {
      i.showTitle = (a.title || r.header) !== void 0, i.showFooter = (a.footer || r.footer) !== void 0;
    }), (o, c) => (f(), g("div", {
      class: C(["dj-card", [e.align]])
    }, [
      i.showTitle ? (f(), g("div", Yo, [
        k(o.$slots, "header", {}, () => [
          E(x(e.title), 1)
        ])
      ])) : D("", !0),
      n("div", Zo, [
        k(o.$slots, "default")
      ]),
      i.showFooter ? (f(), g("div", es, [
        k(o.$slots, "footer", {}, () => [
          E(x(e.footer), 1)
        ])
      ])) : D("", !0)
    ], 2));
  }
}), ss = { class: "dj-divider" }, ns = m({
  name: "dj-divider"
}), as = /* @__PURE__ */ m({
  ...ns,
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
    const a = Q();
    return (r, i) => (f(), g("div", ss, [
      n("div", {
        class: C(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        u(a).default ? k(r.$slots, "default", { key: 0 }) : (f(), g(X, { key: 1 }, [
          E(x(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), rs = {
  key: 0,
  class: "dj-input__prefix"
}, is = { class: "dj-input__prefix__inner" }, ls = ["id", "placeholder", "enterkeyhint", "disabled", "value"], cs = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ n("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), us = [
  cs
], ds = {
  key: 2,
  class: "dj-input__suffix"
}, ps = { class: "dj-input__suffix__inner" }, fs = m({
  name: "dj-input"
}), gs = /* @__PURE__ */ m({
  ...fs,
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
  setup(e, { expose: a, emit: r }) {
    const i = e, o = r, c = Q(), l = F(), t = L({
      focus: !1,
      active: !1
    }), y = (_) => {
      o("input", _.target.value), o("update:modelValue", _.target.value);
    }, v = (_) => {
      o("change", _.target.value);
    }, $ = (_) => {
      t.focus = !0, o("focus", _);
    }, A = (_) => {
      t.focus = !1, o("blur", _);
    }, b = (_) => {
      o("keyup.enter", _);
    }, P = () => {
      l.value.focus();
    }, B = () => {
      l.value.blur();
    }, V = () => {
      o("clear", void 0), o("update:modelValue", "");
    };
    return a({ focus: P, blur: B, clear: V }), (_, z) => (f(), g("div", {
      class: C(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      n("div", {
        class: C(["dj-input__wrapper", [t.focus ? "is-focus" : ""]]),
        onClick: P
      }, [
        u(c)["prefix-icon"] ? (f(), g("span", rs, [
          n("span", is, [
            k(_.$slots, "prefix-icon")
          ])
        ])) : D("", !0),
        n("input", {
          id: e.id,
          ref_key: "DjInputRef",
          ref: l,
          class: "dj-input__inner",
          placeholder: e.placeholder,
          enterkeyhint: e.enterkeyhint,
          disabled: e.disabled,
          value: e.modelValue,
          onChange: v,
          onInput: y,
          onFocus: $,
          onFocusout: A,
          onKeyup: Ue(b, ["enter", "native"])
        }, null, 40, ls),
        i.clear && e.modelValue ? (f(), g("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: V
        }, us)) : D("", !0),
        u(c)["suffix-icon"] ? (f(), g("span", ds, [
          n("span", ps, [
            k(_.$slots, "suffix-icon")
          ])
        ])) : D("", !0)
      ], 2)
    ], 2));
  }
}), hs = ["id", "rows", "cols", "placeholder", "disabled", "value"], vs = m({
  name: "dj-textarea"
}), ms = /* @__PURE__ */ m({
  ...vs,
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
  setup(e, { expose: a, emit: r }) {
    const i = r, o = F(), c = L({
      focus: !1,
      active: !1
    }), l = (b) => {
      i("input", b);
    }, t = (b) => {
      i("change", b), i("update:modelValue", b.target.value);
    }, y = (b) => {
      c.focus = !0, i("focus", b);
    }, v = (b) => {
      c.focus = !1, i("blur", b);
    };
    return a({ focus: () => {
      o.value.focus();
    }, blur: () => {
      o.value.blur();
    } }), (b, P) => (f(), g("div", {
      class: C(["dj-textarea", [e.disabled ? "is-disabled" : ""]])
    }, [
      n("div", {
        class: C(["dj-textarea__wrapper", [c.focus ? "is-focus" : ""]])
      }, [
        n("textarea", {
          id: e.id,
          ref_key: "DjTextareaRef",
          ref: o,
          class: "dj-textarea__inner",
          rows: e.rows,
          cols: e.cols,
          placeholder: e.placeholder,
          disabled: e.disabled,
          value: e.modelValue,
          onInput: t,
          onChange: l,
          onFocus: y,
          onFocusout: v
        }, null, 40, hs)
      ], 2)
    ], 2));
  }
}), _s = { class: "dj-video__wrapper" }, ys = { class: "dj-video__inner" }, bs = { class: "dj-video-source" }, ws = { class: "dj-video-source__wrapper" }, js = { class: "dj-video-source__content" }, ks = ["src"], Cs = ["src"], xs = ["src"], Ts = { class: "dj-video-progress__wrapper" }, $s = { class: "dj-video-button__wrapper" }, Ps = ["disabled"], Ss = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Ms = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Fs = [
  Ms
], As = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, Vs = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Es = [
  Vs
], Ls = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Bs = /* @__PURE__ */ de('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), Is = [
  Bs
], Ds = { class: "dj-video-progress__inner" }, Os = { class: "dj-video-progress__start-time" }, zs = { class: "dj-video-progress__content" }, Rs = { class: "dj-video-progress__end-time" }, Ns = { class: "dj-video-button__wrapper" }, Hs = { class: "dj-video-button__group" }, Us = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, qs = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85"
}, null, -1), Js = [
  qs
], Ks = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Gs = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7L7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91c-.36.15-.58.53-.58.92c0 .72.73 1.18 1.39.91c.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 1 0 1.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0M19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-3.83-2.4-7.11-5.78-8.4c-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12m-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7M16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24"
}, null, -1), Ws = [
  Gs
], Xs = { class: "dj-video-button__group-menu" }, Qs = { class: "dj-video-button__group-menu__wrapper" }, Ys = { class: "dj-video-volume" }, Zs = { class: "dj-video-volume__wrapper" }, en = { class: "dj-video-volume__inner" }, tn = { class: "dj-video-volume-progress" }, on = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, sn = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06"
}, null, -1), nn = [
  sn
], an = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, rn = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm8.75-4.5H13V5h5.75A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.92c.313.11.65.17 1 .17h.5v5.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75M15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06z"
}, null, -1), ln = [
  rn
], cn = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, un = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M9.793 12.793a1 1 0 0 1 1.497 1.32l-.083.094L6.414 19H9a1 1 0 0 1 .117 1.993L9 21H4a1 1 0 0 1-.993-.883L3 20v-5a1 1 0 0 1 1.993-.117L5 15v2.586zM20 3a1 1 0 0 1 .993.883L21 4v5a1 1 0 0 1-1.993.117L19 9V6.414l-4.793 4.793a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5H15a1 1 0 0 1-.117-1.993L15 3z"
  })
], -1), dn = [
  un
], pn = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, fn = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M11 12a1 1 0 0 1 .993.883L12 13v5a1 1 0 0 1-1.993.117L10 18v-2.586l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094L8.586 14H6a1 1 0 0 1-.117-1.993L6 12zm8.293-8.707a1 1 0 0 1 1.497 1.32l-.083.094L15.414 10H18a1 1 0 0 1 .117 1.993L18 12h-5a1 1 0 0 1-.993-.883L12 11V6a1 1 0 0 1 1.993-.117L14 6v2.586z"
  })
], -1), gn = [
  fn
], hn = m({
  name: "dj-video"
}), vn = /* @__PURE__ */ m({
  ...hn,
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  emits: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "enterpictureinpicture", "leavepictureinpicture"],
  setup(e, { emit: a }) {
    const r = e, i = a, o = F(), c = F(), l = F(), t = L({
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      mute: !1,
      volume: 1,
      volumeBackup: 1,
      volumeProgress: 100,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00",
      isMove: !1,
      fullscreen: !1,
      pictureInPicture: !1
    }), y = () => {
      u(o).play();
    }, v = () => {
      u(o).pause();
    }, $ = () => {
      xo() || (t.paused = !t.paused, t.paused ? v() : y());
    }, A = () => {
      try {
        const s = u(o), d = u(c);
        s === document.pictureInPictureElement && document.exitPictureInPicture(), d !== document.fullscreenElement ? d.requestFullscreen ? d.requestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen ? d.webkitRequestFullscreen() : d.msRequestFullscreen && d.msRequestFullscreen() : (s.style.height = r.height, document.exitFullscreen());
      } catch (s) {
        console.error(`Failed to toggle fullscreen mode: ${s}`);
      }
    }, b = () => {
      try {
        "pictureInPictureEnabled" in document && u(o) && typeof u(o).requestPictureInPicture == "function" && (u(o) !== document.pictureInPictureElement ? u(o).requestPictureInPicture() : document.exitPictureInPicture());
      } catch (s) {
        console.error(`Failed to toggle Picture-in-Picture mode: ${s}`);
      }
    }, P = () => {
      try {
        t.mute = !t.mute;
        const s = u(o);
        t.mute ? (t.volumeBackup = t.volume, t.volume = 0, t.volumeProgress = 0, s.volume = 0) : (t.volumeProgress = t.volumeBackup * 100, t.volume = t.volumeBackup, s.volume = t.volume);
      } catch {
      }
    }, B = () => {
      const s = u(l);
      s && clearTimeout(s), l.value = setTimeout(() => {
        t.isMove = !1;
      }, 1e3);
    }, V = () => {
      const s = u(l);
      s && (clearTimeout(s), t.isMove = !0), B();
    }, _ = (s) => {
      i("abort", s);
    }, z = (s) => {
      t.waiting = !1, i("canplay", s);
    }, H = (s) => {
      var d;
      try {
        t.waiting = !1, t.duration = N((d = u(o)) == null ? void 0 : d.duration), i("canplaythrough", s);
      } catch {
      }
    }, U = (s) => {
      i("durationchange", s);
    }, q = (s) => {
      i("emptied", s);
    }, p = (s) => {
      t.paused = !0, i("ended", s);
    }, w = (s) => {
      i("error", s);
    }, j = (s) => {
      i("loadeddata", s);
    }, S = (s) => {
      i("loadedmetadata", s);
    }, je = (s) => {
      i("loadstart", s);
    }, ke = (s) => {
      t.paused = !0, i("pause", s);
    }, Ce = (s) => {
      t.paused = !1, i("play", s);
    }, xe = (s) => {
      i("playing", s);
    }, Te = (s) => {
      i("progress", s);
    }, $e = (s) => {
      i("ratechange", s);
    }, Pe = (s) => {
      i("seeked", s);
    }, Se = (s) => {
      i("seeking", s);
    }, Me = (s) => {
      i("stalled", s);
    }, Fe = (s) => {
      i("suspend", s);
    }, Ae = (s) => {
      var M, te, oe, se, ne;
      try {
        t.currentTime = N((M = u(o)) == null ? void 0 : M.currentTime), t.isDragProgress || (t.progress = parseFloat(we((te = u(o)) == null ? void 0 : te.duration, (oe = u(o)) == null ? void 0 : oe.currentTime).toFixed(2)));
        var d = (se = u(o)) == null ? void 0 : se.buffered;
        t.buffered = parseFloat((d.end(d.length - 1) / ((ne = u(o)) == null ? void 0 : ne.duration) * 100).toFixed(2)), i("timeupdate", s);
      } catch {
      }
    }, Ve = (s) => {
      const d = s.target.volume;
      t.volume = d, t.volumeProgress = d * 100, d == 0 ? t.mute = !0 : t.mute = !1, i("volumechange", s);
    }, Ee = (s) => {
      t.waiting = !0, i("waiting", s);
    }, Le = (s) => {
      try {
        u(c) === document.fullscreenElement ? t.fullscreen = !0 : t.fullscreen = !1, i("fullscreenchange", s);
      } catch {
      }
    }, Be = (s) => {
      t.pictureInPicture = !0, i("enterpictureinpicture", s);
    }, Ie = (s) => {
      t.pictureInPicture = !1, i("leavepictureinpicture", s);
    }, De = () => {
      var s;
      try {
        u(o).currentTime = t.progress / 100 * ((s = u(o)) == null ? void 0 : s.duration), t.isDragProgress = !1;
      } catch {
      }
    }, Oe = () => {
      t.isMove = !0;
    }, ze = () => {
      t.isMove = !1;
    }, Re = () => {
      V();
    }, Ne = () => {
      try {
        const s = u(o), d = t.volumeProgress / 100;
        t.volume = d, t.volumeBackup = d, s.volume = d, d == 0 ? t.mute = !0 : t.mute = !1;
      } catch {
      }
    }, ee = (s) => {
      try {
        switch (s.keyCode) {
          case 32:
            s.preventDefault(), t.paused ? u(o).play() : u(o).pause();
            break;
          case 37:
            s.preventDefault(), u(o).currentTime -= 5;
            break;
          case 39:
            if (s.preventDefault(), t.paused)
              return;
            u(o).currentTime += 5;
            break;
          case 38:
            s.preventDefault(), u(o).volume = (u(o).volume + 0.05).toFixed(2);
            break;
          case 40:
            s.preventDefault(), u(o).volume = (u(o).volume - 0.05).toFixed(2);
            break;
        }
      } catch {
      }
    };
    return W(() => {
      document.addEventListener("keydown", ee);
    }), qe(() => {
      document.removeEventListener("keydown", ee);
    }), (s, d) => (f(), g("div", {
      class: "dj-video",
      style: T({ width: e.width, height: e.height })
    }, [
      n("div", _s, [
        n("div", ys, [
          n("div", bs, [
            n("div", ws, [
              n("div", {
                class: "dj-video-source__inner",
                ref_key: "videoFullScreenElementRef",
                ref: c,
                onMouseenter: Oe,
                onMouseleave: ze,
                onMousemove: Re,
                onFullscreenchange: Le
              }, [
                n("div", js, [
                  n("video", {
                    ref_key: "videoRef",
                    ref: o,
                    preload: "auto",
                    controls: !1,
                    "h5-playsinline": "",
                    "x5-video-player-fullscreen": "false",
                    "webkit-playsinline": "false",
                    playsinline: "false",
                    onClick: $,
                    onAbort: _,
                    onCanplay: z,
                    onCanplaythrough: H,
                    onDurationchange: U,
                    onEmptied: q,
                    onEnded: p,
                    onError: w,
                    onLoadeddata: j,
                    onLoadedmetadata: S,
                    onLoadstart: je,
                    onPause: ke,
                    onPlay: Ce,
                    onPlaying: xe,
                    onProgress: Te,
                    onRatechange: $e,
                    onSeeked: Pe,
                    onSeeking: Se,
                    onStalled: Me,
                    onSuspend: Fe,
                    onTimeupdate: Ae,
                    onVolumechange: Ve,
                    onWaiting: Ee,
                    onEnterpictureinpicture: Be,
                    onLeavepictureinpicture: Ie
                  }, [
                    n("source", {
                      src: e.src,
                      type: "video/mp4"
                    }, null, 8, ks),
                    n("source", {
                      src: e.src,
                      type: "video/ogg"
                    }, null, 8, Cs),
                    n("source", {
                      src: e.src,
                      type: "video/webm"
                    }, null, 8, xs)
                  ], 544)
                ]),
                n("div", {
                  class: C(["dj-video-progress", [t.paused || t.isMove ? "is-show" : ""]])
                }, [
                  n("div", Ts, [
                    n("div", $s, [
                      n("button", {
                        class: "dj-video-button__play",
                        disabled: t.waiting,
                        onClick: $
                      }, [
                        t.waiting ? (f(), g("svg", Ls, Is)) : (f(), g(X, { key: 0 }, [
                          t.paused ? (f(), g("svg", Ss, Fs)) : (f(), g("svg", As, Es))
                        ], 64))
                      ], 8, Ps)
                    ]),
                    n("div", Ds, [
                      n("span", Os, x(t.currentTime), 1),
                      n("div", zs, [
                        n("div", {
                          class: "dj-video-buffered__bar",
                          style: T({ "--buffer-value": `${t.buffered}%` })
                        }, null, 4),
                        K(n("input", {
                          type: "range",
                          style: T({ "--progress-value": `${t.progress}%` }),
                          "onUpdate:modelValue": d[0] || (d[0] = (M) => t.progress = M),
                          onMousedown: d[1] || (d[1] = (M) => t.isDragProgress = !0),
                          onMouseup: De
                        }, null, 36), [
                          [G, t.progress]
                        ])
                      ]),
                      n("span", Rs, x(t.duration), 1)
                    ]),
                    n("div", Ns, [
                      n("div", Hs, [
                        n("button", {
                          class: "dj-video-button__volume",
                          onClick: P
                        }, [
                          t.mute ? (f(), g("svg", Ks, Ws)) : (f(), g("svg", Us, Js))
                        ]),
                        n("div", Xs, [
                          n("div", Qs, [
                            n("div", Ys, [
                              n("div", Zs, [
                                n("div", en, [
                                  n("div", tn, [
                                    K(n("input", {
                                      type: "range",
                                      style: T({ "--volume-progress-value": `${t.volumeProgress}%` }),
                                      "onUpdate:modelValue": d[2] || (d[2] = (M) => t.volumeProgress = M),
                                      onInput: Ne
                                    }, null, 36), [
                                      [G, t.volumeProgress]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      n("button", {
                        class: "dj-video-button__picture",
                        onClick: b
                      }, [
                        t.pictureInPicture ? (f(), g("svg", an, ln)) : (f(), g("svg", on, nn))
                      ]),
                      n("button", {
                        class: "dj-video-button__screen",
                        onClick: A
                      }, [
                        t.fullscreen ? (f(), g("svg", pn, gn)) : (f(), g("svg", cn, dn))
                      ])
                    ])
                  ])
                ], 2)
              ], 544)
            ])
          ])
        ])
      ])
    ], 4));
  }
}), mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: ko,
  DJAudio: qo,
  DJButton: Go,
  DJButtonGroup: Qo,
  DJCard: os,
  DJDivider: as,
  DJInput: gs,
  DJTextarea: ms,
  DJVideo: vn
}, Symbol.toStringTag, { value: "Module" })), yn = {
  install(e) {
    mo(mn, (a) => {
      e.component(a.name, a);
    });
  }
};
export {
  yn as default
};
