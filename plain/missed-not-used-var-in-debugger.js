function getSomeData() {
  return {
    text: 'someData',
    exists: true
  }
}

function run() {
  const local1 = 1;
  const local2 = 2;

  const local3 = local1 + local2;

  const outside = getSomeData();

  console.log(local1);
}

run();
