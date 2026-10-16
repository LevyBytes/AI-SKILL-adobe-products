# July 22, 2024; .NET SDK 4.0.0 major release

- Shipped Adobe PDF Services .NET SDK v4.0.0, with new interfaces that draw fully on the capabilities of the new PDF Services REST APIs.
- Brought in delete asset, refresh download URI, and webhook notifiers.
- Cut out the need for storage to hold intermediate results by dropping the dependency on temporary storage.
- Widened I/O reach by adding external storage for PDF Services operations.
- Made it possible to reach the Internet via Proxy, with proxy server settings configurable through "proxyServerConfig" in the client config.
- Reworked the PDF Properties operation so it returns a PDFProperties object alongside the JSON string.
- Reworked the Extract PDF operation so it returns content and resource assets alongside the content JSON object.
