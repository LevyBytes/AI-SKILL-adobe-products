# Flash.getAppMemoryInfo

Community declaration reference: Animate/22.0.

(Windows only); reports the byte count being used in a chosen Flash.exe memory area.
@returns Integer byte count for the selected Flash.exe memory area.
@param memType Integer selecting the memory utilization area to query. The acceptable values are:
0 - PAGEFAULTCOUNT
1 - PEAKWORKINGSETSIZE
2 - WORKINGSETSIZE
3 - QUOTAPEAKPAGEDPOOLUSAGE
4 - QUOTAPAGEDPOOLUSAGE
5 - QUOTAPEAKNONPAGEDPOOLUSAGE
6 - QUOTANONPAGEDPOOLUSAGE
7 - PAGEFILEUSAGE
8 - PEAKPAGEFILEUSAGE

```typescript
declare class Flash {
    getAppMemoryInfo(memType: number): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
