# vue-canvas-nest

[![Vue](https://img.shields.io/badge/Vue-2.5-brightgreen.svg)](https://vuejs.org/)
[![Travis CI](https://travis-ci.org/ZYSzys/vue-canvas-nest.svg?branch=master)](https://travis-ci.org/ZYSzys/vue-canvas-nest)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![NPM version](https://img.shields.io/npm/v/vue-canvas-nest.svg?style=flat)](https://npmjs.org/package/vue-canvas-nest)
[![NPM downloads](http://img.shields.io/npm/dm/vue-canvas-nest.svg?style=flat)](https://npmjs.org/package/vue-canvas-nest)
[![NPM downloads](http://img.shields.io/npm/dt/vue-canvas-nest.svg?style=flat)](https://npmjs.org/package/vue-canvas-nest)
[![license](https://img.shields.io/github/license/ZYSzys/vue-canvas-nest.svg)](https://github.com/ZYSzys/vue-canvas-nest/blob/master/LICENSE)


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

#### Simply use
```html
<vue-canvas-nest></vue-canvas-nest>
```

#### With config or el(area render)
```html
<vue-canvas-nest :config="{color:'255,0,0', count: 88}" :el="'#area'"></vue-canvas-nest>
```

## Config

 - **`color`**: the canvas line color, default: `'255,0,0'`; the color is (R,G,B).
 - **`opacity`**: the opacity of line (0~1), default: `0.7`.
 - **`count`**: the number of lines, default: `99`.
 - **`zIndex`**: the index of z space, default: `-1`.

 **Note: Render the whole page if no el passed by default.**

#### Example:
```js
const config = {
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99,
};
```

## Contributors
- [ZYSzys](https://github.com/ZYSzys)

## Thanks
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)

## License

[MIT](https://github.com/ZYSzys/vue-canvas-nest/blob/master/LICENSE).
