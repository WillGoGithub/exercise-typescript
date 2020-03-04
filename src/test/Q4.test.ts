import isLeapYear from "../exam/Q4";

describe('Q4. Leap Year', () => {

    it('不是閏年', () => {
        expect(isLeapYear(2015)).toBeFalsy()
    })

    it('是閏年', () => {
        expect(isLeapYear(2016)).toBeTruthy()
    })

    it('每一百年不是閏年', () => {
        expect(isLeapYear(1900)).toBeFalsy()
    })

    it('每四百年又是閏年', () => {
        expect(isLeapYear(2000)).toBeTruthy()
    })

    describe('繼續判斷', () => {

        it('不是閏年', () => {
            expect(isLeapYear(1978)).toBeFalsy()
        })

        it('是閏年', () => {
            expect(isLeapYear(1992)).toBeTruthy()
        })

        it('每一百年不是閏年', () => {
            expect(isLeapYear(2100)).toBeFalsy()
        })

        it('每四百年又是閏年', () => {
            expect(isLeapYear(2400)).toBeTruthy()
        })
    })
})
