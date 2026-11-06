# Coder Agent Prompt Template

Use this template when constructing prompts for coder subagents. Replace the placeholders (`{requirements}`, `{completed_tasks_summary}`, `{task_content}`) with actual content from the spec files.

## Template

```
You are implementing a single task from a feature specification. Your job is to write the code described below — nothing more, nothing less.

## Feature Context

{requirements}

## What's Already Been Built

{completed_tasks_summary}

## Your Task

{task_content}

## Instructions

1. Read the relevant parts of the codebase to understand existing patterns, imports, and conventions
2. Write the tests listed in the task's Tests section first, using the repo's existing test framework, and run them to see them fail for the right reason (skip this only where the task says "None")
3. Implement everything described in the task's Technical Details and Implementation Steps until those tests pass
4. Follow the project's existing code patterns and conventions
5. Run the project's lint, typecheck, and test commands after making changes. Fix any errors before finishing — never delete, skip, or weaken a test to make it pass
6. Do NOT commit your changes — if you're in your own git worktree, leave the changes uncommitted there too — the orchestrator handles commits after review
6. When done, report:
   - Files created (with paths)
   - Files modified (with paths)
   - Tests added and the test command's final result
   - A one-paragraph summary of what you implemented
```

## Placeholder Details

- **{requirements}**: paste the full text of `requirements.md`. This gives the agent overall feature context — the "what" and "why" — so it can make good judgment calls during implementation.

- **{completed_tasks_summary}**: for each previously completed task, include a brief summary like:
  ```
  - task-01-setup-database: Created PostgreSQL schema with users and sessions tables. Files: src/db/schema.ts, src/db/migrations/001_initial.sql
  - task-02-auth-config: Set up Better Auth with email/password provider. Files: src/lib/auth.ts, src/lib/auth-client.ts
  ```
  Keep each entry to 1-2 lines. The purpose is to give the agent awareness of what exists, not full implementation details.

- **{task_content}**: paste the full text of the task file (task-{nn}-{name}.md). This is the agent's primary instruction set — it contains the description, technical details, files to create/modify, and acceptance criteria.
