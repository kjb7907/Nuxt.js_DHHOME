<template>
  <div>
    <br><br><br>
    <div class="container">
      <div class="section-title">
        <h3>Contact Me</h3>
        <p>구축하실 시스템에 대한 개략적인 내용을 전화 혹은 이메일( jeonsj@daehanins.com )로 보내주시면 성심껏 상담해 드리겠습니다.</p>
        <hr>
      </div>

      <div class="space"></div>

      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form id="contact">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Name">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Email">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Website">
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary my-btn dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style>

</style>
