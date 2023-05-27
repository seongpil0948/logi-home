<template>
  <div>
    <section class="jb-box store-5619201">
      <div class="absolute bottom-1/10 left-1/20 text-white">
        <h1 class="text-h1 mb-4 gothic">당신의 물류 파트너 </h1>
        <h3 class="subheading">로지원 15년의 노하우 그리고 신뢰</h3>
      </div>
      <div class="absolute top-1/10 right-1/20  text-white" dir="rtl">
        <el-image class="mx-2" src="/img/coupang.png" />
        <el-image class="mx-2" src="/img/auction.png" />
        <el-image class="mx-2" src="/img/gmarket.png" />
        <br />
        <el-image class="mx-2" src="/img/11.png" />
        <el-image class="mx-2" src="/img/cj.png" />
        <el-image class="mx-2" src="/img/post.png" />
      </div>
    </section>
    <section ref='video-container' class="jb-box jb-box-img">
      <video muted autoplay loop>
        <source src="/video/working.mp4" type="video/mp4" />
      </video>
      <div class="jb-text">
        <el-button type="primary" size="large">현장 갤러리 보러가기</el-button>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const counter = useState<number>("counter", () => 0);
const container = ref(null)
const { tilt, roll, source } = useParallax(container)
watchThrottled(
  source,
  () => { console.log('changed!', source, roll, tilt) },
  { throttle: 500 },
)
</script>

<style>
.jb-box {
  width: 100%;
  margin: 0px auto;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
}

.store-5619201 {
  background-image: url("/img/logistics/store-5619201_1920.jpg");
}

.jb-box-img {
  background-image: url("/img/logistics/ikea-2714998_1920.jpg");
}

video {
  width: 100%;
  height: 100%;
}

.jb-text {
  position: absolute;
  bottom: 30%;
  text-align: center;
  width: 100%;
}

.jb-text p {
  margin-top: -24px;
  text-align: center;
  font-size: 48px;
  color: #ffffff;
}
</style>
