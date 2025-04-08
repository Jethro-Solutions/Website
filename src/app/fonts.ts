import { IBM_Plex_Mono, Playfair_Display, Inter } from 'next/font/google';
// When premium fonts are available, uncomment this import:
// import localFont from 'next/font/local';

// Import IBM Plex Mono from Google Fonts
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

// Use Playfair Display as placeholder for Season Serif
export const seasonSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-season-serif',
  display: 'swap',
});

/* REPLACE WITH THIS WHEN PREMIUM FONTS ARE AVAILABLE:
export const seasonSerif = localFont({
  src: [
    {
      path: '../fonts/SeasonSerifRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SeasonSerifMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SeasonSerifBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-season-serif',
  display: 'swap',
});
*/

// Use Inter as placeholder for Aeonik
export const aeonik = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-aeonik',
  display: 'swap',
});

/* REPLACE WITH THIS WHEN PREMIUM FONTS ARE AVAILABLE:
export const aeonik = localFont({
  src: [
    {
      path: '../fonts/AeonikRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AeonikMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AeonikBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
  display: 'swap',
});
*/ 