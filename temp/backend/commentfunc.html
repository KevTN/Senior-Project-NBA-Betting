<?php
// start the session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "teaspot";
$type = "comment post";
$page_id = $_SESSION['page_id'];

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// handle comment deletion
if (isset($_POST['delete_comment'])) {
    $comment_id = $_POST['comment_id'];
    $sql = "DELETE FROM commentdb WHERE commentID = $comment_id";
    if ($conn->query($sql) === TRUE) {
        $_SESSION['success'] = "Comment deleted successfully";
    } else {
        $_SESSION['error'] = "Error deleting comment: " . $conn->error;
    }
}

// if the form is submitted to post a comment
if (isset($_POST['http_post_comment'])) {
    $user = $_POST['user'];
    $message = $_POST['message'];

    // check user name length
    if (strlen($user) > 14) {
        // set session variable for error message
        $_SESSION['comment_error'] = 'Username is too long';
        exit;
    }

    // prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO commentdb (user, message, page_id) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $user, $message, $page_id);

    // execute the prepared statement
    if ($stmt->execute()) {
        // set session variable for success message
        $_SESSION['comment_success'] = "Comment posted successfully";

        // Log the comment into logger database
        $stmt_logger = $conn->prepare("INSERT INTO logger(user, message, type) VALUES (?, ?, ?)");
        $stmt_logger->bind_param("sss", $user, $message, $type);

        if ($stmt_logger->execute() !== TRUE) {
            echo "Error logging comment: " . $conn->error;
        }
    } else {
        // set session variable for error message
        $_SESSION['comment_error'] = "Error posting comment: " . $conn->error;
    }

// redirect back to form page

}

// on the form page, display the error message if it exists
if (isset($_SESSION['comment_error'])) {
    echo '<p><div class="error-message">' . $_SESSION['comment_error'] . '</div></p>';
    unset($_SESSION['comment_error']); // clear the error message
}
// retrieve comments from the database
$sql = "SELECT * FROM commentdb WHERE page_id = $page_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output each comment
    while ($row = $result->fetch_assoc()) {
        echo '<div class="comment-container">';
        echo '<div class="comment">';
        echo '<div class="name"><strong>' . $row['user'] . ':</strong></div>';
        echo '<div class="message-container">';
        echo '<div class="message">' . $row['message'] . '</div>';
        // show delete button only when admin is logged in
        if (isset($_COOKIE['logged_in'])) {
            echo '<form method="POST" action="" class="delete-form">
            <input type="hidden" name="comment_id" value="' . $row['commentID'] . '">
            <button type="submit" class="delete-button-trash" name="delete_comment">
            <img src="../assets/svg/trash.svg" alt="Delete">
            </button>
            </form>';
        }
        echo '</div>'; // message-container
        echo '</div>'; // comment
        echo '</div>'; // comment-container
    }
} else {
    echo '<p>No comments yet</p>';
}

// close database connection
$conn->close();
?>
