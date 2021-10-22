# input-lang

- 言語入力ボックス
- https://code4fukui.github.io/input-lang/

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-lang/input-lang.js"></script>
<input-lang id=inp></input-lang>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
