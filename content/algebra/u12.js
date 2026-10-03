// Unit 12 — Exponents & radicals. NJ: N.RN.A.1, N.RN.A.2
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
export default {
  id: 'a12', n: 12, title: 'Exponents & radicals', nj: ['N.RN.A.1', 'N.RN.A.2'],
  lessons: [
    {
      key: 'a12-01',
      title: 'Exponent properties review',
      videos: [
        { id: 'CZ5ne_mX5_I', title: 'Multiplying & dividing powers (integer exponents)' },
        { id: 'dC1ojsMi1yU', title: 'Powers of products & quotients (integer exponents)' },
        { id: 'Tqpcku0hrPU', title: 'Negative exponent intuition' },
      ],
      learn: `
        <p>An <b>exponent</b> (the small raised number) tells you how many times to multiply the <b>base</b> (the big number under it) by itself. So 2⁴ = 2 · 2 · 2 · 2 = 16. The whole thing, 2⁴, is called a <b>power</b> (a base with an exponent).</p>
        <p>These shortcuts only work when the bases are the <b>same</b>:</p>
        <ul>
          <li><b>Product rule</b> (multiplying powers): add the exponents. x³ · x⁴ = x⁷.</li>
          <li><b>Quotient rule</b> (dividing powers): subtract the exponents. x⁹ ÷ x⁴ = x⁵.</li>
          <li><b>Power rule</b> (a power raised to another power): multiply the exponents. (x²)⁵ = x¹⁰. An exponent outside parentheses hits every part inside: (2x)³ = 2³ · x³ = 8x³.</li>
          <li><b>Zero exponent:</b> any number except 0 to the 0 power is 1. 7⁰ = 1.</li>
          <li><b>Negative exponent:</b> write 1 over the same power with a positive exponent. 2⁻³ = 1/2³ = 1/8.</li>
        </ul>
        <p><b>Worked example:</b> Simplify (3²)³ ÷ 3⁴.</p>
        <ol>
          <li>Power rule: (3²)³ = 3⁶, because 2 × 3 = 6.</li>
          <li>Quotient rule: 3⁶ ÷ 3⁴ = 3², because 6 − 4 = 2.</li>
          <li>Work it out: 3² = 3 · 3 = <b>9</b>.</li>
        </ol>
        <p><b>Watch out:</b> 2⁻³ is NOT a negative number. It is a small positive fraction, 1/8.</p>`,
      quiz: [
        { q: 'Simplify: x³ · x⁴', c: ['x⁷', 'x¹²', 'x¹', '2x⁷'], why: 'Same base, multiplying: add the exponents. 3 + 4 = 7.' },
        { q: 'Simplify: x⁹ ÷ x⁴', c: ['x⁵', 'x¹³', 'x³⁶', 'x⁻⁵'], why: 'Same base, dividing: subtract the exponents, top minus bottom. 9 − 4 = 5.' },
        { q: 'Simplify: (x²)⁵', c: ['x¹⁰', 'x⁷', 'x²⁵', '5x²'], why: 'A power of a power: multiply the exponents. 2 × 5 = 10.' },
        { q: 'What is 7⁰?', c: ['1', '0', '7', '70'], why: 'Any number except 0 raised to the 0 power equals 1.' },
        { q: 'What is 2⁻³?', c: ['1/8', '−8', '−6', '8'], why: 'A negative exponent means 1 over the positive power: 1/2³ = 1/8.' },
        { q: 'What is 5⁻²?', c: ['1/25', '−25', '−10', '1/10'], why: '5⁻² = 1/5² = 1/25. A negative exponent makes a fraction, not a negative number.' },
        { q: 'What is 2³ · 2²?', c: ['32', '64', '1024', '10'], why: 'Add the exponents: 2⁵ = 32. Check: 8 · 4 = 32.' },
        { q: 'Simplify: (2x)³', c: ['8x³', '2x³', '6x³', '8x'], why: 'The exponent hits both parts: 2³ · x³ = 8x³.' },
        { q: 'What is (3²)³ ÷ 3⁴?', c: ['9', '3', '27', '81'], why: 'Power rule: (3²)³ = 3⁶. Then subtract: 6 − 4 = 2. So 3² = 9.' },
        { q: 'Simplify: x⁵ · x⁻²', c: ['x³', 'x⁷', 'x⁻¹⁰', 'x⁻³'], why: 'Add the exponents: 5 + (−2) = 3.' },
        { q: 'Write 1/x⁴ using a negative exponent.', c: ['x⁻⁴', '−x⁴', 'x⁴', '−4x'], why: '1 over x⁴ is the same as x⁻⁴.' },
        { q: 'Simplify: a⁶ ÷ a⁶', c: ['1', '0', 'a', 'a¹²'], why: 'Subtract: 6 − 6 = 0, and a⁰ = 1. Anything (except 0) divided by itself is 1.' },
      ],
      realLife: {
        text: `<p>Exponents are a shortcut for writing huge and tiny numbers.</p>
          <ul><li><b>Phone storage:</b> 1 gigabyte is about 10⁹ bytes (1,000,000,000). So 1,000 gigabytes is 10³ · 10⁹ = 10¹² bytes. That is one terabyte.</li>
          <li><b>Bacteria:</b> a germ splits in 2 every 20 minutes. After 3 hours (9 splits), one germ becomes 2⁹ = 512 germs.</li>
          <li><b>Tiny things:</b> a millimeter is 10⁻³ meters, which is 1/1,000 of a meter. Negative exponents write small numbers.</li></ul>`,
        prompt: "Your phone has 2⁶ GB of storage and your friend's has 2⁸ GB. Use the quotient rule to find how many times bigger your friend's storage is, and explain your steps.",
      },
      practice: 'exponentRules',
    },
    {
      key: 'a12-02',
      title: 'Radicals: square roots and cube roots',
      videos: [
        { id: 'mbc3_e5lWw0', title: 'Intro to square roots' },
        { id: '87_qIofPwhg', title: 'Intro to cube roots' },
      ],
      learn: `
        <p>A <b>square root</b> undoes <b>squaring</b> (multiplying a number by itself). The <b>√</b> sign (called a <b>radical</b>, the root symbol) asks: "what number times itself gives this?" So √49 = 7, because 7 · 7 = 49.</p>
        <p>The number −7 also works, since (−7) · (−7) = 49. But the √ sign always means the positive one, called the <b>principal root</b> (the main, positive answer). So √49 = 7.</p>
        <p><b>Perfect squares</b> (numbers you get by squaring a whole number) have whole-number roots: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.</p>
        <p>A <b>cube root</b>, written ∛, asks: "what number times itself three times gives this?" So ∛8 = 2, because 2 · 2 · 2 = 8. Negative numbers have cube roots too: ∛(−27) = −3.</p>
        <p>A square root of a negative number, like √(−9), has no real answer. Any number times itself is positive or zero.</p>
        <p><b>Worked example:</b> Find √64 and ∛64.</p>
        <ol>
          <li>Square root: 8 · 8 = 64, so √64 = <b>8</b>.</li>
          <li>Cube root: 4 · 4 · 4 = 64, so ∛64 = <b>4</b>.</li>
          <li>Same number, different root, different answer.</li>
        </ol>
        <p>Roots of fractions work on the top and bottom: √(9/25) = 3/5.</p>`,
      quiz: [
        { q: 'What is √49?', c: ['7', '24.5', '−7', '2401'], why: '7 · 7 = 49, and the √ sign means the positive root.' },
        { q: 'What is √144?', c: ['12', '72', '14', '11'], why: '12 · 12 = 144.' },
        { q: 'What is ∛27?', c: ['3', '9', '13.5', '81'], why: '3 · 3 · 3 = 27.' },
        { q: 'What is ∛(−8)?', c: ['−2', '2', 'no real answer', '−4'], why: '(−2)(−2)(−2) = −8. The cube root of a negative number is negative.' },
        { q: 'What is √(−16)?', c: ['no real answer', '−4', '4', '−8'], why: 'No real number times itself is negative. 4 · 4 = 16 and (−4)(−4) = 16.' },
        { q: 'Which number is a perfect square?', c: ['81', '50', '27', '8'], why: '81 = 9 · 9. The others are not a whole number times itself.' },
        { q: 'What is √(9/25)?', c: ['3/5', '9/5', '3/25', '81/625'], why: 'Take the root of the top and the bottom: √9 = 3 and √25 = 5.' },
        { q: 'What is √0.49?', c: ['0.7', '0.07', '0.245', '7'], why: '0.7 × 0.7 = 0.49.' },
        { q: 'What is √36 + √64?', c: ['14', '10', '100', '50'], why: '√36 = 6 and √64 = 8, so 6 + 8 = 14. Do not add the numbers under the roots first.' },
        { q: 'What is ∛125?', c: ['5', '25', '15', '62.5'], why: '5 · 5 · 5 = 125.' },
        { q: 'Between which two whole numbers is √30?', c: ['5 and 6', '15 and 16', '4 and 5', '29 and 31'], why: '5² = 25 and 6² = 36. Since 30 is between 25 and 36, √30 is between 5 and 6.' },
        { q: 'A square rug has an area of 64 square feet. How long is each side?', c: ['8 feet', '16 feet', '32 feet', '4 feet'], why: 'Side × side = 64, so each side is √64 = 8 feet.' },
      ],
      realLife: {
        text: `<p>Square roots and cube roots turn an area or a space back into a length.</p>
          <ul><li><b>Rooms and rugs:</b> a square room with 144 square feet of floor has walls √144 = 12 feet long.</li>
          <li><b>Boxes:</b> a cube-shaped box that holds 27 cubic feet is ∛27 = 3 feet on each side.</li>
          <li><b>Screens:</b> TV and phone sizes are measured corner to corner. Finding that length uses a square root.</li>
          <li><b>Sports:</b> a square practice area of 100 square yards is 10 yards on each side.</li></ul>`,
        prompt: 'A square garden has an area of 81 square meters. How long is one side, and how do you know? Use the words "square root" in your answer.',
      },
      practice: 'roots',
    },
    {
      key: 'a12-03',
      title: 'Simplifying square roots',
      videos: [
        { id: 'cw3mp8oNASk', title: 'Simplifying square roots' },
        { id: 'uggD8mwglyc', title: 'Simplifying square roots (more examples)' },
      ],
      learn: `
        <p>Some square roots are not whole numbers, like √50. We can still write them in a neater way, called <b>simplest radical form</b> (no perfect square left under the √).</p>
        <p>The key rule: <b>√(a · b) = √a · √b</b>. You can split one root into two roots that multiply.</p>
        <p><b>Steps:</b></p>
        <ol>
          <li>Find the biggest <b>perfect square</b> (a number like 4, 9, 16, 25, 36, 49, 64, 81, 100) that divides your number evenly.</li>
          <li>Split the root into that perfect square times what is left.</li>
          <li>Take the root of the perfect square. It comes out in front.</li>
        </ol>
        <p><b>Worked example:</b> Simplify √50.</p>
        <ol>
          <li>25 is a perfect square, and 50 = 25 · 2.</li>
          <li>So √50 = √25 · √2.</li>
          <li>√25 = 5, so √50 = <b>5√2</b> (read "5 root 2," meaning 5 times √2).</li>
          <li>Check: 5√2 is about 5 × 1.414 = 7.07, and 7.07 × 7.07 is about 50.</li>
        </ol>
        <p><b>Use the biggest square.</b> For √72, using 4 gives 2√18, but 18 still has a 9 inside. Using 36 gives 6√2 in one step.</p>
        <p>If no perfect square (other than 1) divides the number, like √15 or √30, it is already in simplest form.</p>`,
      quiz: [
        { q: 'Simplify √50.', c: ['5√2', '25√2', '2√5', '10√5'], why: '50 = 25 · 2, and √25 = 5, so √50 = 5√2.' },
        { q: 'Simplify √12.', c: ['2√3', '4√3', '3√2', '6√2'], why: '12 = 4 · 3, and √4 = 2, so √12 = 2√3.' },
        { q: 'Simplify √18.', c: ['3√2', '9√2', '2√3', '6√3'], why: '18 = 9 · 2, and √9 = 3, so √18 = 3√2.' },
        { q: 'Simplify √72 all the way (simplest radical form).', c: ['6√2', '2√18', '36√2', '9√8'], why: '72 = 36 · 2, so √72 = 6√2. The answer 2√18 is not finished: 18 still has a 9 inside.' },
        { q: 'Simplify √48.', c: ['4√3', '16√3', '3√4', '8√6'], why: '48 = 16 · 3, and √16 = 4, so √48 = 4√3.' },
        { q: 'Simplify √75.', c: ['5√3', '3√5', '25√3', '15√5'], why: '75 = 25 · 3, and √25 = 5, so √75 = 5√3.' },
        { q: 'Simplify √20.', c: ['2√5', '4√5', '5√2', '10√2'], why: '20 = 4 · 5, and √4 = 2, so √20 = 2√5.' },
        { q: 'Simplify √200.', c: ['10√2', '100√2', '2√10', '20√10'], why: '200 = 100 · 2, and √100 = 10, so √200 = 10√2.' },
        { q: 'Which square root is already in simplest form?', c: ['√30', '√32', '√27', '√45'], why: '30 = 2 · 3 · 5 has no perfect square inside. 32, 27, and 45 contain 16, 9, and 9.' },
        { q: 'Which perfect square should you pull out of √98?', c: ['49', '4', '9', '16'], why: '98 = 49 · 2, so √98 = 7√2. The numbers 4, 9, and 16 do not divide 98 evenly.' },
        { q: '3√2 is the same as which square root?', c: ['√18', '√6', '√12', '√9'], why: 'Put the 3 back inside as 3² = 9. Then √(9 · 2) = √18.' },
        { q: 'A square patio has an area of 32 square feet. What is its side length in simplest radical form?', c: ['4√2 feet', '16√2 feet', '8 feet', '16 feet'], why: 'Side = √32 = √16 · √2 = 4√2 feet, which is about 5.66 feet.' },
      ],
      realLife: {
        text: `<p>Builders, designers, and game makers run into square roots all the time. Simplified roots make the math cleaner.</p>
          <ul><li><b>Diagonals:</b> the corner-to-corner line across a square that is 5 feet on each side is √50 feet. Written neatly, that is 5√2 feet, about 7.07 feet.</li>
          <li><b>Tiles:</b> a square tile with an area of 18 square inches has sides of √18 = 3√2 inches, about 4.24 inches.</li>
          <li><b>Video games:</b> moving 1 step right and 1 step up covers √2 steps, about 1.41. Game engines use roots to find distances.</li></ul>`,
        prompt: 'A square tile has an area of 50 square inches. Write its side length in simplest radical form, and explain each step you used to get there.',
      },
      practice: 'simplifySqrt',
    },
    {
      key: 'a12-04',
      title: 'Rational exponents intro',
      videos: [
        { id: 'lZfXc4nHooo', title: 'Basic fractional exponents' },
        { id: 'gH4IsIEYof0', title: 'Rewriting roots as rational exponents' },
      ],
      learn: `
        <p>An exponent can be a fraction. A <b>rational exponent</b> (an exponent that is a fraction) is another way to write a root. We type it with the ^ sign, which means "to the power of."</p>
        <ul>
          <li><b>x^(1/2) = √x</b>. The 1/2 power means square root.</li>
          <li><b>x^(1/3) = ∛x</b>. The 1/3 power means cube root.</li>
          <li>The <b>denominator</b> (the bottom number of the fraction) tells you which root to take.</li>
        </ul>
        <p><b>Why does this work?</b> Use the product rule from the first lesson: add the exponents. 9^(1/2) · 9^(1/2) = 9^(1/2 + 1/2) = 9¹ = 9. So 9^(1/2) is the number that times itself gives 9. That is √9 = 3.</p>
        <p><b>Worked example:</b> Find 8^(1/3) and 16^(1/2).</p>
        <ol>
          <li>8^(1/3) = ∛8. Since 2 · 2 · 2 = 8, the answer is <b>2</b>.</li>
          <li>16^(1/2) = √16. Since 4 · 4 = 16, the answer is <b>4</b>.</li>
        </ol>
        <p><b>Watch out:</b> 16^(1/2) is NOT 16 ÷ 2 = 8. A fraction exponent means a root, not dividing.</p>
        <p>You can go the other way too: √7 can be written 7^(1/2), and ∛x can be written x^(1/3).</p>`,
      quiz: [
        { q: 'What is 25^(1/2)?', c: ['5', '12.5', '625', '50'], why: 'The 1/2 power means square root. √25 = 5.' },
        { q: 'What is 27^(1/3)?', c: ['3', '9', '81', '13.5'], why: 'The 1/3 power means cube root. 3 · 3 · 3 = 27.' },
        { q: 'Write x^(1/2) as a root.', c: ['√x', '∛x', 'x/2', '2x'], why: 'A denominator of 2 means square root.' },
        { q: 'Write ∛x using a fraction exponent.', c: ['x^(1/3)', 'x³', 'x⁻³', 'x/3'], why: 'A cube root is the 1/3 power.' },
        { q: 'What is 100^(1/2)?', c: ['10', '50', '10,000', '200'], why: '10 · 10 = 100, so the square root is 10. It is not 100 ÷ 2.' },
        { q: 'What is 64^(1/3)?', c: ['4', '8', '32', '192'], why: 'Cube root: 4 · 4 · 4 = 64. The answer 8 is the square root, not the cube root.' },
        { q: 'Which is the same as 7^(1/2)?', c: ['√7', '3.5', '7²', '∛7'], why: 'The 1/2 power is the square root, so 7^(1/2) = √7.' },
        { q: 'What is 9^(1/2) · 9^(1/2)?', c: ['9', '3', '81', '18'], why: 'Add the exponents: 1/2 + 1/2 = 1, so the answer is 9¹ = 9. Check: 3 · 3 = 9.' },
        { q: 'Simplify: (x^(1/2))²', c: ['x', 'x²', 'x^(1/4)', '2√x'], why: 'Power rule: multiply the exponents. 1/2 × 2 = 1, so the answer is x¹ = x.' },
        { q: 'What is 16^(1/2) − 8^(1/3)?', c: ['2', '6', '8', '4'], why: '16^(1/2) = 4 and 8^(1/3) = 2. Then 4 − 2 = 2.' },
        { q: 'Which expression equals 2?', c: ['8^(1/3)', '8^(1/2)', '4^(1/3)', '2^(1/2)'], why: '8^(1/3) = ∛8 = 2, because 2 · 2 · 2 = 8.' },
        { q: 'A cube-shaped box holds 125 cubic inches. Each side is 125^(1/3) inches long. How long is a side?', c: ['5 inches', '25 inches', '41.67 inches', '11.18 inches'], why: '125^(1/3) = ∛125 = 5, because 5 · 5 · 5 = 125.' },
      ],
      realLife: {
        text: `<p>Calculators, spreadsheets, and computer code use fraction exponents, because typing ^(1/2) is easier than drawing a √ sign.</p>
          <ul><li><b>Calculator:</b> type 49^(1/2) and you get 7, the same as √49.</li>
          <li><b>Spreadsheets:</b> in Google Sheets, typing =27^(1/3) shows 3. That is the side length of a cube box that holds 27 cubic units.</li>
          <li><b>Games and apps:</b> code often finds a distance with something like (a² + b²)^(1/2). That is just a square root written as an exponent.</li></ul>`,
        prompt: 'Explain in your own words why 9^(1/2) equals 3 and not 4.5. Use the idea of a square root in your answer.',
      },
      practice: 'rationalExp',
    },
  ],
};
