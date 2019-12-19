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
        <div class="container"><!--anasayfa ve pikapiğnesi sayfasına gidiş-->
          <div class="row">
            <div class="geridönüs-ic">
              <a><router-link to="/">Ana Sayfa</router-link></a>  <!--eski sayfalara dönüş linkleri-->
              <span> &nbsp; &gt; &nbsp;</span>
              <a><router-link to="/productlist">PİKAP İĞNESİ -AKS</router-link></a>
            </div>
          </div>
          <div class="Urun">
            <div class=""><!--ürün adet ve filtre-->
              <h1>PİKAP İĞNESİ -AKS</h1>
              <div>
                <div class="ürünsayi">
                  <div>  <!--ürün bilgisi-->
                    <div>
                      12 ürün
                    </div>

                    <div class="ürünsecenek">  <!--ürün filtreleme-->
                      <select id="ürünfiltreleme">
                        <option value="alfabetik-asc">Ürün Adı (A-Z)</option>
                        <option value="alfabetik-desc">Ürün Adı (Z-A)</option>
                        <option value="tarih-desc" selected="selected">En yeniler</option>
                        <option value="fiyat-asc">En düşük fiyat</option>
                        <option value="fiyat-desc">En yüksek fiyat</option>
                      </select>
                    </div>

                  </div>
                </div>
                <br>
                <br>
                <div class="row ">
                    <b-card
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                
                    >
                    <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/20522-s-l300--3--262x262.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                        <b-card-text style="font-size:13px;">                   
                            SANYO 2601 PİKAP İĞNESİ
                        </b-card-text>
                        <span class="image1f"> 150 TL</span>                    
                    </b-card>

                      <b-card
                    
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                      href="/PikapIgnesiVeKristali"
                    >
                    <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/9b7af-s-l300--2--262x231.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                        <b-card-text style="font-size:13px;">                   
                            ACOS M6 PİKAP İĞNESİ
                        </b-card-text>
                        <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    
                    <b-card
                          
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                        <div class="image-sepet">
                        <img src="https://www.gramofonevi.com/uploads/product/91302-e008901-262x197.jpg" class="image" alt="">

                        <div class="middle">
                          <button class="sepetbuton" href="//PikapIgnesiVeKristali" v-on:click="say('Sepete Eklendi')">Sepete Ekle</button>
                        </div>
                        </div>
                            <b-card-text style="font-size:13px;">                   
                                TOSHIBA N11C PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                       img-src="https://www.gramofonevi.com/uploads/product/21fd1-31vphwefm0l-262x244.jpg" alt=""
                      img-alt="Image"
                      img-top
                      tag="article"
                       style="max-width: 20rem;"
                      class="mb-2"
                      href="/PikapIgnesiVeKristali"
                    >
                        <b-card-text style="font-size:13px;">                   
                            AIWQ 5080 PİKAP İĞNESİ
                        </b-card-text>
                         <span class="image1f"> 150 TL</span>                    
                     </b-card>

                     <b-card
                      img-src="https://www.gramofonevi.com/uploads/product/a5b7f-jvc-le600-record-player-stylus-3223-p-262x221.jpg" alt=""
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                      href="/PikapIgnesiVeKristali"
                    >
                        <b-card-text style="font-size:13px;">                   
                            JVC DT-41 PİKAP İĞNESİ
                         </b-card-text>
                         <span class="image1f"> 150 TL</span>                    
                    </b-card>

                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/cfa4f-img_2721_600x600-262x185.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               CEC -MC10 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>

                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/719e0-s-l300--1--262x216.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              ONKYO DN 21 ST PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>

                      <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/0c153-21b29vylkol-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANYO STG-10 PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 175 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/94d8b-kenwood-n-67-1024x787-262x201.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANSUI PN PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/3c090-13486-7_1_1-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               ORTOFON M5P PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/34215-pioneer_pnk65_stylus_1-262x175.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               CEC - MC 7 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                    </b-card>
                        
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/9ae28-cec-rs3-transparant-green_1-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               PIONEER KM-P65 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                     </b-card>
                  <!--   <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b6244-31j-oqxo1ul-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               ONKYO - DN-57 PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                     </b-card>

                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/2aba1-stylus-for-cec-bd2200-mc20s-mc29-neclp-830000-mc14-jelco-14d-867-p-262x239.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               CEC MC 5 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 250 TL</span>                    
                    </b-card>

                      <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/45475-inkedsharp-sty121_4_li-262x195.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SHARP STY-121 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>

                        
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b9704-s-l300-262x238.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               TOSHIBA N20C PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>

                      <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/cb37e-6704-00082-0-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SONY ND-135G PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/aa307-500-a035280_600-262x197.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANSUI SN-303 PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b02fb-5517-00311-0-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANYO ST-101 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/1ccf6-e003722-262x197.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               KENWOOD N47 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/45ac3-sharp_sty129_3-262x174.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SHARP RP-117 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/281a3-41jvt928etl-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANYO ST-25D PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                     </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/c83e2-5432-00223-0-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               MICRO V3300 PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b3591-s-l225--1--262x197.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              TOSHIBA - N-301C PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                    </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/e2c9b-jvc-dt33g-262x240.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              JVC DT 33 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 350 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/54a64-5416-n-39-mkii-nadel-fuer-kenwood-v-39-mkii-nachba_2-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              KENWOOD N39 II PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/980b6-e359-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              CORAL 555-S PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/c0836-s-l225-262x197.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              SANYO SN 27 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                      <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/a957f-7087-00273-0-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              PIONEER PN 11 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/6e5cf-0000000036217_def_30-262x224.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               SANYO ST 5D PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/eb928-5616-eps-27-stsd-nadel-fuer-technics---national--eps-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               NATIONAL EPS 27STSD PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b7a4d-img_3012_600x600-262x212.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               LENCO M94 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/bf93e-21lequnsb7l-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               MICRO V2100PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/950c7-s-l300--6--262x206.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               DENON DS N42 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/9afac-timthumb-262x234.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               JVC DT-50 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/eb914-s-l300--5--262x259.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                               ELAC - SM-107 PİKAP İĞNESİ
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/b1876-81pm7-af-3l-262x205.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              SHARP STY 717
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/d03b5-s-l300--4--262x282.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              GOLDRING G850 PİKAP İĞNESİ 
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                    </b-card>
                    <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/99c3b-5488-00280-0-262x262.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                        >
                            <b-card-text style="font-size:13px;">                   
                              PIONEER PN 400 NEEDLE
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>
                     <b-card
                          img-src="https://www.gramofonevi.com/uploads/product/f2a5a-21fghjabh3l-262x194.jpg" alt=""
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          href="/PikapIgnesiVeKristali"
                    >
                            <b-card-text style="font-size:13px;">                   
                               PANASONIC EPS-18 PİKAP İĞNESİ  
                            </b-card-text>
                            <span class="image1f"> 150 TL</span>                    
                     </b-card>-->

                
                    
                </div>
                  <div class="ürünsayi">
                      <div class="row">
                        <div class="ürünsecenek1">
                          <ul>
                            <li class="aktifsayfa">  <!--aktif sayfai-->
                              <a>1</a>
                            </li>         <!--sonraki sayfaya geçiş-->
                            <li>
                              <a><router-link to="/pikapignesi" data-ci-pagination-page="2" class="" >2</router-link></a>
                            </li>
                            <li>
                              <a ><router-link to="/objekoleksiyonu" data-ci-pagination-page="3" class="" >3</router-link></a>
                            </li>
                            <li>
                              <a ><router-link to="/productlist" data-ci-pagination-page="" class="" >&gt;</router-link></a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
      selected: null,
        options: [
          { value: null, text: 'Sayfada 48 ürün' },
          { value: 'a', text: 'Sayfada 24 ürün' },
          { value: { C: '3PO' }, text: 'Sayfada 120 ürün' },
        ],
    };
  },
  components: {
    Loading
  },
  el: "#app5",
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    say: function (message) {
        alert(message)
      }
  }
};
</script>



