# Communicating with the Flash application

ScriptUI includes a Flash Player that can host a Flash application inside a window belonging to an Adobe application. That Flash application executes ActionScript, which is a JavaScript implementation separate from the ExtendScript JavaScript engine used by Adobe applications.

Create the Flash Player by adding a FlashPlayer control to the ScriptUI window. This control object provides functions for loading SWF files and controlling movie playback. It also provides functions that let the Adobe application script exchange calls and data with the Flash application's ActionScript environment. See FlashPlayer control functions.

Only these data types can cross between the two scripting environments:

- Number
- String
- Boolean
- null
- undefined
- Object
- Array

ActionScript class objects and date objects cannot be used as parameter values.

For two-way communication, the ActionScript code in the Flash application must expose the External API. Import ExternalInterface into the Flash application:

```actionscript
import flash.external.ExternalInterface;
```
