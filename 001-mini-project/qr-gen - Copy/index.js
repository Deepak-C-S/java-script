document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('qr-form');
  const input = document.getElementById('website');
  const sizeInput = document.getElementById('size');
  const sizeValue = document.getElementById('size-value');
  const dotStyle = document.getElementById('dot-style');
  const cornerStyle = document.getElementById('corner-style');
  const fgColor = document.getElementById('fg-color');
  const bgColor = document.getElementById('bg-color');
  const marginInput = document.getElementById('margin');
  const logoInput = document.getElementById('logo-input');
  const downloadBtn = document.getElementById('download-btn');
  const downloadSvgBtn = document.getElementById('download-svg-btn');
  const qrcodeWrapper = document.getElementById('qrcode-wrapper');

  let logoDataUrl = '';

  // instantiate QRCodeStyling
  const qrCode = new QRCodeStyling({
    width: Number(sizeInput.value),
    height: Number(sizeInput.value),
    data: input.value || 'https://example.com',
    image: undefined,
    margin: Number(marginInput.value),
    dotsOptions: { color: fgColor.value, type: dotStyle.value },
    cornersSquareOptions: { type: cornerStyle.value },
    backgroundOptions: { color: bgColor.value },
  });

  qrCode.append(document.getElementById('qrcode'));

  function updateBorder() {
    const bw = Number(document.getElementById('border-width').value || 0);
    const br = Number(document.getElementById('border-radius').value || 0);
    const bc = document.getElementById('border-color').value || '#000';
    qrcodeWrapper.style.border = bw > 0 ? `${bw}px solid ${bc}` : 'none';
    qrcodeWrapper.style.borderRadius = `${br}px`;
  }

  function updateQRCode(e) {
    if (e && e.preventDefault) e.preventDefault();
    const size = Number(sizeInput.value);
    sizeValue.textContent = String(size);
    const data = input.value.trim() || 'https://example.com';

    qrCode.update({
      width: size,
      height: size,
      data,
      image: logoDataUrl || undefined,
      margin: Number(marginInput.value),
      dotsOptions: { color: fgColor.value, type: dotStyle.value },
      cornersSquareOptions: { type: cornerStyle.value },
      backgroundOptions: { color: bgColor.value },
    });

    updateBorder();
  }

  // logo upload
  logoInput.addEventListener('change', (ev) => {
    const f = ev.target.files && ev.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      logoDataUrl = reader.result;
      updateQRCode();
    };
    reader.readAsDataURL(f);
  });

  // controls
  form.addEventListener('submit', updateQRCode);
  sizeInput.addEventListener('input', updateQRCode);
  dotStyle.addEventListener('change', updateQRCode);
  cornerStyle.addEventListener('change', updateQRCode);
  fgColor.addEventListener('input', updateQRCode);
  bgColor.addEventListener('input', updateQRCode);
  marginInput.addEventListener('input', updateQRCode);
  document.getElementById('border-width').addEventListener('input', updateBorder);
  document.getElementById('border-radius').addEventListener('input', updateBorder);
  document.getElementById('border-color').addEventListener('input', updateBorder);

  downloadBtn.addEventListener('click', () => {
    qrCode.download({ extension: 'png' });
  });

  downloadSvgBtn.addEventListener('click', () => {
    qrCode.download({ extension: 'svg' });
  });

  // initial render
  updateQRCode();
});