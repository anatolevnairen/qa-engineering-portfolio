# Technical Analysis – Investigating Flaky UI Tests

## 1. Problem Overview

Flaky automated tests are tests that produce inconsistent results when executed under seemingly identical conditions.

This example examines a fictional web application where dashboard information is updated asynchronously through WebSocket events.

The objective is to demonstrate a systematic approach to investigating intermittent test failures and improving test reliability.

## 2. Scenario

A dashboard displays property status information.

When a property is updated, the backend sends a WebSocket event and the frontend refreshes the corresponding UI element.

An automated test occasionally fails because the assertion executes before the updated information appears on the page.

**Observed behavior:**
- The test passes during some executions.
- The test fails intermittently during repeated runs.
- The application eventually displays the correct information.
- Failure frequency may increase under slower network or execution conditions.

## 3. Initial Investigation

The investigation should consider several potential causes:

| Area | Potential Issue |
|---|---|
| WebSocket communication | Event arrives later than expected |
| Frontend rendering | UI update is delayed |
| Test synchronization | Assertion executes too early |
| Test environment | Variable response times |
| Test data | Shared or inconsistent state |
| Parallel execution | Scenarios interfere with each other |

These are investigation hypotheses, not confirmed root causes.

## 4. Common Unreliable Approach

A fixed delay is sometimes used to give the application time to update:

```typescript
await page.waitForTimeout(5000);

await expect(
  page.getByText('Available')
).toBeVisible();
```

### Why This Is Not Ideal

- Five seconds
