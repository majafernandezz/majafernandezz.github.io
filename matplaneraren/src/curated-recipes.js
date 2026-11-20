// Självständigt valda maträtter. Varje post har en egen ingredienslista och metod.
const p=(name,size,price,kcal,group='Skafferi',allergens=[],unit='g')=>({name,size,price,kcalPerUnit:kcal/(unit==='st'?1:100),group,allergens,unit});
export const curatedProducts={
 porkShoulder:p('Fläskkarré',600,6990,250,'Kött, fisk & vegetariskt'),
 breadcrumbs:p('Ströbröd',400,1990,350,'Skafferi',['Gluten']),
 bacon:p('Bacon',140,2290,340,'Kött, fisk & vegetariskt'),
 sausage:p('Falukorv',500,3990,260,'Kött, fisk & vegetariskt'),
 stewbeef:p('Grytbitar av nöt',600,8990,140,'Kött, fisk & vegetariskt'),
 lamb:p('Lammfärs',500,7990,230,'Kött, fisk & vegetariskt'),
 herring:p('Strömmingsfilé',500,4990,150,'Kött, fisk & vegetariskt',['Fisk']),
 smokedSalmon:p('Varmrökt lax',200,5990,220,'Kött, fisk & vegetariskt',['Fisk']),
 ham:p('Kokt skinka',200,2990,110,'Kött, fisk & vegetariskt'),
 driedpeas:p('Gula ärtor, torkade',500,1890,330),
 brownbeans:p('Bruna bönor, kokta och avrunna',380,1990,110),
 drychickpeas:p('Kikärtor, torkade',500,2390,360),
 beets:p('Rödbetor',1000,1990,43,'Frukt & grönt'),
 parsnip:p('Palsternacka',500,1990,75,'Frukt & grönt'),
 lettuce:p('Romansallad',200,1990,17,'Frukt & grönt'),
 avocado:p('Avokado, ätlig del',100,1290,160,'Frukt & grönt'),
 bay:p('Lagerblad',5,1490,310),
 allspice:p('Kryddpeppar',35,2190,260),
 lingon:p('Lingonsylt',400,2490,180),
 syrup:p('Ljus sirap',500,2490,310),
 jam:p('Jordgubbssylt',400,2490,170),
 pickles:p('Smörgåsgurka',370,2490,30),
 capers:p('Kapris',100,2290,25),
 olives:p('Svarta oliver, urkärnade',150,2290,140),
 anchovy:p('Sardellfiléer',50,2490,200,'Skafferi',['Fisk']),
 pecorino:p('Pecorino',150,4490,400,'Mejeri & ägg',['Mjölk']),
 pinenuts:p('Pinjenötter',60,3990,675),
 walnuts:p('Valnötter',200,3490,650,'Skafferi',['Nötter']),
 peanuts:p('Jordnötter, rostade',200,2490,600,'Skafferi',['Jordnötter']),
 mozzarella:p('Mozzarella, avrunnen',125,1790,240,'Mejeri & ägg',['Mjölk']),
 phyllo:p('Filodeg',250,2790,300,'Frys',['Gluten']),
 puff:p('Smördeg',250,2790,390,'Frys',['Gluten','Mjölk']),
 paneer:p('Paneer',200,3490,280,'Mejeri & ägg',['Mjölk']),
 sourcream:p('Crème fraiche',200,2290,300,'Mejeri & ägg',['Mjölk']),
 mayo:p('Majonnäs',200,2490,700,'Skafferi',['Ägg','Senap']),
 sourdough:p('Surdegsbröd',500,3490,250,'Bröd',['Gluten']),
 pitabread:p('Pitabröd',6,2290,160,'Bröd',['Gluten'], 'st'),
 burgerbun:p('Hamburgerbröd',4,2290,180,'Bröd',['Gluten'], 'st'),
 polenta:p('Polenta, snabbkokt',500,2490,360),
 yellowrice:p('Jasminris',1000,3490,355),
 sushiRice:p('Sushiris',500,2990,355),
 nori:p('Noriark',10,2990,8,'Skafferi',[], 'st'),
 ricevinegar:p('Risvinäger',150,2290,20,'Skafferi',[], 'ml'),
 sugar:p('Strösocker',1000,1790,400),
 cornstarch:p('Majsstärkelse',400,2290,350),
 buckwheat:p('Bovetemjöl',500,3490,340),
 tamarind:p('Tamarindpasta',200,2990,240),
 fishsauce:p('Fisksås',150,2490,60,'Skafferi',['Fisk'], 'ml'),
 gochujang:p('Gochujang',200,3490,200,'Skafferi',['Soja','Gluten']),
 sesameoil:p('Sesamolja',150,3490,810,'Skafferi',['Sesam'], 'ml'),
 miso:p('Misopasta',200,3490,200,'Skafferi',['Soja']),
 dumpling:p('Gyozaplattor',250,2990,280,'Frys',['Gluten']),
 yeast:p('Torrjäst',12,990,325),
 bakingpowder:p('Bakpulver',100,1590,100),
 saffron:p('Saffran',.5,2990,310),
 smokedpaprika:p('Paprikapulver, sött',40,1990,280),
 clove:p('Malen kryddnejlika',30,1990,275),
 cardamom:p('Malen kardemumma',35,2490,310),
 nutmeg:p('Malen muskot',20,2490,525),
 mint:p('Färsk mynta',20,1690,45,'Frukt & grönt'),
 fennel:p('Fänkål',250,1990,31,'Frukt & grönt'),
 okra:p('Fryst okra',400,2990,33,'Frys'),
 whitewine:p('Alkoholfritt vitt matlagningsvin',250,2290,25,'Skafferi',['Sulfit'], 'ml'),
 redwine:p('Alkoholfritt rött matlagningsvin',250,2290,25,'Skafferi',['Sulfit'], 'ml'),
 mussels:p('Blåmusslor, kokta och skalade',200,4990,100,'Frys',['Skaldjur']),
};
// Alla mängder per portion. Kokvatten anges i tillagningsstegen.
const rows=[];
function d(id,name,cuisine,type,time,ingredients,steps,opts={}){rows.push({id:`dish-${id}`,name,cuisine,type,time,ingredients:{salt:.5,blackpepper:.1,...ingredients},steps,mood:'comfort',lunchbox:true,easy:false,...opts});}

d('kottbullar','Köttbullar med potatismos, brunsås och lingon','Nordiskt','husmanskost',50,
 {beef:150,breadcrumbs:12,milk:80,onion:25,egg:.25,potato:250,butter:12,cream:40,stock:1,lingon:25,oil:5,soy:5,flour:5},
 ['Skala och tärna potatisen. Koka mjuk i vatten i cirka 15–20 minuter.','Låt ströbrödet svälla i en fjärdedel av mjölken i 5 minuter. Blanda med färs, finriven lök, ägg, salt och peppar. Forma små köttbullar.','Bryn köttbullarna i oljan i omgångar och stek på medelvärme tills de är genomstekta, cirka 10 minuter.','Lyft upp köttbullarna. Vispa mjölet med grädde, soja, buljongpulver och 70 ml vatten per portion. Häll i pannan och sjud under omrörning i 5 minuter. Lägg tillbaka köttbullarna och värm igenom.','Mosa potatisen med smör och resten av mjölken, uppvärmd. Servera med köttbullar, sås och lingon.']);
d('korvstroganoff','Korvstroganoff med ris','Nordiskt','husmanskost',25,
 {sausage:150,onion:50,tomatoPaste:20,cream:70,tomatoes:60,rice:75,oil:5},
 ['Koka riset enligt förpackningen.','Skär korven i stavar och finhacka löken. Bryn i oljan i en rymlig panna.','Rör ner tomatpurén och fräs 1 minut. Tillsätt grädde och tomater.','Sjud 7–10 minuter. Smaka av med salt och peppar och servera med riset.'],{easy:true});
