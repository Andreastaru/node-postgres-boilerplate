# Postgres Testing Boilerplate

**Introduction**

This boilerplate project provides a sample and ready-to-use template for SQL test automation using Mocha and Node-postgres. As a QA Engineer, you can use this project to get started with SQL testing quickly and efficiently.

**What You Need to Get Started**

To get started with SQL test automation, you'll need:

-   A PostgreSQL database set up and running on your system
-   Node.js and npm installed on your system
-   A basic understanding of SQL and database concepts
-   Familiarity with Mocha and Node-postgres (optional, but recommended)

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

**Download or clone the project**

**Install**

`npm install`

(optional) Might need chai for assertions

`npm install --save-dev chai`

**Run Tests**

`npm run test`

**Troubleshooting**

If you encounter any issues with the project, check the following:

-   Make sure you have PostgreSQL installed and running on your system
-   Verify that the environment variables are set correctly
-   Check the test files for any syntax errors or incorrect database connections

**Tips and Tricks**

### 1. Organize Database Scripts

Use the db directory to store your database scripts and schema definitions.

### 2. Maintainable Tests

Organize your tests into separate files and directories for better maintainability.

### 3. Separate Test Files

Use the test directory to store your test files and keep them separate from the application code.

### 4. Asserting and Controlling

If you want to assert or control something, for example, errors: assert.doesNotThrow(db.yourQuery()), I recommend installing chai: npm install --save-dev chai.

### 5. Learn more about node-postgres

<a href="https://node-postgres.com/"><img src="https://img.shields.io/badge/Node--pg_API-Documentation-blue" alt="Node-pg API"></a>
