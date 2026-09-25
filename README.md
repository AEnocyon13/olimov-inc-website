# OLIMOV株式会社 — コーポレートサイト

日本とウズベキスタンをつなぐナレッジブローカー、OLIMOV株式会社のコーポレートサイト。
Astro による静的サイト。日本語（既定）/ 英語 / ロシア語の3言語。

**公開先** → https://aenocyon13.github.io/olimov-inc-website/

`main` への push で GitHub Actions が自動ビルド・デプロイします
（`.github/workflows/deploy.yml`）。

---

## 未掲載の項目

会社情報は `src/i18n/content.ts` 冒頭の `company` オブジェクトにまとまっています。
住所・メールアドレス・代表者の経歴は実データです。

| 項目 | 状態 | 備考 |
|---|---|---|
| 設立年月日 | 未掲載 | 出典資料になかったため、どこにも書いていません |
| 資本金・従業員数 | 未掲載 | 同上。会社概要に載せる場合は追記が必要 |
| 電話番号 | 未掲載 | 契約書レターヘッドの番号は個人携帯のため、意図的に伏せています |

---

## 掲載内容の出所と匿名化の方針

本サイトの記載は、以下の社内資料から事実のみを抽出しています。

| 記載箇所 | 出所 |
|---|---|
| 会社名・所在地 | 輸出契約書（EXPORT / SALES AGREEMENT）レターヘッド |
| 実績 01（ポンプ輸出） | 同契約書の建値・決済・準拠法条項、および補修部品発注書 |
| 実績 02（提携仲介） | 提携提案資料および議事録 |
| 実績 03（IT要件定義） | 配送プラットフォーム要件定義資料 |
| 代表プロフィール | 提携提案資料の自己紹介ページ |
| 事業内容の4分類 | 旧サイトの事業説明 |

**取引先の社名はすべて匿名化しています。** 業種・規模・国のみを記載し、
先方の掲載許諾が得られた時点で `content.ts` の `client` を実名に差し替えられる形にしてあります。

**意図的に載せていないもの** — 契約金額、銀行口座情報、買主の詳細住所、
先方担当者名。いずれも非公開の商取引情報です。

---

## 起動

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的出力
npm run preview  # ビルド結果を確認
```

Node.js 20 以上が必要です（開発時のみ。出力は純粋な HTML/CSS）。

---

## 出力サイズ

| 項目 | 値 |
|---|---|
| 出力ファイル | HTML 3枚 + favicon.svg のみ |
| JS バンドル | **0ファイル**（インライン約1.8KB のみ） |
| CSS ファイル | 0ファイル（全て HTML にインライン化） |

外部リクエストは Google Fonts のみ。フォントは unicode-range 分割配信のため、
実際に表示する文字のサブセットしかダウンロードされません。

---

## 構成

```
src/
  i18n/content.ts        ← 全テキストと会社情報（ja / en / ru）。差し替えはここだけ
  layouts/Base.astro     ← <head>、フォント、アニメーション戦略の判定
  styles/                ← M3 トークン層（下の「デザインシステム」参照）
  tools/gen-m3-tokens.mjs ← カラートークン生成スクリプト
  components/
    TopAppBar.astro      M3 top app bar + segmented button（言語）+ modal drawer
    Hero.astro           Display + filled button + 双方向の軸（progress indicator）
    Ticker.astro         業務語彙のマーキー（M3 chip）
    Services.astro       事業内容 4領域（outlined card）
    Flows.astro          往復（filled card + linear progress indicator）
    Cases.astro          実績3件（elevated card のスタッキング + スペック表）
    Founder.astro        代表プロフィール（filled card + list）
    Trust.astro          体制・コンプライアンス（outlined card）
    Contact.astro        問い合わせ（extended FAB）+ 所在地 + 現地時刻
    Footer.astro         surface-container
  pages/
    index.astro          /      日本語（既定）
    en/index.astro       /en/
    ru/index.astro       /ru/
```

---

## デザインシステム — Material Design 3

[m3.material.io](https://m3.material.io/) に準拠。`@material/web` などのコンポーネント
ライブラリは使わず、**M3 のトークンを CSS で自前実装**しています（JSバンドル0を維持するため）。

```
src/styles/
  m3-color.css   ← 生成物。49カラーロール × ライト/ダーク
  m3-sys.css     ← タイプスケール15段階・シェイプ10段階・エレベーション・
                    ステートレイヤー・モーション
  m3-comp.css    ← コンポーネント
  global.css     ← リセット、レイアウト、リビール
```

### 配色 — シードから生成

`tools/gen-m3-tokens.mjs` が **Google 公式の `@material/material-color-utilities`**
（M3 の HCT カラーシステムの参照実装）でトーナルパレットを生成します。
手で hex を選んだ箇所はありません。

```bash
npm run tokens   # src/styles/m3-color.css を再生成
```

| 設定 | 値 | 理由 |
|---|---|---|
| シード | `#D3391F` | 既存ブランドの朱 |
| スキーム | `SchemeContent` | 公式バリアントのうち、シードがそのまま `primary-container` として残る唯一のもの。M3 既定の `SchemeTonalSpot` だと `#904B3D` まで濁ります |
| ニュートラル彩度 | 4 / 6 | **意図的なカスタマイズ。** 下記参照 |
| コントラスト | 0（既定） | |

