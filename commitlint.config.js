const TYPES = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
  'hotfix',
  'init',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: './commitlint-parser-preset.js',
  rules: {
    'type-enum': [2, 'always', TYPES],
    'type-empty': [2, 'never'],
  },
};
