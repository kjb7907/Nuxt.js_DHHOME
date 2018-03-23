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
          }, 1000, function () {
            self.scrolling = false;
          });
      }
    },
    mounted: function() {

      var self = this;
      $('body').on('mousewheel',function (e) {

        var scrollTop = $('html').scrollTop();
        var wheelDelta = e.originalEvent.wheelDelta;

        if(self.scrolling == false && wheelDelta<0) {
          if(scrollTop < $('.scroll-target1').offset().top-100){
            self.smoothScroll($('.scroll-target1').offset().top-70);
          }
          else if(scrollTop < $('.scroll-target2').offset().top-100){
            self.smoothScroll($('.scroll-target2').offset().top-70);
          }
          else if(scrollTop < $('.scroll-target3').offset().top-100){
            self.smoothScroll($('.scroll-target3').offset().top-70);
          }
        }
      })

    }
  }
</script>


<style>

</style>
