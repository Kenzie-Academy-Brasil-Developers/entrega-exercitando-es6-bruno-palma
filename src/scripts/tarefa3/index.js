import { userTypeDiscount, bookStoreBooks } from "./database.js";

const findBooksByCategory = (bookList, category) => {
  const booksList = bookList.filter((book) =>
    book.categories.includes(category)
  );

  return booksList;
};

const findBookById = (bookList, bookId) => {
  const bookById = bookList.find((book) => book.id === bookId);

  return bookById;
};

const sellBook = (bookList, bookId, userType = "normal") => {
  const currentBook = findBookById(bookList, bookId);

  if (currentBook == undefined || currentBook.quantity < 1) {
    return "Livro indisponível para compra.";
  } else {
    const bookIndex = bookList.findIndex((book) => book.id === bookId);

    bookList[bookIndex].quantity -= 1;

    const bookTitle = bookList[bookIndex].title;

    const bookPrice = bookList[bookIndex].price;

    const userDiscount = (userType) => {
      if (userType.toLowerCase() === "normal") {
        return 0;
      } else if (userType.toLowerCase() === "bronze") {
        return 5;
      } else if (userType.toLowerCase() === "silver") {
        return 10;
      } else if (userType.toLowerCase() === "gold") {
        return 12;
      } else if (userType.toLowerCase() === "platinum") {
        return 15;
      }
    };

    const bookDiscount = bookPrice * (userDiscount(userType) / 100);

    const discountPrice = bookPrice - bookDiscount;

    return `Livro ${bookTitle} vendido com sucesso por R$ ${discountPrice.toFixed(
      2
    )} (${userDiscount(userType)}% de desconto).`;
  }
};

const calculateAverageRating = (bookList, bookId) => {
  const currentBook = findBookById(bookList, bookId);

  if (currentBook == undefined) {
    return "Livro não encontrado.";
  } else if (currentBook.ratings.length < 1) {
    return `O livro ${currentBook.title} não possui nenhuma avaliação.`;
  } else {
    const sumRatings = currentBook.ratings.reduce((acc, cur) => acc + cur);
    const averageRatings = sumRatings / currentBook.ratings.length;

    return `O livro ${
      currentBook.title
    } possui uma média de avaliação igual a ${averageRatings.toFixed(2)}.`;
  }
};
