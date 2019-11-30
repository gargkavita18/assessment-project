var myIndex=0;
carousel();
function carousel(){
  var i;
  var x=document.getElementsByClassName('myslides');
  for(i=0;i<x.length;i++){
    x[i].style.display="none";
  }
  myIndex++;
  if(myIndex>x.length){myIndex=1}
  x[myIndex-1].style.display="block";
  setTimeout(carousel, 2000);
}
function convert(){
  // console.log('Inside Convert!!!')
  // alert("a");
  var from =document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var xmlhttp= new XMLHttpRequest();
  var url="https://free.currencyconverterapi.com/api/v6/convert?q="+from+"_"+to+"&compact=ultra&apiKey=44bbef74df526f28aa0a";
  // console.log(url)
  xmlhttp.open("GET", url, true);//async
  xmlhttp.send();
  xmlhttp.onreadystatechange=function(){
    if(this.readyState === 4 && this.status === 200 )
    {
      var result=this.responseText;
      console.log(result);
      var jsResult=JSON.parse(result);
      var q = from+"_"+to;
      console.log(q);
      console.log(jsResult[q]);
      // var one= jsResult.rates[to]/jsResult.rates[from];
      // var amount=document.getElementById("from");
      var amount = jsResult[q] * document.getElementById('from_VAL').value;
      console.log(amount);
      document.getElementById("to_VAL").value= amount;
    }
  }//http://api.fixer.io/latest?symbols=
} //https://free.currencyconverterapi.com/api/v6/convert
function initMap() {
  var shimla = {lat:32.2190, lng:76.3234};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: shimla});
  var marker = new google.maps.Marker({position: shimla, map: map});
}
