# Overview of the OAuth workflow

The workflow has three cooperating pieces:

- The Photoshop plugin
- The server endpoints; in this development example, the server is a local Node.js instance
- The service providers OAuth endpoints; for this example, those endpoints come from the Dropbox API

At a high level, the flow works like this:

1. The Photoshop plugin contacts the server to request the session ID
1. The server replies with a unique ID for that Photoshop session
1. The plugin opens a tab in the user's default browser and points it to a server endpoint URL
1. The server performs the full OAuth code grant workflow
1. The user grants the plugin the required permissions
1. The server stores the access token together with the session ID
1. The plugin polls the server for the session ID until the access token is ready. When it is available, the server returns the access token
1. The plugin calls the service API with the access token
