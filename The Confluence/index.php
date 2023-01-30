<?php
session_start(); // Right at the top of your script
$username = "";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>The Confluence - Destiny 2 User Searcher</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="icon" href="../assets/favicon.png">

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/loadingGraphic.css">
    <link rel="stylesheet" href="../css/expandButton.css">
    <script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
    
</head>

<header>
   <!-- Nav Menu Start -->
   
   
   
    <div class="stock"><!-- Stop inheriting of Parallax css -->
        <nav class="menu-opener">
            <div class="menu-opener-inner"></div>
        </nav>
        <nav class="menu">
            <ul class="menu-inner hide">
                <a href="#userInput" class="menu-link">
                    <li>Equipped Items</li>
                </a>
                <!--<a href="../pages/milestone.html" class="menu-link">
                    <li>Milestone Checklist</li>
                </a>-->
                <a href="../pages/pvpStats.html" class="menu-link">
                    <li>PvP Stats</li>
                </a>
                <a href="../pages/clanStats.php" class="menu-link">
                    <li>Clan</li>
                </a>
                <!--<a href="#" class="menu-link">
                    <li>Item 5</li>
                </a>-->
            </ul>
        </nav>     
        <script src="../js/menu-opener.js"></script>    
    </div><!-- Nav Menu End -->
    
    <div class="content">
        
        <h1 style="font-size:20px;padding-top:18px;" id="testText">
            <?php
                include "php/config.php";
                if(isset($_SESSION['username'])){
                    echo "Welcome ", $_SESSION['username'], "!";
                    echo '</br><button class="btn-search logButton" id=""><a href="php/logout.php" style="color:#ffffff;margin-top:0px;text-decoration:none;font-size:15px;">Logout</a></button>';
                    echo '</br><button class="btn-search logButton" id=""><a href="php/platformIGN.php" style="color:#ffffff;margin-top:0px;text-decoration:none;font-size:15px;">Change Account Info</a></button>';
                } 
                else {
                    echo '<button class="btn-search logButton" id=""><a href="php/login.php" style="color:#ffffff;margin-top:0px;text-decoration:none;font-size:15px;">Login</a></button>';
                }
            ?>

        </h1>
        
        <p id="usernameLogin" class="hide"><?php echo $_SESSION['username'] ?></p>
        <script>console.log(document.getElementById("usernameLogin").innerHTML);</script>
        <h1 class=" display-2 titleText" style="margin-top:150px;text-shadow: 2px 2px 2px #000000;font-size: 70px;">The Confluence</h1>
           
        <h3 class="titleText" style="text-shadow: 2px 2px 2px #000000;margin-left:auto;margin-right:auto;">Destiny 2 User Searcher</i>
        
        <!-- Animation Image -->
        <div id="loadingGraphic" style="margin-top: 50px;">
            <svg width="170" height="170" viewBox="0 0 100 100" style="margin-left: auto;margin-right: auto;">
            <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
            <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
            <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
            <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
            </svg>
        </div><!-- End Anim -->
        
        
        <h1 class="display-2 titleText2" style="margin-top:50px;text-shadow: 2px 2px 2px #000000;font-size: 40px;overflow-wrap: normal;">Username Search</h1>
        
        <div id="mainInput" class="container" style="text-align: center;">
            <input type="search" style="position: relative; border-radius:5px;height:35px;margin-left: auto;margin-right: auto; margin-bottom:10px;" id="userInput" name="q">				
            <div id="errorShow" class="hide">Player Not Found</div>
        
            <!-- Radio Platform Selectors -->
            <h3 class="display-2 titleText2" style="text-shadow: 2px 2px 2px #000000; font-size: 30px;">Select Platform</h3>
            <div class="container col-md" style="max-width: 600px;">
                <div class="radio-tile-group row">
                    <div class="input-container col-md">
                        <input id="psninput" class="radio-button" type="radio" name="platformType" value="2" />
                        <div class="radio-tile">
                            <label for="radiopsn" class="radio-tile-label">PSN</label>
                        </div>
                    </div>

                    <div class="input-container col-md">
                        <input id="xboxinput" class="radio-button" type="radio" name="platformType" value="1"/>
                        <div class="radio-tile">
                            <label for="radioxbox" class="radio-tile-label">Xbox</label>
                        </div>
                    </div>

                    <div class="input-container col-md">
                        <input id="pcinput" class="radio-button" type="radio" name="platformType" value="3"/>
                        <div class="radio-tile">
                            <label for="radiopc" class="radio-tile-label">PC</label>
                        </div>
                    </div>
                </div>
            </div><!-- End Radio -->
        
        <hr style="border-bottom: 2px solid #ffffff; max-width:600px;" />
        <button class="btn-search" id="buttonSearch" style="cursor:pointer;">Search</button>
    </div><!-- End Usersearch -->
	
	
	

        
    </div><!-- End Content -->
	
	
    <!--<script src="../js/parallaz.js"></script>-->
 
 