**ニュートラル彩度を下げている理由** — `SchemeContent` はシードの彩度からグレーを導出します。
朱は彩度が高く（HCT で C=80.6）、既定のまま（10.1 / 14.1）だと面が
`surface-container-highest: #F9DCD7` のようにはっきりピンクになります。
M3 は palette のカスタマイズを明示的に認めているため、**アクセント系はそのまま**に
ニュートラル系だけ落としました。`primary` `secondary` `tertiary` の値は前後で完全に同一です。
戻す場合は `tools/gen-m3-tokens.mjs` の `NEUTRAL_CHROMA` を 10 / 14 に。
ちなみに M3 既定の `SchemeTonalSpot` は 6 / 8 です。

**ダークテーマ** — `prefers-color-scheme` に追従。OS設定で自動的に切り替わります。
手動トグルは置いていません。

### タイポグラフィ

M3 のタイプスケール15段階（baseline）＋ emphasized を実装。サイズは M3 の Web 換算
（1sp = 0.0625rem）に従っています。

| 役割 | 書体 |
|---|---|
| brand typeface（Display・Headline） | **Roboto Flex**（可変） |
| plain typeface（Body・Label） | **Roboto Flex** |
| 日本語 | **Noto Sans JP** — 全スケールのフォールバックに指定 |

**言語別の行高** — M3 は文字体系を small / medium / large / extra large に分類し、
**日本語は medium（約7%高い）**です。`:lang(ja)` で `--md-line-height-scale: 1.07` を
掛けています。ラテン・キリルは 1.0 のままです。

### シェイプ・エレベーション・モーション

- シェイプ 10段階（0 / 4 / 8 / 12 / 16 / 20 / 28 / 32 / 48 / full）
- エレベーション 6段階（level0〜5）
- ステートレイヤー（hover 8% / focus 10% / pressed 10% / dragged 16%）
- モーション：easing 7種・duration 16段階の M3 トークン

### 使用コンポーネント

Top app bar（スクロールで surface-container に昇格）、Navigation drawer（modal・compact窓のみ）、
Card（elevated / filled / outlined）、Button（filled / tonal / outlined / text）、FAB（extended）、
Chip（assist / tonal）、Segmented button（言語切替）、List、Divider、Linear progress indicator。

### M3 からの意図的な逸脱（3点）

1. **`.md-display-hero`** — Display Large は 57sp で頭打ちです。これはプロダクト画面向けの
   サイズで、マーケティングのヒーローには小さすぎます。M3 は「タイプスケールのカスタマイズ」を
   認めているため、ヒーロー専用に1段上を足しました。他は全て標準スケールです。
2. **compact 窓でのチップの折り返し** — M3 のチップは1行が既定ですが、ロシア語の長いラベル
   （`Промышленное оборудование и насосы`）が 375px の窓幅を超えます。M3 の
   「ラベルを削るより折り返す」という指針に従い、600px 未満でのみ折り返します。
3. **ニュートラル彩度** — 上記参照。

## 検証済み項目

| 項目 | 結果 |
|---|---|
| 横スクロール | 375 / 1440px × 日英露 すべてなし |
| テキストコントラスト | ライト・ダーク両方で違反 0件。最も低い箇所でも 4.55:1 |
| タップ領域 | **M3 の最小 48×48dp 未満が 0件**（視覚サイズは40dpのまま、当たり判定のみ拡張） |
| 見出し階層 | h1 は1つ、レベル飛ばしなし |
| スクロール到達性 | 文書最下部を含め、画面内のリビール要素はすべて opacity 1（実描画状態で確認） |
| リビール要素の高さ | ビューポートより高いものは 0件（entry 基準の範囲が必ず完走する条件） |
| ダークテーマ | ライトと同条件で検証。地は surface（#FFF8F6 / #1E100D） |
| ヒーロー見出しの折り返し | 日英露いずれも1行に収まることを実測 |
| コンソールエラー | なし |

ロシア語は語長が最も長く、375px でチップが窓幅を超えていたため、compact 窓のみ
ラベルを折り返す扱いにしています。

---

## 多言語

`astro.config.mjs` の i18n 設定で `ja` を既定（プレフィックスなし）、`en` / `ru` をサブパスに。
`hreflang` と `x-default` は `Base.astro` が自動出力します。

**ウズベク語の追加を検討する場合:**
1. `src/i18n/content.ts` の `content` に `uz` の辞書を追加し `LANGS` に登録
2. `src/pages/uz/index.astro` を作成
3. `astro.config.mjs` の `locales` に `'uz'` を追加
4. ラテン文字表記であれば既存フォントのまま対応できます
