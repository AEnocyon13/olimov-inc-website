export type Lang = 'ja' | 'en' | 'ru';
export const LANGS: Lang[] = ['ja', 'en', 'ru'];
export const LANG_NAMES: Record<Lang, string> = { ja: '日本語', en: 'English', ru: 'Русский' };
export const LANG_SHORT: Record<Lang, string> = { ja: 'JA', en: 'EN', ru: 'RU' };
/** Root-relative path for a locale, honouring Astro's `base`.
 *  With base '/' this is '/', '/en/', '/ru/'; under GitHub Pages it becomes
 *  '/<repo>/', '/<repo>/en/', '/<repo>/ru/'. */
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';
export const href = (lang: Lang): string => (lang === 'ja' ? BASE : `${BASE}${lang}/`);
export const asset = (path: string): string => BASE + path.replace(/^\//, '');
export const HREF: Record<Lang, string> = { ja: href('ja'), en: href('en'), ru: href('ru') };
export const HTML_LANG: Record<Lang, string> = { ja: 'ja', en: 'en', ru: 'ru' };

/* ------------------------------------------------------------------
   Facts on this site come from company documents. Counterparties are
   described by sector and size, never by name.

   TODO before launch — placeholders marked ⚠ must be replaced:
     · contact.email  ⚠ business address not yet supplied
     · company.founded / capital / employees  ⚠ not in the source documents
   The registered office and the founder's record below are taken from
   the export agreement and the partnership presentation and are real.
   ------------------------------------------------------------------ */

export const company = {
  nameJa: 'OLIMOV株式会社',
  nameEn: 'OLIMOV CO., LTD.',
  addressJa: '〒106-0032 東京都港区六本木3-16-12 六本木KSビル5F',
  addressEn: '5F Roppongi KS Bldg., 3-16-12 Roppongi, Minato-ku, Tokyo 106-0032, Japan',
  addressRu: 'Япония, Токио, Минато-ку, Роппонги 3-16-12, Roppongi KS Bldg. 5F, 106-0032',
  email: 'info@olimov-inc.jp', // ⚠ placeholder
};

export const content = {
  ja: {
    meta: {
      title: 'OLIMOV株式会社 — 日本とウズベキスタンのナレッジブローカー',
      description:
        '日本とウズベキスタンの間で、契約仲介・輸出入手続き・市場調査・IT技術支援を一貫して引き受けます。両国の言語と商習慣を一人で通せる体制。東京・六本木。',
    },
    nav: { services: '事業内容', flows: '往復', work: '実績', founder: '代表', trust: '体制', contact: '問い合わせ' },
    skip: 'メインコンテンツへ移動',

    hero: {
      eyebrow: 'OLIMOV株式会社 / 東京 — タシケント',
      title: ['知識は、', '両方向に流れる。'],
      lead:
        '設備と品質管理の手法は日本からウズベキスタンへ。原料と生産能力はウズベキスタンから日本へ。どちらの向きにも、言語と法制度と商習慣という同じ壁があります。そこを一人で通します。',
      cta: '取引の相談をする',
      ctaSub: '通常2営業日以内に返信',
      axis: {
        left: '東京',
        right: 'タシケント',
        out: '設備・部品・品質管理の手法',
        back: '原料・鉱物資源・生産能力',
      },
    },

    ticker: [
      '契約仲介', 'EXPORT DOCUMENTATION', '輸出入手続き', 'ЮРИДИЧЕСКИЙ ПЕРЕВОД', '市場調査',
      'INCOTERMS 2020', '逐次通訳', 'ТАМОЖЕННОЕ ОФОРМЛЕНИЕ', 'IT技術支援', 'REQUIREMENTS DEFINITION',
      '原産地証明', 'T/T・L/C', '提携仲介', 'DUE DILIGENCE',
    ],

    services: {
      label: '事業内容',
      title: '四つの領域',
      lead:
        '扱う領域は絞っています。産地の工場と日本の担当者、その両方と同じ言葉で話せる範囲だけを引き受けるためです。',
      items: [
        {
          no: '01',
          name: '契約仲介・商談通訳',
          desc: '売買契約書の起草から、条件交渉の場での逐次通訳まで。日英併記で作成し、準拠法と紛争解決地を最初に決めます。',
          tags: ['契約書起草', '逐次通訳', '日英併記'],
        },
        {
          no: '02',
          name: '輸出入手続き',
          desc: 'Incoterms 2020 に基づく建値設計、輸出許可、原産地証明、航空・海上の手配、着地側の通関まで。着地国課税の負担区分も契約段階で明記します。',
          tags: ['Incoterms 2020', '通関', 'T/T・L/C'],
        },
        {
          no: '03',
          name: '市場調査・提携仲介',
          desc: '現地企業の実態調査と、日本側の判断材料に翻訳した報告書の作成。提携先の探索から、面談の設定と議事録作成まで引き受けます。',
          tags: ['実態調査', '報告書 日英', '提携先探索'],
        },
        {
          no: '04',
          name: 'IT技術支援',
          desc: '業務システムの要件定義、既製品と自社開発の比較検討、開発ベンダーの選定と進行管理。現地の業務フローを見たうえで仕様に落とします。',
          tags: ['要件定義', 'ベンダー選定', 'MVP設計'],
        },
      ],
    },

    flows: {
      label: '往復',
      title: '流れは二方向ある',
      lead:
        '片道だけの仕事は請けていません。両方向を同じ人間が見ているから、片側で得た情報がもう片側で効きます。',
      items: [
        {
          code: 'F-01', dir: 'fwd', from: '東京', to: 'タシケント',
          name: '日本から送るもの',
          items: ['産業機械・ポンプ類', '補修部品の継続供給', '品質管理・検収の手法', '技術者研修'],
          note: '実案件では航空混載で CIP タシケント国際空港。少量高単価の設備と、止められない補修部品が中心。',
        },
        {
          code: 'F-02', dir: 'rev', from: 'タシケント', to: '東京',
          name: 'ウズベキスタンから来るもの',
          items: ['化学原料', '鉱物資源・ベントナイト', '生産受託能力', '中央アジア市場への接続'],
          note: '調達だけでなく、日本側にない生産規模とコスト構造そのものが提携材料になります。',
        },
        {
          code: 'F-03', dir: 'both', from: '両方向', to: '常時',
          name: 'その間で起きること',
          items: ['契約書と条件交渉', '通訳・技術文書の翻訳', '通関と原産地証明', '決済条件と為替'],
          note: '往復のどちらでも壁は同じ場所にあります。当社の仕事はここに集中しています。',
        },
      ],
      note: '記載の経路・条件は当社が実際に締結した契約に基づきます。取引先名は伏せています。',
    },

    work: {
      label: '実績',
      title: '三つの仕事',
      lead: '取引先の社名は開示していません。案件の性質と、契約で実際に確定させた条件のみを記載します。',
      cases: [
        {
          no: '01', year: '2026', place: '東京 / タシケント州',
          client: 'ウズベキスタンの漂白粘土メーカー（従業員51名・年産約10,000トン）',
          title: '日本製ダイヤフラムポンプを、補修部品まで含めて通した',
          body:
            '設備そのものより、止まったときに部品が来るかが問題でした。本体2台と同時に補修部品12品目を同一契約で確定させ、建値・検収期間・保証範囲・準拠法を先に固定。当社が売主として輸出者になり、買主側は着地の通関だけを見ればよい形にしました。',
          facts: [
            { k: '契約形態', v: '当社が売主として輸出' },
            { k: '建値', v: 'CIP タシケント国際空港' },
            { k: '内容', v: '本体2台 ＋ 補修部品12品目' },
            { k: '決済', v: 'T/T 30日' },
            { k: '準拠法', v: '日本法・東京仲裁' },
          ],
        },
        {
          no: '02', year: '2025 — 2026', place: '群馬 / タシケント',
          client: '日本の粘土加工メーカー ⇄ 中央アジアの化学原料グループ（従業員2,000名超）',
          title: '同じ鉱物を扱う二社を、判断できる材料まで持っていった',
          body:
            '相手先の規模も設備も、日本側からは確かめようがありませんでした。グループ構成、採掘場と自社工場の実態、年間生産量までを現地で確認して報告書にまとめ、日本語と英語の両方で提出。面談を設定し、議事録も両言語で残しました。',
          facts: [
            { k: '調査対象', v: 'グループ2社（2007年設立／2018年設立）' },
            { k: '成果物', v: '実態調査報告書 日英2言語' },
            { k: '実施', v: '提案資料作成・面談設定・議事録作成' },
            { k: '提案内容', v: '人材交流とベントナイト分野での協業' },
          ],
        },
        {
          no: '03', year: '2026 —', place: 'タシケント / 大阪',
          client: 'ウズベキスタンの配送事業者',
          title: '既製品を買わない、という結論から始めた',
          body:
            '現地で先行する配送システム2製品を機能単位で評価したところ、いずれも配達員アプリが限定的で本人確認機能がなく、顧客アプリに至っては存在しませんでした。カスタマイズ費用が自社開発に迫るため不採用と判断し、配達員・顧客・管理画面の3系統を要件に落としました。',
          facts: [
            { k: '評価', v: '既製2製品を機能比較のうえ不採用' },
            { k: '設計', v: '配達員／顧客／管理web の3アプリ' },
            { k: 'MVP', v: '3か月' },
            { k: '全体想定', v: '10か月' },
          ],
        },
      ],
    },

    founder: {
      label: '代表',
      title: '橋は、人でできている',
      name: 'Olimov Muhammadolim',
      nameJa: 'オリモフ・ムハンマドリム',
      role: '代表取締役',
      lead:
        '両国の言語と商習慣を、通訳を挟まずに一人で通せること。それがこの会社の実体です。',
      timeline: [
        { year: '2003', text: 'ウズベキスタン・タシケント生まれ' },
        { year: '2010', text: '来日。以後、日本で教育を受ける' },
        { year: '現在', text: '東京都立大学 システムデザイン学部 在籍。体育会ラグビー部所属' },
        { year: '現在', text: '中央アジアの化学原料グループにて日本市場担当責任者' },
        { year: '現在', text: '法テラス登録通訳人（ウズベク語・ロシア語・英語）' },
      ],
      langs: { label: '対応言語', items: ['日本語', 'ウズベク語', 'ロシア語', '英語'] },
      note: '商談の逐次通訳、契約書の起草と翻訳、技術文書の読解までを同一の担当者が通します。案件の途中で伝達の質が落ちません。',
    },

    trust: {
      label: '体制',
      title: '揉めないための仕組み',
      lead: '貿易で起きる問題は、だいたい同じ場所で起きます。契約の段階で先に潰しておきます。',
      items: [
        { title: '準拠法と紛争解決', body: '日本法準拠・東京での仲裁を標準条件に。契約書は日英併記で起草し、双方が同じ文言を読める状態にします。' },
        { title: '建値と課税の区分', body: 'Incoterms 2020 に基づく建値設計。危険負担の移転点と、着地国で課される税の負担者を契約書に明記します。' },
        { title: '検収と保証', body: '到着後の瑕疵申立期間、保証の範囲と除外事由を事前に確定。あとから解釈が割れる余地を残しません。' },
        { title: '言語の一貫性', body: '交渉・契約・技術文書を同一の担当者が通訳・翻訳。外部通訳への引き継ぎで生じる欠落がありません。' },
      ],
    },

    contact: {
      label: '問い合わせ',
      title: 'まず、案件の輪郭を教えてください',
      lead:
        '品目と数量、あるいは調べたい相手先。見積りの前に、扱える案件かどうかをその場で申し上げます。扱っていない領域であれば、そう申し上げます。',
      emailLabel: 'メールで相談する',
      officeLabel: '所在地',
      hoursLabel: '対応時間帯',
      hoursNote: '東京とタシケントの時差は4時間。どちらの営業時間にも合わせて対応します。',
      zones: [
        { city: '東京', country: '日本', role: '本店所在地', tz: 'UTC+9' },
        { city: 'タシケント', country: 'ウズベキスタン', role: '主要取引先所在地', tz: 'UTC+5' },
      ],
    },

    footer: {
      tagline: '日本とウズベキスタンのナレッジブローカー',
      note: '本サイトに記載の実績は当社が締結した契約および作成した成果物に基づきます。取引先の社名は同意が得られるまで開示していません。',
      rights: '© 2026 OLIMOV株式会社',
    },
  },

  en: {
    meta: {
      title: 'OLIMOV CO., LTD. — Knowledge broker between Japan and Uzbekistan',
      description:
        'Contract brokerage, export and import procedures, market research and IT advisory between Japan and Uzbekistan. Both languages and both sets of business customs, held by one person. Roppongi, Tokyo.',
    },
    nav: { services: 'Services', flows: 'Both ways', work: 'Work', founder: 'Founder', trust: 'Practice', contact: 'Contact' },
    skip: 'Skip to main content',

    hero: {
      eyebrow: 'OLIMOV CO., LTD. / Tokyo — Tashkent',
      title: ['Knowledge runs', 'both ways.'],
      lead:
        'Equipment and quality-control practice travel from Japan to Uzbekistan. Raw materials and production capacity travel back. Whichever way it goes, the same wall stands in the middle: language, law, and how business is actually done. We take you through it.',
      cta: 'Start a conversation',
      ctaSub: 'We reply within two business days',
      axis: {
        left: 'Tokyo',
        right: 'Tashkent',
        out: 'Equipment · parts · QC practice',
        back: 'Raw materials · minerals · capacity',
      },
    },

    ticker: [
      'CONTRACT BROKERAGE', '契約仲介', 'EXPORT DOCUMENTATION', 'ЮРИДИЧЕСКИЙ ПЕРЕВОД',
      'MARKET RESEARCH', 'INCOTERMS 2020', 'CONSECUTIVE INTERPRETING', 'ТАМОЖНЯ',
      'IT ADVISORY', 'REQUIREMENTS DEFINITION', 'CERTIFICATE OF ORIGIN', 'T/T · L/C', 'DUE DILIGENCE',
    ],

    services: {
      label: 'Services',
      title: 'Four areas',
      lead:
        'The list is deliberately short. We take on only what we can discuss in both languages — with the plant on one side and the person responsible in Japan on the other.',
      items: [
        {
          no: '01', name: 'Contract brokerage & interpreting',
          desc: 'From drafting the sales agreement to consecutive interpreting at the negotiating table. Drafted in parallel Japanese and English, with governing law and forum settled first.',
          tags: ['Contract drafting', 'Consecutive interpreting', 'Bilingual text'],
        },
        {
          no: '02', name: 'Export & import procedures',
          desc: 'Incoterms 2020 pricing structure, export licences, certificates of origin, air and sea forwarding, and customs at destination. Who bears destination-country tax is written into the contract.',
          tags: ['Incoterms 2020', 'Customs', 'T/T · L/C'],
        },
        {
          no: '03', name: 'Research & partnership brokerage',
          desc: 'On-the-ground verification of a counterparty, written up as something a Japanese board can actually decide on. Partner search, meeting arrangement and minutes included.',
          tags: ['Counterparty verification', 'Bilingual reporting', 'Partner search'],
        },
        {
          no: '04', name: 'IT advisory',
          desc: 'Requirements definition, off-the-shelf versus custom build, vendor selection and delivery oversight. We look at how the work is actually done locally before writing the spec.',
          tags: ['Requirements', 'Vendor selection', 'MVP scoping'],
        },
      ],
    },

    flows: {
      label: 'Both ways',
      title: 'The traffic runs two ways',
      lead:
        'We do not take one-way work. Because the same person watches both directions, what we learn on one side pays off on the other.',
      items: [
        {
          code: 'F-01', dir: 'fwd', from: 'Tokyo', to: 'Tashkent',
          name: 'What Japan sends',
          items: ['Industrial machinery and pumps', 'Continuity of spare parts', 'QC and acceptance practice', 'Engineer training'],
          note: 'In practice, air consolidation on CIP Tashkent International Airport terms. Low-volume high-value equipment, and the spare parts that cannot be allowed to run out.',
        },
        {
          code: 'F-02', dir: 'rev', from: 'Tashkent', to: 'Tokyo',
          name: 'What Uzbekistan sends',
          items: ['Chemical raw materials', 'Minerals and bentonite', 'Contract manufacturing capacity', 'Access to the Central Asian market'],
          note: 'Not only supply: the production scale and cost structure that no longer exist in Japan are themselves the reason to partner.',
        },
        {
          code: 'F-03', dir: 'both', from: 'Both ways', to: 'Continuous',
          name: 'What happens in between',
          items: ['Contracts and terms', 'Interpreting and technical translation', 'Customs and origin', 'Payment terms and FX'],
          note: 'The wall sits in the same place whichever way you are going. This is where our work is concentrated.',
        },
      ],
      note: 'Routes and terms shown are taken from agreements we have actually concluded. Counterparties are not named.',
    },

    work: {
      label: 'Work',
      title: 'Three jobs',
      lead: 'We do not publish client names. What is shown is the nature of the engagement and the terms actually fixed in the contract.',
      cases: [
        {
          no: '01', year: '2026', place: 'Tokyo / Tashkent region',
          client: 'An Uzbek bleaching-clay producer (51 staff, ~10,000 t/yr)',
          title: 'We shipped Japanese diaphragm pumps — spare parts included',
          body:
            'The equipment was never the hard part; whether a part would arrive when the line stopped was. Two units and twelve spare-part line items were fixed under a single agreement, with delivery terms, inspection window, warranty scope and governing law settled up front. We stood as seller and exporter, leaving the buyer only the customs clearance at destination.',
          facts: [
            { k: 'Structure', v: 'We acted as seller and exporter' },
            { k: 'Delivery', v: 'CIP Tashkent International Airport' },
            { k: 'Scope', v: '2 units + 12 spare-part line items' },
            { k: 'Payment', v: 'T/T within 30 days' },
            { k: 'Law', v: 'Japanese law, arbitration in Tokyo' },
          ],
        },
        {
          no: '02', year: '2025 — 2026', place: 'Gunma / Tashkent',
          client: 'A Japanese clay processor ⇄ a Central Asian chemicals group (2,000+ staff)',
          title: 'We took two companies in the same mineral as far as a decidable proposition',
          body:
            'From Japan there was no way to confirm the counterparty’s scale or plant. We verified the group structure, the mine, the owned factory and the annual tonnage on site, wrote it up, and delivered it in Japanese and English. We arranged the meeting and kept the minutes in both languages.',
          facts: [
            { k: 'Subject', v: 'Two group companies (est. 2007 / 2018)' },
            { k: 'Deliverable', v: 'Verification report, JA + EN' },
            { k: 'Carried out', v: 'Proposal deck, meeting, minutes' },
            { k: 'Proposal', v: 'Personnel exchange and bentonite collaboration' },
          ],
        },
        {
          no: '03', year: '2026 —', place: 'Tashkent / Osaka',
          client: 'An Uzbek delivery operator',
          title: 'We started from the conclusion not to buy off the shelf',
          body:
            'Evaluated feature by feature, both incumbent local platforms had a limited courier app with no identity verification, and no customer app at all. Customisation approached the cost of building, so we ruled them out and wrote requirements for three surfaces: courier, customer, and an admin console.',
          facts: [
            { k: 'Evaluation', v: 'Two products compared, both rejected' },
            { k: 'Design', v: 'Courier / customer / admin web' },
            { k: 'MVP', v: '3 months' },
            { k: 'Full scope', v: '10 months' },
          ],
        },
      ],
    },

    founder: {
      label: 'Founder',
      title: 'The bridge is a person',
      name: 'Olimov Muhammadolim',
      nameJa: '',
      role: 'Representative Director',
      lead:
        'Both languages and both sets of business customs, carried by one person with no interpreter in between. That is what this company actually is.',
      timeline: [
        { year: '2003', text: 'Born in Tashkent, Uzbekistan' },
        { year: '2010', text: 'Moved to Japan; educated in Japan since' },
        { year: 'Now', text: 'Tokyo Metropolitan University, Faculty of System Design. University rugby club' },
        { year: 'Now', text: 'Head of the Japan market at a Central Asian chemicals group' },
        { year: 'Now', text: 'Court-registered interpreter (Uzbek, Russian, English) with Houterasu' },
      ],
      langs: { label: 'Working languages', items: ['Japanese', 'Uzbek', 'Russian', 'English'] },
      note: 'Consecutive interpreting at the table, drafting and translating the contract, and reading the technical documentation are all done by the same person. Nothing degrades in handover.',
    },

    trust: {
      label: 'Practice',
      title: 'Built so it does not go wrong',
      lead: 'Trade tends to break in the same few places. We close them off at the contract stage.',
      items: [
        { title: 'Governing law and forum', body: 'Japanese law and arbitration in Tokyo as our standard terms. Contracts are drafted in parallel Japanese and English so both sides read the same words.' },
        { title: 'Delivery terms and tax', body: 'Pricing structured on Incoterms 2020. The point at which risk transfers, and who bears destination-country tax, are written into the agreement.' },
        { title: 'Inspection and warranty', body: 'The window for defect claims and the scope and exclusions of warranty are fixed in advance, leaving no room for a later difference of reading.' },
        { title: 'One voice throughout', body: 'Negotiation, contract and technical documents are interpreted and translated by the same person. Nothing is lost handing over to an outside interpreter.' },
      ],
    },

    contact: {
      label: 'Contact',
      title: 'Tell us the shape of it first',
      lead:
        'The goods and the volume, or the counterparty you need verified. Before quoting, we will say on the spot whether it is something we can take on — and if it is not, we will say that too.',
      emailLabel: 'Write to us',
      officeLabel: 'Registered office',
      hoursLabel: 'Working hours',
      hoursNote: 'Tokyo and Tashkent are four hours apart. We work to either business day.',
      zones: [
        { city: 'Tokyo', country: 'Japan', role: 'Registered office', tz: 'UTC+9' },
        { city: 'Tashkent', country: 'Uzbekistan', role: 'Principal counterparties', tz: 'UTC+5' },
      ],
    },

    footer: {
      tagline: 'Knowledge broker between Japan and Uzbekistan',
      note: 'The work shown on this site is drawn from agreements we have concluded and deliverables we have produced. Counterparties are not named until they consent.',
      rights: '© 2026 OLIMOV CO., LTD.',
    },
  },

  ru: {
    meta: {
      title: 'OLIMOV CO., LTD. — брокер знаний между Японией и Узбекистаном',
      description:
        'Посредничество в контрактах, экспортно-импортное оформление, исследование рынка и ИТ-консультирование между Японией и Узбекистаном. Оба языка и обе деловые культуры — в одних руках. Токио, Роппонги.',
    },
    nav: { services: 'Услуги', flows: 'В обе стороны', work: 'Проекты', founder: 'Руководитель', trust: 'Практика', contact: 'Контакты' },
    skip: 'Перейти к основному содержанию',

    hero: {
      eyebrow: 'OLIMOV CO., LTD. / Токио — Ташкент',
      title: ['Знание идёт', 'в обе стороны.'],
      lead:
        'Оборудование и методы контроля качества идут из Японии в Узбекистан. Сырьё и производственные мощности — обратно. В любом направлении посередине стоит одна и та же стена: язык, право и то, как в действительности ведутся дела. Мы проводим через неё.',
      cta: 'Обсудить проект',
      ctaSub: 'Отвечаем в течение двух рабочих дней',
      axis: {
        left: 'Токио',
        right: 'Ташкент',
        out: 'Оборудование · запчасти · методы ОТК',
        back: 'Сырьё · минералы · мощности',
      },
    },

    ticker: [
      'ПОСРЕДНИЧЕСТВО В КОНТРАКТАХ', 'CONTRACT BROKERAGE', 'ТАМОЖЕННОЕ ОФОРМЛЕНИЕ', '輸出入手続き',
      'ИССЛЕДОВАНИЕ РЫНКА', 'INCOTERMS 2020', 'ПОСЛЕДОВАТЕЛЬНЫЙ ПЕРЕВОД', 'ИТ-КОНСАЛТИНГ',
      'REQUIREMENTS DEFINITION', 'СЕРТИФИКАТ ПРОИСХОЖДЕНИЯ', 'T/T · L/C', 'DUE DILIGENCE',
    ],

    services: {
      label: 'Услуги',
      title: 'Четыре направления',
      lead:
        'Список намеренно короткий. Мы беремся только за то, что можем обсуждать на двух языках — с заводом с одной стороны и с ответственным лицом в Японии с другой.',
      items: [
        {
          no: '01', name: 'Контракты и устный перевод',
          desc: 'От составления договора купли-продажи до последовательного перевода за столом переговоров. Двуязычный текст, применимое право и место арбитража определяются в первую очередь.',
          tags: ['Составление договора', 'Устный перевод', 'Двуязычный текст'],
        },
        {
          no: '02', name: 'Экспорт и импорт',
          desc: 'Структура цены по Incoterms 2020, экспортные разрешения, сертификаты происхождения, авиа- и морская отправка, таможня в стране назначения. Распределение налогов фиксируется в договоре.',
          tags: ['Incoterms 2020', 'Таможня', 'T/T · L/C'],
        },
        {
          no: '03', name: 'Исследование и партнёрства',
          desc: 'Проверка контрагента на месте и отчёт в том виде, по которому японская сторона действительно может принять решение. Поиск партнёров, организация встреч и протоколы.',
          tags: ['Проверка контрагента', 'Отчёт JA + EN', 'Поиск партнёров'],
        },
        {
          no: '04', name: 'ИТ-консультирование',
          desc: 'Определение требований, сравнение готовых решений с собственной разработкой, выбор подрядчика и контроль сроков. Сначала смотрим, как работа устроена на месте.',
          tags: ['Требования', 'Выбор подрядчика', 'Объём MVP'],
        },
      ],
    },

    flows: {
      label: 'В обе стороны',
      title: 'Движение идёт в двух направлениях',
      lead:
        'Мы не берём работу в одну сторону. Оба направления ведёт один человек, поэтому знание, полученное с одной стороны, работает на другой.',
      items: [
        {
          code: 'F-01', dir: 'fwd', from: 'Токио', to: 'Ташкент',
          name: 'Что отправляет Япония',
          items: ['Промышленное оборудование и насосы', 'Непрерывность поставки запчастей', 'Методы ОТК и приёмки', 'Обучение инженеров'],
          note: 'На практике — авиаконсолидация на условиях CIP аэропорт Ташкент. Дорогое оборудование малыми партиями и запчасти, которых не должно не хватить.',
        },
        {
          code: 'F-02', dir: 'rev', from: 'Ташкент', to: 'Токио',
          name: 'Что отправляет Узбекистан',
          items: ['Химическое сырьё', 'Минералы и бентонит', 'Контрактное производство', 'Доступ к рынку Центральной Азии'],
          note: 'Не только поставка: сам масштаб производства и структура затрат, которых в Японии уже нет, и есть причина для партнёрства.',
        },
        {
          code: 'F-03', dir: 'both', from: 'В обе стороны', to: 'Постоянно',
          name: 'Что происходит посередине',
          items: ['Договоры и условия', 'Устный и технический перевод', 'Таможня и происхождение', 'Условия расчётов и валюта'],
          note: 'Стена стоит в одном и том же месте, в какую бы сторону вы ни шли. Именно здесь сосредоточена наша работа.',
        },
      ],
      note: 'Маршруты и условия взяты из фактически заключённых договоров. Контрагенты не называются.',
    },

    work: {
      label: 'Проекты',
      title: 'Три работы',
      lead: 'Мы не публикуем имена клиентов. Показаны характер работы и условия, фактически закреплённые в договоре.',
      cases: [
        {
          no: '01', year: '2026', place: 'Токио / Ташкентская обл.',
          client: 'Узбекский производитель отбеливающей глины (51 сотрудник, ~10 000 т/год)',
          title: 'Мы поставили японские мембранные насосы вместе с запчастями',
          body:
            'Сложность была не в оборудовании, а в том, придёт ли деталь, когда линия встанет. Две единицы и двенадцать позиций запчастей закрепили одним договором, заранее зафиксировав базис поставки, срок приёмки, объём гарантии и применимое право. Мы выступили продавцом и экспортёром, оставив покупателю только растаможку.',
          facts: [
            { k: 'Структура', v: 'Мы выступили продавцом и экспортёром' },
            { k: 'Базис', v: 'CIP аэропорт Ташкент' },
            { k: 'Объём', v: '2 единицы + 12 позиций запчастей' },
            { k: 'Оплата', v: 'T/T в течение 30 дней' },
            { k: 'Право', v: 'Право Японии, арбитраж в Токио' },
          ],
        },
        {
          no: '02', year: '2025 — 2026', place: 'Гумма / Ташкент',
          client: 'Японский переработчик глины ⇄ центральноазиатская химическая группа (2 000+ сотрудников)',
          title: 'Мы довели две компании одного минерала до решаемого вопроса',
          body:
            'Из Японии не было возможности проверить ни масштаб контрагента, ни его завод. Мы проверили на месте структуру группы, карьер, собственный завод и годовой выпуск, свели это в отчёт и передали на японском и английском. Организовали встречу и вели протокол на обоих языках.',
          facts: [
            { k: 'Объект', v: 'Две компании группы (2007 / 2018)' },
            { k: 'Результат', v: 'Отчёт о проверке, JA + EN' },
            { k: 'Выполнено', v: 'Презентация, встреча, протокол' },
            { k: 'Предложение', v: 'Обмен кадрами и сотрудничество по бентониту' },
          ],
        },
        {
          no: '03', year: '2026 —', place: 'Ташкент / Осака',
          client: 'Узбекский оператор доставки',
          title: 'Мы начали с вывода, что готовое решение брать не нужно',
          body:
            'При пофункциональной оценке у обоих местных платформ приложение курьера оказалось ограниченным и без верификации личности, а клиентского приложения не было вовсе. Доработка приближалась по стоимости к собственной разработке, поэтому мы их отклонили и описали требования к трём контурам: курьер, клиент и админ-панель.',
          facts: [
            { k: 'Оценка', v: 'Два продукта сравнены, оба отклонены' },
            { k: 'Проект', v: 'Курьер / клиент / админ-веб' },
            { k: 'MVP', v: '3 месяца' },
            { k: 'Весь объём', v: '10 месяцев' },
          ],
        },
      ],
    },

    founder: {
      label: 'Руководитель',
      title: 'Мост — это человек',
      name: 'Olimov Muhammadolim',
      nameJa: '',
      role: 'Генеральный директор',
      lead:
        'Оба языка и обе деловые культуры в одних руках, без переводчика посередине. Это и есть содержание компании.',
      timeline: [
        { year: '2003', text: 'Родился в Ташкенте, Узбекистан' },
        { year: '2010', text: 'Переехал в Японию; с тех пор учится в Японии' },
        { year: 'Сейчас', text: 'Токийский столичный университет, факультет системного дизайна. Университетский клуб регби' },
        { year: 'Сейчас', text: 'Руководитель японского направления в центральноазиатской химической группе' },
        { year: 'Сейчас', text: 'Судебный переводчик, зарегистрированный в Houterasu (узбекский, русский, английский)' },
      ],
      langs: { label: 'Рабочие языки', items: ['Японский', 'Узбекский', 'Русский', 'Английский'] },
      note: 'Последовательный перевод на переговорах, составление и перевод договора, чтение технической документации — всё делает один человек. При передаче ничего не теряется.',
    },

    trust: {
      label: 'Практика',
      title: 'Устроено так, чтобы не сорвалось',
      lead: 'Торговля ломается примерно в одних и тех же местах. Мы закрываем их на этапе договора.',
      items: [
        { title: 'Право и разрешение споров', body: 'Право Японии и арбитраж в Токио как стандартные условия. Договор составляется параллельно на японском и английском, чтобы обе стороны читали одни и те же формулировки.' },
        { title: 'Базис поставки и налоги', body: 'Цена строится по Incoterms 2020. Момент перехода риска и то, кто несёт налоги страны назначения, прописываются в договоре.' },
        { title: 'Приёмка и гарантия', body: 'Срок предъявления претензий, объём гарантии и исключения фиксируются заранее — расхождений в толковании потом не остаётся.' },
        { title: 'Единый голос', body: 'Переговоры, договор и техническую документацию переводит один и тот же человек. Ничего не теряется при передаче внешнему переводчику.' },
      ],
    },

    contact: {
      label: 'Контакты',
      title: 'Опишите сначала контур задачи',
      lead:
        'Товар и объём — или контрагент, которого нужно проверить. До расчёта мы сразу скажем, сможем ли взяться. Если это не наша область, скажем и об этом.',
      emailLabel: 'Написать нам',
      officeLabel: 'Юридический адрес',
      hoursLabel: 'Часы работы',
      hoursNote: 'Разница между Токио и Ташкентом — четыре часа. Работаем по любому из двух рабочих дней.',
      zones: [
        { city: 'Токио', country: 'Япония', role: 'Юридический адрес', tz: 'UTC+9' },
        { city: 'Ташкент', country: 'Узбекистан', role: 'Основные контрагенты', tz: 'UTC+5' },
      ],
    },

    footer: {
      tagline: 'Брокер знаний между Японией и Узбекистаном',
      note: 'Показанные работы основаны на заключённых договорах и созданных материалах. Контрагенты не называются до получения их согласия.',
      rights: '© 2026 OLIMOV CO., LTD.',
    },
  },
} as const;

export type Dict = (typeof content)['ja'];
export const t = (lang: Lang): Dict => content[lang] as unknown as Dict;
export const addressOf = (lang: Lang) =>
  lang === 'ja' ? company.addressJa : lang === 'ru' ? company.addressRu : company.addressEn;
export const nameOf = (lang: Lang) => (lang === 'ja' ? company.nameJa : company.nameEn);
