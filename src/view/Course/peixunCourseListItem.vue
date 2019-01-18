<template>
    <div class="peixunCourseListItem" @click="itemClick">
        <div class="img">
            <img :src="myCourseData.imgUrl">
        </div>
        <div class="info">
            <h3>{{ myCourseData.title }}</h3>
            <h4>{{ myCourseData.memo }}</h4>
            <h5>学习人数：{{ myCourseData.num }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "peixunCourseListItem",
    props: {
        courseData: {
            type: Object,
            default: function () {
                return {
                    imgUrl: "",
                    title: "",
                    memo: "",
                    num: "",
                    id: ""
                }
            }
        }
    },
    data: function () {
        return {
            myCourseData: this.courseData
        }
    },
    methods: {
        itemClick: function () {
            console.log('hahahaha ');
            this.$emit('itemClick', this.myCourseData);
        }
    },
     mounted() {
    this.$back();
  },
};
</script>

<style scoped lang="scss">
.peixunCourseListItem {
    width: 100%;
    height: 130px;
    overflow: hidden;
    display: flex;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    justify-content: fled-start;
    align-items: center;
    padding-right: 8px;
    padding-left: 8px;
    .img {
        width: 100px;
        height: 100px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        flex: 1;
        padding-left: 10px;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding-right: 8px;
        h3 {
            font-size: 16px;
            color: #333333;
        }
        h4 {
            color: #666666;
            font-weight: normal;
            font-weight: 14px;
            padding-right: 8px;
        }
        h5 {
            color: #999999;
            font-weight: normal;
            font-size: 12px;
        }
    }
}
</style>
