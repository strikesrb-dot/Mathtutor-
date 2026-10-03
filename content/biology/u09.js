// Unit 9 — Biodiversity and human impacts. NJ: HS-LS2-2, HS-LS2-6, HS-LS2-7, HS-LS4-5, HS-LS4-6
// Follows Khan Academy's NGSS high school biology, Unit 9.
// Quiz format: c[0] is ALWAYS the correct answer. The app shuffles choices on screen.
// Every video ID was checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
// CO₂ ppm math (420 − 280 = 140) was recomputed with node before writing.
export default {
  id: 'b09', n: 9, title: 'Biodiversity and human impacts', nj: ['HS-LS2-2', 'HS-LS2-6', 'HS-LS2-7', 'HS-LS4-5', 'HS-LS4-6'],
  lessons: [
    {
      key: 'b09-01',
      title: 'Biodiversity and ecosystem services',
      videos: [
        { id: 'TZ-S9sc6HYM', title: 'Biodiversity' },
        { id: 'bT_2MyIRsas', title: 'How do vultures provide ecosystem services?' },
        { id: 'GK_vRtHJZu4', title: 'Why is biodiversity so important?' },
      ],
      learn: `
        <p><b>Biodiversity</b> (the variety of life in one place) is measured at three levels:</p>
        <ul><li><b>Genetic diversity</b> (differences in DNA among members of one species), like all the different kinds of apples.</li>
        <li><b>Species diversity</b> (how many different species live in an area, and how many of each).</li>
        <li><b>Ecosystem diversity</b> (the variety of habitats, like forests, marshes, rivers, and beaches).</li></ul>
        <p><b>Why variety matters:</b> an ecosystem with more species is more <b>stable</b> (it bounces back faster after a problem). If one species dies out, others can do a similar job. In the 1840s, Ireland grew mostly one kind of potato. A disease destroyed most of the crop, and about a million people died in the famine (a time when there isn't enough food).</p>
        <p><b>Ecosystem services</b> (free benefits that nature gives people):</p>
        <ul><li><b>Food</b>: crops, fish, and fruit.</li>
        <li><b>Medicine</b>: aspirin first came from willow bark, and penicillin came from a mold.</li>
        <li><b>Clean water</b>: wetlands and soil filter dirty water.</li>
        <li><b>Pollination</b> (moving pollen between flowers so plants make fruit and seeds): bees help grow New Jersey's blueberries and cranberries.</li>
        <li><b>Cleanup</b>: <b>decomposers</b> (living things like fungi and bacteria that break down dead things) and <b>scavengers</b> (animals that eat dead animals) like vultures clean up the rest.</li></ul>`,
      quiz: [
        { q: 'What is biodiversity?', c: ['The variety of life in an area', 'The number of people living in an area', 'The total weight of all plants in an area', 'The amount of rain an area gets'], why: 'Bio = life, diversity = variety. Biodiversity counts the different genes, species, and ecosystems in a place.' },
        { q: 'A cornfield and a forest are the same size. Which most likely has higher biodiversity?', c: ['The forest, because it has many kinds of plants and animals', 'The cornfield, because it has more plants in neat rows', 'They are the same, because they are the same size', 'The cornfield, because farmers take care of it'], why: 'A cornfield is mostly one species. A forest holds many species of trees, insects, birds, and fungi.' },
        { q: 'Differences in the DNA of the members of one species are called…', c: ['genetic diversity', 'species diversity', 'ecosystem diversity', 'pollination'], why: 'Genetic diversity is variety inside one species, like the many kinds of apples or dogs.' },
        { q: 'New Jersey has pine forests, salt marshes, rivers, and beaches. This variety of habitats is…', c: ['ecosystem diversity', 'genetic diversity', 'species diversity', 'a food chain'], why: 'Ecosystem diversity means many different kinds of habitats in one region.' },
        { q: 'What are ecosystem services?', c: ['Free benefits that nature gives people', 'Jobs at a national park', 'Companies that clean up pollution', 'Laws that protect animals'], why: 'Clean water, food, medicine, and pollination are services nature gives us without sending a bill.' },
        { q: 'Which is an example of pollination as an ecosystem service?', c: ['Bees carry pollen so blueberry bushes grow berries', 'Wetlands filter dirty water', 'Mold is used to make penicillin', 'Trees give shade on a hot day'], why: 'Pollination moves pollen between flowers so plants make fruit. Many crops need bees.' },
        { q: 'Why does a wetland help keep drinking water clean?', c: ['Its soil and plants trap and filter pollution', 'It adds chlorine to the water', 'It makes the water saltier', 'It heats the water to kill germs'], why: 'Wetland plants, soil, and bacteria catch dirt and break down some pollution before the water reaches rivers.' },
        { q: 'Aspirin was first made from a chemical found in willow bark. This shows that biodiversity…', c: ['can be a source of medicines', 'is only important for food', 'causes diseases', 'only matters in rainforests'], why: 'Many medicines come from plants, fungi, and other living things. Losing species could mean losing future cures.' },
        { q: 'In the 1840s, Ireland depended on mostly one kind of potato, and a disease destroyed most of the crop. What lesson does this teach?', c: ['Low genetic diversity makes a crop easy to wipe out', 'Potatoes cannot grow in cold places', 'More species always means more disease', 'Diseases only attack wild plants'], why: 'The potatoes were nearly identical, so few could resist the disease. Variety gives some plants a chance to survive.' },
        { q: 'Why is an ecosystem with many species usually more stable?', c: ['If one species is lost, others can do a similar job', 'More species means there is no competition', 'Ecosystems with many species never have problems', 'More species makes the weather better'], why: 'With backups for each role, the food web keeps working when one species declines.' },
        { q: 'When vultures nearly disappeared in India, dead animals were left rotting and more wild dogs spread rabies. What service had the vultures provided?', c: ['Cleaning up dead animals', 'Pollinating crops', 'Filtering water', 'Making oxygen'], why: 'Vultures are scavengers. They eat dead animals, which helps keep disease from spreading.' },
        { q: 'Fungi and bacteria that break down dead plants and animals are called…', c: ['decomposers', 'producers', 'pollinators', 'predators'], why: 'Decomposers return nutrients to the soil so new plants can grow.' },
      ],
      realLife: {
        text: `<p>Think about your lunch. The bread came from wheat, a kind of grass. The apple needed a bee to <b>pollinate</b> (carry pollen to) its flower. The water you drink may have been cleaned by soil and wetlands before it ever reached a treatment plant.</p>
          <p>New Jersey's state fruit is the blueberry. Farmers in South Jersey rent beehives each spring so their bushes make berries. Without pollinators, many fruits and vegetables would be rare and expensive.</p>`,
        prompt: 'Pick one food you ate this week. Trace it back to nature and name at least one ecosystem service (like pollination or clean water) that helped make it.',
      },
    },
    {
      key: 'b09-02',
      title: 'Threats to biodiversity',
      videos: [
        { id: 'K10qnzCYH54', title: 'Human impacts on ecosystems' },
        { id: '5eTCZ9L834s', title: '5 human impacts on the environment' },
        { id: 'TZk6vcmLcKw', title: 'Biomagnification and the trouble with toxins' },
      ],
      learn: `
        <p>Species have always gone <b>extinct</b> (died out forever), but today humans are speeding it up. Remember the biggest threats with <b>HIPPO</b>:</p>
        <ul><li><b>H — Habitat loss</b> (the place a species lives is destroyed): forests and fields are cleared for houses, roads, and stores. New Jersey has more people per square mile than any other state. Roads also cause <b>habitat fragmentation</b> (habitat broken into small, separated pieces).</li>
        <li><b>I — Invasive species</b> (living things brought to a new place where they spread and harm <b>native</b> species, the ones that already lived there): the spotted lanternfly feeds on trees and crops, and the emerald ash borer has killed huge numbers of New Jersey ash trees.</li>
        <li><b>P — Pollution</b>: fertilizer washing into lakes can cause <b>algal blooms</b> (huge, fast growth of <b>algae</b>, simple plant-like living things). When the algae die, the bacteria that break them down use up the oxygen fish need. Some poisons build up through <b>biomagnification</b> (a toxin getting more concentrated at each step up a food chain). The pesticide DDT made bald eagle eggshells so thin they broke.</li>
        <li><b>P — Population growth</b>: more people need more land, food, and water.</li>
        <li><b>O — Overharvesting</b> (taking living things faster than they can reproduce): so many horseshoe crabs were caught in Delaware Bay that New Jersey banned harvesting them in 2008.</li></ul>
        <p>Climate change is another growing threat (see Lesson 4).</p>`,
      quiz: [
        { q: 'What does it mean when a species goes extinct?', c: ['Every member of the species has died, forever', 'The species moved to a new habitat', 'The species is hard to find this year', 'The species changed its diet'], why: 'Extinct means none are left anywhere. Once a species is extinct, it cannot come back.' },
        { q: 'In the HIPPO list of threats, what does the "H" stand for?', c: ['Habitat loss', 'Hunting', 'Heat waves', 'Hurricanes'], why: 'HIPPO = Habitat loss, Invasive species, Pollution, Population growth, Overharvesting.' },
        { q: 'A new highway cuts a forest into two smaller pieces. Deer and turtles can no longer cross safely. This is…', c: ['habitat fragmentation', 'biomagnification', 'an invasive species', 'overharvesting'], why: 'Fragmentation breaks habitat into separated pieces, so animals cannot easily reach mates, food, or water.' },
        { q: 'Which is the best example of an invasive species?', c: ['Spotted lanternflies from Asia spreading through New Jersey and damaging trees', 'White-tailed deer that have always lived in New Jersey', 'Bald eagles returning to nest in New Jersey', 'Oak trees growing in a New Jersey forest'], why: 'An invasive species comes from somewhere else, spreads fast, and causes harm. Lanternflies came from Asia.' },
        { q: 'Why do invasive species often spread so fast in their new home?', c: ['They have no natural predators or diseases there to control them', 'They are always bigger than native species', 'They only eat food that nothing else eats', 'They cannot reproduce in their native home'], why: 'Back home, predators and diseases keep them in check. In a new place, nothing stops them.' },
        { q: 'Fertilizer from lawns and farms washes into a lake. What is most likely to happen?', c: ['Algae grow out of control, and fish die when oxygen runs low', 'The lake becomes cleaner and clearer', 'Fish grow bigger from the extra nutrients', 'The water turns salty'], why: 'Fertilizer feeds algae. When the algae die, the bacteria breaking them down use up the oxygen fish need.' },
        { q: 'What is biomagnification?', c: ['A toxin getting more concentrated at each step up a food chain', 'A species getting bigger over many generations', 'Using a microscope to see tiny living things', 'A population growing very fast'], why: 'Each predator eats many contaminated prey, so the poison piles up in top predators like eagles.' },
        { q: 'A lake has the pesticide DDT in it. Which living thing will most likely have the MOST DDT in its body?', c: ['An eagle that eats fish', 'Algae in the water', 'Tiny animals that eat algae', 'Small fish that eat tiny animals'], why: 'Because of biomagnification, the top predator collects the most toxin from everything below it.' },
        { q: 'Overharvesting means…', c: ['taking living things faster than they can reproduce', 'planting too many crops in one field', 'cutting down trees and replanting them', 'harvesting crops at the wrong time of year'], why: 'If fish or crabs are caught faster than they can be replaced, their population crashes.' },
        { q: 'Red knots are shorebirds that eat horseshoe crab eggs in Delaware Bay during migration. Why did overharvesting horseshoe crabs hurt red knots?', c: ['The birds lost an important food source', 'The crabs started eating the birds', 'The birds became an invasive species', 'The crabs were an invasive species'], why: 'Fewer crabs meant fewer eggs. Red knots need those eggs to refuel on their long migration.' },
        { q: 'Why is habitat loss such a big threat in New Jersey?', c: ['It is the most densely populated state, so lots of land is built on', 'It has no forests left at all', 'It has no laws about land use', 'Its weather is too cold for most animals'], why: 'New Jersey has more people per square mile than any other state. Homes and roads replace habitat.' },
        { q: 'Which choice is an example of habitat loss?', c: ['A wetland is filled in to build a parking lot', 'A fisher catches more crabs than allowed', 'A beetle from Asia arrives in shipping crates', 'A factory dumps chemicals in a river'], why: 'The wetland itself is destroyed. The others are overharvesting, an invasive species, and pollution.' },
      ],
      realLife: {
        text: `<p>You may have seen <b>spotted lanternflies</b> (gray, spotted insects with red back wings) on trees, cars, or school walls. They came from Asia and were first found in New Jersey in 2018. The state asked people to squash them on sight to slow the spread.</p>
          <p>Other threats are easy to miss. Fertilizer on a lawn can wash into a storm drain, then into a lake, and feed an algal bloom. In 2019, an algal bloom kept people out of the water at Lake Hopatcong for part of the summer.</p>`,
        prompt: 'Choose one HIPPO threat you have seen near where you live, like litter, new construction, or lanternflies. Describe it and explain how it could hurt local living things.',
      },
    },
    {
      key: 'b09-03',
      title: 'Disturbance in ecosystems',
      videos: [
        { id: 'd7xbyNSxxrI', title: 'Ecological succession' },
        { id: 'uqEUzgVAF6g', title: 'Ecological succession: Nature\'s great grit' },
        { id: 'jZKIHe2LDP8', title: 'Ecological succession: Change is good' },
      ],
      learn: `
        <p>A <b>disturbance</b> (an event that suddenly changes an ecosystem) can be natural, like a fire, flood, or hurricane, or caused by people, like clearing a forest.</p>
        <p>In October 2012, <b>Hurricane Sandy</b> hit the New Jersey shore. Its <b>storm surge</b> (ocean water pushed onto land by a storm) washed away beaches and dunes and flooded marshes. Places with tall dunes and healthy salt marshes were damaged less, because those habitats soak up wave energy.</p>
        <p>After a disturbance, the community slowly rebuilds. This is <b>ecological succession</b> (the gradual change in which species live in an area over time).</p>
        <ul><li><b>Primary succession</b> starts on bare rock with <b>no soil</b>, like new lava or rock left by a melting glacier. <b>Pioneer species</b> (the first living things to move in), such as lichens and mosses, slowly break rock into soil.</li>
        <li><b>Secondary succession</b> happens where <b>soil is still there</b>, like after a fire or on an abandoned farm. It is much faster.</li></ul>
        <p>A typical order: grasses and weeds → shrubs → fast-growing trees → slow-growing trees like oaks. A mature, fairly stable community is called a <b>climax community</b>.</p>
        <p>Some disturbances help. In the New Jersey <b>Pine Barrens</b>, pitch pines survive fires and can sprout new needles from their burned trunks. Fire clears space so young pines get sunlight.</p>`,
      quiz: [
        { q: 'What is an ecological disturbance?', c: ['An event that suddenly changes an ecosystem', 'A slow change in climate over millions of years', 'A loud noise that scares animals', 'A new species being discovered'], why: 'Fires, floods, storms, and land clearing are disturbances. They quickly change which living things can survive.' },
        { q: 'Which is an example of a disturbance caused by people?', c: ['Clearing a forest to build houses', 'A lightning strike starting a fire', 'A hurricane flooding a marsh', 'A volcano erupting'], why: 'The other three are natural. Clearing land is a human-caused disturbance.' },
        { q: 'What is ecological succession?', c: ['The gradual change in which species live in an area over time', 'One species replacing its parents each generation', 'Animals moving south for the winter', 'A food chain from plants to predators'], why: 'Succession is how a community rebuilds, step by step, after a disturbance or on new land.' },
        { q: 'Primary succession starts…', c: ['on bare rock with no soil', 'in a field after a fire', 'on an abandoned farm', 'in a forest after a storm knocks down trees'], why: 'Primary means first. There is no soil yet, so pioneer species must start making it.' },
        { q: 'A forest fire burns the trees, but the soil is left behind. What happens next?', c: ['Secondary succession', 'Primary succession', 'Biomagnification', 'Every species goes extinct'], why: 'Soil is still there, so plants grow back fairly quickly. That is secondary succession.' },
        { q: 'Which are common pioneer species on bare rock?', c: ['Lichens and mosses', 'Oak and maple trees', 'Deer and foxes', 'Corn and wheat'], why: 'Lichens and mosses can grow on rock and slowly break it down into the first soil.' },
        { q: 'Why is secondary succession usually faster than primary succession?', c: ['The soil, seeds, and roots are already there', 'There are no animals to eat the plants', 'The weather is always warmer', 'Pioneer species grow faster on rock'], why: 'With soil already in place, plants can grow right away instead of waiting for soil to form.' },
        { q: 'A farm in New Jersey is abandoned. What is the most likely order of what grows there?', c: ['Grasses and weeds → shrubs → fast-growing trees → oaks', 'Oaks → shrubs → grasses → weeds', 'Shrubs → oaks → lichens → grasses', 'Lichens → mosses → bare rock → grasses'], why: 'Quick-growing plants come first. Over decades, shrubs and then trees shade them out.' },
        { q: 'During Hurricane Sandy, why did places with tall dunes and healthy marshes suffer less damage?', c: ['Dunes and marshes absorb wave energy and storm surge', 'Dunes and marshes stop hurricanes from forming', 'Dunes and marshes make the wind blow away from shore', 'Sandy never reached those places'], why: 'Natural barriers soak up water and slow waves before they reach homes. This is another ecosystem service.' },
        { q: 'What is storm surge?', c: ['Ocean water pushed onto land by a storm', 'A sudden burst of heavy rain', 'Strong wind that knocks down trees', 'Electricity from lightning'], why: 'Hurricane winds push seawater onto the shore. Sandy\'s storm surge flooded much of the Jersey Shore.' },
        { q: 'Pitch pines in the Pine Barrens can sprout new needles from their trunks after a fire. What does this show?', c: ['Some species are adapted to survive disturbances', 'Fire always destroys an ecosystem for good', 'Pitch pines are an invasive species', 'Trees cannot survive any fire'], why: 'Pine Barrens species have lived with fire for thousands of years. Their traits help them recover.' },
        { q: 'A mature, fairly stable community at the later stages of succession is called a…', c: ['climax community', 'pioneer community', 'invasive community', 'primary community'], why: 'After many decades, succession slows down. The mature forest or grassland is called a climax community.' },
      ],
      realLife: {
        text: `<p>Look at an empty lot, a crack in a sidewalk, or the side of a highway. Weeds and grasses move in first. If no one mows, shrubs and small trees follow. That's <b>secondary succession</b> happening in your neighborhood.</p>
          <p>Scientists, starting with a team from Rutgers University, have watched old farm fields in Somerset County turn back into forest since 1958. It is one of the longest-running studies of succession in the world.</p>
          <p>After Hurricane Sandy, many shore towns rebuilt and planted dunes to protect homes from the next big storm.</p>`,
        prompt: 'Imagine a park near you burns, or a field is left alone for 50 years. Describe what would grow there first, next, and last, and say whether this is primary or secondary succession.',
      },
    },
    {
      key: 'b09-04',
      title: 'Global change biology',
      videos: [
        { id: 'YpfxiDktSoI', title: 'Greenhouse effect and greenhouse gases' },
        { id: '8JUEga3MYsM', title: 'Ocean acidification' },
        { id: 'HsAUGbUgx6Y', title: 'The effects of climate change' },
      ],
      learn: `
        <p>The <b>greenhouse effect</b> (gases in the air trapping the Sun's heat near Earth's surface) keeps Earth warm enough for life. The main <b>greenhouse gases</b> are carbon dioxide (CO₂), methane, and water vapor.</p>
        <p>Burning <b>fossil fuels</b> (coal, oil, and natural gas, made from living things that died millions of years ago) and cutting down forests add extra CO₂ to the air. CO₂ was about 280 <b>ppm</b> (parts per million) before the 1800s and is over 420 ppm today. More CO₂ traps more heat, so Earth's average temperature is rising. This is <b>climate change</b> (a long-term change in Earth's weather patterns).</p>
        <p><b>Effects on living things:</b></p>
        <ul><li><b>Moving ranges</b>: many species are shifting toward the poles or up mountains to stay cool.</li>
        <li><b>Timing problems</b>: some flowers bloom earlier, but the insects that pollinate them may not show up in time.</li>
        <li><b>Coral bleaching</b>: in water that is too warm, corals push out the algae living inside them, turn white, and may starve.</li>
        <li><b>Rising seas</b> flood coastal marshes.</li></ul>
        <p><b>Ocean acidification</b> (the ocean becoming more acidic): the ocean absorbs about a quarter of the CO₂ people release. CO₂ mixes with seawater to make carbonic acid. Ocean <b>pH</b> (a scale of how acidic or basic something is) has dropped from about 8.2 to 8.1. That makes it harder for clams, oysters, and corals to build shells and skeletons.</p>`,
      quiz: [
        { q: 'What is the greenhouse effect?', c: ['Gases in the air trapping heat near Earth\'s surface', 'Plants growing faster inside glass buildings', 'The Sun getting hotter every year', 'A hole in the ozone layer letting heat in'], why: 'Greenhouse gases let sunlight in but trap some heat. Without them, Earth would be too cold for most life.' },
        { q: 'Which is a greenhouse gas?', c: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], why: 'Carbon dioxide, methane, and water vapor trap heat. Oxygen and nitrogen, most of our air, do not.' },
        { q: 'Which human activity adds the most extra CO₂ to the air?', c: ['Burning fossil fuels like coal, oil, and gas', 'Breathing', 'Recycling paper', 'Planting trees'], why: 'Fossil fuels hold carbon from ancient living things. Burning them releases it as CO₂.' },
        { q: 'CO₂ in the air was about 280 ppm before the 1800s and about 420 ppm in recent years. How much did it go up?', c: ['140 ppm', '700 ppm', '1.5 ppm', '280 ppm'], why: '420 − 280 = 140 ppm. That is a 50% increase.' },
        { q: 'Why does cutting down forests add to climate change?', c: ['Trees take in CO₂, so fewer trees leave more CO₂ in the air', 'Trees give off more CO₂ than they take in', 'Forests block the wind and cause warming', 'Cutting trees makes the Sun stronger'], why: 'Trees use CO₂ for photosynthesis. Burning or rotting cut trees also releases their stored carbon.' },
        { q: 'Many species are moving toward the poles or higher up mountains. Why?', c: ['To find cooler temperatures as their old homes warm up', 'To escape from invasive species only', 'Because mountains have more food in winter', 'Because the poles are getting colder'], why: 'As places warm, species that need cool conditions shift to where it is still cool enough.' },
        { q: 'A flower now blooms two weeks earlier because spring is warmer, but its bee pollinator still comes out at the usual time. What problem does this cause?', c: ['A timing mismatch: the flower may not get pollinated', 'The bee will grow larger', 'The flower will make more seeds', 'Nothing, because timing does not matter in nature'], why: 'Species that depend on each other can get out of sync. Fewer flowers get pollinated, and bees lose food.' },
        { q: 'What is coral bleaching?', c: ['Corals push out their algae when water is too warm and turn white', 'Corals being cleaned by fish', 'Chlorine from pools reaching the ocean', 'Corals turning white as they grow old'], why: 'The algae give corals food and color. Without them, bleached corals can starve and die.' },
        { q: 'How does extra CO₂ make the ocean more acidic?', c: ['CO₂ mixes with seawater and forms carbonic acid', 'CO₂ makes the ocean saltier', 'CO₂ heats the ocean until it boils', 'CO₂ kills fish, and the dead fish make acid'], why: 'The ocean absorbs CO₂ from the air. In water it forms carbonic acid, which lowers the pH.' },
        { q: 'Ocean pH has dropped from about 8.2 to about 8.1. Which statement is true?', c: ['The ocean is still basic, but it is becoming more acidic', 'The ocean is now an acid like lemon juice', 'The ocean is becoming more basic', 'A pH change of 0.1 never affects living things'], why: 'A pH above 7 is basic. Falling from 8.2 toward 7 means moving toward acidic.' },
        { q: 'Why is ocean acidification a problem for clams, oysters, and corals?', c: ['It makes it harder for them to build shells and skeletons', 'It makes their shells grow too thick', 'It makes the water too cold for them', 'It gives them more food'], why: 'More acidic water has less of the material they use to build shells and skeletons.' },
        { q: 'Rising sea levels are most likely to harm which New Jersey habitat?', c: ['Coastal salt marshes', 'Mountain forests in the north', 'Farm fields far inland', 'Deep underground caves'], why: 'Salt marshes sit right at sea level. As the sea rises, they can flood and drown.' },
      ],
      realLife: {
        text: `<p>New Jersey's coast is a good place to see global change. Sea level at Atlantic City has risen more than a foot in the last 100 years. Some shore streets now flood on sunny days during very high tides.</p>
          <p>New Jersey also has a big shellfish industry. Clams and oysters build their shells from minerals in seawater, so scientists watch ocean acidity closely.</p>
          <p>Every time a car burns gasoline, the carbon inside it goes into the air as CO₂. Some of that CO₂ ends up in the ocean.</p>`,
        prompt: 'Explain in your own words how burning gasoline in a car could affect an oyster living off the New Jersey coast. Use the words carbon dioxide and ocean acidification.',
      },
    },
    {
      key: 'b09-05',
      title: 'Conservation and sustainability',
      videos: [
        { id: 'FIYVnvHa2dc', title: 'Science, technology, and the environment' },
        { id: 'Kaeyr5-O2eU', title: 'Conservation and restoration ecology' },
      ],
      learn: `
        <p><b>Sustainability</b> (meeting our needs today without ruining the chances of future generations to meet theirs) is the goal. <b>Conservation</b> (protecting and carefully using nature and living things) is how we get there.</p>
        <p><b>Ways people protect biodiversity:</b></p>
        <ul><li><b>Protect habitat</b>: the New Jersey Pinelands became the country's first National Reserve in 1978. <b>Wildlife corridors</b> (strips of habitat that connect separate pieces) let animals move safely.</li>
        <li><b>Restore habitat</b> (<b>restoration ecology</b>, repairing damaged ecosystems): replant dunes, rebuild oyster reefs, and pull out invasive plants.</li>
        <li><b>Pass laws</b>: the U.S. banned DDT in 1972, and the Endangered Species Act (1973) protects species at risk. New Jersey had only one nesting pair of bald eagles in the early 1980s and now has more than 200.</li>
        <li><b>Use less</b>: reduce, reuse, recycle. New Jersey banned single-use plastic bags in stores in 2022.</li>
        <li><b>Switch energy</b>: solar and wind power make electricity without burning fossil fuels.</li></ul>
        <p><b>Designing a solution</b> (like an engineer):</p>
        <ol><li>Name the problem.</li>
        <li>List <b>criteria</b> (what the solution must do) and <b>constraints</b> (limits, like cost, time, or space).</li>
        <li>Compare ideas and their <b>trade-offs</b> (giving up some of one thing to get more of another).</li>
        <li>Test it, measure the results, and improve it.</li></ol>`,
      quiz: [
        { q: 'What does sustainability mean?', c: ['Meeting our needs today without ruining things for future generations', 'Using up resources as fast as possible', 'Never using any natural resources at all', 'Only protecting animals, not plants'], why: 'Sustainable use means there will still be clean water, fish, and forests for people later.' },
        { q: 'What is a wildlife corridor?', c: ['A strip of habitat that connects separate habitat patches', 'A fence that keeps animals out of towns', 'A hallway in a zoo', 'A road built through a forest'], why: 'Corridors let animals move between patches to find food and mates. They help fix habitat fragmentation.' },
        { q: 'Volunteers replant dune grass and rebuild an oyster reef. This is an example of…', c: ['restoration ecology', 'habitat fragmentation', 'overharvesting', 'biomagnification'], why: 'Restoration ecology repairs damaged ecosystems so they can provide services again.' },
        { q: 'New Jersey went from one nesting pair of bald eagles in the early 1980s to more than 200. What helped the most?', c: ['Banning DDT and protecting eagles by law', 'Bringing in eagles from Asia as an invasive species', 'Building more highways near rivers', 'Letting people catch more fish'], why: 'Without DDT, eggshells got strong again, and laws protected nests. The population recovered.' },
        { q: 'In engineering design, a criterion is…', c: ['something the solution must do to be successful', 'a limit, like cost or time', 'the final answer to the problem', 'a mistake made during testing'], why: 'Criteria describe success. For example: "cut cafeteria trash in half."' },
        { q: 'A school wants to start composting but only has $200 to spend. The $200 limit is a…', c: ['constraint', 'criterion', 'trade-off', 'corridor'], why: 'Constraints are limits on a solution, like money, time, space, or rules.' },
        { q: 'A town can build a parking lot that helps local stores, or keep the land as a wetland that soaks up floods. Giving up one to get the other is a…', c: ['trade-off', 'criterion', 'pioneer species', 'disturbance'], why: 'A trade-off means gaining some of one thing by giving up some of another.' },
        { q: 'Which is the most sustainable way to manage a fishery?', c: ['Limit catches so fish can reproduce faster than they are caught', 'Catch as many fish as possible this year', 'Stop measuring how many fish are left', 'Catch only the biggest breeding adults'], why: 'If catches stay below how fast the population grows, there will be fish every year.' },
        { q: 'How do solar panels help slow climate change?', c: ['They make electricity without burning fossil fuels', 'They pull CO₂ out of the ocean', 'They block sunlight from heating Earth', 'They make the greenhouse effect stronger'], why: 'Solar panels make no CO₂ while they run, so less heat-trapping gas is added to the air.' },
        { q: 'A student plans to reduce lunch trash at school. Which is the best way to tell if the plan worked?', c: ['Weigh the trash before and after the plan and compare', 'Ask one friend if it seems better', 'Guess based on how the cafeteria looks', 'Count the number of tables in the cafeteria'], why: 'Good solutions are tested with measurements. Comparing before and after shows whether the change really helped.' },
        { q: 'Why does "reduce" come first in "reduce, reuse, recycle"?', c: ['Using less stops waste before it is ever made', 'Recycling is against the law in most places', 'Reducing costs more money than recycling', 'Reusing things is bad for the environment'], why: 'Recycling still takes energy and trucks. Not making the waste at all helps the most.' },
        { q: 'A park has an invasive vine smothering native trees. Which plan best protects biodiversity?', c: ['Remove the vine and replant native species, then check it each year', 'Plant more of the vine so it shades the ground', 'Pave the area so nothing can grow', 'Ignore it, because all plants do the same job'], why: 'Removing invasives and replanting natives restores the habitat. Checking yearly catches the vine if it comes back.' },
      ],
      realLife: {
        text: `<p>Conservation is not just for scientists. Students design real solutions all the time:</p>
          <ul><li>A cafeteria sets up a share table for unopened food and a compost bin for scraps, then weighs the trash each week.</li>
          <li>A class pulls invasive vines from a local park and plants native shrubs that feed birds and bees.</li>
          <li>A school adds recycling bins to every hallway and installs water bottle refill stations.</li></ul>
          <p>Every solution has <b>criteria</b> (what it must do), <b>constraints</b> (limits like money and time), and <b>trade-offs</b>. The best plans get tested, measured, and improved.</p>`,
        prompt: 'Design a solution for one problem at your school or a local park, like food waste, litter, or invasive plants. Describe your plan, one criterion, one constraint, and how you would measure whether it worked.',
      },
    },
  ],
};
