# Anamoty of a Skill

## SKILL.md
Refiere al cerebro de la skill, usando **metadatos YAML** (name + desc) e instrucciones en markdown.

## Scripts
---
Refiere al trabajo mecánico, por lo que se ejecuta sin cargarse en el contexto. 

~~~
$ ls scripts/
scan_project.sh check_readme.sh
~~~
scan_project.sh > *recolecta metadatos*
check_readme.sh > *valida el resultado*

# Referencias
---
Es el conocimiento del dominio, archivos de referencia en markdown. Solo se lee en caso de que el agente lo necesite.
Podemos referenciar cosas como la estructura, tonno, guía de insiginias, etc.
~~~
ls references/
readme-nest-practices.md
~~~

## Assets
---
Son archivos de salida, que brinda ejemplos de como va a lucir el resultado.
Además de markdown, puede incluir archivos json, mermaid, etc.
~~~
ls assets/
badges.json
readme-template.md
diagrams.md 
~~~
badges.json > *plantillas de insignias*
readme-template.md > *estructura*
diagrams.md > *plantillas Mermaid*

## Evals
---
Son casos de prueba, como pruebas unitarias. Es un recurso extremadamente valioso.
~~~
ls evals/
evals.json
~~~
evals.json > *prompts + verificaciones*

#### NOTA:
Solo el skills.md es obligatorio, el resto del cuerpo es opcional.
- Agregar scripts cuando el agente repite varias veces el mismo trabajo.
- Agregar references cuando el agente necesita conocimiento del dominio.
- Agregar assets para formatos consistentes.
- Agregar evals cuando hay que verificar el funcionamiento del skill.