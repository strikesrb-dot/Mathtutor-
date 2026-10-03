// Unit 1 — Algebra foundations. NJ: A.SSE.A.1
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy, US channel @khanacademy).

export default {
  id: 'a01', n: 1, title: 'Algebra foundations', nj: ['A.SSE.A.1'],
  lessons: [
    {
      key: 'a01-01',
      title: 'Overview and history of algebra',
      videos: [
        { id: '_LDR1_Prveo', title: 'Origins of algebra' },
        { id: 'Tm98lnrlbMA', title: 'Why all the letters in algebra?' },
      ],
      learn: `
        <p><b>Algebra</b> (math that uses letters to stand for numbers) is a tool for solving number puzzles. Instead of guessing, you give the mystery number a name and work it out step by step.</p>
        <p>That letter is called a <b>variable</b> (a letter or symbol that stands for a number you don't know yet, or a number that can change). In the <b>equation</b> (a math sentence with an equals sign) x + 3 = 10, the x is the mystery number.</p>
        <p><b>A short history:</b></p>
        <ul>
          <li>Nearly 4,000 years ago, people in Babylon (in today's Iraq) and Egypt solved number puzzles about land and trade. They wrote them in words, not letters.</li>
          <li>Around the year 820, <b>al-Khwārizmī</b>, a Persian scholar at the House of Wisdom in Baghdad, wrote a famous book on solving equations. Part of it helped families split an <b>inheritance</b> (what a person leaves behind) under Islamic rules. The word <b>al-jabr</b> (meaning "restoring") in its title became our word <b>algebra</b>.</li>
          <li>His name gave us the word <b>algorithm</b> (a step-by-step set of instructions).</li>
          <li>In the 1500s and 1600s, European mathematicians started using letters like x.</li>
        </ul>
        <p><b>Worked example:</b> "I'm thinking of a number. Add 3 and you get 10." Call it x: x + 3 = 10. Take 3 from both sides: x = 7. Check: 7 + 3 = 10. ✓</p>`,
      quiz: [
        { q: "What is a variable?", c: ["A letter or symbol that stands for a number", "A number that never changes", "The final answer to a problem", "A plus or minus sign"], why: "A variable, like x, holds the place of a number we don't know yet or that can change." },
        { q: "The word “algebra” comes from…", c: ["“al-jabr,” a word in the title of al-Khwārizmī's book", "the name of a Greek king", "a Latin word for “letters”", "the name of an old calculator"], why: "Al-Khwārizmī's book from about 820 had “al-jabr” in its title. Europeans turned it into “algebra.”" },
        { q: "Where did al-Khwārizmī do his work?", c: ["Baghdad, in what is now Iraq", "Athens, in Greece", "Rome, in Italy", "Paris, in France"], why: "He worked at the House of Wisdom in Baghdad, a great center of learning." },
        { q: "Which English word comes from al-Khwārizmī's name?", c: ["algorithm", "alphabet", "altitude", "calculator"], why: "In Latin his name became “Algoritmi,” which gave us “algorithm”: a step-by-step set of instructions." },
        { q: "In x + 3 = 10, what number does x stand for?", c: ["7", "13", "3", "10"], why: "10 − 3 = 7, and 7 + 3 = 10 checks it." },
        { q: "“A number plus 5 equals 12.” Which equation matches?", c: ["n + 5 = 12", "n − 5 = 12", "5n = 12", "n + 12 = 5"], why: "“A number” is n, “plus 5” is + 5, and “equals 12” is = 12." },
        { q: "How did al-Khwārizmī write his math problems?", c: ["In words and sentences, without letters like x", "With x and y, just like today", "Using only Roman numerals", "Only as multiplication tables"], why: "Using letters like x started in Europe hundreds of years later. He wrote problems out in sentences." },
        { q: "Why use a variable instead of just guessing?", c: ["It names the unknown number so we can solve for it step by step", "It makes the answer bigger", "Letters are easier to add than numbers", "Numbers are not allowed in algebra"], why: "Naming the mystery number lets us write the puzzle as an equation and solve it with clear steps." },
        { q: "Which is the variable in 4y − 2 = 10?", c: ["y", "4", "2", "10"], why: "y is the letter standing for an unknown number. 4, 2, and 10 are fixed numbers." },
        { q: "A ticket costs $9. Which shows the cost of t tickets?", c: ["9 × t", "9 + t", "t − 9", "9 ÷ t"], why: "Each ticket adds $9, so t tickets cost 9 times t." },
        { q: "“Al-jabr” in al-Khwārizmī's book title means about…", c: ["restoring", "counting", "star-gazing", "drawing"], why: "Al-jabr means “restoring.” It named the step of moving a subtracted amount to the other side to balance an equation." },
        { q: "About how long ago did al-Khwārizmī write his algebra book?", c: ["About 1,200 years ago", "About 120 years ago", "About 12,000 years ago", "About 50 years ago"], why: "He wrote it around the year 820. That is roughly 1,200 years ago." },
        { q: "In x − 4 = 9, what number does x stand for?", c: ["13", "5", "36", "4"], why: "9 + 4 = 13, and 13 − 4 = 9 checks it." },
        { q: "“A number times 6 equals 42.” Which equation matches?", c: ["6n = 42", "n + 6 = 42", "n − 6 = 42", "42n = 6"], why: "“A number times 6” is 6n, and “equals 42” is = 42." },
        { q: "“I'm thinking of a number. Subtract 5 and you get 11.” What is the number?", c: ["16", "6", "55", "−6"], why: "Call it x: x − 5 = 11. Add 5 to both sides: x = 16." },
        { q: "Who solved number puzzles nearly 4,000 years ago, long before algebra used letters?", c: ["People in Babylon and Egypt", "European mathematicians in the 1600s", "Scholars at the House of Wisdom", "Greek writers in the 1500s"], why: "Babylon and Egypt solved puzzles about land and trade, written out in words." },
        { q: "The number puzzles from ancient Babylon and Egypt were mostly about…", c: ["land and trade", "computers", "space travel", "electricity"], why: "People needed math to measure fields and to trade goods fairly." },
        { q: "Part of al-Khwārizmī's book helped families…", c: ["split an inheritance fairly under Islamic rules", "build the first computers", "plan trips to the moon", "invent the calculator"], why: "An inheritance is what a person leaves behind. His methods worked for any amount." },
        { q: "When did European mathematicians start using letters like x?", c: ["In the 1500s and 1600s", "About 4,000 years ago", "Around the year 820", "In the 1990s"], why: "Al-Khwārizmī wrote in words around 820. Letters like x came hundreds of years later." },
        { q: "Sam says al-Khwārizmī wrote x and y in his equations. What was his mistake?", c: ["Al-Khwārizmī wrote problems in words; letters came later in Europe", "Al-Khwārizmī only used Roman numerals", "Al-Khwārizmī wrote everything in Greek letters", "Nothing — Sam is right"], why: "He wrote problems in sentences. Europeans began using letters like x in the 1500s and 1600s." },
        { q: "Which of these is NOT an equation?", c: ["5n + 2", "n + 3 = 10", "4y = 20", "x − 1 = 6"], why: "An equation has an equals sign. 5n + 2 has none." },
        { q: "A box holds 12 dates. Which shows the number of dates in b boxes?", c: ["12 × b", "12 + b", "b − 12", "12 ÷ b"], why: "Each box adds 12 dates, so b boxes hold 12 times b." },
        { q: "What does the word “algorithm” mean?", c: ["A step-by-step set of instructions", "A kind of calculator", "A famous Greek king", "A letter that stands for a number"], why: "The word comes from al-Khwārizmī's name. It means clear steps you follow in order." },
        { q: "Is x = 5 the answer to x + 4 = 10?", c: ["No — 5 + 4 = 9, not 10", "Yes — 5 + 4 = 10", "Yes — 5 is close enough", "No — x must be 14"], why: "Always check by putting the number back in. 5 + 4 = 9, so x = 6 instead." },
      ],
      realLife: {
        text: `<p>You already use variables without calling them that.</p>
          <ul><li><b>Phone battery:</b> the percent left changes every time you check. That changing number is a variable.</li>
          <li><b>Tickets:</b> cost = 9 × t works whether you buy 1 ticket or 6. The rule stays the same; only t changes.</li>
          <li><b>Iftar:</b> if each guest eats 3 dates, you need 3 × g dates for g guests.</li>
          <li><b>Inheritance:</b> al-Khwārizmī wrote part of his book so families could split an inheritance fairly, using rules that work for any amount.</li></ul>
          <p>A variable lets one rule work for every case.</p>`,
        prompt: 'Think of something in your life that changes, like a score, a price, or a count. What letter would you use for it, and why is one rule better than doing every case by hand?',
      },
    },
    {
      key: 'a01-02',
      title: 'Introduction to variables',
      videos: [
        { id: 'tHYis-DP0oU', title: 'What is a variable?' },
        { id: 'vDaIKB19TvY', title: "Why aren't we using the multiplication sign?" },
        { id: 'Q1vMNyIP4Us', title: 'How to write expressions with variables' },
      ],
      learn: `
        <p>A <b>variable</b> (a letter that stands for a number) is like a labeled box. The number inside can change.</p>
        <p>An <b>expression</b> (a math phrase made of numbers, variables, and operations like + or −, with no equals sign) is like a recipe. For example, n + 4 means "some number, plus 4."</p>
        <p><b>How to write multiplication:</b> in algebra we stop using × because it looks like the letter x. Instead:</p>
        <ul>
          <li><b>5n</b> means 5 times n. The 5 is the <b>coefficient</b> (the number multiplying a variable).</li>
          <li><b>5 · n</b> (a raised dot) and <b>5(n)</b> also mean 5 times n.</li>
          <li><b>n/2</b> means n divided by 2.</li>
        </ul>
        <p><b>Turning words into expressions:</b></p>
        <ul>
          <li>"7 more than a number" → n + 7</li>
          <li>"3 less than a number" → n − 3 (not 3 − n!)</li>
          <li>"twice a number" → 2n</li>
        </ul>
        <p><b>Worked example:</b> Omar has b books. Sara has 4 more than twice as many. Twice b is 2b. Four more means + 4. So Sara has <b>2b + 4</b> books. If Omar has 5 books, Sara has 2 · 5 + 4 = 14.</p>`,
      quiz: [
        { q: "Which of these is an expression, not an equation?", c: ["3n + 2", "3n + 2 = 11", "n = 3", "2 + 3 = 5"], why: "An expression has no equals sign. The other three all have one, so they are equations." },
        { q: "What does 6k mean?", c: ["6 times k", "6 plus k", "60 + k", "k divided by 6"], why: "A number right next to a variable means multiply: 6k = 6 · k." },
        { q: "Why do we usually avoid the × sign in algebra?", c: ["It looks too much like the letter x", "Multiplication is not allowed in algebra", "It means divide in algebra", "It only works with even numbers"], why: "× and x look almost the same, so we use a dot, parentheses, or just write 4y." },
        { q: "“7 more than a number n” is written…", c: ["n + 7", "7n", "n − 7", "7 − n"], why: "“More than” means add: n + 7." },
        { q: "“5 less than a number n” is written…", c: ["n − 5", "5 − n", "n + 5", "5n"], why: "Start with n and take away 5. The order flips from the words: n − 5." },
        { q: "“Twice a number m” is written…", c: ["2m", "m + 2", "m²", "m/2"], why: "Twice means two times, so 2m. (m² means m times m.)" },
        { q: "“A number p divided by 4” is written…", c: ["p/4", "4/p", "4p", "p − 4"], why: "p is split into 4 parts: p/4. Order matters in division." },
        { q: "In 9w − 3, what is the coefficient of w?", c: ["9", "w", "3", "−3"], why: "The coefficient is the number multiplying the variable. 9w means 9 times w." },
        { q: "Which means the same as 4 · y?", c: ["4y", "4 + y", "y⁴", "y/4"], why: "The dot means multiply, and 4y is the short way to write 4 times y. (y⁴ means y·y·y·y.)" },
        { q: "A notebook costs $3. Which expression gives the cost of n notebooks?", c: ["3n", "n + 3", "3 − n", "n/3"], why: "Each notebook adds $3, so n notebooks cost 3 times n." },
        { q: "Omar has b books. Sara has 4 more than twice as many. Which expression shows Sara's books?", c: ["2b + 4", "4b + 2", "2(b + 4)", "b + 2 + 4"], why: "Twice b is 2b. Then add 4 more: 2b + 4." },
        { q: "Hamza is h years old. His sister is 3 years older. Which expression shows her age?", c: ["h + 3", "h − 3", "3h", "3 − h"], why: "Older means more years, so add 3: h + 3." },
        { q: "“8 less than a number t” is written…", c: ["t − 8", "8 − t", "t + 8", "8t"], why: "Start with t and take away 8. The order flips from the words: t − 8." },
        { q: "“The product (the answer to a multiplication) of 7 and a number y” is written…", c: ["7y", "7 + y", "y − 7", "y/7"], why: "Product means multiply, and 7 times y is written 7y." },
        { q: "“10 more than 3 times a number k” is written…", c: ["3k + 10", "10k + 3", "3(k + 10)", "3k − 10"], why: "3 times k is 3k. Then 10 more means add 10: 3k + 10." },
        { q: "“Half of a number n” is written…", c: ["n/2", "2n", "n − 2", "2/n"], why: "Half means split into 2 equal parts, so divide n by 2." },
        { q: "Which expression has a coefficient of 8?", c: ["8x + 3", "3x + 8", "x + 8", "x/8"], why: "The coefficient is the number multiplying the variable. In 8x + 3, 8 multiplies x." },
        { q: "Sam writes “4 less than a number n” as 4 − n. What was his mistake?", c: ["He flipped the order; it should be n − 4", "He should have written 4n", "He should have written n + 4", "Nothing — 4 − n is right"], why: "“4 less than n” means start at n and take away 4: n − 4." },
        { q: "Which of these is an equation, not an expression?", c: ["2y − 1 = 9", "2y − 1", "9 + y", "y/2"], why: "Only 2y − 1 = 9 has an equals sign." },
        { q: "A pack of gum has 5 pieces. Which expression gives the number of pieces in p packs?", c: ["5p", "p + 5", "5 − p", "p/5"], why: "Each pack adds 5 pieces, so p packs have 5 times p." },
        { q: "Which of these does NOT mean 5 times n?", c: ["5 + n", "5n", "5 · n", "5(n)"], why: "5 + n means add. The other three are all ways to write 5 times n." },
        { q: "Bilal has c coins. Aisha has 6 fewer coins than Bilal. Which expression shows Aisha's coins?", c: ["c − 6", "6 − c", "c + 6", "6c"], why: "Fewer means take away, so start with c and subtract 6." },
        { q: "Omar has b books and Sara has 2b + 4 books. If b = 7, how many books does Sara have?", c: ["18", "13", "22", "31"], why: "2b means 2 times 7 = 14. Then 14 + 4 = 18." },
        { q: "A car drives 60 miles each hour. Which expression gives the miles driven in h hours?", c: ["60h", "60 + h", "h/60", "60 − h"], why: "Each hour adds 60 miles, so h hours give 60 times h." },
      ],
      realLife: {
        text: `<p>Variables let you write one rule that works every time.</p>
          <ul><li><b>Basketball:</b> s three-pointers are worth 3s points.</li>
          <li><b>Gas:</b> at $3 a gallon, g gallons cost 3g dollars.</li>
          <li><b>Phone game:</b> 50 coins per level means L levels earn 50L coins.</li>
          <li><b>School fundraiser:</b> selling b boxes of candy at $5 each brings in 5b dollars.</li></ul>
          <p>The letter is the part that changes. The coefficient (the number in front) is the part that stays the same.</p>`,
        prompt: 'Make up your own expression from your life, like 3s for three-pointers. Tell what the letter stands for and what the number in front means.',
      },
    },
    {
      key: 'a01-03',
      title: 'Substitution and evaluating expressions',
      videos: [
        { id: 'AJNDeVt9UOo', title: 'How to evaluate an expression with variables' },
        { id: 'S_OX3ByvBSc', title: 'How to evaluate expressions with two variables' },
        { id: 'I9eLKDbc8og', title: 'Evaluating an algebraic expression in a word problem' },
      ],
      learn: `
        <p>To <b>evaluate</b> an expression (find the number it equals), you use <b>substitution</b> (swapping each variable for the number you're given).</p>
        <ol>
          <li>Rewrite the expression. Put each number in parentheses where its letter was.</li>
          <li>Follow the <b>order of operations</b> (the rule for which step comes first): parentheses, then exponents (powers like x²), then multiply and divide left to right, then add and subtract left to right.</li>
          <li>Do one step per line so you don't lose track.</li>
        </ol>
        <p><b>Worked example:</b> Evaluate 3x + 2y when x = 4 and y = −1.</p>
        <ul>
          <li>Substitute: 3(4) + 2(−1)</li>
          <li>Multiply: 12 + (−2)</li>
          <li>Add: <b>10</b></li>
        </ul>
        <p><b>Watch out for these traps:</b></p>
        <ul>
          <li>If x = 5, then 2x is 2 times 5 = 10. It is not 25.</li>
          <li>If x = −3, then x² = (−3)(−3) = 9. It is not −9. Parentheses keep negatives safe.</li>
        </ul>`,
      quiz: [
        { q: "Evaluate 4n + 1 when n = 3.", c: ["13", "16", "8", "44"], why: "Multiply first: 4 · 3 = 12. Then add 1: 12 + 1 = 13." },
        { q: "Evaluate 10 − 2x when x = 4.", c: ["2", "32", "6", "18"], why: "Multiply before subtracting: 2 · 4 = 8. Then 10 − 8 = 2." },
        { q: "Evaluate a + b when a = 7 and b = −3.", c: ["4", "10", "−4", "−10"], why: "7 + (−3) is the same as 7 − 3, which is 4." },
        { q: "Evaluate x² when x = 6.", c: ["36", "12", "8", "62"], why: "x² means x times x: 6 · 6 = 36, not 6 · 2." },
        { q: "Evaluate x² when x = −3.", c: ["9", "−9", "−6", "6"], why: "(−3)(−3) = 9. A negative times a negative is positive." },
        { q: "Evaluate 5xy when x = 2 and y = 3.", c: ["30", "10", "13", "11"], why: "5xy means 5 · x · y = 5 · 2 · 3 = 30." },
        { q: "Evaluate (m + 4)/2 when m = 10.", c: ["7", "12", "9", "14"], why: "Parentheses first: 10 + 4 = 14. Then 14 ÷ 2 = 7." },
        { q: "Evaluate 3p − q when p = 5 and q = 8.", c: ["7", "23", "−9", "27"], why: "3 · 5 = 15. Then 15 − 8 = 7." },
        { q: "Evaluate 2.5h when h = 4.", c: ["10", "6.5", "1.5", "100"], why: "2.5 · 4 = 10. Two 4s make 8, and half of 4 is 2, so 8 + 2 = 10." },
        { q: "Evaluate 6k when k = 1/3.", c: ["2", "18", "6 1/3", "1/18"], why: "6 times 1/3 is one-third of 6, and 6 ÷ 3 = 2." },
        { q: "A ride costs 3 + 2m dollars for m miles. What does a 7-mile ride cost?", c: ["$17", "$35", "$12", "$23"], why: "Multiply first: 2 · 7 = 14. Then add the $3 starting fee: 14 + 3 = $17." },
        { q: "F = 1.8C + 32 changes Celsius to Fahrenheit. What is F when C = 20?", c: ["68°F", "36°F", "52°F", "676°F"], why: "1.8 · 20 = 36. Then 36 + 32 = 68°F." },
        { q: "Evaluate 7 + 3x when x = 5.", c: ["22", "50", "42", "15"], why: "Multiply first: 3 · 5 = 15. Then add 7: 15 + 7 = 22." },
        { q: "Evaluate 2x² when x = 3.", c: ["18", "36", "12", "9"], why: "Exponent first: 3² = 9. Then multiply: 2 · 9 = 18." },
        { q: "Evaluate 4a − 2b when a = 3 and b = 5.", c: ["2", "22", "14", "−2"], why: "4 · 3 = 12 and 2 · 5 = 10. Then 12 − 10 = 2." },
        { q: "Evaluate −3y when y = −4.", c: ["12", "−12", "−7", "1"], why: "−3 · (−4) = 12. A negative times a negative is positive." },
        { q: "Evaluate (x − 2)² when x = 7.", c: ["25", "45", "47", "10"], why: "Parentheses first: 7 − 2 = 5. Then square it: 5 · 5 = 25." },
        { q: "Evaluate 20 ÷ k + 1 when k = 4.", c: ["6", "4", "5", "81"], why: "Divide before adding: 20 ÷ 4 = 5. Then 5 + 1 = 6." },
        { q: "Evaluate x² + y when x = −2 and y = 3.", c: ["7", "−1", "1", "−7"], why: "(−2)(−2) = 4. Then 4 + 3 = 7." },
        { q: "Sam evaluates 3x when x = 4 and gets 34. What was his mistake?", c: ["3x means 3 times x, so the answer is 12", "He should have added: 3 + 4 = 7", "He should have written 43", "Nothing — 34 is right"], why: "A number next to a letter means multiply. 3 · 4 = 12." },
        { q: "Mia says that when x = −5, x² = −25. What was her mistake?", c: ["(−5)(−5) = 25, because a negative times a negative is positive", "x² means 2x, so it should be −10", "x² means x + 2, so it should be −3", "Nothing — she is right"], why: "Put the negative in parentheses: (−5)² = (−5)(−5) = 25." },
        { q: "A gym charges 15 + 10m dollars for m months. What do 6 months cost?", c: ["$75", "$150", "$31", "$90"], why: "Multiply first: 10 · 6 = 60. Then add the $15: 60 + 15 = $75." },
        { q: "The area of a triangle is (1/2)bh. Find the area when b = 10 and h = 6.", c: ["30", "60", "8", "16"], why: "10 · 6 = 60, and half of 60 is 30." },
        { q: "Evaluate (a + b)/c when a = 9, b = 3, and c = 4.", c: ["3", "9.75", "48", "16"], why: "Top first: 9 + 3 = 12. Then 12 ÷ 4 = 3." },
      ],
      realLife: {
        text: `<p>Every time an app uses a formula, it is substituting numbers into an expression.</p>
          <ul><li><b>Weather app:</b> F = 1.8C + 32 turns Celsius into Fahrenheit. Put in C = 30 and you get 1.8(30) + 32 = 86°F.</li>
          <li><b>Ride app:</b> cost = 3 + 2m. A 5-mile ride costs 3 + 2(5) = $13.</li>
          <li><b>Phone battery:</b> if it loses 4% an hour, battery = 100 − 4h. After 6 hours: 100 − 4(6) = 76%.</li></ul>
          <p>Same expression, new number in, new answer out.</p>`,
        prompt: 'A phone loses 4% battery each hour, so battery = 100 − 4h. Find the battery after 10 hours and explain each step you did.',
      },
      practice: 'evalExpr',
    },
    {
      key: 'a01-04',
      title: 'Combining like terms',
      videos: [
        { id: 'CLWpkv6ccpA', title: 'Combining like terms introduction' },
        { id: 'FNnmseBlvaY', title: 'Combining like terms, but more complicated' },
      ],
      learn: `
        <p>A <b>term</b> (one piece of an expression, split off by + or − signs) can be a number, a variable, or both. In 4x + 3 − 2x + 5, the terms are 4x, 3, −2x, and 5.</p>
        <p><b>Like terms</b> (terms with the exact same variable part) can be put together. 4x and −2x are like terms. 3 and 5 are like terms too. They are both <b>constants</b> (plain numbers with no variable).</p>
        <p>Think of fruit: 4 apples + 2 apples = 6 apples. But 4 apples + 2 bananas can't become 6 "apple-bananas." In the same way, 3x + 2y stays 3x + 2y.</p>
        <p><b>Rules:</b></p>
        <ul>
          <li>Each term keeps the sign in front of it.</li>
          <li>Add or subtract the coefficients (the numbers in front). Keep the variable part the same.</li>
          <li>A lone x means 1x, so x + x = 2x.</li>
          <li>x² and x are NOT like terms.</li>
        </ul>
        <p><b>Worked example:</b> Simplify 4x + 3 − 2x + 5.</p>
        <ul>
          <li>Group the like terms: (4x − 2x) + (3 + 5)</li>
          <li>Combine: <b>2x + 8</b></li>
        </ul>`,
      quiz: [
        { q: "Simplify 5x + 3x.", c: ["8x", "15x", "8x²", "8"], why: "Add the coefficients: 5 + 3 = 8. The variable stays x: 8x." },
        { q: "Simplify 7y − 2y + 4.", c: ["5y + 4", "9y", "9y + 4", "5y − 4"], why: "7y − 2y = 5y. The 4 has no y, so it stays separate: 5y + 4." },
        { q: "Which pair are like terms?", c: ["3a and −8a", "3a and 3b", "4x and 4x²", "6 and 6m"], why: "Like terms have the exact same variable part. 3a and −8a both have just a." },
        { q: "Simplify 6m + 2 − m + 9.", c: ["5m + 11", "6m + 11", "7m + 11", "16m"], why: "6m − m = 5m (a lone m means 1m). 2 + 9 = 11. Answer: 5m + 11." },
        { q: "Simplify 3x + 4y.", c: ["3x + 4y (it can't be simplified)", "7xy", "7x", "7y"], why: "x and y are different variables, so 3x and 4y are not like terms." },
        { q: "Simplify −3n + 8n.", c: ["5n", "−11n", "11n", "−5n"], why: "Start at −3 and go up 8: −3 + 8 = 5, so 5n." },
        { q: "Simplify 2a − 5a.", c: ["−3a", "3a", "7a", "−7a"], why: "2 − 5 = −3, so the answer is −3a." },
        { q: "How many terms are in 9k − 4 + k?", c: ["3", "2", "1", "4"], why: "Terms are split by + and − signs: 9k, −4, and k. That makes 3." },
        { q: "Simplify x + x + x.", c: ["3x", "x³", "3 + x", "2x"], why: "Adding x three times is 3 times x: 3x. (x³ means x times x times x.)" },
        { q: "Simplify 4p + 2q − p + 3q.", c: ["3p + 5q", "8pq", "5p + 5q", "3p + q"], why: "p terms: 4p − p = 3p. q terms: 2q + 3q = 5q. Answer: 3p + 5q." },
        { q: "Simplify 2x² + 5x + 3x².", c: ["5x² + 5x", "10x²", "10x⁵", "7x² + 3x"], why: "Only the x² terms combine: 2x² + 3x² = 5x². The 5x has a different power, so it stays." },
        { q: "Simplify 0.5w + 1.5w.", c: ["2w", "2w²", "0.75w", "20w"], why: "0.5 + 1.5 = 2, so 0.5w + 1.5w = 2w." },
        { q: "Simplify 9k − 4k + k.", c: ["6k", "5k", "14k", "4k"], why: "A lone k means 1k. So 9 − 4 + 1 = 6, and the answer is 6k." },
        { q: "Simplify 3x + 5 + 2x − 8.", c: ["5x − 3", "5x + 13", "5x + 3", "2x"], why: "x terms: 3x + 2x = 5x. Numbers: 5 − 8 = −3. Answer: 5x − 3." },
        { q: "Which term is NOT a like term with 4y?", c: ["4y²", "−y", "0.5y", "10y"], why: "4y² has y squared. Like terms need the exact same variable part." },
        { q: "Simplify −2a + 6 − 5a − 1.", c: ["−7a + 5", "3a + 5", "−7a + 7", "−3a + 5"], why: "a terms: −2a − 5a = −7a. Numbers: 6 − 1 = 5. Answer: −7a + 5." },
        { q: "Sam simplifies 4x + 3 as 7x. What was his mistake?", c: ["3 is a constant, not an x term, so they cannot combine", "He should have gotten 12x", "He should have gotten 7", "Nothing — 7x is right"], why: "4x and 3 are not like terms. 4x + 3 is already as simple as it gets." },
        { q: "Simplify 8m − 8m + 3.", c: ["3", "3m", "16m + 3", "0"], why: "8m − 8m = 0m, which is 0. Only the 3 is left." },
        { q: "Simplify 2x + 3y + 4x − y.", c: ["6x + 2y", "6x + 4y", "8xy", "6x − 2y"], why: "x terms: 2x + 4x = 6x. y terms: 3y − y = 2y. Answer: 6x + 2y." },
        { q: "After you simplify 5a + 2b − 3 + a, how many terms are left?", c: ["3", "4", "2", "1"], why: "5a + a = 6a, so you get 6a + 2b − 3. That is 3 terms." },
        { q: "Simplify 1.5n + 2.5n − n.", c: ["3n", "4n", "5n", "3"], why: "1.5 + 2.5 − 1 = 3, so the answer is 3n." },
        { q: "You have 4 crates with c cans each, get 6 more crates, then give away 3 crates. Which expression shows the cans left?", c: ["7c", "13c", "7", "10c − 3"], why: "4c + 6c − 3c: 4 + 6 − 3 = 7, so 7c cans." },
        { q: "Simplify x² + 4x + 2x² − x.", c: ["3x² + 3x", "3x² + 5x", "6x²", "3x⁴ + 3x"], why: "x² terms: x² + 2x² = 3x². x terms: 4x − x = 3x." },
        { q: "A rectangle has sides x + 2 and 3x. Simplify its perimeter: (x + 2) + 3x + (x + 2) + 3x.", c: ["8x + 4", "4x + 2", "8x + 2", "12x"], why: "x terms: x + 3x + x + 3x = 8x. Numbers: 2 + 2 = 4." },
      ],
      realLife: {
        text: `<p>Combining like terms is just sorting, then counting.</p>
          <ul><li><b>Groceries:</b> 3 bags of rice + 2 bags of beans + 1 bag of rice = 4 bags of rice + 2 bags of beans. Rice only adds to rice.</li>
          <li><b>Coins:</b> 5 quarters + 3 dimes + 2 quarters = 7 quarters + 3 dimes.</li>
          <li><b>Airport cart:</b> 4 suitcases + 2 strollers + 3 suitcases = 7 suitcases + 2 strollers.</li></ul>
          <p>In algebra, x terms go with x terms, and plain numbers go with plain numbers.</p>`,
        prompt: 'Describe a time you sorted things into groups before counting them, like clothes, coins, or game items. How is that like combining like terms?',
      },
      practice: 'likeTerms',
    },
    {
      key: 'a01-05',
      title: 'Introduction to equivalent expressions',
      videos: [
        { id: '3NHSwiv_pSE', title: 'Simplifying with like terms and the distributive property' },
        { id: 'rHNY01R2VSQ', title: 'How to find equivalent expressions' },
      ],
      learn: `
        <p><b>Equivalent expressions</b> (expressions that give the same answer for every number you plug in) look different but act the same. Like "one half" and "50%," they are two ways to write one thing.</p>
        <p><b>Two tools make equivalent expressions:</b></p>
        <ul>
          <li><b>Combining like terms:</b> 2x + 3x is equivalent to 5x.</li>
          <li><b>The distributive property</b> (multiply the outside number by EVERY term inside the parentheses): 3(x + 4) = 3x + 12.</li>
        </ul>
        <p><b>How to check:</b> plug the same number into both. If even one number gives different answers, they are NOT equivalent. To prove they ARE equivalent, simplify both and see if they match.</p>
        <p><b>Worked example:</b> Is 2(x + 5) equivalent to 2x + 5?</p>
        <ul>
          <li>Try x = 1: 2(1 + 5) = 2 · 6 = 12, but 2(1) + 5 = 7.</li>
          <li>12 ≠ 7, so they are <b>not</b> equivalent.</li>
          <li>The fix: the 2 must multiply the 5 too, so 2(x + 5) = <b>2x + 10</b>.</li>
        </ul>
        <p><b>Careful:</b> one matching number is not proof. Two different expressions can match by luck at one number.</p>`,
      quiz: [
        { q: "Which is equivalent to 3(x + 4)?", c: ["3x + 12", "3x + 4", "x + 12", "3x + 7"], why: "Multiply 3 by both terms: 3 · x = 3x and 3 · 4 = 12." },
        { q: "Which is equivalent to 4a + 2a?", c: ["6a", "8a", "6a²", "6 + a"], why: "Combine like terms: 4 + 2 = 6, so 6a." },
        { q: "Is 2(x + 5) equivalent to 2x + 5?", c: ["No — 2(x + 5) = 2x + 10", "Yes — they use the same numbers", "Yes — both start with 2x", "Only when x = 0"], why: "The 2 multiplies the 5 too. At x = 1 they give 12 and 7, which are different." },
        { q: "Which is equivalent to 5(y − 2)?", c: ["5y − 10", "5y − 2", "5y + 10", "y − 10"], why: "5 · y = 5y and 5 · 2 = 10. Keep the minus: 5y − 10." },
        { q: "Which is equivalent to 7 + 3n?", c: ["3n + 7", "7n + 3", "10n", "3 + 7n"], why: "You can add in any order, so 7 + 3n and 3n + 7 are the same." },
        { q: "Kareem says 4x + 1 and 5x are equivalent because both equal 5 when x = 1. Is he right?", c: ["No — at x = 2 they give 9 and 10", "Yes — one match proves it", "Yes — they both have x", "No — 4x + 1 is always bigger"], why: "One match is not enough. At x = 2: 4(2) + 1 = 9, but 5(2) = 10." },
        { q: "Which is equivalent to 2(3m + 1)?", c: ["6m + 2", "6m + 1", "5m + 2", "6m + 3"], why: "2 · 3m = 6m and 2 · 1 = 2, so 6m + 2." },
        { q: "Which is equivalent to 8x − 3x + 2?", c: ["5x + 2", "11x + 2", "7x", "5x − 2"], why: "8x − 3x = 5x. The 2 has no x, so it stays: 5x + 2." },
        { q: "Which is NOT equivalent to 6x?", c: ["6 + x", "x + 5x", "2(3x)", "4x + 2x"], why: "6 + x adds 6 instead of multiplying. The other three all simplify to 6x." },
        { q: "When x = 3, what do 2(x + 4) and 2x + 8 both equal?", c: ["14", "10", "11", "24"], why: "2(3 + 4) = 2 · 7 = 14, and 2(3) + 8 = 6 + 8 = 14." },
        { q: "Which is equivalent to 3(x + 2) + x?", c: ["4x + 6", "3x + 6", "4x + 2", "4x + 5"], why: "3(x + 2) = 3x + 6. Add the extra x: 3x + x = 4x. Answer: 4x + 6." },
        { q: "Which is equivalent to −2(x − 4)?", c: ["−2x + 8", "−2x − 8", "−2x − 4", "2x + 8"], why: "−2 · x = −2x and −2 · (−4) = +8. A negative times a negative is positive." },
        { q: "Which is equivalent to 6(2x − 1)?", c: ["12x − 6", "12x − 1", "8x − 6", "12x + 6"], why: "Multiply 6 by both terms: 6 · 2x = 12x and 6 · 1 = 6. Keep the minus." },
        { q: "Which is equivalent to 5x + 10?", c: ["5(x + 2)", "5(x + 10)", "15x", "5(x + 5)"], why: "Check by distributing: 5(x + 2) = 5x + 10." },
        { q: "Nadia rewrote 4(n + 5) as 4n + 5. What was her mistake?", c: ["She didn't multiply the 5 by 4; it should be 4n + 20", "She should have added: n + 9", "It should be 9n", "Nothing — it is right"], why: "The 4 multiplies every term inside: 4 · n = 4n and 4 · 5 = 20." },
        { q: "Which is NOT equivalent to 2(x + 3)?", c: ["2x + 3", "2x + 6", "6 + 2x", "x + x + 6"], why: "2(x + 3) = 2x + 6. The 2 must multiply the 3 too." },
        { q: "You test x = 2 in 3(x + 5) and in 3x + 5. What do you find?", c: ["They give 21 and 11, so they are not equivalent", "Both give 21, so they are equivalent", "Both give 11, so they are equivalent", "They give 21 and 15, so they are not equivalent"], why: "3(2 + 5) = 3 · 7 = 21, but 3(2) + 5 = 11." },
        { q: "Which is equivalent to 10 − 4(x − 1)?", c: ["14 − 4x", "6x − 6", "6 − 4x", "10 − 4x − 1"], why: "−4(x − 1) = −4x + 4. Then 10 + 4 = 14, so 14 − 4x." },
        { q: "Which is equivalent to 7y − 2y + 3y?", c: ["8y", "12y", "2y", "8y³"], why: "7 − 2 + 3 = 8, so the answer is 8y." },
        { q: "Which is equivalent to −(x + 6)?", c: ["−x − 6", "−x + 6", "x − 6", "−6x"], why: "A minus sign out front flips every sign inside: −x − 6." },
        { q: "Which pair of expressions is equivalent?", c: ["4(x + 1) and 4x + 4", "4(x + 1) and 4x + 1", "4x + 1 and 5x", "x + 4 and 4x"], why: "4(x + 1) = 4 · x + 4 · 1 = 4x + 4." },
        { q: "Omar says 2x + 3x is equivalent to 5x². What was his mistake?", c: ["Adding like terms keeps the same power: 2x + 3x = 5x", "It should be 6x", "It should be 6x²", "Nothing — he is right"], why: "At x = 2: 2(2) + 3(2) = 10, but 5(2²) = 20. Not equivalent." },
        { q: "Which is equivalent to 2(x + 1) + 3(x + 2)?", c: ["5x + 8", "5x + 3", "5x + 4", "6x + 8"], why: "2x + 2 + 3x + 6. Then 2x + 3x = 5x and 2 + 6 = 8." },
        { q: "Four friends each buy a shirt for s dollars and a $3 cap. Which expression is NOT the total cost?", c: ["4s + 3", "4(s + 3)", "4s + 12", "s + s + s + s + 12"], why: "Each friend pays s + 3, so 4(s + 3) = 4s + 12. 4s + 3 counts only one cap." },
      ],
      realLife: {
        text: `<p>Equivalent expressions are different ways to do the same math, and some ways are easier in your head.</p>
          <ul><li><b>Shopping:</b> 4 shirts at $15 plus 4 hats at $5: 4(15 + 5) = 4 · 20 = $80. That matches 4 · 15 + 4 · 5 = 60 + 20 = $80.</li>
          <li><b>Mental math:</b> 6 · 99 = 6(100 − 1) = 600 − 6 = 594.</li>
          <li><b>Packing:</b> 3 lunch bags, each with x snacks and 2 juice boxes, hold 3(x + 2) = 3x + 6 items.</li></ul>
          <p>Pick whichever form makes the job easiest.</p>`,
        prompt: 'Use the distributive property to work out 7 · 102 in your head, the way 6 · 99 = 6(100 − 1). Write each step and explain why the trick works.',
      },
      practice: 'distribute',
    },
    {
      key: 'a01-06',
      title: 'Division by zero',
      videos: [
        { id: 'SQzjzStU1RQ', title: 'Why dividing by zero is undefined' },
        { id: 'PDReqvXfkBA', title: 'Why zero divided by zero is undefined/indeterminate' },
        { id: 'lHdlHTsXbZg', title: 'Undefined and indeterminate' },
      ],
      learn: `
        <p>You CAN divide zero by a number: 0 ÷ 5 = 0. If 5 friends share 0 cookies, each friend gets 0.</p>
        <p>But you CAN'T divide a number by zero. Mathematicians say 5 ÷ 0 is <b>undefined</b> (it has no answer that makes sense).</p>
        <p><b>Why?</b> Division undoes multiplication. 12 ÷ 3 = 4 because 4 · 3 = 12. So 5 ÷ 0 would need a number that, times 0, gives 5. But any number times 0 is 0. No number works.</p>
        <p><b>What about 0 ÷ 0?</b> Now every number works: 1 · 0 = 0, 7 · 0 = 0, 100 · 0 = 0. There's no single answer, so 0 ÷ 0 is also <b>undefined</b>. Some mathematicians call it <b>indeterminate</b> (it can't be pinned down to one value). Either way, it is not allowed.</p>
        <p><b>In algebra:</b> an expression like 6/x is undefined when x = 0. So always ask, "Which value makes the bottom zero?" A zero on top is fine.</p>
        <p><b>Worked example:</b> When is 8/(x − 3) undefined?</p>
        <ul>
          <li>The bottom is x − 3.</li>
          <li>Set it equal to zero: x − 3 = 0, so x = 3.</li>
          <li>At <b>x = 3</b> the expression is undefined. Any other x is fine.</li>
        </ul>`,
      quiz: [
        { q: "What is 0 ÷ 8?", c: ["0", "undefined", "8", "1"], why: "Zero split into 8 groups gives 0 in each. Check: 0 · 8 = 0." },
        { q: "What is 8 ÷ 0?", c: ["undefined", "0", "8", "infinity"], why: "No number times 0 gives 8, so 8 ÷ 0 has no answer. It is undefined." },
        { q: "Why is 12 ÷ 0 undefined?", c: ["No number times 0 equals 12", "Because 12 is too big", "Because the answer is 0", "Because 0 is not a number"], why: "Division undoes multiplication. Any number times 0 is 0, never 12." },
        { q: "0 ÷ 0 is called indeterminate because…", c: ["every number times 0 gives 0, so there's no single answer", "the answer is always 1", "the answer is always 0", "calculators can't show big numbers"], why: "1 · 0, 5 · 0, and 99 · 0 all equal 0. Too many possible answers means no one answer." },
        { q: "Which of these is undefined?", c: ["7/0", "0/7", "0/1", "7/7"], why: "Zero on the bottom means dividing by zero, which is undefined. Zero on top is fine: 0/7 = 0." },
        { q: "For what value of x is 5/x undefined?", c: ["x = 0", "x = 5", "x = 1", "x = −5"], why: "The bottom is x. It becomes zero when x = 0." },
        { q: "For what value of x is 4/(x − 6) undefined?", c: ["x = 6", "x = −6", "x = 4", "x = 0"], why: "Set the bottom to zero: x − 6 = 0, so x = 6." },
        { q: "For what value of x is 10/(x + 2) undefined?", c: ["x = −2", "x = 2", "x = 0", "x = 10"], why: "x + 2 = 0 when x = −2, because −2 + 2 = 0." },
        { q: "Is (x − 1)/5 ever undefined?", c: ["No — the bottom is always 5, never 0", "Yes, when x = 1", "Yes, when x = 0", "Yes, when x = 5"], why: "Only a zero on the bottom causes trouble. At x = 1 the top is 0, and 0 ÷ 5 = 0 is fine." },
        { q: "What is (x − 4)/2 when x = 4?", c: ["0", "undefined", "2", "−2"], why: "The top is 4 − 4 = 0, and 0 ÷ 2 = 0. Only a zero on the bottom is undefined." },
        { q: "A calculator shows “Error” for 9 ÷ 0. Why?", c: ["9 ÷ 0 is undefined, so there is no answer to show", "The battery is low", "9 is an odd number", "The answer is too small to show"], why: "Dividing by zero has no answer, so the calculator shows an error instead of a number." },
        { q: "Which of these equals 0?", c: ["0 ÷ 9", "9 ÷ 0", "0 ÷ 0", "9 ÷ 9"], why: "0 ÷ 9 = 0 because 0 · 9 = 0. Dividing by 0 is not allowed, and 9 ÷ 9 = 1." },
        { q: "For what value of x is 6/(2x − 8) undefined?", c: ["x = 4", "x = 8", "x = −4", "x = 0"], why: "Set the bottom to zero: 2x − 8 = 0, so 2x = 8 and x = 4." },
        { q: "Which is true about 5 ÷ 0 and 0 ÷ 5?", c: ["5 ÷ 0 is undefined, and 0 ÷ 5 = 0", "Both equal 0", "Both are undefined", "5 ÷ 0 = 0, and 0 ÷ 5 is undefined"], why: "Zero on the bottom is not allowed. Zero on top is fine: 0 ÷ 5 = 0." },
        { q: "Which expression is undefined when x = 3?", c: ["5/(x − 3)", "(x − 3)/5", "5/(x + 3)", "3/x"], why: "At x = 3, the bottom of 5/(x − 3) is 3 − 3 = 0." },
        { q: "Evaluate 10/(x − 2) when x = 7.", c: ["2", "undefined", "5", "0"], why: "The bottom is 7 − 2 = 5, which is not zero. 10 ÷ 5 = 2." },
        { q: "Sam says 0 ÷ 6 is undefined. What was his mistake?", c: ["Zero on top is fine: 0 ÷ 6 = 0, because 0 · 6 = 0", "It should be 6", "It should be 1", "Nothing — he is right"], why: "Only a zero on the bottom causes trouble. Zero split 6 ways is 0 each." },
        { q: "Lina says 6 ÷ 0 = 0. Which check shows she is wrong?", c: ["0 · 0 = 0, not 6", "6 · 0 = 6", "0 + 6 = 6", "6 − 0 = 6"], why: "If 6 ÷ 0 were 0, then 0 · 0 would have to equal 6. It equals 0." },
        { q: "Which of these is NOT undefined?", c: ["0/4", "4/0", "0/0", "9/(3 − 3)"], why: "0/4 = 0. The other three all have 0 on the bottom." },
        { q: "Is x/4 undefined when x = 0?", c: ["No — 0/4 = 0", "Yes — x is 0", "Yes — 4 cannot be divided", "Only when x = 4"], why: "The zero is on top, and 0 ÷ 4 = 0. The bottom is always 4." },
        { q: "Average = total points ÷ games played. Zara scored 0 points in 3 games. What is her average?", c: ["0 points per game", "Undefined", "3 points per game", "1/3 point per game"], why: "0 ÷ 3 = 0. Zero on top is fine." },
        { q: "Same formula (total points ÷ games played). Omar has played 0 games. What is his average?", c: ["Undefined — you cannot divide by 0 games", "0 points per game", "1 point per game", "Infinitely many points per game"], why: "With 0 games, the bottom is 0. There is no average yet." },
        { q: "For what value of x is (x + 2)/(x − 9) undefined?", c: ["x = 9", "x = −2", "x = −9", "x = 2"], why: "Only the bottom matters: x − 9 = 0 when x = 9. At x = −2 the top is 0, which is fine." },
        { q: "Which value of x makes 15/(3x) undefined?", c: ["x = 0", "x = 3", "x = 5", "x = 15"], why: "3x is 0 only when x = 0, because 3 · 0 = 0." },
      ],
      realLife: {
        text: `<p>Dividing by zero shows up whenever there is nothing to split by.</p>
          <ul><li><b>Sharing:</b> 12 dates shared by 4 people is 3 each. Shared by 0 people? The question makes no sense. That's undefined.</li>
          <li><b>Speed:</b> speed = distance ÷ time. Going 10 miles in 0 hours can't happen, so the formula breaks.</li>
          <li><b>Game stats:</b> average points = total points ÷ games played. Before you play any games, there is no average, so apps show "—" instead of a number.</li></ul>`,
        prompt: 'Explain to a friend why you cannot share 10 cookies among 0 people. Use the idea that division undoes multiplication.',
      },
    },
  ],
};
