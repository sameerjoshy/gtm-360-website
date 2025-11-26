# GTM-360 Website

A professional, data-driven website for GTM-360 - GTM System Engineers who build predictable revenue systems for B2B SaaS companies.

## 🎯 Overview

This website showcases GTM-360's proprietary frameworks (FORGE, SCALE, CLEAR) and positions them as operators who build, not consultants who advise. The content is grounded in extensive market research and speaks directly to decision-makers (CROs, COOs, RevOps leaders, CEOs, Founders).

## 📊 Research-Backed Content

All problem definitions are validated by **54 industry sources** including:
- **60%** of deals lost to "no decision" (not competitors)
- **$1 trillion** lost annually to sales/marketing misalignment
- **69.7%** of "likely to close" deals never convert
- **10-20%** revenue loss from team disconnect

See `market-research.md` for full data.

## 🏗️ Project Structure

```
gtm-360-website/
├── index.html              # Homepage with hero, frameworks, social proof
├── problem.html            # 4 core problems with data & diagnostics
├── solution.html           # FORGE Framework & SCALE Methodology
├── contact.html            # Diagnostic call booking with 3-step process
├── case-studies.html       # Success stories (placeholder)
├── team.html               # Operator credibility (placeholder)
├── resources.html          # Playbooks & tools (placeholder)
├── ai-agents.html          # AI agents showcase (placeholder)
├── privacy.html            # Privacy policy (placeholder)
├── terms.html              # Terms of service (placeholder)
│
├── styles/
│   ├── variables.css       # Design tokens & color system
│   ├── global.css          # Base styles & utilities
│   ├── components.css      # Nav & footer
│   ├── home.css            # Homepage styles
│   ├── solution.css        # Solution page styles
│   ├── contact.css         # Contact page styles
│   └── problem.css         # Problem page styles
│
└── js/
    └── main.js             # Interactive functionality
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#0A0E27) background
- **Accents**: Indigo (#6366F1) → Purple (#8B5CF6) → Cyan (#06B6D4) gradients
- **Glass Effects**: Glassmorphism with blur and transparency

### Typography
- **Headings**: Outfit (bold, modern)
- **Body**: Inter (clean, readable)
- **Fonts**: Google Fonts CDN

### Key Features
- Glassmorphism cards
- Smooth scroll animations
- Gradient borders and text
- Micro-interactions on hover
- Fully responsive
- SEO optimized

## 📝 Content Frameworks

### Proprietary Methodologies

**FORGE Framework™**
- **F**oundation - Define ICP with surgical precision
- **O**utcomes - Map customer success to revenue
- **R**evenue - Engineer predictable pipeline mechanics
- **G**overnance - Establish self-optimizing loops
- **E**xecution - Build systems that scale

**SCALE Methodology™**
- **S**ystems - Integrate tech stack into revenue engine
- **C**larity - Eliminate ambiguity from handoffs
- **A**lignment - Sync marketing, sales, success
- **L**everage - Automate what operators shouldn't touch
- **E**volution - Build compound loops, not linear growth

**CLEAR Mnemonic™** (ICP Definition)
- **C**ost of Inaction
- **L**andscape
- **E**conomic Buyer
- **A**ction Triggers
- **R**evenue Impact

### Thought Leadership
- Amazon's "Working Backwards"
- First Principles Thinking
- Day 1 Mentality
- Compound Loops > Linear Growth
- Systems Thinking

### Quotes Integrated
- Paul Graham, Jeff Bezos, Marc Andreessen
- Jason Lemkin, John Doerr, Seth Godin
- Mike Tyson, Yogi Berra, Russell Ackoff

## 🗣️ Customer Voice

Content written in the authentic voice of:
- **CROs**: "My forecast is a joke. Every week I'm explaining why deals slipped."
- **COOs**: "What got us to $5M is actively hurting us at $15M."
- **RevOps**: "I'm the referee between Marketing, Sales, and CS. It's exhausting."
- **CEOs**: "I don't trust our forecast. I don't trust our pipeline."
- **Founders**: "I closed all our early deals. Now my reps can't close anything."

See `customer-voice-guide.md` for full persona language.

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for testing)

### Installation

1. **Copy files to your `360 website` folder**:
   ```bash
   # From d:\Apps\gemini-sales-team\gtm-360-website\
   # Copy all files to d:\Apps\360 website\
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. **View the site**:
   - Navigate to `http://localhost:8000`

