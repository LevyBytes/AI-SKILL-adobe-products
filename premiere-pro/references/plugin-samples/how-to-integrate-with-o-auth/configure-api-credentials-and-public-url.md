# 2. Configure API credentials and public URL

Put the required credentials in `public/config.js`. Required values:

- Dropbox API key
- Dropbox API secret
- Local Node.js server address; this sample assumes **http://localhost:8000**

> [!IMPORTANT]
> Along with the Dropbox API key and secret, configure the Dropbox application with this _Redirect URI_ for the local server:
>
> **http://localhost:8000/callback**

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

The server uses these settings in a later step.
