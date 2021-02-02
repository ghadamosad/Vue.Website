<template>
  <div>
    <!--start background-->
        <div class="back">
            <navbar></navbar>
            <div class="container">
                <h2>Contact</h2>
                <p>Home  / <span>Contact</span></p>
            </div>        
        </div>
        <!-- end background-->
    <!-- start contact-->
    <div class="contact">
        <div class="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389553.4259447416!2d7.318547151770341!3d47.138823722663595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d63188eaf0227%3A0xe7051049bcae5f11!2z2YHYsdin2YbYtCDZg9mI2YbYqtmH2Iwg2YHYsdmG2LPYpw!5e0!3m2!1sar!2seg!4v1612143080198!5m2!1sar!2seg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div class="all">
            <div class="row">
                <div class="col-md-7">
                    <input type="text" placeholder="YOUR NAME"/>
                    <input type="text" placeholder="YOUR E-MAIL"/>
                    <input type="text" placeholder="SUBJECT"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Read More <img src="../assets/icon/double-arrow.webp"></button>
                </div>
                <div class="col-md-5">
                    <h3>Howdy! Say hello</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
                    <span><i class="fal fa-map-marker-alt"></i>  Main Str, no 23, New York</span>
                    <span><i class="far fa-phone-alt"></i>  +546 990221 123</span>
                    <span><i class="far fa-envelope"></i>  hosting@contact.com</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!--end contact-->
    <!-- start sub-->
    <div class="sub text-center">
      <div class="container">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <input type="email" placeholder="ENTER YOUR E-MAIL" />
        <button>
          Read More <img src="../assets/icon/double-arrow.webp" />
        </button>
      </div>
    </div>
    <!-- end sub-->

    <!-- start footer-->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <img src="../assets/footer-left-pic.webp" />
          </div>
          <div class="col-md-8">
            <div class="all text-center">
              <img src="../assets/hh.webp" />
              <ul class="list-unstyled">
                <li>Home</li>
                <li>Games</li>
                <li>Reviews</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
              <ul class="list-unstyled two">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-behance"></i></a>
                </li>
              </ul>
              <p>
                Copyright ©2021 All rights reserved | This template is made with
                by Ghada Mosad <i class="far fa-heart"></i>
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <img src="../assets/footer-right-pic.webp" />
          </div>
        </div>
      </div>
    </footer>
    <!-- end footer-->
  </div>
</template>
<script>
import navbar from './navbar.vue'
export default {
  components:{navbar}
}
</script>
<style scoped>
.back{
    background-image: url(https://preview.colorlib.com/theme/endgam/img/page-top-bg/4.jpg);
    background-size: cover;
    height: 300px;
    color: #fff
}
.back h2{
    font-size: 39px;
    margin-top: 11px;
    padding-top: 2%;
}
.back p{font-weight: bold;}
.back p span{
    color: #c313b7;
    font-style: italic;
}
.contact{
    background: linear-gradient(45deg, #501755 0%, #2d1854 100%);
    padding:3% 0 7% ;
}
iframe{
    width: 100%;
}
.contact .all{margin-top: 10%;}
.contact .all input{
    color: #fff;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 30px 0 20px;
    outline: none;
    font-weight: bold;
    font-style: italic;
}
.contact .all textarea{
        width: 100%;
    height: 145px;
    margin-top: 20px;
    background: none;
    border: none;
    border-bottom: 3px solid #ccc;
    font-size: 19px;
    color: #fff;
    outline: none;
}
.contact h3{
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    margin: 20px 0;
}
.contact p{
    color: #68647d;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 20px;
}
.contact span{
    display: block;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 500;
}
.contact span i{
    color: #b01ba5;
    margin-right: 20px;
    font-size: 20px;
}
.contact button{
    border: none;
    background: #fff;
    padding: 15px 32px;
    font-weight: 600;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    position: relative;
    outline: none;
    cursor: pointer;
    margin-top: 35px;
}
.contact button::before{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 9px;
    top: 10px;
    background: #b01ba5;;
    z-index: -2 ;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
}
.contact button img{margin-left: 10px;} 
</style>