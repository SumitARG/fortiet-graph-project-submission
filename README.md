# FortinetGraphProjectSubmission

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Developer Notes and Key Points
1.  The code is developed using the Sample Json provided in the Problem Statement as the pointof referene and testing.
2. I have used ForceGraph (1.43.5) library which internally uses D3.js for plotting of graphs
3. The Sample JSON did not have any entries for adjacencies. Hence I have not used Groups and Module Types for plotting.
4. This Project(code) Plots the Sample JSON (and similar JSONs) into a Force Graph with Nodes and Edges
5. I have tried to divide the UI with as many components as I thought were possible
6. The project also uses interfaces so that any changes to the Sample JSON and it's structure can be accomodated easily and centrally in the Models folder.
7. I have added a few test cases as well and attached the coverage report in the zip file as well
8. The dist folder is also added in the attached zip.


## Directions for use 
1. Extract the zip file into it's folder
2. Open the folder in a terminal(cmd)
3. Project Requirements : Node (Version 20.13.1); NPM (Version 10.5.2); Angular(Version 17.13.7<)
4. Run npm install in the root folder (where package.json is present)
5. To run the Project : ng serve
6. To build the Project: ng build
7. To test the Project and get code coverage: ng test --code-coverage


## Disclaimer
Everything below this is the automatically generated Angular Readme File (kept for reference)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



