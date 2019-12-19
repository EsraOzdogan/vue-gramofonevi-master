<template>
    <div>
      <div class="vld-parent">
        <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        ></loading>
      </div>
      <div class="wrapper">
        <div class="container">
            <div class="row">        
                    <div class=" iletişim ">
                        <div class="iletisim-aciklama">
                            <h3 class="iletisim-baslik"><i class="fa fa-user"></i>İletişim Bilgileri</h3>
                            <ul>
                                <li><bold>Firma adı:</bold> Gramofon Evi Ltd. Şti.</li>
                                <li><bold>Yetkili:</bold> Burçin Demirayak</li>							
                                <li><bold>Telefon:</bold> 0 505 486 76 08-09</li>							
                                <li><bold>Telefon 2:</bold> 0 232 278 20 64</li>																					
                                <li><bold>Adres:</bold> Konak Mah.871.Sokak No 19 Kızlarağası Hanı 2.kat No:129 35250 Konak/İzmir</li>							
                                <li><bold>Adres 2:</bold> 1005 sk. no:22 Alaçatı Çeşme İZMİR</li>							
                                <li><bold>Adres 3:</bold> Konak Mah. 860 sokak NO:14 Pirinç Center AVM No: 103 Konak İZMİR</li>							
                                <li><bold>E-posta:</bold> gramofonevi@yahoo.com</li>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.874028598474!2d27.13095395079231!3d38.421275979546984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e4ba4ded8d%3A0x533a2320120201fb!2sGramofon+Evi!5e0!3m2!1str!2str!4v1486849512996" width="100%" height="450" frameborder="0" style="border:0" ></iframe>							
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.803658634055!2d26.37290195078809!3d38.28404397957009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb78dfccd19053%3A0x3805796bba2837a2!2sGramofon+Evi+Ala%C3%A7at%C4%B1!5e0!3m2!1str!2str!4v1486849529643" width="100%" height="450" frameborder="0" style="border:0" ></iframe>							
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.869830998808!2d27.129553150792493!3d38.42137297954701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e35d3e8801%3A0x1508fc010281fe1b!2sPirin%C3%A7+Center+AVM!5e0!3m2!1str!2str!4v1486849568573" width="100%" height="450" frameborder="0" style="border:0" ></iframe>						
                            </ul>
                        </div>
                    </div>
                    <div class="iletişim">
                        <div class="iletisim-formu">
                            <h3 class="iletisim-baslik"><i class="fa fa-envelope"></i>İletişim Formu</h3>
                            <form   >
                                <div class="form-item">
                                    <input placeholder="Ad soyad">
                                </div>
                                <div class="form-item">
                                    <input placeholder="E-posta" >
                                </div>
                                <div class="form-item">
                                    <input  placeholder="Telefon">
                                </div>
                                <div class="form-item">
                                    <textarea  placeholder="Mesajınız" ></textarea>
                                </div>
                                <button class="kart-buton " >Gönder</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    
 </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  
  data() {
    return {
      isLoading: false,
      fullPage: true,
      
    };
  },
  
  components: {
    Loading
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000 );
    }
  }
};
</script>

<style scoped>
 .wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px ;
  }
  .container{
      width: 100%;
     margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
  }
.iletişim {
    width: 50%;
    float: left;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

}
.iletisim-aciklama, .iletisim-formu {
    background: #fff;
    padding: 20px;
    margin-bottom: 40px;
}
h3.iletisim-baslik {
    border-bottom: 4px double #ddd;
    padding-bottom: 6px;
}
h3{
     margin: 0 0 10px;
    font-family: 'Lora', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
h3.iletisim-baslik i {
    margin-right: 10px;
}

.fa {
    font: normal normal normal 14px/1 ;
    font-size: inherit;
}
ul {
    list-style: outside none none;/*noktalı görünümden koruyor*/
    margin: 0;
    padding: 0;
}
.iletisim-aciklama ul li {
    border-bottom: 1px solid #ddd; /*altındaki çizgiler*/
    padding: 15px 0;
}

frame {
    width: 100%;
    height: 450px;
}

.form-item {
    margin-bottom: 20px;
}
.iletisim-formu input {
    height: 40px;
    padding-left: 10px;
}

input {
    border: 1px solid #ddd;
    padding: 5px;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    letter-spacing: normal;
    word-spacing: normal;
    text-align: start;
    background-color: white;
    cursor: text;
}
.iletisim-formu textarea {
    height: 200px;
    padding: 15px;
}
input, textarea {
    border: 1px solid #ddd;
    width: 100%;
    margin: 0;
}
textarea {
    letter-spacing: normal;
    word-spacing: normal;
    background-color: white;
    cursor: text;
    
}
input:hover{
    border-color: #88604b;

}
 button.kart-buton {
    border: 1px solid #ddd;
    background: #88604b none repeat scroll 0 0;
    padding: 3px;
    color: #fff;
    padding: 8px 15px;
    float: right;
}
.iletisim-formu{
   padding-bottom: 15px;
}
</style>

