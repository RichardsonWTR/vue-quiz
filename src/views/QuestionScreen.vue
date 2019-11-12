<template>
    <div id="app">
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
import QuestionBox from "@/components/QuestionBox.vue";

export default {
  components: {
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswered: 0,
      totalAnswered: 0,
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
    let category = this.$route.params.id
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}`)
      .then(res => res.json())
      .then(data => {
        if (data.response_code != 0) return;
        this.questions = data.results;
      });
  }
};
</script>