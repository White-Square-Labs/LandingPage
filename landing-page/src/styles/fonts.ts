import localFont from '@next/font/local';

// @see https://nextjs.org/docs/api-reference/next/font
// @see https://www.youtube.com/watch?v=L8_98i_bMMA
export const TTNorms = localFont({
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    {
      path: './fonts/TT_Norms_Pro_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TT_Norms_Pro_Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TT_Norms_Pro_Light.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
});
