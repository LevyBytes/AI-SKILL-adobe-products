# Request envelope (breaking change)

**V1 input was `options.artboard[]`, not `inputs[]`.** The current artboard-migration.md guide contains an incorrect V1 example that uses `inputs[]`. The real V1 schema used `options.artboard[]`, and V2 removes the enclosing `options` wrapper entirely.

| V1 | V2 |
| --- | --- |
| `options.artboard[n].href` + `storage` | `images[n].source.url` |
| `options` container | Removed entirely |
| Max images: undocumented | Max images: **25** (enforced) |
| _(not in V1)_ | `artboardSpacing` (integer pixels, default 50) |
