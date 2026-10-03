// Unit 15 — Quadratic functions & equations. NJ: A.REI.B.4, A.SSE.B.3a, A.SSE.B.3b, F.IF.C.7a, F.IF.C.8a, F.IF.C.9, F.BF.B.3, A.REI.D.11
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every root, vertex, intercept and discriminant was recomputed with node.
export default {
  id: 'a15', n: 15, title: 'Quadratic functions & equations', nj: ['A.REI.B.4', 'A.SSE.B.3a', 'A.SSE.B.3b', 'F.IF.C.7a', 'F.IF.C.8a', 'F.IF.C.9', 'F.BF.B.3', 'A.REI.D.11'],
  lessons: [
    {
      key: 'a15-01',
      title: 'Intro to parabolas',
      videos: [
        { id: 'BGz3pkoGPag', title: 'Visual introduction to parabolas' },
        { id: 'nh3_IGxHA5A', title: 'Graphing a parabola with a table of values' },
        { id: '_Bk6XkV9O_0', title: 'Interpreting a parabola in context' },
      ],
      learn: `
        <p>A <b>quadratic function</b> (a function whose biggest power of x is x², like y = x² − 4) makes a U-shaped graph called a <b>parabola</b>.</p>
        <ul>
          <li>The <b>vertex</b> (the turning point of the U) is the lowest point if the parabola opens up, or the highest point if it opens down.</li>
          <li>The <b>axis of symmetry</b> (the up-and-down line through the vertex) splits the parabola into two mirror-image halves. If the vertex is at x = 2, the axis is the line x = 2.</li>
          <li>If the number in front of x² is positive, the parabola <b>opens up</b> like a smile. If it is negative, it <b>opens down</b> like a frown.</li>
          <li>The <b>y-intercept</b> (where the graph crosses the y-axis) is the y-value when x = 0.</li>
          <li>The <b>zeros</b> (the x-values where the graph crosses the x-axis) are where y = 0.</li>
        </ul>
        <p><b>Worked example:</b> y = x² − 4. Make a table:</p>
        <ul>
          <li>x = −2 → y = 0</li>
          <li>x = −1 → y = −3</li>
          <li>x = 0 → y = −4</li>
          <li>x = 1 → y = −3</li>
          <li>x = 2 → y = 0</li>
        </ul>
        <p>The lowest point is (0, −4), so that is the vertex. The axis of symmetry is x = 0. The number in front of x² is +1, so it opens up. The zeros are x = −2 and x = 2.</p>
        <p><b>Mirror trick:</b> two points the same distance from the axis, one on each side, always have the same y-value.</p>`,
      quiz: [
        { q: 'What is the U-shaped graph of a quadratic function called?', c: ['A parabola', 'A line', 'A circle', 'A slope'], why: 'Every quadratic graph is a U shape (or an upside-down U). That shape is called a parabola.' },
        { q: 'The vertex of a parabola is…', c: ['its turning point', 'where it crosses the y-axis', 'its steepest point', 'any point on the curve'], why: 'The vertex is where the parabola stops going one way and turns around.' },
        { q: 'Does y = −3x² + 5 open up or down?', c: ['Down — the number in front of x² is negative', 'Up — the 5 is positive', 'Up — the 3 is positive', 'Down — the 5 is positive'], why: 'Only the sign in front of x² matters. It is −3, which is negative, so it opens down.' },
        { q: 'Does y = 2x² − 8 open up or down?', c: ['Up', 'Down', 'Neither — it is a straight line', 'Down, because of the −8'], why: 'The number in front of x² is +2. Positive means it opens up. The −8 does not decide the direction.' },
        { q: 'A parabola opens up. Its vertex is…', c: ['its lowest point', 'its highest point', 'always at (0, 0)', 'where it crosses the x-axis'], why: 'A U shape that opens up has its turning point at the bottom.' },
        { q: 'A parabola has its vertex at (3, −2). What is its axis of symmetry?', c: ['x = 3', 'y = −2', 'x = −2', 'y = 3'], why: 'The axis is the up-and-down line through the vertex. It uses the x-value: x = 3.' },
        { q: 'Table — x: 0, 1, 2, 3, 4 and y: 5, 2, 1, 2, 5. What is the vertex?', c: ['(2, 1)', '(0, 5)', '(1, 2)', '(4, 5)'], why: 'The y-values go down to 1, then back up. The turning point is at x = 2, y = 1.' },
        { q: 'Same table — x: 0, 1, 2, 3, 4 and y: 5, 2, 1, 2, 5. What is the axis of symmetry?', c: ['x = 2', 'x = 1', 'y = 1', 'x = 5'], why: 'The y-values mirror around x = 2. For example, x = 1 and x = 3 both give 2.' },
        { q: 'For y = x² − 9, what is the y-intercept?', c: ['−9', '9', '3', '0'], why: 'Plug in x = 0: 0² − 9 = −9. So the graph crosses the y-axis at (0, −9).' },
        { q: 'For y = x² − 9, what are the zeros?', c: ['x = 3 and x = −3', 'x = 9 and x = −9', 'only x = 3', 'only x = −9'], why: '3² − 9 = 0 and (−3)² − 9 = 0. Both make y = 0.' },
        { q: 'A parabola has axis of symmetry x = 1. The point (4, 7) is on it. Which other point must be on it?', c: ['(−2, 7)', '(4, −7)', '(−4, 7)', '(1, 7)'], why: 'x = 4 is 3 steps right of the axis. Go 3 steps left instead: 1 − 3 = −2. Same height, 7.' },
        { q: 'A ball is thrown, and its height makes a parabola that opens down. The vertex shows…', c: ['the highest point the ball reaches', 'where the ball starts', 'where the ball lands', 'how heavy the ball is'], why: 'A parabola that opens down has its turning point at the top. That is the highest point.' },
        { q: 'If y = x², what is y when x = −3?', c: ['9', '−9', '−6', '6'], why: '(−3)² = (−3)(−3) = 9. A negative times a negative is positive.' },
        { q: 'Which equation is a quadratic function?', c: ['y = 4x² + x − 1', 'y = 4x + 1', 'y = 4/x', 'y = x³ + 2'], why: 'Quadratic means the biggest power of x is 2. Only 4x² + x − 1 fits.' },
        { q: 'What is the vertex of y = −x² + 4?', c: ['(0, 4)', '(0, −4)', '(4, 0)', '(2, 0)'], why: '−x² is never more than 0, so y is biggest at x = 0, where y = 4. That top point is the vertex.' },
        { q: 'The zeros of a parabola are where it…', c: ['crosses the x-axis', 'crosses the y-axis', 'turns around', 'is highest'], why: 'A zero is an x-value that makes y = 0. Points with y = 0 sit on the x-axis.' },
        { q: 'A parabola has zeros at x = 1 and x = 7. Where is its axis of symmetry?', c: ['x = 4', 'x = 8', 'x = 6', 'x = 3'], why: 'The axis is exactly halfway between the zeros: (1 + 7) ÷ 2 = 4.' },
        { q: 'A parabola has zeros at x = −6 and x = 2. Where is its axis of symmetry?', c: ['x = −2', 'x = −4', 'x = 4', 'x = 2'], why: 'Halfway between: (−6 + 2) ÷ 2 = −4 ÷ 2 = −2.' },
        { q: 'Can a parabola that opens up have a highest point?', c: ['No — its arms keep going up forever', 'Yes — at the vertex', 'Yes — at the y-intercept', 'Only if it crosses the x-axis'], why: 'Both arms of an upward U rise without end. It has a lowest point, but no highest point.' },
        { q: 'A parabola opens down and its vertex is (−1, 6). What is the greatest y-value on the graph?', c: ['6', '−1', '0', 'There is no greatest value'], why: 'Opening down means the vertex is the top. Its y-value, 6, is the greatest.' },
        { q: 'Table — x: −2, −1, 0, 1, 2 and y: −4, −1, 0, −1, −4. Does this parabola open up or down?', c: ['Down — the middle point is the highest', 'Up — the middle point is the lowest', 'Up — it has negative numbers', 'Down — it starts at −4'], why: 'y rises to 0 in the middle, then falls again. The turning point is at the top, so it opens down.' },
        { q: 'A parabola opens up and its vertex is (2, 3). How many zeros does it have?', c: ['None — it never reaches the x-axis', 'Two', 'One', 'Three'], why: 'Its lowest point is 3 above the x-axis, and the arms go up from there. It never touches y = 0.' },
        { q: 'A parabola has its vertex at (5, 0). How many times does it touch the x-axis?', c: ['Once — the vertex sits right on the x-axis', 'Twice', 'Never', 'Four times'], why: 'The vertex has y = 0, so it touches the x-axis there. Then it turns away and never comes back.' },
        { q: 'The arc of water from a fountain is a parabola. It leaves the ground at 0 ft and lands at 6 ft. Above which spot is the water highest?', c: ['3 ft', '6 ft', '0 ft', '12 ft'], why: 'The top is on the axis of symmetry, halfway between the zeros: (0 + 6) ÷ 2 = 3.' },
      ],
      realLife: {
        text: `<p>Parabolas are all around you.</p>
          <ul><li><b>Sports:</b> a basketball shot or a football pass flies in a parabola. The vertex is the highest point of the throw.</li>
          <li><b>Water:</b> the stream from a drinking fountain or a garden hose curves in a parabola.</li>
          <li><b>Bridges:</b> the big cables on suspension bridges, like the George Washington Bridge, hang in a shape very close to a parabola.</li>
          <li><b>Dishes:</b> satellite dishes are shaped like parabolas so they bounce signals to one spot.</li></ul>
          <p>Whenever something goes up, turns around, and comes back down, think parabola.</p>`,
        prompt: 'Think of something you have seen fly through the air in a curved path. Where was its vertex, and what does that point mean in real life?',
      },
    },
    {
      key: 'a15-02',
      title: 'Solving and graphing with factored form',
      videos: [
        { id: '-lWVpoPaPBc', title: 'Solving equations with zero product property' },
        { id: 'Mk_hLTGabTQ', title: 'Graphing quadratics in factored form when a = 1' },
        { id: 'ITBRCLusU1s', title: 'Interpret quadratic models: Factored form' },
      ],
      learn: `
        <p><b>Factored form</b> (a quadratic written as a product, like y = (x − 2)(x − 6)) shows the <b>zeros</b> right away. Zeros are also called <b>roots</b> (the x-values that make y = 0).</p>
        <p>The key idea is the <b>zero product property</b> (if two numbers multiply to 0, at least one of them must be 0).</p>
        <p><b>Worked example:</b> graph y = (x − 2)(x − 6).</p>
        <ol>
          <li><b>Zeros:</b> set each part equal to 0. x − 2 = 0 gives x = 2. x − 6 = 0 gives x = 6. The graph crosses the x-axis at (2, 0) and (6, 0).</li>
          <li><b>Axis of symmetry:</b> halfway between the zeros: (2 + 6) ÷ 2 = 4. So the axis is x = 4.</li>
          <li><b>Vertex:</b> plug in x = 4: y = (4 − 2)(4 − 6) = (2)(−2) = −4. The vertex is (4, −4).</li>
          <li><b>y-intercept:</b> plug in x = 0: y = (−2)(−6) = 12. So the graph crosses the y-axis at (0, 12).</li>
        </ol>
        <p><b>Watch the signs:</b> x + 3 = 0 gives x = −3, not 3. Each zero is the opposite of the number in its parentheses.</p>
        <p>A number in front, like y = −2(x − 1)(x − 5), does not change the zeros. It stretches the graph, and a negative flips it upside down.</p>`,
      quiz: [
        { q: 'What are the zeros of y = (x − 3)(x − 5)?', c: ['x = 3 and x = 5', 'x = −3 and x = −5', 'x = 15', 'x = 8'], why: 'x − 3 = 0 gives x = 3. x − 5 = 0 gives x = 5.' },
        { q: 'What are the zeros of y = (x + 4)(x − 1)?', c: ['x = −4 and x = 1', 'x = 4 and x = −1', 'x = 4 and x = 1', 'x = −4 and x = −1'], why: 'x + 4 = 0 gives x = −4. x − 1 = 0 gives x = 1. Flip each sign.' },
        { q: 'Solve: (x − 7)(x + 2) = 0', c: ['x = 7 or x = −2', 'x = −7 or x = 2', 'x = 7 or x = 2', 'x = −14'], why: 'Set each factor to 0: x − 7 = 0 → x = 7, and x + 2 = 0 → x = −2.' },
        { q: 'The zero product property says: if A · B = 0, then…', c: ['A = 0 or B = 0', 'A = 1 and B = 0', 'A = B', 'A + B = 0'], why: 'The only way to multiply and get 0 is for one of the factors (or both) to be 0.' },
        { q: 'Solve: x(x − 9) = 0', c: ['x = 0 or x = 9', 'x = 9 only', 'x = −9 or x = 0', 'x = 0 only'], why: 'The first factor is just x, so x = 0 works. The second gives x = 9. Do not drop x = 0.' },
        { q: 'Solve: (2x − 6)(x + 1) = 0', c: ['x = 3 or x = −1', 'x = 6 or x = −1', 'x = −3 or x = 1', 'x = 2 or x = −1'], why: '2x − 6 = 0 → 2x = 6 → x = 3. And x + 1 = 0 → x = −1.' },
        { q: 'What is the axis of symmetry of y = (x − 2)(x − 8)?', c: ['x = 5', 'x = 10', 'x = 6', 'x = 3'], why: 'The zeros are 2 and 8. Halfway between: (2 + 8) ÷ 2 = 5.' },
        { q: 'What is the vertex of y = (x − 2)(x − 8)?', c: ['(5, −9)', '(5, 9)', '(5, 0)', '(−5, −9)'], why: 'The axis is x = 5. Plug it in: (5 − 2)(5 − 8) = (3)(−3) = −9.' },
        { q: 'What is the vertex of y = (x + 1)(x − 3)?', c: ['(1, −4)', '(1, 4)', '(−1, −4)', '(2, −3)'], why: 'Zeros −1 and 3, so the axis is x = 1. Then (1 + 1)(1 − 3) = (2)(−2) = −4.' },
        { q: 'What is the y-intercept of y = (x − 4)(x + 2)?', c: ['−8', '8', '−2', '4'], why: 'Plug in x = 0: (0 − 4)(0 + 2) = (−4)(2) = −8.' },
        { q: 'Which equation has zeros at x = 2 and x = −5?', c: ['y = (x − 2)(x + 5)', 'y = (x + 2)(x − 5)', 'y = (x − 2)(x − 5)', 'y = (x + 2)(x + 5)'], why: 'x = 2 comes from (x − 2). x = −5 comes from (x + 5).' },
        { q: 'Does y = −(x − 1)(x − 5) open up or down?', c: ['Down — there is a negative in front', 'Up — the zeros are positive', 'Up — both factors subtract', 'Down — 5 is bigger than 1'], why: 'The number in front is −1. A negative number in front flips the parabola upside down.' },
        { q: 'What is the vertex of y = −(x − 1)(x − 5)?', c: ['(3, 4)', '(3, −4)', '(3, 0)', '(−3, 4)'], why: 'The axis is x = 3. Then −(3 − 1)(3 − 5) = −(2)(−2) = 4.' },
        { q: 'What are the zeros of y = 2(x − 3)(x − 7)?', c: ['x = 3 and x = 7', 'x = 2, x = 3, and x = 7', 'x = 6 and x = 14', 'x = −3 and x = −7'], why: 'The 2 in front can never equal 0, so it adds no zero. Only the factors with x matter.' },
        { q: 'Another name for the zeros of a quadratic is…', c: ['roots', 'vertices', 'slopes', 'y-intercepts'], why: 'Zeros, roots, and x-intercepts all point to the same x-values where y = 0.' },
        { q: 'Solve: (x + 6)(x + 6) = 0', c: ['x = −6 only', 'x = 6 only', 'x = 6 or x = −6', 'x = 36'], why: 'Both factors give x + 6 = 0, so x = −6. There is only one zero.' },
        { q: 'A parabola has zeros at x = −3 and x = 3. Which could be its equation?', c: ['y = (x + 3)(x − 3)', 'y = (x − 3)(x − 3)', 'y = (x + 3)(x + 3)', 'y = x − 3'], why: '(x + 3) gives x = −3 and (x − 3) gives x = 3.' },
        { q: 'Sam says the zeros of y = (x + 5)(x − 2) are 5 and −2. What went wrong?', c: ['He kept the signs instead of flipping them', 'He should have multiplied 5 and 2', 'He should have added 5 and 2', 'Nothing — he is right'], why: 'x + 5 = 0 means x = −5, and x − 2 = 0 means x = 2.' },
        { q: 'A ball\'s height is h = −5t(t − 4) meters after t seconds. When does it land?', c: ['t = 4 seconds', 't = 5 seconds', 't = −4 seconds', 't = 20 seconds'], why: 'h = 0 when t = 0 (the launch) or t − 4 = 0. So it lands at t = 4.' },
        { q: 'Same ball, h = −5t(t − 4). When is it highest?', c: ['t = 2 seconds', 't = 4 seconds', 't = 0 seconds', 't = 5 seconds'], why: 'The top is halfway between the zeros 0 and 4: (0 + 4) ÷ 2 = 2.' },
        { q: 'Same ball, h = −5t(t − 4). How high does it get?', c: ['20 meters', '10 meters', '−20 meters', '4 meters'], why: 'Plug in t = 2: −5(2)(2 − 4) = −5(2)(−2) = 20.' },
        { q: 'Solve: (x − 4)(3x + 9) = 0', c: ['x = 4 or x = −3', 'x = 4 or x = −9', 'x = −4 or x = 3', 'x = 4 or x = 3'], why: 'x − 4 = 0 → x = 4. 3x + 9 = 0 → 3x = −9 → x = −3.' },
        { q: 'A parabola crosses the x-axis at (−1, 0) and (5, 0) and opens up. Which equation fits?', c: ['y = (x + 1)(x − 5)', 'y = −(x + 1)(x − 5)', 'y = (x − 1)(x + 5)', 'y = (x + 1)(x + 5)'], why: 'Zeros −1 and 5 give (x + 1)(x − 5). No negative in front, so it opens up.' },
        { q: 'To find the vertex from factored form, what do you do first?', c: ['Find the x-value halfway between the zeros', 'Set x = 0', 'Multiply the two numbers in the parentheses', 'Take the bigger zero'], why: 'The vertex sits on the axis of symmetry, halfway between the zeros. Then plug that x in to get y.' },
      ],
      realLife: {
        text: `<p>Factored form answers "when is it zero?" fast.</p>
          <ul><li><b>Punting a football:</b> the height is h = −5t(t − 3) meters. The zeros t = 0 and t = 3 say the ball leaves the ground at 0 seconds and lands at 3 seconds. The top comes halfway, at 1.5 seconds.</li>
          <li><b>Fencing a garden:</b> with 20 meters of fence along a wall, the area is A = x(20 − 2x). The zeros x = 0 and x = 10 are widths with no area at all. The best width is halfway: x = 5, for 50 square meters.</li></ul>
          <p>The zeros mark the start and the end. The vertex is right in the middle.</p>`,
        prompt: 'A ball\'s height is h = −5t(t − 6). When does it land, and when is it highest? Explain how you found each answer.',
      },
    },
    {
      key: 'a15-03',
      title: 'Solving by taking the square root',
      videos: [
        { id: 'RweAgQwLdMs', title: 'Example: Solving simple quadratic' },
        { id: 'VTlvg4wJ1X0', title: 'Solving quadratics by taking square roots examples' },
        { id: '55G8037gsKY', title: 'Solving quadratic equations by square roots' },
      ],
      learn: `
        <p>Some quadratics have only a squared part and a number, like x² = 25. You can solve them by <b>taking the square root</b> (finding the number that times itself gives the value) of both sides.</p>
        <p><b>The big idea:</b> 5 · 5 = 25 and also (−5)(−5) = 25. So x² = 25 has <b>two</b> answers: x = 5 and x = −5. We write this as <b>x = ±5</b> (± means "plus or minus").</p>
        <p><b>Steps:</b></p>
        <ol>
          <li>Get the squared part alone on one side.</li>
          <li>Take the square root of both sides. Write ±.</li>
          <li>Solve for x.</li>
        </ol>
        <p><b>Worked example:</b> 2x² − 8 = 42</p>
        <ol>
          <li>Add 8 to both sides: 2x² = 50</li>
          <li>Divide by 2: x² = 25</li>
          <li>Square root: x = ±5</li>
          <li>Check: 2(5)² − 8 = 50 − 8 = 42. It works.</li>
        </ol>
        <p><b>A squared group works too:</b> (x − 3)² = 16 → x − 3 = ±4 → x = 3 + 4 = 7 or x = 3 − 4 = −1.</p>
        <p><b>No solution:</b> x² = −9 has no real answer, because no real number times itself is negative.</p>
        <p>If the number is not a <b>perfect square</b> (a number like 1, 4, 9, 16, or 25 whose square root is a whole number), leave the root: x² = 7 → x = ±√7.</p>`,
      quiz: [
        { q: 'Solve: x² = 49', c: ['x = ±7', 'x = 7 only', 'x = ±24.5', 'x = −7 only'], why: '7 · 7 = 49 and (−7)(−7) = 49. Both work, so x = ±7.' },
        { q: 'Solve: x² = 100', c: ['x = 10 or x = −10', 'x = 10 only', 'x = 50 or x = −50', 'x = ±100'], why: '10² = 100 and (−10)² = 100. Halving 100 is not the same as a square root.' },
        { q: 'Why does x² = 36 have two answers?', c: ['6 · 6 = 36 and (−6)(−6) = 36', '36 is an even number', '36 ÷ 2 = 18', 'Every equation has two answers'], why: 'A negative times a negative is positive, so both 6 and −6 square to 36.' },
        { q: 'Solve: x² − 16 = 0', c: ['x = ±4', 'x = ±8', 'x = 16 only', 'x = ±16'], why: 'Add 16: x² = 16. Then x = ±4.' },
        { q: 'Solve: x² + 5 = 86', c: ['x = ±9', 'x = ±√91', 'x = ±40.5', 'x = 9 only'], why: 'Subtract 5: x² = 81. The square root of 81 is 9, so x = ±9.' },
        { q: 'Solve: 3x² = 75', c: ['x = ±5', 'x = ±25', 'x = ±√72', 'x = ±15'], why: 'Divide by 3: x² = 25. Then x = ±5.' },
        { q: 'Solve: 4x² − 1 = 35', c: ['x = ±3', 'x = ±9', 'x = ±18', 'x = ±6'], why: 'Add 1: 4x² = 36. Divide by 4: x² = 9. So x = ±3.' },
        { q: 'Solve: x² = −25', c: ['No real solution', 'x = ±5', 'x = −5 only', 'x = ±12.5'], why: 'No real number times itself gives a negative. 5² and (−5)² are both +25.' },
        { q: 'Solve: x² = 11', c: ['x = ±√11', 'x = ±5.5', 'x = 121', 'No real solution'], why: '11 is not a perfect square, so leave the answer as a root: x = ±√11.' },
        { q: 'Solve: (x − 2)² = 9', c: ['x = 5 or x = −1', 'x = 3 or x = −3', 'x = 5 only', 'x = −5 or x = 1'], why: 'x − 2 = ±3. Then x = 2 + 3 = 5 or x = 2 − 3 = −1.' },
        { q: 'Solve: (x + 4)² = 25', c: ['x = 1 or x = −9', 'x = 9 or x = −1', 'x = 1 only', 'x = 21 or x = −29'], why: 'x + 4 = ±5. Then x = −4 + 5 = 1 or x = −4 − 5 = −9.' },
        { q: 'Solve: (x − 6)² = 0', c: ['x = 6 only', 'x = ±6', 'x = −6 only', 'No real solution'], why: 'Only 0 squares to 0. So x − 6 = 0 and x = 6. There is just one answer.' },
        { q: 'What is the first step to solve 5x² + 3 = 48?', c: ['Subtract 3 from both sides', 'Take the square root of both sides', 'Divide only 48 by 5', 'Square both sides'], why: 'Get the squared part alone first. Undo the + 3, then undo the × 5, then take the root.' },
        { q: 'Solve: 5x² + 3 = 48', c: ['x = ±3', 'x = ±9', 'x = 3 only', 'x = ±√45'], why: 'Subtract 3: 5x² = 45. Divide by 5: x² = 9. So x = ±3.' },
        { q: 'Maya solved x² = 64 and wrote x = 8. What did she miss?', c: ['The answer x = −8', 'The answer x = 32', 'The answer x = 4', 'Nothing — 8 is the only answer'], why: '(−8)(−8) = 64 too. She needs x = ±8.' },
        { q: 'What does x = ±6 mean?', c: ['x = 6 or x = −6', 'x is between −6 and 6', 'x = 0', 'x = 36'], why: '± means "plus or minus," so it is short for two answers: 6 and −6.' },
        { q: 'A square floor has an area of 144 square feet. How long is one side?', c: ['12 feet', '±12 feet', '72 feet', '36 feet'], why: 's² = 144 gives s = ±12. A length cannot be negative, so the side is 12 feet.' },
        { q: 'Solve: 2(x − 1)² = 18', c: ['x = 4 or x = −2', 'x = 4 only', 'x = 10 or x = −8', 'x = 2 or x = −4'], why: 'Divide by 2: (x − 1)² = 9. So x − 1 = ±3, and x = 4 or x = −2.' },
        { q: 'Solve: x² − 50 = −1', c: ['x = ±7', 'x = ±√51', 'x = ±49', 'No real solution'], why: 'Add 50 to both sides: x² = 49. Then x = ±7.' },
        { q: 'A ball dropped from a balcony falls 16t² feet in t seconds. How long does it take to fall 64 feet?', c: ['2 seconds', '4 seconds', '±2 seconds', '8 seconds'], why: '16t² = 64 → t² = 4 → t = ±2. Time cannot be negative, so 2 seconds.' },
        { q: 'Solve: x² = 0.25', c: ['x = ±0.5', 'x = ±0.125', 'x = ±0.05', 'x = 0.5 only'], why: '0.5 × 0.5 = 0.25, and (−0.5)(−0.5) = 0.25.' },
        { q: 'Solve: x² = 9/16', c: ['x = ±3/4', 'x = ±9/4', 'x = ±3/16', 'x = 3/4 only'], why: 'Take the root of the top and bottom: √9 = 3 and √16 = 4. So x = ±3/4.' },
        { q: 'Which equation has NO real solution?', c: ['x² + 4 = 0', 'x² − 4 = 0', 'x² = 4', 'x² − 4 = 5'], why: 'x² + 4 = 0 means x² = −4. No real number squared is negative.' },
        { q: 'Solve: (x + 1)² = 7', c: ['x = −1 ± √7', 'x = 1 ± √7', 'x = ±√7', 'x = 6 or x = −8'], why: 'x + 1 = ±√7. Subtract 1 from both sides: x = −1 ± √7.' },
      ],
      realLife: {
        text: `<p>Square roots solve problems where something gets squared.</p>
          <ul><li><b>Square rooms:</b> a square bedroom floor covers 121 square feet. Side² = 121, so each wall is 11 feet long.</li>
          <li><b>Falling objects:</b> a ball dropped from high up falls about 16t² feet in t seconds. From 144 feet up, 16t² = 144, so t² = 9 and the ball lands in 3 seconds.</li>
          <li><b>Square patio:</b> 225 square feet of tiles fills a square patio with 15-foot sides.</li></ul>
          <p>In real life we often throw out the negative answer, because a length or a time cannot be negative.</p>`,
        prompt: 'A square garden has an area of 81 square meters. How long is each side? Explain why you only keep one of the two answers.',
      },
    },
    {
      key: 'a15-04',
      title: 'Vertex form',
      videos: [
        { id: '_QqhuLixNEk', title: 'Introduction to vertex form of a quadratic' },
        { id: '7QMoNY6FzvM', title: 'Graphing a parabola in vertex form' },
        { id: 'JdWEdb90V1s', title: 'Interpret quadratic models: Vertex form' },
      ],
      learn: `
        <p><b>Vertex form</b> is a way to write a quadratic that shows the vertex right away: <b>y = a(x − h)² + k</b>.</p>
        <ul>
          <li>The <b>vertex</b> is the point <b>(h, k)</b>.</li>
          <li>The <b>axis of symmetry</b> is the line x = h.</li>
          <li>If <b>a</b> is positive, the parabola opens up. If a is negative, it opens down.</li>
          <li>If a is bigger than 1 (or less than −1), the parabola is skinnier. If a is between −1 and 1, it is wider.</li>
        </ul>
        <p><b>Watch the sign of h!</b> The formula has a minus inside. So y = (x − 3)² has h = 3, but y = (x + 3)² has h = −3, because x + 3 = x − (−3). The k keeps its sign: + 5 means k = 5, and − 5 means k = −5.</p>
        <p><b>Worked example:</b> y = 2(x − 1)² − 8</p>
        <ol>
          <li>Vertex: h = 1 and k = −8, so the vertex is (1, −8).</li>
          <li>a = 2 is positive, so it opens up and (1, −8) is the lowest point.</li>
          <li>y-intercept: x = 0 gives y = 2(0 − 1)² − 8 = 2(1) − 8 = −6.</li>
          <li>Zeros: set y = 0. Then 2(x − 1)² = 8, so (x − 1)² = 4. That gives x − 1 = ±2, so x = 3 or x = −1.</li>
        </ol>
        <p>That last step is the square root method from the last lesson.</p>`,
      quiz: [
        { q: 'What is the vertex of y = (x − 4)² + 1?', c: ['(4, 1)', '(−4, 1)', '(1, 4)', '(4, −1)'], why: 'Match y = (x − h)² + k: h = 4 and k = 1. The vertex is (4, 1).' },
        { q: 'What is the vertex of y = (x + 2)² − 5?', c: ['(−2, −5)', '(2, −5)', '(−2, 5)', '(−5, −2)'], why: 'x + 2 = x − (−2), so h = −2. And k = −5. The vertex is (−2, −5).' },
        { q: 'What is the vertex of y = −3(x − 1)² + 6?', c: ['(1, 6)', '(−1, 6)', '(1, −6)', '(−3, 6)'], why: 'h = 1 and k = 6. The −3 is a, which controls the shape, not the vertex.' },
        { q: 'Does y = −3(x − 1)² + 6 open up or down?', c: ['Down', 'Up', 'Up — because of the + 6', 'It is a straight line'], why: 'a = −3 is negative, so the parabola opens down.' },
        { q: 'What is the axis of symmetry of y = 5(x − 2)² − 7?', c: ['x = 2', 'x = −2', 'y = −7', 'x = 5'], why: 'The axis is x = h. Here h = 2.' },
        { q: 'What is the vertex of y = x² + 3?', c: ['(0, 3)', '(3, 0)', '(0, −3)', '(−3, 0)'], why: 'This is y = (x − 0)² + 3. So h = 0 and k = 3.' },
        { q: 'What is the vertex of y = (x − 6)²?', c: ['(6, 0)', '(−6, 0)', '(0, 6)', '(0, −6)'], why: 'This is y = (x − 6)² + 0. So h = 6 and k = 0.' },
        { q: 'Which equation has its vertex at (3, −2)?', c: ['y = (x − 3)² − 2', 'y = (x + 3)² − 2', 'y = (x − 2)² + 3', 'y = (x + 3)² + 2'], why: 'Put h = 3 and k = −2 into y = (x − h)² + k.' },
        { q: 'Which equation has its vertex at (−1, 4) and opens down?', c: ['y = −(x + 1)² + 4', 'y = (x + 1)² + 4', 'y = −(x − 1)² + 4', 'y = −(x + 1)² − 4'], why: 'h = −1 gives (x + 1). k = 4 gives + 4. A negative a makes it open down.' },
        { q: 'What is the y-intercept of y = (x − 2)² + 3?', c: ['7', '3', '1', '−1'], why: 'Plug in x = 0: (0 − 2)² + 3 = 4 + 3 = 7.' },
        { q: 'What is the y-intercept of y = 2(x + 1)² − 3?', c: ['−1', '−3', '1', '5'], why: 'Plug in x = 0: 2(0 + 1)² − 3 = 2(1) − 3 = −1.' },
        { q: 'What are the zeros of y = (x − 3)² − 4?', c: ['x = 5 or x = 1', 'x = −5 or x = −1', 'x = 3 or x = −4', 'x = 7 or x = −1'], why: 'Set y = 0: (x − 3)² = 4. So x − 3 = ±2, and x = 5 or x = 1.' },
        { q: 'How many zeros does y = (x − 1)² + 2 have?', c: ['None — its lowest point is above the x-axis', 'Two', 'One', 'Three'], why: 'The vertex (1, 2) is above the x-axis, and the parabola opens up. It never reaches y = 0.' },
        { q: 'What is the greatest value of y = −(x − 4)² + 9?', c: ['9', '4', '−9', '−4'], why: 'It opens down, so the vertex (4, 9) is the top. The greatest y-value is 9.' },
        { q: 'Compare y = (x − 5)² + 1 with y = 3(x − 5)² + 1. The second one is…', c: ['skinnier, with the same vertex', 'wider, with the same vertex', 'moved 3 units up', 'flipped upside down'], why: 'Both have vertex (5, 1). a = 3 is bigger than 1, which makes the parabola skinnier.' },
        { q: 'Compare y = 0.5(x + 2)² with y = (x + 2)². The 0.5 makes the graph…', c: ['wider', 'skinnier', 'open down', 'move down 0.5'], why: 'An a between 0 and 1 squashes the parabola, so it looks wider. The vertex stays at (−2, 0).' },
        { q: 'Leo says y = (x + 7)² + 1 has its vertex at (7, 1). What is his mistake?', c: ['h is −7, because x + 7 = x − (−7)', 'k should be −1', 'The vertex should be (1, 7)', 'There is no mistake'], why: 'The form has x − h. A plus sign inside means h is negative. The vertex is (−7, 1).' },
        { q: 'A ball\'s height is h = −5(t − 2)² + 20 meters after t seconds. What is its highest point?', c: ['20 meters, at 2 seconds', '2 meters, at 20 seconds', '−5 meters, at 2 seconds', '20 meters, at −2 seconds'], why: 'The vertex is (2, 20). Time comes first, height second: 20 meters at t = 2.' },
        { q: 'Same ball, h = −5(t − 2)² + 20. When does it hit the ground?', c: ['t = 4 seconds', 't = 2 seconds', 't = 6 seconds', 't = 20 seconds'], why: 'Set h = 0: (t − 2)² = 4, so t = 0 or t = 4. It lands at 4 seconds.' },
        { q: 'Rewrite y = (x − 1)² + 2 in standard form.', c: ['y = x² − 2x + 3', 'y = x² + 3', 'y = x² − 2x + 1', 'y = x² + 2x + 3'], why: '(x − 1)² = x² − 2x + 1. Add 2: x² − 2x + 3.' },
        { q: 'What are the vertex and direction of y = −2(x + 3)² − 1?', c: ['(−3, −1), opens down', '(3, −1), opens down', '(−3, −1), opens up', '(−3, 1), opens down'], why: 'h = −3, k = −1, and a = −2 is negative, so it opens down.' },
        { q: 'A parabola has its vertex at (0, 0), opens up, and is skinnier than y = x². Which equation fits?', c: ['y = 4x²', 'y = 0.25x²', 'y = −4x²', 'y = x² + 4'], why: 'a = 4 is positive (opens up) and bigger than 1 (skinnier). No shifts keep the vertex at (0, 0).' },
        { q: 'A parabola has its vertex at (2, 5) and passes through (3, 7). What is a?', c: ['a = 2', 'a = 7', 'a = 12', 'a = −2'], why: 'Plug in: 7 = a(3 − 2)² + 5. So 7 = a + 5, and a = 2.' },
        { q: 'In y = a(x − h)² + k, which letter tells how high or low the vertex sits?', c: ['k', 'h', 'a', 'x'], why: 'k is the y-value of the vertex. h moves it left or right, and a sets the shape.' },
      ],
      realLife: {
        text: `<p>Vertex form is perfect when the top or the bottom is what you care about.</p>
          <ul><li><b>Basketball:</b> h = −0.2(x − 6)² + 14 says the ball's highest point is 14 feet up, 6 feet out from the shooter.</li>
          <li><b>Skate ramp:</b> a half-pipe shaped like y = 0.25(x − 4)² has its lowest point at (4, 0), right in the middle.</li>
          <li><b>Fountains:</b> designers pick where the water should peak first. That is the vertex. Then they choose a to make the arc wide or narrow.</li></ul>
          <p>Read the vertex, and you know the most important point.</p>`,
        prompt: 'A drone flies along the path y = −2(x − 3)² + 18. What is its highest point, and how did you read it from the equation?',
      },
    },
    {
      key: 'a15-05',
      title: 'Solving quadratics by factoring',
      videos: [
        { id: 'uktzcTg_N7U', title: 'Solving quadratics by factoring' },
        { id: 'N30tN9158Kc', title: 'Solving a quadratic by factoring' },
        { id: 'KbFwLvCOBUI', title: 'Solving quadratics by factoring: leading coefficient ≠ 1' },
      ],
      learn: `
        <p>To solve a <b>quadratic equation</b> (an equation with an x² term) by factoring:</p>
        <ol>
          <li>Move everything to one side so the other side is <b>0</b>. This is <b>standard form</b> (ax² + bx + c = 0).</li>
          <li><b>Factor</b> (rewrite it as a product, like you learned last unit).</li>
          <li>Use the <b>zero product property</b>: set each factor equal to 0.</li>
          <li>Solve each small equation.</li>
          <li>Check by plugging your answers back in.</li>
        </ol>
        <p><b>Worked example:</b> x² + 2x = 15</p>
        <ol>
          <li>Subtract 15: x² + 2x − 15 = 0</li>
          <li>Find two numbers that multiply to −15 and add to 2: <b>5 and −3</b>. So (x + 5)(x − 3) = 0.</li>
          <li>x + 5 = 0 or x − 3 = 0</li>
          <li>x = −5 or x = 3</li>
          <li>Check x = 3: 9 + 6 = 15. It works.</li>
        </ol>
        <p><b>Biggest mistake:</b> using the factors before the equation equals 0. If x(x + 2) = 15, you cannot say "x = 15." The trick only works with 0, because only 0 forces one factor to be 0.</p>
        <p><b>Do not divide by x.</b> In x² = 4x, move 4x over: x² − 4x = 0, so x(x − 4) = 0, and x = 0 or x = 4. Dividing by x would lose the answer x = 0.</p>`,
      quiz: [
        { q: 'Solve: x² + 5x + 6 = 0', c: ['x = −2 or x = −3', 'x = 2 or x = 3', 'x = −1 or x = −6', 'x = 6 or x = −1'], why: '2 and 3 multiply to 6 and add to 5: (x + 2)(x + 3) = 0. So x = −2 or x = −3.' },
        { q: 'Solve: x² − 7x + 10 = 0', c: ['x = 2 or x = 5', 'x = −2 or x = −5', 'x = 10 or x = 1', 'x = −7 or x = 10'], why: '−2 and −5 multiply to 10 and add to −7: (x − 2)(x − 5) = 0.' },
        { q: 'Solve: x² − x − 12 = 0', c: ['x = 4 or x = −3', 'x = −4 or x = 3', 'x = 6 or x = −2', 'x = 12 or x = −1'], why: '−4 and 3 multiply to −12 and add to −1: (x − 4)(x + 3) = 0.' },
        { q: 'Solve: x² + 3x − 10 = 0', c: ['x = −5 or x = 2', 'x = 5 or x = −2', 'x = −10 or x = 1', 'x = 5 or x = 2'], why: '5 and −2 multiply to −10 and add to 3: (x + 5)(x − 2) = 0.' },
        { q: 'What is the first step to solve x² + 4x = 21?', c: ['Subtract 21 so one side is 0', 'Factor x² + 4x right away', 'Divide both sides by x', 'Take the square root of 21'], why: 'The zero product property needs 0 on one side. Get x² + 4x − 21 = 0 first.' },
        { q: 'Solve: x² + 4x = 21', c: ['x = −7 or x = 3', 'x = 7 or x = −3', 'x = 21 or x = −4', 'x = 0 or x = −4'], why: 'x² + 4x − 21 = 0 factors as (x + 7)(x − 3) = 0. So x = −7 or x = 3.' },
        { q: 'Solve: x² − 9x = 0', c: ['x = 0 or x = 9', 'x = 9 only', 'x = ±3', 'x = −9 or x = 0'], why: 'Factor out x: x(x − 9) = 0. So x = 0 or x = 9.' },
        { q: 'Solve: x² = 6x', c: ['x = 0 or x = 6', 'x = 6 only', 'x = ±√6', 'x = −6 or x = 0'], why: 'x² − 6x = 0 → x(x − 6) = 0. Dividing by x would lose the answer x = 0.' },
        { q: 'Solve by factoring: x² − 25 = 0', c: ['x = 5 or x = −5', 'x = 5 only', 'x = 25 or x = −25', 'x = 12.5'], why: 'Difference of squares: (x + 5)(x − 5) = 0. So x = −5 or x = 5.' },
        { q: 'Solve: x² + 10x + 25 = 0', c: ['x = −5 only', 'x = 5 only', 'x = ±5', 'x = −10 or x = −25'], why: 'Perfect square: (x + 5)² = 0. Both factors give x = −5, so there is one answer.' },
        { q: 'Solve: 2x² + 7x + 3 = 0', c: ['x = −1/2 or x = −3', 'x = 1/2 or x = 3', 'x = −1 or x = −3', 'x = −2 or x = −3'], why: 'It factors as (2x + 1)(x + 3) = 0. 2x + 1 = 0 gives x = −1/2.' },
        { q: 'Solve: 3x² − 12 = 0', c: ['x = 2 or x = −2', 'x = 4 or x = −4', 'x = 2 only', 'x = 3 or x = 4'], why: 'Factor out 3: 3(x² − 4) = 3(x + 2)(x − 2) = 0. So x = ±2.' },
        { q: 'Solve: 2x² − 10x + 12 = 0', c: ['x = 2 or x = 3', 'x = −2 or x = −3', 'x = 4 or x = 6', 'x = 1 or x = 6'], why: 'Factor out 2 first: 2(x − 2)(x − 3) = 0. The 2 cannot be 0, so x = 2 or x = 3.' },
        { q: 'Kai factored x² − 2x − 8 = 0 into (x − 4)(x + 2) = 0, then wrote x = −4 or x = 2. What went wrong?', c: ['The signs — the answers are x = 4 and x = −2', 'The factoring is wrong', 'He should have added 4 and 2', 'Nothing — he is right'], why: 'x − 4 = 0 gives x = 4. x + 2 = 0 gives x = −2.' },
        { q: 'Jada says x(x − 3) = 10 means x = 10 or x − 3 = 10. Why is that wrong?', c: ['The zero product property only works when one side is 0', 'She should have divided by 3', 'x can never be 10', 'It is right'], why: 'Many pairs multiply to 10, like 2 and 5. Only 0 forces one factor to be a set value.' },
        { q: 'Solve correctly: x(x − 3) = 10', c: ['x = 5 or x = −2', 'x = 10 or x = 13', 'x = −5 or x = 2', 'x = 0 or x = 3'], why: 'x² − 3x − 10 = 0 → (x − 5)(x + 2) = 0. So x = 5 or x = −2.' },
        { q: 'Which equation has the solutions x = 3 and x = −4?', c: ['(x − 3)(x + 4) = 0', '(x + 3)(x − 4) = 0', '(x − 3)(x − 4) = 0', '(x + 3)(x + 4) = 0'], why: 'x = 3 comes from (x − 3). x = −4 comes from (x + 4).' },
        { q: 'Which standard-form equation has the solutions x = 3 and x = −4?', c: ['x² + x − 12 = 0', 'x² − x − 12 = 0', 'x² + 7x − 12 = 0', 'x² − 12 = 0'], why: '(x − 3)(x + 4) = x² + 4x − 3x − 12 = x² + x − 12.' },
        { q: 'A rectangle is 3 feet longer than it is wide. Its area is 40 square feet. How wide is it?', c: ['5 feet', '8 feet', '−8 feet', '40 feet'], why: 'w(w + 3) = 40 becomes (w + 8)(w − 5) = 0. A width cannot be negative, so w = 5.' },
        { q: 'Solve: x² − 14x + 49 = 0', c: ['x = 7 only', 'x = −7 only', 'x = ±7', 'x = 14 or x = 49'], why: 'Perfect square: (x − 7)² = 0. So x = 7.' },
        { q: 'Solve: x² + x = 0', c: ['x = 0 or x = −1', 'x = −1 only', 'x = 0 or x = 1', 'x = 1 only'], why: 'Factor out x: x(x + 1) = 0. So x = 0 or x = −1.' },
        { q: 'Solve: 4x² − 9 = 0', c: ['x = 3/2 or x = −3/2', 'x = 9/4 or x = −9/4', 'x = 3 or x = −3', 'x = 2/3 or x = −2/3'], why: 'Difference of squares: (2x + 3)(2x − 3) = 0. So 2x = ±3, and x = ±3/2.' },
        { q: 'Solve: x² − 8x + 15 = 0', c: ['x = 3 or x = 5', 'x = −3 or x = −5', 'x = 1 or x = 15', 'x = 8 or x = 15'], why: '−3 and −5 multiply to 15 and add to −8: (x − 3)(x − 5) = 0.' },
        { q: 'After you find two answers, how can you check them?', c: ['Plug each one back into the original equation', 'Add them together', 'Make sure both are positive', 'Square each one'], why: 'If an answer makes the original equation true, it is right. Answers can be negative.' },
      ],
      realLife: {
        text: `<p>Factoring solves "work backward from the area" problems.</p>
          <ul><li><b>Picture frame:</b> a frame is 2 inches longer than it is wide and covers 48 square inches. w(w + 2) = 48 gives w = 6, so it is 6 by 8 inches.</li>
          <li><b>Garden plot:</b> a plot is 5 feet longer than it is wide and covers 84 square feet. x(x + 5) = 84 gives x = 7, so it is 7 by 12 feet.</li>
          <li><b>Kicked ball:</b> h = −5t² + 15t factors to −5t(t − 3). It is on the ground at t = 0 and t = 3 seconds.</li></ul>
          <p>Throw out any answer that makes no sense, like a negative length.</p>`,
        prompt: 'A rectangle is 4 feet longer than it is wide, and its area is 60 square feet. Find the width and explain why you throw out one answer.',
      },
    },
    {
      key: 'a15-06',
      title: 'The quadratic formula and the discriminant',
      videos: [
        { id: 'iulx0z1lz8M', title: 'Example 1: Using the quadratic formula' },
        { id: 'CLrImGKeuEI', title: 'Example 2: Using the quadratic formula' },
        { id: '1213qW5k55I', title: 'Discriminant for types of solutions for a quadratic' },
      ],
      learn: `
        <p>Some quadratics will not factor nicely. The <b>quadratic formula</b> (a formula that solves <i>any</i> quadratic equation) always works:</p>
        <p><b>x = (−b ± √(b² − 4ac)) / (2a)</b></p>
        <p>First write the equation in <b>standard form</b>, ax² + bx + c = 0. Then read off a, b, and c, with their signs.</p>
        <p><b>Worked example:</b> 2x² + 3x − 2 = 0. So a = 2, b = 3, and c = −2.</p>
        <ol>
          <li>b² − 4ac = 3² − 4(2)(−2) = 9 + 16 = 25</li>
          <li>x = (−3 ± √25) / (2 · 2) = (−3 ± 5) / 4</li>
          <li>x = (−3 + 5) / 4 = 2/4 = 1/2, or x = (−3 − 5) / 4 = −8/4 = −2</li>
        </ol>
        <p><b>The discriminant</b> (the part under the square root, b² − 4ac) tells you how many real solutions there are before you finish:</p>
        <ul>
          <li><b>Positive</b> → 2 solutions. The parabola crosses the x-axis twice.</li>
          <li><b>Zero</b> → 1 solution. The vertex just touches the x-axis.</li>
          <li><b>Negative</b> → no real solutions. You cannot take the square root of a negative, and the parabola never reaches the x-axis.</li>
        </ul>
        <p><b>Careful:</b> when b is negative, −b is positive. And (−4)² = 16, not −16.</p>`,
      quiz: [
        { q: 'In 3x² − 5x + 2 = 0, what are a, b, and c?', c: ['a = 3, b = −5, c = 2', 'a = 3, b = 5, c = 2', 'a = 2, b = −5, c = 3', 'a = 3, b = −5, c = −2'], why: 'a goes with x², b goes with x, and c is the plain number. Keep the signs.' },
        { q: 'Write x² + 7 = 4x in standard form. What are a, b, and c?', c: ['a = 1, b = −4, c = 7', 'a = 1, b = 4, c = 7', 'a = 1, b = 7, c = −4', 'a = 0, b = −4, c = 7'], why: 'Subtract 4x: x² − 4x + 7 = 0. So a = 1, b = −4, c = 7.' },
        { q: 'Which is the quadratic formula?', c: ['x = (−b ± √(b² − 4ac)) / (2a)', 'x = (b ± √(b² − 4ac)) / (2a)', 'x = (−b ± √(b² + 4ac)) / (2a)', 'x = (−b ± √(b² − 4ac)) / a'], why: 'Negative b, plus or minus the root of b² − 4ac, all over 2a.' },
        { q: 'The discriminant of ax² + bx + c = 0 is…', c: ['b² − 4ac', '−b / (2a)', '2a', 'b² + 4ac'], why: 'The discriminant is the part under the square root in the formula: b² − 4ac.' },
        { q: 'Find the discriminant of x² + 6x + 5 = 0.', c: ['16', '56', '−16', '4'], why: 'b² − 4ac = 6² − 4(1)(5) = 36 − 20 = 16.' },
        { q: 'Find the discriminant of x² − 4x + 4 = 0.', c: ['0', '32', '−32', '8'], why: '(−4)² − 4(1)(4) = 16 − 16 = 0.' },
        { q: 'Find the discriminant of 2x² + x + 3 = 0.', c: ['−23', '25', '23', '−5'], why: '1² − 4(2)(3) = 1 − 24 = −23.' },
        { q: 'The discriminant is 49. How many real solutions are there?', c: ['Two', 'One', 'None', 'Seven'], why: 'A positive discriminant means two real solutions.' },
        { q: 'The discriminant is −12. How many real solutions are there?', c: ['None', 'Two', 'One', 'Two negative ones'], why: 'A negative discriminant means you would need the square root of a negative. No real solutions.' },
        { q: 'The discriminant is 0. What does the graph do?', c: ['Touches the x-axis at exactly one point, the vertex', 'Crosses the x-axis twice', 'Never touches the x-axis', 'Goes through the origin'], why: 'Zero discriminant means one solution. The vertex sits right on the x-axis.' },
        { q: 'How many real solutions does x² + 2x + 5 = 0 have?', c: ['None', 'Two', 'One', 'Five'], why: '2² − 4(1)(5) = 4 − 20 = −16. Negative means no real solutions.' },
        { q: 'How many real solutions does x² − 6x + 9 = 0 have?', c: ['One', 'Two — 3 and −3', 'None', 'Two — 6 and 9'], why: '(−6)² − 4(1)(9) = 36 − 36 = 0. Zero means one solution (x = 3).' },
        { q: 'How many real solutions does 3x² − 2x − 1 = 0 have?', c: ['Two', 'One', 'None', 'Three'], why: '(−2)² − 4(3)(−1) = 4 + 12 = 16. Positive means two solutions.' },
        { q: 'Use the formula to solve x² + 6x + 5 = 0.', c: ['x = −1 or x = −5', 'x = 1 or x = 5', 'x = 5 or x = −1', 'x = −2 or x = −10'], why: 'x = (−6 ± √16) / 2 = (−6 ± 4) / 2. That gives −1 or −5.' },
        { q: 'Use the formula to solve x² − 2x − 3 = 0.', c: ['x = 3 or x = −1', 'x = −3 or x = 1', 'x = 6 or x = −2', 'x = 1 or x = −1'], why: 'b² − 4ac = 4 + 12 = 16. x = (2 ± 4) / 2, so x = 3 or x = −1.' },
        { q: 'Use the formula to solve 2x² − 5x + 2 = 0.', c: ['x = 2 or x = 1/2', 'x = −2 or x = −1/2', 'x = 8 or x = 2', 'x = 4 or x = 1'], why: 'b² − 4ac = 25 − 16 = 9. x = (5 ± 3) / 4, so x = 2 or x = 1/2.' },
        { q: 'Use the formula on x² − 4x + 1 = 0. What do you get?', c: ['x = (4 ± √12) / 2', 'x = (−4 ± √12) / 2', 'x = (4 ± √20) / 2', 'No real solution'], why: '−b = 4. b² − 4ac = 16 − 4 = 12. Over 2a = 2.' },
        { q: 'Use the formula to solve x² + 4x − 5 = 0.', c: ['x = 1 or x = −5', 'x = −1 or x = 5', 'x = 2 or x = −10', 'x = 5 or x = 1'], why: 'b² − 4ac = 16 + 20 = 36. x = (−4 ± 6) / 2, so x = 1 or x = −5.' },
        { q: 'A student finds the discriminant of x² − 3x + 2 = 0 as (−3)² − 4(1)(2) = −9 − 8. What went wrong?', c: ['(−3)² is +9, not −9', 'She should add 4ac', 'a should be 2', 'Nothing — she is right'], why: 'A negative squared is positive: (−3)(−3) = 9. The discriminant is 9 − 8 = 1.' },
        { q: 'When is the quadratic formula the best choice?', c: ['When the quadratic does not factor easily', 'Only when b = 0', 'Only when a is negative', 'Never — factoring always works'], why: 'The formula works on every quadratic. It is the go-to tool when factoring gets stuck.' },
        { q: 'A ball\'s height is h = −5t² + 10t + 15 meters after t seconds. When does it hit the ground?', c: ['3 seconds', '1 second', '−1 second', '15 seconds'], why: 'Divide by −5: t² − 2t − 3 = 0, so t = 3 or t = −1. Time cannot be negative.' },
        { q: 'x² + bx + 9 = 0 has exactly one solution. Which could b be?', c: ['6', '9', '3', '0'], why: 'One solution means b² − 4ac = 0. So b² − 36 = 0, and b = 6 (or −6).' },
        { q: 'The graph of y = x² + 1 never touches the x-axis. What does that say about the discriminant of x² + 1 = 0?', c: ['It is negative', 'It is zero', 'It is positive', 'It is 1'], why: 'No x-intercepts means no real solutions. Check: 0² − 4(1)(1) = −4.' },
        { q: 'In the formula, what does ± tell you to do?', c: ['Work it out once with + and once with −', 'Pick whichever sign you like', 'Add and subtract to get 0', 'Use only + when b is positive'], why: 'The ± gives the two solutions: one using + and one using −.' },
      ],
      realLife: {
        text: `<p>Real problems rarely factor nicely. That is why scientists and engineers use the quadratic formula.</p>
          <ul><li><b>Sports:</b> a ball kicked from 1 meter up has height h = −4.9t² + 15t + 1. The formula says it lands after about 3.13 seconds.</li>
          <li><b>Will it get that high?</b> Does the same ball ever reach 15 meters? Solving −4.9t² + 15t + 1 = 15 gives a negative discriminant. So the answer is no.</li>
          <li><b>Game design:</b> a game checks the discriminant to see if a jumping character's path ever touches a platform.</li></ul>
          <p>The discriminant answers yes-or-no questions without finishing the problem.</p>`,
        prompt: 'A thrown ball never reaches 20 feet high. What would the discriminant tell you when you solve height = 20, and why does that make sense?',
      },
    },
    {
      key: 'a15-07',
      title: 'Completing the square',
      videos: [
        { id: 'VvuuRpJbbHE', title: 'Example 1: Completing the square' },
        { id: 'wupekgmKRbA', title: 'Solving by completing the square: rational solutions' },
        { id: 'KouDAzYl_bc', title: 'Worked example: Solving equations by completing the square' },
      ],
      learn: `
        <p>A <b>perfect square trinomial</b> (a three-term expression that factors into a group squared) looks like x² + 6x + 9 = (x + 3)². Notice: half of 6 is 3, and 3² = 9.</p>
        <p><b>Completing the square</b> (adding the right number to make a perfect square trinomial) lets you solve any quadratic with the square root method.</p>
        <p><b>Steps</b> (when the number in front of x² is 1):</p>
        <ol>
          <li>Move the plain number to the right side.</li>
          <li>Take half of b (the number in front of x) and square it.</li>
          <li>Add that to <b>both</b> sides.</li>
          <li>Write the left side as (x + half of b)².</li>
          <li>Take the square root (remember ±) and solve.</li>
        </ol>
        <p><b>Worked example:</b> x² + 6x − 7 = 0</p>
        <ol>
          <li>Add 7: x² + 6x = 7</li>
          <li>Half of 6 is 3, and 3² = 9.</li>
          <li>Add 9 to both sides: x² + 6x + 9 = 16</li>
          <li>Factor: (x + 3)² = 16</li>
          <li>x + 3 = ±4, so x = 1 or x = −7.</li>
        </ol>
        <p>If the number in front of x² is not 1, divide every term by it first.</p>
        <p>Completing the square is also how you change standard form into <b>vertex form</b>: x² + 6x − 7 = (x + 3)² − 16, so the vertex is (−3, −16).</p>`,
      quiz: [
        { q: 'What number completes the square? x² + 8x + ___', c: ['16', '8', '4', '64'], why: 'Half of 8 is 4, and 4² = 16. So x² + 8x + 16 = (x + 4)².' },
        { q: 'What number completes the square? x² + 10x + ___', c: ['25', '10', '5', '100'], why: 'Half of 10 is 5, and 5² = 25.' },
        { q: 'What number completes the square? x² − 6x + ___', c: ['9', '−9', '36', '3'], why: 'Half of −6 is −3, and (−3)² = +9. The added number is always positive.' },
        { q: 'What number completes the square? x² + 3x + ___', c: ['9/4', '3/2', '9', '6'], why: 'Half of 3 is 3/2, and (3/2)² = 9/4.' },
        { q: 'Factor: x² + 12x + 36', c: ['(x + 6)²', '(x + 12)²', '(x + 18)²', '(x + 6)(x − 6)'], why: 'Half of 12 is 6, and 6² = 36. So it is (x + 6)².' },
        { q: 'Factor: x² − 14x + 49', c: ['(x − 7)²', '(x + 7)²', '(x − 14)²', '(x − 49)²'], why: 'Half of −14 is −7, and (−7)² = 49. So it is (x − 7)².' },
        { q: 'To complete the square on x² + 4x = 5, what do you add to both sides?', c: ['4', '2', '16', '5'], why: 'Half of 4 is 2, and 2² = 4.' },
        { q: 'Solve x² + 4x = 5 by completing the square.', c: ['x = 1 or x = −5', 'x = −1 or x = 5', 'x = −2 ± √5', 'x = 3 or x = −3'], why: 'Add 4 to both sides: (x + 2)² = 9. So x + 2 = ±3, and x = 1 or x = −5.' },
        { q: 'Why must you add the same number to both sides?', c: ['To keep the equation balanced', 'To make the answer positive', 'To get rid of the x²', 'To make the right side 0'], why: 'Whatever you do to one side of an equation, you must do to the other.' },
        { q: 'Solve x² − 8x + 3 = 0 by completing the square.', c: ['x = 4 ± √13', 'x = −4 ± √13', 'x = 4 ± √19', 'x = 4 ± 13'], why: 'x² − 8x = −3. Add 16: (x − 4)² = 13. So x − 4 = ±√13.' },
        { q: 'Solve x² − 2x − 8 = 0 by completing the square.', c: ['x = 4 or x = −2', 'x = −4 or x = 2', 'x = 1 ± √8', 'x = 9 or x = −9'], why: 'x² − 2x = 8. Add 1: (x − 1)² = 9. So x = 1 ± 3, which is 4 or −2.' },
        { q: 'Start with x² + 6x = 16. After adding 9 to both sides, you get…', c: ['(x + 3)² = 25', '(x + 3)² = 16', '(x + 6)² = 25', '(x + 9)² = 25'], why: 'The left side becomes x² + 6x + 9 = (x + 3)². The right side is 16 + 9 = 25.' },
        { q: 'Rewrite x² + 10x + 21 in vertex form.', c: ['(x + 5)² − 4', '(x + 5)² + 21', '(x + 10)² − 79', '(x − 5)² − 4'], why: '(x + 5)² = x² + 10x + 25. You only want + 21, so subtract 4.' },
        { q: 'What is the vertex of y = x² + 10x + 21?', c: ['(−5, −4)', '(5, −4)', '(−5, 21)', '(−10, 21)'], why: 'In vertex form it is y = (x + 5)² − 4. So h = −5 and k = −4.' },
        { q: 'Rewrite y = x² − 4x + 7 in vertex form.', c: ['y = (x − 2)² + 3', 'y = (x + 2)² + 3', 'y = (x − 2)² + 7', 'y = (x − 4)² + 7'], why: '(x − 2)² = x² − 4x + 4. You need + 7, so add 3 more.' },
        { q: 'What is the vertex of y = x² − 4x + 7?', c: ['(2, 3)', '(−2, 3)', '(2, 7)', '(4, 7)'], why: 'Vertex form is y = (x − 2)² + 3. So the vertex is (2, 3).' },
        { q: 'What is the first step to solve 3x² − 12x − 15 = 0 by completing the square?', c: ['Divide every term by 3', 'Add 36 to both sides', 'Take the square root', 'Subtract 12x'], why: 'The method needs 1 in front of x². Dividing by 3 gives x² − 4x − 5 = 0.' },
        { q: 'Solve: 3x² − 12x − 15 = 0', c: ['x = 5 or x = −1', 'x = −5 or x = 1', 'x = 2 ± √5', 'x = 15 or x = −3'], why: 'Divide by 3: x² − 4x = 5. Add 4: (x − 2)² = 9. So x = 5 or x = −1.' },
        { q: 'Tom completed the square on x² + 6x = 2 and wrote (x + 3)² = 2. What did he forget?', c: ['To add 9 to the right side too', 'To divide by 6', 'To take half of 2', 'Nothing — it is right'], why: 'He added 9 on the left only. It should be (x + 3)² = 11.' },
        { q: 'Solve x² + 2x = 0 by completing the square.', c: ['x = 0 or x = −2', 'x = 0 or x = 2', 'x = −1 only', 'x = ±1'], why: 'Add 1: (x + 1)² = 1. So x + 1 = ±1, and x = 0 or x = −2.' },
        { q: 'Solve: x² + 6x + 9 = 25', c: ['x = 2 or x = −8', 'x = −2 or x = 8', 'x = 22 or x = −28', 'x = 5 or x = −5'], why: 'The left side is already (x + 3)². So x + 3 = ±5, and x = 2 or x = −8.' },
        { q: 'Why is it called "completing the square"?', c: ['You add the missing piece that turns x² + bx into a perfect square', 'You draw a square on the graph', 'You square both answers at the end', 'You multiply everything by 4'], why: 'With algebra tiles, x² + bx is a square with a corner missing. You add that corner.' },
        { q: 'x² + bx + 49 is a perfect square, and b is positive. What is b?', c: ['14', '7', '49', '98'], why: '49 = 7², so the square is (x + 7)² = x² + 14x + 49.' },
        { q: 'Complete the square on x² − 10x = 11. Which equation do you get?', c: ['(x − 5)² = 36', '(x − 5)² = 11', '(x − 10)² = 111', '(x + 5)² = 36'], why: 'Half of −10 is −5, and (−5)² = 25. Add 25 to both sides: (x − 5)² = 36.' },
      ],
      realLife: {
        text: `<p>Completing the square finds the <b>best</b> value: the most, the least, or the highest.</p>
          <ul><li><b>Fundraiser:</b> a club selling samosas finds its profit is P = −10x² + 120x − 200 dollars at a price of x dollars. Completing the square gives P = −10(x − 6)² + 160. The best price is $6, for $160 profit.</li>
          <li><b>Video games:</b> a jump y = −x² + 8x becomes y = −(x − 4)² + 16. The top of the jump is 16 units high.</li>
          <li><b>Math history:</b> completing the square on ax² + bx + c = 0 is how the quadratic formula was found.</li></ul>`,
        prompt: 'A jump in a video game follows y = −x² + 6x. Complete the square to find the highest point, and explain each step.',
      },
    },
    {
      key: 'a15-08',
      title: 'Standard form, features, and choosing a method',
      videos: [
        { id: 'eRbgHCaWQQE', title: 'Worked examples: Forms & features of quadratic functions' },
        { id: 'UdLYAqN0gNY', title: 'Comparing features of quadratic functions' },
        { id: '_MllyJivas4', title: 'Strategy in solving quadratic equations' },
      ],
      learn: `
        <p>A quadratic can be written three ways. Each form shows something different:</p>
        <ul>
          <li><b>Standard form</b> y = ax² + bx + c shows the <b>y-intercept</b>: it is c. The vertex is at x = −b / (2a).</li>
          <li><b>Factored form</b> y = a(x − p)(x − q) shows the <b>zeros</b>: x = p and x = q.</li>
          <li><b>Vertex form</b> y = a(x − h)² + k shows the <b>vertex</b>: (h, k).</li>
        </ul>
        <p>In all three, the sign of a tells you if it opens up (positive) or down (negative).</p>
        <p><b>Worked example:</b> y = x² − 6x + 5</p>
        <ol>
          <li>y-intercept: c = 5, so (0, 5).</li>
          <li>Vertex: x = −(−6) / (2 · 1) = 3. Then y = 9 − 18 + 5 = −4. The vertex is (3, −4).</li>
          <li>Zeros: factor to (x − 1)(x − 5), so x = 1 and x = 5.</li>
        </ol>
        <p>All three forms describe the same parabola: x² − 6x + 5 = (x − 1)(x − 5) = (x − 3)² − 4.</p>
        <p><b>Which method should I use to solve?</b></p>
        <ul>
          <li>No x term, like x² = 20? Use <b>square roots</b>.</li>
          <li>Factors easily? Use <b>factoring</b>.</li>
          <li>Already in vertex form? Use <b>square roots</b> on the squared part.</li>
          <li>Stuck, or messy numbers? The <b>quadratic formula</b> always works.</li>
        </ul>`,
      quiz: [
        { q: 'What is the y-intercept of y = 2x² − 3x + 7?', c: ['7', '2', '−3', '0'], why: 'In standard form, c is the y-intercept. Check: x = 0 gives 0 − 0 + 7 = 7.' },
        { q: 'For y = x² + 4x + 1, what is the x-value of the vertex?', c: ['x = −2', 'x = 2', 'x = −4', 'x = 4'], why: 'x = −b / (2a) = −4 / (2 · 1) = −2.' },
        { q: 'What is the vertex of y = x² + 4x + 1?', c: ['(−2, −3)', '(2, 13)', '(−2, 1)', '(−2, 13)'], why: 'x = −2. Then y = (−2)² + 4(−2) + 1 = 4 − 8 + 1 = −3.' },
        { q: 'What is the vertex of y = −x² + 6x − 2?', c: ['(3, 7)', '(−3, −29)', '(3, 25)', '(3, −2)'], why: 'x = −6 / (2 · −1) = 3. Then y = −9 + 18 − 2 = 7.' },
        { q: 'Which form shows the zeros right away?', c: ['Factored form', 'Standard form', 'Vertex form', 'Slope-intercept form'], why: 'In y = a(x − p)(x − q), the zeros p and q are right there.' },
        { q: 'Which form shows the vertex right away?', c: ['Vertex form, y = a(x − h)² + k', 'Factored form, y = a(x − p)(x − q)', 'Standard form, y = ax² + bx + c', 'Slope-intercept form, y = mx + b'], why: 'In vertex form, the vertex is (h, k). You can read it without any work.' },
        { q: 'Which form shows the y-intercept right away?', c: ['Standard form — it is c', 'Vertex form — it is k', 'Factored form — it is p', 'Vertex form — it is h'], why: 'Plug x = 0 into ax² + bx + c and you get c.' },
        { q: 'Which equation is the same function as y = (x − 2)(x − 4)?', c: ['y = x² − 6x + 8', 'y = x² + 6x + 8', 'y = x² − 6x − 8', 'y = x² + 8'], why: 'FOIL: x² − 4x − 2x + 8 = x² − 6x + 8.' },
        { q: 'Which is y = (x − 2)(x − 4) written in vertex form?', c: ['y = (x − 3)² − 1', 'y = (x − 3)² + 8', 'y = (x + 3)² − 1', 'y = (x − 6)² + 8'], why: 'The axis is x = 3, and (3 − 2)(3 − 4) = −1. So the vertex is (3, −1).' },
        { q: 'What is the best method to solve x² − 30 = 0?', c: ['Square roots — there is no x term', 'Factoring — it factors nicely', 'Graphing only', 'Completing the square only'], why: 'Add 30: x² = 30. Then x = ±√30. Square roots is fastest.' },
        { q: 'What is the best method to solve x² + 7x + 12 = 0?', c: ['Factoring — (x + 3)(x + 4) works', 'Square roots — there is an x²', 'Graphing only', 'There is no method that works'], why: '3 and 4 multiply to 12 and add to 7. So x = −3 or x = −4.' },
        { q: 'What is the best method to solve x² + 3x − 5 = 0?', c: ['Quadratic formula — it does not factor nicely', 'Factoring — (x + 5)(x − 1)', 'Square roots — just take √5', 'Divide both sides by x'], why: 'No whole numbers multiply to −5 and add to 3. The formula always works.' },
        { q: 'What is the best method to solve (x − 4)² = 9?', c: ['Square roots on the squared part', 'Divide both sides by 4', 'Factor out an x', 'Subtract 9, then divide by x'], why: 'x − 4 = ±3, so x = 7 or x = 1. No expanding needed.' },
        { q: 'f(x) = x² − 2x − 3. Parabola g opens up with its vertex at (1, −6). Which has the lower minimum?', c: ['g — its lowest point is −6', 'f — its lowest point is −3', 'They are the same', 'f — because −4 is less than −6'], why: 'f has its vertex at x = 1: 1 − 2 − 3 = −4. g goes down to −6, which is lower.' },
        { q: 'f(x) = −x² + 4x. Parabola g has the table x: 1, 2, 3 and y: 6, 7, 6. Which has the greater maximum?', c: ['g — its max is 7, and f\'s max is 4', 'f — its max is at x = 4', 'They are equal — both turn at x = 2', 'f — its max is 8'], why: 'f turns at x = 2: −4 + 8 = 4. The table shows g turns at (2, 7). 7 is greater.' },
        { q: 'f(x) = (x − 1)(x − 7) and g(x) = (x + 2)(x − 4). Which axis of symmetry is farther right?', c: ['f — its axis is x = 4', 'g — its axis is x = 1', 'g — its axis is x = 3', 'They have the same axis'], why: 'f: (1 + 7) ÷ 2 = 4. g: (−2 + 4) ÷ 2 = 1. 4 is farther right.' },
        { q: 'For y = 3x² − 12x + 1, what is the x-value of the vertex?', c: ['x = 2', 'x = −2', 'x = 4', 'x = 6'], why: 'x = −b / (2a) = 12 / 6 = 2.' },
        { q: 'For y = ax² + bx + c, the axis of symmetry is…', c: ['x = −b / (2a)', 'x = b / (2a)', 'x = −2a / b', 'x = c'], why: 'This formula gives the x-value of the vertex, which is where the axis of symmetry is.' },
        { q: 'Ana wants the highest point of h = −16t² + 32t + 5. Which form shows it directly?', c: ['Vertex form', 'Factored form', 'Standard form, as written', 'Slope-intercept form'], why: 'Vertex form shows the vertex, and the vertex is the highest point of a parabola that opens down.' },
        { q: 'Find the highest point of h = −16t² + 32t + 5 (feet, seconds).', c: ['21 feet at t = 1 second', '5 feet at t = 0 seconds', '53 feet at t = 1 second', '21 feet at t = 2 seconds'], why: 't = −32 / (2 · −16) = 1. Then h = −16 + 32 + 5 = 21.' },
        { q: 'Which equation does NOT describe the same parabola as y = x² − 6x + 5?', c: ['y = (x + 1)(x + 5)', 'y = (x − 1)(x − 5)', 'y = (x − 3)² − 4', 'y = x² − 6x + 5'], why: '(x + 1)(x + 5) = x² + 6x + 5. The middle sign is wrong. The other choices all match: the factored and vertex forms expand back to x² − 6x + 5.' },
        { q: 'What are the zeros of y = x² − 8x + 12?', c: ['x = 2 and x = 6', 'x = −2 and x = −6', 'x = 4 and x = 3', 'x = 12 and x = 1'], why: '−2 and −6 multiply to 12 and add to −8: (x − 2)(x − 6). So x = 2 and x = 6.' },
        { q: 'What is the vertex of y = x² − 8x + 12?', c: ['(4, −4)', '(−4, 60)', '(4, 12)', '(8, 12)'], why: 'x = 8 / 2 = 4. Then y = 16 − 32 + 12 = −4.' },
        { q: 'A parabola opens down and its vertex is (2, −3). How many real solutions does y = 0 have?', c: ['None — the top is below the x-axis', 'Two', 'One', 'It depends on c'], why: 'The highest point is at y = −3, so the parabola never reaches the x-axis.' },
      ],
      realLife: {
        text: `<p>Picking a form is like picking the right tool from a toolbox.</p>
          <ul><li><b>How high does a kick go?</b> A coach uses <b>vertex form</b>, because the vertex is the top.</li>
          <li><b>Where does the ball land?</b> Use <b>factored form</b>. The zeros are where the ball is on the ground.</li>
          <li><b>Where does it start?</b> Use <b>standard form</b>. The c tells you the starting height at time 0.</li></ul>
          <p>It is the same parabola every time. Three different questions call for three different forms.</p>`,
        prompt: 'You throw a ball and want to know the highest point it reaches. Which form of a quadratic would you use, and why?',
      },
    },
    {
      key: 'a15-09',
      title: 'Transforming parabolas and solving f(x) = g(x) on a graph',
      videos: [
        { id: '99v51U3HSCU', title: 'Shifting and scaling parabolas' },
        { id: '573yqfOoMwE', title: 'Solving equations by graphing: intro' },
        { id: 'Cy1Pxz_wLfA', title: 'Quadratic systems: a line and a parabola' },
      ],
      learn: `
        <p>Every parabola is the <b>parent graph</b> (the simplest version) y = x², moved, stretched, or flipped. These changes are called <b>transformations</b> (ways to move or reshape a graph).</p>
        <ul>
          <li><b>y = x² + k</b> moves it <b>up</b> k (down if k is negative).</li>
          <li><b>y = (x − h)²</b> moves it <b>right</b> h. Careful: (x + 2)² moves it <b>left</b> 2.</li>
          <li><b>y = ax²</b> with a bigger than 1 <b>stretches</b> it (skinnier). With a between 0 and 1, it <b>shrinks</b> it (wider).</li>
          <li><b>y = −x²</b> <b>reflects</b> it (flips it upside down over the x-axis).</li>
        </ul>
        <p><b>Solving f(x) = g(x) on a graph:</b> graph both sides. The solutions are the <b>x-values where the graphs cross</b> (their intersection points).</p>
        <p><b>Worked example:</b> solve x² = x + 2.</p>
        <ol>
          <li>Graph f(x) = x² and g(x) = x + 2.</li>
          <li>They cross at (−1, 1) and (2, 4).</li>
          <li>So the solutions are <b>x = −1 and x = 2</b>. Use only the x-values!</li>
          <li>Check: (−1)² = 1 and −1 + 2 = 1. Also 2² = 4 and 2 + 2 = 4.</li>
        </ol>
        <p>A line can cross a parabola twice, touch it once, or miss it completely. That means 2, 1, or 0 solutions.</p>`,
      quiz: [
        { q: 'How does y = x² + 5 compare to y = x²?', c: ['Moved up 5', 'Moved down 5', 'Moved right 5', 'Moved left 5'], why: 'Adding 5 outside the square adds 5 to every y-value. The graph moves up 5.' },
        { q: 'How does y = x² − 3 compare to y = x²?', c: ['Moved down 3', 'Moved up 3', 'Moved left 3', 'Moved right 3'], why: 'Subtracting 3 outside the square lowers every y-value by 3.' },
        { q: 'How does y = (x − 4)² compare to y = x²?', c: ['Moved right 4', 'Moved left 4', 'Moved up 4', 'Moved down 4'], why: 'The vertex is now where x − 4 = 0, at x = 4. That is 4 to the right.' },
        { q: 'How does y = (x + 1)² compare to y = x²?', c: ['Moved left 1', 'Moved right 1', 'Moved up 1', 'Moved down 1'], why: 'The vertex is where x + 1 = 0, at x = −1. A plus inside moves it left.' },
        { q: 'How does y = −x² compare to y = x²?', c: ['Flipped upside down over the x-axis', 'Moved down 1', 'Moved left 1', 'Made wider'], why: 'The negative makes every y-value its opposite. The U flips to open down.' },
        { q: 'How does y = 3x² compare to y = x²?', c: ['Stretched — it looks skinnier', 'Shrunk — it looks wider', 'Moved up 3', 'Moved right 3'], why: 'Every y-value is tripled, so the arms rise faster. The parabola looks skinnier.' },
        { q: 'How does y = (1/4)x² compare to y = x²?', c: ['Shrunk — it looks wider', 'Stretched — it looks skinnier', 'Moved down 4', 'Flipped upside down'], why: 'Every y-value is a quarter as big, so the arms rise slowly. It looks wider.' },
        { q: 'Start with y = x². Move it right 2 and up 3. What is the new equation?', c: ['y = (x − 2)² + 3', 'y = (x + 2)² + 3', 'y = (x − 3)² + 2', 'y = (x + 2)² − 3'], why: 'Right 2 means (x − 2). Up 3 means + 3 outside.' },
        { q: 'Start with y = x². Flip it and move it down 1. What is the new equation?', c: ['y = −x² − 1', 'y = −x² + 1', 'y = x² − 1', 'y = −(x − 1)²'], why: 'Flip: −x². Down 1: subtract 1. Together: y = −x² − 1.' },
        { q: 'f(x) = x² and g(x) = f(x) + 6. How does g compare to f?', c: ['g is f moved up 6', 'g is f moved right 6', 'g is f stretched by 6', 'g is f moved left 6'], why: 'Adding 6 to the output raises every point by 6.' },
        { q: 'f(x) = x² and g(x) = f(x − 5). How does g compare to f?', c: ['Moved right 5', 'Moved left 5', 'Moved down 5', 'Moved up 5'], why: 'g(x) = (x − 5)². Subtracting inside moves the graph right.' },
        { q: 'The vertex of y = x² is (0, 0). What is the vertex of y = (x + 3)² − 2?', c: ['(−3, −2)', '(3, −2)', '(−3, 2)', '(3, 2)'], why: 'Left 3 and down 2 moves (0, 0) to (−3, −2).' },
        { q: 'On a graph, the solutions of f(x) = g(x) are…', c: ['the x-values where the two graphs cross', 'the y-values where the two graphs cross', 'the vertex of the parabola', 'where each graph crosses the y-axis'], why: 'Where the graphs cross, f and g give the same output for the same x. That x solves it.' },
        { q: 'f(x) = x² and g(x) = 4 cross at (−2, 4) and (2, 4). Solve x² = 4.', c: ['x = −2 or x = 2', 'x = 4 only', 'y = 4', 'x = 16'], why: 'Read the x-values of the crossing points: −2 and 2.' },
        { q: 'f(x) = x² − 2x + 4 and g(x) = 3x cross at (1, 3) and (4, 12). What are the solutions of f(x) = g(x)?', c: ['x = 1 and x = 4', 'x = 3 and x = 12', 'x = 1 and x = 3', 'x = 1 only'], why: 'The solutions are the x-values of the crossing points: 1 and 4.' },
        { q: 'A line misses a parabola completely. How many solutions does f(x) = g(x) have?', c: ['None', 'One', 'Two', 'Infinitely many'], why: 'No crossing points means no x-value where the two are equal.' },
        { q: 'A line just touches a parabola at one point. How many solutions does f(x) = g(x) have?', c: ['One', 'Two', 'None', 'Three'], why: 'One touching point gives exactly one x-value where they are equal.' },
        { q: 'y = x² and y = 2x + 3 cross at (−1, 1) and (3, 9). Solve x² = 2x + 3.', c: ['x = −1 or x = 3', 'x = 1 or x = 9', 'x = 1 or x = −3', 'x = 3 only'], why: 'Use the x-values: −1 and 3. Check: (−1)² = 1 = 2(−1) + 3, and 3² = 9 = 2(3) + 3.' },
        { q: 'Does the graph of y = x² ever meet the line y = −1?', c: ['No — x² is never negative', 'Yes, at x = −1', 'Yes, at x = 1 and x = −1', 'Yes, at the origin'], why: 'Any number squared is 0 or more, so y = x² never goes down to −1.' },
        { q: 'y = x² and y = x cross at (0, 0) and (1, 1). What are the solutions of x² = x?', c: ['x = 0 and x = 1', 'x = 1 only', 'x = 0 only', 'y = 0 and y = 1'], why: 'Both crossing points count: x = 0 and x = 1. Check: 0² = 0 and 1² = 1.' },
        { q: 'Lena says the solutions of x² = x + 2 are 1 and 4, because the graphs cross at (−1, 1) and (2, 4). What is wrong?', c: ['She used the y-values instead of the x-values', 'The graphs cross somewhere else', 'She should add the two points', 'Nothing — she is right'], why: 'The question asks for x. The crossing x-values are −1 and 2.' },
        { q: 'g(x) = −(x − 2)² + 5 is the graph of y = x²…', c: ['flipped, moved right 2, and moved up 5', 'flipped, moved left 2, and moved up 5', 'moved right 2 and moved down 5', 'flipped, moved right 5, and moved up 2'], why: 'The negative flips it, (x − 2) moves it right 2, and + 5 moves it up 5.' },
        { q: 'f(x) = x² − 4 and g(x) = 3x. Which x-value is a solution of f(x) = g(x)?', c: ['x = 4', 'x = 2', 'x = 3', 'x = 0'], why: 'Test x = 4: f(4) = 16 − 4 = 12 and g(4) = 3 · 4 = 12. They match.' },
        { q: 'A ball\'s height is h(t) = −5t² + 20t meters. Its graph crosses the line y = 15 at t = 1 and t = 3. When is the ball 15 meters high?', c: ['At t = 1 and t = 3 seconds', 'At t = 15 seconds', 'At t = 2 seconds', 'At t = 1 second only'], why: 'It passes 15 meters twice: once going up (t = 1) and once coming down (t = 3).' },
      ],
      realLife: {
        text: `<p>Transformations and crossing points show up whenever you compare two things.</p>
          <ul><li><b>Game design:</b> designers slide and stretch one jump curve to make bigger or smaller jumps. Changing y = −x² to y = −(x − 3)² + 9 moves the top of the jump to (3, 9).</li>
          <li><b>Basketball:</b> the ball's path is a parabola, and the rim height is a flat line at 10 feet. Where they cross, the ball is exactly at rim height.</li>
          <li><b>Comparing plans:</b> one cost grows in a straight line and another curves up. Where the graphs cross, the two plans cost the same.</li></ul>`,
        prompt: 'A ball\'s path is a parabola and a wall is a straight line on the same graph. What does it mean in real life if they cross twice, once, or never?',
      },
    },
  ],
};
