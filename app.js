const WHATSAPP_NUMBER = '51913843772';

const products = [
  {
    slug:'rhapsody-carey-rosa', brand:'Rhapsody', name:'Carey Blush', category:'carey', price:159, oldPrice:179,
    color:'Carey rosa', material:'Acetato ligero con detalle metálico lateral', fit:'Cuadrada · mariposa suave',
    badge:'Stock real', code:'Rhapsody · referencia de stock', stockLabel:'stock real',
    images:['assets/products/rhapsody-front.webp','assets/products/rhapsody-side.webp','assets/products/rhapsody-model.webp'],
    description:'Una montura femenina que mezcla el carey rosado con detalles nude para dar presencia sin endurecer el rostro. Su silueta cuadrada con elevación suave estiliza la mirada y funciona muy bien para una rutina diaria, oficina o estudio.',
    face:'Ovalado, redondo y corazón',
    colors:[{name:'Carey rosa',hex:'#B78379'},{name:'Carey clásico',hex:'#7A503E'},{name:'Nude',hex:'#D8B39D'},{name:'Vino',hex:'#6D2937'},{name:'Negro',hex:'#1B1B1D'},{name:'Champagne',hex:'#D7BEA6'}],
    tags:['cuadrada','carey','femenina','optica','inicio','economica','rhapsody']
  },
  {
    slug:'za-668-pastel', brand:'Z Fashion', name:'ZA-668 Pastel', category:'cateye', price:149, oldPrice:169,
    color:'Rosa pastel + amarillo miel', material:'Acetato translúcido con patillas combinadas', fit:'Cat-eye suave · geométrica',
    badge:'Color de temporada', code:'ZA-668 · 53□18-145', stockLabel:'stock real',
    images:['assets/products/za668-front.webp','assets/products/za668-side.webp','assets/products/za668-model.webp'],
    description:'Un diseño fresco y expresivo que levanta visualmente la mirada sin exagerar. La combinación rosa pastel, cristal y amarillo miel le da un toque juvenil y distinto, ideal para quien quiere una montura protagonista pero fácil de usar todos los días.',
    face:'Ovalado, redondo y diamante',
    colors:[{name:'Rosa + miel',hex:'#E9AEC0'},{name:'Rosa nude',hex:'#D8A4A0'},{name:'Cristal champagne',hex:'#DCC5AE'},{name:'Lila suave',hex:'#B7A2C9'},{name:'Miel',hex:'#D7A52A'},{name:'Carey claro',hex:'#A97659'}],
    tags:['cat-eye','pastel','rosa','fashion','optica','economica','z fashion']
  },
  {
    slug:'zotti-za-554-negro', brand:'Zotti Fashion', name:'ZA-554 Black Cat-Eye', category:'cateye', price:189, oldPrice:199,
    color:'Negro brillante', material:'Acetato brillante con bisagra metálica', fit:'Cat-eye marcado · clásico',
    badge:'Más buscada', code:'ZA-554 · 54□15-143', stockLabel:'stock real',
    images:['assets/products/zotti554-front.webp','assets/products/zotti554-side.webp','assets/products/zotti554-model.webp'],
    description:'Negra, definida y fácil de combinar. Su cat-eye marcado concentra la atención en los ojos y aporta una imagen elegante sin sentirse pesada. Funciona igual de bien con un look casual que con algo más formal.',
    face:'Ovalado, redondo y triangular',
    colors:[{name:'Negro brillante',hex:'#15171B'},{name:'Negro mate',hex:'#303238'},{name:'Carey oscuro',hex:'#63483B'},{name:'Vino',hex:'#6D2536'},{name:'Azul noche',hex:'#26364B'},{name:'Humo',hex:'#777B80'}],
    tags:['cat-eye','negro','clasico','optica','economica','zotti']
  },
  {
    slug:'za-740-cristal', brand:'Z Fashion', name:'ZA-740 Crystal Nude', category:'transparente', price:129, oldPrice:149,
    color:'Champagne translúcido', material:'Acetato translúcido ligero', fit:'Cuadrada suave · rectangular redondeada',
    badge:'Crystal Nude', code:'ZA-740 · 53□15-140', stockLabel:'stock real',
    images:['assets/products/za740-front.webp','assets/products/za740-side.webp','assets/products/za740-model.webp'],
    description:'Una opción limpia y versátil para quien busca una montura que acompañe el rostro sin recargarlo. El tono champagne translúcido combina con prácticamente todo y su forma cuadrada suave mantiene una presencia moderna y ordenada.',
    face:'Ovalado, redondo y corazón',
    colors:[{name:'Champagne',hex:'#D9BEA7'},{name:'Cristal',hex:'#EEE9E2'},{name:'Rosa cristal',hex:'#D9B4B3'},{name:'Humo claro',hex:'#A8A4A0'},{name:'Arena',hex:'#C6A887'},{name:'Caramelo',hex:'#9D7157'}],
    tags:['transparente','cristal','beige','cuadrada','optica','economica','z fashion']
  }
];



