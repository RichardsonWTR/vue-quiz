<template>
    <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header :totalAnswered="totalAnswered" :correctAnswered="correctAnswered" />

    <b-container class="bv-example-row">
      <b-row>
        <b-col md="6" offset-md="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import QuestionBox from "@/components/QuestionBox.vue";

export default {
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswered: 0,
      totalAnswered: 0
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) this.correctAnswered++;
      this.totalAnswered++;
    }
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => {
        if (data.response_code != 0) return;
        this.questions = data.results;
      });
  }
};
</script>