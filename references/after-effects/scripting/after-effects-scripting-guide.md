# After Effects Scripting Guide

After Effects scripts automate application operations through ExtendScript. Expressions calculate property values separately; they cannot read a script's variables or functions. Start with a small script, then use the object model to reach projects, compositions, layers and properties.

## Run a first script

1. Save the following original example as a UTF-8 text file named `inspect-project.jsx` in a folder you control.
2. Open an After Effects project and select a project item or open a composition.
3. Choose **File > Scripts > Run Script File**, select `inspect-project.jsx`, and choose **Open**.
4. The dialog reports the active item's name, or asks you to select one. It does not change the project.

```javascript
(function () {
    var project = app.project;
    if (!project) {
        alert("Open a project first.");
        return;
    }
    var item = project.activeItem;
    alert(item ? item.name : "Select a project item or open a composition.");
}());
```

This inspection needs no file-write or network permission. Enable those capabilities only when your script uses them; see [scripting permissions and debugging](activating-full-scripting-features/reference-index.md).

## Choose the next reference

- Open when learning the separation between scripts, expressions and object attributes. [Scripting concepts](introduction-to-scripting-in-after-effects/reference-index.md).
- Open when choosing a scripting language feature or host facility. [ExtendScript language](the-extend-script-language/reference-index.md).
- Open when selecting script encoding or binary packaging. [Script file formats](the-jsx-and-jsxbin-file-name-extensions/reference-index.md).
- Open when installing menu scripts, creating panels or invoking scripts from outside the application. [Loading and running scripts](loading-and-running-scripts/reference-index.md).
- Open when finding the API objects for your project operation. [Projects and application APIs](context-application-projects.md).
- Open when inspecting compositions, layers and their contents. [Layer APIs](context-layers.md).
- Open when changing animatable values or keyframes. [Properties and animation APIs](context-properties-animation.md).
- Open when checking version-specific additions. [Scripting version history](context-version-history.md).

The [community scripting guide](https://ae-scripting.docsforadobe.dev/) began with Adobe's After Effects CS6 scripting guide and incorporates later updates. Use its [object model](https://ae-scripting.docsforadobe.dev/introduction/objectmodel/) alongside the local references when following object relationships. [Adobe's script-running instructions](https://helpx.adobe.com/after-effects/desktop/automate-in-after-effects/automate-animation/scripts.html) cover the application menu and permissions.
