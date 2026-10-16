# Windows "Failed to load Addon" / "The specified module could not be found"

That message usually points to a Debug-mode `.uxpaddon`. Debug builds depend on Visual Studio debug runtimes that ordinary end-user systems usually do not have. The addon may load on a development machine while failing on a clean Windows install. Rebuild it in Release mode, confirm project settings such as `.uxpaddon` output and absence of debug dependencies, and then redistribute it.