<style scoped>
.image-sepet {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  height: 200px;
  width: 180px;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
 
  
}
.sepetbuton{
   width: 120px;
  background-color: #88604B;
  color: white;
  box-shadow:brown;
  cursor: pointer;
 border-radius: 33px;

}
.image-sepet:hover .image {
  opacity: 0.3;
}

.image-sepet:hover .middle {
  opacity: 1;
}






.row img:hover{
    -webkit-transform: scaleX(-1); 
    transform: scaleX(-1);
    transition: .5s ease;
  backface-visibility: hidden;
}
 .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    background-color: inherit;
  }
  .geridönüs-ic {   /*geridönüş anasayfa ve pikapsayfasına döniş kısmının yazı rengi ve kenarlardan boşluğu*/
    color: black;
    padding: 20px 0;

  }
  .geridönüs-ic a {  /*geridönüş anasayfa ve pikapsayfasının yazı rengi stiili ve kenar boşluğu*/
    font-family: "century";
    color: black;
    padding: 2px;
  }
  a:hover { /*anasayfa ve pikap iğnesine gidiş linkinin underline olması*/
    text-decoration: underline;
  }
  h1 {  /*pikap iğnesi aks yazısının özellükleri*/
    font-size: 30px;
    margin: 0px 0 0;
    font-family: 'Lora';
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    display: block;
  }
  .ürünsayi {  /*87 ürün yazısının ve select menünün bulunduğu gridin özellikleri*/
    border: 3px double #ddd;
    background: white;
    margin: 15px 0 30px;
    padding: 3%;
  }
  .ürünsecenek { /*select menünün mzellikleri*/
    float: right;
    margin-bottom: -75px;
  }
  .ürünfiltreleme { /*select menünün genişliği ve kenar boşlukları*/
    width: 135px;
    padding: 5px;
  }
  option {/* select menüdeki optionların özellikleri*/
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  .ürün-grid {
    float: left;
    width: 25%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .ürün-resim {  /*ürün resminin özellikleri*/
    height: 300px;
  }
  .ürün-resim a img { /*ürün gridindeki resimlerin özellikleri*/
    width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .ürün-aciklama a.ürün-baslik { /*ürünlerin isimlerinin özellikleri renk biyiklik kenar boşluğu vs*/
    color: #333;
    display: inline-block; /*başlık arası blok görünümü**/
    font-size: 12px;
  }
  .ürün-aciklama a { /*ürün başlık ve fiyatın arasındaki boşluk*/
    font-family: "century";
    height: 50px;
  }
  span.ürün-fiyat { /*ürün fiyatının özellikleri*/
    color: #8a624d;
    margin: 6px 0;
    font-size: 15px;
    font-weight: bold; /*yazının kalın olması*/
  }
  .ürünsecenek1 ul li {
    display: inline-block;/*sayfa ileri gerisinin blok şeklinde yanyana olmaası*/
  }
  .ürünsecenek1 ul li.aktifsayfa a { /*şuanki sayfanın yani 1. sayfanın özellikleri renk ve arka planın kahverengi olması*/
    color: black;
    background-color: #88604B;
  }
  .ürünsecenek1 ul li.active a:hover { /*1 rakamına tıklarken rengin siyah ve yazının altının çizgili olması*/
    color: black;
    text-decoration: underline;
  }
  .ürünsecenek1 ul li a { /*sayfa geçişleri kısmındaki blok olma özellikleri*/
    color: #88604B;
    border: 1px solid gray;
    display: inline-block;
    height: 36px;
    line-height: 34px;
    text-align: center;
    width: 36px;
  }
</style>

