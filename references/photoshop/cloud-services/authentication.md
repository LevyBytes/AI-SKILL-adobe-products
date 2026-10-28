# Authentication

Server-to-server authentication credentials let an application's server create access tokens and call APIs.

### Overview

An application can generate an access token without asking an end user to sign in or consent. It authenticates with its own credentials, the Client ID and Secret, and uses those credentials to create access tokens. Those tokens allow the application to call Adobe APIs and services for itself.

This pattern is also called "two-legged OAuth".

For automated token generation, call the endpoint with standard OAuth2 libraries. Industry-standard libraries are the fastest and safest way to integrate OAuth. Choose the OAuth 2.0 library for your application carefully. Your team's projects probably already use OAuth libraries to connect to other APIs. Use those libraries to regenerate tokens automatically when they expire.
