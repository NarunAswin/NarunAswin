# Verification Report Template

Use this structure for `specs/{feature}/verification-report.md`.

## Template

```markdown
# Verification Report: {Feature Name}

Verified: {date} · {X}/{Y} criteria passed

## Summary

{One or two sentences: overall status, and anything a reviewer should know before reading
further — e.g. "All criteria pass; the Renew button was tested against all three checkout
providers by swapping ACTIVE_PAYMENT_PROVIDER." or "2 failures, both in the reminder-email
idempotency path — see Failures below."}

## Environment

- Dev server: {already running / started fresh, left running or stopped}
- Test data created: {brief list — removed in cleanup unless noted otherwise}
- Tools used: {browser automation / curl / psql/Prisma / combination}

## Criteria

| # | Criterion | Source | Verdict | Evidence |
|---|-----------|--------|---------|----------|
| 1 | {criterion text} | requirements.md | PASS | {screenshot path / curl command+response / query+result} |
| 2 | {criterion text} | task-01-{name}.md | PASS | ... |
| 3 | {criterion text} | task-02-{name}.md | FAIL | see Failures below |

## Failures

{Omit this section entirely if everything passed.}

### {Criterion text}

**Scenario:** {exact input/state that triggers it}
**Expected:** {what the criterion says should happen}
**Actual:** {what actually happened}
**Evidence:** {screenshot, response body, query result}

## Notes

{Anything verified as SKIPPED and why (e.g. requires a live third-party webhook), or edge cases
noticed but not in the original criteria list that are worth flagging back to the spec.}
```

## Key Points

- The **Criteria** table is the core deliverable — it should let someone who wasn't in the room
  trust that "PASS" actually means what it says, because the evidence column backs it up.
- Keep evidence concise (a path, a one-line command + result) — this file is a report, not a
  transcript. Full detail belongs in the Failures section, only for things that need it.
- If a criterion is SKIPPED, say why in the Notes section rather than silently omitting it — a
  missing row is indistinguishable from forgetting to check it.
