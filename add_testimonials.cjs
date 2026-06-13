const fs = require("fs");
const path = require("path");

const translations = {
  hr: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 recenzije • 2 fotografije • prije 2 godine",
      text: "Danas smo imali photo shooting na Hedonist brodu. Od dolaska dočekao nas je mornar koji nas je pozdravio toplom dobrodošlicom, uveo na brod gdje nas je kapetan ponudio sa raznovrsnim pićem. Cijeli put je bio zabavan, uz odabranu pjesmu na ozvučenom brodu. Ispunio je sve naše želje i očekivanja. Jedva čekamo ponovo doći na Hedonist, toplo preporučam da i vi osjetite taj topao ugođaj cjeloukupne atmosfere!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Lokalni vodič • 67 recenzija • prije godinu dana",
      text: "Bilo nam je prekrasno,vidjeli smo puno dupina. Djeca su bila posebno odusevljena i voznjom,pogledom na okolinu i dupinima. Zahvaljujem mornaru Ninu i kapetanu Adnanu pa cool pustolovini. Vidimo se uskoro opet."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 recenzija • prije 9 mj.",
      text: "Vrlo ljubazno i vrijedno osoblje! Takoder velika pohvala za wc,imaji dezice,tampone i uloske! Sve najpozitivnije moguce!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 recenzija • prije godinu dana",
      text: "Bile smo jučer i mogu reći jedno divno iskustvo. Kapetan Adnan i Nino su vrlo ljubazni i uslužni. Predivna vožnja sa zalaskom sunca i delfinima,koja će nam ostat u jako lijepom sjećanju. Ako tražite slično iskustvo ispunjeno zabavom i ovako dobrim dojmovima definitivno je to Hedonist. Svake preporuke i vidimo se ponovno 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 recenzija • prije godinu dana",
      text: "Bilo je predivno, videli smo delfine čim smo izašli na more. Kapetani Adnan i Nino su savršen tim koji nas je lijepo uslužio. Doći ćemo ponovo sigurno."
    }
  ]\`,
  en: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 reviews • 2 photos • 2 years ago",
      text: "Today we had a photo shooting on the Hedonist boat. Upon arrival, we were welcomed by the sailor, brought onto the boat where the captain offered us a variety of drinks. The whole trip was fun, with selected songs on the sound system. He fulfilled all our wishes and expectations. We can't wait to come to Hedonist again, I highly recommend that you also feel this warm atmosphere!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Local guide • 67 reviews • 1 year ago",
      text: "We had a wonderful time, we saw a lot of dolphins. The children were especially delighted with the ride, the view of the surroundings and the dolphins. I thank sailor Nino and captain Adnan for a cool adventure. See you again soon."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 review • 9 months ago",
      text: "Very kind and hardworking staff! Also great praise for the toilet, they have deodorants, tampons and pads! Everything as positive as possible!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 review • 1 year ago",
      text: "We went yesterday and I can say a wonderful experience. Captain Adnan and Nino are very kind and helpful. A wonderful ride with sunset and dolphins, which will remain in a very nice memory. If you are looking for a similar experience filled with fun and such good impressions, Hedonist is definitely the one. Highly recommended and see you again 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 review • 1 year ago",
      text: "It was wonderful, we saw dolphins as soon as we went out to sea. Captain Adnan and Nino are a perfect team who served us nicely. We will come again for sure."
    }
  ]\`,
  de: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 Rezensionen • 2 Fotos • vor 2 Jahren",
      text: "Heute hatten wir ein Fotoshooting auf dem Hedonist-Boot. Bei unserer Ankunft wurden wir vom Matrosen herzlich willkommen geheißen und aufs Boot gebracht, wo uns der Kapitän verschiedene Getränke anbot. Der gesamte Ausflug war lustig, mit toller Musik über das Soundsystem. Er hat all unsere Wünsche und Erwartungen erfüllt. Wir können es kaum erwarten, wieder auf die Hedonist zu kommen, ich kann euch wärmstens empfehlen, diese herzliche Atmosphäre selbst zu erleben!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Local Guide • 67 Rezensionen • vor 1 Jahr",
      text: "Wir hatten eine wundervolle Zeit und haben viele Delfine gesehen. Die Kinder waren besonders begeistert von der Fahrt, der Aussicht und den Delfinen. Ich danke dem Matrosen Nino und dem Kapitän Adnan für das coole Abenteuer. Bis bald."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 Rezension • vor 9 Monaten",
      text: "Sehr freundliches und fleißiges Personal! Auch ein großes Lob für die Toilette, es gibt Deodorants, Tampons und Binden! Alles so positiv wie möglich!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 Rezension • vor 1 Jahr",
      text: "Wir waren gestern dort und ich kann sagen: Eine wunderbare Erfahrung. Kapitän Adnan und Nino sind sehr freundlich und hilfsbereit. Eine wunderschöne Fahrt in den Sonnenuntergang mit Delfinen, die uns in sehr schöner Erinnerung bleiben wird. Wer ein ähnliches, spaßiges Erlebnis mit solch tollen Eindrücken sucht, für den ist Hedonist genau das Richtige. Sehr empfehlenswert und bis zum nächsten Mal 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 Rezension • vor 1 Jahr",
      text: "Es war wunderbar, wir haben direkt Delfine gesehen, als wir aufs Meer hinausfuhren. Die Kapitäne Adnan und Nino sind ein perfektes Team, das uns toll bedient hat. Wir kommen sicher wieder."
    }
  ]\`,
  it: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 recensioni • 2 foto • 2 anni fa",
      text: "Oggi abbiamo fatto un servizio fotografico sulla barca Hedonist. All'arrivo siamo stati accolti dal marinaio, portati sulla barca dove il capitano ci ha offerto una varietà di bevande. L'intero viaggio è stato divertente, con canzoni selezionate sul sistema audio. Ha soddisfatto tutti i nostri desideri e aspettative. Non vediamo l'ora di tornare all'Hedonist, vi consiglio vivamente di provare questa calda atmosfera!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Local guide • 67 recensioni • 1 anno fa",
      text: "Siamo stati benissimo, abbiamo visto molti delfini. I bambini sono rimasti particolarmente entusiasti del viaggio, della vista sui dintorni e dei delfini. Ringrazio il marinaio Nino e il capitano Adnan per la fantastica avventura. A presto."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 recensione • 9 mesi fa",
      text: "Personale molto gentile e laborioso! Anche grandi elogi per il bagno, hanno deodoranti, assorbenti e salvaslip! Tutto il più positivo possibile!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 recensione • 1 anno fa",
      text: "Siamo andati ieri e posso dire un'esperienza meravigliosa. Il capitano Adnan e Nino sono molto gentili e disponibili. Un viaggio meraviglioso con tramonto e delfini, che rimarrà in un bellissimo ricordo. Se stai cercando un'esperienza simile piena di divertimento e ottime impressioni, Hedonist è sicuramente quella giusta. Altamente raccomandato e ci vediamo di nuovo 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 recensione • 1 anno fa",
      text: "È stato meraviglioso, abbiamo visto i delfini non appena siamo usciti in mare. I capitani Adnan e Nino sono una squadra perfetta che ci ha servito bene. Torneremo sicuramente."
    }
  ]\`,
  nl: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 reviews • 2 foto's • 2 jaar geleden",
      text: "Vandaag hadden we een fotoshoot op de Hedonist boot. Bij aankomst werden we verwelkomd door een matroos en naar de boot gebracht, waar de kapitein ons diverse drankjes aanbood. De hele trip was erg leuk, met fijne muziek op het geluidssysteem. Onze wensen en verwachtingen zijn meer dan waargemaakt. We kunnen niet wachten om weer eens mee te gaan, we raden ten zeerste aan om ook deze warme ontspannen sfeer te ervaren!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Local guide • 67 reviews • 1 jaar geleden",
      text: "We hebben het geweldig gehad, we hebben veel dolfijnen gezien. De kinderen waren vooral erg blij met de rit, het uitzicht en de dolfijnen. We bedanken matroos Nino en kapitein Adnan voor het toffe avontuur. Tot snel."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 review • 9 maanden geleden",
      text: "Zeer vriendelijk en hardwerkend personeel! Ook een groot compliment voor het toilet, ze hebben deoderant en tampons! Alles zo netjes en schoon als maar kan!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 review • 1 jaar geleden",
      text: "We zijn gisteren geweest en ik kan vertellen dat het een prachtige ervaring was. Kapitein Adnan en Nino zijn erg vriendelijk en behulpzaam. Een fantastische tocht met dolfijnen en een adembenemende zonsondergang, we zullen dit als een hele fijne herinnering bewaren. Als je op zoek bent naar een ervaring voor de hele familie inclusief super service, is de Hedonist de keuze bij uitstek. We raden het ten zeerste aan en tot ziens 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 review • 1 jaar geleden",
      text: "Het was fantastisch, we zagen meteen dolfijnen toen we de zee op voeren. Kapiteinen Adnan en Nino zijn een geweldig team en hebben ons zeer goed en netjes geholpen. We zullen hier met zekerheid nog wel een keer komen."
    }
  ]\`,
  sl: \`
  testimonials_reviews: [
    {
      name: "Andrea Džinović",
      initial: "A",
      meta: "4 ocene • 2 fotografiji • pred 2 letoma",
      text: "Danes smo imeli fotografiranje na ladji Hedonist. Ob prihodu nas je pričakal mornar, nas toplo sprejel in pospremil na ladjo, kjer nam je kapitan ponudil različne pijače. Celoten izlet je bil zabaven, z izbrano glasbo na ozvočenju. Izpolnil je vse naše želje in pričakovanja. Komaj čakamo, da spet pridemo na Hedonist, toplo priporočam, da tudi vi začutite to toplo vzdušje celotnega ambienta!!"
    },
    {
      name: "Edin Dogic",
      initial: "E",
      meta: "Lokalni vodnik • 67 ocen • pred 1 letom",
      text: "Bilo nam je čudovito, videli smo veliko delfinov. Otroci so bili še posebej navdušeni nad vožnjo, razgledom na okolico in delfini. Zahvaljujem se mornarju Ninu in kapitanu Adnanu za super pustolovščino. Se kmalu spet vidimo."
    },
    {
      name: "Marinela Burzić",
      initial: "M",
      meta: "1 ocena • pred 9 meseci",
      text: "Zelo prijazno in marljivo osebje! Prav tako velika pohvala za stranišče, imajo dezodorante, tampone in vložke! Vse najbolj pozitivno možno!"
    },
    {
      name: "Anica Terzic",
      initial: "A",
      meta: "1 ocena • pred 1 letom",
      text: "Bile smo včeraj in lahko rečem čudovita izkušnja. Kapitan Adnan in Nino sta zelo prijazna in ustrežljiva. Čudovita vožnja s sončnim zahodom in delfini, ki nam bo ostala v zelo lepem spominu. Če iščete podobno izkušnjo, polno zabave in tako dobrih vtisov, je to zagotovo Hedonist. Vsa priporočila in se ponovno vidimo 😊"
    },
    {
      name: "Ivan Spasovski",
      initial: "I",
      meta: "1 ocena • pred 1 letom",
      text: "Bilo je čudovito, delfine smo videli takoj, ko smo odpluli na morje. Kapitana Adnan in Nino sta popolna ekipa, ki sta nam lepo stregla. Zagotovo bomo še prišli."
    }
  ]\`
};

const map = {
  "hrUI.ts": "hr",
  "enUI.ts": "en",
  "deUI.ts": "de",
  "itUI.ts": "it",
  "nlUI.ts": "nl",
  "slUI.ts": "sl",
};

Object.keys(map).forEach(file => {
  const filepath = path.join(__dirname, "src/locales", file);
  let content = fs.readFileSync(filepath, "utf8");
  if (!content.includes("testimonials_reviews:")) {
      const parts = content.split(/};?\s*$/);
      if(parts.length > 1) {
        content = parts[0] + "," + translations[map[file]] + "};\n";
        fs.writeFileSync(filepath, content, "utf8");
        console.log("Updated", file);
      }
  }
});
