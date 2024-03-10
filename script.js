
const form = document.querySelector('#mainForm');
form.addEventListener('submit' , async (event) => {
	event.preventDefault();
	
	const userInput = document.querySelector('#search-input').value;
	// const results = data.results;


	const url = `https://image-search19.p.rapidapi.com/v2/?q=${userInput}&hl=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2467837aa3msh54954ddd7c7dca8p1a38c1jsn24c1e3059346',
		'X-RapidAPI-Host': 'image-search19.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result.response.images);
    const mainResult =result.response;
	console.log(mainResult)
	document.querySelector('#result').innerHTML=`
	<img src=${mainResult.images[0].image.url} alt='image not load' height=50px>
	<img src=${mainResult.images[1].image.url} alt='image not load'>
	<img src=${mainResult.images[2].image.url} alt='image not load'>
	<img src=${mainResult.images[3].image.url} alt='image not load'>
	<img src=${mainResult.images[4].image.url} alt='image not load'>
	`

	



} catch (error) {
	console.error(error);
}

})