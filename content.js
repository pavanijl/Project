var spatialImg = document.getElementsByClassName('spatial');
let spatialArr = spatialImg;

//for (let item of checkedValueSet.keys()) console.log("key print : " + item)
//for (let item of checkedValueSet.values()) console.log("value print : " + item)

let temporalImg = document.getElementsByClassName('temporal');
let temporalArr = temporalImg;

let spatialTempImg = document.getElementsByClassName('spatialTemporal'); 
let spatialTemporalArr = spatialTempImg;

let visualizationImg = document.getElementsByClassName('visualization');
let visualizationArr = visualizationImg;

let otherMapImg = document.getElementsByClassName('otherMap');
let otherMapArr = otherMapImg;

let cartographicMapImg = document.getElementsByClassName('cartographicMap');
let cartographicMapArr = cartographicMapImg;

let scatterPlotImg = document.getElementsByClassName('scatterPlot');
let scatterPlotArr = scatterPlotImg;

let circularChartImg = document.getElementsByClassName('circularChart');
let circularChartArr = circularChartImg;

let colorImg = document.getElementsByClassName('color');
let colorArr = colorImg;

let positionImg = document.getElementsByClassName('position');
let positionArr = positionImg;

let orientationImg = document.getElementsByClassName('orientation');
let orientationArr = orientationImg;

let textImg = document.getElementsByClassName('text');
let textArr = textImg;

let timecurveImg = document.getElementsByClassName('timecurve');
let timecurveArr = timecurveImg;

let timelineImg = document.getElementsByClassName('timeline');
let timelineArr = timelineImg;

let timeframeImg = document.getElementsByClassName('timeframe');
let timeframeArr = timeframeImg;

let timecircleImg = document.getElementsByClassName('timecircle');
let timecircleArr = timecircleImg;

let timetableImg = document.getElementsByClassName('timetable');
let timetableArr = timetableImg;

let interactionImg = document.getElementsByClassName('interaction');
let interactionArr = interactionImg;

let coordinatesImg = document.getElementsByClassName('coordinates');
let coordinatesArr = coordinatesImg;

let layersImg = document.getElementsByClassName('layers');
let layersArr = layersImg;

let animationImg = document.getElementsByClassName('animation');
let animationArr = animationImg;

let rectangularImg = document.getElementsByClassName('rectangular');
let rectangularArr = rectangularImg;

let polarImg = document.getElementsByClassName('polar');
let polarArr = polarImg;

let parallelImg = document.getElementsByClassName('parallel');
let parallelArr = parallelImg;

let seperateImg = document.getElementsByClassName('seperate');
let seperateArr = seperateImg;

let visualImg = document.getElementsByClassName('visual');
let visualArr = visualImg;

let twoDimImg = document.getElementsByClassName('2d');
let twoDimArr = twoDimImg;

let threeDimImg = document.getElementsByClassName('3d');
let threeDimArr = threeDimImg;

let fourDimImg = document.getElementsByClassName('4d');
let fourDimArr = fourDimImg;

let singleViewImg = document.getElementsByClassName('singleView');
let singleViewArr = singleViewImg;

let multiViewImg = document.getElementsByClassName('multiView');
let multiViewArr = multiViewImg;

let mp = new Map();
mp.set('spatial', spatialArr);
mp.set('temporal', temporalArr);
mp.set('spatialTemporal',spatialTemporalArr);
mp.set('visualization',visualizationArr);
mp.set('otherMap',otherMapArr);
mp.set('cartographicMap',cartographicMapArr);
mp.set('scatterPlot',scatterPlotArr);
mp.set('circularChart',circularChartArr);
mp.set('color', colorArr);
mp.set('position',positionArr);
mp.set('orientation',orientationArr);
mp.set('text', textArr);
mp.set('timecurve', timecurveArr);
mp.set('timeline', timelineArr);
mp.set('timeframe', timeframeArr);
mp.set('timecircle', timecircleArr);
mp.set('timetable', timetableArr);
mp.set('interaction', interactionArr);
mp.set('coordinates', coordinatesArr);
mp.set('layers', layersArr);
mp.set('animation', animationArr);
mp.set('rectangular', rectangularArr);
mp.set('polar', polarArr);
mp.set('parallel',parallelArr);
mp.set('seperate', seperateArr);
mp.set('visual',visualArr);
mp.set('2d', twoDimArr);
mp.set('3d', threeDimArr);
mp.set('4d', fourDimArr);
mp.set('singleView', singleViewArr);
mp.set('multiView', multiViewArr);




