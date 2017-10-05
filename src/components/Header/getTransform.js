export default ({
  scrollY,
  belowTop,
  belowFold,
  visibleBelowFold,
  lastVisibleHeaderY
}) => {
  if (!belowTop || (belowFold && visibleBelowFold)) {
    return 'translateY(0)'
  }
  if ((belowTop && !belowFold) || (belowFold && !visibleBelowFold)) {
    // const headerHeight = this.headerElm.clientHeight
    const headerHeight = 128
    const headerClip = scrollY - lastVisibleHeaderY
    const clipHeader = headerClip < headerHeight
    return `translateY(${clipHeader && belowFold
      ? (-headerClip + 'px')
      : '-200%'
    })`
  }
  return 'tranlateY(0)'
}
