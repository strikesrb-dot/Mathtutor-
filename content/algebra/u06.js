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
        { q: 'Same player: 8, 10, 12, 14, 41 points. Which number better shows a typical game?', c: ['The median, 12, because the 41 pulls the mean up', 'The mean, 17, because it uses every game', 'The max, 41, because it was his best game', 'The range, 33, because it shows the spread'], why: 'The outlier 41 drags the mean above most of his games. The median stays in the middle.' },
        { q: 'You remove one very high outlier from a data set. What usually happens?', c: ['The mean drops a lot; the median changes a little', 'The median drops a lot; the mean changes a little', 'Both stay exactly the same', 'Both go up'], why: 'The mean uses every value, so a huge one pulls it hard. The median only depends on the middle.' },
        { q: 'Q1 = 20 and Q3 = 28. Using the 1.5 × IQR rule, values above what number are outliers?', c: ['40', '36', '42', '32'], why: 'IQR = 28 − 20 = 8. Then 1.5 × 8 = 12. Add to Q3: 28 + 12 = 40.' },
        { q: 'Five friends played a game app for 20, 30, 30, 40, and 130 minutes. What is the mean?', c: ['50 minutes', '30 minutes', '250 minutes', '110 minutes'], why: '20 + 30 + 30 + 40 + 130 = 250, and 250 ÷ 5 = 50 minutes.' },
        { q: 'Team A\'s points have an IQR of 4. Team B\'s points have an IQR of 12. What does that mean?', c: ['Team B\'s scores are more spread out', 'Team B scores more points on average', 'Team A\'s scores are more spread out', 'Team A has more outliers'], why: 'A bigger IQR means the middle half of the scores is spread wider. It says nothing about the average.' },
        { q: 'Flight delays (minutes): 0, 5, 5, 10, 120. Which number best tells a traveler the typical delay?', c: ['The median, 5 minutes', 'The mean, 28 minutes', 'The maximum, 120 minutes', 'The minimum, 0 minutes'], why: 'The 120-minute outlier pushes the mean to 28. Most delays were 10 minutes or less, so use the median.' },
      ],
      realLife: {
        text: `<p>Reports pick "mean" or "median" for a reason.</p>
          <ul><li><b>Sports:</b> points per game is a mean. One 50-point night can make a player's average look higher than most of his games.</li>
          <li><b>Airport delays:</b> if 9 flights are 5 minutes late and 1 flight is 3 hours late, the mean delay is 22.5 minutes. The median, 5 minutes, tells the real story for most travelers.</li>
          <li><b>Home prices:</b> news reports use the median price, because one mansion would drag the mean way up.</li></ul>`,
        prompt: 'Think of a time one weird number (a huge score or a really bad day) could make an average misleading. Would the mean or the median tell the truth better, and why?',
      },
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
      ],
      realLife: {
        text: `<p>Lines of best fit turn data into predictions:</p>
          <ul><li><b>Ice-cream shop:</b> the owner uses the forecast temperature to guess how much to stock. A big positive residual means more customers came than expected.</li>
          <li><b>Airport:</b> planners use the number of flights waiting to predict delays and warn passengers early.</li>
          <li><b>Sports:</b> analysts predict a player's points from his minutes played. A player with big positive residuals is beating expectations.</li></ul>
          <p>Residuals show where a prediction missed, so people can fix the plan.</p>`,
        prompt: 'Pick something you could predict with a line, like points from minutes played. What would a big positive residual mean in that situation?',
      },
    },
    {
      key: 'a06-05',
      title: 'Correlation vs. causation',
      videos: [
        { id: 'ROpbdO-gRUo', title: 'Correlation and causality' },
      ],
      learn: `
        <p><b>Correlation</b> (two things tend to change together) is not the same as <b>causation</b> (one thing actually makes the other happen). A strong r proves a pattern, not a cause.</p>
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
      ],
      realLife: {
        text: `<p>Two-way tables help you compare groups fairly:</p>
          <ul><li><b>Airport:</b> a manager counts flights by time of day and by on time vs. delayed. If 40% of evening flights are late but only 10% of morning flights are, he adds more crew at night.</li>
          <li><b>Sports:</b> a coach counts wins and losses at home vs. away to see if the team really plays better at home.</li>
          <li><b>School:</b> a survey counts students by grade and by whether they do homework before or after screen time.</li></ul>
          <p>Percents keep the comparison fair when the groups are different sizes.</p>`,
        prompt: 'Think of two yes-or-no questions you could ask your classmates. Describe the two-way table you would make and one thing you could compare with it.',
      },
    },
  ],
};
