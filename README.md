# :zap: Ionic Angular Material

* App created using the [Ionic framework](https://ionicframework.com/docs) to use [mat select](https://material.angular.io/components/select/overview) to select from a list of options, [mat paginator](https://material.angular.io/components/paginator/overview) to navigate pages and [Material Stepper](https://material.angular.io/components/stepper/overview) to divide content into logical steps.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-material?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-material?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-material?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-material?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Material](#ionic-angular-material)
  * [:page_facing_up: Table of contents](#table-of-contents)
  * [:books: General info](#general-info)
  * [:camera: Screenshots](#screenshots)
  * [:signal_strength: Technologies](#technologies)
  * [:floppy_disk: Setup](#setup)
  * [:computer: Code Examples](#code-examples)
  * [:cool: Features](#features)
  * [:clipboard: Status & To-do list](#status--to-do-list)
  * [:clap: Inspiration](#inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Angular Material is the implementation of Material Design for Angular. It offers a wide range of components and patterns for navigation, forms, buttons, layouts etc.

## :camera: Screenshots

![image](./img/front-screen.png)

## :signal_strength: Technologies

* [Ionic v6](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [Angular Material v13](https://material.angular.io/)

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Run `ng lint` to lint files. All files pass linting
* To start the server on _localhost://8100_ type: `ionic serve`

## :computer: Code Examples

* extract from `home.page.html` of the material table that displays the user first name using data-interpolation.

```html
  <ng-container matColumnDef="first_name">
    <th mat-header-cell *matHeaderCellDef> First Name </th>
    <td mat-cell *matCellDef="let user"> {{user.first_name}} </td>
  </ng-container>
```

## :cool: Features

* User list can be extended. Lots of additional material components can be added.

## :clipboard: Status & To-do list

* Status: Working.
* To-do: Nothing

## :clap: Inspiration

* Project inspired by [Simon Grimm´s Youtube video: ionic angular material](https://www.youtube.com/watch?v=pd-CF-dWEak)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
