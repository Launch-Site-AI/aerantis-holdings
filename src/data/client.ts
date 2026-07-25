/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific facts confirmed by the owner (WhatsApp reply, 14 Jul 2026):
 * name, legal entity, ABN, phones, email, address (city-level only),
 * business hours, service area, socials, spoken languages, contact person.
 *
 * Field naming follows schema.org where practical (addressLocality /
 * addressRegion / addressCountry) so the same object can feed the JSON-LD
 * Organization block on the homepage without a translation layer.
 *
 * No component should hardcode a business fact — everything comes from
 * this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'AERANTIS HOLDINGS',

  /** Legal entity for compliance / ABN display. */
  legalName: 'YAHYAIE, MASOUD',
  /** Australian Business Number. Shown as a compliance line in the footer. */
  taxId: '11 945 578 517',

  email: 'info@aerantisholdings.com.au',

  /** Direct line to the principal — primary customer-facing number. */
  phoneForTel: '+61499695097',
  phoneFormatted: '0 499 695 097',

  /** Office / general enquiries line. Handled by Client Relations. */
  phoneOfficeForTel: '+61400815308',
  phoneOfficeFormatted: '0 400 815 308',

  /**
   * Address is intentionally city-level only. The owner has explicitly asked
   * that no residential street address be published on the public site.
   */
  address: {
    addressLocality: 'Melbourne',
    addressRegion: 'Victoria',
    addressCountry: 'AU',
  },

  /**
   * Service coverage — Melbourne metro plus regional Victoria. Rendered on the
   * Contact page and mirrored into schema.org `areaServed` on the homepage.
   */
  serviceArea: 'Melbourne and surrounding areas, Victoria, Australia',

  /**
   * Contact person. `publishOnSite: false` means the name stays internal —
   * used for CRM / correspondence only. Step 11 decides whether to surface it
   * on the Contact page.
   */
  contactPerson: {
    name: 'Leyli',
    role: 'Client Relations & Administration',
    publishOnSite: false,
  },

  /**
   * Languages the business can conduct enquiries in. Feeds the JSON-LD
   * `availableLanguage` field and (Step 11 decision 5) an optional visible
   * bilingual line on the Contact page.
   */
  availableLanguages: ['English', 'Persian'] as const,

  /**
   * Business hours. Empty array hides the block entirely. Days are written as
   * a range string to keep the JSX simple — no need for a day-of-week enum
   * until we want machine-readable OpeningHoursSpecification in JSON-LD.
   */
  businessHours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
    { days: 'Saturday',        hours: 'By Appointment' },
    { days: 'Sunday',          hours: 'Closed' },
  ],

  socials: {
    facebook: '',
    instagram: 'https://www.instagram.com/aerantisholdings',
    google: '',
  },

  domain: 'https://aerantisholdings.com.au',
} as const;

export type Client = typeof client;
