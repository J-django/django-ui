# DJANGO-UI Node API Library

[![NPM version](https://img.shields.io/npm/v/django-ui.svg)](https://npmjs.org/package/django-ui)

## Installation

```sh
npm i django-ui
```

## Usage

```js
import { createApp } from "vue";
import App from "./App.vue";
// 引入django-ui组件库
import DjangoUI from "django-ui";
// 引入django-ui样式
import "django-ui/style.css";

const app = createApp(App);
app.use(DjangoUI);
app.mount("#app");
```

```vue
<template>
  <dj-button type="primary">Primary</dj-button>
</template>
```

## 本次更新内容

| 名称            | 说明                   |
| --------------- | ---------------------- |
| dj-accordion    | Accordion（抽屉）      |
| dj-audio        | Audio（音频）          |
| dj-button       | Button（按钮）         |
| dj-button-group | Button-Group（按钮组） |
| dj-card         | Card（卡片）           |
| dj-divider      | Divider（分割线）      |
| dj-input        | Input（输入框）        |
