/* =====================================================================
   FOURIER WORKSHOP — CONTENT FILE
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.
   Open it with any text editor, change the text between the quotes,
   save, and refresh index.html in your browser.

   Tips
   - Keep the quotes ("...") and the commas at the end of each line.
   - In abstracts, leave an EMPTY LINE between paragraphs.
   - To add a talk: copy one block inside `talks`, give it a new `id`,
     then reference that id from the schedule (talk: "the-id").
   - To move a talk in the programme, just change its time in `schedule`.
     Its day/time label in the "Talks" section updates automatically.
   ===================================================================== */

const SITE = {

  /* ---------- General ---------- */
  name: "Workshop on Fourier Analysis for Combinatorial Optimization",
  tagline: "One transform where all problems meet",
  dates: "1–2 October 2026",
  place: "Universidad de Málaga, Spain",
  contactEmail: "chicano@uma.es",          // set to "" to hide the contact line

  /* ---------- Logos ----------
     Put the image file in the same folder as index.html and write its name in `file`.
     plate: "light" -> logo sits on a white rounded plate (use for logos made for white backgrounds)
            "none"  -> logo is shown directly on the dark background (use for white/transparent logos)
     url:   optional link opened when the logo is clicked ("" for no link)
     You can add more logos (e.g. university, sponsors): copy the whole { ... } block.
     Leave the list empty ([]) to show no logos.
  */
  logos: [
    { file: "neo-logo.png", alt: "NEO research group – Universidad de Málaga", url: "https://neo.lcc.uma.es/new/", plate: "none" },
  ],

  /* ---------- Venue ---------- */
  venue: {
    room: "Sala de Grados C",
    building: "Escuela Técnica Superior de Ingeniería Informática",
    university: "Universidad de Málaga",
    address: "Bulevar Louis Pasteur, 35 · Campus de Teatinos · 29071 Málaga, Spain",
    mapQuery: "Escuela Técnica Superior de Ingeniería Informática, Bulevar Louis Pasteur 35, Málaga",
  },

  /* ---------- Programme ----------
     type = talk | break | discussion | lunch | meeting | free | close
     For a talk, use:      { time: "10:00", type: "talk", talk: "santucci" }
     For anything else:    { time: "11:30", type: "break", title: "Coffee break", note: "optional small text" }
  */
  schedule: [
    {
      day: "Day 1",
      date: "Thursday, 1 October 2026",
      items: [
        { time: "10:00", type: "talk", talk: "santucci" },
        { time: "10:45", type: "talk", talk: "verel" },
        { time: "11:30", type: "break", title: "Coffee break" },
        { time: "12:00", type: "talk", talk: "chicano" },
        { time: "12:45", type: "discussion", title: "Informal discussions" },
        { time: "13:30", type: "lunch", title: "Lunch break" },
        { time: "15:30", type: "meeting", title: "MSCA-DN meeting",
          note: "Open discussion on preparing a Marie Skłodowska-Curie Doctoral Network (MSCA-DN) project proposal for next year." },
        { time: "17:00", type: "free", title: "Free time" },
      ],
    },
    {
      day: "Day 2",
      date: "Friday, 2 October 2026",
      items: [
        { time: "10:00", type: "talk", talk: "hernando" },
        { time: "10:45", type: "talk", talk: "santana" },
        { time: "11:30", type: "break", title: "Coffee break" },
        { time: "12:00", type: "talk", talk: "lozano" },
        { time: "12:45", type: "discussion", title: "Informal discussions" },
        { time: "13:30", type: "close", title: "Closing" },
        { time: "13:35", type: "lunch", title: "Farewell lunch" },
      ],
    },
  ],

  /* ---------- Talks ---------- */
  talks: [
    {
      id: "santucci",
      speaker: "Valentino Santucci",
      title: "Smooth transitions in the instance space of combinatorial optimization problems",
      abstract: `In combinatorial optimization problems, instances may range from trivial to computationally intractable. This talk introduces Smooth Transition Instance Chains (STICs), a concept inspired by adiabatic quantum computation, to explore the geometry and connectivity of the instance space. Using the well-known MAX-CUT problem as a case study, we present a construction procedure that enables navigation between selected initial and final instances. Preliminary experiments on small-scale instances suggest that the instance space is remarkably smooth, with global optima often remaining identical or closely related throughout the transitions. Although these observations are obtained on the space of the instance parameters, they extend naturally to the corresponding space of Walsh coefficients. Finally, we discuss potential applications of STICs to algorithm design.`,
    },
    {
      id: "verel",
      speaker: "Sébastien Verel",
      title: "Fourier analysis of combinatorial real-world problems: methodology, and possible perspectives",
      abstract: `Classical Fourier based on trigonometric functions is a powerful tool in signal processing to analyze different phenomena in different domains (digital image processing, option pricing, acoustics, oceanography, sonar, seismology, etc.). The amplitude of the frequency spectrum can be interpreted by experts, and the Fourier decomposition itself can simplify analysis of different equations.

Harmonic/Fourier analysis can be extended to functions over finite groups. The definition, and interpretation of the amplitudes, and the frequencies must be adapted to the group representation. We illustrated how harmonics can be used for two real-world optimization problems: one based on binary decision variables, the bus stop positioning problem, and one optimization problem based on permutation encoding, the repositioning plan optimization problem in nuclear systems. In addition to the interpretation of harmonic analysis of the problem, we discuss the possible use of the Fourier transform for combinatorial optimization.`,
    },
    {
      id: "chicano",
      speaker: "Francisco Chicano",
      title: "Generalizing and Unifying Gray-Box Combinatorial Optimization Operators: the role of Fourier Transforms",
      abstract: `Gray-box optimization leverages the information available about the mathematical structure of an optimization problem to design efficient search operators. Efficient hill climbers and crossover operators have been proposed in the domain of pseudo-Boolean optimization and also in some permutation problems. However, there is no general rule on how to design these efficient operators in different representation domains. In this talk we present a general framework that encompasses all known gray-box operators for combinatorial optimization problems. The framework is general enough to shed light on the design of new efficient operators for new problems and representation domains. We also show how Fourier Transforms can be used to identify moves that help design efficient operators.`,
    },
    {
      id: "hernando",
      speaker: "Leticia Hernando",
      title: "From instance decomposition to fitness landscapes in permutation-based combinatorial optimization through Fourier Analysis",
      abstract: `In this talk, I will focus on combinatorial optimization problems defined over permutations. I will first present a Fourier-based decomposition of instances of the k-adic Assignment Problem, a general framework that includes well-known problems such as the QAP, the LOP and the TSP. Building on this decomposition, I will present two different lines of work. On the one hand, I will introduce a couple of algorithms specifically developed for the LOP. On the other hand, I will present an instance generator that allows us to control the difficulty of local search algorithms through the Fourier coefficients. This control is experimentally validated by analyzing the performance of local search methods on the generated instances.

Motivated by this observation, I will then turn to a more theoretical question: how does the Fourier representation of an instance determine the maximum possible number of local optima? The idea is to address this question by considering functions defined by Fourier coefficients of increasing order. Starting with functions involving only first-order coefficients, i.e., linear functions, I will present properties of the corresponding irreducible representations when using the Specht basis and analyze the sign of the function difference (delta function) associated with a number of swaps, which yields a direct bound on the number of local optima. These results provide a step towards understanding the relationship between the Fourier structure of an instance and its local-optima landscape.`,
    },
    {
      id: "santana",
      speaker: "Roberto Santana",
      title: "Factorizations of Permutation Probability Distributions for EDAs: Approximations Based on Fourier Decompositions",
      abstract: `Given a combinatorial problem with permutation representation, probability distributions can be defined in different ways with respect to the objective function (e.g., proportional, Boltzmann, linear ranking, etc.). In EDA approaches to permutation problems, a variety of probability models of permutations have been proposed.

In this talk, we discuss the relationship between Fourier decomposition of problems with permutation representation and factorized approximations of related search distributions in the context of EDAs for single- and multi-objective problems. We also briefly discuss an alternative representation for factorized distributions and a practical protein-structure search problem with particular interactions admitting a permutation-based representation.`,
    },
    {
      id: "lozano",
      speaker: "José A. Lozano",
      title: "Rankings in Combinatorial Optimization: A Fourier Perspective",
      abstract: `Many combinatorial optimization algorithms do not use the actual values of an objective function, but only the ranking it induces over the search space. In fact, a large class of metaheuristic algorithms behaves in exactly the same way for any two functions that induce the same ordering of solutions. This raises a natural question: what can we learn from the structure of these rankings?

In this talk, I will explore this question in the context of pseudo-Boolean functions and show how ideas from Fourier analysis can provide a useful framework for studying rankings. In particular, I will discuss how classical results from threshold function analysis, including Chow's theorem, can be translated into the setting of rankings. I will then look at the spectral properties of several important classes of rankings and how these properties are connected to the functions that generate them.

Finally, I will discuss how this perspective can be extended beyond binary search spaces to permutation-based optimization problems. The overall goal is to introduce a new way of looking at combinatorial optimization landscapes—through the structure and spectrum of the rankings they induce—and to explore how this viewpoint may help us better understand and develop optimization algorithms.`,
    },
  ],

  /* ---------- How to get there ---------- */
  directions: {
    intro: "The School of Computer Science and Engineering is on the Teatinos Campus, about 6 km west of the city centre. The easiest way to get there is Metro Line 1, with no changes.",

    // Stops of Metro Line 1 from the city centre. Items with `key: true` are highlighted.
    stops: [
      { name: "Atarazanas", key: true, note: "Alameda Principal · city centre (start)" },
      { name: "Guadalmedina", note: "" },
      { name: "El Perchel", note: "María Zambrano train station" },
      { name: "La Unión" },
      { name: "Barbarela" },
      { name: "Carranque" },
      { name: "Portada Alta" },
      { name: "Ciudad de la Justicia" },
      { name: "Universidad" },
      { name: "Clínico", key: true, note: "Get off here" },
    ],
    stopsFootnote: "Direction: Andalucía Tech",

    // HTML is allowed in `text` (e.g. <strong>…</strong>).
    steps: [
      { title: "Get to a Line 1 station",
        text: "From the city centre, the closest stations are <strong>Atarazanas</strong> (next to Alameda Principal) and <strong>Guadalmedina</strong>. From the María Zambrano train station, use <strong>El Perchel</strong>." },
      { title: "Take Line 1 towards “Andalucía Tech”",
        text: "Trains run every 7–12 minutes. From Atarazanas, <strong>no transfer is needed</strong>." },
      { title: "Get off at “Clínico”",
        text: "It is the 9th stop after Atarazanas, roughly 20 minutes of travel." },
      { title: "Walk to the School",
        text: "From Clínico, the School is a very short walk to <strong>Bulevar Louis Pasteur</strong>, a few minutes at most. Ask for the <strong>Sala de Grados C</strong> at the entrance." },
    ],

    tips: [
      "Tickets can be bought at the vending machines in every station (cash or card).",
      "Metro hours: Mon–Thu 6:30–23:00 · Fri 6:30–1:30 · Sat 7:00–1:30 · Sun 7:00–23:00. Please check the operator’s website for changes.",
      "Alternatives: city bus line 11 to “Bulevar Louis Pasteur”, or a taxi (about €7 from the centre).",
    ],
    metroWebsite: "https://www.metromalaga.es",
  },

  /* ---------- Footer ---------- */
  footer: "Fourier Workshop · Universidad de Málaga · 1–2 October 2026",
};