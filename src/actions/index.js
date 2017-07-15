export const move = (id) => ({
  type: 'MOVE',
  move: id
})

export const browse = (id) => ({
  type: 'BROWSE',
  step: id
})