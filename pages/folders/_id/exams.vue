<template>
    <div class="folder-exams">
        <div class="container">
            <h4> الإمتحانات </h4>
            <Loading v-if="isLoading" />
            <NoData v-else-if="!isLoading && exams.length == 0" />
            <div class="row" v-else>
                <div class="col-md-3" v-for="exam in exams" :key="exam.id">
                    <div class="exam-section" @click="$router.push(`/courseExam/${exam.id}`)">
                        <h5> {{exam.title}} </h5>
                        <div class="exam-difficultyLevel">
                            <img src="@/assets/imgs/school-sport-day-008-512.png" style="width:100px;height:100px" />
                             <!-- <img v-if="exam.difficultyLevel == 'difficult'" src="@/assets/imgs/easy-level-3.png" alt="">
                            <img v-else-if="exam.difficultyLevel == 'middle'" src="@/assets/imgs/easy-level-2.png" alt="">
                            <img v-else-if="exam.difficultyLevel == 'easy'" src="@/assets/imgs/easy-level-1.png" alt=""> -->

                            <span> {{exam.difficultyLevel}} </span> 
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
export default {
    components:{
        Loading,
        NoData
    },
    created(){
        this.getExamsToFolder()
    },
    data(){
        return {
            exams: [],
            isLoading: true,
        }
    },
    methods:{
        getExamsToFolder(){
            this.$axios.get(`folders/${this.$route.params.id}/exams`).then(res => {
                console.log(res)
                this.exams = res.data
            }).finally(() => this.isLoading = false)
        }
    }
}
</script>

<style lang="scss">
.folder-exams{
    .container{
        >h4{
            margin-bottom: 18px;
            color: #0989c3;
        }
    }
    padding-top:80px;
    .exam-section{
        padding: 15px;
        box-shadow: 0px 1px 9px 0px #DDD;
        transition: all .5s ease;
        cursor: pointer;
        &:hover{
            transform: translateY(-10px);
        }
        h5{
            text-align: center;
            font-size: 25px;
        }
        >span{
            display: block;
            text-align: center;
        }
        .exam-difficultyLevel{
            display: flex;
            flex-direction: column;
            img{
                margin: auto;
            }
            span{
                    text-align: center;
                    font-size: 20px;
                    margin-top: 8px;
                    font-family: "CustomFontRegular";
            }
        }    
    }
    
}

</style>