# JavaScript APIs - Row

Every column's data for a single row lands in this catch-all JavaScript object. The Statement object method hands it back. Its properties are these:

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| columnArray | Array | R | An array of Column objects.<br><br>It matches what the Statement object method would give back if you called it on that same Statement object at the very moment this row object came into being. |
| column properties | any | R | For each column the query pulls in, there is a matching property that holds that row's data for that column. |
