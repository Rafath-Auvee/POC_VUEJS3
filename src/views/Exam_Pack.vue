<template>
<div>
  <Sidebar class="side"/>
  <div class="flex-container">
    
      <div class="item1">item 1</div>
      <div class="item2">item 2</div>
      <div class="item3">item 3</div>

  </div>
</div>
</template>


<style scoped>
  
  .flex-container {

    display: flex;
    
    justify-content: flex-start; 
    align-items: baseline;    

    height: 100%;
    padding: 15px;
    gap: 5px;

  }

  .flex-container > div{
  
    
    border-radius: 5px;
    padding: 8px;
  }


  .item1 { 
    /* flex:2 1 auto; */
    flex-grow:2;
    align-self:flex-start;
  }
			
  .item2 { 
    /* flex:2 1 auto; */
    flex-grow:2;
    align-self:flex-start;
  }
			
  .item3 { 
    /* flex:4 1 auto; */
    flex-grow:4;
    align-self:auto;
  }
			

</style>


<script>

import Sidebar from "@/components/sidebar/Sidebar"

export default {

  components:{
    Sidebar
    }
}
</script>