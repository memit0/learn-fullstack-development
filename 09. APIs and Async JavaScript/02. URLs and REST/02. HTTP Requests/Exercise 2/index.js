/**
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 *
 * Log the response data to the console
 */

try {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
    {
      // Send the post method as JSON format
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error("Response status:" + response.status);
  }
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
} finally {
  console.log("operation executed");
}
