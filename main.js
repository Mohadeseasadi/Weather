const form = document.querySelector(".top-banner form")
const input = document.querySelector(".top-banner input")
const msg = document.querySelector(".top-banner .msg")
const list = document.querySelector(".load-section")

const apiKey = "f42eb562336bf63c8f83b03c7dd895fe";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units={metric}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const {main,name, sys , weather} = data;
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
            </figure>` ;
            li.innerHTML = markup
            list.appendChild(li);
            msg.innerText = ""
        })
        .catch(()=>{
            msg.innerText = "Search for a valid city"
        })
})