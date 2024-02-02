async function getData() {
const response = await fetch('https://api.mcsrvstat.us/3/yeet.minecra.fr')
const json = await response.json();

console.log(JSON.stringify(json));

getData()
}
// test commit