// Unit 16 — Irrational numbers. NJ: N.RN.B.3
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
export default {
  id: 'a16', n: 16, title: 'Irrational numbers', nj: ['N.RN.B.3'],
  lessons: [
    {
      key: 'a16-01',
      title: 'Irrational numbers',
      videos: [
        { id: 'cLP7INqs3JM', title: 'Intro to rational & irrational numbers' },
        { id: 'd9pO2z2qvXU', title: 'Recognizing rational & irrational numbers' },
      ],
      learn: `
        <p>An <b>integer</b> (a whole number or its negative, like −3, 0, or 5) is where we start.</p>
        <p>A <b>rational number</b> (a number you can write as a fraction of two integers, with a bottom that is not 0) can look like 3/4, −2 (which is −2/1), or 0.75 (which is 3/4).</p>
        <p>As a decimal, a rational number always does one of two things:</p>
        <ul>
          <li>It <b>terminates</b> (stops), like 0.75.</li>
          <li>It <b>repeats</b> (one block of digits goes on forever), like 1/3 = 0.333… or 5/11 = 0.454545…</li>
        </ul>
        <p>An <b>irrational number</b> (a number you can NOT write as a fraction of two integers) has a decimal that never stops and never repeats. Two famous ones are <b>π</b> = 3.14159265… and <b>√2</b> = 1.41421356…</p>
        <p><b>Square root shortcut:</b> the square root of a <b>perfect square</b> (a whole number times itself, like 49 = 7 × 7) is rational: √49 = 7. The square root of a whole number that is not a perfect square, like √2 or √50, is irrational.</p>
        <p><b>Worked example:</b> rational or irrational?</p>
        <ol>
          <li>0.6 = 6/10. It stops, so it is <b>rational</b>.</li>
          <li>0.121212… repeats, so it is <b>rational</b> (it equals 12/99).</li>
          <li>√36 = 6, so it is <b>rational</b>.</li>
          <li>√7: 7 is not a perfect square, so it is <b>irrational</b>.</li>
        </ol>
        <p><b>Watch out:</b> 3.14 and 22/7 are only close to π. π itself is irrational.</p>`,
      quiz: [
        { q: 'Which number is irrational?', c: ['√2', '√9', '0.5', '1/3'], why: '2 is not a perfect square, so √2 = 1.41421356… never stops or repeats. √9 = 3, 0.5 = 1/2.' },
        { q: 'A rational number is any number that…', c: ['can be written as a fraction of two integers (bottom not 0)', 'has no decimal part', 'is bigger than zero', 'has a decimal that never ends'], why: 'Rational comes from "ratio," which means fraction. Negatives, decimals, and 1/3 = 0.333… all count.' },
        { q: 'Is 0.75 rational or irrational?', c: ['Rational — it equals 3/4', 'Irrational — it has a decimal point', 'Irrational — it is not a whole number', 'Neither — it is just a decimal'], why: '0.75 = 75/100 = 3/4. A decimal that stops is always rational.' },
        { q: 'Is 0.333… (the 3s go on forever) rational or irrational?', c: ['Rational — it equals 1/3', 'Irrational — it never ends', 'Irrational — a calculator has to cut it off', 'Irrational — 0.333 is not exactly 1/3'], why: 'The 3 repeats in a pattern, and 1 ÷ 3 = 0.333… A repeating decimal is rational.' },
        { q: 'Is π rational or irrational?', c: ['Irrational — its decimal never ends or repeats', 'Rational — it equals 22/7', 'Rational — it equals 3.14', 'Rational — it is used in formulas'], why: 'π = 3.14159265… with no pattern. 22/7 = 3.142857… and 3.14 are only close to π.' },
        { q: 'Which square root is rational?', c: ['√49', '√50', '√3', '√8'], why: '49 = 7 × 7, so √49 = 7. 50, 3, and 8 are not perfect squares.' },
        { q: 'Which number is rational?', c: ['−8', '√5', 'π', '√11'], why: '−8 = −8/1, a fraction of two integers. Negative numbers can be rational.' },
        { q: 'The decimal 0.454545… (45 repeats forever) is…', c: ['rational, because the digits repeat in a pattern', 'irrational, because it never ends', 'irrational, because two digits repeat instead of one', 'a whole number'], why: 'Any repeating pattern makes a fraction. This one equals 5/11.' },
        { q: 'A calculator shows √2 = 1.414213562. What is true about the real decimal?', c: ['It never stops and never repeats', 'It stops after the 2', 'It repeats 1414 forever', 'It ends after 9 digits'], why: 'The screen only has room for a few digits. √2 is irrational, so its digits go on forever with no pattern.' },
        { q: 'Is the number 7 rational?', c: ['Yes — 7 = 7/1', 'No — it is not written as a fraction', 'No — it is a prime number', 'No — √7 is irrational'], why: 'Every integer is rational. Just put it over 1.' },
        { q: 'Which list has ONLY irrational numbers?', c: ['√3, π, √10', '√4, π, √10', '√3, 0.5, π', '1/3, √2, √7'], why: '√4 = 2, 0.5 = 1/2, and 1/3 are rational. 3 and 10 are not perfect squares.' },
        { q: 'A square rug has an area of 2 square feet, so each side is √2 feet. Is the side length rational?', c: ['No — √2 is irrational', 'Yes — it is about 1.41 feet', 'Yes — every length you can measure is rational', 'Yes — 2 is rational, so √2 is too'], why: '2 is not a perfect square, so √2 is irrational. 1.41 is only a rounded value.' },
        { q: 'Which square root is irrational?', c: ['√15', '√16', '√25', '√100'], why: '15 is not a perfect square, so √15 is irrational. The others equal 4, 5, and 10.' },
        { q: 'Is 0.125 rational or irrational?', c: ['Rational — it equals 1/8', 'Irrational — it has three decimal places', 'Irrational — it is not a whole number', 'Rational — it equals 1/125'], why: 'The decimal stops, so it is rational. 0.125 = 125/1000 = 1/8.' },
        { q: 'Is −5 rational or irrational?', c: ['Rational — it equals −5/1', 'Irrational — it is negative', 'Irrational — it is not written as a fraction', 'Neither — negative numbers are not rational or irrational'], why: 'Every integer is rational. −5 = −5/1, a fraction of two integers.' },
        { q: 'Is 0.272727… (27 repeats forever) rational or irrational?', c: ['Rational — the digits repeat in a pattern', 'Irrational — it never ends', 'Irrational — 27 is not a perfect square', 'Rational — it stops after 27'], why: 'A repeating decimal is rational. 0.272727… = 27/99 = 3/11.' },
        { q: 'Is √64 rational or irrational?', c: ['Rational — √64 = 8', 'Irrational — it has a square root sign', 'Irrational — 64 is an even number', 'Irrational — square roots never end'], why: '64 is a perfect square: 8 × 8 = 64. So √64 = 8, which is rational.' },
        { q: 'Is √20 rational or irrational?', c: ['Irrational — 20 is not a perfect square', 'Rational — it equals 10', 'Rational — it equals exactly 4.47', 'Rational — 20 is a whole number'], why: '4² = 16 and 5² = 25, so no whole number squared makes 20. So √20 is irrational.' },
        { q: 'Which number is NOT rational?', c: ['√6', '6', '0.6', '6/7'], why: '6 is not a perfect square, so √6 is irrational. The other three can be written as fractions.' },
        { q: 'Which decimal is irrational?', c: ['0.1010010001… (one more 0 each time)', '0.101010… (10 repeats)', '0.1001', '0.111… (1 repeats)'], why: 'No block of digits repeats, because the gaps keep growing. It never stops and never repeats, so it is irrational.' },
        { q: 'Sam says 22/7 is irrational because it is so close to π. What was his mistake?', c: ['22/7 is a fraction of two integers, so it is rational', 'Nothing — numbers close to π are irrational', '22/7 is rational only because 22 is even', '22/7 is exactly equal to π'], why: '22/7 = 3.142857142857…, which repeats. π = 3.14159…, so they are only close.' },
        { q: 'Which list has ONLY rational numbers?', c: ['−2, 0.4, √9', '−2, 0.4, √8', '√2, 0.4, 9', '−2, π, √9'], why: '√9 = 3 and 0.4 = 2/5, so all three are fractions. √8, √2, and π are irrational.' },
        { q: 'Which fraction makes a decimal that repeats forever?', c: ['2/3', '1/2', '3/4', '1/5'], why: '2/3 = 0.666…, which repeats forever. 1/2 = 0.5, 3/4 = 0.75, and 1/5 = 0.2 all stop.' },
        { q: 'A circle is 1 foot across, so the distance around it is π feet. Is that length rational?', c: ['No — π is irrational', 'Yes — it is 3.14 feet', 'Yes — 1 foot is rational', 'Yes — you can measure it with a tape'], why: 'The distance around is exactly π feet. π is irrational, so the length is irrational.' },
      ],
      realLife: {
        text: `<p>Irrational numbers often show up when you measure circles and diagonals (slanted lines from corner to corner).</p>
          <ul><li><b>Bike wheel:</b> the distance around a circle is π times the distance across. A wheel 2 feet across rolls 2π ≈ 6.28 feet each turn.</li>
          <li><b>Floor tiles:</b> a square tile 1 foot on each side has a diagonal of exactly √2 feet. A tile installer cuts it at about 1.41 feet, because no tape measure can show a decimal that never ends.</li>
          <li><b>Calculators</b> round too. They show √2 as 1.414213562, but the real digits keep going forever.</li></ul>`,
        prompt: 'Why can a calculator or a tape measure never show the exact value of π or √2? Explain in your own words, using what you learned about their decimals.',
      },
      practice: 'irrational',
    },
    {
      key: 'a16-02',
      title: 'Sums and products of rational and irrational numbers',
      videos: [
        { id: '16-GZWi66CI', title: 'Sums and products of irrational numbers' },
        { id: 'hTJgK-wZMcE', title: 'Recognizing rational & irrational expressions' },
        { id: 'NC6HXlrH53Y', title: 'Worked example: rational vs. irrational expressions (unknowns)' },
      ],
      learn: `
        <p>A <b>sum</b> (the answer to an addition) or a <b>product</b> (the answer to a multiplication) can be rational (can be written as a fraction) or irrational (cannot). Here are the rules.</p>
        <ul>
          <li><b>rational + rational = rational</b> and <b>rational × rational = rational</b>. Example: 1/2 + 3/4 = 5/4.</li>
          <li><b>rational + irrational = irrational</b>. Example: 5 + √2.</li>
          <li><b>nonzero</b> (not 0) <b>rational × irrational = irrational</b>. Example: 4π. But 0 × √2 = 0, which is rational.</li>
          <li><b>irrational + irrational</b> and <b>irrational × irrational</b> can go either way. √2 + √2 = 2√2 (irrational), but √2 + (−√2) = 0 (rational). √2 × √3 = √6 (irrational), but √3 × √3 = 3 (rational).</li>
        </ul>
        <p><b>Worked example:</b> is √9 + √5 rational or irrational?</p>
        <ol>
          <li>Simplify first. √9 = 3, because 3 × 3 = 9. So that part is rational.</li>
          <li>√5 is irrational, because 5 is not a perfect square (a whole number times itself).</li>
          <li>rational + irrational = irrational. So √9 + √5 is <b>irrational</b>.</li>
        </ol>
        <p><b>Watch out:</b> √9 + √5 is NOT √14. You can not add the numbers under square roots. You CAN multiply them: √8 × √2 = √16 = 4.</p>`,
      quiz: [
        { q: 'A rational number plus an irrational number is always…', c: ['irrational', 'rational', 'zero', 'a whole number'], why: 'Adding a fraction can never cancel out a decimal that never ends or repeats.' },
        { q: 'Is 5 + √2 rational or irrational?', c: ['Irrational — rational + irrational is irrational', 'Rational — 5 is rational', 'Rational — it equals 7', 'Rational — it equals √7'], why: '5 is rational and √2 is irrational. Their sum is irrational. You cannot just add 5 and 2.' },
        { q: 'Which product is rational?', c: ['√3 × √3', '2 × √3', '√2 × √3', '2 × π'], why: '√3 × √3 = 3. The others stay irrational: 2√3, √6, and 2π.' },
        { q: 'Is 4 × π rational or irrational?', c: ['Irrational — nonzero rational × irrational is irrational', 'Rational — 4 is rational', 'Rational — it equals 12.56', 'Rational — it equals 4.14'], why: '4π = 12.566370… and never ends or repeats. 12.56 is only a rounded value.' },
        { q: 'What is 0 × √7?', c: ['0, which is rational', '√7, which is irrational', '7, which is rational', '0, which is irrational'], why: 'Anything times 0 is 0, and 0 = 0/1. That is why the rule says nonzero rational.' },
        { q: 'What is √2 + (−√2)?', c: ['0, which is rational', '2√2, which is irrational', '−2√2, which is irrational', '2, which is rational'], why: 'A number plus its opposite is 0. So two irrationals can add up to a rational.' },
        { q: 'When you add two irrational numbers, the answer is…', c: ['sometimes rational, sometimes irrational', 'always irrational', 'always rational', 'always 0'], why: '√2 + √2 = 2√2 is irrational, but √2 + (−√2) = 0 is rational.' },
        { q: 'Is 1/2 + 3/4 rational?', c: ['Yes — it equals 5/4', 'No — adding fractions makes an irrational number', 'Yes — it equals 4/6', 'No — the bottoms are different'], why: '1/2 = 2/4, and 2/4 + 3/4 = 5/4. Rational + rational is rational.' },
        { q: 'Is √9 + √2 rational or irrational?', c: ['Irrational — √9 = 3, and 3 + √2 is irrational', 'Rational — it equals √11', 'Rational — it equals 5', 'Rational — √9 makes the whole thing rational'], why: '√9 = 3 is rational, √2 is irrational. Rational + irrational is irrational.' },
        { q: 'Which sum is irrational?', c: ['2 + √3', '√4 + 1', '0.5 + 1/2', '√16 + √9'], why: '√4 = 2, √16 = 4, √9 = 3, and 0.5 = 1/2 are rational. Only √3 is irrational.' },
        { q: 'Is √8 × √2 rational or irrational?', c: ['Rational — it equals √16 = 4', 'Irrational — both parts are irrational', 'Irrational — it equals √10', 'Rational — it equals 16'], why: 'Multiply under the roots: √8 × √2 = √(8 × 2) = √16 = 4.' },
        { q: 'A bike wheel is 2 feet across, so it rolls 2 × π feet each turn. Is that distance rational?', c: ['No — 2π is irrational', 'Yes — it is about 6.28 feet', 'Yes — 2 is rational', 'Yes — it equals 6 feet'], why: '2 is a nonzero rational and π is irrational, so 2π is irrational. 6.28 is rounded.' },
        { q: 'Is √5 − 2 rational or irrational?', c: ['Irrational — taking a rational number away from an irrational one leaves it irrational', 'Rational — 2 is rational', 'Rational — it equals √3', 'Rational — it equals 3'], why: '√5 − 2 is the same as √5 + (−2). Irrational plus rational is irrational.' },
        { q: 'Is 3/4 × 8 rational or irrational?', c: ['Rational — it equals 6', 'Irrational — it mixes a fraction and a whole number', 'Rational — it equals 3/32', 'Irrational — 3/4 is not a whole number'], why: 'Rational × rational = rational. 3/4 × 8 = 24/4 = 6.' },
        { q: 'Which product is irrational?', c: ['3 × √2', '√2 × √2', '0 × √2', '√8 × √2'], why: 'Nonzero rational × irrational is irrational. The other products equal 2, 0, and 4.' },
        { q: 'Is (√2)² + 1 rational or irrational?', c: ['Rational — (√2)² = 2, so it equals 3', 'Irrational — it has √2 in it', 'Irrational — it equals √3', 'Rational — it equals 5'], why: 'Squaring undoes the square root: (√2)² = √2 × √2 = 2. Then 2 + 1 = 3.' },
        { q: 'Is 0.5 × π rational or irrational?', c: ['Irrational — nonzero rational × irrational is irrational', 'Rational — 0.5 is rational', 'Rational — it equals 1.57', 'Rational — half of any number is rational'], why: '0.5 is a nonzero rational number, and π is irrational. So their product is irrational.' },
        { q: 'Is √3 × √5 rational or irrational?', c: ['Irrational — it equals √15', 'Rational — it equals √8', 'Rational — it equals 15', 'Rational — any product of roots is rational'], why: 'Multiply under the roots: √3 × √5 = √15. 15 is not a perfect square, so √15 is irrational.' },
        { q: 'Which sum is NOT irrational?', c: ['√25 + 1', '√2 + 1', 'π + 1', '√3 + √3'], why: '√25 = 5, so √25 + 1 = 6, which is rational. The other three sums are irrational.' },
        { q: 'Sam says √4 + √9 = √13. What was his mistake?', c: ['You cannot add under square roots; √4 + √9 = 2 + 3 = 5', 'The answer should be √36', 'The answer should be 13', 'Nothing — he is right'], why: 'Find each root first: √4 = 2 and √9 = 3. Then 2 + 3 = 5, which is rational.' },
        { q: 'Mia says, "irrational × irrational is always irrational." Which example proves her wrong?', c: ['√7 × √7 = 7', '√2 × √3 = √6', 'π × π = π²', '√5 × 2 = 2√5'], why: '√7 is irrational, but √7 × √7 = 7 is rational. One example is enough to break "always."' },
        { q: 'Is 1/3 + 1/6 rational?', c: ['Yes — it equals 1/2', 'No — the bottoms are different', 'Yes — it equals 2/9', 'No — 1/3 never ends as a decimal'], why: 'Rational + rational = rational. 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.' },
        { q: 'Which sum is rational?', c: ['√2 + (5 − √2)', '√2 + 5', '√2 + √2', '√3 + 1'], why: 'The √2 and −√2 cancel: √2 + 5 − √2 = 5, which is rational.' },
        { q: 'A square tile has sides of √3 inches. Its area is √3 × √3 square inches. Is the area rational?', c: ['Yes — √3 × √3 = 3 square inches', 'No — √3 is irrational', 'No — it equals √6 square inches', 'Yes — it equals 9 square inches'], why: 'A square root times itself gives the number inside. The area is exactly 3 square inches.' },
      ],
      realLife: {
        text: `<p>Builders and designers mix rational and irrational numbers all the time.</p>
          <ul><li><b>Garden fence:</b> a round garden 3 meters across needs 3π ≈ 9.42 meters of fence. 3 is rational and π is irrational, so the exact length is irrational. The builder buys 9.5 meters to be safe.</li>
          <li><b>Tiles:</b> a square tile with an area of 2 square feet has sides of √2 feet. Side × side is √2 × √2 = 2, a nice rational number again.</li>
          <li><b>Phone screens</b> are measured along the diagonal, which is often irrational, so stores round to sizes like 6.1 inches.</li></ul>`,
        prompt: 'Your friend says, "If you add two irrational numbers, you always get another irrational number." Is he right? Explain using an example from this lesson.',
      },
      practice: 'irrationalOps',
    },
    {
      key: 'a16-03',
      title: 'Proofs concerning irrational numbers',
      videos: [
        { id: 'HKUJkMQsGkM', title: 'Sum and product of rational numbers' },
        { id: 'pPM72fPwIjw', title: 'Proof: sum of rational & irrational is irrational' },
        { id: 'KT32CsdEZEY', title: 'Proof: product of rational & irrational is irrational' },
      ],
      learn: `
        <p>A <b>proof</b> (a step-by-step reason that shows something is ALWAYS true) is stronger than testing a few numbers.</p>
        <p>One kind is <b>proof by contradiction</b>. A <b>contradiction</b> is two facts that can not both be true. The plan:</p>
        <ol>
          <li>Pretend the <b>opposite</b> of what you want to prove is true.</li>
          <li>Follow the math step by step.</li>
          <li>Reach something impossible. That means the pretend idea was wrong, so the real claim is true.</li>
        </ol>
        <p>You do this in Sudoku: "If this box were a 5, that row would have two 5s. Impossible! So it is not 5."</p>
        <p><b>One fact we need:</b> rational − rational is always rational. Subtracting two fractions gives another fraction.</p>
        <p><b>Worked example:</b> prove that 3 + √2 is irrational.</p>
        <ol>
          <li>Pretend 3 + √2 is rational. Call it <b>s</b>.</li>
          <li>Subtract 3 from both sides: √2 = s − 3.</li>
          <li>s and 3 are both rational, so s − 3 is rational. That would make √2 rational.</li>
          <li>But √2 is irrational. It can not be both! That is a contradiction.</li>
          <li>So the pretend idea was wrong. <b>3 + √2 is irrational.</b></li>
        </ol>
        <p>The same steps work for ANY rational number plus ANY irrational number. For products, you divide instead of subtract. That is why the rational number must not be 0.</p>`,
      quiz: [
        { q: 'In a proof by contradiction, you start by…', c: ['pretending the opposite of what you want to prove is true', 'assuming what you want to prove is true', 'testing a few numbers on a calculator', 'drawing a graph of the numbers'], why: 'You pretend the opposite, then show it leads to something impossible.' },
        { q: 'A contradiction is…', c: ['two facts that cannot both be true', 'a fact that is always true', 'a guess you check with a calculator', 'another name for an equation'], why: 'Example: "√2 is rational" and "√2 is irrational" cannot both be true.' },
        { q: 'To prove "3 + √2 is irrational" by contradiction, what do you pretend first?', c: ['3 + √2 is rational', '3 + √2 is irrational', '√2 is rational', '3 is irrational'], why: 'Pretend the opposite of the claim. The claim says irrational, so pretend it is rational.' },
        { q: 'Rational − rational is always…', c: ['rational', 'irrational', 'zero', 'sometimes irrational'], why: 'Two fractions subtracted give a fraction. Example: 5/2 − 1/3 = 15/6 − 2/6 = 13/6.' },
        { q: 'Pretend 5 + √3 = s, where s is rational. Solve for √3.', c: ['√3 = s − 5', '√3 = s + 5', '√3 = 5s', '√3 = s ÷ 5'], why: 'Subtract 5 from both sides: √3 = s − 5.' },
        { q: 'In that proof, s − 5 is rational, so √3 would be rational. Why is that a problem?', c: ['√3 is irrational, so it cannot also be rational', 'Rational numbers cannot be subtracted', 's might be a negative number', '5 is not a perfect square'], why: '3 is not a perfect square, so √3 is irrational. Being both is impossible.' },
        { q: 'What does that contradiction prove about 5 + √3?', c: ['It is irrational', 'It is rational', 'It equals √8', 'Nothing — the proof failed'], why: 'Pretending it was rational led to something impossible, so it must be irrational.' },
        { q: 'Why does the proof need the fact "rational − rational is rational"?', c: ['It shows s − 5 is rational, which would make √3 rational', 'It shows every number is rational', 'It makes the answer come out to 0', 'It shows that s must be negative'], why: 'That fact is the step that turns the irrational number into a "rational" one, which is the impossible part.' },
        { q: 'Pretend 2 × √5 = s, where s is rational. Solve for √5.', c: ['√5 = s ÷ 2', '√5 = s − 2', '√5 = 2s', '√5 = s + 2'], why: 'Divide both sides by 2. A rational divided by 2 is rational, so √5 would be rational. Impossible!' },
        { q: 'Why does the product rule say the rational number must be nonzero?', c: ['0 × any number is 0, which is rational', 'You cannot write 0 as a fraction', '0 is an irrational number', 'You cannot multiply by 0'], why: 'The proof divides by the rational number, and you cannot divide by 0. Also, 0 × √5 = 0 is rational.' },
        { q: 'Four friends each say they brought 2 water bottles, but there are only 7 bottles. Why is this a contradiction?', c: ['4 × 2 = 8, so 8 bottles and 7 bottles cannot both be true', 'Water bottles cannot be counted', '7 is an odd number', 'Some bottles might be empty'], why: 'If every friend brought 2, there would be 8. There are 7, so someone brought fewer.' },
        { q: 'After you reach a contradiction, what do you conclude?', c: ['The idea you pretended was false, so the opposite is true', 'The idea you pretended was true', 'You made an arithmetic mistake', 'The problem has no answer'], why: 'If pretending leads to something impossible, the pretend idea was wrong.' },
        { q: 'Which sentence starts a proof by contradiction that 6 + √7 is irrational?', c: ['"Suppose 6 + √7 is rational."', '"Suppose 6 + √7 is irrational."', '"Suppose √7 is rational."', '"Suppose 6 is irrational."'], why: 'You pretend the opposite of what you want to prove. You want "irrational," so pretend it is rational.' },
        { q: 'Pretend √2 − 1 = s, where s is rational. Solve for √2.', c: ['√2 = s + 1', '√2 = s − 1', '√2 = s', '√2 = 1 − s'], why: 'Add 1 to both sides: √2 − 1 + 1 = s + 1. So √2 = s + 1.' },
        { q: 'In a proof, you get √2 = s + 1, where s is rational. Why is s + 1 rational?', c: ['s and 1 are both rational, and rational + rational is rational', 's must be a whole number', 'Adding 1 always makes a number rational', 'It is not — s + 1 is irrational'], why: 'Adding two fractions gives a fraction. So s + 1 is rational, which would make √2 rational.' },
        { q: 'In a proof, 4√3 = s, where s is rational, so √3 = s ÷ 4. Which fact shows s ÷ 4 is rational?', c: ['A rational number divided by a nonzero rational number is rational', 'A rational number divided by a rational number is irrational', 'Every square root is rational', 's ÷ 4 is always a whole number'], why: 'A fraction divided by a nonzero fraction is still a fraction. So √3 would be rational, which is impossible.' },
        { q: 'Why is testing a few numbers on a calculator NOT a proof?', c: ['A few examples cannot show something is ALWAYS true', 'Calculators are never right', 'Proofs are not allowed to use numbers', 'Calculators only show whole numbers'], why: 'A proof shows it works every time. Examples only show it worked for the numbers you tried.' },
        { q: 'A counterexample (one example that shows a rule is false) can break "irrational + irrational is always irrational." Which one works?', c: ['√3 + (−√3) = 0', '√3 + √3 = 2√3', '√3 + 1 is irrational', 'π + π = 2π'], why: '√3 and −√3 are both irrational, but their sum, 0, is rational. One example is enough.' },
        { q: 'A class has 30 seats, and every seat holds one student. 32 students say they each have their own seat. Why is this a contradiction?', c: ['32 students cannot each have their own seat when there are only 30 seats', '30 is an even number', 'Some students might be absent', 'Seats cannot be counted'], why: 'Two facts clash: only 30 seats, but 32 students in their own seats. They cannot both be true.' },
        { q: 'In Sudoku, you pretend a box is 5. Then you find a row with two 5s. What do you conclude?', c: ['The box is not 5', 'The box is 5', 'The puzzle has no answer', 'The row should have two 5s'], why: 'The pretend idea led to something impossible, so it was false. That is a proof by contradiction.' },
        { q: 'Sam wants to prove 2 + √3 is irrational. He starts, "Suppose 2 + √3 is irrational." What was his mistake?', c: ['He assumed what he wanted to prove; he should pretend it is rational', 'He should pretend √3 is rational', 'He should start by using a calculator', 'Nothing — that is the right start'], why: 'Proof by contradiction starts with the opposite. To prove irrational, pretend rational, then look for something impossible.' },
        { q: 'Put the proof steps in order. (A) So √5 = s − 1 is rational. (B) Pretend 1 + √5 = s is rational. (C) But √5 is irrational, a contradiction. (D) So 1 + √5 is irrational.', c: ['B, A, C, D', 'A, B, C, D', 'B, C, A, D', 'D, B, A, C'], why: 'Pretend first (B). Follow the math (A). Reach something impossible (C). Then conclude (D).' },
        { q: 'The proof that 3 + √2 is irrational depends on which fact you already know?', c: ['√2 is irrational', '3 is irrational', 'Every sum is irrational', '3 + √2 = √5'], why: 'The contradiction is that √2 would be both rational and irrational. That only works if you know √2 is irrational.' },
        { q: 'Using only "rational + irrational is irrational," which number can you NOT prove is irrational?', c: ['√2 + √2', '1 + √2', '−4 + √3', '1/2 + √5'], why: '√2 + √2 adds two irrational numbers, so that rule does not apply. The others are rational + irrational.' },
      ],
      realLife: {
        text: `<p>You already use proof by contradiction without knowing it.</p>
          <ul><li><b>Sudoku:</b> "If this box were a 7, the column would have two 7s. Impossible, so it is not 7."</li>
          <li><b>Lost phone:</b> "If my phone were in my backpack, it would buzz when my brother calls it. It did not buzz, so it is not in my backpack."</li>
          <li><b>Counting:</b> "If each of 4 friends brought 2 water bottles, there would be 8. There are only 7, so someone brought fewer."</li></ul>
          <p>Each time, you pretend something, follow it, and hit a wall. The wall proves the pretend idea was wrong.</p>`,
        prompt: 'Describe a time you figured something out by thinking, "If that were true, something impossible would happen." What did you pretend, and what did you prove?',
      },
    },
  ],
};
