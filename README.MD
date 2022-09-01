# OVERVIEW

> This is a testing automation framework containing cypress tests ( mostly e2e, the goal is to add DB & Component testing in the near future ). The objective is to not only automate scenarios but also write complete test cases for certain features thus simulating a professional setting with requirement analysis and coverage execution.

The project contains directories for each site automated and covered. The sites used were found as a reference point in this [video](https://www.youtube.com/watch?v=mcQI5x2T1RA&t=908s). Even though the plan is to use a test management tool, markdown files will be used for now. We will be adding to the project as time goes by...

---

## Authors:

- Marko Markovikj
- Petar Tosevski

---

## Setup:

1. Download/Clone repo
2. Run `npm install`
3. Run either `npx cypress open` or `npm run test-open` to open the **Cypress test runner**
4. Run the tests (**note:** _tests are separated by project into different folders, each containing spec files for whichever aspect of the project they cover_)

---

## Guidelines:

- ### Formatting & Code styling:

  - Use **Prettier** with the default settings, only set `Print Width` to **100** and enable `tab indentation` with a tab being equivalent to **2 spaces.** At least format your code this way before pushing anything to the repository.

- ### Writing tests:

  - Write tests in the following fashion and with these principles in mind:

    - **Generalize tests in the following categories (UI, Authorization, Specific page/functionality behavior).** If it strictly checks the state of a page or a view, it probably belongs in the first one. If it deals with User commands which require status/auth/role checks, it belongs in the second one. If it is specific to one page and/or behavior, it belongs in the third one.

    - **Write test cases for each scenario covered**. This is a no-brainer and goes without saying. Also use each test case's title as a description in its automated version.

    - **Generally use the POM pattern**. Even though Cypress itself might condemn using the **POM** pattern, **we believe** it divides the work in a universally-known-amongst-testers way. Each project should have a **'pages'** directory where we export every page as a module.

    - **Consult others**. If there is a scenario or action you are contemplating of automating don't be afraid to ask the other members for their opinion. This project is for demonstration and practice purposes.



glupost