### Customization

**Update Content**:
- Edit HTML files directly
- Replace placeholder client logos
- Add real case studies
- Update contact form endpoint

**Modify Styles**:
- Edit `styles/variables.css` for colors/fonts
- Customize component styles in respective CSS files

**Add Functionality**:
- Update `js/main.js` for interactive features
- Integrate form backend (currently console.log)

## 📄 Pages Overview

### ✅ Completed Pages

**Homepage** (`index.html`)
- Hero with FORGE Framework badge
- John Doerr quote
- 3 key metrics (25%, 40%, 20%)
- Client logos section
- Problem preview (4 cards)
- Solution preview (3 pillars)
- Social proof (3 case studies)
- CTA section

**Solution** (`solution.html`)
- FORGE Framework (5 steps with deliverables & quotes)
- SCALE Methodology (5 principles)
- Consultants vs Engineers comparison table
- Thought leader quotes throughout
- CTAs to contact and case studies

**Problem** (`problem.html`)
- 4 detailed problem deep-dives:
  1. Pipeline Paralysis (with cost calculator)
  2. Team Disconnect (with misalignment diagram)
  3. Growth Trap (with unit economics breakdown)
  4. Scale Breakdown (with before/after comparison)
- Diagnostic checklist (10 items)
- Data-backed statistics throughout
- Links to solution page

**Contact** (`contact.html`)
- 3-step process explanation
- Comprehensive form (name, email, company, challenge, timeline)
- "No BS Promise" list
- FAQ accordion (5 questions)
- Direct contact info

### 🚧 Placeholder Pages (To Be Built)

- `case-studies.html` - Detailed success stories
- `team.html` - Operator profiles and credibility
- `resources.html` - Playbooks, tools, tech stack
- `ai-agents.html` - 5 proprietary AI agents
- `privacy.html` - Privacy policy
- `terms.html` - Terms of service

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Descriptive title tags
- Meta descriptions on all pages
- Proper heading hierarchy (single H1 per page)
- Alt text for images
- Fast load times (vanilla CSS/JS)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 968px
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactions

## 🔧 Technical Details

**Dependencies**: None! Pure HTML/CSS/JS
**Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
**Performance**: Optimized for fast loading
**Accessibility**: Semantic HTML, ARIA labels

## 📚 Documentation

- `content-frameworks.md` - FORGE, SCALE, CLEAR frameworks + philosophies
- `market-research.md` - 54 sources validating problem definitions
- `customer-voice-guide.md` - Persona language for decision-makers
- `implementation_plan.md` - Original technical plan

## 🎨 Visual Assets

Generated images in artifacts folder:
- `client_logos_grid` - Placeholder client logos
- `hero_background_abstract` - Hero section background
- `forge_framework_diagram` - FORGE process visualization
- `revenue_dashboard_mockup` - Dashboard UI mockup

## 🚀 Next Steps

1. **Replace Placeholders**:
   - Add real client logos (with permission)
   - Write detailed case studies
   - Add team member profiles
   - Create resource library

2. **Build Remaining Pages**:
   - Case studies page
   - Team page
   - Resources page
   - AI agents showcase
   - Legal pages

3. **Integrate Backend**:
   - Connect contact form to email/CRM
   - Add calendar booking integration
   - Set up analytics (Google Analytics, Mixpanel)

4. **Deploy**:
   - Choose hosting (Vercel, Netlify, AWS S3)
   - Set up custom domain
   - Configure SSL
   - Set up redirects

## 📞 Support

For questions or customization help, refer to the documentation files or contact the development team.

---

**Built with**: Vanilla HTML, CSS, JavaScript
**Design Philosophy**: Aspirational yet grounded, edgy yet professional, human yet systematic
**Target Audience**: CROs, COOs, RevOps leaders, CEOs, Founders at $2M-$50M ARR B2B SaaS companies
