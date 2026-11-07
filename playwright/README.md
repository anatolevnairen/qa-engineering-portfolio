# Playwright UI Automation – TypeScript

## Overview

A small UI automation project demonstrating functional login testing
using Playwright and TypeScript.

## Scope

The project covers:

- Successful login
- Invalid credentials
- Empty field validation
- Accessible element locators
- Assertions and test organization

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Chromium

## Project Structure

playwright/
├── tests/
│   └── login.spec.ts
├── package.json
├── playwright.config.ts
└── README.md

## Implementation Approach

The sample login interface is created using page.setContent().
This allows the tests to run independently without requiring
an external application or live authentication service.

The tests use:

- test.describe() for test grouping
- test.beforeEach() for setup
- getByLabel() for form fields
- getByRole() for accessible interactions
- expect() for result validation

## How to Run

Install dependencies:

npm install

Install Chromium:

npx playwright install chromium

Run tests:

npm test

Run tests with browser visible:

npm run test:headed

## Test Coverage

| Test ID | Scenario | Expected Result |
|---|---|---|
| TC-001 | Valid credentials | Login successful |
| TC-002 | Invalid credentials | Error message displayed |
| TC-003 | Empty fields | Required-field message displayed |

## Notes

This is a demonstration project using a simulated login interface.
It is not connected to a production application or real authentication service.