const showcaseCatalogs = {
  optical: {
    title:'Lentes oftálmicos',
    description:'Monturas pensadas para acompañarte todos los días: ligeras, fáciles de combinar y con una selección visual lista para crecer con el catálogo final.',
    items:[
      {code:'O-01',name:'NOVAIR Soft Square',detail:'Cuadrada · champagne',price:149,image:'assets/products/za740-front.webp'},
      {code:'O-02',name:'NOVAIR Blush',detail:'Carey rosa · femenino',price:159,image:'assets/products/rhapsody-front.webp'},
      {code:'O-03',name:'NOVAIR Cat Pastel',detail:'Cat-eye · rosa miel',price:149,image:'assets/products/za668-front.webp'},
      {code:'O-04',name:'NOVAIR Black Line',detail:'Cat-eye · negro',price:189,image:'assets/products/zotti554-front.webp'},
      {code:'O-05',name:'NOVAIR Nude Daily',detail:'Translúcida · arena',price:139,image:'assets/products/za740-angle.webp'},
      {code:'O-06',name:'NOVAIR Carey Daily',detail:'Carey · perfil suave',price:169,image:'assets/products/rhapsody-angle.webp'}
    ]
  },
  sun: {
    title:'Lentes de sol',
    description:'Siluetas solares con aire urbano, clásico y relajado. Una vitrina pensada para que la línea de sol se entienda rápido y se vea aspiracional.',
    items:[1,2,3,4,5,6].map((n,i)=>({code:`S-${String(n).padStart(2,'0')}`,name:['NOVAIR Urban Black','NOVAIR Weekend','NOVAIR Tortoise Sun','NOVAIR City Shade','NOVAIR Gold Round','NOVAIR Soft Sun'][i],detail:['Negro · lente oscuro','Azul · urbano','Carey · clásico','Negro · cuadrado','Dorado · redondo','Rosa · ligero'][i],price:[169,179,159,189,199,149][i],image:`assets/showcase/sun-${String(n).padStart(2,'0')}.webp`}))
  },
  contact: {
    title:'Lentes de contacto',
    description:'Opciones ordenadas por uso y comodidad para mostrar cómo se presentará la línea de contacto. Luego se ajustará según receta y evaluación óptica.',
    items:[1,2,3,4,5,6].map((n,i)=>({code:`C-${String(n).padStart(2,'0')}`,name:['NOVAIR Daily','NOVAIR Comfort','NOVAIR Toric','NOVAIR Monthly','NOVAIR Clear+','NOVAIR Soft Fit'][i],detail:['Uso diario','Confort prolongado','Astigmatismo','Uso mensual','Alta hidratación','Adaptación suave'][i],price:[129,139,159,149,149,139][i],image:`assets/showcase/contact-${String(n).padStart(2,'0')}.webp`}))
  },
  sale: {
    title:'Ofertas',
    description:'Una vitrina para campañas, selecciones especiales y oportunidades que ayudan a descubrir productos con valor adicional.',
    items:[
      {code:'E-01',name:'NOVAIR Blush Edit',detail:'Carey rosa · selección',price:139,oldPrice:159,image:'assets/products/rhapsody-front.webp'},
      {code:'E-02',name:'NOVAIR Pastel Edit',detail:'Cat-eye · selección',price:129,oldPrice:149,image:'assets/products/za668-front.webp'},
      {code:'E-03',name:'NOVAIR Crystal Edit',detail:'Champagne · selección',price:120,oldPrice:139,image:'assets/products/za740-front.webp'},
      {code:'E-04',name:'NOVAIR Black Edit',detail:'Negro · selección',price:169,oldPrice:189,image:'assets/products/zotti554-front.webp'},
      {code:'E-05',name:'NOVAIR Sun Edit',detail:'Solar · selección',price:149,oldPrice:179,image:'assets/showcase/sun-03.webp'},
      {code:'E-06',name:'NOVAIR Contact Edit',detail:'Contacto · selección',price:129,oldPrice:149,image:'assets/showcase/contact-02.webp'}
    ]
  }
};

