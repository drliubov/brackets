module.exports = function check(str, bracketsConfig) {
  
  let bracket = bracketsConfig.map( (b) => b.join("") );

  for (let i = 0; i < bracket.length; i++) {
    if( str.includes(bracket[i]) ) {
      str = str.replace(bracket[i], "");
      i = -1;
    }
    
  }
  return (str) ? false : true;
}
