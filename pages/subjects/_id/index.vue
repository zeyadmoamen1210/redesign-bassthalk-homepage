<template>
  <div class="lecture-title">
      <div class="row">
         <div class="col-md-6">
            <div class="lectures-title">
              <nuxt-link :to="'/'+$route.params.id+'lectures'">المحاضرات</nuxt-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>