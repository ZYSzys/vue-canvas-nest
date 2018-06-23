# vue-canvas-nest

[![NPM version](https://img.shields.io/npm/v/vue-canvas-nest.svg?style=flat)](https://npmjs.org/package/vue-canvas-nest)
[![Travis CI](https://travis-ci.org/ZYSzys/vue-canvas-nest.svg?branch=master)](https://travis-ci.org/ZYSzys/vue-canvas-nest)
[![NPM downloads](http://img.shields.io/npm/dm/vue-canvas-nest.svg?style=flat)](https://npmjs.org/package/vue-canvas-nest)
[![license](https://img.shields.io/github/license/ZYSzys/vue-canvas-nest.svg)](https://github.com/ZYSzys/vue-canvas-nest/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A Vue.js component for canvas-nest.

![screenshot](/screenshot.png)

## Install

``` bash
# install dependencies
npm i vue-canvas-nest

# or use yarn
yarn add vue-canvas-nest
```

## Usage

### Registe component
```js
import vueCanvasNest from 'vue-canvas-nest'
export default {
    components: { vueCanvasNest }
}

```

### How to use

#### Simply use:
```html
<vue-canvas-nest></vue-canvas-nest>
```

#### With config:
```html
<vue-canvas-nest :config="{color:'255,0,0', count: 88}"></vue-canvas-nest>
```

## Contributors
- [ZYSzys](https://github.com/ZYSzys)

## Thanks
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)

## License

[MIT](https://github.com/ZYSzys/vue-canvas-nest/blob/master/LICENSE).
