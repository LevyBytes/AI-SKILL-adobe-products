# Overview of the OAuth workflow

Three components participate in this flow:

- Your Premiere Pro UXP Plugin
- Your server endpoints (for this development example, use a local Node.js server)
- The service provider's OAuth endpoints (this example uses the Dropbox API)

At a high level, the sequence is:
_(in the steps below, **server** means the local Node.js server, and **service** means Dropbox)_

1. The Premiere Pro UXP Plugin contacts the server to request a session ID
1. The server sends back a unique ID associated with that Premiere Pro session
1. The Premiere Pro UXP Plugin opens the user's default browser at a URL for one server endpoint
   - In the web browser, the user authorizes the server and the service to communicate
1. The server and service complete the OAuth code grant handshake
1. The server records the access token alongside the session ID
1. The Premiere Pro UXP Plugin checks with the server for an access token for that session ID. When one exists, the server returns it
1. With that access token, the Premiere Pro UXP Plugin routes service API calls through the server
