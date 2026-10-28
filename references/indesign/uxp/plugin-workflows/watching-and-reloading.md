# Watching and Reloading

Choosing `Watch` from the Actions menu instructs the Developer Tool to monitor code changes on disk.
When a project file changes, UDT reloads the plugin automatically, creating a quick edit->break things->repair them->reload loop.

Manual reload is also available by choosing `Reload` from the Actions menu. With `Watch` enabled, that step should not be necessary, though some developers still prefer it.

Manifest edits are different: this action does _not_ refresh those changes. Use **Unload** and **Load** on the plugin again for that case.
