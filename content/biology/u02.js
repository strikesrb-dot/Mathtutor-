// Unit 2 — From cells to organisms. NJ: HS-LS1-1, HS-LS1-2, HS-LS1-3
// Lessons 1–7 are the original starter lessons (reused by key so progress carries over).
// New lessons 8–10: every video ID checked against YouTube's oEmbed endpoint (title + channel), 2026-10-03.
import { pick } from '../legacy.js';

export default {
  id: 'b02', n: 2, title: 'From cells to organisms', nj: ['HS-LS1-1', 'HS-LS1-2', 'HS-LS1-3'],
  lessons: [
    pick('bio-1'),
    pick('bio-2'),
    pick('bio-3'),
    pick('bio-4'),
    pick('bio-5'),
    pick('bio-6'),
    pick('bio-7'),
    {
      key: 'b02-08',
      title: 'From cells to organisms',
      videos: [
        { id: 'wNe6RuK0FfA', title: 'Specialized cells: significance and examples' },
        { id: 't3g26p9Mh_k', title: 'How cells become specialized (stem cells)' },
        { id: 'i5tR3csCWYo', title: 'Tissues, part 1' },
      ],
      learn: `
        <p>In a <b>multicellular</b> organism (a living thing made of many cells), cells don't all do the same job. They <b>specialize</b> (each type gets good at one job), like players on a team.</p>
        <p><b>The shape fits the job:</b></p>
        <ul><li><b>Red blood cells</b> are bendy discs with no nucleus. They squeeze through tiny blood vessels and have extra room to carry oxygen.</li>
        <li><b>Nerve cells</b> (also called neurons) are long with many branches, so they can send signals far.</li>
        <li><b>Root hair cells</b> in plants have a long, thin arm that soaks up water from the soil.</li></ul>
        <p><b>How does a cell know what to become?</b> Almost every cell in your body has the <b>same DNA</b> (the full set of instructions). During <b>differentiation</b> (a cell turning into one special type), each cell switches <b>on</b> only the <b>genes</b> (sections of DNA) it needs and switches the rest off. <b>Stem cells</b> (cells that haven't picked a job yet) can still become many types.</p>
        <p><b>Building up:</b> similar cells form <b>tissues</b>. Animals have 4 main types:</p>
        <ul><li><b>Epithelial</b>: covers and lines things, like skin.</li>
        <li><b>Connective</b>: supports and connects, like bone and blood.</li>
        <li><b>Muscle</b>: moves things.</li>
        <li><b>Nervous</b>: sends signals.</li></ul>
        <p>Different tissues team up to make an <b>organ</b>. Organs make <b>organ systems</b>, and systems make the whole <b>organism</b>. Plants do this too. A leaf is an organ.</p>`,
      quiz: [
        { q: 'Why do multicellular organisms have specialized cells?', c: ['So different cells can do different jobs well', 'So every cell can do every job', 'Because their cells cannot divide', 'So the organism needs fewer cells'], why: 'Splitting up the work is efficient, like a team where each player has a position.' },
        { q: 'What is cell differentiation?', c: ['A cell turning into one specialized type', 'A cell splitting into two cells', 'A cell dying on purpose', 'Water moving into a cell'], why: 'Differentiation means a general cell becomes a specific type, like a muscle cell or a nerve cell.' },
        { q: 'A nerve cell and a skin cell from the same person have…', c: ['the same DNA, but different genes switched on', 'completely different DNA', 'the same genes switched on', 'no DNA at all'], why: 'Every body cell got a copy of the same DNA. Each type only uses the genes for its own job.' },
        { q: 'What is special about stem cells?', c: ['They haven\'t specialized yet, so they can become many cell types', 'They are only found in plant stems', 'They are fully specialized nerve cells', 'They have no DNA'], why: 'Stem cells haven\'t picked a job yet. That\'s why they can turn into different kinds of cells.' },
        { q: 'Adult red blood cells have no nucleus. How does that help them?', c: ['It leaves more room to carry oxygen', 'It lets them divide faster', 'It lets them make their own food', 'It lets them send nerve signals'], why: 'Without a nucleus, the cell can pack in more hemoglobin, the protein that carries oxygen.' },
        { q: 'Why are nerve cells long with many branches?', c: ['To carry signals far and connect to many other cells', 'To store extra water', 'To soak up sunlight', 'To carry oxygen in the blood'], why: 'Their shape fits their job: sending messages across the body.' },
        { q: 'A plant root hair cell has a long, thin arm. What is it for?', c: ['Soaking up water from the soil', 'Doing photosynthesis underground', 'Pumping water up like a heart', 'Protecting the plant from insects'], why: 'The long arm gives the cell more surface touching the soil, so more water can get in.' },
        { q: 'Which tissue type covers your body and lines organs like your stomach?', c: ['Epithelial tissue', 'Nervous tissue', 'Muscle tissue', 'Connective tissue'], why: 'Epithelial tissue is the covering and lining tissue. The outer layer of your skin is epithelial.' },
        { q: 'Bone and blood are both examples of…', c: ['connective tissue', 'epithelial tissue', 'nervous tissue', 'muscle tissue'], why: 'Connective tissue supports, connects, or carries things around. Surprising, but blood counts!' },
        { q: 'Which tissue type sends signals around the body?', c: ['Nervous tissue', 'Connective tissue', 'Epithelial tissue', 'Muscle tissue'], why: 'Nervous tissue is made of neurons, which carry messages to and from the brain.' },
        { q: 'A plant leaf is made of several tissues working together. What level is a leaf?', c: ['Organ', 'Cell', 'Tissue', 'Organism'], why: 'Several tissues working together as one part make an organ, in plants and in animals.' },
        { q: 'Your heart has muscle tissue, nervous tissue, and connective tissue. This shows that an organ…', c: ['is made of more than one type of tissue', 'is made of only one type of cell', 'is smaller than a tissue', 'works alone, without other organs'], why: 'An organ combines different tissues that work together on one job.' },
      ],
      realLife: {
        text: `<p>Doctors use <b>stem cells</b> to save lives. In a <b>bone marrow transplant</b>, a patient gets healthy stem cells from a donor's <b>bone marrow</b> (the soft center of some bones). Those stem cells then specialize into new red blood cells, white blood cells, and <b>platelets</b> (cell pieces that help blood clot).</p>
          <p>Your body does this on its own every day. Stem cells in your bone marrow make about 2 million new red blood cells every second, and stem cells in your skin replace the dead skin cells you shed.</p>`,
        prompt: 'Your body is like a team where every cell has a job. Pick two kinds of specialized cells and explain how each one\'s shape helps it do its job.',
      },
    },
    {
      key: 'b02-09',
      title: 'Human body systems',
      videos: [
        { id: '0JDCViWGn-0', title: 'Human body systems overview' },
        { id: '8NUxvJS-_0k', title: 'How do lungs work?' },
        { id: 'ruM4Xxhx32U', title: 'How the heart actually pumps blood' },
      ],
      learn: `
        <p>An <b>organ system</b> is a group of organs working on one big job. No system works alone. They pass things to each other like a relay team.</p>
        <p><b>Some major systems:</b></p>
        <ul><li><b>Respiratory</b>: the lungs bring in oxygen (O₂) and get rid of carbon dioxide (CO₂).</li>
        <li><b>Circulatory</b>: the heart pumps blood through blood vessels to every cell.</li>
        <li><b>Digestive</b>: the stomach and intestines break food into <b>nutrients</b> (small, useful pieces like sugars).</li>
        <li><b>Nervous</b>: the brain, spinal cord, and nerves send fast signals.</li>
        <li><b>Muscular</b> and <b>skeletal</b>: muscles pull on bones to move you. Bones also protect organs.</li>
        <li><b>Excretory</b>: the kidneys filter waste out of the blood.</li></ul>
        <p><b>Teamwork: breathing and blood</b></p>
        <ol><li>You breathe in. Air reaches the <b>alveoli</b> (millions of tiny air sacs in the lungs).</li>
        <li>O₂ diffuses into <b>capillaries</b> (the tiniest blood vessels).</li>
        <li>The heart pumps that blood to your cells. Their mitochondria use the O₂ to get energy from food and give off CO₂.</li>
        <li>Blood carries the CO₂ back to the lungs, and you breathe it out.</li></ol>
        <p>The digestive system teams up with blood too. Nutrients soak into the blood in the small intestine, and blood delivers them everywhere.</p>
        <p>When you run, your muscles need more O₂. Your nervous system makes you breathe faster <b>and</b> makes your heart beat faster.</p>`,
      quiz: [
        { q: 'What is the main job of the respiratory system?', c: ['Bring in oxygen and get rid of carbon dioxide', 'Pump blood around the body', 'Break food into nutrients', 'Filter waste out of the blood'], why: 'Respiratory means breathing. Your lungs take in O₂ and push out CO₂.' },
        { q: 'Which organ pumps blood through the circulatory system?', c: ['Heart', 'Lungs', 'Stomach', 'Kidneys'], why: 'The heart is a muscle that works like a pump, pushing blood through your blood vessels.' },
        { q: 'What are alveoli?', c: ['Tiny air sacs in the lungs where gases are exchanged', 'Tiny blood vessels inside the heart', 'Nerve cells in the brain', 'Folds in the small intestine'], why: 'Alveoli are where O₂ passes into the blood and CO₂ passes out of it.' },
        { q: 'How does oxygen move from the alveoli into the blood?', c: ['By diffusion, from high to low concentration', 'By active transport using ATP', 'By osmosis, like water', 'The heart sucks it in'], why: 'There is more O₂ in the air sacs than in the blood, so it spreads into the blood on its own.' },
        { q: 'Why does your heart beat faster when you run?', c: ['To deliver more oxygen to your working muscles', 'To make your lungs smaller', 'To digest food faster', 'To slow down your breathing'], why: 'Working muscles use more fuel, so they need more O₂ delivered by the blood.' },
        { q: 'Which two systems work together to get oxygen to your cells?', c: ['Respiratory and circulatory', 'Digestive and skeletal', 'Nervous and excretory', 'Skeletal and muscular'], why: 'The lungs bring O₂ into the body, and the blood carries it to every cell.' },
        { q: 'After the digestive system breaks food into nutrients, how do the nutrients reach your cells?', c: ['They soak into the blood, and the circulatory system carries them', 'The lungs breathe them out to the cells', 'The nerves carry them as signals', 'They stay in the stomach until they are needed'], why: 'Nutrients pass into the blood in the small intestine. Then blood delivers them all over the body.' },
        { q: 'You touch a hot pan and pull your hand away fast. Which two systems worked together?', c: ['Nervous and muscular', 'Digestive and respiratory', 'Circulatory and excretory', 'Respiratory and skeletal'], why: 'Nerves sensed the heat and sent a signal. Then muscles pulled your hand back.' },
        { q: 'The brain, spinal cord, and nerves make up which system?', c: ['Nervous system', 'Circulatory system', 'Skeletal system', 'Digestive system'], why: 'The nervous system is the body\'s fast messaging network.' },
        { q: 'What do the kidneys do?', c: ['Filter waste out of the blood', 'Pump blood to the body', 'Take in oxygen', 'Break down food'], why: 'The kidneys are part of the excretory system. They clean your blood and send the waste out as urine.' },
        { q: 'Where does the CO₂ you breathe out come from?', c: ['Your cells, as they use oxygen to get energy from food', 'The air you breathed in, unchanged', 'Your stomach as it digests food', 'Your bones as they grow'], why: 'Mitochondria use O₂ to release energy from food. CO₂ is the waste they give off.' },
        { q: 'How do muscles move your bones?', c: ['They pull on the bones', 'They push on the bones', 'They pump blood into the bones', 'They send oxygen to the bones'], why: 'Muscles can only pull. They get shorter and pull on the bone they are attached to.' },
      ],
      realLife: {
        text: `<p>Think about a <b>full-court basketball game</b>. Your <b>muscular</b> and <b>skeletal</b> systems move you down the court. Your muscles need extra O₂, so your <b>nervous</b> system speeds up your breathing and your heartbeat. Your <b>respiratory</b> system pulls in more air, and your <b>circulatory</b> system rushes that O₂ to your legs.</p>
          <p>The energy for all that running came from food. Your <b>digestive</b> system broke it down, and your blood delivered it. Every system has a part to play.</p>`,
        prompt: 'Pick something you do, like playing ball, climbing stairs, or carrying groceries. Name at least three body systems that work together and explain what each one does.',
      },
    },
    {
      key: 'b02-10',
      title: 'Homeostasis',
      videos: [
        { id: 'Iz0Q9nTZCw4', title: 'Homeostasis and negative/positive feedback' },
        { id: 'CLv3SkF_Eag', title: 'Positive and negative feedback loops' },
      ],
      learn: `
        <p><b>Homeostasis</b> (home-ee-oh-STAY-sis) means keeping the inside of your body steady, even when the outside changes. Your body has a <b>set point</b> (a target value) for many things. For body temperature, it's about 37 °C (98.6 °F).</p>
        <p>A <b>feedback loop</b> (a cycle that checks and corrects) has 3 parts:</p>
        <ol><li>A <b>sensor</b> (also called a receptor) notices a change, like nerve endings in your skin.</li>
        <li>A <b>control center</b> decides what to do. This is often the brain.</li>
        <li>An <b>effector</b> (a muscle or <b>gland</b>, an organ that releases chemicals) makes the fix.</li></ol>
        <p><b>Negative feedback</b> reverses a change and brings things back to the set point, like a thermostat. Most homeostasis works this way.</p>
        <ul><li><b>Too hot:</b> you sweat, and blood vessels in your skin widen to let heat out.</li>
        <li><b>Too cold:</b> you shiver (shaking muscles make heat), and skin blood vessels narrow to keep heat in.</li>
        <li><b>Blood sugar too high</b> after a meal: the <b>pancreas</b> (an organ behind the stomach) releases <b>insulin</b> (a hormone, or chemical messenger). Cells take in the sugar.</li>
        <li><b>Blood sugar too low:</b> the pancreas releases <b>glucagon</b>, and the liver lets stored sugar out.</li></ul>
        <p><b>Positive feedback</b> makes a change bigger until a job is done. Example: <b>blood clotting</b>. Platelets stick to a cut and call more platelets, until the cut is sealed. Contractions during childbirth work this way too.</p>`,
      quiz: [
        { q: 'Homeostasis means…', c: ['keeping the body\'s inside conditions steady', 'growing new cells', 'breaking down food', 'changing body temperature to match the weather'], why: 'Homeo = same and stasis = staying. Your body keeps things like temperature and blood sugar steady.' },
        { q: 'What is a set point?', c: ['The target value the body tries to keep, like 37 °C', 'The highest temperature the body can survive', 'The amount of sugar in one meal', 'The fastest your heart can beat'], why: 'Feedback loops work to keep each condition close to its set point.' },
        { q: 'You get hot playing soccer and start to sweat. This is an example of…', c: ['negative feedback', 'positive feedback', 'active transport', 'cell differentiation'], why: 'Sweating cools you down. It reverses the change and brings you back toward the set point.' },
        { q: 'Negative feedback…', c: ['reverses a change to bring things back to normal', 'makes a change bigger and bigger', 'stops all body activity', 'only happens in plants'], why: 'Negative means opposite. The response pushes in the opposite direction of the change.' },
        { q: 'Positive feedback…', c: ['makes a change bigger until a job is finished', 'always brings the body back to its set point', 'is how the body controls temperature', 'means something good happened'], why: '"Positive" means adding to the change, not "good." It stops once the job, like sealing a cut, is done.' },
        { q: 'Which is an example of positive feedback?', c: ['Platelets piling onto a cut until it is sealed', 'Shivering when you are cold', 'Sweating when you are hot', 'Releasing insulin after a meal'], why: 'Each platelet that sticks calls more platelets, so the clot keeps growing until the bleeding stops.' },
        { q: 'Why do you shiver when you are cold?', c: ['Shaking muscles make heat', 'Shaking lets heat escape faster', 'Shivering lowers your blood sugar on purpose', 'It widens the blood vessels in your skin'], why: 'Working muscles give off heat. Shivering is lots of fast, small muscle movements that warm you up.' },
        { q: 'You eat a big meal and your blood sugar rises. What does the pancreas release?', c: ['Insulin, so cells take in the sugar', 'Glucagon, so the liver releases more sugar', 'More sugar, to store for later', 'Nothing, because blood sugar fixes itself'], why: 'Insulin lowers blood sugar by helping cells take it in. Glucagon does the opposite.' },
        { q: 'You haven\'t eaten for many hours and your blood sugar drops. What happens?', c: ['The pancreas releases glucagon, and the liver lets stored sugar out', 'The pancreas releases more insulin', 'You start sweating to raise your sugar', 'Your cells take in even more sugar'], why: 'Glucagon raises blood sugar. It reverses the drop, so this is negative feedback.' },
        { q: 'In a feedback loop, which part notices a change?', c: ['The sensor', 'The effector', 'The set point', 'The control center'], why: 'Sensors, like nerve endings in your skin, notice changes and send that information to the control center.' },
        { q: 'When your body cools you down, sweat glands act as the…', c: ['effector', 'sensor', 'control center', 'set point'], why: 'Effectors are the muscles or glands that make the fix. Sweat glands make sweat to cool you.' },
        { q: 'On a hot day, your face looks red and flushed. Why?', c: ['Blood vessels in your skin widen to let heat out', 'Your body is heating your blood on purpose', 'Your skin is making new red blood cells', 'Blood vessels in your skin narrow to keep heat in'], why: 'Wider vessels bring warm blood near the surface, where the heat can escape into the air.' },
      ],
      realLife: {
        text: `<p>A <b>home thermostat</b> works just like negative feedback. It senses that the room is too cold, turns on the heat, and shuts it off once the room is warm again.</p>
          <p>Your body does this all day long. If you fast during Ramadan, you go many hours without food, but your blood sugar stays fairly steady. Your pancreas releases glucagon, and your liver lets out stored sugar. Feeling <b>thirsty</b> after a hot day outside is homeostasis too. It's your body's signal to fix low water.</p>`,
        prompt: 'Think about a time you got really hot or really cold. Describe what your body did, and explain how that was negative feedback bringing you back to normal.',
      },
    },
  ],
};
