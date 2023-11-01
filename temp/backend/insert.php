<?php
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

if(!empty($username) || !empty($password || !empty($email))){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "cred";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if(mysqli_connect_error()){
        die('Connection Error('. mysqli_connect_error().')'. mysqli_connect_error());
    }else{
        $SELECT = "SELECT email from login Where email = ? Limit 1";
        $INSERT = "INSERT into login (username, password, email) values(?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum == 0){
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sss",$username, $password, $email);
            $stmt->execute();
            header("Location: login.php");

        }else{
            echo "Someone already registered with this email";
        }
        $stmt->close();
        $conn->close();
    }

}else{
    echo "All fields are required";
    die();
}
?>