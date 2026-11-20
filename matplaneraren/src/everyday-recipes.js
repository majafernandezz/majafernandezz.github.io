// Vardagsklassiker med egna mängder och instruktioner. Mängder per portion.
const p=(name,size,price,kcal,group='Kött, fisk & vegetariskt',allergens=[],unit='g')=>({name,size,price,kcalPerUnit:kcal/(unit==='st'?1:100),group,allergens,unit});
export const everydayProducts={
 porkTenderloin:p('Fläskfilé',500,8990,110),
 whippingCream:p('Vispgrädde',250,2490,350,'Mejeri & ägg',['Mjölk'], 'ml'),
 kassler:p('Kassler',500,5990,110),
 porkchop:p('Benfri fläskkotlett',500,5990,180),
 beefslice:p('Nötkött i tunna skivor',500,8990,150),
 reindeer:p('Renskav',240,6990,120),
 isterband:p('Isterband',300,3990,260,'Kött, fisk & vegetariskt',['Gluten']),
 hotdog:p('Grillkorv',400,2990,240),
 hotdogbun:p('Korvbröd',8,1990,110,'Bröd',['Gluten'], 'st'),
 banana:p('Banan, ätlig del',120,490,90,'Frukt & grönt'),
 apple:p('Äpple',150,690,52,'Frukt & grönt'),
 pineapple:p('Ananas i juice, avrunnen',230,1790,55,'Skafferi'),
 chilisauce:p('Chilisås av tomat',340,2290,100,'Skafferi'),
 ketchup:p('Ketchup',500,2490,100,'Skafferi'),
 alcoholfreebeer:p('Alkoholfri öl',330,1290,25,'Skafferi',['Gluten'], 'ml'),
};
const rows=[];
function d(id,name,type,time,ingredients,steps,opts={}){rows.push({id:`everyday-${id}`,name,type,time,ingredients:{salt:.5,blackpepper:.1,...ingredients},steps,cuisine:'Nordiskt',mood:'comfort',lunchbox:true,easy:false,...opts});}

d('kycklingcurry','Kyckling i gul currysås med ris','kycklingrätt',30,
 {chicken:170,rice:75,onion:50,curryPowder:2,cream:80,milk:50,stock:1.5,flour:6,oil:8,peas:70},
 ['Koka riset enligt förpackningen. Skär kycklingen i jämnstora bitar och hacka löken.','Bryn kycklingen i oljan. Tillsätt löken och stek 3 minuter. Rör ner curry och mjöl och fräs ytterligare 30 sekunder.','Späd under omrörning med grädde, mjölk och 40 ml vatten per portion. Rör ner buljongpulvret.','Sjud cirka 8–10 minuter tills kycklingen är helt genomstekt, minst 70 °C i största bitens mitt. Rör ner ärtorna sista 2 minuterna och servera med riset.'],{easy:true});
d('kottfarssas','Spaghetti med köttfärssås','pasta',40,
 {pasta:95,beef:150,onion:50,carrot:60,garlic:3,tomatoes:200,tomatoPaste:15,oregano:.5,oil:8,parmesan:15},
 ['Finhacka lök och vitlök och riv moroten. Bryn färsen i oljan tills den är genomstekt och finfördelad.','Lägg i lök och morot och stek 5 minuter. Tillsätt vitlök och tomatpuré och fräs 1 minut.','Häll i tomater och oregano och sjud utan lock i 20 minuter. Rör om och späd med lite vatten om såsen blir för tjock.','Koka pastan enligt förpackningen. Smaka av såsen och servera med pasta och finriven parmesan.'],{cuisine:'Italienskt',easy:true});
d('tacofredag','Tacos med köttfärs och klassiska tillbehör','tacos',25,
 {beef:150,tortillas:2,cumin:1,paprikaPowder:1,oregano:.5,chili:.2,tomatoPaste:10,oil:5,lettuce:40,cucumber:60,freshTomato:70,corn:40,cheese:25,yogurt:40},
 ['Bryn färsen i oljan och finfördela med en stekspade tills färsen är genomstekt.','Rör ner kryddor, tomatpuré och 50 ml vatten per portion. Sjud 5 minuter tills fyllningen är saftig men inte rinnig.','Strimla salladen, tärna gurka och tomat och låt majsen rinna av. Riv osten.','Värm bröden enligt förpackningen och servera färs och tillbehör i separata skålar. Fyll vid bordet.'],{cuisine:'Mexikanskt',lunchbox:false});
