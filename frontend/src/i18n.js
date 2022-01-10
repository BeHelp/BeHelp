import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ENG",
  globalInjection: true,
  messages: {
    ENG: {
      about: "About",
      volunteers: "Volunteers",
      contactus: "Contact Us",
      signup: "Sign Up",
      login: "Log In",
      findyourvolunteer: "FIND YOUR VOLUNTEER",
      volunteerswhocanhelp: "VOLUNTEERS WHO CAN HELP",
      skill: "Skill",
      city: "City",
      language: "Language",
      whoarewe: "WHO ARE WE?",
      aboutbehelp1:
        "BeHelp is a service that connects refugees and asylum seekers to local volunteers who are willing to share their expertise and skills pro bono.",
      aboutbehelp2: "On BeHelp, you can find helpers from all around Belgium.",
      ourservices: "Our Services",
      ourservices2:
        "BeHelp is a group of volunteers who have the time, desire and opportunity to help newcomers to Belgium with everyday problems.",
      hyfstudents: "Project from the students of HYF",
      kidane:
        "BeHelp made me believe again. After fleeing from Eritrea, I had a very hard time and needed psychological help which I could hardly afford. On this platform, I could find a volunteer psychotherapist that renders aid to people like me. She even spoke Tigrinya! Our sessions allowed me to see new opportunities and live a more fulfilling life, even though it remains challenging to adapt to the new country.",
      levi: "The drama of refugees fleeing out their countries has always touched me, also because my father was a refugee once! Before, I was simply donating money to fundraising movements, and BeHelp gave me an excellent opportunity to contribute in a more personal way. Being a French teacher, I give language classes and serve as an interpreter from Arabic, the language that I master from my childhood.",
      abdel:
        "Having left my country behind, I faced extreme complexity of the Belgian legal system. All these papers and offices … hard to deal with if you don’t speak Dutch! So I registered on BeHelp and found competent volunteers that explained me how to smoothen the process of legalization. Now I am returning all support I have received here, by helping people who came to Belgium, like me, and need help of a professional psychologist.",
      comments: "COMMENTS: ",
      howwework: "HOW WE WORK",
      howcanwehelp: "How We Can Help?",
      legalassistance: "Legal Assistance",
    },
    FR: {
      about: "À propos",
      volunteers: "Bénévoles",
      contactus: "Contactez-nous",
      signup: "S'inscrire",
      login: "Se connecter",
      findyourvolunteer: "TROUVER VOTRE BÉNÉVOLE",
      volunteerswhocanhelp: "BÉNÉVOLES QUI PEUVENT AIDER",
      skill: "Compétence",
      city: "Ville",
      language: "Langue",
      whoarewe: "QUI SOMMES-NOUS?",
      aboutbehelp1:
        "BeHelp est un service qui relie les réfugiés et les demandeurs d'asile à des bénévoles locaux qui sont prêts à partager leurs compétences et leurs savoir-faire.",
      aboutbehelp2:
        "Sur BeHelp, vous pouvez trouver des bénévoles de tout le pays.",
      ourservices: "Nos services",
      ourservices2:
        "BeHelp est un groupe de bénévoles qui ont le temps, le désir et l'opportunité de soutenir les nouveaux arrivants à Belgique avec des problèmes quotidiens.",
      hyfstudents: "Projet de l'équipe HYF",
      kidane:
        "BeHelp m'a fait penser à nouveau. Après avoir quitté l'Érythrée, j'avais une très difficile vie et j'étais incapable de payer pour des soins psychologiques. Sur cette plateforme, j'ai pu trouver un bénévole psychothérapeute qui m'aidera à me guérir. Elle a également parlé Tigrigna! Les sessions m'ont permis de voir de nouvelles opportunités et de vivre une meilleure vie, même si cela reste difficile d'adapter à la nouvelle nation.",
      levi: "Le drame des réfugiés qui s'échappent de leur pays a toujours touché moi, aussi que parce que mon père était réfugié une fois! Avant, je n'étais qu'un donateur de fonds, et BeHelp m'a donné une excellente occasion de contribuer dans une meilleure façon. En tant que professeur français, je donne des cours de langue et je suis un interprète d'arabe, la langue que j'apprends de ma petite enfance.",
      abdel:
        "Après avoir quitté mon pays, j'ai rencontré des difficultés avec le système légal de mon pays. Tous ces documents et bureaux … difficiles à traiter si vous ne parlez pas le français! Donc, j'ai inscrit sur BeHelp et trouvé des bénévoles qui m'ont expliqué comment faire en sorte que le processus de légalisation soit plus facile. Maintenant, je retourne tout le soutien que j'ai reçu ici, en aidant les gens qui viennent à Belgique, comme moi, et en besoin d'un psychologue professionnel.",
      comments: "COMMENTAIRES: ",
      howwework: "COMMENT ÇA MARCHE",
      howcanwehelp: "Comment nous pouvons aider?",
      legalassistance: "Assistance juridique",
    },
    NL: {
      about: "Over ons",
      volunteers: "Vrijwilligers",
      contactus: "Contacteer Ons",
      signup: "Inschrijven",
      login: "Inloggen",
      findyourvolunteer: "VIND JE BENEDENDE",
      volunteerswhocanhelp: "VRIJWILLIGERS WELKE HET KAN HELPEN",
      skill: "Vaardigheid",
      city: "Stad",
      language: "Taal",
      whoarewe: "WIE ZIJN WE?",
      aboutbehelp1:
        "BeHelp is een dienst die reisden en asielverzoekers verbindt met vrijwilligers die zich kunnen delen met hun ervaring en vaardigheden pro bono.",
      aboutbehelp2: "Op BeHelp kunt u vrijwilligers vinden van alle landen.",
      ourservices: "Onze diensten",
      ourservices2:
        "BeHelp is een groep vrijwilligers die tijd, willen en mogelijkheid hebben om nieuwgeborenen in België te helpen met dagelijks problemen.",
      hyfstudents: "Project van de studenten van HYF",
      kidane:
        "BeHelp maakte me weer eens eens. Na het verlaten van Eritrea, had ik een heel harde dag en ben ik niet in staat om psychologische hulp te krijgen die ik niet kon betalen. Op deze platform kon ik een psychotherapeut vinden die mij hulp kan geven aan mensen zoals ik. Ze spraken Tigrinya! Mijn sessies hebben mij geholpen om nieuwe mogelijkheden te zien en een meer levende leven te leven, zelfs als het nog veel lastig is om aan de nieuwe landen te adapteren.",
      levi: "De drama van reisden die zich uit hun landen verlaten heeft altijd meegenomen, ook omdat mijn vader een reisende was een keer! Vooral omdat ik een frans leerling ben, geef ik talenklassen en ben ik een vertaler van arabisch, de taal die ik in mijn leven leer.",
      abdel:
        "Nadat ik mijn land achter me had gelaten, werd ik geconfronteerd met de extreme complexiteit van het Belgische rechtssysteem. Al deze papieren en kantoren ... moeilijk om mee om te gaan als je geen Nederlands spreekt! Dus ik registreerde me op BeHelp en vond bekwame vrijwilligers die me uitlegden hoe ik het proces van legalisatie. Nu geef ik alle steun terug die ik hier heb ontvangen, door mensen te helpen die naar België kwamen, zoals ik, en hulp nodig hebben van een professionele psycholoog.",
      comments: "OPMERKINGEN: ",
      howwework: "HOE WERKEN WE",
      howcanwehelp: "Hoe kunnen we helpen?",
      legalassistance: "Juridische hulp",
    },
    عربي: {
      about: "عنا",
      volunteers: "المتطوعين",
      contactus: "اتصل بنا",
      signup: "التسجيل",
      login: "تسجيل الدخول",
      findyourvolunteer: "العثور على متطوعك",
      volunteerswhocanhelp: "المتطوعين الذين يمكنهم مساعدتك",
      skill: "المهارة",
      city: "المدينة",
      language: "اللغة",
      whoarewe: "من نحن؟",
      aboutbehelp1:
        "BeHelp هي خدمة توصل الأفراد المحيطين والمستفيدين من الخدمات المجتمعية بالمتطوعين المحليين المستعدين للمشاركة فيها الخبرة والمهارات الخاصة بهم.",
      aboutbehelp2: "في BeHelp يمكنك العثور على متطوعين من جميع أنحاء البلاد.",
      ourservices: "خدماتنا",
      ourservices2:
        "BeHelp هي مجموعة من المتطوعين الذين لديهم الوقت والحب والفرصة لمساعدة الجدد في بلجية بالمساعدة في الأحوال اليومية.",
      hyfstudents: "مشروع الطلاب من هيئة التعليم العالي الفلسطينية",
      kidane:
        "BeHelp لقد نفسها عليك مرة أخرى. بعد أن أخرجت من إريتريا، كانت لي حاجة إلى أن أكون غير قادرا على دفع الخدمات الصحية التي أحتاجها للحياة. على هذه الخدمة، لقد أعثرت على متطوع بطاقة تشخيصية تحتاجه للمساعدة. كانت أيضا تكلم تغيرية! جلساتي تساعدتي في رؤية عدة مزايا جديدة وحياتي أفضل، حتى لو كانت أمراضية أخرى.",
      levi: "الدراما التي تم تحريكها من أجل الأفراد المحيطين الذين يخرجون من أجلهم أثناء الحياة. على الرغم من أنني أصبحت أطفالا بلجيا، أصبحت أيضا ترجمة باللغة العربية، وأصبحت أيضا تحتاج إلى تعليم أخرين في اللغة التي أنا أعطيها.",
      abdel:
        "بعد أن تركت بلدي ورائي ، واجهت تعقيدًا شديدًا للنظام القانوني البلجيكي. كل هذه الأوراق والمكاتب ... يصعب التعامل معها إذا كنت لا تتحدث الهولندية! لذلك قمت بالتسجيل في BeHelp ووجدت متطوعين أكفاء أوضحوا لي كيفية التخفيف عملية التقنين. الآن أعود بكل الدعم الذي تلقيته هنا ، من خلال مساعدة الأشخاص الذين قدموا إلى بلجيكا ، مثلي ، ويحتاجون إلى مساعدة طبيب نفساني محترف.",
      comments: "تعليقات:",
      howwework: "كيف نعمل؟",
      howcanwehelp: "كيف يمكننا مساعدتك؟",
      legalassistance: "المساعدة القانونية",
    },
  },
});
export default i18n;
