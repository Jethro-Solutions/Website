# Font Files

This directory is intended to contain the following local font files:

## Season Serif Font Family
- `SeasonSerifRegular.woff2` - Regular weight (400)
- `SeasonSerifMedium.woff2` - Medium weight (500) 
- `SeasonSerifBold.woff2` - Bold weight (700)

## Aeonik Font Family
- `AeonikRegular.woff2` - Regular weight (400)
- `AeonikMedium.woff2` - Medium weight (500)
- `AeonikBold.woff2` - Bold weight (700)

## Font Usage Instructions

1. Purchase and download the font files
2. Convert them to WOFF2 format if needed (for optimal web performance)
3. Place the files in this directory with the exact filenames listed above
4. Update `src/app/fonts.ts` to use local fonts instead of the Google Font placeholders

## Current Solution

We are currently using Google Fonts as placeholders until the premium fonts are purchased:
- **IBM Plex Mono** - Used as intended (no replacement needed)
- **Playfair Display** - Used as a placeholder for Season Serif
- **Inter** - Used as a placeholder for Aeonik

To switch to the actual font files:
1. Purchase the premium fonts
2. Add the font files to this directory
3. Update the `fonts.ts` file to use `next/font/local` instead of the Google Font placeholders 