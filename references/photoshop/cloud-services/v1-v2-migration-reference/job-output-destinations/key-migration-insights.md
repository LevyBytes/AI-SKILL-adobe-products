# Key migration insights

**1. Response Structure Mirror:**
In V2, `result.outputs[]` in the status response reflects the request's `outputs[]` structure directly:

- Fields from the request come back again, including mediaType, quality, width, and similar output settings
- Destination data is retained or augmented, such as a hosted URL or embedded content
- `_links` and `input` are not added in V2 responses

**2. Status Location:**

- V1: status is tracked per output (`outputs[].status`)
- V2: status is tracked once at the job root (`status`)

**3. Hypermedia Links:**

- V1: `_links` objects appear throughout the payload
- V2: hypermedia links are removed in favor of direct data structures

**4. Destination Determination:**
The destination fields in the status payload follow the request:

- If the request has `url`, the response has `url` (external or hosted-generated)
- If the request has `embedded`, the response has `embedded` plus `content`
- If the request has `creativeCloudPath`, the response has `creativeCloudPath`
- If the request combines `scriptOutputPattern` with hosted output, the response can include multiple `url` entries

**5. Output Array Expansion:**
Only `scriptOutputPattern` expands the output array (1 request → N response outputs). Every other destination type keeps a 1:1 mapping.
