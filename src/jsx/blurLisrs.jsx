export function removeBlurLisrs(isMobile, unBlur) {
    if (isMobile.current) {
      window.removeEventListener('touchmove', unBlur)
      console.log('touche has been removed')
    } else {
      window.removeEventListener('mousemove', unBlur)
      console.log('mousemove has been removed')
    }
}

export function addBlurLisrs(isMobile, unBlur) {
  if (isMobile.current) {
    window.addEventListener('touchmove', unBlur, {passive: false})
    console.log('touche has been added')
  } else {
    window.addEventListener('mousemove', unBlur)
    console.log('mousemove has been added')
  }
}