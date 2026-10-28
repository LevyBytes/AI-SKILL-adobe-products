# Remove items from a project

It's worth incrementing and saving a backup copy of your project before you reduce it, strip out unused footage, or consolidate footage.

- Deleting an item from a project is a matter of selecting it in the Project panel and pressing Delete.
- Clear every unused footage item from a project with File > Dependencies > Remove Unused Footage.
- Strip out duplicate footage items from a project via File > Dependencies > Consolidate All Footage. Two footage items count as duplicates to After Effects only when their Interpret Footage settings match. As each duplicate is dropped, any layers pointing at it get rewired to the surviving copy.
- To drop compositions you didn't select along with footage unused by the ones you did, choose File > Dependencies > Reduce Project — a command that only lights up while the Project panel is active.

What this clears out is unused footage items plus any other compositions that aren't nested (subordinate) inside a selected composition.

Items you've switched off — meaning their Video or Audio switch is deselected in the Timeline panel — survive Reduce Project even when they belong to the selected composition.

Should an expression in a selected composition point at something living in a nonsubordinate composition, Reduce Project strips out both that composition and the expression attached to it. To give you a chance to undo, a message surfaces once you run Reduce Project flagging this very risk. The way around losing those expressions is to drag the nonsubordinate composition into the one referencing it; afterward, deselect the Audio and Video switches on the composition you just brought in.
