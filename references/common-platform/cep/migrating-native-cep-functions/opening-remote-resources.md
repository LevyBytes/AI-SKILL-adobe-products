# Opening Remote Resources

CEP developers use the `window.cep.util` object for `openURLInDefaultBrowser`, `registerExtensionUnloadCallback`, and `storeProxyCredentials`. UXP provides `openExternal` in the "shell" module as the counterpart for `openURLInDefaultBrowser`, opening a web link in the system browser. The UXP shell module has no counterparts, and is not expected to add counterparts, for CEP's `registerExtensionUnloadCallback` or `storeProxyCredentials`.

In UXP, launch external files or remote resources with `openPath` and `openExternal`. With UXP 6.0.2+, [manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process) requires a declaration of the URI schemes and file extensions that the plugin may launch.
