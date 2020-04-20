---
id: mp_doc5
title:  Source ( /src ) Folder
sidebar_label: Source Folder
---

## src folder

`/src` folder at the root contains all your code. Inside `src`, there's a `Components` folder comprises of all of the code.

![src Folder](assets/myPrice/mp_src_folder.png)


## Assets

`Assets` folder contains all the static assets of the project mainly images, icons etc...

![Assets Folder](assets/myPrice/mp_assets.png)


## Common 

`Common` folder contains components and logics which are common through the entire project. Some components are **Header** and **Sidebar**. Whereas some common logics are **PaginationLogic**, **TextCapitalize**.

![Common Folder](assets/myPrice/doc5common.png)

## Constant

`Constant` folder contains files and data which will remain constant through the entire project. For example, **name of the tabs in the sidebar**, **roles of the users**.

![Common Folder](assets/myPrice/mp_constant.png)

## Screens

`Screens` folder contains your screens of the project. These screens are the component which will render when try to access any particular route. Your majority of the code base is inside these files and responsible for the working of the project. 

![Common Folder](assets/myPrice/mp_screens.png)

Each folder contains mostly two or more related files. One file would be `.js` extension file and one `.scss` file. Your `.js` is the main file which contains code for your that screen mainly. Also the name of the `.js` and `.scss` files would be the same as of your project folder name, i.e in case of `Dashboard` files would be `Dashboard.js` and `Dashboard.scss`.

![Common Folder](assets/myPrice/mp_dashboard_example.png)

## State Management

As we are using React Hooks, so we are consuming [Context API](https://reactjs.org/docs/context.html) with [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer) together to get the Redux like functionality.

![State Management](assets/myPrice/mp_state_management.png)

