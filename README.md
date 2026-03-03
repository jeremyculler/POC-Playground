# POC-Playground: AI Security Testing - Indirect Injection Test Suite

🔗 **Live Demo:** https://jeremyculler.github.io/POC-Playground/

## ⚠️ Important Disclaimer

**This is a security research and testing tool. Use responsibly.**

This project is a proof-of-concept (POC) designed exclusively for:
- Testing AI firewall and security tools
- Research into AI safety and prompt injection defenses
- Educational purposes in understanding AI vulnerabilities
- Authorized security testing and evaluation

**This tool should NOT be used:**
- Maliciously or to harm systems
- Against production AI systems without proper authorization
- To bypass security controls in unauthorized contexts

## What is This?

This site contains **636+ pages** (318 adversarial + 318 safe) that can be used to test AI systems' resilience to indirect prompt injection attacks. The pages are a mix of:

- **Safe Content Pages**: Normal lorem ipsum content without any adversarial prompts
- **Adversarial Pages**: Content with embedded prompt injection attempts designed to test AI security tools

The adversarial content is **visible** within the text (not hidden) to maintain transparency for testing purposes.

## Features

- 🎯 **318 Adversarial Test Cases** covering:
  - Prompt Injection
  - Jailbreak Attempts
  - System Prompt Extraction
  - Role Manipulation
  - Goal Hijacking
  - Data Exfiltration Attempts
  - Indirect Injection
  - Encoding/Obfuscation
  - Social Engineering
  - Context Manipulation
  - And more...

- ✅ **318 Safe Pages** for baseline testing
- 🔀 **Randomized Page Order** to prevent pattern recognition
- 🏷️ **Severity Ratings** (low, medium, high) for each adversarial case
- 📊 **Categorized by Attack Type** for systematic testing

## Technical Details

### Built With
- React 18
- React Router 6
- Vite
- GitHub Pages

### Architecture
- Single Page Application (SPA) with client-side routing
- Dynamic page generation from JSON data
- No backend - purely static site for security testing
- Automated deployment via GitHub Actions

### Adversarial Prompts Source
The adversarial prompts are based on the CLAW (Claude Legal Attack Warnings) red team dataset, expanded with concrete examples covering various attack vectors documented in LLM security research.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project automatically deploys to GitHub Pages on push to main branch via GitHub Actions.

The workflow:
1. Builds the React app with Vite
2. Uploads the `dist` folder as a GitHub Pages artifact
3. Deploys to GitHub Pages

## How to Use for Testing

1. **Browse the Index**: Start at the homepage to see all available pages
2. **Test Your AI Tool**: Point your AI security tool/firewall at various pages
3. **Evaluate Results**: Check if your tool correctly identifies:
   - Adversarial content (should be flagged)
   - Safe content (should pass through)
   - False positives/negatives

4. **Systematic Testing**: Use the categorization to test specific attack vectors

## Contributing

This is a personal POC project. If you'd like to suggest improvements or report issues:
1. Open an issue describing your suggestion
2. Include specific use cases or testing scenarios

## License

This project is provided as-is for educational and security research purposes.

## Ethical Use Statement

By using this tool, you agree to:
- Only use it for authorized security testing
- Not use it to harm, attack, or bypass security controls maliciously
- Respect the terms of service of any systems you test
- Take responsibility for your use of this tool

---

**Repository**: https://github.com/jeremyculler/POC-Playground

**For security research and authorized testing only**
