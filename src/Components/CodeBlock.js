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
        // Keywords
        highlighted = highlighted.replace(
          /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|class|extends|new|this|null|undefined|true|false|async|await)\b/g,
          '<span class="keyword">$1</span>'
        );
        // Strings
        highlighted = highlighted.replace(
          /(['"`])(.*?)\1/g,
          '<span class="string">$1$2$1</span>'
        );
        // Functions
        highlighted = highlighted.replace(
          /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
          '<span class="function">$1</span>('
        );
        // Comments
        highlighted = highlighted.replace(
          /\/\/(.*?)$/gm,
          '<span class="comment">//$1</span>'
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
        break;

      case 'php':
        // PHP tags
        highlighted = highlighted.replace(
          /(&lt;\?php|&lt;\?|\?&gt;)/g,
          '<span class="keyword">$1</span>'
        );
        // Keywords
        highlighted = highlighted.replace(
          /\b(use|function|return|if|else|foreach|public|private|protected|class|extends|new|this|null|true|false)\b/g,
          '<span class="keyword">$1</span>'
        );
        // Strings
        highlighted = highlighted.replace(
          /(['"`])(.*?)\1/g,
          '<span class="string">$1$2$1</span>'
        );
        // Variables
        highlighted = highlighted.replace(
          /(\$[a-zA-Z_][a-zA-Z0-9_]*)/g,
          '<span class="variable">$1</span>'
        );
        // Comments
        highlighted = highlighted.replace(
          /\/\/(.*?)$/gm,
          '<span class="comment">//$1</span>'
        );
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
        // Strings
        highlighted = highlighted.replace(
          /=(['"`])(.*?)\1/g,
          '=<span class="string">$1$2$1</span>'
        );
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
