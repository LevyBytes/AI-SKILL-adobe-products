# Combining multiple selectors

For richer results, a single animator can carry more than one selector.

Open out the animator inside the Timeline panel.

Beside the animator's name, click the Add dropdown.

From the choices on offer, pick a selector type:

- Range Selector
- Wiggly Selector
- Expression Selector

Once added, the fresh selector merges with whatever selectors are already there. Their Amount values get multiplied with one another. Take a Range Selector sitting at 50% and a Wiggly Selector at 80%: the product is a 40% net effect, which lets layers blend smoothly while still carrying random variation.

Below is something to try for a smooth wave with variation; it pairs a Range Selector with a Wiggly Selector so you get a bold wave carrying a touch of random jitter.

| Component | Settings |
| --- | --- |
| Animator 1 | - Font Axis Weight: 900 |
| Range Selector 1 | - Start: 0%<br>- End: 30%<br>- Offset: Animated -30% → 120%<br>- Shape: Smooth |
| Wiggly Selector 1 | - Max Amount: 20%<br>- Min Amount: -20%<br>- Wiggles/Second: 3 |
