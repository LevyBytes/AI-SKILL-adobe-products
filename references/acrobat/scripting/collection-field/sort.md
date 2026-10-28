# sort

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | Integer | R/W |

How much weight this field carries when files in the collection are ordered is governed by sort.

A value of 0 leaves the field out of the sort entirely. An absolute value of 1 makes it the primary sort field; an absolute value of 2 makes it the secondary field (consulted to break ties on the primary), and the pattern continues from there. The sign carries the direction as well: a positive value sorts the files in ascending order, while a negative value sorts them in descending order.

Example: Picture four fields that label an email inbox — From, Subject, To, and Received — to see how ordering plays out. Every file in the collection stands for one email message. Give each field a sort value as shown here:

From: 0

To: 0

Subject: 1

Received: -2

Read these settings as follows. "Subject" serves as the primary sort field, since its absolute value is 1, and the positive sign sorts those entries in ascending order. Whenever two files carry the same subject, the tie passes to the secondary field. Here that field is "Received," whose absolute value of 2 marks it secondary and whose negative sign sorts it in descending order. So the listing runs by Subject ascending, and within any group of matching Subjects the files fall into a descending subgroup keyed on Received. The remaining fields, being 0, play no part in the ordering.
