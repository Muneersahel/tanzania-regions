# Contributing to Tanzania Regions

Thank you for considering contributing to the Tanzania Regions project! We welcome contributions from the community.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Your environment (Node.js version, OS, etc.)

### Suggesting Enhancements

We welcome suggestions for new features or improvements:
- Create an issue describing the enhancement
- Explain why this enhancement would be useful
- Provide examples of how it would work

### Data Corrections

If you find incorrect or missing location data:
1. Create an issue documenting the error
2. Provide the correct information with sources (official government sources preferred)
3. Or submit a pull request with the correction

## 📝 Pull Request Process

1. **Fork the Repository**
   ```bash
   git clone https://github.com/Muneersahel/tanzania-regions.git
   cd tanzania-regions
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Update documentation if needed
   - Add tests if applicable

4. **Test Your Changes**
   ```bash
   pnpm install
   pnpm nx test regions
   pnpm nx build regions
   ```

5. **Commit Your Changes**
   
   We use [Conventional Commits](https://www.conventionalcommits.org/). Please format your commits as:
   
   ```
   <type>(<scope>): <subject>
   
   <body>
   ```
   
   Types:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes (formatting, etc.)
   - `refactor`: Code refactoring
   - `test`: Adding or updating tests
   - `chore`: Maintenance tasks
   
   Examples:
   ```bash
   git commit -m "feat(regions): add new region data"
   git commit -m "fix(districts): correct Dodoma district names"
   git commit -m "docs(readme): update usage examples"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with details about your changes

## 🗂️ Project Structure

```
tanzania-regions/
├── apps/
│   ├── documentation/     # Angular documentation site
│   ├── regions-api/       # NestJS API
│   └── regions-api-e2e/   # E2E tests
├── libs/
│   ├── regions/           # Core library
│   │   ├── src/
│   │   │   ├── data/      # Location data (JSON)
│   │   │   ├── lib/       # Library code
│   │   │   └── index.ts   # Public API
│   │   ├── README.md
│   │   └── package.json
│   ├── scraper/           # Data scraping tools
│   └── spartan-ui/        # UI components
```

## 📊 Data Format

When updating location data in `libs/regions/src/data/tanzania.json`, follow this structure:

```json
{
  "name": "Tanzania",
  "flag": "https://flagcdn.com/tz.svg",
  "regions": [
    {
      "name": "Region Name",
      "slug": "region-slug",
      "districts": [
        {
          "name": "District Name",
          "slug": "district-slug",
          "wards": [
            {
              "name": "Ward Name",
              "slug": "ward-slug"
            }
          ]
        }
      ]
    }
  ]
}
```

### Slug Format Rules
- All lowercase
- Use hyphens for spaces
- Remove special characters
- Examples: "Dar es Salaam" → "dar-es-salaam", "Arusha CBD" → "arusha-cbd"

## 🧪 Testing

Before submitting a PR, ensure:

1. All tests pass:
   ```bash
   pnpm nx test regions
   ```

2. The build succeeds:
   ```bash
   pnpm nx build regions
   ```

3. No linting errors:
   ```bash
   pnpm nx lint regions
   ```

4. Code is properly formatted:
   ```bash
   pnpm format
   ```

## 📖 Documentation

When adding new features:
- Update the README.md with usage examples
- Add JSDoc comments to functions
- Update TypeScript interfaces if needed
- Add entries to CHANGELOG.md

## 🔍 Code Review Process

1. At least one maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be included in the next release

## 💡 Development Tips

### Running the Project Locally

```bash
# Install dependencies
pnpm install

# Run tests in watch mode
pnpm nx test regions --watch

# Build the library
pnpm nx build regions

# Serve the documentation site
pnpm nx serve documentation

# Serve the API
pnpm nx serve regions-api
```

### Useful Nx Commands

```bash
# Run a specific task
pnpm nx <target> <project>

# Run tasks for all projects
pnpm nx run-many -t <target>

# View project graph
pnpm nx graph

# Get help
pnpm nx help
```

## 🌍 Data Sources

When adding or updating location data, please use official sources:
- [Tanzania National Bureau of Statistics (NBS)](https://www.nbs.go.tz/)
- Official government publications
- Verified administrative documents

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help create a positive community

## ❓ Questions?

If you have questions:
- Open an issue for discussion
- Check existing issues and PRs
- Reach out to maintainers

## 🙏 Recognition

Contributors will be:
- Listed in the project's contributors
- Mentioned in release notes for significant contributions
- Appreciated by the community!

---

Thank you for contributing to Tanzania Regions! 🇹🇿
