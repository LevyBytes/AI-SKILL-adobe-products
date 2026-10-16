# Debugging in Chrome

In Chrome, open `http://localhost:8088/`, or use the port you specified earlier in the `.debug` file.

[Figure: CEF Remote Debugging in Chrome](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/CEFdebugger.png)
_CEF Remote Debugging in Chrome_

When the panel is running correctly, Chrome shows the extension name as a clickable link, matching the image above. Selecting that link opens the JavaScript Console in Chromium DevTools. Logs, errors, and other extension output appear in the JavaScript Console.

[Figure: The JavaScript Console in Chrome](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/DeveloperTools.png)_The JavaScript Console in Chrome_

In the following sample, `console.log()` writes `"I can't believe you clicked!"`. That output comes from the `<script>` element inside `index.html`:

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>

    <button id="myButton">Click this!</button>

    <script type="text/javascript">
      /* Add a click handler to the button */
      document.getElementById("myButton").addEventListener("click", function () {
        /* When the button is clicked, output a string to the JavaScript Console */
        console.log("I can't believe you clicked!");
      });
    </script>
  </body>
</html>
```
