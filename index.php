<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=false;">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Master Estate Agent</title>
    <link rel="stylesheet" href="src/core/style.min.css">
</head>

<body>
    <header>
        <?php include'strip/navigation.php' ?>

    </header>
    <section>
        <?php include'strip/header_slide.php' ?>
    </section>
    <section>
        <?php include'strip/property_search.php' ?>
        Landing
        <?php include'strip/landing/property_search.php' ?>
        Results
        <?php include'strip/property_search/property_search.php' ?>
    </section>
    <script type="text/javascript" src="node_modules\jquery\dist\jquery.min.js"></script>
    <script type="text/javascript" src="node_modules\bootstrap\dist\js\bootstrap.min.js"></script>
    <!-- <script src="src\core\script.min.js"></script> -->
</body>

</html>