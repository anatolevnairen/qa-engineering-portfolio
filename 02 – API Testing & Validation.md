# API Testing & Validation – REST API Examples

## 1. Overview

**Testing Type:** API / Functional / Integration / Negative Testing  
**Tool:** Postman  
**API Style:** REST  
**Example:** Sample User Management API

**Objective:**

Demonstrate a structured approach to validating REST API functionality, including request parameters, response status codes, response structure, data validation, and error handling.

The examples use illustrative endpoints and do not represent a live production API.

## 2. API Testing Scope

The following areas are included:

- HTTP methods: GET, POST, PUT, PATCH, DELETE.
- HTTP status code validation.
- Request headers and parameters.
- Request body validation.
- Response body and schema validation.
- Positive and negative scenarios.
- Error handling.
- Data consistency.

## 3. Sample API Endpoints

Base URL: `https://api.example.com`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/users` | Retrieve users |
| GET | `/users/101` | Retrieve a specific user |
| POST | `/users` | Create a new user |
| PUT | `/users/101` | Replace user information |
| PATCH | `/users/101` | Update selected user information |
| DELETE | `/users/101` | Delete a user |

These are illustrative endpoint definitions, not verified live endpoints.

## 4. Test Scenarios

| ID | Test Scenario | Expected Result |
|---|---|---|
| API-001 | Retrieve users using GET | HTTP 200 and valid response data |
| API-002 | Retrieve an existing user | HTTP 200 and correct user information |
| API-003 | Retrieve a nonexistent user | HTTP 404 or documented not-found response |
| API-004 | Create a user with valid data | HTTP 201 and created resource details |
| API-005 | Create a user with missing required fields | Validation error; resource is not created |
| API-006 | Update an existing user | Successful update according to API contract |
| API-007 | Delete an existing user | Successful deletion according to API contract |
| API-008 | Submit an unsupported HTTP method | HTTP 405 or documented error response |
| API-009 | Send an invalid authentication token | HTTP 401 or documented authentication error |
| API-010 | Send an invalid request payload | HTTP 400 or documented validation response |

## 5. Example Request – GET User

**Request:**

```http
GET https://api.example.com/users/101
Accept: application/json
```

**Expected response:**

```json
{
  "id": 101,
  "name": "Alex Morgan",
  "email": "alex.morgan@example.com",
  "status": "active"
}
```

**Validation points:**
- HTTP status code is 200.
- Response content type is JSON.
- User ID matches the requested resource.
- Required fields are present.
- Field values have the expected data types.

## 6. Example Request – POST User

**Request:**

```http
POST https://api.example.com/users
Content-Type: application/json
```

**Request body:**

```json
{
  "name": "Alex Morgan",
  "email": "alex.morgan@example.com",
  "status": "active"
}
```

**Expected behavior:**
- Request is accepted if the payload meets the API requirements.
- A new user resource is created.
- The response contains the created resource or its identifier.
- The response uses the documented success status code, commonly HTTP 201.

## 7. Postman Test Examples

The following JavaScript examples can be used in the Postman Scripts tab for response validation.

### Validate HTTP Status Code

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

### Validate Response Content Type

```javascript
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});
```

### Validate Response Fields

```javascript
pm.test("User response contains required fields", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("id");
    pm.expect(response).to.have.property("name");
    pm.expect(response).to.have.property("email");
});
```

### Validate User Status

```javascript
pm.test("User status is active", function () {
    const response = pm.response.json();

    pm.expect(response.status).to.eql("active");
});
```

These scripts are illustrative and should be adapted to the actual API response contract.

## 8. Negative Testing & Edge Cases

Additional scenarios to consider:

- Missing authorization headers.
- Expired authentication tokens.
- Invalid JSON payloads.
- Incorrect data types.
- Missing mandatory fields.
- Duplicate resource creation.
- Invalid resource identifiers.
- Empty response bodies.
- Unexpected response structures.
- Boundary values and unusually large inputs.

## 9. API Quality Considerations

Beyond validating individual requests, API testing should consider:

- Data consistency between related endpoints.
- Correct handling of authentication and authorization.
- Appropriate error responses.
- Response time and performance expectations.
- Backward compatibility.
- Protection against unintended data exposure.

## 10. Conclusion

This example demonstrates a structured API testing approach combining functional validation, negative testing, response inspection, and automated assertions using Postman.

The examples are illustrative and have not been executed against a live API.
