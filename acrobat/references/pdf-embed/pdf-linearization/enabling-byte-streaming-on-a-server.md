# Enabling byte-streaming on a server

For a server hosting the linearized PDFs to deliver partial file content over HTTP 206 responses, it needs byte-streaming support.

By way of example, here is how you would turn byte-streaming on for an Apache 2.4 server.

Within httpd.conf, apply these edits:

1. Remove the comment marker from this line: LoadModule headers_module modules/mod_headers.so
2. Inside whichever `<Directory>` applies to you, configure the headers

Allow the Range request header for byte streaming and range requests.

```apache
Header set Access-Control-Allow-Headers "Range"
```

For further background on Access-Control-Allow-Headers, take a look at this
[article](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers).
