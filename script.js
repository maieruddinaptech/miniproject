"use strict";

const watchImages = [
  "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=88"
];

const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    collection: "Professional",
    price: 14850,
    rating: 4.9,
    badge: "Icon",
    availability: "In stock",
    description: "The benchmark diving watch, engineered for clarity beneath the surface.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "300 metres / 1,000 feet",
    caseSize: "41 mm",
    dial: "Black",
    features: ["Cerachrom bezel", "Chromalight display", "Triplock crown"]
  },
  {
    id: 2,
    name: "Rolex Daytona",
    collection: "Professional",
    price: 34900,
    rating: 5,
    badge: "Collector's choice",
    availability: "Limited",
    description: "A legendary chronograph born from the exacting world of motor racing.",
    movement: "Perpetual chronograph, self-winding",
    material: "18 ct yellow gold",
    bracelet: "Oysterflex",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Golden",
    features: ["Chronograph", "Tachymetric scale", "72-hour reserve"]
  },
  {
    id: 3,
    name: "Rolex GMT-Master II",
    collection: "Professional",
    price: 19800,
    rating: 4.9,
    badge: "Travel icon",
    availability: "In stock",
    description: "Created for global travellers who move effortlessly across time zones.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Jubilee, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Black",
    features: ["Dual time zones", "24-hour bezel", "Parachrom hairspring"]
  },
  {
    id: 4,
    name: "Rolex Datejust",
    collection: "Classic",
    price: 12500,
    rating: 4.8,
    badge: "Timeless",
    availability: "In stock",
    description: "The definitive classic watch, balancing elegance and everyday versatility.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and white gold",
    bracelet: "Jubilee, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "41 mm",
    dial: "Slate",
    features: ["Cyclops lens", "Fluted bezel", "Instant date"]
  },
  {
    id: 5,
    name: "Rolex Day-Date",
    collection: "Classic",
    price: 43500,
    rating: 4.9,
    badge: "Prestige",
    availability: "Limited",
    description: "An emblem of achievement crafted exclusively in precious metals.",
    movement: "Perpetual, mechanical, self-winding",
    material: "18 ct Everose gold",
    bracelet: "President, semi-circular links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Chocolate",
    features: ["Day display", "Instant date", "Twinlock crown"]
  },
  {
    id: 6,
    name: "Rolex Sky-Dweller",
    collection: "Classic",
    price: 28900,
    rating: 4.8,
    badge: "Innovative",
    availability: "In stock",
    description: "A sophisticated companion featuring an annual calendar and dual time.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and white gold",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "42 mm",
    dial: "Bright blue",
    features: ["Annual calendar", "Dual time", "Ring Command bezel"]
  },
  {
    id: 7,
    name: "Rolex Explorer",
    collection: "Professional",
    price: 11200,
    rating: 4.7,
    badge: "Adventure",
    availability: "In stock",
    description: "Built for exploration with exceptional legibility in demanding conditions.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "36 mm",
    dial: "Black",
    features: ["Chromalight display", "Paraflex absorbers", "Twinlock crown"]
  },
  {
    id: 8,
    name: "Rolex Explorer II",
    collection: "Professional",
    price: 13750,
    rating: 4.8,
    badge: "Expedition",
    availability: "In stock",
    description: "A robust tool watch with an additional 24-hour display for explorers.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "42 mm",
    dial: "White",
    features: ["24-hour hand", "Fixed bezel", "Chromalight display"]
  },
  {
    id: 9,
    name: "Rolex Sea-Dweller",
    collection: "Professional",
    price: 16500,
    rating: 4.8,
    badge: "Deep sea",
    availability: "In stock",
    description: "Professional saturation-diving performance in a commanding Oyster case.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and yellow gold",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "1,220 metres / 4,000 feet",
    caseSize: "43 mm",
    dial: "Black",
    features: ["Helium valve", "Cerachrom bezel", "Glidelock extension"]
  },
  {
    id: 10,
    name: "Rolex Deepsea",
    collection: "Professional",
    price: 18600,
    rating: 4.9,
    badge: "Extreme",
    availability: "Limited",
    description: "Engineered to withstand extraordinary pressure at oceanic depths.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "3,900 metres / 12,800 feet",
    caseSize: "44 mm",
    dial: "D-blue",
    features: ["Ringlock system", "Helium valve", "Glidelock extension"]
  },
  {
    id: 11,
    name: "Rolex Yacht-Master",
    collection: "Professional",
    price: 17750,
    rating: 4.7,
    badge: "Nautical",
    availability: "In stock",
    description: "A refined nautical watch equally at home on deck and ashore.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and platinum",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Slate",
    features: ["Bidirectional bezel", "Chromalight display", "Triplock crown"]
  },
  {
    id: 12,
    name: "Rolex Yacht-Master II",
    collection: "Professional",
    price: 26800,
    rating: 4.7,
    badge: "Regatta",
    availability: "Limited",
    description: "A purpose-built regatta chronograph with a programmable countdown.",
    movement: "Perpetual regatta chronograph",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "44 mm",
    dial: "White",
    features: ["Regatta countdown", "Ring Command bezel", "Flyback function"]
  },
  {
    id: 13,
    name: "Rolex Air-King",
    collection: "Professional",
    price: 10500,
    rating: 4.6,
    badge: "Aviation",
    availability: "In stock",
    description: "A tribute to aviation pioneers with a bold and highly legible dial.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Black",
    features: ["Minute scale", "Crown guard", "Chromalight display"]
  },
  {
    id: 14,
    name: "Rolex Milgauss",
    collection: "Professional",
    price: 15750,
    rating: 4.7,
    badge: "Rare",
    availability: "Limited",
    description: "Scientific ingenuity with resistance to powerful magnetic fields.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Z-blue",
    features: ["Magnetic shield", "Green crystal", "Lightning seconds hand"]
  },
  {
    id: 15,
    name: "Rolex Oyster Perpetual",
    collection: "Perpetual",
    price: 8950,
    rating: 4.7,
    badge: "Essential",
    availability: "In stock",
    description: "Pure Oyster design expressed through vibrant colour and balanced form.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "41 mm",
    dial: "Celebration motif",
    features: ["Domed bezel", "Chromalight display", "Syloxi hairspring"]
  },
  {
    id: 16,
    name: "Rolex Cosmograph Daytona",
    collection: "Professional",
    price: 38900,
    rating: 5,
    badge: "Masterpiece",
    availability: "Limited",
    description: "An icon of speed and endurance with unmistakable racing heritage.",
    movement: "Perpetual chronograph, self-winding",
    material: "18 ct Everose gold",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Sundust",
    features: ["Chronograph", "Tachymetric bezel", "Column wheel"]
  },
  {
    id: 17,
    name: "Rolex Cellini Moonphase",
    collection: "Cellini",
    price: 29400,
    rating: 4.8,
    badge: "Poetic",
    availability: "Limited",
    description: "Classical watchmaking elevated by an astronomical moonphase display.",
    movement: "Perpetual, mechanical, self-winding",
    material: "18 ct Everose gold",
    bracelet: "Brown alligator leather",
    waterResistance: "50 metres / 165 feet",
    caseSize: "39 mm",
    dial: "White lacquer",
    features: ["Moonphase", "Meteorite applique", "Double bezel"]
  },
  {
    id: 18,
    name: "Rolex Pearlmaster",
    collection: "Classic",
    price: 52000,
    rating: 4.9,
    badge: "Haute joaillerie",
    availability: "Limited",
    description: "A brilliant fusion of gem-setting artistry and horological excellence.",
    movement: "Perpetual, mechanical, self-winding",
    material: "18 ct white gold and diamonds",
    bracelet: "Pearlmaster, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "39 mm",
    dial: "Diamond-paved",
    features: ["Diamond setting", "Instant date", "Paramagnetic escape wheel"]
  },
  {
    id: 19,
    name: "Rolex Lady-Datejust",
    collection: "Classic",
    price: 16200,
    rating: 4.8,
    badge: "Grace",
    availability: "In stock",
    description: "Timeless elegance in a refined size, crafted with exceptional detail.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and Everose gold",
    bracelet: "Jubilee, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "28 mm",
    dial: "Aubergine",
    features: ["Cyclops lens", "Diamond markers", "Syloxi hairspring"]
  },
  {
    id: 20,
    name: "Rolex Oysterquartz",
    collection: "Classic",
    price: 13200,
    rating: 4.6,
    badge: "Vintage",
    availability: "Limited",
    description: "A distinctive angular classic powered by Rolex quartz precision.",
    movement: "Quartz calibre 5035",
    material: "Oystersteel",
    bracelet: "Integrated Oyster",
    waterResistance: "100 metres / 330 feet",
    caseSize: "36 mm",
    dial: "Silver",
    features: ["Quartz precision", "Integrated bracelet", "Instant date"]
  },
  {
    id: 21,
    name: "Rolex Turn-O-Graph",
    collection: "Classic",
    price: 11900,
    rating: 4.6,
    badge: "Heritage",
    availability: "In stock",
    description: "A historic rotating-bezel watch bridging sport and classic refinement.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel and white gold",
    bracelet: "Jubilee, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "36 mm",
    dial: "Black",
    features: ["Rotating bezel", "Red seconds hand", "Instant date"]
  },
  {
    id: 22,
    name: "Rolex Prince",
    collection: "Cellini",
    price: 22400,
    rating: 4.7,
    badge: "Art deco",
    availability: "Limited",
    description: "A rectangular dress watch inspired by the geometry of the Art Deco era.",
    movement: "Mechanical, manual winding",
    material: "18 ct white gold",
    bracelet: "Black alligator leather",
    waterResistance: "50 metres / 165 feet",
    caseSize: "28 × 47 mm",
    dial: "Silver and black",
    features: ["Small seconds", "Exhibition back", "Dual dial layout"]
  },
  {
    id: 23,
    name: "Rolex Sea-Dweller Deepsea",
    collection: "Professional",
    price: 21750,
    rating: 4.9,
    badge: "Professional",
    availability: "In stock",
    description: "Ultimate underwater engineering designed for the deepest frontiers.",
    movement: "Perpetual, mechanical, self-winding",
    material: "RLX titanium",
    bracelet: "Oyster, three-piece solid links",
    waterResistance: "11,000 metres / 36,090 feet",
    caseSize: "50 mm",
    dial: "Black",
    features: ["Ringlock system", "Helium valve", "Titanium case"]
  },
  {
    id: 24,
    name: "Rolex GMT Pepsi",
    collection: "Professional",
    price: 24900,
    rating: 4.9,
    badge: "Cult classic",
    availability: "Limited",
    description: "The celebrated red-and-blue GMT bezel, an icon of international travel.",
    movement: "Perpetual, mechanical, self-winding",
    material: "Oystersteel",
    bracelet: "Jubilee, five-piece links",
    waterResistance: "100 metres / 330 feet",
    caseSize: "40 mm",
    dial: "Black",
    features: ["Pepsi Cerachrom bezel", "Dual time zones", "70-hour reserve"]
  }
].map((product, index) => ({
  ...product,
  image: watchImages[index % watchImages.length],
  gallery: [
    watchImages[index % watchImages.length],
    watchImages[(index + 3) % watchImages.length],
    watchImages[(index + 7) % watchImages.length]
  ]
}));

