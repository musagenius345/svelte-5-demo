import Color from 'colorjs.io'


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


/**
 * Checks if the given HSL color is considered dark.
 * @param {number[]} hsl - An array representing the HSL color values.
 * @returns {boolean} - True if the color is dark, false otherwise.
 */
// @ts-ignore
export const isDark = (hsl) => new Color('hsl', hsl).to('lab').get('l') < 60

/**
 * Checks if the given string is a valid hexadecimal color.
 * @param {string} hex - The hexadecimal color code.
 * @returns {boolean} - True if the input is a valid hexadecimal color, false otherwise.
 */
export const isHex = (hex) => {
  try {
    const color = new Color(hex).space.formats.hex.test(hex)
    return !!color
  } catch {
    return  false
  }
} 

/**
 * Checks if the given array represents a valid RGB color.
 * @param {number[]} rgb - An array representing the RGB color values.
 * @returns {boolean} - True if the input is a valid RGB color, false otherwise.
 */
export const isRgb = (rgb) => {
  // if(!Array.isArray(rgb)) return false

  if((rgb[0] >= 0 && rgb[0] <= 255) &&   (rgb[1] >= 0 && rgb[1] <= 255) && (rgb[2] >= 0 && rgb[2] <= 255) ){
    return true
  } else {
    return false;
  } 
}




/**
 * Checks if the given array represents a valid HSL color.
 * @param {number[]} hsl - An array representing the HSL color values.
 * @returns {boolean} - True if the input is a valid HSL color, false otherwise.
 */
export const isHsl = (hsl) => {

  if((hsl[0] >= 0 && hsl[0] <= 360) &&  (hsl[1] >= 0 && hsl[1] <= 100) && (hsl[2] >= 0 && hsl[2] <= 100) ){
  return true
  } else {
    return false
  }
}


/**
 * Determines the accessibility level based on contrast ratio.
 * @param {number} contrast - The contrast ratio between two colors.
 * @returns {object} - An object indicating accessibility levels.
 */
export const getLevel = (contrast) => {
  if (contrast > 7) {
    return { AALarge: 'Pass', AA: 'Pass', AAALarge: 'Pass', AAA: 'Pass' };
  } else if (contrast > 4.5) {
    return { AALarge: 'Pass', AA: 'Pass', AAALarge: 'Pass', AAA: 'Fail' };
  } else if (contrast > 3) {
    return { AALarge: 'Pass', AA: 'Fail', AAALarge: 'Fail', AAA: 'Fail' };
  }

  return { AALarge: 'Fail', AA: 'Fail', AAALarge: 'Fail', AAA: 'Fail' };
};


/**
 * Generates a random HSL color.
 * @returns {number[]} - An array representing the random HSL color values.
 */
export function getRandomHslColor(){
   const hue = getRandomIntInclusive(0, 360)
   const saturation = getRandomIntInclusive(0, 100)
   const lightness = getRandomIntInclusive(0, 100)
   const color = new Color('hsl', [hue, saturation, lightness])

  return color.coords
}
/**
 * Calculates the WCAG21 contrast ratio between two RGB colors.
 * @param {number[]} a - An array representing the RGB values of the first color.
 * @param {number[]} b - An array representing the RGB values of the second color.
 * @returns {number} - The contrast ratio.
 */

export function getWCAG21Contrast(a, b){
   // @ts-ignore
   const color1 = new Color('sRGB', a)
   // @ts-ignore
   const color2 = new Color('sRGB', b)
   return color1.contrast(color2, "WCAG21")
   
}

const result = getWCAG21Contrast([255, 255, 255], [0,0, 0])

console.log(result)
