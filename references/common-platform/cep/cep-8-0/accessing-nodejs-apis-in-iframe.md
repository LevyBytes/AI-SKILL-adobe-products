# Accessing nodejs APIs in iframe

nodejs symbols are not available directly in an iframe's global context; use cep_node to access nodejs APIs from that context. When --mixed-context is enabled, both global node symbols and cep_node exist in the iframe's global context because browser and node execute in one context. Code that checked or used nodejs symbols in iframe's global context may have worked in the previous release, but in the current release it breaks under separate context mode.
