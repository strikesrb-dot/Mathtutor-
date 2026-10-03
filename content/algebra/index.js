// Algebra 1 — Khan Academy's course order, checked against NJ's 2023 Algebra 1 framework.
// Add each unit file here as it is written (keep them in unit order), then run: node tools/sync-preload.mjs
import u01 from './u01.js';
import u02 from './u02.js';
import u03 from './u03.js';
import u04 from './u04.js';
import u05 from './u05.js';
import u09 from './u09.js';

export default { subject: 'algebra', name: 'Algebra 1', units: [u01, u02, u03, u04, u05, u09] };
