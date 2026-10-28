# Inline content usage

The `/v2/execute-actions` endpoint accepts inline content, meaning content embedded directly in the request, for **text-based resources only**. Correct API usage depends on knowing which resource categories allow that form.

**Payload Size Limits:**

Restrict inline content to 50 KB for an individual resource, and keep the full request payload under 1 MB. When resources are larger, including scripts, actions, or images, place them in external storage and reference them with presigned URLs.
