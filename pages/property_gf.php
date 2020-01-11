<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Master Estate Agent</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

    <link rel="stylesheet" href="../src/core/style.min.css">
    <link rel="stylesheet" href="../src/gf/style.min.css">

</head>

<body>
    <header>
        <?php include'../strip/navigation.php' ?>

    </header>
    <section class="pre_content">
    <?php include "../strip/property/property_header.php"?>  
    </section>
    <section class="post_content">
        <div class="property_content container">
        <?php include "./property/property_info_col.php"?> 
        <?php include './property/property_header2_col.php' ?>
        </div>
    </section>
    <script type="module" src="..\node_modules\bootstrap\js\src\carousel.js"></script>
    <script type="module" src="..\node_modules\bootstrap\js\src\util.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- <script src="src\core\script.min.js"></script> -->
    <script type="text/javascript" src="../src/core/js/property.js"></script>
</body>

</html>