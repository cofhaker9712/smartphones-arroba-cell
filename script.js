const products = [
  {
    id: 1,
    brand: 'REDMI',
    name: 'Redmi Note 15 Pro',
    line: 'Redmi Note',
    price: 2199,
    promoPrice: 1999,
    installment: '10x de R$ 199,90 sem juros',
    rating: 4.9,
    stock: 18,
    memory: '256GB',
    ram: '8GB',
    color: 'Preto',
    code: 'RN15P-256',
    description: 'Smartphone premium com desempenho moderno, câmera versátil e excelente autonomia.',
    specs: ['Tela AMOLED 6.7"', 'Processador octa-core', 'Câmera tripla de 200MP', 'Bateria 5000mAh'],
    images: ['IMG_3546.jpeg', 'IMG_3547.jpeg', 'IMG_3548.jpeg'],
    featured: true,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 2,
    brand: 'REDMI',
    name: 'Redmi Note 15',
    line: 'Redmi Note',
    price: 1899,
    promoPrice: null,
    installment: '10x de R$ 189,90 sem juros',
    rating: 4.8,
    stock: 22,
    memory: '128GB',
    ram: '6GB',
    color: 'Azul',
    code: 'RN15-128',
    description: 'Leve, equilibrado e pronto para o dia a dia com boa performance e câmera confiável.',
    specs: ['Tela AMOLED 6.6"', 'Câmera dupla', 'Bateria 5000mAh', 'Carga rápida'],
    images: ['IMG_3547.jpeg', 'IMG_3548.jpeg', 'IMG_3549.jpeg'],
    featured: true,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 3,
    brand: 'REDMI',
    name: 'Redmi 15',
    line: 'Redmi',
    price: 1699,
    promoPrice: 1499,
    installment: '10x de R$ 149,90 sem juros',
    rating: 4.7,
    stock: 12,
    memory: '128GB',
    ram: '6GB',
    color: 'Branco',
    code: 'R15-128',
    description: 'Excelente custo-benefício para quem busca desempenho e durabilidade no uso cotidiano.',
    specs: ['Tela Full HD+', 'Processador eficiente', 'Bateria sólida', 'Design elegante'],
    images: ['IMG_3548.jpeg', 'IMG_3549.jpeg', 'IMG_3550.jpeg'],
    featured: false,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 4,
    brand: 'REDMI',
    name: 'Redmi 15C',
    line: 'Redmi',
    price: 1399,
    promoPrice: null,
    installment: '10x de R$ 139,90 sem juros',
    rating: 4.6,
    stock: 0,
    memory: '64GB',
    ram: '4GB',
    color: 'Preto',
    code: 'R15C-64',
    description: 'Modelos práticos com mobilidade e funcionalidade para quem usa com frequência.',
    specs: ['Tela 6.5"', 'Câmera principal', 'Bateria de longa duração', 'Leve e compacto'],
    images: ['IMG_3549.jpeg', 'IMG_3550.jpeg', 'IMG_3546.jpeg'],
    featured: false,
    promo: false,
    available: false,
    category: 'SMARTPHONES'
  },
  {
    id: 5,
    brand: 'REDMI',
    name: 'Redmi Note 14 Pro',
    line: 'Redmi Note',
    price: 2499,
    promoPrice: null,
    installment: '12x de R$ 208,25 sem juros',
    rating: 4.9,
    stock: 9,
    memory: '256GB',
    ram: '12GB',
    color: 'Verde',
    code: 'RN14P-256',
    description: 'Um smartphone premium para fotos, vídeos e produtividade com qualidade superior.',
    specs: ['Tela AMOLED 6.8"', 'Câmera 200MP', 'Processador premium', 'Carga rápida'],
    images: ['IMG_3550.jpeg', 'IMG_3546.jpeg', 'IMG_3547.jpeg'],
    featured: true,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 6,
    brand: 'REDMI',
    name: 'Redmi Note 14S',
    line: 'Redmi Note',
    price: 2099,
    promoPrice: 1899,
    installment: '10x de R$ 189,90 sem juros',
    rating: 4.7,
    stock: 15,
    memory: '256GB',
    ram: '8GB',
    color: 'Branco',
    code: 'RN14S-256',
    description: 'Ideal para quem deseja um celular versátil com excelente custo-benefício e qualidade visual.',
    specs: ['Tela 6.7"', 'Câmera tripla', 'Bateria 5100mAh', 'Design refinado'],
    images: ['IMG_3546.jpeg', 'IMG_3547.jpeg', 'IMG_3548.jpeg'],
    featured: false,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 7,
    brand: 'REDMI',
    name: 'Redmi Note 14',
    line: 'Redmi Note',
    price: 1799,
    promoPrice: null,
    installment: '10x de R$ 179,90 sem juros',
    rating: 4.6,
    stock: 24,
    memory: '128GB',
    ram: '8GB',
    color: 'Azul',
    code: 'RN14-128',
    description: 'Smartphone balanceado com bom desempenho para trabalho, estudo e entretenimento.',
    specs: ['Tela 6.6"', 'Câmera boa para o dia a dia', 'Processador confiável', 'Bateria de larga duração'],
    images: ['IMG_3547.jpeg', 'IMG_3548.jpeg', 'IMG_3549.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 8,
    brand: 'REDMI',
    name: 'Redmi A5',
    line: 'A',
    price: 999,
    promoPrice: null,
    installment: '10x de R$ 99,90 sem juros',
    rating: 4.5,
    stock: 31,
    memory: '64GB',
    ram: '4GB',
    color: 'Preto',
    code: 'RA5-64',
    description: 'Opção acessível e funcional para quem busca smartphone simples e confiável.',
    specs: ['Design compacto', 'Tela 6.4"', 'Bateria eficiente', 'Uso diário fácil'],
    images: ['IMG_3548.jpeg', 'IMG_3549.jpeg', 'IMG_3550.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 9,
    brand: 'POCO',
    name: 'POCO X8 Pro',
    line: 'X',
    price: 2899,
    promoPrice: 2599,
    installment: '10x de R$ 259,90 sem juros',
    rating: 4.9,
    stock: 10,
    memory: '256GB',
    ram: '12GB',
    color: 'Preto',
    code: 'PX8P-256',
    description: 'Potência, câmera avançada e visual esportivo para usuários exigentes.',
    specs: ['Tela 6.9"', 'Câmera 50MP', 'Desempenho premium', 'Bateria 5000mAh'],
    images: ['IMG_3549.jpeg', 'IMG_3550.jpeg', 'IMG_3546.jpeg'],
    featured: true,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 10,
    brand: 'POCO',
    name: 'POCO M8 Pro',
    line: 'M',
    price: 1699,
    promoPrice: null,
    installment: '10x de R$ 169,90 sem juros',
    rating: 4.6,
    stock: 20,
    memory: '128GB',
    ram: '6GB',
    color: 'Azul',
    code: 'PM8P-128',
    description: 'Modelo versátil com bom equilíbrio entre custo e tecnologia.',
    specs: ['Tela 6.5"', 'Processador eficiente', 'Bateria decente', 'Design moderno'],
    images: ['IMG_3550.jpeg', 'IMG_3546.jpeg', 'IMG_3547.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 11,
    brand: 'POCO',
    name: 'POCO F7 Pro',
    line: 'F',
    price: 3299,
    promoPrice: null,
    installment: '12x de R$ 274,92 sem juros',
    rating: 5,
    stock: 6,
    memory: '512GB',
    ram: '12GB',
    color: 'Branco',
    code: 'PF7P-512',
    description: 'Tela premium, processamento intenso e qualidade profissional para quem exige mais.',
    specs: ['Tela 6.8"', 'Processador top de linha', 'Câmera avançada', 'Desempenho máximo'],
    images: ['IMG_3546.jpeg', 'IMG_3547.jpeg', 'IMG_3548.jpeg'],
    featured: true,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 12,
    brand: 'POCO',
    name: 'POCO F7',
    line: 'F',
    price: 2799,
    promoPrice: 2499,
    installment: '10x de R$ 249,90 sem juros',
    rating: 4.8,
    stock: 13,
    memory: '256GB',
    ram: '8GB',
    color: 'Preto',
    code: 'PF7-256',
    description: 'Potência e qualidade com ótimo pacote para uso intensivo e multitarefa.',
    specs: ['Tela 6.7"', 'Processador forte', 'Câmera premium', 'Desempenho rápido'],
    images: ['IMG_3547.jpeg', 'IMG_3548.jpeg', 'IMG_3549.jpeg'],
    featured: true,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 13,
    brand: 'POCO',
    name: 'POCO X7 Pro',
    line: 'X',
    price: 2599,
    promoPrice: null,
    installment: '10x de R$ 259,90 sem juros',
    rating: 4.8,
    stock: 11,
    memory: '256GB',
    ram: '8GB',
    color: 'Verde',
    code: 'PX7P-256',
    description: 'Excelente opção para quem deseja alto desempenho e fotos com ótimo acabamento.',
    specs: ['Display 6.7"', 'Câmera 64MP', 'Bateria 5100mAh', 'Performance sólida'],
    images: ['IMG_3548.jpeg', 'IMG_3549.jpeg', 'IMG_3550.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 14,
    brand: 'POCO',
    name: 'POCO X7',
    line: 'X',
    price: 2399,
    promoPrice: null,
    installment: '10x de R$ 239,90 sem juros',
    rating: 4.7,
    stock: 14,
    memory: '256GB',
    ram: '8GB',
    color: 'Azul',
    code: 'PX7-256',
    description: 'Uma linha que combina excelência visual, confiabilidade e performance para o dia a dia.',
    specs: ['Tela 6.7"', 'Câmera de alto nível', 'Design premium', 'Bateria eficiente'],
    images: ['IMG_3549.jpeg', 'IMG_3550.jpeg', 'IMG_3546.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 15,
    brand: 'POCO',
    name: 'POCO C85',
    line: 'C',
    price: 1299,
    promoPrice: null,
    installment: '10x de R$ 129,90 sem juros',
    rating: 4.5,
    stock: 17,
    memory: '128GB',
    ram: '6GB',
    color: 'Preto',
    code: 'PC85-128',
    description: 'Estrutura simples, boa usabilidade e ótimo desempenho em tarefas básicas do dia a dia.',
    specs: ['Tela 6.4"', 'Bateria boa', 'Processamento eficiente', 'Fácil de usar'],
    images: ['IMG_3550.jpeg', 'IMG_3546.jpeg', 'IMG_3547.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 16,
    brand: 'POCO',
    name: 'POCO C71',
    line: 'C',
    price: 1099,
    promoPrice: 999,
    installment: '10x de R$ 99,90 sem juros',
    rating: 4.4,
    stock: 19,
    memory: '128GB',
    ram: '4GB',
    color: 'Branco',
    code: 'PC71-128',
    description: 'Smartphone funcional, confiável e perfeito para quem quer praticidade sem gastar tanto.',
    specs: ['Tela 6.3"', 'Câmera simples', 'Bateria de longa duração', 'Uso geral eficiente'],
    images: ['IMG_3546.jpeg', 'IMG_3547.jpeg', 'IMG_3548.jpeg'],
    featured: false,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 17,
    brand: 'REALME',
    name: 'Realme 14',
    line: 'Realme',
    price: 1899,
    promoPrice: null,
    installment: '10x de R$ 189,90 sem juros',
    rating: 4.7,
    stock: 18,
    memory: '256GB',
    ram: '8GB',
    color: 'Preto',
    code: 'R14-256',
    description: 'Aparência premium e desempenho confiável para quem quer tecnologia moderna com sofisticação.',
    specs: ['Tela 6.7"', 'Câmera versátil', 'Processador moderno', 'Bateria eficiente'],
    images: ['IMG_3547.jpeg', 'IMG_3548.jpeg', 'IMG_3549.jpeg'],
    featured: true,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 18,
    brand: 'REALME',
    name: 'Realme C75',
    line: 'C',
    price: 1499,
    promoPrice: 1299,
    installment: '10x de R$ 129,90 sem juros',
    rating: 4.5,
    stock: 15,
    memory: '128GB',
    ram: '6GB',
    color: 'Azul',
    code: 'RC75-128',
    description: 'Um modelo acessível com boa performance e recursos modernos para o uso diário.',
    specs: ['Tela 6.5"', 'Câmera ampla', 'Bateria forte', 'Design elegante'],
    images: ['IMG_3548.jpeg', 'IMG_3549.jpeg', 'IMG_3550.jpeg'],
    featured: false,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 19,
    brand: 'REALME',
    name: 'Realme C75X',
    line: 'C',
    price: 1399,
    promoPrice: null,
    installment: '10x de R$ 139,90 sem juros',
    rating: 4.4,
    stock: 26,
    memory: '128GB',
    ram: '4GB',
    color: 'Verde',
    code: 'RC75X-128',
    description: 'Boa opção para uso geral com design moderno e bom custo-benefício.',
    specs: ['Tela 6.4"', 'Uso geral fluido', 'Bateria de longa duração', 'Design leve'],
    images: ['IMG_3549.jpeg', 'IMG_3550.jpeg', 'IMG_3546.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 20,
    brand: 'REALME',
    name: 'Realme C71',
    line: 'C',
    price: 1199,
    promoPrice: null,
    installment: '10x de R$ 119,90 sem juros',
    rating: 4.5,
    stock: 0,
    memory: '128GB',
    ram: '4GB',
    color: 'Branco',
    code: 'RC71-128',
    description: 'Prático, confiável e ideal para quem procura um aparelho simples para o cotidiano.',
    specs: ['Tela 6.5"', 'Câmera funcional', 'Bateria de longa duração', 'Interface fácil'],
    images: ['IMG_3550.jpeg', 'IMG_3546.jpeg', 'IMG_3547.jpeg'],
    featured: false,
    promo: false,
    available: false,
    category: 'SMARTPHONES'
  },
  {
    id: 21,
    brand: 'REALME',
    name: 'Realme Note 70',
    line: 'Note',
    price: 1599,
    promoPrice: null,
    installment: '10x de R$ 159,90 sem juros',
    rating: 4.7,
    stock: 21,
    memory: '128GB',
    ram: '6GB',
    color: 'Azul',
    code: 'RN70-128',
    description: 'Smartphone equilibrado para multitarefas e uso intenso de aplicativos.',
    specs: ['Tela 6.6"', 'Câmera dupla', 'Processador confiável', 'Bateria estável'],
    images: ['IMG_3546.jpeg', 'IMG_3547.jpeg', 'IMG_3548.jpeg'],
    featured: false,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 22,
    brand: 'REALME',
    name: 'Realme Note 60',
    line: 'Note',
    price: 1299,
    promoPrice: 1099,
    installment: '10x de R$ 109,90 sem juros',
    rating: 4.4,
    stock: 17,
    memory: '128GB',
    ram: '4GB',
    color: 'Preto',
    code: 'RN60-128',
    description: 'Acessível e funcional para quem busca qualidade com um ótimo custo-benefício.',
    specs: ['Tela 6.5"', 'Câmera principal', 'Bateria eficiente', 'Uso geral suave'],
    images: ['IMG_3547.jpeg', 'IMG_3548.jpeg', 'IMG_3549.jpeg'],
    featured: false,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 23,
    brand: 'INFINIX',
    name: 'Infinix Hot 60i',
    line: 'Hot',
    price: 1799,
    promoPrice: null,
    installment: '10x de R$ 179,90 sem juros',
    rating: 4.6,
    stock: 16,
    memory: '256GB',
    ram: '8GB',
    color: 'Preto',
    code: 'IH60i-256',
    description: 'Um smartphone com boa experiência visual e desempenho consistente para uso diário.',
    specs: ['Tela 6.7"', 'Câmera 64MP', 'Bateria 5000mAh', 'Software otimizado'],
    images: ['IMG_3548.jpeg', 'IMG_3549.jpeg', 'IMG_3550.jpeg'],
    featured: true,
    promo: false,
    available: true,
    category: 'SMARTPHONES'
  },
  {
    id: 24,
    brand: 'BLACKVIEW',
    name: 'Blackview Shark 8',
    line: 'Shark',
    price: 2399,
    promoPrice: 2199,
    installment: '12x de R$ 183,25 sem juros',
    rating: 4.8,
    stock: 8,
    memory: '256GB',
    ram: '12GB',
    color: 'Verde',
    code: 'BS8-256',
    description: 'Design robusto, performance forte e ótimo desempenho em multitarefas.',
    specs: ['Tela 6.8"', 'Bateria alta', 'Processamento forte', 'Construção resistente'],
    images: ['IMG_3549.jpeg', 'IMG_3550.jpeg', 'IMG_3546.jpeg'],
    featured: true,
    promo: true,
    available: true,
    category: 'SMARTPHONES'
  }
];

const productImageMap = {
  'Redmi Note 15 Pro': 'redmi note 15 pro.jfif',
  'Redmi Note 15': 'redmi note 15.jfif',
  'Redmi 15': 'redmi 15.jfif',
  'Redmi 15C': 'redmi 15c.jfif',
  'Redmi Note 14 Pro': 'redmi note 14 pro.jfif',
  'Redmi Note 14S': 'Redmi Note 14S.jfif',
  'Redmi Note 14': 'Redmi Note 14.jfif',
  'Redmi A5': 'Redmi A5.jfif',
  'POCO X8 Pro': 'poco x8 pro.jfif',
  'POCO M8 Pro': 'poco m8 pro.jfif',
  'POCO F7 Pro': 'poco f7 pro.jfif',
  'POCO F7': 'poco f7.jfif',
  'POCO X7 Pro': 'POCO X7 Pro.jfif',
  'POCO X7': 'POCO X7.jfif',
  'POCO C85': 'POCO C85.jfif',
  'POCO C71': 'POCO C71.jfif',
  'Realme 14': 'realme 14.jfif',
  'Realme C75': 'realme C75.jfif',
  'Realme C75X': 'realme C75x.jfif',
  'Realme C71': 'Realme C71.jfif',
  'Realme Note 70': 'Realme Note 70.jfif',
  'Realme Note 60': 'realme note 60.jfif',
  'Infinix Hot 60i': 'infinit hot 60i.jfif',
  'Blackview Shark 8': 'blackview shark 8.jfif'
};

products.forEach((product) => {
  product.images = [productImageMap[product.name]];
});

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const formatWhatsAppLink = (product) => {
  const message = `Olá, ARROBA CELL!%0A%0ATenho interesse neste smartphone:%0A%0A📱 Produto:%20${encodeURIComponent(product.name)}%0A🏷️ Marca:%20${encodeURIComponent(product.brand)}%0A📦 Código:%20${encodeURIComponent(product.code)}%0A💰 Preço:%20${encodeURIComponent(formatCurrency(product.promoPrice || product.price))}%0A🔢 Quantidade:%201%0A%0AGostaria%20de%20confirmar%20disponibilidade%20e%20condições%20de%20pagamento.`;
  return `https://wa.me/5583986882292?text=${message}`;
};

const state = {
  filter: 'TODOS',
  search: '',
  sort: 'featured',
  availability: 'all',
  promo: 'all',
  memory: 'all',
  ram: 'all',
  color: 'all',
  cart: JSON.parse(localStorage.getItem('arroba-cart') || '[]')
};

function saveCart() {
  localStorage.setItem('arroba-cart', JSON.stringify(state.cart));
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    el.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  });
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  return products.filter((product) => {
    const matchesBrand = state.filter === 'TODOS' || product.brand === state.filter;
    const matchesSearch = !query ||
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.line.toLowerCase().includes(query);
    const matchesAvailability = state.availability === 'all' ||
      (state.availability === 'available' && product.available) ||
      (state.availability === 'out-of-stock' && !product.available);
    const matchesPromo = state.promo === 'all' || (state.promo === 'promo' && product.promo);
    const matchesMemory = state.memory === 'all' || product.memory === state.memory;
    const matchesRam = state.ram === 'all' || product.ram === state.ram;
    const matchesColor = state.color === 'all' || product.color === state.color;

    return matchesBrand && matchesSearch && matchesAvailability && matchesPromo && matchesMemory && matchesRam && matchesColor;
  }).sort((a, b) => {
    switch (state.sort) {
      case 'popular': return (b.rating || 0) - (a.rating || 0);
      case 'recent': return b.id - a.id;
      case 'price-asc': return (a.promoPrice || a.price) - (b.promoPrice || b.price);
      case 'price-desc': return (b.promoPrice || b.price) - (a.promoPrice || a.price);
      case 'rating': return (b.rating || 0) - (a.rating || 0);
      default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
}

function renderBrandFilters() {
  const brands = ['TODOS', 'REDMI', 'POCO', 'REALME', 'INFINIX', 'BLACKVIEW'];
  const el = document.getElementById('brandFilters');
  if (!el) return;

  el.innerHTML = brands.map(brand => `
    <button type="button" class="filter-chip ${state.filter === brand ? 'active' : ''}" data-brand="${brand}">${brand}</button>
  `).join('');

  el.querySelectorAll('[data-brand]').forEach(button => {
    button.addEventListener('click', () => {
      state.filter = button.dataset.brand;
      renderBrandFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const productsList = getFilteredProducts();

  if (!productsList.length) {
    grid.innerHTML = '<div class="empty-state">Nenhum produto encontrado para sua busca.</div>';
    return;
  }

  grid.innerHTML = productsList.map((product) => {
    const price = product.promoPrice || product.price;
    const badge = product.promo ? 'OFERTA' : product.available ? 'DISPONÍVEL' : 'PRODUTO ESGOTADO';

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${product.images[0]}" alt="${product.name}" />
          ${product.promo ? '<span class="product-tag">OFERTA</span>' : ''}
          ${!product.available ? '<span class="product-tag" style="background:#6b7280;">ESGOTADO</span>' : ''}
        </div>
        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-illustrative">Imagem ilustrativa</p>
          <div class="product-pricing">
            <span class="price">${formatCurrency(price)}</span>
            ${product.promoPrice ? `<span class="price-old">${formatCurrency(product.price)}</span>` : ''}
          </div>
          <span class="installment">${product.installment}</span>
          <div class="rating"><span class="rating-stars">★★★★★</span> ${product.rating}</div>
          <div class="card-actions">
            <button type="button" class="primary-inline" data-add-to-cart="${product.id}">ADICIONAR AO CARRINHO</button>
            <a class="secondary-inline" href="produto.html?id=${product.id}" aria-label="Ver produto ${product.name}">VER PRODUTO</a>
            <a class="secondary-inline" href="${formatWhatsAppLink(product)}" target="_blank" rel="noreferrer">COMPRAR PELO WHATSAPP</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('[data-add-to-cart]').forEach((button) => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.addToCart)));
  });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  showToast(`${product.name} adicionado ao carrinho.`);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('visible'), 50);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 1800);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (!state.cart.length) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    updateSummary();
    return;
  }

  const cartItems = state.cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return null;
    const unit = product.promoPrice || product.price;
    return {
      ...item,
      product,
      unit,
      subtotal: unit * item.qty
    };
  }).filter(Boolean);

  container.innerHTML = cartItems.map(({ product, qty, unit, subtotal }) => `
    <div class="cart-item">
      <img src="${product.images[0]}" alt="${product.name}" />
      <div>
        <h4>${product.name}</h4>
        <p>${product.brand}</p>
        <div class="qty-controls">
          <button type="button" data-cart-decrease="${product.id}">−</button>
          <span>${qty}</span>
          <button type="button" data-cart-increase="${product.id}">+</button>
        </div>
      </div>
      <div class="item-actions">
        <strong>${formatCurrency(subtotal)}</strong>
        <button class="remove-btn" type="button" data-cart-remove="${product.id}">Remover</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-cart-increase]').forEach((button) => {
    button.addEventListener('click', () => changeCartQty(Number(button.dataset.cartIncrease), 1));
  });

  container.querySelectorAll('[data-cart-decrease]').forEach((button) => {
    button.addEventListener('click', () => changeCartQty(Number(button.dataset.cartDecrease), -1));
  });

  container.querySelectorAll('[data-cart-remove]').forEach((button) => {
    button.addEventListener('click', () => removeCartItem(Number(button.dataset.cartRemove)));
  });

  updateSummary();
}

function changeCartQty(productId, delta) {
  const item = state.cart.find(product => product.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(product => product.id !== productId);
  }

  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateSummary() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    if (!product) return sum;
    return sum + (product.promoPrice || product.price) * item.qty;
  }, 0);

  const discount = state.cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    if (!product || !product.promoPrice) return sum;
    return sum + (product.price - product.promoPrice) * item.qty;
  }, 0);

  const freight = subtotal > 0 ? 39 : 0;
  const total = subtotal + freight - discount;

  const subtotalEl = document.getElementById('subtotalValue');
  const discountEl = document.getElementById('discountValue');
  const shippingEl = document.getElementById('shippingValue');
  const totalEl = document.getElementById('totalValue');

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (discountEl) discountEl.textContent = `- ${formatCurrency(discount)}`;
  if (shippingEl) shippingEl.textContent = formatCurrency(freight);
  if (totalEl) totalEl.textContent = formatCurrency(total);

  const review = document.getElementById('checkoutReview');
  if (review) {
    const items = state.cart.map(item => {
      const product = products.find(p => p.id === item.id);
      return product ? `<li>${item.qty}x ${product.name} — ${formatCurrency((product.promoPrice || product.price) * item.qty)}</li>` : '';
    }).join('');

    review.innerHTML = `
      <ul>
        <li><strong>Cliente:</strong> <span id="reviewCustomer">-</span></li>
        <li><strong>Telefone:</strong> <span id="reviewPhone">-</span></li>
        <li><strong>Produtos:</strong></li>
        ${items || '<li>Nenhum item</li>'}
        <li><strong>Subtotal:</strong> ${formatCurrency(subtotal)}</li>
        <li><strong>Frete:</strong> ${formatCurrency(freight)}</li>
        <li><strong>Desconto:</strong> - ${formatCurrency(discount)}</li>
        <li><strong>Total:</strong> ${formatCurrency(total)}</li>
      </ul>
    `;
  }
}

function renderProductDetail() {
  const detail = document.getElementById('productDetail');
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const product = products.find(item => item.id === id) || products[0];

  detail.innerHTML = `
    <article class="product-detail-layout">
      <div>
        <div class="gallery-main">
          <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage" />
        </div>
        <div class="gallery-thumbs">
          ${product.images.map((image, index) => `
            <img src="${image}" alt="${product.name} ${index + 1}" class="${index === 0 ? 'active' : ''}" data-gallery-image="${image}" />
          `).join('')}
        </div>
      </div>

      <div class="product-detail-info">
        <p class="product-brand">${product.brand}</p>
        <h1>${product.name}</h1>
        <div class="detail-price-row">
          <span class="price">${formatCurrency(product.promoPrice || product.price)}</span>
          ${product.promoPrice ? `<span class="price-old">${formatCurrency(product.price)}</span>` : ''}
        </div>
        <div class="detail-meta">
          <span class="detail-badge">Estoque: ${product.stock}</span>
          <span class="detail-badge">Memória: ${product.memory}</span>
          <span class="detail-badge">RAM: ${product.ram}</span>
          <span class="detail-badge">Cor: ${product.color}</span>
        </div>
        <div class="detail-actions">
          <div class="qty-inline">
            <button type="button" data-qty-minus>-</button>
            <span id="detailQty">1</span>
            <button type="button" data-qty-plus>+</button>
          </div>
          <button class="button primary" type="button" data-product-qty-add="${product.id}">ADICIONAR AO CARRINHO</button>
          <button class="button secondary" type="button" onclick="window.location.href='${formatWhatsAppLink(product)}'">COMPRAR AGORA</button>
        </div>
        <div class="detail-actions">
          <a class="button secondary" href="${formatWhatsAppLink(product)}" target="_blank" rel="noreferrer">COMPRAR PELO WHATSAPP</a>
        </div>

        <div class="detail-section">
          <h3>Descrição</h3>
          <p>${product.description}</p>
        </div>

        <div class="detail-section">
          <h3>Especificações</h3>
          <ul>
            ${product.specs.map((spec) => `<li>${spec}</li>`).join('')}
          </ul>
        </div>
      </div>
    </article>
  `;

  let quantity = 1;
  const mainImage = document.getElementById('mainProductImage');
  document.querySelectorAll('[data-gallery-image]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const image = thumb.dataset.galleryImage;
      mainImage.src = image;
      document.querySelectorAll('[data-gallery-image]').forEach((item) => item.classList.toggle('active', item === thumb));
    });
  });

  document.querySelector('[data-qty-minus]').addEventListener('click', () => {
    quantity = Math.max(1, quantity - 1);
    document.getElementById('detailQty').textContent = quantity;
  });

  document.querySelector('[data-qty-plus]').addEventListener('click', () => {
    quantity = quantity + 1;
    document.getElementById('detailQty').textContent = quantity;
  });

  document.querySelector('[data-product-qty-add]').addEventListener('click', () => {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += quantity;
    } else {
      state.cart.push({ id: product.id, qty: quantity });
    }
    saveCart();
    showToast(`${product.name} adicionado ao carrinho.`);
  });
}

function bindSearchAndFilters() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  const availabilitySelect = document.getElementById('availabilityFilter');
  if (availabilitySelect) {
    availabilitySelect.addEventListener('change', (e) => {
      state.availability = e.target.value;
      renderProducts();
    });
  }

  const promoSelect = document.getElementById('promoFilter');
  if (promoSelect) {
    promoSelect.addEventListener('change', (e) => {
      state.promo = e.target.value;
      renderProducts();
    });
  }

  const memorySelect = document.getElementById('memoryFilter');
  if (memorySelect) {
    memorySelect.addEventListener('change', (e) => {
      state.memory = e.target.value;
      renderProducts();
    });
  }

  const ramSelect = document.getElementById('ramFilter');
  if (ramSelect) {
    ramSelect.addEventListener('change', (e) => {
      state.ram = e.target.value;
      renderProducts();
    });
  }

  const colorSelect = document.getElementById('colorFilter');
  if (colorSelect) {
    colorSelect.addEventListener('change', (e) => {
      state.color = e.target.value;
      renderProducts();
    });
  }

  const form = document.getElementById('checkoutForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const customerName = formData.get('customerName') || 'Cliente';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || '';
      const street = formData.get('street') || '';
      const number = formData.get('number') || '';
      const complement = formData.get('complement') || '';
      const district = formData.get('district') || '';
      const city = formData.get('city') || '';
      const stateValue = formData.get('state') || '';
      const cep = formData.get('cep') || '';
      const paymentMethod = formData.get('paymentMethod') || 'PIX';
      const notes = formData.get('notes') || '';

      const subtotal = state.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + ((product?.promoPrice || product?.price || 0) * item.qty);
      }, 0);

      const discount = state.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + ((product?.price || 0) - (product?.promoPrice || product?.price || 0)) * item.qty;
      }, 0);

      const freight = subtotal > 0 ? 39 : 0;
      const total = subtotal + freight - discount;

      const companyWhatsappNumber = '5583986882292';
      const message = `Olá, ARROBA CELL! 👋%0A%0A🛍️ NOVO PEDIDO%0A%0A👤 CLIENTE:%0ANome:%20${encodeURIComponent(customerName)}%0ATelefone:%20${encodeURIComponent(phone.toString())}%0AE-mail:%20${encodeURIComponent(email.toString())}%0A%0A📦 PRODUTOS:%0A${state.cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `${item.qty}x ${encodeURIComponent(product?.name || '')}%0AValor:%20${encodeURIComponent(formatCurrency((product?.promoPrice || product?.price || 0) * item.qty))}`;
      }).join('%0A')}%0A%0A🧾 RESUMO:%0ASubtotal:%20${encodeURIComponent(formatCurrency(subtotal))}%0AFrete:%20${encodeURIComponent(formatCurrency(freight))}%0ADesconto:%20${encodeURIComponent(formatCurrency(discount))}%0A%0A💰 TOTAL:%0A${encodeURIComponent(formatCurrency(total))}%0A%0A💳 FORMA%20DE%20PAGAMENTO:%0A${encodeURIComponent(paymentMethod.toString())}%0A%0A📍 ENDEREÇO:%0A${encodeURIComponent(street)},%20${encodeURIComponent(number)}%0A${encodeURIComponent(complement ? complement : 'Sem complemento')}%0A${encodeURIComponent(district)}%0A${encodeURIComponent(city)}%20-%20${encodeURIComponent(stateValue)}%0ACEP:%20${encodeURIComponent(cep.toString())}%0A%0A📝 OBSERVAÇÕES:%0A${encodeURIComponent(notes.toString())}%0A%0AAguardo%20confirmação%20do%20pedido.`;

      const whatsappUrl = `https://wa.me/${companyWhatsappNumber}?text=${message}`;
      window.location.href = whatsappUrl;
    });
  }

  const checkoutReview = document.getElementById('checkoutReview');
  if (checkoutReview) {
    const customerNameInput = document.querySelector('input[name="customerName"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    customerNameInput && customerNameInput.addEventListener('input', () => {
      const reviewCustomer = document.getElementById('reviewCustomer');
      if (reviewCustomer) reviewCustomer.textContent = customerNameInput.value || '-';
    });
    phoneInput && phoneInput.addEventListener('input', () => {
      const reviewPhone = document.getElementById('reviewPhone');
      if (reviewPhone) reviewPhone.textContent = phoneInput.value || '-';
    });
  }
}

function init() {
  renderBrandFilters();
  renderProducts();
  renderCart();
  renderProductDetail();
  bindSearchAndFilters();
  saveCart();

  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Inscrição realizada com sucesso!');
    });
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '84px';
      nav.style.left = '16px';
      nav.style.right = '16px';
      nav.style.flexDirection = 'column';
      nav.style.background = 'white';
      nav.style.padding = '18px';
      nav.style.borderRadius = '16px';
      nav.style.boxShadow = '0 20px 30px rgba(15, 23, 42, 0.08)';
      nav.style.border = '1px solid rgba(15, 23, 42, 0.08)';
    });
  }

  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      left: 50%;
      bottom: 32px;
      transform: translateX(-50%) translateY(16px);
      background: rgba(13, 23, 40, 0.95);
      color: white;
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: 700;
      opacity: 0;
      transition: 0.25s ease;
      z-index: 100;
    }
    .toast.visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    @media (max-width: 980px) {
      .main-nav.mobile-open {
        display: flex !important;
      }
    }
  `;
  document.head.appendChild(style);
}

init();
