/**
Challenge:

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

try {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
  // the code to execute on an error
  throw new Error("This is a network error!");
} finally {
  // executes code at the end no matter the result
  console.log("The operation completed!");
}
