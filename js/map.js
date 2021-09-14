var map;
var marker;
function initMap() {
  map = new ymaps.Map('yandexmap', {
    center: [44.958679, 34.111142],
    zoom: 16,
  });
  marker = new ymaps.Placemark([44.958679, 34.111142], {
    hintContent: 'Расположение',
    balloonContent: 'Это наша организация',
  });

  map.geoObjects.add(marker);
}
ymaps.ready(initMap);
