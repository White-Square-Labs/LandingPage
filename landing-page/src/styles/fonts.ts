import localFont from "@next/font/local";

// @see https://nextjs.org/docs/api-reference/next/font
// @see https://www.youtube.com/watch?v=L8_98i_bMMA
export const SalvatoreRoman = localFont({
  display: "swap",
  fallback: ["sans-serif"],
  src: [
    {
      path: "./fonts/SalvatoreRoman-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SalvatoreRoman-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SalvatoreRoman-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
