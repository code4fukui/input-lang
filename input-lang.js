import { setAttributes, create } from "https://js.sabae.cc/stdcomp.js";
import { ISO639 } from "https://code4fukui.github.io/LangCode/ISO639.js";
import { InputMultiSelect } from "https://code4fukui.github.io/input-multi-select/input-multi-select.js";

const IGNORES = ["日本語"];
const LANGS = ["英語", "中国語", "韓国語", "ベトナム語", "ポルトガル語"];
class InputLang extends HTMLElement {
  constructor(opts) {
    super();
    this.init(opts);
  }
  async init(opts = {}) {
    setAttributes(this, opts);
    for (const lang of LANGS) {
      const lbl = create("label", this);
      const chk = create("input", lbl);
      chk.type = "checkbox";
      const span = create("span", lbl);
      span.textContent = lang;
      const langcode = await ISO639.encode(lang);
      chk.value = langcode;
    }
    //const sel = await createSelect();
    const data = (await ISO639.list()).filter(l => IGNORES.indexOf(l.lang_ja) == -1 || LANGS.indexOf(l.lang_ja) != -1);
    data.sort((a, b) => a.lang_ja.localeCompare(b.lang_ja));
    const map = {};
    data.forEach(d => {
      map[d.lang_ja] = d["ISO639-2B"];
    });
    const sel = new InputMultiSelect(map);
    this.appendChild(sel);
    this.other = sel;

    if (opts.value) {
      this.value = opts.value;
    }
  }
  set value(v) {
    const langs = v.split(";");
    this.querySelectorAll("input").forEach((inp, idx) => {
      const n = langs.indexOf(inp.value);
      inp.checked = n >= 0;
      langs[n] = null;
    });
    console.log(langs.filter(l => l));
    this.other.value = langs.filter(l => l);
  }
  get value() {
    const res = [];
    this.querySelectorAll("input").forEach((inp, idx) => {
      if (inp.checked) {
        res.push(inp.value);
      }
    });
    this.other.value.forEach(d => res.push(d));
    return res.join(";");
  }
}

customElements.define("input-lang", InputLang);

export { InputLang };
