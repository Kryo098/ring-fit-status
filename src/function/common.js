
export const isVaildEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isVaildRequired = (...args) => {
  let validator = true
  for (let i=0;i<args.length;i=(i+1)|0) {
    if (args[i]==="") {
      validator = false
    }
  }
  return validator
}