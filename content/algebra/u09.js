// Unit 9 — Functions. NJ: F.IF.A.1, F.IF.A.2, F.IF.B.4, F.IF.B.5, F.IF.B.6, F.BF.A.1a, F.BF.B.4a
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
// Reuses alg-1 to alg-4 (the first four lessons) so his progress carries over.
import { pick } from '../legacy.js';
export default {
  id: 'a09', n: 9, title: 'Functions', nj: ['F.IF.A.1', 'F.IF.A.2', 'F.IF.B.4', 'F.IF.B.5', 'F.IF.B.6', 'F.BF.A.1a', 'F.BF.B.4a'],
  lessons: [
    pick('alg-1'),
    pick('alg-2'),
    {
      key: 'a09-03',
      title: 'Functions and equations',
      videos: [
        { id: 'l3iXON1xEC4', title: 'Equations vs. functions' },
        { id: 'OOim0QPsJ9o', title: 'Obtaining a function from an equation' },
      ],
      learn: `
        <p>An <b>equation</b> (a math sentence with an equals sign) like <b>2x + y = 7</b> links two variables. You can often turn it into a <b>function rule</b> (a formula where you put in x and get exactly one y out).</p>
        <p><b>How:</b> get y by itself on one side. Whatever you do to one side, do to the other side too. Then write f(x) in place of y.</p>
        <p><b>Worked example:</b> Turn 2x + y = 7 into function form.</p>
        <ol>
          <li>Subtract 2x from both sides: y = 7 − 2x.</li>
          <li>Write f(x) for y: <b>f(x) = 7 − 2x</b>. That is the same as f(x) = −2x + 7.</li>
          <li>Use it: f(3) = 7 − 2(3) = 7 − 6 = <b>1</b>. The input 3 gives the output 1.</li>
          <li>Check in the first equation: 2(3) + 1 = 6 + 1 = 7. It works.</li>
        </ol>
        <p><b>If y has a number in front, divide every term</b> (each part being added). For 2y = 4x + 10, divide all three terms by 2: y = 2x + 5.</p>
        <p><b>Not every equation gives a function.</b> In y² = x, the input x = 9 gives y = 3 and also y = −3. One input with two outputs means it is not a function.</p>`,
      quiz: [
        { q: 'Write x + y = 10 in function form.', c: ['f(x) = 10 − x', 'f(x) = x − 10', 'f(x) = 10 + x', 'f(x) = 10x'], why: 'Subtract x from both sides: y = 10 − x. Then write f(x) for y.' },
        { q: 'Write 2x + y = 7 in function form.', c: ['f(x) = −2x + 7', 'f(x) = 2x + 7', 'f(x) = −2x − 7', 'f(x) = 7x − 2'], why: 'Subtract 2x from both sides: y = 7 − 2x, which is the same as −2x + 7.' },
        { q: 'Write y − 3x = 5 in function form.', c: ['f(x) = 3x + 5', 'f(x) = −3x + 5', 'f(x) = 3x − 5', 'f(x) = 5x + 3'], why: 'Add 3x to both sides: y = 3x + 5.' },
        { q: 'Write 2y = 4x + 10 in function form.', c: ['f(x) = 2x + 5', 'f(x) = 4x + 5', 'f(x) = 2x + 10', 'f(x) = 8x + 20'], why: 'Divide every term by 2: 2y ÷ 2 = y, 4x ÷ 2 = 2x, 10 ÷ 2 = 5.' },
        { q: 'Write 4x + 2y = 8 in function form.', c: ['f(x) = −2x + 4', 'f(x) = −4x + 8', 'f(x) = 2x + 4', 'f(x) = −2x + 8'], why: 'Subtract 4x: 2y = −4x + 8. Divide every term by 2: y = −2x + 4.' },
        { q: 'Write x − y = 3 in function form.', c: ['f(x) = x − 3', 'f(x) = 3 − x', 'f(x) = x + 3', 'f(x) = −x − 3'], why: 'Subtract x: −y = 3 − x. Multiply everything by −1: y = x − 3.' },
        { q: 'In 3x + y = 12, what is y when x = 2?', c: ['6', '18', '10', '4'], why: 'y = 12 − 3x. Then 12 − 3(2) = 12 − 6 = 6.' },
        { q: '2x + y = 7 becomes f(x) = 7 − 2x. What is f(−1)?', c: ['9', '5', '−9', '8'], why: '7 − 2(−1) = 7 + 2 = 9. Minus a negative turns into plus.' },
        { q: 'f(x) = 10 − x came from x + y = 10. Which point is on the graph of f?', c: ['(4, 6)', '(4, 14)', '(6, 6)', '(10, 10)'], why: 'f(4) = 10 − 4 = 6, so (4, 6). Check: 4 + 6 = 10.' },
        { q: 'Which equation does NOT give y as a function of x?', c: ['y² = x', 'y = 3x − 1', 'x + y = 4', 'y = x²'], why: 'In y² = x, the input 9 gives y = 3 and y = −3. One input, two outputs.' },
        { q: 'You have $20 and snacks cost $3 each, so 3s + m = 20 (s = snacks, m = money left). Which function gives the money left?', c: ['m(s) = 20 − 3s', 'm(s) = 3s − 20', 'm(s) = 20 + 3s', 'm(s) = 17s'], why: 'Subtract 3s from both sides: m = 20 − 3s.' },
        { q: 'Using m(s) = 20 − 3s, how much money is left after 4 snacks?', c: ['$8', '$12', '$32', '$68'], why: 'Multiply first: 3 · 4 = 12. Then 20 − 12 = $8.' },
        { q: 'Write y + 4x = 9 in function form.', c: ['f(x) = −4x + 9', 'f(x) = 4x + 9', 'f(x) = −4x − 9', 'f(x) = 9x − 4'], why: 'Subtract 4x from both sides: y = 9 − 4x, which is the same as −4x + 9.' },
        { q: 'Write 3y = 6x − 12 in function form.', c: ['f(x) = 2x − 4', 'f(x) = 2x − 12', 'f(x) = 6x − 4', 'f(x) = 3x − 9'], why: 'Divide every term by 3: 3y ÷ 3 = y, 6x ÷ 3 = 2x, 12 ÷ 3 = 4.' },
        { q: 'Write 5x − y = 2 in function form.', c: ['f(x) = 5x − 2', 'f(x) = −5x + 2', 'f(x) = 5x + 2', 'f(x) = −5x − 2'], why: 'Subtract 5x: −y = −5x + 2. Multiply everything by −1: y = 5x − 2.' },
        { q: 'Write 6x + 3y = 15 in function form.', c: ['f(x) = −2x + 5', 'f(x) = −6x + 15', 'f(x) = 2x + 5', 'f(x) = −2x + 15'], why: 'Subtract 6x: 3y = −6x + 15. Divide every term by 3: y = −2x + 5.' },
        { q: 'Rami turns 2y = 8x + 6 into y = 4x + 6. What was his mistake?', c: ['He didn\'t divide every term by 2 — it should be y = 4x + 3', 'Nothing — that is right', 'He should subtract 2 — it should be y = 8x + 4', 'He should multiply by 2 — it should be y = 16x + 12'], why: 'Dividing by 2 must hit every term: 8x ÷ 2 = 4x and 6 ÷ 2 = 3.' },
        { q: 'In x + 2y = 10, what is y when x = 4?', c: ['3', '6', '8', '14'], why: '4 + 2y = 10, so 2y = 6 and y = 3.' },
        { q: 'y − 2x = 1 becomes f(x) = 2x + 1. What is f(−3)?', c: ['−5', '−7', '7', '5'], why: '2(−3) + 1 = −6 + 1 = −5.' },
        { q: 'Which of these equations is NOT a function of x?', c: ['x = 5', 'y = 5', 'y = 2x', 'y = x² − 3'], why: 'In x = 5, the input 5 goes with every y-value. One input, many outputs.' },
        { q: 'f(x) = 7 − 2x came from 2x + y = 7. Which point is on the graph of f?', c: ['(2, 3)', '(3, 2)', '(2, 11)', '(1, 9)'], why: 'f(2) = 7 − 4 = 3, so (2, 3). Check: 2(2) + 3 = 7.' },
        { q: 'A phone battery follows b + 5h = 100 (b = battery percent, h = hours). Which function gives the battery?', c: ['b(h) = 100 − 5h', 'b(h) = 5h − 100', 'b(h) = 100 + 5h', 'b(h) = 95h'], why: 'Subtract 5h from both sides: b = 100 − 5h.' },
        { q: 'Using b(h) = 100 − 5h, what is the battery after 6 hours?', c: ['70%', '30%', '94%', '570%'], why: 'Multiply first: 5 · 6 = 30. Then 100 − 30 = 70%.' },
        { q: 'A tank starts with 50 gallons and drains 2 gallons a minute, so w + 2t = 50 (w = gallons left, t = minutes). How much is left after 8 minutes?', c: ['34 gallons', '66 gallons', '16 gallons', '42 gallons'], why: 'w = 50 − 2t. Then 50 − 2(8) = 50 − 16 = 34 gallons.' },
      ],
      realLife: {
        text: `<p>Equations often come mixed up. Getting y alone turns them into a function you can use fast.</p>
          <ul><li><b>Snack money:</b> 3s + m = 20 links snacks bought and money left. As a function, m = 20 − 3s gives the money left for any number of snacks.</li>
          <li><b>Phone battery:</b> b + 5h = 100 (battery percent plus 5% used each hour) becomes b = 100 − 5h. After 6 hours: 100 − 30 = 70%.</li>
          <li><b>Spreadsheets and apps</b> need y alone so they can plug in any x and give back y.</li></ul>`,
        prompt: 'You have $30 and each bus ride costs $4, so 4r + m = 30. Rewrite this as a function for the money left, m, and explain what m(5) means.',
      },
      practice: 'toFunctionForm',
    },
    {
      key: 'a09-04',
      title: 'Interpreting function notation in context',
      videos: [
        { id: '94Gnto5G1PU', title: 'Function notation word problem: beach' },
        { id: 'uaPm3Tpuxbc', title: 'Worked example: evaluating expressions with function notation' },
      ],
      learn: `
        <p>In a story, <b>f(input) = output</b> is a short way to write a whole sentence. The number inside the parentheses is the input. The number after the equals sign is the output.</p>
        <p>Each number has <b>units</b> (what the number measures, like days, dollars, or feet). Always say them.</p>
        <p><b>Two questions to ask:</b> What does the input stand for? What does the output stand for?</p>
        <p><b>Worked example:</b> C(n) is the cost in dollars to buy n bus tickets. What does C(3) = 12 mean?</p>
        <ol>
          <li>The input is n = 3, and n counts <b>tickets</b>.</li>
          <li>The output is 12, and C is measured in <b>dollars</b>.</li>
          <li>Sentence: <b>3 bus tickets cost $12.</b></li>
        </ol>
        <p><b>Watch the order.</b> C(3) = 12 is not the same as C(12) = 3. The input always sits inside the parentheses.</p>
        <p><b>Two kinds of questions:</b></p>
        <ul>
          <li>"Find C(5)" gives you the input (5 tickets) and asks for the output (the cost).</li>
          <li>"Solve C(n) = 20" gives you the output ($20) and asks for the input (how many tickets).</li>
        </ul>
        <p><b>Expressions:</b> C(5) − C(3) means the cost of 5 tickets minus the cost of 3 tickets, so it tells you how much more 5 tickets cost.</p>`,
      quiz: [
        { q: 'C(n) is the cost in dollars of n bus tickets. What does C(3) = 12 mean?', c: ['3 tickets cost $12', '12 tickets cost $3', 'Each ticket costs $3', '3 tickets cost $36'], why: 'The input inside the parentheses is 3 tickets. The output is $12.' },
        { q: 'h(t) is a ball\'s height in feet t seconds after it is thrown. What does h(2) = 30 mean?', c: ['After 2 seconds, the ball is 30 feet high', 'After 30 seconds, the ball is 2 feet high', 'The ball rises 30 feet every 2 seconds', 'The ball is thrown 2 times to reach 30 feet'], why: 't = 2 is the time in seconds (input). 30 is the height in feet (output).' },
        { q: 'P(d) is the number of pages Omar has read after d days. "After 5 days, Omar has read 80 pages." Which matches?', c: ['P(5) = 80', 'P(80) = 5', '5P = 80', 'P(d) = 5'], why: 'Days is the input, so 5 goes inside. Pages is the output, so P(5) = 80.' },
        { q: 'B(h) is your phone battery percent h hours after you unplug it. What does B(0) = 100 mean?', c: ['Right when you unplug it, the battery is at 100%', 'After 100 hours, the battery is at 0%', 'The battery never runs out', 'The battery drops 100% each hour'], why: 'h = 0 means 0 hours: the moment you unplug it. The output is 100%.' },
        { q: 'S(w) is Bilal\'s savings in dollars after w weeks, and S(10) = 150. What are the units of 10 and 150?', c: ['10 weeks and 150 dollars', '10 dollars and 150 weeks', '10 weeks and 150 weeks', '10 dollars and 150 dollars'], why: 'The input w is in weeks. The output S is in dollars.' },
        { q: 'N(t) is the number of people at a beach t hours after 6 a.m. What does N(4) stand for?', c: ['The number of people at the beach at 10 a.m.', 'The number of people at the beach at 4 a.m.', 'The time when 4 people are at the beach', '4 times the number of people at 6 a.m.'], why: '4 hours after 6 a.m. is 10 a.m. N(4) is how many people are there then.' },
        { q: 'T(m) is an oven\'s temperature in °F, m minutes after it is turned on. What does "solve T(m) = 350" ask?', c: ['How many minutes until the oven reaches 350°F?', 'What is the temperature after 350 minutes?', 'How much the temperature rises each minute', 'What is 350 times m?'], why: 'The output (350°F) is given. You are looking for the input: the number of minutes.' },
        { q: 'C(n) = 4n is the cost in dollars of n bus tickets. What does C(5) − C(3) tell you?', c: ['5 tickets cost $8 more than 3 tickets', '5 tickets cost $2 more than 3 tickets', '3 tickets cost $8 more than 5 tickets', '5 tickets cost $32 more than 3 tickets'], why: 'C(5) = 20 and C(3) = 12. Then 20 − 12 = 8, so 5 tickets cost $8 more.' },
        { q: 'd(t) is the miles a car has driven after t hours. Its graph goes through (3, 150). Which sentence fits?', c: ['After 3 hours, the car has driven 150 miles', 'After 150 hours, the car has driven 3 miles', 'The car drives 3 miles every 150 hours', 'The car stopped after 150 miles'], why: '(3, 150) means d(3) = 150: the input is 3 hours, the output is 150 miles.' },
        { q: 'V(t) is the gallons of water in a tank t minutes after it starts draining. V(0) = 60 and V(10) = 20. What happened in the first 10 minutes?', c: ['The tank lost 40 gallons', 'The tank gained 40 gallons', 'The tank lost 10 gallons', 'The tank lost 20 gallons'], why: 'It started with 60 gallons and had 20 left after 10 minutes. 60 − 20 = 40 gallons lost.' },
        { q: 'M(g) is the minutes it takes to download g gigabytes (GB). "Downloading 6 GB takes 15 minutes." Which matches?', c: ['M(6) = 15', 'M(15) = 6', 'M(6) = 90', 'M = 15 ÷ 6'], why: 'Gigabytes is the input, so 6 goes inside. Minutes is the output: M(6) = 15.' },
        { q: 'A ball is thrown from a rooftop. h(t) is its height in feet after t seconds. What does "solve h(t) = 0" ask?', c: ['At what time does the ball reach the ground (height 0)?', 'How high is the ball at time 0?', 'What is the ball\'s highest point?', 'How far does the ball travel sideways?'], why: 'h(t) = 0 gives the output (height 0 feet) and asks for the input: the time.' },
        { q: 'W(d) is the liters of water a plant gets in d days. What does W(7) = 3.5 mean?', c: ['In 7 days, the plant gets 3.5 liters of water', 'In 3.5 days, the plant gets 7 liters of water', 'The plant gets 7 liters each day', 'The plant gets 3.5 liters each day'], why: 'The input inside the parentheses is 7 days. The output is 3.5 liters.' },
        { q: 'K(h) is the kilometers Fatima has biked after h hours. "After 2 hours, she has biked 30 km." Which matches?', c: ['K(2) = 30', 'K(30) = 2', 'K = 2 × 30', 'K(2) = 15'], why: 'Hours is the input, so 2 goes inside. Kilometers is the output: K(2) = 30.' },
        { q: 'T(h) is the temperature in °F h hours after midnight. Which stands for the temperature at 3 p.m.?', c: ['T(15)', 'T(3)', 'T(12)', 'T(1500)'], why: '3 p.m. is 15 hours after midnight, so the input is 15.' },
        { q: 'C(n) = 4n is the cost in dollars of n bus tickets. You solve C(n) = 20. What does the answer mean?', c: ['5 tickets cost $20', '20 tickets cost $80', '20 tickets cost $5', 'Each ticket costs $5'], why: '4n = 20 gives n = 5. The output ($20) is given, so the answer is the number of tickets.' },
        { q: 'B(h) is phone battery percent after h hours. Sam writes B(80) = 2 to mean "after 2 hours, the battery is at 80%." What was his mistake?', c: ['The input goes inside — it should be B(2) = 80', 'Nothing — that is right', 'It should be B(2 × 80)', 'It should be 2B = 80'], why: 'Hours is the input, so 2 goes inside the parentheses. The output, 80%, goes after the equals sign.' },
        { q: 'N(t) is the number of people on a plane t minutes after boarding starts. N(0) = 0 and N(30) = 150. What happened?', c: ['150 people boarded in the first 30 minutes', '30 people boarded in 150 minutes', '150 people boarded each minute', '150 people were on before boarding started'], why: 'It started with 0 people and had 150 after 30 minutes.' },
        { q: 'd(t) = 55t is the miles a car has driven after t hours. What is d(3), and what does it mean?', c: ['165 — after 3 hours, the car has driven 165 miles', '165 — after 165 hours, the car has driven 3 miles', '58 — after 3 hours, the car has driven 58 miles', '3 — the car drives 3 miles each hour'], why: '55 · 3 = 165. The input is 3 hours, and the output is 165 miles.' },
        { q: 'S(w) is Bilal\'s savings in dollars after w weeks. What does S(8) − S(4) tell you?', c: ['How much his savings grew from week 4 to week 8', 'His savings in week 4', 'The number of weeks from week 4 to week 8', 'His savings in week 12'], why: 'S(8) is week 8\'s savings and S(4) is week 4\'s. Subtracting shows the growth in between.' },
        { q: 'A(t) is the area in square feet a painter has painted after t hours. In A(3) = 240, what are the units of 240?', c: ['Square feet', 'Hours', 'Feet per hour', 'Painters'], why: '240 is the output, and A is measured in square feet.' },
        { q: 'C(n) is the cost of n kebabs. Table — n: 1, 2, 3 and C(n): $6, $12, $18. Solve C(n) = 18.', c: ['n = 3 kebabs', 'n = 18 kebabs', 'n = 108 kebabs', 'n = 6 kebabs'], why: 'Find $18 in the output row. It lines up with n = 3.' },
        { q: 'f(x) is the minutes it takes to walk x blocks. What does f(4) = 9 mean?', c: ['Walking 4 blocks takes 9 minutes', 'Walking 9 blocks takes 4 minutes', 'Each block takes 4 minutes', 'Walking 4 blocks takes 36 minutes'], why: 'The input is 4 blocks. The output is 9 minutes.' },
        { q: 'B(h) is phone battery percent after h hours. B(2) = 90 and B(5) = 75. Which is true?', c: ['The battery dropped 15% between hour 2 and hour 5', 'The battery dropped 3% between hour 2 and hour 5', 'The battery went up 15% between hour 2 and hour 5', 'The battery was at 90% at hour 5'], why: 'It was 90% at hour 2 and 75% at hour 5. 90 − 75 = 15.' },
      ],
      realLife: {
        text: `<p>Apps and news reports use function notation all the time, just in words.</p>
          <ul><li><b>Fitness app:</b> S(d) = steps on day d. S(7) = 9,000 means "on day 7 you walked 9,000 steps."</li>
          <li><b>Weather:</b> T(h) = temperature h hours after midnight. T(15) = 82 means it was 82°F at 3 p.m.</li>
          <li><b>Download bar:</b> P(s) = percent done after s seconds. Solving P(s) = 100 tells you when the download finishes.</li></ul>
          <p>Always say the units out loud: days, steps, degrees, seconds.</p>`,
        prompt: 'G(m) is the number of goals your team has scored after m matches, and G(6) = 14. Explain in a full sentence what this means, including the units.',
      },
      practice: 'funcContext',
    },
    pick('alg-3'),
    {
      key: 'a09-06',
      title: 'Determining the domain of a function',
      videos: [
        { id: 'LdbrNNheFg8', title: 'Determining whether values are in domain of function' },
        { id: '4ZWbeESjv4M', title: 'Examples finding the domain of functions' },
        { id: '2DnQEaNTd08', title: 'Worked example: determining domain word problem (real numbers)' },
      ],
      learn: `
        <p>The <b>domain</b> (all the inputs a function is allowed to take) starts as <b>all real numbers</b> (every number on the number line). You only cross numbers out for two reasons.</p>
        <p><b>Reason 1: the formula breaks.</b></p>
        <ul>
          <li><b>Dividing by zero:</b> the bottom of a fraction can't be 0. For g(x) = 1/(x − 5), the bottom is 0 when x = 5. So x = 5 is <b>not</b> allowed. Domain: x ≠ 5.</li>
          <li><b>Square roots:</b> the number under √ can't be negative (in Algebra 1). For h(x) = √(x − 3), you need x − 3 ≥ 0, so x ≥ 3.</li>
        </ul>
        <p><b>Reason 2: the story doesn't allow it.</b> Ask: Can the input be negative? Can it be a fraction? Is there a biggest value?</p>
        <p><b>Worked example:</b> A car's gas tank holds 15 gallons. C(g) = 4g is the cost in dollars to buy g gallons. What is the domain?</p>
        <ol>
          <li>You can buy part of a gallon, like 2.5 gallons, so decimals are fine.</li>
          <li>You can't buy a negative amount of gas, so g ≥ 0.</li>
          <li>The tank only holds 15 gallons, so g ≤ 15.</li>
          <li>Domain: <b>0 ≤ g ≤ 15</b>.</li>
        </ol>
        <p>If the input counts whole things, like people or tickets, only whole numbers are allowed.</p>`,
      quiz: [
        { q: 'What is the domain of f(x) = 1/(x − 5)?', c: ['All real numbers except 5', 'All real numbers except 0', 'All real numbers except −5', 'x ≥ 5'], why: 'x − 5 = 0 when x = 5, and you can\'t divide by zero.' },
        { q: 'What is the domain of f(x) = √(x − 3)?', c: ['x ≥ 3', 'x ≥ 0', 'x ≤ 3', 'x ≥ −3'], why: 'You need x − 3 ≥ 0. Add 3 to both sides: x ≥ 3.' },
        { q: 'Which number is NOT in the domain of g(x) = 7/(x + 2)?', c: ['−2', '2', '0', '7'], why: 'At x = −2, the bottom is −2 + 2 = 0. Dividing by zero is not allowed.' },
        { q: 'What is the domain of f(x) = 3x − 8?', c: ['All real numbers', 'x ≥ 8', 'x ≠ 8', 'x ≥ 0'], why: 'There is no fraction and no square root, so nothing breaks. Every number works.' },
        { q: 'Is x = 1 in the domain of h(x) = √(x − 4)?', c: ['No — 1 − 4 = −3, and you can\'t take √ of a negative', 'Yes — every number is in the domain', 'Yes — √(1 − 4) = √3', 'No — you can\'t divide by 1'], why: 'Plug in 1: 1 − 4 = −3. A negative under the square root is not allowed.' },
        { q: 'What is the domain of k(x) = √(x + 6)?', c: ['x ≥ −6', 'x ≥ 6', 'x ≤ −6', 'x > 0'], why: 'You need x + 6 ≥ 0. Subtract 6 from both sides: x ≥ −6.' },
        { q: 'What is the domain of f(x) = 10/(2x − 8)?', c: ['All real numbers except 4', 'All real numbers except 8', 'All real numbers except −4', 'All real numbers except 10'], why: '2x − 8 = 0 means 2x = 8, so x = 4 makes the bottom zero.' },
        { q: 'C(g) = 4g is the cost of g gallons of gas. The tank holds 15 gallons. What is the domain?', c: ['0 ≤ g ≤ 15', 'g ≥ 0', 'All real numbers', '0 ≤ g ≤ 60'], why: 'You can\'t buy negative gas, and the tank stops at 15 gallons. ($60 is the top of the range, not the domain.)' },
        { q: 'P(n) = 8n is the cost in dollars for n people to visit a museum. Which input makes sense?', c: ['n = 4', 'n = 2.5', 'n = −3', 'n = 1/2'], why: 'People come in whole numbers, never negative. 4 people works.' },
        { q: 'A bus has 40 seats. F(s) = 2s is the dollars made from selling s seats at $2 each. What is the domain?', c: ['Whole numbers from 0 to 40', 'All numbers from 0 to 80', 'All real numbers', 'Whole numbers from 0 to 80'], why: 'Seats are whole numbers, from 0 up to the 40 the bus has. ($80 is the top of the range, not the domain.)' },
        { q: 'A ball is thrown from a rooftop at t = 0 seconds and hits the ground at t = 3. h(t) is its height. What is the domain?', c: ['0 ≤ t ≤ 3', 't ≥ 0', 'All real numbers', '−3 ≤ t ≤ 3'], why: 'Time starts at 0 when it\'s thrown and ends at 3 when it lands.' },
        { q: 'Which function has a domain of all real numbers?', c: ['f(x) = x² + 1', 'f(x) = 1/x', 'f(x) = √x', 'f(x) = 5/(x − 1)'], why: 'You can square any number and add 1. The others break at some x-values.' },
        { q: 'What is the domain of f(x) = 4/(x + 9)?', c: ['All real numbers except −9', 'All real numbers except 9', 'All real numbers except 4', 'x ≥ −9'], why: 'x + 9 = 0 when x = −9, and you can\'t divide by zero.' },
        { q: 'What is the domain of g(x) = √(2x − 8)?', c: ['x ≥ 4', 'x ≥ 8', 'x ≥ −4', 'x ≤ 4'], why: 'You need 2x − 8 ≥ 0. Add 8: 2x ≥ 8. Divide by 2: x ≥ 4.' },
        { q: 'Which number IS in the domain of h(x) = √(x − 7)?', c: ['7', '0', '5', '−7'], why: '7 − 7 = 0, and √0 = 0 works. The other choices put a negative under the root.' },
        { q: 'What is the domain of f(x) = 6/(3x + 12)?', c: ['All real numbers except −4', 'All real numbers except 4', 'All real numbers except −12', 'All real numbers except 6'], why: '3x + 12 = 0 means 3x = −12, so x = −4 makes the bottom zero.' },
        { q: 'What is the domain of f(x) = x/5?', c: ['All real numbers', 'All real numbers except 5', 'All real numbers except 0', 'x ≥ 5'], why: 'The bottom is always 5, never 0. Any number can be divided by 5.' },
        { q: 'Yusuf says the domain of f(x) = 1/(x − 3) is all real numbers except 0. What was his mistake?', c: ['The bottom is 0 when x = 3, so 3 is left out, not 0', 'Nothing — that is right', 'It should be x ≥ 3', 'It should be all real numbers'], why: 'Set the bottom equal to 0: x − 3 = 0 gives x = 3. At x = 0 the bottom is −3, which is fine.' },
        { q: 'A phone is plugged in for 2 hours and goes from empty to full. B(t) is the battery percent t hours after plugging in. Which domain makes sense?', c: ['0 ≤ t ≤ 2', '0 ≤ t ≤ 100', 't ≥ 0', '−2 ≤ t ≤ 2'], why: 'Charging time starts at 0, and the phone is full at 2 hours. The 100 is a battery percent, an output.' },
        { q: 'Which input can be a fraction or a decimal?', c: ['Gallons of water poured into a tank', 'Number of students on a bus', 'Number of tickets sold', 'Number of goals scored'], why: 'You can pour 2.5 gallons. Students, tickets, and goals come in whole numbers.' },
        { q: 'Which function has a domain of x ≥ 0?', c: ['f(x) = √x', 'f(x) = 1/x', 'f(x) = x²', 'f(x) = x − 1'], why: '√x needs x ≥ 0. 1/x leaves out only 0, and the others take every number.' },
        { q: 'Is x = −2 in the domain of f(x) = √(x + 5)?', c: ['Yes — −2 + 5 = 3, which is not negative', 'No — negative inputs are never allowed', 'No — √(−2 + 5) is the root of a negative', 'No — you can\'t divide by −2'], why: 'The rule is about what is UNDER the root. −2 + 5 = 3, and √3 is fine.' },
        { q: 'Which number is NOT in the domain of k(x) = (x + 1)/(x − 6)?', c: ['6', '−1', '0', '1'], why: 'Only the bottom matters. At x = 6, the bottom is 0. A top of 0 is fine.' },
        { q: 'A plane flies for 5 hours. D(t) = 500t is the miles flown after t hours. What is the domain?', c: ['0 ≤ t ≤ 5', '0 ≤ t ≤ 2,500', 't ≥ 0', 'Whole numbers from 0 to 5'], why: 'Time runs from 0 to 5 hours, including parts of an hour. 2,500 miles is the top of the range.' },
      ],
      realLife: {
        text: `<p>Real machines and apps have domains built in.</p>
          <ul><li><b>Microwave:</b> you can set 0 to 99 minutes, but not −5 minutes.</li>
          <li><b>Gas pump:</b> you can pump from 0 gallons up to what your tank holds, including parts of a gallon.</li>
          <li><b>Calculator:</b> type 5 ÷ 0 and you get "Error." The calculator is telling you 0 is outside the domain.</li>
          <li><b>School trip:</b> the number of students on a bus must be a whole number, and the bus has a seat limit.</li></ul>`,
        prompt: 'An elevator in an 18-floor building with no basement goes to any floor. Describe its domain (the allowed floor numbers) and explain why fractions and negatives are not allowed.',
      },
      practice: 'domainOf',
    },
    pick('alg-4'),
    {
      key: 'a09-08',
      title: 'Maximum and minimum points',
      videos: [
        { id: 'Hoyv3-BMAGc', title: 'Introduction to minimum and maximum points' },
        { id: 'xmrhZ5ySaD0', title: 'Worked example: absolute and relative extrema' },
      ],
      learn: `
        <p>Picture a graph as a hiking trail, read from left to right.</p>
        <ul>
          <li>A <b>relative maximum</b> (a hilltop: higher than the points right around it) is where the graph stops going up and starts going down.</li>
          <li>A <b>relative minimum</b> (a valley bottom: lower than the points right around it) is where the graph stops going down and starts going up.</li>
          <li>The <b>absolute maximum</b> is the highest point on the <b>whole</b> graph. The <b>absolute minimum</b> is the lowest point on the whole graph.</li>
        </ul>
        <p>A graph can have many hilltops but only one highest height. Some graphs have no absolute maximum, because they keep going up forever.</p>
        <p><b>Every answer has two parts:</b> the max or min <b>value</b> is the y-value (how high). It happens <b>at</b> an x-value (where).</p>
        <p><b>Worked example:</b> A graph starts at (−3, 0), climbs to a hilltop at (−1, 4), drops to a valley at (2, −5), then climbs to (4, 6), where it ends.</p>
        <ol>
          <li>Relative maximum: the hilltop, value 4 at x = −1.</li>
          <li>Relative minimum: the valley, value −5 at x = 2.</li>
          <li>Absolute maximum: the highest y anywhere is 6, at the end point x = 4. It beats the hilltop!</li>
          <li>Absolute minimum: the lowest y anywhere is −5, at x = 2.</li>
        </ol>`,
      quiz: [
        { q: 'The highest point on an entire graph is called the…', c: ['absolute maximum', 'relative minimum', 'absolute minimum', 'y-intercept'], why: '"Absolute" means the whole graph. "Maximum" means highest.' },
        { q: 'A point higher than the points right around it, but not the highest on the graph, is a…', c: ['relative maximum', 'absolute maximum', 'relative minimum', 'x-intercept'], why: 'A hilltop compared to its neighbors is a relative maximum, even if another part of the graph is higher.' },
        { q: 'A graph has a hilltop at (−1, 4), a valley at (2, −5), and ends at (4, 6). Where is the relative minimum?', c: ['At x = 2', 'At x = −1', 'At x = 4', 'At x = −5'], why: 'The valley bottom is the point (2, −5), so it happens at x = 2.' },
        { q: 'Same graph (hilltop (−1, 4), valley (2, −5), ends at (4, 6)). What is the absolute maximum value?', c: ['6', '4', '−1', '−5'], why: 'The highest y on the whole graph is 6, at the end point. That beats the hilltop at 4.' },
        { q: 'Same graph (hilltop (−1, 4), valley (2, −5), ends at (4, 6)). What is the relative maximum value?', c: ['4', '−1', '6', '2'], why: 'The hilltop is (−1, 4). The value is the y-coordinate: 4.' },
        { q: 'The U-shaped graph of y = x² has its lowest point at (0, 0) and rises forever on both sides. What is its absolute maximum?', c: ['There isn\'t one', '0', '(0, 0)', '1'], why: 'It keeps rising forever, so no point is the highest.' },
        { q: 'Same U-shaped graph of y = x². What is its absolute minimum value?', c: ['0', 'There isn\'t one', '1', '−1'], why: 'The lowest point is (0, 0), so the smallest output is 0.' },
        { q: 'At a relative maximum, the graph changes from…', c: ['going up to going down', 'going down to going up', 'above the x-axis to below it', 'flat to going down'], why: 'You climb up to the hilltop, then go down the other side.' },
        { q: 'Table — x: 1, 2, 3, 4, 5 and f(x): 3, 7, 9, 6, 2. What is the maximum value shown, and where is it?', c: ['9, at x = 3', '3, at x = 9', '2, at x = 5', '9, at x = 5'], why: 'The biggest output in the table is 9, and it lines up with x = 3.' },
        { q: 'A graph of a ball\'s height peaks at (2 seconds, 64 feet). What does that mean?', c: ['The ball\'s greatest height was 64 feet, 2 seconds after the throw', 'The ball was 2 feet high after 64 seconds', 'The ball fell 64 feet in 2 seconds', 'The ball\'s lowest height was 64 feet'], why: 'A peak is a maximum. The y-value (64 feet) is how high. The x-value (2 seconds) is when.' },
        { q: 'A graph has two hilltops, (−2, 5) and (3, 8), and goes down forever at both ends. What is the absolute maximum?', c: ['8, at x = 3', '5, at x = −2', '13, at x = 1', '3, at x = 8'], why: 'Both hilltops are relative maximums, but 8 is the highest point on the whole graph.' },
        { q: 'A graph has valleys at (−4, −2) and (1, −6) and goes up forever at both ends. What is the absolute minimum value?', c: ['−6', '−2', '−4', '1'], why: '−6 is lower than −2, so the valley at (1, −6) is the lowest point.' },
        { q: 'At a relative minimum, the graph changes from…', c: ['going down to going up', 'going up to going down', 'below the x-axis to above it', 'flat to going up'], why: 'You walk down into the valley, then climb up the other side.' },
        { q: 'Table — x: −2, −1, 0, 1, 2 and f(x): 5, 1, −3, 0, 4. What is the minimum value shown, and where is it?', c: ['−3, at x = 0', '0, at x = −3', '−2, at x = 5', '0, at x = 1'], why: 'The smallest output in the table is −3, and it lines up with x = 0.' },
        { q: 'The upside-down U graph of y = −x² + 5 has its top at (0, 5). What is its absolute maximum value?', c: ['5', '0', 'There isn\'t one', '−5'], why: 'The highest point is (0, 5), so the biggest output is 5.' },
        { q: 'The upside-down U graph of y = −x² + 5 falls forever on both sides. What is its absolute minimum?', c: ['There isn\'t one', '0', '5', '−5'], why: 'It keeps going down forever, so no point is the lowest.' },
        { q: 'A graph starts at (0, 2), rises to (3, 7), falls to (6, 1), and ends at (8, 4). What is the absolute minimum value?', c: ['1', '2', '6', '0'], why: 'Check every key point: 2, 7, 1, and 4. The lowest y-value is 1, at x = 6.' },
        { q: 'A graph starts at (0, 2), rises to (3, 7), falls to (6, 1), and ends at (8, 4). What is the absolute maximum, and where is it?', c: ['7, at x = 3', '4, at x = 8', '3, at x = 7', '8, at x = 4'], why: 'The highest y-value on the whole graph is 7, at the hilltop x = 3.' },
        { q: 'A graph has a hilltop at (2, 10). Lena says, "The maximum value is 2." What was her mistake?', c: ['She gave the x-value — the maximum value is the y-value, 10', 'Nothing — that is right', 'The maximum value is 12', 'Hilltops are minimums, not maximums'], why: 'The value is how high (y = 10). It happens at x = 2.' },
        { q: 'Temperatures — 6 a.m.: 50°F, 9 a.m.: 62°F, noon: 75°F, 3 p.m.: 81°F, 6 p.m.: 70°F. When was the maximum temperature shown?', c: ['3 p.m. (81°F)', 'Noon (75°F)', '6 p.m. (70°F)', '6 a.m. (50°F)'], why: '81°F is the biggest reading, and it was at 3 p.m.' },
        { q: 'A phone battery graph has a minimum at (5 hours, 12%). What does that mean?', c: ['The lowest the battery got was 12%, at 5 hours', 'The battery was at 5% after 12 hours', 'The battery dropped 12% each hour', 'The highest the battery got was 12%'], why: 'A minimum is the lowest point. The y-value (12%) is how low, and x (5 hours) is when.' },
        { q: 'How many relative maximums can a graph have?', c: ['Many — one at each hilltop', 'Exactly one', 'None, ever', 'Exactly two'], why: 'A graph can have lots of hilltops. Only one height can be the absolute maximum.' },
        { q: 'Which graph has NO absolute minimum?', c: ['y = −2x, a line that keeps going down to the right', 'y = x², a U with its lowest point at (0, 0)', 'y = (x − 3)², a U with its lowest point at (3, 0)', 'y = x² + 4, a U with its lowest point at (0, 4)'], why: 'The line goes down forever, so no point is the lowest. Each U has a bottom.' },
        { q: 'A graph has hilltops at (−3, 2) and (4, 9), with a valley at (1, −1) between them. It falls forever at both ends. Which point is a relative maximum but NOT the absolute maximum?', c: ['(−3, 2)', '(4, 9)', '(1, −1)', '(0, 0)'], why: 'Both hilltops are relative maximums. (4, 9) is the highest, so (−3, 2) is only relative.' },
      ],
      realLife: {
        text: `<p>Maximum and minimum points answer "what's the most?" and "what's the least?" questions.</p>
          <ul><li><b>Temperature:</b> the hottest moment of the day is the absolute maximum. A warm spell before a cool afternoon storm is a relative maximum.</li>
          <li><b>Basketball shot:</b> the top of the ball's arc is its maximum height.</li>
          <li><b>Phone battery:</b> the lowest it drops before you charge it is a minimum.</li>
          <li><b>Business:</b> stores look for the price that brings in the most money.</li></ul>`,
        prompt: 'Think about how much energy you have from the time you wake up until bedtime. Describe where that graph would have a relative maximum and a relative minimum, and why.',
      },
    },
    {
      key: 'a09-09',
      title: 'Intervals where a function is positive, negative, increasing, or decreasing',
      videos: [
        { id: 'KxOp3s9ottg', title: 'Increasing, decreasing, positive or negative intervals' },
        { id: 'VtBRkjRua0I', title: 'Graph interpretation word problem: temperature' },
      ],
      learn: `
        <p>An <b>interval</b> (a stretch of x-values, like −2 &lt; x &lt; 3 or x &gt; 2) lets you describe what a graph does over one section. Read the graph from left to right, and always answer with <b>x-values</b>.</p>
        <ul>
          <li><b>Positive:</b> the graph is above the x-axis (y &gt; 0).</li>
          <li><b>Negative:</b> the graph is below the x-axis (y &lt; 0).</li>
          <li><b>Increasing:</b> the graph goes up as you move right.</li>
          <li><b>Decreasing:</b> the graph goes down as you move right.</li>
        </ul>
        <p><b>Big trap:</b> positive or negative is about <b>where</b> the graph is (above or below the x-axis). Increasing or decreasing is about <b>which way</b> it is heading. A graph can be below the x-axis and still be going up.</p>
        <p><b>Worked example:</b> f(x) = x² − 4 is a U shape. Its lowest point is (0, −4), and it crosses the x-axis at x = −2 and x = 2.</p>
        <ol>
          <li>Negative (below the axis) between the crossings: −2 &lt; x &lt; 2.</li>
          <li>Positive (above the axis) outside the crossings: x &lt; −2 or x &gt; 2.</li>
          <li>Decreasing on the left side of the lowest point: x &lt; 0.</li>
          <li>Increasing on the right side of the lowest point: x &gt; 0.</li>
        </ol>
        <p>So on 0 &lt; x &lt; 2, f is negative but increasing.</p>`,
      quiz: [
        { q: 'A function is positive on an interval when its graph is…', c: ['above the x-axis', 'below the x-axis', 'going up', 'to the right of the y-axis'], why: 'Positive means y > 0, so the points sit above the x-axis.' },
        { q: 'A function is decreasing when, moving left to right, its graph…', c: ['goes down', 'goes up', 'is below the x-axis', 'stays flat'], why: 'Decreasing means the y-values get smaller as x gets bigger.' },
        { q: 'f(x) = x² − 4 crosses the x-axis at x = −2 and x = 2, and its lowest point is (0, −4). Where is f negative?', c: ['−2 < x < 2', 'x < 0', 'x < −2 or x > 2', 'x > 0'], why: 'Between the two crossings, the U dips below the x-axis.' },
        { q: 'Same f(x) = x² − 4 with lowest point (0, −4). Where is f increasing?', c: ['x > 0', 'x < 0', '−2 < x < 2', 'x > −4'], why: 'To the right of the lowest point (x = 0), the U climbs.' },
        { q: 'For f(x) = x² − 4 (lowest point (0, −4)), what is f doing on −1 < x < 0?', c: ['Negative and decreasing', 'Negative and increasing', 'Positive and decreasing', 'Positive and increasing'], why: 'There the graph is below the x-axis and still heading down toward the lowest point at x = 0.' },
        { q: 'For f(x) = x² − 4 (lowest point (0, −4)), what is f doing on 0 < x < 2?', c: ['Negative and increasing', 'Positive and increasing', 'Negative and decreasing', 'Positive and decreasing'], why: 'It is still below the x-axis, but it has started climbing. Below the axis does not mean going down.' },
        { q: 'The line f(x) = 2x − 6 crosses the x-axis at x = 3. Where is f positive?', c: ['x > 3', 'x < 3', 'x > 0', 'x > −6'], why: '2x − 6 > 0 when x > 3. Test x = 4: 2(4) − 6 = 2, which is positive.' },
        { q: 'Table — x: 0, 1, 2, 3, 4 and g(x): −3, −1, 1, 3, 5. At which x-values is g negative?', c: ['x = 0 and x = 1', 'x = 2, 3, and 4', 'x = 0 only', 'All of them'], why: 'g(0) = −3 and g(1) = −1 are below zero. The rest are positive.' },
        { q: 'Same table (g(x): −3, −1, 1, 3, 5). As x goes up, g is…', c: ['increasing the whole time', 'decreasing, then increasing', 'decreasing the whole time', 'increasing only after it turns positive'], why: 'Each output is 2 more than the one before, so it always goes up, even while negative.' },
        { q: 'f(x) = −x² + 9 is an upside-down U with its highest point at (0, 9). Where is f decreasing?', c: ['x > 0', 'x < 0', '−3 < x < 3', 'x > 9'], why: 'After the top at x = 0, the graph heads down as you move right.' },
        { q: 'T(h) is the temperature in °C h hours after midnight. It is below 0°C until 9 a.m. and above 0°C after that. When is T positive?', c: ['After 9 a.m. (h > 9)', 'Before 9 a.m. (h < 9)', 'Only at 9 a.m.', 'All day'], why: 'Positive means above 0. That happens after 9 a.m., when h > 9.' },
        { q: 'A graph rises from (−4, 1) to (2, 7), then falls to (6, 0). Where is it increasing?', c: ['−4 < x < 2', '1 < x < 7', '2 < x < 6', '0 < x < 7'], why: 'Answer with x-values, not y-values. The graph climbs from x = −4 to x = 2.' },
        { q: 'A function is negative on an interval when its graph is…', c: ['below the x-axis', 'above the x-axis', 'going down', 'to the left of the y-axis'], why: 'Negative means y < 0, so the points sit below the x-axis.' },
        { q: 'f(x) = −x² + 9 is an upside-down U with its top at (0, 9). It crosses the x-axis at x = −3 and x = 3. Where is f positive?', c: ['−3 < x < 3', 'x < −3 or x > 3', 'x > 0', 'x < 9'], why: 'Between the two crossings, the hump is above the x-axis.' },
        { q: 'f(x) = −x² + 9 is an upside-down U with its top at (0, 9). Where is f increasing?', c: ['x < 0', 'x > 0', '−3 < x < 3', 'x < 9'], why: 'Left of the top at x = 0, the graph climbs as you move right.' },
        { q: 'The line f(x) = −3x + 6 crosses the x-axis at x = 2. Where is f negative?', c: ['x > 2', 'x < 2', 'x < 0', 'x > 6'], why: 'Test x = 3: −3(3) + 6 = −3, which is negative. The line is below the axis right of 2.' },
        { q: 'Moving left to right, the line g(x) = −3x + 6 is…', c: ['decreasing everywhere', 'increasing everywhere', 'increasing, then decreasing', 'positive everywhere'], why: 'The slope is −3, so the line goes down the whole way.' },
        { q: 'A graph rises from (−5, −8) to (−1, −2). Omar says it is decreasing there because the y-values are negative. What was his mistake?', c: ['Negative only means below the axis — the graph goes up, so it is increasing', 'Nothing — negative means decreasing', 'The graph is flat there', 'He should give the interval with y-values'], why: 'Going from −8 to −2 is going up. Below the axis does not mean going down.' },
        { q: 'Table — x: 0, 1, 2, 3, 4 and h(x): 6, 4, 2, 0, −2. At which x-values is h positive?', c: ['x = 0, 1, and 2', 'x = 3 and 4', 'x = 0, 1, 2, and 3', 'x = 4 only'], why: 'h(3) = 0 is neither positive nor negative. Only 6, 4, and 2 are above zero.' },
        { q: 'Table — x: 0, 1, 2, 3, 4 and h(x): 6, 4, 2, 0, −2. As x goes up, h is…', c: ['decreasing the whole time', 'increasing the whole time', 'decreasing, then increasing', 'decreasing only after it turns negative'], why: 'Each output is 2 less than the one before, so it always goes down.' },
        { q: 'A graph falls from (−6, 4) to (0, −3), then rises to (5, 6). Where is it decreasing?', c: ['−6 < x < 0', '−3 < x < 4', '0 < x < 5', '−6 < x < 5'], why: 'Answer with x-values. The graph goes down from x = −6 to x = 0.' },
        { q: 'A plane\'s altitude rises for 20 minutes, stays level for 2 hours, then drops. During the level part, the altitude is…', c: ['constant — neither increasing nor decreasing', 'increasing', 'decreasing', 'negative'], why: 'Level means the height isn\'t changing, so it is neither going up nor going down.' },
        { q: 'f(x) = x² − 9 is a U with its lowest point at (0, −9). It crosses the x-axis at x = −3 and x = 3. What is f doing on 3 < x < 5?', c: ['Positive and increasing', 'Negative and increasing', 'Positive and decreasing', 'Negative and decreasing'], why: 'Right of 3, the U is above the axis. Right of 0, it is climbing.' },
        { q: 'A small shop\'s profit is negative in months 1–3 and positive in months 4–12. What does negative profit mean?', c: ['The shop lost money in those months', 'The shop made money in those months', 'Profit was going down in those months', 'The shop was closed in those months'], why: 'Negative means below zero: a loss. It is not the same as decreasing.' },
      ],
      realLife: {
        text: `<p>Intervals turn a graph into a story you can say out loud.</p>
          <ul><li><b>Savings jar:</b> the amount is increasing in weeks you add money and decreasing in weeks you spend.</li>
          <li><b>Winter morning:</b> the temperature can be negative (below 0°C) but increasing as the sun comes up.</li>
          <li><b>Airplane:</b> altitude increases during takeoff, stays flat while cruising, and decreases while landing.</li>
          <li><b>Small business:</b> months with negative profit lose money, and months with positive profit make money.</li></ul>`,
        prompt: 'Think about the temperature outside on a cold winter day, from midnight to midnight. Describe one interval where it is increasing and one where it is decreasing, and explain why.',
      },
    },
    {
      key: 'a09-10',
      title: 'Average rate of change',
      videos: [
        { id: 'oT6LclcJ-I8', title: 'Introduction to average rate of change' },
        { id: 'TEXSW-o8674', title: 'Worked example: average rate of change from graph' },
        { id: 'FBWGRbHf7rU', title: 'Average rate of change word problem: table' },
      ],
      learn: `
        <p>The <b>average rate of change</b> (how much the output changes, on average, for each 1 step of the input) tells you how fast something changes between two points. It is the <b>slope</b> (steepness) of the straight line that connects those two points.</p>
        <p><b>Formula</b> from x = a to x = b:</p>
        <p><b>(f(b) − f(a)) ÷ (b − a)</b>, which means change in output ÷ change in input.</p>
        <p><b>Worked example:</b> f(x) = x². Find the average rate of change from x = 1 to x = 4.</p>
        <ol>
          <li>Find the outputs: f(4) = 16 and f(1) = 1.</li>
          <li>Change in output: 16 − 1 = 15.</li>
          <li>Change in input: 4 − 1 = 3.</li>
          <li>Divide: 15 ÷ 3 = <b>5</b>. On average, f goes up 5 for each 1 that x goes up.</li>
        </ol>
        <p><b>Units matter in word problems.</b> The answer is in "output units per input unit." A car is 30 miles from home at 1 p.m. and 150 miles away at 3 p.m. Rate: (150 − 30) ÷ (3 − 1) = 120 ÷ 2 = <b>60 miles per hour</b>.</p>
        <p>A <b>negative</b> rate means the output is going down, like a phone battery draining.</p>`,
      quiz: [
        { q: 'f(x) = x². What is the average rate of change from x = 0 to x = 3?', c: ['3', '9', '6', '1/3'], why: 'f(3) = 9 and f(0) = 0. (9 − 0) ÷ (3 − 0) = 9 ÷ 3 = 3.' },
        { q: 'f(2) = 10 and f(6) = 22. What is the average rate of change from x = 2 to x = 6?', c: ['3', '12', '4', '1/3'], why: 'Change in output: 22 − 10 = 12. Change in input: 6 − 2 = 4. Then 12 ÷ 4 = 3.' },
        { q: 'A phone battery is at 90% at 1 p.m. and 60% at 4 p.m. What is the average rate of change?', c: ['−10% per hour', '10% per hour', '−30% per hour', '−3% per hour'], why: '(60 − 90) ÷ (4 − 1) = −30 ÷ 3 = −10. Negative means the battery is dropping.' },
        { q: 'A plant is 4 cm tall on day 2 and 19 cm tall on day 7. What is its average growth rate?', c: ['3 cm per day', '15 cm per day', '5 cm per day', '2.7 cm per day'], why: '(19 − 4) ÷ (7 − 2) = 15 ÷ 5 = 3 cm each day, on average.' },
        { q: 'The average rate of change between two points on a graph is the same as…', c: ['the slope of the line through those two points', 'the y-intercept', 'the highest point between them', 'the x-value halfway between them'], why: 'Change in y ÷ change in x is exactly how you find slope.' },
        { q: 'f(x) = 2x + 5. What is the average rate of change from x = −3 to x = 10?', c: ['2', '5', '13', '7'], why: 'For a line, the rate is always its slope, 2. Check: f(10) = 25, f(−3) = −1, and 26 ÷ 13 = 2.' },
        { q: 'A graph goes through (1, 8) and (5, 0). What is the average rate of change from x = 1 to x = 5?', c: ['−2', '2', '−8', '−1/2'], why: '(0 − 8) ÷ (5 − 1) = −8 ÷ 4 = −2.' },
        { q: 'A train has gone 40 miles after 1 hour and 220 miles after 4 hours. What was its average speed in that time?', c: ['60 miles per hour', '55 miles per hour', '180 miles per hour', '73.3 miles per hour'], why: '(220 − 40) ÷ (4 − 1) = 180 ÷ 3 = 60 miles each hour.' },
        { q: 'W(t) is the gallons of water in a tank after t minutes. Its average rate of change is measured in…', c: ['gallons per minute', 'minutes per gallon', 'gallons', 'minutes'], why: 'Output units per input unit: gallons ÷ minutes.' },
        { q: 'f(x) = x² − 2x. What is the average rate of change from x = 1 to x = 3?', c: ['2', '1', '4', '3/2'], why: 'f(3) = 3 and f(1) = −1. (3 − (−1)) ÷ (3 − 1) = 4 ÷ 2 = 2.' },
        { q: 'Amina\'s savings jar had $50 in week 2 and $110 in week 8. What is the average rate of change?', c: ['$10 per week', '$60 per week', '$6 per week', '$13.75 per week'], why: '(110 − 50) ÷ (8 − 2) = 60 ÷ 6 = $10 per week, on average.' },
        { q: 'It was 50°F at 6 a.m. and 74°F at 2 p.m. What is the average rate of change?', c: ['3°F per hour', '24°F per hour', '8°F per hour', '−3°F per hour'], why: '6 a.m. to 2 p.m. is 8 hours. (74 − 50) ÷ 8 = 24 ÷ 8 = 3.' },
        { q: 'f(x) = x². What is the average rate of change from x = 2 to x = 5?', c: ['7', '21', '3', '1/7'], why: 'f(5) = 25 and f(2) = 4. (25 − 4) ÷ (5 − 2) = 21 ÷ 3 = 7.' },
        { q: 'f(−1) = 4 and f(3) = −8. What is the average rate of change from x = −1 to x = 3?', c: ['−3', '3', '−12', '−6'], why: '(−8 − 4) ÷ (3 − (−1)) = −12 ÷ 4 = −3.' },
        { q: 'A bus is 20 km from the station at 2 p.m. and 110 km away at 4 p.m. What is its average speed?', c: ['45 km per hour', '90 km per hour', '55 km per hour', '27.5 km per hour'], why: '(110 − 20) ÷ (4 − 2) = 90 ÷ 2 = 45 km each hour.' },
        { q: 'Table — x: 0, 2, 4, 6 and g(x): 1, 5, 13, 25. What is the average rate of change from x = 2 to x = 6?', c: ['5', '20', '4', '6.25'], why: '(25 − 5) ÷ (6 − 2) = 20 ÷ 4 = 5.' },
        { q: 'f(1) = 3 and f(4) = 12. Mia says the average rate of change is 1/3, because (4 − 1) ÷ (12 − 3) = 3/9. What was her mistake?', c: ['She flipped it — output change ÷ input change is 9 ÷ 3 = 3', 'Nothing — 1/3 is right', 'She should add — 9 + 3 = 12', 'She should subtract — 9 − 3 = 6'], why: 'Average rate of change is the change in output divided by the change in input.' },
        { q: 'A tank has 500 gallons at minute 0 and 380 gallons at minute 10. What is the average rate of change?', c: ['−12 gallons per minute', '12 gallons per minute', '−120 gallons per minute', '−38 gallons per minute'], why: '(380 − 500) ÷ (10 − 0) = −120 ÷ 10 = −12. Negative means it is draining.' },
        { q: 'Which average rate of change means the output is going DOWN?', c: ['−4 per hour', '4 per hour', '0.5 per hour', '12 per hour'], why: 'A negative rate means the output gets smaller as the input grows.' },
        { q: 'f(x) = −3x + 7. What is the average rate of change from x = 0 to x = 100?', c: ['−3', '7', '−300', '3'], why: 'For a line, the rate is always the slope, −3. Check: (−293 − 7) ÷ 100 = −3.' },
        { q: 'f(x) = x² + 1. What is the average rate of change from x = −2 to x = 2?', c: ['0', '4', '1', '2'], why: 'f(2) = 5 and f(−2) = 5. (5 − 5) ÷ 4 = 0. The output ended where it started.' },
        { q: 'A runner has gone 0.5 km at minute 3 and 2.5 km at minute 13. What is her average speed?', c: ['0.2 km per minute', '2 km per minute', '5 km per minute', '0.25 km per minute'], why: '(2.5 − 0.5) ÷ (13 − 3) = 2 ÷ 10 = 0.2 km each minute.' },
        { q: 'A download has 150 MB done after 2 minutes and 750 MB done after 6 minutes. What is the average rate?', c: ['150 MB per minute', '600 MB per minute', '125 MB per minute', '100 MB per minute'], why: '(750 − 150) ÷ (6 − 2) = 600 ÷ 4 = 150 MB each minute.' },
        { q: 'From 8 p.m. to midnight, the temperature\'s average rate of change is −2°F per hour. What does that mean?', c: ['On average, it got 2°F colder each hour', 'On average, it got 2°F warmer each hour', 'It was −2°F at midnight', 'It dropped 2°F in total'], why: 'Negative means going down. "Per hour" means each hour, on average.' },
      ],
      realLife: {
        text: `<p>The word "per" is the clue: average rate of change shows up any time you say "per."</p>
          <ul><li><b>Road trip:</b> 120 miles in 2 hours is an average of 60 miles per hour, even if you stopped for gas.</li>
          <li><b>Phone battery:</b> dropping from 80% to 50% in 3 hours is −10% per hour.</li>
          <li><b>Growing up:</b> growing from 60 to 66 inches between ages 12 and 15 is 2 inches per year.</li>
          <li><b>Download:</b> 600 MB (megabytes) in 4 minutes is 150 MB per minute.</li></ul>
          <p>"Average" means it smooths out the fast and slow parts.</p>`,
        prompt: 'Pick something you can measure at two different times, like your phone battery or a plant. Make up two readings, find the average rate of change, and explain what it means with units.',
      },
      practice: 'avgRate',
    },
    {
      key: 'a09-11',
      title: 'Intro to inverse functions',
      videos: [
        { id: 'W84lObmOp8M', title: 'Intro to inverse functions' },
        { id: 'wSiamij_i_k', title: 'Finding inverse functions: linear' },
      ],
      learn: `
        <p>An <b>inverse function</b> (a function that undoes another function) runs the machine backwards. If f turns 3 into 7, then the inverse, written <b>f⁻¹</b> (say "f inverse"), turns 7 back into 3.</p>
        <p>The −1 is <b>not</b> an exponent here. f⁻¹(x) does not mean 1 divided by f(x).</p>
        <p><b>Undo the steps in reverse order</b>, like socks and shoes: socks go on first, but shoes come off first.</p>
        <p><b>Worked example:</b> Find the inverse of f(x) = 2x + 1.</p>
        <ol>
          <li>Write y instead of f(x): y = 2x + 1.</li>
          <li>Swap x and y: x = 2y + 1.</li>
          <li>Solve for y. Subtract 1: x − 1 = 2y. Divide by 2: y = (x − 1)/2.</li>
          <li>So <b>f⁻¹(x) = (x − 1)/2</b>.</li>
        </ol>
        <p><b>Check it:</b> f(3) = 2(3) + 1 = 7, and f⁻¹(7) = (7 − 1)/2 = 3. You got back to where you started.</p>
        <p><b>Inputs and outputs trade places.</b> If the point (3, 7) is on the graph of f, then (7, 3) is on the graph of f⁻¹.</p>`,
      quiz: [
        { q: 'f(4) = 10. What is f⁻¹(10)?', c: ['4', '10', '1/10', '14'], why: 'The inverse undoes f. f sends 4 to 10, so f⁻¹ sends 10 back to 4.' },
        { q: 'What is the inverse of f(x) = x + 6?', c: ['f⁻¹(x) = x − 6', 'f⁻¹(x) = x + 6', 'f⁻¹(x) = 6 − x', 'f⁻¹(x) = x/6'], why: 'f adds 6, so the inverse subtracts 6.' },
        { q: 'What is the inverse of f(x) = 5x?', c: ['f⁻¹(x) = x/5', 'f⁻¹(x) = 5/x', 'f⁻¹(x) = x − 5', 'f⁻¹(x) = −5x'], why: 'f multiplies by 5, so the inverse divides by 5.' },
        { q: 'What is the inverse of f(x) = 3x − 4?', c: ['f⁻¹(x) = (x + 4)/3', 'f⁻¹(x) = (x − 4)/3', 'f⁻¹(x) = x/3 + 4', 'f⁻¹(x) = 3x + 4'], why: 'Swap: x = 3y − 4. Add 4: x + 4 = 3y. Divide by 3: y = (x + 4)/3.' },
        { q: 'What does f⁻¹(x) mean?', c: ['The function that undoes f', '1 divided by f(x)', 'f(x) times −1', 'f(x) minus 1'], why: 'The −1 is a label, not an exponent. f⁻¹ runs f backwards.' },
        { q: 'The point (2, 9) is on the graph of f. Which point is on the graph of f⁻¹?', c: ['(9, 2)', '(2, 9)', '(−2, −9)', '(2, 1/9)'], why: 'Inputs and outputs swap places, so (2, 9) becomes (9, 2).' },
        { q: 'f(x) = 2x + 1 and f⁻¹(x) = (x − 1)/2. What is f⁻¹(15)?', c: ['7', '31', '8', '6.5'], why: '(15 − 1) ÷ 2 = 14 ÷ 2 = 7. Check: f(7) = 2(7) + 1 = 15.' },
        { q: 'A function multiplies by 4, then adds 3. What does its inverse do?', c: ['Subtracts 3, then divides by 4', 'Divides by 4, then subtracts 3', 'Adds 3, then multiplies by 4', 'Subtracts 4, then divides by 3'], why: 'Undo the last step first. Take away the 3, then undo the times 4.' },
        { q: 'What is the inverse of f(x) = x/2 − 5?', c: ['f⁻¹(x) = 2x + 10', 'f⁻¹(x) = 2x + 5', 'f⁻¹(x) = 2x − 10', 'f⁻¹(x) = x/2 + 5'], why: 'Swap: x = y/2 − 5. Add 5: x + 5 = y/2. Multiply by 2: y = 2x + 10.' },
        { q: 'A ride costs C(m) = 2m + 3 dollars for m miles. What does the inverse of C tell you?', c: ['How many miles you can ride for a given cost', 'The cost for a given number of miles', 'The cost of 1 mile', 'How much the ride costs per hour'], why: 'The inverse swaps input and output: the cost goes in, and the miles come out.' },
        { q: 'A ride costs C(m) = 2m + 3 dollars for m miles. A ride cost $19. How many miles was it?', c: ['8 miles', '41 miles', '11 miles', '9.5 miles'], why: 'Undo the steps in reverse: 19 − 3 = 16, then 16 ÷ 2 = 8 miles.' },
        { q: 'Table for f — x: 1, 2, 3 and f(x): 4, 6, 8. What is f⁻¹(6)?', c: ['2', '6', '4', '8'], why: 'Find 6 in the output row. Its input is 2, so f⁻¹(6) = 2.' },
        { q: 'What is the inverse of f(x) = x − 9?', c: ['f⁻¹(x) = x + 9', 'f⁻¹(x) = x − 9', 'f⁻¹(x) = 9 − x', 'f⁻¹(x) = x/9'], why: 'f subtracts 9, so the inverse adds 9.' },
        { q: 'What is the inverse of f(x) = x/4?', c: ['f⁻¹(x) = 4x', 'f⁻¹(x) = x/4', 'f⁻¹(x) = 4/x', 'f⁻¹(x) = x − 4'], why: 'f divides by 4, so the inverse multiplies by 4.' },
        { q: 'What is the inverse of f(x) = 2x + 6?', c: ['f⁻¹(x) = (x − 6)/2', 'f⁻¹(x) = (x + 6)/2', 'f⁻¹(x) = x/2 − 6', 'f⁻¹(x) = 2x − 6'], why: 'Swap: x = 2y + 6. Subtract 6: x − 6 = 2y. Divide by 2: y = (x − 6)/2.' },
        { q: 'What is the inverse of f(x) = 5x − 10?', c: ['f⁻¹(x) = (x + 10)/5', 'f⁻¹(x) = (x − 10)/5', 'f⁻¹(x) = x/5 + 10', 'f⁻¹(x) = 5x + 10'], why: 'Swap: x = 5y − 10. Add 10: x + 10 = 5y. Divide by 5: y = (x + 10)/5.' },
        { q: 'f(7) = 2. Which must be true?', c: ['f⁻¹(2) = 7', 'f⁻¹(7) = 2', 'f⁻¹(2) = 1/7', 'f⁻¹(7) = 1/2'], why: 'f sends 7 to 2, so the inverse sends 2 back to 7.' },
        { q: 'Nora says the inverse of f(x) = 3x is 1/(3x). What was her mistake?', c: ['The −1 in f⁻¹ is not an exponent — the inverse is x/3', 'Nothing — that is right', 'The inverse is −3x', 'The inverse is 3x − 1'], why: 'f⁻¹ undoes f. f multiplies by 3, so f⁻¹ divides by 3.' },
        { q: 'f(x) = x + 6 and f⁻¹(x) = x − 6. What is f⁻¹(f(5))?', c: ['5', '11', '17', '−1'], why: 'f(5) = 11, then f⁻¹(11) = 5. The inverse brings you back to the start.' },
        { q: 'The point (−3, 4) is on the graph of f. Which point is on the graph of f⁻¹?', c: ['(4, −3)', '(−3, 4)', '(3, −4)', '(−4, 3)'], why: 'Inputs and outputs swap places, so (−3, 4) becomes (4, −3).' },
        { q: 'A function divides by 2, then subtracts 7. What does its inverse do?', c: ['Adds 7, then multiplies by 2', 'Multiplies by 2, then adds 7', 'Subtracts 7, then divides by 2', 'Adds 2, then multiplies by 7'], why: 'Undo the last step first: add back the 7, then undo the divide by 2.' },
        { q: 'F = 1.8C + 32 turns Celsius into Fahrenheit. Use the inverse, C = (F − 32)/1.8, to change 50°F to Celsius.', c: ['10°C', '122°C', '32.2°C', '18°C'], why: '(50 − 32) ÷ 1.8 = 18 ÷ 1.8 = 10°C.' },
        { q: 'Table for g — x: 0, 1, 2, 3 and g(x): 5, 8, 11, 14. What is g⁻¹(11)?', c: ['2', '38', '1/11', '5'], why: 'Find 11 in the output row. Its input is 2, so g⁻¹(11) = 2.' },
        { q: 'A taxi charges C(m) = 3m + 4 dollars for m miles. A ride cost $25. How many miles was it?', c: ['7 miles', '79 miles', '21 miles', '9.7 miles'], why: 'Undo the steps in reverse: 25 − 4 = 21, then 21 ÷ 3 = 7 miles.' },
      ],
      realLife: {
        text: `<p>Inverses answer the "backwards" question.</p>
          <ul><li><b>Temperature:</b> F = 1.8C + 32 turns Celsius into Fahrenheit. The inverse, C = (F − 32)/1.8, turns it back. 68°F becomes (68 − 32)/1.8 = 20°C.</li>
          <li><b>Ride app:</b> cost = 2m + 3 gives the cost from the miles. The inverse, m = (cost − 3)/2, tells how far $15 will take you: (15 − 3)/2 = 6 miles.</li>
          <li><b>Secret codes:</b> a code that moves each letter 3 places forward is undone by moving each letter 3 places back.</li></ul>`,
        prompt: 'Describe something in your life that you do and then undo, like packing and unpacking a bag. Explain why the undoing steps have to happen in reverse order.',
      },
      practice: 'inverseLinear',
    },
  ],
};
