# Ports opened in CEPHtmlEngine

When monitoring the `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx), you may notice localhost ports. Most of them come from Chromium internals for `websocket`; the HTML extension starts these connections, not `CEPHtmlEngine` directly. To inspect details, capture traffic into a \*.pcap file with [RawCap](http://www.netresec.com/?page=RawCap), then open it in [Wireshark](https://www.wireshark.org/).
