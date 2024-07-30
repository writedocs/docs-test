const fs = require('fs');

function processPage(item, outputArray) {
  if (typeof item === 'string') {
    // Simple page
    outputArray.push({
      type: 'doc',
      id: item
    });
  } else if (typeof item === 'object' && item.page) {
    // Category or API Method with subpages
    if (item.apiMethod) {
      // API Method page
      outputArray.push({
        type: 'doc',
        id: item.page,
        className: `api-method ${item.apiMethod}`
      });
    } else {
      // Category with subpages
      const category = {
        type: 'category',
        label: item.label,
        link: {
          type: 'doc',
          id: item.page
        },
        items: []
      };

      item.pages.forEach(subItem => {
        processPage(subItem, category.items);
      });

      outputArray.push(category);
    }
  }
}

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
          const categoryTitle = {
            type: 'html',
            value: `<span class='sidebar_title'>${categoryName}</span>`,
            defaultStyle: true,
            className: 'sidebar_title',
          };
          sidebars[sectionName].push(categoryTitle);

          category.pages.forEach(item => {
            processPage(item, sidebars[sectionName]);
          });
        });
      });

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

transformSidebar('config.json', 'sidebars.js');

module.exports = transformSidebar;
