import { defineComponent as t, openBlock as s, createElementBlock as a, createElementVNode as c, renderSlot as l } from "vue";
const r = { class: "dj-button" }, u = t({
  name: "dj-button"
}), e = /* @__PURE__ */ t({
  ...u,
  setup(o) {
    return (n, m) => (s(), a("button", r, [
      c("span", null, [
        l(n.$slots, "default")
      ])
    ]));
  }
}), _ = [e], d = {
  install(o) {
    _.forEach((n) => {
      console.log(n.name), o.component(n.name, e);
    });
  }
};
export {
  e as DJButton,
  d as default
};
