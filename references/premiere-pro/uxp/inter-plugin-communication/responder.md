# Responder

The Responder receives the calls sent by the Requester plugin. It does not require extra manifest permissions, but any `command` entrypoints that the Requester invokes have to be declared in `manifest.json`.

```json
{
  "entrypoints": [
    {
      "id": "simplePanel",
      "type": "panel",
      "label": {
        "default": "Main Panel"
      }
    },
    {
      "id": "simpleCommand",
      "type": "command",
      "label": {
        "default": "Simple Command"
      }
    },
    {
      "id": "commandWithInput",
      "type": "command",
      "label": {
        "default": "Command With Input"
      }
    }
  ]
}
```

...

...

...

Implement those commands in `index.js` as well. The [Add Commands](../add-a-command-entrypoint/reference-index.md) tutorial has additional details.

### Example

In this sample, one Requester button makes three calls into the Responder plugin:

- display the Responder panel
- run the Responder `simpleCommand` entrypoint
- run the Responder `commandWithInput` entrypoint while supplying a payload

The Responder plugin writes those incoming requests into the body of its panel.

[Figure: Inter Plugin Communication](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/inter-plugin-comm/img/ipc-requester-responder.png)
