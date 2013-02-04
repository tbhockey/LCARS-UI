$('document').ready(function() {

  var audioBeep = $('#beep')[0]

  $('li.expandable').each(function() {
  	$(this).click(function() {
  		$('#selected').removeAttr('id')
  		$(this).attr('id', 'selected')
      if ($('#audioSwitch').hasClass('active')) {
        audioBeep.play()
      }
  	})
  })

  // Toggle icon active status
  $('icon').click( function() {
    $(this).toggleClass('active')
  })

  $('.btn').click( function() {
    $(this).toggleClass('btn-active')
    if ($('#audioSwitch').hasClass('active')) {
      audioBeep.play()
    }
  })

  // Set dimensions
  setDimensions = function() {
    var windowHeight = $(window).height() - 40
    var windowWidth = $(window).width() - 40
    $('#nav ul').css('height', windowHeight + 'px')
    $('.hr-top').css('width', (windowWidth - $('#nav ul').width()) + 'px')
    $('.hr-top').css('margin-left', $('#nav ul').width() + 'px')
    $('.hr-bottom').css('width', (windowWidth - $('#nav ul').width()) + 'px')
    $('.hr-bottom').css('margin-left', $('#nav ul').width() + 'px')
  }

  // Initiate
  initFastButtons()
  setDimensions()

  $(window).resize(function() {
  	setDimensions()
  })

})