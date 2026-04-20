# Manipulación de Ramas

## Creación de ramas
Crea una nueva rama
**OJO:** el nombre de la rama debe estar en kebab-case.
~~~
$ git branch (name)
~~~
Crea y mueve git bash a la nueva rama.
~~~
$ git switch -c (rama)
~~~
Crea y se mueve a la nueva rama, restaura todos sus archivos (como no hay nada al crearla no hay efectos secundarios).
~~~
$ git checkout -b (rama) 
~~~

## Movilización entre ramas
Cambia a la rama indicada.
~~~
$ git switch (rama)
~~~
Restaura el archivo a los últimos cambios guardados (última rama creada).
~~~
$ git checkout (rama) 
~~~
**NOTA:** se debe usar git switch, ya que checkout pertenece a versiones más antiguas.

## Git Branch
Regresa el nombre de las ramas del directorio.
~~~
$ git branch
~~~
### Eliminar una rama*
~~~
$ git branch -d (rama)
~~~
### Modificar el nombre de una rama
Opción 1
~~~
$ git branch -m (new-name)
~~~
Opción 2*
~~~
$ git branch -m (actual) (nuevo)
~~~
**ATENCIÓN:** Los comandos con su título en * se deben ejecutar sin estar en la rama que se va a modificar.
