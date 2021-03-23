class Formatter {
  
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const offLimitWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const first = Formatter.capitalize(string).split(" ").slice(0,1)
    const split = string.split(" ").slice(1)
    for (const key in split) {
      if (!offLimitWords.includes(split[key])) {
        split[key] = Formatter.capitalize(split[key]);
      }
    }
    return first + " " + split.join(" ")
  }
}