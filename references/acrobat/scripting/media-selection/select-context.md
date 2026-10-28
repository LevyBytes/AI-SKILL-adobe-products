# selectContext

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object | R |

A value you can lean on to build a loop that calls Rendition.select over and over, running a custom selection against whatever criteria your JavaScript code can test.

Example: a reusable pattern that drives selectContext.

```javascript
function MyTestSelection( selection )
{
    // This function should test the selection as you wish and return
    // true to use it or false to reject it and try another one.
}
function MyGetSelection( rendition )
{
    var selection;
    for( selection = rendition.select(); selection;
        selection = rendition.select
            ({ oContext: selection.selectContext }))
    {
        if( MyTestSelection( selection ) )
            break;
    }
    return selection;
}
```
