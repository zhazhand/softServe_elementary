describe('Testing task№1', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ['3', '4', '$'],
      exit: '$ $ \n $ $\n$ $ \n'
    };

    let invalidOpt = {
      enter: ["qwerty"],
      exit: 'неверные входные параметры'
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = solveTask1(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it('Enter correct value. Expect type of result "String"', function () {
      let result = solveTask1(validOpt.enter);
      assert.equal(typeof result, 'string');
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask1(invalidOpt.enter);
      assert.equal(typeof result, 'string');
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ['99', '99', '#'],
      exit: false
    };

    let invalidOpt = {
      invalid_1: {
        enter: ['qwerty', '56', '&'],
        exit: 'неверные входные параметры'
      },
      invalid_2: {
        enter: ['32', 'qwerty', '&'],
        exit: 'неверные входные параметры'
      },
      empty: {
        enter: ['', '34', 'u'],
        exit: 'вводное поле не может быть пустым'
      },
      tooMuch: {
        enter: ['134', '10', '*'],
        exit: 'слишком большая длина (>100)'
      },
      zero: {
        enter: ['34', '0', '*'],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid1(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid1(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });


  //createChessBoard
  describe('Creating chessBoard', function () {
    let validOpt = {
      enter: ['3', '4', '$'],
      exit: '$ $ \n $ $\n$ $ \n'
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = createChessBoard(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
      assert.equal(result, validOpt.exit);
    });
  });

});