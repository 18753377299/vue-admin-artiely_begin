<template>
  <div>
    <Button @click="query">查询</Button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        riskInfoClaimVo: {
        }
      }
    },
    methods: {
      query () {
        this.$api.postMethodBody('/riskinfo/queryClaimInfo').then(response => {
          console.log(response)
        }).catch(error => {
          console.error('哎哟~！', error)
        })
      }
    }
  }
</script>
<style>

</style>
