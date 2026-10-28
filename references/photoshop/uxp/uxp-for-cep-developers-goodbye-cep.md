# UXP for CEP Developers - Goodbye CEP

The Common Extensibility Platform became the preferred route for plugin developers who needed more than a minimal UI. Photoshop will retain it for now, but the path is expected to move through deprecation and eventual removal.

CEP is being retired for several reasons:

- A full Chromium build acts as CEP's web host. That puts a heavy load on the host application, especially because _each_ CEP plugin runs inside its _own_ Chromium instance.
- Direct host-app communication is not available from CEP. Host scripts must be authored in ExtendScript and sent into the application through EvalScript calls, leaving two JavaScript engines in play. Practically, plugin logic gets split between ExtendScript and JavaScript, and moving anything beyond simple parameters across that boundary is clumsy and inefficient.
- CEP plugins cannot use native host controls, so matching host dialogs and panels requires a lot of CSS adjustment.
- CEP's ExtendScript layer is tied to a very old JavaScript version without many current language features. As a result, developers have to manage two JavaScript environments.
