<template>
    <div class="tabbar">
        <ul>
            <li v-for="(item, index) in routerList" 
            :key="index"
            @click="switchTab(item.path)">
                <img :src="$route.path.includes(item.path) ? item.selected : item.active" alt="">
                <span :class='$route.path.includes(item.path) ? "active" : "" '>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
        routerList: [
            {
                title:'首页',
                path:'/home',
                active:'./images/home.png', //当把图片等静态文件放在public下就可以直接./+静态文件所在的文件夹
                selected:'./images/home-select.png'
            },
            {
                title:'分类',
                path:'/list',
                active:'./images/list.png',
                selected:'./images/list-select.png'
            },
            {
                title:'购物车',
                path:'/cart',
                active:'./images/cart.png',
                selected:'./images/cart-select.png'
            },
            {
                title:'我的',
                path:'/my',
                active:'./images/my.png',
                selected:'./images/my-select.png'
            },
        ]
    }
  },
  methods: {
    switchTab(path) {
        if (this.$route.path == path) return //判断route的路径是不是当前路径 否则不跳转
        this.$router.replace(path)  //用replace 不用push是因为不用返回了
    }
  }
};
</script>

<style scoped>
.tabbar {
    width: 100%;
    height: 1.3333rem;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
}
.tabbar ul {
    display: flex;
    justify-content: space-around;
}
.tabbar ul li {
    display: flex;
    flex-direction: column;
}
.tabbar ul li span {
    text-align: center;
    font-size: .4267rem;
}
.tabbar ul li img {
    width: .8267rem;
    height: .8267rem;
}
.active {
    color: red;
}
</style>