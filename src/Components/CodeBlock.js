import React from 'react';
import '../assets/styles/code-block.scss';

const CodeBlock = ({ code, language, heading, caption }) => {
  // Simple syntax highlighting for common patterns
  const highlightCode = (code, lang) => {
    let highlighted = code;

    // Escape HTML
    highlighted = highlighted
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    switch (lang) {
      case 'jsx':
      case 'javascript':
      case 'js':
        // Protect strings first by replacing them with placeholders
        const strings = [];
        highlighted = highlighted.replace(
          /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,
          (match) => {
            strings.push(match);
            return `__STRING_${strings.length - 1}__`;
          }
        );

        // Protect comments
        const comments = [];
        highlighted = highlighted.replace(
          /\/\/(.*?)$/gm,
          (match) => {
            comments.push(match);
            return `__COMMENT_${comments.length - 1}__`;
          }
        );

        // Keywords (now strings and comments are protected)
        highlighted = highlighted.replace(
          /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|class|extends|new|this|null|undefined|true|false|async|await)\b/g,
          '<span class="keyword">$1</span>'
        );

        // Functions
        highlighted = highlighted.replace(
          /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
          '<span class="function">$1</span>('
        );

        // JSX Tags
        highlighted = highlighted.replace(
          /&lt;([a-zA-Z][a-zA-Z0-9]*)/g,
          '&lt;<span class="tag">$1</span>'
        );
        highlighted = highlighted.replace(
          /&lt;\/([a-zA-Z][a-zA-Z0-9]*)&gt;/g,
          '&lt;/<span class="tag">$1</span>&gt;'
        );

        // Restore comments with highlighting
        comments.forEach((comment, index) => {
          highlighted = highlighted.replace(
            `__COMMENT_${index}__`,
            `<span class="comment">${comment}</span>`
          );
        });

        // Restore strings with highlighting
        strings.forEach((str, index) => {
          highlighted = highlighted.replace(
            `__STRING_${index}__`,
            `<span class="string">${str}</span>`
          );
        });
        break;

      case 'php':
        // Protect PHP tags first
        const phpTags = [];
        highlighted = highlighted.replace(
          /(&lt;\?php|&lt;\?|\?&gt;)/g,
          (match) => {
            phpTags.push(match);
            return `__PHPTAG_${phpTags.length - 1}__`;
          }
        );

        // Protect strings
        const phpStrings = [];
        highlighted = highlighted.replace(
          /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,
          (match) => {
            phpStrings.push(match);
            return `__PHPSTRING_${phpStrings.length - 1}__`;
          }
        );

        // Protect comments
        const phpComments = [];
        highlighted = highlighted.replace(
          /\/\/(.*?)$/gm,
          (match) => {
            phpComments.push(match);
            return `__PHPCOMMENT_${phpComments.length - 1}__`;
          }
        );

        // Keywords (now strings, comments, and PHP tags are protected)
        highlighted = highlighted.replace(
          /\b(use|function|return|if|else|foreach|public|private|protected|class|extends|new|this|null|true|false)\b/g,
          '<span class="keyword">$1</span>'
        );

        // Variables
        highlighted = highlighted.replace(
          /(\$[a-zA-Z_][a-zA-Z0-9_]*)/g,
          '<span class="variable">$1</span>'
        );

        // Restore PHP tags with highlighting
        phpTags.forEach((tag, index) => {
          highlighted = highlighted.replace(
            `__PHPTAG_${index}__`,
            `<span class="keyword">${tag}</span>`
          );
        });

        // Restore comments with highlighting
        phpComments.forEach((comment, index) => {
          highlighted = highlighted.replace(
            `__PHPCOMMENT_${index}__`,
            `<span class="comment">${comment}</span>`
          );
        });

        // Restore strings with highlighting
        phpStrings.forEach((str, index) => {
          highlighted = highlighted.replace(
            `__PHPSTRING_${index}__`,
            `<span class="string">${str}</span>`
          );
        });
        break;

      case 'css':
      case 'scss':
        // Selectors
        highlighted = highlighted.replace(
          /^([.#]?[a-zA-Z0-9_-]+)\s*\{/gm,
          '<span class="selector">$1</span> {'
        );
        // Properties
        highlighted = highlighted.replace(
          /([a-z-]+):/g,
          '<span class="property">$1</span>:'
        );
        // Strings/Values
        highlighted = highlighted.replace(
          /:\s*([^;{]+)/g,
          ': <span class="value">$1</span>'
        );
        break;

      case 'html':
        // Protect strings first
        const htmlStrings = [];
        highlighted = highlighted.replace(
          /=(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,
          (match) => {
            htmlStrings.push(match);
            return `__HTMLSTRING_${htmlStrings.length - 1}__`;
          }
        );

        // Tags
        highlighted = highlighted.replace(
          /&lt;([a-zA-Z][a-zA-Z0-9]*)/g,
          '&lt;<span class="tag">$1</span>'
        );
        highlighted = highlighted.replace(
          /&lt;\/([a-zA-Z][a-zA-Z0-9]*)&gt;/g,
          '&lt;/<span class="tag">$1</span>&gt;'
        );

        // Attributes
        highlighted = highlighted.replace(
          /\s([a-z-]+)=/g,
          ' <span class="attribute">$1</span>='
        );

        // Restore strings with highlighting
        htmlStrings.forEach((str, index) => {
          const cleanStr = str.substring(1); // Remove the '=' prefix
          highlighted = highlighted.replace(
            `__HTMLSTRING_${index}__`,
            `=<span class="string">${cleanStr}</span>`
          );
        });
        break;

      default:
        break;
    }

    return highlighted;
  };

  return (
    <div className="blog-code-section">
      {heading && <h2>{heading}</h2>}
      <div className="code-block">
        <div className="code-header">
          <span className="code-language">{language || 'code'}</span>
        </div>
        <pre>
          <code
            className={`language-${language || 'text'}`}
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>
      {caption && (
        <p className="code-caption text-muted">
          <i className="fa-solid fa-info-circle"></i> {caption}
        </p>
      )}
    </div>
  );
};

export default CodeBlock;
