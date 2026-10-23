# JavaScript APIs - event

Every JavaScript script runs because some particular event fired. For each such event JavaScript builds an event object, and while that event is unfolding you can reach into the object to inspect — and sometimes alter — the event's present state.

A type property together with a name property pins down each event uniquely. What follows catalogs all the events as type/name pairs and notes any extra properties each one brings along.

An event's rc property carries its return code. Each event's write-up states whether that event pays attention to (is swayed by) the return code.

Authors writing JavaScript need to grasp the timing and ordering of these events. Access to certain methods or properties is restricted to particular events.
