/* Enum 正統用法 */
/* eslint-disable no-unused-vars */
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

class ResistorColor {
    private colors: string[];

    constructor(colors: string[]) {
        // Code here ! 從這裡開始變更

        if (colors.length < 2) {
            throw new Error('需輸入兩種顏色 !');
        }

        this.colors = colors;
    }

    // Code here ! 從這裡開始變更
    value = (): number => {
        return Number(`${COLORS.indexOf(this.colors[0])}${COLORS.indexOf(this.colors[1])}`);
    };
}
