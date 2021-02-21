<template>
  <div class="timeline-page">
      <div class="container">
          <h5> مجموعة النقاش </h5>
            <div class="createPost">
                <div class="form-group">
                    <input @keydown.enter="createPost" type="text" v-model="postCreate.content" class="form-control" placeholder="كتابة منشور">
                    <div class="file-upload">
                        <div>
                            <i class="fas fa-file-image"></i>
                            <input type="file" @change="fileSelected">
                        </div>
                    </div>
                    <div class="url-preview" v-if="url"> <img :src="url" alt=""> </div>
                </div>
            </div>
           <Loading  v-if="isLoading"/>
           <NoData  v-else-if="!isLoading && posts.length == 0"/>
          <div v-else class="timeline-section">
              <div class="timeline-posts-comments">
                  <div class="timeline-post" v-for="post in posts" :key="post.id">
                          <div class="post-grid">
                            <div class="user-img">
                                <vs-avatar size="60px" v-if="post.user.photo" :src="post.user.photo" />
                                <img v-if="post.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                <img v-if="post.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                
                            </div>
                            <div class="user-info">
                                <h6> {{post.user.username}} </h6>
                                <span> {{ $moment(post.createdAt).fromNow() }} </span>
                                <p> {{post.content}} </p>
                            </div>
                          </div>
                            <div>
                                <selectedImg style="margin-right: 81px;" :imgUrl="post.image"/>
                            </div>
                         <div class="comment-like">
                          <div :style="{color: post.isLiked ? 'blue' : '#747474'}" :id="`like-${post.id}`" @click="LikePost(post)"> 
                              <img  src="@/assets/imgs/timeline-like.png" alt="">
                                أعجبني
                              </div>
                          <div v-if="post && post.comments" v-b-toggle="`collapse-${post.id}`"><img src="@/assets/imgs/timeline-comment.png" alt=""> ( {{post.comments.length }} )  نعليق </div>
                          

                          <vs-dropdown vs-trigger-click	class="button-operation" v-if="$auth.user.role == 'admin' || $auth.user.id == post.user.id">
                            <a class="a-icon" href="#">
                                <i class="fas fa-ellipsis-v"></i>
                            </a>

                            <vs-dropdown-menu>
                                <vs-dropdown-item @click="editPost(post)">
                                تعديل 
                                </vs-dropdown-item>
                                <vs-dropdown-item @click="deletePost(post)">
                                حذف
                                </vs-dropdown-item>
                            </vs-dropdown-menu>
                            </vs-dropdown>
                        </div>


                        

                        <!-- Element to collapse -->
                        <b-collapse :id="`collapse-${post.id}`">
                           <section class="comments">
                             <div class="row">
                                 <div class="col-md-10" style="margin:auto;margin-top: 22px;">

                                     <div class="createPost">
                <div class="form-group">
                    <input @keydown.enter="createComment(post)" type="text" v-model="commentCreate.content" class="form-control" placeholder="كتابة منشور">
                    <div class="file-upload">
                        <div>
                            <i class="fas fa-file-image"></i>
                            <input type="file" @change="fileSelectedComment">
                        </div>
                    </div>
                </div>
                <div>
                                <selectedImg style="margin-right: 81px;" :imgUrl="commentUrl"/>
                            </div>
            </div>


                                       <div class="timeline-comment" v-for="comment in post.comments" :key="comment.id">
                                            <div class="post-grid">
                                                <div class="user-img">
                                                    <vs-avatar size="60px" v-if="comment.user.photo" :src="comment.user.photo" />
                                                    <img v-if="comment.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                                    <img v-if="comment.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                                    
                                                </div>
                                                <div class="user-info">
                                                    <h6> {{comment.user.username}} </h6>
                                                    <span> {{ $moment(comment.createdAt).fromNow() }} </span>
                                                    <p> {{comment.content}} </p>
                                                </div>

                                            </div>

                                            <div v-if="comment.image">
                                <selectedImg style="margin-right: 81px;" :imgUrl="comment.image"/>
                            </div>

                                            <div class="comment-like">
                                                    <div v-b-toggle="`collapse-${comment.id}`"><img src="@/assets/imgs/timeline-comment.png" alt=""> {{comment.numberOfreplies}} ردود </div>
                                                      <vs-dropdown vs-trigger-click v-if="$auth.user.role == 'admin' || $auth.user.id == post.user.id"	class="button-operation">
                            <a class="a-icon" href="#">
                                <i class="fas fa-ellipsis-v"></i>
                            </a>

                            <vs-dropdown-menu>
                                <vs-dropdown-item @click="editComment(comment)">
                                تعديل  ({{comment.replies.length}})
                                </vs-dropdown-item>
                                <vs-dropdown-item @click="deleteComment(comment)">
                                حذف
                                </vs-dropdown-item>
                            </vs-dropdown-menu>
                            </vs-dropdown>
                                            </div>

                                            

                                            <b-collapse :id="`collapse-${comment.id}`">
                                              <section class="replies">
                                                    <div class="col-md-10" style="margin:auto;margin-top: 22px;">


                                                        <div class="createPost">
                <div class="form-group">
                    <input @keydown.enter="createReply(comment)" type="text" v-model="replyCreate.content" class="form-control" placeholder="كتابة رد">
                    <div class="file-upload">
                        <div>
                            <i class="fas fa-file-image"></i>
                            <input type="file" @change="fileSelectedReply">
                        </div>
                    </div>
                </div>
                <div>
                                <selectedImg style="margin-right: 81px;" :imgUrl="replyUrl"/>
                            </div>
            </div>


                                                    <div class="timeline-replies" v-for="reply in comment.replies" :key="reply.id">
                                                        <div class="post-grid">
                                                            <div class="user-img">
                                                                <vs-avatar size="60px" v-if="reply.user.photo" :src="reply.user.photo" />
                                                                <img v-if="reply.user.role == 'teacher'" class="teacher-hint" src="@/assets/imgs/teacher-hint.png" alt="">
                                                                <img v-if="reply.user.role == 'admin'" class="admin-hint" src="@/assets/imgs/admin-last.png" alt="">

                                                                
                                                            </div>
                                                            <div class="user-info">
                                                                <h6> {{reply.user.username}} </h6>
                                                                <span> {{ $moment(reply.createdAt).fromNow() }} </span>
                                                                <p> {{reply.content}} </p>
                                                            </div>
                                                            


                                                               <vs-dropdown v-if="$auth.user.role == 'admin' || $auth.user.id == post.user.id" vs-trigger-click	class="button-operation">
                            <a class="a-icon" href="#">
                                <i class="fas fa-ellipsis-v"></i>
                            </a>

                            <vs-dropdown-menu>
                                <vs-dropdown-item @click="editReply(comment, reply)">
                                تعديل
                                </vs-dropdown-item>
                                <vs-dropdown-item @click="deleteReply(comment, reply)">
                                حذف
                                </vs-dropdown-item>
                            </vs-dropdown-menu>
                            </vs-dropdown>

                                                        </div>
                                                        <div>
                                <selectedImg style="margin-right: 81px;" :imgUrl="reply.image"/>
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


      <!-- For Edit Post -->
      <vs-popup class="holamundo"  title="تعديل المنشور" :active.sync="editPostPopup">
        <div class="post-popup">
            <div class="form-group">
                <input class="form-control" type="text" v-model="forEditPost.content" id="">
            </div>
             <div class="form-group">
                <div class="file-choose">
                  <input type="file" @change="fileSelectedEdit" placeholder="قم بأرفاق أيقونه" />
                  <img v-if="editUrl" :src="editUrl" style="max-width: 100%; max-height: 80%;" />
                  <span v-else>
                    <img src="@/assets/imgs/noun_Camera_1903011.png" /> قم
                    بأرفاق أيقونة للمادة
                  </span>
                </div>
              </div>

            <vs-button @click="editPostMain"> تعديل </vs-button>
        </div>
    </vs-popup>


     <!-- For Edit Comment -->
    <vs-popup class="holamundo"  title="تعديل التعليق" :active.sync="editCommentPopup">
      <div class="post-popup">
            <div class="form-group">
                <input class="form-control" type="text" v-model="forEditComment.content" id="">
            </div>
             <div class="form-group">
                <div class="file-choose">
                  <input type="file" @change="fileSelectedEdit" placeholder="قم بأرفاق أيقونه" />
                  <img v-if="editUrl" :src="editUrl" style="max-width: 100%; max-height: 80%;" />
                  <span v-else>
                    <img src="@/assets/imgs/noun_Camera_1903011.png" /> قم
                    بأرفاق أيقونة للمادة
                  </span>
                </div>
              </div>

            <vs-button @click="editCommentMain"> تعديل </vs-button>
        </div>
    </vs-popup>

     <!-- For Edit Reply -->
    <vs-popup class="holamundo"  title="تعديل الرد" :active.sync="editReplyPopup">
      <div class="post-popup">
            <div class="form-group">
                <input class="form-control" type="text" v-model="forEditReply.content" id="">
            </div>

             <div class="form-group">
                <div class="file-choose">
                  <input type="file" @change="fileSelectedEdit" placeholder="قم بأرفاق أيقونه" />
                  <img v-if="editUrl" :src="editUrl" style="max-width: 100%; max-height: 80%;" />
                  <span v-else>
                    <img src="@/assets/imgs/noun_Camera_1903011.png" /> قم
                    بأرفاق أيقونة للمادة
                  </span>
                </div>
              </div>

            <div class="file-select"></div>
            <vs-button @click="editReplyMain"> تعديل </vs-button>
        </div>
    </vs-popup>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import selectedImg from '@/components/selectedImg'
