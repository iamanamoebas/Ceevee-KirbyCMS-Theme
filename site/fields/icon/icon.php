<?php

class IconField extends InputField {

/* load some basic assets, stylesheet and javascript */

  static public $assets = array(
    'css' => array(
      'icon.css'
    ),
    'js' => array(
      'icon.js'
    )
  );

public function input() {
  $input = parent::input();
  $input->addClass('icon_text');
  $input->data('field','iconfield');
  return $input;
}
}

?>