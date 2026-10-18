import { marked } from "./vendor/marked.js";
import DOMPurify from "./vendor/purify.js";

// Keep transcript content limited to formatting; never load embedded media or
// allow message HTML to invoke the native host bridge.
export function renderMarkdown(text) {
  const fragment = DOMPurify.sanitize(marked.parse(text, { gfm: true, breaks: true }), {
    ALLOWED_TAGS: [
      "p", "br", "strong", "em", "del", "ul", "ol", "li", "blockquote",
      "pre", "code", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "a",
      "table", "thead", "tbody", "tr", "th", "td"
    ],
    ALLOWED_ATTR: ["href", "title", "start"],
    RETURN_DOM_FRAGMENT: true
  });
  for (const link of fragment.querySelectorAll("a")) {
    const href = link.getAttribute("href") || "";
    if (!/^(https?:\/\/|mailto:)/i.test(href)) {
      link.removeAttribute("href");
    } else {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  }
  return fragment;
}
