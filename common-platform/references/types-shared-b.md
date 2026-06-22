# Shared (cont. 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_JavaScript_d_ts

/\*\*

- Sets the day on a specified Date object using universal time.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the updated date.
- @param date Day-of-month integer, 1 through 31.
  \*/
  setUTCDate(date: number): number

/\*\*

- Sets the year on a specified Date object using UTC, with optional month and date changes.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param year Year value written in four digits.
  \*/
  setUTCFullYear(year: number): number

/\*\*

- Sets the hours on a specified Date object using UTC.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param hours Hour integer, 0 (midnight) through 23 (11 PM), to set.
  \*/
  setUTCHours(hours: number): number

/\*\*

- Sets the milliseconds on a specified Date object using UTC.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param ms Millisecond integer to set, in the range of 0 to 999.
  \*/
  setUTCMilliseconds(ms: number): number

/\*\*

- Sets the minutes on a specified Date object using UTC.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param min Minute integer to set, in the range 0 to 59.
  \*/
  setUTCMinutes(min: number): number

/\*\*

- Sets the month on a specified Date object using UTC.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param month Month integer to set, in the range 0 (Jan.) to 11 (Dec.).
  \*/
  setUTCMonth(month: number): number

/\*\*

- Sets the seconds on a specified Date object using UTC.
- The return value is the UTC millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param sec Second integer to set, in the range 0 to 59.
  \*/
  setUTCSeconds(sec: number): number

/\*\*

- Sets the year on a specified Date object using local time, as the difference between the current year and 1900.
- The return value is the millisecond offset from midnight, January 1, 1970 to the assigned date.
- @param year Integer value for the year to set. The method treats 1- or 2- digit input as the 1900s; for example, 13 means 1913.
  \*/
  setYear(year: number): number

/\*\*

- Gives the date as a string.
  \*/
  toDateString(): string

/\*\*

- Gives the date and time as a string adjusted to GMT (UTC).
  \*/
  toGMTString(): string

/\*\*

- Gives the date as a localized string.
  \*/
  toLocaleDateString(): string

/\*\*

- Gives a localized, human-readable string for the date and time stored in the Date object.
  \*/
  toLocaleString(): string

/\*\*

- Gives the time as a localized string.
  \*/
  toLocaleTimeString(): string

/\*\*

- Builds a string representation that eval() can consume to re-create an object. Only built-in classes support this.
  \*/
  toSource(): string

/\*\*

- Gives a human-readable string for the date and time stored in the Date object.
- An example of the returned format is: Mon Aug 13, 10:54:21 GMT-0700 2001.
  \*/
  toString(): string

/\*\*

- Gives the time as a string.
  \*/
  toTimeString(): string

/\*\*

- Gives the date and time as a string adjusted to UTC.
  \*/
  toUTCString(): string

/\*\*

- valueOf() returns an integer count of milliseconds elapsed since midnight.
  \*/
  valueOf(): number
  }

interface FunctionConstructor {
readonly prototype: Function

/\*\*

- Function parses constructor arguments and produces a Function object.
- @param arguments Comma-separated formal argument list. Formal arguments may also be supplied individually; in that case, the final argument to the Function constructor is treated as the function body.
- @param body Body text for the new function.
  \*/
  new (arguments: string, body: string): Function
  (arguments: string, body: string): Function
  }
  declare const Function: FunctionConstructor

/\*\*

- Wraps a built-in function or JavaScript function.
  \*/
  interface Function {
  /\*\*
  - Function arguments packaged into an array.
  - This property is deprecated; use the arguments property inside the function body.
    \*/
    arguments: object

/\*\*

- Count of formal arguments.
- Deprecated; prefer the length property.
  \*/
  readonly arity: number

/\*\*

- Count of formal arguments.
  \*/
  readonly length: number

/\*\*

- Function name.
  \*/
  readonly name: string

/\*\*

- Applies a this object and an argument list to a function.
- Unlike call(), this form supplies the arguments as an Array object.
- @param thisObj Object used as this.
- @param args Array of arguments.
  \*/
  apply(thisObj: object, args: any): any

/\*\*

- Applies a this object and individual arguments to a function.
- Unlike apply(), this form supplies the arguments one by one.
- @param thisObj Object used as this.
- @param arguments First argument to the function. Add additional arguments as required.
  \*/
  call(thisObj: object, ...arguments: any[]): any

/\*\*

- Builds a string representation that eval() can consume to re-create an object. This works only with JavaScript functions.
  \*/
  toSource(): string

/\*\*

- Produces a string version of the function definition.
  \*/
  toString(): string
  }

