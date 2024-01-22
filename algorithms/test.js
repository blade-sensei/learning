function devide(a, b, fn) {
  const resulat = a / b;
  fn();
}

devide(20, 2, function() {

    console.log('division terminé');
  
})