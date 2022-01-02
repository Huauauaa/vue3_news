# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## env

- VITE_APP_BASE_URL
- VITE_APP_STATIC_URL
- VITE_PUBLIC_PATH

## vite plugins

- plugin-svg-icons

## layouts

### basic

- BasicLayout 基础页面布局，包含了头部导航，侧边栏等。
- BlankLayout

### special

- RouteLayout: 对某些二级页面进行缓存，那么推荐你创建一个 RouteLayout，通过路由 meta 中的配置，返回 router-view 或者使用 keep-alive 包裹的 router-view。
- PageLayout

## [nprogress](https://github.com/rstacruz/nprogress)
