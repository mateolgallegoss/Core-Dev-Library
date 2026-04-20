# Commits
Añade los archivos en stage al repositorio.
~~~
$ git commit -m "(mensaje)"
~~~
Añade los archivos al repositorio, pero lo envia a su editor de código predeterminado a
redactar las descripción del commit.
~~~
$ git commit
~~~
Añade los archivos al repositorio sin ejecutar un add previamente.
~~~
$ git commit -a
~~~

## Manipular Commits
Añade al último commit los archivos en stage.
~~~
$ git commit --amend
~~~
Vuelve atrás para modificar el commit en la posición (actual-n), 
tener en cuenta que borra los commits anteriores.
~~~
$ git rebase -i head~{n}
~~~
Restaura los commits desde la posición n hasta la actual, 
alterando el stage y en consecuente los datos de cada uno de los commits.
~~~
$ git rebase --continue
~~~
**NOTA:** git rebase es poco práctico y no se debe usar en repositorios grandes o con demasiados commits y archivos (de hecho nunca).

## Eliminar Commits
Desplaza el HEAD de la rama al commit de la ID indicada.
~~~
$ git reset --soft (id)
~~~
Desplaza el HEAD de la rama n veces atrás.
~~~
$ git reset --soft head~{n}
~~~
Desplaza el HEAD de la rama, tener en cuenta que limpia el staging.
~~~
$ git reset --mixed (id)
~~~
### Reset --hard
Descarta todos los cambios del commit; en el área de stage y trabajo.
~~~
$ git reset --hard (id)
~~~
**NOTA:** poco recomendado usar, e inclusive no se debe usar porque no hay forma de evitar que elimine todos los archivos de las áreas.


