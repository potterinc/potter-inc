$(document).ready(function(){

    //Carosel Content Slider

    {
        var slide = $('input[name="slides"]');
        var slideContentLength = slide.length;
        var slideIndex = 0;
        var time = 10000; //10 seconds

        setInterval(function(){
            slideIndex++;
            if (slideIndex == slideContentLength){
                slideIndex = 0;
                slide[slideIndex].checked = 'checked';
            }
            else
                slide[slideIndex].checked = 'checked';
        }, time);
    }

})
