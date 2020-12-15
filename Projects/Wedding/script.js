window.storeData = [
  {
    name: 'Rose Wedding Cake',
    description: 'This is our 4 layered rose cake that can be tweaked to your liking',
    price: 680,
    category: 'Cake',
    imageUrl: 'images/cake/cake7.jpg'
  },
  {
    name: 'Blue crested Wedding Cake',
    description:
      'This is our 3 layered flower themed wedding cake that can be tweaked to your liking',
    price: 634,
    category: 'Cake',
    imageUrl: 'images/cake/cake3.jpg'
  },
  {
    name: 'Flower Themed Wedding Cake',
    description: 'This is our 3 layered flower cake that can be tweaked to your liking.',
    price: 538,
    category: 'Cake',
    imageUrl: 'images/cake/cake5.jpg'
  },
  {
    name: 'Vegan Cuisine',
    description: 'Just on of our many choices of delicious meat alternatives.',
    price: 30,
    category: 'catering',
    imageUrl: 'images/food/salads.jpg'
  },
  {
    name: 'American Cuisine',
    description: 'Just a piece of one of the mouth watering meat options thatat we can serve you.',
    price: 25,
    category: 'catering',
    imageUrl: 'images/food/burger1.jpg'
  },
  {
    name: 'Mediterranean Cuisine',
    description:
      'Various foods and delights from the Mediterranean that will be made to your liking',
    price: 20,
    category: 'catering',
    imageUrl: 'images/food/variousfood.jpg'
  },
  {
    name: 'Appetizers',
    description: 'We offer various Appetizers that will make your special day even more perfect!',
    price: 10,
    category: 'catering',
    imageUrl: 'images/food/fancy2.jpg'
  },
  {
    name: 'Beautiful Rose Bouquet',
    description: 'Beautiful Hand picked flowers That will look beuatiful in the brides hands',
    price: 42,
    category: 'decoration',
    imageUrl: 'images/flowers/hflower2.jpg'
  },
  {
    name: 'Beautiful Rose table Flowers',
    description: 'Beautiful Hand picked flowers',
    price: 30,
    category: 'decoration',
    imageUrl: 'images/flowers/flower4.jpg'
  },
  {
    name: 'Beautiful Orchid table Flowers',
    description: 'Hand picked flowers that complete any table with their freshness and beauty',
    price: 34,
    category: 'decoration',
    imageUrl: 'images/flowers/flowers6.jpg'
  }
];

var slideIndex = 0;
autoSlider();

function autoSlider() {
  let slides = document.getElementsByClassName('slidefunc');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex === 4) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(autoSlider, 2300);
}

function itemViewer(itemName) {
  count = 0;
  let newline = '\n\n';
  let info = document.getElementById('itemInfo');
  for (let i = 0; i < 10; i++) {
    if (storeData[i].name === itemName) count = i;
  }
  info.innerHTML = '';
  document.querySelector('#popupImage').setAttribute('src', storeData[count].imageUrl);
  console.log(storeData[count].imageUrl);
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#itemInfo').style.visibility = 'visible';
  document.querySelector('#popup').style.visibility = 'visible';
  document.querySelector('#whiteLayer').style.visibility = 'visible';
  info.innerText += 'Name: ' + storeData[count].name + newline;
  info.innerText += 'Price: $' + storeData[count].price + newline;
  info.innerText += 'Description: ' + storeData[count].description;
  document.querySelector('#contactform').style.visibility = 'hidden';
  document.querySelector('#contactitle').style.visibility = 'hidden';
}

function ProblemViewer(elem) {
  if (elem.value === 'Order Problem') {
    document.querySelector('#ordernumber').style.visibility = 'visible';
  } else {
    document.querySelector('#ordernumber').style.visibility = 'hidden';
  }
}
