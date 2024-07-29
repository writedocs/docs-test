const fs = require('fs');

function transformSidebar(inputPath, outputPath) {
  fs.readFile(inputPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the input file:', err);
      return;
    }

    try {
      const file = JSON.parse(data);
      const { sidebar } = file;
      const sidebars = {};

      Object.keys(sidebar).forEach(sectionName => {
        const sectionContent = sidebar[sectionName];
        sidebars[sectionName] = [];

        sectionContent.forEach(category => {
          const categoryName = category.category;
          const pages = category.pages;

          pages.forEach(item => {
            if (typeof item === 'string') {
              sidebars[sectionName].push({
                type: 'doc',
                id: item
              });
            } else if (typeof item === 'object' && item.page && item.subpages) {
              sidebars[sectionName].push({
                type: 'category',
                label: item.label,
                link: {
                  type: 'doc',
                  id: item.page
                },
                items: item.subpages
              });
            }
          });

          // Adding the category title
          sidebars[sectionName].unshift({
            type: 'html',
            value: `<span class='sidebar_title'>${categoryName}</span>`,
            defaultStyle: true,
            className: 'sidebar_title',
          });
        });
      });

      // Write the output to sidebars.js
      const outputContent = `module.exports = ${JSON.stringify(sidebars, null, 2)};`;
      fs.writeFile(outputPath, outputContent, 'utf8', (err) => {
        if (err) {
          console.error('Error writing the output file:', err);
        } else {
          console.log(`Output saved to ${outputPath}`);
        }
      });
    } catch (parseError) {
      console.error('Error parsing the JSON data:', parseError);
    }
  });
}

// Usage example (you can set the actual paths according to your project structure)
transformSidebar('config.json', 'sidebars.js');

module.exports = transformSidebar;
