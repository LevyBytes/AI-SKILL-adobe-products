# search

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | All |

Runs a search of the directory and returns an array of UserEntity objects matching the search parameters. A UserEntity object is a generic object holding properties for every attribute that the setOutputFields method asked for. Run a search without first calling setOutputFields and the UserEntity object comes back with no entries in it.

Parameters

| Parameter | Description |
| --- | --- |
| oParams | (optional) A generic object holding an array of key-value pairs, each pairing a search attribute name with its string. Leave oParams out while canList is true for the directory, and every entry comes back; leave it out while canList is false, and an exception is thrown. |
| cGroupName | (optional) A group's name (don't confuse this with Group objects). Supply it and the search stays confined to that group. |
| bCustom | (optional) When false (the default), oParams carries standard search attributes; when true, it carries directory-specific ones. An exception is thrown unless the canDoCustomSearch property is true. |
| bUI | (optional) When true, the handler shows the user interface for gathering search parameters, and this method hands back the search results. For bUI to be true, canDoCustomUISearch has to be true as well, or an exception results. Whenever bUI is given, bCustom must be given too, though what it is set to makes no difference. |

Returns

An array of UserEntity objects.

Example 1: Directory search.

```javascript
var sh = security.getHandler( "Adobe.PPKMS" );
var dc= sh.directories[0].connect();
dc.setOutputFields( {oFields:["certificates","email"]} )
var retVal = dc.search({oParams:{lastName:"Smith"}});
if( retVal.length )
console.println( retVal[0].email );
```

Example 2: Enumerate every entry held in a local Acrobat Address Book. Searching the directory, the script yields an array of users together with their certificate details.

```javascript
var sh = security.getHandler( "Adobe.AAB" );
var dc = sh.directories[0].connect();
if( dc.canList ) {
    var x = dc.search();
    for( j=0; j<x.length; ++j ) {
        console.println("Entry[" + j + "] = " + x[j].fullName + ":");
        for(i in x[j]) console.println("  " + i + " = " + x[j][i]);
    }
}
```

UserEntity object

A generic JavaScript object describing one user in a directory together with the certificates that belong to that user. Its standard properties carry a fixed meaning across all directory handlers, which map these entries onto their own equivalents whenever that is needed. The DirConnection object's search method returns an array of these objects.

Its properties are these

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| firstName | String | R/W | The user's given name. |
| lastName | String | R/W | The user's family name. |
| fullName | String | R/W | The user's complete name. |
| certificates | Array of Certificate objects | R/W | The certificates held by this user, as an array. To pin down a certificate meant for a given purpose, the caller ought to check each certificate's keyUsage property. |
| defaultEncryptCert | Array of Certificate objects | R/W | Which certificate is favored when documents are encrypted for this user entity. Code handling user entity objects consults this property first when it needs an encryption certificate, and only if it is unset does the first valid match from certificates get used. |
