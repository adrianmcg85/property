$(document).ready(function() {

$('.property_nav_bar .btn').click((e)=>{
    e.preventDefault();
    $('.property_nav_bar .active').removeClass('active')
    $(e.target).addClass('active')
    let attr_string = $(e.target).attr('class')
    let cls =  '.property_' + attr_string.split(' ')[1]
    $('.property_tab').css('display', 'none')
    $(cls).css('display', 'block')

})
})

