# Authentication

Authenticate requests sent to Firefly APIs.

### Overview

Firefly APIs require each request to carry an encrypted access token. A secure server-side application obtains that token by calling [Adobe Identity Management System (IMS)](https://www.adobe.com/content/dam/cc/en/trust-center/ungated/whitepapers/corporate/adobe-identity-management-services-security-overview.pdf) with your **Client ID** and **Client Secret**.
