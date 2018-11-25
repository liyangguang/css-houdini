registerPaint('ripple', class {
  static get inputProperties() {
    return [
      '--round-radius',
      '--background-color',
      '--border-color',
      '--triangle-size',
      '--position',
      '--direction',
    ];
  }
  paint(ctx, geom, properties) {
    // shape
    const radius = parseFloat(properties.get('--round-radius').toString());
    const bgColor = properties.get('--background-color').toString();
    const borderColor = properties.get('--border-color').toString();

    // position
    const triangleSize = parseFloat(properties.get('--triangle-size').toString());
    let positionValue = properties.get('--position').toString().trim();
    const trianglePosition = (positionValue === 'center' ? 50 : parseFloat(positionValue)) / 100 * geom.height;
    const direction = properties.get('--direction').toString();

    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      if (typeof stroke == 'undefined') {
        stroke = true;
      }
      if (typeof radius === 'undefined') {
        radius = 5;
      }
      if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
      } else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (var side in defaultRadius) {
          radius[side] = radius[side] || defaultRadius[side];
        }
      }
      ctx.beginPath();
      ctx.moveTo(x + radius.tl, y);
      ctx.lineTo(x + width - radius.tr, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      ctx.lineTo(x + width, y + height - radius.br);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      ctx.lineTo(x, y + radius.tl);
      ctx.quadraticCurveTo(x, y, x + radius.tl, y);
      ctx.closePath();
      if (fill) {
        ctx.fill();
      }
      if (stroke) {
        ctx.stroke();
      }
    }

    ctx.fillStyle = bgColor;
    ctx.strokeStyle = borderColor;
    const width = geom.width - triangleSize * .6,
          height = geom.height,
          x = triangleSize * .6,
          y = 0;
    roundRect(ctx, x, y, width, height, radius, true, borderColor);
    // ctx.fillRect(x, y, width, height);

    ctx.beginPath();
    ctx.moveTo(0, trianglePosition);
    ctx.lineTo(triangleSize * .6, trianglePosition - triangleSize / 2);
    ctx.lineTo(triangleSize * .6, trianglePosition + triangleSize / 2);

    ctx.fill();
  }
});