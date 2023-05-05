const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortune-button")

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

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener("click", getFortune)