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
        { q: 'A scientist finds a brand-new kind of living thing deep in the ocean. What does the cell theory say about it?', c: ['It is made of one or more cells', 'It may be made of no cells at all', 'It formed from minerals in the water', 'It is made of tissues but not cells'], why: 'Cell theory rule #1: every living thing is made of one or more cells, even ones we haven\'t found yet.' },
        { q: 'Which list shows a tissue, then an organ, then an organ system?', c: ['Muscle tissue → stomach → digestive system', 'Stomach → muscle tissue → digestive system', 'Digestive system → stomach → muscle tissue', 'Muscle cell → muscle tissue → stomach'], why: 'Muscle tissue helps build the stomach (an organ), and the stomach is part of the digestive system (an organ system).' },
        { q: 'Which of these is NOT a whole organism?', c: ['A single leaf from a tree', 'A bacterium', 'A mushroom', 'An ant'], why: 'A leaf is an organ, just one part of a tree. The others are whole living things.' },
        { q: 'If the cells in your skin could not divide, what would happen to a cut?', c: ['It could not heal with new skin', 'It would heal even faster', 'New skin cells would form from the air', 'It would heal the same as always'], why: 'New cells only come from existing cells dividing. No dividing means no new skin to close the cut.' },
        { q: 'A single bacterium is one cell. It is also a whole…', c: ['organism', 'organ', 'tissue', 'organ system'], why: 'In a unicellular living thing, the one cell IS the whole organism. It does everything to stay alive.' },
        { q: 'A student says a rock is alive because it has a shape and it is hard. What is the best reply?', c: ['A rock is not made of cells, so it is not alive', 'A rock is alive because it has a shape', 'A rock is a unicellular organism', 'A rock is alive because it came from Earth'], why: 'Cell theory says all living things are made of cells. A rock has no cells.' },
        { q: 'Which level is made of several organ systems working together?', c: ['Organism', 'Tissue', 'Cell', 'Organ'], why: 'Organ systems team up to make a whole living thing, the organism. That\'s the top of the list.' },
        { q: 'Your nose, windpipe, and lungs work together so you can breathe. Together they make a(n)…', c: ['organ system', 'organ', 'tissue', 'cell'], why: 'Several organs working together on one job make an organ system. This one is the respiratory system.' },
        { q: 'Read this list: brain → nerve tissue → nerve cell. Which way does it go?', c: ['From biggest to smallest', 'From smallest to biggest', 'From nonliving to living', 'From newest to oldest'], why: 'The brain is an organ made of nerve tissue, and nerve tissue is made of nerve cells. Each step gets smaller.' },
        { q: 'Which statement about the cell theory is true?', c: ['It applies to all living things, including plants and bacteria', 'It applies only to animals', 'It applies only to living things big enough to see', 'It applies only to multicellular living things'], why: 'The cell theory covers every living thing, from tiny bacteria to giant trees.' },
        { q: 'A yeast cell splits and becomes two yeast cells. Which cell theory rule does this show?', c: ['New cells come from cells that already exist', 'Cells can come from nonliving things', 'All cells are exactly the same size', 'Living things are made of tissues, not cells'], why: 'The two new cells came from one existing cell. That\'s rule #3.' },
        { q: 'Which pair shows one unicellular and one multicellular living thing?', c: ['A bacterium and a dog', 'A dog and a cat', 'A bacterium and an amoeba', 'An oak tree and a mushroom'], why: 'A bacterium is one cell. A dog is made of trillions of cells.' },
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
        { q: 'Under a microscope, a cell has a nucleus and mitochondria. What kind of cell is it?', c: ['Eukaryotic', 'Prokaryotic', 'A bacterium', 'One of the archaea'], why: 'A nucleus and membrane-bound organelles like mitochondria mean it is eukaryotic.' },
        { q: 'A tiny cell has its DNA floating in the cytoplasm and no organelles wrapped in membranes. It is most likely…', c: ['a bacterium', 'a plant cell', 'a human skin cell', 'a mushroom cell'], why: 'No nucleus and no membrane-bound organelles means it\'s a prokaryote. Bacteria are prokaryotes.' },
        { q: 'Which of these is NOT made of eukaryotic cells?', c: ['The bacteria in yogurt', 'An oak tree', 'A yeast cell', 'A dog'], why: 'Bacteria are prokaryotes. Plants, fungi like yeast, and animals are eukaryotes.' },
        { q: 'Which statement about DNA is true?', c: ['Both prokaryotes and eukaryotes have DNA', 'Only eukaryotes have DNA', 'Only prokaryotes have DNA', 'Neither kind of cell has DNA'], why: 'Every cell has DNA. The difference is where it is kept: in a nucleus or in the nucleoid.' },
        { q: 'Which structure would you NOT find in a bacterium?', c: ['A nucleus', 'Ribosomes', 'A cell membrane', 'DNA'], why: 'Bacteria are prokaryotes, so they have no nucleus. They still have ribosomes, a membrane, and DNA.' },
        { q: 'Which list has ONLY eukaryotes?', c: ['Animals, plants, fungi, and protists', 'Bacteria and archaea', 'Bacteria, plants, and animals', 'Archaea, fungi, and protists'], why: 'Bacteria and archaea are prokaryotes, so any list with them is wrong.' },
        { q: 'Some antibiotics attack bacterial ribosomes. Why don\'t they harm your own ribosomes the same way?', c: ['Your ribosomes are a different form than bacterial ones', 'Your cells don\'t have any ribosomes', 'Your cells have a cell wall that blocks medicine', 'Antibiotics only work inside a nucleus'], why: 'Bacterial ribosomes are built differently from yours, so the medicine can target theirs.' },
        { q: 'Why don\'t antibiotics cure a cold?', c: ['Colds are caused by viruses, not bacteria', 'Colds are caused by bacteria with thick walls', 'Antibiotics only work on eukaryotic cells', 'Colds are caused by fungi'], why: 'Antibiotics kill bacteria. Viruses are not cells, so antibiotics don\'t work on them.' },
        { q: 'Prokaryotic cells are best described as…', c: ['small and simple', 'large and complex', 'large with many organelles', 'always made of many cells'], why: 'Prokaryotes have no nucleus and no membrane-bound organelles. They are small and simple.' },
        { q: 'Where is the DNA in a mushroom cell?', c: ['Inside the nucleus', 'In the nucleoid region', 'In the cell wall', 'Outside the cell'], why: 'Fungi are eukaryotes, so their DNA is kept inside a nucleus.' },
        { q: 'Are all bacteria harmful?', c: ['No — some, like the bacteria in yogurt, help your gut', 'Yes — every kind of bacteria causes disease', 'Yes — all bacteria spoil food', 'No — because bacteria are not alive'], why: 'Many bacteria are helpful. Yogurt bacteria and gut bacteria help you digest food.' },
        { q: 'Your body is made of one kind of cell, and the bacteria in your gut are another. Which is right?', c: ['Your cells are eukaryotic; gut bacteria are prokaryotic', 'Your cells are prokaryotic; gut bacteria are eukaryotic', 'Both are eukaryotic', 'Both are prokaryotic'], why: 'Human cells have a nucleus, so they are eukaryotic. Bacteria don\'t, so they are prokaryotic.' },
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
        { q: 'In the "cell as a city" comparison, city hall is the…', c: ['nucleus', 'Golgi apparatus', 'mitochondria', 'lysosome'], why: 'City hall holds the rules and gives instructions, like the nucleus holding the DNA.' },
        { q: 'A cell\'s lysosomes stop working. What would most likely happen?', c: ['Waste and old parts would pile up inside the cell', 'The cell could not make any proteins', 'The cell would lose its DNA', 'The cell would make too much ATP'], why: 'Lysosomes are the cleanup crew. Without them, trash builds up.' },
        { q: 'A cell\'s mitochondria stop working. What would the cell run short of?', c: ['ATP (energy)', 'DNA', 'Water', 'Cell membrane'], why: 'Mitochondria turn food energy into ATP. Without them, the cell runs low on energy.' },
        { q: 'Which path does a protein take to get shipped out of the cell?', c: ['Ribosome on rough ER → Golgi apparatus → out of the cell', 'Golgi apparatus → nucleus → ribosome', 'Lysosome → mitochondria → out of the cell', 'Vacuole → nucleus → rough ER'], why: 'Ribosomes on the rough ER build it, the Golgi packages it, and then it is shipped out.' },
        { q: 'Which organelle is NOT matched with its correct job?', c: ['Lysosome — builds proteins', 'Nucleus — holds the DNA', 'Golgi apparatus — packages and ships', 'Smooth ER — makes lipids'], why: 'Lysosomes break down waste. Ribosomes are the ones that build proteins.' },
        { q: 'A cell makes lots of fats (lipids). Which organelle would it have a lot of?', c: ['Smooth ER', 'Rough ER', 'Lysosomes', 'Vacuoles'], why: 'Smooth ER is the lipid maker.' },
        { q: 'What does the word "organelle" mean?', c: ['"Little organ": a part inside a cell with a job', 'A whole organ, like the heart', 'A group of cells working together', 'A type of tissue'], why: 'Organelles are tiny working parts inside a cell, like organs are working parts of a body.' },
        { q: 'The instructions for a protein are stored in the nucleus. Where is the protein actually built?', c: ['On ribosomes', 'Inside the nucleus itself', 'In the vacuole', 'In a lysosome'], why: 'The nucleus holds the plans, but ribosomes are the factories that build the protein.' },
        { q: 'ATP is best described as…', c: ['the cell\'s energy "money"', 'a type of DNA', 'a protein factory', 'a storage sac for water'], why: 'Cells spend ATP to do work, like you spend money. Mitochondria make it.' },
        { q: 'A student says, "The Golgi apparatus makes the cell\'s energy." What is the mistake?', c: ['Mitochondria make the energy; the Golgi packages and ships', 'The nucleus makes the energy; the Golgi stores water', 'The Golgi makes DNA, not energy', 'There is no mistake'], why: 'The Golgi is the post office. The power plant is the mitochondria.' },
        { q: 'A white blood cell swallows germs and must break them down. Which organelle would it need a lot of?', c: ['Lysosomes', 'Chloroplasts', 'Smooth ER', 'Vacuoles'], why: 'Lysosomes break things down, so they can destroy the swallowed germs.' },
        { q: 'Which two organelles work together to make proteins?', c: ['Ribosomes and rough ER', 'Lysosomes and vacuoles', 'Smooth ER and vacuoles', 'Cell membrane and cytoplasm'], why: 'Ribosomes build proteins, and many of them sit on the rough ER.' },
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
        { q: 'A cell has a nucleus, mitochondria, and small vacuoles, but no cell wall and no chloroplasts. It most likely came from…', c: ['an animal', 'a plant leaf', 'a tree trunk', 'a blade of grass'], why: 'No wall and no chloroplasts means it is an animal cell.' },
        { q: 'You look at a cheek cell from inside your mouth under a microscope. Which part will you NOT see?', c: ['A cell wall', 'A nucleus', 'A cell membrane', 'Cytoplasm'], why: 'Cheek cells are animal cells. Animal cells have no cell wall.' },
        { q: 'Root cells grow underground in the dark. Which part would they most likely NOT have?', c: ['Chloroplasts', 'Mitochondria', 'A nucleus', 'A cell wall'], why: 'There\'s no light underground for photosynthesis, so root cells don\'t need chloroplasts. They still need mitochondria for energy.' },
        { q: 'A plant cell has a cell wall. Does it also have a cell membrane?', c: ['Yes — the membrane is just inside the wall', 'No — the wall replaces the membrane', 'Only in the roots', 'Only when it is dividing'], why: 'Plant cells have both. The wall gives support, and the membrane controls what goes in and out.' },
        { q: 'The sugar in a plant cell holds energy. Where did that energy first come from?', c: ['Sunlight captured by chloroplasts', 'Heat made by the cell wall', 'Water stored in the vacuole', 'Centrioles dividing the cell'], why: 'Chloroplasts catch sunlight and store its energy in sugar during photosynthesis.' },
        { q: 'Celery is crunchy mostly because of…', c: ['strong cell walls and vacuoles full of water', 'chloroplasts full of chlorophyll', 'lots of centrioles', 'lots of mitochondria'], why: 'Stiff walls plus water-filled vacuoles make plant cells firm and crisp.' },
        { q: 'Limp lettuce is put in cold water and gets crisp again. Why?', c: ['Water moves back into its vacuoles', 'The cold builds new cell walls', 'Its chloroplasts soak up the cold', 'It grows new nuclei'], why: 'As the vacuoles refill with water, they push on the walls and the leaf firms up.' },
        { q: 'Which list has ONLY parts that both plant and animal cells have?', c: ['Nucleus, ribosomes, mitochondria', 'Cell wall, nucleus, ribosomes', 'Chloroplasts, mitochondria, Golgi apparatus', 'Centrioles, cell wall, ER'], why: 'Cell walls and chloroplasts are plant-only, and centrioles are mostly animal-only.' },
        { q: 'A cell has chloroplasts. What can it do that an animal cell can\'t?', c: ['Make its own food from sunlight', 'Turn food into energy', 'Divide into two cells', 'Store DNA in a nucleus'], why: 'Chloroplasts do photosynthesis. Animal cells must get food by eating.' },
        { q: 'A plant cell\'s large central vacuole is most like a…', c: ['water tank', 'power plant', 'post office', 'recycling truck'], why: 'It holds lots of water, which keeps the plant firm.' },
        { q: 'Mushrooms can\'t make food from sunlight. Which part do their cells NOT have?', c: ['Chloroplasts', 'A nucleus', 'Mitochondria', 'A cell membrane'], why: 'No photosynthesis means no chloroplasts. Mushrooms are still eukaryotes, with a nucleus and mitochondria.' },
        { q: 'Which organelle is usually much bigger in a plant cell than in an animal cell?', c: ['The vacuole', 'The nucleus', 'A ribosome', 'A mitochondrion'], why: 'Plant cells have one large central vacuole. Animal cell vacuoles are small.' },
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
        { q: 'A drawing of the membrane shows two rows of circles. Wavy lines from each circle point toward the middle. What are the wavy lines?', c: ['Hydrophobic tails', 'Hydrophilic heads', 'Channel proteins', 'Receptor proteins'], why: 'The tails are water-fearing, so they point inward, away from the water on both sides.' },
        { q: 'Which needs a protein doorway to get through the membrane?', c: ['A sodium ion (Na⁺), because it has a charge', 'Oxygen (O₂), because it is tiny', 'Carbon dioxide (CO₂), because it is tiny', 'Nothing ever needs a doorway'], why: 'Charged things like sodium ions can\'t slip between the fatty tails. They need protein channels or pumps.' },
        { q: 'Why can carbon dioxide (CO₂) leave a cell without any help?', c: ['It is small and has no charge', 'It is large and has a charge', 'The nucleus pushes it out', 'It breaks a hole in the membrane'], why: 'Small molecules with no charge slip right between the phospholipids.' },
        { q: 'What would happen if a cell membrane let everything through?', c: ['Harmful things could get in, and needed things could leak out', 'The cell would get stronger', 'The cell would make more ATP', 'Nothing would change'], why: 'Being selectively permeable protects the cell by keeping the right things in and the wrong things out.' },
        { q: 'Membrane proteins can drift sideways, like boats floating on a lake. Which idea does this describe?', c: ['The fluid mosaic model', 'The lock and key model', 'The cell theory', 'Osmosis'], why: 'Fluid means the pieces move around. Mosaic means it is made of many different pieces.' },
        { q: 'Soap helps get rid of many germs because it…', c: ['breaks apart their fatty membranes', 'feeds them sugar', 'gives them a cell wall', 'turns them into viruses'], why: 'Many germ membranes are made of fats. Soap can break them apart.' },
        { q: 'Which is NOT a type of membrane protein from this lesson?', c: ['Chloroplast', 'Channel', 'Pump', 'Receptor'], why: 'A chloroplast is an organelle in plant cells. Channels, pumps, and receptors sit in the membrane.' },
        { q: 'If a membrane had no cholesterol, it would most likely…', c: ['get too floppy and fluid', 'turn hard as a rock', 'make extra DNA', 'stop letting oxygen in'], why: 'Cholesterol keeps the membrane steady, so it doesn\'t get too floppy.' },
        { q: 'Oil and water don\'t mix. Which part of the membrane acts most like oil?', c: ['The tails in the middle', 'The heads on the outside', 'The water around the cell', 'The channel proteins'], why: 'The tails are fatty and hydrophobic. Like oil, they stay away from water.' },
        { q: 'A cell needs to take in a lot of glucose quickly. What would help most?', c: ['More glucose transport proteins in its membrane', 'A thicker layer of phospholipids', 'Less cholesterol', 'A bigger nucleus'], why: 'Glucose needs protein doorways. More doorways let more glucose in.' },
        { q: 'Why is the membrane called a "bilayer"?', c: ['"Bi" means two: it has two layers of phospholipids', 'It is made of two cells', 'It surrounds two nuclei', 'It has exactly two proteins'], why: 'Bi means two, like a bicycle has two wheels. The membrane is two layers thick.' },
        { q: 'A cell\'s receptor proteins are blocked. What problem would it have?', c: ['It could not pick up messages from other cells', 'It could not make ATP', 'It would lose its DNA', 'Its membrane would turn into a cell wall'], why: 'Receptors catch signals, like hormones. Blocked receptors mean missed messages.' },
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
        { q: 'A drop of food coloring is put into a glass of still water. What happens over time?', c: ['It spreads out until the color is even', 'It stays in one spot forever', 'It shrinks into a smaller drop', 'It moves to one side of the glass'], why: 'Diffusion: the color molecules spread from where there are a lot to where there are few.' },
        { q: 'A cell is 5% salt inside. The water around it is 1% salt. Which way does water move?', c: ['Into the cell', 'Out of the cell', 'No movement at all', 'Only the salt moves, not the water'], why: 'Water moves toward the saltier side. Here the inside is saltier, so water goes in.' },
        { q: 'A cell is 1% sugar inside and sits in 10% sugar water. What is the water outside called?', c: ['Hypertonic', 'Hypotonic', 'Isotonic', 'Facilitated'], why: 'Hypertonic means more dissolved stuff outside than inside. Water will leave the cell.' },
        { q: 'Which is NOT an example of passive transport?', c: ['A pump using ATP to push sodium out', 'Oxygen diffusing into a cell', 'Water moving in by osmosis', 'Glucose moving through a protein from high to low'], why: 'Passive transport uses no energy. A pump that uses ATP is active transport.' },
        { q: 'Seawater is saltier than your cells. What happens if a stranded sailor drinks it?', c: ['Water is pulled out of the body\'s cells', 'Extra water rushes into the cells', 'Nothing happens to the cells', 'The cells get extra energy'], why: 'Seawater is hypertonic, so osmosis pulls water out of cells. The sailor gets more dehydrated.' },
        { q: 'Oxygen is high in the air sacs of your lungs and low in your blood. Which way does it move?', c: ['From the lungs into the blood', 'From the blood into the lungs', 'It stays where it is', 'Only when you hold your breath'], why: 'Diffusion moves oxygen from high concentration (lungs) to low concentration (blood).' },
        { q: 'Carbon dioxide (CO₂) builds up inside a busy cell. Where does it go?', c: ['Out of the cell, from high to low concentration', 'Deeper into the cell', 'Into the nucleus for storage', 'It can\'t leave without ATP'], why: 'CO₂ is higher inside, so it diffuses out with no energy needed.' },
        { q: 'Raisins left in water overnight get plump. Why?', c: ['Water moved into the raisins by osmosis', 'Sugar moved in from the water', 'The raisins grew new cells', 'Air bubbles got trapped inside'], why: 'Raisins are full of sugar, so the water outside is hypotonic. Water moves in.' },
        { q: 'A membrane lets water through but not sugar. Side A has strong sugar water. Side B has pure water. What happens?', c: ['Water moves from side B to side A', 'Water moves from side A to side B', 'Sugar moves from side A to side B', 'Nothing moves at all'], why: 'Water moves toward the side with more dissolved sugar. Sugar can\'t cross this membrane.' },
        { q: 'A wilted plant is watered and stands up again. Water moved into its cells by…', c: ['osmosis', 'active transport', 'exocytosis', 'photosynthesis'], why: 'Osmosis moves water into the cells. Full vacuoles push on the walls and the plant firms up.' },
        { q: 'Air freshener is sprayed in one corner. Soon the whole room smells. Where was the smell strongest at first?', c: ['Near the corner where it was sprayed', 'Everywhere in the room equally', 'At the far side of the room', 'Outside the room'], why: 'Molecules start crowded near the spray, then diffuse out to where there are fewer.' },
        { q: 'Your blood cells are about 0.9% salt. Which IV fluid would be isotonic for them?', c: ['0.9% salt water', 'Pure water', '10% salt water', '5% salt water'], why: 'Isotonic means equal. Same salt level inside and out means no overall water movement.' },
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
        { q: 'A root cell takes in minerals even though there are already more minerals inside the root than in the soil. What kind of transport is this?', c: ['Active transport', 'Diffusion', 'Osmosis', 'Facilitated diffusion'], why: 'Moving from low (soil) to high (root) is uphill. That takes energy, so it is active transport.' },
        { q: 'A cell runs out of ATP. Which process would stop?', c: ['The sodium-potassium pump', 'Oxygen diffusing into the cell', 'Water moving by osmosis', 'CO₂ diffusing out of the cell'], why: 'Pumps need ATP. Diffusion and osmosis are passive, so they keep going.' },
        { q: 'Each time the sodium-potassium pump works, how many ions does it move in total?', c: ['5', '3', '2', '6'], why: '3 sodium out + 2 potassium in = 5 ions.' },
        { q: 'The sodium-potassium pump keeps pushing sodium out. Where does sodium end up more concentrated?', c: ['Outside the cell', 'Inside the cell', 'Equal inside and outside', 'Inside the nucleus'], why: 'The pump keeps sending Na⁺ out, so it builds up outside the cell.' },
        { q: 'Which is an example of exocytosis?', c: ['A nerve cell releasing chemical messages in vesicles', 'A white blood cell swallowing a germ', 'Oxygen entering a cell', 'A cell taking in drops of liquid'], why: 'Exocytosis ships things out in vesicles. Swallowing and taking in liquid are endocytosis.' },
        { q: 'Which statement about active transport is NOT true?', c: ['It moves things from high to low with no energy', 'It uses ATP', 'It can move things from low to high concentration', 'It often uses protein pumps'], why: 'Moving high to low with no energy is passive transport. Active transport needs energy.' },
        { q: 'A white blood cell wraps its membrane around a bacterium and pulls it in. Which bigger group of processes is this part of?', c: ['Endocytosis', 'Exocytosis', 'Osmosis', 'Diffusion'], why: 'Phagocytosis is one kind of endocytosis: bringing things IN by wrapping the membrane around them.' },
        { q: 'Why do cells need bulk transport like endocytosis?', c: ['Some things are too big to fit through protein pumps or channels', 'Small molecules can\'t cross the membrane', 'Bulk transport needs no energy', 'It is the only way water gets in'], why: 'Big things like bacteria must be wrapped in membrane to be moved in or out.' },
        { q: 'During endocytosis, what forms around the material being taken in?', c: ['A vesicle made from the cell membrane', 'A new cell wall', 'A new nucleus', 'A chloroplast'], why: 'The membrane folds around the material and pinches off as a vesicle (bubble) inside the cell.' },
        { q: 'Your brain uses a lot of energy. One reason is that…', c: ['its nerve cells run many sodium-potassium pumps', 'it does photosynthesis', 'it stores most of your fat', 'it has no mitochondria'], why: 'Nerves need pumps to send signals, and every pump uses ATP.' },
        { q: 'Glucose is high outside a cell and low inside. It moves in through a protein, with no ATP used. This is…', c: ['facilitated diffusion (passive)', 'active transport', 'exocytosis', 'phagocytosis'], why: 'High to low with a protein helper and no energy is facilitated diffusion.' },
        { q: 'A cell already has more potassium inside than outside. To bring in even more, it must…', c: ['use energy (ATP)', 'wait for diffusion', 'use osmosis', 'shrink its membrane'], why: 'Moving potassium from low to high concentration is uphill, so it takes energy.' },
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
        { q: 'Bread, rice, and pasta are rich in which biomolecule?', c: ['Carbohydrates', 'Lipids', 'Nucleic acids', 'Proteins'], why: 'Bread, rice, and pasta are full of starch, which is a carbohydrate.' },
        { q: 'Hair and muscles are made mostly of…', c: ['proteins', 'carbohydrates', 'lipids', 'nucleic acids'], why: 'Proteins build body parts like muscle and hair.' },
        { q: 'A bear eats a lot before winter and stores energy that lasts for months. What does it store?', c: ['Lipids (fat)', 'Nucleic acids', 'Proteins', 'Vitamins'], why: 'Lipids store long-term energy. Bears live off their fat through the winter.' },
        { q: 'Which biomolecule makes up most of the cell membrane?', c: ['Lipids', 'Carbohydrates', 'Nucleic acids', 'Vitamins'], why: 'The membrane is a double layer of phospholipids, which are lipids.' },
        { q: 'Lactase is an enzyme that breaks down lactose (milk sugar). In this reaction, lactose is the…', c: ['substrate', 'enzyme', 'amino acid', 'nucleotide'], why: 'The substrate is the molecule an enzyme works on. Lactase works on lactose.' },
        { q: 'An enzyme is boiled, cooled, and then mixed with its substrate. What happens?', c: ['Little or no reaction, because the enzyme denatured', 'The reaction goes much faster', 'The enzyme makes new substrate', 'The enzyme turns into a lipid'], why: 'High heat changes the enzyme\'s shape. Once denatured, it no longer fits its substrate.' },
        { q: 'An enzyme that breaks down proteins is mixed with fat. What happens?', c: ['Almost nothing, because fat doesn\'t fit that enzyme', 'The fat breaks down quickly', 'The fat turns into protein', 'The enzyme turns into fat'], why: 'Each enzyme fits only its own substrate. Fat is the wrong "key" for a protein enzyme.' },
        { q: 'Meat tenderizer powder makes meat softer because its enzymes…', c: ['break down meat proteins', 'add fat to the meat', 'turn proteins into DNA', 'heat the meat up'], why: 'Enzymes in the powder break down proteins in the meat, so it gets softer.' },
        { q: 'Which is NOT one of the four main biomolecules?', c: ['Water', 'Proteins', 'Lipids', 'Nucleic acids'], why: 'The four are carbohydrates, lipids, proteins, and nucleic acids. Water is important, but it isn\'t one of them.' },
        { q: 'Which biomolecule and building block are matched correctly?', c: ['Carbohydrates — simple sugars', 'Proteins — nucleotides', 'Nucleic acids — amino acids', 'Lipids — nucleotides'], why: 'Carbohydrates are built from simple sugars (monosaccharides) like glucose.' },
        { q: 'An enzyme from the stomach works best in strong acid. If it is moved to a place with no acid, it will…', c: ['work poorly, because the pH is wrong', 'work much faster', 'turn into a carbohydrate', 'get used up right away'], why: 'The wrong pH can change an enzyme\'s shape, so it stops working well.' },
        { q: 'If you chew plain bread for a long time, it starts to taste sweet. Why?', c: ['An enzyme in spit breaks starch into sugar', 'The bread turns into fat', 'Your teeth add sugar to it', 'Proteins in the bread turn into DNA'], why: 'Amylase in spit breaks starch, a carbohydrate, into sugar you can taste.' },
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
