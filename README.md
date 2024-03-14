To install the dependencies outlined in the package.json file, npm, the Node.js package manager, is utilized. Below is the dependency list along with the commands for installation:

Dependency List:

express: ^4.18.3
pug: ^3.0.2
nodemon: ^3.1.0

To install these dependencies, execute the following commands:

npm install express
npm install pug
npm install nodemon --save-dev

Upon installing the dependencies, execute the command npm start to launch the application. The application can be accessed at either http://localhost:5000 or http://localhost:8505 if port 5000 is unavailable.

About the Application:
This web application serves as a moviestore management system, offering comprehensive movie information such as title, description, full text, category, and movie image. The homepage showcases all available movies, each accompanied by buttons for editing, deleting, and reading. Additionally, an "add movie" page facilitates the inclusion of new movie data, which is persisted in a JSON file and dynamically displayed on the main page.

Documentation:
The application is meticulously designed to streamline movie management tasks, enabling users to seamlessly add, edit, delete, and search for movies. It provides an intuitive interface for efficiently managing movie data.

Project Structure:
The project features a structured layout, with a routes folder containing the routes.js file, a views folder housing all user interface components, and an app.js file orchestrating the application logic. Other essential files include moviesData.json and .gitignore. Notably, a public folder is omitted as external image links are utilized instead of locally hosted images. Similarly, CSS styling is absent as the application is styled using Bootstrap. Moreover, the controllers directory is omitted as all requisite logic and functions are consolidated within the router.js file for improved compatibility.

For access to the source code, kindly refer to the GitHub repository: https://github.com/kai-skywalker/WebTechnologyCW

To interact with the live application, visit: 