# Premiere APIs

Premiere APIs, also called **DOM APIs** (Document Object Model) or **Premiere DOM APIs**, expose Premiere's document model directly. Among other tasks, they let plugins:

- **Access and modify projects**: work with sequences, tracks, clips, and markers
- **Work with media**: import files and manage project items
- **Control playback**: manage in/out points and the playhead
- **Apply effects**: place video and audio effects on clips
- **Export content**: set export options and start exports

The `app` object is the Premiere API entry point, and it is loaded from the `"premierepro"` module with `require()`.

```javascript
const app = require("premierepro");
```

The [Working with Premiere APIs](reference-index.md) section explains how to access and use Premiere APIs, and the [Premiere API reference](../host-api/premiere-api-overview.md) lists the available API surface.

Keep the two DOMs separate

The **Premiere DOM** operates on Premiere documents such as projects, sequences, and clips. The **HTML DOM** operates on the plugin interface, including buttons, inputs, and panels. Treat them as independent domains.
