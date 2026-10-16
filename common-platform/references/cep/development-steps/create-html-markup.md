# Create HTML Markup

CEP extension interfaces are written in HTML. In this example, put the HTML document at `/client/index.html` and use this HTML; comments **#1-3** identify the pieces:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Your First Panel</title>
  </head>
  <body>
    <h1>Your first panel</h1>

    <button id="open-button">Open</button>

    <script type="text/javascript" src="CSInterface.js"></script>
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

In the code above, `index.html` loads the `CSInterface.js` library as a `<script>` dependency.
