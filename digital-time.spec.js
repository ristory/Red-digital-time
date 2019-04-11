import { at } from './digital-time';

describe('Digital time', () => {
  describe('Initial creation and string representation', () => {
    test('on the hour', () => {
      expect(at(6).toString()).toEqual('06:00');
    });

    test('past the hour', () => {
      expect(at(12, 4).toString()).toEqual('12:04');
    });

    test('midnight is zero hours', () => {
      expect(at(24, 0).toString()).toEqual('00:00');
    });

    test('hour rolls over', () => {
      expect(at(26, 0).toString()).toEqual('02:00');
    });

    test('hour rolls over continuously', () => {
      expect(at(101, 0).toString()).toEqual('05:00');
    });

    test('sixty minutes is next hour', () => {
      expect(at(1, 65).toString()).toEqual('02:05');
    });

    test('minutes roll over', () => {
      expect(at(0, 172).toString()).toEqual('02:52');
    });

    test('minutes roll over continuously', () => {
      expect(at(0, 1918).toString()).toEqual('07:58');
    });

    test('hour and minutes roll over', () => {
      expect(at(27, 190).toString()).toEqual('06:10');
    });

    test('hour and minutes roll over continuously', () => {
      expect(at(404, 5005).toString()).toEqual('07:25');
    });

    test('hour and minutes roll over to exactly midnight', () => {
      expect(at(72, 10080).toString()).toEqual('00:00');
    });

    test('negative hour', () => {
      expect(at(-2, 25).toString()).toEqual('22:25');
    });

    test('negative hour rolls over', () => {
      expect(at(-26, 0).toString()).toEqual('22:00');
    });

    test('negative hour rolls over continuously', () => {
      expect(at(-99, 0).toString()).toEqual('21:00');
    });

    test('negative minutes', () => {
      expect(at(1, -50).toString()).toEqual('00:10');
    });

    test('negative minutes rolls over', () => {
      expect(at(1, -170).toString()).toEqual('22:10');
    });

    test('negative minutes rolls over continuously', () => {
      expect(at(1, -4830).toString()).toEqual('16:30');
    });

    test('negative hour and minutes both roll over', () => {
      expect(at(-25, -160).toString()).toEqual('20:20');
    });

    test('negative hour and minutes both roll over continuously', () => {
      expect(at(-121, -5810).toString()).toEqual('22:10');
    });

    describe('Add & subtract minutes', () => {
      test('add minutes', () => {
        expect(at(10, 0).plus(3).toString()).toEqual('10:03');
      });

      xtest('add no minutes', () => {
        expect(at(6, 41).plus(0).toString()).toEqual('06:41');
      });

      xtest('add to next hour', () => {
        expect(at(0, 45).plus(40).toString()).toEqual('01:25');
      });

      xtest('add more than one hour', () => {
        expect(at(10, 0).plus(61).toString()).toEqual('11:01');
      });

      xtest('add more than two hours with carry', () => {
        expect(at(0, 45).plus(160).toString()).toEqual('03:25');
      });

      xtest('add across midnight', () => {
        expect(at(23, 59).plus(2).toString()).toEqual('00:01');
      });

      xtest('add more than one day (1500 min = 25 hrs)', () => {
        expect(at(5, 32).plus(1500).toString()).toEqual('06:32');
      });

      xtest('add more than two days', () => {
        expect(at(1, 1).plus(3500).toString()).toEqual('11:21');
      });

      xtest('subtract minutes', () => {
        expect(at(10, 3).minus(3).toString()).toEqual('10:00');
      });

      xtest('subtract to previous hour', () => {
        expect(at(10, 3).minus(30).toString()).toEqual('09:33');
      });

      xtest('subtract more than an hour', () => {
        expect(at(10, 3).minus(70).toString()).toEqual('08:53');
      });

      xtest('subtract across midnight', () => {
        expect(at(0, 3).minus(4).toString()).toEqual('23:59');
      });

      xtest('subtract more than two hours', () => {
        expect(at(0, 0).minus(160).toString()).toEqual('21:20');
      });

      xtest('subtract more than two hours with borrow', () => {
        expect(at(6, 15).minus(160).toString()).toEqual('03:35');
      });

      xtest('subtract more than one day (1500 min = 25 hrs)', () => {
        expect(at(5, 32).minus(1500).toString()).toEqual('04:32');
      });

      xtest('subtract more than two days', () => {
        expect(at(2, 20).minus(3000).toString()).toEqual('00:20');
      });
    });

    describe('Construct two invocations, set times, test if they are equal', () => {
      xtest('digital times with same time', () => {
        expect(at(15, 37).equals(at(15, 37))).toBeTruthy();
      });

      xtest('digital times a minute apart', () => {
        expect(at(15, 36).equals(at(15, 37))).toBeFalsy();
      });

      xtest('digital times an hour apart', () => {
        expect(at(14, 37).equals(at(15, 37))).toBeFalsy();
      });

      xtest('digital times with hour overflow', () => {
        expect(at(10, 37).equals(at(34, 37))).toBeTruthy();
      });

      xtest('digital times with hour overflow by several days', () => {
        expect(at(3, 11).equals(at(99, 11))).toBeTruthy();
      });

      xtest('digital times with negative hour', () => {
        expect(at(22, 40).equals(at(-2, 40))).toBeTruthy();
      });

      xtest('digital times with negative hour that wraps', () => {
        expect(at(17, 3).equals(at(-31, 3))).toBeTruthy();
      });

      xtest('digital times with negative hour that wraps multiple times', () => {
        expect(at(13, 49).equals(at(-83, 49))).toBeTruthy();
      });

      xtest('digital times with minute overflow', () => {
        expect(at(0, 1).equals(at(0, 1441))).toBeTruthy();
      });

      xtest('digital times with minute overflow by several days', () => {
        expect(at(2, 2).equals(at(2, 4322))).toBeTruthy();
      });

      xtest('digital times with negative minute', () => {
        expect(at(2, 40).equals(at(3, -20))).toBeTruthy();
      });

      xtest('digital times with negative minute that wraps', () => {
        expect(at(4, 10).equals(at(5, -1490))).toBeTruthy();
      });

      xtest('digital times with negative minute that wraps multiple times', () => {
        expect(at(6, 15).equals(at(6, -4305))).toBeTruthy();
      });

      xtest('digital times with negative hours and minutes', () => {
        expect(at(7, 32).equals(at(-12, -268))).toBeTruthy();
      });

      xtest('digital times with negative hours and minutes that wrap', () => {
        expect(at(18, 7).equals(at(-54, -11513))).toBeTruthy();
      });
    });
  });
});
