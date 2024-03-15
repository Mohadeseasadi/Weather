// get html elements
const form = document.querySelector(".top-banner form")
const input = document.querySelector(".top-banner input")
const msg = document.querySelector(".top-banner .msg")
const list = document.querySelector(".cities")

const apiKey = "d57d533492daa8e3150b19f9a19af17a";

// func for submit form
form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`

    // if send request  :
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const {main, name, sys, weather} = data;
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <h2 class="city-name" data-name=${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}</div>
            <figure>
                <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
            ` ;
            li.innerHTML = markup
            list.appendChild(li)
            msg.innerText = ""
        })

        // else :
        .catch(()=>{
            msg.innerText = "Search for a valid city"
        })
    input.value = "" //clear input
})
