<?php

$shouldUpload = false;


    // if (!isset($_FILES['upfile']['error']) || is_array($_FILES['upfile']['error']) ) 
    // {
    //     throw new RuntimeException('Invalid parameters.');
    // }

    // $file = 

//this is to call a new request to get all the data for a user
if(isset($_GET['file']))
{
    $fileName = $_GET['file'];
    $shouldUpload = true;
}


if($shouldUpload)
{
	//echo "going to upload";

	uploadFile($fileName);
}

function uploadFile($fileName)
{
	//databse credential info
   // $username='socialtyze_api';// test api account = socialtyze_apitest
   // $password='s5xbnxptgvt7';
    $URL= 'https://us-central1-lustrous-spirit-170901.cloudfunctions.net/song-upload/';

    //echo "fileName: ". $fileName;

    $api_data = array(
        'file'     => $fileName,
        'isSet' => false,
        'title' => "file_name_test"
    );

/*
    $ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $URL);

    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    //curl_setopt($ch, CURLOPT_POST, count($api_data));
    //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($api_data));

	//curl_setopt($ch, CURLOPT_USERPWD, "username:password");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_PUT, true);
	curl_setopt($ch, CURLOPT_INFILESIZE, filesize($fileName));

	$fp = fopen($fileName, "r");
	curl_setopt($ch, CURLOPT_INFILE, $fp);

	$result = curl_exec($ch);

	curl_close($ch);
	fclose($fp); */

/*
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$URL);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_POST, count($api_data));
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($api_data));
    //curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC); enabled authentication
    //curl_setopt($ch, CURLOPT_USERPWD, "$username:$password"); send password and user
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);   //get status code
    $result=curl_exec ($ch);
    curl_close ($ch);

    $jsonResult = json_decode($result);
*/
    //var_dump($jsonResult);

    //$encoded = json_decode($result);

header('Content-Type: application/json');

    echo $result;
}






?>