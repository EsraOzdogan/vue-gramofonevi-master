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
        <h1>Sıkça Sorulan Sorular</h1>
        <div role="tablist" class="acordion">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info">GRAMOFONEVİ.COM’ A NASIL ÜYE OLABİLİRİM?</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">GRAMOFONEVİ.COM’A ÜYE OLMAK ÜCRETLİ Mİ?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text1 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="info">ŞİFREMİ UNUTTUM/ŞİFREMİ DEĞİŞTİRMEK İSTİYORUM. </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text2 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-4 variant="info">GRAMOFONEVİ' NDEN NASIL SİPARİŞ VEREBİLİRİM?. </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text3 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-5 variant="info">SİPARİŞLER NE ZAMAN TESLİM EDİLİYOR?</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text4 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-6 variant="info">SİPARİŞLER HANGİ KARGO FİRMASI İLE GÖNDERİLİYOR?</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text5 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-7 variant="info">SİPARİŞİMİN KARGOYA TESLİM EDİLİP EDİLMEDİĞİNİ NASIL TAKİP EDEBİLİRİM?</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text6 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card><b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-8 variant="info">ALDIĞIM ÜRÜNLERİN FİYATLARINA KDV DAHİL Mİ?  </b-button>
          </b-card-header>
          <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text7 }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
          <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-9 variant="info">SORUMUN CEVABINI BURADA BULAMADIM.</b-button>
          </b-card-header>
          <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text8 }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
   data () {
      return {
        text: `
          GRAMOFONEVİ.COM ANA SAYFAMIZDA YER ALAN ÜYE KAYDI SEÇENEĞİNE TIKLAYARAK VE SONRASINDA AÇILAN SAYFADAKİ BİLGİLERİ DOLDURARAK ÜYELİK TALEBİNİZİ İLETEBİLİRSİNİZ.

        `,
        text1: `
            HAYIR, GRAMOFONEVİ.COM’ A ÜYE OLMAK İÇİN HİÇBİR ÜCRET ÖDEMENİZ GEREKMİYOR.
        `,
        text2: `
            DAHA ÖNCE SİTEMİZE ÜYE OLMUŞSANIZ VE ŞİFRENİZİ HATIRLAMIYOR YA DA ŞİFRENİZİ DEĞİŞTİRMEK İSTİYORSANIZ; ÜYE GİRİŞİ BÖLÜMÜNDEKİ ŞİFREMİ UNUTTUM ALANINA TIKLAYARAK ÜYELİĞİNİZİ OLUŞTURURKEN KULLANDIĞINIZ E-POSTA ADRESİNİZİ YAZARAK "GÖNDER" TUŞUNA BASINIZ. YENİ ŞİFRE E-POSTA ADRESİNİZE GÖNDERİLECEKTİR.
        `,
        text3: `
           GRAMOFONEVİ.COM’DAN SİPARİŞ VEREBİLMEK İÇİN ÖNCELİKLE ÜYE OLMANIZ GEREKİYOR. ÜYE KAYDI ÜZERİNDEN ÜYELİK İŞLEMLERİNİZİ GERÇEKLEŞTİREBİLİRSİNİZ. ÜYELİK BİLGİLERİNİZİ SİTEYE GİRDİKTEN SONRA ÜRÜNÜNÜZÜ SEPETİNİZE EKLEMELİSİNİZ. SEPETİNİZDEN SATIN AL BUTONU İLE BİR SONRAKİ EKRANA GEÇEBİLİR, TESLİMAT VE FATURA ADRESİ BİLGİLERİNİZİ DOLDURDUKTAN SONRA, ÖDEME EKRANINA GELEREK SİPARİŞİNİZİ TAMAMLAYABİLİRSİNİZ.        `,
        text4: `
             SİPARİŞLERİNİZ ORTALAMA 3 İŞ GÜNÜ İÇERİSİNDE SİZE TESLİM EDİLECEKTİR.
        `,
        text5: `
            SİPARİŞLERİNİZ, YURTİÇİ KARGO İLE GÖNDERİLECEKTİR.
        `,
        text6: `
           GRAMOFONEVİ.COM’DAN VERMİŞ OLDUĞUNUZ SİPARİŞİNİZ KARGOYA TESLİM EDİLDİĞİNDE E-POSTA YOLU İLE BİLGİLENDİRİLECEKSİNİZ.
        `,
        text7: `
            EVET, GRAMOFONEVİ.COM ÜZERİNDEN SATILAN HER ÜRÜNÜN SATIŞ FİYATINA KDV DAHİLDİR.
        `,
        text8: `
           DİLERSENİZ BİZİMLE BİZE ULAŞIN SAYFASINDAN TEMAS KURABİLİRSİNİZ. SİTEMİZDEKİ CANLI DESTEK BÖLÜMÜNDEN YA DA 0232 2782064 NUMARALI TELEFON HATTINDAN HAFTA İÇİ HER GÜN 9:30 - 18:30 SAATLERİNDE ANINDA ULAŞABİLİRSİNİZ.        `
      }
    },
 
    return: {
      isLoading: false,
      fullPage: true
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
      }, 5000);
    }
  }
};
</script>

<style scoped>
.wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .container{
    background-color: white;
    height: 550px;
    position: relative;
  }
  .acordion{
    position: relative;
    width: 75%;
    padding-left: 170px;
  }
</style>


  

