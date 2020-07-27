# Course Catalog - Project

### Main use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making API calls
3. Communicating between parent and child component
4. Updating the data based on specific events


### Live Application URL

##### https://manibboyz.github.io/course-catalog/
This URL has the application deployed in

### Prerequisites

##### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Running the Application in local (Development Environment)

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

### Running the Application in local (Production Environment)

The static assets for the production build (minified files) has already been generated using "npm run build". To run the application in Production Environment, run the following command

```bash
serve -s build
```

The Application Runs on **localhost:5000**

To change the port for the Production Build, run the following command

```bash
serve -s build -l 8080
```
Change port 8080 with your available ports

### Application design

#### Components

1. **Courses** Component : This Component Displays the course details of the selected category and search keyword. This Component gets its data from an API.

2. **Sidebar** Component : This Component displays a list of course categories and a search bar. This Component gets the data from an API as well. This Component is the Child Component of *Courses* Component

#### API client

**axios** library is used to make API Calls