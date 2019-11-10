<template>
  <div>
    <div>
      <b-nav tabs>
        <b-nav-item disabled>
          <b>Fancy Quiz App</b>
        </b-nav-item>
        <b-nav-item disabled>Counter: {{ correctAnswered }}/ {{ totalAnswered }}</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["correctAnswered", "totalAnswered"]
};
</script>