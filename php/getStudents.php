<?php

    include 'config.php';
    $className = $_POST["data"];
    $sql = "SELECT DISTINCT fname, lname, studentid FROM student WHERE class = '$className' ORDER BY fname";
    $result = mysqli_query($conn, $sql);
    $studNames = "";
    while($row = mysqli_fetch_assoc($result)){
        $studNames .= "<p data-stud-id=".$row["studentid"].">".$row["fname"]. " " .$row["lname"]. "</p>";
    }
    echo $studNames;
    
?>