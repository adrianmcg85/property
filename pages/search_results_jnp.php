<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Master Estate Agent</title>
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

    <link rel="stylesheet" href="../src/core/style.min.css">
    <link rel="stylesheet" href="../src/jnp/style.min.css">
</head>

<body>
    <header>
        <?php include'../strip/navigation.php' ?>

    </header>
    <section>
    <?php include"../strip/property_search/property_search.php"?>
    </section>
    <section class="page_content">
    <?php include"../strip/property_search/search_results_header.php"?>
    <?php include"../strip/property_search/search_results_list.php" ?>
    </section>
    <?php include 'strip/script_ext_library.php'?>
    <!-- <script src="src\core\script.min.js"></script> -->
</body>

</html>