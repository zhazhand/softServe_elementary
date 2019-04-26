describe('Testing task№3', function () {

  // main function
  describe('Main function', function () {
    let validOpt = {
      enter: ["abc", "3", "4", "5"],
      exit: '[{"vertices":"abc","a":"3","b":"4","c":"5"}]\n["ABC"]'
    };

    let invalidOpt = {
      enter: ["213", "9", "8.1", "7.8"],
      exit: '{"status":"неудача","reason":"неверные входные параметры"}'
    };

    it('Enter correct value. Expect type of result "String"', function () {
      if (localStorage.getItem('saveArray')) {
        localStorage.removeItem('saveArray');
      }
      let result = solveTask3(validOpt.enter);
      assert.equal(result, validOpt.exit);
    });

    it('Enter incorrect value. Expect type of result "String"', function () {
      let result = solveTask3(invalidOpt.enter);
      assert.equal(result, invalidOpt.exit);
    });
  });

  // validation function
  describe('Validation function', function () {
    let validOpt = {
      enter: ["abc", "3", "4", "5"],
      data: [{
        'vertices': "Xyz",
        'a': "33.3",
        'b': "33.33",
        'c': "33.333"
      }],
      exit: false
    };

    let invalidOpt = {
      invalid_1: {
        enter: ["213", "9", "8.1", "7.8"],
        data: [{
          'vertices': "Xyz",
          'a': "33.3",
          'b': "33.33",
          'c': "33.333"
        }],
        exit: 'неверные входные параметры'
      },
      invalid_2: {
        enter: ["FED", "9", "abc", "7.8"],
        data: [],
        exit: 'неверные входные параметры'
      },
      empty: {
        enter: ["213", "9", "", "7.8"],
        data: [],
        exit: 'вводное поле не может быть пустым'
      },
      sameVertices: {
        enter: ["abA", "9", "8", "7.8"],
        data: [],
        exit: 'совпадают имена вершин'
      },
      sameTriangeles: {
        enter: ["zxY", "9", "8", "7.8"],
        data: [{
          'vertices': "Xyz",
          'a': "33.3",
          'b': "33.33",
          'c': "33.333"
        }],
        exit: 'совпадают имена треугольников'
      },
      zero: {
        enter: ["abJ", "1", "0", "1"],
        data: [],
        exit: 'вводное поле не может быть нулём'
      },
      oneMoreThenSum: {
        enter: ["abG", "1.4", "3", "1.5"],
        data: [],
        exit: 'сумма двух сторон не может быть меньше третьей стороны'
      }
    };

    it(`Enter "${validOpt.enter}". Should return false`, function () {
      let result = isValid3(validOpt.enter, validOpt.data);
      assert.equal(result, validOpt.exit);
    });

    for (let opt in invalidOpt) {
      it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function () {
        let result = isValid3(invalidOpt[opt].enter, invalidOpt[opt].data);
        assert.equal(result.reason, invalidOpt[opt].exit);
      });
    }
  });

  // function returns the result of a simple method
  describe('Define area of triangles', function () {
    let validOpt = {
      enter: [3, 4, 5],
      exit: 6
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = getAreaOfTriangle(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
      assert.equal(result, validOpt.exit);
    });


  });

  // function search the same name
  describe('Search same name', function () {
    let validOpt = {
      enter: ["abc", "3", "4", "5"],
      flag: false,
      exit: false
    };

    let invalidOpt = {
      enter: ["abA", "3", "4", "5"],
      flag: false,
      exit: true
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = isSameName(validOpt.enter, validOpt.flag);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt.enter}". Should return "${invalidOpt.exit}"`, function () {
      let result = isSameName(invalidOpt.enter, invalidOpt.flag);
      assert.equal(result, invalidOpt.exit);
    });
  });

  //fnction compare sides
  describe('Checking sides', function () {
    let validOpt = {
      enter: ['3.1', '4.11', '5'],
      exit: false
    };
    let invalidOpt = {
      enter: ['3.1', '4.11', '8'],
      exit: true
    };

    it(`Enter "${validOpt.enter}". Should return "${validOpt.exit}"`, function () {
      let result = isSides(validOpt.enter, validOpt.flag);
      assert.equal(result, validOpt.exit);
    });

    it(`Enter "${invalidOpt.enter}". Should return "${invalidOpt.exit}"`, function () {
      let result = isSides(invalidOpt.enter, invalidOpt.flag);
      assert.equal(result, invalidOpt.exit);
    });

  })



});