describe('Testing task№6', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ["4", "9"],
      exit: "3, 4, 5, 6"
    };

    let invalidOpt = {
      enter: ["qwerty", "999999"],
      exit: 'неверные входные параметры'
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = solveTask6(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it('Enter correct value. Expect type of result "String"', function () {
      let result = solveTask6(validOpt.enter);
      assert.equal(typeof result, 'string');
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask6(invalidOpt.enter);
      assert.equal(typeof result, 'string');
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ["20", "20"],
      exit: false
    };

    let invalidOpt = {
      invalid_1: {
        enter: ["qwerty", "999999"],
        exit: 'неверные входные параметры'
      },
      invalid_2: {
        enter: ["999999", "what"],
        exit: 'неверные входные параметры'
      },
      empty: {
        enter: ["999999", ""],
        exit: 'вводное поле не может быть пустым'
      },
      notEnoughSymbol: {
        enter: ["123", "999"],
        exit: 'слишком большая длина (>40)'
      },
      zero: {
        enter: ["0", "999"],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid6(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid6(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });


  // function create sequence
  describe('Creating of sequence', function () {
    let validOpt_1 = {
      enter: ["11", "11"]
    };

    let validOpt_2 = {
      enter: ["4", "9"],
      exit: "3, 4, 5, 6"
    };

    it(`Enter "${validOpt_1.enter}".  Expect type of result "String"`, function () {
      let result = getNumSequence(validOpt_1.enter);
      assert.equal(typeof result, 'string');
    });
    
    it(`Enter "${validOpt_2.enter}".  Expect result "${validOpt_2.exit}"`, function () {
      let result = getNumSequence(validOpt_2.enter);
      assert.equal(result, validOpt_2.exit);
    });
  });


});