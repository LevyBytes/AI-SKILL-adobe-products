# API quick reference

**Endpoint:** `POST /v1/images/upsample-async`

**Base URL:** `https://firefly-api.adobe.io`

**Key request parameters:**

| Parameter | Description |
| --- | --- |
| image | Source image (upload ID or pre-signed URL) |
| scale | Supported scale factors are 2, 3, 4 and 6 |

**Authentication:** Bearer token via Adobe IMS + `x-api-key` header

**Response:** Returns a job ID and status URL. Poll the status URL until `status: succeeded`, then retrieve the output image URL. The maximum image output resolution is 6k.

For full schema details, see the [API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
