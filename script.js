// -------- QUIZ ---------
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
    answer: "Cascading Style Sheet"
  },
  {
    question: "Which HTML tag is used to create a link?",
    options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
    answer: "&lt;a&gt;"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is used for inserting an image?",
    options: ["&lt;img&gt;", "&lt;picture&gt;", "&lt;image&gt;", "&lt;src&gt;"],
    answer: "&lt;img&gt;"
  },
  {
    question: "What does API stand for?",
    options: ["App Programming Info", "Application Programming Interface", "Application Page Info", "Advanced Programming Internet"],
    answer: "Application Programming Interface"
  }
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    let optionsHTML = item.options.map(opt => `
      <label>
        <input type="radio" name="q${index}" value="${opt}" />
        ${opt}
      </label><br/>`).join('');

    questionDiv.innerHTML = `
      <p><strong>Q${index + 1}: ${item.question}</strong></p>
      ${optionsHTML}
      <div class="feedback" id="feedback-${index}"></div>
    `;
    quizContainer.appendChild(questionDiv);
  });
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const feedback = document.getElementById(`feedback-${index}`);

    if (selected) {
      if (selected.value === item.answer) {
        score++;
        feedback.innerHTML = "✅ Correct!";
        feedback.style.color = "green";
      } else {
        feedback.innerHTML = `❌ Incorrect! Correct answer: ${item.answer}`;
        feedback.style.color = "red";
      }
    } else {
      feedback.innerHTML = "⚠️ No option selected";
      feedback.style.color = "orange";
    }
  });

  document.getElementById("quiz-result").innerText = `You scored ${score}/5`;
}

loadQuiz();

// -------- IMAGE CAROUSEL ---------
const images = [
  "https://picsum.photos/id/1011/400/200",
  "https://picsum.photos/id/1025/400/200",
  "https://picsum.photos/id/1040/400/200",
  "https://picsum.photos/id/1062/400/200"
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("carousel-image");
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// -------- STATIC JOKES WITH EMOJIS ---------
const jokes = [
  "😂 Why don’t scientists trust atoms? Because they make up everything!",
  "😆 Why did the computer go to the doctor? Because it had a virus!",
  "🤣 I told my dog to fetch a stick... but he brought back a branch manager!",
  "😹 Why did the developer go broke? Because he used up all his cache!",
  "😜 I would tell you a joke about JavaScript... but you 'null' be laughing!"
];

function getJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke-output").innerText = jokes[randomIndex];
}
