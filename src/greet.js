function greet(name) {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
}
console.log(greet("BABA"));
module.exports = { greet };
