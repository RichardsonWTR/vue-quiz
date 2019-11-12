<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>{{ question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          href
          v-for="(answer,idx) in answers"
          :key="idx"
          @click="selectAnswer(idx)"
          :class="answerClass(idx)"
        >{{ answer }}</b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || submitted"
      >Submit</b-button>
      <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
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
      answers = answers.map(a => this.htmlDecode(a))
      return answers;
    },
    question() {
      let question = this.currentQuestion.question
      return this.htmlDecode(question)
    },
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
      if (this.submitted) return;
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
      let isCorrect = this.selectedIndex === this.correctIndex;

      this.submitted = true;
      this.increment(isCorrect);
    },
    answerClass(idx) {
      return {
        selected: this.selectedIndex === idx && this.submitted === false,
        correct: this.submitted && this.correctIndex === idx,
        incorrect:
          this.selectedIndex === idx &&
          this.submitted &&
          this.correctIndex !== idx
      };
    },
    htmlDecode(input){
      var e = document.createElement('textarea')
      e.innerHTML = input
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
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