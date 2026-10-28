# Output format changes

| Format | V1 | V2 | Type |
| --- | --- | --- | --- |
| JPEG quality | Numeric `1–100` | String enum: `"low"`, `"medium"`, `"high"`, `"maximum"` | Breaking Change |
| PNG compression | Scale `0–2` (3 levels) | Scale `"default"`, or `0–9` (10 levels) | Breaking Change |
| TIFF compression | Named string | Named string (unchanged) | Unchanged |
| PSD output | Supported | Supported (unchanged) | Unchanged |
| Cloud PSD (`.psdc`) | Supported via Sensei engine | `mediaType: "document/vnd.adobe.cpsd+dcxucf"` | Renamed |
| ICC profile per output | Not available | `iccProfile: {standard: "..."}` or `{custom: {...}}` | Net New |
