# StoryPreference

Community declaration reference: InDesign/2023.

StoryPreference settings.

```typescript
declare class StoryPreference extends Preference {
    /**
    - When true, character positions at frame edges are adjusted for improved appearance.
      */
      opticalMarginAlignment: boolean
    /**

    - Point size used when optical margin alignment is calculated. (Range: 0.1 to 1296)
      */
      opticalMarginSize: number | string
    /**

    - Story direction setting.
      */
      storyDirection: StoryDirectionOptions
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
