# getStateInModel

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | C |

Reports where the annotation currently stands within a given state model. The transitionToState method is a related call.

Parameters

| Parameter | Description |
| --- | --- |
| cStateModel | The state model to determine the state of the annotation. |

Returns

You get back an array of identifiers describing the annotation’s present state:

An exclusive state model yields just one state — or none at all when nothing has been set.

A non-exclusive model can return several states, or no entries when nothing is set and no default applies.

Example: Summarize, across every page of the document, the status carried by each annotation.

```javascript
annots = this.getAnnots()
for ( var i= 0; i< annots.length; i++) {
    states = annots[i].getStateInModel("Review");
    if ( states.length > 0 ) {
        for(j = 0; j < states.length; j++)
        {
            var d = util.printd(2, states[j].modDate);
            var s = states[j].state;
            var a = states[j].author;

            console.println(annots[i].type + ": " + a + " "
                + s + " " + d + "on page "
                + (annots[i].page+1) );
        }

    }
}
```
