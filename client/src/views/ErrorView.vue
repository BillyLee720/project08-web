<template>
    <div class="error">
        <h1>Error 404!!!</h1>
        <p>There's no content you can found!</p>
        <button @click="backhome">返回</button>
    </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    backhome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>


<style>
.error {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.error h1{
   color: #eeee;
}

.error p{
   color: #eeee;
}

.error button {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    background-color: #ffffffad;
    border-radius: 5px;
    padding: 8px 20px;
    cursor: pointer;
}

</style>