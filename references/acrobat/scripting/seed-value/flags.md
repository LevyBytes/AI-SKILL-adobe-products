# SeedValue.flags

Type: Number. Access: R/W.

A collection of bit flags that govern which of this object's properties below are mandatory. Form the value as the bitwise OR of the values that follow, each switched on when its matching property is required:

1: filter

2: subFilter

4: version

8: reasons

16: legalAttestations

32: shouldAddRevInfo

64: digestMethod\*

128: lockDocument

256: appearanceFilter

Usage: 1 specifies filter, 3 specifies filter and sub-filter, and 11 specifies filter, sub-filter, and reasons. If this field is not present, all properties are optional.