function renderShowcaseCatalog(key){
  const catalog=showcaseCatalogs[key];
  const panel=$('#category-catalog-panel');
  const grid=$('#showcase-catalog-grid');
  if(!catalog||!panel||!grid)return;
  $('#showcase-catalog-title').textContent=catalog.title;
  $('#showcase-catalog-description').textContent=catalog.description;
  grid.innerHTML=catalog.items.map(item=>{
    const discount=item.oldPrice?Math.round((1-item.price/item.oldPrice)*100):null;
    return `<article class="showcase-product-card"><div class="showcase-product-media"><img src="${item.image}" alt="${item.name}" loading="lazy"></div><div class="showcase-product-copy"><span>${item.code}</span><h4>${item.name}</h4><p>${item.detail}</p><div class="showcase-price"><strong>S/${item.price}</strong>${item.oldPrice?`<del>S/${item.oldPrice}</del><em>-${discount}%</em>`:''}</div><a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola NOVAIR, quiero consultar por ${item.name} (${item.code}).`)}" target="_blank" rel="noreferrer">Consultar</a></div></article>`;
  }).join('');
  const wa=$('#showcase-whatsapp');
  if(wa)wa.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola NOVAIR, quiero ver opciones de ${catalog.title}.`)}`;
  $$('.showcase-card').forEach(card=>card.classList.toggle('active',card.dataset.showcaseCategory===key));
  panel.hidden=false;
  requestAnimationFrame(()=>panel.classList.add('open'));
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function closeShowcaseCatalog(){
  const panel=$('#category-catalog-panel');
  if(!panel)return;
  panel.classList.remove('open');
  panel.hidden=true;
  $$('.showcase-card').forEach(card=>card.classList.remove('active'));
}


