const { Event } = require("../models");
const faker = require("faker");
const axios = require("axios");

for (let i = 0; i < 1; i++) {
  new Event({
    experienceType: faker.lorem.words(),
    hostName: faker.name.firstName(),
    hostDescription: faker.lorem.paragraph(),
    hostImage: faker.image.avatar(),
    eventName: faker.lorem.words(),
    eventDescription: faker.lorem.paragraph(),
    eventLocation: faker.address.city(),
    eventDuration: faker.random.number() + " hours total",
    eventProvidedItems: faker.lorem.sentences(),
    eventNotes: faker.lorem.paragraph(),
    eventLanguage: "Offered in " + faker.lorem.word(),
    eventViews: faker.random.number()
  }).save((err, newEvent) => {
    if (err) {
      console.error(err);
    } else {
      console.log("created");
    }
  });
}
