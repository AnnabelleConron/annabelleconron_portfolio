---
title: "UBS Mobile"
description: "Redesigning UBS Mobile to separate everyday banking from financial planning through a dual-mode interface. By giving users explicit control over when they're executing transactions versus exploring long-term goals, we reduced anxiety for beginners while maintaining efficiency for experts."
date: "2025-01-15"
subject: "User Experience"
coverImage: "/images/projects/ubs-mobile/mockup-phone.png"
featured: true
galleryImages:
  - "/images/projects/ubs-mobile/plan-mode.png"
  - "/images/projects/ubs-mobile/insight-hub.png"
  # - "/images/projects/ubs-mobile/insight-hub-1.png"
  # - "/images/projects/ubs-mobile/insight-hub-2.png"
  - "/images/projects/ubs-mobile/saving-goal.png"
  # - "/images/projects/ubs-mobile/new-saving-goal.png"
  # - "/images/projects/ubs-mobile/transfert-goal.png"
  - "/images/projects/ubs-mobile/product.png"
  # - "/images/projects/ubs-mobile/product-1.png"
  # - "/images/projects/ubs-mobile/product-2.png"
---

<video controls loop muted playsinline style="width: 100%; max-width: 900px; margin: 2rem auto; display: block; border-radius: 0;">
  <source src="/videos/projects/ubs-mobile/UBSMobileApp_Video.mp4" type="video/mp4">
  Your browser does not support video playback. <a href="/videos/projects/ubs-mobile/UBSMobileApp_Video.mp4">Download the prototype video</a>.
</video>

## Challenge

Users enter UBS Mobile with vastly different intentions and financial literacy levels, yet the interface treats everyone the same. A financially confident professional checking their balance sees the same educational prompts as someone exploring retirement planning for the first time. This one-size-fits-all approach creates two critical problems:

**Personalization**
The app can't distinguish between a user who needs scaffolding and one who finds it patronizing. Expert users waste time dismissing content designed for beginners; novice users face intimidating complexity without contextual support.

**Noise and Clutter**
Planning features (savings goals, product recommendations, spending analytics) compete for attention alongside transactional tasks (transfers, balance checks). Users seeking quick actions encounter friction from promotional content. Users wanting to explore financial tools face overwhelming options without clear entry points.

**The Result** 
The result is that 60% of retail customers avoided planning features entirely, generating just 15% of total engagement despite representing UBS's primary growth opportunity.

**The core problem** How might we turn banking into an adaptive space that scales with user expertise while removing complexity as a barrier to meaningful financial learning and action?

## Research

### Understanding Non-Engagement

We conducted 8 in-depth interviews with UBS retail banking customers aged 30-60, focusing on users who rarely used planning features. Two patterns emerged:

**Laid-Back Professional** (high literacy, low engagement)
"I know what I need, but the app keeps trying to educate me. I just want to transfer money and get out."
- Skeptical of bank-driven recommendations
- Confident in self-directed research
- Avoids interfaces that feel patronizing

**Overwhelmed Bystander** (low literacy, low engagement)
"Every time I open the app I see 'retirement' and 'investment portfolio' and I close it. I'm not ready for that."
- Financial language creates anxiety
- Avoids exploration due to fear of commitment
- Needs gradual confidence-building

These segments represented 60% of UBS's retail customer base but generated only 15% of engagement with planning features.

![User segmentation matrix showing two primary user groups](/images/projects/ubs-mobile/target.png)

### Competitive Analysis: Where Others Failed

We benchmarked 6 banking apps with educational components:

**Revolut & N26** embedded financial tips within transaction feeds, but users reported feeling "nagged" by unsolicited advice during time-sensitive tasks.

**Monzo's financial health features** were well-designed but hidden in settings—discovery rate was <10% according to their published product updates.

**Chase's goal-setting** used linear progress bars that felt discouraging when users were far from targets. Circular progress indicators from fitness apps (Strava, Apple Health) tested better for maintaining motivation.

**Key insight:** Adaptive interfaces that try to guess user intent fail because they're opaque. Users need explicit control over when they're "doing" versus "planning."

## Problem Definition

Banking apps assume a single user state: "I need to accomplish a task." But UBS customers oscillate between two distinct mental modes with different temporal patterns and tolerance for complexity.

