# Prerequisites

Before starting, make sure these are available:

1. **Authentication token**: Use the [Authentication guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/getting-started/index.md) to obtain your OAuth 2.0 Bearer token
2. **API key**: Use your Client ID from the Adobe Developer Console
3. **Image storage**: Provide a publicly accessible URL for the input image, such as S3, Azure, Dropbox, or another pre-signed URL

Create these environment variables:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export TOKEN="your_access_token"
export API_KEY="your_client_id"
```
