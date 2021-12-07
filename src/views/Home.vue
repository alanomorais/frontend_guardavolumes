<template>
  <div class="container">
    <Dashboard />    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Dashboard
  }
}
</script>       
