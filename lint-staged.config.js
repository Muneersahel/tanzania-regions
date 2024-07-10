module.exports = {
  '*.{ts,html}': (filenames) => [`prettier --write ${filenames.join(' ')}`],
  '*.{html,css,js,json,md,yml}': (filenames) =>
    `git add ${filenames.join(' ')}`,
};
