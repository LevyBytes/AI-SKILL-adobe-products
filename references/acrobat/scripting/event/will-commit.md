# willCommit

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Boolean | R |

Confirms the running keystroke event ahead of the data being committed. It can serve to inspect target form field values — checking, for instance, whether character data went in where numeric data belonged. JavaScript flips this property to true after the final keystroke event and before the field undergoes validation. Example: The layout of a keystroke event is illustrated below.

Read `event.value`. When `event.willCommit` is true, apply final-value validation; otherwise apply keystroke-level validation. Supply those application-specific checks in separate branches.
