# Storage decision matrix

| Use Case | Recommended Storage | Why |
| --- | --- | --- |
| Production workflows | External presigned URLs | Full control, scalability, integration |
| Creative Cloud/ACP integration | Creative Cloud paths | Seamless CC workflow via ACP, direct access |
| Large files or batches | External storage | Better performance, cost-effective |
| XMP metadata / JSON manifests | Embedded (string/json) | Immediate response, no storage setup |
| Temporary edits | Hosted (presigned URLs) | No storage management required |
