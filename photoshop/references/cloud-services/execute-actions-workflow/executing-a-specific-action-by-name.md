# Executing a specific action by name

For an `.atn` file that bundles several named actions, set `actionName` to run just the chosen entry. Without `actionName`, execution proceeds through every action in the file in sequence.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "https://your-storage.com/my-actions.atn"
        },
        "actionName": "Vignette Effect"
      }
    ]
  }
}
```

One request may combine actions that name a specific action with actions that process an entire file:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "https://your-storage.com/my-actions.atn"
        },
        "actionName": "Resize to Web"
      },
      {
        "source": {
          "url": "https://your-storage.com/color-grading.atn"
        }
      }
    ]
  }
}
```

In this sample, `"Resize to Web"` is taken only from the first `.atn`; the second `.atn` is processed in full.
