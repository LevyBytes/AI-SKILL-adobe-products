# Tips & Tricks — UI Performance

Try toggling `PF_EO_ALWAYS_UPDATE` against `PF_EO_NEVER_UPDATE` (both from `PF_EventExtra`) until you strike the right balance of speed versus precision.

There's a deliberate quirk on macOS: when custom UI draw events fire, the foreground and background colors are left as-is rather than being reset to white and black.

That behavior is intentional. Since you're painting straight into our context, resetting the background color isn't something you need to bother with.
