// Redigerat urval: en vald rätt per tillagningsfamilj, inga automatiska korsprodukter.
// Inga instruktioner eller bilder är importerade. Recepten är inte provlagade.
// Mängder per portion; förpackningspriser och energivärden är uppskattningar.
const P=(name,size,price,kcal,group='Skafferi',allergens=[],unit='g')=>({name,size,price,kcalPerUnit:kcal/(unit==='st'?1:100),group,allergens,unit});
export const extraProducts={
 salt:P('Salt',1000,1290,0), blackpepper:P('Svartpeppar',40,2290,250),
 cumin:P('Spiskummin',35,2190,375), paprikaPowder:P('Rökt paprikapulver',40,2490,282),
 curryPowder:P('Currypulver',35,2190,320), turmeric:P('Gurkmeja',35,2190,310),
 garam:P('Garam masala',35,2490,350), oregano:P('Torkad oregano',10,1990,265),
 thyme:P('Torkad timjan',15,1990,276), chili:P('Chiliflakes',30,2490,318),
 cinnamon:P('Malen kanel',40,1990,247),
 tomatoPaste:P('Tomatpuré',200,1990,82),
 blackbeans:P('Svarta bönor, kokta och avrunna',230,1490,110),
 kidneybeans:P('Kidneybönor, kokta och avrunna',230,1390,110),
 whitebeans:P('Vita bönor, kokta och avrunna',230,1390,100),
 greenlentils:P('Gröna linser, kokta och avrunna',230,1590,110),
 couscous:P('Couscous',500,2390,360,'Skafferi',['Gluten']),
 bulgur:P('Bulgur',500,2490,342,'Skafferi',['Gluten']),
 risottoRice:P('Risottoris',500,3290,355),
 noodles:P('Risnudlar',250,2490,360),
 gnocchi:P('Potatisgnocchi',500,2990,150,'Skafferi',['Gluten']),
 lasagna:P('Torra lasagneplattor',500,2490,350,'Skafferi',['Gluten']),
 flour:P('Vetemjöl',1000,1790,350,'Skafferi',['Gluten']),
 bread:P('Fullkornsbröd',500,2790,240,'Bröd',['Gluten']),
 sesame:P('Sesamfrön',200,2490,573,'Skafferi',['Sesam']),
 peanutButter:P('Jordnötssmör',350,3490,600,'Skafferi',['Jordnötter']),
 tahini:P('Tahini',300,3990,595,'Skafferi',['Sesam']),
 vinegar:P('Äppelcidervinäger',500,2290,20,'Skafferi',[],'ml'),
 honey:P('Honung',350,3490,304),
 mustard:P('Dijonsenap',200,2490,150,'Skafferi',['Senap']),
 stock:P('Grönsaksbuljongpulver',100,2490,180,'Skafferi',['Selleri']),
 beef:P('Nötfärs',500,5990,190,'Kött, fisk & vegetariskt'),
 turkey:P('Kalkonfilé',500,6490,110,'Kött, fisk & vegetariskt'),
 pork:P('Fläskytterfilé',600,6990,120,'Kött, fisk & vegetariskt'),
 cod:P('Torskfilé',400,6490,82,'Kött, fisk & vegetariskt',['Fisk']),
 shrimp:P('Skalade räkor, kokta',250,5990,85,'Kött, fisk & vegetariskt',['Skaldjur']),
 tuna:P('Tonfisk i vatten, avrunnen',150,2190,110,'Kött, fisk & vegetariskt',['Fisk']),
 halloumi:P('Halloumi',200,3290,310,'Mejeri & ägg',['Mjölk']),
 yogurt:P('Grekisk yoghurt',500,2990,100,'Mejeri & ägg',['Mjölk']),
 mozzarella:P('Mozzarella, avrunnen',125,1790,240,'Mejeri & ägg',['Mjölk']),
 parmesan:P('Parmesan',150,3990,400,'Mejeri & ägg',['Mjölk']),
 cheese:P('Riven ost',150,2490,350,'Mejeri & ägg',['Mjölk']),
 milk:P('Mjölk',1000,1590,50,'Mejeri & ägg',['Mjölk'], 'ml'),
 butter:P('Smör',500,5490,740,'Mejeri & ägg',['Mjölk']),
 zucchini:P('Zucchini',300,1790,17,'Frukt & grönt'),
 eggplant:P('Aubergine',300,2290,25,'Frukt & grönt'),
 mushroom:P('Champinjoner',250,2290,22,'Frukt & grönt'),
 cauliflower:P('Blomkål',700,2990,25,'Frukt & grönt'),
 sweetpotato:P('Sötpotatis',500,2490,86,'Frukt & grönt'),
 cabbage:P('Vitkål',1000,1690,25,'Frukt & grönt'),
 redcabbage:P('Rödkål',1000,1990,31,'Frukt & grönt'),
 leek:P('Purjolök',250,1590,30,'Frukt & grönt'),
 celery:P('Stjälkselleri',400,1990,16,'Frukt & grönt',['Selleri']),
 freshTomato:P('Tomat',500,2490,18,'Frukt & grönt'),
 cucumber:P('Gurka',300,1290,15,'Frukt & grönt'),
 redonion:P('Rödlök',500,1490,40,'Frukt & grönt'),
 lime:P('Lime',1,590,15,'Frukt & grönt',[],'st'),
 ginger:P('Ingefära',100,1290,80,'Frukt & grönt'),
 parsley:P('Färsk persilja',20,1690,36,'Frukt & grönt'),
 basil:P('Färsk basilika',20,1990,23,'Frukt & grönt'),
 coriander:P('Färsk koriander',20,1690,23,'Frukt & grönt'),
 dill:P('Färsk dill',20,1690,43,'Frukt & grönt'),
 springonion:P('Salladslök',100,1490,32,'Frukt & grönt'),
 corn:P('Majs, avrunnen',150,1290,86),
 greenbeans:P('Frysta haricots verts',500,2490,31,'Frys'),
 edamame:P('Frysta skalade edamamebönor',500,3490,122,'Frys',['Soja']),
};
export const legacyEnergy={rice:3.55,pasta:3.55,lentils:3.45,beans:1.2,tomatoes:.25,coconut:1.8,oil:8.1,soy:.6,spice:3,onion:.4,carrot:.4,potato:.77,broccoli:.34,pepper:.3,garlic:1.4,lemon:17,spinach:.25,peas:.75,chicken:1.1,salmon:2,tofu:1.3,egg:75,cream:1.5,feta:2.65,tortillas:140};
const merge=(...parts)=>{const out={};for(const part of parts)for(const [id,q]of Object.entries(part))out[id]=(out[id]??0)+q;return out;};
const mains={
 chicken:{label:'kyckling',qty:150,prep:'Skär kycklingen i cirka 2 cm stora bitar. Stek i hälften av oljan på medelhög värme i cirka 8–10 minuter. Kontrollera att den är genomstekt, gärna med termometer: minst 70 °C i största bitens mitt.'},
 turkey:{label:'kalkon',qty:150,prep:'Skär kalkonen i cirka 2 cm stora bitar. Stek i hälften av oljan på medelhög värme i cirka 8–10 minuter, tills den är genomstekt och minst 70 °C i mitten.'},
 pork:{label:'fläskytterfilé',qty:150,prep:'Putsa fläskytterfilén, skär i tunna strimlor och stek i hälften av oljan i cirka 6–8 minuter. Kontrollera att köttet är genomstekt.'},
 beef:{label:'nötfärs',qty:140,prep:'Bryn nötfärsen i hälften av oljan i cirka 7–9 minuter. Finfördela med en stekspade och stek tills färsen är genomstekt.'},
 salmon:{label:'lax',qty:150,prep:'Ta bort eventuella ben från laxen och dela i stora bitar. Stek varsamt i hälften av oljan i cirka 6–8 minuter, tills fisken är genomlagad och lätt delar sig. Lägg åt sidan och vänd ner försiktigt sist.'},
 cod:{label:'torsk',qty:160,prep:'Kontrollera att torsken är benfri. Dela i stora bitar och stek varsamt i hälften av oljan i cirka 5–7 minuter tills fisken är genomlagad och delar sig lätt. Lägg åt sidan och vänd ner försiktigt sist.'},
 shrimp:{label:'räkor',qty:130,prep:'Låt de kokta räkorna tina i kylskåp om de är frysta och låt rinna av. De är redan tillagade och ska bara vändas ner under rättens sista minut. Använd all olja till grönsakerna.'},
 tuna:{label:'tonfisk',qty:130,prep:'Låt tonfisken rinna av. Dela i stora bitar och spara till slutet; den är redan tillagad och behöver bara bli varm. Använd all olja till grönsakerna.'},
 tofu:{label:'tofu',qty:180,prep:'Torka tofun med hushållspapper och skär i cirka 2 cm stora tärningar. Stek i hälften av oljan i cirka 8–10 minuter, vänd några gånger så att flera sidor får färg.'},
 halloumi:{label:'halloumi',qty:100,prep:'Torka halloumin och tärna. Stek i hälften av oljan på medelhög värme i cirka 4–6 minuter, tills ytorna är gyllene. Lägg åt sidan och tillsätt vid servering.'},
 beans:{label:'kikärtor',qty:160,prep:'Skölj de kokta kikärtorna i ett durkslag och låt dem rinna av. De är färdigkokta och värms med rätten på slutet. Använd all olja till grönsakerna.'},
 whitebeans:{label:'vita bönor',qty:170,prep:'Skölj de kokta vita bönorna och låt dem rinna av. Tillsätt under de sista 5 minuterna så att de blir varma utan att koka sönder. Använd all olja till grönsakerna.'},
 blackbeans:{label:'svarta bönor',qty:170,prep:'Skölj de kokta svarta bönorna och låt dem rinna av. Värm dem i rätten under de sista 5 minuterna. Använd all olja till grönsakerna.'},
 kidneybeans:{label:'kidneybönor',qty:170,prep:'Skölj de färdigkokta kidneybönorna och låt rinna av. Tillsätt mot slutet och värm igenom i cirka 5 minuter. Använd all olja till grönsakerna.'},
 greenlentils:{label:'gröna linser',qty:180,prep:'Skölj de färdigkokta gröna linserna och låt rinna av. Värm försiktigt i rätten de sista 5 minuterna. Använd all olja till grönsakerna.'},
};
const profile=(label,veg,season,finish,extra={})=>({label,veg,season,finish,...extra});
const profiles={
 italian:[
  profile('zucchini och basilika',{zucchini:130},{basil:5,lemon:.15},'Vänd ner strimlad basilika och finrivet citronskal. Smaka av med lite citronsaft.'),
  profile('svamp och timjan',{mushroom:130},{thyme:.5,parsley:5},'Strö över hackad persilja. Timjan får fräsa med löken.',{early:['thyme']}),
  profile('paprika och oregano',{pepper:120},{oregano:.5,lemon:.15},'Smaka av med citronsaft. Låt oregano fräsa med löken.',{early:['oregano']}),
  profile('broccoli och citron',{broccoli:130},{lemon:.25,parsley:5},'Vänd ner hackad persilja och finrivet citronskal. Smaka av med citronsaft.'),
  profile('spenat och tomat',{freshTomato:90,spinach:60},{basil:5},'Vänd ner basilikan sist så att den behåller sin arom.'),
 ],
 asian:[
  profile('broccoli och ingefära',{broccoli:140},{ginger:8,lime:.25},'Smaka av med lime. Finriven ingefära får fräsa med löken.',{early:['ginger']}),
  profile('morot och sesam',{carrot:90,cabbage:80},{sesame:5,lime:.25},'Strö sesamfrön över maten och pressa över lime.'),
  profile('paprika och salladslök',{pepper:100,greenbeans:60},{springonion:15,lime:.25},'Toppa med tunt skivad salladslök och pressa över lime.'),
  profile('svamp och koriander',{mushroom:120,spinach:40},{coriander:5,ginger:6},'Strö över hackad koriander. Finriven ingefära får fräsa med löken.',{early:['ginger']}),
  profile('blomkål och ärtor',{cauliflower:130,peas:60},{lime:.25,coriander:5},'Vänd ner koriander och smaka av med lime.'),
 ],
 indian:[
  profile('blomkål och ingefära',{cauliflower:150},{ginger:8,lime:.25},'Smaka av med lime. Riven ingefära får fräsa med löken.',{early:['ginger']}),
  profile('spenat och koriander',{spinach:100,freshTomato:70},{coriander:5},'Strö över koriander precis före servering.'),
  profile('morot och lime',{carrot:140},{lime:.25,ginger:6},'Smaka av med lime. Ingefäran får fräsa med löken.',{early:['ginger']}),
  profile('paprika och gröna ärtor',{pepper:110,peas:60},{coriander:5},'Toppa med hackad koriander.'),
  profile('sötpotatis och spenat',{sweetpotato:120,spinach:60},{lime:.25},'Pressa över lime och rör om före servering.'),
 ],
 nordic:[
  profile('purjolök och dill',{leek:120},{dill:5,lemon:.2},'Vänd ner hackad dill och smaka av med citron.'),
  profile('morot och persilja',{carrot:140},{parsley:5,lemon:.2},'Strö över persilja och pressa över citron.'),
  profile('svamp och timjan',{mushroom:140},{thyme:.5,parsley:5},'Toppa med persilja. Timjan får fräsa med löken.',{early:['thyme']}),
  profile('broccoli och citron',{broccoli:140},{lemon:.25,dill:5},'Vänd ner dill och finrivet citronskal. Smaka av med citronsaft.'),
  profile('ärtor och spenat',{peas:100,spinach:60},{parsley:5,lemon:.2},'Smaka av med citron och strö över persilja.'),
 ],
 mexican:[
  profile('paprika och lime',{pepper:140},{lime:.25,coriander:5},'Pressa över lime och toppa med koriander.'),
  profile('majs och koriander',{corn:100,freshTomato:70},{coriander:5,lime:.25},'Vänd ner koriander och smaka av med lime.'),
  profile('zucchini och majs',{zucchini:120,corn:60},{lime:.25},'Pressa över lime strax före servering.'),
  profile('sötpotatis och tomat',{sweetpotato:120,freshTomato:70},{coriander:5,lime:.25},'Strö över koriander och servera med lime.'),
  profile('vitkål och paprika',{cabbage:90,pepper:80},{lime:.25,coriander:5},'Pressa över lime och strö över hackad koriander.'),
 ],
 med:[
  profile('aubergine och persilja',{eggplant:160},{parsley:5,lemon:.2},'Vänd ner persilja och smaka av med citron.'),
  profile('zucchini och citron',{zucchini:160},{lemon:.25,oregano:.5},'Pressa över citron. Oregano får fräsa med löken.',{early:['oregano']}),
  profile('tomat och basilika',{freshTomato:150},{basil:5},'Riv basilikan och vänd ner den sist.'),
  profile('paprika och spiskummin',{pepper:140},{cumin:1,parsley:5},'Strö över persilja. Spiskummin får fräsa med löken.',{early:['cumin']}),
  profile('blomkål och persilja',{cauliflower:160},{parsley:5,lemon:.25},'Toppa med persilja och pressa över citron.'),
 ],
};
const families=[
 {id:'tomatpasta',title:'Tomatpasta',cuisine:'Italienskt',profiles:'italian',mains:['chicken','tuna','whitebeans','tofu'],base:{pasta:85,tomatoes:160,tomatoPaste:10},time:35,active:25,type:'pasta',mood:'comfort',method:'tomato'},
 {id:'graddepasta',title:'Krämig pasta',cuisine:'Italienskt',profiles:'italian',mains:['chicken','salmon','whitebeans','tofu'],base:{pasta:85,cream:65},time:35,active:25,type:'pasta',mood:'comfort',method:'cream'},
 {id:'pastagratang',title:'Pastagratäng',cuisine:'Italienskt',profiles:'italian',mains:['chicken','beef','whitebeans','greenlentils'],base:{pasta:75,tomatoes:170,mozzarella:40},time:65,active:30,type:'gratäng',mood:'comfort',method:'pastaBake'},
 {id:'gnocchipanna',title:'Gnocchipanna',cuisine:'Italienskt',profiles:'italian',mains:['chicken','beans','tofu','halloumi'],base:{gnocchi:180,tomatoes:140},time:35,active:25,type:'pasta',mood:'comfort',method:'gnocchi'},
 {id:'risotto',title:'Risotto',cuisine:'Italienskt',profiles:'italian',mains:['chicken','shrimp','whitebeans','tofu'],base:{risottoRice:85,parmesan:15,stock:3},time:50,active:35,type:'risrätt',mood:'comfort',method:'risotto'},
 {id:'stektris',title:'Stekt ris',cuisine:'Asiatiskt',profiles:'asian',mains:['chicken','shrimp','tofu','edamame'],base:{rice:80,soy:12},time:35,active:25,type:'risrätt',mood:'healthy',method:'friedRice'},
 {id:'nudelwok',title:'Nudelwok',cuisine:'Asiatiskt',profiles:'asian',mains:['chicken','pork','tofu','shrimp'],base:{noodles:80,soy:12,honey:5},time:35,active:25,type:'nudlar',mood:'healthy',method:'noodles'},
 {id:'kokoscurry',title:'Kokoscurry',cuisine:'Asiatiskt',profiles:'asian',mains:['chicken','cod','tofu','beans'],base:{rice:65,coconut:100,curryPowder:2,chili:.3},time:40,active:25,type:'curry',mood:'spicy',method:'coconut'},
 {id:'tomatcurry',title:'Tomatcurry',cuisine:'Indiskt',profiles:'indian',mains:['chicken','beans','tofu','greenlentils'],base:{rice:65,tomatoes:160,yogurt:50,garam:2,turmeric:.5},time:40,active:25,type:'curry',mood:'spicy',method:'curry'},
 {id:'chiligryta',title:'Rökig chiligryta',cuisine:'Mexikanskt',profiles:'mexican',mains:['beef','chicken','blackbeans','kidneybeans'],base:{rice:65,tomatoes:180,tomatoPaste:10,paprikaPowder:1,cumin:1,chili:.4},time:40,active:25,type:'gryta',mood:'spicy',method:'chili'},
 {id:'buljongsoppa',title:'Matig buljongsoppa',cuisine:'Medelhavet',profiles:'med',mains:['chicken','whitebeans','greenlentils','cod'],base:{potato:160,stock:4},time:40,active:25,type:'soppa',mood:'healthy',method:'broth'},
 {id:'potatissoppa',title:'Krämig potatissoppa',cuisine:'Nordiskt',profiles:'nordic',mains:['chicken','salmon','whitebeans','cod'],base:{potato:180,cream:60,stock:3},time:40,active:25,type:'soppa',mood:'comfort',method:'chowder'},
 {id:'platmiddag',title:'Rostad plåtmiddag',cuisine:'Medelhavet',profiles:'med',mains:['chicken','beans','tofu','halloumi'],base:{potato:230,yogurt:60},time:60,active:25,type:'plåtmat',mood:'healthy',method:'tray'},
 {id:'potatisgratang',title:'Matig potatisgratäng',cuisine:'Nordiskt',profiles:'nordic',mains:['chicken','beef','whitebeans','greenlentils'],base:{potato:250,cream:80,milk:50,cheese:25},time:85,active:25,type:'gratäng',mood:'comfort',method:'gratin'},
 {id:'frittata',title:'Ugnsfrittata',cuisine:'Medelhavet',profiles:'med',mains:['chicken','whitebeans','tofu','greenlentils'],base:{egg:2,potato:130,milk:30,feta:25},time:55,active:25,type:'äggrätt',mood:'healthy',method:'frittata'},
 {id:'tacos',title:'Mjuka tacos',cuisine:'Mexikanskt',profiles:'mexican',mains:['beef','chicken','blackbeans','tofu'],base:{tortillas:2,yogurt:45,cumin:1,paprikaPowder:1},time:35,active:25,type:'tacos',mood:'comfort',method:'tacos',lunchbox:false},
 {id:'quesadilla',title:'Quesadilla',cuisine:'Mexikanskt',profiles:'mexican',mains:['chicken','blackbeans','tofu','greenlentils'],base:{tortillas:2,cheese:50,cumin:1,paprikaPowder:1},time:40,active:30,type:'tacos',mood:'comfort',method:'quesadilla'},
 {id:'couscous',title:'Ljummen couscoussallad',cuisine:'Medelhavet',profiles:'med',mains:['chicken','beans','halloumi','greenlentils'],base:{couscous:75,cucumber:80},time:35,active:25,type:'sallad',mood:'healthy',method:'couscous'},
 {id:'bulgurskal',title:'Kryddig bulgurskål',cuisine:'Medelhavet',profiles:'med',mains:['chicken','beans','tofu','halloumi'],base:{bulgur:75,yogurt:60,paprikaPowder:1},time:40,active:25,type:'sallad',mood:'healthy',method:'bulgur'},
 {id:'potatispanna',title:'Potatispanna',cuisine:'Nordiskt',profiles:'nordic',mains:['chicken','pork','tofu','whitebeans'],base:{potato:250,mustard:8,yogurt:50},time:40,active:30,type:'panna',mood:'comfort',method:'skillet'},
 {id:'wrap',title:'Varm wrap',cuisine:'Medelhavet',profiles:'med',mains:['chicken','beans','tofu','halloumi'],base:{tortillas:2,yogurt:60,cucumber:60},time:35,active:25,type:'wrap',mood:'healthy',method:'wrap',lunchbox:false},
 {id:'pilaff',title:'Gyllene rispilaff',cuisine:'Indiskt',profiles:'indian',mains:['chicken','beans','tofu','greenlentils'],base:{rice:80,turmeric:.5,cumin:1,cinnamon:.3,stock:2},time:40,active:25,type:'risrätt',mood:'healthy',method:'pilaf'},
 {id:'nudelsoppa',title:'Ingefärsdoftande nudelsoppa',cuisine:'Asiatiskt',profiles:'asian',mains:['chicken','cod','tofu','shrimp'],base:{noodles:70,soy:10,stock:3,ginger:4},time:35,active:25,type:'soppa',mood:'healthy',method:'noodleSoup'},
 {id:'linsgryta',title:'Kryddig röd linsgryta',cuisine:'Indiskt',profiles:'indian',mains:['chicken','beans','tofu','halloumi'],base:{lentils:65,tomatoes:100,coconut:75,curryPowder:2},time:40,active:25,type:'gryta',mood:'spicy',method:'dal'},
 {id:'lasagne',title:'Lasagne',cuisine:'Italienskt',profiles:'italian',mains:['beef','chicken','whitebeans','greenlentils'],base:{lasagna:65,tomatoes:190,tomatoPaste:10,milk:180,flour:12,butter:12,cheese:25},time:90,active:35,type:'gratäng',mood:'comfort',method:'lasagna'},
];
mains.edamame={label:'edamame',qty:160,prep:'Koka edamamebönorna enligt förpackningens anvisning och låt rinna av. Vänd ner dem på slutet så att de blir varma. Använd all olja till grönsakerna.'};
const names=(ingredients,products)=>Object.keys(ingredients).map(id=>products[id].name.toLocaleLowerCase('sv')).join(', ');
function vegetablePrep(p,products){
 const hard=Object.keys(p.veg).filter(id=>['carrot','sweetpotato','cauliflower'].includes(id));
 const frozen=Object.keys(p.veg).filter(id=>['spinach','peas','greenbeans'].includes(id));
 const soft=Object.keys(p.veg).filter(id=>!hard.includes(id)&&!frozen.includes(id)&&id!=='corn');
 return [hard.length?`Skär ${names(Object.fromEntries(hard.map(id=>[id,1])),products)} i cirka 1 cm stora bitar. Förkoka i lättsaltat vatten cirka 5–8 minuter, tills nästan mjuka. Häll av.`:'',soft.length?`Skär ${names(Object.fromEntries(soft.map(id=>[id,1])),products)} i små bitar.`:'',frozen.length?`Tina ${names(Object.fromEntries(frozen.map(id=>[id,1])),products)} och låt rinna av.`:'',p.veg.corn?'Låt majsen rinna av.':''].filter(Boolean).join(' ');
}
function finishMain(id){return ['shrimp','tuna'].includes(id)?'Vänd ner huvudråvaran under den sista minuten och låt bara bli varm.':id==='halloumi'?'Toppa med den stekta halloumin när rätten är klar.':`Vänd ner den förberedda huvudråvaran och värm försiktigt igenom.${['salmon','cod'].includes(id)?' Vänd varsamt så att fiskbitarna behåller formen.':''}`;}
function instructions(f,p,id,products){
 const early=merge(Object.fromEntries((p.early??[]).map(k=>[k,p.season[k]])),Object.fromEntries(Object.entries(f.base).filter(([k])=>['garam','turmeric','cumin','chili','curryPowder','paprikaPowder','cinnamon'].includes(k))));
 const aromatic=`Finhacka lök och vitlök. Fräs löken i den återstående oljan 3–4 minuter utan att bränna den. Tillsätt vitlök${Object.keys(early).length?`, ${names(early,products)}`:''} och fräs ytterligare 30 sekunder.`;
 const veg=`Tillsätt de förberedda grönsakerna och stek i ${p.veg.eggplant?'10–12':'5–8'} minuter tills de mjuknar.${p.veg.spinach?' Lägg spenaten i pannan de sista 2 minuterna.':''}${p.veg.peas?' Lägg ärtorna i pannan de sista 2 minuterna.':''}`;
 const rice='Koka riset enligt förpackningen. Gör resten under koktiden.';
 const pasta='Koka pastan enligt förpackningen. Spara lite pastavatten innan du häller av.';
 const flavorFinish=p.finish.replace(/[^.]*får fräsa med löken\./g,'').trim();
 const baked=['lasagna','pastaBake','gratin','frittata'].includes(f.method);
 const end=`${baked?flavorFinish.replace(/Vänd ner/g,'Toppa med'):flavorFinish} Smaka av med salt och svartpeppar; tillsätt lite i taget av de angivna mängderna.`;
 const first=[vegetablePrep(p,products),mains[id].prep];
 const done=finishMain(id);
 const water=(n)=>`${n} ml vatten per portion (multiplicera med antalet portioner)`;
 const methods={
  tomato:[pasta,...first,aromatic,veg,'Rör i tomatpuré och krossade tomater. Sjud utan lock i 10 minuter, tills såsen tjocknar.',`${done} Blanda med pastan och späd med pastavatten till önskad konsistens.`,end],
  cream:[pasta,...first,aromatic,veg,'Häll i grädden och sjud 3–4 minuter. Späd med ett par matskedar pastavatten per portion.',`${done} Vänd ner pastan och värm ihop utan kraftig kokning.`,end],
  pastaBake:['Sätt ugnen på 200 °C. Koka pastan 2 minuter kortare än förpackningens tid.',...first,aromatic,veg,'Tillsätt tomaterna och sjud i 8 minuter. Vänd ner huvudråvaran och pastan. Häll i en ugnsform.', 'Riv mozzarellan över och gratinera i 15–20 minuter tills osten smält och formen är genomvarm.',end],
  gnocchi:[...first,aromatic,veg,'Tillsätt krossade tomater och sjud i 8 minuter. Koka under tiden gnocchin enligt förpackningen.',`${done} Vänd ner avrunnen gnocchi och värm ihop.`,end],
  risotto:[...first,aromatic,'Tillsätt risottoriset och fräs i 1 minut. Lös buljongpulvret i hett vatten: börja med '+water(350)+'.','Tillsätt buljongen en slev i taget. Rör ofta och låt varje tillsats nästan koka in. Fortsätt cirka 18–22 minuter tills riset är mjukt med en liten kärna. Tillsätt mer hett vatten om det behövs.','Stek grönsakerna separat i en panna med lite vatten under lock tills de mjuknar. Tillsätt spenat och ärtor sist.',`${done} Vänd ner grönsaker och finriven parmesan. Justera med hett vatten så att risotton blir lös och krämig.`,end],
  friedRice:[rice,...first,aromatic,veg,`${done} Blanda ner det nykokta, väl avrunna riset och sojan. Stek på ganska hög värme 3–4 minuter under omrörning.`,end],
  noodles:['Koka eller blötlägg risnudlarna enligt förpackningen. Skölj kort och låt rinna av.',...first,aromatic,veg,`${done} Blanda soja och honung med 2 matskedar vatten per portion. Vänd ner sås och nudlar och värm ihop i 1–2 minuter.`,end],
  coconut:[rice,...first,aromatic,veg,'Häll i kokosmjölken och '+water(50)+'. Sjud i 7–10 minuter tills grönsakerna är mjuka.',done,end,'Servera curryn med riset.'],
  curry:[rice,...first,aromatic,veg,'Häll i tomaterna och '+water(50)+'. Sjud i 10 minuter.',done,'Ta pannan från värmen. Rör ut yoghurten med lite av den varma såsen och vänd sedan ner den. Låt inte yoghurten stormkoka.',end,'Servera med ris.'],
  chili:[rice,...first,aromatic,veg,'Rör ner tomatpurén och fräs 1 minut. Tillsätt tomaterna och '+water(60)+'. Sjud utan lock i 12–15 minuter. Rör om då och då.',done,end,'Servera med riset.'],
  broth:[...first,'Skala potatisen och skär i 1 cm stora tärningar.',aromatic,'Lägg potatisen i kastrullen. Tillsätt buljongpulver och '+water(350)+'. Koka i cirka 10 minuter tills potatisen nästan är mjuk.','Tillsätt grönsakerna och sjud i ytterligare 5–8 minuter. Spenat och ärtor går i sist. Kontrollera att potatisen är mjuk.',done,end],
  chowder:[...first,'Skala potatisen och skär i 1 cm stora tärningar.',aromatic,'Tillsätt potatis, buljongpulver och '+water(250)+'. Koka i cirka 10 minuter.','Tillsätt grönsaker och grädde. Sjud i 5–8 minuter tills potatis och grönsaker är mjuka. Spenat och ärtor går i sist.',done,end],
  tray:['Sätt ugnen på 225 °C. Tvätta potatisen och skär i 1 cm tjocka klyftor.',...first,'Lägg potatisen på en plåt med bakplåtspapper. Blanda med hälften av den olja som återstår efter stekningen, salt och peppar. Rosta i 15 minuter.',aromatic,'Blanda grönsakerna med löken och lägg på plåten. Rosta ytterligare 15–20 minuter tills potatis och grönsaker är mjuka. Spenat och ärtor tillsätts under de sista 3 minuterna.',done,'Servera med yoghurten som kall sås.',end],
  gratin:['Sätt ugnen på 200 °C. Skala potatisen och skiva den tunt, cirka 2 mm.',...first,aromatic,veg,'Blanda potatis, grönsaker och huvudråvara i en ugnsform. Häll över mjölk och grädde. Täck formen med folie.','Grädda i cirka 30 minuter. Ta av folien, strö över osten och grädda 15–20 minuter till, tills potatisen är helt mjuk. Låt vila 5 minuter.',end],
  frittata:['Sätt ugnen på 200 °C. Tärna potatisen och koka den mjuk i cirka 10 minuter. Häll av.',...first,aromatic,veg,'Vispa ihop ägg, mjölk och smulad fetaost. Lägg potatis, grönsaker och huvudråvara i en ugnsform med bakplåtspapper. Häll äggstanningen över.','Grädda i cirka 20–25 minuter tills äggen har stelnat även i mitten.',end],
  tacos:[...first,aromatic,veg,`${done} Stek ihop fyllningen ytterligare 2 minuter så att den inte är blöt.`,'Värm tortillabröden enligt förpackningen. Fördela fyllningen i bröden och toppa med yoghurt.',end],
  quesadilla:[...first,aromatic,veg,`${done} Låt vätskan ånga bort så att fyllningen är ganska torr.`,'Lägg ost och fyllning på halva varje tortilla. Vik över den andra halvan. Stek i torr panna på medellåg värme i cirka 2–3 minuter per sida, tills osten smält och brödet fått färg. Arbeta i omgångar.',end],
  couscous:['Tillaga couscousen med vatten enligt förpackningen. Fluffa med en gaffel.',...first,aromatic,veg,`${done} Blanda couscousen med den varma fyllningen. Tärna gurkan och vänd ner precis före servering.`,end],
  bulgur:['Koka bulgurn i vatten enligt förpackningen.',...first,aromatic,veg,`${done} Fördela bulgur och fyllning i skålar. Lägg yoghurten som en kall klick vid sidan.`,end],
  skillet:['Tvätta potatisen och skär i 1 cm stora tärningar. Koka mjuk i cirka 10 minuter och låt ånga av.',...first,aromatic,veg,'Lägg grönsaksblandningen åt sidan. Stek potatisen i samma panna i 5–7 minuter tills den får färg. Vänd inte för ofta.',`${done} Vänd tillbaka grönsakerna. Blanda yoghurten med senapen och servera som kall sås.`,end],
  wrap:[...first,aromatic,veg,`${done} Låt fyllningen ånga av någon minut.`,'Tärna gurkan. Värm tortillabröden enligt förpackningen och bred på yoghurten. Fördela fyllning och gurka i bröden, vik in kanterna och rulla ihop.',end],
  pilaf:[...first,aromatic,'Skölj riset. Rör ner i löken och fräs 1 minut. Tillsätt buljongpulver och den vattenmängd som anges på risförpackningen.','Koka under lock på låg värme enligt risförpackningens tid. Stek grönsakerna i en separat panna med lite vatten tills mjuka; spenat och ärtor tillsätts sist.','Låt riset vila 5 minuter från värmen och fluffa sedan med gaffel. '+done+' Vänd ner grönsakerna.',end],
  noodleSoup:['Tillaga risnudlarna enligt förpackningen och låt rinna av.',...first,aromatic,'Tillsätt buljongpulver, soja och '+water(350)+'. Sjud tillsammans med grönsakerna i 5–8 minuter. Spenat och ärtor tillsätts sist.',done,'Fördela nudlarna i djupa skålar och häll soppan över.',end],
  dal:[...first,aromatic,'Skölj de röda linserna. Lägg dem i kastrullen med tomater, kokosmjölk och '+water(180)+'.','Sjud i 15–20 minuter tills linserna är mjuka. Rör om ofta och späd med mer vatten om grytan blir för tjock.','Tillsätt grönsakerna under de sista 5–8 minuterna. Spenat och ärtor tillsätts de sista 2 minuterna.',done,end],
  lasagna:['Sätt ugnen på 200 °C.',...first,aromatic,veg,'Tillsätt tomatpuré och krossade tomater. Sjud i 10 minuter och vänd ner huvudråvaran.','Smält smöret i en separat kastrull. Vispa ner mjölet. Späd lite i taget med mjölken under vispning. Sjud i 3–5 minuter till en slät sås.','Varva tomatfyllning, mjölksås och torra lasagneplattor i en form. Börja med sås och avsluta med mjölksås och riven ost. Plattorna ska täckas av sås.','Grädda i cirka 30–35 minuter eller enligt lasagneplattornas anvisning. Kontrollera att plattorna är mjuka. Låt vila 10 minuter.',end],
 };
 const definite={chicken:'kycklingen',turkey:'kalkonen',pork:'fläskytterfilén',beef:'nötfärsen',salmon:'laxen',cod:'torsken',shrimp:'räkorna',tuna:'tonfisken',tofu:'tofun',halloumi:'halloumin',beans:'kikärtorna',whitebeans:'de vita bönorna',blackbeans:'de svarta bönorna',kidneybeans:'kidneybönorna',greenlentils:'de gröna linserna',edamame:'edamamebönorna'};
 const late=Object.keys(p.veg).filter(k=>['spinach','peas'].includes(k));
 return methods[f.method].map(step=>{
  let text=step.replace(/huvudråvaran/g,definite[id]).replace(/huvudråvara/g,definite[id]);
  if(!late.length)text=text.replace(/ ?[Ss]penat och ärtor[^.]*\./g,'');
  else if(!p.veg.spinach)text=text.replace(/[Ss]penat och ärtor/g,'Ärtor');
  else if(!p.veg.peas)text=text.replace(/[Ss]penat och ärtor/g,'Spenat');
  return text;
 });
}
const selections={
 pastagratang:['chicken',4],gnocchipanna:['halloumi',1],risotto:['whitebeans',1],nudelwok:['pork',2],
 kokoscurry:['chicken',0],tomatcurry:['beans',1],chiligryta:['beef',0],potatissoppa:['cod',0],
 platmiddag:['chicken',0],potatisgratang:['whitebeans',0],quesadilla:['blackbeans',1],couscous:['beans',2],
 potatispanna:['pork',2],wrap:['chicken',3],pilaff:['tofu',0],nudelsoppa:['chicken',0],lasagne:['beef',4],
};
const titles={pastagratang:'Kycklingpastagratäng med spenat och mozzarella',gnocchipanna:'Gnocchi med halloumi och svamp',risotto:'Svamprisotto med vita bönor',nudelwok:'Nudelwok med fläsk, paprika och salladslök',kokoscurry:'Kokoscurry med kyckling och blomkål',tomatcurry:'Kikärtscurry med spenat',chiligryta:'Chili con carne',potatissoppa:'Krämig torsksoppa med purjolök och dill',platmiddag:'Rostad kyckling med aubergine och potatis',potatisgratang:'Potatisgratäng med vita bönor och purjolök',quesadilla:'Quesadilla med svarta bönor och majs',couscous:'Couscoussallad med kikärtor och basilika',potatispanna:'Pyttipanna med fläsk och svamp',wrap:'Kycklingwrap med paprika och yoghurt',pilaff:'Grönsakspilaff med tofu och blomkål',nudelsoppa:'Ingefärsdoftande nudelsoppa med kyckling',lasagne:'Lasagne med nötfärs och béchamel'};
export function buildRecipeBank(products){
 return families.filter(f=>selections[f.id]).map(f=>{
  const [id,i]=selections[f.id],p=profiles[f.profiles][i],main=mains[id];
  const ingredients=merge({onion:40,garlic:3,oil:10,salt:.8,blackpepper:.15},f.base,{[id]:main.qty},p.veg,p.season);
  const kcal=Math.round(Object.entries(ingredients).reduce((sum,[k,q])=>sum+q*products[k].kcalPerUnit,0)/5)*5;
  return {id:`own-${f.id}-${id}-${i+1}`,name:titles[f.id],cuisine:f.cuisine,mood:f.mood,time:f.time+(['eggplant','sweetpotato'].some(k=>k in p.veg)?5:0),active:f.active,kcal,ingredients,steps:instructions(f,p,id,products),lunchbox:f.lunchbox!==false,easy:['tomato','cream','gnocchi','chili','broth','chowder','coconut','curry','dal'].includes(f.method),type:f.type,family:f.id,mainIngredient:id,origin:'Matplaneraren',tested:false,nutritionEstimated:true};
 });
}
