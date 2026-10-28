# text

Holds the text string the thermometer puts on screen.

| Type | Access |
| --- | --- |
| String | R/W |

### value

Holds the thermometer’s present value and refreshes what is drawn. The figure may run anywhere from 0 (empty) up to whatever duration holds. So if the thermometer’s duration sits at 10, its current value has to land between 0 and 10 inclusive. A value under zero snaps to zero; one above duration snaps down to duration.

| Type | Access |
| --- | --- |
| Number | R/W |
