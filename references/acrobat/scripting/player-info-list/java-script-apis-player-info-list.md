# JavaScript APIs - PlayerInfoList

Think of this object as standing in for an array of PlayerInfo objects. You reach the individual PlayerInfo elements with the ordinary array-index syntax, and you read how many there are from the length property.

The app.media.getPlayers method is what produces this object.

When you build a media player through app.media.createPlayer, the PlayerArgs object you hand the method can put a PlayerInfoList into its settings.players property. That confines the new player to whichever players the list names.
