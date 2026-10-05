const products = [
  { id: 8, title: "近所に住むモブ顔MILFに色々処理してもらう", details: "本編画像155枚・動画5本・PDF", image: "assets/products/08_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8936455", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01733718.html" } },
  { id: 7, title: "酔った姉にイタズラしようとしたら気づかれてそのままエッチしてしまった", details: "本編画像145枚・動画6本・PDF", image: "assets/products/07_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8833186", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_820932/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01719459.html" } },
  { id: 6, title: "近所の人妻似のデリヘル嬢を呼んでみたら本人だった", details: "本編画像135枚・動画5本・PDF", image: "assets/products/06_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8771731", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_822585/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01722061.html" } },
  { id: 5, title: "むっちり人妻MILFの紳士向けイラスト集", details: "本編画像135枚・動画5本・PDF", image: "assets/products/05_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8722573", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_808358/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01722066.html" } },
  { id: 4, title: "カートゥーン風専業主婦 紳士向けイラスト集", details: "本編画像135枚・動画5本・PDF", image: "assets/products/04_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8697163", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_806254/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01711546.html" } },
  { id: 3, title: "遊びに来た叔母に催眠アプリを使ってみた", details: "65枚・動画5本・PDF", image: "assets/products/03_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8486220", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_822580/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01733756.html" } },
  { id: 2, title: "三白眼ボーイッシュの紳士向けイラスト集", details: "画像55枚＋10枚・動画5本・PDF", image: "assets/products/02_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8357421", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_797749/" } },
  { id: 1, title: "三白眼ポニーテールMILFの紳士向けイラスト集", details: "画像50枚・動画5本・PDF", image: "assets/products/01_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8076993", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_801891/" } }
];

const liteProducts = [
  { id: 1, title: "金髪ツインテ巨乳MILF", details: "画像72枚", image: "assets/products/lite_01_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8926573" } }
];

const storeNames = { booth: "BOOTH", fanza: "FANZA", dlsite: "DLsite" };
const productGrid = document.getElementById("product-grid");
const liteProductGrid = document.getElementById("lite-product-grid");

const renderProducts = (items, label) => items.map((product, index) => {
  const links = Object.entries(product.links).map(([store, url]) => `<a class="product-link" href="${url}" target="_blank" rel="noopener noreferrer">${storeNames[store]}で見る</a>`).join("");
  const image = `<img class="product-image" src="${product.image}" alt="${product.title} パッケージ画像" width="560" height="420" loading="${index < 2 ? "eager" : "lazy"}">`;
  const imageBlock = product.links.booth
    ? `<a class="product-image-link" href="${product.links.booth}" target="_blank" rel="noopener noreferrer" aria-label="${product.title}をBOOTHで見る">${image}</a>`
    : `<div class="product-image-link">${image}</div>`;
  const badge = product.status || (index === 0 ? "NEW" : "");
  return `<article class="product-card${index === 0 ? " featured-product" : ""}">
    ${imageBlock}
    <div class="product-body">
      <div class="product-meta"><span>${label} ${String(product.id).padStart(2, "0")}</span>${badge ? `<span class="new-badge">${badge}</span>` : ""}</div>
      <h3>${product.title}</h3><p>${product.details}</p><div class="product-links">${links}</div>
    </div>
  </article>`;
}).join("");

liteProductGrid.innerHTML = renderProducts(liteProducts, "LITE");
productGrid.innerHTML = renderProducts(products, "WORK");

document.getElementById("year").textContent = new Date().getFullYear();
