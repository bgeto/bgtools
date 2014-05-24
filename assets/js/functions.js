/* Ponctuation */
function ponctuation(text){
  var finaltext = '';
  if(text != ''){ 
    var filteredstring = text;
    //alert(filteredstring);
    var partstoreplace = new Array(" !"," ;"," :","« "," »","&laquo; "," &raquo;");
    var newsparts = new Array("&nbsp;!","&nbsp;;","&nbsp;:","«&nbsp;","&nbsp;»","&laquo;&nbsp;","&nbsp;&raquo;");
    //var newsparts = new Array("8!","8;","8:");
    for(var i=0; i<partstoreplace.length-1; i++){
      //alert(filteredstring.indexOf(partstoreplace[i]));
      if(filteredstring.indexOf(partstoreplace[i]) != -1){
        filteredstring = filteredstring.replace(new RegExp(partstoreplace[i], 'g'), newsparts[i]);
      }
    }
    filteredstring = filteredstring.replace(' ?', '&nbsp;?');
    finaltext = filteredstring;
  }
  return finaltext;
}