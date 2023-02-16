# Smartable Editor

源于公司官网需求而开发的简易版拖拽生成静态页面编辑器，当前版本定义为 `v1.0.0-aplha`

## 快速上手

项目内部  `Git` 仓库代号 `bst-official-editor`，基于 `Nuxt` 框架搭建，分为 `client` 和 `server` 端。前者提供功能服务，后者提供接口服务。

代码仓库

```bash
# Clone with SSH
$ git@git.tz.com:webfront/bst-official-editor.git

# Clone with HTTP
$ http://git.tz.com/webfront/bst-official-editor.git
```

项目启动

```bash
# ----------- client side -----------

# install dependencies
$ yarn install

# start the serve at localhost:3000
$ yarn dev

# ----------- server side -----------

# go to server content
$ cd server

# install dependencies
$ yarn install

# start the serve at localhost:1000
$ yarn start
```

## 编辑器

编辑器整体布局分为四部分：工具栏、组件区域、画布区域和属性控制区域。大致流程是：将组件区域的组件拖拽到画布中进行渲染，然后通过右侧属性控制区域对组件的状态进行自定义。

### 组件介绍

在讲组件之前，我们应该先了解，画布如何渲染一个组件。在 Vue 中，`render` 函数是最理想的动态渲染组件的方式，而 `render` 的前置条件是视图模型数据。所以，通过公共混合给所有组件加上 `drag` 相关事件，且每个组件背后关联着与渲染有关的视图数据，通过拖拽 API 完成从起始点到终点的数据传输，及被拖拽组件的视图数据传给画布进行 `render` 渲染。

组件的视图模型数据结构：
- name：组件名称
- props：属性集合
- animation：动画
- children：子组件视图模型

> 关于拖拽详情参考 MDN [HTML 拖放 API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)

### 画布介绍

用户拖拽目标组件，放置在画布上进行渲染，同时可以修改右侧组件相关属性，更新组件呈现状态。

#### 移动组件

基于 `mouse/move` 混合模块，跟随鼠标操作实时改变影响组件绝对定位的 `top` 和 `left` 属性。

#### 缩放组件

抽象 `Shape` 组件，具备（左上、上、右上、右、右下、下、左下、左）八个方位点，用于控制目标组件（宽度、高度、X坐标、Y坐标）四个属性值，每个点继承自 `mouse/move` 混合模块，每当移动相关点位时，实时更改它所作用的属性值。

#### 切换属性控制台

不同类型的组件配置项是不同的，因此需要根据选中的活动组件，动态切换属性控制台。

#### 视图模型数据收集

前往 `editor/functional/model` 混合模块进行原理讲解

#### 状态更新

通过 `proper` 状态管理模块进行数据传输

#### 自定义右键菜单

@(删除)[复制]

前往 `editor/contextmenu` 混合模块进行原理讲解

#### 事件hover

通过 `mouseenter`、`mouseleave` 模拟 `CSS hover` 伪类，详见 `event/hover` 混合

#### 动画执行

运用到 MDN [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 实现目标区域与视口在特定相交阶段，执行动画。

代码讲解参考 `plugins/viewport` 以及 `animate` 混合模块。

### 工具栏介绍

#### 撤销与恢复

代码讲解参考 `assets/js/stacker` 工具类

#### 保存

上文提到，组件的视图模型，以及层级关系都是在编辑过程中自动收集和创建的。点击保存，实际是调用 `Node 保存` 接口将当前组件树视图模型提交到后台，基于 `JSON` 格式进行持久化保存。

#### 预览

调用 `Node 详情` 接口从后台获取视图模型树形结构，通过前端 `render` 渲染达到预览的目的。

#### 编辑

同接口预览，只是将数据给到画布进行渲染。

#### 创建副本

利用 `Node 复制接口` 对当前视图模型数据进行一份拷贝，便于相似页面快速创建修改。

#### 删除视图

调用 `Node 删除` 接口，从后台物理删除当前视图模型数据。

#### 下载

点击下载，得到一个当前所有视图组成的静态页面集合的压缩包文件，将文件解压放置到 `ToC` 项目进行打包部署。