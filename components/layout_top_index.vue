<template>
  <div>
    <div id="tf-home" style="height:1000px;">
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
              <a class="" href="/" style="font-size:24pt;"><img src="/dhhome/logo_black.png"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
                <!--<li><nuxt-link to="/aboutUs">About</nuxt-link></li>-->
                <!--<li><nuxt-link to="/solutions">Solution</nuxt-link></li>-->
                <!--<li><nuxt-link to="/project">Portfolio</nuxt-link></li>-->
                <!--<li><nuxt-link to="/contact">Contact</nuxt-link></li>-->
                <li><a href="#dh-about">About</a></li>
                <li><a href="#dh-solution">Solutions</a></li>
                <li><a href="#dh-portfolio">Works</a></li>
                <li><a href="#dh-contact">Contact</a></li>
                <li><a href="https://blog.naver.com/daehanins_co" target="_blank">Blog</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>

        <div style="height:90px;"></div>

        <div class="container" style="height: 910px;">
          <div class="content" style="padding: 30% 0 18% 0;">
            <h1 style="color:white; font-size:45pt;">대한아이앤에스는</h1>
            <h3 style="color:white; font-weight: 100; font-size:30pt;">고객의 니즈에 맞춘 합리적인 스마트공장 기술을 제공합니다</h3>
            <br>
            <!--<nuxt-link to="/project" class="btn btn-primary my-btn">포트폴리오</nuxt-link>-->
            <!--<nuxt-link to="/contact" class="btn btn-primary my-btn2">문의</nuxt-link>-->
            <a href="#dh-portfolio" class="btn btn-primary my-btn">Works</a>
            <a href="#dh-contact" class="btn btn-primary my-btn2">Contact</a>
          </div>
        </div>
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
