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
  <p>
    This site is a basic security system site. I got the idea for it one day when 
    I briefly worked as a security guard waiting for my federal job to start. There 
    was this monitor up on the wall that showed all of the buildings on site. If there 
    was an issue, like a fire alarm, the building that would have the issue would start 
    to light up. I want to recreate a similar thing with this. 
  </p>
  <p>
    The true purpose of this is to build something in PHP again and to use some vanilla 
    JavaScript. Both of these tools I've not used in quite some time. I've just been doing 
    so many python and vue.js projects one after another that it may be almost a year since 
    I've done a PHP project - time really fly's by!
  </p>
</section>

<?php require APPROOT . "/views/inc/footer.php"; ?>