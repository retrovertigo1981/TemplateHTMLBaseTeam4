import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html
    },
    languageOptions: {
      parser: htmlParser
    },
    rules: {
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/no-duplicate-id': 'error',
      '@html-eslint/no-duplicate-attrs': 'error',
      '@html-eslint/require-doctype': 'error',
      '@html-eslint/require-li-container': 'error',
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/no-script-style-type': 'error',
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }]
    }
  }
];
