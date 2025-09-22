const products = [
  {
    id: 1,
    title: "Auriculares Inalámbricos",
    price: 59.99,
    imgURL: "/products/auriculares-in.jpg",
    stock: 25,
    category: "electronica",
    description: "Auriculares con cancelación de ruido y 20 horas de batería. Ideales para música y llamadas."
  },
  {
    id: 2,
    title: "Teclado Mecánico RGB",
    price: 85.50,
    imgURL: "https://placehold.co/600x400/FF69B4/FFF?text=Teclado+Mec nico+RGB",
    stock: 15,
    category: "accesorios",
    description: "Teclado con switches mecánicos, iluminación RGB personalizable y diseño ergonómico."
  },
  {
    id: 3,
    title: "Ratón Gaming",
    price: 35.00,
    imgURL: "https://placehold.co/600x400/2F4F7F/FFF?text=Rat n+Gaming",
    stock: 40,
    category: "accesorios",
    description: "Ratón de alta precisión con 6 botones programables y sensor óptico de 16000 DPI."
  },
  {
    id: 4,
    title: "Monitor 27 pulgadas 4K",
    price: 320.75,
    imgURL: "https://placehold.co/600x400/00BFFF/FFF?text=Monitor+27+pulgadas+4K",
    stock: 10,
    category: "electronica",
    description: "Monitor de 27 pulgadas con resolución 4K UHD, ideal para diseñadores y gamers."
  },
  {
    id: 5,
    title: "Webcam Full HD",
    price: 45.99,
    imgURL: "https://placehold.co/600x400/FFC5C5/FFF?text=Webcam+Full+HD",
    stock: 30,
    category: "electronica",
    description: "Cámara web con micrófono incorporado, resolución 1080p y enfoque automático."
  },
  {
    id: 6,
    title: "Disco Duro Externo 1TB",
    price: 65.00,
    imgURL: "https://placehold.co/600x400/1F77B9/FFF?text=Disco+Duro+Externo+1TB",
    stock: 18,
    category: "almacenamiento",
    description: "Disco duro portátil de 1TB, compatible con USB 3.0 y diseño compacto."
  },
  {
    id: 7,
    title: "Router Wi-Fi 6",
    price: 99.99,
    imgURL: "https://placehold.co/600x400/00BFFF/FFF?text=Router+Wi-Fi+6",
    stock: 22,
    category: "redes",
    description: "Router de última generación con tecnología Wi-Fi 6, ideal para hogares con múltiples dispositivos."
  },
  {
    id: 8,
    title: "Impresora Multifunción",
    price: 150.00,
    imgURL: "https://placehold.co/600x400/FFD7BE/FFF?text=Impresora+Multifunción",
    stock: 8,
    category: "oficina",
    description: "Impresora que escanea, copia e imprime, compatible con conexión inalámbrica."
  },
  {
    id: 9,
    title: "Smartwatch Deportivo",
    price: 120.50,
    imgURL: "https://placehold.co/600x400/FFC80C0/FFF?text=Smartwatch+Deportivo",
    stock: 14,
    category: "wearables",
    description: "Reloj inteligente con monitor de ritmo cardíaco, GPS y seguimiento de actividad."
  },
  {
    id: 10,
    title: "Cargador Portátil 20000mAh",
    price: 29.99,
    imgURL: "https://placehold.co/600x400/FF00FF/FFF?text=Cargador+Portátil+20000mAh",
    stock: 50,
    category: "accesorios",
    description: "Powerbank de alta capacidad, carga rápida y dos puertos USB."
  },
  {
    id: 11,
    title: "Altavoz Bluetooth Portátil",
    price: 49.00,
    imgURL: "https://placehold.co/600x400/FFD2C4/FFF?text=Altavoz+Bluetooth+Portátil",
    stock: 28,
    category: "audio",
    description: "Altavoz compacto con sonido potente, resistente al agua y 10 horas de autonomía."
  },
  {
    id: 12,
    title: "Tableta Gráfica Profesional",
    price: 180.25,
    imgURL: "https://placehold.co/600x400/FF8F00/FFF?text=Tableta+Gráfica+Profesional",
    stock: 7,
    category: "creatividad",
    description: "Tableta con lápiz sensible a la presión, ideal para diseñadores y artistas digitales."
  },
  {
    id: 13,
    title: "Cámara de Seguridad",
    price: 75.00,
    imgURL: "https://placehold.co/600x400/FFD9C5/FFF?text=Cámara+de+Seguridad",
    stock: 12,
    category: "hogar",
    description: "Cámara de vigilancia Wi-Fi con visión nocturna y detección de movimiento."
  },
  {
    id: 14,
    title: "Aspiradora Robótica",
    price: 250.00,
    imgURL: "https://placehold.co/600x400/FFA3CC/FFF?text=Aspiradora+Robótica",
    stock: 6,
    category: "hogar",
    description: "Aspiradora inteligente con mapeo de habitaciones y control por voz."
  },
  {
    id: 15,
    title: "Sistema de Iluminación Inteligente",
    price: 55.00,
    imgURL: "https://placehold.co/600x400/FF8E00/FFF?text=Sistema+de+Iluminación+Inteligente",
    stock: 20,
    category: "hogar",
    description: "Kit de bombillas LED que se controlan desde el móvil y cambian de color."
  },
  {
    id: 16,
    title: "Micrófono USB para Streaming",
    price: 70.99,
    imgURL: "https://placehold.co/600x400/FFC2C7/FFF?text=Micrófono+USB+para+Streaming",
    stock: 16,
    category: "audio",
    description: "Micrófono condensador con conexión USB, perfecto para podcasts y streaming."
  },
  {
    id: 17,
    title: "Memoria RAM 16GB",
    price: 79.50,
    imgURL: "https://placehold.co/600x400/FF00CC/FFF?text=Memoria+RAM+16GB",
    stock: 23,
    category: "componentes",
    description: "Módulo de 16GB de memoria RAM DDR4, ideal para mejorar el rendimiento de tu PC."
  },
  {
    id: 18,
    title: "Tarjeta Gráfica RTX 3060",
    price: 450.00,
    imgURL: "https://placehold.co/600x400/FF99CC/FFF?text=Tarjeta+Gráfica+RTX+3060",
    stock: 5,
    category: "componentes",
    description: "Potente tarjeta gráfica para gaming y edición de video."
  },
  {
    id: 19,
    title: "Procesador Intel Core i7",
    price: 350.00,
    imgURL: "https://placehold.co/600x400/FF3D00/FFF?text=Procesador+Intel+Core+i7",
    stock: 9,
    category: "componentes",
    description: "Procesador de última generación con alto rendimiento para multitarea y gaming."
  },
  {
    id: 20,
    title: "Teléfono Inteligente (Modelo X)",
    price: 699.00,
    imgURL: "https://placehold.co/600x400/FF8B00/FFF?text=Teléfono+Inteligente+(Modelo+X)",
    stock: 11,
    category: "telefonía",
    description: "Smartphone con pantalla AMOLED, cámara de 50MP y batería de larga duración."
  },
]
export default products;
