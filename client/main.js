const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortune-button")
const addFortuneForm = document.getElementById("add-fortune-form")
const addFortuneText = document.getElementById("add-fortune-text")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const addFortune = (e) => {
    e.preventDefault()
    const newFortune = addFortuneText.value

    axios.post("http://localhost:4000/api/fortune/", {fortune: newFortune})
    .then(res => {
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener("click", getFortune)
addFortuneForm.addEventListener("submit", addFortune)