d('stuvademakaroner','Stuvade makaroner med stekt falukorv','husmanskost',30,
 {pasta:85,milk:170,flour:8,butter:10,sausage:150,nutmeg:.1,cucumber:80,mustard:8},
 ['Koka makaronerna enligt förpackningen och häll av.','Smält hälften av smöret i en kastrull. Vispa ner mjölet och späd med mjölken lite i taget. Sjud under omrörning i cirka 5 minuter.','Vänd ner makaronerna i stuvningen och smaka av med muskot, salt och peppar. Späd med lite mjölk eller vatten om stuvningen är för tjock.','Skiva korven och stek i resten av smöret tills den fått färg på båda sidor. Servera med makaroner, gurka och senap.']);
d('ugnsfalukorv','Ugnsbakad falukorv med ost och potatismos','husmanskost',45,
 {sausage:170,cheese:30,mustard:10,ketchup:15,onion:40,freshTomato:80,potato:250,milk:60,butter:10},
 ['Sätt ugnen på 200 °C. Koka skalad potatis mjuk, cirka 15–20 minuter.','Lägg korven i en form och skär djupa skåror utan att skära hela vägen igenom. Fyll med skivad tomat och lök.','Bred senap och ketchup över korven och toppa med ost. Baka cirka 25 minuter tills korven är genomvarm och osten fått färg.','Häll av potatisen och mosa med smör och uppvärmd mjölk. Smaka av och servera till korven.']);
d('flygandejakob','Flygande Jakob med ris','gratäng',45,
 {chicken:160,bacon:35,banana:60,cream:80,chilisauce:25,peanuts:20,rice:70,oil:5},
 ['Sätt ugnen på 225 °C. Koka riset enligt förpackningen.','Tärna kycklingen och stek i oljan tills helt genomstekt. Stek baconet i bitar i samma panna och låt rinna av.','Lägg kyckling och skivad banan i en ugnsform. Blanda grädde och chilisås och häll över.','Gratinera cirka 15 minuter tills såsen bubblar. Strö över bacon och jordnötter och servera med ris.']);
d('kasslergratang','Kasslergratäng med ananas och ris','gratäng',40,
 {kassler:160,pineapple:80,cream:75,chilisauce:20,cheese:30,rice:75,broccoli:120},
 ['Sätt ugnen på 225 °C. Koka riset.','Skiva kasslern och lägg omlott i en ugnsform. Låt ananasen rinna av och fördela ovanpå.','Blanda grädde och chilisås och häll över. Toppa med ost och gratinera cirka 20 minuter tills genomvarmt.','Koka broccolin i lättsaltat vatten och servera med gratängen och riset. Smaka innan du saltar eftersom kasslern är salt.']);
d('flaskfile','Fläskfilépanna med champinjonsås och potatis','kötträtt',40,
 {porkTenderloin:180,mushroom:150,onion:40,cream:90,soy:6,mustard:6,potato:250,butter:10,parsley:5},
 ['Koka potatisen mjuk. Putsa köttet och skär i cirka 2 cm tjocka skivor.','Bryn köttet i hälften av smöret cirka 2 minuter per sida och lägg åt sidan.','Stek skivad svamp i samma panna tills vätskan kokat bort. Tillsätt resterande smör och hackad lök och stek 3 minuter.','Häll i grädde, soja, senap och 40 ml vatten per portion. Lägg tillbaka köttet och sjud cirka 6–8 minuter tills köttet är genomstekt.','Strö över persilja och servera med potatisen.']);
d('kotlett','Fläskkotlett med äpple och gräddsås','kötträtt',40,
 {porkchop:180,apple:100,onion:40,cream:75,mustard:6,stock:1.5,potato:250,butter:12},
 ['Koka potatisen. Torka kotletterna och krydda med salt och peppar.','Bryn kotletterna i hälften av smöret cirka 2 minuter per sida och lägg åt sidan.','Klyfta äpplet och skiva löken. Stek i resten av smöret tills löken mjuknat.','Tillsätt grädde, senap, buljong och 50 ml vatten per portion. Lägg tillbaka kotletterna och sjud varsamt tills genomstekta, cirka 8–12 minuter beroende på tjocklek. Servera med potatisen.']);
