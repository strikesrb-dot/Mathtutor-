// Unit 3 — The cell cycle and differentiation. NJ: HS-LS1-4
// Follows Khan Academy's NGSS high school biology, Unit 3.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
export default {
  id: 'b03', n: 3, title: 'The cell cycle and differentiation', nj: ['HS-LS1-4'],
  lessons: [
    {
      key: 'b03-01',
      title: 'The cell cycle',
      videos: [
        { id: 'Lo2GHUWwnAc', title: 'The cell cycle' },
        { id: 'VXLSTd_dlKg', title: 'Interphase' },
      ],
      learn: `
        <p>You didn't stay baby-sized, and your skin doesn't wear out. That's because new cells come from old cells <b>dividing</b> (splitting into two). Cells divide for 3 main reasons:</p>
        <ul><li><b>Growth</b>: you get bigger by making more cells, not giant cells.</li>
        <li><b>Repair</b>: new cells fill in a cut or a broken bone.</li>
        <li><b>Replacement</b>: worn-out cells, like old skin cells, get swapped for new ones.</li></ul>
        <p>A cell can't just grow bigger forever. A huge cell couldn't move food in and waste out through its <b>membrane</b> (its outer skin) fast enough. So it divides instead.</p>
        <p>The <b>cell cycle</b> (the life of a cell from one division to the next) has two big parts:</p>
        <p><b>1. Interphase</b> (the "getting ready" part). A cell spends most of its life here. It has 3 phases, in this order:</p>
        <ul><li><b>G1</b> (first gap): the cell grows and does its normal job.</li>
        <li><b>S</b> (synthesis, which means "making"): the cell makes a full copy of its <b>DNA</b> (the cell's instructions).</li>
        <li><b>G2</b> (second gap): the cell grows a little more and gets ready to divide.</li></ul>
        <p><b>2. M phase</b> (mitotic phase): the cell splits its copied DNA into two equal sets (<b>mitosis</b>). Then it splits into two cells (<b>cytokinesis</b>).</p>
        <p>Some cells, like most nerve cells, stop dividing. They rest in a phase called <b>G0</b> ("G-zero").</p>`,
      quiz: [
        { q: 'What are the two main parts of the cell cycle?', c: ['Interphase and the M (mitotic) phase', 'Growth and death', 'Photosynthesis and respiration', 'Prophase and telophase'], why: 'Interphase is the getting-ready part. The M phase is when the cell actually divides.' },
        { q: 'During which phase does the cell copy its DNA?', c: ['S phase', 'G1 phase', 'G2 phase', 'Cytokinesis'], why: 'S stands for synthesis, which means "making." The cell makes a full copy of its DNA.' },
        { q: 'Where does a cell spend most of its life?', c: ['Interphase', 'Mitosis', 'Cytokinesis', 'The M phase'], why: 'Most of a cell\'s time goes to growing, working, and getting ready. Dividing is quick.' },
        { q: 'What happens during G1?', c: ['The cell grows and does its normal job', 'The cell copies its DNA', 'The cell splits into two cells', 'The cell splits its DNA into two sets'], why: 'G1 is the first gap: the cell grows and does its everyday work.' },
        { q: 'What is the correct order of the phases of interphase?', c: ['G1 → S → G2', 'S → G1 → G2', 'G2 → S → G1', 'G1 → G2 → S'], why: 'Grow first (G1), copy the DNA (S), then get ready to divide (G2).' },
        { q: 'How does your body mainly grow bigger?', c: ['By making more cells', 'By making each cell much bigger', 'By stretching the cells it already has', 'By adding more DNA to each cell'], why: 'You grow by adding more cells through division, not by blowing cells up to giant sizes.' },
        { q: 'A scraped knee heals with new skin. Which reason for cell division is this?', c: ['Repair', 'Growth', 'Copying DNA', 'Resting in G0'], why: 'Cells near the scrape divide to make new skin and close the gap.' },
        { q: 'Why does a cell copy its DNA before it divides?', c: ['So each new cell gets a full set of instructions', 'So the cell can grow bigger', 'So the cell can make its own food', 'So the old cell can keep two sets forever'], why: 'Both new cells need the complete set of DNA instructions to do their jobs.' },
        { q: 'What happens during G2?', c: ['The cell grows a little more and gets ready to divide', 'The cell copies its DNA', 'The cell splits its cytoplasm', 'The cell stops dividing forever'], why: 'G2 is the second gap: the last bit of growing and getting ready before mitosis.' },
        { q: 'The M phase is made of which two steps?', c: ['Mitosis and cytokinesis', 'G1 and G2', 'G1 and the S phase', 'Interphase and G0'], why: 'Mitosis splits the copied DNA. Cytokinesis splits the rest of the cell.' },
        { q: 'Most nerve cells in an adult no longer divide. Which phase are they in?', c: ['G0', 'S', 'G2', 'Mitosis'], why: 'G0 is a resting phase. The cell keeps working but no longer gets ready to divide.' },
        { q: 'Why can\'t a cell just keep growing bigger forever?', c: ['A huge cell couldn\'t move food in and waste out fast enough', 'The cell would run out of DNA', 'Its membrane would turn into a cell wall', 'Only bacteria are allowed to be big'], why: 'As a cell grows, its inside grows faster than its outer membrane. Dividing keeps cells small enough to work.' },
      ],
      realLife: {
        text: `<p>Your body runs the cell cycle all day. The cells lining your intestines wear out fast, so they're replaced every few days. Your skin makes new cells underneath while dead ones flake off the top.</p>
          <p>Your hair and nails grow because cells at their roots keep dividing. When a broken arm heals, bone cells divide to fill the crack.</p>
          <p>Some cells, like most nerve cells, rest in G0 and almost never divide. Your body has to keep those cells healthy for a lifetime.</p>`,
        prompt: 'Think of two things that happened to your body this year, like growing taller or healing a cut. For each one, explain how the cell cycle made it happen.',
      },
    },
    {
      key: 'b03-02',
      title: 'Mitosis and cytokinesis',
      videos: [
        { id: 'ShEzlXZPpPM', title: 'Mitosis' },
        { id: 'L0k-enzoeOM', title: 'Mitosis: splitting up is complicated' },
      ],
      learn: `
        <p><b>Mitosis</b> (splitting the copied DNA into two equal sets) has 4 phases. Remember them with <b>PMAT</b>:</p>
        <ol><li><b>Prophase</b>: the DNA coils up into thick <b>chromosomes</b> (tightly packed bundles of DNA). Each one looks like an X: two identical copies, called <b>sister chromatids</b>, joined in the middle. The nucleus breaks open, and <b>spindle fibers</b> (thin ropes made of protein) start to form.</li>
        <li><b>Metaphase</b>: the chromosomes line up in the <b>middle</b> of the cell. (M = middle.)</li>
        <li><b>Anaphase</b>: the spindle fibers pull the sister chromatids <b>apart</b> to opposite ends of the cell. (A = apart.)</li>
        <li><b>Telophase</b>: a new nucleus forms around each set of chromosomes. Now there are <b>two</b> nuclei. (T = two.)</li></ol>
        <p>Next comes <b>cytokinesis</b> (splitting the cytoplasm, the jelly inside the cell, into two). In animal cells, the membrane pinches in the middle, like a belt pulled tight. In plant cells, a <b>cell plate</b> (a new wall) forms down the middle, because a stiff cell wall can't pinch.</p>
        <p>The result: two <b>daughter cells</b> (the new cells). They are <b>identical</b> to each other and to the parent cell, with the same DNA and the same number of chromosomes. A human body cell has 46 chromosomes, so each daughter cell gets 46 too.</p>`,
      quiz: [
        { q: 'What is the correct order of the phases of mitosis?', c: ['Prophase → metaphase → anaphase → telophase', 'Metaphase → prophase → telophase → anaphase', 'Anaphase → metaphase → prophase → telophase', 'Prophase → anaphase → metaphase → telophase'], why: 'Remember PMAT: Prophase, Metaphase, Anaphase, Telophase.' },
        { q: 'In which phase do the chromosomes line up in the middle of the cell?', c: ['Metaphase', 'Prophase', 'Anaphase', 'Telophase'], why: 'M for middle: in metaphase, the chromosomes line up across the center.' },
        { q: 'In which phase are the sister chromatids pulled apart?', c: ['Anaphase', 'Metaphase', 'Prophase', 'Telophase'], why: 'A for apart: spindle fibers pull the copies to opposite ends of the cell.' },
        { q: 'What happens during prophase?', c: ['The DNA coils into chromosomes and the nucleus breaks open', 'Two new nuclei form', 'The chromosomes line up in the middle', 'The cell copies its DNA'], why: 'Prophase is the setup: chromosomes become visible, the nucleus opens, and spindle fibers form.' },
        { q: 'In which phase do two new nuclei form?', c: ['Telophase', 'Prophase', 'Metaphase', 'Anaphase'], why: 'T for two: a new nucleus forms around each set of chromosomes.' },
        { q: 'What is cytokinesis?', c: ['Splitting the cytoplasm to make two separate cells', 'Copying the DNA', 'Lining up the chromosomes', 'Breaking open the nucleus'], why: 'Mitosis splits the DNA. Cytokinesis splits the rest of the cell.' },
        { q: 'A human skin cell has 46 chromosomes. After mitosis, how many does each daughter cell have?', c: ['46', '23', '92', '12'], why: 'Mitosis makes identical copies, so each daughter cell keeps the full 46.' },
        { q: 'How do the two daughter cells compare to the parent cell?', c: ['They have the same DNA as the parent cell', 'They have half the DNA of the parent cell', 'They have different DNA from each other', 'They have double the DNA of the parent cell'], why: 'Mitosis makes identical cells, like copy and paste.' },
        { q: 'What do spindle fibers do?', c: ['Pull the chromosomes to opposite ends of the cell', 'Copy the DNA', 'Make food for the cell', 'Form the new cell wall'], why: 'Spindle fibers are protein ropes. They hook onto chromosomes and pull the copies apart.' },
        { q: 'How is cytokinesis different in plant cells?', c: ['A cell plate forms down the middle', 'The membrane pinches in like a belt', 'Plant cells skip cytokinesis', 'The cell wall disappears for good'], why: 'A stiff cell wall can\'t pinch, so plant cells build a new wall, the cell plate, down the middle.' },
        { q: 'What are sister chromatids?', c: ['Two identical copies of a chromosome joined in the middle', 'Chromosomes from two different cells', 'A type of spindle fiber', 'The two halves of the nucleus'], why: 'After DNA is copied in the S phase, each chromosome is two identical copies joined into an X shape.' },
        { q: 'Start with 1 cell. Every cell divides by mitosis, 3 rounds in a row. How many cells are there at the end?', c: ['8', '6', '3', '9'], why: 'Each round doubles the number of cells: 1 → 2 → 4 → 8.' },
      ],
      realLife: {
        text: `<p>Mitosis is happening in your body right now, millions of times every second. After a haircut, cells at the root of each hair keep dividing, so your hair grows back. Your fingernails grow about 3 millimeters a month the same way.</p>
          <p>Gardeners use mitosis too. Cut a stem from a mint or pothos plant, put it in water, and it grows new roots. All the new cells come from mitosis, so the new plant has the <b>exact same DNA</b> as the old one. It's a <b>clone</b> (an identical copy).</p>`,
        prompt: 'If you cut a piece off a plant and grow a new plant from it, will the new plant have the same DNA as the old one? Explain using what you know about mitosis.',
      },
    },
    {
      key: 'b03-03',
      title: 'Regulation of the cell cycle and cancer',
      videos: [
        { id: 'QVCjdNxJreE', title: 'The cell cycle (and cancer)' },
        { id: 'BmFEoCFDi-w', title: 'How do cancer cells behave differently from healthy ones?' },
        { id: 'UopUxkeC4Ls', title: 'What is cancer?' },
      ],
      learn: `
        <p>Cells can't divide whenever they want. The cell cycle has <b>checkpoints</b> (stops where the cell checks that everything is OK before moving on), like security checks at an airport.</p>
        <ul><li><b>G1 checkpoint</b>: Is the cell big enough? Is its DNA healthy? Does the body need a new cell?</li>
        <li><b>G2 checkpoint</b>: Was all the DNA copied correctly?</li>
        <li><b>M checkpoint</b>: Is every chromosome hooked onto a spindle fiber?</li></ul>
        <p>Special <b>proteins</b> (molecules that do jobs in the cell) work like a car's gas pedal and brakes. Some say "go, divide." Others say "stop." Healthy cells also stop dividing when they get crowded. If a cell's DNA is too damaged to fix, the cell shuts itself down on purpose. This is called <b>apoptosis</b> (planned cell death).</p>
        <p><b>Cancer</b> is a disease where cells divide when they shouldn't. It starts with <b>mutations</b> (changes in the DNA) in the genes that control the cell cycle. The brakes stop working, so the cell ignores the checkpoints and keeps dividing. The extra cells can pile up into a lump called a <b>tumor</b>. A <b>benign</b> tumor stays in one place and is not cancer. A <b>malignant</b> tumor is cancer and can spread.</p>
        <p>Some mutations happen by chance when DNA is copied. Others are caused by things like cigarette smoke or too much sun. Doctors can treat many cancers, especially when they're found early.</p>`,
      quiz: [
        { q: 'What is a cell cycle checkpoint?', c: ['A stop where the cell checks that everything is OK before moving on', 'The moment the cell copies its DNA', 'A hole in the membrane where food gets in', 'The last phase of mitosis'], why: 'Checkpoints are like security checks. The cell only moves on if everything looks right.' },
        { q: 'At the G2 checkpoint, what does the cell mainly check?', c: ['That all the DNA was copied correctly', 'That the cytoplasm has split', 'That the cell has a cell wall', 'That the chromosomes have reached the ends of the cell'], why: 'G2 comes right after the DNA is copied, so the cell checks the copy before dividing.' },
        { q: 'At the M checkpoint, what does the cell check?', c: ['That every chromosome is hooked onto a spindle fiber', 'That the DNA has been copied', 'That the cell is big enough', 'That the nucleus has formed again'], why: 'Before pulling copies apart, the cell makes sure every chromosome is hooked up, so each new cell gets a full set.' },
        { q: 'A cell\'s DNA is badly damaged and can\'t be fixed. What does a healthy cell do?', c: ['Shuts itself down through apoptosis', 'Divides faster', 'Skips straight to mitosis', 'Copies the damaged DNA twice'], why: 'Apoptosis is planned cell death. It stops a damaged cell from making more damaged cells.' },
        { q: 'What is cancer?', c: ['A disease where cells divide out of control', 'A disease where cells stop dividing completely', 'A normal part of the S phase', 'A cell that has too many checkpoints'], why: 'In cancer, cells ignore the checkpoints and keep dividing when they shouldn\'t.' },
        { q: 'What does cancer start with?', c: ['Mutations in genes that control the cell cycle', 'Eating too much sugar in one day', 'Catching a cold', 'Cells resting in G0'], why: 'Cancer starts with changes in the DNA that break the cell\'s "stop" and "go" controls.' },
        { q: 'What is a tumor?', c: ['A lump of extra cells that kept dividing', 'A type of healthy organ', 'A single broken chromosome', 'A checkpoint protein'], why: 'When cells divide out of control, the extra cells can pile up into a lump called a tumor.' },
        { q: 'Which of these can damage skin cell DNA and raise the risk of skin cancer?', c: ['Getting sunburned again and again', 'Sweating during exercise', 'Washing with soap', 'Drinking cold water'], why: 'The sun\'s rays can damage the DNA in skin cells. Sunscreen and shade help protect it.' },
        { q: 'Healthy cells stop dividing when they get crowded. What do cancer cells do?', c: ['Keep dividing and pile up on each other', 'Stop dividing even sooner', 'Turn into stem cells', 'Shrink and disappear'], why: 'Cancer cells ignore the "stop" signals from their neighbors, so they keep piling up.' },
        { q: 'Some proteins tell a cell to divide and others tell it to stop. What often goes wrong in cancer?', c: ['The "stop" signals don\'t work, so the cell keeps dividing', 'The cell makes too many "stop" signals', 'The cell loses all of its DNA', 'The cell turns into a bacterium'], why: 'Mutations can break the brakes. Without working "stop" signals, division runs out of control.' },
        { q: 'What is the difference between a benign and a malignant tumor?', c: ['A malignant tumor can spread, but a benign tumor stays in one place', 'A benign tumor can spread, but a malignant tumor stays in one place', 'A benign tumor is made of bacteria', 'A malignant tumor is made of healthy cells'], why: 'Malignant tumors are cancer and can spread. Benign tumors stay put and are not cancer.' },
        { q: 'Why is it important for a cell to check its DNA before dividing?', c: ['So mistakes aren\'t passed on to the new cells', 'So the cell can grow a cell wall', 'So the cell can make more chloroplasts', 'So the cell can divide faster'], why: 'Each new cell gets a copy of the DNA. Catching mistakes early keeps them from spreading.' },
      ],
      realLife: {
        text: `<p>Everyday choices help protect your cells' DNA. <b>Sunscreen</b>, hats, and shade block the sun's rays that can damage skin cells. Staying away from <b>cigarettes and vaping</b> keeps harmful chemicals away from your lung cells.</p>
          <p>Doctors also look for problems early, when they're easiest to treat. For example, a doctor will check a mole that changes shape or color.</p>
          <p>Many cancer treatments use what you learned today. <b>Chemotherapy</b> (strong medicine that targets fast-dividing cells) works by stopping the cell cycle in fast-dividing cells. That's why it can also make hair fall out.</p>`,
        prompt: 'A younger kid asks you why they should wear sunscreen at the beach. Explain it to them using what you learned about DNA, mutations, and cell cycle checkpoints.',
      },
    },
    {
      key: 'b03-04',
      title: 'Fertilization, growth, and cell differentiation',
      videos: [
        { id: 'q2CSqC_waE8', title: 'Cell division and organism growth' },
        { id: 'TdZr_ucEhgo', title: 'Cell specialization' },
        { id: 'jOBRupYkyaw', title: 'Stem cells and differentiation' },
      ],
      learn: `
        <p>Every person started as just <b>one cell</b>. In <b>fertilization</b>, a sperm cell and an egg cell join to form a <b>zygote</b> (the very first cell of a new living thing).</p>
        <p>The zygote divides by <b>mitosis</b> again and again: 1 cell becomes 2, then 4, then 8, and on and on. An adult has about 30 trillion cells, and almost every one has the <b>same DNA</b> as that first cell.</p>
        <p>So why isn't your body one big blob of the same cell? Because of <b>differentiation</b> (a cell becoming one special type, like a muscle cell or a nerve cell). Every cell has all the <b>genes</b> (sections of DNA with instructions), but each type turns <b>on</b> only the genes it needs and keeps the rest <b>off</b>. A muscle cell uses muscle genes. A skin cell uses skin genes.</p>
        <p><b>Stem cells</b> (cells that haven't picked a job yet) can divide and turn into other types of cells.</p>
        <ul><li><b>Embryonic stem cells</b> come from an <b>embryo</b> (the tiny ball of cells a zygote grows into). They can become almost any type of cell.</li>
        <li><b>Adult stem cells</b> live in places like your skin, gut, and <b>bone marrow</b> (the soft center of some bones). They make only a few related types and replace worn-out cells.</li></ul>
        <p>Once most cells differentiate, they stay that way. A nerve cell won't turn into a skin cell.</p>`,
      quiz: [
        { q: 'What is a zygote?', c: ['The first cell formed when a sperm cell and an egg cell join', 'A fully grown nerve cell', 'A type of tumor', 'A cell with no DNA'], why: 'Fertilization makes the zygote, the single cell that every person starts from.' },
        { q: 'How does a zygote become a body with trillions of cells?', c: ['It divides by mitosis again and again', 'It grows into one giant cell', 'It takes in new cells from food', 'Its cells stop dividing and just grow'], why: 'Mitosis doubles the number of cells over and over: 1, 2, 4, 8, and on and on.' },
        { q: 'A zygote divides 4 rounds in a row, and every cell divides each round. How many cells are there?', c: ['16', '8', '4', '32'], why: 'Each round doubles the number of cells: 1 → 2 → 4 → 8 → 16.' },
        { q: 'What is cell differentiation?', c: ['A cell becoming a special type with a certain job', 'A cell copying its DNA', 'A cell dividing into two identical cells', 'A cell shutting itself down on purpose'], why: 'Differentiation turns a general cell into a specific one, like a muscle, blood, or nerve cell.' },
        { q: 'Your muscle cells and skin cells have the same DNA. Why do they look and act so different?', c: ['Each cell type turns on different genes', 'They have totally different DNA', 'Muscle cells have more chromosomes', 'Skin cells have no genes'], why: 'Same instruction book, different pages. Each cell type only uses the genes for its own job.' },
        { q: 'What makes stem cells special?', c: ['They can divide and turn into other types of cells', 'They are already fully specialized', 'They can never divide', 'They are only found in plants'], why: 'Stem cells haven\'t picked a job yet, so they can become different kinds of cells.' },
        { q: 'Which stem cells can become almost any type of cell?', c: ['Embryonic stem cells', 'Adult skin stem cells', 'Red blood cells', 'Nerve cells'], why: 'Cells in a very early embryo haven\'t specialized at all, so they can become nearly anything.' },
        { q: 'Where are the adult stem cells that make your new blood cells?', c: ['Bone marrow', 'Heart muscle', 'Fingernails', 'Tooth enamel'], why: 'Bone marrow, the soft center of some bones, holds stem cells that make your blood cells.' },
        { q: 'A fully differentiated nerve cell usually…', c: ['stays a nerve cell and doesn\'t change type', 'turns into a skin cell when needed', 'goes back to being a zygote', 'turns back into a stem cell every night'], why: 'Most specialized cells are locked into their job. That\'s why stem cells are so valuable.' },
        { q: 'Which process gives every cell in an embryo the same DNA as the zygote?', c: ['Mitosis', 'Differentiation', 'Apoptosis', 'Photosynthesis'], why: 'Mitosis copies the DNA exactly, so every new cell gets the same set as the zygote.' },
        { q: 'Which order is correct?', c: ['Fertilization → zygote → many cells by mitosis → differentiation', 'Differentiation → zygote → fertilization → mitosis', 'Mitosis → fertilization → differentiation → zygote', 'Zygote → fertilization → differentiation → mitosis'], why: 'Fertilization makes the zygote. It divides many times, and then the cells specialize into different types.' },
        { q: 'The lining of your gut is replaced every few days. Which cells make the new lining cells?', c: ['Adult stem cells in the gut', 'Red blood cells', 'Nerve cells', 'Zygotes'], why: 'Stem cells under the gut lining keep dividing to replace the worn-out cells.' },
      ],
      realLife: {
        text: `<p>Think about how much you've grown. You started as one zygote, smaller than the period at the end of this sentence. Now you have about 30 trillion cells, built by mitosis and shaped by differentiation.</p>
          <p>Some animals use stem cells in amazing ways. A <b>salamander</b> can regrow a lost leg. A <b>planarian</b> (a tiny flatworm) cut into pieces can grow each piece into a whole new worm, because it has stem cells all over its body.</p>
          <p>You can't regrow a leg, but your stem cells still replace your skin, your blood, and the lining of your gut.</p>`,
        prompt: 'You started as one cell, and now you have trillions of cells of many different kinds. Explain how one cell turned into all the different cells in your body.',
      },
    },
  ],
};
