# Scripting for specific applications - JavaScript variables

All scripts run inside a shared scripting environment. A startup script can place variables or functions there, and other scripts can then access those names. After a script defines them, the definitions stay available to later scripts during the same application session. Quitting the application clears those global variables and functions. Use distinctive variable names in scripts so one script does not accidentally overwrite global values that another script expects to remain available for the session.
