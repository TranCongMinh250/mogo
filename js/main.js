document.addEventListener("DOMContentLoaded",function(){
    // Khai bao bien can su dung
    var wwdActive = document.getElementsByClassName('is-active');
    var wwdButton = document.getElementsByClassName('whatwedo__item-right');
    var wwdContent = document.getElementsByClassName('whatwedo__item-bottom');
    // var whatwedo_up = whatwedo_up[0];
    // var whatwedo_noidung = whatwedo_noidung[0];

    for (let i = 0; i < wwdContent.length; i++) {
        wwdButton[i].addEventListener('click', function(){
            for (let j = 0; j < wwdContent.length; j++) {
                if (j!=i){
                    wwdButton[j].classList.remove('is-rotate');
                    // wwdContent[j].classList.remove('is-active');
                }
            }
            wwdButton[i].classList.toggle('is-rotate');
            // wwdContent[i].classList.toggle('is-active');
            if (wwdContent[i].style.maxHeight){
                wwdContent[i].style.maxHeight = null;
            }
            else{
                wwdContent[i].style.maxHeight = "15rem";
            }
        });
    }  

},false);
