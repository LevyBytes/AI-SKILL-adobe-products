# How channel selection works

Selecting one or more channel buttons before generation makes the system filter layouts according to that selection:

- The Generator uses only layouts tagged with every selected channel
- The LLM is instructed to honor the channel filter and choose from matching layouts only
- The layout preview under the prompt changes in real time to display matching layouts
