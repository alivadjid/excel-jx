

console.log('Modulejs')

async function start() {
  return await Promise.resolve('async working!1')
}

start().then(console.log)

