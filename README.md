
# family-tree-maker-v3

The Family Tree Maker is a simple geneological tool that allows users to keep track of their relatives, keep important information (such as contact info, birthdates, etc.), and also to create a printable family tree.

This is a React App, utilizing Redux for state management, and Thunk for async operations.  Authorization is handled by Auth0, and allows for email/password login or Google login.  The app uses a Rails backend with a postgressql databse for storing user data.

Currently, the tree making function only supports 3 generations (the user & spouse, their siblings, their parents, and their children), however there is no limitation on which relatives can be saved to the database.

This app was created to satisfy the requirements of The Flatiron School's React/Redux Portfolio Project. This project was focused on creating a React application (using the create-react-app generator) utilizing Redux for state management, thunk middleware for async operations, and react-router for RESTful routing.  The project also showcases the use of Auth0 as an external authorization provider, and react-bootstrap for basic styling.

## Installation

### Backend - Database setup/creation

From the project's main directory:
```bash
cd family-tree-maker-backend
bundle install
```
to install required gems/dependencies.

This application requires a postgres sql databse -- to install PostgreSQL on your machine, follow the instructions here: <https://www.postgresql.org/download/>

Once postgres is installed on your computer, you must create a Postgres user and password.  To do this (make sure to replace 'password1' with a password of your choosing):

```bash
su - postgres
psql
create role family_tree_maker with createdb login password 'password1';
/q
```

Next, create the following file:

/family-tree-maker-backend/.env

Open the .env file and paste in the following (adding the postgres user and password created above at the indicated locations):

```bash
POSTGRES_USER=''
POSTGRES_PASSWORD=''
POSTGRES_HOST='localhost'
POSTGRES_DB='family_tree_maker_backend'
POSTGRES_TEST_DB='family_tree_maker_backend_test'
```

save and close this file, and create the following next (if it doesn't already exist)

/family-tree-maker-backend/.gitignore

Open the .gitignore file and add the following after the last line:

```bash
.env
```
save and close this file.  This ensures that we are not exposing our passwords to the public.

Next open the file

/family-tree-maker-backend/config/database.yml

and replace the contents with the following:
```bash
default: &default
  adapter: postgresql
  encoding: unicode
  username: <%= ENV['POSTGRES_USER'] %>
  password: <%= ENV['POSTGRES_PASSWORD'] %>
  pool: 5
  timeout: 5000
  host: <%= ENV['POSTGRES_HOST'] %>
development:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>
test:
  <<: *default
  database: <%= ENV['POSTGRES_TEST_DB'] %>
production:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>
```

save and close this file.


To complete the backend setup, create the databases using
```bash
rake db:setup
```

Finally, start the backend server using
```bash
rails s -p 3001
```
(port 3001 is used so as not to conflict with the default frontend port used, 3000)

### Frontend

To set up and start the frontend, make sure you are in the root project directory and:

```bash
cd family-tree-maker
npm install && start
```

## Usage

To use the app, open a browser such as Chrome, enter the following in the address bar

localhost:3000

and hit enter.

You should now see the login page!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)