
const STR = {
 tagline:{en:"A unified public-transcriptome resource for allergic rhinitis",zh:"过敏性鼻炎公共转录组统一资源"},
 nav_overview:{en:"Overview",zh:"总览"},nav_datasets:{en:"Datasets",zh:"数据集"},nav_gene:{en:"Gene query",zh:"基因查询"},
 nav_sc:{en:"Single-cell",zh:"单细胞"},nav_treat:{en:"Treatments & challenge",zh:"治疗与激发"},nav_spatial:{en:"Spatial",zh:"空间层"},
 nav_path:{en:"Pathways & programs",zh:"通路与程序"},
 nav_methods:{en:"Methods",zh:"方法"},nav_dl:{en:"Downloads",zh:"下载"},
 foot:{en:"RhinitisAtlas — precomputed static resource. Every number on this site traces to a result file in the project archive. Data cutoff: 1 October 2026.",zh:"RhinitisAtlas —— 预计算静态资源。本站每个数字均可溯源至项目归档中的结果文件。数据截止：2026 年 10 月 1 日。"},
};
let LANG = localStorage.getItem("ra_lang") || "en";
function t(k){ const s = STR[k]; return s ? (s[LANG] || s.en) : k; }
function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on", b.dataset.l===LANG));
  document.title = "RhinitisAtlas — " + t("tagline");
}
function setLang(l){ LANG=l; localStorage.setItem("ra_lang", l); applyLang(); if(window.onLang) onLang(); }
async function loadJSON(p){ const r = await fetch(p); return r.json(); }
function fdrFmt(f){ if(f===null||f===undefined) return "—"; if(f===0) return "0"; if(f<0.001) return f.toExponential(1); return f.toFixed(3); }
const CT_COLORS = {}; const PALETTE = ["#0e6e6e","#b3541e","#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413"];
function ctColor(ct){ if(!(ct in CT_COLORS)) CT_COLORS[ct] = PALETTE[Object.keys(CT_COLORS).length % PALETTE.length]; return CT_COLORS[ct]; }
document.addEventListener("DOMContentLoaded", applyLang);
