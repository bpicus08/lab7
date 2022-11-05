function init(){
//add your javascrip between these two lines of code
  function nameAlert(){
    var text = document.getElementById('entryinput').value;
    var h2result = document.getElementById('textoutput');
    h2result.innerHTML = text;
    alert("Brett Picus: "+text);
  }
  var divButton = document.getElementById('entrybutton');
  divButton.addEventListener('click',nameAlert);
}
window.addEventListener('load', init);