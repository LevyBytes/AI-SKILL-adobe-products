# Arrays and multidimensional properties

An Array is the object type that holds an ordered run of numbers, written out as comma-separated numbers wrapped in brackets — like this:

```javascript
  [10, 23]
```

Stash an Array object in a variable and its values become easy to reach elsewhere in the expression. For instance:

```javascript
  myArray = [10, 23]
```

How many elements an Array object holds is its dimension; myArray therefore has a dimension of 2. Across After Effects, properties carry different dimensions according to how many value arguments they take. Within the expression language, a property's values are either lone values (Number objects) or arrays (Array objects).

A handful of properties and their dimensions appear in the table below:

| Dimension | Property |
| --- | --- |
| 1 | Rotation °<br><br>Opacity % |
| 2 | Scale [x=width, y=height]<br><br>Position [x, y]<br><br>Anchor Point [x, y]<br><br>Audio Levels [left, right] |
| 3 | Scale [width, height, depth]<br><br>3D Position [x, y, z]<br><br>3D Anchor Point [x, y, z]<br><br>Orientation [x, y, z] |
| 4 | Color [red, green, blue, alpha] |

To pull out a single element of an Array object, supply brackets with an index number marking the element you're after. Indexing of Array elements begins at 0. Carrying on with the earlier sample, myArray[0] equals 10 while myArray[1] equals 23.

These two expressions amount to the same thing:

```javascript
  [myArray[0], 5]
  [10, 5]
```
