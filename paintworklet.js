registerPaint('ripple', class {
  static get inputProperties() { return ['--background-color', '--triangle-size', '--distance', '--direction']; }
  paint(ctx, geom, properties) {
    const bgColor = properties.get('--background-color').toString();
    const size = parseFloat(properties.get('--triangle-size').toString());
    const distance = parseFloat(properties.get('--distance').toString());
    const direction = parseFloat(properties.get('--direction').toString());

    ctx.fillStyle = bgColor;
    ctx.fillRect(size * .6, 0, geom.width - size, geom.height);

    ctx.beginPath();
    ctx.moveTo(0, distance);
    ctx.lineTo(size * .6, distance - size / 2);
    ctx.lineTo(size * .6, distance + size / 2);

    ctx.fill();
  }
});