# Step 1: Get Access Token Using Credentials

a. Request Platform API for Generating the Access Token - At this stage an authentication token is acquired using valid credentials. Usually that means handing the server authentication details such as a client_id and client_secret, and the server then issues the token. From there the token drives authorization and grants access to resources.
Passing identifiers like a client_id and client_secret to the server prompts it to mint the token, after which that token underpins the authorization and resource access that follow.

b. Received Access Token To Client - With the token generated in the prior step, Acrobat Services sends it back to the client. The client then uses it to authenticate the API requests that follow. Think of the access token as a digital key that lets its holder reach protected resources on behalf of whoever — user or application — obtained it.
