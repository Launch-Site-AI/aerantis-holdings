/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'AERANTIS HOLDINGS',
  email: 'info@aerantisholdings.com.au',
  phoneForTel: '+61499695097',
  phoneFormatted: '0 499 695 097',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',
  address: {
    lineOne: 'TODO(owner): confirm street address line one',
    lineTwo: 'TODO(owner): optional suite / floor',
    city: 'TODO(owner): confirm city',
    state: 'TODO(owner): confirm state',
    zip: 'TODO(owner): confirm postcode',
    country: 'AU',
    mapLink: '',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: '',
  },
  domain: 'https://aerantisholdings.com.au',
} as const;

export type Client = typeof client;
