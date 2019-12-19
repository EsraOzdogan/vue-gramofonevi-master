<template>
  <div class="gif" style="margin-top: 85px;">
    <meta http-equiv="refresh" content="5;URL=http://localhost:8082/" />

    <center>
      <a>
        <img src="https://media.giphy.com/media/F0lCMmuyyQrEA/giphy.gif" />
      </a>
      <br />
    </center>
    <center style="margin-top: 30px;">
      <router-link to="/Anasayfa"><button type="submit" class="giris">Gramofon Evi</button></router-link>
        
    
    </center>
  </div>
</template>

<style scoped>
.gif{
   background: url("../components/img/general_bg_image.png") ;
}
.giris {
  background-color:saddlebrown;
  text-decoration: none;
  color: #ffff;
  font-size: 25px;
  font-family: sans-serif;
  border: 10px;
  cursor: pointer;
  border-radius: 8px;
  width: 280px;
  padding: 10px 10px 10px 10px;

}
.giris:hover {
  background-color: rosybrown;
}
</style>