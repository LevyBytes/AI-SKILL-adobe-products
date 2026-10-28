# Creating global properties

Attaching properties to the global object is how you declare global data. A property may hold a String, a Boolean value, or a Number.

Say you want to introduce a variable named radius and let every document script reach it (assuming “Enable global object security policy” stays unchecked); the script declares the property like so:

```javascript
global.radius = 8;
```

From here on, the global variable radius is recognized across documents for the rest of the current viewer session. Picture two open files, A.pdf and B.pdf, with the global declaration made inside A.pdf. Drawing on global.radius, either file — A.pdf or B.pdf — can compute the volume of a sphere.

```javascript
var V = (4/3) * Math.PI * Math.pow(global.radius, 3);
```

Both files return one and the same answer, 2144.66058. Change the value of global.radius and rerun the script, and V shifts to match.
