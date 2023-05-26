<template>
  <div>
    <div class="jb-box store-5619201">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h1 font-weight-thin mb-4">Logione</h1>
        <h4 class="text-h2">당신의 3PL 물류 파트너 로지원.</h4>
      </div>
    </div>
    <div ref='video-container' class="jb-box jb-box-img">
      <video muted autoplay loop>
        <source src="/video/working.mp4" type="video/mp4" />
      </video>
      <div class="jb-text">
        <p>15년간의 노하우로 축적된 서비스를 제공합니다</p>
        <el-button type="info">현장 갤러리 보러가기</el-button>
      </div>
    </div>
    <div style="color: #fff; background: #272727"
      class="d-flex flex-column fill-height justify-center align-center text-white pa-10">
      <h4 class="text-center subheading">
        수 많은 기업들은 로지원을 신뢰하며, 매년 최고의 가치를 갱신합니다.
      </h4>
      <div class="flex items-center justify-center">

        <el-image src="/img/coupang.png" width="70" height="50" />
        <el-image src="/img/auction.png" width="70" height="50" />
        <el-image src="/img/gmarket.png" width="70" height="50" />
        <el-image src="/img/11.png" width="70" height="50" />
        <el-image src="/img/cj.png" width="70" height="50" />
        <el-image src="/img/post.png" width="70" height="50" />
      </div>
    </div>
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
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
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
  top: 50%;
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
