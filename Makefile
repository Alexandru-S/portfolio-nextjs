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

# Command to stage changes, create a commit with Commitizen, and push to the repository
commit:
	git add --all
	pnpm run commit
	git push

# Command to create tree from folder structure
tree:
	tree -I 'node_modules|.next|.git' > directory-structure.txt