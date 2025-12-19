# attempt-statement
Never use try/catch/finally again, use attempt/rescue/else/ensure instead.

## usage
```javascript
const attempt = require('attempt-statement')
attempt(() => {
  consoe.log('this line throws an error because i mispelled console as consoe')
}).rescue((error) => {
  console.log('Error: ' + error)
}).else(() => {
  console.log('this will never be run because there\'s always an error')
}).ensure(() => {
  console.log('This will always be run')
}).end()
// Output:

// Error: ReferenceError: consoe is not defined
// This will always be run
```
above is equivalent to
```javascript
let error = false
try {
  consoe.log('this line throws an error because i mispelled console as consoe')

  console.log('this will never be run because there\'s always an error')
} catch(error) {
  console.log('Error: ' + error)
  error = true
} finally {
  console.log('This will always be run')
}
// Output:

// Error: ReferenceError: consoe is not defined
// This will always be run
```