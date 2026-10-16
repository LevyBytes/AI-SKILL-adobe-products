# Troubleshoot Common Issues

| Symptom | Likely Cause | Solution |
| --- | --- | --- |
| Permission denied error | Missing manifest entry | Add the extension or scheme to `launchProcess` in manifest |
| Operation fails silently | User denied consent | Check return value and handle denial gracefully |
| Platform-specific scheme not working | Wrong scheme for OS | Use platform detection to choose the correct scheme |
| `file://` scheme doesn't work | Wrong method used | Use `openPath()` for local files, not `openExternal()` |
| UWP restrictions on Windows | System security policy | UWP apps can only access files in their sandbox on Windows Store apps |
