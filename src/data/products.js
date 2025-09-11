const products = [
  {
    id: 1,
    title: "Auriculares Inalámbricos",
    price: 59.99,
    imgURL: "/products/auriculares-in.jpg",
    stock: 25,
    category: "Electrónica",
    description: "Auriculares con cancelación de ruido y 20 horas de batería. Ideales para música y llamadas."
  },
  {
    id: 2,
    title: "Teclado Mecánico RGB",
    price: 85.50,
    imgURL: "https://ejemplo.com/teclado.jpg",
    stock: 15,
    category: "Accesorios de PC",
    description: "Teclado con switches mecánicos, iluminación RGB personalizable y diseño ergonómico."
  },
  {
    id: 3,
    title: "Ratón Gaming",
    price: 35.00,
    imgURL: "https://ejemplo.com/mouse.jpg",
    stock: 40,
    category: "Accesorios de PC",
    description: "Ratón de alta precisión con 6 botones programables y sensor óptico de 16000 DPI."
  },
  {
    id: 4,
    title: "Monitor 27 pulgadas 4K",
    price: 320.75,
    imgURL: "https://ejemplo.com/monitor.jpg",
    stock: 10,
    category: "Electrónica",
    description: "Monitor de 27 pulgadas con resolución 4K UHD, ideal para diseñadores y gamers."
  },
  {
    id: 5,
    title: "Webcam Full HD",
    price: 45.99,
    imgURL: "https://ejemplo.com/webcam.jpg",
    stock: 30,
    category: "Electrónica",
    description: "Cámara web con micrófono incorporado, resolución 1080p y enfoque automático."
  },
  {
    id: 6,
    title: "Disco Duro Externo 1TB",
    price: 65.00,
    imgURL: "https://ejemplo.com/disco_duro.jpg",
    stock: 18,
    category: "Almacenamiento",
    description: "Disco duro portátil de 1TB, compatible con USB 3.0 y diseño compacto."
  },
  {
    id: 7,
    title: "Router Wi-Fi 6",
    price: 99.99,
    imgURL: "https://ejemplo.com/router.jpg",
    stock: 22,
    category: "Redes",
    description: "Router de última generación con tecnología Wi-Fi 6, ideal para hogares con múltiples dispositivos."
  },
  {
    id: 8,
    title: "Impresora Multifunción",
    price: 150.00,
    imgURL: "https://ejemplo.com/impresora.jpg",
    stock: 8,
    category: "Oficina",
    description: "Impresora que escanea, copia e imprime, compatible con conexión inalámbrica."
  },
  {
    id: 9,
    title: "Smartwatch Deportivo",
    price: 120.50,
    imgURL: "https://ejemplo.com/smartwatch.jpg",
    stock: 14,
    category: "Wearables",
    description: "Reloj inteligente con monitor de ritmo cardíaco, GPS y seguimiento de actividad."
  },
  {
    id: 10,
    title: "Cargador Portátil 20000mAh",
    price: 29.99,
    imgURL: "https://ejemplo.com/powerbank.jpg",
    stock: 50,
    category: "Accesorios Móviles",
    description: "Powerbank de alta capacidad, carga rápida y dos puertos USB."
  },
  {
    id: 11,
    title: "Altavoz Bluetooth Portátil",
    price: 49.00,
    imgURL: "https://ejemplo.com/altavoz.jpg",
    stock: 28,
    category: "Audio",
    description: "Altavoz compacto con sonido potente, resistente al agua y 10 horas de autonomía."
  },
  {
    id: 12,
    title: "Tableta Gráfica Profesional",
    price: 180.25,
    imgURL: "https://ejemplo.com/tableta_grafica.jpg",
    stock: 7,
    category: "Creatividad",
    description: "Tableta con lápiz sensible a la presión, ideal para diseñadores y artistas digitales."
  },
  {
    id: 13,
    title: "Cámara de Seguridad",
    price: 75.00,
    imgURL: "https://ejemplo.com/camara_seguridad.jpg",
    stock: 12,
    category: "Hogar Inteligente",
    description: "Cámara de vigilancia Wi-Fi con visión nocturna y detección de movimiento."
  },
  {
    id: 14,
    title: "Aspiradora Robótica",
    price: 250.00,
    imgURL: "https://ejemplo.com/aspiradora_robot.jpg",
    stock: 6,
    category: "Hogar Inteligente",
    description: "Aspiradora inteligente con mapeo de habitaciones y control por voz."
  },
  {
    id: 15,
    title: "Sistema de Iluminación Inteligente",
    price: 55.00,
    imgURL: "https://ejemplo.com/iluminacion_smart.jpg",
    stock: 20,
    category: "Hogar Inteligente",
    description: "Kit de bombillas LED que se controlan desde el móvil y cambian de color."
  },
  {
    id: 16,
    title: "Micrófono USB para Streaming",
    price: 70.99,
    imgURL: "https://ejemplo.com/microfono_usb.jpg",
    stock: 16,
    category: "Audio",
    description: "Micrófono condensador con conexión USB, perfecto para podcasts y streaming."
  },
  {
    id: 17,
    title: "Memoria RAM 16GB",
    price: 79.50,
    imgURL: "https://ejemplo.com/ram.jpg",
    stock: 23,
    category: "Componentes de PC",
    description: "Módulo de 16GB de memoria RAM DDR4, ideal para mejorar el rendimiento de tu PC."
  },
  {
    id: 18,
    title: "Tarjeta Gráfica RTX 3060",
    price: 450.00,
    imgURL: "https://ejemplo.com/gpu.jpg",
    stock: 5,
    category: "Componentes de PC",
    description: "Potente tarjeta gráfica para gaming y edición de video."
  },
  {
    id: 19,
    title: "Procesador Intel Core i7",
    price: 350.00,
    imgURL: "https://ejemplo.com/cpu.jpg",
    stock: 9,
    category: "Componentes de PC",
    description: "Procesador de última generación con alto rendimiento para multitarea y gaming."
  },
  {
    id: 20,
    title: "Teléfono Inteligente (Modelo X)",
    price: 699.00,
    imgURL: "https://ejemplo.com/smartphone.jpg",
    stock: 11,
    category: "Telefonía",
    description: "Smartphone con pantalla AMOLED, cámara de 50MP y batería de larga duración."
  },
  {
    id: 21,
    title: "Funda para Teléfono",
    price: 15.00,
    imgURL: "https://ejemplo.com/funda.jpg",
    stock: 70,
    category: "Accesorios Móviles",
    description: "Funda de silicona resistente a golpes para proteger tu smartphone."
  },
  {
    id: 22,
    title: "Lector de Libros Electrónicos",
    price: 110.00,
    imgURL: "https://ejemplo.com/ebook_reader.jpg",
    stock: 19,
    category: "Lectura",
    description: "E-reader con pantalla de tinta electrónica, ideal para leer sin fatiga visual."
  },
  {
    id: 23,
    title: "Batería Externa Solar",
    price: 39.99,
    imgURL: "https://ejemplo.com/bateria_solar.jpg",
    stock: 24,
    category: "Accesorios Móviles",
    description: "Cargador solar de 10000mAh, perfecto para aventuras al aire libre."
  },
  {
    id: 24,
    title: "Kit de Herramientas para PC",
    price: 25.50,
    imgURL: "https://ejemplo.com/herramientas_pc.jpg",
    stock: 33,
    category: "Accesorios de PC",
    description: "Kit con destornilladores y pinzas para montar y reparar equipos informáticos."
  },
  {
    id: 25,
    title: "Adaptador USB-C a HDMI",
    price: 19.99,
    imgURL: "https://ejemplo.com/adaptador.jpg",
    stock: 55,
    category: "Conectividad",
    description: "Permite conectar tu dispositivo USB-C a un monitor o televisor con HDMI."
  },
  {
    id: 26,
    title: "Controlador de Videojuegos",
    price: 55.00,
    imgURL: "https://ejemplo.com/controlador.jpg",
    stock: 17,
    category: "Gaming",
    description: "Mando ergonómico compatible con PC y consolas, con vibración háptica."
  },
  {
    id: 27,
    title: "Estación de Carga Inalámbrica",
    price: 45.00,
    imgURL: "https://ejemplo.com/estacion_carga.jpg",
    stock: 21,
    category: "Accesorios Móviles",
    description: "Base de carga rápida para smartphones, auriculares y smartwatches compatibles."
  },
  {
    id: 28,
    title: "Dron con Cámara 4K",
    price: 499.00,
    imgURL: "https://ejemplo.com/dron.jpg",
    stock: 4,
    category: "Drones",
    description: "Dron plegable con estabilizador de 3 ejes y cámara 4K para grabaciones aéreas."
  },
  {
    id: 29,
    title: "Auriculares para Gaming",
    price: 65.00,
    imgURL: "https://ejemplo.com/auriculares_gaming.jpg",
    stock: 13,
    category: "Gaming",
    description: "Auriculares con sonido envolvente 7.1, micrófono retráctil y almohadillas de gel."
  },
  {
    id: 30,
    title: "Tarjeta de Memoria MicroSD 128GB",
    price: 22.99,
    imgURL: "https://ejemplo.com/sd_card.jpg",
    stock: 60,
    category: "Almacenamiento",
    description: "Tarjeta de alta velocidad para cámaras, drones y smartphones."
  }
];

export default products;