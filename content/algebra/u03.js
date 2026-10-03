// Unit 3 — Working with units. NJ: N.Q.A.1, N.Q.A.2, N.Q.A.3
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Khan Academy US channel).
// Every number in the quizzes was recomputed with node.
export default {
  id: 'a03', n: 3, title: 'Working with units', nj: ['N.Q.A.1', 'N.Q.A.2', 'N.Q.A.3'],
  lessons: [
    {
      key: 'a03-01',
      title: 'Rate conversion',
      videos: [
        { id: 'hIAdCTNi1S8', title: 'Treating units algebraically and dimensional analysis' },
        { id: 'IuvsQjW1qa4', title: 'Formulas and units: Comparing rates' },
      ],
      learn: `
        <p>A <b>rate</b> (a comparison of two amounts with different units, like miles per hour) tells you how much of one thing happens for each one of another thing. Sometimes you need the same rate in different <b>units</b> (the sizes you measure with, like feet or seconds).</p>
        <p>The tool for this is a <b>conversion factor</b> (a fraction whose top and bottom are the same amount, like 5,280 feet / 1 mile). Since the top and bottom are equal, it equals 1. Multiplying by it changes the units but not the real speed.</p>
        <p><b>Worked example:</b> A car goes 60 miles per hour. How many feet per second is that?</p>
        <ol>
          <li>Write the rate as a fraction: 60 miles / 1 hour.</li>
          <li>Miles to feet: multiply by 5,280 feet / 1 mile. Miles is on the top and the bottom, so it <b>cancels</b> (crosses out).</li>
          <li>Hours to seconds: multiply by 1 hour / 3,600 seconds. Hours cancels too.</li>
          <li>Do the math: 60 × 5,280 ÷ 3,600 = <b>88 feet per second</b>.</li>
        </ol>
        <p><b>Trick:</b> put the unit you want to get rid of on the opposite side of the fraction (top vs. bottom) so it cancels.</p>`,
      quiz: [
        { q: 'A car goes 60 miles per hour. How many feet per second is that? (1 mile = 5,280 feet, 1 hour = 3,600 seconds)', c: ['88 ft/s', '316,800 ft/s', '5,280 ft/s', '3,600 ft/s'], why: '60 × 5,280 ÷ 3,600 = 88. You must change miles to feet AND hours to seconds.' },
        { q: 'You have a rate in miles per hour. Which conversion factor turns the miles into feet?', c: ['5,280 ft / 1 mi', '1 mi / 5,280 ft', '12 in / 1 ft', '3,600 s / 1 hr'], why: 'Miles is on top of the rate, so miles goes on the bottom of the factor to cancel.' },
        { q: 'A bike goes 30 miles per hour. How many feet per second is that?', c: ['44 ft/s', '158,400 ft/s', '0.5 ft/s', '2,640 ft/s'], why: '30 × 5,280 ÷ 3,600 = 44 feet per second.' },
        { q: 'A small plane flies at 120 knots (nautical miles per hour). One knot is about 1.15 miles per hour. About how many miles per hour is that?', c: ['about 138 mph', 'about 104 mph', 'about 121 mph', 'about 14 mph'], why: '120 × 1.15 = 138. A knot is bigger than 1 mph, so the mph number should be bigger.' },
        { q: 'A plane climbs 1,800 feet per minute. How many feet per second is that?', c: ['30 ft/s', '108,000 ft/s', '1,800 ft/s', '3 ft/s'], why: 'There are 60 seconds in a minute: 1,800 ÷ 60 = 30.' },
        { q: 'A phone downloads 5 MB (megabytes, a size of data) per second. How many MB per minute is that?', c: ['300 MB per minute', '12 MB per minute', '65 MB per minute', '5 MB per minute'], why: 'A minute has 60 seconds: 5 × 60 = 300 MB.' },
        { q: 'A hose pours 2 gallons per minute. How many quarts per minute is that? (1 gallon = 4 quarts)', c: ['8 quarts per minute', '0.5 quarts per minute', '6 quarts per minute', '2 quarts per minute'], why: '2 × 4 = 8. Quarts are smaller than gallons, so you get a bigger number.' },
        { q: 'A runner goes 6 miles per hour. How many minutes does each mile take?', c: ['10 minutes per mile', '6 minutes per mile', '360 minutes per mile', '0.1 minutes per mile'], why: 'One hour is 60 minutes for 6 miles: 60 ÷ 6 = 10 minutes per mile.' },
        { q: 'A ball rolls 1 meter per second. How many kilometers per hour is that? (1 km = 1,000 m)', c: ['3.6 km/h', '3,600 km/h', '0.36 km/h', '60 km/h'], why: '1 m/s × (3,600 s / 1 h) × (1 km / 1,000 m) = 3.6 km/h. Seconds and meters cancel.' },
        { q: 'To change 50 feet per second into feet per minute, multiply by…', c: ['60 s / 1 min', '1 min / 60 s', '5,280 ft / 1 mi', '3,600 s / 1 hr'], why: 'Seconds is on the bottom of ft/s, so seconds goes on top to cancel. 50 × 60 = 3,000 ft/min.' },
        { q: 'Why can you multiply by a conversion factor without changing the real amount?', c: ['It equals 1, because the top and bottom are the same amount', 'It is always a whole number', 'It always makes the number bigger', 'Units do not matter in math'], why: '5,280 feet and 1 mile are the same length, so the fraction equals 1.' },
        { q: 'A jet flies 500 miles per hour. About how many miles per minute is that?', c: ['about 8.3 miles per minute', '30,000 miles per minute', 'about 0.12 miles per minute', '500 miles per minute'], why: 'An hour has 60 minutes: 500 ÷ 60 ≈ 8.3 miles each minute.' },
      ],
      realLife: {
        text: `<p>The same speed can be written in different units, and picking the right one helps you understand it:</p>
          <ul><li><b>Airport:</b> pilots measure speed in <b>knots</b> (nautical miles per hour; a nautical mile is about 1.15 regular miles). A jet landing at 140 knots is going about 161 miles per hour.</li>
          <li><b>Ramp</b> (the area where planes park and load): a 15 mph speed limit means a vehicle moves 22 feet every second.</li>
          <li><b>Sports:</b> a 90 mph fastball travels 132 feet per second, so the batter has less than half a second to swing.</li>
          <li><b>Phone:</b> 25 MB per second is 1,500 MB every minute.</li></ul>`,
        prompt: 'Pick something that moves in your life (a bike, a car, a ball, or a download). Give its speed in one unit, then explain how you would change it into a different unit.',
      },
    },
    {
      key: 'a03-02',
      title: 'Appropriate units',
      videos: [
        { id: 'd5lcGCbV5cM', title: 'Thinking about reasonable units to describe a rate' },
        { id: 'UEe81kJtY8A', title: 'Reporting measurements' },
      ],
      learn: `
        <p>A <b>unit</b> (the size you measure with, like inches or miles) should fit the thing you are measuring. Pick a unit that gives a number that is easy to picture.</p>
        <ul>
          <li>Your height: feet and inches, not miles.</li>
          <li>A road trip: miles, not inches.</li>
          <li>A phone photo: about 3 MB (megabytes), not 0.003 GB (gigabytes, which are 1,000 times bigger).</li>
        </ul>
        <p><b>Precision</b> (how exact a number is, like "to the nearest inch" or "to the nearest tenth") matters too. Your answer should not pretend to be more exact than your measurements. If a scale shows the nearest pound, don't report your weight to the thousandth of a pound.</p>
        <p><b>Rounding</b> (cutting a number down to fewer digits while keeping it close) keeps answers sensible.</p>
        <p><b>Worked example:</b> A drive of 157 miles takes 2.5 hours. Speed = 157 ÷ 2.5 = 62.8 miles per hour. Trip times and distances are rough, so "about 63 miles per hour" is a good answer. Writing 62.80000 mph would pretend you knew more than you did.</p>
        <p><b>Money:</b> round to the nearest cent. $10 split 3 ways is $3.333…, so each person pays about $3.33.</p>`,
      quiz: [
        { q: 'Which unit makes the most sense for how high a plane is flying?', c: ['feet', 'inches', 'knots', 'gallons'], why: 'Pilots give altitude in feet, like 35,000 feet. Knots measure speed, not height.' },
        { q: 'Which unit makes the most sense for the distance from Newark to Orlando?', c: ['miles', 'inches', 'feet', 'centimeters'], why: 'Long trips use big units. In inches the number would be huge and hard to picture.' },
        { q: 'A car went 62.847 miles per hour. Round to the nearest whole number.', c: ['63', '62', '62.8', '60'], why: 'The tenths digit is 8, which is 5 or more, so round 62 up to 63.' },
        { q: 'Three friends split a $25 bill evenly. How much does each pay, rounded to the nearest cent?', c: ['$8.33', '$8.3333', '$8.30', '$83.33'], why: '25 ÷ 3 = 8.333…. Money rounds to two decimal places: $8.33.' },
        { q: 'A bathroom scale shows weight to the nearest pound. Which reading makes the most sense to report?', c: ['152 pounds', '152.0384 pounds', '0.076 tons', '68,946 grams'], why: 'The scale shows whole pounds, so report whole pounds. Extra decimals pretend to be exact, and tons or grams are awkward here.' },
        { q: 'Which unit makes the most sense for how fast a snail crawls?', c: ['inches per minute', 'miles per hour', 'miles per second', 'kilometers per hour'], why: 'A snail is very slow. Small units give a number you can picture, like 2 inches per minute.' },
        { q: 'A flight takes 3.46 hours. Round to the nearest tenth of an hour.', c: ['3.5 hours', '3.4 hours', '3.46 hours', '4 hours'], why: 'Look at the hundredths digit, 6. It is 5 or more, so 3.4 rounds up to 3.5.' },
        { q: 'A fuel truck puts 5,000 ___ of fuel into a passenger jet. Which unit makes the most sense?', c: ['gallons', 'cups', 'fluid ounces', 'teaspoons'], why: '5,000 cups is only about 312 gallons, far too little for a jet. Gallons fits.' },
        { q: 'Your calculator says a car went 47.619047 mph. What is a sensible answer to report?', c: ['about 48 mph', '47.619047 mph', 'about 50,000 mph', 'about 4.8 mph'], why: 'Real speeds are not measured that exactly. Round to a whole number.' },
        { q: 'A phone is about 6 inches long. Why is "0.0000947 miles" a poor way to say this?', c: ['The unit is too big, so the number is hard to picture', 'It is the wrong length', 'Miles can only measure roads', 'Decimals are not allowed in measurements'], why: 'It is the same length, but a tiny decimal of miles is hard to understand. Inches fit better.' },
        { q: 'Which unit makes the most sense for the time of a 100-meter race?', c: ['seconds', 'hours', 'days', 'minutes'], why: 'Fast sprinters finish in about 10 to 15 seconds. Minutes would give a small decimal.' },
        { q: 'You want to compare how far two cars can go on the same amount of gas. Which quantity should you use?', c: ['miles per gallon', 'miles per hour', 'gallons per day', 'total miles driven'], why: 'Miles per gallon tells how far each car goes on one gallon, which is what you are comparing.' },
      ],
      realLife: {
        text: `<p>Picking good units and rounding sensibly is part of everyday life:</p>
          <ul><li><b>Airport:</b> a runway might be 10,000 feet long. Saying 120,000 inches would just confuse people.</li>
          <li><b>Cooking:</b> salt is measured in teaspoons and rice in cups. A recipe that said "0.02 cups of salt" would be strange; that is about 1 teaspoon.</li>
          <li><b>Phone:</b> a data plan is given in GB, but one photo is given in MB.</li>
          <li><b>Money:</b> prices always round to the nearest cent.</li></ul>`,
        prompt: 'Think of something you measured or counted this week. What unit did you use, and why is it a better choice than a much bigger or much smaller unit?',
      },
    },
    {
      key: 'a03-03',
      title: 'Word problems with multiple units',
      videos: [
        { id: '_UAQJw_q4p4', title: 'Using units to solve problems: Road trip' },
        { id: 'ocOXYiborsw', title: 'Using units to solve problems: Toy factory' },
        { id: 'AGFO-ROxH_I', title: 'Unit measurement word problem: running laps' },
      ],
      learn: `
        <p>Some word problems throw lots of numbers at you. The <b>units</b> (labels like miles, gallons, or dollars) are your map.</p>
        <ol>
          <li>Write down each fact with its unit, like 30 miles per gallon.</li>
          <li>Ask: what unit should the answer be in? Dollars? Minutes?</li>
          <li>Skip facts you don't need. Some problems include extra information on purpose.</li>
          <li>Multiply the facts as fractions so unwanted units <b>cancel</b> (cross out because they are on the top and the bottom). Only the answer's unit should be left.</li>
        </ol>
        <p><b>Worked example:</b> A family drives 240 miles. The car gets 30 <b>miles per gallon</b> (it goes 30 miles on each gallon of gas). Gas costs $3.50 per gallon. The trip takes 4 hours. How much does the gas cost?</p>
        <p>The answer should be in dollars. The 4 hours is extra information, so skip it.</p>
        <p>240 miles × (1 gallon / 30 miles) × ($3.50 / 1 gallon)</p>
        <p>Miles cancel and gallons cancel, so dollars are left. 240 ÷ 30 = 8 gallons, and 8 × $3.50 = <b>$28</b>.</p>`,
      quiz: [
        { q: 'A trip is 150 miles. The car gets 25 miles per gallon. Gas is $3.20 per gallon. What does the gas cost?', c: ['$19.20', '$6.00', '$480.00', '$12,000.00'], why: '150 ÷ 25 = 6 gallons. 6 × $3.20 = $19.20.' },
        { q: 'A video app uses 2 GB (gigabytes) of data per hour. You watch for 90 minutes. How much data do you use?', c: ['3 GB', '180 GB', '45 GB', 'about 1.3 GB'], why: '90 minutes = 1.5 hours. 2 × 1.5 = 3 GB.' },
        { q: 'A jet burns 800 gallons of fuel per hour on a 2.5-hour flight. Jet fuel weighs about 6.7 pounds per gallon. How many pounds of fuel does it burn?', c: ['13,400 pounds', '2,000 pounds', 'about 299 pounds', '5,360 pounds'], why: '800 × 2.5 = 2,000 gallons. 2,000 × 6.7 = 13,400 pounds.' },
        { q: 'A recipe uses 3/4 cup of rice per person. How many cups do you need for 8 people?', c: ['6 cups', 'about 10.7 cups', '8 3/4 cups', '24 cups'], why: '3/4 × 8 = 6 cups. Multiply cups per person by people.' },
        { q: 'You run 4 laps of a 400-meter track every day for 5 days. How many kilometers is that? (1 km = 1,000 m)', c: ['8 km', '8,000 km', '1.6 km', '80 km'], why: '4 × 400 × 5 = 8,000 meters. 8,000 ÷ 1,000 = 8 km.' },
        { q: 'A bus goes 45 miles per hour for 2 hours. It has 40 seats and costs $2 to ride. Which facts do you need to find how far it goes?', c: ['45 miles per hour and 2 hours', '40 seats and $2', '45 miles per hour and 40 seats', '2 hours and $2'], why: 'Distance needs speed and time: 45 × 2 = 90 miles. Seats and price are extra.' },
        { q: 'Gas costs $3 per gallon, and a car goes 30 miles per gallon. What does gas cost for each mile?', c: ['$0.10 per mile', '$90 per mile', '$10 per mile', '$27 per mile'], why: '($3 / 1 gallon) × (1 gallon / 30 miles) = $0.10 per mile. Gallons cancel.' },
        { q: 'A bakery makes 120 cookies per hour for 6 hours. Each cookie sells for $0.50. How much money is that?', c: ['$360', '$720', '$1,440', '$60'], why: '120 × 6 = 720 cookies. 720 × $0.50 = $360.' },
        { q: 'A baggage belt loads 15 bags per minute. A flight has 180 bags. How many minutes does loading take?', c: ['12 minutes', '2,700 minutes', '165 minutes', 'about 0.08 minutes'], why: '180 bags × (1 minute / 15 bags) = 12 minutes. Bags cancel.' },
        { q: 'You walk 3 miles per hour. How many minutes does it take to walk 1.5 miles?', c: ['30 minutes', '4.5 minutes', '2 minutes', '0.5 minutes'], why: '1.5 ÷ 3 = 0.5 hours. Half an hour is 30 minutes.' },
        { q: 'Your plan has 10 GB of data. Music uses 150 MB per hour (1 GB = 1,000 MB). About how many hours of music can you stream?', c: ['about 67 hours', 'about 0.07 hours', '1,500 hours', '15 hours'], why: '10 GB = 10,000 MB. 10,000 ÷ 150 ≈ 67 hours.' },
        { q: 'A plane flies 450 knots (nautical miles per hour) for 2 hours. One nautical mile is about 1.15 miles. About how many regular miles does it fly?', c: ['about 1,035 miles', '900 miles', 'about 783 miles', 'about 518 miles'], why: '450 × 2 = 900 nautical miles. 900 × 1.15 ≈ 1,035 miles.' },
      ],
      realLife: {
        text: `<p>Real problems almost always mix units:</p>
          <ul><li><b>Airport:</b> a crew knows how many gallons per hour a jet burns, how long the flight is, and how many pounds each gallon weighs. Chaining those gives the fuel weight, which matters for takeoff.</li>
          <li><b>Road trip:</b> miles, miles per gallon, and dollars per gallon give the gas cost.</li>
          <li><b>Cooking for a crowd:</b> cups per person × number of people = cups needed.</li>
          <li><b>Phone:</b> MB per minute of video × minutes watched tells you if you will run out of data.</li></ul>`,
        prompt: 'Make up a word problem from your own life that uses at least two different units (like minutes and dollars). Then explain how the units help you solve it.',
      },
    },
    {
      key: 'a03-04',
      title: 'Unit analysis',
      videos: [
        { id: '6fZSr6lDm9k', title: 'Unit conversions, part 1' },
        { id: 'nziP-8PeZqY', title: 'Formulas and units: Volume of a pool' },
      ],
      learn: `
        <p><b>Dimensional analysis</b> (solving a problem by keeping track of the units and canceling them) also checks your work. You treat units like numbers. If a unit is on the top and the bottom, it <b>cancels</b> (crosses out), just like 5/5 = 1.</p>
        <p><b>Worked example:</b> How many seconds are in one day?</p>
        <ol>
          <li>Start with what you have: 1 day.</li>
          <li>× (24 hours / 1 day): days cancel. Now you have hours.</li>
          <li>× (60 minutes / 1 hour): hours cancel. Now you have minutes.</li>
          <li>× (60 seconds / 1 minute): minutes cancel. Now you have seconds.</li>
          <li>Multiply: 1 × 24 × 60 × 60 = <b>86,400 seconds</b>.</li>
        </ol>
        <p><b>Units in formulas:</b> units follow the math. Area = length × width, so feet × feet = <b>square feet</b> (ft²). Speed = distance ÷ time, so miles ÷ hours = <b>miles per hour</b>.</p>
        <p><b>Self-check:</b> if the units left over are not the ones you want, the setup is wrong. Flip a conversion factor and try again.</p>`,
      quiz: [
        { q: 'Use 1 hour × (60 minutes / 1 hour) × (60 seconds / 1 minute). How many seconds are in an hour?', c: ['3,600', '120', '60', '360'], why: '1 × 60 × 60 = 3,600. Hours and minutes both cancel, leaving seconds.' },
        { q: 'In (12 inches / 1 foot) × (3 feet / 1 yard), which unit cancels?', c: ['feet', 'inches', 'yards', 'no unit cancels'], why: 'Feet is on the bottom of the first fraction and the top of the second. Inches per yard are left.' },
        { q: 'What unit is left after (miles / hour) × hours?', c: ['miles', 'hours', 'miles per hour', 'square hours'], why: 'Hours on the bottom cancels hours on top. Only miles is left.' },
        { q: 'A room is 12 feet by 10 feet. Its area is 120 ___.', c: ['square feet (ft²)', 'feet', 'cubic feet (ft³)', 'feet per foot'], why: 'Area multiplies feet × feet, which gives square feet.' },
        { q: 'How many cups are in 3 gallons? (1 gallon = 4 quarts, 1 quart = 4 cups)', c: ['48 cups', '12 cups', '16 cups', '0.75 cups'], why: '3 gal × (4 qt / 1 gal) × (4 cups / 1 qt) = 48 cups.' },
        { q: 'Which setup correctly changes 600 seconds into minutes?', c: ['600 s × (1 min / 60 s)', '600 s × (60 s / 1 min)', '600 min × (60 s / 1 min)', '600 s × (1 hr / 60 min)'], why: 'Seconds must be on the bottom to cancel. 600 ÷ 60 = 10 minutes.' },
        { q: 'A box is 2 m by 3 m by 4 m. Its volume is 24 ___.', c: ['cubic meters (m³)', 'square meters (m²)', 'meters', 'meters per second'], why: 'Volume multiplies three lengths: m × m × m = cubic meters.' },
        { q: 'Speed = distance ÷ time. If distance is in kilometers and time is in hours, speed is in…', c: ['kilometers per hour', 'hours per kilometer', 'kilometer-hours', 'kilometers'], why: 'Dividing kilometers by hours gives kilometers per hour.' },
        { q: 'Using 1 GB = 1,000 MB, how many MB is 2.5 GB?', c: ['2,500 MB', '0.0025 MB', '250 MB', '1,002.5 MB'], why: '2.5 GB × (1,000 MB / 1 GB) = 2,500 MB. GB cancels.' },
        { q: 'A student writes 5 hours × (1 hour / 60 minutes) to find minutes. What went wrong?', c: ['The factor is upside down, so hours did not cancel', 'He should have added instead of multiplied', 'There are 100 minutes in an hour', 'Nothing, the setup is right'], why: 'Hours must be on the bottom: 5 hr × (60 min / 1 hr) = 300 minutes.' },
        { q: 'How many teaspoons are in 1/2 cup? (1 cup = 16 tablespoons, 1 tablespoon = 3 teaspoons)', c: ['24 teaspoons', '8 teaspoons', '48 teaspoons', '96 teaspoons'], why: '1/2 × 16 × 3 = 24 teaspoons. Cups and tablespoons both cancel.' },
        { q: 'A plane climbs 2,000 feet per minute for 5 minutes. What is (feet / minute) × minutes?', c: ['10,000 feet', '400 feet per minute', '10,000 feet per minute', '2,005 feet'], why: 'Minutes cancel, leaving feet: 2,000 × 5 = 10,000 feet.' },
      ],
      realLife: {
        text: `<p>Canceling units is how experts avoid big mistakes:</p>
          <ul><li><b>Aviation:</b> pounds of fuel per hour × hours of flight = total pounds of fuel. If the units came out wrong, the crew would know the math was set up wrong.</li>
          <li><b>Nurses:</b> they use dimensional analysis to measure medicine doses safely.</li>
          <li><b>Cooking:</b> switching a recipe from cups to tablespoons.</li>
          <li><b>Science class:</b> chemistry and physics use this method in almost every problem.</li></ul>
          <p>In 1999, NASA lost the Mars Climate Orbiter spacecraft because one team's software used US units while another team expected metric units.</p>`,
        prompt: 'Write a chain of conversion factors that changes one week into minutes. Show which units cancel at each step, and explain how you know your final unit is right.',
      },
    },
  ],
};
