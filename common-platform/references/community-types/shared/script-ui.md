# ScriptUI

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Global, non-instantiable class that centralizes ScriptUI information.

```typescript
declare class ScriptUI {
    /**
    - Groups enum values for alignment and alignChildren.
    - Values: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER
      */
      static readonly Alignment: typeof _Alignment
    /**

    - Groups the enum values usable as the style argument for ScriptUI.newFont().
    - Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
      */
      static readonly FontStyle: typeof _FontStyle
    /**

    - Font constants supplied by the host application.
      */
      static readonly applicationFonts: object
    /**

    - Object whose properties name the compatibility modes that the host application supports.
    - If ScriptUI.compatibility.su1PanelCoordinates is present, the application supports backward compatibility with the Panel element coordinate system from ScriptUI version 1.
      */
      static readonly compatibility: object
    /**

    - String that contains ScriptUI module's internal version number.
      */
      static readonly coreVersion: string
    /**

    - Object whose properties describe the environment where ScriptUI runs.
      */
      static readonly environment: Environment
    /**

    - Object whose properties and methods expose objects used by the ScriptUI event system.
    - It includes createEvent(), a function for creating event objects to simulate a user-interaction event.
      */
      static readonly events: Events
    /**

    - String containing the UI component framework name compatible with this ScriptUI version.
      */
      static readonly frameworkName: string
    /**

    - String containing the ScriptUI component framework version number.
      */
      static readonly version: any
    /**

    - Looks up a host-application resource string for the supplied text.
    - When no matching string resource exists, the input text is returned.
    - @param text Text to match.
      */
      static getResourceText(text: string): string
    /**

    - Creates a font object for text controls and titles.
    - @param name Font name, or font family name.
    - @param style Font style; can be a string or one of the ScriptUI.FontStyle values.
    - @param size Point size for the font.
      */
      static newFont(name: string, style: string, size: number): ScriptUIFont
    /**

    - Loads an image from resources or disk files into an image object.
    - Creates a global image object for controls that can display images, loading the associated images from the specified resource names or image files.
    - @param normal Resource name or disk file path for the image used in the normal state.
    - @param disabled Resource name or disk file path for the image used in the disabled state.
    - @param pressed Resource name or file-system path for the image used in the pressed state.
    - @param rollover Resource name or file-system path for the rollover-state image.
      */
      static newImage(
      normal: string,
      disabled?: string,
      pressed?: string,
      rollover?: string,
      ): ScriptUIImage
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
