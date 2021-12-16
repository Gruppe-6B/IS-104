//Statisk liste over eksisterende brukere som er synlige i applikasjonen
const brukere = [
    {
        epost: "per@uia.no",
        brukernavn: "Per",
        passord: "hunter2",
        navn: "Per Nilsen",
        bursdag: "1999-04-10",
        sted: "Grimstad",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interesser: ["Gaming", "Fisking", "Sykling"],
        kjønn: "mann",
    },
    {
        epost: "olav@protonmail.com",
        brukernavn: "Olav3",
        passord: "td9ip25ir1t1l481o5opkn2s",
        navn: "Olav",
        bursdag: "2001-08-02",
        sted: "Kristiansand",
        bio: "Jeg liker matlaging og friluftsliv \n \n Har lyst til å lære å programmere",
        interesser: ["Gaming", "Matlaging", "Sjøsport", "Alpint", "Langrenn"],
        kjønn: "annet",
    },
    {
        epost: "karii@gmail.lul",
        brukernavn: "Kari",
        passord: "passord!",
        navn: "Kari",
        bursdag: "2003-11-12",
        sted: "Søgne",
        bio: "Litt tekst her 22",
        interesser: ["Hund", "Katt", "Golf", "Langrenn"],
        kjønn: "kvinne",
    },
];

//Liste over mulige interesser og medfølgende ikon
const interesser = [
    ["Fotball", "fa-futbol"],
    ["Gaming", "fa-headset"],
    ["Teknologi", "fa-laptop-code"],
    ["Matlaging", "fa-drumstick-bite"],
    ["Friluft", "fa-hiking"],
    ["Fisking", "fa-fish"],
    ["Hund", "fa-dog"],
    ["Katt", "fa-cat"],
    ["Sjakk", "fa-chess"],
    ["Brettspill", "fa-dice"],
    ["DnD", "fa-dice-d20"],
    ["Sjøsport", "fa-water"],
    ["Alpint", "fa-skiing"],
    ["Langrenn", "fa-skiing-nordic"],
    ["Sykling", "fa-biking"],
    ["Løping", "fa-running"],
    ["Golf", "fa-golf-ball"],
    ["Bowling", "fa-bowling-ball"],

];