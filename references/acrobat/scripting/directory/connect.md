# connect

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | All |

Hands back a DirConnection object representing a live connection to the named directory. A single directory can sustain several simultaneous connections.

See also the DirConnection object and the SecurityHandler object's directories property.

Parameters

| Parameter | Description |
| --- | --- |
| oParams | (optional) A generic object holding whatever parameters the connection needs. Which properties apply depends on the directory handler in play, and userid and password are among the possibilities. |
| bUI | (optional) A Boolean, false by default. It controls whether the directory handler may surface its UI should that be needed to set up the connection. |

Returns

Either a DirConnection object or, when no directory carries the given name, null.

Example: Enumerate available directories and connect.

```javascript
var sh = security.getHandler( "Adobe.PPKMS" );
var dirList = sh.directories;
for ( var i=0; i< dirList.length; i++)
    for ( var o in dirList[i].info )
        console.println( o + " = " + dirList[i].info[o]);
var dirConnection = dirList[0].connect();
```
