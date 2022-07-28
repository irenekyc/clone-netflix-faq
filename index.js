const allQuestions = document.querySelectorAll('[data-role="question"]');
let currentlyOpen = "faq-1";

const toggle = () => {
  allQuestions.forEach((questionDiv) => {
    if (questionDiv.id === currentlyOpen) {
      questionDiv.classList.add("faq-open");
      questionDiv.classList.remove("faq-close");
    } else {
      questionDiv.classList.remove("faq-open");
      questionDiv.classList.add("faq-close");
    }
  });
};

const allQuestionButtons = document.querySelectorAll(".faq-question");
allQuestionButtons.forEach((question) =>
  question.addEventListener("click", (e) => {
    const questionNo = e.target.getAttribute("data-question");

    if (questionNo) {
      if (currentlyOpen === `faq-${questionNo}`) {
        currentlyOpen = null;
      } else {
        currentlyOpen = `faq-${questionNo}`;
      }
      toggle();
    }
  })
);
