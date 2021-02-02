<template>
  <div>
    <div class="cont">
    <div class="conten">
      <span>Follow Us :</span>
      <ul class="list-unstyled">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
        <li><a href="#"><i class="fab fa-behance"></i></a></li>
      </ul>
    </div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand " href="#"><img src="../assets/hh.webp"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" active-class="active" to="/"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/game"
              >Game
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/reviews"
              >Reviews
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/news"
              >News
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/contact"
              >contact
            </router-link>
          </li>
        </ul>
        
      </div>
      <p>Login/Register</p>
    </nav>
    </div>
  </div>
</template>
<script>
export default {
  name:"navbar",
}
</script>
<style scoped>
nav{
    background: #081624;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
     padding: 20px;
}
.conten{text-align: right; padding-top: 15px;}
.conten span{
  color:#9190a5;
  font-weight: bold;
  display: inline;
}
.conten ul {
  display: inline-block;
  }
.conten ul li {display: inline-block;
    margin-left: 20px;
    
}
.conten ul li a{
  color:#fff;
  transition: all .4s linear;
  }
.conten ul li:hover a{color: #b01ba5;}
nav a.navbar-brand{
    color:#fff;
    font-weight: bold;
}
nav ul .nav-link:hover{
  color: #b01ba5;
  font-size: 16px;
}
nav ul .nav-link{
    font-weight: bold;
    transition: all .5s linear;
    margin-right: 20px;
}
nav li a{
    color:#fff
}
.cont{
  margin:auto;
  width:95%;
}
p{
  color: #fff;
    font-weight: bold;
    margin: 10px 15px 10px 22%;
}
</style>
