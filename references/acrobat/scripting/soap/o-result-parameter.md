# oResult parameter

oResult is a notification object invoked once the service resolves. Its notification methods stay quiet until resolveService has returned, then run during idle processing. Have the oResult parameter supply this method:

| Method | Description |
| --- | --- |
| resolve | Invoked with two parameters (nStatus and oInfo) when the service either resolves or fails to. nStatus reports whether resolution succeeded (see below). On success, oInfo — an instance of the ServiceInfo object (see below) — carries the connection details. |

nStatus, passed to the resolve method, can take any of these values:

| Value | Description |
| --- | --- |
| 0 | The service was successfully resolved. |
| 1 | The service timed out before being resolved. The default timeout in Acrobat 7 or later is 60 seconds. |
| -1 | There was an networking error trying to resolve the service. |

The resolve method's oInfo, a ServiceInfo object, exposes these properties:

| Property | Description |
| --- | --- |
| target | Whichever IP address or DNS name belongs to the host that provides the service. |
| port | Whichever port the service is offered on at that host. |
| info | A bag of name-value pairs the service has provided. With an HTTP service, for instance, the path property holds the path on the web service, making the service URL http://&lt;target&gt;:&lt;port&gt;/<info["path"]>). |

Example: Where you run this example code changes what it prints. With nothing advertised over DNS Service Discovery, this example prints nothing.

```javascript
var oNotifications =
{
    resolve: function(status, info)
    {
        if(status == 0)
            console.println("RESOLVE: http://"
                + info.target + ":" + info.port + "/"
                + info.info.path);
        else console.println("ERROR: " + status);
    }
};
SOAP.resolveService({
    cType: "http",
    cDomain: "local.",
    cService: "Joe's Web Server",
    oResult: oNotifications
});
```

What prints hinges on the current network environment; here is one representative run:

Reference data, output or notation; not an executable JavaScript program.

```text
RESOLVE: http://172.16.0.0:80/index.html
```
