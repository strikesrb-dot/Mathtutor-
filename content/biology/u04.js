// Unit 4 — Energy and matter in living things. NJ: HS-LS1-5, HS-LS1-6, HS-LS1-7, HS-LS2-3, HS-LS2-4, HS-LS2-5
// Lesson 1 is an original starter lesson (reused by key so progress carries over).
// New lessons 2–5: every video ID checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
import { pick } from '../legacy.js';

export default {
  id: 'b04', n: 4, title: 'Energy and matter in living things', nj: ['HS-LS1-5', 'HS-LS1-6', 'HS-LS1-7', 'HS-LS2-3', 'HS-LS2-4', 'HS-LS2-5'],
  lessons: [
    pick('bio-8'),
    {
      key: 'b04-02',
      title: 'Photosynthesis',
      videos: [
        { id: 'CMiPYHNNg28', title: 'Photosynthesis' },
        { id: '-rsYk4eCKnA', title: 'Photosynthesis: light reactions and the Calvin cycle' },
      ],
      learn: `
        <p><b>Photosynthesis</b> (how plants make their own food using light) happens in <b>chloroplasts</b> (small green parts inside plant cells). They are green because of <b>chlorophyll</b> (a green pigment, or coloring, that soaks up light).</p>
        <p><b>The recipe:</b></p>
        <ul><li><b>Inputs</b> (what goes in): carbon dioxide (CO₂) from the air, water (H₂O) from the roots, and light energy.</li>
        <li><b>Outputs</b> (what comes out): glucose (a sugar, C₆H₁₂O₆) and oxygen (O₂).</li></ul>
        <p>6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂</p>
        <p>It happens in <b>2 stages</b>:</p>
        <ol><li><b>Light reactions</b>, in the <b>thylakoids</b> (stacks of flat discs inside the chloroplast). Chlorophyll catches sunlight. Water is split, and its oxygen is released into the air. The light energy is saved in <b>ATP</b> and <b>NADPH</b> (small molecules that carry energy, like charged batteries).</li>
        <li><b>Calvin cycle</b>, in the <b>stroma</b> (the fluid around the thylakoids). It spends the ATP and NADPH to turn CO₂ into glucose. It doesn't use light directly.</li></ol>
        <p><b>Big idea:</b> photosynthesis turns <b>light energy into chemical energy</b> stored in sugar. The <b>carbon</b> in that sugar came from CO₂ in the air. Plants burn some glucose for energy and use the rest to build starch, cellulose (the tough stuff in cell walls), and, with nitrogen from the soil, proteins.</p>`,
      quiz: [
        { q: 'What are the inputs of photosynthesis?', c: ['Carbon dioxide, water, and light energy', 'Glucose and oxygen', 'Oxygen, water, and light energy', 'Carbon dioxide and glucose'], why: 'Plants take in CO₂ from the air and water from the roots, and use light as the energy source.' },
        { q: 'What are the outputs of photosynthesis?', c: ['Glucose and oxygen', 'Carbon dioxide and water', 'Oxygen and carbon dioxide', 'Water and light energy'], why: 'Plants make glucose (sugar) as food and release oxygen into the air.' },
        { q: 'In which part of a plant cell does photosynthesis happen?', c: ['Chloroplast', 'Mitochondrion', 'Nucleus', 'Cell wall'], why: 'Chloroplasts hold chlorophyll, which catches light. Mitochondria do cellular respiration instead.' },
        { q: 'What is the job of chlorophyll?', c: ['Soaking up light energy', 'Storing glucose for winter', 'Pulling water up from the roots', 'Breaking down sugar for energy'], why: 'Chlorophyll is the green pigment that catches light for the light reactions.' },
        { q: 'Where does the oxygen that plants give off come from?', c: ['Water molecules split in the light reactions', 'Carbon dioxide split in the Calvin cycle', 'Glucose breaking down', 'Minerals in the soil'], why: 'In the light reactions, water is split apart. Its oxygen is released into the air as O₂ gas.' },
        { q: 'What happens in the light reactions?', c: ['Light is captured, water is split, and ATP and NADPH are made', 'CO₂ is turned into glucose', 'Glucose is broken down using oxygen', 'Roots take in water from the soil'], why: 'The light reactions catch sunlight and save its energy in ATP and NADPH.' },
        { q: 'What happens in the Calvin cycle?', c: ['ATP and NADPH are used to turn CO₂ into glucose', 'Sunlight is captured by chlorophyll', 'Water is split and oxygen is released', 'Glucose is broken down to release energy'], why: 'The Calvin cycle is the sugar-building stage. It runs on energy carriers made in the light reactions.' },
        { q: 'Where in the chloroplast do the light reactions happen?', c: ['In the thylakoids (stacks of flat discs)', 'In the stroma (the fluid)', 'In the mitochondria', 'In the nucleus'], why: 'The thylakoids hold the chlorophyll. The Calvin cycle happens in the stroma around them.' },
        { q: 'Photosynthesis changes energy from…', c: ['light energy into chemical energy', 'chemical energy into light energy', 'heat energy into light energy', 'chemical energy into heat energy'], why: 'Light energy gets stored in the chemical bonds of glucose.' },
        { q: 'Wood is about half carbon. Where did most of a tree\'s carbon come from?', c: ['Carbon dioxide in the air', 'Minerals in the soil', 'Water from the roots', 'Sunlight'], why: 'In the Calvin cycle, plants pull carbon out of CO₂ in the air and build it into sugar.' },
        { q: 'Besides burning it for energy, what does a plant do with glucose?', c: ['Builds it into starch, cellulose, and other molecules', 'Breathes it out into the air as a gas', 'Turns it back into sunlight', 'Changes it into water for the roots'], why: 'Glucose is the starting material for the other biomolecules a plant needs to grow.' },
        { q: 'A plant is sealed in a jar with light and water but NO carbon dioxide. What happens?', c: ['It can\'t keep making glucose, because CO₂ is a needed input', 'It makes extra glucose, because it has plenty of light', 'It makes glucose out of oxygen instead', 'Nothing changes, because CO₂ is an output'], why: 'The Calvin cycle needs CO₂ to build sugar. No CO₂ means no glucose.' },
      ],
      realLife: {
        text: `<p>A full-grown oak tree can weigh as much as several cars, yet the soil around it barely goes down. Most of the wood came out of the <b>air</b>: the tree pulled in carbon dioxide through tiny holes in its leaves and built the carbon into sugar, then into wood.</p>
          <p>Every breath of oxygen you take was given off by plants and <b>algae</b> (simple plant-like living things, many too small to see). Scientists estimate ocean algae and other tiny ocean life make about half of Earth's oxygen.</p>
          <p>Houseplants lean toward a sunny window because light is their power source.</p>`,
        prompt: 'A huge tree weighs as much as several cars, but the soil around it barely shrinks. Where did most of the tree\'s mass come from? Explain using photosynthesis.',
      },
    },
    {
      key: 'b04-03',
      title: 'Cellular respiration',
      videos: [
        { id: 'eJ9Zjc-jdys', title: 'Cellular respiration' },
        { id: '2f7YwCtHcgk', title: 'Introduction to cellular respiration' },
      ],
      learn: `
        <p><b>Cellular respiration</b> (how cells release the energy stored in food) happens in plants AND animals. Most of it happens in the <b>mitochondria</b> (the cell's power plants).</p>
        <p>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)</p>
        <p>Glucose and oxygen go in. Carbon dioxide, water, and <b>ATP</b> (the molecule cells spend for energy) come out. The bonds in glucose and oxygen break, new bonds form in CO₂ and water, and the extra energy is saved in ATP. It's the photosynthesis equation, flipped.</p>
        <p><b>Aerobic respiration</b> (with oxygen) has 3 steps:</p>
        <ol><li><b>Glycolysis</b> (splitting glucose), in the <b>cytoplasm</b> (the jelly inside the cell). It breaks glucose in half and makes 2 ATP. No oxygen needed.</li>
        <li><b>Krebs cycle</b>, in the mitochondria. It breaks the pieces down more and releases the CO₂ you breathe out.</li>
        <li><b>Electron transport chain</b>, in the mitochondria. It uses oxygen and makes most of the ATP. Oxygen joins with hydrogen to form water.</li></ol>
        <p>In total, one glucose gives about 30 to 36 ATP.</p>
        <p>When there isn't enough oxygen, many cells switch to <b>fermentation</b> (an <b>anaerobic</b> process, meaning one without oxygen). Only glycolysis runs, so the cell gets just <b>2 ATP</b> per glucose.</p>
        <ul><li><b>Lactic acid fermentation</b>: your muscles do this in a hard sprint, when oxygen can't arrive fast enough. Lactic acid builds up, which is part of why your muscles burn. Bacteria do it to turn milk into <b>yogurt</b>.</li>
        <li><b>Yeast</b> (a tiny fungus) in <b>bread dough</b> ferments sugar and gives off CO₂ bubbles that make dough rise.</li></ul>`,
      quiz: [
        { q: 'What are the inputs of cellular respiration?', c: ['Glucose and oxygen', 'Carbon dioxide and water', 'Light and water', 'Glucose and carbon dioxide'], why: 'Cells break down glucose using oxygen. That\'s why you need to eat and breathe.' },
        { q: 'What are the outputs of aerobic cellular respiration?', c: ['Carbon dioxide, water, and ATP', 'Glucose and oxygen', 'Oxygen and ATP', 'Glucose, water, and light'], why: 'The energy from glucose is saved in ATP. Carbon dioxide and water are the leftovers.' },
        { q: 'Most cellular respiration happens in the…', c: ['mitochondria', 'chloroplasts', 'nucleus', 'cell wall'], why: 'Mitochondria are the cell\'s power plants. Chloroplasts do photosynthesis.' },
        { q: 'Which living things do cellular respiration?', c: ['Both plants and animals', 'Only animals', 'Only plants', 'Only animals with lungs'], why: 'Plants make glucose by photosynthesis, but they still need respiration to release its energy, just like animals.' },
        { q: 'What is ATP?', c: ['The molecule cells use for energy', 'A type of sugar that plants make', 'A waste gas that cells give off', 'The green pigment in leaves'], why: 'ATP is like energy cash. Cells spend it to move, grow, and pump things.' },
        { q: 'Where does glycolysis happen?', c: ['In the cytoplasm', 'In the mitochondria', 'In the chloroplast', 'In the nucleus'], why: 'Glycolysis splits glucose in the cytoplasm, before anything goes into the mitochondria.' },
        { q: 'Which step of aerobic respiration makes most of the ATP?', c: ['The electron transport chain', 'Glycolysis', 'Fermentation', 'The Calvin cycle'], why: 'The electron transport chain uses oxygen and makes most of the ATP from each glucose.' },
        { q: 'What happens to the oxygen you breathe in once it reaches your mitochondria?', c: ['It joins with hydrogen at the end of the electron transport chain and forms water', 'It is turned into carbon dioxide during glycolysis', 'It becomes part of new glucose', 'It is stored inside ATP'], why: 'Oxygen is the last stop of the electron transport chain. It picks up hydrogen and becomes water.' },
        { q: 'The carbon in the CO₂ you breathe out comes from…', c: ['glucose broken down in your cells', 'the oxygen you breathe in', 'the water you drink', 'photosynthesis in your lungs'], why: 'Oxygen has no carbon. The carbon atoms came from glucose your mitochondria broke apart.' },
        { q: 'During a hard sprint, your leg muscles can\'t get oxygen fast enough. What do they do?', c: ['Switch to lactic acid fermentation', 'Start doing photosynthesis', 'Stop making ATP completely', 'Make more ATP than they do with oxygen'], why: 'Without enough oxygen, muscles use fermentation. It makes a little ATP fast, and lactic acid builds up.' },
        { q: 'Fermentation makes only 2 ATP per glucose. Why so few?', c: ['Only glycolysis runs, without the oxygen steps', 'It happens in the chloroplast', 'It uses up oxygen too fast', 'It doesn\'t use glucose at all'], why: 'Without oxygen, the Krebs cycle and electron transport chain stop, so only glycolysis\'s 2 ATP are made.' },
        { q: 'Bread dough rises because yeast…', c: ['ferments sugar and gives off carbon dioxide bubbles', 'does photosynthesis and gives off oxygen', 'makes lactic acid that puffs it up', 'takes in carbon dioxide from the air'], why: 'Yeast ferments sugar in the dough. The CO₂ gas gets trapped as bubbles and puffs the bread up.' },
      ],
      realLife: {
        text: `<p>When you run up the stairs, you <b>breathe harder</b> and your heart beats faster. Your muscles need more oxygen to make ATP, and your body has to get rid of the extra carbon dioxide.</p>
          <p>Fermentation is in your kitchen. <b>Yogurt</b> is milk that bacteria fermented; the lactic acid makes it thick and tangy. <b>Bread</b> rises because yeast fill the dough with CO₂ bubbles. Those bubbles are the little holes you see in a slice of bread.</p>
          <p>In an all-out <b>sprint</b>, your muscles can't get oxygen fast enough, so they ferment glucose for quick ATP.</p>`,
        prompt: 'Think about a full-speed sprint versus a slow jog. Which kind of respiration do your leg muscles lean on more in each one, and why?',
      },
    },
    {
      key: 'b04-04',
      title: 'Energy flow in ecosystems',
      videos: [
        { id: 'v6ubvEJ3KGM', title: 'Ecosystem ecology: links in the chain' },
      ],
      learn: `
        <p>Almost all the energy in an <b>ecosystem</b> (all the living things in an area plus their surroundings) starts as <b>sunlight</b>.</p>
        <ul><li><b>Producers</b> (living things that make their own food, like plants and algae) capture it by photosynthesis.</li>
        <li><b>Consumers</b> (living things that eat others) get energy by eating. <b>Primary consumers</b> eat producers. <b>Secondary consumers</b> eat primary consumers. <b>Tertiary consumers</b> eat secondary consumers.</li>
        <li><b>Decomposers</b> (like fungi and bacteria) break down dead things and waste and return nutrients to the soil.</li></ul>
        <p>A <b>food chain</b> shows one path of who eats whom. A <b>food web</b> shows many food chains linked together. Each step is a <b>trophic level</b> (feeding level).</p>
        <p><b>The 10% rule:</b> only about <b>10%</b> of the energy at one level gets stored in the next level. The other 90% is used for living (moving, breathing, staying warm), and most of it ends up as <b>heat</b>. Some is never eaten at all.</p>
        <p><b>Worked example:</b> grass stores 10,000 energy units. Grasshoppers get 10,000 ÷ 10 = 1,000. Frogs get 1,000 ÷ 10 = 100. Snakes get 100 ÷ 10 = 10.</p>
        <p>That's why an <b>energy pyramid</b> is wide at the bottom and narrow at the top, and why food chains rarely have more than 4 or 5 levels. <b>Energy</b> flows one way (in as sunlight, out as heat), but <b>matter</b> (the atoms living things are made of) gets recycled.</p>`,
      quiz: [
        { q: 'Where does almost all the energy in a food chain come from?', c: ['The sun', 'The soil', 'Water', 'Decomposers'], why: 'Producers capture sunlight by photosynthesis. Everything else in the chain depends on that energy.' },
        { q: 'Which of these is a producer?', c: ['Grass', 'A rabbit', 'A mushroom', 'A hawk'], why: 'Grass makes its own food by photosynthesis. A mushroom is a fungus, which is a decomposer.' },
        { q: 'A rabbit eats only plants. It is a…', c: ['primary consumer', 'producer', 'secondary consumer', 'decomposer'], why: 'Primary consumers eat producers, like plants.' },
        { q: 'In the chain grass → grasshopper → frog → snake, the frog is a…', c: ['secondary consumer', 'primary consumer', 'producer', 'tertiary consumer'], why: 'The frog eats the grasshopper, a primary consumer. That makes the frog a secondary consumer.' },
        { q: 'What do decomposers do?', c: ['Break down dead things and return nutrients to the soil', 'Make food from sunlight', 'Hunt and eat live animals', 'Turn heat back into sunlight'], why: 'Fungi and bacteria recycle the matter in dead things and waste so producers can use it again.' },
        { q: 'How is a food web different from a food chain?', c: ['A food web shows many connected food chains', 'A food web has fewer living things', 'A food web only includes plants', 'A food web leaves out the producers'], why: 'A chain is one path of who eats whom. A web links many chains, since most animals eat more than one thing.' },
        { q: 'About what percent of the energy at one trophic level gets stored in the next level?', c: ['10%', '90%', '50%', '100%'], why: 'The 10% rule: only about one tenth of the energy moves up to the next level.' },
        { q: 'Grass stores 20,000 energy units. About how much reaches the grasshoppers that eat it?', c: ['2,000 units', '200 units', '18,000 units', '20,000 units'], why: '10% of 20,000 is 20,000 ÷ 10 = 2,000.' },
        { q: 'Producers store 50,000 energy units. About how much reaches the secondary consumers?', c: ['500 units', '5,000 units', '50 units', '45,000 units'], why: 'Two steps: 50,000 ÷ 10 = 5,000 for primary consumers, then 5,000 ÷ 10 = 500 for secondary consumers.' },
        { q: 'Where does most of the 90% of energy that doesn\'t move up a level go?', c: ['It is used for living and lost as heat', 'It is stored in the soil forever', 'It turns back into sunlight', 'It goes back to the producers'], why: 'Animals use energy to move, breathe, and stay warm. Most of it ends up as heat, which leaves the ecosystem.' },
        { q: 'Why do food chains rarely have more than 4 or 5 levels?', c: ['Too little energy is left at the top to support another level', 'Top predators run out of water', 'Plants stop growing after 5 levels', 'Decomposers eat the extra levels'], why: 'After a few ÷ 10 steps, almost no energy is left for another level to live on.' },
        { q: 'Which statement about energy and matter in an ecosystem is true?', c: ['Energy flows one way, but matter is recycled', 'Matter flows one way, but energy is recycled', 'Energy and matter are both used up and disappear', 'Decomposers recycle energy back into sunlight'], why: 'Energy comes in as sunlight and leaves as heat. Atoms get reused again and again.' },
      ],
      realLife: {
        text: `<p>On the African savanna there are far more zebras than lions. Lions are one level higher, so they get only about a tenth of the energy the zebras stored. Food energy for a huge herd feeds just a few lions.</p>
          <p>At the <b>Jersey Shore</b>, tiny algae feed tiny animals called zooplankton, those feed small fish, and the small fish feed <b>ospreys</b>. It takes a lot of small fish to keep one osprey family going.</p>
          <p>Farming follows the same rule. A chicken uses most of its feed just to live, so raising meat takes more farmland than growing the same amount of food energy as grain or beans.</p>`,
        prompt: 'Using the 10% rule, explain why there are far fewer ospreys at the Jersey Shore than small fish for them to eat.',
      },
    },
    {
      key: 'b04-05',
      title: 'The carbon, water, and nitrogen cycles',
      videos: [
        { id: 'NHqEthRCqQ4', title: 'Carbon and nitrogen cycles' },
        { id: '2D7hZpIYlCA', title: 'The water and carbon cycles' },
      ],
      learn: `
        <p>Energy flows through an ecosystem one way, but <b>matter</b> (atoms) gets <b>recycled</b>. Atoms are never used up. They move between living things, air, water, and rock in <b>biogeochemical cycles</b> (bio = life, geo = Earth).</p>
        <p><b>Carbon cycle</b> (carbon is in every biomolecule):</p>
        <ul><li><b>Photosynthesis</b> pulls CO₂ out of the air and builds the carbon into sugar.</li>
        <li>Animals eat the plants. <b>Cellular respiration</b> in plants, animals, and decomposers puts CO₂ back into the air.</li>
        <li>Oceans soak up CO₂. Some carbon is locked away for millions of years in <b>fossil fuels</b> (coal, oil, and natural gas, made from ancient living things).</li>
        <li><b>Combustion</b> (burning) of fossil fuels and forests releases CO₂ fast. Extra CO₂ in the air traps heat and warms the planet.</li></ul>
        <p><b>Water cycle:</b> water <b>evaporates</b> (turns into gas) from oceans and lakes, and leaves give off water vapor (<b>transpiration</b>). The vapor <b>condenses</b> (cools into drops) to form clouds, then falls as <b>precipitation</b> (rain or snow).</p>
        <p><b>Nitrogen cycle:</b> living things need nitrogen to build proteins and DNA. Air is about 78% nitrogen gas, but plants and animals can't use that form. <b>Nitrogen-fixing bacteria</b> in soil and in the roots of beans and peas change it into a form plants can absorb. Animals get nitrogen by eating plants. Decomposers return it to the soil, and other bacteria release it back into the air.</p>`,
      quiz: [
        { q: 'In the carbon cycle, which process takes CO₂ out of the air?', c: ['Photosynthesis', 'Cellular respiration', 'Burning fossil fuels', 'Decomposition'], why: 'Plants take in CO₂ and build its carbon into sugar. The others all release CO₂.' },
        { q: 'Which process puts CO₂ back into the air?', c: ['Cellular respiration', 'Photosynthesis', 'Transpiration', 'Nitrogen fixation'], why: 'Plants, animals, and decomposers all break down sugar for energy and breathe out CO₂.' },
        { q: 'Fossil fuels like coal and oil are made from…', c: ['remains of living things from millions of years ago', 'melted rock from volcanoes', 'salt from the ocean', 'nitrogen gas from the air'], why: 'Ancient plants and tiny sea life were buried and squeezed for millions of years, locking up their carbon.' },
        { q: 'Why does burning fossil fuels raise the amount of CO₂ in the air?', c: ['It quickly releases carbon that was locked underground for millions of years', 'It creates brand-new carbon atoms', 'It stops all photosynthesis on Earth', 'It turns nitrogen into carbon'], why: 'Burning puts old stored carbon into the air much faster than plants and oceans can take it back.' },
        { q: 'A carbon atom in your arm muscle most likely got into a living thing first through…', c: ['photosynthesis, when a plant took in CO₂', 'drinking water', 'breathing in oxygen', 'nitrogen-fixing bacteria'], why: 'Plants build carbon from the air into food. You ate the plant, or an animal that ate plants.' },
        { q: 'Plants give off water vapor from their leaves. This is called…', c: ['transpiration', 'condensation', 'precipitation', 'respiration'], why: 'Transpiration moves water from the soil, up through the plant, and out of the leaves into the air.' },
        { q: 'Water vapor cools and forms clouds. This step is called…', c: ['condensation', 'evaporation', 'precipitation', 'transpiration'], why: 'Condensation is gas cooling into liquid drops, like the drops on a cold water bottle.' },
        { q: 'Rain, snow, sleet, and hail are all forms of…', c: ['precipitation', 'condensation', 'evaporation', 'transpiration'], why: 'Precipitation is water falling from clouds back to Earth.' },
        { q: 'Why do living things need nitrogen?', c: ['To build proteins and DNA', 'To do photosynthesis', 'To store energy as fat', 'To make glucose'], why: 'Amino acids (the building blocks of proteins) and nucleotides (the building blocks of DNA) both contain nitrogen.' },
        { q: 'Air is about 78% nitrogen. Why can\'t plants use it directly?', c: ['Nitrogen gas is in a form plants can\'t absorb until bacteria change it', 'There is too little nitrogen in the air', 'Nitrogen gas is poisonous to plants', 'Plants only need nitrogen in winter'], why: 'Nitrogen-fixing bacteria change nitrogen gas into a form that plant roots can take in.' },
        { q: 'Farmers sometimes plant beans or peas to make the soil richer. Why does this work?', c: ['Bacteria in their roots add usable nitrogen to the soil', 'Their roots give off extra oxygen', 'They pull carbon out of the soil', 'They stop water from evaporating'], why: 'Nitrogen-fixing bacteria live in bumps on bean and pea roots. They turn nitrogen from the air into plant food.' },
        { q: 'Which statement about matter in ecosystems is true?', c: ['The same atoms are recycled over and over', 'Atoms get used up by living things', 'Plants make brand-new atoms', 'Atoms leave Earth as heat'], why: 'Matter isn\'t created or destroyed. The same atoms keep moving between air, water, rock, and living things.' },
      ],
      realLife: {
        text: `<p>Every time you <b>breathe out</b>, you send carbon back into the air. A few hours ago that carbon was in your breakfast. Before that, it was CO₂ that a wheat plant took out of the air.</p>
          <p><b>Car exhaust</b> releases carbon from oil that formed millions of years ago. <b>Planting trees</b> pulls some of it back out.</p>
          <p>In the fall, <b>leaves</b> pile up and slowly rot. Decomposers return their carbon to the air and their nitrogen to the soil.</p>
          <p>A cold water bottle "sweats" on a hot day. That's condensation, the same step that makes clouds.</p>`,
        prompt: 'Follow one carbon atom: start in the air, then trace how it could get into your body and back out again. Name each process.',
      },
    },
  ],
};
