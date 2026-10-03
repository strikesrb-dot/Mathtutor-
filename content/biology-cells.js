// Biology — Unit: Cells  (STARTER UNIT — swap once we confirm what his class is on)
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (Amoeba Sisters / Khan Academy).

export default {
  subject: 'biology',
  unit: 'Cells',
  lessons: [
    {
      key: 'bio-1',
      title: 'Cells and the cell theory',
      videos: [
        { id: 'zk3vlhz1b6k', title: 'Cell theory' },
        { id: 'EtWknf1gzKo', title: 'Biological levels: the world tour' },
      ],
      learn: `
        <p>A <b>cell</b> (the smallest living unit) is like a brick. Every living thing is built out of them.</p>
        <p>The <b>cell theory</b> (the 3 big rules about cells) says:</p>
        <ol><li>All living things are made of one or more cells.</li>
        <li>The cell is the basic unit of life.</li>
        <li>New cells only come from cells that already exist.</li></ol>
        <p><b>Robert Hooke</b> named "cells" in 1665 after looking at cork through a <b>microscope</b> (a tool that makes tiny things look big).</p>
        <p><b>Levels of life</b>, from small to big: cell → tissue (a group of similar cells) → organ (like the heart) → organ system (like the digestive system) → organism (a whole living thing).</p>
        <p><b>Unicellular</b> = made of one cell, like bacteria. <b>Multicellular</b> = made of many cells, like you.</p>`,
      quiz: [
        { q: 'What is the basic unit of life?', c: ['The cell', 'The atom', 'The organ', 'The tissue'], why: 'Cell theory rule #2: the cell is the basic unit of life.' },
        { q: 'Which is NOT part of the cell theory?', c: ['Cells can appear from nonliving things', 'All living things are made of cells', 'New cells come from existing cells', 'The cell is the basic unit of life'], why: 'Cells only come from other cells. They never pop out of nonliving stuff.' },
        { q: 'Who first named "cells" after looking at cork?', c: ['Robert Hooke', 'Isaac Newton', 'Charles Darwin', 'Albert Einstein'], why: 'Hooke, in 1665. The little boxes reminded him of small rooms ("cells").' },
        { q: 'Which order goes from smallest to biggest?', c: ['cell → tissue → organ → organ system → organism', 'organ → cell → tissue → organism → organ system', 'tissue → cell → organ → organism → organ system', 'organism → organ system → organ → tissue → cell'], why: 'Cells make tissues, tissues make organs, organs make systems, and systems make you.' },
        { q: 'A group of similar cells working together is a…', c: ['tissue', 'organ', 'organism', 'molecule'], why: 'For example, muscle tissue is many muscle cells together.' },
        { q: 'The heart is an example of a(n)…', c: ['organ', 'tissue', 'cell', 'organ system'], why: 'It\'s made of several tissues working together as one part.' },
        { q: 'Unicellular means…', c: ['made of one cell', 'made of many cells', 'made of no cells', 'has one nucleus per organ'], why: '"Uni" = one.' },
        { q: 'Which of these is multicellular?', c: ['An oak tree', 'A bacterium', 'An amoeba', 'A single yeast cell'], why: 'A tree is made of trillions of cells. The others are single cells.' },
        { q: 'Which tool made it possible to discover cells?', c: ['The microscope', 'The telescope', 'The thermometer', 'The compass'], why: 'Cells are too small to see without magnifying them.' },
        { q: 'Where do new cells come from?', c: ['Existing cells dividing', 'Dust and water', 'Food you eat turning into cells directly', 'Sunlight'], why: 'Cell theory rule #3.' },
        { q: 'The digestive system is an example of a(n)…', c: ['organ system', 'organ', 'tissue', 'cell'], why: 'Several organs (stomach, intestines, and more) work together.' },
        { q: 'Are viruses made of cells?', c: ['No — viruses are not cells', 'Yes — viruses are one cell', 'Yes — viruses are many cells', 'Only big viruses'], why: 'Viruses can\'t live or copy themselves on their own. They need to get inside a cell.' },
      ],
      realLife: {
        text: `<p>Your body replaces old cells all the time. Your skin sheds dead cells every day, and new ones grow underneath.</p>
          <p>When you get a cut, the cells around it <b>divide</b> to make new cells and close the gap. That's cell theory rule #3 happening on your own knee.</p>`,
        prompt: 'When you scrape your knee, it heals in a week or two. Use the cell theory to explain where the new skin comes from.',
      },
    },
    {
      key: 'bio-2',
      title: 'Prokaryotic vs. eukaryotic cells',
      videos: [
        { id: 'Pxujitlv8wc', title: 'Prokaryotic vs. eukaryotic cells' },
        { id: 'ORB866QSGv8', title: 'Bacteria' },
      ],
      learn: `
        <p>There are two big kinds of cells.</p>
        <p><b>Prokaryotic cells</b> ("before a nucleus"):</p>
        <ul><li>No <b>nucleus</b> (the control center that holds DNA). Their DNA floats in an area called the <b>nucleoid</b>.</li>
        <li>No <b>membrane-bound organelles</b> (tiny parts wrapped in their own skin).</li>
        <li>Small and simple. Examples: <b>bacteria</b> and <b>archaea</b>.</li></ul>
        <p><b>Eukaryotic cells</b> ("true nucleus"):</p>
        <ul><li>They have a nucleus and membrane-bound organelles.</li>
        <li>They're bigger. Examples: animals, plants, fungi, and protists.</li></ul>
        <p><b>Both kinds</b> have a cell membrane, cytoplasm, ribosomes, and DNA.</p>`,
      quiz: [
        { q: 'What is the main difference between prokaryotes and eukaryotes?', c: ['Eukaryotes have a nucleus', 'Prokaryotes have a nucleus', 'Only eukaryotes have DNA', 'Only prokaryotes have a membrane'], why: 'Eukaryotes have a "true nucleus." Prokaryotes don\'t have one.' },
        { q: 'Bacteria are…', c: ['prokaryotic', 'eukaryotic', 'not cells', 'plant cells'], why: 'Bacteria have no nucleus.' },
        { q: 'Human cells are…', c: ['eukaryotic', 'prokaryotic', 'bacterial', 'archaea'], why: 'Our cells have a nucleus and organelles.' },
        { q: 'Which structure do ALL cells have?', c: ['Ribosomes', 'A nucleus', 'Mitochondria', 'Chloroplasts'], why: 'Every cell needs ribosomes to make proteins.' },
        { q: 'Which group is prokaryotic?', c: ['Archaea', 'Fungi', 'Plants', 'Animals'], why: 'Bacteria and archaea are the prokaryotes.' },
        { q: 'Where is the DNA in a prokaryotic cell?', c: ['In the nucleoid region of the cytoplasm', 'Inside a nucleus', 'Inside the mitochondria', 'Outside the cell'], why: 'There is no nucleus, so the DNA sits in an area called the nucleoid.' },
        { q: 'Which kind of cell is usually larger?', c: ['Eukaryotic', 'Prokaryotic', 'They are always the same size', 'Viruses'], why: 'Eukaryotic cells are often 10 or more times bigger.' },
        { q: 'Membrane-bound organelles are found in…', c: ['eukaryotes only', 'prokaryotes only', 'both', 'neither'], why: 'Prokaryotes don\'t have parts wrapped in their own membrane.' },
        { q: 'Mushroom cells are…', c: ['eukaryotic', 'prokaryotic', 'bacterial', 'not cells'], why: 'Fungi are eukaryotes.' },
        { q: 'What does "prokaryote" roughly mean?', c: ['"Before nucleus"', '"True nucleus"', '"Many cells"', '"Green cell"'], why: '"Pro" = before and "karyon" = kernel (nucleus).' },
        { q: 'Which structure do BOTH prokaryotes and eukaryotes have?', c: ['Cell membrane', 'Nucleus', 'Mitochondria', 'Endoplasmic reticulum'], why: 'Every cell has a membrane around it.' },
        { q: 'Some bacteria swim using a tail-like part called a…', c: ['flagellum', 'nucleus', 'vacuole', 'chloroplast'], why: 'It spins like a tiny motor.' },
      ],
      realLife: {
        text: `<p><b>Antibiotics</b> (medicines that kill bacteria) work because bacterial cells are <i>different</i> from yours. Some antibiotics attack the bacterial cell wall or bacterial ribosomes, which your cells don't have in the same form.</p>
          <p>That's also why antibiotics <b>don't work on a cold or the flu</b>. Those are viruses, not bacteria.</p>
          <p>And not all bacteria are bad. The bacteria in yogurt help your gut.</p>`,
        prompt: 'Antibiotics kill bacteria but don\'t hurt your own cells. Using what you learned about how bacterial cells are different from yours, explain why that\'s possible.',
      },
    },
    {
      key: 'bio-3',
      title: 'Organelles: the parts of a cell',
      videos: [
        { id: '8IlzKri08kk', title: 'Introduction to cells: the grand cell tour' },
        { id: '6mgkoqcm6Sg', title: 'Cell organelles and structures review' },
      ],
      learn: `
        <p>An <b>organelle</b> ("little organ") is a part inside a cell with a job. Think of the cell as a <b>city</b>:</p>
        <ul>
        <li><b>Nucleus</b> = city hall. It holds the DNA (the instructions).</li>
        <li><b>Mitochondria</b> = power plant. They turn the energy in food into <b>ATP</b> (the cell's energy "money").</li>
        <li><b>Ribosomes</b> = factories that build <b>proteins</b>.</li>
        <li><b>Rough ER</b> (endoplasmic reticulum) = a highway lined with ribosomes. It helps make proteins.</li>
        <li><b>Smooth ER</b> = makes <b>lipids</b> (fats).</li>
        <li><b>Golgi apparatus</b> = post office. It packages things and ships them out.</li>
        <li><b>Lysosome</b> = recycling crew. It breaks down waste and old parts.</li>
        <li><b>Vacuole</b> = storage for water, food, and waste.</li>
        <li><b>Cell membrane</b> = the city border, deciding what goes in and out.</li>
        <li><b>Cytoplasm</b> = the jelly that fills the cell.</li></ul>`,
      quiz: [
        { q: 'Which organelle holds the DNA?', c: ['Nucleus', 'Ribosome', 'Golgi apparatus', 'Vacuole'], why: 'The nucleus is the control center.' },
        { q: 'Which organelle turns food energy into ATP?', c: ['Mitochondria', 'Nucleus', 'Lysosome', 'Smooth ER'], why: 'The mitochondria are the power plant.' },
        { q: 'Which organelle builds proteins?', c: ['Ribosomes', 'Vacuoles', 'Lysosomes', 'Cell membrane'], why: 'Ribosomes are the protein factories.' },
        { q: 'Which organelle packages and ships proteins?', c: ['Golgi apparatus', 'Nucleus', 'Mitochondria', 'Cytoplasm'], why: 'The Golgi is the post office.' },
        { q: 'Which organelle breaks down waste and old cell parts?', c: ['Lysosome', 'Ribosome', 'Nucleus', 'Rough ER'], why: 'Lysosomes are the cleanup and recycling crew.' },
        { q: 'Why is rough ER called "rough"?', c: ['Ribosomes are attached to it', 'It has sharp edges', 'It is made of sand', 'It is damaged'], why: 'The bumps are ribosomes.' },
        { q: 'What does smooth ER make?', c: ['Lipids (fats)', 'DNA', 'Sunlight', 'Bones'], why: 'Smooth ER has no ribosomes. It makes lipids.' },
        { q: 'Which part controls what enters and leaves the cell?', c: ['Cell membrane', 'Nucleus', 'Ribosome', 'Golgi apparatus'], why: 'The membrane is the border checkpoint.' },
        { q: 'What is the jelly-like fluid inside a cell called?', c: ['Cytoplasm', 'Chlorophyll', 'Plasma TV', 'Nucleoid'], why: 'Cytoplasm fills the cell and holds the organelles.' },
        { q: 'Which organelle stores water, food, or waste?', c: ['Vacuole', 'Ribosome', 'Mitochondrion', 'Golgi apparatus'], why: 'Vacuoles are storage sacs.' },
        { q: 'A muscle cell needs a lot of energy. What would it have many of?', c: ['Mitochondria', 'Vacuoles', 'Cell walls', 'Chloroplasts'], why: 'More power plants mean more energy.' },
        { q: 'In the "cell as a city" comparison, the post office is the…', c: ['Golgi apparatus', 'Nucleus', 'Lysosome', 'Cell membrane'], why: 'The post office packages and ships things, just like the Golgi.' },
      ],
      realLife: {
        text: `<p><b>Muscle cells</b> are packed with mitochondria because moving takes a lot of energy.</p>
          <p>When athletes train, their muscle cells actually build <b>more mitochondria</b>. That's part of why you get less tired the more you practice.</p>
          <p>Think of an airport: the control tower (nucleus) gives instructions, the fuel trucks (mitochondria) supply energy, and the baggage system (Golgi) sorts and ships everything.</p>`,
        prompt: 'Pick 3 organelles and compare each one to a job at an airport or a school. Explain why each comparison fits.',
      },
    },
    {
      key: 'bio-4',
      title: 'Plant cells vs. animal cells',
      videos: [
        { id: 'kpk5wswBPPw', title: 'Comparing cell types review' },
        { id: 'HjC-eMiMDfo', title: 'Comparing animal and plant cells' },
      ],
      learn: `
        <p><b>Plant cells have, but animal cells don't:</b></p>
        <ul><li><b>Cell wall</b>: a stiff outer layer made of <b>cellulose</b> (plant fiber). It makes plant cells boxy.</li>
        <li><b>Chloroplasts</b>: the green parts that do <b>photosynthesis</b> (making food from sunlight). They're green because of <b>chlorophyll</b>.</li>
        <li><b>A large central vacuole</b>: a big water tank that keeps the plant firm.</li></ul>
        <p><b>Animal cells</b> have no wall, no chloroplasts, and only small vacuoles. They usually have <b>centrioles</b> (they help when the cell divides). Their shapes are flexible.</p>
        <p><b>Both</b> have a nucleus, cell membrane, ribosomes, ER, Golgi, and <b>mitochondria</b>. Yes, plants have mitochondria too!</p>`,
      quiz: [
        { q: 'Which part do plant cells have but animal cells don\'t?', c: ['Chloroplasts', 'Mitochondria', 'Nucleus', 'Ribosomes'], why: 'Plants, algae, and some bacteria do photosynthesis. Animal cells have no chloroplasts.' },
        { q: 'What is a plant cell wall made of?', c: ['Cellulose', 'Protein', 'Bone', 'Fat'], why: 'Cellulose is plant fiber.' },
        { q: 'What does the large central vacuole do?', c: ['Stores water and keeps the plant firm', 'Makes food from sunlight', 'Holds the DNA', 'Makes proteins'], why: 'When it is full of water, the plant stands up straight.' },
        { q: 'Do plant cells have mitochondria?', c: ['Yes', 'No — chloroplasts replace them', 'Only at night', 'Only in roots'], why: 'Plants make sugar with chloroplasts, then burn it for energy in mitochondria.' },
        { q: 'Why do plant cells look boxy?', c: ['They have a stiff cell wall', 'They have no nucleus', 'They have lots of lysosomes', 'They are smaller'], why: 'The wall holds a fixed shape.' },
        { q: 'Chloroplasts make food by…', c: ['photosynthesis', 'digestion', 'osmosis', 'eating other cells'], why: 'Light + water + CO₂ → sugar + oxygen.' },
        { q: 'A plant is wilting (drooping). What is happening in its cells?', c: ['The central vacuoles lost water', 'The nucleus disappeared', 'There are too many chloroplasts', 'The cell walls turned to fat'], why: 'Less water in the vacuoles means less pressure, so the plant droops.' },
        { q: 'Which structure is found in BOTH plant and animal cells?', c: ['Mitochondria', 'Cell wall', 'Chloroplast', 'Large central vacuole'], why: 'Both need to turn food into energy.' },
        { q: 'What makes leaves green?', c: ['Chlorophyll in chloroplasts', 'The cell wall', 'Water in the vacuole', 'The nucleus'], why: 'Chlorophyll reflects green light.' },
        { q: 'Which part do animal cells usually have but plant cells usually don\'t?', c: ['Centrioles', 'Mitochondria', 'Cell membrane', 'Ribosomes'], why: 'Centrioles help animal cells divide.' },
        { q: 'A cell has a cell wall, chloroplasts, and a big vacuole. It is most likely from a…', c: ['leaf', 'human muscle', 'dog\'s skin', 'bacterium'], why: 'All three are plant features.' },
        { q: 'What are animal cells\' shapes like?', c: ['Flexible and varied — there is no cell wall', 'Always perfect squares', 'Always green', 'Exactly like plant cells'], why: 'Without a wall, they can be round, long, or star-shaped.' },
      ],
      realLife: {
        text: `<p><b>Crunchy celery</b> is crunchy because of strong cell walls and vacuoles full of water.</p>
          <p>Leave lettuce out, and the vacuoles lose water, so it goes limp. Put it in <b>cold water</b>, and water moves back into the vacuoles, so it gets crisp again.</p>
          <p>Wood, paper, and cotton are all made from plant cell walls (cellulose).</p>`,
        prompt: 'Lettuce gets limp if left out, but gets crisp again in cold water. Explain what\'s happening inside the plant cells.',
      },
    },
    {
      key: 'bio-5',
      title: 'The cell membrane',
      videos: [
        { id: 'qBCVVszQQNs', title: 'Inside the cell membrane' },
        { id: 'cP8iQu57dQo', title: 'Fluid mosaic model of cell membranes' },
      ],
      learn: `
        <p>The cell membrane is made of a <b>phospholipid bilayer</b> (two layers of fat molecules).</p>
        <ul><li>The <b>heads</b> are <b>hydrophilic</b> (water-loving), so they face the water inside and outside the cell.</li>
        <li>The <b>tails</b> are <b>hydrophobic</b> (water-fearing), so they hide in the middle.</li></ul>
        <p><b>Proteins</b> sit in the membrane. Some are <b>channels</b> (doorways), some are <b>pumps</b>, and some are <b>receptors</b> (they catch messages).</p>
        <p>The membrane is <b>selectively permeable</b> (it lets some things through but not others).</p>
        <ul><li>Small things like O₂ and CO₂ slip right through.</li>
        <li>Bigger things like glucose, and charged things like sodium ions, need protein doorways.</li></ul>
        <p>The <b>fluid mosaic model</b> says the membrane's pieces float around and slide past each other. <b>Cholesterol</b> keeps it from getting too floppy.</p>`,
      quiz: [
        { q: 'What is the cell membrane mostly made of?', c: ['Phospholipids', 'Cellulose', 'DNA', 'Sugar'], why: 'It\'s a double layer of phospholipids.' },
        { q: 'The heads of phospholipids are…', c: ['hydrophilic (water-loving)', 'hydrophobic (water-fearing)', 'made of DNA', 'magnetic'], why: 'The heads face the water.' },
        { q: 'The tails of phospholipids are…', c: ['hydrophobic (water-fearing)', 'hydrophilic (water-loving)', 'made of protein', 'outside the cell'], why: 'The tails hide in the middle, away from water.' },
        { q: '"Selectively permeable" means the membrane…', c: ['lets some substances through but not others', 'lets everything through', 'lets nothing through', 'is only on plant cells'], why: 'It\'s choosy, like a security checkpoint.' },
        { q: 'What does "fluid mosaic model" mean?', c: ['The parts move around, and it\'s made of many different pieces', 'The membrane is a liquid with no shape', 'It\'s a picture made of tiles', 'It\'s frozen solid'], why: 'Fluid = moving and mosaic = many pieces.' },
        { q: 'Channel proteins in the membrane act as…', c: ['doorways for certain molecules', 'energy factories', 'DNA storage', 'cell walls'], why: 'They let specific things pass through.' },
        { q: 'Which passes through the membrane most easily?', c: ['Oxygen (O₂)', 'Glucose', 'Sodium ion (Na⁺)', 'A large protein'], why: 'O₂ is tiny and has no charge, so it slips between the phospholipids.' },
        { q: 'Why does the membrane form two layers?', c: ['So the tails can hide from water in the middle', 'To be twice as strong', 'Because cells have two nuclei', 'To store more DNA'], why: 'Water-fearing tails point inward, and water-loving heads point out.' },
        { q: 'What do receptor proteins do?', c: ['Receive signals or messages', 'Make ATP', 'Store water', 'Copy DNA'], why: 'For example, they catch hormones.' },
        { q: 'What does cholesterol do in the membrane?', c: ['Keeps it stable — not too fluid', 'Makes proteins', 'Holds DNA', 'Does photosynthesis'], why: 'It\'s like a stabilizer.' },
        { q: 'The cell membrane is most like…', c: ['airport security (a checkpoint)', 'a brick wall with no doors', 'an open field', 'a power plant'], why: 'It checks what comes in and out.' },
        { q: 'How does glucose usually get into a cell?', c: ['Through transport proteins', 'It slips between the phospholipids', 'It can\'t get in at all', 'Through the nucleus'], why: 'Glucose is too big to squeeze through on its own.' },
      ],
      realLife: {
        text: `<p>The membrane is like <b>airport security (TSA)</b>.</p>
          <ul><li>Small, harmless things walk right through, like O₂.</li>
          <li>Some things need a special lane, like glucose through a protein.</li>
          <li>Some things are blocked.</li></ul>
          <p><b>Soap</b> works partly because it can break apart the fatty membranes around many germs. That's one reason washing your hands for 20 seconds matters.</p>`,
        prompt: 'Compare the cell membrane to airport security (TSA). What gets through easily, what needs a special check, and what is blocked?',
      },
    },
    {
      key: 'bio-6',
      title: 'Diffusion and osmosis',
      videos: [
        { id: 'jhszFBtBPoI', title: 'Diffusion' },
        { id: 'L-osEc07vMs', title: 'Osmosis and water potential' },
      ],
      learn: `
        <p><b>Passive transport</b> means moving things in or out of the cell <i>without using energy</i>.</p>
        <p><b>Diffusion</b> = molecules spread from where there's <b>a lot</b> (high concentration) to where there's <b>a little</b> (low concentration), until it's even. Example: perfume spreading across a room.</p>
        <p><b>Osmosis</b> = diffusion of <b>water</b> across a membrane.</p>
        <ul><li><b>Hypotonic</b> (less salt or sugar outside the cell): water rushes <b>in</b>. Animal cells swell and can burst. Plant cells get firm.</li>
        <li><b>Hypertonic</b> (more salt or sugar outside): water rushes <b>out</b>, and the cell shrinks.</li>
        <li><b>Isotonic</b> (equal inside and out): no overall change.</li></ul>
        <p><b>Facilitated diffusion</b> = diffusion that goes through a protein doorway. It still uses no energy.</p>`,
      quiz: [
        { q: 'In diffusion, molecules move from…', c: ['high concentration to low concentration', 'low concentration to high concentration', 'cold to hot only', 'the nucleus to the membrane'], why: 'They spread out from crowded areas to less crowded areas.' },
        { q: 'Osmosis is the diffusion of…', c: ['water', 'salt', 'oxygen', 'proteins'], why: 'Osmosis is specifically water crossing a membrane.' },
        { q: 'Does passive transport need energy?', c: ['No', 'Yes, always', 'Only at night', 'Only in plants'], why: 'Passive = no energy needed.' },
        { q: 'A cell is placed in a very salty (hypertonic) solution. What happens?', c: ['It shrinks as water leaves', 'It swells as water enters', 'Nothing happens', 'It grows a cell wall'], why: 'Water moves toward the saltier side, which is outside the cell.' },
        { q: 'An animal cell is placed in pure water (hypotonic). What happens?', c: ['It swells and may burst', 'It shrinks', 'Nothing happens', 'It turns green'], why: 'Water rushes in, and animal cells have no wall to stop them bursting.' },
        { q: 'In an isotonic solution…', c: ['there is no overall water movement in or out', 'the cell bursts', 'the cell shrinks', 'all the water leaves'], why: 'Inside and outside are balanced.' },
        { q: 'You smell food cooking from another room. That\'s an example of…', c: ['diffusion', 'osmosis', 'active transport', 'photosynthesis'], why: 'The smell molecules spread from high concentration to low.' },
        { q: 'Facilitated diffusion uses…', c: ['protein channels — but no energy', 'ATP energy', 'the nucleus', 'sunlight'], why: 'A helper protein opens a path, but it is still passive.' },
        { q: 'Why does a cucumber shrivel when it sits in salty brine to become a pickle?', c: ['Water leaves its cells by osmosis', 'Salt makes it grow', 'It absorbs vinegar energy', 'Its DNA changes'], why: 'The brine is hypertonic, so water moves out of the cucumber.' },
        { q: 'Diffusion has no overall (net) movement once…', c: ['the concentration is equal everywhere', 'the cell dies', 'all the molecules stop moving', 'it gets dark'], why: 'Molecules still move, but equally in both directions.' },
        { q: 'Why do hospitals use salt-water (saline) IVs instead of pure water?', c: ['Pure water would make blood cells swell and burst', 'Salt tastes better', 'Pure water is too expensive', 'Saline has more vitamins'], why: 'Saline is isotonic with blood cells, so they stay safe.' },
        { q: 'A plant cell in pure water (hypotonic) becomes…', c: ['firm (turgid) — the cell wall stops it bursting', 'burst open', 'shriveled', 'an animal cell'], why: 'Water fills the vacuole and presses against the strong wall.' },
      ],
      realLife: {
        text: `<p><b>Drinking ocean water is dangerous.</b> Seawater is saltier than your cells (hypertonic), so drinking it pulls water <i>out</i> of your cells. You end up more thirsty and dehydrated.</p>
          <p><b>Pickles</b> are cucumbers that shrank in salty brine. <b>Hospital IVs</b> use saline so your blood cells don't burst.</p>`,
        prompt: 'Why is drinking ocean water dangerous when you\'re stranded at sea? Use the words "osmosis" and "hypertonic" in your answer.',
      },
    },
    {
      key: 'bio-7',
      title: 'Active transport',
      videos: [
        { id: 'Ptmlvtei8hw', title: 'Cell transport' },
        { id: '7NY6XdPBhxo', title: 'Sodium-potassium pump' },
        { id: 'QspmZf_yWyU', title: 'Endocytosis, phagocytosis, and pinocytosis' },
      ],
      learn: `
        <p><b>Active transport</b> = moving things from <b>low concentration to high concentration</b>. That's going "uphill," so it <b>needs energy</b> (ATP).</p>
        <p>Think of a bike: coasting downhill is passive, and pedaling uphill is active.</p>
        <p><b>Pumps:</b> the <b>sodium-potassium pump</b> pushes 3 sodium (Na⁺) out and pulls 2 potassium (K⁺) in. Your nerves need it to send signals.</p>
        <p><b>Bulk transport</b> (moving big stuff):</p>
        <ul><li><b>Endocytosis</b> = the cell wraps its membrane around something and pulls it <b>in</b>.
          <ul><li><b>Phagocytosis</b> = "cell eating" (swallowing big things like bacteria).</li>
          <li><b>Pinocytosis</b> = "cell drinking" (taking in liquid).</li></ul></li>
        <li><b>Exocytosis</b> = the cell ships things <b>out</b> in <b>vesicles</b> (little membrane bubbles), like hormones.</li></ul>`,
      quiz: [
        { q: 'Active transport moves substances from…', c: ['low concentration to high concentration', 'high concentration to low concentration', 'the nucleus to the ribosome', 'plants to animals'], why: 'It works against the natural flow, so it\'s "uphill."' },
        { q: 'Which energy molecule does active transport use?', c: ['ATP', 'DNA', 'Water', 'Glucose directly'], why: 'ATP is the cell\'s energy money.' },
        { q: 'What does the sodium-potassium pump move?', c: ['3 sodium out and 2 potassium in', '2 sodium out and 3 potassium in', 'Water in', 'Oxygen out'], why: 'Remember 3 Na⁺ out, 2 K⁺ in.' },
        { q: 'Endocytosis is…', c: ['taking material in by wrapping the membrane around it', 'pushing material out', 'diffusion of water', 'making proteins'], why: '"Endo" = into.' },
        { q: 'Exocytosis is…', c: ['releasing material out of the cell in vesicles', 'taking material in', 'cell division', 'photosynthesis'], why: '"Exo" = out.' },
        { q: 'A white blood cell swallows a bacterium. That\'s…', c: ['phagocytosis', 'pinocytosis', 'osmosis', 'exocytosis'], why: 'Phagocytosis = "cell eating."' },
        { q: 'Pinocytosis is…', c: ['"cell drinking" — taking in liquid', '"cell eating" — swallowing big things', 'pushing water out', 'making ATP'], why: 'Pino = drink.' },
        { q: 'What is the key difference between passive and active transport?', c: ['Active transport uses energy', 'Passive transport uses energy', 'Only active transport moves water', 'There is no difference'], why: 'Active = energy needed.' },
        { q: 'The sodium-potassium pump is especially important for…', c: ['nerve signals', 'photosynthesis', 'making cell walls', 'digesting fat'], why: 'Nerves depend on those sodium and potassium differences.' },
        { q: 'A cell releases hormones like insulin by…', c: ['exocytosis', 'endocytosis', 'osmosis', 'diffusion'], why: 'Packed in vesicles and shipped out.' },
        { q: 'Biking uphill is like…', c: ['active transport', 'passive transport', 'osmosis', 'diffusion'], why: 'Both take effort (energy).' },
        { q: 'What is a little membrane bubble that carries materials called?', c: ['Vesicle', 'Vacuum', 'Nucleus', 'Chloroplast'], why: 'Vesicles move cargo in and out of cells.' },
      ],
      realLife: {
        text: `<p>When you get a cut and germs get in, <b>white blood cells</b> rush over and <b>swallow the bacteria</b> (phagocytosis). That's part of why a cut can get red and warm: your body is fighting.</p>
          <p>Every time you think or move, your <b>nerves</b> use sodium-potassium pumps. Your brain spends a lot of energy keeping them running.</p>`,
        prompt: 'When you get a cut and germs get in, white blood cells come to help. Explain how they get rid of the bacteria using a word from this lesson.',
      },
    },
    {
      key: 'bio-8',
      title: 'Biomolecules and enzymes',
      videos: [
        { id: '1Dx7LDwINLU', title: 'Biomolecules' },
        { id: 'qgVFkRn8f10', title: 'Enzymes' },
      ],
      learn: `
        <p>Living things are built from 4 big <b>biomolecules</b> (molecules of life):</p>
        <ul><li><b>Carbohydrates</b> (sugars and starches) give <b>quick energy</b>. Building block: <b>monosaccharides</b> (simple sugars like glucose).</li>
        <li><b>Lipids</b> (fats and oils) store <b>long-term energy</b> and make up membranes.</li>
        <li><b>Proteins</b> build muscles and work as enzymes. Building block: <b>amino acids</b>.</li>
        <li><b>Nucleic acids</b> (DNA and RNA) hold genetic information. Building block: <b>nucleotides</b>.</li></ul>
        <p><b>Enzymes</b> are (mostly) proteins that <b>speed up chemical reactions</b>.</p>
        <ul><li>Each one fits only its own <b>substrate</b> (the molecule it works on), like a <b>lock and key</b>.</li>
        <li>Enzymes don't get used up.</li>
        <li>Too much heat, or the wrong pH (how acidic something is), can make an enzyme <b>denature</b> (lose its shape and stop working).</li></ul>`,
      quiz: [
        { q: 'What are the building blocks of proteins?', c: ['Amino acids', 'Nucleotides', 'Fatty acids', 'Monosaccharides'], why: 'Proteins are chains of amino acids.' },
        { q: 'Which biomolecule gives quick energy?', c: ['Carbohydrates', 'Nucleic acids', 'Lipids', 'Vitamins'], why: 'Sugars and starches are fast fuel.' },
        { q: 'DNA is a…', c: ['nucleic acid', 'protein', 'lipid', 'carbohydrate'], why: 'DNA and RNA are nucleic acids.' },
        { q: 'Fats and oils are…', c: ['lipids', 'proteins', 'nucleic acids', 'carbohydrates'], why: 'Lipids store long-term energy.' },
        { q: 'Most enzymes are…', c: ['proteins', 'lipids', 'carbohydrates', 'minerals'], why: 'Enzymes are protein machines.' },
        { q: 'What do enzymes do?', c: ['Speed up chemical reactions', 'Store DNA', 'Make cell walls', 'Slow down all reactions'], why: 'They are biological catalysts (speed-uppers).' },
        { q: 'What is the molecule an enzyme acts on called?', c: ['Substrate', 'Product', 'Nucleus', 'Vesicle'], why: 'The enzyme grabs its substrate and changes it.' },
        { q: 'A very high fever can be dangerous because enzymes can…', c: ['denature (lose their shape and stop working)', 'multiply too fast', 'turn into fat', 'leave the body'], why: 'Shape is everything for an enzyme.' },
        { q: 'The "lock and key" model means…', c: ['each enzyme fits a specific substrate', 'enzymes lock cells shut', 'any enzyme fits any molecule', 'DNA is locked in the nucleus'], why: 'Like a key fits only its own lock.' },
        { q: 'Are enzymes used up in a reaction?', c: ['No — they can be reused', 'Yes — one use only', 'Only at high temperatures', 'Only in plants'], why: 'They help the reaction, then get back to work.' },
        { q: 'Glucose is a…', c: ['carbohydrate (a simple sugar)', 'protein', 'lipid', 'nucleic acid'], why: 'Glucose is a monosaccharide.' },
        { q: 'Nucleotides are the building blocks of…', c: ['nucleic acids', 'proteins', 'lipids', 'carbohydrates'], why: 'DNA is a long chain of nucleotides.' },
      ],
      realLife: {
        text: `<p>Every <b>food label</b> lists carbohydrates, fat (lipids), and protein. Those are the biomolecules your body runs on.</p>
          <p><b>Chew plain bread for a while</b> and it starts tasting sweet. An enzyme in your spit (amylase) is breaking starch into sugar.</p>
          <p><b>Meat tenderizer</b> powder contains enzymes that break down meat proteins.</p>`,
        prompt: 'Look at a food label at home (or think of your favorite meal). Which biomolecules does it have, and what does your body use each one for?',
      },
    },
  ],
};
