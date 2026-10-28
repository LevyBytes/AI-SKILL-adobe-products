# Ports opened in CEPHtmlEngine

When monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx), you may see localhost ports open. Most are opened inside Chromium for `websocket`, initiated by the HTML extension rather than by `CEPHtmlEngine` itself. Use [RawCap](http://www.netresec.com/?page=RawCap) to capture data into a \*.pcap file, then inspect it in [Wireshark](https://www.wireshark.org/).
