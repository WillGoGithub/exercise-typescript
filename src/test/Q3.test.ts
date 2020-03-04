import ResistorColor from "../exam/Q3";

describe("Q3. Resistor Colors", () => {
    test("輸入 brown and black", () => {
        const resistorColor = new ResistorColor(["brown", "black"])
        expect(resistorColor.value()).toEqual(10)
    })

    test("輸入 blue and grey", () => {
        const resistorColor = new ResistorColor(["blue", "grey"])
        expect(resistorColor.value()).toEqual(68)
    })

    test("輸入 yellow and violet", () => {
        const resistorColor = new ResistorColor(["yellow", "violet"])
        expect(resistorColor.value()).toEqual(47)
    })

    test("輸入 orange and orange", () => {
        const resistorColor = new ResistorColor(["orange", "orange"])
        expect(resistorColor.value()).toEqual(33)
    })

    test("略過多餘的顏色", () => {
        const resistorColor = new ResistorColor(["green", "brown", "orange"])
        expect(resistorColor.value()).toEqual(51)
    })

    test("至少需要輸入兩種顏色", () => {
        expect(() => new ResistorColor(["green"])).toThrowError(
            "需輸入兩種顏色 !"
        )
    })
})