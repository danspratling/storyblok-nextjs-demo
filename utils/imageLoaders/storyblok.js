const ImageLoader = ({
  src,
  width = 0,
  height = 0,
  quality = 65,
  format,
  focal,
  grayscale,
  blur,
  rotate,
}) => {
  const filters = [
    quality ? `quality(${quality})` : "",
    format ? `format(${format})` : "",
    focal
      ? `focal(${focal.left}x${focal.top}:${focal.right}x${focal.bottom})`
      : "",
    grayscale ? `grayscale()` : "",
    blur ? `blur(${blur.radius},${blur.sigma})` : "",
    rotate ? `rotate(${rotate})` : "",
  ].filter(Boolean);

  return `${src}/m/${width}x${height}/filters:${filters.join(":")}`;
};

export default ImageLoader;
