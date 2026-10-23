# JavaScript APIs - TableInfo

Holding nothing but the essentials about a table, this generic JavaScript object comes back from connection.getTableList and carries the properties below.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| name | String | R | A table’s identifying name. SQL statements can use this string to point at the table the TableInfo object goes with. |
| description | String | R | A string carrying database-dependent details about the table. |
