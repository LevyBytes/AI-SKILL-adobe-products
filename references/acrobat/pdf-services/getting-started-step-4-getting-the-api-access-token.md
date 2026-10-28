# Get an Adobe API access token

PDF Electronic Seal requests require an Adobe credential and an access token. The Adobe token is separate from a Trust Service Provider token used to authorize a certificate.

1. [Create an Adobe credential](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and keep its values in a trusted server environment. The downloaded `pdfservices-api-credentials.json` supplies `client_id` and `client_secret`.
2. Send those values as form-encoded fields to `POST https://pdf-services.adobe.io/token`. Use the Postman collection's Get AccessToken request or the [token request example](getting-started-step-4-getting-the-api-access-token/rest-api.md).
3. Read `access_token`, `token_type` and `expires_in` from the response. Subsequent PDF Services calls use `Authorization: Bearer <access_token>` and `x-api-key: <client_id>`.

The [token contract](https://developer.adobe.com/document-services/docs/apis/#operation/authentication.generatetoken) defines the response fields. Do not send the client secret as an operation header.
