import {products} from './planner.js';
// Display/input conversions only. Recipe quantities, pantry stock and package prices
// stay in their original g/ml/st units, including previously saved fridge inventory.
// Standard volumes: Arla https://www.arla.se/recept/mattomvandlare/
// Flour/sugar and selected densities: Arla/ICA https://www.ica.se/artikel/omvandlingstabell/
// Other densities and produce sizes are approximate kitchen assumptions, not product data.
const gramsPerDl={flour:60,sugar:85,buckwheat:60,cornstarch:55,breadcrumbs:50,rice:80,yellowrice:80,sushiRice:85,risottoRice:85,lentils:80,driedpeas:80,drychickpeas:80,couscous:80,bulgur:75,polenta:70,sesame:68,pinenuts:60,walnuts:40,peanuts:65,honey:120,syrup:140,tomatoPaste:110,peanutButter:110,tahini:110,mustard:100,mayo:95,miso:120,gochujang:120,tamarind:120,lingon:120,jam:120,chilisauce:110,ketchup:120,yogurt:100,sourcream:100};
const gramsPerTsp={salt:6,blackpepper:2,cumin:2,paprikaPowder:2,curryPowder:2,turmeric:3,garam:2,oregano:1,thyme:1,chili:2,cinnamon:2.6,spice:3,stock:3,allspice:2,smokedpaprika:2,clove:2,cardamom:3,nutmeg:2,bakingpowder:5,yeast:3};
const produce={carrot:[75,'medelstor morot','medelstora morötter'],potato:[150,'medelstor potatis','medelstora potatisar'],pepper:[170,'medelstor paprika','medelstora paprikor'],freshTomato:[125,'medelstor tomat','medelstora tomater'],zucchini:[300,'zucchini','zucchinier'],eggplant:[400,'aubergine','auberginer'],cucumber:[300,'gurka','gurkor'],avocado:[150,'avokado','avokador'],banana:[125,'banan','bananer'],apple:[150,'äpple','äpplen']};
const number=n=>new Intl.NumberFormat('sv-SE',{maximumFractionDigits:2}).format(n);
function fraction(n){const whole=Math.floor(n+1e-8),part=Math.round((n-whole)*4),symbol=['','¼','½','¾'][part];return part===4?String(whole+1):`${whole||!part?whole:''}${symbol?`${whole?' ':''}${symbol}`:''}`;}
function volumeSpec(id){if(products[id].unit==='ml')return {perMl:1,approx:false};if(gramsPerTsp[id])return {perMl:gramsPerTsp[id]/5,approx:true};if(gramsPerDl[id])return {perMl:gramsPerDl[id]/100,approx:true};if(id==='butter')return {perMl:1,approx:true,spoonsOnly:true};return null;}
export function kitchenUnits(id){
 const p=products[id];if(!p)return [];
 const base={value:p.unit,label:p.unit,factor:1};
 if(['onion','redonion'].includes(id))return [{value:'medium',label:'medelstor lök',factor:100},{value:'small',label:'liten lök',factor:75},{value:'large',label:'stor lök',factor:150},base];
 if(id==='garlic')return [{value:'clove',label:'klyftor',factor:3},base];
 if(produce[id])return [{value:'piece',label:produce[id][1],factor:produce[id][0]},base];
 const spec=volumeSpec(id);
 if(spec){const units=[{value:'dl',label:'dl',factor:100*spec.perMl},{value:'msk',label:'msk',factor:15*spec.perMl},{value:'tsk',label:'tsk',factor:5*spec.perMl},{value:'krm',label:'krm',factor:spec.perMl}];if(gramsPerTsp[id]||id==='butter')units.sort((a,b)=>a.value==='tsk'?-1:b.value==='tsk'?1:0);return [...units,base];}
 return [base];
}
export function toBaseQuantity(id,value,unit){const option=kitchenUnits(id).find(u=>u.value===unit);if(!option||!Number.isFinite(value)||value<=0)return NaN;return Math.round(value*option.factor*1e6)/1e6;}
export function defaultKitchenInput(id){const units=kitchenUnits(id),unit=units[0];return {unit:unit.value,quantity:unit.value===products[id].unit?products[id].size:1};}
function rounded(value,step){return Math.max(step,Math.round(value/step)*step);}
function pieceAmount(q,weight,singular,plural){const n=rounded(q/weight,.25);return `≈ ${fraction(n)} ${n<=1?singular:plural}`;}
export function formatQuantity(id,quantity,preferredUnit){
 const p=products[id];if(!p||!Number.isFinite(quantity))return '';
 if(quantity===0)return `0 ${p.unit}`;
 if(preferredUnit){
  const u=kitchenUnits(id).find(u=>u.value===preferredUnit);
  if(u){
   if(preferredUnit===p.unit)return `${number(quantity)} ${p.unit}`;
   const value=quantity/u.factor,n=rounded(value,.25);
   let label=u.label;
   if(['onion','redonion'].includes(id)){const labels={small:['liten lök','små lökar'],medium:['medelstor lök','medelstora lökar'],large:['stor lök','stora lökar']};label=labels[preferredUnit][n<=1?0:1];}
   else if(preferredUnit==='clove')label=n<=1?'klyfta':'klyftor';
   else if(preferredUnit==='piece')label=produce[id][n<=1?1:2];
   return `${p.unit==='g'||Math.abs(n-value)>1e-7?'≈ ':''}${fraction(n)} ${label}`;
  }
 }

 if(['onion','redonion'].includes(id)){
  // Prefer whole and half onions, with an explicit size.
  const candidates=[[100,'medelstor lök','medelstora lökar'],[75,'liten lök','små lökar'],[150,'stor lök','stora lökar']].map(([weight,single,plural])=>{const count=rounded(quantity/weight,.25);return {count,single,plural,error:Math.abs(count*weight-quantity)};});
  const complexity=n=>n%1===0?0:n%1===.5?1:2;
  candidates.sort((a,b)=>a.error-b.error||complexity(a.count)-complexity(b.count)||Math.abs(a.count-1)-Math.abs(b.count-1));const c=candidates[0];return `≈ ${fraction(c.count)} ${c.count<=1?c.single:c.plural}`;
 }
 if(id==='garlic'){const count=rounded(quantity/3,.5);return `≈ ${fraction(count)} ${count<=1?'klyfta':'klyftor'}`;}
 if(produce[id])return pieceAmount(quantity,...produce[id]);
 const spec=volumeSpec(id);
 if(spec){
  const ml=quantity/spec.perMl;
  const unit=spec.spoonsOnly?(ml>=15?'msk':ml>=2.5?'tsk':'krm'):ml>=50?'dl':ml>=15?'msk':ml>=2.5?'tsk':'krm';
  const size={dl:100,msk:15,tsk:5,krm:1}[unit],value=ml/size,n=rounded(value,.25);
  const approx=spec.approx||Math.abs(n-value)>1e-7;
  return `${approx?'≈ ':''}${fraction(n)} ${unit}`;
 }
 if(p.unit==='st'){const n=rounded(quantity,.25);return `${Math.abs(n-quantity)>1e-7?'≈ ':''}${fraction(n)} st`;}
 return `${number(quantity)} ${p.unit}`;
}
export function packageQuantity(id,packs=1){const p=products[id];return `${packs} × ${number(p.size)} ${p.unit}`;}
