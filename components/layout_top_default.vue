<template>
  <div>
    <div id="tf-home">
      <div class="overlay">
        <div id="sticky-anchor"></div>
        <nav id="tf-menu" class="navbar navbar-default">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="" href="/" style="font-size:24pt;"><img src="/dhhome/logo_orign.png"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
                <li><nuxt-link to="/aboutUs">About</nuxt-link></li>
                <li><nuxt-link to="/solutions">Solutions</nuxt-link></li>
                <!--<li><nuxt-link to="/service">Service</nuxt-link></li>-->
                <li><nuxt-link to="/project">Work</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {

    }
  }
</script>

<style>

</style>
