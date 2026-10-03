// Unit 2 — Solving equations & inequalities. NJ: A.REI.A.1, A.REI.B.3, A.CED.A.1, A.CED.A.4
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).

export default {
  id: 'a02', n: 2, title: 'Solving equations & inequalities', nj: ['A.REI.A.1', 'A.REI.B.3', 'A.CED.A.1', 'A.CED.A.4'],
  lessons: [
    {
      key: 'a02-01',
      title: 'Linear equations with variables on both sides',
      videos: [
        { id: 'vkhYFml0w6c', title: 'Why we do the same thing to both sides' },
        { id: 'f15zA0PhSek', title: 'Intro to equations with variables on both sides' },
        { id: 'CGS0vihzSlc', title: 'Example: variables on both sides' },
      ],
      learn: `
        <p>Sometimes the <b>variable</b> (the letter that stands for an unknown number) shows up on <b>both sides</b> of the equal sign, like 5x + 3 = 2x + 12.</p>
        <p>Think of an equation as a balance scale. Whatever you do to one side, you must do to the other side, or the scale tips over.</p>
        <p><b>The plan:</b></p>
        <ol>
          <li>Move the <b>x-terms</b> (the parts that have an x) to one side. Subtract the smaller x-term from both sides.</li>
          <li>Move the <b>constants</b> (plain numbers with no letter) to the other side.</li>
          <li>Divide to get x by itself.</li>
          <li>Check: put your answer back into the original equation.</li>
        </ol>
        <p><b>Worked example:</b> 5x + 3 = 2x + 12</p>
        <ul>
          <li>Subtract 2x from both sides: 3x + 3 = 12</li>
          <li>Subtract 3 from both sides: 3x = 9</li>
          <li>Divide both sides by 3: x = 3</li>
          <li>Check: 5(3) + 3 = 18 and 2(3) + 12 = 18. Both sides match!</li>
        </ul>
        <p><b>Tip:</b> moving the smaller x-term keeps the number in front of x positive, so you make fewer sign mistakes.</p>`,
      quiz: [
        { q: 'Solve: 5x + 3 = 2x + 12', c: ['x = 3', 'x = 5', 'x = 9', 'x = 9/7'], why: 'Subtract 2x: 3x + 3 = 12. Subtract 3: 3x = 9. Divide by 3: x = 3.' },
        { q: 'Solve: 7x − 4 = 3x + 16', c: ['x = 5', 'x = 3', 'x = 2', 'x = 20'], why: 'Subtract 3x: 4x − 4 = 16. Add 4: 4x = 20. Divide by 4: x = 5.' },
        { q: 'What is a correct first step to solve 6x + 5 = 2x + 21?', c: ['Subtract 2x from both sides', 'Subtract 2x from the left side only', 'Subtract 5 from the right side only', 'Divide the 6x by 6 and leave the rest alone'], why: 'Every move has to happen to BOTH sides, or the equation stops being balanced.' },
        { q: 'Solve: 2x + 9 = 5x − 6', c: ['x = 5', 'x = −5', 'x = 1', 'x = 15'], why: 'Subtract 2x: 9 = 3x − 6. Add 6: 15 = 3x. Divide by 3: x = 5.' },
        { q: 'Solve: 4x − 7 = 6x + 5', c: ['x = −6', 'x = 6', 'x = −1', 'x = −12'], why: 'Subtract 4x: −7 = 2x + 5. Subtract 5: −12 = 2x. Divide by 2: x = −6.' },
        { q: 'Is x = 4 a solution of 3x + 2 = x + 10?', c: ['Yes — both sides equal 14', 'Yes — both sides equal 12', 'No — the left side is bigger', 'No — x has to be 8'], why: '3(4) + 2 = 14 and 4 + 10 = 14. The sides match, so x = 4 works.' },
        { q: 'Solve: 9 − 2x = 3x − 1', c: ['x = 2', 'x = 10', 'x = −2', 'x = 8/5'], why: 'Add 2x: 9 = 5x − 1. Add 1: 10 = 5x. Divide by 5: x = 2.' },
        { q: 'Solve: x + 12 = 4x', c: ['x = 4', 'x = 3', 'x = 12/5', 'x = −4'], why: 'Subtract x: 12 = 3x. Divide by 3: x = 4.' },
        { q: 'Solve: 1.5x + 2 = 0.5x + 7', c: ['x = 5', 'x = 2.5', 'x = 9', 'x = −5'], why: 'Subtract 0.5x: x + 2 = 7. Subtract 2: x = 5.' },
        { q: 'Omar has $40 and saves $5 a week. Bilal has $10 and saves $8 a week. After how many weeks will they have the same amount?', c: ['10 weeks', '30 weeks', '3 weeks', '6 weeks'], why: '40 + 5w = 10 + 8w. Subtract 5w and 10: 30 = 3w, so w = 10.' },
        { q: 'Which equation has the same solution as 8x + 1 = 5x + 13?', c: ['3x + 1 = 13', '13x + 1 = 13', '3x = 14', '8x = 5x + 14'], why: 'Subtracting 5x from both sides gives 3x + 1 = 13. Both equations have x = 4.' },
        { q: 'Why do we subtract 2x from BOTH sides of an equation?', c: ['To keep both sides equal, like a balanced scale', 'Because the left side is always bigger', 'Because subtracting only works on the left side', 'Because 2x is always the answer'], why: 'An equation is a balance. Changing only one side would make it false.' },
      ],
      realLife: {
        text: `<p>"Catch-up" problems use variables on both sides. Each side shows one person's total.</p>
          <ul><li><b>Games:</b> your cousin has 200 coins and earns 30 a day. You have 50 coins and earn 45 a day. 200 + 30d = 50 + 45d gives 150 = 15d, so d = 10. After 10 days you are tied.</li>
          <li><b>Saving:</b> two friends save for the same bike at different weekly amounts. The equation tells you the week their totals match.</li>
          <li><b>Phone plans:</b> one plan costs more up front but less each month. The equation shows the month they cost the same.</li></ul>`,
        prompt: 'Make up your own catch-up problem with two people saving or earning at different speeds. Write the equation and explain what your answer means.',
      },
    },
    {
      key: 'a02-02',
      title: 'Linear equations with parentheses',
      videos: [
        { id: 'YZBStgZGyDY', title: 'Solving equations with the distributive property' },
        { id: 'mmg6wFPMdH8', title: 'Reasoning with linear equations' },
      ],
      learn: `
        <p>Parentheses group things together. To get rid of them, use the <b>distributive property</b> (multiply the number outside by <b>every</b> term inside). A <b>term</b> is a number, a letter, or a number times a letter.</p>
        <ul>
          <li>3(x + 4) = 3x + 12</li>
          <li>−2(x − 5) = −2x + 10 (a negative times a negative is positive)</li>
          <li>−(x + 3) = −x − 3 (a minus sign out front flips every sign inside)</li>
        </ul>
        <p><b>The plan:</b></p>
        <ol>
          <li>Distribute to clear the parentheses.</li>
          <li>Combine <b>like terms</b> (terms with the same letter part, like 2x and 5x) on each side.</li>
          <li>Solve like before: x-terms on one side, numbers on the other.</li>
        </ol>
        <p><b>Worked example:</b> 3(x + 4) = 2x + 17</p>
        <ul>
          <li>Distribute: 3x + 12 = 2x + 17</li>
          <li>Subtract 2x from both sides: x + 12 = 17</li>
          <li>Subtract 12 from both sides: x = 5</li>
          <li>Check: 3(5 + 4) = 27 and 2(5) + 17 = 27. It works!</li>
        </ul>
        <p><b>Most common mistake:</b> multiplying only the first term, like writing 3(x + 4) as 3x + 4.</p>`,
      quiz: [
        { q: 'Solve: 3(x + 4) = 2x + 17', c: ['x = 5', 'x = 13', 'x = 1', 'x = −5'], why: 'Distribute: 3x + 12 = 2x + 17. Subtract 2x: x + 12 = 17. Subtract 12: x = 5.' },
        { q: 'Distribute: −2(x − 5) = ?', c: ['−2x + 10', '−2x − 10', '−2x − 5', '2x + 10'], why: '−2 times x is −2x. −2 times −5 is +10.' },
        { q: 'Solve: 4(x − 2) = 20', c: ['x = 7', 'x = 3', 'x = 5.5', 'x = 28'], why: 'Distribute: 4x − 8 = 20. Add 8: 4x = 28. Divide by 4: x = 7.' },
        { q: 'Solve: 5(x + 1) = 3(x + 7)', c: ['x = 8', 'x = 3', 'x = 16', 'x = 2'], why: '5x + 5 = 3x + 21. Subtract 3x: 2x + 5 = 21. Subtract 5: 2x = 16, so x = 8.' },
        { q: 'Solve: −(x + 3) = 2x + 9', c: ['x = −4', 'x = −2', 'x = 4', 'x = −12'], why: '−x − 3 = 2x + 9. Add x: −3 = 3x + 9. Subtract 9: −12 = 3x, so x = −4.' },
        { q: 'Solve: 2(3x − 1) + 4 = 20', c: ['x = 3', 'x = 17/6', 'x = 13/3', 'x = 18'], why: '6x − 2 + 4 = 20, so 6x + 2 = 20. Subtract 2: 6x = 18. Divide by 6: x = 3.' },
        { q: 'Solve: 7 − 2(x − 3) = 1', c: ['x = 6', 'x = 0', 'x = 16/5', 'x = −6'], why: '7 − 2x + 6 = 1, so 13 − 2x = 1. Subtract 13: −2x = −12. Divide by −2: x = 6.' },
        { q: 'After distributing, what does 3(x − 4) = 15 become?', c: ['3x − 12 = 15', '3x − 4 = 15', '3x + 12 = 15', 'x − 12 = 15'], why: 'Multiply 3 by BOTH terms: 3 · x = 3x and 3 · (−4) = −12.' },
        { q: 'Solve: 0.5(4x + 6) = 11', c: ['x = 4', 'x = 2.5', 'x = 7', 'x = 8'], why: 'Half of 4x is 2x, half of 6 is 3: 2x + 3 = 11. So 2x = 8 and x = 4.' },
        { q: 'A rectangle is (x + 3) cm long and 4 cm wide. Its area is 36 cm², so 4(x + 3) = 36. What is x?', c: ['x = 6', 'x = 9', 'x = 33/4', 'x = 24'], why: '4x + 12 = 36. Subtract 12: 4x = 24. Divide by 4: x = 6.' },
        { q: 'Solve: 3(2x + 1) = 4x + 13', c: ['x = 5', 'x = 6', 'x = 1', 'x = 10'], why: '6x + 3 = 4x + 13. Subtract 4x: 2x + 3 = 13. Subtract 3: 2x = 10, so x = 5.' },
        { q: 'Yusuf solved 2(x + 5) = 18 like this: 2x + 5 = 18, so 2x = 13, so x = 6.5. What went wrong?', c: ['He forgot to multiply the 5 by 2', 'He should have subtracted 2 first', 'He divided by the wrong number', 'Nothing — x = 6.5 is right'], why: '2(x + 5) is 2x + 10, not 2x + 5. Then 2x = 8, so x = 4.' },
      ],
      realLife: {
        text: `<p>Parentheses show up whenever the same group is bought or repeated several times.</p>
          <ul><li><b>Food order:</b> 3 meals, each a sandwich costing x dollars plus a $2 juice, cost 3(x + 2). If the total is $27, then 3x + 6 = 27, so x = 7. Each sandwich is $7.</li>
          <li><b>Team jerseys:</b> 5 players each pay for a jersey plus $4 to print their name. The total is 5(j + 4).</li>
          <li><b>Garden fence:</b> the fence around a rectangle is 2 times (length + width).</li></ul>`,
        prompt: 'Your family orders 4 plates of chicken over rice, each with a $3 drink, and pays $52 total. Write an equation with parentheses and find the price of one plate.',
      },
    },
    {
      key: 'a02-03',
      title: 'Analyzing the number of solutions',
      videos: [
        { id: 'qsL_5Y8uWPU', title: 'Number of solutions to linear equations' },
        { id: 'uQs100shv-A', title: 'Number of solutions to linear equations, example 2' },
      ],
      learn: `
        <p>Most equations have <b>one solution</b> (one number that makes it true). But some have <b>no solution</b>, and some have <b>infinitely many solutions</b> (every number works).</p>
        <p>Solve like normal and watch what happens to x:</p>
        <ul>
          <li>You end with x = a number. That is <b>one solution</b>.</li>
          <li>The x's cancel out and you get something false, like 6 = 5. That is <b>no solution</b>.</li>
          <li>The x's cancel out and you get something always true, like 6 = 6. That is <b>infinitely many solutions</b>.</li>
        </ul>
        <p><b>Shortcut:</b> simplify each side to look like (number)x + (number). Then compare the <b>coefficients</b> (the numbers in front of x).</p>
        <ul>
          <li>Different coefficients: one solution.</li>
          <li>Same coefficients, different plain numbers: no solution.</li>
          <li>Both sides exactly the same: infinitely many.</li>
        </ul>
        <p><b>Worked example:</b> 2(x + 3) = 2x + 6</p>
        <ul>
          <li>Distribute: 2x + 6 = 2x + 6</li>
          <li>Subtract 2x from both sides: 6 = 6. Always true, so every number works.</li>
          <li>If the right side were 2x + 5 instead, you would get 6 = 5. That is never true, so no solution.</li>
        </ul>
        <p><b>Watch out:</b> 0 = 0 does NOT mean x = 0. It means every number works.</p>`,
      quiz: [
        { q: 'How many solutions does 3x + 4 = 3x + 7 have?', c: ['No solution', 'One solution', 'Infinitely many solutions', 'x = 3'], why: 'Subtract 3x: 4 = 7. That is never true, so no number works.' },
        { q: 'How many solutions does 2(x + 5) = 2x + 10 have?', c: ['Infinitely many solutions', 'No solution', 'One solution: x = 0', 'One solution: x = 10'], why: 'Distribute: 2x + 10 = 2x + 10. Both sides are identical, so every number works.' },
        { q: 'How many solutions does 5x − 1 = 2x + 8 have?', c: ['One solution: x = 3', 'No solution', 'Infinitely many solutions', 'One solution: x = 7/3'], why: 'The coefficients 5 and 2 are different. 3x − 1 = 8, so 3x = 9 and x = 3.' },
        { q: 'You simplify an equation and get 4 = 9. What does that mean?', c: ['There is no solution', 'x = 5', 'Every number is a solution', 'x = 9/4'], why: '4 = 9 is false no matter what x is, so nothing works.' },
        { q: 'You simplify an equation and get 0 = 0. What does that mean?', c: ['Every number is a solution', 'The answer is x = 0', 'There is no solution', 'There is exactly one solution'], why: '0 = 0 is always true, so any x works. It does not mean x = 0.' },
        { q: 'How many solutions does 4(x − 1) = 4x − 1 have?', c: ['No solution', 'Infinitely many solutions', 'One solution: x = 1', 'One solution: x = 0'], why: 'Distribute: 4x − 4 = 4x − 1. Subtract 4x: −4 = −1. False, so no solution.' },
        { q: 'How many solutions does 6x + 2 = 2(3x + 1) have?', c: ['Infinitely many solutions', 'No solution', 'One solution: x = 0', 'One solution: x = 1'], why: '2(3x + 1) = 6x + 2. Both sides match exactly, so every number works.' },
        { q: 'Which equation has NO solution?', c: ['x + 5 = x + 8', 'x + 5 = 2x + 8', '2x + 5 = 2x + 5', 'x + 5 = 8'], why: 'Same x on both sides but different numbers: 5 = 8 is false.' },
        { q: 'Which equation has infinitely many solutions?', c: ['3(x + 2) = 3x + 6', '3(x + 2) = 3x + 2', '3x + 2 = 2x + 3', '3(x + 2) = 6'], why: '3(x + 2) is 3x + 6, so both sides are exactly the same.' },
        { q: 'What number in the blank makes 5x + 2 = 5x + ___ have infinitely many solutions?', c: ['2', '5', '0', '7'], why: 'With 2, both sides are 5x + 2, so every x works. Any other number gives no solution.' },
        { q: '□x + 1 = 3x + 7 has NO solution. What number goes in the box?', c: ['3', '1', '7', '−3'], why: 'With 3, you get 3x + 1 = 3x + 7, which becomes 1 = 7. Never true.' },
        { q: 'Plan A costs $20 plus $5 per GB. Plan B costs $15 plus $5 per GB. When do they cost the same?', c: ['Never — same rate, different starting cost', 'At 5 GB', 'At 1 GB', 'Always — both charge $5 per GB'], why: '20 + 5g = 15 + 5g becomes 20 = 15, which is false. Plan A always costs $5 more.' },
      ],
      realLife: {
        text: `<p>The number of solutions tells you if two things will ever be equal.</p>
          <ul><li><b>One solution:</b> two runners go at different speeds. The faster one catches up at one exact moment.</li>
          <li><b>No solution:</b> two cars drive at the same speed, but one starts 10 miles ahead. The back car never catches up. Same rate, different start.</li>
          <li><b>Infinitely many:</b> you and your friend both start with $20 and save $5 a week. You are tied every single week, forever.</li></ul>`,
        prompt: 'Two phone plans both charge $10 per month, but one has a $40 sign-up fee and the other has none. Will they ever cost the same total? Explain why.',
      },
    },
    {
      key: 'a02-04',
      title: 'Linear equations with unknown coefficients',
      videos: [
        { id: 'fnuIT7EhAvs', title: 'Solving for a variable' },
      ],
      learn: `
        <p>Sometimes an equation has extra letters, like a, b, or k, standing in for numbers we don't know yet. These are <b>unknown coefficients</b> (a coefficient is the number in front of a variable). You can still solve for x. Just treat the other letters like regular numbers.</p>
        <p><b>The plan:</b></p>
        <ol>
          <li>Move every term with x to one side. Move everything else to the other side.</li>
          <li>If there are two x-terms, <b>factor</b> out x (pull the x out front): ax + 2x = x(a + 2).</li>
          <li>Divide both sides by whatever is multiplying x.</li>
        </ol>
        <p><b>Worked example:</b> solve ax + 2x = 10 for x.</p>
        <ul>
          <li>Factor out x: x(a + 2) = 10</li>
          <li>Divide both sides by (a + 2): x = 10/(a + 2)</li>
          <li>Check with a real number. If a = 3, the equation is 3x + 2x = 10, so 5x = 10 and x = 2. The answer formula gives 10/(3 + 2) = 2. It matches!</li>
        </ul>
        <p><b>Careful:</b> you can never divide by 0. In this example, a cannot be −2, because then a + 2 = 0.</p>`,
      quiz: [
        { q: 'Solve for x: ax + 3 = 11', c: ['x = 8/a', 'x = 8 − a', 'x = 14/a', 'x = a/8'], why: 'Subtract 3: ax = 8. Divide both sides by a: x = 8/a.' },
        { q: 'Solve for x: ax = b + 5', c: ['x = (b + 5)/a', 'x = b + 5 − a', 'x = a/(b + 5)', 'x = b/a + 5'], why: 'Divide the WHOLE right side by a, not just the b.' },
        { q: 'Solve for x: ax + 2x = 10', c: ['x = 10/(a + 2)', 'x = 10/a − 2', 'x = 10/(2a)', 'x = 10 − a − 2'], why: 'Factor out x: x(a + 2) = 10. Divide by (a + 2).' },
        { q: 'Solve for x: 3x − c = 9', c: ['x = (9 + c)/3', 'x = (9 − c)/3', 'x = 3 + c', 'x = 3(9 + c)'], why: 'Add c: 3x = 9 + c. Divide the whole right side by 3.' },
        { q: 'You solved ax + 3 = 11 and got x = 8/a. If a = 4, what is x?', c: ['x = 2', 'x = 3.5', 'x = 4', 'x = 32'], why: '8/4 = 2. Check: 4(2) + 3 = 11.' },
        { q: 'Solve for x: ax − bx = 6', c: ['x = 6/(a − b)', 'x = 6/(a + b)', 'x = 6/a − b', 'x = 6 − a + b'], why: 'Factor out x: x(a − b) = 6. Divide by (a − b).' },
        { q: 'Solve for x: kx + 5 = 2x + 9', c: ['x = 4/(k − 2)', 'x = 4/(k + 2)', 'x = 14/(k − 2)', 'x = 4/k − 2'], why: 'Subtract 2x and 5: kx − 2x = 4. Factor: x(k − 2) = 4. Divide by (k − 2).' },
        { q: 'In ax + 2x = 10, which value of a is NOT allowed?', c: ['a = −2', 'a = 2', 'a = 0', 'a = 10'], why: 'a = −2 makes a + 2 = 0, and you cannot divide by 0. The equation becomes 0 = 10.' },
        { q: 'Factoring x out of ax + 3x gives…', c: ['x(a + 3)', '3ax', 'x + a + 3', '(a + 3)/x'], why: 'Both terms have an x, so pull it out front: x(a + 3).' },
        { q: 'Solve for x: 5x + b = c', c: ['x = (c − b)/5', 'x = (c + b)/5', 'x = c/5 − b', 'x = 5(c − b)'], why: 'Subtract b: 5x = c − b. Divide the whole right side by 5.' },
        { q: 'If a = 6, what value of x solves ax + 2x = 24?', c: ['x = 3', 'x = 4', 'x = 12', 'x = 18'], why: '6x + 2x = 8x, and 8x = 24, so x = 3. The formula 24/(6 + 2) agrees.' },
        { q: 'Solve for x: ax = bx + 7', c: ['x = 7/(a − b)', 'x = 7/(a + b)', 'x = 7/(b − a)', 'x = 7 − a + b'], why: 'Subtract bx: ax − bx = 7. Factor: x(a − b) = 7. Divide by (a − b).' },
      ],
      realLife: {
        text: `<p>Solving with letters gives you a shortcut that works for <b>any</b> number.</p>
          <p>Say every ticket costs a dollars, there is a $5 booking fee, and you have $35. The equation is ax + 5 = 35, so x = 30/a tickets.</p>
          <ul><li>Tickets cost $3? Then x = 30/3 = 10 tickets.</li>
          <li>Tickets cost $6? Then x = 30/6 = 5 tickets.</li></ul>
          <p>You solved it once, and now you can plug in any price. Apps and spreadsheets do this all the time.</p>`,
        prompt: 'Explain in your own words why solving ax + 5 = 35 for x one time is faster than solving a new equation for every ticket price.',
      },
    },
    {
      key: 'a02-05',
      title: 'Rearranging formulas',
      videos: [
        { id: 'eTSVTTg_QZ4', title: 'Rearrange formulas to isolate specific variables' },
        { id: 'Aig1hkq3OsU', title: 'Example: solving for a variable' },
      ],
      learn: `
        <p>A <b>formula</b> (a rule that connects different amounts, like distance, speed, and time) can be rearranged to find any letter in it. This is called <b>isolating</b> a variable (getting that one letter alone on one side).</p>
        <p>Use the same moves as in equations. Undo adding with subtracting. Undo multiplying with dividing. Do the same thing to both sides.</p>
        <p><b>Example 1:</b> d = rt means distance = rate (speed) × time. To find t, divide both sides by r: <b>t = d/r</b>. Driving 120 miles at 60 miles per hour takes 120/60 = 2 hours.</p>
        <p><b>Worked example 2:</b> the <b>perimeter</b> (distance all the way around) of a rectangle is P = 2l + 2w. Solve for l.</p>
        <ul>
          <li>Subtract 2w from both sides: P − 2w = 2l</li>
          <li>Divide both sides by 2: l = (P − 2w)/2</li>
          <li>Check: if P = 20 and w = 3, then l = (20 − 6)/2 = 7. And 2(7) + 2(3) = 14 + 6 = 20. Correct!</li>
        </ul>
        <p><b>Tip:</b> undo things in reverse order. Whatever was done to your letter last, undo it first.</p>`,
      quiz: [
        { q: 'The area of a rectangle is A = lw. Solve for w.', c: ['w = A/l', 'w = A − l', 'w = Al', 'w = l/A'], why: 'w is multiplied by l, so divide both sides by l.' },
        { q: 'Distance is d = rt. Solve for t.', c: ['t = d/r', 't = dr', 't = d − r', 't = r/d'], why: 't is multiplied by r, so divide both sides by r.' },
        { q: 'Perimeter is P = 2l + 2w. Solve for l.', c: ['l = (P − 2w)/2', 'l = P − 2w', 'l = (P + 2w)/2', 'l = P/2 − 2w'], why: 'Subtract 2w: P − 2w = 2l. Then divide the whole left side by 2.' },
        { q: 'A car goes 150 miles at 50 miles per hour. Using t = d/r, how long does it take?', c: ['3 hours', '100 hours', '1/3 of an hour', '7,500 hours'], why: 't = 150/50 = 3 hours.' },
        { q: 'A rectangle has an area of 48 square feet and a length of 8 feet. What is its width?', c: ['6 feet', '40 feet', '384 feet', '16 feet'], why: 'w = A/l = 48/8 = 6 feet. Check: 8 × 6 = 48.' },
        { q: 'Solve y = mx + b for b.', c: ['b = y − mx', 'b = y + mx', 'b = y/(mx)', 'b = mx − y'], why: 'mx is added to b, so subtract mx from both sides.' },
        { q: 'Solve y = mx + b for x.', c: ['x = (y − b)/m', 'x = y/m − b', 'x = (y + b)/m', 'x = m(y − b)'], why: 'Subtract b first: y − b = mx. Then divide the whole left side by m.' },
        { q: 'A rectangle has a perimeter of 30 m and a width of 5 m. Use l = (P − 2w)/2 to find the length.', c: ['10 m', '12.5 m', '20 m', '25 m'], why: 'l = (30 − 2 · 5)/2 = (30 − 10)/2 = 20/2 = 10 m.' },
        { q: 'Temperature: F = 9/5 × C + 32. Solve for C.', c: ['C = 5/9 × (F − 32)', 'C = 5/9 × F − 32', 'C = 9/5 × (F − 32)', 'C = 5/9 × (F + 32)'], why: 'Undo the +32 first: F − 32. Then undo × 9/5 by multiplying by 5/9.' },
        { q: 'The area of a triangle is A = (1/2)bh. Solve for h.', c: ['h = 2A/b', 'h = A/(2b)', 'h = 2A − b', 'h = Ab/2'], why: 'Multiply both sides by 2: 2A = bh. Then divide both sides by b.' },
        { q: 'To solve d = rt for r, what do you do to both sides?', c: ['Divide by t', 'Multiply by t', 'Subtract t', 'Divide by d'], why: 'r is multiplied by t, so dividing by t leaves r alone: r = d/t.' },
        { q: 'The distance around a circle is C = 2πr. Solve for r.', c: ['r = C/(2π)', 'r = 2πC', 'r = C − 2π', 'r = C/2 − π'], why: 'r is multiplied by 2π, so divide both sides by 2π.' },
      ],
      realLife: {
        text: `<p>Formulas are used every day. You just rearrange them for what you need.</p>
          <ul><li><b>Travel:</b> a plane flies 1,500 miles at 500 miles per hour. t = d/r = 1,500/500, so it is in the air for 3 hours.</li>
          <li><b>Room size:</b> a rug must cover 48 square feet and the room is 8 feet wide. l = A/w = 48/8, so the rug is 6 feet long.</li>
          <li><b>Weather:</b> the US uses Fahrenheit and most of the world uses Celsius. Rearranging the formula lets you switch both ways.</li></ul>`,
        prompt: 'Your family drives 180 miles to visit relatives at 60 miles per hour. Use t = d/r to find how long the trip takes, and explain each step.',
      },
    },
    {
      key: 'a02-06',
      title: 'Multi-step inequalities',
      videos: [
        { id: 'xOxvyeSl0uA', title: 'Multi-step inequalities' },
        { id: 'XOAn5z8mkvI', title: 'Multi-step inequalities 2' },
      ],
      learn: `
        <p>An <b>inequality</b> (a math sentence that uses &lt;, &gt;, ≤, or ≥ instead of =) has lots of answers, not just one. x &gt; 3 means any number bigger than 3.</p>
        <p>Solve it almost like an equation, with one big rule: <b>if you multiply or divide both sides by a negative number, flip the sign.</b> &lt; becomes &gt;, and ≤ becomes ≥.</p>
        <p><b>Why?</b> 2 &lt; 5 is true. Multiply both sides by −1 and you get −2 and −5. But −2 is bigger than −5, so now it is −2 &gt; −5. The order flipped.</p>
        <p><b>Worked example:</b> 3 − 2x ≥ 11</p>
        <ul>
          <li>Subtract 3 from both sides: −2x ≥ 8</li>
          <li>Divide both sides by −2 and FLIP the sign: x ≤ −4</li>
          <li>Check with x = −5: 3 − 2(−5) = 13, and 13 ≥ 11 is true.</li>
        </ul>
        <p>Adding or subtracting never flips the sign, even with negative numbers. Only multiplying or dividing by a negative does.</p>
        <p><b>On a number line:</b> use an open circle for &lt; or &gt; (the number itself is not included). Use a closed (filled-in) circle for ≤ or ≥ (the number is included).</p>`,
      quiz: [
        { q: 'Solve: 3 − 2x ≥ 11', c: ['x ≤ −4', 'x ≥ −4', 'x ≥ 4', 'x ≤ −7'], why: 'Subtract 3: −2x ≥ 8. Divide by −2 and flip: x ≤ −4.' },
        { q: 'Solve: 4x + 3 < 19', c: ['x < 4', 'x > 4', 'x < 5.5', 'x < 16'], why: 'Subtract 3: 4x < 16. Divide by 4 (positive, no flip): x < 4.' },
        { q: 'When must you flip the inequality sign?', c: ['When you multiply or divide both sides by a negative number', 'Whenever you see a negative number', 'When you subtract a number from both sides', 'When x ends up on the right side'], why: 'Only multiplying or dividing by a negative reverses the order of numbers.' },
        { q: 'Solve: −5x > 20', c: ['x < −4', 'x > −4', 'x < 4', 'x > 25'], why: 'Divide by −5 and flip the sign: x < −4.' },
        { q: 'Solve: 2x − 7 ≤ 5x + 8', c: ['x ≥ −5', 'x ≤ −5', 'x ≥ 5', 'x ≥ −15'], why: 'Subtract 5x: −3x − 7 ≤ 8. Add 7: −3x ≤ 15. Divide by −3 and flip: x ≥ −5.' },
        { q: 'Solve: 3(x + 2) > 2x + 1', c: ['x > −5', 'x < −5', 'x > −1', 'x > 7'], why: '3x + 6 > 2x + 1. Subtract 2x: x + 6 > 1. Subtract 6: x > −5.' },
        { q: 'Is x = −3 a solution of −2x + 1 > 5?', c: ['Yes — it makes 7 > 5', 'No — it makes −5 > 5', 'No — it makes 5 > 5', 'Yes — it makes −7 > 5'], why: '−2(−3) + 1 = 6 + 1 = 7, and 7 > 5 is true.' },
        { q: 'How do you graph x ≤ 2 on a number line?', c: ['Closed circle at 2, shade to the left', 'Open circle at 2, shade to the left', 'Closed circle at 2, shade to the right', 'Open circle at 2, shade to the right'], why: '≤ includes 2 (closed circle). "Less than" means smaller numbers, which are to the left.' },
        { q: 'Solve: −x/3 ≥ 2', c: ['x ≤ −6', 'x ≥ −6', 'x ≤ −2/3', 'x ≥ 6'], why: 'Multiply both sides by −3 and flip the sign: x ≤ −6.' },
        { q: 'Zayd has $50. He buys a $14 game and some $4 snacks: 14 + 4s ≤ 50. What is the most snacks he can buy?', c: ['9 snacks', '16 snacks', '12 snacks', '36 snacks'], why: 'Subtract 14: 4s ≤ 36. Divide by 4: s ≤ 9.' },
        { q: 'Solve: 6 − x < 10', c: ['x > −4', 'x < −4', 'x > −16', 'x < 4'], why: 'Subtract 6: −x < 4. Multiply by −1 and flip: x > −4.' },
        { q: 'Which step would flip the inequality sign?', c: ['Dividing both sides by −4', 'Subtracting 4 from both sides', 'Adding −4 to both sides', 'Dividing both sides by 4'], why: 'Only multiplying or dividing by a negative flips the sign. Adding or subtracting never does.' },
      ],
      realLife: {
        text: `<p>Inequalities are perfect for limits, like "no more than" or "at least."</p>
          <ul><li><b>Budget:</b> you have $40, a book costs $16, and pens cost $3 each. 16 + 3p ≤ 40 means p ≤ 8 pens.</li>
          <li><b>Phone battery:</b> your phone is at 80% and loses 6% per hour of videos. To stay at 20% or more: 80 − 6h ≥ 20. Subtract 80: −6h ≥ −60. Divide by −6 and flip: h ≤ 10 hours.</li>
          <li><b>Grades:</b> what score do you need on the last test to keep at least a B?</li></ul>`,
        prompt: 'You have $30 at the mall. A shirt costs $18 and socks cost $3 a pair. Write an inequality and find the most pairs of socks you can buy.',
      },
    },
    {
      key: 'a02-07',
      title: 'Compound inequalities',
      videos: [
        { id: 'A3xPhzs-KBI', title: 'Compound inequalities ("and" and "or")' },
        { id: '0YErxSShF0A', title: 'Compound inequalities: an "or" example' },
      ],
      learn: `
        <p>A <b>compound inequality</b> (two inequalities joined by the word "and" or "or") describes a group of numbers.</p>
        <ul>
          <li><b>AND:</b> both parts must be true. "x &gt; 2 and x &lt; 7" means numbers between 2 and 7. You can write it short as 2 &lt; x &lt; 7. On a number line, you shade the part in between.</li>
          <li><b>OR:</b> at least one part must be true. "x &lt; −1 or x &gt; 4" means numbers below −1 plus numbers above 4. The shading goes out in two directions.</li>
        </ul>
        <p><b>Solving:</b> for "or" problems, solve each part on its own, then join the answers with "or." For a short "and" form like −3 ≤ 2x + 1 &lt; 9, do the same thing to all three parts at once.</p>
        <p><b>Worked example:</b> −3 ≤ 2x + 1 &lt; 9</p>
        <ul>
          <li>Subtract 1 from all three parts: −4 ≤ 2x &lt; 8</li>
          <li>Divide all three parts by 2: −2 ≤ x &lt; 4</li>
          <li>Check with x = 0: 2(0) + 1 = 1, and −3 ≤ 1 &lt; 9 is true.</li>
        </ul>
        <p>Same rule as before: dividing by a negative flips <b>both</b> signs.</p>`,
      quiz: [
        { q: 'Solve: −3 ≤ 2x + 1 < 9', c: ['−2 ≤ x < 4', '−1.5 ≤ x < 4', '−4 ≤ x < 8', '−1 ≤ x < 5'], why: 'Subtract 1 from all three parts: −4 ≤ 2x < 8. Divide all three by 2: −2 ≤ x < 4.' },
        { q: 'Which number is a solution of "x > 2 and x < 7"?', c: ['5', '1', '7', '9'], why: '5 is bigger than 2 AND smaller than 7. 7 itself is not less than 7.' },
        { q: 'Which number is a solution of "x < −1 or x > 4"?', c: ['6', '0', '2', '4'], why: '6 > 4, so one part is true. That is enough for "or." 4 is not greater than 4.' },
        { q: 'In a compound inequality, what does "and" mean?', c: ['Both parts must be true', 'At least one part must be true', 'Neither part can be true', 'Only the first part matters'], why: '"And" means a number has to pass both tests at the same time.' },
        { q: 'Solve: 3x − 2 < 7 or 2x + 1 > 15', c: ['x < 3 or x > 7', 'x < 3 and x > 7', 'x > 3 or x < 7', 'x < 5/3 or x > 8'], why: '3x < 9 gives x < 3. 2x > 14 gives x > 7. Keep the word "or."' },
        { q: 'A number line has a closed circle at −1, an open circle at 5, and shading in between. Which inequality is it?', c: ['−1 ≤ x < 5', '−1 < x ≤ 5', 'x ≤ −1 or x > 5', '−1 ≤ x ≤ 5'], why: 'Closed at −1 means ≤ (included). Open at 5 means < (not included).' },
        { q: 'Solve: 4 < x + 6 ≤ 10', c: ['−2 < x ≤ 4', '10 < x ≤ 16', '−2 < x ≤ 16', '2 < x ≤ 4'], why: 'Subtract 6 from all three parts: 4 − 6 = −2 and 10 − 6 = 4.' },
        { q: 'Solve: −8 < −2x ≤ 6', c: ['−3 ≤ x < 4', '−4 < x ≤ 3', '−3 < x ≤ 4', 'x < −3 or x ≥ 4'], why: 'Divide all parts by −2 and flip both signs: 4 > x ≥ −3, which is −3 ≤ x < 4.' },
        { q: 'Teen tickets are for ages 13 to 17, including both. Which inequality shows the allowed ages a?', c: ['13 ≤ a ≤ 17', '13 < a < 17', 'a ≤ 13 or a ≥ 17', 'a ≥ 17'], why: '"Including both" means 13 and 17 are allowed, so use ≤ on both sides.' },
        { q: 'Which compound inequality has NO solution?', c: ['x < 2 and x > 5', 'x < 2 or x > 5', 'x > 2 and x < 5', 'x > 2 or x < 5'], why: 'No number can be smaller than 2 AND bigger than 5 at the same time.' },
        { q: 'Solve: x + 4 < 1 or x − 3 > 2', c: ['x < −3 or x > 5', 'x < 5 or x > −1', 'x < −3 and x > 5', 'x > −3 or x < 5'], why: 'Subtract 4: x < −3. Add 3: x > 5. Keep the word "or."' },
        { q: '−2 < x < 3 means the same as…', c: ['x > −2 and x < 3', 'x < −2 or x > 3', 'x > −2 or x < 3', 'x < −2 and x > 3'], why: 'x is between −2 and 3, so it must be bigger than −2 AND smaller than 3.' },
      ],
      realLife: {
        text: `<p>Compound inequalities describe ranges with a low end and a high end.</p>
          <ul><li><b>AND:</b> a ride says riders must be at least 48 inches and at most 76 inches tall: 48 ≤ h ≤ 76.</li>
          <li><b>AND:</b> a fish tank must stay from 72°F to 82°F: 72 ≤ t ≤ 82.</li>
          <li><b>OR:</b> a weather app sends an alert if it is below 32°F or above 95°F: t &lt; 32 or t &gt; 95.</li></ul>
          <p>"And" keeps you inside a range. "Or" warns you when you go outside it.</p>`,
        prompt: 'Think of a rule in your life that has both a minimum and a maximum. Write it as a compound inequality and explain which numbers are allowed.',
      },
    },
  ],
};
