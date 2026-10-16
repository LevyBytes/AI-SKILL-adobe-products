# Expression example: Start or stop wiggle at specific time

To kick off a wiggle on an element two seconds after the animation begins, attach this expression to its Position property:

```javascript
var timeToStart = 2;

if (time > timeToStart) {
  wiggle(3,25);
} else {
  value;
}
```

To have the wiggle running from the very start and then cut it off once four seconds have elapsed, attach this expression to the element's Position property:

```javascript
var timeToStop = 4;

if ( time > timeToStop ) {
  value;
} else {
  wiggle( 3, 25 );
}
```

To hold the wiggle to a window — beginning two seconds in and ceasing at the four-second mark — attach this expression to the element's Position property:

```javascript
var timeToStart = 2;
var timeToStop = 4;

if ( ( time > timeToStart ) && ( time < timeToStop ) ) {
  wiggle(3,25);
} else {
  value;
}
```
