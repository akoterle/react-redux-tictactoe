import game from './game'

describe('game reducer', () => {
    it('should handle initial state', () => {
        expect(
            game(undefined, {})
        ).toEqual({
            xIsNext: true,
            winner: null,
            current: 0,
            history: [{
                squares: Array(9).fill(null),
            }]
        })
    })

    it('should handle player MOVE', () => {
        expect(
            game(undefined, {
                type: 'MOVE',
                move: 0
            })
        ).toEqual({
            xIsNext: false,
            winner: null,
            current: 1,
            history: [{
                squares: Array(9).fill(null),
            }, {
                squares: ['X', null, null, null, null, null, null, null, null]
            }
            ]
        })
    })

    it('should handle winner', () => {
        expect(
            game({
                xIsNext: true,
                winner: null,
                current: 4,
                history: [{
                    squares: Array(9).fill(null),
                }, {
                    squares: ['X', null, null, null, null, null, null, null, null]
                }, {
                    squares: ['X', null, null, 'O', null, null, null, null, null]
                }, {
                    squares: ['X', 'X', null, 'O', null, null, null, null, null]
                }, {
                    squares: ['X', 'X', null, 'O', 'O', null, null, null, null]
                }]
            }, {
                    type: 'MOVE',
                    move: 2
                })
        ).toEqual({
            xIsNext: false,
            winner: 'X',
            current: 5,
            history: [{
                    squares: Array(9).fill(null),
                }, {
                    squares: ['X', null, null, null, null, null, null, null, null]
                }, {
                    squares: ['X', null, null, 'O', null, null, null, null, null]
                }, {
                    squares: ['X', 'X', null, 'O', null, null, null, null, null]
                }, {
                    squares: ['X', 'X', null, 'O', 'O', null, null, null, null]
                }, {
                    squares: ['X', 'X', 'X', 'O', 'O', null, null, null, null]
                }]
        })
    })

})