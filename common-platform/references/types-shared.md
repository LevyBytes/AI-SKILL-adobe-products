# Shared

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_JavaScript_d_ts; raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_PlugPlugExternalObject_d_ts; raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts; raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_XMPScript_d_ts; raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_global_d_ts.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_JavaScript_d_ts

/\*\*

- Use $ for ExtendScript diagnostics and runtime information helpers.
  \*/
  interface $ {
  /\*\*
  - Build details for ExtendScript.
    \*/
    readonly build: string

/\*\*

- Date associated with the ExtendScript build.
  \*/
  readonly buildDate: Date

/\*\*

- Character inserted as the decimal separator in formatted numeric output.
  \*/
  decimalPoint: string

/\*\*

- Current ExtendScript engine name, when one has been assigned.
  \*/
  readonly engineName: string

/\*\*

- Latest run-time error data.
- Writing text into this property raises a run-time error; throwing an Error object is the recommended error path.
  \*/
  error: Error

/\*\*

- File name for the script currently running.
  \*/
  readonly fileName: string

/\*\*

- Reads or changes low-level debug output flags.
- Values are combined with logical AND bit masks:
- 0x0002 (2): Writes each executing line together with its line number.
- 0x0040 (64): Turns on very frequent garbage collection. Ordinarily, collection begins after object growth passes a threshold since the previous collection. With this flag, ExtendScript attempts collection after nearly every statement. Performance drops sharply, but the behavior helps diagnose objects that may be released too early.
- 0x0080 (128): Logs all calls, their argument lists, and the returned value.
- 0x0100 (256): Turns on extended error handling (see strict).
- 0x0200 (512): Activates localization support for the toString method, matching the localize property.
  \*/
  flags: number

/\*\*

- Reference to the global object that carries the JavaScript global namespace.
  \*/
  readonly global: any

/\*\*

- High-resolution timer measured in microseconds. ExtendScript starts it during application startup initialization.
- Reading the property resets it to Zero.
  \*/
  readonly hiresTimer: number

/\*\*

- Include-file path used by the current script.
  \*/
  readonly includePath: string

/\*\*

- Debugger level for the JavaScript debugger, controlling whether it is active.
- Accepted values are 0 (no debugging), 1 (break on runtime errors), and 2 (full debug mode).
  \*/
  level: number

/\*\*

- Line number now being executed by the current script.
  \*/
  readonly line: number

/\*\*

- Reads or changes the active locale.
- Format is a five-character `LL_RR` string. LL identifies the language by ISO 639, and RR identifies the region by ISO 3166. The initial value comes from the application or platform for the current user. Set a test locale temporarily, then restore the application or platform setting with undefined, null, or the empty string.
  \*/
  locale: string

/\*\*

- Use true to enable extended localization behavior in built-in toString().
  \*/
  localize: boolean

/\*\*

- ExtendScript memory cache size, in bytes.
  \*/
  memCache: number

/\*\*

- Current operating-system version details.
  \*/
  readonly os: string

/\*\*

- Array whose objects describe the display screens connected to the computer.
- Each object includes left, top, right, bottom for the screen corners in global coordinates. primary is true on the object representing the primary display.
  \*/
  readonly screens: object[]

/\*\*

- Current stack trace.
  \*/
  readonly stack: string

/\*\*

- Turns strict object-modification mode on or off.
- When the value is true, writing to a read-only property produces a runtime error. Some objects also block creation of new properties when true.
  \*/
  strict: any

/\*\*

- Version identifier for the ExtendScript engine.
- Format combines three numeric parts with descriptive text; for example: "3.92.95 (debug)".
  \*/
  readonly version: string

/\*\*

- Opens the ExtendScript component About box and returns the displayed text.
  \*/
  about(): string

/\*\*

- Stops execution at the current position.
- @param condition JavaScript statement string used as the condition. If it evaluates to true or nonzero when control reaches this point, execution halts.
  \*/
  bp(condition?: any): void

/\*\*

- Opens the platform-specific color selection dialog and returns the chosen color.
- @param color Use 0xRRGGBB for an explicit initial selection, or -1 for the platform default.
  \*/
  colorPicker(color: number): number

/\*\*

- Loads a file and evaluates its contents.
- @param file File to load.
- @param timeout Optional timeout, in milliseconds.
  \*/
  evalFile(file: File, timeout?: number): any

/\*\*

- Starts garbage collection in the ExtendScript engine.
  \*/
  gc(): void

/\*\*

- Reads an environment variable value.
- @param name Variable name.
  \*/
  getenv(name: string): string

/\*\*

- Writes an environment variable value.
- @param name Variable name.
- @param value Value assigned to the variable.
  \*/
  setenv(name: string, value: string): void

/\*\*

- Pauses the calling thread for the requested millisecond count.
- During the pause, checks every 100 millisecond intervals whether sleep should end. A break request or expired script timeout can terminate it.
- @param msecs Milliseconds to sleep.
  \*/
  sleep(msecs: number): void

/\*\*

- Converts this object into a string.
  \*/
  toString(): string

/\*\*

- Writes text to the Console.
- @param text Text to write. Arguments are joined together.
  \*/
  write(text: any): void

/\*\*

- Writes text to the Console and appends a newline character.
- @param text Text to write. Arguments are joined together.
  \*/
  writeln(text: any): void
  }
  declare const $: $

