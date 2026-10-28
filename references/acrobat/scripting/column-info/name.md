# name

A string giving the column's identifying name. You can pass this string into the Statement object's getColumn method to point at the matching column.

| Type | Access |
| --- | --- |
| String | R |

### description

A string carrying database-specific details about the column.

| Type | Access |
| --- | --- |
| String | R |

### type

A numeric code that picks out which of the ADBC SQL Types governs the data in the column tied to this ColumnInfo object.

| Type | Access |
| --- | --- |
| Number | R |
