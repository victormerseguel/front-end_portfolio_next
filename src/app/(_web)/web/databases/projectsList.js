const prefix = "https://victormerseguel.com/projects/";

export const projectsList_db = [
  {
    highlight: true,
    title: { pt: "Portfólio Videomaker", en: "Videomaker Portfolio" },
    description: {
      pt: `Este projeto foi o início de tudo. Depois que comecei a me aventurar no mundo da programação, o meu primeiro projeto pessoal foi a criação de um portfólio para meus trabalhos como videomaker. Começou com um projeto bagunçado, autodidata, simples em HTML, CSS e JavaScript. Aos poucos foi se transformando, se organizando e hoje faz parte de um portfólio maior, feito em NEXT.js 14, utilizando as últimas funcionalidades que ali se apresentam no momento. 
      Alguns desafios interessantes foram: criar um modal para cada vídeo, com Route Intercepting e Route Parallel para que ao mesmo tempo fosse possível visualizar cada projeto sem perder a navegação existente, mas também fornecer uma rota única para que cada projeto fosse acessado diretamente; a utilização do componente nativo Image para uma melhor performance de carregamento e cache em servidor, diminuindo o total das requisições imediatas ao acessar o site, fazendo-as apenas quando necessário; além da organização de rotas, uma vez que este projeto está contido numa aplicação maior, que inclui este site em que estamos no momento.
      Este é um projeto que tenho muito carinho por ser, como mencionado, o início de tudo e ao mesmo tempo um diário de bordo de minha trajetória e evolução no front-end.
`,
      en: `This project was the beginning of everything. After I started venturing into the programming world, my first personal project was creating a portfolio for my work as a videomaker. It began as a messy, self-taught project, simple in HTML, CSS, and JavaScript. Gradually, it evolved and organized itself, and today it's part of a larger portfolio, built in NEXT.js 14, utilizing the latest features available.
      Some interesting challenges included: creating a modal for each video, with Route Intercepting and Route Parallel so that each project could be viewed without losing existing navigation, while also providing a unique route for direct access to each project; using the native Image component for better loading performance and server-side caching, reducing total immediate requests when accessing the site, making them only when necessary; in addition to route organization, as this project is contained within a larger application, which includes the site we're currently on.
      This is a project I hold dear because it's, as mentioned, the beginning of everything and at the same time a logbook of my journey and evolution in front-end development.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: true,
    },
    thumb: "project-portfolio.jpg",
    projectURL: "https://victormerseguel.com/film",
    githubURL: "https://github.com/victormerseguel/victor-portfolio",
  },
  {
    highlight: false,
    title: { pt: "iPhone 14 - Page Clone", en: "iPhone 14 - Page Clone" },
    description: {
      pt: `Reconhecidamente pelo design e pela ótima experiência que a Apple oferece para seus usuários, decidi recriar com finalidades de estudo a página do iPhone 14 (o mais recente à época). Apesar de ser uma página basicamente estática, haviam alguns desafios que achei interessante de encarar. O primeiro é a harmonia entre os elementos contidos na página, uma forma de entender e estudar conceitos de programação em cima de referências de grandes empresas, o segundo foi a tentativa de criar, com pouco conhecimento e sem a ajuda de nenhuma biblioteca, um carrossel infinito que pode ser visto mais ao final da página. Com elementos que rodam independente uns dos outros e com interatividade com o mouse e controle do usuário. 
O propósito foi chegar o mais próximo possível da referência, mas alguns elementos precisaram ser substituídos e adaptados como as fontes utilizadas e a supressão de algumas sessões.
`,
      en: `Widely recognized for its design and the excellent user experience Apple offers, I decided to recreate, for study purposes, the page of the iPhone 14 (the latest at the time). Although it's a mostly static page, there were some challenges that I found interesting to tackle. The first one was achieving harmony among the elements on the page, a way to understand and study programming concepts based on references from major companies. The second challenge was attempting to create, with limited knowledge and without the use of any libraries, an infinite carousel that can be seen further down the page. With elements that rotate independently of each other and with interactivity with the mouse and user control.
The goal was to get as close as possible to the reference, but some elements needed to be replaced and adapted, such as the fonts used and the removal of some sections.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-iphone14.jpg",
    projectURL: "https://iphone14-clone-vic.vercel.app/",
    githubURL: "https://github.com/victormerseguel/iphone14_clone",
  },
  {
    highlight: true,
    title: { pt: "Página de Captura", en: "Landing Page" },
    description: {
      pt: `Este projeto é uma landing page simples, mas que neste portfólio se destaca por toda a criação ter sido realizada por mim; desde o design até o deploy.
Originalmente este trabalho foi realizado dentro de um projeto maior todo construído em React, mas que, por questões de confidencialidade, foi recriado para poder ser exibido.
A opção de faze-lo em React se deu pela possibilidade de criar as sessões separadas permitindo a reorganização de forma simples de acordo com os testes de tráfego e análises de comportamentos de visitas.
`,
      en: `This project is a simple landing page, but it stands out in this portfolio because all the creation was done by me, from design to deployment.
Originally, this work was done within a larger project entirely built in React. However, due to confidentiality reasons, it was recreated for display purposes.
The choice to do it in React was made because it allowed for the creation of separate sections, enabling easy reorganization based on traffic testing and visitor behavior analysis.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: false,
    },
    thumb: "project-fabuloso.jpg",
    projectURL: prefix + "o-fabuloso-mundo",
    githubURL: "https://github.com/victormerseguel/o-fabuloso-mundo",
  },
  {
    highlight: false,
    title: { pt: "Animação", en: "Animation" },
    description: {
      pt: `Este projeto faz parte dos meu estudo em Programação Criativa, onde, por meio de JavaScript, formas e automação, são criadas animações e peças de arte digital.
É um trabalho muito divertido e desafiador que originalmente utiliza Canvas Sketch Util em sua criação mas que para este portfólio foi recriado em Vanilla JavaScript para que pudesse ser feito seu Deploy diretamente em código, sem que precisasse ser convertido em vídeo. 
Para além da criação das formas, este projeto conta com uma adaptação aos diferentes tamanhos de tela, sendo recriado e gerando pontos proporcionais a cada tamanho, mantendo sempre sua harmonia visual, independente do dispositivo que esteja sendo utilizado.
`,
      en: `This project is part of my studies in Creative Programming, where, through JavaScript, shapes, and automation, animations and digital art pieces are created. 
It is a very fun and challenging work that originally uses Canvas Sketch Util in its creation, but for this portfolio, it was recreated in Vanilla JavaScript so that it could be deployed directly as code, without needing to be converted into a video.
In addition to creating shapes, this project adapts to different screen sizes, being recreated and generating proportional points for each size, always maintaining its visual harmony, regardless of the device being used.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-sketch1.jpg",
    projectURL: "https://sketch01.vercel.app",
    githubURL: "https://github.com/victormerseguel/sketch01",
  },

  /*----------------------------------------*/

  {
    highlight: false,
    title: {
      pt: "Calculadora IMC em React",
      en: "IMC Calculator in React",
    },
    description: {
      pt: `Este projeto foi realizado de duas maneiras diferentes, uma em Vanilla JavaScript e outro em React.js.
O propósito deste trabalho foi exercitar e estudar as semelhanças e diferenças de tecnologias semelhantes e as funcionalidades do uso de Libs e Frameworks.
Os pontos de foco do projeto foram a manipulação de estados de inputs com validações básicas, a lógica do cálculo, o retorno à partir de uma base de dados e a estilização de acordo com o resultado obtido.
É um projeto bastante simples, mas muito interessante para exercitar conceitos básicos e o funcionamento das tecnologias.
`,
      en: `This project was carried out in two different ways, one in Vanilla JavaScript and the other in React.js.
The purpose of this work was to exercise and study the similarities and differences between similar technologies and the functionalities of using libraries and frameworks.
The project's focus points were the manipulation of input states with basic validations, the logic of calculations, fetching data from a database, and styling according to the obtained results.
It is a rather simple project but very interesting for practicing basic concepts and understanding how these technologies work.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: false,
    },
    thumb: "project-imc.jpg",
    projectURL: "https://imc-calculator-react-psi.vercel.app",
    githubURL: "https://github.com/victormerseguel/imc_calculator_react",
  },
  {
    highlight: false,
    title: {
      pt: "Login do Instagram - Page Clone",
      en: "Instagram Login - Page Clone",
    },
    description: {
      pt: `Este projeto tem como finalidade o estudo e análise de interfaces para estudar não apenas o código em si (que neste caso é bastante simples), mas também conceitos de design como cores, disposições, tamanhos etc., visto que o estudo a partir de interfaces de grandes empresas proporciona o contato com trabalho de grandes profissionais e as melhores práticas existentes no mercado.
Neste trabalho especificamente o foco está no HTML e CSS, com uma pequena	 inserção JavaScript para criar a mudança de tela do telefone afim de reproduzir a animação original da época.
`,
      en: `The purpose of this project is to study and analyze interfaces, not only for the code itself (which, in this case, is quite simple) but also for design concepts such as colors, layouts, sizes, and so on. Studying interfaces from major companies provides exposure to the work of top professionals and the best practices in the industry.
In this particular project, the focus is on HTML and CSS, with a small amount of JavaScript added to create the phone screen change in order to reproduce the original animation from that time.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-instagram.jpg",
    projectURL: "https://instagram-login-clone-vert.vercel.app",
    githubURL: "https://github.com/victormerseguel/instagram_login_clone",
  },
  {
    highlight: false,
    title: { pt: "Quiz DEV", en: "Quiz DEV" },
    description: {
      pt: `Este projeto foi criado em React e, apesar da possibilidade de utilizar RouterDOM, neste optou-se por trabalhar com renderização condicional por meio de um Custom Hook que gerencia os estados de um useReducer além de prover um contexto a partir do hook useContext.
O objetivo deste trabalho foi exercitar os conhecimentos em React à partir dos Hooks e explorar suas possibilidades.
Além disso, o Quiz proporciona a possibilidade de escolha entre 3 temas, com ajudas para cada questão, opções renderizadas em ordem aleatória, representação visual de acertos e erros, contagem de acertos e um resultado final. Tudo de forma dinâmica baseado em um arquivo de dados que contem um array de objetos com todas as informações necessárias.`,
      en: `This project was created in React, and despite the option to use RouterDOM, it was chosen to work with conditional rendering through a Custom Hook that manages the states of a useReducer and provides a context through the useContext hook.
The goal of this work was to exercise knowledge in React using Hooks and explore their possibilities. 
Additionally, the Quiz offers the choice of 3 themes, with hints for each question, options rendered in random order, visual representation of correct and incorrect answers, score counting, and a final result. All dynamically based on a data file that contains an array of objects with all the necessary information.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: false,
    },
    thumb: "project-quiz.jpg",
    projectURL: "https://quiz-app-react-kohl-phi.vercel.app",
    githubURL: "https://github.com/victormerseguel/quiz_app_react",
  },
  // {
  //   highlight: false,
  // title: { pt: "Memories - Full Stack", en: "Memories - Full Stack" },
  //   description: { pt: "", en: "" },
  //   technology: {
  //     html: true,
  //     css: true,
  //     javascript: true,
  //     react: true,
  //   },
  //   thumb: "project-iphone14.jpg",
  //   projectURL: prefix + "",
  //   githubURL: "https://github.com/victormerseguel/memories_fullstack",
  //   videoSRC: "",
  // },
  // {
  //   id: 2,
  //   highlight: false,
  // title: { pt: "Countdown", en: "Countdown" },
  //   description: {
  //     pt: `Este é um projeto clássico que cria uma contagem regressiva à partir de dados mockados no programa, mas como existe um foco especial no Front-End, ele conta com a possibilidade do usuário poder personalizar título do evento, data, tema, imagem de fundo a partir de uma url.
  //   Foram utilizados diversos hooks neste projeto bem como a utilização do RouterDOM, da ContextAPI além de custos looks.
  //   Como diferencial e incremento do projeto, o próximo passo é adicionar a funcionalidade à Local Storage para que os dados persistam no navegador do usuário e não se percam no fechamento da página.`,
  //     en: `This is a classic project that creates a countdown based on mocked data in the program, but with a special focus on Front-End, it allows the user to customize the event title, date, theme, and background image from a URL.
  //   Several hooks were used in this project, as well as the use of RouterDOM, ContextAPI, and custom hooks.
  //   As an enhancement, the next step is to add functionality to Local Storage so that the data persists in the user's browser and doesn't get lost when the page is closed.
  //   `,
  //   },
  //   technology: {
  //     html: true,
  //     css: true,
  //     javascript: true,
  //     react: true,
  //   },
  //   thumb: "project-countdown.jpg",
  //   projectURL: prefix + "countdown",
  //   githubURL: "https://github.com/victormerseguel/countdown_react",
  // },
  {
    highlight: false,
    title: { pt: "Gerador de Senhas", en: "Password Generator" },
    description: {
      pt: `Este é um formulário simples, que simula um formulário de inscrição onde o usuário deve cadastrar seus dados e criar uma senha, porém, há uma lógica neste programa que cria um gerador de senhas aleatórias de forma automática para auxiliar o usuário. 
Mas este gerador de senhas tem a possibilidade de customização, permitindo ao usuário selecionar a quantidade de caracteres que comporão a senha, se existirão letras e/ou números e/ou caracteres especiais, tornando assim o projeto mais completo e complexo em sua lógica. 
Além disso, há também um botão para que possa ser copiada a senha gerada para facilitar sua utilização.`,
      en: `This is a simple form that simulates a registration form where the user must enter their data and create a password. However, there is logic in this program that automatically generates a random password to assist the user.
This password generator has the possibility of customization, allowing the user to select the quantity of characters that will compose the password, whether there will be letters and/or numbers and/or special characters, making the project more comprehensive and complex in its logic.
Additionally, there is a button to copy the generated password to facilitate its use.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-password.jpg",
    projectURL: "https://password-generator-five-nu.vercel.app",
    githubURL: "https://github.com/victormerseguel/password-generator",
  },
  {
    highlight: false,
    title: { pt: "Gerador de QR Code", en: "QR Code Generator" },
    description: {
      pt: `Este trata-se de um dos primeiros projetos de JavaScripts que tive a oportunidade de criar com o intuito de estudada e praticar suas funcionalidades. Ele se integra a uma API que, a partir de um texto inserido em um input, que pode ser uma mensagem ou mesmo uma url, gera um QR Code.
É simples, mas bastante interessante!`,
      en: `This is one of the first JavaScript projects I had the opportunity to create in order to study and practice its functionalities. It integrates with an API that, based on text entered in an input, which can be a message or even a URL, generates a QR Code. 
It is simple but quite interesting!
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-qrcode.jpg",
    projectURL: "https://qrcode-generator-seven-virid.vercel.app",
    githubURL: "https://github.com/victormerseguel/password-generator",
  },
  // {
  //   highlight: false,
  // title: {pt: "Party-Time",
  //   en: "Party-Time",
  //   }, description: {pt: "",
  //   en: "",
  //   }, technology: {
  // html: true,
  // css: true,
  // javascript: true,
  // react: true,
  //   },
  //   thumb: "project-partytime.jpg",
  //   projectURL: prefix + "",
  //   githubURL: "https://github.com/victormerseguel/party_time",
  //   videoSRC: "",
  // },
  {
    highlight: false,
    title: { pt: "Gerador de Box-Shadow", en: "Box-Shadow Generator" },
    description: {
      pt: `Este é um projeto utilitário que tem muito uso no desenvolvimento Front-End, mais especificamente para criação de designs.
A partir de controles deslizantes e um visualizador em tempo real, podemos alterar valores das propriedades que fazem parte do Box-Shadow e vermos os resultados imediatamente, facilitando e muito a implementação desta propriedade.
O resultado da alteração dos controles gera uma regra que basta ser copiada e adicionada à regra de estilos para que possa ser utilizada no projeto final.
`,
      en: `This is a utility project that is widely used in Front-End development, specifically for design creation. 
Using sliders and a real-time viewer, we can change values of properties that are part of the Box-Shadow and see the results immediately, greatly facilitating the implementation of this property. 
The result of the control change generates a rule that just needs to be copied and added to the style rule to be used in the final project.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-boxshadow.jpg",
    projectURL: "https://box-shadow-generator-gamma.vercel.app",
    githubURL: "https://github.com/victormerseguel/box-shadow_generator",
  },
  {
    highlight: false,
    title: {
      pt: "Lista de Tarefas Avançada - Local Storage",
      en: "Advanced ToDo List - Local Storage",
    },
    description: {
      pt: `Este é um dos clássicos dos projetos em JavaScript em que se pode criar uma lista de tarefas com a possibilidade de marcar as que já foram realizada, editar cada uma existente e excluir.
Porém, diferentemente da maioria dos projetos, este tem alguns diferenciais que são o campo de busca, possibilitando filtrar as atividades por meus de títulos ou palavras chaves; filtro para separar tarefas concluídas, a serem realizadas e todas elas; além do salvamento na Local Storage, para que os dados persistam ao recarregamento de página e fechamento do navegador.
`,
      en: `This is one of the classics of JavaScript projects where you can create a to-do list with the ability to mark those that have been completed, edit each existing one, and delete. 
However, unlike most projects, this one has some unique features such as the search field, allowing filtering of activities by titles or keywords; a filter to separate completed tasks, to-dos, and all of them; and saving to Local Storage, so that the data persists upon page reload and browser closure.`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-todo.jpg",
    projectURL: "https://advanced-todo-list-localstorage.vercel.app",
    githubURL:
      "https://github.com/victormerseguel/advanced_todo_list_localstorage",
  },
  {
    highlight: false,
    title: { pt: "Calculadora IMC em JavaScript", en: "IMC Calculator" },
    description: {
      pt: `Este projeto foi realizado de duas maneiras diferentes, uma em Vanilla JavaScript e outro em React.js.
O propósito deste trabalho foi exercitar e estudar as semelhanças e diferenças de tecnologias semelhantes e as funcionalidades do uso de Libs e Frameworks.
Os pontos de foco do projeto foram a manipulação de estados de inputs com validações básicas, a lógica do cálculo, o retorno à partir de uma base de dados e a estilização de acordo com o resultado obtido.
É um projeto bastante simples, mas muito interessante para exercitar conceitos básicos e o funcionamento das tecnologias.
`,
      en: `This project was carried out in two different ways, one in Vanilla JavaScript and the other in React.js.
The purpose of this work was to exercise and study the similarities and differences between similar technologies and the functionalities of using libraries and frameworks.
The project's focus points were the manipulation of input states with basic validations, the logic of calculations, fetching data from a database, and styling according to the obtained results.
It is a rather simple project but very interesting for practicing basic concepts and understanding how these technologies work.
`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: false,
      nextjs: false,
    },
    thumb: "project-imc.jpg",
    projectURL: "https://imc-calculator-js.vercel.app",
    githubURL: "https://github.com/victormerseguel/imc_calculator_js",
  },
  {
    highlight: true,
    title: {
      pt: "L'Onde - Carole Mac Veigh",
      en: "L'Onde - Carole Mac Veigh",
    },
    description: {
      pt: `Esta é uma aplicação criada em React para a divulgação e exposição dos serviços oferecidos pela cliente. Com design moderno e ao mesmo tempo feminino, as funcionalidades da aplicação são simples, mas eficazes também.
      Partindo do conceito de one page, houveram pontos importantes de trabalho para esta aplicação como a possibilidade de seleção de língua com a opção armazenada em localStorage para futuros acessos, integração de formulários com EmailJS, alimentação dinâmica de dados facilitando futuras alterações e manutenção, além de abordagens de técnicas de SEO como a inserção do atributo hreflang para as alternativas de rotas para cada língua.
      Como meta de melhoramento, o intuito é futuramente migrar a aplicação para o Next.js para melhorar o SEO e otimizar ainda mais seu posicionamento para os mecanismos de busca.`,
      en: `This is an application created in React to promote and showcase the services offered by the client. With a modern yet feminine design, the application's functionalities are simple yet effective as well.
      Based on the one-page concept, there were important points of work for this application such as the possibility of language selection with the option stored in localStorage for future accesses, integration of forms with EmailJS, dynamic data feeding facilitating future changes and maintenance, as well as SEO techniques approaches like the insertion of the hreflang attribute for alternate routes for each language.
      As an improvement goal, the intention is to eventually migrate the application to Next.js to improve SEO and further optimize its positioning for search engines.`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: false,
    },
    thumb: "project-carolemacveigh.jpg",
    projectURL: "https://www.guialonde.com",
    githubURL: "https://github.com/victormerseguel/londe-carolemacveigh",
  },
  {
    highlight: true,
    title: {
      pt: "Luciana Castellano",
      en: "Luciana Castellano",
    },
    description: {
      pt: `Criado em Next.js 14 para otimização de SEO e performance de carregamento, esta aplicação foi criada para a apresentação dos trabalhos e serviços oferecidos pela cliente de forma elegante, organizada e eficiente. Com um design, também criado por mim, que buscasse uma conexão com o usuário, esta aplicação pretende servir de vitrine e resultado de buscas pelos mecanismos especializados, além de hospedar paginas de vendas e capturas para eventuais trabalhos oferecidos pela cliente. 
      Com grande potencial de escala, mesmo que com funcionalidades simples, a escolha do framework Next.js 14 se mostrou bastante acertada para atualizações futuras. `,
      en: `Created in Next.js 14 for SEO optimization and loading performance, this application was created to present the client's work and services in an elegant, organized, and efficient manner. With a design, also created by me, that sought a connection with the user, this application aims to serve as a showcase and search engine result for specialized mechanisms, as well as hosting sales pages and captures for eventual jobs offered by the client.
      With great potential for scale, even with simple features, the choice of the Next.js 14 framework proved to be quite appropriate for future updates.`,
    },
    technology: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: true,
    },
    thumb: "project-lucianacastellano.jpg",
    projectURL: "https://luciana-castellano.vercel.app",
    githubURL: "https://github.com/victormerseguel/luciana-castellano-next",
  },
];

export const highlightOrder = [
  "Luciana Castellano",
  "L'Onde - Carole Mac Veigh",
  "Portfólio Videomaker",
  "Página de Captura",
];

export const allProjectsOrdered = [
  "iPhone 14 - Page Clone",
  "Animação",
  "Calculadora IMC em React",
  "Login do Instagram - Page Clone",
  "Quiz DEV",
  "Gerador de Senhas",
  "Gerador de QR Code",
  "Gerador de Box-Shadow",
  "Lista de Tarefas Avançada - Local Storage",
  "Calculadora IMC em JavaScript",
];

export const highlightDB = [];
export const allProjectsDB = [];

const pushItems = (db, DB) => {
  db.forEach((item) => {
    projectsList_db.forEach((project) => {
      project.title.pt === item ? DB.push(project) : null;
    });
  });
};

pushItems(highlightOrder, highlightDB);
pushItems(allProjectsOrdered, allProjectsDB);

export const technologies = ["html", "css", "javascript", "react", "nextjs"];

const test = [
  {
    highlight: true,
    title: { pt: "Portfólio Videomaker", en: "Videomaker Portfolio" },
    description: {
      pt: `Este é um projeto criado para o meu antigo trabalho como videomaker.
A criação dele foi feita em HTML, CSS e JavaScript pela simplicidade que o projeto exigia, pela otimização de SEO e pela praticidade.
Este projeto a principio foi criado de maneira desordenada, com conhecimentos básicos em cada uma das linguagens. Na verdade comecei a estudar mesmo, depois da criação deste projeto, porque, por mais que eu tenha um perfil autodidata que me permite realizar muitas coisas, sei que a técnica e o conhecimento correto são muito importante.
Depois que adquiri conhecimento, decidi refatorar o código, simplificando e aplicando boas práticas, que me permitiram estudar e atestar minha própria evolução. O resultado e a evolução deste projeto podem ser vistos no repositório do github que pode ser acessado pelo botão ao lado (ou acima, dependendo do dispositivo que esteja acessando :)
O conceito é de uma Single Page, mas que é totalmente manipulada por JavaScript, criando a sensação de navegação entre páginas e interatividade.
`,
      en: ``,
    },
    technologies: {
      html: true,
      css: true,
      javascript: true,
      react: true,
      nextjs: true,
    },
    thumb: "",
    projectURL: prefix + "",
    githubURL: "",
  },
];
