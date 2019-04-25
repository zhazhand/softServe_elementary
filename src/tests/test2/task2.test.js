describe('Testing task№2', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      valid_1: {
        enter: ["1", "2.2", "3.12", "4"],
        exit: 1
      },
      valid_2: {
        enter: ["11", "2.2", "2.12", "4"],
        exit: 2
      },
      valid_3: {
        enter: ["1", "2.2", "3.12", ".5"],
        exit: 0
      }
    };

    let invalidOpt = {
      enter: ["qwerty", "9.99", "1.4", "2"],
      exit: 'неверные входные параметры'
    };

    for (let opt in validOpt) {
      it(`Enter "${validOpt[opt].enter}". Should return "${validOpt[opt].exit}"`, function () {
        let result = solveTask2(validOpt[opt].enter);
        assert.equal(result, validOpt[opt].exit);
      });
    }

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask2(invalidOpt.enter);
      assert.equal(typeof result, 'string');
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ["1", "2.2", "3.12", ".5"],
      exit: false
    };

    let invalidOpt = {
      invalid: {
        enter: ["qwerty", "99", "22.22", "132"],
        exit: 'неверные входные параметры'
      },
      empty: {
        enter: ["99", "", "22.22", "132"],
        exit: 'вводное поле не может быть пустым'
      },
      zero: {
        enter: ["1.234", "22", "0", "99"],
        exit: 'вводное поле не может быть нулём'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid2(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid2(invalidOpt[opt].enter);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });

  // function get input parameters
  describe('Transform input parameters in array of objects', function () {
    let validOpt = {
      enter: ["99", "12.4","22.22","132"],
      exit: [{width:"99", height:"12.4"},{width:"22.22",height:"132"}]
    };

    it(`Enter correct value. Should return true`, function () {
      let result = getParams(validOpt.enter);
      assert.deepEqual(result, validOpt.exit);
    });

  });

  // function compare envelops
  describe('Compare envelops', function () {
    let validOpt = {
      valid_1: {
        enter: [{width:"1", height:"2.2"},{width:"3.12",height:"4"}],
        exit: 1
      },
      valid_2: {
        enter: [{width:"11", height:"2.2"},{width:"2.12",height:"4"}],
        exit: 2
      },
      valid_3: {
        enter: [{width:"2.12", height:"2.2"},{width:"2",height:"4"}],
        exit: 0
      }
    };

    for (let opt in validOpt) {
      it(`Enter "${JSON.stringify(validOpt[opt].enter)}". Should return "${validOpt[opt].exit}"`, function () {
        let result = compareEnvelopes(validOpt[opt].enter);
        assert.equal(result, validOpt[opt].exit);
      });
    };
  });



});