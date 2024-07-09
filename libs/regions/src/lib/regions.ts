import data from '../data/tanzania.json';

const country: Country = data;

/**
 *
 * @returns a list of country regions (Tanzania regions)
 */
export function regions() {
  return country;
}

/**
 *
 * @param region string
 * @returns region with the list of districts
 */
export function districts(region: string) {
  const foundRegion: Region | undefined = country.regions.find(
    (r) => r.slug === region,
  );
  if (foundRegion) return foundRegion;
  return { error: 'Could not find region with the slug specified' };
}

/**
 *
 * @param region string
 * @param district string
 * @returns a district with the list of wards
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

export interface Country {
  name: string;
  regions: Region[];
}

export interface Region {
  name: string;
  slug: string;
  districts: District[];
}

export interface District {
  name: string;
  slug: string;
  wards: Ward[];
}

export interface Ward {
  name: string;
  slug: string;
}