</header>

<body>
    
    <!--<button id="buttonSearch">Search</button>-->
    <div id="mainInfo" style="display:none;">
        <p id="userName"></p>
        <p id="memberId"></p>
        <p id="platformTypeNumber"></p>
    </div>
    <div class="container-fluid" style="margin-top:60px;">
        <div id="main" class="row">
		
			<!-- ----------- -->
			<!-- Character 1 -->
			<!-- ----------- -->
            <div class="col-md text-center" id="character1">
                <p id="characterNum1" class="characterNum hide"></p>
				<div style="position: absolute;top:0%;left:43%;">
					<p id="characterID1"></p>
					<p id="class1" class="nameplateInfo"></p>
					<p id="lightLevel1" class="lightLevel nameplateInfo"></p>
				</div>
                <p><img id="emblem1" /></p>
				
				<div class="wrapper" id="showc1Items">
                    <div class='bttn out'>
                        <span>Show Items</span>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </div>
				<!--<button type="button" id="showc1Items">Show Items</button>-->
				<br />
				<div class="container" id="c1Items" style="display:none;padding-bottom:20px;">
				    <div class="row">
                        <div class="col-md-4 text-center">
                          
<!-- Item 1 -->
                            <li id="c1Item1"></li>
                            <img id="c1Item1Img" class="itemIcons"/><!--onclick="openNav();" style="cursor:pointer;"-->
                            <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perkImg1" class="perkImg"/>
                                    <div id="perkName1" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perkImg2" class="perkImg"/>
                                    <div id="perkName2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perkImg3" class="perkImg"/> 
                                    <div id="perkName3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg4" class="perkImg"/> 
                                    <div id="perkName4" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg5" class="perkImg"/> 
                                    <div id="perkName5" class="text-center perkName"></div>
                                </div>
                            </div>
                            
                            <!-- Item 2 -->
					        <li id="c1Item2"></li>
					        <img id="c1Item2Img" class="itemIcons"/>
					        <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perkImg1_2" class="perkImg"/>
                                    <div id="perkName1_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perkImg2_2" class="perkImg"/>
                                    <div id="perkName2_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perkImg3_2" class="perkImg"/> 
                                    <div id="perkName3_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg4_2" class="perkImg"/> 
                                    <div id="perkName4_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg5_2" class="perkImg"/> 
                                    <div id="perkName5_2" class="text-center perkName"></div>
                                </div>
                            </div>

					        <li id="c1Item3"></li>
					        <img id="c1Item3Img" class="itemIcons"/>
                           <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perkImg1_3" class="perkImg"/>
                                    <div id="perkName1_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perkImg2_3" class="perkImg"/>
                                    <div id="perkName2_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perkImg3_3" class="perkImg"/> 
                                    <div id="perkName3_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg4_3" class="perkImg"/> 
                                    <div id="perkName4_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perkImg5_3" class="perkImg"/> 
                                    <div id="perkName5_3" class="text-center perkName"></div>
                                </div>
                            </div>
                        </div><!-- End row1 -->
                        
                        <div class="col-md-4 text-center">
                            <li id="c1Item4"></li>
					        <img id="c1Item4Img" class="itemIcons"/>
					        <li id="c1Item5"></li>
                            <img id="c1Item5Img" class="itemIcons"/>
                            <li id="c1Item6"></li>
                            <img id="c1Item6Img" class="itemIcons"/>
					        <li id="c1Item7"></li>
					        <img id="c1Item7Img" class="itemIcons"/>
					        <li id="c1Item8"></li>
					        <img id="c1Item8Img" class="itemIcons"/>
                        </div>
					    <div class="col-md-4 text-center">
                            <li id="c1Item9"></li>
					        <img id="c1Item9Img" class="itemIcons"/>
					        <li id="c1Item10"></li>
                            <img id="c1Item10Img" class="itemIcons"/>
					        <li id="c1Item11"></li>
					        <img id="c1Item11Img" class="itemIcons"/>
					        <li id="c1Item12"></li>
					        <img id="c1Item12Img" />
                            <li id="c1Item13" class="hide"></li>
					        <img id="c1Item13Img" class="hide" />
                            <li id="c1Item14" class="hide"></li>
					        <img id="c1Item14Img" class="hide" />
                            <li id="c1Item15" class="hide"></li>
					        <img id="c1Item15Img" class="hide"/>
							
                        </div>
				   </div> 
				</div>
				
                <li id="c1InstanceID1" class="hide"></li>
                <li id="c1InstanceID1" class="hide"></li>
                <li id="c1InstanceID2" class="hide"></li>
                <li id="c1InstanceID3" class="hide"></li>
                <li id="c1InstanceID4" class="hide"></li>
                <li id="c1InstanceID5" class="hide"></li>
                <li id="c1InstanceID6" class="hide"></li>
                <li id="c1InstanceID7" class="hide"></li>
                <li id="c1InstanceID8" class="hide"></li>
                <li id="c1InstanceID9" class="hide"></li>
                <li id="c1InstanceID10" class="hide"></li>
                <li id="c1InstanceID11" class="hide"></li>
                <li id="c1InstanceID12" class="hide"></li>
                <li id="c1InstanceID13" class="hide"></li>
                <li id="c1InstanceID14" class="hide"></li>
                <li id="c1InstanceID15" class="hide"></li>
               
               
           
            </div>
			
			<!-- ----------- -->
			<!-- Character 2 -->
			<!-- ----------- -->
            <div class="col-md text-center" id="character2">
                <p id="characterNum2" class="characterNum hide"></p>
				<div style="position: absolute;top:0%;left:43%;">
					<p id="characterID2"></p>
					<p id="class2" class="nameplateInfo"></p>
					<p id="lightLevel2" class="lightLevel nameplateInfo"></p>
				</div>
                <p><img id="emblem2" /></p>
                
                <div class="wrapper" id="showc2Items">
                    <div class='bttn out'>
                        <span>Show Items</span>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </div>
				<!--<button type="button" id="showc1Items">Show Items</button>-->
				<br />
				<div class="container" id="c2Items" style="display:none;padding-bottom:20px;">
				    <div class="row">
                        <div class="col-md-4 text-center">
                          