const COLOR_VARIANTS = {
  'rhapsody-carey-rosa': {
    'Carey rosa':['assets/variants/rhapsody-carey-rosa/carey-rosa/front.webp','assets/variants/rhapsody-carey-rosa/carey-rosa/angle.webp','assets/variants/rhapsody-carey-rosa/carey-rosa/model.webp'],
    'Carey clásico':['assets/variants/rhapsody-carey-rosa/carey-clasico/front.webp','assets/variants/rhapsody-carey-rosa/carey-clasico/angle.webp','assets/variants/rhapsody-carey-rosa/carey-clasico/model.webp'],
    'Nude':['assets/variants/rhapsody-carey-rosa/nude/front.webp','assets/variants/rhapsody-carey-rosa/nude/angle.webp','assets/variants/rhapsody-carey-rosa/nude/model.webp'],
    'Vino':['assets/variants/rhapsody-carey-rosa/vino/front.webp','assets/variants/rhapsody-carey-rosa/vino/angle.webp','assets/variants/rhapsody-carey-rosa/vino/model.webp'],
    'Negro':['assets/variants/rhapsody-carey-rosa/negro/front.webp','assets/variants/rhapsody-carey-rosa/negro/angle.webp','assets/variants/rhapsody-carey-rosa/negro/model.webp'],
    'Champagne':['assets/variants/rhapsody-carey-rosa/champagne/front.webp','assets/variants/rhapsody-carey-rosa/champagne/angle.webp','assets/variants/rhapsody-carey-rosa/champagne/model.webp']
  },
  'za-668-pastel': {
    'Rosa + miel':['assets/variants/za-668-pastel/rosa-miel/front.webp','assets/variants/za-668-pastel/rosa-miel/angle.webp','assets/variants/za-668-pastel/rosa-miel/model.webp'],
    'Rosa nude':['assets/variants/za-668-pastel/rosa-nude/front.webp','assets/variants/za-668-pastel/rosa-nude/angle.webp','assets/variants/za-668-pastel/rosa-nude/model.webp'],
    'Cristal champagne':['assets/variants/za-668-pastel/champagne/front.webp','assets/variants/za-668-pastel/champagne/angle.webp','assets/variants/za-668-pastel/champagne/model.webp'],
    'Lila suave':['assets/variants/za-668-pastel/lila/front.webp','assets/variants/za-668-pastel/lila/angle.webp','assets/variants/za-668-pastel/lila/model.webp'],
    'Miel':['assets/variants/za-668-pastel/miel/front.webp','assets/variants/za-668-pastel/miel/angle.webp','assets/variants/za-668-pastel/miel/model.webp'],
    'Carey claro':['assets/variants/za-668-pastel/carey-claro/front.webp','assets/variants/za-668-pastel/carey-claro/angle.webp','assets/variants/za-668-pastel/carey-claro/model.webp']
  },
  'zotti-za-554-negro': {
    'Negro brillante':['assets/variants/zotti-za-554-negro/negro-brillante/front.webp','assets/variants/zotti-za-554-negro/negro-brillante/angle.webp','assets/variants/zotti-za-554-negro/negro-brillante/model.webp'],
    'Negro mate':['assets/variants/zotti-za-554-negro/negro-mate/front.webp','assets/variants/zotti-za-554-negro/negro-mate/angle.webp','assets/variants/zotti-za-554-negro/negro-mate/model.webp'],
    'Carey oscuro':['assets/variants/zotti-za-554-negro/carey-oscuro/front.webp','assets/variants/zotti-za-554-negro/carey-oscuro/angle.webp','assets/variants/zotti-za-554-negro/carey-oscuro/model.webp'],
    'Vino':['assets/variants/zotti-za-554-negro/vino/front.webp','assets/variants/zotti-za-554-negro/vino/angle.webp','assets/variants/zotti-za-554-negro/vino/model.webp'],
    'Azul noche':['assets/variants/zotti-za-554-negro/azul-noche/front.webp','assets/variants/zotti-za-554-negro/azul-noche/angle.webp','assets/variants/zotti-za-554-negro/azul-noche/model.webp'],
    'Humo':['assets/variants/zotti-za-554-negro/humo/front.webp','assets/variants/zotti-za-554-negro/humo/angle.webp','assets/variants/zotti-za-554-negro/humo/model.webp']
  },
  'za-740-cristal': {
    'Champagne':['assets/variants/za-740-cristal/champagne/front.webp','assets/variants/za-740-cristal/champagne/angle.webp','assets/variants/za-740-cristal/champagne/model.webp'],
    'Cristal':['assets/variants/za-740-cristal/cristal/front.webp','assets/variants/za-740-cristal/cristal/angle.webp','assets/variants/za-740-cristal/cristal/model.webp'],
    'Rosa cristal':['assets/variants/za-740-cristal/rosa-cristal/front.webp','assets/variants/za-740-cristal/rosa-cristal/angle.webp','assets/variants/za-740-cristal/rosa-cristal/model.webp'],
    'Humo claro':['assets/variants/za-740-cristal/humo-claro/front.webp','assets/variants/za-740-cristal/humo-claro/angle.webp','assets/variants/za-740-cristal/humo-claro/model.webp'],
    'Arena':['assets/variants/za-740-cristal/arena/front.webp','assets/variants/za-740-cristal/arena/angle.webp','assets/variants/za-740-cristal/arena/model.webp'],
    'Caramelo':['assets/variants/za-740-cristal/caramelo/front.webp','assets/variants/za-740-cristal/caramelo/angle.webp','assets/variants/za-740-cristal/caramelo/model.webp']
  }
};

function getSelectedColor(p){ return selectedColors.get(p.slug) || p.colors?.[0]?.name || p.color; }
function getColorImages(p,colorName){
  const color=colorName || getSelectedColor(p);
  return COLOR_VARIANTS[p.slug]?.[color] || p.images || [p.image];
}
const state = {filter:'all',query:'',sort:'featured',visible:4,favorites:new Set(),favoritesOnly:false};
const selectedColors = new Map();
let modalGalleryIndex = 0;
const $ = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];

function productMedia(p){
  const src = getColorImages(p)[0];
  return `<img src="${src}" alt="Montura ${p.brand} ${p.name}" loading="lazy" />`;
}

function swatches(p){
  const colors = p.colors || [];
  const selected=getSelectedColor(p);
  return `<div class="swatches" aria-label="Colores disponibles">${colors.map(c=>`<button class="card-swatch ${c.name===selected?'active':''}" data-card-color="${c.name}" data-card-slug="${p.slug}" style="--swatch:${c.hex}" title="${c.name}" aria-label="Cambiar a ${c.name}"><span></span></button>`).join('')}</div>`;
}

