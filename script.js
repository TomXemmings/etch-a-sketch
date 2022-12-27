const name = prompt('Какое поле вам нужно?');
if (name) {
    var checker = name
} else {
  var checker = name
}

$(document).ready(function() {
    for (i = 0; i != checker; i++) {
        $('.art').append('<div class="col">')
        $('.art').append('</div>')
    }
    
    for (j = 0; j != checker; j++) {
        $('.col').append('<div class="pixel">'+ '</div>')
    }
})

$(document).ready(function() {
    $(document).on('hover', '.pixel', function (){
        $(this).attr('class', 'pew');
    })
})