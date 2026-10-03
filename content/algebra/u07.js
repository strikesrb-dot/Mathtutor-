// Unit 7 — Systems of equations. NJ: A.REI.C.5, A.REI.C.6, A.REI.D.11, A.CED.A.3
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every system in this unit was solved with node.
export default {
  id: 'a07', n: 7, title: 'Systems of equations', nj: ['A.REI.C.5', 'A.REI.C.6', 'A.REI.D.11', 'A.CED.A.3'],
  lessons: [
    {
      key: 'a07-01',
      title: 'Introduction to systems of equations',
      videos: [
        { id: 'OcNt-36QKu8', title: 'Trolls, tolls, and systems of equations' },
        { id: 'SkMNREAMNvc', title: 'Checking solutions to systems of equations example' },
        { id: 'o4pbAQgJYjI', title: 'Systems of equations with graphing: exact & approximate solutions' },
      ],
      learn: `
        <p>A <b>system of equations</b> (two or more equations that share the same letters and are solved together) asks one question: <b>which (x, y) pair makes BOTH equations true at the same time?</b></p>
        <p>That pair is the <b>solution</b> (the answer that works in every equation of the system).</p>
        <p>When you graph each equation, you get two lines. The solution is the point where the lines <b>cross</b>, also called the <b>intersection</b> (the spot where two lines meet). That point sits on both lines, so it works in both equations.</p>
        <p><b>Worked example:</b> solve y = x + 1 and y = −x + 5 by graphing.</p>
        <ul>
          <li>Line 1 starts at (0, 1) and goes up 1, right 1.</li>
          <li>Line 2 starts at (0, 5) and goes down 1, right 1.</li>
          <li>They cross at <b>(2, 3)</b>.</li>
          <li><b>Check both:</b> 2 + 1 = 3 ✓ and −2 + 5 = 3 ✓.</li>
        </ul>
        <p><b>To test any point,</b> put its x and y into each equation. It must work in <b>both</b>. Working in just one is not enough.</p>
        <p>Sometimes the lines cross between grid lines. Then a graph only gives an <b>approximate</b> (close, but not exact) answer. The next lessons show exact methods.</p>`,
      quiz: [
        { q: 'What is a system of equations?', c: ['Two or more equations with the same letters, solved together', 'One equation with two letters in it', 'An equation that has no solution', 'A list of points on a graph'], why: 'A system is a group of equations. You look for one (x, y) that works in all of them.' },
        { q: 'On a graph, where is the solution of a system of two lines?', c: ['The point where the lines cross', 'The y-intercept of the first line', 'Anywhere on the steeper line', 'Always at the point (0, 0)'], why: 'The crossing point is on both lines, so it works in both equations.' },
        { q: 'Is (2, 3) a solution to y = x + 1 and y = −x + 5?', c: ['Yes — it makes both equations true', 'No — it only works in y = x + 1', 'No — it only works in y = −x + 5', 'No — these lines never cross'], why: '2 + 1 = 3 and −2 + 5 = 3. Both are true.' },
        { q: 'Is (3, 1) a solution to x + y = 4 and x − y = 1?', c: ['No — it works in x + y = 4 but not in x − y = 1', 'Yes — it works in x + y = 4', 'Yes — it works in both equations', 'No — it fails both equations'], why: '3 + 1 = 4 works, but 3 − 1 = 2, not 1. A solution must work in both.' },
        { q: 'The lines y = 2x and y = x + 3 cross at which point?', c: ['(3, 6)', '(6, 3)', '(1, 2)', '(0, 3)'], why: 'At (3, 6): 2·3 = 6 and 3 + 3 = 6. The point (1, 2) is only on y = 2x.' },
        { q: 'The lines y = x + 2 and y = −x + 4 cross at which point?', c: ['(1, 3)', '(3, 1)', '(2, 4)', '(0, 2)'], why: '1 + 2 = 3 and −1 + 4 = 3. Both work, so (1, 3) is on both lines.' },
        { q: 'The lines y = −x + 6 and y = x cross at which point?', c: ['(3, 3)', '(6, 0)', '(0, 6)', '(2, 4)'], why: '−3 + 6 = 3, and y = x gives 3 too. The point (2, 4) only works in y = −x + 6.' },
        { q: 'Which point is on BOTH lines y = 3x − 1 and y = x + 5?', c: ['(3, 8)', '(2, 5)', '(0, 5)', '(8, 3)'], why: '3·3 − 1 = 8 and 3 + 5 = 8. The points (2, 5) and (0, 5) each fit only one line.' },
        { q: 'A graph shows two lines crossing at (−2, 5). What is the solution?', c: ['x = −2, y = 5', 'x = 5, y = −2', 'x = −2, y = −2', 'There is no solution'], why: 'Points are written (x, y). The crossing point is the solution.' },
        { q: 'Why can a graph give only an approximate (close but not exact) answer?', c: ['The lines might cross between grid lines', 'Graphs are always wrong', 'Two lines can never really cross', 'You can only draw one line on a graph'], why: 'If lines cross at something like (1.4, 2.7), you can only estimate it by looking.' },
        { q: 'Notebooks cost $3 and pens cost $1. Yusuf buys 7 items for $13. Which system fits? (n = notebooks, p = pens)', c: ['n + p = 7 and 3n + p = 13', 'n + p = 13 and 3n + p = 7', 'n + p = 7 and n + 3p = 13', 'n = 7 and p = 13'], why: 'Count of items: n + p = 7. Money: $3 for each notebook plus $1 for each pen makes $13.' },
        { q: 'Is (0, 4) a solution to y = 4 − x and y = 2x + 4?', c: ['Yes — it makes both equations true', 'No — x can never be 0', 'No — it only works in y = 4 − x', 'No — it only works in y = 2x + 4'], why: '4 − 0 = 4 and 2·0 + 4 = 4. Both are true.' },
      ],
      realLife: {
        text: `<p>Two ride companies charge in different ways:</p>
          <ul><li><b>Company A:</b> $5 to start, plus $2 per mile</li>
          <li><b>Company B:</b> $9 to start, plus $1 per mile</li></ul>
          <p>As equations: y = 2x + 5 and y = x + 9. Graph both, and the lines cross at <b>(4, 13)</b>. That means at 4 miles, both rides cost $13. For shorter trips Company A is cheaper. For longer trips Company B wins.</p>
          <p>The crossing point is where the better deal flips. That's why stores, phone companies, and gyms care about systems.</p>`,
        prompt: 'Think of two choices in your life that cost money in different ways (like two phone plans or two ways to get somewhere). Why would it help to know where they cost the same?',
      },
      practice: 'systemCheck',
    },
    {
      key: 'a07-02',
      title: 'Solving systems with substitution',
      videos: [
        { id: '2EwPpga_XPw', title: 'Talking bird solves systems with substitution' },
        { id: 'GWZKz4F9hWM', title: 'Solving systems of linear equations with substitution example' },
      ],
      learn: `
        <p><b>Substitution</b> (swapping something for an equal thing) is a way to solve a system without graphing. It gives an exact answer.</p>
        <p><b>The idea:</b> if one equation tells you y = 2x − 1, then anywhere you see y, you can write 2x − 1 instead. They are equal, so it's a fair swap.</p>
        <ol>
          <li><b>Get one variable alone</b> (a variable is a letter that stands for a number). Make it look like y = … or x = ….</li>
          <li><b>Swap it in</b> to the OTHER equation. Use parentheses.</li>
          <li><b>Solve</b> the new equation. It has only one letter now.</li>
          <li><b>Plug back in</b> to find the other letter.</li>
          <li><b>Check</b> your pair in both equations.</li>
        </ol>
        <p><b>Worked example:</b> y = 2x − 1 and x + y = 8.</p>
        <ul>
          <li>Swap y for (2x − 1): x + (2x − 1) = 8.</li>
          <li>Combine: 3x − 1 = 8, so 3x = 9 and x = 3.</li>
          <li>Plug back: y = 2·3 − 1 = 5.</li>
          <li>Check: 3 + 5 = 8 ✓. The solution is <b>(3, 5)</b>.</li>
        </ul>
        <p><b>Watch out:</b> keep the parentheses when a minus sign is in front. 3x − (2x + 1) means 3x − 2x − 1. The minus hits both parts.</p>`,
      quiz: [
        { q: 'Solve: y = x + 2 and x + y = 10.', c: ['(4, 6)', '(6, 4)', '(5, 5)', '(3, 5)'], why: 'x + (x + 2) = 10, so 2x = 8 and x = 4. Then y = 4 + 2 = 6.' },
        { q: 'Put y = 3x into 2x + y = 20. What equation do you get?', c: ['2x + 3x = 20', '2x + y = 3x', '2(3x) + y = 20', '3x + y = 20'], why: 'Replace y with 3x. Now only x is left: 2x + 3x = 20.' },
        { q: 'Solve: y = 3x and 2x + y = 20.', c: ['(4, 12)', '(12, 4)', '(4, 3)', '(5, 15)'], why: '5x = 20, so x = 4. Then y = 3·4 = 12. (5, 15) fails the second equation: 10 + 15 = 25.' },
        { q: 'In x + 4y = 9 and 3x − 2y = 13, which letter is easiest to get alone?', c: ['x in the first equation', 'y in the second equation', 'x in the second equation', 'y in the first equation'], why: 'x has no number in front of it, so x = 9 − 4y takes just one step.' },
        { q: 'Solve: x = 2y and x + y = 9.', c: ['(6, 3)', '(3, 6)', '(4.5, 4.5)', '(9, 0)'], why: '2y + y = 9, so 3y = 9 and y = 3. Then x = 2·3 = 6.' },
        { q: 'You found x = 5. What is your next step?', c: ['Put x = 5 back into an equation to find y', 'Stop — you are done', 'Graph the line x = 5', 'Add 5 to both equations'], why: 'A solution needs BOTH numbers. Plug x in to get y.' },
        { q: 'Solve: y = x − 3 and 2x + y = 12.', c: ['(5, 2)', '(2, 5)', '(3, 0)', '(5, 8)'], why: '2x + (x − 3) = 12, so 3x = 15 and x = 5. Then y = 5 − 3 = 2.' },
        { q: 'Put y = 2x + 1 into 3x − y = 4. Which equation is right?', c: ['3x − (2x + 1) = 4', '3x − 2x + 1 = 4', '3(2x + 1) − y = 4', '3x + 2x + 1 = 4'], why: 'Keep the parentheses. The minus sign must hit both the 2x and the 1.' },
        { q: 'Solve: 3x − y = 4 and y = 2x + 1.', c: ['(5, 11)', '(3, 7)', '(11, 5)', '(5, 9)'], why: '3x − 2x − 1 = 4, so x = 5 and y = 11. The pair (3, 7) comes from dropping the parentheses.' },
        { q: 'Solve: y = x − 5 and x + y = 11.', c: ['(8, 3)', '(3, 8)', '(3, −2)', '(5.5, 5.5)'], why: 'x + (x − 5) = 11, so 2x = 16 and x = 8. Then y = 8 − 5 = 3.' },
        { q: 'Get y alone: 4x + y = 10.', c: ['y = 10 − 4x', 'y = 4x − 10', 'y = 10 + 4x', 'y = 4x + 10'], why: 'Subtract 4x from both sides: y = 10 − 4x.' },
        { q: 'An adult ticket costs $4 more than a kid ticket (a = k + 4). One of each costs $20 (a + k = 20). How much is a kid ticket?', c: ['$8', '$12', '$10', '$16'], why: '(k + 4) + k = 20, so 2k = 16 and k = 8. The adult ticket is $12.' },
      ],
      realLife: {
        text: `<p>You use substitution any time you swap something for something equal.</p>
          <ul><li><b>Trading cards:</b> your friend has twice as many cards as you (f = 2y). Together you have 30 (y + f = 30). Swap f for 2y: y + 2y = 30, so you have 10 and he has 20.</li>
          <li><b>Money:</b> one $5 bill is worth the same as five $1 bills, so you can swap them when you count.</li>
          <li><b>Cooking:</b> 1 cup of rice is the same as 2 half-cups, so you can use either one.</li></ul>`,
        prompt: 'In your own words, explain why you are allowed to swap f for 2y in the trading card problem. What would go wrong if they were not equal?',
      },
      practice: 'systemSub',
    },
    {
      key: 'a07-03',
      title: 'Solving systems with elimination',
      videos: [
        { id: 'xCIHAjsZCE0', title: "King's cupcakes: Solving systems by elimination" },
        { id: '5jgSW5Jb-Y8', title: 'Strategies for eliminating variables in a system examples' },
      ],
      learn: `
        <p><b>Elimination</b> (making one letter disappear by adding or subtracting the two equations) is another exact method. It works great when both equations look like ax + by = c.</p>
        <ul>
          <li>If one letter has <b>opposite</b> numbers in front (like +y and −y), <b>add</b> the equations.</li>
          <li>If one letter has the <b>same</b> number in front (like 2y and 2y), <b>subtract</b> them.</li>
          <li>If neither, <b>multiply</b> one equation first so the numbers match.</li>
        </ul>
        <p><b>Worked example:</b> x + y = 10 and x − y = 4.</p>
        <ul>
          <li>+y and −y are opposites, so add: (x + x) + (y − y) = 10 + 4.</li>
          <li>That gives 2x = 14, so x = 7.</li>
          <li>Plug back: 7 + y = 10, so y = 3.</li>
          <li>Check: 7 − 3 = 4 ✓. The solution is <b>(7, 3)</b>.</li>
        </ul>
        <p><b>Multiplying first:</b> 3x + 2y = 16 and x − y = 2. Multiply every part of the second equation by 2 to get 2x − 2y = 4. Now add: 5x = 20, so x = 4. Then 4 − y = 2, so y = 2.</p>
        <p><b>Watch out</b> when you subtract: 3y − (−y) is 4y, not 2y.</p>`,
      quiz: [
        { q: 'Solve by adding: x + y = 10 and x − y = 4.', c: ['(7, 3)', '(3, 7)', '(6, 4)', '(5, 5)'], why: 'Adding gives 2x = 14, so x = 7. Then 7 + y = 10, so y = 3.' },
        { q: 'Add 2x + 3y = 12 and 4x − 3y = 6. What do you get?', c: ['6x = 18', '6x + 6y = 18', '2x = 6', '6x = 6'], why: '2x + 4x = 6x. 3y − 3y = 0. 12 + 6 = 18.' },
        { q: 'Solve: 2x + 3y = 12 and 4x − 3y = 6.', c: ['(3, 2)', '(2, 3)', '(3, 6)', '(6, 0)'], why: 'Adding gives 6x = 18, so x = 3. Then 6 + 3y = 12, so y = 2.' },
        { q: 'To make y disappear in 5x + 2y = 9 and 3x + 2y = 7, you should…', c: ['subtract the equations', 'add the equations', 'multiply the first by 5', 'divide both by 2'], why: 'Both have +2y. Subtracting gives 2y − 2y = 0.' },
        { q: 'Solve: 5x + 2y = 9 and 3x + 2y = 7.', c: ['(1, 2)', '(2, 1)', '(−1, 7)', '(1, 3)'], why: 'Subtract: 2x = 2, so x = 1. Then 5 + 2y = 9, so y = 2.' },
        { q: 'In 3x + 2y = 16 and x − y = 2, what should you multiply the second equation by so y disappears when you add?', c: ['2', '3', '−2', '16'], why: 'Times 2 gives 2x − 2y = 4. Then +2y and −2y cancel.' },
        { q: 'Solve: 3x + 2y = 16 and x − y = 2.', c: ['(4, 2)', '(2, 4)', '(6, −1)', '(5, 3)'], why: 'Add 3x + 2y = 16 and 2x − 2y = 4: 5x = 20, so x = 4. Then y = 2.' },
        { q: 'In this lesson, what does "eliminate" mean?', c: ['Make one letter disappear by adding or subtracting', 'Cross out the harder equation', 'Get rid of all the numbers', 'Make both letters equal 0'], why: 'Once one letter is gone, you have a simple one-letter equation.' },
        { q: 'Solve: x + 2y = 8 and −x + y = 1.', c: ['(2, 3)', '(3, 2)', '(4, 2)', '(−2, 5)'], why: 'Add: x and −x cancel, so 3y = 9 and y = 3. Then x + 6 = 8, so x = 2.' },
        { q: 'Sara adds 4x + y = 9 and 2x + y = 5 and writes 6x = 14. What went wrong?', c: ['The y-terms do not cancel when you add, so she should subtract', 'She should have multiplied by 4 first', 'Nothing — x = 14/6 is right', 'She added 9 and 5 wrong'], why: 'y + y = 2y, not 0. Subtracting gives 2x = 4, so x = 2.' },
        { q: 'Solve: 2x + 3y = 18 and 2x − y = 2.', c: ['(3, 4)', '(4, 3)', '(5, 8)', '(2, 2)'], why: 'Subtract: 3y − (−y) = 4y, so 4y = 16 and y = 4. Then 2x − 4 = 2, so x = 3.' },
        { q: '2 samosas and 1 juice cost $7. 1 samosa and 1 juice cost $5. How much is one samosa?', c: ['$2', '$3', '$5', '$12'], why: 'Subtract the orders. The only difference is one samosa, and $7 − $5 = $2.' },
      ],
      realLife: {
        text: `<p>Elimination is how you compare two receipts.</p>
          <p>Monday you buy <b>3 apples and 2 bananas for $8</b>. Tuesday you buy <b>3 apples and 4 bananas for $10</b>.</p>
          <p>The apples are the same both days, so subtract. The only difference is <b>2 more bananas</b>, which cost <b>$2 more</b>. So one banana is $1. Then 3 apples + $2 = $8, so 3 apples cost $6 and each apple is $2.</p>
          <p>Store owners, coaches comparing two games, and friends splitting snack costs all use this trick without calling it algebra.</p>`,
        prompt: 'Make up two receipts (or two food orders) where one item is the same in both. Explain how subtracting them tells you the price of the other item.',
      },
      practice: 'systemElim',
    },
    {
      key: 'a07-04',
      title: 'Equivalent systems of equations',
      videos: [
        { id: 'h9ZgZimXn2Q', title: 'Why we do the same thing to both sides: basic systems' },
        { id: 'XstL_x4ucm4', title: 'Worked example: equivalent systems of equations' },
      ],
      learn: `
        <p>Why does elimination work? Because of <b>equivalent systems</b> (systems that have exactly the same solution, even if they look different).</p>
        <p>Think of each equation as a <b>balanced scale</b>. Both sides weigh the same. If you add the same weight to both sides, it stays balanced.</p>
        <p>If a = b and c = d, then a + c = b + d. Adding two true equations gives another true equation. So the new system keeps the old solution.</p>
        <p><b>Moves that keep the same solution:</b></p>
        <ul>
          <li>Multiply BOTH sides of an equation by the same number (but not 0).</li>
          <li>Replace one equation with the <b>sum</b> (what you get when you add) or <b>difference</b> (what you get when you subtract) of the two equations.</li>
        </ul>
        <p><b>Moves that break it:</b> multiplying only one side, or multiplying by 0. Times 0 turns everything into 0 = 0 and throws the information away.</p>
        <p><b>Worked example:</b> System A is x + y = 6 and x − y = 2. Its solution is (4, 2).</p>
        <ul>
          <li>Add the equations: 2x = 8.</li>
          <li>System B is x + y = 6 and 2x = 8.</li>
          <li>Check (4, 2) in B: 4 + 2 = 6 ✓ and 2·4 = 8 ✓.</li>
        </ul>
        <p>Same solution, so A and B are <b>equivalent</b>. System B is just easier to solve.</p>`,
      quiz: [
        { q: 'Two systems are equivalent when they…', c: ['have exactly the same solution', 'look exactly the same', 'use the same numbers', 'both use x and y'], why: 'Equivalent systems can look different. What matters is that the same (x, y) works in both.' },
        { q: 'Start with x + y = 6 and x − y = 2. Which system is equivalent?', c: ['x + y = 6 and 2x = 8', 'x + y = 6 and 2x = 4', 'x + y = 8 and x − y = 2', 'x + y = 6 and 2y = 8'], why: 'Adding the two equations gives 2x = 8. The solution (4, 2) still works.' },
        { q: 'Multiply both sides of x + 2y = 5 by 3. What do you get?', c: ['3x + 6y = 15', '3x + 2y = 15', '3x + 6y = 5', 'x + 6y = 15'], why: 'Every part gets multiplied: 3·x, 3·2y, and 3·5.' },
        { q: 'Which move does NOT keep the same solution?', c: ['Multiplying only the left side of an equation by 2', 'Multiplying both sides of an equation by 2', 'Adding the two equations together', 'Subtracting one equation from the other'], why: 'Changing just one side breaks the balance, so the equation stops being true.' },
        { q: 'If a = b and c = d, then a + c equals…', c: ['b + d', 'b − d', 'a − c', '2b + d'], why: 'Adding equal amounts to equal amounts keeps them equal.' },
        { q: 'Why is it OK to add two equations together?', c: ['Each side is equal, so adding equal amounts keeps things balanced', 'Because x and y are always positive', 'Because the lines have the same slope', 'Because adding always makes numbers bigger'], why: 'It is like adding the same weight to both sides of a balanced scale.' },
        { q: '2x + y = 7 and x − y = 2 has the solution (3, 1). You replace the first equation with their sum, 3x = 9. What is the new solution?', c: ['(3, 1)', '(9, 1)', '(1, 3)', '(3, 9)'], why: 'The solution stays the same. 3x = 9 gives x = 3, and 3 − y = 2 gives y = 1.' },
        { q: 'Which system is equivalent to y = 2x and x + y = 9?', c: ['y = 2x and 3x = 9', 'y = 2x and x + y = 18', 'y = x and x + y = 9', 'y = 2x and 2x = 9'], why: 'Swapping y for 2x turns x + y = 9 into 3x = 9. Both systems have the solution (3, 6).' },
        { q: 'Why is multiplying an equation by 0 not allowed?', c: ['It turns the equation into 0 = 0 and loses its information', 'It makes x negative', 'It changes the slope to 1', 'Zero is not a real number'], why: 'Anything times 0 is 0, so the equation no longer tells you anything.' },
        { q: 'System A: x + y = 5 and x − y = 1. System B: x + y = 5 and 2x = 6. Are they equivalent?', c: ['Yes — both have the solution (3, 2)', 'No — they have different equations', 'No — System B has no y in its second equation', 'Only if x = 0'], why: '2x = 6 came from adding the equations in A. The pair (3, 2) works in all four equations.' },
        { q: 'Is (2, 5) a solution to both 3x + y = 11 and 6x + 2y = 22?', c: ['Yes — the second is just the first times 2', 'No — 22 is not 11', 'Only to the first equation', 'Only to the second equation'], why: '3·2 + 5 = 11 and 6·2 + 2·5 = 22. Multiplying by 2 did not change the solution.' },
        { q: 'For x + 3y = 10 and 2x − y = 6, you multiply the second equation by 3, then add. What do you get?', c: ['7x = 28', '7x = 16', '3x + 2y = 16', '6x = 18'], why: '3 times the second is 6x − 3y = 18. Add x + 3y = 10 to get 7x = 28, so x = 4.' },
      ],
      realLife: {
        text: `<p>Adding true facts gives another true fact. That is the whole idea.</p>
          <p>Say Monday's order was <b>2 falafel wraps + 1 drink = $13</b>. Tuesday's was <b>1 wrap + 1 drink = $8</b>. Put both orders together: <b>3 wraps + 2 drinks = $21</b>. That's still true, because you added equal amounts to both sides.</p>
          <p>Doubling works too. If 1 wrap + 1 drink = $8, then 2 wraps + 2 drinks = $16.</p>
          <p>A balance scale works the same way: add the same weight to both sides and it stays level.</p>`,
        prompt: 'Using your own example (food, sports scores, or money), explain why adding two true equations together gives you another true equation.',
      },
    },
    {
      key: 'a07-05',
      title: 'Number of solutions to systems',
      videos: [
        { id: 'BNHLzEv6Mjg', title: 'Analyzing solutions to linear systems graphically 1' },
        { id: 'ogEddosP1G8', title: 'Number of solutions to a system of equations algebraically' },
        { id: 'Ix8Nne-a-KQ', title: 'Consistent and inconsistent systems' },
      ],
      learn: `
        <p>A system of two lines can have <b>one</b> solution, <b>no</b> solution, or <b>infinitely many</b> (endless) solutions. Look at each line's <b>slope</b> (steepness) and <b>y-intercept</b> (where it crosses the y-axis).</p>
        <ul>
          <li><b>One solution:</b> different slopes. The lines cross once.</li>
          <li><b>No solution:</b> same slope, different y-intercepts. The lines are <b>parallel</b> (side by side, never meeting).</li>
          <li><b>Infinitely many:</b> same slope AND same y-intercept. It's really the same line twice, so every point on it works.</li>
        </ul>
        <p>A system with at least one solution is called <b>consistent</b>. A system with no solution is called <b>inconsistent</b>.</p>
        <p><b>Shortcut while solving:</b> if both letters disappear, look at what is left.</p>
        <ul>
          <li>A false statement like <b>3 = −1</b> means <b>no solution</b>.</li>
          <li>A true statement like <b>0 = 0</b> means <b>infinitely many</b>.</li>
        </ul>
        <p><b>Worked example:</b> y = 2x + 3 and y = 2x − 1.</p>
        <ul>
          <li>Both slopes are 2, but the y-intercepts are 3 and −1. The lines are parallel.</li>
          <li>Substitute: 2x + 3 = 2x − 1. Subtract 2x from both sides: 3 = −1. That is false!</li>
          <li>So there is <b>no solution</b>.</li>
        </ul>`,
      quiz: [
        { q: 'How many solutions: y = 3x + 1 and y = 3x − 4?', c: ['None — same slope, different y-intercepts', 'One — the lines cross once', 'Infinitely many — same slope', 'Two — one for each line'], why: 'Slope 3 in both, but they start at 1 and −4. Parallel lines never meet.' },
        { q: 'How many solutions: y = 2x + 5 and y = −x + 5?', c: ['One — the slopes are different', 'None — same y-intercept', 'Infinitely many — same y-intercept', 'Two — one for each line'], why: 'Different slopes (2 and −1) always cross once. Here they cross at (0, 5).' },
        { q: 'How many solutions: y = x + 2 and 2y = 2x + 4?', c: ['Infinitely many — it is the same line', 'None — the lines are parallel', 'One — the lines cross once', 'Two — one for each line'], why: 'Divide 2y = 2x + 4 by 2 and you get y = x + 2. Same line.' },
        { q: 'Parallel lines (lines that never meet) mean the system has…', c: ['no solution', 'one solution', 'infinitely many solutions', 'exactly two solutions'], why: 'No crossing point means no (x, y) works in both equations.' },
        { q: 'While solving a system, the letters cancel and you get 0 = 7. What does that mean?', c: ['No solution', 'x = 7', 'Infinitely many solutions', 'x = 0'], why: '0 = 7 is never true, so no pair can work.' },
        { q: 'While solving a system, the letters cancel and you get 4 = 4. What does that mean?', c: ['Infinitely many solutions', 'No solution', 'x = 4', 'One solution at (4, 4)'], why: '4 = 4 is always true, so the two equations are the same line.' },
        { q: 'How many solutions: x + y = 5 and x + y = 8?', c: ['None', 'One', 'Infinitely many', 'Two'], why: 'Two numbers cannot add to 5 and to 8 at once. Subtracting gives 0 = 3, which is false.' },
        { q: 'How many solutions: x + y = 4 and 3x + 3y = 12?', c: ['Infinitely many', 'None', 'One', 'Three'], why: 'The second is the first times 3. Same line, so every point on it works.' },
        { q: 'How many solutions: x + y = 6 and x − y = 2?', c: ['One', 'None', 'Infinitely many', 'Two'], why: 'Adding gives 2x = 8, so x = 4 and y = 2. Exactly one pair: (4, 2).' },
        { q: 'A consistent system is one that…', c: ['has at least one solution', 'has no solution', 'always has exactly two solutions', 'is made of parallel lines'], why: 'Consistent means it has an answer. Inconsistent means no answer.' },
        { q: 'Which equation, paired with y = 4x − 2, gives NO solution?', c: ['y = 4x + 7', 'y = −4x − 2', 'y = 4x − 2', 'y = 2x − 4'], why: 'Same slope (4) with a different y-intercept (7 instead of −2) makes parallel lines.' },
        { q: 'Which equation, paired with y = −x + 3, gives infinitely many solutions?', c: ['2y = −2x + 6', 'y = −x + 6', 'y = x + 3', 'y = −2x + 3'], why: 'Divide 2y = −2x + 6 by 2 to get y = −x + 3. It is the same line.' },
      ],
      realLife: {
        text: `<p>The number of solutions shows up whenever two things change over time.</p>
          <ul><li><b>One solution:</b> you walk faster than your friend, who got a head start. At some moment you catch up. That moment is the one solution.</li>
          <li><b>No solution:</b> you both walk at the same speed, but he started ahead. You will never catch him. Parallel lines.</li>
          <li><b>Infinitely many:</b> two phones start at 100% and drain at the same rate. Their batteries match at every moment.</li></ul>`,
        prompt: 'Describe a real situation where two things will NEVER be equal, and explain what the "same slope" is in your example.',
      },
      practice: 'systemCount',
    },
    {
      key: 'a07-06',
      title: 'Systems of equations word problems',
      videos: [
        { id: 'pL4PXSXH-R8', title: 'Setting up systems of linear equations example' },
        { id: 'Q0tTfe2lKIc', title: 'System of equations word problem: walk & ride' },
        { id: 'W-5liMGKgHA', title: 'Age word problem example 1' },
      ],
      learn: `
        <p>Word problems turn into systems when there are <b>two unknowns</b> (numbers you don't know yet). Follow these steps:</p>
        <ol>
          <li><b>Name the unknowns.</b> Pick a letter for each and write what it means.</li>
          <li><b>Write two equations.</b> Often one counts <b>how many</b> things, and the other counts <b>how much</b> money (or distance, or points).</li>
          <li><b>Solve</b> with substitution or elimination.</li>
          <li><b>Check and answer in words</b>, with units (like "40 tickets").</li>
        </ol>
        <p><b>Worked example:</b> A school play sold 100 tickets. Student tickets cost $3 and adult tickets cost $5. They collected $380. How many of each?</p>
        <ul>
          <li>Let s = student tickets and a = adult tickets.</li>
          <li>How many: s + a = 100.</li>
          <li>How much money: 3s + 5a = 380.</li>
          <li>Multiply the first by 3: 3s + 3a = 300. Subtract it from the second: 2a = 80, so a = 40.</li>
          <li>Then s = 100 − 40 = 60.</li>
          <li>Check: 3·60 + 5·40 = 180 + 200 = 380 ✓.</li>
        </ul>
        <p><b>Answer:</b> 60 student tickets and 40 adult tickets.</p>
        <p><b>Tip:</b> if you get a negative number of tickets or half a person, go back and look for a mistake.</p>`,
      quiz: [
        { q: 'Pencils cost $1 and pens cost $2. Omar buys 10 items and spends $14. Which system fits? (p = pencils, n = pens)', c: ['p + n = 10 and p + 2n = 14', 'p + n = 14 and p + 2n = 10', 'p + n = 10 and 2p + n = 14', 'p = 10 and n = 14'], why: 'Items: p + n = 10. Money: $1 for each pencil plus $2 for each pen makes $14.' },
        { q: 'Omar’s system is p + n = 10 and p + 2n = 14. How many pens did he buy?', c: ['4', '6', '7', '10'], why: 'Subtract the first from the second: n = 14 − 10 = 4. Then p = 6.' },
        { q: 'Two numbers add up to 20. Their difference is 6. What are they?', c: ['13 and 7', '14 and 6', '10 and 10', '12 and 8'], why: 'x + y = 20 and x − y = 6. Add: 2x = 26, so x = 13. Then y = 7.' },
        { q: 'A game sold 80 tickets. Kids pay $4 and adults pay $6. They collected $380. How many adult tickets were sold?', c: ['30', '50', '60', '95'], why: 'k + a = 80 and 4k + 6a = 380. So 320 + 2a = 380, 2a = 60, and a = 30.' },
        { q: 'Bilal is 4 years older than his sister. Their ages add up to 22. How old is Bilal?', c: ['13', '9', '11', '18'], why: 'b = s + 4 and b + s = 22. So 2s + 4 = 22, s = 9, and Bilal is 13.' },
        { q: 'A rectangle’s perimeter (distance all the way around) is 30 cm. Its length is 3 cm more than its width. What is the width?', c: ['6 cm', '9 cm', '7.5 cm', '13.5 cm'], why: '2L + 2W = 30 and L = W + 3. So 4W + 6 = 30 and W = 6. The length is 9.' },
        { q: 'Sami has 12 coins, all dimes ($0.10) and quarters ($0.25). They are worth $2.40. How many quarters does he have?', c: ['8', '4', '12', '9.6'], why: 'd + q = 12 and 0.10d + 0.25q = 2.40 give q = 8, d = 4. Check: $0.40 + $2.00 = $2.40.' },
        { q: '"Ali bought 15 shirts and pants in all." Which equation shows this? (s = shirts, p = pants)', c: ['s + p = 15', 's × p = 15', 's − p = 15', '15s + p = 15'], why: '"In all" means the total count, so add them: s + p = 15.' },
        { q: 'Ayaan travels 25 km in 3 hours. He walks at 5 km per hour, then bikes at 15 km per hour. How long does he bike?', c: ['1 hour', '2 hours', '1.5 hours', '5/3 hours'], why: 'w + b = 3 and 5w + 15b = 25. So 15 + 10b = 25 and b = 1. He walks 2 hours.' },
        { q: 'Gym A costs $20 to join plus $5 per visit. Gym B costs $10 per visit with no joining fee. After how many visits do they cost the same?', c: ['4 visits', '2 visits', '6 visits', '30 visits'], why: '20 + 5v = 10v, so 20 = 5v and v = 4. Both cost $40.' },
        { q: 'Fatima sells granola bars for $2 and juice boxes for $1. She sells 30 items and makes $48. How many granola bars did she sell?', c: ['18', '12', '24', '15'], why: 'g + j = 30 and 2g + j = 48. Subtract: g = 18. Then j = 12.' },
        { q: 'You solve a ticket problem and get a = 40 and s = 60. What is the best final answer?', c: ['40 adult tickets and 60 student tickets', 'x = 40', '(40, 60)', '100 tickets'], why: 'Answer the question in words with units, so it makes sense to anyone reading.' },
      ],
      realLife: {
        text: `<p>Systems help you make real choices.</p>
          <ul><li><b>Phone plans:</b> Plan A is $30 a month plus a $50 setup fee. Plan B is $40 a month with no fee. After how many months do they cost the same?</li>
          <li><b>School fundraiser:</b> you know how many items you sold and how much money you made. How many of each did you sell?</li>
          <li><b>Basketball:</b> a team made 22 shots worth 50 points, all 2-pointers and 3-pointers. How many of each?</li></ul>
          <p>Each one has two unknowns and two facts. That's a system.</p>`,
        prompt: 'Make up your own word problem with two unknowns from your life (snacks, games, or tickets). Write what each letter stands for and the two equations.',
      },
      practice: 'systemWord',
    },
  ],
};
