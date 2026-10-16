# crackURL

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.05 | No | No | All |

Splits a URL apart into the pieces that make it up.

From version 9.0 on, util.crackURL can take apart a URL written with Internet Protocol version 6 (IPv6) addressing. To that end, the object util.crackURL returns gains an extra property, nURLType, which helps you tell the IP type of the URL handed to util.crackURL’s argument.

When a direct URL is skipped in favor of the matching DNS name, no attempt is made to work out the IP type.

Parameters

cURL

A string giving the URL.

Returns

An object holding these properties:

| Property | Description |
| --- | --- |
| cScheme | The URL’s scheme. This can be file, http or https. |
| cUser | (Optional) Whatever user name the URL spells out. |
| cPassword | (Optional) Whatever password the URL spells out. |
| cHost | The URL’s hostname. |
| nPort | The URL’s port number. |
| cPath | (Optional) The path piece of the URL. |
| cQuery | (Optional) The parameter-string piece of the URL. |
| cFragment | (Optional) The URL’s fragments. |
| nURLType | (Version 9.0) An integer property holding 0 when cURL is IPv4 and 1 when cURL is IPv6. (IPv4 and IPv6 stand for Internet Protocol versions 4 and 6, in that order.) |

A parameter error gets thrown by this method when the argument is absent, the URL is malformed, or the URL scheme is something other than file, http, or https.

Example 1: The following code

```javascript
util.crackURL("http://example.org/myPath?name0=value0&name1=value1#frag");
```

would return

```javascript
   {
       cScheme: "http",
       cHost: "example.org",
       nPort: 80,
       cPath: "/myPath",
       cQuery
: "name0=value0&name1=value1",
       cFragment: "frag"
   }
```

Example 2 (Version 9.0)

A URL built on Internet Protocol version 6 can be split into its parts by version 9.0.

```javascript
var a = util.crackURL("http://[2001:1890:110b:15ce:250:56ff:febb:6111]/Ex");
if ( a.nURLType == 1 )
   console.println("host = [" + a.cHost + "]");
else
   console.println("host = " + a.cHost);
```
