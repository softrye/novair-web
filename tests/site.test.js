const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('NOVAIR homepage keeps the core storefront sections and official identity assets', () => {
  const html = read('index.html');
  for (const id of ['promo-strip','site-header','category-nav','hero','benefits','category-discovery','best-sellers','promo-editorial','how-to-buy','site-footer']) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing ${id}`);
  }
  assert.match(html, /assets\/novair-logo\.png/);
  assert.match(html, /assets\/novair-isotipo\.png/);
});

test('hero remains a real sliding carousel and now prioritizes promotional videos', () => {
  const html = read('index.html');
  assert.match(html, /id=["']hero-track["']/);
  assert.match(html, /data-hero-slide/g);
  assert.match(html, /id=["']hero-prev["']/);
  assert.match(html, /id=["']hero-next["']/);
  assert.match(html, /id=["']hero-dots["']/);
  assert.match(html, /hero-video/);
  assert.match(html, /Tu estilo empieza en la montura/i);
  assert.match(html, /La precisión está en tus lunas/i);
  assert.match(html, /Sube tu receta/i);
  const js = read('app.js');
  assert.match(js, /goToHeroSlide/);
  assert.match(js, /touchstart/);
  assert.match(js, /setInterval/);
});

test('common frame brands and current lab references are represented', () => {
  const html = read('index.html');
  for (const brand of ['ANDRE NICOL','COLOR WISSE','TR90','RHAPSODY','ZOTTI','Z FASHION']) {
    assert.match(html, new RegExp(brand, 'i'), `missing frame brand ${brand}`);
  }
  for (const lens of ['RBC Lab','TOPSA','Sharp Vision','Roster']) {
    assert.match(html, new RegExp(lens, 'i'), `missing lab ${lens}`);
  }
  assert.match(html, /laboratorio peruano/i);
  assert.match(html, /soluciones premium/i);
});

test('prescription flow is explicitly virtual and never tells the customer to bring a physical recipe', () => {
  const html = read('index.html');
  assert.match(html, /id=["']recipe-upload["']/);
  assert.match(html, /accept=["'][^"']*image\/[^"']*application\/pdf/i);
  assert.match(html, /Sube tu receta/i);
  assert.match(html, /foto o PDF/i);
  assert.doesNotMatch(html, /trae tu receta/i);
  const js = read('app.js');
  assert.match(js, /recipe-upload/);
  assert.match(js, /recipe-file-name/);
});

test('catalog now uses real stock items and keeps interactive storefront behavior', () => {
  const js = read('app.js');
  const productMatches = js.match(/slug:\s*['"][^'"]+['"]/g) || [];
  assert.ok(productMatches.length >= 4, `expected >= 4 real products, got ${productMatches.length}`);
  for (const brand of ['Rhapsody','Z Fashion','Zotti Fashion']) assert.match(js, new RegExp(brand));
  for (const category of ['carey','cateye','transparente']) assert.match(js, new RegExp(`category:['"]${category}['"]`));
  assert.match(js, /assets\/products\//);
  assert.match(js, /renderProducts/);
  assert.match(js, /applyFilters/);
  assert.match(js, /openQuickView/);
  const html = read('index.html');
  for (const id of ['global-search','filter-chips','sort-products','product-modal','mobile-menu-toggle','catalog-grid']) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(js, /favorites/);
  assert.match(js, /Escape/);
});

test('updated WhatsApp number is used across the storefront', () => {
  const html = read('index.html');
  const js = read('app.js');
  assert.match(html, /51913843772/);
  assert.match(js, /51913843772/);
  assert.doesNotMatch(html, /51999999999/);
});

test('NOVAIR palette remains present in the stylesheet', () => {
  const css = read('styles.css').toUpperCase();
  for (const hex of ['#1F304A','#C9DAE1','#F3EBE3','#FFFFFF','#20242B']) assert.match(css, new RegExp(hex));
});

test('customer-facing copy avoids internal pricing and business-strategy language', () => {
  const html = read('index.html');
  for (const forbidden of [
    'Rango competitivo en Lima',
    'arranque comercial',
    'rentabilidad de NOVAIR',
    'competir mejor',
    'ganar mejor en lunas',
    'levantar el ticket',
    'precio bajo para competir',
    'Monturas fáciles de vender'
  ]) assert.doesNotMatch(html, new RegExp(forbidden, 'i'), `internal copy leaked: ${forbidden}`);
  assert.match(html, /Tu estilo empieza en la montura/i);
  assert.match(html, /La precisión está en tus lunas/i);
});

test('hero has at least five slides and prioritizes video storytelling', () => {
  const html = read('index.html');
  const slides = html.match(/data-hero-slide/g) || [];
  const videos = html.match(/<video class="hero-video"/g) || [];
  assert.ok(slides.length >= 5, `expected >=5 hero slides, got ${slides.length}`);
  assert.ok(videos.length >= 4, `expected >=4 hero videos, got ${videos.length}`);
});

test('primary storefront actions are wired and no placeholder footer links remain', () => {
  const html = read('index.html');
  const js = read('app.js');
  assert.match(html, /id="header-favorites"/);
  assert.match(html, /id="request-more-models"/);
  assert.match(html, /id="whatsapp-float"/);
  assert.match(html, /wa\.me\/51913843772\?text=/);
  assert.doesNotMatch(html, /href="#"/);
  assert.match(js, /header-favorites/);
  assert.match(js, /favoritesOnly/);
  assert.match(js, /request-more-models/);
});

test('whatsapp floating CTA uses a marketing label and the official number', () => {
  const html = read('index.html');
  assert.match(html, /Cotiza por WhatsApp/i);
  assert.match(html, /51913843772/);
});

test('header actions and WhatsApp use real SVG icons instead of placeholder glyphs', () => {
  const html = read('index.html');
  assert.match(html, /id="header-favorites"[\s\S]*?<svg/i);
  assert.match(html, /class="header-action header-help"[\s\S]*?<svg/i);
  assert.match(html, /class="header-action header-whatsapp"[\s\S]*?<svg/i);
  assert.match(html, /id="whatsapp-float"[\s\S]*?class="wa-icon"[\s\S]*?<svg/i);
  assert.doesNotMatch(html, /<span>♡<\/span>/);
  assert.doesNotMatch(html, /<span>\?<\/span>/);
  assert.doesNotMatch(html, /<span>◌<\/span>/);
});

test('how-to-buy cards expose explicit action buttons with icons', () => {
  const html = read('index.html');
  for (const label of ['Ver catálogo','Escribir por WhatsApp','Subir mi receta','Consultar envío']) {
    assert.match(html, new RegExp(label, 'i'), `missing CTA ${label}`);
  }
  assert.match(html, /class="step-action[^"]*"[\s\S]*?<svg/i);
  assert.doesNotMatch(html, />Seleccionar archivo</i);
});

test('mobile header keeps favorites help and whatsapp visibly accessible', () => {
  const css = read('styles.css');
  assert.doesNotMatch(css, /\.header-action:nth-child\(1\),\.header-action:nth-child\(2\)\{display:none\}/);
  assert.match(css, /\.header-action[^{]*\{[^}]*min-height:/i);
});

test('all four frame prices are updated to the new S/120-S/200 range', () => {
  const js = read('app.js');
  const expected = {
    'rhapsody-carey-rosa': [159, 179],
    'za-668-pastel': [149, 169],
    'zotti-za-554-negro': [189, 199],
    'za-740-cristal': [129, 149]
  };
  for (const [slug, [price, oldPrice]] of Object.entries(expected)) {
    const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const product = new RegExp(`slug:['"]${escaped}['"][\\s\\S]*?price:${price},\\s*oldPrice:${oldPrice}`);
    assert.match(js, product, `wrong price for ${slug}`);
  }
  const prices = [...js.matchAll(/\b(?:price|oldPrice):(\d+)/g)].map(m => Number(m[1]));
  assert.ok(prices.length >= 8, 'expected prices and comparison prices for all products');
  assert.ok(prices.every(value => value >= 120 && value <= 200), `found price outside range: ${prices.join(', ')}`);
});

test('legacy low-price messaging is removed from the current storefront', () => {
  const js = read('app.js');
  const html = read('index.html');
  for (const legacy of ['S/45','S/49','S/55','S/59','S/65','S/69','Precio de entrada']) {
    assert.doesNotMatch(js + html, new RegExp(legacy.replace('/', '\\/'), 'i'), `legacy price copy remains: ${legacy}`);
  }
});


test('GMO-inspired category showcase exposes four visual entry points and demo catalogs', () => {
  const html = read('index.html');
  const js = read('app.js');
  const css = read('styles.css');
  assert.match(html, /id=["']category-showcase["']/);
  for (const label of ['Lentes oftálmicos','Lentes de sol','Lentes de contacto','Ofertas']) {
    assert.match(html, new RegExp(label, 'i'), `missing category ${label}`);
  }
  assert.match(html, /data-showcase-category=/);
  assert.match(html, /id=["']category-catalog-panel["']/);
  assert.match(js, /showcaseCatalogs/);
  assert.match(js, /renderShowcaseCatalog/);
  assert.match(js, /data-showcase-category/);
  assert.match(css, /\.category-showcase-grid/);
  assert.match(css, /\.showcase-catalog-grid/);
});
