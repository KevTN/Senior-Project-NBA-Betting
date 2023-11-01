<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "teaspot";
$type = "comment post";

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['news_email'])) {
    $email = $_POST['email'];
    $type = "newsletter addition";
    $error = '';
    $success = '';
    // validate the email using a regex pattern
    $pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/';
    if (!preg_match($pattern, $email)) {
        $error = "Invalid email format";
    } else {
        // check if the email already exists in the database
        $sql_check = "SELECT * FROM newsletter WHERE email = '$email'";
        $result = $conn->query($sql_check);
        if ($result->num_rows > 0) {
            $error = "Email already exists in the newsletter list";
        } else {
            // insert the new email into the database
            $sql_insert = "INSERT INTO newsletter (email) VALUES ('$email')";
            if ($conn->query($sql_insert) === TRUE) {
                $success =  "Email successfully added";
                // Log the email into logger database
                $sql_logger = "INSERT INTO logger(type) VALUES ('$type')";
                if ($conn->query($sql_logger) !== TRUE) {
                    echo "Error logging newsletter email: " . $conn->error;
                }
            } else {
                $error =  "Error saving email: " . $conn->error;
            }
        }
    }
}



// handle login form submission
if (isset($_POST['login'])) {
    $user = $_POST['username'];
    $password = $_POST['password'];
    $type = "admin login";

    // check if username and password match
    $sql = "SELECT username from teaspot.logindb WHERE username = '$user' AND password = '$password' LIMIT 1";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        // login successful
        setcookie('logged_in', true, time() + 1800, '/');
        echo "Login successful";
        // redirect to home page or another page
        header("Location: ../index.php");
        exit();
    } else {
        // login failed
        $error = "Incorrect username or password";
    }
}


// close database connection
$conn->close();
?>