d('kottfarslimpa','Köttfärslimpa med gräddsås och pressgurka','husmanskost',65,
 {beef:170,breadcrumbs:15,milk:60,egg:.3,onion:30,potato:230,cream:60,soy:5,flour:5,cucumber:100,vinegar:10,sugar:5,butter:5},
 ['Sätt ugnen på 200 °C. Låt ströbrödet svälla i mjölken i 5 minuter. Blanda med färs, ägg, finriven lök, salt och peppar.','Forma en limpa på smord ugnsform och baka cirka 35–45 minuter tills färsen är helt genomstekt. Låt vila 5 minuter.','Skiva gurkan tunt. Blanda med vinäger, socker, lite salt och 20 ml vatten per portion. Lägg en liten tallrik ovanpå som press.','Koka potatisen. Vispa mjölet med grädde, soja och 60 ml vatten per portion. Sjud under omrörning 5 minuter och smaka av. Servera till skivad limpa och avrunnen gurka.']);
d('pannbiff','Pannbiff med stekt lök och potatis','husmanskost',45,
 {beef:160,breadcrumbs:12,milk:40,egg:.25,onion:130,potato:250,butter:15,stock:1.5,soy:5,flour:5,lingon:20},
 ['Koka potatisen. Låt ströbrödet svälla i mjölken och blanda med färs, ägg, salt och peppar. Forma platta biffar.','Skiva löken och stek långsamt mjuk och gyllene i hälften av smöret i cirka 15 minuter. Lägg åt sidan.','Stek biffarna i resten av smöret cirka 4–5 minuter per sida tills genomstekta. Ta upp ur pannan.','Vispa mjöl med 100 ml kallt vatten per portion och häll i pannan med soja och buljong. Sjud 5 minuter. Lägg tillbaka biffar och lök och servera med potatis och lingon.']);
d('torskaggsas','Kokt torsk med äggsås och potatis','fiskrätt',35,
 {cod:180,egg:1,potato:250,milk:120,butter:10,flour:10,dill:6,lemon:.25,peas:80},
 ['Koka potatisen. Koka ägget cirka 9 minuter, kyl, skala och hacka.','Smält smöret i en kastrull. Vispa ner mjölet och späd med mjölken och 50 ml vatten per portion. Sjud 5 minuter.','Sjud torsken försiktigt i lättsaltat vatten i cirka 6–10 minuter beroende på tjocklek, tills fisken är genomlagad och lätt delar sig. Koka ärtorna separat.','Vänd ner hackat ägg och dill i såsen. Smaka av med citron och servera med väl avrunnen fisk, potatis och ärtor.']);
d('laxburgare','Laxburgare med kall dillsås','burgare',35,
 {salmon:170,egg:.3,breadcrumbs:10,burgerbun:1,yogurt:60,mayo:10,dill:6,lemon:.3,lettuce:30,cucumber:60,oil:8},
 ['Kontrollera att laxen är benfri. Hacka mycket fint med kniv och blanda med ägg, ströbröd, hälften av dillen, salt och peppar. Låt svälla 5 minuter.','Blanda yoghurt, majonnäs, resten av dillen och lite citronsaft till en kall sås.','Forma laxburgare och stek i oljan på medelvärme cirka 4–5 minuter per sida tills fisken är helt genomlagad.','Rosta bröden och fyll med sallad, gurka, laxburgare och dillsås. Servera genast.'],{lunchbox:false});
d('pastasallad','Pastasallad med skinka, ost och örtdressing','sallad',25,
 {pasta:80,ham:90,cheese:40,cucumber:100,freshTomato:100,corn:50,yogurt:60,mustard:5,parsley:5,vinegar:6},
 ['Koka pastan enligt förpackningen, skölj kort i kallt vatten och låt rinna av ordentligt.','Tärna skinka, ost, gurka och tomat. Låt majsen rinna av.','Blanda yoghurt, senap, vinäger och hackad persilja till en dressing och smaka av.','Vänd ihop pasta, grönsaker, skinka, ost och dressing. Förvara kallt fram till servering.'],{easy:true});
