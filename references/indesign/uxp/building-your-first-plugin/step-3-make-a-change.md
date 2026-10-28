# Step 3: Make a change

With the plugin running in InDesign, customize it.

Open `index.html` in your code editor. You should see this code:

```html
<html>
  <head>
    <script src="./index.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
    <button id="btnCreateText">Create Text</button>
  </body>
</html>
```

This HTML defines the contents of the plugin's panel. Change it however you like.

For example, change the heading so it says "My First Plugin":

```html
<h1>My First Plugin</h1>
```

Or add a paragraph under the heading:

```html
<p>This is my first plugin.</p>
```

To view your updates, reload the plugin in InDesign. In the UXP Developer Tool row for your plugin, select **⋯ → Reload**:

[Figure: Screenshot of the UXP Developer Tool with the reload button highlighted](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/reload-plugin.png)

When `manifest.json` changes, unload and load the plugin again instead of only reloading it. In the UXP Developer Tool row for your plugin, click **⋯ → Unload** and **⋯ → Load**:
