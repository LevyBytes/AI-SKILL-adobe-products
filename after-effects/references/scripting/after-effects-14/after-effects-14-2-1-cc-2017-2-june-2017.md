# After Effects 14.2.1 (CC 2017.2) (June 2017)

- ScriptUI panel buttons now go back to the rectangular look that shipped in After Effects 14.1 and earlier builds.
- Calling AVItem.setProxyToNone() from a script no longer throws the message "After Effects error: AEGP trying to add invalid footage".
- When the command behind System.callSystem() runs long, the scripting method now holds until every task it spawned has finished rather than erroring out.
