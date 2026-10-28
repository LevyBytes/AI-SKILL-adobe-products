# Rotating Secrets

Rotate your client secret on the cadence your situation requires: for some teams that is every few months; for others it is daily.

Secret rotation is strongly recommended after a leak or suspected unauthorized access. Periodic client-secret rotation is also an industry-standard way to improve an application's security posture. As with access tokens, rotation can be done in the Developer Console UI or through an API.

**Org admins**: Open your project in Adobe Developer Console. Select the **Add to Project** button, choose **API**, then add **I/O Management API** to the project. This API lets the credential read, delete, and create client secrets. Configure the credential name before saving.

For developers to rotate secrets successfully without asking the org admin, they need:

- `orgId`
- `projectId`
- `credentialId`
- Access token

Go to the OAuth server-to-server credential overview page. Compare its URL with the template below and copy `orgId`, `projectId`, and `credentialId` from it:

```bash
https://developer.adobe.com/console/projects/{orgId}/{projectId}/credentials/{credentialId}/details/oauthservertoserver
```

Then obtain an access token. Ensure the `scope` parameter contains the scopes required by the I/O Management API, and run this command:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope=AdobeID,openid,read_organizations,additional_info.projectedProductContext,additional_info.roles,adobeio_api,read_client_secret,manage_client_secrets'
```
