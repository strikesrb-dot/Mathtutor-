// Motivation the tutor may share (owner request 2026-10-05: inspiration from the Qur'an and the Sunnah when he is down).
// The tutor may quote ONLY these, and only by writing a tag like [quote:q94-5]; the app then shows the exact text below.
// The model never writes Qur'an or hadith text itself.
// Qur'an: Arabic is copied from Repo-1 site/data/quran.json (Tanzil Uthmani, NFC); the English is that file's translation, also copied
// as-is (where only part of a long verse is used, the part is cut at the verse's own pause mark, and `part` is true).
// Source notes, not fixed: 20:114's translation has no closing quote mark in the file; 2:286's has an opening quote with no close.
// Hadith: the English is Claude's wording of the meaning; each has a `check` note. NOT LIVE until the owner checks every entry and sets
// approved: true (until then the tutor encourages him in plain words and quotes nothing).

export const approved = false;

export default [
  {
    "id": "q94-5",
    "kind": "quran",
    "ref": "Qur'an 94:5–6",
    "surah": "Ash-Sharh",
    "ar": [
      "فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا",
      "إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا"
    ],
    "en": [
      "For indeed, with hardship [will be] ease",
      "Indeed, with hardship [will be] ease"
    ],
    "part": false
  },
  {
    "id": "q2-286",
    "kind": "quran",
    "ref": "Qur'an 2:286",
    "surah": "Al-Baqarah",
    "ar": "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ",
    "en": "Allah does not charge a soul except [with that within] its capacity.",
    "part": true
  },
  {
    "id": "q20-114",
    "kind": "quran",
    "ref": "Qur'an 20:114",
    "surah": "Taha",
    "ar": "وَقُل رَّبِّ زِدۡنِي عِلۡمٗا",
    "en": "say, \"My Lord, increase me in knowledge",
    "part": true
  },
  {
    "id": "q39-9",
    "kind": "quran",
    "ref": "Qur'an 39:9",
    "surah": "Az-Zumar",
    "ar": "قُلۡ هَلۡ يَسۡتَوِي ٱلَّذِينَ يَعۡلَمُونَ وَٱلَّذِينَ لَا يَعۡلَمُونَۗ",
    "en": "Say, \"Are those who know equal to those who do not know?\"",
    "part": true
  },
  {
    "id": "q58-11",
    "kind": "quran",
    "ref": "Qur'an 58:11",
    "surah": "Al-Mujadila",
    "ar": "يَرۡفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ مِنكُمۡ وَٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ دَرَجَٰتٖۚ",
    "en": "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
    "part": true
  },
  {
    "id": "q96-1",
    "kind": "quran",
    "ref": "Qur'an 96:1",
    "surah": "Al-'Alaq",
    "ar": "ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ",
    "en": "Recite in the name of your Lord who created",
    "part": false
  },
  {
    "id": "q13-11",
    "kind": "quran",
    "ref": "Qur'an 13:11",
    "surah": "Ar-Ra'd",
    "ar": "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡۗ",
    "en": "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    "part": true
  },
  {
    "id": "q53-39",
    "kind": "quran",
    "ref": "Qur'an 53:39",
    "surah": "An-Najm",
    "ar": "وَأَن لَّيۡسَ لِلۡإِنسَٰنِ إِلَّا مَا سَعَىٰ",
    "en": "And that there is not for man except that [good] for which he strives",
    "part": false
  },
  {
    "id": "q3-139",
    "kind": "quran",
    "ref": "Qur'an 3:139",
    "surah": "Ali 'Imran",
    "ar": "وَلَا تَهِنُواْ وَلَا تَحۡزَنُواْ وَأَنتُمُ ٱلۡأَعۡلَوۡنَ إِن كُنتُم مُّؤۡمِنِينَ",
    "en": "So do not weaken and do not grieve, and you will be superior if you are [true] believers",
    "part": false
  },
  {
    "id": "q29-69",
    "kind": "quran",
    "ref": "Qur'an 29:69",
    "surah": "Al-'Ankabut",
    "ar": "وَٱلَّذِينَ جَٰهَدُواْ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَاۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلۡمُحۡسِنِينَ",
    "en": "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good",
    "part": false
  },
  {
    "id": "q2-153",
    "kind": "quran",
    "ref": "Qur'an 2:153",
    "surah": "Al-Baqarah",
    "ar": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "en": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient",
    "part": false
  },
  {
    "id": "q65-3",
    "kind": "quran",
    "ref": "Qur'an 65:3",
    "surah": "At-Talaq",
    "ar": "وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُۥٓۚ",
    "en": "And whoever relies upon Allah - then He is sufficient for him.",
    "part": true
  },
  {
    "id": "h-path",
    "kind": "hadith",
    "ref": "Sahih Muslim 2699",
    "en": "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.",
    "check": "my wording of the meaning"
  },
  {
    "id": "h-strong",
    "kind": "hadith",
    "ref": "Sahih Muslim 2664",
    "en": "The strong believer is better and more beloved to Allah than the weak believer, and there is good in both. Be eager for what benefits you, seek help from Allah, and do not give up.",
    "check": "my wording of the meaning"
  },
  {
    "id": "h-consistent",
    "kind": "hadith",
    "ref": "Sahih al-Bukhari 6464; Sahih Muslim 783",
    "en": "The deeds most beloved to Allah are the ones done consistently, even if they are small.",
    "check": "my wording of the meaning"
  },
  {
    "id": "h-easy",
    "kind": "hadith",
    "ref": "Sahih al-Bukhari 39",
    "en": "The religion is easy. Whoever makes it too hard on himself will be overcome. So aim for what is right, come as close as you can, and receive good news.",
    "check": "my wording of the meaning"
  },
  {
    "id": "h-three",
    "kind": "hadith",
    "ref": "Sahih Muslim 1631",
    "en": "When a person dies, his deeds come to an end except for three: ongoing charity, knowledge that benefits others, or a righteous child who prays for him.",
    "check": "my wording of the meaning"
  },
  {
    "id": "h-obligation",
    "kind": "hadith",
    "ref": "Sunan Ibn Majah 224",
    "en": "Seeking knowledge is an obligation upon every Muslim.",
    "check": "grading: graded sahih by al-Albani; some scholars weakened its chains — your call"
  },
  {
    "id": "h-five",
    "kind": "hadith",
    "ref": "al-Mustadrak of al-Hakim (graded sahih by al-Albani)",
    "en": "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before you are busy, and your life before your death.",
    "check": "I am not sure of the hadith number, so none is given — please check the reference"
  }
];
