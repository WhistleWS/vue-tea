<template>
  <div class="home">
    <Header></Header>
    <ly-tabs v-model="items.value">
      <ly-tab-item name="推荐" title="推荐" />
      <ly-tab-item name="大红袍" title="大红袍" />
      <ly-tab-item name="红茶" title="红茶" />
      <ly-tab-item name="绿茶" title="绿茶" />
      <ly-tab-item name="铁观音" title="铁观音" />
      <ly-tab-item name="普洱" title="普洱" />
      <ly-tab-item name="茶具" title="茶具" />
      <ly-tab-item name="花茶" title="花茶" />
    </ly-tabs>
    <section>
      <Swiper></Swiper>
    </section>
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Header from '@/components/home/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue';
import Swiper from '@/components/home/Swiper.vue'
export default {
  name: "Home",
  components: {
    Tabbar,
    Header,
    Swiper
},
  data() {
    return {
      items: [
        {value: '推荐'},
        {value: '大红袍'},
        {value: '红茶'},
        {value: '绿茶'},
        {value: '铁观音'},
        {value: '普洱'},
        {value: '茶具'},
        {value: '花茶'},
      ]
    }
  }
};
</script>

<style scoped>
.ly-tabs {
  position: fixed;
  top: 1.6rem;
  left: 0;
}
</style>
