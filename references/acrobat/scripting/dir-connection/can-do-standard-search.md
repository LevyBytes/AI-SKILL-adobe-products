# canDoStandardSearch

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Boolean | R |

Tells you whether the directory connection can search by the standard search parameter attributes. Those standard attributes are

```javascript
firstName
lastName
fullName
email
certificates
```

Not every directory database implementation will support these attributes, yet directory handlers are at liberty to map them onto names the directory recognizes.
