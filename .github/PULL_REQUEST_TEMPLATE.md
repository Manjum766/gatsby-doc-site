## Summary
<!-- One paragraph: what changed and why. Link the related issue with "Closes #NNN". -->

Closes #

---

## Type of Change
<!-- Check all that apply. -->

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ Feature / enhancement (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to change)
- [ ] 📝 Documentation / content update
- [ ] 🔧 Chore / refactor / tooling (no production logic change)
- [ ] 🔒 Security fix

---

## Changes Made
<!-- Bullet-point the concrete changes introduced. Be specific enough that a reviewer can verify each point. -->

-
-
-

---

## Testing
<!-- Describe how this was tested. Include relevant commands, screenshots, or steps to reproduce. -->

- [ ] `npm run build` passes locally
- [ ] `npm run develop` — manual smoke test performed
- [ ] New/updated content renders correctly in the browser
- [ ] No broken links introduced
- [ ] Relevant unit/integration tests added or updated (if applicable)

---

## Security Checklist
<!-- Required for any change touching auth, data handling, dependencies, or external integrations. -->

- [ ] No secrets, API keys, or credentials committed
- [ ] No new third-party dependencies without security review
- [ ] User-supplied input is sanitised before rendering
- [ ] CSP / security headers are unchanged or intentionally tightened

---

## Enterprise Standards Checklist
<!-- Every PR must satisfy all items before merge. -->

- [ ] PR title follows `type(scope): short description` (Conventional Commits)
- [ ] Branch name follows `type/NNN-short-description` convention
- [ ] Commits are atomic and have meaningful messages
- [ ] No commented-out code left behind
- [ ] No `console.log` / debug statements in production paths
- [ ] Accessibility: new UI components meet WCAG 2.1 AA (keyboard nav, alt text, colour contrast)
- [ ] Performance: no unnecessary re-renders or large static assets added without optimisation
- [ ] Gatsby `gatsby-config.js` / `gatsby-node.js` changes reviewed for build impact
- [ ] `CHANGELOG.md` updated (for user-facing changes)
- [ ] Reviewed by at least **one** other team member

---

## Screenshots / Recordings
<!-- For UI changes, add before/after screenshots or a short screen recording. -->

| Before | After |
|--------|-------|
|        |       |

---

## Deployment Notes
<!-- Any special steps needed during or after deployment? DB migrations, env-var changes, cache busts, etc. -->

None

---

## Reviewer Notes
<!-- Anything specific you want reviewers to focus on or questions you want answered. -->

