# API Testing – Test Scenarios & Validation

## 1. Overview

This document demonstrates a structured approach to REST API testing using a fictional property management application.

The focus is on validating endpoint behavior, HTTP status codes, response structures, data integrity, and error handling.

**Tools:** Postman, REST API, JSON

## 2. API Testing Objectives

- Validate successful API responses.
- Verify HTTP methods and status codes.
- Check response structure and data types.
- Validate required and optional fields.
- Test invalid and unexpected inputs.
- Verify authorization and access control.
- Check data consistency across requests.

## 3. Example API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/properties` | Retrieve properties |
| GET | `/api/properties/{id}` | Retrieve one property |
| POST | `/api/properties` | Create a property |
| PUT | `/api/properties/{id}` | Replace property information |
| PATCH | `/api/properties/{id}` | Update selected fields |
| DELETE | `/api/properties/{id}` | Delete a property |

These are illustrative endpoint definitions, not verified live endpoints.

## 4. API Test Scenarios

| Test ID | Scenario | Expected Result |
|---|---|---|
| API-001 | Retrieve property list | HTTP 200 and valid response |
| API-002 | Retrieve existing property | HTTP 200 and correct record |
| API-003 | Retrieve nonexistent property | HTTP 404 |
| API-004 | Create property with valid data | HTTP 201 or documented success response |
| API-005 | Create property with missing required field | HTTP 400 or documented validation error |
| API-006 | Update existing property | Successful update and correct data |
| API-007 | Update nonexistent property | Appropriate not-found response |
| API-008 | Delete existing property | Successful deletion |
| API-009 | Submit invalid data types | Validation error |
| API-010 | Access protected endpoint without authorization | HTTP 401 or 403, as applicable |

## 5. Example GET Request

**Request:**

```http
GET /api/properties/101
Accept: application/json
```

**Illustrative response:**

```json
{
  "id": 101,
  "name": "Riverside Apartments",
  "status": "Available",
  "units": 120
}
```

**Validation points:**

- Response status is 200.
- Response body is valid JSON.
- Property ID matches the requested ID.
- Required fields are present.
- Data types are correct.

## 6. Example POST Request

**Request:**

```http
POST /api/properties
Content-Type: application/json
```

**Request body:**

```json
{
  "name": "Riverside Apartments",
  "status": "Available",
  "units": 120
}
```

**Expected validation:**

- Successful creation returns the documented success status.
- A unique property ID is generated.
- The response contains the expected property information.
- The created record can subsequently be retrieved.

## 7. Postman Test Assertions

Example Postman JavaScript assertions for a successful GET request:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

pm.test("Property ID is correct", function () {
    const response = pm.response.json();
    pm.expect(response.id).to.eql(101);
});

pm.test("Property name is present", function () {
    const response = pm.response.json();
    pm.expect(response.name).to.be.a("string");
    pm.expect(response.name).to.not.be.empty;
});
```

## 8. Negative Testing

Negative testing evaluates how an API handles invalid requests and unexpected conditions.

Examples:

- Missing required fields.
- Invalid data types.
- Incorrect resource identifiers.
- Unsupported HTTP methods.
- Malformed JSON.
- Missing or expired authentication tokens.
- Insufficient user permissions.
- Duplicate records.

The exact expected response should follow the API contract and documented error-handling requirements.

## 9. Data Integrity & Validation

Additional checks should verify:

- Created records can be retrieved.
- Updated values persist correctly.
- Deleted records are no longer accessible.
- Related records remain consistent.
- Duplicate submissions are handled appropriately.
- API responses match the underlying business rules.

## 10. Skills Demonstrated

- REST API testing.
- Postman request configuration.
- HTTP methods and status codes.
- JSON request and response validation.
- Positive and negative testing.
- Data integrity checks.
- API error handling.
- Technical documentation.

## Disclaimer

This is an illustrative API testing exercise. The endpoints, requests, responses, and test scenarios are examples and have not been executed against a live application.
