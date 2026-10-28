# Premiere Application

The [`app`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/ppro-reference/index.md#overview) object is the route into the other Premiere objects and methods.

Retrieve the currently active project with:

```javascript
const project = await app.Project.getActiveProject();
```

From that project, request the active sequence this way:

```javascript
const sequence = await project.getActiveSequence();
```
