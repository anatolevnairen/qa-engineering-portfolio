# qa-engineering-portfolio
Practical QA portfolio featuring test documentation, API testing, UI automation examples, and technical problem-solving exercises.
# QA Engineering Portfolio

Welcome to my QA Engineering Portfolio.

I am a QA professional with 6 years of experience in software quality assurance, including web and mobile applications, SaaS platforms, API integrations, and emerging technologies.

This repository contains selected practical examples of my approach to software testing, technical investigation, test design, and quality validation.

## Areas of Focus

- Manual and exploratory testing
- Functional, regression, and integration testing
- API testing and validation
- UI automation with Playwright and TypeScript
- Test planning and test case design
- Defect investigation and documentation
- SQL and data validation
- AI-powered application testing

## Repository Structure

| Folder | Description |
|---|---|
| `test-planning/` | Test strategies, test plans, and coverage examples |
| `test-cases/` | Structured test scenarios and test cases |
| `api-testing/` | API testing examples and validation |
| `playwright/` | UI automation examples using Playwright and TypeScript |
| `bug-reports/` | Sample defect reports and investigation examples |
| `technical-analysis/` | Technical problem-solving exercises |

## Tools & Technologies

**Testing:** Jira, Xray, TestRail, Postman, Swagger

**Automation:** Playwright, TypeScript, Selenium, Katalon

**Development & Data:** JavaScript, Java, Python, SQL, Git, GitHub

**Methodologies:** Agile, Scrum, Waterfall, SDLC

## Portfolio Approach

The examples in this repository are created for demonstration and professional portfolio purposes.

They illustrate testing approaches, technical reasoning, and documentation practices. Sample exercises are distinguished from production project experience.

## About

My goal is to combine strong QA fundamentals with growing automation and AI testing capabilities, contributing to reliable, user-focused technology products.

# Playwright UI Automation – TypeScript

## Project Overview

This project demonstrates practical UI test automation using Playwright and TypeScript.

The examples use a simulated login form to demonstrate common authentication-related test scenarios and Playwright testing techniques.

## Technologies

- Playwright
- TypeScript
- Node.js
- GitHub

## Project Structure

```text
playwright/
├── tests/
│   └── login.spec.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Test Scenarios

The automated tests cover:

1. Successful login with valid credentials.
2. Login rejection with invalid credentials.
3. Login rejection with empty credentials.

## Automation Techniques Demonstrated

- Playwright test runner
- TypeScript test organization
- `test.describe()` and `test.beforeEach()`
- Role-based and label-based locators
- User interaction simulation
- Assertions using `expect()`
- Reusable test setup
- Browser configuration

## How to Run

Install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

Run tests:

```bash
npm test
```

Run tests with a visible browser:

```bash
npm run test:headed
```

## Scope and Limitations

This is a demonstration project using a locally simulated login form. It does not connect to a production application, backend authentication service, or live API.

The examples are intended to demonstrate test design, automation structure, and Playwright fundamentals.

