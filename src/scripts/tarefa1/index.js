import { productsList } from "./database.js";

const calculateTotalCost = (customerName, products, discount = 0) => {
  let totalCost = 0;
  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    totalCost += currentProduct.price;
  }

  if (discount > 0) {
    let totalDiscount = totalCost * (discount / 100);
    let totalWithDiscount = totalCost - totalDiscount;
    return `Olá, ${customerName}! O total da sua compra é R$ ${totalWithDiscount.toFixed(2)} (${discount}% de desconto).`;
  } else {
    return `Olá, ${customerName}! O total da sua compra é R$ ${totalCost.toFixed(2)} (sem desconto).`;
  }
};
