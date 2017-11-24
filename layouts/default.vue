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
        <div class="pull-left" style="font-size:10pt; color:#d5d5d5;">
          <div>대한아이앤에스 02-2272-8900</div>
          <div>서울특별시 중구 수표로 2길 15 충안빌딩 4층</div>
          <div>대표자 전성종 jeonsj@daehanins.com / 010-4384-7335</div>
          <div>Copyright 2014 DAEHAN I&S All Rights Reserved</div>
        </div>
        <div class="pull-right">
          <!--<ul class="social-media list-inline">-->
          <!--<li><a href="#"><span class="fa fa-facebook"></span></a></li>-->
          <!--<li><a href="#"><span class="fa fa-twitter"></span></a></li>-->
          <!--<li><a href="#"><span class="fa fa-pinterest"></span></a></li>-->
          <!--<li><a href="#"><span class="fa fa-google-plus"></span></a></li>-->
          <!--<li><a href="#"><span class="fa fa-dribbble"></span></a></li>-->
          <!--<li><a href="#"><span class="fa fa-behance"></span></a></li>-->
          <!--</ul>-->
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
