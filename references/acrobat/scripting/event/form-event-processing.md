# Form event processing

The state diagram further down lays out the sequence in which form events fire. A few dependencies deserve attention. As one case, the Focus event must fire first or the mouse-up event never happens.
