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
              <a class="" href="/" style="font-size:24pt;">DAEHANINS</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutUs">About Us</a></li>
                <li><a href="/solutions">solutions</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
    </div>

    <nuxt/>

    <nav id="tf-footer">
      <div class="container">
        <div class="pull-left">
          <p>2015 © Awesomess. All Rights Reserved. Designed and Coded by <a href="https://dribbble.com/jennpereira">Jenn</a> for <a href="https://themeforces.com">ThemeForces.Com</a></p>
        </div>
        <div class="pull-right">
          <ul class="social-media list-inline">
            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
            <li><a href="#"><span class="fa fa-pinterest"></span></a></li>
            <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            <li><a href="#"><span class="fa fa-dribbble"></span></a></li>
            <li><a href="#"><span class="fa fa-behance"></span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  .row {
    font-family: 'Noto Sans KR', serif;
  }
</style>
