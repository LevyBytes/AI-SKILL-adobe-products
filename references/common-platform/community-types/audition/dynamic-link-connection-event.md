# DynamicLinkConnectionEvent

Community declaration reference: Audition/2018.

Event object for connection-status updates.

```typescript
declare class DynamicLinkConnectionEvent {
    /**
    - This event type is sent when the connection state for a DynamikLink server object changes.
    - Event type for a DynamikLink server-object connection-state change.
      */
      static readonly EVENT_CONNECTION: string
    /**

    - Returns connection status.
      */
      readonly isConnected: boolean
    /**

    - Returns the server name.
      */
      readonly serverName: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
