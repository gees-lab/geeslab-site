const { products } = window.geeslabCatalog;
const storeNames = { booth: "BOOTH", fanza: "FANZA", dlsite: "DLsite" };
const page = document.getElementById("work-detail");
const workId = Number(page.dataset.workId);
const product = products.find((item) => item.id === workId);

if (!product) {
  window.location.replace("../../#works");
} else {
  const workNumber = String(product.id).padStart(2, "0");
  const sortedProducts = [...products].sort((a, b) => a.id - b.id);
  const currentIndex = sortedProducts.findIndex((item) => item.id === product.id);
  const previousProduct = sortedProducts[currentIndex - 1];
  const nextProduct = sortedProducts[currentIndex + 1];

  document.getElementById("breadcrumb-work").textContent = `WORK ${workNumber}`;
  document.getElementById("work-number").textContent = `WORK ${workNumber}`;
  document.getElementById("work-title").textContent = product.title;
  document.getElementById("work-summary").textContent = product.details;
  document.getElementById("work-intro").textContent = product.intro;

  const cover = document.getElementById("work-cover");
  cover.src = `../../assets/products/${product.image}`;
  cover.alt = `${product.title} パッケージ画像`;

  document.getElementById("contents-list").innerHTML = product.contents.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("purchase-links").innerHTML = Object.entries(product.links).map(([store, url]) => `<a class="purchase-link" href="${url}" target="_blank" rel="noopener noreferrer">${storeNames[store]}で見る</a>`).join("");

  const setPaginationLink = (elementId, item, prefix) => {
    const element = document.getElementById(elementId);
    if (!item) {
      element.classList.add("is-empty");
      element.removeAttribute("href");
      return;
    }
    const number = String(item.id).padStart(2, "0");
    element.href = `../${number}/`;
    element.textContent = `${prefix} WORK ${number}`;
  };

  setPaginationLink("previous-work", previousProduct, "←");
  setPaginationLink("next-work", nextProduct, "WORK");
  if (nextProduct) document.getElementById("next-work").textContent += " →";
}

document.getElementById("year").textContent = new Date().getFullYear();