const storageKeys = {
  cart: "chronolux-cart"
};

const elements = {
  nav: document.getElementById("mainNav"),
  progress: document.getElementById("scrollProgress"),
  backToTop: document.getElementById("backToTop"),
  productGrid: document.getElementById("productGrid"),
  emptyProducts: document.getElementById("emptyProducts"),
  resultsCount: document.getElementById("resultsCount"),
  search: document.getElementById("searchInput"),
  category: document.getElementById("categoryFilter"),
  price: document.getElementById("priceFilter"),
  sort: document.getElementById("sortProducts"),
  clearFilters: document.getElementById("clearFilters"),
  cartSidebar: document.getElementById("cartSidebar"),
  cartOverlay: document.getElementById("cartOverlay"),
  cartItems: document.getElementById("cartItems"),
  cartSummary: document.getElementById("cartSummary"),
  cartTotal: document.getElementById("cartTotal"),
  cartBadge: document.getElementById("cartBadge"),
  emptyCart: document.getElementById("emptyCart"),
  productModalContent: document.getElementById("productModalContent")
};

let cart = loadStorage(storageKeys.cart, []);
let productModal;

function loadStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}

function stars(rating) {
  const rounded = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) =>
    `<i class="bi ${index < rounded ? "bi-star-fill" : "bi-star"}"></i>`
  ).join("");
}

