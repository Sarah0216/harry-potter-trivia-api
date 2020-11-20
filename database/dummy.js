const questions = [
  {
    question:
      "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
    options: [
      "He transfigures into a shark",
      "He kisses a mermaid",
      "He performs a bubble-head charm",
      "He eats gillyweed",
    ],
    answer: "He eats gillyweed",
    img: "question1",
    point: 10,
  },
  {
    question: "What is the name of Fred and George’s joke shop?",
    options: [
      "Weasley Joke Emporium",
      "Fred & George’s Wonder Emporium",
      "Zonko’s Joke Shop",
      "Weasleys’ Wizard Wheezes",
    ],
    answer: "Weasleys’ Wizard Wheezes",
    img: "question2",
    point: 10,
  },
  {
    question: "Which of these is NOT one of the Unforgivable Curses",
    options: ["Cruciatus", "Imperius", "Avada Kedavra", "Sectumsempra"],
    answer: "Sectumsempra",
    img: "question3",
    point: 10,
  },
  {
    question: "Who played Lord Voldemort in the movies?",
    options: ["Gary Oldman", "Tom Hiddleston", "Jeremy Irons", "Ralph Fiennes"],
    answer: "Ralph Fiennes",
    img: "question4",
    point: 10,
  },
  {
    question: "Who guards the entrance to the Gryffindor common room?",
    options: [
      "The Grey Lady",
      "The Fat Friar",
      "The Bloody Baron",
      "The Fat Lady",
    ],
    answer: "The Fat Lady",
    img: "question5",
    point: 10,
  },
  {
    question: "Who is NOT a member of the Order of the Phoenix?",
    options: [
      "Mad-eye Moody",
      "Professor Snape",
      "Remus Lupin",
      "Cornelius Fudge",
    ],
    answer: "Cornelius Fudge",
    img: "question6",
    point: 10,
  },
  {
    question: "A wizard who cannot do magic is known as a:",
    options: ["Bleaker", "Duddle", "Wizont", "Squib"],
    answer: "Squib",
    img: "question7",
    point: 10,
  },
  {
    question: "What does the spell “Obliviate” do?",
    options: [
      "Destroys objects",
      "Sends someone to the nether realm",
      "Makes objects invisible",
      "Removes parts of someone’s memory",
    ],
    answer: "Removes parts of someone’s memory",
    img: "question8",
    point: 10,
  },
  {
    question: "Where does Hermione brew her first batch of Polyjuice Potion?",
    options: [
      "The Hogwarts Kitchen",
      "The Room of Requirement",
      "The Gryffindor Common Room",
      "Moaning Myrtle’s Bathroom",
    ],
    answer: "Moaning Myrtle’s Bathroom",
    img: "question9",
    point: 10,
  },
  {
    question:
      "What does one say to close the Marauder’s Map and make it blank again?",
    options: [
      "Nothing to See Here",
      "All Done",
      "Hello Professor",
      "Mischief Managed",
    ],
    answer: "Mischief Managed",
    img: "question10",
    point: 10,
  },
  {
    question:
      "The three kinds of balls used in Quidditch are Bludgers, Snitches, and…",
    options: ["Wiffles", "Boccis", "Foozles", "Quaffles"],
    answer: "Quaffles",
    img: "question11",
    point: 10,
  },
  {
    question:
      "Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets’?",
    options: ["Dumbledore", "Draco Malfoy", "The Dursleys", "Dobby"],
    answer: "Dobby",
    img: "question12",
    point: 10,
  },
  {
    question: "How many Weasley siblings are there?",
    options: ["5", "10", "3", "7"],
    answer: "7",
    img: "question13",
    point: 10,
  },
  {
    question:
      "Where do Harry and Ron eventually find the missing flying Ford Anglia?",
    options: [
      "At the Ministry of Magic",
      "In the Room of Requirement",
      "Outside the Dursleys House",
      "In the Forbidden Forest",
    ],
    answer: "In the Forbidden Forest",
    img: "question14",
    point: 10,
  },
  {
    question:
      "From what King’s Cross platform does the Hogwarts Express leave?",
    options: [
      "Eight and One-quarter",
      "Nine and Three-quarters",
      "Five and a Half",
      "Elevenquet",
    ],
    answer: "Elevenquet",
    img: "question15",
    point: 10,
  },
  {
    question: "What’s the name of Filch’s cat?",
    options: ["Ser Pounce", "Buttercup", "Jones", "Mrs. Norris"],
    answer: "Mrs. Norris",
    img: "question16",
    point: 10,
  },
  {
    question: "Which professor teaches flying lessons?",
    options: [
      "Professor Grubbly-Plank",
      "Sybill Trelawney",
      "Charity Burbage",
      "Madam Hooch",
    ],
    answer: "Madam Hooch",
    img: "question17",
    point: 10,
  },
  {
    question: "Which is NOT a form of currency in the wizarding world?",
    options: ["Sickles", "Knuts", "Galleons", "Doxies"],
    answer: "Doxies",
    img: "question18",
    point: 10,
  },
  {
    question: "What does Hermione use to defeat the Devil’s Snare plant?",
    options: ["Expelliarmus!", "Wind", "Reducto", "Lumos Solem"],
    answer: "Lumos Solem",
    img: "question19",
    point: 10,
  },
  {
    question: "Who has given Harry Potter the Invisibility cloak?",
    options: ["Mad-eye Moody", "Professor Snape", "Dobby", "Dumbledore"],
    answer: "Dumbledore",
    img: "question20",
    point: 10,
  },
  {
    question: "What is the model of the first broom Harry ever receives?",
    options: ["Cleansweep One", "Hoover", "Firebolt", "Nimbus 2000"],
    answer: "Nimbus 2000",
    img: "question21",
    point: 10,
  },
  {
    question: "What does Mrs. Weasley give Harry for Christmas every year?",
    options: [
      "Bertie Bott’s every flavour beans",
      "Chocolate frogs",
      "A fruit cake",
      "A new sweater",
    ],
    answer: "A new sweater",
    img: "question22",
    point: 10,
  },
  {
    question: "What are the names of Draco Malfoy’s two cronies?",
    options: [
      "Huggs and Pucey",
      "Flint and Boyle",
      "Pike and Zabini",
      "Crabbe and Goyle",
    ],
    answer: "Crabbe and Goyle",
    img: "question23",
    point: 10,
  },
  {
    question:
      "Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?",
    options: [
      "The Gryffindor Common Room",
      "Hagrid’s House",
      "The Shrieking Shack",
      "The Room of Requirement",
    ],
    answer: "The Room of Requirement",
    img: "question24",
    point: 10,
  },
  {
    question: "How do you summon a Patronus?",
    options: [
      "Patronia Paternus",
      "Expelliarmus Patronicha",
      "Accio Patronus",
      "Expecto Patronum",
    ],
    answer: "Expecto Patronum",
    img: "question25",
    point: 10,
  },
  {
    question: "What's the name of the dog guarding the Sorcerer’s Stone?",
    options: ["Padfoot", "Fang", "The Grim", "Fluffy"],
    answer: "Fluffy",
    img: "question26",
    point: 10,
  },
  {
    question:
      "In a Quidditch game, what type of ball is a Beater most likely to hit?",
    options: ["Nimbus", "Quaffle", "Snitch", "Bludger"],
    answer: "Bludger",
    img: "question",
    point: 10,
  },
  {
    question:
      "What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone?",
    options: ["Alohomora", "Expelliarmus", "Wingardium Leviosa", "Stupefy"],
    answer: "Stupefy",
    img: "question27",
    point: 10,
  },
  {
    question: "What kind of monster is released from the Chamber of Secrets?",
    options: ["Voldemort", "Acromantula", "Boggart", "Basilisk"],
    answer: "Basilisk",
    img: "question28",
    point: 10,
  },
  {
    question: "Who is the Heir of Slytherin?",
    options: ["Rubeus Hagrid", "Harry Potter", "Draco Malfoy", "Tom Riddle"],
    answer: "Tom Riddle",
    img: "question29",
    point: 10,
  },
  {
    question:
      "Sirius Black escapes on what kind of fantastic beast in the Prisoner of Azkaban?",
    options: ["Phoenix", "Dragon", "Unicorn", "Hippogriff"],
    answer: "Hippogriff",
    img: "question30",
    point: 10,
  },
  {
    question: "Who was Harry's love interest before Ginny Weasley?",
    options: [
      "Fleur Delacour",
      "Luna Lovegood",
      "Hermione Granger",
      "Cho Chang",
    ],
    answer: "Cho Chang",
    img: "question31",
    point: 10,
  },
  {
    question:
      "Which of these award-winning and celebrated British actors has NOT appeared in a Harry Potter movie?",
    options: ["Emma Thompson", "Alan Rickman", "Maggie Smith", "Judi Dench"],
    answer: "Judi Dench",
    img: "question32",
    point: 10,
  },
  {
    question:
      "Which Hogwarts teacher had to be re-cast after the actor playing this character died?",
    options: ["Hagrid", "Grubblyplank", "Flitwick", "Dumbledore"],
    answer: "Dumbledore",
    img: "question33",
    point: 10,
  },
  {
    question: "Which character was NOT an Animagus?",
    options: [
      "James Potter",
      "Peter Pettigrew",
      "Professor McGonagall",
      "Remus Lupin",
    ],
    answer: "Remus Lupin",
    img: "question34",
    point: 10,
  },
  {
    question:
      "Which composer was nominated for both Academy and Grammy awards for the music in the Harry Potter films?",
    options: [
      "Danny Elfman",
      "Michael Giacchino",
      "Andrew Lloyd Webber",
      "John Williams",
    ],
    answer: "John Williams",
    img: "question35",
    point: 10,
  },
  {
    question: "You can only see a Thestral if you…",
    options: [
      "Believe in the Deathly Hallows",
      "Bow to them",
      "Have seen death",
      "Wear special goggles",
    ],
    answer: "Wear special goggles",
    img: "question36",
    point: 10,
  },
  {
    question: "Who is the ghost of Gryffindor Tower?",
    options: ["Grey Lady", "Bloody Baron", "Fat Friar", "Sir Nicholas"],
    answer: "Sir Nicholas",
    img: "question37",
    point: 10,
  },
  {
    question:
      "What potion does Harry use to get Professor Slughorn to tell his secret?",
    options: ["Polyjuice", "Veritas Serum", "Amortentia", "Felix Felicis"],
    answer: "Felix Felicis",
    img: "question38",
    point: 10,
  },
  {
    question:
      "Which Weasley brother marries former Beauxbatons student Fleur Delacour?",
    options: ["Fred", "Percy", "Charlie", "Bill"],
    answer: "Bill",
    img: "question39",
    point: 10,
  },
  {
    question:
      "What's the last Horcrux that has to be destroyed in order for Voldemort to die?",
    options: ["Ravenclaw's Diadem", "Hufflepuff's Cup", "Harry", "Nagini"],
    answer: "Nagini",
    img: "question40",
    point: 10,
  },
  {
    question:
      "The Sorting Hat considers which two houses for Harry before ultimately choosing Gryffindor?",
    options: [
      "Gryffindor and Hufflepuff",
      "Gryffindor and Ravenclaw",
      "Ravenclaw and Hufflepuff",
      "Gryffindor and Slytherin",
    ],
    answer: "Gryffindor and Slytherin",
    img: "question41",
    point: 10,
  },
  {
    question: "Who teaches Harry how to cast a Patronus Charm?",
    options: [
      "Hermione Granger",
      "Albus Dumbledore",
      "Severus Snape",
      "Remus Lupin",
    ],
    answer: "Remus Lupin",
    img: "question42",
    point: 10,
  },
  {
    question:
      "Which other character could fulfill the prophecy described in Harry Potter and the Order of the Phoenix?",
    options: [
      "Ron Weasley",
      "Luna Lovegood",
      "Cho Chang",
      "Neville Longbottom",
    ],
    answer: "Neville Longbottom",
    img: "question43",
    point: 10,
  },
  {
    question:
      "Who is the Half-Blood Prince featured in the title of the sixth book?",
    options: [
      "Lord Voldemort",
      "Draco Malfoy",
      "Rubeus Hagrid",
      "Severus Snape",
    ],
    answer: "Severus Snape",
    img: "question44",
    point: 10,
  },
  {
    question:
      "How many pieces does Voldemort divide his soul into, including himself?",
    options: ["Seven", "Ten", "Three", "Eight"],
    answer: "Eight",
    img: "question45",
    point: 10,
  },
  {
    question: "Which spell is used to summon items, even from across the room?",
    options: ["Reparo", "Legilimens", "Alohomora", "Accio"],
    answer: "Accio",
    img: "question46",
    point: 10,
  },
  {
    question: "What is Dumbledore's pet phoenix named:",
    options: ["Fortescue", "Fenix", "Fauntleroy", "Fawkes"],
    answer: "Fawkes",
    img: "question47",
    point: 10,
  },
  {
    question: "Which of these characters has never been a Death Eater?",
    options: [
      "Peter Pettigrew",
      "Severus Snape",
      "Lucius Malfoy",
      "Horace Slughorn",
    ],
    answer: "Horace Slughorn",
    img: "question48",
    point: 10,
  },
  {
    question:
      "Which character is killed by the basilisk in Harry Potter and the Chamber of Secrets?",
    options: [
      "Ginny Weasley",
      "Nearly Headless Nick",
      "Colin Creevey",
      "Moaning Myrtle",
    ],
    answer: "Moaning Myrtle",
    img: "question49",
    point: 10,
  },
  {
    question:
      "Who is named Minister of Magic after the Battle of Hogwarts in Harry Potter and the Deathly Hallows?",
    options: [
      "Cornelius Fudge",
      "Rufus Scrimgeour",
      "Arthur Weasley",
      "Kingsley Shaklebolt",
    ],
    answer: "Kingsley Shaklebolt",
    img: "question50",
    point: 10,
  },
];

const wands = [
  {
    name: "Harry Potter",
    img: "harry-wand",
  },
  {
    name: "Draco Malfoy",
    img: "draco-wand",
  },
  {
    name: "Albus Dumbledore",
    img: "dumdbledore-wand",
  },
  {
    name: "Hermione Granger",
    img: "hermione-wand",
  },
  {
    name: "Luna Lovegood",
    img: "luna-wand",
  },
  {
    name: "Neville Longbottom",
    img: "neville-wand",
  },
  {
    name: "Ron Weasley",
    img: "ron-wand",
  },
  {
    name: "Sirius Black",
    img: "sirius-wand",
  },
  {
    name: "Severus Snape",
    img: "snape-wand",
  },
  {
    name: "Lord Voldemort",
    img: "voldemort-wand",
  },
];
