class Event {
  constructor() {
    this.handlers = {
      // click: []
    }
  }
  on(type, callback) { // 注册事件
    if(!this.handlers[type]) {
      this.handlers[type] = []
    }
    this.handlers[type].push(callback)
    return this
  }
  emit(type, ...params) { // 消费事件
    if (!this.handlers[type]) {
      console.error('不存在该事件')
      return
    }
    this.handlers[type].forEach(v => {
      typeof v === 'function' && v.apply(this, params)
    })
  }
}

const event = new Event()

event.on('click', (name, age) => {
  console.log('click', name, age)
}).on('click', function(name){
  console.log('click', name)
  console.log('this', this)
})

event.emit('click', 'harry', '20')
console.log(event.handlers.click.length)