import {Factory, faker} from 'ember-cli-mirage';

const {name, random, address} = faker;

export default Factory.extend({

  index(i) {
    return i + 1;
  },

  'first-name'(i) {
    return `${name.firstName()}_${i + 1}`;
  },

  'last-name'(i) {
    return `${name.lastName()}_${i + 1}`;
  },

  age() {
    return 11 + random.number(42);
  },

  city() {
    return address.city();
  },

  country() {
    return random.arrayElement(faker.definitions.address.country.filter(c => c[0] === 'B'));
  }

});
