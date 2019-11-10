<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>{{currentQuestion.question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          href
          v-for="(answer,idx) in answers"
          :key="idx"
          @click="selectAnswer(idx)"
          :class="{'selected' : (selectedIndex === idx), 
           'correct': (selectedIndex !== null && submitted === true && correctIndex === idx),
           'incorrect': (selectedIndex === idx && submitted === true && correctIndex !== idx)
          }"
        >{{ answer }}</b-list-group-item>
      </b-list-group>

      <b-button variant="primary" @click="submitAnswer">Submit</b-button>
      <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function
  },
  data: function() {
    return {
      selectedIndex: null,
      shuffledAnswers: [],
      correctIndex: null,
      submitted: false
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.submitted = false;
        this.shuffleAnswers();
      }
    }
    // currentQuestion() {
    //   this.selectedIndex = null;
    //   this.shuffleAnswers();
    // }
  },
  methods: {
    selectAnswer(idx) {
      this.selectedIndex = idx;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];

      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
        console.log("correct answer!", isCorrect);
        // if is paint selected item as correct
      } else {
        // paint selected answer as incorrect
        // paint correct answer
      }
      //this.selectedIndex = null;
      // block submit button
      this.submitted = true;
    }
  }
  // mounted() {
  //   this.shuffleAnswers();
  // }
};
</script>


<style scoped>
.list-group {
  margin-bottom: 15px;
}
.btn {
  margin: 0 5px;
}

.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: tomato;
}
</style>