var n = 100,s = 0, k
var txt ='1<sup>2</sup> + 2<sup>2</sup> + ... +'
txt += n + '<sup>2</sup> = '
// Cikla operators:
for(k=1; k <= n; k ++){
s += k*k
}
document.write(txt+s)