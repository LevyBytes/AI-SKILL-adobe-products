# Accessing nodejs APIs in iframe

nodejs symbols are absent from an iframe's global context; access nodejs APIs inside the iframe through cep_node. With --mixed-context enabled, global node symbols and cep_node appear in the iframe's global context because browser and node run in one shared context. Also note that existing iframe code that checks or uses nodejs symbols in the iframe global context worked in the previous release, but breaks in the current release when separate context mode is used.