interface StringConstructor {
readonly prototype: String

/\*\*

- Gives a string representation for the value supplied as an argument.
- @param value Value to stringify; it may be a number, variable, or object.
  \*/
  new (value?: any): String
  (value: any): string

/\*\*

- Builds a string by joining characters supplied through ASCII values.
- @param value1 ASCII value or values.
  \*/
  fromCharCode(value1: number): string
  }
  declare const String: StringConstructor

/\*\*

- Character string whose characters can be addressed by index.
  \*/
  interface String {
  /\*\*
  - String length.
    \*/
    readonly length: number

/\*\*

- Gets the character at index.
  \*/
  readonly [index: number]: string

/\*\*

- Gives a string made from this string enclosed in a tag.
- @param name Text stored in the anchors' name attribute.
  \*/
  anchor(name: string): string

/\*\*

- Gives a string made from this string enclosed in a <big> tag.
  \*/
  big(): string

/\*\*

- Gives a string made from this string enclosed in a <blink> tag.
  \*/
  blink(): string

/\*\*

- Gives a string made from this string enclosed in a \*_ tag.
  _/
  bold(): string

/\*\*

- Gives the character at the specified index.
- @param index Integer between 0 and string.length -1 that specifies the character to return.
  \*/
  charAt(index: number): string

/\*\*

- Gives the Unicode value for the character at the specified index.
- @param index Integer between 0 and string.length -1 that specifies the character.
  \*/
  charCodeAt(index: number): number

/\*\*

- Converts the supplied values to strings when needed.
- It returns those values concatenated onto the original string; the original string is left unchanged. The result is the concatenated string.
- @param value Values to concatenate with the given string.
  \*/
  concat(...value: any[]): string

/\*\*

- Gives a string made from this string enclosed in a <tt> tag.
  \*/
  fixed(): string

/\*\*

- Gives a string made from this string enclosed in a tag.
- @param color Value stored in the tag's color attribute.
  \*/
  fontcolor(color: string): string

/\*\*

- Gives a string made from this string enclosed in a tag.
- @param size Value stored in the tag's size attribute.
  \*/
  fontsize(size: number): string

/\*\*

- Gives the first index where the specified string occurs, starting at offset when supplied.
- @param searchValue String to search for.
- @param offset Starting offset for the search.
  \*/
  indexOf(searchValue: string, offset?: number): number

/\*\*

- Gives a string made from this string enclosed in a _ tag.
  _/
  italics(): string

/\*\*

- Gives the position of the final matching occurrence inside the string.
- Searching proceeds backward from fromIndex. The result is the location where searchValue last appears, or -1 when no match is present.
- @param searchValue Text value to look for.
- @param offset Position where the backward scan starts.
  \*/
  lastIndexOf(searchValue: string, offset?: number): number

/\*\*

- Produces this string wrapped with an element.
- @param href Value assigned to the element's href attribute.
  \*/
  link(href: string): string

/\*\*

- Compares this string with another string using locale-aware rules.
- @param what String used as the comparison target.
  \*/
  localeCompare(what: string): number

/\*\*

- Applies a regular expression match operation to the string.
- @param regexp Regular expression used for matching.
  \*/
  match(regexp: RegExp | string): RegExpMatchArray | null

/\*\*

-
- @param what
- @param with*
  \*/
  replace(what: any, with*: string): string

/\*\*

-
- @param search
  \*/
  search(search: RegExp): number

/\*\*

- Builds a new string from a selected substring.
- Extraction starts at startSlice and stops before endSlice. Negative indexes count back from the string end; for instance, startSlice below zero resolves as string. length + startSlice. The original string is left unchanged, and the returned characters cover startSlice through endSlice-1.
- @param startSlice Index where extraction starts.
- @param endSlice Index where extraction stops. If it is omitted, slice continues through the string end.
  \*/
  slice(startSlice: number, endSlice?: number): string

/\*\*

- Produces this string wrapped with a element.
  \*/
  small(): string

/\*\*

- Breaks a string into substrings, puts those pieces in an array, and returns that array.
- Pieces are separated wherever delimiter matches; delimiter characters are not included. The returned array contains the resulting substrings.
- @param delimiter Defines the separator string. If delimiter is not supplied, the result is a single-element array holding the whole string.
- @param limit
  \*/
  split(delimiter: string | RegExp, limit?: number): string[]

/\*\*

- Produces this string wrapped with a <strike> element.
  \*/
  strike(): string

/\*\*

- Produces this string wrapped with a element.
  \*/
  sub(): string

/\*\*

- Creates a string from characters starting at the specified index, start, for the requested character count.
- The source string remains unchanged, and the result contains the extracted characters.
- @param start Character position where extraction begins.
- @param length Count of characters to extract.
  \*/
  substr(start: number, length?: number): string

/\*\*

- Forms a substring by taking characters from indexA up to, but excluding, indexB.
- The source string is not modified. The returned substring spans indexA through indexB-1.
- @param indexA Index where extraction begins.
- @param indexB Index where extraction stops. If omitted, slice continues through the string end.
  \*/
  substring(indexA: number, indexB?: number): string

/\*\*

- Produces this string wrapped with a element.
  \*/
  sup(): string

/\*\*

- Returns a fresh string where every character from the original has been converted to localized lowercase.
- The source string remains unchanged.
  \*/
  toLocaleLowerCase(): string

/\*\*

- Returns a fresh string where every character from the original has been converted to localized uppercase.
- The source string remains unchanged.
  \*/
  toLocaleUpperCase(): string

/\*\*

- Returns a fresh string where every character from the original has been converted to lowercase.
- The source string remains unchanged.
  \*/
  toLowerCase(): string

/\*\*

- Generates source text for this object that eval() can consume to recreate it. This works only for built-in classes.
  \*/
  toSource(): string

/\*\*

- Returns this object itself.
  \*/
  toString(): string

/\*\*

- Returns a fresh string where every character from the original has been converted to uppercase.
- The source string remains unchanged.
  \*/
  toUpperCase(): string

/\*\*

- valueOf() reports milliseconds elapsed since midnight and returns an integer.
  \*/
  valueOf(): string
  }

