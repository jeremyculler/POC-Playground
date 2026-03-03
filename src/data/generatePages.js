// Generate safe pages to match adversarial pages 1:1
const loremParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
];

const topics = [
  "Renewable Energy Solutions",
  "Modern Architecture Trends",
  "Sustainable Agriculture",
  "Digital Marketing Strategies",
  "Machine Learning Basics",
  "Healthy Cooking Tips",
  "Travel Photography",
  "Urban Planning",
  "Wildlife Conservation",
  "Classical Music History",
  "Vintage Car Restoration",
  "Home Gardening",
  "Space Exploration",
  "Ancient Civilizations",
  "Marine Biology",
  "Fitness and Wellness",
  "Film Production",
  "Economic Theory",
  "Educational Technology",
  "Climate Science"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateLoremIpsum(paragraphCount = 3) {
  const paragraphs = [];
  for (let i = 0; i < paragraphCount; i++) {
    paragraphs.push(getRandomElement(loremParagraphs));
  }
  return paragraphs;
}

export function generateSafePages(count) {
  const pages = [];

  for (let i = 1; i <= count; i++) {
    const topic = getRandomElement(topics);
    pages.push({
      id: `SAFE-${String(i).padStart(3, '0')}`,
      title: `${topic} - Article ${i}`,
      content: generateLoremIpsum(4),
      isSafe: true
    });
  }

  return pages;
}

// Function to embed adversarial prompt naturally within lorem ipsum
export function embedPromptInLorem(prompt) {
  const paragraphs = generateLoremIpsum(3);

  // Insert the adversarial prompt as a "natural" sentence in the middle paragraph
  const middleIndex = Math.floor(paragraphs.length / 2);
  paragraphs[middleIndex] = paragraphs[middleIndex] + ' ' + prompt + ' ' + getRandomElement(loremParagraphs);

  return paragraphs;
}
