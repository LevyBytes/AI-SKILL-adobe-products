# Find/Change — Tips for constructing GREP searches

Use these guidelines when building GREP expressions.

Many GREP-tab searches resemble Text-tab searches, but the required codes can differ by tab. Usually, Text tab metacharacters start with ^, such as ^t for a tab, while GREP tab metacharacters start with \, such as \t for a tab. Some metacharacters break that pattern. For instance, paragraph return is ^p on the Text tab and \r on the GREP tab. For the Text and GREP metacharacter lists, see Metacharacters for searching.

When a character has special meaning in GREP, type a backslash (\) before it so the following character is read literally. For example, a period ( . ) matches any character in a GREP search; to find an actual period, enter “\.”

If the GREP search will be reused often or shared, save it as a query. (See Find/change items using queries.)

Parentheses split a search into subexpressions. For example, the c(a|o)t string finds “cat” or “cot.” Parentheses are especially useful for marking groupings. Searching “the (cat) and the (dog)” labels “cat” as Found Text 1 and “dog” as Found Text 2. Found Text expressions, such as $1 for Found Text 1, can change only part of the matched text.
