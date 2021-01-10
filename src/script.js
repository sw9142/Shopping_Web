/* Add any JavaScript you need to this file. */

let bestProductInfo = [
  {
    name: 'Collagen SkinCare Set',
    description: 'Collagen treatment will restore your skin to look young!',
    price: 9000, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'bestseller', // category of this item
    imageUrl: 'images/beyou.jpg' // relative URL to image of this item
  },
  {
    name: 'Organic Moisturizing set',
    description: '100% organic skincare set',
    price: 10000,
    category: 'bestseller',
    imageUrl: 'images/whiteset.jpg'
  },
  {
    name: 'Pink Hydrating Lotion',
    description: 'Restore your skin with magic hydrating ingredients',
    price: 4000,
    category: 'bestseller',
    imageUrl: '/images/lotion.jpg'
  },

  {
    name: 'White Caviar Serum',
    description: 'Precious ingredient White Caviar Anti-aging day-light serum',
    price: 10000,
    category: 'bestseller',
    imageUrl: 'images/white_serum.jpg'
  },
  {
    name: 'Black Caviar Serum',
    description: 'Precious ingredient Black Caviar Anti-aging overnight serum',
    price: 13000,
    category: 'bestseller',
    imageUrl: 'images/black_serum.jpg'
  },

  {
    name: 'Runway Eyeshadow Palette',
    description: 'Decorate your eyes with our beautiful colors of spring ',
    price: 4000,
    category: 'bestseller',
    imageUrl: 'images/eyeshadow.jpg'
  },
  {
    name: '4 colors eyebrow',
    description: 'Make your eyebrow more natural and volume',
    price: 1000,
    category: 'bestseller',
    imageUrl: 'images/eyebrow.jpg'
  },
  {
    name: 'Tinted lipstick',
    description: 'Wear long-lasting color on your lip',
    price: 1500,
    category: 'bestseller',
    imageUrl: 'images/lipstick.jpg'
  }
];

let skinCareProducts = [
  {
    name: 'Collagen SkinCare Set',
    description: 'Collagen treatment will restore your skin to look young!',
    price: 9000, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'skincare', // category of this item
    imageUrl: 'images/beyou.jpg' // relative URL to image of this item
  },
  {
    name: 'Organic Moisturizing set',
    description: '100% organic skincare set',
    price: 10000,
    category: 'skincare',
    imageUrl: 'images/whiteset.jpg'
  },
  {
    name: 'Pink Hydrating Lotion',
    description: 'Restore your skin with magic hydrating ingredients',
    price: 4000,
    category: 'skincare',
    imageUrl: '/images/lotion.jpg'
  },

  {
    name: 'White Caviar Serum',
    description: 'Precious ingredient White Caviar Anti-aging day-light serum',
    price: 10000,
    category: 'skincare',
    imageUrl: 'images/white_serum.jpg'
  },
  {
    name: 'Black Caviar Serum',
    description: 'Precious ingredient Black Caviar Anti-aging overnight serum',
    price: 13000,
    category: 'skincare',
    imageUrl: 'images/black_serum.jpg'
  },

  {
    name: 'Enrich Skin Balm',
    description: 'enhance your skin with organic oils melting into your skin for growing overnight',
    price: 15000,
    category: 'skincare',
    imageUrl: 'images/skinbalm.jpg'
  },
  {
    name: 'VitaminC Skincare Set',
    description: 'VitaminC skin treatment will bright your skin',
    price: 10000,
    category: 'skincare',
    imageUrl: 'images/vitaminC.jpg'
  },
  {
    name: 'Skin Booster',
    description: 'Hylamide make your skin radiant',
    price: 9000,
    category: 'skincare',
    imageUrl: 'images/booster.jpg'
  }
];

let makeupProducts = [
  {
    name: 'Runway Eyeshadow Palette',
    description: 'Decorate your eyes with our beautiful colors of spring ',
    price: 4000,
    category: 'makeup',
    imageUrl: 'images/eyeshadow.jpg'
  },
  {
    name: '4 colors eyebrow',
    description: 'Make your eyebrow more natural and volume',
    price: 1000,
    category: 'makeup',
    imageUrl: 'images/eyebrow.jpg'
  },
  {
    name: 'Tinted lipstick',
    description: 'Wear long-lasting color on your lip',
    price: 1500,
    category: 'makeup',
    imageUrl: 'images/lipstick.jpg'
  },
  {
    name: 'Velvet lipstick',
    description: 'Wear velvetly long-lasting color on your lip',
    price: 2500,
    category: 'makeup',
    imageUrl: 'images/velvet lipstick.jpg'
  },
  {
    name: '4ways Blusher',
    description: 'color your cheek',
    price: 4000,
    category: 'makeup',
    imageUrl: 'images/blusher.jpg'
  },
  {
    name: 'Chanel Lipstick',
    description: 'New launched chanel lipsticks',
    price: 6000,
    category: 'makeup',
    imageUrl: 'images/chanellipstick.jpg'
  },
  {
    name: 'Glossier Lipbalms',
    description: 'instagram viral glossier lipbalms',
    price: 4000,
    category: 'makeup',
    imageUrl: 'images/lipbalm.jpg'
  },
  {
    name: 'Pastel Blushers',
    description: 'pastel blushers on you cheeks',
    price: 2500,
    category: 'makeup',
    imageUrl: 'images/pastel blushers.jpg'
  }
];

