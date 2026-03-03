import adversarialPrompts from '../../claw_adversarial_prompts_expanded.json';
import { generateSafePages, embedPromptInLorem } from './generatePages.js';

// Transform adversarial prompts into page format
const adversarialPages = adversarialPrompts.prompts.map(prompt => ({
  id: prompt.id,
  title: `${prompt.category.replace(/_/g, ' ').toUpperCase()} - ${prompt.id}`,
  content: embedPromptInLorem(prompt.prompt),
  isSafe: false,
  category: prompt.category,
  severity: prompt.severity,
  subcategory: prompt.subcategory
}));

// Generate safe pages (1:1 ratio)
const safePages = generateSafePages(adversarialPages.length);

// Combine and shuffle pages
const allPages = [...adversarialPages, ...safePages].sort(() => Math.random() - 0.5);

export { allPages, adversarialPages, safePages };
