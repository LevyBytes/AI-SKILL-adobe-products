# execute

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Carries out the action attached to this bookmark. The behavior here can vary widely. For a rundown of the usual action types, see the PDF Reference. See also the createChild method.

Example: Build a basic search over the bookmarks. On a hit, the action tied to that bookmark runs.

```javascript
// Document-level or folder-level JavaScript.
function searchBookmarks(bkm, nLevel, bkmName)
{
    if ( bkm.name == bkmName ) return bkm;
    if (bkm.children != null) {
        for (var i = 0; i < bkm.children.length; i++)
        {
            var bkMark = searchBookmarks(
                bkm.children[i], nLevel + 1, bkmName);
            if ( bkMark != null ) break;
        }
        return bkMark;
    }
    return null;
}
// Redefine this function for a more sophisticated compare.
function bmkCompare( name1, name2 )
{
        return ( name1 == name2 );
}
```

The code below kicks off the search. You could run it as field-level JavaScript or fire it from a menu action.

```javascript
var bkmName = app.response({
    cQuestion: "Enter the name of the bookmark to find",
    cTitle: "Bookmark Search and Execute"
});
if ( bkmName != null ) {
    var bkm = searchBookmarks(this.bookmarkRoot, 0, bkmName );
    if ( bkm != null ) bkm.execute();
    else app.alert("Bookmark not found");
}
```
