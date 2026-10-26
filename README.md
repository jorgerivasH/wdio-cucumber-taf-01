# Automation Test Framework with WebDriverIO & Cucumber

This project is a Test Automation Framework (TAF) designed to validate the core functionality of the application using **Behavior Driven Development (BDD)**. It uses **Cucumber** for writing tests in natural language (Gherkin) and **WebDriverIO** as the automation engine.

#Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (LTS version recommended): [Download Node.js](https://nodejs.org/)
2. **Google Chrome Browser**: The tests are configured to run on Chrome.
3. **Code Editor**: Visual Studio Code (recommended) with the *Cucumber (Gherkin Full Support)* extension.
4. **git


#Installation

Follow these steps to set up the project locally:

1. Clone the repository:**
   ```bash
   git clone <https://github.com/jorgerivasH/wdio-cucumber-taf-01.git>
   cd wdio-cucumber-taf-01

2. Install dependencies 
   npm install

3. Run your test
npx wdio run ./wdio.conf.ts
To run a specific feature, you can modify the specs path in wdio.conf.ts or use the command line filter if configured.
currently by default the test forgot password


Test cases
- Test to verify the forgot password functionality
- Test to verify a login functionality
- Test to verify a Google navigation functionality

WHY THESE SCENARIOS
- Login and Forgot are critical and real scenarios. The automation engineers are working continuously, and the Page Object pattern can be implemented to work with selectors in detail
- It validates form interaction. It exercises data entry, clicks, form submission,  and verification of confirmation or error messages.
- It can be covered positive and negative scenarios
- Navigation test created to validate basic browser actions