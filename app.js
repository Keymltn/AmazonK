let countryEl = document.querySelector("#navbar__country");
let bodyEl = document.querySelector('#body');
let countryDivEl = document.querySelector('.country_alert');
let signInBtnEl = document.querySelector('#sign-in');
let selectCountryEl = document.querySelector('#country_select');
let uzbekistanEL = document.querySelector('.nav_location-country');
let location_finder = document.querySelector('.nav_location-deliv')
let doneBtn = document.querySelector('#done');
let selectBarEl = document.querySelector('.nav_country-flags');
let selectLangEl = document.querySelector('.languages_selected_bar');
let abEl = document.querySelector("#ab");
let supByusEl = document.querySelector("#buy_sups");
let item1 = document.querySelectorAll(".items");

countryEl.addEventListener("click" , () => {
    countryDivEl.classList.toggle('display')
})

doneBtn.addEventListener("click" , () => {
    if(selectCountryEl.value == "rus"){
        uzbekistanEL.classList.add('none')
        let rusEl = document.createElement('p');
        let ruEL = rusEl.innerText = "Russia"
        location_finder.append("Russia")
    }

    else if(selectCountryEl.value == "usa"){
        uzbekistanEL.classList.toggle('none')
        let usaEl = document.createElement('p');
        let usEl = usaEl.innerText = "USA"
        location_finder.append("USA")
    }

    countryDivEl.classList.toggle('display')
    countryDivEl.classList.toggle('none')
})

selectBarEl.addEventListener('click' , () => {
    // abEl.classList.toggle("display")
    // abEl.classList.toggle("languages_selected_bar")
    // abEl.style.display = 'block'
    abEl.style.display = "block"
    if(abEl.style.display = "none"){
        abEl.style.display = "block";
    }

    else{
        abEl.style.display = "none"
    }
})

// AAAAAAAAAAAAAAAAAAAPPPPPPPPPPPPPPPPPPPPPPPIIIIIIIIIIIIIIIIIIIIIIIIIIII



fetch('https://shrouded-ocean-24719.herokuapp.com/v2/allproducts')
    .then(responce => responce.json())
    .then(data => {
        data.forEach(e => {
            const imgEl = document.createElement("img");
            
            items.appendChild(imgEl);
            imgEl.src = e.url;

        });
})