let b_calc = document.getElementById('b_calc')

let simpleInterest = (principal,years,rate) => {
    let per_month = ((principal * rate) / 100 ) / 12
    let marturity_amount =  Math.round((per_month * 12 * years),2);

    return {
      p_month: per_month,
      m_amount: marturity_amount,
    };
}

b_calc.addEventListener('click', () => {

    let p_amount = parseFloat(document.getElementById("p_amount").value);
    let i_rate = parseFloat(document.getElementById("i_rate").value);
    let years = parseFloat(document.getElementById("years").value);

    let result = simpleInterest(p_amount, years, i_rate);

    document.getElementById('p_month').textContent = result.p_month
    document.getElementById("m_amount").textContent = result.m_amount;
})