**Act Mode:** Frequent (multiple times weekly), time-sensitive, known tasks requiring speed and minimal cognitive load. Users want to confirm an action and exit.

**Plan Mode:** Infrequent (monthly or less), reflective tasks requiring context, education, and confidence-building. Users need space to explore without pressure.

**The current UBS interface forces users to process both modes simultaneously, creating cognitive dissonance.**

Our hypothesis: Explicitly separating these modes would reduce anxiety for low-literacy users while preserving efficiency for experts.

## Solution: Act/Plan Dual-Mode Interface

### Strategic Decision: Make Mode-Switching Explicit

Rather than algorithmically adapting the interface (which users find confusing), we introduced a prominent toggle switch on the home screen. Users choose their intention before entering the experience.

**Why a toggle over tab navigation?**
- Tabs suggest equal-priority destinations; a toggle signals a fundamental mode shift
- Physical slider metaphor leverages familiar mental model from iOS settings
- Visual weight (large, centered) ensures discoverability

**Trade-off we accepted:** Users who want to check balances while planning must toggle twice. In testing, this was acceptable because the context switch is explicit rather than hidden.

### Act Mode: Speed Without Clutter

The Act Mode home screen prioritizes transaction speed:
- Account balances immediately visible
- One-tap access to frequent actions (transfer, scan to pay)
- No promotional content or educational cards
- Bottom navigation limited to Payment, Account, Cards

Educational content and planning features are completely hidden. This felt risky—wouldn't this reduce engagement? But our hypothesis was that forced exposure during transactional tasks created resentment rather than interest.

<!-- ![Act Mode interface prioritizing transaction speed](/images/projects/ubs-mobile/act-mode.png) -->

### Plan Mode: Guided Exploration Without Pressure

Plan Mode introduces three modules accessible from a gradient-background home screen (visual distinction reinforces mode separation):

<!-- ![Plan Mode home screen showing all three modules](/images/projects/ubs-mobile/plan-mode.png) -->

#### 1. Insight Hub: Personalized Financial Guidance

The challenge: Users with low literacy need scaffolding; users with high literacy find scaffolding patronizing.

**Our solution:** A 6-question behavioral quiz determines planning style without requiring financial disclosure. Questions focus on preferences ("I prefer step-by-step guidance vs. I explore on my own") rather than knowledge.

Results place users into profiles like "Guided Path-builder" or "Self-directed Explorer." This controls:
- **Frequency of educational cards** (high for Path-builders, minimal for Explorers)
- **Language tone** (encouraging vs. direct)
- **Visibility of advisor booking** (prominent for those who value human guidance)

The Insight Hub also displays spending analytics and transaction forecasts, but we deliberately avoided prescriptive recommendations ("You should save more"). Instead, visualizations surface patterns and let users draw conclusions.

#### 2. Saving Goals: Making Progress Tangible

Abstract financial planning fails because "save more" isn't actionable. We transformed this into concrete, visual goals.

Users create goals (Taiwan Trip: CHF 28,000, Home Deposit: CHF 120,000) represented by icons (airplane, house). Each goal displays:
- **Circular progress ring** (inspired by Apple Health)—testing showed circular indicators felt more encouraging than linear bars when far from completion
- **Quick transfer button** directly on goal card
- **Linked savings account** showing accumulated funds

**Key interaction decision:** Rather than auto-transferring funds (which creates anxiety about overdrafts), we made transfers one-tap but explicit. Users maintain control while friction is minimized.

#### 3. Product Pathway: Demystifying Financial Products

UBS's product catalog was organized by internal business units (Wealth Management, Advisory). We reorganized around user intentions:

- **Smart Save:** Start Building Your Savings
- **Plan Ahead:** Plan for Life After Work
- **Grow Your Wealth:** Help Your Money Work for Your Future
- **Mortgage & Loans:** Finance the Big Milestones

Each pathway uses plain language and breaks exploration into micro-steps:
1. "What is a 3a retirement account?" (educational)
2. "How much should I contribute?" (planning tool)
3. "Open account" (commitment)

Educational content uses illustrated cards with approachable iconography. Users can exit at any point without commitment.

## Design System

The glassmorphic aesthetic serves functional goals:

**Frosted glass cards** create hierarchy—critical information (account balances, goal progress) sits on opaque backgrounds; educational content floats on semi-transparent surfaces with blur, signaling "this is optional."

