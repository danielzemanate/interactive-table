export const dummyData = [
  {
    producto: "",
    categoria: "",
    proveedor: "",
    precio: "",
    stock: "",
  },
  {
    producto: "Laptop",
    categoria: "",
    proveedor: "Dell",
    precio: 1200,
    stock: "",
  },
  {
    producto: "Cantidad disponible",
    categoria: "Computadores",
    proveedor: "Asus",
    precio: 2000,
    stock: 20,
  },
];

export const editableConfig = {
  producto: "select",
  categoria: "select",
  proveedor: "readonly",
  precio: "input",
  stock: "select",
} as const;

export const selectOptions = {
  producto: ["Laptop", "Monitor", "Teclado", "Mouse"],
  categoria: ["Electrónica", "Accesorios", "Computadores"],
  proveedor: ["Intel", "Asus", "Dell"],
  precio: [5, 10, 15],
  stock: ["Disponible", "Agotado"],
};
