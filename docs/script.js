//Statisk liste over eksisterende brukere som er synlige i applikasjonen
const brukere = [
    {
        epost: "test@uia.no",
        brukernavn: "tester",
        passord: "1234",
        navn: "Per",
        bursdag: "1999-04-10",
        sted: "Kristiansand",
        bio: "Litt tekst her",
        interesser: ["Gaming", "Fisking", "Sykling"],
        kjønn: "mann",
    },
    {
        epost: "test2@uia.no",
        brukernavn: "Olav",
        passord: "1234",
        navn: "Olav",
        bursdag: "2001-08-02",
        sted: "Kristiansand",
        bio: "Litt tekst her 22",
        interesser: ["Gaming", "Matlaging", "Sjøsport", "Langrenn"],
        kjønn: "annet",
    },
    {
        epost: "test2@uia.no",
        brukernavn: "Kari",
        passord: "1234",
        navn: "Kari",
        bursdag: "2003-11-12",
        sted: "Kristiansand",
        bio: "Litt tekst her 22",
        interesser: ["Gaming", "Matlaging", "Sjøsport", "Langrenn"],
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