# When to Use Each API

| Use Case | Recommended API |
| --- | --- |
| Multiple operations on the same file | LocalFileSystem |
| Traversing directory structures | LocalFileSystem |
| Working with file metadata | LocalFileSystem |
| Creating persistent tokens | LocalFileSystem |
| Quick read/write operations | FS Module |
| Simple path-based operations | FS Module |
| Familiarity with Node.js fs API | FS Module |
