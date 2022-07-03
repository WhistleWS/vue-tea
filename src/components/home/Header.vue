<template>
    <header>
        <h1>
            <img src="@/assets/images/logo.png" alt="">
        </h1>
        <div class="search">
            <i class="iconfont icon-fangdajing1"></i>
            <span>搜您喜欢的...</span>
        </div>
        <div class="kefu">
            <i class="iconfont icon-kefu"></i>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 1.6rem;
    background-color: #b0352f;
}
header h1 {
    padding-right: .2667rem;
    padding-left: .0533rem;
    width: 2.6667rem;
    height: 1.3333rem;
}
header h1 img {
    width: 100%;
    height: 100%;
}
.search {
    display: flex;
    align-items: center;
    width: 6.56rem;
    height: .8rem;
    background-color: #fff;
    border-radius: 12px;
    margin-right: .2667rem;
}
.search i {
    padding: 0 .16rem;
    color: #ccc
}
.search span {
    font-size: .3733rem;
}
.kefu i {
    font-size: .8rem;
    color: #fff;
}
</style>