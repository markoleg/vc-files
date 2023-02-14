
function backfun () {
    if (swiper.slides[0].classList.contains('swiper-slide-active')){
        window.location = "index.html"
    }
    else {
        swiper.slidePrev()
    }
}

    

$('input').click(function () {


    let result = document.querySelector('#res');
    let dres = 0;

    // 1question
    
    let fam = document.querySelectorAll('input[name="fam"]');
    let btn1 = document.querySelector('#btn-1');

    if (fam[0].checked) {
        dres += 1;
    }
    else if (fam[1].checked) {
        dres += 3;
    }
    else if (fam[2].checked) {
        dres += 2;
    }
    else if (fam[3].checked) {
        dres += 2;
    }
    else if (fam[4].checked) {
        dres += 1;
    }    
    fam.forEach(
        actBtn1 
    );
    function actBtn1(item) {
        
        if (item.checked) {
            btn1.classList.add('btn-act');
            
        }
    }
    if (btn1.classList.contains('btn-act')) {
        btn1.onclick = function(){
            swiper.slideNext()
        }
    }
// 2question
    let age = document.querySelectorAll('input[name="age"]');
    let btn2 = document.querySelector('#btn-2');

    if (age[0].checked) {
        dres += 1;
    }
    else if (age[1].checked) {
        dres += 2;
    }
    else if (age[2].checked) {
        dres += 3;
    }
    else if (age[3].checked) {
        dres += 3;
    }
    else if (age[4].checked) {
        dres += 1;
    }

    age.forEach(
        actBtn2 
    );
    function actBtn2(item) {
        
        if (item.checked) {
            btn2.classList.add('btn-act');
            
        }
    }
    if (btn2.classList.contains('btn-act')) {
        btn2.onclick = function(){
            swiper.slideNext()
        }
    }

// 3question
    let attemp = document.querySelectorAll('input[name="attemp"]');
    let btn3 = document.querySelector('#btn-3');

    attemp.forEach(
        actBtn3 
    );
    function actBtn3(item) {
        
        if (item.checked) {
            btn3.classList.add('btn-act');
            
        }
    }
    if (btn3.classList.contains('btn-act') && attemp[0].checked) {
        btn3.onclick = function(){
            swiper.slides[4].style.display = 'none';
            swiper.slides[3].style.display = 'block';
            swiper.slideNext()
        }
    }
    else if (btn3.classList.contains('btn-act') && attemp[1].checked) {
        btn3.onclick = function(){
            swiper.slides[3].style.display = 'none';
            swiper.slides[4].style.display = 'block';
            swiper.slideNext()
        }
    };

// 4question

    let howlongattemp = document.querySelectorAll('input[name="howlongattemp"]');
    let btn4 = document.querySelector('#btn-4');

    if (howlongattemp[0].checked) {
        dres += 1;
    }
    else if (howlongattemp[1].checked) {
        dres += 2;
    }
    else if (howlongattemp[2].checked) {
        dres += 3;
    }

    howlongattemp.forEach(
        actBtn4 
    );
    function actBtn4(item) {
        
        if (item.checked) {
            btn4.classList.add('btn-act');
            
        }
    }

    if (btn4.classList.contains('btn-act')) {
        btn4.onclick = function(){
            swiper.slideNext()
        }
    };

// 4_2question

    let ageplan = document.querySelectorAll('input[name="ageplan"]');
    let btn4_2 = document.querySelector('#btn-4_2');

    if (ageplan[0].checked) {
        dres += 1;
    }
    else if (ageplan[1].checked) {
        dres += 1;
    }
    else if (ageplan[2].checked) {
        dres += 2;
    }
    else if (ageplan[3].checked) {
        dres += 3;
    }
    else if (ageplan[4].checked) {
        dres += 3;
    }

    ageplan.forEach(
        actBtn4_2 
    );
    function actBtn4_2(item) {
        
        if (item.checked) {
            btn4_2.classList.add('btn-act');
            
        }
    }

    if (btn4_2.classList.contains('btn-act')) {
        btn4_2.onclick = function(){
            swiper.slideNext()
        }
    };

// 5question weight index

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let btn5 = document.querySelector('#btn-5');
    let expl = document.querySelector('#res-expl');
    if (weight || height) {
        btn5.classList.add('btn-act');
    }
    if (btn5.classList.contains('btn-act')) {
        btn5.onclick = function(){
            swiper.slideNext();
            
        }
    };
    if (expl.innerHTML.indexOf("недостатня") != -1) {
        dres += 2;
    }
    else if (expl.innerHTML.indexOf("нормі") != -1) {
        dres += 1;
    }
    else if (expl.innerHTML.indexOf("надлишкова") != -1) {
        dres += 1;
    }
    else if (expl.innerHTML.indexOf("Ожиріння") != -1) {
        dres += 2;
    }


// 6question 
    let btn6 = document.querySelector('#btn-6');
    let dwoman = document.querySelectorAll('input[name="dwoman"]');

    if (dwoman[0].checked) {
        dres += 3;
    }
    if (dwoman[1].checked) {
        dres += 3;
    }
    if (dwoman[2].checked) {
        dres += 3;
    }
    if (dwoman[3].checked) {
        dres += 3;
    }
    if (dwoman[4].checked) {
        dres += 3;
    }
    if (dwoman[5].checked) {
        dres += 3;
    }
    if (dwoman[6].checked) {
        dres += 3;
    }
    if (dwoman[7].checked) {
        dres += 1;
    }
    if (dwoman[8].checked) {
        dres += 1;
    }

    dwoman.forEach(
        actBtn6 
    );
    function actBtn6(item) {
        
        if (item.checked) {
            btn6.classList.add('btn-act');
            
        }
    }

    if (btn6.classList.contains('btn-act')) {
        btn6.onclick = function(){
            swiper.slideNext()
        }
    };


// 7question 
    let btn7 = document.querySelector('#btn-7');
    let dman = document.querySelectorAll('input[name="dman"]');

    if (dman[0].checked) {
        dres += 3;
    }
    if (dman[1].checked) {
        dres += 3;
    }
    if (dman[2].checked) {
        dres += 3;
    }
    if (dman[3].checked) {
        dres += 3;
    }
    if (dman[4].checked) {
        dres += 3;
    }
    if (dman[5].checked) {
        dres += 3;
    }
    if (dman[6].checked) {
        dres += 3;
    }
    if (dman[7].checked) {
        dres += 1;
    }
    if (dman[8].checked) {
        dres += 1;
    }

    dman.forEach(
        actBtn7 
    );
    function actBtn7(item) {
        
        if (item.checked) {
            btn7.classList.add('btn-act');
            
        }
    }

    if (btn7.classList.contains('btn-act')) {
        btn7.onclick = function(){
            if (dres == 6) {
                window.location = "result.html" + "?score=" + dres + "&lvl=low"
            }
            else if (dres >= 7 && dres <= 12 )  {
                window.location = "result.html" + "?score=" + dres + "&lvl=middle"
            }
            else if (dres > 12 )  {
                window.location = "result.html" + "?score=" + dres + "&lvl=high"
            }
            
        }
    };


    result.innerHTML = dres;
})
