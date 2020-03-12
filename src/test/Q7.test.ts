import Acronym from '../exam/Q7';

describe('Q7. Acronym', () => {
    it('檢查 1', () => {
        expect(Acronym.parse('Portable Network Graphics')).toEqual('PNG')
    })

    it('檢查 2 其中有小寫開頭', () => {
        expect(Acronym.parse('Ruby on Rails')).toEqual('ROR')
    })

    it('檢查 3 相連字大寫', () => {
        expect(Acronym.parse('HyperText Markup Language')).toEqual('HTML')
    })

    it('檢查 4 有標點符號', () => {
        expect(Acronym.parse('First In, First Out')).toEqual('FIFO')
    })

    it('檢查 5 有 Dash', () => {
        expect(Acronym.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS')
    })

    it('繼續檢查 1', () => {
        expect(Acronym.parse('Application Programming Interface')).toEqual('API')
    })

    it('繼續檢查 2', () => {
        expect(Acronym.parse('As far as I know')).toEqual('AFAIK')
    })

    it('繼續檢查 3', () => {
        expect(Acronym.parse('Also known as')).toEqual('AKA')
    })

    it('繼續檢查 4', () => {
        expect(Acronym.parse('In my Opinion')).toEqual('IMO')
    })

    it('繼續檢查 5', () => {
        expect(Acronym.parse('Laughing out loud')).toEqual('LOL')
    })

    it('繼續檢查 6', () => {
        expect(Acronym.parse('Oh my God')).toEqual('OMG')
    })
})
