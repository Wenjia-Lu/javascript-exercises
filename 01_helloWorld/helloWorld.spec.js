const helloWorld = require('./helloWorld');

describe(

  // name of the test block; what we're testing in this block
  'Hello World', // msg: {test block name} > {test name}


  function() { // all tests for 'hello world' goes in here

    // test 1 (and only 1) 
    test(

      // what this test does;
      'says "Hello, World!"',  // test's first argument
  
      // test's function-wrapper here
      function() { // test's 2nd argument that runs expect()

        // command inside a function, has ;
        expect(helloWorld()).toEqual('Hello, World!'); 

      } // argument, no ;

    ); // command inside a function, has ;


  } // a parameter, no ;
  

); // ; for describe('Hello World', function)


/*

test whether amy's age match her birth year & current year

describe(
  'Amy',

  () => {

    test(
      'birthyear - currentyear = age?',

      () => {

        expect(amy.birthYear - amy.currentYear).toBe(amy.age);

      }

    );


  }
);



basically: 

describe('', fnBlock)

             ^ fnBlock include multiple tests

                                        ^ eachTest('', fnWrapper)

                                                          ^fnWrapper contain the tests
*/


