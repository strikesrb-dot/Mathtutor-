// Unit 14 — Quadratics: multiplying & factoring. NJ: A.SSE.A.2, A.SSE.B.3a, A.APR.A.1
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every product and factorization was checked with node by expanding and comparing coefficients.
export default {
  id: 'a14', n: 14, title: 'Quadratics: multiplying & factoring', nj: ['A.SSE.A.2', 'A.SSE.B.3a', 'A.APR.A.1'],
  lessons: [
    {
      key: 'a14-01',
      title: 'Multiplying monomials by polynomials',
      videos: [
        { id: 'Vm7H0VTlIco', title: 'Polynomials intro' },
        { id: 'wznE1wlmhR0', title: 'Multiply monomials by polynomials: area model' },
      ],
      learn: `
        <p>A <b>term</b> (one chunk of an expression, like 5x or −3) can be a number, a letter, or both multiplied together.</p>
        <ul>
          <li>A <b>monomial</b> (an expression with just one term) looks like 4x or 7x².</li>
          <li>A <b>polynomial</b> (one or more terms added or subtracted) looks like x² + 3x − 2.</li>
          <li>A <b>binomial</b> has two terms. A <b>trinomial</b> has three.</li>
        </ul>
        <p>To multiply a monomial by a polynomial, you <b>distribute</b> (multiply the outside term by every term inside the parentheses).</p>
        <p><b>Two rules:</b></p>
        <ul>
          <li>Multiply the <b>coefficients</b> (the numbers in front of the letters).</li>
          <li>Add the <b>exponents</b> (the small raised numbers) when the letters match: x · x = x², and x · x² = x³.</li>
        </ul>
        <p><b>Worked example:</b> 3x(2x² − 4x + 5)</p>
        <ol>
          <li>3x · 2x² = 6x³</li>
          <li>3x · (−4x) = −12x²</li>
          <li>3x · 5 = 15x</li>
          <li>Answer: 6x³ − 12x² + 15x</li>
        </ol>
        <p><b>Watch out:</b> hit every term inside, and keep track of signs. A negative on the outside flips every sign inside.</p>`,
      quiz: [
        { q: 'Which of these is a binomial?', c: ['x + 7', '5x', 'x² + 2x + 1', '8'], why: 'A binomial has exactly two terms. x + 7 has two: x and 7.' },
        { q: 'What kind of polynomial is 4x² − x + 9?', c: ['A trinomial — it has 3 terms', 'A binomial — it has 2 terms', 'A monomial — it has 1 term', 'A binomial — its biggest exponent is 2'], why: 'Count the chunks: 4x², −x, and 9. Three terms make a trinomial. The exponent does not count terms.' },
        { q: 'Simplify: x · x²', c: ['x³', 'x²', '2x³', '2x²'], why: 'Same letter, so add the exponents: 1 + 2 = 3. The answer is x³.' },
        { q: 'Simplify: 4x · 3x', c: ['12x²', '7x²', '12x', '7x'], why: 'Multiply the numbers: 4 · 3 = 12. Multiply the letters: x · x = x². So 12x².' },
        { q: 'Expand: 5(x + 3)', c: ['5x + 15', '5x + 3', 'x + 15', '5x + 8'], why: 'Multiply 5 by both terms: 5 · x = 5x and 5 · 3 = 15.' },
        { q: 'Expand: 2x(x + 6)', c: ['2x² + 12x', '2x² + 6', '2x + 12x', '2x² + 8x'], why: '2x · x = 2x² and 2x · 6 = 12x.' },
        { q: 'Expand: −3(x − 4)', c: ['−3x + 12', '−3x − 12', '3x + 12', '−3x − 4'], why: '−3 · x = −3x. Negative times negative is positive: −3 · (−4) = +12.' },
        { q: 'Expand: 2x(3x² + x − 4)', c: ['6x³ + 2x² − 8x', '6x³ + 2x² − 4', '6x² + 2x − 8', '5x³ + 3x² − 2x'], why: '2x · 3x² = 6x³, 2x · x = 2x², and 2x · (−4) = −8x.' },
        { q: 'Expand: −x(x² − 5x)', c: ['−x³ + 5x²', '−x³ − 5x²', 'x³ − 5x²', '−x² + 5x'], why: '−x · x² = −x³ and −x · (−5x) = +5x². The negative flips both signs.' },
        { q: 'Expand: 4x²(3x − 2)', c: ['12x³ − 8x²', '12x² − 8x²', '12x³ − 2', '12x³ − 8x'], why: '4x² · 3x = 12x³ (add exponents 2 + 1). 4x² · (−2) = −8x².' },
        { q: 'A rectangle is 3x wide and (x + 5) long. Which expression gives its area?', c: ['3x² + 15x', '4x + 5', '3x² + 5', '3x + 15x'], why: 'Area = width × length = 3x(x + 5) = 3x² + 15x.' },
        { q: 'Jay says 5x(x − 2) = 5x² − 2. What did he do wrong?', c: ['He forgot to multiply 5x by −2', 'He should have added 5x and x', 'The 5x² should be 5x', 'Nothing — he is right'], why: '5x must multiply both terms: 5x · (−2) = −10x. The right answer is 5x² − 10x.' },
        { q: 'Which of these is a trinomial?', c: ['x² − 5x + 6', 'x² − 5', '7x²', 'x + 6'], why: 'A trinomial has 3 terms. x² − 5x + 6 has three: x², −5x, and 6.' },
        { q: 'What kind of polynomial is 9x³?', c: ['A monomial — it has 1 term', 'A trinomial — its exponent is 3', 'A binomial — it has a number and a letter', 'Not a polynomial — it has no plus sign'], why: '9x³ is one chunk with no + or − splitting it. One term makes a monomial.' },
        { q: 'Simplify: 5x² · 2x³', c: ['10x⁵', '7x⁵', '10x⁶', '7x⁶'], why: 'Multiply the numbers: 5 · 2 = 10. Add the exponents: 2 + 3 = 5.' },
        { q: 'Expand: 6(x − 2)', c: ['6x − 12', '6x − 2', 'x − 12', '6x + 12'], why: '6 times x is 6x. 6 times −2 is −12.' },
        { q: 'Expand: 3x(x − 7)', c: ['3x² − 21x', '3x² − 7', '3x − 21x', '3x² − 21'], why: '3x · x = 3x², and 3x · (−7) = −21x.' },
        { q: 'Expand: −2x(x + 5)', c: ['−2x² − 10x', '−2x² + 10x', '−2x² + 5', '2x² − 10x'], why: 'The negative hits both terms: −2x · x = −2x², and −2x · 5 = −10x.' },
        { q: 'Expand: x(x² + 4x − 1)', c: ['x³ + 4x² − x', 'x³ + 4x − 1', 'x² + 4x² − x', 'x³ + 4x² − 1'], why: 'x · x² = x³, x · 4x = 4x², and x · (−1) = −x.' },
        { q: 'Expand: −4(2x² − 3x + 1)', c: ['−8x² + 12x − 4', '−8x² − 12x − 4', '−8x² + 12x + 1', '8x² − 12x + 4'], why: 'Multiply each term by −4: −8x², then +12x (negative times negative), then −4.' },
        { q: 'Expand: 5x²(x² + 2x)', c: ['5x⁴ + 10x³', '5x⁴ + 2x', '5x² + 10x³', '6x⁴ + 7x³'], why: '5x² · x² = 5x⁴ and 5x² · 2x = 10x³. Multiply the numbers and add the exponents.' },
        { q: 'Lia says −3(x − 6) = −3x − 18. What was her mistake?', c: ['−3 times −6 is +18, not −18', 'The answer should be 3x − 18', 'The answer should be −3x − 6', 'Nothing — she is right'], why: 'A negative times a negative is positive. So −3(x − 6) = −3x + 18.' },
        { q: 'Which expression is NOT equal to 2x² + 8x?', c: ['2(x² + 8x)', '2x(x + 4)', 'x(2x + 8)', '2(x² + 4x)'], why: '2(x² + 8x) = 2x² + 16x, because the 2 hits the 8x too. The others all give 2x² + 8x.' },
        { q: 'A garden is 2x meters wide and (3x − 1) meters long. Which expression gives its area?', c: ['6x² − 2x', '5x − 1', '6x² − 1', '6x − 2x'], why: 'Area = width × length = 2x(3x − 1) = 6x² − 2x.' },
      ],
      realLife: {
        text: `<p>Distributing is how you multiply a whole group at once.</p>
          <ul><li><b>Food drive:</b> you pack 5 boxes. Each box has x cans of beans and 3 bags of rice. That is 5(x + 3) = 5x + 15 items in all.</li>
          <li><b>Shopping:</b> 3 friends each buy a $4 sandwich and a $2 juice. The total is 3(4 + 2) = 3 · 4 + 3 · 2 = $18.</li>
          <li><b>Garden:</b> a garden is x feet wide. It is x feet long plus 6 more feet. The area is x(x + 6) = x² + 6x square feet.</li></ul>`,
        prompt: 'You buy 4 packs, and each pack has x pencils and 2 erasers. Write the total as 4(x + 2), expand it, and explain what each part means.',
      },
      practice: 'monomialTimes',
    },
    {
      key: 'a14-02',
      title: 'Multiplying binomials (FOIL and the box method)',
      videos: [
        { id: 'oOTFGdjhqqM', title: 'Multiplying binomials: area model' },
        { id: 'Xy8NKUoyy98', title: 'Multiplying binomials intro' },
        { id: 'ZMLFfTX615w', title: 'Multiplying binomials (example)' },
      ],
      learn: `
        <p>Now both parts have two terms, like (x + 3)(x + 5). The rule stays the same: <b>every term in the first binomial multiplies every term in the second</b>. That makes 4 small products.</p>
        <p><b>FOIL</b> (a memory trick: First, Outer, Inner, Last) helps you find all 4:</p>
        <ul>
          <li><b>First:</b> x · x = x²</li>
          <li><b>Outer:</b> x · 5 = 5x</li>
          <li><b>Inner:</b> 3 · x = 3x</li>
          <li><b>Last:</b> 3 · 5 = 15</li>
        </ul>
        <p>Then combine <b>like terms</b> (terms with the same letter and exponent): 5x + 3x = 8x. Answer: <b>x² + 8x + 15</b>.</p>
        <p>The <b>box method</b> (a grid, also called the area model) does the same job. Write x and 3 down the side, x and 5 across the top, and fill each box with a product. Then add up the boxes.</p>
        <p><b>Worked example:</b> (x − 4)(x + 2)</p>
        <ol>
          <li>First: x · x = x²</li>
          <li>Outer: x · 2 = 2x</li>
          <li>Inner: −4 · x = −4x</li>
          <li>Last: −4 · 2 = −8</li>
          <li>Combine 2x − 4x = −2x. Answer: x² − 2x − 8</li>
        </ol>
        <p><b>Watch out:</b> (x + 3)(x + 5) is NOT x² + 15. The middle terms count.</p>`,
      quiz: [
        { q: 'Expand: (x + 2)(x + 4)', c: ['x² + 6x + 8', 'x² + 8', 'x² + 8x + 6', '2x + 6'], why: 'FOIL: x² + 4x + 2x + 8. Combine 4x + 2x = 6x.' },
        { q: 'Expand: (x + 5)(x − 3)', c: ['x² + 2x − 15', 'x² − 2x − 15', 'x² + 2x + 15', 'x² − 15'], why: 'x² − 3x + 5x − 15. The middle terms combine to +2x.' },
        { q: 'Expand: (x − 6)(x − 1)', c: ['x² − 7x + 6', 'x² − 7x − 6', 'x² + 7x + 6', 'x² − 5x + 6'], why: 'Last: (−6)(−1) = +6. Middle: −x − 6x = −7x.' },
        { q: 'In FOIL, what does the "O" stand for?', c: ['Outer — multiply the two outside terms', 'Opposite — change all the signs', 'Only — multiply only the x terms', 'Order — use the order of operations'], why: 'FOIL means First, Outer, Inner, Last. Outer is the first term of one binomial times the last term of the other.' },
        { q: 'In the box method for (x + 7)(x + 2), what goes in the box for 7 and 2?', c: ['14', '9', '72', '7x'], why: 'Each box holds a product, not a sum. 7 · 2 = 14.' },
        { q: 'Expand: (2x + 1)(x + 3)', c: ['2x² + 7x + 3', '2x² + 6x + 3', '2x² + 3', '3x² + 7x + 3'], why: 'FOIL: 2x², 6x, x, and 3. Then 6x + x = 7x, so 2x² + 7x + 3.' },
        { q: 'Expand: (3x − 2)(x + 4)', c: ['3x² + 10x − 8', '3x² + 14x − 8', '3x² − 10x − 8', '3x² + 10x + 8'], why: '3x² + 12x − 2x − 8. Then 12x − 2x = 10x.' },
        { q: 'A student writes (x + 3)(x + 5) = x² + 15. What did the student miss?', c: ['The outer and inner products, 5x and 3x', 'The x² should be 2x', 'The 15 should be 8', 'Nothing — the answer is right'], why: 'All four products count. 5x + 3x = 8x, so the answer is x² + 8x + 15.' },
        { q: 'When you multiply two binomials, how many products do you find before combining?', c: ['4', '2', '3', '6'], why: '2 terms times 2 terms gives 4 products: First, Outer, Inner, Last.' },
        { q: 'Expand: (x + 4)(x − 9)', c: ['x² − 5x − 36', 'x² + 5x − 36', 'x² − 5x + 36', 'x² − 13x − 36'], why: 'Middle: −9x + 4x = −5x. Last: 4 · (−9) = −36.' },
        { q: 'A rug is (x + 3) feet long and (x + 2) feet wide. Which expression gives its area in square feet?', c: ['x² + 5x + 6', 'x² + 6', '2x + 5', 'x² + 6x + 5'], why: '(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6.' },
        { q: 'Which product equals x² + 9x + 20?', c: ['(x + 4)(x + 5)', '(x + 2)(x + 10)', '(x + 9)(x + 20)', '(x + 3)(x + 6)'], why: '(x + 4)(x + 5) = x² + 5x + 4x + 20 = x² + 9x + 20.' },
        { q: 'Expand: (x + 1)(x + 6)', c: ['x² + 7x + 6', 'x² + 6', 'x² + 6x + 7', 'x² + 6x + 6'], why: 'Outer 6x plus inner x is 7x. Last: 1 · 6 = 6.' },
        { q: 'Expand: (x − 3)(x + 8)', c: ['x² + 5x − 24', 'x² − 5x − 24', 'x² + 5x + 24', 'x² + 11x − 24'], why: 'Outer 8x plus inner −3x is 5x. Last: −3 · 8 = −24.' },
        { q: 'Expand: (x − 5)(x − 2)', c: ['x² − 7x + 10', 'x² − 7x − 10', 'x² + 7x + 10', 'x² − 3x + 10'], why: 'Outer −2x plus inner −5x is −7x. Last: (−5)(−2) = +10.' },
        { q: 'In FOIL for (x + 4)(x − 7), what is the "Last" product?', c: ['−28', '28', '−3', '4x'], why: 'Last means the last term of each binomial: 4 · (−7) = −28.' },
        { q: 'Expand: (2x + 5)(x + 1)', c: ['2x² + 7x + 5', '2x² + 5', '2x² + 6x + 5', '3x² + 7x + 5'], why: 'First 2x², outer 2x, inner 5x, last 5. Combine 2x + 5x = 7x.' },
        { q: 'Expand: (4x − 1)(x − 3)', c: ['4x² − 13x + 3', '4x² − 12x + 3', '4x² − 13x − 3', '4x² + 3'], why: 'Outer: 4x · (−3) = −12x. Inner: −1 · x = −x. Together −13x. Last: (−1)(−3) = 3.' },
        { q: 'Expand: (x + 2)(3x − 5)', c: ['3x² + x − 10', '3x² − x − 10', '3x² + 11x − 10', '3x² − 10'], why: 'Outer −5x plus inner 6x is x. Last: 2 · (−5) = −10.' },
        { q: 'Omar says (x + 6)(x − 2) = x² + 4x + 12. What was his mistake?', c: ['6 · (−2) is −12, not +12', 'The middle term should be 8x', 'The x² should be 2x²', 'Nothing — he is right'], why: 'Last: 6 · (−2) = −12. So (x + 6)(x − 2) = x² + 4x − 12.' },
        { q: 'In the box method for (x − 3)(x + 9), what goes in the box for −3 and x?', c: ['−3x', '3x', '−27', '6x'], why: 'Each box holds the product of its row and column: −3 · x = −3x.' },
        { q: 'Which expression does NOT equal (x + 4)(x + 6)?', c: ['x² + 24', 'x² + 10x + 24', '(x + 6)(x + 4)', 'x² + 6x + 4x + 24'], why: 'x² + 24 skips the outer and inner products, 6x and 4x. The others all equal x² + 10x + 24.' },
        { q: 'A photo is (x + 6) inches tall and (x − 1) inches wide. Which expression gives its area in square inches?', c: ['x² + 5x − 6', 'x² − 6', 'x² + 7x − 6', '2x + 5'], why: '(x + 6)(x − 1) = x² − x + 6x − 6 = x² + 5x − 6.' },
        { q: 'Which product equals x² − 2x − 15?', c: ['(x − 5)(x + 3)', '(x + 5)(x − 3)', '(x − 5)(x − 3)', '(x − 15)(x + 1)'], why: 'FOIL it: x² + 3x − 5x − 15 = x² − 2x − 15.' },
      ],
      realLife: {
        text: `<p>Multiplying binomials shows up whenever two lengths both change.</p>
          <ul><li><b>Bedroom:</b> your room is x feet by x feet. Add 3 feet to the length and 2 feet to the width. The new floor area is (x + 3)(x + 2) = x² + 5x + 6 square feet.</li>
          <li><b>Court plan:</b> a court that is (x + 10) by (x + 20) feet has an area of x² + 30x + 200 square feet.</li>
          <li><b>Box method in your head:</b> 23 × 15 = (20 + 3)(10 + 5) = 200 + 100 + 30 + 15 = 345.</li></ul>`,
        prompt: 'Use the box method to find 21 × 14 without a calculator. Write the four boxes and explain how they add up to the answer.',
      },
      practice: 'foil',
    },
    {
      key: 'a14-03',
      title: 'Special products of binomials',
      videos: [
        { id: 'JfuisfEdnjk', title: 'Special products of the form (x+a)(x−a)' },
        { id: 'xH_GllPuymc', title: 'Squaring binomials of the form (x+a)²' },
        { id: 'xjkbR7Gjgjs', title: 'Squaring binomials of the form (ax+b)²' },
      ],
      learn: `
        <p>Some binomial products show up so often that they have shortcuts called <b>special products</b> (patterns that let you skip FOIL). Remember, <b>squared</b> means times itself, so (a + b)² means (a + b)(a + b).</p>
        <ul>
          <li><b>Square of a sum:</b> (a + b)² = a² + 2ab + b²</li>
          <li><b>Square of a difference:</b> (a − b)² = a² − 2ab + b²</li>
          <li><b>Sum times difference:</b> (a + b)(a − b) = a² − b²</li>
        </ul>
        <p>The answer to the last one is called a <b>difference of squares</b> (one squared thing minus another). The middle terms cancel out, because +ab and −ab add to zero.</p>
        <p><b>Worked example:</b> (x + 5)²</p>
        <ol>
          <li>Square the first term: x²</li>
          <li>Double the first term times the last: 2 · x · 5 = 10x</li>
          <li>Square the last term: 5² = 25</li>
          <li>Answer: x² + 10x + 25</li>
        </ol>
        <p><b>Watch out:</b> (x + 5)² is NOT x² + 25. It is (x + 5)(x + 5), so the middle term 10x is there.</p>
        <p><b>Quick check:</b> (x + 6)(x − 6) = x² − 36. Here the middle terms disappear.</p>`,
      quiz: [
        { q: 'Expand: (x + 3)²', c: ['x² + 6x + 9', 'x² + 9', 'x² + 3x + 9', 'x² + 6x + 6'], why: 'x² + 2 · x · 3 + 3² = x² + 6x + 9.' },
        { q: 'Expand: (x − 4)²', c: ['x² − 8x + 16', 'x² − 16', 'x² + 16', 'x² − 8x − 16'], why: 'Middle: 2 · x · (−4) = −8x. Last: (−4)² = +16.' },
        { q: 'Expand: (x + 7)(x − 7)', c: ['x² − 49', 'x² + 49', 'x² − 14x − 49', 'x² − 14'], why: 'Sum times difference: x² − 7² = x² − 49. The middle terms cancel.' },
        { q: 'Which pattern matches (a + b)(a − b)?', c: ['a² − b²', 'a² + b²', 'a² − 2ab + b²', 'a² + 2ab − b²'], why: 'The +ab and −ab cancel, leaving a² − b².' },
        { q: 'Expand: (2x + 1)²', c: ['4x² + 4x + 1', '2x² + 4x + 1', '4x² + 1', '4x² + 2x + 1'], why: '(2x)² = 4x², 2 · 2x · 1 = 4x, and 1² = 1.' },
        { q: 'Expand: (3x − 2)(3x + 2)', c: ['9x² − 4', '9x² + 4', '3x² − 4', '9x² − 12x − 4'], why: 'Difference of squares: (3x)² − 2² = 9x² − 4.' },
        { q: 'What is the middle term of (x + 10)²?', c: ['20x', '10x', '100x', 'There is no middle term'], why: 'Middle term = 2 · x · 10 = 20x.' },
        { q: 'Kayla says (x + 6)² = x² + 36. Is she right?', c: ['No — she left out the middle term 12x', 'Yes — you square each term', 'No — the answer is x² + 12', 'Yes — because 6² = 36'], why: '(x + 6)(x + 6) = x² + 12x + 36. Squaring a sum always makes a middle term.' },
        { q: 'Expand: (5 − x)(5 + x)', c: ['25 − x²', 'x² − 25', '25 + x²', '25 − 10x − x²'], why: 'First squared minus second squared: 5² − x² = 25 − x².' },
        { q: 'Expand: (2x − 3)²', c: ['4x² − 12x + 9', '4x² − 9', '4x² − 6x + 9', '2x² − 12x + 9'], why: '(2x)² = 4x², 2 · 2x · (−3) = −12x, and (−3)² = 9.' },
        { q: 'Use a special product to find 21 × 19 fast. Think (20 + 1)(20 − 1).', c: ['399', '400', '401', '420'], why: 'Difference of squares: 20² − 1² = 400 − 1 = 399.' },
        { q: 'Which product gives x² + 14x + 49?', c: ['(x + 7)²', '(x − 7)²', '(x + 7)(x − 7)', '(x + 14)²'], why: '(x + 7)² = x² + 2 · 7 · x + 7² = x² + 14x + 49.' },
        { q: 'Expand: (x + 4)²', c: ['x² + 8x + 16', 'x² + 16', 'x² + 4x + 16', 'x² + 8x + 8'], why: 'Square x. Double x · 4 to get 8x. Square 4 to get 16.' },
        { q: 'Expand: (x − 6)²', c: ['x² − 12x + 36', 'x² − 36', 'x² + 36', 'x² − 12x − 36'], why: 'The middle term is 2 · x · (−6) = −12x, and the last term is (−6)² = +36.' },
        { q: 'Expand: (x + 9)(x − 9)', c: ['x² − 81', 'x² + 81', 'x² − 18x − 81', 'x² − 18'], why: 'Sum times difference: the middle terms cancel. x² − 9² = x² − 81.' },
        { q: 'Expand: (3x + 1)²', c: ['9x² + 6x + 1', '3x² + 6x + 1', '9x² + 1', '9x² + 3x + 1'], why: '(3x)² = 9x². Middle: 2 · 3x · 1 = 6x. Last: 1² = 1.' },
        { q: 'Expand: (2x + 5)(2x − 5)', c: ['4x² − 25', '4x² + 25', '2x² − 25', '4x² − 20x − 25'], why: 'Difference of squares: (2x)² − 5² = 4x² − 25.' },
        { q: 'What is the middle term of (x − 8)²?', c: ['−16x', '−8x', '16x', '64x'], why: 'The middle term is 2 · x · (−8) = −16x.' },
        { q: 'Expand: (4x − 1)²', c: ['16x² − 8x + 1', '16x² − 1', '4x² − 8x + 1', '16x² − 4x + 1'], why: '(4x)² = 16x². Middle: 2 · 4x · (−1) = −8x. Last: (−1)² = 1.' },
        { q: 'Ben says (x − 5)² = x² − 25. What was his mistake?', c: ['He left out the middle term −10x, and the last term should be +25', 'The answer should be x² + 25', 'The answer should be x² − 10x − 25', 'Nothing — he is right'], why: '(x − 5)(x − 5) = x² − 5x − 5x + 25 = x² − 10x + 25.' },
        { q: 'Which product is NOT a difference of squares when you expand it?', c: ['(x + 3)(x + 3)', '(x + 3)(x − 3)', '(x − 10)(x + 10)', '(2x + 1)(2x − 1)'], why: '(x + 3)(x + 3) = x² + 6x + 9. The others are sum times difference, so the middle terms cancel.' },
        { q: 'Use (a + b)² = a² + 2ab + b² to find 21² fast. Think (20 + 1)².', c: ['441', '401', '421', '400'], why: '(20 + 1)² = 400 + 2 · 20 · 1 + 1 = 400 + 40 + 1 = 441.' },
        { q: 'Which product gives x² − 20x + 100?', c: ['(x − 10)²', '(x + 10)²', '(x + 10)(x − 10)', '(x − 20)²'], why: '(x − 10)² = x² − 2 · 10 · x + 10² = x² − 20x + 100.' },
        { q: 'A square garden has sides of (x + 2) meters. Which expression gives its area in square meters?', c: ['x² + 4x + 4', 'x² + 4', 'x² + 2x + 4', '4x + 8'], why: 'Area = side × side = (x + 2)² = x² + 4x + 4. The answer 4x + 8 is the distance around.' },
      ],
      realLife: {
        text: `<p>Special products are mental-math shortcuts.</p>
          <ul><li><b>Fast multiplying:</b> 31 × 29 = (30 + 1)(30 − 1) = 900 − 1 = 899.</li>
          <li><b>Squares in your head:</b> 52² = (50 + 2)² = 2,500 + 200 + 4 = 2,704.</li>
          <li><b>Bigger room:</b> a square room is x feet on each side. Add 2 feet to each side and the new area is (x + 2)² = x² + 4x + 4. That is 4x + 4 more square feet, not just 4.</li></ul>`,
        prompt: 'Use a special product to work out 41 × 39 in your head. Show which pattern you used and explain why it is faster than regular multiplying.',
      },
      practice: 'foil',
    },
    {
      key: 'a14-04',
      title: 'Intro to factoring: the GCF',
      videos: [
        { id: 'I6TBBzIvgB8', title: 'Factoring with the distributive property' },
        { id: 'mbb3msmX2xs', title: 'Factoring out a common factor (example)' },
        { id: 'SjN3_xCJamA', title: 'Intro to factors & divisibility' },
      ],
      learn: `
        <p><b>Factoring</b> (writing an expression as a multiplication) is distributing in reverse. Distributing turns 2(x + 5) into 2x + 10. Factoring turns 2x + 10 back into 2(x + 5).</p>
        <p>The first step in almost every factoring problem is to pull out the <b>GCF</b> (greatest common factor: the biggest thing that divides evenly into every term).</p>
        <p><b>How to find the GCF:</b></p>
        <ul>
          <li><b>Numbers:</b> find the biggest number that divides all the coefficients.</li>
          <li><b>Letters:</b> take each letter that is in every term, with its smallest exponent.</li>
        </ul>
        <p><b>Worked example:</b> factor 6x² + 9x.</p>
        <ol>
          <li>Numbers: 6 and 9. The biggest number that divides both is 3.</li>
          <li>Letters: x² and x. Both have at least one x, so take x.</li>
          <li>GCF = 3x.</li>
          <li>Divide each term by 3x: 6x² ÷ 3x = 2x, and 9x ÷ 3x = 3.</li>
          <li>Answer: 3x(2x + 3).</li>
        </ol>
        <p><b>Check by distributing:</b> 3x · 2x + 3x · 3 = 6x² + 9x. It matches.</p>
        <p><b>Watch out:</b> if a term is exactly the GCF, it leaves a 1 behind. 4x + 4 = 4(x + 1), not 4(x).</p>`,
      quiz: [
        { q: 'What is the GCF of 12 and 18?', c: ['6', '3', '2', '36'], why: '6 divides both 12 and 18, and no bigger number does. 36 is a multiple, not a factor.' },
        { q: 'What is the GCF of 8x and 12?', c: ['4', '4x', '2', '8'], why: '4 divides both 8 and 12. Only 8x has an x, so x is not shared.' },
        { q: 'What is the GCF of 10x² and 15x?', c: ['5x', '5x²', '5', '30x²'], why: 'Numbers: 5. Letters: the smallest power of x is x. So the GCF is 5x.' },
        { q: 'Factor: 5x + 20', c: ['5(x + 4)', '5(x + 20)', '5x(x + 4)', '4(x + 5)'], why: 'The GCF is 5. 5x ÷ 5 = x and 20 ÷ 5 = 4.' },
        { q: 'Factor: 4x² + 8x', c: ['4x(x + 2)', '4x(x + 8)', '4x(x² + 2)', '8x(x + 1)'], why: 'The GCF is 4x. 4x² ÷ 4x = x and 8x ÷ 4x = 2.' },
        { q: 'Factor: 3x − 12', c: ['3(x − 4)', '3(x + 4)', '3(x − 12)', '3(x − 9)'], why: '3x ÷ 3 = x and −12 ÷ 3 = −4. Keep the minus sign.' },
        { q: 'Factor: 7x² + 7x', c: ['7x(x + 1)', '7x(x)', '7(x² + 1)', '7x(x + 7)'], why: '7x ÷ 7x = 1. When a term equals the GCF, a 1 is left behind.' },
        { q: 'Factor: 6x³ − 15x²', c: ['3x²(2x − 5)', '3x²(2x + 5)', '3x²(2x − 15)', '3x(2x − 5)'], why: 'GCF: 3 (from 6 and 15) and x² (smallest power). 6x³ ÷ 3x² = 2x and 15x² ÷ 3x² = 5.' },
        { q: 'Maria factored 12x + 18 as 2(6x + 9). What should she do?', c: ['Pull out more — the GCF is 6, so it is 6(2x + 3)', 'Nothing — any common factor is fine', 'Change it to 2(6x + 18)', 'Change it to 12(x + 18)'], why: '6x + 9 still has a common factor of 3. The GCF of 12 and 18 is 6.' },
        { q: 'How can you check that 3x(2x + 3) is the right factoring of 6x² + 9x?', c: ['Distribute: 3x · 2x + 3x · 3 should give 6x² + 9x', 'Add 3x to 2x + 3', 'Check that 3x is bigger than 2x + 3', 'Divide 6x² by 9x'], why: 'Factoring is distributing in reverse. Multiplying back must give the starting expression.' },
        { q: 'Factor: 10x² − 5x', c: ['5x(2x − 1)', '5x(2x)', '5x(2x + 1)', '5x(2x − 5)'], why: '10x² ÷ 5x = 2x and −5x ÷ 5x = −1. Do not drop the 1.' },
        { q: 'A rectangle has an area of 8x + 24 square feet. Its width is 8 feet. What is its length?', c: ['x + 3 feet', 'x + 24 feet', '8x + 3 feet', 'x + 16 feet'], why: '8x + 24 = 8(x + 3). Width × length = area, so the length is x + 3.' },
        { q: 'What is the GCF of 16 and 24?', c: ['8', '4', '2', '48'], why: '16 = 8 · 2 and 24 = 8 · 3. No number bigger than 8 divides both.' },
        { q: 'What is the GCF of 6x³ and 9x²?', c: ['3x²', '3x³', '3x', '18x³'], why: 'Numbers: the GCF of 6 and 9 is 3. Letters: take the smallest power of x, which is x².' },
        { q: 'Factor: 6x + 18', c: ['6(x + 3)', '6(x + 18)', '3(2x + 3)', '6x(x + 3)'], why: '6 divides both terms: 6x ÷ 6 = x and 18 ÷ 6 = 3.' },
        { q: 'Factor: 9x − 27', c: ['9(x − 3)', '9(x + 3)', '9(x − 27)', '3(3x − 3)'], why: '9x ÷ 9 = x and −27 ÷ 9 = −3. Keep the minus sign.' },
        { q: 'Factor: 5x² + 15x', c: ['5x(x + 3)', '5x(x + 15)', '5(x² + 3)', '15x(x + 1)'], why: 'The GCF is 5x. 5x² ÷ 5x = x and 15x ÷ 5x = 3.' },
        { q: 'Factor: 12x³ + 4x', c: ['4x(3x² + 1)', '4x(3x²)', '4x(3x³ + 1)', '4x(3x + 1)'], why: '12x³ ÷ 4x = 3x² and 4x ÷ 4x = 1. Do not forget the 1.' },
        { q: 'Factor: 14x² + 21x', c: ['7x(2x + 3)', '7(2x² + 3)', '7x(2x + 21)', '14x(x + 3)'], why: '7 divides 14 and 21, and both terms have x. 14x² ÷ 7x = 2x and 21x ÷ 7x = 3.' },
        { q: 'Leo factored 4x² + 12x as 4(x² + 3x). What should he do?', c: ['Pull out x too — the GCF is 4x, so it is 4x(x + 3)', 'Nothing — 4 is the GCF', 'Change it to 4(x² + 12x)', 'Change it to 4x(x + 12)'], why: 'Both terms have an x, so the GCF is 4x. 4x(x + 3) is fully factored.' },
        { q: 'Factor: 18x² − 12x', c: ['6x(3x − 2)', '6x(3x + 2)', '6(3x² − 2)', '6x(3x − 12)'], why: 'The GCF is 6x. 18x² ÷ 6x = 3x and −12x ÷ 6x = −2.' },
        { q: 'Which expression does NOT have a GCF bigger than 1?', c: ['3x + 7', '4x + 8', '6x − 9', '5x² + 10x'], why: '3 and 7 share no factor except 1, and 7 has no x. The others share 4, 3, and 5x.' },
        { q: 'Factor out the GCF: 3x³ + 6x² + 9x', c: ['3x(x² + 2x + 3)', '3x(x² + 6x + 9)', '3x(x² + 2x + 9)', '3(x² + 2x + 3)'], why: 'The GCF is 3x. Divide each term by 3x: x², 2x, and 3.' },
        { q: 'A rectangle has an area of 6x² + 10x square inches. Its width is 2x inches. What is its length?', c: ['3x + 5 inches', '3x + 10 inches', '3x² + 5x inches', '6x + 5 inches'], why: '6x² + 10x = 2x(3x + 5). Width × length = area, so the length is 3x + 5.' },
      ],
      realLife: {
        text: `<p>Factoring means finding what things have in common and grouping by it.</p>
          <ul><li><b>Food drive bags:</b> you have 12 cans and 18 boxes of rice. The GCF is 6, so you can make 6 equal bags, each with 2 cans and 3 boxes: 12 + 18 = 6(2 + 3).</li>
          <li><b>Gift bags:</b> 20 candies and 30 stickers make 10 bags with 2 candies and 3 stickers each.</li>
          <li><b>Floor plans:</b> a floor with area 6x² + 9x square feet can be laid out as rows 3x feet wide: 3x(2x + 3).</li></ul>`,
        prompt: 'You have 24 pencils and 36 erasers to share into equal kits with nothing left over. What is the most kits you can make, what goes in each one, and how is this like factoring?',
      },
      practice: 'gcfFactor',
    },
    {
      key: 'a14-05',
      title: 'Factoring quadratics: x² + bx + c',
      videos: [
        { id: 'D3a8NnpQ2vU', title: 'Factoring quadratics as (x+a)(x+b)' },
        { id: '1kfq0aR3ASs', title: 'Factoring quadratics as (x+a)(x+b) (example 2)' },
        { id: 'm6uOqU91ypI', title: 'Factoring quadratics with a common factor' },
      ],
      learn: `
        <p>A <b>quadratic</b> (an expression whose biggest exponent is 2) like x² + 7x + 12 often factors into two binomials: (x + ?)(x + ?).</p>
        <p>When we multiplied (x + 3)(x + 4), we got x² + 7x + 12. Notice: 3 + 4 = 7 and 3 · 4 = 12. That is the trick.</p>
        <p><b>To factor x² + bx + c,</b> find two numbers that:</p>
        <ul>
          <li><b>multiply</b> to c (the <b>constant</b>: the number with no letter), and</li>
          <li><b>add</b> to b (the number in front of x).</li>
        </ul>
        <p><b>Worked example:</b> factor x² + 2x − 15.</p>
        <ol>
          <li>We need two numbers that multiply to −15 and add to 2.</li>
          <li>Pairs that multiply to −15: 1 and −15, −1 and 15, 3 and −5, −3 and 5.</li>
          <li>−3 + 5 = 2. Found them.</li>
          <li>Answer: (x − 3)(x + 5).</li>
        </ol>
        <p><b>Sign tips:</b></p>
        <ul>
          <li>c is positive: both numbers have the same sign as b.</li>
          <li>c is negative: one number is positive and one is negative.</li>
        </ul>
        <p><b>Always check</b> by multiplying back. And pull out a GCF first if there is one: 2x² + 14x + 24 = 2(x² + 7x + 12) = 2(x + 3)(x + 4).</p>`,
      quiz: [
        { q: 'To factor x² + 8x + 15, you need two numbers that…', c: ['multiply to 15 and add to 8', 'multiply to 8 and add to 15', 'add to 15 and subtract to 8', 'multiply to 15 and add to 15'], why: 'Multiply to the constant (15) and add to the middle number (8). 3 and 5 work.' },
        { q: 'Factor: x² + 7x + 10', c: ['(x + 2)(x + 5)', '(x + 1)(x + 10)', '(x + 3)(x + 4)', '(x + 7)(x + 10)'], why: '2 · 5 = 10 and 2 + 5 = 7.' },
        { q: 'Factor: x² − 9x + 20', c: ['(x − 4)(x − 5)', '(x + 4)(x + 5)', '(x − 2)(x − 10)', '(x + 4)(x − 5)'], why: 'We need a product of +20 and a sum of −9: −4 and −5.' },
        { q: 'Factor: x² + 3x − 18', c: ['(x + 6)(x − 3)', '(x − 6)(x + 3)', '(x + 9)(x − 2)', '(x + 6)(x + 3)'], why: '6 · (−3) = −18 and 6 + (−3) = 3.' },
        { q: 'Factor: x² − 2x − 24', c: ['(x − 6)(x + 4)', '(x + 6)(x − 4)', '(x − 8)(x + 3)', '(x − 6)(x − 4)'], why: '−6 · 4 = −24 and −6 + 4 = −2.' },
        { q: 'To factor x² − 5x + 6, the two numbers must both be…', c: ['negative, because they multiply to +6 and add to −5', 'positive, because 6 is positive', 'one positive and one negative', 'equal to 5 and 6'], why: 'Same signs give a positive product. A negative sum means both are negative: −2 and −3.' },
        { q: 'Factor: x² − 11x + 18', c: ['(x − 2)(x − 9)', '(x + 2)(x + 9)', '(x − 3)(x − 6)', '(x − 2)(x + 9)'], why: '(−2)(−9) = 18 and −2 + (−9) = −11.' },
        { q: 'Which is a factor of x² + x − 12?', c: ['x + 4', 'x + 3', 'x − 4', 'x + 12'], why: 'x² + x − 12 = (x + 4)(x − 3), since 4 · (−3) = −12 and 4 + (−3) = 1.' },
        { q: 'Factor completely: 3x² + 15x + 18', c: ['3(x + 2)(x + 3)', '3(x + 1)(x + 6)', '(x + 2)(x + 3)', '3(x − 2)(x − 3)'], why: 'Pull out the GCF 3: 3(x² + 5x + 6). Then 2 · 3 = 6 and 2 + 3 = 5.' },
        { q: 'Jamal factored x² + 6x + 8 as (x + 2)(x + 4). How can he check it?', c: ['Multiply (x + 2)(x + 4) and see if he gets x² + 6x + 8', 'Add 2 and 4 to see if he gets 8', 'Check that 2 and 4 are both even', 'Divide 8 by 6'], why: 'Multiplying back always checks a factoring: x² + 4x + 2x + 8 = x² + 6x + 8.' },
        { q: 'Factor: x² − 4x − 21', c: ['(x − 7)(x + 3)', '(x + 7)(x − 3)', '(x − 7)(x − 3)', '(x − 21)(x + 1)'], why: '−7 · 3 = −21 and −7 + 3 = −4.' },
        { q: 'A rectangle has an area of x² + 9x + 14. Which could be its length and width?', c: ['x + 7 and x + 2', 'x + 9 and x + 14', 'x + 5 and x + 4', 'x + 7 and x − 2'], why: '7 · 2 = 14 and 7 + 2 = 9, so x² + 9x + 14 = (x + 7)(x + 2).' },
        { q: 'Which pair of numbers multiplies to 24 and adds to 11?', c: ['3 and 8', '4 and 6', '2 and 12', '1 and 24'], why: '3 · 8 = 24 and 3 + 8 = 11. The other pairs multiply to 24 but add to 10, 14, or 25.' },
        { q: 'Factor: x² + 9x + 18', c: ['(x + 3)(x + 6)', '(x + 2)(x + 9)', '(x + 1)(x + 18)', '(x − 3)(x − 6)'], why: '3 · 6 = 18 and 3 + 6 = 9.' },
        { q: 'Factor: x² − 10x + 16', c: ['(x − 2)(x − 8)', '(x + 2)(x + 8)', '(x − 4)(x − 4)', '(x − 2)(x + 8)'], why: '(−2)(−8) = 16 and −2 + (−8) = −10. Both are negative, since c is positive and b is negative.' },
        { q: 'Factor: x² + 4x − 12', c: ['(x + 6)(x − 2)', '(x − 6)(x + 2)', '(x + 4)(x − 3)', '(x + 3)(x − 4)'], why: '6 · (−2) = −12 and 6 + (−2) = 4.' },
        { q: 'Factor: x² − x − 30', c: ['(x − 6)(x + 5)', '(x + 6)(x − 5)', '(x − 10)(x + 3)', '(x − 6)(x − 5)'], why: '(−6) · 5 = −30 and −6 + 5 = −1. The bigger number gets the minus sign.' },
        { q: 'Factor: x² + 13x + 40', c: ['(x + 5)(x + 8)', '(x + 4)(x + 10)', '(x + 2)(x + 20)', '(x + 13)(x + 40)'], why: '5 · 8 = 40 and 5 + 8 = 13.' },
        { q: 'Which trinomial can NOT be factored using whole numbers?', c: ['x² + 5x + 3', 'x² + 4x + 3', 'x² + 7x + 12', 'x² + 8x + 12'], why: 'Only 1 and 3 multiply to 3, and they add to 4, not 5. The other three all factor.' },
        { q: 'Kim factored x² + 2x − 8 as (x − 4)(x + 2). What went wrong?', c: ['Her signs are switched; it should be (x + 4)(x − 2)', 'She should use 8 and 1', 'It should be (x − 8)(x + 1)', 'Nothing — she is right'], why: 'Multiply back: (x − 4)(x + 2) = x² − 2x − 8. The middle term has the wrong sign.' },
        { q: 'Which is a factor of x² − 8x + 15?', c: ['x − 5', 'x + 5', 'x + 3', 'x − 15'], why: 'x² − 8x + 15 = (x − 3)(x − 5), so x − 5 is a factor.' },
        { q: 'Factor completely: 5x² − 5x − 30', c: ['5(x − 3)(x + 2)', '5(x + 3)(x − 2)', '(x − 3)(x + 2)', '5(x − 6)(x + 1)'], why: 'Pull out the GCF first: 5(x² − x − 6). Then (−3) · 2 = −6 and −3 + 2 = −1.' },
        { q: 'If (x + 7)(x + n) = x² + 10x + 21, what is n?', c: ['3', '14', '17', '−3'], why: '7 + n must be 10, and 7 · n must be 21. Both are true when n = 3.' },
        { q: 'A rectangle has an area of x² + 11x + 24 square feet. Its length is (x + 8) feet. What is its width?', c: ['x + 3 feet', 'x + 16 feet', 'x + 11 feet', 'x + 2 feet'], why: 'x² + 11x + 24 = (x + 8)(x + 3), since 8 · 3 = 24 and 8 + 3 = 11.' },
      ],
      realLife: {
        text: `<p>Factoring a quadratic is a number puzzle: find two numbers with a given product and a given sum.</p>
          <ul><li><b>Garden plan:</b> a garden has an area of x² + 7x + 12 square meters. Factoring gives (x + 3)(x + 4), so the sides are x + 3 and x + 4 meters long.</li>
          <li><b>Puzzle games:</b> many math games ask, "Which two numbers multiply to 24 and add to 10?" The answer is 4 and 6.</li>
          <li><b>Coming up:</b> later in algebra, factoring helps you solve equations like x² + 7x + 12 = 0. Equations like these can tell you when a thrown ball lands.</li></ul>`,
        prompt: 'Find two numbers that multiply to 36 and add to 13. Explain how you searched for them and how they help you factor x² + 13x + 36.',
      },
      practice: 'factorTrinomial',
    },
    {
      key: 'a14-06',
      title: 'Factoring quadratics by grouping',
      videos: [
        { id: 'X7B_tH4O-_s', title: 'Intro to grouping (factoring by grouping examples)' },
        { id: 'u1SAo2GiX8A', title: 'Factoring quadratics by grouping' },
      ],
      learn: `
        <p>In 2x² + 7x + 3, the 2 is the <b>leading coefficient</b> (the number multiplied by x²). When it is not 1, the trick from last lesson is not enough. Use <b>grouping</b> (splitting the middle term, then factoring in pairs).</p>
        <p><b>Steps for ax² + bx + c:</b></p>
        <ol>
          <li>Multiply a · c.</li>
          <li>Find two numbers that multiply to a · c and add to b.</li>
          <li>Split the middle term into those two pieces.</li>
          <li>Group the first two terms and the last two terms. Pull a GCF out of each pair.</li>
          <li>Pull out the binomial that both groups share.</li>
        </ol>
        <p><b>Worked example:</b> factor 2x² + 7x + 3.</p>
        <ol>
          <li>a · c = 2 · 3 = 6.</li>
          <li>Two numbers that multiply to 6 and add to 7: 1 and 6.</li>
          <li>Split: 2x² + x + 6x + 3.</li>
          <li>Group: x(2x + 1) + 3(2x + 1).</li>
          <li>Both groups share (2x + 1). Answer: (2x + 1)(x + 3).</li>
        </ol>
        <p><b>Check:</b> (2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3.</p>
        <p><b>Watch out:</b> the two groups must share the same binomial. If they do not, check your signs and your split.</p>`,
      quiz: [
        { q: 'To factor 3x² + 10x + 8 by grouping, what is a · c?', c: ['24', '11', '30', '80'], why: 'a = 3 and c = 8, so a · c = 3 · 8 = 24.' },
        { q: 'For 2x² + 11x + 5, which two numbers multiply to a · c and add to b?', c: ['1 and 10', '2 and 5', '5 and 6', '1 and 5'], why: 'a · c = 2 · 5 = 10. Then 1 · 10 = 10 and 1 + 10 = 11.' },
        { q: 'Factor: 3x² + 7x + 2', c: ['(3x + 1)(x + 2)', '(3x + 2)(x + 1)', '(3x + 1)(x + 1)', '3(x + 1)(x + 2)'], why: 'a · c = 6, so split 7x into 6x + x: 3x(x + 2) + 1(x + 2).' },
        { q: 'Factor: 2x² + 5x − 3', c: ['(2x − 1)(x + 3)', '(2x + 1)(x − 3)', '(2x + 3)(x − 1)', '(2x − 3)(x + 1)'], why: 'a · c = −6, so split 5x into 6x − x: 2x(x + 3) − 1(x + 3).' },
        { q: 'After splitting, 6x² + 4x + 9x + 6 is grouped as 2x(3x + 2) + 3(3x + 2). What is the factored form?', c: ['(2x + 3)(3x + 2)', '6x(3x + 2)', '5x(3x + 2)', '(2x + 3)(6x + 4)'], why: 'Both groups share (3x + 2). Pull it out, and what is left is (2x + 3).' },
        { q: 'Factor: 4x² + 8x + 3', c: ['(2x + 1)(2x + 3)', '(4x + 1)(x + 3)', '(4x + 3)(x + 1)', '(2x + 2)(2x + 1)'], why: 'a · c = 12, so split 8x into 2x + 6x: 2x(2x + 1) + 3(2x + 1).' },
        { q: 'What is the leading coefficient of 5x² − 3x + 7?', c: ['5', '−3', '7', '2'], why: 'The leading coefficient is the number in front of x². Here it is 5. The 2 is an exponent.' },
        { q: 'Factor: 3x² − 11x + 6', c: ['(3x − 2)(x − 3)', '(3x + 2)(x + 3)', '(3x − 3)(x − 2)', '(3x − 1)(x − 6)'], why: 'a · c = 18, so split −11x into −9x − 2x: 3x(x − 3) − 2(x − 3).' },
        { q: 'Factor completely: 4x² + 10x + 4', c: ['2(2x + 1)(x + 2)', '(2x + 1)(x + 2)', '2(2x + 2)(x + 1)', '2(x + 1)(x + 4)'], why: 'Pull out the GCF 2 first: 2(2x² + 5x + 2). Then a · c = 4, and 4 + 1 = 5.' },
        { q: 'For grouping, which split of the middle term of 5x² + 13x + 6 is correct?', c: ['5x² + 10x + 3x + 6', '5x² + 6x + 7x + 6', '5x² + 13x + 0x + 6', '5x² + 5x + 8x + 6'], why: 'a · c = 30. Only 10 and 3 multiply to 30 and add to 13.' },
        { q: 'In grouping, after you split the middle term, the two groups should…', c: ['share the same binomial factor', 'have the same GCF', 'add up to zero', 'both start with x²'], why: 'In x(2x + 1) + 3(2x + 1), both groups share (2x + 1). That shared piece becomes one factor.' },
        { q: 'A rectangle has an area of 2x² + 9x + 4. One side is (2x + 1). What is the other side?', c: ['x + 4', 'x + 9', '2x + 4', 'x + 3'], why: '2x² + 9x + 4 = (2x + 1)(x + 4). Check: 2x² + 8x + x + 4.' },
        { q: 'For 3x² + 8x + 4, which two numbers multiply to a · c and add to b?', c: ['2 and 6', '3 and 4', '1 and 12', '4 and 4'], why: 'a · c = 3 · 4 = 12. Then 2 · 6 = 12 and 2 + 6 = 8.' },
        { q: 'Factor: 2x² + 7x + 6', c: ['(2x + 3)(x + 2)', '(2x + 2)(x + 3)', '(2x + 1)(x + 6)', '(2x + 6)(x + 1)'], why: 'Use 3 and 4 (they multiply to a · c = 12 and add to 7): 2x(x + 2) + 3(x + 2).' },
        { q: 'Factor: 3x² + 5x − 2', c: ['(3x − 1)(x + 2)', '(3x + 1)(x − 2)', '(3x + 2)(x − 1)', '(3x − 2)(x + 1)'], why: 'Use 6 and −1 (they multiply to a · c = −6 and add to 5): 3x(x + 2) − 1(x + 2).' },
        { q: 'Finish the factoring: 3x(x − 4) + 2(x − 4)', c: ['(3x + 2)(x − 4)', '5x(x − 4)', '(3x − 2)(x + 4)', '6x(x − 4)'], why: 'Both groups share (x − 4). Pull it out, and 3x + 2 is what is left.' },
        { q: 'Factor: 6x² + 7x + 2', c: ['(2x + 1)(3x + 2)', '(6x + 1)(x + 2)', '(3x + 1)(2x + 2)', '(6x + 2)(x + 1)'], why: 'Use 3 and 4 (they multiply to a · c = 12 and add to 7): 3x(2x + 1) + 2(2x + 1).' },
        { q: 'Factor: 2x² − 7x + 3', c: ['(2x − 1)(x − 3)', '(2x + 1)(x + 3)', '(2x − 3)(x − 1)', '(2x + 1)(x − 3)'], why: 'Use −1 and −6 (they multiply to a · c = 6 and add to −7): x(2x − 1) − 3(2x − 1).' },
        { q: 'Ava splits 2x² + 7x + 3 into 2x² + 3x + 4x + 3. Why will her grouping not work?', c: ['3 and 4 add to 7 but multiply to 12, not a · c = 6', 'She should split it as 2x² + 7x + 0x + 3', 'She should multiply 2 and 7 first', 'Nothing — her split works'], why: 'The two numbers must multiply to a · c = 6 and add to 7. That pair is 1 and 6.' },
        { q: 'For 4x² + 4x − 3, which split of the middle term will work for grouping?', c: ['4x² + 6x − 2x − 3', '4x² + 3x + x − 3', '4x² + 2x + 2x − 3', '4x² − 6x + 2x − 3'], why: 'a · c = 4 · (−3) = −12. Then 6 · (−2) = −12 and 6 + (−2) = 4.' },
        { q: 'Which is NOT a step in factoring by grouping?', c: ['Add a and c together', 'Multiply a · c', 'Split the middle term into two pieces', 'Pull out the binomial both groups share'], why: 'Grouping uses a · c, not a + c. The other three are real steps.' },
        { q: 'Factor completely: 4x² + 14x + 6', c: ['2(2x + 1)(x + 3)', '(2x + 1)(x + 3)', '2(2x + 3)(x + 1)', '2(x + 1)(x + 3)'], why: 'GCF first: 2(2x² + 7x + 3). Use 1 and 6 to split 7x, giving (2x + 1)(x + 3).' },
        { q: 'Which binomial is a factor of 5x² + 11x + 2?', c: ['5x + 1', '5x + 2', 'x + 1', 'x + 11'], why: 'a · c = 10, and 1 + 10 = 11. So 5x² + 11x + 2 = (5x + 1)(x + 2).' },
        { q: 'A rectangle has an area of 3x² + 14x + 8. One side is (x + 4). What is the other side?', c: ['3x + 2', '3x + 4', 'x + 2', '3x + 10'], why: '(x + 4)(3x + 2) = 3x² + 2x + 12x + 8 = 3x² + 14x + 8.' },
      ],
      realLife: {
        text: `<p>Grouping is a "split it, then pair it up" plan. You use the same idea outside math.</p>
          <ul><li><b>Group orders:</b> 3 friends each get a $6 meal and a $2 drink, and then 5 more friends get the same. That is 3(6 + 2) + 5(6 + 2) = (3 + 5)(6 + 2) = $64. The shared (6 + 2) gets pulled out, just like in grouping.</li>
          <li><b>Cleaning your room:</b> split everything into two piles, then find what each pile has in common.</li>
          <li><b>Building:</b> builders turn an area like 2x² + 7x + 3 into side lengths (2x + 1) and (x + 3).</li></ul>`,
        prompt: 'Explain the steps of factoring by grouping in your own words, as if you were teaching a friend who has never seen it. Use 2x² + 7x + 3 if it helps.',
      },
      practice: 'factorGrouping',
    },
    {
      key: 'a14-07',
      title: 'Difference of squares, perfect squares, and a factoring strategy',
      videos: [
        { id: 'HLNSouzygw0', title: 'Difference of squares intro' },
        { id: 'JX5Zvh6swmo', title: 'Perfect square factorization intro' },
        { id: '2hHyY1eyHQs', title: 'Strategy in factoring quadratics' },
      ],
      learn: `
        <p>The special products from Lesson 3 also work backwards.</p>
        <ul>
          <li><b>Difference of squares:</b> a² − b² = (a + b)(a − b). Example: x² − 25 = (x + 5)(x − 5).</li>
          <li><b>Perfect square trinomial</b> (a three-term expression that equals a binomial squared): a² + 2ab + b² = (a + b)², and a² − 2ab + b² = (a − b)². Example: x² + 6x + 9 = (x + 3)².</li>
        </ul>
        <p><b>Spot a perfect square:</b> the first and last terms are squares (like x² and 9), and the middle term is 2 times their roots (2 · x · 3 = 6x).</p>
        <p><b>Watch out:</b> x² + 25 is a <b>sum</b> of squares. It does not factor this way.</p>
        <p><b>Strategy checklist:</b></p>
        <ol>
          <li>Pull out a GCF first.</li>
          <li>Two terms, a square minus a square? Use difference of squares.</li>
          <li>Three terms? Check for a perfect square. If not, use product-and-sum (when a = 1) or grouping (when a ≠ 1).</li>
          <li>Check by multiplying back.</li>
        </ol>
        <p><b>Worked example:</b> factor 2x² − 18.</p>
        <ol>
          <li>The GCF is 2: 2(x² − 9).</li>
          <li>x² − 9 is a difference of squares: (x + 3)(x − 3).</li>
          <li>Answer: 2(x + 3)(x − 3).</li>
        </ol>`,
      quiz: [
        { q: 'Factor: x² − 36', c: ['(x + 6)(x − 6)', '(x − 6)²', '(x + 6)²', '(x + 18)(x − 18)'], why: 'x² − 36 = x² − 6², a difference of squares: (x + 6)(x − 6).' },
        { q: 'Factor: x² + 10x + 25', c: ['(x + 5)²', '(x − 5)²', '(x + 5)(x − 5)', '(x + 25)(x + 1)'], why: '25 = 5² and 10x = 2 · x · 5, so it is (x + 5)².' },
        { q: 'Factor: x² − 14x + 49', c: ['(x − 7)²', '(x + 7)²', '(x + 7)(x − 7)', '(x − 49)(x + 1)'], why: '49 = 7² and −14x = −2 · x · 7, so it is (x − 7)².' },
        { q: 'Factor: 4x² − 9', c: ['(2x + 3)(2x − 3)', '(4x + 3)(x − 3)', '(2x − 3)²', '(4x + 9)(x − 1)'], why: '4x² = (2x)² and 9 = 3². Difference of squares: (2x + 3)(2x − 3).' },
        { q: 'Which expression does NOT factor as a difference of squares?', c: ['x² + 16', 'x² − 16', 'x² − 1', '9x² − 4'], why: 'x² + 16 is a sum, not a difference. A difference of squares needs a minus sign.' },
        { q: 'Is x² + 8x + 16 a perfect square trinomial?', c: ['Yes — it equals (x + 4)²', 'No — 8 is not a perfect square', 'Yes — it equals (x + 8)²', 'No — it equals (x + 4)(x − 4)'], why: '16 = 4² and 8x = 2 · x · 4. So x² + 8x + 16 = (x + 4)².' },
        { q: 'Why is x² + 10x + 9 NOT a perfect square trinomial?', c: ['The middle term would have to be 6x (or −6x), since 2 · x · 3 = 6x', '9 is not a perfect square', 'It has three terms', '10 is an even number'], why: 'A perfect square ending in 9 = 3² would be x² + 6x + 9. This one is (x + 1)(x + 9).' },
        { q: 'What should you ALWAYS look for first when you factor?', c: ['A GCF (greatest common factor)', 'A difference of squares', 'Two numbers that add to the constant', 'The biggest exponent'], why: 'Pulling out the GCF first makes the numbers smaller and the rest easier.' },
        { q: 'Factor completely: 3x² − 12', c: ['3(x + 2)(x − 2)', '3(x − 2)²', '3(x + 4)(x − 4)', '(3x + 2)(x − 6)'], why: 'GCF 3: 3(x² − 4). Then x² − 4 = (x + 2)(x − 2).' },
        { q: 'Factor completely: 2x² + 12x + 18', c: ['2(x + 3)²', '2(x + 9)(x + 1)', '(2x + 3)²', '2(x − 3)²'], why: 'GCF 2: 2(x² + 6x + 9). And x² + 6x + 9 = (x + 3)², a perfect square.' },
        { q: 'Which method fits x² − 3x − 10 best?', c: ['Product-and-sum: two numbers that multiply to −10 and add to −3', 'Difference of squares', 'Perfect square trinomial', 'Grouping with a · c = 30'], why: 'Three terms, a = 1, and no perfect square. −5 and 2 work: (x − 5)(x + 2).' },
        { q: 'A square tile has an area of x² + 12x + 36 square inches. How long is one side?', c: ['x + 6 inches', 'x + 36 inches', 'x + 12 inches', 'x + 3 inches'], why: 'x² + 12x + 36 = (x + 6)². A square with side x + 6 has that area.' },
        { q: 'Factor: x² − 64', c: ['(x + 8)(x − 8)', '(x − 8)²', '(x + 32)(x − 32)', '(x + 8)²'], why: 'x² − 64 is a square minus a square: x² − 8². So it is (x + 8)(x − 8).' },
        { q: 'Factor: x² + 16x + 64', c: ['(x + 8)²', '(x − 8)²', '(x + 8)(x − 8)', '(x + 16)(x + 4)'], why: 'x² and 64 are squares, and 2 · x · 8 = 16x. So it is (x + 8)².' },
        { q: 'Factor: x² − 18x + 81', c: ['(x − 9)²', '(x + 9)²', '(x + 9)(x − 9)', '(x − 3)(x − 27)'], why: 'x² and 81 are squares, and 2 · x · 9 = 18x. The middle is negative, so it is (x − 9)².' },
        { q: 'Factor: 9x² − 1', c: ['(3x + 1)(3x − 1)', '(9x + 1)(x − 1)', '(3x − 1)²', '(9x − 1)(x + 1)'], why: '9x² = (3x)² and 1 = 1². A square minus a square gives (3x + 1)(3x − 1).' },
        { q: 'Factor: 25x² − 49', c: ['(5x + 7)(5x − 7)', '(25x + 7)(x − 7)', '(5x − 7)²', '(5x + 49)(5x − 1)'], why: '25x² = (5x)² and 49 = 7². So it is (5x + 7)(5x − 7).' },
        { q: 'Which is NOT a perfect square trinomial?', c: ['x² + 6x + 16', 'x² + 6x + 9', 'x² − 4x + 4', 'x² + 20x + 100'], why: '16 = 4², so the middle term would need to be 8x. 6x does not match, so it is not a perfect square.' },
        { q: 'Zoe says x² + 49 = (x + 7)(x − 7). What was her mistake?', c: ['(x + 7)(x − 7) is x² − 49; a sum of squares like x² + 49 does not factor this way', 'It should be (x + 7)²', 'It should be (x − 7)²', 'Nothing — she is right'], why: 'Multiply back: (x + 7)(x − 7) = x² − 49, not x² + 49.' },
        { q: 'Factor completely: 2x² − 50', c: ['2(x + 5)(x − 5)', '2(x − 5)²', '2(x + 25)(x − 25)', '(2x + 5)(x − 10)'], why: 'GCF first: 2(x² − 25). Then x² − 25 = (x + 5)(x − 5).' },
        { q: 'Factor completely: 3x² − 18x + 27', c: ['3(x − 3)²', '3(x + 3)²', '3(x − 9)(x + 1)', '(3x − 9)²'], why: 'GCF first: 3(x² − 6x + 9). Then x² − 6x + 9 = (x − 3)².' },
        { q: 'Which method fits 2x² + 7x + 3 best?', c: ['Grouping, since the leading coefficient is 2', 'Difference of squares', 'Perfect square trinomial', 'Pull out a GCF of 7'], why: 'There is no GCF and no special pattern. a = 2, not 1, so use grouping with a · c = 6.' },
        { q: 'Which method fits x² − 81 best?', c: ['Difference of squares, since it is x² − 9²', 'Perfect square trinomial', 'Grouping with a · c = 81', 'It does not factor'], why: 'It has two terms, a square minus a square. So x² − 81 = (x + 9)(x − 9).' },
        { q: 'A square photo has an area of 4x² + 4x + 1 square inches. How long is one side?', c: ['2x + 1 inches', '4x + 1 inches', '2x + 2 inches', 'x + 1 inches'], why: '4x² = (2x)², 1 = 1², and 2 · 2x · 1 = 4x. So the area is (2x + 1)².' },
      ],
      realLife: {
        text: `<p>These patterns are shortcuts, and a strategy keeps you from getting stuck.</p>
          <ul><li><b>Mental math:</b> 50² − 48² = (50 + 48)(50 − 48) = 98 · 2 = 196. No big squares needed.</li>
          <li><b>Cut-out corner:</b> a square board 10 inches on a side has a 4-inch square cut out. The area left is 10² − 4² = (10 + 4)(10 − 4) = 84 square inches.</li>
          <li><b>Square patio:</b> a patio with an area of x² + 10x + 25 square feet has sides of x + 5 feet.</li></ul>
          <p>A plan like "GCF first, then count the terms" works on any problem.</p>`,
        prompt: 'Explain the steps you would follow to factor any quadratic. Which step comes first, and how do you decide which method to use next?',
      },
      practice: 'diffSquares',
    },
  ],
};
