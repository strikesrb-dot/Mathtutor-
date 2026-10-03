// Unit 8 — Common ancestry and phylogeny. NJ: HS-LS4-1
// Follows Khan Academy's NGSS high school biology, Unit 8.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
// Timeline "24-hour day" times, half-life math, and trait-table counts were recomputed with node before writing.
export default {
  id: 'b08', n: 8, title: 'Common ancestry and phylogeny', nj: ['HS-LS4-1'],
  lessons: [
    {
      key: 'b08-01',
      title: 'Evidence for evolution',
      videos: [
        { id: 'Q-aGAX27SIo', title: 'Evidence for evolution' },
      ],
      learn: `
        <p><b>Evolution</b> (the change in living things over many generations) is a main idea in biology. Scientists use several kinds of evidence to show that different species share <b>common ancestry</b> (they came from the same ancestor species long ago).</p>
        <p><b>1. Comparing bodies</b> (<b>comparative anatomy</b>):</p>
        <ul><li><b>Homologous structures</b> (body parts with the same basic bones but different jobs): a human arm, a cat's front leg, a whale's flipper, and a bat's wing all have one upper arm bone, two forearm bones, wrist bones, and finger bones. Scientists explain this as coming from a shared ancestor.</li>
        <li><b>Analogous structures</b> (same job, different build): a bird wing and a butterfly wing both fly but are built in totally different ways. They do NOT show close relationship.</li>
        <li><b>Vestigial structures</b> (body parts that are reduced and have lost most of their original job): whales have tiny hip bones but no back legs.</li></ul>
        <p><b>2. Comparing embryos</b> (<b>embryology</b>, the study of how living things develop before birth or hatching): early embryos of fish, chickens, and humans all have a tail and folds near the neck.</p>
        <p><b>3. Comparing DNA</b> (<b>molecular evidence</b>): almost all living things use the same genetic code. The fewer DNA differences two species have, the more closely related they are.</p>
        <p><b>4. Watching it happen</b>: bacteria can become <b>resistant</b> (no longer killed) to <b>antibiotics</b> (medicines that kill bacteria) in just a few years.</p>`,
      quiz: [
        { q: 'What are homologous structures?', c: ['Body parts with the same basic bones but different jobs', 'Body parts with the same job but a different build', 'Body parts that are small and have little or no use', 'Body parts that show up only in embryos'], why: 'A human arm and a bat wing do different jobs, but they are built from the same set of bones.' },
        { q: 'A human arm, a whale flipper, and a bat wing have the same set of bones. What do scientists conclude?', c: ['These animals share a common ancestor', 'These animals all live in water', 'These animals all eat the same food', 'These animals use their limbs for the same job'], why: 'Scientists explain the same bone pattern as being inherited from a shared ancestor, then changed for different jobs.' },
        { q: 'A bird wing and a butterfly wing are both used for flying, but they are built very differently. These are…', c: ['analogous structures', 'homologous structures', 'vestigial structures', 'embryo structures'], why: 'Analogous structures do the same job with a different build. They do not show a close relationship.' },
        { q: 'Whales have small hip bones but no back legs. What kind of structure are the hip bones?', c: ['A vestigial structure', 'An analogous structure', 'A trace fossil', 'A transitional fossil'], why: 'Vestigial structures are reduced and have lost most of their original job, like walking.' },
        { q: 'Early embryos of fish, chickens, and humans all have a tail and folds near the neck. What does this suggest?', c: ['They share a common ancestor', 'They will all grow into fish', 'They all live in water as adults', 'They all have exactly the same DNA'], why: 'Similar early development is evidence that these animals came from a shared ancestor long ago.' },
        { q: 'Scientists compare one gene in 3 animals to the same gene in humans. Animal X has 3 differences, Animal Y has 20, and Animal Z has 45. Which is most closely related to humans?', c: ['Animal X', 'Animal Y', 'Animal Z', 'All three are equally related'], why: 'Fewer DNA differences means a more recent common ancestor, so Animal X is the closest relative.' },
        { q: 'Why is the genetic code evidence of common ancestry?', c: ['Almost all living things use the same DNA code to make proteins', 'Every living thing has exactly the same DNA', 'Only animals use DNA', 'DNA never changes over time'], why: 'Bacteria, plants, and animals read DNA the same way. Scientists explain this as inherited from a shared ancestor.' },
        { q: 'Bacteria become resistant to an antibiotic over a few years. Why is this evidence for evolution?', c: ['Scientists can watch the population change over generations', 'The antibiotic turned into a different medicine', 'Each bacterium decided to become stronger', 'It shows bacteria never change'], why: 'Resistant bacteria survive and reproduce, so the population changes. Scientists can measure this happening directly.' },
        { q: 'What does common ancestry mean?', c: ['Different species came from the same ancestor species long ago', 'All species alive today are exactly the same', 'One species alive today turned into another species alive today', 'Species never change over time'], why: 'Two species with common ancestry both descend from one earlier species, like cousins sharing grandparents.' },
        { q: 'Which pair is the best example of homologous structures?', c: ['A cat\'s front leg and a human arm', 'A bird wing and a bee wing', 'An octopus eye and a human eye', 'A cactus spine and a porcupine quill'], why: 'A cat leg and a human arm have the same bones. The other pairs do similar jobs but are built differently.' },
        { q: 'Which type of evidence compares the order of DNA letters in different species?', c: ['Molecular evidence', 'Comparative anatomy', 'Embryology', 'Fossil evidence'], why: 'Molecular evidence compares DNA and proteins. Anatomy compares body parts, and embryology compares early development.' },
        { q: 'What is embryology?', c: ['The study of how living things develop before birth or hatching', 'The study of rock layers', 'The study of where animals live', 'The study of extinct animals'], why: 'Embryology compares embryos. Similar early stages in different animals are one kind of evidence for common ancestry.' },
      ],
      realLife: {
        text: `<p>Hold out your arm and wiggle your fingers. A bat's wing has the same bones, just with very long fingers covered by skin. A whale's flipper has them too, packed inside one paddle.</p>
          <p>You can see evidence for evolution at the doctor's office. When doctors give you an <b>antibiotic</b> (a medicine that kills bacteria), they tell you to take every dose. Bacteria that survive a half-finished treatment can multiply and pass on their <b>resistance</b> (not being killed by the medicine). Over time, some medicines stop working. Doctors track this change every year.</p>`,
        prompt: 'Your arm, a cat\'s leg, and a bat\'s wing do different jobs. Explain what they have in common and what scientists conclude, using the words homologous structures and common ancestor.',
      },
    },
    {
      key: 'b08-02',
      title: 'The fossil record',
      videos: [
        { id: 'iWUp2kMCv6o', title: 'How do fossils form?' },
        { id: 'mIIJd66Ycr8', title: 'How old is the Earth?' },
      ],
      learn: `
        <p>A <b>fossil</b> is the preserved remains or traces of a living thing from long ago. All the fossils found so far make up the <b>fossil record</b>.</p>
        <p><b>How fossils form:</b> an animal dies and is quickly buried in mud or sand. Over thousands of years, more layers pile on top and press down, turning into <b>sedimentary rock</b> (rock made from layers of mud and sand). Minerals slowly replace the bones or shells, and they turn to stone.</p>
        <ul><li><b>Body fossils</b>: bones, teeth, shells, leaves.</li>
        <li><b>Trace fossils</b> (signs an animal left behind): footprints, burrows, nests.</li></ul>
        <p>Most living things rot or get eaten before they can fossilize. Hard parts like teeth and bones fossilize best. So the fossil record has many gaps.</p>
        <p><b>Relative dating</b> (finding out if a fossil is older or younger than another): the <b>law of superposition</b> says that in undisturbed rock layers, the bottom layers are the oldest and the top layers are the youngest.</p>
        <p><b>Absolute dating</b> (finding the age in years) uses radioactive elements. Each one has a <b>half-life</b> (the time it takes for half of it to break down). If 1/4 is left, 2 half-lives have passed.</p>
        <p><b>What fossils show scientists:</b></p>
        <ul><li>Living things have changed over time.</li>
        <li>Most species that ever lived are now <b>extinct</b> (completely gone).</li>
        <li><b>Transitional fossils</b> (fossils with traits of two different groups), like <b>Tiktaalik</b>, a fish with fins that had wrist-like bones.</li></ul>`,
      quiz: [
        { q: 'What is a fossil?', c: ['The preserved remains or traces of a living thing from long ago', 'Any rock with an interesting shape', 'A living animal that looks very old', 'A bone from an animal that died last year'], why: 'Fossils are remains, like bones and shells, or traces, like footprints, preserved in rock for a very long time.' },
        { q: 'In which type of rock are most fossils found?', c: ['Sedimentary rock, made from layers of mud and sand', 'Igneous rock, made from cooled lava', 'Metamorphic rock, changed by heat and pressure', 'Meteorite rock from space'], why: 'Living things get buried in mud and sand. Those layers harden into sedimentary rock with the fossil inside.' },
        { q: 'Which of these is most likely to become a fossil?', c: ['A shark\'s tooth', 'A jellyfish', 'A mushroom', 'An earthworm'], why: 'Hard parts like teeth, bones, and shells fossilize best. Soft bodies usually rot away first.' },
        { q: 'A dinosaur footprint preserved in rock is an example of a…', c: ['trace fossil', 'body fossil', 'vestigial structure', 'transitional fossil'], why: 'Trace fossils are signs an animal left behind, like footprints, burrows, and nests, not the body itself.' },
        { q: 'Rock layers have not been disturbed. Which layer is the oldest?', c: ['The bottom layer', 'The top layer', 'The middle layer', 'The thickest layer'], why: 'The law of superposition: layers pile up over time, so the bottom layer formed first.' },
        { q: 'What is relative dating?', c: ['Finding out if a rock or fossil is older or younger than others', 'Finding the exact age in years using radioactive elements', 'Counting the rings in a tree', 'Measuring how big a fossil is'], why: 'Relative dating puts fossils in order, oldest to youngest. Finding the age in years is absolute dating.' },
        { q: 'A fossil is in a layer between a 30-million-year-old layer above it and a 50-million-year-old layer below it. How old is the fossil?', c: ['Between 30 and 50 million years old', 'Younger than 30 million years', 'Older than 50 million years', 'Exactly 80 million years old'], why: 'It is below the younger layer and above the older one, so its age is in between.' },
        { q: 'A radioactive element has a half-life of 10,000 years. A fossil has 1/4 of the original amount left. How old is the fossil?', c: ['20,000 years', '10,000 years', '40,000 years', '2,500 years'], why: 'Half is left after 1 half-life, and 1/4 after 2. So 2 × 10,000 = 20,000 years.' },
        { q: 'Why does the fossil record have gaps?', c: ['Most living things rot or get eaten before they can become fossils', 'Fossils only formed in the last 100 years', 'Scientists throw away most fossils they find', 'Every animal that ever lived had hard bones'], why: 'Fossils form only in special conditions, like being buried quickly. Most living things never fossilize.' },
        { q: 'Tiktaalik is a fossil fish with fins that had wrist-like bones. What kind of fossil is it?', c: ['A transitional fossil', 'A trace fossil', 'An analogous structure', 'A modern fish fossil'], why: 'Transitional fossils have traits of two groups. Tiktaalik has traits of fish and of four-legged animals.' },
        { q: 'Scientists find fossil sea shells in rock high on a mountain. What does this show?', c: ['That rock was once under the sea', 'Sea animals once climbed mountains', 'Birds carried living shells to the top', 'Shells grow naturally inside rocks'], why: 'The shells were buried on the sea floor. Over millions of years, that rock was pushed up into a mountain.' },
        { q: 'What does the fossil record show about the history of life?', c: ['Living things changed over time, and many species are now extinct', 'Every species has always looked the same', 'All species that ever lived are still alive today', 'Fossils show only plants'], why: 'Older layers hold different living things than younger layers. Most species that ever lived are now extinct.' },
      ],
      realLife: {
        text: `<p>New Jersey has a famous place in fossil history. In <b>1858</b>, one of the first dinosaur skeletons ever found was dug up in <b>Haddonfield</b>, in South Jersey. That dinosaur, <b>Hadrosaurus</b>, is now New Jersey's state dinosaur.</p>
          <p>Today, families visit <b>Big Brook</b> in Monmouth County to sift the stream gravel. They find fossil <b>shark teeth</b> that are tens of millions of years old. Sharks there? Yes! Long ago, that part of New Jersey was under the ocean.</p>
          <p>Teeth are hard, so they fossilize much better than skin or muscle.</p>`,
        prompt: 'You find a fossil shark tooth in a New Jersey stream. Explain how it became a fossil and what it tells you about that area long ago.',
      },
    },
    {
      key: 'b08-03',
      title: 'Key events in the history of life',
      videos: [
        { id: '4mxJbgdiyIY', title: 'Evolutionary history: the timeline of life' },
        { id: 'gmr5QYeFJ4g', title: 'Extinction' },
      ],
      learn: `
        <p>Scientists use fossils, rocks, and DNA to build a timeline of life. Earth is about <b>4.6 billion years old</b>. Here are the big events, oldest first:</p>
        <ol><li><b>First cells, about 3.5 billion years ago.</b> They were <b>prokaryotes</b> (simple single cells with no nucleus), like bacteria. For a very long time, all life was single-celled and lived in water.</li>
        <li><b>Photosynthesis adds oxygen.</b> Tiny ocean bacteria used <b>photosynthesis</b> (making food from sunlight, water, and carbon dioxide), which gives off oxygen. By about 2.4 billion years ago, oxygen was building up in the air. Some oxygen formed the <b>ozone layer</b> (a high layer of gas that blocks harmful UV rays from the Sun).</li>
        <li><b>Eukaryotes, about 2 billion years ago</b>: cells with a nucleus.</li>
        <li><b>Multicellular life</b> (living things made of many cells), over 1 billion years ago. Around 540 million years ago, many animal groups appear quickly in the fossil record. This is the <b>Cambrian explosion</b>.</li>
        <li><b>Life moves onto land, about 470 million years ago.</b> Plants went first, and animals followed. The ozone layer helped make land safe from UV rays.</li></ol>
        <p>Along the way, there were <b>mass extinctions</b> (times when many species died out in a short time). About 66 million years ago, a huge asteroid hit Earth, and the dinosaurs died out.</p>
        <p>Modern humans appeared only about 300,000 years ago.</p>`,
      quiz: [
        { q: 'Which list puts these events in order, from oldest to newest?', c: ['First cells → oxygen builds up → multicellular life → life on land', 'Life on land → first cells → oxygen builds up → multicellular life', 'Multicellular life → first cells → life on land → oxygen builds up', 'First cells → life on land → oxygen builds up → multicellular life'], why: 'Single cells came first, then oxygen from photosynthesis, then many-celled life, and finally life on land.' },
        { q: 'About how old is Earth, according to scientists?', c: ['About 4.6 billion years', 'About 4.6 million years', 'About 66 million years', 'About 300,000 years'], why: 'Scientists date the oldest rocks and meteorites to about 4.6 billion years. 66 million years ago is when dinosaurs died out.' },
        { q: 'What were the first living things like?', c: ['Simple single cells with no nucleus', 'Large dinosaurs', 'Flowering plants', 'Many-celled animals like worms'], why: 'The first cells were prokaryotes, like bacteria. Bigger, many-celled living things came much later.' },
        { q: 'Where did the oxygen in Earth\'s air first come from?', c: ['Photosynthesis by tiny bacteria in the ocean', 'Volcanoes erupting', 'Animals breathing out', 'Forests on land'], why: 'Ocean bacteria doing photosynthesis gave off oxygen. Forests came much later, after life moved onto land.' },
        { q: 'How did oxygen in the air help life move onto land?', c: ['It formed the ozone layer, which blocks harmful UV rays', 'It made the oceans salty', 'It made rain fall for the first time', 'It gave plants carbon dioxide to use'], why: 'Without the ozone layer, strong UV rays from the Sun made land too dangerous for living things.' },
        { q: 'Living things made of many cells are called…', c: ['multicellular', 'unicellular', 'prokaryotes', 'fossils'], why: 'Multi means many. Unicellular living things, like bacteria, have only one cell.' },
        { q: 'Which came first: cells without a nucleus or cells with a nucleus?', c: ['Cells without a nucleus (prokaryotes)', 'Cells with a nucleus (eukaryotes)', 'Both appeared at the exact same time', 'Neither, because many-celled animals came first'], why: 'Prokaryotes appear about 3.5 billion years ago. Eukaryotes, with a nucleus, show up about 2 billion years ago.' },
        { q: 'Which group began living on land first?', c: ['Plants', 'Four-legged animals', 'Dinosaurs', 'Mammals'], why: 'Plants moved onto land about 470 million years ago. Animals followed, using plants for food and shelter.' },
        { q: 'What was the Cambrian explosion?', c: ['A time when many animal groups appear quickly in the fossil record', 'The asteroid that wiped out the dinosaurs', 'The moment the first cell formed', 'When oxygen first appeared in the air'], why: 'About 540 million years ago, fossils of many new animal groups appear in a short time.' },
        { q: 'What most likely caused the dinosaurs to die out about 66 million years ago?', c: ['A huge asteroid hit Earth', 'Humans hunted them', 'The first plants used up all the oxygen', 'They grew too big to find food'], why: 'An asteroid hit changed the climate quickly. Humans appeared over 65 million years later.' },
        { q: 'What is a mass extinction?', c: ['When many species die out in a short time', 'When one new species appears', 'When a species moves to a new place', 'When animals move from water to land'], why: 'In a mass extinction, a large share of all species disappears. The dinosaurs died out in one.' },
        { q: 'Imagine Earth\'s whole history squeezed into one 24-hour day. When would modern humans appear?', c: ['In the last few seconds before midnight', 'Early in the morning', 'Around noon', 'At about 6 p.m.'], why: '300,000 years out of 4.6 billion is tiny. On that clock, humans show up about 6 seconds before midnight.' },
      ],
      realLife: {
        text: `<p>Take a deep breath. The oxygen you just breathed in exists because of photosynthesis. Even today, tiny ocean living things called <b>phytoplankton</b> (floating, plant-like cells) make about half of Earth's oxygen.</p>
          <p>Some of the oldest evidence of life still has living cousins. In <b>Shark Bay, Australia</b>, bacteria build rocky mounds called <b>stromatolites</b>, just like fossils over 3 billion years old.</p>
          <p>Picture Earth's history as one 24-hour day. The first cells show up around 5:44 a.m. Life reaches land around 9:30 p.m. Dinosaurs vanish about 21 minutes before midnight. Humans arrive in the last 6 seconds.</p>`,
        prompt: 'Pick one big event from the history of life, like oxygen building up or life moving onto land. Explain why it mattered for the living things we see today.',
      },
    },
    {
      key: 'b08-04',
      title: 'Phylogeny and evolutionary trees',
      videos: [
        { id: 'cIQobFHFwcM', title: 'Intro to cladograms and phylogenetic trees' },
        { id: '6_XMKmFQ_w8', title: 'Understanding and building phylogenetic trees' },
      ],
      learn: `
        <p><b>Phylogeny</b> (the history of how groups of living things are related) is shown with a <b>phylogenetic tree</b> or <b>cladogram</b> (a branching diagram, like a family tree for species).</p>
        <p><b>Parts of the tree:</b></p>
        <ul><li><b>Tips</b>: the species or groups being compared.</li>
        <li><b>Node</b> (a point where branches split): stands for a <b>common ancestor</b> (an earlier species that both branches came from).</li>
        <li><b>Clade</b>: a common ancestor plus ALL of its <b>descendants</b> (the species that came from it).</li>
        <li><b>Outgroup</b>: the group that is least related to the others. It branches off first.</li></ul>
        <p>Scientists build trees using <b>shared derived traits</b> (newer traits that a group got from its closest common ancestor), plus DNA comparisons.</p>
        <p><b>Example.</b> Traits: lamprey has none of these. Shark has jaws. Frog has jaws and 4 legs. Lizard has jaws, 4 legs, and an <b>amniotic sac</b> (a fluid sac that protects an embryo). Mouse has all of those plus hair.</p>
        <ul><li>Lamprey is the outgroup.</li>
        <li>Jaws appeared first, and hair appeared last.</li>
        <li>Lizard and mouse are most closely related, because they share the most traits.</li></ul>
        <p><b>How to read a tree:</b> find the node where two branches meet. The closer that node is to the tips, the more closely related the two species are.</p>
        <p><b>Common mistake:</b> species at the tips did not come from each other. Lizards did not turn into mice. They share a common ancestor.</p>`,
      quiz: [
        { q: 'What does a phylogenetic tree show?', c: ['How groups of living things are related through common ancestors', 'Who eats whom in a food chain', 'The age of each rock layer', 'How one animal grows from a baby to an adult'], why: 'A phylogenetic tree is like a family tree for species. Branches meet at common ancestors.' },
        { q: 'On a cladogram, what does a node (a point where branches split) stand for?', c: ['A common ancestor', 'A species alive today', 'The newest trait', 'An outgroup'], why: 'At a node, one ancestor species split into two lines. Species alive today sit at the tips.' },
        { q: 'What is a clade?', c: ['A common ancestor and all of its descendants', 'Any two species that look alike', 'Only species that are extinct', 'A group of animals living in the same place'], why: 'A clade includes the ancestor and every species that came from it, with none left out.' },
        { q: 'What is a shared derived trait?', c: ['A newer trait a group got from its closest common ancestor', 'A trait that every living thing has', 'A trait that only one species has', 'A skill an animal learns during its life'], why: 'Shared derived traits, like hair in mammals, mark a group that came from the same recent ancestor.' },
        { q: 'Traits: lamprey has none. Shark: jaws. Frog: jaws, 4 legs. Lizard: jaws, 4 legs, amniotic sac. Mouse: jaws, 4 legs, amniotic sac, hair. Which animal is the outgroup?', c: ['Lamprey', 'Mouse', 'Shark', 'Frog'], why: 'The outgroup is the least related. The lamprey shares none of the listed traits.' },
        { q: 'Same table: lamprey none; shark jaws; frog jaws, 4 legs; lizard jaws, 4 legs, amniotic sac; mouse all of those plus hair. Which two animals are most closely related?', c: ['Lizard and mouse', 'Lamprey and mouse', 'Shark and frog', 'Lamprey and shark'], why: 'Lizard and mouse share 3 derived traits: jaws, 4 legs, and an amniotic sac. No other pair shares that many.' },
        { q: 'Same table: shark has jaws; frog adds 4 legs; lizard adds an amniotic sac; mouse adds hair. Which trait appeared most recently?', c: ['Hair', 'Jaws', '4 legs', 'Amniotic sac'], why: 'Only the mouse has hair, so it appeared last. Jaws are shared by the most animals, so they appeared first.' },
        { q: 'Same table: lamprey none; shark jaws; frog jaws, 4 legs; lizard jaws, 4 legs, amniotic sac; mouse all of those plus hair. How many animals have 4 legs?', c: ['3', '2', '4', '5'], why: 'Frog, lizard, and mouse have 4 legs. That makes 3 animals.' },
        { q: 'Lions and tigers sit on branches right next to each other on a tree. What does this mean?', c: ['They share a recent common ancestor', 'Lions came from tigers alive today', 'Tigers will turn into lions someday', 'They are the same species'], why: 'Species at the tips did not come from each other. They both came from a shared ancestor.' },
        { q: 'What evidence do scientists use to build phylogenetic trees?', c: ['Shared traits and DNA similarities', 'Only how big the animals are', 'Only where the animals live today', 'The animals\' favorite foods'], why: 'Scientists compare body traits and DNA. More shared derived traits and DNA usually means a closer relationship.' },
        { q: 'On a tree, species A and B branch from a node near the tips. Species C branched off near the root. Which is true?', c: ['A and B are more closely related to each other than to C', 'C is the ancestor of A and B', 'C is more closely related to A than B is', 'A and B have no common ancestor'], why: 'The closer the node where two branches meet is to the tips, the more recent their common ancestor.' },
        { q: 'Dolphins and sharks have similar body shapes, but DNA shows dolphins are mammals. Why do scientists use DNA, not just looks?', c: ['Living things can look alike from similar habitats without being closely related', 'DNA is easier to see than bones', 'Looks never tell us anything', 'DNA never changes'], why: 'Living in water shaped both bodies the same way. DNA shows dolphins are closer to cows than to sharks.' },
      ],
      realLife: {
        text: `<p>You already know how to read a tree: your family tree. You and your cousins share the same grandparents. They are your <b>common ancestors</b>, and each family is a branch.</p>
          <p>Health detectives use phylogenetic trees too. When people in different states get sick from the same food, like lettuce, scientists compare the bacteria's DNA. Bacteria on the closest branches likely came from the same farm.</p>
          <p>Trees can surprise you. DNA shows that whales are more closely related to <b>hippos</b> than to any fish.</p>`,
        prompt: 'Think about your own family tree. Explain how it is like a phylogenetic tree, using the words common ancestor, branch, and closely related.',
      },
    },
  ],
};
