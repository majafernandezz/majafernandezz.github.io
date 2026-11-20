// Component amounts are per portion, just like recipe.ingredients. An item can
// occur in several sections; only its assigned share appears in each section.
// The planner continues to use the original aggregate ingredient list.
const specs={};
const part=(name,items)=>({name,items});
const set=(id,main,...parts)=>{specs[id]={main,parts};};
const rice=()=>part('Ris',['rice']);
const potatoes=()=>part('Kokt potatis',['potato']);
const serving=(...items)=>part('Till servering',items);
set('dal','Linsdal',rice());
set('tomato-pasta','Tomatsås med spenat',part('Pasta',['pasta']));
set('salmon','Citronlax och broccoli',part('Rostad potatis',['potato','oil']));
set('tofu','Tofu med broccoli',rice());
set('lentil-bolognese','Linsbolognese',part('Pasta',['pasta']));
set('tacos','Kikärtsfyllning',part('Tortillabröd',['tortillas']));
set('creamy-pasta','Kyckling- och spenatsås',part('Pasta',['pasta']));
set('own-pastagratang-chicken-5','Kyckling, grönsaker och tomatsås',part('Pasta',['pasta']),part('Osttäcke',['mozzarella']));
set('own-gnocchipanna-halloumi-2','Halloumi, svamp och tomatsås',part('Gnocchi',['gnocchi']));
set('own-nudelwok-pork-3','Fläsk och grönsaker',part('Nudlar',['noodles']),part('Woksås',['soy','honey']),serving('springonion','lime'));
set('own-kokoscurry-chicken-1','Kycklingcurry',rice());
set('own-tomatcurry-beans-2','Kikärtscurry',rice());
set('own-chiligryta-beef-1','Chili con carne',rice());
set('own-platmiddag-chicken-1','Kyckling, potatis och grönsaker',part('Kall yoghurtsås',['yogurt']));
set('own-potatisgratang-whitebeans-1','Potatis- och böngratäng',part('Osttäcke',['cheese']));
set('own-quesadilla-blackbeans-2','Bönfyllning',part('Bröd och ost',['tortillas','cheese']));
set('own-potatispanna-pork-3','Pyttipanna',part('Senapsyoghurt',['mustard','yogurt']));
set('own-wrap-chicken-4','Kycklingfyllning',part('Bröd, gurka och yoghurt',['tortillas','cucumber','yogurt']));
set('own-lasagne-beef-5','Köttfärs- och tomatsås',part('Béchamelsås',['milk','flour','butter']),part('Lasagneplattor och osttäcke',['lasagna','cheese']));
set('dish-kottbullar','Köttbullar',part('Potatismos',['potato','butter',['milk',60]]),part('Brunsås',['cream','stock','soy','flour']),serving('lingon'));
set('dish-korvstroganoff','Korvstroganoff',rice());
set('dish-kalops','Kalops',potatoes());
set('dish-kalpudding','Kålpudding',part('Gräddsås',['cream','stock']),potatoes());
set('dish-ugnspannkaka','Ugnspannkaka med bacon',serving('lingon'));
set('dish-raggmunk','Raggmunk',part('Stekt fläsk',['bacon']),serving('lingon'));
set('dish-artsoppa','Ärtsoppa',serving('mustard','bread'));
set('dish-brunabonor','Bruna bönor',part('Stekt fläsk',['bacon']),potatoes());
set('dish-kroppkakor','Potatisdeg',part('Svampfyllning',['mushroom','onion','allspice',['butter',5]]),part('Brynt smör och lingon',[['butter',15],'lingon']));
set('dish-stromming','Panerad strömming',part('Potatismos',['potato','milk',['butter',9]]),serving('dill','lemon'));
set('dish-fiskgratang','Fisk och räkor',part('Potatismos',['potato',['milk',30],['butter',6]]),part('Dillsås',['cream','flour','dill','lemon',['milk',30],['butter',6]]));
set('dish-laxpudding','Laxpudding',part('Skirat smör',['butter']));
set('dish-dillkott','Kött och grönsaker',part('Dillsås',['cream','flour','vinegar','sugar','dill']),potatoes());
set('dish-carbonara','Carbonarasås',part('Pasta',['pasta']));
set('dish-puttanesca','Puttanescasås',part('Pasta',['pasta']));
set('dish-pesto','Pesto',part('Pasta och haricots verts',['pasta','greenbeans']));
set('dish-caciopepe','Ost- och pepparsås',part('Pasta',['pasta']));
set('dish-pizza','Pizzadeg',part('Tomatsås',['tomatoes','blackpepper']),part('Topping',['mozzarella','basil',['oil',4]]));
set('dish-parmigiana','Aubergine och tomatsås',part('Ostlager',['mozzarella','parmesan']),serving('bread'));
set('dish-polenta','Svampragu',part('Krämig polenta',['polenta','stock','parmesan',['butter',6]]));
set('dish-moussaka','Lammfärssås',part('Rostad aubergine och potatis',['eggplant','potato','oil']),part('Béchamelsås och ost',['milk','flour','butter','cheese']));
set('dish-spanakopita','Spenat- och fetafyllning',part('Filodeg och pensling',['phyllo',['oil',10]]));
set('dish-souvlaki','Kött och marinad',part('Tzatziki',['yogurt','cucumber',['garlic',2]]),serving('pitabread','freshTomato'));
set('dish-falafel','Falafel',part('Tahinisås',['tahini','lemon']),serving('pitabread','lettuce'));
set('dish-shakshuka','Shakshuka',serving('bread'));
set('dish-hummus','Hummus och topping',part('Rostade morötter',['carrot','cumin',['oil',6]]),serving('pitabread'));
set('dish-tabbouleh','Tabbouleh med linser',part('Citrondressing',['lemon','oil']));
set('dish-imambayildi','Fylld aubergine',rice());
set('dish-fylldpaprika','Färs- och risfyllning',part('Tomatsås i formen',[['tomatoes',100]]),part('Paprikor och osttäcke',['pepper','cheese']));
set('dish-burrito','Bönfyllning',rice(),part('Tomatsalsa',['freshTomato','redonion',['lime',.2]]),part('Bröd och tillbehör',['tortillas','avocado','yogurt',['lime',.2]]));
set('dish-enchiladas','Kycklingfyllning och stekning',part('Tomatsås',['onion','garlic','tomatoes','cumin','paprikaPowder','chili',['oil',4]]),part('Tortillabröd och ost',['tortillas','cheese']));
set('dish-huevos','Bönor och tomatsalsa',part('Ägg och stekning',['egg',['oil',5]]),part('Rostade tortillas',['tortillas',['oil',5]]),serving('lime','coriander'));
set('dish-nachos','Bönor och ost',part('Tortillachips',['tortillas','oil']),part('Avokadosalsa',['avocado','freshTomato','lime']),serving('yogurt'));
set('dish-gumbo','Gumbo',rice());
set('dish-padthai','Nudlar, räkor och grönsaker',part('Pad thai-sås',['tamarind','fishsauce','sugar']),serving('peanuts','lime'));
set('dish-bibimbap','Grönsaker och ägg',rice(),part('Gochujangsås',['gochujang','soy',['sesameoil',3]]),serving('sesame'));
set('dish-bulgogi','Kött och marinad',rice(),part('Gurksallad',['cucumber','ricevinegar']),serving('sesame'));
set('dish-katsu','Panerad kyckling',rice(),part('Japansk currysås',['onion','carrot','curryPowder','stock','soy',['flour',4],['oil',5]]));
set('dish-sushimaki','Sushiris och smaksättning',part('Fyllning och nori',['smokedSalmon','avocado','cucumber','nori']),serving('soy'));
set('dish-okonomiyaki','Kålpannkaka',part('Sesamsås',['soy','mayo','sesameoil']));
set('dish-gyoza','Fläsk- och kålfyllning',part('Degplattor och stekning',['dumpling','oil']),part('Dippsås',['ricevinegar',['soy',7.5]]));
set('dish-mapotofu','Tofu- och färsgryta',rice());
set('dish-kungpao','Kyckling, paprika och jordnötter',rice(),part('Woksås',['soy','ricevinegar','sugar','cornstarch']));
set('dish-sesamnudlar','Nudlar, tofu och grönsaker',part('Sesamdressing',['tahini','soy','ricevinegar','sesameoil','garlic']));
set('dish-satay','Kycklingspett och marinad',rice(),part('Jordnötssås',['peanutButter','coconut','lime',['soy',6]]),serving('cucumber'));
set('dish-bao','Långkokt fläsk',part('Baobröd',['flour','yeast',['sugar',4],'oil']),part('Grönsaker',['cucumber','redcabbage','ricevinegar']));
set('dish-aloogobi','Aloo gobi',serving('yogurt','coriander'));
set('dish-palakpaneer','Palak paneer',rice());
set('dish-tandoori','Kyckling och marinad',rice(),part('Gurkraita',['cucumber','mint',['yogurt',60]]));
set('dish-samosa','Potatis- och ärtfyllning',part('Filodeg och pensling',['phyllo',['oil',10]]),part('Myntayoghurt',['yogurt','mint']));
set('dish-fishchips','Fisk och frityrsmet',part('Ugnspommes',['potato',['oil',25/3]]),part('Ärtmos',['peas','butter','lemon']));
set('dish-shepherdspie','Lammfärsfyllning',part('Potatistäcke',['potato','milk','butter']));
set('dish-chickenpie','Kyckling- och svampfyllning',part('Smördegslock och pensling',['puff','egg']));
set('dish-croque','Bröd och fyllning',part('Béchamelsås',['milk','flour','butter']),part('Osttäcke',[['cheese',25]]),part('Grönsallad',['lettuce','cucumber']));
set('dish-galette','Galettesmet och stekning',part('Svamp- och ostfyllning',['egg','mushroom','cheese','parsley',['butter',6]]));
set('dish-quiche','Fyllning och äggstanning',part('Pajdeg',['flour','butter']));
set('dish-ratatouille','Ratatouille med bönor',serving('bread'));
set('dish-nicoise','Sallad niçoise',part('Senapsvinägrett',['mustard','oil','vinegar']));
set('dish-loksoppa','Löksoppa',part('Ostgratinerat bröd',['sourdough','cheese']));
set('dish-coqauvin','Kycklinggryta',potatoes());
set('dish-paella','Paella',serving('lemon'));
set('dish-gazpacho','Gazpacho',part('Vitlöksbröd',[['sourdough',75],['garlic',2],['oil',6]]));
set('dish-schnitzel','Schnitzel och panering',part('Potatissallad',['potato','mustard','vinegar','redonion','parsley',['oil',6]]),serving('lemon'));
set('dish-pierogi','Pierogideg',part('Potatis- och ostfyllning',['potato','cheese']),part('Stekt lök',['onion','butter']),serving('sourcream'));
set('dish-borsjt','Borsjt',serving('sourcream','dill'));
set('dish-hamburgare','Hamburgerbiff',part('Ugnspotatis',['potato','oil']),part('Bröd och tillbehör',['burgerbun','cheese','lettuce','freshTomato','pickles','mayo','mustard']));
set('dish-raklime','Räkröra',part('Krispiga tortillas',['tortillas','oil']));
set('dish-bakpotatis','Bakpotatis',part('Skagenröra',['shrimp','mayo','sourcream','dill','lemon','redonion']));
set('dish-grekisksallad','Grekisk sallad',part('Dressing',['oil','oregano','vinegar']),serving('sourdough'));
set('everyday-kycklingcurry','Kyckling i currysås',rice());
set('everyday-kottfarssas','Köttfärssås',part('Spaghetti',['pasta']),serving('parmesan'));
set('everyday-tacofredag','Tacofärs',part('Tortillabröd',['tortillas']),part('Tillbehör',['lettuce','cucumber','freshTomato','corn','cheese','yogurt']));
set('everyday-stuvademakaroner','Stuvade makaroner',part('Stekt falukorv',['sausage',['butter',5]]),serving('cucumber','mustard'));
set('everyday-ugnsfalukorv','Ugnsbakad falukorv',part('Potatismos',['potato','milk','butter']));
set('everyday-flygandejakob','Kyckling- och banangratäng',rice(),part('Topping',['bacon','peanuts']));
set('everyday-kasslergratang','Kasslergratäng',rice(),part('Broccoli',['broccoli']));
set('everyday-flaskfile','Fläskfilé och stekning',part('Champinjonsås',['mushroom','onion','cream','soy','mustard','parsley',['butter',5]]),potatoes());
set('everyday-kotlett','Kotlett och stekning',part('Äppel- och gräddsås',['apple','onion','cream','mustard','stock',['butter',6]]),potatoes());
set('everyday-kottfarslimpa','Köttfärslimpa',part('Gräddsås',['cream','soy','flour']),potatoes(),part('Pressgurka',['cucumber','vinegar','sugar']));
set('everyday-pannbiff','Pannbiff',part('Stekt lök',['onion',['butter',7.5]]),part('Skysås',['stock','soy','flour']),potatoes(),serving('lingon'));
set('everyday-torskaggsas','Kokt torsk',part('Äggsås',['egg','milk','butter','flour','dill','lemon']),potatoes(),part('Ärtor',['peas']));
set('everyday-laxburgare','Laxburgare',part('Kall dillsås',['yogurt','mayo','dill','lemon']),part('Bröd och grönsaker',['burgerbun','lettuce','cucumber']));
set('everyday-pastasallad','Pastasallad',part('Örtdressing',['yogurt','mustard','parsley','vinegar']));
set('everyday-caesar','Kyckling och sallad',part('Krutonger',['sourdough',['oil',5]]),part('Caesardressing',['mayo','yogurt','anchovy','garlic','lemon',['parmesan',12.5]]),part('Parmesantopping',[['parmesan',12.5]]));
set('everyday-broccolisoppa','Broccoli- och ostsoppa',serving('bread'));
set('everyday-potatispurjo','Potatis- och purjolökssoppa',serving('bread','parsley'));
set('everyday-tomatsoppa','Tomatsoppa',part('Osttoast',['sourdough','cheese','butter']));
set('everyday-pannkakor','Pannkakssmet och stekning',serving('jam','whippingCream'));
set('everyday-korvbrod','Korv med bröd',part('Potatissallad',['potato','yogurt','mayo','pickles','redonion','parsley',['mustard',5]]),part('Senap och ketchup',[['mustard',5],'ketchup']));
set('everyday-makaronipudding','Makaroner, skinka och purjolök',part('Äggstanning',['egg','milk',['cheese',20]]),part('Osttäcke',[['cheese',20]]),serving('freshTomato'));
set('everyday-renskav','Renskavsgryta',part('Potatismos',['potato','milk',['butter',6]]),serving('lingon'));
set('everyday-isterband','Isterband',part('Dillstuvad potatis',['potato','milk','flour','butter','dill']),part('Rödbetor',['beets','vinegar','sugar']));
set('everyday-sjomansbiff','Sjömansbiff',serving('pickles','parsley'));
set('everyday-kebabtallrik','Kebabkött och kryddning',rice(),part('Vitlökssås',['yogurt','mayo','lemon',['garlic',2]]),part('Grönsaker',['lettuce','freshTomato','cucumber','redonion']));

