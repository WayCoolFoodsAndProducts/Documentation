---
id: doc5
title:  Source Folder
sidebar_label: Source ( /src ) Folder
---

## src folder

`/src` folder at the root contains all your code. Inside `src`, there's a `Components` folder comprises of all of the code.

![src Folder](assets/doc5srcfolder.png)


## Assets

`Assets` folder contains all the static assets of the project mainly images, icons etc...

![Assets Folder](assets/doc5assets.png)


## Common 

`Common` folder contains components and logics which are common through the entire project. Some components are **Header** and **Sidebar**. Whereas some common logics are **PaginationLogic**, **TextCapitalize**.

![Common Folder](assets/doc5common.png)

## Constant

`Constant` folder contains files and data which will remain constant through the entire project. For example, **name of the tabs in the sidebar**, **roles of the users**.

![Common Folder](assets/doc5constant.png)

## Screens

`Screens` folder contains your screens of the project. These screens are the component which will render when try to access any particular route. Your majority of the code base is inside these files and responsible for the working of the project. 

![Common Folder](assets/doc5screens1.png)

Each folder contains mostly two or more related files. One file would be `.js` extension file and one `.scss` file. Your `.js` is the main file which contains code for your that screen mainly. Also the name of the `.js` and `.scss` files would be the same as of your project folder name, i.e in case of `ActivityLogs` files would be `ActivityLogs.js` and `ActivityLogs.scss`.

![Common Folder](assets/doc5screens2.png)

