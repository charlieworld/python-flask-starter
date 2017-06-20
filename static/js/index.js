
var vm = null;

$(document).ready(function(){

  app_init();
});


function app_init(){
  vm = new Vue({
    el: '#wrapper',
    data: {
      check : false,
      coookie : Cookies.get('checkage'),
      webpage : 'index',
      data:[],
    },
    methods: {
      route:function(page){
        vm.$data.webpage = page;
      },
      outlink:function (link){
        window.open(link, '_blank');
      }
    }
  });
};