d('kalops','Kalops med morötter och kokt potatis','Nordiskt','husmanskost',150,
 {stewbeef:180,onion:60,carrot:100,potato:250,butter:8,flour:8,bay:.1,allspice:.5,stock:3},
 ['Skär köttet i 3 cm stora bitar. Bryn i smöret i omgångar i en gryta.','Tillsätt grovhackad lök och mjöl. Rör om och häll på vatten så att köttet precis täcks. Tillsätt buljong, lagerblad och kryddpeppar.','Sjud under lock 1,5–2 timmar tills köttet lätt faller isär. Fyll på vatten vid behov.','Lägg i morötter i tjocka skivor under de sista 25 minuterna. Koka potatisen separat och servera till grytan.']);
d('kalpudding','Kålpudding med gräddsås','Nordiskt','husmanskost',75,
 {cabbage:220,beef:150,onion:30,egg:.25,milk:40,breadcrumbs:10,syrup:8,butter:10,potato:200,cream:50,stock:1},
 ['Sätt ugnen på 200 °C. Strimla kålen och stek mjuk i smöret cirka 12 minuter. Rör ner sirapen.','Låt ströbröd svälla i mjölken. Blanda med färs, hackad lök, ägg och hälften av kålen. Salta och peppra.','Lägg i en ugnsform och fördela resten av kålen ovanpå. Grädda cirka 40 minuter tills färsen är genomstekt.','Koka potatisen. Sjud grädde, buljong och 40 ml vatten per portion till sås. Servera med kålpuddingen.']);
d('ugnspannkaka','Ugnspannkaka med bacon och lingon','Nordiskt','äggrätt',45,
 {flour:65,milk:180,egg:1,bacon:50,butter:3,lingon:25},
 ['Sätt ugnen på 225 °C och smörj en ugnsform tunt med smöret.','Skär baconet i bitar. Stek i pannan och fördela i formen.','Vispa mjölet med hälften av mjölken till en slät smet. Vispa ner resten av mjölken och ägget. Salta försiktigt.','Häll i formen i ett cirka 2 cm tjockt lager. Grädda 25–30 minuter tills pannkakan stannat i mitten. Servera med lingon.']);
d('raggmunk','Raggmunk med stekt fläsk och lingon','Nordiskt','husmanskost',40,
 {potato:220,flour:35,milk:90,egg:.5,bacon:60,butter:8,lingon:25},
 ['Vispa mjöl och mjölk slätt och rör ner ägget.','Skala potatisen och riv fint. Krama ur lätt och blanda direkt i smeten. Salta och peppra.','Stek baconet knaprigt och lägg åt sidan.','Stek tunna raggmunkar i smöret på medelvärme, cirka 3–4 minuter per sida tills potatisen är mjuk. Servera med bacon och lingon.'],{lunchbox:false});
d('artsoppa','Gul ärtsoppa med timjan och senap','Nordiskt','soppa',120,
 {driedpeas:100,onion:60,carrot:60,thyme:.5,bay:.1,stock:3,mustard:10,bread:60},
 ['Blötlägg ärtorna i rikligt med kallt vatten i 12 timmar före tillagningen. Häll bort blötläggningsvattnet.','Lägg ärtorna i en kastrull med 500 ml nytt vatten per portion. Koka upp och skumma ytan.','Tillsätt hackad lök, tärnad morot, timjan, lagerblad och buljong. Sjud 60–90 minuter tills ärtorna är helt mjuka. Späd med vatten vid behov.','Ta bort lagerbladet och smaka av. Servera med senap och bröd.'],{description:'Kräver 12 timmars blötläggning utöver tillagningstiden.'});
d('brunabonor','Bruna bönor med stekt fläsk','Nordiskt','husmanskost',25,
 {brownbeans:230,bacon:70,vinegar:10,syrup:12,potato:200},
 ['Koka potatisen mjuk i vatten.','Lägg de färdigkokta bönorna i en kastrull med 60 ml vatten per portion. Sjud i 10 minuter.','Mosa en del av bönorna med en sked för krämig konsistens. Smaka av med vinäger, sirap och lite salt.','Stek baconet knaprigt. Servera med bönorna och potatisen.'],{easy:true});
d('kroppkakor','Kroppkakor med svampfyllning och brynt smör','Nordiskt','husmanskost',80,
 {potato:300,flour:70,egg:.5,mushroom:100,onion:40,butter:20,allspice:.3,lingon:25},
 ['Skala potatisen, koka mjuk och pressa. Låt svalna helt så att degen inte blir klibbig.','Hacka svamp och lök fint. Stek torra i panna först, tillsätt en fjärdedel av smöret och kryddpeppar och låt få färg.','Blanda potatis med ägg och mjöl till en mjuk deg. Forma bollar med mjölade händer, platta till, lägg i fyllning och nyp ihop.','Sjud kroppkakorna i lättsaltat vatten i omgångar. När de flyter upp, sjud ytterligare cirka 5 minuter.','Bryn resten av smöret lätt i en kastrull och servera med kroppkakor och lingon.']);
d('stromming','Panerad strömming med mos och dill','Nordiskt','fiskrätt',40,
 {herring:180,breadcrumbs:25,potato:250,milk:50,butter:18,dill:5,lemon:.25},
 ['Koka skalad potatis mjuk. Mosa med mjölk och hälften av smöret.','Kontrollera strömmingsfiléerna och klipp bort ryggfenor. Torka fisken, salta lätt och vänd i ströbröd.','Stek filéerna i resten av smöret på medelvärme cirka 3 minuter per sida, tills fisken är genomlagad.','Servera med mos, dill och citron.'],{lunchbox:false});
d('fiskgratang','Fiskgratäng med räkor och spritsat mos','Nordiskt','gratäng',60,
 {cod:160,shrimp:50,potato:250,milk:60,butter:12,cream:50,flour:8,dill:5,lemon:.25},
 ['Sätt ugnen på 200 °C. Koka potatisen mjuk och mosa med hälften av smöret och hälften av mjölken.','Lägg torsken i mitten av en ugnsform. Spritsa eller klicka moset runt fisken.','Smält resten av smöret, vispa i mjölet och späd med resten av mjölken och grädden. Sjud 3 minuter. Smaka av med dill och citron.','Häll såsen över fisken och grädda cirka 20 minuter tills fisken är genomlagad och moset fått färg.','Fördela kokta, avrunna räkor över fisken under de sista 2 minuterna så att de bara blir varma.']);
d('laxpudding','Laxpudding med dill och skirat smör','Nordiskt','gratäng',65,
 {smokedSalmon:100,potato:230,egg:1,milk:130,leek:60,dill:5,butter:15},
 ['Sätt ugnen på 200 °C. Koka potatisen nästan mjuk och skiva.','Skiva purjolöken tunt och mjuka den i en liten del av smöret. Dela laxen och kontrollera att inga ben finns kvar.','Varva potatis, purjolök, lax och dill i en form. Vispa ägg och mjölk och häll över.','Grädda 30–35 minuter tills äggstanningen stelnat. Smält resterande smör varsamt och servera till.']);
d('dillkott','Dillkött med morot och potatis','Nordiskt','husmanskost',140,
 {stewbeef:180,carrot:100,onion:50,potato:230,cream:50,flour:8,vinegar:8,sugar:5,dill:8,bay:.1},
 ['Lägg köttet i en gryta och täck med vatten. Koka upp och skumma. Lägg i lök i klyftor och lagerblad.','Sjud under lock i cirka 1,5–2 timmar tills köttet är mört. Lägg i morötter i bitar de sista 25 minuterna.','Koka potatisen separat. Lyft upp kött och morötter och spara kokspadet.','Vispa mjölet med grädden och 150 ml kokspad per portion. Sjud 5 minuter under omrörning. Smaka av med vinäger, socker, salt och hackad dill.','Vänd ner kött och morot i såsen och servera med potatisen.']);
