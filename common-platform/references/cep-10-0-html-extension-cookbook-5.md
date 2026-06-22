# Cep 10.0 Html Extension Cookbook (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

3. Drag and drop between an HTML extension and its host application.

4. Drag and drop between an HTML extension and the operating system (e.g. Desktop or Browser).

For details on HTML 5 Drag and Drop and using it from JavaScript, see http://www.w3.org/TR/html5/editing.html#dnd.

Some demos:

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

For additional details, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter

### External JavaScript Libraries

CEP HTML Engine does not block extension JavaScript libraries. A library that works in CEF Client or Chrome browser should also work in CEP HTML Engine.

JavaScript libraries used successfully include:

- JQuery - http://jquery.com/
  - See the Node.js section for symbol-conflict resolution.
- RequireJS - http://requirejs.org/
  - See the Node.js section for symbol-conflict resolution.
- spin.js - http://fgnass.github.com/spin.js/
- Modernizr - http://modernizr.com/
  - Modernizr detects HTML5 and CSS3 feature support in the user's browser.

### NPAPI plug-ins

NPAPI plug-in support was removed starting with CEP 4.2. CEP 4.0 and 4.1 still support it, but because products are moving to CEP 4.2, developers should avoid it.

Do not embed Java Applet content in an extension, because those applets depend on NPAPI plug-in.

### Increase/Decrease font size in HTML Panel

JavaScript developers have several ways to adjust font size in an HTML panel, using either plain JavaScript or JQuery. The two snippets below demonstrate both approaches.

- Plain JavaScript - Set page font size through `document.body.style.fontSize`.

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

- JQuery - Set page font size through `$('html').css('font-size', size)`.

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

The approaches above are common font-resizing solutions for JavaScript developers.

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

See http://jsfiddle.net/BfLAh/1390/.

```
$(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
```

### iframe

Several HTTPS sites block iframe hosting through the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header. A practical alternative displays HTTPS content by assigning `window.location.href`, e.g.

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

CEP 5.2 displays HTML title attribute tooltips on Windows. macOS does not support them because of off-screen rendering, so use JavaScript as the alternative; http://www.a2zwebhelp.com/bootstrap-tooltips has useful examples.

## CEPHtmlEngine

### Multi-process Architecture

CEP and the underlying Chromium use a multi-process architecture. Every CEP extension runs in its own CEP HTML Engine, which may include three processes: main/browser, renderer, and GPU. For Max OSX, `CEPHtmlEngine` is the main process name, while the two other processes use `CEPHtmlEngine Helper`. On Windows, all three processes are named `CEPHtmlEngine.exe`. With well implemented extensions, multiple processes should not cause a performance problem.

You can identify which extension owns a CEP HTML Engine process by examining command line parameters. On Mac OSX, run `ps -ef | grep CEPHtmlEngine` in a terminal to inspect the command line. On Windows, use http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection guidance. The browser process command line lacks `--type`, whereas renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.

### Ports opened in CEPHtmlEngine

Monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx) may show ports opened on localhost. Most are opened inside Chromium for `websocket`, initiated by the HTML extension rather than by `CEPHtmlEngine` itself. Use [RawCap](http://www.netresec.com/?page=RawCap) to capture data into a \*.pcap file, then open that file in [Wireshark](https://www.wireshark.org/) for inspection.

### CEF/Chromium Issues

- [HTML `<datalist>` tag is not supported](https://bitbucket.org/chromiumembedded/cef/issues/906)
- [HTML5 input type color is not supported](https://bitbucket.org/chromiumembedded/cef/issues/899)

## Miscellaneous

Questions and bug/feature requests can go to these forums and github repositories:

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- https://forums.adobe.com/community/creativesuites/extensionbuilder
- https://github.com/Adobe-CEP/CEP-Resources/issues
- https://github.com/Adobe-CEP/Samples/issues
- https://www.adobeprerelease.com

### Contribution

To contribute to extension development, raise a PR at https://github.com/Adobe-CEP.
