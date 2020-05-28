var retrievedObject = localStorage.getItem('class');
if(retrievedObject){
    $('div').addClass(retrievedObject)
}

console.log('class ', (retrievedObject));
$("div").click(function () {

    if ($(this).hasClass("fa-square")) {
        $(this).removeClass('fa-square').addClass('square');
        localStorage.setItem('class', 'square');
    } else {
        $('.square').removeClass('square').addClass('fa-square');
        localStorage.setItem('class', 'fa-square');
    }



});
