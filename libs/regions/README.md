# Tanzania Regions Library

[![Made in Tanzania](https://img.shields.io/badge/made%20in-tanzania-008751.svg?style=flat-square)](https://github.com/Tanzania-Developers-Community/made-in-tanzania)
[![npm version](https://badge.fury.io/js/tanzania-regions.svg)](https://www.npmjs.com/package/tanzania-regions)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](../../LICENSE.md)

A lightweight, zero-dependency TypeScript/JavaScript library providing comprehensive data for all Tanzania regions, districts, and wards. Perfect for building location selectors, address forms, and administrative applications.

## ✨ Features

- 🗺️ **Complete Coverage** - All 31 regions, 185+ districts, and 3,900+ wards
- 📦 **Zero Dependencies** - Lightweight and framework-agnostic
- 🔒 **Type-Safe** - Full TypeScript support with type definitions
- 🚀 **Easy to Use** - Simple, intuitive API
- 🌐 **Slug Support** - URL-friendly slugs for all locations
- 📱 **Universal** - Works in Node.js and browsers

## 📦 Installation

```bash
npm install tanzania-regions
```

**Yarn:**
```bash
yarn add tanzania-regions
```

**pnpm:**
```bash
pnpm add tanzania-regions
```

## 🚀 Quick Start

### Import the Library

```typescript
// ES6 Modules
import { regions, districts, wards } from 'tanzania-regions';

// CommonJS
const { regions, districts, wards } = require('tanzania-regions');
```

### Get All Regions

```typescript
const allRegions = regions();

console.log(allRegions);
// {
//   name: "Tanzania",
//   flag: "https://flagcdn.com/tz.svg",
//   regions: [
//     {
//       name: "Arusha",
//       slug: "arusha",
//       districts: [...]
//     },
//     ...
//   ]
// }
```

### Get Districts for a Region

```typescript
const darDistricts = districts('dar-es-salaam');

console.log(darDistricts);
// {
//   name: "Dar es Salaam",
//   slug: "dar-es-salaam",
//   districts: [
//     {
//       name: "Ilala",
//       slug: "ilala",
//       wards: [...]
//     },
//     {
//       name: "Kinondoni",
//       slug: "kinondoni",
//       wards: [...]
//     },
//     ...
//   ]
// }
```

### Get Wards for a District

```typescript
const ilalaWards = wards('dar-es-salaam', 'ilala');

console.log(ilalaWards);
// {
//   name: "Ilala",
//   slug: "ilala",
//   wards: [
//     {
//       name: "Buguruni",
//       slug: "buguruni"
//     },
//     {
//       name: "Kariakoo",
//       slug: "kariakoo"
//     },
//     ...
//   ]
// }
```

## 📚 API Reference

### `regions()`

Returns the complete country data including all regions, districts, and wards.

**Returns:** `Country`

```typescript
interface Country {
  name: string;
  flag: string;
  regions: Region[];
}
```

**Example:**
```typescript
const data = regions();
console.log(data.name); // "Tanzania"
console.log(data.regions.length); // 31
```

### `districts(region: string)`

Returns a specific region with all its districts and wards.

**Parameters:**
- `region` (string) - The region slug (e.g., 'arusha', 'dar-es-salaam')

**Returns:** `Region | { error: string }`

```typescript
interface Region {
  name: string;
  slug: string;
  districts: District[];
}
```

**Example:**
```typescript
const arusha = districts('arusha');

if ('error' in arusha) {
  console.error(arusha.error);
} else {
  console.log(arusha.name); // "Arusha"
  console.log(arusha.districts.length); // 7
}
```

**Error Handling:**
```typescript
const invalid = districts('invalid-region');
// Returns: { error: "Could not find region with the slug specified" }
```

### `wards(region: string, district: string)`

Returns a specific district with all its wards.

**Parameters:**
- `region` (string) - The region slug
- `district` (string) - The district slug

**Returns:** `District | { error: string }`

```typescript
interface District {
  name: string;
  slug: string;
  wards: Ward[];
}

interface Ward {
  name: string;
  slug: string;
}
```

**Example:**
```typescript
const ilala = wards('dar-es-salaam', 'ilala');

if ('error' in ilala) {
  console.error(ilala.error);
} else {
  console.log(ilala.name); // "Ilala"
  console.log(ilala.wards.length); // 27
}
```

**Error Handling:**
```typescript
// Invalid region
const result1 = wards('invalid-region', 'ilala');
// Returns: { error: "Could not find region with the slug specified" }

// Invalid district
const result2 = wards('dar-es-salaam', 'invalid-district');
// Returns: { error: "Could not find district with the slug specified" }
```

## 💡 Usage Examples

### Building a Location Selector (React)

```typescript
import { useState, useEffect } from 'react';
import { regions, districts, wards } from 'tanzania-regions';

function LocationSelector() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [regionsList, setRegionsList] = useState([]);
  const [districtsList, setDistrictsList] = useState([]);
  const [wardsList, setWardsList] = useState([]);

  useEffect(() => {
    const data = regions();
    setRegionsList(data.regions);
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const result = districts(selectedRegion);
      if ('error' in result) {
        setDistrictsList([]);
      } else {
        setDistrictsList(result.districts);
      }
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      const result = wards(selectedRegion, selectedDistrict);
      if ('error' in result) {
        setWardsList([]);
      } else {
        setWardsList(result.wards);
      }
    }
  }, [selectedRegion, selectedDistrict]);

  return (
    <div>
      <select onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="">Select Region</option>
        {regionsList.map((region) => (
          <option key={region.slug} value={region.slug}>
            {region.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSelectedDistrict(e.target.value)}>
        <option value="">Select District</option>
        {districtsList.map((district) => (
          <option key={district.slug} value={district.slug}>
            {district.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">Select Ward</option>
        {wardsList.map((ward) => (
          <option key={ward.slug} value={ward.slug}>
            {ward.name}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Building a Location Selector (Vue)

```vue
<template>
  <div>
    <select v-model="selectedRegion">
      <option value="">Select Region</option>
      <option v-for="region in regionsList" :key="region.slug" :value="region.slug">
        {{ region.name }}
      </option>
    </select>

    <select v-model="selectedDistrict">
      <option value="">Select District</option>
      <option v-for="district in districtsList" :key="district.slug" :value="district.slug">
        {{ district.name }}
      </option>
    </select>

    <select>
      <option value="">Select Ward</option>
      <option v-for="ward in wardsList" :key="ward.slug" :value="ward.slug">
        {{ ward.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { regions, districts, wards } from 'tanzania-regions';

const selectedRegion = ref('');
const selectedDistrict = ref('');
const regionsList = ref([]);
const districtsList = ref([]);
const wardsList = ref([]);

onMounted(() => {
  const data = regions();
  regionsList.value = data.regions;
});

watch(selectedRegion, (newRegion) => {
  if (newRegion) {
    const result = districts(newRegion);
    districtsList.value = 'error' in result ? [] : result.districts;
  }
});

watch([selectedRegion, selectedDistrict], ([region, district]) => {
  if (region && district) {
    const result = wards(region, district);
    wardsList.value = 'error' in result ? [] : result.wards;
  }
});
</script>
```

### Node.js Backend Example

```typescript
import express from 'express';
import { regions, districts, wards } from 'tanzania-regions';

const app = express();

// Get all regions
app.get('/api/regions', (req, res) => {
  const data = regions();
  res.json(data.regions);
});

// Get districts for a region
app.get('/api/regions/:region/districts', (req, res) => {
  const result = districts(req.params.region);
  
  if ('error' in result) {
    res.status(404).json(result);
  } else {
    res.json(result.districts);
  }
});

// Get wards for a district
app.get('/api/regions/:region/districts/:district/wards', (req, res) => {
  const result = wards(req.params.region, req.params.district);
  
  if ('error' in result) {
    res.status(404).json(result);
  } else {
    res.json(result.wards);
  }
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
```

### Filtering and Searching

```typescript
import { regions } from 'tanzania-regions';

const data = regions();

// Find a specific region
const arusha = data.regions.find(r => r.slug === 'arusha');

// Search regions by name
const searchTerm = 'dar';
const matchingRegions = data.regions.filter(r => 
  r.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Get all coastal regions (example)
const coastalRegions = ['dar-es-salaam', 'tanga', 'pwani', 'lindi', 'mtwara'];
const coastal = data.regions.filter(r => coastalRegions.includes(r.slug));

// Count total districts and wards
const totalDistricts = data.regions.reduce(
  (sum, region) => sum + region.districts.length, 
  0
);
const totalWards = data.regions.reduce(
  (sum, region) => sum + region.districts.reduce(
    (distSum, district) => distSum + district.wards.length, 
    0
  ), 
  0
);

console.log(`Total Districts: ${totalDistricts}`);
console.log(`Total Wards: ${totalWards}`);
```

## 🗺️ Available Regions

The library includes data for all 31 regions of Tanzania:

- Arusha
- Dar es Salaam
- Dodoma
- Geita
- Iringa
- Kagera
- Katavi
- Kigoma
- Kilimanjaro
- Lindi
- Manyara
- Mara
- Mbeya
- Mjini Magharibi
- Morogoro
- Mtwara
- Mwanza
- Njombe
- Pemba North
- Pemba South
- Pwani
- Rukwa
- Ruvuma
- Shinyanga
- Simiyu
- Singida
- Songwe
- Tabora
- Tanga
- Unguja North
- Unguja South

## 📊 Data Structure

```typescript
{
  name: "Tanzania",
  flag: "https://flagcdn.com/tz.svg",
  regions: [
    {
      name: "Region Name",
      slug: "region-slug",
      districts: [
        {
          name: "District Name",
          slug: "district-slug",
          wards: [
            {
              name: "Ward Name",
              slug: "ward-slug"
            }
          ]
        }
      ]
    }
  ]
}
```

## 🔧 TypeScript Support

The library is written in TypeScript and includes full type definitions:

```typescript
import type { Country, Region, District, Ward } from 'tanzania-regions';

const data: Country = regions();
const region: Region | { error: string } = districts('arusha');
const district: District | { error: string } = wards('arusha', 'arumeru');
```

## 🤝 Contributing

Contributions are welcome! If you find any missing or incorrect data, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes to the data file at `src/data/tanzania.json`
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE.md](../../LICENSE.md) for details.

## 👥 Author

**Muneersahel**
- Email: saidmunir73@gmail.com
- GitHub: [@Muneersahel](https://github.com/Muneersahel)

## 🙏 Acknowledgments

- Tanzania National Bureau of Statistics for location data
- [Tanzania Developers Community](https://github.com/Tanzania-Developers-Community)

## 📞 Support

- 🐛 [Report a Bug](https://github.com/Muneersahel/tanzania-regions/issues)
- 💡 [Request a Feature](https://github.com/Muneersahel/tanzania-regions/issues)
- 📖 [View Documentation](../../README.md)

---

<div align="center">
  <sub>Made with ❤️ in Tanzania 🇹🇿</sub>
</div>

const regions = this.ngxMitaaService.getRegions('Tanzania', 'Africa');
```

This will return an array of strings with the following structure;

```typescript
[
  "Dar es Salaam",
  "Dodoma",
  "Iringa",
  "Kagera",
  "Kigoma",
  "Kilimanjaro",
  "Lindi",
  "Manyara",
  "Mara",
  "Mbeya",
  ...
];
```

```typescript
// Get all districts by region(defaults to Dar es Salaam), country(defaults to Tanzania) and continent(defaults to Africa)
const districts = this.ngxMitaaService.getDistricts('Dar es Salaam', 'Tanzania', 'Africa');
```

This will return an array of strings with the following structure;

```typescript
[
  "Ilala Cbd",
  "Kinondoni",
  "Kigamboni",
  "Temeke",
  "Ubungo",
  "Kurasini",
  ...
];
```

```typescript
// Get all wards by district(defaults to Kinondoni), region(defaults to Dar es Salaam), country(defaults to Tanzania) and continent(defaults to Africa)
const wards = this.ngxMitaaService.getWards('Kinondoni', 'Dar es Salaam', 'Tanzania', 'Africa');
```

This will return an array of strings with the following structure;

```typescript
[
  "Bunju",
  "Hananasif",
  "Kawe",
  "Kigogo",
  "Kijitonyama",
  "Kinondoni",
  "Kunduchi",
  "Mabwepande",
  "Magomeni",
  ...
];
```

```typescript
// Get all streets by ward(defaults to Magomeni), district(defaults to Kinondoni), region(defaults to Dar es Salaam), country(defaults to Tanzania) and continent(defaults to Africa)
const streets = this.ngxMitaaService.getStreets('Magomeni', 'Kinondoni', 'Dar es Salaam', 'Tanzania', 'Africa');
``;
```

This will return an array of strings with the following structure;

```typescript
["Dossi", "Idrisa", "Makuti A", "Makuti B", "Suna" ...];
```

## Interface

```typescript
interface Continent {
  continent: string;
  countries: Country[];
}

interface Country {
  country: string;
  regions: Region[];
}

interface Region {
  region: string;
  districts: District[];
}

interface District {
  district: string;
  wards: Ward[];
}

interface Ward {
  ward: string;
  streets: string[];
}
```

All interfaces can be imported from the library

```typescript
import { Continent, Country, Region, District, Ward } from 'ngx-mitaa';
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[Munir Issa](https://muneersahel.com)

## Give a Star! :star:

If you find this library useful, give it a star so that other deveopers can get to know about it.

## Disclaimer

All the location I used to build this repository, I got from an public repository titled [tanzania-locations-db](https://github.com/HackEAC/tanzania-locations-db), I'm not responsible for any kind of misinformation in it, I tried to locate my home with it found its pretty accurate, so use it to your own risk

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

- [mtaa](https://github.com/Kalebu/mtaa)
- [HackEAC](https://github.com/HackEAC/tanzania-locations-db)
