// Motivation the tutor may share (owner request 2026-10-05: inspiration from the Qur'an and the Sunnah when he is down).
// The tutor may quote ONLY these, and only by writing a tag like [quote:q94-5]; the app then shows the exact text below.
// The model never writes Qur'an or hadith text itself.
//
// Built by a script, never typed by hand. Every string is copied verbatim from its source:
// - Qur'an Arabic: Tanzil Quran Text (Uthmani, Version 1.1), tanzil.net, downloaded with the download form's default options (pause
//   marks, sajdah signs, superscript alefs and tatweel ON). Byte-for-byte as Tanzil has it (Tanzil's text is not NFC; compare with NFC
//   on both sides). CC BY 3.0, "changing it is not allowed"; the app credits Tanzil with a link wherever a verse is shown.
//   Excerpts are whole words. 96:1 is shown without the Basmala that the Tanzil file puts at the start of each surah's first verse.
//   Most excerpts are cut at the verse's own pause marks; 58:11 starts mid-verse at the clause "Allah will raise…" (the reviewers
//   noted it; kept). Shown in Scheherazade New (SIL, OFL, unmodified).
// - Qur'an English: Saheeh International (tanzil.net en.sahih), verbatim, including its brackets and punctuation.
// - Hadith English: the published translations as shown on sunnah.com (Bukhari: Muhsin Khan; Muslim: Abdul Hamid Siddiqui),
//   verbatim, checked against two separate copies of sunnah.com's text. lead = the narrator line exactly as published.
//
// 2026-10-05: two independent reviewers checked every entry. The owner chose the Tanzil text and the published hadith English,
// left out Ibn Majah 224, Muslim 1631, al-Hakim 7846 ("five before five"), 13:11 and 3:139, and approved the rest for use.
// Don't edit these texts by hand. To change the list, ask the owner first.

export const approved = true;

export default [
  {
    "id": "q94-5",
    "kind": "quran",
    "ref": "Qur'an 94:5–6",
    "surah": "Ash-Sharh",
    "ar": [
      "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
      "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا"
    ],
    "en": [
      "For indeed, with hardship [will be] ease.",
      "Indeed, with hardship [will be] ease."
    ],
    "part": false
  },
  {
    "id": "q2-286",
    "kind": "quran",
    "ref": "Qur'an 2:286",
    "surah": "Al-Baqarah",
    "ar": "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ",
    "en": "Allah does not charge a soul except [with that within] its capacity.",
    "part": true
  },
  {
    "id": "q20-114",
    "kind": "quran",
    "ref": "Qur'an 20:114",
    "surah": "Taha",
    "ar": "وَقُل رَّبِّ زِدْنِى عِلْمًا",
    "en": "and say, \"My Lord, increase me in knowledge.\"",
    "part": true
  },
  {
    "id": "q39-9",
    "kind": "quran",
    "ref": "Qur'an 39:9",
    "surah": "Az-Zumar",
    "ar": "قُلْ هَلْ يَسْتَوِى ٱلَّذِينَ يَعْلَمُونَ وَٱلَّذِينَ لَا يَعْلَمُونَ ۗ",
    "en": "Say, \"Are those who know equal to those who do not know?\"",
    "part": true
  },
  {
    "id": "q58-11",
    "kind": "quran",
    "ref": "Qur'an 58:11",
    "surah": "Al-Mujadila",
    "ar": "يَرْفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ مِنكُمْ وَٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ دَرَجَـٰتٍ ۚ",
    "en": "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
    "part": true
  },
  {
    "id": "q96-1",
    "kind": "quran",
    "ref": "Qur'an 96:1",
    "surah": "Al-'Alaq",
    "ar": "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
    "en": "Recite in the name of your Lord who created -",
    "part": false
  },
  {
    "id": "q53-39",
    "kind": "quran",
    "ref": "Qur'an 53:39",
    "surah": "An-Najm",
    "ar": "وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ",
    "en": "And that there is not for man except that [good] for which he strives",
    "part": false
  },
  {
    "id": "q29-69",
    "kind": "quran",
    "ref": "Qur'an 29:69",
    "surah": "Al-'Ankabut",
    "ar": "وَٱلَّذِينَ جَـٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلْمُحْسِنِينَ",
    "en": "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.",
    "part": false
  },
  {
    "id": "q2-153",
    "kind": "quran",
    "ref": "Qur'an 2:153",
    "surah": "Al-Baqarah",
    "ar": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "en": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    "part": false
  },
  {
    "id": "q65-3",
    "kind": "quran",
    "ref": "Qur'an 65:3",
    "surah": "At-Talaq",
    "ar": "وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ ۚ",
    "en": "And whoever relies upon Allah - then He is sufficient for him.",
    "part": true
  },
  {
    "id": "h-path",
    "kind": "hadith",
    "ref": "Sahih Muslim 2699a",
    "lead": "Abu Huraira reported Allah's Messenger (ﷺ) as saying:",
    "en": "he who treads the path in search of knowledge, Allah would make that path easy, leading to Paradise for him",
    "part": true,
    "translator": "Abdul Hamid Siddiqui, sunnah.com",
    "check": "Abu Hurayrah; one clause of a longer sentence in a longer hadith."
  },
  {
    "id": "h-strong",
    "kind": "hadith",
    "ref": "Sahih Muslim 2664",
    "lead": "Abu Huraira reported Allah's Messenger (ﷺ) as saying:",
    "en": "A strong believer is better and is more lovable to Allah than a weak believer, and there is good in everyone, (but) cherish that which gives you benefit (in the Hereafter) and seek help from Allah and do not lose heart",
    "part": true,
    "translator": "Abdul Hamid Siddiqui, sunnah.com",
    "check": "Abu Hurayrah; the first part of the hadith (the part about saying \"if only\" is left out)."
  },
  {
    "id": "h-consistent",
    "kind": "hadith",
    "ref": "Sahih al-Bukhari 6464",
    "lead": "Narrated `Aisha: Allah's Messenger (ﷺ) said,",
    "en": "Do good deeds properly, sincerely and moderately and know that your deeds will not make you enter Paradise, and that the most beloved deed to Allah is the most regular and constant even if it were little.",
    "part": false,
    "translator": "Muhsin Khan, sunnah.com",
    "check": "ʿĀʾishah; the whole saying."
  },
  {
    "id": "h-easy",
    "kind": "hadith",
    "ref": "Sahih al-Bukhari 39",
    "lead": "Narrated Abu Huraira: The Prophet (ﷺ) said,",
    "en": "Religion is very easy and whoever overburdens himself in his religion will not be able to continue in that way. So you should not be extremists, but try to be near to perfection and receive the good tidings that you will be rewarded; and gain strength by worshipping in the mornings, the afternoons, and during the last hours of the nights.",
    "part": false,
    "translator": "Muhsin Khan, sunnah.com",
    "check": "Abu Hurayrah; the whole saying (the translator's note after it is left out)."
  }
];