d('carbonara','Spaghetti carbonara','Italienskt','pasta',25,
 {pasta:100,bacon:60,egg:1,pecorino:25},
 ['Koka pastan i lättsaltat vatten. Spara en kopp kokvatten innan du häller av.','Skär bacon i små bitar och stek långsamt knaprigt i en stor panna.','Vispa ihop ägget med finriven pecorino och svartpeppar.','Vänd pastan i baconpannan och ta helt från värmen. Rör ner äggblandningen och lite kokvatten i taget tills såsen blir blank och krämig. Ägget ska tjockna av eftervärmen, inte bli äggröra. Servera genast.'],{lunchbox:false});
d('puttanesca','Pasta puttanesca','Italienskt','pasta',25,
 {pasta:95,tomatoes:200,anchovy:12,olives:35,capers:12,garlic:5,oil:10,chili:.3,parsley:5},
 ['Koka pastan enligt förpackningen.','Hacka vitlök och sardeller. Fräs varsamt i oljan tillsammans med chili tills sardellerna lösts upp.','Tillsätt tomater, oliver och kapris och sjud i 12–15 minuter. Smaka innan du tillsätter salt.','Vänd ner pastan och lite pastavatten. Strö över persilja och servera.'],{easy:true});
d('pesto','Basilikapasta med hemgjord pesto','Italienskt','pasta',25,
 {pasta:95,basil:15,pinenuts:15,parmesan:20,garlic:2,oil:18,greenbeans:100,lemon:.15},
 ['Rosta pinjenötterna lätt i torr panna och låt svalna.','Mixa basilika, nötter, vitlök och parmesan. Mixa kort med oljan och smaka av med citron.','Koka pastan och lägg i haricots verts under de sista 4 minuterna. Spara lite kokvatten.','Vänd pasta och bönor med peston från värmen. Späd med kokvatten till en sås som täcker pastan.'],{lunchbox:false});
d('caciopepe','Cacio e pepe','Italienskt','pasta',20,
 {pasta:100,pecorino:40,blackpepper:1},
 ['Finriv pecorinon. Koka pastan i ganska lite, lättsaltat vatten så att kokvattnet blir stärkelserikt.','Rosta grovmalen svartpeppar varsamt i en torr panna cirka 30 sekunder. Tillsätt 50 ml pastavatten per portion.','Blanda osten med lite avsvalnat pastavatten till en tjock kräm.','Vänd pastan i pepparvattnet och ta från värmen. Rör ner ostkrämen och mer kokvatten lite i taget tills såsen är slät. Servera direkt.'],{lunchbox:false});
d('pizza','Pizza margherita','Italienskt','pizza',50,
 {flour:130,yeast:2,oil:8,tomatoes:90,mozzarella:80,basil:5},
 ['Blanda mjöl och torrjäst. Arbeta in 80 ml ljummet vatten per portion, hälften av oljan och lite salt. Knåda 8 minuter. Låt jäsa övertäckt cirka 1 timme utöver arbetstiden.','Sätt ugnen på högsta temperatur, cirka 250–275 °C, med en plåt i ugnen. Mosa tomaterna och salta lätt. Låt mozzarellan rinna av ordentligt.','Dra ut degen tunt på bakplåtspapper. Bred på tomat och fördela mozzarella.','Flytta försiktigt till den heta plåten och grädda cirka 8–12 minuter tills botten fått färg. Toppa med basilika och resten av oljan.'],{description:'Degen behöver jäsa cirka 1 timme utöver angiven arbetstid.'});
d('parmigiana','Aubergine parmigiana','Italienskt','gratäng',65,
 {eggplant:280,tomatoes:200,mozzarella:70,parmesan:20,onion:30,garlic:3,oil:15,basil:5,bread:70},
 ['Sätt ugnen på 225 °C. Skiva auberginen 1 cm tjockt, pensla med två tredjedelar av oljan och rosta 20–25 minuter tills mjuk.','Fräs hackad lök och vitlök i resten av oljan. Tillsätt tomater och sjud i 15 minuter.','Varva aubergine, tomatsås, basilika och mozzarella i en form. Toppa med parmesan.','Gratinera cirka 20 minuter tills osten fått färg. Låt stå 5 minuter och servera med brödet.']);
d('polenta','Krämig polenta med svampragu','Italienskt','vegetariskt',35,
 {polenta:75,mushroom:220,onion:40,garlic:3,tomatoPaste:15,tomatoes:100,stock:3,parmesan:25,butter:12,thyme:.5},
 ['Skiva svampen och stek i torr panna tills vätskan kokat bort. Tillsätt hälften av smöret, hackad lök, vitlök och timjan. Stek tills löken mjuknat.','Rör ner tomatpuré, tomater och 50 ml vatten per portion. Sjud till en mustig ragu, cirka 10 minuter.','Koka upp 300 ml vatten per portion med buljongpulvret. Vispa ner polentan och tillaga enligt förpackningens tid.','Rör ner resten av smöret och parmesanen i polentan. Späd med vatten om den blir för fast och servera med svampragun.']);
d('ribollita','Ribollita med vita bönor och bröd','Italienskt','soppa',45,
 {whitebeans:180,cabbage:100,carrot:70,celery:40,onion:40,tomatoes:160,sourdough:70,garlic:4,oil:10,stock:3},
 ['Hacka lök, morot och selleri fint. Fräs i oljan i 5 minuter och tillsätt hackad vitlök.','Tillsätt strimlad kål, tomater, buljong och 250 ml vatten per portion. Sjud 20 minuter.','Skölj bönorna. Mosa hälften och rör ner alla bönor i soppan.','Riv brödet i bitar och vänd ner. Sjud 5–10 minuter tills soppan är tjock och brödet mjukt. Smaka av.'],{easy:true});
d('moussaka','Moussaka med lammfärs och aubergine','Medelhavet','gratäng',95,
 {lamb:140,eggplant:200,potato:120,tomatoes:160,onion:40,garlic:3,cinnamon:.4,milk:120,flour:10,butter:10,cheese:20,oil:10},
 ['Sätt ugnen på 225 °C. Skiva aubergine och potatis tunt, pensla med oljan och rosta i 20–25 minuter tills de mjuknat.','Bryn lammfärs och hackad lök i en panna. Tillsätt vitlök, kanel och tomater. Sjud 15 minuter tills färsen är genomstekt.','Smält smöret och vispa ner mjölet. Späd med mjölk under vispning och sjud 5 minuter.','Varva potatis, aubergine och färssås i en form. Häll mjölksåsen över och strö på osten.','Sänk ugnen till 200 °C och grädda cirka 30 minuter. Låt vila 10 minuter.']);
d('spanakopita','Spanakopita med spenat och feta','Medelhavet','paj',55,
 {phyllo:75,spinach:180,feta:80,egg:.5,onion:40,dill:5,oil:15},
 ['Tina spenaten och krama ur så mycket vätska som möjligt. Sätt ugnen på 200 °C.','Fräs hackad lök i en tredjedel av oljan. Låt svalna och blanda med spenat, feta, ägg och dill.','Pensla en form med lite olja. Lägg i hälften av filodegsarken, pensla tunt mellan lagren och låt kanterna hänga över.','Fördela fyllningen och täck med resten av arken, penslade med olja. Vik in kanterna.','Grädda 30–35 minuter tills degen är gyllene och fyllningen har stelnat.']);
