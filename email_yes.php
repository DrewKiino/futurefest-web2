<?php

$email = $_POST['email'];
//email = $_POST['mce-EMAIL'];

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if($email == '') {
	//echo '<div class="error_message">Attention! Please enter a valid email address.</div>';
	exit();
}

if(!isEmail($email)) {
	//echo '<div class="error_message">Attention! You have entered an invalid e-mail address, try again.</div>';
	exit();
}

//fill in these values for with your own information
$api_key = '4a65c3a8e3c473179525c1c21e90a7e8-us16';
$list_id = '394ab877a8';
$datacenter = 'us16';
$status = 'subscribed'; //pending
/*
if(!empty($_POST['status'])){
    $status = $_POST['status'];
}
*/

$url = 'https://'.$datacenter.'.api.mailchimp.com/3.0/lists/'.$list_id.'/members/';

$username = 'apikey'; //apikey //user
$password = $api_key;

$data = array(
    'email_address' => $email,
    'status'        => $status);

$data_string = json_encode($data);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/3.0');
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$api_key");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Authorization: Basic '.base64_encode( 'user:'.$api_key )));
//curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0');
//curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT'); // method PUT
//curl_setopt($ch, CURLOPT_TIMEOUT, 10);




$results = curl_exec($ch);
//$response = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//$errors = curl_error($ch);

curl_close($ch);

echo $results;

/*
$results = array(
    'results' => $result_info,
    'response' => $response,
    'errors' => $errors
  );
*/
  // Sends data back to the page OR the ajax() in your JS
  //echo json_encode($results);
  //echo $results;


?>