<!-- Item 2 -->
                            <li id="c2Item1"></li>
                            <img id="c2Item1Img" class="itemIcons"/><!--onclick="openNav();" style="cursor:pointer;"-->
                            <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk2Img1" class="perkImg"/>
                                    <div id="perk2Name1" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk2Img2" class="perkImg"/>
                                    <div id="perk2Name2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk2Img3" class="perkImg"/> 
                                    <div id="perk2Name3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img4" class="perkImg"/> 
                                    <div id="perk2Name4" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img5" class="perkImg"/> 
                                    <div id="perk2Name5" class="text-center perkName"></div>
                                </div>
                            </div>
                            
                            <!-- Item 2 -->
					        <li id="c2Item2"></li>
					        <img id="c2Item2Img" class="itemIcons"/>
					        <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk2Img1_2" class="perkImg"/>
                                    <div id="perk2Name1_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk2Img2_2" class="perkImg"/>
                                    <div id="perk2Name2_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk2Img3_2" class="perkImg"/> 
                                    <div id="perk2Name3_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img4_2" class="perkImg"/> 
                                    <div id="perk2Name4_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img5_2" class="perkImg"/> 
                                    <div id="perk2Name5_2" class="text-center perkName"></div>
                                </div>
                            </div>

					        <li id="c2Item3"></li>
					        <img id="c2Item3Img" class="itemIcons"/>
                           <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk2Img1_3" class="perkImg"/>
                                    <div id="perk2Name1_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk2Img2_3" class="perkImg"/>
                                    <div id="perk2Name2_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk2Img3_3" class="perkImg"/> 
                                    <div id="perk2Name3_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img4_3" class="perkImg"/> 
                                    <div id="perk2Name4_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk2Img5_3" class="perkImg"/> 
                                    <div id="perk2Name5_3" class="text-center perkName"></div>
                                </div>
                            </div>
                        </div><!-- End row1 -->
                        
                        <div class="col-md-4 text-center">
                            <li id="c2Item4"></li>
					        <img id="c2Item4Img" class="itemIcons"/>
					        <li id="c2Item5"></li>
                            <img id="c2Item5Img" class="itemIcons"/>
                            <li id="c2Item6"></li>
                            <img id="c2Item6Img" class="itemIcons"/>
					        <li id="c2Item7"></li>
					        <img id="c2Item7Img" class="itemIcons"/>
					        <li id="c2Item8"></li>
					        <img id="c2Item8Img" class="itemIcons"/>
                        </div>
					    <div class="col-md-4 text-center">
                            <li id="c2Item9"></li>
					        <img id="c2Item9Img" class="itemIcons"/>
					        <li id="c2Item10"></li>
                            <img id="c2Item10Img" class="itemIcons"/>
					        <li id="c2Item11"></li>
					        <img id="c2Item11Img" class="itemIcons"/>
					        <li id="c2Item12"></li>
					        <img id="c2Item12Img" />
                            <li id="c2Item13" class="hide"></li>
					        <img id="c2Item13Img" class="hide" />
                            <li id="c2Item14" class="hide"></li>
					        <img id="c2Item14Img" class="hide" />
                            <li id="c2Item15" class="hide"></li>
					        <img id="c2Item15Img" class="hide"/>
							
                        </div>
				   </div> 
				</div>
            </div>
            
            <li id="c2InstanceID1" class="hide"></li>
            <li id="c2InstanceID1" class="hide"></li>
            <li id="c2InstanceID2" class="hide"></li>
            <li id="c2InstanceID3" class="hide"></li>
            <li id="c2InstanceID4" class="hide"></li>
            <li id="c2InstanceID5" class="hide"></li>
            <li id="c2InstanceID6" class="hide"></li>
            <li id="c2InstanceID7" class="hide"></li>
            <li id="c2InstanceID8" class="hide"></li>
            <li id="c2InstanceID9" class="hide"></li>
            <li id="c2InstanceID10" class="hide"></li>
            <li id="c2InstanceID11" class="hide"></li>
            <li id="c2InstanceID12" class="hide"></li>
            <li id="c2InstanceID13" class="hide"></li>
            <li id="c2InstanceID14" class="hide"></li>
            <li id="c2InstanceID15" class="hide"></li>
                
			<!-- ----------- -->
			<!-- Character 3 -->
			<!-- ----------- -->
            <div class="col-md text-center" id="character3">
                <p id="characterNum3" class="characterNum hide"></p>
				<div style="position: absolute;top:0%;left:43%;">
					<p id="characterID3" style="display:none;"></p>
					<p id="class3" class="nameplateInfo"></p>
					<p id="lightLevel3" class="lightLevel nameplateInfo"></p>
				</div>
                <p><img id="emblem3" /></p>
				
				<div class="wrapper" id="showc3Items">
                    <div class='bttn out'>
                        <span>Show Items</span>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </div>
				<div class="container" id="c3Items" style="display:none;padding-bottom:20px;">
				    <div class="row">
                        <div class="col-md-4 text-center">
                          
