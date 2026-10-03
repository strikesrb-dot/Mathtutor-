// Unit 4 — Linear equations & graphs. NJ: A.REI.D.10, A.CED.A.2, F.IF.B.4, F.IF.B.6
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
import { pick } from '../legacy.js';

export default {
  id: 'a04', n: 4, title: 'Linear equations & graphs', nj: ['A.REI.D.10', 'A.CED.A.2', 'F.IF.B.4', 'F.IF.B.6'],
  lessons: [
    {
      key: 'a04-01',
      title: 'Two-variable linear equations',
      videos: [
        { id: 'AOxMJRtoR2A', title: 'Two-variable linear equations and their graphs' },
        { id: 'qk69pR91R00', title: 'Checking ordered pair solutions to equations example 1' },
        { id: '86NwKBcOlow', title: 'Graphing solutions to two-variable linear equations example 1' },
      ],
      learn: `
        <p>An equation like <b>y = 2x + 1</b> has two <b>variables</b> (letters that stand for numbers), x and y. It doesn't have just one answer. It has lots of them.</p>
        <p>A <b>solution</b> is an <b>ordered pair</b> (two numbers written as (x, y), with x always first) that makes the equation true.</p>
        <p><b>Worked example:</b> Is (3, 7) a solution of y = 2x + 1?</p>
        <ol>
          <li>Put in x = 3 and y = 7: 7 = 2(3) + 1.</li>
          <li>Do the right side: 2(3) + 1 = 6 + 1 = 7.</li>
          <li>7 = 7 is true, so <b>yes</b>, (3, 7) is a solution.</li>
        </ol>
        <p>Now try (2, 6): 2(2) + 1 = 5, and 6 is not 5. So (2, 6) is <b>not</b> a solution.</p>
        <p><b>Graphing from a table:</b> pick a few x values and find each y.</p>
        <ul>
          <li>x = 0 → y = 2(0) + 1 = 1, so plot (0, 1)</li>
          <li>x = 1 → y = 2(1) + 1 = 3, so plot (1, 3)</li>
          <li>x = 2 → y = 2(2) + 1 = 5, so plot (2, 5)</li>
        </ul>
        <p>Plot the points on the <b>coordinate plane</b> (the grid with the x-axis going across and the y-axis going up). They land in a straight line, which is why it's called a <b>linear</b> equation. Every point on the line is a solution. Every point off the line is not.</p>`,
      quiz: [
        { q: 'Is (3, 7) a solution of y = 2x + 1?', c: ['Yes, because 2(3) + 1 = 7', 'No, because 2 × 3 = 6, not 7', 'No, because 2(7) + 1 = 15, not 3', 'Only if x and y are the same number'], why: 'Plug in x = 3: 2(3) + 1 = 7. That matches y = 7, so the point works.' },
        { q: 'In the ordered pair (5, −2), which number is x?', c: ['5', '−2', 'Whichever number is bigger', 'You can\'t tell'], why: 'Ordered pairs always go (x, y). The first number is x.' },
        { q: 'For y = 3x − 2, what is y when x = 4?', c: ['10', '12', '14', '5'], why: '3 × 4 = 12, then 12 − 2 = 10. So (4, 10) is a solution.' },
        { q: 'Is (2, 6) a solution of y = 2x + 1?', c: ['No, because 2(2) + 1 = 5, not 6', 'Yes, because 2 × 3 = 6', 'Yes, because 6 is bigger than 2', 'Yes, every point works in a linear equation'], why: 'Plug in x = 2: 2(2) + 1 = 5. Since y is 6, not 5, the point is not on the line.' },
        { q: 'Make a table for y = 2x + 1 using x = 0, 1, 2. What are the y values?', c: ['1, 3, 5', '2, 3, 4', '0, 2, 4', '3, 5, 7'], why: '2(0) + 1 = 1, 2(1) + 1 = 3, and 2(2) + 1 = 5.' },
        { q: 'Which point is NOT a solution of y = −x + 5?', c: ['(2, 4)', '(0, 5)', '(5, 0)', '(1, 4)'], why: 'For x = 2: −2 + 5 = 3, not 4. The other three points all make the equation true.' },
        { q: 'Is (−1, 1) a solution of y = 2x + 3?', c: ['Yes, because 2(−1) + 3 = 1', 'No, because 2(1) + 3 = 5', 'No, because 2(−1) + 3 = −5', 'No, negative numbers can never be solutions'], why: '2 × (−1) = −2, and −2 + 3 = 1. That matches y = 1.' },
        { q: 'Is (2, 3) a solution of 3x + 2y = 12?', c: ['Yes, because 3(2) + 2(3) = 12', 'No, because 3(3) + 2(2) = 13', 'No, because 3 + 2 + 2 + 3 = 10', 'No, the equation has to start with "y ="'], why: '3 × 2 = 6 and 2 × 3 = 6. Then 6 + 6 = 12, so both sides match.' },
        { q: 'How many solutions does y = x + 1 have?', c: ['Infinitely many (every point on its line)', 'Exactly one', 'Exactly two', 'None'], why: 'Any x you pick gives a y. Every point on the line is a solution, and a line goes on forever.' },
        { q: 'You plot several solutions of y = 2x + 1. What shape do the points make?', c: ['A straight line', 'A U-shaped curve', 'A circle', 'Scattered dots with no pattern'], why: 'Linear means line. Solutions of a linear equation always land on one straight line.' },
        { q: 'What number goes in the blank so that (3, __) is a solution of y = 4x − 5?', c: ['7', '17', '12', '−2'], why: '4 × 3 = 12, then 12 − 5 = 7. So (3, 7) is on the line.' },
        { q: 'Tickets cost $5 each, so the total cost is y = 5x for x tickets. Which point fits?', c: ['(4, 20)', '(20, 4)', '(4, 9)', '(5, 5)'], why: '4 tickets × $5 = $20, so x = 4 and y = 20. (20, 4) switches the numbers.' },
      ],
      realLife: {
        text: `<p>A two-variable equation shows how two things are tied together. Each solution is one combo that works.</p>
          <ul><li><b>Snacks:</b> chips cost $2 and juice costs $1. Spending exactly $10 means 2x + y = 10. The pair (3, 4) works: 3 chips and 4 juices. So does (5, 0).</li>
          <li><b>Basketball:</b> 2-pointers and 3-pointers adding up to 12 points means 2x + 3y = 12. The pair (3, 2) works: 3 two-pointers and 2 three-pointers.</li>
          <li><b>Phone battery:</b> y = 100 − 10x. The point (3, 70) means after 3 hours, 70% is left.</li></ul>`,
        prompt: 'You scored 12 points using only 2-pointers and 3-pointers (2x + 3y = 12). Find two different solutions and explain what each one means in the game.',
      },
      practice: 'pointOnLine',
    },
    pick('alg-5'),
    {
      key: 'a04-03',
      title: 'Horizontal and vertical lines',
      videos: [
        { id: 'J43CIbKpdWc', title: 'Horizontal & vertical lines' },
        { id: '_npwsLh0vws', title: 'Does a vertical line represent a function?' },
      ],
      learn: `
        <p>Most lines tilt. Two special kinds of lines don't.</p>
        <p>A <b>horizontal line</b> (flat, going left to right) has the <b>same y</b> at every point. Its equation is <b>y = k</b>, where k is a <b>constant</b> (a number that doesn't change). The line y = 3 goes through (−2, 3), (0, 3), and (5, 3). Its slope is <b>0</b>: the rise is 0, and 0 ÷ run = 0.</p>
        <p>A <b>vertical line</b> (straight up and down) has the <b>same x</b> at every point. Its equation is <b>x = k</b>. The line x = −4 goes through (−4, 0), (−4, 2), and (−4, 7). Its slope is <b>undefined</b> (it has no value): the run is 0, and you can't divide by 0.</p>
        <p><b>Worked example:</b> Find the line through (2, 5) and (2, −1).</p>
        <ol>
          <li>Both x values are 2. Only y changes.</li>
          <li>Same x means vertical, so the equation is <b>x = 2</b>.</li>
          <li>Check the slope: (−1 − 5) ÷ (2 − 2) = −6 ÷ 0. That's undefined, just like a vertical line should be.</li>
        </ol>
        <p><b>Trick:</b> read y = 3 as "y is always 3," so the line stays at height 3 and runs flat. Read x = 2 as "x is always 2," so the line stands straight up. Bonus: the x-axis is the line y = 0, and the y-axis is the line x = 0.</p>`,
      quiz: [
        { q: 'What does the graph of y = 4 look like?', c: ['A horizontal (flat) line through (0, 4)', 'A vertical line through (4, 0)', 'A slanted line with slope 4', 'A single dot at (4, 4)'], why: 'Every point has y = 4, so the line stays at height 4 and goes straight across.' },
        { q: 'What does the graph of x = −2 look like?', c: ['A vertical line through (−2, 0)', 'A horizontal line through (0, −2)', 'A slanted line with slope −2', 'A single dot at (−2, −2)'], why: 'Every point has x = −2, so the line goes straight up and down at −2.' },
        { q: 'What is the slope of the line y = 7?', c: ['0', '7', 'undefined', '1'], why: 'y = 7 is horizontal. The rise is 0, and 0 ÷ any run = 0.' },
        { q: 'What is the slope of the line x = 5?', c: ['undefined', '0', '5', '1/5'], why: 'x = 5 is vertical. The run is 0, and dividing by 0 has no answer.' },
        { q: 'Which equation is the line through (1, 6) and (4, 6)?', c: ['y = 6', 'x = 6', 'y = 6x', 'x = 1'], why: 'Both points have y = 6. Same y means a horizontal line: y = 6.' },
        { q: 'Which equation is the line through (3, −1) and (3, 8)?', c: ['x = 3', 'y = 3', 'y = −1', 'y = 3x'], why: 'Both points have x = 3. Same x means a vertical line: x = 3.' },
        { q: 'Which point is on the line x = −4?', c: ['(−4, 9)', '(9, −4)', '(4, −4)', '(0, −4)'], why: 'On x = −4, the x value (the first number) must be −4. The y value can be anything.' },
        { q: 'Which point is on the line y = 2?', c: ['(−5, 2)', '(2, −5)', '(2, 0)', '(0, −2)'], why: 'On y = 2, the y value (the second number) must be 2. The x value can be anything.' },
        { q: 'What is the slope between (2, 5) and (2, −1)?', c: ['undefined', '0', '−6', '6'], why: '(−1 − 5) ÷ (2 − 2) = −6 ÷ 0. You can\'t divide by 0, so the slope is undefined.' },
        { q: 'Where does the line y = −3 cross the y-axis?', c: ['(0, −3)', '(−3, 0)', 'It never crosses the y-axis', '(−3, −3)'], why: 'The y-axis is where x = 0. On y = −3, that point is (0, −3).' },
        { q: 'Which equation is the x-axis?', c: ['y = 0', 'x = 0', 'y = x', 'x = 1'], why: 'Every point on the x-axis has y = 0, like (3, 0) and (−5, 0).' },
        { q: 'A line has slope 0 and goes through (4, −9). What is its equation?', c: ['y = −9', 'x = 4', 'y = 4', 'x = −9'], why: 'Slope 0 means horizontal, so y stays the same as the point\'s y: y = −9.' },
      ],
      realLife: {
        text: `<p>A horizontal line means "nothing is changing." A vertical line means "straight up."</p>
          <ul><li><b>Cruising plane:</b> a jet flying level at 35,000 feet has a height graph of y = 35,000. Its slope is 0 because the height isn't changing.</li>
          <li><b>Flat price:</b> a $20 unlimited-rides day pass costs $20 whether you ride 2 times or 12 times, so y = 20.</li>
          <li><b>Walls:</b> drawn from the side, a straight-up cliff 10 feet from where you start is the line x = 10. You can't walk up it, and that is what "undefined slope" feels like.</li></ul>`,
        prompt: 'Think of something in your life that stays the same over time. Describe what its graph looks like, write its equation, and explain why its slope is 0.',
      },
      practice: 'horizVert',
    },
    pick('alg-6'),
    {
      key: 'a04-05',
      title: 'Applying intercepts and slope',
      videos: [
        { id: 'XQlaZuh7E8w', title: 'Slope, x-intercept, y-intercept meaning in context' },
        { id: 'w6R8rywmgek', title: 'Linear equation word problems' },
        { id: 'AoMjn2qKvXs', title: 'Comparing linear rates example' },
      ],
      learn: `
        <p>In a word problem, the slope and intercepts tell a story. Always say what they mean with <b>units</b> (labels like dollars, hours, or gallons).</p>
        <ul>
          <li><b>Slope</b> = the rate: how much y changes for each 1 of x. Look for the words "per" or "each." A negative slope means the amount is going down.</li>
          <li><b>y-intercept</b> = the starting amount (the value of y when x = 0).</li>
          <li><b>x-intercept</b> = the x value when y hits 0, like when something runs out.</li>
        </ul>
        <p><b>Worked example:</b> A water bottle has y = −4x + 24 ounces left after x hours.</p>
        <ol>
          <li>Slope −4: you drink 4 ounces <b>each hour</b>, so the water goes down.</li>
          <li>y-intercept 24: at 0 hours, the bottle has <b>24 ounces</b>.</li>
          <li>x-intercept: set y = 0. Then 0 = −4x + 24, so 4x = 24 and x = 6. The bottle is <b>empty after 6 hours</b>.</li>
        </ol>
        <p><b>On a graph:</b> the start is where the line touches the y-axis. "Runs out" is where it touches the x-axis. The rate is how far the line goes up or down for each 1 step to the right.</p>
        <p>Don't mix them up: the starting amount is not the rate.</p>`,
      quiz: [
        { q: 'A savings jar has y = 15x + 40 dollars after x weeks. What does 40 mean?', c: ['You had $40 at the start', 'You save $40 each week', 'You will have $40 after 15 weeks', 'You need 40 weeks to finish'], why: '40 is the y-intercept: the amount when x = 0 weeks, before any saving.' },
        { q: 'Same jar: y = 15x + 40 dollars after x weeks. What does 15 mean?', c: ['You add $15 each week', 'You started with $15', 'It takes 15 weeks', 'You have $15 in total'], why: '15 is the slope, the rate: dollars added per week.' },
        { q: 'A car has y = −2x + 14 gallons of gas left after x hours of driving. What does the −2 mean?', c: ['The car uses 2 gallons each hour', 'The tank holds 2 gallons', 'The car gains 2 gallons each hour', 'The trip takes 2 hours'], why: 'The slope −2 means the gallons go DOWN by 2 for every 1 hour.' },
        { q: 'Same car: y = −2x + 14. What does the x-intercept tell you?', c: ['After 7 hours, the tank is empty', 'The tank starts with 7 gallons', 'The car uses 7 gallons per hour', 'After 14 hours, the tank is empty'], why: 'Set y = 0: 0 = −2x + 14, so x = 7. The x-intercept is when the gas runs out.' },
        { q: 'A graph shows free space on a phone (GB) vs. videos downloaded. It starts at (0, 64) and hits the x-axis at (32, 0). What does (32, 0) mean?', c: ['After 32 videos, the phone has no free space left', 'Each video uses 32 GB', 'The phone starts with 32 GB free', 'After 64 videos, the phone is full'], why: 'At the x-intercept, y (free space) is 0. That happens at 32 videos.' },
        { q: 'Same phone graph: from (0, 64) to (32, 0). How much space does each video use?', c: ['2 GB', '32 GB', '64 GB', '0.5 GB'], why: 'Slope = (0 − 64) ÷ (32 − 0) = −2. Free space drops 2 GB per video.' },
        { q: 'You are y = −80x + 2,400 meters from home after walking x minutes. When do you get home?', c: ['After 30 minutes', 'After 2,400 minutes', 'After 80 minutes', 'After 2,320 minutes'], why: 'Home means 0 meters left: 0 = −80x + 2,400, so x = 2,400 ÷ 80 = 30.' },
        { q: 'A plane at 6,000 feet comes down 1,500 feet per minute to land. What is the slope of its height graph?', c: ['−1,500 feet per minute', '1,500 feet per minute', '6,000 feet per minute', '−4 feet per minute'], why: 'Going down means a negative slope. The height drops 1,500 feet each minute.' },
        { q: 'Same plane: 6,000 feet up, coming down 1,500 feet per minute. How many minutes until it lands?', c: ['4 minutes', '4,500 minutes', '7,500 minutes', '1/4 minute'], why: '6,000 ÷ 1,500 = 4. That is the x-intercept, when the height reaches 0.' },
        { q: 'A car wash fundraiser has profit y = 6x − 30 dollars after washing x cars. What does −30 mean?', c: ['They spent $30 on supplies before washing any cars', 'They lose $30 on every car', 'They need to wash 30 cars', 'They earn $30 per car'], why: 'At x = 0 cars, the profit is −$30. That is money spent before any cars were washed.' },
        { q: 'Table — minutes: 0, 5, 10 and oven temperature (°F): 75, 175, 275. What does the rate of change mean?', c: ['The oven heats up 20 °F each minute', 'The oven starts at 20 °F', 'The oven heats up 100 °F each minute', 'The oven starts at 175 °F'], why: '(175 − 75) ÷ (5 − 0) = 100 ÷ 5 = 20 degrees per minute.' },
        { q: 'Ali has y = 10x + 50 dollars after x weeks. Bilal has y = 20x + 10. Who adds more money each week?', c: ['Bilal, because his slope (20) is bigger', 'Ali, because he started with more ($50)', 'Ali, because 10 + 50 is bigger than 20 + 10', 'They add the same amount each week'], why: 'Money added each week is the slope. $20 per week beats $10 per week.' },
      ],
      realLife: {
        text: `<p>Ads, bills, and phone screens are full of slopes and intercepts, even when nobody uses those words.</p>
          <ul><li><b>Phone data:</b> you start the month with 15 GB and use about 0.5 GB a day. The start is 15 GB (y-intercept), the rate is −0.5 GB per day (slope), and you run out after 30 days (x-intercept).</li>
          <li><b>Airport:</b> a jet 3,000 feet up, coming down 750 feet per minute, touches down after 4 minutes.</li>
          <li><b>Gift card:</b> a $40 card, spending $8 a week on lunch, lasts 5 weeks.</li></ul>`,
        prompt: 'Pick something that runs out over time, like a battery, data, or a gift card. Give its starting amount and rate, then explain what the y-intercept, slope, and x-intercept mean.',
      },
    },
    {
      key: 'a04-06',
      title: 'Modeling with linear equations and inequalities',
      videos: [
        { id: 'hBpI9IfmMKg', title: 'Constructing linear equation from context' },
        { id: 'MHgi8ZQCG0I', title: 'Writing two-variable inequalities word problem' },
        { id: 'E6rn-YD_2_Q', title: 'Using inequalities to solve problems' },
      ],
      learn: `
        <p>To <b>model</b> a story (describe it with math), turn the words into an equation or an inequality.</p>
        <ol>
          <li><b>Name your variables.</b> Say what each letter stands for, like "x = number of hours."</li>
          <li><b>Find the numbers.</b> Look for the starting amount and the price or rate for each one.</li>
          <li><b>Pick the sign.</b> "Exactly" or "total is" means =. "At most" or "no more than" means ≤. "At least" or "no less than" means ≥.</li>
        </ol>
        <p><b>Worked example 1:</b> Samosas cost $2 and mango drinks cost $3. You spend exactly $24. Let x = samosas and y = drinks. The model is <b>2x + 3y = 24</b>. One solution is (6, 4), because 2(6) + 3(4) = 12 + 12 = 24.</p>
        <p><b>Worked example 2:</b> A trampoline park charges $14 to get in plus $6 per hour. You have $50. Let x = hours. You can spend <b>at most</b> $50, so <b>6x + 14 ≤ 50</b>. Solve: 6x ≤ 36, so x ≤ 6. You can jump for up to 6 hours.</p>
        <p><b>Always check</b> with a number: 3 hours costs 6(3) + 14 = $32, and 32 ≤ 50. It works.</p>`,
      quiz: [
        { q: 'A pool has 900 gallons and drains 30 gallons per minute. Which equation gives the gallons left, y, after x minutes?', c: ['y = 900 − 30x', 'y = 30x + 900', 'y = 900x − 30', 'y = 30 − 900x'], why: 'Start at 900 and lose 30 every minute, so subtract 30x.' },
        { q: 'Samosas cost $2 and drinks cost $3. You spend exactly $24. If x = samosas and y = drinks, which equation fits?', c: ['2x + 3y = 24', '3x + 2y = 24', '2x + 3y ≤ 24', 'x + y = 24'], why: 'x samosas cost 2x and y drinks cost 3y. "Exactly" $24 means =.' },
        { q: 'Which sign matches "at most $50"?', c: ['≤ 50', '≥ 50', '< 50', '= 50'], why: '"At most" means $50 or less, so use ≤. Exactly $50 is allowed.' },
        { q: 'Which sign matches "at least 8 hours"?', c: ['≥ 8', '≤ 8', '> 8', '= 8'], why: '"At least" means 8 or more, so use ≥. Exactly 8 counts.' },
        { q: 'A trampoline park costs $14 to get in plus $6 per hour. You can spend at most $50. Which inequality fits, with x = hours?', c: ['6x + 14 ≤ 50', '6x + 14 ≥ 50', '14x + 6 ≤ 50', '6x − 14 ≤ 50'], why: 'The cost is $6 times x hours, plus $14. "At most" means ≤.' },
        { q: 'Solve 6x + 14 ≤ 50. What is the most hours you can stay at the trampoline park?', c: ['6 hours', '36 hours', '8 hours', '10 hours'], why: 'Subtract 14: 6x ≤ 36. Divide by 6: x ≤ 6.' },
        { q: 'Adult tickets cost $10 and kid tickets cost $6. A club can spend no more than $120. With a = adults and k = kids, which inequality fits?', c: ['10a + 6k ≤ 120', '10a + 6k ≥ 120', '6a + 10k ≤ 120', '16(a + k) ≤ 120'], why: 'Adult tickets cost 10a and kid tickets cost 6k. "No more than" means ≤.' },
        { q: 'Using 10a + 6k ≤ 120, can the club bring 6 adults and 10 kids?', c: ['Yes, it costs exactly $120, which is allowed', 'No, it costs $136, which is too much', 'No, because $120 is not less than $120', 'Yes, it costs only $96'], why: '10(6) + 6(10) = 60 + 60 = 120. "No more than $120" allows exactly $120.' },
        { q: 'A quiz has 2-point and 5-point questions. Hamza scored 40 points. With x = 2-point questions right and y = 5-point questions right, which equation fits?', c: ['2x + 5y = 40', '5x + 2y = 40', 'x + y = 40', '7(x + y) = 40'], why: '2-point questions give 2x points and 5-point questions give 5y points. The total is 40.' },
        { q: 'Your phone is at 90% and drops 6% each hour of gaming. You want at least 30% left. Which inequality fits, with x = hours?', c: ['90 − 6x ≥ 30', '90 − 6x ≤ 30', '6x − 90 ≥ 30', '90 + 6x ≥ 30'], why: 'Battery left is 90 − 6x. "At least 30%" means ≥ 30.' },
        { q: 'Solve 90 − 6x ≥ 30. What is the most hours you can play?', c: ['10 hours', '20 hours', '15 hours', '5 hours'], why: 'Subtract 90: −6x ≥ −60. Divide by −6 and flip the sign: x ≤ 10.' },
        { q: 'Bilal walks dogs for $12 per dog and wants to earn at least $96. What should x stand for?', c: ['The number of dogs Bilal walks', 'The $12 he earns per dog', 'The $96 he wants to earn', 'The amount he still needs'], why: 'x is the unknown that can change: how many dogs. The $12 and $96 are numbers you already know.' },
      ],
      realLife: {
        text: `<p>Every plan with a limit is an inequality. Every "exactly" is an equation.</p>
          <ul><li><b>Eid gifts:</b> you have $60. Toy cars cost $4 and books cost $9. With x cars and y books, 4x + 9y ≤ 60.</li>
          <li><b>Summer job:</b> you earn $15 an hour and want at least $300. So 15x ≥ 300, which means at least 20 hours.</li>
          <li><b>Road trip:</b> a full tank goes 400 miles, and you have already driven 150. The extra miles x must fit x + 150 ≤ 400, so at most 250 more.</li></ul>
          <p>Writing the model first makes the math the easy part.</p>`,
        prompt: 'Make up a story from your own life that has a money or time limit. Write the inequality, say what your variable means, and find one number that works.',
      },
      practice: 'writeModel',
    },
  ],
};
