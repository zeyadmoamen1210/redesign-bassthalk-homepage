<template>
  <div class="timeline-page">
      <div class="container">
         
          <div class="timeline-section">
              <h5> التايم لاين </h5>
                 <Loading v-if="isLoading" />
                 <NoData v-else-if="!isLoading && posts.length == 0" />
              <div class="timeline-posts-comments" v-else>
                  <div class="timeline-post" v-for="post in posts" :key="post.id">
                          <div class="post-grid">
                            <div class="user-img">
                                <vs-avatar size="60px" v-if="post.user.photo" :src="post.user.photo" />
                                <img v-if="post.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                <img v-if="post.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                
                            </div>
                            <div class="user-info">
                                <h6> {{post.user.username}} </h6>
                                <span> {{ $moment(post.user.createdAt).fromNow() }} </span>
                                <p> {{post.content}} </p>
                            </div>
                          </div>

                         <div class="comment-like">
                          <div :id="`like-${post.id}`" @click="LikePost(post)"> 
                              <img  src="@/assets/imgs/timeline-like.png" alt="">
                                أعجبني
                              </div>
                          <div v-b-toggle="`collapse-${post.id}`"><img src="@/assets/imgs/timeline-comment.png" alt="">  نعليق </div>
                        </div>


                        

                        <!-- Element to collapse -->
                        <b-collapse :id="`collapse-${post.id}`">
                           <section class="comments">
                             <div class="row">
                                 <div class="col-md-10" style="margin:auto;margin-top: 22px;">
                                       <div class="timeline-comment" v-for="comment in post.comments" :key="comment.id">
                                            <div class="post-grid">
                                                <div class="user-img">
                                                    <vs-avatar size="60px" v-if="comment.user.photo" :src="comment.user.photo" />
                                                    <img v-if="comment.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                                    <img v-if="comment.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                                    
                                                </div>
                                                <div class="user-info">
                                                    <h6> {{comment.user.username}} </h6>
                                                    <span> {{ $moment(comment.user.createdAt).fromNow() }} </span>
                                                    <p> {{comment.content}} </p>
                                                </div>

                                                  
                                            </div>

                                            <div class="comment-like">
                                                    <div v-b-toggle="`collapse-${comment.id}`"><img src="@/assets/imgs/timeline-comment.png" alt=""> {{comment.numberOfreplies}} ردود </div>
                                            </div>

                                            <b-collapse :id="`collapse-${comment.id}`">
                                              <section class="replies">
                                                    <div class="col-md-10" style="margin:auto;margin-top: 22px;">
                                                    <div class="timeline-replies" v-for="reply in comment.replies" :key="reply.id">
                                                        <div class="post-grid">
                                                            <div class="user-img">
                                                                <vs-avatar size="60px" v-if="reply.user.photo" :src="reply.user.photo" />
                                                                <img v-if="reply.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                                                <img v-if="reply.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                                                
                                                            </div>
                                                            <div class="user-info">
                                                                <h6> {{reply.user.username}} </h6>
                                                                <span> {{ $moment(reply.user.createdAt).fromNow() }} </span>
                                                                <p> {{reply.content}} </p>
                                                            </div>

                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                              </section>
                                            </b-collapse>
                                        </div>
                                 </div>
                             </div>
                           </section>
                        </b-collapse>

                  </div>
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NoData from '@/components/NoData';
import Loading from '@/components/Loading';
export default {
    components:{
        NoData,
        Loading
    },
    data(){
        return {
            page:0,
            isLoading: true,
            totalPages:0,
            posts: []
        }
    },
    created(){
        this.fetchAllPosts()
    },
    methods:{
        fetchAllPosts(){
            this.$axios.get(`courses/${this.$route.params.id}/posts`).then(res => {
                console.log(res)
                this.posts = res.data.docs;
                this.page = res.data.page;
                this.totalPages = res.data.totalPages;
            }).finally(() => this.isLoading = false)
        },
        LikePost(post){
            let myLike = document.querySelector(`#like-${post.id}`);
            console.log(myLike)
            myLike.style.color = "blue"
            if(myLike.classList.contains("myLike")){
                myLike.classList.remove("myLike")
                 myLike.style.color = "#747474"
            }else{
                
                myLike.classList.add("myLike")
                
                myLike.style.color = "blue"
            }
            this.$axios.patch(`posts/${post.id}/like`).then(res => {
                console.log(res)

            })
        },
    }
}
</script>

<style lang="scss">
.timeline-page{
    padding-top:80px;
    .timeline-section{
        h5{
            font-weight: bold;
            color: #058ac6;
            font-size: 29px;
            margin-bottom: 16px;
        }
        .timeline-posts-comments{
            .timeline-post{
                padding:15px;
                background: #efefef;
                margin-bottom: 10px;
                border-radius: 5px;
                .post-grid{
                    display: flex;
                    .user-img{
                        position: relative;
                        .teacher-hint{
                            position: absolute;
                            left: -30px;
                            top: -30px;
                        }
                        .admin-hint{
                            position: absolute;
                            left: -2px;
                            width: 25px;
                            top: 0;
                        }
                        .vs-avatar--con-img{
                            border: 2px solid #058ac6;
                            padding: 0px;
                            transition: all .2s linear;
                            &:hover{
                                padding:2px;
                            }
                            img{
                                border-radius: 50%;
                            }
                        }
                    }
                    .user-info{
                        padding-right: 15px;
                        h6{
                            color: #3f3f3f;
                            font-family: "CustomFontLight";
                            font-weight: bold;
                            font-size: 17px;
                            margin-bottom: 0;
                            padding-top:7px;
                        }
                        span{
                            font-family: "CustomFontRegular";
                            color: #a0a0a0;
                        }
                    }
                }
                .comment-like{
                    display: flex;
                    margin-right: 83px;
                    div{
                        font-family: "CustomFontLight";
                        color: #747474;
                        font-weight: 600;
                        font-size: 15px;
                        cursor: pointer;

                        &:last-of-type{
                            margin-right:15px ;
                        }
                    }
                }
            }
        }
        .comments{
            .timeline-comment{
                border-top:1px solid #CCC;
                border-bottom:1px solid #CCC;
                padding:10px 0;
            }
        }
        .replies{
            .timeline-replies{
                border-top:1px solid #CCC;
                border-bottom:1px solid #CCC;
                padding:10px 0;
            }
        }
    }
}
</style>