function bolumSecim(){
    var varsayilan = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }
   ];
   var egitim = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "BÖTE"
   },
   {
       deger: "1",
       bolum: "Din Kültürü ve Ahlak Bilgisi Eğitimi"
   },
   {
       deger: "2",
       bolum: "Eğitim Billimleri"
   },
   {
       deger: "3",
       bolum: "Güzel Sanatlar Eğitimi"
   },
   {
       deger: "4",
       bolum: "Özel Eğitim"
   },
   {
       deger: "5",
       bolum: "Temel Eğitim"
   },
   {
       deger: "6",
       bolum: "Türkçe ve Sosyal Bilimler Eğitimi"
   }
   ,
   {
       deger: "7",
       bolum: "Yabancı Diller Eğitimi"
   }
   ];
   var iibf = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "İktisat"
   },
   {
       deger: "1",
       bolum: "İşletme"
   },
   {
       deger: "2",
       bolum: "Maliyet"
   },
   {
       deger: "3",
       bolum: "Siyaset Bilimi ve Kamu Yönetimi"
   },
   {
       deger: "4",
       bolum: "Uluslararası İşletmecilik ve Ticaret"
   }
   ];
   var ilahiyat = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Felsefe ve Din Bilimleri"
   },
   {
       deger: "1",
       bolum: " İlköğretim Din Kültürü ve Ahlak Bilgisi Eğitimi"
   },
   {
       deger: "2",
       bolum: " İslam Tarihi ve Sanatları"
   },
   {
       deger: "3",
       bolum: "Temel İslam Birimleri"
   }
   ];
   var insanT = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Arap Dili ve Edebiyatı"
   },
   {
       deger: "1",
       bolum: "İngiliz Dili ve Edebiyatı"
   },
   {
       deger: "2",
       bolum: "Psikoloji"
   },
   {
       deger: "3",
       bolum: "Sosyoloji"
   },
   {
       deger: "4",
       bolum: "Tarih"
   },
   {
       deger: "5",
       bolum: "Türk Dili ve Edebiyatı"
   }
   ];
   var muh = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Bilgisayar Mühendisliği"
   },
   {
       deger: "1",
       bolum: "Elektirik-Elektroni Mühendisliği"
   },
   {
       deger: "2",
       bolum: "Endüstri Mühendisliği"
   },
   {
       deger: "3",
       bolum: "Gıda Mühendisliği"
   },
   {
       deger: "4",
       bolum: "İnşaat Mühendisliği"
   },
   {
       deger: "5",
       bolum: "Kimya Mühendisliği"
   },
   {
       deger: "6",
       bolum: "Makina Mühendisliği"
   }
   ];
   var sag = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Beslenme ve Diyetedik"
   },
   {
       deger: "1",
       bolum: "Ebelik"
   },
   {
       deger: "2",
       bolum: "Fizyoterapi ve Rehebilitasyon"
   },
   {
       deger: "3",
       bolum: "Hemşirelik"
   },
   {
       deger: "4",
       bolum: "Sağlık Yönetimi"
   }
   ];
   var sanat = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Grafik Tasarımı "
   },
   {
       deger: "1",
       bolum: "İç Mimarlık ve Çevre Tasarımı"
   },
   {
       deger: "2",
       bolum: "Müzik"
   },
   {
       deger: "3",
       bolum: "Resim"
   }
   ];
   var uyg = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Yönetim Bilişim Sistemleri "
   },
   {
       deger: "1",
       bolum: "Dijital Oyun Tasarımı"
   },
   {
       deger: "2",
       bolum: "Gümrük İşletme"
   },
   {
       deger: "3",
       bolum: "Organik Tarım İşletmeciliği"
   },
   {
       deger: "4",
       bolum: "Sosyal Hizmet"
   }
   ];
   var besyo = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Antrenörlük Eğitimi "
   },
   {
       deger: "1",
       bolum: "Beden Eğitimi ve Spor Yönetimi"
   },
   {
       deger: "2",
       bolum: "Rekreasyon"
   },
   {
       deger: "3",
       bolum: "Spor Yöneticiliği"
   }
   ];
   var adalet = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Büro Hizmetleri ve Sekreterlik "
   },
   {
       deger: "1",
       bolum: "Hukuk"
   },
   {
       deger: "2",
       bolum: "Mülkiyet Koruma ve Güvenlik"
   }
   ];
   var aydin = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Çocuk Bakımı ve Gençlik Hizmetleri "
   },
   {
       deger: "1",
       bolum: "Gıda İşleme"
   },
   {
       deger: "2",
       bolum: "İnşaat"
   },
   {
       deger: "3",
       bolum: "Makine ve Metal Teknolojiler"
   },
   {
       deger: "4",
       bolum: "Mimarlık ve Şehir Planlama"
   }
   ];
   var demirozü = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Bitkisel ve Hayvansal Üretim"
   },
   {
       deger: "1",
       bolum: "Motorlu Araçlar ve Ulaştırma Teknolojileri"
   },
   {
       deger: "2",
       bolum: "Ulaştırma Hizmetleri"
   },
   {
       deger: "3",
       bolum: "Veterinerlik"
   },
   {
       deger: "4",
       bolum: "Yönetim ve Organizasyon"
   }
   ];
   var sgl = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Bitkisel ve Hayvansal Üretim"
   },
   {
       deger: "1",
       bolum: "Çocuk Bakımı ve Gençlik Hizmetleri"
   },
   {
       deger: "2",
       bolum: "Dişçilik Hizmetleri"
   },
   {
       deger: "3",
       bolum: "Eczane Hizmetleri"
   },
   {
       deger: "4",
       bolum: "Sağlık Bakım Hizmetleri"
   },
   {
       deger: "5",
       bolum: "Tıbbi Hizmetler ve Teknikleri"
   },
   {
       deger: "6",
       bolum: "Yönetim ve Orgnizasyon"
   }
   ];
   var sos = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Büro Hizmetleri ve Sekreterlik"
   },
   {
       deger: "1",
       bolum: "Dış Ticaret"
   },
   {
       deger: "2",
       bolum: "Finans Bankacılık ve Sigortacılık"
   },
   {
       deger: "3",
       bolum: "Muhasebe ve Vergi"
   },
   {
       deger: "4",
       bolum: "Otel, Lokonta ve İkram Hizmetleri"
   },
   {
       deger: "5",
       bolum: "Pazarlama ve Reklamcılık"
   },
   {
       deger: "6",
       bolum: "Ulaştırma Hizmetleri"
   },
   {
       deger: "7",
       bolum: "Yönetim ve Organizasyon"
   }
   ];
   var tek = [{
       deger: "-1",
       bolum: "Lütfen Seçiniz"
   }, {
       deger: "0",
       bolum: "Bilgisayar Teknolojileri"
   },
   {
       deger: "1",
       bolum: "El Sanatları"
   },
   {
       deger: "2",
       bolum: "Elektirik ve Enerji"
   },
   {
       deger: "3",
       bolum: "Elektronik ve Otomasyon"
   },
   {
       deger: "4",
       bolum: "Görsel- İşitsel Teknikleri ve Medya Yapımcılığı"
   },
   {
       deger: "5",
       bolum: "Kimya ve Kimyasal İşletme Teknolojileri"
   },
   {
       deger: "6",
       bolum: "Mülkiyet Koruma ve Güvenlik"
   },
   {
       deger: "7",
       bolum: "Tasarım"
   }
   ];
   var text = " ";
   var fak= document.getElementById("fakulte").value;
   if (fak == 0) {
       for (let i = 0; i < egitim.length; i++) {
       text += "<option value=" + egitim[i].deger + ">" + egitim[i].bolum + "</option>"
       }   
   }
   else if (fak==-1) {
       for (let i = 0; i < varsayilan.length; i++) {
           text += "<option value=" + varsayilan[i].deger + ">" + varsayilan[i].bolum + "</option>"
           }   
       
   }
   else if (fak==1) {
       for (let i = 0; i < iibf.length; i++) {
           text += "<option value=" + iibf[i].deger + ">" + iibf[i].bolum + "</option>"
           }   
       
   }
   else if (fak==2) {
       for (let i = 0; i < ilahiyat.length; i++) {
           text += "<option value=" + ilahiyat[i].deger + ">" + ilahiyat[i].bolum + "</option>"
           }   
       
   }
   else if (fak==3) {
       for (let i = 0; i < insanT.length; i++) {
           text += "<option value=" + insanT[i].deger + ">" + insanT[i].bolum + "</option>"
           }   
       
   }
   else if (fak==4) {
       for (let i = 0; i < muh.length; i++) {
           text += "<option value=" + muh[i].deger + ">" + muh[i].bolum + "</option>"
           }   
       
   }
   else if (fak==5) {
       for (let i = 0; i < sag.length; i++) {
           text += "<option value=" + sag[i].deger + ">" + sag[i].bolum + "</option>"
           }   
       
   }
   else if (fak==6) {
       for (let i = 0; i < sanat.length; i++) {
           text += "<option value=" + sanat[i].deger + ">" + sanat[i].bolum + "</option>"
           }   
       
   }
   else if (fak==7) {
       for (let i = 0; i < uyg.length; i++) {
           text += "<option value=" + uyg[i].deger + ">" + uyg[i].bolum + "</option>"
           }   
       
   }
   else if (fak==8) {
       for (let i = 0; i < besyo.length; i++) {
           text += "<option value=" + besyo[i].deger + ">" + besyo[i].bolum + "</option>"
           }   
       
   }
   else if (fak==9) {
       for (let i = 0; i < adalet.length; i++) {
           text += "<option value=" + adalet[i].deger + ">" + adalet[i].bolum + "</option>"
           }   
       
   }
   else if (fak==10) {
       for (let i = 0; i < aydin.length; i++) {
           text += "<option value=" + aydin[i].deger + ">" + aydin[i].bolum + "</option>"
           }   
       
   }
   else if (fak==11) {
       for (let i = 0; i < demirozü.length; i++) {
           text += "<option value=" + demirozü[i].deger + ">" + demirozü[i].bolum + "</option>"
           }   
       
   }
   else if (fak==12) {
       for (let i = 0; i < sgl.length; i++) {
           text += "<option value=" + sgl[i].deger + ">" + sgl[i].bolum + "</option>"
           }   
       
   }
   else if (fak==13) {
       for (let i = 0; i < sos.length; i++) {
           text += "<option value=" + sos[i].deger + ">" + sos[i].bolum + "</option>"
           }   
       
   }
   else if (fak==14) {
       for (let i = 0; i < tek.length; i++) {
           text += "<option value=" + tek[i].deger + ">" + tek[i].bolum + "</option>"
           }   
       
   }
   document.getElementById("mySelect").innerHTML ="<select>" + text + "</select>";
   }
   $(window).load(function()
   {
      var phones = [{ "mask": "(###) ###-##-##-##-##"}];
       $('#textbox').inputmask({ 
           mask: phones, 
           greedy: false, 
           definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
   });
   var secim = document.getElementById("sec");
   var modal = document.getElementById("myModal");
   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");
   var slct = document.getElementById("sec");
   var yazi = document.getElementById("yaz");
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   // When the user clicks on the button, open the modal
   btn.onclick = function () {
       modalYazdirma();
       modal.style.display = "block";
   }
   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
       modal.style.display = "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
   function modalYazdirma(){
       var ad = document.getElementById("isim").value;
       //var tel = document.getElementById("textbox").value;
       //var mail = document.getElementById("email").value;
       var c = document.getElementById("fakulte");
       var fakulte = c.options[c.selectedIndex].text;
       var e = document.getElementById("mySelect");
       var bolum = e.options[e.selectedIndex].text;
       var sinif = document.getElementById("sinif").value;
       document.getElementById("contactContent").innerHTML = 
       fakulte+" si "+bolum+" u öğrecisi "+sinif+". öğrencisi Sn."
       +ad+" üyelik isteğiniz ve görüşünüz tarafımızca alımıştır"+
       " İyi Günler Dileriz";
   }
   $('#fakulte').on( 'click', 'a', function() {
       var text = $(this).html();
       var htmlText = text + ' <span class="caret"></span>';
       $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
   });
   function tik(){
       document.getElementById("tik"). style="visibility:visible";
   }
   function dusunce(){
       var isim = document.getElementById("name").value;
       var email =document.getElementById("e_posta");
       var dusunce = document.getElementById("text-bolgesi");
       alert(isim+" geri bildirimin için teşekkür ederiz.");
   } 
   