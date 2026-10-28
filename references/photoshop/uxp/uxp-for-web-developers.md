# UXP for Web Developers

At first, UXP development in Adobe applications can look familiar to web developers. It uses HTML, CSS, and JavaScript structures that resemble web pages, but the result is actually Photoshop dialogs and panels.

Knowing those three technologies is not enough for UXP plugin work; you also need familiarity with the host application's API. That is the point where Web and UXP separate sharply. Websites have no equivalent to an application API, while useful work in XD, Photoshop, or any other Creative Cloud application with UXP support requires app knowledge.

The Adobe Photoshop API docs are [here](photoshop-api-overview/reference-index.md). The Adobe XD API docs are [here](https://developer.adobe.com/xd/uxp/develop/reference/).

UXP plugin directories are organized differently from ordinary websites. A required [manifest file](uxp-manifest-v4/reference-index.md) sits at the directory root. An icon set containing png images is also used when a panel is minimized in Photoshop. These icons are optional during development, but distribution makes them _mandatory_; submission will fail if the plugin lacks the correct icon structure.