d('souvlaki','Souvlaki med tzatziki och pitabröd','Medelhavet','grillrätt',45,
 {pork:170,pitabread:1,yogurt:100,cucumber:100,garlic:4,lemon:.3,oregano:1,oil:10,freshTomato:100},
 ['Skär köttet i 2 cm stora bitar och blanda med olja, oregano, hälften av vitlöken och citronsaft. Låt stå medan du gör såsen.','Riv gurkan och krama ur. Blanda med yoghurt och resterande vitlök. Smaka av med salt.','Trä köttet på spett och grilla eller stek på medelhög värme tills genomstekt, cirka 10–12 minuter. Vänd flera gånger.','Värm pitabrödet och servera med kött, tzatziki och skivad tomat.'],{lunchbox:false});
d('falafel','Falafel i pita med tahinisås','Medelhavet','vegetariskt',55,
 {drychickpeas:90,onion:30,garlic:4,parsley:12,cumin:1,coriander:5,flour:8,oil:20,pitabread:1,tahini:20,lemon:.3,lettuce:40},
 ['Blötlägg de torkade kikärtorna i rikligt med kallt vatten i 18–24 timmar före tillagningen. Häll av noga; de ska inte förkokas.','Mixa kikärtor med lök, vitlök, persilja, koriander, spiskummin, mjöl och salt till en grov massa som går att forma. Låt vila i kyl 20 minuter.','Forma små, platta biffar och stek i oljan på medelvärme cirka 5–6 minuter per sida. Kontrollera att mitten är varm och inte rå eller grynig; gör hellre små biffar.','Rör tahini med citron och vatten till en hällbar sås. Värm pitabrödet och fyll med sallad, falafel och sås.'],{description:'Kräver blötläggning av torkade kikärtor 18–24 timmar i förväg.'});
d('shakshuka','Shakshuka med ägg och tomat','Medelhavet','äggrätt',35,
 {egg:2,tomatoes:220,pepper:100,onion:50,garlic:4,cumin:1,paprikaPowder:1,oil:10,bread:80,parsley:5},
 ['Stek hackad lök och paprika mjuka i oljan i 8 minuter.','Tillsätt vitlök och kryddor, fräs kort och häll i tomaterna. Sjud 10 minuter till en ganska tjock sås.','Gör fördjupningar i såsen och knäck i äggen. Lägg på lock och sjud på låg värme cirka 6–10 minuter tills vitan stelnat.','Toppa med persilja och servera direkt med brödet.'],{easy:true,lunchbox:false});
d('hummus','Hummustallrik med rostade morötter och pita','Medelhavet','vegetariskt',40,
 {beans:200,tahini:25,lemon:.4,garlic:4,carrot:200,cumin:1,oil:12,pitabread:1,parsley:5},
 ['Sätt ugnen på 225 °C. Skär morötterna i stavar och blanda med hälften av oljan och spiskummin. Rosta cirka 25 minuter tills mjuka.','Mixa avrunna kikärtor med tahini, citron och vitlök. Tillsätt kallt vatten lite i taget och mixa till en slät, luftig hummus.','Värm pitabrödet. Smaka av hummusen med salt och bred ut på tallrikar.','Lägg de rostade morötterna ovanpå, ringla över resten av oljan och toppa med persilja.']);
d('tabbouleh','Tabbouleh med persilja och gröna linser','Medelhavet','sallad',30,
 {bulgur:50,greenlentils:150,parsley:25,mint:8,freshTomato:150,cucumber:100,springonion:20,lemon:.5,oil:15},
 ['Koka bulgurn enligt förpackningen och bred ut så att den svalnar.','Finhacka persilja, mynta och salladslök. Tärna tomat och gurka smått.','Skölj de kokta linserna och låt rinna av ordentligt.','Blanda bulgur, linser, grönsaker och örter med citron och olja. Smaka av och låt stå 10 minuter före servering.'],{easy:true,mood:'healthy'});
d('imambayildi','Imam bayildi med tomatfylld aubergine','Medelhavet','vegetariskt',70,
 {eggplant:300,onion:100,freshTomato:180,garlic:6,oil:20,parsley:8,rice:65},
 ['Sätt ugnen på 200 °C. Halvera auberginen och skär ett rutmönster i fruktköttet utan att skära genom skalet. Pensla med hälften av oljan och baka cirka 25 minuter.','Skiva löken tunt och stek långsamt mjuk i resten av oljan cirka 12 minuter. Tillsätt vitlök och hackade tomater och sjud 10 minuter.','Tryck ner det mjuka aubergineköttet så att en fördjupning bildas. Fyll med lökröran och baka ytterligare 20 minuter.','Koka riset och servera med auberginen och hackad persilja.']);
d('fylldpaprika','Risfylld paprika med nötfärs','Medelhavet','ugnsrätt',65,
 {pepper:250,beef:130,rice:50,onion:40,tomatoes:200,garlic:3,oregano:.7,oil:8,cheese:20},
 ['Sätt ugnen på 200 °C. Koka riset 3 minuter kortare än förpackningens tid.','Fräs färs och hackad lök i oljan tills färsen är genomstekt. Tillsätt vitlök, oregano och hälften av tomaterna och sjud 5 minuter.','Blanda färsröran med riset. Halvera och kärna ur paprikorna och fyll dem.','Lägg resten av tomaterna och 50 ml vatten per portion i botten av en form. Ställ paprikorna i såsen och toppa med ost.','Täck med folie och baka 25 minuter. Ta av folien och baka 10 minuter till, tills paprikan är mjuk.']);
d('burrito','Burrito med ris, bönor och avokado','Mexikanskt','tacos',35,
 {tortillas:2,rice:45,blackbeans:150,avocado:70,freshTomato:100,redonion:30,lime:.4,cumin:1,oil:5,yogurt:30},
 ['Koka riset. Skölj bönorna och värm i en panna med olja, spiskummin och lite vatten. Mosa några bönor för krämighet.','Tärna tomat och rödlök och blanda med hälften av limesaften. Skiva avokadon.','Värm stora tortillabröd så att de blir mjuka. Fördela ris, bönor, tomatsalsa, avokado och yoghurt i mitten.','Pressa över resten av limen. Vik in sidorna och rulla tätt. Rosta med skarven nedåt i torr panna 1 minut.']);
d('enchiladas','Enchiladas med kyckling och tomatsås','Mexikanskt','gratäng',50,
 {tortillas:2,chicken:150,tomatoes:200,onion:50,garlic:3,cumin:1,paprikaPowder:1,chili:.3,cheese:40,oil:8},
 ['Sätt ugnen på 200 °C. Hacka lök och vitlök och fräs i hälften av oljan. Tillsätt kryddor och tomater och sjud 12 minuter.','Skär kycklingen i tunna strimlor och stek i resten av oljan tills genomstekt. Blanda med en tredjedel av såsen.','Fördela fyllningen i tortillabröd och rulla ihop. Lägg med skarven nedåt i en form.','Häll på resten av såsen och strö över ost. Gratinera 15–20 minuter tills rullarna är genomvarma.']);
d('huevos','Huevos rancheros med svarta bönor','Mexikanskt','äggrätt',25,
 {tortillas:2,egg:2,blackbeans:130,freshTomato:150,onion:30,chili:.3,oil:10,coriander:5,lime:.25},
 ['Hacka tomat och lök och sjud med chili och lite vatten i 10 minuter till en grov salsa.','Värm avrunna bönor i en kastrull med lite vatten och mosa lätt.','Rosta tortillabröden i hälften av oljan. Stek äggen i resten av oljan tills vitan är fast.','Bred bönor på tortillabröden och toppa med ägg, salsa, koriander och lime.'],{lunchbox:false});
