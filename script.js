//your code here!
// Get the list element
const list = document.getElementById('infi-list');

// Create an array with some initial list items
const initialItems = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10'
];

// Function to add new list items
function addItems() {
  // Number of new items to add
  const numItemsToAdd = 2;

  for (let i = 0; i < numItemsToAdd; i++) {
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${initialItems.length + i + 1}`;

    // Append the new item to the list
    list.appendChild(newItem);
  }
}

// Add the initial list items
initialItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});

// Event listener for scroll event
window.addEventListener('scroll', () => {
  // Check if user has reached the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add new list items
    addItems();
  }
});

