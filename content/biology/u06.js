// Unit 6 — Inheritance and variation of traits. NJ: HS-LS3-1, HS-LS3-2, HS-LS3-3
// Follows Khan Academy's NGSS high school biology, Unit 6.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
// Every Punnett square ratio was recomputed with node before writing.
export default {
  id: 'b06', n: 6, title: 'Inheritance and variation of traits', nj: ['HS-LS3-1', 'HS-LS3-2', 'HS-LS3-3'],
  lessons: [
    {
      key: 'b06-01',
      title: 'Meiosis',
      videos: [
        { id: 'I-sucvMV0Ng', title: 'Meiosis' },
        { id: 'iE4KFuzu5WQ', title: 'Haploid and diploid' },
      ],
      learn: `
        <p><b>Meiosis</b> (a special kind of cell division) makes <b>gametes</b> (sex cells: sperm in males and eggs in females).</p>
        <p>Your body cells are <b>diploid</b> (they have 2 sets of chromosomes, one set from each parent). In humans that's 46 chromosomes, in 23 pairs. The two chromosomes in a pair are <b>homologous chromosomes</b> (a matching pair with the same genes, one from mom and one from dad).</p>
        <p>Gametes are <b>haploid</b> (they have just 1 set: 23 in humans). Why half? At <b>fertilization</b> (when a sperm and an egg join), 23 + 23 = 46, the right number again.</p>
        <p><b>How it works:</b> first the cell copies its DNA. Then it divides twice:</p>
        <ol><li><b>Meiosis I</b>: the matching pairs split up, so each new cell gets one chromosome from each pair.</li>
        <li><b>Meiosis II</b>: each chromosome's two copies split apart, like in mitosis.</li></ol>
        <p>Result: <b>1 cell → 4 haploid cells</b>, all different. (Mitosis makes 2 identical cells with 46.)</p>
        <p><b>Why every gamete is different:</b></p>
        <ul><li><b>Crossing over</b> (matching chromosomes swap pieces in meiosis I) mixes mom's and dad's genes onto the same chromosome.</li>
        <li><b>Independent assortment</b> (each pair splits in a random direction) gives over 8 million combinations.</li>
        <li><b>Mutations</b> (changes in DNA) can add brand-new versions of genes.</li></ul>
        <p>That's why brothers and sisters look alike, but not exactly the same.</p>`,
      quiz: [
        { q: 'What is the job of meiosis?', c: ['Making gametes (sex cells) with half the chromosomes', 'Making identical body cells for growth', 'Repairing damaged skin cells', 'Copying DNA before a cell divides'], why: 'Meiosis makes sperm and egg cells. Mitosis is the division used for growth and repair.' },
        { q: 'A human body cell has 46 chromosomes. How many does a human gamete have?', c: ['23', '46', '92', '12'], why: 'Meiosis cuts the number in half: 46 ÷ 2 = 23.' },
        { q: 'What does haploid mean?', c: ['Having 1 set of chromosomes', 'Having 2 sets of chromosomes', 'Having no chromosomes', 'Having an extra copy of one chromosome'], why: 'Gametes are haploid, with one set. Body cells are diploid, with two sets, one from each parent.' },
        { q: 'Why do gametes need half the normal number of chromosomes?', c: ['So the fertilized egg has the normal number when two gametes join', 'So they can move around faster', 'So they can make their own food', 'So they never need to divide'], why: '23 from the egg + 23 from the sperm = 46, the right number for a human.' },
        { q: 'Meiosis starts with 1 cell. How many cells does it end with?', c: ['4', '2', '1', '8'], why: 'Meiosis has two divisions, meiosis I and meiosis II. 1 cell becomes 2, then 2 become 4.' },
        { q: 'What happens during crossing over?', c: ['Matching chromosomes swap pieces of DNA', 'A cell splits into two identical cells', 'A sperm and an egg join together', 'Chromosomes copy themselves for the first time'], why: 'In meiosis I, homologous chromosomes trade sections. This mixes genes from both parents onto new chromosomes.' },
        { q: 'What are homologous chromosomes?', c: ['A matching pair with the same genes, one from each parent', 'Two identical copies made when DNA is copied', 'The X and Y chromosomes only', 'Chromosomes found only in gametes'], why: 'One chromosome of each pair came from mom and one from dad. They carry the same genes, maybe different versions.' },
        { q: 'Which sentence compares mitosis and meiosis correctly?', c: ['Mitosis makes 2 identical cells; meiosis makes 4 different cells', 'Mitosis makes 4 different cells; meiosis makes 2 identical cells', 'Both make 4 identical cells', 'Both make 2 cells with half the chromosomes'], why: 'Mitosis copies body cells exactly. Meiosis makes four unique haploid gametes.' },
        { q: 'A dog\'s body cells have 78 chromosomes. How many are in a dog\'s egg cell?', c: ['39', '78', '156', '23'], why: 'Gametes are haploid, so they have half: 78 ÷ 2 = 39.' },
        { q: 'Two brothers have the same parents but look different. What is the main reason?', c: ['Meiosis gave each sperm and egg a different mix of genes', 'They got their genes from different parents', 'Mitosis changed their DNA as they grew', 'One brother got more chromosomes than the other'], why: 'Crossing over and independent assortment make every gamete unique, so each child gets a different combination.' },
        { q: 'In meiosis I, each chromosome pair splits up in a random direction. What is this called?', c: ['Independent assortment', 'Crossing over', 'Fertilization', 'Mutation'], why: 'Each pair splits randomly, so each gamete gets a different mix. Humans can make over 8 million combinations.' },
        { q: 'Besides meiosis, what else creates new genetic variation?', c: ['Mutations, which are changes in DNA', 'Eating different foods', 'Mitosis making identical body cells', 'Exercise that builds muscle'], why: 'Mutations can create brand-new versions of genes. If they happen in gametes, they can be passed on.' },
        { q: 'What does diploid mean?', c: ['Having 2 sets of chromosomes, one set from each parent', 'Having 1 set of chromosomes', 'Having 4 sets of chromosomes', 'Having no chromosomes'], why: 'Body cells are diploid: 46 chromosomes in 23 pairs. Gametes are haploid, with just one set.' },
        { q: 'Which of these human cells is haploid?', c: ['An egg cell', 'A skin cell', 'A muscle cell', 'A nerve cell'], why: 'Gametes, like egg and sperm cells, are haploid with 23 chromosomes. Body cells have 46.' },
        { q: 'What is fertilization?', c: ['When a sperm cell and an egg cell join', 'When a cell copies its DNA', 'When matching chromosomes swap pieces', 'When one cell splits into 4 cells'], why: 'At fertilization, two haploid gametes join and make one cell with the full number of chromosomes.' },
        { q: 'A cat\'s egg cell has 19 chromosomes. How many chromosomes are in a cat\'s body cell?', c: ['38', '19', '76', '46'], why: 'Body cells are diploid, with twice as many as a gamete: 19 × 2 = 38.' },
        { q: 'Imagine human sperm and egg cells each had 46 chromosomes. How many would the baby\'s cells have?', c: ['92', '46', '23', '69'], why: '46 + 46 = 92, double the normal number. Meiosis halves the number so fertilization gets back to 46.' },
        { q: 'What splits apart during meiosis I?', c: ['The matching (homologous) chromosome pairs', 'The two copies of each chromosome', 'The sperm and the egg', 'The nucleus and the cell membrane'], why: 'In meiosis I, each pair splits up, so each new cell gets one chromosome from each pair.' },
        { q: 'What splits apart during meiosis II?', c: ['The two copies of each chromosome', 'The matching (homologous) chromosome pairs', 'The sperm and the egg', 'The 4 finished gametes'], why: 'In meiosis II, each chromosome\'s two copies separate, much like in mitosis.' },
        { q: 'What does the cell do just before meiosis begins?', c: ['Copies its DNA', 'Joins with another cell', 'Splits into 4 cells', 'Throws away half of its chromosomes'], why: 'The cell copies its DNA first. Then it divides twice: meiosis I and meiosis II.' },
        { q: 'During which stage does crossing over happen?', c: ['Meiosis I', 'Meiosis II', 'Fertilization', 'Mitosis'], why: 'Crossing over happens in meiosis I, while the matching chromosomes are lined up in pairs.' },
        { q: 'Why do identical twins share the same DNA?', c: ['They came from one fertilized egg that split in two', 'They came from two different eggs and two different sperm', 'Meiosis made two identical sperm for them', 'They had extra crossing over'], why: 'One fertilized egg split into two babies, so both got the same set of chromosomes.' },
        { q: 'Which of these does NOT add genetic variety to gametes?', c: ['Mitosis in skin cells', 'Crossing over', 'Independent assortment', 'Mutations in the cells that make gametes'], why: 'Mitosis makes identical body cells. Crossing over, independent assortment, and mutations all make gametes different.' },
        { q: 'With 23 chromosome pairs, each splitting 2 ways, a person can make 2²³ (23 twos multiplied together) different gamete mixes. About how many is that?', c: ['About 8 million', '46', 'About 8 thousand', '23'], why: '2²³ = 8,388,608, so over 8 million mixes, even before crossing over adds more.' },
      ],
      realLife: {
        text: `<p>Look at any family with several kids. They have the same parents, yet each one looks a little different: one is tall, one has curly hair, one has dad's nose.</p>
          <p>That's meiosis at work. Each <b>gamete</b> (sex cell) gets a random mix of chromosomes, and crossing over shuffles the genes even more. One person can make over <b>8 million</b> chromosome mixes before crossing over adds even more.</p>
          <p><b>Identical twins</b> are the exception. They come from one fertilized egg that split in two, so they share the same DNA.</p>
          <p>Farmers use this mixing too. They cross plants to get new combinations, like sweeter, bigger strawberries.</p>`,
        prompt: 'Two brothers have the same parents, but they don\'t look exactly alike. Explain why, using the words meiosis and crossing over.',
      },
    },
    {
      key: 'b06-02',
      title: 'Mendelian genetics',
      videos: [
        { id: 'pv3Kj0UjiLE', title: 'Alleles and genes' },
        { id: 'i-0rSv6oxSY', title: 'Monohybrids and the Punnett square' },
        { id: 'Mehz7tCxjSE', title: 'How Mendel\'s pea plants helped us understand genetics' },
      ],
      learn: `
        <p>About 160 years ago, a scientist named <b>Gregor Mendel</b> bred pea plants and found the basic rules of <b>heredity</b> (how traits pass from parents to children).</p>
        <p><b>Key words:</b></p>
        <ul><li><b>Gene</b>: a piece of DNA that controls a trait, like flower color.</li>
        <li><b>Allele</b> (a version of a gene): for example, purple or white. You get one allele from each parent, so you have 2.</li>
        <li><b>Dominant</b> allele (capital letter, P): shows up even if you have just one copy.</li>
        <li><b>Recessive</b> allele (small letter, p): shows up only with two copies (pp).</li>
        <li><b>Genotype</b> (the allele letters you have): PP, Pp, or pp.</li>
        <li><b>Phenotype</b> (the trait you can see): purple or white.</li>
        <li><b>Homozygous</b> (two matching alleles, PP or pp) vs. <b>heterozygous</b> (two different alleles, Pp).</li></ul>
        <p><b>Worked example.</b> A <b>Punnett square</b> (a grid that shows which genotypes the <b>offspring</b>, meaning the babies, could get) for two Pp plants: put one parent's alleles across the top and the other's down the side, then fill each box with one letter from each.</p>
        <ul><li>Boxes: PP, Pp, Pp, pp</li>
        <li>Genotype ratio: 1 PP : 2 Pp : 1 pp</li>
        <li>Phenotype ratio: 3 purple : 1 white, so each baby has a 25% chance of being white.</li></ul>
        <p>These are chances, not promises. Flip a coin 4 times and you won't always get exactly 2 heads.</p>`,
      quiz: [
        { q: 'What is an allele?', c: ['A version of a gene', 'A whole chromosome', 'A trait you can see', 'A type of sex cell'], why: 'The gene for flower color comes in versions, like purple or white. Each version is an allele.' },
        { q: 'P = purple flowers (dominant) and p = white flowers (recessive). What color is a Pp plant?', c: ['Purple', 'White', 'Light purple', 'Half purple and half white'], why: 'One dominant allele is enough to show the dominant trait, so Pp is purple.' },
        { q: 'What is the difference between genotype and phenotype?', c: ['Genotype is the alleles you have; phenotype is the trait you can see', 'Genotype is the trait you can see; phenotype is the alleles you have', 'Genotype comes from mom; phenotype comes from dad', 'Genotype is for plants; phenotype is for animals'], why: 'Genotype is the letters, like Pp. Phenotype is the result, like purple flowers.' },
        { q: 'Which genotype is heterozygous?', c: ['Bb', 'BB', 'bb', 'B'], why: 'Heterozygous means two different alleles. BB and bb are homozygous, and a genotype always has 2 letters.' },
        { q: 'A recessive trait shows up only when…', c: ['the organism has two recessive alleles', 'the organism has one recessive allele', 'the organism has one dominant allele', 'the organism has two dominant alleles'], why: 'A dominant allele hides a recessive one. The recessive trait appears only with two copies, like pp.' },
        { q: 'Two Bb parents are crossed. What is the chance an offspring is bb?', c: ['25%', '50%', '75%', '0%'], why: 'The Punnett square gives BB, Bb, Bb, bb. One box out of 4 is bb, so 25%.' },
        { q: 'B = black fur (dominant) and b = white fur. Two Bb parents are crossed. What is the expected phenotype ratio?', c: ['3 black : 1 white', '1 black : 1 white', '1 black : 3 white', 'All black'], why: 'BB, Bb, and Bb all have a B, so they are black. Only bb is white.' },
        { q: 'A Bb plant is crossed with a bb plant. What percent of the offspring are expected to be bb?', c: ['50%', '25%', '75%', '100%'], why: 'The boxes are Bb, Bb, bb, bb. Two of the 4 boxes are bb, so 50%.' },
        { q: 'A BB plant is crossed with a bb plant. What will the offspring be?', c: ['All Bb', 'All BB', 'Half BB and half bb', '1 BB : 2 Bb : 1 bb'], why: 'Every offspring gets B from one parent and b from the other, so all are Bb.' },
        { q: 'A farmer crosses Pp pea plants with each other and grows 400 seeds. About how many plants will have white flowers (pp)?', c: ['100', '200', '300', '25'], why: '25% of the offspring are expected to be pp. 25% of 400 = 100.' },
        { q: 'What is a Punnett square used for?', c: ['Predicting the chances of each offspring genotype', 'Counting the chromosomes in a cell', 'Measuring how tall a plant grows', 'Showing the steps of meiosis'], why: 'A Punnett square crosses one parent\'s alleles with the other\'s to show every possible offspring.' },
        { q: 'Two purple-flowered pea plants have a white-flowered baby plant. What must be true about the parents?', c: ['Both parents are Pp', 'Both parents are PP', 'One parent is PP and one is pp', 'One parent is Pp and one is PP'], why: 'A white plant is pp, so it got a p from each parent. Purple parents carrying p must be Pp.' },
        { q: 'A BB plant is crossed with a Bb plant. B is dominant. What percent of the offspring are expected to show the recessive trait?', c: ['0%', '25%', '50%', '75%'], why: 'The boxes are BB, BB, Bb, Bb. Every offspring has at least one B, so none show the recessive trait.' },
        { q: 'P = purple (dominant) and p = white. A plant has purple flowers. What could its genotype be?', c: ['PP or Pp', 'Only PP', 'Only Pp', 'pp'], why: 'One P is enough for purple, so both PP and Pp look purple. Only pp is white.' },
        { q: 'Two Rr plants are crossed. What is the expected genotype ratio?', c: ['1 RR : 2 Rr : 1 rr', '3 RR : 1 rr', '1 RR : 1 rr', '2 RR : 1 Rr : 1 rr'], why: 'The four boxes are RR, Rr, Rr, rr. That is 1 RR, 2 Rr, and 1 rr.' },
        { q: 'Two white-flowered pea plants (pp) are crossed. What will the offspring look like?', c: ['All white', 'All purple', '3 purple : 1 white', 'Half purple and half white'], why: 'Each parent can only give p, so every offspring is pp and has white flowers.' },
        { q: 'B = black fur (dominant). A black dog could be BB or Bb. It is crossed with a white dog (bb), and some puppies are white. What is the black dog\'s genotype?', c: ['Bb', 'BB', 'bb', 'There is no way to tell'], why: 'White puppies are bb, so they got a b from each parent. The black parent must carry b, so it is Bb.' },
        { q: 'T = tall (dominant) and t = short. What is the genotype of a plant that is homozygous dominant?', c: ['TT', 'Tt', 'tt', 'T'], why: 'Homozygous means two matching alleles. Dominant means capital letters, so the genotype is TT.' },
        { q: 'A Pp plant is crossed with a pp plant, and 80 seeds grow. About how many plants will have white flowers (pp)?', c: ['40', '20', '60', '80'], why: 'The boxes are Pp, Pp, pp, pp, so 50% are expected to be pp. 50% of 80 = 40.' },
        { q: 'What living thing did Gregor Mendel breed to find the basic rules of heredity?', c: ['Pea plants', 'Fruit flies', 'Tigers', 'Strawberries'], why: 'Mendel bred pea plants about 160 years ago and tracked traits like flower color across generations.' },
        { q: 'Two Bb parents have exactly 4 offspring. Must exactly 1 of them be bb?', c: ['No, each baby has a 25% chance; it is not a promise', 'Yes, exactly 1 out of 4 must be bb', 'Yes, because the Punnett square has 4 boxes', 'No, because two Bb parents can never have a bb baby'], why: 'Punnett squares give chances. Like flipping a coin, real results can be different from what is expected.' },
        { q: 'A PP plant and a Pp plant both have purple flowers. What does this show?', c: ['Different genotypes can have the same phenotype', 'They have the same genotype', 'Phenotype has nothing to do with alleles', 'The p allele is dominant'], why: 'The letters are different (PP vs. Pp), but one P is enough, so both plants look purple.' },
        { q: 'A Tt plant makes gametes (sex cells). Which alleles can one gamete carry?', c: ['T or t, just one allele', 'Both T and t together', 'Only T', 'TT or tt'], why: 'Each gamete carries one allele for each gene. That is why the alleles go along the top and side of a Punnett square.' },
        { q: 'P = purple (dominant) and p = white. A farmer wants seeds that will ALWAYS grow white flowers. Which plants should he cross?', c: ['pp × pp', 'Pp × Pp', 'PP × pp', 'Pp × pp'], why: 'Only pp × pp gives all pp offspring. Every other cross can pass on a P allele and make purple flowers.' },
      ],
      realLife: {
        text: `<p>At some zoos, two <b>orange</b> tigers have had a <b>white</b> cub. How? White fur in tigers comes from a recessive allele. Both parents were <b>heterozygous</b> (each had one hidden white allele), so each cub had a 25% chance of getting two copies.</p>
          <p>Doctors use Punnett squares too. A <b>genetic counselor</b> (a health worker who explains how traits run in families) can tell parents the chance their child will have a recessive condition, like <b>sickle cell disease</b>.</p>
          <p>Farmers breed plants and animals the same way Mendel did, picking parents to get the traits they want.</p>`,
        prompt: 'Two orange tigers have a white cub. Using the words dominant, recessive, and heterozygous, explain how this can happen.',
      },
    },
    {
      key: 'b06-03',
      title: 'Complex patterns of inheritance',
      videos: [
        { id: 'YJHGfbW55l0', title: 'Incomplete dominance, codominance, polygenic traits, and epistasis' },
        { id: '9O5JQqlngFY', title: 'Multiple alleles (ABO blood types) and Punnett squares' },
        { id: 'dN9SZHO6Wjg', title: 'Punnett squares and sex-linked traits' },
      ],
      learn: `
        <p>Mendel's peas followed simple rules, but many traits don't. Here are 5 other patterns.</p>
        <p><b>1. Incomplete dominance</b> (neither allele fully wins, so the trait is a blend): red snapdragon flowers × white snapdragons = all <b>pink</b>. Two pinks give 1 red : 2 pink : 1 white.</p>
        <p><b>2. Codominance</b> (both alleles show up fully, side by side): a red bull × a white cow can have a <b>roan</b> calf, with red hairs AND white hairs mixed together.</p>
        <p><b>3. Multiple alleles</b> (a gene with more than 2 versions): human blood type has 3 alleles, Iᴬ, Iᴮ, and i. Iᴬ and Iᴮ are codominant, and i is recessive. You still get only 2.</p>
        <ul><li>Type A: IᴬIᴬ or Iᴬi</li>
        <li>Type B: IᴮIᴮ or Iᴮi</li>
        <li>Type AB: IᴬIᴮ</li>
        <li>Type O: ii</li></ul>
        <p><b>4. Polygenic traits</b> (traits controlled by many genes): height and skin color come in a smooth range of in-between values, not just 2 or 3 types.</p>
        <p><b>5. Sex-linked traits</b> (genes carried on a sex chromosome, usually the X): females are XX and males are XY. A male has only 1 X, so one recessive allele is enough to show the trait. A female with one copy is a <b>carrier</b> (she has the allele but doesn't show the trait). That's why <b>red-green colorblindness</b> (trouble telling red from green) is much more common in boys.</p>
        <p>Colorblindness alleles: Xᴺ = normal vision, Xⁿ = colorblind.</p>`,
      quiz: [
        { q: 'Red snapdragons are crossed with white snapdragons, and all the babies are pink. What pattern is this?', c: ['Incomplete dominance', 'Codominance', 'A sex-linked trait', 'A polygenic trait'], why: 'In incomplete dominance, neither allele fully wins, so the phenotype is a blend in between.' },
        { q: 'A red bull and a white cow have a calf with both red hairs and white hairs. What pattern is this?', c: ['Codominance', 'Incomplete dominance', 'A recessive trait', 'A sex-linked trait'], why: 'In codominance both alleles show fully. The calf has red hairs and white hairs, not pink ones.' },
        { q: 'Two pink snapdragons are crossed (incomplete dominance). What percent of the offspring are expected to be pink?', c: ['50%', '25%', '75%', '100%'], why: 'The boxes are red, pink, pink, white. Two of the 4 boxes are pink, so 50%.' },
        { q: 'What is the genotype of a person with type O blood?', c: ['ii', 'IᴬIᴮ', 'Iᴬi', 'Iᴮi'], why: 'The i allele is recessive, so type O shows up only with two copies: ii.' },
        { q: 'A person has the genotype IᴬIᴮ. What is their blood type?', c: ['AB', 'A', 'B', 'O'], why: 'Iᴬ and Iᴮ are codominant, so both show up. The person has type AB blood.' },
        { q: 'A type A parent (Iᴬi) and a type B parent (Iᴮi) have a child. Which blood types are possible?', c: ['A, B, AB, or O', 'Only A or B', 'Only AB', 'Only A, B, or AB'], why: 'The Punnett square gives IᴬIᴮ, Iᴬi, Iᴮi, and ii, so all four blood types are possible.' },
        { q: 'Why is human blood type an example of multiple alleles?', c: ['The gene has 3 versions: Iᴬ, Iᴮ, and i', 'Many different genes control it', 'It is carried on the X chromosome', 'It changes depending on what you eat'], why: 'Each person has only 2 alleles, but 3 versions of the blood type gene exist in people.' },
        { q: 'Human height comes in many in-between values, not just "tall" or "short." Why?', c: ['Height is polygenic, controlled by many genes', 'Height is controlled by one dominant allele', 'Height is a sex-linked trait', 'Height is an example of codominance'], why: 'Many genes each add a little, so height forms a smooth range, with most people near the middle.' },
        { q: 'Why is red-green colorblindness more common in males?', c: ['Males have only one X chromosome, so one recessive allele is enough', 'Males have two X chromosomes', 'The colorblind allele is dominant in males', 'Males get all their genes from their father'], why: 'The gene is on the X. Males (XY) have no second X to cover up a recessive allele.' },
        { q: 'A mother is a carrier for colorblindness (XᴺXⁿ). The father has normal vision (XᴺY). What is the chance a son is colorblind?', c: ['50%', '25%', '0%', '100%'], why: 'Sons get the Y from dad and one X from mom. Half get Xⁿ, so 50% of sons are colorblind.' },
        { q: 'Same parents: an XᴺXⁿ mother and an XᴺY father. What is the chance a daughter is colorblind?', c: ['0%', '25%', '50%', '100%'], why: 'Every daughter gets dad\'s Xᴺ, which covers up an Xⁿ from mom. Half are carriers, but none are colorblind.' },
        { q: 'Which genotype is a female carrier for colorblindness?', c: ['XᴺXⁿ', 'XⁿXⁿ', 'XᴺXᴺ', 'XⁿY'], why: 'A carrier has one hidden recessive allele. Her Xᴺ gives her normal vision, but she can pass on Xⁿ.' },
        { q: 'Snapdragon color shows incomplete dominance. A red snapdragon is crossed with a pink one. What percent of the offspring are expected to be white?', c: ['0%', '25%', '50%', '75%'], why: 'The red parent can only give a red allele, so every baby gets at least one. The boxes are red, red, pink, pink.' },
        { q: 'A pink snapdragon is crossed with a white one (incomplete dominance). What are the expected offspring?', c: ['1 pink : 1 white', 'All pink', '1 red : 2 pink : 1 white', '3 pink : 1 white'], why: 'Pink has one red and one white allele; white has two white. The boxes are pink, pink, white, white.' },
        { q: 'A type O parent (ii) and a type AB parent (IᴬIᴮ) have a child. Which blood types are possible?', c: ['A or B only', 'AB or O only', 'A, B, AB, or O', 'O only'], why: 'The child gets i from one parent and Iᴬ or Iᴮ from the other: Iᴬi (type A) or Iᴮi (type B).' },
        { q: 'Two type O parents (ii and ii) have children. What blood type will the children have?', c: ['Type O', 'Type A', 'Type AB', 'Any of the four types'], why: 'Each parent can only pass on i, so every child is ii, which is type O.' },
        { q: 'An IᴬIᴬ parent and an Iᴮi parent have a child. What is the chance the child has type AB blood?', c: ['50%', '25%', '0%', '100%'], why: 'The boxes are IᴬIᴮ, IᴬIᴮ, Iᴬi, Iᴬi. Half are IᴬIᴮ (type AB) and half are Iᴬi (type A).' },
        { q: 'A person has type A blood. What could their genotype be?', c: ['IᴬIᴬ or Iᴬi', 'Only IᴬIᴬ', 'IᴬIᴮ', 'ii'], why: 'Iᴬ is dominant over i, so both IᴬIᴬ and Iᴬi give type A. IᴬIᴮ is AB, and ii is O.' },
        { q: 'A colorblind father (XⁿY) and a mother with two normal alleles (XᴺXᴺ) have a son. What is the chance he is colorblind?', c: ['0%', '50%', '100%', '25%'], why: 'A son gets his X from his mom and his Y from his dad. Mom only has Xᴺ, so sons have normal vision.' },
        { q: 'Same parents: a colorblind father (XⁿY) and an XᴺXᴺ mother. What will their daughters be?', c: ['All carriers with normal vision', 'All colorblind', 'Half colorblind and half normal', 'All with two normal alleles'], why: 'Every daughter gets dad\'s Xⁿ and mom\'s Xᴺ. That makes her XᴺXⁿ, a carrier with normal vision.' },
        { q: 'Which is an example of codominance?', c: ['A chicken with some all-black feathers and some all-white feathers', 'A pink flower from a red parent and a white parent', 'Heights that come in a smooth range', 'Colorblindness being more common in boys'], why: 'In codominance, both alleles show fully, side by side. A pink flower is a blend, which is incomplete dominance.' },
        { q: 'Which trait is polygenic (controlled by many genes)?', c: ['Skin color, which comes in a smooth range of shades', 'ABO blood type', 'Red-green colorblindness', 'Pink color in snapdragons'], why: 'Many genes each add a little to skin color. The other traits each come from one gene.' },
        { q: 'What are the sex chromosomes of a typical male?', c: ['XY', 'XX', 'YY', 'X only'], why: 'Females are usually XX and males are usually XY. A male\'s single X is why sex-linked traits show up more in boys.' },
        { q: 'Can a girl be red-green colorblind?', c: ['Yes, if she has two colorblind alleles (XⁿXⁿ)', 'No, never', 'Yes, with just one colorblind allele (XᴺXⁿ)', 'Only if she has a Y chromosome'], why: 'A girl needs Xⁿ from both parents to be colorblind. With just one Xⁿ, she is a carrier.' },
      ],
      realLife: {
        text: `<p>Before surgery, hospitals check your <b>blood type</b>. Getting the wrong type can make your body attack the new blood. Type O red blood cells can usually be given to people of any ABO type, so blood banks always need O donors.</p>
          <p>Red-green colorblindness affects about <b>1 in 12 men</b> of Northern European background, but only about 1 in 200 women. Many video games have a colorblind mode so red and green are easier to tell apart.</p>
          <p>Look around your class: heights aren't just "tall" and "short." They fill a whole range, because many genes work together.</p>`,
        prompt: 'How can a boy be colorblind even if neither of his parents is colorblind? Explain using the words X chromosome, recessive, and carrier.',
      },
    },
    {
      key: 'b06-04',
      title: 'Environmental effects on phenotype',
      videos: [
        { id: '9zwq8N4Ufd8', title: 'Genetic traits: nature? Nurture? Not that simple' },
        { id: 'MD3Fc0XOjWk', title: 'Epigenetics' },
      ],
      learn: `
        <p>Your genes aren't the whole story. Your <b>phenotype</b> (the traits you can see or measure) comes from your <b>genotype</b> (the alleles you inherited) <b>plus your environment</b> (everything around you: food, sunlight, temperature, exercise, and more).</p>
        <p>People call this <b>nature</b> (genes) and <b>nurture</b> (environment). For most traits, both matter.</p>
        <ul><li><b>Height</b>: genes set a possible range. <b>Nutrition</b> (eating enough healthy food) helps a child reach the top of that range. Poor nutrition keeps him shorter. Average heights in many countries rose over the last 100 years as food got better, much faster than genes can change.</li>
        <li><b>Hydrangea flowers</b>: the same plant grows <b>blue</b> flowers in <b>acidic</b> soil (soil with more acid in it) and <b>pink</b> flowers in less acidic soil.</li>
        <li><b>Himalayan rabbits</b>: dark fur grows only on cold body parts, like the ears, nose, and paws. The protein that makes dark color works only where it's cool.</li>
        <li><b>Flamingos</b>: they're pink because of pigments (colors) in the tiny shrimp and <b>algae</b> (simple plant-like living things) they eat. Without that food, they fade to pale.</li>
        <li><b>Skin</b>: sunlight makes skin darker (a tan).</li></ul>
        <p><b>Epigenetics</b> (chemical tags that switch genes on or off without changing the DNA code) is one way the environment changes how genes get used.</p>
        <p><b>Identical twins</b> have the same DNA, so differences between them come mostly from the environment.</p>`,
      quiz: [
        { q: 'A phenotype is the result of…', c: ['genotype and environment together', 'genotype only', 'environment only', 'the number of chromosomes only'], why: 'Genes set what\'s possible. Food, sunlight, temperature, and other surroundings affect what actually shows up.' },
        { q: 'In "nature and nurture," what does nurture mean?', c: ['The environment, like food, home, and experiences', 'The genes you inherit', 'The DNA in your gametes', 'The dominant alleles you have'], why: 'Nature means your genes. Nurture means everything around you that shapes how you grow.' },
        { q: 'Two kids both have genes for being tall. One eats healthy food; the other doesn\'t get enough food. What is most likely?', c: ['The well-fed kid grows taller', 'They grow to exactly the same height', 'The hungry kid grows taller', 'The food changes their genes for height'], why: 'Genes set a range for height. Poor nutrition can keep a child from reaching his full height.' },
        { q: 'A hydrangea had blue flowers. After its soil changed, it grew pink flowers. What caused the change?', c: ['The soil pH (how acidic the soil is)', 'The plant\'s DNA code changed', 'The plant lost some chromosomes', 'The plant got new alleles from its leaves'], why: 'Hydrangeas grow blue flowers in acidic soil and pink in less acidic soil. The genes stayed the same.' },
        { q: 'Himalayan rabbits have dark fur only on their ears, nose, and paws. Why?', c: ['The protein that makes dark color works only in colder body parts', 'Those body parts have different DNA', 'They got dark-fur genes for those parts from only one parent', 'Sunlight darkens only those spots'], why: 'Ears, nose, and paws are cooler than the rest of the body. The dark-color protein only works where it\'s cool.' },
        { q: 'Scientists shave a patch on a Himalayan rabbit\'s back and keep it cold while the fur grows back. What happens?', c: ['The fur grows back dark', 'The fur grows back white', 'No fur grows back', 'The rabbit\'s genes change to dark-fur genes'], why: 'Cold lets the dark-color protein work, so dark fur grows. Temperature changed, not the genes.' },
        { q: 'Flamingos in a zoo turn pale if they don\'t get the right food. What does this show?', c: ['Diet can change phenotype', 'Flamingos lose their genes in zoos', 'Pink color is a sex-linked trait', 'Zoo food changes flamingo DNA'], why: 'Flamingos get their pink color from pigments in their food. Same genes, different diet, different color.' },
        { q: 'Identical twins have the same DNA. One twin is much stronger than the other. What is the most likely cause?', c: ['The environment, like exercise and food', 'Different alleles for strength', 'Different numbers of chromosomes', 'A dominant strength allele in only one twin'], why: 'Identical twins share the same genes, so differences between them mostly come from the environment.' },
        { q: 'What is epigenetics?', c: ['Chemical tags that turn genes on or off without changing the DNA code', 'Changes in the order of the DNA letters', 'Swapping DNA pieces during meiosis', 'Getting an extra chromosome from a parent'], why: 'Epigenetic tags change which genes get used. The DNA code itself stays the same.' },
        { q: 'Average height in many countries went up a lot over the last 100 years. What is the best explanation?', c: ['Better nutrition and health care', 'Everyone\'s genes changed quickly', 'People started having more chromosomes', 'Height became a dominant trait'], why: 'Genes change very slowly over many generations. Better food and health let more people reach their full height.' },
        { q: 'A boy spends the summer outside, and his skin gets darker. Which statement is true?', c: ['Sunlight changed his phenotype, not his genotype', 'Sunlight changed his genotype, not his phenotype', 'Sunlight changed both his genotype and his phenotype', 'Sunlight changed neither his genotype nor his phenotype'], why: 'A tan is skin making more pigment in sunlight. His genes stay the same, so a tan isn\'t passed on.' },
        { q: 'Which trait is affected by BOTH genes and environment?', c: ['Height', 'Blood type', 'The number of chromosomes', 'Whether you are XX or XY'], why: 'Height depends on many genes plus nutrition and health. Blood type is set by your alleles alone.' },
        { q: 'A New Jersey gardener has acidic soil and blue hydrangeas. She wants pink flowers. What could she add to the soil?', c: ['Lime, which makes soil less acidic', 'Something that makes the soil more acidic', 'Nothing, because flower color comes only from genes', 'Extra water every day'], why: 'Hydrangeas grow pink in less acidic soil. Lime lowers the acid, so the same plant grows pink flowers.' },
        { q: 'A boy is born with genes that could make him a fast runner, but he never trains. What is most likely?', c: ['He will not reach his full speed', 'He will be the fastest runner anyway', 'His speed genes will disappear', 'His genes will change into slow genes'], why: 'Genes set the range. Practice and food help decide where in that range a person ends up.' },
        { q: 'Identical twins have the same DNA. As they grow older, different genes are switched on in each twin. What could explain this?', c: ['Epigenetic tags caused by their different environments', 'Their DNA letters changed into a different order', 'One twin got extra chromosomes', 'Crossing over happened in their body cells'], why: 'Epigenetic tags turn genes on or off without changing the DNA. Different lives can lead to different tags.' },
        { q: 'Scientists cut one plant into two pieces, so both pieces have the same genes. One grows in full sun and one in deep shade. The sunny one grows much bigger. What caused the difference?', c: ['The environment (sunlight)', 'The pieces had different genes', 'One piece lost its chromosomes', 'Cutting the plant changed its alleles'], why: 'The two pieces have identical genes, so the difference had to come from the environment.' },
        { q: 'In many kinds of turtles, eggs in warm sand hatch mostly females, and eggs in cooler sand hatch mostly males. What does this show?', c: ['Temperature can affect phenotype', 'Warm sand changes the turtles\' DNA', 'Only genes decide this trait', 'Cool sand gives the eggs extra chromosomes'], why: 'The nest temperature, part of the environment, affects how each baby turtle develops.' },
        { q: 'Which is an example of NATURE (genes) shaping a trait?', c: ['Inheriting alleles for type B blood', 'Eating healthy food while growing', 'Exercising every day', 'Spending time in the sun'], why: 'Blood type comes from the alleles you inherit. Food, exercise, and sunlight are part of nurture.' },
        { q: 'Which of these is part of a person\'s phenotype?', c: ['How tall they are', 'The alleles in their DNA', 'Their genotype, such as Bb', 'The genes on their chromosomes'], why: 'Phenotype is what you can see or measure, like height. Alleles and genes make up the genotype.' },
        { q: 'Two cuttings from the same hydrangea are planted in different yards. One grows blue flowers and the other grows pink. Which is true?', c: ['Same genotype, different phenotype', 'Different genotype, same phenotype', 'Different genotype, different phenotype', 'Same genotype, same phenotype'], why: 'Cuttings from one plant have the same genes. The soil made their flower colors different.' },
        { q: 'An arctic fox grows white fur in winter and brown fur in summer. Its genes stay the same. What causes the change?', c: ['The changing seasons in its environment', 'Its DNA changes twice a year', 'It gets new alleles every winter', 'It decides which color to grow'], why: 'The fox\'s genes allow both colors. Signals from the seasons decide which color of fur grows.' },
        { q: 'Scientists want to learn how much the environment affects a trait. Which people would be best to study?', c: ['Identical twins raised in different homes', 'Two strangers raised in different homes', 'Brothers who are not twins, raised together', 'One person measured once'], why: 'Identical twins share the same DNA. Raised apart, their differences mostly come from the environment.' },
        { q: 'A man lifts weights for years and builds big muscles. Will his children be born with big muscles because of his training?', c: ['No, training changed his phenotype, not the genes he passes on', 'Yes, because he worked hard', 'Yes, but only his sons', 'Yes, because exercise changes the DNA in every cell'], why: 'Exercise changes the body, not the DNA passed to children. Only inherited genes are passed down.' },
        { q: 'A girl\'s genes allow her to grow strong bones, but she gets very little calcium in her food. What is most likely?', c: ['Her bones may not grow as strong as her genes allow', 'Her bone genes will change', 'Her bones will be stronger than her genes allow', 'Food has no effect on bones'], why: 'Genes set what\'s possible. Without enough calcium, her body can\'t build bones to their full strength.' },
      ],
      realLife: {
        text: `<p>Drive along the <b>Jersey Shore</b> in summer and you'll see hydrangea bushes with big blue flowers. Much of New Jersey has acidic soil, which turns them blue. Some gardeners add lime (a powder that makes soil less acidic) to get pink flowers instead.</p>
          <p>Athletes born with "fast" genes still have to train. Genes set the range; practice and food decide where you land in it.</p>
          <p>Your height works the same way. Eating enough protein, fruits, and vegetables while you're growing helps you reach your full height.</p>`,
        prompt: 'Pick one of your own traits, like your height, strength, or speed. Explain how your genes AND your environment both helped shape it.',
      },
    },
  ],
};
