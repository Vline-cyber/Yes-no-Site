const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const answerGif = document.getElementById('answerGif');

askButton.addEventListener('click', function() {
    const question = questionInput.value;
    if (!question) {
        alert('Пожалуйста, введите вопрос');
        return;
    }

    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const answer = data.answer;
            answerGif.src = data.image;
            answerGif.style.display = 'block';
            questionInput.style.display = 'none';
            askButton.style.display = 'none';
        })
        .catch(error => {
            console.error('Ошибка при запросе к Api');
            alert('Не удалось получить ответ. попробуйте ещё раз');
        });
});
