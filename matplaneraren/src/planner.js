import {everydayProducts,buildEverydayRecipes} from './everyday-recipes.js';
import {curatedProducts,buildCuratedRecipes} from './curated-recipes.js';
import {extraProducts,legacyEnergy,buildRecipeBank} from './recipe-bank.js';
// Alla priser är fiktiva exempel, i öre. Mängder anges i g, ml eller stycken.
export const products = {
 rice:{name:'Ris',size:1000,unit:'g',price:2990,group:'Skafferi'},
 pasta:{name:'Pasta',size:500,unit:'g',price:1790,group:'Skafferi',allergens:['Gluten']},
 lentils:{name:'Röda linser',size:500,unit:'g',price:2990,group:'Skafferi'},
 beans:{name:'Kikärtor, avrunna',size:230,unit:'g',price:1290,group:'Skafferi'},
 tomatoes:{name:'Krossade tomater',size:400,unit:'g',price:1290,group:'Skafferi'},
 coconut:{name:'Kokosmjölk',size:400,unit:'ml',price:1990,group:'Skafferi'},
 oil:{name:'Olivolja',size:500,unit:'ml',price:6990,group:'Skafferi'},
 soy:{name:'Sojasås',size:150,unit:'ml',price:2490,group:'Skafferi',allergens:['Soja','Gluten']},
 spice:{name:'Kryddmix (exempelprodukt)',size:40,unit:'g',price:1590,group:'Skafferi'},
 onion:{name:'Gul lök',size:1000,unit:'g',price:1490,group:'Frukt & grönt'},
 carrot:{name:'Morötter',size:1000,unit:'g',price:1690,group:'Frukt & grönt'},
 potato:{name:'Potatis',size:1000,unit:'g',price:1790,group:'Frukt & grönt'},
 broccoli:{name:'Broccoli',size:250,unit:'g',price:1790,group:'Frukt & grönt'},
 pepper:{name:'Paprika',size:180,unit:'g',price:1290,group:'Frukt & grönt'},
 garlic:{name:'Vitlök',size:60,unit:'g',price:790,group:'Frukt & grönt'},
 lemon:{name:'Citron',size:1,unit:'st',price:690,group:'Frukt & grönt'},
 spinach:{name:'Fryst spenat',size:500,unit:'g',price:1990,group:'Frys'},
 peas:{name:'Frysta ärtor',size:500,unit:'g',price:1890,group:'Frys'},
 chicken:{name:'Kycklingfilé',size:700,unit:'g',price:7990,group:'Kött, fisk & vegetariskt'},
 salmon:{name:'Laxfilé',size:500,unit:'g',price:8990,group:'Kött, fisk & vegetariskt',allergens:['Fisk']},
 tofu:{name:'Tofu',size:400,unit:'g',price:2990,group:'Kött, fisk & vegetariskt',allergens:['Soja']},
 egg:{name:'Ägg',size:6,unit:'st',price:2490,group:'Mejeri & ägg',allergens:['Ägg']},
 cream:{name:'Matlagningsgrädde',size:250,unit:'ml',price:1590,group:'Mejeri & ägg',allergens:['Mjölk']},
 feta:{name:'Fetaost',size:150,unit:'g',price:2490,group:'Mejeri & ägg',allergens:['Mjölk']},
 tortillas:{name:'Tortillabröd',size:8,unit:'st',price:2290,group:'Bröd',allergens:['Gluten']},
};
Object.assign(products,extraProducts,curatedProducts,everydayProducts);
for(const [id,p]of Object.entries(products)){p.kcalPerUnit??=legacyEnergy[id];p.allergens??=[];}
products.mussels.allergens=[...new Set([...products.mussels.allergens,'Blötdjur'])];
const r=(id,name,cuisine,mood,time,kcal,ingredients,steps,extra={})=>({id,name,cuisine,mood,time,active:Math.min(time,20),kcal,ingredients,steps,lunchbox:true,easy:true,...extra});
// Ingrediensmängder är per portion. Näringsvärden är ungefärliga exempelvärden.
const legacyRecipes=[
 r('dal','Krämig linsdal med kokos','Indiskt','spicy',30,610,{lentils:80,coconut:100,tomatoes:100,onion:50,rice:65,spice:3,garlic:3},['Skölj linserna. Hacka lök och vitlök.','Lägg lök, vitlök, linser, tomater, kryddmix och kokosmjölk i en kastrull. Tillsätt vatten så att linserna täcks.','Sjud cirka 20 minuter tills linserna är mjuka. Rör om och tillsätt vatten vid behov.','Koka riset enligt förpackningen och servera till grytan.']),
 r('tomato-pasta','Tomatpasta med spenat','Italienskt','comfort',20,540,{pasta:100,tomatoes:180,spinach:75,onion:40,garlic:3,oil:10},['Koka pastan enligt förpackningen.','Hacka lök och vitlök. Fräs i oljan och tillsätt tomaterna. Sjud i 10 minuter.','Tillsätt spenat och värm igenom. Blanda med pastan och lite pastavatten.']),
 r('chicken-curry','Kokoskyckling med ris','Asiatiskt','spicy',30,680,{chicken:150,rice:75,coconut:100,pepper:75,onion:40,spice:3,oil:5},['Koka riset enligt förpackningen.','Skär kyckling och paprika i bitar. Hacka löken.','Stek kycklingen i oljan. Tillsätt lök, paprika och kryddmix.','Häll på kokosmjölken och sjud tills kycklingen är helt genomstekt. Servera med ris.']),
 r('tray-chickpea','Ugnsrostade kikärtor & feta','Medelhavet','healthy',40,590,{beans:115,potato:200,carrot:100,feta:50,oil:10,spice:3},['Sätt ugnen på 225 °C.','Skär potatis och morötter i mindre bitar. Blanda med olja och kryddmix på en plåt.','Rosta i 20 minuter. Tillsätt avrunna kikärtor och rosta ytterligare 15 minuter tills potatisen är mjuk.','Smula fetaost över före servering.'],{active:15}),
 r('fried-rice','Stekt ris med ägg & grönt','Asiatiskt','healthy',20,560,{rice:85,egg:2,peas:75,carrot:75,soy:10,oil:5},['Koka riset enligt förpackningen.','Skär moroten i små bitar och stek i oljan tills den mjuknar. Tillsätt ärtorna.','Knäck i äggen och rör tills de stelnat.','Vänd ner ris och soja. Stek tills allt är varmt.']),
 r('salmon','Citronlax med rostad potatis','Nordiskt','healthy',40,650,{salmon:150,potato:250,broccoli:125,lemon:0.25,oil:10},['Sätt ugnen på 225 °C. Skär potatisen i klyftor och blanda med oljan.','Rosta potatisen i 20 minuter.','Lägg till lax och broccoli på plåten. Pressa citron över laxen.','Tillaga i ytterligare cirka 15 minuter tills laxen är genomlagad och potatisen mjuk.'],{active:15}),
 r('tofu','Krispig tofu med broccoli','Asiatiskt','healthy',25,590,{tofu:180,broccoli:125,rice:75,soy:10,oil:10,garlic:3},['Koka riset enligt förpackningen.','Torka tofun och skär den i tärningar. Stek i olja tills den fått färg.','Dela broccolin och stek med tofun. Tillsätt lite vatten och låt broccolin mjukna.','Vänd ner hackad vitlök och soja. Servera med ris.']),
 r('lentil-bolognese','Linsbolognese på vardagsvis','Italienskt','comfort',30,620,{pasta:90,lentils:60,tomatoes:200,carrot:75,onion:50,oil:5,garlic:3},['Hacka lök och vitlök och riv moroten. Fräs i oljan.','Tillsätt sköljda linser, tomater och vatten så att linserna täcks.','Sjud cirka 20 minuter tills linserna är mjuka. Tillsätt mer vatten vid behov.','Koka pastan enligt förpackningen och servera med såsen.']),
 r('tacos','Kikärtstacos med paprika','Mexikanskt','comfort',20,630,{beans:150,tortillas:2,pepper:90,onion:40,spice:4,oil:5},['Hacka lök och paprika och fräs i oljan.','Låt kikärtorna rinna av. Lägg dem i pannan med kryddmix och lite vatten.','Mosa lätt och värm igenom.','Värm bröden enligt förpackningen och fyll med kikärtsröran.']),
 r('soup','Morotssoppa med kokos & linser','Nordiskt','healthy',30,480,{carrot:200,lentils:70,coconut:100,onion:50,spice:3},['Skala och skär morötter och lök i mindre bitar.','Lägg i kastrull med sköljda linser, kokosmjölk och kryddmix. Täck med vatten.','Koka cirka 20 minuter tills morötter och linser är mjuka.','Mixa soppan och späd med vatten till önskad konsistens.']),
 r('creamy-pasta','Krämig kycklingpasta','Italienskt','comfort',25,710,{pasta:90,chicken:150,cream:75,spinach:75,garlic:3,oil:5},['Koka pastan enligt förpackningen.','Skär kycklingen i mindre bitar och stek i oljan tills den är genomstekt.','Tillsätt hackad vitlök, grädde och spenat. Sjud några minuter.','Vänd ner pastan och späd med pastavatten vid behov.']),
 r('chickpea-curry','Kikärtscurry med spenat','Indiskt','spicy',20,620,{beans:150,spinach:100,coconut:100,rice:65,spice:3,onion:40},['Koka riset enligt förpackningen.','Hacka löken och lägg den i en kastrull med kokosmjölk och kryddmix.','Tillsätt avrunna kikärtor och spenat. Sjud i cirka 10 minuter tills allt är genomvarmt och löken mjuk.','Servera grytan med ris.']),
 r('frittata','Grön frittata med feta','Medelhavet','healthy',30,530,{egg:3,potato:150,spinach:75,feta:40,oil:5},['Sätt ugnen på 200 °C. Tärna potatisen smått och koka tills den är mjuk.','Vispa äggen. Blanda i potatis, tinad och avrunnen spenat och smulad fetaost.','Smörj en ugnsform med oljan och häll i blandningen.','Grädda cirka 20 minuter tills äggen stelnat.'],{lunchbox:true}),
 r('bean-stew','Mustig tomatgryta med kikärtor','Medelhavet','comfort',25,570,{beans:150,tomatoes:200,carrot:100,onion:50,rice:65,oil:5,garlic:3},['Koka riset enligt förpackningen.','Hacka lök, vitlök och morot. Fräs i oljan.','Häll i tomater och lite vatten. Sjud tills moroten är mjuk.','Tillsätt avrunna kikärtor och värm igenom. Servera med ris.']),
];
const retainedLegacy=new Set(['dal','tomato-pasta','fried-rice','salmon','tofu','tacos','soup','frittata','lentil-bolognese','creamy-pasta']);
export const recipes=[...legacyRecipes.filter(r=>retainedLegacy.has(r.id)),...buildRecipeBank(products),...buildCuratedRecipes(products),...buildEverydayRecipes(products)];
export const stores={willys:{name:'Willys · Götgatan',factor:1},ica:{name:'ICA · Ringen',factor:1.09},coop:{name:'Coop · Östgötagatan',factor:1.06},hemkop:{name:'Hemköp · Skanstull',factor:1.12}};
export function productPrice(id,store){return Math.round(products[id].price*(stores[store]?.factor??1));}
export function basket(menu,settings){
 const amounts={}; menu.forEach(recipe=>Object.entries(recipe.ingredients).forEach(([id,qty])=>{amounts[id]=(amounts[id]??0)+qty*settings.portions;}));
 return Object.entries(amounts).map(([id,qty])=>{
  const p=products[id],home=settings.pantry.includes(id),packs=home?0:Math.ceil((qty-0.000001)/p.size);
  return {...p,id,qty,packs,home,cost:packs*productPrice(id,settings.store),left:home?0:packs*p.size-qty};
 }).sort((a,b)=>a.group.localeCompare(b.group,'sv')||a.name.localeCompare(b.name,'sv'));
}
export function total(menu,settings){return basket(menu,settings).reduce((sum,p)=>sum+p.cost,0);}
export function portionCost(recipe,settings){return Object.entries(recipe.ingredients).reduce((sum,[id,qty])=>sum+qty/products[id].size*productPrice(id,settings.store),0);}
// Ingredient-level restrictions also catch fish sauce, mayonnaise and honey.
const meatProducts=new Set(['chicken','beef','turkey','pork','porkShoulder','stewbeef','lamb','bacon','sausage','ham','kassler','porkchop','beefslice','reindeer','isterband','hotdog','porkTenderloin']);
const animalRennet=new Set(['parmesan','pecorino']);
export const diets={all:'Blandkost',vegetarian:'Vegetariskt',pescetarian:'Pescetariskt',vegan:'Veganskt'};
export function matchesRestrictions(recipe,settings){
 const diet=settings.diet??'all',allergies=settings.allergies??[];
 return Object.keys(recipe.ingredients).every(id=>{
  const p=products[id],a=p.allergens;
  if(a.some(v=>allergies.includes(v)))return false;
  if(diet==='all')return true;
  if(meatProducts.has(id))return false;
  const seafood=a.some(v=>['Fisk','Skaldjur','Blötdjur'].includes(v));
  if(diet==='pescetarian')return true;
  if(seafood||animalRennet.has(id))return false;
  return diet!=='vegan'||(!a.some(v=>['Mjölk','Ägg'].includes(v))&&id!=='honey');
 });
}
export function eligible(settings){
 const dislikes=(settings.dislikes??'').toLocaleLowerCase('sv').split(',').map(x=>x.trim()).filter(Boolean);
 return recipes.filter(r=>r.time<=settings.time&&(!settings.lunchbox||r.lunchbox)&&(!settings.easy||r.easy)&&matchesRestrictions(r,settings)&&Object.keys(r.ingredients).every(id=>!dislikes.some(d=>products[id].name.toLocaleLowerCase('sv').includes(d))));
}
export function createPlan(settings){
 const pool=eligible(settings); if(!pool.length)return [];
 const count=settings.dinners*(settings.period==='month'?4:1),budget=settings.budget*100;
 // Incremental package costs avoid rebuilding/sorting the entire basket for every candidate.
 const candidates=pool.map(r=>({r,items:Object.entries(r.ingredients),preference:(settings.cuisines.includes(r.cuisine)?5:0)+(settings.mood===r.mood?4:0)}));
 const home=new Set(settings.pantry),prices=Object.fromEntries(Object.keys(products).map(id=>[id,productPrice(id,settings.store)]));
 const packs=(qty,size)=>Math.ceil((qty-.000001)/size);
 let best=[],bestScore=-Infinity;
 for(let attempt=0;attempt<48;attempt++){
  const menu=[],amounts={},used=new Set(),families={};let cost=0,preferences=0;
  for(let i=0;i<count;i++){
   let choice=null,choiceScore=-Infinity,choiceCost=0;
   const canAvoidRepeat=used.size<pool.length;
   for(const c of candidates){
    if(canAvoidRepeat&&used.has(c.r.id))continue;
    let marginal=0;
    for(const [id,q]of c.items){if(home.has(id))continue;const before=amounts[id]??0;marginal+=(packs(before+q*settings.portions,products[id].size)-packs(before,products[id].size))*prices[id];}
    const family=c.r.family??c.r.id;
    const score=c.preference-marginal/1100-(families[family]??0)*4+(attempt?Math.random()*10:0);
    if(score>choiceScore){choice=c;choiceScore=score;choiceCost=marginal;}
   }
   menu.push(choice.r);used.add(choice.r.id);const family=choice.r.family??choice.r.id;families[family]=(families[family]??0)+1;cost+=choiceCost;preferences+=choice.preference;
   for(const [id,q]of choice.items)amounts[id]=(amounts[id]??0)+q*settings.portions;
  }
  const diversity=Object.keys(families).length;
  const score=cost>budget?-1000000-(cost-budget):preferences+diversity*4+used.size*2-cost/10000;
  if(score>bestScore){best=menu;bestScore=score;}
 }
 return best;
}
export function swapOptions(menu,index,settings){return eligible(settings).filter(r=>r.id!==menu[index].id).map(r=>{const next=[...menu];next[index]=r;return {recipe:r,cost:total(next,settings),duplicate:menu.some(m=>m.id===r.id)};}).filter(x=>x.cost<=settings.budget*100).sort((a,b)=>Number(a.duplicate)-Number(b.duplicate)||a.cost-b.cost);}

