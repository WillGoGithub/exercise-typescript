import WordCount from '../exam/Q7';

describe('Q7. WordCount', () => {
    const words = new WordCount()

    it('計算一個單字', () => {
        const expectedCounts = new Map(Object.entries({ word: 1 }))
        expect(words.count('word')).toEqual(expectedCounts)
    })

    it('每個單字都出現一次', () => {
        const expectedCounts = new Map(Object.entries({ one: 1, of: 1, each: 1 }))
        expect(words.count('one of each')).toEqual(expectedCounts)
    })

    it('綜合計算各單字出現的次數', () => {
        const expectedCounts = new Map(Object.entries({ one: 1, fish: 4, two: 1, red: 1, blue: 1 }))
        expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts)
    })

    it('包含標點符號計算', () => {
        const expectedCounts = new Map(Object.entries({ car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 }))
        expect(words.count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts)
    })

    it('包含數字計算', () => {
        const expectedCounts = new Map(Object.entries({ testing: 2, 1: 1, 2: 1 }))
        expect(words.count('1 2 testing testing')).toEqual(expectedCounts)
    })

    it('統一轉換為小寫計算', () => {
        const expectedCounts = new Map(Object.entries({ go: 3 }))
        expect(words.count('go Go GO')).toEqual(expectedCounts)
    })

    it('有斷行也可以正常計算', () => {
        const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
        expect(words.count('hello\nworld')).toEqual(expectedCounts)
    })

    it('有 tab 也可以正常計算', () => {
        const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
        expect(words.count('hello\tworld')).toEqual(expectedCounts)
    })

    it('有出現多個空白也可以正常運算', () => {
        const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
        expect(words.count('hello  world')).toEqual(expectedCounts)
    })

    it('奇奇怪怪的都加進來也不影響計算', () => {
        const expectedCounts = new Map(Object.entries({ introductory: 1, course: 1 }))
        expect(words.count('\t\tIntroductory Course      ')).toEqual(expectedCounts)
    })

    it('物件原型的保留字也難不倒', () => {
        const expectedCounts = new Map(Object.entries({ reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, 'ok?': 1 }))
        expect(words.count('reserved words like constructor and toString ok?')).toEqual(expectedCounts)
    })
})