interface ObjectConstructor {
readonly prototype: Object

/\*\*

- Creates and returns a fresh object for the requested type.
- @param what Requested object type.
  \*/
  new (what: any): Object
  (): any
  (what: any): any

/\*\*

- Checks whether an object remains valid.
- @param what Object to check.
  \*/
  isValid(what: Object): boolean
  }
  declare const Object: ObjectConstructor

/\*\*

- Root class for JavaScript objects.
  \*/
  interface Object {
  /\*\*
  - Constructor function that produced this object.
  - In the XML class, this property is handled as an XML element.
    \*/
    readonly constructor: Function

/\*\*

- Prototype object used by this object.
- In the XML class, this property is handled as an XML element.
  \*/
  readonly prototype: Object

/\*\*

- Reflection object tied to this method or property.
- In the XML class, this property is handled as an XML element.
  \*/
  readonly reflect: Reflection

/\*\*

- Indicates whether a property exists on the instance or along the prototype chain.
- @param name Property name to check.
  \*/
  hasOwnProperty(name: string): boolean

/\*\*

- Tests whether this object has the supplied object in its prototype chain.
- @param what Object to check.
  \*/
  isPrototypeOf(what: Object): boolean

/\*\*

- Indicates whether a property participates in enumeration.
- @param name Property name to check.
  \*/
  propertyIsEnumerable(name: string): boolean

/\*\*

- Builds a locale-aware string for this object. See toString().
  \*/
  toLocaleString(): string

/\*\*

- Produces a string representation that can serialize this object.
- The serialized string can be passed back to eval() to rebuild the object. Only built-in classes support this.
  \*/
  toSource(): string

/\*\*

- Builds a string form for this object.
- Many objects, including Date, provide their own implementation instead. When no string value or user-defined toString() exists, the default returns [object type], where type is the object type or the constructor-function name.
  \*/
  toString(): string

/\*\*

- Removes a property's watch function.
- @param name Property name to stop watching.
  \*/
  unwatch(name: string): void

/\*\*

- Retrieves this object's primitive value.
- If no primitive value exists, the object itself is returned. Direct calls are rarely needed because the JavaScript interpreter invokes it automatically when a primitive is expected.
  \*/
  valueOf(): Object

/\*\*

- Adds a watch function for a property, called whenever its value changes.
- The function may accept, alter, or reject a value that the user, application, or script tried to store in the property.
- @param name Property name to watch.
- @param func Function invoked when this property's value changes. It must accept three arguments and return the value that will be stored: name: the property whose value changed. oldValue: the previous property value. newValue: the proposed replacement value.
  \*/
  watch(name: string, func: Function): void
  }

