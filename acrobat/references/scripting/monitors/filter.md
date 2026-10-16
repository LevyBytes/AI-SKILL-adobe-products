# filter

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object, narrowed by running a ranker function against every display in the list. That ranker accepts a Monitor argument and gives back a numeric rank. Whatever filter returns is a Monitors array holding the top-ranked displays — one display, or several if they tie.

Parameters

| Parameter | Description |
| --- | --- |
| fnRanker | A ranker function — one that is handed a Monitor and yields a numeric rank. |
| nMinRank | (optional) Leave nMinRank undefined and filter always keeps at least one display from the source list (assuming that list held anything). Provide nMinRank and filter yields an empty Monitors array when the ranker scored no display at or above that threshold. |

Returns

A Monitors object

Note

Under the hood, most of the remaining Monitors filtering functions are built on filter calls.

Example: a sample implementation of Monitors.bestColor( minColor). What it gives back is a Monitors object holding whichever display or displays carry the deepest color depth; pass minColor and it instead returns an empty Monitors array should that top depth fall short of minColor.

```javascript
bestColor: function( minColor )
{
    return this.filter(
        function( m ) { return m.colorDepth; }, minColor );
}
```
