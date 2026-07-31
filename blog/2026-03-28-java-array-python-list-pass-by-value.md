---
title: Java 陣列是 call by address？Python 是 call by reference？兩個常見誤解一次釐清
slug: java-array-python-list-pass-by-value
date: 2026-03-28T20:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [Java, Python]
---

Java 陣列是 call by address？Python 是 call by reference？兩個常見誤解一次釐清

---

![image](https://hackmd.io/_uploads/r1hLL6NjZe.png)

剛開始教初學者時，我很常看到同一種答案反覆出現：

- Java 陣列傳進方法後可以改到內容，所以它是 **call by address**
- Python 的 list 傳進函式後也能改到外面的值，所以它是 **call by reference**

這兩句話都很像對的，因為從執行結果看起來，真的很像「我把東西交進去，裡面改了，外面也跟著變」。但也正因為「看起來很像」，但又似乎看過相異的解釋，深怕錯誤的解釋會影響學習效果。



這篇我從錯誤認知出發，借助 AI 詢問釐清自己的觀念，最後希望能回到官方真正的說法。

---

## 上述兩個說法都不夠精確

![image](https://hackmd.io/_uploads/B1wkva4sZl.png)

### Java

**不是** `call by address`，而是 **pass by value**。只是當你傳的是物件或陣列時，傳進去的那個「值」，是**參考值的副本**。

### Python

Python 官方也不把它叫做 `call by reference`。Python FAQ 的說法是 **arguments are passed by assignment**，而且明白寫到 **there's no ... call-by-reference**。

所以，如果要用一句最不容易誤導學生的話來說：

> Java 一律是傳值；Python 不是 call by reference。

---

## 為什麼這麼多人會學成錯的？

![image](https://hackmd.io/_uploads/S1gc5aNoWx.png)

因為下面這種程式，真的很容易讓人誤會。

### Java 範例

```java
public class Main {
    public static void change(int[] arr) {
        arr[0] = 100;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        change(nums);
        System.out.println(nums[0]);
    }
}
```

輸出：

```java
100
```

### Python 範例

```python
def change(arr):
    arr[0] = 100

nums = [1, 2, 3]
change(nums)
print(nums[0])
```

輸出：

```python
100
```

學生看到這裡，第一個反應通常都很合理：

> 「都改得到外面，那不就是 reference 嗎？」

這個推論很自然，但問題就出在這裡：**「改得到同一個物件內容」不等於「呼叫端變數本身是被 reference 傳進去」**。

---

## 先建立一個基本觀念：變數不是在搬整個陣列

![image](https://hackmd.io/_uploads/SJyldTEoWe.png)

最容易卡住的地方，是腦中會把變數想成「盒子裡直接裝著整個陣列」。

但比較接近實際的理解是：

* 變數手上拿的是一張「位置紙條」
* 紙條上寫著：那個陣列 / list 在哪裡
* 所以變數不是整個陣列本身，而是**找到它的方式**

![image](https://hackmd.io/_uploads/Sk-4dpNj-e.png)

可以先想成這樣：

```text
nums ───► [1, 2, 3]
```

在 Java 裡，這種理解格外重要，因為官方規格直接寫到：**arrays are objects**。也就是說，陣列本身就是物件。

> Java 官方原文：
> "**In the Java programming language, arrays are objects**..."
> — [JLS Chapter 10](https://docs.oracle.com/javase/specs/jls/se7/html/jls-10.html)





---

## 釐清認知一：Java 陣列是 call by address ?

![image](https://hackmd.io/_uploads/Hk1a9T4i-l.png)

這是常看到的說法，也是在教學時對照文獻後想要釐清的根本觀念。Java 官方教學的英文原意很直接：

> "**Reference data type parameters, such as objects, are also passed into methods by value.**"
> — [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)

這句話很重要，原文比中文更能解釋，代表當你呼叫：

```java
change(nums);
```

Java 不是把 `nums` 這個變數本人交進去，而是把 `nums` 裡面保存的那個**參考值**複製一份，交給方法參數 `arr`。

所以比較像這樣：

```text
main 內                 change 內

nums ───► [1, 2, 3] ◄─── arr
```

因為 `nums` 和 `arr` 都指向同一個陣列，所以你在方法裡做：

```java
arr[0] = 100;
```

改到的是**同一個陣列內容**，外面當然也會看到變化。

這也是為什麼學生會覺得「很像 reference」，但官方還是堅持它叫 **by value**：因為被複製的是**參考值**，不是外面那個變數本身。

---

## 如何證明 Java 不是 call by address？

![image](https://hackmd.io/_uploads/B1AZt6Eobg.png)

我們直接看第二個例子。

```java
public class Main {
    public static void reset(int[] arr) {
        arr = new int[]{9, 9, 9};
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        reset(nums);
        System.out.println(nums[0]);
    }
}
```

輸出：

```java
1
```

如果 Java 真的是「外面的變數直接被交進方法裡」，那 `arr = new int[]{9,9,9};` 之後，外面的 `nums` 理論上也應該一起改掉。

但它沒有。

原因就在於：

* `arr` 拿到的只是 `nums` 的參考值副本
* 接著把 `arr` 改去指向新陣列
* 改到的只有方法裡自己的 `arr`
* 外面的 `nums` 還是原本那個陣列

圖解會更清楚：

```text
原本：
nums ───► [1, 2, 3] ◄─── arr

方法內重新指定後：
nums ───► [1, 2, 3]

arr  ───► [9, 9, 9]
```

也就是說，Java 陣列傳參數時真正發生的是：

* 可以透過參考值副本，改到同一個物件內容
* 但**不能直接改掉呼叫端變數的綁定**

這就是 Java 官方為什麼堅持它是 **pass by value**。

---

## 釐清認知二：Python 就是 call by reference

![image](https://hackmd.io/_uploads/HJPauT4iWx.png)這個

誤解也非常普遍，原來的我也無法很精確地釐清，尤其對於學過 C、C++ 之後再來看 Python，更容易直接套上 `call by reference` 這個詞。

但 Python 官方 FAQ 寫得更直接：

> "**Remember that arguments are passed by assignment in Python.**"

而且同一段後面還有一句更關鍵的：

> "**Since assignment just creates references to objects, there's no alias between an argument name in the caller and callee, and consequently no call-by-reference.**"
> — [Python FAQ](https://docs.python.org/3/faq/programming.html)

### 這句話到底在講什麼？

意思是：

* 函式參數只是**多了一個名字**
* 這個名字一開始也指向同一個物件
* 但它不是外面那個變數本身的別名
* 所以 Python 不把它叫做 call-by-reference

---

## Python 為什麼也會讓人誤會？

先看一個大家都很熟的例子：

```python
def change(arr):
    arr[0] = 100

nums = [1, 2, 3]
change(nums)
print(nums[0])
```

輸出：

```python
100
```

這時候可以想成：

```text
nums ───► [1, 2, 3] ◄─── arr
```

因為 `nums` 和 `arr` 都指向同一個 list，所以改 `arr[0]` 時，當然也就改到了原本那個 list 內容。

但真正的關鍵，是再看另一個例子。

```python
def reset(arr):
    arr = [9, 9, 9]

nums = [1, 2, 3]
reset(nums)
print(nums[0])
```

輸出：

```python
1
```

這裡和 Java 幾乎是同樣的觀察：

* `arr = [9, 9, 9]` 只是把函式裡的 `arr` 改成指向另一個新物件
* 外面的 `nums` 完全沒有被重新綁定
* 所以外面還是原本那個 `[1, 2, 3]`

圖解：

```text
原本：
nums ───► [1, 2, 3] ◄─── arr

重新指定後：
nums ───► [1, 2, 3]

arr  ───► [9, 9, 9]
```

所以 Python 的問題不是「它很像 reference」，而是「它常常讓你誤以為參數和外面變數是同一個東西」。官方才會特別說：**no call-by-reference**。

---

## 真正容易搞混的是哪一點？

![image](https://hackmd.io/_uploads/SkNHKa4obg.png)

不是語法，而是基於以下重要的核心區別：

### 是在「改內容」還是「改指向」？

透過與AI互動詢問，我發現可以透過上述問題釐清觀念：

#### 如果是在改內容：

```java
arr[0] = 100;
```

```python
arr[0] = 100
```

這叫**改同一個物件的內容**。因為兩邊都還指向同一個陣列 / list，所以外面看得到。

#### 如果是在改指向：

```java
arr = new int[]{9, 9, 9};
```

```python
arr = [9, 9, 9]
```

這叫**讓參數自己改去指向新物件**。這時候只會影響函式裡的參數，不會改到外面的變數綁定。

很多誤解，其實不是搞不懂 reference，而是把「改內容」和「改指向」混成同一件事。

---

## Java 和 Python 到底差在哪？

在這個問題上，它們的**表現結果很像**，只是官方命名方式不同。

### Java 的官方說法

* 參考型別參數也是 **passed by value**
* 陣列是物件

### Python 的官方說法

* 參數是 **passed by assignment**
* **no call-by-reference**

如果要將正確的意義教給學生，也許我建議這樣講，比較能貼近英文原意與實際程式行為：

> Java：傳的是參考值的副本。
> Python：函式參數只是新增一個指向同一物件的名字。

---

## 表格對照

![image](https://hackmd.io/_uploads/SyJAK6Eo-l.png)

| 項目                         | Java 陣列       | Python list          |
| ---------------------------- | --------------- | -------------------- |
| 常見的不精確說法             | call by address | call by reference    |
| 官方較準確說法               | pass by value   | passed by assignment |
| 傳進去的是什麼               | 參考值的副本    | 對同一物件的名稱綁定 |
| 可不可以改原本內容           | 可以            | 可以                 |
| 重新指定新物件會不會影響外面 | 不會            | 不會                 |

以上幾點都能從 Java 官方教學與 Python 官方 FAQ 對照得到。

---

## 仔細辨別，可以避免誤解的觀念

很多人會說：

> 「可以改到外面的值，所以就是 reference。」

這句話有很大的問題是把**結果**當成**機制**，你看到的結果是「內容被改到了」，但真正的機制可能只是「兩邊都剛好指向同一個可變物件」。

這兩件事長得很像，但不是同一件事。Java 與 Python 官方文件，其實都在提醒你這個差別。

---

## 最後，該怎麼正確的理解陣列參數傳遞行為?

![image](https://hackmd.io/_uploads/rJ0l5TNiWg.png)

### Java

> Java 一律是 pass by value。陣列或物件傳入方法時，傳的是參考值的副本。

### Python

> Python arguments are passed by assignment。Python 官方 FAQ 也明確指出沒有 call-by-reference。

再補一句白話版：

> 兩者都能改內容，但都不能直接改掉外面變數本身的指向。

把這句記起來，這個觀念就不太會再混掉了。

---

## 參考資料

1. Oracle Java Tutorials, *Passing Information to a Method or a Constructor*
   [https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)
1. Java Language Specification, *Chapter 10. Arrays*
   [https://docs.oracle.com/javase/specs/jls/se7/html/jls-10.html](https://docs.oracle.com/javase/specs/jls/se7/html/jls-10.html)
1. Python Documentation, *Programming FAQ*
   [https://docs.python.org/3/faq/programming.html](https://docs.python.org/3/faq/programming.html)
