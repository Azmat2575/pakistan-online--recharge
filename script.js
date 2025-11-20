const packages = [
  {"network":"jazz","code":"J-D1","title":"Jazz Daily Social – 1.5 GB","price":"30","validity":"1 Day"},
  {"network":"jazz","code":"J-D2","title":"Jazz Daily Mega – 1 GB","price":"25","validity":"1 Day"},
  {"network":"jazz","code":"J-7W1","title":"Jazz Weekly Super Max – 30 GB + 6000 Jazz mins","price":"347","validity":"7 Days"},
  {"network":"jazz","code":"J-M1","title":"Jazz Monthly Supreme – 24 GB (12 GB 2AM–2PM)","price":"699","validity":"30 Days"},
  {"network":"zong","code":"Z-D1","title":"Zong Daily Basic – 100 MB","price":"15","validity":"1 Day"},
  {"network":"zong","code":"Z-M4","title":"Zong MBB Monthly 200 GB","price":"3300","validity":"30 Days"},
  {"network":"telenor","code":"T-D1","title":"Telenor Daily Social – 500 MB","price":"8","validity":"1 Day"},
  {"network":"ufone","code":"U-M2","title":"Ufone Super Card Plus – 80 GB + other benefits","price":"1799","validity":"30 Days"}
  // مزید 200+ packages آپ packages.json سے load کریں گے
];

function populatePackageList(){
  const list = document.getElementById('packageList');
  list.innerHTML = '';
  packages.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card small';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.price} PKR</p><button data-id="${p.code}">Order</button>`;
    list.appendChild(card);
  });
}

function populateSelect(){
  const sel = document.getElementById('package');
  sel.innerHTML = '';
  packages.forEach(p=>{
    const opt = document.createElement('option');
    opt.value = p.code;
    opt.textContent = `${p.title} — ${p.price} PKR`;
    sel.appendChild(opt);
  });
}

function whatsappLink(number, text){
  const clean = number.replace(/\D/g,'');
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

document.addEventListener('DOMContentLoaded',()=>{
  populatePackageList();
  populateSelect();

  const waNumber = '+966541462412';
  document.getElementById('whatsapp-link').href = whatsappLink(waNumber, 'Hello I want to order a recharge');
  document.getElementById('whatsapp-footer').href = whatsappLink(waNumber, 'Hello from website');

  document.getElementById('orderForm').addEventListener('submit', e=>{
    e.preventDefault();
    const net = document.getElementById('network').value;
    const pkg = document.getElementById('package').value;
    const msisdn = document.getElementById('msisdn').value;
    const country = document.getElementById('country').value || '';

    const pkgObj = packages.find(p=>p.code===pkg);
    const message = `Order Request\nWebsite: Pakistan Online Recharge\nNetwork: ${net}\nPackage: ${pkgObj.title}\nMobile: ${msisdn}\nPayment: (choose method)\nCountry: ${country}`;
    window.open(whatsappLink('+966541462412', message), '_blank');
  });
});
