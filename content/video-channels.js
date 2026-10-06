// YouTube channels the study tutor may show videos from (owner request 2026-10-05: "videos related to the topic, no anime").
// Vetted 2026-10-05 by 10 independent checkers (kid-safe across the channel, real educators, on-topic for Algebra 1 / high-school
// biology, not anime, not AI slop, embeddable); a channel is here only if every checker who looked at it approved it.
// Every sample video was re-checked with YouTube oEmbed. Held back (checkers disagreed, or UK maths wording): Corbettmaths,
// HegartyMaths, Dr Frost Maths, Cognito, FuseSchool, JensenMath, MathHelp.com, Mr H Tutoring, Stated Clearly, PBS Eons,
// Deep Look, Natural History Museum, California Academy of Sciences. Rejected: TED-Ed, Kurzgesagt and many others.
// The app matches a video's oEmbed author_url to `url` (never the channel name: look-alike channels exist), checks the lesson's
// subject is in `subjects`, and drops any title matching BLOCK (all channels) or the channel's own `block`; `must` = the title
// must match it. `music` is the checkers' estimate of background music (not used to filter). To change this list, ask the owner.

export const CHANNELS = [
  { name: "Khan Academy", url: "https://www.youtube.com/@khanacademy", subjects: ["algebra", "biology"], channelId: "UC4a-Gbdw7vOaccHmFo40b9g", music: "none" },
  { name: "Math Antics", url: "https://www.youtube.com/@mathantics", subjects: ["algebra"], channelId: "UCBuMwlP7kHkNxdPAqtFSJTw", music: "light" },
  { name: "Mashup Math", url: "https://www.youtube.com/@MashupMath", subjects: ["algebra"], channelId: "UCtBtcQJ8_jsrjPzb8i1tOsA", music: "light", block: ["fox31", "membership tour"] },
  { name: "Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", subjects: ["biology"], channelId: "UCb2GCoLSBXjmI_Qj1vk-44g", music: "light", block: ["study flow", "denaturing \\(no", "virtual checks", "birthday", "maternity"] },
  { name: "Bozeman Science", url: "https://www.youtube.com/@Bozemanscience1", subjects: ["biology"], channelId: "UCEik-U3T6u6JA0XiHLbNbOw", music: "light", block: ["swales", "permaculture", "ecuador", "webcam", "i made a thing", "making a new thing", "switch-its", "teaching evolution is not optional"] },
  { name: "Crash Course", url: "https://www.youtube.com/@crashcourse", subjects: ["biology"], channelId: "UCX6b17PVsYBQ0ip5gyeme-Q", music: "light", must: "crash ?course (biology|ecology|botany|zoology|anatomy)" },
  { name: "Mario's Math Tutoring", url: "https://www.youtube.com/@MariosMathTutoring", subjects: ["algebra"], channelId: "UClOR1BiPyOkkIAnv9Cmj4iw", music: "none" },
  { name: "The Organic Chemistry Tutor", url: "https://www.youtube.com/@TheOrganicChemistryTutor", subjects: ["algebra", "biology"], channelId: "UCEWpbFLzoYGPfuWUMFPSaoA", music: "none" },
  { name: "Brian McLogan", url: "https://www.youtube.com/@brianmclogan", subjects: ["algebra"], channelId: "UCQv3dpUXUWvDFQarHrS5P9A", music: "none", block: ["rugby", "nascar", "kicks", "disrespect", "vintage"] },
  { name: "Math with Mr. J", url: "https://www.youtube.com/@MathwithMrJ", subjects: ["algebra"], channelId: "UCY-ywrKyfsSFF1tILNH1pNA", music: "light/none" },
  { name: "Mathispower4u", url: "https://www.youtube.com/@Mathispower4u", subjects: ["algebra"], channelId: "UCNVMxRMEwvo9AS-Jfh6fQFg", music: "none", block: ["dr oz", "voting", "iv calculation", "contact tracing"] },
  { name: "NancyPi", url: "https://www.youtube.com/@NancyPi", subjects: ["algebra"], channelId: "UCRGXV1QlxZ8aucmE45tRx8w", music: "none" },
  { name: "Eddie Woo", url: "https://www.youtube.com/@misterwootube", subjects: ["algebra"], channelId: "UCq0EGvLTyy-LLT1oUSO_0FQ", music: "none", block: ["ed sheeran", "lego house", "let her go", "passenger", "iscf", "ultimate classroom", "assembly", "farewell", "prefect", "head shaved", "carnival", "speech", "interview", "thumb war", "survivorship", "jokes"] },
  { name: "ProfRobBob", url: "https://www.youtube.com/@profrobbob", subjects: ["algebra"], channelId: "UC9SPN6qaM0DB455-DrWAdpA", music: "none", block: ["calligraphy", "cursive", "pallet", "bench", "anniversary"] },
  { name: "eMATHinstruction", url: "https://www.youtube.com/@emathinstruction8071", subjects: ["algebra"], channelId: "UC40vRlHuBm0z9gneNmhSsdw", music: "none" },
  { name: "Tyler Wallace", url: "https://www.youtube.com/@wallacemath", subjects: ["algebra"], channelId: "UCe7rd4o8i5YBqrQjIcSpkUQ", music: "none" },
  { name: "MooMooMath and Science", url: "https://www.youtube.com/@MooMooMath", subjects: ["algebra", "biology"], channelId: "UCE_WiQFez8FZcICpbwblyyg", music: "light", block: ["tornado", "severe weather", "fiscal", "monetary", "inbreeding", "no narration"] },
  { name: "Math Mammoth", url: "https://www.youtube.com/@MathMammoth", subjects: ["algebra"], channelId: "UCJGB9PYRigvklFv3IgszWEw", music: "none" },
  { name: "Simplify the Middle", url: "https://www.youtube.com/@SimplifytheMiddle", subjects: ["algebra"], channelId: "UCKzaDSf18IKz6pnVdZYFe1A", music: "light" },
  { name: "Anywhere Math", url: "https://www.youtube.com/@AnywhereMath", subjects: ["algebra"], channelId: "UCRkeyHV2bANRrFjesu_wdLQ", music: "light" },
  { name: "Mrs.D Math", url: "https://www.youtube.com/@MrsDMath", subjects: ["algebra"], channelId: "UCBbyhiHyOLAPtbbmSitOUvA", music: "light" },
  { name: "GreeneMath.com", url: "https://www.youtube.com/@Greenemath", subjects: ["algebra"], channelId: "UCTy8D3wAtiJtSuA-2YOEfAw", music: "none" },
  { name: "The Algebros (Flipped Math)", url: "https://www.youtube.com/@TheAlgebros", subjects: ["algebra"], channelId: "UCpb2ooP_JerjjwwyvI_--pA", music: "none" },
  { name: "MyWhyU", url: "https://www.youtube.com/@MyWhyU", subjects: ["algebra"], channelId: "UCWWPKhD0fbAHHMg9_i6JQ5A", music: "light" },
  { name: "Freesciencelessons", url: "https://www.youtube.com/@Freesciencelessons", subjects: ["biology"], channelId: "UCqbOeHaAUXw9Il7sBVG3_bw", music: "none" },
  { name: "Kyle Kobe", url: "https://www.youtube.com/@BeverlyBiology", subjects: ["biology"], channelId: "UCei_f4D7xgutJ7MXOJhGzgw", music: "none", block: ["controversy"] },
  { name: "Science Sauce", url: "https://www.youtube.com/@Science_Sauce", subjects: ["biology"], channelId: "UCs0AJ4JeDn_5enc4jf47Bhw", music: "light" },
  { name: "Mr Exham Biology", url: "https://www.youtube.com/@MrExhambio", subjects: ["biology"], channelId: "UCHQBmp572eHNBhvO2xKXBLQ", music: "none" },
  { name: "2 Minute Classroom", url: "https://www.youtube.com/@2MC", subjects: ["biology"], channelId: "UC7izWi_rV1mN_Hg78PAJgoA", music: "light", block: ["lose weight"] },
  { name: "Teacher's Pet", url: "https://www.youtube.com/@teacherspet1898", subjects: ["biology"], channelId: "UCxby2oPQwaY2poKTg5pSRqA", music: "light" },
  { name: "BOGObiology", url: "https://www.youtube.com/@BOGObiology", subjects: ["biology"], channelId: "UCEKhq_68wMyD9VuJf3H513Q", music: "light" },
  { name: "Marlana Mucciarone", url: "https://www.youtube.com/@marlana.mucciarone", subjects: ["biology"], channelId: "UCoRaBvzKctXjCK_mlL1ibKQ", music: "none", block: ["forensic"] },
  { name: "HHMI BioInteractive", url: "https://www.youtube.com/@biointeractive", subjects: ["biology"], channelId: "UCdofq4hHbT3ZDzgYUqsDd1A", music: "light", block: ["skin colou?r"] },
  { name: "Journey to the Microcosmos", url: "https://www.youtube.com/@journeytomicro", subjects: ["biology"], channelId: "UCBbnbBWJtwsf0jLGUwX5Q3g", music: "heavy", block: ["blood", "nuclear test", "cancer"] },
  { name: "yourgenome", url: "https://www.youtube.com/@yourgenome", subjects: ["biology"], channelId: "UC3gKQ6jBqtv3-rK9F9Jmj2g", music: "light" },
  { name: "RicochetScience", url: "https://www.youtube.com/@Ricochetscience", subjects: ["biology"], channelId: "UC3qW8yyZHOvif8hR32CdCUw", music: "light", block: ["three-parent"] },
  { name: "MinuteEarth", url: "https://www.youtube.com/@MinuteEarth", subjects: ["biology"], channelId: "UCeiYXex_fwgYDonaTcSIk6w", music: "light", block: ["babies", "partner", "sibling", "mules", "trip", "repopulate", "monogam\\w*", "hyena", "boys than girls"] },
  { name: "Bizarre Beasts", url: "https://www.youtube.com/@BizarreBeasts", subjects: ["biology"], channelId: "UC9Lp_AA5M2cMGrlvnnIns-g", music: "light", block: ["extinction machine"] },
  { name: "GoTutor Math", url: "https://www.youtube.com/@gotutormaths", subjects: ["algebra"], channelId: "UC-56qlsWxLA2LyqgjyVELCA", music: "light" },
  { name: "Angie Teaches Math", url: "https://www.youtube.com/@AngieTeachesMath", subjects: ["algebra"], channelId: "UCreXTGeeXzZawOuVQaLA-sA", music: "none" },
  { name: "Jeremy LeCornu", url: "https://www.youtube.com/@jeremylecornu", subjects: ["biology"], channelId: "UC-KN8Dd7ZFRdN1CBz7fKvHA", music: "none" },
  { name: "By: Rachel Taylor", url: "https://www.youtube.com/@ByRachelTaylor", subjects: ["biology"], channelId: "UCfgtss7nqHbKvk2JuCjgdqQ", music: "light" },
];

