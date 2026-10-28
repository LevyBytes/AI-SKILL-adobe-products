# Ports opened in CEPHtmlEngine

Monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx) may show open localhost ports. Most of these ports are opened internally by Chromium code for `websocket`, started by the HTML extension rather than by `CEPHtmlEngine` itself. To inspect details, capture traffic to a \*.pcap file with [RawCap](http://www.netresec.com/?page=RawCap), then open it in [Wireshark](https://www.wireshark.org/).
