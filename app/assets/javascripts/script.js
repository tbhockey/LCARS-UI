$('document').ready(function() {

  var audioBeep = $('#beep')[0]
  var audioOpen = $('#open')[0]

  $('li.expandable').each(function() {
  	$(this).click(function() {
  		$('#selected').removeAttr('id')
  		$(this).attr('id', 'selected')
      if ($('#audioSwitch').hasClass('active')) {
        audioOpen.play()
      }
  	})
  })

  // Toggle icon active status
  $('icon').click( function() {
    $(this).toggleClass('active')
  })

  $('#main').on('click', '.btn', function() {
    $(this).toggleClass('btn-active')
    if ($('#audioSwitch').hasClass('active')) {
      audioBeep.play()
    }
  })

  // Alternate page content
  $('#main').html($('#sectionC').html())

  $('.nav-c').click( function() {
    $('#main').html($('#sectionC').html())
  })

  $('.nav-d').click( function() {
    $('#main').html($('#sectionD').html())
  })

  $('.nav-e').click( function() {
    $('#main').html($('#sectionE').html())
  })

  $('.nav-f').click( function() {
    $('#main').html($('#sectionF').html())
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

  $(window).resize(function() {
    setDimensions()
  })

  // Initiate
  initFastButtons()
  setDimensions()

})
