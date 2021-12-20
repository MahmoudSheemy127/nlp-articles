export const updateDom = (analysis) => {
    const result = document.getElementById("result");
    if(analysis.code != 0)
    {
        result.innerText = 'Unable to analyze content';
    }
    else
    {
        result.innerText = `Your article sounds ${Client.CheckPolarity(analysis.polarity)} , ${analysis.subjectivity.toLowerCase()} and ${analysis.irony.toLowerCase()}`
    }
}