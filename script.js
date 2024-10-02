// script.js
const quizForm = document.getElementById('quiz-form');
const resultsContainer = document.getElementById('results');
const scoreContainer = document.getElementById('score');
const justificationsContainer = document.getElementById('justifications');

const correctAnswers = {
  q1: 'a',
  q2: 'a',
  q3: 'd',
  q4: 'a',
  q5: 'a',
  q6: 'a',
  q7: 'e',
  q8: 'e',
  q9: 'd',
  q10: 'e',
  q11: 'd',
  q12: 'b',
  q13: 'd',
  q14: 'a',
  q15: 'e',
  q16: 'e',
  q17: 'e',
  q18: 'c',
  q19: 'c',
  q20: 'c'
};

const justifications = {
  q1: {
    a: "Correto! A redução na ingestão de água aumenta a osmolaridade do sangue, o que estimula a liberação de ADH, que aumenta a reabsorção de água nos rins, diluindo o sangue e diminuindo a osmolaridade.",
    b: "Incorreto. O ADH atua aumentando a reabsorção de água, não diminuindo.",
    c: "Incorreto. O aumento na ingestão de água diminui a osmolaridade do sangue.",
    d: "Incorreto. O aumento na ingestão de água diminui a osmolaridade do sangue, o que inibe a liberação de ADH.",
    e: "Incorreto. O aumento na ingestão de água diminui a osmolaridade do sangue."
  },
  q2: {
    a: "Correto! A gastrina, produzida no estômago, é estimulada tanto por estímulos nervosos (olfato, visão, paladar) quanto pela presença de alimento no estômago. Ela estimula a secreção de suco gástrico.",
    b: "Incorreto. A secretina é produzida no duodeno e estimula a secreção de bicarbonato pelo pâncreas.",
    c: "Incorreto. A colecistoquinina é produzida no duodeno e estimula a liberação de bile pela vesícula biliar e a secreção de enzimas pancreáticas.",
    d: "Incorreto. A secretina e a colecistoquinina atuam diminuindo a motilidade gástrica, não aumentando.",
    e: "Incorreto. O pepsinogênio é um precursor inativo da pepsina, uma enzima digestiva que atua no estômago."
  },
  q3: {
    a: "Incorreto. A afirmativa IV está incorreta, pois a angiotensina II estimula a liberação de aldosterona, não de hormônio antidiurético.",
    b: "Incorreto. A afirmativa II e V estão faltando.",
    c: "Incorreto. A afirmativa I está incorreta, pois a renina não estimula a produção de células sanguíneas.",
    d: "Correto! As afirmativas I, II, III e V estão corretas. O sistema renina-angiotensina-aldosterona é um mecanismo hormonal complexo que regula a pressão arterial e o equilíbrio de fluidos e eletrólitos.",
    e: "Incorreto. A afirmativa III está faltando."
  },
  q4: {
    a: "Correto! O sistema tampão bicarbonato é o principal tampão do sangue. O CO2 se combina com a água formando ácido carbônico, que se dissocia em bicarbonato e H+. A hemácia transporta o H+ ligado à hemoglobina.",
    b: "Incorreto. O CO2 é transportado principalmente como bicarbonato no sangue venoso.",
    c: "Incorreto. O oxigênio se liga à hemoglobina, liberando o H+.",
    d: "Incorreto. O sistema tampão bicarbonato é o principal tampão do sangue.",
    e: "Incorreto. O pH sanguíneo normal em animais varia entre 7,35 e 7,45."
  },
  q5: {
    a: "Correto! Esses três processos são fundamentais para a formação da urina: filtração do sangue no glomérulo, reabsorção de substâncias úteis nos túbulos renais e secreção de substâncias indesejáveis nos túbulos renais.",
    b: "Incorreto. O sangue chega ao glomérulo pela arteríola aferente, e sai pela arteríola eferente.",
    c: "Incorreto. A bexiga urinária armazena a urina, mas não a produz.",
    d: "Incorreto. A uretra feminina é mais curta, mas isso não a torna necessariamente mais suscetível a infecções.",
    e: "Incorreto. A aldosterona é produzida pelas glândulas adrenais, não pelos rins."
  },
  q6: {
    a: "Correto! O túbulo contorcido proximal é o principal local de reabsorção de água, glicose, aminoácidos e íons.",
    b: "Incorreto. A seta número 1 geralmente indica a arteríola aferente, que leva sangue para o glomérulo.",
    c: "Incorreto. A absorção de água e outras substâncias ocorre principalmente no túbulo contorcido proximal.",
    d: "Incorreto. A seta número 4 geralmente indica a cápsula de Bowman, que envolve o glomérulo.",
    e: "Incorreto. A alça de Henle é responsável pela reabsorção de água e concentração da urina, mas não é o principal local de reabsorção."
  },
  q7: {
    a: "Incorreto. A aldosterona atua nos rins para aumentar a reabsorção de sódio e a excreção de potássio.",
    b: "Incorreto. A renina é uma enzima que participa do sistema renina-angiotensina-aldosterona, mas não atua diretamente nos rins para regular a diurese.",
    c: "Incorreto. A angiotensina II é um potente vasoconstritor e estimula a liberação de aldosterona.",
    d: "Incorreto. A ocitocina atua no útero e nas glândulas mamárias.",
    e: "Correto! A vasopressina, também conhecida como hormônio antidiurético (ADH), é produzida pelo hipotálamo e armazenada na neuro-hipófise. Ela atua nos rins para aumentar a reabsorção de água, reduzindo a produção de urina."
  },
  q8: {
    a: "Incorreto. A gastrina estimula a motilidade gástrica, e o pepsinogênio é um precursor da pepsina, uma enzima digestiva.",
    b: "Incorreto. A insulina e o glucagon são hormônios pancreáticos que regulam o metabolismo da glicose, não a motilidade gástrica.",
    c: "Incorreto. A secretina inibe a motilidade gástrica, mas a pepsina é uma enzima digestiva.",
    d: "Incorreto. A colecistoquinina inibe a motilidade gástrica, mas a gastrina a estimula.",
    e: "Correto! A secretina e a colecistoquinina são produzidas no duodeno em resposta à presença de quimo ácido e gorduras, respectivamente, e atuam inibindo a motilidade gástrica."
  },
  q9: {
    a: "Incorreto. A Cápsula de Bowman coleta o filtrado glomerular.",
    b: "Incorreto. O glomérulo é responsável pela filtração do sangue.",
    c: "Incorreto. A alça de Henle participa da concentração da urina.",
    d: "Correto! Os túbulos renais são responsáveis pela reabsorção de água e outras substâncias do filtrado glomerular de volta para a corrente sanguínea.",
    e: "Incorreto. A uretra é o canal que conduz a urina da bexiga para o exterior do corpo."
  },
  q10: {
    a: "Correto. Os hormônios T3 e T4, produzidos pela tireoide, são essenciais para o metabolismo, crescimento e desenvolvimento.",
    b: "Correto. O TSH, produzido pela adeno-hipófise, estimula a tireoide a produzir T3 e T4.",
    c: "Correto. O hipotireoidismo é caracterizado pela produção insuficiente de hormônios tireoidianos.",
    d: "Correto. O hipertireoidismo é caracterizado pela produção excessiva de hormônios tireoidianos.",
    e: "Incorreto. A superprodução dos hormônios da tireoide causa hipertireoidismo, enquanto a subprodução causa hipotireoidismo."
  },
  q11: {
    a: "Incorreto. A ovulação ocorre geralmente no meio do ciclo estral, não no início.",
    b: "Incorreto. A ovulação é induzida pelo pico de LH, não pela progesterona.",
    c: "Incorreto. As fêmeas nascem com folículos primordiais, que são folículos imaturos que podem se desenvolver após a puberdade.",
    d: "Correto! O pico de LH (hormônio luteinizante) estimula a produção de enzimas que degradam a parede do folículo ovariano, permitindo a liberação do óvulo maduro.",
    e: "Incorreto. O corpo lúteo secreta progesterona, não estrogênio."
  },
  q12: {
    a: "Incorreto. As funções estão invertidas.",
    b: "Correto! O FSH estimula o desenvolvimento dos folículos ovarianos, que produzem estrogênio. O LH induz a ovulação e a formação do corpo lúteo.",
    c: "Incorreto. O LH estimula a produção de progesterona pelo corpo lúteo.",
    d: "Incorreto. O FSH e o LH estimulam a produção de estrogênio pelos folículos ovarianos.",
    e: "Incorreto. O FSH e o LH atuam nos ovários, não diretamente no desenvolvimento das características sexuais secundárias."
  },
  q13: {
    a: "Incorreto. O GH é produzido pela adeno-hipófise.",
    b: "Incorreto. O TSH é produzido pela adeno-hipófise.",
    c: "Incorreto. O ACTH é produzido pela adeno-hipófise.",
    d: "Correto! A ocitocina e o ADH (hormônio antidiurético) são produzidos pelo hipotálamo e armazenados na neuro-hipófise. A ocitocina estimula a contração do útero durante o parto e a ejeção do leite durante a amamentação.",
    e: "Incorreto. A prolactina é produzida pela adeno-hipófise."
  },
  q14: {
    a: "Correto! Os hormônios podem agir de diferentes maneiras: endócrina (à distância), parácrina (células vizinhas), autócrina (na própria célula) e intrácrina (dentro da própria célula).",
    b: "Incorreto. Hormônios também podem ser produzidos por células e tecidos que não são glândulas endócrinas clássicas.",
    c: "Incorreto. Os hormônios podem ser de natureza proteica, peptídica, esteroide ou derivada de aminoácidos.",
    d: "Incorreto. Os hormônios esteroides atuam ligando-se a receptores intracelulares, não na superfície da célula.",
    e: "Incorreto. As definições de feedback positivo e negativo estão invertidas."
  },
  q15: {
    a: "Correto. A digestão mecânica é importante para a quebra física dos alimentos.",
    b: "Correto. A digestão química envolve a quebra de moléculas complexas em moléculas menores pela ação de enzimas.",
    c: "Correto. O suco gástrico contém ácido clorídrico, que ajuda a desnaturar as proteínas, e enzimas como a pepsina, que inicia a digestão proteica.",
    d: "Correto. A bile emulsifica as gorduras, facilitando a ação das lipases.",
    e: "Incorreto. O duodeno precisa se tornar alcalino (básico) para a ação das enzimas pancreáticas, que funcionam melhor em pH alcalino."
  },
  q16: {
    a: "Incorreto. A temperatura ruminal ideal é mais alta, em torno de 39°C.",
    b: "Incorreto. O pH ruminal ideal é próximo do neutro, em torno de 6,5.",
    c: "Incorreto. A maioria dos microrganismos do rúmen são anaeróbicos, ou seja, não precisam de oxigênio.",
    d: "Incorreto. A osmolaridade do rúmen deve ser próxima à do sangue, para evitar desequilíbrios osmóticos.",
    e: "Correto! A manutenção do ambiente ruminal ideal é crucial para a fermentação microbiana eficiente, incluindo pH, temperatura, umidade, condições de oxirredução e osmolaridade."
  },
  q17: {
    a: "Incorreto. Os AGVs são absorvidos pelo rúmen, mas são metabolizados por outros tecidos.",
    b: "Incorreto. O propionato pode ser convertido em glicose pelo fígado, mas o acetato e o butirato não.",
    c: "Incorreto. Os AGVs não são excretados na urina em quantidades significativas.",
    d: "Incorreto. Os AGVs são utilizados pelos microrganismos do rúmen como fonte de energia, mas não para a síntese de proteínas.",
    e: "Correto! O acetato é utilizado principalmente na síntese de gordura, o butirato é convertido em acetato ou utilizado pelos tecidos do rúmen, e o propionato é utilizado na produção de energia (gliconeogênese) no fígado."
  },
  q18: {
    a: "Incorreto. A moela tritura os alimentos.",
    b: "Incorreto. O proventrículo secreta enzimas digestivas.",
    c: "Correto! O papo é uma dilatação do esôfago que serve para armazenar alimento temporariamente.",
    d: "Incorreto. O intestino grosso absorve água e eletrólitos.",
    e: "Incorreto. A cloaca é a abertura comum para os sistemas digestório, urinário e reprodutor."
  },
  q19: {
    a: "Incorreto. A amônia é tóxica e excretada por animais aquáticos.",
    b: "Incorreto. A ureia é menos tóxica que a amônia e excretada por mamíferos.",
    c: "Correto! O ácido úrico é o menos tóxico e menos solúvel em água, sendo excretado por aves, répteis e alguns insetos.",
    d: "Incorreto. A creatinina é um produto do metabolismo muscular, excretado na urina.",
    e: "Incorreto. A alantoína é um produto da degradação do ácido úrico, excretado por alguns mamíferos."
  },
  q20: {
    a: "Incorreto. Uma glândula endócrina secreta hormônios diretamente na corrente sanguínea.",
    b: "Incorreto. Uma glândula exócrina secreta substâncias em ductos que levam a superfícies externas ou cavidades do corpo.",
    c: "Correto! O pâncreas secreta hormônios (insulina, glucagon) na corrente sanguínea (função endócrina) e suco pancreático no duodeno (função exócrina).",
    d: "Incorreto. Uma glândula holócrina libera células inteiras como secreção.",
    e: "Incorreto. Uma glândula apócrina libera parte do citoplasma celular junto com a secreção."
  }
};

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = {};

  for (const element of quizForm.elements) {
    if (element.type === 'radio' && element.checked) {
      userAnswers[element.name] = element.value;
    }
  }

  justificationsContainer.innerHTML = '';

  for (const question in correctAnswers) {
    const userAnswer = userAnswers[question];
    const isCorrect = userAnswer === correctAnswers[question];

    if (isCorrect) {
      score++;
    }

    const justification = justifications[question][userAnswer];
    const justificationElement = document.createElement('p');
    justificationElement.innerHTML = `<strong>Questão ${parseInt(question.substring(1))}:</strong> ${justification}`;
    justificationsContainer.appendChild(justificationElement);
  }

  resultsContainer.style.display = 'block';
  scoreContainer.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} questões.`;
});