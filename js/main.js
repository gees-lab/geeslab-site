const products = [
  { id: 7, title: "酔った姉にイタズラしようとしたら気づかれてそのままエッチしてしまった", details: "本編画像145枚・動画6本・PDF", image: "assets/products/07_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8833186", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_820932/" } },
  { id: 6, title: "近所の人妻似のデリヘル嬢を呼んでみたら本人だった", details: "本編画像135枚・動画5本・PDF", image: "assets/products/06_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8771731" } },
  { id: 5, title: "むっちり人妻MILFの紳士向けイラスト集", details: "本編画像135枚・動画5本・PDF", image: "assets/products/05_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8722573", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_808358/" } },
  { id: 4, title: "カートゥーン風専業主婦 紳士向けイラスト集", details: "本編画像135枚・動画5本・PDF", image: "assets/products/04_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8697163", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_806254/", dlsite: "https://www.dlsite.com/aix/work/=/product_id/RJ01711546.html" } },
  { id: 3, title: "遊びに来た叔母に催眠アプリを使ってみた", details: "65枚・動画5本・PDF", image: "assets/products/03_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8486220" } },
  { id: 2, title: "三白眼ボーイッシュの紳士向けイラスト集", details: "画像55枚＋10枚・動画5本・PDF", image: "assets/products/02_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8357421", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_797749/" } },
  { id: 1, title: "三白眼ポニーテールMILFの紳士向けイラスト集", details: "画像50枚・動画5本・PDF", image: "assets/products/01_package.jpg", links: { booth: "https://geeslab.booth.pm/items/8076993", fanza: "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_801891/" } }
];

const storeNames = { booth: "BOOTH", fanza: "FANZA", dlsite: "DLsite" };
const productGrid = document.getElementById("product-grid");

productGrid.innerHTML = products.map((product, index) => {
  const links = Object.entries(product.links).map(([store, url]) => `<a class="product-link" href="${url}" target="_blank" rel="noopener noreferrer">${storeNames[store]}で見る</a>`).join("");
  return `<article class="product-card${index === 0 ? " featured-product" : ""}">
    <a class="product-image-link" href="${product.links.booth}" target="_blank" rel="noopener noreferrer" aria-label="${product.title}をBOOTHで見る">
      <img class="product-image" src="${product.image}" alt="${product.title} パッケージ画像" width="560" height="420" loading="${index < 2 ? "eager" : "lazy"}">
    </a>
    <div class="product-body">
      <div class="product-meta"><span>WORK ${String(product.id).padStart(2, "0")}</span>${index === 0 ? '<span class="new-badge">NEW</span>' : ""}</div>
      <h3>${product.title}</h3><p>${product.details}</p><div class="product-links">${links}</div>
    </div>
  </article>`;
}).join("");

document.getElementById("year").textContent = new Date().getFullYear();
