//zim the file

// const fs= require("fs")
// const zlib= require("zlib")
// const gzip=zlib.createGzip();

// const readmyfile=fs.createReadStream(__dirname+ '/berry.txt');

// const compressed= fs.createWriteStream(__dirname+ '/berry.txt.gz');

// readmyfile.pipe(gzip).pipe(compressed);


// unzip the file

const fs= require("fs")
const zlib= require("zlib")
const gzip=zlib.createGunzip();

const readmyfile=fs.createReadStream(__dirname+ '/berry.txt.gz');

const extracted= fs.createWriteStream(__dirname+ '/berry1.txt');

readmyfile.pipe(gzip).pipe(extracted);
