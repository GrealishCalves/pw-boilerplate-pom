
# Welcome to the Page Object Model (POM) Automation Project

This project provides a framework for automating web applications using the Page Object Model (POM) design pattern.



## Features

- Automates web applications using Playwright library.
- Implements the Page Object Model design pattern for easy maintenance and scalability.
- Supports multi-page automation scenarios.
- Provides a generator for easily creating new page objects.


## Run Locally

Clone the project

```bash
  git clone https://github.com/<repo-name>.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run example
```


## folder Structure 

```bash
.
├── .
├── +-- common
├── |   +-- interface
├── |   |   +-- common-types.ts
├── +-- abstract-page
├── |   +-- base-page.ts
├── +-- data
├── |   +-- data.json
├── +-- fixture
├── |   +-- fixture-config.ts
├── +-- page-objects
├── |   +-- LoginPage
├── |   |   +-- LoginPage-page.ts
├── |   |   +-- LoginPage-constants.ts
├── +-- plopfile.js
├── +-- package.json
├── +-- package-lock.json
└── +-- README.md
```
## Page Object Generator

To create new page objects, you can use the provided generator:


```bash
  npm run plop <page object>
```

