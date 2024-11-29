.PHONY: dev test lint lint-fix build

# Command to run the development server
dev:
	pnpm run dev

# Command to run tests
test:
	pnpm run test

# Command to run the linter
lint:
	pnpm run lint

# Command to fix lint errors
lint-fix:
	pnpm run lint:fix

# Command to build the project
build:
	pnpm run build
