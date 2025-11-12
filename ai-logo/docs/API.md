# API Documentation

## Overview

This document describes the API endpoints available in the AI Logo Maker application.

## Base URL

```
Development: http://localhost:3000
Production: https://your-domain.vercel.app
```

## Authentication

All API routes are protected by Clerk authentication. Include the session token in your requests.

```javascript
headers: {
  'Authorization': `Bearer ${sessionToken}`
}
```

---

## Endpoints

### 1. Generate Logo Ideas

Generate AI-powered logo concept ideas based on user input.

**Endpoint**: `POST /api/generate-ideas`

**Request Body**:
```json
{
  "brandName": "Indian Spice",
  "description": "Indian Restaurant",
  "designStyle": "Modern Mascot Logos",
  "colorPalette": "Warm Sunset"
}
```

**Response**:
```json
{
  "success": true,
  "ideas": [
    "Chef Elephant with spices",
    "Smiling Mango character, Turban",
    "Friendly Tiger holding Curry",
    "Animated Nan bread chef",
    "Peacock waiter with plate"
  ]
}
```

**Status Codes**:
- `200`: Success
- `400`: Bad Request (missing parameters)
- `401`: Unauthorized
- `500`: Server Error

---

### 2. Generate Logo Prompt

Create a detailed prompt for logo generation based on selected idea.

**Endpoint**: `POST /api/generate-prompt`

**Request Body**:
```json
{
  "brandName": "Indian Spice",
  "description": "Indian Restaurant",
  "selectedIdea": "Chef Elephant with spices",
  "designStyle": "Modern Mascot Logos",
  "colorPalette": "Warm Sunset"
}
```

**Response**:
```json
{
  "success": true,
  "prompt": "Create a modern and sharp-lined logo for an Indian Restaurant called 'Indian Spice'..."
}
```

**Status Codes**:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `500`: Server Error

---

### 3. Generate Logo Image

Generate the actual logo image using AI.

**Endpoint**: `POST /api/generate-logo`

**Request Body**:
```json
{
  "prompt": "Create a modern and sharp-lined logo...",
  "brandName": "Indian Spice"
}
```

**Response**:
```json
{
  "success": true,
  "imageUrl": "https://replicate.delivery/pbxt/...",
  "logoId": "abc123xyz"
}
```

**Status Codes**:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Rate Limit Exceeded
- `500`: Server Error

---

### 4. Save Logo

Save generated logo to user's account.

**Endpoint**: `POST /api/save-logo`

**Request Body**:
```json
{
  "userId": "user_123",
  "brandName": "Indian Spice",
  "description": "Indian Restaurant",
  "designStyle": "Modern Mascot Logos",
  "colorPalette": "Warm Sunset",
  "imageUrl": "https://...",
  "prompt": "..."
}
```

**Response**:
```json
{
  "success": true,
  "logoId": "logo_abc123",
  "message": "Logo saved successfully"
}
```

**Status Codes**:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `500`: Server Error

---

### 5. Get User Logos

Retrieve all logos for the authenticated user.

**Endpoint**: `GET /api/user-logos`

**Query Parameters**:
- `limit` (optional): Number of logos to return (default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Response**:
```json
{
  "success": true,
  "logos": [
    {
      "id": "logo_abc123",
      "brandName": "Indian Spice",
      "imageUrl": "https://...",
      "createdAt": "2025-01-15T10:30:00Z"
    }
  ],
  "total": 5,
  "hasMore": false
}
```

**Status Codes**:
- `200`: Success
- `401`: Unauthorized
- `500`: Server Error

---

### 6. Delete Logo

Delete a logo from user's account.

**Endpoint**: `DELETE /api/logo/:logoId`

**Parameters**:
- `logoId`: The ID of the logo to delete

**Response**:
```json
{
  "success": true,
  "message": "Logo deleted successfully"
}
```

**Status Codes**:
- `200`: Success
- `401`: Unauthorized
- `404`: Logo Not Found
- `500`: Server Error

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

### Common Error Codes

- `INVALID_INPUT`: Invalid request parameters
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT`: Too many requests
- `SERVER_ERROR`: Internal server error
- `AI_ERROR`: AI service error

---

## Rate Limiting

API endpoints are rate-limited to prevent abuse:

- **Generate Ideas**: 10 requests per minute
- **Generate Logo**: 5 requests per minute
- **Other endpoints**: 60 requests per minute

Rate limit headers:
```
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 9
X-RateLimit-Reset: 1642345678
```

---

## Webhooks (Future)

Webhook support for async logo generation will be added in future versions.

---

## SDK Examples

### JavaScript/TypeScript

```javascript
// Generate logo ideas
const generateIdeas = async (data) => {
  const response = await fetch('/api/generate-ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Usage
const ideas = await generateIdeas({
  brandName: 'My Brand',
  description: 'Tech startup',
  designStyle: 'Modern',
  colorPalette: 'Blue Ocean',
});
```

### cURL

```bash
# Generate ideas
curl -X POST https://your-domain.vercel.app/api/generate-ideas \
  -H "Content-Type: application/json" \
  -d '{
    "brandName": "My Brand",
    "description": "Tech startup",
    "designStyle": "Modern",
    "colorPalette": "Blue Ocean"
  }'
```

---

## Changelog

### v0.1.0
- Initial API release
- Basic CRUD operations for logos
- AI-powered generation endpoints

---

## Support

For API support, please:
- Check the [FAQ](./FAQ.md)
- Open an issue on [GitHub](https://github.com/yourusername/ai-logo/issues)
- Contact: api-support@your-domain.com