function productCard(p){
  const sale = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : null;
  const fav = state.favorites.has(p.slug);
  return `<article class="product-card" data-category="${p.category}" data-slug="${p.slug}">
    <div class="product-media real-photo"><span class="product-badge">${p.badge}</span><span class="gallery-count">3 vistas</span><button class="favorite-button ${fav?'favorite':''}" data-favorite="${p.slug}" aria-label="Favorito">${fav?'♥':'♡'}</button><button class="quick-view" data-quick="${p.slug}">Vista rápida</button>${productMedia(p)}</div>
    <div class="product-info"><div class="product-brandline"><span>${p.brand}</span><span>${p.fit}</span></div><h3>${p.name}</h3><div class="product-color">${getSelectedColor(p)}</div><div class="product-price"><strong>S/${p.price}</strong>${p.oldPrice?`<del>S/${p.oldPrice}</del><span class="discount">-${sale}%</span>`:''}</div>${swatches(p)}</div>
  </article>`;
}

function applyFilters(){
  let list = products.filter(p => {
    const filterMatch = state.filter==='all' || (state.filter==='sale' ? !!p.oldPrice : p.category===state.filter);
    const q = state.query.trim().toLowerCase();
    const haystack = [p.brand,p.name,p.category,p.color,p.badge,p.material,p.fit,p.code,p.shape,p.description,p.hook,...(p.tags||[])].join(' ').toLowerCase();
    const queryMatch = !q || haystack.includes(q);
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(p.slug);
    return filterMatch && queryMatch && favoriteMatch;
  });
  if(state.sort==='low') list.sort((a,b)=>a.price-b.price);
  if(state.sort==='high') list.sort((a,b)=>b.price-a.price);
  return list;
}

function renderProducts(){
  const list = applyFilters();
  const count = $('#product-count'); if(count) count.textContent = list.length;
  const grid = $('#catalog-grid'); if(!grid) return;
  grid.innerHTML = list.length ? list.slice(0,state.visible).map(productCard).join('') : `<div class="empty-state"><strong>No encontramos monturas con ese criterio.</strong><span>Prueba otra búsqueda o escríbenos por WhatsApp para pedir más modelos.</span></div>`;
  const favoriteButton=$('#header-favorites'); if(favoriteButton){favoriteButton.classList.toggle('active',state.favoritesOnly);favoriteButton.setAttribute('aria-pressed',state.favoritesOnly?'true':'false')} 
}