interface ArrayConstructor {
readonly prototype: Array<any>

/\*\*

- Creates and returns a new array.
- Any number of arguments can become array elements; a single argument instead becomes the length for an empty array. Because the single argument is treated as length, it cannot create a one-element array. The result is the new array.
- @param arrayLength With no later arguments, initial length for the empty array; otherwise, the first element.
- @param values When more than one argument is supplied, these arguments initialize the array.
  \*/
  new (arrayLength?: number): any[]
  new <T>(arrayLength: number): T[]
  new <T>(...values: T[]): T[]
  (arrayLength?: number): any[]
  <T>(arrayLength: number): T[]
  <T>(...values: T[]): T[]
  }
  declare const Array: ArrayConstructor

/\*\*

- Array type with integer indexes and a length property.
  \*/
  interface Array<T> {
  [n: number]: T

/\*\*

- Number of elements in the array.
  \*/
  length: number

/\*\*

- Builds another array by appending the supplied values to the original array's end.
- The original array is left intact. When concat() receives an array argument, its elements are appended individually to the end of the new array. The returned array is the concatenation result.
- @param values Values to append to the array end. Arrays are also accepted.
  \*/
  concat(...values: T[][]): T[]

/\*\*

- Combines every array element into a string, optionally separating elements with delimiter.
- The returned string contains the joined elements and delimiters.
- @param delimiter String separator placed between array elements. If omitted, a comma separates the elements.
  \*/
  join(delimiter?: string): string

/\*\*

- Deletes the final array element, reduces length by 1, and returns that element's value.
- The value returned is the removed array element.
  \*/
  pop(): T | undefined

/\*\*

- Appends one or more values to the array end and increases length by n.
- The method returns the array's new length.
- @param values Values to push onto the array end.
  \*/
  push(...values: T[]): number

/\*\*

- Reorders the array elements in reverse.
- The reversed array is returned.
  \*/
  reverse(): T[]

/\*\*

- Deletes the first array element, reduces length by 1, and returns that element's value.
- The value returned is the removed array element.
  \*/
  shift(): T | undefined

/\*\*

- Creates another array containing a subset of elements from the original array.
- The slice starts at index start and stops before index end. Negative start or end values count backward from the array end, producing the element array[array. length + negativeIndex]. Result spans array[start] through array[end-1].
  \*/
  slice(start?: number, end?: number): T[]

/\*\*

- Sorts array elements in place, using the supplied function for pairwise comparison.
- Without a function, elements are ordered alphabetically. No return value is produced.
- @param userFunction User-supplied userFunction(a, b) comparison function. Use less than 0 for the a greater than b case, 0 for equality, and greater than 0 for the b greater than a case.
  \*/
  sort(userFunction?: (a: T, b: T) => number): this

/\*\*

- Beginning at index start, removes num elements from the array.
- New elements may optionally be inserted starting at index start. To keep indexes contiguous, existing elements shift to close gaps. It returns a new array with the items removed from the original array.
- @param start Index of the first element removed. Negative values count from the array end.
- @param deleteCount Count of array elements removed, including start. If omitted, removal continues from array index start through the array end.
- @param values One or more values inserted into the array starting at index start. This argument is valid only when num is provided.
  \*/
  splice(start: number, deleteCount?: number, ...values: T[]): T[]

/\*\*

- Produces and returns a localized string from the array.
  \*/
  toLocaleString(): string

/\*\*

- Builds a string representation that eval() can consume to re-create an object. Only built-in classes support this.
  \*/
  toSource(): string

/\*\*

- Converts an array to a string and returns that value.
- Called without a parameter, this produces the same result as array. join(). It returns a comma-separated list of every array element.
  \*/
  toString(): string

/\*\*

- Prepends one or more elements to the array.
- The method returns the new array length.
- @param values Values for one or more elements inserted at the beginning of the array.
  \*/
  unshift(...values: T[]): number
  }

/\*\*

