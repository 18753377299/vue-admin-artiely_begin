<template>
  <div>
    <Form >
      <Row>
        <Col></Col>
      </Row>
    </Form>
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
//        /riskinfo/queryClaimInfo  /separate.action
//        this.$api.postMethodBody('/riskinfo/queryClaimInfo').then(response => {
//          console.log(response)
//        }).catch(error => {
//          console.error('哎哟~！', error)
//        })
        this.$api.postMethodBody('/riskinfo/queryClaimInfo').then((response) => {
          console.log(response)
        }, (response) => {
          console.log(response)
        })
      }
    }
  }
</script>
<style>

</style>
