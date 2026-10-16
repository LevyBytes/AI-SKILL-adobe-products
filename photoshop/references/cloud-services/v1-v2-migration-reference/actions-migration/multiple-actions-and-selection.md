# Multiple actions and action selection

**Multiple Actions:**
V2 can run as many as 10 actions, executing them in order:

```json
{
  "options": {
    "actions": [
      { "source": { "url": "<ACTION_1_URL>" } },
      { "source": { "url": "<ACTION_2_URL>" } },
      { "source": { "url": "<ACTION_3_URL>" } }
    ]
  }
}
```

**Action Name Selection (V2 New Feature):**
To run one named action inside an `.atn` file rather than the whole file, set optional `actionName`:

```json
{
  "options": {
    "actions": [
      {
        "source": { "url": "<ACTION_FILE_URL>" },
        "actionName": "Vignette Effect"
      }
    ]
  }
}
```

Leaving out `actionName` runs every action in the file. A single request may combine targeted actions with full-file execution. This option is most useful for `.atn` files containing several named actions; inline actionJSON already specifies the exact operations to execute.

Related: [Action-file migration](migrating-actions.md).
