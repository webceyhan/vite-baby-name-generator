<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/vite-baby-name-generator/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/vite-baby-name-generator/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/webceyhan/vite-baby-name-generator/actions/workflows/deploy.yml/badge.svg)](https://github.com/webceyhan/vite-baby-name-generator/actions/workflows/deploy.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Vite Baby Name Generator Application

A simple baby name generator application which lets you choose some conditions to generate random baby names accordingly.

The application is built with Vite + Vue 3 + Bootstrap.
There is no need for backend server as it only works in single-play mode against the computer.

[View Demo](https://ceyhan.io/vite-baby-name-generator/) |
[Report Issue](https://github.com/webceyhan/vite-baby-name-generator/issues) |
[Request Feature](https://github.com/webceyhan/vite-baby-name-generator/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/) and `npm` package manager first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/vite-baby-name-generator.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd vite-baby-name-generator
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm run dev             # start development server
npm run build           # build for production
npm run preview         # preview built application
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>

<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Start the development server to watch changes while you code.

```sh
npm run dev
```

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the application for production.

```sh
npm run build
```

You can also preview the application after building it.

```sh
npm run preview
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (GitHub Pages)

A GitHub Action will automatically deploy the project to GitHub Pages on every push.

The workflow will build the project using npm and output the result to the `dist` folder which will be then pushed to the `gh-pages` branch.

> See the details in [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Vite](https://vitejs.dev/)
-   [Vue.js](https://vuejs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [GitHub Pages](https://pages.github.com/)
    -   [github-pages-deploy-action](https://github.com/JamesIves/)