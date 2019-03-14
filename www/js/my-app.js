// Initialize your app
var myApp = new Framework7({
   swipePanel: 'left',
   material: true,
});

// Export selectors engine
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
    // untuk dinamis navbar
    dynamicNavbar: true
});

// memanggil halaman lain
myApp.onPageInit('math', function (page) {
  //untuk perkalian
  $$('#kali').on('click',function(){
    var angka1=$$('#angka1').val();
    var angka2=$$('#angka2').val();
    myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();        
        $$('#hasil').val(angka1*angka2);
    }, 500);
  });
  //untuk membersihkan form
  $$('#bersih').on('click',function(){
    $$('#angka1').val('');
    $$('#angka2').val('');
    $$('#hasil').val('');
  });
});

// memanggil halaman lain
myApp.onPageInit('index', function (page) {

});

// memanggil halaman lain
myApp.onPageInit('about', function (page) {
 
});

// memanggil halaman lain
myApp.onPageInit('profil', function (page) {
//untuk tanggal
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

$$('.facebook-date').html(dd +'/' +  mm + '/' +yyyy);

});

// memanggil halaman lain
myApp.onPageInit('maps', function () { 
 $$('#tujuan').on('keyup keydown change', function(){
    var posisi=$$(this).val();
    geocoder = new google.maps.Geocoder();  
    geocoder.geocode({'address':posisi},
        function (result, status){
          if (status == google.maps.GeocoderStatus.OK) {
            var posisi_tujuan = result[0].geometry.location;
             console.log(posisi_tujuan);
           var mapOptions = {
               center: posisi_tujuan,
               zoom: 16,
               gestureHandling: 'cooperative', //untuk gesture mobile
               disableDefaultUI: true, //disable control
               mapTypeId: google.maps.MapTypeId.ROADMAP
           };
           var map = new google.maps.Map(document.getElementById("cariMap"), mapOptions);

           // var img="img/logo.png";
           var marker = new google.maps.Marker ( { //menambahkan marker
              position:posisi_tujuan,
              map:map,
              animation: google.maps.Animation.BOUNCE, //animasi
              // icon: img,
              title:"Tujuan saya"
           });
          }
        }
    );
  }); 
 
});




  
 