function productCard(product, index) {
  const limited = product.availability === "Limited";

  return `
    <div class="col-md-6 col-xl-4 product-column" data-aos="fade-up" data-aos-delay="${(index % 3) * 70}">
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <img
            class="product-image"
            src="${product.image}"
            alt="${product.name} luxury watch"
            width="900"
            height="900"
            loading="lazy"
          >
          <div class="product-badges">
            <span class="product-badge">${product.badge}</span>
            <span class="product-badge availability-badge ${limited ? "limited" : ""}">${product.availability}</span>
          </div>
        </div>
        <div class="product-body">
          <p class="product-collection">${product.collection} collection</p>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="rating-row">
            <span class="rating">${stars(product.rating)} <small>${product.rating.toFixed(1)}</small></span>
            <strong class="product-price">${formatCurrency(product.price)}</strong>
          </div>
          <div class="product-actions">
            <button class="btn-outline-luxury ripple-btn" type="button" data-action="details" data-id="${product.id}">
              View details
            </button>
            <button class="btn-luxury ripple-btn" type="button" data-action="add" data-id="${product.id}">
              <i class="bi bi-bag-plus"></i> Add to cart
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function getFilteredProducts() {
  const query = elements.search.value.trim().toLowerCase();
  const category = elements.category.value;
  const price = elements.price.value;
  const sort = elements.sort.value;

  const filtered = products.filter((product) => {
    const matchesQuery =
      product.name.toLowerCase().includes(query) ||
      product.collection.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    const matchesCategory = category === "all" || product.collection === category;
    const matchesPrice =
      price === "all" ||
      (price === "under15000" && product.price < 15000) ||
      (price === "15000to30000" && product.price >= 15000 && product.price <= 30000) ||
      (price === "over30000" && product.price > 30000);

    return matchesQuery && matchesCategory && matchesPrice;
  });

  return filtered.sort((first, second) => {
    if (sort === "priceAsc") return first.price - second.price;
    if (sort === "priceDesc") return second.price - first.price;
    if (sort === "rating") return second.rating - first.rating;
    if (sort === "name") return first.name.localeCompare(second.name);
    return first.id - second.id;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  elements.productGrid.innerHTML = filtered.map(productCard).join("");
  elements.resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "timepiece" : "timepieces"}`;
  elements.emptyProducts.classList.toggle("d-none", filtered.length > 0);
  initializeRipples();

  if (window.AOS) {
    AOS.refreshHard();
  }
}

