var apiKey = "b1670f750dab41b38c90b4f431c3b9b2";
   
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

document.getElementById("buttonSearch").addEventListener("click", function(){
    var userNameSearch = document.getElementById("userInput").value; 
    var SearchURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/"+userNameSearch+"/";
    
    // - Get UserName and UserID
    searchUser(SearchURL, "GET", function(respJson){
        document.getElementById("userName").innerHTML = respJson.Response[0].displayName;
        document.getElementById("memberId").innerHTML = respJson.Response[0].membershipId;
        
        var userID = document.getElementById("memberId").innerHTML;  
        var userIDURL = "https://www.bungie.net/Platform/Destiny2/2/Profile/"+userID+"/?components=100";
    
        // - Get Characters and IDs
        searchUser(userIDURL, "GET", function(respJson){
            document.getElementById("characterID0").innerHTML = respJson.Response.profile.data.characterIds[0];
            document.getElementById("characterID1").innerHTML = respJson.Response.profile.data.characterIds[1];
            document.getElementById("characterID2").innerHTML = respJson.Response.profile.data.characterIds[2];
            
            var count = respJson.Response.profile.data.characterIds.length;
            
            
            var i=0;
            while(i<count){
                var userID = document.getElementById("memberId").innerHTML;
                document.getElementById("characterNum"+i).innerHTML = "Character "+(i+1);
                
                document.getElementById("count").innerHTML = i;
                var characterID = document.getElementById("characterID"+i).innerHTML;
                var characterIDURL = "https://www.bungie.net/Platform/Destiny2/2/Profile/"+userID+"/Character/"+characterID+"/?components=200";
            
                searchUser(characterIDURL, "GET", function(respJson){
                    var ROOT = "https://www.bungie.net";
                    var newcount = document.getElementById("count").innerHTML;
                    //newcount = iIteration(newcount);
                    document.getElementById("emblem"+newcount).src = ROOT+respJson.Response.character.data.emblemBackgroundPath;
                });
                i++;
            }
        });
    }); 
});

function iIteration(newCount){
    newCount--;
    return newCount;
}