// Title words that hide a video from every channel (lower case regex fragments, matched from a word start).
export const BLOCK = [
  // reproduction, sex and relationships (genetics words like "sex-linked" and "sex chromosome" stay allowed)
  'sex(?!\\s*-?\\s*linked|\\s+chromosome)\\w*', 'reproductive', 'human reproduction', 'puberty', 'menstrua\\w*', 'contracept\\w*', 'birth control',
  'condom\\w*', 'pregnan\\w*', 'abortion\\w*', 'ivf', 'in vitro', 'infertil\\w*', 'fetus\\w*', 'fetal', 'foetus\\w*', 'embryonic stem',
  'childbirth', 'gives? birth', 'giving birth', 'birth', 'gonad\\w*', 'genital\\w*', 'penis\\w*', 'vagin\\w*', 'vulva', 'testic\\w*', 'testes',
  'ovar\\w*', 'orgasm\\w*', 'masturbat\\w*', 'porn\\w*', 'kink\\w*', 'consent', 'virgin\\w*', 'mating', 'romance', 'romantic', 'valentine\\w*',
  'crush', 'dating app', 'gender\\w*', 'transgender\\w*', 'lgbt\\w*', 'homosexual\\w*', 'gay', 'orientation', 'stds?', 'stis?', 'hiv',
  // drugs, alcohol, gambling, money
  'drugs?', 'alcohol\\w*', 'drunk\\w*', 'drink\\w*', 'beer', 'wine', 'vap(?:e|es|ing)', 'smok\\w*', 'cigarette\\w*', 'tobacco', 'nicotine',
  'weed', 'marijuana', 'cannabis', 'heroin', 'cocaine', 'meth', 'lsd', 'opioid\\w*', 'addict\\w*', 'hallucinogen\\w*', 'overdos\\w*', 'kombucha',
  'gambl\\w*', 'poker', 'casino\\w*', 'roulette', 'lotter\\w*', 'bets?', 'betting', 'stocks?', 'short selling', 'trading', 'invest\\w*', 'crypto\\w*', 'bitcoin',
  // violence, death, horror, gore
  'murder\\w*', 'kill\\w*', 'wars?', 'genocide', 'holocaust', 'nazi\\w*', 'slave\\w*', 'guns?', 'shoot\\w*', 'gore', 'gory', 'horror\\w*', 'horrif\\w*',
  'creep\\w*', 'zombie\\w*', 'scary', 'deadl\\w*', 'death\\w*', 'dead', 'die', 'dies', 'dying', 'suicid\\w*', 'self-harm', 'dissect\\w*', 'surgery', 'surgical',
  'autops\\w*', 'corpse\\w*', 'brain-eating', 'eat their', 'plague', 'disaster\\w*', 'fight\\w*', 'punch\\w*', 'kick\\w*',
  // religion, holidays and politics (his brother decides these himself)
  'god', 'gods', 'allah', 'islam\\w*', 'muslim\\w*', 'quran', 'koran', 'muhammad', 'jesus', 'christ\\w*', 'bible\\w*', 'religio\\w*', 'church\\w*',
  'atheis\\w*', 'creation\\w*', 'intelligent design', 'faith', 'pray\\w*', 'halloween', 'easter', 'thanksgiving', 'hanukkah', 'diwali',
  'trump', 'biden', 'election\\w*', 'politic\\w*', 'government', 'tariff\\w*', 'communis\\w*', 'capitalis\\w*',
  // human origins (a family-values choice; general evolution and natural selection stay allowed)
  'human evolution', 'human origins?', 'origins? of humans?', 'hominins?', 'neander\\w*', 'human ancestors?', 'lucy', 'abiogenesis', 'origin of life',
  // mental health topics (for a grown-up conversation, not a homework video)
  'depress\\w*', 'anxiety', 'stress\\w*', 'mental health', 'psychiatr\\w*', 'psycholog\\w*', 'free will',
  // entertainment, music, off-topic, clickbait
  'songs?', 'rap', 'raps', 'lyrics?', 'music\\w*', 'lo-fi', 'lofi', 'jazz', 'piano', 'guitar\\w*', 'parod\\w*', 'prank\\w*', 'blooper\\w*', 'outtakes?',
  'vlogs?', 'face reveal', 'unbox\\w*', 'giveaway\\w*', 'live q&a', 'livestream\\w*', 'minecraft', 'fortnite', 'roblox', 'gaming', 'game show', 'jeopardy',
  'trivia', 'riddles?', 'stump\\w*', 'most people can.?t', 'can you solve', 'anime', 'manga', 'memes?', 'reacts?', 'reaction video', 'challenge',
  'idiot\\w*', 'stupid', 'swear\\w*', 'fails?', 'embarrass\\w*', 'membership', 'free trial', 'pre-order', 'kickstarter', 'sponsor\\w*',
  'artificial intelligence', 'poop\\w*', 'butts?', 'fart\\w*',
  // too young for him, or not in English
  'kindergarten', '1st grade', '2nd grade', '3rd grade', '4th grade', 'grade [1-4]', 'español', 'espanol', 'spanish', 'subtítulos', 'en español',
];
