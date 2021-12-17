export const updateDom = (analysis) => {
    const result = document.getElementById("result");
    result.innerText = `Your article sounds ${Client.CheckPolarity(analysis.polarity)} , ${analysis.subjectivity.toLowerCase()} and ${analysis.irony.toLowerCase()}`
}