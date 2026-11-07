# Sample Software Defect Reports

## Overview

This document contains three illustrative defect reports for a fictional property management SaaS application.

The examples demonstrate defect identification, reproduction steps, expected versus actual behavior, severity assessment, and supporting technical information.

*All scenarios and data are fictional and provided for portfolio demonstration purposes.*

---

## Defect 1 – Search Results Do Not Update After Applying a Filter

**Defect ID:** BUG-001  
**Module:** Property Management – Property List  
**Severity:** Medium  
**Priority:** High  
**Type:** Functional / UI

### Description

When a user applies a property status filter, the displayed results do not consistently update to reflect the selected status.

### Preconditions

- User is logged in.
- Property records with different statuses are available.

### Steps to Reproduce

1. Navigate to the Properties page.
2. Open the status filter.
3. Select "Available
