# Improve performance when using effects

Effects like distortions and blurs can demand a great deal of memory and processor power. Choosing carefully when and how you bring them in lets you raise overall performance by a wide margin.

- Hold off on effects that are heavy on memory and the processor until later. Finish animating your layers and any other work that depends on real-time previews first, then add the memory- or processor-hungry effects such as blurs and glows that can push previews below real time.
- For a quick preview speed boost, disable effects for the time being.
- Cap how many particles a particle effect produces.
- Instead of repeating the same effect with identical settings across several layers, put that effect on an adjustment layer. An effect placed on an adjustment layer runs a single time over the composite of every layer sitting below it.

## See also

- [Application](../../../scripting/application-object.md)
