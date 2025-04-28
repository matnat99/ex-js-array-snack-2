const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

/*
Snack 1 - Filtra e Modifica
Crea una funzione che somma due numeri.

Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.
*/

const longBooks = books.filter((b) => b.pages > 300);

const longBooksTitles = longBooks.map((l) => l.title);

longBooksTitles.forEach((t) => console.log(t));

/*
Snack 2 - Il primo libro scontato

Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
*/

const availableBooks = books.filter((b) => b.available);

const discountedBooks = availableBooks.map((b) => {
  const price = parseFloat(b.price.replace("€", ""));
  const discountedPrice = price * (0.8).toFixed(2);
  return {
    ...b,
    price: `${discountedPrice}€`,
  };
});

const fullPricedBook = discountedBooks.find((b) => {
  const price = parseFloat(b.price.replace("€", ""));
  return price % 1 === 0;
});

console.log(fullPricedBook);
