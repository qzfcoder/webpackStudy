var str = "asdadsadsadaawa";

function findMax(str) {
  let max = {};
  for (let i = 0; i < str.length; i++) {
    if (!max[str[i]]) {
      max[str[i]] = 1;
    } else {
      max[str[i]]++;
    }
  }
  console.log(max);
  let maxStr = 0;
  // for (let i = 0; i < max.length; i++) {
  //   console.log(max[i])
  //   if (max[i] > maxStr) {
  //     maxStr = max[i];
  //   }
  // }
  for (let i in max) {
    if (max[i] > maxStr) {
      maxStr = max[i];
    }
  }
  return maxStr;
}

console.log(findMax(str));
