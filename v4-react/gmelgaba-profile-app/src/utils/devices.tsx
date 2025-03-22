const size = {
  mobile: '550px',
  superMobile: '619px',
  tabletMin: '620px',
  tabletMiddle: '750px',
  tabletMax: '880px',
  desktopMin: '881px',
  desktopMax: '1024px',
  largeMin: '1025px',
}

export const devices = {
  size: size,
  mobile: `(max-width: ${size.mobile})`,
  superMobile: `(max-width: ${size.superMobile})`,
  tabletMin: `(min-width: ${size.tabletMin})`,
  tabletMiddleMin: `(min-width: ${size.tabletMiddle})`,
  tabletMiddleMax: `(max-width: ${size.tabletMiddle})`,
  tabletMax: `(max-width: ${size.tabletMax})`,
  desktopMin: `(min-width: ${size.desktopMin})`,
  desktopMax: `(max-width: ${size.desktopMax})`,
  largeMin: `(min-width: ${size.largeMin})`
}

export const resolutions = {
  mobile: `@media only screen and ${devices.mobile}`,
  superMobile: `@media only screen and ${devices.superMobile}`,
  tabletMin: `@media only screen and ${devices.tabletMin}`,
  tabletSmall: `@media only screen and ${devices.tabletMin} and ${devices.tabletMiddleMax}`,
  tabletSmallAndLess: `@media (max-width: ${devices.size.tabletMiddle})`,
  tabletBig: `@media only screen and ${devices.tabletMiddleMin} and ${devices.tabletMax}`,
  tabletBigAndGreater: `@media only screen and ${devices.tabletMiddleMin}`,
  tablet: `@media only screen and ${devices.tabletMin} and ${devices.tabletMax}`,
  tabletAndGreater: `@media only screen and ${devices.tabletMin}`,
  desktop: `@media only screen and ${devices.desktopMin} and ${devices.desktopMax}`,
  desktopAndGreater: `@media only screen and ${devices.desktopMin}`,
  portrait: `@media only screen and ${devices.largeMin}`
}
