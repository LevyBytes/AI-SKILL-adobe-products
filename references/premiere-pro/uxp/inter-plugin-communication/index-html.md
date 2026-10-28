# index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Requester Plugin</sp-heading>
    <sp-divider></sp-divider>
    <div class="main-div">
      <sp-body id="plugin-body">
        <sp-button id="btnCommunicate"> Communicate with Responder Plugin </sp-button>
      </sp-body>
    </div>
  </body>
</html>
```

#### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Responder Plugin</sp-heading>
    <sp-divider></sp-divider>
    <div class="main-div">
      <sp-body id="plugin-body"> </sp-body>
    </div>
    <footer>
      <sp-button id="clear-btn">Clear messages</sp-button>
    </footer>
  </body>
</html>
```
