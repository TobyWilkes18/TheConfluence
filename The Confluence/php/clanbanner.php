<?php

    $decalId = $_POST['decalId'];
    $decalColorId = $_POST['decalColorId'];
    $decalBackgroundColorId = $_POST['decalBackgroundColorId'];
    $gonfalonId = $_POST['gonfalonId'];
    $gonfalonColorId = $_POST['gonfalonColorId'];
    $gonfalonDetailId = $_POST['gonfalonDetailId'];
    $gonfalonDetailColorId = $_POST['gonfalonDetailColorId'];
                
    $decalId = hashConvert($decalId);
    $decalColorId = hashConvert($decalColorId);
    $decalBackgroundColorId = hashConvert($decalBackgroundColorId);
    $gonfalonColorId = hashConvert($gonfalonColorId);
    $gonfalonDetailColorId = hashConvert($gonfalonDetailColorId);
    
            
    $sqlQueries = array();
    $sqlQueries[0] = "SELECT `json` FROM `Decals` WHERE `id` = '$decalId'";
    $sqlQueries[1] = "SELECT `json` FROM `DecalPrimaryColors` WHERE `id` = '$decalColorId'";
    $sqlQueries[2] = "SELECT `json` FROM `DecalSecondaryColors` WHERE `id` = '$decalBackgroundColorId'";
    $sqlQueries[3] = "SELECT `json` FROM `Gonfalons` WHERE `id` = '$gonfalonId'";
    $sqlQueries[4] = "SELECT `json` FROM `GonfalonColors` WHERE `id` = '$gonfalonColorId'";
    $sqlQueries[5] = "SELECT `json` FROM `GonfalonDetails` WHERE `id` = '$gonfalonDetailId'";
    $sqlQueries[6] = "SELECT `json` FROM `GonfalonDetailColors` WHERE `id` = '$gonfalonDetailColorId'";
            

    $imageId = array();
    $imageId[0] = "document.getElementById('decalsIdImg').src";
    $imageId[1] = "document.getElementById('decalColorIdImg').src";
    $imageId[2] = "document.getElementById('decalBackgroundColorIdImg').src";
    $imageId[3] = "document.getElementById('gonfalonIdImg').src";
    $imageId[4] = "document.getElementById('gonfalonColorIdImg').src";
    $imageId[5] = "document.getElementById('gonfalonDetailIdImg').src";
    $imageId[6] = "document.getElementById('gonfalonDetailColorIdImg').src";

    $host = "localhost";
    $user = "id7219247_confadmin";
    $password = "ConfAdmin18";
    $database = "id7219247_userdata";

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);


    $connect = mysqli_connect($host, $user, $password, $database);

    if($connect === false){ 
        die("ERROR: Could not connect. "  
            . mysqli_connect_error()); 
    } 

    $max = sizeof($sqlQueries);
    for($i = 0; $i < $max;$i++){
        $getQuery = $sqlQueries[i];
        $tableData = mysqli_query($connect, $getQuery);
        echo "$imageId[i] = $tableData.foregroundImagePath";  
    }



    //$getQuery = "SELECT * FROM `users` WHERE `id` = '$id'";
    //$tableData = mysqli_query($connect, $getQuery);
    //$result = mysqli_fetch_assoc($tableData);
    //$update_Result = mysqli_query($connect, $update_Query);

            
            function hashConvert($val){
                $val = intval($val);
                    if ($val and (1 << (32 - 1)));
                    $val = $val - (1 << 32);
                    echo $val;
            }


            //debug_to_console($decalId);

            /*function debug_to_console( $data ) {
                $output = $data;
                if ( is_array( $output ) )
                $output = implode( ',', $output);
                echo "$output";
                //echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
            }*/

        ?>