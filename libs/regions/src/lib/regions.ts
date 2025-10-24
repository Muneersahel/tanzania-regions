import data from '../data/tanzania.json';

const country: Country = data;

/**
 * Get all Tanzania regions with their districts and wards
 *
 * @returns {Country} Complete country data including all 31 regions, districts, and wards
 *
 * @example
 * ```typescript
 * const data = regions();
 * console.log(data.name); // "Tanzania"
 * console.log(data.regions.length); // 31
 *
 * // Access specific region
 * const arusha = data.regions.find(r => r.slug === 'arusha');
 * ```
 */
export function regions() {
  return country;
}

/**
 * Get a specific region with all its districts and wards
 *
 * @param {string} region - The region slug (e.g., 'arusha', 'dar-es-salaam', 'dodoma')
 * @returns {Region | { error: string }} The region object with districts, or an error object if not found
 *
 * @example
 * ```typescript
 * // Valid region
 * const arusha = districts('arusha');
 * if ('error' in arusha) {
 *   console.error(arusha.error);
 * } else {
 *   console.log(arusha.name); // "Arusha"
 *   console.log(arusha.districts.length); // 7
 * }
 *
 * // Invalid region
 * const invalid = districts('invalid-region');
 * // Returns: { error: "Could not find region with the slug specified" }
 * ```
 */
export function districts(region: string) {
  const foundRegion: Region | undefined = country.regions.find(
    (r) => r.slug === region,
  );
  if (foundRegion) return foundRegion;
  return { error: 'Could not find region with the slug specified' };
}

/**
 * Get a specific district with all its wards
 *
 * @param {string} region - The region slug (e.g., 'dar-es-salaam')
 * @param {string} district - The district slug (e.g., 'ilala', 'kinondoni')
 * @returns {District | { error: string }} The district object with wards, or an error object if not found
 *
 * @example
 * ```typescript
 * // Valid district
 * const ilala = wards('dar-es-salaam', 'ilala');
 * if ('error' in ilala) {
 *   console.error(ilala.error);
 * } else {
 *   console.log(ilala.name); // "Ilala"
 *   console.log(ilala.wards.length); // 27
 * }
 *
 * // Invalid region
 * const invalid1 = wards('invalid-region', 'ilala');
 * // Returns: { error: "Could not find region with the slug specified" }
 *
 * // Invalid district
 * const invalid2 = wards('dar-es-salaam', 'invalid-district');
 * // Returns: { error: "Could not find district with the slug specified" }
 * ```
 */
export function wards(region: string, district: string) {
  const foundRegion: Region | undefined = country.regions.find(
    (r) => r.slug === region,
  );
  if (!foundRegion) {
    return { error: 'Could not find region with the slug specified' };
  }

  const foundDistrict: District | undefined = foundRegion.districts.find(
    (r) => r.slug === district,
  );
  if (foundDistrict) return foundDistrict;
  return { error: 'Could not find district with the slug specified' };
}

/**
 * Represents the complete country data structure
 */
export interface Country {
  /** Country name */
  name: string;
  /** All regions in the country */
  regions: Region[];
}

/**
 * Represents a region (administrative level 1)
 */
export interface Region {
  /** Region name */
  name: string;
  /** URL-friendly slug for the region */
  slug: string;
  /** All districts within the region */
  districts: District[];
}

/**
 * Represents a district (administrative level 2)
 */
export interface District {
  /** District name */
  name: string;
  /** URL-friendly slug for the district */
  slug: string;
  /** All wards within the district */
  wards: Ward[];
}

/**
 * Represents a ward (administrative level 3)
 */
export interface Ward {
  /** Ward name */
  name: string;
  /** URL-friendly slug for the ward */
  slug: string;
}
