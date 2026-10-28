# Ports opened in CEPHtmlEngine

Monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx) may show ports opened on localhost. Most are opened inside Chromium for `websocket`, initiated by the HTML extension rather than by `CEPHtmlEngine` itself. Use [RawCap](http://www.netresec.com/?page=RawCap) to capture data into a \*.pcap file, then open that file in [Wireshark](https://www.wireshark.org/) for inspection.
