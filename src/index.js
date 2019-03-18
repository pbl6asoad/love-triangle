/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var number = 0;

  for(var i = 0; i<preferences.length; i++){
    if(preferences[i] == undefined){
      continue;
    }
    else{
        var m = preferences[i];
        var n = preferences[m-1];
        if(preferences[n-1] == i+1){
          if(m!=n && n!=i && i!= m){
            delete preferences[i];
          delete preferences[m-1];
          delete preferences[n-1];
          number++;
          }
          else{
            continue;
          }
          
        }
        else{
          continue;
        }
  
      }
    
  }
  return number;
};
