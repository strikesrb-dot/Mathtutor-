// Unit 5 — Forms of linear equations. NJ: A.CED.A.2, F.IF.C.7a, F.LE.A.2, F.LE.B.5
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
import { pick } from '../legacy.js';
export default {
  id: 'a05', n: 5, title: 'Forms of linear equations', nj: ['A.CED.A.2', 'F.IF.C.7a', 'F.LE.A.2', 'F.LE.B.5'],
  lessons: [
    pick('alg-7'),
    {
      key: 'a05-02',
      title: 'Graphing slope-intercept equations',
      videos: [
        { id: 'Nhn-anmubYU', title: 'Slope and y-intercept intuition' },
        { id: '5mgH-_5UJ54', title: 'Graphing a line given point and slope' },
      ],
      learn: `
        <p>You already know <b>y = mx + b</b>. Now let's get good at <b>graphing</b> it (drawing its line on a grid).</p>
        <ol>
          <li><b>Start at b.</b> Put your first dot at (0, b) on the <b>y-axis</b> (the up-and-down number line).</li>
          <li><b>Write the slope as a fraction.</b> <b>Rise</b> (how far you go up or down) goes on top. <b>Run</b> (how far you go right) goes on the bottom. A whole number like 3 is 3/1.</li>
          <li><b>Move and dot.</b> A positive slope means go <b>up</b>, then right. A negative slope means go <b>down</b>, then right.</li>
          <li><b>Repeat</b> to get a third dot. Connect the dots with a ruler.</li>
        </ol>
        <p><b>Worked example:</b> graph y = −(2/3)x + 4.</p>
        <ul>
          <li>b = 4, so the first dot is (0, 4).</li>
          <li>The slope is −2/3: go down 2, right 3. The next dot is (3, 2).</li>
          <li>Do it again: down 2, right 3 lands on (6, 0).</li>
          <li><b>Check:</b> put x = 3 into the equation: −(2/3)·3 + 4 = −2 + 4 = 2. So (3, 2) is on the line.</li>
        </ul>
        <p>The bigger the slope number (ignore the minus sign), the steeper the line. A slope of 0, like y = 4, makes a flat (horizontal) line through (0, 4).</p>`,
      quiz: [
        { q: 'You want to graph y = −2x + 5. Where does your first dot go?', c: ['(0, 5)', '(5, 0)', '(0, −2)', '(−2, 5)'], why: 'Always start at the y-intercept (0, b). Here b = 5.' },
        { q: 'For y = −3x + 1, which move takes you from one dot to the next?', c: ['down 3, right 1', 'up 3, right 1', 'down 1, right 3', 'up 1, right 3'], why: 'The slope is −3, which is −3/1. Negative means go down 3, then right 1.' },
        { q: 'For y = (2/5)x − 1, which move takes you from one dot to the next?', c: ['up 2, right 5', 'up 5, right 2', 'down 2, right 5', 'up 2, right 1'], why: 'Slope = rise/run = 2/5. Rise 2 means up 2. Run 5 means right 5.' },
        { q: 'You graph y = 2x − 3. You start at (0, −3) and go up 2, right 1. Where is your next dot?', c: ['(1, −1)', '(2, −2)', '(1, −5)', '(−1, −1)'], why: 'Right 1 makes x = 1. Up 2 makes y = −3 + 2 = −1.' },
        { q: 'Which point is on the line y = 3x − 4?', c: ['(2, 2)', '(0, 4)', '(2, 10)', '(1, 1)'], why: 'Put in x = 2: 3·2 − 4 = 6 − 4 = 2. So (2, 2) is on the line.' },
        { q: 'What does the graph of y = 4 look like?', c: ['A flat (horizontal) line crossing the y-axis at 4', 'An up-and-down (vertical) line crossing the x-axis at 4', 'A slanted line through (0, 0) with slope 4', 'A flat line lying on the x-axis'], why: 'y = 4 means y = 0x + 4. The slope is 0, so the line is flat at height 4.' },
        { q: 'Which line goes DOWN as you move from left to right?', c: ['y = −2x + 7', 'y = 2x − 7', 'y = 7', 'y = (1/2)x − 2'], why: 'A negative slope (here −2) means the line goes downhill.' },
        { q: 'For y = −(1/2)x + 3, you start at (0, 3). Which move gets you to the next dot?', c: ['down 1, right 2', 'down 2, right 1', 'up 1, right 2', 'up 2, right 1'], why: 'Slope −1/2 means rise −1 (down 1) over run 2 (right 2).' },
        { q: 'A line crosses the y-axis at (0, −1) and goes up 3 for every 1 step right. What is its equation?', c: ['y = 3x − 1', 'y = −x + 3', 'y = 3x + 1', 'y = (1/3)x − 1'], why: 'The slope is 3/1 = 3, and the y-intercept is −1.' },
        { q: 'What do the graphs of y = 2x + 4 and y = −5x + 4 have in common?', c: ['Both cross the y-axis at (0, 4)', 'They have the same slope', 'Both go uphill', 'They never cross'], why: 'Both have b = 4, so both lines pass through (0, 4).' },
        { q: 'Which line is steeper: y = −4x + 1 or y = 2x + 1?', c: ['y = −4x + 1', 'y = 2x + 1', 'They are equally steep', 'You cannot tell without graphing'], why: 'Ignore the minus sign when judging steepness: 4 is bigger than 2.' },
        { q: 'Sam graphs y = x + 2 by drawing a line through (0, 2) and (1, 4). What did he do wrong?', c: ['He used a slope of 2, but the slope is 1', 'He started at the wrong y-intercept', 'He should have started at (2, 0)', 'Nothing, his graph is right'], why: 'From (0, 2) to (1, 4) rises 2. But y = x + 2 has slope 1, so the next dot is (1, 3).' },
      ],
      realLife: {
        text: `<p>A graph shows a whole story at a glance. Say your phone is at 100% and drops 10% each hour you play games: <b>y = −10x + 100</b>.</p>
          <ul><li>First dot: (0, 100), the full battery.</li>
          <li>Slope −10: go down 10 and right 1 hour, again and again.</li>
          <li>The line hits the x-axis at (10, 0), so the phone dies after 10 hours.</li></ul>
          <p>A savings jar that starts at $30 and grows $15 a week (y = 15x + 30) makes a line that climbs instead. Uphill means growing. Downhill means shrinking.</p>`,
        prompt: 'Your savings start at $20 and grow by $5 each week, so y = 5x + 20. Explain how you would graph this line: where does the first dot go, and how do you find the next dots?',
      },
      practice: 'slopeIntercept',
    },
    {
      key: 'a05-03',
      title: 'Writing slope-intercept equations',
      videos: [
        { id: 'XMJ72mtMn4Y', title: 'Slope-intercept equation from two solutions example' },
        { id: '3Ayt7mOd_To', title: 'Slope-intercept form from table' },
      ],
      learn: `
        <p>Now flip it around. You get facts about a line and must <b>write</b> its equation as y = mx + b. You always need two things: <b>m</b> (the slope) and <b>b</b> (the y-intercept).</p>
        <p><b>From two points:</b></p>
        <ol>
          <li>Find the slope: m = (change in y) ÷ (change in x).</li>
          <li>Put m and one point into y = mx + b. Solve for b.</li>
          <li>Write the equation. Check it with the other point.</li>
        </ol>
        <p><b>Worked example:</b> the line through (2, 7) and (5, 13).</p>
        <ul>
          <li>m = (13 − 7) ÷ (5 − 2) = 6 ÷ 3 = 2</li>
          <li>Use (2, 7): 7 = 2·2 + b, so 7 = 4 + b, and b = 3.</li>
          <li>Answer: y = 2x + 3. Check with (5, 13): 2·5 + 3 = 13. It works!</li>
        </ul>
        <p><b>From a graph:</b> b is where the line crosses the y-axis. Pick two dots that sit right on grid corners, then count the rise and run between them.</p>
        <p><b>From a table:</b> b is the y-value when x = 0. Slope = how much y changes ÷ how much x changes from one row to the next. If the table skips x = 0, use the two-point steps above.</p>`,
      quiz: [
        { q: 'Write the equation of the line through (2, 7) and (5, 13).', c: ['y = 2x + 3', 'y = 2x + 7', 'y = 3x + 2', 'y = 6x − 5'], why: 'm = 6 ÷ 3 = 2. Then 7 = 2·2 + b, so b = 3.' },
        { q: 'Write the equation of the line through (1, 4) and (3, 10).', c: ['y = 3x + 1', 'y = 3x + 4', 'y = (1/3)x + 1', 'y = 6x − 2'], why: 'm = (10 − 4) ÷ (3 − 1) = 6 ÷ 2 = 3. Then 4 = 3·1 + b, so b = 1.' },
        { q: 'A line has slope 4 and passes through (2, 3). What is b?', c: ['−5', '11', '3', '−1'], why: '3 = 4·2 + b, so 3 = 8 + b. Subtract 8: b = −5.' },
        { q: 'Write the equation of the line through (−1, 6) and (2, −3).', c: ['y = −3x + 3', 'y = 3x + 9', 'y = −3x + 6', 'y = −3x + 9'], why: 'm = (−3 − 6) ÷ (2 − (−1)) = −9 ÷ 3 = −3. Then 6 = 3 + b, so b = 3.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: −4, −1, 2, 5. Which equation fits?', c: ['y = 3x − 4', 'y = −4x + 3', 'y = 3x + 4', 'y = x − 4'], why: 'When x = 0, y = −4, so b = −4. Each row y goes up 3, so m = 3.' },
        { q: 'Table — x: 2, 4, 6 and y: 9, 15, 21. Which equation fits?', c: ['y = 3x + 3', 'y = 6x + 9', 'y = 6x − 3', 'y = 3x + 9'], why: 'm = 6 ÷ 2 = 3, since x jumps by 2. Then 9 = 3·2 + b, so b = 3.' },
        { q: 'Table — x: 0, 5, 10 and y: 20, 15, 10. Which equation fits?', c: ['y = −x + 20', 'y = x + 20', 'y = −5x + 20', 'y = 20x − 1'], why: 'b = 20 (the y when x = 0). m = −5 ÷ 5 = −1.' },
        { q: 'On a graph, a line crosses the y-axis at (0, 2) and the x-axis at (3, 0). What is its equation?', c: ['y = −(2/3)x + 2', 'y = (2/3)x + 2', 'y = −(3/2)x + 2', 'y = −(2/3)x + 3'], why: 'From (0, 2) to (3, 0): down 2, right 3, so m = −2/3. b = 2.' },
        { q: 'On a graph, a line passes through (0, −1) and (2, 5). What is its equation?', c: ['y = 3x − 1', 'y = 6x − 1', 'y = (1/3)x − 1', 'y = 3x + 1'], why: 'Rise 6, run 2, so m = 6 ÷ 2 = 3. It crosses the y-axis at −1.' },
        { q: 'A flat (horizontal) line passes through (4, −2). What is its equation?', c: ['y = −2', 'y = 4', 'x = 4', 'y = −2x'], why: 'A flat line has slope 0, so every point has the same y-value: −2.' },
        { q: 'You are given two points on a line. What should you find first?', c: ['The slope, using (change in y) ÷ (change in x)', 'b, by using the first y-value', 'The x-intercept', 'The sum of the two x-values'], why: 'You need m before you can solve for b.' },
        { q: 'A phone battery reads 80% at 1 hour and 60% at 3 hours. Which equation fits?', c: ['y = −10x + 90', 'y = −20x + 100', 'y = −10x + 80', 'y = 10x + 70'], why: 'm = (60 − 80) ÷ (3 − 1) = −10. Then 80 = −10 + b, so b = 90.' },
      ],
      realLife: {
        text: `<p>Real life rarely hands you an equation. It hands you <b>data</b> (numbers you measured), and you build the equation yourself.</p>
          <ul><li><b>Phone battery:</b> 70% at 2 hours and 40% at 5 hours. Slope = (40 − 70) ÷ (5 − 2) = −10 per hour. Then 70 = −10·2 + b, so b = 90 and y = −10x + 90. The phone dies at 9 hours.</li>
          <li><b>Growing plant:</b> a table of its height each week gives you the growth rate (m) and the starting height (b).</li></ul>
          <p>Once you have the equation, you can predict times and amounts you never measured.</p>`,
        prompt: 'A bucket holds 12 liters after 2 minutes of filling and 20 liters after 4 minutes. Write the equation in y = mx + b form, and explain what m and b mean.',
      },
      practice: 'slope',
    },
    {
      key: 'a05-04',
      title: 'Point-slope form',
      videos: [
        { id: 'K_OI9LA54AA', title: 'Introduction to point-slope form' },
        { id: 'LtpXvUCrgrM', title: 'Point-slope and slope-intercept form from two points' },
      ],
      learn: `
        <p>Sometimes you know the slope and a point, but the point is <b>not</b> the y-intercept. Then <b>point-slope form</b> (a way to write a line using one point and the slope) is fastest:</p>
        <p><b>y − y₁ = m(x − x₁)</b></p>
        <ul>
          <li><b>m</b> = the slope</li>
          <li><b>(x₁, y₁)</b> (say "x-one, y-one") = the point you know</li>
        </ul>
        <p><b>Watch the signs!</b> The form has minus signs built in. For the point (3, −2), y − (−2) becomes <b>y + 2</b>. So the line with slope 4 through (3, −2) is y + 2 = 4(x − 3).</p>
        <p><b>Reading it backward:</b> in y − 5 = 2(x + 1), flip both signs to get the point (−1, 5). The slope is 2.</p>
        <p><b>Worked example:</b> slope 3, through (2, 5).</p>
        <ol>
          <li>Plug in: y − 5 = 3(x − 2)</li>
          <li>To change it to slope-intercept form, <b>distribute</b> (multiply the 3 by each thing inside the parentheses): y − 5 = 3x − 6</li>
          <li>Add 5 to both sides: y = 3x − 1</li>
          <li>Check with (2, 5): 3·2 − 1 = 5. It works!</li>
        </ol>
        <p>Got two points instead? Find the slope first, then use either point.</p>`,
      quiz: [
        { q: 'Write the line with slope 3 through (2, 5) in point-slope form.', c: ['y − 5 = 3(x − 2)', 'y − 2 = 3(x − 5)', 'y + 5 = 3(x + 2)', 'y − 5 = 2(x − 3)'], why: 'y − y₁ = m(x − x₁) with m = 3, x₁ = 2, y₁ = 5.' },
        { q: 'Write the line with slope 4 through (3, −2) in point-slope form.', c: ['y + 2 = 4(x − 3)', 'y − 2 = 4(x − 3)', 'y + 2 = 4(x + 3)', 'y − 3 = 4(x + 2)'], why: 'y − (−2) becomes y + 2. The x part is x − 3.' },
        { q: 'Which point is on the line y − 5 = 2(x + 1)?', c: ['(−1, 5)', '(1, 5)', '(5, −1)', '(−1, −5)'], why: 'x + 1 means x − (−1), so x₁ = −1. y − 5 means y₁ = 5.' },
        { q: 'What is the slope of y − 5 = 2(x + 1)?', c: ['2', '5', '1', '−1'], why: 'The slope is the number in front of the parentheses.' },
        { q: 'Which point and slope does y + 4 = −3(x − 6) show?', c: ['Point (6, −4), slope −3', 'Point (−6, 4), slope −3', 'Point (6, 4), slope 3', 'Point (−4, 6), slope −3'], why: 'Flip the signs inside: x − 6 gives 6, y + 4 gives −4. The slope is −3.' },
        { q: 'Rewrite y − 5 = 3(x − 2) in slope-intercept form.', c: ['y = 3x − 1', 'y = 3x + 3', 'y = 3x − 11', 'y = 3x + 11'], why: 'Distribute: y − 5 = 3x − 6. Add 5 to both sides: y = 3x − 1.' },
        { q: 'Rewrite y + 2 = −4(x − 1) in slope-intercept form.', c: ['y = −4x + 2', 'y = −4x + 6', 'y = −4x − 6', 'y = −4x − 3'], why: 'Distribute: y + 2 = −4x + 4. Subtract 2: y = −4x + 2.' },
        { q: 'A line goes through (1, 2) and (3, 8). Using the point (1, 2), what is its point-slope form?', c: ['y − 2 = 3(x − 1)', 'y − 2 = 6(x − 1)', 'y − 1 = 3(x − 2)', 'y + 2 = 3(x + 1)'], why: 'm = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3. Then plug in x₁ = 1, y₁ = 2.' },
        { q: 'Which equation is written in point-slope form?', c: ['y − 7 = 2(x − 4)', 'y = 2x − 1', '2x + y = 7', 'y = 7'], why: 'Point-slope form looks like y − y₁ = m(x − x₁), with a point inside.' },
        { q: 'Point-slope form is the quickest choice when you know…', c: ['the slope and any one point on the line', 'only the y-intercept', 'only the x-intercept', 'two different slopes'], why: 'Point-slope form needs exactly two things: m and one point (x₁, y₁).' },
        { q: 'A line has slope 1/2 and goes through (−2, 3). What is its slope-intercept form?', c: ['y = (1/2)x + 4', 'y = (1/2)x + 2', 'y = (1/2)x + 5', 'y = (1/2)x − 2'], why: 'y − 3 = (1/2)(x + 2) becomes y − 3 = (1/2)x + 1. Add 3: y = (1/2)x + 4.' },
        { q: 'A tank fills at 5 gallons per minute. At 4 minutes it holds 30 gallons, so y − 30 = 5(x − 4). How much was in it at the start (x = 0)?', c: ['10 gallons', '30 gallons', '50 gallons', '26 gallons'], why: 'y − 30 = 5(0 − 4) = −20, so y = 10. Or: 4 minutes added 20 gallons, so 30 − 20 = 10.' },
      ],
      realLife: {
        text: `<p>Point-slope form is perfect when you jump into the <b>middle of a story</b>. You know a rate and one moment, but not the start.</p>
          <ul><li><b>Game download:</b> after 3 minutes it is 45% done, and it gains 10% each minute. y − 45 = 10(x − 3) becomes y = 10x + 15, so it was already 15% done at the start.</li>
          <li><b>Road trip:</b> after 2 hours the trip counter reads 130 miles, and the car goes 60 miles per hour. y − 130 = 60(x − 2) becomes y = 60x + 10, so the counter read 10 miles at the start.</li></ul>
          <p>Point-slope form helps you work backward to the beginning.</p>`,
        prompt: 'A candle is 18 cm tall after burning for 3 hours, and it burns 2 cm each hour. Write the point-slope equation, then explain how tall the candle was at the start.',
      },
      practice: 'pointSlope',
    },
    {
      key: 'a05-05',
      title: 'Standard form',
      videos: [
        { id: '6CFE60iP2Ug', title: 'Standard form for linear equations' },
        { id: 'xGmef7lFc5w', title: 'Finding intercepts from an equation' },
      ],
      learn: `
        <p><b>Standard form</b> (a way to write a line with x and y on the same side) looks like <b>Ax + By = C</b>. A, B, and C are <b>integers</b> (whole numbers and their negatives, no fractions), and A is usually not negative. Example: 3x + 4y = 12.</p>
        <p>Finding the <b>intercepts</b> (the points where the line crosses the two axes) is easy in this form:</p>
        <ul>
          <li><b>x-intercept:</b> put y = 0 and solve.</li>
          <li><b>y-intercept:</b> put x = 0 and solve.</li>
        </ul>
        <p>Plot those two dots and connect them. That is the whole graph!</p>
        <p><b>Worked example:</b> 3x + 4y = 12</p>
        <ul>
          <li>y = 0: 3x = 12, so x = 4. Dot at (4, 0).</li>
          <li>x = 0: 4y = 12, so y = 3. Dot at (0, 3).</li>
          <li>For slope-intercept form, solve for y: 4y = −3x + 12. Divide everything by 4: y = −(3/4)x + 3.</li>
        </ul>
        <p><b>Going the other way:</b> start with y = (2/3)x − 4. Multiply everything by 3 to clear the fraction: 3y = 2x − 12. Subtract 2x from both sides: −2x + 3y = −12. Multiply by −1 so A is positive: 2x − 3y = 12.</p>`,
      quiz: [
        { q: 'Which equation is in standard form?', c: ['2x + 5y = 10', 'y = 2x + 5', 'y − 5 = 2(x − 1)', 'y = 10'], why: 'Standard form is Ax + By = C, with x and y together on one side.' },
        { q: 'What is the x-intercept of 5x + 2y = 20?', c: ['(4, 0)', '(10, 0)', '(0, 4)', '(20, 0)'], why: 'Put y = 0: 5x = 20, so x = 4.' },
        { q: 'What is the y-intercept of 5x + 2y = 20?', c: ['(0, 10)', '(0, 4)', '(10, 0)', '(0, 20)'], why: 'Put x = 0: 2y = 20, so y = 10.' },
        { q: 'What is the y-intercept of 2x − 3y = 12?', c: ['(0, −4)', '(0, 4)', '(0, 6)', '(−4, 0)'], why: 'Put x = 0: −3y = 12, so y = 12 ÷ (−3) = −4.' },
        { q: 'Rewrite 3x + 4y = 12 in slope-intercept form.', c: ['y = −(3/4)x + 3', 'y = (3/4)x + 3', 'y = −3x + 12', 'y = −(4/3)x + 3'], why: 'Subtract 3x: 4y = −3x + 12. Divide every term by 4.' },
        { q: 'What is the slope of 2x − 3y = 12?', c: ['2/3', '−2/3', '2', '3/2'], why: '−3y = −2x + 12. Divide by −3: y = (2/3)x − 4. The slope is 2/3.' },
        { q: 'Rewrite y = −2x + 7 in standard form.', c: ['2x + y = 7', '−2x + y = 7', '2x − y = 7', 'x + 2y = 7'], why: 'Add 2x to both sides: 2x + y = 7.' },
        { q: 'Rewrite y = (2/3)x − 4 in standard form with integers (no fractions).', c: ['2x − 3y = 12', '2x − 3y = 4', '2x + 3y = 12', '3x − 2y = 12'], why: 'Times 3: 3y = 2x − 12. Move 2x over: −2x + 3y = −12. Times −1: 2x − 3y = 12.' },
        { q: 'To graph 6x + 3y = 18 using intercepts, which two dots do you plot?', c: ['(3, 0) and (0, 6)', '(6, 0) and (0, 3)', '(18, 0) and (0, 18)', '(3, 0) and (0, 3)'], why: 'y = 0: 6x = 18, x = 3. x = 0: 3y = 18, y = 6.' },
        { q: 'Museum tickets cost $5 for adults and $2 for kids. You spend exactly $40. With x adults and y kids, which equation fits?', c: ['5x + 2y = 40', '2x + 5y = 40', 'x + y = 40', '5x − 2y = 40'], why: 'Adults cost 5x dollars and kids cost 2y dollars. Together they make $40.' },
        { q: 'Same tickets (5x + 2y = 40). If you buy 0 adult tickets, how many kid tickets can you buy?', c: ['20', '8', '40', '80'], why: 'Put x = 0: 2y = 40, so y = 20. This is the y-intercept.' },
        { q: 'You put x = 0 into Ax + By = C and solve. What do you find?', c: ['The y-intercept', 'The x-intercept', 'The slope', 'The point (0, 0)'], why: 'Every point on the y-axis has x = 0, so you find where the line crosses it.' },
      ],
      realLife: {
        text: `<p>Standard form shines when <b>two things add up to a total</b>.</p>
          <p>You have $24 for a family picnic. A box of dates costs $3 and a bottle of water costs $1. If x = boxes of dates and y = bottles of water, then <b>3x + y = 24</b>.</p>
          <ul><li>Only dates (y = 0): 3x = 24, so 8 boxes.</li>
          <li>Only water (x = 0): 24 bottles.</li>
          <li>Every whole-number point on the line between them is another way to spend exactly $24, like 5 boxes and 9 bottles.</li></ul>
          <p>Games work the same way: 2 points per coin plus 5 points per gem = 40 points.</p>`,
        prompt: 'You have $20 to spend on $4 books and $2 notebooks. Write a standard-form equation, then find how many you could buy if you bought only books or only notebooks.',
      },
      practice: 'standardForm',
    },
    {
      key: 'a05-06',
      title: 'Choosing a form of a linear equation',
      videos: [
        { id: '-6Fu2T_RSGM', title: 'Writing equations in all forms' },
        { id: 'XOIhNVeLfWs', title: 'Converting from slope-intercept to standard form' },
      ],
      learn: `
        <p>You now know three <b>forms</b> (ways of writing) of a linear equation. All three can describe the <b>same line</b>. Pick the one that matches the facts you have.</p>
        <ul>
          <li><b>Slope-intercept, y = mx + b:</b> use it when you know the slope and the y-intercept (the starting amount). It is also the easiest to graph.</li>
          <li><b>Point-slope, y − y₁ = m(x − x₁):</b> use it when you know the slope and any point, or two points.</li>
          <li><b>Standard, Ax + By = C:</b> use it to find both intercepts fast, or when two things add up to a total (like $2 snacks plus $3 drinks = $12).</li>
        </ul>
        <p><b>Worked example:</b> a line has slope 3 and goes through (2, 1). Write it all three ways.</p>
        <ol>
          <li>Point-slope: y − 1 = 3(x − 2)</li>
          <li>Slope-intercept: distribute to get y − 1 = 3x − 6, then add 1: y = 3x − 5</li>
          <li>Standard: subtract 3x from both sides: −3x + y = −5. Multiply by −1: 3x − y = 5</li>
        </ol>
        <p><b>Check:</b> (2, 1) works in all three. For example, 3·2 − 1 = 5.</p>
        <p><b>To spot a form:</b> y alone on one side means slope-intercept. Parentheses with a point means point-slope. x and y together on one side means standard.</p>`,
      quiz: [
        { q: 'You know the slope is 4 and the y-intercept is −2. Which form lets you write the equation fastest?', c: ['Slope-intercept (y = mx + b)', 'Point-slope (y − y₁ = m(x − x₁))', 'Standard (Ax + By = C)', 'You need a table first'], why: 'Just plug in m = 4 and b = −2: y = 4x − 2.' },
        { q: 'You know the slope is −2 and the line goes through (5, 3). Which form lets you write the equation fastest?', c: ['Point-slope (y − y₁ = m(x − x₁))', 'Slope-intercept (y = mx + b)', 'Standard (Ax + By = C)', 'You need a table first'], why: 'Plug in right away: y − 3 = −2(x − 5).' },
        { q: 'You want to find both intercepts quickly. Which form makes that easiest?', c: ['Standard (Ax + By = C)', 'Slope-intercept (y = mx + b)', 'Point-slope (y − y₁ = m(x − x₁))', 'You must graph it first'], why: 'In standard form, put x = 0 for one intercept and y = 0 for the other.' },
        { q: 'What form is 4x − 3y = 9 written in?', c: ['Standard form', 'Slope-intercept form', 'Point-slope form', 'It is not a line'], why: 'x and y are together on one side, like Ax + By = C.' },
        { q: 'What form is y + 1 = 5(x − 2) written in?', c: ['Point-slope form', 'Slope-intercept form', 'Standard form', 'It is not a line'], why: 'It matches y − y₁ = m(x − x₁), with the point (2, −1) and slope 5.' },
        { q: 'Which equation is the same line as y = 3x − 5?', c: ['3x − y = 5', '3x + y = 5', 'x − 3y = 5', 'y − 1 = 3(x + 2)'], why: '3x − y = 5 → −y = −3x + 5 → y = 3x − 5.' },
        { q: 'Which equation is the same line as y + 4 = 2(x − 3)?', c: ['y = 2x − 10', 'y = 2x − 2', 'y = 2x − 7', 'y = 2x + 2'], why: 'Distribute: y + 4 = 2x − 6. Subtract 4: y = 2x − 10.' },
        { q: 'What is the slope of 6x + 2y = 10?', c: ['−3', '6', '3', '5'], why: '2y = −6x + 10. Divide by 2: y = −3x + 5.' },
        { q: 'Pencils cost $1 and notebooks cost $3. You spend exactly $15. With x pencils and y notebooks, which equation fits?', c: ['x + 3y = 15', '3x + y = 15', 'y = 3x + 15', 'x + y = 15'], why: 'Pencils cost 1x, notebooks cost 3y, and the total is 15. That is standard form.' },
        { q: 'A plant is 4 cm tall now and grows 2 cm each week. Which equation fits (x = weeks)?', c: ['y = 2x + 4', 'y = 4x + 2', 'y = 2x − 4', '2x + y = 4'], why: 'Start (b) = 4 and rate (m) = 2, so slope-intercept form fits best.' },
        { q: 'After 3 weeks you have saved $50, and you save $10 each week. Which equation fits (x = weeks)?', c: ['y − 50 = 10(x − 3)', 'y − 3 = 10(x − 50)', 'y − 50 = 3(x − 10)', 'y + 50 = 10(x + 3)'], why: 'You know the point (3, 50) and the slope 10. Use point-slope form.' },
        { q: 'Do y = −2x + 6 and 2x + y = 6 describe the same line?', c: ['Yes, solving 2x + y = 6 for y gives y = −2x + 6', 'No, they look different', 'No, one slope is negative and the other is positive', 'Only when x = 0'], why: 'Subtract 2x from both sides of 2x + y = 6 to get y = −2x + 6.' },
      ],
      realLife: {
        text: `<p>Choosing a form is like choosing a tool. You could hit a screw with a hammer, but a screwdriver is easier.</p>
          <ul><li><b>Gym:</b> $20 to join plus $10 a month. You know the start and the rate, so use <b>y = 10x + 20</b>.</li>
          <li><b>Savings check-in:</b> after 4 weeks you have $90, and you add $15 a week. You know one moment and the rate, so use <b>y − 90 = 15(x − 4)</b>.</li>
          <li><b>Snack table:</b> $2 chips and $3 juices for exactly $30. Two things make a total, so use <b>2x + 3y = 30</b>.</li></ul>`,
        prompt: 'Describe a situation from your own life that could be drawn as a line. Which form would you use to write its equation, and why is that form the best fit?',
      },
    },
    pick('alg-8'),
  ],
};
