---
description: Create a commit message by analyzing git diff
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Context:

- Current git status:!`git status`
- Current git diff:!`git diff --staged`

## Your task:

Analyze above staged git changes and create a commit message. Use present tense and explain "why" something has changed, not just "what" has changed.

## Commit types with emojis:

Only use the following emojis:

- ✨ `feat:` - New feature
- 🐛 `fix:` - Bug fix
- 📖 `docs:` - Documentation
- 🖌️ `style:` - Styling/formatting
- 📦 `refactor:` - Refactoring code
- ⚡ `perf:` - Performance
- ✅ `test:` - Tests
- 🛠 `build:` - Build system or external dependencies
- ⚙️ `ci:` - CI/CD changes
- ♻️ `chore:` - Other changes that don't modify src or test files
- 🗑 `revert:` - Reverts a previous commit
- 🔥 `hotfix:` - Urgent fix
- 🎉 `init:` - Initial commit or project initialization

## Format:

Use the following format for making the commit message:

```
<emoji> <type>(optional scope): <concise description>
<optional_body_explaining_why>
```

## Output:

1. Show summary of changes currently staged
2. Propose commit message with appropriate emoji
3. Ask for confirmation before committing

DO NOT auto-commit - wait for user approval, and only commit if the user says so.
