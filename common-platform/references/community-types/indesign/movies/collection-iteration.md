# Movies collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Movies {
    /**
    - Gets any Movie from the collection.
      */
      anyItem(): Movie
    /**
    - Gets all Movie objects in the collection.
      */
      everyItem(): Movie[]
    /**
    - Gets the first Movie in the collection.
      */
      firstItem(): Movie
    /**
    - Gets the final Movie in the collection.
      */
      lastItem(): Movie
    /**
    - Gets the middle Movie in the collection.
      */
      middleItem(): Movie
    /**
    - Gets the Movie positioned after the supplied Movie.
    - @param obj Movie positioned immediately before the desired Movie.
      */
      nextItem(obj: Movie): Movie
    /**
    - Gets the Movie whose index comes before the supplied index.
    - @param obj Index belonging to the Movie after the desired Movie.
      */
      previousItem(obj: Movie): Movie
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
