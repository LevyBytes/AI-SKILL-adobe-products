# Issues, Images

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_10`_x_Documentation_Issues_md; raw_githubusercontent_com_Adobe_`CEP_CEP_R`esources*master*`CEP_10`\_x_Documentation_images_readme_md.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_10`\_x_Documentation_Issues_md

# CEP 10 Known Issues & FAQ

### These are the known issues for CEP 10.0. Keep them in mind while creating your own extension...

### Issue 1 :

During extension debugging, drag events are not emitted.

    Workaround: In the chrome inspect window, select "Toggle device Toolbar" to deactivate the screencast.
    Once that is done, dragging works even while the extension is being debugged.

[Figure: Toggle device Toolbar](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_10`.x/Documentation/images/issues/dragDebug.png)

### Issues existing in both CEP 9 and CEP 10

### Issue 1:

    On Windows, the API cep.fs.stat() cannot access a file whose size is greater than 4GB

---

### FAQ

- **See the migration Guidelines for [CEP 9 to CEP 10](cep-10-0-html-extension-cookbook.md)**

- **If the debug console shows a similar error, confirm\verfiy these items**

  [Figure: require not function](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_10`.x/Documentation/images/issues/requireNotFunction.png)

  - Verify that your extension does NOT integrate CEPEngine_extensions.js

  - Node may be crashing. Update node_modules to a [node version](cep-10-0-html-extension-cookbook.md) supported by CEP 10.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_10`\_x_Documentation_images_readme_md

This folder stores images used by the documentation.
