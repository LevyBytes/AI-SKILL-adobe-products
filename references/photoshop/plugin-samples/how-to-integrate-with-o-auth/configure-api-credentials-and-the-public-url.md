# 2. Configure API credentials and the public URL

Put the needed credential values in `public/config.js`. Provide:

- Dropbox API key
- Dropbox API secret
- Public `ngrok` URL

```js
const dropboxApiKey = "YOUR-DROPBOX-API-KEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "http://localhost:8000";

try {
  if (module) {
    module.exports = {
      dropboxApiKey: dropboxApiKey,
      dropboxApiSecret: dropboxApiSecret,
      publicUrl: publicUrl,
    };
  }
} catch (err) {
  console.log(err);
}
```

A later step uses these settings from the server.
