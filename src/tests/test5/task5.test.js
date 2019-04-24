describe('Testing task№5', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ["123456", "999999"],
      exit: false
    };

    let invalidOpt = {
      enter: ["qwerty", "999999"],
      exit: 'неверные входные параметры'
    };

    it('Enter correct value. Expect type of result "String"', function () {
      let result = solveTask5(validOpt.enter);
      assert.equal(typeof result, 'string');
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask5(invalidOpt.enter);
      assert.equal(typeof result, 'string');
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ["123456", "999999"],
      exit: false
    };

    let invalidOpt = {
      invalid_1: {
        enter: ["qwerty", "999999"],
        exit: 'неверные входные параметры'
      },
      invalid_2: {
        enter: ["999999", "123456"],
        exit: 'поле максимум не может быть меньше поля минимум'
      },
      empty: {
        enter: ["999999", ""],
        exit: 'вводное поле не может быть пустым'
      },
      notEnoughSymbol: {
        enter: ["12345", "999999"],
        exit: 'неверные входные параметры'
      },
      zero: {
        enter: ["0", "999999"],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid5(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid5(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });

  // function returns the result of a simple method
  describe('Use easy method', function () {
    let validOpt = {
      opt_1: {
        enter: ['333366'],
        exit: 0
      },
      opt_2: {
        enter: ['123321'],
        exit: 1
      }
    };

    it(`Enter "${validOpt.opt_1.enter}". Should return false`, function () {
      let result = checkEasyWay(validOpt.opt_1.enter);
      assert.equal(result, validOpt.opt_1.exit);
    });

    it(`Enter "${validOpt.opt_2.enter}". Should return true`, function () {
      let result = checkEasyWay(validOpt.opt_2.enter);
      assert.equal(result, validOpt.opt_2.exit);
    });
  });

  // function returns the result of a hard method
  describe('Use hard method', function () {
    let validOpt = {
      opt_1: {
        enter: ['333366'],
        exit: 1
      },
      opt_2: {
        enter: ['123321'],
        exit: 0
      }
    };

    it(`Enter "${validOpt.opt_1.enter}". Should return true`, function () {
      let result = checkHardWay(validOpt.opt_1.enter);
      assert.equal(result, validOpt.opt_1.exit);
    });

    it(`Enter "${validOpt.opt_2.enter}". Should return false`, function () {
      let result = checkHardWay(validOpt.opt_2.enter);
      assert.equal(result, validOpt.opt_2.exit);
    });
  });

  // function define winner
  describe('Define the winning method', function () {
    let winner1 = {
      enter: ["111111", "111119"],
      exit: "простой метод победил"
    };

    let winner2 = {
      enter: ["000111", "000999"],
      exit: "сложный метод победил"
    };

    let winnersBoth = {
      enter: ["321200", "321212"],
      exit: "оба метода равны"
    };

    it(`Enter "${winner1.enter}". Expect string with description: ${winner1.exit}`, function () {
      let result = countLuckyTickets(winner1.enter);
      assert.equal(result.message, winner1.exit);
    });

    it(`Enter "${winner2.enter}". Expect string with description: ${winner2.exit}`, function () {
      let result = countLuckyTickets(winner2.enter);
      assert.equal(result.message, winner2.exit);
    });

    it(`Enter "${winnersBoth.enter}". Expect string with description: ${winnersBoth.exit}`, function () {
      let result = countLuckyTickets(winnersBoth.enter);
      assert.equal(result.message, winnersBoth.exit);
    });
  });
  // function count sum
  describe('Function count the sum of array', function () {
    let validOpt_1 = {
      enter: [0, 1, 2, 3, 4, 5],
      exit: 15
    };
    let validOpt_2 = {
      enter: '012345',
      exit: 15
    };

    it(`Enter "${validOpt_1.enter}". Expect the number`, function () {
      let result = getSum(validOpt_1.enter);
      assert.equal(result, validOpt_1.exit);
    });
    it(`Enter "${validOpt_2.enter}". Expect the number`, function () {
      let result = getSum(validOpt_2.enter);
      assert.equal(result, validOpt_2.exit);
    });
  });


});