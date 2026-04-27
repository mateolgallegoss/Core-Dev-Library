<div align="center">

<h1 style="font-size: 3.5rem; font-weight: 800; letter-spacing: -1px;">Core Dev Library</h1>

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

Directorio de fundamentos, comandos y teoría de los principales lenguajes
de programación: markup, frontend, backend y datos.

</div>

---

## 📋 Contenido

- [📋 Contenido](#-contenido)
- [🔧 Instalación de Git](#-instalación-de-git)
  - [Configuración inicial de Git](#configuración-inicial-de-git)
- [🐍 Instalación de Python](#-instalación-de-python)
- [🟢 Instalación de Node.js](#-instalación-de-nodejs)
- [💻 Instalación de Visual Studio Code](#-instalación-de-visual-studio-code)
- [📄 Licencia](#-licencia)

---

## 🔧 Instalación de Git

Git es el sistema de control de versiones más usado en el mundo.

<details>
<summary>🪟 Windows</summary>

1. Descarga el instalador desde [git-scm.com](https://git-scm.com/download/win)
2. Ejecuta el instalador y sigue los pasos (puedes dejar todo por defecto)
3. Verifica la instalación abriendo **Git Bash** y ejecutando:

```bash
git --version
```

</details>

<details>
<summary>🍎 macOS</summary>

**Opción A — Con Homebrew (recomendado):**
```bash
brew install git
```

**Opción B — Instalador oficial:**
1. Descarga desde [git-scm.com](https://git-scm.com/download/mac)
2. Sigue los pasos del instalador

Verifica la instalación:
```bash
git --version
```

</details>

<details>
<summary>🐧 Linux</summary>

**Ubuntu / Debian:**
```bash
sudo apt update
sudo apt install git
```

**Fedora:**
```bash
sudo dnf install git
```

Verifica la instalación:
```bash
git --version
```

</details>

### Configuración inicial de Git

Después de instalar, ejecuta esto una sola vez:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 🐍 Instalación de Python

Python es un lenguaje de programación versátil, ideal para principiantes y expertos.

<details>
<summary>🪟 Windows</summary>

1. Descarga el instalador desde [python.org](https://www.python.org/downloads/)
2. Ejecuta el instalador
3. ⚠️ **Marca la casilla "Add Python to PATH"** antes de instalar
4. Verifica la instalación:

```bash
python --version
```

</details>

<details>
<summary>🍎 macOS</summary>

**Opción A — Con Homebrew (recomendado):**
```bash
brew install python
```

**Opción B — Instalador oficial:**
1. Descarga desde [python.org](https://www.python.org/downloads/)
2. Sigue los pasos del instalador

Verifica la instalación:
```bash
python3 --version
```

</details>

<details>
<summary>🐧 Linux</summary>

**Ubuntu / Debian:**
```bash
sudo apt update
sudo apt install python3
```

**Fedora:**
```bash
sudo dnf install python3
```

Verifica la instalación:
```bash
python3 --version
```

</details>

---

## 🟢 Instalación de Node.js

Node.js es un entorno de ejecución de JavaScript en el servidor, ideal para construir aplicaciones web y APIs.

<details>
<summary>🪟 Windows</summary>

**Opción A — Instalador oficial (recomendado):**
1. Descarga el instalador LTS desde [nodejs.org](https://nodejs.org/)
2. Ejecuta el instalador y sigue los pasos (deja todo por defecto)
3. Verifica la instalación:

```bash
node --version
npm --version
```

**Opción B — Con winget:**
```bash
winget install OpenJS.NodeJS.LTS
```

</details>

<details>
<summary>🍎 macOS</summary>

**Opción A — Con Homebrew (recomendado):**
```bash
brew install node
```

**Opción B — Instalador oficial:**
1. Descarga la versión LTS desde [nodejs.org](https://nodejs.org/)
2. Sigue los pasos del instalador

Verifica la instalación:
```bash
node --version
npm --version
```

</details>

<details>
<summary>🐧 Linux</summary>

**Ubuntu / Debian:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Fedora:**
```bash
sudo dnf install nodejs
```

> 💡 **Recomendado:** Usa [nvm](https://github.com/nvm-sh/nvm) para gestionar múltiples versiones de Node.js fácilmente.

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Instalar la versión LTS con nvm
nvm install --lts
nvm use --lts
```

Verifica la instalación:
```bash
node --version
npm --version
```

</details>

---

## 💻 Instalación de Visual Studio Code

VS Code es un editor de código ligero, potente y altamente personalizable.

<details>
<summary>🪟 Windows</summary>

1. Descarga el instalador desde [code.visualstudio.com](https://code.visualstudio.com/)
2. Ejecuta el instalador
3. ✅ Marca **"Agregar al PATH"** durante la instalación
4. Verifica la instalación desde la terminal:

```bash
code --version
```

</details>

<details>
<summary>🍎 macOS</summary>

1. Descarga desde [code.visualstudio.com](https://code.visualstudio.com/)
2. Arrastra VS Code a la carpeta **Aplicaciones**
3. Abre VS Code → `Cmd + Shift + P` → escribe `Shell Command: Install 'code' command in PATH`
4. Verifica:

```bash
code --version
```

</details>

<details>
<summary>🐧 Linux</summary>

**Ubuntu / Debian:**
```bash
sudo apt update
sudo apt install code
```

**Fedora:**
```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf install code
```

Verifica la instalación:
```bash
code --version
```

</details>

---

## 📄 Licencia

Este contenido está bajo licencia [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es) —
puedes usarlo y compartirlo siempre que des crédito a Misitox37.

---

<div align="center">

Hecho con ❤️ por Misitox37

</div>