d('caesar','Caesarsallad med kyckling och krutonger','sallad',30,
 {chicken:160,lettuce:120,sourdough:60,parmesan:25,mayo:25,yogurt:30,anchovy:5,garlic:2,lemon:.3,oil:10},
 ['Skär brödet i tärningar och rosta med hälften av oljan i panna tills krispigt. Lägg åt sidan.','Dela kycklingen på längden och stek i resten av oljan tills genomstekt, minst 70 °C i mitten. Låt vila 3 minuter och skiva.','Mosa sardeller och vitlök och rör ihop med majonnäs, yoghurt, citron och hälften av parmesanen, finriven. Späd med lite vatten.','Riv salladen i stora bitar och vänd med dressingen. Toppa med kyckling, krutonger och resten av parmesanen.'],{lunchbox:false});
d('broccolisoppa','Broccoli- och ostsoppa med bröd','soppa',25,
 {broccoli:250,potato:100,onion:40,milk:100,cheese:50,stock:3,butter:8,bread:70},
 ['Hacka löken och skala och tärna potatisen smått. Fräs i smöret utan att bryna.','Tillsätt buljong och 250 ml vatten per portion. Koka 10 minuter tills potatisen nästan är mjuk.','Lägg i broccoli och koka cirka 5 minuter till. Tillsätt mjölken och mixa soppan slät.','Ta från värmen och rör ner osten tills den smält. Späd och smaka av. Servera med bröd.'],{easy:true});
d('potatispurjo','Potatis- och purjolökssoppa','soppa',30,
 {potato:280,leek:150,butter:10,cream:60,stock:3,bread:70,parsley:5},
 ['Skölj purjolöken noga och skiva tunt. Skala och tärna potatisen.','Fräs purjolöken mjuk i smöret utan att den får färg. Tillsätt potatis, buljong och 300 ml vatten per portion.','Koka cirka 15–20 minuter tills potatisen är helt mjuk. Tillsätt grädden och mixa kort eller mosa grovt med potatisstöt.','Späd med vatten till önskad konsistens och smaka av. Strö över persilja och servera med bröd.'],{easy:true});
d('tomatsoppa','Tomatsoppa med osttoast','soppa',30,
 {tomatoes:300,onion:50,garlic:3,tomatoPaste:15,cream:45,stock:2,oil:8,basil:5,sourdough:90,cheese:40,butter:5},
 ['Hacka lök och vitlök och fräs i oljan tills löken mjuknat. Rör i tomatpuré och fräs 1 minut.','Tillsätt tomater, buljong och 120 ml vatten per portion. Sjud i 15 minuter.','Rör ner grädde och basilika och mixa slätt. Smaka av med salt och peppar.','Lägg ost mellan brödskivor. Stek toasten i smöret på medellåg värme tills båda sidor fått färg och osten smält. Servera till soppan.']);
d('pannkakor','Tunna pannkakor med sylt och grädde','pannkaka',35,
 {flour:65,milk:170,egg:1,butter:10,jam:30,whippingCream:40},
 ['Vispa mjölet med hälften av mjölken till en slät smet. Vispa ner resten av mjölken, ägget och lite salt.','Låt smeten vila 10 minuter. Smält hälften av smöret och rör ner i smeten.','Stek tunna pannkakor i resten av smöret i en medelvarm panna. Vänd när ytan har stannat och stek kort på andra sidan.','Vispa grädden lätt och servera med pannkakor och sylt.'],{lunchbox:false});
d('korvbrod','Korv med bröd och hemlagad potatissallad','korvrätt',30,
 {hotdog:120,hotdogbun:2,potato:180,yogurt:50,mayo:20,mustard:10,pickles:25,redonion:15,parsley:5,ketchup:15},
 ['Koka potatisen mjuk, låt svalna något och skär i bitar.','Blanda yoghurt, majonnäs, hälften av senapen, hackad gurka, rödlök och persilja. Vänd ner potatisen och smaka av.','Stek eller grilla korven enligt förpackningens anvisning tills den är genomvarm. Rosta korvbröden lätt.','Servera korven i bröd med resterande senap och ketchup samt potatissalladen vid sidan.'],{lunchbox:false});
