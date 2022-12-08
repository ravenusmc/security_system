<?php require APPROOT . "/views/inc/header.php"; ?>
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/generic.css">
<link rel='stylesheet' href="<?php echo URLROOT; ?>/css/landing.css">

<header role='banner' class="jumbotron-style jumbotron jumbotron-fluid text-center">
  <div class='jumbotron_div_area'>
    <h1 class='display-3 title-font'><?php echo $data['title'] ?></h1>
    <p class='lead title-font'><?php echo $data['description'] ?></p>
  </div>
</header>

<!-- <h1><?php // echo $data['title']; ?></h1> -->

<section>
  <p>This site...</p>
</section>

<?php require APPROOT . "/views/inc/footer.php"; ?>