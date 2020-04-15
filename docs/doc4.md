---
id: doc4
title: Creating Build
---

## Create Development Build

If you want to create a build for development environment, you need to make sure that your base url should point to the UAT link. To control the base url, you need to navigate to the `src` folder in the root directory. Navigate to `src/Components/Services/Api.js`.

Inside `Api.js` file, you can see a function `getBaseUrl`.

<!--JavaScript-->

```js
export const getBaseUrl = () => {
  return "http://uat.apps.waycool.in:3025/"; //Dev Server
  // return "http://prod.receivable.waycool.in:8040/"; // Prod Server
};
```

For Development Environment, you can return the first URL with comment **Dev Server**.

After that you can run command:

```
npm run build
```

## Create Production Build

For Production Environment, you can return the second URL with comment **Prod Server**.

<!--JavaScript-->

```js
export const getBaseUrl = () => {
  // return "http://uat.apps.waycool.in:3025/"; //Dev Server
  return "http://prod.receivable.waycool.in:8040/"; // Prod Server
};
```

After that you can run command:

```
npm run build
```
