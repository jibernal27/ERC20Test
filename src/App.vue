<template>
    <div class="container">
        <div>
            <transition name="fade">
             <div class="row">
                <div class="col-md-6">
                    <router-view class="etherium-contracts" name="a"></router-view>
                </div>
                <div class="col-md-6">
                    <router-view class="etherium-transactions" name="b"></router-view>
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script src="localhost:4000/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
    

<script>
    export default{
    }
</script>