const faker = require('faker');
const { WhereWellBe, WhensAvailable } = require('./models');

let mapimageurl = ['https://c1.staticflickr.com/2/1840/43075336654_a5e6e40344_b.jpg', 'https://c1.staticflickr.com/2/1797/28855661087_5ea13b1410_b.jpg', 'https://c1.staticflickr.com/2/1813/28855659877_9e695414c5_b.jpg', 'https://c1.staticflickr.com/2/1798/28855658277_3cb3c1cac9_b.jpg', 'https://c1.staticflickr.com/1/848/28855656447_615b69fcf5_b.jpg', 'https://c1.staticflickr.com/2/1816/28855654477_036a25e613_b.jpg', 'https://c1.staticflickr.com/2/1839/28855652867_d6a8b7d0b5_b.jpg', 'https://c1.staticflickr.com/1/934/28855650847_90fc5c7fb6_b.jpg', 'https://c1.staticflickr.com/2/1836/28855649127_ea11195560_b.jpg', 'https://c1.staticflickr.com/1/930/28855646467_c64f3091fa_b.jpg', 'https://c1.staticflickr.com/1/850/28855644297_b77e0b2f09_b.jpg', 'https://c1.staticflickr.com/1/935/28855641017_79053d1aef_b.jpg', 'https://c1.staticflickr.com/1/862/43791876601_f0482c19cd_b.jpg', 'https://c1.staticflickr.com/1/930/43744103622_042f88ded5_b.jpg', 'https://c1.staticflickr.com/1/850/43075318554_b88e7d89c0_b.jpg', 'https://c1.staticflickr.com/1/932/43075317164_7c67d50d1a_b.jpg', 'https://c1.staticflickr.com/2/1836/43075314884_8b3603d8a8_b.jpg', 'https://c1.staticflickr.com/2/1832/43791868151_66285aa0e3_b.jpg', 'https://c1.staticflickr.com/1/928/43075311344_a5937f15be_b.jpg', 'https://c1.staticflickr.com/1/860/43075297204_e05ed930a8_b.jpg', ''];

for (var i = 0; i < 20; i++) {
  WhereWellBe.create({ mapimageurl: mapimageurl[i], description: faker.lorem.paragraph(), price: Math.floor(Math.random() * (200 - 100) + 100) })
    .then((res) => {
      console.log('This is the res from creating data in WhereWellBe: ', res);
    })
    .catch((err) => {
      console.log('There was an Error adding to the table WhereWellBe: ', err);
    });
}

for (var j = 0; j < 20; j++) {
  WhensAvailable.create({ booked: faker.date.future(), openings: Math.floor(Math.random() * (10 - 1) + 1) })
    .then((res) => {
      console.log('This is res from creating data in WhensAvailable: ', res);
    })
    .catch((err) => {
      console.log('There was an Error adding to the table WhensAvailable: ', err);
    });
}