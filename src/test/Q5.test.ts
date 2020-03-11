import Transcriptor from "../exam/Q5";

describe('Q5. Transcriptor', () => {
    const transcriptor = new Transcriptor()

    it('轉譯 cytosine 至 guanine', () => {
        expect(transcriptor.toRna('C')).toEqual('G')
    })

    it('轉譯 guanine 至 cytosine', () => {
        expect(transcriptor.toRna('G')).toEqual('C')
    })

    it('轉譯 adenine 至 uracil', () => {
        expect(transcriptor.toRna('A')).toEqual('U')
    })

    it('轉譯 thymine 至 adenine', () => {
        expect(transcriptor.toRna('T')).toEqual('A')
    })

    it('轉譯所有 DNA 核糖核酸至 RNA 補體', () => {
        expect(transcriptor.toRna('ACGTGGTCTTAA'))
            .toEqual('UGCACCAGAAUU')
    })

    it('DNA 輸入錯誤字元的處理', () => {
        expect(() => transcriptor.toRna('U')).toThrowError(
            'DNA 輸入錯誤'
        )
    })

    it('DNA 輸入錯誤字串的處理', () => {
        expect(() => transcriptor.toRna('XXX')).toThrowError(
            'DNA 輸入錯誤'
        )
    })

    it('DNA 輸入字串中某部分有誤的處理', () => {
        expect(() => transcriptor.toRna('ACGTXXXCTTAA')).toThrowError(
            'DNA 輸入錯誤'
        )
    })
})
