# TSA Information (_tsaOptions_) :

Through these TSA parameters, the [timestamping endpoint plus its credentials](step-2-optional-procure-timestamping-url-and-credentials.md) get wrapped together.

- **TSA URL** (_url_) : **Required** : The TSA URL that the request hits to fetch a timestamp token.
- **TSA Credential Authorization Parameter** (_credentialAuthParameters_) : Holds the credential details that authenticate against the TSA URL.

  - **TSA Username** (_username_) : Provide the username that authenticates the TSA URL.
  - **TSA Password** (_password_) : Provide the password that authenticates the TSA URL.
