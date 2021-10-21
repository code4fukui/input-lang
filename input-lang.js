import { setAttributes, create } from "https://js.sabae.cc/stdcomp.js";

const LANGS = [
  { name_ja: "英語", langcode: "eng" },
  { name_ja: "中国語", langcode: "zho" },
  { name_ja: "韓国語", langcode: "kor" },
  { name_ja: "ポルトガル語", langcode: "por" },
];

class InputLang extends HTMLElement {
  constructor(opts) {
    super();
    setAttributes(this, opts);
    for (const lang of LANGS) {
      const lbl = create("label", this);
      const chk = create("input", lbl);
      chk.type = "checkbox";
      const span = create("span", lbl);
      span.textContent = lang.name_ja;
      chk.value = lang.langcode;
    }
    this.other = create("input", this);
    if (opts?.value) {
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
    this.other.value = langs.filter(l => l).join(";");
  }
  get value() {
    const res = [];
    this.querySelectorAll("input").forEach((inp, idx) => {
      if (inp.checked) {
        res.push(inp.value);
      }
    });
    this.other.value.split(";").filter(l => l.length > 0).forEach(l => res.push(l));
    return res.join(";");
  }
}

customElements.define("input-lang", InputLang);

export { InputLang };
