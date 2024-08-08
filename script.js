// En lista med rimuppsättningar
const rhymeSets = [
    ["bil", "fil", "mil", "pil", "deal",],
    ["deal", "veal", "seal", "heal"],
    ["hund", "stund", "grund", "blund"],
    ["katt", "hatt", "mat", "skatt"],
    ["banksy", "panties", "yankees", "fancy", "gang shit",],
    ["belucci", "gucci", "sushi", "butch i"],
    ["timmy turner", "tina turner", "burna", "hörna", "gröna", "börda", "störa", "störda", "hörda", "ödla", "höra", "böla", "göra", "mörda", "lördag"],
    ["instabil", "insta feed", "missa mitt", "insta bild", "skicka bild"],
    ["we paid", "replay", "email", "bredvid mig", "replaced", "briefcase", "v8", "mclaren speedtail", "detail", "retail", "female", "e-date", "i dig", "bli mig",],
    ["mbappe", "en tabbe",],
    ["kranium", "akvarium", "solarium",],
    ["röst", "först", "störst", "höst", "bröst", "öst", "sös",],
    ["handpennig", "gunfäktning", "avfettning", "anteckning", "hans släkting", "målsättning", "konfetti",],
    ["stämning", "spänning", "henny", "ändring", "kenny",],
    ["face", "case", "chace", "ace", "race", "taste", "base",],
    ["tiktok", "ziplock", "rick ross", "hiphop", "big cock", "hit opps", "wim hoff", "flip flop", "lipton", "tip top",],
    ["cv", "ep", "tt", "gg", "tv", "med mig", "cc", "wc", "bredvid", "pp", "dp", "cctv", "tn",],
    ["zastava", "kassarna", "danskarna", "maskhara", "handskarna", "baxarna", "stackarna", "backarna",],
    ["råtta", "åtta", "krocka", "bromsa", "kontra", "nokia", "hoppa", "blocka", "stoppa", "doppa", "glockar", "chockar", "kroppar", "tokkar", "avbocka", "mokka",],
    ["drabba", "krabba", "tabbar", "tagga", "slagga", "lagga", "bagga", "habbar", "babblar", "babbar", "grabbar",],

    // Lägg till fler rimuppsättningar här
];

function findRhymes() {
    const wordInput = document.getElementById('wordInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Rensa tidigare resultat

    let rhymes = [];

    for (const set of rhymeSets) {
        if (set.includes(wordInput)) {
            rhymes = set.filter(word => word !== wordInput);
            break;
        }
    }

    if (rhymes.length > 0) {
        resultsDiv.innerHTML = '<h3>Rim för "' + wordInput + '":</h3><ul>' + rhymes.map(rhyme => '<li>' + rhyme + '</li>').join('') + '</ul>';
    } else {
        resultsDiv.innerHTML = '<p>Inga rim hittades för "' + wordInput + '".</p>';
    }
}