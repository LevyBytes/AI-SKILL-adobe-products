# Cep 12 Html Extension Cookbook (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

Use a "namespace" when developers need to add a new variable, function, or object in Global Space or on the `$` object. When several JSX files declare the same name, whichever JSX file loads last supplies the active definition and replaces the earlier ones. For example, `$.ext` may be declared in a.jsx, b.jsx and c.jsx; if a.jsx defines `$.ext` as a function, b.jsx defines `$.ext` as an object, c.jsx defines `$.ext` as a string, and the load order is a.jsx->b.jsx->c.jsx, then `$.ext` ends up as a string instead of either earlier type. The same rule applies across separate extensions in the same point product: if a.jsx, b.jsx and c.jsx are owned by extension a,b,c separately, and the extensions load as extension a-> extension b-> extension c, `$.ext` still resolves to the string value supplied by c.jsx.

### Drag and Drop

### Use Drag and Drop

CEP 5.2 supports HTML 5 Drag and Drop in four situations.

1.  Drag and drop within one HTML extension.

2.  Drag and drop from one HTML extension to another.

3.  Drag and drop between an HTML extension and its host application.

4.  Drag and drop between an HTML extension and the operating system (e.g. Desktop or Browser).

For HTML 5 Drag and Drop concepts and JavaScript usage, see http://www.w3.org/TR/html5/editing.html#dnd.

Sample pages are available here.

- http://www.w3schools.com/html/html5_draganddrop.asp
- http://html5demos.com/

### Disable Drag and Drop

Extension developers can turn off the default DnD behavior with JavaScript.

Method 1

```
<body ondragover="return false" ondrop="return false">
```

Method 2 (using jQuery)

```
$(document.body).on('dragover drop', function(e) {
  e.preventDefault();
});
```

For additional detail, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter

### External JavaScript Libraries

The CEP HTML Engine does not block extension JavaScript libraries. Any library that works in CEF Client or a Chrome browser should also work in the CEP HTML Engine.

The following JavaScript libraries have been used successfully.

- JQuery - http://jquery.com/
  - See the Node.js section for symbol-conflict handling.
- RequireJS - http://requirejs.org/
  - See the Node.js section for symbol-conflict handling.
- spin.js - http://fgnass.github.com/spin.js/
- Modernizr - http://modernizr.com/
  - Modernizr detects HTML5 and CSS3 feature support in the user's browser.

### NPAPI plug-ins

NPAPI plug-in support was removed starting in CEP 4.2. Although CEP 4.0 and 4.1 still support it, products are moving to CEP 4.2, so developers should avoid depending on NPAPI.

Do not embed a Java Applet in an extension, because Java Applets rely on NPAPI plug-ins.

### Increase/Decrease font size in HTML Panel

JavaScript developers can increase or decrease font size in an HTML panel with plain JavaScript or JQuery. The two snippets below show both approaches: one uses plain JavaScript, and the other uses the JQuery library.

- Plain JavaScript - Change the page font size with `document.body.style.fontSize`.

```
<script type="text/javascript" language="javascript">
    window.onload = function() {
        var fontchange = document.createElement("div");
        var fontchangelink = function(fontsize, desc) {
            var a = document.createElement('a');
            a.href="#";
            a.style.margin = "5px";
            a.onclick = function() {
                document.body.style.fontSize = fontsize + 'pt';
            };
            a.innerHTML = desc;
            return a;
        };

        fontchange.appendChild(document.createTextNode("Change font size:"));
        fontchange.appendChild(fontchangelink(9, "1"));
        fontchange.appendChild(fontchangelink(11, "2"));
        fontchange.appendChild(fontchangelink(13, "3"));

       document.body.insertBefore(fontchange, document.body.childNodes[0]);
    };
</script>
```

- JQuery - Change the page font size with `$('html').css('font-size', size)`.

```
<script type="text/javascript" language="javascript">
        $(document).ready(function(){
              // Reset Font Size
              var originalFontSize = $('html').css('font-size');
              $(".resetFont").click(function(){
                $('html').css('font-size', originalFontSize);
              });

              // Increase Font Size
              $(".increaseFont").click(function(){
                 var currentFontSize = $('html').css('font-size');
                 var currentFontSizeNum = parseFloat(currentFontSize, 10);
                 var newFontSize = currentFontSizeNum*1.2;
                 $('html').css('font-size', newFontSize);
                 return false;
              });

              // Decrease Font Size
              $(".decreaseFont").click(function(){
                 var currentFontSize = $('html').css('font-size');
                 var currentFontSizeNum = parseFloat(currentFontSize, 10);
                 var newFontSize = currentFontSizeNum*0.8;
                 $('html').css('font-size', newFontSize);
                 return false;
              });
         });
</script>
```

These approaches are common JavaScript solutions for increasing or decreasing fonts.

### JavaScript Tips

### Check Internet Connection

```
if (navigator.onLine === true)
{
  //system is online
}
else
{
  //system is offline
}
```

### Set Mouse Cursor

See http://jsfiddle.net/BfLAh/1390/

```
$(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
```

### iframe

Many HTTPS sites cannot be embedded in an iframe when they send the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header. To show HTTPS content another way, set `window.location.href`, for example:

**iFrame alternative for HTTPS content**

```
// html
<body onLoad="onLoaded()">

</body>

// javascript
function onLoaded() {
  window.location.href = "https://www.trello.com";
}
```

### Tooltip

CEP 5.2 can display tooltips on Windows through the HTML title attribute. On macOS this attribute is not supported because of off-screen rendering, so use JavaScript instead; examples are available at http://www.a2zwebhelp.com/bootstrap-tooltips.

## CEPHtmlEngine

### Multi-process Architecture

CEP and Chromium beneath it use a multi-process architecture. Every CEP extension runs in its own CEP HTML Engine, which can include three processes: a main/browser process, a renderer process, and a GPU process. On Max OSX, the main process is called `CEPHtmlEngine`; the other two are called `CEPHtmlEngine Helper`. On Windows, all three use the name `CEPHtmlEngine.exe`. Well-built extensions should not have performance trouble simply because multiple processes exist.

To determine which extension owns a CEP HTML Engine process, inspect that process's command line parameters. On Mac OSX, run `ps -ef | grep CEPHtmlEngine` in a terminal to view the command line. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for checking command line arguments. The browser process has no `--type` argument, while renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.

### Ports opened in CEPHtmlEngine

When monitoring the `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx), you may notice localhost ports. Most of them come from Chromium internals for `websocket`; the HTML extension starts these connections, not `CEPHtmlEngine` directly. To inspect details, capture traffic into a \*.pcap file with [RawCap](http://www.netresec.com/?page=RawCap), then open it in [Wireshark](https://www.wireshark.org/).

### CEF/Chromium Issues

- [HTML `<datalist>` tag is not supported](https://bitbucket.org/chromiumembedded/cef/issues/906)
- [HTML5 input type color is not supported](https://bitbucket.org/chromiumembedded/cef/issues/899)

## Miscellaneous

Developers can ask questions and file bugs or feature requests in these forums and github repositories.

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- https://github.com/Adobe-CEP/CEP-Resources/issues
- https://github.com/Adobe-CEP/Samples/issues
- https://www.adobeprerelease.com

### Contribution

To contribute to extension development, submit a PR at https://github.com/Adobe-CEP
