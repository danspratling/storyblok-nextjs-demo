// interface ImageProps {
//   src: string;
//   alt: string;
//   width?: number;
//   height?: number;
//   loading?: "eager" | "lazy";
//   crop?: "smart" | ""
//   filters: {
//     quality?: number; // 1-100
//     grayscale?: boolean;
//     focal: {
//       top: number;
//       left: number;
//       right: number;
//       bottom: number;
//     }
//     blur: number | {
//       radius: number
//       sigma: number
//     }
//     rotate: 90 | 180 | 270
//     brightness: number // -100 to 100
//   }

const Image = ({ src, alt, width, height, loading = "lazy", ...props }) => {
  const url = updateStoryblokImageParams(src, {
    width,
    height,
    filters: {
      quality: 65,
    },
  });

  // DPR isn't currently supported by storyblok image service
  // const srcset =
  //   width &&
  //   `
  //       ${url}&dpr=0.25 ${width / 4}w,
  //       ${url}&dpr=0.5 ${width / 2}w,
  //       ${url}&dpr=0.75 ${(width / 4) * 3}w,
  //       ${url},
  //       ${url}&dpr=1.5 ${width * 1.5}w,
  //       ${url}&dpr=2 ${width * 2}w,
  //       ${url}&dpr=3 ${width * 3}w`;
  const sizes = width && `(max-width: ${width}px) 100vw, ${width}px`;

  return (
    <img
      src={url}
      // srcSet={srcset}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      {...props}
    />
  );
};

export default Image;

const updateStoryblokImageParams = (
  url,
  { width = 0, height = 0, filters }
) => {
  const resize = width || height ? `${width}x${height}` : "";
  const newFilters = `filters:${[
    filters.quality ? `quality(${filters.quality})` : "",
  ]
    .filter(Boolean)
    .join(":")}`;
  return [url, "m", resize, newFilters].filter(Boolean).join("/");
};
