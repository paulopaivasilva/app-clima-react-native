export const StatusClimate = (status) => {
    let climate
    switch (status) {
        case 'clear_day': climate = 'o dia está limpo'
            break;
        case 'storm': climate = 'está com tempestade'
            break;
        case 'snow': climate = ' está nevando'
            break;
        case 'hail': climate = 'chovendo granizo'
            break;
        case 'rain': climate = 'está chovendo'
            break;
        case 'fog': climate = 'está com neblina'
            break;
        case 'clear_night': climate = 'a noite está limpa'
            break;
        case 'cloud': climate = 'está nublado'
            break;
        case 'cloudly_day': climate = 'está um dia nublado'
            break;
        case 'cloudly_night': climate = 'está uma noite nublada'
            break;
        case 'none_day': climate = 'está de dia'
            break;
        case 'none_night': climate = 'está de noite'
            break;
    }
    return climate
}

export const StatusImageClimate = (status) => {
    let image;
    if (status === 'clear_day' || status === 'none_day') image = require('../assets/icons/sun.png');
    if (status === 'cloudly_night' || status === 'none_night') image = require('../assets/icons/night_cloud.png');
    if (status === 'cloudly_night') image = require('../assets/icons/night_cloud.png');
    if (status === 'storm' || status === 'rain' || status === 'hail') image = require('../assets/icons/storm.png');
    if (status === 'cloudly_day' || status === 'fog' || status === 'cloud') image = require('../assets/icons/cloud.png');
    if (status === 'snow') image = require('../assets/icons/snow.png');
    return image;
}

export const StatusHumidity = (status) => {
    let humidity;
    if (status < 40) humidity = 'baixa';
    if (status >= 40 && status <= 70) humidity = 'normal';
    if (status > 80) humidity = 'alta';
    return humidity
}