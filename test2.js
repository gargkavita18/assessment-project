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
  setTimeout(carousel, 2500);
}
var url='http://api.openweathermap.org/data/2.5/weather?q=Shimla,Himachal Pradesh&APPID=12ed32e243cdbfda468de949acdcf094';
var xhr=new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=test
function test(){
  if(this.status==200 && this.readyState==4){
    var res_data=JSON.parse(this.responseText)
    console.log(res_data)
    var p1=document.createElement('h4')
    var p2=document.createElement('h4')
    var p3=document.createElement('h4')
    var p4=document.createElement('h4')
    p1.innerHTML='Temperature:   '
    p2.innerHTML='Pressure:      ';
    p3.innerHTML='Humidity:      ';
    p4.innerHTML='WindSpeed:     ';
  var div_url=res_data.main.temp;
  var div_url1=res_data.main.pressure;
  var div_url2=res_data.main.humidity;
  var div_url3=res_data.wind.speed;
  p1.append(div_url)
  p2.append(div_url1)
  p3.append(div_url2)
  p4.append(div_url3)
  var get_tag=document.getElementById('div1');
  get_tag.append(p1)
  get_tag.append(p2)
  get_tag.append(p3)
  get_tag.append(p4)
  div_url=res_data.main.temp;
}
}
xhr.send();


function initMap() {
var shimla = {lat:31.1048, lng:77.1734};
var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 10, center: shimla});
var marker = new google.maps.Marker({position: shimla, map: map});
}
