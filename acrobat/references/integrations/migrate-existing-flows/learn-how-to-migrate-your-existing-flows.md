# Learn how to migrate your existing flows.

Your present Power Automate workflows can be shifted over to a different authentication method. Do this by establishing a fresh connection through the OAuth method, then pointing all actions in your existing flows at that new connection — which keeps the workflows running properly under the updated credentials.

Set up a fresh Oauth Server-to-Server connection within Power Automate.

Note

Two paths are open to you: carry your current JWT Service Account Credentials across to Oauth Server-to-Server credentials, or generate brand-new Oauth Server-to-Server Credentials.

Build a fresh Power Automate connection that relies on the Oauth Server-to-Server credentials.

Should you wish to rename the connection, click its name and then click Edit.

Bring up your flow and point every one of your actions at the connection you just made.

Note

When a sizable amount of data is involved, export the flow and bring it back in. As that import runs, pick the connections for each of the flow's connectors. Doing so refreshes the connections across all actions at once.

This moves your current Power Automate workflows onto a fresh authentication method spanning every action.

### More like this

- Connect Adobe PDF Services for Power Automate
- Connect Adobe PDF Services for PowerApps
- Set up Adobe PDF Services connector
