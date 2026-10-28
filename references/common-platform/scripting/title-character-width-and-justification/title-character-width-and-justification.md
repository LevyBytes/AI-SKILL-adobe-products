# Managing control titles - Title character width and justification

```javascript
droplist.titleLayout = { alignment: ["left", "center"], characters: 20 };
```

```javascript
droplist.titleLayout = { alignment: ["left", "center"],
                         characters: 20,
                         justify: "right" };
```

The surrounding example supplies the ScriptUI window `w`.

```javascript
w.ddl1 = w.add('dropdownlist { title: "Image format:" }');
w.ddl2 = w.add('dropdownlist { title: "Background color:" }');
w.ddl3 = w.add('dropdownlist { title: "Text color:" }');
w.ddl1.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
w.ddl2.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
w.ddl3.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
```
