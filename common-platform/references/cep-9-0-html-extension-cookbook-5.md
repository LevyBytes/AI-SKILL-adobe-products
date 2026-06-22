# Cep 9.0 Html Extension Cookbook (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

JavaScript provides a couple of ways to increase or decrease font size in an HTML panel, using either plain JavaScript or JQuery. The two sample snippets below show both approaches.

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

- JQuery - Use `$('html').css('font-size', size)` to change font size in page.

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

The approaches above are common JavaScript solutions for adjusting fonts up or down.

### JavaScript notes

### Internet connection check

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

The `X-Frame-Options` header blocks iframe hosting for many HTTPS sites. Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options. As an alternative for showing HTTPS content, assign `window.location.href`, for example:

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

CEP 5.2 supports the HTML title attribute for tooltips on Windows. On macOS, off-screen rendering prevents that support. Use JavaScript as the alternative; see http://www.a2zwebhelp.com/bootstrap-tooltips for examples.

## CEPHtmlEngine

### Multi-process Architecture

CEP and its underlying Chromium runtime use a multi-process architecture. Every CEP extension runs inside its own CEP HTML Engine, which can include three processes: a main/browser process, a renderer process, and a GPU process. On macOS, the main process is named `CEPHtmlEngine`, while the other two are named `CEPHtmlEngine Helper`. On Windows, all three processes are named `CEPHtmlEngine.exe`. Well-implemented extensions should not suffer performance issues from multiple processes.

To identify which extension owns a CEP HTML Engine process, inspect its command-line parameters. On macOS, run `ps -ef | grep CEPHtmlEngine` in Terminal. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection. The browser process command line does not contain `--type`; the renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.

### Ports opened in CEPHtmlEngine

When monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx), you may see localhost ports open. Most are opened inside Chromium for `websocket`, initiated by the HTML extension rather than by `CEPHtmlEngine` itself. Use [RawCap](http://www.netresec.com/?page=RawCap) to capture data into a \*.pcap file, then inspect it in [Wireshark](https://www.wireshark.org/).

### CEF/Chromium limitations

- [HTML `<datalist>` tag is not supported](https://bitbucket.org/chromiumembedded/cef/issues/906)
- [HTML5 input type color is not supported](https://bitbucket.org/chromiumembedded/cef/issues/899)

## Miscellaneous

Developers can use the following forums and github repositories to ask questions and create bugs/feature requests

- [Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides)
- https://forums.adobe.com/community/creativesuites/extensionbuilder
- https://github.com/Adobe-CEP/CEP-Resources/issues
- https://github.com/Adobe-CEP/Samples/issues
- https://www.adobeprerelease.com

### Contribution

To contribute to extension development, raise your PR at https://github.com/Adobe-CEP
