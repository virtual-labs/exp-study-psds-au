/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        
        {
            question: "1. Brain area responsible for motor movement:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Occipital lobe", ///// Write the option 1 inside double quotes
                b: "Temporal lobe", ///// Write the option 2 inside double quotes
                c: "Frontal lobe", ///// Write the option 2 inside double quotes
                d: "Parietal lobe", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },



        {
            question: "2. Areas of activation in brain regions may change depending on different cognitive tasks:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "True", ///// Write the option 1 inside double quotes
                b: "False", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },




        {
            question: "3. Window analysis of EEG data helps in:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Reducing time for computational analysis", ///// Write the option 1 inside double quotes
                b: "Understanding neural basis of cognitive tasks on millisecond scale", ///// Write the option 2 inside double quotes
                c: "Increases quality of visualization plots", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },



        {
            question: "4. ERP indicates:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Epoch reproducing pattern", ///// Write the option 1 inside double quotes
                b: "Event related potential", ///// Write the option 2 inside double quotes
                c: "Epoch rearranging pattern", ///// Write the option 2 inside double quotes
                d: "Event reconstruction potential", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


        {
            question: "5. Disadvantage of EEG/ERP analysis:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Difficulty in providing information from deeper brain regions", ///// Write the option 1 inside double quotes
                b: "Maximum temporal resolution", ///// Write the option 2 inside double quotes
                c: "Maximum spatial resolution", ///// Write the option 2 inside double quotes
                d: "Analyze data on millisecond time scale", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },


    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