function setFilter(filter){
  state.filter = filter;
  state.favoritesOnly = false;
  state.visible = 4;
  $$('.chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===filter));
  renderProducts();
}

function quickWhatsappHref(p, colorName){
  const color = colorName || selectedColors.get(p.slug) || p.colors?.[0]?.name || p.color;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola NOVAIR, quiero información sobre la montura ${p.brand} ${p.name} (${p.code}) en color ${color}.`)}`;
}


function openQuickView(slug){
  const p = products.find(x=>x.slug===slug); if(!p) return;
  modalGalleryIndex = 0;
  const selectedColor = getSelectedColor(p);
  const activeImages=getColorImages(p,selectedColor);
  const gallery = activeImages.map((src,i)=>`<button class="modal-thumb ${i===0?'active':''}" data-gallery-image="${i}" aria-label="Ver imagen ${i+1}"><img src="${src}" alt="${p.brand} ${p.name} vista ${i+1}" /></button>`).join('');
  const palette = (p.colors||[]).map(c=>`<button class="modal-color-dot ${c.name===selectedColor?'active':''}" data-color-option="${c.name}" style="--swatch:${c.hex}" aria-label="Color ${c.name}" title="${c.name}"><span></span></button>`).join('');
  $('#modal-content').innerHTML = `<div class="modal-grid">
    <div class="modal-media photo-modal">
      <div class="modal-gallery-stage"><img id="modal-main-image" src="${activeImages[0]}" alt="${p.brand} ${p.name}" /></div>
      <div class="modal-thumbs">${gallery}</div>
      <small class="modal-gallery-help">Frontal · perfil 3/4 · puesta en modelo</small>
    </div>
    <div class="modal-copy">
      <p class="eyebrow">${p.brand} · ${p.stockLabel||'stock real'}</p>
      <h2>${p.name}</h2>
      <p class="modal-color">${p.fit}</p>
      <p class="modal-description lead-copy">${p.description}</p>
      <div class="modal-highlight"><b>Ideal para</b><span>${p.face}</span></div>
      <div class="modal-specs"><span><b>Código</b>${p.code}</span><span><b>Material</b>${p.material}</span><span><b>Precio montura</b>S/${p.price}</span></div>
      <div class="color-picker"><div class="color-picker-head"><div><b>Elige tu color</b><span id="selected-color-name">${selectedColor}</span></div><small>Consulta disponibilidad</small></div><div class="modal-palette">${palette}</div></div>
      <div class="modal-price"><strong>S/${p.price}</strong>${p.oldPrice?`<del>S/${p.oldPrice}</del>`:''}<small>montura sola</small></div>
      <div class="modal-actions"><a class="button button-primary" id="modal-whatsapp" href="${quickWhatsappHref(p)}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a><button class="button button-outline" data-favorite="${p.slug}">${state.favorites.has(p.slug)?'Quitar de favoritos':'Guardar favorito'}</button></div>
      <small class="product-note">Las fotografías corresponden al modelo real mostrado. Los colores alternativos están sujetos a stock. Lunas y tratamientos se cotizan por separado según receta.</small>
    </div>
  </div>`;
  const modal = $('#product-modal');
  modal.dataset.productSlug=p.slug;
  if(typeof modal.showModal==='function') modal.showModal(); else modal.setAttribute('open','');
  document.body.classList.add('no-scroll');
}

function updateQuickViewColor(product,color){
  const dialog=$('#product-modal');
  const images=getColorImages(product,color);
  modalGalleryIndex=0;
  const main=$('#modal-main-image');
  if(main){main.style.opacity='0';setTimeout(()=>{main.src=images[0];main.alt=`${product.brand} ${product.name} ${color}`;main.style.opacity='1';},90)}
  const thumbs=$('.modal-thumbs',dialog);
  if(thumbs){thumbs.innerHTML=images.map((src,i)=>`<button class="modal-thumb ${i===0?'active':''}" data-gallery-image="${i}" aria-label="Ver imagen ${i+1} en ${color}"><img src="${src}" alt="${product.brand} ${product.name} ${color} vista ${i+1}" /></button>`).join('')}
  $$('.modal-color-dot',dialog).forEach(btn=>btn.classList.toggle('active',btn.dataset.colorOption===color));
  const label=$('#selected-color-name');if(label)label.textContent=color;
  const wa=$('#modal-whatsapp');if(wa)wa.href=quickWhatsappHref(product,color);
}

function closeModal(){ const m=$('#product-modal'); if(typeof m.close==='function'&&m.open)m.close(); else m?.removeAttribute('open'); document.body.classList.remove('no-scroll'); }

// Hero carousel: arrows, dots, autoplay and touch swipe.
const heroSlides=$$('[data-hero-slide]');
const heroTrack=$('#hero-track');
const heroDots=$('#hero-dots');
let heroIndex=0;
let heroTimer=null;
let heroTouchStart=0;
function buildHeroDots(){if(!heroDots)return;heroDots.innerHTML=heroSlides.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" data-hero-dot="${i}" aria-label="Ir a diapositiva ${i+1}"></button>`).join('')}
function goToHeroSlide(index,{restart=true}={}){
  if(!heroSlides.length||!heroTrack)return;
  heroIndex=(index+heroSlides.length)%heroSlides.length;
  heroTrack.style.transform=`translateX(-${heroIndex*100}%)`;
  heroSlides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===heroIndex);slide.setAttribute('aria-hidden',i===heroIndex?'false':'true')});
  $$('[data-hero-dot]').forEach((dot,i)=>dot.classList.toggle('active',i===heroIndex));
  if(restart)startHeroAutoplay();
}
function startHeroAutoplay(){clearInterval(heroTimer);heroTimer=setInterval(()=>goToHeroSlide(heroIndex+1,{restart:false}),6500)}
function stopHeroAutoplay(){clearInterval(heroTimer);heroTimer=null}
buildHeroDots();startHeroAutoplay();
$('#hero-prev')?.addEventListener('click',()=>goToHeroSlide(heroIndex-1));
$('#hero-next')?.addEventListener('click',()=>goToHeroSlide(heroIndex+1));
heroDots?.addEventListener('click',e=>{const dot=e.target.closest('[data-hero-dot]');if(dot)goToHeroSlide(Number(dot.dataset.heroDot))});
$('#hero')?.addEventListener('mouseenter',stopHeroAutoplay);
$('#hero')?.addEventListener('mouseleave',startHeroAutoplay);
$('#hero')?.addEventListener('touchstart',e=>{heroTouchStart=e.touches[0].clientX},{passive:true});
$('#hero')?.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-heroTouchStart;if(Math.abs(delta)>45)goToHeroSlide(heroIndex+(delta<0?1:-1))},{passive:true});

