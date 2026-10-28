# CEP XML context menus

`CSInterface` provides three APIs for setting and updating a customized context menu.

```javascript
CSInterface.prototype.setContextMenu = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
};

CSInterface.prototype.setContextMenuByJSON = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
};

CSInterface.prototype.updateContextMenuItem = function(menuItemID, enabled, checked){
  var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
  var ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
};
```

For "setContextMenu", the "menu" parameter is an XML string.

- Id - identifies the menu item. Use plain text for the value.
- Icon - gives the menu item's icon path, relative to the extension root path. For best rendering, provide a 16 x 16px PNG icon; larger files increase the menu item's size.
- Label - provides the text shown for the menu item and can be localized.
- Enabled - controls whether the item is available. The default value is true.
- Checkable - controls whether the item can toggle between checked and unchecked. The default value is false.
- Checked - controls whether the item starts checked. The default value is false.
- At the same menu level, icon items and checkable items cannot appear together; icon items take precedence.

An example appears here.

Pass this XML menu string to the context-menu API described here.

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

The "callback" parameter is invoked when the user clicks a menu item. Its sole argument is the clicked menu item ID.

Related references:

- [CEP JSON context menus](json-context-menus.md)
