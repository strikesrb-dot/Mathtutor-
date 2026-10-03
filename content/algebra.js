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
        { q: 'Which set of pairs is NOT a function?', c: ['{(3,1), (5,2), (3,4)}', '{(1,3), (2,5), (4,3)}', '{(0,2), (1,2), (2,2)}', '{(−1,0), (0,1), (1,2)}'], why: 'The input 3 shows up twice, with two different outputs, 1 and 4.' },
        { q: 'Sam says {(2,6), (4,6), (6,6)} is not a function because 6 repeats. What was his mistake?', c: ['Outputs may repeat; only an input with two outputs breaks the rule', 'He should have checked if the inputs go in order', 'Nothing — a repeated number always breaks the rule', 'Functions must include a negative number'], why: 'Inputs 2, 4, and 6 are all different. Repeating an output is allowed.' },
        { q: 'Table — x: 1, 2, 3, 4 and y: 10, 10, 20, 20. Is this a function?', c: ['Yes — each x has only one y', 'No — y = 10 shows up twice', 'No — y = 20 shows up twice', 'No — the y-values must all be different'], why: 'Every input has exactly one output. Outputs repeating is fine.' },
        { q: 'Which rule is NOT a function?', c: ['Each person → all of their cousins', 'Each person → their height today', 'Each car → its license plate number', 'Each book → its number of pages'], why: 'One person can have many cousins, so one input could give many outputs.' },
        { q: 'In a mapping, inputs 1, 2, and 3 each have one arrow, and all three arrows point to 8. Is it a function?', c: ['Yes — each input has exactly one output', 'No — 8 has three arrows pointing to it', 'No — there must be three different outputs', 'Only if 8 is also an input'], why: 'Many inputs can share one output. The problem is one input with many outputs.' },
        { q: 'A vertical line touches a graph at (2, 1) and at (2, 5). What does that tell you?', c: ['It is not a function — x = 2 has two outputs', 'It is a function — the two y-values are different', 'It is a function — 2 is a positive number', 'It is a horizontal line'], why: 'One input, x = 2, gives two outputs, 1 and 5.' },
        { q: 'Which value of k makes {(1,4), (k,7), (3,9)} NOT a function?', c: ['k = 1', 'k = 4', 'k = 7', 'k = 2'], why: 'If k = 1, the input 1 would have two outputs, 4 and 7.' },
        { q: 'A school gives each student one locker number. Is "student → locker number" a function?', c: ['Yes — each student gets exactly one locker number', 'No — two lockers could have similar numbers', 'No — there are more lockers than students', 'Only if the locker numbers go in order'], why: 'Each input (a student) has exactly one output (a locker number).' },
        { q: 'Which graph passes the vertical line test?', c: ['A slanted line, like y = 3x − 1', 'A circle centered at (0, 0)', 'A vertical line, like x = −2', 'A sideways U that opens to the right'], why: 'Any vertical line touches a slanted line exactly once.' },
        { q: 'Table — x: 5, 6, 7, 5 and y: 0, 1, 2, 3. Is this a function?', c: ['No — x = 5 gives both 0 and 3', 'Yes — all the y-values are different', 'Yes — there are four rows', 'No — y = 0 is not allowed'], why: 'The input 5 appears twice with two different outputs.' },
        { q: 'Lina says a horizontal line like y = 2 is NOT a function. What was her mistake?', c: ['Every vertical line touches y = 2 only once, so it is a function', 'Nothing — flat lines are never functions', 'y = 2 has no x, so it cannot be graphed', 'Horizontal lines always fail the vertical line test'], why: 'Every input x gives the same output, 2. Same outputs are allowed.' },
        { q: 'A machine gives 8 when you put in 3 on Monday, and 10 when you put in 3 on Tuesday. Is it a function?', c: ['No — the same input gave two different outputs', 'Yes — both outputs are even numbers', 'Yes — it gave an output both times', 'Yes — 8 and 10 are close together'], why: 'A function must always give the same output for the same input.' },
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
        { q: 'If f(x) = 4x − 3, what is f(5)?', c: ['17', '23', '42', '20'], why: '4·5 = 20, then 20 − 3 = 17.' },
        { q: 'If g(x) = x² + 2, what is g(4)?', c: ['18', '10', '36', '16'], why: '4² = 16, then 16 + 2 = 18.' },
        { q: 'If f(x) = 3x + 5, which input makes f(x) = 20?', c: ['x = 5', 'x = 65', 'x = 25/3', 'x = 15'], why: '3x + 5 = 20 → 3x = 15 → x = 5.' },
        { q: 'If f(x) = 7 − 2x, what is f(−3)?', c: ['13', '1', '−15', '−13'], why: '7 − 2(−3) = 7 + 6 = 13.' },
        { q: 'Sam says f(4) means "f times 4." What was his mistake?', c: ['f(4) means the output when you put in 4 for x', 'f(4) means f plus 4', 'f(4) means 4 divided by f', 'Nothing — he is right'], why: 'The parentheses hold the input. f(4) is the output when x = 4.' },
        { q: 'A water jug has W(t) = 40 − 5t liters left after t minutes. What is W(6)?', c: ['10 liters', '70 liters', '34 liters', '−10 liters'], why: '5·6 = 30, then 40 − 30 = 10 liters.' },
        { q: 'If f(x) = x/3 − 1, what is f(12)?', c: ['3', '4', '11/3', '35'], why: '12 ÷ 3 = 4, then 4 − 1 = 3.' },
        { q: 'If f(5) = 2, which statement is true?', c: ['When the input is 5, the output is 2', 'When the input is 2, the output is 5', 'f times 5 equals 2', 'The point (2, 5) is on the graph'], why: 'f(5) = 2 means 5 goes in and 2 comes out.' },
        { q: 'If f(x) = x² − 4x, what is f(3)?', c: ['−3', '3', '21', '−12'], why: '3² = 9 and 4·3 = 12, so 9 − 12 = −3.' },
        { q: 'For f(x) = 10 − x, which is bigger: f(2) or f(8)?', c: ['f(2)', 'f(8)', 'They are equal', 'You cannot compare them'], why: 'f(2) = 10 − 2 = 8 and f(8) = 10 − 8 = 2. So f(2) is bigger.' },
        { q: 'A phone battery is B(h) = 100 − 8h percent after h hours. What does B(5) = 60 mean?', c: ['After 5 hours, the battery is at 60%', 'After 60 hours, the battery is at 5%', 'The battery drops 5% each hour', 'The battery drops 60% each hour'], why: 'The input 5 is hours and the output 60 is percent: 100 − 8·5 = 60.' },
        { q: 'P(n) = 3n is the price in dollars of n samosas. If P(n) = 27, what is n?', c: ['9', '81', '24', '30'], why: '3n = 27, so n = 27 ÷ 3 = 9 samosas.' },
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
        { q: 'What is the domain of {(5,2), (−1,2), (3,0)}?', c: ['{−1, 3, 5}', '{0, 2}', '{−1, 0, 2, 3, 5}', '{2}'], why: 'Domain = the x-values: 5, −1, and 3.' },
        { q: 'What is the range of {(1,9), (2,9), (3,4), (4,4)}?', c: ['{4, 9}', '{1, 2, 3, 4}', '{9, 9, 4, 4}', '{1, 4, 9}'], why: 'The outputs are 9 and 4. List each one only once.' },
        { q: 'For f(x) = 5/(x − 2), which number is NOT in the domain?', c: ['2', '−2', '0', '5'], why: 'At x = 2 the bottom is 2 − 2 = 0, and you cannot divide by zero.' },
        { q: 'Sam says the domain of {(2,8), (3,9), (4,10)} is {8, 9, 10}. What was his mistake?', c: ['He listed the y-values; the domain is {2, 3, 4}', 'He forgot to include 0', 'He should have added each pair', 'Nothing — he is right'], why: 'Domain means the inputs, which are the x-values: 2, 3, 4.' },
        { q: 'f(x) = 2x, and the domain is {0, 1, 2, 3}. What is the range?', c: ['{0, 2, 4, 6}', '{0, 1, 2, 3}', '{2, 3, 4, 5}', '{0, 1, 4, 9}'], why: 'Double each input: 0, 2, 4, 6.' },
        { q: 'A graph is a line segment from (−3, 1) to (5, 9). What is its range?', c: ['1 ≤ y ≤ 9', '−3 ≤ y ≤ 5', '1 ≤ y ≤ 5', '−3 ≤ y ≤ 9'], why: 'The range uses the y-values. The lowest is 1 and the highest is 9.' },
        { q: 'A bus holds at most 40 riders. The fare money is F(r) = 2r dollars for r riders. What is a sensible domain?', c: ['Whole numbers from 0 to 40', 'Whole numbers from 0 to 80', 'All numbers, including negatives', 'Only the number 40'], why: 'Riders come in whole numbers, from 0 up to the 40-seat limit.' },
        { q: 'Same bus (at most 40 riders, F(r) = 2r). What is the largest value in the range?', c: ['$80', '$40', '$42', '$20'], why: 'The most riders is 40, and 2·40 = 80 dollars.' },
        { q: 'Which number is NOT in the range of f(x) = x²?', c: ['−4', '0', '4', '2.25'], why: 'Squaring never gives a negative. 0, 4, and 2.25 can all be outputs.' },
        { q: 'Which number is NOT in the domain of f(x) = √x?', c: ['−9', '0', '9', '0.25'], why: 'In Algebra 1, you cannot take the square root of a negative number.' },
        { q: 'A phone battery goes from 100% down to 0% over 10 hours. What is the range of the battery percent?', c: ['0 ≤ y ≤ 100', '0 ≤ y ≤ 10', '10 ≤ y ≤ 100', 'y ≥ 0'], why: 'The outputs are battery percents, from 0 up to 100. The 10 hours is the domain.' },
        { q: 'What is the domain of f(x) = 3x + 1?', c: ['All numbers', 'Only x ≥ 0', 'Only whole numbers', 'All numbers except 0'], why: 'You can multiply any number by 3 and add 1. Nothing breaks.' },
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
        { q: 'Table — x: −2, −1, 0, 1, 2 and f(x): 4, 1, 0, 1, 4. What is f(−1)?', c: ['1', '−1', '4', '0'], why: 'Find x = −1 in the table. Its output is 1.' },
        { q: 'Same table (x: −2, −1, 0, 1, 2 → f(x): 4, 1, 0, 1, 4). Which x-values give f(x) = 4?', c: ['x = −2 and x = 2', 'Only x = 4', 'Only x = 2', 'x = 0'], why: 'The output 4 lines up with both x = −2 and x = 2.' },
        { q: 'Same table (f(x): 4, 1, 0, 1, 4). What is the minimum (lowest) output?', c: ['0, at x = 0', '−2, at x = −2', '4, at x = 2', '1, at x = 1'], why: 'The smallest output is 0. The minimum is about outputs, not inputs.' },
        { q: 'The point (−4, 0) is on the graph of f. What does that tell you?', c: ['The graph crosses the x-axis at x = −4', 'f(0) = −4', 'The graph crosses the y-axis at −4', 'f(−4) is undefined'], why: 'f(−4) = 0, so the graph is at height 0 when x = −4.' },
        { q: 'A graph goes through (0, 1), (1, 3), and (2, 5). Which rule fits?', c: ['f(x) = 2x + 1', 'f(x) = x + 1', 'f(x) = x + 2', 'f(x) = 3x'], why: 'Check all three: 2·0 + 1 = 1, 2·1 + 1 = 3, 2·2 + 1 = 5.' },
        { q: 'Sam sees the point (5, 2) on a graph and says f(2) = 5. What was his mistake?', c: ['He swapped them; the point means f(5) = 2', 'He should have added 5 and 2', 'The point means f(5) = −2', 'Nothing — he is right'], why: 'Points are (x, f(x)). Input 5 gives output 2.' },
        { q: 'Table — x: 0, 1, 2, 3 and f(x): 2, 2, 2, 2. How does the graph look?', c: ['Flat (constant) — it neither rises nor falls', 'Increasing', 'Decreasing', 'A vertical line'], why: 'Every output is 2, so the graph stays at the same height.' },
        { q: 'A ball\'s height graph rises, peaks at (2 seconds, 20 meters), then falls. When is the ball highest?', c: ['At 2 seconds, 20 meters up', 'At 20 seconds, 2 meters up', 'At 0 seconds, when it is thrown', 'At the very end'], why: 'The peak is the maximum. Read x = 2 seconds and y = 20 meters.' },
        { q: 'Same ball graph (peak at 2 seconds). From 0 to 2 seconds, the graph is…', c: ['increasing', 'decreasing', 'constant', 'undefined'], why: 'Before the peak, the ball goes up, so the graph rises.' },
        { q: 'A graph crosses the y-axis at (0, 6). Which statement is NOT true?', c: ['f(6) = 0', 'f(0) = 6', 'The point (0, 6) is on the graph', 'When the input is 0, the output is 6'], why: '(0, 6) means f(0) = 6. It tells you nothing about f(6).' },
        { q: 'A phone battery graph goes in a straight line from (1 pm, 80%) to (3 pm, 40%). How fast did the battery drop?', c: ['20% per hour', '40% per hour', '10% per hour', '80% per hour'], why: 'It lost 80 − 40 = 40% in 2 hours. 40 ÷ 2 = 20% per hour.' },
        { q: 'Table — x: 1, 2, 3, 4 and f(x): 4, 7, 10, 13. Solve f(x) = 7.', c: ['x = 2', 'x = 7', 'x = 3', 'x = 13'], why: 'Find the output 7 in the table. It lines up with x = 2.' },
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
        { q: 'What is the slope between (1, 1) and (4, 10)?', c: ['3', '1/3', '9', '−3'], why: '(10 − 1) ÷ (4 − 1) = 9 ÷ 3 = 3.' },
        { q: 'What is the slope between (3, 8) and (5, 2)?', c: ['−3', '3', '−1/3', '−6'], why: '(2 − 8) ÷ (5 − 3) = −6 ÷ 2 = −3.' },
        { q: 'What is the slope between (−3, 4) and (1, −4)?', c: ['−2', '4', '−1/2', '2'], why: '(−4 − 4) ÷ (1 − (−3)) = −8 ÷ 4 = −2.' },
        { q: 'What is the slope between (2, −1) and (6, 1)?', c: ['1/2', '2', '0', '−1/2'], why: '(1 − (−1)) ÷ (6 − 2) = 2 ÷ 4 = 1/2.' },
        { q: 'Sam finds the slope between (1, 3) and (4, 9) as (4 − 1) ÷ (9 − 3) = 1/2. What was his mistake?', c: ['He put run over rise; the slope is 6 ÷ 3 = 2', 'He subtracted in the wrong order; the slope is −1/2', 'He should have added: (9 + 3) ÷ (4 + 1)', 'Nothing — 1/2 is right'], why: 'Slope is rise ÷ run: (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2.' },
        { q: 'Which slope makes the steepest line?', c: ['−6', '4', '1/2', '0'], why: 'Ignore the minus sign: 6 is the biggest number, so −6 is the steepest.' },
        { q: 'What is the slope between (5, 2) and (5, 9)?', c: ['undefined', '0', '7', '5'], why: '(9 − 2) ÷ (5 − 5) = 7 ÷ 0. You cannot divide by 0.' },
        { q: 'A road climbs 30 feet over 600 feet of flat distance. What is its slope?', c: ['1/20', '20', '30', '570'], why: 'Rise ÷ run = 30 ÷ 600 = 1/20.' },
        { q: 'Which pair of points makes a line with a negative slope?', c: ['(0, 5) and (2, 1)', '(0, 1) and (2, 5)', '(0, 3) and (2, 3)', '(1, 0) and (1, 4)'], why: 'As x goes from 0 to 2, y drops from 5 to 1. Downhill means negative.' },
        { q: 'Table — x: 0, 2, 4, 6 and y: 1, 4, 7, 10. What is the slope?', c: ['3/2', '3', '2/3', '1'], why: 'y goes up 3 each time x goes up 2. Slope = 3 ÷ 2 = 3/2.' },
        { q: 'A line through (0, 0) has slope −1. Which point is also on it?', c: ['(3, −3)', '(3, 3)', '(−3, −3)', '(0, −1)'], why: 'From (0, 0) to (3, −3): rise −3, run 3. −3 ÷ 3 = −1.' },
        { q: 'Each stair step is 7 inches tall and 11 inches deep. What is the slope of the stairs?', c: ['7/11', '11/7', '18', '4'], why: 'Rise ÷ run = 7 ÷ 11 = 7/11.' },
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
        { q: 'You have $20 after 2 weeks and $50 after 8 weeks. What is the rate?', c: ['$5 per week', '$15 per week', '$6.25 per week', '$30 per week'], why: '(50 − 20) ÷ (8 − 2) = 30 ÷ 6 = $5 per week.' },
        { q: 'What is the y-intercept of y = −3x + 9?', c: ['(0, 9)', '(9, 0)', '(3, 0)', '(0, −3)'], why: 'Put x = 0: y = 9.' },
        { q: 'What is the x-intercept of y = −3x + 9?', c: ['(3, 0)', '(−3, 0)', '(9, 0)', '(0, 9)'], why: 'Put y = 0: 0 = −3x + 9 → 3x = 9 → x = 3.' },
        { q: 'What is the x-intercept of 2x + 5y = 20?', c: ['(10, 0)', '(4, 0)', '(0, 4)', '(20, 0)'], why: 'Put y = 0: 2x = 20 → x = 10.' },
        { q: 'What is the y-intercept of 2x + 5y = 20?', c: ['(0, 4)', '(0, 10)', '(4, 0)', '(0, 20)'], why: 'Put x = 0: 5y = 20 → y = 4.' },
        { q: 'Table — x: 1, 2, 3 and y: 9, 12, 15. What is the y-intercept?', c: ['6', '9', '3', '0'], why: 'y goes up 3 per step. Step back to x = 0: 9 − 3 = 6.' },
        { q: 'Sam says the y-intercept of y = 5x − 10 is (−10, 0). What was his mistake?', c: ['He swapped the numbers; it is (0, −10)', 'The y-intercept is (0, 5)', 'The y-intercept is (2, 0)', 'Nothing — he is right'], why: 'The y-intercept has x = 0. Put x = 0: y = −10, so (0, −10).' },
        { q: 'A phone is at 90% at noon and 60% at 2 pm. What is the rate of change?', c: ['−15% per hour', '15% per hour', '−30% per hour', '30% per hour'], why: '(60 − 90) ÷ (2 − 0) = −30 ÷ 2 = −15% per hour.' },
        { q: 'A tank holds y = 500 − 25x liters after x minutes. What is the x-intercept, and what does it mean?', c: ['20 minutes — when the tank is empty', '500 minutes — when the tank is empty', '25 minutes — when the tank is empty', '20 minutes — when the tank is full'], why: '0 = 500 − 25x → 25x = 500 → x = 20. No water is left then.' },
        { q: 'Which statement is NOT true about the x-intercept?', c: ['x = 0 there', 'y = 0 there', 'It is on the x-axis', 'It is where the line crosses the x-axis'], why: 'At the x-intercept, y is 0, not x.' },
        { q: 'A taxi ride costs $9 for 2 miles and $15 for 5 miles. What is the cost per mile?', c: ['$2 per mile', '$3 per mile', '$4.50 per mile', '$6 per mile'], why: '(15 − 9) ÷ (5 − 2) = 6 ÷ 3 = $2 per mile.' },
        { q: 'Same taxi ($9 for 2 miles, $2 per mile). What is the starting fee (the y-intercept)?', c: ['$5', '$9', '$7', '$2'], why: '2 miles cost 2·2 = $4. Then 9 − 4 = $5 to start.' },
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
        { q: 'What is the slope of y = −4x + 9?', c: ['−4', '9', '4', '−9'], why: 'm is the number in front of x, sign included.' },
        { q: 'What is the y-intercept of y = 6 − 2x?', c: ['6', '−2', '2', '−6'], why: 'y = 6 − 2x is the same as y = −2x + 6, so b = 6.' },
        { q: 'Which equation has slope −1/2 and y-intercept 3?', c: ['y = −(1/2)x + 3', 'y = 3x − 1/2', 'y = (1/2)x + 3', 'y = −2x + 3'], why: 'm = −1/2 goes in front of x, and b = 3 is added on.' },
        { q: 'Rewrite 3x + y = 7 in slope-intercept form.', c: ['y = −3x + 7', 'y = 3x + 7', 'y = −3x − 7', 'y = 7x + 3'], why: 'Subtract 3x from both sides: y = −3x + 7.' },
        { q: 'Rewrite 6x + 3y = 12 in slope-intercept form.', c: ['y = −2x + 4', 'y = −6x + 12', 'y = −2x + 12', 'y = 2x + 4'], why: '3y = −6x + 12. Then divide every term by 3.' },
        { q: 'A savings jar starts with $12, and you add $4 each week. Which equation gives the total y after x weeks?', c: ['y = 4x + 12', 'y = 12x + 4', 'y = 16x', 'y = 4x − 12'], why: 'The rate (m) is 4 per week and the start (b) is 12.' },
        { q: 'Sam says y = 5 + 3x has slope 5. What was his mistake?', c: ['The slope is the number multiplying x, so m = 3', 'The slope is 8, from 5 + 3', 'The slope is −3', 'Nothing — the first number is always the slope'], why: 'y = 5 + 3x is y = 3x + 5. The slope multiplies x.' },
        { q: 'A line has slope −3 and y-intercept 0. What is its equation?', c: ['y = −3x', 'y = −3', 'y = x − 3', 'y = 3x'], why: 'm = −3 and b = 0, so y = −3x + 0, which is y = −3x.' },
        { q: 'Which point is on the line y = 4x − 5?', c: ['(2, 3)', '(3, 2)', '(0, 5)', '(1, 9)'], why: 'Put in x = 2: 4·2 − 5 = 8 − 5 = 3.' },
        { q: 'Which line crosses the y-axis highest?', c: ['y = x + 8', 'y = 8x + 1', 'y = 5x + 4', 'y = −x + 2'], why: 'The y-intercept is b. The biggest b here is 8.' },
        { q: 'A line passes through (0, −2) and (3, 4). What is its equation?', c: ['y = 2x − 2', 'y = 6x − 2', 'y = 2x + 4', 'y = (1/2)x − 2'], why: 'Slope = (4 − (−2)) ÷ 3 = 6 ÷ 3 = 2, and b = −2.' },
        { q: 'Which equation is NOT in slope-intercept form?', c: ['2x + y = 5', 'y = 2x + 5', 'y = −x', 'y = 0.5x − 1'], why: 'Slope-intercept form has y alone on one side. 2x + y = 5 does not.' },
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
        { q: 'An electrician charges $60 to come out plus $45 per hour. Which equation fits?', c: ['y = 45x + 60', 'y = 60x + 45', 'y = 105x', 'y = 45x − 60'], why: 'The rate (m) is 45 per hour and the start (b) is 60.' },
        { q: 'Using y = 45x + 60, what does a 4-hour job cost?', c: ['$240', '$180', '$420', '$285'], why: '45·4 + 60 = 180 + 60 = 240.' },
        { q: 'A phone battery is y = −12x + 96 percent after x hours. When does it hit 0%?', c: ['After 8 hours', 'After 96 hours', 'After 12 hours', 'After 84 hours'], why: '0 = −12x + 96 → 12x = 96 → x = 8.' },
        { q: 'Same battery (y = −12x + 96). What does −12 mean?', c: ['It loses 12% each hour', 'It starts at 12%', 'It lasts 12 hours', 'It gains 12% each hour'], why: 'The slope is the rate. Negative means the battery goes down 12% per hour.' },
        { q: 'You have $350 saved and spend $25 a week on lunch. How much is left after 6 weeks?', c: ['$200', '$500', '$325', '$150'], why: '350 − 25·6 = 350 − 150 = 200.' },
        { q: 'Same money ($350, spending $25 a week). After how many weeks is it all gone?', c: ['14 weeks', '25 weeks', '325 weeks', '8,750 weeks'], why: '0 = 350 − 25x → 25x = 350 → x = 14.' },
        { q: 'Table — days: 0, 3, 6 and plant height (cm): 5, 11, 17. Which equation fits?', c: ['y = 2x + 5', 'y = 6x + 5', 'y = 5x + 2', 'y = 2x + 11'], why: 'Rate = 6 cm ÷ 3 days = 2 cm per day. The start is 5.' },
        { q: 'Club A costs $40 to join plus $10 per class. Club B costs $20 to join plus $15 per class. After how many classes do they cost the same?', c: ['4 classes', '20 classes', '2 classes', '12 classes'], why: '40 + 10x = 20 + 15x → 20 = 5x → x = 4.' },
        { q: 'Same clubs (A: $40 + $10 per class, B: $20 + $15 per class). Which is cheaper for 10 classes?', c: ['Club A ($140)', 'Club B ($170)', 'They cost the same', 'Club B ($150)'], why: 'A: 40 + 10·10 = 140. B: 20 + 15·10 = 170.' },
        { q: 'Sam models "start with 30 stickers and give away 2 each day" as y = 2x + 30. What was his mistake?', c: ['Giving away makes the slope negative: y = −2x + 30', 'He swapped m and b: y = 30x + 2', 'The start should be 0: y = 2x', 'Nothing — it is right'], why: 'The amount goes down 2 per day, so m = −2. The start is still 30.' },
        { q: 'A delivery van can drive y = −40x + 320 more miles before it needs fuel, after x hours. What does 320 mean?', c: ['It could drive 320 miles at the start', 'It drives 320 miles per hour', 'It can drive for 320 hours', 'It drives 40 miles in total'], why: 'b is the value when x = 0, at the start.' },
        { q: 'A bakery\'s profit is P = 3x − 90 dollars for x loaves sold. How many loaves must it sell to break even (P = 0)?', c: ['30', '90', '270', '87'], why: '0 = 3x − 90 → 3x = 90 → x = 30.' },
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
