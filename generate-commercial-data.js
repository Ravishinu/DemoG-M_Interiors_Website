const fs = require('fs');
const path = require('path');

// Path to the commercial images directory
const commercialDir = path.join(__dirname, 'public', 'Commercial');

// Get all image files from the directory
const files = fs.readdirSync(commercialDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

// Generate the data structure for the commercial images
const commercialData = {
  commercial: {
    datas: files.map((file, index) => ({
      id: `commercial-${index + 1}`,
      image: `/Commercial/${file}`,
      title: `Commercial Project ${index + 1}`,
      description: 'Professional commercial interior design',
      location: 'Bangalore',
      category: 'commercial',
      subcategory: 'All'
    }))
  }
};

// Generate the TypeScript code to update the sampleData
const tsCode = `// Auto-generated commercial data
const commercialData = ${JSON.stringify(commercialData, null, 2)};

// Merge with existing sampleData
const updatedSampleData = {
  ...sampleData,
  commercial: {
    ...sampleData.commercial,
    datas: [
      ...sampleData.commercial.datas,
      ...commercialData.commercial.datas
    ]
  }
};`;

console.log('Copy the following code to update your Portfolio.tsx:');
console.log('\n' + tsCode + '\n');

// Also save to a file for reference
fs.writeFileSync(
  path.join(__dirname, 'commercial-data.ts'),
  tsCode,
  'utf-8'
);

console.log('Commercial data has been saved to commercial-data.ts');
