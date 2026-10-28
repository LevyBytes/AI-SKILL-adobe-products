# fontPolicy

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Establishes the font policy. You assign the fontpolicy property's value from the constants fontPolicies object. pageRange is the default.

constants.fontPolicies object

| Property | Description |
| --- | --- |
| everyPage | Send the needed fonts down ahead of each page, then release every font once that page finishes. The print jobs this yields are the biggest and slowest, yet they demand the least printer memory. |
| jobStart | Send the needed fonts down as the print job opens, then release them when the job closes. The print jobs this yields are the smallest and fastest, yet they demand the most printer memory. |
| pageRange | (Default) Send each font down ahead of the first page that calls for it and release it after the last such page. This too yields the smallest, fastest print jobs and may consume less memory. The catch is that page ordering forces the job to be printed exactly as produced. - pageRange can strike a sound balance between speed and memory. That said, steer clear of it when the PostScriptcript pages are going to be reordered programmatically later on. |