export function ingredientSections(recipe){
 const spec=specs[recipe.id];
 if(!spec)return [{name:recipe.name,ingredients:{...recipe.ingredients}}];
 const remaining={...recipe.ingredients};
 const sides=spec.parts.map(({name,items})=>{
  const ingredients={};
  for(const item of items){const [id,amount]=Array.isArray(item)?item:[item,remaining[item]];
   if(!(id in remaining)||!Number.isFinite(amount)||amount<=0||amount>remaining[id]+1e-8)throw new Error(`Invalid ingredient section: ${recipe.id}/${name}/${id}`);
   ingredients[id]=(ingredients[id]??0)+amount;remaining[id]-=amount;
   if(Math.abs(remaining[id])<1e-8)delete remaining[id];
  }
  return {name,ingredients};
 });
 return [{name:spec.main,ingredients:remaining},...sides].filter(s=>Object.keys(s.ingredients).length);
}

// Old instructions referred to fractions of the aggregate list. With the list
// split, point to the allocated section amount instead of dividing it again.
const edits={
 'dish-kottbullar':[[1,'en fjärdedel av mjölken','mjölken under Köttbullar'],[4,'resten av mjölken','mjölken under Potatismos']],
 'dish-kroppkakor':[[1,'en fjärdedel av smöret','smöret under Svampfyllning'],[4,'resten av smöret','smöret under Brynt smör och lingon']],
 'dish-stromming':[[0,'hälften av smöret','smöret under Potatismos'],[2,'resten av smöret','smöret under Panerad strömming']],
 'dish-fiskgratang':[[0,'hälften av smöret och hälften av mjölken','smöret och mjölken under Potatismos'],[2,'resten av smöret','smöret under Dillsås'],[2,'resten av mjölken','mjölken under Dillsås']],
 'dish-pizza':[[0,'hälften av oljan','oljan under Pizzadeg'],[3,'resten av oljan','oljan under Topping']],
 'dish-polenta':[[0,'hälften av smöret','smöret under Svampragu'],[3,'resten av smöret','smöret under Krämig polenta']],
 'dish-spanakopita':[[1,'en tredjedel av oljan','oljan under Spenat- och fetafyllning']],
 'dish-souvlaki':[[0,'hälften av vitlöken','vitlöken under Kött och marinad'],[1,'resterande vitlök','vitlöken under Tzatziki']],
 'dish-hummus':[[0,'hälften av oljan','oljan under Rostade morötter'],[3,'resten av oljan','oljan under Hummus och topping']],
 'dish-burrito':[[1,'hälften av limesaften','limen under Tomatsalsa'],[3,'resten av limen','limen under Bröd och tillbehör']],
 'dish-enchiladas':[[0,'hälften av oljan','oljan under Tomatsås'],[1,'resten av oljan','oljan under Kycklingfyllning och stekning']],
 'dish-huevos':[[2,'hälften av oljan','oljan under Rostade tortillas'],[2,'resten av oljan','oljan under Ägg och stekning']],
 'dish-bibimbap':[[1,'hälften av sesamoljan','sesamoljan under Grönsaker och ägg'],[2,'resten av sesamoljan','sesamoljan under Gochujangsås']],
 'dish-katsu':[[0,'en fjärdedel av oljan','oljan under Japansk currysås'],[1,'en tredjedel av mjölet','mjölet under Japansk currysås'],[2,'resterande mjöl','mjölet under Panerad kyckling'],[3,'resten av oljan','oljan under Panerad kyckling']],
 'dish-gyoza':[[1,'hälften av sojan','sojan under Fläsk- och kålfyllning'],[4,'resten av sojan','sojan under Dippsås']],
 'dish-satay':[[0,'hälften av sojan','sojan under Kycklingspett och marinad'],[2,'resten av sojan','sojan under Jordnötssås']],
 'dish-bao':[[0,'hälften av sockret','sockret under Baobröd'],[1,'resten av sockret','sockret under Långkokt fläsk']],
 'dish-tandoori':[[0,'hälften av yoghurten','yoghurten under Kyckling och marinad'],[2,'resterande yoghurt','yoghurten under Gurkraita']],
 'dish-samosa':[[0,'en tredjedel av oljan','oljan under Potatis- och ärtfyllning'],[2,'resten av oljan','oljan under Filodeg och pensling']],
 'dish-fishchips':[[0,'en tredjedel av oljan','oljan under Ugnspommes'],[2,'resten av oljan','oljan under Fisk och frityrsmet']],
 'dish-croque':[[1,'hälften av osten','osten under Bröd och fyllning'],[2,'resterande ost','osten under Osttäcke']],
 'dish-galette':[[1,'hälften av smöret','smöret under Svamp- och ostfyllning'],[2,'resten av smöret','smöret under Galettesmet och stekning']],
 'dish-gazpacho':[[0,'hälften av vitlöken och en fjärdedel av brödet','vitlöken och brödet under Gazpacho'],[1,'två tredjedelar av oljan','oljan under Gazpacho'],[3,'resterande bröd med resten av vitlöken','brödet under Vitlöksbröd med vitlöken i samma del']],
 'dish-schnitzel':[[0,'en tredjedel av oljan','oljan under Potatissallad'],[2,'resterande olja','oljan under Schnitzel och panering']],
 'everyday-stuvademakaroner':[[1,'hälften av smöret','smöret under Stuvade makaroner'],[3,'resten av smöret','smöret under Stekt falukorv']],
 'everyday-flaskfile':[[1,'hälften av smöret','smöret under Fläskfilé och stekning'],[2,'resterande smör','smöret under Champinjonsås']],
 'everyday-kotlett':[[1,'hälften av smöret','smöret under Kotlett och stekning'],[2,'resten av smöret','smöret under Äppel- och gräddsås']],
 'everyday-pannbiff':[[1,'hälften av smöret','smöret under Stekt lök'],[2,'resten av smöret','smöret under Pannbiff']],
 'everyday-caesar':[[0,'hälften av oljan','oljan under Krutonger'],[1,'resten av oljan','oljan under Kyckling och sallad'],[2,'hälften av parmesanen','parmesanen under Caesardressing'],[3,'resten av parmesanen','parmesanen under Parmesantopping']],
 'everyday-korvbrod':[[1,'hälften av senapen','senapen under Potatissallad'],[3,'resterande senap','senapen under Senap och ketchup']],
 'everyday-makaronipudding':[[2,'hälften av osten','osten under Äggstanning'],[3,'resten av osten','osten under Osttäcke']],
 'everyday-renskav':[[0,'hälften av smöret','smöret under Potatismos'],[1,'resterande smör','smöret under Renskavsgryta']],
 'everyday-kebabtallrik':[[0,'hälften av vitlöken','vitlöken under Vitlökssås'],[1,'resten av vitlöken','vitlöken under Kebabkött och kryddning']],
};
export function recipeSteps(recipe){
 const steps=[...recipe.steps];
 for(const [index,original,replacement]of edits[recipe.id]??[]){if(!steps[index]?.includes(original))throw new Error(`Stale component instructions: ${recipe.id}/${index}`);steps[index]=steps[index].replace(original,replacement);}
 return steps;
}
