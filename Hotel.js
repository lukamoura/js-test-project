class Hotel {
    
  findHotel(input) {

    const database = require('../bd/hotels.json')

    let inputHotel = input
    let programaFidelidade = getFidelidade(inputHotel)
    let days = getDays(inputHotel)
    let tiposDias = getQuantidadeDias(days)

    const parque = 'Parque das flores'
    const jardimbotanico = 'Jardim Botânico'
    const maratlantico = 'Mar Atlântico'

    let parquePrices = calculaPreco(database.hotels[parque].prices, tiposDias, programaFidelidade)
    let jardimbotanicoPrices = calculaPreco(database.hotels[jardimbotanico].prices, tiposDias, programaFidelidade)
    let maratlanticoPrices = calculaPreco(database.hotels[maratlantico].prices, tiposDias, programaFidelidade)   

  }

  calculaPreco(precos, dias, fidelidade) {
    console.log(precos)
    console.log(dias)
    console.log(fidelidade)

  }

  getFidelidade(hotel) {
    return hotel.split(':')[0];
  }

  getDays(input) {
    let date = input.split(': ')[1].split(', ')

    return date.map(function(element) {
      let dateChecked = new Date(element)
      let day = dateChecked.getDay();
      return day
    })
  }

  getQuantidadeDias(input) {
    let day = { "week": 0, "weekend": 0 }

    for (let dayInput in input) {
        
        if (dayInput === 0 || dayInput === 6) {
            day.weekend++
        } else {
            day.week++
        }
    }

    return day
}

}