const plugin = require("tailwindcss/plugin");

module.exports = function (...langs) {
  return plugin(function ({ addVariant, e }) {
    for (const lang of langs) {
      addVariant(`${lang}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`${lang}${separator}${className}`);
          return `html:lang(${lang}) .${newClass}`;
        });
      });
    }
  });
};
