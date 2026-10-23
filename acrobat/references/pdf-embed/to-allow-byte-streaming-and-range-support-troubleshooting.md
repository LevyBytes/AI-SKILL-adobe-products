# To allow byte-streaming and range support - Troubleshooting

Debugging a web app alongside the PDF Embed API is just ordinary web development. Reach for whatever tooling you already know — Chrome Developer Tools, or your own IDE, for instance.

**Why is my URL value not used to access the PDF data?**

When both a file URL and a file promise are supplied, the promise takes precedence and the URL value is left unused.

**Why do I see the error "Invalid client Id provided"?**

Either the client ID you supplied is wrong, or you're running it on a domain that differs from the one you registered.
