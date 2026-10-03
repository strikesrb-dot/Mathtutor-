// Algebra 1 — Unit: Functions & Graphs
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy channel).

export default {
  subject: 'algebra',
  unit: 'Functions & Graphs',
  lessons: [
    {
      key: 'alg-1',
      title: 'What is a function?',
      videos: [
        { id: 'kvGsIo1TmsM', title: 'What is a function?' },
      ],
      learn: `
        <p>A <b>function</b> (a rule that gives exactly one answer for each thing you put in) works like a vending machine. Press <b>B4</b> and you get the same snack every time. You never press B4 and get two different snacks.</p>
        <p>The thing you put in is the <b>input</b> (usually called <i>x</i>). What comes out is the <b>output</b> (usually called <i>y</i>).</p>
        <p><b>The one test:</b> if one input ever gives two different outputs, it's <u>not</u> a function.</p>
        <p>Two different inputs giving the <i>same</i> output is fine. Lots of buttons can give you water.</p>
        <p>On a graph, use the <b>vertical line test</b> (slide a straight up-and-down line across the graph). If it ever touches the graph in two places, it's not a function.</p>`,
      quiz: [
        { q: 'Which set of pairs is a function?', c: ['{(1,5), (2,5), (3,5)}', '{(1,2), (1,3), (2,4)}', '{(4,1), (4,2)}', '{(0,0), (0,1), (1,1)}'], why: 'Each input (1, 2, 3) shows up only once. Repeating the output 5 is allowed.' },
        { q: 'In a function, each input has ___ output.', c: ['exactly one', 'at least two', 'no', 'any number of'], why: 'That is the whole definition: one input → one output.' },
        { q: 'Is {(2,3), (3,2), (4,3)} a function?', c: ['Yes — no input repeats', 'No — the output 3 repeats', 'No — 2 and 3 are swapped', 'Only if you graph it'], why: 'Inputs are 2, 3, 4, all different. Outputs repeating is fine.' },
        { q: 'A graph passes the vertical line test when…', c: ['every vertical line touches it at most once', 'every horizontal line touches it once', 'it goes through the origin', 'it is a straight line'], why: 'Touching twice would mean one x has two y-values.' },
        { q: 'Is a circle drawn on a graph a function?', c: ['No — a vertical line through the middle hits it twice', 'Yes — it is a closed shape', 'Yes — circles are always functions', 'Only if it is small'], why: 'One x-value in the middle has a top point and a bottom point.' },
        { q: 'Table — x: 1, 2, 2, 3 and y: 4, 5, 6, 7. Is this a function?', c: ['No — x = 2 gives both 5 and 6', 'Yes — all y-values are different', 'Yes — it has four rows', 'No — it skips x = 0'], why: 'The input 2 has two different outputs.' },
        { q: 'The input of a function is usually the…', c: ['x-value', 'y-value', 'slope', 'answer'], why: 'x goes in, y comes out.' },
        { q: 'Which of these is a function?', c: ['Each student → their birthday', 'Each birthday → the students born that day', 'Each person → all their phone numbers', 'Each city → all the streets in it'], why: 'Every student has exactly one birthday. The others can have many outputs.' },
        { q: 'Which graph is NOT a function?', c: ['A vertical line, like x = 3', 'A horizontal line, like y = 3', 'A slanted line, like y = 2x', 'A U-shaped curve, like y = x²'], why: 'A vertical line has one x-value with infinitely many y-values.' },
        { q: 'Is {(−1,4), (0,4), (1,4)} a function?', c: ['Yes', 'No — the outputs are all the same', 'No — it has a negative number', 'Not enough information'], why: 'Inputs −1, 0, 1 are all different. Same outputs are allowed.' },
        { q: 'In a mapping, input 5 has arrows to both 7 and 9. This is…', c: ['not a function', 'a function', 'a function only if 7 < 9', 'a vertical line'], why: 'One input pointing to two outputs breaks the rule.' },
        { q: 'The output of a function is usually the…', c: ['y-value', 'x-value', 'input', 'domain'], why: 'Output = y.' },
      ],
      realLife: {
        text: `<p>Functions are everywhere. A rule counts as a function whenever the <i>same input always gives the same result</i>.</p>
          <ul><li><b>Vending machine:</b> button code → snack</li>
          <li><b>Airport:</b> a flight number (at one moment) → its gate</li>
          <li><b>Phone plan:</b> minutes used → monthly cost</li>
          <li><b>Games:</b> level number → XP needed to beat it</li></ul>`,
        prompt: 'Name one thing in YOUR life that works like a function (one input → one output). What is the input, and what is the output?',
      },
      practice: 'isFunction',
    },
    {
      key: 'alg-2',
      title: 'Function notation: f(x)',
      videos: [
        { id: 'EmTvdKkAUtE', title: 'Evaluating with function notation' },
      ],
      learn: `
        <p><b>f(x)</b> is read <b>"f of x."</b> It does <u>not</u> mean f times x. It's just a name for the rule.</p>
        <p><b>f(3)</b> means: <i>put 3 in wherever you see x</i>, then work it out.</p>
        <p>Example: if <b>f(x) = 2x + 1</b>, then f(3) = 2·3 + 1 = <b>7</b>.</p>
        <p>Going backwards: <b>f(x) = 11</b> asks <i>"which input gives 11?"</i> Solve 2x + 1 = 11, so x = 5.</p>
        <p>Watch out for negatives. Put them in parentheses: f(−2) = 2(−2) + 1 = −3.</p>`,
      quiz: [
        { q: 'If f(x) = 2x + 1, what is f(3)?', c: ['7', '6', '5', '9'], why: '2·3 + 1 = 6 + 1 = 7.' },
        { q: 'If f(x) = x − 4, what is f(10)?', c: ['6', '14', '−6', '40'], why: '10 − 4 = 6.' },
        { q: 'If g(x) = 3x, what is g(−2)?', c: ['−6', '6', '1', '−5'], why: '3 · (−2) = −6.' },
        { q: 'If f(x) = x², what is f(5)?', c: ['25', '10', '7', '52'], why: '5² = 5 · 5 = 25.' },
        { q: 'How do you read "f(x)"?', c: ['"f of x"', '"f times x"', '"f plus x"', '"f divided by x"'], why: 'The parentheses mean "the input is x," not multiplication.' },
        { q: 'If f(x) = 5x − 2, what is f(0)?', c: ['−2', '0', '3', '5'], why: '5·0 − 2 = 0 − 2 = −2.' },
        { q: 'If h(x) = x/2 + 3, what is h(8)?', c: ['7', '4', '11', '5'], why: '8 ÷ 2 = 4, then 4 + 3 = 7.' },
        { q: 'If f(x) = 2x + 1, which input makes f(x) = 11?', c: ['x = 5', 'x = 23', 'x = 6', 'x = 10'], why: '2x + 1 = 11 → 2x = 10 → x = 5.' },
        { q: 'If f(x) = −x + 4, what is f(−1)?', c: ['5', '3', '−5', '−3'], why: '−(−1) + 4 = 1 + 4 = 5.' },
        { q: 'If f(2) = 9, which point is on the graph of f?', c: ['(2, 9)', '(9, 2)', '(2, 2)', '(0, 9)'], why: 'Input first, output second: (x, f(x)) = (2, 9).' },
        { q: 'If f(x) = x² − 1, what is f(−3)?', c: ['8', '−10', '−8', '5'], why: '(−3)² = 9, then 9 − 1 = 8.' },
        { q: 'C(h) = 15h is the cost in dollars for h hours of tutoring. What is C(4)?', c: ['$60 — the cost of 4 hours', '$19 — the cost of 4 hours', '$60 — the cost of 15 hours', '$4 — the cost of 15 hours'], why: '15 · 4 = 60, and h = 4 means 4 hours.' },
      ],
      realLife: {
        text: `<p>Ride apps use function notation behind the scenes. Say a ride costs <b>C(m) = 2m + 3</b> dollars for <b>m</b> miles.</p>
          <p>Then <b>C(5) = 2·5 + 3 = $13</b>. In plain words, a 5-mile ride costs $13.</p>
          <p>The notation lets you ask "what's the cost for this many miles?" fast.</p>`,
        prompt: 'A phone game gives you P(m) = 10m points for playing m minutes. What is P(6), and what does it mean in plain words?',
      },
      practice: 'evaluate',
    },
    {
      key: 'alg-3',
      title: 'Domain and range',
      videos: [
        { id: '-DTMakGDZAw', title: 'What is the domain of a function?' },
        { id: '96uHMcHWD2E', title: 'What is the range of a function?' },
      ],
      learn: `
        <p><b>Domain</b> = all the inputs you're allowed to use (the x-values).</p>
        <p><b>Range</b> = all the outputs you actually get (the y-values).</p>
        <p><b>From a list of pairs:</b> collect the x's for the domain and the y's for the range. Don't write repeats twice.</p>
        <p>Example: {(1,4), (2,5), (3,4)} has domain {1, 2, 3} and range {4, 5}.</p>
        <p><b>Numbers you can't use:</b> you can't divide by 0, so 1/x can't take x = 0. In real life, you can't buy −2 tickets.</p>`,
      quiz: [
        { q: 'What is the domain of {(1,4), (2,5), (3,6)}?', c: ['{1, 2, 3}', '{4, 5, 6}', '{1, 2, 3, 4, 5, 6}', '{3}'], why: 'Domain = the x-values.' },
        { q: 'What is the range of {(1,4), (2,5), (3,6)}?', c: ['{4, 5, 6}', '{1, 2, 3}', '{1, 6}', '{5}'], why: 'Range = the y-values.' },
        { q: 'What is the range of {(−2,3), (0,3), (5,3)}?', c: ['{3}', '{−2, 0, 5}', '{3, 3, 3}', '{−2, 5}'], why: 'The only output is 3. Write it once.' },
        { q: 'The domain is the set of all…', c: ['inputs (x-values)', 'outputs (y-values)', 'slopes', 'points where the graph crosses zero'], why: 'Domain = what you put in.' },
        { q: 'The range is the set of all…', c: ['outputs (y-values)', 'inputs (x-values)', 'x-intercepts', 'whole numbers'], why: 'Range = what comes out.' },
        { q: 'For f(x) = 1/x, which number is NOT in the domain?', c: ['0', '1', '−1', '100'], why: '1/0 means dividing by zero, which has no answer.' },
        { q: 'T(n) = 12n is the cost of n movie tickets. What makes sense for the domain?', c: ['Whole numbers: 0, 1, 2, 3, …', 'All numbers, including negatives', 'Only fractions', 'Only the number 12'], why: 'You can only buy whole tickets, and never a negative number of them.' },
        { q: 'What is the domain of {(0,−1), (2,−1), (7,3)}?', c: ['{0, 2, 7}', '{−1, 3}', '{0, −1, 2, 7, 3}', '{7}'], why: 'List the x-values: 0, 2, 7.' },
        { q: 'What is the range of f(x) = x²?', c: ['All numbers 0 or greater', 'All numbers', 'Only positive whole numbers', 'All numbers less than 0'], why: 'Squaring never gives a negative. The smallest output is 0.' },
        { q: 'A graph is a line segment from x = −2 to x = 4. What is its domain?', c: ['−2 ≤ x ≤ 4', 'x ≥ 4', 'All numbers', '−4 ≤ x ≤ 2'], why: 'The graph only exists between x = −2 and x = 4.' },
        { q: 'What is the domain of f(x) = √x (square root)?', c: ['x ≥ 0', 'x ≤ 0', 'All numbers', 'x > 1'], why: 'In Algebra 1, you can\'t take the square root of a negative number.' },
        { q: 'What is the range of {(1,−5), (2,0), (3,5)}?', c: ['{−5, 0, 5}', '{1, 2, 3}', '{0, 5}', '{−5, 5}'], why: 'The y-values are −5, 0, 5.' },
      ],
      realLife: {
        text: `<p>Domain and range are just the "allowed inputs" and "possible results" of real situations.</p>
          <ul><li><b>Elevator</b> in a 20-floor building: floors 1 to 20 are the only inputs that make sense.</li>
          <li><b>Car trip:</b> time runs from the start to the end of the trip (domain), and speed runs from 0 up to the fastest you drove (range).</li></ul>`,
        prompt: 'A pizza shop charges $3 per slice, and you can buy up to 8 slices. What is the domain (number of slices)? What is the biggest number in the range (cost)?',
      },
      practice: 'domainRange',
    },
    {
      key: 'alg-4',
      title: 'Reading functions from graphs',
      videos: [
        { id: 'jQ-fS2lsslU', title: 'Functions as graphs' },
        { id: 'uglmkcGWmx4', title: 'Recognizing features of functions' },
      ],
      learn: `
        <p>A function's graph is every point <b>(x, f(x))</b> drawn on a grid.</p>
        <p><b>To find f(2):</b> go to x = 2 on the bottom axis, move straight up or down to the graph, and read the height (y).</p>
        <p><b>To solve f(x) = 5:</b> find where the graph is at height 5, then read the x-value below it.</p>
        <p><b>Increasing</b> = the graph goes up as you move left to right. <b>Decreasing</b> = it goes down.</p>
        <p>The <b>maximum</b> is the highest point and the <b>minimum</b> is the lowest point.</p>
        <p>Where the graph crosses the x-axis, y = 0.</p>`,
      quiz: [
        { q: 'The point (3, 7) is on the graph of f. That means…', c: ['f(3) = 7', 'f(7) = 3', 'f(3) = 3', 'f(10) = 0'], why: '(x, f(x)): an input of 3 gives an output of 7.' },
        { q: 'If f(−1) = 4, which point is on the graph?', c: ['(−1, 4)', '(4, −1)', '(−1, −4)', '(1, 4)'], why: 'Input −1 goes first, output 4 goes second.' },
        { q: 'Table — x: 0, 1, 2, 3 and f(x): 5, 3, 1, −1. What is f(2)?', c: ['1', '2', '3', '−1'], why: 'Find x = 2 in the table. Its output is 1.' },
        { q: 'Same table (x: 0, 1, 2, 3 → f(x): 5, 3, 1, −1). Which x gives f(x) = 3?', c: ['x = 1', 'x = 3', 'x = 0', 'x = 2'], why: 'The output 3 lines up with x = 1.' },
        { q: 'Same table (f(x): 5, 3, 1, −1). Is f increasing or decreasing?', c: ['Decreasing', 'Increasing', 'Neither', 'Both'], why: 'As x goes up, the outputs go down.' },
        { q: 'A graph crosses the y-axis at (0, −2). What is f(0)?', c: ['−2', '0', '2', 'Can\'t tell'], why: 'The point (0, −2) means f(0) = −2.' },
        { q: 'A graph that rises as you move left to right is…', c: ['increasing', 'decreasing', 'constant', 'undefined'], why: 'Going up = increasing.' },
        { q: 'The highest point on a graph is called the…', c: ['maximum', 'minimum', 'intercept', 'domain'], why: 'Max = top. Min = bottom.' },
        { q: 'A temperature graph peaks at (3 pm, 88°F). What does that tell you?', c: ['The hottest it got was 88°F, at 3 pm', 'It was 3°F at 88 pm', 'It was coldest at 3 pm', 'It was 88°F all day'], why: 'The peak is the maximum: the highest temperature and when it happened.' },
        { q: 'Where a graph crosses the x-axis, the y-value is…', c: ['0', '1', 'the same as x', 'undefined'], why: 'Every point on the x-axis has height 0.' },
        { q: 'A graph goes through (1, 2), (2, 4), and (3, 6). Which rule fits?', c: ['f(x) = 2x', 'f(x) = x + 2', 'f(x) = x²', 'f(x) = x + 1'], why: 'Each output is double the input.' },
        { q: 'A distance-vs-time graph is flat from 2 pm to 3 pm. What happened?', c: ['You stopped — distance didn\'t change', 'You went really fast', 'You went backwards', 'The clock stopped'], why: 'Flat means no change in distance, so you weren\'t moving.' },
      ],
      realLife: {
        text: `<p>Graphs tell stories. Your <b>phone battery</b> over a day:</p>
          <ul><li>It goes <b>down</b> while you use it (decreasing).</li>
          <li>It goes <b>up</b> while it charges (increasing).</li>
          <li>It stays <b>flat</b> when it's full and still plugged in.</li></ul>
          <p>Doctors read heart-rate graphs, and pilots read altitude graphs, in exactly this way.</p>`,
        prompt: 'Think about your phone battery from morning to night. Describe when its graph would go down, when it would go up, and when it would be flat.',
      },
      practice: 'readTable',
    },
    {
      key: 'alg-5',
      title: 'Slope',
      videos: [
        { id: '6_9xNMtwnfs', title: 'Intuitive understanding of slope' },
        { id: 'EQoNfxToez0', title: 'Positive and negative slope' },
        { id: 'R948Tsyq4vA', title: 'Finding the slope of a line from its graph' },
      ],
      learn: `
        <p><b>Slope</b> = how steep a line is = <b>rise ÷ run</b> (how far up, divided by how far across).</p>
        <p>From two points: <b>slope = (y₂ − y₁) ÷ (x₂ − x₁)</b>.</p>
        <p>Example: (1, 2) and (3, 6) give (6 − 2) ÷ (3 − 1) = 4 ÷ 2 = <b>2</b>.</p>
        <ul><li><b>Positive</b> slope: the line goes uphill (left to right).</li>
        <li><b>Negative</b> slope: the line goes downhill.</li>
        <li><b>Zero</b> slope: the line is flat (horizontal).</li>
        <li><b>Undefined</b> slope: the line goes straight up (vertical), because you'd divide by 0.</li></ul>
        <p>A bigger number (ignoring the minus sign) means a steeper line.</p>`,
      quiz: [
        { q: 'What is the slope between (1, 2) and (3, 6)?', c: ['2', '4', '1/2', '3'], why: '(6 − 2) ÷ (3 − 1) = 4 ÷ 2 = 2.' },
        { q: 'What is the slope between (0, 0) and (4, 2)?', c: ['1/2', '2', '4', '6'], why: '(2 − 0) ÷ (4 − 0) = 2 ÷ 4 = 1/2.' },
        { q: 'What is the slope between (2, 5) and (4, 1)?', c: ['−2', '2', '−1/2', '3'], why: '(1 − 5) ÷ (4 − 2) = −4 ÷ 2 = −2.' },
        { q: 'What is the slope between (−1, 3) and (3, 3)?', c: ['0', 'undefined', '1', '3'], why: '(3 − 3) ÷ (3 − (−1)) = 0 ÷ 4 = 0. The line is flat.' },
        { q: 'A line goes downhill from left to right. Its slope is…', c: ['negative', 'positive', 'zero', 'undefined'], why: 'Downhill = negative.' },
        { q: 'Slope = rise over…', c: ['run', 'rate', 'range', 'root'], why: 'Rise ÷ run.' },
        { q: 'What is the slope of a horizontal line?', c: ['0', 'undefined', '1', '−1'], why: 'There is no rise, so 0 ÷ run = 0.' },
        { q: 'What is the slope of a vertical line?', c: ['undefined', '0', '1', 'infinite and positive'], why: 'There is no run, and you can\'t divide by 0.' },
        { q: 'What is the slope between (0, −4) and (2, 2)?', c: ['3', '−3', '1', '6'], why: '(2 − (−4)) ÷ (2 − 0) = 6 ÷ 2 = 3.' },
        { q: 'Which line is steeper?', c: ['A line with slope 5', 'A line with slope 2', 'They are the same', 'A line with slope 0'], why: 'The bigger number means steeper.' },
        { q: 'A ramp rises 1 foot over a 12-foot run. What is its slope?', c: ['1/12', '12', '13', '11'], why: 'Rise ÷ run = 1 ÷ 12.' },
        { q: 'What is the slope between (−2, −1) and (2, 7)?', c: ['2', '8', '1/2', '−2'], why: '(7 − (−1)) ÷ (2 − (−2)) = 8 ÷ 4 = 2.' },
      ],
      realLife: {
        text: `<p>Slope is steepness, and the world is full of it.</p>
          <ul><li><b>Wheelchair ramps:</b> the rule is a slope no steeper than 1/12 (1 foot up for every 12 feet across).</li>
          <li><b>Road signs:</b> a "6% grade" means the road rises 6 feet for every 100 feet you move forward (measured flat).</li>
          <li><b>Airplanes:</b> a jet climbing out of Newark follows a slope, gaining height as it moves forward.</li></ul>`,
        prompt: 'A skateboard ramp goes up 3 feet over 6 feet. What is its slope? Would a ramp with slope 2 be easier or harder to ride up, and why?',
      },
      practice: 'slope',
    },
    {
      key: 'alg-6',
      title: 'Rate of change and intercepts',
      videos: [
        { id: 'Iqws-qzyZwc', title: 'Slope and rate of change' },
        { id: 'CGZZINHT0I8', title: 'Finding intercepts from a table' },
      ],
      learn: `
        <p><b>Rate of change</b> = slope with real units. It tells you how much y changes for every 1 x: dollars <i>per</i> hour, miles <i>per</i> hour.</p>
        <p>Example: you earn $45 in 3 hours and $75 in 5 hours. (75 − 45) ÷ (5 − 3) = <b>$15 per hour</b>.</p>
        <p><b>y-intercept</b> = where the line crosses the y-axis. Here x = 0, and it's usually the <i>starting amount</i>.</p>
        <p><b>x-intercept</b> = where the line crosses the x-axis. Here y = 0.</p>
        <p><b>From an equation:</b> put x = 0 to find the y-intercept, and put y = 0 to find the x-intercept.</p>`,
      quiz: [
        { q: 'You earn $45 after 3 hours and $75 after 5 hours. What is the rate?', c: ['$15 per hour', '$30 per hour', '$25 per hour', '$10 per hour'], why: '(75 − 45) ÷ (5 − 3) = 30 ÷ 2 = 15.' },
        { q: 'What is the y-intercept of y = 2x + 6?', c: ['(0, 6)', '(6, 0)', '(0, 2)', '(−3, 0)'], why: 'Put x = 0: y = 6.' },
        { q: 'What is the x-intercept of y = 2x + 6?', c: ['(−3, 0)', '(3, 0)', '(0, 6)', '(6, 0)'], why: 'Put y = 0: 0 = 2x + 6 → 2x = −6 → x = −3.' },
        { q: 'What is the y-intercept of 3x + 2y = 12?', c: ['(0, 6)', '(0, 4)', '(4, 0)', '(0, 12)'], why: 'Put x = 0: 2y = 12 → y = 6.' },
        { q: 'What is the x-intercept of 3x + 2y = 12?', c: ['(4, 0)', '(6, 0)', '(0, 6)', '(12, 0)'], why: 'Put y = 0: 3x = 12 → x = 4.' },
        { q: 'The y-intercept is the point where…', c: ['x = 0', 'y = 0', 'x = y', 'the slope is 0'], why: 'The y-axis is the line where x = 0.' },
        { q: 'Table — x: 0, 1, 2 and y: 10, 13, 16. What is the y-intercept?', c: ['10', '13', '3', '0'], why: 'When x = 0, y = 10.' },
        { q: 'Same table (x: 0, 1, 2 → y: 10, 13, 16). What is the rate of change?', c: ['3', '10', '13', '1'], why: 'y goes up by 3 each time x goes up by 1.' },
        { q: 'A car drives 120 miles in 2 hours at a steady speed. What is the rate?', c: ['60 miles per hour', '240 miles per hour', '120 miles per hour', '30 miles per hour'], why: '120 ÷ 2 = 60.' },
        { q: 'A plant is 4 cm tall at week 0 and 8 cm at week 2. What is its growth rate?', c: ['2 cm per week', '4 cm per week', '8 cm per week', '1 cm per week'], why: '(8 − 4) ÷ (2 − 0) = 4 ÷ 2 = 2.' },
        { q: 'A tank starts full and drains at a steady rate. On the graph, what does the x-intercept mean?', c: ['The time when the tank is empty', 'How full it started', 'How fast it drains', 'The tank\'s size'], why: 'At the x-intercept, the amount left (y) is 0.' },
        { q: 'What is the x-intercept of y = −4x + 8?', c: ['(2, 0)', '(−2, 0)', '(8, 0)', '(0, 8)'], why: '0 = −4x + 8 → 4x = 8 → x = 2.' },
      ],
      realLife: {
        text: `<p>A gym charges a <b>$20 sign-up fee</b> plus <b>$10 a month</b>.</p>
          <ul><li>The <b>y-intercept</b> is $20, what you pay before any months go by.</li>
          <li>The <b>rate of change</b> is $10 per month.</li></ul>
          <p>Almost every bill, paycheck, and countdown works like this: a starting amount plus a steady rate.</p>`,
        prompt: 'Your phone is at 100% and drops 10% every hour you play games. What is the starting value (y-intercept), the rate of change, and after how many hours does it hit 0% (x-intercept)?',
      },
      practice: 'intercepts',
    },
    {
      key: 'alg-7',
      title: 'Slope-intercept form: y = mx + b',
      videos: [
        { id: 'IL3UCuXrUzE', title: 'Slope-intercept form' },
        { id: 'qgsNNqmlLoA', title: 'Worked examples: slope-intercept intro' },
        { id: 'uk7gS3cZVp4', title: 'Graph from slope-intercept equation' },
      ],
      learn: `
        <p><b>y = mx + b</b> is the most useful way to write a line.</p>
        <ul><li><b>m</b> = the slope (how steep it is)</li>
        <li><b>b</b> = the y-intercept (where it starts on the y-axis)</li></ul>
        <p>Example: y = 3x − 2 has slope 3 and y-intercept −2.</p>
        <p><b>To graph it:</b> put a dot at (0, b). From there, use the slope as rise/run to find the next dot. For a slope of 2/3, that means up 2 and right 3.</p>
        <p><b>To rewrite</b> 2x + y = 5: subtract 2x from both sides to get y = −2x + 5.</p>`,
      quiz: [
        { q: 'What is the slope of y = 3x − 2?', c: ['3', '−2', '2', '−3'], why: 'm is the number in front of x.' },
        { q: 'What is the y-intercept of y = 3x − 2?', c: ['−2', '3', '2', '0'], why: 'b is the number added on, here −2.' },
        { q: 'Which equation has slope 4 and y-intercept 1?', c: ['y = 4x + 1', 'y = x + 4', 'y = 4x − 1', 'y = 1x + 1'], why: 'm = 4 and b = 1.' },
        { q: 'What is the slope of y = −x + 7?', c: ['−1', '7', '1', '0'], why: '−x means −1·x.' },
        { q: 'What is the y-intercept of y = ½x?', c: ['0', '½', '1', '2'], why: 'Nothing is added, so b = 0.' },
        { q: 'Rewrite 2x + y = 5 in slope-intercept form.', c: ['y = −2x + 5', 'y = 2x + 5', 'y = 5x + 2', 'y = −5x + 2'], why: 'Subtract 2x from both sides.' },
        { q: 'A line has slope 2 and passes through (0, −3). What is its equation?', c: ['y = 2x − 3', 'y = −3x + 2', 'y = 2x + 3', 'y = 3x − 2'], why: '(0, −3) is the y-intercept, so b = −3.' },
        { q: 'Which line is steeper?', c: ['y = 5x + 1', 'y = 2x + 9', 'They are the same', 'You can\'t tell'], why: 'Compare the slopes: 5 is bigger than 2.' },
        { q: 'To graph y = 2x + 1, your first dot goes at…', c: ['(0, 1)', '(1, 0)', '(0, 2)', '(2, 1)'], why: 'Start at the y-intercept (0, b).' },
        { q: 'From your first dot, a slope of 2/3 means you move…', c: ['up 2, right 3', 'up 3, right 2', 'right 2, down 3', 'up 2, left 3'], why: 'Rise 2 over run 3.' },
        { q: 'Rewrite 4x + 2y = 8 in slope-intercept form.', c: ['y = −2x + 4', 'y = 2x + 4', 'y = −4x + 8', 'y = −2x + 8'], why: '2y = −4x + 8. Then divide everything by 2.' },
        { q: 'A line passes through (0, 5) and (2, 9). What is its equation?', c: ['y = 2x + 5', 'y = 4x + 5', 'y = 2x + 9', 'y = 5x + 2'], why: 'Slope = (9 − 5) ÷ 2 = 2, and b = 5.' },
      ],
      realLife: {
        text: `<p>A taxi charges <b>$3 to get in</b> plus <b>$2 per mile</b>, so <b>y = 2x + 3</b>.</p>
          <ul><li>m = 2 means each mile adds $2.</li>
          <li>b = 3 means you pay $3 even if you go nowhere.</li></ul>
          <p>Ten miles costs 2·10 + 3 = $23. Once you see y = mx + b in a story, you can predict anything.</p>`,
        prompt: 'A streaming service costs $5 to join plus $8 per month. Write it as y = mx + b, then find the total cost after 6 months.',
      },
      practice: 'slopeIntercept',
    },
    {
      key: 'alg-8',
      title: 'Linear models in real life',
      videos: [
        { id: 'nc9XHXlxSyM', title: 'Slope and intercept meaning from a table' },
      ],
      learn: `
        <p>A <b>linear model</b> (a y = mx + b equation that describes a real situation) lets you predict what happens.</p>
        <p><b>Step 1:</b> find the starting amount. That's <b>b</b>.</p>
        <p><b>Step 2:</b> find how much it changes each time. That's <b>m</b>.</p>
        <p><b>Step 3:</b> plug in numbers to predict.</p>
        <p>Always say what m and b mean <i>with units</i>, like "$40 per hour" or "60 cm at the start."</p>
        <p>To find "when does it hit zero?" or "when are two plans equal?", set the equations equal and solve.</p>`,
      quiz: [
        { q: 'A plumber charges a $50 visit fee plus $40 per hour. Which equation fits?', c: ['y = 40x + 50', 'y = 50x + 40', 'y = 90x', 'y = 40x − 50'], why: 'The rate (m) is 40 per hour and the start (b) is 50.' },
        { q: 'In y = 40x + 50 for the plumber, what does 40 mean?', c: ['$40 for each hour of work', 'The visit fee', 'The total bill', '40 hours of work'], why: 'The slope is the rate: dollars per hour.' },
        { q: 'Using y = 40x + 50, what does a 3-hour job cost?', c: ['$170', '$120', '$150', '$93'], why: '40·3 + 50 = 120 + 50 = 170.' },
        { q: 'You start with $200 and save $25 every week. How much do you have after 8 weeks?', c: ['$400', '$225', '$600', '$1,800'], why: '200 + 25·8 = 200 + 200 = 400.' },
        { q: 'A candle\'s height is y = −3x + 60 cm after x hours. What does 60 mean?', c: ['It started 60 cm tall', 'It burns 60 cm per hour', 'It lasts 60 hours', 'It\'s 60 cm at the end'], why: 'b is the value when x = 0, at the start.' },
        { q: 'Using y = −3x + 60, when does the candle burn out?', c: ['After 20 hours', 'After 60 hours', 'After 3 hours', 'After 57 hours'], why: '0 = −3x + 60 → 3x = 60 → x = 20.' },
        { q: 'Table — hours: 0, 2, 4 and miles: 10, 40, 70. Which equation fits?', c: ['y = 15x + 10', 'y = 30x + 10', 'y = 10x + 15', 'y = 15x'], why: 'Rate = 30 miles ÷ 2 hours = 15. The start is 10.' },
        { q: 'Plan A costs $30 + $5 per GB. Plan B costs $50 flat. Which is cheaper for 2 GB?', c: ['Plan A ($40)', 'Plan B ($50)', 'They cost the same', 'Plan A ($35)'], why: 'Plan A: 30 + 5·2 = 40, which is less than 50.' },
        { q: 'Same plans (A: $30 + $5 per GB, B: $50 flat). At how many GB do they cost the same?', c: ['4 GB', '10 GB', '5 GB', '20 GB'], why: '30 + 5x = 50 → 5x = 20 → x = 4.' },
        { q: 'A gym costs y = 10x + 20, where x is the number of months. What does the slope mean?', c: ['$10 each month', 'A $20 sign-up fee', '10 months', 'The total cost'], why: 'The slope is the rate: dollars per month.' },
        { q: 'A tank has 15 gallons and fills at 6 gallons per minute. How much is in it after 5 minutes?', c: ['45 gallons', '30 gallons', '21 gallons', '90 gallons'], why: '15 + 6·5 = 15 + 30 = 45.' },
        { q: 'An ice-cream truck\'s profit is P = 2x − 40, where x is the number of cones sold. How many cones does it need to sell to break even (P = 0)?', c: ['20', '40', '80', '2'], why: '0 = 2x − 40 → 2x = 40 → x = 20.' },
      ],
      realLife: {
        text: `<p>Adults use linear models all the time, often without writing them down:</p>
          <ul><li>"If I save $50 a week, when can I afford that $600 phone?"</li>
          <li>"Is the $30 + $5/GB plan or the $50 flat plan better for me?"</li>
          <li>"I get paid $18 an hour. How many hours do I need to make $500?"</li></ul>
          <p>Answering those questions is just y = mx + b.</p>`,
        prompt: 'Pick something real (saving money, a phone plan, a job that pays per hour). Write your own y = mx + b equation for it, and explain what m and b mean.',
      },
      practice: 'models',
    },
  ],
};
