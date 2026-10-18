Locally bundled browser modules (no CDN or runtime npm install required):

- Marked 18.1.1: https://github.com/markedjs/marked — `marked.js`, MIT license in `marked.LICENSE`.
- DOMPurify 3.4.17: https://github.com/cure53/DOMPurify — `purify.js`, Apache 2.0 license in `dompurify.LICENSE`.

Files are copied from the npm packages' ESM distributions. Markdown output must
pass through the restricted DOMPurify configuration in `../markdown.js`.
