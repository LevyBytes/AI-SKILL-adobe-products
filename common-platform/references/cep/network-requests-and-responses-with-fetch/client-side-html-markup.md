# Client-side: HTML Markup

CEP extension interfaces are built with HTML. In this sample, the document lives at `./com.cep.weather-simple/client/index.html` and uses the code below; see comments **#1-3**:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Weather Simple</title>
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <p id="weather-summary"></p>

    <button id="apply-weather-button">Apply weather</button>

    <script type="text/javascript" src="js/lib/CSInterface.js"></script>
    <script type="text/javascript" src="js/config.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
```

Inside the body, the sample includes two basic HTML elements, `button` and `p`. Each has a distinct `id` attribute so later steps can target it.

This guide does not cover CSS styling, but the sample panel stylesheet is available at `./com.cep.weather-simple/client/styles/style.css`.
