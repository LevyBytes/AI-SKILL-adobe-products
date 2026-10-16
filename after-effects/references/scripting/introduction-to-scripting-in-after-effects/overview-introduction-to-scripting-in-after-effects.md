# Overview — Introduction to scripting in After Effects

Think of a script as an ordered set of commands directing an application through a sequence of operations. Most Adobe applications let you run scripts to take over repetitive chores, work through involved calculations, and even reach functionality the graphical user interface never surfaces. After Effects, for instance, can be told to restack a composition's layers, swap source text inside text layers, or fire off an e-mail once a render finishes.

JavaScript underlies both the After Effects expressions language and the After Effects ExtendScript scripting language, yet After Effects keeps its expression features and its scripting features apart as separate things. Information held by scripts — variables and functions, say — stays out of reach of expressions. The contrast is this: a script directs an application to act, whereas an expression declares what a property is. Still, since JavaScript is the shared root of both the After Effects expression language and ExtendScript, knowing one goes a long way toward grasping the other.

At the core of any scriptable application lies the object model. Working in Adobe After Effects, you build projects, compositions, and render queue items together with everything inside them: footage, images, solids, layers, masks, effects, and properties. In scripting terms each of these counts as an object. The ExtendScript objects defined for After Effects projects are what this guide sets out to describe.

A project, items, compositions, layers, and render queue items together make up the After Effects object model. Every object carries its own particular attributes, and each one in an After Effects project holds its own identity, even though scripting cannot reach all of them. To write scripts, you will want a working familiarity with the After Effects object model.

Note

To keep them distinct from After Effects' own notion of a property (an animatable value belonging to an effect, mask, or transform inside a single layer), the things JavaScript usually labels "properties" are referred to throughout this guide as "attributes."

Just about everything scripting pulls off mirrors what the After Effects graphical user interface can already do. That makes deep knowledge of the application and its graphical user interface a prerequisite for understanding how scripting fits into After Effects.
