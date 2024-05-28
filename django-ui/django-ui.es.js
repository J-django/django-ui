import { defineComponent as y, ref as P, reactive as L, watch as Je, unref as l, onMounted as G, openBlock as f, createElementBlock as g, createElementVNode as s, normalizeClass as C, normalizeStyle as x, renderSlot as $, createTextVNode as E, toDisplayString as k, Fragment as X, withDirectives as K, vModelText as W, createStaticVNode as fe, useSlots as Q, createCommentVNode as O, withKeys as Ke, onUnmounted as We } from "vue";
var ge = typeof global == "object" && global && global.Object === Object && global, Ge = typeof self == "object" && self && self.Object === Object && self, he = ge || Ge || Function("return this")(), R = he.Symbol, ve = Object.prototype, Xe = ve.hasOwnProperty, Qe = ve.toString, I = R ? R.toStringTag : void 0;
function Ye(e) {
  var r = Xe.call(e, I), a = e[I];
  try {
    e[I] = void 0;
    var i = !0;
  } catch {
  }
  var o = Qe.call(e);
  return i && (r ? e[I] = a : delete e[I]), o;
}
var Ze = Object.prototype, et = Ze.toString;
function tt(e) {
  return et.call(e);
}
var ot = "[object Null]", st = "[object Undefined]", ie = R ? R.toStringTag : void 0;
function Y(e) {
  return e == null ? e === void 0 ? st : ot : ie && ie in Object(e) ? Ye(e) : tt(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var me = Array.isArray;
function nt(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function rt(e) {
  return e;
}
var at = "[object AsyncFunction]", it = "[object Function]", lt = "[object GeneratorFunction]", ct = "[object Proxy]";
function dt(e) {
  if (!nt(e))
    return !1;
  var r = Y(e);
  return r == it || r == lt || r == at || r == ct;
}
function ut(e, r) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i && r(e[a], a, e) !== !1; )
    ;
  return e;
}
var pt = 9007199254740991, ft = /^(?:0|[1-9]\d*)$/;
function gt(e, r) {
  var a = typeof e;
  return r = r ?? pt, !!r && (a == "number" || a != "symbol" && ft.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var ht = 9007199254740991;
function _e(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ht;
}
function ye(e) {
  return e != null && _e(e.length) && !dt(e);
}
var vt = Object.prototype;
function mt(e) {
  var r = e && e.constructor, a = typeof r == "function" && r.prototype || vt;
  return e === a;
}
function _t(e, r) {
  for (var a = -1, i = Array(e); ++a < e; )
    i[a] = r(a);
  return i;
}
var yt = "[object Arguments]";
function le(e) {
  return Z(e) && Y(e) == yt;
}
var be = Object.prototype, bt = be.hasOwnProperty, wt = be.propertyIsEnumerable, jt = le(/* @__PURE__ */ function() {
  return arguments;
}()) ? le : function(e) {
  return Z(e) && bt.call(e, "callee") && !wt.call(e, "callee");
};
function Ct() {
  return !1;
}
var we = typeof exports == "object" && exports && !exports.nodeType && exports, ce = we && typeof module == "object" && module && !module.nodeType && module, kt = ce && ce.exports === we, de = kt ? he.Buffer : void 0, Tt = de ? de.isBuffer : void 0, xt = Tt || Ct, $t = "[object Arguments]", Pt = "[object Array]", St = "[object Boolean]", Mt = "[object Date]", Ft = "[object Error]", Vt = "[object Function]", At = "[object Map]", Et = "[object Number]", Lt = "[object Object]", Bt = "[object RegExp]", It = "[object Set]", Ot = "[object String]", Dt = "[object WeakMap]", zt = "[object ArrayBuffer]", Rt = "[object DataView]", Ht = "[object Float32Array]", Nt = "[object Float64Array]", Ut = "[object Int8Array]", qt = "[object Int16Array]", Jt = "[object Int32Array]", Kt = "[object Uint8Array]", Wt = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", Xt = "[object Uint32Array]", h = {};
h[Ht] = h[Nt] = h[Ut] = h[qt] = h[Jt] = h[Kt] = h[Wt] = h[Gt] = h[Xt] = !0;
h[$t] = h[Pt] = h[zt] = h[St] = h[Rt] = h[Mt] = h[Ft] = h[Vt] = h[At] = h[Et] = h[Lt] = h[Bt] = h[It] = h[Ot] = h[Dt] = !1;
function Qt(e) {
  return Z(e) && _e(e.length) && !!h[Y(e)];
}
function Yt(e) {
  return function(r) {
    return e(r);
  };
}
var je = typeof exports == "object" && exports && !exports.nodeType && exports, D = je && typeof module == "object" && module && !module.nodeType && module, Zt = D && D.exports === je, J = Zt && ge.process, ue = function() {
  try {
    var e = D && D.require && D.require("util").types;
    return e || J && J.binding && J.binding("util");
  } catch {
  }
}(), pe = ue && ue.isTypedArray, eo = pe ? Yt(pe) : Qt, to = Object.prototype, oo = to.hasOwnProperty;
function so(e, r) {
  var a = me(e), i = !a && jt(e), o = !a && !i && xt(e), d = !a && !i && !o && eo(e), c = a || i || o || d, m = c ? _t(e.length, String) : [], t = m.length;
  for (var v in e)
    (r || oo.call(e, v)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    d && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    gt(v, t))) && m.push(v);
  return m;
}
function no(e, r) {
  return function(a) {
    return e(r(a));
  };
}
var ro = no(Object.keys, Object);
const ao = ro;
var io = Object.prototype, lo = io.hasOwnProperty;
function co(e) {
  if (!mt(e))
    return ao(e);
  var r = [];
  for (var a in Object(e))
    lo.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
function uo(e) {
  return ye(e) ? so(e) : co(e);
}
function po(e) {
  return function(r, a, i) {
    for (var o = -1, d = Object(r), c = i(r), m = c.length; m--; ) {
      var t = c[e ? m : ++o];
      if (a(d[t], t, d) === !1)
        break;
    }
    return r;
  };
}
var fo = po();
const go = fo;
function ho(e, r) {
  return e && go(e, r, uo);
}
function vo(e, r) {
  return function(a, i) {
    if (a == null)
      return a;
    if (!ye(a))
      return e(a, i);
    for (var o = a.length, d = r ? o : -1, c = Object(a); (r ? d-- : ++d < o) && i(c[d], d, c) !== !1; )
      ;
    return a;
  };
}
var mo = vo(ho);
const _o = mo;
function yo(e) {
  return typeof e == "function" ? e : rt;
}
function bo(e, r) {
  var a = me(e) ? ut : _o;
  return a(e, yo(r));
}
const wo = { class: "dj-accordion" }, jo = { class: "dj-accordion__header-label" }, Co = /* @__PURE__ */ s("span", { class: "dj-accordion__header-icon" }, [
  /* @__PURE__ */ s("svg", {
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ s("path", {
      fill: "currentColor",
      d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
    })
  ])
], -1), ko = { class: "dj-accordion__inner-content" }, To = y({
  name: "dj-accordion"
}), xo = /* @__PURE__ */ y({
  ...To,
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
    const a = e, i = r, o = P(), d = L({
      wrapperStyle: {},
      contentStyle: {}
    });
    Je(() => a.modelValue, (v) => {
      var j;
      v ? (l(o).style.display = "block", d.contentStyle = {
        overflow: "hidden",
        height: `${l(o).scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (l(o).style.height = `${(j = l(o)) == null ? void 0 : j.scrollHeight}px`, setTimeout(() => {
        d.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0));
    });
    const c = () => {
      i("change", !a.modelValue), i("update:modelValue", !a.modelValue);
    }, m = () => {
      a.modelValue ? (d.wrapperStyle = {}, l(o).style.display = "", d.contentStyle = {}) : (d.wrapperStyle = {}, d.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, t = () => {
      a.modelValue || (l(o).style.display = "none", l(o).style.height = "0", l(o).style.overflow = "hidden");
    };
    return G(() => {
      t();
    }), (v, j) => (f(), g("div", wo, [
      s("div", {
        class: C(["dj-accordion__wrapper", [a.modelValue ? "is-active" : ""]]),
        style: x(d.wrapperStyle)
      }, [
        s("button", {
          class: "dj-accordion__header",
          onClick: c
        }, [
          s("span", jo, [
            $(v.$slots, "title", {}, () => [
              E(k(a.title), 1)
            ])
          ]),
          Co
        ]),
        s("div", {
          class: "dj-accordion__inner",
          style: x(d.contentStyle),
          ref_key: "accordionRef",
          ref: o,
          onTransitionend: m
        }, [
          s("div", ko, [
            $(v.$slots, "default", {}, () => [
              E(k(a.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), $o = (e) => {
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
}, H = (e) => {
  var r = Math.floor(e % 3600 / 60), a = Math.floor(e % 3600 % 60), i = r > 0 ? r < 10 ? "0" + r : r : "00", o = a > 0 ? a < 10 ? "0" + a : a : "00";
  return i + ":" + o;
}, Ce = (e, r) => r / e * 100, Po = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), So = { class: "dj-audio" }, Mo = { class: "dj-audio-button__wrapper" }, Fo = ["disabled"], Vo = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Ao = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Eo = [
  Ao
], Lo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, Bo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Io = [
  Bo
], Oo = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Do = /* @__PURE__ */ fe('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), zo = [
  Do
], Ro = { class: "dj-audio-progress__wrapper" }, Ho = { class: "dj-audio-progress__start-time" }, No = { class: "dj-audio-progress__inner" }, Uo = ["src"], qo = ["src"], Jo = { class: "dj-audio-progress__end-time" }, Ko = y({
  name: "dj-audio"
}), Wo = /* @__PURE__ */ y({
  ...Ko,
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
  setup(e, { expose: r, emit: a }) {
    const i = e, o = P(), d = a, c = L({
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      volume: 1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00"
    }), m = () => {
      l(o).play();
    }, t = () => {
      l(o).pause();
    }, v = () => {
      c.paused = !c.paused, c.paused ? t() : m();
    }, j = (p) => {
      var w;
      c.duration = H((w = l(o)) == null ? void 0 : w.duration), c.waiting = !1, d("loadedmetadata", p);
    }, S = (p) => {
      c.waiting = !1, d("canplay", p);
    }, b = (p) => {
      c.paused = !1, l(o).volume = c.volume = 0.5, d("play", p);
    }, M = (p) => {
      d("pause", p), c.paused = !0;
    }, B = (p) => {
      d("playing", p);
    }, A = (p) => {
      var T, F;
      var w = (T = l(o)) == null ? void 0 : T.buffered;
      c.buffered = parseFloat((w.end(w.length - 1) / ((F = l(o)) == null ? void 0 : F.duration) * 100).toFixed(2)), d("progress", p);
    }, _ = (p) => {
      var w, T, F;
      c.currentTime = H((w = l(o)) == null ? void 0 : w.currentTime), c.isDragProgress || (c.progress = parseFloat(Ce((T = l(o)) == null ? void 0 : T.duration, (F = l(o)) == null ? void 0 : F.currentTime).toFixed(2))), d("timeupdate", c.progress, p);
    }, z = (p) => {
      d("seeked", p);
    }, N = (p) => {
      c.waiting = !0, d("waiting", p);
    }, U = (p) => {
      c.paused = !0, d("ended", p);
    }, q = () => {
      var p;
      l(o).currentTime = c.progress / 100 * ((p = l(o)) == null ? void 0 : p.duration), c.isDragProgress = !1;
    };
    return r({
      src: i.src,
      autoplay: i.autoplay,
      loop: i.loop,
      muted: i.muted,
      paused: () => c.paused,
      volume: () => c.volume,
      progress: () => c.progress,
      buffered: () => c.buffered,
      currentTime: () => {
        var p;
        return (p = l(o)) == null ? void 0 : p.currentTime;
      },
      duration: () => {
        var p;
        return (p = l(o)) == null ? void 0 : p.duration;
      },
      play: m,
      pause: t
    }), (p, w) => (f(), g("div", So, [
      s("div", {
        class: C(["dj-audio__wrapper", [c.paused ? "" : "is-play"]])
      }, [
        s("div", Mo, [
          s("button", {
            class: "dj-audio-button__play",
            disabled: c.waiting,
            onClick: v
          }, [
            c.waiting ? (f(), g("svg", Oo, zo)) : (f(), g(X, { key: 0 }, [
              c.paused ? (f(), g("svg", Vo, Eo)) : (f(), g("svg", Lo, Io))
            ], 64))
          ], 8, Fo)
        ]),
        s("div", Ro, [
          s("span", Ho, k(c.currentTime), 1),
          s("div", No, [
            s("audio", {
              class: "dj-audio-process__audio",
              ref_key: "audioRef",
              ref: o,
              preload: "auto",
              onLoadedmetadata: j,
              onProgress: A,
              onCanplay: S,
              onPlay: b,
              onPlaying: B,
              onPause: M,
              onTimeupdate: _,
              onSeeked: z,
              onWaiting: N,
              onEnded: U
            }, [
              s("source", {
                type: "audio/ogg",
                src: e.src
              }, null, 8, Uo),
              s("source", {
                type: "audio/mpeg",
                src: e.src
              }, null, 8, qo)
            ], 544),
            s("div", {
              class: "dj-audio-buffered__bar",
              style: x({ "--dj-audio-buffer-value": `${c.buffered}%` })
            }, null, 4),
            K(s("input", {
              type: "range",
              style: x({ "--dj-audio-progress-value": `${c.progress}%` }),
              "onUpdate:modelValue": w[0] || (w[0] = (T) => c.progress = T),
              onMousedown: w[1] || (w[1] = (T) => c.isDragProgress = !0),
              onMouseup: q
            }, null, 36), [
              [W, c.progress]
            ])
          ]),
          s("span", Jo, k(c.duration), 1)
        ])
      ], 2)
    ]));
  }
}), Go = { class: "dj-button-inner" }, Xo = y({
  name: "dj-button"
}), Qo = /* @__PURE__ */ y({
  ...Xo,
  props: {
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
    return (r, a) => (f(), g("button", {
      class: "dj-button",
      style: x({ "--dj-button-custom-background-color": e.color, "--dj-button-custom-color": e.color ? l($o)(e.color) ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)" : "" })
    }, [
      s("span", Go, [
        $(r.$slots, "default", {}, () => [
          E(k(e.text), 1)
        ])
      ])
    ], 4));
  }
}), Yo = {
  key: 0,
  class: "dj-card-header"
}, Zo = { class: "dj-card-body" }, es = {
  key: 1,
  class: "dj-card-footer"
}, ts = y({
  name: "dj-card"
}), os = /* @__PURE__ */ y({
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
    const r = e, a = Q(), i = L({
      showTitle: !0,
      showFooter: !0
    });
    return G(() => {
      i.showTitle = (r.title || a.header) !== void 0, i.showFooter = (r.footer || a.footer) !== void 0;
    }), (o, d) => (f(), g("div", {
      class: C(["dj-card", [e.align]])
    }, [
      i.showTitle ? (f(), g("div", Yo, [
        $(o.$slots, "header", {}, () => [
          E(k(e.title), 1)
        ])
      ])) : O("", !0),
      s("div", Zo, [
        $(o.$slots, "default")
      ]),
      i.showFooter ? (f(), g("div", es, [
        $(o.$slots, "footer", {}, () => [
          E(k(e.footer), 1)
        ])
      ])) : O("", !0)
    ], 2));
  }
}), ss = { class: "dj-divider" }, ns = y({
  name: "dj-divider"
}), rs = /* @__PURE__ */ y({
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
    const r = Q();
    return (a, i) => (f(), g("div", ss, [
      s("div", {
        class: C(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        l(r).default ? $(a.$slots, "default", { key: 0 }) : (f(), g(X, { key: 1 }, [
          E(k(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), as = {
  key: 0,
  class: "dj-input__prefix"
}, is = { class: "dj-input__prefix__inner" }, ls = ["id", "placeholder", "enterkeyhint", "disabled", "value"], cs = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), ds = [
  cs
], us = {
  key: 2,
  class: "dj-input__suffix"
}, ps = { class: "dj-input__suffix__inner" }, fs = y({
  name: "dj-input"
}), gs = /* @__PURE__ */ y({
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
  emits: ["update:modelValue", "input", "change", "keyup", "focus", "blur", "clear"],
  setup(e, { expose: r, emit: a }) {
    const i = e, o = a, d = Q(), c = P(), m = L({
      focus: !1,
      active: !1
    }), t = (_) => {
      o("input", _.target.value), o("update:modelValue", _.target.value);
    }, v = (_) => {
      o("change", _.target.value);
    }, j = (_) => {
      m.focus = !0, o("focus", _);
    }, S = (_) => {
      m.focus = !1, o("blur", _);
    }, b = (_) => {
      o("keyup", _);
    }, M = () => {
      l(c).focus();
    }, B = () => {
      l(c).blur();
    }, A = () => {
      o("clear", void 0), o("update:modelValue", "");
    };
    return r({ focus: M, blur: B, clear: A }), (_, z) => (f(), g("div", {
      class: C(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      s("div", {
        class: C(["dj-input__wrapper", [m.focus ? "is-focus" : ""]]),
        onClick: M
      }, [
        l(d)["prefix-icon"] ? (f(), g("span", as, [
          s("span", is, [
            $(_.$slots, "prefix-icon")
          ])
        ])) : O("", !0),
        s("input", {
          id: e.id,
          ref_key: "inputRef",
          ref: c,
          class: "dj-input__inner",
          placeholder: e.placeholder,
          enterkeyhint: e.enterkeyhint,
          disabled: e.disabled,
          value: e.modelValue,
          onChange: v,
          onInput: t,
          onFocus: j,
          onFocusout: S,
          onKeyup: Ke(b, ["native"])
        }, null, 40, ls),
        i.clear && e.modelValue ? (f(), g("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: A
        }, ds)) : O("", !0),
        l(d)["suffix-icon"] ? (f(), g("span", us, [
          s("span", ps, [
            $(_.$slots, "suffix-icon")
          ])
        ])) : O("", !0)
      ], 2)
    ], 2));
  }
}), hs = ["id", "rows", "cols", "placeholder", "disabled", "value"], vs = y({
  name: "dj-textarea"
}), ms = /* @__PURE__ */ y({
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
  setup(e, { expose: r, emit: a }) {
    const i = a, o = P(), d = L({
      focus: !1,
      active: !1
    }), c = (b) => {
      i("input", b);
    }, m = (b) => {
      i("change", b), i("update:modelValue", b.target.value);
    }, t = (b) => {
      d.focus = !0, i("focus", b);
    }, v = (b) => {
      d.focus = !1, i("blur", b);
    }, j = () => {
      l(o).focus();
    };
    return r({ focus: j, blur: () => {
      l(o).blur();
    } }), (b, M) => (f(), g("div", {
      class: C(["dj-textarea", [e.disabled ? "is-disabled" : ""]])
    }, [
      s("div", {
        class: C(["dj-textarea__wrapper", [d.focus ? "is-focus" : ""]]),
        onClick: j
      }, [
        s("textarea", {
          id: e.id,
          ref_key: "textareaRef",
          ref: o,
          class: "dj-textarea__inner",
          rows: e.rows,
          cols: e.cols,
          placeholder: e.placeholder,
          disabled: e.disabled,
          value: e.modelValue,
          onInput: m,
          onChange: c,
          onFocus: t,
          onFocusout: v
        }, null, 40, hs)
      ], 2)
    ], 2));
  }
}), _s = { class: "dj-video__inner" }, ys = { class: "dj-video-source" }, bs = { class: "dj-video-source__wrapper" }, ws = { class: "dj-video-source__content" }, js = ["src"], Cs = ["src"], ks = ["src"], Ts = { class: "dj-video-progress__wrapper" }, xs = { class: "dj-video-button__wrapper" }, $s = ["disabled"], Ps = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Ss = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Ms = [
  Ss
], Fs = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, Vs = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), As = [
  Vs
], Es = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Ls = /* @__PURE__ */ fe('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), Bs = [
  Ls
], Is = { class: "dj-video-progress__inner" }, Os = { class: "dj-video-progress__start-time" }, Ds = { class: "dj-video-progress__content" }, zs = { class: "dj-video-progress__end-time" }, Rs = { class: "dj-video-button__wrapper" }, Hs = { class: "dj-video-button__group" }, Ns = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Us = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85"
}, null, -1), qs = [
  Us
], Js = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Ks = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7L7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91c-.36.15-.58.53-.58.92c0 .72.73 1.18 1.39.91c.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 1 0 1.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0M19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-3.83-2.4-7.11-5.78-8.4c-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12m-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7M16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24"
}, null, -1), Ws = [
  Ks
], Gs = { class: "dj-video-button__group-menu" }, Xs = { class: "dj-video-button__group-menu__wrapper" }, Qs = { class: "dj-video-volume" }, Ys = { class: "dj-video-volume__wrapper" }, Zs = { class: "dj-video-volume__inner" }, en = { class: "dj-video-volume-progress" }, tn = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, on = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06"
}, null, -1), sn = [
  on
], nn = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, rn = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm8.75-4.5H13V5h5.75A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.92c.313.11.65.17 1 .17h.5v5.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75M15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06z"
}, null, -1), an = [
  rn
], ln = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, cn = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M9.793 12.793a1 1 0 0 1 1.497 1.32l-.083.094L6.414 19H9a1 1 0 0 1 .117 1.993L9 21H4a1 1 0 0 1-.993-.883L3 20v-5a1 1 0 0 1 1.993-.117L5 15v2.586zM20 3a1 1 0 0 1 .993.883L21 4v5a1 1 0 0 1-1.993.117L19 9V6.414l-4.793 4.793a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5H15a1 1 0 0 1-.117-1.993L15 3z"
  })
], -1), dn = [
  cn
], un = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, pn = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M11 12a1 1 0 0 1 .993.883L12 13v5a1 1 0 0 1-1.993.117L10 18v-2.586l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094L8.586 14H6a1 1 0 0 1-.117-1.993L6 12zm8.293-8.707a1 1 0 0 1 1.497 1.32l-.083.094L15.414 10H18a1 1 0 0 1 .117 1.993L18 12h-5a1 1 0 0 1-.993-.883L12 11V6a1 1 0 0 1 1.993-.117L14 6v2.586z"
  })
], -1), fn = [
  pn
], gn = { class: "dj-video-volumePrompt__wrapper" }, hn = y({
  name: "dj-video"
}), vn = /* @__PURE__ */ y({
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
    minWidth: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "100%"
    },
    minHeight: {
      type: String,
      default: ""
    }
  },
  emits: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "enterpictureinpicture", "leavepictureinpicture"],
  setup(e, { emit: r }) {
    const a = e, i = r, o = P(), d = P(), c = P(), m = P(), t = L({
      error: !1,
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      mute: !1,
      volume: 1,
      volumeBackup: 1,
      volumeProgress: 100,
      isVolumePrompt: !1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00",
      isMove: !1,
      fullscreen: !1,
      pictureInPicture: !1
    }), v = () => {
      l(o).play();
    }, j = () => {
      l(o).pause();
    }, S = () => {
      Po() || (t.paused = !t.paused, t.paused ? j() : v());
    }, b = () => {
      try {
        const n = l(o), u = l(d);
        n === document.pictureInPictureElement && document.exitPictureInPicture(), u !== document.fullscreenElement ? u.requestFullscreen ? u.requestFullscreen() : u.mozRequestFullScreen ? u.mozRequestFullScreen() : u.webkitRequestFullscreen ? u.webkitRequestFullscreen() : u.msRequestFullscreen && u.msRequestFullscreen() : (n.style.height = a.height, document.exitFullscreen());
      } catch (n) {
        console.error(`Failed to toggle fullscreen mode: ${n}`);
      }
    }, M = () => {
      try {
        "pictureInPictureEnabled" in document && l(o) && typeof l(o).requestPictureInPicture == "function" && (l(o) !== document.pictureInPictureElement ? l(o).requestPictureInPicture() : document.exitPictureInPicture());
      } catch (n) {
        console.error(`Failed to toggle Picture-in-Picture mode: ${n}`);
      }
    }, B = () => {
      try {
        t.mute = !t.mute;
        const n = l(o);
        t.mute ? (t.volumeBackup = t.volume, t.volume = 0, t.volumeProgress = 0, n.volume = 0) : (t.volumeProgress = t.volumeBackup * 100, t.volume = t.volumeBackup, n.volume = t.volume);
      } catch {
      }
    }, A = () => {
      const n = l(c);
      n && clearTimeout(n), c.value = setTimeout(() => {
        t.isMove = !1;
      }, 1500);
    }, _ = () => {
      const n = l(c);
      n && (clearTimeout(n), t.isMove = !0), A();
    }, z = (n) => {
      i("abort", n);
    }, N = (n) => {
      t.waiting = !1, i("canplay", n);
    }, U = (n) => {
      var u;
      try {
        t.waiting = !1, t.duration = H((u = l(o)) == null ? void 0 : u.duration), i("canplaythrough", n);
      } catch {
      }
    }, q = (n) => {
      i("durationchange", n);
    }, p = (n) => {
      i("emptied", n);
    }, w = (n) => {
      t.paused = !0, i("ended", n);
    }, T = (n) => {
      t.error = !0, i("error", n);
    }, F = (n) => {
      i("loadeddata", n);
    }, ke = (n) => {
      i("loadedmetadata", n);
    }, Te = (n) => {
      i("loadstart", n);
    }, xe = (n) => {
      t.paused = !0, i("pause", n);
    }, $e = (n) => {
      t.paused = !1, i("play", n);
    }, Pe = (n) => {
      i("playing", n);
    }, Se = (n) => {
      i("progress", n);
    }, Me = (n) => {
      i("ratechange", n);
    }, Fe = (n) => {
      i("seeked", n);
    }, Ve = (n) => {
      i("seeking", n);
    }, Ae = (n) => {
      i("stalled", n);
    }, Ee = (n) => {
      i("suspend", n);
    }, Le = (n) => {
      var V, se, ne, re, ae;
      try {
        t.currentTime = H((V = l(o)) == null ? void 0 : V.currentTime), t.isDragProgress || (t.progress = parseFloat(Ce((se = l(o)) == null ? void 0 : se.duration, (ne = l(o)) == null ? void 0 : ne.currentTime).toFixed(2)));
        var u = (re = l(o)) == null ? void 0 : re.buffered;
        t.buffered = parseFloat((u.end(u.length - 1) / ((ae = l(o)) == null ? void 0 : ae.duration) * 100).toFixed(2)), i("timeupdate", n);
      } catch {
      }
    }, Be = (n) => {
      const u = n.target.volume;
      t.volume = u, t.volumeProgress = Math.floor(u * 100), u == 0 ? t.mute = !0 : t.mute = !1, i("volumechange", n);
    }, Ie = (n) => {
      t.waiting = !0, i("waiting", n);
    }, Oe = (n) => {
      try {
        l(d) === document.fullscreenElement ? t.fullscreen = !0 : t.fullscreen = !1, i("fullscreenchange", n);
      } catch {
      }
    }, De = (n) => {
      t.pictureInPicture = !0, i("enterpictureinpicture", n);
    }, ze = (n) => {
      t.pictureInPicture = !1, i("leavepictureinpicture", n);
    }, Re = () => {
      var n;
      try {
        l(o).currentTime = t.progress / 100 * ((n = l(o)) == null ? void 0 : n.duration), t.isDragProgress = !1;
      } catch {
      }
    }, ee = () => {
      t.isMove = !0;
    }, He = () => {
      t.isMove = !1;
    }, Ne = () => {
      _();
    }, Ue = () => {
      try {
        const n = l(o), u = t.volumeProgress / 100;
        t.volume = u, t.volumeBackup = u, n.volume = u, u == 0 ? t.mute = !0 : t.mute = !1;
      } catch {
      }
    }, te = (n) => {
      try {
        switch (n.keyCode) {
          case 32:
            n.preventDefault(), t.paused ? l(o).play() : l(o).pause();
            break;
          case 37:
            n.preventDefault(), l(o).currentTime -= 5;
            break;
          case 39:
            if (n.preventDefault(), t.paused)
              return;
            l(o).currentTime += 5;
            break;
          case 38:
            n.preventDefault(), l(o).volume = (l(o).volume + 0.05).toFixed(2), oe();
            break;
          case 40:
            n.preventDefault(), l(o).volume = (l(o).volume - 0.05).toFixed(2), oe();
            break;
        }
      } catch {
      }
    }, oe = () => {
      t.isVolumePrompt = !0, l(m) && clearTimeout(l(m)), m.value = setTimeout(() => {
        t.isVolumePrompt = !1;
      }, 1500);
    }, qe = () => {
      l(o).load(), t.error = !1;
    };
    return G(() => {
      document.addEventListener("keydown", te);
    }), We(() => {
      document.removeEventListener("keydown", te);
    }), (n, u) => (f(), g("div", {
      class: "dj-video",
      style: x({ width: e.width, minWidth: e.minWidth })
    }, [
      s("div", {
        class: C(["dj-video__wrapper", [t.paused ? "" : "is-play"]])
      }, [
        s("div", _s, [
          s("div", ys, [
            s("div", bs, [
              s("div", {
                class: "dj-video-source__inner",
                style: x({ height: e.height, minHeight: e.minHeight }),
                ref_key: "videoFullScreenElementRef",
                ref: d,
                onMouseenter: ee,
                onMouseleave: He,
                onMousemove: Ne,
                onFullscreenchange: Oe
              }, [
                s("div", ws, [
                  s("video", {
                    ref_key: "videoRef",
                    ref: o,
                    preload: "auto",
                    controls: !1,
                    "h5-playsinline": "",
                    "x5-video-player-fullscreen": "false",
                    "webkit-playsinline": "false",
                    playsinline: "false",
                    onClick: S,
                    onAbort: z,
                    onCanplay: N,
                    onCanplaythrough: U,
                    onDurationchange: q,
                    onEmptied: p,
                    onEnded: w,
                    onError: T,
                    onLoadeddata: F,
                    onLoadedmetadata: ke,
                    onLoadstart: Te,
                    onPause: xe,
                    onPlay: $e,
                    onPlaying: Pe,
                    onProgress: Se,
                    onRatechange: Me,
                    onSeeked: Fe,
                    onSeeking: Ve,
                    onStalled: Ae,
                    onSuspend: Ee,
                    onTimeupdate: Le,
                    onVolumechange: Be,
                    onWaiting: Ie,
                    onEnterpictureinpicture: De,
                    onLeavepictureinpicture: ze
                  }, [
                    s("source", {
                      src: e.src,
                      type: "video/mp4"
                    }, null, 8, js),
                    s("source", {
                      src: e.src,
                      type: "video/ogg"
                    }, null, 8, Cs),
                    s("source", {
                      src: e.src,
                      type: "video/webm"
                    }, null, 8, ks)
                  ], 544)
                ]),
                s("div", {
                  class: C(["dj-video-progress", [t.paused || t.isMove ? "is-show" : ""]]),
                  onMouseenter: ee
                }, [
                  s("div", Ts, [
                    s("div", xs, [
                      s("button", {
                        class: "dj-video-button__play",
                        disabled: t.waiting,
                        onClick: S
                      }, [
                        t.waiting ? (f(), g("svg", Es, Bs)) : (f(), g(X, { key: 0 }, [
                          t.paused ? (f(), g("svg", Ps, Ms)) : (f(), g("svg", Fs, As))
                        ], 64))
                      ], 8, $s)
                    ]),
                    s("div", Is, [
                      s("span", Os, k(t.currentTime), 1),
                      s("div", Ds, [
                        s("div", {
                          class: "dj-video-buffered__bar",
                          style: x({ "--buffer-value": `${t.buffered}%` })
                        }, null, 4),
                        K(s("input", {
                          type: "range",
                          style: x({ "--progress-value": `${t.progress}%` }),
                          "onUpdate:modelValue": u[0] || (u[0] = (V) => t.progress = V),
                          onMousedown: u[1] || (u[1] = (V) => t.isDragProgress = !0),
                          onMouseup: Re
                        }, null, 36), [
                          [W, t.progress]
                        ])
                      ]),
                      s("span", zs, k(t.duration), 1)
                    ]),
                    s("div", Rs, [
                      s("div", Hs, [
                        s("button", {
                          class: "dj-video-button__volume",
                          onClick: B
                        }, [
                          t.mute ? (f(), g("svg", Js, Ws)) : (f(), g("svg", Ns, qs))
                        ]),
                        s("div", Gs, [
                          s("div", Xs, [
                            s("div", Qs, [
                              s("div", Ys, [
                                s("div", Zs, [
                                  s("div", en, [
                                    K(s("input", {
                                      type: "range",
                                      style: x({ "--volume-progress-value": `${t.volumeProgress}%` }),
                                      "onUpdate:modelValue": u[2] || (u[2] = (V) => t.volumeProgress = V),
                                      onInput: Ue
                                    }, null, 36), [
                                      [W, t.volumeProgress]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      s("button", {
                        class: "dj-video-button__picture",
                        onClick: M
                      }, [
                        t.pictureInPicture ? (f(), g("svg", nn, an)) : (f(), g("svg", tn, sn))
                      ]),
                      s("button", {
                        class: "dj-video-button__screen",
                        onClick: b
                      }, [
                        t.fullscreen ? (f(), g("svg", un, fn)) : (f(), g("svg", ln, dn))
                      ])
                    ])
                  ])
                ], 34),
                s("div", {
                  class: C(["dj-video-volumePrompt", [t.paused || t.isMove ? "is-move" : "", t.isVolumePrompt ? "is-show" : ""]])
                }, [
                  s("div", gn, k(t.volumeProgress + "%"), 1)
                ], 2),
                s("div", {
                  class: C(["dj-video-error-message", [t.error ? "is-error" : ""]])
                }, [
                  s("div", { class: "dj-video-error-message__wrapper" }, [
                    s("button", {
                      class: "dj-video-error-restart",
                      onClick: qe
                    }, "ERRROR RESTART")
                  ])
                ], 2)
              ], 36)
            ])
          ])
        ])
      ], 2)
    ], 4));
  }
}), mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: xo,
  DJAudio: Wo,
  DJButton: Qo,
  DJCard: os,
  DJDivider: rs,
  DJInput: gs,
  DJTextarea: ms,
  DJVideo: vn
}, Symbol.toStringTag, { value: "Module" })), yn = {
  install(e) {
    bo(mn, (r) => {
      e.component(r.name, r);
    });
  }
};
export {
  yn as default
};
