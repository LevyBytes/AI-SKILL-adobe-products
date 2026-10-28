# Host Application and UXP

- **Premiere version** (v25.6): controls which Premiere DOM APIs are present.
- **UXP version** (v8.1): controls which UXP Core APIs are present.

Every Premiere release bundles a particular UXP version; Premiere v25.6, for example, includes UXP v8.1.

Handling Version Mismatches

When a plugin uses an API introduced in UXP v8.2 but runs in Premiere v25.6, which includes only UXP v8.1, errors will be thrown and the plugin will fail. The same problem occurs when the plugin needs APIs added in Premiere v25.7 while the user remains on v25.6.

To prevent compatibility failures, target APIs that exist in both versions, or add fallback behavior for older releases when possible.
