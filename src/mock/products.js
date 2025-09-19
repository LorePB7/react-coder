export const products = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
    price: 999,
    category: "celulares",
    description: "RAM: 12 GB. Compatible con redes 5G. Pantalla Dynamic AMOLED 2X de 6.2\". 3 cámaras traseras de 50Mpx/10Mpx/12Mpx. Batería de 4000mAh con carga inalámbrica. Memoria interna de 512GB.",
    image: "https://i.postimg.cc/vBh52Sdy/samsung-S25.jpg",
    stock: 10
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1199,
    category: "celulares",
    description: "Pantalla Super Retina XDR de 6.1\". Chip A17 Pro. Sistema de cámaras Pro con zoom óptico de 3x. Titanio de grado aeroespacial. Resistente al agua.",
    image: "https://i.postimg.cc/hj271z9P/IPHONE15-PRO.webp",
    stock: 8
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 13",
    price: 399,
    category: "celulares",
    description: "Pantalla AMOLED de 6.67\". Procesador Snapdragon 685. Cámara principal de 108MP. Batería de 5000mAh con carga rápida de 33W.",
    image: "https://i.postimg.cc/HnKcFqZq/redminote13.webp",
    stock: 15
  },
  {
    id: 4,
    name: "Notebook HP 255 G10",
    price: 1299,
    category: "computadoras",
    description: "AMD Ryzen 7 7730U, RAM 16GB, SSD 512GB, Pantalla 15.6\" FHD, Sistema Operativo Windows 11 Home.",
    image: "https://i.postimg.cc/13DnYYpd/notebook.avif",
    stock: 5
  },
  {
    id: 5,
    name: "MacBook Air M2",
    price: 1499,
    category: "computadoras",
    description: "Chip M2 de Apple. Pantalla Liquid Retina de 13.6\". Hasta 18 horas de batería. SSD hasta 2TB. Diseño ultraportátil.",
    image: "https://i.postimg.cc/YSkGcfRC/macbook.jpg",
    stock: 3
  },
  {
    id: 6,
    name: "Dell Inspiron 15 3000",
    price: 899,
    category: "computadoras",
    description: "Intel Core i5, RAM 8GB, SSD 256GB, Pantalla 15.6\" HD, Windows 11 Home. Ideal para trabajo y entretenimiento.",
    image: "https://i.postimg.cc/mrwcTzpN/notebookdell.jpg",
    stock: 7
  },
  {
    id: 7,
    name: "JBL Charge 6",
    price: 799,
    category: "parlantes",
    description: "Es a prueba de agua. Apto para uso en exteriores. Con conectividad bluetooth. Batería recargable. Potencia de 30W. Conector de entrada: USB.",
    image: "https://i.postimg.cc/nzhXrF68/jblcharge6.webp",
    stock: 12
  },
  {
    id: 8,
    name: "Sony SRS-XB43",
    price: 649,
    category: "parlantes",
    description: "Extra Bass para graves potentes. Resistente al agua IP67. Batería hasta 24 horas. Carga rápida. Bluetooth 5.0.",
    image: "https://i.postimg.cc/zvL3wdz0/parlantesony.webp",
    stock: 9
  },
  {
    id: 9,
    name: "Bose SoundLink Revolve+",
    price: 899,
    category: "parlantes",
    description: "Sonido omnidireccional. Resistente al agua IPX4. Batería hasta 16 horas. Asistente de voz integrado. Bluetooth.",
    image: "https://i.postimg.cc/3r6krH16/parlantebose.png",
    stock: 6
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(id));
      resolve(product);
    }, 1000);
  });
};
