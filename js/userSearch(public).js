var apiKey = "";
   
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
var characterData = {num:"",id:"",light:"",emblem:""}
var character1 = characterData;
var character2 = characterData;
var character3 = characterData;

var platformType;

// - xbox=1  psn=2  pc=4
$("input[type='radio']").click(function(){
    platformType = $("input[name='platformType']:checked").val();
    document.getElementById("platformTypeNumber").innerHTML = platformType;
    //console.log(platformType);
});

document.getElementById("buttonSearch").addEventListener("click", function(){
    
    //document.getElementById("errorShow").style.display = "none";
    
    document.getElementById("c1Items").style.display = "none";
    document.getElementById("c2Items").style.display = "none";
    document.getElementById("c3Items").style.display = "none";
    
    document.getElementById("character1").style.display = "none";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character3").style.display = "none";
    
    document.getElementById("characterID1").innerHTML = "undefined";
    document.getElementById("characterID2").innerHTML = "undefined";
    document.getElementById("characterID3").innerHTML = "undefined";
    
    isClicked1 = false;
    isClicked2 = false;
    isClicked3 = false;
    
    document.getElementById("main").style.display = "block";
	
    //document.getElementById("errorShow").style.display = "none";
    
    var userNameSearch = document.getElementById("userInput").value;
    
    console.log(userNameSearch);
    
    if(userNameSearch == ""){
        document.getElementById("errorShow").style.display = "block"; 
        document.getElementById("errorShow").innerHTML = "Please enter name to search";
    }
    
    if(platformType == "undefined"){
        document.getElementById("errorShow").style.display = "block"; 
        document.getElementById("errorShow").innerHTML = "Please select a platform";
    }
    //var pcUsernameCheck = userNameSearch.slice(-5);
    //console.log(pcUsernameCheck);
    
    /*if(pcUsernameCheck.slice(-5,-4) == '#'){
        var newUserName = userNameSearch.slice(0,-5);
        var newUserNameSuffix = userNameSearch.slice(-4);
        //console.log(newUserName);
        //console.log(newUserNameSuffix);
        userNameSearch = newUserName+"%23"+newUserNameSuffix;
        //console.log(userNameSearch);
    }*/
    
    
    // - Check for PC name hash and replace for search '%23'
    if(platformType == 4){
        var n = 0;
        var updatedUsername;
        for(n=0;n<userNameSearch.length;n++){
            if(userNameSearch[n] == '#'){
                updatedUsername += '%23';
            }
            if(n == 0){
                updatedUsername = userNameSearch[n]
            }
            
            if((userNameSearch[n] != '#')&&(n != 0)){
                updatedUsername += userNameSearch[n];
            }
        }
        console.log(updatedUsername);
    }
    
    var SearchURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/"+platformType+"/"+userNameSearch+"/";
    if(platformType == 4){
        SearchURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/"+platformType+"/"+updatedUsername+"/";
    }
    
    
    console.log(SearchURL);
    // - Get UserName and UserID
    searchUser(SearchURL, "GET", function(respJson){
        document.getElementById("userName").innerHTML = respJson.Response[0].displayName;
        document.getElementById("memberId").innerHTML = respJson.Response[0].membershipId;
        
        var userID = document.getElementById("memberId").innerHTML;
        
        var userIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/?components=100";
    
        // - Get Characters and IDs
        searchUser(userIDURL, "GET", function(respJson){
            var responseCharacterID1 = respJson.Response.profile.data.characterIds[0];
            document.getElementById("characterID1").innerHTML = respJson.Response.profile.data.characterIds[0];
            
            
            var responseCharacterID2 = respJson.Response.profile.data.characterIds[1];
            document.getElementById("characterID2").innerHTML = respJson.Response.profile.data.characterIds[1];
            
            
            var responseCharacterID3 = respJson.Response.profile.data.characterIds[2];
            document.getElementById("characterID3").innerHTML = respJson.Response.profile.data.characterIds[2];
            
            
            
                var userID = document.getElementById("memberId").innerHTML;
            // - Character 1 Data
                document.getElementById("characterNum1").innerHTML = "Character 1";
                var characterID = document.getElementById("characterID1").innerHTML;
            //console.log(characterID);
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
                
            
                if(characterID == "undefined"){
                document.getElementById("character1").style.display = "none";
                }
                else{
            
                searchUser(characterIDURL, "GET", function(respJson){
                    document.getElementById("character1").style.display = "block";
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("emblem1").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("lightLevel1").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("class1").innerHTML = "Class: "+classType;
                    
                    var userID = document.getElementById("memberId").innerHTML;
                    var characterID = document.getElementById("characterID1").innerHTML;
                    var itemIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=205";
                    searchUser(itemIDURL, "GET", function(respJson){
					   //console.log(respJson);
                        
						// - Get item hash and assign
                        var respLength = respJson.Response.equipment.data.items.length;
                        var i=0;
                        for(i=0;i<respLength;i++){
                            var itemName = "c1Item"+(i+1);
                            var item = respJson.Response.equipment.data.items[i].itemHash;
                            document.getElementById(itemName).innerHTML = item;
                            
                            var itemInstance = "c1InstanceID"+(i+1);
                            var itemInstanceId = respJson.Response.equipment.data.items[i].itemInstanceId;
                            document.getElementById(itemInstance).innerHTML = itemInstanceId;
                            //console.log(itemInstanceId);
                        }
                    });
                    
                });
                }
            
            // - Character 2 Data
                document.getElementById("characterNum2").innerHTML = "Character 2";
                var characterID = document.getElementById("characterID2").innerHTML;
            //console.log(characterID);
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
            
                if(characterID == "undefined"){
                document.getElementById("character2").style.display = "none";
                }
                else{
                
                searchUser(characterIDURL, "GET", function(respJson){
                    document.getElementById("character2").style.display = "block";
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("emblem2").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("lightLevel2").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("class2").innerHTML = "Class: "+classType;
                    
                    var userID = document.getElementById("memberId").innerHTML;
                    var characterID = document.getElementById("characterID2").innerHTML;
                    var itemIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=205";
                    searchUser(itemIDURL, "GET", function(respJson){
					   //console.log(respJson);
                        
						// - Get item hash and assign
                        var respLength = respJson.Response.equipment.data.items.length;
                        var i=0;
                        for(i=0;i<respLength;i++){
                            var itemName = "c2Item"+(i+1);
                            var item = respJson.Response.equipment.data.items[i].itemHash;
						  document.getElementById(itemName).innerHTML = item;
                            
                        var itemInstance = "c2InstanceID"+(i+1);
                        var itemInstanceId = respJson.Response.equipment.data.items[i].itemInstanceId;
                        document.getElementById(itemInstance).innerHTML = itemInstanceId;
                        }
                    });
                });
                }
            
            // - Character 3 Data 
                document.getElementById("characterNum3").innerHTML = "Character 3";
                var characterID = document.getElementById("characterID3").innerHTML;
            //console.log(characterID);
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
                
                if(characterID == "undefined"){
                document.getElementById("character3").style.display = "none";
                }
                else{
            
                searchUser(characterIDURL, "GET", function(respJson){
                    document.getElementById("character3").style.display = "block";
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("emblem3").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("lightLevel3").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("class3").innerHTML = "Class: "+classType;
					
					var userID = document.getElementById("memberId").innerHTML;
                    var characterID = document.getElementById("characterID3").innerHTML;
                    var itemIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=205";
                    searchUser(itemIDURL, "GET", function(respJson){
					   //console.log(respJson);
                        
						// - Get item hash and assign
                        var respLength = respJson.Response.equipment.data.items.length;
                        var i=0;
                        for(i=0;i<respLength;i++){
                            var itemName = "c3Item"+(i+1);
                            var item = respJson.Response.equipment.data.items[i].itemHash;
						  document.getElementById(itemName).innerHTML = item;
                            
                        var itemInstance = "c3InstanceID"+(i+1);
                        var itemInstanceId = respJson.Response.equipment.data.items[i].itemInstanceId;
                        document.getElementById(itemInstance).innerHTML = itemInstanceId;
                        }
                    });
                });
                }
        });
    }); 
	document.getElementById("errorShow").style.display = "none";
    setTimeout(function(){
        $('html,body').animate({
            scrollTop: $("#main").offset().top
        },1000);
        
    },2000);
});

function getData() {
    $.getJSON('../referenceAssets/DestinyInventoryItemDefinition.json', function(respData) {
        //console.log(respData);
    })
    .done(function() {
        var snapshot = Defiant.getSnapshot(respData);
        var i=0;
        for(i=0;i<15;i++){
            var itemName = "c1Item"+(i+1);
            var item = document.getElementById(itemName).innerHTML;
            search = JSON.search(respData, '//item')
            console.log(item);
            console.log(i);
        }
        console.log(respData);
    });
}


function checkClass(classType){
    switch(classType){
        case 0:
            classType = "Titan";
            break;
            
        case 1:
            classType = "Hunter";
            break;
            
        case 2:
            classType = "Warlock";
            break;
    }
    return classType;
}