d('makaronipudding','Makaronipudding med skinka och ost','gratäng',50,
 {pasta:80,ham:100,leek:70,egg:1,milk:130,cheese:40,butter:5,freshTomato:100},
 ['Sätt ugnen på 200 °C. Koka makaronerna 2 minuter kortare än förpackningens tid.','Skiva purjolöken och fräs mjuk i smöret. Tärna skinkan.','Blanda pasta, purjolök och skinka i en form. Vispa ihop ägg, mjölk, hälften av osten och lite peppar och häll över.','Toppa med resten av osten och grädda cirka 25–30 minuter tills äggstanningen har stelnat i mitten. Servera med skivad tomat.']);
d('renskav','Renskavsgryta med svamp, mos och lingon','husmanskost',40,
 {reindeer:160,mushroom:130,onion:50,cream:80,soy:5,thyme:.5,potato:250,milk:50,butter:12,lingon:25},
 ['Koka potatisen mjuk. Mosa med hälften av smöret och uppvärmd mjölk och smaka av.','Stek skivad svamp i torr panna tills vätskan kokat bort. Lägg i resterande smör och hackad lök och stek tills löken är mjuk.','Tillsätt renskaven enligt förpackningens tillagningsanvisning, ofta direkt från fryst, och finfördela under stekningen tills köttet är genomstekt.','Häll i grädde, soja, timjan och 40 ml vatten per portion. Sjud 5–8 minuter och servera med mos och lingon.']);
d('isterband','Isterband med dillstuvad potatis och rödbetor','husmanskost',35,
 {isterband:150,potato:250,milk:140,flour:10,butter:10,dill:7,beets:100,vinegar:10,sugar:6},
 ['Skala och tärna rödbetorna smått och koka mjuka i vatten, cirka 15–20 minuter. Häll av och vänd med vinäger och socker.','Koka potatisen mjuk och skiva. Stek isterbanden försiktigt enligt förpackningens anvisning tills genomvarma.','Smält smöret, vispa ner mjölet och späd med mjölken. Sjud under omrörning i 5 minuter.','Vänd ner potatis och dill i stuvningen och smaka av. Servera med isterband och rödbetor.']);
d('sjomansbiff','Sjömansbiff med potatis och lök','husmanskost',100,
 {beefslice:180,potato:300,onion:120,alcoholfreebeer:130,stock:2,bay:.1,butter:12,parsley:5,pickles:30},
 ['Skiva potatisen cirka 5 mm tunt och skiva löken. Bryn köttet snabbt i hälften av smöret i en gryta och lägg åt sidan.','Stek löken mjuk i resten av smöret. Varva kött, lök och potatis i grytan och salta och peppra lätt mellan lagren.','Tillsätt alkoholfri öl, buljong och lagerblad. Häll på vatten tills vätskan når nästan upp till översta potatislagret.','Sjud under lock 60–75 minuter tills köttet är mört och potatisen mjuk. Skaka grytan försiktigt ibland och fyll på vatten vid behov.','Ta bort lagerbladet och toppa med persilja. Servera med gurka.']);
d('kebabtallrik','Hemlagad kebabtallrik med ris och vitlökssås','kötträtt',35,
 {pork:170,rice:75,cumin:1,paprikaPowder:1,oregano:.5,garlic:4,oil:8,yogurt:70,mayo:10,lemon:.25,lettuce:50,freshTomato:80,cucumber:60,redonion:20},
 ['Koka riset. Rör yoghurt, majonnäs, hälften av vitlöken och citronsaft till en kall sås.','Skär köttet mycket tunt tvärs över fibrerna och blanda med olja, spiskummin, paprika, oregano och resten av vitlöken.','Stek köttet i het panna i små omgångar tills genomstekt och lätt brynt, cirka 4–6 minuter per omgång.','Skär sallad, tomat, gurka och rödlök. Servera köttet med ris, grönsaker och vitlökssås.']);

export function buildEverydayRecipes(products){return rows.map(r=>({...r,active:Math.min(r.time,30),family:r.id,origin:'Matplaneraren',tested:false,nutritionEstimated:true,kcal:Math.round(Object.entries(r.ingredients).reduce((sum,[id,q])=>sum+q*products[id].kcalPerUnit,0)/5)*5}));}
