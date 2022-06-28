function manipulation(lenght, exclude = "") {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(math.random() * length)];
  }
  if (exclude.length > 0) {
    result = replaceAll(result, exclude, "");
  }
  return result;

  function replaceall(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
console.log(manipulation(5, "a"));
