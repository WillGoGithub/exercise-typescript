import TwoFer from "../exam/Q2";

describe('TwoFer', () => {
    it('no name given', () => {
        const expected = 'One for you, one for me.'
        expect(TwoFer.twoFer()).toEqual(expected)
    })

    it('a name given', () => {
        const expected = 'One for Nick, one for me.'
        expect(TwoFer.twoFer('Nick')).toEqual(expected)
    })

    it('another name given', () => {
        const expected = 'One for Jimmy, one for me.'
        expect(TwoFer.twoFer('jimmy')).toEqual(expected)
    })

    it('another name given', () => {
        const expected = 'One for You, one for me.'
        expect(TwoFer.twoFer('You')).toEqual(expected)
    })

    it('another name given', () => {
        const expected = 'One for R, one for me.'
        expect(TwoFer.twoFer('R')).toEqual(expected)
    })
})
