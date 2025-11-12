# Contributing to AI Logo Maker

First off, thank you for considering contributing to AI Logo Maker! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
4. **Test your changes** thoroughly
5. **Follow the code style** of the project
6. **Write clear commit messages**
7. **Update documentation** if needed
8. **Submit a pull request**

## Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ai-logo.git
   cd ai-logo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` with your API keys (see `.env.example`)

4. Start development server:
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### File Naming

- Components: PascalCase (e.g., `LogoGenerator.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Pages: lowercase with hyphens (e.g., `generate-logo`)

### Commit Messages

Follow the conventional commits specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add color picker component`

## Project Structure

```
app/              # Next.js pages and routes
components/       # Reusable UI components
configs/          # Configuration files
lib/              # Utility functions
public/           # Static assets
```

## Testing

Before submitting a PR:

1. Test all affected features manually
2. Ensure the app builds without errors: `npm run build`
3. Check for linting errors: `npm run lint`

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for new functions
- Update inline comments for complex logic

## Questions?

Feel free to open an issue with the `question` label or reach out to the maintainers.

## Recognition

Contributors will be recognized in our README and release notes.

Thank you for contributing! 🎉
