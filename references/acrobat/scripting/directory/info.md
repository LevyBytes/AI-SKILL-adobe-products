# info

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Object | R/W |

What this property holds is a DirectoryInformation object — a generic object you use to read and write this Directory object's properties.

Example:

```javascript
// Create and activate a new directory
var oDirInfo = { dirStdEntryID: "dir0",
    dirStdEntryName: "Employee LDAP Directory",
    dirStdEntryPrefDirHandlerID: "Adobe.PPKMS.ADSI",
    dirStdEntryDirType: "LDAP",
    server: "ldap0.example.com",
    port: 389 };
var sh = security.getHandler( "Adobe.PPKMS" );
var newDir = sh.newDirectory();
newDir.info = oDirInfo;
```

DirectoryInformation object

Standing for a directory's properties, a directory information object is generic and carries the standard properties below.

| Property | Type | Access | Required | Description |
| --- | --- | --- | --- | --- |
| dirStdEntryID | String | R/W | Yes | A language-independent identifier, unique to the directory. Only alphanumerics plus underscores, periods and hyphens are permitted. When creating directory objects it is best to omit the ID; leaving it out triggers automatic generation of a fresh unique name. |
| dirStdEntryName | String | R/W | Yes | A user-friendly name for the directory. |
| dirStdEntryPrefDirHandlerID | String | R/W | No | Which directory handler this directory will rely on. A single security handler may back several directory handlers covering different directory types — local and LDAP directories, say. |
| dirStdEntryDirType | String | R/W | No | Which kind of directory it is. LDAP, ADSI, and WINNT are examples. |
| dirStdEntryVersion | String | R | No | How the data is versioned. Absent a value set by the directory, it defaults to 0. For Acrobat 6.0 directories under the Adobe.AAB and Adobe.PPKMS.ADSI directory handlers the value is 0x00010000. |

Beyond these, a directory information object may carry extra properties tied to one specific directory handler. These further properties come with the Adobe.PPKMS.ADSI directory handler:

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| server | String | R/W | Whichever server holds the data — addresses.employees.example.com, for instance. |
| port | Number | R/W | Which port the server listens on. For LDAP the usual port is 389. |
| searchBase | String | R/W | Confines the search to one slice of the directory. For instance,<br><br>o=XYZ Systems,c=US. |
| maxNumEntries | Number | R/W | How many entries at most a single search may pull back. |
| timeout | Number | R/W | The longest a search is permitted to run. |

Example 1: Create and activate a new directory.

```javascript
var oDirInfo = { dirStdEntryID: "dir0",
    dirStdEntryName: "Employee LDAP Directory",
    dirStdEntryPrefDirHandlerID: "Adobe.PPKMS.ADSI",
    dirStdEntryDirType: "LDAP",
    server: "ldap0.example.com",
    port: 389
};
var sh = security.getHandler( "Adobe.PPKMS" );
var newDir = sh.newDirectory();
newDir.info = oDirInfo;
```

Example 2: Get information for an existing directory.

```javascript
var sh = security.getHandler("Adobe.PPKMS");
var dir0 = sh.directories[0];
// Get directory info object just once for efficiency
var dir0Info = dir0.info;
console.println( "Directory " + dir0Info.dirStdEntryName );
console.println( "address " + dir0Info.server + ":" + dir0Info.port );
```
