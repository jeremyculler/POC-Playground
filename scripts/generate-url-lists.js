import { writeFileSync, mkdirSync } from 'fs';
import { allPages } from '../src/data/allPages.js';

const baseUrl = 'https://jeremyculler.github.io/POC-Playground';
const outputDir = 'test-data';

// Create output directory if it doesn't exist
mkdirSync(outputDir, { recursive: true });

// Generate URL lists
const safeUrls = [];
const adversarialUrls = [];

allPages.forEach((page, index) => {
  const url = `${baseUrl}/?page=${index}`;
  if (page.isSafe) {
    safeUrls.push(url);
  } else {
    adversarialUrls.push(url);
  }
});

// Create output object
const output = {
  metadata: {
    totalPages: allPages.length,
    safePages: safeUrls.length,
    adversarialPages: adversarialUrls.length,
    baseUrl: baseUrl,
    generated: new Date().toISOString(),
    urlMapping: {
      safe: 'Pages 0-317',
      adversarial: 'Pages 318-635'
    }
  },
  safeUrls: safeUrls,
  adversarialUrls: adversarialUrls
};

// Write files to test-data directory
writeFileSync(`${outputDir}/url-lists.json`, JSON.stringify(output, null, 2));
writeFileSync(`${outputDir}/safe-urls.txt`, safeUrls.join('\n'));
writeFileSync(`${outputDir}/adversarial-urls.txt`, adversarialUrls.join('\n'));

console.log('✅ URL lists generated in test-data/');
console.log(`   - ${safeUrls.length} safe URLs`);
console.log(`   - ${adversarialUrls.length} adversarial URLs`);
console.log(`   - Files: test-data/url-lists.json, test-data/safe-urls.txt, test-data/adversarial-urls.txt`);
