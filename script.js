// En lista med rimuppsättningar
const rhymeSets = [
    ["bil", "fil", "mil", "pil", "deal",],
    ["deal", "veal", "seal", "heal"],
    ["hund", "stund", "grund", "blund"],
    ["katt", "hatt", "mat", "skatt"],
    ["boll", "koll", "colt", "tolk", "usain bolt", "våld", "dolk", "pickadoll", "håll", "roll", "troll", "kolv", "stolt",],
    ["banksy", "panties", "yankees", "fancy", "gang shit",],
    ["belucci", "gucci", "sushi", "butch i"],
    ["timmy turner", "tina turner", "burna", "hörna", "gröna", "börda", "störa", "störda", "hörda", "ödla", "höra", "böla", "göra", "mörda", "lördag", "röka", "röda", "köra", "vördnad", "björnar", "pölar",],
    ["instabil", "insta feed", "missa mitt", "insta bild", "skicka bild"],
    ["we paid", "replay", "email", "bredvid mig", "replaced", "briefcase", "v8", "mclaren speedtail", "detail", "retail", "female", "e-date", "i dig", "bli mig",],
    ["kranium", "akvarium", "solarium",],
    ["röst", "först", "störst", "höst", "bröst", "öst", "sös",],
    ["handpennig", "gunfäktning", "avfettning", "anteckning", "hans släkting", "målsättning", "konfetti",],
    ["face", "case", "chace", "ace", "race", "taste", "base",],
    ["tiktok", "ziplock", "rick ross", "hiphop", "big cock", "hit opps", "wim hoff", "flip flop", "lipton", "tip top", "hickhock", "big toy", "big boy", "rimfrost"],
    ["cv", "ep", "tt", "gg", "tv", "med mig", "cc", "wc", "bred-vid", "pp", "dp", "cctv", "tn", "brevet",],
    ["zastava", "kassarna", "danskarna", "maskhara", "handskarna", "baxarna", "stackarna", "backarna", "dansarna"],
    ["zasta", "handskar", "dansar", "pansar", "anza", "mazda", "transa", "halsa", "kassa", "vassa", "aska", "kassar", "askar", "alaska", "maskar", "förbaskad", "lasta", "fasta", "kasta", "fasta",],
    ["råtta", "åtta", "krocka", "bromsa", "kontra", "nokia", "hoppa", "blocka", "stoppa", "doppa", "glockar", "chockar", "kroppar", "tokkar", "avbocka", "mokka", "v-åtta", "foppa", ],
    ["drabba", "krabba", "tabbar", "tagga", "slagga", "lagga", "bagga", "habbar", "babblar", "babbar", "grabbar", "ingvar kamprad", "kampar", "bankar", "tankar", "appar", "klappa", "tanka", "glappa", "haffla", "fackla", "fucked up", "fatta", "sakta", "backa", "packa", "packad", "locked up", "klampa", "bamba", "varva", "skarva", "garva", "larva",],
    ["fram", "namn", "milligram", "millitant", "lieman", "vietnam", "lamm", "sann", "sant", "extravagant", "bekant", "porsche macan", "sand", "ban", "kan", "tant", "hand", "bland", "fan", "man", "gun", "autoban"],
    ["flow", "goal", "show", "wow", "dope", "rope", "coke", "choke", "hoe", "bro", "blow", "throw", "slow", "toe", "glow", "no",],
    ["pojk", "toy", "hoy", "boy", "oboy", "voi", "van nisteroy"],
    ["rocks", "glocks", "loss", "box", "opps", "tokks", "mobs",],
    ["rock", "glock", "tok", "block", "stop", "opp", "nåt", "bort", "snobb", "hob", "jurgen klopp", "hopp", "mob", "kropp", "krock", "dopp", "chock", "stock", "top",],
    ["hatiska", "farliga", "vanliga", "aningar", "varningar", "barnsliga", "galningar", "tagningar", "obehagliga", "austria", ],
    ["dräpt", "fränt", "kräk", "färd", "act", "läkt", "fact", "ägd", "fag", "lag", "bag", "gag", "jäg", "väg", ],
    ["snack", "knack", "japp", "flax", "lax", "inatt", "trakt", "makt", "svart", "sagt", "fucked", "takt", "agg", "etapp", "mag", "kebab" ],
    ["intresserad", "sofistikerad", "motiverad", "fullmunderad", "instigera", "investigera", "isolerad", "diskutera", "eritrea", "eskalera", "gilera", "bombardera",],
    ["pilot", "fri fot", "pistol", "i skor", "miljon", "biljon", "dog", "hot", "ord", "mord", "bro", "metod", "aktion", "skog", "fog", "fort", "ort", "kort", "stort", "bror", "skor", "tror", "mor", "tom", "boom",],
    ["rockkoncert", "glockkonstnär", "volontär", "och dem där", "stockholm här", "volontär", "stratosfär", "atmosfär",],
    ["top shottas", "bollsportar", "skott lossas", "08", "komplottar", "skott kostar", "cock blocka", ], 
    ["mask", "mast", "hast", "last", "kast", "rast", "fast", "rask", "pass", "ask", "plast", "pass", "vass", "kass",],
    ["testa", "vespa", "festar", "kepsar", "älska", "messa", "bästa", "lespa", "väska", "västar", "nästa", "hästar",], 
    ["hjälmar", "hjälpa", "hjärta"],
    ["hämnas", "växa", "läxas", "texas", "släckas", "läggdags", "sängdags", "s-klass", "next up", "stressa", "exa", "väckas", "läckas", "reccas", "mekkas", "täckas",], 
    ["väggar", "gegga", "lägga", "bädda",],
    ["förändring", "gällning", "vedergällning", "ending", "semin", "pendig", "sending", "envy", "denim", "henny", "stämning", "sinnesstämning", "spänning", "henny", "ändring", "kenny", "heli", "teli", "celli",], 
    ["tejpad", "rapead", "baitad", "make up", "fakead", "rated", "sheytan", "säga", "väja", "heja", "player", "marbella",],

    ["nonsens", "toppless", "content", "condense", "ronden", "bomben", "som den", "ronden", "sovjet", "hoppet", "loppet", "kroppen", "tokken", "glocken", "oppen", "toppen", "snoppen", "koppel", "loppet", "offret", "offer", "toffel", "sorten", "glöm bort det",  ],
    ["dead", "head", "bed", "fed", "rikoschett", "korett", "lätt", "sätt", "fett", "rätt", "mätt", "sett", "projekt", "byggprojekt", "privjet", "diet",], 

    ["vila", "vilda", "dealer", "fila", "sida", "bilar", "titlar", "driva", "överdriva", "linan", "pilar", ],
    ["artiklar", "partiklar", "utskickad", "titta", "blickar", "stick up", "pick up", "ficka", "flicka", "miccar", "tickar", "kikkla", "slicka", "dricka", "vicka", "nicka", "pricka", "pickan", "sikta", "stick han", "titlar", "vittna", "fitta", "titta", "sitta", "hitta", "gitta",],

    ["nätverk", "bergserk", "tap that", "clap back", "back stab", "vägspärr", "hashtag", "hatchback", "flashback", "ash cash", "snapchat", "affärsvärld", "rr", "berber", "färdväg", "världfärd", "självlärd", "hemvärn",],
    ["värld", "gähts", "sär", "värt", "cash", "stash", "beläsh", "smash", "fräsch", "crash", "trash", "själ", "motionär", "skätt", "tyvärr", "karaktär",], 

    ["problemsökare", "mopedförare", "medgörare",],
    ["hänt nåt", "en opp", "bränts bort", "eskort", "längdhopp", "tänk om", "en gång", "vänd om", "ändå", "lendo", "sen gå"],
    ["trapen", "magen", "kräsen", "väsen", "läser", "jäser", "gräset", "lägen", "äger", "läder", "kläder", "sväver", "städer", "affären", "nätet", "säten", "äten", "mäter", ],
    ["klubbar", "klubba", "shlurrar", "blurrad", "bullar", "rullar", "nulla", "tullar", "fulla", "knulla", "pulla", "undra", "blunda", "hundar", "pundar", "100", "gungar", "avrunda", "kungar", "unga", "lugna", "lunga", "tunga", "rumpa", "sumpa", "sjunga", "annorlunda", "punka", "bluffa", "puffra", "trumma", "summa", "mulla", "kardemumma", "kumla", "funka", "plugga", "kugga", "runka", "buntar", "sumpad", "dunsta", "skurkar", ],
    ["golf r", "folkkär", "opp här", "kropp här", "no gang",],
    ["hemvist", "permis", "exentrisk", "självrisk", "självisk", "exit", "sexigt", "50", "empty", "envy", "fendi", "send it", "serbisk", "belgisk", "facelift", "spend it", "bend it",],
    ["fup", "mupp", "trupp", "sshhh", "upp", "grupp",], 
    ["koncept", "recept", "reset", "step",],
    ["dubai", "haj", "maj", "kai", "skraj", "lie", "vibe", "five", "night", "tonight", "fight", "right", "ajt", "nice", "vice", "sign", "signs", "line", "versaille", "tight", "on site", "time", "kuyt", "like", "hike", "bike", "strike", "megic mike", "flight", "try", "slice", "fly", "dry", "bye", "light", "pride", "madeline clyne", "eye", "spy", "die", "fried", "paj",],
    ["attribut", "debut", "attityd", "altitud", "sändebud", "havsdjupt",], 
    ["tiz", "please", "is", "ris", "keeys", "streets", "bleed", "bredvid", "hiv", "liv", "skriv", "kliv", "flik", "league", "feed", "defeat", "feet", "beat", "paranoid", "eat", "sleep", "repeat", "indeed", "krig", "rik",],
    ["skojare", "bloggare", "avkodare", "frågade", "skidåkare", "tokarev", "chocka dig", "stoppa mig", "blocka dig", "dockade", "lockade", "doppa dig", "kåkåade", "åklagare", "åtalade", "vålnader",],
    ["drift", "fyrhjulsdrift", "whip", "shift", "dubbla skift", "skift", "vift", "lift", "dip", "flip", "vitt", "dricks", "clip", "district", "slick", "dick", "blick", "trick", "mic", "trip", "gift", "ship", "shit", "tip", "tips", "tits", "sits", "list", "kiss", "racist", "sis", "artist", "piss", "miss", "alkemist", "blodbrist", "wrist", "ticks", "konsist", "hips",  "lips", "kicks", "bits", "rip", "drip", "blip",],

    ["konsekvens", "kompetens", "konsekvent", "johnells", "tog ett L", "annabelle", "fucking hell", "ikväll", "kiss n tell", "själv", "cell", "hotell", "decibel", "räls", "äldst", "jingle bells",],
    ["trendsetter", "förrätter", "arsene wenger", "bränder", "bränner", "tänder", "helvette", "tendenser", "expressen", "kvälsspressen", "ledsen", "västen", "lesson", "hästen", "häcken", "tecken", "varningstecken", "äpplen", "käbbel", "näbben", "webben", "krutrester", "sätter", "händelse", "rester", "väster", "licester", "lester", "fester", "hugh hefner", "sms:en", "semester", "trender", "ränder", "offended", "independent", "december", "händer", "vänder", "ädre", "hellre", "vänner", "vänster", "länder", "hämnden", "träffen", "släkten", "dialekten", "arresten",], 
    ["inter", "vinter", "sprinter", "hinter", "inte", "vittne", "sikter", "åsikter", "dikter", "vikter", "dricker", "risker", "bitter", "inget", "tippen", "differ", "hissen", "listen", "dissen", "missen", "vilsen", "killsen", "kompromisser", "vippen", "vilken",],

    ["byter om", "styrkeform",], 
    ["fråger", "koder", "poker", "åker", "låter", "råder", "välommen åter", "åker", "kyrkogården", "gården", "spåret", "snabbspåret", "låder", "sandlåder", "halvmånen", "måne", "lånet", "halvåret", "håret", "målen", "målet", ], 
    ["moula", "skola", "dora", "hora", "skopa", "tupac", "shluha", "sola", "skorna", "borat", "slopa", ], 
    ["takten", "akten", "makten", "masken", "asker", "lasten", "kastet", "fastspänd", "husband", "rasten", "bsuted", "dusted", "done and dusted", ], 
    ["bra", "dra", "klar", "tillbaks", "vi gav", "har", "sa", "barn", "kvar", "plan", "klan", "kvarn", "först till kvarn", "stan", "kran", "bal", "kapital", "grav", "trav", "van", "glad", "blad", "hat", "fat", "lat", "djingis khan", "alban", "marockan", "autobahn", "narkoman", "tradonal", "drag", "galenskap", "vapenlag", "vad", "kollateralt", "bombattentat", "radikal", "material", "katedral", "dag", "lag", "pokal", "lokal", "tal", "flertal", "enbart", "mer hat", "vart", "var", "klimat", "mat", "stalingrad", "habitat", "tam",], 
    ["startklar", "rakt av", "bra tag"],
    ["öde", "döden", "övers", "förfest", "glöder", "föder", "hördes", "mötes", "blöder", "över", "bröder", "klöver", "frisörer", "aktörer",],
    ["messi", "väst i", "prestige", "pepsi", "jetski", "heskey", "läskig", "festis", "bestie", "bästis", ],
    ["blå", "gå", "år", "lår", "få", "må", "mår", "762", "entrecote", "går", "låt", "förlåt", "stå", "får", "tår", "bråk", "grå", "på", "påstå", "22", "hk", "stål"], 
    ["penna", "hämnas", "45:a", "äkta", "vända", "tenta", "sända", "hemma", "lämna", "tända", "agenda", "defenda", "trenda", "pengar", "genererar", "drängar", "änglar", "strängar", "bängan", "sängar", "längtar", "förlängd arm", "bänga", "slänga", "fängslad", "hänga",],  
    ["långsikt", "toxic", "rostfri", "sportig", "kontring", "nånting", "långsint", "brottsling", "boys spring", "kompis", "molnigt", "dåtid", "åsikt", "blåsigt", "årstid", "comviq", "no shit", "oh shit", "s-tronic", "konstigt", "kom sist", "somrigt", "homies", "lonly", "only", "proxy", "brodie", "holy", "goalie", "roly", "dålig", "hål i", "tony", ],
    ["mbappe", "tabbe", "straffet", "trappen", "hatten", "matten", "zatten", "latte", "papper", "tapper", "vatten", "natten", "trakten", "bratte", "kahpe", "fuck er",],
    ["lagen", "dagen", "magen", "mager", "lager", "tagen", "antagen", "intagen", "risktagen", "riksdagen", ],
    ["solen", "rodet", "polen", "orden", "bordet", "borde", ],
    ["frågor", "våfor", "lågor", ],
    ["pangare", "langare", "snackare", "tacka mig", "backa dig", "slakta dig", "akta dig", "laggade", "taggade", "manglade",],
    ["måla", "gårdar", "lovat", "tårar", "odåga", "blåa", "låtar", "låta", "båtar", "khota", "låga", "förmåga", "råa", "gråa", "kåkåka", "begåvad", "förlovad", "barcelona", "vårdnad", "lånad", "skålar", "haaland", "cola", "kola", "stålar", "månad", "ordnat",],
    



    

    
    







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