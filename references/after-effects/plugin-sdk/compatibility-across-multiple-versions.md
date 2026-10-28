# Compatibility Across Multiple Versions?

As a rule, build your plug-ins against the newest After Effects SDK headers, which puts the latest suites and API capabilities within their reach. Once a fresh After Effects version ships, you typically won't have to put out a new build unless you want to tap functionality the new SDK has opened up. That said, never declare compatibility with a new After Effects version until you've actually tested your plug-in in it.

Test your plug-in carefully in every After Effects version it claims to support. Should you need a block of code that runs only under particular After Effects versions, you can always read the API version from `PF_InData`.version for effects, or from the major and minor_versionL handed to your AEGP at the Entry Point.

When even finer version checks are needed, a plug-in can fire off a script with `AEGP_ExecuteScript` (`AEGP_UtilitySuite6`) that reads one of these attributes:

Use `app.version` for the version string (for example, `11.0.1x12`) and `app.buildNumber` for the build number (for example, `12`).