d('nachos','Nachoplåt med bönor, ost och avokadosalsa','Mexikanskt','ugnsrätt',30,
 {tortillas:2,blackbeans:160,cheese:50,corn:60,avocado:70,freshTomato:100,lime:.3,cumin:1,oil:6,yogurt:40},
 ['Sätt ugnen på 200 °C. Klipp tortillabröden i trianglar, pensla med oljan och rosta i 6–8 minuter tills frasiga.','Skölj bönorna och blanda med majs och spiskummin. Fördela över chipsen och strö över osten.','Gratinera cirka 8 minuter tills osten smält.','Tärna avokado och tomat och blanda med lime. Lägg på den varma plåten och servera genast med yoghurt.'],{lunchbox:false});
d('jambalaya','Jambalaya med kyckling och räkor','Amerikanskt','risrätt',45,
 {chicken:120,shrimp:60,rice:80,celery:50,pepper:80,onion:50,tomatoes:130,garlic:3,paprikaPowder:1,thyme:.5,chili:.3,stock:3,oil:10},
 ['Tärna kycklingen och bryn i oljan. Lägg i hackad lök, selleri och paprika och stek 5 minuter.','Tillsätt vitlök, kryddor och ris och rör runt. Tillsätt tomater, buljong och vatten enligt risförpackningen, men minska vattenmängden med hälften av tomatmängden.','Sjud under lock tills riset är mjukt enligt förpackningens tid och kycklingen genomstekt. Kontrollera vätskan och späd vid behov.','Vänd ner de kokta, tinade räkorna och värm i 1 minut. Fluffa riset och servera.']);
d('gumbo','Gumbo med okra, kyckling och ris','Amerikanskt','gryta',65,
 {chicken:150,okra:100,celery:50,pepper:60,onion:50,flour:15,oil:18,garlic:3,thyme:.5,paprikaPowder:1,stock:3,rice:65},
 ['Värm oljan i en tjockbottnad gryta. Vispa ner mjölet och tillaga på medellåg värme 10–15 minuter under ständig omrörning tills nötbrunt. Låt inte brännas.','Rör ner hackad lök, selleri och paprika och stek 5 minuter. Tillsätt vitlök och kryddor.','Späd gradvis med 300 ml vatten per portion. Tillsätt buljong, tärnad kyckling och okra.','Sjud 25 minuter tills kycklingen är genomstekt och såsen lätt tjock. Koka riset separat och servera till.']);
d('padthai','Pad thai med räkor och jordnötter','Thailändskt','nudlar',30,
 {noodles:85,shrimp:130,egg:1,tamarind:12,fishsauce:10,sugar:8,springonion:30,cabbage:70,peanuts:20,lime:.3,oil:10},
 ['Tillaga risnudlarna enligt förpackningen men låt dem ha lite tuggmotstånd. Blanda tamarind, fisksås, socker och 20 ml vatten per portion.','Stek strimlad kål och salladslök i oljan i 3–4 minuter. Skjut åt sidan och knäck i ägget. Rör tills det stelnat.','Vänd ner nudlar och sås och stek ihop 1–2 minuter. Tillsätt de kokta, avrunna räkorna och värm kort.','Toppa med hackade jordnötter och lime och servera direkt.'],{lunchbox:false});
d('bibimbap','Bibimbap med stekt ägg och grönsaker','Koreanskt','risrätt',40,
 {rice:80,egg:1,carrot:80,spinach:80,mushroom:100,cucumber:70,gochujang:15,soy:8,sesameoil:6,sesame:5,oil:6},
 ['Koka riset. Strimla morot och gurka och skiva svampen.','Stek morot och svamp var för sig i oljan så att de behåller sina smaker. Tina spenaten och krama ur; värm med hälften av sesamoljan.','Rör gochujang med soja, resten av sesamoljan och en matsked vatten per portion. Stek ägget tills vitan stelnat.','Lägg ris i skålar, fördela grönsaker i grupper och lägg ägget ovanpå. Toppa med sesam och sås och blanda vid bordet.'],{mood:'healthy',lunchbox:false});
d('bulgogi','Bulgogi med ris och gurksallad','Koreanskt','kötträtt',35,
 {pork:170,rice:75,soy:15,honey:8,ginger:6,garlic:4,sesameoil:5,onion:50,cucumber:120,ricevinegar:8,sesame:5,oil:5},
 ['Skär köttet i mycket tunna skivor. Blanda med soja, honung, riven ingefära, vitlök, sesamolja och skivad lök. Låt stå medan riset kokar.','Koka riset. Skiva gurkan tunt och vänd med risvinäger och lite salt.','Stek köttet i het panna med oljan i små omgångar, cirka 3–5 minuter per omgång tills genomstekt. Häll i kvarvarande marinad och låt koka upp ordentligt.','Servera med ris, gurksallad och sesamfrön.']);
d('katsu','Kyckling katsu med japansk currysås','Japanskt','kycklingrätt',45,
 {chicken:160,flour:12,egg:.5,breadcrumbs:30,rice:70,onion:50,carrot:70,curryPowder:2,stock:2,soy:8,oil:20},
 ['Koka riset. Hacka löken och riv moroten. Stek i en fjärdedel av oljan tills mjuka.','Rör ner curry och en tredjedel av mjölet. Späd med 180 ml vatten per portion och tillsätt buljong och soja. Sjud 10 minuter och mixa slätt.','Dela kycklingen på längden till tunna schnitzlar. Vänd i resterande mjöl, uppvispat ägg och ströbröd.','Stek kycklingen i resten av oljan cirka 4–5 minuter per sida tills genomstekt, minst 70 °C i mitten. Skiva och servera med ris och sås.']);
d('sushimaki','Sushimaki med varmrökt lax och avokado','Japanskt','sushi',50,
 {sushiRice:90,smokedSalmon:90,avocado:60,cucumber:50,nori:2,ricevinegar:15,sugar:5,soy:10},
 ['Skölj riset noggrant och koka enligt förpackningen. Blanda risvinäger med socker och lite salt.','Vänd ner vinägerblandningen i det varma riset och bred ut i en skål. Låt svalna tills ljummet; lämna inte riset framme i flera timmar.','Skär avokado och gurka i stavar. Kontrollera att laxen är benfri. Lägg ett noriark på en bambumatta eller bakplåtspapper.','Fördela ett tunt lager ris med fuktade händer och lämna en kant fri. Lägg lax och grönsaker tvärs över, rulla tätt och fukta kanten så att den fäster.','Skär med vass, fuktad kniv. Servera genast med soja.'],{lunchbox:false});
d('okonomiyaki','Okonomiyaki med vitkål och sesamsås','Japanskt','pannkaka',35,
 {cabbage:200,flour:65,egg:1,springonion:25,bacon:40,soy:8,mayo:20,sesameoil:3,oil:8},
 ['Strimla kålen mycket fint och skiva salladslöken. Vispa mjöl och ägg med 60 ml vatten per portion till en tjock smet.','Vänd ner kål, salladslök och lite salt. Stek baconet i små bitar och blanda ner.','Hetta upp oljan i en panna. Lägg i smet till tjocka pannkakor och stek under lock på medellåg värme 5–6 minuter per sida. Kontrollera att mitten är genomgräddad.','Blanda majonnäs, soja och sesamolja och ringla över vid servering.']);
d('gyoza','Gyoza med fläsk och vitkål','Japanskt','dumplings',55,
 {dumpling:100,pork:140,cabbage:100,ginger:8,garlic:3,springonion:20,soy:15,ricevinegar:10,sesameoil:4,oil:8},
 ['Hacka köttet mycket fint eller pulsa kort i matberedare. Finstrimla kålen, salta lätt och krama ur vätskan.','Blanda kött, kål, ingefära, vitlök, salladslök, hälften av sojan och sesamoljan.','Lägg en liten sked fyllning mitt på varje gyozaplatta. Fukta kanten och vik till täta halvmånar. Undvik att överfylla.','Stek bottnarna i oljan tills gyllene. Häll i vatten så att botten täcks och lägg på lock. Ånga cirka 8–10 minuter tills fläskfyllningen är genomstekt. Ta av locket och låt vattnet koka bort.','Servera med resten av sojan blandad med risvinäger.']);
