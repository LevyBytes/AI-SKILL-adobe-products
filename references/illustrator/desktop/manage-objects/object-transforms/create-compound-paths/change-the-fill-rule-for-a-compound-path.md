# Change the fill rule for a compound path

A fill rule identifies which points from the component objects count as inside the compound path and therefore receive fill. Points outside that calculation become holes. The available choices are the non-zero winding fill rule and the even-odd fill rule:

Select the compound path with the Selection tool.

Open Window > Attributes.

In the Attributes panel, choose one of the two fill rules:

- Use Non‑Zero Winding Fill Rule : Sends a ray from a point toward infinity in any direction, then tracks a net crossing count for path segments. Beginning at zero, the count increases by one when a segment crosses left to right and decreases by one when a segment crosses right to left. A zero result places the point outside the compound path; any other result places it inside.
- Use Even‑Odd Fill Rule : Sends a ray from a point toward infinity in any direction, then counts path-segment crossings in a simple total. An odd total places the point inside the compound path; an even total places it outside.

Note

Adobe Photoshop and some other apps use the even-odd rule by default, so compound paths brought in from those apps use the even-odd rule.
