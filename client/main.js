const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortune-button")
const addFortuneForm = document.getElementById("add-fortune-form")
const addFortuneText = document.getElementById("add-fortune-text")
const removeFortuneForm = document.getElementById("remove-fortune-form")
const removeFortuneText = document.getElementById("remove-fortune-text")

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

const removeFortune = (e) => {
    e.preventDefault()
    const fortuneToRemove = removeFortuneText.value

    axios.delete("http://localhost:4000/api/fortune/" + fortuneToRemove)
    .then(res => {
        console.log(res.data)
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortune-all")
    .then(res => {
        let fortunes = res.data
    })
    .catch(err => {
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener("click", getFortune)
addFortuneForm.addEventListener("submit", addFortune)
removeFortuneForm.addEventListener("submit", removeFortune)