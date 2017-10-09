export default ({
  scrollY,
  isSmall,
  belowTop,
  expanded,
  belowFold,
  visibleBelowFold,
  lastVisibleHeaderY
}) => {
  const headerHeight = isSmall ? 80 : 128
  const headerClip = scrollY - lastVisibleHeaderY
  const clipHeader = headerClip < headerHeight

  // wow this is really ugly
  // too lazy to clean this up rn...
  if (isSmall) {
    if (expanded) return `translateY(0)`
    if (belowTop && !belowFold) return `translateY(-200%)`
    if (belowFold && !visibleBelowFold) {
      return `translateY(calc(-100% + ${headerHeight - headerClip}px))`
    }
    if (!expanded) return `translateY(calc(-100% + ${headerHeight}px))`
    if (!belowTop || (belowFold && visibleBelowFold)) return 'translateY(0)'
  } else {
    if (!belowTop || (belowFold && visibleBelowFold)) return 'translateY(0)'
    if ((belowTop && !belowFold) || (belowFold && !visibleBelowFold)) {
      if (clipHeader && belowFold) return `translateY(${-headerClip + 'px'})`
      return `translateY(-200%)`
    }
    return 'tranlateY(0)'
  }
}
