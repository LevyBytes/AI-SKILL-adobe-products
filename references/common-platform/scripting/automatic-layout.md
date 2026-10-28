# Automatic layout

When a script builds a window and the related user-interface elements, it may either set every element and container size and position explicitly, or rely on ScriptUI automatic layout. Automatic layout combines available information about UI elements with layout rules to produce a suitable dialog arrangement, determining control and container sizes automatically.

Compared with explicit positioning, automatic layout is simpler to code. It also makes scripts easier to change, maintain, and localize into other languages. In addition, the script adjusts automatically to the host application's default font and font size for ScriptUI windows.

The script author still has substantial influence over automatic layout. Every container has a layout manager object assigned through the layout property. That manager controls element sizes and positions inside the container and also sizes the container itself. Scripts can use the default manager or create a replacement:

```javascript
myWin.layout = new AutoLayoutManager( myWin );
```
