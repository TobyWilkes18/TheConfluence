<?php
//include "../php/config.php";

session_start();
$username = $_SESSION["username"];
/*$ps4Ign = $_SESSION["ps4Ign"];
$xboxIgn = $_SESSION["xboxIgn"];
$pcIgn = $_SESSION["pcIgn"];*/

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Site</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/loadingGraphic.css">
    <link rel="stylesheet" href="../css/expandButton.css">
    <script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
    
</head>


    <!-- Nav Menu Start -->
   
    <div class="stock"><!-- Stop inheriting of Parallax css -->
        <nav class="menu-opener">
            <div class="menu-opener-inner"></div>
        </nav>
        <nav class="menu">
            <ul class="menu-inner hide">
                <a href="../index.php" class="menu-link">
                    <li>Equipped Items</li>
                </a>
                <!--<a href="../pages/milestone.html" class="menu-link">
                    <li>Milestone Checklist</li>
                </a>-->
                <a href="../pages/pvpStats.html" class="menu-link">
                    <li>PvP Stats</li>
                </a>
                <a href="#" class="menu-link">
                    <li>Clan</li>
                </a>
                <!--<a href="#" class="menu-link">
                    <li>Item 5</li>
                </a>-->
            </ul>
        </nav>     
        <script src="../js/menu-opener.js"></script>    
    </div><!-- Nav Menu End -->

<body>
    <div class="container" style="padding-top:100px;">
       <div style="background-image: url(../assets/Clan_picture3.png); background-size: cover; margin-left:auto; margin-right:auto;"></div>
        <h1 class="display-2" style="border-bottom:solid 2px;">Clan Stats</h1>
        <br />
        <h2 class="text-center">Username Search</h2>
        <div id="mainInputStats" class="container text-center">
            <input type="search" id="userInputClan" name="q" value="<?php echo $username?>">
            
            <div class="container">
            <div class="radio-tile-group">
                <div class="input-container platformSelect">
                    <input id="psninputStats" class="radio-button" type="radio" name="platformType" value="2" />
                    <div class="radio-tile">
                        <label for="radiopsn" class="radio-tile-label">PSN</label>
                    </div>
                </div>

                <div class="input-container platformSelect">
                    <input id="xboxinput" class="radio-button" type="radio" name="platformType" value="1"/>
                    <div class="radio-tile">
                        <label for="radioxbox" class="radio-tile-label">Xbox</label>
                    </div>
                </div>

                <div class="input-container platformSelect">
                    <input id="pcinput" class="radio-button" type="radio" name="platformType" value="3"/>
                    <div class="radio-tile">
                        <label for="radiopc" class="radio-tile-label">PC</label>
                    </div>
                </div>
            </div>
        </div>
            
            
        <script>
        
        $("input[type='radio']").click(function(){
            platformType = $("input[name='platformType']:checked").val();
            
            var upt = platformType;
            
            if(upt == 1){
                upt = "<?php echo $xboxIgn; ?>";
                console.log(upt);
                document.getElementById("userInputClan").value = upt;
            }
            /*switch (upt) {
                case 1: 
                    upt = "<?php echo $xboxIgn; ?>";
                    console.log(upt);
                    document.getElementById("userInputClan").value = toString(upt);
                    break;
                case 2: 
                    upt = "two";
                    console.log(upt);
                    document.getElementById("userInputClan").value = upt;
                    break;
                case 4:
                    upt = '<?php echo $pcIgn; ?>';
                    console.log(upt);
                    document.getElementById("userInputClan").value = upt;
                    break;
            }
        */
            //document.getElementById("userInputClan").value = platformType;
            //console.log(platformType);
            });    
            
         
            
            
        </script>    
        
            <div class="wrapper" id="buttonSearchClan">
                <div class='bttn out'>
                    <span>Search</span>
                    <div class='corners top'></div>
                    <div class='corners bottom'></div>
                </div>
            </div>
        </div><!-- End Search -->
        
        
        <div id="mainClanStats" class="hide">
            <div id="clanName" class="display-2" style="border-bottom:solid 2px;border-width:thin;font-size:40px;text-align:center;width:600px;margin-left:auto;margin-right:auto;"></div>
            <div id="clanMotto" style="font-weight:bold;text-align:center;padding-bottom:15px;"></div>
            <div id="clanAbout"></div>
            <div id="clanTag"></div>
        </div>
        
        <div id="usernameClan" class="hide"></div>
        <div id="memberIdClan" class="hide"></div>
        <div id="platformTypeClan" class="hide"></div>
        
        <!-- Clan Banner Info -->
        <div id="decalId"></div>
        <div id="decalColorId"></div>
        <div id="decalBackgroundColorId"></div>
        <div id="gonfalonId"></div>
        <div id="gonfalonColorId"></div>
        <div id="gonfalonDetailId"></div>
        <div id="gonfalonDetailColorId"></div>
        
        <img id="decalIdImg">
        <img id="decalColorIdImg">
        <img id="decalBackgroundColorIdImg">
        <img id="gonfalonIdImg">
        <img id="gonfalonColorIdImg">
        <img id="gonfalonDetailIdImg">
        <img id="gonfalonDetailColorIdImg">
        
        
        
        
        
    <!--
    SELECT * 
        FROM Decals 
        WHERE `id` = (
            CASE `id`
            WHEN (id < 0) THEN (id + 4175778657)
            ELSE `id`
            END
         )
	  
-->
    
    </div><!-- End Container -->
    <script type="text/javascript" src="../js/clanStatsSearch.js"></script>
    
</body>

</html>
