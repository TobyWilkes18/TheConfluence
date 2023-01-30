async function searchItem(url, methodType, callback){
 $.ajax({
    url : url,
    headers: {
        "X-API-Key": apiKey
    },
    method : methodType,
    async : true,
    dataType : "json",
    success : await callback,
    error : function (reason, xhr){
    //alert("Player could not be found");
     console.log("error in processing your request", reason);
    }
   });
 }


var itemArray = [];
var urlArray = [];
var perkArray = [];
var perkItemArrayURL = [];

var ROOT = "https://www.bungie.net";


document.getElementById("showc1Items").addEventListener("click", function(){
    setTimeout(function(){
        
    var userID = document.getElementById("memberId").innerHTML;
    var platformType = document.getElementById("platformTypeNumber").innerHTML;
    // Get InstanceIDs and set to array for urls
    var i=0;
    for(i=0;i<15;i++){
        var itemName = "c1InstanceID"+(i+1);
        var itemID = document.getElementById(itemName).innerHTML;
        
        // - GetEquipment(itemInstanceId).plughash --> DestinyInventoryItemDefinition
        var perkURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Item/"+itemID+"/?components=300,302,304,305";
        urlArray[i] = perkURL;
    }
    
    
    // - Item 1 - //
    // - Get weapon perks from parsed URL/InstanceID
    searchItem(urlArray[0], "GET", function(respJson){
        var perkArray = [];
        // - Frame type
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);

        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perkName1").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg1").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perkName2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perkName3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perkName4").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg4").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perkName5").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg5").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 1
    
    // - Item 2 - //
    searchItem(urlArray[1], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perkName1_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg1_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perkName2_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg2_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perkName3_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg3_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perkName4_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg4_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perkName5_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg5_2").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 2
    
    // - Item 3 - //
    searchItem(urlArray[2], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perkName1_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg1_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perkName2_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg2_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perkName3_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg3_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perkName4_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg4_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perkName5_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg5_3").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 3
    
   
},200);
});// - End onclick "showc1Items"



document.getElementById("showc2Items").addEventListener("click", function(){
    setTimeout(function(){
    
    var userID = document.getElementById("memberId").innerHTML;
    
    // Get InstanceIDs and set to array for urls
    var i=0;
    for(i=0;i<15;i++){
        var itemName = "c2InstanceID"+(i+1);
        var itemID = document.getElementById(itemName).innerHTML;
        var perkURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Item/"+itemID+"/?components=300,302,304,305";
        urlArray[i] = perkURL;
    }
    
    
    // - Item 1 - //
    // - Get weapon perks from parsed URL/InstanceID
    searchItem(urlArray[0], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk2Name1").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img1").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk2Name2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk2Name3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk2Name4").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img4").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk2Name5").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img5").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 1
    
    // - Item 2 - //
    searchItem(urlArray[1], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk2Name1_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img1_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk2Name2_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img2_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk2Name3_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img3_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk2Name4_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img4_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk2Name5_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img5_2").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 2
    
    // - Item 3 - //
    searchItem(urlArray[2], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk2Name1_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img1_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk2Name2_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img2_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk2Name3_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img3_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk2Name4_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img4_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk2Name5_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk2Img5_3").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 3
    
   
}, 200);
});// - End onclick "showc2Items"


document.getElementById("showc3Items").addEventListener("click", function(){
    setTimeout(function(){
    
    var userID = document.getElementById("memberId").innerHTML;
    
    // Get InstanceIDs and set to array for urls
    var i=0;
    for(i=0;i<15;i++){
        var itemName = "c3InstanceID"+(i+1);
        var itemID = document.getElementById(itemName).innerHTML;
        var perkURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Item/"+itemID+"/?components=300,302,304,305";
        urlArray[i] = perkURL;
    }
    
    
    // - Item 1 - //
    // - Get weapon perks from parsed URL/InstanceID
    searchItem(urlArray[0], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk3Name1").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img1").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk3Name2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk3Name3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk3Name4").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img4").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk3Name5").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img5").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 1
    
    // - Item 2 - //
    searchItem(urlArray[1], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk3Name1_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img1_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk3Name2_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img2_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk3Name3_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img3_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk3Name4_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img4_2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk3Name5_2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img5_2").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 2
    
    // - Item 3 - //
    searchItem(urlArray[2], "GET", function(respJson){
        var perkArray = [];
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[1].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[2].plugHash;
        perkArray[3] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[4] = respJson.Response.sockets.data.sockets[4].plugHash;
        //console.log(perkArray);
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perk3Name1_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img1_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perk3Name2_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img2_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perk3Name3_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img3_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[3], "GET", function(respJson){
            document.getElementById("perk3Name4_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img4_3").src = ROOT+respJson.Response.displayProperties.icon;
        });
        
        searchItem(perkItemArrayURL[4], "GET", function(respJson){
            document.getElementById("perk3Name5_3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perk3Img5_3").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End Item 3
    
   
},200);
});// - End onclick "showc3Items"



/*
var i=0;
    for(i=0;i<13;i++) {
        var item = "c1Item"+(i+1);
        itemArray[i] = document.getElementById(item).innerHTML;
        urlArray[i] = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+weaponID+"/";
    }
    
    var statURL = " https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+weaponID+"/";
    searchItem(urlArray[0], "GET", function(respJson){
        
    });
    */




/*
// - Item 1 - //
    
    // - Get weapon perks from parsed URL/InstanceID
    searchItem(urlArray[0], "GET", function(respJson){
        var perkArray = [];
        //var perkLength = respJson.Response.perks.data.perks.length;
        var j=0;
        
        /*for(var i=0;i<perkLength;i++){
            var isVisible = respJson.Response.perks.data.perks[i].visible;
            console.log(isVisible);
            if(isVisible == true){
                perkArray[j] = respJson.Response.perks.data.perks[i].perkHash;
                j++;
            }
            console.log(perkArray[j-1]);
        }
        console.log(perkArray);
        
        perkArray[0] = respJson.Response.sockets.data.sockets[0].plugHash;
        perkArray[1] = respJson.Response.sockets.data.sockets[3].plugHash;
        perkArray[2] = respJson.Response.sockets.data.sockets[4].plugHash;
        console.log(perkArray);
        
        
        // - Get perk definitions
        var k=0;
        for(k=0;k<perkArray.length;k++){
            //var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinySandboxPerkDefinition/"+perkArray[k]+"/";
            var perkInfoURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"+perkArray[k]+"/";
            perkItemArrayURL[k] = perkInfoURL;
        }
    
        searchItem(perkItemArrayURL[0], "GET", function(respJson){
            document.getElementById("perkName1").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg1").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[1], "GET", function(respJson){
            document.getElementById("perkName2").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg2").src = ROOT+respJson.Response.displayProperties.icon;
        });
        searchItem(perkItemArrayURL[2], "GET", function(respJson){
            document.getElementById("perkName3").innerHTML = respJson.Response.displayProperties.name;
            document.getElementById("perkImg3").src = ROOT+respJson.Response.displayProperties.icon;
        });// - End perk definition 
    });// - End get perks
*/