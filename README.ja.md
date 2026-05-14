# input-lang

複数の言語を選択するためのユーザーフレンドリーなインターフェースを提供するカスタムHTML要素（`<input-lang>`）です。

## デモ

[https://code4fukui.github.io/input-lang/](https://code4fukui.github.io/input-lang/)

## 特徴

- **シンプルなUI:** 一般的な言語（英語、中国語、韓国語）のチェックボックスを提供します。
- **豊富な言語リスト:** その他の言語を網羅した、検索可能な複数選択ドロップダウンを含みます。
- **標準化された出力:** ISO 639-2/B言語コードをセミコロンで区切った単一の文字列（例: `eng;chi;zbl`）として返します。
- **プログラムからの制御:** `.value`プロパティを通じて、選択された言語を簡単に取得または設定できます。

## 使い方

モジュールをインポートし、HTMLに`<input-lang>`タグを追加します。

```html
<script type="module" src="https://code4fukui.github.io/input-lang/input-lang.js"></script>

<input-lang id="lang-selector"></input-lang>
```

### 値の取得

`onchange`イベントをリッスンして、更新された値を取得します。

```html
<script type="module">
  const selector = document.getElementById("lang-selector");
  selector.onchange = () => {
    // 例: "eng;kor" のような文字列を出力
    console.log(selector.value);
  };
</script>
```

### 値の設定

HTMLの`value`属性を使用するか、JavaScriptから直接、選択する言語を設定できます。

```html
<!-- HTMLで初期値を設定 -->
<input-lang id="lang-prefilled" value="eng;kor"></input-lang>

<script type="module">
  const prefilledSelector = document.getElementById("lang-prefilled");

  // またはJavaScriptでプログラムから値を設定
  prefilledSelector.value = "eng;chi;zbl"; // 英語、中国語、Blissymbolsを設定
</script>
```

## API

### `.value`

- **型:** `String`
- **説明:** 選択された言語を、セミコロン区切りのISO 639-2/B言語コード文字列として取得または設定します。

## 依存関係

このコンポーネントは以下のESモジュールに依存しています:
- [`stdcomp.js`](https://js.sabae.cc/stdcomp.js) （コンポーネントユーティリティ用）
- [`ISO639.js`](https://code4fukui.github.io/LangCode/ISO639.js) （言語コードデータ用）
- [`input-multi-select.js`](https://code4fukui.github.io/input-multi-select/input-multi-select.js) （検索可能なドロップダウン用）

## 作者

作成: [@taisukef](https://fukuno.jig.jp/3372)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
