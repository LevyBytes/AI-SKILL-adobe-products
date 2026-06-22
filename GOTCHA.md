# Adobe Products — Gotchas

- Keep product scope narrow. UXP, ExtendScript, and REST surfaces share concepts but have product-specific objects and behavior.
- Treat labels, code identifiers, API names, endpoints, enum values, keyboard shortcuts, and version numbers as exact reference facts.
- For authenticated services (PDF Services, Firefly Services, electronic seal), verify credentials, entitlements, region, and the actual API response before coding.
- For plugin or scripting work, verify against the installed host app, manifest version, and SDK version.