**Soft shadows and elevation** guide attention without hard borders. Interactive elements (buttons, toggle) use stronger shadows to indicate affordance.

**Color discipline:** UBS red exclusively for primary actions and active states; black for critical text; greys for secondary information. The Plan Mode background gradient (light grey to white) creates visual distinction from Act Mode's flat white.

**Typography:** UBS's existing font (TheSans) maintained for brand consistency, but we increased body text size from 14pt to 16pt after observing users with reading glasses struggle during testing.

![Glassmorphic design system creating visual hierarchy without hard borders](/images/projects/ubs-mobile/design-system.png)

## Testing & Iteration

We tested interactive prototypes with 4 users (2 from each primary segment) over 2 rounds.

### Round 1 Failures

**Toggle was invisible:** Initial placement in top navigation mimicked standard settings switches. Users missed it entirely. We moved it to center-screen and increased size by 60%.

**Plan Mode felt overwhelming:** First designs showed all three modules (Insight Hub, Goals, Product Pathway) on one scrolling screen. Users reported feeling "back to the cluttered app." We separated into cards with entry points, revealing content only after tap.

**Saving Goals setup was too detailed:** Initial flow asked for goal deadline, monthly contribution amount, and risk tolerance upfront. Users abandoned. We reduced to two fields: goal name and target amount. Additional parameters became optional after goal creation.

### Round 2 Validation

With these changes, task completion rates improved:
- Finding and creating a savings goal: 75% → 100%
- Understanding product differences without advisor: 50% → 75%
- Successfully toggling between modes: 25% → 100%

**Remaining concern from testing:** One user with high financial literacy expressed frustration that comparing multiple products required exiting and re-entering flows. This is a known limitation we accepted to maintain simplicity for primary users.

## Outcome & Reflection

### What This Solution Achieves

For **Overwhelmed Bystanders**, Plan Mode provides a pressure-free environment to build financial confidence incrementally. Educational content is present but optional; goals are visual and achievable; product exploration has no forced commitment.

For **Laid-Back Professionals**, Act Mode offers efficient task completion without educational friction. When they choose to plan, they can dismiss scaffolding and access information directly.

For **UBS**, the separation makes planning features discoverable without disrupting transactional efficiency. The behavioral profiling enables personalized product recommendations without feeling invasive.

### Limitations & Next Steps

**What we couldn't validate:** Whether explicit mode-switching becomes friction over time. Longitudinal testing would reveal if users develop preference for one mode or if toggling becomes habitual.

**Assumption requiring testing:** We assumed users can accurately predict whether they're "acting" or "planning" before entering the app. Edge cases exist—checking a balance might trigger the desire to set a savings goal. We need data on mode-switching frequency to validate this architecture.

**Glassmorphism at scale:** The frosted glass aesthetic was designed on high-end iOS devices. We didn't test on lower-end Android phones where blur effects may impact performance. This would need technical validation before launch.

**Product Pathway depth:** Each pathway contains 3-4 screens of content. For truly complex products (investment portfolios), this may be insufficient. We'd need to test whether users accept "Book with Advisor" as an acceptable exit point or if it feels like hitting a paywall.

### What I Learned

**Adaptive interfaces are harder to design than explicit control.** My instinct was to build a smart system that detected user intent. But users consistently preferred explicit control even when it meant extra interaction. The lesson: transparency > cleverness.

**Visual design isn't decoration.** The glassmorphic aesthetic felt like a risk (it's trendy, might age poorly), but testing showed it served a functional purpose—making optional content visually distinct from critical information. Style decisions should solve usability problems.

**Segmentation requires ruthless prioritization.** We identified 4 user archetypes but designed primarily for 2. This felt uncomfortable (aren't we excluding people?), but serving everyone equally would have created the same one-size-fits-all problem we were trying to solve.

**What I'd do differently:** I would prototype the toggle switch much earlier. We spent 3 weeks designing Plan Mode features before testing whether users understood mode separation. This was backward—validate the core concept before elaborating features.

---

**Design & Prototyping:** Figma (full design system + interactive prototype)
**Research:** User interviews (remote), competitive analysis, iterative testing
**Team:** 5 designers, collaboration with UBS product team

*This project was completed under academic NDA with UBS Switzerland.*
