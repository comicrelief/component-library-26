# GitHub Actions PR Workflow

## How the checks appear on a PR

`main.yml` has `on: [push]`, so when you push a branch, GitHub runs the workflow and each job (lint, unit-test, playwright, publish) shows as a separate named check on the PR page. `pr-checks.yml` adds the semantic title check on top.

## The typical solo workflow

```bash
git checkout -b my-feature
# make changes
git push origin my-feature
# open a PR on GitHub: my-feature → main
```

The PR page will then show each job running individually, and you can merge once they pass.

## Branch protection (optional but recommended)

Set up a branch protection rule on `main` so direct pushes are blocked and the checks must pass before merging. In GitHub: **Settings → Branches → Add rule**:

- Branch name pattern: `main`
- Require status checks to pass before merging
- Search for and add: `Lint`, `Unit test`, `Playwright test`
- Require branches to be up to date before merging

This gives you the same safety net as a team repo — CI must be green before anything lands on `main`.
