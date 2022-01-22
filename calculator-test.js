
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 20000,
    years: 7,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual("273.38");
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual("131.00");
});

/// etc
