# setPersistent

3.01


Determines whether a given variable survives from one launch of Acrobat to the next.

Only Boolean, Number, or String variables qualify as persistent global data.

When the application quits, persistent global variables are written out to the glob.js file in the user’s folder-level scripts directory, then read back in at the next start. From Acrobat 6.0 onward, that file is capped at 2-4 KB; anything beyond the limit appended to the string gets discarded.

A naming convention is wise whenever you set persistent global variables. Shaping them as myCompany_variableName, for example, guards against clashing with other persistent global variable names spread across the documents.

Parameters

| Parameter | Description |
| --- | --- |
| cVariable | Names the global property whose persistence you are setting. |
| bPersist | When true, the property lives on across Acrobat viewer sessions. When false (the default), the property stays reachable across documents yet does not survive between Acrobat viewer sessions. |

Example: Turn radius into a persistent property that other documents can reach.

```javascript
global.radius = 8;                      // Declare radius to be global
global.setPersistent("radius", true);   // Now say it's persistent
```

The volume figure worked out earlier will hold steady from one viewer session to the next, right up until global.radius is given a new value.
