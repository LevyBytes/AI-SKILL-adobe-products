# PropertyBase object

app.project.item(index).layer(index).propertySpec

### Description

Through a layer, you reach properties by their names, and the expression syntax you use depends on what the application preferences are set to. To illustrate, here are several equivalent routes into the properties found in the Effects group:

```javascript
var effect1 = app.project.item(1).layer(1).effect("AddGrain")("Viewing Mode");
var effect1again = app.project.item(1).layer(1).effect.addGrain.viewingMode;
var effect1againtoo = app.project.item(1).layer(1)("Effects").addGrain.viewingMode;
var effect1againtoo2 = app.project.item(1).layer(1)("Effects")("Add Grain")("Viewing Mode");
```

See also PropertyGroup.property().

Info

Because PropertyBase underlies both Property and PropertyGroup, its attributes and methods stay available whether you are handling individual properties or whole property groups.
