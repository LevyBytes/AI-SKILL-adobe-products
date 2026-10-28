# queryServices

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |
|  |  |  |  |

Finds network services advertised through DNS Service Discovery (DNS-SD). Such services may be discovered whether they registered via Multicast DNS (mDNS) for a local networking link or via unicast DNS for enterprise-wide reach. Location results always arrive asynchronously, and the query keeps running — signaling as services appear or disappear — until you stop it.

What a service query yields is a collection of service names, each bindable on demand through resolveService.

To be found on the local network link a service can lean on a third-party mDNS responder; to be found across an enterprise networking environment it can register itself, statically or dynamically, with a DNS server.

Note

As of Acrobat 8.0 this method is deprecated; build new services on Net.Discovery.queryServices instead.

Parameters

| Parameter | Description |
| --- | --- |
| cType | Which DNS SRV Service Name to look for. A couple of examples: "http" : Locate web servers "ftp" : Locate FTP servers Consult the DNS SRV Service Name Registry for further examples |
| oAsync | A notification object that fires whenever services turn up on the network or whenever services reported earlier drop off. These notification methods stay quiet until queryServices has returned, then run during idle processing. Have the oAsync parameter supply the methods below:<br><br>addServices: Fires once available services matching the query are found. Its parameter is an array of Service Description objects describing the added services.<br><br>removeServices: Fires once services that addServices had previously introduced stop being available. Its parameter is an array of Service Description objects describing the removed services. - Under Acrobat 7.0, only services found through mDNS (that is, within the "local." domain) refresh dynamically. |
| aDomains | (optional) A list of domains the query should target. These are the only domains allowed:<br><br>ServiceDiscovery.local: Hunt for services across the local networking link using Multicast DNS (mDNS). Handy for turning up network services in an ad hoc setup, though only services within reach of the current network router will be found.<br><br>ServiceDiscovery.DNS: Hunt for services in the default DNS domain using unicast DNS. Handy for finding network services backed by a DNS server, though registering a service usually calls for IS help and is less dynamic. |
|  |  |
|  |  |
|  |  |

Returns

A service query object that controls how long the query lasts. Querying carries on until any one of these holds:

The service query object handed back from queryServices gets garbage collected.

The stop method on the service query object handed back from queryServices runs.

| Method | Description |
| --- | --- |
| stop | Brings the query to a halt. You may call it from inside a notification callback, but the actual stop waits for idle processing time. |

Exceptions

Standard Acrobat exceptions.

Service Description Object

addServices and removeServices each receive a service description object carrying these properties:

| Property | Description |
| --- | --- |
| name | The Unicode display name of the service. |
| domain | Which DNS domain held the service. A service found on the local networking link reports "local" as its domain name. |
| type | The DNS SRV Service Name of the located service — identical to the cType parameter handed to queryServices. That comes in handy whenever one notification callback serves several queries at once. |

Example: Locates network services that have published themselves using DNS Service Discovery.

Where you run this example code changes what it prints.

```javascript
var oNotifications =
{
    addServices: function(services)
    {
        for(var i = 0; i < services.length; i++)
        console.println("ADD: "+ services[i].name + " in domain "
            + services[i].domain);
    },
    removeServices: function(services)
    {
        for(var i = 0; i < services.length; i++)
        console.println("DEL: " + services[i].name + " in domain "

             + services[i].domain);
    }
};
SOAP.queryServices({
    cType:"http",
    oAsync:oNotifications,
    aDomains:[ServiceDiscovery.local, ServiceDiscovery.DNS]
});
```

What prints hinges on the current network environment; with nothing advertised over DNS Service Discovery, the example prints nothing at all. Here is one representative run:

Reference data, output or notation; not an executable JavaScript program.

```text
ADD: My Web Server in domain local.
ADD: Joe's Web Server in domain local.
ADD: Example.org Web Server in domain example.org.
```
