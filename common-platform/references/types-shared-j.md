# Shared (cont. 9)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_global_d_ts

/\*\*

- Encodes a string according to RFC2396.
- Builds a UTF-8 ASCII encoded version of the string. The string is first converted to UTF-8, then each non-alphanumeric character becomes a percent escape
- in %xx form, where xx is the character's hexadecimal value. Once UTF-8 conversion and escaping are complete, no character code in the string is greater than 127. Characters left unencoded are -\_.!~\*'(). The method returns false on errors.
- @param text Text to encode.
  \*/
  declare function encodeURIComponent(text: string): string

/\*\*

- Produces a URL-encoded string from aString.
- In the returned string, each character from aString that needs URL encoding is replaced by a %xx escape; xx carries the Unicode character code as a hexadecimal value. This representation is used when sending information appended to a URL, for example during GET method execution. Use the unescape() global function to restore the original string. Returns a URL-encoded version of aString.
- @param aString String to encode.
  \*/
  declare function escape(aString: string): string

/\*\*

- Treats its argument as JavaScript script text and returns the evaluation result.
- Passing an object's toSource() result can reconstruct that object.
- @param stringExpression Script text for evaluation.
  \*/
  declare function eval(stringExpression: string): any

/\*\*

- Evaluates an expression and indicates whether the result is a finite number.
- Returns true for finite numeric results and false otherwise. A value of infinity or negative infinity yields false.
- @param expression Any JavaScript expression that is valid.
  \*/
  declare function isFinite(expression: number): boolean

/\*\*

- Evaluates an expression and indicates whether the result is "Not-a-Number" (NaN).
- Returns true when evaluation produces NaN, and false when the value is numeric.
- @param expression Any JavaScript expression that is valid.
  \*/
  declare function isNaN(expression: number): boolean

/\*\*

- Returns true when the provided string is a valid XML name.
- @param name XML name to test.
  \*/
  declare function isXMLName(name: string): boolean

/\*\*

- Localizes a ZString-encoded string and inserts extra arguments into it.
- @param what String to localize. A ZString-encoded value may include placeholders for additional arguments, written %1 through %n.
- @param arguments Optional argument or arguments merged into the string. More than one argument is allowed.
  \*/
  declare function localize(what: string, ...arguments: any[]): string

/\*\*

- Pulls a floating-point number out of a string.
- Parses the string until it finds the first character sequence convertible to a floating point number, then returns that number; if none is found, it returns NaN. Exponential notation is supported.
- @param text Source string for floating point extraction.
  \*/
  declare function parseFloat(text: string): number

/\*\*

- Pulls an integer out of a string.
- Parses the string to find the first character sequence, using the specified base, that can be converted to an integer. It returns that integer, or NaN when no convertible sequence is found.
- @param text String from which to extract an integer.
- @param base Base for parsing the string, from base 2 to base 36. If omitted, the string format determines the base.
  \*/
  declare function parseInt(text: string, base?: number): number

/\*\*

- Shows a dialog where the user can enter text.
- Returns null if the user canceled the dialog; otherwise returns the entered text.
- @param prompt Text to display.
- @param default\_ Default text used to prefill the edit field.
- @param title Dialog title.
  \*/
  declare function prompt(prompt: string, default\_?: string, title?: string): string | null

/\*\*

- Sets the default XML namespace.
- This function replaces the standard JavaScript statement set default xml namespace.
- @param namespace Namespace to use. Omit this parameter to return to the empty namespace. Use a Namespace object or a string.
  \*/
  declare function setDefaultXMLNamespace(namespace: Namespace): void

/\*\*

- Converts a URL-encoded string back into a regular string and returns it.
- Use the escape() global function when URL-encoding strings.
- @param stringExpression URL-encoded string to convert.
  \*/
  declare function unescape(stringExpression: string): string

/\*\*

- Builds and returns a source-code representation of the supplied argument.
- @param what Object to uneval.
  \*/
  declare function uneval(what: any): string
