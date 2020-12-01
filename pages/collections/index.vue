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
              <div>
                <vs-avatar
                  :src="collection.examiner.photo"
                  v-if="collection.examiner.photo"
                  size="70px"
                />
                <vs-avatar
                  src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg"
                  v-else
                  size="70px"
                />
              </div>
              <h6>{{ collection.examiner.username }}</h6>

              <h5 @click="$router.push(`/collections/${collection.id}/files`)">
                {{ collection.name }}
              </h5>
              <h5
                @click="confirm(collection.id)"
                v-if="isNotsubscriped(collection.id)"
              >
                كود الإشتراك
              </h5>
             
                <h5 @click="showConfirmtionPaymentModal=true" v-if="isNotsubscriped(collection.id)">دفع الإشتراك</h5>
           
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
      background: #0989c3;
      padding: 7px;
      color: #fff;
      border-radius: 10px;
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