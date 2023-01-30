var apiKey = "b1670f750dab41b38c90b4f431c3b9b2";
   
function searchStats(url, methodType, callback){
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

var platformType;

$("input[type='radio']").click(function(){
    platformType = $("input[name='platformType']:checked").val();
    document.getElementById("platformTypeNumber").innerHTML = platformType;
    //console.log(platformType);
});


document.getElementById("buttonSearchStats").addEventListener("click", function(){
    document.getElementById("mainStats").style.display = "block";
    document.getElementById("characterStats1").style.display = "block";
    document.getElementById("characterStats2").style.display = "block";
    document.getElementById("characterStats3").style.display = "block";
    
    var userNameSearch = document.getElementById("userInputStats").value; 
    
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
    
    // - Get UserName and UserID
    searchStats(SearchURL, "GET", function(respJson){
        document.getElementById("usernameStats").innerHTML = respJson.Response[0].displayName;
        document.getElementById("memberIDStats").innerHTML = respJson.Response[0].membershipId;
        
        var userID = document.getElementById("memberIDStats").innerHTML;
        
        var userIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/?components=100";
    
        // - Get Characters and IDs
        searchStats(userIDURL, "GET", function(respJson){
            document.getElementById("statsCharacterID1").innerHTML = respJson.Response.profile.data.characterIds[0];
            document.getElementById("statsCharacterID2").innerHTML = respJson.Response.profile.data.characterIds[1];
            document.getElementById("statsCharacterID3").innerHTML = respJson.Response.profile.data.characterIds[2];
            
        
            var userID = document.getElementById("memberIDStats").innerHTML;
            // - Character 1 Data
                document.getElementById("statsCharacterNum1").innerHTML = "Character 1";
                var characterID = document.getElementById("statsCharacterID1").innerHTML;
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
                
                if(characterID == "undefined"){
                document.getElementById("character1Stats").style.display = "none";
                }
                else{
            
                searchStats(characterIDURL, "GET", function(respJson){
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("statsEmblem1").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("statsLightLevel1").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("statsClass1").innerHTML = classType;
                    
                });
            
                var statsURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Account/"+userID+"/Character/"+characterID+"/Stats/";
            
                searchStats(statsURL, "GET", function(respJson){
                    document.getElementById("statsKDCharacter1").innerHTML = "KD: "+respJson.Response.allPvP.allTime.killsDeathsRatio.basic.displayValue;
                    document.getElementById("statsKDACharacter1").innerHTML = "KDA: "+respJson.Response.allPvP.allTime.killsDeathsAssists.basic.displayValue;
                    document.getElementById("statsEfficiencyCharacter1").innerHTML = "KA/D (Overall Efficiency): "+respJson.Response.allPvP.allTime.efficiency.basic.displayValue;
                });
                }

            
            // - Character 2 Data
                document.getElementById("statsCharacterNum2").innerHTML = "Character 2";
                var characterID = document.getElementById("statsCharacterID2").innerHTML;
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
               
                if(characterID == "undefined"){
                document.getElementById("character2Stats").style.display = "none";
                }
                else{
                    
                searchStats(characterIDURL, "GET", function(respJson){
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("statsEmblem2").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("statsLightLevel2").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("statsClass2").innerHTML = classType;
                    
                });
                
                // - Get PvP Stats
                var statsURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Account/"+userID+"/Character/"+characterID+"/Stats/";
            
                searchStats(statsURL, "GET", function(respJson){
                    document.getElementById("statsKDCharacter2").innerHTML = "KD: "+respJson.Response.allPvP.allTime.killsDeathsRatio.basic.displayValue;
                    document.getElementById("statsKDACharacter2").innerHTML = "KDA: "+respJson.Response.allPvP.allTime.killsDeathsAssists.basic.displayValue;
                    document.getElementById("statsEfficiencyCharacter2").innerHTML = "KA/D (Overall Efficiency): "+respJson.Response.allPvP.allTime.efficiency.basic.displayValue;
                });
                }
            
            // - Character 3 Data 
                document.getElementById("statsCharacterNum3").innerHTML = "Character 3";
                var characterID = document.getElementById("statsCharacterID3").innerHTML;
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Profile/"+userID+"/Character/"+characterID+"/?components=200";
                
                console.log(characterID);
            
                if(characterID == "undefined"){
                document.getElementById("character3Stats").style.display = "none";
                }
                else{
            
                searchStats(characterIDURL, "GET", function(respJson){
                    var ROOT = "https://www.bungie.net";
                    // - Set Emblem Source
                    document.getElementById("statsEmblem3").src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                    // - Set Light Level
                    document.getElementById("statsLightLevel3").innerHTML = "Light: "+respJson.Response.character.data.light;
                    // - Set Class
                    var rawClassData = respJson.Response.character.data.classType;
                    var classType = checkClass(rawClassData);
                    document.getElementById("statsClass3").innerHTML = classType;
					
                });
            
                // - Get PvP Stats
                var statsURL = "https://www.bungie.net/Platform/Destiny2/"+platformType+"/Account/"+userID+"/Character/"+characterID+"/Stats/";
            
                searchStats(statsURL, "GET", function(respJson){
                    document.getElementById("statsKDCharacter3").innerHTML = "KD: "+respJson.Response.allPvP.allTime.killsDeathsRatio.basic.displayValue;
                    document.getElementById("statsKDACharacter3").innerHTML = "KDA: "+respJson.Response.allPvP.allTime.killsDeathsAssists.basic.displayValue;
                    document.getElementById("statsEfficiencyCharacter3").innerHTML = "KA/D (Overall Efficiency): "+respJson.Response.allPvP.allTime.efficiency.basic.displayValue;
                });
                }
        });
    });
});

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