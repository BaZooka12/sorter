class Sorter {
  constructor() {
    this.data = []
  }

  add(element) {
    this.data.push(element)
  }

  at(index) {
    return this.data[index]
  }

  get length() {
    return this.data.length
  }

  toArray() {
    return this.data
  }

  sort(indices) {
    indices.sort()
    const newArray = indices.map(index => this.at(index))

    newArray.sort(this.compareFunction || ((left, right) => left - right))
    for (let i = 0; i < indices.length; i++) {
      this.data[indices[i]] = newArray[i]
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction
  }
}

module.exports = Sorter;