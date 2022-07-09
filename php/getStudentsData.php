<?php

    include 'config.php';
    $id = $_POST["id"];
    $sql = "SELECT * FROM student WHERE studentid = '$id'";
    $result = mysqli_query($conn, $sql);
    $studResults = '';
    while($row = mysqli_fetch_assoc($result)){
        $studResults .= '<tr>
                            <td>'.$row['code'].'</td>
                            <td>'.$row['cat1'].'</td>
                            <td>'.$row['cat2'].'</td>
                            <td>'.$row['exam'].'</td>
                            <td>'.$row['total'].'</td>
                            <td>'.$row['grade'].'</td>
                        </tr>
                        ';
    } 
    echo '<tr class="resultsTitle">
                <th>CODE</th>
                <th>CAT1</th>
                <th>CAT2</th>
                <th>EXAM</th>
                <th>TOTAL</th>
                <th>GRADE</th>
            </tr>'.$studResults;

?>