# SeedValue.filter

Type: String. Access: R/W.

The signing security handler's name, given independently of language.

Where filter is given and the flags property marks this entry as a required constraint, signing must use the handler this entry names, or else not proceed at all. Where flags marks it optional instead, that handler should be used when available; if it is unavailable, another handler may stand in.
