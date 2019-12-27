<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=false;">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Master Estate Agent</title>
    <link rel="stylesheet" href="../src/core/style.min.css">
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
        </div>
    </section>
    <script type="module" src="..\node_modules\bootstrap\js\src\carousel.js"></script>
    <script type="module" src="..\node_modules\bootstrap\js\src\util.js"></script>
    <script type="text/javascript" src="..\node_modules\jquery\dist\jquery.min.js"></script>
    <script type="text/javascript" src="..\node_modules\bootstrap\dist\js\bootstrap.min.js"></script>
    <!-- <script src="src\core\script.min.js"></script> -->
</body>

</html>