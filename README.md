# RhinitisAtlas — Allergic Rhinitis Public-Data Resource

**Live resource: https://rhinitis.erbihou.org/**

RhinitisAtlas is a curated, unified public-data resource for allergic rhinitis (AR), built entirely from public transcriptomes. It catalogues the AR datasets on GEO (69 series; 39 core datasets, 2,588 samples) and reprocesses them under one uniform pipeline across bulk, single-cell and spatial layers, so that any gene — or any researcher's own gene list — can be checked against the full body of public AR evidence.

过敏性鼻炎公共数据资源：策展 GEO 69 个系列（核心 39 个数据集、2,588 个样本），统一流程整合 bulk、单细胞与空间转录组；可按基因查询，也可粘贴自己的基因列表在线核查。网站为中英双语，默认英文。

## Contents

- **Bulk transcriptomics:** 25 series, 31 contrasts, integrated into a 95,520-gene × 25-series direction-consistent evidence matrix
- **Single-cell RNA-seq:** 6 series unified — 292,545 cells, 27 donors, 81 cell-type-level pseudobulk contrasts
- **Spatial transcriptomics:** nasal-tissue spatial data, browsable alongside the bulk and single-cell layers

## Website features

- **Gene-list check** — paste your up- and down-regulated gene lists and test them in the browser: overlap enrichment against the AR and CRSwNP consensus sets, direction concordance, and a per-gene read-out. All computation runs locally in the browser; nothing is uploaded.
- **Gene lookup** — a gene's evidence across the resource's bulk, single-cell and spatial layers
- **Dataset browser** — metadata for every curated series, with limitations stated next to the data
- **Pathways** — pathway-level results, including per-sample deconvolution (MCP-counter, xCell)
- **Treatments** — treatment-cohort views
- **Downloads & methods** — the full result tables, the pipeline, and known limitations stated in full

## Data availability

All processed data are archived on Zenodo (CC BY 4.0): **DOI [10.5281/zenodo.23463138](https://doi.org/10.5281/zenodo.23463138)**. The same tables are also available directly from the website's download page.

## Citation

If you use RhinitisAtlas in your work, please cite:

> RhinitisAtlas: a unified public-transcriptome resource for allergic rhinitis. https://rhinitis.erbihou.org/ — archived data: Zenodo, DOI 10.5281/zenodo.23463138.

## Sister resource

[PolypAtlas](https://polyp.erbihou.org/) — the companion resource for chronic rhinosinusitis with nasal polyps (CRSwNP), built with the same curation and analysis framework; the RhinitisAtlas gene-list check tests lists against both diseases' consensus sets.

## Repository layout

- This repository is the static website itself, served via GitHub Pages at the address above.

## Contact

Peiliang Lei (of@live.com), Department of Otolaryngology, The Third Hospital of Shijiazhuang, Shijiazhuang, Hebei, China.
