import TwoFer from "../exam/Q2";

describe('Q2. TwoFer', () => {
    it('沒給名子', () => {
        const expected = 'One for you, one for me.'
        expect(TwoFer.twoFer()).toEqual(expected)
    })

    it('輸入了一個大寫開頭的名子', () => {
        const expected = 'One for Nick, one for me.'
        expect(TwoFer.twoFer('Nick')).toEqual(expected)
    })

    it('輸入了一個全小寫的名子', () => {
        const expected = 'One for Jimmy, one for me.'
        expect(TwoFer.twoFer('jimmy')).toEqual(expected)
    })

    it('輸入了一個叫做 You 的人...', () => {
        const expected = 'One for You, one for me.'
        expect(TwoFer.twoFer('You')).toEqual(expected)
    })

    it('只有一個字的人', () => {
        const expected = 'One for R, one for me.'
        expect(TwoFer.twoFer('R')).toEqual(expected)
    })
})
