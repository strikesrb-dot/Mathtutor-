// Unit 7 — Mechanisms of evolution. NJ: HS-LS4-2, HS-LS4-3, HS-LS4-4, HS-LS4-5, HS-LS2-8
// Follows Khan Academy's NGSS high school biology, Unit 7.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
// The allele-frequency number was recomputed with node before writing.
export default {
  id: 'b07', n: 7, title: 'Mechanisms of evolution', nj: ['HS-LS4-2', 'HS-LS4-3', 'HS-LS4-4', 'HS-LS4-5', 'HS-LS2-8'],
  lessons: [
    {
      key: 'b07-01',
      title: 'Mechanisms of evolution',
      videos: [
        { id: 'ifyEocJ2Rog', title: 'Natural selection and evolution' },
        { id: 'fI7IV3x-dGI', title: 'Evolution' },
        { id: 'W0TM4LQmoZY', title: 'Genetic drift' },
      ],
      learn: `
        <p>In biology, <b>evolution</b> (a change in the genes of a population over many generations) does not happen to one animal during its life. It happens to a <b>population</b> (a group of the same species living in the same area).</p>
        <p>Scientists measure <b>allele frequency</b> (how common one version of a gene is in a population). When allele frequencies change, the population is evolving. Scientists explain four main <b>mechanisms</b> (ways it happens):</p>
        <ol><li><b>Mutation</b> (a random change in DNA) makes brand-new alleles. It is the original source of all new alleles.</li>
        <li><b>Gene flow</b> (genes moving between populations) happens when individuals move to a new group and have offspring there. It makes the two groups more alike.</li>
        <li><b>Genetic drift</b> (random changes in allele frequency by pure chance) matters most in small populations. Two kinds are the <b>bottleneck effect</b> (a disaster kills most of a population at random) and the <b>founder effect</b> (a few individuals start a new population somewhere else).</li>
        <li><b>Natural selection</b> (individuals with helpful traits survive and reproduce more) is the one mechanism that steadily makes a population better suited to its environment.</li></ol>
        <p><b>Remember:</b> individuals don't evolve. Populations do, across generations.</p>`,
      quiz: [
        { q: 'In biology, what is evolution?', c: ['A change in the genes of a population over many generations', 'One animal changing its body during its lifetime', 'An animal choosing to grow new body parts', 'Any change in the weather over time'], why: 'Evolution is about populations and their genes, across generations. One animal does not evolve during its life.' },
        { q: 'A population of flowers has 200 alleles for flower color. 50 of them are the red allele. What is the frequency of the red allele?', c: ['25%', '50%', '75%', '4%'], why: '50 ÷ 200 = 0.25, which is 25%.' },
        { q: 'What is the original source of brand-new alleles (gene versions)?', c: ['Mutation', 'Gene flow', 'Genetic drift', 'Natural selection'], why: 'A mutation is a random change in DNA that creates a new allele. The other mechanisms only move or sort alleles that already exist.' },
        { q: 'A few deer leave their herd, join a herd in another forest, and have offspring there. Which mechanism is this?', c: ['Gene flow', 'Mutation', 'Genetic drift', 'Natural selection'], why: 'Gene flow means genes move between populations when individuals move and reproduce in a new group.' },
        { q: 'Genetic drift is a change in allele frequency caused by…', c: ['random chance', 'traits that help survival', 'animals moving between groups', 'animals wanting to change'], why: 'Drift is luck. Which individuals survive or have offspring is random, not based on their traits.' },
        { q: 'Genetic drift has the biggest effect in which kind of population?', c: ['A small population', 'A large population', 'A population with no mutations', 'A population that lives in water'], why: 'In a small group, random luck can quickly change how common an allele is. In a big group, chance events even out.' },
        { q: 'A wildfire kills most of the beetles in a field at random. The few survivors have less genetic variety. What is this called?', c: ['The bottleneck effect', 'The founder effect', 'Gene flow', 'Natural selection'], why: 'A disaster shrinks the population by chance, like squeezing through the narrow neck of a bottle. Many alleles are lost.' },
        { q: 'A storm blows a few birds to a new island, and they start a new population there. This is an example of…', c: ['the founder effect', 'the bottleneck effect', 'natural selection', 'mutation'], why: 'The few founders carry only some of the original alleles, so the new population is different just by chance.' },
        { q: 'Which mechanism steadily makes a population better suited to its environment?', c: ['Natural selection', 'Genetic drift', 'Mutation', 'Gene flow'], why: 'Natural selection favors helpful traits, so they become more common. The other mechanisms can push a population in random directions.' },
        { q: 'What does allele frequency mean?', c: ['How common one version of a gene is in a population', 'How fast a gene makes a protein', 'How many genes one cell has', 'How often an animal has offspring'], why: 'Scientists track evolution by watching allele frequencies change, for example a dark-fur allele going from 20% to 60%.' },
        { q: 'Two populations of frogs keep swapping members. What will gene flow do to them over time?', c: ['Make the two populations more alike', 'Make the two populations more different', 'Create brand-new mutations', 'Stop both populations from reproducing'], why: 'Gene flow mixes alleles between the groups, so their genes become more similar.' },
        { q: 'Which statement about mutations is correct?', c: ['They happen randomly and can be harmful, helpful, or have no effect', 'They always help the organism survive', 'They happen because the organism needs them', 'They only happen in large populations'], why: 'Mutations are random changes in DNA. Most have no effect or are harmful, but a few turn out to be helpful.' },
      ],
      realLife: {
        text: `<p>You can see these mechanisms in the real world.</p>
          <p><b>Gene flow:</b> bees carry pollen from one field of sunflowers to another field, mixing their genes.</p>
          <p><b>Genetic drift:</b> in the 1800s, northern elephant seals were hunted until only a small group was left. Today there are well over 100,000 of them, but they all have very similar genes. That's the bottleneck effect.</p>
          <p><b>Natural selection:</b> farmers who spray the same weed killer every year start to see weeds it can't kill. The weeds that survived passed their genes on.</p>`,
        prompt: 'Pick one of the four mechanisms (mutation, gene flow, genetic drift, or natural selection) and explain how it could change a population of squirrels living in a park.',
      },
    },
    {
      key: 'b07-02',
      title: 'Natural selection and adaptation',
      videos: [
        { id: 'giw2ELZr-bE', title: 'Natural selection and adaptation' },
        { id: '7VM9YxmULuo', title: 'Natural selection' },
      ],
      learn: `
        <p><b>Natural selection</b> (the process where living things with helpful traits survive and reproduce more) was described by <b>Charles Darwin</b> in 1859. Scientists explain that it needs four things:</p>
        <ol><li><b>Variation</b> (differences between individuals): members of a population are not all the same.</li>
        <li><b>Inheritance</b> (traits passed from parents to offspring through genes): the differences can be passed down.</li>
        <li><b>Overproduction</b> (more offspring are born than can survive): food and space run short, so they <b>compete</b>.</li>
        <li><b>Differential survival</b> (some survive and reproduce more than others): individuals with helpful traits leave more offspring.</li></ol>
        <p>Over many generations, the helpful trait becomes more common. It is an <b>adaptation</b> (an inherited trait that helps an organism survive and reproduce in its environment). <b>Fitness</b> (how well an organism survives and reproduces) doesn't mean being strongest. It means leaving the most offspring.</p>
        <p><b>Peppered moths:</b> in England in the 1800s, factory soot made tree bark dark. Birds spotted light moths more easily, so more dark moths survived. Soon most moths were dark.</p>
        <p><b>Antibiotic resistance</b> (when medicine can no longer kill certain bacteria): an antibiotic kills most bacteria, but a few already have a mutation that lets them survive. They multiply, and the medicine stops working.</p>
        <p><b>Key point:</b> the environment doesn't create the trait. The trait was already there, and the environment "selects" it.</p>`,
      quiz: [
        { q: 'Which is NOT one of the conditions needed for natural selection?', c: ['Organisms choosing which traits they want', 'Variation in traits', 'Traits that can be inherited', 'More offspring than can survive'], why: 'Organisms can\'t choose their genes. Natural selection needs variation, inheritance, overproduction, and differences in survival.' },
        { q: 'In biology, the "fittest" individual is the one that…', c: ['survives and has the most offspring', 'is the biggest and strongest', 'runs the fastest', 'lives the longest without having offspring'], why: 'Fitness means passing on genes. A small animal that leaves many offspring is fitter than a strong one that leaves none.' },
        { q: 'Why do members of a population have to compete?', c: ['More offspring are born than the environment can support', 'Every organism wants to be the leader', 'All the organisms are exactly the same', 'Organisms never die of old age'], why: 'Overproduction: food, water, and space are limited, so not all offspring can survive.' },
        { q: 'In the 1800s in England, soot made tree bark darker. What happened to the peppered moth population?', c: ['Dark moths became more common because birds saw them less', 'Light moths became more common because they were stronger', 'Light moths turned dark on purpose to hide', 'All the moths left England'], why: 'Birds ate the moths that stood out on dark bark. Dark moths survived and passed on their dark color.' },
        { q: 'Some bacteria survive an antibiotic and multiply. Where did their resistance come from?', c: ['A random mutation that was already there before the medicine', 'The antibiotic taught the bacteria to resist it', 'The bacteria decided to become stronger', 'The patient\'s body gave the bacteria new genes'], why: 'The resistance mutation was there by chance. The antibiotic killed the others, so the resistant bacteria took over.' },
        { q: 'Why is taking antibiotics when you don\'t need them, like for a cold, a problem?', c: ['It helps resistant bacteria survive and spread', 'It makes your own cells resistant', 'It turns bacteria into viruses', 'It makes colds last forever'], why: 'Each use kills the easy-to-kill bacteria and leaves resistant ones behind. Overuse makes resistant bacteria more common.' },
        { q: 'What is an adaptation?', c: ['An inherited trait that helps an organism survive and reproduce in its environment', 'A change an animal makes on purpose during its life', 'A skill an animal learns by practicing', 'Any mutation, helpful or not'], why: 'Adaptations are passed down through genes. They become common because natural selection favors them.' },
        { q: 'A giraffe stretches its neck all its life to reach leaves. Will its babies be born with longer necks because of the stretching?', c: ['No, because changes made during life are not passed on through genes', 'Yes, because the parent worked hard for it', 'Yes, but only if it stretches every single day', 'Yes, but only its male babies'], why: 'Stretching doesn\'t change the DNA in sperm or egg cells. Only inherited variation gets passed on.' },
        { q: 'Which of these is the best example of variation?', c: ['Rabbits in the same litter have different fur colors', 'All the rabbits look exactly the same', 'A rabbit grows bigger as it gets older', 'A rabbit hides when it sees a fox'], why: 'Variation means differences between individuals in a population. Natural selection can\'t work without those differences.' },
        { q: 'Farmers spray a pesticide (bug poison) every year. After 10 years, it barely works. Why?', c: ['Insects that could survive it reproduced, so resistance became common', 'Each insect slowly got used to the poison', 'The insects learned to stay away from farms', 'The pesticide changed into water'], why: 'Survivors had genes for resistance and passed them on. Each year, more of the population was resistant.' },
        { q: 'In natural selection, what does the environment do?', c: ['It "selects" which existing traits help organisms survive', 'It creates the new traits that organisms need', 'It makes every organism change in the same way', 'It stops all mutations from happening'], why: 'The variation is already there. The environment decides which traits give an advantage.' },
        { q: 'Who published the idea of evolution by natural selection in 1859?', c: ['Charles Darwin', 'Gregor Mendel', 'Robert Hooke', 'Isaac Newton'], why: 'Darwin wrote "On the Origin of Species" in 1859. His trip to the Galápagos Islands shaped his ideas.' },
      ],
      realLife: {
        text: `<p><b>Antibiotic resistance</b> is natural selection happening in hospitals right now. Every time an antibiotic is used, it kills the bacteria that are easy to kill. The few with resistance survive and multiply.</p>
          <p>The same thing happens with <b>bed bugs and head lice</b> that sprays can't kill anymore, and with <b>weeds</b> that farmers spray every year.</p>
          <p>That's why doctors say antibiotics won't help a cold. Colds are caused by viruses, so the medicine does nothing to the cold, and it gives resistant bacteria a chance to spread.</p>`,
        prompt: 'Explain step by step how a population of bacteria can become resistant to an antibiotic. Use the words variation, survive, and reproduce.',
      },
    },
    {
      key: 'b07-03',
      title: 'Group behavior and evolution',
      videos: [
        { id: '61Zii5J8qoI', title: 'Evolution of group behavior' },
        { id: 'vG-QZOTc5_Q', title: 'Inside the ant colony' },
        { id: 'dkP8NUwB2io', title: 'How do schools of fish swim in harmony?' },
      ],
      learn: `
        <p>Many animals live and move in groups: <b>herds</b> (groups of grazing animals like zebras), <b>flocks</b> (groups of birds), and <b>schools</b> (groups of fish). Scientists explain that <b>group behavior</b> (the way animals act together) was shaped by natural selection because it helps individuals <b>survive and reproduce</b>.</p>
        <p><b>How groups help:</b></p>
        <ul><li><b>Protection from predators</b> (animals that hunt other animals): more eyes spot danger sooner, and a swirling school of fish confuses a predator.</li>
        <li><b>Getting food:</b> wolves hunt in packs, so they can catch animals much bigger than one wolf could catch alone.</li>
        <li><b>Saving energy:</b> geese fly in a V shape, and each bird gets a lift from the air off the bird ahead.</li>
        <li><b>Protecting young:</b> musk oxen form a circle around their calves when wolves attack.</li></ul>
        <p><b>Social insects</b> (insects that live in organized colonies) like ants and honeybees take teamwork further. The <b>queen</b> lays the eggs, and <b>workers</b> find food, build the nest, and defend it. Honeybee workers do a <b>waggle dance</b> to show others where flowers are. Workers usually don't have their own offspring, but they help their relatives, who share many of their genes.</p>
        <p>Groups also have <b>costs</b>: members must share food, and diseases spread more easily. A group behavior is favored only when its benefits are bigger than its costs.</p>`,
      quiz: [
        { q: 'Why do scientists think group behaviors like herding evolved?', c: ['They help individuals survive and reproduce, so natural selection favored them', 'Animals decided to make friends', 'Groups make each animal grow bigger', 'Every animal is born knowing it must live alone'], why: 'Behaviors that help animals survive and have offspring get passed on, so they become more common over generations.' },
        { q: 'How does swimming in a school help small fish?', c: ['A predator has trouble picking out one fish to attack', 'The fish can breathe without gills', 'Predators can\'t see in water at all', 'The fish grow faster than fish that swim alone'], why: 'Hundreds of fish swirling together confuse a predator. Each fish also has a smaller chance of being the one caught.' },
        { q: 'Why do geese often fly in a V shape?', c: ['Each bird behind saves energy using air from the bird in front', 'To spell a letter that other birds can read', 'Because only the leader knows the way', 'So they can sleep while flying'], why: 'The birds in back get a lift from air moving off the wings ahead, so long trips take less energy.' },
        { q: 'When wolves attack, musk oxen form a circle around their calves. What does this behavior do?', c: ['Protects the young so more of them survive', 'Helps the adults find food', 'Keeps the calves cool in summer', 'Helps the musk oxen run faster'], why: 'Adults face outward with their horns, and the calves stay safe in the middle.' },
        { q: 'What is a social insect?', c: ['An insect that lives in an organized colony where members have different jobs', 'Any insect that lives alone', 'An insect that only comes out during the day', 'An insect that eats other insects'], why: 'Ants, honeybees, and termites live in colonies where each member has a role.' },
        { q: 'In an ant colony, what is the queen\'s main job?', c: ['Laying eggs', 'Giving orders to every worker', 'Finding all of the food', 'Fighting off enemies'], why: 'The queen lays the eggs. She doesn\'t give orders; workers react to the ants they meet.' },
        { q: 'How does a honeybee tell other bees where to find flowers?', c: ['It does a waggle dance', 'It buzzes a special song', 'It draws a map in the wax', 'It leads each bee there one at a time'], why: 'The direction and length of the dance tell other workers which way to fly and how far.' },
        { q: 'Worker ants usually don\'t have offspring of their own. How can their helping behavior still be favored by natural selection?', c: ['They help close relatives who share many of their genes survive and reproduce', 'Hard work lets them live forever', 'Every worker becomes a queen later', 'Natural selection doesn\'t affect insects'], why: 'Workers are the queen\'s daughters. Helping the colony passes on copies of genes they share with their relatives.' },
        { q: 'Which is a COST of living in a group?', c: ['Diseases can spread more easily', 'More eyes can watch for predators', 'Hunting large prey is easier', 'Young animals are better protected'], why: 'Living close together helps germs and parasites spread. Group members also have to share food.' },
        { q: 'Wolves hunt in packs. What is the main benefit?', c: ['They can catch large prey that one wolf could not catch alone', 'They never have to share food', 'They stay hidden from all other animals', 'It keeps them from getting sick'], why: 'Working together, a pack can bring down big animals like elk or moose.' },
        { q: 'A meerkat stands guard and gives an alarm call when a hawk comes. How does this help the group?', c: ['The others get a warning and can hide in time', 'The sound scares every hawk away forever', 'It helps the meerkats find food', 'It lets the guard eat more than the others'], why: 'Lookouts and warning calls give everyone a better chance to escape predators.' },
        { q: 'A group behavior will spread through a population by natural selection only if…', c: ['it helps individuals or their relatives survive and reproduce more', 'it looks interesting to scientists', 'every animal in the group enjoys it', 'it happens in a very large group'], why: 'If benefits beat costs, animals with that behavior leave more offspring, so the behavior becomes more common.' },
      ],
      realLife: {
        text: `<p>Watch a flock of pigeons in a parking lot. When one bird takes off in fright, the whole flock flies up together. Each bird reacts to its neighbors, so the warning spreads in a split second.</p>
          <p>Honeybees work as a team too. On hot days, workers fan their wings at the hive entrance to cool it. On cold days, they huddle in a tight ball to stay warm.</p>
          <p>People know the value of teamwork too. A soccer team, or a group of neighbors cleaning up a park, gets more done together than one person alone.</p>`,
        prompt: 'Think of an animal that lives in a group, like fish, birds, ants, or bees. Describe two ways that living in a group helps it survive.',
      },
    },
    {
      key: 'b07-04',
      title: 'Speciation and patterns of evolution',
      videos: [
        { id: 'YdZqK60bxjs', title: 'Species and the environment' },
        { id: 'udZUaNKXbJA', title: 'Speciation' },
        { id: 'rlfNvoyijmo', title: 'Speciation' },
      ],
      learn: `
        <p>A <b>species</b> (a group of organisms that can breed together and have <b>fertile</b> offspring, meaning offspring that can have young of their own) stays one species as long as its members keep sharing genes.</p>
        <p><b>Speciation</b> (the formation of a new species) starts with <b>reproductive isolation</b> (when two groups stop breeding with each other). Scientists describe several kinds:</p>
        <ul><li><b>Geographic isolation</b> (a river, mountain, or ocean separates the groups). This leads to <b>allopatric speciation</b> (new species forming in separate places).</li>
        <li><b>Behavioral isolation</b> (different songs or dances, so they don't choose each other as mates).</li>
        <li><b>Temporal isolation</b> (they breed at different times of day or year).</li>
        <li><b>Habitat isolation</b> (they live in the same area but use different spots, like ponds versus streams).</li></ul>
        <p><b>Sympatric speciation</b> (a new species forming in the same place, with no barrier) is common in plants.</p>
        <p>A <b>hybrid</b> (offspring of two different species), like a mule from a horse and a donkey, is usually <b>sterile</b> (can't have offspring). So horses and donkeys stay separate species.</p>
        <p><b>Example:</b> scientists explain that Darwin's finches came from one population that spread across the Galápagos Islands. Each island had different food, so different beak shapes were selected.</p>
        <p><b>Patterns:</b> <b>gradualism</b> (slow, steady change) and <b>punctuated equilibrium</b> (long quiet periods, then quick bursts of change). When an environment changes, some species spread, some split into new species, and some go <b>extinct</b> (die out completely).</p>`,
      quiz: [
        { q: 'Which definition of a species is used in most biology classes?', c: ['A group that can breed together and have fertile offspring', 'Any group of animals that look alike', 'All the animals living in one area', 'A group of animals that eat the same food'], why: 'Looking alike isn\'t enough. Members of a species must have offspring that can also reproduce.' },
        { q: 'A horse and a donkey can have a mule, but mules are sterile. What does this tell us?', c: ['Horses and donkeys are different species', 'Horses and donkeys are the same species', 'Mules are a new species', 'Mules can only have offspring with horses'], why: 'Their offspring can\'t reproduce, so horses and donkeys are separate species.' },
        { q: 'What is speciation?', c: ['The formation of a new species', 'The extinction of a species', 'The movement of genes between populations', 'The naming of a species by scientists'], why: 'Speciation happens when one population splits into groups that can no longer breed together.' },
        { q: 'A river changes course and splits a population of mice into two groups. Over many generations, they become two species. This is…', c: ['allopatric speciation', 'sympatric speciation', 'gene flow', 'the bottleneck effect'], why: 'A physical barrier separates the groups, so they evolve apart in separate places.' },
        { q: 'Two kinds of frogs live in the same pond. One breeds in early spring and the other in late spring. What kind of isolation is this?', c: ['Temporal isolation', 'Geographic isolation', 'Behavioral isolation', 'Habitat isolation'], why: '"Temporal" means time. They breed at different times, so their genes never mix.' },
        { q: 'Two kinds of birds look almost the same, but they sing different songs and ignore each other\'s songs. What kind of isolation is this?', c: ['Behavioral isolation', 'Temporal isolation', 'Geographic isolation', 'Habitat isolation'], why: 'Differences in behavior, like songs or dances, keep them from choosing each other as mates.' },
        { q: 'What must happen for a new species to form?', c: ['The groups must stop breeding with each other', 'The groups must keep sharing genes', 'Every member must get the same mutation on the same day', 'The population must grow very large'], why: 'If the groups keep sharing genes, they stay one species. Isolation lets them become different.' },
        { q: 'Sympatric speciation means a new species forms…', c: ['in the same area, without a physical barrier', 'only after a mountain or river separates the groups', 'only on islands', 'only in animals, never in plants'], why: '"Sym" means same. It happens in the same place, and it is especially common in plants.' },
        { q: 'Different Galápagos finch species have different beak shapes. How do scientists explain this?', c: ['Groups on different islands adapted to different foods and became separate species', 'Each finch changed its own beak by using it a lot', 'All the finches arrived with different beaks at the same time', 'Beak shape has nothing to do with food'], why: 'Isolated groups faced different foods. Natural selection favored different beaks, and the groups became different species.' },
        { q: 'What does punctuated equilibrium describe?', c: ['Long stable periods broken by short bursts of quick change', 'Slow, steady change that never stops', 'Species that never change at all', 'Change that happens in a single generation'], why: 'Some fossils show species staying the same for a long time, then changing quickly. The other pattern is gradualism.' },
        { q: 'An environment changes quickly, and no members of a species have traits to survive it. What is most likely?', c: ['The species goes extinct', 'The species makes the mutations it needs', 'The species instantly becomes a new species', 'Nothing, because environments don\'t affect species'], why: 'If no individuals can survive and reproduce in the new conditions, the whole species dies out.' },
        { q: 'A new habitat opens up with lots of food and few predators. What often happens to a species that moves in?', c: ['Its population grows and spreads out', 'It always goes extinct', 'It stops reproducing', 'It turns into a new species in one generation'], why: 'Environmental changes help some species expand, while others decline or split into new species.' },
      ],
      realLife: {
        text: `<p>Speciation may be happening in U.S. orchards right now. In the 1800s, some <b>hawthorn flies</b> started laying their eggs on apples instead of hawthorn fruit. Apples ripen earlier, so the apple flies now breed at a different time. The two groups rarely mix anymore, and scientists are watching them split apart.</p>
          <p>At the <b>Grand Canyon</b>, the canyon separates two groups of squirrels. The Kaibab squirrel on the north side has a white tail, while the Abert's squirrel on the south side has a gray tail and a white belly.</p>`,
        prompt: 'A new highway with tall walls splits a forest population of salamanders into two groups. Explain what could happen to the two groups over many generations.',
      },
    },
  ],
};
