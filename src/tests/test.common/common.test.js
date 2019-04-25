describe('Testing common functions', function () {

  //function isEmptyField
  describe('Function checking input field', function () {
    let validOpt = {
      enter: ['3', '4', '$', '0', 'e'],
      checking: '',
      exit: false
    };

    let invalidOpt_1 = {
      enter: ['3', '4', '', '$', '0'],
      checking: '',
      exit: true
    };

    let invalidOpt_2 = {
      enter: ['3', '4', '$', '0', 'e'],
      checking: '0',
      exit: true
    };

    it(`Enter "${validOpt.enter}".Checking "${validOpt.checking}". Should return "${validOpt.exit}"`, function () {
      let result = isEmptyField(validOpt.enter,validOpt.checking);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt_1.enter}".Checking "${invalidOpt_1.checking}". Should return "${invalidOpt_1.exit}"`, function () {
      let result = isEmptyField(invalidOpt_1.enter,invalidOpt_1.checking);
      assert.equal(result, invalidOpt_1.exit);
    });

    it(`Enter "${invalidOpt_2.enter}".Checking "${invalidOpt_2.checking}". Should return "${invalidOpt_2.exit}"`, function () {
      let result = isEmptyField(invalidOpt_2.enter,invalidOpt_2.checking);
      assert.equal(result, invalidOpt_2.exit);
    });
  });

  // Checking length
  describe('Checking parameter on length', function () {
    let validOpt = {
      enter: '50',
      checking: 100,
      exit: false
    };

    let invalidOpt = {
      enter: '50',
      checking: 40,
      exit: `слишком большая длина (>40)`
    };

    it(`Enter "${validOpt.enter}".Checking "${validOpt.checking}". Should return "${validOpt.exit}"`, function () {
      let result = isTooMuchLength(validOpt.enter,validOpt.checking);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt.enter}".Checking "${invalidOpt.checking}". Should return "${invalidOpt.exit}"`, function () {
      let result = isTooMuchLength(invalidOpt.enter,invalidOpt.checking);
      assert.equal(typeof result, 'string');
    });
  });


});