const canaryPhrases = [
    "¡Arráyate un millo!",
    "Arranca la penca",
    "Cambarte la peluca",
    "El conejo me riscó la perra",
    "Ay, ¡que me desalo!",
    "Se me fue el baifo",
    "¡Fuerte Calufo!",
    "Fuerte pelete!",
    "Eres un machango"
];

const randomCanary = () => {
    const phrase = canaryPhrases[Math.floor(Math.random() * canaryPhrases.length)];
    console.log(phrase);
};

module.export = { randomCanary };