let bodyProducts = [
  {
    name: 'Body Coconut Oil',
    description: 'Decorate your eyes with our beautiful colors of spring ',
    price: 2500,
    category: 'body',
    imageUrl: 'images/bodycocooil.jpg'
  },
  {
    name: 'Organic BodyBalm',
    description: 'Make your eyebrow more natural and volume',
    price: 1000,
    category: 'body',
    imageUrl: 'images/body_balm.jpg'
  },
  {
    name: 'Fresh Deodorant',
    description: 'Wear long-lasting color on your lip',
    price: 1995,
    category: 'body',
    imageUrl: 'images/deodorant.jpg'
  },
  {
    name: 'Body Lotion',
    description: 'Wear long-lasting color on your lip',
    price: 3525,
    category: 'body',
    imageUrl: 'images/body_lotion.jpg'
  }
];

window.onload = function() {
  let searchButton = document.querySelector('#searchicon');
  let searchContents = document.querySelector('#search');
  searchContents.classList.add('hidden');

  searchButton.addEventListener('click', function() {
    if (searchContents.classList.contains('hidden')) {
      searchContents.classList.remove('hidden');
    } else {
      searchContents.classList.add('hidden');
    }
  });

  let menuButton = document.querySelector('#imenu');
  let menuContents = document.querySelector('#imenucontents');
  menuContents.classList.add('hidden');

  menuButton.addEventListener('click', function() {
    if (menuContents.classList.contains('hidden')) {
      menuContents.classList.remove('hidden');
    } else {
      menuContents.classList.add('hidden');
    }
  });

  function formatPrice(price) {
    if (price < 99) {
      return price;
    }
    if (price % 100 === 0) {
      return `Price:  $${price / 100}.00`;
    }

    return `Price:  $${price / 100}`;
  }
  //<div class="img-card>...</div> would work
  function productToRow(product, i) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let h4 = document.createElement('h4');
    let div1 = document.createElement('div');
    div.setAttribute('class', `img-card`);
    div1.setAttribute('id', `card${i++}`);

    h3.innerText = product['name'];
    h5.innerText = product['description'];
    h4.innerText = formatPrice(product['price']);
    img.setAttribute('src', product['imageUrl']);
    div.appendChild(img);
    div.appendChild(div1);
    div1.appendChild(h3);
    div1.appendChild(h5);
    div1.appendChild(h4);
    return div;
  }

  function bestProductsToTable() {
    let bodySection2 = document.querySelector('#bodysectiontwo');
    let oneProduct;

    for (let i = 0; i < bestProductInfo.length; i++) {
      oneProduct = productToRow(bestProductInfo[i], i);
      bodySection2.appendChild(oneProduct);
    }
  }

  function skinCareProductsToTable() {
    let bodySection2 = document.querySelector('#bodysectionthree');
    let oneProduct;

    for (let i = 0; i < skinCareProducts.length; i++) {
      oneProduct = productToRow(skinCareProducts[i], i);
      bodySection2.appendChild(oneProduct);
    }
  }

  function makeupProductsToTable() {
    let bodySection2 = document.querySelector('#bodysectionfour');
    let oneProduct;

    for (let i = 0; i < makeupProducts.length; i++) {
      oneProduct = productToRow(makeupProducts[i], i);
      bodySection2.appendChild(oneProduct);
    }
  }

  function bodyProductsToTable() {
    let bodySection2 = document.querySelector('#bodysectionfive');
    let oneProduct;

    for (let i = 0; i < bodyProducts.length; i++) {
      oneProduct = productToRow(bodyProducts[i], i);
      bodySection2.appendChild(oneProduct);
    }
  }

  bestProductsToTable();
  skinCareProductsToTable();
  makeupProductsToTable();
  bodyProductsToTable();
};
