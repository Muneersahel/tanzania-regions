# Tanzania Regions

[![Made in Tanzania](https://img.shields.io/badge/made%20in-tanzania-008751.svg?style=flat-square)](https://github.com/Tanzania-Developers-Community/made-in-tanzania)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

A comprehensive TypeScript/JavaScript library providing structured data for all Tanzania regions, districts, and wards. Perfect for building location-based applications, forms, and administrative tools.

## 📦 Packages

This monorepo contains the following packages:

- **[@tanzania-regions/regions](libs/regions)** - Core library with Tanzania location data
- **regions-api** - REST API for accessing location data
- **documentation** - Interactive documentation website

## 🚀 Quick Start

### Installation

```bash
npm install tanzania-regions
```

Or with yarn:

```bash
yarn add tanzania-regions
```

Or with pnpm:

```bash
pnpm add tanzania-regions
```

### Basic Usage

```typescript
import { regions, districts, wards } from 'tanzania-regions';

// Get all regions in Tanzania
const allRegions = regions();

// Get districts for a specific region (e.g., Arusha)
const arushaDistricts = districts('arusha');

// Get wards for a specific district
const arumeruWards = wards('arusha', 'arumeru');
```

## 📖 Documentation

For detailed documentation, examples, and API reference, visit the [documentation site](apps/documentation) or check the [regions library README](libs/regions/README.md).

## 🏗️ Development

## 🏗️ Development

This project uses [Nx](https://nx.dev) for workspace management.

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Getting Started

```bash
# Clone the repository
git clone https://github.com/Muneersahel/tanzania-regions.git
cd tanzania-regions

# Install dependencies
pnpm install

# Build the library
pnpm nx build regions

# Run tests
pnpm nx test regions

# Run the API server
pnpm nx serve regions-api

# Start the documentation site
pnpm nx serve documentation
```

### Workspace Structure

```
tanzania-regions/
├── apps/
│   ├── documentation/     # Angular documentation website
│   ├── regions-api/       # NestJS REST API
│   └── regions-api-e2e/   # API end-to-end tests
├── libs/
│   ├── regions/           # Core library package
│   ├── scraper/           # Data scraping utilities
│   └── spartan-ui/        # UI components for documentation
└── ...
```

## 🧪 Testing

```bash
# Run all tests
pnpm nx run-many -t test

# Run tests for specific project
pnpm nx test regions

# Run e2e tests
pnpm nx e2e regions-api-e2e
```

## 📦 Building

```bash
# Build all projects
pnpm nx run-many -t build

# Build specific project
pnpm nx build regions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please follow the commit message format:

```
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- **Muneersahel** - [GitHub](https://github.com/Muneersahel)

## 🙏 Acknowledgments

- Tanzania National Bureau of Statistics for the location data
- [Nx](https://nx.dev) for the amazing monorepo tools
- All contributors who help maintain this project

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/Muneersahel/tanzania-regions/issues)
- Reach out to the [Tanzania Developers Community](https://github.com/Tanzania-Developers-Community)

---

<div align="center">
  <sub>Built with ❤️ in Tanzania 🇹🇿</sub>
</div>


Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
