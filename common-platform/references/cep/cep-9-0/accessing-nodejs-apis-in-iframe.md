# Accessing nodejs APIs in iframe

Nodejs symbols are absent from an iframe's global context; within an iframe context, the only access path to nodejs APIs is through cep_node. With --mixed-context enabled, both global node symbols and cep_node exist in the iframe global context because browser and node run in the same context. Existing code that checks for or uses nodejs symbols in an iframe global context may have worked in the previous release, but in the current release it breaks under separate context mode.
