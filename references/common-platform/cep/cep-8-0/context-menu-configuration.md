# CEP XML context menus

Developers can set and update a customized context menu through three APIs in `CSInterface`.

```js
CSInterface.prototype.setContextMenu = function (menu, callback) {
  window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
};

CSInterface.prototype.setContextMenuByJSON = function (menu, callback) {
  window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
};

CSInterface.prototype.updateContextMenuItem = function (menuItemID, enabled, checked) {
  var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
  var ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
};
```

For "setContextMenu", the "menu" parameter is an XML string.

- Id - Menu item ID; use plain text.
- Icon - Menu item icon path; supply a path relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger dimensions increase the menu item's size.
- Label - Menu item label; localized languages are supported.
- Enabled - Controls whether the item is enabled or disabled. The default value is true.
- Checkable - Controls whether the item can be checked/unchecked. The default value is false.
- Checked - Controls whether the item is checked or unchecked. The default value is false.
- Menu items with icons and checkable items cannot appear together on the same menu level. Items with icons take precedence over checkable items.

XML sample:

Pass this XML string to the described menu API.

```xml
<Menu>
   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false" Icon="./img/small_16X16.png"/>
   <MenuItem Id="menuItemId2" Label="TestExample2">
     <MenuItem Id="menuItemId2-1" Label="TestExample2-1" >
       <MenuItem Id="menuItemId2-1-1" Label="TestExample2-1-1" Enabled="false" Checkable="true" Checked="true"/>
     </MenuItem>
     <MenuItem Id="menuItemId2-2" Label="TestExample2-2" Enabled="true" Checkable="true" Checked="true"/>
   </MenuItem>
   <MenuItem Label="---" />
   <MenuItem Id="menuItemId3" Label="TestExample3" Enabled="false" Checked="false"/>
</Menu>
```

The "callback" parameter is the callback function invoked after the user clicks a menu item. Its only argument is the clicked menu item's ID.

Related references:

- [CEP JSON context menus](json-context-menus.md)
