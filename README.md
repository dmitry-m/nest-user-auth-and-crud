  <div align="center">
  <h1 align="center">Nest API for authentication and user management</h1>
  <h3>Codebase for the Nest-api platform</h3>
  <h3>◦ Developed with the software and tools below ◦</h3>
  <p align="center"><img src="https://img.shields.io/badge/-NestJS-004E89?logo=NestJS&style=flat-square" alt='NestJS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-TypeScript-004E89?logo=TypeScript&style=flat-square" alt='TypeScript\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=flat-square" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express-004E89?logo=Express&style=flat-square" alt='Express\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-PostgreSQL-004E89?logo=PostgreSQL&style=flat-square" alt='PostgreSQL\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-TypeORM-004E89?logo=TypeORM&style=flat-square" alt='TypeORM"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🚀 Getting Started](#-getting-started)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)

---

## 🔍 Overview

This is a Node.js project with a NestJS framework for the Next.js frontend app https://github.com/dmitry-m/next-redux-cookies-persist. RESTful API for authentication and user management. Authentication is implemented using passport local strategy and authorization is implemented through jwt-strategy using access and refresh tokens. Routes are protected using a decorator that applies the JwtAuthGuard and OnlyAdminGuard guards to a class or method, depending on the value of the role parameter. The project includes a PostgreSQL database, a Telegram bot for notifications, Docker is used for containerization and Docker-compose for deployment and the codebase is well-organized and follows best practices for backend. User CRUD operations are covered with e2e tests.

---

## 🚀 Getting Started

To get started with this project, follow these steps:<br>

1. Install the dependencies by running `yarn install`.
2. Rename a `copy.env` file to `.env` and change your environment variables if necessary.
3. Start the development server by running `yarn run dev` or `docker compose up -d` if necessary to run completely independent application with PostgreSQL database in container.
4. Access the application by navigating to `http://localhost:2999/api` in your web browser.

Additional steps:<br>

1. Copy and run frontend the application from the git-repository https://github.com/dmitry-m/next-redux-cookies-persist
2. Start the e2e tests by running `yarn run test:e2e`

---

## 🌟 Features

Sure, here is a list of features for the project:<br>

- Node.js TypeScript backend with NestJS framework
- Docker containerization
- Docker-compose deployment
- PostgreSQL database
- Telegram bot for notifications
- RESTful API for authentication and user management
- Well-organized codebase with best practices for backend

---

## 📁 Repository Structure

```sh
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── copy.env
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── package.json
├── src
│   ├── app.module.ts
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.interface.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── decorators
│   │   │   └── auth.decorator.ts
│   │   ├── dto
│   │   │   ├── auth.dto.ts
│   │   │   └── refreshToken.dto.ts
│   │   ├── guards
│   │   │   ├── admin.guard.ts
│   │   │   ├── jwt.guard.ts
│   │   │   └── local.guard.ts
│   │   └── strategies
│   │       ├── jwt.strategy.ts
│   │       └── local.strategy.ts
│   ├── configs
│   │   ├── jwt.config.ts
│   │   ├── telegram.config.ts
│   │   └── typeOrm.config.ts
│   ├── entities
│   │   └── baseEntity.entity.ts
│   ├── filters
│   │   └── all-exception.filter.ts
│   ├── main.ts
│   ├── middlewares
│   │   └── global-context.middleware.ts
│   ├── telegram
│   │   ├── telegram.constants.ts
│   │   ├── telegram.interface.ts
│   │   ├── telegram.module.ts
│   │   └── telegram.service.ts
│   └── user
│       ├── decorators
│       │   └── user.decorator.ts
│       ├── dto
│       │   ├── password.dto.ts
│       │   └── update.dto.ts
│       ├── user.controller.ts
│       ├── user.entity.ts
│       ├── user.module.ts
│       └── user.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>Root</summary>

| File         | Summary                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| .eslintrc.js | The code defines an ESLint configuration file for TypeScript projects, with a focus on Airbnb's style guide and the use of TypeScript features. |

</details>

---

<details><summary>\src</summary>

| File          | Summary                                                                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app.module.ts | The code defines a NestJS module called AppModule, which imports various other modules and providers, including TypeORM, Telegram, Auth, User, and Config. It also defines a middleware function that applies the GlobalContextMiddleware to all routes.                |
| main.ts       | The code creates a NestJS application using the `NestFactory.create()` method and sets up various middleware, including a global prefix, validation pipe, and view engine. It also imports the `ConfigService` to retrieve the port number from the configuration file. |

</details>

---

<details><summary>\src\auth</summary>

| File               | Summary                                                                                                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth.controller.ts | The code defines a NestJS controller for authentication, with methods for login, signup, and token generation.                                                                                                                                             |
| auth.interface.ts  | The code defines an interface for authentication, with a user property and tokens object containing a refreshToken and accessToken.                                                                                                                        |
| auth.module.ts     | The AuthModule is a NestJS module that provides authentication and authorization functionality using JWT tokens, with dependencies on other modules such as TypeOrmModule, ConfigModule, JwtModule, PassportModule, and UserModule.                        |
| auth.service.ts    | The code defines an AuthService class that provides authentication and authorization functionality for a NestJS application. It includes methods for issuing JWT tokens, validating user credentials, signing up new users, and refreshing expired tokens. |

</details>

---

<details><summary>\src\auth\decorators</summary>

| File              | Summary                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| auth.decorator.ts | The Auth function is a decorator that applies the JwtAuthGuard and OnlyAdminGuard guards to a class or method, depending on the value of the role parameter. |

</details>

---

<details><summary>\src\auth\dto</summary>

| File                | Summary                                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth.dto.ts         | The code defines a class called AuthDto with two properties: email and password, both of which are validated using the IsString and MinLength decorators from the class-validator library.    |
| refreshToken.dto.ts | The code defines a DTO (Data Transfer Object) class with a single property, `refreshToken`, which is validated as a string using the `IsString` decorator from the `class-validator` package. |

</details>

---

<details><summary>\src\auth\guards</summary>

| File           | Summary                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| admin.guard.ts | The code defines a NestJS guard class OnlyAdminGuard that checks if the current user is an admin and throws a ForbiddenException if they are not, returning true if they are. |
| jwt.guard.ts   | The JwtAuthGuard class extends the AuthGuard class from NestJS Passport and is used to authenticate requests using JSON Web Tokens (JWT).                                     |
| local.guard.ts | The LocalAuthGuard class is a NestJS guard that extends the AuthGuard class and uses the local strategy for authentication.                                                   |

</details>

---

<details><summary>\src\auth\strategies</summary>

| File              | Summary                                                                                                                                                                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jwt.strategy.ts   | The JwtStrategy class is a Passport strategy that validates JSON Web Tokens (JWTs) by extracting the token from the Authorization header and verifying its signature using a secret key. It also retrieves the user's information from the database based on the token's ID. |
| local.strategy.ts | The LocalStrategy class in NestJS is a Passport strategy that authenticates users using the passport-local module, validating their credentials by calling the AuthService's validateUser() method and returning the user object if successful.                              |

</details>

---

<details><summary>\src\configs</summary>

| File               | Summary                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jwt.config.ts      | The code defines a function `getJwtConfig` that returns a `JwtModuleOptions` object with the secret key obtained from the `ConfigService`.                                                |
| telegram.config.ts | The code defines a function `getTelegramConfig` that retrieves configuration options for the Telegram bot from the NestJS ConfigService and returns an object with the token and chat ID. |
| typeOrm.config.ts  | The code defines a function named `getOrmOptions` that returns a TypeOrmModuleOptions object with configuration options for connecting to a PostgreSQL database.                          |

</details>

---

<details><summary>\src\entities</summary>

| File                 | Summary                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| baseEntity.entity.ts | The code defines a base entity class for TypeORM, providing primary key, creation, and update date columns. |

</details>

---

<details><summary>\src\filters</summary>

| File                    | Summary                                                                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| all-exception.filter.ts | The code defines a custom exception filter for NestJS that catches all exceptions and sends them to a Telegram service or logs them in production, while returning a response with the appropriate HTTP status code. |

</details>

---

<details><summary>\src\middlewares</summary>

| File                         | Summary                                                                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| global-context.middleware.ts | The code defines a NestJS middleware that sets the `pretty`, `site`, `year`, `time` properties on the Express `res.locals` object based on configuration values from the ConfigService and the current date using Day.js. |

</details>

---

<details><summary>\src\telegram</summary>

| File                  | Summary                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| telegram.constants.ts | The code defines a constant variable named TELEGRAM_MODULE_OPTIONS for use in the Telegram module.                                                                                        |
| telegram.interface.ts | The code defines an interface for Telegram options and an interface for asynchronous Telegram module options, which can be used to configure the Telegram module in a NestJS application. |
| telegram.module.ts    | The code defines a TelegramModule for Nest.js that provides a forRootAsync method to configure the module asynchronously using an ITelegramModuleAsyncOptions object.                     |
| telegram.service.ts   | The code defines a TelegramService class that provides a sendMessage method for sending messages to a Telegram chat using the Telegraf library.                                           |

</details>

---

<details><summary>\src\user\decorators</summary>

| File              | Summary                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user.decorator.ts | The code defines a parameter decorator called UserParam that retrieves the user object from the request and returns its properties based on the specified data type. |

</details>

---

<details><summary>\src\user\dto</summary>

| File            | Summary                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| password.dto.ts | The code defines a class called UpdatePassword with two properties: password and newPassword, both of which are strings and are validated using the IsString decorator from the class-validator library. |
| update.dto.ts   | The code defines a DTO (Data Transfer Object) for updating user information, with properties for email, password, and admin status.                                                                      |

</details>

---

<details><summary>\src\user</summary>

| File               | Summary                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user.controller.ts | The code defines a UserController class in NestJS, which provides CRUD operations for users, including profile management, password updates, and user deletion.                                                                           |
| user.entity.ts     | The code defines a TypeORM entity class for a User table, with properties for an email address, an admin flag, a password, and an array of favorite items.                                                                                |
| user.module.ts     | The code defines a NestJS module for the User entity, with a controller, service, and database connection.                                                                                                                                |
| user.service.ts    | The code defines a UserService class that provides CRUD operations for users, including searching, updating, and deleting users. It also includes methods for updating user passwords and retrieving the number of users in the database. |

</details>

---

<details><summary>\test</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app.e2e-spec.ts | The code is a set of end-to-end tests for an NestJS application, specifically testing the authentication and user management features. It creates a testing module, sets up the app with global pipes and a prefix, and then defines a series of test cases that simulate various scenarios involving user signup, login, token generation, and deletion. The tests use the `supertest` library to send HTTP requests to the app and verify the responses. |

</details>
