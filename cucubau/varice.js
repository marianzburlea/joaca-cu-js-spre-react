const titlurileDinHead = ['Nume', 'Vointa', 'Zambet', 'Oras', 'Intrument']

let globalNumber = 0

const aacf = document.querySelector('.acum-apare-ceva-frumos')
const aacsmb = document.querySelector('.acum-apare-ceva-si-mai-bengos')

const oAltaFunctieSmechera = (tdh, bodyData, container) => {
  // vrem sa mai adaugam un header de tabel si un body cu multe informatii

  const tabel = document.createElement('table')
  globalNumber++
  tabel.style.border = '15px solid pink'

  const thead = document.createElement('thead') // -> <thead></thead>
  globalNumber++
  const tbody = document.createElement('tbody') // -> <tbody></tbody>
  globalNumber++
  
  // const titlurileDinHeadFinal = [ '<th>Nume</th>', '<th>Vointa</th>', '<th>Zambet</th>', '<th>Oras</th>', '<th>intrument</th>', ]
  
  const trDinThead = document.createElement('tr')
  globalNumber++
  thead.appendChild(trDinThead)
  globalNumber++
  
  // functia asta se cheama de fiecare data pentru orice element din colectia titlurileDinHead
  const oFunctiePrimesteMap = (fiecareValoarePeRand) => {
    const thDinThead = document.createElement('th')
    globalNumber++
    thDinThead.textContent = fiecareValoarePeRand
    trDinThead.appendChild(thDinThead)
    globalNumber++
  }
  
  const copiiiLuiHead = tdh.map(oFunctiePrimesteMap)
  
  bodyData.forEach(
    (ssss) => {
      const tr = document.createElement('tr')
      globalNumber++
      
      const i = document.createElement('td')
      globalNumber++
      i.innerText = ssss.instrument
      globalNumber++
      tr.appendChild(i)
      globalNumber++
      
      const n = document.createElement('td')
      globalNumber++
      n.innerText = ssss.nume
      globalNumber++
      tr.appendChild(n)
      globalNumber++
      
      const o = document.createElement('td')
      globalNumber++
      o.innerText = ssss.oras
      globalNumber++
      tr.appendChild(o)
      globalNumber++
      
      const v = document.createElement('td')
      globalNumber++
      v.innerText = ssss.vointa
      globalNumber++
      tr.appendChild(v)
      globalNumber++
      
      const z = document.createElement('td')
      globalNumber++
      z.innerText = ssss.zambet
      globalNumber++
      tr.appendChild(z)
      globalNumber++
      
      tbody.appendChild(tr)
      globalNumber++
      
      // return dsasdas
    }
    )
    
    tabel.appendChild(thead)
    globalNumber++
    tabel.appendChild(tbody)
    globalNumber++
    
    container.appendChild(tabel)
    globalNumber++
}
oAltaFunctieSmechera(titlurileDinHead, dateleMeleNumaiDeEleImiEDusmaniiFrica, aacf)

const noiDate = dateleMeleNumaiDeEleImiEDusmaniiFrica
noiDate[1].zambet = 'mere'
console.log(noiDate)

oAltaFunctieSmechera(titlurileDinHead, noiDate, aacsmb)

console.log('globalNumber')
console.log(globalNumber)

