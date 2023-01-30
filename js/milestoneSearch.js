var apiKey = "b1670f750dab41b38c90b4f431c3b9b2";
   
function searchMilestones(url, methodType, callback){
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



$( document ).ready(function() {
    console.log( "ready!" );
    
    var milestoneIDs = [157823523,463010297,536115997,941217864,1300394968,1437935813,2171429505,2683538554,2853331463,2986584050,3082135827,3172444947,3312018120,3448738070,3603098564,3660836525,4253138191];
    
    var flashpointArea = "";
    
    // - Milestone 1 - //
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[0]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone1Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone1Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone1Desc").innerHTML=respJson.Response.displayProperties.description;
    });
    // - Milestone 2 - Flashpoint - //
    
    /*var item1 = milestoneIDs[1];
    // - Get Flashpoint Location - //
    var flashpointURL = " https://www.bungie.net/Platform/Destiny2/Milestones/";
    searchMilestones(flashpointURL, "GET", function(respJson){
        flashpointArea = respJson.Response.item1.availableQuests[0].questItemHash;
        console.log(flashpointArea);
    });*/
    
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[1]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone2Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone2Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone2Desc").innerHTML=respJson.Response.displayProperties.description;
        
        
        /*var questURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[1]+"/";
        searchMilestones(questURL, "GET", function(respJson){
            document.getElementById("milestone2Desc").innerHTML=respJson.Response.quests.flashpointArea.displayProperties.description;
            
        });*/
        
    });
    // - Milestone 3 - //
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[2]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone3Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone3Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone3Desc").innerHTML=respJson.Response.displayProperties.description;
    });
    // - Milestone 4 - //
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[3]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone4Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone4Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone4Desc").innerHTML=respJson.Response.displayProperties.description;
    });
    // - Milestone 5 - //
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[4]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone5Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone5Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone5Desc").innerHTML=respJson.Response.displayProperties.description;
    });
    // - Milestone 6 - //
    var searchURL = "https://www.bungie.net/Platform/Destiny2/Manifest/DestinyMilestoneDefinition/"+milestoneIDs[5]+"/";
    searchMilestones(searchURL, "GET", function(respJson){
        console.log(respJson);
        var ROOT = "https://www.bungie.net";
        document.getElementById("milestone6Img").src=ROOT+respJson.Response.displayProperties.icon;
        document.getElementById("milestone6Name").innerHTML=respJson.Response.displayProperties.name;
        document.getElementById("milestone6Desc").innerHTML=respJson.Response.displayProperties.description;
    });
});
    
    
    
    
//});



//document.getElementById("mainMile").style.display = "block";
/*
var userNameSearch = document.getElementById("userInputMile").value; 
    var SearchURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/"+userNameSearch+"/?components=204";
    
    // - Get IGN and memberID
    searchUser(SearchURL, "GET", function(respJson){
        document.getElementById("userNameMile").innerHTML = respJson.Response[0].displayName;
        document.getElementById("memberIdMile").innerHTML = respJson.Response[0].membershipId;
        
        var userID = document.getElementById("memberIdMile").innerHTML;
        
        var userIDURL = "https://www.bungie.net/Platform/Destiny2/2/Profile/"+userID+"/?components=100";
    
        // - Get Characters and IDs
        searchUser(userIDURL, "GET", function(respJson){
            document.getElementById("characterID1_mile").innerHTML = respJson.Response.profile.data.characterIds[0];
            document.getElementById("characterID2_mile").innerHTML = respJson.Response.profile.data.characterIds[1];
            document.getElementById("characterID3_mile").innerHTML = respJson.Response.profile.data.characterIds[2];
        });
*/    
        
        
        
