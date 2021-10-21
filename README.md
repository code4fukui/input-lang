# input-week

- サービス曜日入力ボックス
- https://code4fukui.github.io/input-week/

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-week/input-week.js"></script>
<input-week id=inp></input-week>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
