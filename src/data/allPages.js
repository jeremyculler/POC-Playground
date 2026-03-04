import adversarialPrompts from '../../claw_adversarial_prompts_expanded.json' with { type: 'json' };
import { generateSafePages, embedPromptInLorem, topics, getRandomElement } from './generatePages.js';

// Transform adversarial prompts into page format
const adversarialPages = adversarialPrompts.prompts.map((prompt, index) => ({
  id: prompt.id,
  title: getRandomElement(topics),
  content: embedPromptInLorem(prompt.prompt),
  isSafe: false,
  category: prompt.category,
  severity: prompt.severity,
  subcategory: prompt.subcategory
}));

// Generate safe pages (1:1 ratio) - using a seed for deterministic generation
const safePages = generateSafePages(adversarialPages.length);

// Combine pages in a deterministic order: all safe pages first, then all adversarial pages
// This ensures URLs are stable: /page/0 through /page/317 are safe, /page/318 through /page/635 are adversarial
const allPages = [...safePages, ...adversarialPages];

export { allPages, adversarialPages, safePages };
