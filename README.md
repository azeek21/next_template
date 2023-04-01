# My template for quck start nextjs appas.

## Contents

- [Package managers](#package-manager)
- [Formatters](#format)

### Package manager

To avoid headaches when different package managers used by accident or intentionally, this template is locked to use only npm. <br/>
See `engines` section in `package.json` and `.npmrc`.

### Format

Using `eslint` and `prettier` defautl settings with tiny bit of tweaks. See `.eslintrc.json`, `.prettierrc.json` and `.prettierignore`
<br/>

Tweaks:

- Eslint `.eslintrc.json`
  - Unused wars throw waring and will be ignored if they start with `_` (underscore). Because this feature can be annoying during development.
  - Global `React` varialbe. otherviese eslint throws error saying we are using react but react is not imported.
- Prettier `.prettierrc.json` , `.prettierignore`
  - Default fomratting settings.
  - files with name that end with `.json` or have `config` in them will be ingored, I don't really want my fofing files to be formatted.
    - build folders and `node_modules` are also ignored.
