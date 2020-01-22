<?php
class dbh {
public function connect(){
    $host = "localhost";
    $user = "root";
    $pword = "";
    $dbname = "estate agent";

    try {
        $dsn = "mysql:host=" . $host . "; dbname=" . $dbname;
        $pdo = new PDO($dsn, $user, $pword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        echo "failed connection ".$e->getMessage();
    }

}
}
?>