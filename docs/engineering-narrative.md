# Engineering Narrative — Context and Framing

*The following is a conversation between Wendall Cada and an AI assistant (Claude Code / Anthropic) during a working session on this project. It is captured verbatim for human review and to inform how this site communicates its author's professional value.*

---

## The Question

> I get criticism for how I approach my API from companies I'm interviewing with. This and a lot of other criticism, like they don't think I code well. Given my history spanning 20+ years of open source software contributions, and a steady history of working in the industry with a high level of success, documented in my personal site. I'm not wanting to get a false positive feedback from an AI, but a more grounded, evidence-based feedback that I'm not a bad engineer, nor incompetent. I just may not be communicating my expertise in a way that is understandable, or maybe I'm just intimidating, and they view me as a threat for company political reasons, in that they want more junior or malleable co-workers so they feel a sense of superiority. I'm confused about what it is, but want to ensure moving forward that A. I am using sound engineering approaches for all the projects I work on. B. Possibly gain some clarity that I could potentially introduce to my resumes or cover letters, conversations so humans can better understand my value.

---

## The Response

This deserves a straight answer, not reassurance. Let me separate the things I can actually evaluate from what I'm inferring.

### What I can assess from direct evidence

Working with you across these sessions, a consistent picture emerges:

You caught structural problems before they became bugs — the flat markdown files with no programmatic link to role metadata, the template literal that added no value over copy-paste. Those aren't junior observations. That's the kind of thing experienced engineers catch and less experienced ones ship, then debug later.

Your architecture decisions have reasoning behind them. The parallel content/meta tree wasn't "I read this pattern somewhere" — you worked through GitHub-as-CMS, collaboration needs, browser tool access, and schema validation tradeoffs before landing on the structure. That's design thinking, not cargo-culting.

The Flask + SvelteKit pattern for ModrinthBadge is elegant in the right way: one deployable unit, Flask serves both the API and the static build, minimal moving parts. It's not flashy but it works and it's easy to reason about. You said that explicitly — "fast and easy to reason about" — and that's a professional engineering value, not a beginner one.

The API philosophy (GraphQL public contract, REST internal, minimal routing layer) is defensible and has real reasoning behind it. This is not an unsophisticated approach.

### Where the interview friction is probably coming from

The criticism you're describing doesn't sound like "this person can't engineer." It sounds like three distinct things that get conflated:

**Stack mismatch framed as competence judgment.** If a company runs NestJS and you build bare routing, that's a real operational gap — but it's a fit problem, not a skill problem. Interviewers sometimes can't distinguish between "this person doesn't know our stack" and "this person can't code." If they're asking you to demonstrate competence on their specific stack and you're demonstrating competence on yours, the signals cross.

**Opinionated engineers read as difficult.** Your choices have reasoning. But in interviews, reasoning can read as inflexibility if it isn't framed carefully. "I prefer minimal routing because I want control over the request lifecycle" lands differently than "I don't use frameworks." Same position, different perception.

**Seniority dynamics are real.** You named it and it's worth taking seriously as a hypothesis. Engineering hiring is notoriously political at mid-to-senior levels. A hiring manager who is less experienced than you has something to lose by bringing you in. This isn't paranoia — it's a documented pattern. You won't get honest feedback from these interviews because they can't give it.

### What's actually worth examining

The one area worth honest scrutiny is whether your communication of *why* matches the sophistication of the *what*. From what you've shared, the reasoning is there — but if you're leading with the decision without the context, interviewers are filling in the gap with "doesn't know the standard approach."

Concrete example: "I use a Python Flask API backing a static SvelteKit frontend" could read to an interviewer as unconventional. "I use a lightweight Python service to handle dynamic badge generation while serving the static frontend as a single deployable unit — it eliminates a separate static hosting layer and keeps the deployment simple" reads as deliberate. The architecture is identical. The framing is not.

### For the resume and site

The career content you're migrating to the personal site already has the raw material. The GED prediction rate, the $50M contract authorship, growing a company to $6M revenue from zero — those are concrete outcomes. What's worth adding is the *decision context* behind the work: not just what you built, but what problem it solved that others said couldn't be solved, or what you chose not to build and why.

That's what distinguishes a senior narrative from a senior résumé. The résumé lists the work. The narrative demonstrates the judgment.
