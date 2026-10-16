# SeedValue.reasons

Type: Array of Strings. Access: R/W.

The set of reasons a user may pick from while signing.

(Acrobat 8.0) Should this array hold just one element, that element being a lone period ‘.’, and should the flags property mark reasons as required, then Acrobat 8 hides the reason-entry UI during signing. This takes precedence over the user's preference.

Should this array be empty while reasons are marked required, an exception gets thrown.
