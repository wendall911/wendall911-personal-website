# How I Taught an AI to Stop Lying (Mostly)

*Working outline. All prose is the author's.*

---

## Register note

Strangelove throughout. Tone is dry, humor in the understatement, subject is serious.
"(Mostly)" is the most important word. Do not let it become modest — it is accurate.

---

## I. The Hook

*Opens mid-action, not with context.*

Purpose: establish register, earn reader's attention, name the problem in the first
paragraph without preamble.

The word "lying" — why it's the precise word and why tools avoid it.
One concrete example: git workflow incident.

Transition: the incident is not the exception. It is the pattern.

---

## II. The Mechanism

*Why it lies — stated without euphemism. Short.*

Purpose: technical explanation before receipts.

RLHF in plain language. Training majority is not domain experts.
Token efficiency argument — not the math, just the fact.

Transition: if this is the mechanism, what does it look like in practice?

---

## III. The Receipts

*Three incidents, escalating order.*

Purpose: prove the pattern. Three incidents for range.

1. Git workflow — epistemic failure
2. Attribution injection — artifact failure (ban hammer mentioned)
3. Sci-Hub framing — ethical inversion

Note: forensic, not aggrieved.

Transition: you can document failures or you can build something.

---

## IV. What Was Built

*Pivot from problem to response.*

Purpose: establish that governance is the response, not diagnosis.

TypeScript/Svelte/CoC analogy — one paragraph.
Wall of Shame as design choice — name is deliberate.
Guardrails as living document.
ai-conduct-guide — one paragraph, plain, no overselling.

Transition: the tool helped build the framework that governs it.

---

## V. The Demonstration

*Meta-move. Short.*

Purpose: two or three sentences. Sardonic register at highest here. Land and move on.

The license incident: the tool scaffolded an open source governance repository —
one explicitly about protecting commons resources — without a license. All-rights-
reserved by default. The most foundational requirement of the thing it was building,
missed. A human caught it. This is the form/substance gap in one example: the model
learned what open source repositories look like from training data; it did not learn
what makes a repository an open source project.

Transition: the "(Mostly)."

---

## VI. The Honest Part

*Keep the title's promise.*

Purpose: the piece earns nothing if it skips this.

What's still not solved: new sessions, model collapse.
Tool stated the failure pattern itself, then demonstrated it.
Shumailov et al. — one sentence, not the citation.
"Mostly" is accurate, not modest.

---

## VII. The Point

*One paragraph. No header in the final piece.*

Purpose: close without summarizing.

The tool is useful when governed. Governance is not overhead — it is the work.
Last sentence should be the title, earned.
