# 🛒 Coronda Tech - E-commerce

## 📝 Descripción del Proyecto

**Coronda Tech** es una tienda online de productos tecnológicos desarrollada con React como proyecto final del curso de React Flex de CoderHouse. La aplicación permite a los usuarios navegar por un catálogo de productos, filtrar por categorías (celulares, computadoras y parlantes), agregar productos al carrito de compras y realizar órdenes de compra que se almacenan en Firebase Firestore.

El proyecto implementa funcionalidades modernas de e-commerce como gestión de carrito persistente, navegación por categorías, detalles de productos, formulario de checkout con validaciones y confirmación de órdenes.

## ✨ Características Principales

- 🏪 Catálogo de productos con información detallada
- 🔍 Filtrado de productos por categoría
- 🛒 Carrito de compras con gestión de cantidades
- 💳 Proceso de checkout con formulario completo
- 📦 Generación de órdenes de compra
- 🔥 Almacenamiento en Firebase Firestore
- 📱 Diseño responsive y moderno
- ⚡ Navegación fluida con React Router
- 🎨 Interfaz de usuario atractiva con Tailwind CSS
- 🔔 Notificaciones interactivas con SweetAlert2

## 🛠️ Tecnologías y Librerías Utilizadas

### **Dependencias Principales**

| Librería | Versión | Propósito |
|----------|---------|-----------|
| **React** | ^19.1.1 | Framework principal para construir la interfaz de usuario con componentes reutilizables |
| **React Router DOM** | ^7.9.1 | Manejo de rutas y navegación entre páginas (home, categorías, detalles, carrito, checkout) |
| **Firebase** | ^12.3.0 | Backend as a Service para almacenar productos y órdenes en Firestore Database |
| **Tailwind CSS** | ^4.1.12 | Framework de CSS utility-first para estilos modernos y responsive design |
| **React Icons** | ^5.5.0 | Biblioteca de iconos (Font Awesome, Bootstrap Icons) para mejorar la UI |
| **SweetAlert2** | ^11.26.2 | Alertas y notificaciones personalizadas para mejorar la experiencia de usuario |

### **Herramientas de Desarrollo**

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **Vite** | ^7.1.2 | Build tool ultrarrápido para desarrollo y producción |
| **ESLint** | ^9.33.0 | Linter para mantener código limpio y consistente |
| **@vitejs/plugin-react** | ^5.0.0 | Plugin oficial de Vite para soporte de React con Fast Refresh |

---

## 📚 ¿Por qué estas Librerías?

### **React** 
Framework más popular para desarrollo frontend, permite crear interfaces interactivas mediante componentes reutilizables y manejo eficiente del estado.

### **React Router DOM**
Biblioteca estándar para enrutamiento en aplicaciones React SPA (Single Page Application). Permite navegación sin recargas de página y gestión de URLs dinámicas.

### **Firebase Firestore**
Base de datos NoSQL en tiempo real que permite almacenar y sincronizar datos. Ideal para proyectos que requieren backend sin configuración de servidor. Se utilizó para:
- Almacenar el catálogo de productos
- Guardar órdenes de compra
- Gestionar categorías de productos

### **Tailwind CSS**
Framework de CSS utility-first que acelera el desarrollo de interfaces modernas y responsive. Permite crear diseños personalizados sin escribir CSS personalizado extenso.

### **React Icons**
Proporciona miles de iconos populares como componentes React. Se utilizó para mejorar la experiencia visual del footer, navegación y otros elementos de la UI.

### **SweetAlert2**
Biblioteca para crear alertas personalizadas y atractivas. Se implementó para:
- Confirmar agregado de productos al carrito
- Validar formularios de checkout
- Mostrar confirmación de órdenes con ID generado
- Alertas de error y advertencia

### **Vite**
Herramienta de build moderna que ofrece desarrollo ultrarrápido con Hot Module Replacement (HMR) instantáneo y optimización automática para producción.

## 🚀 Instalación y Configuración

### **Prerrequisitos**

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### **Clonar el Repositorio**

```bash
# Clonar el repositorio
git clone https://github.com/LorePB7/coder-react.git

# Navegar al directorio del proyecto
cd coder-react

# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📂 Estructura del Proyecto

```
coder-react/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── NavBar.jsx           # Barra de navegación
│   │   ├── Footer.jsx           # Pie de página
│   │   ├── ItemListContainer.jsx # Contenedor de lista de productos
│   │   ├── ItemList.jsx         # Lista de productos
│   │   ├── Item.jsx             # Tarjeta de producto
│   │   ├── ItemDetailContainer.jsx # Contenedor de detalle
│   │   ├── ItemDetail.jsx       # Detalle de producto
│   │   ├── ItemCount.jsx        # Contador de cantidad
│   │   ├── CartWidget.jsx       # Widget del carrito
│   │   ├── CartContainer.jsx    # Contenedor del carrito
│   │   ├── CartView.jsx         # Vista del carrito
│   │   ├── CartItem.jsx         # Item del carrito
│   │   ├── Checkout.jsx         # Formulario de checkout
│   │   ├── EmptyCart.jsx        # Carrito vacío
│   │   ├── Loader.jsx           # Componente de carga
│   │   └── Error404.jsx         # Página de error 404
│   ├── context/           # Context API
│   │   └── CartContext.jsx      # Contexto global del carrito
│   ├── services/          # Servicios externos
│   │   └── firebase.jsx         # Configuración de Firebase
│   ├── CSS/               # Estilos personalizados
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

## 🎯 Funcionalidades Implementadas

### **1. Navegación y Catálogo**
- Página principal con todos los productos
- Filtrado por categorías (celulares, computadoras, parlantes)
- Vista detallada de cada producto

### **2. Carrito de Compras**
- Agregar productos con cantidad seleccionable
- Ver productos en el carrito
- Modificar cantidades o eliminar productos
- Cálculo automático del total
- Persistencia durante la sesión

### **3. Proceso de Checkout**
- Formulario completo con validaciones
- Campos: nombre, email, teléfono, dirección, ciudad, código postal y método de pago
- Validación de campos obligatorios con SweetAlert2
- Confirmación de compra con ID de orden
- Almacenamiento de orden en Firebase

### **4. Integración con Firebase**
- Lectura de productos desde Firestore
- Almacenamiento de órdenes de compra
- Timestamp automático de órdenes

---

## 🌐 Deploy

**🔗 Link de Deploy:** [Próximamente en Vercel](https://vercel.com)

---

## 👨‍💻 Autor

**Lorenzo Píccolo**

- GitHub: [@LorePB7](https://github.com/LorePB7)
- Proyecto desarrollado para CoderHouse - Curso React
