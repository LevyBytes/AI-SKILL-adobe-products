# Platform-specific Schemes

Available URL schemes differ by operating system, and some apply only on one platform:

| Scheme | Platform | Purpose |
| --- | --- | --- |
| `https://` | Both | Open web browser |
| `mailto:` | Both | Compose email |
| `maps://` | macOS | Open Apple Maps |
| `bingmaps:` | Windows | Open Bing Maps |
| `facetime:` | macOS | Start FaceTime call |

Check the user's operating system before invoking a platform-only scheme. For example, `maps://` on Windows or `bingmaps:` on macOS can fail without visible feedback or can show an error.
