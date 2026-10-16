# JavaScript APIs — colorConvertAction

A lone color conversion action is what this object captures.

Calling the Doc object's getColorConvertAction method yields a colorConvertAction object, which you are then free to adjust. Two halves make up a color conversion action: a “match” half and an “action” half. Which kinds of objects qualify for the action is set out by the “match” half. An array of these actions feeds the Doc object's colorConvertPage method, which tries them one by one until something matches.
