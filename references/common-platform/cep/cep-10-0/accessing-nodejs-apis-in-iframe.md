# Accessing nodejs APIs in iframe

nodejs symbols are absent from an iframe's global context; inside an iframe, cep_node is the access path for nodejs APIs. With --mixed-context enabled, both global node symbols and cep_node are present in the iframe global context because browser and node execute in the same context. Also note the compatibility impact: code that previously checked for or used nodejs symbols in an iframe's global context worked through the prior release, but in the current release it fails when separate context mode is used.