- Global object that groups math functions and constants.
  \*/
  interface Math {
  /\*\*
  - Euler's constant, also used as the base for natural logarithms.
    \*/
    readonly E: number

/\*\*

- Natural logarithm of 10.
  \*/
  readonly LN10: number

/\*\*

- Natural logarithm of 2.
  \*/
  readonly LN2: number

/\*\*

- Base 10 logarithm of e.
  \*/
  readonly LOG10E: number

/\*\*

- Base 2 logarithm of e.
  \*/
  readonly LOG2E: number

/\*\*

- Circumference-to-diameter ratio for a circle.
  \*/
  readonly PI: number

/\*\*

- Reciprocal of the square root of 1/2.
  \*/
  readonly `SQRT1_2`: number

/\*\*

- Square root of 2.
  \*/
  readonly SQRT2: number

/\*\*

- Gives the absolute value for a number.
- @param x Number.
  \*/
  abs(x: number): number

/\*\*

- Gives the arc cosine, in radians, for a number.
- @param x Number.
  \*/
  acos(x: number): number

/\*\*

- Gives the arc sin, in radians, for a number.
- @param x Number.
  \*/
  asin(x: number): number

/\*\*

- Gives the arc tangent, in radians, for a number.
- @param x Number.
  \*/
  atan(x: number): number

/\*\*

- Gives the arc tangent for the quotient of its arguments (y/x).
- @param y Number.
- @param x Number.
  \*/
  atan2(y: number, x: number): number

/\*\*

- Rounds the number upward to the nearest integer.
- @param x Number.
  \*/
  ceil(x: number): number

/\*\*

- Gives the cosine of an angle supplied in radians.
- @param x Radian angle.
  \*/
  cos(x: number): number

/\*\*

- Computes the power of Math.E for a number.
- @param x Number.
  \*/
  exp(x: number): number

/\*\*

- Rounds a number downward to the nearest integer.
- @param x Number.
  \*/
  floor(x: number): number

/\*\*

- Gives the natural logarithm for a number.
- @param x Number.
  \*/
  log(x: number): number

/\*\*

- Gives the largest value among zero or more numbers.
- @param rest Numbers.
  \*/
  max(...rest: number[]): number

/\*\*

- Gives the smallest value among zero or more numbers.
- @param rest Numbers.
  \*/
  min(...rest: number[]): number

/\*\*

- Computes x to the y power.
- @param x Numbers.
- @param y
  \*/
  pow(x: number, y: number): number

/\*\*

- Gives a pseudo-random value at least 0.0 and below 1.0.
  \*/
  random(): number

/\*\*

- Rounds a numeric value to its nearest integer.
- @param x Number.
  \*/
  round(x: number): number

/\*\*

- Gives the sine of an angle supplied in radians.
- @param x Radian angle.
  \*/
  sin(x: number): number

/\*\*

- Gives the square root for a number.
- @param x Number.
  \*/
  sqrt(x: number): number

/\*\*

- Gives the tangent of an angle supplied in radians.
- @param x Radian angle.
  \*/
  tan(x: number): number
  }
  declare const Math: Math

interface DateConstructor {
readonly prototype: Date

/\*\*

- Creates a Date initialized to the current date and time.
- When arguments are provided, the Date uses those supplied date/time fields.
- @param year Year value written in four digits.
- @param month Month integer, 0 (Jan) through 11 (Dec).
- @param day Day integer from 1 to 31. Default is 0 when omitted.
- @param hours Hour integer from 0 (midnight) to 23 (11 PM). Default is 0 when omitted.
- @param min Minute integer from 0 to 59. Default is 0 when omitted.
- @param sec Integer value from 0 to 59. Default is 0 when omitted.
- @param ms Integer value from 0 to 999. Default is 0 when omitted.
  \*/
  new (): Date
  new (value: number): Date
  new (value: string): Date
  new (
  year: number,
  month: number,
  day?: number,
  hours?: number,
  min?: number,
  sec?: number,
  ms?: number,
  ): Date

/\*\*

- Parses text and returns a Date object. The input should resemble the string produced by toString().
- @param text String to parse.
  \*/
  parse(text: string): Date

/\*\*

- Computes the millisecond offset from midnight January 1, 1970, UTC to the specified time.
- @param year Year value written in four digits, for example, 2001. To represent a year from 1900 to 1999, specify a value from 0 to 99.
- @param month Month integer, 0 (Jan) through 11 (Dec).
- @param day Day integer from 1 to 31. Default is 0 when omitted.
- @param hours Hour integer from 0 (midnight) to 23 (11 PM). Default is 0 when omitted.
- @param min Minute integer from 0 to 59. Default is 0 when omitted.
- @param sec Integer value from 0 to 59. Default is 0 when omitted.
- @param ms Integer value from 0 to 999. Default is 0 when omitted.
  \*/
  UTC(
  year: number,
  month?: number,
  day?: number,
  hours?: number,
  min?: number,
  sec?: number,
  ms?: number,
  ): Date
  /\*\*
- now() returns the milliseconds elapsed since midnight January 1, 1970 UTC.
  \*/
  now(): number
  }
  declare const Date: DateConstructor

