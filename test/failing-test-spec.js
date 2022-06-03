'use strict'

const chai = require('chai')
const expect = chai.expect

describe('A failing test', function () {
  const hotel = require('../Hotel')
  const hotelInstance = new hotel()
  const parque = 'Parque das flores'
  const jardimbotanico = 'Jardim Botânico'
  const maratlantico = 'Mar Atlântico'

  it('should fail', function () {
    expect(true).to.equal(false);
  })

  it('best hotel', function() {
    const firstEntry = "Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)"
    
    expect(hotelInstance.findHotel(firstEntry)).to.equal(parque)
    expect(hotelInstance.findHotel(firstEntry, )).to.equal(jardimbotanico)
    expect(hotelInstance.findHotel(firstEntry)).to.equal(maratlantico)
  })
})