function initializeRipples() {
  document.querySelectorAll(".ripple-btn:not([data-ripple-ready])").forEach((button) => {
    button.dataset.rippleReady = "true";
    button.addEventListener("click", (event) => {
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      ripple.className = "ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 700);
    });
  });
}

function showToast(title, icon = "success") {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true
  });
}

function addToCart(id, openAfterAdd = false) {
  const product = getProduct(id);
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveStorage(storageKeys.cart, cart);
  renderCart();
  showToast(`${product.name} added to your bag`);
  if (openAfterAdd) openCart();
}

function updateCartQuantity(id, change) {
  const item = cart.find((entry) => entry.id === Number(id));
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveStorage(storageKeys.cart, cart);
  renderCart();
}

function removeFromCart(id) {
  const product = getProduct(id);
  cart = cart.filter((item) => item.id !== Number(id));
  saveStorage(storageKeys.cart, cart);
  renderCart();
  if (product) showToast(`${product.name} removed`, "info");
}

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  elements.cartBadge.textContent = itemCount;
  elements.cartBadge.classList.toggle("animate__animated", itemCount > 0);
  elements.cartBadge.classList.toggle("animate__pulse", itemCount > 0);
  elements.cartTotal.textContent = formatCurrency(total);
  elements.emptyCart.classList.toggle("visible", cart.length === 0);
  elements.cartSummary.style.display = cart.length ? "block" : "none";
  elements.cartItems.style.display = cart.length ? "block" : "none";

  elements.cartItems.innerHTML = cart
    .map((item) => {
      const product = getProduct(item.id);
      if (!product) return "";
      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" width="95" height="105">
          <div>
            <small>${product.collection}</small>
            <h3>${product.name}</h3>
            <p>${formatCurrency(product.price)}</p>
            <div class="quantity-control" aria-label="Quantity controls">
              <button type="button" data-cart-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="remove-cart-item" type="button" data-cart-action="remove" data-id="${product.id}" aria-label="Remove ${product.name}">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      `;
    })
    .join("");
}

function openCart() {
  elements.cartSidebar.classList.add("open");
  elements.cartOverlay.classList.add("visible");
  elements.cartSidebar.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  elements.cartSidebar.classList.remove("open");
  elements.cartOverlay.classList.remove("visible");
  elements.cartSidebar.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}



function showProductDetails(id) {
  const product = getProduct(id);
  if (!product) return;

  elements.productModalContent.innerHTML = `
    <div class="row g-0">
      <div class="col-lg-6">
        <div class="product-detail-image">
          <img id="detailMainImage" src="${product.gallery[0]}" alt="${product.name}" width="900" height="900">
          <div class="gallery-thumbs">
            ${product.gallery
              .map(
                (image, index) => `
                  <button class="gallery-thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-image="${image}" aria-label="View image ${index + 1}">
                    <img src="${image}" alt="" width="62" height="62">
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="product-detail-copy">
          <p class="eyebrow"><span></span> ${product.collection} collection</p>
          <h2 id="productModalTitle">${product.name}</h2>
          <div class="detail-rating">
            <span class="rating">${stars(product.rating)}</span>
            <span>${product.rating.toFixed(1)} / 5</span>
            <span class="product-badge availability-badge ${product.availability === "Limited" ? "limited" : ""}">${product.availability}</span>
          </div>
          <p>${product.description} Every example is carefully authenticated, inspected, and presented with our CHRONOLUX five-year warranty.</p>
          <div class="detail-features">${product.features.map((feature) => `<span>${feature}</span>`).join("")}</div>
          <div class="spec-grid">
            <div><small>Movement</small><strong>${product.movement}</strong></div>
            <div><small>Case material</small><strong>${product.material}</strong></div>
            <div><small>Bracelet</small><strong>${product.bracelet}</strong></div>
            <div><small>Water resistance</small><strong>${product.waterResistance}</strong></div>
            <div><small>Case size</small><strong>${product.caseSize}</strong></div>
            <div><small>Dial colour</small><strong>${product.dial}</strong></div>
          </div>
          <div class="detail-purchase">
            <strong class="price">${formatCurrency(product.price)}</strong>
            <button class="btn-luxury ripple-btn" type="button" data-modal-add="${product.id}">
              <i class="bi bi-bag-plus"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  initializeRipples();
  productModal.show();
}

function initializeCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    (entries, counterObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const duration = 1700;
        const startTime = performance.now();

        function update(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(counter);
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  elements.progress.style.width = `${progress}%`;
  elements.nav.classList.toggle("scrolled", scrollTop > 45);
  elements.backToTop.classList.toggle("visible", scrollTop > 600);

  let currentSection = "home";
  document.querySelectorAll("main section[id]").forEach((section) => {
    if (scrollTop >= section.offsetTop - 180) currentSection = section.id;
  });

  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
}

function initializeParallax() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const hero = document.querySelector(".hero-section");
  hero.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll("[data-parallax]").forEach((element) => {
      const amount = Number(element.dataset.parallax);
      element.style.transform = `translate3d(${x * amount}px, ${y * amount}px, 0)`;
    });
  });

  hero.addEventListener("mouseleave", () => {
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      element.style.transform = "";
    });
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  productModal = new bootstrap.Modal(document.getElementById("productModal"));
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  if (window.AOS) {
    AOS.init({
      duration: 850,
      once: true,
      offset: 80,
      easing: "ease-out-cubic"
    });
  }

  renderProducts();
  renderCart();
  initializeCounters();
  initializeParallax();
  initializeRipples();
  updateScrollUI();

  window.setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1050);
});

window.addEventListener("load", () => {
  window.setTimeout(() => document.getElementById("loader").classList.add("hidden"), 250);
});

window.addEventListener("scroll", updateScrollUI, { passive: true });

document.addEventListener("mousemove", (event) => {
  const glow = document.getElementById("cursorGlow");
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarMenu");
    const instance = bootstrap.Collapse.getInstance(menu);
    if (instance) instance.hide();
  });
});

[elements.search, elements.category, elements.price, elements.sort].forEach((control) => {
  control.addEventListener(control === elements.search ? "input" : "change", renderProducts);
});

elements.clearFilters.addEventListener("click", () => {
  elements.search.value = "";
  elements.category.value = "all";
  elements.price.value = "all";
  elements.sort.value = "featured";
  renderProducts();
});

elements.productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  if (button.dataset.action === "add") addToCart(id);
  if (button.dataset.action === "details") showProductDetails(id);
});

elements.productModalContent.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-gallery-image]");
  if (thumb) {
    document.getElementById("detailMainImage").src = thumb.dataset.galleryImage;
    document.querySelectorAll(".gallery-thumb").forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  }

  const addButton = event.target.closest("[data-modal-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.modalAdd), true);
    productModal.hide();
  }
});

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
elements.cartOverlay.addEventListener("click", closeCart);
document.getElementById("continueShopping").addEventListener("click", closeCart);
document.getElementById("continueShoppingEmpty").addEventListener("click", () => {
  closeCart();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

elements.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  if (button.dataset.cartAction === "increase") updateCartQuantity(id, 1);
  if (button.dataset.cartAction === "decrease") updateCartQuantity(id, -1);
  if (button.dataset.cartAction === "remove") removeFromCart(id);
});

const checkoutForm = document.getElementById("checkoutForm");

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) return;

  checkoutForm.hidden = false;
  document.getElementById("checkoutName").focus();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cart.length) return;

  const name = document.getElementById("checkoutName").value.trim();
  const email = document.getElementById("checkoutEmail").value.trim();
  const address = document.getElementById("checkoutAddress").value.trim();

  if (!name || !email || !address) {
    Swal.fire({
      icon: "error",
      title: "Complete your details",
      text: "Please fill in your name, email, and delivery address before confirming."
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Thank you",
    text: `Thank you, ${name}. Your order request has been received.`,
    confirmButtonText: "Continue exploring"
  }).then(() => {
    cart = [];
    saveStorage(storageKeys.cart, cart);
    renderCart();
    checkoutForm.reset();
    checkoutForm.hidden = true;
    closeCart();
  });
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!validateEmail(email) || password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Check your details",
      text: "Enter a valid email and a password of at least 6 characters."
    });
    return;
  }

  bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  event.target.reset();
  Swal.fire({
    icon: "success",
    title: "Welcome to CHRONOLUX",
    text: "You have signed in successfully.",
    confirmButtonText: "Continue"
  });
});

document.getElementById("togglePassword").addEventListener("click", (event) => {
  const input = document.getElementById("loginPassword");
  const icon = event.currentTarget.querySelector("i");
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  icon.className = `bi ${show ? "bi-eye-slash" : "bi-eye"}`;
});

document.getElementById("forgotPassword").addEventListener("click", () => {
  Swal.fire({
    title: "Reset your password",
    text: "Contact our concierge to securely recover your private client account.",
    icon: "info",
    confirmButtonText: "Understood"
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value.trim();

  if (name.length < 2 || !validateEmail(email) || !subject || message.length < 10) {
    Swal.fire({
      icon: "error",
      title: "Please complete the form",
      text: "Add your name, a valid email, a subject, and a message of at least 10 characters."
    });
    return;
  }

  event.target.reset();
  Swal.fire({
    icon: "success",
    title: "Enquiry received",
    text: "A CHRONOLUX specialist will contact you shortly.",
    confirmButtonText: "Thank you"
  });
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");

  if (!validateEmail(emailInput.value.trim())) {
    showToast("Enter a valid email address", "error");
    return;
  }

  emailInput.value = "";
  showToast("Welcome to the CHRONOLUX circle");
});

elements.backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.cartSidebar.classList.contains("open")) closeCart();
});
