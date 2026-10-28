# Replacing math operators with vector math functions

Array operator overloading — writing things like position + [100,100] — is honored by both the JavaScript and LegacyExtendScript engines, yet it falls apart for expressions sitting in a .jsx expression function library or in eval().

To run arithmetic on array properties (Position, Scale, and the like), reach for the vector math counterparts that cover addition, subtraction, multiplication, and division. Those vector math functions handle plain numbers too, so a function that might receive properties of either kind should rely on them.

Note

Pair the vector math functions with the thisLayer. prefix.

- Addition: thisLayer.add(vec1, vec2)
- Subtraction: thisLayer.sub(vec1, vec2)
- Multiplication: thisLayer.mul(vec, amount)
- Division: thisLayer.div(vec, amount)

What follows are sample expressions shown first in ordinary math and then in the revised vector math form. Where it's called for, the vector math versions also carry the right thisLayer. or thisProperty. prefix.

For the gap between a wiggle() and a Position property's value:

```javascript
// Standard Math:
wiggle() - value;

// Vector Math:
thisLayer.sub( thisProperty.wiggle(), value );
```

For interpolating across two values the way linear() does, but reaching past the stated minimum and maximum:

```javascript
// Standard Math:
value1 + ( ( t - tMin ) / ( tMax - tMin ) ) * ( value2 - value1 );

// Vector Math:
thisLayer.add( value1, thisLayer.mul( thisLayer.div( thisLayer.sub( t, tMin ), thisLayer.sub( tMax, tMin ) ), thisLayer.sub( value2, value1 ) ) );
```

For looping a Position property both in and out:

```javascript
// Standard Math:
loopIn( "cycle" ) + loopOut( "cycle" ) - value;

// Vector Math:
thisLayer.sub( thisLayer.add( thisProperty.loopIn( "cycle" ), thisProperty.loopOut( "cycle" ) ), value );
```

### More like this

- Expression language reference

## See also

- [Application](../../../scripting/application-object.md)
