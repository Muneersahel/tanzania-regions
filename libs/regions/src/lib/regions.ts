import data from '../data/tanzania.json';

const country: Country = data;

export function regions() {
  return country;
}

export function districts(region: string) {
  const requiredRegion: Region | undefined = country.regions.find(
    (r) => r.slug === region,
  );
  if (requiredRegion) return requiredRegion;
  return { error: 'Could not find region with the slug specified' };
}

export function wards(region: string, district: string) {
  const requiredRegion: Region | undefined = country.regions.find(
    (r) => r.slug === region,
  );
  if (!requiredRegion) {
    return { error: 'Could not find region with the slug specified' };
  }

  const requiredDistrict: District | undefined = requiredRegion.districts.find(
    (r) => r.slug === district,
  );
  if (requiredDistrict) return requiredDistrict;
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
