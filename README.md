# Gridix documentation

Gridix is a simple grid system for CSS. Its based on flex and has a simple syntax. Gridix is built with vite and sass.

## Installation

You can install Gridix with npm:

```bash
npm install css-gridix
```

## Usage

To use Gridix, you need to import the `gridix` file into your project. You can do this by importing it into your project's main file:

In vue.js you would do this in your `main.js` file:

```js
import "css-gridix";
```

## Releasing a new version

1. After making your changes to the code, you must first build the project. This will create a new version of the css file in the dist folder. You can then bump the version number using the npm version command:

```bash
npm run build
```

2. Update the main entrypoint for the application in the package.json

```json
...
"main": "dist/assets/style-91a4cd11.css",
...
```

3. Commit your changes

4. now you can bump the version number

```bash
npm version [major|minor|patch]
```

5. a new commit is created with the new version number and a tag is created with the same version number. Push the changes to the remote repository

```bash
git push
```

6. Finally, you can publish the new version to npm

```bash
npm publish
```

### Contributing

If you want to contribute to Gridix, you can do so by creating a pull request. If you want to add a new feature, please create an issue first.

### License

Gridix is licensed under the MIT license
