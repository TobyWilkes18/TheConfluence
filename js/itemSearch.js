var apiKey = "b1670f750dab41b38c90b4f431c3b9b2";

var isClicked1 = false;
var isClicked2 = false;
var isClicked3 = false;
   
function searchUser(url, methodType, callback){
 $.ajax({
    url : url,
    headers: {
        "X-API-Key": apiKey
    },
    method : methodType,
    dataType : "json",
    success : callback,
    error : function (reason, xhr){
    //alert("Player could not be found");
     console.log("error in processing your request", reason);
    }
   });
 }

function searchItem(url, methodType, callback){
 $.ajax({
    url : url,
    headers: {
        "X-API-Key": apiKey
    },
    method : methodType,
    //async : false,
    dataType : "json",
    success : callback,
    error : function (reason, xhr){
    //alert("Player could not be found");
     console.log("error in processing your request", reason);
    }
   });
 }

// - Button Toggle - //
document.getElementById("showc1Items").addEventListener("click", function(){
    var x = document.getElementById("c1Items");
    if (x.style.display === "none") {
        $("c1Items").slideDown(500);
        x.style.display = "block";
        isClicked1 = true;
    } else {
        x.style.display = "none";
        $("c1Items").slideUp(500);
        isClicked1 = false;
    }
});

document.getElementById("showc2Items").addEventListener("click", function(){
    var y = document.getElementById("c2Items");
    if (y.style.display === "none") {
        $("c2Items").slideDown(500);
        y.style.display = "block";
        isClicked2 = true;
    } else {
        y.style.display = "none";
        $("c2Items").slideUp(500);
        isClicked2 = false;
    }
});

document.getElementById("showc3Items").addEventListener("click", function(){
    var z = document.getElementById("c3Items");
    if (z.style.display === "none") {
        $("c3Items").slideDown(500);
        z.style.display = "block";
        isClicked3 = true;
    } else {
        z.style.display = "none";
        $("c3Items").slideUp(500);
        isClicked3 = false;
    }
});




