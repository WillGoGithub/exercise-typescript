import HelloWorld from "../exam/Q1";

describe('Hello World', () => {
    it('需要正確印出 "Hello, World!"', () => {
        expect(HelloWorld.hello()).toEqual('Hello, World!')
    })
})