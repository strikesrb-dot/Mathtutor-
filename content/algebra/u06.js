// Unit 6 — Statistics & data. NJ: S.ID.A.1, S.ID.A.2, S.ID.A.3, S.ID.B.5, S.ID.B.6, S.ID.C.7, S.ID.C.8, S.ID.C.9
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Khan's Algebra 1 course has no statistics unit, so videos come from Khan's statistics / grade-level data courses.
// Every number in the quizzes was recomputed with node. Quartiles use the "leave out the median" method (same as Khan).
export default {
  id: 'a06', n: 6, title: 'Statistics & data', nj: ['S.ID.A.1', 'S.ID.A.2', 'S.ID.A.3', 'S.ID.B.5', 'S.ID.B.6', 'S.ID.C.7', 'S.ID.C.8', 'S.ID.C.9'],
  lessons: [
    {
      key: 'a06-01',
      title: 'Data displays: dot plots, histograms, box plots',
      videos: [
        { id: 's_w3EJ2Jzw0', title: 'Comparing dot plots, histograms, and box plots' },
        { id: 'c02vjunQsJM', title: 'How to interpret a histogram' },
        { id: 'oBREri10ZHk', title: 'Interpreting box plots' },
      ],
      learn: `
        <p><b>Data</b> (facts or numbers you collect, like points scored each game) is easier to understand as a picture:</p>
        <ul>
          <li><b>Dot plot</b> (a number line with one dot for each data value): stack a dot above a number every time it shows up. Good for small data sets, because you see every value.</li>
          <li><b>Histogram</b> (a bar graph where each bar covers a range of numbers, like 10–19): the height of the bar shows how many values land in that range. Good for big data sets, but the exact values are hidden.</li>
          <li><b>Box plot</b> (a picture of the five-number summary): it shows the <b>minimum</b> (smallest value), <b>Q1</b> (first quartile, the middle of the lower half), the <b>median</b> (middle value), <b>Q3</b> (third quartile, the middle of the upper half), and the <b>maximum</b> (largest value). The box holds the middle half of the data.</li>
        </ul>
        <p><b>Worked example:</b> A player scored 4, 7, 8, 10, 12, 12, 15, 18, 22 points in 9 games.</p>
        <ol>
          <li>The values are already in order. Min = 4 and max = 22.</li>
          <li>The median is the 5th of the 9 values: <b>12</b>.</li>
          <li>Lower half (leave out the median): 4, 7, 8, 10. Its middle is (7 + 8) ÷ 2 = <b>7.5</b>, so Q1 = 7.5.</li>
          <li>Upper half: 12, 15, 18, 22. Its middle is (15 + 18) ÷ 2 = <b>16.5</b>, so Q3 = 16.5.</li>
        </ol>
        <p>The box goes from 7.5 to 16.5 with a line at 12. The whiskers (lines out the sides) reach 4 and 22.</p>`,
      quiz: [
        { q: 'On a dot plot, what does each dot stand for?', c: ['One data value, like one game or one person', 'The average of the data', 'A range of numbers, like 10–19', 'The total of all the data'], why: 'A dot plot puts one dot above the number line for every single value.' },
        { q: 'Dot plot of goals per game: 0 goals has 2 dots, 1 goal has 4 dots, 2 goals has 3 dots, 3 goals has 1 dot. How many games are shown?', c: ['10', '4', '6', '13'], why: 'Each dot is one game. Count every dot: 2 + 4 + 3 + 1 = 10 games.' },
        { q: 'You have 12 test scores and want to see every single score on a number line. Which display is best?', c: ['A dot plot', 'A box plot', 'A histogram', 'A five-number summary'], why: 'A dot plot shows one dot per value. Box plots and histograms hide the exact values.' },
        { q: 'A histogram of homework time has bars: 0–9 minutes = 3 students, 10–19 minutes = 5 students, 20–29 minutes = 2 students. How many students are shown?', c: ['10', '5', '3', '29'], why: 'Add the bar heights: 3 + 5 + 2 = 10 students.' },
        { q: 'A histogram has a bar for 10–19 with a height of 5. What can you NOT tell from that bar?', c: ['The exact value of each of those 5 data points', 'How many values are from 10 to 19', 'Whether that bar is taller than the others', 'That 5 values are 19 or less'], why: 'A histogram groups values into ranges, so the exact numbers are hidden.' },
        { q: 'In a box plot, what does the line inside the box show?', c: ['The median', 'The mean', 'The maximum', 'The range'], why: 'The line inside the box marks the median, the middle value of the data.' },
        { q: 'About how much of the data falls inside the box of a box plot?', c: ['The middle half (50%)', 'All of it (100%)', 'One quarter (25%)', 'Three quarters (75%)'], why: 'The box runs from Q1 to Q3. That covers the middle 50% of the data.' },
        { q: 'A box plot shows: min 2, Q1 5, median 8, Q3 12, max 20. About what percent of the data is above 12?', c: ['25%', '50%', '75%', '12%'], why: 'Q3 = 12 means about three quarters of the data is 12 or less, so about 25% is above.' },
        { q: 'Which number is NOT part of the five-number summary?', c: ['The mean', 'The median', 'The minimum', 'The first quartile (Q1)'], why: 'The five numbers are min, Q1, median, Q3, and max. The mean is not one of them.' },
        { q: 'What is the median of 3, 5, 9, 10, 14?', c: ['9', '5', '10', '8.2'], why: 'The values are in order. The middle (3rd) value is 9. 8.2 is the mean, not the median.' },
        { q: 'Points in 9 games: 4, 7, 8, 10, 12, 12, 15, 18, 22. What is Q1?', c: ['7.5', '7', '8', '12'], why: 'Lower half (leave out the median 12): 4, 7, 8, 10. Its middle is (7 + 8) ÷ 2 = 7.5.' },
        { q: 'A histogram of flight delays: 0–14 min = 20 flights, 15–29 min = 12, 30–44 min = 5, 45–59 min = 3. How many flights were 30 or more minutes late?', c: ['8', '5', '3', '40'], why: 'Add the bars for 30–44 and 45–59: 5 + 3 = 8 flights.' },
        { q: 'Dot plot of siblings: 0 siblings has 3 dots, 1 has 5 dots, 2 has 4 dots, 3 has 2 dots. How many students have 2 or more siblings?', c: ['6', '4', '14', '11'], why: 'Add the dots at 2 and 3 siblings: 4 + 2 = 6 students.' },
        { q: 'Data: 3, 6, 7, 9, 12, 15, 20. What is Q3?', c: ['15', '13.5', '12', '20'], why: 'The median is 9. The upper half (leave out the 9) is 12, 15, 20. Its middle is 15.' },
        { q: 'A box plot shows: min 10, Q1 18, median 25, Q3 30, max 41. What is the range (max − min)?', c: ['31', '12', '41', '25'], why: 'Range = max − min = 41 − 10 = 31. The 12 is only the width of the box.' },
        { q: 'A box plot of 40 students\' quiz scores has Q1 = 60. About how many students scored below 60?', c: ['10', '20', '30', '15'], why: 'Q1 marks off the bottom quarter. One quarter of 40 is 10 students.' },
        { q: 'A school has the heights of 600 students. Which display groups the heights into ranges, like 150–159 cm?', c: ['A histogram', 'A dot plot', 'A box plot', 'A scatter plot'], why: 'Each histogram bar covers a range. A dot plot with 600 dots would be too crowded to read.' },
        { q: 'Which is NOT true about a box plot?', c: ['It shows every single data value', 'It shows the median', 'Its whiskers reach the minimum and maximum', 'Its box holds the middle half of the data'], why: 'A box plot shows only five numbers. To see every value, use a dot plot.' },
        { q: 'Sam found the median of 9, 2, 7, 4, 5. He said 7, because 7 is in the middle of the list. What was his mistake?', c: ['He didn\'t put the numbers in order first — the median is 5', 'He should have found the average — the median is 5.4', 'Nothing — the median is 7', 'He should have averaged two middle numbers — the median is 5.5'], why: 'In order: 2, 4, 5, 7, 9. The middle value is 5.' },
        { q: 'A histogram of weekly reading time: 0–4 hours = 6 students, 5–9 hours = 9, 10–14 hours = 4, 15–19 hours = 1. How many students read less than 10 hours?', c: ['15', '9', '20', '6'], why: 'Add the bars below 10 hours: 6 + 9 = 15 students.' },
        { q: 'Dot plot: 5 has 1 dot, 6 has 3 dots, 7 has 2 dots, 8 has 1 dot. What is the median?', c: ['6', '6.5', '7', '3'], why: 'List the 7 values: 5, 6, 6, 6, 7, 7, 8. The middle (4th) value is 6.' },
        { q: 'A box plot of minutes per game has a median of 20. Which must be true?', c: ['About half the games were 20 minutes or more', 'The average game was 20 minutes', 'Every game was 20 minutes', 'The longest game was 20 minutes'], why: 'The median splits the data in half. It does not tell you the mean or the maximum.' },
        { q: 'Data: 2, 4, 5, 7, 9, 10, 12, 19. What is the median?', c: ['8', '8.5', '7', '9'], why: 'There are 8 values, so average the two middle ones: (7 + 9) ÷ 2 = 8. The 8.5 is the mean.' },
        { q: 'A histogram of 30 test scores has bars: 60–69 = 4, 70–79 = 11, 80–89 = 10, and 90–99. How tall is the 90–99 bar?', c: ['5', '25', '30', '10'], why: 'All the bars add to 30. 4 + 11 + 10 = 25, so the last bar is 30 − 25 = 5.' },
      ],
      realLife: {
        text: `<p>Sports teams and airports use these pictures all the time.</p>
          <ul><li><b>Sports:</b> a coach makes a <b>dot plot</b> of goals per game to see which games were normal and which were wild.</li>
          <li><b>Airport:</b> a manager makes a <b>histogram</b> of delays for 500 flights. One tall bar at 0–14 minutes means most flights were close to on time.</li>
          <li><b>Phone:</b> a <b>box plot</b> of your daily screen time for a month shows your typical day (the median) and how much it jumps around (the width of the box).</li></ul>`,
        prompt: 'Think of something you could count every day for a week, like minutes on your phone. Which display would you use (dot plot, histogram, or box plot), and why?',
      },
    },
    {
      key: 'a06-02',
      title: 'Center and spread: mean, median, IQR, outliers',
      videos: [
        { id: 'k3aKKasOmIw', title: 'Finding mean, median, and mode' },
        { id: 'qLYYHWYr8xI', title: 'How to calculate interquartile range IQR' },
        { id: '-2OOBEBq9-4', title: 'Impact on median and mean when removing lowest value example' },
      ],
      learn: `
        <p>The <b>center</b> (a typical value) of a data set can be found two ways:</p>
        <ul>
          <li><b>Mean</b> (the average): add all the values, then divide by how many there are.</li>
          <li><b>Median</b> (the middle value when the numbers are in order). With an even count, average the two middle values.</li>
        </ul>
        <p>The <b>spread</b> (how far apart the values are) can be measured with the <b>IQR</b> (interquartile range = Q3 − Q1, the width of the middle half of the data).</p>
        <p>An <b>outlier</b> (a value far away from the rest) can fool you. A common test: a value is an outlier if it is more than 1.5 × IQR above Q3 or below Q1.</p>
        <p><b>Worked example:</b> A player scored 8, 10, 12, 14, and 41 points in 5 games.</p>
        <ol>
          <li>Mean: 8 + 10 + 12 + 14 + 41 = 85, and 85 ÷ 5 = <b>17</b>.</li>
          <li>Median: the middle value is <b>12</b>.</li>
          <li>Now remove the 41. Mean: 44 ÷ 4 = <b>11</b>. Median: (10 + 12) ÷ 2 = <b>11</b>.</li>
        </ol>
        <p>The one big game pulled the mean up 6 points, but the median moved only 1 point. <b>Rule:</b> outliers pull the mean a lot and barely move the median. When there is an outlier, the median is the better "typical" number.</p>`,
      quiz: [
        { q: 'What is the mean of 3, 4, 4, 7, 12?', c: ['6', '4', '30', '9'], why: 'Add them: 3 + 4 + 4 + 7 + 12 = 30. Then 30 ÷ 5 = 6.' },
        { q: 'What is the median of 3, 4, 4, 7, 12?', c: ['4', '6', '7', '9'], why: 'The numbers are in order. The middle (3rd) value is 4.' },
        { q: 'What is the median of 5, 8, 10, 14?', c: ['9', '10', '9.25', '8'], why: 'Even count, so average the two middle values: (8 + 10) ÷ 2 = 9. 9.25 is the mean.' },
        { q: 'Data: 1, 3, 5, 6, 8, 9, 11, 14. What is the IQR?', c: ['6', '13', '10', '4'], why: 'Q1 = middle of 1, 3, 5, 6 = 4. Q3 = middle of 8, 9, 11, 14 = 10. So IQR = 6.' },
        { q: 'What does the IQR tell you?', c: ['How spread out the middle half of the data is', 'The average of the data', 'The most common value', 'The middle value'], why: 'IQR = Q3 − Q1, the width of the middle 50% of the data.' },
        { q: 'A player scored 8, 10, 12, 14, and 41 points. What is the mean?', c: ['17', '12', '85', '33'], why: '8 + 10 + 12 + 14 + 41 = 85, and 85 ÷ 5 = 17.' },
        { q: 'Same player: 8, 10, 12, 14, 41 points. Which number better shows a typical game?', c: ['The median, 12, because the 41 pulls the mean up', 'The mean, 17, because it uses every game', 'The max, 41, because it was his best game', 'The range, 33, because it shows the spread'], why: 'The one huge game (41) drags the mean above most of his games. The median stays in the middle.' },
        { q: 'You remove one very high outlier from a data set. What usually happens?', c: ['The mean drops a lot; the median changes a little', 'The median drops a lot; the mean changes a little', 'Both stay exactly the same', 'Both go up'], why: 'The mean uses every value, so a huge one pulls it hard. The median only depends on the middle.' },
        { q: 'Q1 = 20 and Q3 = 28. Using the 1.5 × IQR rule, values above what number are outliers?', c: ['40', '36', '42', '32'], why: 'IQR = 28 − 20 = 8. Then 1.5 × 8 = 12. Add to Q3: 28 + 12 = 40.' },
        { q: 'Five friends played a game app for 20, 30, 30, 40, and 130 minutes. What is the mean?', c: ['50 minutes', '30 minutes', '250 minutes', '110 minutes'], why: '20 + 30 + 30 + 40 + 130 = 250, and 250 ÷ 5 = 50 minutes.' },
        { q: 'Team A\'s points have an IQR of 4. Team B\'s points have an IQR of 12. What does that mean?', c: ['Team B\'s scores are more spread out', 'Team B scores more points on average', 'Team A\'s scores are more spread out', 'Team A has more outliers'], why: 'A bigger IQR means the middle half of the scores is spread wider. It says nothing about the average.' },
        { q: 'Flight delays (minutes): 0, 5, 5, 10, 120. Which number best tells a traveler the typical delay?', c: ['The median, 5 minutes', 'The mean, 28 minutes', 'The maximum, 120 minutes', 'The minimum, 0 minutes'], why: 'The one 120-minute delay pushes the mean to 28. Most delays were 10 minutes or less, so use the median.' },
        { q: 'What is the mean of 6, 9, 10, 15?', c: ['10', '9.5', '40', '13.3'], why: 'Add them: 6 + 9 + 10 + 15 = 40. Then 40 ÷ 4 = 10.' },
        { q: 'What is the median of 12, 3, 8, 21, 6, 10?', c: ['9', '10', '14.5', '8'], why: 'Put them in order: 3, 6, 8, 10, 12, 21. Average the middle two: (8 + 10) ÷ 2 = 9.' },
        { q: 'A box plot shows: min 4, Q1 10, median 15, Q3 22, max 30. What is the IQR?', c: ['12', '26', '7', '15'], why: 'IQR = Q3 − Q1 = 22 − 10 = 12. The 26 is the range (max − min).' },
        { q: 'Q1 = 40 and Q3 = 52. Using the 1.5 × IQR rule, values below what number are outliers?', c: ['22', '28', '70', '18'], why: 'IQR = 52 − 40 = 12. Then 1.5 × 12 = 18. Subtract from Q1: 40 − 18 = 22.' },
        { q: 'Q1 = 20 and Q3 = 30. Is a value of 60 an outlier by the 1.5 × IQR rule?', c: ['Yes — the cutoff is 30 + 15 = 45', 'No — the cutoff is 30 + 45 = 75', 'No — 60 is only twice Q3', 'Yes — any value above Q3 is an outlier'], why: 'IQR = 10, and 1.5 × 10 = 15. The cutoff is 30 + 15 = 45, and 60 is above it.' },
        { q: 'Data: min 5, Q1 12, Q3 20, max 35. Lina says the IQR is 30. What was her mistake?', c: ['She found the range — the IQR is 20 − 12 = 8', 'Nothing — the IQR is 30', 'She should add Q1 and Q3 — the IQR is 32', 'She should halve the range — the IQR is 15'], why: 'IQR uses the quartiles: Q3 − Q1 = 8. Max − min = 30 is the range.' },
        { q: 'Scores: 70, 75, 80, 85, 90 (mean 80, median 80). A score of 20 is added. What happens?', c: ['The mean drops to 70; the median drops only to 77.5', 'Both drop to 70', 'The median drops to 70; the mean drops only to 77.5', 'Neither one changes'], why: 'New mean: 420 ÷ 6 = 70. New median: (75 + 80) ÷ 2 = 77.5. The outlier pulls the mean much more.' },
        { q: 'Which is NOT a measure of center (a typical value)?', c: ['The IQR', 'The mean', 'The median', 'The mode (most common value)'], why: 'The IQR measures spread: how wide the middle half is. The others describe a typical value.' },
        { q: 'Four test scores have a mean of 85. Three of them are 80, 90, and 82. What is the fourth score?', c: ['88', '85', '84', '340'], why: 'The four scores must total 4 × 85 = 340. Then 340 − (80 + 90 + 82) = 340 − 252 = 88.' },
        { q: 'Daily steps for a week: 4,000; 5,000; 5,000; 6,000; 7,000; 8,000; 21,000. Which is bigger, the mean or the median?', c: ['The mean, because the 21,000-step day pulls it up', 'The median, because it is the middle value', 'They are equal, because every day counts', 'The median, because the 21,000-step day pulls it up'], why: 'Mean = 56,000 ÷ 7 = 8,000. Median = 6,000. The outlier drags the mean up.' },
        { q: 'Data: 2, 5, 6, 8, 10, 13, 15. What is the IQR?', c: ['8', '13', '6', '5'], why: 'Median 8. Lower half 2, 5, 6 gives Q1 = 5. Upper half 10, 13, 15 gives Q3 = 13. IQR = 8.' },
        { q: 'Data: 3, 5, 7, 9, 11. Which change would NOT change the median?', c: ['Changing the 11 to 50', 'Changing the 7 to 10', 'Removing the 3', 'Adding a value of 20'], why: 'The median is the middle value, 7. Making the biggest number bigger leaves the middle alone.' },
      ],
      realLife: {
        text: `<p>Reports pick "mean" or "median" for a reason.</p>
          <ul><li><b>Sports:</b> points per game is a mean. One 50-point night can make a player's average look higher than most of his games.</li>
          <li><b>Airport delays:</b> if 9 flights are 5 minutes late and 1 flight is 3 hours late, the mean delay is 22.5 minutes. The median, 5 minutes, tells the real story for most travelers.</li>
          <li><b>Home prices:</b> news reports use the median price, because one mansion would drag the mean way up.</li></ul>`,
        prompt: 'Think of a time one weird number (a huge score or a really bad day) could make an average misleading. Would the mean or the median tell the truth better, and why?',
      },
      practice: 'meanMedian',
    },
    {
      key: 'a06-03',
      title: 'Scatter plots and correlation',
      videos: [
        { id: 'sHbX58y5D4U', title: 'Constructing a scatter plot' },
        { id: '30LcZqRfPRY', title: 'Bivariate relationship linearity, strength and direction' },
        { id: '-Y-M9aD_ccQ', title: 'Example: Correlation coefficient intuition' },
      ],
      learn: `
        <p>A <b>scatter plot</b> (a graph of dots where each dot shows two numbers about one thing) helps you see if two things are connected. For example, each dot could be one day, with the temperature on the x-axis and ice-cream sales on the y-axis.</p>
        <p>Look for <b>correlation</b> (a pattern where two things change together):</p>
        <ul>
          <li><b>Positive:</b> as x goes up, y goes up. The dots climb from left to right.</li>
          <li><b>Negative:</b> as x goes up, y goes down. The dots fall from left to right.</li>
          <li><b>None:</b> no pattern. The dots look like a random cloud.</li>
        </ul>
        <p><b>Strong</b> means the dots stay close to a straight line. <b>Weak</b> means they are spread out but still lean one way.</p>
        <p>The <b>correlation coefficient</b> (a number called r, always from −1 to 1) measures this. Near 1 = strong positive. Near −1 = strong negative. Near 0 = little or no correlation. The sign shows the direction; the size shows the strength.</p>
        <p><b>Worked example:</b> Days at 60°F, 70°F, 80°F, and 90°F sold 20, 35, 50, and 70 ice creams.</p>
        <ol>
          <li>Plot the points (60, 20), (70, 35), (80, 50), (90, 70).</li>
          <li>As the temperature rises, sales rise: <b>positive</b>.</li>
          <li>The dots almost make a straight line: <b>strong</b>. A calculator gives r ≈ 0.997.</li>
        </ol>`,
      quiz: [
        { q: 'As the temperature goes up, ice-cream sales go up. What kind of correlation is this?', c: ['Positive', 'Negative', 'No correlation', 'Weak negative'], why: 'Both values go up together, so the dots climb from left to right.' },
        { q: 'Students who spend more hours on their phones tend to have lower grades. What kind of correlation is this?', c: ['Negative', 'Positive', 'No correlation', 'Strong positive'], why: 'One goes up while the other goes down. That is a negative correlation.' },
        { q: 'Which pair would most likely show NO correlation?', c: ['A student\'s birthday month and his height', 'Hours practiced and free throws made', 'Temperature and ice-cream sales', 'Miles driven and gas used'], why: 'The month you were born has nothing to do with how tall you are. The other pairs move together.' },
        { q: 'On a scatter plot, the dots stay very close to a straight line. The correlation is…', c: ['strong', 'weak', 'zero', 'impossible to tell'], why: 'Dots packed tightly around a line mean a strong correlation.' },
        { q: 'What does r = −0.9 mean?', c: ['A strong negative correlation', 'A weak negative correlation', 'A strong positive correlation', 'No correlation'], why: 'The minus sign means negative. 0.9 is close to 1, so it is strong.' },
        { q: 'What does r = 0.2 mean?', c: ['A weak positive correlation', 'A strong positive correlation', 'A weak negative correlation', 'A strong negative correlation'], why: 'It is positive, but 0.2 is close to 0, so the pattern is weak.' },
        { q: 'Which r shows the STRONGEST correlation?', c: ['−0.95', '0.6', '0.1', '−0.3'], why: 'Strength is how close r is to 1 or −1. The sign only shows direction, and −0.95 is closest to −1.' },
        { q: 'A scatter plot shows height (x) and weight (y) for players on a team. What does each dot stand for?', c: ['One player', 'The whole team', 'The average height', 'One inch of height'], why: 'Each dot shows two numbers about one thing: here, one player\'s height and weight.' },
        { q: 'The correlation coefficient r is always between…', c: ['−1 and 1', '0 and 1', '0 and 100', '−100 and 100'], why: 'r runs from −1 (perfect negative) to 1 (perfect positive).' },
        { q: 'At an airline, older planes tend to need more repairs each year. What kind of correlation is this?', c: ['Positive', 'Negative', 'No correlation', 'Perfect negative'], why: 'As age goes up, repairs go up. Both rise together.' },
        { q: 'The points (1, 10), (2, 8), (3, 6), (4, 4) are plotted. What kind of correlation do they show?', c: ['Strong negative', 'Strong positive', 'Weak positive', 'No correlation'], why: 'Each time x goes up 1, y goes down 2. The points sit on a perfect line, so r = −1.' },
        { q: 'The dots on a scatter plot look like a random cloud with no pattern. r is closest to…', c: ['0', '1', '−1', '0.9'], why: 'No pattern means little or no correlation, so r is near 0.' },
        { q: 'The longer a car drives, the less gas is left in its tank. What kind of correlation is this?', c: ['Negative', 'Positive', 'No correlation', 'Strong positive'], why: 'As driving time goes up, the gas left goes down. One rises while the other falls.' },
        { q: 'Which r shows the WEAKEST correlation?', c: ['0.05', '−0.7', '0.5', '−0.98'], why: 'Weakest means closest to 0. At 0.05 there is barely any pattern.' },
        { q: 'The dots fall from left to right and stay close to a line. Which r fits best?', c: ['−0.92', '0.92', '−0.15', '0.15'], why: 'Falling dots mean negative. Close to a line means strong, so r is near −1.' },
        { q: 'The points (1, 2), (2, 4), (3, 6), (4, 8) are plotted. What is r?', c: ['1', '−1', '0', '2'], why: 'The points sit on a perfect rising line, so r = 1. r can never be bigger than 1.' },
        { q: 'Maya says r = −0.8 is weaker than r = 0.3 because −0.8 is a smaller number. What was her mistake?', c: ['Strength is distance from 0, so −0.8 is stronger', 'Nothing — a negative r is always weaker', 'r can never be negative', 'She should compare 8 and 3 instead'], why: 'The sign only shows direction. −0.8 is much closer to −1 than 0.3 is to 1.' },
        { q: 'Which pair would most likely show a POSITIVE correlation?', c: ['Hours spent studying and test scores', 'Hours of TV and hours of sleep', 'A car\'s age and its price', 'Shoe size and birthday month'], why: 'More study time tends to go with higher scores. Both rise together.' },
        { q: 'Which pair would most likely show a NEGATIVE correlation?', c: ['Outside temperature and hot-chocolate sales', 'Height and arm length', 'Number of workers and boxes packed', 'Hours practiced and goals scored'], why: 'On hotter days, fewer people buy hot chocolate. One goes up as the other goes down.' },
        { q: 'Data: x = 1, 2, 3, 4, 5 and y = 9, 7, 6, 4, 2. Which r is closest?', c: ['−0.99', '0.99', '0', '−0.3'], why: 'y drops steadily as x rises, almost in a straight line. That is strong negative.' },
        { q: 'A scatter plot shows age (x) and height in cm (y) for kids. What does the dot (10, 140) mean?', c: ['A 10-year-old who is 140 cm tall', 'A 140-year-old who is 10 cm tall', '10 kids who are 140 cm tall', 'The average height is 140 cm'], why: 'Each dot is one kid. x is the age, and y is the height.' },
        { q: 'Which statement about r is NOT true?', c: ['r = 1.5 means a very strong positive correlation', 'r = −1 means the dots make a perfect falling line', 'The sign of r shows the direction', 'r near 0 means little or no correlation'], why: 'r is always between −1 and 1, so r = 1.5 is impossible.' },
        { q: 'A scatter plot shows flight distance (x) and fuel used (y). The dots climb and hug a line. Which describes it?', c: ['Strong positive', 'Weak positive', 'Strong negative', 'No correlation'], why: 'Climbing dots mean positive. Hugging a line means strong.' },
        { q: 'What does a weak negative correlation look like?', c: ['Dots that drift downward but are widely spread', 'Dots that climb in a tight line', 'Dots that fall in a tight line', 'A random cloud that leans neither way'], why: 'Negative means falling. Weak means the dots are spread out, not tight to a line.' },
      ],
      realLife: {
        text: `<p>Scatter plots help you spot connections in real life:</p>
          <ul><li><b>Weather:</b> hotter days go with more ice cream sold (positive).</li>
          <li><b>Phones:</b> in many studies, more daily screen time goes with lower grades (negative).</li>
          <li><b>Sports:</b> more practice shots go with more free throws made in games (positive).</li>
          <li><b>Airport:</b> more flights waiting for the runway go with longer delays (positive).</li>
          <li><b>No pattern:</b> a player's jersey number and his points scored (none).</li></ul>
          <p>Data experts use r to say how strong each connection is.</p>`,
        prompt: 'Name two things in your life that you think go together (or go in opposite directions). Would their scatter plot show positive, negative, or no correlation, and would it be strong or weak?',
      },
    },
    {
      key: 'a06-04',
      title: 'Line of best fit and residuals',
      videos: [
        { id: 'mfX_yUvwJho', title: 'Interpreting a trend line' },
        { id: 'yMgFHbjbAW8', title: 'Introduction to residuals and least squares regression' },
        { id: 'VamMrPZ-8fc', title: 'Residual plots' },
      ],
      learn: `
        <p>A <b>line of best fit</b> (a straight line drawn through the middle of the dots on a scatter plot) shows the trend. It should have about as many dots above it as below it. You can use its equation to <b>predict</b> (make a smart guess) for values you did not measure.</p>
        <p>No line hits every dot. The miss for each dot is called its <b>residual</b> (actual value − predicted value).</p>
        <ul>
          <li>Dot <b>above</b> the line: positive residual (the real value was higher than predicted).</li>
          <li>Dot <b>below</b> the line: negative residual.</li>
          <li>Dot <b>on</b> the line: residual of 0.</li>
        </ul>
        <p><b>Worked example:</b> A shop's line is y = 2x − 100, where x = temperature (°F) and y = ice creams sold.</p>
        <ol>
          <li>Predict for 80°F: y = 2(80) − 100 = 160 − 100 = <b>60</b>.</li>
          <li>The shop really sold <b>66</b> that day.</li>
          <li>Residual = actual − predicted = 66 − 60 = <b>6</b>. The dot is 6 above the line.</li>
        </ol>
        <p>A <b>residual plot</b> (a graph of all the residuals) checks the line. If the residuals bounce randomly above and below 0 with no pattern, the line is a good fit. Be careful predicting far outside your data (like 150°F), because the pattern may not hold there.</p>`,
      quiz: [
        { q: 'A shop\'s line is y = 2x − 100 (x = temperature in °F, y = ice creams sold). Predict sales at 75°F.', c: ['50', '150', '250', '−50'], why: '2 × 75 = 150, then 150 − 100 = 50 ice creams.' },
        { q: 'How do you find a residual?', c: ['Actual value − predicted value', 'Predicted value − actual value', 'Actual value + predicted value', 'Slope × x'], why: 'Residual = actual − predicted. It tells how far the real dot is from the line.' },
        { q: 'The line predicts 60 ice creams. The shop really sold 66. What is the residual?', c: ['6', '−6', '126', '60'], why: 'Actual − predicted = 66 − 60 = 6.' },
        { q: 'The line predicts 45. The actual value is 40. What is the residual?', c: ['−5', '5', '85', '40'], why: 'Actual − predicted = 40 − 45 = −5. The dot is below the line.' },
        { q: 'A dot sits above the line of best fit. Its residual is…', c: ['positive', 'negative', 'zero', 'the same as the slope'], why: 'Above the line means the real value is bigger than predicted, so actual − predicted is positive.' },
        { q: 'A residual of 0 means…', c: ['the dot is exactly on the line', 'the dot is far above the line', 'the data has no correlation', 'the prediction was way off'], why: 'Actual = predicted, so there is no miss at all.' },
        { q: 'A line for test scores is y = −4x + 95, where x = hours of screen time per day. Predict the score for 5 hours.', c: ['75', '115', '90', '−20'], why: '−4 × 5 = −20, then −20 + 95 = 75.' },
        { q: 'In y = −4x + 95 (x = hours of screen time, y = test score), what does the slope −4 mean?', c: ['Each extra hour goes with about 4 fewer points', 'Each extra hour goes with about 4 more points', 'The score starts at −4', 'Screen time drops 4 hours for each point'], why: 'Slope = change in y for each 1 unit of x. Here the score drops 4 points per hour.' },
        { q: 'Which is true about a good line of best fit?', c: ['About as many dots are above it as below it', 'It must go through every dot', 'It must go through the first and last dots', 'It must start at (0, 0)'], why: 'The line runs through the middle of the cloud, balancing the dots on both sides.' },
        { q: 'A residual plot shows dots scattered randomly above and below 0, with no pattern. What does that tell you?', c: ['The line is a good fit', 'The line is a bad fit', 'Every prediction is exact', 'The data has no correlation'], why: 'Random residuals mean the line follows the trend well. A curve or other pattern would mean a poor fit.' },
        { q: 'A line predicts a delay of y = 3x + 10 minutes when x flights are waiting. With 12 flights waiting, the real delay was 40 minutes. What is the residual?', c: ['−6', '6', '46', '86'], why: 'Predicted: 3 × 12 + 10 = 46. Residual = actual − predicted = 40 − 46 = −6.' },
        { q: 'The ice-cream data only goes from 60°F to 90°F. Why is it risky to predict sales at 150°F?', c: ['The data never went that high, so the pattern may not hold', 'The equation cannot use numbers over 100', 'Residuals are always negative above 100°F', 'Lines of best fit only work for whole numbers'], why: 'Predictions far outside your data are guesses. At 150°F, people might stay inside instead of buying ice cream.' },
        { q: 'A line y = 5x + 20 predicts points scored (y) from minutes played (x). Predict the points for 12 minutes.', c: ['80', '160', '37', '60'], why: '5 × 12 = 60, then 60 + 20 = 80 points.' },
        { q: 'Same line y = 5x + 20. A player played 12 minutes and scored 74 points. What is the residual?', c: ['−6', '6', '154', '74'], why: 'Predicted: 80. Residual = actual − predicted = 74 − 80 = −6.' },
        { q: 'A line y = −8x + 100 predicts phone battery percent (y) after x hours. Predict the battery after 6 hours.', c: ['52', '148', '−48', '92'], why: '−8 × 6 = −48, then −48 + 100 = 52%.' },
        { q: 'Same battery line y = −8x + 100. After 6 hours the battery really read 58%. What is the residual?', c: ['6', '−6', '110', '58'], why: 'Predicted: 52. Residual = 58 − 52 = 6. The real battery was a bit higher.' },
        { q: 'In y = −8x + 100 (battery percent after x hours), what does the 100 mean?', c: ['The battery starts at about 100% at 0 hours', 'The battery drops 100% each hour', 'The battery dies after 100 hours', 'The battery drops 8% at the start'], why: 'The y-intercept is the prediction when x = 0: the starting battery.' },
        { q: 'Omar\'s line predicts 30. The actual value is 25. He says the residual is 5. What was his mistake?', c: ['He did predicted − actual — the residual is 25 − 30 = −5', 'Nothing — the residual is 5', 'He should add them — the residual is 55', 'He should divide — the residual is 1.2'], why: 'Residual is always actual − predicted. The dot is below the line, so it is negative.' },
        { q: 'A dot has a residual of −10. Where is it?', c: ['10 units below the line', '10 units above the line', 'Exactly on the line', '10 units left of the line'], why: 'A negative residual means the actual value was less than predicted, so the dot is below.' },
        { q: 'Four dots have residuals 1, −4, 6, and −9. Which dot did the line predict BEST?', c: ['The dot with residual 1', 'The dot with residual −9', 'The dot with residual 6', 'The dot with residual −4'], why: 'The best prediction has the smallest miss: the residual closest to 0.' },
        { q: 'A residual plot shows a clear U-shaped curve. What does that tell you?', c: ['A straight line is not a good fit', 'The line is a perfect fit', 'Every residual is zero', 'The line goes through every dot'], why: 'A pattern in the residuals means the data bends. A good fit leaves random residuals.' },
        { q: 'A line of best fit has 8 dots above it and 1 dot below it. What is wrong?', c: ['It is too low — about as many dots should be above as below', 'Nothing — more dots above is better', 'It is too high — it should move down', 'It must go through the first dot'], why: 'Most dots are above, so the line sits under the cloud. Moving it up balances it.' },
        { q: 'A line y = 2.5x + 10 predicts a plant\'s height in cm after x weeks. What does 2.5 mean?', c: ['The plant grows about 2.5 cm each week', 'The plant starts at 2.5 cm', 'The plant grows 10 cm each week', 'The plant takes 2.5 weeks to grow 1 cm'], why: 'The slope is the change in height for each 1 week.' },
        { q: 'Using y = 2x − 100 (x = temperature in °F, y = ice creams sold), at what temperature does the line predict 40 ice creams?', c: ['70°F', '−20°F', '140°F', '−30°F'], why: 'Solve 2x − 100 = 40. Add 100: 2x = 140. Divide by 2: x = 70.' },
      ],
      realLife: {
        text: `<p>Lines of best fit turn data into predictions:</p>
          <ul><li><b>Ice-cream shop:</b> the owner uses the forecast temperature to guess how much to stock. A big positive residual means more customers came than expected.</li>
          <li><b>Airport:</b> planners use the number of flights waiting to predict delays and warn passengers early.</li>
          <li><b>Sports:</b> analysts predict a player's points from his minutes played. A player with big positive residuals is beating expectations.</li></ul>
          <p>Residuals show where a prediction missed, so people can fix the plan.</p>`,
        prompt: 'Pick something you could predict with a line, like points from minutes played. What would a big positive residual mean in that situation?',
      },
      practice: 'residual',
    },
    {
      key: 'a06-05',
      title: 'Correlation vs. causation',
      videos: [
        { id: 'ROpbdO-gRUo', title: 'Correlation and causality' },
      ],
      learn: `
        <p><b>Correlation</b> (two things tend to change together) is not the same as <b>causation</b> (one thing actually makes the other happen). A strong r shows a pattern, not a cause.</p>
        <p>Often a <b>lurking variable</b> (a hidden third thing that affects both) is behind the pattern.</p>
        <p><b>Worked example:</b> In summer, ice-cream sales and sunburns both go up. Does ice cream cause sunburns?</p>
        <ol>
          <li><b>Is there a correlation?</b> Yes. Days with more ice-cream sales also have more sunburns.</li>
          <li><b>Could a third thing cause both?</b> Yes: hot, sunny weather. Sun makes people buy ice cream, and sun burns skin.</li>
          <li><b>Conclusion:</b> correlation, not causation. Eating ice cream does not burn you.</li>
        </ol>
        <p>To really show a cause, scientists run a <b>randomized experiment</b> (people are put into groups by chance, like a coin flip, and only one thing is changed for one group). If that group ends up different, the change is the likely cause.</p>
        <p>When you hear "X causes Y," ask three questions:</p>
        <ul>
          <li>Could a lurking variable cause both?</li>
          <li>Could it be backwards (Y causes X)?</li>
          <li>Could it just be luck?</li>
        </ul>`,
      quiz: [
        { q: 'What does correlation mean?', c: ['Two things tend to change together', 'One thing makes the other happen', 'Two things are exactly equal', 'Two things never change'], why: 'Correlation is just a pattern: when one changes, the other tends to change too.' },
        { q: 'What does causation mean?', c: ['One thing actually makes the other happen', 'Two things happen at the same time by luck', 'Two things have r close to 0', 'Two things are on the same graph'], why: 'Causation means changing one thing really changes the other.' },
        { q: 'Ice-cream sales and sunburns rise together. What is the best explanation?', c: ['Hot, sunny weather causes both', 'Ice cream causes sunburns', 'Sunburns make people want ice cream', 'It is pure luck'], why: 'Sunny weather is a lurking variable. It drives both ice-cream sales and sunburns.' },
        { q: 'What is a lurking variable?', c: ['A hidden third thing that affects both variables', 'The variable on the x-axis', 'A dot far from the line', 'A mistake on a graph'], why: 'It hides in the background and can make two things look connected.' },
        { q: 'Towns with more fire stations have more fires. What is the most likely lurking variable?', c: ['The size of the town (population)', 'The color of the fire trucks', 'The day of the week', 'The speed limit on the highway'], why: 'Bigger towns have more buildings, so they have more fires and more fire stations.' },
        { q: 'Which kind of study can best show that one thing CAUSES another?', c: ['A randomized experiment', 'A survey of people\'s opinions', 'A scatter plot with r = 0.9', 'Looking at old records'], why: 'Random groups start out alike, so only the one change can explain a difference.' },
        { q: 'A study finds students who eat breakfast get better grades. What can you say from this alone?', c: ['They are correlated, but breakfast may not be the cause', 'Breakfast definitely causes better grades', 'Better grades cause students to eat breakfast', 'There is no connection at all'], why: 'Other things, like sleep or home routines, could explain both. Only an experiment can test the cause.' },
        { q: 'Two things have r = 0.95. What does that tell you?', c: ['They have a strong positive correlation, but it does not prove cause', 'One definitely causes the other', 'They have no relationship', 'They have a strong negative correlation'], why: 'A strong r shows a strong pattern. It cannot tell you why the pattern happens.' },
        { q: 'For kids ages 5 to 12, bigger shoe size goes with better reading. What is the lurking variable?', c: ['Age', 'Shoe brand', 'Favorite color', 'Hair length'], why: 'Older kids have bigger feet AND read better. Age drives both.' },
        { q: 'Which is most clearly CAUSATION?', c: ['Flipping a light switch makes the light turn on', 'Cities with more libraries have more crime', 'Students with more pencils get higher grades', 'Countries with more TVs have longer lives'], why: 'Flip the switch and the light changes every time. The others are patterns explained by other factors.' },
        { q: 'On days when more umbrellas are sold, more flights are delayed. What is the most likely lurking variable?', c: ['Stormy weather', 'The color of the umbrellas', 'The price of plane tickets', 'The number of pilots'], why: 'Storms make people buy umbrellas, and storms also delay flights.' },
        { q: 'More screen time goes with lower grades. Someone says, "Screens cause bad grades." What is the best reply?', c: ['Maybe, but correlation alone can\'t prove it; an experiment could test it', 'Yes, a correlation always proves cause', 'No, screen time and grades can never be related', 'Yes, because the correlation is negative'], why: 'The pattern is real, but other factors could explain it. Only a fair experiment shows cause.' },
        { q: 'In summer, more people go swimming and more people buy fans. What is the most likely lurking variable?', c: ['Hot weather', 'Swimming makes people buy fans', 'Fans make people go swimming', 'The price of fans'], why: 'Heat makes people swim and makes them want fans. It drives both.' },
        { q: 'On rainy days, more people carry umbrellas. Someone says umbrellas cause rain. What is the problem?', c: ['It is backwards — rain causes people to carry umbrellas', 'Nothing — umbrellas cause rain', 'There is no correlation at all', 'It is pure luck'], why: 'The cause runs the other way. Rain comes first, then people grab umbrellas.' },
        { q: 'A coach wants to test whether a new warm-up CAUSES fewer injuries. What is the best plan?', c: ['Randomly split players into two groups; only one group does the new warm-up', 'Let players choose which warm-up they want', 'Ask players whether they think it helps', 'Have every player do the new warm-up'], why: 'Random groups start out alike, so a difference in injuries points to the warm-up.' },
        { q: 'Why do scientists put people into groups by chance, like a coin flip?', c: ['So the groups start out alike and only one thing differs', 'So the experiment finishes faster', 'So the results come out positive', 'So nobody can see the data'], why: 'If the groups match at the start, the one change is the likely cause of any difference.' },
        { q: 'A report says students who sit in the front row get higher grades. Sam says, "Sitting in front causes good grades." What was his mistake?', c: ['He treated a correlation as a cause — hard-working students may choose the front', 'Nothing — the pattern proves it', 'He should have said back-row seats cause bad grades', 'Seats and grades can never be related'], why: 'A pattern alone is not proof. Students who care more might pick front seats AND study more.' },
        { q: 'Which pair is most clearly cause and effect (one thing really makes the other happen)?', c: ['Pressing the brake pedal slows the car down', 'Kids with bigger shoe sizes read better', 'Towns with more ice-cream shops have more drownings', 'People who own more pens get better grades'], why: 'Press the brake and the car slows every time. The others are patterns with other explanations.' },
        { q: 'At bigger fires, more fire trucks show up and there is more damage. What is the best explanation?', c: ['Bigger fires cause more damage AND bring more trucks', 'Fire trucks cause the damage', 'More damage makes fewer trucks come', 'It is pure luck'], why: 'The size of the fire is the lurking variable. It drives both numbers.' },
        { q: 'When you hear "X causes Y," which question is NOT one of the three to ask?', c: ['Is the correlation positive?', 'Could a lurking variable cause both?', 'Could it be backwards?', 'Could it just be luck?'], why: 'Positive or negative does not matter. A strong pattern either way still might not be a cause.' },
        { q: 'A study finds r = −0.85 for hours of exercise and resting heart rate. What can you say from r alone?', c: ['There is a strong negative pattern, but r alone doesn\'t prove a cause', 'Exercise definitely lowers heart rate', 'The pattern is weak', 'Heart rate causes people to exercise'], why: 'r shows a strong pattern. Proving a cause needs a randomized experiment.' },
        { q: 'For 5 games, a team won every time one player wore red socks. What is the best explanation?', c: ['Probably luck — socks don\'t change the score', 'Red socks cause wins', 'Winning causes red socks', 'Socks are a lurking variable'], why: 'A short streak can happen by chance. Socks have no way to change the score.' },
        { q: 'Schools with bigger libraries tend to have higher test scores. What is the most likely lurking variable?', c: ['How much money the school has to spend', 'The color of the library walls', 'The day of the test', 'The number of windows in the school'], why: 'Schools with more money can buy more books AND pay for other things that help scores.' },
        { q: 'On busy airport days, more water bottles are sold AND security lines are longer. Do water bottles cause long lines?', c: ['No — more passengers cause both', 'Yes — water bottles slow down security', 'Yes — the correlation is positive', 'No — the two are not correlated'], why: 'More travelers buy more water and fill the lines. The crowd is the lurking variable.' },
      ],
      realLife: {
        text: `<p>Headlines mix up correlation and causation all the time:</p>
          <ul><li><b>"Kids who play sports get better grades."</b> Maybe sports help, or maybe kids with more family support do both.</li>
          <li><b>"Teens with more screen time sleep less."</b> Screens might keep you up, or kids who can't sleep might grab their phones. It could be backwards.</li>
          <li><b>"Airports with more shops have more delays."</b> Big, busy airports have both. Shops don't delay planes.</li></ul>
          <p>When you see "X linked to Y," ask: is there a lurking variable, or could it be backwards?</p>`,
        prompt: 'Make up or find a claim that says one thing causes another. Is it really causation, or could a lurking variable explain it? Explain your thinking.',
      },
    },
    {
      key: 'a06-06',
      title: 'Two-way tables',
      videos: [
        { id: 'MarqSlyz-lU', title: 'Interpreting two-way tables' },
        { id: '_ETPMszULXc', title: 'Two-way relative frequency tables' },
        { id: 'CAXQvTKP8sg', title: 'Marginal distribution and conditional distribution' },
      ],
      learn: `
        <p>A <b>two-way table</b> (a table that counts things by two categories at once) shows how two questions connect. Here are 50 students sorted by grade and by whether they play a sport:</p>
        <ul>
          <li>9th grade: 18 play a sport, 12 don't (row total 30)</li>
          <li>10th grade: 14 play a sport, 6 don't (row total 20)</li>
          <li>Column totals: 32 play, 18 don't, 50 students in all</li>
        </ul>
        <p>Words to know:</p>
        <ul>
          <li><b>Joint frequency</b> (a count inside the table that matches two categories at once): 18 students are 9th graders AND play a sport.</li>
          <li><b>Marginal frequency</b> (a total in the margin, at the end of a row or column): 32 students play a sport in all.</li>
          <li><b>Relative frequency</b> (a count divided by a total, often written as a percent): 32 ÷ 50 = 64% of all students play.</li>
        </ul>
        <p><b>Worked example:</b> Which grade is more likely to play a sport?</p>
        <ol>
          <li>9th grade: 18 ÷ 30 = 0.60 = <b>60%</b>.</li>
          <li>10th grade: 14 ÷ 20 = 0.70 = <b>70%</b>.</li>
          <li>More 9th graders play (18 vs. 14), but a bigger <b>share</b> of 10th graders play.</li>
        </ol>
        <p>When groups are different sizes, compare percents, not raw counts.</p>`,
      quiz: [
        { q: 'Survey: 9th grade has 18 who play a sport and 12 who don\'t. 10th grade has 14 who play and 6 who don\'t. How many students are there in all?', c: ['50', '32', '30', '20'], why: 'Add all four inside numbers: 18 + 12 + 14 + 6 = 50.' },
        { q: 'Same survey (9th: 18 play, 12 don\'t; 10th: 14 play, 6 don\'t). How many students play a sport in total?', c: ['32', '18', '14', '50'], why: 'Add the "play" column: 18 + 14 = 32. This total is a marginal frequency.' },
        { q: 'In that survey, which number is a joint frequency?', c: ['18 (9th graders who play a sport)', '30 (all 9th graders)', '32 (all students who play)', '50 (all students)'], why: 'A joint frequency sits inside the table and matches two categories at once.' },
        { q: 'What is a marginal frequency?', c: ['A total at the end of a row or column', 'A count inside the table', 'A percent of one row', 'The biggest number in the table'], why: 'Marginal means "in the margin." It is a row total or a column total.' },
        { q: 'Survey: 32 of 50 students play a sport. What is the relative frequency of playing a sport?', c: ['64%', '32%', '50%', '36%'], why: '32 ÷ 50 = 0.64 = 64%.' },
        { q: 'Survey: 18 of the 30 ninth graders play a sport (50 students in all). What percent of 9th graders play?', c: ['60%', '36%', '18%', 'about 56%'], why: '18 ÷ 30 = 0.60 = 60%. Divide by the 9th-grade total, not by all 50 students.' },
        { q: 'Survey: 14 of the 20 tenth graders play a sport (50 students in all). What percent of 10th graders play?', c: ['70%', '28%', '14%', 'about 44%'], why: '14 ÷ 20 = 0.70 = 70%. Divide by the 10th-grade total.' },
        { q: '60% of 9th graders play a sport (18 of 30). 70% of 10th graders play (14 of 20). Which grade is MORE likely to play?', c: ['10th grade, because 70% is bigger than 60%', '9th grade, because 18 is bigger than 14', 'Both grades are the same', '9th grade, because it has more students'], why: 'The groups are different sizes, so compare percents, not counts.' },
        { q: 'Flights: morning has 45 on time and 5 delayed. Evening has 30 on time and 20 delayed. What percent of ALL flights were delayed?', c: ['25%', '20%', '5%', '40%'], why: '5 + 20 = 25 delayed out of 100 flights in all, which is 25%.' },
        { q: 'Same flights (morning: 45 on time, 5 delayed; evening: 30 on time, 20 delayed). What percent of EVENING flights were delayed?', c: ['40%', '20%', '80%', '25%'], why: '20 delayed ÷ 50 evening flights = 0.40 = 40%.' },
        { q: 'Same flights (morning: 5 delayed; evening: 20 delayed). Of the 25 delayed flights, what percent were in the evening?', c: ['80%', '40%', '20%', '50%'], why: '20 evening delays ÷ 25 total delays = 0.80 = 80%.' },
        { q: 'A two-way table shows 35 tenth graders in all. 21 of them walk to school. How many 10th graders do NOT walk?', c: ['14', '56', '21', '35'], why: 'Row total minus the count you know: 35 − 21 = 14.' },
        { q: 'Survey — 9th grade: 15 walk, 35 ride the bus. 10th grade: 12 walk, 18 ride the bus. How many students are there in all?', c: ['80', '50', '27', '53'], why: 'Add all four inside numbers: 15 + 35 + 12 + 18 = 80.' },
        { q: 'Same survey (9th: 15 walk, 35 bus; 10th: 12 walk, 18 bus). How many students ride the bus in all?', c: ['53', '35', '18', '80'], why: 'Add the bus column: 35 + 18 = 53. This total is a marginal frequency.' },
        { q: 'Survey — 10th grade: 12 walk and 18 ride the bus (80 students in all). What percent of 10th graders walk?', c: ['40%', '15%', 'about 44%', '12%'], why: 'There are 12 + 18 = 30 tenth graders. 12 ÷ 30 = 0.40 = 40%.' },
        { q: 'Survey — 9th grade: 15 walk, 35 ride the bus. 10th grade: 12 walk, 18 ride the bus. Of all the walkers, what percent are 9th graders?', c: ['about 56%', '30%', '15%', 'about 19%'], why: 'There are 15 + 12 = 27 walkers. 15 ÷ 27 ≈ 0.56, or about 56%.' },
        { q: 'Survey — 9th grade: 15 of 50 walk. 10th grade: 12 of 30 walk. Which grade is MORE likely to walk?', c: ['10th grade — 40% walk, compared with 30%', '9th grade — 15 walkers is more than 12', 'Both are the same — each grade has walkers', '9th grade — it has more students'], why: 'Compare percents: 15 ÷ 50 = 30% and 12 ÷ 30 = 40%. The groups are different sizes.' },
        { q: 'Survey — 9th grade: 15 walk, 35 ride the bus. 10th grade: 12 walk, 18 ride the bus. What percent of ALL students are 10th graders who ride the bus?', c: ['22.5%', '60%', 'about 34%', '18%'], why: '18 ÷ 80 = 0.225 = 22.5%. Divide by all 80 students.' },
        { q: 'A table of 60 students shows 25 like soccer. 15 of the soccer fans are in 9th grade, and the rest are in 10th grade. How many soccer fans are in 10th grade?', c: ['10', '35', '45', '40'], why: 'Soccer fans total 25. Take away the 15 ninth graders: 25 − 15 = 10.' },
        { q: 'Survey — 9th grade: 15 walk, 35 ride the bus. 10th grade: 12 walk, 18 ride the bus. Which number is a marginal frequency?', c: ['27 (all students who walk)', '15 (9th graders who walk)', '12 (10th graders who walk)', '18 (10th graders who ride the bus)'], why: 'A marginal frequency is a total in the margin. 27 is the total of the walk column.' },
        { q: 'Survey — 10th grade: 12 walk, 18 ride the bus (80 students in all). Sara says 15% of 10th graders walk, because 12 ÷ 80 = 0.15. What was her mistake?', c: ['She divided by all 80 students instead of the 30 tenth graders', 'Nothing — 15% is right', 'She should divide 80 by 12', 'She should divide by 18, the bus riders'], why: '"Of 10th graders" means divide by the 10th-grade total: 12 ÷ 30 = 40%.' },
        { q: 'A team won 28 of 40 home games and 15 of 30 away games. What percent of away games did it win?', c: ['50%', 'about 35%', 'about 21%', '15%'], why: '15 ÷ 30 = 0.50 = 50%. Divide by the away games only.' },
        { q: 'A team won 28 of 40 home games and 15 of 30 away games. Where is it more likely to win?', c: ['At home — 70% of home games vs. 50% of away games', 'Away — 50% of away games vs. 40% of home games', 'Away — it played fewer away games', 'Equally likely — it won games in both places'], why: 'Home: 28 ÷ 40 = 70%. Away: 15 ÷ 30 = 50%. Compare percents.' },
        { q: 'Which is NOT true about a two-way table?', c: ['The row totals add up to more than the grand total', 'The row totals add up to the grand total', 'The column totals add up to the grand total', 'Each count inside matches two categories at once'], why: 'Everyone is in exactly one row, so the row totals add up to exactly the grand total.' },
      ],
      realLife: {
        text: `<p>Two-way tables help you compare groups fairly:</p>
          <ul><li><b>Airport:</b> a manager counts flights by time of day and by on time vs. delayed. If 40% of evening flights are late but only 10% of morning flights are, he adds more crew at night.</li>
          <li><b>Sports:</b> a coach counts wins and losses at home vs. away to see if the team really plays better at home.</li>
          <li><b>School:</b> a survey counts students by grade and by whether they do homework before or after screen time.</li></ul>
          <p>Percents keep the comparison fair when the groups are different sizes.</p>`,
        prompt: 'Think of two yes-or-no questions you could ask your classmates. Describe the two-way table you would make and one thing you could compare with it.',
      },
      practice: 'twoWay',
    },
  ],
};
