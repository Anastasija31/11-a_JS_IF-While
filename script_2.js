var txt, name, msg
txt = 'Kā Jūs sauc?'
name = prompt(txt)
if (name==''){
  document.write('Diemžēl Jūs nenosaucāt savu vārdu...')
}
msg = 'Prieks iepazīties, '+ name +'!'
document.write(msg)

