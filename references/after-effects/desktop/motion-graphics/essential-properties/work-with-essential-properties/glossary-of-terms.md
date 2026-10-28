# Glossary of terms

Consult the glossary below (both established and newly added terms) to get a handle on the vocabulary that comes up while working with compositions and Essential Properties:

Nest and Precomposition

Nest and Precomposition

Nest: Putting one composition inside another.

Precomposition: Within a project, a composition that sits nested inside another.

Parent composition and Child composition hierarchy

Place one composition — say Comp A — inside another, Comp B, and Comp A becomes the Parent composition that holds Comp B; Comp B plays the Child composition role.

Essential Properties and Primary Composition

The composition you designate as Primary in the Essential Graphics panel is the Primary composition. For that primary composition, any layer or effect property you move from the Timeline into the Essential Graphics panel becomes the Essential Property.

Source property

Source property

Whatever layer or effect property an essential property points back to.

Linked property

Linked property

An essential property of a precomposition while its source property stays unmodified.

Unlinked property

Unlinked property

An Essential Property of a precomposition once its source property has been modified.

To alter the value, keyframe, or expression of an expression property on a precomposition.

Linked properties

Nesting a primary composition causes that precomposition's Essential Properties to attach themselves to the source properties. Picture Comp B placed inside Comp A: here the effect and layer properties belonging to Comp B serve as the source properties. Whatever you promote into the Essential Graphics panel from within Comp B becomes the Essential Properties. Edit those source properties and the precomposition's essential properties shift right along with them.

Unlinked properties

The relationship breaks, though, the moment you adjust the precomposition's Essential Properties directly — that act unlinks them. What unlinking produces is an instance of the primary composition. From then on, the essential properties and the source properties can each be changed on their own without affecting the other.

Editing an Essential Property takes precedence over the value or keyframes held by the source property. Because the precomposition stands as its own distinct instance of the primary composition, the altered value or keyframes render for that instance alone.