d('mapotofu','Mapo-inspirerad tofu med nötfärs','Kinesiskt','gryta',30,
 {tofu:150,beef:80,gochujang:15,ginger:6,garlic:4,soy:10,cornstarch:5,springonion:20,rice:75,oil:8},
 ['Koka riset. Skär tofun i stora tärningar.','Bryn färsen i oljan tills genomstekt. Tillsätt hackad vitlök, riven ingefära och gochujang och fräs kort.','Tillsätt soja och 120 ml vatten per portion. Lägg i tofun och sjud försiktigt i 5 minuter.','Rör ut stärkelsen i lite kallt vatten och vänd ner. Sjud 1 minut tills såsen tjocknat. Toppa med salladslök och servera med riset.'],{mood:'spicy',easy:true});
d('kungpao','Kung pao-inspirerad kyckling med jordnötter','Kinesiskt','kycklingrätt',30,
 {chicken:160,pepper:120,peanuts:25,garlic:4,ginger:6,chili:.7,soy:12,ricevinegar:10,sugar:5,cornstarch:6,rice:75,oil:10},
 ['Koka riset. Skär kyckling och paprika i jämnstora bitar. Blanda kycklingen med hälften av stärkelsen.','Blanda soja, vinäger, socker, resten av stärkelsen och 50 ml vatten per portion.','Stek kycklingen i oljan i cirka 7–9 minuter tills genomstekt. Tillsätt paprika, vitlök, ingefära och chili och stek 3 minuter till.','Häll på såsen och låt koka 1–2 minuter tills blank. Vänd ner jordnötterna och servera med riset.'],{mood:'spicy'});
d('sesamnudlar','Kalla sesamnudlar med gurka och tofu','Kinesiskt','nudlar',25,
 {noodles:85,tofu:150,cucumber:140,tahini:20,soy:12,ricevinegar:10,sesameoil:5,garlic:2,oil:5,springonion:20},
 ['Tillaga nudlarna enligt förpackningen, skölj kallt och låt rinna av.','Tärna och torka tofun. Stek i oljan tills gyllene på flera sidor. Låt svalna.','Vispa tahini med soja, vinäger, sesamolja och finriven vitlök. Späd med kallt vatten till en krämig dressing.','Strimla gurkan och skiva salladslöken. Blanda med nudlar, tofu och dressing.'],{mood:'healthy'});
d('satay','Kycklingsatay med jordnötssås och ris','Indonesiskt','grillrätt',40,
 {chicken:170,rice:70,peanutButter:30,coconut:70,soy:12,lime:.4,curryPowder:1,garlic:3,cucumber:100,oil:7},
 ['Koka riset. Strimla kycklingen och blanda med olja, curry, hälften av sojan och vitlöken.','Trä på spett och stek eller grilla 10–12 minuter, vänd ofta och kontrollera att kycklingen är genomstekt.','Sjud jordnötssmör, kokosmjölk och resten av sojan i en kastrull 3 minuter. Späd med vatten och smaka av med lime.','Servera spetten med ris, sås och skivad gurka.']);
d('bao','Ångade bao med långkokt fläsk','Kinesiskt','brödrätt',210,
 {porkShoulder:180,flour:100,yeast:2,sugar:8,oil:8,soy:15,ginger:8,garlic:4,cucumber:80,redcabbage:70,ricevinegar:10},
 ['Blanda mjöl, jäst, hälften av sockret, hälften av oljan och 60 ml ljummet vatten per portion. Knåda och låt jäsa övertäckt cirka 1 timme.','Lägg fläsket i gryta med soja, ingefära, vitlök, resten av sockret och vatten så att det nästan täcker. Sjud under lock cirka 2–2,5 timmar tills köttet går att dra isär. Fyll på vatten vid behov.','Dela degen till små bitar, kavla ovala, pensla med resterande olja och vik. Låt jäsa 20 minuter på små bakplåtspapper.','Ånga bröden i omgångar 10–12 minuter över sjudande vatten. Blanda strimlad kål och gurka med vinäger.','Dra isär köttet och vänd i lite av den reducerade kokvätskan. Fyll bao med kött och grönsaker.']);
d('aloogobi','Aloo gobi med blomkål och potatis','Indiskt','vegetariskt',40,
 {potato:220,cauliflower:220,onion:50,tomatoes:100,ginger:8,garlic:4,cumin:1,turmeric:.5,garam:1,oil:12,yogurt:60,coriander:5},
 ['Tärna potatisen i 1 cm stora bitar och dela blomkålen i små buketter. Förkoka potatisen 5 minuter och häll av.','Fräs hackad lök i oljan. Tillsätt ingefära, vitlök, spiskummin och gurkmeja och fräs 30 sekunder.','Lägg i potatis, blomkål och tomater. Tillsätt 50 ml vatten per portion och sjud under lock cirka 15 minuter tills allt är mjukt.','Ta av locket och låt vätskan ånga bort. Vänd ner garam masala och koriander. Servera med yoghurt.'],{mood:'healthy'});
d('palakpaneer','Palak paneer med ris','Indiskt','vegetariskt',35,
 {paneer:130,spinach:180,onion:50,garlic:4,ginger:6,garam:1,cumin:1,cream:35,rice:70,oil:10},
 ['Koka riset. Tina spenaten och låt rinna av.','Stek hackad lök, vitlök och ingefära i hälften av oljan. Tillsätt spiskummin och garam masala och fräs kort.','Lägg i spenaten, grädden och lite vatten. Sjud 5 minuter och mixa till en tjock grön sås.','Tärna paneer och stek gyllene i resten av oljan. Vänd ner i såsen och värm 2 minuter. Servera med riset.']);
d('tandoori','Tandoorikyckling med gurkraita och ris','Indiskt','kycklingrätt',50,
 {chicken:180,yogurt:120,garam:2,paprikaPowder:1,turmeric:.5,garlic:4,ginger:8,lemon:.3,cucumber:100,mint:5,rice:70,oil:5},
 ['Blanda hälften av yoghurten med kryddor, vitlök, ingefära, olja och citron. Vänd ner kycklingen och låt marinera minst 20 minuter; längre marinering sker i kyl.','Sätt ugnen på 225 °C. Lägg kycklingen i en form och tillaga cirka 20–25 minuter tills genomstekt, minst 70 °C i mitten.','Koka riset. Riv och krama ur gurkan och blanda med resterande yoghurt och mynta.','Servera kycklingen med ris och kall raita.']);
d('samosa','Ugnsbakade samosas med potatis och ärtor','Indiskt','vegetariskt',65,
 {phyllo:80,potato:220,peas:80,onion:40,cumin:1,garam:1,chili:.3,oil:15,yogurt:60,mint:5},
 ['Koka tärnad potatis mjuk och häll av. Fräs lök och kryddor i en tredjedel av oljan. Vänd ner potatis och ärtor och mosa lätt. Låt svalna.','Sätt ugnen på 200 °C. Skär filodegen i breda remsor och håll de oanvända arken täckta så att de inte torkar.','Lägg fyllning i ena änden av varje remsa och vik upprepade gånger till täta trianglar. Pensla med resten av oljan.','Baka 20–25 minuter tills gyllene. Servera med yoghurt blandad med mynta.']);
d('fishchips','Fish and chips med ärtmos','Brittiskt','fiskrätt',50,
 {cod:180,potato:280,flour:35,bakingpowder:1,oil:25,peas:120,butter:8,lemon:.3},
 ['Sätt ugnen på 225 °C. Skär potatisen i stavar, blanda med en tredjedel av oljan och rosta 30–35 minuter.','Vispa mjöl, bakpulver och lite salt med kallt vatten till en tjock smet som täcker baksidan av en sked.','Torka fisken och doppa i smeten. Stek i resten av oljan i en panna på medelhög värme cirka 4–5 minuter per sida, tills fisken är genomlagad och paneringen frasig.','Koka ärtorna och mosa med smör och lite citron. Servera genast med fisk och potatis.'],{lunchbox:false});
