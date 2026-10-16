# Background preservation

Adaptive Composite includes the `preserveBackground` parameter. When it is `true`, original background pixels remain in place and only the object-composite region changes. This is useful when exact background details must stay intact, such as floor texture or a branded environment, while the inserted object still needs to blend naturally.

**Background Image**
[Figure: Background image of a hand holding a phone in front of a bookcase](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve1.png)

**Product Image**
[Figure: Product image, the back of a phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve-asset.png)

**Mask Area Image (white area is the dynamic, changeable area)**
[Figure: Mask image, a rectangle around the phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve-mask.png)

**Completed Composite**
[Figure: Completed Composite showing the back of the phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve2.png)
