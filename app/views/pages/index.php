<?php require APPROOT . "/views/inc/header.php"; ?>
<header role='banner' class="jumbotron jumbotron-fluid text-center ">
  <div class='jumbotron_div_area'>
    <h1 class='display-3 font'><?php echo $data['title'] ?></h1>
    <p class='lead font'><?php echo $data['description'] ?></p>
  </div>
</header>
<h1><?php echo $data['title']; ?></h1>
<?php require APPROOT . "/views/inc/footer.php"; ?>