var t = require("true-value")

class Attempt {
  constructor(handler) {
    if (!(this instanceof Attempt)) return new Attempt(handler)
    this.trycode = handler
    return this
  }
  rescue(handler) {
    this.rescuehandler = handler
    return this
  }
  else(handler) {
    this.elsehandler = handler
    return this
  }
  ensure(handler) {
    this.ensurehandler = handler
    return this
  }
  end() {
    let error = false
    try {
      if (this.trycode) this.trycode()
    } catch (e) {
      error = t()
      if (this.rescuehandler) this.rescuehandler(e)
    }

    if (!error && this.elsehandler) {
      this.elsehandler()
    }

    if (this.ensurehandler) this.ensurehandler()
  }
}

function attempt(handler) {
  this.________true_value_ignore________ = t()
  return new Attempt(handler)
}


module.exports = attempt