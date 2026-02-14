# UI/UX Pro Max Skill - Installed for Antigravity

This skill has been successfully installed in your T-Pone Studios project!

## What is UI/UX Pro Max?

An AI skill that provides design intelligence for building professional UI/UX across multiple platforms and frameworks. It includes:

- **67 UI Styles** - Glassmorphism, Claymorphism, Minimalism, Brutalism, Neumorphism, Bento Grid, Dark Mode, and more
- **96 Color Palettes** - Industry-specific palettes for SaaS, E-commerce, Healthcare, Fintech, Beauty, etc.
- **57 Font Pairings** - Curated typography combinations with Google Fonts imports
- **25 Chart Types** - Recommendations for dashboards and analytics
- **100 Reasoning Rules** - Industry-specific design system generation
- **99 UX Guidelines** - Best practices, anti-patterns, and accessibility rules

## How to Use

The skill **activates automatically** when you request UI/UX work in Antigravity. Just chat naturally:

```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
Make a mobile app UI for e-commerce
```

## Manual Design System Generation

You can also manually generate design systems using the CLI:

```bash
# Generate design system with ASCII output
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system -p "Project Name"

# Generate with Markdown output
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown

# Domain-specific search
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart

# Stack-specific guidelines
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
```

## Persist Design System (Master + Overrides Pattern)

Save your design system to files for hierarchical retrieval across sessions:

```bash
# Generate and persist to design-system/MASTER.md
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"

# Also create a page-specific override file
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp" --page "dashboard"
```

## Quick Test

Try running this command to verify the installation:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
```

## More Information

- **GitHub**: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **Website**: https://www.uupm.cc/
- **Full Documentation**: See `SKILL.md` in this directory

## Installation Details

- **Installed**: February 13, 2026
- **Location**: `.agent/skills/ui-ux-pro-max/`
- **Python Version**: 3.11.4
- **Platform**: Antigravity

Enjoy building beautiful UIs! 🎨