function loadImages(){
  var modal = document.getElementsByClassName('modal');
  $(".main_display").each(function(index){
  $(this).click(function(e) {
    modal[index].style.display = "block"; 
  });
  });
    $(".close").each(function(index){
    $(this).click(function(e) {
      modal[index].style.display = "none";
    });
    });
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });
 }

 function filterResults(){
  let array = []
  let finalArray = [];
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  // if(document.getElementById('selectAll').value !== ''){
  //   loadSearchText();
  // }
  
  if(checkboxes.length > 0){
    $('.main_display').hide();
    document.getElementById('selectAll').style.backgroundColor = "#5bc0de";
  }
  if(checkboxes.length === 0){
    document.getElementById('selectAll').style.backgroundColor = "#3b5998";
    
  }
      for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
  }

   if(array.length === 0){  
    if (document.getElementById('mySearchText').value !== ''){
    //  console.log(document.getElementById('mySearchText').value)
      loadSearchText();
    } else{
      $(".main_display").show();
      ($('#count').html( $('.main_display:visible').length));
    }
      
     }
   
    let checkedValueSet = new Set()
    for(let item of array) {
      checkedValueSet.add(item);
     // console.log(checkedValueSet)
  }
    for (let item of checkedValueSet.keys()){
      var setKey = item;
      if(mp.has(setKey)){
      finalArray = mp.get(setKey);
      $(finalArray).show();
     // console.log(finalArray)
     $('#count').html( $('.main_display:visible').length);
       
  }    
  } 
 }

 function loadAll(){
  $("#visualRep").load(location.href + " #visualRep");
  $("#visualVar").load(location.href + " #visualVar");
  $("#spTempInfo").load(location.href + " #spTempInfo");
  $("#coordinatesFilter").load(location.href + " #coordinatesFilter");
  $("#dimenFilter").load(location.href + " #dimenFilter");
  $("#viewFilter").load(location.href + " #viewFilter");
  selectAll.style.backgroundColor = '#3b5998';
  if (document.getElementById('mySearchText').value !== ''){
    console.log(document.getElementById('mySearchText').value)
    //selectAll.style.backgroundColor = '#3b5998';
      loadSearchText();
      selectAll.style.backgroundColor = '#3b5998';
    }
    else {
      let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
      if(checkboxes.length > 0){
      //  console.log(checkboxes.length)
        selectAll.style.backgroundColor = '#3b5998';
        $(".main_display").show();
       
      }
    }


 $('#count').html( $('.main_display:visible').length);
 }

 function loadSearchText(){

  let text = document.getElementById('mySearchText').value.toLowerCase();
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  if(checkboxes.length > 0){
    filterResults();
  } 
    
      
  // ++keystroke;
  
     let searchArray = ['other','otherMap','Cartographic','cartographicMap','scatter','ScatterPlot', 'Circular','CircularChart','chart','time','timecurve','timeline','timetable','timecircle','timeframe','color','position','orientation','text','interaction','layers','layer','animation','seperate','visual','rectangular','polar','parallel','2d','two','3d','three','4d','four','singleView','single','multipleView','multiView','multiple','multi'].map(v => v.toLowerCase());
  
     /*
      Regular expressions are used for pattern matching of text
     */
    let otherMapPattern = /(othermap|other)/g;
    let cartographicPattern = /(cartographic|cartographicmap|cart)/g;
    let scatterPattern = /(scatter|scat|scatterplot)/g;
    let circChartPattern = /(circu|circular|chart)/g;
    let twoDimPattern = /(2d|two)/g;
    let threeDimPattern = /(3d|three)/g;
    let fourDimPattern = /(4d|four)/g;
    
     
    if(otherMapPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(otherMapArr).show(); 
       
    }
    else if(cartographicPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(cartographicMapArr).show(); 
    }
    else if(scatterPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(scatterPlotArr).show(); 
    }
    else if(circChartPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(circularChartArr).show(); 
    }
    else if(text === 'time'.toLowerCase()){
      $(".main_display").hide();
      $(timecurveArr).show(); $(timelineArr).show(); 
      $(timecircleArr).show(); $(timetableArr).show(); $(timeframeArr).show(); 
    }
    else if(text === 'timecurve'.toLowerCase()){
      $(".main_display").hide();
      $(timecurveArr).show(); 
    }
    else if(text === 'timecircle'.toLowerCase()){
      $(".main_display").hide();
      $(timecircleArr).show(); 
    }
    else if(text === 'timec'.toLowerCase()){
      $(".main_display").hide();
      $(timecircleArr).show(); 
      $(timecurveArr).show(); 
    }
    else if(text === 'timeline'.toLowerCase()){
      $(".main_display").hide();
      $(timelineArr).show(); 
    }
    else if(text === 'timeframe'.toLowerCase()){
      $(".main_display").hide();
      $(timeframeArr).show(); 
    }
   
    else if(text === 'timetable'.toLowerCase()){
      $(".main_display").hide();
      $(timetableArr).show(); 
    }
    else if(text === 'color'.toLowerCase()){
      $(".main_display").hide();
      $(colorArr).show(); 
    }
    else if(text === 'position'.toLowerCase()){
      $(".main_display").hide();
      $(positionArr).show(); 
    }
    else if(text === 'orientation'.toLowerCase()){
      $(".main_display").hide();
      $(orientationArr).show(); 
    }
    else if(text === 'text'.toLowerCase()){
      $(".main_display").hide();
      $(textArr).show(); 
    }
    else if(text === 'interaction'.toLowerCase()){
      $(".main_display").hide();
      $(interactionArr).show(); 
    }
    else if(text === 'layers'.toLowerCase() || text === 'layer'.toLowerCase()){
      $(".main_display").hide();
      $(layersArr).show(); 
    }
    else if(text === 'animation'.toLowerCase()){
      $(".main_display").hide();
      $(animationArr).show(); 
    }
    else if(text === 'seperate'.toLowerCase()){
      $(".main_display").hide();
      $(seperateArr).show(); 
    }
    else if(text === 'visual'.toLowerCase()){
      $(".main_display").hide();
      $(visualArr).show(); 
    }
    else if(text === 'rectangular'.toLowerCase()){
      $(".main_display").hide();
      $(rectangularArr).show(); 
    }
    else if(text === 'polar'.toLowerCase()){
      $(".main_display").hide();
      $(polarArr).show(); 
    }
    else if(text === 'parallel'.toLowerCase()){
      $(".main_display").hide();
      $(parallelArr).show(); 
    }
    else if(twoDimPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(twoDimArr).show(); 
    }
    else if(threeDimPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(threeDimArr).show(); 
    }
    else if(fourDimPattern.test(text.toLowerCase())){
      $(".main_display").hide();
      $(fourDimArr).show(); 
    }
    else if(text === 'singleView'.toLowerCase() || text === 'single'.toLowerCase()){
      $(".main_display").hide();
      $(singleViewArr).show(); 
    }
    else if(text === 'multiple'.toLowerCase() || text === 'multi'.toLowerCase()){
      $(".main_display").hide();
      $(multiViewArr).show(); 
    }
    else if(text === ''){
      $(".main_display").show();
     } 
   
    ($('#count').html( $('.main_display:visible').length));
  
    
  }
    
   
  

 function keywordModal(){
  alert('Other/Othermap \n Cartographic/Cartographicmap \n Scatter/Scatterplot \n Circular/Circularchart \n Timeline \n Timecurve \n Timetable \n Timeframe \n Timecircle \n Color \n position \n orientation \n text \n Interaction \n Layers \n Animation \n Seperate \n visual \n Rectangular \n polar \n parallel \n 2d/two \n 3d/three \n 4d/four \n single/singleview \n multi/multiple');
 }

 function searchClear(){

  $("#clearText").load(location.href + " #clearText");
  //  document.getElementById('mySearchText').value = '';

  document.getElementById('mySearchText').value = '';
  let text = document.getElementById('mySearchText').value;
  
  let array = []
  let filterArray = [];
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
 
  if(text === '' && checkboxes.length === 0){
    $('.main_display').show();
    $('#count').html( $('.main_display:visible').length);
  }

}
