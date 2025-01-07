# JavaScript Bug: Unexpected behavior of foo(0,0)

This repository demonstrates a subtle bug in a JavaScript function that handles different inputs. The `foo` function is designed to add two numbers together, but it handles the case where both inputs are 0 unexpectedly.

## Bug Description

The `foo` function incorrectly returns 0 when both inputs are 0. This could lead to unexpected behavior in applications that rely on this function. A more robust implementation should handle such input in a better way (e.g. throwing an error or returning a specific value representing an error). 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`
3. Run the code.

You will notice that the function returns 0 for the case of foo(0,0), which might not be the desired or expected outcome.

## Solution

The solution in `bugSolution.js` addresses the issue by throwing an error when both inputs are 0.