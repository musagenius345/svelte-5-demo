import Color from 'colorjs.io'


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}



/**
 * Fetches data from the provided API.
 * @param {string} api - The API endpoint to fetch data from.
 * @returns {Promise<object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the response status is not 200.
 */
export const fetchData = async (api) => {
  const response = await fetch(api);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(`Error: ${body.message}`);
  }

  return body;
};

/**
 * Updates the path using throttled function to avoid frequent updates.
 * @param {number[]} bg - Background color values in HSL format.
 * @param {number[]} fg - Foreground color values in HSL format.
 */
export const updatePath = throttle((bg, fg) => {
  const backgroundHex = hslToHex(bg).replace(/^#/, '');
  const foregroundHex = hslToHex(fg).replace(/^#/, '');

  if (history !== undefined) {
    history.push(`/${backgroundHex}/${foregroundHex}`);
  }
}, 250);

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
   let contrast = color1.contrast(color2, "WCAG21")
  return contrast > 21 ? 21 : roundNum(contrast, 2);
  
   
}

/**
 * Round up number to a given decimal place
  * @param {number} fractionalNumber 
  * @param {number} numberOfDecimalPlaces 
  */
function roundNum(fractionalNumber, numberOfDecimalPlaces){
  const numberToRound = fractionalNumber * (10**numberOfDecimalPlaces);
  let roundedNumber = Math.round(numberToRound);
  return  roundedNumber / (10**numberOfDecimalPlaces);
}


/**
 * Converts a hexadecimal color code to RGB format.
 * @param {string} hex - The hexadecimal color code.
 * @returns {number[]|null} - An array representing the RGB color values or null if input is not a valid hexadecimal color.
 */
export function hexToRgb(hex){
  return isHex(hex) ? new Color(hex).to('sRGB').coords.map( el => el * 255) : null
}



/**
 * Converts RGB color values to a hexadecimal color code.
 * @param {number[]} rgb - An array representing the RGB color values.
 * @returns {string} - The hexadecimal color code.
 */
export const rgbToHex = (rgb) => {
 return !isRgb(rgb)
  ? '#808080'
  :  new Color(`rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`).toString({format: 'hex', collapse: false})
 
}


/**
 * Converts HSL color values to a hexadecimal color code.
 * @param {number[]} hsl - An array representing the HSL color values.
 * @returns {string} - The hexadecimal color code.
 */
export const hslToHex = (hsl) => {
   if(!(isHsl(hsl))){
    return '#808080'
  }
    return new Color('hsl', hsl).to('srgb').toString({format: 'hex', collapse: false}) 
}

// const result = getWCAG21Contrast([255, 255, 255], [0,0, 0])
const magenta = [290, 80, -2]
const result = hslToHex(magenta)


console.log(result)
