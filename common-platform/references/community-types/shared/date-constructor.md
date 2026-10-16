# DateConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface DateConstructor {
    readonly prototype: Date
    /**

    - Creates a Date initialized to the current date and time.
    - When arguments are provided, the Date uses those supplied date/time fields.
    - @param year Year value written in four digits.
    - @param month Month integer, 0 (Jan) through 11 (Dec).
    - @param day Day integer from 1 to 31. Default is 0 when omitted.
    - @param hours Hour integer from 0 (midnight) to 23 (11 PM). Default is 0 when omitted.
    - @param min Minute integer from 0 to 59. Default is 0 when omitted.
    - @param sec Integer value from 0 to 59. Default is 0 when omitted.
    - @param ms Integer value from 0 to 999. Default is 0 when omitted.
      */
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
    /**

    - Parses text and returns a Date object. The input should resemble the string produced by toString().
    - @param text String to parse.
      */
      parse(text: string): Date
    /**

    - Computes the millisecond offset from midnight January 1, 1970, UTC to the specified time.
    - @param year Year value written in four digits, for example, 2001. To represent a year from 1900 to 1999, specify a value from 0 to 99.
    - @param month Month integer, 0 (Jan) through 11 (Dec).
    - @param day Day integer from 1 to 31. Default is 0 when omitted.
    - @param hours Hour integer from 0 (midnight) to 23 (11 PM). Default is 0 when omitted.
    - @param min Minute integer from 0 to 59. Default is 0 when omitted.
    - @param sec Integer value from 0 to 59. Default is 0 when omitted.
    - @param ms Integer value from 0 to 999. Default is 0 when omitted.
      */
      UTC(
      year: number,
      month?: number,
      day?: number,
      hours?: number,
      min?: number,
      sec?: number,
      ms?: number,
      ): Date
    /**
    - now() returns the milliseconds elapsed since midnight January 1, 1970 UTC.
      */
      now(): number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
