
# Cypress Automation Framework

This repository contains an end-to-end automation framework built with Cypress for testing the store application: https://automationexercise.com/. The framework is designed to automate user flows and validate the functionality of the application.

## Features

- **Page Object Model (POM)**: Utilizes the POM design pattern for better code organization and maintenance.
- **Dynamic Test Data**: Generates dynamic test data using Faker.js for enhanced test coverage.
- **Custom Commands**: Includes custom Cypress commands for interacting with elements and performing common actions.
- **Test Execution**: Executes automated tests locally or in a CI/CD pipeline using Cypress.
- **Test Reporting**: Generates detailed test reports using Mochawesome and JUnit reporters for better visibility and analysis.

## Getting Started

To get started with the framework, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Luca-De-Maio/cypress-framework.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the tests:

    ```bash
    npm run cypress-e2e-pack
    ```

4. View test reports:

    - Mochawesome HTML report: `./mochawesome-report/mochawesome.html`
    - JUnit XML report: `./cypress/results/junit/results.xml`

## Project Structure

The project structure follows the following convention:

- **`cypress/e2e`**: Contains test files organized by feature or functionality.
- **`cypress/support`**: Contains custom commands and other support files.
- **`cypress/support/page-objects`**: Contains page object classes representing the application's pages.
- **`cypress/fixtures`**: Contains fixture files for storing test data.
- **`cypress/results`**: Contains test execution results and reports.
- **`cypress.json`**: Cypress configuration file.
- **`package.json`**: Project dependencies and scripts.

## Contributing

Contributions to the framework are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
