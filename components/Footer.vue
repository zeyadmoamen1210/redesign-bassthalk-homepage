<template>
  <div class="footer">
    <div class="container">
      <div class="foot" style="overflow:hidden">
        <div class="row">
          <div class="col-md-3">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>

           <div class="col-md-3">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>

           <div class="col-md-3">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>

           <div class="col-md-3">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>

          <div class="copyright">
            <hr />
            <hr />
            <p>جميع الحقوق محفوظة - بسطتهالك 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  background: url('../assets/imgs/footer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 2px;
    min-height: 29vh;
    margin-top: 100px;
    .foot{
          padding-top: 136px;
          ul{
            li{
              color:#FFF;
            }
          }
    }
    .copyright{
          margin: 24px auto 0;
    width: 44%;
    text-align: center;
    hr{
      background: #FFF;
    &:last-of-type{
          width: 90%;
    text-align: center;
    margin: -11px 32px;
    }
    }
    p{
          margin: 23px;
          display: inline-block;
    text-align: center;
    color: #FFF;
    font-family: "CustomFontRegular"
    }
    }
}
</style>
