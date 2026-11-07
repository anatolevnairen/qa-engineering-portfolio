# Test Case Design – Login & Authentication

## 1. Overview

**Feature:** User Login and Authentication  
**Application:** Sample SaaS Web Application  
**Testing Type:** Functional, Negative, Boundary, Security-Oriented  
**Test Level:** UI and Integration

**Objective:**

Validate that users can securely authenticate using valid credentials, receive appropriate feedback for invalid login attempts, and access protected application functionality according to their authentication status.

## 2. Preconditions

- The application is available in the test environment.
- A registered test user exists.
- Valid and invalid test credentials are available.
- The login page is accessible.
- Browser developer tools are available for investigation when needed.

## 3. Test Scenarios

| ID | Test Scenario | Expected Result | Priority |
|---|---|---|---|
| TC-001 | Login with valid credentials | User successfully logs in and reaches the dashboard | High |
| TC-002 | Login with an incorrect password | Authentication is rejected and an appropriate error is displayed | High |
| TC-003 | Login with an unregistered email | Authentication is rejected without exposing sensitive account information | High |
| TC-004 | Submit login form with empty fields | Required-field validation is displayed | High |
| TC-005 | Enter an invalid email format | Appropriate email validation is displayed | Medium |
| TC-006 | Enter password with leading or trailing spaces | Behavior follows documented password-handling requirements | Medium |
| TC-007 | Toggle password visibility | Password visibility changes without modifying its value | Low |
| TC-008 | Refresh the page after successful login | Session behavior follows the application's authentication requirements | High |
| TC-009 | Access a protected page without authentication | User is redirected to login or receives an appropriate access restriction | High |
| TC-010 | Log out and use browser back navigation | Protected content is not accessible after logout | High |

## 4. Detailed Test Case Example

### TC-001 – Login with Valid Credentials

**Precondition:** A registered user account exists.

**Test Steps:**
1. Navigate to the login page.
2. Enter a valid email address.
3. Enter the corresponding password.
4. Select the Login button.
5. Observe the resulting page.

**Expected Result:**
- Credentials are accepted.
- User is authenticated.
- User is redirected to the dashboard.
- Authenticated application functionality becomes available.

### TC-002 – Login with Incorrect Password

**Precondition:** A registered user account exists.

**Test Steps:**
1. Navigate to the login page.
2. Enter a registered email address.
3. Enter an incorrect password.
4. Select the Login button.
5. Observe the response.

**Expected Result:**
- Authentication is rejected.
- An appropriate error message is displayed.
- User remains unauthenticated.
- Protected application functionality remains inaccessible.

## 5. Additional Testing Considerations

- Session expiration and timeout behavior.
- Multiple unsuccessful authentication attempts.
- Password reset workflow.
- Authentication state across browser tabs.
- Session handling after logout.
- Direct navigation to protected URLs.
- Appropriate handling of authentication errors.
- Avoidance of sensitive information in error messages and browser-visible logs.

## 6. Test Design Techniques

The following techniques can improve test coverage:

- Equivalence partitioning.
- Boundary value analysis.
- Negative testing.
- Decision table testing.
- Exploratory testing.
- Risk-based testing.

## 7. Conclusion

This test design demonstrates a structured approach to validating authentication functionality, covering successful and unsuccessful login scenarios, session behavior, and access control.

The test cases are illustrative and should be adapted to the actual application's requirements and authentication design.
