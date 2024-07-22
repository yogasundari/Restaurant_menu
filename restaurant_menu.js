// Define menu arrays with prices
const breakfastMenu = [
    'Pancakes - $12',
    'Eggs Benedict - $22.99',
    'Oatmeal - $21.99',
    'Frittata - $15'
];
const mainCourseMenu = [
    'Steak - $30',
    'Pasta - $18',
    'Burger - $12',
    'Salmon - $25'
];
const dessertMenu = [
    'Cake - $8',
    'Ice Cream - $5',
    'Pudding - $7',
    'Fruit Salad - $6'
];

// Function to generate HTML for menu items
const generateMenuItemsHTML = (menu) => {
    return menu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
};

// Set HTML for Breakfast Menu
const breakfastMenuItemsHTML = generateMenuItemsHTML(breakfastMenu);
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById('breakfastTotalItems').innerHTML = `Total items: ${breakfastMenu.length}`;

// Set HTML for Main Course Menu
const mainCourseMenuItemsHTML = generateMenuItemsHTML(mainCourseMenu);
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;
document.getElementById('maincourseTotalItems').innerHTML = `Total items: ${mainCourseMenu.length}`;

// Set HTML for Dessert Menu
const dessertMenuItemsHTML = generateMenuItemsHTML(dessertMenu);
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
document.getElementById('dessertTotalItems').innerHTML = `Total items: ${dessertMenu.length}`;
