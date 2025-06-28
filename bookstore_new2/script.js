const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 299,
    img: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 279,
    img: "https://covers.openlibrary.org/b/id/7352161-L.jpg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 319,
    img: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 459,
    img: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 7,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 249,
    img: "https://covers.openlibrary.org/b/id/8104159-L.jpg",
  },
  {
    id: 8,
    title: "Moby-Dick",
    author: "Herman Melville",
    price: 389,
    img: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
  },
  {
    id: 9,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 499,
    img: "https://covers.openlibrary.org/b/id/8318320-L.jpg",
  },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 459,
    img: "https://covers.openlibrary.org/b/id/8102232-L.jpg",
  },
  {
    id: 11,
    title: "The Odyssey",
    author: "Homer",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232003-L.jpg",
  },
  {
    id: 12,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8306660-L.jpg",
  },
  {
    id: 13,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    price: 479,
    img: "https://covers.openlibrary.org/b/id/8033984-L.jpg",
  },
  {
    id: 14,
    title: "Les Misérables",
    author: "Victor Hugo",
    price: 549,
    img: "https://covers.openlibrary.org/b/id/8101207-L.jpg",
  },
  {
    id: 15,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 479,
    img: "https://covers.openlibrary.org/b/id/8223693-L.jpg",
  },
  {
    id: 16,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    price: 459,
    img: "https://covers.openlibrary.org/b/id/8232025-L.jpg",
  },
  {
    id: 17,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    price: 329,
    img: "https://covers.openlibrary.org/b/id/8232034-L.jpg",
  },
  {
    id: 18,
    title: "Dracula",
    author: "Bram Stoker",
    price: 299,
    img: "https://covers.openlibrary.org/b/id/8232043-L.jpg",
  },
  {
    id: 19,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 279,
    img: "https://covers.openlibrary.org/b/id/8232050-L.jpg",
  },
  {
    id: 20,
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 259,
    img: "https://covers.openlibrary.org/b/id/8232057-L.jpg",
  },
  {
    id: 21,
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232064-L.jpg",
  },
  {
    id: 22,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8232070-L.jpg",
  },
  {
    id: 23,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232076-L.jpg",
  },
  {
    id: 24,
    title: "Lolita",
    author: "Vladimir Nabokov",
    price: 319,
    img: "https://covers.openlibrary.org/b/id/8232083-L.jpg",
  },
  {
    id: 25,
    title: "The Stranger",
    author: "Albert Camus",
    price: 289,
    img: "https://covers.openlibrary.org/b/id/8232090-L.jpg",
  },
  {
    id: 26,
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    price: 279,
    img: "https://covers.openlibrary.org/b/id/8232096-L.jpg",
  },
  {
    id: 27,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 369,
    img: "https://covers.openlibrary.org/b/id/8232103-L.jpg",
  },
  {
    id: 28,
    title: "Life of Pi",
    author: "Yann Martel",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8232109-L.jpg",
  },
  {
    id: 29,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    img: "https://covers.openlibrary.org/b/id/8232115-L.jpg",
  },
  {
    id: 30,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232121-L.jpg",
  },
  {
    id: 31,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 359,
    img: "https://covers.openlibrary.org/b/id/8232128-L.jpg",
  },
  {
    id: 32,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 499,
    img: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
  },
  {
    id: 33,
    title: "Twilight",
    author: "Stephenie Meyer",
    price: 299,
    img: "https://covers.openlibrary.org/b/id/8232134-L.jpg",
  },
  {
    id: 34,
    title: "The Fault in Our Stars",
    author: "John Green",
    price: 329,
    img: "https://covers.openlibrary.org/b/id/8232140-L.jpg",
  },
  {
    id: 35,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 379,
    img: "https://covers.openlibrary.org/b/id/8232147-L.jpg",
  },
  {
    id: 36,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8232153-L.jpg",
  },
  {
    id: 37,
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232159-L.jpg",
  },
  {
    id: 38,
    title: "Dune",
    author: "Frank Herbert",
    price: 459,
    img: "https://covers.openlibrary.org/b/id/8232165-L.jpg",
  },
  {
    id: 39,
    title: "Ender's Game",
    author: "Orson Scott Card",
    price: 359,
    img: "https://covers.openlibrary.org/b/id/8232170-L.jpg",
  },
  {
    id: 40,
    title: "Ready Player One",
    author: "Ernest Cline",
    price: 379,
    img: "https://covers.openlibrary.org/b/id/8232176-L.jpg",
  },
  {
    id: 41,
    title: "The Shining",
    author: "Stephen King",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232182-L.jpg",
  },
  {
    id: 42,
    title: "It",
    author: "Stephen King",
    price: 459,
    img: "https://covers.openlibrary.org/b/id/8232188-L.jpg",
  },
  {
    id: 43,
    title: "Misery",
    author: "Stephen King",
    price: 349,
    img: "https://covers.openlibrary.org/b/id/8232194-L.jpg",
  },
  {
    id: 44,
    title: "The Road",
    author: "Cormac McCarthy",
    price: 399,
    img: "https://covers.openlibrary.org/b/id/8232200-L.jpg",
  },
  {
    id: 45,
    title: "The Color Purple",
    author: "Alice Walker",
    price: 329,
    img: "https://covers.openlibrary.org/b/id/8232206-L.jpg",
  },
  {
    id: 46,
    title: "Beloved",
    author: "Toni Morrison",
    price: 359,
    img: "https://covers.openlibrary.org/b/id/8232212-L.jpg",
  },
  {
    id: 47,
    title: "Catch-22",
    author: "Joseph Heller",
    price: 339,
    img: "https://covers.openlibrary.org/b/id/8232218-L.jpg",
  },
  {
    id: 48,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    price: 319,
    img: "https://covers.openlibrary.org/b/id/8232224-L.jpg",
  },
  {
    id: 49,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    price: 299,
    img: "https://covers.openlibrary.org/b/id/8232230-L.jpg",
  },
  {
    id: 50,
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    price: 289,
    img: "https://covers.openlibrary.org/b/id/8232236-L.jpg",
  },
];

