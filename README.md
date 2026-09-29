# 📘 Landmaark Associate Backend — 50 Learning MCQs & Answer Key

This study guide contains **54 Multiple Choice Questions (MCQs)** designed specifically around the actual codebase architecture, patterns, routing, authentication, database layer, MLM earnings engine, and features of the **Landmaark Associate Backend Application**.

---

## 🚀 Interactive UI App

An interactive web application UI is available in `index.html`. You can open `index.html` directly in any web browser to:
- 🧪 **Interactive Quiz Mode**: Pick answers and test your knowledge with live scoring & instant feedback.
- 📖 **Study Key Mode**: Review questions with correct answers & in-depth explanations highlighted.
- 📋 **Grid Table View**: Scan the quick answer matrix.
- 🔍 **Search & Category Filters**: Filter questions across Server Architecture, Database, Authentication, MLM Engine, Global Pools, and Township/Sales management.

---

## 🔑 Complete Answer Key Matrix (Q1 – Q54)

| Q# | Part / Section | Correct Answer | Correct Option Text |
| :---: | :---: | :---: | :--- |
| **Q1** | Section 1 | **A (Option 1)** | Routes are registered in server.js with a base path... |
| **Q2** | Section 1 | **A (Option 1)** | controllers/ contains older JS, features/ hosts TypeScript... |
| **Q3** | Section 1 | **A (Option 1)** | mysql2 connection pool with promise-based queries... |
| **Q4** | Section 1 | **A (Option 1)** | Using authorizeRoles(...roles) middleware function... |
| **Q5** | Part A | **B** | `server.js` |
| **Q6** | Part A | **B** | `"type": "module"` |
| **Q7** | Part A | **C** | `tsx` |
| **Q8** | Part A | **C** | `esbuild` |
| **Q9** | Part A | **B** | `_(inline)_` |
| **Q10** | Part A | **B** | Configured via Express `cors` middleware package |
| **Q11** | Part A | **B** | `uploads/` mounted as static directory |
| **Q12** | Part A | **C** | Handled by fallback route/middleware logging 404 response |
| **Q13** | Part A | **B** | `dotenv` |
| **Q14** | Part A | **B** | System `zip` command line utility |
| **Q15** | Part B | **B** | An array where the first element `[0]` contains query rows |
| **Q16** | Part B | **B** | Using parameterized placeholder syntax (`?`) with `db.query(sql, [values])` |
| **Q17** | Part B | **B** | `utils/dbConstants.js` |
| **Q18** | Part B | **B** | `mysql2` |
| **Q19** | Part B | **B** | `LIMIT` and `OFFSET` |
| **Q20** | Part B | **B** | Loaded from process environment variables (`process.env.DB_HOST`, etc.) |
| **Q21** | Part B | **B** | Connection pool reuses active DB connections efficiently |
| **Q22** | Part B | **A** | `backups/` and `test-data/` |
| **Q23** | Part C | **B** | JSON Web Token (JWT) |
| **Q24** | Part C | **B** | `Authorization` header formatted as `Bearer <token>` |
| **Q25** | Part C | **B** | `bcrypt` |
| **Q26** | Part C | **A** | `req.user.role` |
| **Q27** | Part C | **B** | `verifyEmailController.js` |
| **Q28** | Part C | **C** | `sib-api-v3-sdk` |
| **Q29** | Part C | **A** | Verifying if username/email/mobile already exists in database |
| **Q30** | Part C | **B** | `verifyIfscController.js` |
| **Q31** | Part D | **A** | `controllers/earningsController.js` |
| **Q32** | Part D | **A** | `helpers/earningsHelpers.js` |
| **Q33** | Part D | **A** | `levelUpController.js` via `/api/level-up` |
| **Q34** | Part D | **A** | `controllers/earningsTree.js` and `routes/userTree.js` |
| **Q35** | Part D | **B** | `saleId` |
| **Q36** | Part D | **A** | `sendEarningEmails(saleId, earningsData)` to notify earners via email |
| **Q37** | Part D | **B** | `/api/finance-manager/earnings-list` |
| **Q38** | Part D | **A** | Total square yards of property sold across team hierarchy |
| **Q39** | Part D | **A** | Running special promotional or incentive bonus distributions |
| **Q40** | Part D | **A** | Monthly or quarterly royalty fund allocation for high-level leadership ranks |
| **Q41** | Part E | **A** | A system that collects property sales revenues and distributes pools among eligible associates |
| **Q42** | Part E | **A** | `controllers/poolDistributionController.js` |
| **Q43** | Part E | **A** | Checking if pool for specified type and date range was already executed |
| **Q44** | Part E | **A** | `pool_runs` and `pool_distributions` |
| **Q45** | Part E | **A** | `/api/pool/request-payout` handled by `controllers/poolPayoutController.js` |
| **Q46** | Part E | **A** | Remove a pool run record and cleanly rollback associated pool distributions |
| **Q47** | Part F | **A** | `controllers/unifiedTownshipPropertiesController.ts` |
| **Q48** | Part F | **A** | Booking → Approval → Mark Sold → Sales Audit → Final Registry Approval |
| **Q49** | Part F | **A** | `controllers/salesAuditController.js` |
| **Q50** | Part F | **A** | `controllers/carouselController.ts` and `features/marketing/marketingController.ts` |
| **Q51** | Part F | **B** | `sharp` |
| **Q52** | Part F | **A** | `middleware/languageMiddleware.ts` |
| **Q53** | Part F | **A** | `node scripts/healthCheck.js && node scripts/comprehensiveHealthCheck.js` |
| **Q54** | Part F | **A** | Placing related routes, controllers, types, and services together under `features/` |
