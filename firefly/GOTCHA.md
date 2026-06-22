# Adobe Firefly — Gotchas

- Stay inside the Firefly references unless the task explicitly needs another Adobe product or shared platform behavior.
- Desktop, web, UXP, ExtendScript, and REST surfaces can name the same feature differently; confirm you are in the right surface.
- For authenticated services, verify credentials, entitlements, region, and the actual API response before coding.
- For scripting, verify against the installed app/SDK version.