const booksContainer = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotalDiv = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const toggleDarkBtn = document.getElementById("toggleDark");
const paymentModal = document.getElementById("paymentModal");
const closeModalBtn = document.getElementById("closeModal");
const paymentForm = document.getElementById("paymentForm");
const payAmountSpan = document.getElementById("payAmount");
const paymentMessageDiv = document.getElementById("paymentMessage");
const cartButton = document.getElementById("cartButton");
const cartElement = document.getElementById("cart"); // Renamed variable
let cart = {}; // This will hold the cart items
// Initialize dark mode from localStorage if available
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggleDarkBtn.textContent = "☀️ Light Mode";
}
// Function to toggle cart visibility
cartButton.addEventListener("click", () => {
  cartElement.style.display =
    cartElement.style.display === "block" ? "none" : "block";
});

// Render books
function renderBooks(bookList) {
  booksContainer.innerHTML = "";

  if (bookList.length === 0) {
    booksContainer.innerHTML = '<p style="font-size:1.2rem;">No books found.</p>';
    return;
  }

  bookList.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("card"); // Apply Tailwind classes if needed

    bookDiv.innerHTML = `
      <div class="card-image relative">
          <img src="${book.img}" alt="Cover of ${book.title}" class="w-full h-auto rounded-t-lg object-cover" />
          <span class="badge absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">Bestseller</span>
      </div>
      <div class="card-content p-4 space-y-2">
          <h3 class="title font-semibold text-lg">${book.title}</h3>
          <p class="author text-gray-600 text-sm">by ${book.author}</p>
          
          <div class="rating flex items-center space-x-1 text-yellow-500 text-sm">
              <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="review-count text-gray-500">(128 reviews)</span>
          </div>

          <div class="price-container text-base">
              <span class="price text-green-600 font-bold">₹${book.price.toFixed(2)}</span>
              <span class="original-price line-through text-gray-400 ml-2">₹${(book.price * 1.3).toFixed(2)}</span>
          </div>
          
          <div class="buttons flex space-x-2 pt-2">
              <button class="add-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1" aria-label="Add ${book.title} to cart" data-id="${book.id}">
                  <i class="fas fa-cart-plus"></i> Add to Cart
              </button>
              <button class="buy-btn bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1" aria-label="Buy ${book.title} now" data-id="${book.id}">
                  <i class="fas fa-bolt"></i> Buy Now
              </button>
          </div>
      </div>
    `;

    booksContainer.appendChild(bookDiv);
  });

  // Attach event listeners to buttons
  attachButtonListeners();
}

