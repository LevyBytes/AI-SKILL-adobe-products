# Permission module for Scripts

The 'permission' module is one of the manifest modules that controls access and behavior for many APIs. The [plugin manifest section](permissions-definition.md) explains each permission and option in detail; for completeness, this table shows the permissions that **scripts** receive implicitly.

| Permission module                | Value            | Description                                                          |
| -------------------------------- | ---------------- | -------------------------------------------------------------------- |
| `clipboard`                      | `"readAndWrite"` | Lets scripts read clipboard content and write new clipboard content. |
| `localFileSystem`                | `"fullAccess"`   | Gives complete file-system access.                                   |
| `network`                        | `"all"`          | Permits network access.                                              |
| **webview**                      | _any_            | Allows access to any domain.                                         |
| `launchProcess`                  | _any_            | Allows launching applications and files with full access.            |
| `allowCodeGenerationFromStrings` | false            | Does not apply to scripts.                                           |

**Note:** Script permissions can look more permissive than plugin permissions, while plugins still have their own benefits. The [introduction to scrips and plugins](../uxp-scripts-and-plugins.md) helps compare which model fits a use case.
