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
        { q: 'If DNA is like a giant cookbook, what is a gene like?', c: ['One recipe in the cookbook', 'The whole cookbook', 'The finished meal', 'The kitchen where the cooking happens'], why: 'DNA is the whole cookbook. A gene is one recipe, and the protein is like the meal made from it.' },
        { q: 'About how many genes does a person have?', c: ['About 20,000', '46', '23', '4'], why: 'You have about 20,000 genes. 46 is the number of chromosomes, and 23 is the number of pairs.' },
        { q: 'Hair is mostly keratin, a tough protein. Where do the instructions for building keratin come from?', c: ['A gene in your DNA', 'The protein you eat in food', 'Your hair cells invent them as they grow', 'Your red blood cells'], why: 'Every protein, including keratin, is built from a gene\'s instructions. Food gives you amino acids, not the recipe.' },
        { q: 'Which of these is NOT a job that proteins do?', c: ['Store the instructions for traits', 'Speed up chemical reactions', 'Carry oxygen in the blood', 'Build hair and muscle'], why: 'DNA stores the instructions. Proteins are the workers: enzymes, hemoglobin, and the proteins in hair and muscle.' },
        { q: 'Your chromosomes come in 23 pairs. Where did the two chromosomes in each pair come from?', c: ['One from your mom and one from your dad', 'Both from your mom', 'Both from your dad', 'One from each grandparent'], why: 'Each parent gives you one chromosome of every pair, so you get 23 from each parent.' },
        { q: 'Why can two people have different eye colors?', c: ['They have different alleles of the genes for eye color', 'One of them has no genes for eye color', 'One of them has more chromosomes', 'Eye color comes only from the food they eat'], why: 'Alleles are different versions of a gene. Different versions can make proteins that work differently, giving different traits.' },
        { q: 'A protein is a chain of amino acids that folds into a shape. What can happen if the amino acids are put in a different order?', c: ['The protein can fold into a different shape and may not do its job', 'Nothing, because the order never matters', 'The protein turns into DNA', 'The protein becomes a chromosome'], why: 'A protein\'s shape decides its job. Changing the amino acid order can change the shape, and that can change the trait.' },
        { q: 'A plant has genes for green leaves, but it sprouts in a dark closet. Its leaves come out pale yellow. What does this show?', c: ['The environment can change how a trait turns out', 'Darkness changed the plant\'s DNA', 'The plant lost its genes in the dark', 'Genes have nothing to do with leaf color'], why: 'Its genes didn\'t change. Without sunlight, the plant couldn\'t make its green color the way its genes allow.' },
        { q: 'Your skin makes more melanin when you spend time in the sun. What does the work of making melanin?', c: ['Enzymes, which are proteins', 'Chromosomes', 'The sunlight itself', 'Red blood cells'], why: 'Sunlight is the signal, but enzymes build the melanin. Those enzymes are proteins made from your genes.' },
        { q: 'Which sentence about chromosomes and genes is true?', c: ['One chromosome holds many genes', 'One gene holds many chromosomes', 'Each chromosome is exactly one gene', 'Genes and chromosomes have nothing to do with each other'], why: 'You have about 20,000 genes on 46 chromosomes, so each chromosome carries many genes.' },
        { q: 'Which of these is made mostly of protein?', c: ['Hair and muscle', 'Table sugar', 'Cooking oil', 'Water'], why: 'Hair is mostly keratin, and muscles are packed with proteins that let them squeeze. Sugar, oil, and water aren\'t proteins.' },
        { q: 'For most genes, how many alleles does a person have?', c: ['2, one from each parent', '1, from mom only', '4, one from each grandparent', '46, one on each chromosome'], why: 'Chromosomes come in pairs, one from each parent, so you carry two copies of most genes. The copies can be different alleles.' },
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
        { q: 'One DNA strand reads GGCTA. What does the matching strand read?', c: ['CCGAT', 'GGCTA', 'CCGAU', 'ATCGG'], why: 'Swap each base for its partner: G→C, C→G, T→A, A→T. DNA never uses U.' },
        { q: 'In a DNA molecule, 20% of the bases are G. What percent of the bases are A?', c: ['30%', '20%', '60%', '80%'], why: 'G = 20%, so C = 20% too. That leaves 60% for A and T, split evenly: 30% each.' },
        { q: 'How many different kinds of bases does DNA use?', c: ['4', '2', '3', '20'], why: 'DNA uses 4 bases: A, T, C, and G. They are the 4 "letters" of the code.' },
        { q: 'What holds the two sides of the DNA ladder together in the middle?', c: ['Weak bonds between the base pairs', 'Strong sugar-phosphate bonds', 'Proteins glued on the outside', 'Chains of amino acids'], why: 'The bases on each side pair up and hold on with weak bonds, forming the rungs of the ladder.' },
        { q: 'Why is it helpful that the bonds between base pairs are weak?', c: ['The DNA can be unzipped easily when it needs to be copied', 'It makes DNA fall apart every day', 'It lets A pair with C or G', 'It keeps DNA from ever being copied'], why: 'Weak bonds let helicase split the ladder down the middle, like a zipper, without breaking the sides.' },
        { q: 'A DNA molecule is copied. Then both copies are copied again. How many DNA molecules are there now?', c: ['4', '2', '3', '8'], why: '1 becomes 2, and then each of those 2 becomes 2 more. 2 × 2 = 4.' },
        { q: 'Which list shows DNA replication in the right order?', c: ['Helicase unzips the DNA → DNA polymerase adds matching nucleotides → 2 DNA molecules', 'DNA polymerase adds nucleotides → helicase unzips the DNA → 2 DNA molecules', '2 DNA molecules → helicase unzips the DNA → DNA polymerase adds nucleotides', 'Helicase adds nucleotides → DNA polymerase unzips the DNA → 2 DNA molecules'], why: 'The ladder must be unzipped first. Then polymerase builds a new side on each old side.' },
        { q: 'What would most likely happen if a cell\'s helicase stopped working?', c: ['The DNA could not be unzipped, so it could not be copied', 'The DNA would be copied twice as fast', 'A would start pairing with C', 'The cell would make extra chromosomes'], why: 'Helicase opens the DNA. Without it, DNA polymerase can\'t reach the bases to build new strands.' },
        { q: 'Which part of the DNA ladder carries the actual "letters" of the code?', c: ['The bases that form the rungs', 'The sugars on the sides', 'The phosphates on the sides', 'The twist of the helix'], why: 'The sugar-phosphate sides are the same all along. The order of the bases A, T, C, and G is the code.' },
        { q: 'Scientists mark the old DNA strands red and the new strands blue. After one round of copying, what do the 2 DNA molecules look like?', c: ['Each has one red strand and one blue strand', 'One is all red and one is all blue', 'Both are all blue', 'Both are all red'], why: 'Copying is semi-conservative. Each new molecule keeps one old (red) strand and gets one new (blue) strand.' },
        { q: 'A short piece of DNA has 10 rungs (base pairs). How many bases does it have in all?', c: ['20', '10', '5', '40'], why: 'Each rung is a pair of bases, one from each side. 10 × 2 = 20 bases.' },
        { q: 'Which two scientists described the double helix model of DNA in 1953?', c: ['Watson and Crick', 'Darwin and Mendel', 'Hooke and Newton', 'Mendel and Hooke'], why: 'James Watson and Francis Crick described the double helix, using Rosalind Franklin\'s X-ray photo of DNA.' },
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
        <ul><li>The ribosome reads mRNA 3 bases at a time. Each group of 3 is a <b>codon</b>. Most codons stand for one amino acid, and a few mean "stop."</li>
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
        { q: 'What is a codon?', c: ['A group of 3 mRNA bases that stands for one amino acid (or "stop")', 'A single base in DNA', 'A whole gene', 'A finished protein'], why: 'The ribosome reads mRNA 3 letters at a time. Each 3-letter "word" is a codon.' },
        { q: 'An mRNA has 30 bases. How many codons does it have?', c: ['10', '30', '90', '15'], why: 'Each codon is 3 bases. 30 ÷ 3 = 10 codons.' },
        { q: 'What does tRNA do?', c: ['Brings the matching amino acid to the ribosome', 'Copies DNA into mRNA', 'Unzips the double helix', 'Carries finished proteins out of the body'], why: 'Each tRNA matches one codon and carries its amino acid, like a delivery truck.' },
        { q: 'Which codon tells the ribosome to START?', c: ['AUG', 'UAA', 'UGA', 'UAG'], why: 'AUG is the start codon. UAA, UGA, and UAG are the 3 stop codons.' },
        { q: 'Your skin cells and pancreas cells have the same DNA. Why do only pancreas cells make insulin?', c: ['The insulin gene is turned on only in pancreas cells', 'Skin cells don\'t have the insulin gene', 'Pancreas cells have extra chromosomes', 'Insulin comes straight from the food you eat'], why: 'Both cells have the gene, but gene regulation switches it on only where it\'s needed.' },
        { q: 'What is the correct order of gene expression?', c: ['DNA → mRNA → protein', 'Protein → mRNA → DNA', 'mRNA → DNA → protein', 'DNA → protein → mRNA'], why: 'Transcription makes mRNA from DNA. Translation makes protein from mRNA.' },
        { q: 'Bacteria turn on their milk-sugar genes only when milk sugar is around. Why is this useful?', c: ['It saves energy by making proteins only when needed', 'It changes the bacteria\'s DNA', 'It lets bacteria make sugar out of nothing', 'It stops the bacteria from ever dividing'], why: 'Making proteins costs energy. Turning genes on only when needed means no energy is wasted.' },
        { q: 'The DNA strand being read is TACGGC. What mRNA is made?', c: ['AUGCCG', 'ATGCCG', 'TACGGC', 'UACGGC'], why: 'Pair each base: T→A, A→U, C→G, G→C. RNA uses U in place of T.' },
        { q: 'An mRNA reads AUG CCA GGU UAG. Which codon tells the ribosome to stop?', c: ['UAG', 'AUG', 'CCA', 'GGU'], why: 'UAG is one of the 3 stop codons (UAA, UAG, UGA). AUG is the start codon.' },
        { q: 'A protein is 50 amino acids long. How many mRNA bases are needed to code for them (not counting the stop codon)?', c: ['150', '50', '17', '100'], why: 'Each amino acid needs one codon of 3 bases. 50 × 3 = 150 bases.' },
        { q: 'Why does a gene\'s message have to be copied into mRNA first?', c: ['DNA stays in the nucleus, but ribosomes are outside it', 'DNA is too small for a ribosome to read', 'Ribosomes are found inside the DNA', 'mRNA gives the cell its energy'], why: 'The DNA never leaves the nucleus. mRNA carries a copy out to the ribosomes, where proteins are built.' },
        { q: 'Which is a difference between DNA and mRNA?', c: ['mRNA is a single strand and uses U instead of T', 'mRNA is a double helix and uses T instead of U', 'mRNA is made of amino acids', 'mRNA never leaves the nucleus'], why: 'DNA is a double-stranded ladder with T. mRNA is a single-strand copy with U, and it travels to the ribosome.' },
        { q: 'Which of these is NOT part of translation?', c: ['Helicase unzipping the DNA', 'A ribosome reading codons', 'tRNA bringing amino acids', 'Amino acids linking into a chain'], why: 'Helicase unzips DNA when it is copied. Translation happens at the ribosome with mRNA and tRNA.' },
        { q: 'Scientists put the human insulin gene into bacteria, and the bacteria make human insulin. Why does this work?', c: ['Almost all living things read codons the same way', 'Bacteria already have a human nucleus', 'Insulin is made of DNA, not protein', 'The bacteria turn into human cells'], why: 'The bacteria transcribe and translate the human gene just like their own genes, because the codon code is shared.' },
        { q: 'A caterpillar and the butterfly it turns into have the exact same DNA. What changes?', c: ['Which genes are turned on', 'The order of the bases in its DNA', 'The number of chromosomes', 'The base-pairing rules'], why: 'Same cookbook, different recipes. Gene regulation turns different genes on at different stages of life.' },
        { q: 'A ribosome finishes linking amino acids into a chain. What happens next?', c: ['The chain folds into a working protein', 'The chain turns back into DNA', 'The chain becomes a new mRNA', 'The chain splits into codons'], why: 'The order of amino acids decides how the chain folds. Its folded shape lets the protein do its job.' },
        { q: 'What is gene regulation?', c: ['Turning genes on or off', 'Copying DNA before a cell divides', 'Changing the order of DNA bases', 'Making new chromosomes'], why: 'Each cell has the same DNA, but it only turns on the genes it needs, like insulin in pancreas cells.' },
        { q: 'Which list matches each molecule to its job?', c: ['mRNA carries the message; tRNA brings amino acids; the ribosome builds the protein', 'tRNA carries the message; mRNA brings amino acids; the ribosome builds the protein', 'The ribosome carries the message; mRNA builds the protein; tRNA stores the gene', 'mRNA builds the protein; tRNA unzips DNA; the ribosome brings amino acids'], why: 'Messenger RNA brings the message, transfer RNA delivers amino acids, and the ribosome links them together.' },
        { q: 'An mRNA codon reads GCU. What were the bases on the DNA strand that was read?', c: ['CGA', 'GCT', 'CGU', 'GCU'], why: 'Work backward with base pairing: G pairs with C, C with G, and U with A. DNA uses T, never U.' },
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
        { q: 'THE BIG DOG RAN gets an extra letter A added right after THE. Reading 3 letters at a time, what do you get?', c: ['THE ABI GDO GRA N', 'THE BIG DOG RAN', 'THE BAG DOG RAN', 'THE BIG DOG RAN A'], why: 'An insertion shifts every group after it by one letter. That\'s a frameshift, so the rest reads as nonsense.' },
        { q: 'THE RED HAT changes to THE RED BAT. What type of mutation is this?', c: ['Substitution', 'Insertion', 'Deletion', 'Frameshift'], why: 'One letter (H) was swapped for another (B). Nothing was added or removed, so the groups of 3 stay in step.' },
        { q: 'THE CAT ATE THE RAT loses the whole word CAT (3 letters). Reading 3 letters at a time, what happens?', c: ['It reads THE ATE THE RAT, so the rest still reads correctly', 'Every word after the change is scrambled', 'Nothing changes at all', 'The sentence gets longer'], why: 'Removing exactly 3 letters removes one whole codon. The groups after it stay in step, so only one piece is missing.' },
        { q: 'UV light damages some DNA in your skin on a sunny day. What usually happens to most of that damage?', c: ['Repair enzymes fix it', 'It is passed on to your future children', 'It turns into a new gene right away', 'Nothing can ever fix it'], why: 'Cells have repair enzymes that fix most DNA damage. Too much sun over many years can still cause problems.' },
        { q: 'Which list contains only mutagens (things that can damage DNA)?', c: ['UV light, X-rays, and chemicals in cigarette smoke', 'UV light, vegetables, and water', 'X-rays, sleep, and exercise', 'Sunscreen, hats, and shade'], why: 'UV light, X-rays, and some chemicals can damage DNA. Sunscreen, hats, and shade help protect it.' },
        { q: 'Why does an X-ray technician step behind a wall when taking your X-ray?', c: ['They would get many doses a day, which could damage their DNA over time', 'X-rays only harm adults', 'The machine is too loud', 'X-rays make the room too hot'], why: 'One X-ray is a tiny dose for you. Technicians take many each day, so they avoid adding those doses up.' },
        { q: 'A random mutation lets one bacterium survive an antibiotic. What happens next?', c: ['It passes the mutation to its offspring, so more of them survive', 'The mutation disappears when it divides', 'All the other bacteria copy the mutation from it', 'The antibiotic becomes stronger'], why: 'When the bacterium divides, its offspring get copies of its DNA, including the helpful mutation.' },
        { q: 'What is true about MOST mutations?', c: ['Most are neutral', 'Most are harmful', 'Most are helpful', 'Most cause a frameshift'], why: 'Most mutations don\'t change the protein, or the change doesn\'t matter for survival.' },
        { q: 'Which chain shows how sickle cell disease happens?', c: ['One base changes in the gene → the hemoglobin protein changes → red blood cells bend into a sickle shape', 'Red blood cells bend → the hemoglobin protein changes → one base changes in the gene', 'The hemoglobin protein changes → one base changes in the gene → red blood cells bend', 'The cell loses a chromosome → hemoglobin disappears → red blood cells turn white'], why: 'A change in DNA changes the protein, and the changed protein changes the trait. Gene → protein → trait.' },
        { q: 'One base is deleted near the START of a gene. Another time, one base is deleted near the END. Which usually harms the protein more?', c: ['The deletion near the start', 'The deletion near the end', 'Both always cause the same harm', 'Neither one changes the protein'], why: 'A frameshift scrambles every codon after it. Near the start, almost the whole protein is read wrong.' },
        { q: 'How does sunscreen help protect your DNA?', c: ['It blocks UV light, which can damage DNA', 'It repairs broken genes', 'It adds new DNA to your skin', 'It stops your skin cells from ever dividing'], why: 'UV light is a mutagen. Sunscreen blocks much of it before it reaches the DNA in your skin cells.' },
        { q: 'The DNA code GATTACA changes. Which new code shows a DELETION?', c: ['GATACA', 'GATTTACA', 'GATTGCA', 'CATTACA'], why: 'A deletion removes a base. GATACA lost one T. The other codes either gained a base or swapped one.' },
      ],
      realLife: {
        text: `<p>Sunscreen and hats do more than stop sunburn. <b>UV light</b> can damage the DNA in your skin cells. Your cells repair most of it, but too much sun over many years raises the chance of skin cancer.</p>
          <p>When you get an X-ray, the technician steps behind a wall. One X-ray is a tiny, low-risk dose for you, but they would get exposed dozens of times a day.</p>
          <p>Mutations also explain why some bacteria survive antibiotics. One random mutation can help a bacterium survive, and it passes that mutation to all of its offspring.</p>`,
        prompt: 'Your friend says, "All mutations are bad." Do you agree? Explain using at least one harmful example and one helpful or neutral example.',
      },
    },
  ],
};
