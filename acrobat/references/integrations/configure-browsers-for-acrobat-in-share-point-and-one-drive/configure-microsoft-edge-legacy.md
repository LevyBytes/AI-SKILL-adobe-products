# Configure Microsoft Edge Legacy

Trouble with security zones can come up when your Microsoft Office 365 server and the Document Cloud server sit in two separate security zones and only one of them runs in protected mode. Set up that way, the Microsoft server has no way to reach the Adobe server, and the session cookie can't validate your session.

Clearing it up means putting one of these solutions in place:

- Take any server URLs out of the trusted zone. Either admins push this configuration to everyone, or each user changes their own browser settings by hand.
- Walk through these steps to set up your browser:

Launch Control Panel > Internet Options, and switch to the Security tab.

From there, pick Trusted Sites > Sites, then add the entries below to the Trusted Zone wherever they aren't present yet:

- \*.microsoftonline.com

Adobe server addresses:

- \*.adobe.com
- \*.acrobat.com
- \*.adobe.io
- \*.adobelogin.com

Close the Trusted Sites dialog and select Ok
