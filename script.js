function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  if (strInvertida == str) {
    return true;
  }
  return false;
}

console.log(isPalindrome("A sacada da casa"));

function arrayMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
