// En lista med rimuppsättningar
const rhymeSets = [
    ["bil", "fil", "mil", "pil", "deal",],
    ["deal", "veal", "seal", "heal"],
    ["hund", "stund", "grund", "blund"],
    ["katt", "hatt", "mat", "skatt"],
    ["banksy", "panties", "yankees", "fancy", "gang shit",],
    ["belucci", "gucci", "sushi", "butch i"],
    ["timmy turner", "tina turner", "burna", "hörna", "gröna", "börda", "störa", "störda", "hörda", "ödla", "höra", "böla", "göra", "mörda", "lördag", "röka", "röda", "köra", "vördnad", "björnar", "pölar",],
    ["instabil", "insta feed", "missa mitt", "insta bild", "skicka bild"],
    ["we paid", "replay", "email", "bredvid mig", "replaced", "briefcase", "v8", "mclaren speedtail", "detail", "retail", "female", "e-date", "i dig", "bli mig",],
    ["mbappe", "en tabbe", "straffet"],
    ["kranium", "akvarium", "solarium",],
    ["röst", "först", "störst", "höst", "bröst", "öst", "sös",],
    ["handpennig", "gunfäktning", "avfettning", "anteckning", "hans släkting", "målsättning", "konfetti",],
    ["face", "case", "chace", "ace", "race", "taste", "base",],
    ["tiktok", "ziplock", "rick ross", "hiphop", "big cock", "hit opps", "wim hoff", "flip flop", "lipton", "tip top", "hickhock", "big toy", "big boy", "rimfrost"],
    ["cv", "ep", "tt", "gg", "tv", "med mig", "cc", "wc", "bred-vid", "pp", "dp", "cctv", "tn", "brevet",],
    ["zastava", "kassarna", "danskarna", "maskhara", "handskarna", "baxarna", "stackarna", "backarna", "dansarna"],
    ["zasta", "handskar", "dansar", "pansar", "anza", "mazda", "transa", "halsa", "kassa", "vassa", "aska", "kassar", "askar", "alaska", "maskar", "förbaskad", "lasta", "fasta", "kasta", "fasta",],
    ["råtta", "åtta", "krocka", "bromsa", "kontra", "nokia", "hoppa", "blocka", "stoppa", "doppa", "glockar", "chockar", "kroppar", "tokkar", "avbocka", "mokka",],
    ["drabba", "krabba", "tabbar", "tagga", "slagga", "lagga", "bagga", "habbar", "babblar", "babbar", "grabbar", "ingvar kamprad", "kampar", "bankar", "tankar", "appar", "klappa", "tanka", "glappa", "haffla", "fackla", "fucked up", "fatta", "sakta", "backa", "packa", "packad", "locked up", "klampa", "bamba", "varva", "skarva", "garva", "larva",],
    ["fram", "namn", "milligram", "lieman", "vietnam", "lamm", "sann", "ban", "kan", "tant", "hand", "bland", "fan", "man", "gun",],
    ["flow", "goal", "show", "wow", "dope", "rope", "coke", "choke", "hoe", "bro", "blow", "throw", "slow", "toe", "glow", "no",],
    ["pojk", "toy", "hoy", "boy", "oboy", "voi", "van nisteroy"],
    ["rocks", "glocks", "loss", "box", "opps", "tokks", "mobs",],
    ["rock", "glock", "tok", "block", "stop", "opp", "nåt", "bort", "snobb", "hob", "jurgen klopp", "hopp", "mob", "kropp", "krock", "dopp", "chock", "stock", "top",],
    ["hatiska", "farliga", "vanliga", "aningar", "varningar", "barnsliga", "galningar", "tagningar", "obehagliga",],
    ["dräpt", "fränt", "kräk", "färd", "act", "läkt", "fact", "ägd", "fag", "lag", "bag", "gag", "jäg", "väg", ],
    ["snack", "knack", "japp", "flax", "lax", "inatt", "trakt", "makt", "sagt", "fucked", "takt", "agg", "etapp", "mag", "kebab" ],
    ["intresserad", "sofistikerad", "motiverad", "fullmunderad", "instigera", "investigera", "isolerad",],
    ["pilot", "fri fot", "pistol", "i skor", "miljon", "biljon", "dog", "hot", "ord", "mord", "bro", "metod", "aktion", "skog", "fog", "fort", "ort", "kort", "stort", "bror", "skor", "tror", "mor", "tom", "boom",],
    ["rockkoncert", "glockkonstnär", "volontär", "och dem där", "stockholm här", "volontär", "stratosfär", "atmosfär",],
    ["top shottas", "bollsportar", "skott lossas", "08", "komplottar", "skott kostar", "cock blocka", ], 
    ["mask", "mast", "hast", "last", "kast", "rast", "fast", "rask", "pass", "ask", "plast", "pass", "vass", "kass",],
    ["testa", "vespa", "festar", "kepsar", "älska", "messa", "bästa", "lespa", "väska"], 
    ["hämnas", "växa", "läxas", "texas", "släckas", "läggdags", "sängdags", "s-klass", "next up", "stressa", "exa", "väckas", "läckas", "reccas", "mekkas", "täckas",], 
    ["väggar", "gegga", "lägga", "bädda",],
    ["förändring", "gällning", "vedergällning", "ending", "semin", "pendig", "sending", "envy", "denim", "henny", "stämning", "sinnesstämning", "spänning", "henny", "ändring", "kenny", "heli", "teli", "celli",], 
    ["tejpad", "rapead", "baitad", "make up", "fakead", "rated", "sheytan", "säga", "väja", "heja", "player", "marbella",],
    ["nonsens", "toppless", "content", "condense", "ronden", "bomben", "som den", "ronden", "sovjet", "hoppet", "loppet", "kroppen", "tokken", "glocken", "oppen", "toppen", "snoppen", "koppel", "loppet", "offret", ],
    ["vila", "vilda", "dealer", "fila", "sida", "bilar", "titlar", "driva", "överdriva", "linan", "pilar", ],
    ["inter", "vinter", "sprinter", "hinter", "inte", "vittne", "sikter", "dikter", "vikter", "dricker", "risker", "bitter", "inget", "tippen", "differ", "hissen", "listen", "dissen", "missen", "vilsen", "killsen", "kompromisser", "vippen", "vilken",],
    ["artiklar", "partiklar", "utskickad", "titta", "blickar", "stick up", "pick up", "ficka", "flicka", "miccar", "tickar", "kikkla", "slicka", "dricka", "vicka", "nicka", "pricka", "pickan", "sikta", "stick han", "titlar", "vittna", "fitta", "titta", "sitta", "hitta", "gitta",],
    ["nätverk", "bergserk", "tap that", "clap back", "back stab", "vägspärr", "hashtag", "hatchback", "flashback", "snapchat", "affärsvärld", "rr", "berber", "färdväg", "världfärd", ], 
    ["problemsökare", "mopedförare", "medgörare",],
    ["december", "händer", "vänder", "vänner", "vänster", "länder", "hämnden",],
    ["hänt nåt", "en opp", "bränts bort", "eskort", "längdhopp", "tänk om", "en gång", "vänd om", "ädnå", "lendo", "sen gå"],
    ["trapen", "magen", "kräsen", "väsen", "läser", "jäser", "gräset", "lägen", "äger", "läder", "kläder", "sväver", "städer", "affären", "nätet", "säten", "äten", "mäter", ],
    ["klubbar", "klubba", "shlurrar", "blurrad", "bullar", "rullar", "nulla", "tullar", "fulla", "knulla", "pulla", "undra", "blunda", "hundar", "pundar", "gungar", "avrunda", "kungar", "unga", "lugna", "lunga", "tunga", "rumpa", "sumpa", "sjunga", "annorlunda", "punka", "bluffa", "puffra"],
    ["golf r", "folkkär", "opp här", "kropp här", "no gang",],
    ["hemvist", "permis", "exentrisk", "självrisk", "självisk", "exit", "sexigt", "50", "empty", "envy", "fendi", "send it", "serbisk", "belgisk", "facelift", "spend it", "bend it",],
    ["fup", "mupp", "trupp", "sshhh", "upp", "grupp",], 
    ["långsikt", "kompis", "molnigt", "dåtid", "åsikt", "blåsigt", "årstid", "comviq", "no shit", "oh shit", "s-tronic", "konstigt", "somrigt", "homies", "lonly", "only", "brodie", "holy", "goalie", "roly", "dålig", "hål i", "tony", ],
    ["koncept", "recept", "reset", "step",],
    ["dubai", "haj", "maj", "kai", "skraj", "lie", "vibe", "five", "night", "tonight", "fight", "right", "ajt", "nice", "vice", "sign", "signs", "line", "versaille", "tight", "on site", "time", "kuyt", "like", "hike", "bike", "strike", "megic mike", "flight", "try", "slice", "fly", "dry", "bye", "light", "pride", "madeline clyne", "eye", "spy", "die", "fried", "paj",],
    ["attribut", "debut", "attityd", "altitud", "sändebud", "havsdjupt",], 
    ["tiz", "please", "is", "ris", "keeys", "streets", "bleed", "bredvid", "hiv", "liv", "skriv", "kliv", "flik", "league", "feed", "defeat", "feet", "beat", "paranoid", "eat", "sleep", "repeat", "indeed", "krig", "rik",],
    ["skojare", "bloggare", "avkodare", "frågade", "skidåkare", "tokarev", "chocka dig", "stoppa mig", "blocka dig", "dockade", "lockade", "doppa dig", "kåkåade", "åklagare", "åtalade", "vålnader",],
    ["drift", "shift", "dubbla skift", "skift", "vift", "lift", "dip", "flip", "vitt", "dricks", "clip", "district", "slick", "dick", "blick", "trick", "mic", "trip", "gift", "ship", "shit", "tip", "tips", "tits", "sits", "list", "sis", "lips", "kicks", "bits", "rip", "drip", "blip",],
    ["konsekvens", "kompetens", "johnells", "tog ett L", "annabelle", "fucking hell", "ikväll", "cell", "hotell", "decibel", "räls", "äldst", "jingle bells",],

    

    
    







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