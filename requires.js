var resolve = require('./resolve')

module.exports = function (module, sandbox) {
  var identifier
  var eqIdx = module.indexOf('=')

  if (eqIdx < 0) {
    identifier = module
  } else {
    identifier = module.slice(0, eqIdx)
    module = module.slice(eqIdx + 1)
  }

  module = require(resolve(module))

  if (sandbox[identifier]) {
    Object.assign(sandbox[identifier], module)
  } else {
    sandbox[identifier] = module
  }

  return sandbox
}
