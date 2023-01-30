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

var platformType;

// - xbox=1  psn=2  pc=4
$("input[type='radio']").click(function(){
    platformType = $("input[name='platformType']:checked").val();
    document.getElementById("platformTypeClan").innerHTML = platformType;
    //console.log(platformType);
});

document.getElementById("buttonSearchClan").addEventListener("click", function(){
    
    document.getElementById("mainClanStats").style.display = "block";
    
    var userNameSearch = document.getElementById("userInputClan").value;
    
    if(userNameSearch == ""){
        document.getElementById("errorShow").style.display = "block"; 
        document.getElementById("errorShow").innerHTML = "Please enter name to search";
    }
    
    if(platformType == "undefined"){
        document.getElementById("errorShow").style.display = "block"; 
        document.getElementById("errorShow").innerHTML = "Please select a platform";
    } 
    
    
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
        document.getElementById("usernameClan").innerHTML = respJson.Response[0].displayName;
        document.getElementById("memberIdClan").innerHTML = respJson.Response[0].membershipId;
        
        var userID = document.getElementById("memberIdClan").innerHTML;
        
        var clanSearchURL = "https://www.bungie.net/Platform/GroupV2/User/"+platformType+"/"+userID+"/0/1/";
    
        // - Get Characters and IDs
        searchUser(clanSearchURL, "GET", function(respJson){
            document.getElementById("clanName").innerHTML = respJson.Response.results[0].group.name + " - ["+respJson.Response.results[0].group.clanInfo.clanCallsign+"]";
            document.getElementById("clanMotto").innerHTML = respJson.Response.results[0].group.motto;
            //document.getElementById("clanAbout").innerHTML = respJson.Response.results[0].group.about;
            
            var stringData = respJson.Response.results[0].group.about;
            stringData = stringData.replace(/\n/g, "<br />");
            console.log(stringData);
            document.getElementById("clanAbout").innerHTML = stringData;
            
            /*document.getElementById("clanTag").innerHTML = "["+respJson.Response.results[0].group.clanInfo.clanCallsign+"]";*/
            
            /* Clan Banner Info */
           
            document.getElementById("decalId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.decalId;
            document.getElementById("decalColorId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.decalColorId;
            document.getElementById("decalBackgroundColorId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.decalBackgroundColorId;
            document.getElementById("gonfalonId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonId;
            document.getElementById("gonfalonColorId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonColorId;
            document.getElementById("gonfalonDetailId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonDetailId;
            document.getElementById("gonfalonDetailColorId").innerHTML = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonDetailColorId;
            
            // Reasign to variables to store in dictionary
            var decalId = respJson.Response.results[0].group.clanInfo.clanBannerData.decalId;
            decalId = decalId.toString();
            var decalColorId = respJson.Response.results[0].group.clanInfo.clanBannerData.decalColorId;
            var decalBackgroundColorId = respJson.Response.results[0].group.clanInfo.clanBannerData.decalBackgroundColorId;
            var gonfalonId = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonId;
            var gonfalonColorId = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonColorId;
            var gonfalonDetailId = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonDetailId;
            var gonfalonDetailColorId = respJson.Response.results[0].group.clanInfo.clanBannerData.gonfalonDetailColorId;
            
            var bannerData = {decalId:decalId, decalColorId:decalColorId, decalBackgroundColorId:decalBackgroundColorId, gonfalonId:gonfalonId, gonfalonColorId:gonfalonColorId, gonfalonDetailId:gonfalonDetailId, gonfalonDetailColorId:gonfalonDetailColorId};
            
            console.log(bannerData);
            
            // Send Values to query DB
            sendBannerData(bannerData, buildBanner);
            
            // Send to Query and callback to assign url to images
            function sendBannerData(bannerData, callback){
            $.ajax({
                url : "../php/clanbanner.php",
                method : "POST",
                data: bannerData,
                dataType : "json",
                success : callback,
                error : function (reason, xhr){
                    //alert("Player could not be found");
                    console.log("error in processing your request", reason);
                }
            });
            }
            
            function buildBanner(){
                
            }
            
        });
    });
});