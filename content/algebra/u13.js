// Unit 13 — Exponential growth & decay. NJ: F.LE.A.1, F.LE.A.2, F.LE.A.3, F.LE.B.5, F.IF.C.7e, A.SSE.B.3c
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
// No compound-interest or loan examples (family request): population, bacteria, views, half-life, depreciation, bounces.
export default {
  id: 'a13', n: 13, title: 'Exponential growth & decay', nj: ['F.LE.A.1', 'F.LE.A.2', 'F.LE.A.3', 'F.LE.B.5', 'F.IF.C.7e', 'A.SSE.B.3c'],
  lessons: [
    {
      key: 'a13-01',
      title: 'Exponential vs. linear growth',
      videos: [
        { id: '6WMZ7J0wwMI', title: 'Intro to exponential functions' },
        { id: '_vlXdx-CqM0', title: 'Exponential vs. linear growth' },
      ],
      learn: `
        <p>Things can grow in two very different ways.</p>
        <p><b>Linear growth</b> (growing by <b>adding</b> the same amount each step) is steady. Saving $5 a week in a jar gives 5, 10, 15, 20. Its graph is a straight line.</p>
        <p><b>Exponential growth</b> (growing by <b>multiplying</b> by the same number each step) starts slow, then explodes. Bacteria that double every hour go 5, 10, 20, 40, 80. Its graph is a curve that bends up.</p>
        <p><b>How to tell from a table</b> (when x goes up by the same amount each row):</p>
        <ul>
          <li>Subtract each y from the next one. Same <b>difference</b> (the answer to a subtraction) every time? It is linear.</li>
          <li>Divide each y by the one before it. Same <b>ratio</b> (the answer to a division) every time? It is exponential.</li>
          <li>Neither one stays the same? It is neither.</li>
        </ul>
        <p><b>Worked example:</b> x: 0, 1, 2, 3 and y: 5, 15, 45, 135.</p>
        <ol>
          <li>Differences: 15 − 5 = 10 and 45 − 15 = 30. Not the same, so it is not linear.</li>
          <li>Ratios: 15 ÷ 5 = 3, 45 ÷ 15 = 3, 135 ÷ 45 = 3. The same every time.</li>
          <li>So it is <b>exponential</b>. Each step multiplies by 3.</li>
        </ol>
        <p><b>Watch out:</b> both kinds go up. The question is <b>how</b> they go up: by adding or by multiplying.</p>`,
      quiz: [
        { q: 'Linear growth means that each step you…', c: ['add the same amount', 'multiply by the same number', 'double the amount', 'divide by the same number'], why: 'Linear = adding the same amount every step, like +5, +5, +5.' },
        { q: 'Exponential growth means that each step you…', c: ['multiply by the same number', 'add the same amount', 'add 1 more than last time', 'square the step number'], why: 'Exponential = multiplying by the same number every step, like ×2, ×2, ×2.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 4, 7, 10, 13. What kind of growth is this?', c: ['Linear — it adds 3 each time', 'Exponential — it multiplies by 3 each time', 'Exponential — it grows each time', 'Neither — 4 is not a multiple of 3'], why: '7 − 4 = 3, 10 − 7 = 3, 13 − 10 = 3. Same difference, so linear.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 3, 6, 12, 24. What kind of growth is this?', c: ['Exponential — it multiplies by 2 each time', 'Linear — it adds 3 each time', 'Linear — it adds 6 each time', 'Neither — the jumps keep changing'], why: '6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2. Same ratio, so exponential.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 1, 4, 9, 16. What kind of growth is this?', c: ['Neither — no same difference and no same ratio', 'Linear — it goes up each time', 'Exponential — it multiplies by 4', 'Exponential — the numbers grow fast'], why: 'Differences are 3, 5, 7. Ratios are 4, 2.25, about 1.8. Neither stays the same.' },
        { q: 'A video has 500 views. The views triple every day. How many views after 2 days?', c: ['4,500', '1,500', '3,000', '506'], why: 'Day 1: 500 × 3 = 1,500. Day 2: 1,500 × 3 = 4,500.' },
        { q: 'A plant is 10 cm tall and grows 4 cm every week. What kind of growth is this?', c: ['Linear — it adds 4 cm each week', 'Exponential — it grows every week', 'Exponential — 4 is what it multiplies by', 'Neither — plants do not grow evenly'], why: 'The same 4 cm is added each week. Adding the same amount is linear.' },
        { q: 'You start with 50 bacteria, and they double every hour. What kind of growth is this?', c: ['Exponential — they multiply by 2 each hour', 'Linear — they add 50 each hour', 'Linear — they add 2 each hour', 'Neither — bacteria are too small to count'], why: 'Doubling means ×2 every hour: 50, 100, 200, 400. The jumps keep getting bigger.' },
        { q: 'Table — x: 0, 2, 4, 6 and y: 7, 14, 28, 56. What kind of growth is this?', c: ['Exponential — y doubles each time x goes up 2', 'Linear — it adds 7 each time', 'Linear — the x-values go up by 2', 'Neither — x skips numbers'], why: 'x goes up by the same step (2). Each y is double the one before, so exponential.' },
        { q: 'Which list grows by multiplying by the same number?', c: ['2, 6, 18, 54', '2, 6, 10, 14', '2, 4, 6, 8', '2, 5, 9, 14'], why: '6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3. The others add numbers instead.' },
        { q: 'Account A starts with 100 followers and gains 100 each week. Account B starts with 100 and doubles each week. After 4 weeks, who has more?', c: ['B, with 1,600 followers', 'A, with 500 followers', 'B, with 800 followers', 'They tie at 500 followers'], why: 'A: 100 + 4 × 100 = 500. B: 100 → 200 → 400 → 800 → 1,600.' },
        { q: 'How do you check a table for exponential growth?', c: ['Divide each y by the one before it and look for the same answer', 'Subtract each y from the next one and look for the same answer', 'Check that the y-values get bigger', 'Check that the x-values go up by 1'], why: 'Same ratio means exponential. Same difference means linear. Getting bigger happens in both.' },
      ],
      realLife: {
        text: `<p>You can spot both kinds of growth around you.</p>
          <ul><li><b>Linear:</b> saving $5 in a jar every week, or a plant growing 2 cm each week. The same amount is added each time.</li>
          <li><b>Exponential:</b> a funny video where every viewer shares it with 3 friends. That goes 1 → 3 → 9 → 27 → 81 shares. The same number is multiplied each time.</li>
          <li><b>Bacteria</b> on food left out in the heat can double about every 20 minutes. That is why leftovers go in the fridge fast.</li></ul>
          <p>Linear is a steady walk. Exponential is a rocket that starts slow.</p>`,
        prompt: 'Think of one thing that grows by adding the same amount and one thing that grows by multiplying. Describe both and explain how you can tell them apart.',
      },
    },
    {
      key: 'a13-02',
      title: 'Exponential expressions',
      videos: [
        { id: 'G2WybA4Hf7Y', title: 'Initial value & common ratio of exponential functions' },
        { id: 'Z3YVZzCEi_A', title: 'Exponential expressions word problems (algebraic)' },
        { id: 'Pud5ygp6H38', title: 'Interpreting exponential expression word problem' },
      ],
      learn: `
        <p>An <b>exponential expression</b> (a formula where the variable sits up in the exponent) looks like <b>a · bˣ</b>.</p>
        <ul>
          <li><b>a</b> is the <b>initial value</b> (the starting amount, when x = 0).</li>
          <li><b>b</b> is the <b>growth factor</b> (the number you multiply by each step). The videos call it the <b>common ratio</b>.</li>
          <li><b>x</b> is the number of steps, like days, hours, or years.</li>
        </ul>
        <p>Why is a the start? Any number to the 0 power is 1, so a · b⁰ = a · 1 = a.</p>
        <p><b>Order of operations:</b> do the exponent first, then multiply. 3 · 2⁴ = 3 · 16 = 48. It is NOT 6⁴.</p>
        <p><b>Percent growth:</b> growing 10% means you keep all you had (100%) plus 10% more. That is 110%, so you multiply by <b>1.10</b>. Growing 30% means you multiply by 1.30.</p>
        <p><b>Worked example:</b> A town has 2,000 people and grows 10% each year. How many people live there after 2 years?</p>
        <ol>
          <li>Initial value a = 2,000. Growth factor b = 1 + 0.10 = 1.1.</li>
          <li>Expression: P = 2000 · 1.1ᵗ, where t is the number of years.</li>
          <li>Exponent first: 1.1² = 1.21. Then 2000 · 1.21 = <b>2,420 people</b>.</li>
          <li>Check one year at a time: 2000 · 1.1 = 2200, then 2200 · 1.1 = 2420.</li>
        </ol>`,
      quiz: [
        { q: 'In y = 5 · 2ˣ, what is the initial value?', c: ['5', '2', '10', '0'], why: 'The initial value is the number in front. When x = 0, y = 5 · 1 = 5.' },
        { q: 'In y = 5 · 2ˣ, what is the growth factor?', c: ['2', '5', '10', '7'], why: 'The growth factor is the base under the exponent. Each step multiplies by 2.' },
        { q: 'What is 3 · 2⁴?', c: ['48', '1,296', '24', '16'], why: 'Exponent first: 2⁴ = 16. Then 3 · 16 = 48. Do not multiply 3 · 2 first.' },
        { q: 'If f(x) = 4 · 3ˣ, what is f(2)?', c: ['36', '144', '24', '12'], why: '3² = 9, then 4 · 9 = 36.' },
        { q: 'If f(x) = 7 · 2ˣ, what is f(0)?', c: ['7', '0', '14', '1'], why: '2⁰ = 1, so f(0) = 7 · 1 = 7. That is the initial value.' },
        { q: 'A population grows 20% each year. What is the growth factor?', c: ['1.2', '0.2', '20', '1.02'], why: 'Keep 100% and add 20%: 100% + 20% = 120% = 1.2.' },
        { q: 'A town of 3,000 people grows 5% each year. Which expression gives the population after t years?', c: ['3000 · 1.05ᵗ', '3000 · 0.05ᵗ', '3000 · 5ᵗ', '3000 + 1.05t'], why: 'Start at 3,000. Growing 5% means multiplying by 1 + 0.05 = 1.05 each year.' },
        { q: 'A plant has L = 5 · 2ᵗ leaves after t weeks. What does the 2 mean?', c: ['The number of leaves doubles each week', 'The plant started with 2 leaves', '2 new leaves grow each week', 'The plant grows for 2 weeks'], why: 'The 2 is the growth factor, so the leaves multiply by 2 every week.' },
        { q: 'There are B = 100 · 3ʰ bacteria after h hours. How many are there after 3 hours?', c: ['2,700', '900', '27,000,000', '300'], why: '3³ = 27, then 100 · 27 = 2,700.' },
        { q: 'A reserve has 170 deer, and the herd grows 30% each year. How many deer after 1 year?', c: ['221', '200', '51', '5,100'], why: 'Multiply by 1.3: 170 · 1.3 = 221. That is 170 plus 30% of 170 (51).' },
        { q: 'A video has 200 views, and the views triple each day. Which expression gives the views after d days?', c: ['200 · 3ᵈ', '3 · 200ᵈ', '200 + 3d', '200 · 3d'], why: 'Start at 200 and multiply by 3 once per day: 200 · 3ᵈ.' },
        { q: 'In P = 2000 · 1.1ᵗ, what does 2000 stand for?', c: ['The starting population', 'The population after 1 year', 'How many people join each year', 'The growth factor'], why: 'The number in front is the initial value, the amount when t = 0.' },
      ],
      realLife: {
        text: `<p>Exponential expressions show up whenever something grows by the same percent or factor each step.</p>
          <ul><li><b>Towns:</b> a city of 50,000 people growing 2% a year is 50000 · 1.02ᵗ.</li>
          <li><b>Video views:</b> 300 views that triple each day is 300 · 3ᵈ.</li>
          <li><b>Bacteria:</b> 40 bacteria doubling every hour is 40 · 2ʰ.</li></ul>
          <p>In each one, the first number is where you start. The number with the exponent is what you multiply by each step. Read those two numbers and you know the whole story.</p>`,
        prompt: 'A class garden starts with 6 plants, and the number of plants doubles every month. Write an expression for the plants after m months and explain what the 6 and the 2 mean.',
      },
    },
    {
      key: 'a13-03',
      title: 'Graphs of exponential growth',
      videos: [
        { id: '9SOSfRNCQZQ', title: 'Exponential function graph' },
        { id: '6rX2VNybXEE', title: 'Graphs of exponential growth' },
      ],
      learn: `
        <p>The graph of exponential growth, y = a · bˣ with b bigger than 1, has a shape you can spot fast.</p>
        <ul>
          <li><b>It crosses the y-axis at a</b>, the initial value. That point is the <b>y-intercept</b> (where the graph crosses the y-axis).</li>
          <li><b>On the left it is almost flat.</b> It gets closer and closer to the x-axis but never touches it. That line is called a <b>horizontal asymptote</b> (a flat line the graph gets near but never reaches).</li>
          <li><b>On the right it shoots up</b>, getting steeper and steeper, because each step multiplies a bigger number.</li>
          <li>When a is positive, every y-value is positive. The graph never goes below the x-axis.</li>
        </ul>
        <p><b>Worked example:</b> Graph y = 2 · 3ˣ.</p>
        <ol>
          <li>Make a table. x = −1: 2 · 3⁻¹ = 2/3. x = 0: 2 · 1 = 2. x = 1: 2 · 3 = 6. x = 2: 2 · 9 = 18.</li>
          <li>Plot (−1, 2/3), (0, 2), (1, 6), and (2, 18).</li>
          <li>Connect them with a smooth curve. Do not use a ruler, because it is not a line.</li>
        </ol>
        <p><b>Picking the right graph:</b> check where it crosses the y-axis (that is a). Then check x = 1 (that is a · b).</p>
        <p>A bigger growth factor makes a steeper curve. y = 5ˣ climbs faster than y = 2ˣ.</p>`,
      quiz: [
        { q: 'Where does the graph of y = 4 · 2ˣ cross the y-axis?', c: ['(0, 4)', '(0, 2)', '(0, 8)', '(0, 0)'], why: 'At x = 0, y = 4 · 2⁰ = 4 · 1 = 4.' },
        { q: 'What does the graph of y = 3ˣ look like?', c: ['A curve that starts flat, then shoots up', 'A straight line going up', 'A U shape', 'A curve that goes up, then comes back down'], why: 'Exponential growth hugs the x-axis on the left, then climbs faster and faster.' },
        { q: 'For y = 2ˣ, what is y when x = −1?', c: ['1/2', '−2', '−1/2', '0'], why: '2⁻¹ = 1/2. A negative exponent gives a small positive fraction, not a negative number.' },
        { q: 'As x goes far to the left, the graph of y = 5 · 2ˣ…', c: ['gets closer and closer to 0 but never touches it', 'crosses the x-axis', 'keeps going down below 0', 'stops at x = 0'], why: 'Halving again and again gets tiny but never reaches 0. The x-axis is the asymptote.' },
        { q: 'Which point is on the graph of y = 2 · 3ˣ?', c: ['(2, 18)', '(2, 36)', '(2, 12)', '(2, 6)'], why: 'Exponent first: 3² = 9. Then 2 · 9 = 18.' },
        { q: 'For x bigger than 0, which graph climbs faster: y = 2ˣ or y = 5ˣ?', c: ['y = 5ˣ — it has the bigger growth factor', 'y = 2ˣ — it starts lower', 'They climb at the same speed', 'You cannot tell without drawing them'], why: 'Both start at (0, 1). Multiplying by 5 each step beats multiplying by 2.' },
        { q: 'An exponential graph passes through (0, 3) and (1, 6). What is its equation?', c: ['y = 3 · 2ˣ', 'y = 6 · 3ˣ', 'y = 2 · 3ˣ', 'y = 6 · 2ˣ'], why: 'At x = 0, y = 3, so a = 3. From 3 to 6 you multiply by 2.' },
        { q: 'On the graph of y = 10 · 2ˣ, what is y when x = 3?', c: ['80', '60', '8,000', '30'], why: '2³ = 8, then 10 · 8 = 80.' },
        { q: 'Does the graph of y = 3 · 2ˣ ever go below the x-axis?', c: ['No — every y-value is positive', 'Yes — when x is negative', 'Yes — when x is 0', 'Yes — when x is less than −3'], why: '3 times any power of 2 is positive. Negative x gives small positive numbers.' },
        { q: 'A graph shows B = 50 · 2ʰ bacteria after h hours. What does the y-axis crossing tell you?', c: ['There were 50 bacteria at the start', 'The bacteria double every 50 hours', 'There were 2 bacteria at the start', 'The bacteria are gone after 50 hours'], why: 'The y-axis crossing is at h = 0, the start. B = 50 · 1 = 50.' },
        { q: 'Why does an exponential growth graph get steeper as x grows?', c: ['Each step multiplies a bigger number, so the jumps get bigger', 'Each step adds the same amount', 'The x-values get closer together', 'The graph turns into a straight line'], why: 'Doubling 10 adds 10, but doubling 1,000 adds 1,000. Bigger numbers make bigger jumps.' },
        { q: 'Which graph crosses the y-axis highest?', c: ['y = 8 · 2ˣ', 'y = 3 · 5ˣ', 'y = 1 · 9ˣ', 'y = 5 · 3ˣ'], why: 'The y-axis crossing is the initial value a. The values of a are 8, 3, 1, and 5.' },
      ],
      realLife: {
        text: `<p>People call the exponential growth graph a <b>"hockey stick"</b>: flat for a while, then a sharp turn upward.</p>
          <ul><li><b>Viral videos:</b> views barely move for days, then suddenly jump by millions.</li>
          <li><b>Bacteria in a lab dish:</b> hard to see at first, then the dish is covered in a day or two.</li>
          <li><b>Animal populations</b> with plenty of food, like rabbits brought to a new land, climb slowly at first, then boom.</li></ul>
          <p>The flat part fools people. It looks like nothing is happening, but the doubling is already going on.</p>`,
        prompt: 'A video\'s view graph looks almost flat for a week and then shoots straight up. Explain in your own words why exponential growth looks like that.',
      },
    },
    {
      key: 'a13-04',
      title: 'Exponential decay',
      videos: [
        { id: 'v4IdaXvyE7U', title: 'Exponential decay intro' },
        { id: 'RVv0Jgi3Pbw', title: 'Graphing exponential growth & decay' },
      ],
      learn: `
        <p><b>Exponential decay</b> (shrinking by multiplying by the same number each step) is growth running backwards. It uses the same form, y = a · bˣ, but now b is <b>between 0 and 1</b>. That b is the <b>decay factor</b> (the number you multiply by each step to shrink).</p>
        <ul>
          <li>b bigger than 1 → growth. b between 0 and 1 → decay.</li>
          <li><b>Percent loss:</b> losing 20% means you keep 80%, so multiply by <b>0.8</b>. Decay factor = 1 minus the percent lost.</li>
          <li><b>Half-life</b> (the time it takes for half of something to be gone) means the decay factor is 1/2 for each half-life.</li>
        </ul>
        <p>Examples: medicine leaving your body, a phone losing value (called <b>depreciation</b>, losing value as it gets older), a ball bouncing lower each time.</p>
        <p><b>The graph</b> starts high at a on the y-axis, drops fast, then flattens out. It gets close to 0 but never reaches it.</p>
        <p><b>Worked example:</b> A phone costs $800 and loses 25% of its value each year. What is it worth after 2 years?</p>
        <ol>
          <li>It keeps 100% − 25% = 75%, so b = 0.75.</li>
          <li>Expression: V = 800 · 0.75ᵗ.</li>
          <li>Exponent first: 0.75² = 0.5625. Then 800 · 0.5625 = <b>$450</b>.</li>
          <li>Check: 800 · 0.75 = 600, then 600 · 0.75 = 450.</li>
        </ol>
        <p><b>Watch out:</b> losing 25% twice is NOT losing 50%. The second loss is 25% of a smaller amount.</p>`,
      quiz: [
        { q: 'Which equation shows exponential decay?', c: ['y = 50 · 0.6ˣ', 'y = 50 · 1.6ˣ', 'y = 0.6 · 50ˣ', 'y = 50 − 0.6x'], why: 'The base is 0.6, which is between 0 and 1. The last one subtracts, so it is linear.' },
        { q: 'A phone loses 20% of its value each year. What is the decay factor?', c: ['0.8', '0.2', '1.2', '20'], why: 'Losing 20% leaves 80% each year, and 80% = 0.8.' },
        { q: 'A 400 mg dose of medicine has a half-life of 6 hours. How much is left after 12 hours?', c: ['100 mg', '200 mg', '0 mg', '50 mg'], why: '12 hours is two half-lives. 400 → 200 → 100 mg.' },
        { q: 'For y = 81 · (1/3)ˣ, what is y when x = 2?', c: ['9', '27', '54', '3'], why: '(1/3)² = 1/9, and 81 · 1/9 = 9. Or: 81 → 27 → 9.' },
        { q: 'Is y = 5 · 1.05ˣ growth or decay?', c: ['Growth — 1.05 is bigger than 1', 'Decay — 0.05 is small', 'Decay — 1.05 is close to 1', 'Neither — it is linear'], why: 'A base bigger than 1 means growth, even if it is only a little bigger.' },
        { q: 'Is y = 300 · 0.9ˣ growth or decay?', c: ['Decay — 0.9 is between 0 and 1', 'Growth — 300 is big', 'Growth — 0.9 is positive', 'Neither — it stays the same'], why: 'Look at the base, not the starting number. Multiplying by 0.9 makes it shrink.' },
        { q: 'A $1,000 laptop loses 10% of its value each year. Which expression gives its value after t years?', c: ['1000 · 0.9ᵗ', '1000 · 0.1ᵗ', '1000 · 1.1ᵗ', '1000 − 0.9t'], why: 'Losing 10% keeps 90%, so multiply by 0.9 each year.' },
        { q: 'Using V = 1000 · 0.9ᵗ, what is the laptop worth after 2 years?', c: ['$810', '$800', '$900', '$1,210'], why: '1000 · 0.9 = 900, then 900 · 0.9 = 810. Losing 10% twice is not losing $200.' },
        { q: 'A ball is dropped from 10 feet. Each bounce reaches half the height of the one before. How high is the 3rd bounce?', c: ['1.25 feet', '2.5 feet', '5 feet', '0.625 feet'], why: 'Bounce 1: 5 ft. Bounce 2: 2.5 ft. Bounce 3: 1.25 ft.' },
        { q: 'What does the graph of exponential decay look like?', c: ['It starts high, drops fast, then flattens out near 0', 'It starts low and shoots up', 'It is a straight line going down', 'It drops below 0 and keeps going'], why: 'Each step takes away a smaller piece, so it levels off but never hits 0.' },
        { q: 'Something loses 35% of its amount every hour. What percent is left after each hour?', c: ['65%', '35%', '135%', '3.5%'], why: '100% − 35% = 65% is left. So the decay factor is 0.65.' },
        { q: 'A town of 8,000 people shrinks by 5% each year. Which expression gives the population after t years?', c: ['8000 · 0.95ᵗ', '8000 · 0.05ᵗ', '8000 · 1.05ᵗ', '8000 · 0.5ᵗ'], why: 'Losing 5% keeps 95%, so multiply by 0.95 each year.' },
      ],
      realLife: {
        text: `<p>Decay is everywhere once you look.</p>
          <ul><li><b>Medicine:</b> your body clears part of a dose every hour. That is why the label says when you can take the next dose.</li>
          <li><b>Phones:</b> they lose value each year. A $1,000 phone losing 30% a year is worth $490 after 2 years.</li>
          <li><b>Bouncing balls:</b> a basketball bounces back to only part of its last height, lower and lower each time.</li>
          <li><b>Hot drinks</b> cool fast at first, then slower as they get close to room temperature.</li></ul>`,
        prompt: 'Your $600 phone loses about 30% of its value every year. Explain how you would figure out what it is worth after 2 years, and why it never quite reaches $0.',
      },
    },
    {
      key: 'a13-05',
      title: 'Exponential functions from tables and graphs',
      videos: [
        { id: 'UgLfAb_aFt4', title: 'Writing exponential functions' },
        { id: 'Qst1UVtq8pE', title: 'Writing exponential functions from tables' },
        { id: 'fe1Hsqyetzk', title: 'Analyzing graphs of exponential functions' },
      ],
      learn: `
        <p>From a table or a graph, you can write the exponential function y = a · bˣ in three steps.</p>
        <ol>
          <li><b>Find a:</b> the y-value when x = 0. On a graph, it is where the curve crosses the y-axis.</li>
          <li><b>Find b:</b> pick two points where x goes up by 1. Divide the second y by the first y.</li>
          <li><b>Check:</b> plug in another point to make sure it works.</li>
        </ol>
        <p><b>Worked example:</b> x: 0, 1, 2, 3 and y: 5, 15, 45, 135.</p>
        <ol>
          <li>When x = 0, y = 5. So a = 5.</li>
          <li>15 ÷ 5 = 3. So b = 3.</li>
          <li>Function: <b>y = 5 · 3ˣ</b>.</li>
          <li>Check x = 3: 3³ = 27, and 5 · 27 = 135. It matches.</li>
        </ol>
        <p><b>Decay works the same way.</b> A graph goes through (0, 64) and (1, 16). So a = 64 and b = 16 ÷ 64 = 1/4. The function is y = 64 · (1/4)ˣ.</p>
        <p><b>No x = 0 in the table?</b> Work backwards. If x = 1 gives 6 and each step doubles, then x = 0 gives 6 ÷ 2 = 3.</p>
        <p><b>Watch out:</b> test the ratios first. If they are not all the same, it is not exponential. A table like 5, 9, 13, 17 adds 4 each time, so it is linear: y = 4x + 5.</p>`,
      quiz: [
        { q: 'Table — x: 0, 1, 2, 3 and y: 2, 8, 32, 128. Which function fits?', c: ['y = 2 · 4ˣ', 'y = 4 · 2ˣ', 'y = 2 + 6x', 'y = 8 · 4ˣ'], why: 'At x = 0, y = 2, so a = 2. 8 ÷ 2 = 4, so b = 4.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 3, 6, 12, 24. What is the initial value?', c: ['3', '6', '2', '24'], why: 'The initial value is y when x = 0. That is 3.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 10, 30, 90, 270. What is the growth factor?', c: ['3', '20', '10', '30'], why: 'Divide neighbors: 30 ÷ 10 = 3, 90 ÷ 30 = 3. The 20 is a difference, not a ratio.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 80, 40, 20, 10. Which function fits?', c: ['y = 80 · (1/2)ˣ', 'y = 80 · 2ˣ', 'y = 80 − 40x', 'y = 10 · 2ˣ'], why: 'Start at 80. 40 ÷ 80 = 1/2, so it halves each step. That is decay.' },
        { q: 'An exponential graph passes through (0, 5) and (1, 10). What is y when x = 3?', c: ['40', '20', '80', '1,000'], why: 'a = 5 and b = 2, so y = 5 · 2³ = 5 · 8 = 40.' },
        { q: 'The graph of y = a · bˣ crosses the y-axis at 6 and passes through (1, 18). What are a and b?', c: ['a = 6, b = 3', 'a = 18, b = 6', 'a = 6, b = 12', 'a = 3, b = 6'], why: 'a is the y-axis crossing, 6. Then 18 ÷ 6 = 3. The 12 is a difference, not a ratio.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 1000, 100, 10, 1. Which function fits?', c: ['y = 1000 · 0.1ˣ', 'y = 1000 · 10ˣ', 'y = 1000 − 900x', 'y = 1 · 10ˣ'], why: 'Start at 1000. 100 ÷ 1000 = 0.1, so multiply by 0.1 each step.' },
        { q: 'Table — x: 0, 1, 2 and y: 4, 12, 36. This is exponential. What is y when x = 3?', c: ['108', '60', '48', '44'], why: 'The ratio is 12 ÷ 4 = 3. So 36 × 3 = 108.' },
        { q: 'Table — x: 1, 2, 3, 4 and y: 6, 12, 24, 48. Which function fits?', c: ['y = 3 · 2ˣ', 'y = 6 · 2ˣ', 'y = 2 · 6ˣ', 'y = 6x'], why: 'It doubles each step. Go back to x = 0: 6 ÷ 2 = 3. Check: 3 · 2¹ = 6.' },
        { q: 'An exponential graph shows 200 bacteria at hour 0 and 600 at hour 1. Which function fits?', c: ['B = 200 · 3ʰ', 'B = 600 · 3ʰ', 'B = 200 · 2ʰ', 'B = 200 · 400ʰ'], why: 'a = 200 (the start). 600 ÷ 200 = 3, so b = 3.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 5, 9, 13, 17. Which rule fits?', c: ['Linear: y = 4x + 5', 'Exponential: y = 5 · 4ˣ', 'Exponential: y = 5 · 1.8ˣ', 'Linear: y = 5x + 4'], why: 'It adds 4 each time, so it is linear. 5 · 1.8 = 9 works once, but 9 · 1.8 is not 13.' },
        { q: 'A phone is worth $900 when new, $600 after 1 year, and $400 after 2 years. Which function fits?', c: ['V = 900 · (2/3)ᵗ', 'V = 900 − 300t', 'V = 900 · (3/2)ᵗ', 'V = 600 · (2/3)ᵗ'], why: '600 ÷ 900 = 2/3 and 400 ÷ 600 = 2/3. Start at 900.' },
      ],
      realLife: {
        text: `<p>Scientists often have numbers before they have a rule. Writing the rule lets them predict what comes next.</p>
          <ul><li><b>Lab bacteria:</b> counts of 100, then 300, then 900 each hour. The rule 100 · 3ʰ predicts 8,100 after 4 hours.</li>
          <li><b>Phone value:</b> $900, then $600, then $400. Dividing gives 2/3 each year, so V = 900 · (2/3)ᵗ.</li>
          <li><b>Town records:</b> population counts from past years give a and b, so planners can guess how many new schools or buses they will need.</li></ul>`,
        prompt: 'A table shows a town had 1,000 people, then 2,000, then 4,000, with 10 years between counts. Explain how you would write a rule for it and what it predicts next.',
      },
    },
    {
      key: 'a13-06',
      title: 'Exponential vs. linear models',
      videos: [
        { id: 'tV0NNJ6ndgk', title: 'Exponential vs. linear models: table' },
        { id: '721RrH6auoU', title: 'Linear vs. exponential growth: from data' },
        { id: 'cwnke_pjX90', title: 'Exponential vs. linear growth over time' },
      ],
      learn: `
        <p>A <b>model</b> (a math rule that describes real-life data) helps you predict what comes next. Real data is messy, so the numbers will be <b>close</b> to a pattern, not perfect.</p>
        <ul>
          <li>Differences about the same → use a <b>linear model</b> (y = mx + b).</li>
          <li>Ratios about the same → use an <b>exponential model</b> (y = a · bˣ).</li>
        </ul>
        <p><b>Big idea: exponential eventually wins.</b> Exponential growth will always pass linear growth at some point, even if it starts way behind. Adding the same amount can't keep up with multiplying.</p>
        <p><b>Worked example:</b> Video A starts with 1,000 views and gains 1,000 views each day. Video B starts with 10 views and doubles each day. When does B pass A?</p>
        <ol>
          <li>A = 1000 + 1000d and B = 10 · 2ᵈ, where d is the number of days.</li>
          <li>Day 7: A = 8,000 and B = 1,280. A is way ahead.</li>
          <li>Day 10: A = 11,000 and B = 10,240. B is close.</li>
          <li>Day 11: A = 12,000 and B = 20,480. <b>B passes A on day 11</b> and stays ahead for good.</li>
        </ol>
        <p><b>Watch out:</b> "exponential is always bigger" is not true at the start. Early on, the linear one can be far ahead. Exponential wins in the <b>long run</b>.</p>`,
      quiz: [
        { q: 'Deer counts for years 0 to 3: 100, 120, 144, 173. Which model fits best?', c: ['Exponential — it grows by about 20% each year', 'Linear — it grows by 20 each year', 'Linear — the years go up by 1', 'Neither — the numbers are not perfect'], why: 'Jumps are 20, 24, 29, so not linear. Each ratio is about 1.2, so exponential.' },
        { q: 'A plant\'s height for weeks 0 to 3: 12, 15.1, 17.9, 21.0 cm. Which model fits best?', c: ['Linear — it grows about 3 cm each week', 'Exponential — it multiplies by 3 each week', 'Exponential — it keeps growing', 'Neither — the jumps are not exactly equal'], why: 'Jumps are 3.1, 2.8, 3.1, all close to 3. Real data is close, not perfect.' },
        { q: 'In the long run, what happens with exponential growth vs. linear growth?', c: ['The exponential one always passes the linear one', 'The linear one stays ahead if it starts higher', 'They stay the same distance apart', 'They grow at the same speed'], why: 'Multiplying beats adding in the end, no matter how far behind exponential starts.' },
        { q: 'Video A starts with 1,000 views and gains 1,000 a day. Video B starts with 10 and doubles daily. On which day does B first pass A?', c: ['Day 11', 'Day 7', 'Day 10', 'Never — A starts too far ahead'], why: 'Day 10: A = 11,000, B = 10,240. Day 11: A = 12,000, B = 20,480.' },
        { q: 'Which situation is best modeled by an exponential function?', c: ['A rumor where each person tells 2 new people every hour', 'A pool filling at 50 gallons per minute', 'A taxi charging $3 per mile', 'Saving $10 every week in a jar'], why: 'The number of people telling it multiplies each hour. The others add the same amount.' },
        { q: 'Which situation is best modeled by a linear function?', c: ['A candle that burns down 2 cm every hour', 'Bacteria that double every 20 minutes', 'A phone that loses 15% of its value each year', 'A ball that bounces to half its last height'], why: 'Losing the same 2 cm each hour is a constant change. The others multiply.' },
        { q: 'Table — x: 0, 1, 2, 3 and y: 64, 48, 36, 27. Which model fits?', c: ['Exponential decay — it multiplies by 0.75 each step', 'Linear — it drops by 16 each step', 'Exponential growth — it multiplies by 4/3', 'Linear — it drops by 12 each step'], why: 'Drops are 16, 12, 9, not equal. Ratios: 48 ÷ 64 = 0.75 every time.' },
        { q: 'Warm water in a freezer: 60, 48, 38.4, 30.7 °C at minutes 0 to 3. Which model fits best?', c: ['C = 60 · 0.8ᵗ', 'C = 60 − 12t', 'C = 60 · 0.2ᵗ', 'C = 48 · 0.8ᵗ'], why: '48 ÷ 60 = 0.8 and 38.4 ÷ 48 = 0.8. Start at 60.' },
        { q: 'At x = 10, which is bigger: f(x) = 100x or g(x) = 2ˣ?', c: ['g(x), with 1,024', 'f(x), with 1,000', 'g(x), with 20', 'They are equal'], why: 'f(10) = 100 · 10 = 1,000. g(10) = 2¹⁰ = 1,024. Just barely, g wins.' },
        { q: 'At x = 5, which is bigger: f(x) = 100x or g(x) = 2ˣ?', c: ['f(x), because 500 > 32', 'g(x), because 2⁵ = 1,000', 'g(x), because exponential is always bigger', 'They are equal at x = 5'], why: 'f(5) = 500 and g(5) = 2⁵ = 32. Exponential wins later, not always.' },
        { q: 'A town had 5,000, 5,250, 5,513, and 5,788 people in years 0 to 3. Which model fits best?', c: ['P = 5000 · 1.05ᵗ', 'P = 5000 + 250t', 'P = 5000 · 0.05ᵗ', 'P = 5000 · 1.5ᵗ'], why: 'Jumps grow (250, 263, 275), so not linear. 5,000 × 1.05 = 5,250, and so on.' },
        { q: 'A ball\'s bounce heights are 200, 140, 98, and 68.6 cm. Which model fits?', c: ['Exponential decay with factor 0.7', 'Linear, dropping 60 cm each bounce', 'Exponential growth with factor 1.4', 'Exponential decay with factor 0.3'], why: '140 ÷ 200 = 0.7 and 98 ÷ 140 = 0.7. Drops are 60, 42, 29.4, not equal.' },
      ],
      realLife: {
        text: `<p>Picking the right model matters, because the two kinds of growth give very different predictions.</p>
          <ul><li><b>Disease spread:</b> early on, the number of sick people can double every few days. Health workers use exponential models to plan hospital beds.</li>
          <li><b>Followers:</b> 50 new followers a day gives 1,500 in 30 days. Starting with 1 and doubling daily gives over a billion.</li>
          <li><b>Plant height</b> or a <b>candle burning down</b> changes by about the same amount each day, so a linear model fits.</li></ul>
          <p>Always ask: same jump, or same multiplier?</p>`,
        prompt: 'Would you rather get 50 new followers every day, or start with 1 follower that doubles every day, for a 30-day challenge? Explain your choice using what you learned.',
      },
    },
  ],
};
