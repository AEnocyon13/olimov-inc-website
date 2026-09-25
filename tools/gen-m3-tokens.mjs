/**
 * Generates the Material Design 3 colour tokens from a single seed colour,
 * using Google's own material-color-utilities (the same HCT engine the M3
 * spec and the Figma kit use). Output is plain CSS custom properties, so
 * nothing from this package ships to the browser.
 *
 *   npm run tokens
 *
 * Scheme variant: SchemeContent. Of the official variants, it is the one
 * that keeps the seed intact — #D3391F comes back verbatim as
 * primary-container — which is what preserves the existing brand colour.
 * SchemeTonalSpot (the M3 default) would desaturate it to #904B3D.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  argbFromHex, hexFromArgb, Hct, TonalPalette, MaterialDynamicColors, SchemeContent,
} from '@material/material-color-utilities';

const SEED = '#D3391F';

/**
 * Neutral palette chroma.
 *
 * SchemeContent derives the neutrals from the seed's own chroma, which for a
 * vermilion this saturated (C=80.6) lands at 10.1 / 14.1 and tints every
 * surface pink. M3 customisation of palettes is explicitly supported, so the
 * neutrals are pulled down while the accent palettes are left untouched:
 * primary, secondary and tertiary come out identical either way.
 *
 * For reference, M3's own default scheme (SchemeTonalSpot) uses 6 / 8.
 * Raise these back toward 10 / 14 to restore the generated warmth.
 */
const NEUTRAL_CHROMA = 4;
const NEUTRAL_VARIANT_CHROMA = 6;
// Bundled to CJS before running, so resolve against the project root
// (npm run sets cwd there) rather than import.meta.url.
const OUT = resolve(process.cwd(), 'src/styles/m3-color.css');

/** Every role the M3 spec names, in spec order. */
const ROLES = [
  'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer',
  'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer',
  'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer',
  'error', 'onError', 'errorContainer', 'onErrorContainer',
  'surface', 'onSurface', 'surfaceVariant', 'onSurfaceVariant',
  'surfaceDim', 'surfaceBright',
  'surfaceContainerLowest', 'surfaceContainerLow', 'surfaceContainer',
  'surfaceContainerHigh', 'surfaceContainerHighest',
  'outline', 'outlineVariant',
  'inverseSurface', 'inverseOnSurface', 'inversePrimary',
  'background', 'onBackground', 'shadow', 'scrim', 'surfaceTint',
  'primaryFixed', 'primaryFixedDim', 'onPrimaryFixed', 'onPrimaryFixedVariant',
  'secondaryFixed', 'secondaryFixedDim', 'onSecondaryFixed', 'onSecondaryFixedVariant',
  'tertiaryFixed', 'tertiaryFixedDim', 'onTertiaryFixed', 'onTertiaryFixedVariant',
];

const kebab = (s) => s.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

function block(isDark, indent) {
  const source = Hct.fromInt(argbFromHex(SEED));
  const scheme = new SchemeContent(source, isDark, 0);
  scheme.neutralPalette = TonalPalette.fromHueAndChroma(source.hue, NEUTRAL_CHROMA);
  scheme.neutralVariantPalette = TonalPalette.fromHueAndChroma(source.hue, NEUTRAL_VARIANT_CHROMA);
  return ROLES
    .map((r) => `${indent}--md-sys-color-${kebab(r)}: ${hexFromArgb(MaterialDynamicColors[r].getArgb(scheme))};`)
    .join('\n');
}

const css = `/* ============================================================
   Material Design 3 — colour roles
   GENERATED FILE. Do not edit by hand; run \`npm run tokens\`.

   Seed: ${SEED}   Scheme: SchemeContent   Contrast: 0 (default)
   Neutral chroma: ${NEUTRAL_CHROMA} / ${NEUTRAL_VARIANT_CHROMA} (accent palettes untouched)
   Produced by @material/material-color-utilities, the reference
   implementation of the M3 HCT colour system.
   ============================================================ */

:root {
${block(false, '  ')}
}

@media (prefers-color-scheme: dark) {
  :root {
${block(true, '    ')}
  }
}
`;

writeFileSync(OUT, css);
console.log(`wrote ${ROLES.length} roles x 2 schemes -> src/styles/m3-color.css`);
