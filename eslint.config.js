import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'linebreak-style': 'off', // Matikan error CRLF / LF
      'indent': 'off',          // Matikan error spasi indentasi 2 vs 4
      'no-unused-vars': 'off',  // Matikan error variabel yang belum dipakai
    },
  },
];