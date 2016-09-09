//////////////////////////////////////////////////////////////////
// CHECK HTML-CLASS CHANGE
//////////////////////////////////////////////////////////////////

/*
(function( func ) {
  $.fn.addClass = function() {
    func.apply( this, arguments );
    this.trigger('classChanged');
    return this;
  }
})($.fn.addClass);

(function( func ) {
  $.fn.removeClass = function() {
    func.apply( this, arguments );
    this.trigger('classChanged');
    return this;
  }
})($.fn.removeClass);

var statusCheck = false;

function statusChecker()
  {
console.log('[status] check');

  if($('html').attr('class') != 'nprogress-busy')
    {
  clearInterval(checkStatus);
  statusCheck = false;
  console.log('[status] done');
  set_icons(0);
    }
  }

$('html').on('classChanged', function()
  {
  if($('html').attr('class') == 'nprogress-busy' && !statusCheck)
    {
  statusCheck = true;
  checkStatus = setInterval(function(){statusChecker();},10);
    }
  });
*/

//////////////////////////////////////////////////////////////////
// EXTEND LOADER FUNCTION, FIRE WHEN READY
//////////////////////////////////////////////////////////////////

/*
var progressCheck = 0;

NProgress.done = (function()
  {
var NProgressFinished = NProgress.done;
return function()
  {
progressCheck++;
console.log('[status] check');

var result = NProgressFinished.apply(this, arguments);

  if(progressCheck == 2)
    {
  progressCheck = 0;
  console.log('[status] done');
  setTimeout(function(){set_icons(0);},0);
    }

return result;
  };
  }());
*/

//////////////////////////////////////////////////////////////////
// EXTEND LOADER FUNCTION, FIRE BEFORE - AND AFTER
//////////////////////////////////////////////////////////////////

/*
NProgress.done = (function()
  {
var NProgressDone = NProgress.done;
  return function()
    {
  var result = NProgressDone.apply(this, arguments);
  setTimeout(function(){set_icons(0);},10);
  return result;
    };
  }());
*/

$(document).ajaxSuccess(function()
  {
// if($('.message-content').length)
  {
// set_icons(0);
  }
  });

$.fn.iconfield = function()
  {
set_icons(0);
  }

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

/* give us some rest... */

var timeOut = 500;

/* update all icon-fields on the page (pageload / -change or modal-entry) */

function set_icons(callerID)
  {

  $('input.icon_text').each(function()
    {
  icon_img = $(this).val().replace(/\s+/g,'').toLowerCase();
  icon_img.length<3?icon_img = 'file-picture-o':icon_img = icon_img;
  $(this).next().find('i.fa').removeClass().addClass('icon kirby-icon fa fa-'+icon_img);
    });

var msg;
callerID == 0?msg = 'all icon-fields set by pageload / -change':msg = 'modal icon changed by edit-button';
console.log('[iconfield] '+msg);
  }

/* update a single icon-field, when the icon-field is altered */

function set_icon()
  {
$(this).val($(this).val().replace(/\s+/g,'').toLowerCase());
icon_img = $(this).val();
icon_img.length<3?icon_img = 'file-picture-o':icon_img = icon_img;
$(this).next().find('i.fa').removeClass().addClass('icon fa fa-'+icon_img).parent().removeClass().addClass('field-icon icon-change');
setTimeout(function(){$('.field-icon').removeClass('icon-change');},750);
console.log('[iconfield] current icon updated');
  }

/* wait 'till the page is loaded and all is clear */

/* initially fire all icon-fields */

// $(document).ready(function()
$(function()
  {
// set_icons(0);

$(document).on('blur','input.icon_text',set_icon);

/* ...and also update icons in a modal, after some rest */

  setTimeout(function()
    {
  $('.structure-edit-button').on('click',function()
    {
  setTimeout(function(){set_icons(1);},timeOut);
    });

  console.log('[iconfield] modal icons fired');
    },timeOut);

  });