// Unit 11 — Absolute value & piecewise functions. NJ: F.IF.C.7b, F.BF.B.3
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel @khanacademy).
// Every number in the quizzes was recomputed with node.
export default {
  id: 'a11', n: 11, title: 'Absolute value & piecewise functions', nj: ['F.IF.C.7b', 'F.BF.B.3'],
  lessons: [
    {
      key: 'a11-01',
      title: 'Absolute value and absolute value equations',
      videos: [
        { id: 'u6zDpUL5RkU', title: 'Absolute value equations' },
        { id: 'UvtWf4TVawE', title: 'Absolute value equation example' },
        { id: '15s6B7K9paA', title: 'Absolute value equation with no solution' },
      ],
      learn: `
        <p>The <b>absolute value</b> (how far a number is from zero on the number line) is written with two straight bars. <b>|−6| = 6</b> and <b>|6| = 6</b>, because both are 6 steps from zero. A distance is never negative, so an absolute value is never negative.</p>
        <p>An <b>absolute value equation</b> (an equation with a variable inside the bars) usually has <b>two answers</b>. That is because two numbers can be the same distance from a spot: one on each side.</p>
        <p><b>Worked example:</b> Solve |x − 3| = 5.</p>
        <ol>
          <li>Think: x is 5 steps away from 3 on the number line.</li>
          <li>Split it into two equations: x − 3 = 5 or x − 3 = −5.</li>
          <li>Solve each one: x = 8 or x = −2.</li>
          <li>Check: |8 − 3| = |5| = 5 and |−2 − 3| = |−5| = 5. Both work.</li>
        </ol>
        <p><b>Get the bars alone first.</b> For |x| + 4 = 10, subtract 4 from both sides: |x| = 6. So x = 6 or x = −6.</p>
        <p><b>Watch out for two special cases:</b></p>
        <ul>
          <li>If the bars equal a negative number, like |x| = −2, there is <b>no solution</b>. No distance can be negative.</li>
          <li>If the bars equal 0, there is only <b>one</b> answer. |x − 1| = 0 means x = 1.</li>
        </ul>`,
      quiz: [
        { q: 'What is |−9|?', c: ['9', '−9', '0', '1/9'], why: 'Absolute value is distance from zero. −9 is 9 steps from zero.' },
        { q: 'Which two numbers have an absolute value of 4?', c: ['4 and −4', '4 and 1/4', '−4 and −1/4', '4 and 0'], why: 'Both 4 and −4 are 4 steps from zero, one on each side.' },
        { q: 'What is |3 − 10|?', c: ['7', '−7', '13', '−13'], why: 'Do the inside first: 3 − 10 = −7. Then |−7| = 7.' },
        { q: 'Solve |x| = 8.', c: ['x = 8 or x = −8', 'x = 8 only', 'x = −8 only', 'no solution'], why: 'Both 8 and −8 are 8 steps from zero.' },
        { q: 'Solve |x − 3| = 5.', c: ['x = 8 or x = −2', 'x = 8 or x = −8', 'x = 2 or x = −8', 'x = 8 only'], why: 'x − 3 = 5 gives x = 8. x − 3 = −5 gives x = −2.' },
        { q: 'Solve |x + 4| = 6.', c: ['x = 2 or x = −10', 'x = 10 or x = −2', 'x = 2 or x = −2', 'x = 6 or x = −6'], why: 'x + 4 = 6 gives x = 2. x + 4 = −6 gives x = −10.' },
        { q: 'Solve |x| + 4 = 10.', c: ['x = 6 or x = −6', 'x = 14 or x = −14', 'x = 6 only', 'x = 10 or x = −10'], why: 'Get the bars alone first. Subtract 4 from both sides: |x| = 6.' },
        { q: 'Solve |x| = −3.', c: ['no solution', 'x = 3 or x = −3', 'x = −3 only', 'x = 3 only'], why: 'Absolute value is a distance, and a distance can never be negative.' },
        { q: 'How many solutions does |x − 5| = 0 have?', c: ['one: x = 5', 'two: x = 5 and x = −5', 'none', 'two: x = 0 and x = 5'], why: 'Only 5 is zero steps away from 5. Zero has no negative partner.' },
        { q: 'Solve |2x − 1| = 7.', c: ['x = 4 or x = −3', 'x = 4 or x = −4', 'x = 3 or x = −4', 'x = 4 only'], why: '2x − 1 = 7 gives x = 4. 2x − 1 = −7 gives 2x = −6, so x = −3.' },
        { q: 'Solve 3|x| = 12.', c: ['x = 4 or x = −4', 'x = 36 or x = −36', 'x = 9 or x = −9', 'x = 12 or x = −12'], why: 'Divide both sides by 3 first: |x| = 4. Then x = 4 or x = −4.' },
        { q: 'A thermostat is set to 70°F. The room is 4 degrees away from that. Which equation and answers fit?', c: ['|t − 70| = 4, so t = 74°F or 66°F', '|t − 70| = 4, so t = 74°F only', '|t + 70| = 4, so t = −66°F or −74°F', '|t − 4| = 70, so t = 74°F or −66°F'], why: '4 degrees away from 70 means 4 above or 4 below: 74 or 66.' },
      ],
      realLife: {
        text: `<p>Absolute value shows up any time only the <b>size of a difference</b> matters, not which way it goes.</p>
          <ul><li><b>Thermostat:</b> a smart thermostat set to 70°F sends an alert when the room is 3 degrees off. |t − 70| = 3 means 67°F or 73°F.</li>
          <li><b>Guess the jar:</b> the jar holds 150 candies. Guesses of 140 and 160 are both 10 away, so |g − 150| = 10 has two answers.</li>
          <li><b>Parking a plane:</b> the plane must stop within 2 feet of the stop line. Stopping 2 feet short and 2 feet past both count as "2 feet off."</li></ul>`,
        prompt: 'Your friend says |x − 2| = 6 has only one answer, x = 8. Explain in your own words why he is missing an answer, and find it.',
      },
    },
    {
      key: 'a11-02',
      title: 'Graphs of absolute value functions',
      videos: [
        { id: '1OtzfP8fCNU', title: 'Graphs of absolute value functions' },
        { id: 'Wri26sPEBoI', title: 'Shifting absolute value graphs' },
      ],
      learn: `
        <p>The graph of <b>f(x) = |x|</b> makes a <b>V shape</b>. Put in x = −2, −1, 0, 1, 2 and you get y = 2, 1, 0, 1, 2. The tip of the V is the <b>vertex</b> (the corner point where the graph turns around). For f(x) = |x|, the vertex is (0, 0).</p>
        <p>You can slide the V around without changing its shape. This is called a <b>shift</b> (a move left, right, up, or down).</p>
        <ul>
          <li><b>A number outside the bars</b> moves the V up or down. |x| + 3 goes <b>up 3</b>. |x| − 3 goes <b>down 3</b>.</li>
          <li><b>A number inside the bars</b> moves the V left or right, the <b>opposite</b> way of its sign. |x − 2| goes <b>right 2</b>. |x + 2| goes <b>left 2</b>.</li>
        </ul>
        <p><b>Worked example:</b> Graph g(x) = |x − 4| + 1.</p>
        <ol>
          <li>Inside the bars: x − 4 means move right 4.</li>
          <li>Outside the bars: + 1 means move up 1.</li>
          <li>So the vertex moves from (0, 0) to <b>(4, 1)</b>.</li>
          <li>Check a point: g(5) = |5 − 4| + 1 = 1 + 1 = 2. So (5, 2) is on the graph: one step right of the vertex and one step up, just like |x|.</li>
        </ol>
        <p><b>Why inside works backwards:</b> |x − 4| hits zero, its lowest value, when x = 4. So the tip of the V sits at x = 4.</p>`,
      quiz: [
        { q: 'What shape is the graph of f(x) = |x|?', c: ['a V shape', 'a straight line', 'a U shape', 'a circle'], why: 'Both sides go up in straight lines from the corner at (0, 0). That makes a V.' },
        { q: 'What is the vertex of f(x) = |x|?', c: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'], why: 'The lowest point is at x = 0, where |0| = 0.' },
        { q: 'How is g(x) = |x| + 5 moved compared to |x|?', c: ['up 5', 'down 5', 'right 5', 'left 5'], why: 'A number added outside the bars moves the graph up.' },
        { q: 'How is g(x) = |x − 3| moved compared to |x|?', c: ['right 3', 'left 3', 'up 3', 'down 3'], why: 'Inside the bars works the opposite way: x − 3 moves the V right 3.' },
        { q: 'How is g(x) = |x + 6| moved compared to |x|?', c: ['left 6', 'right 6', 'up 6', 'down 6'], why: 'Inside the bars, + 6 moves the V left 6. Its tip is at x = −6.' },
        { q: 'What is the vertex of g(x) = |x − 4| + 1?', c: ['(4, 1)', '(−4, 1)', '(1, 4)', '(4, −1)'], why: 'x − 4 inside moves right 4. + 1 outside moves up 1.' },
        { q: 'What is the vertex of g(x) = |x + 2| − 5?', c: ['(−2, −5)', '(2, −5)', '(−2, 5)', '(−5, −2)'], why: 'x + 2 inside moves left 2. − 5 outside moves down 5.' },
        { q: 'Which function has its vertex at (3, 2)?', c: ['f(x) = |x − 3| + 2', 'f(x) = |x + 3| + 2', 'f(x) = |x − 2| + 3', 'f(x) = |x + 3| − 2'], why: 'Right 3 needs x − 3 inside the bars. Up 2 needs + 2 outside.' },
        { q: 'The graph of |x| is moved down 4. What is the new function?', c: ['f(x) = |x| − 4', 'f(x) = |x − 4|', 'f(x) = |x + 4|', 'f(x) = |x| + 4'], why: 'Up and down moves go outside the bars. Down means subtract.' },
        { q: 'If f(x) = |x − 1| + 2, what is f(4)?', c: ['5', '3', '7', '1'], why: '4 − 1 = 3, and |3| = 3. Then 3 + 2 = 5.' },
        { q: 'If f(x) = |x + 3|, what is f(−5)?', c: ['2', '−2', '8', '−8'], why: '−5 + 3 = −2, and |−2| = 2. Absolute value is never negative.' },
        { q: 'Which point is on the graph of f(x) = |x| − 3?', c: ['(−2, −1)', '(−2, 1)', '(−2, −5)', '(2, 1)'], why: '|−2| = 2, then 2 − 3 = −1. So x = −2 gives y = −1.' },
      ],
      realLife: {
        text: `<p>A V-shaped graph shows up when something goes <b>down to a lowest point, then back up</b> at the same speed.</p>
          <ul><li><b>Walking past home:</b> you walk down a straight street at 1 block per minute and pass your house at minute 4. Your distance from home is d = |t − 4|. It drops to 0 at minute 4, then grows again. The vertex is (4, 0).</li>
          <li><b>Guessing game:</b> the answer is 50, so a guess g is off by |g − 50|. The tip of the V is at (50, 0): a perfect guess. If the game adds 2 extra points to every guess, |g − 50| + 2 moves the V up 2.</li></ul>`,
        prompt: 'Describe something in your life where a number goes down to a lowest point and then back up. Where would the vertex of its V be, and what does it mean?',
      },
    },
    {
      key: 'a11-03',
      title: 'Piecewise functions',
      videos: [
        { id: 'hg2HR9zJFq4', title: 'How to evaluate a piecewise function' },
        { id: 'PQiXRrT_14o', title: 'Graphing a piecewise function' },
        { id: '8OeKOVeIZMQ', title: 'Interpreting piecewise linear functions' },
      ],
      learn: `
        <p>A <b>piecewise function</b> (a function made of different rules for different groups of inputs) works like a shipping chart. Light boxes cost one price. Heavy boxes cost another.</p>
        <p>Each rule comes with a <b>condition</b> (a test on x, like "x is less than 0"). To find f(x), first check <b>which condition x passes</b>. Then use only that rule.</p>
        <p><b>Worked example:</b> f(x) has two pieces:</p>
        <ul>
          <li><b>x + 3</b> when x &lt; 0 (x is less than 0)</li>
          <li><b>2x</b> when x ≥ 0 (x is greater than or equal to 0)</li>
        </ul>
        <ol>
          <li>f(−5): −5 is less than 0, so use x + 3. f(−5) = −5 + 3 = <b>−2</b>.</li>
          <li>f(4): 4 is at least 0, so use 2x. f(4) = 2 · 4 = <b>8</b>.</li>
          <li>f(0): 0 is not less than 0, but it is equal to 0. So use 2x. f(0) = 2 · 0 = <b>0</b>.</li>
        </ol>
        <p><b>Reading the graph:</b> each piece is drawn only over its own x-values.</p>
        <ul>
          <li>A <b>closed dot</b> (filled-in circle) at the end of a piece means that point is included.</li>
          <li>An <b>open dot</b> (empty circle) means that point is left out.</li>
        </ul>
        <p>Each input passes only one condition, so it still gets exactly one output. That is why a piecewise function is still a function.</p>`,
      quiz: [
        { q: 'f(x) = x + 3 when x < 0, and f(x) = 2x when x ≥ 0. What is f(−5)?', c: ['−2', '−10', '8', '2'], why: '−5 is less than 0, so use x + 3: −5 + 3 = −2.' },
        { q: 'f(x) = x + 3 when x < 0, and f(x) = 2x when x ≥ 0. What is f(4)?', c: ['8', '7', '4', '2'], why: '4 is at least 0, so use 2x: 2 · 4 = 8.' },
        { q: 'f(x) = x + 3 when x < 0, and f(x) = 2x when x ≥ 0. What is f(0)?', c: ['0', '3', '2', '−3'], why: '0 passes x ≥ 0, not x < 0. So use 2x: 2 · 0 = 0.' },
        { q: 'g(x) = 5 when x ≤ 2, and g(x) = x − 1 when x > 2. What is g(2)?', c: ['5', '1', '2', '4'], why: '2 passes x ≤ 2 (less than or equal to 2), so g(2) = 5.' },
        { q: 'g(x) = 5 when x ≤ 2, and g(x) = x − 1 when x > 2. What is g(10)?', c: ['9', '5', '11', '10'], why: '10 is greater than 2, so use x − 1: 10 − 1 = 9.' },
        { q: 'On a piecewise graph, an open dot (empty circle) at the end of a piece means…', c: ['that point is not included', 'that point is included', 'the graph stops forever', 'the y-value there is 0'], why: 'Open means left out. A filled-in (closed) dot means the point is included.' },
        { q: 'Shipping costs $6 under 2 lb, $10 from 2 lb through 10 lb, and $18 over 10 lb. What does a 2 lb package cost?', c: ['$10', '$6', '$18', '$8'], why: '"Under 2 lb" leaves out 2. A 2 lb package is in the "2 lb through 10 lb" tier: $10.' },
        { q: 'Shipping costs $6 under 2 lb, $10 from 2 lb through 10 lb, and $18 over 10 lb. What does a 12 lb package cost?', c: ['$18', '$10', '$28', '$6'], why: '12 lb is over 10 lb, so it is in the top tier. You pay that one price: $18.' },
        { q: 'A phone plan costs $30 a month for up to 5 GB. Each GB over 5 costs $10 more. What is the bill for 8 GB?', c: ['$60', '$110', '$80', '$40'], why: '8 GB is 3 GB over 5. 3 × $10 = $30, plus the $30 base = $60.' },
        { q: 'A phone plan costs $30 a month for up to 5 GB. Each GB over 5 costs $10 more. What is the bill for 4 GB?', c: ['$30', '$20', '$70', '$40'], why: '4 GB is not over 5 GB, so there is no extra charge. The bill is just $30.' },
        { q: 'A graph has a flat piece at y = 3 up to x = 1 (closed dot at x = 1), then a flat piece at y = 6 for x > 1 (open dot at x = 1). What is f(1)?', c: ['3', '6', '1', '9'], why: 'The closed dot at x = 1 is on the y = 3 piece. The open dot means 6 is not used there.' },
        { q: 'Parking costs $4 for up to 1 hour, $7 for over 1 up to 2 hours, and $9 for over 2 up to 3 hours. What do 2.5 hours cost?', c: ['$9', '$7', '$16', '$10'], why: '2.5 hours is over 2 but not over 3, so it is in the $9 tier.' },
      ],
      realLife: {
        text: `<p>Lots of prices switch rules at a cutoff (a number where the rule changes). That is a piecewise function.</p>
          <ul><li><b>Shipping:</b> under 1 lb costs $5, 1 to 5 lb costs $9, and over 5 lb costs $15.</li>
          <li><b>Phone data:</b> $30 covers up to 5 GB. After that, each extra GB costs $10.</li>
          <li><b>Zoo tickets:</b> kids under 12 pay $8, ages 12 to 64 pay $15, and ages 65 and up pay $10.</li>
          <li><b>Phone battery:</b> above 20% the phone runs normally. At 20% or below it switches to low power mode.</li></ul>`,
        prompt: 'Think of a price or rule in your life that changes at a cutoff, like tickets, shipping, or phone data. Write its pieces and say what happens right at the cutoff.',
      },
    },
  ],
};
