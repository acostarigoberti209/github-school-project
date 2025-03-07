const getRandomTSCode = () => {
  const codes = ["let", "const", "function", "class"];
  let randomCode = codes[Math.floor(Math.random() * codes.length)];
  return `${randomCode} ${getRandomVariableName()} ${getRandomMethodOrFunctionName()} (${getRandomParameters()})`;
};

// Generate a random variable name
const getRandomVariableName = () => {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = "";
  for (let i = 0; i < 10; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${name}`;
};

// Generate a random method or function name
const getRandomMethodOrFunctionName = () => {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = "";
  for (let i = 0; i < 10; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${name}`;
};

// Generate a random list of parameters
const getRandomParameters = () => {
  let params = [];
  for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
    params.push(`${getRandomVariableName()}: ${getRandomType()}`);
  }
  return params.join(", ");
};

// Generate a random type
const getRandomType = () => {
  let types = ["string", "number", "boolean"];
  return types[Math.floor(Math.random() * types.length)];
};

console.log(getRandomTSCode());
