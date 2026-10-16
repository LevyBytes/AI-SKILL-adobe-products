# Example: Use the expression language reference to write an expression

Walk through this example to see how the After Effects expression language reference guides you in writing expressions. The expression built here ties Solid 2's Position property to Solid 1's Position property, with Solid 2's movement trailing Solid 1's by 2 seconds.

Start by making a pair of solid layers, Solid 1 and Solid 2.

With keyframes, animate the Position property values belonging to Solid 1.

With Solid 2's Position property selected, either go to Animation > Add Expression or Alt-click (Windows) or Option-click (macOS) the property's stopwatch button. By default this expression turns up:

```javascript
  transform.position
```

Type the following directly over transform.position:

```javascript
  thisComp
```

A global attribute, thisComp carries as its value a Comp object that stands for the current composition. To work out what may legally follow thisComp in your expression, check the return value for thisComp listed under Global objects, attributes, and methods.

Observe that thisComp gives back a Comp object. Turn next to Comp attributes and methods to find which ones a Comp object supports. layer(index) is one such option. The index — the number inside the parentheses — pins down the layer you mean to use. Say Solid 1 is the first layer of your composition for this example. Pulling values from the active composition's first layer means adding .layer(1) to the end of the expression, giving:

```javascript
  thisComp.layer(1)
```

Consult the expression elements reference once more and you'll see layer(index) returns a Layer object. Browse Layer General attributes and methods for the element you need. Should you want the layer's Position property values, append .position to the expression's end to produce:

```javascript
  thisComp.layer(1).position
```

Layer General attributes and methods shows that the position attribute returns a property. Check Property attributes and methods and you'll spot the option to fold a time factor into the expression. To set a specific time — current time plus 2 seconds, say — add .valueAtTime(time+2) at the end and you get:

```javascript
  thisComp.layer(1).position.valueAtTime(time+2)
```

Property attributes and methods reveals that the valueAtTime method returns a Number or Array. Once an expression returns a Number, Array, or Boolean (true or false), no further attributes or methods can be tacked on — though you're still free to append arithmetic operators such as +, -, \*, and /.
