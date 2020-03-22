module.exports = function check(str, bracketsConfig) {
    let string = str;
    for (let k=0; k<100; k++) {
      let regexp = /\(\)/;
      let result = string.match(regexp);
      
      if (result == null){
        regexp = /\[\]/;
       result = string.match(regexp);
      }

      if (result == null){
        regexp = /\{\}]/;
       result = string.match(regexp);
      }

      if (result == null){
        regexp = /\"\"/;
       result = string.match(regexp);
      }
      if (result == null){
        regexp = /\|\|/;
       result = string.match(regexp);
      }

      if (result == null){break;}

      
      let ind = result.index;
      let ind2 = ind+1;
      let mass = string.split('')
      newMass = [];
      for (let i=0;  i< mass.length; i++) {
          console.log(ind);
          if(i==ind || i==ind2) {} else {
          newMass.push(mass[i]);}
      }
      string = newMass.join('');


      console.log(string); 
  
    }
    if (string =='') return true; else {return false;}
}





/*


function check(str, bracketsConfig) {
    let string = str;
    for (let k=0; k<100; k++) {
      let regexp = /\(\)/;
      let result = string.match(regexp);
      
      if (result == null){
        regexp = /\[\]/;
       result = string.match(regexp);
      }

      if (result == null){
        regexp = /\{\}]/;
       result = string.match(regexp);
      }

      if (result == null){
        regexp = /\"\"/;
       result = string.match(regexp);
      }
      if (result == null){
        regexp = /\|\|/;
       result = string.match(regexp);
      }

      if (result == null){break;}

      
      let ind = result.index;
      let ind2 = ind+1;
      let mass = string.split('')
      newMass = [];
      for (let i=0;  i< mass.length; i++) {
          console.log(ind);
          if(i==ind || i==ind2) {} else {
          newMass.push(mass[i]);}
      }
      string = newMass.join('');


      console.log(string); 
  
    }
    if (string =='') return true; else {return false;}
}





    console.log(check('(2([()])9)', true));
*/
