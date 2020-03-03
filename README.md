# typescript-exercise

## 專案安裝
```
npm i
```

## 開始挑戰
從資料夾 /exam 開始撰寫

## Debug
1. 在題目最下方解除 console 註解
2. 打開 .vscode/launch.json
3. 修改 `configurations.program` 將檔名變更為要測試的題目檔
4. 按下 F5 即可在 Debug console 看到結果 (選擇無論如何都進行 Debug)

## 驗證結果
執行以下指令取得 PASS 綠燈 100% 結果
```
// 僅測試單一題目
npm run test src/test/Q1-HelloWorld.test.ts

// 全部測試
npm run test
```
如果得到 FAIL 紅燈...再接再厲！