d('shepherdspie','Shepherd’s pie med lamm och potatistäcke','Brittiskt','gratäng',65,
 {lamb:150,potato:280,carrot:80,peas:60,onion:50,tomatoPaste:15,stock:2,milk:50,butter:12,thyme:.5},
 ['Sätt ugnen på 200 °C. Koka potatisen mjuk och mosa med mjölk och smör.','Bryn lammfärsen med hackad lök och fintärnad morot tills färsen är genomstekt.','Tillsätt tomatpuré, timjan, buljong och 100 ml vatten per portion. Sjud cirka 10 minuter. Rör ner ärtorna.','Lägg färsröran i en form och täck med mos. Räffla ytan med gaffel och grädda 20–25 minuter tills den fått färg.']);
d('chickenpie','Kycklingpaj med smördegslock','Brittiskt','paj',55,
 {chicken:160,mushroom:100,leek:70,peas:60,cream:60,stock:2,flour:10,butter:10,puff:85,egg:.25},
 ['Sätt ugnen på 200 °C. Skär kycklingen i små bitar och bryn i smöret tills genomstekt.','Tillsätt skivad svamp och purjolök och stek 5 minuter. Rör i mjölet och späd med grädde och 80 ml vatten per portion. Tillsätt buljong och sjud 5 minuter.','Vänd ner ärtor och häll i en ugnsform. Lägg smördeg över som lock, tryck fast kanterna och skär små ånghål.','Pensla med ägg och baka 20–25 minuter tills locket är frasigt och fyllningen bubblar.']);
d('croque','Croque monsieur med grönsallad','Franskt','smörgås',30,
 {sourdough:120,ham:70,cheese:50,milk:80,flour:8,butter:10,mustard:8,lettuce:80,cucumber:70},
 ['Sätt ugnen på 225 °C. Smält smöret, vispa ner mjölet och späd med mjölk. Sjud till en tjock sås i 3 minuter.','Bred senap på hälften av brödskivorna. Lägg på skinka och hälften av osten och täck med resten av brödet.','Bred mjölksåsen ovanpå och toppa med resterande ost. Gratinera cirka 10 minuter tills gyllene.','Servera direkt med sallad och skivad gurka.'],{lunchbox:false});
d('galette','Bovetegalette med ägg, ost och svamp','Franskt','pannkaka',35,
 {buckwheat:70,egg:1,mushroom:150,cheese:35,butter:12,parsley:5},
 ['Vispa bovetemjöl och lite salt med 170 ml vatten per portion till en tunn smet. Låt vila 10 minuter.','Skiva svampen och stek i hälften av smöret tills vätskan kokat bort och svampen fått färg.','Stek en stor tunn galette i resten av smöret. När ovansidan nästan stannat, knäck ägget i mitten och fördela ost och svamp runtom.','Vik in kanterna och stek under lock tills äggvitan stelnat. Toppa med persilja och servera direkt.'],{lunchbox:false});
d('quiche','Quiche lorraine','Franskt','paj',75,
 {flour:65,butter:30,bacon:60,egg:1,cream:65,milk:45,cheese:25,leek:40},
 ['Nyp ihop mjöl och smör och tillsätt lite kallt vatten till en deg. Tryck ut i en pajform och kyl 15 minuter. Sätt ugnen på 200 °C.','Nagga botten och förgrädda 10 minuter. Stek bacon och skivad purjolök och fördela i pajskalet.','Vispa ihop ägg, grädde, mjölk, ost och peppar. Salta försiktigt eftersom baconet är salt.','Häll i skalet och grädda cirka 25–30 minuter tills fyllningen stelnat. Låt vila 10 minuter.']);
d('ratatouille','Ratatouille med vita bönor och bröd','Medelhavet','vegetariskt',50,
 {eggplant:100,zucchini:100,pepper:100,onion:60,tomatoes:180,garlic:4,thyme:.5,whitebeans:150,oil:15,bread:70},
 ['Skär grönsakerna i jämnstora bitar. Stek aubergine i hälften av oljan i cirka 8 minuter och lägg åt sidan.','Stek lök, paprika och zucchini i resten av oljan tills de börjat mjukna. Tillsätt vitlök och timjan.','Vänd tillbaka auberginen och häll i tomaterna. Sjud under lock 20 minuter tills alla grönsaker är mjuka.','Vänd ner avrunna bönor och värm 5 minuter. Smaka av och servera med brödet.'],{mood:'healthy',easy:true});
d('nicoise','Sallad niçoise med tonfisk och ägg','Medelhavet','sallad',35,
 {tuna:130,egg:1,potato:200,greenbeans:100,freshTomato:100,lettuce:60,olives:25,mustard:5,oil:12,vinegar:10},
 ['Koka potatisen mjuk och dela i bitar. Koka ägget cirka 8 minuter, kyl och skala.','Koka bönorna enligt förpackningen och kyl kort i kallt vatten så att de behåller spänsten.','Vispa senap, vinäger och olja till en dressing.','Lägg sallad, potatis, bönor, tomat, avrunnen tonfisk, ägg och oliver på tallrikar och ringla över dressingen.'],{mood:'healthy',lunchbox:false});
d('loksoppa','Fransk löksoppa med ostgratinerat bröd','Franskt','soppa',70,
 {onion:300,butter:15,thyme:.5,stock:4,whitewine:50,sourdough:80,cheese:45},
 ['Skiva löken tunt. Stek långsamt i smöret på medellåg värme 30–40 minuter tills djupt gyllene. Rör ofta och tillsätt lite vatten om löken fastnar.','Tillsätt timjan och matlagningsvin och låt koka in någon minut. Häll i buljongpulver och 300 ml vatten per portion.','Sjud ytterligare 15 minuter och smaka av.','Rosta brödet, täck med ost och gratinera under ugnens grill tills osten bubblar. Lägg brödet på soppan vid servering.']);
d('coqauvin','Coq au vin med svamp och potatis','Franskt','gryta',85,
 {chicken:180,bacon:35,mushroom:130,onion:70,carrot:80,redwine:100,stock:2,thyme:.5,bay:.1,flour:8,potato:230},
 ['Stek bacon i bitar och lägg åt sidan. Bryn kycklingen i samma gryta.','Tillsätt lök, morot och svamp i grova bitar och stek 5 minuter. Strö över mjölet och rör om.','Häll i alkoholfritt matlagningsvin, buljong, timjan, lagerblad och vatten så att det nästan täcker.','Sjud under lock i 35–45 minuter tills kycklingen är genomstekt. Ta av locket de sista 10 minuterna om såsen behöver tjockna.','Koka potatisen separat. Ta bort lagerbladet, vänd ner bacon och servera.']);
d('paella','Paella med räkor, musslor och saffran','Medelhavet','risrätt',45,
 {risottoRice:85,shrimp:90,mussels:90,pepper:80,peas:60,onion:40,garlic:4,tomatoes:100,saffron:.1,stock:3,oil:10,lemon:.3},
 ['Fräs hackad lök och paprika i oljan i en bred panna. Tillsätt vitlök och tomater och sjud 5 minuter.','Rör ner ris och saffran. Tillsätt buljong och 280 ml hett vatten per portion.','Sjud utan lock på låg värme cirka 18–22 minuter utan att röra runt. Tillsätt lite mer hett vatten om riset fortfarande är hårt när vätskan kokat in.','Fördela ärtor och de redan kokta, tinade räkorna och musslorna över riset de sista 3 minuterna. Låt allt bli genomvarmt.','Ta från värmen och låt vila 5 minuter under lock eller folie. Servera med citron.']);
