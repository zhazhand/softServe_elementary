describe('Testing task№7', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ["4", "9"],
      exit: "[5,8]"
    };

    let invalidOpt = {
      enter: ["qwerty", "999999"],
      exit: 'неверные входные параметры'
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = solveTask7(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it('Enter correct value. Expect type of result "String"', function () {
      let result = solveTask7(validOpt.enter);
      assert.equal(typeof result, 'string');
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask7(invalidOpt.enter);
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
      notEnoughSymbol: {
        enter: ["21", ""],
        exit: 'слишком большая длина'
      },
      zero_1: {
        enter: ["0", "999"],
        exit: 'вводное поле не может быть нулём'
      },
      zero_2: {
        enter: ["2", "0"],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid7(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid7(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });


  // definition input parameters (min and max or length)
  describe('Choosing the way', function () {
    let validOpt_1 = {
      enter: ["11", ""],
      exit: true
    };

    let inValidOpt_1 = {
      enter: ["4", "9"],
      exit: false
    };

    let inValidOpt_2 = {
      enter: ["", "9"],
      exit: false
    };

    it(`Enter "${validOpt_1.enter}".  Expect tresult "${validOpt_1.exit}"`, function () {
      let result = hasContextLength(validOpt_1.enter);
      assert.equal(result, validOpt_1.exit);
    });

    it(`Enter "${inValidOpt_1.enter}".  Expect result "${inValidOpt_1.exit}"`, function () {
      let result = hasContextLength(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_1.exit);
    });

    it(`Enter "${inValidOpt_2.enter}".  Expect result "${inValidOpt_2.exit}"`, function () {
      let result = hasContextLength(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_2.exit);
    });
  });

  //check way with length
  describe('Checking validation of first way', function () {
    let validOpt_1 = {
      enter: '20',
      exit: 200
    };

    let inValidOpt_1 = {
      enter: '0',
      exit: 1
    };

    let inValidOpt_2 = {
      enter: '000',
      exit: 1
    };

    let inValidOpt_3 = {
      enter: 'what',
      exit: 2
    };

    let inValidOpt_4 = {
      enter: '21',
      exit: 3
    };

    let inValidOpt_5 = {
      enter: '1001',
      exit: 3
    };

    it(`Enter "${validOpt_1.enter}".  Expect result "${validOpt_1.exit}"`, function () {
      let result = isValidWayLength(validOpt_1.enter);
      assert.equal(result, validOpt_1.exit);
    });

    it(`Enter "${inValidOpt_1.enter}".  Expect result "${inValidOpt_1.exit}"`, function () {
      let result = isValidWayLength(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_1.exit);
    });

    it(`Enter "${inValidOpt_2.enter}".  Expect result "${inValidOpt_2.exit}"`, function () {
      let result = isValidWayLength(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_2.exit);
    });

    it(`Enter "${inValidOpt_3.enter}".  Expect result "${inValidOpt_3.exit}"`, function () {
      let result = isValidWayLength(inValidOpt_3.enter);
      assert.equal(result, inValidOpt_3.exit);
    });

    it(`Enter "${inValidOpt_4.enter}".  Expect result "${inValidOpt_4.exit}"`, function () {
      let result = isValidWayLength(inValidOpt_4.enter);
      assert.equal(result, inValidOpt_4.exit);
    });

    it(`Enter "${inValidOpt_5.enter}".  Expect result "${inValidOpt_5.exit}"`, function () {
      let result = isValidWayLength(inValidOpt_5.enter);
      assert.equal(result, inValidOpt_5.exit);
    });
  });

  //check way with range (min and max)
  describe('Checking validation of second way', function () {
  
    let validOpt_1 = {
      enter: ['20', '20'],
      exit: 200
    };

    let inValidOpt_1 = {
      enter: ['0', '234'],
      exit: 1
    };

    let inValidOpt_2 = {
      enter: ['234', '000'],
      exit: 1
    };

    let inValidOpt_3 = {
      enter: ['12', 'what'],
      exit: 2
    };

    let inValidOpt_4 = {
      enter: ['25', '21'],
      exit: 4
    };

    let inValidOpt_5 = {
      enter: ['20', ''],
      exit: 0
    };

    it(`Enter "${validOpt_1.enter}".  Expect result "${validOpt_1.exit}"`, function () {
      let result = isValidWayRange(validOpt_1.enter);
      assert.equal(result, validOpt_1.exit);
    });

    it(`Enter "${inValidOpt_1.enter}".  Expect result "${inValidOpt_1.exit}"`, function () {
      let result = isValidWayRange(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_1.exit);
    });

    it(`Enter "${inValidOpt_2.enter}".  Expect result "${inValidOpt_2.exit}"`, function () {
      let result = isValidWayRange(inValidOpt_2.enter);
      assert.equal(result, inValidOpt_2.exit);
    });

    it(`Enter "${inValidOpt_3.enter}".  Expect result "${inValidOpt_3.exit}"`, function () {
      let result = isValidWayRange(inValidOpt_3.enter);
      assert.equal(result, inValidOpt_3.exit);
    });

    it(`Enter "${inValidOpt_4.enter}".  Expect result "${inValidOpt_4.exit}"`, function () {
      let result = isValidWayRange(inValidOpt_4.enter);
      assert.equal(result, inValidOpt_4.exit);
    });

    it(`Enter "${inValidOpt_5.enter}".  Expect result "${inValidOpt_5.exit}"`, function () {
      let result = isValidWayRange(inValidOpt_5.enter);
      assert.equal(result, inValidOpt_5.exit);
    });
  });

  //length
  describe('Create sequence by length', function(){
    let validOpt_1 = {
      enter: '1',
      exit: [1,1,2,3,5,8]
    };
    let validOpt_2 = {
      enter: '2',
      exit: [13,21,34,55,89]
    };

    it(`Enter "${validOpt_1.enter}".  Expect result "${validOpt_1.exit}"`, function () {
      let result = fiboLength(validOpt_1.enter);
      assert.deepEqual(result, validOpt_1.exit);
    });

    it(`Enter "${validOpt_2.enter}".  Expect result "${validOpt_2.exit}"`, function () {
      let result = fiboLength(validOpt_2.enter);
      assert.deepEqual(result, validOpt_2.exit);
    });
  });
  
  //range
  describe('Create sequence by range', function(){
    let validOpt_1 = {
      enter: ['20', '60'],
      exit: [21,34,55]
    };
    let validOpt_2 = {
      enter: ['100', '1000'],
      exit: [144,233,377,610,987]
    };
    
    it(`Enter "${validOpt_1.enter}".  Expect result "${validOpt_1.exit}"`, function () {
      let result = fiboRange(validOpt_1.enter[0],validOpt_1.enter[1]);
      assert.deepEqual(result, validOpt_1.exit);
    });

    it(`Enter "${validOpt_2.enter}".  Expect result "${validOpt_2.exit}"`, function () {
      let result = fiboRange(validOpt_2.enter[0],validOpt_2.enter[1]);
      assert.deepEqual(result, validOpt_2.exit);
    });
  });
});