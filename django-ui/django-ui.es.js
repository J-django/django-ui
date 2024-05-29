import { defineComponent as b, ref as S, reactive as I, watch as Je, unref as l, onMounted as G, openBlock as f, createElementBlock as g, createElementVNode as s, normalizeClass as C, normalizeStyle as x, renderSlot as P, createTextVNode as L, toDisplayString as k, Fragment as X, withDirectives as J, vModelText as K, createStaticVNode as ge, useSlots as Q, createCommentVNode as O, withKeys as Ke, onUnmounted as Ge } from "vue";
var he = typeof global == "object" && global && global.Object === Object && global, Xe = typeof self == "object" && self && self.Object === Object && self, ve = he || Xe || Function("return this")(), R = ve.Symbol, me = Object.prototype, Qe = me.hasOwnProperty, Ye = me.toString, B = R ? R.toStringTag : void 0;
function Ze(e) {
  var n = Qe.call(e, B), i = e[B];
  try {
    e[B] = void 0;
    var d = !0;
  } catch {
  }
  var r = Ye.call(e);
  return d && (n ? e[B] = i : delete e[B]), r;
}
var et = Object.prototype, tt = et.toString;
function ot(e) {
  return tt.call(e);
}
var st = "[object Null]", rt = "[object Undefined]", le = R ? R.toStringTag : void 0;
function Y(e) {
  return e == null ? e === void 0 ? rt : st : le && le in Object(e) ? Ze(e) : ot(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var _e = Array.isArray;
function nt(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function at(e) {
  return e;
}
var it = "[object AsyncFunction]", lt = "[object Function]", ct = "[object GeneratorFunction]", dt = "[object Proxy]";
function ut(e) {
  if (!nt(e))
    return !1;
  var n = Y(e);
  return n == lt || n == ct || n == it || n == dt;
}
function pt(e, n) {
  for (var i = -1, d = e == null ? 0 : e.length; ++i < d && n(e[i], i, e) !== !1; )
    ;
  return e;
}
var ft = 9007199254740991, gt = /^(?:0|[1-9]\d*)$/;
function ht(e, n) {
  var i = typeof e;
  return n = n ?? ft, !!n && (i == "number" || i != "symbol" && gt.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var vt = 9007199254740991;
function ye(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vt;
}
function be(e) {
  return e != null && ye(e.length) && !ut(e);
}
var mt = Object.prototype;
function _t(e) {
  var n = e && e.constructor, i = typeof n == "function" && n.prototype || mt;
  return e === i;
}
function yt(e, n) {
  for (var i = -1, d = Array(e); ++i < e; )
    d[i] = n(i);
  return d;
}
var bt = "[object Arguments]";
function ce(e) {
  return Z(e) && Y(e) == bt;
}
var we = Object.prototype, wt = we.hasOwnProperty, jt = we.propertyIsEnumerable, Ct = ce(/* @__PURE__ */ function() {
  return arguments;
}()) ? ce : function(e) {
  return Z(e) && wt.call(e, "callee") && !jt.call(e, "callee");
};
function kt() {
  return !1;
}
var je = typeof exports == "object" && exports && !exports.nodeType && exports, de = je && typeof module == "object" && module && !module.nodeType && module, Tt = de && de.exports === je, ue = Tt ? ve.Buffer : void 0, xt = ue ? ue.isBuffer : void 0, Pt = xt || kt, $t = "[object Arguments]", St = "[object Array]", Mt = "[object Boolean]", Vt = "[object Date]", Ft = "[object Error]", At = "[object Function]", Et = "[object Map]", Lt = "[object Number]", It = "[object Object]", Bt = "[object RegExp]", Ot = "[object Set]", Dt = "[object String]", zt = "[object WeakMap]", Rt = "[object ArrayBuffer]", Ht = "[object DataView]", Nt = "[object Float32Array]", Ut = "[object Float64Array]", qt = "[object Int8Array]", Wt = "[object Int16Array]", Jt = "[object Int32Array]", Kt = "[object Uint8Array]", Gt = "[object Uint8ClampedArray]", Xt = "[object Uint16Array]", Qt = "[object Uint32Array]", h = {};
h[Nt] = h[Ut] = h[qt] = h[Wt] = h[Jt] = h[Kt] = h[Gt] = h[Xt] = h[Qt] = !0;
h[$t] = h[St] = h[Rt] = h[Mt] = h[Ht] = h[Vt] = h[Ft] = h[At] = h[Et] = h[Lt] = h[It] = h[Bt] = h[Ot] = h[Dt] = h[zt] = !1;
function Yt(e) {
  return Z(e) && ye(e.length) && !!h[Y(e)];
}
function Zt(e) {
  return function(n) {
    return e(n);
  };
}
var Ce = typeof exports == "object" && exports && !exports.nodeType && exports, D = Ce && typeof module == "object" && module && !module.nodeType && module, eo = D && D.exports === Ce, W = eo && he.process, pe = function() {
  try {
    var e = D && D.require && D.require("util").types;
    return e || W && W.binding && W.binding("util");
  } catch {
  }
}(), fe = pe && pe.isTypedArray, to = fe ? Zt(fe) : Yt, oo = Object.prototype, so = oo.hasOwnProperty;
function ro(e, n) {
  var i = _e(e), d = !i && Ct(e), r = !i && !d && Pt(e), a = !i && !d && !r && to(e), c = i || d || r || a, v = c ? yt(e.length, String) : [], m = v.length;
  for (var t in e)
    (n || so.call(e, t)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (t == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (t == "offset" || t == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (t == "buffer" || t == "byteLength" || t == "byteOffset") || // Skip index properties.
    ht(t, m))) && v.push(t);
  return v;
}
function no(e, n) {
  return function(i) {
    return e(n(i));
  };
}
var ao = no(Object.keys, Object);
const io = ao;
var lo = Object.prototype, co = lo.hasOwnProperty;
function uo(e) {
  if (!_t(e))
    return io(e);
  var n = [];
  for (var i in Object(e))
    co.call(e, i) && i != "constructor" && n.push(i);
  return n;
}
function po(e) {
  return be(e) ? ro(e) : uo(e);
}
function fo(e) {
  return function(n, i, d) {
    for (var r = -1, a = Object(n), c = d(n), v = c.length; v--; ) {
      var m = c[e ? v : ++r];
      if (i(a[m], m, a) === !1)
        break;
    }
    return n;
  };
}
var go = fo();
const ho = go;
function vo(e, n) {
  return e && ho(e, n, po);
}
function mo(e, n) {
  return function(i, d) {
    if (i == null)
      return i;
    if (!be(i))
      return e(i, d);
    for (var r = i.length, a = n ? r : -1, c = Object(i); (n ? a-- : ++a < r) && d(c[a], a, c) !== !1; )
      ;
    return i;
  };
}
var _o = mo(vo);
const yo = _o;
function bo(e) {
  return typeof e == "function" ? e : at;
}
function wo(e, n) {
  var i = _e(e) ? pt : yo;
  return i(e, bo(n));
}
const jo = { class: "dj-accordion" }, Co = { class: "dj-accordion__header-label" }, ko = /* @__PURE__ */ s("span", { class: "dj-accordion__header-icon" }, [
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
], -1), To = { class: "dj-accordion__inner-content" }, xo = b({
  name: "dj-accordion"
}), Po = /* @__PURE__ */ b({
  ...xo,
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
  setup(e, { emit: n }) {
    const i = e, d = n, r = S(), a = I({
      wrapperStyle: {},
      contentStyle: {}
    });
    Je(() => i.modelValue, (t) => {
      var j;
      t ? (l(r).style.display = "block", a.contentStyle = {
        overflow: "hidden",
        height: `${l(r).scrollHeight}px`,
        willChange: "height",
        transition: "height .25s"
      }) : (l(r).style.height = `${(j = l(r)) == null ? void 0 : j.scrollHeight}px`, setTimeout(() => {
        a.contentStyle = {
          transition: "height .25s",
          willChange: "height",
          height: "0px",
          overflow: "hidden"
        };
      }, 0));
    });
    const c = () => {
      d("change", !i.modelValue), d("update:modelValue", !i.modelValue);
    }, v = () => {
      i.modelValue ? (a.wrapperStyle = {}, l(r).style.display = "", a.contentStyle = {}) : (a.wrapperStyle = {}, a.contentStyle = {
        height: "0px",
        overflow: "hidden",
        display: "none"
      });
    }, m = () => {
      i.modelValue || (l(r).style.display = "none", l(r).style.height = "0", l(r).style.overflow = "hidden");
    };
    return G(() => {
      m();
    }), (t, j) => (f(), g("div", jo, [
      s("div", {
        class: C(["dj-accordion__wrapper", [i.modelValue ? "is-active" : ""]]),
        style: x(a.wrapperStyle)
      }, [
        s("button", {
          class: "dj-accordion__header",
          onClick: c
        }, [
          s("span", Co, [
            P(t.$slots, "title", {}, () => [
              L(k(i.title), 1)
            ])
          ]),
          ko
        ]),
        s("div", {
          class: "dj-accordion__inner",
          style: x(a.contentStyle),
          ref_key: "accordionRef",
          ref: r,
          onTransitionend: v
        }, [
          s("div", To, [
            P(t.$slots, "default", {}, () => [
              L(k(i.content), 1)
            ])
          ])
        ], 36)
      ], 6)
    ]));
  }
}), $o = (e) => {
  e = e.replace("#", "");
  const n = [
    parseInt(e.substr(0, 2), 16),
    // 红色通道值
    parseInt(e.substr(2, 2), 16),
    // 绿色通道值
    parseInt(e.substr(4, 2), 16)
    // 蓝色通道值
  ];
  return (0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) / 255 <= 0.5;
}, H = (e) => {
  var n = Math.floor(e % 3600 / 60), i = Math.floor(e % 3600 % 60), d = n > 0 ? n < 10 ? "0" + n : n : "00", r = i > 0 ? i < 10 ? "0" + i : i : "00";
  return d + ":" + r;
}, ke = (e, n) => n / e * 100, So = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), Mo = { class: "dj-audio" }, Vo = { class: "dj-audio-button__wrapper" }, Fo = ["disabled"], Ao = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Eo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Lo = [
  Eo
], Io = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, Bo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Oo = [
  Bo
], Do = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, zo = /* @__PURE__ */ ge('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), Ro = [
  zo
], Ho = { class: "dj-audio-progress__wrapper" }, No = { class: "dj-audio-progress__start-time" }, Uo = { class: "dj-audio-progress__inner" }, qo = ["src"], Wo = ["src"], Jo = { class: "dj-audio-progress__end-time" }, Ko = b({
  name: "dj-audio"
}), Go = /* @__PURE__ */ b({
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
  setup(e, { expose: n, emit: i }) {
    const d = e, r = S(), a = i, c = I({
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      volume: 1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00"
    }), v = () => {
      l(r).play();
    }, m = () => {
      l(r).pause();
    }, t = () => {
      c.paused = !c.paused, c.paused ? m() : v();
    }, j = (p) => {
      var w;
      c.duration = H((w = l(r)) == null ? void 0 : w.duration), c.waiting = !1, a("loadedmetadata", p);
    }, M = (p) => {
      c.waiting = !1, a("canplay", p);
    }, y = (p) => {
      c.paused = !1, l(r).volume = c.volume = 0.5, a("play", p);
    }, $ = (p) => {
      a("pause", p), c.paused = !0;
    }, A = (p) => {
      a("playing", p);
    }, E = (p) => {
      var T, V;
      var w = (T = l(r)) == null ? void 0 : T.buffered;
      c.buffered = parseFloat((w.end(w.length - 1) / ((V = l(r)) == null ? void 0 : V.duration) * 100).toFixed(2)), a("progress", p);
    }, _ = (p) => {
      var w, T, V;
      c.currentTime = H((w = l(r)) == null ? void 0 : w.currentTime), c.isDragProgress || (c.progress = parseFloat(ke((T = l(r)) == null ? void 0 : T.duration, (V = l(r)) == null ? void 0 : V.currentTime).toFixed(2))), a("timeupdate", c.progress, p);
    }, z = (p) => {
      a("seeked", p);
    }, N = (p) => {
      c.waiting = !0, a("waiting", p);
    }, U = (p) => {
      c.paused = !0, a("ended", p);
    }, q = () => {
      var p;
      l(r).currentTime = c.progress / 100 * ((p = l(r)) == null ? void 0 : p.duration), c.isDragProgress = !1;
    };
    return n({
      src: d.src,
      autoplay: d.autoplay,
      loop: d.loop,
      muted: d.muted,
      paused: () => c.paused,
      volume: () => c.volume,
      progress: () => c.progress,
      buffered: () => c.buffered,
      currentTime: () => {
        var p;
        return (p = l(r)) == null ? void 0 : p.currentTime;
      },
      duration: () => {
        var p;
        return (p = l(r)) == null ? void 0 : p.duration;
      },
      play: v,
      pause: m
    }), (p, w) => (f(), g("div", Mo, [
      s("div", {
        class: C(["dj-audio__wrapper", [c.paused ? "" : "is-play"]])
      }, [
        s("div", Vo, [
          s("button", {
            class: "dj-audio-button__play",
            disabled: c.waiting,
            onClick: t
          }, [
            c.waiting ? (f(), g("svg", Do, Ro)) : (f(), g(X, { key: 0 }, [
              c.paused ? (f(), g("svg", Ao, Lo)) : (f(), g("svg", Io, Oo))
            ], 64))
          ], 8, Fo)
        ]),
        s("div", Ho, [
          s("span", No, k(c.currentTime), 1),
          s("div", Uo, [
            s("audio", {
              class: "dj-audio-process__audio",
              ref_key: "audioRef",
              ref: r,
              preload: "auto",
              onLoadedmetadata: j,
              onProgress: E,
              onCanplay: M,
              onPlay: y,
              onPlaying: A,
              onPause: $,
              onTimeupdate: _,
              onSeeked: z,
              onWaiting: N,
              onEnded: U
            }, [
              s("source", {
                type: "audio/ogg",
                src: e.src
              }, null, 8, qo),
              s("source", {
                type: "audio/mpeg",
                src: e.src
              }, null, 8, Wo)
            ], 544),
            s("div", {
              class: "dj-audio-buffered__bar",
              style: x({ "--dj-audio-buffer-value": `${c.buffered}%` })
            }, null, 4),
            J(s("input", {
              type: "range",
              style: x({ "--dj-audio-progress-value": `${c.progress}%` }),
              "onUpdate:modelValue": w[0] || (w[0] = (T) => c.progress = T),
              onMousedown: w[1] || (w[1] = (T) => c.isDragProgress = !0),
              onMouseup: q
            }, null, 36), [
              [K, c.progress]
            ])
          ]),
          s("span", Jo, k(c.duration), 1)
        ])
      ], 2)
    ]));
  }
}), Xo = { class: "dj-button-inner" }, Qo = b({
  name: "dj-button"
}), Yo = /* @__PURE__ */ b({
  ...Qo,
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
    return (n, i) => (f(), g("button", {
      class: "dj-button",
      style: x({ "--dj-button-custom-background-color": e.color, "--dj-button-custom-color": e.color ? l($o)(e.color) ? "var(--dj-button-white-color)" : "var(--dj-button-black-color)" : "" })
    }, [
      s("span", Xo, [
        P(n.$slots, "default", {}, () => [
          L(k(e.text), 1)
        ])
      ])
    ], 4));
  }
}), Zo = {
  key: 0,
  class: "dj-card-header"
}, es = { class: "dj-card-body" }, ts = {
  key: 1,
  class: "dj-card-footer"
}, os = b({
  name: "dj-card"
}), ss = /* @__PURE__ */ b({
  ...os,
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
    const n = e, i = Q(), d = I({
      showTitle: !0,
      showFooter: !0
    });
    return G(() => {
      d.showTitle = (n.title || i.header) !== void 0, d.showFooter = (n.footer || i.footer) !== void 0;
    }), (r, a) => (f(), g("div", {
      class: C(["dj-card", [e.align]])
    }, [
      d.showTitle ? (f(), g("div", Zo, [
        P(r.$slots, "header", {}, () => [
          L(k(e.title), 1)
        ])
      ])) : O("", !0),
      s("div", es, [
        P(r.$slots, "default")
      ]),
      d.showFooter ? (f(), g("div", ts, [
        P(r.$slots, "footer", {}, () => [
          L(k(e.footer), 1)
        ])
      ])) : O("", !0)
    ], 2));
  }
}), rs = { class: "dj-divider" }, ns = b({
  name: "dj-divider"
}), as = /* @__PURE__ */ b({
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
    const n = Q();
    return (i, d) => (f(), g("div", rs, [
      s("div", {
        class: C(["dj-divider-inner", ["dj-divider-inner--" + e.type]])
      }, [
        l(n).default ? P(i.$slots, "default", { key: 0 }) : (f(), g(X, { key: 1 }, [
          L(k(e.text), 1)
        ], 64))
      ], 2)
    ]));
  }
}), is = {
  key: 0,
  class: "dj-input__prefix"
}, ls = { class: "dj-input__prefix__inner" }, cs = ["id", "placeholder", "enterkeyhint", "disabled", "value"], ds = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-x-circle-fill icon",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })
], -1), us = [
  ds
], ps = {
  key: 2,
  class: "dj-input__suffix"
}, fs = { class: "dj-input__suffix__inner" }, gs = b({
  name: "dj-input"
}), hs = /* @__PURE__ */ b({
  ...gs,
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
  setup(e, { expose: n, emit: i }) {
    const d = e, r = i, a = Q(), c = S(), v = I({
      focus: !1,
      active: !1
    }), m = (_) => {
      r("input", _.target.value), r("update:modelValue", _.target.value);
    }, t = (_) => {
      r("change", _.target.value);
    }, j = (_) => {
      v.focus = !0, r("focus", _);
    }, M = (_) => {
      v.focus = !1, r("blur", _);
    }, y = (_) => {
      r("keyup", _);
    }, $ = () => {
      l(c).focus();
    }, A = () => {
      l(c).blur();
    }, E = () => {
      r("clear", void 0), r("update:modelValue", "");
    };
    return n({ focus: $, blur: A, clear: E }), (_, z) => (f(), g("div", {
      class: C(["dj-input", [e.disabled ? "is-disabled" : ""]])
    }, [
      s("div", {
        class: C(["dj-input__wrapper", [v.focus ? "is-focus" : ""]]),
        onClick: $
      }, [
        l(a)["prefix-icon"] ? (f(), g("span", is, [
          s("span", ls, [
            P(_.$slots, "prefix-icon")
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
          onChange: t,
          onInput: m,
          onFocus: j,
          onFocusout: M,
          onKeyup: Ke(y, ["native"])
        }, null, 40, cs),
        d.clear && e.modelValue ? (f(), g("div", {
          key: 1,
          class: "dj-input__clear",
          onClick: E
        }, us)) : O("", !0),
        l(a)["suffix-icon"] ? (f(), g("span", ps, [
          s("span", fs, [
            P(_.$slots, "suffix-icon")
          ])
        ])) : O("", !0)
      ], 2)
    ], 2));
  }
}), vs = ["id", "rows", "cols", "placeholder", "disabled", "value"], ms = b({
  name: "dj-textarea"
}), _s = /* @__PURE__ */ b({
  ...ms,
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
  setup(e, { expose: n, emit: i }) {
    const d = i, r = S(), a = I({
      focus: !1,
      active: !1
    }), c = (y) => {
      d("input", y);
    }, v = (y) => {
      d("change", y), d("update:modelValue", y.target.value);
    }, m = (y) => {
      a.focus = !0, d("focus", y);
    }, t = (y) => {
      a.focus = !1, d("blur", y);
    }, j = () => {
      l(r).focus();
    };
    return n({ focus: j, blur: () => {
      l(r).blur();
    } }), (y, $) => (f(), g("div", {
      class: C(["dj-textarea", [e.disabled ? "is-disabled" : ""]])
    }, [
      s("div", {
        class: C(["dj-textarea__wrapper", [a.focus ? "is-focus" : ""]]),
        onClick: j
      }, [
        s("textarea", {
          id: e.id,
          ref_key: "textareaRef",
          ref: r,
          class: "dj-textarea__inner",
          rows: e.rows,
          cols: e.cols,
          placeholder: e.placeholder,
          disabled: e.disabled,
          value: e.modelValue,
          onInput: v,
          onChange: c,
          onFocus: m,
          onFocusout: t
        }, null, 40, vs)
      ], 2)
    ], 2));
  }
}), ys = { class: "dj-video__inner" }, bs = { class: "dj-video-source" }, ws = { class: "dj-video-source__wrapper" }, js = { class: "dj-video-source__content" }, Cs = ["src"], ks = ["src"], Ts = ["src"], xs = { class: "dj-video-progress__wrapper" }, Ps = { class: "dj-video-button__wrapper" }, $s = ["disabled"], Ss = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, Ms = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
}, null, -1), Vs = [
  Ms
], Fs = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 32 32"
}, As = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
}, null, -1), Es = [
  As
], Ls = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, Is = /* @__PURE__ */ ge('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g>', 1), Bs = [
  Is
], Os = { class: "dj-video-progress__inner" }, Ds = { class: "dj-video-progress__start-time" }, zs = { class: "dj-video-progress__content" }, Rs = { class: "dj-video-progress__end-time" }, Hs = { class: "dj-video-button__wrapper" }, Ns = { class: "dj-video-button__group" }, Us = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, qs = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85"
}, null, -1), Ws = [
  qs
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
}, null, -1), Gs = [
  Ks
], Xs = { class: "dj-video-button__group-menu" }, Qs = { class: "dj-video-button__group-menu__wrapper" }, Ys = { class: "dj-video-volume" }, Zs = { class: "dj-video-volume__wrapper" }, er = { class: "dj-video-volume__inner" }, tr = { class: "dj-video-volume-progress" }, or = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, sr = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06"
}, null, -1), rr = [
  sr
], nr = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, ar = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm8.75-4.5H13V5h5.75A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.92c.313.11.65.17 1 .17h.5v5.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75M15.94 16h-1.69a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.72-2.72a.75.75 0 1 0-1.06 1.06z"
}, null, -1), ir = [
  ar
], lr = {
  key: 0,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, cr = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M9.793 12.793a1 1 0 0 1 1.497 1.32l-.083.094L6.414 19H9a1 1 0 0 1 .117 1.993L9 21H4a1 1 0 0 1-.993-.883L3 20v-5a1 1 0 0 1 1.993-.117L5 15v2.586zM20 3a1 1 0 0 1 .993.883L21 4v5a1 1 0 0 1-1.993.117L19 9V6.414l-4.793 4.793a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5H15a1 1 0 0 1-.117-1.993L15 3z"
  })
], -1), dr = [
  cr
], ur = {
  key: 1,
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, pr = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M11 12a1 1 0 0 1 .993.883L12 13v5a1 1 0 0 1-1.993.117L10 18v-2.586l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094L8.586 14H6a1 1 0 0 1-.117-1.993L6 12zm8.293-8.707a1 1 0 0 1 1.497 1.32l-.083.094L15.414 10H18a1 1 0 0 1 .117 1.993L18 12h-5a1 1 0 0 1-.993-.883L12 11V6a1 1 0 0 1 1.993-.117L14 6v2.586z"
  })
], -1), fr = [
  pr
], gr = { class: "dj-video-volumePrompt__wrapper" }, hr = b({
  name: "dj-video"
}), vr = /* @__PURE__ */ b({
  ...hr,
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
  setup(e, { expose: n, emit: i }) {
    const d = e, r = i, a = S(), c = S(), v = S(), m = S(), t = I({
      error: !1,
      waiting: !0,
      paused: !0,
      isDragProgress: !1,
      mute: !1,
      volume: 1,
      beforeVolume: 1,
      volumeProgress: 100,
      isVolumePrompt: !1,
      progress: 0,
      buffered: 0,
      currentTime: "00:00",
      duration: "00:00",
      isMove: !1,
      fullscreen: !1,
      pictureInPicture: !1
    }), j = () => {
      l(a).play();
    }, M = () => {
      l(a).pause();
    }, y = () => {
      So() || (t.paused = !t.paused, t.paused ? M() : j());
    }, $ = () => {
      try {
        const o = l(a), u = l(c);
        o === document.pictureInPictureElement && document.exitPictureInPicture(), u !== document.fullscreenElement ? u.requestFullscreen ? u.requestFullscreen() : u.mozRequestFullScreen ? u.mozRequestFullScreen() : u.webkitRequestFullscreen ? u.webkitRequestFullscreen() : u.msRequestFullscreen && u.msRequestFullscreen() : (o.style.height = d.height, document.exitFullscreen());
      } catch (o) {
        console.error(`Failed to toggle fullscreen mode: ${o}`);
      }
    }, A = () => {
      try {
        "pictureInPictureEnabled" in document && l(a) && typeof l(a).requestPictureInPicture == "function" && (l(a) !== document.pictureInPictureElement ? l(a).requestPictureInPicture() : document.exitPictureInPicture());
      } catch (o) {
        console.error(`Failed to toggle Picture-in-Picture mode: ${o}`);
      }
    }, E = () => {
      try {
        t.mute = !t.mute;
        const o = l(a);
        t.mute ? (t.beforeVolume = t.volume, t.volume = 0, t.volumeProgress = 0, o.volume = 0) : (t.volumeProgress = t.beforeVolume * 100, t.volume = t.beforeVolume, o.volume = t.volume);
      } catch {
      }
    }, _ = () => {
      const o = l(v);
      o && clearTimeout(o), v.value = setTimeout(() => {
        t.isMove = !1;
      }, 1500);
    }, z = () => {
      const o = l(v);
      o && (clearTimeout(o), t.isMove = !0), _();
    }, N = (o) => {
      r("abort", o);
    }, U = (o) => {
      t.waiting = !1, r("canplay", o);
    }, q = (o) => {
      var u;
      try {
        t.waiting = !1, t.duration = H((u = l(a)) == null ? void 0 : u.duration), r("canplaythrough", o);
      } catch {
      }
    }, p = (o) => {
      r("durationchange", o);
    }, w = (o) => {
      r("emptied", o);
    }, T = (o) => {
      t.paused = !0, r("ended", o);
    }, V = (o) => {
      t.error = !0, r("error", o);
    }, Te = (o) => {
      r("loadeddata", o);
    }, xe = (o) => {
      r("loadedmetadata", o);
    }, Pe = (o) => {
      r("loadstart", o);
    }, $e = (o) => {
      t.paused = !0, r("pause", o);
    }, Se = (o) => {
      t.paused = !1, r("play", o);
    }, Me = (o) => {
      r("playing", o);
    }, Ve = (o) => {
      r("progress", o);
    }, Fe = (o) => {
      r("ratechange", o);
    }, Ae = (o) => {
      r("seeked", o);
    }, Ee = (o) => {
      r("seeking", o);
    }, Le = (o) => {
      r("stalled", o);
    }, Ie = (o) => {
      r("suspend", o);
    }, Be = (o) => {
      var F, re, ne, ae, ie;
      try {
        t.currentTime = H((F = l(a)) == null ? void 0 : F.currentTime), t.isDragProgress || (t.progress = parseFloat(ke((re = l(a)) == null ? void 0 : re.duration, (ne = l(a)) == null ? void 0 : ne.currentTime).toFixed(2)));
        var u = (ae = l(a)) == null ? void 0 : ae.buffered;
        t.buffered = parseFloat((u.end(u.length - 1) / ((ie = l(a)) == null ? void 0 : ie.duration) * 100).toFixed(2)), r("timeupdate", o);
      } catch {
      }
    }, Oe = (o) => {
      const u = o.target.volume;
      t.volume = u, t.volumeProgress = Math.floor(u * 100), u == 0 ? t.mute = !0 : t.mute = !1, r("volumechange", o);
    }, De = (o) => {
      t.waiting = !0, r("waiting", o);
    }, ze = (o) => {
      try {
        l(c) === document.fullscreenElement ? t.fullscreen = !0 : t.fullscreen = !1, r("fullscreenchange", o);
      } catch {
      }
    }, Re = (o) => {
      t.pictureInPicture = !0, r("enterpictureinpicture", o);
    }, He = (o) => {
      t.pictureInPicture = !1, r("leavepictureinpicture", o);
    }, Ne = () => {
      var o;
      try {
        l(a).currentTime = t.progress / 100 * ((o = l(a)) == null ? void 0 : o.duration), t.isDragProgress = !1;
      } catch {
      }
    }, ee = () => {
      t.isMove = !0;
    }, Ue = () => {
      t.isMove = !1;
    }, qe = () => {
      z();
    }, We = () => {
      try {
        const o = l(a), u = t.volumeProgress / 100;
        t.volume = u, t.beforeVolume = u, o.volume = u, u == 0 ? t.mute = !0 : t.mute = !1;
      } catch {
      }
    }, te = (o) => {
      try {
        switch (o.keyCode) {
          case 32:
            o.preventDefault(), t.paused ? l(a).play() : l(a).pause();
            break;
          case 37:
            o.preventDefault(), l(a).currentTime -= 5;
            break;
          case 39:
            if (o.preventDefault(), t.paused)
              return;
            l(a).currentTime += 5;
            break;
          case 38:
            o.preventDefault(), l(a).volume = (l(a).volume + 0.05).toFixed(2), oe();
            break;
          case 40:
            o.preventDefault(), l(a).volume = (l(a).volume - 0.05).toFixed(2), oe();
            break;
        }
      } catch {
      }
    }, oe = () => {
      t.isVolumePrompt = !0, l(m) && clearTimeout(l(m)), m.value = setTimeout(() => {
        t.isVolumePrompt = !1;
      }, 1500);
    }, se = () => {
      l(a).load(), t.error = !1;
    };
    return G(() => {
      document.addEventListener("keydown", te);
    }), Ge(() => {
      document.removeEventListener("keydown", te);
    }), n({
      src: d.src,
      width: d.width,
      minWidth: d.minWidth,
      height: d.height,
      minHeight: d.minHeight,
      error: () => t.error,
      waiting: () => t.waiting,
      paused: () => t.paused,
      mute: () => t.mute,
      volume: () => t.volume,
      beforeVolume: () => t.beforeVolume,
      volumeProgress: () => t.volumeProgress,
      progress: () => t.progress,
      buffered: () => {
        var o;
        return (o = l(a)) == null ? void 0 : o.buffered;
      },
      currentTime: () => {
        var o;
        return (o = l(a)) == null ? void 0 : o.currentTime;
      },
      duration: () => {
        var o;
        return (o = l(a)) == null ? void 0 : o.duration;
      },
      fullscreen: () => t.fullscreen,
      pictureInPicture: () => t.pictureInPicture,
      toggleFullScreen: $,
      togglePictureInPicture: A,
      play: j,
      pause: M,
      load: se
    }), (o, u) => (f(), g("div", {
      class: "dj-video",
      style: x({ width: e.width, minWidth: e.minWidth })
    }, [
      s("div", {
        class: C(["dj-video__wrapper", [t.paused ? "" : "is-play"]])
      }, [
        s("div", ys, [
          s("div", bs, [
            s("div", ws, [
              s("div", {
                class: "dj-video-source__inner",
                style: x({ height: e.height, minHeight: e.minHeight }),
                ref_key: "videoFullScreenElementRef",
                ref: c,
                onMouseenter: ee,
                onMouseleave: Ue,
                onMousemove: qe,
                onFullscreenchange: ze
              }, [
                s("div", js, [
                  s("video", {
                    ref_key: "videoRef",
                    ref: a,
                    preload: "auto",
                    controls: !1,
                    "h5-playsinline": "",
                    "x5-video-player-fullscreen": "false",
                    "webkit-playsinline": "false",
                    playsinline: "false",
                    onClick: y,
                    onAbort: N,
                    onCanplay: U,
                    onCanplaythrough: q,
                    onDurationchange: p,
                    onEmptied: w,
                    onEnded: T,
                    onError: V,
                    onLoadeddata: Te,
                    onLoadedmetadata: xe,
                    onLoadstart: Pe,
                    onPause: $e,
                    onPlay: Se,
                    onPlaying: Me,
                    onProgress: Ve,
                    onRatechange: Fe,
                    onSeeked: Ae,
                    onSeeking: Ee,
                    onStalled: Le,
                    onSuspend: Ie,
                    onTimeupdate: Be,
                    onVolumechange: Oe,
                    onWaiting: De,
                    onEnterpictureinpicture: Re,
                    onLeavepictureinpicture: He
                  }, [
                    s("source", {
                      src: e.src,
                      type: "video/mp4"
                    }, null, 8, Cs),
                    s("source", {
                      src: e.src,
                      type: "video/ogg"
                    }, null, 8, ks),
                    s("source", {
                      src: e.src,
                      type: "video/webm"
                    }, null, 8, Ts)
                  ], 544)
                ]),
                s("div", {
                  class: C(["dj-video-progress", [t.paused || t.isMove ? "is-show" : ""]]),
                  onMouseenter: ee
                }, [
                  s("div", xs, [
                    s("div", Ps, [
                      s("button", {
                        class: "dj-video-button__play",
                        disabled: t.waiting,
                        onClick: y
                      }, [
                        t.waiting ? (f(), g("svg", Ls, Bs)) : (f(), g(X, { key: 0 }, [
                          t.paused ? (f(), g("svg", Ss, Vs)) : (f(), g("svg", Fs, Es))
                        ], 64))
                      ], 8, $s)
                    ]),
                    s("div", Os, [
                      s("span", Ds, k(t.currentTime), 1),
                      s("div", zs, [
                        s("div", {
                          class: "dj-video-buffered__bar",
                          style: x({ "--buffer-value": `${t.buffered}%` })
                        }, null, 4),
                        J(s("input", {
                          type: "range",
                          style: x({ "--progress-value": `${t.progress}%` }),
                          "onUpdate:modelValue": u[0] || (u[0] = (F) => t.progress = F),
                          onMousedown: u[1] || (u[1] = (F) => t.isDragProgress = !0),
                          onMouseup: Ne
                        }, null, 36), [
                          [K, t.progress]
                        ])
                      ]),
                      s("span", Rs, k(t.duration), 1)
                    ]),
                    s("div", Hs, [
                      s("div", Ns, [
                        s("button", {
                          class: "dj-video-button__volume",
                          onClick: E
                        }, [
                          t.mute ? (f(), g("svg", Js, Gs)) : (f(), g("svg", Us, Ws))
                        ]),
                        s("div", Xs, [
                          s("div", Qs, [
                            s("div", Ys, [
                              s("div", Zs, [
                                s("div", er, [
                                  s("div", tr, [
                                    J(s("input", {
                                      type: "range",
                                      style: x({ "--volume-progress-value": `${t.volumeProgress}%` }),
                                      "onUpdate:modelValue": u[2] || (u[2] = (F) => t.volumeProgress = F),
                                      onInput: We
                                    }, null, 36), [
                                      [K, t.volumeProgress]
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
                        onClick: A
                      }, [
                        t.pictureInPicture ? (f(), g("svg", nr, ir)) : (f(), g("svg", or, rr))
                      ]),
                      s("button", {
                        class: "dj-video-button__screen",
                        onClick: $
                      }, [
                        t.fullscreen ? (f(), g("svg", ur, fr)) : (f(), g("svg", lr, dr))
                      ])
                    ])
                  ])
                ], 34),
                s("div", {
                  class: C(["dj-video-volumePrompt", [t.paused || t.isMove ? "is-move" : "", t.isVolumePrompt ? "is-show" : ""]])
                }, [
                  s("div", gr, k(t.volumeProgress + "%"), 1)
                ], 2),
                s("div", {
                  class: C(["dj-video-error-message", [t.error ? "is-error" : ""]])
                }, [
                  s("div", { class: "dj-video-error-message__wrapper" }, [
                    s("button", {
                      class: "dj-video-error-restart",
                      onClick: se
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
}), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DJAccordion: Po,
  DJAudio: Go,
  DJButton: Yo,
  DJCard: ss,
  DJDivider: as,
  DJInput: hs,
  DJTextarea: _s,
  DJVideo: vr
}, Symbol.toStringTag, { value: "Module" })), yr = {
  install(e) {
    wo(mr, (n) => {
      e.component(n.name, n);
    });
  }
};
export {
  yr as default
};