d('bacalao','Tomatbakad torsk med potatis och oliver','Medelhavet','fiskrätt',55,
 {cod:180,potato:250,onion:70,pepper:100,tomatoes:180,olives:30,garlic:4,oil:12,parsley:5},
 ['Sätt ugnen på 200 °C. Skiva potatisen 5 mm tunt och förkoka 7 minuter.','Fräs lök och paprika i oljan. Tillsätt vitlök och tomater och sjud 10 minuter.','Lägg potatis och hälften av såsen i en form. Lägg torsken ovanpå och täck med resterande sås och oliver.','Baka cirka 20 minuter tills fisken är genomlagad och potatisen mjuk. Strö över persilja.']);
d('gazpacho','Gazpacho med vitlöksbröd','Medelhavet','soppa',25,
 {freshTomato:350,cucumber:150,pepper:100,redonion:25,garlic:4,oil:18,vinegar:12,sourdough:100},
 ['Mixa tomat, gurka, paprika, rödlök, hälften av vitlöken och en fjärdedel av brödet till en slät soppa.','Mixa ner två tredjedelar av oljan och vinägern. Späd med kallt vatten till önskad konsistens och smaka av.','Kyl soppan gärna 30 minuter utöver arbetstiden.','Gnid resterande bröd med resten av vitlöken, pensla med oljan och rosta i panna. Servera till den kalla soppan.'],{mood:'healthy',easy:true});
d('gulasch','Ungersk gulaschsoppa med potatis','Östeuropeiskt','soppa',140,
 {stewbeef:160,potato:200,pepper:120,onion:80,smokedpaprika:3,tomatoPaste:15,garlic:4,stock:3,oil:10},
 ['Bryn köttet i oljan. Tillsätt hackad lök och stek tills mjuk.','Ta grytan kort från värmen och rör ner paprikapulver, vitlök och tomatpuré så att pulvret inte bränns.','Tillsätt buljong och 400 ml vatten per portion. Sjud under lock cirka 1,5 timme tills köttet börjar bli mört.','Lägg i tärnad potatis och paprika och sjud ytterligare 20–25 minuter tills allt är mjukt. Späd och smaka av.']);
d('schnitzel','Schnitzel med citron och potatissallad','Nordiskt','kötträtt',40,
 {pork:170,flour:15,egg:.5,breadcrumbs:30,oil:18,potato:230,mustard:5,vinegar:10,redonion:25,parsley:5,lemon:.3},
 ['Koka potatisen och skiva medan den är ljummen. Blanda med senap, vinäger, en tredjedel av oljan, hackad rödlök och persilja.','Skär köttet i skivor och banka tunt mellan bakplåtspapper. Vänd i mjöl, uppvispat ägg och ströbröd.','Stek i resterande olja på medelhög värme cirka 3–4 minuter per sida tills köttet är genomstekt och paneringen frasig.','Servera genast med citron och potatissallad.'],{lunchbox:false});
d('pierogi','Pierogi med potatis, ost och stekt lök','Östeuropeiskt','dumplings',70,
 {flour:100,egg:.25,potato:180,cheese:40,onion:80,butter:15,sourcream:40},
 ['Blanda mjöl, ägg och cirka 45 ml ljummet vatten per portion till en mjuk deg. Knåda och låt vila övertäckt 20 minuter.','Koka potatisen mjuk och mosa med osten. Smaka av och låt svalna.','Kavla degen tunt, stansa cirklar och fyll med lite potatisröra. Fukta kanterna och nyp ihop till täta halvmånar.','Sjud i lättsaltat vatten i omgångar. När de flyter upp, sjud 2–3 minuter till.','Stek skivad lök långsamt i smöret och vänd ner de kokta pirogerna kort. Servera med crème fraiche.']);
d('borsjt','Borsjt med rödbetor och vita bönor','Östeuropeiskt','soppa',55,
 {beets:220,cabbage:100,potato:100,whitebeans:140,carrot:60,onion:40,tomatoPaste:15,stock:3,vinegar:12,oil:8,sourcream:35,dill:5},
 ['Skala och riv rödbetor och morot grovt. Hacka löken och fräs allt i oljan 5 minuter.','Rör ner tomatpuré. Tillsätt strimlad kål, tärnad potatis, buljong och 350 ml vatten per portion.','Sjud 25–30 minuter tills grönsakerna är mjuka. Vänd ner avrunna bönor och värm 5 minuter.','Smaka av med vinäger och salt och servera med crème fraiche och dill.'],{mood:'healthy',easy:true});
d('hamburgare','Hamburgare med cheddar och ugnspotatis','Amerikanskt','burgare',45,
 {beef:160,burgerbun:1,cheese:25,potato:200,lettuce:30,freshTomato:50,pickles:25,mayo:20,mustard:5,oil:8},
 ['Sätt ugnen på 225 °C. Skär potatisen i klyftor, blanda med oljan och rosta 30–35 minuter.','Forma färsen löst till burgare utan att arbeta den för mycket. Salta och peppra utanpå.','Stek burgarna i het panna och sänk sedan värmen. Tillaga tills färsen är genomstekt. Lägg på osten sista minuten.','Rosta bröden och fyll med majonnäs, senap, sallad, tomat, burgare och gurka. Servera med potatisen.'],{lunchbox:false});
d('raklime','Limeräkor med avokado och krispiga tortillas','Mexikanskt','sallad',25,
 {shrimp:180,avocado:90,cucumber:100,freshTomato:100,redonion:25,lime:.5,coriander:8,chili:.4,tortillas:2,oil:8},
 ['Låt de färdigkokta räkorna tina i kyl om de är frysta och låt rinna av.','Tärna gurka, tomat och avokado. Finhacka rödlök och koriander och blanda med räkor, chili och lime.','Klipp tortillabröden i trianglar och pensla tunt med oljan. Rosta i 200 °C cirka 7–10 minuter tills krispiga.','Smaka av räksalladen och servera genast med tortillachipsen. Lime används för smaken; räkorna ska redan vara tillagade.'],{mood:'healthy',lunchbox:false});
d('bakpotatis','Bakpotatis med skagenröra','Nordiskt','potatisrätt',80,
 {potato:350,shrimp:140,mayo:25,sourcream:35,dill:8,lemon:.3,redonion:20},
 ['Sätt ugnen på 225 °C. Tvätta stora potatisar, stick några hål med gaffel och baka 60–75 minuter tills helt mjuka.','Låt räkorna rinna av noga och grovhacka hälften. Finhacka rödlök och dill.','Blanda räkor, lök och dill med majonnäs, crème fraiche och citron. Förvara kallt tills potatisen är klar.','Skär ett kryss i potatisen och tryck upp den. Fyll med skagenröran och servera.']);
d('grekisksallad','Grekisk sallad med feta, oliver och bröd','Medelhavet','sallad',20,
 {freshTomato:200,cucumber:150,pepper:80,redonion:30,feta:100,olives:40,oil:12,oregano:.5,vinegar:10,sourdough:80},
 ['Skär tomat och gurka i grova bitar och strimla paprika och rödlök.','Vispa olja, vinäger, oregano och lite svartpeppar. Salta försiktigt eftersom feta och oliver bidrar med sälta.','Vänd grönsakerna med dressingen och lägg på fetaost och oliver.','Servera med surdegsbrödet och använd det gärna till dressingen i botten av skålen.'],{mood:'healthy',easy:true,lunchbox:false});

export function buildCuratedRecipes(products){return rows.map(r=>({...r,active:Math.min(r.time,35),family:r.id,origin:'Matplaneraren',tested:false,nutritionEstimated:true,kcal:Math.round(Object.entries(r.ingredients).reduce((sum,[id,q])=>sum+q*products[id].kcalPerUnit,0)/5)*5}));}
