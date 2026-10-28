# Where Installers Should Put Plug-ins

Dropping your plug-ins into the shared location lets Premiere Pro pick them up too, whenever it happens to be installed alongside.

Under Windows, you can read the explicit path to the shared plug-ins folder from this registry key: HKLM\SOFTWARE\Adobe\After Effects\[version]\CommonPluginInstallPath

For Mac, that shared folder lives here: /Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore

Across every CC release the version segment stays pinned at 7.0; older releases use CSx instead. A concrete sample: /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/

Steer clear of macOS aliases and Windows shortcuts here — Premiere Pro won't follow either one.
