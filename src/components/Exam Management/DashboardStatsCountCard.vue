<template>
  <div class="card">
    <p class="label">
      {{label}}
    </p>    
    <h3 class="value">
      {{value}}
    </h3>
  </div>
</template>

<script>
export default {
  name: "DashboardStatsCountCard",
  props: ['label', 'value']
}
</script>

<style lang="scss" scoped>
.card {
  border: 1.5px solid #00A9DC;
  box-sizing: border-box;
  border-radius: 13px;
  min-height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.8rem 1.5rem;
  gap: 0.2rem;
  .label {
    color: #3b3b3b;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
  .value {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.9rem;
    letter-spacing: 0.382445px;
    color: #00A9DC;
  }
}
</style>