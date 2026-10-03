// Unit 1 — Ecology and natural systems. NJ: HS-LS2-1, HS-LS2-2, HS-LS2-6
// Follows Khan Academy's NGSS high school biology, Unit 1.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel).
export default {
  id: 'b01', n: 1, title: 'Ecology and natural systems', nj: ['HS-LS2-1', 'HS-LS2-2', 'HS-LS2-6'],
  lessons: [
    {
      key: 'b01-01',
      title: 'Organization of natural systems',
      videos: [
        { id: 'GxKWCiZHsvo', title: 'Biotic and abiotic factors in natural systems' },
        { id: 'izRvPaAWgyw', title: 'Ecology: rules for living on Earth' },
      ],
      learn: `
        <p><b>Ecology</b> (the study of how living things interact with each other and their surroundings) looks at life in levels, from small to big:</p>
        <ol><li><b>Organism</b> (one single living thing), like one white-tailed deer.</li>
        <li><b>Population</b> (all the members of one <b>species</b>, or kind of living thing, in the same area), like all the deer in one forest.</li>
        <li><b>Community</b> (all the populations of different species in the same area), like the deer, oak trees, foxes, and mushrooms in that forest.</li>
        <li><b>Ecosystem</b> (a community plus the nonliving things around it), like that forest's living things plus its soil, water, and sunlight.</li>
        <li><b>Biome</b> (a huge region with a similar climate and similar kinds of plants and animals), like the forests of the eastern U.S.</li>
        <li><b>Biosphere</b> (every part of Earth where life exists), from the deep ocean to high in the air.</li></ol>
        <p>Each level holds all the levels below it. A biome is made of many ecosystems, and the biosphere holds every biome.</p>
        <p>Every ecosystem has two kinds of parts. <b>Biotic factors</b> (the living parts) include plants, animals, fungi, and bacteria. <b>Abiotic factors</b> (the nonliving parts) include sunlight, temperature, water, soil, and air.</p>
        <p>Scientists also split Earth into four big systems: the <b>atmosphere</b> (air), the <b>hydrosphere</b> (all water), the <b>geosphere</b> (rock and soil), and the biosphere (all life).</p>`,
      quiz: [
        { q: 'All the white-tailed deer living in one forest form a…', c: ['population', 'community', 'ecosystem', 'biome'], why: 'A population is all the members of ONE species living in the same area.' },
        { q: 'What is the difference between a community and an ecosystem?', c: ['An ecosystem also includes the nonliving things', 'A community also includes the nonliving things', 'A community has only one species', 'An ecosystem has only one species'], why: 'Community = all the living things. Ecosystem = those living things plus soil, water, air, and sunlight.' },
        { q: 'Which list goes from smallest to biggest?', c: ['organism → population → community → ecosystem → biome → biosphere', 'population → organism → ecosystem → community → biome → biosphere', 'organism → community → population → biome → ecosystem → biosphere', 'biosphere → biome → ecosystem → community → population → organism'], why: 'One living thing, then its species group, then all species, then add nonliving things, then huge regions, then all of Earth.' },
        { q: 'Which of these is an abiotic factor?', c: ['Sunlight', 'A mushroom', 'Bacteria in the soil', 'An oak tree'], why: 'Abiotic means nonliving. Sunlight is not alive. Mushrooms, bacteria, and trees are.' },
        { q: 'Which of these is a biotic factor?', c: ['A fox', 'Rainwater', 'Temperature', 'Sand'], why: 'Biotic means living. A fox is alive. Water, temperature, and sand are not.' },
        { q: 'The deer, oak trees, foxes, and mushrooms in one forest, all together, are a…', c: ['community', 'population', 'organism', 'biosphere'], why: 'Many different species living in the same area make a community.' },
        { q: 'A huge region with a similar climate and similar plants, like a desert, is a…', c: ['biome', 'population', 'community', 'organism'], why: 'Biomes are big regions shaped by climate, like deserts, tundra, and rainforests.' },
        { q: 'What is the biosphere?', c: ['All the parts of Earth where life exists', 'Only the air around Earth', 'Only the oceans', 'One forest and its animals'], why: '"Bio" means life. The biosphere is every place on Earth that has living things.' },
        { q: 'One single bald eagle is an example of a(n)…', c: ['organism', 'population', 'community', 'ecosystem'], why: 'One single living thing is an organism.' },
        { q: 'What is the hydrosphere?', c: ['All of the water on Earth', 'All of the air around Earth', 'All of the rock and soil on Earth', 'All of the living things on Earth'], why: '"Hydro" means water. Oceans, rivers, lakes, ice, and groundwater are all part of it.' },
        { q: 'Which level contains all the other levels?', c: ['Biosphere', 'Biome', 'Ecosystem', 'Community'], why: 'The biosphere is the biggest level. It holds every biome, ecosystem, community, population, and organism.' },
        { q: 'A pond\'s frogs, fish, and algae, plus its water, mud, and sunlight, make up a(n)…', c: ['ecosystem', 'community', 'population', 'organism'], why: 'Living things plus the nonliving things around them make an ecosystem.' },
        { q: 'All the gray squirrels and all the pigeons in one park are NOT one population. Why not?', c: ['A population is only one species', 'There are too many animals', 'A population must include plants', 'Squirrels and pigeons can\'t share a park'], why: 'A population is all the members of ONE species in an area. Squirrels and pigeons are two species.' },
        { q: 'Which of these is part of the geosphere?', c: ['Rock and soil', 'Rainwater', 'The air', 'A tree'], why: '"Geo" means Earth. The geosphere is the rock and soil.' },
        { q: 'The layer of air around Earth is called the…', c: ['atmosphere', 'hydrosphere', 'geosphere', 'biosphere'], why: 'The atmosphere is all the air around Earth.' },
        { q: 'A deer drinks from a stream. Which two Earth systems are interacting?', c: ['Biosphere and hydrosphere', 'Atmosphere and geosphere', 'Geosphere and hydrosphere', 'Atmosphere and biosphere'], why: 'The deer is part of the biosphere (life). The stream is part of the hydrosphere (water).' },
        { q: 'Which of these is NOT an abiotic factor?', c: ['A fungus growing on a log', 'Temperature', 'Soil', 'Wind'], why: 'A fungus is alive, so it is biotic. Temperature, soil, and wind are nonliving.' },
        { q: 'Take away every living thing from a forest ecosystem. What is left?', c: ['The abiotic factors, like soil, water, and sunlight', 'A community', 'A population', 'The biotic factors'], why: 'An ecosystem is living things plus nonliving things. Remove the living things, and only the abiotic factors remain.' },
        { q: 'A biome is made of…', c: ['many ecosystems with a similar climate', 'one population of a single species', 'one single organism', 'only nonliving things'], why: 'A biome is a huge region. It holds many ecosystems that share a similar climate.' },
        { q: 'Which is bigger: a population or a community?', c: ['A community, because it holds many populations', 'A population, because it holds many communities', 'They are always the same size', 'A population, because it includes nonliving things'], why: 'A community is all the populations of different species living in one area.' },
        { q: 'Which pair shows one biotic factor and one abiotic factor?', c: ['A worm and the soil it lives in', 'A worm and a robin', 'Sunlight and rain', 'Sand and wind'], why: 'The worm is living (biotic). The soil is nonliving (abiotic).' },
        { q: 'Ecology is the study of…', c: ['how living things interact with each other and their surroundings', 'rocks and minerals only', 'the weather only', 'how cells divide'], why: 'Ecology looks at living things and how they connect with each other and their environment.' },
        { q: 'A drought dries up a pond. Which kind of factor changed?', c: ['An abiotic factor: water', 'A biotic factor: the frogs', 'A population of fish', 'A community of plants'], why: 'Water is nonliving, so the drought changed an abiotic factor. The living things will feel the effects.' },
        { q: 'Going from small to big, which level comes right after community?', c: ['Ecosystem', 'Population', 'Biome', 'Organism'], why: 'Add the nonliving things to a community, and you get an ecosystem.' },
      ],
      realLife: {
        text: `<p>Think about a park near your home. One gray squirrel is an <b>organism</b>. All the gray squirrels in the park are a <b>population</b>. Add the pigeons, oak trees, grass, and worms, and you have a <b>community</b>. Now add the soil, rain, and sunlight, and it's an <b>ecosystem</b>.</p>
          <p>In New Jersey, the <b>Pine Barrens</b> is a famous ecosystem with sandy soil and pine trees. It's part of the big forest <b>biome</b> that covers much of the eastern U.S. And all of it sits inside the <b>biosphere</b>.</p>`,
        prompt: 'Pick a place you know, like a park, your backyard, or a school field. Name one organism, one population, and two abiotic factors you would find there.',
      },
    },
    {
      key: 'b01-02',
      title: 'The distribution of life',
      videos: [
        { id: 'A495e31cDdE', title: 'Ecosystems and biomes' },
        { id: 'ZqB-Sp7Zi6E', title: 'Abiotic factors and an organism\'s range' },
        { id: 'FhaldPmkoNE', title: 'Ecosystem ecology and biomes' },
      ],
      learn: `
        <p>Why do polar bears live in the Arctic and not in Florida? Every living thing has a <b>range of tolerance</b> (the span of conditions, like temperature, that it can survive in). Outside that range, it gets stressed or dies.</p>
        <p>A <b>limiting factor</b> (anything that keeps a living thing from growing or spreading) decides where each species can live. Common ones are:</p>
        <ul><li><b>Temperature</b>: too hot or too cold.</li>
        <li><b>Water</b>: too little or too much.</li>
        <li><b>Sunlight</b>: plants and reef-building corals need light.</li>
        <li><b>Physical barriers</b> (things that block movement), like mountains, oceans, or wide rivers.</li></ul>
        <p>On land, <b>climate</b> (the usual temperature and rainfall of a place over many years) shapes the <b>biomes</b> (huge regions with similar climate and life):</p>
        <ul><li><b>Tropical rainforest</b>: hot and very wet all year.</li>
        <li><b>Desert</b>: very dry.</li>
        <li><b>Grassland</b>: medium rain, mostly grasses and few trees.</li>
        <li><b>Temperate forest</b>: four seasons and trees that drop their leaves in fall, like New Jersey.</li>
        <li><b>Taiga</b> (a cold forest of evergreen trees): long, snowy winters.</li>
        <li><b>Tundra</b>: freezing, with frozen ground and no trees.</li></ul>
        <p>Water ecosystems come in three types: <b>freshwater</b> (lakes, rivers, ponds), <b>marine</b> (the salty ocean), and <b>estuaries</b> (where rivers meet the sea, like Barnegat Bay in New Jersey).</p>`,
      quiz: [
        { q: 'Which two things mainly decide which biome a land area has?', c: ['Temperature and rainfall', 'Soil color and wind', 'The number of people and roads', 'Ocean waves and tides'], why: 'Climate, meaning temperature and rainfall, decides which plants can grow, and the plants shape the rest of the biome.' },
        { q: 'A range of tolerance is…', c: ['the span of conditions a living thing can survive in', 'the area where an animal hunts', 'the number of babies an animal can have', 'how far an animal can travel in a day'], why: 'Every species can only handle so much heat, cold, dryness, and so on.' },
        { q: 'Which biome is hot and very wet all year?', c: ['Tropical rainforest', 'Tundra', 'Desert', 'Taiga'], why: 'Tropical rainforests are near the equator, where it is warm and rains a lot.' },
        { q: 'Which biome has frozen ground and almost no trees?', c: ['Tundra', 'Tropical rainforest', 'Temperate forest', 'Grassland'], why: 'The tundra is so cold that the ground stays frozen and trees can\'t grow deep roots.' },
        { q: 'New Jersey has four seasons and trees that drop their leaves in fall. Which biome is it in?', c: ['Temperate forest', 'Desert', 'Tundra', 'Tropical rainforest'], why: 'Temperate forests have warm summers, cold winters, and trees that lose their leaves.' },
        { q: 'A tall mountain range keeps a kind of lizard from spreading west. The mountains are a…', c: ['physical barrier', 'biotic factor', 'food source', 'community'], why: 'Mountains, oceans, and wide rivers can block living things from moving to new places.' },
        { q: 'Climate means…', c: ['the usual weather of a place over many years', 'the weather today', 'the type of soil in a place', 'the number of animals in a place'], why: 'Weather is one day. Climate is the pattern over many years.' },
        { q: 'Tropical reef-building corals only grow in warm, shallow, clear water. What does this show?', c: ['Abiotic factors limit where coral can live', 'Coral can live anywhere in the ocean', 'Coral need cold, dark water', 'Only biotic factors matter to coral'], why: 'Temperature and sunlight are abiotic factors. Coral can\'t survive outside its range.' },
        { q: 'Which pair shows one freshwater ecosystem and one marine ecosystem?', c: ['A lake and an ocean', 'An ocean and a sea', 'A river and a pond', 'A desert and a forest'], why: 'Lakes have fresh water. Oceans have salt water, which is called marine.' },
        { q: 'The taiga is best described as…', c: ['a cold forest of evergreen trees with snowy winters', 'a hot, dry land with cactuses', 'a warm grassland with few trees', 'a wet forest near the equator'], why: 'The taiga is full of pine and spruce trees that can handle long, cold winters.' },
        { q: 'Why can\'t a desert cactus survive in the tundra?', c: ['It is too cold, outside the cactus\'s range of tolerance', 'The tundra has too much sunlight', 'The tundra has too many trees', 'Cactuses can only live near the ocean'], why: 'A cactus is built for heat and dryness. Freezing cold is outside its range.' },
        { q: 'A limiting factor is…', c: ['anything that keeps a living thing from growing or spreading', 'an animal that only eats plants', 'the biggest animal in an area', 'a type of biome'], why: 'Things like cold, drought, or not enough light limit where a species can live.' },
        { q: 'Which biome is very dry and has plants like cactuses?', c: ['Desert', 'Tropical rainforest', 'Taiga', 'Temperate forest'], why: 'Deserts get very little rain. Cactuses can store water to survive.' },
        { q: 'Which biome has medium rain, mostly grasses, and few trees?', c: ['Grassland', 'Taiga', 'Tropical rainforest', 'Tundra'], why: 'Grasslands get enough rain for grass but not enough for many trees.' },
        { q: 'A place where a river meets the sea, like Barnegat Bay, is called a(n)…', c: ['estuary', 'tundra', 'taiga', 'desert'], why: 'Estuaries mix fresh river water with salty sea water.' },
        { q: 'Mold grows in a damp bathroom but not on a dry bookshelf. Which factor limits where the mold grows?', c: ['Water', 'Sunlight', 'Physical barriers', 'Wind'], why: 'Mold needs moisture. Without water it can\'t grow, so water is its limiting factor.' },
        { q: 'Which sentence describes climate, not weather?', c: ['New Jersey usually has cold winters and warm summers', 'It is raining in Newark right now', 'Tomorrow will be sunny and windy', 'It snowed last Tuesday'], why: 'Climate is the usual pattern over many years. The others describe a single day.' },
        { q: 'Bluefish swim north in summer and back south in fall. Why?', c: ['To stay in water temperatures inside their range of tolerance', 'To find a physical barrier', 'Because they are freshwater fish', 'To get away from sunlight'], why: 'As the ocean warms and cools, the fish move to stay in temperatures they can handle.' },
        { q: 'Which of these is NOT an abiotic limiting factor?', c: ['A predator that hunts the species', 'Temperature', 'Water', 'Sunlight'], why: 'A predator is a living thing, so it is biotic. The others are nonliving.' },
        { q: 'Why do seaweeds and other plant-like ocean life grow only near the surface?', c: ['Sunlight can\'t reach deep water', 'Deep water is too warm', 'There is no water deep down', 'Fish eat everything deep down'], why: 'They need light to make food. Light fades in deep water, so sunlight is the limiting factor.' },
        { q: 'A kind of frog lives on one island but never reaches the mainland nearby. What is most likely stopping it?', c: ['The ocean is a physical barrier', 'The frog has no range of tolerance', 'The mainland has no climate', 'The island is too sunny'], why: 'Oceans, mountains, and wide rivers can block living things from spreading.' },
        { q: 'A plant can survive temperatures from 10 °C to 30 °C. Where could it live?', c: ['A place that stays between 15 °C and 25 °C', 'A place that drops to −10 °C in winter', 'A place that reaches 40 °C in summer', 'A place that ranges from 0 °C to 35 °C'], why: 'Only 15 to 25 °C stays inside its range of tolerance, 10 °C to 30 °C.' },
        { q: 'If a desert got much more rain every year for hundreds of years, what could happen?', c: ['New kinds of plants could grow, and the biome could change', 'It would turn into tundra', 'Nothing, because rain doesn\'t affect biomes', 'All the plants would die from too much sun'], why: 'Rainfall helps decide which plants can grow, and the plants shape the biome.' },
        { q: 'Two places have the same temperature. One gets 200 cm of rain a year, and the other gets 20 cm. Which is more likely a desert?', c: ['The place with 20 cm of rain', 'The place with 200 cm of rain', 'Both places', 'Neither, because only temperature matters'], why: 'Deserts are very dry. 20 cm a year is very little rain.' },
      ],
      realLife: {
        text: `<p>Have you noticed you never see palm trees growing wild in New Jersey? Palm trees can't survive our freezing winters. Cold is a <b>limiting factor</b> for them.</p>
          <p>Same idea at the Jersey Shore. Some fish, like bluefish, swim north along the coast when the ocean warms up in summer, then head south when it cools in fall. They stay inside their <b>range of tolerance</b>.</p>
          <p>Even in your house, mold grows in a damp bathroom but not on a dry bookshelf. Water decides where it can live.</p>`,
        prompt: 'Pick an animal or plant you know, like a polar bear, a cactus, or a palm tree. What abiotic factors limit where it can live, and why?',
      },
    },
    {
      key: 'b01-03',
      title: 'An organism\'s niche',
      videos: [
        { id: 'tiaFqgbq1hM', title: 'An organism\'s niche' },
        { id: 'GxE1SSqbSn4', title: 'Community ecology: competition and niches' },
      ],
      learn: `
        <p>An organism's <b>habitat</b> (the place where it lives) is like its address. Its <b>niche</b> (its role in the ecosystem, plus everything it needs to survive) is like its job.</p>
        <p>A niche includes what it eats, what eats it, when it is active, where it nests, and the conditions it can handle.</p>
        <ul><li><b>Fundamental niche</b> (all the conditions where a species could live if nothing got in its way).</li>
        <li><b>Realized niche</b> (the smaller part where it actually lives). It is smaller because of other species and <b>competition</b> (when living things struggle over the same limited resource, like food or space).</li></ul>
        <p>Competition can happen <b>within one species</b> (two robins fighting over one worm) or <b>between species</b> (hawks and owls both hunting mice).</p>
        <p>The <b>competitive exclusion principle</b> (the rule that two species can't share the exact same niche forever) says one will win, and the other must move, change, or die out. Species often avoid this by <b>resource partitioning</b> (splitting up the resources). Hawks hunt mice by day, and owls hunt them at night.</p>
        <p>A <b>specialist</b> (a species with a narrow niche) is picky, like a koala that eats almost only eucalyptus leaves. A <b>generalist</b> (a species with a broad niche) can live almost anywhere, like a raccoon that eats almost anything.</p>`,
      quiz: [
        { q: 'An organism\'s habitat is…', c: ['the place where it lives', 'its role in the ecosystem', 'only the food it eats', 'how many babies it has'], why: 'Habitat is the "address": the forest, pond, or field where it lives.' },
        { q: 'An organism\'s niche is…', c: ['its role in the ecosystem and everything it needs to survive', 'only the place where it lives', 'the animal that eats it', 'the weather where it lives'], why: 'A niche is the "job": what it eats, what eats it, when it\'s active, and what conditions it needs.' },
        { q: 'If habitat is an animal\'s "address," its niche is like its…', c: ['job', 'house number', 'street name', 'zip code'], why: 'House number, street, and zip code are all part of an address. The niche is the role it plays.' },
        { q: 'Two species need the exact same food, space, and nesting spots in one area. What does the competitive exclusion principle predict?', c: ['One will win, and the other must move, change, or die out', 'Both will share it forever with no problems', 'Both will die out right away', 'They will turn into one species'], why: 'Two species can\'t share the exact same niche for long. One outcompetes the other.' },
        { q: 'Hawks hunt mice during the day, and owls hunt mice at night. This is an example of…', c: ['resource partitioning', 'mutualism', 'exponential growth', 'a physical barrier'], why: 'They split up the same food by hunting at different times, so they compete less.' },
        { q: 'A species\' fundamental niche is…', c: ['all the conditions where it could live if nothing got in its way', 'the smaller area where it actually lives', 'the place where it was born', 'the food it likes best'], why: 'Fundamental = what is possible. Realized = what actually happens once other species are around.' },
        { q: 'Why is a realized niche usually smaller than the fundamental niche?', c: ['Competition and other species limit it', 'Organisms prefer small spaces', 'The fundamental niche is always tiny', 'The weather never changes'], why: 'Other species take some of the space and food, so a species ends up using less than it could.' },
        { q: 'Two robins fighting over the same worm is competition…', c: ['within one species', 'between two species', 'between a predator and its prey', 'between a plant and an animal'], why: 'Both are robins, so it\'s competition inside the same species.' },
        { q: 'A raccoon eats fruit, insects, fish, and trash, and lives in both cities and forests. It is a…', c: ['generalist', 'specialist', 'producer', 'decomposer'], why: 'Generalists have a broad niche. They can eat many foods and live in many places.' },
        { q: 'A koala eats almost only eucalyptus leaves. It is a…', c: ['specialist', 'generalist', 'producer', 'decomposer'], why: 'Specialists have a narrow niche. They depend on just one or a few things.' },
        { q: 'Which animal is most likely to survive if its main food disappears?', c: ['A generalist that eats many foods', 'A specialist that eats one food', 'An animal with a very narrow niche', 'An animal that can only live in one small place'], why: 'A generalist can switch to other foods. A specialist has nothing to switch to.' },
        { q: 'Which fact describes a squirrel\'s niche, not just its habitat?', c: ['It eats acorns and buries some, which helps oak trees spread', 'It lives in an oak forest', 'Its forest is in New Jersey', 'Its forest has tall trees'], why: 'Burying acorns is part of the squirrel\'s job in the ecosystem. The other choices only describe where it lives.' },
        { q: 'Hawks and owls both hunting mice in the same field is competition…', c: ['between two species', 'within one species', 'between a predator and its prey', 'between a plant and an animal'], why: 'Hawks and owls are different species that need the same food.' },
        { q: 'In a backyard, robins hunt worms on the ground while woodpeckers dig insects out of tree bark. What does this show?', c: ['Two species can share a habitat but have different niches', 'Robins and woodpeckers have the same niche', 'Robins and woodpeckers compete for the same food', 'Robins and woodpeckers are one species'], why: 'Same yard (habitat), but different jobs and foods (niches).' },
        { q: 'Several kinds of small birds feed in the same tree, but each one eats insects from a different part of the tree. This is…', c: ['resource partitioning', 'competitive exclusion', 'a fundamental niche', 'parasitism'], why: 'They split up the tree, so they compete less for the same insects.' },
        { q: 'A barnacle (a small shelled sea animal) could live all over a seaside rock, but a stronger kind of barnacle pushes it to the top part only. The top part is its…', c: ['realized niche', 'fundamental niche', 'biome', 'population'], why: 'The realized niche is where it actually lives once competitors push it out of some areas.' },
        { q: 'With no competitors, a plant could grow in both wet and dry soil. This full range is its…', c: ['fundamental niche', 'realized niche', 'habitat', 'population'], why: 'The fundamental niche is everywhere it could live if nothing got in its way.' },
        { q: 'Which animal is a specialist?', c: ['A panda that eats almost only bamboo', 'A raccoon that eats almost anything', 'A crow that eats seeds, insects, and trash', 'A rat that lives in cities and fields'], why: 'Specialists have a narrow niche. The panda depends on one main food.' },
        { q: 'A niche includes when an animal is active. Which fact fits this part of a niche?', c: ['Bats hunt insects at night', 'Bats live in caves', 'Bat caves are in Texas', 'Bat caves are dark and cool'], why: 'Hunting at night is about when the bat works. The other facts describe where it lives.' },
        { q: 'Why do species that share a habitat often split up resources?', c: ['So they compete less with each other', 'So they can grow larger', 'So they can become one species', 'So they can change their habitat into a biome'], why: 'Splitting up food, space, or time means less fighting over the same things.' },
        { q: 'A new insect arrives that eats the same leaves, at the same time, in the same place as a native insect. What is most likely?', c: ['Strong competition, and one may push the other out', 'Both will grow faster', 'They will help each other survive', 'Nothing, because insects never compete'], why: 'Two species can\'t share the exact same niche for long. One will usually win.' },
        { q: 'Which of these describes a habitat, not a niche?', c: ['A muddy pond', 'Eating young mosquitoes', 'Hunting at night', 'Being eaten by herons'], why: 'A muddy pond is a place to live. The others are parts of a role.' },
        { q: 'Competition happens when living things…', c: ['struggle over the same limited resource', 'help each other survive', 'live in different habitats', 'eat completely different foods'], why: 'Competition is a struggle over something there isn\'t enough of, like food, water, or space.' },
        { q: 'In the basketball comparison, the court is like the habitat. What is each player\'s position like?', c: ['Their niche', 'Their habitat', 'Their population', 'Their biome'], why: 'Each player has a different job on the same court, like each species has its own niche.' },
      ],
      realLife: {
        text: `<p>Think about a basketball team. All five players share the same court, which is like their <b>habitat</b>. But each player has a different job, which is like a <b>niche</b>: one handles the ball, one grabs rebounds, one shoots from outside.</p>
          <p>If two players try to do the exact same job, they get in each other's way. That's <b>competition</b>. A good team splits up the jobs, just like hawks and owls split up the hunting.</p>
          <p>In a New Jersey backyard, robins hunt worms on the ground while woodpeckers dig insects out of tree bark. Same yard, different niches.</p>`,
        prompt: 'Pick an animal you have seen near your home. Describe its habitat and its niche, and explain how the two are different.',
      },
    },
    {
      key: 'b01-04',
      title: 'Population growth and carrying capacity',
      videos: [
        { id: 'KyAKEisg2PQ', title: 'Exponential and logistic growth' },
        { id: 'RBOsqmBQBQk', title: 'Population ecology: the Texas mosquito mystery' },
      ],
      learn: `
        <p>A <b>population</b> (all the members of one species in one area) changes size in four ways. <b>Births</b> and <b>immigration</b> (moving in) add individuals. <b>Deaths</b> and <b>emigration</b> (moving out) take them away.</p>
        <p><b>Exponential growth</b> (growth that gets faster and faster because the population keeps multiplying) happens when food and space are unlimited. The graph curves up like the letter J.</p>
        <p><b>Worked example:</b> 10 rabbits double every year. After 1 year: 20. After 2 years: 40. After 3 years: 80. After 4 years: 160.</p>
        <p>But nothing grows forever. <b>Limiting factors</b> (things that slow growth) kick in. <b>Population density</b> (how crowded a population is) matters:</p>
        <ul><li><b>Density-dependent</b> factors (get stronger when the population is crowded): food shortage, disease, predators, and competition.</li>
        <li><b>Density-independent</b> factors (hit no matter how crowded it is): floods, fires, droughts, and freezing weather.</li></ul>
        <p><b>Logistic growth</b> (growth that speeds up, then slows down and levels off) makes an S-shaped curve. The level where it flattens out is the <b>carrying capacity</b> (the largest population an environment can support for a long time), often written as <b>K</b>.</p>
        <p>If a population goes above its carrying capacity, food runs short and deaths go up until the population drops back down.</p>`,
      quiz: [
        { q: 'Which two things ADD individuals to a population?', c: ['Births and immigration', 'Deaths and emigration', 'Births and deaths', 'Immigration and emigration'], why: 'Babies being born and individuals moving in both make the population bigger.' },
        { q: 'Exponential growth makes a graph shaped like…', c: ['the letter J', 'the letter S', 'a flat line', 'a line going down'], why: 'It starts slow, then shoots up faster and faster, like a J.' },
        { q: 'Logistic growth makes a graph shaped like…', c: ['the letter S', 'the letter J', 'a straight line going down', 'the letter U'], why: 'It grows fast, then slows and levels off at the carrying capacity, like an S.' },
        { q: 'Carrying capacity is…', c: ['the largest population an environment can support for a long time', 'the number of babies born each year', 'the smallest population that can survive', 'how much food one animal can carry'], why: 'It is the limit set by food, water, space, and other resources.' },
        { q: '50 bacteria double every hour. How many bacteria are there after 3 hours?', c: ['400', '300', '150', '200'], why: '50 → 100 → 200 → 400. Doubling three times means 50 × 2 × 2 × 2 = 400.' },
        { q: 'Which is a density-dependent limiting factor?', c: ['Disease spreading through a crowded herd', 'A hurricane', 'A forest fire', 'A sudden freeze'], why: 'Disease spreads faster when animals are packed close together. Storms, fires, and freezes hit no matter what.' },
        { q: 'Which is a density-independent limiting factor?', c: ['A flood', 'Competition for food', 'Predators', 'Disease'], why: 'A flood hurts a population the same way whether it is crowded or not.' },
        { q: 'On a logistic growth graph, a deer population levels off at 600 deer. What is the carrying capacity?', c: ['600 deer', '300 deer', '1,200 deer', '6,000 deer'], why: 'The carrying capacity is where the S-curve flattens out.' },
        { q: 'Why can\'t exponential growth last forever in nature?', c: ['Resources like food and space run out', 'Animals stop needing food', 'The Sun stops shining', 'Populations always stay the same size'], why: 'As the population gets bigger, limiting factors like hunger and disease slow it down.' },
        { q: 'A pond can support 200 frogs, but right now there are 260. What will most likely happen?', c: ['The population will shrink as food runs short', 'The population will keep growing fast', 'The carrying capacity will jump to 260', 'Nothing will change'], why: 'Above carrying capacity there isn\'t enough food, so more frogs die until the number drops.' },
        { q: 'A deer population of 1,000 has 150 births, 100 deaths, 20 move in, and 30 move out in one year. What is the new population?', c: ['1,040', '1,300', '1,060', '940'], why: '1,000 + 150 − 100 + 20 − 30 = 1,040. Births and move-ins add. Deaths and move-outs subtract.' },
        { q: 'Emigration means…', c: ['individuals moving out of a population', 'individuals moving into a population', 'babies being born', 'individuals dying'], why: '"E" for exit: emigration is moving out. Immigration is moving in.' },
        { q: 'In one year, a fish population has 200 births and 250 deaths. No fish move in or out. What happens?', c: ['It shrinks by 50', 'It grows by 50', 'It grows by 450', 'It stays the same'], why: '200 − 250 = −50. More deaths than births means the population gets smaller.' },
        { q: 'A late-spring freeze kills many young plants in a field, no matter how crowded they are. The freeze is…', c: ['a density-independent factor', 'a density-dependent factor', 'the carrying capacity', 'immigration'], why: 'Weather hits the same way whether the population is crowded or not.' },
        { q: 'Exponential growth happens when…', c: ['food and space are unlimited', 'food runs out', 'predators are everywhere', 'the population has reached carrying capacity'], why: 'With nothing holding it back, a population keeps multiplying faster and faster.' },
        { q: 'On an S-shaped growth curve, where is the population growing fastest?', c: ['In the middle, where the curve is steepest', 'At the very start', 'At the flat top', 'It grows at the same speed everywhere'], why: 'Steeper means faster growth. Growth slows at the top as it nears carrying capacity.' },
        { q: 'When a population is at its carrying capacity, how do births and deaths compare?', c: ['They are about equal', 'Births are much higher', 'Deaths are much higher', 'Both stop completely'], why: 'The population stays level, so about as many are born as die.' },
        { q: 'Why did white-tailed deer numbers grow so much in New Jersey?', c: ['Big predators like wolves are gone', 'There is less food for deer', 'More floods happened', 'Deer stopped having babies'], why: 'With no big predators hunting them, more deer survived and had young.' },
        { q: 'Population density means…', c: ['how crowded a population is', 'how heavy the animals are', 'how fast the animals run', 'how old the population is'], why: 'Density is how many individuals live in a certain amount of space.' },
        { q: 'A lake can support 1,000 trout. Right now there are 400 trout and plenty of food. What will most likely happen?', c: ['The population will grow toward 1,000', 'The population will shrink', 'It will stay at 400 forever', 'It will grow to 10,000 and stay there'], why: 'Below carrying capacity there are spare resources, so the population can grow.' },
        { q: 'Bacteria double every 20 minutes. If you start with 100, how many are there after 1 hour?', c: ['800', '600', '400', '300'], why: '1 hour = 3 doublings. 100 → 200 → 400 → 800.' },
        { q: 'Which change would RAISE a deer herd\'s carrying capacity?', c: ['A large new patch of food plants grows', 'A drought dries up the streams', 'A disease spreads through the herd', 'A new highway takes away forest'], why: 'More food lets the environment support more deer for a long time.' },
        { q: 'Which is NOT a density-dependent factor?', c: ['A hurricane', 'Disease', 'Predators', 'Competition for food'], why: 'A hurricane hits no matter how crowded the population is. The others get worse with crowding.' },
        { q: 'Why does exponential growth get faster and faster?', c: ['More individuals means more babies each round', 'Each animal gets bigger', 'Food keeps running out', 'Predators help it grow'], why: 'Each new member can also have young, so the number added keeps growing.' },
      ],
      realLife: {
        text: `<p>Think about your phone's storage. At first, photos fill it fast. As it gets close to full, you can only squeeze in a few more. Your phone has a "carrying capacity."</p>
          <p>White-tailed deer in New Jersey are a real example. Wolves and other big predators are gone, so deer numbers grew fast. In some forests, deer eat so many young plants that new trees can't grow, and there is less food for every deer. When food runs short, more deer go hungry or get sick, and the population stops growing.</p>`,
        prompt: 'Imagine 10 rabbits are let loose on an island with lots of grass and no predators. Describe how their population would change over many years, using the words exponential, limiting factor, and carrying capacity.',
      },
    },
    {
      key: 'b01-05',
      title: 'Interactions in communities',
      videos: [
        { id: 'rNjPI84sApQ', title: 'Ecological relationships' },
        { id: 'q2zdiLn3gSE', title: 'Interactions between populations' },
        { id: '-oVavgmveyY', title: 'Food webs and energy pyramids' },
      ],
      learn: `
        <p>Living things in a <b>community</b> (all the different species in one area) affect each other in a few main ways:</p>
        <ul><li><b>Predation</b> (one animal, the predator, hunts and eats another, the prey): an owl eating a mouse.</li>
        <li><b>Competition</b> (both need the same limited resource): foxes and coyotes hunting the same rabbits.</li>
        <li><b>Symbiosis</b> (two species living closely together for a long time), which has three types:
        <ul><li><b>Mutualism</b>: both win. Bees get nectar, and flowers get pollen carried to other flowers.</li>
        <li><b>Commensalism</b>: one wins, and the other is not helped or hurt. A bird nests in a tree.</li>
        <li><b>Parasitism</b>: one wins, and the other, the host, is hurt. A tick drinks a dog's blood.</li></ul></li></ul>
        <p>A <b>food chain</b> shows one path of who eats whom: grass → rabbit → fox. The arrows point toward the eater, showing which way energy moves.</p>
        <p><b>Producers</b> (mostly plants and algae that make their own food from sunlight) start almost every chain. <b>Consumers</b> (living things that eat other living things) come next. <b>Decomposers</b> (fungi and bacteria that break down dead things) return nutrients to the soil.</p>
        <p>A <b>food web</b> (many food chains connected together) shows the whole community. Only about 10% of the energy passes from one level to the next, so there are always fewer top predators.</p>`,
      quiz: [
        { q: 'A bee drinks nectar from a flower and carries its pollen to other flowers so they can make seeds. This is…', c: ['mutualism', 'parasitism', 'commensalism', 'predation'], why: 'Both win: the bee gets food, and the flower gets help making seeds.' },
        { q: 'A tick feeds on a dog\'s blood and can make the dog sick. This is…', c: ['parasitism', 'mutualism', 'commensalism', 'competition'], why: 'The tick (parasite) wins, and the dog (host) is hurt.' },
        { q: 'A bird builds a nest in a tree. The bird gets a home, and the tree is not helped or hurt. This is…', c: ['commensalism', 'mutualism', 'parasitism', 'predation'], why: 'One species wins and the other is not affected. That\'s commensalism.' },
        { q: 'An owl catches and eats a mouse. The mouse is the…', c: ['prey', 'predator', 'parasite', 'producer'], why: 'The predator hunts. The prey is the animal that gets eaten.' },
        { q: 'What do the arrows in a food chain show?', c: ['The direction energy moves, from the eaten to the eater', 'Which animal is bigger', 'Which animal is faster', 'Where each animal lives'], why: 'In grass → rabbit, the arrow points to the rabbit because the grass\'s energy goes into the rabbit.' },
        { q: 'Which living thing is a producer?', c: ['Grass', 'Rabbit', 'Fox', 'Mushroom'], why: 'Producers make their own food from sunlight. Grass is a plant. A mushroom is a decomposer.' },
        { q: 'What do decomposers do?', c: ['Break down dead things and return nutrients to the soil', 'Make food from sunlight', 'Hunt live prey', 'Carry pollen between flowers'], why: 'Fungi and bacteria recycle dead plants and animals so new plants can use the nutrients.' },
        { q: 'What is a food web?', c: ['Many connected food chains in one ecosystem', 'One straight line of who eats whom', 'A web that a spider builds', 'A list of only the plants in an area'], why: 'Most animals eat more than one thing, so food chains connect into a web.' },
        { q: 'Foxes and coyotes both hunt rabbits in the same field. This is…', c: ['competition', 'mutualism', 'commensalism', 'parasitism'], why: 'Both need the same limited food, so they compete for it.' },
        { q: 'About how much energy passes from one level of a food chain to the next?', c: ['About 10%', 'About 50%', 'About 90%', 'All 100%'], why: 'Most energy is used up for living or lost as heat. Only about 10% gets passed on.' },
        { q: 'In the food chain grass → rabbit → fox, what would most likely happen right after a disease kills most of the foxes?', c: ['Rabbit numbers would go up', 'Rabbit numbers would go down', 'Grass would grow more', 'Nothing would change'], why: 'With fewer foxes hunting them, more rabbits survive. Then they eat more grass.' },
        { q: 'Why is an ecosystem with a big, complex food web usually more stable?', c: ['If one species disappears, its eaters can switch to other foods', 'Big food webs have no predators', 'Big food webs never change', 'Animals in big food webs never get sick'], why: 'More connections mean more backup food sources, so losing one species does less damage.' },
        { q: 'In parasitism, the living thing that gets hurt is called the…', c: ['host', 'predator', 'producer', 'decomposer'], why: 'The parasite lives on or in the host and harms it.' },
        { q: 'A remora fish rides on a shark and eats its leftover scraps. The shark is not helped or hurt. This is…', c: ['commensalism', 'mutualism', 'parasitism', 'predation'], why: 'One species wins and the other is not affected.' },
        { q: 'Which is NOT a type of symbiosis?', c: ['Predation', 'Mutualism', 'Commensalism', 'Parasitism'], why: 'Symbiosis has three types: mutualism, commensalism, and parasitism. Predation is hunting.' },
        { q: 'If all the decomposers disappeared, what would happen?', c: ['Dead things would pile up, and nutrients wouldn\'t return to the soil', 'Plants would grow faster', 'There would be more sunlight', 'Predators would starve right away'], why: 'Decomposers recycle dead things. Without them, plants would run short of nutrients.' },
        { q: 'In the food chain grass → rabbit → fox, a drought kills most of the grass. What happens next?', c: ['Rabbit numbers drop', 'Rabbit numbers rise', 'Foxes start eating grass', 'Nothing changes'], why: 'Less grass means less food for rabbits, so fewer rabbits survive.' },
        { q: 'Why are there always fewer top predators than plant-eaters?', c: ['Only about 10% of the energy passes up each level', 'Top predators are lazier', 'Plants eat top predators', 'Top predators live longer'], why: 'With only about 10% passed on, the top of a food chain has little energy to support many animals.' },
        { q: 'In the chain algae → small fish → gull, which is a consumer that eats a producer?', c: ['The small fish', 'The gull', 'The algae', 'The sun'], why: 'Algae are producers. The small fish eats them, so it is the first consumer.' },
        { q: 'Mistletoe grows on a tree and takes the tree\'s water and nutrients, which hurts the tree. This is…', c: ['parasitism', 'mutualism', 'commensalism', 'competition'], why: 'The mistletoe (parasite) wins, and the tree (host) is harmed.' },
        { q: 'A clownfish lives in a sea anemone (a soft sea animal with stinging arms). The clownfish chases off fish that eat the anemone, and the stinging arms protect the clownfish. This is…', c: ['mutualism', 'commensalism', 'parasitism', 'predation'], why: 'Both species win. Each one protects the other.' },
        { q: 'A mushroom is growing on a dead log and breaking it down. The mushroom is a…', c: ['decomposer', 'producer', 'predator', 'parasite'], why: 'Fungi like mushrooms break down dead things and return nutrients to the soil.' },
        { q: 'A hawk eats rabbits, mice, and snakes. If the mice disappear, what can the hawk most likely do?', c: ['Eat more rabbits and snakes', 'Starve right away', 'Start making its own food', 'Become a decomposer'], why: 'In a food web, an animal that eats many things can switch to its other foods.' },
        { q: 'In grass → grasshopper → frog, the grass stores 1,000 units of energy. About how much reaches the frog?', c: ['10 units', '100 units', '1,000 units', '500 units'], why: 'About 10% passes on at each step: 1,000 → 100 → 10.' },
      ],
      realLife: {
        text: `<p>You see these relationships every day. When a tick latches onto a dog, that's <b>parasitism</b>: the tick gets a blood meal, and the dog gets hurt.</p>
          <p>The bacteria living in your gut are <b>mutualism</b>. You give them a warm home and food, and they help you digest food and make some vitamins.</p>
          <p>Pigeons and sparrows fighting over the same crumbs in a parking lot are <b>competition</b>.</p>
          <p>At the Jersey Shore, gulls eat crabs, crabs eat smaller animals, and all of them depend on tiny algae (producers). That's a <b>food web</b>.</p>`,
        prompt: 'Think of two living things you have seen interact, like a dog and its fleas or a bee and a flower. Name the relationship and explain who benefits and who is harmed, if anyone.',
      },
    },
  ],
};
