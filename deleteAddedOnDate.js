/*Supprimer bug affichage Grid format :"added on date : 2022-06"*/
$('.activity').each(function () {
  var date16 = $(this).html();
  $(this).html(date16.replace(/2016-../g, ''));
})
$('.activity').each(function () {
  var date15 = $(this).html();
  $(this).html(date15.replace(/2015-../g, ''));
})
$('.activity').each(function () {
  var date19 = $(this).html();
  $(this).html(date19.replace(/2019-../g, ''));
})
$('.activity').each(function () {
  var date20 = $(this).html();
  $(this).html(date20.replace(/2020-../g, ''));
})
$('.activity').each(function () {
  var date21 = $(this).html();
  $(this).html(date21.replace(/2021-../g, ''));
})
$('.activity').each(function () {
  var date22 = $(this).html();
  $(this).html(date22.replace(/2022-../g, ''));
})
$('.activity').each(function () {
  var text = $(this).html();
  $(this).html(text.replace(/Added on date:/g, ''));
})