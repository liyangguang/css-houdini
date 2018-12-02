# css-houdini

Some helpful CSS snippets written in Houdini.

## How to use

1. Check compatibility: Browsers supporting Houdini Paint API. [Houdini readiness table](https://ishoudinireadyyet.com/).
1. Load the paint worklet `CSS.paintWorklet.addModule('paintworklet.js')`.
1. Use them in CSS. Paint worklet can be used anywhere you can put an image. e.g. `background-image`.

## 1. Tooltip: [preview](https://liyangguang.github.io/css-houdini/)
You can play around with all the CSS variables in the browser devtool.
![screenshot](https://liyangguang.github.io/css-houdini/screenshots/tooltip.png)

### Variables
```css
  background-image: paint(tooltip);  /* apply this */
  padding-left: calc(var(--triangle-size) * 1px + .5em);  /* position the text */

  --round-radius: 5;  /* corner radius of the rectangle in pixels */
  --background-color: #fff;
  --triangle-size: 16;  /* length of the long edge of the pointing triangle in pixels */
  --position: center;  /* position of the triangle on the rectangle edge. a number from 0 - 100, or a keyword 'center', default to 'center' */
  --direction: left;  /* direction of the triangle, 'top' / 'bottom' / 'left' / 'right', default to 'left'. */
  --border-color: #000;
  --border-width: 2;
```