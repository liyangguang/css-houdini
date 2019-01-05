# css-houdini

Some helpful CSS snippets written in Houdini.

## How to use

1. Check compatibility: Check the "Paint API" row in the [Houdini readiness table](https://ishoudinireadyyet.com/).
1. Load the paint worklet `CSS.paintWorklet.addModule('paintworklet.js')`.
1. Use them in CSS!

## 1. Tooltip: [preview](https://liyangguang.github.io/css-houdini/)
You can play around with all the CSS variables in the browser devtool.
![screenshot](https://liyangguang.github.io/css-houdini/screenshots/tooltip.png?no-cache=1)

### Usage
```css
  background-image: paint(tooltip);
```

### Customizable CSS variables
| Name | Meaning | Value |
|---|---|---|
| --direction | Direction of the triangle | 'top'/'bottom'/'left'/'right', default: 'left' |
| --position | Position of the triangle on the rectangle edge | number 0 - 100 (percentage), or a keyword 'center', default: center |
| --triangle-size | The length of the long edge of the pointing triangle | number, default: 16 |
| --round-radius | Corner radius of the rectangle in pixels | number, default: 5 |
| --background-color | Background color | default: #fff |
| --border-width | Border width | number, default: 0 |
| --border-color | Border color | color, default: #000 |

Tip: You can inspect the preview page to see them in action and play around with them.
