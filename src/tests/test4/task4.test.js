describe('Testing task№4', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ['1234437'],
      exit: '3443'
    };

    let invalidOpt = {
      enter: ["qwerty"],
      exit: 'неверные входные параметры'
    };

    let validOpt_1 = {
      enter: ["1234567"],
      exit: '0'
    };


    it(`Enter "${validOpt_1.enter}". Should return "${validOpt_1.exit}"`, function () {
      let result = solveTask4(validOpt_1.enter);
      assert.equal(result, validOpt_1.exit);
    });

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = solveTask4(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it('Enter correct value. Expect type of result "Number"', function () {
      let result = solveTask4(validOpt.enter);
      assert.equal(typeof result, 'number');
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask4(invalidOpt.enter);
      assert.equal(typeof result, 'string');
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ['123456654123'],
      exit: false
    };

    let invalidOpt = {
      invalid_1: {
        enter: ["qwerty"],
        exit: 'неверные входные параметры'
      },
      empty: {
        enter: [""],
        exit: 'вводное поле не может быть пустым'
      },
      zero: {
        enter: ["0"],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid4(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid4(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });


  //checking on palindrome
  describe('Check on palindrome', function () {
    let validOpt = {
      enter: '12344321',
      exit: '12344321'
    };

    let invalidOpt = {
      enter: '1234567',
      exit: false
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = isPalindrome(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt.enter}". Should return "${invalidOpt.exit}"`, function () {
      let result = isPalindrome(invalidOpt.enter);
      assert.equal(result, invalidOpt.exit);
    });
  })

  //find max element
  describe('Find max element in array', function () {
    let element = {
      enter: [1, 2, 3, 4, 5, 39, 3, 2, 1],
      exit: 39
    }

    it(`Enter "${element.enter}". Should return "${element.exit}"`, function () {
      let result = findMax(element.enter);
      assert.equal(result, element.exit);
    });
  })

  //find palindrome in number
  describe('Find palidrome in number', function () {
    let validOpt = {
      enter: 123443781,
      exit: 3443
    };

    let invalidOpt = {
      enter: 1234567,
      exit: 0
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = checkNumber(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt.enter}". Should return "${invalidOpt.exit}"`, function () {
      let result = checkNumber(invalidOpt.enter);
      assert.equal(result, invalidOpt.exit);
    });

  });
});