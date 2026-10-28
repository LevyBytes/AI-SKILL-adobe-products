# Platform capability comparison

Version qualifiers and roadmap states such as "Planned" and "In progress" apply to the individual entries. They do not guarantee availability in every host or release.

| Capability | UXP | CEP | ExtendScript |
| --- | --- | --- | --- |
| Developer tools | UDT | Chrome debugger; ZXP packaging and signing | ESTK, deprecated and unavailable on macOS; VSCode ExtendScript Debugger |
| Package | .ccx ZIP with manifest and code | .zxp archive with manifest, code and signing certificate | No dedicated bundle; supports ZXP |
| Signing | Integrity hash, without signing | Signing can be disabled; self-signed certificates accepted | No |
| Binary representation | No | Yes | JSXBIN |
| Sandbox | User consent for most file access and process launches | Unrestricted disk, machine resources, process launches and Vulcan messaging | Unrestricted disk, machine resources and process launches |
| Consent for privacy | Yes | No | No |
| Persistent file permissions | Yes | Unnecessary with full access | Unnecessary with full access |
| Secure storage | Yes | No | No |
| Vulcan access | No | Yes | No |
| BridgeTalk access | No | Yes | Yes |
| Load native external modules | Yes, from 6.0 | No | Yes |
| Load remotely | No | Yes, discouraged | No |
| JavaScript engine | V8 | Chromium and Node | ES3 (1999+) with Adobe extensions |
| XML literals | No | No | Yes |
| XMP | Planned for 2023 | No | Yes |
| HTML | Subset | Full | Not applicable |
| CSS | Subset | Full | Not applicable |
| SVG | Subset | Full | Not applicable |
| HTML5 Canvas | Planned for 2022 | Full | Not applicable |
| WebView | Yes, from 6.0 | iFrame | No |
| WebGL | Through WebView | Native | No |
| WebRTC | Through WebView | Yes | No |
| HTML5 DOM | Subset | Full | Not applicable |
| Localization | Yes | ZString | ZString |
| UI renderer | UXP and host APIs | CEF | ScriptUI |
| Panels | Yes | Yes | No |
| Flyout menus | Yes | Yes | No |
| Modal dialogs | Yes | Yes | Yes |
| Modeless dialogs | No | Yes | No |
| Invisible plugins | Commands | Yes | Yes |
| Basic alert, confirm and prompt | No; Photoshop provides an `alert()` method | Yes | Yes |
| Built-in components | Native Spectrum UXP | Browser | Native |
| UI outside the plugin | Dropdowns and popovers | No | Yes |
| React | Partial | Yes | No |
| Spectrum Web Components | In progress | Yes | No |
| Custom fonts | Installed fonts | Web fonts | Installed fonts |
| Table layout | Yes | Yes | No |
| Flexbox | Yes | Yes | Similar stacking |
| Grid layout | No | Yes | No |
| UI definition | HTML, CSS and JS subsets | HTML, CSS and JS | ScriptUI JS |
| Drag and drop | Planned for 2022 | Yes | No |
| Theme awareness | Yes | Yes | Yes |
| Shared context for multiple commands or panels | Yes | Separate contexts require messaging | No |
| Startup | Very quick | Slow, over one second | Very quick |
| Memory | Medium | High, browser per plugin | Small |
| Host size impact | Medium | Large, CEF and Node | Small |
| Discovery | CCD Plugin Marketplace | Exchange | No dedicated mechanism; Marketplace sharing possible |
| Restart after installation | No | Yes | Needed for menu visibility |
| Register keyboard shortcuts | No in Photoshop; yes in XD | Yes | No |
| Socket client | WebSockets | WebSockets and Node | Yes |
| Socket server | No | Node | Yes |
| C++ communication | Yes | Yes | Yes |
| Communication within the host | Yes | Vulcan and BridgeTalk | BridgeTalk |
| Preprocessor | None unless the developer uses webpack | None unless the developer uses webpack | Yes |
| Scripting | In progress | No | Yes |
| Cross-platform | Yes | Yes | Yes |
