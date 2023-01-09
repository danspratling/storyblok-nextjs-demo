import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

const NodeCodeblock = (children, props) => {
  const language = props.class.split("-")[1];

  const myHtml = hljs.highlight(children.flat().join(""), {
    language,
  }).value;

  return (
    <pre className={`language-${language}`} tabIndex="0">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: myHtml }}
      />
    </pre>
  );
};

export default NodeCodeblock;
