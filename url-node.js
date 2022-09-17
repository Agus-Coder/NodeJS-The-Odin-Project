import { URL } from 'node:url'

const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin);
console.log(myURL.href);

myURL.href = 'https://example.com/bar';
console.log(myURL.href);
// Prints https://example.com/bar