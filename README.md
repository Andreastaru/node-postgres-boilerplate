# Postgres Testing Boilerplate

**Introduction**

As a QA Engineer, you can use this project to get started with SQL testing quickly and efficiently.

**Features**

-   Pre-configured Mocha testing framework for unit testing and integration testing
-   Environment variables set up for PostgreSQL database connection
-   Sample test files for database testing
-   Easy-to-use project structure for organizing tests and database scripts

**Project Structure**

The project is organized into the following directories:

-   `db`: contains database scripts and schema definitions
-   `test`: contains test files for unit testing and integration testing

**How to Start**

### Download or clone the project

You can download the project as a ZIP file or clone it using Git:

```bash
git clone https://github.com/Andreastaru/node-postgres-boilerplate.git

**Install**

`npm install`


**Run Tests**

`npm run test`

**Troubleshooting**

If you encounter any issues with the project, check the following:

- Make sure you have PostgreSQL installed and running on your system
- Verify that the environment variables are set correctly
- Check the test files for any syntax errors or incorrect database connections


**Tips and Tricks**

- Use the db directory to store your database scripts and schema definitions
- Organize your tests into separate files and directories for better maintainability
- Use the src directory to store your application code and keep it separate from the tests
- Use the test directory to store your test files and keep them separate from the application code
- If you want to assert or control something for example errors: 'assert.doesNotThrow(db.yourQuery())', I recommend installing chai:
 `npm install --save-dev chai`
```
