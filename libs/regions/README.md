# NgxMitaa

[![Made in Tanzania](https://img.shields.io/badge/made%20in-tanzania-008751.svg?style=flat-square)](https://github.com/Tanzania-Developers-Community/made-in-tanzania)

This library provides an Angular service to get all locations

## Installation

```bash
npm install ngx-mitaa
```

Or if you use yarn

```bash
yarn add ngx-mitaa
```

## Usage

Import the service in your component where you want to use it

```typescript
import { NgxMitaaService } from 'ngx-mitaa';
```

Inject the service in your component's constructor or using inject function

```typescript
constructor(private ngxMitaaService: NgxMitaaService) {}

// or

const ngxMitaaService = inject(NgxMitaaService);
```

```typescript
// Get all locations
const locations = this.ngxMitaaService.getLocations();
```

This will return an array of objects with the following structure;

```typescript
[
  {
    continent: 'Africa',
    countries: [
      {
        country: 'Tanzania',
        regions: [
          {
            region: 'Dar es Salaam',
            districts: [
              {
                district: 'Ilala Cbd',
                wards: [
                  {
                    ward: 'Kivukoni',
                    streets: ['Kivukoni', 'Sea View'],
                  },
                  {
                    ward: 'Upanga Mashariki',
                    streets: ['Kitonga', 'Kibasila'],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
```

```typescript
// Get all continents
const continents = this.ngxMitaaService.getContinents();
```

This will return an array of strings with the following structure;

```typescript
['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
```

```typescript
// Get all countries by continent(defaults to Africa)
const countries = this.ngxMitaaService.getCountries('Africa');
```

This will return an array of strings with the following structure;

```typescript
["Tanzania", "Burundi", "Kenya", , "Rwanda", "South Sudan", "Uganda" ...];
```

```typescript
// Get all regions by country(default to Tanzania) and continent(defaults to Africa)
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