export default {
    components:{
        Loading,
        NoData,
        selectedImg
    },
    data(){
        return {
            page:0,
            totalPages:0,
            posts: [],
            isLoading: true,
            photo:"",
            url:"",
            commentUrl:"",
            replyUrl:"",
            replyPhoto:"",
            commentPhoto:"",
            postCreate:{
                content:"",
                image:""
            },
            commentCreate:{
                content:"",
                image:""
            },
            editphoto:"",
            replyCreate:{
                content:"",
                image:""
            },
            forEditReply:{
                content:"",
                id:"",
                image:""
            },
            forEditComment:{
                content:"",
                id:"",
                image:""
            },
            editUrl:"",
            forEditPost:{
                content:"",
                id:"",
                image:""
            },
        
            editPostPopup: false,

           
            editCommentPopup: false,


            editReplyPopup: false,
            commentId: ""
        }
    },
    created(){
        this.fetchAllPosts()
    },
    methods:{
        fileSelectedEdit(e){
            if (e.target.files.length > 0) {
                // this.forEditReply.image = "";

                // this.forEditComment.image = ""
                // console.log("files", e.target.files);
                // this.forEditReply.image = e.target.files[0];
                // this.forEditComment.image = e.target.files[0];
                this.editphoto = e.target.files[0];
                    this.editUrl = URL.createObjectURL(this.editphoto);
                // console.log(e.target.files[0]);
            }
        },
        editPost(post){
            this.forEditPost.id = post.id;
            this.forEditPost.content = post.content;
                      this.editphoto =  post.image 
                        this.editUrl = post.image ;

            this.editPostPopup = true
        },
        editReply(comment, reply){
            this.forEditReply.id = reply.id;
            this.forEditReply.content = reply.content;
             this.editphoto =  reply.image 
            this.editUrl = reply.image 
            this.commentId = comment.id
            this.editReplyPopup = true
        },
        editReplyMain(){
            this.isLoading = true
            this.editReplyPopup = false
            let formData = new FormData()
            formData.append("content", this.forEditReply.content)
            if(this.editphoto != ""){
                formData.append("image", this.editphoto)
            }
            this.$axios.put(`comments/${this.commentId}/replies/${this.forEditReply.id}`, formData)
                .then(res => {
                    this.fetchAllPosts()
                    this.$snotify.success("تم التعديل بنجاح")
                
            }).finally(() => this.isLoading = false)
        },
        editPostMain(){
            
            this.isLoading = true
            this.editPostPopup = false
            let formData = new FormData()
            formData.append("content", this.forEditPost.content)
            if(this.editphoto != ""){
                formData.append("image", this.editphoto)
            }
            this.$axios.put(`posts/${this.forEditPost.id}`, formData).then(res => {
                this.fetchAllPosts()
                this.$snotify.success('تم التعديل بنجاح')
            }).finally(() => this.isLoading = false)
        },



         editComment(comment){
            this.forEditComment.id = comment.id;
            this.forEditComment.content = comment.content;
            this.editphoto = comment.image
            this.editUrl = comment.image
            this.editCommentPopup = true
        },
        editCommentMain(){
            this.isLoading = true
            let formData = new FormData()
            formData.append("content", this.forEditComment.content)
            if(this.editphoto){
                formData.append("image", this.editphoto)
            }
            this.$axios.put(`comments/${this.forEditComment.id}`, formData).then(res => {
                this.fetchAllPosts()
                this.editCommentPopup = false
                this.$snotify.success('تم التعديل بنجاح')
            }).finally(() => this.isLoading = false)
        },



        deletePost(post){

             this.$snotify.confirm("هل تريد حذف  المنشور  المُحدد ", " هل أنت متأكد", {
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        buttons: [
          {
            text: "موافق",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = true;

               this.$axios.delete(`posts/${post.id}`)
                .then(res => {
                    this.fetchAllPosts()
                    this.$snotify.success("تم الحذف بنجاح")
                
            }).finally(() => this.isLoading = false)
            }
          },
          {
            text: "إلغاء",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = false;
            }
          }
        ]
      });
        },



        deleteComment(comment){

             this.$snotify.confirm("هل تريد حذف  التعليق  المُحدد ", " هل أنت متأكد", {
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        buttons: [
          {
            text: "موافق",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = true;

               this.$axios.delete(`comments/${comment.id}`)
                .then(res => {
                    this.fetchAllPosts()
                    this.$snotify.success("تم الحذف بنجاح")
                
            }).finally(() => this.isLoading = false)
            }
          },
          {
            text: "إلغاء",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = false;
            }
          }
        ]
      });
        },



         deleteReply(comment, reply){

             this.$snotify.confirm("هل تريد حذف  الرد  المُحدد ", " هل أنت متأكد", {
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        buttons: [
          {
            text: "موافق",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = true;

               this.$axios.delete(`comments/${comment.id}/replies/${reply.id}`)
                .then(res => {
                    this.fetchAllPosts()
                    this.$snotify.success("تم الحذف بنجاح")
                
            }).finally(() => this.isLoading = false)
            }
          },
          {
            text: "إلغاء",
            action: toast => {
              this.$snotify.remove(toast.id);
              this.isLoading = false;
            }
          }
        ]
      });
        },

        fileSelected(e){
            if(e.target.files.length > 0){
                this.photo = e.target.files[0];
                this.url = URL.createObjectURL(this.photo)
            }
        },
        fileSelectedComment(e){
            if(e.target.files.length > 0){
                this.commentPhoto = e.target.files[0];
                this.commentUrl = URL.createObjectURL(this.commentPhoto)
            }
        },
        fileSelectedReply(e){
            if(e.target.files.length > 0){
                this.replyPhoto = e.target.files[0];
                this.replyUrl = URL.createObjectURL(this.replyPhoto)
            }
        },
        createPost(){
            if(this.postCreate.content !== ""){
                this.isLoading = true;
                let from_date = new FormData();
                from_date.append("content", this.postCreate.content)
                if(this.photo !== ""){
                     from_date.append("image", this.photo)
                }
                this.$axios.post(`courses/${this.$route.params.id}/posts`, from_date).then(res => {
                    this.fetchAllPosts()
                    this.postCreate.content = ""
                    this.photo="",
                    this.url="",
                    this.commentUrl="",
                    this.replyUrl="",
                    this.replyPhoto="",
                    this.commentPhoto="",

                    this.$snotify.success("تم إضافة المنشور بنجاح")
                }).finally(() => this.isLoading = false)
            }
        },
        createComment(post){
            if(this.commentCreate.content !== ""){
                this.isLoading = true;
                let from_date = new FormData();
                from_date.append("content", this.commentCreate.content)
                if(this.commentPhoto !== ""){
                     from_date.append("image", this.commentPhoto)
                }
                this.$axios.post(`posts/${post.id}/comments`, from_date).then(res => {
                    this.fetchAllPosts()
                                    this.commentCreate.content = ""

                    this.photo="",
                    this.url="",
                    this.commentUrl="",
                    this.replyUrl="",
                    this.replyPhoto="",
                    this.commentPhoto="",
                    this.$snotify.success("تم إضافة التعليق بنجاح")
                }).finally(() => this.isLoading = false)
            }
        },
        createReply(comment){
            if(this.replyCreate.content !== ""){
                this.isLoading = true;
                let from_date = new FormData();
                from_date.append("content", this.replyCreate.content)
                if(this.replyPhoto !== ""){
                     from_date.append("image", this.replyPhoto)
                }
                this.$axios.post(`comments/${comment.id}/replies`, from_date).then(res => {
                    this.fetchAllPosts()
                    this.replyCreate.content = ""
                    this.photo="",
                    this.url="",
                    this.commentUrl="",
                    this.replyUrl="",
                    this.replyPhoto="",
                    this.commentPhoto="",
                    this.$snotify.success("تم إضافة المنشور بنجاح")
                }).finally(() => this.isLoading = false)
            }
        },
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
                res.data
                let postIndex = this.posts.findIndex(obj => obj.id === res.data.id)
                this.posts[postIndex] = res.data
            })
        },
    }
}
</script>

