<?php

    include 'config.php';

    $sql = "SELECT DISTINCT class FROM student ORDER BY class";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            echo '<p>'.$row["class"].'</p>';
        }
    }
    else{
        echo "0 results";
    }

?>