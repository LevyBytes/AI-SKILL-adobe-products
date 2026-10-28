# setOutputFields

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Sets out which attributes are to come back when the search method runs.

Note

The Adobe.AAB directory handler does not support this method. The Adobe.PPKMS.ADSI directory handler does not support custom options.

Parameters

| Parameter | Description |
| --- | --- |
| oFields | A list of attribute-name strings telling the directory which fields to hand back when the search method runs. Every entry here has to be either a standard attribute available to all directory handlers or a custom attribute set up for one specific directory. Those standard attributes correspond to the property names that the UserEntity object defines. Where it is appropriate, a directory handler may map a standard attribute name onto whatever name it actually recognizes. |
| bCustom | (optional) A Boolean flag marking whether the entries in oFields are standard output attribute names. When set to true, the entries instead refer to directory-specific attributes belonging to one particular directory handler. It defaults to false. |

Returns

A string list naming whichever entries from oFields this directory cannot support. Should oFields come in empty, the result is an empty array as well.

Example: Here, dc.setOutputFields hands back the string array ["x", "y"].

```javascript
var sh = security.getHandler("Adobe.PPKMS");
var dc = sh.directories[0].connect();
var w = dc.setOutputFields( [ "certificates", "email", "x", "y"] );
console.println( w );
```

See also the examples that follow the DirConnection.search method.
