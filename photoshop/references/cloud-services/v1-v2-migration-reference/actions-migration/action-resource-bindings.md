# Action resource bindings and placeholders

**Additional Resources:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "options": {
    "actions": [/* additional content omitted */],
    "additionalContents": [  // Max 25 (images/compositing resources)
      {"source": {"url": "<IMAGE_URL>"}}
    ],
    "brushes": [           // Max 10 - must use external URLs (binary, no inline)
      {"source": {"url": "<BRUSH_URL>"}}
    ],
    "patterns": [          // Max 10 - must use external URLs (binary, no inline)
      {"source": {"url": "<PATTERN_URL>"}}
    ],
    "fontOptions": {
      "additionalFonts": [ // Max 10 - must use external URLs (binary, no inline)
        {"source": {"url": "<FONT_URL>"}}
      ],
      "missingFontStrategy": "use_default"
    }
  }
}
```

**Additional Contents Placeholder:**
In ActionJSON or UXP scripts, refer to additional assets as `__ADDITIONAL_CONTENTS_PATH_0__`, `__ADDITIONAL_CONTENTS_PATH_1__`, and so on, where the 0-based index matches the item position in `additionalContents`. Binary assets such as brushes, patterns, and fonts require external URLs; inline content is not supported for those resource types.

V1 ActionJSON used service-dependent positional placeholders for extra images:

- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` (actionJSON/execute-actions workflows)
- `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` (Pegasus/Lightroom action workflows)

Both convert to `__ADDITIONAL_CONTENTS_PATH_${index}__` in V2, for example index 0 to `__ADDITIONAL_CONTENTS_PATH_0__`. The older placeholder forms still work for backward compatibility, but `__ADDITIONAL_CONTENTS_PATH_${index}__` is the preferred V2 spelling.

Related: [Action-file migration](migrating-actions.md).
