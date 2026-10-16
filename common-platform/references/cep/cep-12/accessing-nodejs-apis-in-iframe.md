# Accessing nodejs APIs in iframe

In an iframe global context, nodejs symbols are not exposed directly; access nodejs APIs there through cep_node. With --mixed-context enabled, both the global node symbols and cep_node appear in the iframe global context because browser and node execution share a single context. Existing iframe code that checks for or uses nodejs symbols in the global context may therefore have worked in the previous release, but it breaks in the current release when separate context mode is used.