interface NumberConstructor {
readonly prototype: Number

/\*\*

- Creates a Number object whose value is the argument after numeric conversion.
- @param value Value used to initialize the created object.
  \*/
  new (value?: any): Number
  (value: any): number

/\*\*

- Constant for the greatest number that can be represented.
  \*/
  readonly `MAX_VALUE`: number

/\*\*

- Constant for the least representable number.
  \*/
  readonly `MIN_VALUE`: number

/\*\*

- Constant value for negative infinity.
  \*/
  readonly `NEGATIVE_INFINITY`: number

/\*\*

- Constant for the special "Not a Number" value.
  \*/
  readonly NaN: number

/\*\*

- Constant value for positive infinity.
  \*/
  readonly `POSITIVE_INFINITY`: number
  }
  declare const Number: NumberConstructor

/\*\*

- Represents a numeric value as an object wrapper.
  \*/
  interface Number {
  /\*\*
  - Formats the Number object as a scientific-notation string.
  - @param decimals Number of decimal places.
    \*/
    toExponential(decimals: number): string

/\*\*

- Formats the Number object as a string with fixed decimal places.
- @param decimals Number of decimal places.
  \*/
  toFixed(decimals: number): string

/\*\*

- Produces the Number object's value as a string using localized formatting conventions.
  \*/
  toLocaleString(): string

/\*\*

- Converts the Number object to scientific or fixed notation according to its value.
- @param decimals Number of decimal places.
  \*/
  toPrecision(decimals: number): string

/\*\*

- Generates source text for this object that eval() can consume to recreate it. This works only for built-in classes.
  \*/
  toSource(): string

/\*\*

- Converts the Number object's value into a string.
- @param radix Optional base used for conversion.
  \*/
  toString(radix?: number): string

/\*\*

- Yields the Number object's primitive number value.
  \*/
  valueOf(): number
  }

