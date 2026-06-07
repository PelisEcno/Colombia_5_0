var idioma = "es";

var textos = {

    nav_inicio:       { es: "Inicio",        en: "Home" },
    nav_conferencias: { es: "Conferencias",  en: "Conferences" },
    nav_glossary:     { es: "Glosario",      en: "Glossary" },
    nav_conclusion:   { es: "Conclusión",    en: "Conclusion" },

    // index
    hero_titulo: { es: "Bienvenidos al sitio de Colombia 5.0", en: "Welcome to the Colombia 5.0 site" },
    hero_desc:   { es: "Evento tecnologico realizado en Bogota donde se exploraron temas de innovacion, inteligencia artificial y tecnologia empresarial.", en: "Technology event held in Bogota where topics like innovation, artificial intelligence and business technology were explored." },
    hero_btn:    { es: "Ver conferencias", en: "See conferences" },

    // conferencias
    conf_titulo:      { es: "Conferencias",   en: "Conferences" },
    c1_nombre:        { es: "Game UI Systems: de pantallas bonitas a interfaces que funcionan", en: "Game UI Systems: from pretty screens to interfaces that actually work" },
    c1_conf_label:    { es: "Conferencista:", en: "Speaker:" },
    c1_tema_label:    { es: "Tema principal:", en: "Main topic:" },
    c1_tema:          { es: "Diseño de interfaces en videojuegos y como estas deben ser funcionales ademas de visualmente atractivas.", en: "Interface design in video games and how they must be functional as well as visually attractive." },
    c1_resumen_label: { es: "Resumen:", en: "Summary:" },
    c1_resumen:       { es: "En esta conferencia se hablo sobre como el diseño de interfaces en videojuegos va mucho mas alla de solo hacer algo bonito. El conferencista explico que una buena UI debe guiar al usuario sin que este se de cuenta, usando elementos como el color, la posicion y el tamaño para comunicar informacion importante. Se vieron ejemplos de juegos conocidos y como sus interfaces fueron diseñadas pensando primero en el jugador.", en: "This conference talked about how interface design in video games goes far beyond just making something look good. The speaker explained that a good UI should guide the user without them noticing, using color, position and size to communicate important information. We saw examples from well known games and how their interfaces were designed with the player in mind first." },
    c1_keywords_label:{ es: "Palabras clave:", en: "Keywords:" },
    c1_videos_label:  { es: "Videos:", en: "Videos:" },

    c2_nombre:   { es: "Ciberseguridad", en: "Cybersecurity" },
    c2_tema:     { es: "Seguridad informatica y proteccion de datos en entornos empresariales.", en: "Information security and data protection in business environments." },
    c2_resumen:  { es: "Esta conferencia trato sobre la importancia de la ciberseguridad en las empresas actuales. Se explicaron los tipos de ataques mas comunes como el phishing y el ransomware, y como las organizaciones pueden protegerse usando buenas practicas y herramientas adecuadas. Tambien se hablo de la responsabilidad que tiene cada empleado dentro de una empresa para mantener la seguridad.", en: "This conference was about the importance of cybersecurity in today's companies. The most common types of attacks like phishing and ransomware were explained, and how organizations can protect themselves using good practices and the right tools. It also covered the responsibility each employee has inside a company to maintain security." },

    // glosario - titulos
    glos_titulo:  { es: "Glosario técnico", en: "Technical Glossary" },
    glos_th1:     { es: "Término",          en: "Term" },
    glos_th2:     { es: "Definición",       en: "Definition" },

    // glosario - terminos
    g1_term:  { es: "Phishing",               en: "Phishing" },
    g1_def:   { es: "Tecnica de engaño para robar datos personales mediante correos o paginas falsas", en: "Deception technique used to steal personal data through fake emails or websites" },
    g2_term:  { es: "Ransomware",             en: "Ransomware" },
    g2_def:   { es: "Malware que bloquea archivos y pide dinero para liberarlos", en: "Malware that locks files and demands money to release them" },
    g3_term:  { es: "Cortafuegos",            en: "Firewall" },
    g3_def:   { es: "Sistema que filtra el trafico de red para bloquear accesos no autorizados", en: "System that filters network traffic to block unauthorized access" },
    g4_term:  { es: "Cifrado",                en: "Encryption" },
    g4_def:   { es: "Proceso de convertir informacion en un codigo para protegerla", en: "Process of converting information into a code to protect it" },
    g5_term:  { es: "Vulnerabilidad",         en: "Vulnerability" },
    g5_def:   { es: "Fallo en un sistema que puede ser aprovechado por atacantes", en: "Flaw in a system that can be exploited by attackers" },
    g6_term:  { es: "Software malicioso",     en: "Malware" },
    g6_def:   { es: "Programa diseñado para dañar o infiltrarse en un sistema sin permiso", en: "Program designed to damage or infiltrate a system without permission" },
    g7_term:  { es: "Interfaz de usuario",    en: "User Interface (UI)" },
    g7_def:   { es: "Conjunto de elementos visuales con los que el usuario interactua", en: "Set of visual elements the user interacts with" },
    g8_term:  { es: "Experiencia de usuario", en: "User Experience (UX)" },
    g8_def:   { es: "Como se siente el usuario al interactuar con un producto digital", en: "How a user feels when interacting with a digital product" },
    g9_term:  { es: "Visualizacion en pantalla", en: "HUD" },
    g9_def:   { es: "Elementos de interfaz que muestran informacion sin interrumpir la accion", en: "Interface elements that display information without interrupting the action" },
    g10_term: { es: "Esquema de diseño",      en: "Wireframe" },
    g10_def:  { es: "Boceto basico de como se va a ver una pantalla o interfaz", en: "Basic sketch of how a screen or interface will look" },
    g11_term: { es: "Computacion en la nube", en: "Cloud Computing" },
    g11_def:  { es: "Acceso a servicios y recursos de computo a traves de internet", en: "Access to computing services and resources through the internet" },
    g12_term: { es: "Inteligencia artificial", en: "Artificial Intelligence" },
    g12_def:  { es: "Capacidad de las maquinas para simular procesos del pensamiento humano", en: "Ability of machines to simulate human thought processes" },
    g13_term: { es: "Aprendizaje automatico", en: "Machine Learning" },
    g13_def:  { es: "Rama de la IA donde los sistemas aprenden de datos sin ser programados explicitamente", en: "Branch of AI where systems learn from data without being explicitly programmed" },
    g14_term: { es: "Grandes datos",          en: "Big Data" },
    g14_def:  { es: "Conjuntos de datos tan grandes que no se pueden procesar de forma tradicional", en: "Data sets so large they cannot be processed using traditional methods" },
    g15_term: { es: "Algoritmo",              en: "Algorithm" },
    g15_def:  { es: "Conjunto de pasos ordenados para resolver un problema", en: "Set of ordered steps to solve a problem" },
    g16_term: { es: "Interfaz de programacion", en: "API" },
    g16_def:  { es: "Conjunto de reglas que permite a dos aplicaciones comunicarse entre si", en: "Set of rules that allows two applications to communicate with each other" },
    g17_term: { es: "Servidor",               en: "Server" },
    g17_def:  { es: "Computador que almacena y entrega recursos o servicios a otros dispositivos", en: "Computer that stores and delivers resources or services to other devices" },
    g18_term: { es: "Base de datos",          en: "Database" },
    g18_def:  { es: "Sistema organizado para almacenar y consultar informacion", en: "Organized system for storing and querying information" },
    g19_term: { es: "Marco de trabajo",       en: "Framework" },
    g19_def:  { es: "Conjunto de herramientas y librerias para facilitar el desarrollo de software", en: "Set of tools and libraries to facilitate software development" },
    g20_term: { es: "Codigo abierto",         en: "Open Source" },
    g20_def:  { es: "Software cuyo codigo puede ser visto, modificado y distribuido libremente", en: "Software whose code can be freely viewed, modified and distributed" },
    g21_term: { es: "Automatizacion",         en: "Automation" },
    g21_def:  { es: "Uso de tecnologia para realizar tareas sin intervencion humana", en: "Use of technology to perform tasks without human intervention" },
    g22_term: { es: "Ciberseguridad",         en: "Cybersecurity" },
    g22_def:  { es: "Practicas y tecnologias para proteger sistemas y datos de ataques digitales", en: "Practices and technologies to protect systems and data from digital attacks" },
    g23_term: { es: "Token",                  en: "Token" },
    g23_def:  { es: "Clave digital usada para verificar identidad o autorizar acciones", en: "Digital key used to verify identity or authorize actions" },
    g24_term: { es: "Despliegue",             en: "Deploy" },
    g24_def:  { es: "Proceso de publicar una aplicacion para que sea accesible por los usuarios", en: "Process of publishing an application so it is accessible to users" },
    g25_term: { es: "Repositorio",            en: "Repository" },
    g25_def:  { es: "Espacio donde se guarda y gestiona el codigo de un proyecto", en: "Space where a project's code is stored and managed" },
    g26_term: { es: "Diseño adaptable",       en: "Responsive Design" },
    g26_def:  { es: "Tecnica para que un sitio web se vea bien en cualquier tamaño de pantalla", en: "Technique to make a website look good on any screen size" },
    g27_term: { es: "Prototipo",              en: "Prototype" },
    g27_def:  { es: "Version inicial de un producto usada para probar ideas antes del desarrollo final", en: "Initial version of a product used to test ideas before final development" },
    g28_term: { es: "Parte trasera",          en: "Backend" },
    g28_def:  { es: "Parte del desarrollo que el usuario no ve, donde se procesa la logica del sistema", en: "Part of development the user doesn't see, where the system logic is processed" },
    g29_term: { es: "Parte delantera",        en: "Frontend" },
    g29_def:  { es: "Parte visual de una aplicacion con la que el usuario interactua directamente", en: "Visual part of an application the user interacts with directly" },
    g30_term: { es: "DevOps",                 en: "DevOps" },
    g30_def:  { es: "Cultura que une desarrollo y operaciones para entregar software mas rapido", en: "Culture that joins development and operations to deliver software faster" },

    // conclusion
    conc_titulo: { es: "Conclusión y reflexión ética", en: "Conclusion and ethical reflection" },
    conc_p1: { es: "Asistir al evento Colombia 5.0 fue una experiencia muy enriquecedora. Pude aprender sobre temas que antes no conocia muy bien como la ciberseguridad y el diseño de interfaces. Me parecio interesante ver como la tecnologia afecta tantas areas diferentes al mismo tiempo.", en: "Attending the Colombia 5.0 event was a very enriching experience. I was able to learn about topics I didn't know very well before, like cybersecurity and interface design. I found it interesting to see how technology affects so many different areas at the same time." },
    conc_p2: { es: "En cuanto a la etica en la tecnologia empresarial, creo que es un tema que muchas veces se ignora. Hoy en dia las empresas usan inteligencia artificial para tomar decisiones que afectan a personas reales, y eso trae una responsabilidad muy grande. Si un algoritmo decide si alguien recibe un credito o no, ese algoritmo tiene que ser justo y transparente.", en: "Regarding ethics in business technology, I think it is a topic that is often ignored. Nowadays companies use artificial intelligence to make decisions that affect real people, and that comes with a huge responsibility. If an algorithm decides whether someone gets a loan or not, that algorithm has to be fair and transparent." },
    conc_p3: { es: "El uso responsable de los datos tambien es algo que me llamo mucho la atencion. Muchas veces damos nuestros datos sin saber realmente para que los van a usar. Las empresas deben ser honestas con esto y proteger la privacidad de sus usuarios.", en: "Responsible use of data was also something that really caught my attention. Many times we give our data without really knowing what it will be used for. Companies must be honest about this and protect their users privacy." },
    conc_p4: { es: "La automatizacion puede quitarle empleos a mucha gente, pero tambien puede crear nuevas oportunidades si se maneja bien. El problema es cuando se hace solo pensando en reducir costos sin pensar en el impacto social.", en: "Automation can take jobs away from many people, but it can also create new opportunities if handled well. The problem is when it is done only thinking about cutting costs without considering the social impact." },
    conc_p5: { es: "Como futuro desarrollador creo que tengo la responsabilidad de construir tecnologia que ayude a las personas y no que las perjudique. Eso significa pensar antes de programar, no solo en si algo funciona sino en si algo es correcto.", en: "As a future developer I think I have the responsibility to build technology that helps people and does not harm them. That means thinking before coding, not just about whether something works but whether it is the right thing to do." },
};

function cambiarIdioma() {
    if (idioma == "es") {
        idioma = "en";
        document.getElementById("btn-idioma").innerText = "EN / ES";
    } else {
        idioma = "es";
        document.getElementById("btn-idioma").innerText = "ES / EN";
    }
    traducir();
}

function traducir() {
    var elementos = document.querySelectorAll("[data-texto]");
    for (var i = 0; i < elementos.length; i++) {
        var clave = elementos[i].getAttribute("data-texto");
        if (textos[clave]) {
            elementos[i].innerText = textos[clave][idioma];
        }
    }
}