<template>
  <div style="overflow: hidden">

    <layout-top></layout-top>

    <about id="dh-about"></about>

    <solutions-main id="dh-solution"></solutions-main>

    <!--<solution-view></solution-view>-->

    <project-main id="dh-portfolio"></project-main>

    <contaact id="dh-contact"></contaact>

    <layout-bottom></layout-bottom>

  </div>
</template>

<script>

  import layout_top_index from '~/components/layout_top_index.vue'
  import layout_bottom from '~/components/layout_bottom.vue'
  import about from '~/components/about.vue'
  import solutionsMain from '~/components/solutionsMain.vue'
  import solutionView from '~/components/solutionView.vue'
  import projectMain from '~/components/projectMain.vue'
  import contact from '~/components/contact.vue'

  export default {
    components: {
      'layout-top': layout_top_index,
      'layout-bottom': layout_bottom,
      'about': about,
      'solutions-main': solutionsMain,
      'solution-view': solutionView,
      'project-main': projectMain,
      'contaact': contact
    },
    data() {
      return {
        scrolling:false
      }
    },
    methods: {
      smoothScroll:function (top) {
        var self = this;
        this.scrolling = true;
          $('html,body').animate({
            scrollTop: top
          }, 500, function () {
            self.scrolling = false;
          });
      }
    },
    mounted: function() {
      var self = this;
      $('body').on('mousewheel',function (e) {

        var scrollTop = $('html').scrollTop();
        var wheelDelta = e.originalEvent.wheelDelta;

        console.log(scrollTop);

        if(self.scrolling == false && wheelDelta<0) {
          if(scrollTop<50){
            self.smoothScroll(920);
          }else if(scrollTop<980){
            self.smoothScroll(1890);
          }else if(scrollTop<1940){
            self.smoothScroll(2730);
          }
        }
      })

      // $(window).mousewheel(function(e){
      //   console.log(e);
      //   $('html,body').animate({
      //     scrollTop: 920
      //   }, 1000);
      // })
    }
  }
</script>


<style>

</style>