// Attach event listeners for add and buy buttons
function attachButtonListeners() {
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });

  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", () => buyNow(parseInt(btn.dataset.id)));
  });
}

// Add book to cart
function addToCart(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (cart[bookId]) {
    cart[bookId].qty++;
  } else {
    cart[bookId] = { ...book, qty: 1 };
  }
  saveCart();
  renderCart();
}

// Remove book from cart
function removeFromCart(bookId) {
  delete cart[bookId];
  saveCart();
  renderCart();
}

// Clear entire cart
function clearCart() {
  cart = {};
  saveCart();
  renderCart();
}

// Render cart contents
function renderCart() {
  cartItemsDiv.innerHTML = "";
  const cartEntries = Object.values(cart);
  if (cartEntries.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalDiv.textContent = "Total: ₹0.00";
    checkoutBtn.disabled = true;
    clearCartBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  clearCartBtn.disabled = false;

  let total = 0;
  cartEntries.forEach((item) => {
    total += item.price * item.qty;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
            <div class="title" title="${item.title}">${item.title}</div>
            <div class="qty">x${item.qty}</div>
            <div>₹${(item.price * item.qty).toFixed(2)}</div>
            <button class="remove-btn" aria-label="Remove ${
              item.title
            } from cart" data-id="${item.id}">&times;</button>
        `;
    cartItemsDiv.appendChild(cartItemDiv);
  });

  // Attach event listeners for remove buttons
  attachRemoveButtonListeners();

  cartTotalDiv.textContent = `Total: ₹${total.toFixed(2)}`;
  payAmountSpan.textContent = total.toFixed(2);
}

// Attach event listeners for remove buttons
function attachRemoveButtonListeners() {
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      removeFromCart(parseInt(btn.dataset.id))
    );
  });
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("bookstoreCart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
  const storedCart = localStorage.getItem("bookstoreCart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

// Search books by title or author
function searchBooks(query) {
  query = query.trim().toLowerCase();
  if (!query) return books;
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
}

// Buy Now flow - opens modal with just this book
function buyNow(bookId) {
  cart = {}; // Clear cart
  const book = books.find((b) => b.id === bookId);
  cart[bookId] = { ...book, qty: 1 };
  renderCart();
  openPaymentModal();
}

// Open payment modal
function openPaymentModal() {
  paymentMessageDiv.textContent = "";
  paymentModal.style.display = "block";
  document.getElementById("nameOnCard").focus(); // Focus first input for accessibility
}

// Close payment modal
function closePaymentModal() {
  paymentModal.style.display = "none";
}

// Handle payment form submission
paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  paymentMessageDiv.style.color = "green";
  paymentMessageDiv.textContent = "Processing payment...";

  // Simulate payment processing delay
  setTimeout(() => {
    paymentMessageDiv.textContent =
      "Payment Successful! Thank you for your purchase.";
    clearCart();
    closePaymentModal();
  }, 1500);
});

// Toggle dark mode
toggleDarkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleDarkBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDark);
});

// Close modal button
closeModalBtn.addEventListener("click", closePaymentModal);

// Close modal when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === paymentModal) {
    closePaymentModal();
  }
});

// Clear cart button
clearCartBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the cart?")) {
    clearCart();
  }
});

// Checkout button opens payment modal
checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty.");
    return;
  }
  openPaymentModal();
});

// Search input event
searchInput.addEventListener("input", () => {
  const filteredBooks = searchBooks(searchInput.value);
  renderBooks(filteredBooks);
});

// On page load
loadCart();
renderCart();
renderBooks(books);
