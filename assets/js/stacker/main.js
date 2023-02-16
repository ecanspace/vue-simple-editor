const propNames = (target) => Object.keys(target).join('-')

/**
 * const stacker = new Stacker()
 * 
 * // 添加/删除组件
 * stacker.add({
 *   action: 'add|remove',
 *   subject: 'component',
 *   target: [],
 *   value: {}
 * })
 * 
 * // 属性更新
 * stacker.add({
 *   action: 'update',
 *   subject: 'props',
 *   from: prevState,
 *   to: state,
 * })
 * 
 */

export default class Stacker {
  constructor() {
    this.records = []
    this.pointer = -1
    this.prevRecord = null
    this.events = new Map()
  }

  on(eventName, handler) {
    if (this.events.has(eventName)) {
      const handlers = this.events.get(eventName)
      handlers.push(handler)
      this.events.set(eventName, handlers)
    } else {
      this.events.set(eventName, [handler])
    }
  }

  emit(evenName, ...args) {
    if (this.events.has(evenName)) {
      const handlers = this.events.get(evenName)
      handlers.forEach((handler) => handler(...args))
    }
  }

  clear() {
    this.records = []
    this.pointer = -1
    this.prevRecord = null
    this.emit('pointer', this.pointer)
  }

  /**
   * - action: 操作行为，新增、修改、删除
   * - target: 组件实例
   */
  add(record) {
    if (this.prevRecord && propNames(record.payload) === propNames(this.prevRecord.payload)) {
      this.records.pop()
      this.records.push(record)
    } else {
      this.records.push(record)
      this.pointer++
      this.emit('pointer', this.pointer)
    }

    this.prevRecord = record
  }

  // 撤销
  undo() {
    if (this.pointer === -1) {
      return; // Not satisfied undo condition
    }

    const record = this.records[this.pointer]
    const subject = record.subject

    if (subject === 'component') {
      this.undoComponent(record)
    } else if (subject === 'props') {
      this.undoProps(record)
    }

    this.pointer--
    this.emit('pointer', this.pointer)
  }

  undoComponent(record) {
    const { action, target: model, value } = record

    if (action === 'add') {
      const index = model.indexOf(value)
      model.splice(index, 1)
    } else if (action === 'remove') {
      model.push(value)
    }
  }

  undoProps(record) {
    const { target, from } = record
    target.updateState(from)
  }

  // 恢复
  redo() {
    if (this.pointer === this.records.length - 1) {
      return; // Not satisfied redo condition
    }

    this.pointer++
    this.emit('pointer', this.pointer)

    const record = this.records[this.pointer]
    const subject = record.subject

    if (subject === 'component') {
      this.redoComponent(record)
    } else if (subject === 'props') {
      this.redoProps(record)
    }
  }

  redoComponent(record) {
    const { action, target: model, value } = record

    if (action === 'add') {
      model.push(value)
    } else if (action === 'remove') {
      const index = model.indexOf(value)
      model.splice(index, 1)
    }
  }

  redoProps(record) {
    const { target, payload } = record
    target.updateState(payload)
  }
}
