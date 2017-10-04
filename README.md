#React - Snapshot Testing with Jest

All Jest tests run through node using a fake DOM implementation. You do not need to start up a browser so tests are faster. Jest provides a wonderful watch mode that runs only the tests that are relevant to the changes you’ve made and makes it easy to see the result.

What is Snapshot Testing?
> A snapshot test verifies that a piece of functionality works the same as it did when the snapshot was created.

It works a bit differently than a normal `unit test`. Instead of executing some code and comparing the output against a value provided by a developer, the first time a test is run, the output passed into the test is saved to a `“snapshot file”`.

Then when the test is run in the future, the output is `compared` to the snapshot file. If the output matches the file, the test passes, if the output is different then the file, the test fails and Jest prints a `diff`. Then, you have the opportunity to either update the snapshot, or fix the component to make it match.
