

//Space Age Warmup

//Given an age in seconds, calculate how old someone would be on:

//Earth: orbital period 365.25 Earth days, or 31557600 seconds
//Mercury: orbital period 0.2408467 Earth years
//Venus: orbital period 0.61519726 Earth years
//Mars: orbital period 1.8808158 Earth years
//Jupiter: orbital period 11.862615 Earth years
//Saturn: orbital period 29.447498 Earth years
//Uranus: orbital period 84.016846 Earth years
//Neptune: orbital period 164.79132 Earth years
//So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.

//There are 31557600 seconds in an Earth year.

//Bonus:

//Have the option of either returning the ages on all planets, or any of the above planets individually.

const calculateAge = function(seconds = 31557600) {
  // take age in seconds

  const planets = {
    earth: 31557600,
    mercury: 0.2408467 * 31557600,
    venus: 0.61519726 * 31557600,
    mars: 1.8808158 * 31557600,
    jupiter: 29.447498 * 31557600,
    saturn: 29.447498 * 31557600,
    uranus: 164.79132 * 31557600,
    neptune: 3164.7913 * 31557600
  }

  for (let planet in planets) {
    console.log(`${seconds} seconds is ${(seconds / planets[planet]).toFixed(2)} ${planet} years`);
  }

}

// JQUERY

const calculateAgeJquery = function(seconds = 31557600) {
  const planets = {
    earth: 31557600,
    mercury: 0.2408467 * 31557600,
    venus: 0.61519726 * 31557600,
    mars: 1.8808158 * 31557600,
    jupiter: 29.447498 * 31557600,
    saturn: 29.447498 * 31557600,
    uranus: 164.79132 * 31557600,
    neptune: 3164.7913 * 31557600
  }

  $placeContent = $('.seconds');  

  for (let planet in planets) {
  $placeContent.append(`<p>${seconds} seconds is ${(seconds / planets[planet]).toFixed(2)} ${planet} years</p>`);
  }
   
}

calculateAgeJquery();
