import mocha from 'mocha';
import chai from 'chai';
import {
  PersonType,
} from '../libEnums';
import {
  Person,
  greet,
  asyncGreet,
  greetPersonType,
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

  it('should greetPersonType', () => {
    const me: Person = {
      firstName: 'Dmitry',
      lastName: 'Medvedev',
    }
    const corporateGreeting = greetPersonType(me, PersonType.CORPORATE);
    const slackerGreeting = greetPersonType(me, PersonType.PRIVATE);

    expect(corporateGreeting).to.exist;
    expect(slackerGreeting).to.exist;
  });
});
