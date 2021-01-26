<template>
  <div class="course-description-page">
      <div class="container">
          <div>
              <h3>تفاصيل الكورس</h3>
              <div class="row">
                  <div class="col-md-8">
                      <div class="course-header">
                          <div class="row">
                              <div class="col-md-5">
                                  course img
                              </div>
                              <div class="col-md-7">
                                  course description
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      course related
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLoading : true,
            course:{}
        }
    },
    created(){
        this.isLoading = true;
        this.$axios.get(`/courses/${this.$route.params.id}`).then(res => {
            console.log(res.data);
            this.course = res.data;
        }).finally(() => this.isLoading = false);
    }
}
</script>

<style>

</style>