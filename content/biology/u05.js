// Unit 5 — Gene expression and regulation. NJ: HS-LS1-1, HS-LS3-1, HS-LS3-2
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.

export default {
  id: 'b05', n: 5, title: 'Gene expression and regulation', nj: ['HS-LS1-1', 'HS-LS3-1', 'HS-LS3-2'],
  lessons: [
    {
      key: 'b05-01',
      title: 'Genes, proteins, and traits',
      videos: [
        { id: '8m6hHRlKwxY', title: 'DNA, chromosomes, genes, and traits: an intro to heredity' },
        { id: '_iVu3g_S05I', title: 'Genes, proteins, and cells' },
        { id: 'aeAL6xThfL8', title: 'DNA: the book of you' },
      ],
      learn: `
        <p>Your body runs on instructions. Here is the chain, from small to big:</p>
        <p><b>DNA → genes → proteins → traits</b></p>
        <ul><li><b>DNA</b> (the molecule that holds the instructions for building and running a living thing) is packed into <b>chromosomes</b> (long, tightly coiled strands of DNA). Most of your cells have 46 chromosomes in 23 pairs: one of each pair from your mom and one from your dad.</li>
        <li>A <b>gene</b> (a section of DNA with the instructions for making one protein) is like one recipe in a giant cookbook. You have about 20,000 genes.</li>
        <li>A <b>protein</b> (a molecule built from a chain of <b>amino acids</b>, small building blocks) does the actual work. Some proteins are <b>enzymes</b> (proteins that speed up chemical reactions). Others build hair and muscle, or carry oxygen in your blood.</li>
        <li>A <b>trait</b> (a feature of a living thing, like eye color or height) shows up because of what your proteins do.</li></ul>
        <p><b>Example:</b> one gene holds the recipe for an enzyme that makes <b>melanin</b> (the dark pigment, or coloring, in skin, hair, and eyes). If that gene is broken, no melanin is made, and the person has very light skin and hair.</p>
        <p>Different versions of the same gene are called <b>alleles</b>. That's one reason people have different traits. The <b>environment</b> (things around you, like food and sunlight) can change traits too.</p>`,
      quiz: [
        { q: 'Which order is correct?', c: ['DNA → gene → protein → trait', 'Trait → protein → gene → DNA', 'Protein → DNA → trait → gene', 'Gene → trait → DNA → protein'], why: 'DNA holds genes, genes are recipes for proteins, and proteins do the work that shows up as traits.' },
        { q: 'What is a gene?', c: ['A section of DNA with instructions for making a protein', 'A whole chromosome', 'A type of cell', 'A protein that speeds up reactions'], why: 'A gene is one "recipe" inside the long DNA "cookbook."' },
        { q: 'What are proteins made of?', c: ['Chains of amino acids', 'Chains of chromosomes', 'Chains of fats', 'Chains of cells'], why: 'Amino acids link up in a chain, and the chain folds into a protein\'s shape.' },
        { q: 'How many chromosomes do most human body cells have?', c: ['46 (23 pairs)', '23 (no pairs)', '20,000', '2'], why: 'You get 23 chromosomes from your mom and 23 from your dad. That makes 46.' },
        { q: 'Which of these is an example of a trait?', c: ['Eye color', 'A ribosome', 'An amino acid', 'A chromosome'], why: 'A trait is a feature you can observe, like eye color, height, or hair texture.' },
        { q: 'An enzyme is a…', c: ['protein that speeds up a chemical reaction', 'gene that controls eye color', 'type of chromosome', 'sugar that stores energy'], why: 'Enzymes are proteins. They make reactions in your cells happen much faster.' },
        { q: 'A person has a broken gene for the enzyme that makes melanin. What trait would you expect?', c: ['Very light skin and hair', 'Extra-dark skin and hair', 'Being taller than average', 'No change at all'], why: 'No working enzyme means no melanin pigment, so skin and hair are very light. This is called albinism.' },
        { q: 'What are alleles?', c: ['Different versions of the same gene', 'Two chromosomes stuck together', 'Proteins that carry oxygen', 'Parts of a cell that make energy'], why: 'Alleles are like different versions of one recipe, such as chocolate chip vs. oatmeal cookies.' },
        { q: 'Where are your genes found?', c: ['On chromosomes, inside the nucleus', 'In the cell membrane', 'In your blood only', 'In the proteins you eat'], why: 'Genes are sections of DNA, and DNA is packed into chromosomes in the nucleus.' },
        { q: 'Hemoglobin is a protein in red blood cells. What does it do?', c: ['Carries oxygen around the body', 'Stores the instructions for traits', 'Copies DNA', 'Makes chromosomes'], why: 'Hemoglobin grabs oxygen in the lungs and drops it off around the body. It\'s a protein doing a job.' },
        { q: 'Identical twins have the same DNA. One twin eats much healthier food growing up and ends up taller. This shows that…', c: ['the environment can affect traits', 'genes change every day', 'twins never have the same DNA', 'food changes your chromosomes'], why: 'Genes set the plan, but things like food and sunlight can change how a trait turns out.' },
        { q: 'Why do proteins matter so much for traits?', c: ['Proteins do the work that builds and runs the body', 'Proteins are the instructions stored in DNA', 'Proteins are exactly the same in every person', 'Proteins are only used for energy'], why: 'DNA is the instructions. Proteins are the workers that follow them, and their work creates your traits.' },
      ],
      realLife: {
        text: `<p>Some people tan in the summer sun. Sunlight tells skin cells to make more <b>melanin</b>, and making melanin takes enzymes. Those enzymes are proteins built from your genes. Gene → protein → trait, happening right on your arms.</p>
          <p>Your hair is mostly <b>keratin</b> (a tough protein). Genes for keratin and for the shape of each hair's root help decide whether your hair grows straight or curly.</p>
          <p>Even a cat's fur color comes from genes for pigment-making proteins.</p>`,
        prompt: 'Pick one of your own traits, like your eye color or hair type. Explain how DNA, genes, and proteins work together to give you that trait.',
      },
    },
    {
      key: 'b05-02',
      title: 'DNA structure and replication',
      videos: [
        { id: 'hI4v7v8AdfI', title: 'Introduction to nucleic acids and nucleotides' },
        { id: 'Qqe4thU-os8', title: 'DNA replication' },
        { id: '0_b80fHmuWw', title: 'The twisting tale of DNA' },
      ],
      learn: `
        <p><b>DNA</b> is shaped like a <b>double helix</b> (a twisted ladder). It is built from <b>nucleotides</b> (small building blocks). Each nucleotide has 3 parts: a sugar, a phosphate (a small group of phosphorus and oxygen atoms), and a <b>base</b> (one of 4 chemical "letters").</p>
        <ul><li>The <b>sides</b> of the ladder are sugar and phosphate, repeating.</li>
        <li>The <b>rungs</b> are pairs of bases held together by weak bonds.</li></ul>
        <p><b>The 4 bases:</b> A (adenine), T (thymine), C (cytosine), and G (guanine). They pair up the same way every time: <b>A with T</b> and <b>C with G</b>. This is called <b>base pairing</b>. If one side reads ATTGCA, the other side must read TAACGT.</p>
        <p><b>DNA replication</b> (copying DNA) happens before a cell divides, so each new cell gets a full copy:</p>
        <ol><li><b>Helicase</b> (an enzyme that unzips DNA) splits the ladder down the middle.</li>
        <li>Each old side is used as a pattern. <b>DNA polymerase</b> (an enzyme that builds DNA) adds matching nucleotides: A across from T, C across from G.</li>
        <li>You end up with 2 DNA molecules. Each has <b>one old strand and one new strand</b>. This is called <b>semi-conservative</b> (half-saved) copying.</li></ol>
        <p>Watson and Crick described the double helix in 1953, using Rosalind Franklin's X-ray photo of DNA.</p>`,
      quiz: [
        { q: 'What shape is DNA?', c: ['A double helix (twisted ladder)', 'A single straight line', 'A ball of protein', 'A flat sheet'], why: 'Two strands twist around each other like a twisted ladder or a spiral staircase.' },
        { q: 'In DNA, A always pairs with…', c: ['T', 'G', 'C', 'U'], why: 'The rule is A with T, and C with G. U is only found in RNA.' },
        { q: 'In DNA, C always pairs with…', c: ['G', 'T', 'A', 'U'], why: 'C and G are partners. A and T are the other pair.' },
        { q: 'One DNA strand reads ATTGCA. What does the matching strand read?', c: ['TAACGT', 'ATTGCA', 'UAACGU', 'GCCATG'], why: 'Swap each base for its partner: A→T, T→A, G→C, C→G.' },
        { q: 'What makes up the sides of the DNA ladder?', c: ['Sugar and phosphate', 'Base pairs', 'Amino acids', 'Proteins'], why: 'The sides are a repeating sugar-phosphate backbone. The bases form the rungs in the middle.' },
        { q: 'A nucleotide is made of…', c: ['a sugar, a phosphate, and a base', 'three amino acids', 'two chromosomes and a gene', 'a protein and a fat'], why: 'Every nucleotide has these 3 parts. Only the base changes: A, T, C, or G.' },
        { q: 'When does DNA replication happen?', c: ['Before a cell divides', 'After a cell dies', 'Only while you are eating', 'Only in red blood cells'], why: 'The cell copies its DNA first so each of the 2 new cells gets a full set.' },
        { q: 'What does helicase do?', c: ['Unzips the DNA double helix', 'Adds new nucleotides', 'Turns DNA into protein', 'Glues two cells together'], why: 'Helicase breaks the weak bonds between base pairs, opening the ladder like a zipper.' },
        { q: 'What does DNA polymerase do?', c: ['Adds matching nucleotides to build a new strand', 'Unzips the DNA', 'Carries oxygen in the blood', 'Breaks DNA into pieces to destroy it'], why: 'DNA polymerase reads the old strand and adds the matching base each time.' },
        { q: 'Why is DNA copying called semi-conservative?', c: ['Each new DNA has one old strand and one new strand', 'Half of the DNA is thrown away', 'Only half of the genes get copied', 'Both strands are brand new'], why: '"Semi" means half. Half of each new DNA molecule is the saved old strand.' },
        { q: 'If 30% of the bases in a DNA molecule are A, what percent are T?', c: ['30%', '70%', '20%', '15%'], why: 'Every A is paired with a T, so A and T always come in equal amounts.' },
        { q: 'Whose X-ray photo helped show that DNA is a double helix?', c: ['Rosalind Franklin', 'Robert Hooke', 'Charles Darwin', 'Isaac Newton'], why: 'Franklin\'s X-ray photo helped Watson and Crick figure out the double helix in 1953.' },
      ],
      realLife: {
        text: `<p>Your body makes millions of new cells every second: skin cells, blood cells, and cells that line your stomach. Every one of them needed a full copy of your DNA first.</p>
          <p>Because A always pairs with T and C always pairs with G, each half of the DNA is a perfect pattern for the missing half. That's how the copy comes out right almost every time.</p>
          <p>Science labs use the same base-pairing trick to copy a tiny bit of DNA from a single hair, so there is enough to test.</p>`,
        prompt: 'Your skin heals after a scrape by making new cells. Explain how a cell makes sure each new cell gets a correct copy of the DNA.',
      },
    },
    {
      key: 'b05-03',
      title: 'Gene expression: transcription and translation',
      videos: [
        { id: 'oefAI2x2CQM', title: 'Protein synthesis: transcription and translation' },
        { id: 'LsEYgwuP6ko', title: 'How to read a codon chart' },
        { id: 'fdzsrTpUe4w', title: 'Gene expression and regulation' },
      ],
      learn: `
        <p><b>Gene expression</b> (using a gene to make its protein) happens in 2 steps.</p>
        <p><b>1. Transcription</b> (copying a gene into RNA) happens in the <b>nucleus</b>. An enzyme reads the gene and builds <b>mRNA</b> (messenger RNA, a single-strand copy of the gene). RNA uses <b>U</b> (uracil) instead of T, so A pairs with U. DNA TAC becomes mRNA AUG. Then the mRNA leaves the nucleus.</p>
        <p><b>2. Translation</b> (reading mRNA to build a protein) happens at a <b>ribosome</b> (the cell's protein-building machine).</p>
        <ul><li>The ribosome reads mRNA 3 bases at a time. Each group of 3 is a <b>codon</b>, and each codon stands for one amino acid.</li>
        <li><b>tRNA</b> (transfer RNA) brings the right amino acid for each codon.</li>
        <li><b>AUG</b> is the start codon. UAA, UAG, and UGA are stop codons.</li>
        <li>The amino acid chain folds into a working protein.</li></ul>
        <p><b>Gene regulation</b> (turning genes on or off): almost every cell in your body has the same DNA, but each cell only uses the genes it needs. Pancreas cells turn on the gene for <b>insulin</b> (a protein that controls blood sugar). Skin cells keep it off. Signals can flip genes on or off. For example, bacteria turn on their genes for digesting milk sugar only when milk sugar is around.</p>`,
      quiz: [
        { q: 'Where does transcription happen in a human cell?', c: ['In the nucleus', 'At a ribosome in the cytoplasm', 'In the cell membrane', 'In the mitochondria'], why: 'The DNA stays in the nucleus, so the gene is copied into mRNA there.' },
        { q: 'Where does translation happen?', c: ['At a ribosome', 'Inside the nucleus', 'Inside a chromosome', 'In the cell wall'], why: 'Ribosomes read the mRNA and link amino acids together into a protein.' },
        { q: 'What is the job of mRNA?', c: ['To carry a copy of a gene from the nucleus to a ribosome', 'To carry oxygen through the blood', 'To unzip DNA during copying', 'To store energy for the cell'], why: '"Messenger" RNA carries the gene\'s message out of the nucleus to the protein builders.' },
        { q: 'RNA uses U instead of which DNA base?', c: ['T (thymine)', 'A (adenine)', 'C (cytosine)', 'G (guanine)'], why: 'RNA has A, U, C, and G. U takes the place of T and pairs with A.' },
        { q: 'The DNA strand being read is TAC. What mRNA is made?', c: ['AUG', 'ATG', 'TAC', 'UAC'], why: 'Pair each base: T→A, A→U, C→G. Remember RNA uses U, not T.' },
        { q: 'What is a codon?', c: ['A group of 3 mRNA bases that stands for one amino acid', 'A single base in DNA', 'A whole gene', 'A finished protein'], why: 'The ribosome reads mRNA 3 letters at a time. Each 3-letter "word" is a codon.' },
        { q: 'An mRNA has 30 bases. How many codons does it have?', c: ['10', '30', '90', '15'], why: 'Each codon is 3 bases. 30 ÷ 3 = 10 codons.' },
        { q: 'What does tRNA do?', c: ['Brings the matching amino acid to the ribosome', 'Copies DNA into mRNA', 'Unzips the double helix', 'Carries finished proteins out of the body'], why: 'Each tRNA matches one codon and carries its amino acid, like a delivery truck.' },
        { q: 'Which codon tells the ribosome to START?', c: ['AUG', 'UAA', 'UGA', 'UAG'], why: 'AUG is the start codon. UAA, UGA, and UAG are the 3 stop codons.' },
        { q: 'Your skin cells and pancreas cells have the same DNA. Why do only pancreas cells make insulin?', c: ['The insulin gene is turned on only in pancreas cells', 'Skin cells don\'t have the insulin gene', 'Pancreas cells have extra chromosomes', 'Insulin comes straight from the food you eat'], why: 'Both cells have the gene, but gene regulation switches it on only where it\'s needed.' },
        { q: 'What is the correct order of gene expression?', c: ['DNA → mRNA → protein', 'Protein → mRNA → DNA', 'mRNA → DNA → protein', 'DNA → protein → mRNA'], why: 'Transcription makes mRNA from DNA. Translation makes protein from mRNA.' },
        { q: 'Bacteria turn on their milk-sugar genes only when milk sugar is around. Why is this useful?', c: ['It saves energy by making proteins only when needed', 'It changes the bacteria\'s DNA', 'It lets bacteria make sugar out of nothing', 'It stops the bacteria from ever dividing'], why: 'Making proteins costs energy. Turning genes on only when needed means no energy is wasted.' },
      ],
      realLife: {
        text: `<p>A caterpillar and the butterfly it turns into have the exact same DNA. What changes is <b>which genes are turned on</b>. Same cookbook, different recipes.</p>
          <p>Scientists can put the human gene for insulin into bacteria. The bacteria transcribe and translate it just like their own genes, and they make real human insulin. This works because almost all living things read codons the same way. Much of the insulin that people with diabetes use today is made like this.</p>`,
        prompt: 'Your eye cells and your stomach cells have the same DNA, but they look and act very differently. Explain why, using what you learned about gene regulation.',
      },
    },
    {
      key: 'b05-04',
      title: 'Mutations',
      videos: [
        { id: 'vl6Vlf2thvI', title: 'Mutations' },
        { id: '1Dk0_-fyyDI', title: 'Impact of mutations on translation into amino acids' },
        { id: 'vP8-5Bhd2ag', title: 'What happens when your DNA is damaged?' },
      ],
      learn: `
        <p>A <b>mutation</b> (a change in the DNA sequence) changes the "letters" in a gene. That can change the protein, and then the trait.</p>
        <p><b>Types of mutations:</b></p>
        <ul><li><b>Substitution</b> (one base swapped for another): THE CAT ATE → THE BAT ATE. Only one codon changes, so the effect is often small. Sometimes there is no effect at all.</li>
        <li><b>Insertion</b> (an extra base added) or <b>deletion</b> (a base removed). These cause a <b>frameshift</b> (every codon after the change is read wrong). THE CAT ATE THE RAT, minus the C, reads THE ATA TET HER AT. Frameshifts usually wreck the protein.</li></ul>
        <p><b>Effects:</b></p>
        <ul><li><b>Harmful:</b> sickle cell disease comes from one base change in the hemoglobin gene. Red blood cells bend into a curved, sickle shape.</li>
        <li><b>Neutral:</b> the protein doesn't change, or the change doesn't matter for survival. Most mutations are neutral.</li>
        <li><b>Helpful:</b> some adults can digest milk because of a mutation that keeps their milk-digesting gene turned on.</li></ul>
        <p><b>Causes:</b> copying mistakes during DNA replication, and <b>mutagens</b> (things that damage DNA), like UV light from the sun, X-rays, and chemicals in cigarette smoke. Cells fix most damage with repair enzymes.</p>
        <p>Mutations in egg or sperm cells can be passed to children. Mutations in other body cells are not.</p>`,
      quiz: [
        { q: 'What is a mutation?', c: ['A change in the DNA sequence', 'A new chromosome made from food', 'A protein that speeds up reactions', 'A perfect copy of DNA'], why: 'A mutation changes the order of the bases (A, T, C, G) in DNA.' },
        { q: 'In a substitution mutation…', c: ['one base is swapped for a different base', 'a base is removed', 'an extra base is added', 'a whole chromosome is lost'], why: 'Substitution = swap. One letter changes, and the rest of the gene stays the same.' },
        { q: 'Which mutation causes a frameshift?', c: ['Deleting one base', 'Swapping one base for another', 'A change that still makes the same amino acid', 'Copying the DNA correctly'], why: 'Removing a base shifts every 3-letter codon after it, so the rest of the gene is read wrong.' },
        { q: 'THE CAT ATE THE RAT loses the letter C. Reading 3 letters at a time, what do you get?', c: ['THE ATA TET HER AT', 'THE CAT ATE THE RAT', 'THE BAT ATE THE RAT', 'THE CAT ATE HER AT'], why: 'Every group after the deletion shifts over by one letter. That\'s a frameshift.' },
        { q: 'Why do frameshift mutations usually cause more harm than substitutions?', c: ['They change every codon after the mutation', 'They only change one codon', 'They never change the protein', 'They add an extra chromosome'], why: 'A substitution changes one codon. A frameshift scrambles all the codons after it.' },
        { q: 'Sickle cell disease is caused by…', c: ['one base change in the hemoglobin gene', 'eating too much sugar', 'a missing chromosome', 'a virus infection'], why: 'One substitution changes one amino acid in hemoglobin, which bends red blood cells into a sickle shape.' },
        { q: 'Which of these is a mutagen (something that can damage DNA)?', c: ['UV light from the sun', 'Drinking plenty of water', 'Eating fruits and vegetables', 'Getting enough sleep'], why: 'UV light can damage the DNA in skin cells. That\'s one reason to wear sunscreen.' },
        { q: 'Which statement about mutations is true?', c: ['They can be harmful, neutral, or helpful', 'They are always harmful', 'They are always helpful', 'They only happen in bacteria'], why: 'Most are neutral, some are harmful, and a few help a living thing survive.' },
        { q: 'A mutation changes a codon, but the new codon still stands for the same amino acid. What is the effect?', c: ['Neutral — the protein stays the same', 'Harmful — the protein is destroyed', 'Helpful — the protein gets stronger', 'It causes a frameshift'], why: 'Some amino acids have several codons, so the protein doesn\'t change. This is called a silent mutation.' },
        { q: 'Which is an example of a helpful mutation?', c: ['A mutation that lets adults digest milk', 'A mutation that causes sickle cell disease', 'A frameshift that breaks an important enzyme', 'A mutation that causes skin cancer'], why: 'Digesting milk as an adult gave people an extra food source.' },
        { q: 'A mutation happens in a skin cell on your arm. Can it be passed to your future children?', c: ['No — only mutations in egg or sperm cells are passed on', 'Yes — all mutations are passed on', 'Yes — but only to sons', 'No — skin cells don\'t have DNA'], why: 'Children grow from an egg and a sperm cell, so only mutations in those cells get passed down.' },
        { q: 'Which of these can cause a mutation?', c: ['A mistake when DNA is copied', 'A cell reading its DNA correctly', 'Base pairs matching A with T', 'Eating enough protein'], why: 'DNA polymerase sometimes adds the wrong base. Repair enzymes catch most mistakes, but not all.' },
      ],
      realLife: {
        text: `<p>Sunscreen and hats do more than stop sunburn. <b>UV light</b> can damage the DNA in your skin cells. Your cells repair most of it, but too much sun over many years raises the chance of skin cancer.</p>
          <p>When you get an X-ray, the technician steps behind a wall. One X-ray is safe for you, but they would get exposed dozens of times a day.</p>
          <p>Mutations also explain why some bacteria survive antibiotics. One random mutation can help a bacterium survive, and it passes that mutation to all of its offspring.</p>`,
        prompt: 'Your friend says, "All mutations are bad." Do you agree? Explain using at least one harmful example and one helpful or neutral example.',
      },
    },
  ],
};
