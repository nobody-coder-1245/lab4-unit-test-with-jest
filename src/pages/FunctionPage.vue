# FunctionPage.vue
<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>

    <!-- Calculator Form -->
    <form>
      <input type="text" id="firstValue" v-model="firstValue" />
      <input type="text" id="secondValue" v-model="secondValue" />
      <input type="text" id="answerVulue" v-model="answerVulue" />
      <button @click="addition(firstValue, secondValue)">Addition</button>
      <button @click="subtraction(firstValue, secondValue)">Subtraction</button>
      <button @click="multiplication(firstValue, secondValue)">
        Multiplication
      </button>
      <button @click="divide(firstValue, secondValue)">Divide</button>
    </form>

    <!-- Name Editor Form (สำหรับกรอกข้อมูลชื่อ และ เลขนศ) -->
    <form>
      <input type="text" id="firsName" v-model="firsName" />
      <input type="text" id="lastName" v-model="lastName" />
      <input type="text" id="stuId" v-model="stuId" />
      <button id="name-combined-action" @click="nameCombined(firstValue, secondValue)">Combine</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      title: 'Vue is awesome.',
      firstValue: 0,
      secondValue: 0,
      answerVulue: 0,

      nameResult: "",
    };
  },
  methods: {
    // https://jestjs.io/docs/using-matchers
    // https://www.philbarresi.com/jest-test-guide/
    addition(first, second) {
      this.answerVulue = Number(first) + Number(second);
      return this.answerVulue;
    },
    subtraction(first, second) {
      this.answerVulue = Number(first) - Number(second);
      return this.answerVulue;
    },
    multiplication(first, second) {
      this.answerVulue = Number(first) * Number(second);
      return this.answerVulue;
    },
    divide(first, second) {
      this.answerVulue = Number(first) / Number(second);
      return this.answerVulue;
    },

    // function for name combination (firstname + lastname + stuId)
    addname(fName, lName, stuId) {
      this.nameResult = `${fName} ${lName} ${stuId}`
      console.log(this.nameResult)
      return this.nameResult
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
