window.onload = function() {

    let pageData = {
        name: '',
        city: '',
        isMaried: '',
        phone: '',
        email: '',
    }

    let tabs = document.querySelectorAll('.menu .menu__tab');
    let pages = document.querySelectorAll('.pages .page');
    let inputs = document.querySelectorAll('.pages .input');
    let values = document.querySelectorAll('.pages .info__value');
    let pageData = {
        name: '',
        city: '',
        isMaried: '',
        phone: '',
        email: '',
    }

    


    console.log(inputs, values)

    //переключение между табами
    tabs[0].onclick = function() {
        if(tabs[1].classList.contains('active')) {
            tabs[1].classList.remove('active');
            tabs[0].classList.add('active');
        }
        pages[1].style.display = 'none';
        pages[0].style.display = 'block';
    }

    tabs[1].onclick = function() {
        if(tabs[0].classList.contains('active')) {
            tabs[0].classList.remove('active');
            tabs[1].classList.add('active');
        }
        pages[0].style.display = 'none';
        pages[1].style.display = 'block';
    }

    //инпуты

}