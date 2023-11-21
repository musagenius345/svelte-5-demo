import { getRandomHslColor } from "./index.js";

describe('Random HSL Color', () => {
  let color1, color2
   beforeEach( () => {
      color1 = getRandomHslColor() 
      color2 = getRandomHslColor()
  })

  it('should always give a random color', () => {
    
    expect(color1 !== color2).toBeTruthy()
  })

  test('Hue is not greater than 360 or  less than 0', () => {
    const hue = color1[0]
    expect(hue >= 0 && hue <= 360).toBeTruthy()
  })

test('lightness & saturation are not greater than 100 or less than 0', () => {
    const saturation = color1[1]
    const lightness = color1[2]
    expect(saturation >= 0 && saturation <= 100).toBeTruthy()
    expect(lightness >= 0 && lightness <= 100).toBeTruthy()
  })

})
