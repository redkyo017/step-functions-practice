exports.hello = async (name) => {
  return `hello ${name}`;
};

exports.add = async ({ x, y }) => {
  return x + y;
};

class NumberIsTooBig extends Error {
  constructor(n) {
    super(`${n} is too big!`);
    this.name = "NumberIsTooBig";
    Error.captureStackTrace(this, NumberIsTooBig);
  }
}

exports.double = async (n) => {
  if (n > 50) {
    throw new NumberIsTooBig(n);
  }
  return n * 2;
};
exports.doubleBigNumber = async (n) => {
  return n * 2;
};

exports.apiGatewayHandler = async (event, context) => {
  console.log(JSON.stringify(event))

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
      event
    })
  }
}