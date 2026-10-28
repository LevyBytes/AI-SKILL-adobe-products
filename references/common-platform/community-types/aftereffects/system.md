# System

Community declaration reference: AfterEffects/26.0.

System exposes user-system attributes such as user name, OS name, and OS version through the system global.

```typescript
declare class System {
    /** Current user's name. */
    readonly userName: string
    /* Host computer name. */
    readonly machineName: string
    /* Operating system name. */
    readonly osName: string
    /* Operating system version. */
    readonly osVersion: string
    /* Runs a command on the system command line. */
    callSystem(cmdLineToExecute: string): string
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
