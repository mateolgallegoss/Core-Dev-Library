# Comandos para manipular archivos

## Adds
Añade todos los archivos del directorio actual.
~~~
$ git add .
~~~
Añade el/los archivo/s seleccionado existente en el directorio.
~~~
$ git add (archivo) (archivo2) ... ...
~~~
Remueve el archivo del stage.
~~~
$ git rm --cached (archivo)
~~~
Permite enviar al repositorio el estado de que se ha eliminado el archivo.
~~~
$ git add (archivo eliminado)
~~~

## Otros Comandos

### Restore
Permite restaurar un archivo eliminado.
~~~
$ git restore (delfile)
~~~

### Checkout
Restaura el archivo a los últimos cambios guardados (último commit).
~~~
$ git checkout (file) 
~~~

### Rename
Renombrar a un archivo, sin importar en que área se encuentra.
~~~
$ git mv archivo (new name)
~~~

### Status
Permite acceder a un status de los archivos más dinámico.
~~~
$ git status -s

$ git status --short
~~~
