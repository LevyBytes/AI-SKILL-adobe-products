# 3. Edit the plugin's UI

With the plugin running in Premiere, customize its UI. Open `index.html` in your code editor; this file contains the HTML that defines the visible content of the plugin panel.

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h4>Application Info</h4>
    <div class="main-div">
      <sp-body id="plugin-body"> </sp-body>
    </div>
    <footer>
      <sp-button id="btnPopulate">Populate Application Info</sp-button>
      <sp-button id="clear-btn">Clear Application Info</sp-button>
    </footer>
  </body>
</html>
```

Change the heading to this alternate text:

```html
<body>
  <h4>Premiere - Application Info</h4>
</body>
```

Because Watch & Reload is active, the host application updates automatically; the plugin panel now shows the new heading.

[Figure: Premiere - Updated Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-edit-html.png)
