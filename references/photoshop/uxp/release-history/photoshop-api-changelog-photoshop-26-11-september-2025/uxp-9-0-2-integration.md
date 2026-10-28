# UXP 9.0.2 Integration

> - WebViews now receive script injection across every frame, including nested `<iframe>` content. This fixes no-op context menus appearing for `<iframe>` in WebViews.
> - A Debug-build connection problem between UXP Developer Tools (UDT) and host applications is fixed, removing the related workflow disruption.
> - The WebView visibility-change script now always executes on the plugin's JavaScript thread, resolving a crash across all DVA codebases.