/\*\*

- Object representing a date and time.
  \*/
  interface Date {
  /\*\*
  - Gives the local-time day of the month for the specified Date object.
    \*/
    getDate(): number

/\*\*

- Gives the local-time weekday for the specified Date object.
- This integer is 0 (Sunday) through 6 (Saturday). The result is the weekday of date.
  \*/
  getDay(): number

/\*\*

- Gives the four digit year for the specified Date object in local time.
  \*/
  getFullYear(): number

/\*\*

- Gives the local-time hour for the specified Date object.
  \*/
  getHours(): number

/\*\*

- Gives the local-time milliseconds field for the specified Date object.
  \*/
  getMilliseconds(): number

/\*\*

- Gives the local-time minutes field for the specified Date object.
  \*/
  getMinutes(): number

/\*\*

- Gives the local-time month field for the specified Date object.
  \*/
  getMonth(): number

/\*\*

- Gives the local-time seconds field for the specified Date object.
  \*/
  getSeconds(): number

/\*\*

- Gives the specified Date object's millisecond timestamp relative to midnight January 1,1970 UTC.
  \*/
  getTime(): number

/\*\*

- Gives the minute difference between the computer's local time and UTC.
  \*/
  getTimezoneOffset(): number

/\*\*

- Gives the UTC day of the month for the specified Date object.
  \*/
  getUTCDate(): number

/\*\*

- Gives the UTC weekday for the specified Date object.
  \*/
  getUTCDay(): number

/\*\*

- Gives the four digit UTC year for the specified Date object.
  \*/
  getUTCFullYear(): number

/\*\*

- Gives the UTC hour for the specified Date object.
  \*/
  getUTCHours(): number

/\*\*

- Gives the UTC milliseconds field for the specified Date object.
  \*/
  getUTCMilliseconds(): number

/\*\*

- Gives the UTC minutes field for the specified Date object.
  \*/
  getUTCMinutes(): number

/\*\*

- Gives the UTC month field for the specified Date object.
  \*/
  getUTCMonth(): number

/\*\*

- Gives the UTC seconds field for the specified Date object.
  \*/
  getUTCSeconds(): number

/\*\*

- Gives the specified Date object's local-time year offset from 1900.
  \*/
  getYear(): number

/\*\*

- Sets the day of the month on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param date Day-of-month integer, 1 through 31.
  \*/
  setDate(date: number): number

/\*\*

- Sets the year on a specified Date object using local time.
- Month and date can also be changed when those arguments are supplied. The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param year Four-digit integer value for the year to set.
  \*/
  setFullYear(year: number): number

/\*\*

- Sets the hours on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param hour Hour integer, 0 (midnight) through 23 (11 PM).
  \*/
  setHours(hour: number): number

/\*\*

- Sets the milliseconds on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param ms Integer from 0 to 999.
  \*/
  setMilliseconds(ms: number): number

/\*\*

- Sets the minutes on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param minutes Integer from 0 to 59.
  \*/
  setMinutes(minutes: number): number

/\*\*

- Sets the month on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param month Month integer, 0 (Jan) through 11 (Dec).
  \*/
  setMonth(month: number): number

/\*\*

- Sets the seconds on a specified Date object using local time.
- The return value is the millisecond offset from midnight, January 1, 1970 to the updated date.
- @param seconds Integer from 0 to 59.
  \*/
  setSeconds(seconds: number): number

/\*\*

- Uses a millisecond value since midnight, January 1, 1970 to set a specified Date object.
- It returns ms.
- @param ms Integer giving the milliseconds between the date to set and midnight, January 1, 1970.
  \*/
  setTime(ms: number): number