interface BooleanConstructor {
readonly prototype: Boolean

/\*\*

- Creates a Boolean object whose state is the argument after boolean conversion.
- @param value Value converted into a Boolean.
  \*/
  new (value?: any): Boolean
  (value: any): boolean
  }
  declare const Boolean: BooleanConstructor

/\*\*

- Represents a Boolean value as an object wrapper.
  \*/
  interface Boolean {
  /\*\*
  - Generates source text for this object that eval() can consume to recreate it. This works only for built-in classes.
    \*/
    toSource(): string

/\*\*

- Produces the string form of bool's value.
- When bool's primitive value is true, the method returns the string true; otherwise, it returns the string false.
  \*/
  toString(): string

/\*\*

- Produces bool's primitive value.
- A true primitive yields true; a false primitive yields false.
  \*/
  valueOf(): boolean
  }

interface RegExpConstructor {
readonly prototype: RegExp

/\*\*

- Creates a RegExp object from an argument converted into a regular expression.
- @param pattern Pattern value to convert.
- @param flags Conversion controls. The string may combine i, m, and g: "i" -- case-insensitive matching "m" -- interpret the input as multiple lines "g" -- match globally
  \*/
  new (pattern: string | RegExp, flags?: string): RegExp
  (pattern: string | RegExp, flags?: string): RegExp

/\*\*

- Matched subexpression #1.
  \*/
  readonly $1: string

/\*\*

- Matched subexpression #2.
  \*/
  readonly $2: string

/\*\*

- Matched subexpression #3.
  \*/
  readonly $3: string

/\*\*

- Matched subexpression #4.
  \*/
  readonly $4: string

/\*\*

- Matched subexpression #5.
  \*/
  readonly $5: string

/\*\*

- Matched subexpression #6.
  \*/
  readonly $6: string

/\*\*

- Matched subexpression #7.
  \*/
  readonly $7: string

/\*\*

- Matched subexpression #8.
  \*/
  readonly $8: string

/\*\*

- Matched subexpression #9.
  \*/
  readonly $9: string

/\*\*

- True when matching uses the global mode.
  \*/
  global: boolean

/\*\*

- True when matching ignores case.
  \*/
  ignoreCase: boolean

/\*\*

- Original string supplied as input.
  \*/
  input: string

/\*\*

- Most recent match.
  \*/
  readonly lastMatch: string

/\*\*

- Value captured by the most recent matched subexpression.
  \*/
  readonly lastParen: string

/\*\*

- Text that appears before the match.
  \*/
  readonly leftContext: string

/\*\*

- True when matching spans multiple lines.
  \*/
  multiline: boolean

/\*\*

- Text that appears after the match.
  \*/
  readonly rightContext: string
  }
  declare const RegExp: RegExpConstructor

/\*\*

- Object wrapper for a regular expression.
  \*/
  interface RegExp {
  /\*\*
  - Builds a regular expression from a string and returns true when compilation succeeds.
  - @param pattern Pattern to compile.
    \*/
    compile(pattern: string): boolean

/\*\*

- Runs a regular expression.
- The result is an array: element zero is the overall match, followed by captures from matching subexpressions in occurrence order. With no match, the result is null.
- @param text String used for the match operation.
  \*/
  exec(text: string): RegExpExecArray | null

/\*\*

- Runs a regular expression and returns true when a match exists.
- @param text String used for the match operation.
  \*/
  test(text: string): boolean

/\*\*

- Converts this RegExp object into a string.
  \*/
  toString(): string
  }

interface RegExpMatchArray extends Array<string> {
index?: number
input?: string
}

interface RegExpExecArray extends Array<string> {
index: number
input: string
}

interface ErrorConstructor {
readonly prototype: Error

/\*\*

- Creates an Error object.
- @param msg Error message text.
- @param file File name.
- @param line Line number.
  \*/
  new (msg: string, file?: string, line?: number): Error
  (msg: string, file?: string, line?: number): Error
  }
  declare const Error: ErrorConstructor

/\*\*

