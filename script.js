function isPalindrome(str){
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

function arrayMaxMin(arr){
    /* Seu código aqui */
}
