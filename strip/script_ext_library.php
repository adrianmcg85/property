<?php if($_SERVER['SERVER_NAME'] === 'localhost'):?>
<?php if(substr(basename($_SERVER['SCRIPT_NAME']),0,5) === "index"):?>
<p>index</p>
    <?php include 'strip/script_ext_library.php'?>
<?php else: ?>
<p>not index</p>
    <?php include '../strip/script_ext_library.php'?>
<?php endif ?>
<?php else: ?>
<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<?php endif ?>
