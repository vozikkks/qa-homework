# qa-homework

## Time Spent:

I spent under one full working day on this task

## Overview of Test Plan:

For the theoretical part, I designed a test plan that covers the main features of the action camera. The tests include:

- Water resistance
- Vertical fall resistance
- Battery life for both standby and filming
- Functionality of power, shutter, and mode switch buttons
- Usability and compliance with physical specifications like weight, form, size, and appearance

The test cases were divided into positive functional, negative functional, and non-functional categories to ensure both expected and edge-case behaviors were tested.

## Implementation of Alphanumeric Sort (Option A):

For the practical part, I implemented the Alphanumeric Sort algorithm in TypeScript. Unfortunately, I didnt have enough time to learn Python syntax, but I am very open to do this in the future

I used console.log to test different scenarios to ensure the sort works as expected.

## How to Run the Tests:

To run the tests, follow these steps:

1. **Install Node.js**:
   - Make sure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
2. **No need to install dependencies**

3. **Run the Tests**:

   - Use **console.log** to test various scenarios and check if the sorting works. Simply run the following command in the terminal:

   ```bash
   node src/alphanumericSort.ts
   ```

   Alternatively, since I used GitHub Actions to run the test on CI , you can open and check the output there.

Project's tree
.
├── README.md
├── package-lock.json
├── package.json
├── src
│ └── alphanumericSort.ts -------> task 2
├── test-plan.md -------> task 1
└── tsconfig.json
