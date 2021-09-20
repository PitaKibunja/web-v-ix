<template>
      <div>
      <slider-layout />
      <the-content/>


      </div>


</template>

<script>
  import SliderLayout from '../components/SliderLayout'
  import TheContent from '../components/TheContent'

  export default {
    name: 'Home',

    components: {
      SliderLayout,
      TheContent
    },
  }
</script>