// - Start Character 1 Items - //
document.getElementById("showc1Items").addEventListener("click", function(){
setTimeout(function(){
if(isClicked1 == true){
    var userID = document.getElementById("memberId").innerHTML;
    
    
    var itemArray = [];
    var urlArray = [];
    var imgArray = [];
    var ROOT = "https://www.bungie.net";
    
    for(var i=0;i<13;i++) {
        var item = "c1Item"+(i+1);
        var itemImg = "c1Item"+(i+1)+"Img";
        itemArray[i] = document.getElementById(item).innerHTML;
        imgArray[i] = document.getElementById(itemImg).innerHTML;
        urlArray[i] = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+itemArray[i]+"/";
        //console.log(itemArray[i]);
    }
     
    // - Stop sending request after first send - Checks for parsing ID
    if(isNaN(itemArray[0]) == false){
      // console.log(itemArray[0] + "Item is a number"); 

    searchItem(urlArray[0], "GET", function(respJson){
        document.getElementById("c1Item1").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item1Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[1], "GET", function(respJson){
        document.getElementById("c1Item2").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item2Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[2], "GET", function(respJson){
        document.getElementById("c1Item3").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item3Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[3], "GET", function(respJson){
        document.getElementById("c1Item4").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item4Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[4], "GET", function(respJson){
        document.getElementById("c1Item5").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item5Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[5], "GET", function(respJson){
        document.getElementById("c1Item6").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item6Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[6], "GET", function(respJson){
        document.getElementById("c1Item7").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item7Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[7], "GET", function(respJson){
        document.getElementById("c1Item8").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item8Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[8], "GET", function(respJson){
        document.getElementById("c1Item9").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item9Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[9], "GET", function(respJson){
        document.getElementById("c1Item10").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item10Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[10], "GET", function(respJson){
        document.getElementById("c1Item11").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item11Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[11], "GET", function(respJson){
        document.getElementById("c1Item12").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item12Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray[12], "GET", function(respJson){
        document.getElementById("c1Item13").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c1Item13Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    
    // - End of Character 1 Items - //
    }
}
},200);
    if(isClicked1 == true){
        setTimeout(function(){
            $('html,body').animate({
                scrollTop: $("#c1Items").offset().top-125
            },500);
        },500);
    }
});                                       //, {once : true});

// - Start Character 2 Items - //
document.getElementById("showc2Items").addEventListener("click", function(){
setTimeout(function(){
if(isClicked2 == true){  
    var itemArray2 = [];
    var urlArray2 = [];
    var imgArray2 = [];
    var ROOT = "https://www.bungie.net";
    
    var i=0;
    for(i=0;i<13;i++) {
        var item2 = "c2Item"+(i+1);
        var itemImg2 = "c2Item"+(i+1)+"Img";
        itemArray2[i] = document.getElementById(item2).innerHTML;
        imgArray2[i] = document.getElementById(itemImg2).innerHTML;
        urlArray2[i] = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+itemArray2[i]+"/";
        //console.log(itemArray2[i]);
    }
    
    // - Stop sending request after first send - Checks for parsing ID
    if(isNaN(itemArray2[0]) == false){
        
    searchItem(urlArray2[0], "GET", function(respJson){
        document.getElementById("c2Item1").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item1Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[1], "GET", function(respJson){
        document.getElementById("c2Item2").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item2Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[2], "GET", function(respJson){
        document.getElementById("c2Item3").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item3Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[3], "GET", function(respJson){
        document.getElementById("c2Item4").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item4Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[4], "GET", function(respJson){
        document.getElementById("c2Item5").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item5Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[5], "GET", function(respJson){
        document.getElementById("c2Item6").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item6Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[6], "GET", function(respJson){
        document.getElementById("c2Item7").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item7Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[7], "GET", function(respJson){
        document.getElementById("c2Item8").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item8Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[8], "GET", function(respJson){
        document.getElementById("c2Item9").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item9Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[9], "GET", function(respJson){
        document.getElementById("c2Item10").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item10Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[10], "GET", function(respJson){
        document.getElementById("c2Item11").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item11Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[11], "GET", function(respJson){
        document.getElementById("c2Item12").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item12Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray2[12], "GET", function(respJson){
        document.getElementById("c2Item13").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c2Item13Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    }
}
},200);// - End of Character 2 Items - //
    if(isClicked2 == true){
        setTimeout(function(){
            $('html,body').animate({
                scrollTop: $("#c2Items").offset().top-125
            },500);
        },500);
    }
    
}); //,{once : true});

// - Start Character 3 Items - //
document.getElementById("showc3Items").addEventListener("click", function(){
setTimeout(function(){
if(isClicked3 == true){  
    var itemArray3 = [];
    var urlArray3 = [];
    var imgArray3 = [];
    var ROOT = "https://www.bungie.net";
    
    var i=0;
    for(i=0;i<13;i++) {
        var item3 = "c3Item"+(i+1);
        var itemImg3 = "c3Item"+(i+1)+"Img";
        itemArray3[i] = document.getElementById(item3).innerHTML;
        imgArray3[i] = document.getElementById(itemImg3).innerHTML;
        urlArray3[i] = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+itemArray3[i]+"/";
        //console.log(itemArray3[i]);
    }
    
    // - Stop sending request after first send - Checks for parsing ID
    if(isNaN(itemArray3[0]) == false){
    searchItem(urlArray3[0], "GET", function(respJson){
        document.getElementById("c3Item1").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item1Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[1], "GET", function(respJson){
        document.getElementById("c3Item2").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item2Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[2], "GET", function(respJson){
        document.getElementById("c3Item3").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item3Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[3], "GET", function(respJson){
        document.getElementById("c3Item4").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item4Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[4], "GET", function(respJson){
        document.getElementById("c3Item5").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item5Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[5], "GET", function(respJson){
        document.getElementById("c3Item6").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item6Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[6], "GET", function(respJson){
        document.getElementById("c3Item7").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item7Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[7], "GET", function(respJson){
        document.getElementById("c3Item8").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item8Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[8], "GET", function(respJson){
        document.getElementById("c3Item9").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item9Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[9], "GET", function(respJson){
        document.getElementById("c3Item10").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item10Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[10], "GET", function(respJson){
        document.getElementById("c3Item11").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item11Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[11], "GET", function(respJson){
        document.getElementById("c3Item12").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item12Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    searchItem(urlArray3[12], "GET", function(respJson){
        document.getElementById("c3Item13").innerHTML = respJson.Response.displayProperties.name;
        document.getElementById("c3Item13Img").src = ROOT+respJson.Response.displayProperties.icon;
    }); 
    }
} 
},200);// - End of Character 3 Items - //
    if(isClicked3 == true){
        setTimeout(function(){
            $('html,body').animate({
                scrollTop: $("#c3Items").offset().top-125
            },500);
        },500);
    }
}); //,{once : true});