// Each suggestion is evaluated independently against the same available stock.
export function fridgeMatches(inventory,settings,{onlyComplete=false}={}){
 return eligible(settings).map(recipe=>{
  const ingredients=Object.entries(recipe.ingredients).map(([id,qty])=>{
   const needed=qty*settings.portions,available=Math.max(0,Number(inventory[id])||0),used=Math.min(available,needed),missing=Math.max(0,needed-available);
   const packs=Math.ceil((missing-0.000001)/products[id].size);
   return {id,...products[id],needed,available,used,missing,packs,cost:packs*productPrice(id,settings.store)};
  });
  const matched=ingredients.filter(p=>p.used>0).length,covered=ingredients.filter(p=>p.missing===0).length;
  const missing=ingredients.filter(p=>p.missing>0),coverage=ingredients.reduce((sum,p)=>sum+p.used/p.needed,0)/ingredients.length;
  return {recipe,ingredients,matched,covered,missing,coverage,complete:missing.length===0,cost:missing.reduce((sum,p)=>sum+p.cost,0)};
 }).filter(r=>r.matched>0&&(!onlyComplete||r.complete)).sort((a,b)=>Number(b.complete)-Number(a.complete)||b.coverage-a.coverage||a.cost-b.cost||a.recipe.name.localeCompare(b.recipe.name,'sv'));
}
