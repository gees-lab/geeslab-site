const { products, liteProducts } = window.geeslabCatalog;

const storeNames = { booth: "BOOTH", fanza: "FANZA", dlsite: "DLsite" };
const productGrid = document.getElementById("product-grid");
const liteProductGrid = document.getElementById("lite-product-grid");

const renderProducts = (items, label) => items.map((product, index) => {
  const detailUrl = label === "WORK" ? `works/${String(product.id).padStart(2, "0")}/` : "";
  const detailLink = detailUrl ? `<a class="product-link product-detail-link" href="${detailUrl}">作品詳細を見る</a>` : "";
  const links = Object.entries(product.links).map(([store, url]) => `<a class="product-link" href="${url}" target="_blank" rel="noopener noreferrer">${storeNames[store]}で見る</a>`).join("");
  const image = `<img class="product-image" src="assets/products/${product.image}" alt="${product.title} パッケージ画像" width="560" height="420" loading="${index < 2 ? "eager" : "lazy"}">`;
  const imageBlock = detailUrl
    ? `<a class="product-image-link" href="${detailUrl}" aria-label="${product.title}の詳細を見る">${image}</a>`
    : product.links.booth
      ? `<a class="product-image-link" href="${product.links.booth}" target="_blank" rel="noopener noreferrer" aria-label="${product.title}をBOOTHで見る">${image}</a>`
    : `<div class="product-image-link">${image}</div>`;
  const badge = product.status || (index === 0 ? "NEW" : "");
  const title = detailUrl ? `<a class="product-title-link" href="${detailUrl}">${product.title}</a>` : product.title;
  return `<article class="product-card${index === 0 ? " featured-product" : ""}">
    ${imageBlock}
    <div class="product-body">
      <div class="product-meta"><span>${label} ${String(product.id).padStart(2, "0")}</span>${badge ? `<span class="new-badge">${badge}</span>` : ""}</div>
      <h3>${title}</h3><p>${product.details}</p><div class="product-links">${detailLink}${links}</div>
    </div>
  </article>`;
}).join("");

liteProductGrid.innerHTML = renderProducts(liteProducts, "LITE");
productGrid.innerHTML = renderProducts(products, "WORK");

document.getElementById("year").textContent = new Date().getFullYear();
