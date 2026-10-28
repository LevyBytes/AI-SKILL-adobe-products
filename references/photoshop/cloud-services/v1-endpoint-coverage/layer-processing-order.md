# Layer processing order

**Breaking change:** V1 and V2 traverse layer arrays in opposite directions. **V1:** processing starts from the final array item and works **bottom-up**. **V2:** processing starts from the first array item and works **top-down**. In V2, when Layer B has `placement.type: "above"` with `referenceLayer: {name: "Layer A"}`, Layer A needs to be earlier in the array than Layer B. V1 used the reverse arrangement, with Layer A later in the array.
