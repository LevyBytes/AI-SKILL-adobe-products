# addRequest

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Puts a request into the FDF file. An FDF file admits just one request; if it already carries one, this new request takes its place.

Parameters

| Parameter | Description |
| --- | --- |
| cType | Names the thing being asked for. As it stands, "CMS" is the lone accepted string, standing for a contact-information request. |
| cReturnAddress | Carries the request's return-address string. It has to open with mailto:, http: or https: and take a shape such as "http://www.example.com/cgi.pl" or "mailto:jdoe@example.com". |
| cName | (optional) Identifies the person or organization behind the request. |

Returns

Throws an exception if there is an error.

Example:

```javascript
var f = app.newFDF();
f.addRequest( "CMS", "http://www.example.com/cgi.pl", "Acme Corp" );
f.save( "/c/tmp/request.fdf" );
```
