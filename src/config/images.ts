/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to swap placeholder images for the owner's real photos.
 * Astro optimises every local image at build time (WebP/AVIF, srcset,
 * CLS-safe dimensions).
 *
 * HOW TO ADD OWNER-SUPPLIED IMAGES
 * ────────────────────────────────
 * 1. Drop the file into the correct folder under src/assets/images/
 * 2. Uncomment the matching import below and update the filename
 * 3. Replace the corresponding `undefined` export
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 *
 * FOLDER STRUCTURE
 * ────────────────
 *   src/assets/images/
 *     hero/       ← one image used in the homepage Hero left column
 *     about/      ← one image used in the About section and About page
 *     skyline/    ← city skyline used behind the hero left column
 *     panel/      ← dark architectural panel used in the hero right column
 *     projects/   ← all project photos (auto-discovered)
 *   src/assets/logo/
 *     aerantis-icon.svg      ← "A + wing" mark, currentColor
 *     aerantis-wordmark.svg  ← AERANTIS + HOLDINGS caption, currentColor
 *     aerantis-lockup.svg    ← full mark + wordmark, currentColor
 *
 * LOGO IMPORT RULES
 * ─────────────────
 * Components MUST import logo assets from this file. Do not import
 * directly from `src/assets/logo/` — that bypasses the single
 * re-export surface and makes future variant swaps error-prone.
 * `public/` is reserved for `<link>` / `<meta>` targets (favicons,
 * OG images); it is not a JS import source.
 *
 * NO REMOTE IMAGES. Only owner-supplied or appropriately licensed local
 * files may be used — see documentation/planning/00-reference-brief-planning.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

// ── Logo (owner-approved, delivered by Task 25) ──────────────────────────────
// Vector SVGs, `fill="currentColor"` — recolour via CSS `color`.
// `logoWordmark` is available in `src/assets/logo/aerantis-wordmark.svg` but
// not currently used by any component. To use it, uncomment the two lines
// below — otherwise Astro would emit an unused 20 KB asset per build.
import logoIconAsset from '../assets/logo/aerantis-icon.svg';
// import logoWordmarkAsset from '../assets/logo/aerantis-wordmark.svg';
import logoLockupAsset from '../assets/logo/aerantis-lockup.svg';

export const logoIcon: ImageMetadata = logoIconAsset;
// export const logoWordmark: ImageMetadata = logoWordmarkAsset;
export const logoLockup: ImageMetadata = logoLockupAsset;

/**
 * Accessible name shared by Header and Footer when the logo is used as
 * the link to `/`. The anchor should carry an `aria-label` derived
 * from this constant; the `<img>`/`<Image>` itself uses `alt=""`
 * (decorative — the anchor already names the destination).
 */
export const logoAltText = 'Aerantis Holdings';

// ── Hero (foreground / left-column subject) ───────────────────────────────────
// Recommended: landscape image, at least 1600 × 1200 px.
// import heroImage from '../assets/images/hero/hero.jpg';
export const heroImage: ImageMetadata | undefined = undefined;

// ── About ─────────────────────────────────────────────────────────────────────
// Recommended: portrait or square, at least 900 × 700 px.
// Current asset is landscape 1099 × 444 (~2.47:1) — About surfaces use
// aspect-[5/2] to match. Update both if aspect changes.
import aboutImageAsset from '../assets/images/about/about.jpg';
export const aboutImage: ImageMetadata | undefined = aboutImageAsset;

// ── Hero skyline (behind the left content column) ─────────────────────────────
// Recommended: dark cityscape at sunset, at least 1920 × 1200 px, landscape.
// Current asset: Melbourne skyline (Yarra River / Princes Bridge), 955 × 572.
// Slightly upscaled at large viewports; dark editorial overlay in Hero.astro
// hides any softness. Replace with a higher-res original when available.
import skylineImageAsset from '../assets/images/skyline/skyline.jpg';
export const skylineImage: ImageMetadata | undefined = skylineImageAsset;

// ── Hero architectural panel (right column) ───────────────────────────────────
// Recommended: dark architectural elevation, at least 1200 × 1400 px, portrait.
// import panelImage from '../assets/images/panel/panel.jpg';
export const panelImage: ImageMetadata | undefined = undefined;

// ── Projects — auto-discovered ────────────────────────────────────────────────
// Drop any number of image files into src/assets/images/projects/ and they
// appear in the Projects grid automatically — no code changes needed.
//
// The file name becomes the alt text / caption:
//   collins-street-tower.jpg  → "Collins Street Tower"
//   docklands-precinct.jpg    → "Docklands Precinct"
//
// Recommended: landscape images, at least 800 × 600 px each, 4:3.

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}
export type ProjectImage = GalleryImage;

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/projects/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}));

// Empty array when no owner assets are present — the Projects component
// renders an empty state rather than a fabricated grid.
export const galleryImages: GalleryImage[] = discovered;
export const projectImages: GalleryImage[] = discovered;
