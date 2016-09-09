<?php snippet('header') ?>

   <!-- Home
   ================================================== -->
   <header id="home">

      <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline"><?php echo $page->title()->html() ?></h1>
            <span><h3><?php echo $page->text()->kirbytext() ?></h3></span>
           <hr />
            <ul>
          <ul class="social">
  <?php $icons = array_slice($page->icons()->yaml(),0); ?>
  <?php foreach($icons as $icon): ?>
    <li><a target="_blank" href="<?php echo $icon['link']; ?>"class="icon fa-<?php echo $icon['icon']; ?>"><span class="label"><?php echo $icon['label']; ?></span></a></li>
  <?php endforeach ?>
  </ul>
        </ul>
         </div>
      </div>

   </header> <!-- Home End -->

<?php snippet('footer') ?>


</body>

</html>
