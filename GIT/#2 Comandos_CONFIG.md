# Comandos git config
### Limitaciones por localidad
~~~
$ git config --local
~~~            
Se realizan configuraciones para un repositorio trabajado por un usuario.
~~~
$ git config --global
~~~ 
Se ejecutan las configuraciones para todos los repositorios trabajados por el usuario registrado.
~~~
$ git config --system
~~~ 
Trabaja con configuraciones para todos los usuarios, es decir, toda la máquina (sistema).

## Comando Core
~~~
$ git config --global core.autocrlf
~~~
__cr:__ es el carriage return, regresa el tipeado al inicio.
__lf:__ es el linefield, salto de línea (/n).

Modifica la abreviatura usada para presentar un dato.
~~~
$ git config --global core.abbrev (num)
~~~

### Sistemas Operativos
En windows se usa tanto *cr* como *lf*.
~~~
$ git config --global core.autocrlf true
~~~ 
En sistemas trabajados en unix como MAC o Linux únicamente se requiere *lf*.
~~~
$ git config --global core.autocrlf input
~~~