// Digital prescription upload.
const recipeUpload=$('#recipe-upload');
const recipeFileName=$('#recipe-file-name');
recipeUpload?.addEventListener('change',()=>{
  const file=recipeUpload.files?.[0];if(!file)return;
  const allowed=['image/jpeg','image/png','image/webp','application/pdf'];
  if(!allowed.includes(file.type)){recipeUpload.value='';if(recipeFileName){recipeFileName.textContent='Formato no admitido. Usa JPG, PNG, WEBP o PDF.';recipeFileName.classList.remove('loaded')}return}
  if(recipeFileName){recipeFileName.textContent=`Receta seleccionada: ${file.name}`;recipeFileName.classList.add('loaded')}
});

document.addEventListener('click',e=>{
  const showcase=e.target.closest('[data-showcase-category]');if(showcase){renderShowcaseCatalog(showcase.dataset.showcaseCategory);return}
  const chip=e.target.closest('[data-filter]');if(chip)setFilter(chip.dataset.filter);
  const nav=e.target.closest('[data-nav-category]');if(nav)setFilter(nav.dataset.navCategory);
  const cat=e.target.closest('[data-category-card]');if(cat)setFilter(cat.dataset.categoryCard);
  const quick=e.target.closest('[data-quick]');if(quick)openQuickView(quick.dataset.quick);
  const galleryButton=e.target.closest('[data-gallery-image]');
  if(galleryButton){
    modalGalleryIndex=Number(galleryButton.dataset.galleryImage);
    const src=galleryButton.querySelector('img')?.src;
    const main=$('#modal-main-image');if(main&&src)main.src=src;
    $$('.modal-thumb').forEach((btn,i)=>btn.classList.toggle('active',i===modalGalleryIndex));
  }
  const cardColor=e.target.closest('[data-card-color]');
  if(cardColor){
    e.preventDefault();e.stopPropagation();
    const product=products.find(x=>x.slug===cardColor.dataset.cardSlug);
    if(product){selectedColors.set(product.slug,cardColor.dataset.cardColor);renderProducts()}
  }
  const colorButton=e.target.closest('[data-color-option]');
  if(colorButton){
    const dialog=$('#product-modal');
    const product=products.find(x=>x.slug===dialog?.dataset.productSlug);
    if(product){
      const color=colorButton.dataset.colorOption;
      selectedColors.set(product.slug,color);
      updateQuickViewColor(product,color);
    }
  }
  const fav=e.target.closest('[data-favorite]');if(fav){const slug=fav.dataset.favorite;state.favorites.has(slug)?state.favorites.delete(slug):state.favorites.add(slug);renderProducts();const modal=$('#product-modal');if(modal?.open&&modal.dataset.productSlug===slug){const modalFav=$('.modal-actions [data-favorite]',modal);if(modalFav)modalFav.textContent=state.favorites.has(slug)?'Quitar de favoritos':'Guardar favorito'}}
});
$('#global-search')?.addEventListener('input',e=>{state.query=e.target.value;state.visible=4;renderProducts()});
$('#sort-products')?.addEventListener('change',e=>{state.sort=e.target.value;renderProducts()});
$('#header-favorites')?.addEventListener('click',()=>{state.favoritesOnly=!state.favoritesOnly;state.visible=4;renderProducts();$('#best-sellers')?.scrollIntoView({behavior:'smooth',block:'start'})});
const requestMoreModels=$('#request-more-models');
requestMoreModels?.addEventListener('click',()=>{const context=state.query.trim()?` Busco algo relacionado con: ${state.query.trim()}.`:'';requestMoreModels.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola NOVAIR, quiero ver más modelos de monturas.${context}`)}`});
$('#showcase-catalog-close')?.addEventListener('click',closeShowcaseCatalog);
$('#mobile-menu-toggle')?.addEventListener('click',()=>$('#category-nav')?.classList.toggle('open'));
$('#modal-close')?.addEventListener('click',closeModal);
$('#product-modal')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='ArrowLeft')goToHeroSlide(heroIndex-1);if(e.key==='ArrowRight')goToHeroSlide(heroIndex+1)});

renderProducts();
