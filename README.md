# React - Snapshot Testing with Jest

All Jest tests run through node using a fake DOM implementation. You do not need to start up a browser so tests are faster. Jest provides a wonderful watch mode that runs only the tests that are relevant to the changes you’ve made and makes it easy to see the result.

## What is Snapshot Testing?

> A snapshot test verifies that a piece of functionality works the same as it did when the snapshot was created.

It works a bit differently than a normal `unit test`. Instead of executing some code and comparing the output against a value provided by a developer, the first time a test is run, the output passed into the test is saved to a `“snapshot file”`.

Then when the test is run in the future, the output is `compared` to the snapshot file. If the output matches the file, the test passes, if the output is different then the file, the test fails and Jest prints a `diff`. Then, you have the opportunity to either update the snapshot, or fix the component to make it match.

## Component first

In Test-Driven development we write a failing test, then write code to make that test pass, then refactor if necessary. But in contrast, in Snapshot testing approach we have to make the component work, then write a test to take a snapshot, then refactor if necessary.

> Snapshot testing is not test-driven development.

I can understand all TDD lovers thinking it is bad. so relax guys It is not a solution to every testing situation, just like TDD is not perfectly suited to every situation. Snapshot testing does not entirely replace other testing libraries and techniques. You can still use Enzyme and ReactTestUtils. You should still test Redux parts (actions, reducers, etc) in isolation.

> Snapshot testing is just a tool in your arsenal – just one tool

## Updating Snapshot Tests

When a snapshot test fails, Jest will print output with `diff`, you can then choose to accept this change by running `jest -u` to update the snapshot, or update your code to fix the regression. If you update the snapshot file, the test will start passing again.

## Mock Functions

 You are responsible for making sure your generated snapshots do not include platform specific or other non-deterministic data.

 Lets say, you have a `component` that uses `Date.now()`, the snapshot generated from this component will be different every time the test case is run. In this case you can [mock](https://facebook.github.io/jest/docs/en/mock-functions.html) the Date.now() method to return a consistent value every time the test is run.

 ```js
 Date.now = jest.fn(() => 1482363367071);
 ```

 Now, every time the snapshot test case runs, Date.now() will return 1482363367071 consistently. This will result in the same snapshot being generated for this component regardless of when the test is run.

## Does snapshot testing substitute unit testing?

Snapshot testing is only one of more than 20 assertions that ship with Jest. The aim of snapshot testing is not to replace existing unit tests, but providing additional value and making testing painless. In some scenarios, snapshot testing can potentially remove the need for unit testing for a particular set of functionalities (e.g. React components), but they can work together as well. `(originally published on Jest website)`

## Wrapping Up

* Snapshot testing is not for everything. They are optimized for a different case than normal assertion-based tests.
* Assertion based tests are perfect for testing clearly defined behavior.
* Snapshot tests are great for testing less clearly defined behavior that may change often.
* Snapshot tests do not give any indication of developer intent to future developers.

Jest Official - benmccormick.org - daveceddia.com
