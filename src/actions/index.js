export const move = (id) => ({
  type: 'MOVE',
  squareId: id
})

export const browse = (id) => ({
  type: 'BROWSE',
  step: id
})