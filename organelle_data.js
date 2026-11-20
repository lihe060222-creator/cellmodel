// Comprehensive Organelle Database for Animal Cell and Higher Plant Cell
window.CELL_DATA = {
  cells: {
    animal: {
      id: 'animal',
      name: '动物细胞 (Animal Cell)',
      subtitle: '真核生物 · 无细胞壁 · 具中心体与溶酶体',
      summary: '动物细胞呈近似球形或不规则形态，外被富有弹性的磷脂双分子层细胞膜。无细胞壁、叶绿体与中央大液泡，但具有由两个垂直中心粒构成的中心体（参与有丝分裂纺锤体形成）以及富含酸性水解酶的溶酶体。',
      organelleIds: [
        'plasma_membrane', 'nucleus', 'mitochondrion', 'rough_er', 'smooth_er',
        'golgi', 'ribosome', 'centrosome', 'lysosome', 'peroxisome', 'cytoskeleton'
      ]
    },
    plant: {
      id: 'plant',
      name: '高等植物细胞 (Higher Plant Cell)',
      subtitle: '真核生物 · 具细胞壁、叶绿体、中央大液泡 · 无中心体',
      summary: '高等植物细胞外有纤维素和果胶构成的刚性多面体细胞壁（含胞间连丝），内部有占体积 70%~90% 的中央大液泡及进行光合作用的叶绿体。高等植物细胞不含中心体，细胞质与细胞器常沿大液泡周边分布并发生明显的胞质环流。',
      organelleIds: [
        'cell_wall', 'plasma_membrane', 'chloroplast', 'vacuole', 'nucleus',
        'mitochondrion', 'rough_er', 'smooth_er', 'golgi', 'ribosome', 'peroxisome', 'cytoskeleton'
      ]
    }
  },

  organelles: {
    cell_wall: {
      id: 'cell_wall',
      name: '细胞壁与胞间连丝',
      en: 'Cell Wall & Plasmodesmata',
      category: '高等植物特有结构',
      membrane: '非膜结构（全透性）',
      color: '#4ade80',
      badgeColor: 'rgba(74, 222, 128, 0.2)',
      shortDesc: '纤维素与果胶构成的刚性多面体外壳，含贯穿壁的胞间连丝通道。',
      structure: [
        '【初生壁与胞间层】主要由纤维素微纤丝（Cellulose microfibrils）、半纤维素和果胶交织成网状刚性框架。',
        '【多面体几何形态】赋予高等植物细胞规则的六棱柱/多面体外观，防止细胞吸水涨破。',
        '【胞间连丝 (Plasmodesmata)】贯穿相邻植物细胞壁的管状通道，内有连丝微管，实现细胞间物质运输与信息交流。'
      ],
      functions: [
        '支持与保护：维持植物细胞多面体形态，赋予植物体机械强度。',
        '配合大液泡维持膨压（Turgor Pressure），使植物茎叶保持挺立。',
        '胞间连丝负责相邻植物细胞间水、小分子代谢物及信号分子的共质体运输。'
      ],
      subparts: ['纤维素微纤丝层', '果胶胞间层', '胞间连丝孔道']
    },

    plasma_membrane: {
      id: 'plasma_membrane',
      name: '细胞膜 (质膜)',
      en: 'Plasma Membrane',
      category: '动植物共有',
      membrane: '单层膜（磷脂双分子层）',
      color: '#38bdf8',
      badgeColor: 'rgba(56, 189, 248, 0.2)',
      shortDesc: '流动镶嵌模型构成的细胞边界，具有选择透过性。',
      structure: [
        '【磷脂双分子层】亲水头部朝向内外水相，疏水尾部相对排列构成基本支架。',
        '【膜蛋白】镶嵌、贯穿或附着于脂双层（通道蛋白、载体蛋白、受体蛋白）。',
        '【糖被 (Glycocalyx)】外表面糖蛋白与糖脂构成的糖链，参与细胞识别与免疫反应（动物细胞外表面尤为明显）。'
      ],
      functions: [
        '将细胞与外界环境分隔开，保障细胞内部环境的相对稳定。',
        '控制物质进出细胞：自由扩散、协助扩散、主动运输及胞吞/胞吐。',
        '进行细胞间的信息交流（激素受体识别、膜接触或胞间连丝）。'
      ],
      subparts: ['磷脂双分子层', '跨膜通道蛋白', '外表面糖蛋白']
    },

    nucleus: {
      id: 'nucleus',
      name: '细胞核',
      en: 'Nucleus (Nuclear Envelope, Nucleolus, Chromatin)',
      category: '动植物共有',
      membrane: '双层膜（具核孔复合体）',
      color: '#a855f7',
      badgeColor: 'rgba(168, 85, 247, 0.2)',
      shortDesc: '遗传信息库，细胞代谢和遗传的控制中心。',
      structure: [
        '【双层核膜 (Nuclear Envelope)】外膜与粗面内质网直接相连，把核内物质与细胞质分开。',
        '【核孔 (Nuclear Pores)】由蛋白质构成的复杂八角对称通道，实现核质之间频繁的物质交换（RNA、蛋白质）和信息交流。',
        '【核仁 (Nucleolus)】核内球形显著致密结构，与某种 RNA (rRNA) 的合成以及核糖体亚基的组装密切相关。',
        '【染色质 (Chromatin)】由 DNA 和组蛋白构成的丝状结构，分裂期高度螺旋化缩短变粗成为染色体。'
      ],
      functions: [
        '细胞内遗传物质（DNA）储存、复制和转录的主要场所（遗传信息库）。',
        '通过转录产生 mRNA 指导蛋白质合成，是细胞代谢和遗传的控制中心。',
        '核仁负责 rRNA 转录及核糖体大小亚基的前体组装。'
      ],
      subparts: ['双层核膜', '核孔复合体', '核仁 (Nucleolus)', '染色质丝 (Chromatin)']
    },

    mitochondrion: {
      id: 'mitochondrion',
      name: '线粒体',
      en: 'Mitochondrion',
      category: '动植物共有',
      membrane: '双层膜（半自主性细胞器）',
      color: '#f97316',
      badgeColor: 'rgba(249, 115, 22, 0.2)',
      shortDesc: '有氧呼吸的主要场所，细胞的“动力车间”。',
      structure: [
        '【外膜】平整光滑，含孔蛋白，通透性较高，界定线粒体边界。',
        '【内膜与嵴 (Cristae)】内膜向内腔折叠形成大量片状或管状的“嵴”，极大地扩展了有氧呼吸第三阶段酶系与 ATP 合成酶的附着面积。',
        '【线粒体基质 (Matrix)】内腔液态胶状基质，含有三羧酸循环（柠檬酸循环）相关酶类、少量环状 DNA、RNA 及 70S 核糖体。'
      ],
      functions: [
        '有氧呼吸第二阶段（线粒体基质）与第三阶段（线粒体内膜嵴）的场所。',
        '通过氧化磷酸化产生细胞生命活动所需的约 95% 的 ATP（能量通货）。',
        '半自主性细胞器：含自身环状 DNA 与核糖体，能自主合成部分呼吸链蛋白。'
      ],
      subparts: ['光滑外膜', '向内折叠的内膜嵴 (Cristae)', '线粒体基质与环状DNA', 'ATP合成酶复合体']
    },

    chloroplast: {
      id: 'chloroplast',
      name: '叶绿体',
      en: 'Chloroplast',
      category: '高等植物特有（绿色细胞）',
      membrane: '双层膜（半自主性细胞器）',
      color: '#10b981',
      badgeColor: 'rgba(16, 185, 129, 0.2)',
      shortDesc: '植物光合作用的场所，“养料制造工厂”和“能量转换站”。',
      structure: [
        '【双层被膜】外膜和内膜均平滑透明，无折叠，控制代谢物进出。',
        '【类囊体与基粒 (Thylakoid & Grana)】内部由扁平圆饼状囊泡（类囊体）叠生形成圆柱状“基粒”，类囊体薄膜上分布着叶绿素、类胡萝卜素及光反应电子传递链。',
        '【基质片层 (Stroma Lamellae)】连接不同基粒的膜通道，维持类囊体腔连通。',
        '【叶绿体基质 (Stroma)】含暗反应（卡尔文循环）酶系（如 Rubisco）、环状 DNA、核糖体及淀粉粒。'
      ],
      functions: [
        '光反应（类囊体薄膜）：吸收光能裂解水释放 O₂，合成 ATP 与 NADPH。',
        '暗反应/卡尔文循环（叶绿体基质）：利用 ATP 和 NADPH 固定还原 CO₂，合成糖类等有机物。',
        '将光能转化为活跃化学能，再转化为储存在有机物中的稳定化学能。'
      ],
      subparts: ['双层透明被膜', '类囊体叠生基粒 (Grana)', '基质连接片层', '叶绿体基质 (Stroma)']
    },

    vacuole: {
      id: 'vacuole',
      name: '中央大液泡',
      en: 'Central Vacuole',
      category: '成熟高等植物细胞特有',
      membrane: '单层膜（液泡膜 Tonoplast）',
      color: '#06b6d4',
      badgeColor: 'rgba(6, 182, 212, 0.2)',
      shortDesc: '储存细胞液、调节渗透压并维持植物细胞坚挺的巨大囊泡。',
      structure: [
        '【液泡膜 (Tonoplast)】单层选择透过性生物膜，含水通道蛋白与质子泵（H⁺-ATPase）。',
        '【细胞液 (Cell Sap)】腔内充满水、无机盐、有机酸、糖类、氨基酸、生物碱以及花青素等水溶性色素。',
        '【高体积占比】在成熟高等植物细胞中可占据细胞体积的 70%~90%，将细胞质及细胞器挤向细胞周缘，形成贴壁环流的细胞质层。'
      ],
      functions: [
        '调节植物细胞内的环境，维持渗透压平衡（吸水与失水的主要场所）。',
        '充盈的液泡与细胞壁共同产生膨压，使植物细胞保持坚挺（防止萎蔫）。',
        '储存营养物质与花青素（赋予花、果实颜色），并降解部分大分子废物。'
      ],
      subparts: ['单层液泡膜 (Tonoplast)', '高渗细胞液腔', '水通道与离子转运蛋白']
    },

    rough_er: {
      id: 'rough_er',
      name: '粗面内质网',
      en: 'Rough Endoplasmic Reticulum (RER)',
      category: '动植物共有',
      membrane: '单层膜（扁平囊状网架）',
      color: '#ec4899',
      badgeColor: 'rgba(236, 72, 153, 0.2)',
      shortDesc: '表面附着大量核糖体的扁平膜囊，蛋白质合成与初步加工车间。',
      structure: [
        '【连续扁平囊腔 (Cisternae)】由单层膜围成的互相连通的扁平囊状结构，内与核膜外层直接相连。',
        '【附着核糖体】外表面密布正在翻译多肽链的核糖体颗粒，呈现“粗糙”外观。',
        '【出芽过渡区】边缘可出芽形成 COPII 运输囊泡，将加工后的蛋白质送往高尔基体。'
      ],
      functions: [
        '分泌蛋白、膜蛋白及溶酶体/液泡水解酶的合成与转运通道。',
        '对新生多肽链进行空间折叠、二硫键形成及初步糖基化修饰。',
        '合成磷脂等膜脂成分，是细胞内生物膜系统面积最大的膜结构。'
      ],
      subparts: ['扁平膜囊腔 (Cisternae)', '表面附着核糖体', '核膜连接处与出芽囊泡']
    },

    smooth_er: {
      id: 'smooth_er',
      name: '光面内质网',
      en: 'Smooth Endoplasmic Reticulum (SER)',
      category: '动植物共有',
      membrane: '单层膜（分支管状网络）',
      color: '#f472b6',
      badgeColor: 'rgba(244, 114, 182, 0.2)',
      shortDesc: '无核糖体附着的分支小管网络，脂质合成与解毒车间。',
      structure: [
        '【光滑分支小管】由分支状、相互吻合的管状单层膜组成，与粗面内质网腔相通。',
        '【无核糖体附着】膜表面光滑，富含脂质合成酶系、细胞色素 P450 解毒酶系及钙离子泵。'
      ],
      functions: [
        '脂质合成车间：合成磷脂、胆固醇、固醇类激素（如性激素）及植物蜡质前体。',
        '参与糖原代谢、药物与毒物的氧化解毒（在肝脏细胞中尤为发达）。',
        '储存与调节细胞内钙离子（Ca²⁺）浓度。'
      ],
      subparts: ['光滑分支膜管', '脂质合成酶复合体', '管腔钙离子库']
    },

    golgi: {
      id: 'golgi',
      name: '高尔基体',
      en: 'Golgi Apparatus',
      category: '动植物共有',
      membrane: '单层膜（扁平囊堆叠 + 囊泡）',
      color: '#eab308',
      badgeColor: 'rgba(234, 179, 8, 0.2)',
      shortDesc: '蛋白质加工、分类、包装和发送的“枢纽站”，参与植物细胞壁合成。',
      structure: [
        '【极性扁平囊堆叠】由 4~8 层弓形扁平膜囊（Cisternae）堆叠而成，分为顺面（cis-面，朝向内质网接收囊泡）和反面（trans-面，朝向质膜发送囊泡）。',
        '【周围运输囊泡】边缘不断融合来自内质网的囊泡，并出芽产生分泌囊泡或溶酶体前体囊泡。'
      ],
      functions: [
        '对来自内质网的蛋白质进行进一步修饰（成熟糖基化、蛋白酶切）、分类和包装。',
        '动物细胞中：与细胞分泌物（激素、消化酶、抗体）的胞吐及溶酶体形成有关。',
        '高等植物细胞中：合成非纤维素多糖（果胶、半纤维素），在有丝分裂末期聚集形成细胞板，直接参与新细胞壁的构建。'
      ],
      subparts: ['顺面接收囊 (cis-Golgi)', '中间加工扁平囊', '反面管网与分泌囊泡 (trans-Golgi)']
    },

    ribosome: {
      id: 'ribosome',
      name: '核糖体',
      en: 'Ribosomes (80S)',
      category: '动植物共有（原核亦具70S）',
      membrane: '无膜细胞器',
      color: '#fb7185',
      badgeColor: 'rgba(251, 113, 133, 0.2)',
      shortDesc: '由 rRNA 和蛋白质构成的大小亚基颗粒，“生产蛋白质的机器”。',
      structure: [
        '【大亚基与小亚基】由 60S 大亚基与 40S 小亚基结合成 80S 核糖体，主要成分为 rRNA 和数十种核糖体蛋白，无生物膜包被。',
        '【两类分布状态】游离核糖体（散布于细胞质基质中）与附着核糖体（附着在粗面内质网及核膜外表面）。'
      ],
      functions: [
        '将 mRNA 上的遗传密码翻译（Translation）为氨基酸序列，催化肽键形成合成多肽链。',
        '游离核糖体主要合成细胞自身内部使用的胞质蛋白、细胞骨架蛋白及线粒体/叶绿体导入蛋白。',
        '附着核糖体主要合成分泌蛋白、膜蛋白及溶酶体/液泡内的水解酶。'
      ],
      subparts: ['60S 大亚基', '40S 小亚基', 'mRNA 结合沟槽与肽酰转移中心']
    },

    centrosome: {
      id: 'centrosome',
      name: '中心体',
      en: 'Centrosome (Pair of Centrioles)',
      category: '动物细胞与低等植物特有（高等植物无）',
      membrane: '无膜细胞器',
      color: '#22d3ee',
      badgeColor: 'rgba(34, 211, 238, 0.2)',
      shortDesc: '由两个互相垂直排列的中心粒及周围物质组成，细胞分裂的微管组织中心。',
      structure: [
        '【垂直双中心粒】包含两个互相垂直呈“L”形排列的圆筒状中心粒（Centrioles）。',
        '【9×3 三联微管结构】每个中心粒由 9 组三联体微管（9 sets of microtubule triplets）呈轮辐状围成空心圆柱。',
        '【中心粒周围物质 (PCM)】外围云雾状蛋白质基质，富含 γ-微管蛋白环复合体，负责成核并发射星射线。'
      ],
      functions: [
        '细胞内主要的微管组织中心（MTOC），调控间期微管细胞骨架的极性辐射。',
        '在动物细胞有丝分裂/减数分裂间期倍增，前期移向细胞两极并发出星射线形成纺锤体，牵引染色体均分。'
      ],
      subparts: ['母中心粒 (9组三联微管)', '子中心粒 (垂直排列)', '中心粒周围基质与星射线']
    },

    lysosome: {
      id: 'lysosome',
      name: '溶酶体',
      en: 'Lysosome',
      category: '主要存在于动物细胞',
      membrane: '单层膜囊泡',
      color: '#ef4444',
      badgeColor: 'rgba(239, 68, 68, 0.2)',
      shortDesc: '内含 60 余种酸性水解酶的“消化车间”，负责自噬与异噬。',
      structure: [
        '【耐酸单层膜】膜上嵌有质子泵（V-型 H⁺-ATPase）维持腔内 pH ≈ 4.5~5.0 的酸性环境，内侧高度糖基化以防止自身膜被消化。',
        '【酸性水解酶颗粒】内部含有蛋白酶、核酸酶、脂酶、糖苷酶等数十种水解酶颗粒。'
      ],
      functions: [
        '细胞自噬（Autophagy）：分解衰老、损伤的细胞器（如受损线粒体），实现细胞结构更新与物质回收。',
        '细胞异噬（Phagocytosis）：吞噬并杀死侵入细胞的病毒或病菌（在白细胞/巨噬细胞中尤为丰富）。'
      ],
      subparts: ['高度糖基化单层膜', '质子泵 (H⁺-ATPase)', '酸性水解酶酶簇']
    },

    peroxisome: {
      id: 'peroxisome',
      name: '过氧化物酶体',
      en: 'Peroxisome',
      category: '动植物共有',
      membrane: '单层膜微体',
      color: '#818cf8',
      badgeColor: 'rgba(129, 140, 248, 0.2)',
      shortDesc: '含过氧化氢酶与氧化酶的单层膜囊泡，解毒与脂肪酸氧化微体。',
      structure: [
        '【单层膜球状微体】直径约 0.2~1.0 μm 的球形囊泡，常含高电子密度的尿酸氧化酶或过氧化氢酶结晶核（类核体）。'
      ],
      functions: [
        '利用分子氧氧化底物生成过氧化氢（H₂O₂），再由过氧化氢酶（Catalase）将剧毒的 H₂O₂ 分解为水（H₂O）和氧气（O₂），保护细胞免受活性氧损伤。',
        '动物细胞中参与极长链脂肪酸的 β-氧化；高等植物叶片中与叶绿体、线粒体协同完成光呼吸（Photorespiration）乙醇酸途径。'
      ],
      subparts: ['单层微体生物膜', '过氧化氢酶结晶核 (Crystalloid Core)']
    },

    cytoskeleton: {
      id: 'cytoskeleton',
      name: '细胞骨架与细胞质基质',
      en: 'Cytoskeleton & Cytosol',
      category: '动植物共有',
      membrane: '无膜蛋白质纤维网架',
      color: '#94a3b8',
      badgeColor: 'rgba(148, 163, 184, 0.2)',
      shortDesc: '微管、微丝与中间丝交织的三维网架，驱动胞质环流与细胞器运输。',
      structure: [
        '【微管 (Microtubules)】由 α/β 微管蛋白异二聚体组装成的中空管状纤维（直径 ~25 nm），刚性最强，作为驱动蛋白（Kinesin/Dynein）运输囊泡的“高速公路”。',
        '【微丝 (Microfilaments)】由肌动蛋白（Actin）组成的双股螺旋纤维（直径 ~7 nm），配合肌球蛋白（Myosin）直接驱动植物与动物细胞的胞质环流。',
        '【细胞质基质 (Cytosol)】呈胶质状态的液态环境，富含水、无机盐、氨基酸、核苷酸及糖酵解等多种代谢酶系。'
      ],
      functions: [
        '维持细胞形态，锚定并支撑各种细胞器在三维空间中的有序排布。',
        '与马达蛋白配合，驱动胞质环流（Cytoplasmic Streaming）、囊泡运输、细胞运动及细胞分裂。',
        '细胞质基质是糖酵解（细胞呼吸第一阶段）、氨基酸活化等多种重要代谢反应的场所。'
      ],
      subparts: ['微管轨道 (Microtubules)', '肌动蛋白微丝束 (Actin Filaments)', '胶状细胞质基质 (Cytosol)']
    }
  },

  animations: {
    none: {
      id: 'none',
      name: '自由观察模式',
      en: 'Free Inspection Mode',
      icon: '🔍',
      supportedCells: ['animal', 'plant'],
      formula: '拖拽旋转 · 滚轮缩放 · 点击任意细胞器查看内部超微结构',
      description: '自由探索动物细胞与高等植物细胞的三维空间排布与半剖超微结构。细胞器保持温和的生理微动。',
      steps: []
    },
    streaming: {
      id: 'streaming',
      name: '胞质环流 (Cytoplasmic Streaming)',
      en: 'Actin-Myosin Driven Cyclosis',
      icon: '🌀',
      supportedCells: ['plant', 'animal'],
      formula: 'ATP → ADP + Pi + 机械能（肌动蛋白微丝 + 肌球蛋白马达驱动细胞质与叶绿体/线粒体定向环流）',
      description: '在活细胞（尤其是具中央大液泡的高等植物细胞）中，细胞质基质携带着叶绿体、线粒体及囊泡沿细胞骨架微丝束围绕中央液泡或细胞核作持续定向环向流动。',
      steps: [
        {
          title: '① 细胞骨架微丝轨道建立',
          detail: '肌动蛋白微丝（Actin microfilaments）沿中央大液泡外周及贴近细胞膜处排布成连续环状轨道。',
          focusOrganelles: ['cytoskeleton', 'vacuole']
        },
        {
          title: '② 马达蛋白水解 ATP 产生牵引力',
          detail: '线粒体输出的 ATP 被肌球蛋白（Myosin XI）水解，马达蛋白拖拽内质网与细胞器沿微丝定向滑动，并带动周围细胞质基质产生流体剪切流。',
          focusOrganelles: ['mitochondrion', 'cytoskeleton']
        },
        {
          title: '③ 叶绿体与线粒体协同环流加速物质交换',
          detail: '叶绿体、线粒体及过氧化物酶体随胞质流持续巡游，使光照接收更均匀，并极大加速细胞内 O₂、CO₂、ATP 及代谢物在各细胞器间的运输效率。',
          focusOrganelles: ['chloroplast', 'mitochondrion', 'vacuole']
        }
      ]
    },
    photosynthesis: {
      id: 'photosynthesis',
      name: '光合作用 (Photosynthesis)',
      en: 'Light Reactions & Calvin Cycle in Chloroplast',
      icon: '☀️',
      supportedCells: ['plant'],
      formula: '6CO₂ + 12H₂O  ──(光能 / 叶绿体)──▶  C₆H₁₂O₆ + 6O₂↑ + 6H₂O',
      description: '在高等植物细胞的叶绿体中进行：类囊体基粒薄膜吸收光能裂解水释放 O₂ 并合成 ATP/NADPH（光反应）；叶绿体基质利用 ATP/NADPH 将 CO₂ 固定并还原为葡萄糖（暗反应/卡尔文循环）。',
      steps: [
        {
          title: '① 光能捕获与水的光解（类囊体基粒薄膜）',
          detail: '光子 (hν) 照射叶绿体基粒（Grana）类囊体膜上的叶绿素，激发电子传递；2H₂O 裂解产生 O₂（经细胞膜与细胞壁向外释放）和 H⁺。',
          focusOrganelles: ['chloroplast']
        },
        {
          title: '② ATP 与 NADPH 合成并跨膜输入基质',
          detail: '光反应电子传递链与类囊体膜 ATP 合成酶将光能转化为活跃化学能，生成高能分子 ATP（金色）与还原型辅酶 II — NADPH（紫蓝色），涌入叶绿体基质。',
          focusOrganelles: ['chloroplast']
        },
        {
          title: '③ 卡尔文循环：CO₂ 固定与三碳糖合成（叶绿体基质）',
          detail: '外界 CO₂ 穿过细胞壁与质膜进入叶绿体基质，与 C₅ 结合生成 2分子 C₃，随后在 ATP 和 NADPH 驱动下还原生成葡萄糖（C₆H₁₂O₆）并再生 C₅，有机物输出至细胞质供全细胞利用。',
          focusOrganelles: ['chloroplast', 'cell_wall', 'mitochondrion']
        }
      ]
    },
    respiration: {
      id: 'respiration',
      name: '有氧呼吸作用 (Cellular Respiration)',
      en: 'Glycolysis, TCA Cycle & Oxidative Phosphorylation',
      icon: '⚡',
      supportedCells: ['animal', 'plant'],
      formula: 'C₆H₁₂O₆ + 6O₂ + 6H₂O  ──(细胞质基质 + 线粒体)──▶  6CO₂↑ + 12H₂O + 大量能量 (30~32 ATP)',
      description: '动植物细胞共有的核心能量代谢：第一阶段在细胞质基质将葡萄糖分解为丙酮酸；第二阶段在线粒体基质进行三羧酸循环释放 CO₂；第三阶段在线粒体内膜嵴上将 [H] 与 O₂ 结合生成水并爆发式合成大量 ATP。',
      steps: [
        {
          title: '① 第一阶段：糖酵解（细胞质基质）',
          detail: '1分子葡萄糖（C₆H₁₂O₆）在细胞质基质中分解为 2分子丙酮酸（Pyruvate，C₃H₄O₃），产生少量 [H]（NADH）和少量 ATP（2 ATP），随后丙酮酸跨双层膜进入线粒体。',
          focusOrganelles: ['cytoskeleton', 'mitochondrion']
        },
        {
          title: '② 第二阶段：柠檬酸循环 / 三羧酸循环（线粒体基质）',
          detail: '丙酮酸与水（H₂O）在线粒体基质中彻底分解，释放出 CO₂（扩散出细胞），同时产生大量还原型辅酶 NADH / FADH₂（[H]）与少量 ATP。',
          focusOrganelles: ['mitochondrion']
        },
        {
          title: '③ 第三阶段：电子传递链与氧化磷酸化（线粒体内膜嵴）',
          detail: '前两阶段产生的 24[H] 聚集到向内折叠的线粒体内膜“嵴”（Cristae）上，与吸入的 O₂ 结合生成 H₂O，驱动 ATP 合成酶释放海量金色 ATP 分子，供给全细胞生命活动！',
          focusOrganelles: ['mitochondrion', 'nucleus', 'rough_er']
        }
      ]
    },
    secretion: {
      id: 'secretion',
      name: '分泌蛋白合成与囊泡运输',
      en: 'Secretory Pathway & Biomembrane System',
      icon: '📦',
      supportedCells: ['animal', 'plant'],
      formula: '核糖体 (翻译) → 粗面内质网 (折叠/初加工) → COPII囊泡 → 高尔基体 (修饰/分选) → 分泌囊泡 → 细胞膜胞吐 (线粒体供能)',
      description: '展示细胞内生物膜系统在结构与功能上的紧密联系：核仁指导核糖体生成，附着核糖体合成多肽链进入粗面内质网，经囊泡接力运输至高尔基体成熟包装，最终融合于细胞膜分泌到胞外。',
      steps: [
        {
          title: '① 细胞核转录 mRNA 与附着核糖体翻译',
          detail: '细胞核转录的 mRNA 经核孔进入细胞质，粗面内质网表面附着的核糖体将其翻译为多肽链并直接穿入内质网腔进行空间折叠与初糖基化。',
          focusOrganelles: ['nucleus', 'ribosome', 'rough_er']
        },
        {
          title: '② 内质网出芽囊泡 → 高尔基体顺面接收与加工',
          detail: '粗面内质网边缘出芽形成运输囊泡，沿微管轨道移动并与高尔基体顺面（cis-面）融合，蛋白质在扁平囊堆叠中逐层完成成熟修饰与分类包装。',
          focusOrganelles: ['rough_er', 'golgi']
        },
        {
          title: '③ 高尔基体反面出芽 → 质膜融合胞吐（线粒体全程供能）',
          detail: '高尔基体反面（trans-面）排出成熟的分泌囊泡，精准运往细胞膜并发生膜融合（胞吐作用），将分泌蛋白（或植物细胞壁多糖）释放到细胞外；线粒体全程提供 ATP。',
          focusOrganelles: ['golgi', 'plasma_membrane', 'mitochondrion']
        }
      ]
    }
  }
};
