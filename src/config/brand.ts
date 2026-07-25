/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'AERANTIS HOLDINGS',
  tagline: 'Creating Value. Inspiring Confidence.',
  description:
    'Aerantis Holdings provides trusted property solutions, project coordination and client support, delivering quality, professionalism and long-term value for every client.',
  url: 'https://aerantisholdings.com.au',
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // Serif display for editorial headings; sans-serif for body/UI.
  // Keep this in sync with astro.config.mjs — see documentation/tasks/04-swap-display-font.md.
  fonts: {
    body: 'Inter',
    display: 'Cormorant Garamond',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // Near-black + charcoal grounds, warm ivory type, metallic gold accents.
  // Update src/styles/theme.css to mirror these values (Task 02).
  colors: {
    // Metallic gold — used for primary CTAs, active states, gold hairline rules.
    primary:      '#C9A24A',
    primaryLight: '#E4C77A',
    primaryFg:    '#0B0B0C',

    // Slightly brighter gold used for accents and eyebrows.
    accent:       '#D9B564',
    accentFg:     '#0B0B0C',

    // Dark-first neutrals.
    background:   '#0B0B0C', // near-black page ground
    surface:      '#141416', // charcoal surface for cards / trust strip
    border:       '#8A6E3E', // muted gold hairline

    // Warm ivory type.
    text:         '#F5EEDC',
    textMuted:    '#B9AE93',

    // Dark tokens (dark == background here since the site is dark-first).
    dark:         '#0B0B0C',
    darkSurface:  '#141416',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  // Square or barely-softened corners. `full` stays for round social icons.
  radius: {
    sm:   '0',
    md:   '2px',
    lg:   '4px',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
