// Unit 10 — Sequences. NJ: F.IF.A.3, F.BF.A.2, F.LE.A.2
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
export default {
  id: 'a10', n: 10, title: 'Sequences', nj: ['F.IF.A.3', 'F.BF.A.2', 'F.LE.A.2'],
  lessons: [
    {
      key: 'a10-01',
      title: 'Intro to arithmetic sequences',
      videos: [
        { id: 'KRFiAlo7t1E', title: 'Sequences intro' },
        { id: '_cooC3yG_p0', title: 'Intro to arithmetic sequences' },
        { id: 'EU0c6qrrevA', title: 'Extending arithmetic sequences' },
      ],
      learn: `
        <p>A <b>sequence</b> (a list of numbers in a set order) is made of <b>terms</b> (the numbers in the list). The <b>term number</b> (which spot a term is in) tells you if it is the 1st term, the 2nd term, and so on.</p>
        <p>A sequence is really a function: the input is the term number, and the output is the term.</p>
        <p>An <b>arithmetic sequence</b> (a list where you add the same number every time) has a <b>common difference</b> (the number you add each time, called <b>d</b>).</p>
        <p><b>How to find d:</b> take any term and subtract the term before it. Check that you get the same answer all the way along.</p>
        <p><b>Worked example:</b> 5, 8, 11, 14, …</p>
        <ol>
          <li>8 − 5 = 3, 11 − 8 = 3, 14 − 11 = 3. The gap is always 3, so d = 3.</li>
          <li>Next term: 14 + 3 = <b>17</b>. The one after that: 17 + 3 = <b>20</b>.</li>
        </ol>
        <p><b>Going down?</b> Then d is negative. In 20, 16, 12, 8, … each term is 4 less, so d = −4. The next term is 8 + (−4) = 4.</p>
        <p><b>Not arithmetic:</b> 2, 4, 8, 16, … The gaps are 2, 4, 8. They change, so there is no common difference.</p>`,
      quiz: [
        { q: 'What is the common difference of 5, 8, 11, 14, …?', c: ['3', '5', '8', '−3'], why: '8 − 5 = 3 and 11 − 8 = 3. You add 3 every time.' },
        { q: 'What is the next term of 5, 8, 11, 14, …?', c: ['17', '15', '18', '28'], why: 'Add the common difference: 14 + 3 = 17.' },
        { q: 'What is the common difference of 20, 16, 12, 8, …?', c: ['−4', '4', '−8', '20'], why: '16 − 20 = −4. When the list goes down, d is negative.' },
        { q: 'What is the next term of 20, 16, 12, 8, …?', c: ['4', '12', '0', '6'], why: 'd = −4, so 8 + (−4) = 4.' },
        { q: 'Which is an arithmetic sequence?', c: ['3, 7, 11, 15, …', '2, 4, 8, 16, …', '1, 4, 9, 16, …', '1, 2, 4, 7, …'], why: '3, 7, 11, 15 adds 4 every time. In the others, the gaps keep changing.' },
        { q: 'What is the common difference of −8, −14, −20, −26, …?', c: ['−6', '6', '−8', '−14'], why: '−14 − (−8) = −14 + 8 = −6. Each term is 6 less than the one before.' },
        { q: 'In the sequence 4, 9, 14, 19, 24, …, what is the 3rd term?', c: ['14', '3', '19', '9'], why: 'Count from the left: 4 is the 1st term, 9 is the 2nd, 14 is the 3rd.' },
        { q: 'A sequence starts at 10 and has a common difference of 5. What are its first four terms?', c: ['10, 15, 20, 25', '5, 10, 15, 20', '10, 50, 250, 1250', '10, 15, 25, 40'], why: 'Start at 10, then add 5 each time.' },
        { q: 'Fill in the blank: 7, __, 19, 25, …', c: ['13', '12', '14', '16'], why: '25 − 19 = 6, so d = 6. Then 7 + 6 = 13, and 13 + 6 = 19. It checks.' },
        { q: 'What is the next term of 2, −1, −4, −7, …?', c: ['−10', '−4', '10', '−11'], why: 'd = −1 − 2 = −3. Then −7 + (−3) = −10.' },
        { q: 'Which sequence has a common difference of −3?', c: ['10, 7, 4, 1, …', '1, 4, 7, 10, …', '3, 6, 9, 12, …', '−3, −6, −12, −24, …'], why: '7 − 10 = −3 and 4 − 7 = −3. Each step goes down 3.' },
        { q: 'Is 1, 3, 6, 10, … an arithmetic sequence?', c: ['No — the gaps are 2, 3, 4, so they change', 'Yes — it keeps going up', 'Yes — the common difference is 2', 'No — it has odd and even numbers'], why: 'Arithmetic means the same gap every time. Here the gaps grow.' },
        { q: 'What is the common difference of 1.5, 3, 4.5, 6, …?', c: ['1.5', '2', '3', '6'], why: '3 − 1.5 = 1.5 and 4.5 − 3 = 1.5. You add 1.5 every time.' },
        { q: 'What is the next term of 31, 25, 19, 13, …?', c: ['7', '19', '6', '−6'], why: 'd = 25 − 31 = −6. Then 13 + (−6) = 7.' },
        { q: 'What are the next two terms of 9, 13, 17, 21, …?', c: ['25, 29', '25, 30', '22, 23', '42, 84'], why: 'd = 4. Then 21 + 4 = 25 and 25 + 4 = 29.' },
        { q: 'Fill in the blank: 50, 42, __, 26, …', c: ['34', '38', '30', '18'], why: 'd = 42 − 50 = −8. Then 42 − 8 = 34, and 34 − 8 = 26. It checks.' },
        { q: 'Which is NOT an arithmetic sequence?', c: ['5, 10, 20, 40, …', '5, 10, 15, 20, …', '40, 30, 20, 10, …', '−5, −2, 1, 4, …'], why: 'In 5, 10, 20, 40 the gaps are 5, 10, 20. They change, so there is no common difference.' },
        { q: 'For 12, 9, 6, 3, …, Kareem says d = 3. What was his mistake?', c: ['The terms go down, so d = 9 − 12 = −3', 'Nothing — d = 3', 'd is the first term, 12', 'd = 4, because there are 4 terms'], why: 'Always subtract: a term minus the one before it. Going down means d is negative.' },
        { q: 'A bus comes every 15 minutes: 7:00, 7:15, 7:30, 7:45, … When does the 6th bus come?', c: ['8:15', '8:30', '8:00', '8:45'], why: 'Add 15 minutes each time: 7:00, 7:15, 7:30, 7:45, 8:00, 8:15.' },
        { q: 'Gates on one side of a hallway are numbered 1, 3, 5, 7, … What is the 8th gate number?', c: ['15', '16', '17', '9'], why: 'Keep adding 2: 1, 3, 5, 7, 9, 11, 13, 15. The 8th is 15.' },
        { q: 'A sequence starts at −4 and has a common difference of 3. What are its first four terms?', c: ['−4, −1, 2, 5', '−4, −7, −10, −13', '3, −1, −5, −9', '−4, −12, −36, −108'], why: 'Start at −4 and add 3 each time: −4, −1, 2, 5.' },
        { q: 'An arithmetic sequence has a 1st term of 6 and a 2nd term of 11. What is the 3rd term?', c: ['16', '5', '66', '21'], why: 'd = 11 − 6 = 5. Then 11 + 5 = 16.' },
        { q: 'Is 10, 7, 4, 1, −2, … an arithmetic sequence?', c: ['Yes — d = −3 every time', 'No — it goes below zero', 'Yes — d = 3 every time', 'No — the terms get smaller'], why: 'Each gap is −3. Going below zero is fine, because the gap stays the same.' },
        { q: 'A stack of cups: 1 cup is 12 cm tall, 2 cups are 14 cm, 3 cups are 16 cm, 4 cups are 18 cm. What is the common difference, and what does it mean?', c: ['2 cm — each added cup adds 2 cm', '12 cm — each added cup adds 12 cm', '18 cm — the stack is 18 cm tall', '4 cm — there are 4 cups'], why: '14 − 12 = 2, and every gap is 2. Each new cup makes the stack 2 cm taller.' },
      ],
      realLife: {
        text: `<p>Arithmetic sequences show up whenever something changes by the same amount each step.</p>
          <ul><li><b>Bus stop:</b> a bus comes every 15 minutes: 7:00, 7:15, 7:30, 7:45. The common difference is 15 minutes.</li>
          <li><b>Airport gates:</b> on one side of a hallway the gates go 1, 3, 5, 7. The common difference is 2.</li>
          <li><b>Phone battery:</b> 100%, 95%, 90%, 85% each hour. The common difference is −5.</li>
          <li><b>Stairs:</b> each step is 7 inches higher than the last: 7, 14, 21, 28 inches.</li></ul>`,
        prompt: 'Think of something in your life that goes up or down by the same amount each time. Write its first four numbers and say what the common difference is.',
      },
      practice: 'arithSeq',
    },
    {
      key: 'a10-02',
      title: 'Constructing arithmetic sequences',
      videos: [
        { id: '8eSUbi_aYL4', title: 'Using arithmetic sequence formulas' },
        { id: 'lBtb30SjU2Q', title: 'Recursive formulas for arithmetic sequences' },
        { id: 'ViLt2WI0XSg', title: 'Explicit formulas for arithmetic sequences' },
      ],
      learn: `
        <p>There are two ways to write the rule for an arithmetic sequence.</p>
        <p><b>1. Explicit formula</b> (a rule that jumps straight to any term): <b>aₙ = a₁ + (n − 1)d</b></p>
        <ul>
          <li><b>aₙ</b> (say "a sub n") = the term you want</li>
          <li><b>a₁</b> = the first term</li>
          <li><b>d</b> = the common difference</li>
          <li><b>n</b> = the term number</li>
        </ul>
        <p>Why n − 1? To get from the 1st term to the 5th term, you add d only 4 times.</p>
        <p><b>2. Recursive formula</b> (a rule that builds each term from the one before it): give the first term, then say what to add. For example: a₁ = 5, aₙ = aₙ₋₁ + 3. In words: start at 5, and each term is the term before it plus 3.</p>
        <p>The videos write a(n) instead of aₙ. It means the same thing.</p>
        <p><b>Worked example:</b> find the 20th term of 5, 8, 11, 14, …</p>
        <ol>
          <li>The first term is a₁ = 5. The common difference is d = 8 − 5 = 3.</li>
          <li>Plug in n = 20: a₂₀ = 5 + (20 − 1) · 3.</li>
          <li>Parentheses first: 20 − 1 = 19. Then multiply: 19 · 3 = 57.</li>
          <li>Add: 5 + 57 = <b>62</b>.</li>
        </ol>
        <p>The recursive formula would need 19 steps to get there. The explicit formula gets there in one.</p>`,
      quiz: [
        { q: 'What is the explicit formula for 5, 8, 11, 14, …?', c: ['aₙ = 5 + (n − 1) · 3', 'aₙ = 3 + (n − 1) · 5', 'aₙ = 5 + n · 3', 'aₙ = 5 · 3ⁿ⁻¹'], why: 'The first term is a₁ = 5 and d = 3. Put them into aₙ = a₁ + (n − 1)d.' },
        { q: 'What is the 20th term of 5, 8, 11, 14, …?', c: ['62', '65', '60', '100'], why: 'a₂₀ = 5 + (20 − 1) · 3 = 5 + 57 = 62.' },
        { q: 'aₙ = 4 + (n − 1) · 6. What is a₁₀?', c: ['58', '64', '60', '54'], why: '4 + (10 − 1) · 6 = 4 + 9 · 6 = 4 + 54 = 58.' },
        { q: 'What is the recursive formula for 2, 9, 16, 23, …?', c: ['a₁ = 2, aₙ = aₙ₋₁ + 7', 'a₁ = 7, aₙ = aₙ₋₁ + 2', 'a₁ = 2, aₙ = aₙ₋₁ · 7', 'a₁ = 2, aₙ = aₙ₋₁ − 7'], why: 'Start at 2. Each term is the term before it plus 7, because 9 − 2 = 7.' },
        { q: 'a₁ = 3, aₙ = aₙ₋₁ − 4. What are the first four terms?', c: ['3, −1, −5, −9', '3, 7, 11, 15', '−4, −1, 2, 5', '3, −12, 48, −192'], why: 'Start at 3 and subtract 4 each time: 3, −1, −5, −9.' },
        { q: 'a₁ = −2, aₙ = aₙ₋₁ + 5. What is a₄?', c: ['13', '18', '8', '3'], why: '−2, 3, 8, 13. You add 5 three times to go from a₁ to a₄.' },
        { q: 'What is the explicit formula for 20, 16, 12, 8, …?', c: ['aₙ = 20 + (n − 1)(−4)', 'aₙ = 20 + (n − 1) · 4', 'aₙ = −4 + (n − 1) · 20', 'aₙ = 20 − 4n'], why: 'a₁ = 20 and d = −4, because the list goes down 4 each time.' },
        { q: 'Why does the explicit formula use (n − 1) and not n?', c: ['From the 1st term, you add d only n − 1 times to reach the nth term', 'Because you always subtract 1 from the answer', 'Because the first term is always 1', 'Because d is always 1 less than n'], why: 'To reach the 5th term from the 1st, you add d just 4 times.' },
        { q: 'What is the 100th term of 7, 10, 13, 16, …?', c: ['304', '307', '300', '310'], why: 'a₁₀₀ = 7 + (100 − 1) · 3 = 7 + 297 = 304.' },
        { q: 'aₙ = 3n + 2 is a short form of an explicit formula. Which sequence does it make?', c: ['5, 8, 11, 14, …', '2, 5, 8, 11, …', '3, 5, 7, 9, …', '3, 6, 9, 12, …'], why: 'Plug in n = 1, 2, 3, 4: 3(1) + 2 = 5, then 8, 11, 14.' },
        { q: 'Which term of 4, 7, 10, 13, … is equal to 40?', c: ['The 13th term', 'The 12th term', 'The 36th term', 'The 10th term'], why: 'Solve 4 + (n − 1) · 3 = 40: (n − 1) · 3 = 36, n − 1 = 12, n = 13.' },
        { q: 'a₁ = 6, aₙ = aₙ₋₁ + 4. Which explicit formula makes the same sequence?', c: ['aₙ = 6 + (n − 1) · 4', 'aₙ = 4 + (n − 1) · 6', 'aₙ = 6 + 4n', 'aₙ = 6 · 4ⁿ⁻¹'], why: 'Same first term (6) and same common difference (4). Put them into aₙ = a₁ + (n − 1)d.' },
        { q: 'What is the explicit formula for 9, 15, 21, 27, …?', c: ['aₙ = 9 + (n − 1) · 6', 'aₙ = 6 + (n − 1) · 9', 'aₙ = 9 + n · 6', 'aₙ = 9 · 6ⁿ⁻¹'], why: 'a₁ = 9 and d = 15 − 9 = 6. Put them into aₙ = a₁ + (n − 1)d.' },
        { q: 'What is the 30th term of 9, 15, 21, 27, …?', c: ['183', '189', '180', '270'], why: 'a₃₀ = 9 + (30 − 1) · 6 = 9 + 174 = 183.' },
        { q: 'aₙ = 50 + (n − 1)(−4). What is a₁₂?', c: ['6', '2', '94', '46'], why: '50 + (12 − 1)(−4) = 50 + 11(−4) = 50 − 44 = 6.' },
        { q: 'What is the recursive formula for 40, 33, 26, 19, …?', c: ['a₁ = 40, aₙ = aₙ₋₁ − 7', 'a₁ = 40, aₙ = aₙ₋₁ + 7', 'a₁ = −7, aₙ = aₙ₋₁ + 40', 'a₁ = 40, aₙ = aₙ₋₁ · 7'], why: 'Start at 40. Each term is 7 less than the one before, because 33 − 40 = −7.' },
        { q: 'a₁ = 10, aₙ = aₙ₋₁ + 2.5. What is a₅?', c: ['20', '22.5', '12.5', '17.5'], why: '10, 12.5, 15, 17.5, 20. You add 2.5 four times to go from a₁ to a₅.' },
        { q: 'For 4, 10, 16, 22, …, Ruqayya writes aₙ = 4 + 6n. What was her mistake?', c: ['It should be (n − 1) · 6 — her rule makes the 1st term 10', 'Nothing — that is right', 'She should swap the 4 and the 6', 'She should write aₙ = 4 · 6ⁿ'], why: 'Check n = 1: 4 + 6(1) = 10, not 4. The formula needs n − 1.' },
        { q: 'Which term of 5, 9, 13, 17, … is equal to 81?', c: ['The 20th term', 'The 19th term', 'The 76th term', 'The 21st term'], why: '5 + (n − 1) · 4 = 81, so (n − 1) · 4 = 76, n − 1 = 19, and n = 20.' },
        { q: 'aₙ = 7 + (n − 1) · 2 can be simplified to…', c: ['aₙ = 2n + 5', 'aₙ = 2n + 7', 'aₙ = 2n + 9', 'aₙ = 7n − 2'], why: 'Distribute: 7 + 2n − 2 = 2n + 5. Check n = 1: 2 + 5 = 7.' },
        { q: 'For aₙ = 5n − 3, what are the first term and the common difference?', c: ['a₁ = 2, d = 5', 'a₁ = −3, d = 5', 'a₁ = 5, d = −3', 'a₁ = 2, d = −3'], why: 'a₁ = 5(1) − 3 = 2 and a₂ = 7. Each term is 5 more, so d = 5.' },
        { q: 'In a game, level 1 needs 200 XP, and each level needs 75 XP more than the one before. How much XP does level 9 need?', c: ['800', '875', '675', '1,800'], why: 'a₉ = 200 + (9 − 1) · 75 = 200 + 600 = 800 XP.' },
        { q: 'Which recursive formula makes the same sequence as aₙ = 12 + (n − 1)(−3)?', c: ['a₁ = 12, aₙ = aₙ₋₁ − 3', 'a₁ = −3, aₙ = aₙ₋₁ + 12', 'a₁ = 12, aₙ = aₙ₋₁ + 3', 'a₁ = 9, aₙ = aₙ₋₁ − 3'], why: 'Same first term (12) and same difference (−3): start at 12 and subtract 3 each time.' },
        { q: 'Why is the explicit formula faster than the recursive formula for finding the 500th term?', c: ['It jumps straight to any term without finding the 499 before it', 'The recursive formula can\'t make big numbers', 'The explicit formula always gives smaller numbers', 'The recursive formula only works when d is negative'], why: 'The recursive formula builds one term at a time. The explicit formula plugs in n = 500 once.' },
      ],
      realLife: {
        text: `<p>Games use these rules all the time. Say level 1 needs 100 XP (experience points), and each new level needs 50 more than the one before.</p>
          <ul><li><b>Recursive:</b> a₁ = 100, aₙ = aₙ₋₁ + 50. Good for "what does the next level need?"</li>
          <li><b>Explicit:</b> aₙ = 100 + (n − 1) · 50. Level 20 needs 100 + 19 · 50 = 1,050 XP, with no counting level by level.</li></ul>
          <p>A savings jar works the same way: $15 in week 1, then $5 more every week gives 15, 20, 25, 30, …</p>`,
        prompt: 'In the game, level 1 needs 100 XP and each level needs 50 more. Would you use the recursive or the explicit formula to find level 30? Explain why.',
      },
      practice: 'arithNth',
    },
    {
      key: 'a10-03',
      title: 'Intro to geometric sequences',
      videos: [
        { id: 'pXo0bG4iAyg', title: 'Intro to geometric sequences' },
        { id: 'yZ-GufE_uyA', title: 'Extending geometric sequences' },
      ],
      learn: `
        <p>A <b>geometric sequence</b> (a list where you multiply by the same number every time) has a <b>common ratio</b> (the number you multiply by each time, called <b>r</b>).</p>
        <p><b>How to find r:</b> take any term and divide it by the term before it. Check that you get the same answer all the way along.</p>
        <p><b>Worked example:</b> 3, 6, 12, 24, …</p>
        <ol>
          <li>6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2. So r = 2.</li>
          <li>Next term: 24 × 2 = <b>48</b>. The one after that: 48 × 2 = <b>96</b>.</li>
        </ol>
        <p><b>Shrinking:</b> in 80, 40, 20, 10, … each term is half the one before, so r = 1/2. The next term is 10 × 1/2 = 5.</p>
        <p><b>Flipping signs:</b> in 2, −6, 18, −54, … the ratio is −6 ÷ 2 = −3. A negative ratio makes the signs switch back and forth.</p>
        <p><b>Arithmetic or geometric?</b></p>
        <ul>
          <li>Arithmetic: <b>add</b> the same number. It grows by the same amount each step.</li>
          <li>Geometric: <b>multiply</b> by the same number. It grows faster and faster (or shrinks).</li>
        </ul>
        <p>Watch out: 4, 8, 12, 16 starts like doubling, but it adds 4 each time. That makes it arithmetic.</p>`,
      quiz: [
        { q: 'What is the common ratio of 3, 6, 12, 24, …?', c: ['2', '3', '6', '12'], why: '6 ÷ 3 = 2 and 12 ÷ 6 = 2. You multiply by 2 each time.' },
        { q: 'What is the next term of 3, 6, 12, 24, …?', c: ['48', '36', '27', '30'], why: 'Multiply by the common ratio: 24 × 2 = 48.' },
        { q: 'What is the common ratio of 80, 40, 20, 10, …?', c: ['1/2', '2', '−40', '−2'], why: '40 ÷ 80 = 1/2. Multiplying by 1/2 cuts each term in half.' },
        { q: 'Which is a geometric sequence?', c: ['2, 10, 50, 250, …', '2, 10, 18, 26, …', '2, 4, 7, 11, …', '2, 10, 20, 30, …'], why: 'Each term is 5 times the one before: 2 × 5 = 10, 10 × 5 = 50.' },
        { q: 'What is the common ratio of 2, −6, 18, −54, …?', c: ['−3', '3', '−8', '−1/3'], why: '−6 ÷ 2 = −3. The signs switch back and forth, so the ratio is negative.' },
        { q: 'What is the next term of 2, −6, 18, −54, …?', c: ['162', '−162', '−72', '54'], why: '−54 × (−3) = 162. A negative times a negative is positive.' },
        { q: 'What is the next term of 1000, 100, 10, 1, …?', c: ['1/10', '0', '−9', '10'], why: 'Each term is divided by 10, so r = 1/10. Then 1 × 1/10 = 1/10.' },
        { q: 'Is 4, 8, 12, 16, … a geometric sequence?', c: ['No — it adds 4 each time, so it is arithmetic', 'Yes — the common ratio is 2', 'Yes — the common ratio is 4', 'No — it has no common difference'], why: '8 ÷ 4 = 2 but 12 ÷ 8 = 1.5. The ratios are different. It adds 4 each time.' },
        { q: 'A sequence starts at 5 and has a common ratio of 3. What are its first four terms?', c: ['5, 15, 45, 135', '5, 8, 11, 14', '3, 15, 75, 375', '5, 15, 25, 35'], why: 'Start at 5 and multiply by 3 each time: 5, 15, 45, 135.' },
        { q: 'Fill in the blank: 7, 14, __, 56, …', c: ['28', '21', '35', '42'], why: '14 ÷ 7 = 2, so r = 2. Then 14 × 2 = 28, and 28 × 2 = 56. It checks.' },
        { q: 'Which sequence is arithmetic, not geometric?', c: ['9, 12, 15, 18, …', '9, 27, 81, 243, …', '9, 18, 36, 72, …', '9, 3, 1, 1/3, …'], why: '9, 12, 15, 18 adds 3 each time. The others multiply by the same number each time.' },
        { q: 'In a geometric sequence, how do you get from one term to the next?', c: ['Multiply by the common ratio', 'Add the common ratio', 'Add the common difference', 'Subtract the first term'], why: 'Geometric means multiply by the same number. Arithmetic means add the same number.' },
        { q: 'What is the common ratio of 5, 20, 80, 320, …?', c: ['4', '15', '5', '1/4'], why: '20 ÷ 5 = 4 and 80 ÷ 20 = 4. You multiply by 4 each time.' },
        { q: 'What is the next term of 5, 20, 80, 320, …?', c: ['1,280', '335', '640', '1,600'], why: 'Multiply by the common ratio: 320 × 4 = 1,280.' },
        { q: 'What is the common ratio of 243, 81, 27, 9, …?', c: ['1/3', '3', '−162', '−3'], why: '81 ÷ 243 = 1/3. Each term is one third of the one before.' },
        { q: 'What is the common ratio of −4, 8, −16, 32, …?', c: ['−2', '2', '12', '−1/2'], why: '8 ÷ (−4) = −2. The signs switch back and forth, so the ratio is negative.' },
        { q: 'What is the next term of −4, 8, −16, 32, …?', c: ['−64', '64', '16', '−128'], why: '32 × (−2) = −64. The signs keep switching.' },
        { q: 'For 2, 6, 18, 54, …, Idris says the ratio is 4, because 6 − 2 = 4. What was his mistake?', c: ['He subtracted — for the ratio, divide: 6 ÷ 2 = 3', 'Nothing — the ratio is 4', 'He should divide 2 ÷ 6 = 1/3', 'He should add: 2 + 6 = 8'], why: 'The common ratio is a term divided by the term before it.' },
        { q: 'Which is NOT a geometric sequence?', c: ['1, 3, 5, 7, …', '1, 3, 9, 27, …', '64, 16, 4, 1, …', '3, −6, 12, −24, …'], why: '1, 3, 5, 7 adds 2 each time. The others multiply by 3, 1/4, and −2.' },
        { q: 'Fill in the blank: 4, __, 36, 108, …', c: ['12', '20', '16', '9'], why: '108 ÷ 36 = 3, so r = 3. Then 4 × 3 = 12, and 12 × 3 = 36. It checks.' },
        { q: 'A sequence starts at 1,000 and has a common ratio of 1/2. What are its first four terms?', c: ['1000, 500, 250, 125', '1000, 2000, 4000, 8000', '1000, 999.5, 999, 998.5', '1000, 500, 0, −500'], why: 'Start at 1,000 and multiply by 1/2 (cut it in half) each time.' },
        { q: 'Each fold of a paper doubles the layers: 2, 4, 8, 16, … How many layers are there after 6 folds?', c: ['64', '32', '12', '128'], why: 'Keep doubling: 2, 4, 8, 16, 32, 64. The 6th term is 64.' },
        { q: 'A video is shared so that 1, 3, 9, 27, … people see it each round. What is the next term?', c: ['81', '36', '54', '30'], why: 'The ratio is 3. Then 27 × 3 = 81.' },
        { q: 'Which sequence has a common ratio of −1/2?', c: ['16, −8, 4, −2, …', '16, 8, 4, 2, …', '−16, −8, −4, −2, …', '16, −32, 64, −128, …'], why: '−8 ÷ 16 = −1/2. The terms get cut in half and switch signs.' },
      ],
      realLife: {
        text: `<p>Geometric sequences show up whenever something is multiplied by the same number each step.</p>
          <ul><li><b>Folding paper:</b> each fold doubles the layers: 2, 4, 8, 16, 32. The common ratio is 2.</li>
          <li><b>Sharing a video:</b> you send it to 3 friends, and each of them sends it to 3 more: 1, 3, 9, 27. The common ratio is 3.</li>
          <li><b>Bouncing ball:</b> each bounce is half as high: 8 feet, 4, 2, 1. The common ratio is 1/2.</li></ul>`,
        prompt: 'A sheet of paper has 2 layers after one fold, and each fold doubles the layers. How many layers are there after 5 folds? Explain how you got it.',
      },
      practice: 'geoSeq',
    },
    {
      key: 'a10-04',
      title: 'Constructing geometric sequences',
      videos: [
        { id: 'HODIXLzIMIk', title: 'Using explicit formulas of geometric sequences' },
        { id: 'RkJBZALhXRA', title: 'Using recursive formulas of geometric sequences' },
        { id: '8a1a5A3CfdQ', title: 'Explicit & recursive formulas for geometric sequences' },
      ],
      learn: `
        <p>The <b>explicit formula</b> (a rule that jumps straight to any term) for a geometric sequence is <b>aₙ = a₁ · rⁿ⁻¹</b>.</p>
        <ul>
          <li><b>a₁</b> = the first term, <b>r</b> = the common ratio, <b>n</b> = the term number</li>
          <li><b>rⁿ⁻¹</b> has an <b>exponent</b> (the small raised number that says how many times to multiply r by itself). Here it is n − 1.</li>
        </ul>
        <p>Why n − 1? To get from the 1st term to the 4th term, you multiply by r only 3 times.</p>
        <p>The <b>recursive formula</b> (a rule that builds each term from the one before it) gives the first term and what to multiply by. For example: a₁ = 3, aₙ = aₙ₋₁ · 2.</p>
        <p><b>Worked example:</b> find the 8th term of 3, 6, 12, 24, …</p>
        <ol>
          <li>a₁ = 3 and r = 6 ÷ 3 = 2.</li>
          <li>Plug in n = 8: a₈ = 3 · 2⁸⁻¹ = 3 · 2⁷.</li>
          <li>Exponent first: 2⁷ = 2 · 2 · 2 · 2 · 2 · 2 · 2 = 128.</li>
          <li>Then multiply: 3 · 128 = <b>384</b>.</li>
        </ol>
        <p><b>Big trap:</b> do the exponent before you multiply by a₁. 3 · 2⁷ is 3 · 128, not 6⁷.</p>`,
      quiz: [
        { q: 'What is the explicit formula for 3, 6, 12, 24, …?', c: ['aₙ = 3 · 2ⁿ⁻¹', 'aₙ = 2 · 3ⁿ⁻¹', 'aₙ = 3 + (n − 1) · 2', 'aₙ = 3 · 2ⁿ'], why: 'a₁ = 3 and r = 2. Put them into aₙ = a₁ · rⁿ⁻¹.' },
        { q: 'What is the 8th term of 3, 6, 12, 24, …?', c: ['384', '768', '192', '17'], why: 'a₈ = 3 · 2⁷ = 3 · 128 = 384.' },
        { q: 'aₙ = 5 · 3ⁿ⁻¹. What is a₄?', c: ['135', '405', '3375', '45'], why: 'Exponent first: 3⁴⁻¹ = 3³ = 27. Then 5 · 27 = 135.' },
        { q: 'In aₙ = 2 · 5ⁿ⁻¹, what are the first term and the common ratio?', c: ['First term 2, ratio 5', 'First term 5, ratio 2', 'First term 10, ratio 5', 'First term 2, ratio 4'], why: 'The number in front is a₁ = 2. The number with the exponent is r = 5.' },
        { q: 'What is the recursive formula for 4, 12, 36, 108, …?', c: ['a₁ = 4, aₙ = aₙ₋₁ · 3', 'a₁ = 4, aₙ = aₙ₋₁ + 8', 'a₁ = 3, aₙ = aₙ₋₁ · 4', 'a₁ = 4, aₙ = aₙ₋₁ · 8'], why: 'Start at 4. Each term is the term before it times 3, because 12 ÷ 4 = 3.' },
        { q: 'a₁ = 2, aₙ = aₙ₋₁ · (−3). What is a₄?', c: ['−54', '54', '162', '−7'], why: '2, −6, 18, −54. You multiply by −3 three times.' },
        { q: 'What is the explicit formula for 64, 32, 16, 8, …?', c: ['aₙ = 64 · (1/2)ⁿ⁻¹', 'aₙ = 64 · 2ⁿ⁻¹', 'aₙ = 64 + (n − 1)(−32)', 'aₙ = 1/2 · 64ⁿ⁻¹'], why: 'a₁ = 64 and r = 32 ÷ 64 = 1/2. Each term is half the one before.' },
        { q: 'What is the 6th term of 64, 32, 16, 8, …?', c: ['2', '1', '4', '−96'], why: 'Keep halving: 64, 32, 16, 8, 4, 2. The 6th term is 2.' },
        { q: 'Why is the exponent n − 1 and not n?', c: ['From the 1st term, you multiply by r only n − 1 times to reach the nth term', 'Because r is always 1 less than n', 'Because you subtract 1 from the answer at the end', 'Because the first term is always 1'], why: 'To reach the 4th term from the 1st, you multiply by r just 3 times.' },
        { q: 'aₙ = 3 · 2ⁿ⁻¹. What is a₃?', c: ['12', '36', '18', '24'], why: 'Exponent first: 2³⁻¹ = 2² = 4. Then 3 · 4 = 12. It is not (3 · 2)² = 36.' },
        { q: 'A geometric sequence has a₁ = 10 and r = 2. Which term is equal to 160?', c: ['The 5th term', 'The 16th term', 'The 4th term', 'The 8th term'], why: '10, 20, 40, 80, 160. That is the 5th term. Check: 10 · 2⁴ = 160.' },
        { q: 'a₁ = 6, aₙ = aₙ₋₁ · 2. Which explicit formula makes the same sequence?', c: ['aₙ = 6 · 2ⁿ⁻¹', 'aₙ = 2 · 6ⁿ⁻¹', 'aₙ = 6 + (n − 1) · 2', 'aₙ = 12ⁿ⁻¹'], why: 'Same first term (6) and same ratio (2). Put them into aₙ = a₁ · rⁿ⁻¹.' },
        { q: 'What is the explicit formula for 5, 15, 45, 135, …?', c: ['aₙ = 5 · 3ⁿ⁻¹', 'aₙ = 3 · 5ⁿ⁻¹', 'aₙ = 5 + (n − 1) · 10', 'aₙ = 15ⁿ⁻¹'], why: 'a₁ = 5 and r = 15 ÷ 5 = 3. Put them into aₙ = a₁ · rⁿ⁻¹.' },
        { q: 'What is the 6th term of 5, 15, 45, 135, …?', c: ['1,215', '3,645', '405', '75'], why: 'a₆ = 5 · 3⁵ = 5 · 243 = 1,215.' },
        { q: 'aₙ = 2 · 4ⁿ⁻¹. What is a₃?', c: ['32', '64', '24', '512'], why: 'Exponent first: 4³⁻¹ = 4² = 16. Then 2 · 16 = 32.' },
        { q: 'aₙ = 7 · 2ⁿ⁻¹. What is a₁?', c: ['7', '14', '2', '1'], why: '2¹⁻¹ = 2⁰ = 1, so a₁ = 7 · 1 = 7. The first term is the number in front.' },
        { q: 'What is the recursive formula for 81, 27, 9, 3, …?', c: ['a₁ = 81, aₙ = aₙ₋₁ · (1/3)', 'a₁ = 81, aₙ = aₙ₋₁ · 3', 'a₁ = 81, aₙ = aₙ₋₁ − 54', 'a₁ = 1/3, aₙ = aₙ₋₁ · 81'], why: 'Start at 81. Each term is one third of the one before, because 27 ÷ 81 = 1/3.' },
        { q: 'To find a₄ for aₙ = 2 · 3ⁿ⁻¹, Jamal writes (2 · 3)³ = 216. What was his mistake?', c: ['Do the exponent first: 3³ = 27, then 2 · 27 = 54', 'Nothing — 216 is right', 'The exponent should be 4: 2 · 3⁴ = 162', 'He should add: 2 + 3³ = 29'], why: 'Only the 3 is raised to the power. Multiply by 2 after that.' },
        { q: 'a₁ = 1, aₙ = aₙ₋₁ · 5. What is a₄?', c: ['125', '625', '16', '20'], why: '1, 5, 25, 125. You multiply by 5 three times.' },
        { q: 'A geometric sequence has a₁ = 3 and r = 2. Which term is equal to 96?', c: ['The 6th term', 'The 5th term', 'The 32nd term', 'The 7th term'], why: '3, 6, 12, 24, 48, 96. That is the 6th term. Check: 3 · 2⁵ = 96.' },
        { q: '200 people sign up for an app in week 1, and sign-ups double every week. Which formula gives week n?', c: ['aₙ = 200 · 2ⁿ⁻¹', 'aₙ = 2 · 200ⁿ⁻¹', 'aₙ = 200 + (n − 1) · 2', 'aₙ = 200 · 2ⁿ'], why: 'a₁ = 200 and r = 2. Check n = 1: 200 · 2⁰ = 200.' },
        { q: 'Using aₙ = 200 · 2ⁿ⁻¹, how many sign-ups are there in week 4?', c: ['1,600', '3,200', '800', '206'], why: 'Exponent first: 2³ = 8. Then 200 · 8 = 1,600.' },
        { q: 'aₙ = 1000 · (1/10)ⁿ⁻¹. What is a₃?', c: ['10', '100', '1', '1/100'], why: '(1/10)² = 1/100, and 1000 · 1/100 = 10. Or list them: 1000, 100, 10.' },
        { q: 'Which explicit formula makes the same sequence as a₁ = −2, aₙ = aₙ₋₁ · 3?', c: ['aₙ = −2 · 3ⁿ⁻¹', 'aₙ = 3 · (−2)ⁿ⁻¹', 'aₙ = −2 + (n − 1) · 3', 'aₙ = (−6)ⁿ⁻¹'], why: 'Same first term (−2) and same ratio (3). Put them into aₙ = a₁ · rⁿ⁻¹.' },
      ],
      realLife: {
        text: `<p>The explicit formula lets you jump ahead without listing every term.</p>
          <ul><li><b>New app:</b> 200 people sign up in week 1, and the number doubles every week. aₙ = 200 · 2ⁿ⁻¹, so week 6 has 200 · 2⁵ = 200 · 32 = 6,400 sign-ups.</li>
          <li><b>Bouncing ball:</b> the first bounce is 16 feet high, and each bounce is half as high. aₙ = 16 · (1/2)ⁿ⁻¹ gives 16, 8, 4, 2, 1 feet.</li></ul>
          <p>Doubling looks slow at first, then it explodes.</p>`,
        prompt: 'A ball bounces 16 feet high, and each bounce after that is half as high. Write the explicit formula, then explain how high the 4th bounce is.',
      },
      practice: 'geoNth',
    },
    {
      key: 'a10-05',
      title: 'Modeling with sequences',
      videos: [
        { id: 'yYGf7xn7TyM', title: 'Sequences word problems' },
        { id: 'TymkzM7J1PY', title: 'Sequences and domain' },
      ],
      learn: `
        <p>Word problems about sequences follow four steps.</p>
        <ol>
          <li><b>Add or multiply?</b> The same amount added (or taken away) each time means arithmetic. Multiplied by the same number each time means geometric.</li>
          <li><b>Find the pieces:</b> the first term a₁, plus d (arithmetic) or r (geometric).</li>
          <li><b>Write the formula</b> and plug in the term number n.</li>
          <li><b>Check that n makes sense.</b> n counts things like rows, days, or weeks, so it must be a counting number (a positive whole number): 1, 2, 3, … The <b>domain</b> (all the inputs that make sense) is counting numbers, not 0, fractions, or negatives.</li>
        </ol>
        <p><b>Worked example:</b> a theater has 12 seats in row 1. Each row has 3 more seats than the row in front of it. How many seats are in row 15?</p>
        <ol>
          <li>Adding 3 each row, so it is arithmetic. a₁ = 12 and d = 3.</li>
          <li>a₁₅ = 12 + (15 − 1) · 3 = 12 + 14 · 3 = 12 + 42 = <b>54 seats</b>.</li>
        </ol>
        <p><b>Geometric example:</b> a dish has 50 <b>bacteria</b> (tiny living cells) on day 1, and the number doubles each day. On day 6: a₆ = 50 · 2⁵ = 50 · 32 = <b>1,600 bacteria</b>.</p>`,
      quiz: [
        { q: 'A theater has 12 seats in row 1, and each row has 3 more seats than the row before. How many seats are in row 15?', c: ['54', '57', '45', '180'], why: 'Arithmetic: a₁₅ = 12 + (15 − 1) · 3 = 12 + 42 = 54.' },
        { q: 'A dish has 50 bacteria on day 1, and the number doubles each day. How many are there on day 6?', c: ['1,600', '3,200', '300', '60'], why: 'Geometric: a₆ = 50 · 2⁶⁻¹ = 50 · 32 = 1,600.' },
        { q: 'Bilal has $40 saved in week 1 and adds $15 every week. How much does he have in week 10?', c: ['$175', '$190', '$150', '$400'], why: 'a₁₀ = 40 + (10 − 1) · 15 = 40 + 135 = $175.' },
        { q: 'Which situation makes a geometric sequence?', c: ['A plant\'s height triples every month', 'You save $20 every week', 'A stack gets 2 more books each day', 'A ride costs $3 more for each mile'], why: 'Tripling means multiply by 3 each time. The others add the same amount each time.' },
        { q: 'Which situation makes an arithmetic sequence?', c: ['A pool loses 50 gallons of water each hour', 'A video\'s views double every day', 'Bacteria triple every hour', 'A ball bounces half as high each time'], why: 'Losing the same 50 gallons each hour means d = −50. The others multiply.' },
        { q: 'A phone battery reads 100% at the 1st check and drops 6% at each hourly check. What does it read at the 8th check?', c: ['58%', '52%', '48%', '94%'], why: 'a₈ = 100 + (8 − 1)(−6) = 100 − 42 = 58%.' },
        { q: 'A stadium has 20 seats in row 1, and each row has 4 more than the row before. Which explicit formula fits?', c: ['aₙ = 20 + (n − 1) · 4', 'aₙ = 4 + (n − 1) · 20', 'aₙ = 20 · 4ⁿ⁻¹', 'aₙ = 20 + 4n'], why: 'Adding 4 each row makes it arithmetic, with a₁ = 20 and d = 4.' },
        { q: 'Plan A gives you 2 pennies on day 1, then 10 more each day. Plan B gives 2 pennies on day 1, then doubles each day. How many does each give on day 8?', c: ['A: 72, B: 256', 'A: 82, B: 512', 'A: 72, B: 128', 'A: 80, B: 16'], why: 'A: 2 + (8 − 1) · 10 = 72. B: 2 · 2⁷ = 256. Doubling wins in the long run.' },
        { q: 'A video gets 30 views on day 1, and the views triple each day. How many views does it get on day 4?', c: ['810', '2,430', '120', '39'], why: '30, 90, 270, 810. Or 30 · 3³ = 30 · 27 = 810.' },
        { q: 'In the theater problem (row n has 12 + (n − 1) · 3 seats), which values of n make sense?', c: ['Counting numbers 1, 2, 3, … up to the last row', 'Any number, including 2.5 and −3', 'Only even numbers', 'Only numbers bigger than 12'], why: 'n counts rows. There is no row 2.5 and no row −3.' },
        { q: 'A ball\'s first bounce is 81 cm high, and each bounce is 1/3 as high as the one before. How high is the 4th bounce?', c: ['3 cm', '1 cm', '9 cm', '27 cm'], why: '81, 27, 9, 3. Divide by 3 three times to go from bounce 1 to bounce 4.' },
        { q: 'Zayd has $25 in week 1 and adds $5 each week. In which week will he have $100?', c: ['Week 16', 'Week 15', 'Week 20', 'Week 4'], why: 'Solve 25 + (n − 1) · 5 = 100: (n − 1) · 5 = 75, n − 1 = 15, n = 16.' },
        { q: 'A block tower has 30 blocks in row 1, and each row up has 2 fewer blocks. How many blocks are in row 10?', c: ['12', '10', '48', '28'], why: 'Arithmetic with d = −2: a₁₀ = 30 + (10 − 1)(−2) = 30 − 18 = 12.' },
        { q: 'A dish has 100 bacteria at hour 1, and the number triples every hour. How many are there at hour 5?', c: ['8,100', '24,300', '1,500', '1,300'], why: 'Geometric: a₅ = 100 · 3⁴ = 100 · 81 = 8,100.' },
        { q: 'Which of these situations is geometric?', c: ['The number of people who hear some news doubles each hour', 'A plant grows 2 cm each week', 'A tank loses 5 liters each minute', 'Each row has 4 more seats than the last'], why: 'Doubling means multiply by 2 each time. The others add or subtract the same amount.' },
        { q: 'Amina reads 10 pages on day 1 and 5 more pages each day than the day before. How many pages does she read on day 7?', c: ['40', '45', '35', '70'], why: 'a₇ = 10 + (7 − 1) · 5 = 10 + 30 = 40 pages.' },
        { q: 'A savings jar has $20 in week 1 and grows by $5 each week. Bilal says week 8 has 20 + 8 · 5 = $60. What was his mistake?', c: ['He should use (8 − 1) · 5 — week 8 has $55', 'Nothing — $60 is right', 'He should multiply: 20 · 5⁷', 'He should use 8 · 20 + 5 = $165'], why: 'From week 1 to week 8, the jar grows only 7 times: 20 + 35 = 55.' },
        { q: 'A ball\'s first bounce is 64 inches high, and each bounce is half as high as the one before. Which bounce is 4 inches high?', c: ['The 5th bounce', 'The 4th bounce', 'The 16th bounce', 'The 6th bounce'], why: '64, 32, 16, 8, 4. The 5th bounce is 4 inches.' },
        { q: 'Plan A: 5 coins on day 1, then 5 more each day. Plan B: 1 coin on day 1, then double each day. Which gives more on day 6?', c: ['Plan B (32 coins vs. 30)', 'Plan A (35 coins vs. 32)', 'Plan A (30 coins vs. 12)', 'Plan B (64 coins vs. 30)'], why: 'A: 5 + (6 − 1) · 5 = 30. B: 1 · 2⁵ = 32.' },
        { q: 'A gym has 15 members in month 1 and gains 6 members each month. Which formula fits?', c: ['aₙ = 15 + (n − 1) · 6', 'aₙ = 6 + (n − 1) · 15', 'aₙ = 15 · 6ⁿ⁻¹', 'aₙ = 15 + 6n'], why: 'Adding 6 each month makes it arithmetic, with a₁ = 15 and d = 6.' },
        { q: 'A tank has 900 liters at minute 1 and loses 40 liters each minute. In which minute will 500 liters be left?', c: ['Minute 11', 'Minute 10', 'Minute 12', 'Minute 35'], why: 'Solve 900 + (n − 1)(−40) = 500: (n − 1) · 40 = 400, n − 1 = 10, n = 11.' },
        { q: 'A tree is 2 m tall in year 1 and grows 0.5 m each year. How tall is it in year 9?', c: ['6 m', '6.5 m', '4.5 m', '2.5 m'], why: 'a₉ = 2 + (9 − 1) · 0.5 = 2 + 4 = 6 m.' },
        { q: '2 people know a secret on day 1, and the number triples each day. How many know it on day 5?', c: ['162', '486', '30', '14'], why: 'a₅ = 2 · 3⁴ = 2 · 81 = 162.' },
        { q: 'A problem says, "The number goes up by 8 each week." Which kind of sequence is it?', c: ['Arithmetic, with d = 8', 'Geometric, with r = 8', 'Arithmetic, with d = 1/8', 'Geometric, with r = 1/8'], why: '"Goes up by 8" means add 8 each time. Adding the same amount is arithmetic.' },
      ],
      realLife: {
        text: `<p>Sequences are a quick way to predict the future.</p>
          <ul><li><b>Stadium seats:</b> each row has a few more seats than the one in front, so it is arithmetic. Builders use it to count seats before they build.</li>
          <li><b>Bacteria:</b> they can double every 20 minutes, so it is geometric. That is why food left out too long can make you sick.</li>
          <li><b>Savings jar:</b> $10 in week 1, plus $10 more every week, gives $520 after a year (52 weeks). That is arithmetic.</li></ul>`,
        prompt: 'Make up your own word problem about something that adds the same amount or multiplies by the same number. Is it arithmetic or geometric? What is its 10th term?',
      },
      practice: 'seqModel',
    },
  ],
};
