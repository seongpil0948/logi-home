<template>
  <div>
    <section class="jb-box store-5619201">
      <div class="absolute bottom-1/10 left-1/20 text-white">
        <div class="text-4xl mb-4 gothic">당신의 물류 파트너 </div>
        <div class="text-lg">로지원 15년의 노하우 그리고 신뢰</div>
      </div>
      <div class="absolute top-1/10 right-1/20  text-white" dir="rtl">
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/coupang.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/auction.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/gmarket.png" />
        <br />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/11.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/olive.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/jung.png" />
        <br />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/post.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/cj.png" />
        <el-image fit="contain" class="mx-2 w-30 h-15" src="/img/partner/hanjin.jpg" />
      </div>
    </section>
    <section class="jb-box bg-zinc-300">
      <el-card>
        <template #header>

          <h1 class="text-center text-4xl gothic">이런 서비스를 제공하고 있어요!</h1>
        </template>
        <el-row justify="space-around" class="h-full" align="middle">
          <el-col :span="9" class="pa-3">
            <el-card class="text-center rounded-lg btn">
              <div class="text-4xl"> &#128667; </div>
              <div style="padding: 14px">
                <span class="text-lg">3PL</span>
                <div class="text-sm">
                  온라인, 오프라인 물류 분야 전문가 상주로 고객사 상품의 오출고, 오배송을 제로화하기 위해 노력하고 있으며 근무시간 이내에는 어떠한 상황에서도 신속한 대응이 가능합니다.
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="9" class="pa-3">
            <el-card class="text-center rounded-lg btn">
              <div class="text-4xl"> 🏢 </div>
              <div style="padding: 14px">
                <span class="text-lg">물류 대행</span>
                <div class="text-sm">
                  창고보관, 택배발송, 재고관리까지 질높은 서비스와 안정적인 물류환경을 제공합니다.
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="9" class="pa-3">
            <el-card class="text-center rounded-lg btn">
              <div class="text-4xl"> 🎁 </div>
              <div style="padding: 14px">
                <span class="text-lg">포장 대행</span>
                <div class="text-sm">
                  마라톤, 사회체육, 동호회, 기업, 개인등의 홍보, 판촉, 행사용품의 물품재포장, 각종 스티커부착/넥텍부착/비표착인/반제품포장/박스포장/박스교체 기타 포장대행업무를 수행하여 드립니다.
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="9" class="pa-3">
            <el-card class="text-center rounded-lg btn">
              <div class="text-4xl"> 🥛 </div>
              <div style="padding: 14px">
                <span class="text-lg">밀크런</span>
                <div class="text-sm">
                  쿠팡등 타업체와의 연동, 효율적인 유통과정, 저비용 고효율을 제공합니다.
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>

    </section>
    <section ref='container' class="jb-box jb-box-img">
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
  height: 90vh;
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
