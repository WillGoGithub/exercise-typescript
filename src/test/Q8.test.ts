import Triangle from '../exam/Q8';

describe("Q8. Triangle", () => {
    it("三邊一樣叫正三角形", () => {
        const triangle = new Triangle(2, 2, 2)
        expect(triangle.kind()).toEqual("正三角形")
    })

    it("再驗一次，三邊一樣叫正三角形", () => {
        const triangle = new Triangle(10, 10, 10)
        expect(triangle.kind()).toEqual("正三角形")
    })

    it("任意兩邊一樣叫等腰三角形 1", () => {
        const triangle = new Triangle(3, 4, 4)
        expect(triangle.kind()).toEqual("等腰三角形")
    })

    it("任意兩邊一樣叫等腰三角形 2", () => {
        const triangle = new Triangle(4, 3, 4)
        expect(triangle.kind()).toEqual("等腰三角形")
    })

    it("任意兩邊一樣叫等腰三角形 3", () => {
        const triangle = new Triangle(4, 4, 3)
        expect(triangle.kind()).toEqual("等腰三角形")
    })

    it("任意兩邊一樣叫等腰三角形 4", () => {
        const triangle = new Triangle(10, 10, 2)
        expect(triangle.kind()).toEqual("等腰三角形")
    })

    it("其他三角形 1", () => {
        const triangle = new Triangle(3, 4, 5)
        expect(triangle.kind()).toEqual("其他三角形")
    })

    it("其他三角形 2", () => {
        const triangle = new Triangle(10, 11, 12)
        expect(triangle.kind()).toEqual("其他三角形")
    })

    it("其他三角形 3", () => {
        const triangle = new Triangle(5, 4, 2)
        expect(triangle.kind()).toEqual("其他三角形")
    })

    it("小數點是可以的", () => {
        const triangle = new Triangle(0.4, 0.6, 0.3)
        expect(triangle.kind()).toEqual("其他三角形")
    })

    it("不能為 0", () => {
        const triangle = new Triangle(0, 0, 0)
        expect(triangle.kind.bind(triangle)).toThrow()
    })

    it("不能為負數", () => {
        const triangle = new Triangle(3, 4, -5)
        expect(triangle.kind.bind(triangle)).toThrow()
    })

    it("三角形定律檢查 1", () => {
        const triangle = new Triangle(1, 1, 3)
        expect(triangle.kind.bind(triangle)).toThrow()
    })

    it("三角形定律檢查 2", () => {
        const triangle = new Triangle(7, 3, 2)
        expect(triangle.kind.bind(triangle)).toThrow()
    })

    it("三角形定律檢查 3", () => {
        const triangle = new Triangle(10, 1, 3)
        expect(triangle.kind.bind(triangle)).toThrow()
    })
})
