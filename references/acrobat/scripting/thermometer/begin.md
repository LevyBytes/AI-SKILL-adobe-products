# begin

Sets up the thermometer and shows it, the current value rendered as a fraction of the duration in percent.

Example: Tally the words on each page of the current document, keep a running total reported as you go, and lean on the thermometer to show progress.

```javascript
var t = app.thermometer; // acquire a thermometer object
t.duration = this.numPages;
t.begin();
var cnt=0;
for ( var i = 0; i < this.numPages; i++)
{
    t.value = i;
    t.text = "Processing page " + (i + 1);
    cnt += getPageNumWords(i);
    console.println("There are " + cnt + "words in this doc.");
    if (t.cancelled) break;
}
t.end();
```