<style lang="scss">
.timeline-page{
    padding-top:80px;
    .container{
        >h5{
            font-weight: bold;
            color: #058ac6;
            font-size: 29px;
            margin-bottom: 16px;
        }
    }
    .createPost{
        .form-group{
            position: relative;
            .url-preview{
                width: 100px;
                margin-top: 15px;
                border: 1px solid #058ac6;
                padding: 2px;
                img{
                    width:100%;
                    height:100%
                }
            }
            .file-upload{
                position: absolute;
                top: 0;
                left: 0;
                >div{
                    position: relative;
                    input{
                            width: 50px;
                            opacity: 0;
                            z-index: 2;
                            cursor: pointer;
                    }
                    input,i{
                        position: absolute;
                        top:0;
                        left: 0;
                    }
                    i{
                        cursor: pointer;
                        left: 20px;
                        top: 6px;
                        z-index: 1;
                        font-size: 22px;
                        color: #058ac6;
                    }
                }
            }
        }
    }
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
                position: relative;
                .button-operation{
                    position: absolute;
                    top: 10px;
                    left: 19px;
                }
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
                position: relative;
            }
        }
        .replies{
            .timeline-replies{
                border-top:1px solid #CCC;
                border-bottom:1px solid #CCC;
                padding:10px 0;
                position: relative;
            }
        }
    }
    .file-choose {
                position: relative;
                width: 100%;
                height: 200px;
                margin-top: 13px;
                input[type="file"] {
                    position: absolute;
                    width: 100%;
                    /* visibility: hidden; */
                    opacity: 0;
                    height: 100%;
                    cursor: pointer;
                    margin-top: 10px;
                }
                span {
                    border: 1px dashed #444444;
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    background: #FFF;
                    z-index: -1;
                    margin: 10px 0;
                    height: 100%;
                    text-align: center;
                    cursor: pointer;
                    border-radius: 15px;
                    line-height: 186px;
                    color: #444444;
                }
            }
}
</style>