<!-- Item 3 -->
                            <li id="c3Item1"></li>
                            <img id="c3Item1Img" class="itemIcons"/><!--onclick="openNav();" style="cursor:pointer;"-->
                            <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk3Img1" class="perkImg"/>
                                    <div id="perk3Name1" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk3Img2" class="perkImg"/>
                                    <div id="perk3Name2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk3Img3" class="perkImg"/> 
                                    <div id="perk3Name3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img4" class="perkImg"/> 
                                    <div id="perk3Name4" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img5" class="perkImg"/> 
                                    <div id="perk3Name5" class="text-center perkName"></div>
                                </div>
                            </div>
                            
                            <!-- Item 2 -->
					        <li id="c3Item2"></li>
					        <img id="c3Item2Img" class="itemIcons"/>
					        <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk3Img1_2" class="perkImg"/>
                                    <div id="perk3Name1_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk3Img2_2" class="perkImg"/>
                                    <div id="perk3Name2_2" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk3Img3_2" class="perkImg"/> 
                                    <div id="perk3Name3_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img4_2" class="perkImg"/> 
                                    <div id="perk3Name4_2" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img5_2" class="perkImg"/> 
                                    <div id="perk3Name5_2" class="text-center perkName"></div>
                                </div>
                            </div>

					        <li id="c3Item3"></li>
					        <img id="c3Item3Img" class="itemIcons"/>
                           <div class="row" style="border:2px solid;padding-bottom:5px;">
                                <div class="col-md text-center">
                                    <img id="perk3Img1_3" class="perkImg"/>
                                    <div id="perk3Name1_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center">
                                    <img id="perk3Img2_3" class="perkImg"/>
                                    <div id="perk3Name2_3" class="text-center perkName"></div>
                                </div>
                                <div class="col-md text-center"> 
                                    <img id="perk3Img3_3" class="perkImg"/> 
                                    <div id="perk3Name3_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img4_3" class="perkImg"/> 
                                    <div id="perk3Name4_3" class="text-center perkName"></div>
                                </div>
								<div class="col-md text-center"> 
                                    <img id="perk3Img5_3" class="perkImg"/> 
                                    <div id="perk3Name5_3" class="text-center perkName"></div>
                                </div>
                            </div>
                        </div><!-- End row1 -->
                        
                        <div class="col-md-4 text-center">
                            <li id="c3Item4"></li>
					        <img id="c3Item4Img" class="itemIcons"/>
					        <li id="c3Item5"></li>
                            <img id="c3Item5Img" class="itemIcons"/>
                            <li id="c3Item6"></li>
                            <img id="c3Item6Img" class="itemIcons"/>
					        <li id="c3Item7"></li>
					        <img id="c3Item7Img" class="itemIcons"/>
					        <li id="c3Item8"></li>
					        <img id="c3Item8Img" class="itemIcons"/>
                        </div>
					    <div class="col-md-4 text-center">
                            <li id="c3Item9"></li>
					        <img id="c3Item9Img" class="itemIcons"/>
					        <li id="c3Item10"></li>
                            <img id="c3Item10Img" class="itemIcons"/>
					        <li id="c3Item11"></li>
					        <img id="c3Item11Img" class="itemIcons"/>
					        <li id="c3Item12"></li>
					        <img id="c3Item12Img" />
                            <li id="c3Item13" class="hide"></li>
					        <img id="c3Item13Img" class="hide" />
                            <li id="c3Item14" class="hide"></li>
					        <img id="c3Item14Img" class="hide" />
                            <li id="c3Item15" class="hide"></li>
					        <img id="c3Item15Img" class="hide"/>
							
                        </div>
				   </div> 
				</div>
            </div>
            
            <li id="c3InstanceID1" class="hide"></li>
            <li id="c3InstanceID1" class="hide"></li>
            <li id="c3InstanceID2" class="hide"></li>
            <li id="c3InstanceID3" class="hide"></li>
            <li id="c3InstanceID4" class="hide"></li>
            <li id="c3InstanceID5" class="hide"></li>
            <li id="c3InstanceID6" class="hide"></li>
            <li id="c3InstanceID7" class="hide"></li>
            <li id="c3InstanceID8" class="hide"></li>
            <li id="c3InstanceID9" class="hide"></li>
            <li id="c3InstanceID10" class="hide"></li>
            <li id="c3InstanceID11" class="hide"></li>
            <li id="c3InstanceID12" class="hide"></li>
            <li id="c3InstanceID13" class="hide"></li>
            <li id="c3InstanceID14" class="hide"></li>
            <li id="c3InstanceID15" class="hide"></li>
            
            
        </div>
    </div><!-- End container -->
    
    
<script>
function openNav() {
    document.getElementById("itemInfoWindow").style.width = "150px";
    document.getElementById("itemInfoWindow").style.height = "500px";
}

function closeNav() {
    document.getElementById("itemInfoWindow").style.width = "0px";
    document.getElementById("itemInfoWindow").style.height = "0px";
}    
    
</script>

<script type="text/javascript" src="../js/userSearch.js"></script>
<script type="text/javascript" src="../js/itemSearch.js"></script>
<script type="text/javascript" src="../js/statDefinition.js"></script>
<script type="text/javascript" src="../js/bootstrap.js"></script>


</body>
    
</html>