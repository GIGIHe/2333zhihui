<template>
  <div class="playVideo">
    <div class="nav">
      <span @click="back($event)">
        <van-icon
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>{{ title }}</h2>
      <div class="right">
        <span @click="starSwitch($event)">
          <van-icon
            name="star-o"
            size="20px"
            color="#999999"
          />
        </span>
      </div>
    </div>
    <div class="content">
      <div class="videoBox">
        <video class="tvhou" width="100%" height="100%"
          controls="controls" autoplay="autoplay"
          x-webkit-airplay="true" x5-video-player-fullscreen="true"
          preload="auto" playsinline="true" webkit-playsinline
          x5-video-player-typ="h5">
          <source type="application/x-mpegURL" :src="videoSrc">
        </video>
      </div>
      <div class="switchBar">
        <div
          class="baritem"
          :class="{'selected': true}"
        >
          <h3>实操步骤</h3>
        </div>
      </div>
       <div class="switchContent">
         <p v-html="memo"></p>
       </div>
    </div>
  </div>
</template>

<script>
import PeixunItemList from "@/view/Course/peixunItemList";
import PeixunCourseListItem from "@/view/Course/peixunCourseListItem";

const videoData = {
  a1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201811/02/ndK6nTk8Wh.m3u8',
    title: '绪论',
    memo: '中医学的学科属性是以自然科学为主体，与人文社会科学等多学科相交融的综合性医学科学知识体系。中医的中，中国中华医学，更重要的是对中的理解，中正不偏不倚，中医强调“以人为本”，不仅注重人的生物属性，尤为重视人的心理特征和社会属性，主张顺应自然，人类的生存与生活必然受到自然环境和社会环境的影响，人是一个有机的整体，，以人一自然（环境）一社会（心理）为医学模式。'
  },
  //
  b1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201710/13/kQmkr8czhG.m3u8',
    title: '杭州保姆纵火案法律解析',
    memo: '2017年6月22日5时07分，位于杭州市上城区的一户住宅突发火情。该屋的女主人及3个孩子死亡。犯罪嫌疑人为屋主雇佣的保姆莫焕晶。莫焕晶在其纵火的家庭从事保姆工作期间，多次窃取雇主家中财物。7月1日，浙江省杭州市人民检察院对“蓝色钱江放火案”犯罪嫌疑人莫焕晶，以涉嫌放火罪、盗窃罪依法批准逮捕。'
  },
  b2: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201710/13/tk5hKzZk3P.m3u8',
    title: '恨雇主买保险，保姆放火后拿走贵重物品',
    memo: '媒体报道，43岁的保姆陈月兰因涉嫌放火和盗窃一案被捕。起因是雇主刘先生想要为陈月兰买份价值10万元的家政保险。理由是，如果陈女士在干活中出了意外，就可以得到保险公司的理赔。而陈月兰认为没有这个必要。但是雇主仍然坚持投保，而陈月兰因为不能查看保单也不能退保，就与雇主发生争执，一气之下打算离开雇主家，“在整理自己衣物的时候，想到了两件事：偷点东西，再把房子烧了。”'
  },
  //
  c1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201712/19/NK63jQearx.m3u8',
    title: '给新生儿做面部抚触',
    memo: '国内外专家多年的研究和临床实践证明，给婴儿进行系统的抚触，有利于婴儿的生长发育，增强免疫力，增进食物的消化和吸收，减少婴儿哭闹，增加睡眠；同时，抚触可以增强婴儿与父母的交流，帮助婴儿获得安全感，发展对父母的信任感。心理学研究发现，有过婴幼儿期抚触经历的人在成长中较少出现攻击性行为，喜爱助人、合群。”'
  },
  //
  d1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201806/19/TjhJ6MCDDX.m3u8',
    title: '第一章  绪论',
    memo: '营养（nutrition)，是指人体摄取食物，经过体内的消化、吸收和代谢，利用食物中的有益物质以满足机体自身生理需要的生物学过程。从胚胎发育开始直至衰老、死亡的全部生命过程中，营养自始至终都起着重要的作用，是决定人体素质和健康的重要因素。食物中具有一定生理功能的成分称为营养素。现代营养学把营养素分为六大类：蛋白质、脂类、碳水化合物（糖类）、维生素、矿物质和水。它们既有各自的生理功能，如供给能量、构成机体组织成分及调节机体生理功能等，在代谢过程中又密切联系，共同参与和调节生命活动。不同食物具有不同的营养价值，自然界没有任何一种食物含有人体必需的所有营养素。人体每天必须进食多种食物，才能摄取数量充足、比例适宜的营养素。如果某种营养素长期摄入不足或过量，都有可能对机体造成危害或疾病。营养学是研究人体营养规律及其改善措施的科学，即研究食物中对人体有益的成分及人体摄取与利用这些成分以维持、促进健康的规律和机制，并在此基础上采取具体、宏观、社会性的措施来改善人类健康、提高生命质量的科学。'
  },
  //
  e1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201805/29/RbbsCfJKem.m3u8',
    title: '怎样正确地清洗、消毒奶具',
    memo: `一、概述为新生儿清洗、消毒奶具可有效预防各种感染疾病。 <br>
        二、操作步骤 <br>
        1、清洗奶具 <br>
        （1）洗净双手并擦干。 <br>
        （2）将奶瓶中剩余奶液倒入下水道。 <br>
        （3）温水浸泡奶具，倒入奶瓶洗涤液，用对应的奶瓶刷将奶瓶及其他部件从里到外刷干净，需要特别留意清洗奶嘴孔，不留有奶渍。 <br>
        （4）洗净后用流动水反复冲洗刷干净，并用水冲过洞孔。 <br>
        （5）将刷洗后的奶具放在清洁容器中。 <br>
        （6）将使用后的刷子清洗干净，倒置悬挂。 <br>
        2、消毒奶具 <br>
          (1）煮沸消毒 <br>
            将清洗干净的奶瓶、奶盖及硅胶奶嘴放入锅中加冷水浸没，加盖煮沸，水开计时，煮沸10分钟。（硅胶奶嘴和橡皮奶嘴消毒方法不同。硅胶耐煮，橡皮的不耐煮）橡皮奶嘴要在水开7-8分钟后，即关火前2～3分钟放入橡皮奶嘴。水稍凉后将水倒出，沥干水后奶具放在消毒锅内备用。 <br>
        （2）蒸汽锅消毒 <br>
           将适量纯净水倒入蒸汽锅发热底盘；将洗净的奶瓶、奶盖、奶嘴等其他细小配件口朝下放入消毒筐内，盖上盖子，轻按启动按钮。 <br>
        三、注意事项 <br>
        1、奶瓶、奶嘴、连接盖等都应该用相应的清洗刷来刷洗。 <br>
        2、玻璃奶瓶用尼龙奶瓶刷，而塑料奶瓶应该使用海绵奶瓶刷。 <br>
        3、奶具一定要洗净，不留奶渍及洗涤液的残留物。 <br>
        4、奶具每天最少消毒一次，最好在早上进行。<br>`
  },
  //
  f1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201803/22/fWrGwKndSD.m3u8',
    title: '第一章 现代育儿关键基点',
    memo: `这1000天是怎么来的呢？大家都知道。从开始怀孕到生产一般需要280天，到婴幼儿2周岁有730天，这样加一起就是1000天了。这1000天是儿童成长的关键黄金时段。<br/>
  在精细胞和卵细胞结合的瞬间，各自带着父母遗传信息的染色体组成了新的含有23对染色体的合体细胞，这就是受精卵，从此启动了新生命的历程。这个细胞以几何级数模式快速分裂增殖并形成 功能有别的 组织、继而形成器官和系统。在经过266天宫内发育成长后，胎儿顺利出生，来到一个完全不同于子宫内环境的世界。不管是呼吸，饮食，排泄，还是交流等等，都发生了很大的变化。<br/>
  在胎儿时期，宝宝的营养物质及氧气是由妈妈通过胎盘输送的，胎儿出生以后，就开始了自主呼吸，通过先天具有的吸吮和吞咽反射，开始吸吮妈妈的乳头，当然我们的小宝宝也会大声的啼哭，通过哭声来表达自己的需求，这对于新生的宝宝来说都是一个个全新的体验，都需要在成长的过程中不断的学习。<br/>
  当然在宝宝的成长过程中，为他们提供必要的环境支持和发育成长所必需的合理营养是使儿童身心得以全面发展的必由之路，也是整个社会保障儿童时期健康成长及早期介入防控成人慢性代谢失须综合征的最住有效途径。在这1000天当中，我们的宝宝每天都会发生一些变化，我们人为的划分了这样几个阶段<br/>
  1、胎儿期：从受精卵形成到小儿出生为止，共40周，称为胎儿期。在胎儿期，胎儿在母亲体内迅速成长。<br/>
  2、新生儿期：从胎儿脐带结扎至出生后28天，称为新生儿期。这个时期主要是适应外界生活的时期。<br/>
  3、婴儿期：从胎儿出生至满1周岁前为婴儿期，这阶段小儿以母乳为主要食品，又称乳儿期。这个阶段是小儿出生后生长发育最迅速的阶段，护理重点是进行科学喂养的指导，提倡母乳喂养，按时添加辅食，给予适当的断奶饮食，注意合理的营养等，加强预防保健，按时完成基础免疫程序，减少各种感染的发生。<br/>
  4、幼儿期：从1周岁至3周岁前为幼儿期。<br/>
  此期小儿的体格发育较婴儿期缓慢，饮食从乳类逐渐过渡为饭菜食物。因与成人、外界环境接触增多，语言、动作及心理方面发育有明显进步，小儿从学步到会跑，开始独立行动；从说单字到使用语言，与别人进行语言与非语言的交流，智力水平有了较大提高；但机体免疫功能仍较差，感染性疾病的发病率仍较高。<br/>
  此期的护理重点是注意断乳后的营养，加强体质锻炼。此期小孩活动范围较广，尤其智力发育较为突出，但对危险事物的识别能力差，因此要注意加强营养，开发孩子智能，并特别做好意外防范，加强传染病预防。<br/>
  婴幼儿的各个阶段虽然有不同的特点，但又互相联系，既有明显的差别，又不能完全分开来。所以这1000天是尤为重要的。
  家长、妇幼保健人员及社区服务者将面临诸多情况，其中哪些又是关系婴幼儿身心健康的关键要点呢？主要有以下几项。优先发展社会性，遵循人体内环境恒定运行机制，支持脑及中枢神经系统优先健康发展，母乳喂养。早期教育。换乳及辅食添加，定期监测评价儿童健康状况。<br/>
  `
  },
  //
  g1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201709/04/nKJxCtmDdz.m3u8',
    title: '月嫂标准站姿',
    memo: `
      一、概述 <br/>
      站姿的学习分为4个部分：脚部姿势——手部姿势——基本站姿——交谈站姿。  <br/>
      二、具体步骤 <br/>
      1、脚部姿势  <br/>
      1）基本站姿：双脚并立平行；  <br/>
      2）小八：脚后跟并拢，右脚向右15度，左脚向左15度，双脚分开30度；  <br/>
      3）右脚丁字步：右脚的脚后跟对牢左脚的脚心即左脚的1/2处，角度一般30度，个子稍微高大点的可以大于30度，但是不要超过60度；  <br/>
      4）左脚丁字步：左脚的脚后跟对牢右脚的脚心即右脚的1/2处，角度30度。  <br/>
      2、手部姿势 <br/>
      1）左手提上来，右手的虎口对牢左手的手指，双手交叉，左手的食指对牢右手的指根部；  <br/>
      2）大拇指内缩，放在脐部的位置，不高于脐上一指，不低于脐上三指，对准脐部中线。  <br/>
      3、基本站姿 <br/>
      脚部姿势加手部姿势。  <br/>
      4、交谈站姿 <br/>
      在基本站姿的基础上，双手掌心朝下。 <br/>
    `
  },
  g2: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201709/04/iPPba57cBF.m3u8',
    title: '月嫂标准坐姿',
    memo: `
      一、概述 <br/>
      坐姿的学习分为四部分：坐前准备-常见坐姿方法-手部姿势-坐姿注意事项。<br/>
      二、具体步骤 <br/>
      1、坐前准备 <br/>
      1）站在凳子的左侧 <br/>
      第一步：右脚站在凳子左脚的前方； <br/>
      第二步：右脚向右夸一小步，左脚跟上（并行或小八都可以）； <br/>
      第三步：右脚后推探凳，以确保凳子在后方。 <br/>
      2）抚裙：穿裙子的女士需要抚裙 <br/>
      以手背抚裙，右手后方以右手抚裙，左手后方以左手抚裙，动作不要太慢，从上到下一步带到位。 <br/>
      2、四种常见坐姿 　 <br/>
      1）基本坐姿：双脚并立平行； <br/>
      2）双腿垂直式坐姿：右脚在后左脚在前，右脚脚尖点地； <br/>
      3）双腿斜放式坐姿：双脚向右前方并拢平行，脚尖朝延伸方向，略微向右； <br/>
      4）双腿叠放式坐姿：常用于坐沙发时，左脚架到右脚，双脚并拢，不要留有空隙。 <br/>
      3、手部姿势<br/>
      双手交叉以基本站姿的姿势，放在左边大腿的中部或右边。 <br/>
      4、坐姿注意事项 　 <br/>
      在规范坐姿的过程中还要注意挺胸、收腹、脖子立起、面带微笑。 <br/>
    `
  },
  h1: {
    videoSrc: 'http://video.yuesaoapp.com/manage-data/201709/04/7GYwcJi8Gx.m3u8',
    title: '具有发汗解表等功效的穴位按摩',
    memo: `
      一、概述</br>
      本节课程的内容包括：坎宫穴、四白穴、天门穴、太阳穴、耳后高骨、印堂穴。</br>
      二、操作步骤</br>
      （一）坎宫穴</br>
      准确定位：自眉心起沿眉毛至眉梢成一横线上。</br>
      按摩方法：用两手两拇指自眉心向两侧眉梢作分推法，连续分推30-50次，称推坎宫。</br>
      功效说明：发汗解表、醒脑明目、开窍醒神。</br>
      主治病症：常用于外感发热、头痛等症状。</br>
      注意事项：多与开天门、揉太阳等合用；若用于治疗目赤肿痛，多和清肝经、清心经、掐揉小天心、清天河水等同用。</br>
      （二）四白穴</br>
      准确定位：目正视，瞳孔直下，在眶下孔凹陷处。</br>
      按摩方法：用中指指腹按揉，20~30次，称为揉四白穴。</br>
      功效说明：清热明目，通经活络。</br>
      主治病症：揉四白穴主要用于治疗近视、目赤痒痛、口眼歪斜等。</br>
      注意事项：治疗小儿假性近视，常与揉睛明、太阳穴同用，治疗口眼歪斜常配合掐承浆、掐人中、按揉合谷等。</br>
      （三）天门穴</br>
      准确定位：头部前后正中线，入前发际正中0.5寸。</br>
      按摩方法：两拇指自下而上交替直推，推30~50次，称开天门。若自眉心推至囟门，推30~50次，则称为“大开天门”。</br>
      功效说明：发汗解表，醒脑开窍，镇惊安神。</br>
      主治病症：感冒、发热、头痛、目上视、风痫、惊风、惊悸等。</br>
      注意事项：对体弱汗多、佝偻病患儿应慎用。</br>
      （四）太阳穴</br>
      准确定位：在两眉后凹陷中。</br>
      按摩方法：用拇指或中指端揉该穴，称揉太阳或运太阳，向眼方向揉或运为补，向耳方向揉或运为泻。一般运30次，揉30~50次。</br>
      功效说明：疏风解表，清热明目，止头痛。</br>
      主治病症：主治感冒、头痛、发热、急慢惊风、心热、烦躁等。</br>
      （五）耳后高骨</br>
      准确定位：耳后高骨下方凹陷处。</br>
      按摩方法：术者用拇指揉耳后高骨下凹陷中，揉50~100次，称揉耳后高骨。</br>
      功效说明：揉耳后高骨：疏风解表，安神除烦，镇静安神。</br>
      主治病症：主治感冒、头痛、烦躁不安、神昏、惊风等。</br>
      注意事项：若治感冒头痛，多与开天门、推坎宫、运太阳等合用；若治疗神昏烦躁等症，多与清肝经、清心经、掐小天心、清天河水合用。</br>
      （六）印堂穴</br>
      准确定位：在两眉内侧端连线的中点处。</br>
      按摩方法：用拇指指甲在眉心处掐，常规掐3-5次，称掐眉心；或用拇指或食指端揉，常规连续揉20-30次，称揉眉心。</br>
      功效说明：疏风清热，明目镇惊</br>
      主治病症：主要用于治疗头痛，流鼻血，小儿惊风等 </br>
      注意事项：掐眉心：镇惊安神，治疗惊厥，治疗慢惊风，常与掐十王、掐人中、掐揉承浆等法合用。揉眉心：疏风清热，明目通窍，治疗感冒、头痛，常与开天门、推坎宫、按揉太阳等相配合。</br>

    `
  },
};
export default {
  name: "playVideo",
  data: function () {
    return {
      title: "",
      videoSrc: '',
      memo: ''
    };
  },
  mounted: function () {
    const index = this.$route.params.index;
    console.log(index);
    this.title = videoData[index].title;
    this.videoSrc = videoData[index].videoSrc;
    this.memo = videoData[index].memo;
    this.$back();
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 44px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  h2 {
    color: #333333;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    flex: 1;
    text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    /* 返回按钮 */
    width: 70px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
  }
  img {
    width: 20px;
    height: 20px;
  }
  .right {
    width: 70px;
    padding-right: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      display: flex;
      justify-content: flex-end;
      &:nth-of-type(1) {
        // margin-right: 20px;
      }
    }
  }
}
.content {
  position: relative;
  top: 44px;
  margin-bottom: 102px;
  .videoBox {
    height: auto;
    width: 100%;
    overflow: hidden;
    letter-spacing: 0px;
    font-size: 0px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .switchBar {
    height: 44px;
    width: 100%;
    background: #ffffff;
    // margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      flex: 1;
      text-align: center;
      height: 100%;
      border-bottom: 2px solid #ffffff;
      h3 {
        color: #999999;
        font-weight: normal;
        font-size: 16px;
        line-height: 44px;
      }
      &.selected {
        border-bottom: 2px solid #0099e8;
        h3 {
          color: #0099e8;
        }
      }
    }
  }
  p {
    margin: 8px;
    color: #333333;
    line-height: 26px;
    // background: #ffffff;
  }
}
.showKaibanTime {
  width: 100%;
  height: calc(100% - 44px);
  position: fixed;
  bottom: 0;
  z-index: 10;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  .zhezhao {
    flex: 1;
  }
  .box {
    background: #ffffff;
    height: 330px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  h4 {
    color: #999999;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    padding-left: 10px;
    padding-right: 10px;
  }
  ul {
    padding-left: 10px;
    padding-right: 10px;
    li {
      color: #333333;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
    }
  }
}
.course-list {
  background-color: #fff;
  height: 60px;
  // border: 1px solid #ff0;
  display: flex;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  img {
    width: 0.5rem;
    // height: 0.2rem;
  }
}
.course-item {
  display: flex;
  flex: 1;
  margin-left: 14px;
  flex-direction: column;
  justify-content: space-around;
}
.footer {
  height: 49px;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  button {
    flex: 1;
    height: 100%;
    border: 0;
    background: #ffffff;
    font-size: 16px;
    color: #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-of-type(1) {
      border-right: 1px solid #eeeeee;
    }
    a {
      color: #666;
    }
    &.baoming {
      flex: 2;
      background: #0099e8;
      color: #ffffff;
    }
  }
}
</style>
