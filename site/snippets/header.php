<!DOCTYPE html>
<!--[if lt IE 8 ]><html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 8)|!(IE)]><!--><html class="no-js" lang="en"> <!--<![endif]-->
<head>

   <!--- Basic Page Needs
   ================================================== -->
   <meta charset="utf-8">
	<title><?php echo $site->title()->html() ?></title>
	<meta name="description" content="<?php echo $page->description() ?>">
	<meta name="keywords" content="<?php echo $page->keywords() ?>">

   <!-- Mobile Specific Metas
   ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <!-- Favicon
	================================================== -->
  <?php if($favicon = $site->favicon()->toFile()): ?>
  <link rel="icon" href="<?= $favicon->url() ?>" type="image/png">
  <?php endif ?>

	<!-- CSS
    ================================================== -->
   <link rel="stylesheet" href="assets/css/default.css">
	 <link rel="stylesheet" href="assets/css/layout.css">
   <link rel="stylesheet" href="assets/css/media-queries.css">
   <link rel="stylesheet" href="assets/css/magnific-popup.css">

</head>

<body>
