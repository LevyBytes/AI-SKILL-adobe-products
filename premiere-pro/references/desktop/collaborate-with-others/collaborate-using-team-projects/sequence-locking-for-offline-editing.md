# Sequence Locking for offline editing

Managing sequence locking for offline editing and conflict-free Team Projects collaboration.

If internet connectivity is lost while you edit a sequence in Team Projects, the Project panel shows disconnected asset status in addition to connectivity visual cues. Sequence Locking is also disabled, so another collaborator may lock the sequence and begin editing it.

During offline editing with Sequence Locking, the Project panel shows disconnected asset status.

You can keep working in disconnected status, but publishing is unavailable and your edits are stored locally in a duplicate sequence. After the connection returns, Premiere notifies you of the next actions based on whether a conflict is possible.

- No conflicts: After you reconnect to the internet, if no other person edited the sequence, you can update the changes made offline and continue editing that sequence.
- Conflict: If you edited an unlocked sequence while offline and another collaborator edited that same sequence at the same time, reconnecting to the internet triggers a conflict notification. Use the Duplicate option to duplicate the sequence and continue with unpublished changes.

When two or more collaborators edit the same sequence offline, the first collaborator to reconnect is the only one offered the chance to publish changes to the contentious sequence. Other collaborators are warned about the conflict after they reconnect, and their work is automatically saved to a new sequence.