- Object wrapper for a runtime error.
  \*/
  interface Error {
  /\*\*
  - Error message text.
    \*/
    description: string

/\*\*

- Generates source text for this object that eval() can consume to recreate it. This works only for built-in classes.
  \*/
  toSource(): string

/\*\*

- Converts this object into a string.
  \*/
  toString(): string
  }

interface FileConstructor {
readonly prototype: File

/\*\*

- Creates a File object that points at a file-system location.
- @param path Full or partial path name, in platform-specific form or URI form. The object stores the absolute path. The referenced file is not required to already exist. If path identifies an existing folder, File returns a Folder object instead of a File object, while new creates a File object named for a file that is not yet present.
  \*/
  new (path?: string): File
  (path?: string): File

/\*\*

- Name of the file system.
- Read this as a class property on the File constructor. Possible results: "Windows", "Macintosh", and "Unix".
  \*/
  readonly fs: string

/\*\*

- Decodes a UTF-8 string according to RFC 2396 and returns the decoded result.
- See also String.decodeURI().
- @param uri UTF-8 string that should be decoded.
  \*/
  decode(uri: string): string

/\*\*

- Encodes a string according to RFC 2396 and returns the encoded result.
- Special characters are encoded as UTF-8 and represented by percent escapes followed by two hexadecimal digits. For example, "my file" becomes "my%20file".
- Characters treated as special have numeric values greater than 127, except for these characters: / - \_ . ! ~ \* ' ( )
- See also encodeURI().
- @param name String to encode.
  \*/
  encode(name: string): string

/\*\*

- Reports whether the named encoding can be used.
- @param name Encoding name. Common examples include "ASCII", "binary", and "UTF-8". See the JavaScript Tools Guide for the complete supported-encoding list.
  \*/
  isEncodingAvailable(name: string): boolean

/\*\*

- Shows a dialog where the user may choose one file or several files to open.
- The built-in platform file browser is displayed for selecting existing files, and matching File objects are created for the choices.
- If OK is clicked, the return value is a File object for one selected file or an array when multiple files are chosen.
- If the user cancels, null is returned.
- @param prompt Prompt text shown when the dialog supports a prompt.
- @param filter Filter limiting which file types appear. On Windows, a filter expression can look like "Javascript files:_.jsx;All files:_.\*". On Mac OS, use a filter function that receives a File instance and returns true to include it in the display or false to exclude it.
- @param multiSelect When true, the dialog permits multiple selections and returns File[] results.
  \*/
  openDialog(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
  openDialog(prompt: string, filter: string | Function, multiSelect: false): File
  openDialog(prompt: string, filter: string | Function, multiSelect: true): File[]

/\*\*

- Shows a dialog where the user chooses a file name for saving.
- The built-in platform file browser is displayed for selecting an existing file location, and a new File object is created for that selected location.
- If OK is clicked, the selected save location is returned as a File object.
- If the user cancels, null is returned.
- @param prompt Prompt text shown when the dialog supports a prompt.
- @param filter Windows only: filter limiting which file types appear. A filter expression can look like "Javascript files:_.jsx;All files:_._". Mac OS does not use this value.
  _/
  saveDialog(prompt?: string, filter?: any): File
  }
  declare const File: FileConstructor

/\*\*

- Represents a local file-system file using a platform-independent form.
  \*/
  interface File {
  /\*\*
  - Full path for the referenced file, written as URI notation.
    \*/
    readonly absoluteURI: string

/\*\*

- True when the object identifies a file-system alias or shortcut.
  \*/
  readonly alias: boolean

/\*\*

- Creation date for the referenced file, or null when the object does not point to a disk file.
  \*/
  readonly created: Date

/\*\*

- On Mac OS, the file creator is a four-character string; on Windows or UNIX, the value is "????".
  \*/
  readonly creator: string

/\*\*

- Localized file name for the reference, without path components.
  \*/
  readonly displayName: string

/\*\*

- Gets or sets which encoding later read/write operations use.
- The value is one of the encoding constants from the JavaScript Tools Guide. Unrecognized values fall back to the system default encoding. The special BINARY encoder reads binary files by storing every byte as one Unicode character, independent of other encodings. During writes, each Unicode character's lower byte is written as one byte.
  \*/
  encoding: string
