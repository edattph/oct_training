///*@echo CC.SECURE.INTRA.ORIGIN*//c3api_data/v2/DataAccess.svc/childrenServicesTrainingCourses/sessions

let myURL = '/*@echo CC.SECURE.INTRA.ORIGIN*//c3api_data/v2/DataAccess.svc/childrenServicesTrainingCourses/sessions';
let helenOutput = $('.helensWish');

$.ajax(
  myURL, {
    method: 'GET',
    dataType: 'JSON',
    headers: {
      Authorization: 'AuthSessions'
    }
  }
).fail(
  function() {
    console.log('epic fail');
  }
).done(

  function(myData) {

    console.log(myData.value);
    console.log(myData.value[0]);

    for (var i = 0; i < myData.value.length; i++) {
      helenOutput.append(myData.value[i].subcategory + '<br>')
    }
  }
).always(
  function(){
    console.log('Cool stuff!!!!');
  }

);



// // The main javascript file for tph_chat.
// // IMPORTANT:
// // Any resources from this project should be referenced using SRC_PATH preprocessor var
// // Ex: let myImage = '/*@echo SRC_PATH*//img/sample.jpg';
//
//   var Comm100API = Comm100API || new Object;
//   Comm100API.chat_buttons = Comm100API.chat_buttons || [];
//   var comm100_chatButton = new Object;
//   comm100_chatButton.code_plan = 23;
//   comm100_chatButton.div_id = 'comm100-button-23';
//   Comm100API.chat_buttons.push(comm100_chatButton);
//   Comm100API.site_id = 217024;
//   Comm100API.main_code_plan = 23;
//
// Comm100API.onLiveChatCodeLoaded = function() {
//   var $img = $('#' + comm100_chatButton.div_id + 'img');
//   if ($img.attr('src') == 'https://chatserver.comm100.com/DBResource/DBImage.ashx?imgId=508&type=2&siteId=217024') {
//       $img.attr('alt', 'ASHIL eChat currently on-line');
//   } else {
//       $img.attr('alt', 'ASHIL eChat currently off-line');
//   }
// };
//
//   var comm100_lc = document.createElement('script');
//   comm100_lc.type = 'text/javascript';
//   comm100_lc.async = true;
//   comm100_lc.src = 'https://chatserver.comm100.com/livechat.ashx?siteId=' + Comm100API.site_id;
//   var comm100_s = document.getElementsByTagName('script')[0];
//   comm100_s.parentNode.insertBefore(comm100_lc, comm100_s);
//
//   setTimeout(function() {
//       if (!Comm100API.loaded) {
//           var lc = document.createElement('script');
//           lc.type = 'text/javascript';
//           lc.async = true;
//           lc.src = 'https://hostedmax.comm100.com/chatserver/livechat.ashx?siteId=' + Comm100API.site_id;
//           var s = document.getElementsByTagName('script')[0];
//           s.parentNode.insertBefore(lc, s);
//       }
//   }, 5000)
