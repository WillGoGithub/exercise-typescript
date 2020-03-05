// Q3. Resistor-Color
// 此程式目的為輸入兩種顏色的英文名稱，並轉化為兩位數字以便讓神秘的機器識別...
// 透過 const resistorColor = new ResistorColor(["brown", "black"])
// 呼叫 resistorColor.value() 回傳對應的色碼
// 色碼表 0 ~ 9 => Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White
// TODO 1. 如果是 brown, black 應該得到 10
// TODO 2. 如果不小心輸入三種顏色，自動略過第三個，一樣輸出兩位數字
// TODO 3. 如果傳入的顏色不足兩個，則拋出例外訊息："需輸入兩種顏色 !"
// TODO 4. Hint 除了必須利用以下基礎結構外，別忘了再自行增加色碼對應表
class ResistorColor {
    private colors: string[];

    constructor(colors: string[]) {
        // TODO Code here ! 從這裡開始變更
        this.colors = colors;
    }

    // TODO Code here ! 從這裡開始變更
    value = (): number => 0;
}

// Export for test，請無視
export default ResistorColor;

// Use for debug
// const resistorColor = new ResistorColor(["brown", "black"]);
// console.log(resistorColor.value());
