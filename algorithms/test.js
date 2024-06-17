function two() {
  console.log('heo 2')
  return 2;
}

function six() {
  console.log('heo 6')
  return 6;
}

const t = two() + six() / two();
console.log(t);