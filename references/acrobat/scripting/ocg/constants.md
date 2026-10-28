# constants

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Every OCG object picks up this inherited property, a wrapper that stores assorted constant values.

intents Object

Although an OCG's intent array may hold any strings at all, only the ones gathered in this object mean anything to Acrobat.

| Property | Description |
| --- | --- |
| design | Marks an OCG object's intent as design. |
| view | Marks an OCG object's intent as view. |

states Object

You use the states object to seed the OCG's starting state (see initState).

| Property | Description |
| --- | --- |
| on | Stands for an OCG whose state is ON. |
| off | Stands for an OCG whose state is OFF. |
