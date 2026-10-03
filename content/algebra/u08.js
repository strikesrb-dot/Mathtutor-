// Unit 8 — Inequalities (systems & graphs). NJ: A.REI.D.12, A.CED.A.3
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel @khanacademy).
// Every point and inequality in the quizzes was recomputed with node.
export default {
  id: 'a08', n: 8, title: 'Inequalities (systems & graphs)', nj: ['A.REI.D.12', 'A.CED.A.3'],
  lessons: [
    {
      key: 'a08-01',
      title: 'Checking solutions of two-variable inequalities',
      videos: [
        { id: 'Yh4TXMVq9eg', title: 'How to test solutions to inequalities' },
        { id: 'YBYu5aZPLeg', title: 'Graphing inequalities and checking solutions example' },
      ],
      learn: `
        <p>A <b>two-variable inequality</b> (a math sentence with x, y, and a sign like &lt;, &gt;, ≤, or ≥) has lots of answers, not just one. Each answer is an <b>ordered pair</b> (a point written as (x, y), with x first).</p>
        <p>A point is a <b>solution</b> (a point that makes the inequality true) if the sentence is true after you plug it in.</p>
        <ol>
          <li>Put the x-value in for x and the y-value in for y. Use parentheses for negatives.</li>
          <li>Work out each side.</li>
          <li>Ask: is the sentence true? True means it is a solution. False means it is not.</li>
        </ol>
        <p><b>Watch the "equal" part.</b> If both sides come out the same, ≤ and ≥ say yes, but &lt; and &gt; say no.</p>
        <p><b>Worked example:</b> Is (2, 5) a solution of y &gt; 2x + 1?</p>
        <ul>
          <li>Plug in: 5 &gt; 2(2) + 1, so 5 &gt; 5.</li>
          <li>5 is not greater than 5, so <b>no</b>.</li>
          <li>Now try (1, 4): 4 &gt; 2(1) + 1, so 4 &gt; 3. That is true, so <b>yes</b>.</li>
        </ul>
        <p>On a graph, the solutions are the points in the shaded part.</p>`,
      quiz: [
        { q: 'Which point is a solution of y > x + 2?', c: ['(1, 5)', '(1, 3)', '(5, 1)', '(0, 1)'], why: 'Plug in x = 1 and y = 5: is 5 > 1 + 2? Yes, 5 > 3.' },
        { q: 'Is (2, 5) a solution of y > 2x + 1?', c: ['No — 5 > 5 is false', 'Yes — 5 = 5, so it counts', 'Yes — 5 is bigger than 2', 'Yes — 2(2) + 1 = 4, and 5 > 4'], why: '2(2) + 1 = 5, and 5 is not greater than 5. Equal only counts with ≥ or ≤.' },
        { q: 'Is (2, 5) a solution of y ≥ 2x + 1?', c: ['Yes — 5 ≥ 5 is true', 'No — 5 is not greater than 5', 'No — the point is on the line', 'No — 2(2) + 1 = 6, and 5 < 6'], why: '≥ means "greater than or equal to." 2(2) + 1 = 5, and 5 equals 5, so it counts.' },
        { q: 'Is (−2, 3) a solution of y ≤ −x + 1?', c: ['Yes — 3 ≤ 3 is true', 'No — 3 ≤ −1 is false', 'No — 3 is not less than 3', 'No — x is negative, so it cannot work'], why: '−(−2) + 1 = 2 + 1 = 3. Is 3 ≤ 3? Yes, because equal counts with ≤.' },
        { q: 'Which point is NOT a solution of x + y < 6?', c: ['(4, 2)', '(1, 1)', '(0, 5)', '(−3, 8)'], why: '4 + 2 = 6, and 6 < 6 is false. The other points add up to less than 6.' },
        { q: 'Is (0, 0) a solution of y < 3x − 4?', c: ['No — 0 < −4 is false', 'Yes — 0 < 4 is true', 'Yes — (0, 0) always works', 'No — 0 < 3 is false'], why: 'Plug in 0 for x and y: 0 < 3(0) − 4, so 0 < −4. Zero is bigger than −4.' },
        { q: 'Which point is a solution of 2x + 3y ≥ 12?', c: ['(3, 2)', '(2, 2)', '(1, 3)', '(0, 3)'], why: '2(3) + 3(2) = 6 + 6 = 12, and 12 ≥ 12 is true. The others come out to 10, 11, and 9.' },
        { q: 'In the ordered pair (4, −1), which number is y?', c: ['−1', '4', 'Both numbers', 'Neither — you have to solve for y'], why: 'Ordered pairs are always (x, y). x comes first, y comes second.' },
        { q: 'Is (−1, −4) a solution of y > 2x − 3?', c: ['Yes — −4 > −5 is true', 'No — −4 > −1 is false', 'No — points with negatives cannot be solutions', 'No — −4 is less than −5'], why: '2(−1) − 3 = −2 − 3 = −5. On a number line −4 is right of −5, so −4 > −5.' },
        { q: 'On the graph of an inequality, which points are the solutions?', c: ['The points in the shaded region (plus the line, if it is solid)', 'Only the points on the line', 'Only the points where the line crosses an axis', 'The points in the region that is NOT shaded'], why: 'The shading marks every point that makes the inequality true.' },
        { q: 'A team needs at least 20 points: 2x + 3y ≥ 20 (x = 2-point shots, y = 3-pointers). Do 4 two-pointers and 3 three-pointers reach it?', c: ['No — 8 + 9 = 17, which is less than 20', 'Yes — 8 + 9 = 20', 'Yes — 17 is close enough to 20', 'Yes — 4 + 3 = 7 baskets'], why: '2(4) + 3(3) = 8 + 9 = 17. "At least 20" needs 17 ≥ 20, which is false.' },
        { q: 'Which point is a solution of y ≤ 4?', c: ['(7, 2)', '(2, 7)', '(4, 5)', '(0, 6)'], why: 'Only y matters here. In (7, 2), y = 2, and 2 ≤ 4. x can be anything.' },
      ],
      realLife: {
        text: `<p>Any time you ask "does this plan work?", you are checking a solution.</p>
          <ul><li><b>Phone storage:</b> you have 64 GB free. Each movie (x) takes 4 GB and each game (y) takes 10 GB, so 4x + 10y ≤ 64. Six movies and 4 games? 24 + 40 = 64. Yes, just barely.</li>
          <li><b>Basketball:</b> a team needs at least 50 points, so 2x + 3y ≥ 50. Plug in the shots they made to see if they got there.</li>
          <li><b>Gift bags:</b> with $25, toy cars cost $3 and stickers cost $2, so 3x + 2y ≤ 25. Four cars and 5 sticker packs cost $22. It works.</li></ul>`,
        prompt: 'Make up a plan with two things, like two kinds of snacks and a money limit. Write the inequality, then check one combo and say if it works.',
      },
    },
    {
      key: 'a08-02',
      title: 'Graphing two-variable inequalities',
      videos: [
        { id: 'unSBFwK881s', title: 'Introduction to graphing inequalities' },
        { id: '-aTy1ED1m5I', title: 'Graphing inequalities 2' },
        { id: 'FnrqBgot3jM', title: 'Finding the inequality representing the graph example' },
      ],
      learn: `
        <p>To <b>graph</b> an inequality like y &lt; 2x + 1, draw its <b>boundary line</b> (the line y = 2x + 1, the edge between "yes" points and "no" points). Then shade the side where the solutions are.</p>
        <ol>
          <li><b>Draw the line.</b> Pretend the sign is =. Start at the y-intercept, then use the slope (rise over run).</li>
          <li><b>Solid or dashed?</b> ≤ or ≥ means a <b>solid</b> line (points on the line count). &lt; or &gt; means a <b>dashed</b> line (points on the line do not count).</li>
          <li><b>Which side?</b> Pick a <b>test point</b> (any point that is not on the line). (0, 0) is easiest. Plug it in. True means shade the side with that point. False means shade the other side.</li>
        </ol>
        <p><b>Shortcut:</b> when y is alone on the left, y &gt; or y ≥ means shade <b>above</b> the line. y &lt; or y ≤ means shade <b>below</b>.</p>
        <p><b>Worked example:</b> Graph y &lt; 2x + 1.</p>
        <ul>
          <li>Line: start at (0, 1). Go up 2 and right 1 to (1, 3). Connect them.</li>
          <li>The sign is &lt;, so the line is dashed.</li>
          <li>Test (0, 0): 0 &lt; 2(0) + 1, so 0 &lt; 1. True! Shade the side with (0, 0), which is below the line.</li>
        </ul>`,
      quiz: [
        { q: 'When you graph y ≥ 3x − 2, the boundary line is…', c: ['solid, because ≥ includes the line', 'dashed, because ≥ includes the line', 'solid, because ≥ means "greater than" only', 'dashed, because the slope is positive'], why: '≥ means "greater than or equal to," so points on the line count. Show that with a solid line.' },
        { q: 'When you graph y < −x + 4, the boundary line is…', c: ['dashed', 'solid', 'vertical', 'not drawn at all'], why: '< does not include "equal to," so points on the line are not solutions. Draw it dashed.' },
        { q: 'For y > x + 1, which side of the line do you shade?', c: ['Above the line', 'Below the line', 'Left of the y-axis', 'No side — only the line itself'], why: 'With y alone on the left, > means y-values bigger than the line. Bigger y-values are higher up.' },
        { q: 'For y ≤ 2x − 3, which side of the line do you shade?', c: ['Below the line', 'Above the line', 'Right of the y-axis', 'No side — only the line itself'], why: '≤ with y alone means y-values smaller than (or on) the line. Smaller y-values are lower, so shade below.' },
        { q: 'You test (0, 0) in y > 3x + 2 and get 0 > 2, which is false. What do you shade?', c: ['The side WITHOUT (0, 0)', 'The side with (0, 0)', 'Nothing — there are no solutions', 'Only the point (0, 0)'], why: 'A false test point is not a solution, so the solutions are on the other side of the line.' },
        { q: 'You want to graph 2x + y ≤ 6. What is the boundary line in slope-intercept form?', c: ['y = −2x + 6', 'y = 2x + 6', 'y = −2x − 6', 'y = 6x − 2'], why: 'Subtract 2x from both sides: y = −2x + 6. Pretend the sign is = to get the line.' },
        { q: 'A graph shows a dashed line through (0, 1) with slope 2, shaded above. Which inequality is it?', c: ['y > 2x + 1', 'y ≥ 2x + 1', 'y < 2x + 1', 'y > x + 2'], why: 'Dashed means < or >. Shaded above means >. The line has slope 2 and y-intercept 1.' },
        { q: 'A graph shows a solid line y = −x + 3 with the part below it shaded. Which inequality is it?', c: ['y ≤ −x + 3', 'y < −x + 3', 'y ≥ −x + 3', 'y ≤ x + 3'], why: 'Solid means ≤ or ≥. Shaded below means ≤. The line is y = −x + 3.' },
        { q: 'Why is (0, 0) the favorite test point?', c: ['Plugging in zeros makes the math fast', 'It is always a solution', 'It is always on the line', 'You are required to use it every time'], why: 'Zeros are quick to plug in. Just never use (0, 0) when the line goes through it.' },
        { q: 'The line for y > 2x goes through (0, 0). Which test point should you use instead?', c: ['(1, 0)', '(0, 0)', '(1, 2)', '(2, 4)'], why: '(0, 0), (1, 2), and (2, 4) are all ON the line y = 2x. A test point must be off the line.' },
        { q: 'What does the graph of x ≥ 3 look like?', c: ['A solid vertical line at x = 3, shaded to the right', 'A solid horizontal line at y = 3, shaded above', 'A dashed vertical line at x = 3, shaded to the right', 'A solid vertical line at x = 3, shaded to the left'], why: 'x = 3 is a vertical line. ≥ makes it solid. Bigger x-values are to the right.' },
        { q: 'You test (0, 0) in y ≤ −3x + 5 and get 0 ≤ 5. What should you do?', c: ['Shade the side that has (0, 0)', 'Shade the side away from (0, 0)', 'Make the line dashed', 'Move the line so it goes through (0, 0)'], why: '0 ≤ 5 is true, so (0, 0) is a solution. Every point on its side of the line is a solution too.' },
      ],
      realLife: {
        text: `<p>The graph of an inequality is a map of every choice that follows the rule.</p>
          <ul><li><b>Speed limit:</b> "Max 65" means speed ≤ 65. Driving exactly 65 is legal, so the edge counts, like a solid line. A rule that said "under 65" would be a dashed line.</li>
          <li><b>Screen time:</b> you allow yourself at most 3 hours of games (x) plus videos (y): x + y ≤ 3. Shade below the line. Every point there, like 1 hour of games and 2 of videos, follows your rule.</li>
          <li><b>Water:</b> drinking at least 8 cups of water and milk is x + y ≥ 8. Shade above.</li></ul>`,
        prompt: 'Think of a rule with a limit, like a speed limit or a time limit. Would its graph use a solid line or a dashed line, and why?',
      },
    },
    {
      key: 'a08-03',
      title: 'Systems of inequalities',
      videos: [
        { id: 'TqsRlc02rtc', title: 'Graphing systems of inequalities' },
        { id: 'C_7Tqk9fw4k', title: 'Graphs of systems of inequalities word problem' },
      ],
      learn: `
        <p>A <b>system of inequalities</b> (two or more inequalities that must all be true at the same time) has its solutions where the shaded parts <b>overlap</b> (cover the same spot).</p>
        <ol>
          <li>Graph the first inequality: its line (solid or dashed) and its shading.</li>
          <li>Graph the second one on the same grid.</li>
          <li>The <b>solution region</b> (the part where both shadings overlap) holds every answer.</li>
        </ol>
        <p>To <b>check a point</b>, plug it into <b>every</b> inequality. It must make all of them true. Just one false means it is not a solution.</p>
        <p>A point on a <b>dashed</b> line is never a solution, even if it touches the overlap.</p>
        <p><b>Worked example:</b> y ≥ x − 1 and y &lt; −x + 3.</p>
        <ul>
          <li>First: solid line through (0, −1) with slope 1. Shade above.</li>
          <li>Second: dashed line through (0, 3) with slope −1. Shade below.</li>
          <li>Check (1, 1): 1 ≥ 1 − 1, so 1 ≥ 0 (true). Then 1 &lt; −1 + 3, so 1 &lt; 2 (true). Both are true, so (1, 1) is a solution.</li>
          <li>Check (3, 0): 0 ≥ 3 − 1, so 0 ≥ 2 (false). It is not a solution. You don't even need to check the second one.</li>
        </ul>`,
      quiz: [
        { q: 'The solution to a system of inequalities is…', c: ['the region where all the shadings overlap', 'only the point where the two lines cross', 'everything shaded by either inequality', 'the region that nobody shaded'], why: 'A solution must make every inequality true, so it has to be inside every shaded region at once.' },
        { q: 'Is (0, 1) a solution of the system y ≥ x − 1 and y < −x + 3?', c: ['Yes — it makes both true', 'No — it only works in the first one', 'No — it only works in the second one', 'No — it works in neither one'], why: 'First: 1 ≥ 0 − 1, so 1 ≥ −1 (true). Second: 1 < 0 + 3, so 1 < 3 (true).' },
        { q: 'Is (4, 2) a solution of the system y > x − 3 and y ≤ 1?', c: ['No — it fails y ≤ 1', 'Yes — it works in y > x − 3', 'No — it fails y > x − 3', 'Yes — it works in both'], why: '2 > 4 − 3 is true, but 2 ≤ 1 is false. One false means it is not a solution.' },
        { q: 'Which point is a solution of the system x + y ≤ 5 and y > 2?', c: ['(1, 3)', '(1, 2)', '(3, 3)', '(4, 0)'], why: '1 + 3 = 4 and 4 ≤ 5 (true). 3 > 2 (true). Each other point fails at least one.' },
        { q: 'Two dashed lines cross at (2, 3). Is (2, 3) a solution of the system?', c: ['No — points on a dashed line never count', 'Yes — that is where the lines meet', 'Yes — crossing points are always solutions', 'Yes — if the area around it is shaded'], why: 'Dashed means < or >, so the line itself is left out. The crossing point sits on both dashed lines.' },
        { q: 'A system has y > 2x + 1 and y < 2x − 3. How many solutions does it have?', c: ['None — the shaded parts never overlap', 'One — where the lines cross', 'Infinitely many — both are shaded', 'Two — one for each line'], why: 'The lines are parallel (same slope, 2). Above the top line and below the bottom line never meet.' },
        { q: 'For the system y ≥ x and y ≤ 4, which describes the solution region?', c: ['Above y = x AND below y = 4', 'Below y = x AND above y = 4', 'Above y = x OR below y = 4', 'Only on the line y = 4'], why: 'y ≥ shades above and y ≤ shades below. A system needs both at once, so take the overlap.' },
        { q: 'A graph shows a solid line y = x + 1 shaded above and a dashed line y = −2x + 4 shaded below. Which system is it?', c: ['y ≥ x + 1 and y < −2x + 4', 'y > x + 1 and y ≤ −2x + 4', 'y ≤ x + 1 and y > −2x + 4', 'y ≥ x + 1 and y ≤ −2x + 4'], why: 'Solid and shaded above means ≥. Dashed and shaded below means <.' },
        { q: 'A point works in 2 inequalities of a 3-inequality system. Is it a solution?', c: ['No — it must work in all 3', 'Yes — 2 out of 3 is most of them', 'Yes — it only has to work in one', 'Yes — if it works in the first two'], why: 'A system means every inequality must be true at the same time. One false breaks it.' },
        { q: 'Is (−1, 4) a solution of the system y > −2x and x + y < 4?', c: ['Yes — 4 > 2 and 3 < 4', 'No — x + y is 5, which is not less than 4', 'No — a negative x can never be a solution', 'No — 4 > 2 is false'], why: '−2(−1) = 2, and 4 > 2. Then −1 + 4 = 3, and 3 < 4. Both are true.' },
        { q: 'Which point is NOT in the solution region of x ≥ 0, y ≥ 0, and x + y ≤ 6?', c: ['(−1, 3)', '(2, 2)', '(0, 6)', '(6, 0)'], why: 'x ≥ 0 rules out negative x-values, so (−1, 3) fails. The other points pass all three.' },
        { q: 'For the system y < x + 2 and y > −x, is (0, 2) a solution?', c: ['No — it is on the dashed line y = x + 2', 'Yes — 2 > 0 is true', 'Yes — it is where the two lines cross', 'No — 2 > 0 is false'], why: '2 < 0 + 2 means 2 < 2, which is false. The point sits on a dashed boundary line, so it is left out.' },
      ],
      realLife: {
        text: `<p>Real life usually has more than one rule at the same time. A plan that works must pass all of them, just like a point in the overlap.</p>
          <ul><li><b>Packing a carry-on:</b> the bag must weigh at most 10 kg AND hold at most 20 items. A light bag stuffed with 25 items still fails.</li>
          <li><b>Picking a phone:</b> you want at least 128 GB of storage AND a price of at most $300. Only phones in the overlap make your list.</li>
          <li><b>Weekend plan:</b> at least 2 hours of study AND at most 3 hours of games. Both rules have to be true.</li></ul>`,
        prompt: 'Describe a choice you made that had two rules at once, like cost and time. Give one option that passed both rules and one that failed a rule.',
      },
    },
    {
      key: 'a08-04',
      title: 'Modeling with linear inequalities',
      videos: [
        { id: 'ysdY1iX_XCs', title: 'Solving two-variable inequalities word problem' },
        { id: 'TTYDbGXgcCk', title: 'Interpreting two-variable inequalities word problem' },
        { id: 'DhiiGFuUE9I', title: 'Graphs of two-variable inequalities word problem' },
      ],
      learn: `
        <p>Real plans have limits, like "I only have $30" or "I have at most 5 hours." A <b>linear inequality</b> (an inequality whose boundary is a straight line) can <b>model</b> (describe with math) a plan with two choices.</p>
        <ol>
          <li><b>Name the variables.</b> Example: x = slices of pizza, y = bottles of juice.</li>
          <li><b>Write the total.</b> Price times amount for each thing, added up.</li>
          <li><b>Pick the sign.</b> "At most," "no more than," or "up to" means ≤. "At least," "no less than," or "minimum" means ≥.</li>
          <li><b>Add common sense.</b> You can't buy a negative number of things, so x ≥ 0 and y ≥ 0. Now it is a system.</li>
        </ol>
        <p><b>Worked example:</b> You have $30 for Eid snacks. Pizza slices cost $3 and juices cost $2. Let x = slices and y = juices. The model is <b>3x + 2y ≤ 30</b>, with x ≥ 0 and y ≥ 0.</p>
        <ul>
          <li>6 slices and 5 juices: 3(6) + 2(5) = 18 + 10 = 28. Is 28 ≤ 30? Yes, you can afford it.</li>
          <li>8 slices and 4 juices: 3(8) + 2(4) = 24 + 8 = 32. Is 32 ≤ 30? No, that is over budget.</li>
        </ul>
        <p>On the graph, every point in the shaded part of the <b>first quadrant</b> (the top-right section, where x and y are both 0 or more) is a plan you can afford.</p>`,
      quiz: [
        { q: 'Falafel wraps cost $5 and drinks cost $2. You can spend at most $25. With x = wraps and y = drinks, which inequality fits?', c: ['5x + 2y ≤ 25', '5x + 2y ≥ 25', '2x + 5y ≤ 25', '7(x + y) ≤ 25'], why: 'Wraps cost 5x and drinks cost 2y. "At most" $25 means ≤.' },
        { q: 'Using 5x + 2y ≤ 25, can you buy 3 wraps and 4 drinks?', c: ['Yes — it costs $23', 'No — it costs $26', 'No — it costs $49', 'No — 23 is not more than 25'], why: '5(3) + 2(4) = 15 + 8 = 23, and 23 ≤ 25. You even have $2 left over.' },
        { q: 'Which phrase means ≥?', c: ['"at least"', '"at most"', '"no more than"', '"less than"'], why: '"At least 10" means 10 or more, so the amount is greater than or equal to 10.' },
        { q: 'Yusuf studies math (x hours) and biology (y hours). He wants at least 6 hours in total this weekend. Which inequality fits?', c: ['x + y ≥ 6', 'x + y ≤ 6', 'x + y > 6', 'xy ≥ 6'], why: 'Total hours is x + y. "At least 6" means 6 or more, so use ≥.' },
        { q: 'Why do we add x ≥ 0 and y ≥ 0 to a shopping problem?', c: ['You can\'t buy a negative number of things', 'It makes the boundary line solid', 'It means you must buy at least one of each', 'It sets the budget to zero'], why: 'Amounts like wraps or hours can be 0 or more, never negative. So only the first quadrant makes sense.' },
        { q: 'Your plan has 10 GB of data. Videos use 2 GB per hour (x) and games use 0.5 GB per hour (y). Which inequality keeps you within your data?', c: ['2x + 0.5y ≤ 10', '2x + 0.5y ≥ 10', '0.5x + 2y ≤ 10', '2.5(x + y) ≤ 10'], why: 'Video data is 2x and game data is 0.5y. The total can be at most 10 GB.' },
        { q: 'Using 2x + 0.5y ≤ 10, can you watch 4 hours of videos and game for 6 hours?', c: ['No — that uses 11 GB', 'Yes — that uses 8.5 GB', 'Yes — 4 + 6 = 10, so it just fits', 'No — that uses 14 GB'], why: '2(4) + 0.5(6) = 8 + 3 = 11 GB. 11 is more than 10, so you run out of data.' },
        { q: 'An elevator holds at most 1,000 pounds. Count adults as 200 lb and kids as 100 lb. With a = adults and k = kids, which inequality fits?', c: ['200a + 100k ≤ 1000', '200a + 100k ≥ 1000', '100a + 200k ≤ 1000', 'a + k ≤ 1000'], why: 'Adults add 200a pounds and kids add 100k pounds. The total must be at most 1,000.' },
        { q: 'Using 200a + 100k ≤ 1000, what is the most kids that can ride with 3 adults?', c: ['4', '7', '10', '2'], why: '3 adults weigh 600 lb. 1000 − 600 = 400 lb left. 400 ÷ 100 = 4 kids.' },
        { q: 'Amina earns $10 an hour mowing lawns (x) and $8 an hour washing cars (y). She wants to earn at least $80. Which plan works?', c: ['4 hours mowing and 5 hours washing', '3 hours mowing and 5 hours washing', '5 hours mowing and 3 hours washing', '2 hours mowing and 6 hours washing'], why: '10(4) + 8(5) = 40 + 40 = 80. "At least $80" lets exactly $80 count. The others earn $70, $74, and $68.' },
        { q: 'Amina has at most 5 hours. She earns $10 an hour mowing (x) and $8 an hour washing cars (y), and needs at least $40. Which system fits?', c: ['x + y ≤ 5 and 10x + 8y ≥ 40', 'x + y ≥ 5 and 10x + 8y ≤ 40', 'x + y ≤ 5 and 10x + 8y ≤ 40', '10x + 8y ≤ 5 and x + y ≥ 40'], why: 'Time: total hours at most 5, so ≤. Money: earnings at least $40, so ≥.' },
        { q: 'On the graph of the snack budget 3x + 2y ≤ 30, what does a point ABOVE the line mean?', c: ['A plan that costs more than $30', 'A plan that costs less than $30', 'A plan that costs exactly $30', 'A plan with no pizza'], why: 'Points on the line cost exactly $30 and points below cost less. Points above are over budget, so they are not shaded.' },
      ],
      realLife: {
        text: `<p>Families and businesses use inequality models all the time.</p>
          <ul><li><b>Masjid fundraiser dinner:</b> biryani plates sell for $12 and desserts for $4. To raise at least $600, the team needs 12x + 4y ≥ 600. Selling 40 plates and 30 desserts makes exactly $600.</li>
          <li><b>Airport baggage cart:</b> it holds at most 1,000 kg. Big bags weigh 25 kg and small bags 10 kg, so 25x + 10y ≤ 1000.</li>
          <li><b>Your weekend:</b> 8 free hours, with at least 3 for study. That is x + y ≤ 8 and x ≥ 3.</li></ul>
          <p>Writing the model lets you test a plan before you try it.</p>`,
        prompt: 'Write an inequality for a real limit in your life, like phone data, money, or free time. Say what x and y mean and give one plan that fits.',
      },
    },
  ],
};
