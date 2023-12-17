let items = [
    { name: "Элемент", price: 10},
    { name: "Элемент", price: 20},
    { name: "Элемент", price: 15},
  ];
  
  function displayItems() {
    const itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.innerHTML = "";
    items.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `${item.name} - ${item.price}`;
      itemsContainer.appendChild(div);
    });
  }
  
  function calculateTotalCost() {
    const totalCostElement = document.getElementById("totalCost");
    const totalCost = items.reduce((acc, curr) => acc + curr.price, 0);
    totalCostElement.textContent = totalCost;
  }

  function addItem() {
    items.push({name:"Элемент", price:Math.floor(Math.random() * 100)});
    displayItems();
    calculateTotalCost();
    filterItemsByPrice();
  }
  
  
  function sortItemsUp() {
    items.sort((a, b) => a.price - b.price);
    displayItems();
  }

  function sortItemsDown() {
    items.sort((a, b) => b.price - a.price);
    displayItems();
  }

  function filterItemsByPrice() {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);
    const filteredItems = items.filter(item => item.price >= minPrice && item.price <= maxPrice);
    displayFilteredItems(filteredItems);
  }
  
  function displayFilteredItems(filteredItems) {
    const itemsContainer = document.getElementById("itemsContainer2");
    itemsContainer.innerHTML = "";
    filteredItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `${item.name} - ${item.price}`;
      itemsContainer.appendChild(div);
    });
  }
  
  displayItems();
  calculateTotalCost();
  filterItemsByPrice();
