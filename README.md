# 新的旅程：Svelte
 
 - 開一個新的 README，舊的保留，但是名稱改為 `README-old`
 
 ## 241119
- 試著用 Svelte 來改寫之前 todo-list 的作業
- 初步把 HTML 跟 CSS 移植完成

## 241120
- 今天把架構做了一次重構，並且把元件的部分再做拆分：
  - 將 AddTodo 跟 List 分開來，畢竟他們負責的東西不同，AddTodo 的資料之後應該會用 $prop 來傳入 List
  - 畢竟 AddTodo 唯一的作用就是資料的寫入，剩下都是 List 的事情，所以這樣區分在目前來看是一個合理的拆分，讓兩邊的邏輯跟程式碼各自安放