<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="less">
  body{
    padding: 0;
    margin: 0;
  }

  .img-auto{
    width: 100%;
    display: block;
  }

  .fl{
    float: left;
  }

  .fr{
    float: right;
  }

  .clearfix::after{
	  content: '';
	  display: block;
	  clear: both;
  }
  
	input{
	   border: none;
	    padding: 0;
	    margin: 0;
	    outline: none;
	}

  a{
    text-decoration: none;
  }
</style>
