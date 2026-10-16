# Create a new project

After the Firefly API product card appears, select **Create project**.

1. Begin by entering a project name so the project can be located later in the Developer Console. This name can be changed afterward.
2. In the next modal, choose **Save configured API**. The following screen shows your **client ID** (API key).
3. In the left navigation, choose **OAuth Server-to-Server**, then select **Retrieve client secret** to reveal the secret value.

[Figure: OAuth Server-to-Server credential page](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/images/credential-page.png)

**Firefly API calls require developer(s) to have a valid client ID (API key) and an access token**. Because only organization admins can access these Console projects, the **Generate access token** button on the credential overview page is not a good developer handoff path.

Rather than sharing access tokens, share the **client ID** and **client secret** with developers who need API access. Every access token lasts 24 hours, so developers can create replacements programmatically as needed.

Once the Developer Console project is configured:

- In the **Generate access tokens** block, choose **View cURL command**.
- Copy the command and provide it to developers in your org. The result should resemble:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}&scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
```

For more detail on access token generation, see the [authentication guide](../authentication.md). That guide also covers programmatic client-secret rotation.
