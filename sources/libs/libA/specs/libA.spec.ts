import mocha from 'mocha';
import chai from 'chai';
import {
  Person,
  greet,
  asyncGreet,
} from '../libA';

const {
  describe,
  it,
} = mocha;
const {
  expect,
} = chai;

describe('libA', () => {
  it('should greet', async () => {
    const me: Person = {
      firstName: 'Dmitry',
      lastName: 'Medvedev',
    }
    const greeting = greet(me);

    expect(greeting).to.exist;
  });

  it('should asyncGreet', async() => {
    const me: Person = {
      firstName: 'Dmitry',
      lastName: 'Medvedev',
    };

    const greeting = await asyncGreet(me);

    expect(greeting).to.exist;
  });
});
