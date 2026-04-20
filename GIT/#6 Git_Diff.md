# Git Diff

### Show
Muestra los datos del último commit del archivo.
~~~
$ git show archivo
~~~
### Diff
Compara las diferencias del archivo entre su último commit y su staged.
~~~
$ git diff --staged
~~~
Compara las diferencias entre commits, usando ID's.
~~~
$ git diff (id_1) (id_2) .. ...
~~~
Regresa el nombre de los archivos que cambiaron.
~~~
$ git diff --name-only
~~~
Regresa el nombre de las líneas que cambiaron.
$ git diff --word-diff

**NOTA: ** Estos comando se pueden ejecutar sin nada adicional, o a su vez, especificando las ID's de los commits que necesite.

### Log 
Da acceso a los commits registrados, con todos sus datos.
~~~
$ git log
~~~
Da acceso a las iniciales del ID de los commits registrados.
~~~
$ git log --oneline
~~~

