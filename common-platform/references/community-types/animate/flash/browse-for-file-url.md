# Flash.browseForFileURL

Community declaration reference: Animate/22.0.

Shows a system File Open or File Save dialog box so the user can choose a file for opening or saving.
@returns File URL as a file:/// URI, or null when the dialog box is canceled.
@param browseType File-browsing operation type. Valid values are "open", "select" or "save". The values "open" and "select" display the system File Open dialog box and are both retained for Dreamweaver compatibility. The value "save" displays a system File Save dialog box.
@param title Optional title string for the File Open or File Save dialog box. When omitted, a default title is used. This parameter is optional.
@param fileDescription Optional file description, for example:
FLA Document (\*.fla)
ActionScript File (\*.as)
@param fileFilter Optional filter string limiting which files the dialog shows. Examples:
"fla"
"fla;as"
"jsfl;fla;as"

```typescript
declare class Flash {
    browseForFileURL(
        browseType: string,
        title?: string,
        fileDescription?: string,
        fileFilter?: string,
        ): string | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
