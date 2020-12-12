<template>
  <div class="private-exam-collections">
    <div class="container">
      <h4 class="head">التصنيفات</h4>
      <Loading v-if="isLoading" />
      <NoData v-else-if="!isLoading && collections.length == 0" />
      <div v-else>
        <div class="row">
          <div
            class="col-md-3"
            v-for="collection in collections"
            :key="collection.id"
          >
            <div class="collections">
              
              <div style="height:150px;margin-bottom:10px;position:relative" class="collection-photo">
                <div class="collection-overlay" v-if="!collection.canAccess">
                <div class="position:relative;width:100%;height:100%">
                  <button class="btn btn-primary" style="position:absolute;top:50%;left:50%;"  @click="$router.push(`/collections/${collection.id}/files`)"><i class="fas fa-info-circle"></i> عرض التفاصيل</button>
                </div>
              </div>
                  <img style="width:100%;height:100%" v-if="collection.image" :src="collection.image" />
                  <img style="width:100%;height:100%" v-else src="data:image/jpeg;base64,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" />
                </div>
              <h6 style="margin-bottom:0">{{ collection.examiner.username }}</h6>

              <h5  @click="$router.push(`/collections/${collection.id}/files`)">
                {{ collection.name }}
              </h5>
              <button
              class="btn btn-success"
                @click="confirm(collection.id)"
                v-if="!collection.canAccess"
              >
                كود الإشتراك
              </button>
             
                <button class="btn btn-danger" @click="showConfirmtionPaymentModal=true" v-if="!collection.canAccess">دفع الإشتراك</button>
                <button class="btn btn-primary" style="width:100%" @click="$router.push(`/collections/${collection.id}/files`)" v-if="collection.canAccess">عرض التفاصيل</button>
           
            </div>
          </div>
        </div>
        <div style="margin-top: 15px" v-if="totalPages > 1">
          <vs-pagination :total="totalPages" v-model="page"></vs-pagination>
        </div>
      </div>
    </div>
    <vs-popup
      class="holamundo"
      title=" كود تفعيل الإشتراك"
      :active.sync="showConfirmtionModal"
    >
      <div>
        <div class="form-group">
          <input class="form-control" v-model="code" type="text" />
        </div>
        <button class="btn btn-primary" @click="confirmSubscrubtion">
          تفعيل اﻹشتراك
        </button>
      </div>
    </vs-popup> 
     <vs-popup
      class="holamundo"
      title="  دفع الإشتراك"
      :active.sync="showConfirmtionPaymentModal"
    >
      <div>
      <h5>بعد الدفع أرسل فاتورة الدفع إلى الواتس 01015152796 ، وسيعطونك كود الدخول</h5>
        <button class="btn btn-primary" @click="confirmPayment">
          دفع اﻹشتراك
        </button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
export default {
  middleware: 'auth-student',

  components: {
    Loading,
    NoData,
  },
  data() {
    return {
      showConfirmtionModal: false,
      showConfirmtionPaymentModal: false,
      collections: [],
      myCollection: [],
      page: 0,
      isLoading: true,
      totalPages: 0,
      code: '',
      selectedCollectionId:null
    }
  },
  computed: {},
  created() {
    this.getCollections()
    this.getMyCollections()
  },
  methods: {
    getCollections() {
      this.isLoading = true
      this.$axios
        .get('/student/collections')
        .then((res) => {
          this.collections = res.data.docs
          this.page = res.data.page
          this.totalPages = res.data.totalPages
        })
        .finally(() => (this.isLoading = false))
    },
    getMyCollections() {
             this.isLoading = true;

      this.$axios
        .get('/my-collections')
        .then((res) => {
          this.myCollection = res.data.docs
        })

        .finally(() => (this.isLoading = false))
    },
    confirm(collectionId){
      this.showConfirmtionModal=true;
      this.selectedCollectionId=collectionId;

    },
   
    confirmPayment(){
      this.showConfirmtionPaymentModal=false;
       window.open('https://www.easykash.net/JLW4822','_blank');
    },
    confirmSubscrubtion() {
      this.isLoading = true

      this.$axios
        .post(`/collections/${this.selectedCollectionId}/subscription`, {
          code: this.code,
        })
        .then((res) => {
          this.getMyCollections()
          this.$snotify.success('تم تفعيل الإشتراك بنجاح ')

          this.showConfirmtionModal = false
          this.code = ''
        })
        .catch((e) => {
          this.$snotify.error('الكود الذي أدخلته غير صحيح')
        })
        .finally(() => (this.isLoading = false))
    },
    isNotsubscriped(collectionId) {
      if (this.myCollection.length > 0) {
        
         let item = this.myCollection.filter(function (
          collection,
          index
        ) {
          if (collection.collectionId != null){
            if(collection.collectionId.id == collectionId){

              } return collection;
            }
        });

        if (item.length > 0) {
       
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss">
.private-exam-collections {
  .head {
    font-size: 30px;
    margin-bottom: 20px;
  }
  padding-top: 50px;
  .collections {
    transition: all 0.5s ease;
    cursor: pointer;
    border-bottom: 10px;
    

    .collection-photo{
      position: relative;
    overflow: hidden;
    &:hover{
       .collection-overlay{
         top:0;
        left:0;
       }
        
      }

      .collection-overlay{
          position: absolute;
    top: 100%;
    transition: all .5s ease;
    left: 100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #007afd7a, #007afd57);
     div{
       background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    button{
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
     }
    }

    }
     
    
    &:hover {
      transform: translateY(-10px);
    }
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 15px;
    div {
      text-align: center;
    }
    h6 {
      text-align: center;
    }
    h5 {
          text-align: center;
    /* background: #0989c3; */
    padding: 7px;
    color: #0989c3;
    border-radius: 10px;
    font-size: 14px;
    }
  }
  .vs-pagination--ul {
    margin-bottom: 0 !important;
  }
  .con-vs-pagination {
    margin: auto !important;
  }
}
</style>